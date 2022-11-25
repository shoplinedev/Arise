window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/gar.js'] = window.SLM['theme-shared/utils/dataReport/gar.js'] || function () {
  const _exports = {};
  const { PageType } = window['SLM']['theme-shared/utils/report/const.js'];
  const tool = window['SLM']['theme-shared/utils/dataReport/tool.js'].default;
  const {
    realSku
  } = tool;

  const getItems = (params, GARemarketingOrGAR) => {
    return params.items && params.items.map(value => {
      const {
        skuId
      } = value;

      if (GARemarketingOrGAR === 'GARemarketing') {
        return realSku({
          skuId,
          isMetafields: true
        });
      }

      return {
        id: realSku({
          skuId,
          isMetafields: true
        }),
        google_business_vertical: 'retail'
      };
    });
  };

  const loadGarData = (page, params, GARemarketingOrGAR) => {
    let value = null;
    const data = [];

    switch (page) {
      case PageType.OrderConfirm:
        if (GARemarketingOrGAR === 'GARemarketing') {
          value = {
            ecomm_totalvalue: params.amount,
            ecomm_prodid: getItems(params, GARemarketingOrGAR),
            ecomm_pagetype: 'purchase'
          };
        } else {
          value = {
            value: params.amount,
            items: getItems(params, GARemarketingOrGAR)
          };
        }

        break;

      default:
        return [];
    }

    data.push(['event', 'purchase', value]);
    return data;
  };

  _exports.loadGarData = loadGarData;
  return _exports;
}();