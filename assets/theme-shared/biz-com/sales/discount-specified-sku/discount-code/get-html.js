window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/discount-code/get-html.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/discount-code/get-html.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const dayjs = window['dayjs']['default'];
  const find = window['lodash']['find'];
  const { rgba, javascriptTemplate, getSaleBackgroundHtml, getDrawerHtml } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'];
  const getDiscountInfo = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/discount-code/get-info.js'].default;
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function getDiscountCouponMoreOneHtml(discountCodeActivityList, buyerId) {
    const items = [];
    discountCodeActivityList.forEach(item => {
      if (items.length < 3) {
        if (get(item, 'benefitType') !== 3) {
          items.push(item);
        } else if (!find(items, _item => _item.benefitType === 3)) {
          items.push(item);
        }
      }
    });

    const getIconHtml = () => {
      return `<svg class="sales__discountCouponBanner-tagIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.26454 5.45057L4.26454 8.4646C5.70762 8.75783 6.79361 
          10.0328 6.79361 11.5626C6.79361 13.0924 5.70762 14.3673 
          4.26454 14.6605L4.26454 17.6744H19.8605L19.8605 14.6605C18.4174 
          14.3673 17.3314 13.0924 17.3314 11.5626C17.3314 10.0328 18.4174 
          8.75784 19.8605 8.4646L19.8605 5.45057H4.26454ZM3 5.23981C3 4.65783 
          3.47179 4.18604 4.05378 4.18604H20.0712C20.6532 4.18604 21.125 4.65783 
          21.125 5.23981L21.125 8.61199C21.125 9.21532 20.6466 9.61339 20.1772 
          9.6918C19.2799 9.84168 18.5959 10.6229 18.5959 11.5626C18.5959 12.5023 
          19.2799 13.2835 20.1772 13.4333C20.6465 13.5117 21.125 13.9098 21.125 
          14.5132L21.125 17.8852C21.125 18.4671 20.6532 18.9389 20.0712 
          18.9389H4.05378C3.47179 18.9389 3 18.4671 3 17.8852L3 14.5132C3 13.9098 
          3.47845 13.5117 3.94785 13.4333C4.84511 13.2835 5.52907 12.5023 5.52907 
          11.5626C5.52907 10.6229 4.84511 9.84168 3.94785 9.6918C3.47845 9.61339 3 9.21532 3 8.61199L3 5.23981Z"
          fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.90137 15.356L8.90137 7.7688H9.32288C9.78847 7.7688 
          10.1659 8.14623 10.1659 8.61182V14.513C10.1659 14.9786 9.78847 15.356 9.32288 15.356H8.90137Z"
          fill="currentColor" />
      </svg>`;
    };

    const getLeftContainerHtml = () => {
      return items.map(item => {
        const {
          __customDiscountText,
          __buyXGetYDiscountText
        } = getDiscountInfo(item);
        return `<span class="sales__discountCouponBanner-couponItem sales__discountCouponBanner-couponItem-hook">
          <span>
            ${item.benefitType === 12 ? __buyXGetYDiscountText : __customDiscountText} 
          </span>
          <span class="sales__discountCouponBanner-couponItemDivide"></span>
        </span>`;
      }).join(' ');
    };

    const getRightContainerHtml = () => {
      return `<div class="sales__discountCouponBanner-getCodeWrap">
      <span class="sales__discountCouponBanner-getCode">${t('sales.discount_coupon.get_code')}</span>
  </div>`;
    };

    const getCouponCardTypeOneHtml = discountCodeActivity => {
      const reg = /\{\s*(\w+)\s*\}/g;
      const {
        thresholdValText,
        benefitCondition,
        benefitType,
        discountValText,
        __customShippingPriceRangeText,
        discountCode,
        productDetailConfig,
        currentActivityInfoItem,
        couponTemplate,
        targetUserType,
        prerequisiteShippingPriceRange,
        endTime,
        __minThreshold,
        benefitEventType,
        __customThresholdText,
        __customDiscountText
      } = getDiscountInfo(discountCodeActivity);
      const containerStyle = productDetailConfig.discountCodeBgColor ? `background-color: ${productDetailConfig.discountCodeBgColor};` : '';
      const textColorStyle = productDetailConfig.textColor ? `color: ${productDetailConfig.textColor};` : '';
      const textColorOpStyle = productDetailConfig.textColor ? `color: ${rgba(productDetailConfig.textColor, 0.7)};` : '';
      const discountCodeTextStyle = productDetailConfig.discountCodeTextColor ? `color: ${productDetailConfig.discountCodeTextColor};` : '';
      const discountConditionStyleText = productDetailConfig.discountConditionStyleText && __minThreshold > 0 && benefitEventType !== -1 ? productDetailConfig.discountConditionStyleText : '';
      const discountBenefitStyleText = productDetailConfig.discountBenefitStyleText || '';
      let btnStyle = '';

      if (productDetailConfig.btnBgColor) {
        btnStyle += `background-color: ${productDetailConfig.btnBgColor};`;
      }

      if (productDetailConfig.btnTextColor) {
        btnStyle += `color: ${productDetailConfig.btnTextColor};`;
      }

      const getThresholdHtml = () => {
        if (couponTemplate === '2' && discountConditionStyleText) {
          return `<div class="sales-discount-coupon-card1__threshold" style="${textColorStyle}">
        ${javascriptTemplate(discountConditionStyleText, reg, {
            condition: thresholdValText,
            benefitCount: benefitCondition.benefit.benefitCount
          })}
      </div>`;
        }

        if (__customThresholdText) {
          return `<div class="sales-discount-coupon-card1__threshold" style="${textColorStyle}">
        ${__customThresholdText}
        </div>`;
        }

        return '';
      };

      const getDiscountdHtml = () => {
        if (couponTemplate === '2' && discountBenefitStyleText) {
          return `<div class="sales-discount-coupon-card1__discount ${benefitType === 3 ? 'sales-discount-coupon-card1__discount--bold' : ''}" style="${textColorStyle}">
        ${javascriptTemplate(discountBenefitStyleText, reg, {
            discount: discountValText
          })}
      </div>`;
        }

        if (__customDiscountText) {
          return `<div class="sales-discount-coupon-card1__discount ${benefitType === 3 ? 'sales-discount-coupon-card1__discount--bold' : ''}" style="${textColorStyle}">
        ${__customDiscountText}
        </div>`;
        }

        return '';
      };

      const shippingPriceRangeHtml = prerequisiteShippingPriceRange > 0 && __customShippingPriceRangeText ? `<div class="sales-discount-coupon-card1__below" style="${textColorOpStyle}">
        ${__customShippingPriceRangeText}
      </div>` : '';

      const getTargetUserTypeHtml = () => {
        let str = '';

        if (targetUserType) {
          if (targetUserType === 2 && buyerId) {
            str = `<div class="sales-discount-coupon-card1__customers" style="${textColorOpStyle}">${t('sales.discount_coupon.coupon_content_level', {
              level: currentActivityInfoItem.level
            })}</div>`;
          } else {
            str = `<div class="sales-discount-coupon-card1__customers" style="${textColorOpStyle}">${t('sales.discount_coupon.specified_customer')}</div>`;
          }
        }

        return str;
      };

      const endTimeHtml = endTime ? `<div class="sales-discount-coupon-card1__expire" style="${textColorOpStyle}">
          ${t('sales.discount_coupon.active_date_until', {
        endTime: `<span data-timestamp=${endTime} data-format="YYYY-MM-DD HH:mm">${dayjs(endTime).format('YYYY-MM-DD HH:mm')}</span>`
      })}
      </div>` : '';
      const couponRightContainerHtml = `<div class="sales-discount-coupon-card1__right d-flex">
      <div class="text-uppercase sales-discount-coupon-card1__code-name notranslate" 
      style="${discountCodeTextStyle}">${discountCode}</div>
      <div class="text-uppercase fw-bold sales-discount-coupon-card1__button sales-discount-coupon-card-btn-hook" 
        data-apply="${t('sales.discount_coupon.apply')}"
        data-applied="${t('sales.discount_coupon.applied')}"
        data-is-custom="${couponTemplate === '2' ? true : ''}"
        data-btn-bg-color="${productDetailConfig.btnBgColor}"
        data-btn-text-color="${productDetailConfig.btnTextColor}"
        style="${btnStyle}">
        ${t('sales.discount_coupon.apply')}
      </div>
    </div>`;
      return `<div class="d-flex sales-discount-coupon-card1__container sales-discount-coupon-hook" 
    data-discount-code="${discountCode}" 
    style="${containerStyle}">
      ${getSaleBackgroundHtml(productDetailConfig.discountBgImg_mobile, productDetailConfig.discountBgImg)}
      <div class="sales-discount-coupon-card1__left d-felx">
        ${getThresholdHtml()}
        ${getDiscountdHtml()}
        ${shippingPriceRangeHtml}
        ${getTargetUserTypeHtml()}
        ${endTimeHtml}
      </div>
      ${couponRightContainerHtml}
    </div>`;
    };

    const getCouponCardTypeTwoHtml = discountCodeActivity => {
      const {
        __customThresholdText,
        __customDiscountText,
        benefitType,
        prerequisiteShippingPriceRange,
        __customShippingPriceRangeText,
        targetUserType,
        currentActivityInfoItem,
        endTime,
        discountCode
      } = getDiscountInfo(discountCodeActivity);
      const iconHtml = `<div class="sales-discount-coupon-card2__left-bg">
      <svg  width="100%" height="100%" viewBox="0 0 199 96" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 0H199V96H0V94C2.20914 94 4 92.2091 4 90C4 87.7909 2.20914 86 0 86V82C2.20914 
          82 4 80.2091 4 78C4 75.7909 2.20914 74 0 74V70C2.20914 70 4 68.2091 4 66C4 63.7909 
          2.20914 62 0 62V58C2.20914 58 4 56.2091 4 54C4 51.7909 2.20914 50 0 50V46C2.20914 
          46 4 44.2091 4 42C4 39.7909 2.20914 38 0 38V34C2.20914 34 4 32.2091 4 30C4 27.7909 
          2.20914 26 0 26V22C2.20914 22 4 20.2091 4 18C4 15.7909 2.20914 14 0 14V10C2.20914 
          10 4 8.20914 4 6C4 3.79086 2.20914 2 0 2V0Z"
          fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 0H199V96H0V94C2.20914 94 4 92.2091 4 90C4 87.7909 2.20914 86 0 86V82C2.20914 
          82 4 80.2091 4 78C4 75.7909 2.20914 74 0 74V70C2.20914 70 4 68.2091 
          4 66C4 63.7909 2.20914 62 0 62V58C2.20914 58 4 56.2091 4 54C4 51.7909 
          2.20914 50 0 50V46C2.20914 46 4 44.2091 4 42C4 39.7909 2.20914 38 0 
          38V34C2.20914 34 4 32.2091 4 30C4 27.7909 2.20914 26 0 26V22C2.20914 
          22 4 20.2091 4 18C4 15.7909 2.20914 14 0 14V10C2.20914 10 4 8.20914 4 6C4 3.79086 2.20914 2 0 2V0Z"
          fill="currentColor" />
      </svg>
    </div>`;
      const customThresholdTextHtml = __customThresholdText ? `<div class="sales-discount-coupon-card2__threshold">
        ${__customThresholdText}
      </div>` : '';
      const customDiscountTextHtml = __customDiscountText ? `<div class="sales-discount-coupon-card2__discount ${benefitType === 3 ? 'sales-discount-coupon-card2__discount--bold' : ''}">
        ${__customDiscountText}
      </div>` : '';
      const shippingPriceRangeHtml = prerequisiteShippingPriceRange > 0 && __customShippingPriceRangeText ? `<div class="sales-discount-coupon-card2__below">
          ${__customShippingPriceRangeText}
        </div>` : '';

      const targetUserTypeHtml = () => {
        let str = '';

        if (targetUserType) {
          if (targetUserType === 2 && buyerId) {
            str = `<div class="sales-discount-coupon-card2__customers">${t('sales.discount_coupon.coupon_content_level', {
              level: currentActivityInfoItem.level
            })}</div>`;
          } else {
            str = `<div class="sales-discount-coupon-card2__customers">${t('sales.discount_coupon.specified_customer')}</div>`;
          }
        }

        return str;
      };

      const endTimeHtml = endTime ? `<div class="sales-discount-coupon-card2__expire">
        ${t('sales.discount_coupon.active_date_until', {
        endTime: `<span data-timestamp=${endTime} data-format="YYYY-MM-DD HH:mm">${dayjs(endTime).format('YYYY-MM-DD HH:mm')}</span>`
      })}
      </div>` : '';
      return `<div class="d-flex sales-discount-coupon-card2__container 
    sales-discount-coupon-hook" data-discount-code="${discountCode}">
      <div class="d-flex sales-discount-coupon-card2__left">
        ${iconHtml}
        ${customThresholdTextHtml}
        ${customDiscountTextHtml}
        ${shippingPriceRangeHtml}
        ${targetUserTypeHtml()}
        ${endTimeHtml}
      </div>
      <div class="sales-discount-coupon-card2__right d-flex">
        <div class="sales-discount-coupon-card2__code-name notranslate">${discountCode}</div>
        <div class="text-uppercase fw-bold sales-discount-coupon-card2__button 
        sales-discount-coupon-card-btn-hook" data-apply="${t('sales.discount_coupon.apply')}"
          data-applied="${t('sales.discount_coupon.applied')}">${t('sales.discount_coupon.apply')}</div>
      </div>
    </div>`;
    };

    const getDiscountCountItemsHtml = () => {
      return discountCodeActivityList.map(item => {
        const {
          couponTemplate
        } = getDiscountInfo(item);

        if (item.discountCodeDisplayStyle === 'discountCodeStyle1' || couponTemplate === '2') {
          return `<div class="sales-coupon-modal__list-item">
            ${getCouponCardTypeOneHtml(item)}
          </div>`;
        }

        if (item.discountCodeDisplayStyle === 'discountCodeStyle2') {
          return `<div class="sales-coupon-modal__list-item">
            ${getCouponCardTypeTwoHtml(item)}
          </div>`;
        }

        return '';
      }).join(' ');
    };

    const getDiscountCountModalHtml = () => {
      return `<div id="salesCouponModalHook" class="sales-coupon-modal__container">
      <div class="sales-coupon-modal__title">
        ${t('sales.discount_coupon.popup_label')}
      </div>
      <div class="sales-coupon-modal__list">
        ${getDiscountCountItemsHtml()}
      </div>
    </div>`;
    };

    const getDiscountCountDrawerHtml = () => {
      const title = t('sales.discount_coupon.popup_label');
      const id = 'salesDiscountCoupon_DiscountDrawer';
      const str = `<div class="d-flex sales-coupon-drawer__list">
      ${getDiscountCountItemsHtml()}
    </div>`;
      const $dom = $('#salesDiscountCoupon_DiscountDrawer').find('.sales-coupon-drawer__list');

      if (!$dom[0]) {
        return getDrawerHtml(id, title, str);
      }

      $dom.replaceWith(str);
      return ``;
    };

    return `<div class="sales__discountCouponBanner-container sales__discountCouponBanner-container-hook">
    <div class="sales__discountCouponBanner-left">
      ${getIconHtml()}
      ${getLeftContainerHtml()}
    </div>
    ${getRightContainerHtml()}
    ${getDiscountCountModalHtml()}
    ${getDiscountCountDrawerHtml()}
  </div>`;
  }

  _exports.getDiscountCouponMoreOneHtml = getDiscountCouponMoreOneHtml;

  function getDiscountCouponOnlyOneHtml(discountCodeActivityList, buyerId) {
    const item = discountCodeActivityList[0];
    const reg = /\{\s*(\w+)\s*\}/g;
    const {
      endTime,
      activityCustomInfo,
      targetUserType,
      discountCode,
      salesEnvCustomInfo,
      discountCodeDisplayStyle,
      thresholdValText,
      benefitCondition,
      discountValText,
      __minThreshold,
      benefitEventType,
      __customThresholdText,
      __customDiscountText
    } = getDiscountInfo(item);
    const {
      couponTemplate
    } = salesEnvCustomInfo.productDetailConfig;
    let templateType = 'template1';

    if (couponTemplate === '2') {
      templateType = 'customTemplate';
    } else if (discountCodeDisplayStyle === 'discountCodeStyle1') {
      templateType = 'template1';
    } else if (discountCodeDisplayStyle === 'discountCodeStyle2') {
      templateType = 'template2';
    }

    const {
      productDetailConfig
    } = salesEnvCustomInfo;
    const containerStyle = productDetailConfig.discountCodeBgColor ? `background-color: ${productDetailConfig.discountCodeBgColor};` : '';
    const textColorStyle = productDetailConfig.textColor ? `color: ${productDetailConfig.textColor};` : '';
    const textColorOpStyle = productDetailConfig.textColor ? `color: ${rgba(productDetailConfig.textColor, 0.7)};` : '';
    const discountCodeTextStyle = productDetailConfig.discountCodeTextColor ? `color: ${productDetailConfig.discountCodeTextColor};` : '';
    const currentActivityInfoItem = get(activityCustomInfo, [0]);
    const discountConditionStyleText = productDetailConfig.discountConditionStyleText && __minThreshold > 0 && benefitEventType !== -1 ? productDetailConfig.discountConditionStyleText : '';
    const discountBenefitStyleText = productDetailConfig.discountBenefitStyleText ? productDetailConfig.discountBenefitStyleText : '';
    let applyBtnStyle = '';

    if (productDetailConfig.btnBgColor && templateType === 'customTemplate') {
      applyBtnStyle += `background-color: ${productDetailConfig.btnBgColor};`;
    }

    if (productDetailConfig.btnTextColor && templateType === 'customTemplate') {
      applyBtnStyle += `color: ${productDetailConfig.btnTextColor};`;
    }

    let discountCouponOnlyOneLeftStyle = '';

    if (productDetailConfig.btnBgColor && templateType === 'customTemplate') {
      discountCouponOnlyOneLeftStyle = `border-right-color: ${rgba(productDetailConfig.btnBgColor, 0.7)} !important;`;
    }

    const getCustomThresholdHtml = () => {
      if (couponTemplate === '2' && discountConditionStyleText) {
        return `<span class="sales__discountCouponOnlyOne-threshold" style="${textColorStyle}">${javascriptTemplate(discountConditionStyleText, reg, {
          condition: thresholdValText,
          benefitCount: benefitCondition.benefit.benefitCount
        })}</span>`;
      }

      if (__customThresholdText) {
        return `<span class="sales__discountCouponOnlyOne-threshold" 
      style="${textColorStyle}">${__customThresholdText}</span>`;
      }

      return '';
    };

    const getCustomDiscountHtml = () => {
      if (couponTemplate === '2' && discountBenefitStyleText) {
        return `<span class="sales__discountCouponOnlyOne-discount" style="${textColorStyle}">${javascriptTemplate(discountBenefitStyleText, reg, {
          discount: discountValText
        })}</span>`;
      }

      if (__customDiscountText) {
        return `<span class="sales__discountCouponOnlyOne-discount" 
      style="${textColorStyle}">${__customDiscountText}</span>`;
      }

      return '';
    };

    const endTimeHtml = endTime ? `<span class="sales__discountCouponOnlyOne-otherInfoItem sales-discount-coupon-hook" 
        style="${textColorOpStyle}">${t('sales.discount_coupon.active_date_until', {
      endTime: dayjs(endTime).format('YYYY-MM-DD HH:mm')
    })}</span>` : '';

    const getTargetUserTypeHtml = () => {
      let targetUserTypeHtml = '';

      if (targetUserType) {
        if (targetUserType === 2 && buyerId) {
          targetUserTypeHtml = `<span class="sales__discountCouponOnlyOne-otherInfoItem"
            style="${textColorOpStyle}">${t('sales.discount_coupon.coupon_content_level', {
            level: currentActivityInfoItem.level
          })}</span>`;
        } else {
          targetUserTypeHtml = `<span class="sales__discountCouponOnlyOne-otherInfoItem" style="${textColorOpStyle}">${t('sales.discount_coupon.specified_customer')}</span>`;
        }
      }

      return targetUserTypeHtml;
    };

    const rightContainerHtml = `<div class="sales__discountCouponOnlyOne-applyBtn 
  sales__discountCouponOnlyOne-applyBtn-hook" 
  data-discount-code="${discountCode}"
  data-apply="${t('sales.discount_coupon.apply')}" 
  data-applied="${t('sales.discount_coupon.applied')}" 
  style="${applyBtnStyle}">${t('sales.discount_coupon.apply')}
</div>
  <div class="notranslate sales__discountCouponOnlyOne-discountCode sales__discountCouponOnlyOne-discountCode-hook" 
    style="${discountCodeTextStyle}">${discountCode}
  </div>`;
    return `<div class="sales__discountCouponOnlyOne-container 
  sales__discountCouponOnlyOne-container-hook ${templateType}" 
  style="${containerStyle}" data-discount-code="${discountCode}">
    ${getSaleBackgroundHtml(productDetailConfig.discountBgImg_mobile, productDetailConfig.discountBgImg)}
    <div class="sales__discountCouponOnlyOne-left" style="${discountCouponOnlyOneLeftStyle}">
      <div class="sales__discountCouponOnlyOne-leftTop">
        ${getCustomThresholdHtml()}
        ${getCustomDiscountHtml()}
      </div>
      <div class="sales__discountCouponOnlyOne-leftBottom">
        ${endTimeHtml}
        ${getTargetUserTypeHtml()}
      </div>
      <div class="notranslate sales__discountCouponOnlyOne-discountCode sales__discountCouponOnlyOne-discountCode-hook" 
      style="${discountCodeTextStyle}">${discountCode}</div>
    </div>
    <div class="sales__discountCouponOnlyOne-right">
      ${rightContainerHtml}
    </div>
  </div>`;
  }

  _exports.getDiscountCouponOnlyOneHtml = getDiscountCouponOnlyOneHtml;
  return _exports;
}();