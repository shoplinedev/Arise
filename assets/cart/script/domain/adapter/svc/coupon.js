window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/coupon.js'] = window.SLM['cart/script/domain/adapter/svc/coupon.js'] || function () {
  const _exports = {};
  const { servicesList } = window['@sl/cart']['/lib/config/reductionCode/service'];

  async function applyCoupon(svc, params) {
    return svc.request.post(servicesList.ONLINE_CART.endpointPromotionCode, { ...params
    });
  }

  async function withdrawCoupon(svc, req) {
    return svc.request.delete(servicesList.ONLINE_CART.endpointPromotionCodeDel, {
      data: req
    });
  }

  _exports.default = {
    applyCoupon,
    withdrawCoupon
  };
  return _exports;
}();