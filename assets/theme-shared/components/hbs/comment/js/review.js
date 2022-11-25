window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/comment/js/review.js'] = window.SLM['theme-shared/components/hbs/comment/js/review.js'] || function () {
  const _exports = {};
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const Upload = window['SLM']['theme-shared/components/hbs/shared/components/upload/index.js'].default;
  const { ValidateTrigger } = window['SLM']['theme-shared/utils/form/form.js'];
  const uuid = window['SLM']['theme-shared/components/hbs/comment/js/uuid.js'].default;
  const { replaceEmoji, testEmoji } = window['SLM']['theme-shared/components/hbs/comment/js/utils.js'];
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const RateYo = window['SLM']['theme-shared/components/hbs/shared/components/rate/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];

  function refreshPage() {
    location.reload();
  }

  const createTemplate = option => {
    const {
      id
    } = option;
    const template = `
    <div id="${id}" class="product-comment-review body-font"> 
      <div class="comment-form-item comment-form-item-rate">
        <span class="comment-form-rate-name">${t('products.comment.ratings')}</span>
        <div class="productCommentRate"></div>
      </div>
      <div class="comment-form-item" sl-form-item-name="content">
        <div class="product_input" style="height:140px;">
          <div class="product_input-area product_input-area--textarea">
            <textarea style="resize:none" name="content" placeholder="${t('products.comment.write_a_review_for_the_product')}" autocomplete="off"></textarea>
            <span class="product_input-area__length">
              <span class="product_input-area__length__value">0</span>
              /1000
            </span>
          </div>
        </div>
      </div>
      <div class="comment-form-item productCommentUpload">
        <div class="comment-file-title"> 
          <span>${t('products.comment.add_an_image')}</span> 
          <span class="comment-file__length">
            ${t('products.comment.maximum_image_quantity', {
      total: 9
    })}
            (<span class="comment-file__length__value">0</span>/9)
          </span>
        </div>
        <div class="comment-form-file-box"></div>
      </div>
      <div class="comment-form-item">
        <button class="btn btn-primary btn-lg product-comment-btn">
          ${t('products.comment.write_a_review')}
        </button>
      </div>
    </div>
    `;
    return template;
  };

  const defaultOption = {};

  class Review {
    constructor(option = {}) {
      this.option = { ...defaultOption,
        id: 'form_id_' + uuid(16, 16),
        ...option
      };
      this.$dom = null;
      this.form = null;
      this.rate = null;
      this.upload = null;
      this.init();
    }

    init() {
      this.render();
      this.initForm();
      this.initEvent();
    }

    initForm() {
      this.form = Form.takeForm(this.option.id);
      this.form.init({
        validateTrigger: ValidateTrigger.ONNATIVECHANGE
      });
      this.initFormRule();
      const rate = this.$dom.find('.productCommentRate');
      this.rate = RateYo(rate, {
        starWidth: '20px',
        normalFill: '#A0A0A0',
        ratedFill: '#E74C3C',
        rating: 5,
        fullStar: true,
        minValue: 1,
        spacing: '4px',
        starSvg: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.05163 0.908493C9.23504 0.53687 9.76496 0.53687 9.94837 0.908493L12.3226 5.71919C12.3954 5.86677 12.5362 5.96905 12.6991 5.99271L18.008 6.76415C18.4181 6.82374 18.5818 7.32772 18.2851 7.61699L14.4435 11.3616C14.3257 11.4765 14.2719 11.642 14.2997 11.8042L15.2066 17.0916C15.2766 17.5001 14.8479 17.8116 14.4811 17.6187L9.73267 15.1223C9.58701 15.0457 9.41299 15.0457 9.26733 15.1223L4.51888 17.6187C4.15207 17.8116 3.72335 17.5001 3.79341 17.0916L4.70028 11.8042C4.7281 11.642 4.67433 11.4765 4.55648 11.3616L0.71491 7.61699C0.418151 7.32772 0.581906 6.82374 0.992017 6.76415L6.30094 5.99271C6.4638 5.96905 6.60458 5.86677 6.67741 5.71919L9.05163 0.908493Z" fill="currentColor"/>
      </svg>
      `
      });
      const $fromDiv = this.$dom.find('.comment-form-file-box');
      this.upload = new Upload({
        el: $fromDiv,
        maxCount: 9,
        maxFileLength: 2 * 1024 * 1024,
        accept: 'image/jpg,image/jpeg,image/png,image/bmp',

        onFileBeforeUploadError(e) {
          let msg = '';

          switch (e) {
            case '10':
              msg = t('products.comment.only_supports__image_format');
              break;

            case '01':
              msg = t('products.comment.maximum_image_size', {
                size: 2
              });
              break;

            case '11':
              msg = t('products.comment.only_supports__image_format') + '、' + t('products.comment.maximum_image_size', {
                size: 2
              });
              break;
          }

          Toast.init({
            content: msg,
            duration: 3000
          });
        },

        onFileUploadError(e) {},

        onChange: fileList => {
          this.$dom.find('.comment-file__length__value').text(fileList.length);
        }
      });
    }

    initFormRule(form = this.form) {
      form.setFields([{
        name: 'content',
        value: '',
        rules: [{
          required: true,
          message: t('products.comment.enter_at_least_one_character'),
          pattern: /^(?!(\s+$))/
        }]
      }]);
    }

    initEvent() {
      this.$dom.find('.product-comment-btn').on('click', () => {
        this.handleSubmit();
      });
      this.form.on('valuesChange', e => {
        let {
          changedValue: {
            content: value
          }
        } = e;
        let isChange = false;

        if (testEmoji(value)) {
          value = replaceEmoji(value);
          isChange = true;
        }

        if (value.length > 1000) {
          value = value.substring(0, 1000);
          isChange = true;
        }

        if (isChange) {
          this.form.setFields([{
            name: 'content',
            value
          }]);
        }

        this.$dom.find('[sl-form-item-name="content"]').find('.product_input-area__length__value').text(value && value.length || 0);
      });
    }

    checkIsUpload() {
      if (this.upload && this.upload.onLoading) {
        Toast.init({
          content: t('products.comment.image_uploading'),
          duration: 3000
        });
        return true;
      }

      return false;
    }

    async handleSubmit({
      success,
      error,
      beforePost
    } = {}) {
      const validate = await this.form.validateFields();
      const value = this.form.getFieldsValue();
      let {
        content
      } = value;
      content = content.trim();
      const score = this.rate.rating();

      if (validate.pass && score > 0) {
        if (this.checkIsUpload()) return;
        const imageList = this.upload && this.upload.fileList && this.upload.fileList.map(item => {
          return item.url;
        }) || [];
        const postData = {
          content,
          score,
          imageList: imageList,
          productId: SL_State.get('productComment.spuSeq'),
          countryCode: SL_State.get('request.cookie.country_code') || 'US'
        };
        beforePost && beforePost();
        this.$dom.find('.product-comment-btn').addClass('disabled').attr('disabled', true);
        request.post('/product/detail/comment/create', postData).then(() => {
          success && success();
          Toast.init({
            content: t('products.comment.thanks_for_your_review'),
            duration: 1000
          });
          setTimeout(() => {
            refreshPage();
          }, 1000);
        }, e => {
          error && error();
          this.$dom.find('.product-comment-btn').removeClass('disabled').attr('disabled', false);

          if (e && e.code === 'EPD1001') {
            Toast.init({
              content: t('products.comment.didnot_bought_cannot_reviewed'),
              duration: 3000
            });
          } else {
            Toast.init({
              content: t('products.comment.error_submit_again'),
              duration: 3000
            });
          }
        });
      }
    }

    render() {
      const template = createTemplate(this.option);
      this.$dom = $(template);

      if (this.option.ele) {
        $(this.option.ele).append(this.$dom);
      }
    }

  }

  _exports.default = Review;
  return _exports;
}();