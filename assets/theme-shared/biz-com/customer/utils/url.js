window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/utils/url.js'] = window.SLM['theme-shared/biz-com/customer/utils/url.js'] || function () {
  const _exports = {};
  const url = window['url']['default'];
  const querystring = window['querystring']['default'];

  function changeURLArg(urlStr, arg, argVal) {
    const durl = decodeURIComponent(urlStr);
    const pattern = `${arg}=([^&]*)`;
    const replaceText = `${arg}=${argVal}`;

    if (durl.match(pattern)) {
      let tmp = `/(${arg}=)([^&]*)/gi`;
      tmp = durl.replace(eval(tmp), replaceText);
      return tmp;
    }

    if (durl.match('[?]')) {
      return `${durl}&${replaceText}`;
    }

    return `${durl}?${replaceText}`;
  }

  _exports.changeURLArg = changeURLArg;

  function getUrlQuery(key) {
    if (typeof window !== 'undefined') {
      const locationHref = window.location.href;
      const urlParse = url.parse(decodeURIComponent(locationHref));
      const urlQuery = urlParse && urlParse.query;
      const urlQueryObj = querystring.parse(urlQuery);
      const hitUrlQuery = urlQueryObj[key];

      if (hitUrlQuery) {
        if (hitUrlQuery && hitUrlQuery.indexOf('?') !== -1) {
          window.history.replaceState({}, document.title, changeURLArg(locationHref, key, `${hitUrlQuery.replace('?', '&')}`));
          return hitUrlQuery.split('?')[0];
        }

        return hitUrlQuery;
      }

      return null;
    }

    return null;
  }

  _exports.getUrlQuery = getUrlQuery;

  function getUrlAllQuery(href) {
    const locationHref = href || window.location.href;
    const urlParse = url.parse(decodeURIComponent(locationHref));
    const urlQuery = urlParse && urlParse.query;
    const urlQueryObj = querystring.parse(urlQuery);
    return urlQueryObj;
  }

  _exports.getUrlAllQuery = getUrlAllQuery;

  function delParam(paramKey) {
    let {
      href
    } = window.location;
    const urlParam = window.location.search.substr(1);
    const beforeUrl = href.substr(0, href.indexOf('?'));
    let nextUrl = '';
    const arr = [];

    if (urlParam !== '') {
      const urlParamArr = urlParam.split('&');
      urlParamArr.forEach(segment => {
        const paramArr = segment.split('=');

        if (paramArr[0] !== paramKey) {
          arr.push(segment);
        }
      });
    }

    if (arr.length > 0) {
      nextUrl = `?${arr.join('&')}`;
    }

    href = beforeUrl + nextUrl;
    return href;
  }

  _exports.delParam = delParam;

  function getUrlPathId(u = window.location.href, index = -1) {
    const urlParse = url.parse(u);
    const urlArr = urlParse && urlParse.pathname && urlParse.pathname.replace(/^\//, '').split('/') || [];

    if (index < 0) {
      return urlArr[urlArr.length + index];
    }

    return urlArr[index];
  }

  _exports.getUrlPathId = getUrlPathId;

  function stringifyUrl(originUrl, params, sign = '?') {
    const keys = Object.keys(params);
    if (!keys.length) return originUrl;
    return `${originUrl}${originUrl.includes(sign) ? '' : sign}${keys.map(key => {
      let value = params[key] !== null && params[key] !== undefined ? params[key] : '';

      if (typeof value === 'object') {
        value = JSON.stringify(value);
      }

      return `${key}=${window.encodeURIComponent(value)}`;
    }).join('&')}`;
  }

  _exports.stringifyUrl = stringifyUrl;
  return _exports;
}();