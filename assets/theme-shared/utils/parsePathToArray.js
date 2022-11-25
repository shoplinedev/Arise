window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/parsePathToArray.js'] = window.SLM['theme-shared/utils/parsePathToArray.js'] || function () {
  const _exports = {};

  function parsePathToArray(path) {
    if (typeof path !== 'string') {
      throw new TypeError('path must be string');
    }

    return path.replace(/\]/, '').split(/[.[]/);
  }

  _exports.default = parsePathToArray;
  return _exports;
}();