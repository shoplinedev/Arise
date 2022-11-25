window.SLM = window.SLM || {};

window.SLM['theme-shared/events/stage/developer-api/megaMenuProduct-render/index.js'] = window.SLM['theme-shared/events/stage/developer-api/megaMenuProduct-render/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const interiorEvent = window['SLM']['theme-shared/events/stage/interior-event/index.js'];
  const EVENT_NAME = interiorEvent.MEGA_MENU_PRODUCT_RENDER;
  const logger = apiLogger(EVENT_NAME);
  const external = window.Shopline.event;

  const megaMenuProductRender = data => {
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

  megaMenuProductRender.apiName = EVENT_NAME;
  _exports.default = megaMenuProductRender;
  return _exports;
}();