window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/finish-order/index.js'] = window.SLM['theme-shared/events/trade/developer-api/finish-order/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(externalEvent.FINISHED_ORDER);
  const external = window && window.Shopline.event;

  const finishedOrder = ({
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

  finishedOrder.apiName = externalEvent.FINISHED_ORDER;
  _exports.default = finishedOrder;
  return _exports;
}();