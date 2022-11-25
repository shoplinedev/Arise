window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/navigate-checkout/index.js'] = window.SLM['theme-shared/events/trade/developer-api/navigate-checkout/index.js'] || function () {
  const _exports = {};
  const checkout = window['SLM']['theme-shared/utils/checkout.js'].default;
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Checkout::NavigateCheckout';
  const logger = apiLogger(EVENT_NAME);
  const external = window && window.Shopline.event;

  const navigateCheckoutHandler = async arg => {
    logger.info(JSON.stringify(arg));
    const {
      data,
      onSuccess,
      onError
    } = arg;
    const {
      products,
      ...rest
    } = data;

    try {
      const result = await checkout.save(products, rest);
      logger.info(JSON.stringify(result, null, 4));
      onSuccess && onSuccess(result);
    } catch (error) {
      logger.info(error);
      onError && onError(error);
    }
  };

  const navigateCheckout = () => external && external.on(EVENT_NAME, navigateCheckoutHandler);

  navigateCheckout.apiName = EVENT_NAME;
  _exports.default = navigateCheckout;
  return _exports;
}();