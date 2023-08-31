window.SLM = window.SLM || {};

window.SLM['cart/script/biz/sticky-cart/index.js'] = window.SLM['cart/script/biz/sticky-cart/index.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  const throttle = window['SLM']['commons/utils/throttle.js'].default;
  const { setFixedContentStyle, setStickyContAnimate, listenElementMutation, listenElementIntersection } = window['SLM']['cart/script/biz/sticky-cart/helper.js'];
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const logger = LoggerService.pipeOwner(`${Owner.Cart} biz/sticky-cart/index.js`);
  const cartToken = Cookie.get('t_cart');

  const initMainCartSticky = () => {
    if (isMobile()) {
      logger.info(`main 主站购物车 initMainCartSticky`, {
        data: {
          cartToken
        },
        action: Action.InitCart,
        status: LoggerStatus.Success
      });
      $(window).on('scroll', throttle(20, () => {
        setStickyContAnimate({
          viewportSelector: '.trade_cart .main_cart',
          containerSelector: '.cart__stick_container'
        });
      }));
      listenElementMutation($('.trade-cart-sku-list').get(0), () => {
        setTimeout(() => {
          setStickyContAnimate({
            viewportSelector: '.trade_cart .main_cart',
            containerSelector: '.cart__stick_container'
          });
        }, 300);
      });
      setTimeout(() => {
        setStickyContAnimate({
          viewportSelector: '.trade_cart .main_cart',
          containerSelector: '.cart__stick_container'
        });
      }, 300);
    }
  };

  _exports.initMainCartSticky = initMainCartSticky;
  let intersectionObserver;

  const handleHeaderVisibleToggle = isVisible => {
    if (!isVisible) {
      $('.mini-cart__drawer-slot').css('position', 'fixed').css('top', 0);
    } else {
      $('.mini-cart__drawer-slot').css('position', 'absolute').css('top', '');
    }
  };

  const listenHeaderIntersection = () => {
    const isHeaderSticky = $('#stage-header').attr('data-sticky');

    if (isHeaderSticky !== 'true') {
      intersectionObserver = listenElementIntersection($('.header__main').get(0), handleHeaderVisibleToggle);
    }
  };

  const listenEditorSectionChange = () => {
    $(document).on('shopline:section:load', () => {
      intersectionObserver && intersectionObserver.disconnect && intersectionObserver.disconnect();
      listenHeaderIntersection();
    });
  };

  const listenHeaderSectionChange = () => {
    setTimeout(() => {
      listenHeaderIntersection();
      listenEditorSectionChange();
    }, 0);
  };

  _exports.listenHeaderSectionChange = listenHeaderSectionChange;

  const initMiniCartSticky = () => {
    logger.info(`mini 主站购物车 initMiniCartSticky`, {
      data: {
        cartToken
      },
      action: Action.InitCart,
      status: LoggerStatus.Success
    });

    (() => {
      const height = $('.mini-cart__drawer-slot').position().top || 0;
      const positionTop = $('.header-sticky-wrapper').position().top || 0;
      const vh = document.documentElement.clientHeight;
      const mh = vh - height - positionTop;
      $('#cart-select .trade_cart_not_empty_wrapper').css('max-height', `${mh}px`);
    })();
  };

  _exports.initMiniCartSticky = initMiniCartSticky;

  const initMiniStyleWhenOpen = () => {
    logger.info(`mini 主站购物车 初始化 initMiniStyleWhenOpen`, {
      data: {
        cartToken
      },
      action: Action.InitCart,
      status: LoggerStatus.Success
    });
    setFixedContentStyle('#cart-drawer .trade_cart_not_empty_wrapper', $('#cart-drawer .miniCart__stick_container_fixed').outerHeight() + 20);
    const cartInfo = SL_State.get('cartInfo');
    logger.info(`mini 主站购物车 数据上报 initMiniStyleWhenOpen`, {
      data: {
        cartToken,
        cartInfo
      },
      action: Action.InitCart,
      status: LoggerStatus.Start
    });
    cartReport.viewCart(cartInfo);
  };

  _exports.initMiniStyleWhenOpen = initMiniStyleWhenOpen;

  const toggleVisibility = (cartType, visibility) => {
    logger.info(`normal 主站购物车 切换展示 toggleVisibility`, {
      data: {
        cartToken
      },
      action: Action.openCart,
      status: LoggerStatus.Start
    });
    if (!isMobile()) return;
    const selector = cartType === 'main' ? '.cart__stick_container' : '.miniCart__stick_container';
    const isOpen = $(selector).attr('isOpen');
    if (!isOpen) return;
    const visible = typeof visibility === 'boolean' ? visibility : $(selector).css('display') !== 'block';
    $(selector)[visible ? 'show' : 'hide']();
    logger.info(`normal 主站购物车 切换展示 toggleVisibility`, {
      data: {
        cartToken,
        visible: visible ? 'show' : 'hide'
      },
      action: Action.openCart,
      status: LoggerStatus.Success
    });
  };

  _exports.toggleVisibility = toggleVisibility;
  return _exports;
}();