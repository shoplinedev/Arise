window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/customer/index.js'] = window.SLM['theme-shared/biz-com/customer/commons/customer/index.js'] || function () {
  const _exports = {};
  const initConfig = window['SLM']['theme-shared/biz-com/customer/commons/customer/init.js'].default;
  const getUdbInfo = window['SLM']['theme-shared/biz-com/customer/commons/customer/getUdbInfo.js'].default;
  const BaseCustomer = window['SLM']['theme-shared/biz-com/customer/commons/customer/base.js'].default;
  const reports = window['SLM']['theme-shared/biz-com/customer/reports/login-register.js'].default;

  class Customer extends BaseCustomer {
    constructor({
      id,
      formType,
      isModal,
      success
    }) {
      super({
        id,
        formType
      });
      this.isModal = isModal;
      this.success = success;
      this.$$reports = reports(isModal);
      this.UDBParams = {};
      this.configs = initConfig();
      setTimeout(() => this.initCustomer(), 0);
    }

    initCustomer() {
      this.beforeCreate && this.beforeCreate();
      this.getCustomerConfig().then(res => {
        this.UDBParams = res;
        this.init && this.init();
      });
    }

    async getCustomerConfig() {
      const {
        mode,
        token
      } = this.query;
      let queryParams = { ...this.configs,
        token
      };

      if (mode) {
        queryParams = { ...queryParams,
          mode
        };
      }

      return getUdbInfo({
        params: queryParams,
        formType: this.formType,
        FBPixelEventID: this.pvEventId
      });
    }

  }

  _exports.default = Customer;
  return _exports;
}();