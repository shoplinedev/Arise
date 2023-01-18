window.SLM = window.SLM || {};

window.SLM['cart/script/components/banner.js'] = window.SLM['cart/script/components/banner.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { convertFormat: format } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { escape } = window['lodash'];
  const imgUrl = window['SLM']['commons/utils/imgUrl.js'].default;
  const convertPrice = window['SLM']['cart/script/utils/price-convert.js'].default;
  const CartService = window['SLM']['cart/script/service/cart/service.js'].default;
  const cartReport = window['SLM']['cart/script/report/cartReport.js'].default;
  const { OPEN_CART_BANNER } = window['SLM']['commons/cart/globalEvent.js'];
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
      this.bannerCartSummationInfo = {};
    }

    init() {
      this.listenNeedOpenBannerEvent();
      this.listenCartDataUpdate();
      this.listenSelectContentReport();
    }

    listenNeedOpenBannerEvent() {
      window.SL_EventBus.on(OPEN_CART_BANNER, ({
        data,
        onSuccess = () => {}
      }) => {
        this.addedItemInfo = { ...data
        };
        if (!this.addedItemInfo) return;
        this.bannerData = {
          addedItem: this.addedItemInfo,
          ...this.bannerCartSummationInfo
        };
        this.reRender();
        this.listenImageLoadEvent();
        onSuccess();
      });
    }

    listenCartDataUpdate() {
      CartService.cartEventBus.on(CartService.CartEventBusEnum.UPDATE, data => {
        this.processCartInfoData(data);
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
          itemNo,
          customCategoryName
        } = $(this).data();

        if (productSource === 1) {
          cartReport.selectContent({
            skuId,
            name,
            price: parseInt(salePrice, 10) > parseInt(price, 10) ? salePrice : price,
            skuAttrs,
            itemNo,
            customCategoryName
          });
        }
      });
    }

    processCartInfoData(cartInfo) {
      const {
        count,
        totalAmount,
        realAmount,
        discountCodeTotalAmount,
        promotionAmount
      } = cartInfo;
      this.bannerCartSummationInfo = {
        count,
        totalAmount,
        realAmount,
        discountCodeTotalAmount,
        promotionAmount
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

    getItemAmount(data) {
      return `
      <span class="notranslate body2 text_bold" data-amount=${data.price}>${this.getPriceInfo(data.price)}</span>
      <span
      class="notranslate body2 text_bold trade-cart-sku-item-info-amount-sign">x&nbsp;<span
        class="notranslate body2 text_bold trade-cart-sku-item-info-amount-count">${this.addedItemInfo.num}</span>
      `;
    }

    getImageContent(data) {
      return `
    <a class="trade-cart-sku-item-image" href="${window.Shopline.redirectTo(`/products/${data.spuId}`)}"
         data-product-source="${data.productSource}"
         data-group-id="${nullishCoalescingOperator(data.groupId, '')}"
         data-name="${escape(data.name)}"
         data-sku-id="${data.skuId}"
         data-spu-id="${data.spuId}"
         data-sku-attrs="${escape((data.skuAttr || []).join(','))}"
         data-price="${data.price}"
         data-sale-price="${data.salePrice}"
         data-item-no="${data.itemNo}"
         data-custom-category-name="${data.customCategoryName}"
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
      const imageBox = this._skuCard.find('.trade-cart-sku-item-image-wrapper');

      imageBox.html(this.getImageContent(itemInfo));
      this.updateProductDetail(itemInfo);
    }

    updateProductDetail(itemInfo) {
      const productNameEle = this._skuCard.find('.trade-cart-sku-item-info-title');

      productNameEle.html(encodeHTML(itemInfo.name));

      const productAttrsEle = this._skuCard.find('.trade-cart-sku-item-info-attrs');

      productAttrsEle.html(this.getItemSkuAttr(itemInfo.skuAttributes));

      const productCustomTipsEle = this._skuCard.find('.trade-cart-sku-item-info-custom');

      productCustomTipsEle.html(this.getItemSkuCustomTips(itemInfo.customProductTips));

      const productAmountEle = this._skuCard.find('.trade-cart-sku-item-info-amount');

      productAmountEle.html(this.getItemAmount(itemInfo));
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