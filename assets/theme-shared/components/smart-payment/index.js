window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/index.js'] = window.SLM['theme-shared/components/smart-payment/index.js'] || function () {
  const _exports = {};
  const { Payment, PayMode, PaymentProps, Paypal } = window['@sl/smart-payment'];
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { getPayments, isFn } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const {
    PAYPAL_CHECKOUT
  } = HD_EVENT_NAME;
  const logger = loggerService.pipeOwner('SmartPayment');
  const loggerPrefix = '[shared]快速支付SDK';

  class SmartPayment {
    constructor(config) {
      this.config = config;
    }

    async renderSmartPayment() {
      const payments = getPayments();

      if (!(payments && Array.isArray(payments))) {
        logger.error(`${loggerPrefix} payments入参非法`, {
          data: {
            payments
          }
        });
        return;
      }

      this.currentController = new Payment({ ...this.config,
        payments,
        afterCreateOrder: status => {
          SL_EventBus.emit(PAYPAL_CHECKOUT, {
            data: {
              event_status: status,
              ...this.config.emitData
            }
          });

          if (isFn(this.config.afterCreateOrder)) {
            this.config.afterCreateOrder(status);
          }
        },
        logger
      });
      await this.currentController.render();
    }

    async init() {
      await this.renderSmartPayment();
    }

    setDisabled(disabled) {
      this.currentController.setDisabled(disabled);
    }

  }

  _exports.SmartPayment = SmartPayment;
  _exports.Payment = Payment;
  _exports.Paypal = Paypal;
  _exports.PayMode = PayMode;
  _exports.PaymentProps = PaymentProps;
  return _exports;
}();