window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/module_paypal.js'] = window.SLM['cart/script/biz/checkout/module_paypal.js'] || function () {
  const _exports = {};
  const PayPal = window['@yy/sl-theme-shared']['/components/paypal'].default;
  const { isPaypalGrey } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { Payments, PageType } = window['SLM']['theme-shared/components/smart-payment/payments.js'];
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const currencyUtils = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const CartServiceValuer = window['SLM']['cart/script/valuer/cartService.js'].default;
  const checkoutEffect = window['SLM']['cart/script/biz/checkout/effect.js'].default;
  const logger = {
    paypal: createLogger('paypal')
  };
  let slibingNodeHeight = 0;

  class PaypalModule {
    constructor(ctx, elementId, pageType) {
      this.pageType = pageType;
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

    async renderPaypal() {
      this.paypalComponent = new PayPal({
        pageType: this.pageType,
        domId: this.elementId,
        height: slibingNodeHeight,
        beforeCreateOrder: async () => {
          logger.paypal.info(`[点击PayPal按钮][准备唤起弹窗][beforeCreateOrder]`);
          return this.checkoutParams;
        },
        beforeContinue: ({
          returnUrl
        } = {}) => {
          logger.paypal.info(`[点击继续按钮][准备跳转][beforeContinue][${returnUrl}]`);
        }
      });
      this.paypalComponent && this.paypalComponent.render();
    }

    async _init() {
      slibingNodeHeight = slibingNodeHeight || document.getElementById(`${this.elementId}-slibing`).offsetHeight;

      if (isPaypalGrey()) {
        await this.renderSmartPayment();
      } else {
        this.renderPaypal();
      }
    }

  }

  function newPaypalModule(ctx, elementId, pageType) {
    return new PaypalModule(ctx, elementId, pageType);
  }

  _exports.default = {
    PaypalModule,
    newPaypalModule
  };
  return _exports;
}();