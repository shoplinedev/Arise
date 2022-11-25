window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/account.js'] = window.SLM['theme-shared/biz-com/customer/service/account.js'] || function () {
  const _exports = {};
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];
  const { signOutAndJump } = window['SLM']['theme-shared/biz-com/customer/helpers/signOut.js'];

  function withLoginStatusCheck(response) {
    return new Promise((res, rej) => {
      response.then(data => {
        res(data);
      }).catch(err => {
        if (err.code === 'CUS0401') {
          signOutAndJump();
          return;
        }

        rej(err);
      });
    });
  }

  const updateAccountInfo = data => {
    return request.post('/user/front/userinfo/updateAccountInfo', data);
  };

  _exports.updateAccountInfo = updateAccountInfo;

  const deleteAccountInfo = data => {
    return request.post('/user/front/userinfo/applyForEraseData', data);
  };

  _exports.deleteAccountInfo = deleteAccountInfo;

  const getSubscriptions = params => {
    return request.get('/user/front/sub/state', {
      params
    });
  };

  _exports.getSubscriptions = getSubscriptions;

  const updateSubscriptions = data => {
    return request.post('/user/front/sub/state', data);
  };

  _exports.updateSubscriptions = updateSubscriptions;

  const postUnSubscribe = data => {
    return request.post('/user/front/sub/unSubscribe', data);
  };

  _exports.postUnSubscribe = postUnSubscribe;

  const getSubscriptAuths = ({
    platform
  }) => {
    return request.get('/user/front/sub/authorize', {
      params: {
        platform
      }
    });
  };

  _exports.getSubscriptAuths = getSubscriptAuths;

  async function updateLineAuth(params) {
    return request.post('/user/front/sub/authorize', params);
  }

  _exports.updateLineAuth = updateLineAuth;

  const updateSensitiveAccountInfo = data => {
    return withLoginStatusCheck(request.post('/user/front/userinfo/updateAccountSensitive', data));
  };

  _exports.updateSensitiveAccountInfo = updateSensitiveAccountInfo;

  const confirmEmailSubscribe = data => {
    return withLoginStatusCheck(request.post('/user/front/sub/email/allow/subscribe', data));
  };

  _exports.confirmEmailSubscribe = confirmEmailSubscribe;

  const getBdApiInfo = userId => {
    return request.get(`/user/front/store/getBdApiInfo/${userId}`);
  };

  _exports.getBdApiInfo = getBdApiInfo;
  return _exports;
}();