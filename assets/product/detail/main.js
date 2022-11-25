window.SLM = window.SLM || {};

window.SLM['product/detail/main.js'] = window.SLM['product/detail/main.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const initPreview = window['SLM']['product/detail/js/product-preview.js'].default;
  const getCsrProductInfo = window['SLM']['product/detail/js/csrSku.js'].default;
  const pvTrackData = SL_State.get('productTrackData.pdp');

  if (pvTrackData) {
    window.HdSdk && window.HdSdk.shopTracker.report('60006253', pvTrackData.hd);
    window.SL_EventBus && window.SL_EventBus.emit('global:thirdPartReport', pvTrackData.thirdPart);
  }

  class ProductPreviewSection {
    constructor(container) {
      this.instance = null;
      const moduleType = container.data('modal-name');

      if (moduleType === 'featuredProduct') {
        const id = container.data('section-id');
        const statePath = container.data('state-path');
        this.instance = initPreview({
          id,
          statePath,
          filterShelves: true,
          offsetTop: 20,
          module: 'featuredProduct'
        });
      } else {
        this.instance = initPreview({
          id: 'productDetail',
          statePath: 'product',
          offsetTop: 20,
          module: 'pdp'
        });
        getCsrProductInfo({
          id: 'productDetail',
          productId: window.SL_State.get('product.spu').spuSeq
        });
      }
    }

    onUnload() {
      if (this.instance) {
        this.instance && this.instance.destroy && this.instance.destroy();
      }
    }

  }

  registrySectionConstructor('product-preview', ProductPreviewSection);
  _exports.default = ProductPreviewSection;
  return _exports;
}();