window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/checkEmail.js'] = window.SLM['theme-shared/components/hbs/shared/utils/checkEmail.js'] || function () {
  const _exports = {};

  const checkEmail = email => {
    const re = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;

    if (!re.test(String(email).toLowerCase())) {
      return 'regexp';
    }

    if (email && email.length > 50) {
      return 'length.over';
    }

    return true;
  };

  _exports.default = checkEmail;
  return _exports;
}();