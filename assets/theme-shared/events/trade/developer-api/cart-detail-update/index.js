window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/cart-detail-update/index.js'] = window.SLM['theme-shared/events/trade/developer-api/cart-detail-update/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(`${externalEvent.CART_DETAIL_UPDATE} - EMIT`);
  const external = window && window.Shopline.event;
  const interior = window && window.SL_EventBus;

  const cartDetailUpdate = () => {
    interior && interior.on('cart:update', data => {
      logger.info(data);
      external.emit(externalEvent.CART_DETAIL_UPDATE, { ...data
      });
    });
  };

  cartDetailUpdate.apiName = externalEvent.CART_DETAIL_UPDATE;
  _exports.default = cartDetailUpdate;
  return _exports;
}();