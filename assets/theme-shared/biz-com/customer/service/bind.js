window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/bind.js'] = window.SLM['theme-shared/biz-com/customer/service/bind.js'] || function () {
  const _exports = {};
  const { udbRequest, request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const getBindEmailInitConfig = params => {
    return udbRequest.get('/udb/aq/email/bind/init.do', {
      params
    });
  };

  _exports.getBindEmailInitConfig = getBindEmailInitConfig;

  const getBindPhoneInitConfig = params => {
    return udbRequest.get('/udb/aq/mobile/bind/init.do', {
      params
    });
  };

  _exports.getBindPhoneInitConfig = getBindPhoneInitConfig;

  const sendBindPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/mobile/bind/sendSms.do', {
      params
    });
  };

  _exports.sendBindPhoneVerificationCode = sendBindPhoneVerificationCode;

  const sendBindEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/email/bind/sendCode.do', {
      params
    });
  };

  _exports.sendBindEmailVerificationCode = sendBindEmailVerificationCode;

  const updateBindInfo = type => {
    return request.get(`/user/front/userinfo/sync/${type}`);
  };

  _exports.updateBindInfo = updateBindInfo;

  const verifyBindPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/mobile/bind/bind.do', {
      params
    });
  };

  _exports.verifyBindPhoneVerificationCode = verifyBindPhoneVerificationCode;

  const verifyBindEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/email/bind/bind.do', {
      params
    });
  };

  _exports.verifyBindEmailVerificationCode = verifyBindEmailVerificationCode;
  return _exports;
}();