window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/throttle.js'] = window.SLM['theme-shared/components/hbs/shared/utils/throttle.js'] || function () {
  const _exports = {};

  _exports.default = function (limit, callback) {
    let waiting = false;
    return function (...args) {
      if (!waiting) {
        callback.apply(this, args);
        waiting = true;
        setTimeout(function () {
          waiting = false;
        }, limit);
      }
    };
  };

  return _exports;
}();