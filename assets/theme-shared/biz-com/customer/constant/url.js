window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/constant/url.js'] = window.SLM['theme-shared/biz-com/customer/constant/url.js'] || function () {
  const _exports = {};
  const HOME = '/';
  _exports.HOME = HOME;
  const USER_CENTER = '/user/center';
  _exports.USER_CENTER = USER_CENTER;
  const SIGN_IN = '/user/signIn';
  _exports.SIGN_IN = SIGN_IN;
  const SIGN_UP = '/user/signUp';
  _exports.SIGN_UP = SIGN_UP;
  const UNSUB = '/user/unsubscribe';
  _exports.UNSUB = UNSUB;
  const THIRD_LOGIN_HREF = {
    facebook: 'https://www.facebook.com/v17.0/dialog/oauth',
    line: 'https://access.line.me/oauth2/v2.1/authorize',
    google: 'https://accounts.google.com/o/oauth2/v2/auth'
  };
  _exports.THIRD_LOGIN_HREF = THIRD_LOGIN_HREF;
  const THIRD_REDIRET_URL = typeof window === 'undefined' ? '' : `${window.location.origin}${SIGN_IN}`;
  _exports.THIRD_REDIRET_URL = THIRD_REDIRET_URL;
  const LOGISTICS_COUNTRIES = '/logistics/countries';
  _exports.LOGISTICS_COUNTRIES = LOGISTICS_COUNTRIES;
  const LOGISTICS_ADDRESS_LIBRARY = '/logistics/address/library';
  _exports.LOGISTICS_ADDRESS_LIBRARY = LOGISTICS_ADDRESS_LIBRARY;
  const LOGISTICS_ADDRESS_LAYER = '/logistics/address/layer/list';
  _exports.LOGISTICS_ADDRESS_LAYER = LOGISTICS_ADDRESS_LAYER;
  const LOGISTICS_ADDRESS_TEMPLATE = '/logistics/addr/template/get';
  _exports.LOGISTICS_ADDRESS_TEMPLATE = LOGISTICS_ADDRESS_TEMPLATE;
  const PLACE_AUTOCOMPLETE = '/logistics/places/autocomplete';
  _exports.PLACE_AUTOCOMPLETE = PLACE_AUTOCOMPLETE;
  const PLACE_DETAIL = '/logistics/places/detail';
  _exports.PLACE_DETAIL = PLACE_DETAIL;
  return _exports;
}();