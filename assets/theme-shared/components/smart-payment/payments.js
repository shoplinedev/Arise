window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/payments.js'] = window.SLM['theme-shared/components/smart-payment/payments.js'] || function () {
  const _exports = {};
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const checkout = window['SLM']['theme-shared/utils/checkout.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { getSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const qs = window['query-string']['*'];
  const { SmartPayment, mergeParams } = window['SLM']['theme-shared/components/smart-payment/index.js'];
  const { newExpressCheckoutButton } = window['SLM']['theme-shared/components/payment-button/express_checkout.js'];
  const { getSubscription, getPurchaseSDKCheckoutData, PageType, HandleClassType, createElement, isFn, isNewExpressCheckout, paymentToast, getPageI18nText } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { ERROR_TYPE } = window['SLM']['theme-shared/components/smart-payment/constants.js'];
  const { BrowserPreloadStateFields } = window['SLM']['theme-shared/const/preload-state-fields.js'];
  const PaymentUpdate = 'Payment::Update';
  const CartUpdate = 'Cart::CartDetailUpdate';
  const logger = loggerService.pipeOwner('SmartPayment');
  const loggerPrefix = '[shared]快速支付业务';

  class Payments {
    constructor(config) {
      this.config = config;
      this.instanceMap = {};
      this.expressCheckoutButtonList = [];
      this.isSubscription = getSubscription(config.pageType);
      this.parentId = config.props.domId;
      this.elementId = `${config.props.domId}_normal`;
      this.subscriptionElementId = `${config.props.domId}_subscription`;
      this.hasDynamicNotify = false;
      this.hasAllButtonsInitFail = false;
      this.returnUrl = '';
      this.addListener();
    }

    get currentId() {
      return this.isSubscription ? this.subscriptionElementId : this.elementId;
    }

    renderElement(dom) {
      createElement({
        id: dom.id,
        parentId: this.parentId
      });

      if (isNewExpressCheckout(this.config.pageType)) {
        this.expressCheckoutButtonList.push(newExpressCheckoutButton({
          domId: dom.id,
          pageType: this.config.pageType,
          isSubscription: dom.isSubscription
        }));
      }
    }

    initRender() {
      const subObj = {
        id: this.subscriptionElementId,
        isSubscription: true
      };
      const normalObj = {
        id: this.elementId,
        isSubscription: false
      };

      const handleDom = domIdList => {
        domIdList.forEach(dom => {
          this.renderElement(dom);
        });
        return domIdList;
      };

      if (this.config.pageType === PageType.Cart) {
        return this.isSubscription ? handleDom([subObj]) : handleDom([normalObj]);
      }

      if (this.config.pageType === PageType.ProductDetail) {
        const res = this.isSubscription ? handleDom([subObj, normalObj]) : handleDom([normalObj]);

        if (this.isSubscription) {
          this.isSubscription = undefined;
          this.setDisplay({
            action: HandleClassType.Add
          });
        }

        return res;
      }

      return handleDom([normalObj]);
    }

    async init() {
      for (const item of this.initRender()) {
        await this.render(item);
      }

      if (isNewExpressCheckout(this.config.pageType)) {
        this.expressCheckoutButtonList.forEach(item => item.removeSkeleton());
      }
    }

    async render(item) {
      const config = mergeParams(this.config, {
        props: {
          currency: window.Shopline.currency,
          domId: item.id,
          isSubscription: item.isSubscription,
          scriptParams: item.isSubscription ? {
            'data-namespace': 'subscriptionDynamicPaypal'
          } : null
        },
        beforeCreateOrder: async () => {
          if (this.config.beforeCreateOrder) {
            const res = await this.config.beforeCreateOrder();
            logger.info(`${loggerPrefix} beforeCreateOrder 入参`, res);
            return res;
          }

          try {
            const checkoutParams = await this.config.setCheckoutParams();
            let valid = true;
            let products;
            logger.info(`${loggerPrefix} beforeCreateOrder 此时的订阅状态`, {
              data: {
                item
              }
            });

            if (item.isSubscription && this.config.pageType === PageType.ProductDetail) {
              const res = await getPurchaseSDKCheckoutData(checkoutParams.productButtonId).catch(error => {
                logger.error(`${loggerPrefix} 获取订阅商品信息失败`, {
                  error
                });
                valid = false;
              });
              products = res.products;
            } else {
              products = checkoutParams.products;
            }

            if (!valid) {
              return {
                valid
              };
            }

            const {
              extra
            } = checkoutParams;
            logger.info(`${loggerPrefix} beforeCreateOrder setCheckoutParams`, {
              data: {
                products,
                extra
              }
            });
            const {
              url: returnUrl,
              needLogin,
              abandonedInfo
            } = await checkout.save(products, extra);

            if (needLogin) {
              window.location.href = returnUrl;
              return {
                valid: false
              };
            }

            this.returnUrl = returnUrl;
            const {
              orderFrom
            } = SL_State.get(`${BrowserPreloadStateFields.TRADE_CHECKOUT}.otherInfo`) || {};
            return {
              abandonedOrderInfo: abandonedInfo,
              orderFrom: getSyncData('orderFrom') || orderFrom,
              returnUrl
            };
          } catch (error) {
            paymentToast({
              page: this.config.pageType,
              content: getPageI18nText(this.config.pageType, ERROR_TYPE.CreateFail)
            });
            return {
              valid: false
            };
          }
        },
        onDynamicNotify: data => {
          if (isNewExpressCheckout(this.config.pageType)) {
            return;
          }

          if (this.hasDynamicNotify) {
            return;
          }

          if (isFn(this.config.onDynamicNotify)) {
            this.config.onDynamicNotify(data);
            this.hasDynamicNotify = true;
          }
        },
        onError: (error, type, extData) => {
          if (type === 'createExpected') {
            const url = qs.exclude(this.returnUrl, ['spb']);
            logger.warn(`${loggerPrefix} 下单异常，跳到结算页`, {
              data: {
                url
              }
            });
            window.location.href = url;
            return;
          }

          if (isFn(this.config.onError)) {
            this.config.onError(error, type, extData);
          }
        }
      });
      this.instanceMap[item.id] = new SmartPayment(config);
      this.instanceMap[item.id] && (await this.instanceMap[item.id].init());
    }

    setDisabled(active) {
      logger.info(`${loggerPrefix} setDisabled`, {
        data: {
          active
        }
      });

      if (!active) {
        Object.keys(this.instanceMap).forEach(item => {
          this.instanceMap[item] && this.instanceMap[item].setDisabled(true);
        });
        return;
      }

      Object.keys(this.instanceMap).forEach(item => {
        this.instanceMap[item] && this.instanceMap[item].setDisabled(false);
      });
    }

    setDisplay({
      action,
      isSubscription
    }) {
      logger.info(`${loggerPrefix} 展示和隐藏PayPal按钮`, {
        data: {
          action,
          isSubscription
        }
      });

      const handleClass = (ele, action) => {
        const currentEle = document.getElementById(ele);

        if (currentEle) {
          if (action === HandleClassType.Add) {
            currentEle.style.display = 'none';
          }

          if (action === HandleClassType.Remove) {
            currentEle.style.display = 'block';
          }
        }
      };

      if (action) {
        handleClass(this.elementId, action);
        handleClass(this.subscriptionElementId, action);
        return;
      }

      handleClass(this.elementId, isSubscription ? HandleClassType.Add : HandleClassType.Remove);
      handleClass(this.subscriptionElementId, isSubscription ? HandleClassType.Remove : HandleClassType.Add);
    }

    addListener() {
      const changeStatus = async (isSubscription, from) => {
        const currentId = isSubscription ? this.subscriptionElementId : this.elementId;
        logger.log(`${loggerPrefix} 监听到更新事件 ${from}`, {
          data: {
            newSubscription: isSubscription,
            isSubscription: this.isSubscription,
            currentId
          }
        });
        if (isSubscription === this.isSubscription) return;

        if (!this.instanceMap[currentId]) {
          const item = {
            id: currentId,
            isSubscription
          };
          logger.info(`${loggerPrefix} 监听到更新事件 ${from}, 需插入dom`, {
            data: {
              item
            }
          });
          this.renderElement(item);
          await this.render(item);
        }

        this.setDisplay({
          isSubscription
        });
        this.isSubscription = isSubscription;
      };

      if (this.config.pageType === PageType.ProductDetail) {
        let timer = null;
        window.Shopline.event.on(PaymentUpdate, async ({
          isSubscription
        }) => {
          clearTimeout(timer);
          timer = null;
          await changeStatus(isSubscription, PaymentUpdate);
        });
        timer = setTimeout(async () => {
          this.setDisplay({
            isSubscription: false
          });
          this.isSubscription = false;
        }, 5000);
      }

      if (this.config.pageType === PageType.Cart) {
        window.Shopline.event.on(CartUpdate, async data => {
          if (data.subscriptionInfo) {
            const isSubscription = !(data.subscriptionInfo.existSubscription === false);
            await changeStatus(isSubscription, CartUpdate);
          }
        });
      }
    }

  }

  _exports.Payments = Payments;
  _exports.PageType = PageType;
  _exports.HandleClassType = HandleClassType;
  return _exports;
}();