window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/index.js'] = window.SLM['theme-shared/components/smart-payment/index.js'] || function () {
  const _exports = {};
  const { Payment, PayMode, Paypal, mergeParams, getClientInfo } = window['@sl/smart-payment'];
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const HidooTracker = window['@yy/sl-ec-tracker']['/lib/tracker/baseParams'].default;
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { isFn, getExpressCheckoutWithScenes, handleResponseRedirect, isNewExpressCheckout, formatPayChannelData, formatShippingLabel, getPageI18nText, paymentToast, getFastCheckoutList } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const { CHANNEL_CODE, METHOD_CODE, BUY_SCENE_MAP, PROCESSING_DATA_SESSION_KEY, ACTION_TYPE, ERROR_TYPE, SERVER_ERROR_CODE, SERVER_ERROR_MSG, ErrorDiscountCode } = window['SLM']['theme-shared/components/smart-payment/constants.js'];
  const { getFirstLoadConfig, expressDetail, expressCreate } = window['SLM']['theme-shared/components/smart-payment/services.js'];
  const { checkoutHiidoReportV2 } = window['SLM']['theme-shared/components/smart-payment/reporter/CheckoutHiidoReportV2.js'];
  const { EventNameType } = window['SLM']['theme-shared/components/smart-payment/reporter/constants.js'];
  const { thirdPartReportOrderStart, thirdPartReportPaymentInfo, thirdPartReportOrderCompleteStep } = window['SLM']['theme-shared/components/smart-payment/reporter/ThirdPartReport.js'];
  const {
    PAYPAL_CHECKOUT
  } = HD_EVENT_NAME;
  const logger = loggerService.pipeOwner('SmartPayment');
  const loggerPrefix = '[shared]快速支付SDK';

  class SmartPayment {
    constructor(config) {
      this.config = config;
    }

    async renderSmartPayment(list) {
      let payments = list || getExpressCheckoutWithScenes({
        pageType: this.config.pageType,
        domId: this.config.props.domId,
        scenes: {
          isSubscription: this.config.props.isSubscription
        }
      });

      if (!(payments && Array.isArray(payments)) || payments.length === 0) {
        logger.info(`${loggerPrefix} payments入参`, {
          data: {
            payments
          }
        });
        return;
      }

      if (!isNewExpressCheckout(this.config.pageType)) {
        payments = payments.map(item => ({ ...item,
          currentDomId: this.config.props.domId
        }));
      }

      let abandonedOrderInfo = null;
      let expressCheckoutChannelInfo = null;
      let basicInfo = null;
      let otherInfo = null;
      let buyerInfo = null;
      let marketInfo = null;
      let passThrough = '';
      let priceInfo = null;
      let productInfos = null;
      let shippingMethodName = '';
      const clientInfo = getClientInfo();

      const updateCreateOrderParams = data => {
        basicInfo = data.basicInfo;
        otherInfo = data.otherInfo;
        buyerInfo = data.buyerInfo;
        marketInfo = data.marketInfo;
        passThrough = data.passThrough;

        if (data.priceInfo) {
          priceInfo = data.priceInfo;
        }

        if (data.productInfos) {
          productInfos = data.productInfos;
        }
      };

      const config = mergeParams(this.config, {
        language: SL_State.get('request.locale') || 'en',
        payments,
        beforeCreateOrder: async ({
          channelCode,
          methodCode,
          paymentId
        }) => {
          if (!this.config.beforeCreateOrder) {
            return {
              valid: false
            };
          }

          try {
            const beforeCreateOrderRes = await this.config.beforeCreateOrder();

            if (beforeCreateOrderRes.valid === false) {
              return beforeCreateOrderRes;
            }

            const returnValue = { ...beforeCreateOrderRes
            };
            const {
              abandonedOrderInfo: abandonedInfo
            } = returnValue;

            if ((channelCode === CHANNEL_CODE.SLpayments || channelCode === CHANNEL_CODE.StripeOther) && (methodCode === METHOD_CODE.ApplePay || methodCode === METHOD_CODE.GooglePay)) {
              const {
                seq,
                mark,
                checkoutToken
              } = abandonedInfo;
              abandonedOrderInfo = {
                seq,
                mark,
                checkoutToken
              };
              expressCheckoutChannelInfo = {
                channelCode,
                methodCode,
                paymentId,
                storeWebsiteUrl: window.location.origin
              };
              const params = {
                abandonedOrderInfo: {
                  seq,
                  checkoutToken,
                  abandonedOrderType: 'SETTLE',
                  orderFrom: 'MAIN_SITE'
                },
                expressCheckoutChannelInfo,
                otherInfo: {
                  buyScence: BUY_SCENE_MAP[this.config.pageType]
                }
              };
              const firstLoadRes = await getFirstLoadConfig(params);

              if (firstLoadRes.data) {
                if (handleResponseRedirect(firstLoadRes.data)) return {
                  valid: false
                };
                updateCreateOrderParams(firstLoadRes.data);
                const paymentConfig = { ...firstLoadRes.data
                };
                paymentConfig.payChannelData = formatPayChannelData(paymentConfig.payChannelData, {
                  expressCheckoutChannelInfo
                });
                shippingMethodName = formatShippingLabel(paymentConfig.payChannelData, {
                  expressCheckoutChannelInfo
                });
                returnValue.paymentConfig = paymentConfig;
              }
            }

            return returnValue;
          } catch (error) {
            if (error.code === SERVER_ERROR_CODE.NoShippingOption) {
              paymentToast({
                page: this.config.pageType,
                content: getPageI18nText(this.config.pageType, ERROR_TYPE.NoShippingOption),
                onError: this.config.onError
              });
            } else {
              paymentToast({
                page: this.config.pageType,
                content: getPageI18nText(this.config.pageType, ERROR_TYPE.InitFail),
                onError: this.config.onError
              });
            }

            return {
              valid: false
            };
          }
        },
        onChannelModalSuccess: () => {
          try {
            const amount = priceInfo.originalSettleSumAmount || priceInfo.orderAmount;
            const currency = marketInfo.marketCurrencyCode;
            thirdPartReportOrderStart({
              seq: abandonedOrderInfo.seq,
              amount,
              productInfos
            });
            checkoutHiidoReportV2.reportConversionEvent(EventNameType.InitiateCheckout, {
              payment_method: expressCheckoutChannelInfo.channelCode,
              coupon_code: basicInfo.discountCode,
              currency,
              orderAmount: amount,
              productInfos,
              basicInfo,
              otherInfo
            });
          } catch (error) {
            logger.error(`${loggerPrefix} 上报出错`, {
              error
            });
          }
        },
        onFormDataChange: async (updateData, action) => {
          const params = {
            abandonedOrderInfo,
            expressCheckoutChannelInfo,
            basicInfo: { ...basicInfo,
              action
            },
            otherInfo,
            buyerInfo,
            payChannelData: updateData,
            passThrough
          };
          const detailRes = await expressDetail(params).catch(err => {
            logger.error('快捷支付更新弃单失败', {
              error: new Error(),
              data: {
                error: err,
                params
              }
            });
            const error = {
              code: ERROR_TYPE.UpdateFail,
              message: getPageI18nText(this.config.pageType, ERROR_TYPE.UpdateFail)
            };

            if (err.code === SERVER_ERROR_CODE.NoShippingOption) {
              error.message = getPageI18nText(this.config.pageType, ERROR_TYPE.NoShippingOption);
            }

            if (err.code === SERVER_ERROR_CODE.DiscountCode && ErrorDiscountCode.includes(err.msg)) {
              error.message = getPageI18nText(this.config.pageType, ERROR_TYPE.InvalidDiscountCode);
            }

            if (err.code === SERVER_ERROR_CODE.DiscountCode && err.msg === SERVER_ERROR_MSG.DISCOUNT_CODE_REPEAT) {
              error.message = getPageI18nText(this.config.pageType, ERROR_TYPE.DiscountCodeExists);
            }

            return {
              error
            };
          });
          if (detailRes.error || !detailRes.data) return detailRes;
          if (handleResponseRedirect(detailRes.data)) return;
          updateCreateOrderParams(detailRes.data);
          const payChannelData = formatPayChannelData(detailRes.data.payChannelData, {
            expressCheckoutChannelInfo
          });
          shippingMethodName = formatShippingLabel(payChannelData, {
            expressCheckoutChannelInfo
          });
          return payChannelData;
        },
        createOrder: async ({
          payChannelData,
          token
        }) => {
          let dfpToken = '';

          if (window.__DF__ && typeof window.__DF__.getToken === 'function') {
            dfpToken = window.__DF__.getToken();
          }

          const {
            sid = '',
            createAt = Date.now()
          } = HidooTracker.getSessionId() || {};
          let dataId = '';

          if (window.HdSdk && window.HdSdk.shopTracker && typeof window.HdSdk.shopTracker.getDataId === 'function') {
            dataId = window.HdSdk.shopTracker.getDataId();
          }

          const addPaymentInfoEventId = `addPaymentInfo${getEventID()}`;
          const params = {
            abandonedOrderInfo,
            expressCheckoutChannelInfo,
            basicInfo,
            otherInfo: { ...otherInfo,
              dfpToken
            },
            buyerInfo,
            marketInfo,
            passThrough,
            payChannelData,
            instrumentOption: token,
            sessionInfo: {
              sessionId: sid,
              sessionCreateTime: createAt
            },
            dataReportReq: {
              eventName: 'AddPaymentInfo',
              dataId,
              eventTime: Date.now(),
              eventId: addPaymentInfoEventId,
              currency: marketInfo.marketCurrencyCode,
              payAmount: priceInfo.originalSettleSumAmount
            },
            clientInfo
          };
          const createRes = await expressCreate(params).catch(error => {
            logger.error('快捷支付下单失败', {
              error: new Error(),
              data: {
                error,
                params
              }
            });
            return {
              error: {
                code: ERROR_TYPE.CreateFail,
                message: getPageI18nText(this.config.pageType, ERROR_TYPE.CreateFail)
              }
            };
          });
          if (createRes.error || !createRes.data) return createRes;
          if (handleResponseRedirect(createRes.data)) return;

          try {
            thirdPartReportOrderCompleteStep({
              amount: priceInfo.originalSettleSumAmount,
              productInfos,
              shipping_method: shippingMethodName
            });
            thirdPartReportPaymentInfo({
              eventId: addPaymentInfoEventId,
              amount: priceInfo.originalSettleSumAmount,
              price: priceInfo.productSumAmount,
              productInfos,
              channelCode: expressCheckoutChannelInfo.channelCode
            });
            const amount = priceInfo.originalSettleSumAmount || priceInfo.orderAmount;
            const currency = marketInfo.marketCurrencyCode;
            const reportData = {
              payment_method: expressCheckoutChannelInfo.channelCode,
              shipping_method: shippingMethodName,
              coupon_code: basicInfo.discountCode,
              currency,
              orderAmount: amount,
              productInfos: createRes.data.productInfos || [],
              basicInfo,
              otherInfo
            };
            checkoutHiidoReportV2.reportConversionEvent(EventNameType.AddCustomerInfo, reportData);
            checkoutHiidoReportV2.reportConversionEvent(EventNameType.AddShippingInfo, reportData);
            checkoutHiidoReportV2.reportAddPaymentInfo(reportData);
          } catch (error) {
            logger.error(`${loggerPrefix} 上报出错`, {
              error
            });
          }

          try {
            const {
              orderMark,
              orderSeq,
              transactionId,
              paySeq,
              nextAction: nextActionJson
            } = createRes.data;
            const orderInfo = {
              orderMark,
              orderSeq,
              transactionId,
              paySeq,
              abOrderSeq: abandonedOrderInfo.seq,
              abOrderMark: abandonedOrderInfo.mark
            };
            sessionStorage.setItem(PROCESSING_DATA_SESSION_KEY, JSON.stringify(orderInfo));
            const nextAction = JSON.parse(nextActionJson);
            return {
              nextAction
            };
          } catch (error) {
            logger.error('快捷支付下单，解析数据失败', {
              error: new Error(),
              data: {
                error,
                ...createRes.data
              }
            });
          }
        },
        afterCreateOrder: (status, paymentInfo) => {
          if (paymentInfo.channelCode === CHANNEL_CODE.Paypal) {
            SL_EventBus.emit(PAYPAL_CHECKOUT, {
              data: {
                event_status: status,
                ...this.config.emitData
              }
            });
          }

          if (isFn(this.config.afterCreateOrder)) {
            this.config.afterCreateOrder(status);
          }
        },
        onError: (error, type, extData) => {
          if (type === ACTION_TYPE.PullUpChannel) {
            paymentToast({
              page: this.config.pageType,
              content: getPageI18nText(this.config.pageType, ERROR_TYPE.InitFail),
              onError: this.config.onError
            });
          }

          if (type === ACTION_TYPE.Pay && extData.channelCode === CHANNEL_CODE.Paypal) {
            paymentToast({
              page: this.config.pageType,
              content: getPageI18nText(this.config.pageType, ERROR_TYPE.CreateFail),
              onError: this.config.onError
            });
          }

          if (isFn(this.config.onError)) {
            this.config.onError(error, type, extData);
          }
        },
        loggerFn: () => loggerService.pipeOwner('SmartPayment'),
        onAllButtonsInitFail: () => {
          if (!isNewExpressCheckout(this.config.pageType) || this.hasAllButtonsInitFail) return;
          const fcButtonList = getFastCheckoutList({
            pageType: this.config.pageType
          });
          if (fcButtonList && fcButtonList.length) return;

          if (isFn(this.config.onAllButtonsInitFail)) {
            this.config.onAllButtonsInitFail();
            this.hasAllButtonsInitFail = true;
          }
        }
      });
      this.currentController = new Payment(config);
      await this.currentController.render();
      return this.currentController;
    }

    async init() {
      await this.renderSmartPayment();
    }

    rerender(list = []) {
      const payments = list.map(item => ({ ...item,
        currentDomId: `${this.config.props.domId}_${item.methodCode}`
      }));

      if (this.currentController) {
        this.currentController.rerender(payments);
      } else {
        this.renderSmartPayment(payments);
      }
    }

    setDisabled(disabled) {
      this.currentController && this.currentController.setDisabled(disabled);
    }

  }

  _exports.SmartPayment = SmartPayment;
  _exports.Payment = Payment;
  _exports.Paypal = Paypal;
  _exports.PayMode = PayMode;
  _exports.mergeParams = mergeParams;
  return _exports;
}();