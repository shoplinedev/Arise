window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/index.js'] = window.SLM['theme-shared/biz-com/customer/reports/index.js'] || function () {
  const _exports = {};

  const report = (eventid, params) => {
    window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
  };

  _exports.report = report;

  const reportV2 = collect => {
    window.HdSdk && window.HdSdk.shopTracker.collect(collect);
  };

  _exports.reportV2 = reportV2;

  const thirdPartReport = params => {
    window.SL_EventBus.emit('global:thirdPartReport', params);
  };

  _exports.thirdPartReport = thirdPartReport;
  return _exports;
}();