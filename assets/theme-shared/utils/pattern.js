window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/pattern.js'] = window.SLM['theme-shared/utils/pattern.js'] || function () {
  const _exports = {};
  const EMAIL_PATTERN = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;
  _exports.EMAIL_PATTERN = EMAIL_PATTERN;
  const MEMBER_PASSWORD_PATTERN = /^.{6,18}$/i;
  _exports.MEMBER_PASSWORD_PATTERN = MEMBER_PASSWORD_PATTERN;
  const PHONE_PATTERN = {
    '+86': /^1[3-9]\d{9}$/,
    '+886': /^0?9\d{8}$/,
    '+852': /^(5|6|7|9)\d{7}$/
  };
  _exports.PHONE_PATTERN = PHONE_PATTERN;
  const CODE_PHONE_PATTERN = /^(\w+(\+\d+))-(.*)$/;
  _exports.CODE_PHONE_PATTERN = CODE_PHONE_PATTERN;
  const INTERNATIONAL_PHONE_PATTERN = /^(00|\+)[1-9]{1}([0-9]){9,16}$/;
  _exports.INTERNATIONAL_PHONE_PATTERN = INTERNATIONAL_PHONE_PATTERN;
  return _exports;
}();