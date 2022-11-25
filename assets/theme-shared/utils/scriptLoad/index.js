window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/scriptLoad/index.js'] = window.SLM['theme-shared/utils/scriptLoad/index.js'] || function () {
  const _exports = {};

  class ScriptLoad {
    constructor() {
      this.jsUrlList = {};
    }

    set(url) {
      if (this.jsUrlList[url]) {
        return;
      }

      this.jsUrlList[url] = url;
      ScriptLoad.loadScript(url);
    }

    static loadScript(url) {
      this.creatScriptTag(url);
    }

    static creatScriptTag(url) {
      const script = document.createElement('script');
      script.src = url;
      script.defer = false;
      script.async = false;

      script.onerror = err => {
        console.error(`asset file ${url} loading error`, err);
      };

      const handler = () => {
        document.body.appendChild(script);
      };

      if (document.readyState === 'complete') {
        handler();
      } else {
        document.addEventListener('DOMContentLoaded', handler);

        script.onload = () => {
          document.removeEventListener('DOMContentLoaded', handler);
        };
      }

      return script;
    }

  }

  _exports.default = ScriptLoad;
  return _exports;
}();