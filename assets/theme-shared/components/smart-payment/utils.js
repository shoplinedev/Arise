window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/utils.js'] = window.SLM['theme-shared/components/smart-payment/utils.js'] || function () {
  const _exports = {};
  const isArray = window['lodash']['isArray'];
  const get = window['lodash']['get'];
  const { ChannelCode, SystemCode } = window['@sl/smart-payment'];
  const { formatMoneyWithoutCurrency, formatWithoutCurrency, getGroupSymbolByCode } = window['@sl/currency-tools-core'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { CHANNEL_CODE, METHOD_CODE, I18N_KEY_MAP, ERROR_TYPE, ACTION_TYPE } = window['SLM']['theme-shared/components/smart-payment/constants.js'];
  const { BrowserPreloadStateFields } = window['SLM']['theme-shared/const/preload-state-fields.js'];

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
    Cart: 'cart',
    MiniCart: 'MiniCart',
    Checkout: 'checkout'
  };
  _exports.PageType = PageType;

  const convertPageType = type => {
    if (type === PageType.MiniCart || type === 'Cart') {
      return PageType.Cart;
    }

    return type;
  };

  _exports.convertPageType = convertPageType;
  const ButtonType = {
    ExpressCheckoutButton: 'expressCheckoutButton',
    NormalButton: 'normalButton',
    FastCheckoutButton: 'fastCheckoutButton'
  };
  _exports.ButtonType = ButtonType;
  const ButtonName = {
    BUY_NOW: 'BUY_NOW',
    GOOGLE_PAY: 'GOOGLE_PAY',
    APPLE_PAY: 'APPLE_PAY',
    PAYPAL: 'PAYPAL'
  };
  _exports.ButtonName = ButtonName;
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
      if (!cartInfoSubscriptionInfo.existSubscription) return false;
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
  const ElementPlace = {
    Before: 'Before'
  };
  _exports.ElementPlace = ElementPlace;

  const createElement = ({
    id,
    parentId,
    attr,
    place
  }) => {
    if ($.contains(`#${parentId}`, `#${id}`)) {
      return;
    }

    const ele = $(`<div id=${id}>`);

    if (attr) {
      Object.keys(attr).forEach(item => {
        ele.attr(item, attr[item]);
      });
    }

    const parentEle = $(`#${parentId}`);

    if (place === ElementPlace.Before) {
      parentEle.prepend(ele);
    } else {
      parentEle.append(ele);
    }
  };

  _exports.createElement = createElement;

  const getPaymentInfo = pageType => {
    if (convertPageType(pageType) === PageType.Checkout) {
      return SL_State.get(`${BrowserPreloadStateFields.TRADE_CHECKOUT}.paymentButtonConfig`) || {};
    }

    return SL_State.get('paymentButtonConfig') || {};
  };

  _exports.getPaymentInfo = getPaymentInfo;

  const isNewExpressCheckout = pageType => {
    return getPaymentInfo(convertPageType(pageType)).newProcess;
  };

  _exports.isNewExpressCheckout = isNewExpressCheckout;

  const getExpressCheckoutList = ({
    pageType,
    buttonLocationDataList,
    isSubscription = false
  }) => {
    const pageData = buttonLocationDataList.find(item => item.buttonLocation === convertPageType(pageType));
    if (!pageData || !pageData.buttonTypeDataList || !isArray(pageData.buttonTypeDataList)) return [];
    const buttonConfig = pageData.buttonTypeDataList.find(item => item.buttonType === ButtonType.ExpressCheckoutButton);
    if (!buttonConfig || !isArray(buttonConfig.buttonNameDataList)) return [];
    const payments = buttonConfig.buttonNameDataList.map(item => {
      return item.buttonConfigData;
    }).filter(_ => !!_);

    if (isSubscription) {
      return payments.filter(item => item.methodCode === METHOD_CODE.Paypal);
    }

    return payments;
  };

  _exports.getExpressCheckoutList = getExpressCheckoutList;

  const getFastCheckoutList = ({
    pageType
  }) => {
    const {
      buttonLocationDataList
    } = getPaymentInfo(convertPageType(pageType));
    const buttonInfo = buttonLocationDataList.find(item => item.buttonLocation === convertPageType(pageType));
    if (!buttonInfo || !buttonInfo.buttonTypeDataList || !isArray(buttonInfo.buttonTypeDataList)) return [];
    const buttonConfig = buttonInfo.buttonTypeDataList.find(item => item.buttonType === ButtonType.FastCheckoutButton);
    if (!buttonConfig || !isArray(buttonConfig.buttonNameDataList)) return [];
    return buttonConfig.buttonNameDataList;
  };

  _exports.getFastCheckoutList = getFastCheckoutList;

  const getExpressCheckout = ({
    pageType,
    code
  }) => {
    const {
      newProcess,
      buttonLocationDataList
    } = getPaymentInfo(convertPageType(pageType));

    if (!newProcess) {
      return getPayments(code);
    }

    if (!buttonLocationDataList.length) return [];
    const payments = getExpressCheckoutList({
      pageType,
      buttonLocationDataList
    });
    if (!code) return payments;
    return payments.find(item => item.channelCode === code);
  };

  _exports.getExpressCheckout = getExpressCheckout;

  const getExpressCheckoutWithScenes = ({
    pageType,
    domId,
    code,
    scenes
  }) => {
    const payments = getExpressCheckout({
      pageType,
      code
    });
    const list = [];
    payments.forEach(item => {
      if (scenes && scenes.isSubscription) {
        if (item.methodCode === METHOD_CODE.Paypal) {
          list.push({ ...item,
            currentDomId: `${domId}_${item.methodCode}`
          });
        }

        return;
      }

      list.push({ ...item,
        currentDomId: `${domId}_${item.methodCode}`
      });
    });
    return list;
  };

  _exports.getExpressCheckoutWithScenes = getExpressCheckoutWithScenes;

  const handleResponseRedirect = data => {
    if (data.redirect && data.fullUri) {
      const url = `${window.location.protocol}//${window.location.host}${data.fullUri}`;
      window.location.href = url;
      return true;
    }

    return false;
  };

  _exports.handleResponseRedirect = handleResponseRedirect;

  const formatPayChannelData = (payChannelData, {
    expressCheckoutChannelInfo
  }) => {
    const newPayChannelData = { ...payChannelData
    };

    if (expressCheckoutChannelInfo.channelCode === CHANNEL_CODE.SLpayments) {
      if (expressCheckoutChannelInfo.methodCode === METHOD_CODE.GooglePay) {
        const {
          transactionInfo,
          newTransactionInfo
        } = newPayChannelData;
        const currency = (transactionInfo || newTransactionInfo).currencyCode;

        const formatTransactionInfo = transactionInfo => {
          const newTransactionInfo = { ...transactionInfo
          };
          const groupSymbol = getGroupSymbolByCode(currency);
          newTransactionInfo.totalPrice = formatMoneyWithoutCurrency(Number(newTransactionInfo.totalPrice), {
            code: currency
          }).replaceAll(groupSymbol, '');

          if (newTransactionInfo.displayItems && newTransactionInfo.displayItems.length) {
            newTransactionInfo.displayItems = newTransactionInfo.displayItems.map(item => ({ ...item,
              price: formatMoneyWithoutCurrency(Number(item.price), {
                code: currency
              }).replaceAll(groupSymbol, '')
            }));
          }

          return newTransactionInfo;
        };

        const formatShippingOptionParameters = shippingAddressParameters => {
          const newShippingAddressParameters = { ...shippingAddressParameters
          };

          if (newShippingAddressParameters.shippingOptions && newShippingAddressParameters.shippingOptions.length) {
            newShippingAddressParameters.shippingOptions = newShippingAddressParameters.shippingOptions.map(item => ({ ...item,
              description: `${currency}: ${formatWithoutCurrency(Number(item.description), {
                code: currency
              })}`
            }));
          }

          return newShippingAddressParameters;
        };

        if (newPayChannelData.newTransactionInfo) {
          newPayChannelData.newTransactionInfo = formatTransactionInfo(newPayChannelData.newTransactionInfo);
        }

        if (newPayChannelData.transactionInfo) {
          newPayChannelData.transactionInfo = formatTransactionInfo(newPayChannelData.transactionInfo);
        }

        if (newPayChannelData.newShippingOptionParameters) {
          newPayChannelData.newShippingOptionParameters = formatShippingOptionParameters(newPayChannelData.newShippingOptionParameters);
        }

        if (newPayChannelData.shippingOptionParameters) {
          newPayChannelData.shippingOptionParameters = formatShippingOptionParameters(newPayChannelData.shippingOptionParameters);
        }

        return newPayChannelData;
      }

      if (expressCheckoutChannelInfo.methodCode === METHOD_CODE.ApplePay) {
        const {
          paymentRequest
        } = newPayChannelData;
        const currency = paymentRequest.currencyCode;
        const groupSymbol = getGroupSymbolByCode(currency);

        const formatPrice = price => formatMoneyWithoutCurrency(Number(price), {
          code: currency
        }).replaceAll(groupSymbol, '');

        if (newPayChannelData.newShippingMethods && isArray(newPayChannelData.newShippingMethods)) {
          newPayChannelData.newShippingMethods = newPayChannelData.newShippingMethods.map(item => ({ ...item,
            amount: formatPrice(item.amount)
          }));
        }

        if (newPayChannelData.paymentRequest.shippingMethods && isArray(newPayChannelData.paymentRequest.shippingMethods)) {
          newPayChannelData.paymentRequest.shippingMethods = newPayChannelData.paymentRequest.shippingMethods.map(item => ({ ...item,
            amount: formatPrice(item.amount)
          }));
        }

        if (newPayChannelData.newTotal) {
          newPayChannelData.newTotal.amount = formatPrice(newPayChannelData.newTotal.amount);
        }

        if (newPayChannelData.paymentRequest.total) {
          newPayChannelData.paymentRequest.total.amount = formatPrice(newPayChannelData.paymentRequest.total.amount);
        }

        if (newPayChannelData.newLineItems && isArray(newPayChannelData.newLineItems)) {
          newPayChannelData.newLineItems = newPayChannelData.newLineItems.map(item => ({ ...item,
            amount: formatPrice(item.amount)
          }));
        }

        if (newPayChannelData.paymentRequest.lineItems && isArray(newPayChannelData.paymentRequest.lineItems)) {
          newPayChannelData.paymentRequest.lineItems = newPayChannelData.paymentRequest.lineItems.map(item => ({ ...item,
            amount: formatPrice(item.amount)
          }));
        }

        return newPayChannelData;
      }
    }

    return newPayChannelData;
  };

  _exports.formatPayChannelData = formatPayChannelData;

  const formatShippingLabel = (payChannelData, {
    expressCheckoutChannelInfo
  }) => {
    if (expressCheckoutChannelInfo.channelCode === CHANNEL_CODE.SLpayments) {
      const getShippingLabel = params => {
        if (!params) return;
        const {
          defaultSelectedOptionId,
          shippingOptions
        } = params;

        if (defaultSelectedOptionId && Array.isArray(shippingOptions)) {
          const option = shippingOptions.find(item => item.id === defaultSelectedOptionId);

          if (option) {
            return option.label;
          }
        }
      };

      return getShippingLabel(payChannelData.newShippingOptionParameters || payChannelData.shippingOptionParameters);
    }

    if (expressCheckoutChannelInfo.channelCode === CHANNEL_CODE.StripeOther) {
      if (Array.isArray(payChannelData.shippingOptions)) {
        const option = payChannelData.shippingOptions.find(item => item.selected);

        if (option) {
          return option.label;
        }
      }
    }
  };

  _exports.formatShippingLabel = formatShippingLabel;

  const getPageI18nText = (page, type) => {
    if (page === PageType.Checkout) {
      return t(I18N_KEY_MAP.checkout[type]) || '';
    }

    return t(I18N_KEY_MAP.themes[type]) || '';
  };

  _exports.getPageI18nText = getPageI18nText;

  const paymentToast = ({
    page,
    content,
    onError
  }) => {
    if (page === PageType.Checkout) {
      if (!isFn(onError)) return;
      onError(new Error('payment toast'), ACTION_TYPE.PullUpChannel, {
        code: ERROR_TYPE.InitFail,
        message: content
      });
      return;
    }

    Toast.init({
      content
    });
  };

  _exports.paymentToast = paymentToast;
  return _exports;
}();