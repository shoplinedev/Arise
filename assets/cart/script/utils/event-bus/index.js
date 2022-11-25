window.SLM = window.SLM || {};

window.SLM['cart/script/utils/event-bus/index.js'] = window.SLM['cart/script/utils/event-bus/index.js'] || function () {
  const _exports = {};
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const emitLogger = createLogger('emit');
  const emitter = SL_EventBus;
  const oriEmit = emitter.emit;

  emitter.emit = function emit(event, data) {
    emitLogger.log(event, data);
    oriEmit.apply(emitter, arguments);
  };

  _exports.default = emitter;
  return _exports;
}();