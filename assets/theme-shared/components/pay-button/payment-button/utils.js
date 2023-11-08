window.SLM = window.SLM || {};
window.SLM['theme-shared/components/pay-button/payment-button/utils.js'] = window.SLM['theme-shared/components/pay-button/payment-button/utils.js'] || function () {
  const _exports = {};
  const { getPaymentInfo } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const isPreview = () => {
    return SL_State.get('templateAlias') === 'PreviewProductsDetail';
  };
  _exports.isPreview = isPreview;
  const getConfig = pageType => {
    const pageData = getPaymentInfo(pageType);
    if (!pageData || !pageData.buttonLocationDataList) return null;
    const config = pageData.buttonLocationDataList.find(item => {
      return item.buttonLocation === pageType;
    });
    if (!config) return null;
    return config || null;
  };
  _exports.getConfig = getConfig;
  const productSubscription = SL_State.get('product.selling_plan_groups') || [];
  _exports.productSubscription = productSubscription;
  const cartInfoSubscriptionInfo = SL_State.get('cartInfo.subscriptionInfo') || {};
  _exports.cartInfoSubscriptionInfo = cartInfoSubscriptionInfo;
  const PageType = {
    ProductDetail: 'productDetail',
    Cart: 'cart',
    MiniCart: 'MiniCart',
    Checkout: 'checkout'
  };
  _exports.PageType = PageType;
  const isSubscription = pageType => {
    if (pageType === PageType.ProductDetail) {
      return !!productSubscription.length;
    }
    if (pageType === PageType.Cart) {
      if (!cartInfoSubscriptionInfo.existSubscription) return false;
      return !(cartInfoSubscriptionInfo.existSubscription === false);
    }
    return false;
  };
  _exports.isSubscription = isSubscription;
  const isStandard = pageType => {
    const pageData = getPaymentInfo(pageType);
    if (!pageData || !pageData.buttonLocationDataList) return true;
    if (!pageData.grayscaleButtonLocation) return false;
    return pageData.grayscaleButtonLocation.includes(pageType);
  };
  _exports.isStandard = isStandard;
  return _exports;
}();