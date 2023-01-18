window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/currency/index.js'] = window.SLM['theme-shared/utils/currency/index.js'] || function () {
  const _exports = {};
  const { find, findIndex, round } = window['lodash'];
  const { nullishCoalescingOperator } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { HARD_CODE_CONFIG, SYMBOL_HARD_CODE_CONFIG, CURRENCY_DISPLAY_HARDCODE } = window['SLM']['theme-shared/utils/currency/constants.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const storeCurrency = window.Shopline.currency;
  const storeLang = SL_State.get('request.locale');
  const currencyRates = SL_State.get('currencyRates');
  const defaultCurrency = 'CNY';
  const defaultCurrencyDigit = 2;
  _exports.defaultCurrencyDigit = defaultCurrencyDigit;
  const defaultPresentDigit = 2;
  const defaultLang = 'zh-hans-cn';
  const digitsMap = new Map();
  const formatUtilMap = new Map();
  const symbolsMap = new Map();
  const hardcoreConfigs = HARD_CODE_CONFIG;

  const hardcodeDigit = code => {
    const hardcoreConfig = hardcoreConfigs.find(config => config.code === code);
    return {
      minimumFractionDigits: nullishCoalescingOperator(hardcoreConfig && hardcoreConfig.digit, void 0),
      maximumFractionDigits: nullishCoalescingOperator(hardcoreConfig && hardcoreConfig.digit, void 0)
    };
  };

  const hardCodeCurrencyDisplay = code => {
    return nullishCoalescingOperator(CURRENCY_DISPLAY_HARDCODE[code], {});
  };

  const hardCodeSymbol = (code, lang) => {
    const newLang = SYMBOL_HARD_CODE_CONFIG[code] && SYMBOL_HARD_CODE_CONFIG[code][lang];
    return nullishCoalescingOperator(newLang, lang);
  };

  const formatGenerator = (code, lang) => {
    const realLang = hardCodeSymbol(code, lang);
    return new Intl.NumberFormat(realLang, {
      style: 'currency',
      currency: code,
      ...hardCodeCurrencyDisplay(code),
      ...hardcodeDigit(code)
    });
  };

  _exports.formatGenerator = formatGenerator;

  const cacheKeyGenerator = ({
    code,
    lang
  }) => {
    const countryCode = code && code.toUpperCase();
    const language = lang && lang.toUpperCase();

    if (countryCode && language) {
      return `${countryCode}-${language}`;
    }

    if (countryCode) {
      return countryCode;
    }

    if (language) {
      return language;
    }
  };

  const format = (value, options = {}) => {
    const decimalDigits = defaultCurrencyDigit;
    const code = options && options.code || storeCurrency || defaultCurrency;
    const lang = options && options.lang || storeLang || defaultLang;
    const digits = 10 ** decimalDigits;
    let f = null;

    if (formatUtilMap.get(cacheKeyGenerator({
      code,
      lang
    }))) {
      f = formatUtilMap.get(cacheKeyGenerator({
        code,
        lang
      }));
    } else {
      f = formatGenerator(code, lang);
      formatUtilMap.set(cacheKeyGenerator({
        code,
        lang
      }), f);
      digitsMap.set(code, f.resolvedOptions().maximumFractionDigits);
    }

    return f.format(value / digits);
  };

  const covertCalc = (value, from, to, dataSource = {}) => {
    if (from === to) {
      return value;
    }

    const dataSourceTo = dataSource && dataSource[to];
    const dataSourceFrom = dataSource && dataSource[from];
    return value * nullishCoalescingOperator(dataSourceTo, 1) / nullishCoalescingOperator(dataSourceFrom, 1);
  };

  _exports.covertCalc = covertCalc;

  const convertFormat = (value, options = {}) => {
    const fromDefault = window.Shopline.currency;
    const toDefault = SL_State.get('currencyCode');
    const locale = SL_State.get('request.locale');
    const {
      from = fromDefault,
      to = toDefault,
      lang = locale
    } = options;
    const data = SL_State.get('currencyRates');
    const rst = covertCalc(value, from, to, data);
    return format(rst, {
      code: to,
      lang
    });
  };

  _exports.convertFormat = convertFormat;

  const getDigitsByCode = code => {
    if (typeof digitsMap.get(cacheKeyGenerator({
      code
    })) === 'number') {
      return digitsMap.get(cacheKeyGenerator({
        code
      }));
    }

    const digit = formatGenerator(code, 'zh-cn').resolvedOptions().maximumFractionDigits;
    digitsMap.set(cacheKeyGenerator({
      code
    }), digit);
    return digit;
  };

  const getSymbolByCode = (code, lang = 'zh-cn') => {
    if (symbolsMap.get(cacheKeyGenerator({
      code,
      lang
    }))) {
      return symbolsMap.get(cacheKeyGenerator({
        code,
        lang
      }));
    }

    let symbol = '';
    const format = formatGenerator(code, lang);

    if (format.formatToParts) {
      const findSymbol = find(format.formatToParts(), ['type', 'currency']);
      symbol = findSymbol && findSymbol.value;
    } else {
      const realLang = hardCodeSymbol(code, lang);
      const intl = new Intl.NumberFormat(realLang, {
        style: 'currency',
        currency: code,
        ...hardCodeCurrencyDisplay(code),
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      const newSymbol = intl.format(0).replace('0', '');
      symbol = newSymbol && newSymbol.trim();
    }

    symbolsMap.set(cacheKeyGenerator({
      code,
      lang
    }), symbol);
    return symbol;
  };

  const getSymbolOrderByCode = (code, lang = 'zh-cn') => {
    let order = 0;
    const format = formatGenerator(code, lang);

    if (format.formatToParts) {
      order = findIndex(format.formatToParts(), ['type', 'currency']);
    }

    return order > 0 ? 'suffix' : 'prefix';
  };

  const unformatNumber = (value, decimalDigits = defaultCurrencyDigit) => {
    const v = round((typeof value !== 'number' ? Number(value) : value) * 10 ** decimalDigits, 0);
    return v;
  };

  const unformatCurrency = value => {
    return unformatNumber(value, defaultCurrencyDigit);
  };

  const unformatPercent = value => {
    return unformatNumber(value, defaultPresentDigit);
  };

  const formatNumber = (value, decimalDigits = defaultCurrencyDigit) => {
    const v = typeof value !== 'number' ? Number(value) : value;
    return v / 10 ** decimalDigits;
  };

  const formatCurrency = value => {
    return formatNumber(value, defaultCurrencyDigit);
  };

  const formatPercent = value => {
    return formatNumber(value, defaultPresentDigit);
  };

  const getDecimalSymbolByCode = (code, lang) => {
    let decimal = '';
    const format = formatGenerator(code, lang);

    if (format.formatToParts) {
      const findDecimal = find(format.formatToParts(1.0), ['type', 'decimal']);
      decimal = findDecimal && findDecimal.value;
    } else {
      const realLang = hardCodeSymbol(code, lang);
      const intl = new Intl.NumberFormat(realLang, {
        currency: code,
        ...hardCodeCurrencyDisplay(code),
        useGrouping: false
      });
      decimal = intl.format(0.1).replace(/[0-9]*/g, '');
    }

    return decimal;
  };

  const getGroupSymbolByCode = (code, lang) => {
    let group = '';
    const format = formatGenerator(code, lang);

    if (format.formatToParts) {
      const findGroup = find(format.formatToParts(10000.0), ['type', 'group']);
      group = findGroup && findGroup.value;
    } else {
      const realLang = hardCodeSymbol(code, lang);
      const decimal = getDecimalSymbolByCode(code, realLang);
      group = decimal === '.' ? ',' : '.';
    }

    return group;
  };

  const getFormatParts = (value, options) => {
    const {
      code,
      lang
    } = options;
    const format = formatGenerator(code, lang);

    if (format.formatToParts) {
      return format.formatToParts(value);
    }

    const formatStr = format.format(value);
    const group = getGroupSymbolByCode(code, lang);
    const decimal = getDecimalSymbolByCode(code, lang);
    const symbolOrder = getSymbolOrderByCode(code, lang);
    const symbol = getSymbolByCode(code, lang);
    const rst = [];
    const [integerValue, fraction] = formatStr.replace(symbol, '').split(decimal);
    integerValue.split(group).forEach((item, index) => {
      rst.push({
        type: 'integer',
        value: item
      });
      if (index !== integerValue.length - 1) rst.push({
        type: 'group',
        value: group
      });
    });
    rst.push({
      type: 'decimal',
      value: decimal
    });
    rst.push({
      type: 'fraction',
      value: fraction.trim()
    });

    if (symbolOrder === 'prefix') {
      rst.unshift({
        type: 'currency',
        value: symbol
      });
    } else {
      rst.push({
        type: 'currency',
        value: symbol
      });
    }

    return rst;
  };

  const getConvertPrice = (money, options) => {
    const fromCurrencyCode = storeCurrency;
    const toCurrencyCode = options && options.code;
    const lang = options && options.lang;
    const covertMoneyByRate = covertCalc(money, fromCurrencyCode, toCurrencyCode, currencyRates);
    const covertMoney = formatCurrency(covertMoneyByRate);
    const formatPartsResult = getFormatParts(covertMoney, {
      code: toCurrencyCode,
      lang
    });
    const convertResult = {
      group: '',
      integer: '',
      decimal: '',
      fraction: '',
      symbolOrder: '',
      currencySymbol: ''
    };
    convertResult.symbolOrder = getSymbolOrderByCode(toCurrencyCode, lang);
    formatPartsResult.forEach(item => {
      const type = item && item.type;

      if (type === 'currency') {
        convertResult.currencySymbol = item.value;
      }

      if (type === 'integer') {
        if (convertResult.integer) {
          convertResult.integer = `${convertResult.integer}${convertResult.group || ''}${item.value}`;
        } else {
          convertResult.integer = item.value;
        }
      }

      if (type === 'group') {
        convertResult.group = item.value;
      }

      if (type === 'decimal') {
        convertResult.decimal = item.value;
      }

      if (type === 'fraction') {
        convertResult.fraction = item.value;
      }
    });
    return convertResult;
  };

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
    covertCalc
  };
  return _exports;
}();