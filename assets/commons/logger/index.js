window.SLM = window.SLM || {};

window.SLM['commons/logger/index.js'] = window.SLM['commons/logger/index.js'] || function () {
  const _exports = {};
  const logger = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { ErrorLevel, Status } = window['@yy/sl-theme-shared']['/utils/logger/sentry'];
  const newLogger = logger.pipeOwner('trade');
  _exports.ErrorLevel = ErrorLevel;
  _exports.Status = Status;
  _exports.default = newLogger;
  return _exports;
}();