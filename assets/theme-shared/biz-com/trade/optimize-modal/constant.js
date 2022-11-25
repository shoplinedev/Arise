window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/trade/optimize-modal/constant.js'] = window.SLM['theme-shared/biz-com/trade/optimize-modal/constant.js'] || function () {
  const _exports = {};
  const verifyType = {
    NIL: 0,
    SOLD_OUT: 1,
    UNDER_STOCK: 2,
    OFF_SHELVED: 3,
    DELETED: 4,
    PRODUCT_LIMIT: 5,
    USER_LIMIT: 6,
    PRODUCT_UNDER_STOCK: 7
  };
  const limitType = {
    5: 'PRODUCT_LIMIT',
    6: 'USER_LIMIT',
    7: 'PRODUCT_UNDER_STOCK'
  };
  const StatusEnum = {
    normal: 1,
    offline: 2,
    lack: 3,
    over: 4,
    removed: 5,
    product_limit: 6,
    user_limit: 7,
    product_under_stock: 8
  };
  const btnEnum = {
    paypal: 1,
    empty: 2,
    limit: 3,
    checkout: 4
  };
  const sourceEnum = {
    CART: 1,
    MINI_CART: 2,
    CHECKOUT: 3
  };
  const ErrorTypeEnum = {
    SOLD_OUT: 'SOLD_OUT',
    STOCK_OVER: 'STOCK_OVER',
    SHELF_OFF: 'SHELF_OFF',
    DELETE: 'DELETE',
    LIMITED_ACTIVE_SKU_OVER: 'LIMITED_ACTIVE_SKU_OVER',
    LIMITED_ACTIVE_OVER: 'LIMITED_ACTIVE_OVER',
    LIMITED_ACTIVE_STOCK_OVER: 'LIMITED_ACTIVE_STOCK_OVER',
    MAIN_PRODUCT_ERROR: 'MAIN_PRODUCT_ERROR',
    PURCHASE_LESS_MOQ: 'PURCHASE_LESS_MOQ',
    GIFT_INVALID: 'GIFT_INVALID'
  };
  const PropertyTypeEnum = {
    picture: 'picture',
    text: 'text',
    link: 'link'
  };
  const productSignEid = {
    B2B: '103'
  };
  const productTypeMap = {
    1: 'product',
    2: 'addon',
    3: 'subscription'
  };
  _exports.verifyType = verifyType;
  _exports.StatusEnum = StatusEnum;
  _exports.btnEnum = btnEnum;
  _exports.sourceEnum = sourceEnum;
  _exports.limitType = limitType;
  _exports.ErrorTypeEnum = ErrorTypeEnum;
  _exports.PropertyTypeEnum = PropertyTypeEnum;
  _exports.productSignEid = productSignEid;
  _exports.productTypeMap = productTypeMap;
  return _exports;
}();