window.SLM = window.SLM || {};

window.SLM['commons/utils/convertPrice.js'] = window.SLM['commons/utils/convertPrice.js'] || function () {
  const _exports = {};
  const currency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const useSuperScriptDecimals = window.SL_State.get('theme.settings.superscript_decimals');
  const {
    convertFormat,
    getConvertPrice
  } = currency;

  function convertPrice(price, {
    code,
    lang
  }) {
    const formattedPrice = convertFormat(price);

    if (code === null || code === undefined) {
      code = window.SL_State.get('currencyCode');
    }

    if (lang === null || lang === undefined) {
      lang = window.SL_State.get('request.locale');
    }

    const {
      symbolOrder,
      currencySymbol,
      integer,
      decimal,
      fraction
    } = getConvertPrice(price, {
      code,
      lang
    });
    return {
      symbolIsPrefix: symbolOrder === 'prefix',
      symbol: currencySymbol,
      integer,
      decimal,
      fraction,
      origin: formattedPrice
    };
  }

  _exports.convertPrice = convertPrice;

  function processPrice($el, price, {
    isSavePrice,
    code,
    lang
  } = {}, decimalBuilders = decimal => `<sup class="body6">${decimal}</sup>`) {
    const {
      symbolIsPrefix,
      symbol,
      fraction,
      integer,
      origin
    } = convertPrice(price, {
      code,
      lang
    });

    const _integer = nullishCoalescingOperator(integer, '');

    const _decimal = nullishCoalescingOperator(fraction, '');

    let content = '';
    const currencySymbolHtml = `<span class="notranslate">${symbol}</span>`;

    const renderSuperDecimal = () => {
      const shouldShowDecimal = _decimal.length > 0;
      const noSymbolCurrency = `<span>${_integer}</span>${shouldShowDecimal ? decimalBuilders(_decimal) : ''}`;
      return symbolIsPrefix ? `${currencySymbolHtml}${noSymbolCurrency}` : `${noSymbolCurrency}${currencySymbolHtml}`;
    };

    const renderSavePrice = () => {
      const zeroRE = /^0+$/g;

      if (zeroRE.test(_decimal)) {
        return symbolIsPrefix ? `${currencySymbolHtml}<span class="notranslate">${_integer}</span>` : `<span class="notranslate">${_integer}</span>${currencySymbolHtml}`;
      }

      return `<span class="notranslate">${origin}</span>`;
    };

    if (useSuperScriptDecimals) {
      content = renderSuperDecimal();
    } else {
      content = `<span class="notranslate">${origin}</span>`;
    }

    if (isSavePrice) {
      content = renderSavePrice();
    }

    return {
      render: () => {
        $el.html(content);
      },
      get: () => content
    };
  }

  _exports.processPrice = processPrice;
  return _exports;
}();