window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lazysizes/util.js'] = window.SLM['theme-shared/utils/lazysizes/util.js'] || function () {
  const _exports = {};
  const isIE = typeof document !== 'undefined' && document.documentMode;
  _exports.isIE = isIE;

  const support = type => window && window[type];

  _exports.support = support;

  const isElementType = (element, type) => element.nodeName.toLowerCase() === type;

  _exports.isElementType = isElementType;

  function isSupportWebp() {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const result = img.width > 0 && img.height > 0;
        resolve(result);
      };

      img.onerror = () => {
        reject(new Error('no support image/webp'));
      };

      img.src = `data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`;
    });
  }

  _exports.isSupportWebp = isSupportWebp;

  const isGif = url => /^.+\.gif(\?.*){0,1}$/.test(url);

  _exports.isGif = isGif;

  const isS3FileUrl = url => /\.cloudfront\./.test(url) || /img\.myshopline\.com/.test(url) || /img-.*\.myshopline\.com/.test(url);

  _exports.isS3FileUrl = isS3FileUrl;

  const isLoaded = element => element.getAttribute('data-loaded') === 'true';

  _exports.isLoaded = isLoaded;

  const makeIsLoaded = element => element.setAttribute('data-loaded', true);

  _exports.makeIsLoaded = makeIsLoaded;

  const concatStr = (strs, symbol) => strs.filter(Boolean).join(symbol);

  _exports.concatStr = concatStr;

  const transformSrcset = (srcset, transformer) => srcset.split(',').filter(str => str !== '').map(str => concatStr(transformer(...str.trim().split(' ')), ' ')).join(',');

  _exports.transformSrcset = transformSrcset;

  const getElements = (selector, root = document) => {
    if (selector instanceof Element) {
      return [selector];
    }

    if (selector instanceof NodeList) {
      return selector;
    }

    return root.querySelectorAll(selector);
  };

  _exports.getElements = getElements;

  class SLFile {
    constructor(url) {
      const uri = new URL(url, window.location.href);
      const paths = uri.pathname.split('/');
      const filename = paths[paths.length - 1];
      const [name, suffix] = filename.split('.');
      const [originName, ...modifiers] = name.split('_');
      this.uri = uri;
      this.paths = paths;
      this.name = originName;
      this.suffix = suffix;
      this.querys = this.uri.searchParams;
      this.modifiers = modifiers;
    }

    toString() {
      this.uri.pathname = concatStr([...this.paths.slice(0, -1), concatStr([[this.name, ...this.modifiers].join('_'), this.suffix], '.')], '/');
      return this.uri.toString();
    }

  }

  _exports.SLFile = SLFile;
  return _exports;
}();