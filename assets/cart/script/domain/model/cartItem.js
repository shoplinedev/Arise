window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/cartItem.js'] = window.SLM['cart/script/domain/model/cartItem.js'] || function () {
  const _exports = {};
  const productStockVO = window['SLM']['cart/script/domain/vo/productStock.js'].default;
  const productPriceTypeVO = window['SLM']['cart/script/domain/vo/productPriceType.js'].default;
  const priceType = window['SLM']['cart/script/constant/priceType.js'].default;
  const obj = window['SLM']['cart/script/utils/object.js'].default;
  const CartQuantityConst = window['SLM']['cart/script/constant/cartQuantity.js'].default;

  function getSpuId(model) {
    if (!model) return '';
    return model.spuId || '';
  }

  function getSkuId(model) {
    if (!model) return '';
    return model.skuId || '';
  }

  function getGroupId(model) {
    if (!model) return '';
    return model.groupId || '';
  }

  function getParentSkuId(model) {
    if (!model) return '';
    return model.parentSkuId || '';
  }

  function getProductSource(model) {
    if (!model) return '';
    return model.productSource || '';
  }

  function getQuantity(model) {
    if (!model) return 0;
    return model.num || 0;
  }

  function getStock(model) {
    if (!model) return 0;
    return model.stock || 0;
  }

  function getPriceType(model) {
    if (!model) return priceType.NORMAL;
    return model.priceType;
  }

  function isProductOnSale(model) {
    return productStockVO.isProductOnSale(model);
  }

  function isProductQuantityAvailable(model) {
    if (!model) return false;
    const quantity = getQuantity(model);
    if (quantity <= 0) return false;
    if (quantity > CartQuantityConst.MAX_CART_ITEM_QUANTITY) return false;
    const stock = getStock(model);
    if (quantity <= stock) return true;
    return productStockVO.isStockNotLimited(model);
  }

  function isProductQuantityOverflow(model) {
    return getQuantity(model) > CartQuantityConst.MAX_CART_ITEM_QUANTITY;
  }

  function getUniqueID(model) {
    if (!model) return '';
    return `${model.groupId}${model.spuId}.${model.skuId}`;
  }

  function filterOnSaleProduct(list) {
    return filter(list, productStockVO.isProductOnSale);
  }

  function mergeNthProduct(list) {
    if (!list) return [];
    const productIndexMap = {};
    const result = [];

    for (let i = 0; i < list.length; ++i) {
      const item = list[i];

      if (obj.has(productIndexMap, `${item.groupId}${item.skuId}`)) {
        const pushedItem = result[productIndexMap[`${item.groupId}${item.skuId}`]];

        if (productPriceTypeVO.isNthDiscount(item)) {
          item.num += pushedItem.num;
          result[productIndexMap[`${item.groupId}${item.skuId}`]] = item;
        } else {
          pushedItem.num += item.num;
        }
      } else {
        productIndexMap[`${item.groupId}${item.skuId}`] = result.length;
        result.push({ ...item
        });
      }
    }

    return result;
  }

  function isCartItemListOverflow(list) {
    if (!list) return false;
    return list.length > CartQuantityConst.MAX_CART_ITEM_LIST_QUANTITY;
  }

  function filterProductInGroup(list, groupId) {
    if (!list || !groupId) return [];
    return filter(list, model => {
      return getGroupId(model) === groupId;
    });
  }

  function groupProductsWithSkuId(list, skuId) {
    if (!list || !skuId) return [];
    return filter(list, model => {
      if (getSkuId(model) === skuId) return true;
      return getParentSkuId(model) === skuId;
    });
  }

  function filterProductsWithParentSkuId(list, skuId) {
    if (!list || !skuId) return [];
    return filter(list, model => {
      if (getSkuId(model) === skuId) return false;
      return getParentSkuId(model) === skuId;
    });
  }

  function findProductWithGroupIdAndSkuId(list, groupId, skuId) {
    if (!list || !skuId) return [];

    if (!groupId) {
      groupId = '0';
    }

    return find(list, model => {
      if (getSkuId(model) !== skuId) return false;
      let targetGroupId = getGroupId(model);

      if (!targetGroupId) {
        targetGroupId = '0';
      }

      return targetGroupId === groupId;
    });
  }

  _exports.default = {
    getUniqueID,
    getPriceType,
    getSpuId,
    getSkuId,
    getGroupId,
    getProductSource,
    getQuantity,
    isProductOnSale,
    isProductQuantityAvailable,
    isProductQuantityOverflow,
    isCartItemListOverflow,
    mergeNthProduct,
    filterOnSaleProduct,
    filterProductInGroup,
    groupProductsWithSkuId,
    filterProductsWithParentSkuId,
    findProductWithGroupIdAndSkuId
  };

  function filter(list, filterFn) {
    if (!list || typeof filterFn !== 'function') return [];
    return list.filter(filterFn);
  }

  function find(list, filterFn) {
    if (!list || typeof filterFn !== 'function') return [];
    return list.find(filterFn);
  }

  return _exports;
}();