window.SLM = window.SLM || {};

window.SLM['stage/announcement-bar/index.js'] = window.SLM['stage/announcement-bar/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];

  class AnnouncementBar {
    onUnload() {}

  }

  AnnouncementBar.type = 'announcement-bar';
  registrySectionConstructor(AnnouncementBar.type, AnnouncementBar);
  return _exports;
}();