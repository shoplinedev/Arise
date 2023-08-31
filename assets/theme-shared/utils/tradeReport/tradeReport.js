window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/tradeReport/tradeReport.js'] = window.SLM['theme-shared/utils/tradeReport/tradeReport.js'] || function () {
  const _exports = {};
  const Cookies = window['js-cookie']['*'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const ga = window['SLM']['theme-shared/utils/dataReport/ga.js'].default;
  const { clickAdsData } = window['SLM']['theme-shared/utils/dataReport/ads.js'];
  const { clickFbData } = window['SLM']['theme-shared/utils/dataReport/fb.js'];
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { SL_State: store } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { pageMap } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const REPORT_ADD_CART = Symbol('REPORT_ADD_CART');
  const PAYPAL_CLICK = Symbol('PAYPAL_CLICK');
  const paypalPage = {
    Cart: 'Cart',
    MiniCart: 'MiniCart',
    FilterModal: 'FilterModal'
  };

  const encode = str => {
    if (typeof window === 'undefined') return '';
    const ec = window && window.encodeURI(str);
    return window && window.btoa(ec);
  };

  _exports.encode = encode;

  const isFn = object => typeof object === 'function';

  const templateAlias = store.get('templateAlias');

  class TradeReport {
    constructor() {
      this.eventBus = SL_EventBus;
      this.currency = store.get('currencyCode');
      this.hdPage = {
        Cart: 'cart',
        MiniCart: 'cart'
      };
    }

    touch(data) {
      const {
        pageType,
        actionType,
        value
      } = data;
      const val = { ...value,
        ...{
          currency: this.currency
        }
      };
      const gaParam = ga.click(pageType, actionType, val);
      const adsParams = clickAdsData(pageType, actionType, val);
      const fbParams = clickFbData(actionType, val);
      const params = {
        GAAds: adsParams,
        GA: gaParam,
        FBPixel: fbParams
      };
      this.eventBus && this.eventBus.emit('global:thirdPartReport', params);
    }

  }

  const setAddtoCart = (payAmount, currency, eventID) => {
    const params = {
      payAmount,
      currency,
      eventId: eventID || `addToCart${getEventID()}`,
      eventTime: Date.now(),
      eventName: 'AddToCart'
    };
    return params;
  };

  const hdRpCheckout = (data, id) => {
    const products = data && data.map(item => ({
      product_id: item.productSeq,
      variantion_id: item.productSku,
      quantity: item.productNum,
      price: `${currencyUtil.formatNumber(Number(item && item.productPrice) || 0)}`,
      product_name: item.productName
    }));
    window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report(id, {
      event_name: '105',
      page: 'cart',
      products
    });
  };

  const setIniiateCheckout = (seq, needReport) => {
    let eventID;

    if (isFn(needReport)) {
      eventID = needReport();
    }

    const cookieMap = Cookies.get();
    Object.keys(cookieMap).forEach(key => {
      if (/^\d+_fb_data$/.test(key)) {
        Cookies.remove(key);
      }
    });
    Cookies.set(`${seq}_fb_data`, {
      tp: 1,
      et: Date.now(),
      ed: eventID || getEventID()
    });
  };

  const reportCheckout = data => {
    const {
      isCart,
      report,
      products
    } = data;

    if (isCart) {
      const event_id = pageMap[templateAlias] ? pageMap[templateAlias] : pageMap.MiniCart;
      hdRpCheckout(products, event_id);
    }

    if (isFn(report)) {
      report();
    }

    sessionStorage.setItem(encode('checkout_track'), '[]');
  };

  const tradeReport = new TradeReport();
  _exports.tradeReport = tradeReport;
  _exports.TradeReport = TradeReport;
  _exports.REPORT_ADD_CART = REPORT_ADD_CART;
  _exports.PAYPAL_CLICK = PAYPAL_CLICK;
  _exports.paypalPage = paypalPage;
  _exports.reportCheckout = reportCheckout;
  _exports.setIniiateCheckout = setIniiateCheckout;
  _exports.setAddtoCart = setAddtoCart;
  return _exports;
}();