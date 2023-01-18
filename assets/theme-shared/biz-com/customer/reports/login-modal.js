window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/login-modal.js'] = window.SLM['theme-shared/biz-com/customer/reports/login-modal.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module, loginModalPageIdMap, EventName } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportLoginModal = config => reportV2({
    page: pageMap.LoginModal,
    ...config
  });

  const reportPageView = () => {
    const alias = window.SL_State.get('templateAlias');

    if (loginModalPageIdMap[alias]) {
      reportV2({
        page: loginModalPageIdMap[alias],
        module: Module.normal,
        component: -999,
        action_type: ActionType.view,
        event_id: 1415
      });
    }
  };

  _exports.reportPageView = reportPageView;

  const reportSignUpSuccess = () => {
    reportLoginModal({
      module: Module.loginModal.register,
      component: -999,
      action_type: ActionType.default,
      event_name: EventName.register,
      event_id: 1416
    });
  };

  _exports.reportSignUpSuccess = reportSignUpSuccess;

  const reportCheckAgreement = () => {
    reportLoginModal({
      module: Module.loginModal.register,
      component: 101,
      action_type: ActionType.check,
      event_id: 1417
    });
  };

  _exports.reportCheckAgreement = reportCheckAgreement;

  const reportCheckSubscriptionBox = () => {
    reportLoginModal({
      module: Module.loginModal.register,
      component: 102,
      action_type: ActionType.check,
      event_id: 1418
    });
  };

  _exports.reportCheckSubscriptionBox = reportCheckSubscriptionBox;

  const reportClickPrivacyPolicy = () => {
    reportLoginModal({
      module: Module.loginModal.register,
      component: 103,
      action_type: ActionType.click,
      event_id: 1419
    });
  };

  _exports.reportClickPrivacyPolicy = reportClickPrivacyPolicy;

  const reportClickTermsService = () => {
    reportLoginModal({
      module: Module.loginModal.register,
      component: 104,
      action_type: ActionType.click,
      event_id: 1420
    });
  };

  _exports.reportClickTermsService = reportClickTermsService;

  const reportLoginSuccess = () => {
    reportLoginModal({
      module: Module.loginModal.login,
      component: -999,
      action_type: ActionType.default,
      event_name: EventName.login,
      event_id: 1421
    });
  };

  _exports.reportLoginSuccess = reportLoginSuccess;

  const reportToForgetPassword = () => {
    reportLoginModal({
      module: Module.loginModal.login,
      component: 105,
      action_type: ActionType.click,
      event_id: 1422
    });
  };

  _exports.reportToForgetPassword = reportToForgetPassword;
  const loginTypeToThirdPartReportConfig = {
    line: {
      component: 108,
      event_id: 1425
    },
    facebook: {
      component: 107,
      event_id: 1424
    },
    google: {
      component: 106,
      event_id: 1423
    }
  };

  const reportClickThirdPartLogin = loginType => {
    const reportConfig = loginTypeToThirdPartReportConfig[loginType];

    if (reportConfig) {
      reportLoginModal({
        module: Module.loginModal.login,
        action_type: ActionType.click,
        ...reportConfig
      });
    }
  };

  _exports.reportClickThirdPartLogin = reportClickThirdPartLogin;
  return _exports;
}();