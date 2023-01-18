window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'] = window.SLM['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { UDB_RESPONSE_LANGUAGE_ERROR_CODES } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const keyMaps = {
    '-1': '2',
    '-13': '3',
    '-4': '4',
    '-5': '5',
    '-999': '6'
  };

  const getUdbResponseLanguageErrorKey = rescode => {
    if (UDB_RESPONSE_LANGUAGE_ERROR_CODES.indexOf(Number(rescode)) > -1) {
      return `unvisiable.customer.error_message_${keyMaps[rescode] || rescode}`;
    }

    return undefined;
  };

  _exports.getUdbResponseLanguageErrorKey = getUdbResponseLanguageErrorKey;

  function getUdbErrorMessage(res) {
    const errorKey = getUdbResponseLanguageErrorKey(res.rescode);
    return errorKey ? t(errorKey) : res.message;
  }

  _exports.getUdbErrorMessage = getUdbErrorMessage;
  return _exports;
}();