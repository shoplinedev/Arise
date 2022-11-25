window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/common.js'] = window.SLM['theme-shared/biz-com/customer/service/common.js'] || function () {
  const _exports = {};
  const { request, udbRequest } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const getMethodList = params => {
    return udbRequest.get('/udb/aq/uni/getMethodList.do', {
      params
    });
  };

  _exports.getMethodList = getMethodList;

  const passVerify = params => {
    return udbRequest.get('/udb/aq/uni/pass.do', {
      params
    });
  };

  _exports.passVerify = passVerify;

  const getCurrentTime = () => {
    return request.get('/user/front/userinfo/getCurrentTime');
  };

  _exports.getCurrentTime = getCurrentTime;
  return _exports;
}();