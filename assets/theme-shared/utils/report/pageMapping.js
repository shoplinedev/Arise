window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/pageMapping.js'] = window.SLM['theme-shared/utils/report/pageMapping.js'] || function () {
  const _exports = {};
  _exports.default = {
    Home: 'homepage',
    Products: 'product_list',
    ProductsDetail: 'pdp',
    ProductsSearch: 'product_search',
    OneShop: 'expresscheckout',
    Cart: 'cart',
    Checkout: 'order_check_out',
    Comfirm: 'transaction',
    Center: 'user_page',
    Activity: 'addon',
    Page: {
      custom_page: 124,
      smart_landing_page: 125
    }
  };
  return _exports;
}();