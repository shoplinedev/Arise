window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/helpers/drawer.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/helpers/drawer.js'] || function () {
  const _exports = {};

  class Drawer {
    constructor({
      id,
      onSwitch
    }) {
      if (!id) {
        throw new Error('【drawer】id为必传项');
      }

      this.id = id;
      this.isShow = false;
      const drawerDom = this.getDom();

      if (!drawerDom) {
        return;
      }

      document.body.appendChild(drawerDom);
      this.hide = this.hide.bind(this);
      this.onSwitch = onSwitch;
    }

    getDom() {
      const dom = document.getElementById(this.id);
      return dom || false;
    }

    show() {
      const drawerDom = this.getDom();

      if (!drawerDom) {
        return;
      }

      this.isShow = true;
      drawerDom.style.display = 'block';
      const $body = $('body');
      $body.addClass('sales-common-drawer__root-open');
      const mask = drawerDom.querySelector('.sales-common-drawer__mask-hook');

      if (mask) {
        setTimeout(() => {
          $(mask).addClass('sales-common-drawer__mask--append');
        }, 20);
        mask.addEventListener('click', this.hide);
      }

      const closeBtn = drawerDom.querySelector('.sales-common-drawer-hook');

      if (closeBtn) {
        closeBtn.addEventListener('click', this.hide);
      }

      this.onSwitch && this.onSwitch(true);
    }

    hide() {
      const drawerDom = this.getDom();

      if (!drawerDom) {
        return;
      }

      this.isShow = false;
      drawerDom.style.display = 'none';
      const $body = $('body');
      $body.removeClass('sales-common-drawer__root-open');
      const mask = drawerDom.querySelector('.sales-common-drawer__mask-hook');

      if (mask) {
        $(mask).removeClass('sales-common-drawer__mask--append');
        mask.removeEventListener('click', this.hide);
      }

      const closeBtn = drawerDom.querySelector('.sales-common-drawer-hook');

      if (closeBtn) {
        closeBtn.removeEventListener('click', this.hide);
      }

      this.onSwitch && this.onSwitch(false);
    }

    getShowStatus() {
      return this.isShow;
    }

  }

  _exports.default = Drawer;
  return _exports;
}();