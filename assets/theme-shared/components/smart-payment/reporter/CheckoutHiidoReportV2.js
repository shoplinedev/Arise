window.SLM = window.SLM || {};

window.SLM['theme-shared/components/smart-payment/reporter/CheckoutHiidoReportV2.js'] = window.SLM['theme-shared/components/smart-payment/reporter/CheckoutHiidoReportV2.js'] || function () {
  const _exports = {};
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { ModuleType, ComponentType, ActionType, PageType, EventNameType } = window['SLM']['theme-shared/components/smart-payment/reporter/constants.js'];

  const conversionReport = data => {
    if (!window.HdSdk) return;
    window.HdSdk.shopTracker.collect(data);
  };

  const checkoutHiidoReportV2 = {
    reportConversionEvent(eventName, extra) {
      const {
        currency,
        orderAmount,
        productInfos,
        shipping_method
      } = extra;
      const standardParams = this.generateReportData(eventName, {
        currency,
        orderAmount,
        productInfos,
        shipping_method
      });
      conversionReport(standardParams);
    },

    reportAddPaymentInfo(extra) {
      const {
        currency,
        orderAmount,
        productInfos,
        payment_method,
        coupon_code,
        shipping_method,
        basicInfo
      } = extra;
      const standardParams = this.generateReportData(EventNameType.AddPaymentInfo, {
        currency,
        orderAmount,
        productInfos,
        basicInfo,
        shipping_method
      });
      const params = { ...standardParams,
        payment_method,
        coupon_code
      };
      conversionReport(params);
    },

    generateReportData(eventType, extra) {
      if (!eventType) return;
      const productData = this.generateProductParams(eventType, {
        productInfos: extra.productInfos
      });
      const price = extra.orderAmount;
      const reportData = {
        page: PageType.Other,
        component: ComponentType.Other,
        module: ModuleType.FastCheckout,
        action_type: ActionType.Other,
        billing_address_status: 1,
        event_name: eventType,
        value: currencyUtil.formatNumber(price).toString(),
        currency: extra.currency,
        referral_code: '',
        ...productData,
        payment_method: extra.payment_method,
        coupon_code: '',
        shipping_method: extra.shipping_method
      };

      if (eventType === EventNameType.AddPaymentInfo) {
        const tradeAttributeInfo = sessionStorage.getItem('tradeAttributeInfo');

        if (tradeAttributeInfo) {
          const {
            referralCode
          } = JSON.parse(tradeAttributeInfo) || {};
          reportData.referral_code = referralCode ? referralCode.value : undefined;
        }
      } else {
        delete reportData.referral_code;
        delete reportData.payment_method;
        delete reportData.coupon_code;
      }

      if (eventType !== EventNameType.AddPaymentInfo) {
        delete reportData.billing_address_status;
      }

      if (eventType !== EventNameType.AddShippingInfo) {
        delete reportData.shipping_method;
      }

      return reportData;
    },

    generateProductParams(eventType, {
      productInfos
    }) {
      const content_ids = new Set();
      const variantion_id = [];
      let quantity = 0;
      productInfos.forEach(item => {
        quantity += item.productNum;
        variantion_id.push(item.productSku);
        content_ids.add(item.productSeq);
      });
      const res = {
        content_ids: [...content_ids.values()].join(','),
        variantion_id: variantion_id.join(','),
        quantity: quantity.toString()
      };
      return res;
    }

  };
  _exports.checkoutHiidoReportV2 = checkoutHiidoReportV2;
  return _exports;
}();