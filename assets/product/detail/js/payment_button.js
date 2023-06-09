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
        cbFn,
        setCheckoutParams
      } = this.config;
      const instance = new PaymentButton({
        id: elementId,
        pageType,
        setCheckoutParams
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

    setDisabled(val) {
      const currentInstanceMap = this.instanceMap[this.config.elementId];

      if (currentInstanceMap && currentInstanceMap.instance) {
        currentInstanceMap.instance.setDisabled(val);
      }
    }

    setDisplay(val) {
      const currentInstanceMap = this.instanceMap[this.config.elementId];

      if (currentInstanceMap && currentInstanceMap.instance) {
        currentInstanceMap.instance.setDisplay(val);
      }
    }

  }

  function newButtonModule({
    elementId,
    pageType,
    cbFn,
    setCheckoutParams
  }) {
    return new PayemtnButtonModule({
      elementId,
      pageType,
      cbFn,
      setCheckoutParams
    });
  }

  _exports.default = {
    PayemtnButtonModule,
    newButtonModule
  };
  return _exports;
}();