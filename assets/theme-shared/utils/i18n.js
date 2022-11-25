window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/i18n.js'] = window.SLM['theme-shared/utils/i18n.js'] || function () {
  const _exports = {};
  const { get, get_func, nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function parsePathToArray(path) {
    if (typeof path !== 'string') {
      throw new TypeError('path must be string');
    }

    return path.replace(/\]/, '').split(/[.[]/);
  }

  function t(path, hash) {
    const keys = parsePathToArray(path);
    const value = keys.reduce((prev, current) => {
      if (!prev) return undefined;
      return prev && prev.string ? prev.string[current] : prev[current];
    }, window.__I18N__);
    const regExp = /\{\{([^{}]+)\}\}/g;
    return nullishCoalescingOperator(get_func(value, 'replace').exec(regExp, (...args) => nullishCoalescingOperator(get(hash, args[1]), args[0])), path);
  }

  _exports.t = t;
  return _exports;
}();