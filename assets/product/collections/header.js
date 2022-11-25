window.SLM = window.SLM || {};

window.SLM['product/collections/header.js'] = window.SLM['product/collections/header.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Banner = window['SLM']['product/collections/js/banner.js'].default;

  class CollectionsHeader {
    constructor() {
      const collectionsBanner = new Banner();
      collectionsBanner.init();
      this.instance = collectionsBanner;
    }

    onUnload() {
      if (this.instance) {
        this.instance.destroy();
      }
    }

  }

  _exports.default = CollectionsHeader;
  registrySectionConstructor('collections-header', CollectionsHeader);
  return _exports;
}();