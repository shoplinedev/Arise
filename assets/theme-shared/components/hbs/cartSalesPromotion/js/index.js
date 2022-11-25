window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/index.js'] = window.SLM['theme-shared/components/hbs/cartSalesPromotion/js/index.js'] || function () {
  const _exports = {};
  const { getContent } = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/index.js'];

  _exports.default = (...args) => {
    const content = getContent(...args);
    return `
    <div class="cart-sku-list-promotion">
      ${content}
    </div>
  `;
  };

  return _exports;
}();