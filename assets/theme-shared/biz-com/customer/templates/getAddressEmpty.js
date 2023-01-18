window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/templates/getAddressEmpty.js'] = window.SLM['theme-shared/biz-com/customer/templates/getAddressEmpty.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  _exports.default = () => {
    return `
    <div class="address--empty">
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
        <path d="M52.411 13.5902C61.4725 22.6532 61.4725 37.3472 52.411 46.4102L36.001 62.8172L19.591 46.4072C10.5295 37.3457 10.5295 22.6517 19.591 13.5902C28.654 4.52722 43.348 4.52722 52.411 13.5902V13.5902Z" stroke="currentColor" stroke-width="4.5"/>
        <path d="M36.001 36.75C39.7289 36.75 42.751 33.7279 42.751 30C42.751 26.2721 39.7289 23.25 36.001 23.25C32.2731 23.25 29.251 26.2721 29.251 30C29.251 33.7279 32.2731 36.75 36.001 36.75Z" stroke="currentColor" stroke-width="4.5"/>
        </g>
      </svg>
    
      <p>${t('customer.address.no_adress_data')}</p>
      <a href="${redirectTo('/user/address/new')}" class="address__link">
        <button class="sl-btn btn btn-primary">
        
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.6665" y="7.33301" width="10.6667" height="1.33333" fill="currentColor"/>
          <rect x="7.3335" y="13.333" width="10.6667" height="1.33333" transform="rotate(-90 7.3335 13.333)" fill="currentColor"/>
          </svg>

          ${t('customer.address.add_address')}
        </button>
      </a>
    </div>
  `;
  };

  return _exports;
}();