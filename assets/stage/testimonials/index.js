window.SLM = window.SLM || {};

window.SLM['stage/testimonials/index.js'] = window.SLM['stage/testimonials/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Navigation, Pagination } = window['swiper'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const helpers = window['SLM']['commons/utils/helper.js'].default;
  Swiper.use([Navigation, Pagination]);
  const selectors = {
    slide: '.testimonials__slide',
    slideWrapper: '.testimonials__swiper',
    slideSwiperWrapper: '.testimonials__swiper-box',
    slideContainer: '.testimonials__container',
    pagination: '.testimonials__pagination',
    navigationNext: '.testimonials__arrow--right',
    navigationPrev: '.testimonials__arrow--left'
  };
  const navigation_arrow_icon = `
<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9.3994L5.44971 5.4497L1.50001 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

  class Testimonials {
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
      const slidesPerGroup = this.getSlidesPerGroup();
      const swiperOptions = {
        slidesPerGroup,
        slidesPerView: slidesPerGroup,
        spaceBetween: window.Shopline.theme.settings.grid_horizontal_space || 20,
        grabCursor: false,
        watchOverflow: true,
        wrapperClass: selectors.slideWrapper.slice(1),
        slideClass: selectors.slide.slice(1),
        threshold: 5,
        loop: false,
        init: false,
        resizeObserver: true,
        keyboard: {
          enabled: true
        },
        pagination: {
          el: container.find(selectors.pagination)[0],
          clickable: true,
          type: 'custom',

          renderCustom(swiper, current, total) {
            return `
            <a href="javascript:void(0);" class="testimonials__arrow--left${current === 1 ? ' testimonials__arrow--disabled' : ''}">${navigation_arrow_icon}</a>
            <span class="testimonials__arrow--text body4">${current}/${total}</span>
            <a href="javascript:void(0);" class="testimonials__arrow--right${current === total ? ' testimonials__arrow--disabled' : ''}">${navigation_arrow_icon}</a>
          `;
          }

        }
      };
      this.swiper = new Swiper(el, swiperOptions);
      this.swiper.on('resize', swiper => {
        const currentSlidesPerGroup = this.getSlidesPerGroup();

        if (currentSlidesPerGroup !== swiper.params.slidesPerView) {
          swiper.params.slidesPerView = currentSlidesPerGroup;
          swiper.params.slidesPerGroup = currentSlidesPerGroup;
          swiper.update();
        }
      });
      this.swiper.init(container.find(selectors.slideSwiperWrapper)[0]);
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
      this.swiper.destroy();
    }

  }

  class TestimonialsSection {
    constructor(container) {
      if (!container.find(selectors.slide).length) return;
      this.instance = new Testimonials(container);
    }

    onUnload() {
      if (this.instance) {
        this.instance.destroy();
      }
    }

  }

  TestimonialsSection.type = 'testimonials';
  registrySectionConstructor(TestimonialsSection.type, TestimonialsSection);
  return _exports;
}();