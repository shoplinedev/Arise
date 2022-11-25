window.SLM = window.SLM || {};

window.SLM['product/collections/js/sort.js'] = window.SLM['product/collections/js/sort.js'] || function () {
  const _exports = {};
  const querystring = window['querystring']['default'];
  const { getUrlAllQuery } = window['SLM']['commons/utils/url.js'];

  _exports.default = () => {
    $('#collectionsAjaxInner').delegate('#collection-sort', 'change', function () {
      const newQueryObj = { ...getUrlAllQuery(),
        sort_type: $(this).val()
      };
      const newQueryStr = querystring.stringify(newQueryObj);
      setTimeout(() => {
        window.location.href = `${window.location.origin + window.location.pathname}?${newQueryStr}`;
      }, 0);
    });

    if ($('#product-list-list-header-filter').css('display') === 'none') {
      $('.product-list-filter-container').css('width', '100%');
    }
  };

  return _exports;
}();