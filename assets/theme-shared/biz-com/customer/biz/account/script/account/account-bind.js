window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/account/account-bind.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/account/account-bind.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { verifyBindPhoneVerificationCode, verifyBindEmailVerificationCode } = window['SLM']['theme-shared/biz-com/customer/service/bind.js'];
  const { UDB_PARAMS } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const getUdbInfo = window['SLM']['theme-shared/biz-com/customer/commons/customer/getUdbInfo.js'].default;
  const udbIntermediateParameters = {
    email: null,
    phone: null
  };
  const EMAIL = 'email';

  const initAccountBindFlow = (mode = EMAIL, refresh = false) => {
    if (udbIntermediateParameters[mode] && !refresh) {
      return udbIntermediateParameters[mode];
    }

    return getUdbInfo({
      params: { ...UDB_PARAMS,
        subappid: SL_State.get('storeInfo.storeId'),
        mode
      },
      formType: 'bind'
    }).then(res => {
      udbIntermediateParameters[mode] = res;
      return res;
    });
  };

  const modifyAccount = async (mode, value) => {
    if (!udbIntermediateParameters[mode]) {
      await initAccountBindFlow(mode);
    }

    const {
      appid,
      stoken,
      oauthToken
    } = udbIntermediateParameters[mode];
    const request = mode === EMAIL ? verifyBindEmailVerificationCode : verifyBindPhoneVerificationCode;
    const result = await request({
      appid,
      stoken,
      oauthToken,
      [mode === EMAIL ? 'email' : 'mobile']: value
    });
    udbIntermediateParameters[mode] = null;
    return result;
  };

  const createAccountBindFlow = (mode = EMAIL) => {
    initAccountBindFlow(mode);
    return {
      init: () => initAccountBindFlow(mode, true),
      onModify: value => modifyAccount(mode, value)
    };
  };

  _exports.createAccountBindFlow = createAccountBindFlow;
  return _exports;
}();