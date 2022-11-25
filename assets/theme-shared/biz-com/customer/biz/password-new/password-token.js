window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/password-new/password-token.js'] = window.SLM['theme-shared/biz-com/customer/biz/password-new/password-token.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { TOKEN_ERROR_CODE } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const { resetPasswordByToken } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const PasswordSet = window['SLM']['theme-shared/biz-com/customer/biz/password-new/password-set.js'].default;
  const storage = window['SLM']['theme-shared/biz-com/customer/utils/storage.js'].default;
  const { RESET_PASSWORD_TOKEN_EXPIRED } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { SIGN_IN, USER_CENTER } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];

  class PasswordToken extends Customer {
    constructor({
      id,
      containerId,
      setFormId
    }) {
      super({
        id,
        formType: 'passwordNewToken'
      });
      this.containerId = containerId;
      this.setFormId = setFormId;
      this.setInstance = null;
    }

    onResetConfirm(data) {
      return resetPasswordByToken({ ...this.UDBParams,
        pwd: data.password
      }).then(() => {
        redirectPage(USER_CENTER);
        return Promise.resolve();
      }).catch(e => {
        if (TOKEN_ERROR_CODE.includes(e.rescode)) {
          storage.sessionStorage.set(RESET_PASSWORD_TOKEN_EXPIRED, true);
          redirectPage(SIGN_IN);
        }

        return Promise.reject(e);
      });
    }

    init() {
      this.setInstance = new PasswordSet({
        id: this.setFormId,
        onSubmit: data => {
          if (this.query.token === 'preview') {
            return Promise.resolve();
          }

          return this.onResetConfirm(data);
        }
      });
      $(`#${this.containerId}`).find('.password-reset-tips').text(t('customer.forget_password.tips_reset_password', {
        account: this.UDBParams.emailMask || ''
      }));
    }

  }

  _exports.default = PasswordToken;
  return _exports;
}();