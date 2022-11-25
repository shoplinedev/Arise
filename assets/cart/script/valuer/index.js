window.SLM = window.SLM || {};

window.SLM['cart/script/valuer/index.js'] = window.SLM['cart/script/valuer/index.js'] || function () {
  const _exports = {};
  const cartItemList = window['SLM']['cart/script/valuer/cartItemList.js'].default;
  const cartService = window['SLM']['cart/script/valuer/cartService.js'].default;
  const checkoutHooks = window['SLM']['cart/script/valuer/checkoutHooks.js'].default;
  const cartActionHooks = window['SLM']['cart/script/valuer/cartActionHooks.js'].default;
  _exports.default = {
    cartItemListValuer: cartItemList,
    cartServiceValuer: cartService,
    checkoutHooksValuer: checkoutHooks,
    cartActionHooksValuer: cartActionHooks
  };
  return _exports;
}();