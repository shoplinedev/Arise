window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/templates/getModal.js'] = window.SLM['theme-shared/biz-com/customer/templates/getModal.js'] || function () {
  const _exports = {};

  _exports.default = (content, title) => {
    return `
    <div class="sign-up__modal-header">
      <div class="sign-up__modal-title">${title}</div>
    </div>
    <div class="sign-up__modal-body">
      <div class="sign-up__modal-content">
        ${content}
      </div>
    </div>
  `;
  };

  return _exports;
}();