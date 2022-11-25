window.SLM = window.SLM || {};

window.SLM['stage/blog/list/script/report.js'] = window.SLM['stage/blog/list/script/report.js'] || function () {
  const _exports = {};

  (function () {
    window.SL_EventBus.emit('global:hdReport:exit', ['60090005']);

    if (window.HdSdk) {
      window.HdSdk.shopTracker.report('60090005', {
        event_name: 'view',
        iframe_id: 1
      });
    }
  })();

  return _exports;
}();