window.SLM = window.SLM || {};
window.SLM['theme-shared/utils/retryRequest.js'] = window.SLM['theme-shared/utils/retryRequest.js'] || function () {
  const _exports = {};
  const axios = window['axios']['default'];
  const { baseAxiosConfig, leproxyInterceptor } = window['SLM']['theme-shared/utils/request.js'];
  const instance = axios.create(baseAxiosConfig);
  instance.interceptors.response.use(...leproxyInterceptor);
  instance.defaults.retry = 2;
  const setupRetryInterceptor = retryUrls => {
    if (!retryUrls || !Array.isArray(retryUrls)) return;
    instance.interceptors.response.use(undefined, err => {
      const {
        config
      } = err;
      if (!config || !config.retry || !retryUrls.includes(config.url)) return Promise.reject(err);
      config.retryCount = config.retryCount || 0;
      if (config.retryCount >= config.retry) {
        return Promise.reject(err);
      }
      config.retryCount += 1;
      return instance({
        headers: {
          retryCount: config.retryCount,
          ...(config.headers || {})
        },
        ...config
      });
    });
  };
  _exports.setupRetryInterceptor = setupRetryInterceptor;
  _exports.default = instance;
  return _exports;
}();