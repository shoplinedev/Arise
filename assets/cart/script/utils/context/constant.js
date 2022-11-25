window.SLM = window.SLM || {};

window.SLM['cart/script/utils/context/constant.js'] = window.SLM['cart/script/utils/context/constant.js'] || function () {
  const _exports = {};
  const errCanceled = 'context done with cancellation';
  const errTimeout = 'context done with timeout';
  const errDeadline = 'context done with deadline';
  const errNotNullableValuer = 'valuer is not nullable';
  _exports.default = {
    errCanceled,
    errTimeout,
    errDeadline,
    errNotNullableValuer
  };
  return _exports;
}();