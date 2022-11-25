window.SLM = window.SLM || {};

window.SLM['cart/script/domain/vo/productVerifyType.js'] = window.SLM['cart/script/domain/vo/productVerifyType.js'] || function () {
  const _exports = {};
  const { verifyType } = window['SLM']['theme-shared/biz-com/trade/optimize-modal/constant.js'];

  function noError(vo) {
    return !vo || !vo.verifyType || vo.verifyType === verifyType.NIL;
  }

  function hasError(vo) {
    return !noError(vo);
  }

  function isUnderStock(vo) {
    return vo && vo.verifyType === verifyType.UNDER_STOCK;
  }

  _exports.default = {
    noError,
    hasError,
    isUnderStock
  };
  return _exports;
}();