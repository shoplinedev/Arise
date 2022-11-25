window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/pattern.js'] = window.SLM['theme-shared/biz-com/customer/helpers/pattern.js'] || function () {
  const _exports = {};
  const { CODE_PHONE_PATTERN, INTERNATIONAL_PHONE_PATTERN, PHONE_PATTERN, EMAIL_PATTERN } = window['SLM']['theme-shared/biz-com/customer/constant/pattern.js'];
  const { LANGUAGE_MAP } = window['SLM']['theme-shared/biz-com/customer/constant/language.js'];

  const phoneNumberValidator = value => {
    return new Promise((resolve, reject) => {
      if (CODE_PHONE_PATTERN.test(value)) {
        const {
          $2,
          $3
        } = RegExp;

        if (INTERNATIONAL_PHONE_PATTERN.test(`${$2}${$3}`) && (!PHONE_PATTERN[$2] || PHONE_PATTERN[$2].test($3))) {
          return resolve();
        }
      }

      return reject(LANGUAGE_MAP.phoneError);
    });
  };

  _exports.phoneNumberValidator = phoneNumberValidator;

  const emailValidator = value => new Promise((resolve, reject) => EMAIL_PATTERN.test(value) && value.length <= 50 ? resolve() : reject(LANGUAGE_MAP.emailError));

  _exports.emailValidator = emailValidator;

  const usernameValidator = value => {
    if (CODE_PHONE_PATTERN.test(value) && RegExp.$3) {
      return phoneNumberValidator(value);
    }

    return emailValidator(value);
  };

  _exports.usernameValidator = usernameValidator;
  return _exports;
}();