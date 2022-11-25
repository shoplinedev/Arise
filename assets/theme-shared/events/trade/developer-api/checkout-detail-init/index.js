window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/checkout-detail-init/index.js'] = window.SLM['theme-shared/events/trade/developer-api/checkout-detail-init/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(`${externalEvent.CHECKOUT_DETAIL_INIT} - EMIT`);
  const external = window && window.Shopline.event;
  const interior = window && window.SL_EventBus;

  const checkoutDetailInit = () => {
    interior && interior.on('trade:billingDetailInit', data => {
      logger.info(data);
      external.emit(externalEvent.CHECKOUT_DETAIL_INIT, { ...data
      });
    });
  };

  checkoutDetailInit.apiName = externalEvent.CHECKOUT_DETAIL_INIT;
  _exports.default = checkoutDetailInit;
  return _exports;
}();