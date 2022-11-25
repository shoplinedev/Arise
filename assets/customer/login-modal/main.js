window.SLM = window.SLM || {};

window.SLM['customer/login-modal/main.js'] = window.SLM['customer/login-modal/main.js'] || function () {
  const _exports = {};
  const initLoginModal = window['SLM']['theme-shared/biz-com/customer/biz/login-modal/index.js'].default;
  $(() => initLoginModal());
  return _exports;
}();