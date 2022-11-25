window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataAccessor.js'] = window.SLM['theme-shared/utils/dataAccessor.js'] || function () {
  const _exports = {};

  function getSyncData(key) {
    if (!window.__SL_BUSINESS_DATA__) return null;
    return window.__SL_BUSINESS_DATA__[key] || null;
  }

  function setSyncData(payload) {
    if (!window.__SL_BUSINESS_DATA__) window.__SL_BUSINESS_DATA__ = {};
    Object.keys(payload).forEach(key => {
      window.__SL_BUSINESS_DATA__[key] = payload[key];
    });
  }

  _exports.getSyncData = getSyncData;
  _exports.setSyncData = setSyncData;
  return _exports;
}();