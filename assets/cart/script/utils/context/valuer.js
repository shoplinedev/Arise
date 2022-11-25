window.SLM = window.SLM || {};

window.SLM['cart/script/utils/context/valuer.js'] = window.SLM['cart/script/utils/context/valuer.js'] || function () {
  const _exports = {};
  const constant = window['SLM']['cart/script/utils/context/constant.js'].default;

  function newValuer(value) {
    let getter;

    if (arguments.length === 0) {
      getter = () => {
        throw new Error(constant.errNotNullableValuer);
      };
    } else {
      getter = () => {
        return value;
      };
    }

    return createValuer(getter);
  }

  function newValuerWithGetter(getter) {
    if (arguments.length === 0) {
      getter = () => {
        throw new Error(constant.errNotNullableValuer);
      };
    }

    return createValuer(getter);
  }

  _exports.default = {
    newValuer,
    newValuerWithGetter
  };

  function createValuer(getter) {
    return Object.defineProperty({}, 'defaultGetter', {
      value: getter,
      writable: false,
      configurable: false
    });
  }

  return _exports;
}();