window.SLM = window.SLM || {};

window.SLM['stage/header/scripts/drawer-menu.js'] = window.SLM['stage/header/scripts/drawer-menu.js'] || function () {
  const _exports = {};
  const Base = window['SLM']['commons/base/BaseClass.js'].default;

  class DrawerMenu extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'stage:drawerMenu'
      };
      this.classes = {
        openClass: 'is-open'
      };
      this.selector = {
        trigger: '.nav-collapsible-trigger ',
        inner: '.collapsible-content__inner',
        sublist: '.mobile-nav__sublist',
        drawer: '.stage-drawer-nested.stage-drawer--is-open',
        localeCurrency: '.locale-currency.mobile-nav__link',
        localeCurrencyContainer: '.drawer-menu-locale-currency'
      };
      this.$setNamespace(this.config.namespace);
      this.bindEvent();
      this.bindDrawer();
      this.bindLocaleCurrencyChange();
    }

    modifyParent($button, addHeight, isOpen) {
      const parent = $button.parents(`div${this.selector.sublist}`);

      if (!parent.length) {
        return;
      }

      parent.height(parent.height());

      if (isOpen) {
        parent.height(parent.height() + addHeight);
      } else {
        parent.height(parent.height() - addHeight);
      }
    }

    bindEvent() {
      this.$on('click', this.selector.trigger, e => {
        const $button = $(e.currentTarget);
        const controlsId = $button.attr('aria-controls');
        const $controls = $(`#${controlsId}`);
        const $inner = $controls.find(this.selector.inner);
        const height = $inner.height();

        if ($button.hasClass(this.classes.openClass)) {
          $controls.height(height);
          $button.removeClass(this.classes.openClass);
          this.modifyParent($button, height, false);
          this.prepareTransition($controls, () => {
            $controls.height(0);
            $controls.removeClass(this.classes.openClass);
          });
        } else {
          this.modifyParent($button, height, true);
          this.prepareTransition($controls, () => {
            $controls.height(height);
            $controls.addClass(this.classes.openClass);
          });
          $button.addClass(this.classes.openClass);
        }
      });
    }

    bindDrawer() {
      this.$on('click', this.selector.localeCurrency, e => {
        const $target = $(e.currentTarget);
        const drawerId = $target.data('drawer');
        window.SL_EventBus.emit('stage:drawer', {
          id: drawerId,
          status: 'open'
        });
      });
    }

    bindLocaleCurrencyChange() {
      this.$on('click', `${this.selector.localeCurrencyContainer} li`, e => {
        const $target = $(e.currentTarget);
        const drawerId = $target.parents(this.selector.drawer).eq(0).attr('id');
        window.SL_EventBus.emit('stage:drawer', {
          id: drawerId,
          status: 'close_self'
        });
      });
    }

    off() {
      this.$offAll();
    }

  }

  let instance = new DrawerMenu();
  $(document).on('shopline:section:load', () => {
    instance.off();
    instance = new DrawerMenu();
  });
  return _exports;
}();