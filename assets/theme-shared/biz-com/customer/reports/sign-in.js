window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/sign-in.js'] = window.SLM['theme-shared/biz-com/customer/reports/sign-in.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const { report, reportV2, thirdPartReport } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module, LOGIN_CID, EventName } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];

  const reportV1SignIn = config => report(LOGIN_CID, config);

  const reportSignIn = config => reportV2({
    page: pageMap.SignIn,
    ...config
  });

  const reportSubmitLogin = () => {
    reportSignIn({
      module: Module.normal,
      component: 127,
      action_type: ActionType.click,
      event_id: 1033
    });
  };

  _exports.reportSubmitLogin = reportSubmitLogin;

  const reportToForgetPassword = () => {
    reportSignIn({
      module: Module.normal,
      component: 125,
      action_type: ActionType.click,
      event_id: 1031
    });
  };

  _exports.reportToForgetPassword = reportToForgetPassword;

  const reportToSignUp = () => {
    reportSignIn({
      module: Module.normal,
      component: 126,
      action_type: ActionType.click,
      event_id: 1032
    });
  };

  _exports.reportToSignUp = reportToSignUp;

  const reportLoginSuccess = () => {
    reportSignIn({
      module: Module.normal,
      component: -999,
      action_type: ActionType.default,
      event_name: EventName.login,
      event_id: 1402
    });
  };

  _exports.reportLoginSuccess = reportLoginSuccess;
  const loginTypeToThirdPartReportConfig = {
    line: {
      component: 105,
      event_id: 1407
    },
    facebook: {
      component: 104,
      event_id: 1406
    },
    google: {
      component: 103,
      event_id: 1405
    }
  };

  const reportClickThirdPartLogin = loginType => {
    const reportConfig = loginTypeToThirdPartReportConfig[loginType];

    if (reportConfig) {
      reportSignIn({
        module: Module.normal,
        action_type: ActionType.click,
        ...reportConfig
      });
    }
  };

  _exports.reportClickThirdPartLogin = reportClickThirdPartLogin;

  const thirdReportSignInCallback = method => {
    thirdPartReport({
      GA: [['event', 'login', {
        method
      }]],
      GA4: [['event', 'login', {
        method
      }]]
    });
  };

  _exports.thirdReportSignInCallback = thirdReportSignInCallback;

  const riskReportSignIn = (isFirst = 1) => {
    const loginSuccessReportdata = {
      dimension: 0,
      subAppid: window && window.SL_State && window.SL_State.get('request.cookie.osudb_subappid'),
      termType: 0,
      uidIdentity: 'shopline',
      loginTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
      loginResult: 1,
      isFirst
    };
    reportV1SignIn({
      event_name: 'login_success',
      ...loginSuccessReportdata
    });
  };

  _exports.riskReportSignIn = riskReportSignIn;

  const reportSignInPageView = () => {
    reportV1SignIn({
      event_name: 'component_view',
      custom_component: ['sign_in_105']
    });
  };

  _exports.reportSignInPageView = reportSignInPageView;

  const reportSignInPageLeave = page_dest => {
    reportV1SignIn({
      event_name: 'leave',
      page_dest
    });
  };

  _exports.reportSignInPageLeave = reportSignInPageLeave;
  return _exports;
}();