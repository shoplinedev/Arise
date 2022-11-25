window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/sub-modal.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/sub-modal.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const { updateSubscriptions } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { countriesDialCodeMap, countriesCodeMap } = window['SLM']['theme-shared/biz-com/customer/constant/countries.js'];
  const { DEFAULT_PHONE_ISO2, DEFAULT_PHONE_CODE2, SUBSCRIBE_STATUS_MAP } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const customer_subscription = SL_State.get('customer_subscription');

  class SubModal {
    constructor({
      id,
      type,
      onSuccess,
      onUnsub,
      onFieldValueChange
    }) {
      this.id = id;
      this.type = type;
      this.onSuccess = onSuccess;
      this.onUnsub = onUnsub;
      this.onFieldValueChange = onFieldValueChange;
      this.$input = $(`#${id}-form .sl-input__inpEle`);
      this.$unSubBtn = $(`#MpModal${id} .customer-center-sub-modal__cancel`);
      this.modal = null;
      this.form = null;
      this.userInfo = SL_State.get('customer.userInfoDTO');
      this.subscribeAccount = customer_subscription && customer_subscription[this.type].subscribeAccount;
      this.state = customer_subscription && customer_subscription[this.type].state;
      this.init();
    }

    init() {
      this.initModal();
      this.initForm();
      this.initEvent();
    }

    initEvent() {
      this.$unSubBtn.on('click', () => {
        this.onUnsub && this.onUnsub(this.type);
      });
    }

    initModal() {
      const modal = new Modal({
        modalId: this.id
      });
      modal.init();
      this.modal = modal;

      if (this.state !== SUBSCRIBE_STATUS_MAP.SUBSCRIBE) {
        this.$unSubBtn.hide();
      }
    }

    onUpdateSub(data) {
      return updateSubscriptions({
        state: 1,
        subscribeAccount: data[this.type],
        subscribeAccountType: this.type,
        subscribeChannel: 'center',
        referralCode: window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value
      }).then(() => {
        this.state = 1;
        this.subscribeAccount = data[this.type];
        this.onSuccess && this.onSuccess();
      });
    }

    initForm() {
      const fields = getFormFields([this.type]);
      this.form = new Form({
        id: `${this.id}-form`,
        fields,
        onSubmit: data => this.onUpdateSub(data)
      });
      this.form.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        this.onFieldValueChange && this.onFieldValueChange(changedValue);
      });
    }

    clearFormFields() {
      this.setFormFields('');
    }

    setFormFields(value) {
      const {
        formInstance
      } = this.form;
      formInstance.setDomValue(formInstance.el, this.type, value);
      formInstance.setLocalsValue(this.type, value);
      formInstance.removeErrList([this.type]);
    }

    show() {
      this.modal.show();
      const userInfo = SL_State.get('customer.userInfoDTO');
      let defaultValue = userInfo[this.type] || '';
      let iso2 = '';
      let code = '';

      if (this.type === 'phone') {
        if (!defaultValue) {
          defaultValue = this.userInfo.phone || '';
        }

        if (countriesDialCodeMap[defaultValue.slice(2, 5)]) {
          code = defaultValue.slice(2, 5);
          iso2 = countriesDialCodeMap[code];
          defaultValue = defaultValue.slice(5);
        } else if (countriesDialCodeMap[defaultValue.slice(2, 4)]) {
          code = defaultValue.slice(2, 4);
          iso2 = countriesDialCodeMap[code];
          defaultValue = defaultValue.slice(4);
        } else if (countriesDialCodeMap[defaultValue.slice(2, 3)]) {
          code = defaultValue.slice(2, 3);
          iso2 = countriesDialCodeMap[code];
          defaultValue = defaultValue.slice(3);
        }

        const phoneInstance = this.form.formItemInstances.phone;

        if (code) {
          code = `+${code}`;
        } else {
          const iso2Original = window && window.SL_State && window.SL_State.get('customer_address.countryCode');
          iso2 = iso2Original && iso2Original.toLowerCase() || DEFAULT_PHONE_ISO2;
          code = countriesCodeMap[iso2];

          if (!code) {
            iso2 = DEFAULT_PHONE_ISO2;
            code = DEFAULT_PHONE_CODE2;
          }
        }

        phoneInstance.changeValue(`${iso2}${code}`, defaultValue);
        setTimeout(() => {
          phoneInstance.changeCodeValue(`${iso2}`);
        }, 0);
      } else if (this.type === 'email') {
        if (!defaultValue) {
          defaultValue = this.userInfo.email || '';
        }
      }

      this.setFormFields(defaultValue);
      const SLInput = $(`#${this.id}-form .sl-input`);

      if (userInfo[this.type]) {
        SLInput.addClass('subscribe__form__item--disabled');
        SLInput.find(`[name="${this.type}"]`).attr('disabled', true);
        SLInput.find('.form-item__codeSelect').attr('disabled', true);
      } else {
        SLInput.removeClass('subscribe__form__item--disabled');
        SLInput.find(`[name="${this.type}"]`).attr('disabled', false);
        SLInput.find('.form-item__codeSelect').attr('disabled', false);
      }

      if (this.state !== SUBSCRIBE_STATUS_MAP.SUBSCRIBE) {
        this.$unSubBtn.hide();
      } else {
        this.$unSubBtn.show();
      }
    }

    hide() {
      this.modal.hide();
    }

  }

  _exports.default = SubModal;
  return _exports;
}();