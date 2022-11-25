window.SLM = window.SLM || {};

window.SLM['cart/script/report/select-content.js'] = window.SLM['cart/script/report/select-content.js'] || function () {
  const _exports = {};
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;

  function reportGASelectContent({
    skuId,
    name,
    price,
    skuAttrs
  }) {
    window.SL_EventBus.emit('global:thirdPartReport', {
      GA: [['event', 'select_content', {
        content_type: 'product',
        items: [{
          id: skuId,
          name,
          price: currencyUtil.formatCurrency(price || 0).toString(),
          variant: skuAttrs
        }]
      }]]
    });
  }

  _exports.default = {
    reportGASelectContent
  };
  return _exports;
}();