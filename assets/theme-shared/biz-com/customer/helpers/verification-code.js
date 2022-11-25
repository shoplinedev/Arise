window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/verification-code.js'] = window.SLM['theme-shared/biz-com/customer/helpers/verification-code.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const formatRequestBody = window['SLM']['theme-shared/biz-com/customer/helpers/formatRequestBody.js'].default;
  const { sendPhoneVerificationCode, sendEmailVerificationCode, verifyPhoneVerificationCode, verifyEmailVerificationCode } = window['SLM']['theme-shared/biz-com/customer/service/verification-code.js'];

  const sendUniversalVerificationCode = params => {
    const sendCodeFn = params._method && params._method.includes('sms') ? sendPhoneVerificationCode : sendEmailVerificationCode;
    return sendCodeFn(formatRequestBody(params));
  };

  _exports.sendUniversalVerificationCode = sendUniversalVerificationCode;

  const verifyUniversalVerificationCode = (params, data) => {
    if (params.stoken) {
      const verifyCodeFn = params._method && params._method.includes('sms') ? verifyPhoneVerificationCode : verifyEmailVerificationCode;
      return verifyCodeFn(formatRequestBody({ ...params,
        code: data.code
      }));
    }

    return Promise.reject({
      resmsg: t('customer.general.send_error')
    });
  };

  _exports.verifyUniversalVerificationCode = verifyUniversalVerificationCode;
  return _exports;
}();