window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lozad/plugins/image-transform-webp.js'] = window.SLM['theme-shared/utils/lozad/plugins/image-transform-webp.js'] || function () {
  const _exports = {};
  const { EnumAttributes } = window['SLM']['theme-shared/utils/lozad/plugins/normal.js'];
  const { isElementType, isSupportWebp: checkIsSupportWebp, isS3FileUrl, transformSrcset, SLFile } = window['SLM']['theme-shared/utils/lozad/util.js'];

  function transformImageUrlToWebp(fileOrUrl, ignoreSetting = false) {
    const file = typeof fileOrUrl === 'string' ? new SLFile(fileOrUrl, window.location.href) : fileOrUrl;

    if (!file.querys.has('t') || ignoreSetting) {
      if (window.__isSupportWebp__) {
        file.querys.set('t', 'webp');
      } else if (file.suffix) {
        file.querys.set('t', file.suffix);
      }
    }

    return file.toString();
  }

  _exports.transformImageUrlToWebp = transformImageUrlToWebp;
  _exports.default = {
    init() {
      return checkIsSupportWebp().then(flag => {
        window.__isSupportWebp__ = flag;
      });
    },

    beforeLoad(element) {
      if (isElementType(element, 'img')) {
        const src = element.getAttribute(EnumAttributes.Src);
        if (src) element.setAttribute(EnumAttributes.Src, isS3FileUrl(src) ? transformImageUrlToWebp(src) : src);
        const srcset = element.getAttribute(EnumAttributes.Srcset);
        if (srcset) element.setAttribute(EnumAttributes.Srcset, transformSrcset(srcset, (url, breakpoint) => [isS3FileUrl(url) ? transformImageUrlToWebp(url) : url, breakpoint]));
      }
    }

  };
  return _exports;
}();