window.SLM = window.SLM || {};

window.SLM['stage/sign-up-and-save/index.js'] = window.SLM['stage/sign-up-and-save/index.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const checkEmail = window['SLM']['commons/utils/checkEmail.js'].default;
  const debounce = window['SLM']['commons/utils/debounce.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;

  class Newsletter {
    constructor(container) {
      this.config = {
        namespace: 'satge:sign-up-and-save'
      };
      this.toast = new Toast({
        duration: 2000,
        fullscreen: true
      });
      this.bindSubscription(container);
    }

    bindSubscription(container) {
      const post = debounce(300, val => {
        const params = {
          subscribeAccountType: 'email',
          subscribeAccount: val,
          consentCollectedFrom: 'SignUpSection'
        };
        const referralCode = window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value;

        if (referralCode) {
          params.referralCode = referralCode;
        }

        request.post('/user/front/users/footersub', params).then(res => {
          if (res.success) {
            this.toast.open(t('general.footer.subscribe_success'), 2000);
          } else {
            this.toast.open(t('general.footer.subscribe_format_error'), 2000);
          }
        }).catch(err => {
          this.toast.open(t('general.footer.subscribe_format_error'), 2000);
        });
      });
      container.on('click', '.newsletter__btn', () => {
        const $input = container.find('.newsletter__input');
        const value = $input.val();

        if (checkEmail(value) !== true) {
          this.toast.open(t('general.footer.subscribe_format_error'), 2000);
          return;
        }

        post(value);
      });
    }

  }

  Newsletter.type = 'sign-up-and-save';
  registrySectionConstructor(Newsletter.type, Newsletter);
  return _exports;
}();