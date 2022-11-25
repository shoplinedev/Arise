window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/infomation.js'] = window.SLM['theme-shared/biz-com/customer/service/infomation.js'] || function () {
  const _exports = {};
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const updateMemberInfo = data => {
    return request.post('/user/front/userinfo/updateMemberInfo', data);
  };

  _exports.updateMemberInfo = updateMemberInfo;
  return _exports;
}();