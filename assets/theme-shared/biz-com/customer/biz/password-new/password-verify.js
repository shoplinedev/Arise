window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/password-new/password-verify.js'] = window.SLM['theme-shared/biz-com/customer/biz/password-new/password-verify.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const { getRetrievePrechk, getMethodList, sendPhoneVerificationCode, sendEmailVerificationCode, verifyPhoneVerificationCode, verifyEmailVerificationCode, resetPassword } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { getAccountFieldType } = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'];
  const { reportForgetPasswordToLogin, reportResetPasswordToLogin } = window['SLM']['theme-shared/biz-com/customer/reports/password.js'];
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const PasswordSet = window['SLM']['theme-shared/biz-com/customer/biz/password-new/password-set.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class PasswordNew extends Customer {
    constructor({
      id,
      containerId,
      setFormId
    }) {
      super({
        id,
        formType: 'passwordNew'
      });
      this.containerId = containerId;
      this.setFormId = setFormId;
      this.passwordForm = null;
    }

    init() {
      this.passwordForm = new Form({
        id: this.formId,
        fields: this.getFieldConfigs(),
        onSubmit: data => this.onSubmit(data)
      });
      $(`#${this.containerId} .password__buttons a`).click(() => {
        const display = $(`#${this.formId}`).css('display');

        if (display !== 'none') {
          reportForgetPasswordToLogin();
        } else {
          reportResetPasswordToLogin();
        }
      });
    }

    getFieldConfigs() {
      const {
        mode
      } = this.configs;
      const accountFieldType = getAccountFieldType(mode);
      const fieldTypes = [accountFieldType, 'password', {
        type: 'verifycode',
        on: {
          send: () => this.sendVerifyCode()
        },
        watch: [accountFieldType]
      }];
      return getFormFields(fieldTypes);
    }

    async sendVerifyCode() {
      const {
        mode
      } = this.configs;
      const {
        UDBParams
      } = this;

      if (!mode) {
        return;
      }

      const formValue = this.passwordForm && this.passwordForm.getFormValue();
      const account = formValue[mode];
      await wrapArmorCaptcha({
        beforeCapture: async () => {
          const {
            stoken,
            data
          } = await getRetrievePrechk(super.formatRequestBody({ ...UDBParams,
            account
          }));
          super.updateToken(UDBParams, {
            stoken,
            servcode: data && data.servcode
          });
          const {
            data: {
              methods
            },
            stoken: newStoken
          } = await getMethodList(super.formatRequestBody(UDBParams));
          const {
            method,
            mobileMask,
            emailMask
          } = methods && methods[0] || {};
          super.updateToken(UDBParams, {
            stoken: newStoken,
            _method: method,
            _mask: mobileMask || emailMask
          });
        },
        onCaptureCaptcha: async captchaToken => {
          const sendCodeFn = UDBParams._method && UDBParams._method.includes('sms') ? sendPhoneVerificationCode : sendEmailVerificationCode;
          const {
            stoken: lastStoken
          } = await sendCodeFn(super.formatRequestBody({ ...UDBParams,
            captcha: captchaToken
          }));
          super.updateToken(UDBParams, {
            stoken: lastStoken
          });
        },
        onCaptchaVerifySuccess: async () => {
          this.passwordForm.formItemInstances.verifycode.triggerSendCode();
        }
      });
    }

    initSetForm() {
      $(`#${this.formId}`).hide();
      const passwordSetForm = new PasswordSet({
        id: this.setFormId,
        onSubmit: data => this.onResetConfirm(data)
      });
      $(`#${this.containerId}`).find('.password-reset-tips').text(t('customer.forget_password.tips_reset_password', {
        account: this.formatterMask(this.UDBParams)
      }));
      $(`#${passwordSetForm.formId}`).show();
    }

    onResetConfirm(data) {
      return resetPassword(super.formatRequestBody({ ...this.UDBParams,
        pwd: data.password
      })).then(() => {
        window.location.href = redirectTo(`${SIGN_IN}${window.location.search}`);
        return Promise.resolve();
      }).catch(error => {
        return Promise.reject(error);
      });
    }

    onSubmit() {
      const {
        UDBParams
      } = this;
      const {
        verifycode
      } = this.passwordForm && this.passwordForm.getFormValue();

      if (UDBParams.stoken) {
        const verifyCodeFn = UDBParams._method && UDBParams._method.includes('sms') ? verifyPhoneVerificationCode : verifyEmailVerificationCode;
        return verifyCodeFn(super.formatRequestBody({ ...UDBParams,
          code: verifycode
        })).then(({
          stoken,
          data
        }) => {
          super.updateToken(UDBParams, {
            stoken,
            oauthToken: data && data.oauthToken
          });
          this.initSetForm();
          return Promise.resolve();
        }).catch(error => {
          this.passwordForm && this.passwordForm.formInstance.setErrMsgIntoDom([{
            name: 'verifycode',
            messages: [getUdbErrorMessage(error)]
          }]);
          return Promise.reject(error);
        });
      }

      const error = {
        message: t('customer.general.send_error')
      };
      this.passwordForm && this.passwordForm.formInstance.setErrMsgIntoDom([{
        name: 'verifycode',
        messages: [getUdbErrorMessage(error)]
      }]);
      return Promise.reject(error);
    }

  }

  _exports.default = PasswordNew;
  return _exports;
}();