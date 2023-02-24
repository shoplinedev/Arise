window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/user-report.js'] = window.SLM['theme-shared/biz-com/customer/reports/user-report.js'] || function () {
  const _exports = {};

  const userHdReport = () => {
    const isSignIn = window.location.pathname === '/user/signIn';
    const isSignUp = window.location.pathname === '/user/signUp';
    const isCenter = window.location.pathname === '/user/center';
    const isMessage = window.location.pathname === '/user/message';
    const isOrders = window.location.pathname === '/user/orders';
    const isRefunds = window.location.pathname === '/user/refunds';

    if (isSignIn || isSignUp) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
        iframe_id: 1,
        page: 'user_page',
        event_name: 'view'
      });
    }

    if (isSignIn) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
        event_name: 'component_view',
        custom_component: ['sign_in_tab']
      });
    }

    if (isSignUp) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
        event_name: 'component_view',
        custom_component: ['sign_up_tab']
      });
    }

    if (isCenter) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
        iframe_id: 1,
        page: 'consumer_home',
        event_name: 'view'
      });
      window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
        event_name: 'component_view',
        custom_component: ['consumer_info']
      });
    }

    if (isMessage) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
        event_name: 'component_view',
        custom_component: ['message']
      });
    }

    if (isOrders) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
        event_name: 'component_view',
        custom_component: ['order']
      });
    }

    if (isRefunds) {
      window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
        event_name: 'component_view',
        custom_component: ['return_order']
      });
    }
  };

  _exports.userHdReport = userHdReport;
  return _exports;
}();