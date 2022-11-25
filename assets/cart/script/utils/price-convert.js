window.SLM = window.SLM || {};

window.SLM['cart/script/utils/price-convert.js'] = window.SLM['cart/script/utils/price-convert.js'] || function () {
  const _exports = {};
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;

  function convertPrice(price) {
    const {
      symbolOrder,
      currencySymbol,
      integer,
      fraction
    } = currencyUtil.getConvertPrice(price);
    let formattedPriceStr = '';

    if (symbolOrder === 'prefix') {
      formattedPriceStr = `${currencySymbol}${integer}<sup class="body6">${fraction}</sup>`;
    } else {
      formattedPriceStr = `${integer}<sup class="body6">${fraction}</sup><span>${currencySymbol}</span>`;
    }

    return {
      symbolOrder,
      currencySymbol,
      integer,
      fraction,
      formattedPriceStr
    };
  }

  _exports.default = convertPrice;
  return _exports;
}();