window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/base.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/base.js'] || function () {
  const _exports = {};
  const { disablePageScroll, enablePageScroll } = window['scroll-lock'];
  const { prefixer } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/tool.js'];
  const DEFAULT_MODAL_ID_PRE = 'TradeModal';
  const VISIBLE = 'visible';
  const HIDDEN = 'hidden';

  const bem = className => {
    return prefixer(className, 'trade-modal');
  };

  const animationClassMap = {
    visible: bem('visibleAnimation'),
    hidden: bem('notVisibleAnimation')
  };
  const visibleClassName = bem('visible');
  const maskClosableClass = bem('closable');
  let uuid = 0;

  class TradeModalWithHtml {
    constructor(options = {}) {
      const config = {
        zIndex: 1000,
        containerClassName: '',
        closable: true,
        maskClosable: true,
        bodyClassName: '',
        content: '',
        destroyedOnClosed: false,
        afterClose: () => {},
        ...options
      };
      this.modalId = config.id || `${DEFAULT_MODAL_ID_PRE}${++uuid}`;
      this.zIndex = config.zIndex;
      this.config = config;
      this.destroyed = false;
      this.init();
    }

    init() {
      const $modal = $(`#${this.modalId}`);

      if ($modal.length > 0) {
        this.$modal = $modal;
        return;
      }

      this.$modal = this.buildModalHtml();
      this.bindEvents();
    }

    buildModalHtml() {
      const {
        zIndex,
        closable,
        containerClassName,
        bodyClassName,
        content,
        children
      } = this.config;
      const modalHtml = `
      <div id="${this.modalId}" class="${bem('wrapper')}">
        <div class="${bem('mask')}"></div>
        <div class="${bem('container')}">
          ${closable ? `<span class="${bem('close')}">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1998 4.80005L4.7998 19.2" stroke="currentColor" stroke-width="2"/>
              <path d="M4.7998 4.79995L19.1998 19.2" stroke="currentColor" stroke-width="2"/>
            </svg>
          </span>` : ''}
          <div class="${bem('body')} ${bodyClassName}">
            ${content}
          </div>
        </div>
      </div>
    `;
      const $modal = $(modalHtml);

      if (containerClassName) {
        $modal.find(`.${bem('container')}`).addClass(containerClassName);
      }

      if (bodyClassName) {
        $modal.find(`.${bem('body')}`).addClass(bodyClassName);
      }

      if (children) {
        $modal.find(`.${bem('body')}`).append(children);
      }

      if ((typeof zIndex === 'number' || typeof zIndex === 'string') && zIndex !== '') {
        $modal.css('z-index', zIndex);
      }

      return $modal;
    }

    setContent(content) {
      this.config.content = content;
      this.$modal.find(`.${bem('body')}`).html(content);
    }

    show() {
      if (this.destroyed) {
        this.destroyed = false;
        this.bindEvents();
      }

      const $modalBody = this.$modal.find(`.${bem('body')}`);
      this.$modal.appendTo(document.body);
      disablePageScroll($modalBody.get(0));
      this.visibleState = VISIBLE;
      this.$modal.addClass([visibleClassName, animationClassMap.visible]).removeClass(animationClassMap.hidden);
      this.toggleMaskClassName();
    }

    hide(force) {
      const $modalBody = this.$modal.find(`.${bem('body')}`);
      this.visibleState = HIDDEN;
      enablePageScroll($modalBody.get(0));
      this.toggleMaskClassName();
      this.$modal.addClass(animationClassMap.hidden).removeClass(animationClassMap.visible);

      if (force) {
        this.afterAnimation();
      }
    }

    toggleMaskClassName() {
      if (this.config.maskClosable) {
        this.$modal.find(`.${bem('mask')}`).toggleClass(maskClosableClass, this.visibleState === VISIBLE);
      }
    }

    afterAnimation() {
      this.$modal.toggleClass(visibleClassName, this.visibleState === VISIBLE);

      if (typeof this.config.afterClose === 'function') {
        this.config.afterClose(this.$modal);
      }

      this.destroy();
    }

    destroy() {
      if (this.config.destroyedOnClosed && this.visibleState === HIDDEN) {
        this.$modal.remove();
        this.destroyed = true;
      }
    }

    bindEvents() {
      this.$modal && this.$modal.on('click', `.${bem('close')}`, this.hide.bind(this, false));

      if (this.config.maskClosable) {
        this.$modal && this.$modal.on('click', `.${bem('mask')}`, this.hide.bind(this, false));
      }

      if (this.config.handleClickMask) {
        this.$modal && this.$modal.on('click', `.${bem('mask')}`, this.config.handleClickMask);
      }

      this.$modal && this.$modal.on('animationend', `.${bem('container')}`, this.afterAnimation.bind(this));
    }

  }

  _exports.default = TradeModalWithHtml;
  return _exports;
}();