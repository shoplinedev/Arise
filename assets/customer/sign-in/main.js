window.SLM = window.SLM || {};

window.SLM['customer/sign-in/main.js'] = window.SLM['customer/sign-in/main.js'] || function () {
  const _exports = {};
  const Login = window['SLM']['theme-shared/biz-com/customer/biz/sign-in/index.js'].default;
  $(() => {
    if (!document.getElementById('customer-login')) {
      return false;
    }

    new Login({
      id: 'customer-login'
    });
  });
  return _exports;
}();