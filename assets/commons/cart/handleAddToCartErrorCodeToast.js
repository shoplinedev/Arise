window.SLM = window.SLM || {};
window.SLM['commons/cart/handleAddToCartErrorCodeToast.js'] = window.SLM['commons/cart/handleAddToCartErrorCodeToast.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const responseCodeVO = window['SLM']['cart/script/domain/vo/responseCode.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const { ErrorCode, ErrorCode2I18nKey } = window['SLM']['commons/cart/errorCode.js'];
  function handleAddToCartErrorCodeToast(res) {
    let errMsg = res.msg;
    if (responseCodeVO.is(res, ErrorCode.TCAT0109)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    if (responseCodeVO.batchIs(res, [ErrorCode.TCAT0107, ErrorCode.TCAT0112].join(','))) {
      errMsg = t(ErrorCode2I18nKey[res.code], {
        stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : '0'
      });
    }
    if (responseCodeVO.is(res, ErrorCode.TCAT0111)) {
      errMsg = t(ErrorCode2I18nKey[res.code], {
        stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : '0'
      });
    }
    if (responseCodeVO.is(res, ErrorCode.TCAT0101)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    if (responseCodeVO.is(res, ErrorCode.TCAT0103)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    if (responseCodeVO.is(res, ErrorCode.TCAT0119)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    if (responseCodeVO.is(res, ErrorCode.TCAT0120)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    if (responseCodeVO.is(res, ErrorCode.TRD_128188_B1102)) {
      errMsg = t(ErrorCode2I18nKey[res.code]);
    }
    new Toast().open(errMsg, 1500);
  }
  _exports.default = handleAddToCartErrorCodeToast;
  return _exports;
}();