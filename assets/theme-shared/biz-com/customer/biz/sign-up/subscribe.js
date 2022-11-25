window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-up/subscribe.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-up/subscribe.js'] || function () {
  const _exports = {};
  const { setSubscriptionStateNoLogin } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];

  class Subscribe {
    constructor({
      formId,
      $subscribe,
      $$reports
    }) {
      this.formId = formId;
      this.$subscribe = $subscribe;
      this.$$reports = $$reports;
      this.showSubscription = true;
      this.checkedSubscriptionEmail = true;
    }

    toggleSubscriptionCheckbox(status) {
      if (this.showSubscription === status) {
        return;
      }

      this.showSubscription = status;
      status ? this.$subscribe.show() : this.$subscribe.hide();
    }

    setSubscriptionEmail(status) {
      if (status) {
        this.$$reports && this.$$reports.reportCheckSubscriptionBox && this.$$reports.reportCheckSubscriptionBox();
      }

      this.checkedSubscriptionEmail = status;
    }

    onSubscribeEmail(account) {
      if (!this.showSubscription || !this.checkedSubscriptionEmail) {
        return;
      }

      setSubscriptionStateNoLogin({
        subscribeChannel: 'register',
        subscribeAccountType: 'email',
        subscribeAccount: account,
        state: 1
      });
    }

  }

  _exports.default = Subscribe;
  return _exports;
}();