window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/reset-password/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/reset-password/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { sendUniversalVerificationCode, verifyUniversalVerificationCode } = window['SLM']['theme-shared/biz-com/customer/helpers/verification-code.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const { reportVerifyAccountSuccess, reportChangePasswordToUserCenter } = window['SLM']['theme-shared/biz-com/customer/reports/password.js'];
  const SetPassword = window['SLM']['theme-shared/biz-com/customer/biz/reset-password/password.js'].default;
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];

  class ResetPassword extends Customer {
    constructor({
      id = 'reset-password'
    }) {
      super({
        id,
        formType: 'reset'
      });
      this.$tips = null;
    }

    init() {
      this.$tips = $(`#${this.formId} .customer__tips`);
      this.queryParams = this.configs;
      this.showAccountTips(super.formatterMask(this.UDBParams));
      this.initForm();
      $(`#${this.formId} .customer__footer-link .customer--link`).click(() => reportChangePasswordToUserCenter());
    }

    initForm() {
      const fields = this.getFieldConfigs();
      this.bindForm = new Form({
        id: `${this.formId}-verify`,
        fields,
        onSubmit: data => this.onSubmit(data)
      });
    }

    getFieldConfigs() {
      const FIELD_TYPES = [{
        type: 'verifycode',
        on: {
          send: () => this.sendVerifyCode()
        },
        immediate: true
      }];
      return getFormFields(FIELD_TYPES);
    }

    async sendVerifyCode() {
      const params = this.UDBParams;
      await wrapArmorCaptcha({
        onCaptureCaptcha: async captchaToken => {
          const {
            stoken: lastStoken
          } = await sendUniversalVerificationCode({ ...params,
            captcha: captchaToken
          });
          super.updateToken(params, {
            stoken: lastStoken
          });
          params._pwd_method = 'change';
        },
        onCaptchaVerifySuccess: () => {
          this.bindForm.formItemInstances.verifycode.triggerSendCode();
        }
      });
    }

    showAccountTips(account) {
      this.$tips.html(`
      <span>${t('customer.general.verification_code_sent_tip')} ${account},</span>
      <br />
      <span>${t('customer.forget_password.tips_password_can_be_changed_after_verification')}</span>
    `);
      this.$tips.show();
    }

    async onSubmit(formValue = {}) {
      const params = this.UDBParams;
      const {
        stoken,
        data
      } = await verifyUniversalVerificationCode(params, {
        code: formValue.verifycode
      });
      super.updateToken(params, {
        stoken,
        oauthToken: data && data.oauthToken
      });
      this.verifyAccountSuccess(super.formatterMask(params));
      this.initChangeAccountForm();
    }

    verifyAccountSuccess() {
      const {
        mode
      } = this.query;

      if (!mode) {
        reportVerifyAccountSuccess();
      }
    }

    initChangeAccountForm() {
      this.$tips.hide();
      $(`#${this.formId}-verify`).hide();
      $(`#${this.formId}-reset`).show();
      this.account = new SetPassword({
        id: `${this.formId}-reset`,
        form: this
      });
    }

  }

  _exports.default = ResetPassword;
  return _exports;
}();