window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/thirdPartyShare/js/index.js'] = window.SLM['theme-shared/components/hbs/thirdPartyShare/js/index.js'] || function () {
  const _exports = {};
  const ACTIVE_CLASS = 'third-party-more-active';
  $(document).on('click', function (e) {
    const $more = $(`.third-party-share .third-party-more`);
    const $target = $(e.target).closest('.third-party-more');

    if ($target.length > 0) {
      if (!$target.hasClass(ACTIVE_CLASS)) {
        const $list = $target.find('.third-party-more-list');

        if ($list.length) {
          const scrollParentNode = findParentWithScroll($target[0]);
          const btnRect = $target[0].getBoundingClientRect();
          $list[0].dataset.top = String(btnRect.bottom + $list[0].scrollHeight + 6 >= (scrollParentNode ? scrollParentNode.getBoundingClientRect().bottom : window.innerHeight));
        }
      }

      $target.toggleClass(ACTIVE_CLASS);
    } else if ($more.hasClass(ACTIVE_CLASS)) {
      $more.removeClass(ACTIVE_CLASS);
    }
  });

  function findParentWithScroll(element) {
    let {
      parentNode
    } = element;

    while (parentNode !== document.body) {
      const computedStyle = getComputedStyle(parentNode);
      const {
        overflow
      } = computedStyle;

      if (overflow === 'scroll' || overflow === 'auto') {
        return parentNode;
      }

      parentNode = parentNode.parentNode;
    }

    return null;
  }

  return _exports;
}();