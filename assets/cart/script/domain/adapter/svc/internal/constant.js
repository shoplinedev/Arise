window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/internal/constant.js'] = window.SLM['cart/script/domain/adapter/svc/internal/constant.js'] || function () {
  const _exports = {};
  _exports.default = {
    endpointCart: '/carts/cart',
    endpointCartVerifyV2: '/carts/cart/check-v2',
    endpointCartItemNumReduce: '/carts/cart/items_num_reduce',
    endpointVoucher: '/carts/cart/shopping_money',
    memberPoint: '/carts/cart/member-point',
    endpointOrderSaveAbandonOrder: '/trade/center/order/abandoned/save'
  };
  return _exports;
}();