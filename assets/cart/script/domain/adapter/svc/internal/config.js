window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/internal/config.js'] = window.SLM['cart/script/domain/adapter/svc/internal/config.js'] || function () {
  const _exports = {};
  const presetConfig = {
    ai: null,

    t(key) {
      return key;
    },

    lang: 'zh-hans-cn'
  };

  function getLangConfig(config) {
    return config && config.lang ? config.lang : presetConfig.lang;
  }

  function getRequest(config) {
    return config.ai;
  }

  _exports.default = {
    getLangConfig,
    getRequest
  };
  return _exports;
}();