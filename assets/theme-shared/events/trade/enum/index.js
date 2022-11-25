window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/enum/index.js'] = window.SLM['theme-shared/events/trade/enum/index.js'] || function () {
  const _exports = {};
  const SIDEBAR_RENDER = 'Cart::SidebarRender';
  _exports.SIDEBAR_RENDER = SIDEBAR_RENDER;
  const ADD_TO_CART = 'Cart::AddToCart';
  _exports.ADD_TO_CART = ADD_TO_CART;
  const COMPLETE_ORDER = 'Checkout::CompleteOrder';
  _exports.COMPLETE_ORDER = COMPLETE_ORDER;
  const FINISHED_ORDER = 'Checkout::FinishedOrder';
  _exports.FINISHED_ORDER = FINISHED_ORDER;
  const CONTROL_CART_BASIS = 'Cart::ControlCartBasis';
  _exports.CONTROL_CART_BASIS = CONTROL_CART_BASIS;
  const UPDATE_CHECKOUT_DETAIL = 'Checkout::UpdateCheckoutDetail';
  _exports.UPDATE_CHECKOUT_DETAIL = UPDATE_CHECKOUT_DETAIL;
  const CHECKOUT_DETAIL_INIT = 'Checkout::CheckoutDetailInit';
  _exports.CHECKOUT_DETAIL_INIT = CHECKOUT_DETAIL_INIT;
  const CHECKOUT_DETAIL_UPDATE = 'Checkout::CheckoutDetailUpdate';
  _exports.CHECKOUT_DETAIL_UPDATE = CHECKOUT_DETAIL_UPDATE;
  const CART_DETAIL_UPDATE = 'Cart::CartDetailUpdate';
  _exports.CART_DETAIL_UPDATE = CART_DETAIL_UPDATE;
  const LINE_ITEM_UPDATE = 'Cart::LineItemUpdate';
  _exports.LINE_ITEM_UPDATE = LINE_ITEM_UPDATE;
  return _exports;
}();