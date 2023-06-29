window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-up/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-up/index.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const { checkAccount, signUpUpdate, signUpMember, updateUserInfo, sendSignUpVerificationCode } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { USER_CENTER, SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { getLanguage, redirectPage, getRedirectOriginUrl, jumpWithSearchParams } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { MOBILE_REGISTERED, EMAIL_REGISTERED } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const storage = window['SLM']['theme-shared/biz-com/customer/utils/storage.js'].default;
  const { DEFAULT_FORM_VALUE, REGISTER_EXTRA_INFO } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { getAccountFieldType } = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Policy = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/policy.js'].default;
  const Subscribe = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/subscribe.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];
  const DatePicker = window['SLM']['theme-shared/biz-com/customer/commons/date-picker/index.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class Register extends Customer {
    constructor({
      id = 'register',
      isModal = false,
      success = null
    }) {
      super({
        id,
        formType: 'signUp',
        success,
        isModal
      });
      this.modal = null;
      this.policy = null;
      this.subscribe = null;
      this.registerForm = null;
    }

    init() {
      this.$$reports && this.$$reports.reportSignUpPageView && this.$$reports.reportSignUpPageView();
      this.registerForm = new Form({
        id: this.formId,
        fields: this.getFieldConfigs(),
        onSubmit: data => {
          this.onSubmit(data).catch(e => {
            this.onError(e);
          });
        }
      });
      this.policy = new Policy({
        formId: this.formId,
        $policy: $(`#${this.formId} .sign-up__terms`),
        form: this,
        $$reports: this.$$reports
      });
      const {
        mode
      } = this.configs;

      if (['username', 'email'].includes(mode)) {
        this.subscribe = new Subscribe({
          formId: this.formId,
          $subscribe: $(`#${this.formId} .sign-up__subscription`),
          $$reports: this.$$reports
        });
      }

      this.bindEvents();
      new DatePicker({
        id: this.isModal ? 'register-birthday-modal' : 'register-birthday',
        value: ''
      });
    }

    getFieldConfigs() {
      const {
        mode,
        verify
      } = this.configs;
      const accountFieldType = getAccountFieldType(mode);
      const fieldTypes = [accountFieldType, 'password'];

      if (verify) {
        fieldTypes.push({
          type: 'verifycode',
          on: {
            send: () => this.sendVerifyCode()
          },
          watch: [accountFieldType]
        });
      }

      return getFormFields(fieldTypes);
    }

    bindEvents() {
      const isPhoneInputMode = value => {
        return /^\d+$/.test(value);
      };

      this.registerForm && this.registerForm.formInstance && this.registerForm.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        if (changedValue && changedValue.username) {
          const isEmailInputMode = changedValue && changedValue.username && !isPhoneInputMode(changedValue && changedValue.username) || changedValue && changedValue.email;
          this.subscribe.toggleSubscriptionCheckbox(!!isEmailInputMode);
        }

        if (changedValue && changedValue.email) {
          this.subscribe.toggleSubscriptionCheckbox(true);
        }

        if (typeof (changedValue && changedValue.subscription) !== 'undefined') {
          this.subscribe.setSubscriptionEmail(changedValue && changedValue.subscription);
        }

        if (typeof (changedValue && changedValue.policy) !== 'undefined') {
          this.policy.onCheckAgreement(changedValue && changedValue.policy);
        }

        this.clearError();
      });
      $(`#${this.formId} .sign-up__footer-link .sign-up__link`).click(e => {
        e.preventDefault();
        this.$$reports.reportRegisterToLogin && this.$$reports.reportRegisterToLogin();
        const href = $(e.currentTarget).attr('href');
        window.location.href = href;
      });
    }

    getExtInfo(transform) {
      const excludeFields = ['email', 'phone', 'username', 'verifycode', 'password'];
      return $(`#${this.formId} form`).serializeArray().filter(item => !excludeFields.includes(item.name)).reduce((prev, next) => {
        prev[next.name] = typeof transform[next.name] === 'function' ? transform[next.name](next.value) : next.value;
        return prev;
      }, {}) || {};
    }

    onSubmit(data) {
      const {
        mode = 'email',
        verify
      } = this.configs;
      const checkResult = this.policy.checkAgreePolicy(data);

      if (!checkResult) {
        super.setError({
          resmsg: 'customer.general.user_agreement_tip'
        });
        return Promise.reject();
      }

      if (data && typeof data.subscription !== 'undefined') {
        this.subscribe && this.subscribe.setSubscriptionEmail(data && data.subscription);
      }

      const params = this.UDBParams;
      const payload = {
        acct: data.email || data.phone || data.username,
        passwd: data.password,
        verifycode: data.verifycode,
        isverify: verify ? '1' : '0',
        eventid: this.eid
      };
      const customExtInfo = storage.sessionStorage.get(REGISTER_EXTRA_INFO);
      const extInfo = { ...this.getExtInfo({
          gender: val => val && parseInt(val, 10) || 0,
          birthday: date => date && dayjs(date).format('YYYYMMDD') || ''
        }),
        ...customExtInfo
      };

      if (window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value) {
        extInfo.memberReferralCode = window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value;
      }

      if (Object.keys(extInfo).length > 0) {
        payload.extinfo = JSON.stringify(extInfo);
      }

      this.registerForm.setLoading(true);
      this.$$reports.reportSignUpSuccess && this.$$reports.reportSignUpSuccess();

      if (verify) {
        return this.onSignUp({
          payload,
          params,
          data,
          mode
        });
      }

      return checkAccount(super.formatRequestBody({ ...params,
        acct: payload.acct
      })).then(({
        stoken
      }) => {
        super.updateToken(params, {
          stoken
        });
        return this.onSignUp({
          payload,
          params,
          data,
          mode
        });
      }).catch(res => {
        this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
        this.registerForm.setLoading(false);
        return Promise.reject(res);
      });
    }

    onSignUp({
      payload,
      params,
      data,
      mode
    }) {
      const registerAccount = (captchaToken, updateParams = {}) => {
        const formData = this.registerForm.getFormValue();
        return signUpMember(super.formatRequestBody({ ...payload,
          ...params,
          pwd: formData.password,
          captcha: captchaToken,
          stoken: updateParams.stoken || params.stoken
        })).then(({
          data: resData
        }) => {
          this.onSignUpSuccess(resData && resData.extUIMsg && resData.extUIMsg.ck || {}, data, mode);
          return resData;
        }).finally(() => {
          this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
        });
      };

      return wrapArmorCaptcha({
        onCaptureCaptcha: registerAccount,
        onCaptchaVerifySuccess: (captchaToken, prevRequestResult) => registerAccount(captchaToken, {
          stoken: prevRequestResult && prevRequestResult.stoken
        }),
        onError: e => {
          this.setError(e);
          this.registerForm.setLoading(false);
        }
      }).catch(e => {
        this.setError(e);
        this.registerForm.setLoading(false);
      });
    }

    onSignUpSuccess({
      osudb_uid
    }, data, mode) {
      window.SL_EventBus.emit('customer:register', {
        data: {
          userId: osudb_uid
        }
      });
      this.reportSignUp(data, mode);
      const requestBody = {
        language: getLanguage(),
        udbFirstLogin: true
      };
      storage.sessionStorage.del(REGISTER_EXTRA_INFO);
      Promise.all([signUpUpdate(requestBody), updateUserInfo()]).catch(() => {
        this.registerForm.setLoading(false);
      }).finally(() => {
        this.report({
          event_name: 'leave',
          page_dest: getRedirectOriginUrl()
        });

        if (this.success) {
          this.success();
          this.registerForm.setLoading(true);
          return;
        }

        redirectPage(USER_CENTER);
      });
    }

    async sendVerifyCode() {
      const {
        mode,
        verify
      } = this.configs;
      const {
        UDBParams
      } = this;

      if (!mode || !verify) {
        return;
      }

      try {
        await wrapArmorCaptcha({
          beforeCapture: async () => {
            const formValue = this.registerForm && this.registerForm.getFormValue();
            const acct = formValue[mode];
            const {
              stoken
            } = await checkAccount(super.formatRequestBody({ ...UDBParams,
              acct
            }));
            super.updateToken(UDBParams, {
              stoken
            });
          },
          onCaptureCaptcha: async captchaToken => {
            const formValue = this.registerForm && this.registerForm.getFormValue();
            const acct = formValue[mode];
            const {
              stoken: lastStoken
            } = await sendSignUpVerificationCode(super.formatRequestBody({
              acct,
              ...UDBParams,
              captcha: captchaToken
            }));
            super.updateToken(UDBParams, {
              stoken: lastStoken
            });
          },
          onCaptchaVerifySuccess: async () => {
            this.registerForm.formItemInstances.verifycode.triggerSendCode();
          }
        });
      } catch (e) {
        if (!e || this.isModal) {
          return Promise.reject(e);
        }

        this.onError(e);
      }
    }

    onError(e) {
      const registeredCode = [MOBILE_REGISTERED, EMAIL_REGISTERED];
      const {
        mode
      } = this.configs;
      const accountFieldType = getAccountFieldType(mode);
      if (!e) return;

      if (!this.isModal && registeredCode.includes(e.rescode)) {
        const formValue = this.registerForm && this.registerForm.getValue();
        storage.sessionStorage.set(DEFAULT_FORM_VALUE, {
          [accountFieldType]: formValue[accountFieldType],
          password: formValue.password,
          iso2: formValue.iso2
        });
        jumpWithSearchParams(redirectTo(SIGN_IN));
        return;
      }

      const fields = this.getFieldConfigs();
      const lastField = fields[fields.length - 1];

      if (lastField && lastField.name) {
        this.registerForm && this.registerForm.formInstance.setErrMsgIntoDom([{
          name: lastField.name,
          messages: [getUdbErrorMessage(e)]
        }]);
        return;
      }

      super.setError(e);
    }

    reportSignUp(data, mode) {
      const loginMethod = data && data[mode] && data[mode].includes('@') ? 'Email' : 'Phone';
      this.$$reports && this.$$reports.thirdReportSignUpSuccess && this.$$reports.thirdReportSignUpSuccess(this.eid, loginMethod);
      this.$$reports && this.$$reports.riskReportSignIn && this.$$reports.riskReportSignIn();
    }

  }

  _exports.default = Register;
  return _exports;
}();