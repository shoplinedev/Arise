window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/eventName.js'] = window.SLM['theme-shared/utils/dataReport/eventName.js'] || function () {
  const _exports = {};
  const EventNames = {
    AddToCart: 'DataReport::AddToCart',
    InitiateCheckout: 'DataReport::InitiateCheckout',
    AddPaymentInfo: 'DataReport::CompleteOrder',
    Purchase: 'DataReport::Purchase'
  };
  _exports.EventNames = EventNames;
  return _exports;
}();