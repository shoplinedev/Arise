window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/cartChangeItem.js'] = window.SLM['cart/script/domain/model/cartChangeItem.js'] || function () {
  const _exports = {};
  const verifyType = window['SLM']['cart/script/constant/verifyType.js'].default;

  function getSkuId(model) {
    if (!model) return '';
    return model.skuId || '';
  }

  function getStock(model) {
    if (!model) return 0;
    return model.stock || 0;
  }

  function getVerifyType(model) {
    if (!model) return verifyType.NIL;

    switch (model.errorType) {
      case 1:
        return verifyType.SOLD_OUT;

      case 2:
        return verifyType.UNDER_STOCK;

      case 3:
        return verifyType.OFF_SHELVED;

      case 4:
        return verifyType.DELETED;

      default:
        return verifyType.NIL;
    }
  }

  _exports.default = {
    getSkuId,
    getStock,
    getVerifyType
  };
  return _exports;
}();