window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lazysizes/index.js'] = window.SLM['theme-shared/utils/lazysizes/index.js'] || function () {
  const _exports = {};
  const lazySizes = window['SLM']['theme-shared/utils/lazysizes/lazysizes.js'].default;
  const imageGifPoster = window['SLM']['theme-shared/utils/lazysizes/image-gif-poster.js'].default;
  const asyncDecodeImage = window['SLM']['theme-shared/utils/lazysizes/async-decode-image.js'].default;
  const { EnumAttributes } = window['SLM']['theme-shared/utils/lazysizes/constants.js'];
  const autoBreakpoint = window['SLM']['theme-shared/utils/lazysizes/auto-breakpoint.js'].default;
  const BeforeUnveilEvent = 'lazybeforeunveil';
  window.lozadObserver = {
    observe: () => {}
  };
  window.lazySizesConfig = {
    lazyClass: EnumAttributes.LazyClass,
    expFactor: 4,
    iframeLoadMode: 1
  };

  function initLazysizes() {
    document.addEventListener('lazybeforesizes', autoBreakpoint);
    document.addEventListener(BeforeUnveilEvent, asyncDecodeImage);
    document.addEventListener(BeforeUnveilEvent, imageGifPoster);
    window.lazySizes = lazySizes(window, document, Date);

    if (typeof window.lazySizes.extraElements === 'undefined') {
      window.lazySizes.extraElements = [];
    }

    HTMLElement.prototype.__updateLazyExtraElements__ = function updateLazy() {
      const imgs = [];

      if (this.shadowRoot) {
        imgs.push(...this.shadowRoot.querySelectorAll(`.${EnumAttributes.LazyClass}`));
      }

      imgs.push(...this.querySelectorAll(`.${EnumAttributes.LazyClass}`));

      if (typeof window.lazySizes.extraElements !== 'undefined') {
        window.lazySizes.extraElements.push(...imgs);
      }

      window.lazySizes.loader.checkElems();
      return imgs;
    };

    HTMLElement.prototype.__removeLazySizesListener__ = function removeLazySizesListener(elements) {
      window.lazySizes.extraElements.filter(item => {
        return !elements.includes(item);
      });
    };
  }

  _exports.default = initLazysizes;
  return _exports;
}();