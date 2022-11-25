window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/newCurrency/index.js'] = window.SLM['theme-shared/utils/newCurrency/index.js'] || function () {
  const _exports = {};
  const { format, unformatNumber, formatNumber, unformatCurrency, unformatPercent, formatCurrency, formatPercent, getDigitsByCode, getSymbolByCode, getSymbolOrderByCode, getDecimalSymbolByCode, getGroupSymbolByCode, getFormatParts, covertCalc, formatWithoutCurrency, formatMoneyWithoutCurrency } = window['@sl/currency-tools-core'];
  const { convertFormat, convertFormatWithoutCurrency, getConvertPrice } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  _exports.convertFormat = convertFormat;
  _exports.convertFormatWithoutCurrency = convertFormatWithoutCurrency;
  _exports.getConvertPrice = getConvertPrice;
  _exports.default = {
    format,
    unformatNumber,
    formatNumber,
    unformatCurrency,
    unformatPercent,
    formatCurrency,
    formatPercent,
    getDigitsByCode,
    getSymbolByCode,
    getSymbolOrderByCode,
    getDecimalSymbolByCode,
    getGroupSymbolByCode,
    getFormatParts,
    getConvertPrice,
    convertFormat,
    covertCalc,
    convertFormatWithoutCurrency,
    formatWithoutCurrency,
    formatMoneyWithoutCurrency
  };
  return _exports;
}();