window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/drawer/index.js'] = window.SLM['theme-shared/components/hbs/shared/components/drawer/index.js'] || function () {
  const _exports = {};
  const Base = window['SLM']['theme-shared/components/hbs/shared/base/BaseClass.js'].default;
  const { DRAWER_EVENT_NAME, DRAWER_CALLBACK_EVENT_NAME } = window['SLM']['theme-shared/components/hbs/shared/components/drawer/const.js'];

  function getEventRealElem(event) {
    const isJqueryEvent = event instanceof $.Event;
    const oEvent = isJqueryEvent ? event.originalEvent : event;
    const eventPath = oEvent.composedPath && oEvent.composedPath() || oEvent.path;
    let index = 0;
    let currentEl;

    while (currentEl = eventPath[index]) {
      if (currentEl && currentEl.nodeName && currentEl.nodeName.toLowerCase() !== 'font') {
        break;
      }

      index++;
    }

    return currentEl || event.target;
  }

  class GlobalDrawer extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'stage:global-drawer'
      };
      this.classes = {
        drawerOpenRoot: 'stage-drawer-root-open',
        drawerClosingRoot: 'stage-drawer-root-closing',
        activeDrawer: 'stage-drawer--is-open'
      };
      this.selector = {
        drawerContainer: '.stage-drawer',
        closeButton: '.j-drawer-close',
        backButton: '.j-drawer-back'
      };
      this.hub = {};
      this.jq = {
        root: $('body')
      };
      this.jq.root.removeClass(this.classes.drawerClosingRoot);
      this.jq.root.removeClass(this.classes.drawerOpenRoot);
      this.$setNamespace(this.config.namespace);
      this.init();
    }

    init() {
      window.SL_EventBus.on(DRAWER_EVENT_NAME, ({
        id,
        status,
        onOpen
      }) => {
        if (!id) {
          return;
        }

        const $drawer = $(`#${id}`);
        const isSubDrawer = $drawer.data('level') > 1;
        this.hub[id] = status === 'open';

        if (status === 'open') {
          if ($drawer.hasClass(this.classes.activeDrawer)) {
            typeof onOpen === 'function' && onOpen({
              id,
              status
            });
            return;
          }

          this.prepareTransition($drawer, () => {
            this.jq.root.addClass(this.classes.drawerOpenRoot);
            $drawer.addClass(this.classes.activeDrawer);
            typeof onOpen === 'function' && onOpen({
              id,
              status
            });
          });
          this.bindHandleClick(id);
        }

        if (status === 'close') {
          if (isSubDrawer) {
            const parentDrawer = $drawer.parents(`${this.selector.drawerContainer}.${this.classes.activeDrawer}`).eq(0);

            if (parentDrawer) {
              this.closeDrawer(parentDrawer, true);
            }
          }

          this.closeDrawer($drawer, true);
        }

        if (status === 'close_self') {
          if (!isSubDrawer) {
            return;
          }

          this.closeDrawer($drawer);
        }

        window.SL_EventBus.emit(DRAWER_CALLBACK_EVENT_NAME, {
          status,
          id
        });
      });
    }

    bindHandleClick(id) {
      this.$on('click', e => {
        const realTarget = getEventRealElem(e);

        if (!realTarget.closest(this.selector.drawerContainer)) {
          window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
            id,
            status: 'close'
          });
        }
      });
      this.$on('click', this.selector.closeButton, e => {
        const container = e.target.closest(this.selector.drawerContainer);

        if (container) {
          window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
            id: container.id,
            status: 'close'
          });
        }
      });
      this.$on('click', this.selector.backButton, e => {
        const container = e.target.closest(this.selector.drawerContainer);

        if (container) {
          window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
            id: container.id,
            status: 'close_self'
          });
        }
      });
    }

    closeDrawer($drawer, removeMask) {
      if (!$drawer.hasClass(this.classes.activeDrawer)) {
        return;
      }

      this.prepareTransition($drawer, () => {
        if (removeMask) {
          this.jq.root.removeClass(this.classes.drawerOpenRoot);
          this.jq.root.addClass(this.classes.drawerClosingRoot);
        }

        $drawer.removeClass(this.classes.activeDrawer);
      }, () => {
        if (removeMask) {
          this.jq.root.removeClass(this.classes.drawerClosingRoot);
        }
      });

      if (removeMask) {
        this.offHandleClick();
      }
    }

    offHandleClick() {
      this.$off('click');
    }

    off() {
      this.$offAll();
      window.SL_EventBus.off(DRAWER_EVENT_NAME);
    }

  }

  let instance = new GlobalDrawer();
  $(document).on('shopline:section:load', () => {
    instance = new GlobalDrawer();
  });
  $(document).on('shopline:section:unload', () => {
    Object.keys(instance.hub).filter(id => {
      return !!instance.hub[id];
    }).forEach(id => {
      window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
        status: 'close',
        id
      });
    });
    instance.off();
  });
  return _exports;
}();