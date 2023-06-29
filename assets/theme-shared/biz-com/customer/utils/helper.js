window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/utils/helper.js'] = window.SLM['theme-shared/biz-com/customer/utils/helper.js'] || function () {
  const _exports = {};
  const { getUrlQuery, getUrlAllQuery } = window['SLM']['theme-shared/biz-com/customer/utils/url.js'];
  const { DEFAULT_LANGUAGE } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  function unique(arr) {
    return arr.filter((item, index) => {
      return arr.indexOf(item, 0) === index;
    });
  }

  _exports.unique = unique;

  function uniqueObjectArray(arr, prop, callback) {
    return arr.filter((item, index) => {
      let result = true;

      if (typeof callback === 'function') {
        result = callback(item, index, arr);
      }

      return result && arr.findIndex(it => it[prop] === item[prop]) === index;
    });
  }

  _exports.uniqueObjectArray = uniqueObjectArray;

  function getLanguage() {
    return window && window.SL_State && window.SL_State.get('request.locale') || DEFAULT_LANGUAGE;
  }

  _exports.getLanguage = getLanguage;

  const getState = href => {
    try {
      const locationHref = href || window.location.href;
      const decodeUrl = window.decodeURIComponent(locationHref.replace(window.location.hash, ''));
      return JSON.parse(decodeUrl.match(/\{(.*)\}/)[0]);
    } catch (e) {
      try {
        return JSON.parse(getUrlQuery('state'));
      } catch (e) {
        return {};
      }
    }
  };

  _exports.getState = getState;

  const getRedirectUrl = () => {
    let {
      redirectUrl
    } = getUrlAllQuery();
    const state = getState();
    redirectUrl = state && state.redirectUrl && window.decodeURIComponent(state.redirectUrl) || redirectUrl;
    return redirectUrl;
  };

  _exports.getRedirectUrl = getRedirectUrl;

  function redirectPage(pathname) {
    const redirectUrl = getRedirectUrl();
    window.location.href = redirectUrl || redirectTo(pathname);
  }

  _exports.redirectPage = redirectPage;

  const getRedirectOriginUrl = () => {
    const redirectUrl = getRedirectUrl();
    if (!redirectUrl) return window.location.origin;
    return /^\//.test(redirectUrl) ? `${window.location.origin}${redirectUrl}` : redirectUrl;
  };

  _exports.getRedirectOriginUrl = getRedirectOriginUrl;

  const jumpWithSearchParams = path => {
    window.location.href = `${path}${window.location.search}`;
  };

  _exports.jumpWithSearchParams = jumpWithSearchParams;
  return _exports;
}();