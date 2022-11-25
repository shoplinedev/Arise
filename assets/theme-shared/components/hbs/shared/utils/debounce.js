window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/debounce.js'] = window.SLM['theme-shared/components/hbs/shared/utils/debounce.js'] || function () {
  const _exports = {};

  _exports.default = function (wait, callback, immediate) {
    let timeout;
    return function (...args) {
      const context = this;

      const later = function () {
        timeout = null;
        if (!immediate) callback.apply(context, args);
      };

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) callback.apply(context, args);
    };
  };

  return _exports;
}();