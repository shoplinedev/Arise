window.SLM = window.SLM || {};
window.SLM['theme-shared/utils/tradeReport/const.js'] = window.SLM['theme-shared/utils/tradeReport/const.js'] || function () {
  const _exports = {};
  const { ReportPageType } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const MINI_CART = 60006262;
  _exports.MINI_CART = MINI_CART;
  const HD_EVENT_NAME = {
    GO_TO_CHECKOUT: 'trade:goToCheckout:report',
    PAYPAL_CHECKOUT: 'trade:spb:report',
    COUPON_INPUT: 'trade:coupon:input:report',
    COUPON_APPLY: 'trade:coupon:apply:report',
    COUPON_DELETE: 'trade:coupon:delete:report',
    PAYPAL_CHECKOUT_V2: 'trade:spb:report:hiidov2'
  };
  _exports.HD_EVENT_NAME = HD_EVENT_NAME;
  const pageMap = {
    Cart: 60006254,
    MiniCart: 60006262
  };
  _exports.pageMap = pageMap;
  const pageMapV2 = {
    Cart: 106,
    MiniCart: 108
  };
  _exports.pageMapV2 = pageMapV2;
  const cartPage = {
    Cart: 'Cart',
    MiniCart: 'MiniCart',
    FilterModal: 'FilterModal'
  };
  _exports.cartPage = cartPage;
  const hiidoEventStatus = {
    SUCCESS: 1,
    ERROR: 0
  };
  _exports.hiidoEventStatus = hiidoEventStatus;
  const HdModule = {
    checkout: 112,
    couponCode: 118,
    normal: -999,
    [ReportPageType.productDetail]: 103,
    [ReportPageType.Cart]: 104,
    [ReportPageType.MiniCart]: 104,
    [ReportPageType.checkout]: 104
  };
  _exports.HdModule = HdModule;
  const ActionType = {
    click: 102,
    input: 103
  };
  _exports.ActionType = ActionType;
  const HdComponent = {
    couponCodeInput: 133,
    couponCodeUse: 134,
    checkout: 101,
    paypalBtn: 102,
    paylater: 129,
    continueShopping: 146,
    fcButton: 108
  };
  _exports.HdComponent = HdComponent;
  const HDPage = {
    [ReportPageType.productDetail]: 101,
    [ReportPageType.Cart]: 102,
    [ReportPageType.MiniCart]: 103,
    [ReportPageType.checkout]: 108
  };
  _exports.HDPage = HDPage;
  const HDEventId = {
    [ReportPageType.productDetail]: 7077,
    [ReportPageType.Cart]: 7078,
    [ReportPageType.MiniCart]: 7079,
    [ReportPageType.checkout]: 7161
  };
  _exports.HDEventId = HDEventId;
  const HDEventName = {
    [ReportPageType.productDetail]: 'pdp_fc',
    [ReportPageType.Cart]: 'cartPage_fc',
    [ReportPageType.MiniCart]: 'miniCart_fc',
    [ReportPageType.checkout]: 'fc_checkout_fc'
  };
  _exports.HDEventName = HDEventName;
  return _exports;
}();