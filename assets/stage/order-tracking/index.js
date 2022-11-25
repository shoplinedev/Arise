window.SLM = window.SLM || {};

window.SLM['stage/order-tracking/index.js'] = window.SLM['stage/order-tracking/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const OrderTrackingForm = window['SLM']['theme-shared/biz-com/orderTracking/index.js'].default;
  registrySectionConstructor('order-tracking', OrderTrackingForm);
  return _exports;
}();