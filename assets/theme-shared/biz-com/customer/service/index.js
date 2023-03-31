window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/index.js'] = window.SLM['theme-shared/biz-com/customer/service/index.js'] || function () {
  const _exports = {};
  const { udbRequest, request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const getStoreRegisterConfig = () => {
    return request.get('/user/front/store/config/register');
  };

  _exports.getStoreRegisterConfig = getStoreRegisterConfig;

  const getMemberInitConfig = params => {
    return udbRequest.get('/udb/reg/registermix/init.do', {
      params
    });
  };

  _exports.getMemberInitConfig = getMemberInitConfig;

  const checkAccount = params => {
    return udbRequest.get('/udb/reg/register/checkacct.do', {
      params
    });
  };

  _exports.checkAccount = checkAccount;

  const sendSignUpVerificationCode = params => {
    return udbRequest.get('/udb/reg/register/sendverifycode.do', {
      params
    });
  };

  _exports.sendSignUpVerificationCode = sendSignUpVerificationCode;

  const signUpMember = params => {
    return udbRequest.get('/udb/reg/registermix/regcore.do', {
      params
    });
  };

  _exports.signUpMember = signUpMember;

  const signUpUpdate = data => {
    return request.post('/user/front/users/save', data);
  };

  _exports.signUpUpdate = signUpUpdate;

  function getPolicyPageContent(params) {
    return request.get(`/site/render/page/${params.pageType}/${params.id}`);
  }

  _exports.getPolicyPageContent = getPolicyPageContent;

  const getLoginInitConfig = params => {
    return udbRequest.get('/udb/lgn/login/init.do', {
      params
    });
  };

  _exports.getLoginInitConfig = getLoginInitConfig;

  const loginAccount = params => {
    return udbRequest.get('/udb/lgn/login/verify.do', {
      params
    });
  };

  _exports.loginAccount = loginAccount;

  const sendBindPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/mobile/bind/sendSms.do', {
      params
    });
  };

  _exports.sendBindPhoneVerificationCode = sendBindPhoneVerificationCode;

  const sendPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/sendSms.do', {
      params
    });
  };

  _exports.sendPhoneVerificationCode = sendPhoneVerificationCode;

  const sendEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/sendEmailCode.do', {
      params
    });
  };

  _exports.sendEmailVerificationCode = sendEmailVerificationCode;

  const verifyPhoneVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/verifySms.do', {
      params
    });
  };

  _exports.verifyPhoneVerificationCode = verifyPhoneVerificationCode;

  const verifyEmailVerificationCode = params => {
    return udbRequest.get('/udb/aq/uni/verifyEmailCode.do', {
      params
    });
  };

  _exports.verifyEmailVerificationCode = verifyEmailVerificationCode;

  const signOut = params => {
    return udbRequest.get('/udb/lgn/login/logout.do', {
      params
    });
  };

  _exports.signOut = signOut;

  const signInThird = params => {
    return udbRequest.get('/udb/lgn/third/open/login.do', {
      params
    });
  };

  _exports.signInThird = signInThird;

  const saveThirdChannelInfo = data => {
    return request.post('/user/front/users/saveThirdChannelInfo', data);
  };

  _exports.saveThirdChannelInfo = saveThirdChannelInfo;

  const thirdLoginAndBind = params => {
    return udbRequest.get('/udb/lgn/third/open/loginAndBind.do', {
      params
    });
  };

  _exports.thirdLoginAndBind = thirdLoginAndBind;

  const thirdLoginAndBindByBindToken = params => {
    return udbRequest.get('/udb/lgn/third/open/thirdLoginAndBindByBindToken.do', {
      params
    });
  };

  _exports.thirdLoginAndBindByBindToken = thirdLoginAndBindByBindToken;

  const bindUidAccountMix = params => {
    return udbRequest.get('/udb/lgn/third/open/bindUidAccountMix.do', {
      params
    });
  };

  _exports.bindUidAccountMix = bindUidAccountMix;

  const getChangePasswordInitConfig = params => {
    return udbRequest.get('/udb/aq/pwd/change/init.do', {
      params
    });
  };

  _exports.getChangePasswordInitConfig = getChangePasswordInitConfig;

  const signInUpdate = data => {
    return request.post('/user/front/users/update', data);
  };

  _exports.signInUpdate = signInUpdate;

  const updateUserInfo = () => {
    return request.put('/carts/cart/cart-buyer-update');
  };

  _exports.updateUserInfo = updateUserInfo;

  const setSubscriptionStateNoLogin = data => {
    return request.post('/user/front/sub/stateNoLogin', data);
  };

  _exports.setSubscriptionStateNoLogin = setSubscriptionStateNoLogin;

  const resetPasswordByToken = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/token/modify.do', {
      params
    });
  };

  _exports.resetPasswordByToken = resetPasswordByToken;

  const getRetrieveTokenInitConfig = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/token/init.do', {
      params
    });
  };

  _exports.getRetrieveTokenInitConfig = getRetrieveTokenInitConfig;

  const activateByToken = params => {
    return udbRequest.get('/udb/aq/pwd/activate/token/modify.do', {
      params
    });
  };

  _exports.activateByToken = activateByToken;

  const getActivateTokenInitConfig = params => {
    return udbRequest.get('/udb/aq/pwd/activate/token/init.do', {
      params
    });
  };

  _exports.getActivateTokenInitConfig = getActivateTokenInitConfig;

  const getRetrieveInitConfig = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/init.do', {
      params
    });
  };

  _exports.getRetrieveInitConfig = getRetrieveInitConfig;

  const getRetrievePrechk = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/prechk.do', {
      params
    });
  };

  _exports.getRetrievePrechk = getRetrievePrechk;

  const getMethodList = params => {
    return udbRequest.get('/udb/aq/uni/getMethodList.do', {
      params
    });
  };

  _exports.getMethodList = getMethodList;

  const resetPassword = params => {
    return udbRequest.get('/udb/aq/pwd/retrieve/modify.do', {
      params
    });
  };

  _exports.resetPassword = resetPassword;

  const getDeleteAccountInitConfig = params => {
    return udbRequest.get('/udb/aq/user/destroy/init.do', {
      params
    });
  };

  _exports.getDeleteAccountInitConfig = getDeleteAccountInitConfig;

  const revokeDeleteAccount = () => {
    return request.post('/user/front/userinfo/cancelEraseData');
  };

  _exports.revokeDeleteAccount = revokeDeleteAccount;
  return _exports;
}();