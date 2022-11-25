window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/hd.js'] = window.SLM['theme-shared/utils/dataReport/hd.js'] || function () {
  const _exports = {};
  const { ClickType, PageType } = window['SLM']['theme-shared/utils/report/const.js'];

  function addToCartHdReport({
    spuId,
    skuId,
    num,
    price,
    name,
    page,
    event_name,
    event_category,
    product_type,
    event_id
  }) {
    window.HdSdk && window.HdSdk.shopTracker.report(event_id, {
      page,
      event_name,
      event_category,
      product_type,
      product_id: spuId,
      variantion_id: skuId,
      quantity: `${num}`,
      price: `${price}`,
      product_name: name
    });
  }

  function reportHd(page, type, data) {
    switch (page) {
      case PageType.ProductDetail:
        switch (type) {
          case ClickType.AddToCart:
          case ClickType.BeginCheckout:
            addToCartHdReport(data);
            break;

          default:
            break;
        }

        break;

      default:
        break;
    }
  }

  _exports.default = reportHd;
  return _exports;
}();