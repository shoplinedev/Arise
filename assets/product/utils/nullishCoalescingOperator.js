window.SLM = window.SLM || {};

window.SLM['product/utils/nullishCoalescingOperator.js'] = window.SLM['product/utils/nullishCoalescingOperator.js'] || function () {
  const _exports = {};

  function nullishCoalescingOperator(...args) {
    return args.find(item => {
      if (typeof item === 'function') {
        const result = item();
        return result !== null && result !== undefined;
      }

      return item !== null && item !== undefined;
    });
  }

  _exports.default = nullishCoalescingOperator;
  return _exports;
}();