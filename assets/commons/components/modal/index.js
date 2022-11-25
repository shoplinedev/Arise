window.SLM = window.SLM || {};

window.SLM['commons/components/modal/index.js'] = window.SLM['commons/components/modal/index.js'] || function () {
  const _exports = {};
  const { default: _default } = window['SLM']['commons/components/modal/lite.js'];
  _exports.default = _default;
  const { default: ModalWithHtml } = window['SLM']['commons/components/modal/full.js'];
  _exports.ModalWithHtml = ModalWithHtml;
  return _exports;
}();