window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-swiper-mobile-thumbnail.js'] = window.SLM['product/detail/js/product-swiper-mobile-thumbnail.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Pagination, Navigation } = window['swiper'];
  Swiper.use([Navigation, Pagination]);

  class ProductImagesMobileThumbnail {
    constructor(config) {
      this.swiper = this.init(config);
    }

    init(config) {
      const {
        el,
        ...restConfig
      } = config || {};
      const thumbnailSwiper = new Swiper(el, {
        spaceBetween: 10,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        slidesPerGroup: 3,
        ...restConfig
      });
      return thumbnailSwiper;
    }

  }

  _exports.default = ProductImagesMobileThumbnail;
  return _exports;
}();