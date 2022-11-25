window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/message.js'] = window.SLM['theme-shared/biz-com/customer/reports/message.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportMessage = config => reportV2({
    page: pageMap.Message,
    ...config
  });

  const reportMessageHeartBeat = time => {
    return setInterval(() => {
      reportMessage({
        module: Module.normal,
        component: -999,
        action_type: ActionType.heartbeat,
        event_id: 1024
      });
    }, time);
  };

  _exports.reportMessageHeartBeat = reportMessageHeartBeat;

  const reportMessageSubmit = () => {
    reportMessage({
      module: Module.normal,
      component: 118,
      action_type: ActionType.click,
      event_id: 1025
    });
  };

  _exports.reportMessageSubmit = reportMessageSubmit;
  return _exports;
}();