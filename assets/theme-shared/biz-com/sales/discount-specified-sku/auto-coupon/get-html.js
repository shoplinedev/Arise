window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-html.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-html.js'] || function () {
  const _exports = {};
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getSaleBackgroundHtml, javascriptTemplate, getDrawerHtml, isMobile } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'];
  const getInfo = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/auto-coupon/get-info.js'].default;
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const promotionTag = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/promotionTag.js'].default;

  function getAutoCouponItemHtml(autoDiscountActivityItem, benefitCondition) {
    const reg = /\{\s*(\w+)\s*\}/g;
    const {
      discountStyleText,
      benefitType
    } = getInfo(autoDiscountActivityItem);
    const config = promotionTag(convertFormat)(benefitCondition, benefitType);
    return javascriptTemplate(discountStyleText, reg, {
      condition: config.params.threshold,
      discount: config.params.save,
      benefitCount: config.params.benefitCount,
      paymentCount: config.params.paymentCount,
      fixedPrice: config.params.fixedPrice
    });
  }

  function getAutoCouponBannerHtml(autoDiscountActivityItem) {
    const {
      bannerBgColor,
      productDetailConfig,
      benefitType,
      linkUrl,
      btnTextColor,
      benefitConditions,
      bannerTextColor
    } = getInfo(autoDiscountActivityItem);
    const iconHtml = benefitType === 3 ? `<svg class="sales__autoCouponBanner-tagIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.88545 9.14253C3.88545 8.82694 4.14129 8.57111 4.45688 8.57111H7.02828C7.34387 
        8.57111 7.5997 8.82694 7.5997 9.14253C7.5997 9.45812 7.34387 9.71395 
        7.02828 9.71395H4.45688C4.14129 9.71395 3.88545 9.45812 3.88545 9.14253Z" fill="#C20000"/>
        <path d="M3.02832 11.4282C3.02832 11.1126 3.28416 10.8568 
        3.59974 10.8568H7.02828C7.34387 10.8568 7.5997 11.1126 7.5997 
        11.4282C7.5997 11.7438 7.34387 11.9996 7.02828 11.9996H3.59974C3.28416 
        11.9996 3.02832 11.7438 3.02832 11.4282Z" fill="#C20000"/>
        <path d="M13.3135 5.71427C13.3135 5.39868 13.5694 5.14285 
        13.885 5.14285H17.9325C18.1726 5.14285 18.3871 5.29295 18.4694 
        5.51854L20.136 10.0899C20.2441 10.3864 20.0914 10.7144 19.7949 
        10.8225C19.4984 10.9306 19.1704 10.7779 19.0623 10.4814L17.5326 
        6.28569H13.885C13.5694 6.28569 13.3135 6.02986 13.3135 5.71427Z" fill="#C20000"/>
        <path d="M4.74219 4.57142C4.74219 4.25583 4.99802 4 5.31361 
        4H13.4816C13.7972 4 14.053 4.25583 14.053 4.57142V10.0354H20.742C21.0576 
        10.0354 21.3134 10.2913 21.3134 10.6069V16.5713C21.3134 16.8869 
        21.0576 17.1427 20.742 17.1427H5.31361C4.99802 17.1427 4.74219 
        16.8869 4.74219 16.5713V14.3701C4.74219 14.0546 4.99802 13.7987 
        5.31361 13.7987C5.6292 13.7987 5.88503 14.0546 5.88503 
        14.3701V15.9999H20.1706V11.1783H13.4816C13.166 11.1783 
        12.9102 10.9225 12.9102 10.6069V5.14285H5.88503V6.20454C5.88503 
        6.52013 5.6292 6.77596 5.31361 6.77596C4.99802 6.77596 4.74219 
        6.52013 4.74219 6.20454V4.57142Z" fill="#C20000"/>
        <path d="M9.02786 17.1427C8.55448 17.1427 8.17072 17.5265 8.17072 
        17.9999C8.17072 18.4732 8.55448 18.857 9.02786 18.857C9.50124 18.857 
        9.88499 18.4732 9.88499 17.9999C9.88499 17.5265 9.50124 17.1427 9.02786 
        17.1427ZM7.02788 17.9999C7.02788 16.8953 7.9233 15.9999 9.02786 
        15.9999C10.1324 15.9999 11.0278 16.8953 11.0278 17.9999C11.0278 19.1044 
        10.1324 19.9998 9.02786 19.9998C7.9233 19.9998 7.02788 19.1044 7.02788 17.9999Z" fill="#C20000"/>
        <path d="M17.0278 17.1427C16.5544 17.1427 16.1706 17.5265 16.1706 
        17.9999C16.1706 18.4732 16.5544 18.857 17.0278 18.857C17.5012 
        18.857 17.8849 18.4732 17.8849 17.9999C17.8849 17.5265 17.5012 
        17.1427 17.0278 17.1427ZM15.0278 17.9999C15.0278 16.8953 15.9232 
        15.9999 17.0278 15.9999C18.1323 15.9999 19.0278 16.8953 19.0278 
        17.9999C19.0278 19.1044 18.1323 19.9998 17.0278 19.9998C15.9232 
        19.9998 15.0278 19.1044 15.0278 17.9999Z" fill="#C20000"/>
      </svg>` : `<svg class="sales__autoCouponBanner-tagIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.3335 11.4792L19.5002 4.50008L12.521 3.66675L3.18705 13.0007C2.99179 13.196 
          2.99179 13.5125 3.18705 13.7078L10.2924 20.8132C10.4877 21.0085 
          10.8043 21.0085 10.9995 20.8132L20.3335 11.4792Z"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path opacity="0.5"
          d="M13.5 8.49988C13.5 7.67145 14.1716 6.99988 15 6.99988C15.8284 
          6.99988 16.5 7.67145 16.5 8.49988C16.5 9.32831 15.8284 9.99988 
          15 9.99988C14.1716 9.99988 13.5 9.32831 13.5 8.49988Z"
          fill="currentColor" />
      </svg>`;
    const downIconHtml = `<svg class="sales__autoCouponBanner-downIcon sales__autoCouponBanner-downIcon-hook" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.7585 4H3.24134C2.7068 4 2.4391 4.64629 2.81708 5.02426L5.57565 
        7.78284C5.80997 8.01716 6.18987 8.01716 6.42418 7.78284L9.18276 5.02426C9.56074 4.64629 9.29304 4 8.7585 4Z"
        fill="currentColor" />
    </svg>`;

    const getBenefitConditionsHtml = () => {
      return benefitConditions.slice(0, 2).map(benefitCondition => {
        return `<span class="sales__autoCouponBanner-couponItem sales__autoCouponBanner-couponItem-hook">
          <span>
            ${getAutoCouponItemHtml(autoDiscountActivityItem, benefitCondition)}
          </span>
          <span class="sales__autoCouponBanner-couponItemDivide"></span>
        </span>`;
      }).join(' ');
    };

    const rightArrowHtml = linkUrl ? `<a href="${linkUrl}" class="sales__autoCouponBanner-shopMoreWrap" style="color:${btnTextColor}">
      <span class="sales__autoCouponBanner-shopMoreText sales__autoCouponBanner-shopMoreText-hook"
        style="${isMobile() ? 'display: none' : ''}">${t('transaction.payment.more')}</span>
      <svg class="sales__autoCouponBanner-shopMoreIcon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 11L8.5 6L3.5 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </a>` : '';

    const getAutoCountModalHtml = () => {
      return `<div class="sales__autoCouponModal-container">
      <div class="sales__autoCouponModal-list">
        ${benefitConditions.map(benefitCondition => {
        return `<div class="sales__autoCouponModal-listItem">
            ${getAutoCouponItemHtml(autoDiscountActivityItem, benefitCondition)}
          </div>`;
      }).join(' ')}
      </div>
    </div>`;
    };

    const getAutoCountDrawerHtml = () => {
      const title = '';
      const id = `salesAutoCouponDrawer-${autoDiscountActivityItem.activitySeq}`;
      const str = `  <div class="sales__autoCouponDrawer-list" style="color:${bannerTextColor}">
      ${benefitConditions.map(benefitCondition => {
        return `<div class="sales__autoCouponDrawer-listItem">
        ${getAutoCouponItemHtml(autoDiscountActivityItem, benefitCondition)}
      </div>`;
      }).join(' ')}
  </div>`;
      const $dom = $(`#${id}`).find('.sales__autoCouponDrawer-list');

      if (!$dom[0]) {
        return getDrawerHtml(id, title, str);
      }

      $dom.replaceWith(str);
      return ``;
    };

    return `
  <div data-track-eventid="60006253" data-track-page="pdp">
    <div class="sales__autoCouponBanner-container sales__autoCouponBanner-container-hook sales__autoCouponBanner-item" 
    style="background-color:${bannerBgColor}" data-seq="${autoDiscountActivityItem.activitySeq}">
      ${getSaleBackgroundHtml(get(productDetailConfig, 'bannerBgImg_mobile'), get(productDetailConfig, 'bannerBgImg'))}
      <div class="sales__autoCouponBanner-left" id="salesAutoCouponBannerLeftHook" 
      style="color:${bannerTextColor}" data-seq="${autoDiscountActivityItem.activitySeq}">
        ${iconHtml}
        ${getBenefitConditionsHtml()}
        ${downIconHtml}
        ${getAutoCountModalHtml()}
      </div>
      ${rightArrowHtml}
      ${getAutoCountDrawerHtml()}
    </div>
  </div>`;
  }

  _exports.getAutoCouponBannerHtml = getAutoCouponBannerHtml;

  function getAutoCouponAddCardHtml(autoDiscountActivityItem) {
    const {
      benefitConditions
    } = getInfo(autoDiscountActivityItem);
    return `<div class="sales__add-to-cart-list notranslate">
    <div class="sales__add-to-cart-list-title">${t('products.product_details.buy_more_save_more')}</div>
    <div id="addToCartList" class="sales__add-to-cart-list-content">
      ${benefitConditions.map(benefitCondition => {
      return `<div class="sales__add-to-cart-item">
            <span>${getAutoCouponItemHtml(autoDiscountActivityItem, benefitCondition)}</span>
            <button data-count="${benefitCondition.benefitEvent.minThreshold}" 
            class="sales__add-to-cart-item-btn sales__add-to-cart-item-btn-hook">${t('products.product_list.add_to_cart')}</button>
          </div>`;
    }).join(' ')}
    </div>
  </div>`;
  }

  _exports.getAutoCouponAddCardHtml = getAutoCouponAddCardHtml;
  return _exports;
}();