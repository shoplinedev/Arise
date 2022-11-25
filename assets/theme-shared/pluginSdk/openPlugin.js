window.SLM = window.SLM || {};

window.SLM['theme-shared/pluginSdk/openPlugin.js'] = window.SLM['theme-shared/pluginSdk/openPlugin.js'] || function () {
  const _exports = {};

  if (!window.SL_OpenPlugin) {
    const openPlugin = {};
    Object.defineProperty(openPlugin, 'add', {
      value: (pluginName, value, options) => {
        Object.defineProperty(openPlugin, pluginName, {
          value,
          writable: true,
          configurable: true,
          enumerable: true,
          ...options
        });
      }
    });
    Object.defineProperty(window, 'SL_OpenPlugin', {
      value: openPlugin
    });
  }

  return _exports;
}();