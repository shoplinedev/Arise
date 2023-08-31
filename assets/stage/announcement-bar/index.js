window.SLM = window.SLM || {};

window.SLM['stage/announcement-bar/index.js'] = window.SLM['stage/announcement-bar/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Swiper = window['swiper']['default'];
  const { Autoplay } = window['swiper'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  Swiper.use(Autoplay);

  class AnnouncementBar {
    constructor(container) {
      this.container = container;
      this.selectors = {
        announcementSlideItem: '.announcement-swiper-slide',
        announcementSwiperWrapper: '.announcement-bar__swiper'
      };
      this.classes = {
        activateSwiperClass: 'swiper-wrapper'
      };
      this.activateSwiper();
    }

    onUnload() {
      this.swiperInstance && this.swiperInstance.destroy();
    }

    activateSwiper() {
      const COMPACT = 2;
      const HORIZONTAL = 3;
      const $wrapper = this.container.find(this.selectors.announcementSwiperWrapper);
      let displayMode = this.container.data('display-mode');

      if (displayMode === COMPACT && isMobile()) {
        $wrapper.addClass(this.classes.activateSwiperClass);
        displayMode = 3;
      }

      if (!$wrapper.hasClass(this.classes.activateSwiperClass)) {
        return;
      }

      const direction = displayMode === HORIZONTAL ? 'horizontal' : 'vertical';
      const slides = this.container.find(this.selectors.announcementSlideItem);
      this.initSwiperHeight();
      this.swiperInstance = new Swiper(this.container[0], {
        init: true,
        loop: slides.length > 1,
        direction,
        autoplay: {
          delay: 5000
        },
        slideClass: 'announcement-swiper-slide',
        grabCursor: true
      });
    }

    onBlockDeselect() {
      this.swiperInstance && this.swiperInstance.autoplay.start();
    }

    onBlockSelect(e) {
      const {
        index = null
      } = e.detail;

      if (index !== null) {
        this.swiperInstance && this.swiperInstance.slideTo(index + 1);
      }

      this.swiperInstance && this.swiperInstance.autoplay.stop();
    }

    initSwiperHeight() {
      const height = $(this.container).height().toFixed(0);
      $(this.selectors.announcementSwiperWrapper).css('height', height);
    }

  }

  AnnouncementBar.type = 'announcement-bar';
  registrySectionConstructor(AnnouncementBar.type, AnnouncementBar);
  return _exports;
}();