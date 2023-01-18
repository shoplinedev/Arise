window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/formatPhone.js'] = window.SLM['theme-shared/biz-com/customer/helpers/formatPhone.js'] || function () {
  const _exports = {};
  const { CODE_PHONE_PATTERN } = window['SLM']['theme-shared/biz-com/customer/constant/pattern.js'];
  const { countriesDialCodeMap } = window['SLM']['theme-shared/biz-com/customer/constant/countries.js'];

  const formatterCodePhone = codePhone => {
    return codePhone.replace(/[a-z]+\+(\d+)-(\d+)/i, '00$1$2');
  };

  _exports.formatterCodePhone = formatterCodePhone;

  const parsePhoneString = (phoneString, code) => {
    return {
      phoneString,
      iso2: countriesDialCodeMap[code],
      code,
      phone: phoneString && phoneString.replace(`00${code}`, '') || ''
    };
  };

  _exports.parsePhoneString = parsePhoneString;

  _exports.default = phone => {
    const result = {};

    if (phone) {
      const exec = CODE_PHONE_PATTERN.exec(phone);

      if (exec) {
        result.phone = `${exec[2]}${exec[3]}`.replace('+', '00');
        result._code = exec[1].slice(0, -exec[2].length);
      }
    }

    return result;
  };

  return _exports;
}();