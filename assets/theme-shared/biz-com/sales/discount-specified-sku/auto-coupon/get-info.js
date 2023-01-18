window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-info.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-info.js'] || function () {
  const _exports = {};
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function getAutoDiscountInfo(autoDiscountActivityItem) {
    const productDetailConfig = get(autoDiscountActivityItem, 'salesEnvCustomInfo.productDetailConfig');
    const linkType = get(productDetailConfig, 'linkType') || 'activityPage';
    const btnTextColor = get(productDetailConfig, 'btnTextColor') || '#2C2C2C';
    const bannerBgColor = get(productDetailConfig, 'bannerBgColor') || '#FDF7F7';
    const bannerTextColor = get(productDetailConfig, 'bannerTextColor') || '#C20000';
    const seoHandleItem = get(autoDiscountActivityItem.seoHandleList, [0]);
    let linkUrl = get(productDetailConfig, 'customLink');

    if (linkType === 'activityPage' && seoHandleItem) {
      linkUrl = `/activity/${seoHandleItem}`;
    }

    return { ...autoDiscountActivityItem,
      linkType,
      btnTextColor,
      bannerBgColor,
      bannerTextColor,
      linkUrl,
      productDetailConfig
    };
  }

  _exports.default = getAutoDiscountInfo;
  return _exports;
}();