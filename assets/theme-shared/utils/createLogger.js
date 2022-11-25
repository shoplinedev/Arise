window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/createLogger.js'] = window.SLM['theme-shared/utils/createLogger.js'] || function () {
  const _exports = {};
  const createDebug = window['debug']['default'];
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;

  const isFunction = fn => typeof fn === 'function';

  const createLogger = (name, description) => {
    const logger = {
      debug: window.console.debug,
      error: window.console.error,
      info: window.console.info,
      log: window.console.log
    };

    if (typeof window === 'undefined') {
      return logger;
    }

    if (['product'].includes(getEnv().APP_ENV)) {
      createDebug && createDebug.disable();
    }

    if (!isFunction(createDebug)) return;
    const desc = description ? ` - ${description}` : '';
    logger.error = createDebug(`${name}:error${desc}`).bind(console);
    logger.debug = createDebug(`${name}:debug${desc}`).bind(console);
    logger.info = createDebug(`${name}:info${desc}`).bind(console);
    logger.log = createDebug(`${name}:log${desc}`).bind(console);
    return logger;
  };

  _exports.default = createLogger;
  return _exports;
}();