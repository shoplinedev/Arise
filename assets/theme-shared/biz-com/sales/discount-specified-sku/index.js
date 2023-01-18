window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/index.js'] || function () {
  const _exports = {};
  const flashSaleRender = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/index.js'].default;
  const discountCodeRender = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/discount-code/index.js'].default;
  const autoCouponBannerRender = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-banner/index.js'].default;
  const { autoCouponAddToCartRender, setAddToCartActiveSku, setAddToCartSpu } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/auto-coupon-add-to-cart/index.js'];

  const handleDiscountCodeUpdate = (id, spuInfo, discountCodeActivityList, buyerId) => {
    const {
      getHtml,
      run,
      isRender
    } = discountCodeRender();

    if (isRender(id, spuInfo, discountCodeActivityList)) {
      const html = getHtml(discountCodeActivityList, buyerId);
      $('#discount-code-slot').html(html);
      const unmountedDiscountCoupon = run(spuInfo, discountCodeActivityList);
      return unmountedDiscountCoupon;
    }

    $('#discount-code-slot').html('');
    return null;
  };

  const handleFlashSaleUpdate = (spuInfo, timeLimitActivityList, id) => {
    const $targetDom = $(`#product-sku-trade-data_${id}`).parents('.product-preview-container');
    const {
      getHtml,
      run,
      isRender
    } = flashSaleRender();
    const countDownSlotStyleId = 'count_down_slot_style_dom';

    if (isRender(spuInfo, timeLimitActivityList)) {
      const html = getHtml(timeLimitActivityList);

      if (id && id !== 'productDetail') {
        $targetDom.find('.flash-sale-slot').html(html);
      } else {
        $('.flash-sale-slot').html(html);

        if (!document.getElementById(`${countDownSlotStyleId}`)) {
          const styleEle = document.createElement('style');
          styleEle.id = countDownSlotStyleId;
          styleEle.textContent = `[data-m-widget-scope='countDownTimer'],.countdown-component {
          display: none !important;
        }`;
          document.head.appendChild(styleEle);
        }
      }

      run(timeLimitActivityList);
    } else if (id && id !== 'productDetail') {
      $targetDom.find('.flash-sale-slot').html('');
    } else {
      $('.flash-sale-slot').html('');

      if (document.getElementById(`${countDownSlotStyleId}`)) {
        document.head.removeChild(document.getElementById(`${countDownSlotStyleId}`));
      }
    }
  };

  const handleAutoCouponBannerUpdate = (id, spuInfo, autoDiscountActivityList, parent) => {
    const {
      getHtml,
      run,
      isRender
    } = autoCouponBannerRender();

    if (isRender(id, spuInfo, autoDiscountActivityList)) {
      const html = getHtml(id, spuInfo, autoDiscountActivityList);
      $('#auto-coupon-banner-slot').html(html);
      const unmountedAutoCoupon = run(parent);
      return unmountedAutoCoupon;
    }

    $('#auto-coupon-banner-slot').html('');
    return null;
  };

  const handleAutoCouponAddToCartUpdate = (spuInfo, autoDiscountActivityList) => {
    const {
      getHtml,
      run,
      isRender
    } = autoCouponAddToCartRender();

    if (isRender(spuInfo, autoDiscountActivityList)) {
      const html = getHtml(autoDiscountActivityList);
      $('#auto-coupon-add-to-cart-slot').html(html);
      run();
    } else {
      $('#auto-coupon-add-to-cart-slot').html('');
    }
  };

  _exports.handleDiscountCodeUpdate = handleDiscountCodeUpdate;
  _exports.handleFlashSaleUpdate = handleFlashSaleUpdate;
  _exports.handleAutoCouponBannerUpdate = handleAutoCouponBannerUpdate;
  _exports.handleAutoCouponAddToCartUpdate = handleAutoCouponAddToCartUpdate;
  _exports.setAddToCartActiveSku = setAddToCartActiveSku;
  _exports.setAddToCartSpu = setAddToCartSpu;
  return _exports;
}();