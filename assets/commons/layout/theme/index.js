window.SLM = window.SLM || {};

window.SLM['commons/layout/theme/index.js'] = window.SLM['commons/layout/theme/index.js'] || function () {
  const _exports = {};
  const { initVirtualReport } = window['SLM']['commons/report/virtualReport.js'];
  initVirtualReport();
  return _exports;
}();