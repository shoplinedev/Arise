window.SLM = window.SLM || {};

window.SLM['customer/message/main.js'] = window.SLM['customer/message/main.js'] || function () {
  const _exports = {};
  const Message = window['SLM']['theme-shared/biz-com/customer/biz/message/index.js'].default;
  $(function () {
    new Message();
  });
  return _exports;
}();