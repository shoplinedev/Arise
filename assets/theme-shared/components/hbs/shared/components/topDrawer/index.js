window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/topDrawer/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/topDrawer/index.js'] || function () {
  const _exports = {};
  const Base = window['SLM']['theme-shared/components/hbs/shared/base/BaseClass.js'].default;
  const { DRAWER_EVENT_NAME, DRAWER_CALLBACK_EVENT_NAME, DRAWER_OPERATORS } = window['SLM']['theme-shared/components/hbs/shared/components/topDrawer/const.js'];
  const animationTime = 300;

  class TopDrawer extends Base {
    constructor(id, options = {}) {
      super();
      const {
        closeBtnSelector = '.j-top-drawer-close'
      } = options;
      this.config = {
        namespace: `stage:global-top-drawer_id:${id}`
      };
      this.classes = {
        active: 'top-drawer--open',
        fullscreen: 'top-drawer--full'
      };
      this.selector = {
        drawerContainer: '.stage-top-drawer',
        drawerContent: '.top-drawer__container',
        closeButton: closeBtnSelector
      };
      this.attr = {
        openDrawer: 'data-open_topDrawer'
      };
      this.id = id;
      this.options = options;
      this.closeFlag = true;
      this.$setNamespace(this.config.namespace);
      this.init();
    }

    init() {
      this.openTimer = null;
      this.closeTimer = null;
      this.bindClickMask();
      this.listenEvent();
      this.bindClickClose();
      this.bindClickOutside();
      this.setupFullScreen();
      this.stopPropagation();
    }

    get isOpen() {
      return this.$root.hasClass(this.classes.active);
    }

    get $body() {
      return $('body');
    }

    get $root() {
      return $(`#${this.id}`);
    }

    setupFullScreen() {
      if (this.options.fullScreen) {
        this.$root.addClass(this.classes.fullscreen);
      }
    }

    open({
      disablePageScroll = false
    } = {}) {
      if (this.isOpen) {
        return;
      }

      this.ignoreClickOutside();
      clearTimeout(this.closeTimer);
      this.$root.css('display', 'block');
      this.openTimer = setTimeout(() => {
        if (!this.options.fullScreen) {
          this.$root.find('.top-drawer__mask').hide();
        }

        this.$root.addClass(this.classes.active);

        if (this.options.fullScreen || disablePageScroll) {
          this.disablePageScroll();
        }
      }, 0);
    }

    close() {
      this.$root.removeClass(this.classes.active);
      this.enablePageScroll();
      this.closeTimer = setTimeout(() => {
        this.$root.css('display', 'none');
      }, animationTime);
    }

    ignoreClickOutside() {
      this.closeFlag = false;
      setTimeout(() => {
        this.closeFlag = true;
      }, 0);
    }

    bindClickOutside() {
      this.$on('click', e => {
        if (!this.closeFlag) {
          return;
        }

        const $container = $(e.target).closest(`#${this.id}`);
        const isOutside = $container.length === 0;

        if (this.isOpen && isOutside) {
          window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
            operator: DRAWER_OPERATORS.CLOSE,
            id: this.id
          });
        }
      });
    }

    stopPropagation() {
      this.$on('click', `#${this.id}`, e => {
        e.stopPropagation();
      });
    }

    bindClickClose() {
      this.$on('click', `#${this.id} ${this.selector.closeButton}`, () => {
        this.close();
      });
    }

    bindClickMask() {
      this.$on('click', `#${this.id} .top-drawer__mask`, () => {
        this.close();
      });
    }

    listenEvent() {
      window.SL_EventBus.on(DRAWER_EVENT_NAME, res => {
        const {
          id,
          operator,
          option = {}
        } = res;

        if (id !== this.id) {
          return;
        }

        if (operator === DRAWER_OPERATORS.OPEN) {
          this.open(option);
        }

        if (operator === DRAWER_OPERATORS.CLOSE) {
          this.close();
        }

        window.SL_EventBus.emit(DRAWER_CALLBACK_EVENT_NAME, {
          status: operator,
          id
        });
      });
    }

    disablePageScroll() {
      const openDrawers = this.$body.attr(this.attr.openDrawer);
      const list = openDrawers ? openDrawers.split(' ') : [];

      if (!list.includes(this.id)) {
        list.push(this.id);
      }

      this.$body.attr(this.attr.openDrawer, list.join(' '));
    }

    enablePageScroll() {
      const openDrawers = this.$body.attr(this.attr.openDrawer);
      const list = openDrawers ? openDrawers.split(' ') : [];
      const index = list.indexOf(this.id);

      if (index >= 0) {
        list.splice(index, 1);
      }

      if (list.length) {
        this.$body.attr(this.attr.openDrawer, list.join(' '));
      } else {
        this.$body.removeAttr(this.attr.openDrawer);
      }
    }

    setMaxHeight(height) {
      this.$root.find(this.selector.drawerContent).css('max-height', height);
    }

    setWidth(width) {
      this.$root.find(this.selector.drawerContent).css('width', width);
    }

  }

  _exports.default = TopDrawer;
  return _exports;
}();