window.SLM = window.SLM || {};

window.SLM['commons/cart/globalEvent.js'] = window.SLM['commons/cart/globalEvent.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const { setAddtoCart } = window['SLM']['theme-shared/utils/tradeReport/index.js'];
  const { OPEN_MINI_CART, ADD_TO_CART, CONTROL_CART_BASIS } = window['SLM']['theme-shared/events/trade/interior-event/index.js'];
  const { listenCartReport } = window['SLM']['theme-shared/utils/tradeReport/eventListen.js'];
  const { DRAWER_EVENT_NAME, DRAWER_OPERATORS } = window['SLM']['theme-shared/components/hbs/shared/components/topDrawer/const.js'];
  const Service = window['SLM']['cart/script/service/index.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const responseCodeVO = window['SLM']['cart/script/domain/vo/responseCode.js'].default;
  const dynamicImportMiniCart = window['SLM']['commons/utils/dynamicImportMiniCart.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const logger = loggerService.pipeOwner({
    owner: 'Cart',
    onTag: key => {
      switch (key) {
        case 'eventId':
          return true;

        default:
          return false;
      }
    }
  });
  _exports.OPEN_MINI_CART = OPEN_MINI_CART;
  _exports.ADD_TO_CART = ADD_TO_CART;
  const CLOSE_MINI_CART = Symbol('CLOSE_MINI_CART');
  _exports.CLOSE_MINI_CART = CLOSE_MINI_CART;
  const OPEN_TOP_CART = Symbol('OPEN_TOP_CART');
  _exports.OPEN_TOP_CART = OPEN_TOP_CART;
  const cartOpenType = SL_State.get('theme.settings.cart_open_type');
  Service.init();

  if (window.location.pathname.includes('/cart')) {
    dynamicImportMiniCart();
  } else if (cartOpenType !== 'newpage' && cartOpenType !== 'cartremain') {
    setTimeout(dynamicImportMiniCart, 6000);
  }

  const interior = window.SL_EventBus;

  const noop = () => {};

  listenCartReport();
  interior.on(OPEN_MINI_CART, async ({
    data = {},
    onSuccess = noop
  } = {}) => {
    onSuccess(data);
    window.location.href = '/cart';
  });
  window.SL_EventBus.on(OPEN_TOP_CART, async () => {
    await dynamicImportMiniCart();
    window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
      id: 'cart-select',
      operator: DRAWER_OPERATORS.OPEN
    });
  });

  const closeMiniCart = () => {
    window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
      id: 'cart-select',
      operator: DRAWER_OPERATORS.CLOSE
    });
  };

  window.SL_EventBus.on(CLOSE_MINI_CART, closeMiniCart);
  interior.on('REFRESH_CART', async () => {
    await CartService.takeCartService().getCartDetail();
  });
  window.SL_EventBus.on(ADD_TO_CART, async ({
    spuId,
    skuId,
    num,
    price,
    success,
    error,
    complete,
    eventID,
    reportParamsExt,
    sellingPlanId
  }) => {
    const dataReportReq = setAddtoCart(price, window.SL_State ? window.SL_State.get('storeInfo.currency') : undefined, eventID, reportParamsExt);
    const skuParams = {
      spuId,
      skuId,
      num,
      orderFrom: getSyncData('orderFrom'),
      dataReportReq,
      sellingPlanId
    };

    try {
      if (cartOpenType !== 'newpage' && cartOpenType !== 'cartremain') {
        closeMiniCart();
        await dynamicImportMiniCart();
        window.SL_EventBus.emit('NEED_OPEN_TOP_CART', {
          spuId,
          skuId,
          num,
          sellingPlanId
        });
      }

      const isDismissParams = ['orderFrom'].some(key => !skuParams[key] && skuParams[key] !== 0);

      if (isDismissParams) {
        logger.info('[加购请求参数缺失，请检查]', { ...skuParams
        });
      }

      logger.debug('[加购请求参数初始化]', { ...skuParams
      });
      const res = await CartService.takeCartService().addSku(skuParams);
      logger.debug('[加购请求响应数据]', {
        res,
        eventId: dataReportReq.eventId
      });

      if (!responseCodeVO.isOk(res)) {
        let errMsg = res.msg;

        if (responseCodeVO.is(res, 'TCAT0109')) {
          errMsg = t('cart.notices.product_amount_limit');
        }

        if (responseCodeVO.batchIs(res, 'TCAT0107,TCAT0112')) {
          errMsg = t('cart.discount_price.buy_limit3', {
            stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : '0'
          });
        }

        if (responseCodeVO.is(res, 'TCAT0111')) {
          errMsg = t('cart.discount_price.buy_limit2', {
            stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : '0'
          });
        }

        if (responseCodeVO.is(res, 'TCAT0101')) {
          errMsg = t('cart.item.none_existent');
        }

        if (responseCodeVO.is(res, 'TCAT0103')) {
          errMsg = t('products.product_list.product_has_been_removed');
        }

        new Toast().open(errMsg, 1500);

        if (typeof error === 'function') {
          error();
        }
      } else {
        if (typeof success === 'function') {
          try {
            success();
          } catch (e) {
            console.error(e);
          }
        }

        if (cartOpenType === 'cartremain') return;

        if (cartOpenType !== 'newpage') {
          window.SL_EventBus.emit(OPEN_TOP_CART);
        } else {
          interior.emit(OPEN_MINI_CART);
        }
      }
    } catch (e) {
      console.warn('add to cart fail:', e);
      logger.error(`[加购失败]`, {
        e,
        eventId: dataReportReq.eventId
      });
    } finally {
      if (typeof complete === 'function') {
        complete();
      }
    }
  });
  window.SL_EventBus.on(CONTROL_CART_BASIS, async ({
    options,
    success,
    error
  }) => {
    const paramsEnum = {
      switchSideBar: 'switchSideBar',
      updateState: 'updateState',
      rerenderDom: 'rerenderDom',
      cartDetail: 'cartDetail'
    };
    const sideBarStatusEnum = {
      open: 'open',
      close: 'close'
    };

    const paramsFilter = () => {
      do {
        const eventName = 'Cart::ControlCartBasis Event: ';

        if (!options || !Object.keys(options).length) {
          console.warn(eventName, 'params missing');
          break;
        }

        if (!!Object.hasOwnProperty.call(options, paramsEnum.switchSideBar) && !Object.values(sideBarStatusEnum).includes(options.switchSideBar)) {
          console.warn(eventName, `【switchSideBar: ${options.switchSideBar}】 is invalid`);
          break;
        }

        if (!!Object.hasOwnProperty.call(options, paramsEnum.updateState) && typeof options.updateState !== 'boolean') {
          console.warn(eventName, `【updateState: ${options.updateState}】 is invalid`);
          break;
        }

        if (!!Object.hasOwnProperty.call(options, paramsEnum.rerenderDom) && typeof options.rerenderDom !== 'boolean') {
          console.warn(eventName, `【rerenderDom: ${options.rerenderDom}】 is invalid`);
          break;
        }

        if (!!Object.hasOwnProperty.call(options, paramsEnum.cartDetail) && typeof options.cartDetail !== 'boolean') {
          console.warn(eventName, `【cartDetail: ${options.cartDetail}】 is invalid`);
          break;
        }

        if (Object.keys(options).some(item => !Object.hasOwnProperty.call(paramsEnum, item))) {
          console.warn(eventName, 'params has invalid key');
          break;
        }

        return true;
      } while (false);

      return false;
    };

    try {
      if (paramsFilter()) {
        const {
          switchSideBar,
          updateState,
          rerenderDom,
          cartDetail
        } = options;
        const cartId = 'cart-drawer';
        let cartInfo;

        if (switchSideBar) {
          interior.emit(DRAWER_EVENT_NAME, {
            id: cartId,
            status: switchSideBar
          });
        }

        if (updateState) {
          await CartService.takeCartService().updateCartState();
        }

        if (rerenderDom) {
          await CartService.takeCartService().rerenderCartDom();
        }

        if (cartDetail) {
          const CartInfoKey = 'cartInfo';
          cartInfo = SL_State.get(CartInfoKey) || null;
          success(cartInfo);
          return;
        }

        success();
        return;
      }
    } catch (e) {
      error();
      console.warn(`${CONTROL_CART_BASIS} FAIL:`, e);
    }
  });
  return _exports;
}();