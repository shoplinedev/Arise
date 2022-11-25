window.SLM = window.SLM || {};

window.SLM['customer/reset-password/main.js'] = window.SLM['customer/reset-password/main.js'] || function () {
  const _exports = {};
  const ResetPassword = window['SLM']['theme-shared/biz-com/customer/biz/reset-password/index.js'].default;
  $(function () {
    if (!document.getElementById('reset-password')) {
      return false;
    }

    new ResetPassword({
      id: 'reset-password'
    });
  });
  return _exports;
}();