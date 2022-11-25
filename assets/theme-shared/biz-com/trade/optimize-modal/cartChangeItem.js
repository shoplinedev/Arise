window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/cartChangeItem.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/cartChangeItem.js'] || function () {
  const _exports = {};
  const { verifyType, ErrorTypeEnum } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];

  function getSkuId(model) {
    if (!model) return '';
    return model.skuId || '';
  }

  function getGroupId(model) {
    if (!model) return '';
    return model.groupId || '';
  }

  function getStock(model) {
    if (!model) return 0;
    return model.stock || 0;
  }

  function getVerifyType(model) {
    if (!model) return verifyType.NIL;

    switch (model.errorInfo.errorType) {
      case ErrorTypeEnum.SOLD_OUT:
        return verifyType.SOLD_OUT;

      case ErrorTypeEnum.STOCK_OVER:
        return verifyType.UNDER_STOCK;

      case ErrorTypeEnum.SHELF_OFF:
      case ErrorTypeEnum.GIFT_INVALID:
        return verifyType.OFF_SHELVED;

      case ErrorTypeEnum.DELETE:
        return verifyType.DELETED;

      case ErrorTypeEnum.LIMITED_ACTIVE_SKU_OVER:
        return verifyType.PRODUCT_LIMIT;

      case ErrorTypeEnum.LIMITED_ACTIVE_OVER:
        return verifyType.USER_LIMIT;

      case ErrorTypeEnum.LIMITED_ACTIVE_STOCK_OVER:
        return verifyType.PRODUCT_UNDER_STOCK;

      default:
        return verifyType.NIL;
    }
  }

  _exports.default = {
    getSkuId,
    getStock,
    getVerifyType,
    getGroupId
  };
  return _exports;
}();