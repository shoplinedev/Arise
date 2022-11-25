window.SLM = window.SLM || {};

window.SLM['commons/components/modal/common.js'] = window.SLM['commons/components/modal/common.js'] || function () {
  const _exports = {};
  const { disablePageScroll, enablePageScroll, addLockableTarget } = window['SLM']['theme-shared/components/hbs/shared/components/modal/common.js'];
  _exports.disablePageScroll = disablePageScroll;
  _exports.enablePageScroll = enablePageScroll;
  _exports.addLockableTarget = addLockableTarget;
  return _exports;
}();