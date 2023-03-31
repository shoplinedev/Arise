window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/account/delete-account.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/account/delete-account.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { sendUniversalVerificationCode, verifyUniversalVerificationCode } = window['SLM']['theme-shared/biz-com/customer/helpers/verification-code.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;
  const { deleteAccountInfo } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { getCurrentTime } = window['SLM']['theme-shared/biz-com/customer/service/common.js'];
  const BUTTON_LOADING_CLASS = 'btn--loading';
  const PHONE = 'phone';
  const TIMEOUT_CODE = 'CCU0005';

  class DeleteAccount extends Customer {
    constructor({
      id = 'delete-account',
      containerId,
      mode,
      onClose
    }) {
      super({
        id,
        formType: 'delete-account'
      });
      this.containerId = containerId;
      this.onClose = onClose;
      this.mode = mode;
      this.verifyForm = null;
      this.$verify = $(`#${containerId} .${id}__verify`);
      this.$notice = $(`#${containerId} .${id}__notice`);
      this.$tips = null;
      this.bindEvents();
    }

    init() {
      this.$tips = this.$verify.find('.delete-account__desc');
      this.$verify.find('input').val('');
      this.initForm();
    }

    show() {
      if (this.verifyForm) {
        this.$verify.find('input').val('');
        this.verifyForm.formItemInstances && this.verifyForm.formItemInstances.verifycode && this.verifyForm.formItemInstances.verifycode.reset();
        this.verifyForm.formItemInstances && this.verifyForm.formItemInstances.verifycode && this.verifyForm.formItemInstances.verifycode.triggerSendCode();
      }
    }

    initForm() {
      const fields = this.getFieldConfigs();
      this.verifyForm = new Form({
        id: `${this.formId}-verify`,
        fields,
        onSubmit: data => this.onSubmit(data)
      });
      this.showAccountTips(super.formatterMask(this.UDBParams));
    }

    showAccountTips(account) {
      const content = this.mode === PHONE ? t('customer.account.verify_phone_message', {
        phone: account
      }) : t('customer.account.verify_email_message', {
        email: account
      });
      this.$tips.html(content);
      this.$tips.show();
    }

    bindEvents() {
      $(`#${this.containerId} .delete-account__cancel span`).click(() => {
        this.handleCancel();
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
      const {
        stoken: lastStoken
      } = await sendUniversalVerificationCode(params);
      super.updateToken(params, {
        stoken: lastStoken
      });
      this.showDeleteAccountMessage(super.formatterMask(params));
    }

    showDeleteAccountMessage(account) {
      this.$tips.html(this.mode !== PHONE ? t('customer.account.verify_email_message', {
        email: account
      }) : t('customer.account.verify_phone_message', {
        phone: account
      }));
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
      const {
        data: currentTime
      } = await getCurrentTime();
      this.nextStep(currentTime);
    }

    async nextStep(currentTime) {
      const $error = this.$notice.find('.delete-account__error');
      this.$verify.hide();
      this.$notice.show();
      $error.hide();
      const {
        UDBParams
      } = this;
      $('.delete-account__notice .submit-button').click(async e => {
        $(e.target).addClass(BUTTON_LOADING_CLASS);

        try {
          await deleteAccountInfo({
            busiCode: UDBParams && UDBParams.scene,
            oauthToken: UDBParams && UDBParams.oauthToken
          });
          $error.hide();
          this.onDeleteAccountSuccess();
        } catch (e) {
          if (e.code === TIMEOUT_CODE) {
            $error.show();
          }
        }

        $(e.target).removeClass(BUTTON_LOADING_CLASS);
      });
      $('.delete-account__notice .delete-account__deadline').html(t('customer.account.deadline', {
        time: dayjs(currentTime).add(9, 'day').format('YYYY-MM-DD')
      }));
    }

    onDeleteAccountSuccess() {
      this.handleCancel();
      window.location.reload();
    }

    handleReset() {
      this.$verify.show();
      this.$notice.hide();
    }

    handleCancel() {
      this.handleReset();
      this.getCustomerConfig().then(({
        stoken: lastStoken
      }) => {
        super.updateToken(this.UDBParams, {
          stoken: lastStoken
        });
      });
      this.onClose && this.onClose();
    }

  }

  _exports.default = DeleteAccount;
  return _exports;
}();