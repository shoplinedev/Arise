window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/express_checkout.js'] = window.SLM['theme-shared/components/payment-button/express_checkout.js'] || function () {
  const _exports = {};
  const { createExpressCheckoutBtn, PAYMENT_BUTTON_COMMON_ANIMATED } = window['SLM']['theme-shared/components/payment-button/utils.js'];
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