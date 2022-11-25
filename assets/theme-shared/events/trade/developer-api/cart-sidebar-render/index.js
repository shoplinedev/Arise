window.SLM = window.SLM || {};

window.SLM['theme-shared/events/trade/developer-api/cart-sidebar-render/index.js'] = window.SLM['theme-shared/events/trade/developer-api/cart-sidebar-render/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/trade/enum/index.js'];
  const logger = apiLogger(`${externalEvent.SIDEBAR_RENDER} - EMIT`);
  const external = window && window.Shopline.event;

  const sidebarRender = ({
    data,
    onSuccess,
    onError,
    ...rest
  }) => {
    logger.info(data);
    return external.emit(externalEvent.SIDEBAR_RENDER, {
      data,
      onSuccess,
      onError,
      ...rest
    });
  };

  sidebarRender.apiName = externalEvent.SIDEBAR_RENDER;
  _exports.default = sidebarRender;
  return _exports;
}();