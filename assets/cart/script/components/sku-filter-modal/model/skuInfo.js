window.SLM = window.SLM || {};

window.SLM['cart/script/components/sku-filter-modal/model/skuInfo.js'] = window.SLM['cart/script/components/sku-filter-modal/model/skuInfo.js'] || function () {
  const _exports = {};
  const statusConstant = window['SLM']['cart/script/components/sku-filter-modal/constant/status.js'].default;

  function unmarshalFromCartVerifyList(verifyList) {
    if (!verifyList || verifyList.length <= 0) return [];
    return verifyList.map(item => {
      const {
        verifyType,
        cartItem,
        cartChangeItem
      } = item;
      return {
        productName: cartItem.name,
        productNum: cartItem.num,
        productStatus: statusConstant.takeFromVerifyType(verifyType),
        productStockNum: cartChangeItem ? cartChangeItem.stock : cartItem.stock,
        productSkuAttrList: cartItem.skuAttr,
        productPrice: cartItem.price,
        productImage: cartItem.image
      };
    });
  }

  _exports.default = {
    unmarshalFromCartVerifyList
  };
  return _exports;
}();