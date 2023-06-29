window.SLM = window.SLM || {};

window.SLM['stage/text-columns-with-images/index.js'] = window.SLM['stage/text-columns-with-images/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Navigation, Pagination } = window['swiper'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const helpers = window['SLM']['commons/utils/helper.js'].default;
  Swiper.use([Navigation, Pagination]);
  const selectors = {
    slide: '.swiper-slide',
    slideWrapper: '.swiper-wrapper',
    slideContainer: '.swiper-container',
    pagination: '.pagination',
    navigationNext: '.text-columns-arrow--right',
    navigationPrev: '.text-columns-arrow--left'
  };
  const navigation_arrow_icon = `
<svg class="icon directional" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9.3994L5.44971 5.4497L1.50001 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

  class Slider {
    constructor(container) {
      this.container = container;
      this.sectionId = container.data('section-id');
      this.init();
    }

    init() {
      const {
        container
      } = this;
      const $el = container.find(selectors.slideContainer);
      const el = $el[0];
      const spaceBetween = $el && $el.data('no-spacing') ? 20 : 10;
      const slidesPerView = $el && $el.data('no-spacing') ? 1.2 : 1.15;
      const swiperOptions = {
        threshold: 5,
        init: true,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        spaceBetween,
        slidesPerView,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: container.find(selectors.pagination)[0],
          clickable: true,
          type: 'custom',

          renderCustom(swiper, current, total) {
            return `
            <a class="text-columns-arrow--left${current === 1 ? ' text-columns-arrow--disabled' : ''}">${navigation_arrow_icon}</a>
            <span class="text-columns-arrow--text body4">${current}/${total}</span>
            <a class="text-columns-arrow--right${current === total ? ' text-columns-arrow--disabled' : ''}">${navigation_arrow_icon}</a>
          `;
          }

        },
        breakpoints: {
          751: {
            slidesPerView,
            slidesPerGroup: slidesPerView
          }
        }
      };
      this.swiper = new Swiper(el, swiperOptions);
      $el.on('click', selectors.navigationPrev, () => {
        this.swiper.slidePrev();
      });
      $el.on('click', selectors.navigationNext, () => {
        this.swiper.slideNext();
      });
    }

    getSlidesPerGroup() {
      return helpers.getPlatform() === 'mobile' ? 1 : 3;
    }

    destroy() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }

  }

  class TextColumnsWithImages {
    constructor(container) {
      if (!container.find(selectors.slide).length) return;
      this.instance = new Slider(container);
    }

    onUnload() {
      if (this.instance) {
        this.instance.destroy();
      }
    }

  }

  TextColumnsWithImages.type = 'text-columns-with-images';
  registrySectionConstructor(TextColumnsWithImages.type, TextColumnsWithImages);
  return _exports;
}();