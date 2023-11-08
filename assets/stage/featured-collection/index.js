window.SLM = window.SLM || {};
window.SLM['stage/featured-collection/index.js'] = window.SLM['stage/featured-collection/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Navigation } = window['swiper'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  Swiper.use([Navigation]);
  const selectors = {
    slide: '.featured-collection-item-slide'
  };
  class FeatureCollectionSection {
    constructor(container) {
      this.container = null;
      this.settings = {};
      this.sectionId = '';
      if (!container.find(selectors.slide).length) return;
      this.container = container;
      this.sectionId = container.data('section-id');
      this.gridHorizontalSpace = container.data('grid-horizontal-space');
      try {
        this.settings = JSON.parse($(`#featuredCollection-data-${this.sectionId}`).text());
      } catch (err) {}
      this.renderSwiper();
    }
    renderSwiper() {
      const {
        pc_cols,
        md_cols,
        slice_in_pc,
        slice_in_mobile
      } = this.settings;
      if (!isMobile() && !slice_in_pc || isMobile() && !slice_in_mobile) return;
      const that = this;
      this.swiper = new Swiper(`.featured-collection-swiper-${this.sectionId}`, {
        navigation: {
          nextEl: `#swiper-button-next-${this.sectionId}`,
          prevEl: `#swiper-button-prev-${this.sectionId}`
        },
        watchOverflow: true,
        resizeObserver: true,
        slidesPerView: +md_cols + 0.1,
        slidesPerGroup: 1,
        setWrapperSize: true,
        slideClass: 'product-slide',
        breakpoints: {
          751: {
            slidesPerView: pc_cols + 0.5
          }
        },
        on: {
          init(swiper) {
            that.container.on('mouseover mouseleave', '.product-slide', () => {
              that.swiper.updateSize();
            });
            if (swiper.slides.length > 0) {
              const slideHeight = swiper.slides[0].offsetHeight;
              const top = (slideHeight - 40) / 2;
              that.container.find('.stage-featured-collection__arrow').css({
                top: `${top}px`
              });
            }
          }
        }
      });
    }
    onUnload() {
      this.swiper && this.swiper.destroy();
    }
  }
  registrySectionConstructor('featured-collection', FeatureCollectionSection);
  return _exports;
}();