window.SLM = window.SLM || {};

window.SLM['cart/script/utils/cart-util/index.js'] = window.SLM['cart/script/utils/cart-util/index.js'] || function () {
  const _exports = {};
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;

  class CartUtil {
    static removeItem(skuList) {
      return CartUtil.getCartService().removeSkuList(skuList);
    }

    static changeItemNum(spuId, skuId, num, groupId, productSource) {
      CartUtil.getCartService().editSku({
        spuId,
        skuId,
        num,
        groupId,
        productSource
      });
    }

    static getCartService() {
      if (!CartUtil.service) {
        CartUtil.service = CartService.takeCartService();
      }

      return CartUtil.service;
    }

  }

  _exports.default = CartUtil;
  return _exports;
}();