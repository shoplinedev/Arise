window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/line.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/line.js'] || function () {
  const _exports = {};
  const { getSubscriptAuths, updateLineAuth, updateSubscriptions } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { reportClickSubscribeLine } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const BOT_PROMPT = 'aggressive';
  const SCOPE_LIST = 'profile+openid';
  const PROMPT = 'consent';
  const FINISH = 'finish';
  const REPLACE_SCOPE = '{REDIRECTURL}';

  class Line {
    constructor({
      btn,
      onSuccess
    }) {
      this.$btn = btn;
      this.onSuccess = onSuccess;
      this.lineProps = {};
      this.init();
    }

    init() {
      this.initLine();
    }

    initEvent() {
      this.$btn.on('click', () => {
        this.lineProps.state = `${Date.now()}`;
        const {
          channelId,
          state
        } = this.lineProps;
        const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&state=${state}&bot_prompt=${BOT_PROMPT}&scope=${SCOPE_LIST}&prompt=${PROMPT}&redirect_uri=${REPLACE_SCOPE}`;
        reportClickSubscribeLine();
        this.launchTransit(url);
      });
      window.addEventListener('message', event => {
        this.listenMessage(event);
      }, false);
    }

    initLine() {
      getSubscriptAuths({
        platform: 'line'
      }).then(({
        data
      }) => {
        this.lineProps = {
          channelId: data.platformChannelId,
          redirectUrl: `${window.location.origin}/transit_page?ref=${FINISH}`
        };
        this.initEvent();
      });
    }

    launchTransit(targetUrl) {
      const {
        redirectUrl
      } = this.lineProps;
      const url = targetUrl.replace(REPLACE_SCOPE, window.encodeURIComponent(redirectUrl));
      window.open(url, '', `width=${600},height=${600}`);
    }

    listenMessage({
      data,
      origin
    }) {
      if (origin !== window.location.origin) {
        return false;
      }

      const {
        ref,
        state,
        code
      } = data;

      if (!code) {
        return false;
      }

      if (state === this.lineProps.state && ref === FINISH) {
        updateLineAuth({
          code,
          callbackUrl: this.lineProps.redirectUrl
        }).then(({
          success
        }) => {
          if (success) {
            return getSubscriptAuths({
              platform: 'line'
            });
          }

          return Promise.reject();
        }).then(({
          success,
          data
        }) => {
          if (success && data.hasAuthorized) {
            updateSubscriptions({
              state: 1,
              subscribeAccountType: 'line',
              subscribeChannel: 'center',
              referralCode: window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value
            }).then(() => {
              this.onSuccess && this.onSuccess();
            });
          }
        });
      }
    }

  }

  _exports.default = Line;
  return _exports;
}();