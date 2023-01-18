window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/sectionsLoad/index.js'] = window.SLM['theme-shared/utils/sectionsLoad/index.js'] || function () {
  const _exports = {};

  class SectionsLoad {
    constructor() {
      this.sectionInstances = new Map();
      this.constructorMap = new Map();
      window.document.addEventListener('shopline:section:load', this._onSectionLoad.bind(this));
      window.document.addEventListener('shopline:section:unload', this._onSectionUnload.bind(this));
      window.document.addEventListener('shopline:section:select', this._onSectionSelect.bind(this));
      window.document.addEventListener('shopline:section:deselect', this._onSectionDeselect.bind(this));
      window.document.addEventListener('shopline:block:select', this._onBlockSelect.bind(this));
      window.document.addEventListener('shopline:block:deselect', this._onBlockDeselect.bind(this));
    }

    _createInstace(container, constructorParam) {
      const id = container.data('section-id');
      if (!id) return;
      const constructor = constructorParam || this.constructorMap.get(container.data('section-type'));
      if (typeof constructor !== 'function') return;
      this.sectionInstances.set(id, new constructor(container));
    }

    _onSectionLoad(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onUnload === 'function') {
          instance.onUnload.call(instance);
        }
      }

      const $container = $(`[data-section-id='${sectionId}']`);

      if ($container.length) {
        this._createInstace($container);
      }
    }

    _onSectionUnload(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onUnload === 'function') {
          instance.onUnload.call(instance);
          this.sectionInstances.delete(sectionId);
        }
      }
    }

    _onSectionSelect(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onSectionSelect === 'function') {
          instance.onSectionSelect(e);
        }
      }
    }

    _onSectionDeselect(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onSectionDeselect === 'function') {
          instance.onSectionDeselect(e);
        }
      }
    }

    _onBlockSelect(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onBlockSelect === 'function') {
          instance.onBlockSelect(e);
        }
      }
    }

    _onBlockDeselect(e) {
      const {
        sectionId
      } = e.detail;

      if (this.sectionInstances.has(sectionId)) {
        const instance = this.sectionInstances.get(sectionId);

        if (typeof instance.onBlockDeselect === 'function') {
          instance.onBlockDeselect(e);
        }
      }
    }

  }

  window.__section_load__ = new SectionsLoad();

  const registrySectionConstructor = (type, constructor) => {
    if (window.__section_load__.constructorMap.get(type)) return;

    window.__section_load__.constructorMap.set(type, constructor);

    const $sections = $(`[data-section-type='${type}']`);
    $sections.each(function () {
      const $container = $(this);

      window.__section_load__._createInstace($container, constructor);
    });
  };

  _exports.registrySectionConstructor = registrySectionConstructor;
  return _exports;
}();