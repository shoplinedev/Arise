window.SLM = window.SLM || {};

window.SLM['commons/components/select/index.js'] = window.SLM['commons/components/select/index.js'] || function () {
  const _exports = {};
  $(document).ready(function () {
    $('.common__original-select select').on('change', function (e) {
      const label = $(this).find(`[data-value="${e.target.value}"]`).html();
      $(this).parent().find('.common__original-select-currentLabel').html(label);
    });
  });
  return _exports;
}();