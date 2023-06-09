window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/user-center.js'] = window.SLM['theme-shared/biz-com/customer/reports/user-center.js'] || function () {
  const _exports = {};
  const { report, reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const USER_CENTER_PAGE_ID = 123;
  const USER_MESSAGE = 124;
  const USER_ORDER = 172;
  const USER_CENTER_CID = '60079999';
  const pageToReportConfig = {
    Center: {
      page: USER_CENTER_PAGE_ID,
      module: -999,
      component: 117,
      action_type: 102,
      event_id: 1019
    },
    Message: {
      page: USER_MESSAGE,
      module: -999,
      component: 117,
      action_type: 102,
      event_id: 1026
    },
    OrderList: {
      page: USER_ORDER,
      module: -999,
      component: 117,
      action_type: 102,
      event_id: 1627
    }
  };

  const reportSignOut = () => {
    const alias = window.SL_State.get('templateAlias');

    if (pageToReportConfig[alias]) {
      reportV2(pageToReportConfig[alias]);
    }

    report(USER_CENTER_CID, {
      event_name: 'leave',
      page_dest: `${window.location.origin}${redirectTo('/user/signOut')}`
    });
  };

  _exports.reportSignOut = reportSignOut;

  const reportClickCenterTab = () => {
    report(USER_CENTER_CID, {
      event_name: 'click_component',
      page: 'consumer_home',
      custom_component: ['consumer_info']
    });
  };

  _exports.reportClickCenterTab = reportClickCenterTab;

  const reportClickMessageTab = () => {
    report(USER_CENTER_CID, {
      event_name: 'click_component',
      page: 'consumer_home',
      custom_component: ['message']
    });
  };

  _exports.reportClickMessageTab = reportClickMessageTab;

  const reportClickOrderTab = () => {
    report(USER_CENTER_CID, {
      event_name: 'click_component',
      page: 'consumer_home',
      custom_component: ['order']
    });
  };

  _exports.reportClickOrderTab = reportClickOrderTab;
  return _exports;
}();