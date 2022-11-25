window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/cart.js'] = window.SLM['cart/script/domain/model/cart.js'] || function () {
  const _exports = {};
  const CartQuantityConst = window['SLM']['cart/script/constant/cartQuantity.js'].default;

  function getActiveCartItemList(model) {
    const activeItems = model.activeItems || [];
    return activeItems.reduce((list, item) => {
      return list.concat(item.itemList || []);
    }, []);
  }

  function getInactiveCartItemList(model) {
    return model.inactiveItems || [];
  }

  function getCartItemList(model) {
    return [...getActiveCartItemList(model), ...getInactiveCartItemList(model)];
  }

  function getActiveCartItemListQuantity(model) {
    return getActiveCartItemList(model).length;
  }

  function getInactiveCartItemListQuantity(model) {
    return getInactiveCartItemList(model).length;
  }

  function getCartItemListQuantity(model) {
    return getActiveCartItemListQuantity(model) + getInactiveCartItemListQuantity(model);
  }

  function isCartItemListQuantityOverflow(model) {
    return getCartItemListQuantity(model) > CartQuantityConst.MAX_CART_ITEM_LIST_QUANTITY;
  }

  function isActiveCartItemListQuantityOverflow(model) {
    return getActiveCartItemListQuantity(model) > CartQuantityConst.MAX_CART_ITEM_LIST_QUANTITY;
  }

  function getSkuQuantity(model) {
    if (!model) return 0;
    return model.count || 0;
  }

  function getPromotionInfo(model) {
    return model && model.promotionCodes ? model.promotionCodes : undefined;
  }

  function getVoucherInfo(model) {
    return model && model.shoppingMoneyDTO ? model.shoppingMoneyDTO : undefined;
  }

  _exports.default = {
    getActiveCartItemList,
    getInactiveCartItemList,
    getCartItemList,
    getActiveCartItemListQuantity,
    getInactiveCartItemListQuantity,
    getCartItemListQuantity,
    isCartItemListQuantityOverflow,
    isActiveCartItemListQuantityOverflow,
    getSkuQuantity,
    getPromotionInfo,
    getVoucherInfo
  };
  return _exports;
}();