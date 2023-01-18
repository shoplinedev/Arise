window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/account/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/account/index.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const Card = window['SLM']['theme-shared/biz-com/customer/commons/card/index.js'].default;
  const { getStoreRegisterConfig } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const { updateAccountInfo } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { reportClickEditButton, reportClickPhoneChange, reportClickPasswordChange, reportClickEmailChange, reportDropModifyInfomation, reportSaveInfomation, reportEditNickname } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const DeleteAccount = window['SLM']['theme-shared/biz-com/customer/biz/account/script/account/delete-account.js'].default;
  const ModifyEmail = window['SLM']['theme-shared/biz-com/customer/biz/account/script/account/modify-email.js'].default;
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const ModifyPhone = window['SLM']['theme-shared/biz-com/customer/biz/account/script/account/modify-phone.js'].default;

  class Account extends Card {
    constructor({
      id,
      editable
    }) {
      super({
        id,
        editable
      });
      this.userInfo = SL_State.get('customer.userInfoDTO');
      this.nickname = {
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName
      };
      this.deleteAccount = null;
      this.modal = null;
    }

    init() {
      this.$nickname = $(`#${this.id} .account-item__nickname`);
      this.bindEvents();
    }

    bindEvents() {
      const actionMap = {
        email: path => {
          reportClickEmailChange();

          if (this.userInfo.checkTag) {
            window.location.href = path;
            return;
          }

          this.openModifyEmailModal();
        },
        phone: path => {
          reportClickPhoneChange();

          if (this.userInfo.checkTag) {
            window.location.href = path;
            return;
          }

          this.openModifyPhoneModal();
        },
        delete: () => {
          this.openDeleteModal();
        },
        password: path => {
          this.toResetPassword(path);
        }
      };
      $(`#${this.id} .account-item`).on('click', 'a', e => {
        e.preventDefault();
        const path = $(e.currentTarget).data('path');
        const type = $(e.currentTarget).data('type');
        actionMap && actionMap[type] && actionMap[type](path);
      });
      $(`#${this.id} .account-item input`).on('input', () => {
        this.validateFields();
      });
    }

    toResetPassword(path, token) {
      const {
        phone,
        email
      } = this.userInfo;

      if (!phone && !email) {
        Toast.init({
          content: t('customer.account.reset_password_error_hint')
        });
        return;
      }

      reportClickPasswordChange();
      window.location.href = redirectTo(token ? `${path}?captcha=${token}` : path);
    }

    async openDeleteModal() {
      const id = 'delete-account';
      const {
        phone,
        email
      } = this.userInfo;
      let {
        modal
      } = this;

      if (!phone && !email) {
        return;
      }

      if (!modal) {
        modal = new Modal({
          modalId: id
        });
        modal.init();
        this.modal = modal;
      }

      modal.show();

      if (this.deleteAccount) {
        this.deleteAccount.show();
        return;
      }

      try {
        const {
          data
        } = await getStoreRegisterConfig();
        const shop = SL_State.get('shop');
        SL_State.set('shop', { ...shop,
          store_register_config: data
        });
        this.deleteAccount = new DeleteAccount({
          id,
          containerId: modal.modalId,
          mode: email ? 'email' : 'phone',
          onClose: () => modal.hide()
        });
      } catch (e) {
        console.error(e);
      }
    }

    openModifyEmailModal() {
      if (!this.modifyEmailModal) {
        this.modifyEmailModal = new ModifyEmail({
          id: 'customer-center-modify-email-modal',
          onSuccess: newEmail => {
            $(`#${this.id} [data-type="email-content"]`).removeAttr('data-no-email').attr('data-has-email', true);
            $(`#${this.id} .account-item__email`).text(newEmail);
            $(`#${this.id} [data-show="detail"]`).show();
            $(`#${this.id} [data-show="edit"]`).hide();
            window.location.reload();
          }
        });
      }

      this.modifyEmailModal.show();
    }

    openModifyPhoneModal() {
      if (!this.modifyPhoneModal) {
        this.modifyPhoneModal = new ModifyPhone({
          id: 'customer-center-modify-phone-modal',
          onSuccess: newPhone => {
            $(`#${this.id} [data-type="phone-content"]`).removeAttr('data-no-phone').attr('data-has-phone', true);
            $(`#${this.id} .account-item__phone`).text(newPhone.replace('00', '+'));
            $(`#${this.id} [data-show="detail"]`).show();
            $(`#${this.id} [data-show="edit"]`).hide();
            window.location.reload();
          }
        });
      }

      this.modifyPhoneModal.show();
    }

    getFormValue() {
      return {
        firstName: this.$nickname.find('.account-item__firstname input').val().trim(),
        lastName: this.$nickname.find('.account-item__lastname input').val().trim()
      };
    }

    getNickname() {
      const formValue = this.getFormValue();
      return `${formValue.firstName} ${formValue.lastName}`.trim();
    }

    showError() {
      this.$nickname.find('.account-item__modify--error').show();
      this.$nickname.find('.sl-input').addClass('error');
    }

    hideError() {
      this.$nickname.find('.account-item__modify--error').hide();
      this.$nickname.find('.sl-input').removeClass('error');
    }

    validateFields() {
      const formValue = this.getFormValue();
      const {
        userInfo
      } = this;

      if (!userInfo.email && !userInfo.phone && !formValue.firstName && !formValue.lastName) {
        this.showError();
        return Promise.reject();
      }

      return Promise.resolve();
    }

    onCancel() {
      reportDropModifyInfomation();
    }

    onEdit() {
      reportClickEditButton();
      this.hideError();
      this.$nickname.find('.account-item__firstname input').val(this.nickname.firstName);
      this.$nickname.find('.account-item__lastname input').val(this.nickname.lastName);
    }

    async onSave() {
      reportEditNickname();
      await this.validateFields();
      const formValue = this.getFormValue();
      await updateAccountInfo({
        firstName: formValue.firstName || null,
        lastName: formValue.lastName || null
      });
      this.nickname = formValue;
      const nickname = this.getNickname();
      reportSaveInfomation(nickname);
      this.refresh(nickname);
    }

    refresh(nickname) {
      this.$nickname.find('input').removeClass('error').val('');
      this.$nickname.find('.account-item__value').text(nickname || t('customer.account.not_set'));
      this.$nickname.find('.account-item__modify--error').hide();
    }

  }

  _exports.default = Account;
  return _exports;
}();