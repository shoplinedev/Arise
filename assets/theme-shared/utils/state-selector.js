window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/state-selector.js'] = window.SLM['theme-shared/utils/state-selector.js'] || function () {
  const _exports = {};
  const { SL_EventEmitter } = window['SLM']['theme-shared/utils/event-bus.js'];
  const parsePathToArray = window['SLM']['theme-shared/utils/parsePathToArray.js'].default;

  class SLState {
    constructor(state) {
      this.bus = new SL_EventEmitter();
      this.rootState = state;
    }

    get(path) {
      const keys = parsePathToArray(path);
      const value = keys.reduce((prev, current) => {
        if (!prev) return undefined;
        return prev[current];
      }, this.rootState);
      return value;
    }

    set(path, newValue) {
      if (typeof newValue === 'function') {
        throw TypeError('newValue must not be a function');
      }

      const keys = parsePathToArray(path);
      let oldValue;
      keys.reduce((prev, current, index) => {
        if (index === keys.length - 1) {
          const key = prev;
          oldValue = key[current];
          key[current] = newValue;
        }

        return prev[current];
      }, this.rootState);
      this.bus.emit(path, newValue, oldValue);
    }

    on(...args) {
      return this.bus.on(...args);
    }

    off(...args) {
      return this.bus.off(...args);
    }

  }

  const __PRELOAD_STATE__ = window.__PRELOAD_STATE__ || {};

  if (!window.SL_State) {
    window.SL_State = new SLState(__PRELOAD_STATE__);
  }

  const {
    SL_State
  } = window;
  _exports.SL_State = SL_State;
  return _exports;
}();