window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/utils/loadScript.js'] = window.SLM['theme-shared/biz-com/orderTracking/utils/loadScript.js'] || function () {
  const _exports = {};

  const loadScript = url => {
    if (loadScript.instance && loadScript.instance[url]) {
      return loadScript.instance[url];
    }

    const scriptRequest = new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      scriptElement.crossOrigin = 'anonymous';

      scriptElement.onload = () => resolve();

      scriptElement.onerror = err => {
        if (loadScript.instance && loadScript.instance[url]) {
          delete loadScript.instance[url];
        }

        reject(err);
      };

      document.body.appendChild(scriptElement);
    });

    if (!loadScript.instance) {
      loadScript.instance = {
        [url]: scriptRequest
      };
    } else {
      loadScript.instance[url] = scriptRequest;
    }

    return scriptRequest;
  };

  _exports.loadScript = loadScript;
  loadScript.instance = {};
  return _exports;
}();