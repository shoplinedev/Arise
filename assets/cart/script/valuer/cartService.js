window.SLM = window.SLM || {};

window.SLM['cart/script/valuer/cartService.js'] = window.SLM['cart/script/valuer/cartService.js'] || function () {
  const _exports = {};
  const Valuer = window['SLM']['cart/script/utils/context/valuer.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const valuer = Valuer.newValuerWithGetter(() => {
    return CartService.takeCartService();
  });

  function withCartService(ctx) {
    return ctx.value(valuer);
  }

  _exports.default = {
    valuer,
    withCartService
  };
  return _exports;
}();