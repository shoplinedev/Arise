window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/messenger.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/messenger.js'] || function () {
  const _exports = {};
  const fb = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/index.js'].default;
  const formatLang = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/formatLang.js'].default;
  const { getSubscriptAuths, updateSubscriptions } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { reportClickSubscribeMessage } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const MinRetryInterval = 1000;
  const MaxRetryCount = 5;
  const MESSENGER_PLUGIN = `
  <div
    class="fb-send-to-messenger"
    cta_text="SUBSCRIBE"
    color="white"
    enforce_login="true"
    messenger_app_id=""
    page_id=""
    data-ref=""
  ></div>
`;

  class Messenger {
    constructor({
      onSuccess
    }) {
      this.fbProps = {};
      this.onSuccess = onSuccess;
      this.handleResponse = null;
      this.$loading = $('#customer-center-messenger-loading');
      this.$messenger = $('#customer-center-messenger-btn');
      this.init();
    }

    init() {
      getSubscriptAuths({
        platform: 'messenger'
      }).then(({
        data
      }) => {
        this.fbProps = {
          appId: data.appId,
          userRef: data.userRef,
          pageId: data.platformChannelId
        };
        this.renderHtml();

        this.handleResponse = e => {
          const {
            ref,
            event
          } = e;

          if (ref === this.fbProps.userRef && event === 'opt_in') {
            this.retryGetSubscriptAuth();
          }

          if (ref === this.fbProps.userRef && event === 'clicked') {
            reportClickSubscribeMessage();
          }
        };

        this.initFb();
      });
    }

    initFb() {
      this.fb = fb.init({
        appId: this.fbProps.appId,
        lang: formatLang()
      }).then(() => {
        window.FB.Event.subscribe('send_to_messenger', this.handleResponse);
      });
    }

    renderHtml() {
      const $messengerPlugin = $(MESSENGER_PLUGIN);
      $messengerPlugin.attr('messenger_app_id', this.fbProps.appId);
      $messengerPlugin.attr('page_id', this.fbProps.pageId);
      $messengerPlugin.attr('data-ref', this.fbProps.userRef);
      this.$messenger.html($messengerPlugin);
    }

    rebuildPlugin() {
      window.FB.Event.unsubscribe('send_to_messenger', this.handleResponse);
      this.renderHtml();
      this.initFb();
    }

    retryGetSubscriptAuth(count = 1) {
      this.$messenger.hide();
      this.$loading.show();
      getSubscriptAuths({
        platform: 'messenger'
      }).then(({
        success,
        data
      }) => {
        if (success && data.hasAuthorized) {
          updateSubscriptions({
            state: 1,
            subscribeAccountType: 'messenger',
            subscribeChannel: 'center',
            referralCode: window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value
          }).then(() => {
            this.$messenger.show();
            this.$loading.hide();
            this.onSuccess && this.onSuccess();
          }).catch(() => {
            this.$messenger.show();
            this.$loading.hide();
            this.rebuildPlugin();
          });
        } else if (count <= MaxRetryCount) {
          setTimeout(() => {
            this.retryGetSubscriptAuth(++count);
          }, count * MinRetryInterval);
        } else {
          this.$messenger.show();
          this.$loading.hide();
          this.rebuildPlugin();
        }
      });
    }

  }

  _exports.default = Messenger;
  return _exports;
}();