window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/index.js'] = window.SLM['theme-shared/components/hbs/shared/utils/index.js'] || function () {
  const _exports = {};
  const helper = window['SLM']['theme-shared/components/hbs/shared/utils/helper.js'].default;
  const main = window['SLM']['theme-shared/components/hbs/shared/utils/main.js'].default;
  _exports.default = { ...main,
    helper
  };
  return _exports;
}();