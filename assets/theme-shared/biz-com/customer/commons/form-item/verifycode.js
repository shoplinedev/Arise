window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/commons/form-item/verifycode.js'] = window.SLM['theme-shared/biz-com/customer/commons/form-item/verifycode.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { CODE_PHONE_PATTERN } = window['SLM']['theme-shared/biz-com/customer/constant/pattern.js'];
  const { getUdbErrorMessage } = window['SLM']['theme-shared/biz-com/customer/helpers/getUdbResponseLanguageErrorKey.js'];
  const BUTTON_LOADING_CLASS = 'btn--loading';

  const formatterFormData = data => {
    const result = { ...data
    };

    if (data.phone || CODE_PHONE_PATTERN.test(data.username)) {
      const exec = CODE_PHONE_PATTERN.exec(data.phone || data.username);

      if (exec) {
        result[data.username ? 'username' : 'phone'] = `${exec[2]}${exec[3]}`.replace('+', '00');
        result._code = exec[1].slice(0, -exec[2].length);
      }
    }

    return result;
  };

  _exports.formatterFormData = formatterFormData;

  class Verifycode {
    constructor({
      form,
      formId,
      value,
      on,
      immediate
    }) {
      this.countDown = 60;
      this.countDownTimeout = null;
      this.form = form;
      this.formId = formId;
      this.on = on;
      this.$item = $(`#${formId} [sl-form-item-name="verifycode"] .sl-input`);
      this.$input = this.$item.find('.sl-input__inpEle');
      this.$send = this.$item.find(`.customer__send-btn`);
      const originValue = value || this.$input && this.$input.val();
      this.value = originValue;
      this.inputValue = originValue;
      this.immediate = immediate;
      this.dependFormItemName = null;
      this.init();
    }

    $$watch({
      name,
      value
    }) {
      this.changeSendButtonStatus(name, value);
    }

    changeSendButtonStatus(name, value) {
      if (this.countDownTimeout) {
        return;
      }

      if (value === undefined) {
        return;
      }

      const {
        $send
      } = this;

      if (value) {
        this.dependFormItemName = name;
        this.form.validateFields([name]).then(res => {
          if (res.pass) {
            $send.removeAttr('disabled');
          } else {
            $send.attr('disabled', true);
          }
        }).catch(() => {
          $send.attr('disabled', true);
        });
      } else {
        $send.attr('disabled', true);
      }
    }

    init() {
      this.bindSendCodeEvent();
    }

    getValue() {
      return {
        verifycode: this.inputValue || this.$input.val() || ''
      };
    }

    getFormValue() {
      const value = this.inputValue || this.$input.val() || '';
      this.value = value;
      return {
        verifycode: value
      };
    }

    setCountDown() {
      if (this.countDown > 0) {
        this.$send.attr('disabled', true);
        this.$send.text(`${t('customer.general.resend')}(${this.countDown})`);
        this.countDown -= 1;
        this.countDownTimeout = window.setTimeout(() => {
          this.setCountDown();
        }, 1000);
      } else {
        this.clearCountDown();
      }
    }

    clearCountDown() {
      this.$send.removeAttr('disabled');
      this.$send.text(t('customer.general.send'));
      window.clearTimeout(this.countDownTimeout);
      this.countDownTimeout = null;
      this.countDown = 60;
    }

    bindSendCodeEvent() {
      const {
        $send
      } = this;
      let loading = false;
      $send.on('click', async e => {
        e.preventDefault();

        if (loading) {
          return false;
        }

        this.clearCountDown();

        try {
          loading = true;
          $(e.target).addClass(BUTTON_LOADING_CLASS);
          await (this.on && this.on.send());
          this.form.removeErrList([this.dependFormItemName || 'verifycode']);
          this.setCountDown();
        } catch (error) {
          this.clearCountDown();

          if (error && (error.rescode || error.message)) {
            this.form.setErrMsgIntoDom([{
              name: this.dependFormItemName || 'verifycode',
              messages: [getUdbErrorMessage(error)]
            }]);
          }
        }

        loading = false;
        $(e.target).removeClass(BUTTON_LOADING_CLASS);
      });

      if (this.immediate) {
        this.triggerSendCode();
      }
    }

    triggerSendCode() {
      const {
        $send
      } = this;
      $send.removeAttr('disabled');
      $send.trigger('click');
    }

    reset() {
      this.clearCountDown();
    }

  }

  _exports.default = Verifycode;
  return _exports;
}();