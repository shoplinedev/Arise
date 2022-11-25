window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/utils.js'] = window.SLM['theme-shared/components/smart-payment/utils.js'] || function () {
  const _exports = {};
  const { ChannelCode, SystemCode } = window['@sl/smart-payment'];

  const onTradeTag = key => {
    switch (key) {
      case 'abandonedSeq':
        return true;

      case 'code':
        return true;

      default:
        return false;
    }
  };

  _exports.onTradeTag = onTradeTag;

  const getPayments = code => {
    const payments = window && window.__PRELOAD_STATE__ && window.__PRELOAD_STATE__.fastCheckout && window.__PRELOAD_STATE__.fastCheckout.payments;
    if (!payments) return;
    if (!code) return payments;
    return payments.find(item => item.channelCode === code);
  };

  _exports.getPayments = getPayments;

  const isPaypalGrey = () => {
    const payment = getPayments(ChannelCode.Paypal);

    if (payment) {
      return payment.systemCode === SystemCode.StandardEC;
    }
  };

  _exports.isPaypalGrey = isPaypalGrey;

  const isFn = object => object && typeof object === 'function';

  _exports.isFn = isFn;
  return _exports;
}();