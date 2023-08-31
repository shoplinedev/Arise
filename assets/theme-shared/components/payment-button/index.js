window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/index.js'] = window.SLM['theme-shared/components/payment-button/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { getAttrs, getNormalDomId, getExpressCheckoutDomId, getConfig, getNormalPlaceholderElementClassName } = window['SLM']['theme-shared/components/payment-button/utils.js'];
  const { PAYMENT_BUTTON_COMMON__STYLE_ID, PAYMENT_BUTTON_COMMON_ANIMATED, PAYMENT_BUTTON_COMMON_ITEM_MASK, EXPRESS_PAYMENT_BUTTON_COMMON_ITEM, EXPRESS_PAYMENT_BUTTON_CONTAINER, NORMAL_PAYMENT_BUTTON_CART_CHECKOUT, NORMAL_PAYMENT_BUTTON_PRODUCT_BUY_NOW, NORMAL_PAYMENT_BUTTON_PRODUCT_MORE_OPTIONS } = window['SLM']['theme-shared/components/payment-button/constants.js'];
  const { PageType, ButtonType, ButtonName, convertPageType } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const ShopbyFastCheckoutButton = window['SLM']['theme-shared/components/payment-button/shopby_fast_checkout.js'].default;

  class PaymentButton {
    constructor(config) {
      this.config = { ...config,
        pageType: convertPageType(config.pageType)
      };
      this.domId = config.pageType === PageType.Checkout ? config.id : `payment_button_${config.id}`;
      this.list = getConfig(this.config.pageType);
      this.fastCheckoutButton = new ShopbyFastCheckoutButton(this.config);
      this.renderDomIdMap = {};
      this.paymentButtonMap = {};
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
      .${EXPRESS_PAYMENT_BUTTON_COMMON_ITEM} {
        margin-bottom: 10px;
        position: relative;
      }
      .${EXPRESS_PAYMENT_BUTTON_COMMON_ITEM}:empty {
        display: none;
      }
      .${PAYMENT_BUTTON_COMMON_ANIMATED}:empty {
        display: block;
      }
      .${PAYMENT_BUTTON_COMMON_ITEM_MASK} {
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 101;
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

        if (item.buttonType === ButtonType.FastCheckoutButton) {
          const domId = this.fastCheckoutButton.renderButton(parentDom);
          this.renderDomIdMap[item.buttonType] = domId;
          this.paymentButtonMap[item.buttonType] = this.fastCheckoutButton;
        }

        if (item.buttonType === ButtonType.NormalButton) {
          const domId = getNormalDomId(this.domId);
          const className = getNormalPlaceholderElementClassName(this.config.id);
          const buttonClassNameList = [NORMAL_PAYMENT_BUTTON_PRODUCT_BUY_NOW, 'buy-now', 'shopline-element-buy-now', 'btn', 'btn-primary', 'btn-lg', 'product-button-list-btn-wrap', `pdp_buy_now_${this.config.id}`, '__sl-custom-track-product-detail-buy-now', `${this.domAttr.isSoldOut === 'true' ? 'hide' : ''}`];
          item.buttonNameDataList.forEach(innerItem => {
            if (innerItem.buttonName === ButtonName.BUY_NOW) {
              const str = `
              <button
                id=${domId}
                data-ssr-plugin-pdp-button-buy-now
                class="${buttonClassNameList.join(' ')}"
              >
                <span class="${className}">${t('cart.cart.buy_now')}</span>
              </button>
            `;
              parentDom.insertAdjacentHTML('afterbegin', str);
              const morePaymentOptions = parentDom.parentNode.querySelector(`.${NORMAL_PAYMENT_BUTTON_PRODUCT_MORE_OPTIONS}`);

              if (morePaymentOptions) {
                morePaymentOptions.remove();
              }
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
              const str = `
              <button
                type="button"
                data-sl-module="button__trade-cart-checkout"
                class="${NORMAL_PAYMENT_BUTTON_CART_CHECKOUT} shopline-element-cart-checkout btn btn-primary btn-sm"
                id=${domId}
                style="width: 100%;"
              >
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

        if (item.buttonType === ButtonType.FastCheckoutButton) {
          const domId = this.fastCheckoutButton.renderButton(parentDom);
          this.renderDomIdMap[item.buttonType] = domId;
          this.paymentButtonMap[item.buttonType] = this.fastCheckoutButton;
        }
      });
    }

    renderExpressCheckout(item) {
      const parentDom = document.getElementById(this.domId);
      if (!parentDom) return;
      const domId = getExpressCheckoutDomId(this.domId);
      const containerEle = document.getElementById(domId);
      if (containerEle) return;
      const dom = document.createElement('div');
      dom.setAttribute('id', domId);
      dom.setAttribute('class', EXPRESS_PAYMENT_BUTTON_CONTAINER);
      parentDom.append(dom);
      this.renderDomIdMap[item.buttonType] = domId;
    }

    renderFastCheckoutInCheckoutPage(item) {
      this.renderExpressCheckout({ ...item,
        buttonType: ButtonType.ExpressCheckoutButton
      });
    }

    renderCheckout() {
      this.list.forEach(item => {
        if (item.buttonType === ButtonType.ExpressCheckoutButton) {
          this.renderExpressCheckout(item);
        }

        if (item.buttonType === ButtonType.FastCheckoutButton) {
          this.renderFastCheckoutInCheckoutPage(item);
        }
      });
    }

    setDisabled(val) {
      if (this.config.pageType === PageType.ProductDetail) {
        Object.values(this.paymentButtonMap).forEach(instanceItem => {
          instanceItem.setDisabled(val);
        });
      }
    }

    setDisplay(val) {
      if (this.config.pageType === PageType.ProductDetail) {
        Object.values(this.paymentButtonMap).forEach(instanceItem => {
          instanceItem.setDisplay(val ? 'removeClass' : 'addClass', !val);
        });
      }
    }

  }

  _exports.PaymentButton = PaymentButton;
  return _exports;
}();