window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/reset.js'] = window.SLM['theme-shared/biz-com/customer/service/reset.js'] || function () {
  const _exports = {};
  const { udbRequest } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const getChangePasswordInitConfig = params => {
    return udbRequest.get('/udb/aq/pwd/change/init.do', {
      params
    });
  };

  _exports.getChangePasswordInitConfig = getChangePasswordInitConfig;

  const checkResetAccount = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/prechk.do', {
      params
    });
  };

  _exports.checkResetAccount = checkResetAccount;

  const changeAccountPassword = params => {
    return udbRequest.get('/udb/aq/pwd/change/modify.do', {
      params
    });
  };

  _exports.changeAccountPassword = changeAccountPassword;
  return _exports;
}();