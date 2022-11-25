window.SLM = window.SLM || {};

window.SLM['product/detail/js/sku-trade.js'] = window.SLM['product/detail/js/sku-trade.js'] || function () {
  const _exports = {};
  const SkuTradeFlatten = window['SLM']['product/commons/js/sku-trade/sku-trade-flatten.js'].default;
  const SkuTradeSelect = window['SLM']['product/commons/js/sku-trade/sku-trade-select.js'].default;

  function initSku({
    id,
    sku,
    spu,
    mixins,
    onInit,
    onChange,
    dataPool,
    modalContainer
  }) {
    const dataDom = $(`#product-sku-trade-data_${id}`);
    const skuStyle = dataDom.data('skustyle');
    const selectSku = dataDom.data('selectsku');
    const SkuClass = skuStyle === 'flatten' ? SkuTradeFlatten : SkuTradeSelect;
    const trade = new SkuClass({
      domReady: true,
      root: `#product-detail-sku-trade_${id}`,
      sku,
      spu,
      dataPool,
      mixins,
      initialSkuSeq: selectSku,
      modalContainer,
      onInit: (tradeData, activeSku, root) => {
        onInit && onInit(tradeData, activeSku, root);
        window.SL_EventBus.emit('product:sku:init', [activeSku, id]);
      },
      onChange: activeSku => {
        window.SL_EventBus.emit('product:sku:change', [activeSku, id, dataPool]);
        onChange && onChange(activeSku);
      }
    });
    return trade;
  }

  _exports.default = initSku;
  return _exports;
}();