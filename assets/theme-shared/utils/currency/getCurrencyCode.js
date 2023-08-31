window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/currency/getCurrencyCode.js'] = window.SLM['theme-shared/utils/currency/getCurrencyCode.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { getConvertPrice } = window['SLM']['theme-shared/utils/newCurrency/index.js'];

  const getCurrencyCode = () => {
    return SL_State.get('currencyCode');
  };

  _exports.getCurrencyCode = getCurrencyCode;

  const convertPrice = price => {
    const {
      integer,
      group,
      fraction
    } = getConvertPrice(price);
    const integerWithoutGroup = group ? integer.split(group).join('') : integer;
    return Number(integerWithoutGroup + (fraction ? `.${fraction}` : ''));
  };

  _exports.convertPrice = convertPrice;
  _exports.default = getCurrencyCode;
  return _exports;
}();