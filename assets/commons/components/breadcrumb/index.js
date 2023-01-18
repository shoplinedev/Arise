window.SLM = window.SLM || {};

window.SLM['commons/components/breadcrumb/index.js'] = window.SLM['commons/components/breadcrumb/index.js'] || function () {
  const _exports = {};
  const PLPReg = /\/collections\/[^/]+$/;
  const PDPReg = /(\/collections\/[^/]+)?\/products\/[^/]/;

  if (PLPReg.test(window.location.pathname)) {
    const name = window.SL_State.get('sortation.sortation.title');

    if (name) {
      sessionStorage.setItem('breadcrumb', JSON.stringify({
        name,
        link: window.location.pathname + window.location.search
      }));
    }
  } else if (PDPReg.test(window.location.pathname) && window.SL_State.get('templateAlias') !== 'ProductsSearch') {
    makeProductBreadCrumb();
  } else {
    sessionStorage.removeItem('breadcrumb');
  }

  function makeProductBreadCrumb() {
    const breadCrumbTarget = $('body .product-crumbs');
    const breadCrumbCache = JSON.parse(window.sessionStorage.getItem('breadcrumb') ? window.sessionStorage.getItem('breadcrumb') : '""');

    if (breadCrumbTarget.find('.product-crumbs-cateName').length) {
      return true;
    }

    if (breadCrumbCache) {
      breadCrumbTarget.find('.product-crumbs-productName').before(`
      <a class="body4" href="${breadCrumbCache.link}">${breadCrumbCache.name}</a> / 
    `);
    }
  }

  return _exports;
}();