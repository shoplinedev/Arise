window.SLM = window.SLM || {};

window.SLM['cart/script/service/cart/hooks.js'] = window.SLM['cart/script/service/cart/hooks.js'] || function () {
  const _exports = {};
  const { AsyncSeriesBailHook } = window['@funnyecho/hamon'];
  const cartItemModel = window['SLM']['cart/script/domain/model/cartItem.js'].default;
  const verifyingProductOverflow = new AsyncSeriesBailHook();
  const verifyingActiveProductEmpty = new AsyncSeriesBailHook();
  const verifyingProductSoldOut = new AsyncSeriesBailHook(item => cartItemModel.getUniqueID(item));
  const verifyingProductQuantityInvalid = new AsyncSeriesBailHook(item => cartItemModel.getUniqueID(item));
  const productVerified = new AsyncSeriesBailHook();
  _exports.default = {
    verifyingProductOverflow,
    verifyingActiveProductEmpty,
    verifyingProductSoldOut,
    verifyingProductQuantityInvalid,
    productVerified
  };
  return _exports;
}();