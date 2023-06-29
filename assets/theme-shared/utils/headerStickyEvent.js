window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/headerStickyEvent.js'] = window.SLM['theme-shared/utils/headerStickyEvent.js'] || function () {
  const _exports = {};
  const qs = window['query-string']['default'];
  const headerSticky = window['SLM']['theme-shared/events/stage/developer-api/header-sticky/index.js'].default;

  class HeaderStickyEvent {
    constructor() {
      this.headerSectionId = 'shopline-section-header';
      this.headerWrapperSelector = '#stage-header';
      this.aboveElementHeight = 0;
      this.isSticky = false;
      this.namespace = 'stage:stickyElementManager';
      this.isDebug = false;
      this.mutationTimer = null;
      this.originalThreshold = 250;
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
      this.initDebugMode();
      this.initMutationObserver();
    }

    initDebugMode() {
      const params = qs.parse(window.location.search);
      this.isDebug = params.ssr_debug === '1';
    }

    emitSticky(stickyActive) {
      if (stickyActive) {
        this.sticky();
      } else {
        this.unSticky();
      }
    }

    sticky() {
      if (this.isSticky) {
        return;
      }

      this.isSticky = true;
      this.emitEvent();
    }

    unSticky() {
      if (!this.isSticky) {
        return;
      }

      this.isSticky = false;
      this.emitEvent();
    }

    getAboveElementHeight(headerSectionSelector) {
      const sel = headerSectionSelector || `#${this.headerSectionId}`;
      const that = this;
      let height = 0;
      $(sel).prevAll().each((_, el) => {
        const $el = $(el);

        if ($el.css('position') === 'sticky') {
          const h = $el.height();

          if (that.isDebug) {}

          height = Math.max(height, h);
        }
      });
      return height;
    }

    getThreshold() {
      const total = this.originalThreshold + this.aboveElementHeight;
      return total;
    }

    onMutation(mutationList) {
      const nodesChangedMutation = mutationList.find(mutation => {
        const {
          type,
          addedNodes = [],
          removedNodes = []
        } = mutation;
        const nodesChanged = addedNodes.length || removedNodes.length;
        return type === 'childList' && nodesChanged;
      });

      if (!nodesChangedMutation) {
        return;
      }

      if (this.mutationTimer) {
        clearTimeout(this.mutationTimer);
      }

      this.mutationTimer = setTimeout(() => {
        const height = this.getAboveElementHeight(`#${this.headerSectionId}`);

        if (height !== this.aboveElementHeight) {
          this.aboveElementHeight = height;
          this.emitEvent();
        }
      }, 200);
    }

    initMutationObserver() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true
      };
      const observer = new MutationObserver(mutationList => {
        this.onMutation(mutationList);
      });
      observer.observe(targetNode, observerOptions);
    }

    emitEvent() {
      const that = this;
      const headerElement = document.querySelector(that.headerWrapperSelector);
      const headerHeight = headerElement ? headerElement.getBoundingClientRect().height : 0;
      const aboveElementHeight = this.getAboveElementHeight(`#${this.headerSectionId}`);
      that.aboveElementHeight = aboveElementHeight;
      const data = {
        header_sticky: that.isSticky,
        header_height: headerHeight,
        above_element_height: that.aboveElementHeight
      };

      if (that.isDebug) {
        console.groupCollapsed(`[Offical Event]${headerSticky.apiName}`);
        console.table(data);
        console.groupEnd();
      }

      headerSticky(data);
    }

  }

  const headerStickyEvent = new HeaderStickyEvent();
  _exports.headerStickyEvent = headerStickyEvent;
  return _exports;
}();