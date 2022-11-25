window.SLM = window.SLM || {};

window.SLM['cart/script/components/banner.js'] = window.SLM['cart/script/components/banner.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { get, nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { convertFormat: format } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { escape } = window['lodash'];
  const imgUrl = window['SLM']['commons/utils/imgUrl.js'].default;
  const convertPrice = window['SLM']['cart/script/utils/price-convert.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/service.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const OPEN_CART_BANNER = 'NEED_OPEN_TOP_CART';
  _exports.OPEN_CART_BANNER = OPEN_CART_BANNER;
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

  class CartBanner {
    constructor() {
      this.loadFailedImgSet = new Set();
      this.needUnbindEleList = [];
    }

    init() {
      this.listenOpenBannerEvent();
      this.listenCartDataUpdate();
      this.listenSelectContentReport();
    }

    listenOpenBannerEvent() {
      window.SL_EventBus.on(OPEN_CART_BANNER, ({
        spuId,
        skuId,
        num,
        sellingPlanId
      }) => {
        this.addedItemInfo = {
          spuId,
          skuId,
          num,
          sellingPlanId
        };
      });
    }

    listenCartDataUpdate() {
      CartService.cartEventBus.on(CartService.CartEventBusEnum.UPDATE, data => {
        if (!this.addedItemInfo) return;
        this.processCartInfoData(data);
        this.reRender();
        this.listenImageLoadEvent();
      });
    }

    listenImageLoadEvent() {
      const _that = this;

      this._root.find('.trade-cart-sku-item-image-wrapper').each((index, img) => {
        this.needUnbindEleList.push($(img));
        $(img).on('error', function () {
          $(img).parent().children('.trade-cart-sku-item-image-fallback').removeClass('hide');
          $(img).addClass('hide');

          _that.loadFailedImgSet.add($(img).attr('origin-src'));
        });
      });
    }

    listenSelectContentReport() {
      $('.trade_mini_cart').on('click', '.trade-cart-sku-item-image', function () {
        const {
          productSource,
          skuId,
          name,
          skuAttrs,
          price,
          salePrice,
          itemNo
        } = $(this).data();

        if (productSource === 1) {
          cartReport.selectContent({
            skuId,
            name,
            price: parseInt(salePrice, 10) > parseInt(price, 10) ? salePrice : price,
            skuAttrs,
            itemNo
          });
        }
      });
    }

    processCartInfoData(cartInfo) {
      const {
        count,
        totalAmount,
        activeItems
      } = cartInfo;
      const cartItems = [];
      (activeItems || []).forEach(({
        itemList
      }) => {
        cartItems.push(...(itemList || []));
      });
      const addedItem = cartItems.find(({
        skuId,
        spuId,
        subscriptionInfo
      }) => {
        let isCurrentItem = skuId === get(this.addedItemInfo, 'skuId') && spuId === get(this.addedItemInfo, 'spuId');

        if (this.addedItemInfo.sellingPlanId) {
          isCurrentItem = isCurrentItem && get(subscriptionInfo, 'sellingPlanId') === get(this.addedItemInfo, 'sellingPlanId');
        } else {
          isCurrentItem = isCurrentItem && !get(subscriptionInfo, 'sellingPlanId');
        }

        return isCurrentItem;
      });
      this.bannerData = {
        count,
        totalAmount,
        addedItem
      };
    }

    getPriceInfo(data) {
      if (useSuperScriptDecimals) {
        const {
          formattedPriceStr
        } = convertPrice(data);
        return formattedPriceStr;
      }

      return `${format(data)}`;
    }

    getImageUrl(src) {
      return imgUrl(src, {
        width: 100,
        scale: 2
      });
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

    getItemSkuAttr(skuAttr) {
      const skuContent = [];

      if (skuAttr && skuAttr.length) {
        skuContent.push('<div class="trade-cart-sku-item-info-wrapper">');
        skuAttr.forEach(data => {
          skuContent.push(`
        <div class="trade-cart-sku-item-info-spec body4">
        <div class="trade-cart-sku-item-info-spec-key">${encodeHTML(data.attributeName)}:</div>
        <div class="trade-cart-sku-item-info-spec-value">${encodeHTML(data.attributeValue)}</div>
        </div>`);
        });
        skuContent.push('</div>');
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

    getCardInfoContent(data) {
      return `
    <div class="trade-cart-sku-item-info">
    <div class="trade-cart-sku-item-info-title body2">${encodeHTML(data.name)}</div>
    ${this.getItemSkuAttr(data.skuAttributes)}
    ${this.getItemSkuCustomTips(data.customProductTips)}
    <div class="trade-cart-sku-item-info-amount body3">
      <span class="notranslate body2 text_bold" data-amount=${data.price}>${this.getPriceInfo(data.price)}</span><span
        class="notranslate body2 text_bold trade-cart-sku-item-info-amount-sign">x&nbsp;<span
          class="notranslate body2 text_bold trade-cart-sku-item-info-amount-count">${this.addedItemInfo.num}</span>
    </div>
  </div>
    `;
    }

    getImageContent(data) {
      return `
    <a class="trade-cart-sku-item-image" href="/products/${data.spuId}"
         data-product-source="${data.productSource}"
         data-group-id="${nullishCoalescingOperator(data.groupId, '')}"
         data-name="${escape(data.name)}"
         data-sku-id="${data.skuId}"
         data-spu-id="${data.spuId}"
         data-sku-attrs="${escape((data.skuAttr || []).join(','))}"
         data-price="${data.price}"
         data-sale-price="${data.salePrice}"
         data-item-no="${data.itemNo}"
    >
      ${this.getImageFallbackIfNecessary(data)}
    </a>`;
    }

    updateCartTotalInfo(count) {
      this._cartTotal.text(count);
    }

    updateSubtotal(subtotal) {
      this._subtotal.attr('data-amount', subtotal);

      this._subtotal.html(this.getPriceInfo(subtotal));
    }

    updateSkuCard(itemInfo) {
      const cardContent = [];
      cardContent.push(this.getImageContent(itemInfo));
      cardContent.push(this.getCardInfoContent(itemInfo));

      this._skuCard.html(cardContent.join('\n'));
    }

    reRender() {
      this.needUnbindEleList.forEach(ele => {
        ele && ele.unbind && ele.unbind();
      });
      const {
        count,
        totalAmount,
        addedItem
      } = this.bannerData;
      this._root = $('.trade_mini_cart');
      this._subtotal = this._root.find('.trade-cart-banner-summations-subtotal--price');
      this._cartTotal = this._root.find('.trade-cart-banner-summations-footer-cart-total');
      this._skuCard = this._root.find('.trade-cart-sku-item');
      this.updateCartTotalInfo(count);
      this.updateSubtotal(totalAmount);
      setTimeout(() => {
        this.updateSkuCard(addedItem);
      }, 100);
    }

  }

  _exports.default = new CartBanner();
  return _exports;
}();