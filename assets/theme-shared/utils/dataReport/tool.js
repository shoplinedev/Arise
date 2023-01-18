window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/tool.js'] = window.SLM['theme-shared/utils/dataReport/tool.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const gmc_sku_feed_id = SL_State.get('variants.gmc_sku_feed_id');

  function getGmcArg(isMetafields) {
    const Trade_ReportArgsMap = window && window.Trade_ReportArgsMap;

    if (isMetafields && Trade_ReportArgsMap) {
      if (typeof Trade_ReportArgsMap === 'string') {
        return JSON.parse(window.Trade_ReportArgsMap);
      }

      return window.Trade_ReportArgsMap;
    }

    return gmc_sku_feed_id || {};
  }

  function realSku({
    skuId,
    isMetafields
  }) {
    const skuFeed = getGmcArg(isMetafields);
    return skuFeed[skuId] || skuId;
  }

  function getCurrencyCode() {
    return SL_State.get('currencyCode');
  }

  _exports.getCurrencyCode = getCurrencyCode;
  _exports.default = {
    getGmcArg,
    realSku,
    getCurrencyCode
  };
  return _exports;
}();