window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-quantity.js'] = window.SLM['product/detail/js/product-quantity.js'] || function () {
  const _exports = {};
  const DataWatcher = window['SLM']['theme-shared/utils/sku/DataWatcher.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const FlashSale = window['SLM']['theme-shared/components/hbs/flashSale/index.js'].default;
  const get = window['lodash']['get'];
  const SkuStepper = window['SLM']['product/commons/js/sku-stepper.js'].default;
  const initValue = 1;
  _exports.initValue = initValue;

  class SkuQuality {
    constructor({
      sku,
      spu,
      activeSku,
      id,
      onChange,
      dataPool,
      isCheckStock = true,
      isOpenFlashSale,
      fixedMax = 0,
      isShowTips = true
    }) {
      this.activeSku = activeSku;
      this.sku = sku;
      this.spu = spu;
      this.id = id;
      this.root = `#product-detail-sku-quantity_${id}`;
      this.isOpenFlashSale = isOpenFlashSale || $(`#has-b2b-plugin-${id}`).length <= 0;
      this.dataPool = dataPool || new DataWatcher();
      this.onChange = onChange;
      this.isCheckStock = isCheckStock;
      this.fixedMax = fixedMax;
      this.isShowTips = isShowTips;
      this.init();
    }

    getMax() {
      if (this.fixedMax) {
        return this.fixedMax;
      }

      if (!this.activeSku) {
        return 99999;
      }

      if (this.isTrackStock() && this.isCheckStock) {
        return this.activeSku.stock > 0 ? Math.min(99999, this.activeSku.stock) : 1;
      }

      return 99999;
    }

    isTrackStock() {
      return !get(this.activeSku, 'infiniteStock') && !get(this.activeSku, 'allowOversold');
    }

    init() {
      this.skuStepper = new SkuStepper({
        domReady: true,
        root: $(`#product-detail-sku-stepper_${this.id}`),
        max: this.getMax(),
        value: initValue,
        min: 1,
        disabled: get(this.spu, 'soldOut') || this.isTrackStock() && this.activeSku && this.activeSku.stock < 1,
        showOverStockToast: this.isShowTips,
        onChange: num => {
          if (num !== this.dataPool.quantity) {
            this.dataPool.quantity = num;
          }

          this.onChange && this.onChange(num);
        }
      });

      if (this.isOpenFlashSale) {
        new FlashSale({
          id: `${this.id}`
        }).init();
      }

      this.dataPool.quantity = initValue;
      this.dataPool.watch(['quantity'], () => {
        this.setCurrentNum(this.dataPool.quantity);
      });
    }

    render() {
      if (this.isShowTips) {
        const showTips = this.isTrackStock() && this.activeSku && this.activeSku.stock < 10 && this.activeSku.stock > 0;

        if (showTips) {
          const content = t(`cart.stock.limit`, {
            stock: this.activeSku.stock
          });
          this.setErrorTips(showTips, content);
        } else {
          this.setErrorTips(showTips);
        }
      } else {
        let content = '';

        if (!this.activeSku) {
          content = '0';
          $(`#product-in-stock_${this.id} .stock-num`).html(content);
          $(`#product-in-stock_${this.id}`).addClass('stock-hide');
        } else {
          if (this.activeSku.infiniteStock) {
            content = t('products.product_details.in_stock');
          } else if (!this.activeSku.infiniteStock && !this.activeSku.allowOversold) {
            if (this.activeSku.stock >= 0) {
              content = this.activeSku.stock > 99999 ? 99999 : this.activeSku.stock;
            } else {
              content = 0;
            }
          } else if (!this.activeSku.infiniteStock && this.activeSku.allowOversold) {
            content = t('products.product_details.in_stock');
          }

          $(`#product-in-stock_${this.id} .stock-num`).html(content);
          $(`#product-in-stock_${this.id}`).removeClass('stock-hide');
        }
      }
    }

    setErrorTips(show, content) {
      if (show) {
        $(this.root).children('.stepper-tip').html(content).removeClass('hide');
      } else {
        $(this.root).children('.stepper-tip').addClass('hide');
      }
    }

    setCurrentNum(num) {
      const data = { ...this.skuStepper.data,
        value: num
      };
      this.skuStepper.setStepperData(data);
    }

    setActiveSku(sku) {
      let current = this.skuStepper.data.value < 0 ? 1 : this.skuStepper.data.value;

      if (!sku) {
        this.activeSku = null;
        const stepperData = {
          value: current,
          max: this.fixedMax || 99999,
          disabled: false
        };
        this.skuStepper.setStepperData(stepperData);
        this.render();
        return;
      }

      this.activeSku = sku;

      if (current > this.getMax()) {
        current = this.getMax();

        if (!sku.soldOut && this.isShowTips) {
          this.skuStepper.toast.open(t(`cart.stock.limit`, {
            stock: current
          }), 1000);
        }
      }

      const stepperData = {
        value: current,
        max: this.getMax(),
        disabled: this.spu.soldOut || this.isTrackStock() && this.activeSku && this.activeSku.stock < 1
      };
      this.skuStepper.setStepperData(stepperData);
      this.render();
    }

  }

  _exports.default = SkuQuality;
  return _exports;
}();