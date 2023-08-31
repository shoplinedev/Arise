window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/messenger-checkbox.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/messenger-checkbox.js'] || function () {
  const _exports = {};
  const fb = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/index.js'].default;
  const formatLang = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/facebookSDK/formatLang.js'].default;
  const { getBdApiInfo } = window['SLM']['theme-shared/biz-com/customer/service/account.js'];
  const { colorExtract } = window['SLM']['theme-shared/utils/colorExtract.js'];
  const MESSENGER_PLUGIN = `
  <div class="fb-messenger-checkbox"
    style="margin-left: -12px;margin-right: -12px;margin-top: 0 !important;"
    size="medium"
    page_id=""
    messenger_app_id=""
    ref=""
    user_ref=""
    skin=""
  </div>
`;

  class Messenger {
    constructor() {
      this.fbProps = {};
      this.uid = '';
      this.checkboxState = 'unchecked';
      this.handleResponse = null;
      this.$messenger = $('[data-ssr-contactinfo-after]');
      this.skin = 'light';
      this.hasSubmit = false;
      this.$messengerPlugin = null;
      this.init();
    }

    init() {
      const {
        co_background_color
      } = window.SL_State.get('theme.settings') || {};
      this.skin = colorExtract(co_background_color, 'contrast') === 'rgb(0, 0, 0)' ? 'light' : 'dark';
      window.Shopline.event.on('Checkout::CheckoutDetailUpdate', async data => {
        const buyerId = data && data.buyerInfo && data.buyerInfo.buyerId;
        const configPage = data && data.basicInfo && data.basicInfo.configPage;
        const step = data && data.basicInfo && data.basicInfo.step;

        if (buyerId && buyerId !== this.uid && (configPage === 1 || configPage === 3 && step === 'contact_information')) {
          this.uid = buyerId;
          getBdApiInfo(this.uid).then(({
            data
          }) => {
            if (this.$messengerPlugin) {
              this.$messengerPlugin.remove();
              this.$messengerPlugin = null;
              window.FB.Event.unsubscribe('messenger_checkbox', this.handleResponse);
            }

            if (data.bdApiStatus !== 1 || data.subscribeStatus === 1) {
              return false;
            }

            this.fbProps = {
              appId: data.appId,
              userRef: `${this.uid}-${new Date().getTime()}`,
              pageId: data.pageId
            };
            this.renderHtml();

            this.handleResponse = e => {
              if (e.event === 'rendered') {} else if (e.event === 'checkbox') {
                this.checkboxState = e.state;
              } else if (e.event === 'not_you') {} else if (e.event === 'hidden') {}
            };

            this.initFb();
          });
        }

        const action = data && data.extraDetailInfo && data.extraDetailInfo.action;

        if ((action === 'create_order_check' || action === 'next_step') && !this.hasSubmit && this.checkboxState === 'checked') {
          window.FB.CheckboxPlugin.confirm({
            app_id: this.fbProps.appId,
            ref: this.fbProps.userRef,
            user_ref: this.fbProps.userRef,
            page_id: this.fbProps.pageId
          });
          this.hasSubmit = true;
        }
      });
    }

    initFb() {
      this.fb = fb.init({
        appId: this.fbProps.appId,
        xfbml: true,
        lang: formatLang()
      }).then(() => {
        window.FB.Event.subscribe('messenger_checkbox', this.handleResponse);
      });
    }

    renderHtml() {
      const $messengerPlugin = $(MESSENGER_PLUGIN);
      $messengerPlugin.attr('messenger_app_id', this.fbProps.appId);
      $messengerPlugin.attr('page_id', this.fbProps.pageId);
      $messengerPlugin.attr('ref', this.fbProps.userRef);
      $messengerPlugin.attr('user_ref', this.fbProps.userRef);
      $messengerPlugin.attr('skin', this.skin);
      this.$messenger.append($messengerPlugin);
      this.$messengerPlugin = $messengerPlugin;
    }

  }

  _exports.default = new Messenger();
  return _exports;
}();