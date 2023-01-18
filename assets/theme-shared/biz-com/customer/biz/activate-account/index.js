window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/activate-account/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/activate-account/index.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const copy = window['copy-to-clipboard']['default'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Policy = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/policy.js'].default;
  const Subscribe = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/subscribe.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { checkAccount, signUpMember, signUpUpdate, updateUserInfo, activateByToken } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { checkAccountState, getEmailCustomConfig, addCart, getDiscountValue, queryEmailByToken } = window['SLM']['theme-shared/biz-com/customer/service/activate.js'];
  const { getLanguage, redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { EMAIL_REGISTERED, TOKEN_ERROR_CODE } = window['SLM']['theme-shared/biz-com/customer/constant/errorCode.js'];
  const { ACCOUNT_ACTIVATED_TOKEN_EXPIRED, ACCOUNT_ACTIVATED } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const storage = window['SLM']['theme-shared/biz-com/customer/utils/storage.js'].default;
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const { SIGN_IN, USER_CENTER } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/toast.js'].default;
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;

  class ActivateAccount extends Customer {
    constructor({
      id
    }) {
      super({
        id,
        formType: 'activate'
      });
      this.policy = null;
      this.subscribe = null;
      this.registerForm = null;
      this.subsEmail = null;
      this.email = new URLSearchParams(window.location.search).get('email');
      this.token = this.query.token;
      this.status = 'register';
      this.discountCode = null;
      this.applyed = false;
      this.$container = $(`#${this.formId}`);
      this.$form = $(`#${this.formId} .customer__form`);
      this.$title = $(`#${this.formId} .customer__title`);
      this.$activateCode = $(`#${this.formId} .activate-code`);
      this.$applyCodeBtn = $(`#${this.formId} .apply-activate-code`);
      this.$copyCodeBtn = $(`#${this.formId} .activate-copy`);
      this.$discountCode = $(`#${this.formId} .customer-activate__discount`);
      this.$discountCodeImg = $(`#${this.formId} .customer-activate__discount-img img`);
    }

    beforeCreate() {
      this.$form.on('submit', e => {
        e.preventDefault();
      });

      if (!this.token && !this.email) {
        this.getEmailCustomConfig();
      } else if (this.token) {
        const registerTypes = SL_State.get('shop.store_register_config.types').split(',');

        if (!registerTypes.includes('email')) {
          redirectPage(SIGN_IN);
        } else {
          this.getEmailCustomConfig();
          queryEmailByToken({
            token: this.token,
            scene: 'activateUser'
          }).then(({
            data
          }) => {
            this.subsEmail = data;
          });
        }
      } else if (this.email) {
        this.subsEmail = this.email;
        checkAccountState({
          account: this.email
        }).then(({
          data
        }) => {
          if (data) {
            storage.sessionStorage.set(ACCOUNT_ACTIVATED, true);
            redirectPage(SIGN_IN);
            return false;
          }

          this.getEmailCustomConfig();
        });
      }
    }

    getEmailCustomConfig() {
      getEmailCustomConfig({
        emailTemplateName: 'customer_invite_registry_diy_email',
        language: getLanguage()
      }).then(({
        data
      }) => {
        const customConfig = data && data.customConfig ? JSON.parse(data.customConfig) : {};
        const discountEnable = customConfig && customConfig.discountEnable;
        const discountCode = customConfig && customConfig.discountCode;
        const discountImage = customConfig && customConfig.discountBannerImage;
        const discountBackground = customConfig && customConfig.discountBgColor;
        const priceRuleId = customConfig && customConfig.priceRuleId;

        if (discountEnable) {
          this.discountCode = discountCode;
          this.$title.text(t('customer.activate.discount_title'));
          discountImage && this.$discountCodeImg.attr('src', discountImage);
          discountBackground && this.$discountCode.css('background-color', discountBackground);
          this.$discountCode.removeClass('hidden');
          getDiscountValue({
            priceRuleId,
            language: getLanguage(),
            currencySymbol: '1'
          }).then(({
            data
          }) => {
            let activateCode = data;
            const matches = activateCode.match(/\{([-+]?\d+(?:\.\d+)?)\}/g);
            const matchPrices = matches && matches.length > 0 && matches.join(',').match(/[-+]?\d+(?:\.\d+)?/g);

            if (matchPrices && matchPrices.length > 0) {
              activateCode = matchPrices.reduce((str, next) => {
                return str.replace(`{${next}}`, currencyUtil.format(Number(next) * 100));
              }, activateCode);
            }

            this.$activateCode.text(activateCode);
          });
        } else {
          this.$title.text(t('customer.activate.normal_title'));
        }

        this.$container.removeClass('hidden');
      });
    }

    init() {
      this.toast = new Toast();
      this.registerForm = new Form({
        id: this.formId,
        fields: getFormFields(['password']),
        onSubmit: data => {
          if (!this.token && !this.email) {
            return Promise.resolve();
          }

          return this.onSubmit(data).catch(e => {
            this.onError(e);
          });
        }
      });
      this.policy = new Policy({
        formId: this.formId,
        $policy: $(`#${this.formId} .sign-up__terms`),
        form: this
      });
      this.subscribe = new Subscribe({
        formId: this.formId,
        $subscribe: $(`#${this.formId} .sign-up__subscription`)
      });
      this.bindEvents();
    }

    bindEvents() {
      this.registerForm && this.registerForm.formInstance && this.registerForm.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        if (typeof (changedValue && changedValue.subscription) !== 'undefined') {
          this.subscribe.setSubscriptionEmail(changedValue && changedValue.subscription);
        }

        if (typeof (changedValue && changedValue.policy) !== 'undefined') {
          this.policy.onCheckAgreement(changedValue && changedValue.policy);
        }

        this.clearError();
      });
    }

    onSubmit(data) {
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

      if (this.token) {
        const payload = {
          pwd: data.password,
          token: this.token,
          extinfo: JSON.stringify({
            discountCodeFlag: !!this.discountCode
          })
        };
        return this.onSignUp({
          payload,
          params
        });
      }

      if (this.email) {
        const payload = {
          acct: this.email,
          passwd: data.password,
          eventid: this.eid,
          extinfo: JSON.stringify({
            discountCodeFlag: !!this.discountCode
          })
        };
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
            params
          });
        }).catch(res => {
          this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
          return Promise.reject(res);
        });
      }
    }

    onSignUp({
      payload,
      params
    }) {
      if (this.token) {
        return activateByToken(super.formatRequestBody({ ...payload,
          ...params
        })).then(({
          data: resData
        }) => {
          return this.onSignUpSuccess(resData && resData.extUIMsg && resData.extUIMsg.ck || {});
        }).finally(() => {
          this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(this.subsEmail);
        });
      }

      if (this.email) {
        return signUpMember(super.formatRequestBody({ ...payload,
          ...params
        })).then(({
          data: resData
        }) => {
          return this.onSignUpSuccess(resData && resData.extUIMsg && resData.extUIMsg.ck || {});
        }).finally(() => {
          this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
        });
      }
    }

    onSignUpSuccess({
      osudb_uid
    }) {
      window.SL_EventBus.emit('customer:register', {
        data: {
          userId: osudb_uid
        }
      });
      const requestBody = {
        language: getLanguage(),
        udbFirstLogin: true
      };
      return Promise.all([signUpUpdate(requestBody), updateUserInfo()]).then(() => {
        this.onSuccess();
      });
    }

    onSuccess() {
      if (this.discountCode) {
        this.showCode();
      } else {
        redirectPage(USER_CENTER);
      }
    }

    showCode() {
      this.status = 'discount';
      this.$form.hide();
      this.$applyCodeBtn.removeClass('hide').on('click', () => {
        if (!this.applyed) {
          this.$applyCodeBtn.addClass('btn--loading');
          window.Shopline.event.emit('Cart::GetCartId', {
            onSuccess: res => {
              if (res.success || res.code === 'SUCCESS') {
                addCart({
                  couponCode: this.discountCode,
                  ownerId: res.data
                }).then(() => {
                  this.applyed = true;
                  this.$applyCodeBtn.html(`<svg style="margin-right: 10px;" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.875 9L7.8125 12.9375L15.125 5.625" stroke="currentColor" stroke-width="2.25"/>
                  </svg>${t('customer.activate.apply_success')}`);
                }).finally(() => {
                  this.$applyCodeBtn.removeClass('btn--loading');
                });
              } else {
                this.$applyCodeBtn.removeClass('btn--loading');
              }
            },
            onError: () => {
              this.$applyCodeBtn.removeClass('btn--loading');
            }
          });
        }
      });
      this.$title.text(t('customer.activate.success_title'));
      this.$activateCode.text(this.discountCode);
      this.$copyCodeBtn.show().on('click', () => {
        copy(this.discountCode);
        this.toast.open(t('customer.activate.copy_success'));
      });
    }

    onError(e) {
      const registeredCode = [EMAIL_REGISTERED];
      if (!e) return;

      if (registeredCode.includes(e.rescode)) {
        redirectPage(SIGN_IN);
        return;
      }

      if (TOKEN_ERROR_CODE.includes(e.rescode)) {
        storage.sessionStorage.set(ACCOUNT_ACTIVATED_TOKEN_EXPIRED, true);
        redirectPage(SIGN_IN);
        return;
      }

      const fields = getFormFields(['password']);
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

  }

  _exports.default = ActivateAccount;
  return _exports;
}();