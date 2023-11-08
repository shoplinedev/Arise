window.SLM = window.SLM || {};
window.SLM['theme-shared/components/pay-button/payment-button/index.js'] = window.SLM['theme-shared/components/pay-button/payment-button/index.js'] || function () {
  const _exports = {};
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const PayButton = window['@sl/pay-button']['default'];
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { getConfig, isPreview, isSubscription, PageType } = window['SLM']['theme-shared/components/pay-button/payment-button/utils.js'];
  const PaymentUpdate = 'Payment::Update';
  const logger = loggerService.pipeOwner('SmartPayment');
  const ButtonType = {
    Normal: 'normalButton',
    Express: 'expressCheckoutButton',
    Fast: 'fastCheckoutButton'
  };
  const DEFAULT_CONFIG = {
    buttonLocation: 'productDetail',
    isSystem: false,
    buttonTypeDataList: [{
      buttonType: ButtonType.Normal,
      buttonNameDataList: [{
        buttonName: 'BUY_NOW',
        buttonConfigData: null
      }]
    }]
  };
  class PaymentButton {
    constructor(data) {
      logger.info('PaymentButton init constructor', {
        data
      });
      this.isSubscription = isSubscription(PageType.ProductDetail);
      let paymentConfig = getConfig(PageType.ProductDetail);
      if (!paymentConfig) {
        paymentConfig = DEFAULT_CONFIG;
        logger.error('get nothing from first load productDetailConfig');
      }
      const config = {
        ...data,
        paymentConfig,
        props: {
          ...data.props,
          logger: loggerService,
          toast: message => Toast.init({
            content: message
          }),
          isSubscription: this.isSubscription,
          isPreview: isPreview()
        }
      };
      this.payButton = new PayButton(config);
    }
    addSubscriptionListener() {
      let timer = setTimeout(async () => {
        this.payButton.setSubscription(false);
      }, 5000);
      window.Shopline.event.on(PaymentUpdate, async ({
        isSubscription
      }) => {
        clearTimeout(timer);
        timer = null;
        this.payButton.setSubscription(isSubscription);
      });
    }
    async render() {
      await this.payButton.render();
      if (this.isSubscription) {
        this.addSubscriptionListener();
      }
    }
    setDisabled(value, options) {
      this.payButton.setDisabled(value, options);
    }
    setVisible(value, options) {
      this.payButton.setVisible(value, options);
    }
    customButtons(params) {
      this.payButton.customButtons(params);
    }
    getRenderedButtons() {
      return this.payButton.getRenderedButtons();
    }
  }
  _exports.default = PaymentButton;
  return _exports;
}();