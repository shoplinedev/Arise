window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/orderTracking/form/index.js'] = window.SLM['theme-shared/biz-com/orderTracking/form/index.js'] || function () {
  const _exports = {};
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const { ValidateTrigger } = window['SLM']['theme-shared/utils/form/form.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const installDefaultFormItem = window['SLM']['theme-shared/biz-com/orderTracking/form/install.js'].default;
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/orderTracking/utils/index.js'];
  const BUTTON_LOADING_CLASS = 'btn--loading';

  class PageOrderTrackingForm {
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
      this.defaultFormValue = formValue;
      this.init();
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

    bindFormSubmit() {
      let isLoading = false;
      const $submitBtn = $(`#${this.formId} .submit-button`);
      $submitBtn.off('click');
      $submitBtn.on('click', async e => {
        if (isLoading) {
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
          isLoading = true;
          $(e.target).addClass(BUTTON_LOADING_CLASS);
          await (this.onSubmit && this.onSubmit(data));
        } catch (err) {
          const lastField = this.fields[this.fields.length - 1];

          if (lastField.name && this.formInstance.setErrMsgIntoDom) {
            this.formInstance.setErrMsgIntoDom([{
              name: lastField.name,
              messages: [getUdbErrorMessage(err)]
            }]);
          }
        }

        isLoading = false;
        $(e.target).removeClass(BUTTON_LOADING_CLASS);
      });
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
      return fieldsValue;
    }

    async validateForm() {
      const validateFields = [];
      this.fields.forEach(item => {
        validateFields.push(this.formInstance.validateFields(item.name));
      });

      if (typeof this.onValidate === 'function') {
        validateFields.push(this.onValidate());
      }

      const res = await Promise.all(validateFields);
      const failRes = res.filter(item => !item.pass);

      if (failRes.length > 0) {
        const lastField = failRes[failRes.length - 1].errFields[0];

        if (lastField && lastField.name) {
          throw new Error(lastField.messages);
        }
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
      Object.keys(this.formItemInstances).forEach(instance => {
        this.formItemInstances[instance] && this.formItemInstances[instance].reset && this.formItemInstances[instance].reset();
      });
      this.formItemInstances = {};
      this.formInstance && this.formInstance.resetErrStatus();
      this.formInstance && this.formInstance.destroy();
      this.formInstance = null;
    }

  }

  _exports.default = PageOrderTrackingForm;
  return _exports;
}();