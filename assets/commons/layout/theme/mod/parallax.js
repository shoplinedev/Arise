window.SLM = window.SLM || {};

window.SLM['commons/layout/theme/mod/parallax.js'] = window.SLM['commons/layout/theme/mod/parallax.js'] || function () {
  const _exports = {};
  let parallaxContainers = $('.parallax-container');
  let parallaxListener;

  function onScroll() {
    requestAnimationFrame(scrollHandler.bind(this));
  }

  function scrollHandler() {
    const viewPortHeight = $(window).height();
    parallaxContainers.each((index, el) => {
      const parallaxImage = $(el).find('.parallax');
      const hasClass = $(el).hasClass('large-image-with-text-box--loaded');
      const isLargeImageText = $(el).hasClass('large-image-with-text-box');

      if (parallaxImage.length === 0) {
        if (!isLargeImageText) return;
        if (!hasClass) $(el).addClass('large-image-with-text-box--loaded');
        return;
      }

      const {
        top,
        height
      } = el.getBoundingClientRect();
      if (top > viewPortHeight || top <= -height) return;
      const speed = 2;
      const movableDistance = viewPortHeight + height;
      const currentDistance = viewPortHeight - top;
      const percent = (currentDistance / movableDistance * speed * 38).toFixed(2);
      const num = 38 - Number(percent);
      $(parallaxImage).css('transform', `translate3d(0 , ${-num}% , 0)`);
      if (!isLargeImageText) return;

      if (!hasClass) {
        $(el).addClass('large-image-with-text-box--loaded');
      }
    });
  }

  function init() {
    parallaxContainers = $('.parallax-container');

    if (!parallaxListener) {
      parallaxListener = $(window).on('scroll', onScroll);
    }

    scrollHandler();
  }

  window.SL_EventBus.on('parallax', () => {
    init();
  });
  window.document.addEventListener('shopline:section:load', () => {
    init();
  });
  window.document.addEventListener('shopline:section:reorder', () => {
    init();
  });
  return _exports;
}();