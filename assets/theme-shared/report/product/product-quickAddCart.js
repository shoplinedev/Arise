window.SLM = window.SLM || {};

window.SLM['theme-shared/report/product/product-quickAddCart.js'] = window.SLM['theme-shared/report/product/product-quickAddCart.js'] || function () {
  const _exports = {};
  const { BaseReport } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { getCartId, validParams } = window['SLM']['theme-shared/report/product/utils/index.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const pdpTypeMap = {
    101: 102,
    102: 103,
    103: 103,
    105: 101,
    115: 103
  };

  class ProductQuickAddCart extends BaseReport {
    quickAddCartView(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo
      } = reportData;
      const {
        spuSeq,
        skuSeq,
        price,
        productName
      } = productInfo;
      const productInfoParams = {
        content_ids: spuSeq,
        sku_id: skuSeq,
        content_name: productName,
        currency: getCurrencyCode(),
        value: convertPrice(price)
      };
      const params = {
        page: 108,
        module: -999,
        component: -999,
        action_type: 101,
        popup_page_base: this.page,
        pdp_type: nullishCoalescingOperator(pdpTypeMap[this.page], 103),
        ...baseParams,
        ...productInfoParams
      };
      super.view({
        selector: `.__sl-custom-track-quick-add-modal-${spuSeq}`,
        reportOnce: false,
        customParams: params
      });
    }

    async btnAddToCart(reportData) {
      validParams(reportData);
      const TypeMap = {
        101: 'addtocart',
        102: 'buynow',
        103: 'paypal'
      };
      const {
        baseParams
      } = reportData;
      const productInfoParams = {
        cart_id: await getCartId(),
        currency: getCurrencyCode()
      };
      const params = {
        page: 108,
        module: 106,
        event_name: 'AddToCart',
        addtocart_type: TypeMap[baseParams.component],
        ...baseParams,
        ...productInfoParams
      };
      super.collect(params);
    }

    itemAddToCart(reportData) {
      validParams(reportData);
      const {
        baseParams = {},
        productInfo
      } = reportData;
      const {
        spuSeq,
        itemIndex,
        status,
        price
      } = productInfo;
      const productInfoParams = {
        spu_id: spuSeq,
        price,
        position: itemIndex + 1,
        status: status ? 102 : 101
      };
      const params = {
        page: 108,
        module: 109,
        component: 101,
        event_name: 'AddToCart',
        ...baseParams,
        ...productInfoParams
      };
      super.collect(params);
    }

  }

  _exports.default = ProductQuickAddCart;
  return _exports;
}();