window.SLM = window.SLM || {};

window.SLM['product/detail/inquiry-price-modal.js'] = window.SLM['product/detail/inquiry-price-modal.js'] || function () {
  const _exports = {};
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { mcUtil } = window['@yy/sl-mc'];
  const get = window['lodash']['get'];
  const firstAvailableSku = window['SLM']['theme-shared/utils/sku/firstAvailableSku.js'].default;
  const { leadReport, cancelReport, viewReport, listenInputChange } = window['SLM']['theme-shared/report/product/detail/inquiry-modal-report.js'];
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const BaseModal = window['SLM']['commons/components/modal/index.js'].default;
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const Loading = window['SLM']['commons/components/toast/loading.js'].default;
  const emailRE = /^[A-Za-z0-9_./;+]+([A-Za-z0-9_./;+]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
  const toast = new Toast();

  class InquiryPriceModal extends Base {
    constructor({
      id,
      spu,
      sku
    }) {
      super('product:inquiry:price:modal');
      this.$root = $(`#JS-inquiry-price-modal_${id}`);
      this.$setPortals(this.$root);
      this.buttonSelector = `#JS-inquiry-price-button_${id}`;
      this.spu = spu;
      this.activeSku = null;
      this.formInstance = null;
      this.modalInstance = null;
      this.firstSku = firstAvailableSku(spu, sku.skuList);
      this.init(id);
      listenInputChange({
        area: this.$root
      });
    }

    init(id) {
      if (this.spu && this.spu.inquiry) {
        this.initModal(id);
        this.initForm(id);
        this.bindEvents();
      }
    }

    initModal(id) {
      this.modalInstance = new BaseModal({
        modalId: `inquiry-price_${id}`
      });
      this.modalInstance.init();
    }

    initForm(id) {
      this.formInstance = Form.takeForm(`JS-inquiry-modal-form_${id}`);
      this.formInstance.init();
      this.formInstance.setFields(InquiryPriceModal.getFieldsConfig());
    }

    setActiveSku(activeSku) {
      this.activeSku = activeSku;
    }

    cancelReport() {
      cancelReport({
        spu: this.spu,
        sku: this.activeSku || this.firstSku,
        num: 1,
        email: this.formInstance.getFieldValue('email'),
        phone: this.formInstance.getFieldValue('mobile'),
        name: this.formInstance.getFieldValue('name'),
        message: this.formInstance.getFieldValue('message'),
        region: this.formInstance.getFieldValue('region')
      });
    }

    bindEvents() {
      const eventHandlers = {
        submitClickHandler: async e => {
          try {
            if (this.isPreview()) {
              toast.open(t('products.product_details.link_preview_does_not_support'));
              return;
            }

            $(e.target).addClass('disabled');
            await this.validateForm();
            await this.postForm();
          } catch (err) {} finally {
            $(e.target).removeClass('disabled');
          }
        },
        cancelClickHandler: () => {
          this.cancelReport();
          this.hideModal();
        },
        buttonClickHandler: () => {
          this.showModal();
          viewReport();
        }
      };
      this.$onPortals('click', '.JS-inquiry-modal-submit', eventHandlers.submitClickHandler);
      this.$onPortals('click', '.JS-inquiry-modal-cancel', eventHandlers.cancelClickHandler);
      this.$root.parents('.mp-modal__wrapper').on('click', '.mp-modal__mask.mp-modal__closable,.mp-modal__close', () => this.cancelReport());
      $(this.buttonSelector).on('click', eventHandlers.buttonClickHandler);
    }

    unbindEvents() {
      this.$offAll();
      $(this.buttonSelector).off('click');
    }

    async postForm() {
      const inquiryInfo = this.formInstance.getFieldsValue();
      const {
        activeSku
      } = this;
      const spuInfo = this.spu;
      const url = `/products/${spuInfo.spuSeq}${activeSku ? `?sku=${activeSku.skuSeq}` : ''}`;
      const finalInquiryInfo = {
        Email: inquiryInfo.email,
        Message: inquiryInfo.message,
        Name: inquiryInfo.name,
        Mobile: inquiryInfo.mobile,
        'Country/Region': inquiryInfo.region,
        Product: spuInfo && spuInfo.title,
        ProductUrl: window.location.origin + (window.Shopline.redirectTo(url) || url)
      };
      const sendContentStr = Object.keys(finalInquiryInfo).reduce((str, key) => {
        str += `${key}：${finalInquiryInfo[key]}\n`;
        return str;
      }, '');
      const sendInfo = {
        email: inquiryInfo.email,
        content: sendContentStr,
        attachmentUrl: get(activeSku, 'imageList[0]') || get(activeSku, 'image') || get(spuInfo, 'images[0]')
      };
      const loading = new Loading({
        duration: 0
      });
      loading.open();
      await this.sendInquiryInfoRun(sendInfo, loading, {
        phone: inquiryInfo.mobile,
        message: inquiryInfo.message,
        name: inquiryInfo.name,
        region: inquiryInfo.region
      });
    }

    async sendInquiryInfoRun(info, loading, extraData) {
      const response = await mcUtil.sendToMerchant(info);
      loading.close();

      if (response.code === 'SUCCESS') {
        leadReport({
          spu: this.spu,
          sku: this.activeSku || this.firstSku,
          num: 1,
          email: info.email,
          ...extraData
        });
        this.hideModal();
        toast.open(t('products.product_details.submission_successfully'));
      } else {
        toast.open(t('products.product_details.submission_failed'));
      }
    }

    showModal() {
      this.modalInstance.show();
    }

    hideModal() {
      this.modalInstance.hide();
    }

    static getFieldsConfig() {
      const fields = [{
        name: 'email',
        value: '',
        rules: [{
          message: t('products.product_details.enter_email_address'),
          required: true
        }, {
          message: t('products.product_details.enter_valid_email_address'),
          pattern: emailRE
        }]
      }, {
        name: 'message',
        value: '',
        rules: [{
          message: t('products.product_details.leave_us_message'),
          required: true
        }, {
          message: t('products.product_details.maximum_length_of_message'),

          validator(val) {
            return val.length <= 1500;
          }

        }]
      }, {
        name: 'name',
        value: ''
      }, {
        name: 'mobile',
        value: ''
      }, {
        name: 'region',
        value: ''
      }];
      return fields;
    }

    validateForm() {
      return new Promise((resolve, reject) => {
        this.formInstance.validateFields().then(res => {
          if (res.pass) {
            resolve();
          } else {
            reject(res);
          }
        });
      });
    }

    isPreview() {
      return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
    }

  }

  _exports.default = InquiryPriceModal;
  return _exports;
}();