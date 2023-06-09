window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/checkout.js'] = window.SLM['theme-shared/utils/checkout.js'] || function () {
  const _exports = {};
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Cookies = window['js-cookie']['*'];
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { SL_State: store } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { adaptor } = window['SLM']['theme-shared/utils/url-adaptor.js'];
  const { reportCheckout, setIniiateCheckout } = window['SLM']['theme-shared/utils/tradeReport/index.js'];
  const { hiidoEventStatus, HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { getSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/utils/url.js'];
  const { SERVER_ERROR_CODE } = window['SLM']['theme-shared/utils/constant.js'];
  const { I18N_KEY_MAP, ERROR_TYPE } = window['SLM']['theme-shared/components/smart-payment/constants.js'];
  const {
    GO_TO_CHECKOUT
  } = HD_EVENT_NAME;

  function isJsonParse(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  const helperConsole = {
    checkout: createLogger('checkout')
  };
  const logger = loggerService.pipeOwner({
    owner: 'checkout',
    onTag: key => {
      switch (key) {
        case 'orderFrom':
          return true;

        case 'code':
          return true;

        default:
          return false;
      }
    }
  });
  const services = {
    save: async (products, {
      associateCart = false,
      useMemberPoint = null,
      discountCode = null,
      bundledActivitySeq = null,
      orderFrom = null,
      dataReportReq
    } = {}) => {
      const marketLanguage = window.Shopline.locale;
      const displayLanguage = Cookies.get('userSelectLocale') || store.get('request.cookie.userSelectLocale');
      return request.post('/trade/center/order/abandoned/save', {
        products,
        associateCart,
        discountCodes: Array.isArray(discountCode) ? discountCode : [discountCode],
        bundledActivitySeq,
        useMemberPoint,
        orderFrom,
        dataReportReq,
        languageInfo: {
          marketLanguage,
          displayLanguage
        }
      });
    }
  };
  const RouterPath = {
    SignIn: redirectTo('/user/signIn'),
    Checkout: '/trade/checkout',
    Checkouts: '/checkouts'
  };
  const ADD_TO_CART_EVENT_KEY = 'Symbol(ADD_TO_CART)';

  const getCheckoutUrl = (data, {
    query = {},
    associateCart,
    abandonedOrderMark = ''
  } = {}) => {
    const urlPrefix = `${window.location.protocol}//${window.location.host}`;
    const {
      storeId,
      checkoutToken,
      seq
    } = data;
    const {
      url
    } = adaptor(checkoutToken ? `${urlPrefix}/${storeId}${RouterPath.Checkouts}/${checkoutToken}` : `${urlPrefix}${RouterPath.Checkout}/${seq}`, {
      query: {
        buyScence: associateCart ? 'cart' : 'detail',
        ...query,
        mark: abandonedOrderMark
      },
      fullQuery: false
    });
    return url;
  };

  _exports.getCheckoutUrl = getCheckoutUrl;

  const save = async (products, extra = {}) => {
    const {
      stage,
      query = {},
      associateCart = false,
      abandonedOrderSeq,
      abandonedOrderMark,
      currency,
      totalPrice
    } = extra;

    try {
      const settleConfig = store.get('tradeSettleConfig');
      const isLogin = store.get('request.cookie.osudb_uid');
      const {
        onBeforeJump,
        report,
        needReport,
        reportParamsExt,
        abandonedOrderSeq,
        abandonedOrderMark
      } = extra;
      const needLogin = settleConfig && settleConfig.loginType === 'ONLY_LOGIN';
      const {
        discountCode,
        ...rest
      } = extra;
      let _discountCode = discountCode;

      if (!associateCart) {
        const tradeExtraInfoStr = sessionStorage.getItem('tradeExtraInfo');
        const tradeExtraInfo = isJsonParse(tradeExtraInfoStr) ? JSON.parse(tradeExtraInfoStr) : {};
        _discountCode = tradeExtraInfo && tradeExtraInfo.discountCode && tradeExtraInfo.discountCode.value;
      }

      const reqParams = {
        associateCart,
        discountCode: _discountCode,
        orderFrom: getSyncData('orderFrom'),
        dataReportReq: reportParamsExt,
        ...rest
      };

      if (!abandonedOrderSeq) {
        const isDismissParams = ['orderFrom'].some(key => !reqParams[key] && reqParams[key] !== 0);

        if (isDismissParams) {
          logger.info('[成单请求参数缺失，请检查]', { ...reqParams
          });
        }

        logger.debug('[成单请求参数初始化]', { ...reqParams
        });
      }

      const response = abandonedOrderSeq ? await Promise.resolve({
        data: {
          seq: abandonedOrderSeq,
          mark: abandonedOrderMark
        }
      }) : await services.save(products, reqParams);
      logger.debug('[成单请求响应数据]', { ...(response && response.data)
      });
      helperConsole.checkout.info({ ...(response && response.data)
      });
      const redirectToSignIn = !isLogin && needLogin;
      const checkoutUrl = getCheckoutUrl({
        storeId: store.get('storeInfo.storeId'),
        checkoutToken: response.data.checkoutToken,
        seq: response.data.seq
      }, {
        query: { ...query,
          spb: redirectToSignIn ? null : query.spb
        },
        abandonedOrderMark,
        associateCart
      });
      SL_EventBus.emit(GO_TO_CHECKOUT, {
        data: {
          event_status: response && response.data && response.data.seq ? hiidoEventStatus.SUCCESS : hiidoEventStatus.ERROR,
          stage,
          isCart: associateCart,
          products,
          spb: query && query.spb
        }
      });
      setIniiateCheckout(response.data.seq, currency, totalPrice, needReport);
      const urlPrefix = `${window.location.protocol}//${window.location.host}`;

      if (redirectToSignIn) {
        const {
          url
        } = adaptor(`${urlPrefix}${RouterPath.SignIn}`, {
          query: {
            redirectUrl: checkoutUrl
          },
          fullQuery: false
        });
        typeof onBeforeJump === 'function' && onBeforeJump();

        try {
          reportCheckout({
            products,
            isCart: associateCart,
            report
          });

          if (associateCart) {
            window.SL_EventBus && window.SL_EventBus.emit('global:hdReport:exit', ['60006254', {
              event_name: '999',
              page_dest: `${window.location.href}`
            }]);
          }
        } catch (e) {
          console.error(e);
        }

        return Promise.resolve({ ...response.data,
          url,
          needLogin
        });
      }

      typeof onBeforeJump === 'function' && onBeforeJump();

      try {
        reportCheckout({
          products,
          isCart: associateCart,
          report,
          needReport
        });

        if (associateCart && window.location.pathname === redirectTo('/cart')) {
          window.SL_EventBus && window.SL_EventBus.emit('global:hdReport:exit', ['60006254', {
            event_name: '999',
            page_dest: `${window.location.href}`
          }]);
        }
      } catch (e) {
        helperConsole.checkout.info(e);
      }

      return Promise.resolve({
        url: checkoutUrl,
        needLogin: false,
        abandonedInfo: response.data
      });
    } catch (error) {
      SL_EventBus.emit(GO_TO_CHECKOUT, {
        data: {
          event_status: 0,
          stage,
          isCart: associateCart,
          products,
          spb: query && query.spb
        }
      });
      const {
        code,
        message
      } = error || {};
      logger.error(`[成单请求报错]${code ? `[code: ${code}` : ''}${message ? `[msg: ${message}]` : ''}`, {
        error,
        abandonedOrderSeq,
        abandonedOrderMark
      });

      switch (code) {
        case SERVER_ERROR_CODE.AMOUNT_EXCEEDS_LIMIT:
          Toast.init({
            content: t('cart.checkout.max_amount_limit')
          });
          break;

        case SERVER_ERROR_CODE.ABANDONED_RISK_CONTROL:
          Toast.init({
            content: t('general.abandon.Order.risk')
          });
          break;

        default:
          Toast.init({
            content: t(I18N_KEY_MAP.themes[ERROR_TYPE.CreateFail])
          });
      }

      return Promise.reject(error);
    }
  };

  const jump = async (products, extra = {}) => {
    const {
      url
    } = await save(products, extra);
    window.location.href = url;
  };

  let hasBoundAddToCartEvent = false;
  let addToCartEventName;

  const getAddToCartEventName = () => {
    if (addToCartEventName) {
      return addToCartEventName;
    }

    const eventNameList = window.SL_EventBus.eventNames() || [];
    return eventNameList.find(name => name.toString() === ADD_TO_CART_EVENT_KEY);
  };

  const addToCart = data => {
    return window.SL_EventBus.emit(getAddToCartEventName(), data);
  };

  if (!hasBoundAddToCartEvent) {
    hasBoundAddToCartEvent = true;
    window.__SL_TRADE_EVENT__ = window.__SL_TRADE_EVENT__ || {};
    window.__SL_TRADE_EVENT__.addToCart = window.__SL_TRADE_EVENT__.addToCart || addToCart;
  }

  _exports.default = {
    jump,
    save
  };
  return _exports;
}();