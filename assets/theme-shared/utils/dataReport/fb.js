window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/fb.js'] = window.SLM['theme-shared/utils/dataReport/fb.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { PageType, ClickType } = window['SLM']['theme-shared/utils/report/const.js'];
  const { getCurrencyCode } = window['SLM']['theme-shared/utils/dataReport/tool.js'];

  const clickFbData = (type, params) => {
    let value = null;
    let event = null;
    let evid = null;
    let res = [];

    switch (type) {
      case ClickType.AddToCart:
        value = {
          content_type: 'product_group',
          content_category: params && params.category,
          content_ids: params && params.skuId,
          content_name: params && params.name,
          value: params && params.price,
          currency: nullishCoalescingOperator(params && params.currency, getCurrencyCode())
        };
        event = 'AddToCart';
        evid = {
          eventID: params && params.eventId
        };
        res.push(['track', event, value, evid]);
        break;

      default:
        res = [];
    }

    return res;
  };

  const loadFbData = (page, params) => {
    let res = [];

    switch (page) {
      case PageType.OrderConfirm:
        res.push(['track', 'Purchase', {
          content_type: 'product_group',
          content_ids: params && params.skuIds,
          value: params && params.amount,
          quantity: params && params.quantity,
          currency: nullishCoalescingOperator(params && params.currency, getCurrencyCode())
        }, {
          eventID: params && params.eventId
        }]);
        break;

      default:
        res = [];
        break;
    }

    return res;
  };

  _exports.clickFbData = clickFbData;
  _exports.loadFbData = loadFbData;
  return _exports;
}();