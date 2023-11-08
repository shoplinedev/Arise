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
  class Hidoo {
    init() {
      return this;
    }
    load() {
      return this;
    }
    report() {}
  }
  Hidoo.FB_CHECKER_INFO = {
    lock: false,
    interval: 300,
    timmer: null
  };
  Hidoo.fbChecker = function () {};
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