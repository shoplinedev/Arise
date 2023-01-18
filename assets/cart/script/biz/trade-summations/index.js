window.SLM = window.SLM || {};

window.SLM['cart/script/biz/trade-summations/index.js'] = window.SLM['cart/script/biz/trade-summations/index.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const throttle = window['lodash']['throttle'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const { initDetailModal, updateDetailModal } = window['@sl/cart']['/lib/summations/detailModal'];
  const store = window['@sl/cart']['/lib/utils/store'].default;
  const utils = window['SLM']['commons/utils/index.js'].default;
  const convertPrice = window['SLM']['cart/script/utils/price-convert.js'].default;
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const Tooltip = window['SLM']['commons/components/tooltip/index.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const TradeEventBus = window['SLM']['cart/script/utils/event-bus/index.js'].default;
  const { updateCheckBoxStatus } = window['SLM']['cart/script/components/trade-checkbox/index.js'];
  const logger = LoggerService.pipeOwner(`${Owner.Cart} biz/trade-summations/index.js`);
  const cartToken = Cookie.get('t_cart');
  let tooltip;
  const info_tips_icon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer; {{style}}">
<circle cx="6" cy="6" r="5.5" stroke="currentColor"/>
<path d="M6 3V6.5" stroke="currentColor" stroke-linecap="round"/>
<circle cx="6" cy="8.75" r="0.75" fill="currentColor"/>
</svg>
`;
  const useSuperScriptDecimals = SL_State.get('theme.settings.superscript_decimals');
  const MAX_AMOUNT = 999999999999999;

  class Summations {
    constructor() {
      this._data = {};

      this.getTriggerType = platform => platform === 'pc' ? 'hover' : 'click';

      this.getEles = key => $(`.trade_summations_fee[data-key="${key}"]`);

      this._renderTooltip = isMutra => {
        if (tooltip) {
          tooltip.destroy();
        }

        const platform = utils.helper.getPlatform();
        let selector = '.trade_summations_fee__tips[data-show-tips="true"]';

        if (isMutra) {
          selector = '.trade_summations_fee__tips[data-has-tips="true"]';
        }

        tooltip = new Tooltip({
          selector,
          trigger: this.getTriggerType(platform),
          title: t('transaction.discount.use_coupon_alone')
        });
        $(selector).html(info_tips_icon);
      };

      this._keyList = [];

      this.getInitData = () => {
        const summationsFeeEles = document.querySelectorAll('.trade_summations_fee');
        const data = store.get() ? store.get().cartInfo || {} : {};
        const dataFromEle = Array.from(summationsFeeEles).reduce((obj, ele) => {
          const newObj = { ...obj
          };
          const {
            dataset,
            classList
          } = nullishCoalescingOperator(ele, {});
          const {
            key,
            showDetail
          } = nullishCoalescingOperator(dataset, {});
          initDetailModal({
            ele,
            key,
            data,
            showDetail
          });
          this._keyList = [...this._keyList, key];

          if (!newObj[key]) {
            newObj[key] = {
              isHidden: Array.from(classList || []).includes('hide'),
              ...dataset
            };
          }

          return newObj;
        }, {});
        this._data = { ...this._data,
          ...dataFromEle
        };
      };

      this._toggleVisiable = (key, hidden) => {
        const matchedObj = this._data[key];
        const $matchedEles = this.getEles(key);
        $matchedEles[hidden ? 'addClass' : 'removeClass']('hide');
        matchedObj.isHidden = hidden;
      };

      this.updateMutraTip = promotionCodeDTO => {
        const discountCodeTipsParantEle = this.getEles('codePromotionAmount').find('.trade_summations_fee__tips');

        if (promotionCodeDTO && promotionCodeDTO.discountCodePromotionExclusion) {
          this._renderTooltip(true);
        } else {
          tooltip && tooltip.destroy && tooltip.destroy();
          discountCodeTipsParantEle.html('');
        }
      };

      this.updateMemberPoint = memberPointInfo => {
        const {
          use,
          enable,
          deductMemberPointNum,
          deductMemberPointAmount
        } = memberPointInfo || {};
        const deductMemberPointAmountEles = this.getEles('deductMemberPointAmount');
        deductMemberPointAmountEles.find('.trade_checkout_checkbox');
        updateCheckBoxStatus(use, deductMemberPointAmountEles.find('.trade_checkout_checkbox'));
        const descEl = deductMemberPointAmountEles.find('.trade_summations_fee__desc');
        const pointAmountEl = deductMemberPointAmountEles.find('.pointAmount');

        if (enable) {
          deductMemberPointAmountEles.removeClass('hide');
        } else {
          deductMemberPointAmountEles.addClass('hide');
        }

        if (!use) {
          descEl.removeClass('hide');
          pointAmountEl.addClass('hide');
        } else {
          descEl.addClass('hide');
          pointAmountEl.removeClass('hide');
        }

        let formattedValue = deductMemberPointAmount;

        if (typeof deductMemberPointAmount === 'number' || !deductMemberPointAmount) {
          formattedValue = convertFormat(deductMemberPointAmount);
        }

        descEl.html(t('transaction.refund.deduct_point', {
          deductMemberPointNum: `${nullishCoalescingOperator(deductMemberPointNum, 0)}`,
          deductMemberPointAmount: `<span class="deductMemberPointAmount">${formattedValue}</span>`
        }));
        pointAmountEl.find('.trade_summations_remark').html(t('transaction.refund.cost_points', {
          value: `${nullishCoalescingOperator(deductMemberPointNum, 0)}`
        }));
      };

      this.toggleMemberPoint = checked => {
        const pointsAmountDescEle = $('.trade_summations_fee__desc');
        const pointsAmountValueEle = $('.pointAmount');

        if (!checked) {
          pointsAmountValueEle.addClass('hide');
          pointsAmountDescEle.removeClass('hide');
        } else {
          pointsAmountDescEle.addClass('hide');
          pointsAmountValueEle.removeClass('hide');
        }

        CartService.takeCartService().getMemberPoint(checked).then(res => {
          if (res.success) {
            CartService.takeCartService().getCartDetail();
          }
        });
      };

      this.toggleAmountErrorAlert = totalAmount => {
        const tradeAmountErrorAlertEle = $('.cart-amount-error-alert');

        if (totalAmount / 100 <= MAX_AMOUNT) {
          tradeAmountErrorAlertEle.addClass('hide');
        } else {
          tradeAmountErrorAlertEle.removeClass('hide');
        }
      };

      this._updatePrivateData = (key, value, isSameAsOldValue) => {
        const matchedObj = this._data[key];
        const $matchedEles = this.getEles(key);

        if (!isSameAsOldValue) {
          if (!value) {
            if (!matchedObj.showWithZeroValue) {
              this._toggleVisiable(key, true);
            }
          } else if (matchedObj.isHidden) {
            this._toggleVisiable(key, false);
          }

          matchedObj.value = value;
          $matchedEles.attr('data-value', value);
        }

        if (key === 'codePromotionAmount' && typeof value === 'string') {
          $matchedEles.find(`.trade_summations__amount-box`).text(value);
        } else {
          let formattedValue = value;

          if (typeof value === 'number') {
            formattedValue = convertFormat(value);
          }

          if (useSuperScriptDecimals && typeof value === 'number') {
            const {
              formattedPriceStr
            } = convertPrice(value);
            $matchedEles.find(`.trade_summations__amount-box`).html(formattedPriceStr);
          } else {
            $matchedEles.find(`.trade_summations__amount-box`).html(formattedValue);
          }

          if (typeof value === 'number') {
            $matchedEles.find(`.trade_summations__amount-box`).attr('data-amount', value);
          } else {
            $matchedEles.find(`.trade_summations__amount-box`).removeAttr('data-amount');
          }
        }
      };

      this.updateAmount = data => {
        const {
          promotionCodes,
          promotionCodeDTO: promotionCodeInfo,
          memberPointInfo,
          promotionAmount,
          discountBenefitType,
          discountCodeTotalAmount,
          totalAmount
        } = data;
        this.updateMutraTip(promotionCodeInfo);
        let promotionAvailable = false;
        let promotionFreeShippingMatched = false;
        let promotionDisplayValue = 0;

        if (discountBenefitType === 2) {
          promotionAvailable = true;
          promotionDisplayValue = t('transaction.general.free_shipping');
          promotionFreeShippingMatched = true;
        } else if (discountBenefitType == null || discountBenefitType === 1) {
          promotionAvailable = promotionAmount > 0;
          promotionDisplayValue = +promotionAmount;
        }

        this._keyList.forEach(key => {
          let newAmount = +data[key];
          updateDetailModal({
            key,
            data,
            ele: '.trade_summations__amount'
          });
          const validatePromotionCodesList = (promotionCodes || []).filter(item => item.valid) || [];
          const promotionCodeDTO = validatePromotionCodesList.length === 1 ? validatePromotionCodesList[0] : null;

          if (key === 'codePromotionAmount') {
            newAmount = Number(discountCodeTotalAmount);
            const discountCodeSumAmountEles = this.getEles('codePromotionAmount');
            const freeShipping = get(promotionCodeDTO, 'discountCodeBenefitType', '') === 3;

            if (freeShipping) {
              newAmount = t('transaction.general.free_shipping');
              discountCodeSumAmountEles.find('.trade_summations__amount_reduce').addClass('hide');
            } else {
              if (promotionCodeDTO) {
                newAmount = promotionCodeDTO.targetSelection === 'entitled' ? 0 : +(promotionCodeDTO.codePromotionAmount || 0);
              } else {
                newAmount = Number(discountCodeTotalAmount);
              }

              discountCodeSumAmountEles.find('.trade_summations__amount_reduce').removeClass('hide');
            }

            this._updatePrivateData(key, newAmount, false);

            return;
          }

          if (key === 'freeShipping') {
            newAmount = newAmount ? t('cart.payment.free') : 0;
          } else if (key === 'deductMemberPointAmount') {
            newAmount = nullishCoalescingOperator(get(memberPointInfo, 'deductMemberPointAmount', 0), 0);
          } else if (key === 'totalAmount') {
            const totalAmountEles = this.getEles('totalAmount');
            const codePromotionAmountValue = Number(discountCodeTotalAmount);

            if (promotionAvailable || codePromotionAmountValue > 0 || +data.freeShipping > 0 || memberPointInfo && memberPointInfo.enable && memberPointInfo.use) {
              totalAmountEles && totalAmountEles.removeClass && totalAmountEles.removeClass('hide');
            } else {
              totalAmountEles && totalAmountEles.addClass && totalAmountEles.addClass('hide');
            }
          } else if (key === 'promotionAmount') {
            newAmount = promotionDisplayValue;
            const promotionAmountEles = this.getEles('promotionAmount');

            if (promotionFreeShippingMatched) {
              promotionAmountEles.find('.trade_summations__amount_reduce').addClass('hide');
            } else {
              promotionAmountEles.find('.trade_summations__amount_reduce').removeClass('hide');
            }

            this._updatePrivateData(key, newAmount, `${this._data.promotionAmount.value}` === `${newAmount}`);

            return;
          }

          const isSameAsOldValue = newAmount === +this._data[key].value;

          this._updatePrivateData(key, newAmount, isSameAsOldValue);
        });

        this.updateMemberPoint(memberPointInfo);
        this.toggleAmountErrorAlert(totalAmount);
      };

      this.initEventListener = () => {
        const {
          eventBus,
          eventBusEnum
        } = CartService;
        eventBus.on(eventBusEnum.UPDATE, this.updateAmount);
        eventBus.on('global:currency:format', () => this.updateAmount(store.get() && store.get().cartInfo || {}));
        this.initModalEventListener();
      };

      this.scrollHideTips = throttle(() => {
        tooltip.hide();
      }, 50);

      this.initModalEventListener = () => {
        $('.trade_summations .trade_summations__amount').off('mouseenter click').on('mouseenter click', function () {
          const $this = $(this);
          const $feeDetailModal = $this.parent('.trade_summations_fee').next('.summations_detail_modal');

          if ($feeDetailModal.length === 0) {
            return;
          }

          $feeDetailModal.removeClass('hide').find('.summations_detail_modal__wrapper').css({
            top: +(($this.offset() || {}).top || 0) + $this.height() - $(document).scrollTop()
          });
        });
        $('.trade_summations .trade_summations__amount').off('mouseleave').on('mouseleave', function () {
          const $feeDetailModal = $(this).parent('.trade_summations_fee').next('.summations_detail_modal');

          if ($feeDetailModal.length === 0) {
            return;
          }

          $feeDetailModal.addClass('hide');
        });
        $(window).off('touchmove').on('touchmove', throttle(() => {
          $('.summations_detail_modal').each(function () {
            const $curModalEle = $(this);

            if ($curModalEle.hasClass('hide') === false) {
              $curModalEle.addClass('hide');
            }
          });
        }, 30));
      };

      this.init = () => {
        logger.info(`normal 主站购物车 SummationModule 初始化 init`, {
          data: {
            cartToken
          },
          action: Action.InitCart,
          status: LoggerStatus.Start
        });
        this.initEventListener();
        this.getInitData();

        this._renderTooltip();

        utils.helper.listenPlatform(platform => {
          if (!tooltip) {
            return;
          }

          tooltip.toggle({
            trigger: this.getTriggerType(platform)
          });
        });
        $('.trade_mini_cart').parent().on('scroll', this.scrollHideTips);
        $('.trade_cart').parent().on('scroll', this.scrollHideTips);
        $('.trade_cart_not_empty_wrapper').on('scroll', this.scrollHideTips);
        $(document).on('scroll', this.scrollHideTips);
        TradeEventBus.on('trade:checkbox-trade_checkout_point_checkbox', this.toggleMemberPoint);
      };
    }

  }

  const summationBus = new Summations();
  _exports.default = summationBus;
  return _exports;
}();