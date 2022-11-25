window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/bind/account.js'] = window.SLM['theme-shared/biz-com/customer/biz/bind/account.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const BaseCustomer = window['SLM']['theme-shared/biz-com/customer/commons/customer/base.js'].default;
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { getAccountFieldType } = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const { redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { USER_CENTER } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { updateBindInfo, verifyBindPhoneVerificationCode, verifyBindEmailVerificationCode, sendBindPhoneVerificationCode, sendBindEmailVerificationCode } = window['SLM']['theme-shared/biz-com/customer/service/bind.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];
  const PHONE = 'phone';

  class BindAccount extends BaseCustomer {
    constructor({
      id,
      form
    }) {
      super({
        id,
        formType: 'bindAccount'
      });
      this.form = form;
      this.init();
    }

    init() {
      this.initForm();
    }

    initForm() {
      const fields = this.getFieldConfigs();
      this.bindForm = new Form({
        id: this.formId,
        fields,
        onSubmit: data => this.onSubmit(data)
      });
    }

    getFieldConfigs() {
      const {
        mode
      } = this.query;
      const account = getAccountFieldType(mode);
      const FIELD_TYPES = [account, {
        type: 'verifycode',
        on: {
          send: () => this.sendVerifyCode()
        },
        watch: [account]
      }];
      return getFormFields(FIELD_TYPES);
    }

    async sendVerifyCode() {
      const {
        mode
      } = this.form.queryParams;
      const params = this.form.UDBParams;
      const formValue = this.bindForm && this.bindForm.getFormValue();
      const acct = formValue[mode] || formValue.username;
      await wrapArmorCaptcha({
        onCaptureCaptcha: async captchaToken => {
          let res = {};

          if (mode === PHONE) {
            const verifyCodePrarms = super.formatRequestBody({ ...params,
              mobile: acct,
              captcha: captchaToken
            });
            res = await sendBindPhoneVerificationCode(verifyCodePrarms);
          } else {
            const verifyCodePrarms = super.formatRequestBody({ ...params,
              email: acct
            });
            res = await sendBindEmailVerificationCode(verifyCodePrarms);
          }

          super.updateToken(params, {
            stoken: res.stoken
          });
        },
        onCaptchaVerifySuccess: () => {
          this.bindForm.formItemInstances.verifycode.triggerSendCode();
        }
      });
    }

    async onSubmit(data = {}) {
      const {
        mode
      } = this.form.queryParams;
      const params = this.form.UDBParams;

      if (mode === PHONE) {
        await verifyBindPhoneVerificationCode(super.formatRequestBody({ ...params,
          mobile: data[mode],
          smscode: data.verifycode
        }));
      } else {
        await verifyBindEmailVerificationCode(super.formatRequestBody({ ...params,
          email: data[mode],
          emailcode: data.verifycode
        }));
      }

      await updateBindInfo(mode === 'phone' ? '2' : '1');
      this.showNotification();
      this.success();
    }

    showNotification() {
      Toast.init({
        content: t('customer.general.bind_success'),
        duration: 3000
      });
    }

    success() {
      redirectPage(USER_CENTER);
    }

  }

  _exports.default = BindAccount;
  return _exports;
}();