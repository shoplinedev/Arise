window.SLM = window.SLM || {};

window.SLM['stage/map/index.js'] = window.SLM['stage/map/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const selectors = {
    iframe: '.sl-map__iframe'
  };

  class SlMap {
    constructor(container) {
      this.container = container;
      this.init();
    }

    init() {
      this.addLocaleChangeHandleTo();
    }

    addLocaleChangeHandleTo() {
      const {
        container
      } = this;
      const {
        google_api_secret_key,
        address
      } = window.SL_State.get('shoplineMap.settings') || {};
      window.SL_State.on('request.locale', locale => {
        container.find(selectors.iframe).attr('src', `https://www.google.com/maps/embed/v1/place?key=${google_api_secret_key}&q=${encodeURIComponent(address)}&language=${locale}`);
      });
    }

    destroy() {}

  }

  class SlMapSection {
    constructor(container) {
      if (!container.find(selectors.iframe).length) return;
      this.instance = new SlMap(container);
    }

    onUnload() {
      if (this.instance) {
        this.instance.destroy();
      }
    }

  }

  _exports.default = SlMapSection;
  SlMapSection.type = 'map';
  registrySectionConstructor(SlMapSection.type, SlMapSection);
  return _exports;
}();