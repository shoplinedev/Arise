window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/comment/js/utils.js'] = window.SLM['theme-shared/components/hbs/comment/js/utils.js'] || function () {
  const _exports = {};
  const reg = '([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])';

  const testEmoji = (str = '') => {
    return new RegExp(reg).test(str);
  };

  _exports.testEmoji = testEmoji;

  const replaceEmoji = (string = '', value = '') => {
    return string.replace(new RegExp(reg, 'g'), value);
  };

  _exports.replaceEmoji = replaceEmoji;
  return _exports;
}();