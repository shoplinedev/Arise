window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];
  const tinycolor = window['tinycolor2']['default'];
  const helper = window['SLM']['theme-shared/components/hbs/shared/utils/helper.js'].default;

  function javascriptTemplate(str, reg, data) {
    let result = '';

    if (typeof str !== 'string') {
      return result;
    }

    result = str;
    result = str.replace(reg, (o, p) => {
      const val = get(data, p);
      return val === undefined || val === null ? o : val;
    });
    return result;
  }

  _exports.javascriptTemplate = javascriptTemplate;

  function rgba(hex, opacity = 1) {
    const color = tinycolor(hex);

    if (color.isValid()) {
      color.setAlpha(opacity);
      return color.toRgbString();
    }

    return '';
  }

  _exports.rgba = rgba;

  function replace(str, a, b) {
    if (!str) return '';
    return str.split(a).join(b);
  }

  _exports.replace = replace;

  function getSaleBackgroundHtml(mobileBgImg, pcBgImg) {
    let str = '';

    if (mobileBgImg) {
      str = `<div class="sales__card-background d-block d-md-none" style="background-image:url(${mobileBgImg});"></div>`;
    } else if (pcBgImg) {
      str = `<div class="sales__card-background d-block d-md-none" style="background-image:url(${pcBgImg});"></div>`;
    }

    if (pcBgImg) {
      str += `<div class="sales__card-background d-none d-md-block" style="background-image:url(${pcBgImg});"></div>`;
    }

    return str;
  }

  _exports.getSaleBackgroundHtml = getSaleBackgroundHtml;

  function getDrawerHtml(id, title, str) {
    return `<div class="sales-common-drawer__wrapper" style="display:none;" id="${id}">
  <div class="sales-common-drawer__mask sales-common-drawer__mask-hook">
  </div>
  <div class="sales-common-drawer__content">
    ${title ? `<div class="sales-common-drawer__header d-flex">
      <div class="sales-common-drawer__title">${title}</div>
      <div class="sales-common-drawer__close sales-common-drawer-hook">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.2 4.80005L4.80005 19.2" stroke="#1E1E1E" stroke-width="1.5" />
          <path d="M4.80005 4.79995L19.2001 19.2" stroke="#1E1E1E" stroke-width="1.5" />
        </svg>
      </div>
    </div>` : ''}
    <div class="sales-common-drawer__body" style="${!title ? 'margin-top: 0' : ''}">
      ${str}
    </div>
  </div>
</div>`;
  }

  _exports.getDrawerHtml = getDrawerHtml;

  function isMobile() {
    return helper && helper.getPlatform() === 'mobile';
  }

  _exports.isMobile = isMobile;
  return _exports;
}();