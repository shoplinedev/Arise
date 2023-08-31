window.SLM = window.SLM || {};

window.SLM['stage/password/index.js'] = window.SLM['stage/password/index.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const checkEmail = window['SLM']['commons/utils/checkEmail.js'].default;
  const debounce = window['SLM']['commons/utils/debounce.js'].default;

  class Password {
    constructor(container) {
      this.toast = new Toast({
        duration: 2000,
        fullscreen: true
      });
      this.bindSubscription(container);
      this.toggleShow(container);
      this.storeInfo = {};
      this.initPassword(container);
    }

    async getStoreInfo() {
      const response = await request.get('/site/store/front/pwd');
      const result = response.data;
      return result;
    }

    async initPassword(container) {
      try {
        this.storeInfo = (await this.getStoreInfo()) || {};
      } catch (error) {
        return false;
      }

      this.fillStoreDescription(container);
      this.initEvent(container);
    }

    fillStoreDescription(container) {
      if (this.storeInfo.visitorTips) {
        container.find('.js_password_description').text(this.storeInfo.visitorTips);
      }
    }

    initEvent(container) {
      const inputDom = container.find('.js_password_input');
      inputDom.on('keydown', e => {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          run.call(this);
        }
      });
      container.on('click', '.js_password_btn', run.bind(this));

      function run() {
        const password = inputDom.val();
        const isMatched = password.toLowerCase() === this.storeInfo.password.toLowerCase();

        if (isMatched) {
          document.cookie = `l_spwd=1; path=/`;
          window.location.href = this.getUrlParam('redirect_url') || '/';
        } else {
          this.toast.open(t('general.password.password_is_error'), 2000);
          inputDom.val('');
        }
      }
    }

    getUrlParam(name) {
      const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
      if (!window.location.search) return null;
      if (!window.location.search.substr(1)) return null;
      const r = window.location.search.substr(1).match(reg);
      return r ? decodeURIComponent(r[2]) : null;
    }

    toggleShow(container) {
      const password_link = container.find('.js_password_link');
      if (!password_link[0]) return 0;
      container.on('click', '.js_password_link', () => {
        container.find('.js_password_subscription').hide();
        container.find('.js_password').show();
      });
      container.on('click', '.js_password_back', () => {
        container.find('.js_password_subscription').show();
        container.find('.js_password').hide();
      });
    }

    bindSubscription(container) {
      const post = debounce(300, val => {
        const params = {
          subscribeAccountType: 'email',
          subscribeAccount: val
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
        }).catch(() => {
          this.toast.open(t('general.footer.subscribe_format_error'), 2000);
        });
      });
      const inputDom = container.find('.js_password_email_input');
      inputDom.on('keydown', e => {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.stopPropagation();
          run.call(this);
        }
      });
      container.on('click', '.js_password_email', run.bind(this));

      function run() {
        const value = inputDom.val();

        if (checkEmail(value) !== true) {
          this.toast.open(t('general.footer.subscribe_format_error'), 2000);
          return;
        }

        post(value);
      }
    }

  }

  Password.type = 'password';
  registrySectionConstructor('password', Password);
  return _exports;
}();