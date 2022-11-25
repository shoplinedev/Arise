window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/sales/promotionTag/promotionTagTanslate.js'] = window.SLM['theme-shared/components/hbs/sales/promotionTag/promotionTagTanslate.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const promotionTag = window['SLM']['theme-shared/components/hbs/sales/promotionTag/index.js'].default;
  const getPromotionTagConfig = promotionTag(convertFormat);
  _exports.getPromotionTagConfig = getPromotionTagConfig;

  const promotionTagConfig = (promotion, benefitType, warper) => {
    const config = getPromotionTagConfig(promotion, benefitType, warper);
    return t(config.path, config.params);
  };

  _exports.default = promotionTagConfig;
  return _exports;
}();