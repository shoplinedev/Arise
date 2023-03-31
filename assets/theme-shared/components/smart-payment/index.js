window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/index.js'] = window.SLM['theme-shared/components/smart-payment/index.js'] || function () {
  const _exports = {};
  const { Payment, PayMode, PaymentProps, Paypal, mergeParams } = window['@sl/smart-payment'];
  const loggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const HidooTracker = window['@yy/sl-ec-tracker']['/lib/tracker/baseParams'].default;
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const Cookies = window['js-cookie']['default'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { isFn, getExpressCheckoutWithScenes, handleResponseRedirect, isNewExpressCheckout, formatPayChannelData, getPageI18nText, paymentToast } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const { CHANNEL_CODE, METHOD_CODE, BUY_SCENE_MAP, PROCESSING_DATA_SESSION_KEY, ACTION_TYPE, ERROR_TYPE, I18N_APPLEPAY_KEY, SERVER_ERROR_CODE, SERVER_ERROR_MSG, ErrorDiscountCode } = window['SLM']['theme-shared/components/smart-payment/constants.js'];
  const { getFirstLoadConfig, expressDetail, expressCreate } = window['SLM']['theme-shared/components/smart-payment/services.js'];
  const {
    PAYPAL_CHECKOUT
  } = HD_EVENT_NAME;
  const logger = loggerService.pipeOwner('SmartPayment');
  const loggerPrefix = '[shared]快速支付SDK';

  class SmartPayment {
    constructor(config) {
      this.config = config;
    }

    async renderSmartPayment() {
      let payments = getExpressCheckoutWithScenes({
        pageType: this.config.pageType,
        domId: this.config.props.domId,
        scenes: {
          isSubscription: this.config.props.isSubscription
        }
      });

      if (!(payments && Array.isArray(payments))) {
        logger.error(`${loggerPrefix} payments入参非法`, {
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
      } else {
        payments = payments.map(item => {
          if (item.methodCode === METHOD_CODE.ApplePay) {
            return { ...item,
              i18n: {
                enquireContent: getPageI18nText(this.config.pageType, I18N_APPLEPAY_KEY.ENQUIRE),
                payContent: getPageI18nText(this.config.pageType, I18N_APPLEPAY_KEY.PAYWITH),
                cancelContent: getPageI18nText(this.config.pageType, I18N_APPLEPAY_KEY.CANCEL)
              }
            };
          }

          return item;
        });
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

            if (channelCode === CHANNEL_CODE.SLpayments && (methodCode === METHOD_CODE.ApplePay || methodCode === METHOD_CODE.GooglePay)) {
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
            let fbDataEventId = '';
            const fbData = JSON.parse(Cookies.get(`${abandonedOrderInfo.seq}_fb_data`) || '{}');

            if (fbData && fbData.ed) {
              fbDataEventId = fbData.ed;
            } else {
              fbDataEventId = getEventID();
            }

            const eventId = `initiateCheckout${fbDataEventId}`;
            const price = priceInfo.originalSettleSumAmount || priceInfo.orderAmount;
            const currency = SL_State.get('currencyCode');
            let quantity = 0;
            let spuIds = [];
            const skuIds = [];

            try {
              spuIds = productInfos.map(item => {
                quantity += item.productNum;
                skuIds.push(item.productSku);
                return item.productSeq;
              });
            } catch (error) {
              throw new Error(`上报发生错误: ${error.message}`);
            }

            spuIds = Array.from(new Set(spuIds));
            const params = {
              GA: [['event', 'begin_checkout', {
                value: price,
                currency,
                items: productInfos.map(item => {
                  return {
                    id: item.itemNo || item.productSku,
                    name: item.productName,
                    quantity: item.productNum,
                    price: String(currencyUtil.formatNumber(item.finalPrice)),
                    variant: (item.productSkuAttrList || []).join(','),
                    category: item.customCategoryName
                  };
                })
              }]],
              GA4: [['event', 'begin_checkout', {
                value: price,
                currency,
                items: productInfos.map(item => {
                  return {
                    item_id: item.itemNo || item.productSku,
                    item_name: item.productName,
                    quantity: item.productNum,
                    price: currencyUtil.formatCurrency(item.finalPrice || 0),
                    item_variant: (item.productSkuAttrList || []).join(','),
                    item_category: item.customCategoryName
                  };
                })
              }]],
              GAAds: [['event', 'conversion', {
                currency,
                value: price
              }, 'VISIT-SETTLE-PAGE'], ['event', 'conversion', {
                currency,
                value: price
              }]],
              FBPixel: [['track', 'InitiateCheckout', {
                content_type: 'product_group',
                content_ids: spuIds,
                value: price,
                num_items: quantity,
                currency
              }, {
                eventID: eventId
              }]]
            };
            SL_EventBus.emit && SL_EventBus.emit('global:thirdPartReport', params);
            window.Shopline.Analytics.track({
              name: 'orderStart',
              payload: {
                eventId,
                value: price,
                list: (productInfos || []).map(item => {
                  return {
                    spuId: item.productSeq,
                    skuId: item.productSku,
                    skuItemNo: item.itemNo,
                    title: item.productName,
                    variant: (item.productSkuAttrList || []).join(','),
                    price: item.finalPrice,
                    quantity: item.productNum,
                    category: item.customCategoryName
                  };
                })
              }
            });
            const content_ids = new Set();
            const variantion_id = [];
            productInfos.forEach(item => {
              variantion_id.push(item.productSku);
              content_ids.add(item.productSeq);
            });
            const reportData = {
              page: -999,
              component: -999,
              module: 158,
              action_type: -999,
              event_name: 'InitiateCheckout',
              value: currencyUtil.formatNumber(price).toString(),
              currency: SL_State.get('currencyCode'),
              content_ids: [...content_ids.values()].join(','),
              variantion_id: variantion_id.join(','),
              quantity: quantity.toString()
            };
            if (!window.HdSdk) return;
            window.HdSdk.shopTracker.collect(reportData);
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

          const {
            userAgent,
            language
          } = window.navigator;
          const {
            colorDepth,
            width,
            height
          } = window.screen;
          const javaEnabled = window.navigator.javaEnabled().toString();
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
              eventId: `addPaymentInfo${getEventID()}`,
              currency: marketInfo.marketCurrencyCode
            },
            clientInfo: {
              transactionWebSite: window.location.href,
              javaEnabled,
              colorDepth: colorDepth.toString(),
              screenHeight: width.toString(),
              screenWidth: height.toString(),
              timeZoneOffset: new Date().getTimezoneOffset().toString(),
              accept: 'application/json',
              userAgent,
              language,
              javaScriptEnabled: 'true'
            }
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
        afterCreateOrder: status => {
          SL_EventBus.emit(PAYPAL_CHECKOUT, {
            data: {
              event_status: status,
              ...this.config.emitData
            }
          });

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

          if (isFn(this.config.onError)) {
            this.config.onError(error, type, extData);
          }
        },
        logger
      });
      this.currentController = new Payment(config);
      await this.currentController.render();
      return this.currentController;
    }

    async init() {
      await this.renderSmartPayment();
    }

    rerender() {
      this.currentController.rerender();
    }

    setDisabled(disabled) {
      this.currentController && this.currentController.setDisabled(disabled);
    }

  }

  _exports.SmartPayment = SmartPayment;
  _exports.Payment = Payment;
  _exports.Paypal = Paypal;
  _exports.PayMode = PayMode;
  _exports.PaymentProps = PaymentProps;
  _exports.mergeParams = mergeParams;
  return _exports;
}();