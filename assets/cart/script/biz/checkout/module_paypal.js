window.SLM = window.SLM || {};

window.SLM['cart/script/biz/checkout/module_paypal.js'] = window.SLM['cart/script/biz/checkout/module_paypal.js'] || function () {
  const _exports = {};
  const PayPal = window['@yy/sl-theme-shared']['/components/paypal'].default;
  const { isPaypalGrey } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { SmartPayment } = window['SLM']['theme-shared/components/smart-payment/index.js'];
  const { setPayPalReportReq } = window['SLM']['theme-shared/utils/tradeReport/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { getSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const checkout = window['SLM']['theme-shared/utils/checkout.js'].default;
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
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

    getDataReportReq() {
      const {
        products
      } = this.checkoutParams;
      return setPayPalReportReq({
        products
      });
    }

    async renderSmartPayment() {
      this.SmartPaymentComponent = new SmartPayment({
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
        beforeCreateOrder: async () => {
          try {
            logger.paypal.info(`[点击PayPal按钮][准备唤起弹窗][beforeCreateOrder]`);
            const {
              products,
              ...extra
            } = this.checkoutParams;
            const {
              url: returnUrl,
              needLogin,
              abandonedInfo
            } = await checkout.save(products, { ...extra,
              query: { ...extra.query,
                spb: true
              }
            });

            if (needLogin) {
              window.location.href = returnUrl;
              return {
                valid: false
              };
            }

            logger.paypal.info(`[点击PayPal按钮][准备唤起弹窗][beforeCreateOrder]`);
            const {
              orderFrom
            } = SL_State.get('checkout.otherInfo') || {};
            return {
              abandonedOrderInfo: abandonedInfo,
              orderFrom: getSyncData('orderFrom') || orderFrom,
              returnUrl,
              dataReportReq: this.getDataReportReq()
            };
          } catch (error) {
            logger.paypal.info(`[点击PayPal按钮][准备唤起弹窗][beforeCreateOrder] 失败`, error);
            return {
              valid: false
            };
          }
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
      return checkoutEffect.getCheckoutParams(this.ctx, cartItemList);
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