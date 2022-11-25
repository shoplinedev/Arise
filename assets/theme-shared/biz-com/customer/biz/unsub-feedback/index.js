window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/unsub-feedback/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/unsub-feedback/index.js'] || function () {
  const _exports = {};
  const { reportV2 } = window['SLM']['theme-shared/biz-com/customer/reports/index.js'];

  class UnsubFeedback {
    constructor() {
      reportV2({
        page: 122,
        module: -999,
        component: -999,
        action_type: 101,
        event_id: 1022
      });
    }

  }

  _exports.default = UnsubFeedback;
  return _exports;
}();