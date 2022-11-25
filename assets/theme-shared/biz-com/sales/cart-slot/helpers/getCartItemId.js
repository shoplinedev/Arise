window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/cart-slot/helpers/getCartItemId.js'] = window.SLM['theme-shared/biz-com/sales/cart-slot/helpers/getCartItemId.js'] || function () {
  const _exports = {};

  const getCartItemId = (item = {}, isMiniCart = false) => {
    const {
      groupId,
      spuId,
      skuId,
      uniqueSeq
    } = item;
    return `${isMiniCart ? 'sidebar' : 'main'}-card-sku-item-${groupId}-${spuId}-${skuId}-${uniqueSeq}`;
  };

  _exports.default = getCartItemId;
  return _exports;
}();