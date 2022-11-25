window.SLM = window.SLM || {};

window.SLM['stage/404/main.js'] = window.SLM['stage/404/main.js'] || function () {
  const _exports = {};
  window.SL_EventBus.emit('global:hdReport:exit', ['60079993']);
  window.HdSdk && window.HdSdk.shopTracker.report(60079993, {
    page: 111,
    iframe_id: 1,
    event_name: 101
  });
  return _exports;
}();