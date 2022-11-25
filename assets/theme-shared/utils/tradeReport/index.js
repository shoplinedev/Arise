window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/tradeReport/index.js'] = window.SLM['theme-shared/utils/tradeReport/index.js'] || function () {
  const _exports = {};
  const Cookies = window['js-cookie']['*'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const ga = window['SLM']['theme-shared/utils/dataReport/ga.js'].default;
  const { clickAdsData } = window['SLM']['theme-shared/utils/dataReport/ads.js'];
  const { clickFbData } = window['SLM']['theme-shared/utils/dataReport/fb.js'];
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
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

  const templateAlias = window.Shopline.uri.alias;

  class TradeReport {
    constructor() {
      this.eventBus = SL_EventBus;
      this.storeCurrency = Cookies.get('currency_code');
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
          currency: this.storeCurrency
        }
      };
      const gaParam = ga.click(pageType, actionType, val);
      const ga4Param = ga.clickGa4({
        pageType,
        actionType,
        params: val
      });
      const adsParams = clickAdsData(pageType, actionType, val);
      const fbParams = clickFbData(actionType, val);
      const params = {
        GAAds: adsParams,
        GA: gaParam,
        GA4: ga4Param,
        FBPixel: fbParams
      };
      this.eventBus && this.eventBus.emit('global:thirdPartReport', params);
    }

    reportViewCart(data) {
      const ga4Param = ga.clickGa4(data);
      const newParams = {
        GA4: ga4Param
      };
      this.eventBus && this.eventBus.emit('global:thirdPartReport', newParams);
    }

  }

  const setAddtoCart = (payAmount, currency, eid, extra = {}) => {
    const {
      eventID,
      ...ext
    } = extra;
    const params = { ...ext,
      payAmount,
      currency,
      eventId: eid || `addToCart${eventID}` || `addToCart${getEventID()}`,
      eventTime: Date.now()
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

  const getNeedReportData = callback => {
    if (isFn(callback)) {
      const data = callback();

      if (typeof data === 'string') {
        return {
          eventID: data
        };
      }

      return data;
    }

    return {};
  };

  const setPayPalReportReq = ({
    needReport,
    products,
    extra
  }) => {
    const resData = getNeedReportData(needReport);
    const {
      eventID,
      ...extData
    } = resData;
    let price = 0;
    products.forEach(item => {
      price += Number(item.productPrice);
    });
    const dataReportReq = setAddtoCart(price, window && window.SL_State.get('storeInfo.currency'), `addToCart${eventID}`, { ...extra,
      ...extData
    });
    return dataReportReq;
  };

  const setIniiateCheckout = (seq, needReport) => {
    const resData = getNeedReportData(needReport);
    const {
      eventID
    } = resData;
    const cookieMap = Cookies.get();
    Object.keys(cookieMap).forEach(key => {
      if (/^\d+_fb_data$/.test(key)) {
        Cookies.remove(key);
      }
    });
    Cookies.set(`${seq}_fb_data`, {
      tp: eventID ? 2 : 1,
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
  _exports.getNeedReportData = getNeedReportData;
  _exports.setPayPalReportReq = setPayPalReportReq;
  return _exports;
}();