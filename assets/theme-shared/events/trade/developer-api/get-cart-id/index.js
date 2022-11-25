window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/get-cart-id/index.js'] = window.SLM['theme-shared/events/trade/developer-api/get-cart-id/index.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const services = {
    getCartOwnerId: async () => request.get('/carts/cart/owner-id'),
    getCartId: async () => request.get('/carts/cart/cart-id')
  };

  const getNewCartId = async data => services.getCartId(data);

  const EVENT_NAME = 'Cart::GetCartId';
  const logger = apiLogger(EVENT_NAME);
  const interior = window && window.Shopline.event;

  const getCartId = () => interior && interior.on(EVENT_NAME, async argument => {
    const {
      data,
      onSuccess = () => {},
      onError = () => {}
    } = argument;

    try {
      const result = await getNewCartId(data);
      logger.info(result);
      onSuccess && onSuccess(result);
    } catch (error) {
      logger.error(error);
      onError && onError(error);
    }
  });

  getCartId.apiName = EVENT_NAME;
  _exports.default = getCartId;
  return _exports;
}();