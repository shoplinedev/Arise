window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/getCartInfo.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/content/helpers/getCartInfo.js'] || function () {
  const _exports = {};

  const getCartInfo = () => {
    return new Promise((resolve, reject) => {
      window.Shopline.event.emit('Cart::UseCart', {
        options: {
          switchSideBar: 'none',
          updateState: false,
          rerenderDom: false,
          cartDetail: true
        },
        onSuccess: cartInfo => {
          resolve(cartInfo);
        },
        onError: e => {
          reject(e);
        }
      });
    });
  };

  _exports.default = getCartInfo;
  return _exports;
}();