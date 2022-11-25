window.SLM = window.SLM || {};

window.SLM['cart/script/domain/vo/productPriceType.js'] = window.SLM['cart/script/domain/vo/productPriceType.js'] || function () {
  const _exports = {};
  const priceType = window['SLM']['cart/script/constant/priceType.js'].default;

  function isNthDiscount(vo) {
    if (!vo) return false;
    return vo.priceType === priceType.NTH_DISCOUNT;
  }

  _exports.default = {
    isNthDiscount
  };
  return _exports;
}();