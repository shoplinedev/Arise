window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/confirm/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/confirm/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];

  const createTemplate = (option = {}) => {
    const {
      content,
      id,
      cancelName,
      okName
    } = option;
    return `
    <div ${id ? `id='${id}'` : ''} class="comment-confirm__wrapper">
        <div class="comment-confirm__mask"></div>
        <div class="comment-confirm__container">
            <div class="comment-confirm__body">
                <div class="comment-confirm__title">
                ${content}
                </div>
                <div class="comment-confirm__btns">
                    <div class="comment-confirm__btn comment-confirm__btn--cancel">${cancelName}</div>
                    <div class="comment-confirm__btn comment-confirm__btn--ok">${okName}</div>
                </div>
            </div>
        </div>
    </div>
 
    `;
  };

  const defaultOption = {
    cancelName: t('products.product_details.cancel'),
    okName: t('customer.general.okay_common'),
    okCallback: () => {}
  };

  class Confirm {
    constructor(option = {}) {
      const cancelCallback = () => {
        this.cancel();
      };

      this.$dom = null;
      this.option = { ...defaultOption,
        cancelCallback,
        ...option
      };
      this.init();
    }

    init() {
      this.render();
      this.initEvent();
    }

    initEvent() {
      this.$dom.find('.comment-confirm__btn--cancel').on('click', () => {
        this.option.cancelCallback();
      });
      this.$dom.find('.comment-confirm__btn--ok').on('click', () => {
        const notClose = this.option.okCallback();

        if (notClose !== false) {
          this.cancel();
        }
      });
    }

    cancel() {
      this.$dom.remove();
      $('body').removeClass('comment-confirm-body-overflow-hidden');
    }

    render() {
      const template = createTemplate(this.option);
      this.$dom = $(template);
      $('body').append(this.$dom);
      $('body').addClass('comment-confirm-body-overflow-hidden');
    }

  }

  _exports.default = Confirm;
  return _exports;
}();