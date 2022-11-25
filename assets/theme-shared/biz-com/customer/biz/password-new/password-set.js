window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/password-new/password-set.js'] = window.SLM['theme-shared/biz-com/customer/biz/password-new/password-set.js'] || function () {
  const _exports = {};
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const getFormFields = window['SLM']['theme-shared/biz-com/customer/helpers/getFormFields.js'].default;
  const Form = window['SLM']['theme-shared/biz-com/customer/commons/form/index.js'].default;
  const Customer = window['SLM']['theme-shared/biz-com/customer/commons/customer/index.js'].default;

  class PasswordSet extends Customer {
    constructor({
      id,
      onSubmit
    }) {
      super({
        id,
        formType: 'passwordNewReset'
      });
      this.passwordForm = null;
      this.onSubmit = onSubmit;
    }

    init() {
      this.passwordForm = new Form({
        id: this.formId,
        fields: this.getFieldConfigs(),
        onSubmit: data => this.onSubmit(data).then(res => {
          return Promise.resolve(res);
        }).catch(error => {
          this.passwordForm && this.passwordForm.formInstance.setErrMsgIntoDom([{
            name: 'repeatPassword',
            messages: [getUdbErrorMessage(error)]
          }]);
          return Promise.reject(error);
        })
      });
    }

    getFieldConfigs() {
      const fieldTypes = ['password', 'repeatPassword'];
      return getFormFields(fieldTypes);
    }

  }

  _exports.default = PasswordSet;
  return _exports;
}();