window.SLM = window.SLM || {};

window.SLM['theme-shared/events/customer/developer-api/index.js'] = window.SLM['theme-shared/events/customer/developer-api/index.js'] || function () {
  const _exports = {};
  const loginModal = window['SLM']['theme-shared/events/customer/developer-api/login-modal/index.js'].default;
  const register = window['SLM']['theme-shared/events/customer/developer-api/register/index.js'].default;
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const logger = apiLogger('register');
  const events = [loginModal, register];

  _exports.default = (...activateApiNames) => {
    const executedEvents = [];
    activateApiNames.forEach(activateApiName => {
      events.forEach(event => {
        if (event && event.apiName === activateApiName) {
          executedEvents.push(activateApiName);
          event && event();
        }
      });
    });
    logger.info('executed events', executedEvents);
    return executedEvents;
  };

  return _exports;
}();