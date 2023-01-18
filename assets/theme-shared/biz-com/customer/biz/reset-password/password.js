window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/reset-password/password.js'] = window.SLM['theme-shared/biz-com/customer/biz/reset-password/password.js'] || function () {
  const _exports = {};
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const BaseCustomer = window['SLM']['theme-shared/biz-com/customer/commons/customer/base.js'].default;
  const { USER_CENTER } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { changeAccountPassword } = window['SLM']['theme-shared/biz-com/customer/service/reset.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class PasswordSet extends BaseCustomer {
    constructor({
      id,
      form
    }) {
      super({
        id,
        formType: 'passwordNew'
      });
      this.form = form;
      this.passwordForm = null;
      this.init();
    }

    init() {
      const fieldTypes = ['password', 'repeatPassword'];
      this.passwordForm = new Form({
        id: this.formId,
        fields: getFormFields(fieldTypes),
        onSubmit: data => this.onSubmit(data)
      });
    }

    onSubmit(data) {
      const params = this.form.UDBParams;

      try {
        changeAccountPassword(super.formatRequestBody({ ...params,
          pwd: data.password
        }));
        window.location.href = redirectTo(`${USER_CENTER}${window.location.search}`);
      } catch (e) {
        super.setError(e);
      }
    }

  }

  _exports.default = PasswordSet;
  return _exports;
}();