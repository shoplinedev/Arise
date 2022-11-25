window.SLM = window.SLM || {};

window.SLM['product/commons/js/nameDesensitization.js'] = window.SLM['product/commons/js/nameDesensitization.js'] || function () {
  const _exports = {};

  const nameDesensitization = name => {
    if (!name) return '';
    const nameLen = name.length;

    if (nameLen < 2) {
      return name;
    }

    if (nameLen === 2) {
      return `${name.charAt(0)}*`;
    }

    const startLength = nameLen > 6 ? 6 : nameLen;
    return `${name.charAt(0)}${Array.from({
      length: startLength
    }).map(() => '*').join('')}${name.charAt(nameLen - 1)}`;
  };

  _exports.default = nameDesensitization;
  return _exports;
}();