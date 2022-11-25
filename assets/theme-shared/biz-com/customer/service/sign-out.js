window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/sign-out.js'] = window.SLM['theme-shared/biz-com/customer/service/sign-out.js'] || function () {
  const _exports = {};
  const { udbRequest } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const signOut = params => {
    return udbRequest.get('/udb/lgn/login/logout.do', {
      params
    });
  };

  _exports.signOut = signOut;
  return _exports;
}();