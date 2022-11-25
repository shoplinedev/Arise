window.SLM = window.SLM || {};

window.SLM['product/detail/js/auto-coupon/add-to-cart-list.js'] = window.SLM['product/detail/js/auto-coupon/add-to-cart-list.js'] || function () {
  const _exports = {};
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const currency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const addToCartReport = window['SLM']['product/detail/js/auto-coupon/add-to-cart-report.js'].default;

  class AddToCartList {
    constructor(spu, sku) {
      this.spu = { ...spu,
        ...sku
      };
    }

    setActiveSku(sku) {
      this.activeSku = sku ? { ...sku,
        name: this.spu.title
      } : null;
    }

    init() {
      const addToCart = this;
      $('#page-product-detail .sales__add-to-cart-list-content').on('click', '.sales__add-to-cart-item-btn-hook', ev => {
        const {
          spuSeq: spuId,
          skuSeq: skuId,
          name,
          price
        } = addToCart.activeSku;
        const eventID = getEventID();
        window.Shopline.event.emit('Cart::AddToCart', {
          data: {
            spuId,
            skuId,
            num: parseInt(ev.target.dataset.count, 10),
            price,
            name,
            eventID: `addToCart${eventID}`
          },
          onSuccess: () => {
            const quantity = parseInt(ev.target.dataset.count, 10);
            addToCartReport({
              products: [{ ...this.spu,
                skuId
              }],
              num: quantity,
              formatCurrency: currency.formatCurrency
            });
          },
          onError: error => {
            console.error(error);
          }
        });
      });
    }

  }

  _exports.default = AddToCartList;
  return _exports;
}();