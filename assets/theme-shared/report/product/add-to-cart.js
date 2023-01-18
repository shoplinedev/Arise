window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/add-to-cart.js'] = window.SLM['theme-shared/report/product/add-to-cart.js'] || function () {
  const _exports = {};
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const componentMap = {
    addtocart: 101,
    buynow: 102,
    paypal: 103,
    morePay: 104
  };
  const pageMap = {
    Home: {
      page: 101,
      module: 900
    },
    ProductsDetail: {
      page: 105,
      module: 106
    },
    QuickView: {
      page: 107,
      module: 106
    },
    QuickAdd: {
      page: 108,
      module: 106
    },
    SingleQuickAdd: {
      page: 108,
      module: 109,
      component: 101
    }
  };
  const pageId = {
    Home: 101,
    ProductsSearch: 102,
    Products: 103,
    ProductsDetail: 105,
    Activity: 115
  };

  function findSectionId(selector) {
    const id = $(selector).closest('.shopline-section').attr('id');
    const trueId = id && id.replace('shopline-section-', '');
    return trueId;
  }

  function newHdReportData({
    addtocartType,
    price,
    skuId,
    spuId,
    num,
    modalType,
    variant,
    collectionId,
    collectionName,
    position,
    dataId,
    eventID,
    cartId,
    moreInfo = {},
    singleItem = {}
  }) {
    let config = {};

    if (modalType) {
      config = pageMap[modalType];
      config.page_id = pageId[SL_State.get('templateAlias')];
    } else {
      config = nullishCoalescingOperator(pageMap[SL_State.get('templateAlias')], {});

      if (SL_State.get('templateAlias') === 'Home') {
        config.module_type = '单个商品';
        config.component_ID = findSectionId('[data-ssr-plugin-product-detail-container]');
      }
    }

    const index = nullishCoalescingOperator(position, '') === '' ? '' : Number(position) + 1;
    const data = {
      component: componentMap[addtocartType],
      ...config,
      event_name: 'AddToCart',
      data_id: dataId,
      addtocart_type: addtocartType === 'morePay' ? 'buynow' : addtocartType,
      action_type: -999,
      event_id: `addToCart${eventID}`,
      currency: getCurrencyCode(),
      value: convertPrice(price) * num,
      cart_id: cartId,
      ...moreInfo,
      items: [{
        sku_id: skuId,
        spu_id: spuId,
        index,
        collection_id: nullishCoalescingOperator(collectionId, ''),
        collection_name: nullishCoalescingOperator(collectionName, ''),
        variant: nullishCoalescingOperator(variant, ''),
        currency: getCurrencyCode(),
        price: convertPrice(price),
        quantity: num,
        ...singleItem
      }]
    };
    window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.collect(data);
  }

  _exports.newHdReportData = newHdReportData;
  return _exports;
}();