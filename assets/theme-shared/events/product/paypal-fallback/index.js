window.SLM = window.SLM || {};

window.SLM['theme-shared/events/product/paypal-fallback/index.js'] = window.SLM['theme-shared/events/product/paypal-fallback/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Product::Paypal-Fallback';
  const logger = apiLogger(EVENT_NAME);
  const external = window.Shopline && window.Shopline.event;

  const paypalFallback = data => {
    if (external) {
      logger.info(`[emit Product::Paypal-Fallback]`, data);
      return external.emit(EVENT_NAME, {
        data
      });
    }
  };

  paypalFallback.apiName = EVENT_NAME;
  _exports.default = paypalFallback;
  return _exports;
}();