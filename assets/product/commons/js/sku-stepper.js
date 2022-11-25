window.SLM = window.SLM || {};

window.SLM['product/commons/js/sku-stepper.js'] = window.SLM['product/commons/js/sku-stepper.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;

  class SkuStepper {
    constructor({
      root,
      value,
      min,
      max,
      domReady,
      disabled,
      onChange,
      step = 1,
      showOverStockToast = true
    }) {
      this.root = root;
      this.data = {
        min,
        max,
        step,
        disabled,
        value,
        showOverStockToast
      };
      this.onChange = onChange;
      this.init(domReady);
    }

    init(domReady) {
      if (domReady) {
        this.$stepper = $(this.root);
        this.initEvent();
      } else {
        this.createAndInitDom();
      }

      this.toast = new Toast();
    }

    initEvent() {
      if (this.data.disabled) return;
      this.$stepper.children('.stepper-before').on('click', () => {
        if (this.data.min < this.data.value) {
          this.data.value -= this.data.step;

          if (this.data.value < this.data.min) {
            this.data.value = this.data.min;
          }

          this.render();
          window.SL_EventBus.emit('product:quantity:minus', [this.data.value, this.root]);
        }
      });
      this.$stepper.children('.stepper-after').on('click', () => {
        if (this.data.value < this.data.max) {
          this.data.value += this.data.step;

          if (this.data.value > this.data.max) {
            this.data.value = this.data.max;
          }

          this.render();
          window.SL_EventBus.emit('product:quantity:add', [this.data.value, this.root]);
        }
      });
      this.$stepper.children('.stepper-input').on('input', e => {
        const filerValue = e.target.value.replace(/[^\d]/g, '');
        const value = filerValue ? Number(filerValue) : filerValue;
        this.data.value = value;
        this.render();
      });
      this.$stepper.children('.stepper-input').on('blur', e => {
        const value = Number(e.target.value);
        let overStockLimit = 0;
        let isReset = 1;

        if (value > this.data.max) {
          this.data.value = this.data.max;

          if (!this.data.disabled) {
            overStockLimit = 1;

            if (this.data.showOverStockToast) {
              this.toast.open(t('cart.stock.limit', {
                stock: this.data.max
              }), 1000);
            }
          }
        } else if (this.data.min > value) {
          this.data.value = this.data.min;
        } else {
          isReset = 0;
        }

        window.SL_EventBus.emit('product:quantity:modify', [this.data.value, overStockLimit, this.root]);

        if (isReset) {
          this.render();
        }
      });
    }

    createAndInitDom() {
      $(this.root).html(`<div>stepper</div>`);
    }

    setSingleDisabled(position, disabled) {
      if (disabled) {
        this.$stepper.children(`.stepper-${position}`).addClass('disabled');
      } else {
        this.$stepper.children(`.stepper-${position}`).removeClass('disabled');
      }
    }

    setStepperDisabled() {
      if (this.data.disabled) {
        this.$stepper.addClass('disabled');
      } else {
        this.$stepper.removeClass('disabled');
      }
    }

    setStepperData(obj) {
      this.data = { ...this.data,
        ...obj
      };
      this.render();
    }

    render() {
      if (this.data.value) {
        this.setSingleDisabled('before', this.data.min >= this.data.value);
        this.setSingleDisabled('after', this.data.max <= this.data.value);
      }

      this.$stepper.children('.stepper-input').val(this.data.value);
      this.onChange(this.data.value);
    }

  }

  _exports.default = SkuStepper;
  return _exports;
}();