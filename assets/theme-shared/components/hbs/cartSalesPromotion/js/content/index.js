window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/index.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/index.js'] || function () {
  const _exports = {};
  const getPromotionBarContent = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/index.js'].default;

  const getContent = (promotion, rootWrapper) => {
    if (promotion.benefitType === 7) {
      return '';
    }

    let saleExtInfo = {};

    try {
      if (typeof promotion.saleExtInfo === 'string') {
        saleExtInfo = JSON.parse(promotion.saleExtInfo);
      }
    } catch (e) {
      console.warn('json.parse saleExtInfo value err:', e);
      saleExtInfo = {};
    }

    if (saleExtInfo.showAutoCartBanner) {
      return getPromotionBarContent(promotion, rootWrapper);
    }

    return '';
  };

  _exports.getContent = getContent;
  return _exports;
}();