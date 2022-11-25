window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/checkout-detail-update/index.js'] = window.SLM['theme-shared/events/trade/developer-api/checkout-detail-update/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(`${externalEvent.CHECKOUT_DETAIL_UPDATE} - EMIT`);
  const external = window && window.Shopline.event;
  const interior = window && window.SL_EventBus;

  const checkoutDetailUpdate = () => {
    interior && interior.on('trade:billingDetailUpdate', data => {
      logger.info(data);
      external.emit(externalEvent.CHECKOUT_DETAIL_UPDATE, { ...data
      });
    });
  };

  checkoutDetailUpdate.apiName = externalEvent.CHECKOUT_DETAIL_UPDATE;
  _exports.default = checkoutDetailUpdate;
  return _exports;
}();