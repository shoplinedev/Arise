window.SLM = window.SLM || {};

window.SLM['cart/script/constant/verifyType.js'] = window.SLM['cart/script/constant/verifyType.js'] || function () {
  const _exports = {};
  _exports.default = {
    NIL: 0,
    SOLD_OUT: 1,
    UNDER_STOCK: 2,
    OFF_SHELVED: 3,
    DELETED: 4
  };
  return _exports;
}();