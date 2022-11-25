window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/bind.js'] = window.SLM['theme-shared/biz-com/customer/reports/bind.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportBindPhone = config => reportV2({
    page: pageMap.Bind.phone,
    ...config
  });

  const reportBindEmail = config => reportV2({
    page: pageMap.Bind.email,
    ...config
  });

  const reportBindPhoneToUserCenter = () => {
    reportBindPhone({
      module: Module.normal,
      component: 101,
      action_type: ActionType.click,
      event_id: 1611
    });
  };

  _exports.reportBindPhoneToUserCenter = reportBindPhoneToUserCenter;

  const reportBindEmailToUserCenter = () => {
    reportBindEmail({
      module: Module.normal,
      component: 101,
      action_type: ActionType.click,
      event_id: 1614
    });
  };

  _exports.reportBindEmailToUserCenter = reportBindEmailToUserCenter;
  return _exports;
}();