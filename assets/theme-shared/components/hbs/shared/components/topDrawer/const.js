window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/topDrawer/const.js'] = window.SLM['theme-shared/components/hbs/shared/components/topDrawer/const.js'] || function () {
  const _exports = {};
  const DRAWER_EVENT_NAME = 'stage:topDrawer';
  _exports.DRAWER_EVENT_NAME = DRAWER_EVENT_NAME;
  const DRAWER_CALLBACK_EVENT_NAME = 'stage:topDrawer:callback';
  _exports.DRAWER_CALLBACK_EVENT_NAME = DRAWER_CALLBACK_EVENT_NAME;
  const DRAWER_OPERATORS = {
    OPEN: 'open',
    CLOSE: 'close'
  };
  _exports.DRAWER_OPERATORS = DRAWER_OPERATORS;
  return _exports;
}();