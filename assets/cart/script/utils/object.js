window.SLM = window.SLM || {};

window.SLM['cart/script/utils/object.js'] = window.SLM['cart/script/utils/object.js'] || function () {
  const _exports = {};

  function has(o, k) {
    if (!o || !k) return false;
    return Object.prototype.hasOwnProperty.call(o, k);
  }

  function isNilObject(o) {
    if (!o) return true;
    return Object.keys(o).length === 0;
  }

  _exports.default = {
    has,
    isNilObject
  };
  return _exports;
}();