window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/add-to-cart-report.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/add-to-cart-report.js'] || function () {
  const _exports = {};
  const getSkuAttributeNames = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/get-sku-attribute-names.js'].default;
  const { nullishCoalescingOperator, get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;

  function guid() {
    function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  }

  function getEventID() {
    return `${Date.now()}_${guid().replace(/-/g, '')}`;
  }

  function addToCartReport({
    products,
    amount,
    num = 1,
    formatCurrency,
    filter
  }) {
    const {
      currency
    } = window.Shopline;
    const ga4_items = [];
    const ga_items = [];
    const gar_items = [];
    const productList = get_func(get_func(products, 'filter').exec(item => filter ? !!filter(item) : true), 'map').exec(item => {
      const {
        productSeq,
        productId,
        spuSeq,
        spuId,
        title,
        defaultTitle,
        skus,
        skuList,
        productSkuList,
        skuSeq,
        skuId,
        skuAttributeMap,
        num: count
      } = item;
      const id = productSeq || productId || spuSeq || spuId;
      const name = title || defaultTitle;
      const skulist = productSkuList || skus || skuList;
      let SkuId = filter ? filter(item) || skuSeq || skuId : skuSeq || skuId;
      const sku = nc(get_func(skulist, 'find').exec(s => get(s, 'skuId') && get(s, 'skuId') === SkuId || get(s, 'skuId') && get(s, 'skuSeq') === SkuId), get(skulist, [0]), {});
      const {
        price,
        skuAttributeIds
      } = sku;
      SkuId = sku.skuId || sku.skuSeq || SkuId;
      const variant = sku ? getSkuAttributeNames(skuAttributeIds, skuAttributeMap).join(',') : '';
      const Price = formatCurrency ? formatCurrency(price * num) : Number(price * num) / 100;
      ga_items.push({
        id,
        name,
        price: Price,
        quantity: 1,
        variant
      });
      ga4_items.push({
        item_id: id,
        item_name: name,
        price: Price,
        quantity: 1,
        item_variant: variant
      });
      gar_items.push({
        id: window.SL_GetReportArg ? get_func(window, 'SL_GetReportArg').exec('GAR', 'sku_id', SkuId) : SkuId,
        google_business_vertical: 'retail'
      });
      return {
        spuId: id,
        skuId: SkuId,
        title: name,
        price,
        num: nc(count, num)
      };
    });
    let total = 0;

    if (amount) {
      total = amount;
    } else {
      total = productList.reduce((a, p) => a + get(p, 'price') * get(p, 'num'), 0);
    }

    const value = formatCurrency ? formatCurrency(total) : total / 100;
    const content_spu_id = productList.map(({
      spuId
    }) => spuId).join(',');
    const content_sku_id = productList.map(({
      skuId
    }) => skuId).join(',');
    const content_name = productList.map(({
      title
    }) => title).join(',');
    const totalQuantity = productList.reduce((a, p) => a + get(p, 'num'), 0);
    const GA4 = {
      items: ga_items,
      currency,
      value,
      send_to: 'GA4'
    };
    const GA = {
      items: ga_items,
      currency,
      value
    };
    const params = {
      GAAds: [['event', 'conversion', {
        value,
        currency
      }], 'ADD-TO-CART'],
      GA: [['event', 'add_to_cart', GA]],
      GA4: [['event', 'add_to_cart', GA4]],
      FBPixel: [['track', 'AddToCart', {
        content_ids: content_sku_id,
        content_name: content_name || '',
        content_category: '',
        content_type: 'product_group',
        currency,
        value
      }, {
        eventID: `addToCart${getEventID()}`
      }]],
      GAR: [['event', 'add_to_cart', {
        value,
        items: gar_items
      }]],
      GARemarketing: [['event', 'add_to_cart', {
        ecomm_prodid: productList.map(({
          skuId
        }) => window.SL_GetReportArg ? get_func(window, 'SL_GetReportArg').exec('GAR', 'sku_id', skuId) : skuId).join(','),
        ecomm_pagetype: 'cart',
        ecomm_totalvalue: value
      }]]
    };
    get_func(window, 'SL_EventBus.emit').exec('global:thirdPartReport', params);
    get_func(window, 'Shopline.event.emit').exec('DataReport::AddToCart', {
      data: {
        content_spu_id,
        content_sku_id,
        content_category: '',
        content_name,
        currency,
        price: value,
        value,
        quantity: totalQuantity
      },
      interior: 'DataReport::AddToCart',
      onSuccess: result => {
        console.info('success', result);
      },
      onError: error => {
        console.error(error);
      }
    });
  }

  _exports.default = addToCartReport;
  return _exports;
}();