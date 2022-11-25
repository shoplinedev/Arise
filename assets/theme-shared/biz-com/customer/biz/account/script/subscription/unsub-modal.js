window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/unsub-modal.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/unsub-modal.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const { updateSubscriptions } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];

  class UnSubModal {
    constructor({
      id,
      onSuccess,
      onCancel
    }) {
      this.id = id;
      this.type = null;
      this.onSuccess = onSuccess;
      this.onCancel = onCancel;
      this.modal = null;
      this.$cancelBtn = $(`#MpModal${id} .customer-center-unsub-modal__btns--cancel`);
      this.$saveBtn = $(`#MpModal${id} .customer-center-unsub-modal__btns--save`);
      this.init();
    }

    init() {
      const modal = new Modal({
        modalId: this.id
      });
      modal.init();
      this.modal = modal;
      this.$cancelBtn.on('click', () => {
        this.onCancel && this.onCancel();
        this.modal.hide();
      });
      this.$saveBtn.on('click', () => {
        this.$saveBtn.addClass('disabled btn--loading');
        updateSubscriptions({
          state: 0,
          subscribeAccountType: this.type,
          subscribeChannel: 'center',
          referralCode: window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value
        }).then(() => {
          this.onSuccess && this.onSuccess();
        }).finally(() => {
          this.$saveBtn.removeClass('disabled btn--loading');
        });
      });
    }

    setType(type) {
      this.type = type;
    }

    show() {
      this.modal.show();
    }

    hide() {
      this.modal.hide();
    }

  }

  _exports.default = UnSubModal;
  return _exports;
}();