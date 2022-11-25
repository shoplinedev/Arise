window.SLM = window.SLM || {};

window.SLM['cart/script/valuer/cartItemList.js'] = window.SLM['cart/script/valuer/cartItemList.js'] || function () {
  const _exports = {};
  const Valuer = window['SLM']['cart/script/utils/context/valuer.js'].default;
  const valuer = Valuer.newValuerWithGetter(() => {
    return null;
  });

  function withCartItemList(ctx) {
    return ctx.value(valuer);
  }

  _exports.default = {
    valuer,
    withCartItemList
  };
  return _exports;
}();