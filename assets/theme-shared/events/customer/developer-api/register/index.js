window.SLM = window.SLM || {};

window.SLM['theme-shared/events/customer/developer-api/register/index.js'] = window.SLM['theme-shared/events/customer/developer-api/register/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/customer/enum/index.js'];
  const logger = apiLogger(`${externalEvent.REGISTER} - EMIT`);
  const interior = window.SL_EventBus;
  const external = window.Shopline.event;

  const register = () => interior.on('customer:register', (data = {}) => {
    logger.info(data);
    external.emit(externalEvent.REGISTER, { ...data
    });
  });

  register.apiName = externalEvent.REGISTER;
  _exports.default = register;
  return _exports;
}();