window.SLM = window.SLM || {};

window.SLM['commons/product/openQuickViewATC.js'] = window.SLM['commons/product/openQuickViewATC.js'] || function () {
  const _exports = {};
  const quickAddModal = window['SLM']['product/commons/js/quick-add-modal.js'].default;

  function addListenerQuickViewATC() {
    if (window.Shopline && window.Shopline.event) {
      window.Shopline.event.on('Product::ShowQuickView::AddToCart', data => {
        const {
          productId,
          handle,
          buttonTarget = {},
          buttonLoadingCls
        } = data || {};

        if (productId && handle) {
          quickAddModal({
            spuSeq: productId,
            uniqueKey: handle,
            $button: $(buttonTarget),
            buttonLoadingCls
          });
        } else {
          console.error(`addListenerQuickViewATC参数缺失 productId: ${productId}, handle: ${handle}`);
        }
      });
    }
  }

  addListenerQuickViewATC();
  return _exports;
}();