window.SLM = window.SLM || {};
window.SLM['theme-shared/utils/report/auto-report.js'] = window.SLM['theme-shared/utils/report/auto-report.js'] || function () {
  const _exports = {};
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const logger = loggerService.pipeOwner('HdSdk');
  function autoReport() {
    logger.warn(`autoReport deprecated`);
  }
  _exports.autoReport = autoReport;
  return _exports;
}();