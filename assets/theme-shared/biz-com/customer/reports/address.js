window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/address.js'] = window.SLM['theme-shared/biz-com/customer/reports/address.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportEditAddress = config => reportV2({
    page: pageMap.AddressEdit,
    ...config
  });

  const reportCheckDefaultBox = () => {
    reportEditAddress({
      module: Module.normal,
      component: 101,
      action_type: ActionType.check,
      event_id: 1624
    });
  };

  _exports.reportCheckDefaultBox = reportCheckDefaultBox;

  const reportSaveAddress = () => {
    reportEditAddress({
      module: Module.normal,
      component: 107,
      action_type: ActionType.click,
      event_id: 1625
    });
  };

  _exports.reportSaveAddress = reportSaveAddress;

  const reportCancelAddress = () => {
    reportEditAddress({
      module: Module.normal,
      component: 108,
      action_type: ActionType.click,
      event_id: 1626
    });
  };

  _exports.reportCancelAddress = reportCancelAddress;
  return _exports;
}();