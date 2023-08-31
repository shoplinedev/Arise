window.SLM = window.SLM || {};

window.SLM['stage/header/index.js'] = window.SLM['stage/header/index.js'] || function () {
  const _exports = {};
  const { throttle, debounce } = window['lodash'];
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { StickyElementManager } = window['SLM']['theme-shared/utils/stickyElementManager.js'];
  const { DRAWER_EVENT_NAME } = window['SLM']['theme-shared/components/hbs/shared/components/drawer/const.js'];
  const { headerStickyEvent } = window['SLM']['theme-shared/utils/headerStickyEvent.js'];
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const { OPEN_MINI_CART, CLOSE_MINI_CART } = window['SLM']['commons/cart/globalEvent.js'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;

  class Header extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'satge:header',
        wrapperOverlayed: false,
        stickyEnabled: false,
        stickyActive: false,
        stickyHeader: false,
        lastScroll: 0,
        forceStopSticky: false,
        stickyHeaderWrapper: 'StickyHeaderWrap',
        swiperBreakpoint: 750,
        lastStickOffsetTop: 0
      };
      this.classes = {
        overlayedClass: 'header--is-light',
        stickyClass: 'header__main--sticky',
        openTransitionClass: 'header__main--opening',
        activateSwiperClass: 'swiper-wrapper',
        activateSwiperContainer: 'swiper-container',
        activeCartClass: 'header__cart--active',
        outerWrapperSticky: 'is-sticky',
        wrapperSticky: 'header-wrapper--sticky',
        activeNavClass: 'show-nav',
        headerBtnLink: 'header__btn--link',
        headerBtnActive: 'header__btn--on',
        headerBtnWrapperActive: 'header__btn--active'
      };
      this.selectors = {
        wrapper: '#stage-headerWrapper',
        header: '#stage-header',
        drawerBtn: '.j-header-drawer-btn',
        miniCart: '.header__cart',
        cartBtn: '#stage-header-cart',
        cartPoint: '.header__cart-point',
        logoImage: '.header__logo--link img',
        outerWrapper: '.header-sticky-wrapper',
        logoImag: '.header__logo--link img',
        notOverlayId: '#CollectionHeaderSection',
        navBtn: '.j-header-nav-btn',
        headerBtn: '.header__btn',
        headerBtnWrapper: '.header__item--buttons',
        menuBtn: '.header__btn--menu',
        layoutContainer: '.header__layout-container',
        sectionOuterHeaderWrapper: '#shopline-section-header'
      };
      this.jq = {
        header: $(),
        wrapper: $(),
        stickyHeaderWrapper: $()
      };
      this.menuDrawer = null;
      this.$setNamespace(this.config.namespace);
      this.jq.header = $(this.selectors.header);
      this.jq.wrapper = $(this.selectors.wrapper);
      this.stickyElementManager = new StickyElementManager();
      this.bindCartEvent();
      this.initAfterLoaded();
      this.bindHeaderNav();
      const $img = $(this.selectors.logoImag);
      let waitForImg = null;

      if ($img.length) {
        waitForImg = $img.toArray().find(img => img.offsetParent !== null);
      }

      if (waitForImg) {
        if (waitForImg.complete && waitForImg.naturalHeight !== 0) {
          this.initHeader();
        } else {
          waitForImg.onload = () => {
            this.initHeader();
          };
        }
      } else {
        $(() => {
          this.initHeader();
        });
      }
    }

    initAfterLoaded() {
      if (document.readyState !== 'loading') {
        this.bindCartCount();
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          this.bindCartCount();
        });
      }
    }

    initHeader() {
      this.config.stickyEnabled = this.jq.header.data('sticky');

      if (this.config.stickyEnabled) {
        const notOverlay = $(this.selectors.notOverlayId);

        if (notOverlay.length) {
          this.config.wrapperOverlayed = false;
          this.jq.wrapper.removeClass(this.classes.overlayedClass);
          this.jq.wrapper.removeClass(this.classes.wrapperSticky);
        } else {
          this.config.wrapperOverlayed = this.jq.wrapper.data('overlay');
        }

        this.stickyHeaderCheck();
      }

      window.SL_EventBus.on('force-header-intoView', () => {
        if (window.scrollY < 250 && window.scrollY > 0) {
          $(this.selectors.header)[0].scrollIntoView();
        }
      });
      window.SL_EventBus.on('stage:locale:change', () => {
        const domEl = this.jq.stickyHeaderWrapper[0];

        if (domEl && domEl.style.height) {
          domEl.style.height = 'auto';
          this.stickyHeaderHeight();
        }
      });
    }

    stickyHeaderCheck() {
      this.config.stickyHeader = true;

      if (this.config.stickyHeader) {
        this.config.forceStopSticky = false;
        this.stickyHeader();
      } else {
        this.config.forceStopSticky = true;
      }
    }

    stickyHeader() {
      this.config.lastScroll = 0;
      const wrapWith = document.createElement('div');
      wrapWith.id = this.config.stickyHeaderWrapper;
      this.jq.header.wrap(wrapWith);
      this.jq.stickyHeaderWrapper = $(`#${wrapWith.id}`);
      this.stickyHeaderHeight();
      this.stickyHeaderScroll();
      setTimeout(() => {
        requestAnimationFrame(this.scrollWorker.bind(this));
      }, 2500);
      this.$onWin('resize', debounce(this.stickyHeaderHeight.bind(this), 50));
      this.$onWin('scroll', throttle(this.stickyHeaderScroll.bind(this), 20));

      if (window.Shopline.designMode) {
        const $logoImage = $(this.selectors.logoImage);

        const onLoadHandler = () => {
          setTimeout(() => {
            this.stickyHeaderHeight();
          }, 1000);
          $logoImage.off('load');
        };

        $logoImage.on('load', onLoadHandler);
      }
    }

    stickyHeaderScroll() {
      if (!this.config.stickyEnabled) {
        return;
      }

      if (this.config.forceStopSticky) {
        return;
      }

      requestAnimationFrame(this.scrollWorker.bind(this));
      this.config.lastScroll = window.scrollY;
    }

    scrollWorker() {
      if (window.scrollY > 250) {
        this.doSticky();
      } else {
        this.undoSticky();
      }
    }

    emitSticky(stickyActive) {
      headerStickyEvent.emitSticky(stickyActive);
      const headerHeight = $(this.selectors.header).height();
      const stickOffsetTop = this.getStickHeaderOffsetTop();
      this.config.lastStickOffsetTop = stickOffsetTop;
      window.SL_EventBus.emit('stage:header:sticky', {
        stickyActive,
        headerHeight
      });
      window.SL_EventBus.emit('stage:header:stickOffsetTopUpdate', {
        stickOffsetTop,
        stickyActive
      });
    }

    undoSticky() {
      if (this.config.stickyActive === false) {
        return;
      }

      this.config.stickyActive = false;
      this.jq.header.removeClass([this.classes.openTransitionClass, this.classes.stickyClass]);
      $(this.selectors.outerWrapper).removeClass(this.classes.outerWrapperSticky);
      this.jq.header.css({
        top: 0
      });
      this.jq.stickyHeaderWrapper.eq(0).height('auto');

      if (this.config.wrapperOverlayed) {
        this.jq.wrapper.addClass(this.classes.overlayedClass);
      }

      this.emitSticky(false);
    }

    doSticky() {
      const stickOffsetTop = this.getStickHeaderOffsetTop();
      const isNeedRerender = !this.config.stickyActive || this.config.lastStickOffsetTop !== stickOffsetTop;

      if (!isNeedRerender) {
        return;
      }

      this.config.stickyActive = true;
      const height = $(this.selectors.header).innerHeight();
      this.jq.header.addClass(this.classes.stickyClass);
      this.jq.stickyHeaderWrapper.eq(0).height(height);
      this.jq.header.addClass(this.classes.stickyClass);

      if (this.config.wrapperOverlayed) {
        this.jq.wrapper.removeClass(this.classes.overlayedClass);
      }

      setTimeout(() => {
        this.jq.header.addClass(this.classes.openTransitionClass);
        $(this.selectors.outerWrapper).addClass(this.classes.outerWrapperSticky);
        this.emitSticky(true);
        this.jq.header.css({
          top: stickOffsetTop
        });
      }, 100);
    }

    stickyHeaderHeight() {
      if (!this.config.stickyEnabled) {
        return;
      }

      const headerLayoutBackgroundHeight = $('.header__layout-background').css('height') || 0;
      const h = headerLayoutBackgroundHeight;
      this.jq.stickyHeaderWrapper[0].style.height = this.config.wrapperOverlayed ? 'auto' : `${h}px`;
    }

    getStickHeaderOffsetTop() {
      return headerStickyEvent.getAboveElementHeight();
    }

    bindCartEvent() {
      this.$on('click', this.selectors.miniCart, e => {
        const $btn = $(e.currentTarget);

        if ($btn.hasClass('header__btn--on')) {
          window.SL_EventBus.emit(CLOSE_MINI_CART);
        } else {
          window.SL_EventBus.emit(OPEN_MINI_CART);
        }
      });
    }

    bindHeaderNav() {
      this.$on('click', this.selectors.navBtn, () => {
        $(this.selectors.layoutContainer).toggleClass(this.classes.activeNavClass);
      });
      this.$on('click', this.selectors.drawerBtn, () => {
        const hasMobileMenu = $('#mobile-menu-drawer').length > 0;
        const id = isMobile() && hasMobileMenu ? 'mobile-menu-drawer' : 'menu-drawer';
        window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
          id,
          status: 'open'
        });
      });
    }

    swiperResizeHandler() {
      this.disableSwiper();
      this.activateSwiper();
    }

    fetchCartInfo() {
      return request({
        url: 'carts/cart/count',
        method: 'GET'
      }).then(res => {
        if (res.success) {
          return Promise.resolve(res.data);
        }
      });
    }

    bindCartCount() {
      window.SL_State.on('cartInfo', () => {
        this.activeCart();
      });
      this.fetchCartInfo().then(num => {
        this.activeCart(num);
      });
    }

    activeCart(num = 0) {
      const cartBtn = $(this.selectors.cartBtn);

      if (!cartBtn.length) {
        return;
      }

      const cartNum = window.SL_State.get('cartInfo.count') || num;

      if (cartNum) {
        cartBtn.removeClass(this.classes.activeCartClass).addClass(this.classes.activeCartClass);
        $(this.selectors.cartPoint).html(cartNum);
      } else {
        cartBtn.removeClass(this.classes.activeCartClass);
      }
    }

    offEventBus() {
      window.SL_EventBus.off('force-header-intoView');
    }

    off() {
      this.$offAll();
      this.stickyElementManager.offEvent();
      this.offEventBus();
    }

  }

  let instance = new Header();

  const getHeaderSectionId = () => {
    return $(instance.selectors.wrapper).data('section=id');
  };

  _exports.getHeaderSectionId = getHeaderSectionId;
  $(document).on('shopline:section:load', () => {
    instance.off();
    instance = null;
    instance = new Header();
  });
  return _exports;
}();