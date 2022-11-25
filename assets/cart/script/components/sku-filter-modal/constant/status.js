window.SLM = window.SLM || {};

window.SLM['cart/script/components/sku-filter-modal/constant/status.js'] = window.SLM['cart/script/components/sku-filter-modal/constant/status.js'] || function () {
  const _exports = {};
  const verifyType = window['SLM']['cart/script/constant/verifyType.js'].default;
  const StatusEnum = {
    normal: 1,
    offline: 2,
    lack: 3,
    over: 4,
    removed: 5
  };

  function takeFromVerifyType(vt) {
    if (!vt) return StatusEnum.normal;

    switch (vt) {
      case verifyType.SOLD_OUT:
        return StatusEnum.over;

      case verifyType.UNDER_STOCK:
        return StatusEnum.lack;

      case verifyType.OFF_SHELVED:
        return StatusEnum.offline;

      case verifyType.DELETED:
        return StatusEnum.removed;

      default:
        return StatusEnum.normal;
    }
  }

  _exports.default = {
    StatusEnum,
    takeFromVerifyType
  };
  return _exports;
}();