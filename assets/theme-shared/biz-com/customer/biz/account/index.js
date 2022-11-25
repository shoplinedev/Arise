window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/index.js'] || function () {
  const _exports = {};
  const Account = window['SLM']['theme-shared/biz-com/customer/biz/account/script/account/index.js'].default;
  const Personal = window['SLM']['theme-shared/biz-com/customer/biz/account/script/personal.js'].default;
  const Address = window['SLM']['theme-shared/biz-com/customer/biz/account/script/address.js'].default;
  const Subscription = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/index.js'].default;
  const { revokeDeleteAccount } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const BUTTON_LOADING_CLASS = 'btn--loading';

  class Information {
    constructor() {
      this.init();
      this.personal = null;
      this.account = null;
      this.address = null;
    }

    init() {
      const $center = $('#user-center');
      $center.find('.revoke-button').click(async e => {
        const $btn = $(e.target);
        $btn.addClass(BUTTON_LOADING_CLASS);

        try {
          await revokeDeleteAccount();
          $center.find('.user-center__notify').hide();
          window.location.reload();
        } catch (e) {
          console.error(e);
        }

        $btn.removeClass(BUTTON_LOADING_CLASS);
      });
      this.account = new Account({
        id: 'customer-center-account',
        editable: true
      });
      this.personal = new Personal({
        id: 'customer-center-personal',
        editable: true
      });
      this.address = new Address({
        id: 'customer-center-address',
        editable: false
      });
      this.subscription = new Subscription({
        id: 'customer-center-subscription',
        editable: false
      });
    }

  }

  _exports.default = Information;
  return _exports;
}();