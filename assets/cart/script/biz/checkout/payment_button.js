window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/payment_button.js'] = window.SLM['cart/script/biz/checkout/payment_button.js'] || function () {
  const _exports = {};
  const { PaymentButton } = window['SLM']['theme-shared/components/payment-button/index.js'];
  const { ButtonType } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const isFunction = window['lodash']['isFunction'];
  const { newExpressCheckoutModule } = window['SLM']['cart/script/biz/checkout/module_express_checkout.js'];

  class PayemtnButtonModule {
    constructor(props) {
      this.config = props;
      this.instanceMap = {};
      this.renderButton();
    }

    renderButton() {
      const {
        elementId,
        pageType,
        cbFn
      } = this.config;
      const instance = new PaymentButton({
        id: elementId,
        pageType
      });
      const domIds = instance.getRenderId();
      this.instanceMap[elementId] = {
        instance,
        renderDomId: domIds
      };

      if (domIds[ButtonType.ExpressCheckoutButton]) {
        this.renderExpressCheckout(domIds[ButtonType.ExpressCheckoutButton], domIds[ButtonType.NormalButton]);
      }

      if (isFunction(cbFn)) {
        cbFn();
      }
    }

    renderExpressCheckout(elementId, buynowId) {
      const {
        ctx,
        pageType
      } = this.config;
      newExpressCheckoutModule({
        ctx,
        elementId,
        pageType,
        buynowId
      });
    }

  }

  function newButtonModule({
    ctx,
    elementId,
    pageType,
    cbFn
  }) {
    return new PayemtnButtonModule({
      ctx,
      elementId,
      pageType,
      cbFn
    });
  }

  _exports.default = {
    PayemtnButtonModule,
    newButtonModule
  };
  return _exports;
}();