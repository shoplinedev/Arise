window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/url.js'] = window.SLM['theme-shared/utils/url.js'] || function () {
  const _exports = {};
  const qs = window['query-string']['default'];
  const _isEmpty = window['lodash']['isEmpty'];
  const _omit = window['lodash']['omit'];

  function getQuery(url, key = '') {
    if (typeof window === 'undefined') return;
    const {
      query
    } = qs.parseUrl(url || window.location.href);

    if (key) {
      return query[key];
    }

    return { ...query
    };
  }

  _exports.getQuery = getQuery;

  function getLocationProps() {
    const {
      origin,
      pathname,
      hash,
      search
    } = window.location;
    return {
      origin,
      pathname,
      hash,
      search,
      url: origin + pathname
    };
  }

  _exports.getLocationProps = getLocationProps;

  function historyPushState({
    state = {},
    title = document.title,
    url
  }) {
    window.history.pushState(state, title, url);
  }

  _exports.historyPushState = historyPushState;

  function stringifyUrl(url, query, hash = '') {
    return qs.stringifyUrl({
      url,
      query
    }) + hash;
  }

  _exports.stringifyUrl = stringifyUrl;

  function addQueryToUrl(payload = {}) {
    if (typeof window === 'undefined') return;
    if (_isEmpty(payload)) return;
    const {
      url,
      hash,
      search
    } = getLocationProps();
    const oldSearch = qs.parse(search);
    const targetUrl = stringifyUrl(url, { ...oldSearch,
      ...payload
    }, hash);
    historyPushState({
      url: targetUrl
    });
  }

  _exports.addQueryToUrl = addQueryToUrl;

  function removeQueryByUrl(keys = []) {
    if (typeof window === 'undefined') return;
    if (_isEmpty(keys)) return;
    const {
      url,
      hash,
      search
    } = getLocationProps();
    const oldSearch = qs.parse(search);
    const targetUrl = stringifyUrl(url, _omit(oldSearch, keys), hash);
    historyPushState({
      url: targetUrl
    });
  }

  _exports.removeQueryByUrl = removeQueryByUrl;

  const redirectTo = url => {
    return window.Shopline && window.Shopline.redirectTo && window.Shopline.redirectTo(url) || url;
  };

  _exports.redirectTo = redirectTo;
  return _exports;
}();