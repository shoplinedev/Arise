window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/message/const.js'] = window.SLM['theme-shared/biz-com/customer/biz/message/const.js'] || function () {
  const _exports = {};
  const pageId = 124;
  _exports.pageId = pageId;
  const ESenderType = {
    merchant: 1,
    user: 2
  };
  _exports.ESenderType = ESenderType;
  const ESendStatus = {
    notSend: 0,
    success: 1,
    fail: -1
  };
  _exports.ESendStatus = ESendStatus;
  return _exports;
}();