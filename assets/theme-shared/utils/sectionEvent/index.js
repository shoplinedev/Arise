window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/sectionEvent/index.js'] = window.SLM['theme-shared/utils/sectionEvent/index.js'] || function () {
  const _exports = {};
  const EventEnum = {
    SECTION_UNLOAD: 'shopline:section:unload',
    SECTION_SELECT: 'shopline:section:select',
    SECTION_DESELECT: 'shopline:section:deselect',
    BLOCK_SELECT: 'shopline:block:select',
    BLOCK_DESELECT: 'shopline:block:deselect'
  };
  const MappingEnum = {
    'shopline:section:unload': 'onSectionUnload',
    'shopline:section:select': 'onSectionSelect',
    'shopline:section:deselect': 'onSectionDeselect',
    'shopline:block:select': 'onBlockSelect',
    'shopline:block:deselect': 'onBlockDeselect'
  };

  class SectionEvent {
    constructor() {
      this.instancesEventMap = new Map();
      window.document.addEventListener(EventEnum.SECTION_UNLOAD, this.sectionEvent.bind(this));
      window.document.addEventListener(EventEnum.SECTION_SELECT, this.sectionEvent.bind(this));
      window.document.addEventListener(EventEnum.SECTION_DESELECT, this.sectionEvent.bind(this));
      window.document.addEventListener(EventEnum.BLOCK_SELECT, this.sectionEvent.bind(this));
      window.document.addEventListener(EventEnum.BLOCK_DESELECT, this.sectionEvent.bind(this));
    }

    sectionEvent(e) {
      const {
        sectionId
      } = e.detail;

      if (this.instancesEventMap.has(sectionId)) {
        const instances = this.instancesEventMap.get(sectionId);

        if (instances) {
          const funType = MappingEnum[e.type];

          if (funType && typeof instances[funType] === 'function') {
            instances[funType](e);
          }
        }

        if (e.type === EventEnum.SECTION_UNLOAD) {
          this.instancesEventMap.delete(sectionId);
        }
      }
    }

  }

  const instanceSectionEvent = new SectionEvent();

  const registrySectionReadyEvent = (sectionId, data) => {
    if (sectionId) {
      instanceSectionEvent.instancesEventMap.set(sectionId, data);
    }
  };

  _exports.registrySectionReadyEvent = registrySectionReadyEvent;
  return _exports;
}();