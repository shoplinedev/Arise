window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/unsub/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/unsub/index.js'] || function () {
  const _exports = {};
  const { escape } = window['html-escaper'];
  const { getSubscriptions, postUnSubscribe } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { HOME, SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/toast.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class Unsub {
    constructor({
      id
    }) {
      this.id = id;
      this.reasonRadioSelector = `#${this.id} [name="unsub-reason"]`;
      this.submitSelector = `#${this.id} .submit-button`;
      this.textareaWrapSelector = `#${this.id} .unsubscribe-textarea`;
      this.textareaSelector = `#${this.id} .unsubscribe-textarea textarea`;
      this.validate = true;
      this.reason = null;
      this.reasonDetail = null;
      this.init();
    }

    init() {
      const isLogin = SL_State.get('request.is_login');

      if (!isLogin) {
        window.location.href = redirectTo(SIGN_IN);
      }

      getSubscriptions({
        subscribeAccountTypes: 'email',
        subscribeChannel: 'center'
      }).then(({
        data
      }) => {
        if (!(data && data.email && data.email.state)) {
          window.location.href = redirectTo(HOME);
        }
      });
      this.initTextarea();
      this.initEvent();
    }

    initTextarea() {
      const $textareaSelector = $(this.textareaSelector);
      $textareaSelector.on('input', event => {
        $textareaSelector.css('height', `${34 + 2}px`);
        const height = $textareaSelector[0].scrollHeight;
        $textareaSelector.css('height', `${height + 2}px`);

        if (event.target.value.length > 300) {
          $(this.textareaWrapSelector).addClass('has-error');
          this.validate = false;
        } else {
          $(this.textareaWrapSelector).removeClass('has-error');
          this.validate = true;
        }

        this.reasonDetail = event.target.value;
      });
    }

    initEvent() {
      $(this.reasonRadioSelector).on('change', event => {
        this.reason = event.target.value;
        $(this.submitSelector).removeAttr('disabled');

        if (this.reason === '6') {
          $(this.textareaWrapSelector).show();
        } else {
          $(this.textareaWrapSelector).hide();
        }
      });
      $(this.submitSelector).on('click', () => {
        if (!this.reason) {
          return false;
        }

        if (this.reason === '6' && !this.validate) {
          return false;
        }

        $(this.submitSelector).attr('disabled', 'disabled').addClass('btn--loading');
        postUnSubscribe({
          subscribeAccountType: 'email',
          unSubscribeType: this.reason,
          context: this.reason === '6' && this.reasonDetail ? escape(this.reasonDetail) : undefined
        }).then(() => {
          Toast.init({
            className: 'unsub-toast-container',
            content: t('customer.subscription.unsubscribe_success'),
            duration: 3000
          });
          $(this.submitSelector).removeClass('btn--loading');
          setTimeout(() => {
            window.location.href = redirectTo(HOME);
          }, 3000);
        }).catch(() => {
          $(this.submitSelector).removeAttr('disabled').removeClass('btn--loading');
        });
      });
    }

  }

  _exports.default = Unsub;
  return _exports;
}();