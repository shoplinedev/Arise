window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/skuPromotionVerify.js'] = window.SLM['cart/script/domain/model/skuPromotionVerify.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { cartLimitedEnum } = window['SLM']['cart/script/constant/stockType.js'];
  const toastTypeEnum = {
    stockLimit: 'item.item_left',
    activeStockLimit: 'discount_price.buy_limit'
  };
  _exports.toastTypeEnum = toastTypeEnum;

  function tActiveStockLimitWithMaxPurchaseReasonCode(code, stock) {
    const tParams = {
      stock
    };

    switch (code) {
      case 'LIMITED_ACTIVE_OVER':
        return t('cart.discount_price.buy_limit2', tParams);

      case 'LIMITED_ACTIVE_SKU_OVER':
        return t('cart.discount_price.buy_limit3', tParams);

      default:
        return t('cart.discount_price.buy_limit1', tParams);
    }
  }

  _exports.tActiveStockLimitWithMaxPurchaseReasonCode = tActiveStockLimitWithMaxPurchaseReasonCode;

  function skuPromotionVerify(key, nextValue) {
    const ctx = this.stepper;

    if (!ctx) {
      return nextValue;
    }

    if (ctx.limitedType === 0 || !cartLimitedEnum.ACTIVE.includes(ctx.maxPurchaseReasonCode)) {
      return nextValue;
    }

    const getMaxStock = () => {
      return ctx.maxPurchaseNum > 0 ? ctx.maxPurchaseNum : 1;
    };

    if (key === 'max') {
      return getMaxStock();
    }

    return nextValue;
  }

  _exports.default = skuPromotionVerify;
  return _exports;
}();