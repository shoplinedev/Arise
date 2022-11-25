window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/skuInfo.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/skuInfo.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];
  const { StatusEnum, verifyType, limitType } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];

  const takeFromVerifyType = vt => {
    if (!vt) return StatusEnum.normal;

    switch (vt) {
      case verifyType.SOLD_OUT:
        return StatusEnum.over;

      case verifyType.UNDER_STOCK:
        return StatusEnum.lack;

      case verifyType.OFF_SHELVED:
        return StatusEnum.offline;

      case verifyType.DELETED:
        return StatusEnum.removed;

      case verifyType.USER_LIMIT:
        return StatusEnum.user_limit;

      case verifyType.PRODUCT_LIMIT:
        return StatusEnum.product_limit;

      case verifyType.PRODUCT_UNDER_STOCK:
        return StatusEnum.product_under_stock;

      default:
        return StatusEnum.normal;
    }
  };

  function isProductLimit(verifyType) {
    return limitType[verifyType];
  }

  function getLimitStock(cartItem, cartChangeItem, status) {
    if (!cartItem) return 0;

    if (status === verifyType.PRODUCT_UNDER_STOCK) {
      return get(cartChangeItem, 'limitedActiveInfo.stock', undefined) || get(cartItem, 'limitedActiveInfo.stock', undefined) || 0;
    }

    return get(cartChangeItem, 'limitedActiveInfo.userStock', undefined) || get(cartItem, 'limitedActiveInfo.userStock', undefined) || 0;
  }

  function getItemStock(item) {
    const {
      verifyType,
      cartItem,
      cartChangeItem
    } = item;

    if (isProductLimit(verifyType)) {
      return getLimitStock(cartItem, cartChangeItem);
    }

    return cartChangeItem ? cartChangeItem.stock : cartItem.stock;
  }

  function getItemLimitInfo(item) {
    const {
      cartItem,
      cartChangeItem
    } = item;
    return cartChangeItem ? cartChangeItem.limitedActiveInfo : cartItem.limitedActiveInfo;
  }

  function unmarshalFromCartVerifyList(list) {
    if (!list || list.length <= 0) return {
      skuList: [],
      productLimit: 0
    };
    let productLimit = 0;
    const skuList = list.map(item => {
      const {
        verifyType,
        cartItem,
        cartChangeItem
      } = item;
      if (isProductLimit(verifyType)) productLimit += 1;
      const {
        name,
        num,
        skuAttr,
        price,
        image,
        properties,
        bindProductImages,
        productMarkList,
        productSource,
        spuId,
        skuId,
        businessType
      } = cartItem;
      const stock = getItemStock(item);
      const limitInfo = getItemLimitInfo(item);
      return {
        productName: name,
        productNum: num,
        productStatus: takeFromVerifyType(verifyType),
        productStockNum: stock,
        productSkuAttrList: skuAttr,
        productPrice: price,
        productImage: image,
        productLimitInfo: limitInfo,
        properties: properties || [],
        bindProductImages: bindProductImages ? bindProductImages[0] : null,
        errorInfo: cartChangeItem && cartChangeItem.errorInfo,
        productMarkList,
        productSource,
        productSeq: spuId,
        productSku: skuId,
        businessType
      };
    });
    return {
      skuList,
      productLimit
    };
  }

  _exports.unmarshalFromCartVerifyList = unmarshalFromCartVerifyList;
  _exports.isProductLimit = isProductLimit;
  return _exports;
}();