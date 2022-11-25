window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/form-item/password.js'] = window.SLM['theme-shared/biz-com/customer/commons/form-item/password.js'] || function () {
  const _exports = {};
  const getEyeOpenIcon = window['SLM']['theme-shared/biz-com/customer/templates/getEyeOpenIcon.js'].default;
  const getEyeCloseIcon = window['SLM']['theme-shared/biz-com/customer/templates/getEyeCloseIcon.js'].default;
  const { encrypt } = window['SLM']['theme-shared/biz-com/customer/helpers/encrypt.js'];

  class Password {
    constructor({
      formId,
      value,
      name
    }) {
      this.formId = formId;
      this.name = name;
      this.$item = $(`#${formId} [sl-form-item-name="${name}"] .sl-input`);
      this.$input = this.$item.find('.sl-input__inpEle');
      const originValue = value || '';
      this.value = encrypt(originValue);
      this.inputValue = originValue;
      this.init();
    }

    init() {
      this.bindEvents();
    }

    getValue() {
      return {
        [this.name]: this.inputValue || this.$input.val() || ''
      };
    }

    getFormValue() {
      const value = this.inputValue || this.$input.val() || '';
      this.value = value && encrypt(value);
      return {
        [this.name]: this.value
      };
    }

    bindEvents() {
      this.$input.on('input', e => {
        const {
          value
        } = e.target;
        this.inputValue = value;
      });
      this.$item.find('.sl-input__suffix').click(e => {
        const $this = $(e.currentTarget);
        const $input = $this.siblings('.sl-input__area').find('.sl-input__inpEle');
        const type = $input.attr('type');

        if (type === 'password') {
          $input.attr('type', 'text');
          $this.html(getEyeOpenIcon());
        } else {
          $input.attr('type', 'password');
          $this.html(getEyeCloseIcon());
        }
      });
    }

  }

  _exports.default = Password;
  return _exports;
}();