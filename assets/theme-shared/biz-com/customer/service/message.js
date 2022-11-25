window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/message.js'] = window.SLM['theme-shared/biz-com/customer/service/message.js'] || function () {
  const _exports = {};
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const sendMessageInSite = data => {
    return request.post('/sc/mc/shop/online/send', data);
  };

  _exports.sendMessageInSite = sendMessageInSite;

  const queryMessageInSite = data => {
    const {
      createTime = Date.now(),
      pageSize = 20
    } = data;
    return request.get(`/sc/mc/shop/online/message?createTime=${createTime}&pageSize=${pageSize}`);
  };

  _exports.queryMessageInSite = queryMessageInSite;
  return _exports;
}();