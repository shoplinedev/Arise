window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/password.js'] = window.SLM['theme-shared/biz-com/customer/reports/password.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportForgetPasswordToLogin = () => {
    reportV2({
      page: pageMap.PasswordNew,
      module: Module.normal,
      component: 101,
      action_type: ActionType.click,
      event_id: 1621
    });
  };

  _exports.reportForgetPasswordToLogin = reportForgetPasswordToLogin;

  const reportResetPasswordToLogin = () => {
    reportV2({
      page: pageMap.PasswordNewReset,
      module: Module.normal,
      component: 101,
      action_type: ActionType.click,
      event_id: 1413
    });
  };

  _exports.reportResetPasswordToLogin = reportResetPasswordToLogin;

  const reportChangePasswordToUserCenter = () => {
    return reportV2({
      page: pageMap.PasswordReset,
      module: Module.normal,
      component: 101,
      action_type: ActionType.click,
      event_id: 1617
    });
  };

  _exports.reportChangePasswordToUserCenter = reportChangePasswordToUserCenter;

  const reportVerifyAccountSuccess = () => {
    reportV2({
      page: 127,
      module: Module.normal,
      component: -999,
      action_type: ActionType.view,
      event_id: 1028
    });
  };

  _exports.reportVerifyAccountSuccess = reportVerifyAccountSuccess;
  return _exports;
}();