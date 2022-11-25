window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/encrypt.js'] = window.SLM['theme-shared/biz-com/customer/helpers/encrypt.js'] || function () {
  const _exports = {};

  const encrypt = value => window && window.UDB && window.UDB.SDK && window.UDB.SDK.rsa && window.UDB.SDK.rsa.RSAUtils && window.UDB.SDK.rsa.RSAUtils.encryptedString(value);

  _exports.encrypt = encrypt;
  return _exports;
}();