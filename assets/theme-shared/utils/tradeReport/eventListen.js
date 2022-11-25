window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/tradeReport/eventListen.js'] = window.SLM['theme-shared/utils/tradeReport/eventListen.js'] || function () {
  const _exports = {};
  const { hidooRp } = window['SLM']['theme-shared/utils/tradeReport/hdReport.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const currencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { pageMap, cartPage, HdModule, HdComponent, pageMapV2, ActionType, HD_EVENT_NAME } = window['SLM']['theme-shared/utils/tradeReport/const.js'];
  const { reportV2Checkout, reportCoupon, reportEvent } = window['SLM']['theme-shared/utils/tradeReport/hdReportV2.js'];
  const {
    GO_TO_CHECKOUT,
    PAYPAL_CHECKOUT,
    COUPON_APPLY,
    COUPON_INPUT
  } = HD_EVENT_NAME;

  const reportPaypal = (data, cid, ext = {}) => {
    const products = data && data.map(item => ({
      product_id: item.productSeq,
      variantion_id: item.productSku,
      quantity: item.productNum,
      price: `${currencyUtil.formatNumber(Number(item && item.productPrice) || 0)}`,
      product_name: item.productName
    }));
    const page = 'cart';
    hidooRp.event({
      event_name: 'quick_payment',
      page,
      products,
      ...ext
    }, cid);
  };

  const proceedToCheckout = ({
    cid,
    event_status
  }) => {
    hidooRp.event({
      event_name: 'click_component',
      custom_component: ['proceed_to_checkout']
    }, cid);
    hidooRp.event({
      event_name: 'proceed_to_checkout',
      event_status
    }, cid);
  };

  const getIsMiniCart = (node, ele) => {
    const dom = $(node);
    const closest = dom && dom.closest(ele || '.trade_coupon__wrapper');
    const isMiniCart = closest && closest.hasClass('sidebar');
    return isMiniCart;
  };

  const couponInput = () => {
    SL_EventBus.on(COUPON_INPUT, ({
      data
    }) => {
      const {
        node,
        ele
      } = data;
      const isMiniCart = getIsMiniCart(node, ele);
      reportCoupon({
        page: isMiniCart ? pageMapV2.MiniCart : pageMapV2.Cart,
        module: HdModule.couponCode,
        component: HdComponent.couponCodeInput,
        action_type: ActionType.input
      });
    });
  };

  const couponApply = () => {
    SL_EventBus.on(COUPON_APPLY, ({
      data
    }) => {
      const {
        discountCode,
        node,
        ele
      } = data;
      const isMiniCart = getIsMiniCart(node, ele);
      reportCoupon({
        page: isMiniCart ? pageMapV2.MiniCart : pageMapV2.Cart,
        module: HdModule.couponCode,
        component: HdComponent.couponCodeUse,
        action_type: ActionType.click,
        coupon_code: discountCode
      });
    });
  };

  const reportBuyNow = () => {
    SL_EventBus.on(GO_TO_CHECKOUT, ({
      data
    }) => {
      const {
        event_status,
        isCart,
        stage,
        products
      } = data;

      if (isCart) {
        const cid = pageMap[stage];
        const page = pageMapV2[stage];

        if (page) {
          reportV2Checkout({
            page: pageMapV2[stage],
            module: HdModule.checkout,
            component: HdComponent.checkout,
            action_type: ActionType.click,
            products
          });
        }

        if (cid) {
          proceedToCheckout({
            cid,
            event_status
          });
        }
      }
    });
  };

  const quickPayment = () => {
    SL_EventBus.on(PAYPAL_CHECKOUT, ({
      data
    }) => {
      const {
        event_status,
        product,
        stage
      } = data;

      if (cartPage[stage]) {
        const cid = pageMap[stage];
        const page = pageMapV2[stage];

        if (page) {
          reportV2Checkout({
            page: pageMapV2[stage],
            module: HdModule.checkout,
            component: HdComponent.paypalBtn,
            action_type: ActionType.click,
            products: product
          });
        }

        reportPaypal(product, cid, {
          event_status
        });
      }
    });
  };

  const clickCarContinue = key => {
    const dom = document.querySelector(key);
    dom && dom.addEventListener('click', () => {
      const isCartPage = window.Shopline.uri.alias === 'Cart';

      if (isCartPage) {
        reportEvent({
          page: pageMapV2.Cart,
          module: HdModule.normal,
          component: HdComponent.continueShopping,
          action_type: ActionType.click
        });
      }
    });
  };

  const listenCartReport = () => {
    reportBuyNow();
    quickPayment();
    couponInput();
    couponApply();
    clickCarContinue('.trade-cart-non-empty-continue-btn');
  };

  _exports.listenCartReport = listenCartReport;
  return _exports;
}();