window.SLM = window.SLM || {};
window.SLM['commons/utils/element.js'] = window.SLM['commons/utils/element.js'] || function () {
  const _exports = {};
  const defineCustomElement = (name, constructorCreator) => {
    if (!customElements.get(name)) {
      const constructor = constructorCreator();
      customElements.define(name, constructor);
      window[constructor.name] = constructor;
    }
  };
  _exports.defineCustomElement = defineCustomElement;
  return _exports;
}();