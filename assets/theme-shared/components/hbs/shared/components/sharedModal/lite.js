window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/sharedModal/lite.js'] = window.SLM['theme-shared/components/hbs/shared/components/sharedModal/lite.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { bem, visibleClassName, animationClassMap, disablePageScroll, enablePageScroll, HIDDEN, VISIBLE, DEFAULT_MODAL_ID_PRE, maskClosableClass } = window['SLM']['theme-shared/components/hbs/shared/components/sharedModal/common.js'];

  class Modal {
    constructor({
      modalId = ''
    } = {}) {
      this.modalId = `${DEFAULT_MODAL_ID_PRE}${modalId}`;
      this.$modal = $(`#${this.modalId}`);
      this.$modalBody = this.$modal.find(`.${bem('body')}`);
      this.$modalContainer = this.$modal.find(`.${bem('container')}`);
      this.isMobile = SL_State.get('request.is_mobile');
      this.maskClosable = this.$modal.data('maskclosable');
      this.visibleState = HIDDEN;
      this.eventsBinded = false;
      this.init();
    }

    init() {
      if (!this.eventsBinded) {
        this.bindEvents();
        this.eventsBinded = true;
      }
    }

    show() {
      this.visibleState = VISIBLE;
      disablePageScroll(this.$modalBody.get(0));
      this.$modal.addClass([visibleClassName, animationClassMap.visible]).removeClass(animationClassMap.hidden);
      this.toggleMaskClassName();
    }

    hide(force) {
      this.visibleState = HIDDEN;
      enablePageScroll(this.$modalBody.get(0));
      this.toggleMaskClassName();
      this.$modal.addClass(animationClassMap.hidden).removeClass(animationClassMap.visible);

      if (force) {
        this.afterAnimation();
      }
    }

    toggleMaskClassName() {
      if (this.maskClosable) {
        this.$modal.find(`.${bem('mask')}`).toggleClass(maskClosableClass, this.visibleState === VISIBLE);
      }
    }

    afterAnimation() {
      this.$modal.toggleClass(visibleClassName, this.visibleState === VISIBLE);
    }

    bindEvents() {
      this.$modal.on('click', `.${bem('close')}`, this.hide.bind(this, false));

      if (this.isMobile) {
        this.$modal.on('touchstart', `.${bem('close')}`, this.hide.bind(this, false));
      }

      if (this.maskClosable) {
        this.$modal.on('click', `.${bem('mask')}`, this.hide.bind(this, false));
      }

      this.$modalContainer.on('animationend', this.afterAnimation.bind(this));
    }

  }

  _exports.default = Modal;
  return _exports;
}();