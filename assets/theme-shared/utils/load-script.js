window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/load-script.js'] = window.SLM['theme-shared/utils/load-script.js'] || function () {
  const _exports = {};
  const isObject = window['lodash']['isObject'];

  const loadScript = (src, options) => {
    return new Promise(resolve => {
      const scriptTag = document.createElement('script');
      scriptTag.src = src;

      if (options && isObject(options)) {
        Object.entries(options).forEach(([key, value]) => {
          scriptTag[key] = value;
        });
      }

      const handler = () => {
        scriptTag.removeEventListener('load', handler);
        resolve();
      };

      scriptTag.addEventListener('load', handler);

      if (document.head) {
        document.head.appendChild(scriptTag);
      }
    });
  };

  _exports.default = loadScript;
  return _exports;
}();