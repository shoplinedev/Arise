window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/account/modify-email.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/account/modify-email.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { updateSensitiveAccountInfo } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;

  class ModifyEmail {
    constructor({
      id,
      onSuccess
    }) {
      this.email = SL_State.get('customer.userInfoDTO').email;
      this.modifyEmailModal = null;
      this.id = id;
      this.onSuccess = onSuccess;
      this.toast = new Toast();
      this.init();
    }

    init() {
      this.initModal();
      this.initForm();
    }

    initModal() {
      this.modifyEmailModal = new Modal({
        modalId: this.id
      });
    }

    initForm() {
      const fields = getFormFields(['email']);
      this.form = new Form({
        id: `${this.id}-form`,
        fields,
        onSubmit: data => {
          const newEmail = data.email;
          updateSensitiveAccountInfo({
            email: newEmail
          }).then(() => {
            const userInfoDTO = SL_State.get('customer.userInfoDTO');
            SL_State.set('customer.userInfoDTO', { ...userInfoDTO,
              email: newEmail
            });
            this.email = newEmail;
            this.modifyEmailModal.hide();
            this.onSuccess(newEmail);
          }).catch(e => {
            if (e.code === 'EMAIL_REPEAT' || e.code === 'EU0202') {
              this.toast.open(t('customer.account.email_repeat_tip'));
            } else {
              this.toast.open(t('customer.account.unknow_error_tip'));
            }
          });
        }
      });
      this.form.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        this.onFieldValueChange && this.onFieldValueChange(changedValue);
      });
    }

    show() {
      const {
        formInstance
      } = this.form;
      formInstance.setDomValue(formInstance.el, 'email', this.email);
      formInstance.setLocalsValue('email', this.email);
      formInstance.resetErrStatus();
      this.modifyEmailModal.show();
    }

    hide() {
      this.modifyEmailModal.hide();
    }

  }

  _exports.default = ModifyEmail;
  return _exports;
}();