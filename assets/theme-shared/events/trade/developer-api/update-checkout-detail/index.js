window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/update-checkout-detail/index.js'] = window.SLM['theme-shared/events/trade/developer-api/update-checkout-detail/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const { UPDATE_CHECKOUT_DETAIL } = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const { INTERIOR_TRADE_UPDATE_DETAIL } = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const logger = apiLogger(UPDATE_CHECKOUT_DETAIL);
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;

  const updateCheckoutDetailDebounceHandle = () => {
    let requesting = false;
    let emitDataList = [];
    let tempEmitDataList = [];

    function reset() {
      requesting = false;
      emitDataList = [...tempEmitDataList];
      tempEmitDataList = [];

      if (emitDataList.length) {
        emitFunc();
      }
    }

    function successFunc(res) {
      emitDataList.map(cb => cb && cb.onSuccess && cb.onSuccess(res));
      reset();
    }

    function errorFunc(e) {
      emitDataList.map(cb => cb && cb.onError && cb.onError(e));
      reset();
    }

    function emitFunc() {
      try {
        interior.emit(INTERIOR_TRADE_UPDATE_DETAIL, {
          onSuccess: successFunc,
          onError: errorFunc
        });
      } catch (e) {
        errorFunc(e);
      }
    }

    return function fn({
      data,
      onSuccess,
      onError
    } = {}) {
      logger.info('[emit]', JSON.stringify(data));

      if (requesting) {
        tempEmitDataList.push({
          onSuccess,
          onError
        });
      } else {
        requesting = true;
        emitDataList.push({
          onSuccess,
          onError
        });
        emitFunc();
      }
    };
  };

  const updateCheckoutDetail = () => external && external.on(UPDATE_CHECKOUT_DETAIL, updateCheckoutDetailDebounceHandle());

  updateCheckoutDetail.apiName = UPDATE_CHECKOUT_DETAIL;
  _exports.default = updateCheckoutDetail;
  return _exports;
}();