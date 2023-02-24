window.SLM = window.SLM || {};

window.SLM['stage/collection-list/index.js'] = window.SLM['stage/collection-list/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Navigation } = window['swiper'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  Swiper.use([Navigation]);
  const selectors = {
    slide: '.collection-item-slide',
    prevBtn: 'prev-pagination-btn',
    nextBtn: 'next-pagination-btn'
  };

  class CollectionListSection {
    constructor(container) {
      this.container = null;
      this.settings = {};
      this.sectionId = '';
      if (!container.find(selectors.slide).length) return;
      this.container = container;
      this.sectionId = container.data('section-id');

      try {
        this.settings = JSON.parse($(`#collectionList-data-${this.sectionId}`).text());
      } catch (err) {}

      if (this.settings.slice_in_pc) {
        this.renderSwiper();
      }
    }

    renderSwiper() {
      const {
        pc_cols
      } = this.settings;
      this.swiper = new Swiper(`.colletionlist-swiper-${this.sectionId}`, {
        navigation: {
          nextEl: `#swiper-button-next-${this.sectionId}`,
          prevEl: `#swiper-button-prev-${this.sectionId}`
        },
        watchOverflow: true,
        resizeObserver: true,
        slidesPerGroup: 1,
        slideClass: 'collection-item-slide',
        breakpoints: {
          751: {
            slidesPerView: pc_cols
          }
        }
      });
    }

    onUnload() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }

  }

  registrySectionConstructor('collection-list', CollectionListSection);
  return _exports;
}();