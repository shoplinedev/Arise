window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/cookie.js'] = window.SLM['theme-shared/biz-com/customer/helpers/cookie.js'] || function () {
  const _exports = {};

  const getCookie = key => {
    return window && window.SL_State && window.SL_State.get(`request.cookie.${key}`);
  };

  _exports.getCookie = getCookie;
  return _exports;
}();