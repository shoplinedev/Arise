window.SLM = window.SLM || {};

window.SLM['theme-shared/report/common/inputReport.js'] = window.SLM['theme-shared/report/common/inputReport.js'] || function () {
  const _exports = {};
  const { findSectionId } = window['SLM']['theme-shared/report/common/baseReport.js'];

  class InputReport {
    constructor({
      selector,
      params
    }) {
      this.$el = $(selector);
      this.params = params;
      this.changed = false;
      this.init();
    }

    init() {
      this.bindInput();
      this.bindBlur();
    }

    bindInput() {
      this.$el.on('input', () => {
        this.changed = true;
      });
    }

    bindBlur() {
      this.$el.on('blur', e => {
        if (!this.changed || !window.HdSdk) {
          return;
        }

        const params = { ...this.params,
          component_ID: findSectionId(e.target)
        };
        window.HdSdk.shopTracker.collect(params);
        this.changed = false;
      });
    }

  }

  _exports.InputReport = InputReport;
  return _exports;
}();