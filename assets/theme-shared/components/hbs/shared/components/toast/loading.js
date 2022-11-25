window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/toast/loading.js'] = window.SLM['theme-shared/components/hbs/shared/components/toast/loading.js'] || function () {
  const _exports = {};
  const { LOADING, HIDDEN_CLASSNAME, getTemplate } = window['SLM']['theme-shared/components/hbs/shared/components/toast/toast.js'];
  const OPTION_TARGET = 'body';

  class Loading {
    constructor(options = {}) {
      this.options = {
        duration: 1500,
        fullscreen: !options.target || options.target === OPTION_TARGET,
        ...options
      };
      this.$loading = null;
      this.$target = null;
      this.timer = null;
      this.init();
    }

    init() {
      const template = getTemplate(this.options, LOADING);
      this.$target = $(this.options.target || document.body);
      this.$loading = $(template);
    }

    open() {
      const {
        $target
      } = this;
      const originPosition = $target.css('position');

      if (originPosition === 'static') {
        $target.css('position', 'relative');
      }

      this.$loading.appendTo($target).removeClass(HIDDEN_CLASSNAME);

      if (this.options.duration > 0) {
        this.timer = setTimeout(this.close.bind(this), this.options.duration);
      }
    }

    close() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.$loading.remove();
      this.$loading = null;
      this.$target.css('position', '');
    }

  }

  _exports.default = Loading;
  return _exports;
}();