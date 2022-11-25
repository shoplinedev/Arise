window.SLM = window.SLM || {};

window.SLM['cart/script/domain/model/response.js'] = window.SLM['cart/script/domain/model/response.js'] || function () {
  const _exports = {};
  const responseCodeVO = window['SLM']['cart/script/domain/vo/responseCode.js'].default;
  const responseCode = window['SLM']['cart/script/constant/responseCode.js'].default;

  function getCode(model) {
    if (!model) return '';
    return model.code;
  }

  function getData(model) {
    if (!model) return null;
    return model.data;
  }

  function isResolved(model) {
    if (!model) return false;
    return model.success === true && responseCodeVO.isOk(model);
  }

  function rejectWithCode(code = '') {
    return {
      code,
      success: false
    };
  }

  function resolveWithData(data = undefined) {
    return {
      code: responseCode.SUCCESS,
      success: true,
      data
    };
  }

  _exports.default = {
    getCode,
    getData,
    isResolved,
    rejectWithCode,
    resolveWithData
  };
  return _exports;
}();