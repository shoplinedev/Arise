window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/index.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/index.js'] || function () {
  const _exports = {};
  const template = window['SLM']['theme-shared/utils/template.js'].default;
  const getShoppingReminderConfig = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js'].default;
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { redirectTo } = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/format.js'];

  const getPromotionBarContent = (promotion, rootWrapper) => {
    const isPCMainCart = rootWrapper.hasClass('main') && rootWrapper.hasClass('is-pc');
    let saleExtInfo = {};

    try {
      if (typeof promotion.saleExtInfo === 'string') {
        saleExtInfo = JSON.parse(promotion.saleExtInfo);
      }
    } catch (e) {
      console.warn('json.parse saleExtInfo value err:', e);
      saleExtInfo = {};
    }

    const bannerBgColor = get(saleExtInfo, 'cartBannerStyle.bannerBgColor');
    const bannerTextColor = get(saleExtInfo, 'cartBannerStyle.bannerTextColor');
    const discountTextColor = get(saleExtInfo, 'cartBannerStyle.discountTextColor');
    const config = getShoppingReminderConfig(promotion, {
      lineBreak: !isPCMainCart,
      warper: {
        style: `color: ${discountTextColor}`
      }
    });
    const needJump = get(config, 'step') !== 3;
    const bannerText = get(promotion, 'promotionBenefitList[0].extMap.bannerText');
    const promotionTemplate = bannerText ? template(bannerText, config.params, {
      prefix: '{'
    }) : '';
    const {
      extMap = {}
    } = config.params;

    if (needJump) {
      return `
      <div class="cart-sku-list-promotion-module-can-jump notranslate" style="background: ${bannerBgColor}">
        <a href="${redirectTo(`/activity/${promotion.activitySeq}?type=pool${extMap.meetThreshold === 'true' ? '&query_product_type=2' : ''}`)}" class="cart-sku-list-promotion-module-can-jump-wrapper">
          <div style="color: ${bannerTextColor}">
            ${promotionTemplate}
          </div>
          <div class="cart-sku-list-promotion-module-can-jump-arrow" style="font-size:0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round" style="stroke:${bannerTextColor};"/>
            </svg>
          </div>
        </a>
      </div>
    `;
    }

    return `
    <div class="cart-sku-list-promotion-module notranslate" style="background: ${bannerBgColor}">
      <span style="color: ${bannerTextColor}">
        ${promotionTemplate}
      </span>
    </div>
  `;
  };

  _exports.default = getPromotionBarContent;
  return _exports;
}();