window.SLM = window.SLM || {};

window.SLM['activity/script/sort-selector.js'] = window.SLM['activity/script/sort-selector.js'] || function () {
  const _exports = {};
  const querystring = window['querystring']['default'];

  const initSortSelector = () => {
    $('.sales__activity-sort-selector-hook').on('change', function () {
      const query = querystring.parse(decodeURIComponent(window.location.search).replace(/^\?/, ''));
      const sortBy = $(this).val();

      if (sortBy === '1') {
        delete query.sort_by;
      } else {
        query.sort_by = sortBy;
      }

      const queryStr = querystring.stringify(query);
      window.location.href = `${window.location.origin}${window.location.pathname}${queryStr ? `?${queryStr}` : ''}`;
    });
  };

  _exports.default = initSortSelector;
  return _exports;
}();