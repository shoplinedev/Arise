window.SLM = window.SLM || {};

window.SLM['cart/script/biz/trade-coupon/index.js'] = window.SLM['cart/script/biz/trade-coupon/index.js'] || function () {
  const _exports = {};
  const { initReductionCodeComponent } = window['@sl/cart']['/lib/ReductionCode/index'];
  const { createCartPageReductionCodeFactory, ReductionCodeService } = window['@sl/cart']['/lib/ReductionCode/services/index'];
  const store = window['@sl/cart']['/lib/utils/store'].default;

  function initCoupon() {
    store.add({
      currentCart: 'ONLINE_CART'
    });
    initReductionCodeComponent(new ReductionCodeService(createCartPageReductionCodeFactory()), 'ONLINE_CART');
  }

  _exports.default = initCoupon;
  return _exports;
}();