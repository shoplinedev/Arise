window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/captcha-modal/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/captcha-modal/index.js'] || function () {
  const _exports = {};
  const { ModalWithHtml } = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'];
  const { loadArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/helpers/captcha.js'];
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  let cacheModal = null;
  const contentId = `captcha-content`;

  const openCaptchaModal = async ({
    params = {},
    onSuccess
  }) => {
    const createArmorCaptcha = () => {
      return loadArmorCaptcha({
        captchaType: params.hitPunish,
        bizParam: {
          serialNo: params.serialNo
        },
        wrapId: contentId,
        lang: getLanguage(),
        onSuccess: token => {
          cacheModal.hide();
          onSuccess && onSuccess(token);
        }
      });
    };

    if (cacheModal) {
      $(`#${cacheModal.modalId} #${contentId}`).html('');
      cacheModal.show();
      await createArmorCaptcha();
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
    await createArmorCaptcha();
  };

  let captchaToken = null;

  const isFunction = fn => typeof fn === 'function';

  const CAPTCHA_CODE = ['2019', '2020', '3018', '3021', '1015', '2015'];

  const wrapArmorCaptcha = async ({
    beforeCapture,
    onCaptureCaptcha,
    onCaptchaVerifySuccess,
    onError
  }) => {
    if (!captchaToken) {
      isFunction(beforeCapture) && (await beforeCapture());
    }

    try {
      isFunction(onCaptureCaptcha) && (await onCaptureCaptcha(captchaToken));
      captchaToken = null;
    } catch (e) {
      captchaToken = null;

      if (CAPTCHA_CODE.includes(e.rescode)) {
        openCaptchaModal({
          params: e.data,
          onSuccess: async token => {
            captchaToken = token;

            try {
              isFunction(onCaptchaVerifySuccess) && (await onCaptchaVerifySuccess(token, e || {}));
            } catch (e) {
              onError && onError(e);
            }
          }
        });
        return Promise.reject(false);
      }

      return Promise.reject(e);
    }
  };

  _exports.wrapArmorCaptcha = wrapArmorCaptcha;
  _exports.default = openCaptchaModal;
  return _exports;
}();