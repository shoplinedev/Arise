window.SLM = window.SLM || {};

window.SLM['cart/script/constant/stockType.js'] = window.SLM['cart/script/constant/stockType.js'] || function () {
  const _exports = {};
  _exports.default = {
    LIMITED: 0,
    UNLIMITED: 1,
    OVERSOLD: 2
  };
  const limitedActiveEnum = {
    LIMITED_ACTIVE_OVER: 1,
    LIMITED_ACTIVE_SKU_OVER: 2
  };
  _exports.limitedActiveEnum = limitedActiveEnum;
  const cartLimitedEnum = {
    NORMAL_ITEM_MAX_NUM: ['ITEM_MAX_NUM'],
    ACTIVE_LIMITED: ['LIMITED_ACTIVE_OVER', 'LIMITED_ACTIVE_SKU_OVER'],
    NORMAL_STOCK_OVER: ['STOCK_OVER'],
    ACTIVE_STOCK_OVER: ['LIMITED_ACTIVE_STOCK_OVER'],
    ACTIVE: ['LIMITED_ACTIVE_OVER', 'LIMITED_ACTIVE_SKU_OVER', 'LIMITED_ACTIVE_STOCK_OVER'],
    NORMAL: ['ITEM_MAX_NUM', 'STOCK_OVER']
  };
  _exports.cartLimitedEnum = cartLimitedEnum;
  return _exports;
}();