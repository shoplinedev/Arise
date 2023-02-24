window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lazysizes/async-decode-image.js'] = window.SLM['theme-shared/utils/lazysizes/async-decode-image.js'] || function () {
  const _exports = {};
  const { isElementType } = window['SLM']['theme-shared/utils/lazysizes/util.js'];

  _exports.default = event => {
    const element = event.target;

    if (isElementType(element, 'img')) {
      if (!element.hasAttribute('decoding')) {
        element.decoding = 'async';
      }
    }
  };

  return _exports;
}();