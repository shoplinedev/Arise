window.SLM = window.SLM || {};

window.SLM['commons/base/ScriptLoad.js'] = window.SLM['commons/base/ScriptLoad.js'] || function () {
  const _exports = {};
  const ScriptLoad = window['SLM']['theme-shared/utils/scriptLoad/index.js'].default;
  window.__loaded_js__ = new ScriptLoad();
  return _exports;
}();