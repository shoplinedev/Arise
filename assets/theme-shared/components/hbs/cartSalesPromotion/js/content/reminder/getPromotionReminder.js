window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const shoppingPromotionReminder = window['SLM']['theme-shared/components/hbs/sales/shoppingPromotionReminder/index.js'].default;
  const getPromotionReminder = shoppingPromotionReminder(convertFormat);

  const getShoppingReminderTranslate = (promotion, configs, options) => {
    const config = shoppingPromotionReminder(convertFormat)(promotion, configs, options);
    return t(config.path, config.params);
  };

  _exports.getShoppingReminderTranslate = getShoppingReminderTranslate;
  _exports.default = getPromotionReminder;
  return _exports;
}();