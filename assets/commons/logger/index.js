window.SLM = window.SLM || {};

window.SLM['commons/logger/index.js'] = window.SLM['commons/logger/index.js'] || function () {
  const _exports = {};
  const { ErrorLevel, LogStatus, Logger } = window['@sl/logger'];
  const logger = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const newLogger = logger.pipeOwner('trade');
  _exports.ErrorLevel = ErrorLevel;
  _exports.Status = LogStatus;
  _exports.ILogger = Logger;
  _exports.default = newLogger;
  return _exports;
}();