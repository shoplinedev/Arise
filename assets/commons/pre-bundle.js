window.SLM = window.SLM || {};

window.SLM['commons/pre-bundle.js'] = window.SLM['commons/pre-bundle.js'] || function () {
  const _exports = {};
  const register = window['SLM']['theme-shared/events/trade/developer-api/index.js'].default;
  const registerCustomerEvents = window['SLM']['theme-shared/events/customer/developer-api/index.js'].default;
  const dataReport = window['SLM']['theme-shared/utils/dataReport/index.js'].default;
  const { setSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const { ApiCart } = window['@sl/cart']['/lib/api-cart'];
  register('Cart::GetCartId', 'Cart::NavigateCart', 'Checkout::NavigateCheckout', 'Cart::AddToCart', 'Cart::ControlCartBasis', 'Cart::CartDetailUpdate', 'Cart::LineItemUpdate');
  registerCustomerEvents('Customer::LoginModal', 'Customer::Register');
  dataReport && dataReport.listen && dataReport.listen('DataReport::AddToCart');
  setSyncData({
    orderFrom: 'web'
  });
  window.ApiCartAddV2 = ApiCart.ApiCartAddV2;
  ApiCart.initInterceptorAjaxAddToCart();
  return _exports;
}();