window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/activate.js'] = window.SLM['theme-shared/biz-com/customer/service/activate.js'] || function () {
  const _exports = {};
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const checkAccountState = params => {
    return request.get('/user/front/userinfo/checkAccountState', {
      params
    });
  };

  _exports.checkAccountState = checkAccountState;

  const getEmailCustomConfig = params => {
    return request.get('/user/front/email/getEmailCustomConfig', {
      params
    });
  };

  _exports.getEmailCustomConfig = getEmailCustomConfig;

  const addCart = params => {
    return request.get('/user/front/user/center/addCart', {
      params
    });
  };

  _exports.addCart = addCart;

  const getDiscountValue = params => {
    return request.get('/user/front/user/center/getDiscountValue', {
      params
    });
  };

  _exports.getDiscountValue = getDiscountValue;

  const queryEmailByToken = data => {
    return request.post('/user/front/userinfo/queryEmailByToken', data);
  };

  _exports.queryEmailByToken = queryEmailByToken;
  return _exports;
}();