window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/cart.js'] = window.SLM['cart/script/domain/adapter/svc/cart.js'] || function () {
  const _exports = {};
  const constant = window['SLM']['cart/script/domain/adapter/svc/internal/constant.js'].default;

  async function getCart(svc, abandonedOrderMark, abandonedOrderSeq) {
    return svc.request.get(constant.endpointCart, {
      params: {
        abandonedOrderMark,
        abandonedOrderSeq
      }
    });
  }

  async function deleteCartItemList(svc, skuList) {
    return svc.request.post(constant.endpointCartItemNumReduce, skuList || []);
  }

  async function putCartItem(svc, skuInfo) {
    return svc.request.put(constant.endpointCart, skuInfo);
  }

  async function addCartItem(svc, {
    spuId,
    skuId,
    num,
    orderFrom,
    dataReportReq,
    sellingPlanId
  }) {
    return svc.request.post(constant.endpointCart, {
      orderFrom,
      item: {
        spuId,
        skuId,
        num,
        sellingPlanId
      },
      dataReportReq
    });
  }

  async function verifyCartItemListV2(svc, {
    itemList,
    orderFrom
  }) {
    return svc.request.post(constant.endpointCartVerifyV2, {
      cartItemList: itemList || [],
      orderFrom
    });
  }

  async function memberPoint(svc, use) {
    return svc.request.get(constant.memberPoint, {
      params: {
        use
      }
    });
  }

  _exports.default = {
    getCart,
    deleteCartItemList,
    verifyCartItemListV2,
    putCartItem,
    addCartItem,
    memberPoint
  };
  return _exports;
}();