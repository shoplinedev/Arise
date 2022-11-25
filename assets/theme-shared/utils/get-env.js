window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/get-env.js'] = window.SLM['theme-shared/utils/get-env.js'] || function () {
  const _exports = {};

  function getEnv(key) {
    const ENV = window.__ENV__ || {};
    if (key) return ENV[key];
    return ENV;
  }

  _exports.default = getEnv;
  return _exports;
}();