window.SLM = window.SLM || {};

window.SLM['theme-shared/components/payment-button/shopby_fast_checkout.js'] = window.SLM['theme-shared/components/payment-button/shopby_fast_checkout.js'] || function () {
  const _exports = {};
  const checkout = window['SLM']['theme-shared/utils/checkout.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const debounce = window['lodash']['debounce'];
  const Cookies = window['js-cookie']['*'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { PageType, HandleClassType, getPurchaseSDKCheckoutData, getSubscription } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { EXPRESS_PAYMENT_BUTTON_COMMON_ITEM } = window['SLM']['theme-shared/components/payment-button/constants.js'];
  const { isProductPreview } = window['SLM']['theme-shared/components/payment-button/utils.js'];
  const { BrowserPreloadStateFields } = window['SLM']['theme-shared/const/preload-state-fields.js'];

  const noop = () => {};

  const PREFIX_ICON = `<svg width="68" height="18" viewBox="0 0 68 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3554 0.772522L14.3313 0.488281H11.2835L11.2668 0.781076C11.2627 0.852932 11.2607 0.926892 11.2607 1.0029V14.5641H14.3657V8.86666C14.4287 8.35695 14.6465 7.95264 15.0213 7.63644L15.0234 7.63464L15.0255 7.6328C15.4044 7.30127 15.8744 7.13003 16.4563 7.13003C16.8955 7.13003 17.2325 7.22397 17.4873 7.39011L17.4938 7.39433L17.5005 7.39823C17.7749 7.55832 17.9804 7.78526 18.1202 8.08814C18.2633 8.39812 18.34 8.77287 18.34 9.22071V14.5641H21.4243V9.24141C21.4243 8.23355 21.2225 7.33936 20.8076 6.56883C20.3967 5.80576 19.8351 5.20518 19.1236 4.7748C18.4085 4.3284 17.5992 4.10787 16.7047 4.10787C16.0374 4.10787 15.4469 4.25649 14.9475 4.56832C14.7377 4.69697 14.5435 4.83297 14.3657 4.97654V1.0236C14.3657 0.937544 14.3623 0.853814 14.3554 0.772522Z" fill="#052855"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4418 4.03229C26.1167 3.73912 26.8347 3.5932 27.5927 3.5932C28.6108 3.5932 29.542 3.84101 30.3789 4.33978C31.2108 4.82179 31.8762 5.48035 32.3719 6.31141C32.8722 7.15015 33.1195 8.09606 33.1195 9.14074C33.1195 9.96627 32.9673 10.7276 32.6578 11.4202L32.6573 11.4213L32.6568 11.4225C32.3507 12.0929 31.9342 12.678 31.4076 13.1752L31.406 13.1768L31.4043 13.1784C30.8803 13.6587 30.2898 14.0306 29.6342 14.293C28.9905 14.5562 28.3231 14.6883 27.6341 14.6883C26.9319 14.6883 26.245 14.5564 25.5752 14.2943L25.5713 14.2928L25.5675 14.2912C24.9128 14.0148 24.3169 13.6293 23.7809 13.1367L23.7793 13.1353L23.7777 13.1338C23.2524 12.6376 22.8298 12.0543 22.5102 11.3861L22.509 11.3836L22.5079 11.3811C22.198 10.7023 22.0452 9.96097 22.0452 9.16144C22.0452 8.3899 22.191 7.66441 22.4849 6.98836C22.7762 6.31833 23.1777 5.72684 23.6886 5.21593C24.1991 4.70539 24.784 4.31025 25.4418 4.03229ZM27.572 6.65676C27.1143 6.65676 26.7078 6.76736 26.3449 6.98511L26.3416 6.9871L26.3382 6.989C25.9745 7.19508 25.6826 7.48553 25.4609 7.86695C25.2559 8.22928 25.1501 8.64431 25.1501 9.12004C25.1501 9.6505 25.2694 10.0955 25.4965 10.4669C25.7309 10.8364 26.0298 11.1228 26.395 11.3309C26.7783 11.5277 27.1763 11.6247 27.5927 11.6247C27.995 11.6247 28.3791 11.5279 28.7491 11.3309C29.1274 11.1231 29.4326 10.8307 29.667 10.4482L29.6689 10.4451L29.6709 10.4421C29.9102 10.0712 30.0353 9.62772 30.0353 9.09934C30.0353 8.61079 29.9231 8.19116 29.7069 7.83081L29.7049 7.82749L29.703 7.82414C29.4961 7.45903 29.2123 7.17519 28.8472 6.9683C28.4857 6.76348 28.0637 6.65676 27.572 6.65676Z" fill="#052855"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.7459 8.26328H33.7403V17.2702H36.7832V13.5593C36.8987 13.618 37.0167 13.6728 37.137 13.7236C37.8118 14.0168 38.5298 14.1627 39.2878 14.1627C40.3059 14.1627 41.2371 13.9149 42.074 13.4161C42.9059 12.9341 43.5713 12.2756 44.0671 11.4445C44.5674 10.6058 44.8147 9.65985 44.8147 8.61517C44.8147 7.78964 44.6624 7.02827 44.353 6.33573L44.3525 6.33459L44.352 6.33345C44.0459 5.66302 43.6293 5.07796 43.1028 4.58068L43.1011 4.57909L43.0994 4.57753C42.5755 4.09726 41.985 3.7253 41.3294 3.46289C40.6856 3.19971 40.0182 3.06764 39.3292 3.06764C38.627 3.06764 37.9401 3.19949 37.2703 3.46158L37.2665 3.46308L37.2627 3.46468C36.6079 3.74115 36.0121 4.12657 35.476 4.61919L35.4744 4.62062L35.4729 4.62208C34.9475 5.11827 34.525 5.70164 34.2054 6.36983L34.2042 6.37233L34.203 6.37485C33.9412 6.94852 33.7912 7.56669 33.7512 8.22799C33.7504 8.23174 33.7498 8.2349 33.7494 8.23729L33.7488 8.24116L33.7487 8.24134C33.7475 8.249 33.7467 8.25541 33.7463 8.25929L33.7459 8.26328ZM37.1916 7.28898C37.426 6.91948 37.725 6.63309 38.0902 6.42503C38.4735 6.22821 38.8715 6.1312 39.2878 6.1312C39.6901 6.1312 40.0743 6.22802 40.4442 6.42501C40.8225 6.63281 41.1277 6.9252 41.3622 7.30774L41.3641 7.3108L41.366 7.31382C41.6053 7.68474 41.7304 8.12819 41.7304 8.65657C41.7304 9.14512 41.6183 9.56475 41.4021 9.92511L41.4001 9.92842L41.3982 9.93178C41.1913 10.2969 40.9075 10.5807 40.5424 10.7876C40.1809 10.9924 39.7588 11.0991 39.2672 11.0991C38.8095 11.0991 38.4029 10.9886 38.04 10.7708L38.0367 10.7688L38.0333 10.7669C37.6697 10.5608 37.3778 10.2704 37.156 9.88896C36.951 9.52663 36.8453 9.1116 36.8453 8.63587C36.8453 8.10542 36.9645 7.66038 37.1916 7.28898Z" fill="#052855"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.4788 0.731349H45.436V8.98816C45.436 9.63584 45.6305 10.289 45.8987 10.8766L45.8999 10.8791L45.9011 10.8816C46.2206 11.5498 46.6432 12.1332 47.1686 12.6294L47.1701 12.6308L47.1717 12.6322C47.7078 13.1249 48.3036 13.5103 48.9584 13.7868L48.9622 13.7884L48.966 13.7899C49.6358 14.0519 50.3227 14.1838 51.0249 14.1838C51.7139 14.1838 52.3813 14.0517 53.0251 13.7885C53.6807 13.5261 54.2712 13.1542 54.7951 12.6739L54.7968 12.6723L54.7985 12.6708C55.325 12.1735 55.7416 11.5884 56.0476 10.918L56.0481 10.9168L56.0487 10.9157C56.3581 10.2232 56.5104 9.46179 56.5104 8.63626C56.5104 7.59159 56.263 6.64568 55.7627 5.80694C55.267 4.97588 54.6016 4.31733 53.7697 3.83532C52.9328 3.33654 52.0016 3.08873 50.9835 3.08873C50.2255 3.08873 49.5075 3.23465 48.8327 3.52781C48.7123 3.57866 48.5944 3.63345 48.4788 3.69218V0.731349ZM49.7357 6.48064C50.0986 6.26289 50.5051 6.15229 50.9628 6.15229C51.4545 6.15229 51.8766 6.259 52.238 6.46383C52.6031 6.67072 52.887 6.95456 53.0939 7.31966L53.0958 7.32302L53.0977 7.32633C53.314 7.68669 53.4261 8.10632 53.4261 8.59487C53.4261 9.12325 53.301 9.56669 53.0617 9.93762L53.0597 9.94064L53.0579 9.9437C52.8234 10.3262 52.5182 10.6186 52.1399 10.8264C51.7699 11.0234 51.3858 11.1202 50.9835 11.1202C50.5672 11.1202 50.1691 11.0232 49.7858 10.8264C49.4207 10.6184 49.1217 10.332 48.8873 9.96246C48.6602 9.59106 48.541 9.14602 48.541 8.61557C48.541 8.13984 48.6467 7.72481 48.8517 7.36248C49.0735 6.98105 49.3653 6.69061 49.729 6.48453L49.7324 6.48263L49.7357 6.48064Z" fill="#052855"/>
<path d="M56.2303 15.1868L56.3274 15.0898L54.6696 13.432L54.5726 13.529C54.1048 13.9968 53.5494 14.3679 52.9382 14.621C52.327 14.8742 51.6719 15.0045 51.0104 15.0045C50.3488 15.0045 49.6937 14.8742 49.0825 14.621C48.4713 14.3679 47.916 13.9968 47.4482 13.529L47.3511 13.432L45.6934 15.0898L45.7904 15.1868C46.4759 15.8723 47.2897 16.4161 48.1853 16.7871C49.081 17.158 50.0409 17.349 51.0104 17.349C51.9798 17.349 52.9398 17.158 53.8354 16.7871C54.731 16.4161 55.5448 15.8723 56.2303 15.1868Z" fill="#052855"/>
<path d="M56.2101 3.96665H59.2163L61.9071 9.98946L64.6136 3.96665H67.6248L61.5697 17.2792H58.5541L60.3986 13.3416L56.2101 3.96665Z" fill="#052855"/>
<path d="M3.03671 1.04181C3.69296 0.702008 4.43508 0.53557 5.2564 0.53557C5.774 0.53557 6.24259 0.585665 6.65971 0.689121C7.07665 0.777637 7.4409 0.899338 7.74776 1.05804C8.04854 1.19592 8.30366 1.34427 8.50743 1.5054C8.69941 1.63749 8.85568 1.76297 8.96249 1.88132C9.10051 2.0124 9.23762 2.16318 9.37706 2.34031C9.81301 2.89408 10.0908 3.60793 10.1819 4.40262L10.217 4.7084H7.39709L7.34038 4.50901C7.33619 4.49427 7.33183 4.47997 7.32732 4.4661L7.32448 4.45736L7.32223 4.44846C7.20991 4.00354 6.92075 3.65909 6.49182 3.45493L6.48403 3.45123L6.47649 3.44704C6.3431 3.37294 6.19646 3.31545 6.03549 3.27533L6.03385 3.27492L6.03221 3.27449C5.82951 3.22131 5.56668 3.19185 5.23802 3.19185C5.0208 3.19185 4.80967 3.22427 4.60364 3.28913L4.59908 3.29057L4.59447 3.29184C4.40825 3.34342 4.25463 3.42385 4.12843 3.53031L4.12355 3.53443L4.11848 3.53832C3.99314 3.63444 3.89079 3.75449 3.81102 3.90155C3.74657 4.04195 3.71129 4.20689 3.71129 4.40165C3.71129 4.66354 3.7798 4.859 3.90033 5.00816C4.0521 5.16745 4.26069 5.31014 4.53538 5.43116C4.83087 5.5488 5.16385 5.66147 5.5349 5.76887C5.91659 5.87935 6.30434 5.99594 6.69815 6.11863L6.70062 6.1194L6.70307 6.12022C7.11768 6.25801 7.5258 6.42078 7.9274 6.60846C8.34285 6.80262 8.71492 7.04943 9.04217 7.34916C9.3803 7.64647 9.64687 8.02121 9.84443 8.46721C10.0484 8.91539 10.1442 9.45101 10.1442 10.0639C10.1442 10.7711 10.0086 11.402 9.72789 11.9485C9.45148 12.4865 9.07411 12.9296 8.59649 13.2736C8.1287 13.6104 7.60941 13.8562 7.04052 14.0112C6.47758 14.1768 5.90713 14.2598 5.32992 14.2598C4.75639 14.2598 4.22726 14.19 3.74478 14.047L3.74378 14.0467L3.74279 14.0464C3.56682 13.9927 3.39763 13.9333 3.23535 13.868L3.22469 13.8911L2.97547 13.7761C2.40551 13.513 1.74507 13.1129 1.22848 12.4567C0.691295 11.7743 0.386719 10.9129 0.386719 9.87693V9.60244H3.20241V9.87693C3.20241 9.92922 3.20403 9.97851 3.20705 10.025L3.20844 10.0463L3.2065 10.0677C3.20371 10.0982 3.2023 10.1291 3.2023 10.1603C3.2023 10.7928 3.82094 11.4104 4.78746 11.5557L4.79397 11.5567L4.80041 11.558C4.95298 11.5884 5.10489 11.6036 5.2564 11.6036C5.70989 11.6036 6.09378 11.5457 6.41303 11.4366C6.727 11.3172 6.9561 11.15 7.11522 10.9417L7.11767 10.9385L7.12022 10.9354C7.28063 10.7378 7.37128 10.4733 7.37128 10.1189C7.37128 9.85231 7.28969 9.65672 7.13951 9.50699L7.1338 9.5013L7.12843 9.49528C6.96362 9.31042 6.73485 9.14812 6.43178 9.01383L6.42796 9.01214L6.4242 9.01033C6.10892 8.85898 5.74944 8.72353 5.34458 8.60481L5.33989 8.60343L5.33525 8.60189C4.92876 8.4668 4.51638 8.31957 4.09813 8.16021C3.7962 8.05964 3.49484 7.94056 3.19407 7.80312L3.18985 7.80119L3.18569 7.79912C2.87931 7.64639 2.59127 7.47416 2.32184 7.28228L2.31924 7.28044L2.31669 7.27853C2.05266 7.0811 1.81549 6.85107 1.60531 6.58913L1.60062 6.58329L1.59626 6.5772C1.39496 6.29623 1.23605 5.97801 1.11796 5.6248C0.996191 5.26061 0.938373 4.84524 0.938373 4.38333C0.938373 3.64028 1.12203 2.97647 1.49689 2.40199C1.86828 1.82062 2.38431 1.36742 3.03671 1.04181Z" fill="#052855"/>
</svg>
`;
  const SpinIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1984 8.00039C13.1984 5.12851 10.8703 2.80039 7.99844 2.80039V0.400391C12.1958 0.400391 15.5984 3.80303 15.5984 8.00039C15.5984 12.1978 12.1958 15.6004 7.99844 15.6004C3.80107 15.6004 0.398438 12.1978 0.398438 8.00039H2.79844C2.79844 10.8723 5.12656 13.2004 7.99844 13.2004C10.8703 13.2004 13.1984 10.8723 13.1984 8.00039Z" fill="#052855"/>
</svg>`;
  const PaymentUpdate = 'Payment::Update';
  const CartUpdate = 'Cart::CartDetailUpdate';

  class ShopbyFastCheckoutButton {
    constructor(props) {
      this.config = props;
      this.domId = `${this.config.id}-fast_checkout`;
      this.isSubscription = getSubscription(this.config.pageType);
      this.handle = null;
      this.hidden = false;
      this.listened = false;
    }

    jumpToFastCheckoutPage(nextAction, abandonedOrderInfo, country) {
      const {
        storeId
      } = window.Shopline;
      const href = `${nextAction.domain}/checkouts/${storeId}/${abandonedOrderInfo.checkoutToken}`;
      const query = `?mark=${abandonedOrderInfo.mark}&clientLang=${window.Shopline.locale}&country=${country}&domain=${window.origin}`;
      const forwardUrl = `${href}${query}`;
      window.location.href = forwardUrl;
    }

    handleCheckoutButtonClick() {
      const {
        nextAction,
        abandonedOrderInfo,
        marketInfo
      } = SL_State.get(BrowserPreloadStateFields.TRADE_CHECKOUT);
      this.jumpToFastCheckoutPage(nextAction, abandonedOrderInfo, marketInfo.marketRegionCountryCode);
    }

    renderButton(parentDom) {
      const text = this.config.pageType === PageType.Checkout ? '' : '<span>Checkout</span>';
      const str = `<button
        class="btn btn-sm fast-checkout-button-item"
        id=${this.domId}
        style="width: 100%";
      >
        <div class="fast-checkout-button-item-container">
          <span class="fast-checkout-button-prefix">
              ${PREFIX_ICON}
          </span>
          ${text}
        </div>
        <div class="fast-checkout-btn-loading-icon">${SpinIcon}</div>
      </button>`;
      parentDom.insertAdjacentHTML('beforeend', str);
      this.addListener();
      this.addClickListener();
      return this.domId;
    }

    addClickListener() {
      if (this.config.pageType === PageType.Checkout) {
        this.handle = this._addClickListener(this.handleCheckoutButtonClick.bind(this));
      } else {
        this.handle = this._addClickListener(this.handleButtonClick.bind(this));
      }
    }

    setDisplay(action, hidden) {
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

      this.hidden = hidden;
      handleClass(this.domId, action);
    }

    setDisabled(val) {
      const currentEle = document.getElementById(this.domId);
      if (!currentEle) return;

      if (val) {
        currentEle.classList.add('disabled');
        this.removeClickListener();
      } else {
        currentEle.classList.remove('disabled');
        this.addClickListener();
      }
    }

    _addClickListener(handler = noop) {
      if (this.listened) return;
      const dom = document.getElementById(this.domId);
      if (!dom) return false;
      if (Array.from(dom.classList).includes('fast-checkout-btn-loading')) return false;

      const handle = () => {
        handler();
      };

      const debounced = debounce(handle, 300);
      dom.addEventListener('click', () => {
        if (debounced && debounced.cancel) {
          debounced.cancel();
        }

        debounced();
      });
      this.listened = true;
      return handle;
    }

    removeClickListener() {
      const dom = document.getElementById(this.domId);
      if (!dom) return false;
      dom.removeEventListener('click', this.handle);
      this.listened = false;
    }

    async handleButtonClick() {
      if (isProductPreview()) {
        Toast.init({
          content: t('products.product_details.link_preview_does_not_support')
        });
        return false;
      }

      const dom = document.getElementById(this.domId);
      if (Array.from(dom.classList).includes('fast-checkout-btn-loading')) return false;

      try {
        dom.classList.add('fast-checkout-btn-loading');
        let checkoutParams = {};

        if (this.config.setCheckoutParams && typeof this.config.setCheckoutParams === 'function') {
          checkoutParams = await this.config.setCheckoutParams();
        }

        let valid = true;
        let products;

        if (this.isSubscription && this.config.pageType === PageType.ProductDetail) {
          const res = await getPurchaseSDKCheckoutData(checkoutParams.productButtonId).catch(() => {
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
          abandonedInfo
        } = await checkout.save(products, checkoutParams.extra);
        const {
          nextAction
        } = abandonedInfo || {};
        const country = Cookies.get('localization') || SL_State.get('request.cookie.localization');
        this.jumpToFastCheckoutPage(nextAction, abandonedInfo, country);
      } catch (error) {
        dom.classList.remove('fast-checkout-btn-loading');
      }
    }

    addListener() {
      const changeStatus = async isSubscription => {
        if (isSubscription === this.isSubscription) return;
        !this.hidden && this.setDisplay(HandleClassType.Remove);
        this.isSubscription = isSubscription;
      };

      let timer = null;

      if (this.config.pageType === PageType.ProductDetail) {
        window.Shopline.event.on(PaymentUpdate, async ({
          isSubscription
        }) => {
          clearTimeout(timer);
          timer = null;
          await changeStatus(isSubscription);
        });
      } else if (this.config.pageType === PageType.Cart) {
        window.Shopline.event.on(CartUpdate, async data => {
          if (data.subscriptionInfo) {
            const isSubscription = !(data.subscriptionInfo.existSubscription === false);
            await changeStatus(isSubscription);
          }
        });
      } else {
        !this.hidden && this.setDisplay(HandleClassType.Remove);
      }

      timer = setTimeout(() => {
        !this.hidden && this.setDisplay(HandleClassType.Remove);
        this.isSubscription = false;
      }, 5000);
    }

  }

  function newShopbyFastCheckoutButton(config) {
    const parentDom = document.getElementById(config.domId);
    if (!parentDom) return;
    const divEle = document.createElement('div');
    divEle.setAttribute('id', `${config.domId}_fastCheckout`);
    divEle.setAttribute('class', `${EXPRESS_PAYMENT_BUTTON_COMMON_ITEM} fast-checkout-button`);
    parentDom.append(divEle);
    const instance = new ShopbyFastCheckoutButton(config);
    instance.renderButton(divEle);
  }

  _exports.newShopbyFastCheckoutButton = newShopbyFastCheckoutButton;
  _exports.default = ShopbyFastCheckoutButton;
  return _exports;
}();