window.SLM = window.SLM || {};

window.SLM['product/search/report.js'] = window.SLM['product/search/report.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const SearchItemReport = window['SLM']['theme-shared/report/product/search-item.js'].default;
  const ProductItemReport = window['SLM']['theme-shared/report/product/product-item.js'].default;
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const getReportMethods = window['SLM']['commons/report/index.js'].default;
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const base = new Base('product:search:report');
  const productItemSelector = '.__sl-custom-track-product-item-search';
  const hdReport = new SearchItemReport();
  const hdItemReport = new ProductItemReport();

  function startReport() {
    const {
      exitPageExposure,
      exposure,
      event
    } = getReportMethods('60006259');
    exitPageExposure();
    bindEventReport(event);
    exposure(productItemSelector, target => {
      const $el = $(target);
      const id = $el.data('id');
      const status = $el.data('status') ? 'soldout' : 'selling';
      const index = $el.data('index');
      const productPrice = $el.data('price');
      const productName = $el.data('name');
      event({
        event_name: 'product_view',
        product_id: id,
        product_name: productName,
        currency: getCurrencyCode(),
        product_price: convertPrice(productPrice),
        position: index + 1,
        status
      });
    });
    searchHdReport();
  }

  function searchHdReport() {
    let productList = SL_State.get('products.list');
    productList = productList !== undefined ? productList : null;
    let searchRequest = SL_State.get('request');
    searchRequest = searchRequest !== undefined ? searchRequest : null;
    let productSortation = SL_State.get('productSortation');
    productSortation = productSortation !== undefined ? productSortation : null;
    const productInfo = {
      search_string: searchRequest.uri.query.keyword,
      productList,
      productSortation
    };
    hdReport.searchResults({
      productInfo
    });
    productList.forEach((product, index) => {
      hdItemReport.itemView({
        baseParams: {
          module: 109,
          component: 101,
          action_type: 101
        },
        productInfo: { ...product,
          index
        },
        extInfo: {
          search_string: searchRequest.uri.query.keyword
        }
      });
    });
  }

  function bindEventReport(event) {
    let searchRequest = SL_State.get('request');
    searchRequest = searchRequest !== undefined ? searchRequest : null;
    base.$on('click', productItemSelector, ({
      currentTarget
    }) => {
      const id = $(currentTarget).data('id');
      event({
        product_id: id,
        event_name: 'click_product'
      });
      hdReport.itemSelect({
        productInfo: $(currentTarget).data(),
        extInfo: {
          search_string: searchRequest.uri.query.keyword
        }
      });
    });
  }

  startReport();
  return _exports;
}();