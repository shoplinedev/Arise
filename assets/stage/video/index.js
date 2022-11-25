window.SLM = window.SLM || {};

window.SLM['stage/video/index.js'] = window.SLM['stage/video/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Video = window['SLM']['stage/video/utils/video.js'].default;
  registrySectionConstructor(Video.type, Video);
  return _exports;
}();