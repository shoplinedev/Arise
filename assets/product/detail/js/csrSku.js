window.SLM = window.SLM || {};

window.SLM['product/detail/js/csrSku.js'] = window.SLM['product/detail/js/csrSku.js'] || function () {
  const _exports = {};
  const http = window['SLM']['theme-shared/utils/request.js'].default;

  function getCsrProductInfo({
    id,
    productId
  }) {
    const isShoplineHost = window.location.host.includes('.myshopline');
    if (isShoplineHost) return;
    http.get(`/product/detail/highFrequencyData/query?productId=${productId}`).then(function (response) {
      const {
        sku
      } = response.data;
      window.Shopline.event.emit('global:rerenderSku', {
        sku,
        id
      });
    });
  }

  _exports.default = getCsrProductInfo;
  return _exports;
}();