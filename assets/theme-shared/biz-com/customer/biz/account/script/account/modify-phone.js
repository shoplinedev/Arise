window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/account/modify-phone.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/account/modify-phone.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { createAccountBindFlow } = window['SLM']['theme-shared/biz-com/customer/biz/account/script/account/account-bind.js'];
  const { parsePhoneString } = window['SLM']['theme-shared/biz-com/customer/helpers/formatPhone.js'];
  const { countriesCodeMap } = window['SLM']['theme-shared/biz-com/customer/constant/countries.js'];

  class ModifyPhone {
    constructor({
      id,
      onSuccess
    }) {
      this.phoneString = SL_State.get('customer.userInfoDTO').phone;
      const {
        phone,
        iso2,
        code
      } = parsePhoneString(this.phoneString, SL_State.get('customer.userInfoDTO').countryCode);
      this.code = code;
      this.phone = phone;
      this.iso2 = iso2;
      this.modifyPhoneModal = null;
      this.id = id;
      this.onSuccess = onSuccess;
      this.toast = new Toast();
      const {
        init,
        onModify
      } = createAccountBindFlow('phone');
      this.onInitModifyPhone = init;
      this.onModifyPhoneRequest = onModify;
      this.init();
    }

    init() {
      this.initModal();
      this.initForm();
    }

    initModal() {
      this.modifyPhoneModal = new Modal({
        modalId: this.id
      });
    }

    initForm() {
      const fields = getFormFields(['phone']);
      this.form = new Form({
        id: `${this.id}-form`,
        fields,
        formValue: {
          phone: this.phone,
          iso2: this.iso2
        },
        onSubmit: data => this.onSubmit(data)
      });
      this.form.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        this.onFieldValueChange && this.onFieldValueChange(changedValue);
      });
    }

    onSubmit(data) {
      const {
        phone: phoneString,
        _code: iso
      } = data || {};
      return this.onModifyPhoneRequest(phoneString).then(() => {
        const userInfoDTO = SL_State.get('customer.userInfoDTO');
        SL_State.set('customer.userInfoDTO', { ...userInfoDTO,
          phone: phoneString
        });
        this.phoneString = phoneString;
        const {
          phone,
          code,
          iso2
        } = parsePhoneString(phoneString, countriesCodeMap[iso].replace('+', ''));
        this.code = code;
        this.phone = phone;
        this.iso2 = iso2;
        this.modifyPhoneModal.hide();
        this.onSuccess(phoneString);
      });
    }

    show() {
      const {
        formInstance,
        formItemInstances
      } = this.form;
      this.iso2 && formItemInstances.phone.changeCodeValue(this.iso2);
      this.iso2 && this.code && formItemInstances.phone.changeValue(`${this.iso2}+${this.code}`, this.phone);
      formInstance.setDomValue(formInstance.el, 'phone', this.phone);
      formInstance.setLocalsValue('phone', this.phone);
      formInstance.resetErrStatus();
      this.modifyPhoneModal.show();
    }

    hide() {
      this.modifyPhoneModal.hide();
    }

  }

  _exports.default = ModifyPhone;
  return _exports;
}();