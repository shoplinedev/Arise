window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/effect.js'] = window.SLM['cart/script/biz/checkout/effect.js'] || function () {
  const _exports = {};
  const CartServiceValuer = window['SLM']['cart/script/valuer/cartService.js'].default;
  const cartItemListValuer = window['SLM']['cart/script/valuer/cartItemList.js'].default;

  async function verifyCart(ctx) {
    const cartService = CartServiceValuer.withCartService(ctx);
    const cartItemList = cartItemListValuer.withCartItemList(ctx);
    return cartService.verifyCartItemList(cartItemList);
  }

  function getCheckoutParams(ctx, verifiedItemList) {
    const cartService = CartServiceValuer.withCartService(ctx);
    return cartService.getCheckoutParams(verifiedItemList);
  }

  _exports.default = {
    getCheckoutParams,
    verifyCart
  };
  return _exports;
}();