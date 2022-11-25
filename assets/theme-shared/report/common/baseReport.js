window.SLM = window.SLM || {};

window.SLM['theme-shared/report/common/baseReport.js'] = window.SLM['theme-shared/report/common/baseReport.js'] || function () {
  const _exports = {};
  const pageMap = window['SLM']['theme-shared/utils/report/page.js'].default;
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];

  function findSectionId(selector) {
    if (!selector || !$(selector)) {
      return;
    }

    const id = $(selector).closest('.shopline-section').attr('id');
    const trueId = id ? id.replace('shopline-section-', '') : '';
    return trueId;
  }

  _exports.findSectionId = findSectionId;

  class BaseReport {
    static getPage() {
      const alias = window.SL_State.get('templateAlias');
      const template = window.SL_State.get('template');

      if (alias !== 'Page') {
        return pageMap[alias] || alias;
      }

      const isCustomPage = template.toLowerCase() === alias.toLowerCase();
      return isCustomPage ? pageMap.Page.custom_page : pageMap.Page.smart_landing_page;
    }

    constructor(page) {
      this.page = page || BaseReport.getPage() || '';
    }

    static collect(params) {
      if (!window.HdSdk) {
        return;
      }

      window.HdSdk.shopTracker.collect(params);
    }

    static expose(params) {
      if (!window.HdSdk) {
        return;
      }

      window.HdSdk.shopTracker.expose(params);
    }

    click(customParams) {
      if (!window.HdSdk) {
        return;
      }

      const params = {
        page: this.page,
        action_type: 102,
        event_name: 'Click',
        ...customParams
      };
      window.HdSdk.shopTracker.collect(params);
    }

    handleView({
      selector,
      targetList,
      threshold,
      duration,
      reportOnce,
      customParams,
      viewType = 'view'
    }) {
      if (!window.HdSdk) {
        return;
      }

      const commonParams = {
        page: this.page
      };
      const objectParams = { ...commonParams,
        ...customParams
      };

      const funcParams = target => {
        const funcCustomParams = customParams(target);
        return { ...commonParams,
          ...funcCustomParams
        };
      };

      window.HdSdk.shopTracker.expose({
        selector,
        targetList,
        [viewType]: {
          reportOnce,
          threshold,
          duration,
          params: typeof customParams === 'function' ? funcParams : objectParams
        }
      });
    }

    view({
      selector,
      targetList,
      reportOnce = true,
      duration,
      threshold,
      customParams
    }) {
      this.handleView({
        selector,
        targetList,
        reportOnce,
        duration,
        threshold,
        customParams,
        viewType: 'view'
      });
    }

    viewSuccess({
      selector,
      targetList,
      threshold = 0.5,
      duration = 500,
      reportOnce = true,
      customParams
    }) {
      this.handleView({
        selector,
        targetList,
        reportOnce,
        duration,
        threshold,
        customParams,
        viewType: 'viewSuccess'
      });
    }

    viewContent({
      selector,
      targetList,
      reportOnce,
      threshold,
      customParams
    }) {
      const params = {
        component: -999,
        event_name: 'ViewContent',
        action_type: 'ViewContent',
        ...customParams
      };
      this.view({
        selector,
        targetList,
        reportOnce,
        threshold,
        customParams: params
      });
    }

    viewItemList({
      selector,
      customParams
    }) {
      const params = {
        page: this.page,
        module: -999,
        component: -999,
        action_type: '',
        event_name: 'ViewItemList',
        event_id: `ViewItemList${getEventID()}`,
        ...customParams
      };
      this.view({
        selector,
        customParams: params
      });
    }

    selectContent({
      baseParams,
      customParams
    }) {
      const pageItemMap = {
        101: {
          module: 900,
          component: 101
        },
        102: {
          module: 109,
          component: 101,
          action_type: ''
        },
        103: {
          module: 109,
          component: 101
        },
        105: {
          module: 108,
          component: 101
        }
      };
      const params = {
        page: this.page,
        event_name: 'SelectContent',
        current_source_page: BaseReport.getPage(),
        ...pageItemMap[this.page],
        ...baseParams,
        ...customParams
      };
      BaseReport.collect(params);
    }

    searchResults({
      baseParams,
      customParams
    }) {
      const params = {
        page: this.page,
        module: -999,
        component: -999,
        action_type: '',
        event_name: 'SearchResults',
        ...baseParams,
        ...customParams
      };
      BaseReport.collect(params);
    }

  }

  _exports.BaseReport = BaseReport;
  return _exports;
}();