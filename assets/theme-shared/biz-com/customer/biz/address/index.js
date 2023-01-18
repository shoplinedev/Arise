window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/address/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/address/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { createAddressComponent } = window['SLM']['theme-shared/biz-com/customer/biz/address/address-component/index.js'];
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const { modifyAddress } = window['SLM']['theme-shared/biz-com/customer/service/address.js'];
  const { redirectPage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { USER_CENTER, SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { formatterCodePhone } = window['SLM']['theme-shared/biz-com/customer/helpers/formatPhone.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { reportCheckDefaultBox, reportCancelAddress, reportSaveAddress } = window['SLM']['theme-shared/biz-com/customer/reports/address.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;

  class CustomerAddress {
    constructor({
      id
    }) {
      this.form = null;
      this.id = id;
      this.init();
      this.toast = new Toast();
    }

    init() {
      const isLogin = SL_State.get('request.is_login');

      if (!isLogin) {
        window.location.href = redirectTo(SIGN_IN);
      }

      this.initForm();
      const {
        id
      } = this;
      this.address = createAddressComponent({
        rootId: `${id}-component`,
        autofillId: `${id}-autofill-renderer`
      });
      this.bindEvents();
    }

    initForm() {
      this.form = new Form({
        id: this.id,
        fields: [],
        formValue: {},
        onSubmit: data => this.onSubmit(data),
        onValidate: () => this.address.validate()
      });
    }

    bindEvents() {
      this.form && this.form.formInstance && this.form.formInstance.on('valuesChange', ({
        changedValue
      }) => {
        if (typeof changedValue.def !== 'undefined') {
          this.onChangeDefCheckBox(changedValue.def);
        }
      });
      $(`#${this.id} .address-form__btn--cancel`).click(e => {
        this.onCancel(e);
      });
    }

    onChangeDefCheckBox(status) {
      if (status) {
        reportCheckDefaultBox();
      }
    }

    onCancel() {
      reportCancelAddress();
    }

    async onValidate() {
      const addressRes = await this.address.validate();

      if (!addressRes) {
        throw new Error('Invalid address form fields');
      }
    }

    async onSubmit() {
      const addressData = await this.address.getAddressInfo();
      const def = $(`#${this.id} .sl-checkbox__input[type="checkbox"]`).is(':checked');
      const formValue = { ...addressData,
        addressSeq: SL_State.get('request.uri.params.addressSeq'),
        mobilePhone: formatterCodePhone(addressData.mobilePhone),
        def
      };

      try {
        await modifyAddress(formValue);
        reportSaveAddress();
        redirectPage(USER_CENTER);
      } catch (e) {
        if (e.code === 'CCU0401') {
          this.toast.open(t('customer.address.max_address_tip'));
        }
      }
    }

  }

  _exports.default = CustomerAddress;
  return _exports;
}();