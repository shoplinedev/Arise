window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/template.js'] = window.SLM['theme-shared/utils/template.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];

  const regStrFormat = regStr => {
    return regStr.replace(/([\^\$\{\}\[\]\.\?\+\*\(\)\\])/g, '\\$1');
  };

  _exports.regStrFormat = regStrFormat;

  const template = (text, data, options = {}) => {
    const {
      prefix = '${',
      suffix = '}',
      replaceAll
    } = options || {};
    const reg = new RegExp(`${regStrFormat(prefix)}\\s*(\\w+)\\s*${regStrFormat(suffix)}`, 'g');

    if (typeof text === 'string') {
      if (data && Object.keys(data).length) {
        return text.replace(reg, (o, p) => {
          const val = get(data, p);
          return !replaceAll && (typeof val === 'string' || typeof val === 'number') ? val : o;
        });
      }

      return text;
    }

    return '';
  };

  _exports.default = template;
  return _exports;
}();