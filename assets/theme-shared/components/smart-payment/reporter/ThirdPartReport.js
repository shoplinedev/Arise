window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/reporter/ThirdPartReport.js'] = window.SLM['theme-shared/components/smart-payment/reporter/ThirdPartReport.js'] || function () {
  const _exports = {};
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const Cookies = window['js-cookie']['default'];

  const getFbDataEventId = seq => {
    let fbDataEventId = '';
    const fbData = JSON.parse(Cookies.get(`${seq}_fb_data`) || '{}');

    if (fbData && fbData.ed) {
      fbDataEventId = fbData.ed;
    } else {
      fbDataEventId = getEventID();
    }

    return fbDataEventId;
  };

  const getProductList = products => {
    return (products || []).map(item => {
      return {
        spuId: item.productSeq,
        skuId: item.productSku,
        skuItemNo: item.itemNo,
        title: item.productName,
        variant: (item.productSkuAttrList || []).join(','),
        price: item.finalPrice,
        quantity: item.productNum,
        category: item.customCategoryName
      };
    });
  };

  const thirdPartReportOrderStart = ({
    seq,
    amount,
    productInfos
  }) => {
    const fbDataEventId = getFbDataEventId(seq);
    const eventId = `initiateCheckout${fbDataEventId}`;
    window.Shopline.Analytics.track({
      name: 'orderStart',
      payload: {
        eventId,
        value: amount,
        list: getProductList(productInfos)
      }
    });
  };

  _exports.thirdPartReportOrderStart = thirdPartReportOrderStart;

  const thirdPartReportPaymentInfo = ({
    eventId,
    amount,
    price,
    productInfos,
    channelCode
  }) => {
    window.Shopline.Analytics.track({
      name: 'orderAddPaymentInfo',
      payload: {
        eventId,
        value: amount,
        paymentType: channelCode,
        productPrice: price,
        list: getProductList(productInfos)
      }
    });
  };

  _exports.thirdPartReportPaymentInfo = thirdPartReportPaymentInfo;

  const thirdPartReportOrderCompleteStep = ({
    shipping_method,
    amount,
    productInfos
  }) => {
    window.Shopline.Analytics.track({
      name: 'orderCompleteStep',
      payload: {
        checkout_option: shipping_method,
        checkout_step: 3,
        value: amount,
        list: getProductList(productInfos)
      },
      whitelistTransports: ['GoogleAnalytics4']
    });
  };

  _exports.thirdPartReportOrderCompleteStep = thirdPartReportOrderCompleteStep;
  return _exports;
}();