window.SLM = window.SLM || {};

window.SLM['stage/home-common/index.js'] = window.SLM['stage/home-common/index.js'] || function () {
  const _exports = {};
  const { initSectionReport } = window['SLM']['commons/report/sectionReport.js'];
  window.SL_EventBus.emit('global:hdReport:exit', ['60006252']);
  window.HdSdk && window.HdSdk.shopTracker.report(60006252, {
    page: 101,
    iframe_id: 1,
    event_name: 101
  });
  initSectionReport();
  return _exports;
}();