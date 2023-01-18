window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/utils.js'] = window.SLM['theme-shared/components/smart-payment/utils.js'] || function () {
  const _exports = {};
  const get = window['lodash']['get'];
  const { ChannelCode, SystemCode } = window['@sl/smart-payment'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];

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
    const payments = SL_State.get('fastCheckout.payments');
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
  const productSubscription = SL_State.get('product.selling_plan_groups') || [];
  _exports.productSubscription = productSubscription;
  const cartInfoSubscriptionInfo = SL_State.get('cartInfo.subscriptionInfo') || {};
  _exports.cartInfoSubscriptionInfo = cartInfoSubscriptionInfo;
  const PageType = {
    ProductDetail: 'productDetail',
    Cart: 'cart'
  };
  _exports.PageType = PageType;
  const HandleClassType = {
    Add: 'addClass',
    Remove: 'removeClass'
  };
  _exports.HandleClassType = HandleClassType;

  const getSubscription = pageType => {
    if (pageType === PageType.ProductDetail) {
      return !!productSubscription.length;
    }

    if (pageType === PageType.Cart) {
      return !(cartInfoSubscriptionInfo.existSubscription === false);
    }

    return false;
  };

  _exports.getSubscription = getSubscription;

  const getPurchaseSDKCheckoutData = async key => {
    const action = get(window, `productPurchaseSDK.channel.getCheckoutDataMap.${key}`);

    if (action) {
      const res = await action();
      return res;
    }

    return Promise.reject();
  };

  _exports.getPurchaseSDKCheckoutData = getPurchaseSDKCheckoutData;

  const createElement = (id, parentId, attr) => {
    if ($.contains(`#${parentId}`, `#${id}`)) {
      return;
    }

    const ele = $(`<div id=${id}>`);

    if (attr) {
      Object.keys(attr).forEach(item => {
        ele.attr(item, attr[item]);
      });
    }

    $(`#${parentId}`).append(ele);
  };

  _exports.createElement = createElement;
  return _exports;
}();