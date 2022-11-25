window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/form-item/username.js'] = window.SLM['theme-shared/biz-com/customer/commons/form-item/username.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { countriesCodeMap } = window['SLM']['theme-shared/biz-com/customer/constant/countries.js'];
  const { CODE_PHONE_PATTERN } = window['SLM']['theme-shared/biz-com/customer/constant/pattern.js'];
  const { DEFAULT_PHONE_CODE, DEFAULT_PHONE_ISO2 } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const formatPhone = window['SLM']['theme-shared/biz-com/customer/helpers/formatPhone.js'].default;
  const { usernameValidator } = window['SLM']['theme-shared/biz-com/customer/helpers/pattern.js'];
  const getCodeSelectTemplate = window['SLM']['theme-shared/biz-com/customer/templates/getCodeSelect.js'].default;
  const CODE_SELECT_CONTAINER_CLASS = 'code-select__container';
  const CODE_SELECT_CLASS = 'form-item__codeSelect';

  class Username {
    constructor({
      form,
      formId,
      value,
      iso2
    }) {
      this.form = form;
      this.formId = formId;
      this.$username = $(`#${formId} [sl-form-item-name="username"] .sl-input`);
      this.$input = this.$username.find('.sl-input__inpEle');
      const originValue = value || '';

      if (iso2) {
        this.iso2 = iso2;

        if (/^\d+$/.test(value)) {
          this.createCodeSelect();
        }
      } else {
        const countryCodeOriginal = window && window.SL_State && window.SL_State.get('customer_address.countryCode');
        const countryCode = countryCodeOriginal && countryCodeOriginal.toLowerCase();
        this.iso2 = iso2 || countryCode;
      }

      const code = countriesCodeMap[this.iso2];

      if (code) {
        this.code = `${this.iso2}${code}`;
      } else {
        this.iso2 = DEFAULT_PHONE_ISO2;
        this.code = DEFAULT_PHONE_CODE;
      }

      this.value = this.changeValue(this.code, originValue);
      this.inputValue = originValue;
      this.init();
    }

    init() {
      this.bindEvents();
    }

    install() {
      return {
        rules: [{
          validator: value => {
            const val = this.changeValue(this.code, value);
            return usernameValidator(val).catch(err => Promise.reject(t(err)));
          }
        }]
      };
    }

    changeValue(code, inputValue) {
      const value = inputValue && inputValue.trim();
      const val = /^\d+$/.test(value) ? `${code}-${value}` : value;
      this.code = code;
      this.value = val;
      this.inputValue = value;
      return val;
    }

    changeCodeValue(iso2) {
      const $codeValue = this.$username.find(`.code-select__value`);
      const $select = this.$username.find(`.${CODE_SELECT_CLASS}`);
      $codeValue.text(countriesCodeMap[iso2]);

      if ($select.val() !== iso2) {
        $select.val(iso2);
      }
    }

    getValue() {
      const $select = this.$username.find(`.${CODE_SELECT_CLASS}`);
      return {
        username: this.inputValue || this.$input && this.$input.val() || '',
        code: this.code,
        iso2: this.iso2 || $select.val() || ''
      };
    }

    getFormValue() {
      const value = this.value || this.changeValue(this.code, this.$input && this.$input.val());

      if (CODE_PHONE_PATTERN.test(value)) {
        const val = formatPhone(value);
        return {
          username: val.phone,
          _code: val._code
        };
      }

      return {
        username: value
      };
    }

    createCodeSelect() {
      const selectElementStr = getCodeSelectTemplate(this.iso2);
      this.$username.append(selectElementStr);
      const $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
      const $select = $container.find(`.${CODE_SELECT_CLASS}`);
      $select && $select.val(this.iso2);
      this.bindSelectCodeEvent($select);
      return $container;
    }

    bindEvents() {
      let $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
      const $select = $container.find(`.${CODE_SELECT_CLASS}`);
      let selectElementHasMounted = $select && $select.length > 0;
      this.$input.on('input', e => {
        const val = this.changeValue(this.code, e.target.value);
        const phoneInputMode = !(!CODE_PHONE_PATTERN.test(val || '') || !RegExp.$3);

        if (phoneInputMode) {
          if (!selectElementHasMounted) {
            $container = this.createCodeSelect();
            selectElementHasMounted = true;
            return;
          }

          $container && $container.show();
        }

        if (!phoneInputMode && selectElementHasMounted) {
          $container && $container.hide();
        }
      });
    }

    bindSelectCodeEvent($select) {
      $select.on('change', () => {
        const iso2 = $select.val();
        const val = countriesCodeMap[iso2];
        this.iso2 = iso2;
        this.code = `${iso2}${val}`;
        this.changeCodeValue(iso2);
        this.changeValue(this.code, this.inputValue);

        if (this.inputValue) {
          this.form.validateFields('username');
          this.form.setLocalsValue('username', this.$input.val());
        }
      });
      $select.on('input', e => e.stopPropagation());
    }

  }

  _exports.default = Username;
  return _exports;
}();