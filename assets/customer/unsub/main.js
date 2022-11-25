window.SLM = window.SLM || {};

window.SLM['customer/unsub/main.js'] = window.SLM['customer/unsub/main.js'] || function () {
  const _exports = {};
  const Unsub = window['SLM']['theme-shared/biz-com/customer/biz/unsub/index.js'].default;
  $(function () {
    new Unsub({
      id: 'customer-unsubscribe'
    });
  });
  return _exports;
}();