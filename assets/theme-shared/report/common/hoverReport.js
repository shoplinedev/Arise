window.SLM = window.SLM || {};

window.SLM['theme-shared/report/common/hoverReport.js'] = window.SLM['theme-shared/report/common/hoverReport.js'] || function () {
  const _exports = {};
  const { findSectionId } = window['SLM']['theme-shared/report/common/baseReport.js'];

  class HoverReport {
    constructor({
      selector,
      params
    }) {
      this.$el = $(selector);
      this.params = params;
      this.init();
    }

    init() {
      this.bindMouseenter();
    }

    bindMouseenter() {
      this.$el.on('mouseenter', e => {
        const $target = $(e.target);
        const isTarget = $target.attr('class') === this.$el.attr('class');

        if (!isTarget) {
          return;
        }

        const params = { ...this.params,
          component_ID: findSectionId(e.target)
        };
        window.HdSdk && window.HdSdk.shopTracker.collect(params);
        this.changed = false;
      });
    }

  }

  _exports.HoverReport = HoverReport;
  return _exports;
}();