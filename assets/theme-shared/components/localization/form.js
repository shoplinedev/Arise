window.SLM = window.SLM || {};

window.SLM['theme-shared/components/localization/form.js'] = window.SLM['theme-shared/components/localization/form.js'] || function () {
  const _exports = {};

  class LocalizationForm {
    constructor() {
      this.formId = 'sl-localization-form';
      this.formElement = document.getElementById(this.formId);
      this.elements = {
        localeInput: this.formElement.querySelector('input[name="locale_code"]'),
        countryInput: this.formElement.querySelector('input[name="country_code"]')
      };
    }

    triggerLocaleChange(languageCode) {
      this.elements.localeInput.value = languageCode;
      if (this.formElement) this.formElement.submit();
    }

    triggerCurrencyChange(currencyCode) {
      this.elements.countryInput.value = currencyCode;
      if (this.formElement) this.formElement.submit();
    }

  }

  _exports.default = LocalizationForm;
  return _exports;
}();