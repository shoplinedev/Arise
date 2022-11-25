window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/flashSale/index.js'] = window.SLM['theme-shared/components/hbs/flashSale/index.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const EVENT_BUS = {
    QUANTITY_ADD_EVENT: 'product:quantity:add',
    QUANTITY_MINUS_EVENT: 'product:quantity:minus',
    QUANTITY_MODIFY_EVENT: 'product:quantity:modify',
    SKU_INIT_EVENT: 'product:sku:init',
    SKU_CHANGE_EVENT: 'product:sku:change',
    SKU_UPDATE_EVENT: 'Product::SkuUpdate'
  };
  const TOAST_TYPE = {
    ACTIVE_PURCHASE_LIMIITED: 1,
    PRODUCT_PURCHASE_LIMIITED: 2,
    ACTIVE_NOSTOCK: -1
  };

  const template = saleBuyLimitConfig => {
    const {
      userLimitedType,
      acquirePerUserLimit
    } = saleBuyLimitConfig || {};

    switch (userLimitedType) {
      case TOAST_TYPE.ACTIVE_PURCHASE_LIMIITED:
        return t('products.product_details.activity_toast_product__limit', {
          stock: acquirePerUserLimit > 0 ? acquirePerUserLimit : '0'
        });

      case TOAST_TYPE.PRODUCT_PURCHASE_LIMIITED:
        return t('products.product_details.activity_toast_price_limit', {
          num: acquirePerUserLimit > 0 ? acquirePerUserLimit : '0'
        });

      case TOAST_TYPE.ACTIVE_NOSTOCK:
        return t('products.product_details.activity_toast_title__limit');

      default:
        return '';
    }
  };

  const defaultOption = {
    id: '',
    productInfo: {}
  };

  class FlashSale {
    constructor(option = {}) {
      this.option = { ...defaultOption,
        ...option
      };
      this.option.productInfo[this.option.id] = {};
      this.init();
    }

    init() {
      this.toast = new Toast();
      this.bindEventListener();
    }

    bindEventListener() {
      window.SL_EventBus.on(EVENT_BUS.QUANTITY_ADD_EVENT, ([value, selector]) => {
        if (this.checkData({
          selector
        })) {
          this.getProductNum(value);
          this.showTips(value);
        }
      });
      window.SL_EventBus.on(EVENT_BUS.QUANTITY_MINUS_EVENT, ([value, selector]) => {
        if (this.checkData({
          selector
        })) {
          this.getProductNum(value);
          this.showTips(value);
        }
      });
      window.SL_EventBus.on(EVENT_BUS.QUANTITY_MODIFY_EVENT, ([value, overStockLimit, selector]) => {
        if (this.checkData({
          selector
        })) {
          this.getProductNum(value);

          if (!overStockLimit) {
            this.showTips(value);
          }
        }
      });
      window.SL_EventBus.on(EVENT_BUS.SKU_INIT_EVENT, ([sku, id]) => {
        if (this.checkData({
          id
        })) {
          this.dataProcess(sku);
        }
      });
      window.SL_EventBus.on(EVENT_BUS.SKU_CHANGE_EVENT, ([sku, id]) => {
        if (this.checkData({
          id
        })) {
          this.dataProcess(sku);
          this.showTips(this.option.productInfo[this.option.id].productNum);
          this.compareStock(sku);
        }
      });
      window.Shopline.event.on(EVENT_BUS.SKU_UPDATE_EVENT, ({
        activeSku,
        id
      }) => {
        if (this.checkData({
          id
        })) {
          this.dataProcess(activeSku);
          this.showTips(this.option.productInfo[this.option.id].productNum);
          this.compareStock(activeSku);
        }
      });
    }

    compareStock(sku) {
      const {
        stock
      } = sku || {};

      if (stock <= this.option.productInfo[this.option.id].productNum) {
        this.option.productInfo[this.option.id].productNum = stock;
      }
    }

    checkData(data) {
      const {
        id,
        selector
      } = data || {};

      if (id === this.option.id || selector && selector.attr('id') && selector.attr('id').indexOf(this.option.id) > -1) {
        return true;
      }

      return false;
    }

    getProductNum(value) {
      this.option.productInfo[this.option.id].productNum = value;
    }

    dataProcess(sku) {
      const prdInfo = this.option.productInfo[this.option.id];
      const {
        saleActivityResponseList,
        stock
      } = sku || {};

      if (!saleActivityResponseList) {
        this.option.productInfo[this.option.id] = {};
        return;
      }

      Array.isArray(saleActivityResponseList) && saleActivityResponseList.forEach(item => {
        const {
          promotionType,
          promotionSubType,
          saleBuyLimitConfig
        } = item || {};

        if (promotionType === 1 && promotionSubType === 1) {
          this.option.productInfo[this.option.id].activeTip = !get(item, 'saleBuyLimitConfig.allowBuyOverLimit') ? template(saleBuyLimitConfig) : '';
          prdInfo.promotionRemainStock = get(item, 'skuPromotionProduct.promotionRemainStock');
          prdInfo.userRemainBuyCount = get(item, 'skuPromotionProduct.userRemainBuyCount');
        }
      });
      prdInfo.stock = stock;
    }

    showTips(value) {
      const prdInfo = this.option.productInfo[this.option.id] || {};

      if (prdInfo.activeTip && prdInfo.promotionRemainStock !== -1 && prdInfo.promotionRemainStock < value) {
        this.toast.open(template({
          userLimitedType: -1
        }));
      } else if (prdInfo.activeTip && prdInfo.userRemainBuyCount < value) {
        this.toast.open(prdInfo.activeTip);
      }
    }

  }

  _exports.default = FlashSale;
  return _exports;
}();