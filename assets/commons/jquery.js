window.SLM = window.SLM || {};

window.SLM['commons/jquery.js'] = window.SLM['commons/jquery.js'] || function () {
  const _exports = {};
  const jquery = window['jquery']['default'];
  const Tooltip = window['SLM']['commons/components/tooltip/index.js'].default;
  window.$ = jquery;
  window.jQuery = jquery;
  Tooltip.install(window.$);
  return _exports;
}();