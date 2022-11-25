window.SLM = window.SLM || {};

window.SLM['commons/report/index.js'] = window.SLM['commons/report/index.js'] || function () {
  const _exports = {};
  const { collectObserver, startObserver, clickCollect } = window['SLM']['theme-shared/utils/report/index.js'];
  _exports.startObserver = startObserver;
  _exports.clickCollect = clickCollect;
  _exports.collectObserver = collectObserver;

  const noop = () => {};

  function reportEvent(eventId, params = {}) {
    if (!eventId) {
      throw new Error('eventId must be provided!');
    }

    window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report(eventId, params);
  }

  _exports.reportEvent = reportEvent;

  function thirdReport(params = {}) {
    window.SL_EventBus.emit('global:thirdPartReport', params);
  }

  _exports.thirdReport = thirdReport;

  function getReportMethods(eventId) {
    if (!eventId) {
      throw new Error('eventId must be provided!');
    }

    const exposeApis = {};

    exposeApis.exitPageExposure = (exitParams = null) => {
      window.SL_EventBus.emit('global:hdReport:exit', [eventId, exitParams]);
    };

    exposeApis.event = (params = {}) => {
      reportEvent(eventId, params);
    };

    exposeApis.exposure = (selector, callback = noop) => {
      if (!selector || typeof selector !== 'string') {
        throw new TypeError('selector is must be a string');
      }

      window.SL_EventBus.on('global:hdReport:expose', target => {
        if (target && target.classList && target.classList.contains(selector.slice(1))) {
          callback(target);
        }
      });
      collectObserver({
        selector
      });
    };

    return exposeApis;
  }

  _exports.default = getReportMethods;
  return _exports;
}();