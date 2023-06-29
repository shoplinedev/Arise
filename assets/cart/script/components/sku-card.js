window.SLM = window.SLM || {};

window.SLM['cart/script/components/sku-card.js'] = window.SLM['cart/script/components/sku-card.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { t: I18n } = window['SLM']['theme-shared/utils/i18n.js'];
  const previewImage = window['@yy/sl-pod-preview-image']['default'];
  const { convertFormat: format } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { escape } = window['lodash'];
  const get = window['lodash']['get'];
  const getCartPromotionBarContent = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/index.js'].default;
  const { Owner, Action } = window['@yy/sl-theme-shared']['/utils/logger/sentryReport'];
  const LoggerService = window['SLM']['commons/logger/index.js'].default;
  const { Status: LoggerStatus } = window['SLM']['commons/logger/index.js'];
  const utils = window['SLM']['commons/utils/index.js'].default;
  const imgUrl = window['SLM']['commons/utils/imgUrl.js'].default;
  const convertPrice = window['SLM']['cart/script/utils/price-convert.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/service.js'].default;
  const SkuStepper = window['SLM']['cart/script/components/sku-stepper.js'].default;
  const RemoveButton = window['SLM']['cart/script/components/remove-button.js'].default;
  const RemoveAllButton = window['SLM']['cart/script/components/remove-all-button.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const valuer = window['SLM']['cart/script/valuer/index.js'].default;
  const promotionLimited = window['SLM']['cart/script/components/promotion-limited/render.js'].default;
  const { cartLimitedEnum } = window['SLM']['cart/script/constant/stockType.js'];
  const logger = LoggerService.pipeOwner(`${Owner.Cart} components/sku-card`);
  const cartToken = Cookie.get('t_cart');

  const setCursorPosition = (originDomEle, pos) => {
    if (document.selection) {
      const sel = originDomEle.createTextRange();
      sel.moveStart('character', pos);
      sel.collapse();
      sel.select();
    } else if (originDomEle) {
      if (originDomEle.selectionStart) originDomEle.selectionStart = pos;
      if (originDomEle.selectionEnd) originDomEle.selectionEnd = pos;
    }
  };

  const useSuperScriptDecimals = SL_State.get('theme.settings.superscript_decimals');

  const encodeHTML = function (str) {
    if (typeof str === 'string') {
      return str.replace(/<|&|>/g, function (matches) {
        return {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;'
        }[matches];
      });
    }

    return '';
  };

  class SkuCard {
    constructor(ctx, tradeCartType) {
      this.ctx = ctx;
      this.tradeCartType = tradeCartType;

      if (tradeCartType === 'main') {
        this.scrollContent = document.documentElement;
      } else {
        this.scrollContent = $('.trade_mini_cart .trade_cart_not_empty_wrapper').get(0);
      }

      this.rootWrapper = $(`#${tradeCartType}-trade-cart-sku-list`);
      this.cartData = SL_State.get('cartInfo');
      this.loadFailedImgSet = new Set();
      this.preFocusedInputEle = null;
      this.needForceFocus = false;
    }

    init() {
      const {
        cartData
      } = this;
      logger.info(`normal 主站购物车 SkuCard init`, {
        data: {
          cartToken,
          cartData
        },
        action: Action.InitCart,
        status: LoggerStatus.Start
      });

      try {
        this.activeItems = cartData ? cartData.activeItems || [] : [];
        this.inactiveItems = cartData ? cartData.inactiveItems || [] : [];
        this.preprocessDiscountData();
        this.reset();
        this.listenPlatformChange();
        this.listenCartDataUpdate();
        this.listenCartSkuInfoPreview();
        this.listenSelectContentReport();
        promotionLimited.initialModel();
      } catch (error) {
        logger.error(`normal 主站购物车 SkuCard init 失败`, {
          data: {
            cartToken,
            cartData
          },
          error,
          action: Action.InitCart,
          errorLevel: 'P0'
        });
      }

      logger.info(`normal 主站购物车 SkuCard init`, {
        data: {
          cartToken,
          cartData
        },
        action: Action.InitCart,
        status: LoggerStatus.Success
      });
    }

    setPreFocusedInputEle(info) {
      this.preFocusedInputEle = this.preFocusedInputEle || {};
      this.preFocusedInputEle = { ...this.preFocusedInputEle,
        ...info
      };
    }

    setNeedForceFocus(status) {
      this.needForceFocus = status;
    }

    forceInputFocusIfNecessary() {
      const _that = this;

      if (this.needForceFocus && this.preFocusedInputEle) {
        const {
          id,
          pos
        } = _that.preFocusedInputEle;
        const inputEle = $(`#${id}`).find('.cart-stepper-input');
        const originDomEle = inputEle.get(0);
        inputEle.trigger('focus');
        setCursorPosition(originDomEle, pos);

        _that.setNeedForceFocus(false);

        _that.preFocusedInputEle = null;
      }
    }

    reset(isRerender) {
      try {
        const {
          activeItems,
          inactiveItems
        } = this;
        logger.info(`normal 主站购物车 SkuCard reset`, {
          data: {
            cartToken,
            activeItems,
            inactiveItems
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        this.needUnbindEleList = [];
        this.listenImageLoadEvent();
        this.activeItems.forEach && this.activeItems.forEach((activeItem, findex) => {
          activeItem.itemList && activeItem.itemList.forEach && activeItem.itemList.forEach((item, index) => {
            const {
              skuId,
              spuId,
              groupId,
              uniqueSeq,
              businessFlag = {}
            } = item;
            const {
              singleAdjustNum,
              singleDelete
            } = businessFlag || {};
            const rootId = `${this.tradeCartType}-card-sku-item-${nullishCoalescingOperator(groupId, '')}-${spuId}-${skuId}-${uniqueSeq}`;
            const root = $(`#${rootId}`);

            const renderEditBtn = () => {
              logger.info(`normal 主站购物车 SkuCard reset activeItems initStepper/removeBtn`, {
                data: {
                  cartToken,
                  isRerender,
                  root,
                  item,
                  id: `${findex}-${index}`
                },
                action: Action.EditCart,
                status: LoggerStatus.Start
              });

              if (singleAdjustNum) {
                this.initStepper(root, item, `${findex}-${index}`);
              }

              if (singleDelete) {
                this.initRemoveButton(root, item);
              }

              logger.info(`normal 主站购物车 SkuCard reset initStepper/removeBtn`, {
                data: {
                  cartToken,
                  isRerender,
                  root,
                  item,
                  id: `${findex}-${index}`
                },
                action: Action.EditCart,
                status: LoggerStatus.Success
              });
            };

            if (!isRerender) {
              jQuery(renderEditBtn);
            } else {
              renderEditBtn();
            }
          });
        });
        this.inactiveItems.forEach && this.inactiveItems.forEach(item => {
          const {
            skuId,
            spuId,
            groupId,
            uniqueSeq
          } = item;
          const rootId = `${this.tradeCartType}-card-sku-item-${nullishCoalescingOperator(groupId, '')}-${spuId}-${skuId}-${uniqueSeq}`;
          const root = $(`#${rootId}`);

          const renderRemoveBtn = () => {
            logger.info(`normal 主站购物车 SkuCard reset inactiveItems initRemoveBtn`, {
              data: {
                cartToken,
                activeItems,
                inactiveItems
              },
              action: Action.EditCart,
              status: LoggerStatus.Start
            });
            this.initRemoveButton(root, item);
            logger.info(`normal 主站购物车 SkuCard reset inactiveItems initRemoveBtn`, {
              data: {
                cartToken,
                activeItems,
                inactiveItems
              },
              action: Action.EditCart,
              status: LoggerStatus.Success
            });
          };

          if (!isRerender) {
            jQuery(renderRemoveBtn);
          } else {
            renderRemoveBtn();
          }
        });

        const renderClearBtn = () => {
          logger.info(`normal 主站购物车 SkuCard reset inactiveItems initClearBtn`, {
            data: {
              cartToken,
              inactiveItems
            },
            action: Action.EditCart,
            status: LoggerStatus.Start
          });
          this.getDeviceInfo();
          this.initRemoveAllButton(this.inactiveItems);
          logger.info(`normal 主站购物车 SkuCard reset inactiveItems initClearBtn`, {
            data: {
              cartToken,
              inactiveItems
            },
            action: Action.EditCart,
            status: LoggerStatus.Success
          });
        };

        if (!isRerender) {
          jQuery(renderClearBtn);
        } else {
          renderClearBtn();
        }

        logger.info(`normal 主站购物车 SkuCard reset`, {
          data: {
            cartToken,
            activeItems,
            inactiveItems
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      } catch (error) {
        logger.error(`normal 主站购物车 SkuCard reset`, {
          data: {
            cartToken
          },
          error,
          action: Action.EditCart,
          errorLevel: 'P0'
        });
      }
    }

    getRendering() {
      return this.rendering;
    }

    setRendering(rendering) {
      this.rendering = rendering;
    }

    listenImageLoadEvent() {
      const _that = this;

      this.rootWrapper.find('.trade-cart-sku-item-image-wrapper').each((index, img) => {
        this.needUnbindEleList.push($(img));
        $(img).on('error', function () {
          $(img).parent().children('.trade-cart-sku-item-image-fallback').removeClass('hide');
          $(img).addClass('hide');

          _that.loadFailedImgSet.add($(img).attr('origin-src'));
        });
      });
    }

    listenCartDataUpdate() {
      logger.info(`normal 主站购物车 SkuCard CartDataUpdate`, {
        data: {
          cartToken
        },
        action: Action.EditCart,
        status: LoggerStatus.Start
      });
      CartService.cartEventBus.on(CartService.CartEventBusEnum.UPDATE, data => {
        logger.info(`normal 主站购物车 SkuCard CartDataUpdateListener`, {
          data: {
            cartToken,
            cartInfo: data
          },
          action: Action.EditCart,
          status: LoggerStatus.Start
        });
        const {
          scrollTop
        } = this.scrollContent;
        this.reRender(data);
        this.setRendering(false);
        setTimeout(() => {
          this.scrollContent.scrollTop = scrollTop;
        }, 0);
        logger.info(`normal 主站购物车 SkuCard CartDataUpdate`, {
          data: {
            cartToken
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      });
    }

    listenPlatformChange() {
      utils.helper.listenPlatform(platform => {
        const cartSkuWrapper = this.rootWrapper;
        this.preImageWidth = this.imageWidth;

        if (['pc', 'pad'].includes(platform)) {
          cartSkuWrapper.removeClass('is-mobile');
          cartSkuWrapper.addClass('is-pc');
        } else {
          cartSkuWrapper.removeClass('is-pc');
          cartSkuWrapper.addClass('is-mobile');
        }

        this.getDeviceInfo();

        if (this.preImageWidth !== this.imageWidth) {
          cartSkuWrapper.find('.trade-cart-sku-item-image-wrapper').each((index, img) => {
            $(img).prop('src', this.getImageUrl($(img).attr('origin-src')));
          });
        }
      });
    }

    listenSelectContentReport() {
      this.rootWrapper.on('click', '.trade-cart-sku-item-image', function () {
        const {
          productSource,
          skuId,
          name,
          skuAttrs,
          price,
          salePrice,
          itemNo,
          quantity,
          customCategoryName
        } = $(this).data();

        if (productSource === 1) {
          cartReport.selectContent({
            skuId,
            name,
            quantity,
            price: parseInt(salePrice, 10) > parseInt(price, 10) ? salePrice : price,
            skuAttrs,
            itemNo,
            customCategoryName
          });
        }
      });
    }

    searchParentNode(curNode, count) {
      count += 1;
      const parentNode = curNode ? curNode.parentElement : null;

      if (Array.from(parentNode ? parentNode.classList : []).includes('trade-cart-sku-item-customization-preview-btn')) {
        return parentNode;
      }

      if (count > 10) {
        return null;
      }

      return this.searchParentNode(parentNode, count);
    }

    listenCartSkuInfoPreview() {
      this.rootWrapper.on('click', e => {
        const findCount = 0;

        if (Array.from(e.target ? e.target.classList : []).includes('trade-cart-sku-item-customization-preview-btn')) {
          const urls = JSON.parse(get(e, 'target.dataset.previewList', '[]'));
          if (urls.length) previewImage({
            urls
          });
        } else {
          const parentNode = this.searchParentNode(e.target, findCount);

          if (parentNode) {
            const urls = JSON.parse(get(parentNode, 'dataset.previewList', '[]'));
            if (urls.length) previewImage({
              urls
            });
          }
        }
      });
    }

    preprocessDiscountData() {
      this.skuNumMap = {};
      this.activeItems.forEach && this.activeItems.forEach(activeItems => {
        activeItems.itemList && activeItems.itemList.forEach && activeItems.itemList.forEach(item => {
          const {
            spuId,
            skuId,
            groupId,
            num
          } = item;
          const key = `${groupId}_${spuId}_${skuId}`;
          this.skuNumMap[key] = this.skuNumMap[key] || 0;
          this.skuNumMap[key] += num;
        });
      });
    }

    getDeviceInfo() {
      const skuCardListEle = this.rootWrapper;
      const className = [];
      className.push(skuCardListEle.hasClass('main') ? 'main' : 'sidebar');
      className.push(skuCardListEle.hasClass('is-pc') ? 'is-pc' : 'is-mobile');
      this.wrapperBaseClassName = className;
      this.updateImageWidth();
    }

    updateImageWidth() {
      if (this.wrapperBaseClassName.includes('main') && this.wrapperBaseClassName.includes('is-pc')) {
        this.imageWidth = 150;
      } else {
        this.imageWidth = 100;
      }
    }

    getImageWidth() {
      return this.imageWidth;
    }

    getImageUrl(src) {
      return imgUrl(src, {
        width: this.getImageWidth(),
        scale: 2
      });
    }

    getCardItemAttrs(item) {
      let str = '';
      const properties = (item.properties || []).filter(i => i.show) || [];
      str = `<div class="trade-cart-sku-item-info-wrapper">
    ${this.getItemSkuAttr(item.skuAttributes)}
    ${properties.length ? this.getItemSkuProperties(item.properties) : ''}
    ${this.getItemSubscriptionInfo(item.subscriptionInfo)}${this.getItemSkuCustomTips(item.customProductTips)}<div class="slot-cart slot-cart-item-info" data-slot-cart-item-info></div></div>`;
      return str;
    }

    getItemSkuAttr(skuAttr) {
      const skuContent = [];

      if (skuAttr && skuAttr.length) {
        skuAttr.forEach(data => {
          skuContent.push(`
        <div class="trade-cart-sku-item-info-spec body4">
        <div class="trade-cart-sku-item-info-spec-key">${encodeHTML(data.attributeName)}:</div>
        <div class="trade-cart-sku-item-info-spec-value">${encodeHTML(data.attributeValue)}</div>
        </div>`);
        });
      }

      return skuContent.join('\n');
    }

    getItemSkuProperties(skuProperties) {
      const skuContent = [];

      if (skuProperties.length) {
        skuProperties.forEach(data => {
          const addonBefore = `<div class="trade-cart-sku-item-info-spec body3" translate="no">
        <div class="trade-cart-sku-item-info-spec-key">${encodeHTML(data.name)}:</div>
        `;
          let content = ``;

          if (data.type === 'text') {
            content = `<div class="trade-cart-sku-item-info-spec-value">${data.value}</div>`;
          } else if (data.type === 'picture') {
            content = `<div class="trade-cart-sku-item-info-spec-value trade-cart-sku-item-customization trade-cart-sku-item-customization-preview-btn" data-preview-list=${JSON.stringify(data.urls)}>${I18n('cart.item.custom_preview')}</div>`;
          } else if (data.type === 'link') {
            content = `<div class="trade-cart-sku-item-info-spec-value trade-cart-sku-item-customization trade-cart-sku-item-customization-look-btn">
                        <a class="body3" href='${data.urls ? data.urls[0] : ''}' target="_blank">${I18n('cart.item.click_to_view')}</a></div>`;
          }

          const addonAfter = `
        </div>`;
          skuContent.push(`${addonBefore}${content}${addonAfter}`);
        });
      }

      return skuContent.join('\n');
    }

    getItemSkuCustomTips(customProductTips) {
      const tipsContent = [];

      if (customProductTips && customProductTips.length) {
        customProductTips.forEach(data => {
          tipsContent.push(`
        <div class="trade-cart-sku-item-info-customTip notranslate">${encodeHTML(data)}</div>`);
        });
      }

      return tipsContent.join('\n');
    }

    getItemSubscriptionInfo(subscriptionInfo) {
      let subscriptionInfoName = '';

      if (subscriptionInfo && subscriptionInfo.sellingPlanName) {
        subscriptionInfoName = `
        <div class="trade-cart-sku-item-info-spec body3">
              <div class="trade-cart-sku-item-info-spec-key">${I18n('cart.subscription.information')}:</div>
              <div class="trade-cart-sku-item-info-spec-value">${subscriptionInfo.sellingPlanName}</div>
            </div>
      `;
      }

      return subscriptionInfoName;
    }

    getStepper(count, indexStr) {
      return `
      <span class="cart-stepper">
          <span class="cart-stepper-minus">
              <span class="cart-stepper-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M9 5H1" stroke-linecap="round" />
                </svg>
              </span>
          </span>
          <input class="cart-stepper-input body4 ${indexStr}" type="text" value=${count}>
          <span class="cart-stepper-plus">
              <span class="cart-stepper-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M9 5H1" stroke-linecap="round" />
                  <path d="M5 1L5 9" stroke-linecap="round" />
                </svg>
              </span>
          </span>
      </span>
    `;
    }

    getInfoLeft(data, isInactive, indexStr) {
      if (data.businessFlag && data.businessFlag.singleAdjustNum === false || data.maxPurchaseTotalNum === 0 && cartLimitedEnum.NORMAL_STOCK_OVER.includes(data.maxPurchaseReasonCode) || isInactive) {
        return `<div class="trade-cart-sku-item-info-sku-number body3">x<span>${data.num}</span></div>`;
      }

      return `<div class="trade-cart-sku-item-info-left-stepper">${this.getStepper(data.num, indexStr)}</div>`;
    }

    getRemoveButton(data) {
      return !data.businessFlag || data.businessFlag && data.businessFlag.singleDelete ? `<div class="trade-cart-sku-item-remove"><button class="trade-cart-sku-item-remove-button body3 btn-link">${I18n('cart.checkout_proceeding.remove')}</button></div>` : '';
    }

    getPriceInfo(data) {
      const isShowScribingPrice = parseInt(data.lineLevelTotalDiscount, 10) > 0 && parseInt(data.originalLinePrice, 10) > parseInt(data.finalLinePrice, 10);

      if (useSuperScriptDecimals) {
        const {
          formattedPriceStr: productPriceFormattedPriceStr
        } = convertPrice(data.originalLinePrice);
        const {
          formattedPriceStr: priceFormattedPriceStr
        } = convertPrice(data.finalLinePrice);

        if (isShowScribingPrice) {
          return `<span class="trade-cart-sku-item-info-amount-through isolate notranslate body5" data-amount=${data.originalLinePrice}>${productPriceFormattedPriceStr}</span><span class="trade-cart-sku-item-real-price isolate notranslate body2 text_bold trade-cart-sku-item-info-amount-sale-price" data-amount=${data.finalLinePrice}><span>${priceFormattedPriceStr}</span>  ${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
        }

        return `<span class="trade-cart-sku-item-real-price isolate notranslate body2 text_bold" data-amount=${data.finalLinePrice}><span>${priceFormattedPriceStr}</span>${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
      }

      if (isShowScribingPrice) {
        return `<span class="trade-cart-sku-item-info-amount-through isolate notranslate" data-amount=${data.originalLinePrice}>${format(data.originalLinePrice)}</span><span class="trade-cart-sku-item-real-price isolate notranslate trade-cart-sku-item-info-amount-sale-price" data-amount=${data.finalLinePrice}>${format(data.finalLinePrice)}${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
      }

      return `<span class="trade-cart-sku-item-real-price isolate notranslate" data-amount=${data.finalLinePrice}>${format(data.finalLinePrice)}${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
    }

    getVipTag(data) {
      return parseInt(data.priceType, 10) === 1 ? `<span class="trade-cart-sku-item-info-tag" data-vip-tag="small"></span>` : '';
    }

    getPromotionAmountInfo(data) {
      const hasPromotionInfo = parseInt(data.lineLevelTotalDiscount, 10) > 0 && data.lineLevelDiscountAllocations;

      if (hasPromotionInfo) {
        const html = data.lineLevelDiscountAllocations.reduce((str, item) => {
          str += `
        <div class="trade-cart-sku-item-info-discount body4">
          <div class="trade-cart-sku-item-info-discount-icon">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0288 5.44651C1.01062 5.59875 1.0633 5.75092 1.17172 5.85934L6.1054 10.793C6.49593 11.1835 7.12909 11.1835 7.51962 10.793L10.7929 7.51974C11.1834 7.12921 11.1834 6.49605 10.7929 6.10552L5.85922 1.17184C5.7508 1.06342 5.59863 1.01074 5.44639 1.02892L1.89057 1.4535C1.6614 1.48086 1.48074 1.66152 1.45337 1.89069L1.0288 5.44651ZM4.00001 3.00013C4.55229 3.00013 5.00001 3.44785 5.00001 4.00013C5.00001 4.55241 4.55229 5.00013 4.00001 5.00013C3.44772 5.00013 3.00001 4.55241 3.00001 4.00013C3.00001 3.44785 3.44772 3.00013 4.00001 3.00013Z" fill="#C20000"/>
            </svg>
            ${item.discountApplication.title ? `<span>&nbsp;${item.discountApplication.title}</span>` : ''}
          </div>
          <div class="trade-cart-sku-item-info-discount-number"><span>&nbsp;(-</span><span class="isolate notranslate is-promotion" data-amount=${item.amount}>${format(item.amount)}</span><span>)</span></div>
        </div>`;
          return str;
        }, '');
        return html;
      }

      if (data && data.businessFlag && !data.businessFlag.discountable) {
        return `<div class="trade-cart-sku-item-info-discount sale-color body4">${I18n('cart.promotion.no_promotion')}</div>`;
      }

      return '';
    }

    getImageFallbackIfNecessary(data) {
      const url = this.getImageUrl(data.image);

      if (!url || this.loadFailedImgSet.has(data.image)) {
        return `<div class="trade-cart-sku-item-image-fallback"></div>`;
      }

      return `
    <div class="hide trade-cart-sku-item-image-fallback"></div>
    <img class="trade-cart-sku-item-image-wrapper" src="${url}" origin-src="${data.image}">
    `;
    }

    getImageAccessorial(data) {
      if (data && data.length) {
        const addonBefore = `<ul class="trade-cart-sku-item-image-wrapper__accessorial__list">`;
        const content = data.map(item => ` <li style='background: url("${item}")center center;'></li>`);
        const addonAfter = `</ul>`;
        return `${addonBefore}${content}${addonAfter}`;
      }

      return ``;
    }

    getCardItemContent(data, isInactive, indexStr = '') {
      const wrapperClassName = ['shopline-element-cart-sku-item', 'trade-cart-sku-item'];

      if (data.maxPurchaseTotalNum === 0 && cartLimitedEnum.NORMAL_STOCK_OVER.includes(data.maxPurchaseReasonCode)) {
        wrapperClassName.push('sold-out');
      }

      if (isInactive) {
        wrapperClassName.push('inactive');
      }

      const {
        groupId,
        spuId,
        skuId,
        uniqueSeq,
        productSource,
        name,
        skuAttr,
        price,
        salePrice,
        itemNo,
        bindProductImages,
        errorList,
        promotionAmount,
        customCategoryName
      } = data || {};
      const id = `${this.tradeCartType}-card-sku-item-${nullishCoalescingOperator(groupId, '')}-${spuId}-${skuId}-${uniqueSeq}`;
      const hasDiscount = parseInt(promotionAmount, 10) > 0 && parseInt(salePrice, 10) > parseInt(price, 10);
      const content = `
    <div class="${wrapperClassName.join(' ')}" id="${id}">
      <a class="trade-cart-sku-item-image"
         href="${productSource === 1 ? window.Shopline.redirectTo(`/products/${spuId}`) : `javascript:void(0)`}"
         data-product-source="${productSource}"
         data-group-id="${nullishCoalescingOperator(groupId, '')}"
         data-name="${escape(name)}"
         data-sku-id="${skuId}"
         data-spu-id="${spuId}"
         data-sku-attrs="${escape((skuAttr || []).join(','))}"
         data-price="${price}"
         data-sale-price="${salePrice}"
         data-item-no="${itemNo}"
         data-custom-category-name="${customCategoryName}"
       >
          ${this.getImageFallbackIfNecessary(data)}
          ${this.getImageAccessorial(bindProductImages)}
          <div class="trade-cart-sku-item-image-sold-out body6">${I18n('products.product_list.product_sold_out')}</div>
      </a>
      <div class="trade-cart-sku-item-info">
          <div class="trade-cart-sku-item-info-title body3">${encodeHTML(name)}</div>
          ${this.getCardItemAttrs(data)}
          <div class="trade-cart-sku-item-info-number">
              <div class="trade-cart-sku-item-info-left">
                  ${this.getInfoLeft(data, isInactive, indexStr)}
                  ${Array.isArray(errorList) && errorList.length ? `<span class="promotion-limited">${promotionLimited.staticRender(id, data)}</span>` : ''}
              </div>
              <div class="trade-cart-sku-item-info-amount-and-discount">
                  <div class="trade-cart-sku-item-info-amount body3 ${hasDiscount ? 'has-discount' : ''}">
                    ${this.getPriceInfo(data)}
                  </div>
                  ${this.getPromotionAmountInfo(data)}
              </div>
          </div>
          <div class="slot-cart slot-cart-num-editor-end" data-slot-cart-num-editor-end></div>
          ${this.getRemoveButton(data)}
      </div>
      <div class="trade-cart-sku-item-mask"></div>
    </div>
    <div class="slot-cart slot-cart-item-end" data-slot-cart-item-end></div>
    `;
      this.templateContent.push(content);
    }

    generateActiveItemTemplate(activeItemData, findex) {
      if (activeItemData && activeItemData.promotion) {
        this.templateContent.push(getCartPromotionBarContent(activeItemData.promotion, this.rootWrapper, activeItemData));
      }

      activeItemData.itemList.forEach((data, index) => {
        this.getCardItemContent(data, false, `${findex}-${index}`);
      });
    }

    generateInactiveItemTemplate(inactiveItems) {
      this.templateContent.push(`<div class="trade-cart-sku-list-inactive-wrapper">
      <div class="trade-cart-sku-list-inactive-wrapper-title body3">${I18n('transaction.item.invalid_product')}</div>
      <button class="trade-cart-sku-list-inactive-wrapper-remove-all body3 btn-link" id="${this.tradeCartType}-trade-cart-sku-list-inactive-wrapper-remove-all">${I18n('transaction.item.remove_invalid_product')}</button>
    </div>`);
      inactiveItems.forEach(data => {
        this.getCardItemContent(data, true);
      });
    }

    showEmptyCart(show) {
      if (show) {
        $('.trade_cart_empty_wrapper').removeClass('hide');
        $('.trade_cart_not_empty_wrapper').addClass('hide');
      } else {
        $('.trade_cart_empty_wrapper').addClass('hide');
        $('.trade_cart_not_empty_wrapper').removeClass('hide');
      }
    }

    reRender(data) {
      logger.info(`normal 主站购物车 SkuCard reRender`, {
        data: {
          cartToken,
          cartInfo: data
        },
        action: Action.EditCart,
        status: LoggerStatus.Start
      });

      if (data.count === 0) {
        this.showEmptyCart(true);
        return;
      }

      this.showEmptyCart(false);
      this.cartData = data;
      this.showEmptyCart(false);
      this.activeItems = data.activeItems;
      this.inactiveItems = data.inactiveItems;
      this.preprocessDiscountData();
      this.templateContent = [];
      this.needUnbindEleList.forEach(ele => {
        ele && ele.unbind && ele.unbind();
      });

      try {
        data.activeItems.forEach((activeItem, findex) => {
          this.templateContent.push(`<div class="trade-cart-sku-list-module${activeItem.promotion ? ' has-promotion' : ''}">`);
          this.generateActiveItemTemplate(activeItem, findex);
          this.templateContent.push('</div>');
        });

        if (data.inactiveItems.length) {
          this.templateContent.push('<div class="trade-cart-sku-list-module inactive">');
          this.generateInactiveItemTemplate(data.inactiveItems);
          this.templateContent.push('</div>');
        }

        const finalHtml = this.templateContent.join('\n');
        this.rootWrapper.html(finalHtml);
        window.SL_EventBus.emit('global.activeIcon.show', {
          type: 'vip'
        });
        get_func(window, 'Shopline.event.emit').exec('Cart::LineItemUpdate');
        this.reset(true);
        this.forceInputFocusIfNecessary();
        logger.info(`normal 主站购物车 SkuCard reRender`, {
          data: {
            cartToken,
            cartInfo: data
          },
          action: Action.EditCart,
          status: LoggerStatus.Success
        });
      } catch (e) {
        logger.error(`normal 主站购物车 SkuCard reRender`, {
          data: {
            cartToken,
            cartInfo: data
          },
          action: Action.EditCart,
          error: e
        });
      }
    }

    initStepper(root, itemInfo, indexStr) {
      if (root.find('.cart-stepper').length > 0) {
        const {
          activeItems
        } = this;
        const {
          spuId,
          skuId,
          priceType,
          num,
          skuAttr,
          stockType,
          name,
          price,
          groupId,
          productSource,
          maxPurchaseNum,
          maxPurchaseTotalNum,
          maxPurchaseReasonCode,
          itemNo
        } = itemInfo;
        const stepper = new SkuStepper({
          root,
          name,
          price,
          normalSkuNum: num,
          totalSkuNum: this.skuNumMap[`${groupId}_${spuId}_${skuId}`] || num,
          disabled: false,
          spuId,
          skuId,
          priceType,
          stockType,
          skuAttr,
          setRendering: this.setRendering.bind(this),
          isRendering: this.getRendering.bind(this),
          cartType: this.tradeCartType,
          setPreFocusedInputEle: this.setPreFocusedInputEle.bind(this),
          setNeedForceFocus: this.setNeedForceFocus.bind(this),
          groupId,
          productSource,
          maxPurchaseNum,
          maxPurchaseTotalNum,
          maxPurchaseReasonCode,
          indexStr,
          activeItems,
          itemNo
        });

        try {
          stepper.init();
        } catch (error) {
          logger.error(`normal 主站购物车 SkuCard initStepper`, {
            data: {
              cartToken
            },
            action: Action.EditCart,
            error
          });
        }

        this.needUnbindEleList.push(stepper);
      }
    }

    initRemoveButton(root, itemInfo) {
      if (root.find('.trade-cart-sku-item-remove-button').length > 0) {
        const removeButton = new RemoveButton({
          root,
          itemInfo,
          cartActionHooks: this.cardActionHooks
        });
        removeButton.init();
        this.needUnbindEleList.push(removeButton);
      }
    }

    initRemoveAllButton(inactiveItems) {
      const removeAllButton = new RemoveAllButton(`#${this.tradeCartType}-trade-cart-sku-list-inactive-wrapper-remove-all`, inactiveItems, this.cardActionHooks);
      removeAllButton.init();
      this.needUnbindEleList.push(removeAllButton);
    }

    get cardActionHooks() {
      return valuer.cartActionHooksValuer.takeCartActionHooks(this.ctx);
    }

  }

  _exports.default = SkuCard;
  return _exports;
}();