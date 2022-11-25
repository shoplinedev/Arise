window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/login-modal/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/login-modal/index.js'] || function () {
  const _exports = {};
  const Login = window['SLM']['theme-shared/biz-com/customer/biz/sign-in/index.js'].default;
  const Register = window['SLM']['theme-shared/biz-com/customer/biz/sign-up/index.js'].default;
  const { reportPageView } = window['SLM']['theme-shared/biz-com/customer/reports/login-modal.js'];
  const MODAL_ID = 'login-modal';
  const LOGIN_ID = `${MODAL_ID}-signIn`;
  const REGISTER_ID = `${MODAL_ID}-signUp`;
  const TYPE_TO_CLASS = {
    login: '.login-container',
    register: '.register-container'
  };
  const ACTIVE_CLASS = 'active';
  const defaultOptions = {
    modalId: MODAL_ID
  };

  class LoginModal {
    constructor(options = {}) {
      this.options = { ...defaultOptions,
        ...options
      };
      this.modalId = this.options.modalId;
      this.modalInstance = null;
      this.loginInstance = null;
      this.registerInstance = null;

      if (!window.__SL_$__) {
        window.__SL_$__ = window.jQuery;
      }

      reportPageView();
      return this.init();
    }

    async init() {
      try {
        this.loginInstance = new Login({
          id: `${this.modalId}-signIn` || LOGIN_ID,
          isModal: true,
          success: () => this.refresh()
        });
        this.registerInstance = new Register({
          id: `${this.modalId}-signUp` || REGISTER_ID,
          isModal: true,
          success: () => this.refresh()
        });
        this.bindEvents();
      } catch (e) {
        console.error(e);
      }

      return this;
    }

    bindEvents() {
      const isMobile = window && window.SL_State && window.SL_State.get('request.is_mobile');

      if (!isMobile) {
        return;
      }

      const $modal = $('#login-modal-container');
      $modal.on('click', '.login-modal__tab-item', e => {
        const $target = $(e.currentTarget);
        const type = $target.data('type');
        $target.addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
        Object.keys(TYPE_TO_CLASS).forEach(key => {
          const $container = $modal.find(TYPE_TO_CLASS[key]);
          key === type ? $container.show() : $container.hide();
        });
      });
    }

    refresh() {
      window.location.reload();
    }

  }

  _exports.default = () => new LoginModal({});

  return _exports;
}();