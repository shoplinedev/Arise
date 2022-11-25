window.SLM = window.SLM || {};

window.SLM['customer/account/main.js'] = window.SLM['customer/account/main.js'] || function () {
  const _exports = {};
  const Account = window['SLM']['theme-shared/biz-com/customer/biz/account/index.js'].default;
  $(function () {
    new Account();
  });
  return _exports;
}();