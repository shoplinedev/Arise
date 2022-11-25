window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/sku/DataWatcher.js'] = window.SLM['theme-shared/utils/sku/DataWatcher.js'] || function () {
  const _exports = {};

  class DataWatcher {
    constructor() {
      Object.defineProperty(this, '$watcher', {
        value: {}
      });
      Object.defineProperty(this, '$afterWatcher', {
        value: {}
      });
      Object.defineProperty(this, '$data', {
        value: {}
      });

      const bindWatcher = type => (keys, callback) => {
        const props = {};
        keys.forEach(key => {
          if (!this.$watcher[key]) {
            this.$watcher[key] = [];
          }

          if (!this.$afterWatcher[key]) {
            this.$afterWatcher[key] = [];
          }

          if (type === 'watch') {
            this.$watcher[key].push(callback);
          } else if (type === 'watchAfter') {
            this.$afterWatcher[key].push(callback);
          }

          if (Object.prototype.hasOwnProperty.call(this.$data, key)) {
            return;
          }

          this.$data[key] = this[key];
          delete this[key];
          props[key] = {
            set: value => {
              this.$data[key] = value;
              this.$watcher[key].forEach(w => {
                try {
                  w && w(value, key);
                } catch (e) {
                  console.error(e);
                }
              });
              this.$afterWatcher[key].forEach(w => {
                try {
                  w && w(value, key);
                } catch (e) {
                  console.error(e);
                }
              });
            },
            get: () => this.$data[key]
          };
        });
        Object.defineProperties(this, props);
      };

      Object.defineProperty(this, 'watch', {
        value: bindWatcher('watch')
      });
      Object.defineProperty(this, 'watchAfter', {
        value: bindWatcher('watchAfter')
      });
    }

  }

  _exports.default = DataWatcher;
  return _exports;
}();