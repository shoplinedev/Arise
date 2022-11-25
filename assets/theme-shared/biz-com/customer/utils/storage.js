window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/utils/storage.js'] = window.SLM['theme-shared/biz-com/customer/utils/storage.js'] || function () {
  const _exports = {};
  const isPlainObject = window['lodash']['isPlainObject'];
  const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined';

  function getStorage(storageName) {
    return {
      get(key) {
        if (!isBrowser) {
          return;
        }

        const storage = window[storageName];
        const numRe = /^\d+$/;
        const jsonRe = /(^\{.*\}$)|(^\[.*\]$)/;
        const boolRe = /^(true|false|null)$/;
        let val = storage.getItem(key);

        try {
          if (typeof val === 'string' && val && (numRe.test(val) || boolRe.test(val) || jsonRe.test(val))) {
            val = JSON.parse(val);
          }
        } catch (e) {
          console.warn('json.parse storage value err:', e);
          val = {};
        }

        return val;
      },

      set(key, val) {
        if (!isBrowser) {
          return;
        }

        let value = val;

        if (isPlainObject(value) || value instanceof Array) {
          value = JSON.stringify(value);
        }

        const storage = window[storageName];
        storage[key] = value;
      },

      del(key) {
        if (!isBrowser) {
          return;
        }

        const storage = window[storageName];
        storage.removeItem(key);
      }

    };
  }

  const [sessionStorage, localStorage] = ['sessionStorage', 'localStorage'].map(getStorage);
  const utils = {
    sessionStorage,
    localStorage
  };
  _exports.default = utils;
  return _exports;
}();