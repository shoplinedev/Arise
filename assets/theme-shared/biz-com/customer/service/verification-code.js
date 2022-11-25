window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/verification-code.js'] = window.SLM['theme-shared/biz-com/customer/service/verification-code.js'] || function () {
  const _exports = {};
  const { udbRequest } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const sendPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/sendSms.do', {
      params
    });
  };

  _exports.sendPhoneVerificationCode = sendPhoneVerificationCode;

  const sendEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/sendEmailCode.do', {
      params
    });
  };

  _exports.sendEmailVerificationCode = sendEmailVerificationCode;

  const verifyPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/verifySms.do', {
      params
    });
  };

  _exports.verifyPhoneVerificationCode = verifyPhoneVerificationCode;

  const verifyEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/verifyEmailCode.do', {
      params
    });
  };

  _exports.verifyEmailVerificationCode = verifyEmailVerificationCode;
  return _exports;
}();