window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/format.js'] = window.SLM['theme-shared/biz-com/customer/helpers/format.js'] || function () {
  const _exports = {};

  const redirectTo = url => {
    return window.Shopline && window.Shopline.redirectTo && window.Shopline.redirectTo(url) || url;
  };

  _exports.redirectTo = redirectTo;
  return _exports;
}();