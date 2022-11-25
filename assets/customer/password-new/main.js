window.SLM = window.SLM || {};

window.SLM['customer/password-new/main.js'] = window.SLM['customer/password-new/main.js'] || function () {
  const _exports = {};
  const PasswordNew = window['SLM']['theme-shared/biz-com/customer/biz/password-new/index.js'].default;
  $(function () {
    if (!document.getElementById('customer-password')) {
      return false;
    }

    new PasswordNew({
      id: 'customer-password'
    });
  });
  return _exports;
}();