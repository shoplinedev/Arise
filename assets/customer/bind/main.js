window.SLM = window.SLM || {};

window.SLM['customer/bind/main.js'] = window.SLM['customer/bind/main.js'] || function () {
  const _exports = {};
  const Bind = window['SLM']['theme-shared/biz-com/customer/biz/bind/index.js'].default;
  $(function () {
    if (!document.getElementById('customer-bind')) {
      return false;
    }

    new Bind({
      id: 'customer-bind'
    });
  });
  return _exports;
}();