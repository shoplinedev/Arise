window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/index.js'] = window.SLM['theme-shared/components/payment-button/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getAttrs, PAYMENT_BUTTON_COMMON__STYLE_ID, PAYMENT_BUTTON_COMMON_ANIMATED, PAYMENT_BUTTON_COMMON_ITEM, getNormalDomId, getExpressCheckoutDomId, getConfig } = window['SLM']['theme-shared/components/payment-button/utils.js'];
  const { PageType, ButtonType, ButtonName, convertPageType } = window['SLM']['theme-shared/components/smart-payment/utils.js'];

  class PaymentButton {
    constructor(config) {
      this.config = { ...config,
        pageType: convertPageType(config.pageType)
      };
      this.domId = config.pageType === PageType.Checkout ? config.id : `payment_button_${config.id}`;
      this.list = getConfig(this.config.pageType);
      this.renderDomIdMap = {};
      this.handleCommonElement();
      this.render();
    }

    getRenderId() {
      return this.renderDomIdMap;
    }

    handleCommonElement() {
      if (document.getElementById(PAYMENT_BUTTON_COMMON__STYLE_ID)) return;
      const styleTag = document.createElement('style');
      styleTag.setAttribute('id', PAYMENT_BUTTON_COMMON__STYLE_ID);
      styleTag.innerHTML = `
    .${PAYMENT_BUTTON_COMMON_ANIMATED} {
        height: 48px;
        background: linear-gradient(
          90deg,
          hsla(0, 0%, 74.5%, 0.2) 25%,
          hsla(0, 0%, 50.6%, 0.24) 37%,
          hsla(0, 0%, 74.5%, 0.2) 63%
        );
        background-size: 400% 100%;
        animation: skeleton 2s linear infinite;
      }
      .${PAYMENT_BUTTON_COMMON_ANIMATED}-hidden {
        display: none !important;
      }
      @media screen and (max-width: 999px) {
        .${PAYMENT_BUTTON_COMMON_ANIMATED} {
          height: 55px;
        }
      }
      .${PAYMENT_BUTTON_COMMON_ITEM} {
        margin-bottom: 10px;
        position: relative;
      }
      .${PAYMENT_BUTTON_COMMON_ITEM}:last-child {
        margin-bottom: 0;
      }
      .${PAYMENT_BUTTON_COMMON_ITEM}:empty {
        display: none;
      }
    `;
      document.body.appendChild(styleTag);
    }

    render() {
      const parentDom = document.getElementById(this.domId);

      if (!parentDom) {
        return;
      }

      const dataAttr = parentDom.getAttribute('data-attr');

      if (dataAttr) {
        this.domAttr = getAttrs(dataAttr) || {};
      }

      switch (this.config.pageType) {
        case PageType.ProductDetail:
          this.renderProduct();
          break;

        case PageType.Cart:
          this.renderCart();
          break;

        case PageType.Checkout:
          this.renderCheckout();
          break;

        default:
          break;
      }
    }

    renderProduct() {
      const parentDom = document.getElementById(this.domId);
      if (!parentDom) return;
      this.list.forEach(item => {
        if (item.buttonType === ButtonType.ExpressCheckoutButton) {
          this.renderExpressCheckout(item);
        }

        if (item.buttonType === ButtonType.NormalButton) {
          const domId = getNormalDomId(this.domId);
          item.buttonNameDataList.forEach(innerItem => {
            if (innerItem.buttonName === ButtonName.BUY_NOW) {
              const str = `
                <button 
                    id=${domId}
                    data-ssr-plugin-pdp-button-buy-now 
                    class="buy-now shopline-element-buy-now btn btn-primary btn-lg 
                    pdp_buy_now_${this.config.id} __sl-custom-track-product-detail-buy-now ${this.domAttr.isSoldOut ? 'hide' : ''}"
                >  
                    <span class="pdp_button_text body5 ls-30p fw-bold">${t('cart.cart.buy_now')}</span>
                </button>`;
              parentDom.insertAdjacentHTML('beforeend', str);
            }
          });
          this.renderDomIdMap[item.buttonType] = domId;
        }
      });
    }

    renderCart() {
      const parentDom = document.getElementById(this.domId);
      if (!parentDom) return;
      this.list.forEach(item => {
        if (item.buttonType === ButtonType.NormalButton) {
          item.buttonNameDataList.forEach(innerItem => {
            const domId = `${this.config.id}-slibing`;

            if (innerItem.buttonName === ButtonName.BUY_NOW) {
              const str = `<button 
                type="button" 
                data-sl-module="button__trade-cart-checkout" 
                class="shopline-element-cart-checkout btn btn-primary btn-sm" id=${domId}
                 style="width: 100%;">
            ${t('cart.checkout_proceeding.checkout')}
            </button>
                    `;
              parentDom.insertAdjacentHTML('beforeend', str);
            }

            this.renderDomIdMap[item.buttonType] = domId;
          });
        }

        if (item.buttonType === ButtonType.ExpressCheckoutButton) {
          this.renderExpressCheckout(item);
        }
      });
    }

    renderExpressCheckout(item) {
      const parentDom = document.getElementById(this.domId);
      if (!parentDom) return;
      const dom = document.createElement('div');
      const domId = getExpressCheckoutDomId(this.domId);
      dom.setAttribute('id', domId);
      dom.setAttribute('class', 'express-checkout-button-list');
      parentDom.append(dom);
      this.renderDomIdMap[item.buttonType] = domId;
    }

    renderCheckout() {
      const buttonConfig = this.list.find(item => item.buttonType === ButtonType.ExpressCheckoutButton);
      if (!buttonConfig) return;
      this.renderExpressCheckout(buttonConfig);
    }

  }

  _exports.PAYMENT_BUTTON_COMMON_ANIMATED = PAYMENT_BUTTON_COMMON_ANIMATED;
  _exports.PAYMENT_BUTTON_COMMON__STYLE_ID = PAYMENT_BUTTON_COMMON__STYLE_ID;
  _exports.PaymentButton = PaymentButton;
  return _exports;
}();