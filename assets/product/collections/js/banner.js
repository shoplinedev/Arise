window.SLM = window.SLM || {};

window.SLM['product/collections/js/banner.js'] = window.SLM['product/collections/js/banner.js'] || function () {
  const _exports = {};
  const { debounce } = window['lodash'];

  class Banner {
    constructor() {
      this.$container = document.querySelector('.product-list-banner');
      this.$banner = $('#productListBanner-parallax');
      const offset = this.$banner.offset();
      this.$bannerTop = offset && offset.top || 0;
      this.speed = 2;
      this.isInit = false;
      this.isVisible = false;
      this.isParallax = false;
    }

    init() {
      if (this.isInit) {
        this.destory();
      }

      this.isInit = true;

      if (!this.$banner) {
        return;
      }

      this.setSizes();
      const isParallax = $('#productListBanner-parallax').attr('data-parallax-scroll');

      if (isParallax === 'true') {
        this.scrollHandler();
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;

          if (this.isVisible) {
            $(window).on('scroll', this.onScroll.bind(this));
          } else {
            $(window).off('scroll', this.onScroll.bind(this));
          }
        });
      }, {
        rootMargin: '0px 0px 0px 0px'
      });
      observer.observe(this.$container);
      $(window).on('resize', this.debounceSetSizes.bind(this));
    }

    debounceSetSizes() {
      return debounce(this.setSizes.bind(this), 250);
    }

    onScroll() {
      if (!this.isVisible) {
        return;
      }

      const isParallax = $('#productListBanner-parallax').attr('data-parallax-scroll');

      if (isParallax !== 'true') {
        return;
      }

      requestAnimationFrame(this.scrollHandler.bind(this));
    }

    scrollHandler() {
      const viewPortHeight = $(window).height();
      const {
        top,
        height
      } = this.$container ? this.$container.getBoundingClientRect() : {};
      if (!top && !height) return false;
      const movableDistance = viewPortHeight + height;
      const currentDistance = viewPortHeight - top;
      const percent = (currentDistance / movableDistance * this.speed * 38).toFixed(2);
      const num = 38 - Number(percent);
      $('#productListBanner-parallax').css('transform', `translate3d(0 , ${-num}% , 0)`);
    }

    setSizes() {
      const parallax = document.querySelector('#productListBanner-parallax');
      const domTop = parallax ? parallax.getBoundingClientRect().top : 0;
      this.$elTop = domTop + window.scrollY;
    }

    destroy() {
      this.$banner.css('transform', 'none');
      $(window).off('scroll', this.onScroll.bind(this));
      $(window).off('resize', this.debounceSetSizes.bind(this));
      this.isInit = false;
    }

  }

  _exports.default = Banner;
  return _exports;
}();