window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/report-headless.js'] = window.SLM['theme-shared/utils/report/report-headless.js'] || function () {
  const _exports = {};
  const { onDomReady } = window['SLM']['theme-shared/utils/report/utils.js'];

  function reportHeadless() {
    const report = async () => {
      const detectMap = {
        h_ua: () => {
          return /HeadlessChrome/.test(window.navigator.userAgent);
        },
        h_plugin: () => {
          return navigator.plugins.length === 0;
        },
        h_lang: () => {
          return !navigator.language || !navigator.languages;
        },
        h_webdriver: () => {
          return navigator.webdriver;
        },
        h_chrome: () => {
          return !window.chrome;
        },
        h_WebGL: () => {
          try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl');
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

            if (vendor === 'Brian Paul' && renderer === 'Mesa OffScreen') {
              return true;
            }
          } catch (error) {}

          return false;
        },
        h_hairline: () => {
          let flag = false;

          if (window.devicePixelRatio && devicePixelRatio >= 2) {
            const testElem = document.createElement('div');
            testElem.style.border = '.5px solid transparent';
            document.body.appendChild(testElem);

            if (testElem.offsetHeight === 1) {
              flag = true;
            }

            document.body.removeChild(testElem);
            return flag;
          }

          return flag;
        }
      };
      const result = {};

      try {
        for (const key in detectMap) {
          const flag = await detectMap[key]();
          result[key] = String(+flag);
        }
      } catch (error) {}

      window.HdSdk && window.HdSdk.shopTracker.report('85000101', result);
      window.removeEventListener('DOMContentLoaded', report);
    };

    onDomReady(report);
  }

  _exports.default = reportHeadless;
  return _exports;
}();