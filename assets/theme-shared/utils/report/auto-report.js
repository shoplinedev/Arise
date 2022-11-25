window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/auto-report.js'] = window.SLM['theme-shared/utils/report/auto-report.js'] || function () {
  const _exports = {};
  const { onDomReady } = window['SLM']['theme-shared/utils/report/utils.js'];

  function autoReport() {
    const shopTracker = window.HdSdk ? window.HdSdk.shopTracker : null;
    if (!shopTracker) return;
    onDomReady(() => {
      shopTracker.report('86000101', {
        event_name: '142'
      });
    });
  }

  _exports.autoReport = autoReport;
  return _exports;
}();