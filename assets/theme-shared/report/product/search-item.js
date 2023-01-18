window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/search-item.js'] = window.SLM['theme-shared/report/product/search-item.js'] || function () {
  const _exports = {};
  const { validParams } = window['SLM']['theme-shared/report/product/utils/index.js'];
  const { BaseReport } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];

  class SearchItemReport extends BaseReport {
    searchResults(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo
      } = reportData;
      const {
        search_string,
        productList
      } = productInfo;
      const productsInfoParams = {
        search_string,
        items: productList.map(({
          reportSkuId,
          spuSeq,
          productMinPrice
        }, index) => ({
          sku_id: reportSkuId,
          spu_id: spuSeq,
          position: index + 1,
          currency: getCurrencyCode(),
          price: convertPrice(productMinPrice),
          quantity: 1
        }))
      };
      super.searchResults({
        baseParams,
        customParams: productsInfoParams
      });
    }

    itemSelect(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo,
        extInfo = {}
      } = reportData;
      const {
        id,
        skuId,
        status,
        price,
        index
      } = productInfo;
      const productInfoParams = {
        spu_id: id,
        sku_id: skuId,
        currency: getCurrencyCode(),
        price: convertPrice(price),
        position: index + 1,
        status: status ? 102 : 101
      };
      const params = { ...productInfoParams,
        ...extInfo
      };
      super.selectContent({
        baseParams,
        customParams: params
      });
    }

  }

  _exports.default = SearchItemReport;
  return _exports;
}();