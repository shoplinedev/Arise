window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/productDetailDataBus.js'] = window.SLM['theme-shared/utils/productDetailDataBus.js'] || function () {
  const _exports = {};

  function ProductDetailDataBus() {
    const all = new Map();
    const cacheData = Object.create(null);
    return {
      on(type, handler) {
        const handlers = all.get(type) || [];
        handlers.push(handler);
        all.set(type, handlers);
      },

      off(type, handler) {
        if (all.has(type) && handler) {
          all.get(type).splice(all.get(type).indexOf(handler) >>> 0, 1);
        } else {
          all.set(type, []);
        }
      },

      emit(type, evt) {
        (all.get(type) || []).slice().forEach(handler => {
          handler(evt);
        });
      },

      set(key, value) {
        cacheData[key] = value;
      },

      get(key) {
        return cacheData[key] || '';
      }

    };
  }

  if (!window.productDetailDataBus) {
    window.productDetailDataBus = ProductDetailDataBus();
  }

  const {
    productDetailDataBus
  } = window;
  _exports.productDetailDataBus = productDetailDataBus;
  _exports.default = ProductDetailDataBus;
  return _exports;
}();