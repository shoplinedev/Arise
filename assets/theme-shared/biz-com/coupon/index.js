window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/coupon/index.js'] = window.SLM['theme-shared/biz-com/coupon/index.js'] || function () {
  const _exports = {};
  const debounce = window['lodash']['debounce'];
  const get = window['lodash']['get'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const LoggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { Status } = window['@yy/sl-theme-shared']['/utils/logger/sentry'];
  const { Owner, Action } = window['SLM']['theme-shared/biz-com/coupon/loggerReport.js'];
  const sentrylogger = LoggerService.pipeOwner(Owner.Coupon);

  const getEles = eleClass => document.querySelectorAll(eleClass);

  const isFn = object => typeof object === 'function';

  const getClosest = (ele, matchs) => {
    if (!ele.closest) {
      if (!ele.matches) {
        ele.matches = get(ele, 'msMatchesSelector', undefined) || get(ele, 'webkitMatchesSelector', undefined);
      }

      ele.closest = function closest(s) {
        let el = this;
        if (!document.documentElement.contains(el)) return null;

        do {
          if (el.matches(s)) return el;
          el = el.parentElement;
        } while (el !== null);

        return null;
      };
    }

    return ele.closest(matchs);
  };

  const eachEles = (eles, handler) => {
    Array.from(eles).forEach(ele => {
      handler(ele);
    });
  };

  const updateClasses = (eles, handle, className) => {
    eachEles(eles, ele => {
      const handleRes = ele.classList && ele.classList[handle];

      if (handleRes) {
        ele.classList[handle](className);
      }
    });
  };

  const eleSelectorMap = {
    couponWrapper: '.trade_coupon__wrapper',
    couponInpWrapper: '.trade_coupon',
    discountCodeInp: '.trade_coupon input',
    errTips: '.trade_coupon__wrapper .error-tips',
    appliedCodeBox: '.trade_coupon__appliedCodeBox',
    applyBtn: '.trade_coupon__btns-apply',
    loadingBtn: '.trade_coupon__btns-loading',
    delCodeBtn: '.trade_coupon__code__btn-del',
    couponErrorTips: '.trade_coupon_invalid_tips',
    closeErrorTips: '.trade_coupon_invalid_tips_close'
  };
  _exports.eleSelectorMap = eleSelectorMap;

  class Coupon {
    constructor({
      onChange,
      beforeInputFocus,
      afterInputBlur,
      onErrorTipsClosed,
      clickApplyBtn
    }) {
      this.couponInpWrapperEles = getEles(eleSelectorMap.couponInpWrapper);
      this.discountCodeInpEles = getEles(eleSelectorMap.discountCodeInp);
      this.errTipsEles = getEles(eleSelectorMap.errTips);
      this.appliedCodeBoxEles = getEles(eleSelectorMap.appliedCodeBox);
      this.applyBtnEles = getEles(eleSelectorMap.applyBtn);
      this.loadingBtnEles = getEles(eleSelectorMap.loadingBtn);
      this.delCodeBtnEles = getEles(eleSelectorMap.delCodeBtn);
      this.couponErrorTipsEles = getEles(eleSelectorMap.couponErrorTips);
      this.closeErrorTipsEles = getEles(eleSelectorMap.closeErrorTips);

      this.updateServiceDiscoutCode = onChange || (() => Promise.resolve('error'));

      this.onErrorTipsClosed = onErrorTipsClosed;
      this.beforeInputFocus = beforeInputFocus;
      this.afterInputBlur = afterInputBlur;
      this.clickApplyBtn = clickApplyBtn;
      this.debounceInput = debounce(this.handleChangeInput.bind(this), 30);
      this.preSaleInfo = {
        promotionCode: SL_State.get('cartInfo.promotionCodeDTO.promotionCode'),
        errorMsg: SL_State.get('cartInfo.promotionCodeDTO.errorMsg')
      };
      this.curWrapper = null;

      this.changeErrorTipsDisplayStatus = (action, handleClose) => () => {
        eachEles(this.couponErrorTipsEles, ele => {
          if (action === 'show') {
            $(ele).removeClass('hide');
            this.applyCouponSucceed = false;
            $(ele).slideDown(100);
          } else {
            $(ele).slideUp(100);
          }
        });

        if (action === 'hide' && handleClose) {
          this.applyCouponSucceed = true;
          this.onErrorTipsClosed && this.onErrorTipsClosed();
        }
      };

      this.applyCouponSucceed = false;
    }

    formatErrorInfo(discountCodeUnavailable, discountCode) {
      let errInfo;

      switch (discountCodeUnavailable) {
        case 'DISCOUNT_CODE_INVALID':
          errInfo = t('cart.discount.code_error');
          break;

        case 'DISCOUNT_CODE_CAN_NOT_ACCUMULATE':
          errInfo = t('transaction.general.discount_codes_cannot_stack');
          break;

        case 'DISCOUNT_CODE_NO_REACH':
          errInfo = t(`cart.discount.code_item_unmatched`, {
            discountCode
          });
          break;

        case 'MUTUAL_EXCLUDED_BY_TIME_LIMITED':
          errInfo = t('cart.discount.discounts_cannot_stack');
          break;

        case 'DISCOUNT_CODE_TOO_LONG':
          errInfo = t('transaction.general.coupon_code_exceed_not_64_characters');

          if (errInfo === 'transaction.general.coupon_code_exceed_not_64_characters') {
            errInfo = t('transaction.general.coupon_code_exceed_not_25_characters');

            if (errInfo === 'transaction.general.coupon_code_exceed_not_25_characters') {
              errInfo = t('cart.discount.coupon_code_length_limit', {
                range: '2~25'
              });
            } else {
              errInfo = errInfo.replace('25', '2~25');
            }
          } else {
            errInfo = errInfo.replace('64', '2~25');
          }

          break;

        case 'MUTUAL_EXCLUDED_BY_LEVEL_PRICE':
          errInfo = t('cart.discount.code_item_unmatched', {
            discountCode
          });
          break;

        case 'SHIPPING_PLAN_UNAVAILABLE':
          errInfo = t(`transaction.general.coupon_invalid_for_the_shipping_method`, {
            discountCode
          });
          break;

        default:
          errInfo = discountCodeUnavailable;
          break;
      }

      return errInfo;
    }

    updateErrTips(discountCodeUnavailable, discountCode) {
      const errInfo = this.formatErrorInfo(discountCodeUnavailable, discountCode);
      eachEles(this.errTipsEles, ele => {
        ele.classList[errInfo ? 'remove' : 'add']('hide');
        ele.innerText = errInfo;
      });
      updateClasses(this.couponInpWrapperEles, errInfo ? 'add' : 'remove', 'is-error');
    }

    updateTopErrorTips(discountCodeUnavailable, discountCode) {
      const errInfo = this.formatErrorInfo(discountCodeUnavailable, discountCode);
      this.topErrInfo = errInfo;

      const _that = this;

      if (errInfo) {
        setTimeout(() => {
          $('.trade_coupon_invalid_tips_content_info').text(errInfo);

          _that.changeErrorTipsDisplayStatus('show')();
        }, 100);
      }
    }

    updateCouponInpAndApplyBtnClassName(handle, className) {
      updateClasses(this.couponInpWrapperEles, handle, className);
      updateClasses(this.applyBtnEles, handle, className);
    }

    handleFocusInput(event) {
      this.beforeInputFocus && this.beforeInputFocus(event);
      this.updateCouponInpAndApplyBtnClassName('add', 'is-focus');
    }

    handleBlurInput(event) {
      this.updateCouponInpAndApplyBtnClassName('remove', 'is-focus');
      eachEles(this.discountCodeInpEles, ele => {
        if (ele.value) {
          ele.value = ele.value.trim();
        } else if (!this.applyCouponSucceed && this.topErrInfo) {
          this.changeErrorTipsDisplayStatus('show')();
        }
      });
      this.afterInputBlur && this.afterInputBlur(event);
    }

    selectInputContent() {
      eachEles(this.discountCodeInpEles, ele => {
        $(ele).select();
      });
    }

    handleChangeInput(e) {
      const {
        value
      } = e.target;
      let classnameOperate;
      let btnUpdateOperate;

      if (value.trim().length) {
        classnameOperate = 'add';
        const len = value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '*').length;

        if (len > 25 || len < 2) {
          this.updateErrTips('DISCOUNT_CODE_TOO_LONG');
          btnUpdateOperate = 'add';
        } else {
          this.updateErrTips();
          btnUpdateOperate = 'remove';
        }
      } else {
        this.updateErrTips();
        classnameOperate = 'remove';
        btnUpdateOperate = 'add';
      }

      eachEles(this.discountCodeInpEles, ele => {
        ele.value = value;
      });
      const emit = get(SL_EventBus, 'emit', undefined);

      if (emit) {
        emit(HD_EVENT_NAME.COUPON_INPUT, {
          data: {
            discountCode: value,
            ele: eleSelectorMap.couponWrapper,
            node: e
          }
        });
      }

      this.updateCouponInpAndApplyBtnClassName(classnameOperate, 'hasValue');
      updateClasses(this.applyBtnEles, btnUpdateOperate, 'is-disabled');
    }

    resetCouponInput() {
      eachEles(this.discountCodeInpEles, ele => {
        ele.value = '';
      });
      this.updateCouponInpAndApplyBtnClassName('remove', 'hasValue');
      updateClasses(this.applyBtnEles, 'add', 'is-disabled');
    }

    updateAppliedCouponCode(discountCode) {
      this.applyCouponSucceed = true;
      this.changeErrorTipsDisplayStatus('hide')();
      eachEles(this.appliedCodeBoxEles, ele => {
        ele.classList.remove('hide');
        ele.querySelector('.trade_coupon__code-content').innerText = discountCode;
      });
      this.resetCouponInput();
      this.handleBlurInput();
    }

    async handleApplyDiscountCode(e) {
      if (isFn(this.clickApplyBtn)) {
        this.clickApplyBtn();
      }

      const discountCode = this.discountCodeInpEles[0].value;
      if (!discountCode) return;
      updateClasses(this.applyBtnEles, 'add', 'hide');
      updateClasses(this.loadingBtnEles, 'remove', 'hide');
      const errCode = await this.updateServiceDiscoutCode(discountCode);
      updateClasses(this.applyBtnEles, 'remove', 'hide');
      updateClasses(this.loadingBtnEles, 'add', 'hide');

      if (errCode === 'error') {
        sentrylogger.warn('优惠券应用失败', {
          action: Action.Apply,
          status: Status.Failure
        });
        return;
      }

      if (!errCode) {
        const emit = get(SL_EventBus, 'emit', undefined);

        if (emit) {
          emit(HD_EVENT_NAME.COUPON_APPLY, {
            data: {
              discountCode,
              ele: eleSelectorMap.couponWrapper,
              node: e
            }
          });
        }
      } else {
        this.selectInputContent();
      }

      this.updateErrTips(errCode, discountCode);
    }

    async handleDelAppliedDiscountCode(e) {
      const preSaleInfoCopy = { ...this.preSaleInfo
      };
      this.preSaleInfo = {};
      const errCode = await this.updateServiceDiscoutCode('');

      if (errCode === 'error') {
        this.preSaleInfo = { ...preSaleInfoCopy
        };
        sentrylogger.warn('优惠券删除失败', {
          action: Action.Apply,
          status: Status.Failure
        });
        return;
      }

      this.curWrapper = getClosest(e.target, eleSelectorMap.couponWrapper);
      this.clearDiscountCode();
    }

    handleKeyPress(e) {
      const keyCode = e.which || e.keyCode;

      if (keyCode === 13) {
        this.handleApplyDiscountCode();
        return false;
      }
    }

    initEventListener() {
      const eventList = [{
        eve: 'focus',
        handler: this.handleFocusInput.bind(this)
      }, {
        eve: 'blur',
        handler: this.handleBlurInput.bind(this)
      }, {
        eve: 'keypress',
        handler: this.handleKeyPress.bind(this)
      }, {
        eve: 'input',
        handler: this.debounceInput
      }, {
        eve: 'cut',
        handler: this.debounceInput
      }, {
        eve: 'copy',
        handler: this.debounceInput
      }, {
        eve: 'paste',
        handler: this.debounceInput
      }, {
        eve: 'click',
        handler: this.handleApplyDiscountCode.bind(this),
        eles: this.applyBtnEles
      }, {
        eve: 'click',
        handler: this.handleDelAppliedDiscountCode.bind(this),
        eles: this.delCodeBtnEles
      }, {
        eve: 'click',
        handler: this.changeErrorTipsDisplayStatus('hide', true).bind(this),
        eles: this.closeErrorTipsEles
      }];
      eventList.forEach(({
        eve,
        handler,
        eles
      }) => {
        const curEles = eles || this.discountCodeInpEles;
        curEles.forEach(ele => {
          ele.addEventListener(eve, handler);
        });
      });
      this.discountCodeInpEles.forEach(ele => {
        const currentValue = $(ele).val();

        if (currentValue) {
          this.handleChangeInput({
            target: {
              value: currentValue
            }
          });
        }
      });
    }

    clearDiscountCode() {
      updateClasses(this.couponInpWrapperEles, 'remove', 'hasValue');
      if (this.curWrapper) this.curWrapper.querySelector('.trade_coupon input').focus();
    }

    updateStatus({
      valid,
      discountCode,
      errorMsg
    }) {
      this.preSaleInfo = {
        discountCode,
        errorMsg
      };

      if (!discountCode) {
        this.updateErrTips();
        eachEles(this.appliedCodeBoxEles, ele => {
          ele.classList.add('hide');
          ele.querySelector('.trade_coupon__code-content').innerText = '';
        });
        this.resetCouponInput();
        return;
      }

      if (valid) {
        this.applyCouponSucceed = true;
        this.updateAppliedCouponCode(discountCode);
        this.updateErrTips();
      } else {
        this.updateTopErrorTips(errorMsg, discountCode);
        eachEles(this.appliedCodeBoxEles, ele => {
          ele.classList.add('hide');
          ele.querySelector('.trade_coupon__code-content').innerText = '';
        });
        this.clearDiscountCode();
      }
    }

    init() {
      sentrylogger.info('优惠券初始化', {
        action: Action.Init
      });
      this.initEventListener();
    }

  }

  _exports.default = Coupon;
  return _exports;
}();