window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/promotionCode.js'] = window.SLM['cart/script/domain/model/promotionCode.js'] || function () {
  const _exports = {};

  function getCode(model) {
    if (!model) return undefined;
    return model.map(codeInfo => codeInfo.promotionCode) || '';
  }

  _exports.default = {
    getCode
  };
  return _exports;
}();