window.SLM = window.SLM || {};
window.SLM['commons/cart/errorCode.js'] = window.SLM['commons/cart/errorCode.js'] || function () {
  const _exports = {};
  const ErrorCode = {
    TCAT0109: 'TCAT0109',
    TCAT0107: 'TCAT0107',
    TCAT0112: 'TCAT0112',
    TCAT0111: 'TCAT0111',
    TCAT0101: 'TCAT0101',
    TCAT0103: 'TCAT0103',
    TCAT0119: 'TCAT0119',
    TCAT0120: 'TCAT0120',
    TRD_128188_B1102: 'TRD_128188_B1102'
  };
  _exports.ErrorCode = ErrorCode;
  const ErrorCode2I18nKey = {
    [ErrorCode.TCAT0109]: 'cart.notices.product_amount_limit',
    [ErrorCode.TCAT0107]: 'cart.discount_price.buy_limit3',
    [ErrorCode.TCAT0112]: 'cart.discount_price.buy_limit3',
    [ErrorCode.TCAT0111]: 'cart.discount_price.buy_limit2',
    [ErrorCode.TCAT0101]: 'cart.item.none_existent',
    [ErrorCode.TCAT0103]: 'products.product_list.product_has_been_removed',
    [ErrorCode.TCAT0119]: 'cart.general.support_oneTime_purchase_only',
    [ErrorCode.TCAT0120]: 'cart.general.support_subscription_only',
    [ErrorCode.TRD_128188_B1102]: 'cart.item.market.illegal.excludedState'
  };
  _exports.ErrorCode2I18nKey = ErrorCode2I18nKey;
  return _exports;
}();