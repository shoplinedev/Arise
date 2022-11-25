window.SLM = window.SLM || {};

window.SLM['cart/script/components/sku-filter-modal/tool.js'] = window.SLM['cart/script/components/sku-filter-modal/tool.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  const splitSku = (skuList, maxLen = 255) => {
    const splitSkuArr = (skuList || []).map(sku => {
      let skuSpec = '';

      if (typeof sku === 'string') {
        skuSpec = sku;
      } else if (sku instanceof Object) {
        skuSpec = sku.attributeValue;
      }

      return skuSpec.substring(0, maxLen) || '';
    });
    return nullishCoalescingOperator(splitSkuArr.join(' / '), '');
  };

  const prefixer = (className, prefixName = 'sl-sku-filter-modal') => {
    return `${prefixName}-${className}`;
  };

  _exports.splitSku = splitSku;
  _exports.prefixer = prefixer;
  return _exports;
}();