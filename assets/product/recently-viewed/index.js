window.SLM = window.SLM || {};

window.SLM['product/recently-viewed/index.js'] = window.SLM['product/recently-viewed/index.js'] || function () {
  const _exports = {};
  const { initProductRecentlyList } = window['SLM']['theme-shared/components/hbs/productRecently/fetchTemplate.js'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];

  class ProductPreviewSection {
    constructor() {
      const spu = SL_State.get('product.spu');
      initProductRecentlyList({
        selector: '#recently-viewed-products',
        excludeProductIds: [spu && spu.spuSeq],
        context: {
          hiddenMount: true
        },
        sectionName: 'recently-viewed',
        mode: 'SINGLE'
      });
    }

    onUnload() {}

  }

  registrySectionConstructor('recently-viewed', ProductPreviewSection);
  _exports.default = ProductPreviewSection;
  return _exports;
}();