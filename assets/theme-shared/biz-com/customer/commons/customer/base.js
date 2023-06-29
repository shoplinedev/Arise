window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/customer/base.js'] = window.SLM['theme-shared/biz-com/customer/commons/customer/base.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { getLanguage } = window['SLM']['theme-shared/biz-com/customer/utils/helper.js'];
  const { getUrlAllQuery } = window['SLM']['theme-shared/biz-com/customer/utils/url.js'];
  const { getUdbResponseLanguageErrorKey } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const { userHdReport } = window['SLM']['theme-shared/biz-com/customer/reports/user-report.js'];

  class BaseCustomer {
    constructor({
      id,
      formType
    }) {
      this.formId = id;
      this.formType = formType;
      this.query = getUrlAllQuery();
      this.eid = getEventID();
      this.pvEventId = window.SL_State.get('serverEventId') || getEventID();
      userHdReport();
    }

    report(eventid, params) {
      window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
    }

    setError(res) {
      const value = getUdbResponseLanguageErrorKey(res && res.rescode) || res && res.resmsg;

      if (value) {
        $(`#${this.formId} .customer__error`).text(t(value)).show();
      }
    }

    clearError() {
      $(`#${this.formId} .customer__error`).text('').hide();
    }

    formatRequestBody(data) {
      return { ...(data || {}),
        lang: getLanguage()
      };
    }

    formatterMask(params) {
      return `${params._method && params._method.includes('sms') ? '+' : ''}${params._mask}`;
    }

    updateToken(params, newParams) {
      Object.keys(newParams).forEach(k => {
        const v = newParams[k];

        if (v) {
          params[k] = v;
        }
      });
    }

  }

  _exports.default = BaseCustomer;
  return _exports;
}();