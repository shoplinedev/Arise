window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/module_express_checkout.js'] = window.SLM['cart/script/biz/checkout/module_express_checkout.js'] || function () {
  const _exports = {};
  const isFunction = window['lodash']['isFunction'];
  const { isNewExpressCheckout } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { Payments, PageType } = window['SLM']['theme-shared/components/smart-payment/payments.js'];
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const currencyUtils = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const CartServiceValuer = window['SLM']['cart/script/valuer/cartService.js'].default;
  const checkoutEffect = window['SLM']['cart/script/biz/checkout/effect.js'].default;
  const logger = {
    paypal: createLogger('ExpressCheckoutModule')
  };
  let slibingNodeHeight = 0;

  class ExpressCheckoutModule {
    constructor({
      ctx,
      elementId,
      pageType,
      buynowId,
      cbFn
    }) {
      this.pageType = pageType;
      this.buynowId = buynowId;
      this.cbFn = cbFn;
      this.ctx = ctx;
      this.elementId = elementId;
      this.$element = document.getElementById(elementId);
      this.paypalComponent = null;
      this.SmartPaymentComponent = null;

      if (this.$element) {
        this._init();
      } else {
        logger.paypal.error(`Failed to init paypal module. Can't get element with #${elementId}`);
      }
    }

    async renderSmartPayment() {
      this.SmartPaymentComponent = new Payments({
        pageType: PageType.Cart,
        props: {
          domId: this.elementId,
          styleOptions: {
            height: slibingNodeHeight
          }
        },
        emitData: {
          stage: this.pageType,
          product: this.checkoutParams.products
        },
        setCheckoutParams: async () => {
          const {
            products,
            ...extra
          } = this.checkoutParams;
          return {
            products,
            extra: { ...extra,
              query: { ...extra.query,
                spb: true
              }
            }
          };
        },
        onApprove: ({
          returnUrl
        } = {}) => {
          logger.paypal.info(`[点击继续按钮][准备跳转][beforeContinue][${returnUrl}]`);
        }
      });
      this.SmartPaymentComponent && (await this.SmartPaymentComponent.init());
    }

    get checkoutParams() {
      const cartService = CartServiceValuer.withCartService(this.ctx);
      const cartItemList = cartService.getCardItemList();
      const params = checkoutEffect.getCheckoutParams(this.ctx, cartItemList);

      if (params.products) {
        params.products.forEach(product => {
          product.productPrice = currencyUtils.unformatCurrency(convertPrice(product.productPrice));
        });
      }

      return params;
    }

    async _init() {
      const buynowId = isNewExpressCheckout(this.pageType) ? this.buynowId : `${this.elementId}-slibing`;
      slibingNodeHeight = slibingNodeHeight || document.getElementById(buynowId).offsetHeight;
      await this.renderSmartPayment();

      if (isFunction(this.cbFn)) {
        this.cbFn();
      }
    }

  }

  function newExpressCheckoutModule({
    ctx,
    elementId,
    pageType,
    buynowId,
    cbFn
  }) {
    return new ExpressCheckoutModule({
      ctx,
      elementId,
      pageType,
      buynowId,
      cbFn
    });
  }

  _exports.ExpressCheckoutModule = ExpressCheckoutModule;
  _exports.newExpressCheckoutModule = newExpressCheckoutModule;
  return _exports;
}();