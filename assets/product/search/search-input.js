window.SLM = window.SLM || {};

window.SLM['product/search/search-input.js'] = window.SLM['product/search/search-input.js'] || function () {
  const _exports = {};
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const createNamespace = window['SLM']['commons/utils/bem.js'].default;
  const bem = createNamespace('product', 'search');

  function getUrlWithSearch(keyword) {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);

    if (keyword) {
      url.searchParams.set('keyword', keyword);
    }

    return keyword ? `${url.origin}${url.pathname}?${url.searchParams.toString()}` : `${url.origin}${url.pathname}`;
  }

  function popupSearch() {
    const $searchWrapper = $('#JS-product-search-input');
    const base = new Base('product:search:input', $searchWrapper);
    const $searchInput = $searchWrapper.find(`.${bem('input')}`);
    base.$on('click', `.${bem('input')}`, e => {
      $(e.target).trigger('blur').val('');
      window.SL_EventBus.emit('stage-header-search', 'open', 'input');
    });
    base.$on('click', `.${bem('inputButton')}`, () => {
      const keyword = $searchInput.val();
      const url = getUrlWithSearch(keyword.trim());
      window.location.href = url;
    });
  }

  _exports.popupSearch = popupSearch;
  return _exports;
}();