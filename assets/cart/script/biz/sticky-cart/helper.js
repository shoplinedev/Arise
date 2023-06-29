window.SLM = window.SLM || {};

window.SLM['cart/script/biz/sticky-cart/helper.js'] = window.SLM['cart/script/biz/sticky-cart/helper.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const utils = window['SLM']['commons/utils/index.js'].default;

  const setStickyContAnimate = ({
    viewportSelector,
    containerSelector
  }) => {
    const inInput = SL_State.get('cartInInputMode');

    if (!utils.helper.isUnderViewport($(viewportSelector).get(0)) && !inInput) {
      $(containerSelector).slideDown(300).attr('isOpen', true);
    } else {
      $(containerSelector).slideUp(200).removeAttr('isOpen');
    }
  };

  _exports.setStickyContAnimate = setStickyContAnimate;

  const setStickyContainerHeight = selector => {
    if (!$(selector).length || $(selector).prop('hadSet') === true) return;
    const height = $(selector).innerHeight();

    if (height) {
      $(selector).height(height).prop('hadSet', true);
    }
  };

  _exports.setStickyContainerHeight = setStickyContainerHeight;

  const setFixedContentStyle = (contentSelector, height) => {
    const contentEl = $(contentSelector);
    if (!contentEl.length || contentEl.prop('hadSet')) return;

    if (contentEl) {
      contentEl.css('paddingBottom', height).prop('hadSet', true);
    }
  };

  _exports.setFixedContentStyle = setFixedContentStyle;

  const listenElementMutation = (target, callback, options = {
    childList: true
  }) => {
    const fixedObserver = new MutationObserver(callback);
    fixedObserver.observe(target, options);
    return fixedObserver;
  };

  _exports.listenElementMutation = listenElementMutation;

  const listenElementIntersection = (target, callback) => {
    const intersectionObserver = new IntersectionObserver(function (entries) {
      callback(entries[0].intersectionRatio > 0);
    });
    intersectionObserver.observe(target);
    return intersectionObserver;
  };

  _exports.listenElementIntersection = listenElementIntersection;
  return _exports;
}();