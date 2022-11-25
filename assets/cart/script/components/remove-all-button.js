window.SLM = window.SLM || {};

window.SLM['cart/script/components/remove-all-button.js'] = window.SLM['cart/script/components/remove-all-button.js'] || function () {
  const _exports = {};
  const CartUtil = window['SLM']['cart/script/utils/cart-util/index.js'].default;
  const response = window['SLM']['cart/script/domain/model/response.js'].default;
  const cartHdReport = window['SLM']['cart/script/report/cartHdReport.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;

  class RemoveAllButton {
    constructor(rootId, inactiveItems, cartActionHooks) {
      this.rootId = rootId;
      this.inactiveItems = inactiveItems;
      this.cartActionHooks = cartActionHooks;
    }

    init() {
      this.$removeAllButton = $(this.rootId);
      this.initEventListener();
      $(window).on('unload', () => {
        this.unbind();
      });
    }

    unbind() {
      this.$removeAllButton && this.$removeAllButton.off && this.$removeAllButton.off();
    }

    removeItem() {
      try {
        cartReport.removeItem(this.inactiveItems);
        cartHdReport.removeRp(this.inactiveItems);
      } catch (e) {
        console.error(e);
      }

      const skuList = this.inactiveItems.map(item => {
        const {
          skuId,
          spuId,
          groupId,
          productSource,
          num
        } = item || {};
        return {
          skuId,
          spuId,
          groupId,
          productSource,
          num
        };
      });
      CartUtil.removeItem(skuList).then(res => {
        if (response.isResolved(res)) {
          this.cartActionHooks.skuRemoved.call(skuList);
        }
      });
    }

    initEventListener() {
      this.$removeAllButton && this.$removeAllButton.on && this.$removeAllButton.on('click', () => {
        this.removeItem();
      });
    }

  }

  _exports.default = RemoveAllButton;
  return _exports;
}();