window.SLM = window.SLM || {};
window.SLM['stage/main-page/script/report.js'] = window.SLM['stage/main-page/script/report.js'] || function () {
  const _exports = {};
  const { collectObserver } = window['SLM']['theme-shared/utils/report/index.js'];
  const pageReportTitleClassName = '__sl-custom-track-page-title';
  const pageReportTitleSelector = `.${pageReportTitleClassName}`;
  const pageReportContentClassName = '__sl-custom-track-page-content';
  const pageReportContentSelector = `.${pageReportContentClassName}`;
  collectObserver({
    selector: pageReportTitleSelector
  });
  collectObserver({
    selector: pageReportContentSelector
  });
  return _exports;
}();