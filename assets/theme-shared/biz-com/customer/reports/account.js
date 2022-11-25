window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/account.js'] = window.SLM['theme-shared/biz-com/customer/reports/account.js'] || function () {
  const _exports = {};
  const debounce = window['lodash']['debounce'];
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];
  const { pageMap, ActionType, Module } = window['SLM']['theme-shared/biz-com/customer/constant/report.js'];
  const REPORT_INPUT_DEBOUNCE_TIME = 300;

  const reportCenterEvent = config => reportV2({
    page: pageMap.Center,
    ...config
  });

  const reportClickEditButton = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 140,
      action_type: ActionType.click,
      event_id: 1590
    });
  };

  _exports.reportClickEditButton = reportClickEditButton;

  const reportEditNickname = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 103,
      action_type: ActionType.input,
      event_id: 1000
    });
  };

  _exports.reportEditNickname = reportEditNickname;

  const reportClickEmailChange = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 104,
      action_type: ActionType.click,
      event_id: 1001
    });
  };

  _exports.reportClickEmailChange = reportClickEmailChange;

  const reportClickPhoneChange = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 105,
      action_type: ActionType.click,
      event_id: 1003
    });
  };

  _exports.reportClickPhoneChange = reportClickPhoneChange;

  const reportClickPasswordChange = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 106,
      action_type: ActionType.click,
      event_id: 1004
    });
  };

  _exports.reportClickPasswordChange = reportClickPasswordChange;

  const reportSaveInfomation = nickname => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 107,
      action_type: ActionType.click,
      user_nickname_old: nickname,
      event_id: 1005
    });
  };

  _exports.reportSaveInfomation = reportSaveInfomation;

  const reportDropModifyInfomation = () => {
    reportCenterEvent({
      module: Module.userCenter.account,
      component: 108,
      action_type: ActionType.click,
      event_id: 1006
    });
  };

  _exports.reportDropModifyInfomation = reportDropModifyInfomation;

  const reportClickSubscribeEmailButton = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 109,
      action_type: ActionType.click,
      event_id: 1007
    });
  };

  _exports.reportClickSubscribeEmailButton = reportClickSubscribeEmailButton;

  const reportClickSubscribeEmailEditIcon = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 102,
      action_type: ActionType.click,
      event_id: 1591
    });
  };

  _exports.reportClickSubscribeEmailEditIcon = reportClickSubscribeEmailEditIcon;
  const reportInputSubscribeNewEmail = debounce(() => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 141,
      action_type: ActionType.input,
      event_id: 1592
    });
  }, REPORT_INPUT_DEBOUNCE_TIME);
  _exports.reportInputSubscribeNewEmail = reportInputSubscribeNewEmail;

  const reportSaveSubscribeEmail = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 142,
      action_type: ActionType.click,
      event_id: 1593
    });
  };

  _exports.reportSaveSubscribeEmail = reportSaveSubscribeEmail;

  const reportUnsubscribeEmail = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 143,
      action_type: ActionType.click,
      event_id: 1594
    });
  };

  _exports.reportUnsubscribeEmail = reportUnsubscribeEmail;

  const reportClickSubscribePhoneButton = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 110,
      action_type: ActionType.click,
      event_id: 1008
    });
  };

  _exports.reportClickSubscribePhoneButton = reportClickSubscribePhoneButton;

  const reportClickSubscribePhoneEditIcon = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 144,
      action_type: ActionType.click,
      event_id: 1595
    });
  };

  _exports.reportClickSubscribePhoneEditIcon = reportClickSubscribePhoneEditIcon;
  const reportInputSubscribeNewPhone = debounce(() => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 145,
      action_type: ActionType.input,
      event_id: 1596
    });
  }, REPORT_INPUT_DEBOUNCE_TIME);
  _exports.reportInputSubscribeNewPhone = reportInputSubscribeNewPhone;

  const reportSaveSubscribePhone = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 146,
      action_type: ActionType.click,
      event_id: 1597
    });
  };

  _exports.reportSaveSubscribePhone = reportSaveSubscribePhone;

  const reportUnsubscribePhone = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 147,
      action_type: ActionType.click,
      event_id: 1598
    });
  };

  _exports.reportUnsubscribePhone = reportUnsubscribePhone;

  const reportSubscribeFB = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 134,
      action_type: ActionType.click,
      event_id: 1010
    });
  };

  _exports.reportSubscribeFB = reportSubscribeFB;

  const reportClickSubscribeLine = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 133,
      action_type: ActionType.click,
      event_id: 1009
    });
  };

  _exports.reportClickSubscribeLine = reportClickSubscribeLine;

  const reportUnsubscribeLine = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 148,
      action_type: ActionType.click,
      event_id: 1599
    });
  };

  _exports.reportUnsubscribeLine = reportUnsubscribeLine;

  const reportClickSubscribeMessage = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 119,
      action_type: ActionType.click,
      event_id: 1600
    });
  };

  _exports.reportClickSubscribeMessage = reportClickSubscribeMessage;

  const reportUnsubscribeMessage = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 149,
      action_type: ActionType.click,
      event_id: 1601
    });
  };

  _exports.reportUnsubscribeMessage = reportUnsubscribeMessage;

  const reportUnsubscribeConfirm = method => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 150,
      action_type: ActionType.click,
      event_id: 1604,
      unsubscribe_method: method
    });
  };

  _exports.reportUnsubscribeConfirm = reportUnsubscribeConfirm;

  const reportUnsubscribeCancel = () => {
    reportCenterEvent({
      module: Module.userCenter.subscribe,
      component: 151,
      action_type: ActionType.click,
      event_id: 1603
    });
  };

  _exports.reportUnsubscribeCancel = reportUnsubscribeCancel;

  const reportEditPersion = () => {
    reportCenterEvent({
      module: Module.userCenter.information,
      component: 152,
      action_type: ActionType.click,
      event_id: 1605
    });
  };

  _exports.reportEditPersion = reportEditPersion;

  const reportSavePersonal = () => {
    reportCenterEvent({
      module: Module.userCenter.information,
      component: 107,
      action_type: ActionType.click,
      event_id: 1014
    });
  };

  _exports.reportSavePersonal = reportSavePersonal;

  const reportDropModifyPersonal = () => {
    reportCenterEvent({
      module: Module.userCenter.information,
      component: 108,
      action_type: ActionType.click,
      event_id: 1015
    });
  };

  _exports.reportDropModifyPersonal = reportDropModifyPersonal;

  const reportChooseGender = () => {
    reportCenterEvent({
      module: Module.userCenter.information,
      component: 113,
      action_type: ActionType.click,
      event_id: 1013
    });
  };

  _exports.reportChooseGender = reportChooseGender;

  const reportChangeBirthday = () => {
    reportCenterEvent({
      module: Module.userCenter.information,
      component: 112,
      action_type: ActionType.click,
      event_id: 1012
    });
  };

  _exports.reportChangeBirthday = reportChangeBirthday;

  const reportClickNewAddress = () => {
    reportCenterEvent({
      module: Module.userCenter.address,
      component: 114,
      action_type: ActionType.click,
      event_id: 1016
    });
  };

  _exports.reportClickNewAddress = reportClickNewAddress;

  const reportEditAddress = () => {
    reportCenterEvent({
      module: Module.userCenter.address,
      component: 115,
      action_type: ActionType.click,
      event_id: 1017
    });
  };

  _exports.reportEditAddress = reportEditAddress;

  const reportClickRemoveAddressIcon = () => {
    reportCenterEvent({
      module: Module.userCenter.address,
      component: 116,
      action_type: ActionType.click,
      event_id: 1018
    });
  };

  _exports.reportClickRemoveAddressIcon = reportClickRemoveAddressIcon;

  const reportConfirmRemoveAddress = () => {
    reportCenterEvent({
      module: Module.userCenter.address,
      component: 153,
      action_type: ActionType.click,
      event_id: 1606
    });
  };

  _exports.reportConfirmRemoveAddress = reportConfirmRemoveAddress;

  const reportCancelRemoveAddress = () => {
    reportCenterEvent({
      module: Module.userCenter.address,
      component: 154,
      action_type: ActionType.click,
      event_id: 1607
    });
  };

  _exports.reportCancelRemoveAddress = reportCancelRemoveAddress;
  return _exports;
}();