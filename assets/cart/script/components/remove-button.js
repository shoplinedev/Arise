window.SLM = window.SLM || {};

window.SLM['cart/script/components/remove-button.js'] = window.SLM['cart/script/components/remove-button.js'] || function () {
  const _exports = {};
  const CartUtil = window['SLM']['cart/script/utils/cart-util/index.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const CartItemModel = window['SLM']['cart/script/domain/model/cartItem.js'].default;
  const response = window['SLM']['cart/script/domain/model/response.js'].default;
  const cartHdReport = window['SLM']['cart/script/report/cartHdReport.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const modelHelper = window['SLM']['cart/script/domain/model/helpers.js'].default;

  class RemoveButton {
    constructor({
      root,
      itemInfo,
      cartActionHooks
    }) {
      this.root = root;
      this.itemInfo = itemInfo;
      this.cartActionHooks = cartActionHooks;
    }

    init() {
      this.$removeButton = this.root.find('.trade-cart-sku-item-remove-button');
      this.initEventListener();
      $(window).on('unload', () => {
        this.unbind();
      });
    }

    unbind() {
      this.$removeButton && this.$removeButton.off && this.$removeButton.off();
    }

    removeItem() {
      try {
        const products = modelHelper.reducer(CartService.takeCartService().cartItemList).next(CartItemModel.findProductWithGroupIdAndSkuId, CartItemModel.getGroupId(this.itemInfo), CartItemModel.getSkuId(this.itemInfo))() || this.itemInfo;
        const subProducts = modelHelper.reducer(CartService.takeCartService().cartItemList).next(CartItemModel.filterProductInGroup, CartItemModel.getGroupId(products)).next(CartItemModel.filterProductsWithParentSkuId, CartItemModel.getSkuId(products))() || [];
        cartReport.removeItem(products, subProducts);
        cartHdReport.removeRp(products);
        const {
          skuId,
          spuId,
          groupId,
          productSource,
          num
        } = products || {};
        const skuInfo = {
          skuId,
          spuId,
          groupId,
          productSource,
          num
        };
        CartUtil.removeItem([skuInfo]).then(res => {
          if (response.isResolved(res)) {
            this.cartActionHooks.skuRemoved.call([skuId]);
          }
        });
      } catch (e) {
        console.error(e);
      }
    }

    initEventListener() {
      this.$removeButton && this.$removeButton.on && this.$removeButton.on('click', () => {
        this.removeItem();
      });
    }

  }

  _exports.default = RemoveButton;
  return _exports;
}();