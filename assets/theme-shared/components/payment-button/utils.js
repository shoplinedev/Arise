window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/utils.js'] = window.SLM['theme-shared/components/payment-button/utils.js'] || function () {
  const _exports = {};
  const { createElement, getPaymentInfo } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const PAYMENT_BUTTON_COMMON__STYLE_ID = 'payment-button-common-style-id';
  _exports.PAYMENT_BUTTON_COMMON__STYLE_ID = PAYMENT_BUTTON_COMMON__STYLE_ID;
  const PAYMENT_BUTTON_COMMON_ANIMATED = 'payment-button-common-animated';
  _exports.PAYMENT_BUTTON_COMMON_ANIMATED = PAYMENT_BUTTON_COMMON_ANIMATED;
  const PAYMENT_BUTTON_COMMON_ITEM = 'payment-button-common-item';
  _exports.PAYMENT_BUTTON_COMMON_ITEM = PAYMENT_BUTTON_COMMON_ITEM;

  const getAttrs = str => {
    const list = str.split('&');
    const res = {};
    list.forEach(item => {
      const itemRes = item.split('=');
      res[itemRes[0]] = itemRes[1];
    });
    return res;
  };

  _exports.getAttrs = getAttrs;

  const createExpressCheckoutBtn = (list, domId) => {
    list.forEach(item => {
      const currentDomId = `${domId}_${item.methodCode}`;
      item.currentDomId = currentDomId;
      createElement(currentDomId, domId, {
        class: `${PAYMENT_BUTTON_COMMON_ITEM} ${PAYMENT_BUTTON_COMMON_ANIMATED}`
      });
    });
  };

  _exports.createExpressCheckoutBtn = createExpressCheckoutBtn;

  const getExpressCheckoutDomId = domId => {
    return `${domId}_express_checkout`;
  };

  _exports.getExpressCheckoutDomId = getExpressCheckoutDomId;

  const getNormalDomId = domId => {
    return `${domId}_normal`;
  };

  _exports.getNormalDomId = getNormalDomId;

  const getConfig = pageType => {
    const pageData = getPaymentInfo(pageType);
    if (!pageData || !pageData.buttonLocationDataList) return [];
    const config = pageData.buttonLocationDataList.find(item => {
      return item.buttonLocation === pageType;
    });
    if (!config) return [];
    return config.buttonTypeDataList || [];
  };

  _exports.getConfig = getConfig;
  return _exports;
}();