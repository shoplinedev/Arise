window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/bind/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/bind/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { sendUniversalVerificationCode, verifyUniversalVerificationCode } = window['SLM']['theme-shared/biz-com/customer/helpers/verification-code.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const { reportBindPhoneToUserCenter, reportBindEmailToUserCenter } = window['SLM']['theme-shared/biz-com/customer/reports/bind.js'];
  const BindAccount = window['SLM']['theme-shared/biz-com/customer/biz/bind/account.js'].default;
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];

  class Bind extends Customer {
    constructor({
      id = 'customer-bind'
    }) {
      super({
        id,
        formType: 'bind'
      });
      this.$tips = null;
    }

    init() {
      this.$tips = $(`#${this.formId} .customer__tips`);
      this.queryParams = { ...this.configs,
        mode: this.query.mode
      };
      const params = this.UDBParams;

      if (params._method === 'pass') {
        this.initChangeAccountForm();
        return;
      }

      this.showAccountTips(super.formatterMask(params));
      this.initForm();
      this.bindEvents();
    }

    initForm() {
      const fields = this.getFieldConfigs();
      this.bindForm = new Form({
        id: `${this.formId}-verify`,
        fields,
        onSubmit: data => this.onSubmit(data)
      });
    }

    bindEvents() {
      $(`#${this.formId} .customer__footer-link .customer--link`).click(e => {
        this.backToUserCenter(e);
      });
    }

    backToUserCenter() {
      const {
        mode
      } = this.query;
      const modeToReportEvent = {
        phone: reportBindPhoneToUserCenter,
        email: reportBindEmailToUserCenter
      };
      modeToReportEvent[mode] && modeToReportEvent[mode]();
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
      const {
        type,
        mode
      } = this.queryParams;
      const params = this.UDBParams;

      if (type === 'member' && ['email', 'phone'].includes(mode)) {
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
          },
          onCaptchaVerifySuccess: () => {
            this.bindForm.formItemInstances.verifycode.triggerSendCode();
          }
        });
      }
    }

    showAccountTips(account) {
      const {
        mode
      } = this.queryParams;
      this.$tips.html(`
      <span>${t('customer.general.verification_code_sent_tip')} ${account},</span>
      <br />
      <span>
        ${t('cart.tips.change_binding_after_verification', {
        value: mode === 'phone' ? t('customer.phone.mobile_common') : t('customer.email.mail_common')
      })}
      </span>
    `);
      this.$tips.show();
    }

    async onSubmit(formValue = {}) {
      const {
        type,
        mode
      } = this.queryParams;
      const params = this.UDBParams;

      if (type === 'member' && ['email', 'phone'].includes(mode)) {
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
      }

      this.initChangeAccountForm();
    }

    verifyAccountSuccess() {}

    initChangeAccountForm() {
      this.$tips.hide();
      $(`#${this.formId}-verify`).hide();
      $(`#${this.formId}-account`).show();
      this.account = new BindAccount({
        id: `${this.formId}-account`,
        form: this
      });
    }

  }

  _exports.default = Bind;
  return _exports;
}();