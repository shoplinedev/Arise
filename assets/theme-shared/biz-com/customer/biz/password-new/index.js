window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/password-new/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/password-new/index.js'] || function () {
  const _exports = {};
  const PasswordVerify = window['SLM']['theme-shared/biz-com/customer/biz/password-new/password-verify.js'].default;
  const PasswordToken = window['SLM']['theme-shared/biz-com/customer/biz/password-new/password-token.js'].default;

  class PasswordNew {
    constructor({
      id = 'customer-password'
    }) {
      this.id = `${id}-verify`;
      this.containerId = id;
      this.setFormId = `${id}-set`;
      this.verifyInstance = null;
      this.tokenInstance = null;
      this.token = window.SL_State.get('request.uri.query.token');
      this.init();
    }

    init() {
      if (this.token) {
        this.tokenInstance = new PasswordToken({
          id: this.id,
          containerId: this.containerId,
          setFormId: this.setFormId
        });
      } else {
        this.verifyInstance = new PasswordVerify({
          id: this.id,
          containerId: this.containerId,
          setFormId: this.setFormId
        });
      }
    }

  }

  _exports.default = PasswordNew;
  return _exports;
}();