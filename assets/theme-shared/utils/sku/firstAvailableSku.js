window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/sku/firstAvailableSku.js'] = window.SLM['theme-shared/utils/sku/firstAvailableSku.js'] || function () {
  const _exports = {};

  function firstAvailableSku(spu, skuList) {
    if (spu && spu.soldOut) {
      return skuList && skuList[0] || null;
    }

    return skuList.find(sku => sku.available) || skuList && skuList[0] || null;
  }

  _exports.default = firstAvailableSku;
  return _exports;
}();