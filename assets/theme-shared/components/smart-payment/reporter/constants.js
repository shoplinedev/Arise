window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/reporter/constants.js'] = window.SLM['theme-shared/components/smart-payment/reporter/constants.js'] || function () {
  const _exports = {};
  const EventNameType = {
    InitiateCheckout: 'InitiateCheckout',
    AddCustomerInfo: 'AddCustomerInfo',
    AddShippingInfo: 'AddShippingInfo',
    AddPaymentInfo: 'AddPaymentInfo'
  };
  _exports.EventNameType = EventNameType;
  const ActionType = {
    Other: -999
  };
  _exports.ActionType = ActionType;
  const ComponentType = {
    Other: -999
  };
  _exports.ComponentType = ComponentType;
  const ModuleType = {
    FastCheckout: 158
  };
  _exports.ModuleType = ModuleType;
  const PageType = {
    Other: -999
  };
  _exports.PageType = PageType;
  return _exports;
}();