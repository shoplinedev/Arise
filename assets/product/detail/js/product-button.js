window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-button.js'] = window.SLM['product/detail/js/product-button.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const pageMapping = window['SLM']['theme-shared/utils/report/pageMapping.js'].default;
  const checkout = window['SLM']['theme-shared/utils/checkout.js'].default;
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const { setSyncData } = window['SLM']['theme-shared/utils/dataAccessor.js'];
  const { checkoutEnd } = window['SLM']['theme-shared/components/hbs/products/checkedEvent/index.js'];
  const { isNewExpressCheckout, ButtonType } = window['SLM']['theme-shared/components/smart-payment/utils.js'];
  const { Payments, PageType } = window['SLM']['theme-shared/components/smart-payment/payments.js'];
  const { NORMAL_PAYMENT_BUTTON_PRODUCT_BUY_NOW } = window['SLM']['theme-shared/components/payment-button/constants.js'];
  const { setPayPalReportReq } = window['SLM']['theme-shared/utils/tradeReport/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const get = window['lodash']['get'];
  const { getCartId } = window['SLM']['theme-shared/report/product/utils/index.js'];
  const eventPaypalFallback = window['SLM']['theme-shared/events/product/paypal-fallback/index.js'].default;
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const newCurrency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { ADD_TO_CART } = window['SLM']['commons/cart/globalEvent.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const debounce = window['SLM']['commons/utils/debounce.js'].default;
  const PayemtnButtonModule = window['SLM']['product/detail/js/payment_button.js'].default;
  const { addToCartThirdReport, addToCartHdReport, buyNowHdReport, paypalHdReport } = window['SLM']['product/detail/js/product-button-report.js'];
  const FloatButton = window['SLM']['product/detail/js/float-button.js'].default;

  function getHdSdkDateId() {
    return window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.getDataId && window.HdSdk.shopTracker.getDataId();
  }

  const getVariant = (skuAttributeIds, skuAttributeMap) => {
    if (Array.isArray(skuAttributeIds)) {
      const ids = skuAttributeIds.map(item => {
        if (item && skuAttributeMap) {
          return get(skuAttributeMap[item.id], `skuAttributeValueMap[${item.valueId}].defaultValue`);
        }

        return undefined;
      });
      return ids.toString();
    }
  };

  _exports.getVariant = getVariant;

  const setChannel = () => {
    setSyncData({
      orderFrom: 'web'
    });
  };

  const SMART_PAYMENT_BUTTON_HEIGHT = 43;

  class ButtonEvent {
    constructor(props) {
      const {
        id
      } = props;
      this.paymentButtonModuleInstance = null;
      this.isNewExpressCheckout = isNewExpressCheckout(PageType.ProductDetail);

      if (this.isNewExpressCheckout) {
        this.paymentButtonModuleInstance = PayemtnButtonModule.newButtonModule({
          elementId: id,
          pageType: PageType.ProductDetail,
          cbFn: domMap => this.init({ ...props,
            payPayId: domMap[ButtonType.ExpressCheckoutButton]
          }),
          setCheckoutParams: async () => {
            return {
              productButtonId: this.id,
              products: this.transProducts(this.products),
              extra: {
                stage: this.getStage(),
                query: {
                  spb: true
                }
              },
              dataReportReq: this.getDataReportReq()
            };
          }
        });
        return;
      }

      this.init(props);
    }

    init(props) {
      const {
        id,
        cartRoot,
        buyNowRoot,
        payPayId,
        soldOutRoot,
        spu,
        onAddSuccess,
        onAddError,
        sku,
        modalType,
        position
      } = props;
      this.getReportCartId();
      this.addButton = cartRoot;
      this.addLoadingStatus = false;
      this.buyButton = buyNowRoot;
      this.buyLoadingStatus = false;
      this.payPayId = payPayId;
      this.soldOutRoot = soldOutRoot;
      this.onAddSuccess = onAddSuccess;
      this.onAddError = onAddError;
      this.paypalReportData = {};
      this.spu = spu;
      this.sku = sku;
      this.id = id;
      this.floatButton = new FloatButton({
        id
      });
      this.initPaypal();
      this.initEvent();
      this.toast = new Toast();
      this.initLoading();
      this.num = 1;
      this.page = String(id).startsWith('productRecommendModal') ? '123' : pageMapping[SL_State.get('templateAlias')];
      this.modalType = modalType;
      this.position = position;
    }

    async getReportCartId() {
      this.cartId = await getCartId();
    }

    initLoading() {
      this.addLoading = new Toast({
        duration: 0,
        target: this.addButton,
        type: 'loading',
        className: 'product_add_loading'
      });
      this.addLoading.close();
      this.buyLoading = new Toast({
        duration: 0,
        target: this.buyButton,
        type: 'loading',
        className: 'product_buy_loading'
      });
      this.buyLoading.close();
    }

    transProducts(products = []) {
      return products.map(item => ({
        productNum: item.num,
        productSeq: item.spuId,
        productSku: item.skuId,
        productPrice: item.price
      }));
    }

    needReport() {
      const dataId = getHdSdkDateId();
      const eventID = getEventID();
      this.paypalReportData = {
        dataId,
        eventID
      };
      const {
        name,
        price,
        spuSeq: spuId,
        skuSeq: skuId,
        itemNo
      } = this.activeSku;
      return {
        eventID: addToCartThirdReport({
          eventID,
          itemNo,
          spuId,
          name,
          price,
          num: this.num,
          skuId,
          variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap')),
          spu: this.spu
        }),
        dataId,
        eventName: 'AddToCart'
      };
    }

    getStage() {
      return checkoutEnd.getUuidAndMonitorCheckoutEnd('trade:spb:report', async status => {
        const {
          name,
          price,
          spuSeq: spuId,
          skuSeq: skuId
        } = this.activeSku;
        paypalHdReport({
          event_name: 'quick_payment',
          product_id: spuId,
          variantion_id: skuId,
          quantity: this.num,
          price,
          product_name: name,
          page: this.page,
          event_status: status,
          modalType: this.modalType,
          variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap')),
          collectionId: get(this, 'spu.sortationList[0].sortationId'),
          collectionName: get(this, 'spu.sortationList[0].sortationName'),
          position: this.position,
          dataId: this.paypalReportData.dataId,
          eventID: this.paypalReportData.eventID,
          cartId: this.cartId
        });
      });
    }

    getDataReportReq() {
      return setPayPalReportReq({
        products: this.transProducts(this.products).map(product => ({ ...product,
          productPrice: newCurrency.unformatCurrency(convertPrice(product.productPrice))
        })),
        currency: getCurrencyCode(),
        needReport: () => this.needReport()
      });
    }

    async renderSmartPayment() {
      const stage = this.getStage();

      const renderDefaultBuyNow = () => {
        this.extraBuyNow();

        if (!this.isNewExpressCheckout) {
          $(`#${this.payPayId}`).remove();
        }

        $(this.buyButton).filter('.product-more-payment-button').remove();
      };

      this.SmartPaymentComponent = new Payments({
        pageType: PageType.ProductDetail,
        props: {
          domId: this.payPayId,
          dynamic: get(this, 'buttonConfig.originConfig.system'),
          styleOptions: {
            height: SMART_PAYMENT_BUTTON_HEIGHT
          }
        },
        emitData: {
          stage,
          product: this.transProducts(this.products)
        },
        setCheckoutParams: async () => {
          return {
            productButtonId: this.id,
            products: this.transProducts(this.products),
            extra: {
              stage,
              query: {
                spb: true
              }
            },
            dataReportReq: this.getDataReportReq()
          };
        },
        onToast: ({
          message
        }) => this.toast.open(message),
        onDynamicNotify: () => {
          renderDefaultBuyNow();
        },
        onAllButtonsInitFail: () => {
          renderDefaultBuyNow();
        },
        afterInit: () => {
          if (!this.activeSku) {
            this.setSmartPaymentDisabled();
          }

          $(this.buyButton).filter('.product-more-payment-button').html(t('products.product_details.more_payment_options'));
        }
      });
      this.SmartPaymentComponent && (await this.SmartPaymentComponent.init());
    }

    async initPaypal() {
      this.buttonConfig = window.SL_State.get('productSettleButtonConfig');
      setChannel();
      await this.renderSmartPayment();
      $(document).on('click', `#${this.payPayId} .product-button-paypal-preview-mask`, () => {
        this.toast.open(t('products.product_details.link_preview_does_not_support'));
      });
    }

    extraBuyNow() {
      const paymentButtonContainer = $(`#product-button-list_${this.id}`);
      const buyNowButton = paymentButtonContainer.find(`.${NORMAL_PAYMENT_BUTTON_PRODUCT_BUY_NOW}`);
      if (buyNowButton.length > 0) return;
      const buyNow = `<button data-ssr-plugin-pdp-button-buy-now class="buy-now shopline-element-buy-now btn btn-primary btn-lg ${this.buyButton.substr(1)} __sl-custom-track-product-detail-buy-now paypalAddBuyNow ${NORMAL_PAYMENT_BUTTON_PRODUCT_BUY_NOW}">
        <span class="pdp_button_text fw-bold">${t('cart.cart.buy_now')}</span>
      </button>`;
      const buyNowEl = $(buyNow);
      $(this.addButton).after(buyNowEl);
      this.bindBuyNow();
      this.setTradeButtonHide(this.activeSku ? !this.activeSku.available : this.spu.soldOut);
      eventPaypalFallback({
        id: this.id,
        el: {
          buyNow: buyNowEl.get(0)
        },
        instance: this
      });
      this.buyLoading = new Toast({
        duration: 0,
        target: this.buyButton,
        type: 'loading',
        className: 'product_buy_loading'
      });
      this.buyLoading.close();
    }

    setLoading(button, loading) {
      let dom = this.addButton;

      if (button === 'buy') {
        dom = this.buyButton;
      }

      const loadingName = `${button}Loading`;

      if (loading) {
        $(dom).find('.pdp_button_text').addClass('loading');
        this[loadingName].open();
        $(`.product_${button}_loading`).find('.mp-loading__circular path').css({
          stroke: $(dom).css('color')
        });
      } else {
        this[loadingName].close();
        $(dom).find('.pdp_button_text').removeClass('loading');
      }

      this[`${loadingName}Status`] = loading;
    }

    handleATCSuccess() {
      const cartOpenType = window.SL_State.get('theme.settings.cart_open_type');
      const addBtnColor = $(this.addButton).css('color');

      if (cartOpenType === 'cartremain') {
        const addLoadingInstance = this.addLoading;

        if (addLoadingInstance && addLoadingInstance.showSuccessAni) {
          addLoadingInstance.showSuccessAni({
            loadingColor: addBtnColor
          }, () => {
            this.onAddSuccess && this.onAddSuccess();
          });
        } else {
          console.error(`judgeCartOpenTypeByATCStatus: add loading instance ${addLoadingInstance}`);
        }
      } else {
        this.onAddSuccess && this.onAddSuccess();
      }
    }

    initEvent() {
      const $this = this;
      $(this.addButton).on('click', debounce(300, () => {
        if ($this.isPreview()) {
          this.toast.open(t('products.product_details.link_preview_does_not_support'));
          return;
        }

        if (!this.activeSku) {
          this.toast.open(t('products.product_list.select_product_all_options'));
          return;
        }

        if (this.addLoadingStatus) {
          return;
        }

        this.setLoading('add', true);
        const {
          spuSeq: spuId,
          skuSeq: skuId,
          name,
          price
        } = this.activeSku;
        const {
          num,
          spu
        } = this;
        const dataId = getHdSdkDateId();
        const eventID = getEventID();
        const hdReportData = {
          page: this.page,
          spuId,
          skuId,
          num,
          price,
          name,
          modalType: this.modalType,
          variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap')),
          collectionId: get(this, 'spu.sortationList[0].sortationId'),
          collectionName: get(this, 'spu.sortationList[0].sortationName'),
          position: this.position,
          dataId,
          eventID,
          cartId: this.cartId
        };
        window.SL_EventBus.emit(ADD_TO_CART, {
          spuId,
          skuId,
          num,
          currency: getCurrencyCode(),
          price: newCurrency.unformatCurrency(convertPrice(price)),
          name,
          eventID: `addToCart${eventID}`,
          reportParamsExt: {
            dataId,
            eventName: 'AddToCart'
          },
          error: (...e) => {
            addToCartHdReport({ ...hdReportData,
              event_status: 0
            });
            this.onAddError(...e);
          },
          success: () => {
            setChannel();
            addToCartHdReport({ ...hdReportData,
              event_status: 1
            });
            addToCartThirdReport({
              spuId,
              name,
              price,
              skuId,
              num,
              eventID,
              variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap')),
              spu
            });
            this.handleATCSuccess();
          },
          complete: () => {
            this.setLoading('add', false);
          }
        });
      }));
      $this.bindBuyNow();
    }

    bindBuyNow() {
      let dataId;
      let eventID;
      const stage = checkoutEnd.getUuidAndMonitorCheckoutEnd('trade:goToCheckout:report', status => {
        const {
          name,
          price,
          spuSeq: spuId,
          skuSeq: skuId
        } = this.activeSku;
        const {
          num
        } = this;
        const hdReportData = {
          page: this.page,
          spuId,
          skuId,
          num,
          price,
          name,
          modalType: this.modalType,
          variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap')),
          collectionId: get(this, 'spu.sortationList[0].sortationId'),
          collectionName: get(this, 'spu.sortationList[0].sortationName'),
          isMorePay: $(this.addButton).hasClass('product-more-payment-button'),
          position: this.position,
          dataId,
          eventID,
          cartId: this.cartId
        };
        buyNowHdReport({ ...hdReportData,
          event_status: status
        });
      });
      const $this = this;
      $(this.buyButton).on('click', debounce(300, () => {
        if ($this.isPreview()) {
          this.toast.open(t('products.product_details.link_preview_does_not_support'));
          return;
        }

        if (!this.activeSku) {
          this.toast.open(t('products.product_list.select_product_all_options'));
          return;
        }

        this.setLoading('buy', true);
        const product = [{
          productSeq: this.activeSku.spuSeq,
          productSku: this.activeSku.skuSeq,
          productNum: this.num,
          productPrice: this.activeSku.price,
          productName: this.activeSku.name
        }];
        const {
          name,
          price,
          spuSeq: spuId,
          skuSeq: skuId
        } = this.activeSku;
        const {
          num,
          spu
        } = this;
        setChannel();
        dataId = getHdSdkDateId();
        eventID = getEventID();
        checkout.jump(product, {
          stage,
          reportParamsExt: {
            dataId,
            eventId: `addToCart${eventID}`,
            eventName: 'AddToCart'
          },
          totalPrice: newCurrency.unformatCurrency(convertPrice(price)),
          currency: getCurrencyCode(),
          needReport: () => {
            return addToCartThirdReport({
              eventID,
              spuId,
              name,
              price,
              skuId,
              num,
              spu,
              variant: getVariant(get(this, 'activeSku.skuAttributeIds'), get(this, 'sku.skuAttributeMap'))
            });
          }
        }).catch(() => {
          this.setLoading('buy', false);
        });
      }));
    }

    setActiveSku(sku) {
      this.activeSku = sku ? { ...sku,
        name: this.spu.title
      } : null;
      this.setSmartPaymentDisabled();

      if (sku) {
        this.setTradeButtonHide(sku.soldOut);

        if (this.paymentButtonModuleInstance) {
          this.paymentButtonModuleInstance.setDisplay(!sku.soldOut);
        }
      }
    }

    setActiveSkuNum(num) {
      this.num = num;
    }

    setSmartPaymentDisabled() {
      if (!this.activeSku) {
        if (this.paymentButtonModuleInstance) {
          this.paymentButtonModuleInstance.setDisabled(true);
        }

        this.SmartPaymentComponent && this.SmartPaymentComponent.setDisabled(this.activeSku);
        return;
      }

      if (this.paymentButtonModuleInstance) {
        this.paymentButtonModuleInstance.setDisabled(false);
      }

      this.SmartPaymentComponent && this.SmartPaymentComponent.setDisabled(this.activeSku);
    }

    get products() {
      return [{
        spuId: get(this, 'activeSku.spuSeq'),
        skuId: get(this, 'activeSku.skuSeq'),
        num: this.num,
        name: get(this, 'spu.title'),
        price: get(this, 'activeSku.price')
      }];
    }

    setTradeButtonHide(show) {
      if (!show) {
        $(this.addButton).removeClass('hide');
        $(this.buyButton).removeClass('hide');
        $(`#${this.payPayId}`).removeClass('hide');
        $(this.buyButton).filter('.product-more-payment-button').removeClass('hide');
        $(this.soldOutRoot).addClass('hide');
        return;
      }

      $(this.addButton).addClass('hide');
      $(this.buyButton).addClass('hide');
      $(`#${this.payPayId}`).addClass('hide');
      $(this.buyButton).filter('.product-more-payment-button').addClass('hide');
      $(this.soldOutRoot).removeClass('hide');
    }

    isPreview() {
      return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
    }

    destroy() {
      this.floatButton.destory();
    }

  }

  _exports.default = ButtonEvent;
  return _exports;
}();