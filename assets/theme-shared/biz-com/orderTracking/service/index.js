window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/service/index.js'] = window.SLM['theme-shared/biz-com/orderTracking/service/index.js'] || function () {
  const _exports = {};
  const { udbRequest, request } = window['SLM']['theme-shared/biz-com/orderTracking/service/request.js'];

  const initUdbLogin = params => {
    return udbRequest.get('/udb/lgn/login/init.do', {
      params
    });
  };

  _exports.initUdbLogin = initUdbLogin;

  const sendEmailCode = params => {
    return udbRequest.get('/udb/lgn/login/sendEmail.do', {
      params
    });
  };

  _exports.sendEmailCode = sendEmailCode;

  const verifyEmailLogin = params => {
    return udbRequest.get('/udb/lgn/login/verifyEmail.do', {
      params
    });
  };

  _exports.verifyEmailLogin = verifyEmailLogin;

  const checkOrder = data => {
    return request.post('/site/check/order/query', data);
  };

  _exports.checkOrder = checkOrder;
  return _exports;
}();