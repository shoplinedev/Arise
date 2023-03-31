window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/cart-slot/index.js'] = window.SLM['theme-shared/biz-com/sales/cart-slot/index.js'] || function () {
  const _exports = {};
  const getCartItemId = window['SLM']['theme-shared/biz-com/sales/cart-slot/helpers/getCartItemId.js'].default;
  const freeShippingRender = window['SLM']['theme-shared/biz-com/sales/cart-slot/free-shipping/index.js'].default;
  const SlotCartSaleClass = 'slot-cart-sale';
  const SlotAttr = `[data-slot-cart-item-info]`;
  const MiniSlotAttr = `[data-slot-mini-cart-item-info]`;
  const FREE_SHIPPING_TYPE = 'FREE_SHIPPING';

  const getCartItem = (item = {}, isMiniCart = undefined) => {
    return document.getElementById(getCartItemId(item, isMiniCart));
  };

  const getSaleSlot = (item = {}, isMiniCart = undefined) => {
    const itemEle = getCartItem(item, isMiniCart);
    if (!itemEle) return;
    const slotEle = itemEle.querySelector(isMiniCart ? MiniSlotAttr : SlotAttr);
    if (!slotEle) return;
    let salesEle = slotEle.querySelector(`.${SlotCartSaleClass}`);

    if (!salesEle) {
      salesEle = document.createElement('span');
      salesEle.className = SlotCartSaleClass;
      slotEle.prepend(salesEle);
    }

    return salesEle;
  };

  const render = (cartInfo = {}, callback = undefined) => {
    if (cartInfo.activeItems && cartInfo.activeItems.length) {
      cartInfo.activeItems.forEach(({
        itemList
      }) => {
        itemList.forEach(item => {
          const main = getSaleSlot(item, false);

          if (callback && main) {
            const html = callback(item, main, false);

            if (typeof html === 'string') {
              main.innerHTML = html;
            }
          }

          const mini = getSaleSlot(item, true);

          if (callback && mini) {
            const html = callback(item, mini, true);

            if (typeof html === 'string') {
              mini.innerHTML = html;
            }
          }
        });
      });
    }
  };

  _exports.default = cartInfo => {
    render(cartInfo, (item, ele) => {
      if (item.salesInfoToShow instanceof Array) {
        let completeHTML = '';
        item.salesInfoToShow.forEach(info => {
          let result = info;

          try {
            result = JSON.parse(info);
          } catch (err) {
            console.error(err);
          }

          if (result && result.tagType === FREE_SHIPPING_TYPE) {
            const freeShipping = freeShippingRender();
            completeHTML += freeShipping.html;
          }
        });
        ele.innerHTML = completeHTML;
      }
    });
  };

  return _exports;
}();