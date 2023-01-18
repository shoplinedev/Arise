window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/subscription/index.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Card = window['SLM']['theme-shared/biz-com/customer/commons/card/index.js'].default;
  const Messenger = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/messenger.js'].default;
  const SubModal = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/sub-modal.js'].default;
  const UnSubModal = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/unsub-modal.js'].default;
  const ConfirmSubModal = window['SLM']['theme-shared/biz-com/customer/biz/account/script/subscription/confirm-sub-modal.js'].default;
  const { SUBSCRIBE_STATUS_MAP } = window['SLM']['theme-shared/biz-com/customer/constant/const.js'];
  const { UNSUB } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { reportClickSubscribeEmailButton, reportInputSubscribeNewEmail, reportSaveSubscribeEmail, reportUnsubscribeEmail, reportClickSubscribePhoneButton, reportClickSubscribePhoneEditIcon, reportInputSubscribeNewPhone, reportSaveSubscribePhone, reportUnsubscribePhone, reportUnsubscribeLine, reportUnsubscribeMessage, reportUnsubscribeConfirm, reportUnsubscribeCancel } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const customer_subscription = SL_State.get('customer_subscription');

  class Subscription extends Card {
    constructor({
      id,
      editable
    }) {
      super({
        id,
        editable
      });
      this.type = null;
      this.unsubModal = null;
      this.confirmSubModal = null;
      this.subEmailModal = null;
      this.subPhoneModal = null;
      this.$subEmailItem = $(`#${this.id} .subscription-item[data-type="email"]`);
      this.$subEmailBtn = this.$subEmailItem.find('.subscription-item__btn');
      this.$unsubEmailBtn = this.$subEmailItem.find('.subscription-item__edit');
      this.$confirmSubEmailBtn = this.$subEmailItem.find('.subscription-item__confirming');
      this.$subPhoneItem = $(`#${this.id} .subscription-item[data-type="phone"]`);
      this.$subPhoneBtn = this.$subPhoneItem.find('.subscription-item__btn');
      this.$unsubPhoneBtn = this.$subPhoneItem.find('.subscription-item__edit');
      this.$subMessengerItem = $(`#${this.id} .subscription-item[data-type="messenger"]`);
      this.$unsubMessengerBtn = this.$subMessengerItem.find('.subscription-item__edit');
      this.$subLinetem = $(`#${this.id} .subscription-item[data-type="line"]`);
      this.$subLineBtn = this.$subLinetem.find('.subscription-item__btn');
      this.$unsubLineBtn = this.$subLinetem.find('.subscription-item__edit');
    }

    init() {
      this.initModal();
      this.initMessenger();
    }

    initMessenger() {
      if (!customer_subscription.messenger) {
        return false;
      }

      this.messenger = new Messenger({
        onSuccess: () => {
          this.handleSubSuccess('fb');
          this.$subMessengerItem.attr('data-subscribed', true);
        }
      });
    }

    initModal() {
      this.unsubModal = new UnSubModal({
        id: 'customer-center-unsubscribe-modal',
        onSuccess: () => {
          this.unsubModal.hide();

          if (this.type === 'email') {
            this.$subEmailItem.removeAttr('data-subscribed');
            this.$subEmailItem.attr('data-sub-state', SUBSCRIBE_STATUS_MAP.CANCEL);
            this.subEmailModal.state = 0;
            this.subEmailModal.subscribeAccount = '';
          } else if (this.type === 'phone') {
            this.$subPhoneItem.removeAttr('data-subscribed');
            this.subPhoneModal.state = 0;
            this.subPhoneModal.subscribeAccount = '';
          } else if (this.type === 'line') {
            this.$subLinetem.removeAttr('data-subscribed');
          } else if (this.type === 'messenger') {
            this.$subMessengerItem.removeAttr('data-subscribed');
            this.messenger.rebuildPlugin();
          }

          const typeMap = {
            email: 'Email',
            phone: 'Phone',
            line: 'Line',
            messenger: 'Message'
          };

          if (typeMap[this.type]) {
            reportUnsubscribeConfirm(typeMap[this.type]);
          }
        },
        onCancel: () => {
          reportUnsubscribeCancel();
        }
      });
      this.$unsubLineBtn.on('click', () => {
        this.handleUnsub('line');
      });
      this.$unsubMessengerBtn.on('click', () => {
        this.handleUnsub('messenger');
      });
      this.subEmailModal = new SubModal({
        id: 'customer-center-subscribe-email-modal',
        type: 'email',
        onFieldValueChange: reportInputSubscribeNewEmail,
        onSuccess: () => {
          this.handleSubSuccess('email');
          this.$subEmailItem.attr('data-subscribed', true);
          this.$subEmailItem.attr('data-sub-state', SUBSCRIBE_STATUS_MAP.SUBSCRIBE);
          this.subEmailModal.hide();
          window.location.reload();
        },
        onUnsub: () => {
          window.location.href = redirectTo(UNSUB);
        }
      });
      this.subPhoneModal = new SubModal({
        id: 'customer-center-subscribe-phone-modal',
        type: 'phone',
        onFieldValueChange: reportInputSubscribeNewPhone,
        onSuccess: () => {
          this.handleSubSuccess('phone');
          this.$subPhoneItem.attr('data-subscribed', true);
          this.subPhoneModal.hide();
          window.location.reload();
        },
        onUnsub: type => {
          this.subPhoneModal.hide();
          this.handleUnsub(type);
        }
      });
      this.confirmSubModal = new ConfirmSubModal({
        id: 'customer-center-confirmSubEmail-modal',
        onSuccess: () => {
          this.$subEmailItem.attr('data-subscribed', true);
          this.$subEmailItem.attr('data-sub-state', SUBSCRIBE_STATUS_MAP.SUBSCRIBE);
        }
      });
      this.$subEmailBtn.on('click', () => {
        reportClickSubscribeEmailButton();
        this.subEmailModal.show();
        this.type = 'email';
      });
      this.$unsubEmailBtn.on('click', () => {
        window.location.href = redirectTo(UNSUB);
      });
      this.$subPhoneBtn.on('click', e => {
        const {
          type
        } = e.target;

        if (type === 'button') {
          reportClickSubscribePhoneButton();
        } else {
          reportClickSubscribePhoneEditIcon();
        }

        this.subPhoneModal.show();
        this.type = 'phone';
      });
      this.$unsubPhoneBtn.on('click', () => {
        this.handleUnsub('phone');
      });
      this.$confirmSubEmailBtn.on('click', () => {
        this.confirmSubModal.show();
      });
    }

    handleUnsub(type) {
      const typeToReportEvent = {
        email: reportUnsubscribeEmail,
        phone: reportUnsubscribePhone,
        line: reportUnsubscribeLine,
        messenger: reportUnsubscribeMessage
      };
      typeToReportEvent && typeToReportEvent[type] && typeToReportEvent[type]();
      this.type = type;
      this.unsubModal.setType(this.type);
      this.unsubModal.show();
    }

    handleSubSuccess(type) {
      const typeToReportEvent = {
        phone: reportSaveSubscribePhone,
        email: reportSaveSubscribeEmail
      };
      typeToReportEvent && typeToReportEvent[type] && typeToReportEvent[type]();
    }

  }

  _exports.default = Subscription;
  return _exports;
}();