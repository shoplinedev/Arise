window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/service/orders.js'] = window.SLM['theme-shared/biz-com/customer/service/orders.js'] || function () {
  const _exports = {};
  const http = window['SLM']['theme-shared/utils/request.js'].default;
  const { signOutAndJump } = window['SLM']['theme-shared/biz-com/customer/helpers/signOut.js'];

  function withLoginStatusCheck(response) {
    return new Promise((res, rej) => {
      response.then(data => {
        res(data);
      }).catch(err => {
        if (err.code === 'CUS0401') {
          signOutAndJump();
          return;
        }

        rej(err);
      });
    });
  }

  const getOrderList = params => {
    return withLoginStatusCheck(http.get('/trade/ofc/order/sub/list', {
      params
    }));
  };

  _exports.getOrderList = getOrderList;

  function getAllLogisticsData(params) {
    return withLoginStatusCheck(http.get('trade/ofc/logistics/trace/package-list', {
      params
    }));
  }

  _exports.getAllLogisticsData = getAllLogisticsData;

  function getCustomLogisticsDataV2(params) {
    return withLoginStatusCheck(http.get('/trade/ofc/logistics/trace/custom', {
      params
    }));
  }

  _exports.getCustomLogisticsDataV2 = getCustomLogisticsDataV2;

  function getLogisticsData(params) {
    return withLoginStatusCheck(http.get('/logistics/trace/query', {
      params
    }));
  }

  _exports.getLogisticsData = getLogisticsData;

  function uploadVoucher(data) {
    return withLoginStatusCheck(http.post('/trade/ofc/order/update/add-voucher', data));
  }

  _exports.uploadVoucher = uploadVoucher;
  return _exports;
}();