window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/complete-order/index.js'] = window.SLM['theme-shared/events/trade/developer-api/complete-order/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(`${externalEvent.COMPLETE_ORDER} - EMIT`);
  const external = window && window.Shopline.event;

  const completeOrder = ({
    data,
    onSuccess,
    onError,
    ...rest
  }) => {
    logger.info(data);
    external && external.emit(externalEvent.COMPLETE_ORDER, {
      data,
      onSuccess,
      onError,
      ...rest
    });
  };

  completeOrder.apiName = externalEvent.COMPLETE_ORDER;
  _exports.default = completeOrder;
  return _exports;
}();