window.SLM = window.SLM || {};

window.SLM['cart/script/domain/adapter/svc/voucher.js'] = window.SLM['cart/script/domain/adapter/svc/voucher.js'] || function () {
  const _exports = {};
  const constant = window['SLM']['cart/script/domain/adapter/svc/internal/constant.js'].default;

  async function toggleVoucher(svc, used) {
    return svc.request.get(constant.endpointVoucher, {
      params: {
        selected: used
      }
    });
  }

  _exports.default = {
    toggleVoucher
  };
  return _exports;
}();