window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/sales/shoppingPromotionReminder/index.js'] = window.SLM['theme-shared/components/hbs/sales/shoppingPromotionReminder/index.js'] || function () {
  const _exports = {};
  const { nullishCoalescingOperator, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;
  const BenefitTypeEnum = {
    PRICE: 1,
    DISCOUNT: 2,
    BUY_X_GET_Y: 12,
    NTH_PRICE: 11,
    FREELOWESTPRICE: 9,
    FREESHOPPING: 3,
    NTH_FIXED_PRICE: 14
  };
  const ThresholdTypeEnum = {
    PRICE: 0,
    NUMBER: 1
  };
  const BenefitValueTypeEnum = {
    AMOUNT: '1',
    DISCOUNT: '2'
  };

  function defaultSafeString(str) {
    return str;
  }

  function getBenefitValue(benefitType, current, isNext = false, benefitValueType = null) {
    if ((benefitType === BenefitTypeEnum.PRICE || benefitValueType === BenefitValueTypeEnum.AMOUNT) && !isNext) {
      return get(current, 'amount');
    }

    if (benefitType === BenefitTypeEnum.FREELOWESTPRICE) {
      return get(current, 'benefitCount');
    }

    if (benefitType === BenefitTypeEnum.NTH_FIXED_PRICE) {
      const extMap = get(current, 'extMap');
      return isNext ? get(extMap, 'nextFixedPrice') : get(extMap, 'fixedPrice');
    }

    return get(current, 'benefit');
  }

  function shoppingPromotionReminder(currency, safeString = defaultSafeString) {
    function setWrapper(value, warper) {
      return safeString(warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${nc(warper.style, '')}"> ${value} </span>` : value);
    }

    function formatThreshold(str, types, options = {}) {
      if (str === undefined) {
        return '';
      }

      let num = Number(str) || 0;
      const thresholdType = get(types, 'thresholdType');
      const benefitType = get(types, 'benefitType');

      if (benefitType === BenefitTypeEnum.BUY_X_GET_Y && num < 0) {
        const minThreshold = get(types, 'minThreshold');
        const distance = Math.abs(num) % minThreshold;

        if (distance === 0) {
          num = Number(minThreshold);
        }

        num = distance;
      }

      if (thresholdType === ThresholdTypeEnum.NUMBER) {
        return num;
      }

      if (thresholdType === ThresholdTypeEnum.PRICE) {
        return `<span data-amount="${num}">${currency ? currency(num, options) : ''}</span>`;
      }

      return '';
    }

    function formatBenefitNum(str, props, options = {}) {
      if (str === undefined) {
        return '';
      }

      const num = Number(str) || 0;
      const benefitType = get(props, 'benefitType');
      const benefitValueType = get(props, 'benefitValueType');

      if (benefitValueType === BenefitValueTypeEnum.AMOUNT || benefitType === BenefitTypeEnum.NTH_FIXED_PRICE || benefitType === BenefitTypeEnum.PRICE) {
        return `<span data-amount="${num}">${currency ? currency(num, options) : ''}</span>`;
      }

      if (benefitValueType === BenefitValueTypeEnum.DISCOUNT || benefitType === BenefitTypeEnum.DISCOUNT || benefitType === BenefitTypeEnum.BUY_X_GET_Y || benefitType === BenefitTypeEnum.NTH_PRICE) {
        return `${100 - num}%`;
      }

      if (benefitType === BenefitTypeEnum.FREELOWESTPRICE) {
        return num;
      }

      return '';
    }

    function getShoppingReminderConfig(promotion, configs = {}, options = {}) {
      const {
        lineBreak = false,
        warper
      } = configs;
      const {
        benefitType,
        promotionBenefitList = []
      } = nc(promotion, {});

      if (promotionBenefitList.length) {
        let current;
        let next;
        let step;

        if (!get(promotionBenefitList, [1])) {
          if (promotionBenefitList[0].hit) {
            step = 3;
            current = get(promotionBenefitList, [0]);
          } else {
            step = 1;
            next = get(promotionBenefitList, [0]);
          }
        } else if (promotionBenefitList[1].hit) {
          step = 3;
          current = get(promotionBenefitList, [1]);
        } else {
          step = 2;
          current = get(promotionBenefitList, [0]);
          next = get(promotionBenefitList, [1]);
        }

        const {
          extMap = {},
          type: thresholdType
        } = current || next;
        const basePath = `sales.promotion.cart_reminder.b${benefitType}_t${thresholdType}_s${step}`;
        let completePath = basePath;
        const {
          meetThreshold,
          benefitValueType
        } = extMap;
        let extra = '';

        if (benefitType === BenefitTypeEnum.BUY_X_GET_Y) {
          if (step === 1 && meetThreshold === 'true') {
            if (Number(get(next, 'benefit')) === 0) {
              completePath = `${basePath}_achieve_free`;
              extra = '_achieve_free';
            } else {
              completePath = `${basePath}_achieve_normal`;
              extra = '_achieve_normal';
            }
          } else if (Number(get(current, 'benefit')) === 0 || Number(get(next, 'benefit')) === 0) {
            completePath = `${basePath}_free`;
            extra = '_free';
          } else {
            completePath = `${basePath}_normal`;
            extra = '_normal';
          }
        }

        if (benefitType === BenefitTypeEnum.NTH_PRICE) {
          if (Number(get(current, 'benefit')) === 0) {
            completePath = `${basePath}_free`;
            extra = '_free';
          } else if (Number(get(next, 'benefit')) === 0) {
            completePath = `${basePath}_next_free`;
            extra = '_next_free';
          } else {
            completePath = `${basePath}_normal`;
            extra = '_normal';
          }
        }

        const {
          prerequisiteShippingPriceRange
        } = extMap;

        if (benefitType === BenefitTypeEnum.FREESHOPPING) {
          if (prerequisiteShippingPriceRange) {
            completePath = `${basePath}_upper_limit`;
            extra = '_upper_limit';
          } else {
            completePath = `${basePath}_unlimited`;
            extra = '_unlimited';
          }
        }

        const saved = formatBenefitNum(getBenefitValue(benefitType, current, false, benefitValueType), {
          benefitType,
          benefitValueType
        }, options);
        const willSave = formatBenefitNum(getBenefitValue(benefitType, next, true, benefitValueType), {
          benefitType,
          benefitValueType
        }, options);
        const threshold = formatThreshold(get(next, 'amount'), {
          thresholdType,
          benefitType,
          minThreshold: Number(get(next, 'minThreshold'))
        }, options);
        let savedCount = Number(get(current, 'benefitCount'));
        let willSaveCount = Number(get(next, 'benefitCount'));
        let fixedAmount;
        let nextFixedAmount;

        if (benefitType === BenefitTypeEnum.BUY_X_GET_Y) {
          if (current) {
            savedCount = Number(nc(get(current, 'extMap.realBenefitValue'), savedCount));
          }

          if (next) {
            willSaveCount = Number(nc(get(next, 'extMap.realBenefitValue'), willSaveCount));
          }
        }

        if (benefitType === BenefitTypeEnum.NTH_FIXED_PRICE) {
          savedCount = Number(get(current, 'minThreshold'));
          willSaveCount = Number(get(next, 'minThreshold'));
          const benefit = current || next;
          fixedAmount = formatBenefitNum(Number(get(benefit, 'extMap.fixedPrice')), {
            benefitType
          }, options);
          nextFixedAmount = formatBenefitNum(Number(get(benefit, 'extMap.nextFixedPrice')), {
            benefitType
          }, options);
        }

        const benefitCount = Number(nc(savedCount, willSaveCount));
        return {
          path: thresholdType > -1 ? completePath : ' ',
          params: {
            saved: setWrapper(saved, { ...warper,
              class: `sales__promotionReminder-saved custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            willSave: setWrapper(willSave, { ...warper,
              class: `sales__promotionReminder-willSave custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            threshold: setWrapper(threshold, { ...warper,
              class: `sales__promotionReminder-threshold custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            savedCount: setWrapper(savedCount, { ...warper,
              class: `sales__promotionReminder--benefitCount custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            willSaveCount: setWrapper(willSaveCount, { ...warper,
              class: `sales__promotionReminder--benefitCount custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            fixedAmount: setWrapper(fixedAmount, { ...warper,
              class: `sales__promotionReminder--benefitCount custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            nextFixedAmount: setWrapper(nextFixedAmount, { ...warper,
              class: `sales__promotionReminder--benefitCount custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            upperLimit: benefitType === BenefitTypeEnum.FREESHOPPING && prerequisiteShippingPriceRange ? currency && currency(prerequisiteShippingPriceRange, options) : undefined,
            extMap,
            br: lineBreak ? setWrapper('<br/>') : setWrapper('<i></i>'),
            benefitCount: benefitCount >= 0 ? setWrapper(benefitCount, { ...warper,
              class: `sales__promotionReminder--benefitCount custom-sale-color ${nc(get(warper, 'class'), '')}`
            }) : '',
            currentMinThreshold: setWrapper(savedCount, { ...warper,
              class: `sales__promotionReminder-threshold custom-sale-color ${nc(get(warper, 'class'), '')}`
            }),
            nextMinThreshold: setWrapper(willSaveCount, { ...warper,
              class: `sales__promotionReminder-threshold custom-sale-color ${nc(get(warper, 'class'), '')}`
            })
          },
          benefitType,
          thresholdType,
          step,
          extra
        };
      }

      return {
        path: '',
        params: {},
        step: 0
      };
    }

    return getShoppingReminderConfig;
  }

  _exports.default = shoppingPromotionReminder;
  return _exports;
}();