window.SLM = window.SLM || {};

window.SLM['cart/script/domain/vo/responseCode.js'] = window.SLM['cart/script/domain/vo/responseCode.js'] || function () {
  const _exports = {};
  const responseCode = window['SLM']['cart/script/constant/responseCode.js'].default;

  function isOk(vo) {
    if (!vo) return false;
    return vo.code === responseCode.SUCCESS;
  }

  function is(vo, code) {
    if (!vo || !code) return false;
    return vo.code === code;
  }

  function batchIs(vo, code) {
    if (!vo || !code) return false;

    try {
      return code.split(',').includes(vo.code);
    } catch {
      return false;
    }
  }

  _exports.default = {
    is,
    isOk,
    batchIs
  };
  return _exports;
}();