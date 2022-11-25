window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/form/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/form/index.js'] || function () {
  const _exports = {};
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const { ValidateTrigger } = window['SLM']['theme-shared/utils/form/form.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const installDefaultFormItem = window['SLM']['theme-shared/biz-com/customer/commons/form/install.js'].default;
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const BUTTON_LOADING_CLASS = 'btn--loading';

  class CustomerForm {
    constructor({
      id,
      fields,
      formValue = {},
      onSubmit,
      onValidate
    }) {
      this.formId = id;
      this.fields = fields;
      this.formInstance = null;
      this.onSubmit = onSubmit;
      this.onValidate = onValidate;
      this.formItemInstances = {};
      this.isLoading = false;
      this.defaultFormValue = formValue;
      this.init();
      return this;
    }

    init() {
      this.formInstance = this.initForm();
      this.setFormFields(this.fields);
      this.bindEvents();
    }

    initForm() {
      const formInstance = Form.takeForm(this.formId);
      formInstance.init({
        validateTriggerAfterValidationFailed: ValidateTrigger.MANUAL
      });
      return formInstance;
    }

    setFormFields(fields) {
      this.formItemInstances = installDefaultFormItem(this.formInstance, fields, this.defaultFormValue);
    }

    bindEvents() {
      this.bindFormSubmit();
    }

    setLoading(isLoading) {
      const $btn = $(`#${this.formId} .submit-button`);

      if (isLoading) {
        this.isLoading = true;
        $btn.addClass(BUTTON_LOADING_CLASS);
      } else {
        this.isLoading = false;
        $btn.removeClass(BUTTON_LOADING_CLASS);
      }
    }

    bindFormSubmit() {
      $(`#${this.formId} .submit-button`).click(async e => {
        if (this.isLoading) {
          return;
        }

        if (!(window && window.navigator && window.navigator.onLine)) {
          Toast.init({
            content: t('customer.general.network_error_message')
          });
          return;
        }

        e.preventDefault();

        try {
          await this.validateForm();
          const data = this.getFormValue();
          this.setLoading(true);
          await (this.onSubmit && this.onSubmit(data));
        } catch (err) {
          if (err.rescode) {
            const lastField = this.fields[this.fields.length - 1];

            if (lastField.name && getUdbErrorMessage(err)) {
              this.formInstance.setErrMsgIntoDom([{
                name: lastField.name,
                messages: [getUdbErrorMessage(err)]
              }]);
            }
          }
        }

        this.setLoading(false);
      });
      this.bindInputActive();
    }

    getValue() {
      const fieldsValue = this.formInstance.getFieldsValue();
      return Object.keys(fieldsValue).reduce((values, key) => {
        const itemValue = this.formItemInstances[key] && this.formItemInstances[key].getValue();

        if (itemValue) {
          return { ...values,
            ...itemValue
          };
        }

        return { ...values,
          [key]: fieldsValue[key]
        };
      }, {});
    }

    getFormValue() {
      const fieldsValue = this.formInstance.getFieldsValue();
      return Object.keys(fieldsValue).reduce((values, key) => {
        const itemValue = this.formItemInstances[key] && this.formItemInstances[key].getFormValue();

        if (itemValue) {
          return { ...values,
            ...itemValue
          };
        }

        return { ...values,
          [key]: fieldsValue[key]
        };
      }, {});
    }

    async validateForm() {
      const validateFields = [this.formInstance.validateFields()];

      if (typeof this.onValidate === 'function') {
        validateFields.push(this.onValidate());
      }

      const res = await Promise.all(validateFields);
      const failRes = res.filter(item => !item.pass);

      if (failRes.length > 0) {
        throw new Error({
          errFields: failRes.reduce((sum, item) => sum.concat(item.errFields), []),
          pass: false
        });
      }

      return true;
    }

    bindInputActive() {
      $(this.formInstance.el).find('.placeholder').one('transitionend', e => {
        $(e.target).addClass('active');
        setTimeout(() => $(e.target).removeClass('active'), 100);
      });
    }

    destroy() {
      this.formInstance = null;
      Object.keys(this.formItemInstances).forEach(instance => {
        this.formItemInstances[instance] && this.formItemInstances[instance].reset && this.formItemInstances[instance].reset();
      });
      this.formItemInstances = {};
      this.formInstance && this.formInstance.resetErrStatus();
      this.formInstance && this.formInstance.destroy();
    }

  }

  _exports.default = CustomerForm;
  return _exports;
}();