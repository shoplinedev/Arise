window.SLM = window.SLM || {};

window.SLM['stage/slideshow/swiper/effect-flickity-fade.js'] = window.SLM['stage/slideshow/swiper/effect-flickity-fade.js'] || function () {
  const _exports = {};
  const { extend, bindModuleMethods } = window['swiper']['/cjs/utils/utils'];
  const classes = {
    animateOut: 'is-animate-out'
  };
  const Fade = {
    setTranslate() {},

    setTransition() {}

  };
  _exports.default = {
    name: 'effect-flickity-fade',
    params: {
      flickityFadeEffect: {
        crossFade: false
      }
    },

    create() {
      const swiper = this;
      if (swiper.params.effect !== 'flickity-fade') return;
      bindModuleMethods(swiper, {
        flickityFadeEffect: { ...Fade
        }
      });
    },

    on: {
      beforeInit(swiper) {
        if (swiper.params.effect !== 'flickity-fade') return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flickity-fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        extend(swiper.params, overwriteParams);
        extend(swiper.originalParams, overwriteParams);
      },

      init(swiper) {
        if (swiper.params.effect !== 'flickity-fade') return;
        swiper.slides.css({
          position: 'absolute'
        });
      },

      slideChange(swiper) {
        if (swiper.params.effect !== 'flickity-fade') return;
        const $animateItems = swiper.slides.eq(this.activeIndex).find('.animation-contents');
        $animateItems.off('animationend');
        Promise.all($animateItems.map(item => {
          return new Promise(resolve => {
            $(item).one('animationend', () => {
              resolve();
            });
          });
        })).then(() => {
          swiper.$wrapperEl[0].dispatchEvent(new CustomEvent('transitionend'));
          swiper.emit('fadeTransitionend');
        });
        swiper.slides.each(function () {
          const $el = $(this);

          if ($el.hasClass(swiper.params.slideActiveClass)) {
            $el.addClass(classes.animateOut).one('transitionend', () => {
              $el.removeClass(classes.animateOut);
            });
          }
        });
      },

      transitionEnd() {}

    }
  };
  return _exports;
}();