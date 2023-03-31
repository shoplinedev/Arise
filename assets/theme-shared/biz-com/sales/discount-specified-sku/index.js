window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/index.js'] || function () {
  const _exports = {};
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
  _exports.handleAutoCouponBannerUpdate = handleAutoCouponBannerUpdate;
  _exports.handleAutoCouponAddToCartUpdate = handleAutoCouponAddToCartUpdate;
  _exports.setAddToCartActiveSku = setAddToCartActiveSku;
  _exports.setAddToCartSpu = setAddToCartSpu;
  return _exports;
}();