window.SLM = window.SLM || {};

window.SLM['commons/logger/sentryReport.js'] = window.SLM['commons/logger/sentryReport.js'] || function () {
  const _exports = {};
  const Owner = {
    MiniCart: 'checkout.cart.mini',
    MainCart: 'checkout.cart.main',
    Cart: 'checkout.common.cart',
    Coupon: 'checkout.common.coupon'
  };
  _exports.Owner = Owner;
  const Action = {
    InitCart: 'initCart',
    TakeCart: 'takeCart',
    OpenCart: 'openCart',
    Add2Cart: 'add2Cart',
    EditCart: 'editCart',
    ClearCart: 'clearCart',
    CallingInterface: 'callingInterface'
  };
  _exports.Action = Action;
  return _exports;
}();