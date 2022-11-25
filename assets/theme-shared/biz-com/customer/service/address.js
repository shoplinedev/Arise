window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/address.js'] = window.SLM['theme-shared/biz-com/customer/service/address.js'] || function () {
  const _exports = {};
  const { request } = window['SLM']['theme-shared/biz-com/customer/helpers/request.js'];

  const deleteAddress = params => {
    return request.delete('/user/front/address/delete', {
      params
    });
  };

  _exports.deleteAddress = deleteAddress;

  const modifyAddress = data => {
    return request.post('/user/front/address/save', data);
  };

  _exports.modifyAddress = modifyAddress;
  return _exports;
}();