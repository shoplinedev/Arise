window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/tradeReport/tradehReport.js'] = window.SLM['theme-shared/utils/tradeReport/tradehReport.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { paramsMapping, paramsMappingToArrayKeys } = window['SLM']['theme-shared/utils/report/hd-const.js'];

  class TradeHdReport {
    constructor() {
      this.paramsMapping = paramsMapping;
      this.paramsMappingToArrayKeys = paramsMappingToArrayKeys;
    }

    setReportContent(params) {
      const reportContent = { ...params
      };
      const that = this;

      if (reportContent.products && Array.isArray(reportContent.products)) {
        const keys = ['product_type', 'product_id', 'variantion_id', 'product_name', 'product_price', 'position', 'status', 'quantity', 'update_quantity', 'price'];
        reportContent.products.forEach(spu => {
          keys.forEach(key => {
            if (spu[key]) {
              if (!reportContent[key]) {
                reportContent[key] = [];
              }

              reportContent[key].push(spu[key]);
            }
          });
        });
        delete reportContent.products;
      }

      Object.entries(reportContent).forEach(([key, value]) => {
        let trueValue = value;

        if (key in that.paramsMapping) {
          if (Array.isArray(value)) {
            if (that.paramsMappingToArrayKeys.indexOf(key) > -1) {
              trueValue = (value || []).map(v => that.paramsMapping[key][v]).join(',');
            }
          } else {
            trueValue = that.paramsMapping[key][value] || value;
          }
        }

        if (Array.isArray(trueValue)) {
          trueValue = trueValue.join(',');
        }

        reportContent[key] = trueValue;
      });
      const data = { ...nullishCoalescingOperator(reportContent, {})
      };
      return data;
    }

    event(reportContent, id) {
      const data = this.setReportContent(reportContent);
      window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report(id, data);
    }

  }

  const hidooRp = new TradeHdReport();
  _exports.hidooRp = hidooRp;
  _exports.TradeHdReport = TradeHdReport;
  return _exports;
}();