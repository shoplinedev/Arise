window.SLM = window.SLM || {};

window.SLM['stage/custom-page-common/index.js'] = window.SLM['stage/custom-page-common/index.js'] || function () {
  const _exports = {};
  window.HdSdk && window.HdSdk.shopTracker.report('60090003', {
    event_name: 'view',
    iframe_id: 1
  });
  return _exports;
}();