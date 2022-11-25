window.SLM = window.SLM || {};

window.SLM['cart/script/components/sku-stepper.js'] = window.SLM['cart/script/components/sku-stepper.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { get_func, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { t: I18n } = window['SLM']['theme-shared/utils/i18n.js'];
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const CartUtil = window['SLM']['cart/script/utils/cart-util/index.js'].default;
  const cartHdReport = window['SLM']['cart/script/report/cartHdReport.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const { toggleVisibility } = window['SLM']['cart/script/biz/sticky-cart/index.js'];
  const observer = window['SLM']['cart/script/domain/model/observer.js'].default;
  const skuPromotionVerify = window['SLM']['cart/script/domain/model/skuPromotionVerify.js'].default;
  const { tActiveStockLimitWithMaxPurchaseReasonCode, toastTypeEnum } = window['SLM']['cart/script/domain/model/skuPromotionVerify.js'];
  const { cartLimitedEnum } = window['SLM']['cart/script/constant/stockType.js'];
  const modelHelper = window['SLM']['cart/script/domain/model/helpers.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/index.js'].default;
  const CartItemModel = window['SLM']['cart/script/domain/model/cartItem.js'].default;
  const logger = LoggerService.pipeOwner(`${Owner.Cart} components/sku-stepper`);
  const cartToken = Cookie.get('t_cart');

  const getCursorPosition = function (element) {
    let cursorPos = 0;

    if (document.selection) {
      const selectRange = document.selection.createRange();
      selectRange.moveStart('character', -element.value.length);
      cursorPos = selectRange.text.length;
    } else if (element.selectionStart || parseInt(element.selectionStart, 10) === 0) {
      cursorPos = element.selectionStart;
    }

    return cursorPos;
  };

  const getParentId = function (ele) {
    let t = ele;

    while (t && t.length) {
      if (t.hasClass('trade-cart-sku-item')) {
        return t.attr('id');
      }

      t = t.parent();
    }
  };

  const toast = new Toast({
    content: 'content',
    className: 'test'
  });

  class SkuStepper {
    constructor({
      root,
      name,
      price,
      normalSkuNum,
      totalSkuNum,
      disabled,
      spuId,
      skuId,
      priceType,
      stockType,
      skuAttr,
      setRendering,
      isRendering,
      cartType,
      setPreFocusedInputEle,
      setNeedForceFocus,
      groupId,
      productSource,
      maxPurchaseNum,
      maxPurchaseTotalNum,
      maxPurchaseReasonCode,
      indexStr,
      activeItems,
      itemNo
    }) {
      this.root = root;
      this.cartType = cartType;
      this.setPreFocusedInputEle = setPreFocusedInputEle;
      this.setNeedForceFocus = setNeedForceFocus;
      const stepperValue = {
        normalSkuNum,
        name,
        price,
        value: totalSkuNum,
        disabled,
        spuId,
        skuId,
        priceType,
        stockType,
        skuAttr,
        setRendering,
        isRendering,
        groupId,
        productSource,
        maxPurchaseNum,
        maxPurchaseTotalNum,
        maxPurchaseReasonCode,
        indexStr,
        itemNo
      };
      this.activeItems = activeItems;
      this.stepper = observer(stepperValue, {
        set: skuPromotionVerify.bind(this)
      });
      this.beforeValue = totalSkuNum;
    }

    init() {
      logger.info(`normal 主站购物车 skuStepper init`, {
        data: {
          cartToken,
          stepperInfo: this.stepper
        },
        action: Action.InitCart,
        status: LoggerStatus.Start
      });
      this.$stepper = this.root.find('.cart-stepper');
      this.$minusButton = this.$stepper.find('.cart-stepper-minus');
      this.$plusButton = this.$stepper.find('.cart-stepper-plus');
      this.$input = this.$stepper.find('.cart-stepper-input');
      this.initEventListener();
      this.render();
      $(window).on('unload', () => {
        this.unbind();
      });
      logger.info(`normal 主站购物车 skuStepper init`, {
        data: {
          cartToken,
          stepperInfo: this.stepper
        },
        action: Action.InitCart,
        status: LoggerStatus.Success
      });
    }

    unbind() {
      this.$minusButton && this.$minusButton.off && this.$minusButton.off();
      this.$plusButton && this.$plusButton.off && this.$plusButton.off();
      this.$input && this.$input.off && this.$input.off();
    }

    changeItemNumReport() {
      try {
        logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        cartHdReport.updateItem({
          spuId: this.stepper.spuId,
          skuId: this.stepper.skuId,
          quantity: this.beforeValue,
          price: this.stepper.price,
          update_quantity: this.stepper.value
        });

        if (this.stepper.value === 0) {
          const params = {
            spuId: this.stepper.spuId,
            skuId: this.stepper.skuId,
            quantity: this.beforeValue,
            num: this.beforeValue,
            name: this.stepper.name,
            price: this.stepper.price,
            skuAttr: this.stepper.skuAttr,
            itemNo: this.stepper.itemNo,
            groupId: this.stepper.groupId
          };
          const products = modelHelper.reducer(CartService.takeCartService().cartItemList).next(CartItemModel.findProductWithGroupIdAndSkuId, CartItemModel.getGroupId(params), CartItemModel.getSkuId(params))() || params;
          const subProducts = modelHelper.reducer(CartService.takeCartService().cartItemList).next(CartItemModel.filterProductInGroup, CartItemModel.getGroupId(products)).next(CartItemModel.filterProductsWithParentSkuId, CartItemModel.getSkuId(products))() || [];
          cartReport.removeItem(products, subProducts);
          cartHdReport.removeRp(params);
        }

        this.beforeValue = this.stepper.value;
        logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      } catch (e) {
        this.beforeValue = this.stepper.value;
        logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          error: e
        });
        console.error(e);
      }
    }

    changeItemNum() {
      logger.info(`normal 主站购物车 skuStepper changeItemNum`, {
        data: {
          cartToken,
          stepperInfo: this.stepper
        },
        action: Action.EditCart,
        status: LoggerStatus.Start
      });
      this.stepper.setRendering(true);
      this.changeItemNumReport();
      CartUtil.changeItemNum(this.stepper.spuId, this.stepper.skuId, this.stepper.value, this.stepper.groupId, this.stepper.productSource);
      logger.info(`normal 主站购物车 skuStepper changeItemNum`, {
        data: {
          cartToken,
          stepperInfo: this.stepper
        },
        action: Action.EditCart,
        status: LoggerStatus.Success
      });
    }

    limitToastNum(num) {
      if (num > 0) {
        return num;
      }

      return '0';
    }

    toastLimit() {
      const {
        maxPurchaseReasonCode,
        maxPurchaseTotalNum
      } = this.stepper;

      if (cartLimitedEnum.NORMAL_ITEM_MAX_NUM.includes(maxPurchaseReasonCode)) {
        toast.open(I18n(`cart.item.add_limit2`));
        this.render();
      } else if (cartLimitedEnum.ACTIVE_LIMITED.includes(maxPurchaseReasonCode)) {
        toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum)));
      } else if (cartLimitedEnum.NORMAL_STOCK_OVER.includes(maxPurchaseReasonCode)) {
        toast.open(I18n(`cart.${toastTypeEnum.stockLimit}`, {
          stock: this.limitToastNum(maxPurchaseTotalNum)
        }));
      } else if (cartLimitedEnum.ACTIVE_STOCK_OVER.includes(maxPurchaseReasonCode)) {
        toast.open(I18n(`cart.${toastTypeEnum.stockLimit}`, {
          stock: this.limitToastNum(maxPurchaseTotalNum)
        }));
      }
    }

    initEventListener() {
      this.$minusButton && this.$minusButton.on && this.$minusButton.on('click', () => {
        logger.info(`normal 主站购物车 skuStepper minusBtnClick`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        this.setNeedForceFocus(false);
        const {
          stepper,
          groupTotalDiscountValue
        } = this;
        if (stepper.isRendering()) return;
        const {
          maxPurchaseReasonCode,
          maxPurchaseTotalNum,
          maxPurchaseNum,
          value
        } = stepper;
        const stepValue = Math.max(value - groupTotalDiscountValue, 1);

        if (stepValue > 0) {
          if (stepValue > maxPurchaseNum) {
            if (cartLimitedEnum.ACTIVE.includes(maxPurchaseReasonCode)) {
              toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(undefined, this.limitToastNum(maxPurchaseTotalNum)));
            } else {
              toast.open(I18n(`cart.${toastTypeEnum.stockLimit}`, {
                stock: this.limitToastNum(maxPurchaseTotalNum)
              }));
            }

            if (value === 1) {
              this.stepper.value = 0;
            } else if (maxPurchaseNum > 0) {
              this.stepper.value = maxPurchaseNum;
            } else {
              this.stepper.value = 1;
            }

            this.render();
          } else {
            this.stepper.value -= 1;
          }

          this.changeItemNum();
          logger.info(`normal 主站购物车 skuStepper minusBtnClick`, {
            data: {
              cartToken,
              stepperInfo: this.stepper
            },
            action: Action.EditCart,
            status: LoggerStatus.Success
          });
        }
      });
      this.$plusButton.on('click', () => {
        logger.info(`normal 主站购物车 skuStepper plusBtnClick`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        this.setNeedForceFocus(false);
        if (this.stepper.isRendering()) return;
        const {
          groupTotalDiscountValue,
          stepper
        } = this;
        const {
          value,
          maxPurchaseNum
        } = stepper;
        const stepValue = Math.max(value - groupTotalDiscountValue, 1);

        if (stepValue < maxPurchaseNum) {
          this.stepper.value += 1;
          this.changeItemNum();
        } else if (stepValue === maxPurchaseNum) {
          this.toastLimit();
        } else {
          this.toastLimit();

          if (stepValue > maxPurchaseNum) {
            this.stepper.value = maxPurchaseNum > 0 ? maxPurchaseNum + groupTotalDiscountValue : 1;
            this.render();
            this.changeItemNum();
          } else {
            this.render();
          }
        }

        logger.info(`normal 主站购物车 skuStepper plusBtnClick`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      });
      this.$input.on('input', e => {
        logger.info(`normal 主站购物车 skuStepper input`, {
          data: {
            cartToken,
            stepperInfo: this.stepper
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        const regExp = new RegExp(/^\d*/);
        const input = get_func(e, 'target.value.match').exec(regExp);
        let inputVal = '';

        if (get(input, '0') !== '') {
          const value = e.target.value ? Number(input[0].slice(0, Math.min(input[0].length, 5))) : e.target.value;
          this.stepper.value = value;
          inputVal = value;
        }

        this.setValue(inputVal);
        logger.info(`normal 主站购物车 skuStepper input`, {
          data: {
            cartToken,
            stepperInfo: this.stepper,
            inputVal
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      });
      this.$input.on('focus', () => {
        this.setNeedForceFocus(true);
        this.stepper.preValue = this.stepper.value;
        toggleVisibility(this.cartType, false);
        SL_State.set('cartInInputMode', true);
        this.setPreFocusedInputEle({
          id: getParentId(this.$input)
        });
      });
      this.$input.on('click', () => {
        this.setPreFocusedInputEle({
          pos: getCursorPosition(this.$input.get(0))
        });
      });
      this.$input.on('blur', e => {
        logger.info(`normal 主站购物车 skuStepper inputBlur`, {
          data: {
            cartToken,
            stepperInfo: this.stepper,
            currentStepper: e
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        this.setNeedForceFocus(true);
        toggleVisibility(this.cartType, true);
        SL_State.set('cartInInputMode', false);
        const value = Number(e.target.value);

        if (e.target.value === '') {
          this.stepper.value = 1;
          this.setValue(this.stepper.value);
          this.render();
          this.changeItemNum();
        } else {
          this.stepper.value = value;
          const {
            groupTotalDiscountValue
          } = this;
          const {
            maxPurchaseTotalNum,
            maxPurchaseNum,
            maxPurchaseReasonCode
          } = this.stepper;
          let totalValue = value + groupTotalDiscountValue;
          const overFlag = totalValue > maxPurchaseNum;

          if (overFlag) {
            if (cartLimitedEnum.NORMAL_ITEM_MAX_NUM.includes(maxPurchaseReasonCode)) {
              toast.open(I18n(`cart.item.add_limit2`));
            } else if (cartLimitedEnum.ACTIVE_LIMITED.includes(maxPurchaseReasonCode)) {
              toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum)));
            } else if (cartLimitedEnum.NORMAL_STOCK_OVER.includes(maxPurchaseReasonCode)) {
              toast.open(I18n(`cart.${toastTypeEnum.stockLimit}`, {
                stock: this.limitToastNum(maxPurchaseTotalNum)
              }));
            } else if (cartLimitedEnum.ACTIVE_STOCK_OVER.includes(maxPurchaseReasonCode)) {
              toast.open(I18n(`cart.${toastTypeEnum.stockLimit}`, {
                stock: this.limitToastNum(maxPurchaseTotalNum)
              }));
            } else {
              toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum)));
            }
          }

          if (this.stepper.preValue !== this.stepper.value || overFlag) {
            if (overFlag) {
              totalValue = maxPurchaseNum > 0 ? maxPurchaseNum + groupTotalDiscountValue : 1;
            }

            this.stepper.value = totalValue;
            this.render();
            this.changeItemNum();
          } else {
            this.setValue(this.stepper.preValue);
          }
        }

        logger.info(`normal 主站购物车 skuStepper inputBlur`, {
          data: {
            cartToken,
            stepperInfo: this.stepper,
            currentStepper: e
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      });
    }

    getDiscountValue(groupById = true) {
      let discountValue = 0;
      const [findex, index] = this.stepper.indexStr.split('-');
      const otherSameSkuNum = [];
      let currentIndex = 0;
      this.activeItems.forEach((active, activeIndex) => {
        otherSameSkuNum.push(...active.itemList);

        if (activeIndex < Number(findex)) {
          const {
            length
          } = active.itemList;

          if (activeIndex === 0) {
            currentIndex += length - 1;
          } else {
            currentIndex += length;
          }
        } else if (activeIndex === Number(findex)) {
          if (activeIndex === 0) {
            currentIndex += Number(index);
          } else {
            currentIndex += Number(index) + 1;
          }
        }
      });
      const {
        skuId: stepperSkuId,
        spuId: stepperSpuId,
        groupId: stepperGroupId
      } = this.stepper;
      otherSameSkuNum.forEach((sku, skuIndex) => {
        if (skuIndex !== currentIndex) {
          const {
            skuId,
            spuId,
            groupId,
            num,
            parentSkuId
          } = sku;
          let sameItem = String(skuId) === String(stepperSkuId) && String(spuId) === String(stepperSpuId) && !parentSkuId;

          if (groupById) {
            sameItem = sameItem && String(groupId) === String(stepperGroupId);
          }

          if (sameItem) {
            discountValue += num;
          }
        }
      });
      return {
        discountValue
      };
    }

    get groupTotalDiscountValue() {
      return this.getDiscountValue().discountValue;
    }

    setSingleDisabled(position, disabled) {
      const prefix = '.cart-stepper-';

      if (disabled) {
        this.$stepper.find(`${prefix}${position}`).addClass('disabled');
      } else {
        this.$stepper.find(`${prefix}${position}`).removeClass('disabled');
      }
    }

    setStepperDisabled() {
      if (this.stepper.disabled) {
        this.$stepper.addClass('disabled');
      } else {
        this.$stepper.removeClass('disabled');
      }
    }

    setStepperData(obj) {
      this.stepper = { ...this.stepper,
        ...obj
      };
      this.render();
    }

    setValue(value) {
      this.$stepper.find('.cart-stepper-input').val(value);
    }

    render() {
      const {
        groupTotalDiscountValue,
        stepper
      } = this;
      const {
        value,
        maxPurchaseNum
      } = stepper;
      const stepValue = Math.max(value - groupTotalDiscountValue, 1);
      this.setSingleDisabled('plus', maxPurchaseNum <= stepValue);
      this.setStepperDisabled();
    }

  }

  _exports.default = SkuStepper;
  return _exports;
}();