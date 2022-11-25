window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/upload/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/upload/index.js'] || function () {
  const _exports = {};
  const { SlAliyunOss } = window['@yy/sl-http-upload'];

  function uuid(len, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = [];
    let i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  }

  const defaultOption = {
    maxCount: 10,
    maxFileLength: 2 * 1024 * 1024,
    accept: 'image/*',
    multiple: true,
    needDelete: true,
    onFileBeforeUploadError: errCode => {},
    beforeUpload: newFileList => {
      return true;
    },
    onChange: fileList => {},
    onRemove: (file, fileList) => {},
    onFileUploadError: e => {},
    ossClientOption: {
      businessType: 'orderComment',
      fileType: 'IMAGE',
      client: 'shopline-app',
      signUrl: '/api/signature/post/sign'
    }
  };

  const createTemplate = option => {
    const {
      accept,
      multiple
    } = option;
    return `
        <div class="product-upload-plugin">
          <div class="product-upload__main">
            <div class="product-upload__items">
              
            </div>
            <div class="product-upload__item--row">
              <div class="product-upload__item product-upload__btn--add">
                <div class="animation-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2" stroke="currentColor" stroke-width="3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <input type="file" 
            class="product-upload-input"
            style="display:none;"
            type="file"
            accept="${accept}"
            multiple="${multiple}"
          />
        </div>
    `;
  };

  const createFileItemTemplate = (fileUrl, index, option) => {
    const {
      needDelete
    } = option;
    return `
    <div class="product-upload__item--row">
      <div class="product-upload__item" data-index='${index}'>
        <img class="product-upload__item__img" src="${fileUrl}">
        ${needDelete ? `<div class="product-upload__item__btn--delete">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L5 11" stroke="currentColor" stroke-width="1.5"/>
            <path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>` : ''} 
      </div>
    </div>
  `;
  };

  class Upload {
    constructor(option = {}) {
      this.option = { ...defaultOption,
        ...option
      };
      this.fileList = [];
      this.$dom = null;
      this.$fileInput = null;
      this.$fileLists = null;
      this.$fileAddBtn = null;
      this.ossClient = null;
      this.onLoading = false;
      this.render();
      this.initOss();
      this.bindEvent();
    }

    get fileLength() {
      return this.fileList.length;
    }

    showFiles() {
      let html = '';
      this.fileList.forEach((item, index) => {
        html += createFileItemTemplate(item.url, index, this.option);
      });
      this.$fileLists.empty().append($(html));
    }

    uploadFiles(files) {
      let length = files.length;
      let errCode = '';
      let fileList = Array.prototype.slice.call(files).filter(file => {
        return this.attrAccept(file, this.option.accept);
      });
      errCode += fileList.length < length ? '1' : '0';
      length = fileList.length;
      fileList = fileList.filter(item => item.size <= this.option.maxFileLength);
      errCode += fileList.length < length ? '1' : '0';

      if (fileList.length + this.fileLength > this.option.maxCount) {
        fileList = fileList.slice(0, this.option.maxCount - this.fileLength);
      }

      this.showError(errCode);
      fileList.length && this.postFilesToOss(fileList);
    }

    showError(errCode) {
      if (errCode !== '00' && this.option.onFileBeforeUploadError) {
        this.option.onFileBeforeUploadError(errCode);
      }
    }

    postFilesToOss(fileList) {
      this.activeAddBnt();
      this.onLoading = true;
      this.ossClient.initOSSData(fileList).then(() => {
        return this.ossClient.upload({
          fileList: fileList.map(item => {
            item.fid = uuid();
            return {
              file: item
            };
          })
        });
      }).then(e => {
        const list = e && e.map(item => {
          return item.data[0];
        }).filter(item => !!item.url) || [];
        this.fileList.push(...list);

        if (typeof this.option.onChange === 'function') {
          this.option.onChange(this.fileList.slice());
        }

        this.showFiles();
        this.changeAddBtnDisplay();
      }, e => {
        this.option.onFileUploadError(e);
      }).finally(() => {
        this.unActiveAddBtn();
        this.onLoading = false;
      });
    }

    attrAccept(file, acceptedFiles) {
      if (file && acceptedFiles) {
        const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
        const fileName = `${file.name}`;
        const mimeType = `${file.type}`;
        const baseMimeType = mimeType.replace(/\/.*$/, '');
        return acceptedFilesArray.some(type => {
          const validType = type.trim();

          if (validType.charAt(0) === '.') {
            return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
          } else if (/\/\*$/.test(validType)) {
            return baseMimeType === validType.replace(/\/.*$/, '');
          }

          return mimeType === validType;
        });
      }

      return true;
    }

    showAddBtn() {
      this.$fileAddBtn.show();
    }

    hideAddBtn() {
      this.$fileAddBtn.hide();
    }

    changeAddBtnDisplay() {
      if (this.fileLength >= this.option.maxCount) {
        this.hideAddBtn();
      } else {
        this.showAddBtn();
      }
    }

    activeAddBnt() {
      this.$fileAddBtn.addClass('upload-ing').css('pointer-events', 'none');
    }

    unActiveAddBtn() {
      this.$fileAddBtn.removeClass('upload-ing').css('pointer-events', '');
    }

    bindEvent() {
      this.$fileInput.on('change', e => {
        const files = e.target.files;
        this.uploadFiles(files);
        e.target.value = '';
      });
      this.$fileAddBtn.on('click', () => {
        this.$fileInput[0].click();
      });
      this.$fileLists.on('click', '.product-upload__item .product-upload__item__btn--delete', e => {
        const parent = $(e.currentTarget).parents('.product-upload__item');
        const index = parent.attr('data-index');
        const deleteItem = this.fileList.splice(index, 1);

        if (typeof this.option.onRemove === 'function') {
          this.option.onRemove(deleteItem, this.fileList.slice());
        }

        if (typeof this.option.onChange === 'function') {
          this.option.onChange(this.fileList.slice());
        }

        this.changeAddBtnDisplay();
        this.showFiles();
      });
    }

    initOss() {
      this.ossClient = new SlAliyunOss({ ...this.option.ossClientOption
      });
    }

    render() {
      const template = createTemplate(this.option);
      this.$dom = $(template);
      this.$fileInput = this.$dom.find('.product-upload-input');
      this.$fileLists = this.$dom.find('.product-upload__items');
      this.$fileAddBtn = this.$dom.find('.product-upload__btn--add');

      if (this.option.el) {
        $(this.option.el).append(this.$dom);
      }
    }

  }

  _exports.default = Upload;
  return _exports;
}();