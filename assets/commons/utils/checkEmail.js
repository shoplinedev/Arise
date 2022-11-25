window.SLM = window.SLM || {};

window.SLM['commons/utils/checkEmail.js'] = window.SLM['commons/utils/checkEmail.js'] || function () {
  const _exports = {};
  const { EMAIL_VALID_REGEXP } = window['SLM']['theme-shared/utils/emailReg.js'];

  const checkEmail = email => {
    if (!EMAIL_VALID_REGEXP.test(String(email).toLowerCase())) {
      return 'regexp';
    }

    if (email && email.length > 50) {
      return 'length.over';
    }

    return true;
  };

  _exports.default = checkEmail;
  return _exports;
}();