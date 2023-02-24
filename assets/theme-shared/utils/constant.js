window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/constant.js'] = window.SLM['theme-shared/utils/constant.js'] || function () {
  const _exports = {};
  const SettleActionsEnum = {
    CHANGE_EMAIL: 'change_email',
    CHANGE_DELIVERY_METHOD: 'change_delivery_method',
    CHANGE_ADDRESS: 'change_address',
    CHANGE_REMARK: 'change_remark',
    CHANGE_TAX_NUM: 'change_tax_num',
    CHANGE_PAYMENT_METHOD: 'change_payment_method',
    POLL_SHIPPING_METHOD: 'load_express',
    EDIT_PRODUCT: 'edit_product',
    USE_INTEGRAL: 'use_integral',
    ADD_TIPS: 'add_tips',
    APPLY_COUPON: 'use_discount_code',
    NEXT_STEP: 'next_step',
    LAST_STEP: 'last_step',
    CREATE_ORDER: 'create_order_check',
    ORDINARY: 'ordinary'
  };
  _exports.SettleActionsEnum = SettleActionsEnum;
  const FILE_TYPE = {
    GIF: 'GIF',
    PNG: 'PNG',
    JPEG: 'JPEG',
    BMP: 'BMP',
    JPG: 'JPG',
    WEBP: 'WEBP',
    SVG: 'SVG',
    PDF: 'PDF',
    XLSX: 'XLSX'
  };
  _exports.FILE_TYPE = FILE_TYPE;
  const FILE_TYPE_MAP = {
    'image/gif': FILE_TYPE.GIF,
    'image/png': FILE_TYPE.PNG,
    'image/jpeg': FILE_TYPE.JPEG,
    'image/bmp': FILE_TYPE.BMP,
    'image/jpg': FILE_TYPE.JPG,
    'image/webp': FILE_TYPE.WEBP,
    'image/svg': FILE_TYPE.SVG,
    'application/pdf': FILE_TYPE.PDF,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': FILE_TYPE.XLSX
  };
  _exports.FILE_TYPE_MAP = FILE_TYPE_MAP;
  const SERVER_ERROR_CODE = {
    AMOUNT_EXCEEDS_LIMIT: 'TCTDEXCEEDED_MAX_AMOUNT_LIMIT',
    ABANDONED_RISK_CONTROL: 'TRD_123768_B1409'
  };
  _exports.SERVER_ERROR_CODE = SERVER_ERROR_CODE;
  return _exports;
}();