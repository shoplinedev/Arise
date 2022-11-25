window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/formatRequestBody.js'] = window.SLM['theme-shared/biz-com/customer/helpers/formatRequestBody.js'] || function () {
  const _exports = {};
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];

  const formatRequestBody = data => {
    return { ...(data || {}),
      lang: getLanguage()
    };
  };

  _exports.default = formatRequestBody;
  return _exports;
}();