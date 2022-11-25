window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/url-adaptor.js'] = window.SLM['theme-shared/utils/url-adaptor.js'] || function () {
  const _exports = {};
  const qs = window['query-string']['*'];
  const queryStringConfig = {
    options: {
      skipNull: true,
      skipEmptyString: true
    }
  };
  _exports.queryStringConfig = queryStringConfig;

  const adaptor = (url, {
    query,
    fragmentIdentifier,
    fullQuery = true
  } = {}) => {
    const currentUrl = qs.parseUrl(window.location.href, { ...queryStringConfig.options,
      parseFragmentIdentifier: true
    });
    const allQuery = fullQuery ? { ...(currentUrl.query || {}),
      ...(query || {})
    } : { ...query
    };
    const passUrl = qs.stringifyUrl({
      url,
      query: allQuery,
      fragmentIdentifier: fragmentIdentifier || currentUrl.fragmentIdentifier
    }, queryStringConfig.options);
    const wholeUrl = `${window.location.protocol}//${window.location.host}${passUrl}`;
    return {
      originUrl: url,
      ...currentUrl,
      query: allQuery,
      url: passUrl,
      wholeUrl
    };
  };

  _exports.adaptor = adaptor;
  return _exports;
}();