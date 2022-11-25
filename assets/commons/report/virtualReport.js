window.SLM = window.SLM || {};

window.SLM['commons/report/virtualReport.js'] = window.SLM['commons/report/virtualReport.js'] || function () {
  const _exports = {};
  const { VirtualReport } = window['SLM']['theme-shared/report/stage/virtualReport.js'];
  const virtualReport = new VirtualReport();

  function initVirtualReport() {
    $(() => {
      virtualReport.bindHeaderReport();
      virtualReport.bindFooterReport();
      virtualReport.bindFooterPromotionReport();
      virtualReport.bindSocialReport();
      virtualReport.bindNavReport();
      virtualReport.bindLocaleCurrencyReport();
    });
  }

  _exports.initVirtualReport = initVirtualReport;
  _exports.default = virtualReport;
  return _exports;
}();