window.SLM = window.SLM || {};

window.SLM['cart/script/service/cart/index.js'] = window.SLM['cart/script/service/cart/index.js'] || function () {
  const _exports = {};
  const service = window['SLM']['cart/script/service/cart/service.js'].default;

  function withCartService(svcAdapter, storageAdapter) {
    window._sl_cart__cart_service__ = new service.CartService(svcAdapter, storageAdapter);
  }

  function takeCartService() {
    return window._sl_cart__cart_service__;
  }

  _exports.default = {
    withCartService,
    takeCartService,
    eventBusEnum: service.CartEventBusEnum,
    eventBus: service.cartEventBus
  };
  return _exports;
}();