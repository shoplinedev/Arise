window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/utils.js'] = window.SLM['theme-shared/components/payment-button/utils.js'] || function () {
  const _exports = {};
  const { createElement, getPaymentInfo, ElementPlace } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { EXPRESS_PAYMENT_BUTTON_COMMON_ITEM, PAYMENT_BUTTON_COMMON_ANIMATED, PAYMENT_BUTTON_COMMON_ITEM_MASK, EXPRESS_PAYMENT_BUTTON_AP, EXPRESS_PAYMENT_BUTTON_GP, EXPRESS_PAYMENT_BUTTON_PAYPAL } = window['SLM']['theme-shared/components/payment-button/constants.js'];
  const { METHOD_CODE } = window['SLM']['theme-shared/components/smart-payment/constants.js'];

  const isProductPreview = () => {
    return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
  };

  _exports.isProductPreview = isProductPreview;

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
      let expressPaymentBtnClass = '';
      let place = '';

      switch (item.methodCode) {
        case METHOD_CODE.GooglePay:
          expressPaymentBtnClass = EXPRESS_PAYMENT_BUTTON_GP;
          break;

        case METHOD_CODE.ApplePay:
          expressPaymentBtnClass = EXPRESS_PAYMENT_BUTTON_AP;
          break;

        case METHOD_CODE.Paypal:
        default:
          place = ElementPlace.Before;
          expressPaymentBtnClass = EXPRESS_PAYMENT_BUTTON_PAYPAL;
          break;
      }

      createElement({
        id: currentDomId,
        parentId: domId,
        attr: {
          class: `${EXPRESS_PAYMENT_BUTTON_COMMON_ITEM} ${PAYMENT_BUTTON_COMMON_ANIMATED} ${expressPaymentBtnClass}`
        },
        place
      });

      if (isProductPreview()) {
        $(`#${currentDomId}`).prepend(`<div class="${PAYMENT_BUTTON_COMMON_ITEM_MASK}"></div>`);
      }
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

  const getNormalPlaceholderElementClassName = domId => {
    const ele = document.getElementById(`payment_button_placeholder_${domId}`);
    const fallbackClassList = ['pdp_button_text', 'body5', 'ls-30p', 'fw-bold'];

    if (!ele) {
      return fallbackClassList.join(' ');
    }

    const {
      classList
    } = ele;

    if ('remove' in ele) {
      typeof ele.remove === 'function' && ele.remove();
    }

    const classNames = Array.prototype.slice.call(classList);
    const findIndex = classNames.indexOf('hide');
    classNames.splice(findIndex, 1);
    return classNames.join(' ');
  };

  _exports.getNormalPlaceholderElementClassName = getNormalPlaceholderElementClassName;

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