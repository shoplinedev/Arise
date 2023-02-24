window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/@hiido.js'] = window.SLM['theme-shared/utils/report/@hiido.js'] || function () {
  const _exports = {};
  const Cookies = window['js-cookie']['default'];
  const ClickType = {
    AddPaymentInfo: 6,
    AddToCart: 1,
    InitiateCheckout: 4
  };
  _exports.ClickType = ClickType;
  const reportCommonParams = [false, false, false, true];

  class Hidoo {
    init() {
      return this;
    }

    load(type, data, eventID, extra) {
      let params = data || {};
      Hidoo.fbChecker();
      let event = null;
      const {
        hdEventId,
        ...rest
      } = extra || {};
      const fbParams = Hidoo.getFbParams();

      switch (type) {
        case 'Purchase':
          window.HdSdk && window.HdSdk.shopTracker.report(hdEventId || '80000101', {
            iframe_id: 1,
            ...eventID,
            ...params,
            ...fbParams,
            ...rest
          }, ...reportCommonParams);
          return this;

        case 'ViewContent':
          event = 102;
          break;

        case 'Search':
          event = 103;
          break;

        case 'Lead':
          event = 104;
          break;

        default:
          break;
      }

      if (event) {
        params = {
          iframe_id: 1,
          ...params,
          ...eventID,
          ...fbParams
        };
        window.HdSdk && window.HdSdk.shopTracker.report(`80000${event}`, params, ...reportCommonParams);
        window.HdSdk && window.HdSdk.shopTracker.report(`90000${event}`, fbParams, ...reportCommonParams);
      } else {
        window.HdSdk && window.HdSdk.shopTracker.report('90000000', fbParams, ...reportCommonParams);
      }

      return this;
    }

    report(type, params, eventID, extra) {
      if (ClickType[type]) {
        Hidoo.fbChecker();
        window.HdSdk && window.HdSdk.shopTracker.report(`80000${ClickType[type]}`, {
          iframe_id: 1,
          ...params,
          ...eventID,
          ...Hidoo.getFbParams()
        }, ...reportCommonParams);
      } else {
        this.load(type, params, eventID, extra);
      }
    }

  }

  Hidoo.FB_CHECKER_INFO = {
    lock: false,
    interval: 300,
    timmer: null
  };

  Hidoo.fbChecker = function () {
    if (!window.fbq) return;
    if (Hidoo.FB_CHECKER_INFO.lock) return;
    Hidoo.FB_CHECKER_INFO.lock = true;
    const now = Date.now();
    Hidoo.FB_CHECKER_INFO.timmer = setInterval(() => {
      if (Cookies.get('_fbp')) {
        clearInterval(Hidoo.FB_CHECKER_INFO.timmer);
        window.HdSdk && window.HdSdk.shopTracker.report('93000000', {
          _start: now,
          _end: Date.now(),
          _duration: Date.now() - now,
          _fbq: window.fbq.version,
          iframe_id: 1,
          ...Hidoo.getFbParams()
        }, ...reportCommonParams);
      }
    }, Hidoo.FB_CHECKER_INFO.interval);
  };

  Hidoo.getFbParams = function () {
    const re = {
      iframe_id: 1
    };
    ['c_user', '_fbp', '_fbc'].forEach(key => {
      re[key] = Cookies.get(key) || '';
    });
    return re;
  };

  _exports.default = new Hidoo();
  return _exports;
}();