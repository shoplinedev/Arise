window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/captcha-modal/index.js'] = window.SLM['theme-shared/biz-com/orderTracking/captcha-modal/index.js'] || function () {
  const _exports = {};
  const { ModalWithHtml } = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'];
  const { loadArmorCaptcha } = window['SLM']['theme-shared/biz-com/orderTracking/captcha-modal/captcha.js'];
  const { getLanguage } = window['SLM']['theme-shared/biz-com/orderTracking/utils/index.js'];
  let cacheModal = null;
  let cacheArmorCaptcha = null;
  let lang = null;
  const contentId = `captcha-content`;

  const openCaptchaModal = async ({
    onSuccess
  }) => {
    if (cacheModal) {
      cacheModal.show();
      cacheArmorCaptcha && cacheArmorCaptcha.reset();

      if (lang !== getLanguage()) {
        cacheArmorCaptcha.changeLanguage(getLanguage());
      }

      return;
    }

    cacheModal = new ModalWithHtml({
      zIndex: 1000,
      containerClassName: 'captcha-modal-container',
      closable: false,
      maskClosable: true,
      bodyClassName: 'captcha-modal-body',
      content: `<div id="${contentId}" class="captcha-content"></div>`,
      destroyedOnClosed: false
    });
    cacheModal.show();
    $(`#${cacheModal.modalId}`).find('.mp-modal__mask').addClass('captcha-transparent');
    $(`#${cacheModal.modalId}`).on('click', '.captcha-modal-container', e => {
      const $target = $(e.target).parents('.captcha-content');

      if ($target.length < 1) {
        cacheModal.hide();
      }
    });
    lang = getLanguage();
    cacheArmorCaptcha = await loadArmorCaptcha({
      wrapId: contentId,
      lang,
      onSuccess: token => {
        cacheModal.hide();
        onSuccess && onSuccess(token);
      }
    });
  };

  let captchaToken = null;

  const isFunction = fn => typeof fn === 'function';

  const CAPTCHA_CODE = ['2019', '2020', '3018', '3021', '1015'];

  const wrapArmorCaptcha = async ({
    beforeSendCode,
    onSendCode,
    onCaptchaVerifySuccess
  }) => {
    if (!captchaToken) {
      isFunction(beforeSendCode) && (await beforeSendCode());
    }

    try {
      isFunction(onSendCode) && (await onSendCode(captchaToken));
      captchaToken = null;
    } catch (e) {
      captchaToken = null;

      if (CAPTCHA_CODE.includes(e.rescode)) {
        openCaptchaModal({
          onSuccess: async token => {
            captchaToken = token;
            isFunction(onCaptchaVerifySuccess) && (await onCaptchaVerifySuccess(token));
          }
        });
        return Promise.reject(false);
      }

      return Promise.reject(e);
    }
  };

  _exports.wrapArmorCaptcha = wrapArmorCaptcha;

  const getCaptchaToken = () => {
    return captchaToken;
  };

  _exports.getCaptchaToken = getCaptchaToken;
  _exports.default = openCaptchaModal;
  return _exports;
}();