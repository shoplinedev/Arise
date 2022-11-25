window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/getPromotionOption.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/getPromotionOption.js'] || function () {
  const _exports = {};
  const { get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const PLUGIN_GIFT_TYPE = 7;

  function getOptions(activity) {
    let options = {};

    if (get(activity, 'promotion.benefitType') === PLUGIN_GIFT_TYPE) {
      options = {
        hasSelectedGiftQuantity: get_func(get_func(activity, 'itemList.filter').exec(item => {
          if (!get(item, 'bizExtInfo')) {
            return false;
          }

          try {
            const bizExtInfo = JSON.parse(get(item, 'bizExtInfo'));

            if (get(bizExtInfo, 'gift')) {
              return true;
            }
          } catch (e) {
            return false;
          }

          return false;
        }), 'reduce').exec((sum, sku) => {
          const res = sum + get(sku, 'num');
          return res;
        }, 0)
      };
    }

    return options;
  }

  _exports.default = getOptions;
  return _exports;
}();