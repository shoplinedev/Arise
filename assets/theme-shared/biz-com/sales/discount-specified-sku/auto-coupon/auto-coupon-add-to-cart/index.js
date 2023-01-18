window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/index.js'] || function () {
  const _exports = {};
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const currency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { getAutoCouponAddCardHtml } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-html.js'];
  const addToCartReport = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/add-to-cart-report.js'].default;
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  let spu = {};
  let activeSku = null;

  const setAddToCartActiveSku = sku => {
    activeSku = sku ? { ...sku,
      name: spu.title
    } : null;
  };

  _exports.setAddToCartActiveSku = setAddToCartActiveSku;

  const setAddToCartSpu = (spuInfo, sku) => {
    spu = { ...spuInfo,
      ...sku
    };
  };

  _exports.setAddToCartSpu = setAddToCartSpu;

  const isRender = (spuInfo, autoDiscountActivityList) => {
    if (autoDiscountActivityList && autoDiscountActivityList.length && !spuInfo.inquiry) {
      const autoDiscountActivity = autoDiscountActivityList[0];

      if (autoDiscountActivity.discountStyleType === 2) {
        return true;
      }
    }

    return false;
  };

  const getHtml = autoDiscountActivityList => {
    const autoDiscountActivity = get(autoDiscountActivityList, [0]);
    return getAutoCouponAddCardHtml(autoDiscountActivity);
  };

  const run = () => {
    $('#page-product-detail .sales__add-to-cart-list-content').off('click').on('click', '.sales__add-to-cart-item-btn-hook', ev => {
      const {
        spuSeq: spuId,
        skuSeq: skuId,
        name,
        price
      } = activeSku;
      const eventID = getEventID();
      window.Shopline.event.emit('Cart::AddToCart', {
        data: {
          spuId,
          skuId,
          num: parseInt(ev.target.dataset.count, 10),
          price,
          name,
          eventID: `addToCart${eventID}`
        },
        onSuccess: () => {
          const quantity = parseInt(ev.target.dataset.count, 10);
          addToCartReport({
            products: [{ ...spu,
              skuId
            }],
            num: quantity,
            formatCurrency: currency.formatCurrency
          });
        },
        onError: error => {
          console.error(error);
        }
      });
    });
  };

  const autoCouponAddToCartRender = () => {
    return {
      isRender,
      getHtml,
      run
    };
  };

  _exports.autoCouponAddToCartRender = autoCouponAddToCartRender;
  return _exports;
}();