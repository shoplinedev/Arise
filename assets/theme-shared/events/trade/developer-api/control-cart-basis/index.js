window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/control-cart-basis/index.js'] = window.SLM['theme-shared/events/trade/developer-api/control-cart-basis/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const interiorEvent = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const logger = apiLogger(externalEvent.CONTROL_CART_BASIS);
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;

  const controlCartBasis = () => external && external.on(externalEvent.CONTROL_CART_BASIS, async argument => {
    const options = argument && argument.data || null;

    const onSuccess = argument && argument.onSuccess || (() => {});

    const onError = argument && argument.onError || (() => {});

    try {
      logger.info(`[emit]`, interiorEvent.CONTROL_CART_BASIS);
      interior.emit(interiorEvent.CONTROL_CART_BASIS, {
        options,
        success: onSuccess,
        error: onError
      });
    } catch (error) {
      onError(error);
    }
  });

  controlCartBasis.apiName = externalEvent.CONTROL_CART_BASIS;
  _exports.default = controlCartBasis;
  return _exports;
}();