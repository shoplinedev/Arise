window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/utils/index.js'] = window.SLM['theme-shared/biz-com/orderTracking/utils/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { CODE_PHONE_PATTERN, INTERNATIONAL_PHONE_PATTERN, PHONE_PATTERN, EMAIL_PATTERN } = window['SLM']['theme-shared/utils/pattern.js'];
  const LANGUAGE_MAP = {
    emailError: 'customer.general.email_error_hint',
    phoneError: 'customer.general.phone_error_message'
  };
  _exports.LANGUAGE_MAP = LANGUAGE_MAP;

  const formatterCodePhone = codePhone => {
    return codePhone.replace(/[a-z]+\+(\d+)-(\d+)/i, '00$1$2');
  };

  _exports.formatterCodePhone = formatterCodePhone;
  const DEFAULT_LANGUAGE = 'en';
  _exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;

  const formatPhone = phone => {
    const result = {};

    if (phone) {
      const exec = CODE_PHONE_PATTERN.exec(phone);

      if (exec) {
        result.phone = `${exec[2]}${exec[3]}`.replace('+', '00');
        result._code = exec[1].slice(0, -exec[2].length);
      }
    }

    return result;
  };

  _exports.formatPhone = formatPhone;

  const phoneNumberValidator = value => {
    return new Promise((resolve, reject) => {
      if (CODE_PHONE_PATTERN.test(value)) {
        const {
          $2,
          $3
        } = RegExp;

        if (INTERNATIONAL_PHONE_PATTERN.test(`${$2}${$3}`) && (!PHONE_PATTERN[$2] || PHONE_PATTERN[$2].test($3))) {
          resolve();
        }
      }

      reject(LANGUAGE_MAP.phoneError);
    });
  };

  _exports.phoneNumberValidator = phoneNumberValidator;

  const emailValidator = value => {
    return new Promise((resolve, reject) => {
      EMAIL_PATTERN.test(value) && value.length <= 50 ? resolve() : reject(LANGUAGE_MAP.emailError);
    });
  };

  _exports.emailValidator = emailValidator;

  const usernameValidator = value => {
    if (CODE_PHONE_PATTERN.test(value) && RegExp.$3) {
      return phoneNumberValidator(value);
    }

    return emailValidator(value);
  };

  _exports.usernameValidator = usernameValidator;
  const UDB_RESPONSE_LANGUAGE_ERROR_CODES = [-1, -4, -5, -13, -999, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1020, 1021, 1022, 1023, 1024, 1035, 2001, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2016, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3014, 3019, 2014];
  _exports.UDB_RESPONSE_LANGUAGE_ERROR_CODES = UDB_RESPONSE_LANGUAGE_ERROR_CODES;
  const keyMaps = {
    '-1': '2',
    '-13': '3',
    '-4': '4',
    '-5': '5',
    '-999': '6'
  };

  const getUdbResponseLanguageErrorKey = rescode => {
    if (UDB_RESPONSE_LANGUAGE_ERROR_CODES.indexOf(Number(rescode)) > -1) {
      return `unvisiable.customer.error_message_${keyMaps[rescode] || rescode}`;
    }

    return undefined;
  };

  _exports.getUdbResponseLanguageErrorKey = getUdbResponseLanguageErrorKey;

  function getUdbErrorMessage(res) {
    const errorKey = getUdbResponseLanguageErrorKey(res.rescode);
    return errorKey ? t(errorKey) : res.message || t('general.order_tracking.form_error');
  }

  _exports.getUdbErrorMessage = getUdbErrorMessage;

  function getLanguage() {
    return window && window.SL_State && window.SL_State.get('request.cookie.lang') || DEFAULT_LANGUAGE;
  }

  _exports.getLanguage = getLanguage;
  return _exports;
}();