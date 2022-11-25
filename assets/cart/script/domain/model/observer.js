window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/observer.js'] = window.SLM['cart/script/domain/model/observer.js'] || function () {
  const _exports = {};

  function observer(data, action = {}) {
    return new Proxy(data, {
      get(target, property) {
        if (typeof action.get === 'function') {
          action.get(property, target[property]);
        }

        return target[property];
      },

      set(target, property, value) {
        target[property] = value;

        if (typeof action.set === 'function') {
          const proxyValue = action.set(property, value);
          target[property] = proxyValue;
        }

        return true;
      }

    });
  }

  _exports.default = observer;
  return _exports;
}();