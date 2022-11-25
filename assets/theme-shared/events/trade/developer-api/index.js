window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/index.js'] = window.SLM['theme-shared/events/trade/developer-api/index.js'] || function () {
  const _exports = {};
  const navigateCheckout = window['SLM']['theme-shared/events/trade/developer-api/navigate-checkout/index.js'].default;
  const getCartId = window['SLM']['theme-shared/events/trade/developer-api/get-cart-id/index.js'].default;
  const renderPaypal = window['SLM']['theme-shared/events/trade/developer-api/render-paypal/index.js'].default;
  const navigateCart = window['SLM']['theme-shared/events/trade/developer-api/navigate-cart/index.js'].default;
  const addToCart = window['SLM']['theme-shared/events/trade/developer-api/add-to-cart/index.js'].default;
  const updateCheckoutDetail = window['SLM']['theme-shared/events/trade/developer-api/update-checkout-detail/index.js'].default;
  const controlCartBasis = window['SLM']['theme-shared/events/trade/developer-api/control-cart-basis/index.js'].default;
  const cartLineItemUpdate = window['SLM']['theme-shared/events/trade/developer-api/cart-line-item-update/index.js'].default;
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const cartDetailUpdate = window['SLM']['theme-shared/events/trade/developer-api/cart-detail-update/index.js'].default;
  const checkoutDetailInit = window['SLM']['theme-shared/events/trade/developer-api/checkout-detail-init/index.js'].default;
  const checkoutDetailUpdate = window['SLM']['theme-shared/events/trade/developer-api/checkout-detail-update/index.js'].default;
  const logger = apiLogger('register');
  const events = [navigateCheckout, getCartId, renderPaypal, navigateCart, addToCart, controlCartBasis, updateCheckoutDetail, cartDetailUpdate, checkoutDetailInit, checkoutDetailUpdate, cartLineItemUpdate];

  _exports.default = (...activateApiNames) => {
    const executedEvents = [];
    activateApiNames.forEach(activateApiName => {
      events.forEach(event => {
        if (event && event.apiName === activateApiName) {
          executedEvents.push(activateApiName);
          event();
        }
      });
    });
    logger.info('executed events', executedEvents);
    return executedEvents;
  };

  return _exports;
}();