window.SLM = window.SLM || {};

window.SLM['theme-shared/events/utils/api-logger.js'] = window.SLM['theme-shared/events/utils/api-logger.js'] || function () {
  const _exports = {};
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;

  _exports.default = apiName => createLogger('developer-api', `[${apiName}]`);

  return _exports;
}();