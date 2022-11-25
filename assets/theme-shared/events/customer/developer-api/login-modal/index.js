window.SLM = window.SLM || {};

window.SLM['theme-shared/events/customer/developer-api/login-modal/index.js'] = window.SLM['theme-shared/events/customer/developer-api/login-modal/index.js'] || function () {
  const _exports = {};
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalEvent = window['SLM']['theme-shared/events/customer/enum/index.js'];
  const interiorEvent = window['SLM']['theme-shared/events/customer/interior-event/index.js'];
  const renderModal = window['SLM']['theme-shared/events/customer/developer-api/login-modal/renderModal.js'].default;
  const logger = apiLogger(externalEvent.LOGIN_MODAL);
  const interior = window && window.SL_EventBus;
  const external = window && window.Shopline.event;
  const isMobile = window && window.SL_State && window.SL_State.get('request.is_mobile');
  let modal;

  const bindResizeEvent = (() => {
    let hasBindEvent = false;
    return modal => {
      if (hasBindEvent) {
        return;
      }

      hasBindEvent = true;
      const container = document.querySelector(`#${modal.modalId} .login-modal__container`);

      const setHeight = () => {
        const vh = window.innerHeight * 0.01;
        container.style.maxHeight = `${90 * vh}px`;
      };

      setHeight();
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          setHeight();
        }
      });
      window.addEventListener('resize', setHeight);
    };
  })();

  interior.on(interiorEvent.LOGIN_MODAL, async (options = {}) => {
    const {
      data = {},
      onSuccess,
      onError
    } = options;
    const lifeCycle = {
      onShow: modal => {
        if (isMobile) {
          bindResizeEvent(modal);
        }
      }
    };

    try {
      if (modal) {
        if (modal.visibleState !== 'visible') {
          modal.show();
          lifeCycle && lifeCycle.onShow(modal);
        }

        external.emit(externalEvent.LOGIN_MODAL_RENDER);
        onSuccess && onSuccess(modal);
        return;
      }

      modal = await renderModal(data, lifeCycle);
      external.emit(externalEvent.LOGIN_MODAL_RENDER);
      onSuccess && onSuccess(modal);
    } catch (e) {
      onError && onError(e);
    }
  });

  const loginModal = () => external && external.on(externalEvent.LOGIN_MODAL, async (options = {}) => {
    const {
      onError,
      data
    } = options;

    try {
      logger.info(`[emit]`, data);
      interior.emit(interiorEvent.LOGIN_MODAL, options);
    } catch (error) {
      onError && onError(error);
    }
  });

  loginModal.apiName = externalEvent.LOGIN_MODAL;
  _exports.default = loginModal;
  return _exports;
}();