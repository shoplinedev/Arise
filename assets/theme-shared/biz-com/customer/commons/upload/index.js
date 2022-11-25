window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/upload/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/upload/index.js'] || function () {
  const _exports = {};
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { SlAliyunOss } = window['@yy/sl-http-upload'];
  const { filterImages } = window['SLM']['theme-shared/biz-com/customer/commons/upload/fileFilter.js'];

  class Upload {
    constructor({
      id,
      onSuccess,
      onError,
      maxSize = 4,
      maxNum = 1
    }) {
      this.ossClient = null;
      this.loading = false;
      this.id = id;
      this.onSuccess = onSuccess;
      this.onError = onError;
      this.curNum = 0;
      this.maxNum = maxNum;
      this.maxSize = maxSize;
      this.$input = $(`#${this.id}`).find('input[type="file"]');
      this.$loading = $(`#${this.id}`).find('.sl-upload__loading');
      this.$picIcon = $(`#${this.id}`).find('.sl-upload__input');
      this.init();
    }

    init() {
      this.initOss();
      this.initEvent();
    }

    setLoading(loading) {
      this.loading = loading;

      if (loading) {
        this.$loading.show();
        this.$picIcon.hide();
      } else {
        this.$loading.hide();
        this.$picIcon.show();
      }
    }

    initOss() {
      this.ossClient = new SlAliyunOss({
        businessType: 'userMessage',
        fileType: 'IMAGE',
        client: 'shopline-app'
      });
    }

    initEvent() {
      this.$input.on('change', async e => {
        const {
          curNum,
          maxNum,
          maxSize
        } = this;
        let files = filterImages(Array.from(e.target.files));

        if (files.length === 0) {
          return;
        }

        if (files.length + curNum > maxNum) {
          Toast.init({
            content: t('customer.general.max_image_upload_tips', {
              max: maxNum
            })
          });
          e.target.value = '';
          return;
        }

        if (maxSize && files.some(file => file.size > maxSize * 1024 * 1024)) {
          Toast.init({
            content: t('customer.general.image_size_less_than_tips', {
              max: maxSize
            })
          });
          files = files.filter(file => file.size < maxSize * 1024 * 1024);
          const hasCanUploadImage = files.some(file => file.size <= maxSize * 1024 * 1024);

          if (!hasCanUploadImage) {
            return;
          }
        }

        e.target.value = '';
        const tmpFileList = files.map(file => {
          file.uid = Date.now();
          return {
            file
          };
        });
        this.setLoading(true);

        try {
          const res = await this.ossClient.upload({
            fileList: tmpFileList
          });
          const successList = [];
          const failList = [];
          res.forEach(item => {
            if (item.data && item.data[0] && item.data[0].success) {
              successList.push(item && item.data && item.data[0] && item.data[0].url);
            } else {
              failList.push({
                fileName: item && item.data && item.data[0] && item.data[0].filename
              });
            }
          });

          if (successList.length) {
            this.onSuccess && this.onSuccess(successList);
          }

          if (failList.length) {
            this.onError && this.onError(failList);
          }
        } catch (e) {
          this.onError && this.onError(e);
        } finally {
          this.setLoading(false);
        }
      });
    }

  }

  _exports.default = Upload;
  return _exports;
}();