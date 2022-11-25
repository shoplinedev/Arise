window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/stickyElementManager.js'] = window.SLM['theme-shared/utils/stickyElementManager.js'] || function () {
  const _exports = {};
  const { debounce } = window['lodash'];
  const EVENT_STICKY_ELEMENT_HEIGHT = 'stage:header:stickyElementHeight';

  function getStickyElementHeight(headerSectionSelector = '#shopline-section-header') {
    let top = 0;
    $(headerSectionSelector).prevAll().each((_, el) => {
      const $el = $(el);

      if ($el.css('position') === 'sticky') {
        top += $el.height();
      }
    });
    return top;
  }

  function emitStickyElementHeight() {
    const stickyElementHeight = getStickyElementHeight();
    window.SL_EventBus.emit(EVENT_STICKY_ELEMENT_HEIGHT, {
      stickyElementHeight
    });
  }

  class StickyElementManager {
    constructor() {
      this.namespace = 'stage:stickyElementManager';
      this.bindLoaded();
    }

    bindLoaded() {
      if (document.readyState !== 'loading') {
        this.initAfterLoaded();
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          this.initAfterLoaded();
        });
      }
    }

    initAfterLoaded() {
      this.initStickyJob();
    }

    initStickyJob() {
      emitStickyElementHeight();
      setTimeout(() => {
        requestAnimationFrame(emitStickyElementHeight);
      }, 2500);
      this.onEvent();
    }

    onEvent() {
      $(window).on(`scroll.${this.namespace}`, debounce(emitStickyElementHeight, 1000, {
        leading: true
      }));
    }

    offEvent() {
      $(window).off(`scroll.${this.namespace}`);
    }

  }

  _exports.EVENT_STICKY_ELEMENT_HEIGHT = EVENT_STICKY_ELEMENT_HEIGHT;
  _exports.StickyElementManager = StickyElementManager;
  _exports.getStickyElementHeight = getStickyElementHeight;
  return _exports;
}();