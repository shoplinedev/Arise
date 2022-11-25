window.SLM = window.SLM || {};

window.SLM['cart/script/biz/sales/index.js'] = window.SLM['cart/script/biz/sales/index.js'] || function () {
  const _exports = {};
  const slotRender = window['SLM']['theme-shared/biz-com/sales/cart-slot/index.js'].default;
  const CartControlCartBasis = 'Cart::ControlCartBasis';
  const CartCartDetailUpdate = 'Cart::CartDetailUpdate';

  const init = function () {
    try {
      const handleCartUpdate = data => {
        if (data) {
          setTimeout(() => {
            slotRender(data);
          });
        }
      };

      window.Shopline.event.emit(CartControlCartBasis, {
        data: {
          cartDetail: true
        },
        onSuccess: handleCartUpdate
      });
      window.Shopline.event.on(CartCartDetailUpdate, handleCartUpdate);
      return true;
    } catch (err) {
      console.error(err);
    }
  };

  window.__CART_SALE_JS_LOADED = window.__CART_SALE_JS_LOADED || init();
  return _exports;
}();