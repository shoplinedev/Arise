window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lozad/index.js'] = window.SLM['theme-shared/utils/lozad/index.js'] || function () {
  const _exports = {};
  const lozad = window['SLM']['theme-shared/utils/lozad/core.js'].default;
  const normalPlugin = window['SLM']['theme-shared/utils/lozad/plugins/normal.js'].default;
  const imageGifPosterPlugin = window['SLM']['theme-shared/utils/lozad/plugins/image-gif-poster.js'].default;
  lozad.use(normalPlugin);
  lozad.use(imageGifPosterPlugin);
  _exports.default = lozad;
  return _exports;
}();