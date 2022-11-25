window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/collection-item.js'] = window.SLM['theme-shared/report/product/collection-item.js'] || function () {
  const _exports = {};
  const { BaseReport } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const collectionItemCls = '.__sl-custom-track-collection-item';
  _exports.collectionItemCls = collectionItemCls;

  const fcNull = () => {
    return undefined;
  };

  class CollectionItemReport extends BaseReport {
    constructor({
      selector,
      reportTargetCb
    }) {
      super();
      this.map = {
        101: {
          component: 101,
          module: 900
        },
        174: {
          component: 110,
          module: -999
        }
      };
      this.currentData = this.map[this.page];
      this.selector = selector || collectionItemCls;
      this.reportTargetCb = reportTargetCb || fcNull;
      this.bindClick();
      this.bindExpose();
    }

    bindClick() {
      const __this = this;

      $('body').on('click', __this.selector, function () {
        const _this = $(this);

        const id = _this.attr('data-sortation-id');

        __this.click({
          collection_id: id,
          ...__this.currentData,
          ...__this.reportTargetCb(_this.get(0))
        });
      });
    }

    bindExpose() {
      const __this = this;

      __this.view({
        selector: `${__this.selector}`,
        customParams: target => {
          const {
            sortationId
          } = target.dataset || {};
          return {
            collection_id: sortationId,
            ...__this.currentData,
            ...__this.reportTargetCb(target)
          };
        }
      });
    }

  }

  function initCollectionItemReport({
    selector,
    reportTargetCb
  } = {}) {
    const report = new CollectionItemReport({
      selector,
      reportTargetCb
    });
    return report;
  }

  _exports.initCollectionItemReport = initCollectionItemReport;
  _exports.default = CollectionItemReport;
  return _exports;
}();