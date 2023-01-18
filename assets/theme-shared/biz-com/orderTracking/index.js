window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/index.js'] = window.SLM['theme-shared/biz-com/orderTracking/index.js'] || function () {
  const _exports = {};
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/orderTracking/form/index.js'].default;
  const getFormFields = window['SLM']['theme-shared/biz-com/orderTracking/form/getFormFields.js'].default;
  const openCaptchaModal = window['SLM']['theme-shared/biz-com/orderTracking/captcha-modal/index.js'].default;
  const { wrapArmorCaptcha, getCaptchaToken } = window['SLM']['theme-shared/biz-com/orderTracking/captcha-modal/index.js'];
  const { getRiskControlToken, getRiskHumanToken } = window['SLM']['theme-shared/biz-com/orderTracking/captcha-modal/riskControl.js'];
  const { checkOrder, initUdbLogin, sendEmailCode, verifyEmailLogin } = window['SLM']['theme-shared/biz-com/orderTracking/service/index.js'];
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/orderTracking/utils/index.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const appidJson = {
    develop: 1163336839,
    staging: 1163336839,
    preview: 1165600903,
    product: 1165600903
  };

  class OrderTrackingForm {
    constructor(dom) {
      this.formDom = dom;
      this.isHistoryOrder = false;
      this.verify = true;
      this.formId = 'JorderTrackingForm';
      this.initChangeForm();
    }

    init() {
      this.orderTrackingFormInstance && this.orderTrackingFormInstance.destroy();
      this.orderTrackingFormInstance = new Form({
        id: this.formId,
        fields: this.getFieldConfigs(),
        onSubmit: async data => {
          if (this.isHistoryOrder) {
            await this.onHistoryOrderSubmit(data);
          } else {
            await this.onViewSubmit(data);
          }
        }
      });
    }

    async initChangeForm() {
      this.dfptoken = await getRiskControlToken();
      this.formDom.find('.order-tracking__change-form-btn').click(() => {
        if (this.isHistoryOrder) {
          this.formDom.find('.JfindOrder').show();
          this.formDom.find('.JhistoryOrder').hide();
        } else {
          this.formDom.find('.JfindOrder').hide();
          this.formDom.find('.JhistoryOrder').show();
        }

        this.isHistoryOrder = !this.isHistoryOrder;
        this.init();
      });
      this.init();
    }

    getFieldConfigs() {
      const fieldTypes = this.isHistoryOrder ? ['email', {
        type: 'verifycode',
        on: {
          send: () => this.sendVerifyCode()
        },
        watch: ['email']
      }] : ['username', 'orderId'];
      return getFormFields(fieldTypes);
    }

    async onViewSubmit(data) {
      try {
        const tokenObj = await getRiskHumanToken();
        const newData = { ...data,
          dfpToken: this.dfptoken,
          msToken: tokenObj.orderBtnToken
        };
        newData.email = null;
        newData.phone = null;

        if (data.username.includes('@')) {
          newData.email = data.username;
        } else {
          const itemValue = this.orderTrackingFormInstance.formItemInstances.username.getFormValue();
          newData.phone = itemValue.username;
        }

        const res = await checkOrder(newData);

        if (res.data && res.data.riskCheck) {
          this.orderCaptcha(data);
        }

        if (res.data && res.data.orderUrl) {
          window.location.href = res.data.orderUrl;
        }
      } catch (error) {
        if (error.code === 'SLE1101') {
          this.onError({
            message: t('general.order_tracking.risk_black_user')
          });
        } else if (error.code === 'SLE1102') {
          this.onError({
            message: t('general.order_tracking.risk_interception')
          });
        } else if (error.code === 'SLE1103') {
          this.onError({
            message: t('general.order_tracking.query_illegal')
          });
        } else {
          this.onError(error);
        }
      }
    }

    async onHistoryOrderSubmit(data) {
      try {
        if (!this.stoken) {
          const loginRes = await this.initUdbLoginFun();

          if (loginRes && loginRes.stoken) {
            this.stoken = loginRes.stoken;
          }
        }

        const res = await verifyEmailLogin({
          appid: appidJson[getEnv().APP_ENV || 'product'],
          code: data.verifycode,
          stoken: this.stoken,
          acct: data.email,
          captcha: getCaptchaToken()
        });

        if (res.rescode === '0') {
          window.location.href = window.Shopline.redirectTo('/user/orders');
        }
      } catch (error) {
        this.onError(error);
      }
    }

    async orderCaptcha(data) {
      openCaptchaModal({
        onSuccess: async token => {
          const newData = { ...data,
            token
          };
          this.onViewSubmit(newData);
        }
      });
    }

    initUdbLoginFun() {
      return initUdbLogin({
        appid: appidJson[getEnv().APP_ENV || 'product'],
        subappid: window.Shopline.storeId,
        type: 'email',
        dfptoken: this.dfptoken,
        lang: window.SL_State.get('request.locale')
      });
    }

    async sendVerifyCode() {
      try {
        await wrapArmorCaptcha({
          beforeSendCode: async () => {
            const res = await this.orderTrackingFormInstance.formInstance.validateFields(['email']);

            if (res.pass) {
              const loginRes = await this.initUdbLoginFun();

              if (loginRes && loginRes.stoken) {
                this.stoken = loginRes.stoken;
              }

              if (loginRes.rescode !== '0') {
                return Promise.reject(loginRes);
              }

              return Promise.resolve();
            }

            return Promise.reject();
          },
          onSendCode: async captchaToken => {
            const formValue = this.orderTrackingFormInstance && this.orderTrackingFormInstance.getFormValue();
            const acct = formValue.email;
            const tokenObj = await getRiskHumanToken();
            const res = await sendEmailCode({
              appid: appidJson[getEnv().APP_ENV || 'product'],
              acct,
              stoken: this.stoken,
              captcha: captchaToken,
              mtoken: tokenObj.codeBtnToken
            }).catch(err => {
              if (err && err.stoken) {
                this.stoken = err.stoken;
              }

              return err;
            });

            if (res && res.stoken) {
              this.stoken = res.stoken;
            }

            if (res.rescode !== '0') {
              return Promise.reject(res);
            }

            return Promise.resolve();
          },
          onCaptchaVerifySuccess: async () => {
            this.orderTrackingFormInstance.formItemInstances.verifycode.triggerSendCode();
          }
        });
      } catch (e) {
        e && this.onError(e);

        if (e) {
          return Promise.reject();
        }
      }
    }

    onError(e) {
      const fields = this.getFieldConfigs();
      const lastField = fields[fields.length - 1];

      if (lastField && lastField.name) {
        this.orderTrackingFormInstance && this.orderTrackingFormInstance.formInstance.setErrMsgIntoDom([{
          name: lastField.name,
          messages: [getUdbErrorMessage(e)]
        }]);
      }
    }

    onUnload() {
      this.orderTrackingFormInstance.destroy();
    }

  }

  _exports.default = OrderTrackingForm;
  return _exports;
}();