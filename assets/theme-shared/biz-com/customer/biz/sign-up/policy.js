window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/sign-up/policy.js'] = window.SLM['theme-shared/biz-com/customer/biz/sign-up/policy.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { ModalWithHtml } = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'];
  const { intersectionBy } = window['lodash'];
  const { getPolicyPageContent } = window['SLM']['theme-shared/biz-com/customer/service/index.js'];
  const getModal = window['SLM']['theme-shared/biz-com/customer/templates/getModal.js'].default;
  const privacyPolicyPath = '/policies/privacy-policy';
  const termsOfService = '/policies/terms-of-service';
  const userPolicyPagesKey = [{
    customizePath: privacyPolicyPath
  }, {
    customizePath: termsOfService
  }];
  const policyPagesNameMap = {
    [privacyPolicyPath]: 'customer.register.privacy_policy',
    [termsOfService]: 'customer.register.terms_of_service'
  };

  class Policy {
    constructor({
      formId,
      $policy,
      form,
      $$reports
    }) {
      this.form = form;
      this.formId = formId;
      this.$policy = $policy;
      this.modal = null;
      this.$$reports = $$reports;
      this.showSubscription = false;
      this.checkedSubscriptionEmail = false;
      this.policyPagesContent = {};
      const policyList = window && window.SL_State && window.SL_State.get('policyList');
      this.userPolicyPages = intersectionBy(policyList, userPolicyPagesKey, 'customizePath');

      if (this.userPolicyPages.length > 0) {
        this.init();
      }
    }

    init() {
      this.modal = new ModalWithHtml({
        modalId: `${this.formId}-modal`,
        containerClassName: 'register-modal__container',
        bodyClassName: 'register-modal__body'
      });
      this.modal.init();
      this.getPolicyListContent();
      this.bindCustomerPolicy();
    }

    getPolicyListContent() {
      const {
        userPolicyPages
      } = this;

      if (!userPolicyPages || userPolicyPages.length < 1) {
        return;
      }

      const requests = userPolicyPages.map(({
        id
      }) => getPolicyPageContent({
        pageType: 4,
        id
      }));
      Promise.all(requests).then(res => {
        this.policyPagesContent = res.reduce((sum, item) => {
          sum[item && item.data && item.data.id] = item && item.data && item.data.config && item.data.config.text || '';
          return sum;
        }, {});
      });
    }

    onCheckAgreement(value) {
      if (value) {
        this.$$reports && this.$$reports.reportCheckAgreement && this.$$reports.reportCheckAgreement();
      }
    }

    clickPolicyReport(path) {
      if (path === privacyPolicyPath) {
        this.$$reports && this.$$reports.reportClickPrivacyPolicy && this.$$reports.reportClickPrivacyPolicy();
      } else {
        this.$$reports && this.$$reports.reportClickTermsService && this.$$reports.reportClickTermsService();
      }
    }

    bindCustomerPolicy() {
      this.$policy.on('click', '.sign-up__link', e => {
        e.stopPropagation();
        e.preventDefault();
        const path = $(e.currentTarget).data('path');
        this.clickPolicyReport(path);
        const policy = this.userPolicyPages.find(item => item.customizePath === path);
        this.modal.setContent(getModal(this.policyPagesContent[policy.id] || '', t(policyPagesNameMap[policy.customizePath])));
        this.modal.show();
      });
    }

    checkAgreePolicy({
      policy
    }) {
      if (this.userPolicyPages.length > 0 && !policy) {
        return false;
      }

      return true;
    }

  }

  _exports.default = Policy;
  return _exports;
}();