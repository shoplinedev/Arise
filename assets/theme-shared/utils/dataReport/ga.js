window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/ga.js'] = window.SLM['theme-shared/utils/dataReport/ga.js'] || function () {
  const _exports = {};
  const { PageType, ClickType, eventType } = window['SLM']['theme-shared/utils/report/const.js'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { getCurrencyCode } = window['SLM']['theme-shared/utils/dataReport/tool.js'];

  class GoogleAnalysis {
    constructor(config) {
      this.config = config;
    }

    sendEventLog(eventType, data) {
      const params = { ...data
      };

      if (params && !params.currency) {
        params.currency = getCurrencyCode();
      }

      return ['event', eventType, params];
    }

    clickForEnhancedEcom(page, clickType, params) {
      let event;
      let value;
      let res = [];

      switch (clickType) {
        case PageType.CheckoutProgress:
        case PageType.PlaceOrder:
          event = eventType.SetCheckoutOption;
          value = {
            value: params.amount,
            checkout_step: params.step
          };
          break;

        default:
          return res;
      }

      res = this.sendEventLog(event, value);
      return res;
    }

    click(page, type, params) {
      let value;
      let event;
      const res = [];

      switch (type) {
        case ClickType.SelectContent:
          event = eventType.SelectContent;
          value = {
            content_type: 'product',
            items: [{
              id: params.skuId,
              name: params.name,
              price: params.price,
              variant: params.variant,
              category: params.customCategoryName
            }]
          };
          break;

        case ClickType.AddToCart:
          event = eventType.AddToCart;
          value = {
            items: [{
              id: params.skuId,
              name: params.name,
              price: params.price
            }]
          };
          break;

        case ClickType.RemoveFromCart:
          event = eventType.RemoveFromCart;
          value = {
            items: []
          };

          if (Array.isArray(params.productItems)) {
            params.productItems.forEach(({
              skuId,
              name,
              price,
              quantity,
              variant,
              customCategoryName
            }) => {
              value.items.push({
                id: skuId,
                name,
                price,
                quantity,
                variant: variant || '',
                category: customCategoryName
              });
            });
          }

          break;

        default:
          return [];
      }

      res.push(this.sendEventLog(event, value));

      if (this.config.enableEnhancedEcom) {
        res.push(this.clickForEnhancedEcom(page, type, params));
      }

      return res;
    }

    clickGa4({
      actionType,
      params
    }) {
      let value;
      let event;
      const res = [];

      switch (actionType) {
        case ClickType.SelectContent:
          event = eventType.SelectContent;
          value = {
            content_type: 'product',
            item_id: params.skuId,
            item_category: params.customCategoryName
          };
          break;

        case ClickType.AddToCart:
          event = eventType.AddToCart;
          value = {
            value: params.amount,
            items: [{
              item_id: params.itemNo || params.skuId,
              item_name: params.name,
              price: params.price,
              quantity: params.productNum,
              item_variant: (params.productSkuAttrList || []).join(',')
            }]
          };
          break;

        case ClickType.RemoveFromCart:
          event = eventType.RemoveFromCart;
          value = {
            value: params.value,
            items: []
          };

          if (Array.isArray(params.productItems)) {
            params.productItems.forEach(({
              skuId,
              name,
              price,
              quantity,
              variant,
              customCategoryName
            }) => {
              value.items.push({
                item_id: skuId,
                item_name: name,
                price,
                quantity,
                item_variant: variant || '',
                item_category: customCategoryName
              });
            });
          }

          break;

        case ClickType.ViewCart:
          event = eventType.ViewCart;
          value = {
            value: params.amount,
            items: params.items && params.items.map(item => {
              return {
                item_id: item.itemNo || item.productId,
                item_name: item.name,
                price: currencyUtil.formatCurrency(item.price),
                quantity: item.num,
                item_variant: (item.skuAttr || []).join(','),
                item_category: item.customCategoryName
              };
            })
          };
          break;

        default:
          return [];
      }

      res.push(this.sendEventLog(event, value));
      return res;
    }

  }

  const ga = new GoogleAnalysis({});
  _exports.default = ga;
  return _exports;
}();