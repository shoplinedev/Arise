window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/tool.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/tool.js'] || function () {
  const _exports = {};

  const splitSku = (skuList, maxLen = 255) => {
    const splitSkuArr = skuList && skuList.map(sku => {
      let skuSpec = '';

      if (typeof sku === 'string') {
        skuSpec = sku;
      } else if (sku instanceof Object) {
        skuSpec = sku.attributeValue;
      }

      return skuSpec.substring(0, maxLen) || '';
    });
    return splitSkuArr && splitSkuArr.join(' / ') || '';
  };

  const prefixer = (className, prefixName = 'sl-sku-filter-modal') => {
    return `${prefixName}-${className}`;
  };

  _exports.splitSku = splitSku;
  _exports.prefixer = prefixer;
  return _exports;
}();