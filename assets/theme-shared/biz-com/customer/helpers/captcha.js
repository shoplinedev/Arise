window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/captcha.js'] = window.SLM['theme-shared/biz-com/customer/helpers/captcha.js'] || function () {
  const _exports = {};
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const { loadScript } = window['SLM']['theme-shared/biz-com/customer/utils/loadScript.js'];
  const origins = {
    develop: 'https://captcha.myshoplinedev.com',
    staging: 'https://captcha.myshoplinestg.com',
    preview: 'https://captcha-geo-preview.myshopline.com',
    product: 'https://captcha-geo.myshopline.com'
  };
  _exports.origins = origins;
  const config = {
    SDK_URL_OSS: 'r2cdn.myshopline.cn/static/rs/acuf/prod/latest/bundle.iife.js',
    SDK_URL_S3: 'https://r2cdn.myshopline.com/static/rs/acuf/prod/latest/bundle.iife.js',
    IS_MAINLAND: false,
    APP_ENV: getEnv().APP_ENV || 'product',
    APP_CODE: 'm3tdgo'
  };
  const CAPTCHA_CONTROL_URL = config.IS_MAINLAND ? config.SDK_URL_OSS : config.SDK_URL_S3;
  let captchaInstance = null;

  const loadArmorCaptcha = ({
    wrapId = 'content',
    lang,
    onSuccess,
    onFail,
    onClose,
    captchaType = 'blockPuzzle',
    bizParam = {}
  }) => {
    const options = {
      wrapId,
      lang,
      onSuccess: (...args) => {
        captchaInstance && captchaInstance.destroy && captchaInstance.destroy();
        onSuccess && onSuccess(...args);
      },
      onFail,
      onClose,
      origin: window.location.origin,
      appCode: config.APP_CODE,
      captchaScene: 'user',
      captchaType,
      bizParam
    };

    if (window.ArmorCaptcha) {
      captchaInstance = new window.ArmorCaptcha(options);
      return Promise.resolve(captchaInstance);
    }

    return loadScript(CAPTCHA_CONTROL_URL).then(() => {
      const {
        ArmorCaptcha
      } = window;
      captchaInstance = new ArmorCaptcha(options);
      return captchaInstance;
    });
  };

  _exports.loadArmorCaptcha = loadArmorCaptcha;
  return _exports;
}();