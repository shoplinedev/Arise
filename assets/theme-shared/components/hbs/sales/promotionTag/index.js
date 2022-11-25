window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/sales/promotionTag/index.js'] = window.SLM['theme-shared/components/hbs/sales/promotionTag/index.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;

  function defaultSafeString(str) {
    return str;
  }

  function promotionTag(currency, safeString = defaultSafeString) {
    function setWrapper(value, warper) {
      return safeString(warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${nc(warper.style, '')}">${value}</span>` : value);
    }

    const BenefitTypeEnum = {
      PRICE: 1,
      DISCOUNT: 2,
      BUY_X_GET_Y: 12,
      NTH_PRICE: 11,
      FREELOWESTPRICE: 9,
      FREESHOPPING: 3
    };
    const ThresholdTypeEnum = {
      PRICE: 0,
      NUMBER: 1
    };

    function formatBenefitNum(str, type, options) {
      if (str === undefined) {
        return '';
      }

      const num = Number(str) || 0;

      if (get(type, 'thresholdType') === ThresholdTypeEnum.NUMBER) {
        return num;
      }

      if (get(type, 'benefitType') === BenefitTypeEnum.DISCOUNT || get(type, 'benefitType') === BenefitTypeEnum.NTH_PRICE || get(type, 'benefitType') === BenefitTypeEnum.BUY_X_GET_Y) {
        return `${100 - num}%`;
      }

      if (get(type, 'benefitType') === BenefitTypeEnum.PRICE || get(type, 'thresholdType') === ThresholdTypeEnum.PRICE) {
        return `<span data-amount="${num}">${currency ? currency(num, options) : ''}</span>`;
      }

      if (get(type, 'benefitType') === BenefitTypeEnum.FREELOWESTPRICE) {
        return num.toString();
      }

      return '';
    }

    function getPromotionTagConfig(promotionBenefit, benefitType, warper) {
      const args = [...arguments];
      const options = args[args.length - 1];

      if (!get(promotionBenefit, 'benefit')) {
        return {
          path: '',
          params: {}
        };
      }

      const {
        type: thresholdType,
        minThreshold
      } = nc(promotionBenefit.benefitCondition, promotionBenefit.benefitEvent, {});
      const {
        discount,
        benefitAmount,
        benefitCount
      } = nc(get(promotionBenefit, 'benefit'), {});
      const basePath = `sales.promotion.discount_tag.b${benefitType}_t${thresholdType}`;
      let completePath = basePath;

      if (benefitType === BenefitTypeEnum.BUY_X_GET_Y) {
        if (Number(discount) === 0) {
          completePath = `${basePath}_free`;
        } else {
          completePath = `${basePath}_normal`;
        }
      }

      if (benefitType === BenefitTypeEnum.NTH_PRICE) {
        if (discount === 0) {
          completePath = `${basePath}_free`;
        } else {
          completePath = `${basePath}_normal`;
        }
      }

      let paymentCount = '';

      if (benefitType === BenefitTypeEnum.FREELOWESTPRICE) {
        paymentCount = minThreshold - benefitCount;
      }

      return {
        path: completePath,
        params: {
          save: setWrapper(formatBenefitNum(nc(benefitAmount, discount, benefitCount, 0), {
            benefitType
          }, options), { ...warper,
            class: `sales__promotionReminder-save ${nc(get(warper, 'class'), '')}`
          }),
          threshold: setWrapper(formatBenefitNum(nc(minThreshold, 0), {
            thresholdType
          }, options), { ...warper,
            class: `sales__promotionTag-threshold ${nc(get(warper, 'class'), '')}`
          }),
          paymentCount: setWrapper(paymentCount, { ...warper,
            class: `sales__promotionTag-threshold ${nc(get(warper, 'class'), '')}`
          }),
          benefitCount: benefitCount ? setWrapper(benefitCount, { ...warper,
            class: `sales__promotionTag-benefitCount ${nc(get(warper, 'class'), '')}`
          }) : ''
        }
      };
    }

    return getPromotionTagConfig;
  }

  _exports.default = promotionTag;
  return _exports;
}();