window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/scrollPagination/index.js'] = window.SLM['theme-shared/utils/scrollPagination/index.js'] || function () {
  const _exports = {};
  const throttle = window['lodash']['throttle'];
  const OFFSET_HEIGHT = 20;
  const THROTTLE_WAIT = 30;

  class ScrollPagination {
    constructor(options) {
      this.options = options;
      this._locked = false;
      this._isDocumentScroll = false;
      this.init();
    }

    init() {
      this.scrollContainer.on('scroll', throttle(async () => {
        if (this.isScrolledToBottom && !this._locked) {
          this._locked = true;
          this.loadingContainer.fadeIn();
          const {
            noMore
          } = await this.options.load();
          this.loadingContainer.fadeOut();

          if (noMore !== true) {
            this._locked = false;
          }
        }
      }, THROTTLE_WAIT));
    }

    get isScrolledToBottom() {
      let scrollContainer = this.scrollContainer[0];

      if (!scrollContainer) {
        throw Error('invalid scrollContainer option');
      }

      if (this._isDocumentScroll) {
        scrollContainer = document.documentElement;
      }

      return scrollContainer.scrollTop + scrollContainer.clientHeight > this.listContainer.height() + OFFSET_HEIGHT;
    }

    get scrollContainer() {
      const optionContainer = this.options.scrollContainer;

      if (!optionContainer || ['[object HTMLDocument]', 'document'].includes(optionContainer.toString())) {
        this._isDocumentScroll = true;
        return $(document);
      }

      return $(optionContainer);
    }

    get listContainer() {
      return $(this.options.listContainer);
    }

    get loadingContainer() {
      return $(this.options.loadingContainer);
    }

  }

  _exports.default = ScrollPagination;
  return _exports;
}();