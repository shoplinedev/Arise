window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/components/modal/common.js'] = window.SLM['theme-shared/components/hbs/shared/components/modal/common.js'] || function () {
  const _exports = {};
  const createNamespace = window['SLM']['theme-shared/components/hbs/shared/utils/bem.js'].default;
  const { disablePageScroll, enablePageScroll, addLockableTarget } = window['scroll-lock'];
  _exports.disablePageScroll = disablePageScroll;
  _exports.enablePageScroll = enablePageScroll;
  _exports.addLockableTarget = addLockableTarget;
  const bem = createNamespace('mp', 'modal');
  _exports.bem = bem;
  const DEFAULT_MODAL_ID_PRE = 'MpModal';
  _exports.DEFAULT_MODAL_ID_PRE = DEFAULT_MODAL_ID_PRE;
  const VISIBLE = 'visible';
  _exports.VISIBLE = VISIBLE;
  const HIDDEN = 'hidden';
  _exports.HIDDEN = HIDDEN;
  const animationClassMap = {
    visible: bem('visibleAnimation'),
    hidden: bem('notVisibleAnimation')
  };
  _exports.animationClassMap = animationClassMap;
  const visibleClassName = bem('visible');
  _exports.visibleClassName = visibleClassName;
  const maskClosableClass = bem('closable');
  _exports.maskClosableClass = maskClosableClass;
  return _exports;
}();