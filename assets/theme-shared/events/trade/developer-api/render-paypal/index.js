window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/render-paypal/index.js'] = window.SLM['theme-shared/events/trade/developer-api/render-paypal/index.js'] || function () {
  const _exports = {};
  const PayPal = window['@yy/sl-theme-shared']['/components/paypal'].default;
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const EVENT_NAME = 'Paypal::Spb::Render';
  const logger = apiLogger(EVENT_NAME);
  const external = window && window.Shopline.event;

  const paypalRenderHandler = async argument => {
    const {
      data = {},
      onSuccess,
      onError
    } = argument;

    try {
      const paypal = new PayPal(data);
      logger.info(paypal);
      onSuccess && onSuccess(paypal);
    } catch (error) {
      logger.error(error);
      onError && onError(error);
    }
  };

  const renderPayPal = () => external && external.on(EVENT_NAME, paypalRenderHandler);

  renderPayPal.apiName = EVENT_NAME;
  _exports.default = renderPayPal;
  return _exports;
}();