window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/helpers/request.js'] = window.SLM['theme-shared/biz-com/customer/helpers/request.js'] || function () {
  const _exports = {};
  const axios = window['SLM']['theme-shared/utils/request.js'].default;
  const udbRequest = {
    get(url, options = {}) {
      return axios({
        method: 'GET',
        baseURL: '/leproxy',
        url,
        ...options
      });
    }

  };
  _exports.udbRequest = udbRequest;
  const request = axios;
  _exports.request = request;
  return _exports;
}();