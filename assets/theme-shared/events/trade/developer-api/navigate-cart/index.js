window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/navigate-cart/index.js'] = window.SLM['theme-shared/events/trade/developer-api/navigate-cart/index.js'] || function () {
  const _exports = {};
  const { OPEN_MINI_CART } = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Cart::NavigateCart';
  const logger = apiLogger(EVENT_NAME);
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;

  const navigateCartHandler = argument => {
    const noop = () => {};

    const data = argument && argument.data || {};
    const onSuccess = argument && argument.onSuccess || noop;
    const onError = argument && argument.onError || noop;

    try {
      interior.emit(OPEN_MINI_CART, {
        data,
        onSuccess
      });
      logger.log(data);

      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      if (typeof onError === 'function') {
        onError(error);
      }
    }
  };

  const navigateCart = () => external && external.on(EVENT_NAME, navigateCartHandler);

  navigateCart.apiName = EVENT_NAME;
  _exports.default = navigateCart;
  return _exports;
}();