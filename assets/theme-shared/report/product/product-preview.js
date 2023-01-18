window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/product-preview.js'] = window.SLM['theme-shared/report/product/product-preview.js'] || function () {
  const _exports = {};
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { BaseReport, findSectionId } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { sectionTypeEnum } = window['SLM']['theme-shared/report/stage/const.js'];

  class ProductPreviewReport extends BaseReport {
    constructor() {
      super();
      this.map = {
        pdp: {
          pdpType: 101,
          module: -999
        },
        featuredProduct: {
          pdpType: 102,
          module: 900
        },
        quickViewModal: {
          pdpType: 103,
          module: -999
        }
      };
    }

    viewContent(params) {
      const {
        selector,
        content_spu_id,
        content_sku_id,
        title,
        currency,
        price
      } = params;

      if (!selector) {
        console.warn('viewContent 缺少selector参数', params);
        return;
      }

      const _params = {
        content_ids: content_spu_id,
        sku_id: content_sku_id,
        content_name: title,
        currency: getCurrencyCode() || currency,
        value: price,
        pdp_type: this.map[params.module] && this.map[params.module].pdpType,
        module: this.map[params.module] && this.map[params.module].module,
        component: params.module === 'featuredProduct' ? 900 : -999,
        popup_page_base: this.page,
        page: params.module !== 'quickViewModal' ? this.page : 107
      };

      if (params.module === 'featuredProduct') {
        _params.module_type = sectionTypeEnum['featured-product'];
        _params.component_ID = findSectionId('[data-ssr-plugin-product-detail-container]');
      }

      super.viewContent({
        selector,
        reportOnce: params.module !== 'quickViewModal',
        customParams: _params
      });
    }

  }

  _exports.ProductPreviewReport = ProductPreviewReport;

  function hdProductViewContent(params) {
    const report = new ProductPreviewReport();
    report.viewContent(params);
  }

  _exports.default = hdProductViewContent;
  return _exports;
}();