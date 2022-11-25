window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/templates/getCodeSelect.js'] = window.SLM['theme-shared/biz-com/customer/templates/getCodeSelect.js'] || function () {
  const _exports = {};
  const { countries, countriesCodeMap } = window['SLM']['theme-shared/biz-com/customer/constant/countries.js'];
  const CODE_SELECT_CLASS = 'form-item__codeSelect';

  _exports.default = defaultIso2 => {
    const optionStr = countries.map(({
      name,
      iso2,
      dialCode
    }) => `
      <option value="${iso2}" label="${name}(+${dialCode})" ${iso2 === defaultIso2 ? 'selected="selected"' : ''}>${name}(+${dialCode})</option>
    `).join('');
    return `
    <div class="code-select__container">
      <div class="code-select__value-wrapper">
        <span class="code-select__value">${countriesCodeMap[defaultIso2]}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L5 5L8.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <select class="form-item__select ${CODE_SELECT_CLASS}" autocomplete="off">
        ${optionStr}
      </select>
    </div>
  `;
  };

  return _exports;
}();