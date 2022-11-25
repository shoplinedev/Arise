window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/syntax-patch.js'] = window.SLM['theme-shared/utils/syntax-patch.js'] || function () {
  const _exports = {};
  const _get = window['lodash']['get'];
  const _toPath = window['lodash']['toPath'];

  function nullishCoalescingOperator(...args) {
    const val = args.find(item => {
      if (typeof item === 'function') {
        const result = item();
        return result !== null && result !== undefined;
      }

      return item !== null && item !== undefined;
    });

    if (val === null || val === undefined) {
      return args[args.length - 1];
    }

    return val;
  }

  _exports.nullishCoalescingOperator = nullishCoalescingOperator;

  function get(obj, ...args) {
    return _get(obj, ...args);
  }

  _exports.get = get;

  function get_func(obj, path) {
    const pathList = _toPath(path);

    const parentPath = pathList.splice(0, pathList.length - 1);
    const key = pathList[0];
    const parent = parentPath.length ? _get(obj, parentPath) : obj;

    const exec = (...args) => {
      if (parent && typeof parent[key] === 'function') {
        return parent[key](...args);
      }

      return undefined;
    };

    return {
      value: parent ? parent[key] : undefined,
      exec
    };
  }

  _exports.get_func = get_func;
  return _exports;
}();