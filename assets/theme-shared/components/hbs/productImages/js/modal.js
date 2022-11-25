window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/productImages/js/modal.js'] = window.SLM['theme-shared/components/hbs/productImages/js/modal.js'] || function () {
  const _exports = {};
  const PhotoSwipe = window['photoswipe']['/dist/photoswipe.min'].default;
  const photoSwipeUiDefault = window['photoswipe']['/dist/photoswipe-ui-default.min'].default;
  const photoSwipeHtmlString = window['SLM']['theme-shared/components/hbs/productImages/js/product-photoSwipeHtml.js'].default;

  class ImagesModal {
    static openModal(items, index, cacheNaturalSize) {
      let pswpElement = document.querySelectorAll('.pswp')[0];

      if (!pswpElement) {
        $('body').append(photoSwipeHtmlString);
        pswpElement = document.querySelectorAll('.pswp')[0];
      }

      this.openPhotoSwipe(pswpElement, items, index, cacheNaturalSize);
    }

    static openPhotoSwipe(pswpElement, items, index = 0) {
      if (items && items.length > 1) {
        $('.pswp__button--arrow--left, .pswp__button--arrow--right').show();
      } else {
        $('.pswp__button--arrow--left, .pswp__button--arrow--right').hide();
      }

      $('.pswp__button--arrow--left, .pswp__button--arrow--right, .pswp__button--close').on('click', function (e) {
        e.stopPropagation();
      });
      const photoSwipeOptions = {
        allowPanToNext: false,
        captionEl: false,
        closeOnScroll: false,
        counterEl: false,
        history: false,
        index,
        pinchToClose: false,
        preloaderEl: false,
        shareEl: false,
        tapToToggleControls: false,
        barsSize: {
          top: 20,
          bottom: 20
        }
      };
      const gallery = new PhotoSwipe(pswpElement, photoSwipeUiDefault, items, photoSwipeOptions);
      gallery.listen('gettingData', function (_index, item) {
        const img = new Image();

        if (window.__PRELOAD_STATE__.imgNoReferrerSwitch) {
          img.setAttribute('referrerpolicy', 'same-origin');
        }

        img.src = item.src;

        img.onload = () => {
          item.w = img.naturalWidth;
          item.h = img.naturalHeight;
          gallery.updateSize(true);
        };
      });
      gallery.listen('');
      gallery.init();
    }

  }

  _exports.default = ImagesModal;
  return _exports;
}();