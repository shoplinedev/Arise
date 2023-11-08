window.SLM = window.SLM || {};
window.SLM['theme-shared/components/locales/index.js'] = window.SLM['theme-shared/components/locales/index.js'] || function () {
  const _exports = {};
  const loggerBusinessPrefix = '[shared]快速支付业务';
  _exports.loggerBusinessPrefix = loggerBusinessPrefix;
  const loggerSdkPrefix = '[shared]快速支付SDK';
  _exports.loggerSdkPrefix = loggerSdkPrefix;
  function newTimeoutError(delay) {
    return new Error(`[初始化渲染失败][超时未调用onInit][当前超时时间:${delay}ms]`);
  }
  _exports.newTimeoutError = newTimeoutError;
  return _exports;
}();