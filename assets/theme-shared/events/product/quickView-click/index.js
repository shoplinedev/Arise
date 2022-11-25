window.SLM = window.SLM || {};

window.SLM['theme-shared/events/product/quickView-click/index.js'] = window.SLM['theme-shared/events/product/quickView-click/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = {
    OPEN_QUICKVIEW_EVENT: 'Product::OpenQuickView',
    CLOSE_QUICKVIEW_EVENT: 'Product::CloseQuickView',
    OPEN_QUICKVIEW_ADDTOCART: 'Product::OpenQuickView::AddToCart',
    CLOSE_QUICKVIEW_ADDTOCART: 'Product::CloseQuickView::AddToCart'
  };
  const external = window.Shopline && window.Shopline.event;

  const quickViewClick = data => {
    if (external) {
      const logger = apiLogger(EVENT_NAME[data.eventName]);
      quickViewClick.apiName = EVENT_NAME[data.eventName];
      logger.info(`[emit]`, data);
      return external.emit(EVENT_NAME[data.eventName], {
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

  _exports.default = quickViewClick;
  return _exports;
}();