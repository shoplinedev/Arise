window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/helpers.js'] = window.SLM['cart/script/domain/model/helpers.js'] || function () {
  const _exports = {};

  function reducer(source) {
    function reduce(ctx) {
      const cal = () => {
        return ctx;
      };

      cal.next = (extractor, ...args) => {
        if (!extractor) {
          return reduce(ctx);
        }

        return reduce(extractor(ctx, ...args));
      };

      return cal;
    }

    return reduce(source);
  }

  function memo() {
    let deps;
    let result;
    return function memorized(getter, ...args) {
      if (deps == null || !compare(deps, args)) {
        result = getter(...args);
        deps = args;
      }

      return result;
    };
  }

  function merge(source, target) {
    if (!source) source = {};
    if (!target) return source;
    return { ...source,
      ...target
    };
  }

  _exports.default = {
    reducer,
    memo,
    merge
  };

  function compare(v1, v2) {
    if (v1 === v2) return true;
    if (v1 == null || v2 == null) return false;
    const t1 = typeof v1;
    const t2 = typeof v2;
    if (t1 !== t2) return false;
    if (t1 === 'function') return false;

    if (Array.isArray(v1) && Array.isArray(v2)) {
      const l1 = v1.length;
      const l2 = v2.length;
      if (l1 !== l2) return false;
      let i = 0;

      for (; i < l1; ++i) {
        const i1 = v1[i];
        const i2 = v2[i];
        if (!compare(i1, i2)) return false;
      }

      return i === l2;
    }

    return false;
  }

  return _exports;
}();