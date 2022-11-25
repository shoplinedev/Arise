window.SLM = window.SLM || {};

window.SLM['cart/script/valuer/cartActionHooks.js'] = window.SLM['cart/script/valuer/cartActionHooks.js'] || function () {
  const _exports = {};
  const { SyncHook } = window['@funnyecho/hamon'];
  const Valuer = window['SLM']['cart/script/utils/context/valuer.js'].default;
  const context = window['SLM']['cart/script/utils/context/index.js'].default;
  const valuer = Valuer.newValuer();

  function takeCartActionHooks(ctx) {
    return ctx.value(valuer);
  }

  function withCartActionHooks(ctx, hooks) {
    return context.withValue(ctx, valuer, hooks || newHooks());
  }

  function newHooks() {
    return {
      skuRemoved: new SyncHook()
    };
  }

  _exports.default = {
    valuer,
    withCartActionHooks,
    takeCartActionHooks,
    newHooks
  };
  return _exports;
}();