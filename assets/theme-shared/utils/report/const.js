window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/const.js'] = window.SLM['theme-shared/utils/report/const.js'] || function () {
  const _exports = {};
  const getEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const PageType = {
    Home: 0,
    ProductCategory: 1,
    ProductAll: 2,
    ProductDetail: 3,
    ProductSearch: 4,
    MiniCart: 5,
    Cart: 6,
    CheckoutProgress: 7,
    CheckoutConfirm: 8,
    OrderConfirm: 9,
    SignIn: 10,
    SignInSuccess: 11,
    SignUp: 12,
    SignUpSuccess: 13,
    ProductPage: 14,
    UserCenter: 15,
    SalesPromotion: 16,
    OrderDetail: 17,
    OneShop: 18
  };
  const ClickType = {
    SelectContent_Product: 0,
    AddToCart: 1,
    RemoveFromCart: 2,
    CheckoutToCart: 3,
    BeginCheckout: 4,
    CheckoutProgress: 5,
    PlaceOrder: 6,
    Login: 7,
    ViewCart: 8
  };
  const eventType = {
    SetCheckoutOption: 'set_checkout_option',
    SelectContent: 'select_content',
    AddToCart: 'add_to_cart',
    RemoveFromCart: 'remove_from_cart',
    ViewCart: 'view_cart'
  };
  const isProd = ['product', 'preview'].includes(getEnv().APP_ENV);
  const salvageURLMap = {
    stg: {
      single: 'https://websdkentmaster0923.myshoplinestg.com/action/event/salvage',
      batch: 'https://websdkentmaster0923.myshoplinestg.com/action/event/batchSalvage'
    },
    prd: {
      single: 'https://websdkentmaster0923.myshopline.com/action/event/salvage',
      batch: 'https://websdkentmaster0923.myshopline.com/action/event/batchSalvage'
    }
  };
  const salvageURL = isProd ? salvageURLMap.prd : salvageURLMap.stg;
  _exports.ClickType = ClickType;
  _exports.PageType = PageType;
  _exports.salvageURL = salvageURL;
  _exports.eventType = eventType;
  const EXCLUDE_ADS_PAGE_VIEW_ALIAS = ['Checkout', 'Thankyou', 'Processing'];
  _exports.EXCLUDE_ADS_PAGE_VIEW_ALIAS = EXCLUDE_ADS_PAGE_VIEW_ALIAS;
  return _exports;
}();