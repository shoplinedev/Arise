window.SLM = window.SLM || {};

window.SLM['commons/utils/index.js'] = window.SLM['commons/utils/index.js'] || function () {
  const _exports = {};
  const helper = window['SLM']['commons/utils/helper.js'].default;
  const main = window['SLM']['commons/utils/main.js'].default;
  _exports.default = { ...main,
    helper
  };
  return _exports;
}();