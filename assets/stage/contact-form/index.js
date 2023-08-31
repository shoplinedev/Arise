window.SLM = window.SLM || {};

window.SLM['stage/contact-form/index.js'] = window.SLM['stage/contact-form/index.js'] || function () {
  const _exports = {};
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { EMAIL_VALID_REGEXP } = window['SLM']['theme-shared/utils/emailReg.js'];
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const emailRE = EMAIL_VALID_REGEXP;
  const SEND_API = '/site/form/contactUs';
  const toast = new Toast({
    content: 'content',
    className: 'contact-form__toast',
    duration: 5000
  });
  const fields = [{
    name: 'name',
    value: ''
  }, {
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
    name: 'phone',
    value: ''
  }, {
    name: 'comment',
    value: ''
  }];

  class ContactForm {
    constructor(container) {
      this.container = container;
      const sectionId = container.data('section-id');
      this.submitBtn = container.find('.contact-form__submit');
      this.contactForm = Form.takeForm(`contact-form-${sectionId}`);
      this.contactForm.init();
      this.contactForm.setFields(fields);
      this.initSubmitBtn();
    }

    validateForm() {
      return new Promise((resolve, reject) => {
        this.contactForm.validateFields().then(res => {
          if (res.pass) {
            resolve();
          } else {
            reject(res);
          }
        });
      });
    }

    initSubmitBtn() {
      this.submitBtn.on('click', async event => {
        event.preventDefault();
        await this.validateForm();
        const contactData = this.contactForm.getFieldsValue();

        try {
          await request.post(SEND_API, contactData);
          toast.open(t(`general.contact_us.send_success`));
          this.contactForm.setFields(fields);
        } catch (error) {
          toast.open('Network Error');
        }
      });
    }

    onUnload() {
      this.contactForm.destroy();
      this.submitBtn.off('click');
    }

  }

  ContactForm.type = 'contact-form';
  registrySectionConstructor(ContactForm.type, ContactForm);
  return _exports;
}();