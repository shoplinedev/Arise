window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout-error/index.js'] = window.SLM['cart/script/biz/checkout-error/index.js'] || function () {
  const _exports = {};
  const valuer = window['SLM']['cart/script/valuer/index.js'].default;

  class CheckoutErrorModule {
    constructor(ctx, {
      $root,
      checkoutHooks,
      cartActionHooks
    }) {
      this.ctx = ctx;
      this.$root = $root;
      this.checkoutHooks = checkoutHooks;
      this.cartActionHooks = cartActionHooks;

      this._init();
    }

    _init() {
      this.checkoutHooks.checkoutFailed.tap(err => {
        if (err) {
          if (err instanceof Error) {
            this._setError(err.message);
          } else {
            this._setError(err.msg || err.code);
          }
        } else {
          this._setError('');
        }
      });
      this.cartActionHooks.skuRemoved.tap(skuList => {
        if (Array.isArray(skuList) && skuList.length > 0) {
          this._setError('');
        }
      });
    }

    _setError(msg) {
      if (msg) {
        this.$root.classList.add('trade-cart-checkout-error');
      } else {
        this.$root.classList.remove('trade-cart-checkout-error');
      }

      this.$root.textContent = msg;
    }

  }

  function newCheckoutErrorModule(ctx, $root) {
    const checkoutHooks = valuer.checkoutHooksValuer.takeCheckoutHooks(ctx);
    const cartActionHooks = valuer.cartActionHooksValuer.takeCartActionHooks(ctx);
    return new CheckoutErrorModule(ctx, {
      $root,
      cartActionHooks,
      checkoutHooks
    });
  }

  _exports.default = {
    CheckoutErrorModule,
    newCheckoutErrorModule
  };
  return _exports;
}();