window.SLM = window.SLM || {};

window.SLM['theme-shared/events/product/sku-change/index.js'] = window.SLM['theme-shared/events/product/sku-change/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Product::SkuChange';
  const logger = apiLogger(EVENT_NAME);
  const external = window.Shopline && window.Shopline.event;

  const skuChange = data => {
    if (external) {
      logger.info(`[emit]`, data);
      return external.emit(EVENT_NAME, {
        data,
        onSuccess: result => {
          logger.info('success', result);
        },
        onError: error => {
          logger.error(error);
        }
      });
    }
  };

  skuChange.apiName = EVENT_NAME;
  _exports.default = skuChange;
  return _exports;
}();