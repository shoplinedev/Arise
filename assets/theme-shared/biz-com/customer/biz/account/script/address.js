window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/account/script/address.js'] = window.SLM['theme-shared/biz-com/customer/biz/account/script/address.js'] || function () {
  const _exports = {};
  const Modal = window['SLM']['theme-shared/components/hbs/shared/components/modal/index.js'].default;
  const Card = window['SLM']['theme-shared/biz-com/customer/commons/card/index.js'].default;
  const { deleteAddress } = window['SLM']['theme-shared/biz-com/customer/service/address.js'];
  const getAddressEmpty = window['SLM']['theme-shared/biz-com/customer/templates/getAddressEmpty.js'].default;
  const { reportClickRemoveAddressIcon, reportClickNewAddress, reportEditAddress, reportConfirmRemoveAddress, reportCancelRemoveAddress } = window['SLM']['theme-shared/biz-com/customer/reports/account.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];
  const MODAL_ID = 'delete-address-confirm-modal';

  class Address extends Card {
    constructor({
      id
    }) {
      super({
        id
      });
      this.currentDeleteAddressSeq = null;
      this.$currentDeleteAddressItem = null;
    }

    init() {
      this.initModal();
      this.bindEvents();
    }

    initModal() {
      const modal = new Modal({
        modalId: MODAL_ID
      });
      modal.init();
      this.modal = modal;
    }

    bindEvents() {
      this.bindRemoveAddress();
      $(`#${this.id} .address__btn--edit`).click(() => reportEditAddress());
      $(`#${this.id} .address__link`).click(() => reportClickNewAddress());
      $(`#${this.id} .address__btn--add`).click(() => reportClickNewAddress());
    }

    bindRemoveAddress() {
      $(`#${this.id} .address__list`).on('click', '.address__btn--remove', async e => {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const seq = $target.data('seq');
        this.$currentDeleteAddressItem = $target;
        this.currentDeleteAddressSeq = seq;
        reportClickRemoveAddressIcon();
        this.modal.show();
      });
      $(`#${this.modal.modalId} .delete-address-confirm__footer`).on('click', '.btn', async e => {
        const $target = $(e.currentTarget);
        const isSubmit = $target.hasClass('submit-button');

        if (isSubmit) {
          try {
            await deleteAddress({
              addressSeq: this.currentDeleteAddressSeq
            });
            reportConfirmRemoveAddress();
            this.removeEmitRefresh(this.$currentDeleteAddressItem);
            this.modal.hide();
          } catch (e) {
            console.error(e);
          }
        } else {
          reportCancelRemoveAddress();
          this.modal.hide();
        }
      });
    }

    removeEmitRefresh($target) {
      const $list = $target.parents('.address__list');
      $target.parents('.address__item').remove();
      const $items = $list.find('.address__item');

      if ($items.length < 1) {
        const $address = $(`#${this.id} .address`);
        $address.html(getAddressEmpty());
      } else if ($items.length >= 49) {
        const btnStr = this.getAddButton();
        $(btnStr).insertBefore($list);
        $(`#${this.id} .address--max`).remove();
      }
    }

    render() {}

    getAddButton() {
      const isMobile = window && window.SL_State && window.SL_State.get('request.is_mobile');
      const iconStr = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.6665" y="7.33301" width="10.6667" height="1.33333" fill="currentColor"></rect>
        <rect x="7.3335" y="13.333" width="10.6667" height="1.33333" transform="rotate(-90 7.3335 13.333)" fill="currentColor"></rect>
      </svg>

      <span>${t('customer.address.add_address')}</span>
    `;
      let boxButtonStr = iconStr;

      if (isMobile) {
        boxButtonStr = `
        <button class="sl-btn btn btn-primary col-24">${iconStr}</button>
      `;
      }

      return `
      <div class="address__add-box">
        <a class="address__btn address__btn--add" href="${redirectTo('/user/address/new')}">
          ${boxButtonStr}
        </a>
      </div>
    `;
    }

  }

  _exports.default = Address;
  return _exports;
}();