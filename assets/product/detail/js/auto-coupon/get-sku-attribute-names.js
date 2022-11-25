window.SLM = window.SLM || {};

window.SLM['product/detail/js/auto-coupon/get-sku-attribute-names.js'] = window.SLM['product/detail/js/auto-coupon/get-sku-attribute-names.js'] || function () {
  const _exports = {};
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  _exports.default = (skuAttributeIds, skuAttributeMap) => {
    return skuAttributeIds && skuAttributeIds.length && skuAttributeMap ? skuAttributeIds.map(({
      id,
      valueId
    }) => {
      return {
        skuAttribute: skuAttributeMap[id],
        valueId
      };
    }).filter(({
      skuAttribute
    }) => !skuAttribute.hidden).map(({
      skuAttribute,
      valueId
    }) => {
      return get(skuAttribute, `skuAttributeValueMap[${valueId}].defaultValue`);
    }) : [];
  };

  return _exports;
}();