window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/currency/constants.js'] = window.SLM['theme-shared/utils/currency/constants.js'] || function () {
  const _exports = {};
  const HARD_CODE_CONFIG = [{
    code: 'TWD',
    digit: 0
  }, {
    code: 'HUF',
    digit: 0
  }, {
    code: 'RUB',
    digit: 0
  }, {
    code: 'CVE',
    digit: 0
  }, {
    code: 'AFN',
    digit: 2
  }, {
    code: 'ALL',
    digit: 2
  }, {
    code: 'IRR',
    digit: 2
  }, {
    code: 'KPW',
    digit: 2
  }, {
    code: 'LAK',
    digit: 2
  }, {
    code: 'LBP',
    digit: 2
  }, {
    code: 'MMK',
    digit: 2
  }, {
    code: 'RSD',
    digit: 2
  }, {
    code: 'SLL',
    digit: 2
  }, {
    code: 'SOS',
    digit: 2
  }, {
    code: 'SYP',
    digit: 2
  }, {
    code: 'UYU',
    digit: 2
  }, {
    code: 'YER',
    digit: 2
  }, {
    code: 'KWD',
    digit: 2
  }, {
    code: 'OMR',
    digit: 2
  }, {
    code: 'BHD',
    digit: 2
  }, {
    code: 'IDR',
    digit: 0
  }];
  const SYMBOL_HARD_CODE_CONFIG = {
    AUD: {
      en: 'zh-hans-cn'
    },
    TWD: {
      'zh-hant-tw': 'zh-hant-hk'
    },
    MXN: {
      es: 'en'
    },
    CLP: {
      es: 'es-CL'
    }
  };
  const CURRENCY_DISPLAY_HARDCODE = {
    PHP: {
      currencyDisplay: 'code'
    }
  };
  _exports.HARD_CODE_CONFIG = HARD_CODE_CONFIG;
  _exports.SYMBOL_HARD_CODE_CONFIG = SYMBOL_HARD_CODE_CONFIG;
  _exports.CURRENCY_DISPLAY_HARDCODE = CURRENCY_DISPLAY_HARDCODE;
  return _exports;
}();