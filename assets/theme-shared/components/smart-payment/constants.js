window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/constants.js'] = window.SLM['theme-shared/components/smart-payment/constants.js'] || function () {
  const _exports = {};
  const CHANNEL_CODE = {
    Paypal: 'Paypal',
    SLpayments: 'SLpayments',
    StripeOther: 'StripeOther'
  };
  _exports.CHANNEL_CODE = CHANNEL_CODE;
  const METHOD_CODE = {
    Paypal: 'Paypal',
    GooglePay: 'GooglePay',
    ApplePay: 'ApplePay'
  };
  _exports.METHOD_CODE = METHOD_CODE;
  const BUY_SCENE_MAP = {
    productDetail: 'detail',
    cart: 'cart'
  };
  _exports.BUY_SCENE_MAP = BUY_SCENE_MAP;
  const ACTION_TYPE = {
    Init: 'init',
    PullUpChannel: 'pullUpChannel',
    CreateOrder: 'createOrder',
    Pay: 'pay',
    Hooks: 'Hooks',
    CreateExpected: 'createExpected'
  };
  _exports.ACTION_TYPE = ACTION_TYPE;
  const PROCESSING_DATA_SESSION_KEY = 'processing_data';
  _exports.PROCESSING_DATA_SESSION_KEY = PROCESSING_DATA_SESSION_KEY;
  const ERROR_TYPE = {
    InitFail: 'initFail',
    UpdateFail: 'updateFail',
    NoShippingOption: 'noShippingOption',
    InvalidDiscountCode: 'invalidDiscountCode',
    DiscountCodeExists: 'discountCodeExists',
    CreateFail: 'createFail',
    CreateTimeout: 'createTimeout'
  };
  _exports.ERROR_TYPE = ERROR_TYPE;
  const I18N_KEY_MAP = {
    themes: {
      [ERROR_TYPE.InitFail]: 'cart.error.default',
      [ERROR_TYPE.UpdateFail]: 'cart.error.renew',
      [ERROR_TYPE.NoShippingOption]: 'cart.error.noshipping',
      [ERROR_TYPE.InvalidDiscountCode]: 'transaction.discount.code_error',
      [ERROR_TYPE.DiscountCodeExists]: 'cart.couponCode.existCode',
      [ERROR_TYPE.CreateFail]: 'cart.error.order',
      [ERROR_TYPE.CreateTimeout]: 'cart.error.order.overtime'
    },
    checkout: {
      [ERROR_TYPE.InitFail]: 'checkout&system.error.default',
      [ERROR_TYPE.UpdateFail]: 'checkout&system.error.renew',
      [ERROR_TYPE.NoShippingOption]: 'checkout&system.error.noshipping',
      [ERROR_TYPE.InvalidDiscountCode]: 'checkout&system.discount_code.error',
      [ERROR_TYPE.DiscountCodeExists]: 'checkout&system.discount_code.already_exist',
      [ERROR_TYPE.CreateFail]: 'checkout&system.error.order',
      [ERROR_TYPE.CreateTimeout]: 'checkout&system.error.order.overtime'
    }
  };
  _exports.I18N_KEY_MAP = I18N_KEY_MAP;
  const SERVER_ERROR_CODE = {
    DiscountCode: 'TCTD0122',
    NoShippingOption: 'TC_000000_B0019'
  };
  _exports.SERVER_ERROR_CODE = SERVER_ERROR_CODE;
  const SERVER_ERROR_MSG = {
    DISCOUNT_CODE_OR_GIFT_CARD_INVALID: 'DISCOUNT_CODE_OR_GIFT_CARD_INVALID',
    DISCOUNT_CODE_INVALID: 'DISCOUNT_CODE_INVALID',
    DISCOUNT_CODE_EXPIRED: 'DISCOUNT_CODE_EXPIRED',
    DISCOUNT_CODE_USER_INVALID: 'DISCOUNT_CODE_USER_INVALID',
    DISCOUNT_CODE_USE_TIMES_LIMIT: 'DISCOUNT_CODE_USE_TIMES_LIMIT',
    DISCOUNT_CODE_NO_REACH: 'DISCOUNT_CODE_NO_REACH',
    UN_MATCH_PAYMENT: 'UN_MATCH_PAYMENT',
    UN_MATCH_LOGISTICS: 'UN_MATCH_LOGISTICS',
    DISCOUNT_CODE_REPEAT: 'DISCOUNT_CODE_REPEAT'
  };
  _exports.SERVER_ERROR_MSG = SERVER_ERROR_MSG;
  const ErrorDiscountCode = [SERVER_ERROR_MSG.DISCOUNT_CODE_OR_GIFT_CARD_INVALID, SERVER_ERROR_MSG.DISCOUNT_CODE_INVALID, SERVER_ERROR_MSG.DISCOUNT_CODE_EXPIRED, SERVER_ERROR_MSG.DISCOUNT_CODE_USER_INVALID, SERVER_ERROR_MSG.DISCOUNT_CODE_USE_TIMES_LIMIT, SERVER_ERROR_MSG.DISCOUNT_CODE_NO_REACH, SERVER_ERROR_MSG.UN_MATCH_PAYMENT, SERVER_ERROR_MSG.UN_MATCH_LOGISTICS];
  _exports.ErrorDiscountCode = ErrorDiscountCode;
  return _exports;
}();