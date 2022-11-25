window.SLM = window.SLM || {};

window.SLM['cart/script/service/cart/service.js'] = window.SLM['cart/script/service/cart/service.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { getSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const store = window['@sl/cart']['/lib/utils/store'].default;
  const cartEventBus = window['SLM']['cart/script/utils/event-bus/index.js'].default;
  const cartSvc = window['SLM']['cart/script/domain/adapter/svc/cart.js'].default;
  const voucherSvc = window['SLM']['cart/script/domain/adapter/svc/voucher.js'].default;
  const couponSvc = window['SLM']['cart/script/domain/adapter/svc/coupon.js'].default;
  const orderSvc = window['SLM']['cart/script/domain/adapter/svc/order.js'].default;
  const storageConstants = window['SLM']['cart/script/domain/adapter/storage/constant.js'].default;
  const responseCode = window['SLM']['cart/script/constant/responseCode.js'].default;
  const cartModel = window['SLM']['cart/script/domain/model/cart.js'].default;
  const cartItemModel = window['SLM']['cart/script/domain/model/cartItem.js'].default;
  const responseModel = window['SLM']['cart/script/domain/model/response.js'].default;
  const promotionCodeModel = window['SLM']['cart/script/domain/model/promotionCode.js'].default;
  const cartVerifyItemModel = window['SLM']['cart/script/domain/model/cartVerifyItem.js'].default;
  const modelHelper = window['SLM']['cart/script/domain/model/helpers.js'].default;
  const hooks = window['SLM']['cart/script/service/cart/hooks.js'].default;
  const CartEventBusEnum = {
    UPDATE: 'cart:update'
  };
  const CartInfoKey = 'cartInfo';

  class CartService {
    constructor(svcAdapter, storageAdapter) {
      this._svc = svcAdapter;
      this._storage = storageAdapter;
      this._cartDetail = SL_State.get(CartInfoKey) || null;
      this._inactiveCartItemListMemo = modelHelper.memo();
      this._activeCartItemListMemo = modelHelper.memo();
      this._cartItemListMemo = modelHelper.memo();
      cartEventBus.on(CartEventBusEnum.UPDATE, data => {
        this._cartDetail = data;
      });
    }

    get inactiveCartItemList() {
      return this._inactiveCartItemListMemo(cartDetail => {
        return modelHelper.reducer(cartDetail).next(cartModel.getInactiveCartItemList).next(cartItemModel.mergeNthProduct)();
      }, this.cartDetail);
    }

    get activeCartItemList() {
      return this._activeCartItemListMemo(cartDetail => {
        return modelHelper.reducer(cartDetail).next(cartModel.getActiveCartItemList).next(cartItemModel.mergeNthProduct)();
      }, this.cartDetail);
    }

    get cartItemList() {
      return this._cartItemListMemo(cartDetail => {
        return modelHelper.reducer(cartDetail).next(cartModel.getCartItemList).next(cartItemModel.mergeNthProduct)();
      }, this.cartDetail);
    }

    get cartDetail() {
      return this._cartDetail;
    }

    async getCartDetail() {
      const res = await cartSvc.getCart(this._svc);

      if (responseModel.isResolved(res)) {
        const {
          data
        } = res;
        this._cartDetail = data;
        store.add({
          cartInfo: data
        });
        SL_State.set(CartInfoKey, data);
        cartEventBus.emit(CartEventBusEnum.UPDATE, data);
      }

      return res;
    }

    async updateCartState() {
      const res = await cartSvc.getCart(this._svc);

      if (responseModel.isResolved(res)) {
        const {
          data
        } = res;
        this._cartDetail = data;
        store.add({
          cartInfo: data
        });
        SL_State.set(CartInfoKey, data);
      }

      return res;
    }

    async rerenderCartDom() {
      await cartEventBus.emit(CartEventBusEnum.UPDATE, this._cartDetail);
    }

    async addSku({
      spuId,
      skuId,
      num,
      orderFrom,
      dataReportReq,
      sellingPlanId
    }) {
      if (!spuId || !skuId || num < 0) {
        return responseModel.rejectWithCode(responseCode.FA_INVALID_PARAMS);
      }

      const res = await cartSvc.addCartItem(this._svc, {
        spuId,
        skuId,
        num,
        orderFrom,
        dataReportReq,
        sellingPlanId
      });

      if (responseModel.isResolved(res)) {
        await this.getCartDetail();
      }

      return res;
    }

    async editSku({
      spuId,
      skuId,
      num,
      groupId,
      productSource
    }) {
      if (!spuId || !skuId || num < 0) {
        return responseModel.rejectWithCode(responseCode.FA_INVALID_PARAMS);
      }

      const skuInfo = {
        spuId,
        skuId,
        num,
        groupId,
        productSource
      };
      const res = await cartSvc.putCartItem(this._svc, skuInfo);

      if (responseModel.isResolved(res)) {
        await this.getCartDetail();
      }

      return res;
    }

    async removeSkuList(skuInfoList) {
      if (Array.isArray(skuInfoList) && skuInfoList.length) {
        const res = await cartSvc.deleteCartItemList(this._svc, skuInfoList || []);

        if (responseModel.isResolved(res)) {
          await this.getCartDetail();
        }

        return res;
      }

      return responseModel.resolveWithData();
    }

    getCheckoutParams(itemList) {
      const discountCode = modelHelper.reducer(this.cartDetail).next(cartModel.getPromotionInfo).next(promotionCodeModel.getCode)();
      const useMemberPoint = get(this.cartDetail, 'memberPointInfo.use', undefined);
      let abandonSeq = null;
      let abandonMark = null;

      const rawAbandonInfoFromCache = this._storage.getItem(storageConstants.KEY_CART_ABANDON_INFO);

      if (rawAbandonInfoFromCache) {
        ({
          mark: abandonMark,
          seq: abandonSeq
        } = JSON.parse(rawAbandonInfoFromCache));
      }

      return modelHelper.reducer({
        associateCart: true,
        useMemberPoint
      }).next(discountCode ? orderSvc.withAbandonOrderDiscountCode : null, discountCode).next(abandonSeq ? orderSvc.withAbandonOrderInfo : null, abandonSeq, abandonMark).next(orderSvc.withAbandonOrderProductList, (itemList || []).map(item => ({
        productSku: item.skuId,
        productSeq: item.spuId,
        productNum: item.num,
        productPrice: item.price,
        productName: item.name,
        groupId: item.groupId,
        productSource: item.productSource,
        sellingPlanId: item.subscriptionInfo ? item.subscriptionInfo.sellingPlanId : undefined
      })))();
    }

    async toggleVoucher(used) {
      const res = await voucherSvc.toggleVoucher(this._svc, !!used);

      if (responseModel.isResolved(res)) {
        await this.getCartDetail();
      }

      return res;
    }

    async applyCoupon(info) {
      const res = await couponSvc.applyCoupon(this._svc, info);

      if (responseModel.isResolved(res)) {
        await this.getCartDetail();
      }

      return res;
    }

    async withdrawCoupon(req) {
      const couponCode = modelHelper.reducer(this._cartDetail).next(cartModel.getPromotionInfo).next(promotionCodeModel.getCode)();

      if (!couponCode) {
        return responseModel.rejectWithCode(responseCode.FA_COUPON_INVALID_CODE);
      }

      const res = await couponSvc.withdrawCoupon(this._svc, req);

      if (responseModel.isResolved(res)) {
        await this.getCartDetail();
      }

      return res;
    }

    async verifyCartItemList(cartItemList) {
      if (!cartItemList) {
        cartItemList = this.cartItemList;
      }

      return this._verifyCartItemList(cartItemList);
    }

    async _verifyCartItemList(cartItemList) {
      if (!Array.isArray(cartItemList)) {
        return responseModel.rejectWithCode(responseCode.FA_INVALID_PARAMS);
      }

      if (cartItemList.length <= 0) {
        if ((await hooks.verifyingActiveProductEmpty.callPromise()) !== false) {
          return responseModel.rejectWithCode(responseCode.FA_PRODUCT_ACTIVE_EMPTY);
        }
      }

      const checkRes = await cartSvc.verifyCartItemListV2(this._svc, {
        orderFrom: getSyncData('orderFrom') || 'web',
        itemList: cartItemList.map(item => {
          return {
            spuId: cartItemModel.getSpuId(item),
            skuId: cartItemModel.getSkuId(item),
            num: cartItemModel.getQuantity(item),
            groupId: cartItemModel.getGroupId(item),
            productSource: cartItemModel.getProductSource(item)
          };
        }).filter(i => !!i.spuId && !!i.skuId)
      });

      if (!responseModel.isResolved(checkRes)) {
        return checkRes;
      }

      return responseModel.resolveWithData(cartVerifyItemModel.makeVerifyList(cartItemList, responseModel.getData(checkRes).checkItemList));
    }

    async getMemberPoint(use) {
      const res = await cartSvc.memberPoint(this._svc, use);
      return res;
    }

    getCardItemList() {
      return this.cartItemList;
    }

  }

  _exports.default = {
    CartService,
    CartEventBusEnum,
    cartEventBus
  };
  return _exports;
}();