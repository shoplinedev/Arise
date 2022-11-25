window.SLM = window.SLM || {};

window.SLM['theme-shared/report/stage/index.js'] = window.SLM['theme-shared/report/stage/index.js'] || function () {
  const _exports = {};
  const { BaseReport, findSectionId } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { InputReport } = window['SLM']['theme-shared/report/common/inputReport.js'];
  const { HoverReport } = window['SLM']['theme-shared/report/common/hoverReport.js'];
  const { sectionTypeEnum } = window['SLM']['theme-shared/report/stage/const.js'];

  class StageReport extends BaseReport {
    constructor() {
      super();
      this.defaultParams = {
        current_source_page: BaseReport.getPage()
      };
      this.inputReportMap = {};
      this.hoverReportMap = {};
    }

    click(params) {
      super.click({ ...this.defaultParams,
        ...params
      });
    }

    expose({
      selector,
      moreInfo
    }) {
      const $els = $(selector);

      if (!$els.length) {
        return;
      }

      const paramsFn = target => {
        const id = findSectionId(target);
        const params = {
          component_ID: id,
          ...this.defaultParams,
          ...moreInfo
        };
        return params;
      };

      const view = {
        reportOnce: true,
        threshold: 0,
        params: paramsFn
      };
      const viewSuccess = {
        reportOnce: true,
        threshold: 0.5,
        duration: 500,
        params: paramsFn
      };
      BaseReport.expose({
        targetList: document.querySelectorAll(selector),
        view,
        viewSuccess
      });
    }

    bindFallbackClick({
      wrapperSel,
      targetSel,
      fallbackSel,
      moreInfo
    }) {
      $(wrapperSel).on('click', e => {
        const id = findSectionId(e.target);
        const params = {
          component_ID: id,
          ...this.defaultParams,
          ...moreInfo
        };
        const $target = $(e.target);
        const $wrapper = $target.closest(wrapperSel);
        const hasTarget = $wrapper.find(targetSel).length > 0;
        const clickOnTarget = $target.closest(targetSel).length > 0;
        const clickOnFallback = $target.closest(fallbackSel).length > 0;

        if (hasTarget && !clickOnTarget) {
          return;
        }

        if (!hasTarget && clickOnFallback) {
          this.click(params);
          return;
        }

        if (clickOnTarget) {
          this.click(params);
        }
      });
    }

    bindClick({
      selector,
      moreInfo,
      customHandler
    }) {
      if (!selector) {
        return;
      }

      $(document.body).on('click', selector, e => {
        const id = findSectionId(e.target);
        const params = {
          component_ID: id,
          ...this.defaultParams,
          ...moreInfo
        };

        if (customHandler) {
          customHandler(e, params);
        } else {
          this.click(params);
        }
      });
    }

    bindInput({
      selector,
      type = '',
      moreInfo
    }) {
      const params = { ...this.defaultParams,
        module_type: sectionTypeEnum[type] || type,
        action_type: 103,
        event_name: 'Input',
        ...moreInfo
      };
      const instance = new InputReport({
        selector,
        params
      });
      this.inputReportMap[selector] = instance;
    }

    bindHover({
      selector,
      type = ''
    }) {
      const params = { ...this.defaultParams,
        module_type: sectionTypeEnum[type] || type,
        action_type: 109,
        event_name: 'Hover'
      };
      const instance = new HoverReport({
        selector,
        params
      });
      this.hoverReportMap[selector] = instance;
    }

    collect(params) {
      window.HdSdk && window.HdSdk.shopTracker.collect({ ...this.defaultParams,
        ...params
      });
    }

  }

  _exports.StageReport = StageReport;
  return _exports;
}();