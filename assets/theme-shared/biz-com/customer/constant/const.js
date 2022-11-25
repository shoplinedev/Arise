window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/constant/const.js'] = window.SLM['theme-shared/biz-com/customer/constant/const.js'] || function () {
  const _exports = {};
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const IS_PROD = ['preview', 'product'].includes(getEnv().APP_ENV || '');
  _exports.IS_PROD = IS_PROD;
  const THIRD_DEFAULT_REGION = 'CN';
  _exports.THIRD_DEFAULT_REGION = THIRD_DEFAULT_REGION;
  const DEFAULT_LANGUAGE = 'en';
  _exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
  const UDB_PARAMS = {
    type: 'member',
    appid: IS_PROD ? '1165600903' : '1163336839',
    subappid: '5',
    mode: 'username'
  };
  _exports.UDB_PARAMS = UDB_PARAMS;
  const THIRD_EXTRA_PARAMS = {
    facebook: {},
    line: {
      scope: 'profile openid email'
    },
    google: {
      scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
      access_type: 'offline'
    }
  };
  _exports.THIRD_EXTRA_PARAMS = THIRD_EXTRA_PARAMS;
  const DEFAULT_PHONE_ISO2 = 'cn';
  _exports.DEFAULT_PHONE_ISO2 = DEFAULT_PHONE_ISO2;
  const DEFAULT_PHONE_CODE = 'cn+86';
  _exports.DEFAULT_PHONE_CODE = DEFAULT_PHONE_CODE;
  const DEFAULT_PHONE_CODE2 = '+86';
  _exports.DEFAULT_PHONE_CODE2 = DEFAULT_PHONE_CODE2;
  const CHANNEL_TO_METHOD = {
    line: 'Line',
    facebook: 'Facebook',
    google: 'Google'
  };
  _exports.CHANNEL_TO_METHOD = CHANNEL_TO_METHOD;
  const DEFAULT_FORM_VALUE = 'DEFAULT_FORM_VALUE';
  _exports.DEFAULT_FORM_VALUE = DEFAULT_FORM_VALUE;
  const ACCOUNT_ACTIVATED = 'ACCOUNT_ACTIVATED';
  _exports.ACCOUNT_ACTIVATED = ACCOUNT_ACTIVATED;
  const CONFIRM_SUBSCRIBE_EMAIL = 'confirmSubscribeEmail';
  _exports.CONFIRM_SUBSCRIBE_EMAIL = CONFIRM_SUBSCRIBE_EMAIL;
  const SUBSCRIBE_STATUS_MAP = {
    CANCEL: 0,
    SUBSCRIBE: 1,
    UNSUBSCRIBE: 2,
    CONFIRMING: 3,
    UNVALID: 4,
    DELETED: 5
  };
  _exports.SUBSCRIBE_STATUS_MAP = SUBSCRIBE_STATUS_MAP;
  const RESET_PASSWORD_TOKEN_EXPIRED = 'RESET_PASSWORD_TOKEN_EXPIRED';
  _exports.RESET_PASSWORD_TOKEN_EXPIRED = RESET_PASSWORD_TOKEN_EXPIRED;
  const ACCOUNT_ACTIVATED_TOKEN_EXPIRED = 'ACCOUNT_ACTIVATED_TOKEN_EXPIRED';
  _exports.ACCOUNT_ACTIVATED_TOKEN_EXPIRED = ACCOUNT_ACTIVATED_TOKEN_EXPIRED;
  const REGISTER_EXTRA_INFO = 'REGISTER_EXTRA_INFO';
  _exports.REGISTER_EXTRA_INFO = REGISTER_EXTRA_INFO;
  return _exports;
}();