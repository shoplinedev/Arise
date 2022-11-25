window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/tradeReport/hdReportV2.js'] = window.SLM['theme-shared/utils/tradeReport/hdReportV2.js'] || function () {
  const _exports = {};
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { pageMapV2 } = window['SLM']['theme-shared/utils/tradeReport/const.js'];

  const reportEvent = data => {
    window.HdSdk && window.HdSdk.shopTracker.collect(data);
  };

  const setProduct = data => {
    const product_id = [];
    const variantion_id = [];
    const quantity = [];
    const price = [];
    const product_name = [];
    const isCheckoutPage = window.Shopline.uri.alias === 'Checkout';
    data && data.forEach(item => {
      const {
        productSeq,
        productSku,
        productNum,
        finalPrice,
        productPrice,
        productName
      } = item || {};
      product_id.push(productSeq);
      variantion_id.push(productSku);
      quantity.push(productNum);
      price.push(currencyUtil.formatNumber(Number(isCheckoutPage ? finalPrice : productPrice) || 0).toString());
      product_name.push(productName);
    });
    return {
      product_id: product_id.join(','),
      variantion_id: variantion_id.join(','),
      quantity: quantity.join(','),
      price: price.join(','),
      product_name: product_name.join(',')
    };
  };

  const reportCoupon = data => {
    reportEvent(data);
  };

  const reportV2Checkout = data => {
    const {
      products,
      ...ext
    } = data;
    const items = setProduct(products);
    reportEvent({ ...ext,
      ...items
    });
  };

  const reportMiniCartView = () => {
    reportEvent({
      page: pageMapV2.MiniCart,
      module: -999,
      component: -999,
      action_type: 108
    });
  };

  _exports.setProduct = setProduct;
  _exports.reportV2Checkout = reportV2Checkout;
  _exports.reportCoupon = reportCoupon;
  _exports.reportEvent = reportEvent;
  _exports.reportMiniCartView = reportMiniCartView;
  return _exports;
}();