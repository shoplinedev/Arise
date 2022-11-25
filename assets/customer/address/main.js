window.SLM = window.SLM || {};

window.SLM['customer/address/main.js'] = window.SLM['customer/address/main.js'] || function () {
  const _exports = {};
  const CustomerAddress = window['SLM']['theme-shared/biz-com/customer/biz/address/index.js'].default;
  const containerId = 'customer-address';
  $(function () {
    if (!document.getElementById(containerId)) {
      return false;
    }

    new CustomerAddress({
      id: containerId
    });
  });
  return _exports;
}();