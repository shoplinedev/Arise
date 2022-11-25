window.SLM = window.SLM || {};

window.SLM['cart/script/domain/vo/productStock.js'] = window.SLM['cart/script/domain/vo/productStock.js'] || function () {
  const _exports = {};
  const stockType = window['SLM']['cart/script/constant/stockType.js'].default;

  function isProductOnSale(vo) {
    if (!vo) return false;
    if (vo.stock > 0) return true;
    return vo.stockType === stockType.OVERSOLD || vo.stockType === stockType.UNLIMITED;
  }

  function isStockNotLimited(vo) {
    if (!vo) return false;
    return vo.stockType === stockType.OVERSOLD || vo.stockType === stockType.UNLIMITED;
  }

  _exports.default = {
    isProductOnSale,
    isStockNotLimited
  };
  return _exports;
}();