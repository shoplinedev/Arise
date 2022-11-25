window.SLM = window.SLM || {};

window.SLM['cart/script/valuer/checkoutHooks.js'] = window.SLM['cart/script/valuer/checkoutHooks.js'] || function () {
  const _exports = {};
  const { SyncHook } = window['@funnyecho/hamon'];
  const Valuer = window['SLM']['cart/script/utils/context/valuer.js'].default;
  const context = window['SLM']['cart/script/utils/context/index.js'].default;
  const valuer = Valuer.newValuer();

  function takeCheckoutHooks(ctx) {
    return ctx.value(valuer);
  }

  function withCheckoutHooks(ctx, v) {
    return context.withValue(ctx, valuer, v || newHooks());
  }

  function newHooks() {
    return {
      checkoutFailed: new SyncHook()
    };
  }

  _exports.default = {
    valuer,
    withCheckoutHooks,
    takeCheckoutHooks,
    newHooks
  };
  return _exports;
}();