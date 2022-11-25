window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/login-register.js'] = window.SLM['theme-shared/biz-com/customer/reports/login-register.js'] || function () {
  const _exports = {};
  const login = window['SLM']['theme-shared/biz-com/customer/reports/sign-in.js'];
  const register = window['SLM']['theme-shared/biz-com/customer/reports/sign-up.js'];
  const loginModal = window['SLM']['theme-shared/biz-com/customer/reports/login-modal.js'];

  _exports.default = isLoginModal => {
    if (isLoginModal) {
      return { ...loginModal
      };
    }

    return { ...login,
      ...register
    };
  };

  return _exports;
}();