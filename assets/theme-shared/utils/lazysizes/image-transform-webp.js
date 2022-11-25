window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lazysizes/image-transform-webp.js'] = window.SLM['theme-shared/utils/lazysizes/image-transform-webp.js'] || function () {
  const _exports = {};
  const { EnumAttributes } = window['SLM']['theme-shared/utils/lazysizes/constants.js'];
  const { isElementType, transformSrcset, SLFile } = window['SLM']['theme-shared/utils/lazysizes/util.js'];

  function transformImageUrlToWebp(url, ignoreSetting = false) {
    const file = new SLFile(url);

    if (!file.querys.has('t') || ignoreSetting) {
      if (window.__SUPPORT_WEBP__) {
        file.querys.set('t', 'webp');
      } else if (file.suffix) {
        file.querys.set('t', file.suffix);
      }
    }

    return file.toString();
  }

  _exports.transformImageUrlToWebp = transformImageUrlToWebp;

  _exports.default = event => {
    const element = event.target;

    if (isElementType(element, 'img')) {
      const src = element.getAttribute(EnumAttributes.Src);
      if (src) element.setAttribute(EnumAttributes.Src, transformImageUrlToWebp(src));
      const srcset = element.getAttribute(EnumAttributes.Srcset);
      if (srcset) element.setAttribute(EnumAttributes.Srcset, transformSrcset(srcset, (url, breakpoint) => [transformImageUrlToWebp(url), breakpoint]));
    }
  };

  return _exports;
}();