window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/sign-up.js'] = window.SLM['theme-shared/biz-com/customer/reports/sign-up.js'] || function () {
  const _exports = {};
  const { report, reportV2, thirdPartReport } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module, LOGIN_CID, EventName } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportV1SignUp = config => report(LOGIN_CID, config);

  const reportSignUp = config => reportV2({
    page: pageMap.SignUp,
    ...config
  });

  const reportRegisterToLogin = () => {
    reportSignUp({
      module: Module.normal,
      component: 129,
      action_type: ActionType.click,
      event_id: 1037
    });
  };

  _exports.reportRegisterToLogin = reportRegisterToLogin;

  const reportSignUpSuccess = () => {
    reportSignUp({
      module: Module.normal,
      component: -999,
      action_type: ActionType.default,
      event_name: EventName.register,
      event_id: 1394
    });
  };

  _exports.reportSignUpSuccess = reportSignUpSuccess;

  const reportCheckAgreement = () => {
    reportSignUp({
      module: Module.normal,
      component: 128,
      action_type: ActionType.check,
      event_id: 1036
    });
  };

  _exports.reportCheckAgreement = reportCheckAgreement;

  const reportClickPrivacyPolicy = () => {
    reportSignUp({
      module: Module.normal,
      component: 131,
      action_type: ActionType.click,
      event_id: 1039
    });
  };

  _exports.reportClickPrivacyPolicy = reportClickPrivacyPolicy;

  const reportClickTermsService = () => {
    reportSignUp({
      module: Module.normal,
      component: 132,
      action_type: ActionType.click,
      event_id: 1040
    });
  };

  _exports.reportClickTermsService = reportClickTermsService;

  const reportCheckSubscriptionBox = () => {
    reportSignUp({
      module: Module.normal,
      component: 102,
      action_type: ActionType.check,
      event_id: 1396
    });
  };

  _exports.reportCheckSubscriptionBox = reportCheckSubscriptionBox;

  const thirdReportSignUpSuccess = (eid, method) => {
    const userId = window && window.SL_State && window.SL_State.get('request.cookie.osudb_uid');
    thirdPartReport({
      FBPixel: [['track', 'CompleteRegistration', {
        content_name: userId
      }, {
        eventID: `completeRegistration${eid}`
      }]],
      GAAds: [['event', 'conversion', null, 'REGISTER-MEMBER']],
      GA: [['event', 'sign_up', {
        method
      }]],
      GA4: [['event', 'sign_up', {
        method
      }]]
    });
  };

  _exports.thirdReportSignUpSuccess = thirdReportSignUpSuccess;

  const reportSignUpPageView = () => {
    reportV1SignUp({
      event_name: 'component_view',
      custom_component: ['sign_up']
    });
  };

  _exports.reportSignUpPageView = reportSignUpPageView;
  return _exports;
}();