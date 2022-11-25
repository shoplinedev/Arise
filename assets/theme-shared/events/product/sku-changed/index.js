window.SLM = window.SLM || {};

window.SLM['theme-shared/events/product/sku-changed/index.js'] = window.SLM['theme-shared/events/product/sku-changed/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Product::SkuChanged';
  const logger = apiLogger(EVENT_NAME);
  const external = window.Shopline && window.Shopline.event;

  const skuChanged = data => {
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

  skuChanged.apiName = EVENT_NAME;
  _exports.default = skuChanged;
  return _exports;
}();