window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-info.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-info.js'] || function () {
  const _exports = {};
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function getFlashSaleInfo(timeLimitActivity) {
    const {
      salesPlugin
    } = timeLimitActivity;
    let salesCustom = {};

    if (timeLimitActivity.salesEnvCustomInfo) {
      salesCustom = get(timeLimitActivity, 'salesEnvCustomInfo.productDetailConfig');
    }

    const flashSaleBg = salesCustom && salesCustom.bannerBgColor && salesCustom.bannerBgColor !== 'transparent' ? salesCustom.bannerBgColor : '';
    return {
      salesPlugin,
      salesCustom,
      flashSaleBg
    };
  }

  _exports.default = getFlashSaleInfo;
  return _exports;
}();