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
  window.SL_EventBus.on('global:hdReport:expose', target => {
    const $target = $(target);

    if (window.HdSdk) {
      if ($target.hasClass(pageReportTitleClassName)) {
        window.HdSdk.shopTracker.report(60090003, {
          page: 124,
          event_name: 'component_view',
          custom_component: 'title_component'
        });
      } else if ($target.hasClass(pageReportContentClassName)) {
        window.HdSdk.shopTracker.report(60090003, {
          page: 124,
          event_name: 'component_view',
          custom_component: 'content_component'
        });
      }
    }
  });
  window.SL_EventBus.emit('global:hdReport:exit', ['60090003']);
  return _exports;
}();