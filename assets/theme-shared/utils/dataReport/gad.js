window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/gad.js'] = window.SLM['theme-shared/utils/dataReport/gad.js'] || function () {
  const _exports = {};
  const { PageType, ClickType } = window['SLM']['theme-shared/utils/report/const.js'];
  const { getCurrencyCode } = window['SLM']['theme-shared/utils/dataReport/tool.js'];

  const sendConversion = data => {
    const params = { ...data
    };

    if (params && !params.currency) {
      params.currency = getCurrencyCode();
    }

    return ['event', 'conversion', params];
  };

  const clickAdsData = (page, type) => {
    const res = [];

    switch (page) {
      case PageType.ProductDetail:
        switch (type) {
          case ClickType.AddToCart:
          case ClickType.BeginCheckout:
            break;

          default:
            return res;
        }

        break;

      case PageType.MiniCart:
      case PageType.Cart:
        switch (type) {
          case ClickType.BeginCheckout:
            break;

          default:
            return res;
        }

        break;

      case PageType.CheckoutProgress:
        switch (type) {
          case ClickType.CheckoutProgress:
            break;

          default:
            return res;
        }

        break;

      case PageType.CheckoutConfirm:
        switch (type) {
          case ClickType.PlaceOrder:
            break;

          default:
            return res;
        }

        break;

      case PageType.OneShop:
        switch (type) {
          case ClickType.BeginCheckout:
            break;

          default:
            return res;
        }

        break;

      default:
        return res;
    }

    res.push(sendConversion());
    return res;
  };

  const loadAdsData = (page, params) => {
    let value = null;
    const data = [];

    switch (page) {
      case PageType.Cart:
      case PageType.CheckoutProgress:
      case PageType.CheckoutConfirm:
      case PageType.SalesPromotion:
        break;

      case PageType.OrderConfirm:
        value = {
          value: params.price,
          currency: params.currency
        };
        break;

      default:
        return data;
    }

    data.push(sendConversion(value));
    return data;
  };

  _exports.clickAdsData = clickAdsData;
  _exports.loadAdsData = loadAdsData;
  return _exports;
}();