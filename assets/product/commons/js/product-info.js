window.SLM = window.SLM || {};

window.SLM['product/commons/js/product-info.js'] = window.SLM['product/commons/js/product-info.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { processPrice } = window['SLM']['commons/utils/convertPrice.js'];
  let uniqueId = '';
  const priceWrap = '.product-info-price_';
  const priceSellWrap = '.product-price-sales_';
  const priceOriginWrap = '.product-price-origin_';
  const priceVipWrap = '.product-price-vip_';
  const priceDiscountWrap = '.product-price-discount_';

  function getDiscount(showDiscount, sku) {
    const $el = $(`${priceDiscountWrap}${uniqueId}`);
    const discountSettingStyle = $el.attr('product_discount_style');
    const ratioCalc = Math.round(100 * (1 - sku.price / sku.originPrice));
    const discountText = discountSettingStyle === 'number' ? sku.originPrice - sku.price : ratioCalc;
    let isHidden = true;

    if (showDiscount && discountText > 0) {
      if (discountSettingStyle === 'number') {
        const discount = sku.originPrice - sku.price;

        if (discount > 0) {
          const {
            get: getPriceContent
          } = processPrice($el, discount, {
            isSavePrice: true
          });
          isHidden = false;
          $el.html(t('products.product_list.save_byjs', {
            priceDom: getPriceContent()
          }));
        } else {
          isHidden = true;
        }
      } else {
        isHidden = false;
        $el.html(t('products.product_list.save_ratio', {
          price: ratioCalc
        }));
      }
    } else {
      isHidden = true;
    }

    $el.toggleClass('hide', isHidden);
  }

  const setSkuPrice = (spuSoldout, activeSku = {}) => {
    const discountSetting = $(`${priceWrap}${uniqueId}`).attr('product_discount');
    const {
      originPrice: oriPrice,
      price,
      showMemberMark
    } = activeSku;
    const originPrice = oriPrice > price ? oriPrice : '';
    const showDiscount = discountSetting && !spuSoldout;
    const $priceWrapperEl = $(`.price.product-info-price_${uniqueId}`);

    if (oriPrice > price) {
      if (!$priceWrapperEl.hasClass('product-info-price_hasDiscount')) {
        $priceWrapperEl.addClass('product-info-price_hasDiscount');
      }
    } else {
      $priceWrapperEl.removeClass('product-info-price_hasDiscount');
    }

    processPrice($(`${priceSellWrap}${uniqueId}`), price).render();

    if (showMemberMark) {
      $(`${priceVipWrap}${uniqueId}`).removeClass('hide');
    } else {
      $(`${priceVipWrap}${uniqueId}`).addClass('hide');
    }

    if (originPrice) {
      processPrice($(`${priceOriginWrap}${uniqueId}`), originPrice).render();
      $(`${priceOriginWrap}${uniqueId}`).removeClass('hide');
    } else {
      $(`${priceOriginWrap}${uniqueId}`).addClass('hide');
    }

    getDiscount(showDiscount, activeSku);
  };

  const getHighOriginPrice = (min, item) => {
    if (min.price === item.price) {
      return min.originPrice > item.originPrice ? min : item;
    }

    return min.price > item.price ? item : min;
  };

  const checkActive = item => {
    if (item && Array.isArray(item.saleActivityResponseList)) {
      item.saleActivityResponseList.some(activity => activity.promotionType === 1 && activity.promotionSubType === 1);
    } else {
      return undefined;
    }
  };

  const getMinPrice = (soldOut, skuList) => {
    if (!Array.isArray(skuList)) return undefined;
    return skuList.reduce((min, item) => {
      if (min === null) {
        return item;
      }

      if (checkActive(min)) {
        if (checkActive(item)) {
          return getHighOriginPrice(min, item);
        }

        return min;
      }

      if (checkActive(item)) {
        return item;
      }

      if (min && min.showMemberMark) {
        if (item && item.showMemberMark) {
          return getHighOriginPrice(min, item);
        }

        return min;
      }

      if (item && item.showMemberMark) {
        return item;
      }

      return getHighOriginPrice(min, item);
    }, null);
  };

  const setMinPrice = (soldOut, skuList) => {
    const minSku = getMinPrice(soldOut, skuList);
    setSkuPrice(soldOut, minSku);
  };

  const setProductPrice = (id, statePath, activeSku) => {
    uniqueId = id;
    const {
      skuList
    } = window.SL_State.get(`${statePath}.sku`);
    const {
      soldOut
    } = window.SL_State.get(`${statePath}.spu`);

    if (activeSku) {
      setSkuPrice(soldOut, activeSku);
    } else {
      setMinPrice(soldOut, skuList);
    }
  };

  _exports.default = setProductPrice;
  return _exports;
}();