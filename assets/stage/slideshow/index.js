window.SLM = window.SLM || {};

window.SLM['stage/slideshow/index.js'] = window.SLM['stage/slideshow/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { Navigation, Pagination, Autoplay, Keyboard, EffectFade } = window['swiper'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const EffectFlickityFade = window['SLM']['stage/slideshow/swiper/effect-flickity-fade.js'].default;
  Swiper.use([EffectFlickityFade, EffectFade, Navigation, Pagination, Autoplay, Keyboard]);
  const SLIDE_ACTIVE_CLASS = 'is-selected';
  const selectors = {
    flickityViewport: '.flickity-viewport',
    image: '.hero__image',
    imageWrapper: '.hero__image-wrapper',
    imageMobile: '.hero__image--mobile',
    slide: '.slideshow__slide'
  };
  const classes = {
    parallaxContainer: 'parallax-container',
    parallax: 'parallax',
    isNatural: 'is-natural',
    isNaturalMobile: 'is-natural-mobile'
  };

  class Slideshow {
    constructor(container) {
      this.container = container;
      this.sectionId = container.data('section-id');
      this.settings = {};

      try {
        this.settings = JSON.parse($(`#Slideshow-data-${this.sectionId}`).text());
      } catch (err) {}

      this.init();
    }

    init() {
      const {
        container,
        sectionId,
        settings
      } = this;
      const slides = container.find(selectors.slide);
      const swiperOptions = {
        grabCursor: true,
        enabled: slides.length > 1,
        speed: 0,
        effect: 'flickity-fade',
        slideActiveClass: SLIDE_ACTIVE_CLASS,
        wrapperClass: 'flickity-slider',
        loop: true,
        createElements: true,
        virtualTranslate: true,
        delay: 2000,
        keyboard: {
          enabled: true
        },
        on: {
          fadeTransitionend() {},

          slideChangeTransitionStart() {
            this.$el.removeClass('hero--static');
          },

          init() {},

          afterInit() {
            window.SL_EventBus.emit('parallax');
          },

          beforeTransitionStart(swiper) {
            swiper.$el[0].classList.add('hero-transition');
          },

          transitionEnd(swiper) {
            swiper.$el[0].classList.remove('hero-transition');
          }

        }
      };

      if (settings.transition_type === 'slide') {
        Object.assign(swiperOptions, {
          speed: 1000,
          effect: 'slide',
          createElements: false,
          virtualTranslate: false,
          delay: 0
        });
      }

      if (settings.transition_type === 'scale') {
        Object.assign(swiperOptions, {
          effect: 'fade',
          speed: 800
        });
      }

      if (settings.autoplay) {
        Object.assign(swiperOptions, {
          autoplay: {
            disableOnInteraction: false,
            delay: settings.autoplay_speed * 1000
          }
        });
      }

      switch (settings.style) {
        case 'arrows':
          Object.assign(swiperOptions, {
            navigation: {
              nextEl: '.flickity-button--next',
              prevEl: '.flickity-button--prev'
            }
          });
          break;

        case 'dots':
        case 'bars':
          Object.assign(swiperOptions, {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          });
          break;

        default:
          break;
      }

      this.swiper = new Swiper(`#Slideshow-${sectionId}`, swiperOptions);
      const $flickityViewport = container.find(selectors.flickityViewport);

      if ($flickityViewport.hasClass(classes.isNatural)) {
        const $image = container.find(`[data-swiper-slide-index="0"]`).find(selectors.image).eq(0);
        if ($image.data('aspectratio')) return;
        const src = $image.data('aspectratio-url');
        const image = new Image();
        image.src = src;

        image.onload = e => {
          const {
            target
          } = e;
          const aspectRatio = target.height / target.width * 100;
          $flickityViewport.prepend($('<style />').text(`
          @media only screen and (min-width: 769px) {
            .natural--${sectionId} {
              padding-top: ${aspectRatio}% !important;
            }
          }
        `));
        };
      }

      if ($flickityViewport.hasClass(classes.isNaturalMobile)) {
        const $mobileImage = container.find(selectors.imageMobile);
        let src = $mobileImage.data('aspectratio-url');
        if ($mobileImage.data('aspectratio')) return;

        if (!src) {
          const $pcImage = container.find(`[data-swiper-slide-index="0"]`).find(selectors.image).eq(0);
          if ($pcImage.data('aspectratio')) return;
          src = $pcImage.data('aspectratio-url');
        }

        if (!src) return;
        const image = new Image();
        image.src = src;

        image.onload = e => {
          const {
            target
          } = e;
          const aspectRatio = target.height / target.width * 100;
          $flickityViewport.prepend($('<style />').text(`
          @media only screen and (max-width: 768px) {
            .natural-mobile--${sectionId} {
              padding-top: ${aspectRatio}% !important;
            }
          }
        `));
        };
      }
    }

    destroy() {
      console.info('swiper:destroy');
      this.swiper.destroy();
    }

  }

  class SlideshowSection {
    constructor(container) {
      if (!container.find(selectors.slide).length) return;
      this.slideshow = new Slideshow(container);
    }

    onUnload() {
      if (this.slideshow) {
        this.slideshow.destroy();
      }
    }

    onBlockDeselect() {
      if (this.slideshow.swiper.params.autoplay.enabled) {
        this.slideshow.swiper.autoplay.start();
      }
    }

    onBlockSelect(e) {
      const {
        index = null
      } = e.detail;

      if (index !== null) {
        this.slideshow.swiper.slideTo(index + 1);
      }

      this.slideshow.swiper.autoplay.stop();
    }

  }

  SlideshowSection.type = 'slideshow';
  registrySectionConstructor('slideshow', SlideshowSection);
  return _exports;
}();