window.SLM = window.SLM || {};

window.SLM['customer/order/detail/script/main.js'] = window.SLM['customer/order/detail/script/main.js'] || function () {
  const _exports = {};
  const CustomerOrderDetail = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/index.js'].default;

  class CustomerOrderDetailInTheme extends CustomerOrderDetail {
    init() {
      super.init();
    }

  }

  const customerOrderDetailInTheme = new CustomerOrderDetailInTheme();
  customerOrderDetailInTheme.init();
  return _exports;
}();