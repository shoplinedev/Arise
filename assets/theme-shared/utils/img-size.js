window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/img-size.js'] = window.SLM['theme-shared/utils/img-size.js'] || function () {
  const _exports = {};
  const urls = window['url']['default'];
  const qs = window['query-string']['default'];

  function img_size(url) {
    const urlParse = urls.parse(url);
    const urlQuery = qs.parse(urlParse && urlParse.query) || {};
    const radix = 10;
    const fixed = 2;
    const width = Number.parseInt(urlQuery.w, radix);
    const height = Number.parseInt(urlQuery.h, radix);
    let ratio = null;

    if (Number.isInteger(width) && Number.isInteger(height) && width !== 0) {
      ratio = `${Number(Number.parseFloat(height / width * 100).toFixed(fixed))}%`;
    }

    return {
      width: Number.isInteger(width) ? width : null,
      height: Number.isInteger(height) ? height : null,
      ratio
    };
  }

  _exports.default = img_size;
  return _exports;
}();