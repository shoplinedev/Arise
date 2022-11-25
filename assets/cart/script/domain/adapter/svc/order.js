window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/order.js'] = window.SLM['cart/script/domain/adapter/svc/order.js'] || function () {
  const _exports = {};
  const constant = window['SLM']['cart/script/domain/adapter/svc/internal/constant.js'].default;
  const modelHelper = window['SLM']['cart/script/domain/model/helpers.js'].default;

  async function saveAbandonOrder(svc, config) {
    return svc.request.post(constant.endpointOrderSaveAbandonOrder, {
      associateCart: true,
      abandonedOrderSeqInfo: config.abandonedOrderSeqInfo || null,
      discountCodes: config.discountCode || null,
      products: config.products || []
    });
  }

  function withAbandonOrderInfo(config, seq, mark) {
    if (!seq) return config;
    return modelHelper.merge(config, {
      abandonedOrderSeqInfo: {
        seq,
        mark
      }
    });
  }

  function withAbandonOrderDiscountCode(config, discountCode) {
    if (!discountCode) return config;
    return modelHelper.merge(config, {
      discountCode
    });
  }

  function withAbandonOrderProductList(config, productList) {
    if (!productList) return config;
    return modelHelper.merge(config, {
      products: productList
    });
  }

  _exports.default = {
    saveAbandonOrder,
    withAbandonOrderInfo,
    withAbandonOrderDiscountCode,
    withAbandonOrderProductList
  };
  return _exports;
}();