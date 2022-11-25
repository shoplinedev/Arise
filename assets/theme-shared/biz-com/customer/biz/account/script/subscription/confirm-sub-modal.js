window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/confirm-sub-modal.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/confirm-sub-modal.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { confirmEmailSubscribe } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;

  class ConfirmSubModal {
    constructor({
      id,
      onSuccess
    }) {
      const customer_subscription = SL_State.get('customer_subscription');
      this.email = customer_subscription && customer_subscription.email && customer_subscription.email.subscribeAccount;
      this.confirmSubModal = null;
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
      this.confirmSubModal = new Modal({
        modalId: this.id
      });
    }

    initForm() {
      const fields = getFormFields(['email']);
      this.form = new Form({
        id: `${this.id}-form`,
        fields,
        onSubmit: data => {
          confirmEmailSubscribe({
            subscribeAccount: data.email
          }).then(() => {
            this.onSuccess();
            this.hide();
          }).catch(() => {
            this.toast.open(t('customer.account.unknow_error_tip'));
          });
        }
      });
    }

    show() {
      const {
        formInstance
      } = this.form;
      formInstance.setDomValue(formInstance.el, 'email', this.email);
      formInstance.setLocalsValue('email', this.email);
      const SLInput = $(`#${this.id}-form .sl-input`);
      SLInput.addClass('subscribe__form__item--disabled');
      SLInput.find(`[name="email"]`).attr('disabled', true);
      this.confirmSubModal.show();
    }

    hide() {
      this.confirmSubModal.hide();
    }

  }

  _exports.default = ConfirmSubModal;
  return _exports;
}();