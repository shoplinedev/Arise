window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/thirdPartyShare/js/index.js'] = window.SLM['theme-shared/components/hbs/thirdPartyShare/js/index.js'] || function () {
  const _exports = {};
  const ACTIVE_CLASS = 'third-party-more-active';
  $(document).on('click', function (e) {
    const $more = $(`.third-party-share .third-party-more`);
    const $target = $(e.target).closest('.third-party-more');

    if ($target.length > 0) {
      $target.toggleClass(ACTIVE_CLASS);
    } else if ($more.hasClass(ACTIVE_CLASS)) {
      $more.removeClass(ACTIVE_CLASS);
    }
  });
  return _exports;
}();