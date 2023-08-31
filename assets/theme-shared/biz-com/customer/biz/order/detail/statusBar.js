window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/statusBar.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/statusBar.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { formateTimeWithGMT } = window['SLM']['theme-shared/biz-com/customer/biz/order/utils.js'];
  const pageData = SL_State.get('customer.order') || {};
  const {
    basicInfo
  } = pageData;
  const CANCELLED2 = 400;

  const renderStatusBar = function renderStatusBar() {
    const containerEl = document.querySelector('.detail-status-bar');

    if (!containerEl) {
      return;
    }

    const numberEl = document.createElement('div');
    numberEl.className = 'status-bar-number';
    numberEl.textContent = t('order.order_status.sequence', {
      id: basicInfo && basicInfo.appOrderSeq || basicInfo && basicInfo.appMainOrderSeq
    });
    const dateEl = document.createElement('div');
    dateEl.className = 'status-bar-date';
    dateEl.textContent = `${t('order.order_details.time')} ${formateTimeWithGMT(basicInfo && basicInfo.createTime)}`;
    containerEl.appendChild(numberEl);
    containerEl.appendChild(dateEl);

    if (basicInfo.bizOrderStatus === CANCELLED2) {
      const statusText = t('order.order_status.canceled') || '';
      const statusEl = document.createElement('div');
      statusEl.className = 'status-bar-status';
      statusEl.textContent = statusText;
      containerEl.appendChild(statusEl);
    }
  };

  _exports.default = renderStatusBar;
  return _exports;
}();