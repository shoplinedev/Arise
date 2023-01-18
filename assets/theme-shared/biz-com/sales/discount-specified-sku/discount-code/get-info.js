window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/discount-code/get-info.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/discount-code/get-info.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { javascriptTemplate, replace } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'];
  const { get } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function getDiscountInfo(discountCodeActivity) {
    const regexp = /\$\{\s*([\w\\.\\[\]]+)\s*\}/g;
    const benefitCondition = get(discountCodeActivity.benefitConditions, [0]);
    const wrapper1 = '<span class="notranslate" style="font-weight: 600;">${val}</span>';
    const wrapper2 = '<span class="notranslate" style="font-weight: 600;" data-amount="${number}">${val}</span>';
    let discountText = '';
    const {
      benefitType
    } = discountCodeActivity;
    let discountValText = '';
    let buyXGetYDiscountText = '';
    let thresholdValText = '';

    if (benefitType === 1) {
      const discountAmount = get(benefitCondition, 'benefit.benefitAmount');

      if (discountAmount > 0) {
        discountValText = javascriptTemplate(wrapper2, regexp, {
          val: convertFormat(discountAmount),
          number: discountAmount
        });
        discountText = replace(t('sales.discount_coupon.coupon_discount_content'), '{discount}', discountValText);
      }
    }

    if (benefitType === 2) {
      const discountPercentage = get(benefitCondition, 'benefit.discount');

      if (discountPercentage >= 0 && discountPercentage <= 100) {
        const val = 100 - Number(discountPercentage);
        discountValText = javascriptTemplate(wrapper1, regexp, {
          val: `${val}%`
        });
        discountText = replace(t('sales.discount_coupon.coupon_discount_content'), '{discount}', discountValText);
      }
    }

    if (benefitType === 3) {
      discountText = t('sales.discount_coupon.free__shipping');
    }

    const benefitEventType = get(benefitCondition, 'benefitEvent.type');
    const minThreshold = get(benefitCondition, 'benefitEvent.minThreshold');
    let thresholdText = '';

    if (benefitType === 12) {
      const discountPercentage = get(benefitCondition, 'benefit.discount');

      if (discountPercentage <= 100) {
        const __discountCountText = get(benefitCondition, 'benefit.benefitCount');

        if (discountPercentage > 0) {
          const val = 100 - Number(discountPercentage);
          discountValText = javascriptTemplate(wrapper1, regexp, {
            val: `${val}%`
          });
          discountText = t('sales.discount_coupon.buy_x_get_y_discount_content', {
            discount: discountValText
          });
          buyXGetYDiscountText = t('sales.discount_coupon.buy_x_get_y_all_discount_content', {
            discount: discountValText,
            benefitCount: __discountCountText
          });
        } else {
          discountValText = javascriptTemplate(wrapper1, regexp, {
            val: 'FREE'
          });
          discountText = t('sales.discount_coupon.buy_x_get_y_free_content');
          buyXGetYDiscountText = t('sales.discount_coupon.buy_x_get_y_all_free_content', {
            benefitCount: __discountCountText
          });
        }
      }

      if (minThreshold > 0 && benefitEventType !== -1) {
        if (benefitEventType === 0) {
          thresholdValText = javascriptTemplate(wrapper2, regexp, {
            val: convertFormat(minThreshold),
            number: minThreshold
          });
        }

        if (benefitEventType === 1) {
          thresholdValText = javascriptTemplate(wrapper1, regexp, {
            val: minThreshold
          });
        }

        thresholdText = t('sales.discount_coupon.buy_x_get_y_threshold', {
          threshold: thresholdValText,
          benefitCount: get(benefitCondition, 'benefit.benefitCount')
        });
      }
    } else if (minThreshold > 0 && benefitEventType !== -1) {
      if (benefitEventType === 0) {
        thresholdValText = javascriptTemplate(wrapper2, regexp, {
          val: convertFormat(minThreshold),
          number: minThreshold
        });
      }

      if (benefitEventType === 1) {
        thresholdValText = javascriptTemplate(wrapper1, regexp, {
          val: minThreshold
        });
      }

      thresholdText = replace(t('sales.discount_coupon.threshold'), '{threshold}', thresholdValText);
    }

    let shippingPriceRangeText = '';

    if (get(discountCodeActivity, 'prerequisiteShippingPriceRange') > 0) {
      const shippingPriceRangeValText = javascriptTemplate('<span data-amount="${number}">${val}</span>', regexp, {
        val: convertFormat(get(discountCodeActivity, 'prerequisiteShippingPriceRange')),
        number: get(discountCodeActivity, 'prerequisiteShippingPriceRange')
      });
      shippingPriceRangeText = replace(t('sales.discount_coupon.shipping_rate_below'), '{value}', shippingPriceRangeValText);
    }

    return { ...discountCodeActivity,
      benefitType,
      thresholdValText,
      benefitCondition,
      discountValText,
      productDetailConfig: get(discountCodeActivity, 'salesEnvCustomInfo.productDetailConfig'),
      currentActivityInfoItem: get(discountCodeActivity.activityCustomInfo, [0]),
      __customDiscountText: discountText,
      __buyXGetYDiscountText: buyXGetYDiscountText,
      __customThresholdText: thresholdText,
      __customShippingPriceRangeText: shippingPriceRangeText,
      couponTemplate: get(discountCodeActivity, 'salesEnvCustomInfo.productDetailConfig.couponTemplate'),
      __minThreshold: minThreshold,
      benefitEventType
    };
  }

  _exports.default = getDiscountInfo;
  return _exports;
}();