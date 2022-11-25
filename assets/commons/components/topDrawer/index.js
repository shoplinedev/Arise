window.SLM = window.SLM || {};

window.SLM['commons/components/topDrawer/index.js'] = window.SLM['commons/components/topDrawer/index.js'] || function () {
  const _exports = {};
  const TopDrawer = window['SLM']['theme-shared/components/hbs/shared/components/topDrawer/index.js'].default;
  const { DRAWER_EVENT_NAME, DRAWER_CALLBACK_EVENT_NAME, DRAWER_OPERATORS } = window['SLM']['theme-shared/components/hbs/shared/components/topDrawer/const.js'];
  _exports.DRAWER_EVENT_NAME = DRAWER_EVENT_NAME;
  _exports.DRAWER_CALLBACK_EVENT_NAME = DRAWER_CALLBACK_EVENT_NAME;
  _exports.DRAWER_OPERATORS = DRAWER_OPERATORS;
  _exports.default = TopDrawer;
  return _exports;
}();