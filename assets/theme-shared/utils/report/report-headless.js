window.SLM = window.SLM || {};
window.SLM['theme-shared/utils/report/report-headless.js'] = window.SLM['theme-shared/utils/report/report-headless.js'] || function () {
  const _exports = {};
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const logger = loggerService.pipeOwner('HdSdk');
  function reportHeadless() {
    logger.warn(`reportHeadless deprecated`);
  }
  _exports.default = reportHeadless;
  return _exports;
}();