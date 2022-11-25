window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/event-bus.js'] = window.SLM['theme-shared/utils/event-bus.js'] || function () {
  const _exports = {};
  const EventEmitter = window['eventemitter3']['default'];

  if (!window.SL_EventBus) {
    window.SL_EventBus = new EventEmitter();
    window.SL_EventEmitter = EventEmitter;
  }

  const {
    SL_EventBus
  } = window;
  _exports.SL_EventBus = SL_EventBus;
  const {
    SL_EventEmitter
  } = window;
  _exports.SL_EventEmitter = SL_EventEmitter;
  _exports.default = {
    SL_EventBus: window.SL_EventBus,
    SL_EventEmitter: window.SL_EventEmitter
  };
  return _exports;
}();