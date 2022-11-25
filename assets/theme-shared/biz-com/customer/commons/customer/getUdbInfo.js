window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/customer/getUdbInfo.js'] = window.SLM['theme-shared/biz-com/customer/commons/customer/getUdbInfo.js'] || function () {
  const _exports = {};
  const { getLoginInitConfig, getMemberInitConfig, getDeleteAccountInitConfig, getRetrieveInitConfig, getActivateTokenInitConfig, getRetrieveTokenInitConfig } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { getMethodList, passVerify } = window['SLM']['theme-shared/biz-com/customer/service/common.js'];
  const { getBindEmailInitConfig, getBindPhoneInitConfig } = window['SLM']['theme-shared/biz-com/customer/service/bind.js'];
  const { getChangePasswordInitConfig } = window['SLM']['theme-shared/biz-com/customer/service/reset.js'];
  const { getRiskControlToken } = window['SLM']['theme-shared/biz-com/customer/helpers/riskControl.js'];
  const { getCookie } = window['SLM']['theme-shared/biz-com/customer/helpers/cookie.js'];
  const { TOKEN_ERROR_CODE, ACCOUNT_ACTIVATED_CODE } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const { ACCOUNT_ACTIVATED_TOKEN_EXPIRED, RESET_PASSWORD_TOKEN_EXPIRED, ACCOUNT_ACTIVATED } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const storage = window['SLM']['theme-shared/biz-com/customer/utils/storage.js'].default;
  const { getLanguage, redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];

  const extLangRequestBody = data => {
    return { ...(data || {}),
      lang: getLanguage()
    };
  };

  const getUniversalInitConfig = init => {
    return async params => {
      const {
        stoken,
        data
      } = await init(params);
      const {
        data: {
          methods
        },
        stoken: newStoken
      } = await getMethodList(extLangRequestBody({
        appid: params.appid,
        stoken,
        servcode: data.servcode
      }));
      const {
        method,
        mobileMask,
        emailMask
      } = methods && methods[0] || {};
      let oauth;

      if (method === 'pass') {
        const {
          data: {
            oauthToken
          }
        } = await passVerify(extLangRequestBody({
          appid: params.appid,
          stoken: newStoken
        }));
        oauth = oauthToken;
      }

      return {
        stoken: newStoken || stoken,
        _method: method,
        _mask: mobileMask || emailMask,
        oauthToken: oauth,
        scene: data.scene
      };
    };
  };

  _exports.getUniversalInitConfig = getUniversalInitConfig;

  _exports.default = ({
    params,
    formType,
    FBPixelEventID = ''
  }) => {
    const {
      type,
      appid,
      subappid,
      mode,
      token
    } = params;
    const uid = getCookie('osudb_uid');
    let loginType = 'email';
    let isverify;
    let getInitConfig = null;
    let ticketType;
    let eventid = '';

    if (formType === 'signIn') {
      getInitConfig = getLoginInitConfig;
      loginType = 'email';
      eventid = FBPixelEventID;

      if (type === 'member' && mode !== 'email') {
        loginType = 'acct';
      }
    } else if (formType === 'signUp') {
      if (type === 'member') {
        getInitConfig = getMemberInitConfig;
      }

      eventid = FBPixelEventID;
    } else if (formType === 'activate') {
      if (token) {
        getInitConfig = getActivateTokenInitConfig;
      } else {
        getInitConfig = getMemberInitConfig;
        isverify = 0;
      }
    } else if (formType === 'reset') {
      if (uid) {
        getInitConfig = getUniversalInitConfig(getChangePasswordInitConfig);
        ticketType = '1';
      } else {
        getInitConfig = () => Promise.resolve();
      }
    } else if (formType === 'bind' && type === 'member') {
      if (mode === 'email') {
        getInitConfig = getUniversalInitConfig(getBindEmailInitConfig);
      } else if (mode === 'phone') {
        getInitConfig = getUniversalInitConfig(getBindPhoneInitConfig);
      }

      ticketType = '1';
    } else if (formType === 'passwordNew') {
      getInitConfig = getRetrieveInitConfig;
    } else if (formType === 'passwordNewToken' && token !== 'preview') {
      getInitConfig = getRetrieveTokenInitConfig;
    } else if (formType === 'delete-account') {
      getInitConfig = getUniversalInitConfig(getDeleteAccountInitConfig);
      ticketType = '1';
    } else {
      getInitConfig = () => Promise.resolve();
    }

    const init = dfptoken => getInitConfig && getInitConfig({
      appid,
      subappid,
      callback: 'js',
      type: loginType,
      isverify,
      token,
      uid,
      ticketType,
      lang: params.language || 'en',
      eventid,
      dfptoken
    }).then(res => {
      const {
        stoken,
        data,
        _mask,
        _method,
        oauthToken,
        scene
      } = res || {};
      return {
        appid,
        subappid,
        stoken,
        servcode: data && data.servcode,
        _mask,
        _method,
        oauthToken,
        scene,
        emailMask: data && data.email
      };
    }).catch(e => {
      if (formType === 'activate') {
        if (ACCOUNT_ACTIVATED_CODE.includes(e.rescode)) {
          storage.sessionStorage.set(ACCOUNT_ACTIVATED, true);
          redirectPage(SIGN_IN);
        } else if (TOKEN_ERROR_CODE.includes(e.rescode)) {
          storage.sessionStorage.set(ACCOUNT_ACTIVATED_TOKEN_EXPIRED, true);
          redirectPage(SIGN_IN);
        }
      } else if (formType === 'passwordNewToken') {
        if (TOKEN_ERROR_CODE.includes(e.rescode)) {
          storage.sessionStorage.set(RESET_PASSWORD_TOKEN_EXPIRED, true);
          redirectPage(SIGN_IN);
        }
      }
    });

    if (['signIn', 'signUp', 'bind', 'reset', 'passwordNew', 'passwordNewToken', 'activate'].includes(formType)) {
      const token = window.__DF__ && window.__DF__.getToken();

      if (token) {
        return init(token);
      }

      return getRiskControlToken().then(dfptoken => {
        return init(dfptoken);
      }).catch(() => {
        return init();
      });
    }

    return init();
  };

  return _exports;
}();