window.SLM = window.SLM || {};

window.SLM['product/detail/productDetailDataBus.js'] = window.SLM['product/detail/productDetailDataBus.js'] || function () {
  const _exports = {};
  const spu = window.SL_State.get(`product.spu`);
  window.productDetailDataBus.set('spu', spu);
  return _exports;
}();