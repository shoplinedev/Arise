window.SLM = window.SLM || {};

window.SLM['commons/pre-script.js'] = window.SLM['commons/pre-script.js'] || function () {
  const _exports = {};
  const initLazysizes = window['SLM']['theme-shared/utils/lazysizes/index.js'].default;
  initLazysizes();
  return _exports;
}();