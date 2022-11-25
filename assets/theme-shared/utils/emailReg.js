window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/emailReg.js'] = window.SLM['theme-shared/utils/emailReg.js'] || function () {
  const _exports = {};
  const EMAIL_VALID_REGEXP = /^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$/;
  _exports.EMAIL_VALID_REGEXP = EMAIL_VALID_REGEXP;
  return _exports;
}();