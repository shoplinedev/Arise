window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/module_checkout.js'] = window.SLM['cart/script/biz/checkout/module_checkout.js'] || function () {
  const _exports = {};
  const checkoutUtil = window['SLM']['theme-shared/utils/checkout.js'].default;
  const { SyncHook } = window['@funnyecho/hamon'];
  const checkoutEffect = window['SLM']['cart/script/biz/checkout/effect.js'].default;
  const CartServiceValuer = window['SLM']['cart/script/valuer/cartService.js'].default;
  const valuer = window['SLM']['cart/script/valuer/index.js'].default;

  class CheckoutModule {
    constructor(ctx, {
      checkoutHooks,
      $root,
      extra
    }) {
      this.ctx = ctx;
      this.$root = $root;
      this.checkoutHooks = checkoutHooks;
      this.extra = extra;
      this.isCheckoutProcessing = false;

      this._init();
    }

    destroy() {
      this._hooks.willDestroy.call();
    }

    async checkout() {
      if (this.isCheckoutProcessing) return;

      try {
        this._processCheckout();

        const cartService = CartServiceValuer.withCartService(this.ctx);
        const cartItemList = cartService.getCardItemList();
        const {
          products,
          ...rest
        } = checkoutEffect.getCheckoutParams(this.ctx, cartItemList);
        checkoutUtil.jump(products, { ...rest,
          ...this.extra
        });
      } catch (e) {
        this.checkoutHooks.checkoutFailed.call(e);
        console.error('failed to trigger checkout', e);
      } finally {
        this._completeCheckout();
      }
    }

    _processCheckout() {
      this.isCheckoutProcessing = true;
      this.$root.classList.add('btn--loading');
    }

    _completeCheckout() {
      this.isCheckoutProcessing = false;
      this.$root.classList.remove('btn--loading');
    }

    _init() {
      this._initHooks();

      this._initEventListener();
    }

    _initHooks() {
      this._hooks = {
        willDestroy: new SyncHook()
      };
    }

    _initEventListener() {
      const onClick = this.checkout.bind(this);
      this.$root.addEventListener('click', onClick);

      this._hooks.willDestroy.tap(() => {
        this.$root.removeEventListener('click', onClick);
      });
    }

    _destroyHooks() {
      this._hooks.willDestroy.destroy();
    }

  }

  function newCheckoutModule(ctx, $root, extra) {
    const checkoutHooks = valuer.checkoutHooksValuer.takeCheckoutHooks(ctx);
    return new CheckoutModule(ctx, {
      checkoutHooks,
      $root,
      extra
    });
  }

  _exports.default = {
    CheckoutModule,
    newCheckoutModule
  };
  return _exports;
}();