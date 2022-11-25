window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/add-to-cart/index.js'] = window.SLM['theme-shared/events/trade/developer-api/add-to-cart/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const interiorEvent = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const logger = apiLogger(externalEvent.ADD_TO_CART);
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;

  const addToCart = () => external && external.on(externalEvent.ADD_TO_CART, async argument => {
    const {
      data,
      onSuccess,
      onError
    } = argument;

    try {
      logger.info(`[emit]`, data);
      interior.emit(interiorEvent.ADD_TO_CART, { ...data,
        success: onSuccess,
        error: onError
      });
    } catch (error) {
      onError(error);
    }
  });

  addToCart.apiName = externalEvent.ADD_TO_CART;
  _exports.default = addToCart;
  return _exports;
}();