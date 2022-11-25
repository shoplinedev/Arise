import { Payment as sl_smart_payment_payment, PayMode as sl_smart_payment_pay_mode, PaymentProps as sl_smart_payment_payment_props, Paypal as sl_smart_payment_paypal, ChannelCode as sl_smart_payment_channel_code, SystemCode as sl_smart_payment_system_code } from '@sl/smart-payment';
window['@sl/smart-payment'] = {
  'Payment': sl_smart_payment_payment,
  'PayMode': sl_smart_payment_pay_mode,
  'PaymentProps': sl_smart_payment_payment_props,
  'Paypal': sl_smart_payment_paypal,
  'ChannelCode': sl_smart_payment_channel_code,
  'SystemCode': sl_smart_payment_system_code
};