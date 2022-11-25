window.SLM = window.SLM || {};

window.SLM['cart/script/report/cartHdReport.js'] = window.SLM['cart/script/report/cartHdReport.js'] || function () {
  const _exports = {};
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { TradeHdReport } = window['SLM']['theme-shared/utils/tradeReport/hdReport.js'];
  const {
    formatNumber
  } = currencyUtil;

  class CartHdReport extends TradeHdReport {
    getCartPageId() {
      if (window.location.pathname === '/cart') {
        return 60006254;
      }

      return 60006262;
    }

    removeRp(params) {
      try {
        const cid = this.getCartPageId();

        if (Array.isArray(params)) {
          this.event({
            page: 'cart',
            event_name: 'removeitem',
            event_category: 'cart',
            products: (params && params.map ? params : []).map(item => {
              return {
                product_id: item.spuId,
                variantion_id: item.skuId,
                quantity: item.num,
                price: formatNumber(item.price),
                product_name: item.name,
                product_type: 'product'
              };
            })
          }, cid);
        } else {
          this.event({
            page: 'cart',
            event_category: 'cart',
            event_name: 'removeitem',
            product_type: 'product',
            product_id: params.spuId.toString(),
            variantion_id: params.skuId,
            quantity: params.num,
            price: formatNumber(params.price).toString(),
            product_name: params.name
          }, cid);
        }
      } catch (e) {
        console.error(e);
      }
    }

    rpCart(data) {
      const cid = this.getCartPageId();
      this.event(data, cid);
    }

    updateItem({
      spuId,
      skuId,
      quantity,
      price,
      update_quantity
    }) {
      this.rpCart({
        page: 'cart',
        event_name: 'click_component',
        custom_component: ['product_edit']
      });
      this.rpCart({
        event_name: 'updateitem',
        product_type: 'product',
        product_id: spuId,
        variantion_id: skuId,
        quantity,
        price: formatNumber(price).toString(),
        update_quantity: update_quantity && update_quantity.toString ? update_quantity.toString() : undefined
      });
    }

  }

  const cartHdReport = new CartHdReport();
  _exports.default = cartHdReport;
  return _exports;
}();