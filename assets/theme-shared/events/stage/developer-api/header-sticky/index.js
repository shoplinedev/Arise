window.SLM = window.SLM || {};

window.SLM['theme-shared/events/stage/developer-api/header-sticky/index.js'] = window.SLM['theme-shared/events/stage/developer-api/header-sticky/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/stage/enum/index.js'];
  const EVENT_NAME = externalEvent.HEADER_STICKY;
  const logger = apiLogger(EVENT_NAME);
  const external = window.Shopline.event;

  const headerSticky = data => {
    logger.info(`[emit]`, data);
    return external.emit(EVENT_NAME, {
      data,
      onSuccess: result => {
        logger.info('success', result);
      },
      onError: error => {
        logger.error(error);
      }
    });
  };

  headerSticky.apiName = EVENT_NAME;
  _exports.default = headerSticky;
  return _exports;
}();