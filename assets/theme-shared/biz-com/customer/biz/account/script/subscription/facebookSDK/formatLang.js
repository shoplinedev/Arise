window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/formatLang.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/formatLang.js'] || function () {
  const _exports = {};
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const languageCodeMap = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/languageCode.js'].default;

  const formatLang = () => {
    let lang = getLanguage();
    const matchArr = lang.match(/(zh-hans|zh-hant|[a-z]+)-?([a-z]*)/i);

    if (matchArr) {
      if (matchArr[2]) {
        switch (matchArr[1]) {
          case 'zh-hant':
          case 'zh-hans':
            lang = `zh-${matchArr[2] && matchArr[2].toUpperCase()}`;
            break;

          default:
            lang = `${matchArr[1]}-${matchArr[2] && matchArr[2].toUpperCase()}`;
        }
      } else {
        lang = languageCodeMap[matchArr[1]] && languageCodeMap[matchArr[1]][0] || 'en-US';
      }
    }

    return lang.replace('-', '_');
  };

  _exports.default = formatLang;
  return _exports;
}();