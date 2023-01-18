window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/customer/init.js'] = window.SLM['theme-shared/biz-com/customer/commons/customer/init.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const { HOME } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { UDB_PARAMS, THIRD_DEFAULT_REGION } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  _exports.default = function () {
    const {
      checkTag,
      subAppid,
      types
    } = window && window.SL_State && window.SL_State.get('shop.store_register_config') || {};
    const {
      countryCode
    } = window && window.SL_State && window.SL_State.get('customer_address.countryCode') || {};
    const code = countryCode || THIRD_DEFAULT_REGION;
    Cookie.set('country_code', code);

    if (!types) {
      window.location.href = redirectTo(HOME);
      return;
    }

    const params = { ...UDB_PARAMS,
      subappid: subAppid,
      code
    };

    if (checkTag) {
      params.verify = '1';
    }

    const hasEmail = types.includes('email');
    const hasPhone = types.includes('mobile');

    if (!hasEmail) {
      params.mode = 'phone';
    } else if (!hasPhone) {
      params.mode = 'email';
    }

    return { ...params
    };
  };

  return _exports;
}();