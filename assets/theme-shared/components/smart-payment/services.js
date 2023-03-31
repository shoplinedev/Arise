window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/services.js'] = window.SLM['theme-shared/components/smart-payment/services.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;

  const getFirstLoadConfig = data => {
    return request.post('/trade/center/express/checkout/first-load', data);
  };

  _exports.getFirstLoadConfig = getFirstLoadConfig;

  const expressDetail = data => {
    return request.post('/trade/center/express/checkout/detail', data);
  };

  _exports.expressDetail = expressDetail;

  const expressCreate = data => {
    return request.post('/trade/center/express/checkout/create', data);
  };

  _exports.expressCreate = expressCreate;
  return _exports;
}();