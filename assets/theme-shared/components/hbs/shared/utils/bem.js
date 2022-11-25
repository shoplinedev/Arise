window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/bem.js'] = window.SLM['theme-shared/components/hbs/shared/utils/bem.js'] || function () {
  const _exports = {};

  function gen(name, mods) {
    if (!mods) {
      return '';
    }

    if (typeof mods === 'string') {
      return ` ${name}--${mods}`;
    }

    if (Array.isArray(mods)) {
      return mods.reduce((ret, item) => {
        return ret + gen(name, item);
      }, '');
    }

    return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? gen(name, key) : ''), '');
  }

  function createBEM(name) {
    return (el, mods) => {
      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }

      el = el ? `${name}__${el}` : name;
      return `${el}${gen(el, mods)}`;
    };
  }

  function createNamespace(commonName, name) {
    name = `${commonName}-${name}`;
    return createBEM(name);
  }

  _exports.default = createNamespace;
  return _exports;
}();