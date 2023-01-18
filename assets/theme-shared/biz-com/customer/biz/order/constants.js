window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/constants.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/constants.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const PAY_MODAL_Id = 'orderDetailPayModalId';
  _exports.PAY_MODAL_Id = PAY_MODAL_Id;
  const bizOrderStatusEnum = {
    PROGRESS: 100,
    CANCELED: 400
  };
  _exports.bizOrderStatusEnum = bizOrderStatusEnum;
  const EnumPayStatus = {
    WAIT_PAY: 0,
    WAIT_PAY_CALLBACK: 40,
    PENDING: 100,
    AUTHORIZED: 110,
    PENDING_REVIEW: 140,
    PARTIAL_PAYMENT: 150,
    PAYED: 200
  };
  _exports.EnumPayStatus = EnumPayStatus;
  const EnumDeliveryStatus = {
    IN_STOCK: 100,
    DELIVERY_PARTIAL: 150,
    SHIPPED: 400
  };
  _exports.EnumDeliveryStatus = EnumDeliveryStatus;
  const PayStatusI18n = {
    [EnumPayStatus.WAIT_PAY]: t('order.payment.unpaid'),
    [EnumPayStatus.WAIT_PAY_CALLBACK]: t('order.payment.unpaid'),
    [EnumPayStatus.PENDING]: t('order.payment.paying'),
    [EnumPayStatus.AUTHORIZED]: t('order.payment.authorized'),
    [EnumPayStatus.PENDING_REVIEW]: t('cart.payment.pending_review'),
    [EnumPayStatus.PARTIAL_PAYMENT]: t('order.payment.partially_paid'),
    [EnumPayStatus.PAYED]: t('order.payment.paid')
  };
  _exports.PayStatusI18n = PayStatusI18n;
  const DeliveryStatusI18n = {
    [EnumDeliveryStatus.IN_STOCK]: t('order.shipping.preparing_order'),
    [EnumDeliveryStatus.DELIVERY_PARTIAL]: t('order.shipping.partially_shipped'),
    [EnumDeliveryStatus.SHIPPED]: t('order.shipping.shipped_order')
  };
  _exports.DeliveryStatusI18n = DeliveryStatusI18n;
  const deliveredStatus = [150, 400];
  _exports.deliveredStatus = deliveredStatus;
  return _exports;
}();