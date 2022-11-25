window.SLM = window.SLM || {};

window.SLM['product/commons/js/product-collapse.js'] = window.SLM['product/commons/js/product-collapse.js'] || function () {
  const _exports = {};
  $('.base-collapse').on('click', '.base-collapse-item', function () {
    const $this = $(this);

    if (!$this.hasClass('active')) {
      const height = $this.find('.base-collapse-item__content').outerHeight();
      $this.addClass('active');
      $this.find('.base-collapse-item__wrap').css({
        height
      });
    } else {
      $this.removeClass('active');
      $this.find('.base-collapse-item__wrap').css({
        height: 0
      });
    }
  });
  return _exports;
}();