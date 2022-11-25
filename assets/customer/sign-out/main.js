window.SLM = window.SLM || {};

window.SLM['customer/sign-out/main.js'] = window.SLM['customer/sign-out/main.js'] || function () {
  const _exports = {};
  const { runSignOut } = window['SLM']['theme-shared/biz-com/customer/biz/sign-out/index.js'];
  $(() => {
    runSignOut();
  });
  return _exports;
}();