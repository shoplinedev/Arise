window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/payment.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/payment.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const get = window['lodash']['get'];
  const { billingInfoSerializer } = window['@sl/address-serializer'];
  const pageData = SL_State.get('customer.order') || {};
  const Selector = '#contentPayValueAddress';

  const renderBillingAddress = payBillInfo => {
    const billingInfo = payBillInfo || get(pageData, 'payInfo.payBillInfo', {}) || {};
    const billingAddressResult = billingInfoSerializer(billingInfo, {
      returnString: true
    }) || '-';
    const el = document.querySelector(Selector);
    el.textContent = billingAddressResult;
  };

  _exports.renderBillingAddress = renderBillingAddress;
  return _exports;
}();