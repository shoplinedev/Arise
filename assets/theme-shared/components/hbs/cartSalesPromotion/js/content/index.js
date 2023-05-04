window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/index.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/index.js'] || function () {
  const _exports = {};
  const gift = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/gift/index.js'].default;
  const getPromotionBarContent = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/index.js'].default;
  const getPromotionOption = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/getPromotionOption.js'].default;
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  const getContent = (promotion, rootWrapper, activeItemData) => {
    if (promotion.benefitType === 7) {
      if (Array.isArray(promotion.promotionBenefitList) && get(promotion.promotionBenefitList || {}, '[0].extMap.hideGiftBanner') !== 'true') {
        return gift(promotion, rootWrapper, getPromotionOption(activeItemData));
      }

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