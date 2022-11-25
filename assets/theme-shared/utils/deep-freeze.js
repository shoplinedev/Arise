window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/deep-freeze.js'] = window.SLM['theme-shared/utils/deep-freeze.js'] || function () {
  const _exports = {};

  function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);

    for (const name of propNames) {
      const value = object[name];

      if (value && typeof value === 'object') {
        deepFreeze(value);
      }
    }

    return Object.freeze(object);
  }

  _exports.default = deepFreeze;
  return _exports;
}();