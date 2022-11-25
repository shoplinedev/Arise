window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-button-report.js'] = window.SLM['product/detail/js/product-button-report.js'] || function () {
  const _exports = {};
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { newHdReportData } = window['SLM']['theme-shared/report/product/add-to-cart.js'];
  const currency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const dataReportAddToCart = window['@yy/sl-theme-shared']['/events/data-report/add-to-cart'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const {
    formatCurrency,
    unformatCurrency
  } = currency;

  function reportAddToCartEvent(data) {
    try {
      dataReportAddToCart(data);
    } catch (e) {
      console.error(e);
    }
  }

  _exports.reportAddToCartEvent = reportAddToCartEvent;

  function addToCartThirdReport({
    spuId,
    name,
    price,
    skuId,
    num,
    eventID = getEventID(),
    variant
  }) {
    window.SL_EventBus.emit('global:thirdPartReport', {
      GA: [['event', 'add_to_cart', {
        items: [{
          id: skuId,
          name,
          price: formatCurrency(price),
          quantity: num,
          variant
        }]
      }]],
      GA4: [['event', 'add_to_cart', {
        currency: SL_State.get('storeInfo.currency'),
        value: formatCurrency(price * (num || 1)),
        items: [{
          item_id: skuId,
          item_name: name,
          price: formatCurrency(price),
          quantity: num,
          item_variant: variant
        }]
      }]],
      GAAds: [['event', 'conversion', {
        value: formatCurrency(price * (num || 1)),
        currency: SL_State.get('storeInfo.currency')
      }, 'ADD-TO-CART']],
      FBPixel: [['track', 'AddToCart', {
        content_ids: spuId,
        content_name: name || '',
        content_category: '',
        content_type: 'product_group',
        currency: SL_State.get('storeInfo.currency'),
        value: formatCurrency(price)
      }, {
        eventID: `addToCart${eventID}`
      }]],
      GAR: [['event', 'add_to_cart', {
        value: formatCurrency(price * (num || 1)),
        items: [{
          id: skuId,
          google_business_vertical: 'retail'
        }]
      }]],
      GARemarketing: [['event', 'add_to_cart', {
        ecomm_prodid: skuId,
        ecomm_pagetype: 'cart',
        ecomm_totalvalue: formatCurrency(price * (num || 1))
      }]]
    });
    reportAddToCartEvent({
      content_spu_id: spuId,
      content_sku_id: skuId,
      content_category: '',
      content_name: name,
      currency: SL_State.get('storeInfo.currency'),
      price: formatCurrency(price || 0),
      value: formatCurrency(price || 0),
      quantity: num
    });
    return eventID;
  }

  _exports.addToCartThirdReport = addToCartThirdReport;

  function report(eventId, data) {
    if (window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report) {
      window.HdSdk.shopTracker.report(eventId, data);
    }
  }

  function addToCartHdReport({
    spuId,
    skuId,
    num,
    price,
    name,
    page,
    event_status,
    modalType,
    variant,
    collectionId,
    collectionName,
    position,
    dataId,
    eventID,
    cartId
  }) {
    report('60006263', {
      page,
      event_name: 'additem',
      event_category: 'cart',
      product_type: 'product',
      product_id: spuId,
      variantion_id: skuId,
      quantity: num,
      price: formatCurrency(price),
      product_name: name,
      event_status,
      cart_id: cartId
    });
    newHdReportData({
      addtocartType: 'addtocart',
      price,
      page,
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
      moreInfo: {
        event_status
      }
    });
  }

  _exports.addToCartHdReport = addToCartHdReport;

  function buyNowHdReport({
    spuId,
    skuId,
    num,
    price,
    name,
    page,
    event_status,
    modalType,
    variant,
    collectionId,
    collectionName,
    isMorePay,
    position,
    dataId,
    eventID,
    cartId
  }) {
    report('60006263', {
      page,
      event_name: 'buy_now',
      product_id: spuId,
      variantion_id: skuId,
      quantity: num,
      price: formatCurrency(price),
      product_name: name,
      event_category: 'cart',
      event_status
    });
    newHdReportData({
      addtocartType: isMorePay ? 'morePay' : 'buynow',
      price,
      page,
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
      moreInfo: {
        event_status
      }
    });
  }

  _exports.buyNowHdReport = buyNowHdReport;

  function paypalHdReport(data) {
    const {
      cartId,
      ...rest
    } = data;
    const position = nullishCoalescingOperator(data.position, '') === '' ? '' : Number(data.position) + 1;
    report('60006263', { ...rest,
      position
    });
    newHdReportData({
      addtocartType: 'paypal',
      price: unformatCurrency(data.price),
      page: data.page,
      skuId: data.variantion_id,
      spuId: data.product_id,
      num: data.quantity,
      modalType: data.modalType,
      variant: data.variant,
      collectionId: data.collectionId,
      collectionName: data.collectionName,
      position: data.position,
      dataId: data.dataId,
      eventID: data.eventID,
      cartId: data.cartId,
      moreInfo: {
        event_status: data.event_status
      }
    });
  }

  _exports.paypalHdReport = paypalHdReport;
  return _exports;
}();