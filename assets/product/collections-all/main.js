window.SLM = window.SLM || {};

window.SLM['product/collections-all/main.js'] = window.SLM['product/collections-all/main.js'] || function () {
  const _exports = {};
  const { initCollectionItemReport } = window['SLM']['theme-shared/report/product/collection-item.js'];
  initCollectionItemReport();
  return _exports;
}();