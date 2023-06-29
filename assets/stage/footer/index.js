window.SLM = window.SLM || {};

window.SLM['stage/footer/index.js'] = window.SLM['stage/footer/index.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const utils = window['SLM']['commons/utils/index.js'].default;
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const checkEmail = window['SLM']['commons/utils/checkEmail.js'].default;
  const debounce = window['SLM']['commons/utils/debounce.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const {
    listenPlatform
  } = utils.helper;

  class Footer extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'satge:footer'
      };
      this.$setNamespace(this.config.namespace);
      this.init();
      listenPlatform(() => {
        this.reset();
      });
    }

    init() {
      this.bindEvent();
      this.initMobileToolkit();
    }

    initMobileToolkit() {
      const $item = $('#stage-footer .j-locale-currency-flag');
      const $root = $('#stage-footer');
      const $localeBtn = $root.find('.j-locale-drawer-btn');
      const $currencyBtn = $root.find('.j-currency-drawer-btn');
      const $countryBtn = $root.find('.j-country-drawer-btn');
      const currency_selector = $item.data('currency');
      const locale_selector = $item.data('locale');
      const country_selector = $item.data('country');
      const show_currency_symbol = $item.data('currency-symbol');

      if (locale_selector) {
        $localeBtn.addClass('show');
      }

      if (country_selector) {
        $countryBtn.addClass('show');
      }

      if (currency_selector) {
        $currencyBtn.addClass('show');

        if (show_currency_symbol) {
          $currencyBtn.find('.currency-symbol').addClass('show');
        }
      }
    }

    reset() {
      this.offEvent();
      this.init();
    }

    offEvent() {
      this.$off('click');
    }

    bindEvent() {
      this.bindSubscription();
    }

    bindSubscription() {
      const post = debounce(300, val => {
        const params = {
          subscribeAccountType: 'email',
          subscribeAccount: val,
          consentCollectedFrom: 'PageFooter'
        };
        const SLMemberPlugin = window.SLMemberPlugin || {};
        const memberReferralCode = SLMemberPlugin.memberReferralCode || {};
        const referralCode = memberReferralCode.value || null;

        if (referralCode) {
          params.referralCode = referralCode;
        }

        request.post('/user/front/users/footersub', params).then(res => {
          if (res.success) {
            Toast.init({
              content: t('general.footer.subscribe_success')
            });
          } else {
            Toast.init({
              content: t('general.footer.subscribe_format_error')
            });
          }
        }).catch(err => {
          Toast.init({
            content: t('general.footer.subscribe_format_error')
          });
        });
      });
      this.$on('click', '.footer__newsletter-btn', e => {
        const $input = $(e.currentTarget).parent().find('input');
        const value = $input.val();

        if (checkEmail(value) !== true) {
          Toast.init({
            content: t('general.footer.subscribe_format_error')
          });
          return;
        }

        post(value);
      });
    }

  }

  const instance = new Footer();
  $(document).on('shopline:section:load', () => {
    instance.reset();
  });
  return _exports;
}();