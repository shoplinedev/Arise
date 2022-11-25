window.SLM = window.SLM || {};

window.SLM['customer/sign-up/main.js'] = window.SLM['customer/sign-up/main.js'] || function () {
  const _exports = {};
  const Register = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/index.js'].default;
  $(() => {
    if (!document.getElementById('customer-register')) {
      return false;
    }

    new Register({
      id: 'customer-register'
    });
  });
  return _exports;
}();