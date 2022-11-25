window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/storage/index.js'] = window.SLM['cart/script/domain/adapter/storage/index.js'] || function () {
  const _exports = {};
  const constant = window['SLM']['cart/script/domain/adapter/storage/constant.js'].default;

  class Storage {
    constructor(config) {
      this.prefix = constant.KEY_PREFIX;
      this.config = config;
    }

    setItem(key, value) {
      if (value == null) {
        localStorage.removeItem(this.withKey(key));
      } else {
        localStorage.setItem(this.withKey(key), value);
      }
    }

    getItem(key) {
      return localStorage.getItem(this.withKey(key));
    }

    withKey(key) {
      return `${this.prefix}.${key}`;
    }

  }

  let globalStorage = new Storage();

  function withStorage(config) {
    globalStorage = new Storage(config);
  }

  function takeStorage() {
    return globalStorage;
  }

  _exports.default = {
    withStorage,
    takeStorage
  };
  return _exports;
}();