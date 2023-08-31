window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-in/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-in/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Cookie = window['js-cookie']['default'];
  const { loginAccount, signInUpdate, updateUserInfo } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { USER_CENTER } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { getLanguage, redirectPage, getRedirectOriginUrl } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const ThirdPartLogin = window['SLM']['theme-shared/biz-com/customer/biz/sign-in/third-part-login.js'].default;
  const storage = window['SLM']['theme-shared/biz-com/customer/utils/storage.js'].default;
  const { DEFAULT_FORM_VALUE, ACCOUNT_ACTIVATED, ACCOUNT_ACTIVATED_TOKEN_EXPIRED, RESET_PASSWORD_TOKEN_EXPIRED, CONFIRM_SUBSCRIBE_EMAIL } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { getAccountFieldType } = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const { MOBILE_REGISTERED, EMAIL_REGISTERED } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/toast.js'].default;
  const { getUrlQuery } = window['SLM']['theme-shared/biz-com/customer/utils/url.js'];
  const { wrapArmorCaptcha } = window['SLM']['theme-shared/biz-com/customer/commons/captcha-modal/index.js'];
  const { getUdbResponseLanguageErrorKey } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class Login extends Customer {
    constructor({
      id = 'login',
      isModal = false,
      success = null
    }) {
      super({
        id,
        formType: 'signIn',
        success,
        isModal
      });
      this.loginForm = null;
      this.thirdPartLogin = null;
    }

    beforeCreate() {
      if (window.location.pathname.includes('/user/signIn') && window.SL_State && window.SL_State.get('request.is_login')) {
        window.location.href = redirectTo(USER_CENTER);
        return false;
      }

      this.$$reports && this.$$reports.reportSignInPageView && this.$$reports.reportSignInPageView();
      this.thirdPartLogin = new ThirdPartLogin({
        formId: this.formId,
        form: this,
        isModal: this.isModal,
        $$reports: this.$$reports
      });
      const {
        code,
        state
      } = this.query;

      if (code) {
        this.thirdPartLogin && this.thirdPartLogin.thirdPlatformCallback(code, state, nickname => {
          this.signInCallback(nickname);
        });
        return false;
      }
    }

    init() {
      this.toast = new Toast();
      this.initForm();
      this.bindEvents();
      this.showConfirmSubscribeTip();
    }

    showConfirmSubscribeTip() {
      const from = getUrlQuery('from');

      if (from === CONFIRM_SUBSCRIBE_EMAIL) {
        const tips = t(`customer.login.subscribe_confirm_tip`);
        $(`#${this.formId} .sign-in__from_confirm_email`).show().text(tips);
      }
    }

    initForm() {
      const {
        udbErrorCode
      } = this.query;

      if (udbErrorCode) {
        $(`#${this.formId} .customer__error`).text(t(getUdbResponseLanguageErrorKey(udbErrorCode))).show();
      }

      if (storage.sessionStorage.get(ACCOUNT_ACTIVATED)) {
        this.toast.open(t('customer.activate.account_activated'));
        storage.sessionStorage.del(ACCOUNT_ACTIVATED);
      }

      if (storage.sessionStorage.get(ACCOUNT_ACTIVATED_TOKEN_EXPIRED)) {
        $(`#${this.formId} .sign-in__has-registered`).show().text(t('customer.activate.token_expired'));
        storage.sessionStorage.del(ACCOUNT_ACTIVATED_TOKEN_EXPIRED);
      }

      if (storage.sessionStorage.get(RESET_PASSWORD_TOKEN_EXPIRED)) {
        $(`#${this.formId} .sign-in__has-registered`).show().text(t('customer.forget_password.token_expired'));
        storage.sessionStorage.del(RESET_PASSWORD_TOKEN_EXPIRED);
      }

      const formValue = storage.sessionStorage.get(DEFAULT_FORM_VALUE);
      let fields = this.getFieldConfigs();
      const {
        mode
      } = this.configs;
      const accountFieldType = getAccountFieldType(mode);

      if (formValue) {
        const isPhone = /^\d+$/.test(formValue[accountFieldType]);
        const tips = t(`unvisiable.customer.error_message_${isPhone ? MOBILE_REGISTERED : EMAIL_REGISTERED}`);
        $(`#${this.formId} .sign-in__has-registered`).show().text(tips);
        fields = fields.map(field => {
          return { ...field,
            value: formValue[field.name]
          };
        });

        if (mode === 'email') {
          $(`#${this.formId} input[name="email"]`).val(formValue.email);
        }

        storage.sessionStorage.del(DEFAULT_FORM_VALUE);
      }

      this.loginForm = new Form({
        id: this.formId,
        fields,
        formValue: formValue || {},
        onSubmit: data => this.onSignIn(data)
      });
    }

    getFieldConfigs() {
      const FIELD_TYPES = ['loginPassword'];
      const {
        mode
      } = this.configs;
      const accountFieldType = getAccountFieldType(mode);
      return getFormFields([accountFieldType].concat(FIELD_TYPES));
    }

    bindEvents() {
      $(`#${this.formId} .sign-in__guest-button`).click(() => redirectPage());
      this.reportNavigation();
      this.loginForm && this.loginForm.formInstance && this.loginForm.formInstance.on('valuesChange', () => {
        this.clearError();
      });
    }

    reportNavigation() {
      const pathToReport = {
        passwordNew: this.$$reports && this.$$reports.reportToForgetPassword,
        signUp: this.$$reports && this.$$reports.reportToSignUp
      };
      $(`#${this.formId} .sign-in__buttons`).on('click', 'a', e => {
        e.preventDefault();
        const path = $(e.currentTarget).attr('href');
        const type = $(e.currentTarget).data('type');
        pathToReport[type] && pathToReport[type]();
        window.location.href = path;
      });
    }

    onSignIn(data) {
      const {
        mode = 'email'
      } = this.configs;
      const params = this.UDBParams;
      const payload = {
        acct: data[mode],
        pwd: data.password,
        eventid: this.eid
      };
      const extInfo = {};

      if (window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value) {
        extInfo.memberReferralCode = window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value;
      }

      if (Object.keys(extInfo).length > 0) {
        payload.extinfo = JSON.stringify(extInfo);
      }

      this.$$reports.reportSubmitLogin && this.$$reports.reportSubmitLogin();

      const onLogin = (captchaToken, updateParams = {}) => {
        const formData = this.loginForm.getFormValue();
        this.loginForm.setLoading(true);
        return loginAccount(super.formatRequestBody({ ...payload,
          ...params,
          pwd: formData.password,
          captcha: captchaToken,
          stoken: updateParams.stoken || params.stoken
        })).then(() => this.signInCallback(null, data, mode));
      };

      return wrapArmorCaptcha({
        onCaptureCaptcha: onLogin,
        onCaptchaVerifySuccess: (captchaToken, prevRequestResult) => onLogin(captchaToken, {
          stoken: prevRequestResult && prevRequestResult.stoken
        }),
        onError: e => {
          this.setError(e);
          this.loginForm.setLoading(false);
        }
      }).catch(e => {
        this.setError(e);
        this.loginForm.setLoading(false);
      });
    }

    signInCallback(thirdNickName, data, mode) {
      const {
        code,
        state
      } = this.query;
      this.$$reports.reportLoginSuccess && this.$$reports.reportLoginSuccess();
      const isThirdLogin = !!(code && thirdNickName);
      const requestBody = {
        language: getLanguage(),
        isThird: false
      };
      const promises = [signInUpdate({ ...requestBody,
        isThird: isThirdLogin
      })];
      updateUserInfo();
      const loginParams = {
        method: data && data[mode] && data[mode].includes('@') ? 'Email' : 'Phone'
      };
      const isFirst = Number(Cookie.get('osudb_ustate')) === 0;

      if (isThirdLogin) {
        const {
          method,
          saveInfo
        } = this.thirdPartLogin && this.thirdPartLogin.saveThirdChannelInfo(state, {
          isFirst,
          thirdNickName
        });
        promises.push(saveInfo);
        loginParams.method = method;
      }

      if (!isFirst || !isThirdLogin) {
        this.$$reports && this.$$reports.thirdReportSignInCallback && this.$$reports.thirdReportSignInCallback(loginParams.method);
      }

      const reportIsFirst = code && isFirst ? 1 : 0;
      super.$$reports && super.$$reports.riskReportSignIn && super.$$reports.riskReportSignIn(reportIsFirst);
      Promise.all(promises).catch(e => {
        console.warn('signInCallback catch', e);
        this.loginForm.setLoading(false);
      }).finally(() => {
        this.$$reports && this.$$reports.reportSignInPageLeave && this.$$reports.reportSignInPageLeave(getRedirectOriginUrl());

        if (this.success) {
          this.success && this.success();
          this.loginForm.setLoading(false);
          return;
        }

        redirectPage(USER_CENTER);
      });
    }

  }

  _exports.default = Login;
  return _exports;
}();