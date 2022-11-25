window.SLM = window.SLM || {};

window.SLM['customer/activate-account/main.js'] = window.SLM['customer/activate-account/main.js'] || function () {
  const _exports = {};
  const ActivateAccount = window['SLM']['theme-shared/biz-com/customer/biz/activate-account/index.js'].default;
  $(() => {
    new ActivateAccount({
      id: 'customer-activate'
    });
  });
  return _exports;
}();