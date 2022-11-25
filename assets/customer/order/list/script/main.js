window.SLM = window.SLM || {};

window.SLM['customer/order/list/script/main.js'] = window.SLM['customer/order/list/script/main.js'] || function () {
  const _exports = {};
  const CustomerOrderList = window['SLM']['theme-shared/biz-com/customer/biz/order/list/index.js'].default;

  class CustomerOrderListInTheme extends CustomerOrderList {}

  const customerOrderListInTheme = new CustomerOrderListInTheme();
  customerOrderListInTheme.init();
  return _exports;
}();