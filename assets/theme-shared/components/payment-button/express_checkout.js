window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/express_checkout.js'] = window.SLM['theme-shared/components/payment-button/express_checkout.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { createExpressCheckoutBtn } = window['SLM']['theme-shared/components/payment-button/utils.js'];
  const { PAYMENT_BUTTON_COMMON_ANIMATED, PAYMENT_BUTTON_COMMON_ITEM_MASK } = window['SLM']['theme-shared/components/payment-button/constants.js'];
  const { convertPageType, getExpressCheckoutWithScenes } = window['SLM']['theme-shared/components/smart-payment/utils.js'];

  class ExpressCheckoutButton {
    constructor(props) {
      this.config = { ...props,
        pageType: convertPageType(props.pageType)
      };
      this.renderButton();
    }

    renderButton() {
      const {
        pageType,
        domId,
        isSubscription
      } = this.config;
      const list = getExpressCheckoutWithScenes({
        pageType,
        domId,
        scenes: {
          isSubscription
        }
      });
      createExpressCheckoutBtn(list, domId);
      $(`#${domId}`).on('click', `.${PAYMENT_BUTTON_COMMON_ITEM_MASK}`, () => {
        Toast.init({
          content: t('products.product_details.link_preview_does_not_support')
        });
      });
    }

    patchRender(list) {
      const {
        domId
      } = this.config;
      const patchList = list.filter(item => {
        const currentDomId = `${domId}_${item.methodCode}`;
        return !($(`#${domId}`).find(`#${currentDomId}`).length > 0);
      });
      createExpressCheckoutBtn(patchList, domId);
    }

    removeSkeleton() {
      const animatedSkeleton = document.querySelectorAll(`#${this.config.domId} .${PAYMENT_BUTTON_COMMON_ANIMATED}`);
      animatedSkeleton.forEach(item => item && item.classList.remove(PAYMENT_BUTTON_COMMON_ANIMATED));
    }

  }

  function newExpressCheckoutButton({
    domId,
    pageType,
    isSubscription
  }) {
    return new ExpressCheckoutButton({
      domId,
      pageType,
      isSubscription
    });
  }

  _exports.ExpressCheckoutButton = ExpressCheckoutButton;
  _exports.newExpressCheckoutButton = newExpressCheckoutButton;
  return _exports;
}();