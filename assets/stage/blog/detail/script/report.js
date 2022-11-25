window.SLM = window.SLM || {};

window.SLM['stage/blog/detail/script/report.js'] = window.SLM['stage/blog/detail/script/report.js'] || function () {
  const _exports = {};

  (function () {
    window.SL_EventBus.emit('global:hdReport:exit', ['60090006']);

    if (window.HdSdk) {
      window.setInterval(() => {
        window.HdSdk.shopTracker.report(60090006, {
          page: 124,
          event_name: 141
        });
      }, 5 * 1000);
      window.HdSdk.shopTracker.report('60090006', {
        event_name: 'view',
        iframe_id: 1
      });
    }
  })();

  return _exports;
}();