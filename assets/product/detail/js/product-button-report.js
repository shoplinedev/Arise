window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-button-report.js'] = window.SLM['product/detail/js/product-button-report.js'] || function () {
  const _exports = {};
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { newHdReportData } = window['SLM']['theme-shared/report/product/add-to-cart.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const dataReportAddToCart = window['@yy/sl-theme-shared']['/events/data-report/add-to-cart'].default;

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
    variant,
    spu
  }) {
    const totalPrice = convertPrice(price) * (num || 1);
    const {
      customCategoryName
    } = spu || {};
    window.SL_EventBus.emit('global:thirdPartReport', {
      GA: [['event', 'add_to_cart', {
        currency: getCurrencyCode(),
        items: [{
          id: skuId,
          name,
          currency: getCurrencyCode(),
          price: convertPrice(price),
          quantity: num,
          variant,
          category: customCategoryName
        }]
      }]],
      GA4: [['event', 'add_to_cart', {
        currency: getCurrencyCode(),
        value: totalPrice,
        items: [{
          item_id: skuId,
          item_name: name,
          currency: getCurrencyCode(),
          price: convertPrice(price),
          quantity: num,
          item_variant: variant,
          item_category: customCategoryName
        }]
      }]],
      GAAds: [['event', 'conversion', {
        value: totalPrice,
        currency: getCurrencyCode()
      }, 'ADD-TO-CART']],
      FBPixel: [['track', 'AddToCart', {
        content_ids: spuId,
        content_name: name || '',
        content_category: '',
        content_type: 'product_group',
        currency: getCurrencyCode(),
        value: convertPrice(price)
      }, {
        eventID: `addToCart${eventID}`
      }]],
      GAR: [['event', 'add_to_cart', {
        currency: getCurrencyCode(),
        value: totalPrice,
        items: [{
          id: window.SL_GetReportArg && window.SL_GetReportArg('GAR', 'sku_id', skuId),
          google_business_vertical: 'retail'
        }]
      }]],
      GARemarketing: [['event', 'add_to_cart', {
        ecomm_prodid: window.SL_GetReportArg && window.SL_GetReportArg('GAR', 'sku_id', skuId),
        ecomm_pagetype: 'cart',
        currency: getCurrencyCode(),
        ecomm_totalvalue: totalPrice
      }]]
    });
    reportAddToCartEvent({
      content_spu_id: spuId,
      content_sku_id: skuId,
      content_category: '',
      content_name: name,
      currency: getCurrencyCode(),
      price: convertPrice(price || 0),
      value: convertPrice(price || 0),
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
      currency: getCurrencyCode(),
      price: convertPrice(price),
      product_name: name,
      event_status,
      cart_id: cartId
    });
    newHdReportData({
      addtocartType: 'addtocart',
      currency: getCurrencyCode(),
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
      currency: getCurrencyCode(),
      price: convertPrice(price),
      product_name: name,
      event_category: 'cart',
      event_status
    });
    newHdReportData({
      addtocartType: isMorePay ? 'morePay' : 'buynow',
      currency: getCurrencyCode(),
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
      price: convertPrice(data.price),
      currency: getCurrencyCode(),
      position
    });
    newHdReportData({
      addtocartType: 'paypal',
      currency: getCurrencyCode(),
      price: data.price,
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