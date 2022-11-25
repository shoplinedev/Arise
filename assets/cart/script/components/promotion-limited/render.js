window.SLM = window.SLM || {};

window.SLM['cart/script/components/promotion-limited/render.js'] = window.SLM['cart/script/components/promotion-limited/render.js'] || function () {
  const _exports = {};
  const PromotionLimited = window['SLM']['cart/script/components/promotion-limited/index.js'].default;

  class FlashSaleModel {
    renderPromotionLimited(id, data) {
      const html = new PromotionLimited(data).render(id);
      return html;
    }

    initPromotionLimited() {
      const allFlashSaleEle = $('[data-promotion-limited-item-id]');

      if (!allFlashSaleEle.length) {
        return;
      }

      allFlashSaleEle.map((_, ele) => {
        const curEle = $(ele);
        const data = curEle.data('promotion-limited-data');
        return curEle.html(this.renderPromotionLimited(curEle.attr('data-promotion-limited-item-id'), data));
      });
    }

  }

  const model = new FlashSaleModel();
  _exports.default = {
    staticRender: (id, data) => model.renderPromotionLimited(id, data),
    initialModel: () => model.initPromotionLimited()
  };
  return _exports;
}();