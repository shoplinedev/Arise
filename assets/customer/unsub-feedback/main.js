window.SLM = window.SLM || {};

window.SLM['customer/unsub-feedback/main.js'] = window.SLM['customer/unsub-feedback/main.js'] || function () {
  const _exports = {};
  const UnsubFeedback = window['SLM']['theme-shared/biz-com/customer/biz/unsub-feedback/index.js'].default;
  $(function () {
    new UnsubFeedback();
  });
  return _exports;
}();