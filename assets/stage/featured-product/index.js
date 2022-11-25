window.SLM = window.SLM || {};

window.SLM['stage/featured-product/index.js'] = window.SLM['stage/featured-product/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const initPreview = window['SLM']['product/detail/js/product-preview.js'].default;

  class FeatureProduct {
    constructor(container) {
      const id = container.data('section-id');
      const statePath = container.data('state-path');
      const productId = container.data('product-id');

      if (id && productId) {
        this.featureProduct = initPreview({
          id,
          statePath,
          filterShelves: true,
          offsetTop: 20,
          module: 'featuredProduct'
        });
      }
    }

    onUnload() {
      if (this.featureProduct) {
        this.featureProduct.destroy();
      }
    }

  }

  FeatureProduct.type = 'featured-product';
  registrySectionConstructor(FeatureProduct.type, FeatureProduct);
  return _exports;
}();