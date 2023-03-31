window.SLM = window.SLM || {};

window.SLM['product/detail/js/payment_button.js'] = window.SLM['product/detail/js/payment_button.js'] || function () {
  const _exports = {};
  const { PaymentButton } = window['SLM']['theme-shared/components/payment-button/index.js'];
  const isFunction = window['lodash']['isFunction'];

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

      if (isFunction(cbFn)) {
        cbFn(this.instanceMap[elementId].renderDomId);
      }
    }

  }

  function newButtonModule({
    elementId,
    pageType,
    cbFn
  }) {
    return new PayemtnButtonModule({
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