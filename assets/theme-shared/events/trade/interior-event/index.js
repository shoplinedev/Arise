window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/interior-event/index.js'] = window.SLM['theme-shared/events/trade/interior-event/index.js'] || function () {
  const _exports = {};
  const OPEN_MINI_CART = Symbol('OPEN_MINI_CART');
  _exports.OPEN_MINI_CART = OPEN_MINI_CART;
  const ADD_TO_CART = Symbol('ADD_TO_CART');
  _exports.ADD_TO_CART = ADD_TO_CART;
  const CONTROL_CART_BASIS = Symbol('CONTROL_CART_BASIS');
  _exports.CONTROL_CART_BASIS = CONTROL_CART_BASIS;
  const INTERIOR_TRADE_UPDATE_DETAIL = 'Checkout::Interior::UpdateCheckoutDetail';
  _exports.INTERIOR_TRADE_UPDATE_DETAIL = INTERIOR_TRADE_UPDATE_DETAIL;
  const LINE_ITEM_UPDATE = Symbol('LINE_ITEM_UPDATE');
  _exports.LINE_ITEM_UPDATE = LINE_ITEM_UPDATE;
  return _exports;
}();