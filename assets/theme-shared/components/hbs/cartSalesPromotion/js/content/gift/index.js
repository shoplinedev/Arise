window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/gift/index.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/gift/index.js'] || function () {
  const _exports = {};
  const { t: I18n } = window['SLM']['theme-shared/utils/i18n.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const template = window['SLM']['theme-shared/utils/template.js'].default;
  const { get, nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;

  function setWrapper(value, warper) {
    return warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${nc(warper.style, '')}"> ${value} </span>` : value;
  }

  const TypeEnum = {
    NONE: -1,
    AMOUNT: 0,
    NUMBER: 1
  };

  function formatBenefitNum(promotionBenefit) {
    const {
      type,
      amount
    } = promotionBenefit;

    if (amount === undefined) {
      return '';
    }

    const num = Number(amount) || 0;

    if (type === TypeEnum.NUMBER) {
      return num;
    }

    if (type === TypeEnum.AMOUNT) {
      return `<span data-amount="${num}">${convertFormat(num)}</span>`;
    }

    return '';
  }

  const getI18nKey = (step, configs, type) => {
    if (step === 1) {
      return type === TypeEnum.AMOUNT ? 'sales.gift.not_meet_amount_tip' : 'sales.gift.not_meet_quantity_tip';
    }

    if (step === 2) {
      return configs.hasSelectedGiftQuantity <= 0 || type === TypeEnum.NONE ? 'sales.gift.select_gift_tip' : type === TypeEnum.AMOUNT ? 'sales.gift.spend_more_money_get_more_tip' : 'sales.gift.spend_more_quantity_get_more_tip';
    }

    if (step === 3) {
      return configs.hasSelectedGiftQuantity <= 0 ? 'sales.gift.select_gift_tip' : 'sales.gift.got_all_gifts_tip';
    }

    return '';
  };

  const getGiftConfig = (promotion, configs = {}) => {
    const {
      benefitType,
      promotionBenefitList = []
    } = nc(promotion, {});
    const {
      hasSelectedGiftQuantity
    } = nc(configs, {});

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
        type: thresholdType
      } = current || next;
      const {
        warper
      } = configs;
      const savedCount = setWrapper(hasSelectedGiftQuantity, { ...warper,
        class: `sales__promotionReminder-saved discountText  ${nc(get(warper, 'class'))}`
      });
      const willSaveCount = setWrapper(hasSelectedGiftQuantity < 1 && current ? nc(get(current, 'extMap.realBenefitValue'), get(current, 'benefitCount')) : nc(get(next, 'extMap.realBenefitValue'), get(next, 'benefitCount')), { ...warper,
        class: `sales__promotionReminder-willSave discountText custom-sale-color ${nc(get(warper, 'class'))}`
      });
      return {
        path: getI18nKey(step, configs, get(current, 'type') || get(next, 'type')),
        params: {
          saved: savedCount,
          savedCount,
          willSave: willSaveCount,
          willSaveCount,
          threshold: setWrapper(formatBenefitNum(next || current), { ...warper,
            class: `sales__promotionReminder-threshold discountText custom-sale-color ${nc(get(warper, 'class'), '')}`
          })
        },
        step,
        benefitType,
        thresholdType,
        extra: hasSelectedGiftQuantity
      };
    }

    return {
      path: '',
      params: {},
      step: 0
    };
  };

  const getGiftContent = (promotion, rootWrapper, options = {}) => {
    const isPCMainCart = rootWrapper.hasClass('main') && rootWrapper.hasClass('is-pc');
    const config = getGiftConfig(promotion, options);
    const isMobile = window && window.SL_State && window.SL_State.get('request.is_mobile');
    const bannerText = get(promotion, 'promotionBenefitList[0].extMap.bannerText');
    const cartBannerStyleStr = get(promotion, 'promotionBenefitList[0].extMap.cartBannerStyle');
    let cartBannerStyle = {};

    try {
      cartBannerStyle = JSON.parse(cartBannerStyleStr);
    } catch (err) {}

    const pcBannerBgImg = cartBannerStyle.cartPage_bannerBgImg || '';
    const bannerBgImg = isMobile ? cartBannerStyle.cartPage_mobileBannerBgImg || pcBannerBgImg : pcBannerBgImg;
    const promotionTemplate = bannerText ? template(bannerText, config.params, {
      prefix: '{'
    }) : '';
    const styleScript = cartBannerStyle.cartPage_discountTextColor ? `<style type="text/css">
        [data-promotionseq="${promotion.promotionSeq}"] {
          background-color:  ${cartBannerStyle.cartPage_bannerBgColor || ''};
          color:  ${cartBannerStyle.cartPage_textColor || ''};
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          background-image: ${bannerBgImg ? `url(${bannerBgImg})` : ''}
        }
        [data-promotionseq="${promotion.promotionSeq}"] .discountText {
          color:  ${cartBannerStyle.cartPage_discountTextColor || ''};
        }
        [data-promotionseq="${promotion.promotionSeq}"] .cart-sku-list-promotion-module-arrow svg path {
          stroke: ${cartBannerStyle.cartPage_textColor || ''};
        }
      </style>` : '';
    return `
  <div class="cart-sku-list-promotion-module salesPluginGift__promotion" data-widget-scope="gift" data-activityseq="${promotion.activitySeq}" data-promotionseq="${promotion.promotionSeq}">
    ${styleScript}
    <div class="notranslate">
      ${promotionTemplate}
    </div>
    <span class="cart-sku-list-promotion-module-arrow">
      ${isPCMainCart ? I18n('sales.gift.select') : ''}
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </span>
  </div>
  `;
  };

  _exports.default = getGiftContent;
  return _exports;
}();