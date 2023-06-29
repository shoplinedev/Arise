window.SLM = window.SLM || {};

window.SLM['product/commons/js/quick-add-modal.js'] = window.SLM['product/commons/js/quick-add-modal.js'] || function () {
  const _exports = {};
  const axios = window['axios']['default'];
  const { addLockableTarget } = window['scroll-lock'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const http = window['SLM']['theme-shared/utils/request.js'].default;
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const dataReportViewContent = window['@yy/sl-theme-shared']['/events/data-report/view-content'].default;
  const ProductQuickAddCart = window['SLM']['theme-shared/report/product/product-quickAddCart.js'].default;
  const productSkuChange = window['SLM']['theme-shared/events/product/sku-change/index.js'].default;
  const quickViewClick = window['SLM']['theme-shared/events/product/quickView-click/index.js'].default;
  const productPreviewInit = window['SLM']['theme-shared/events/product/preview-init/index.js'].default;
  const pageMapping = window['SLM']['theme-shared/utils/report/pageMapping.js'].default;
  const { getCartId } = window['SLM']['theme-shared/report/product/utils/index.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const get = window['lodash']['get'];
  const newCurrency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { ModalWithHtml } = window['SLM']['commons/components/modal/index.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const { Loading } = window['SLM']['commons/components/toast/index.js'];
  const { getUrlQuery } = window['SLM']['commons/utils/url.js'];
  const ButtonEvent = window['SLM']['product/detail/js/product-button.js'].default;
  const { getVariant } = window['SLM']['product/detail/js/product-button.js'];
  const { addToCartThirdReport, addToCartHdReport } = window['SLM']['product/detail/js/product-button-report.js'];
  const SkuQuality = window['SLM']['product/detail/js/product-quantity.js'].default;
  const initSku = window['SLM']['product/detail/js/sku-trade.js'].default;
  const setProductPrice = window['SLM']['product/commons/js/product-info.js'].default;
  const { ADD_TO_CART } = window['SLM']['commons/cart/globalEvent.js'];
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;
  const nullishCoalescingOperator = window['SLM']['product/utils/nullishCoalescingOperator.js'].default;

  const emitProductSkuChange = data => {
    try {
      productSkuChange({
        currency: window.Shopline.currency,
        ...data
      });
    } catch (e) {
      console.error(e);
    }
  };

  const hdReport = new ProductQuickAddCart();

  const emitViewContent = data => {
    try {
      dataReportViewContent(data);
      hdReport.quickAddCartView({
        productInfo: {
          spuSeq: data.content_spu_id,
          skuSeq: data.content_sku_id,
          currency: getCurrencyCode(),
          price: data.originPrice,
          productName: data.productName
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getSortationIds = spu => {
    if (spu && spu.sortationList && Array.isArray(spu.sortationList)) {
      return spu.sortationList.map(s => s.sortationId).join(',');
    }

    return '';
  };

  const modalInstanceMap = new Map();
  const previewInstanceMap = new Map();
  const quickAddLoadingClassName = 'product-item__btn--loading';

  function modalExpose(page) {
    if (window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report) {
      window.HdSdk.shopTracker.report('60006263', {
        event_name: 'view',
        page
      });
    }
  }

  const getSkuChangeData = (skuInfo = {}) => {
    const {
      spuSeq,
      discount,
      skuSeq,
      price,
      originPrice,
      stock,
      weight,
      weightUnit,
      available,
      shelves,
      skuAttributeIds,
      imageList,
      soldOut,
      allowOversold,
      imageBeanList
    } = skuInfo;
    return {
      spuSeq,
      discount,
      skuSeq,
      price: newCurrency.formatCurrency(price || 0),
      originPrice: newCurrency.formatCurrency(originPrice || 0),
      stock,
      weight,
      weightUnit,
      available,
      shelves,
      skuAttributeIds,
      imageList,
      soldOut,
      allowOversold,
      imageBeanList
    };
  };

  const getReportCartId = async () => {
    return await getCartId();
  };

  async function quickAddModal(data) {
    const {
      spuSeq,
      uniqueKey,
      $button,
      buttonLoadingCls
    } = data;
    let modalPrefix = 'product_quick_add_';
    let queryObj = {};
    const query = $button.data('query');
    let cartId = '';
    getReportCartId().then(id => {
      cartId = id;
    });

    try {
      queryObj = { ...query
      };
      modalPrefix = queryObj.modalPrefix ? `${queryObj.modalPrefix}_product_quick_add_` : 'product_quick_add_';
    } catch (e) {}

    const page = modalPrefix.startsWith('productRecommendModal') ? '123' : pageMapping[SL_State.get('templateAlias')];

    function toggleAddLoading(isLoading) {
      $button.toggleClass(buttonLoadingCls || quickAddLoadingClassName, isLoading);
    }

    if ($button.hasClass(buttonLoadingCls || quickAddLoadingClassName)) {
      return;
    }

    try {
      toggleAddLoading(true);
      const res = await getProductDetail(spuSeq);

      if (res.code === 'SUCCESS') {
        const productInfo = res.data;
        const skuList = nullishCoalescingOperator(get(res, 'data.sku.skuList'), []);
        const skuAttributeMap = nullishCoalescingOperator(get(res, 'data.sku.skuAttributeMap'), {});
        const isSoldOut = get(res, 'data.spu.soldOut');
        const isSingleSku = Array.isArray(skuList) && skuList.length === 1;

        if (isSoldOut) {
          new Toast().open(t('products.general.sold_out'), 3e3);
          return;
        }

        modalExpose(page);

        if (isSingleSku) {
          const skuInfo = skuList[0];
          addToCart({
            sku: skuInfo,
            spu: get(productInfo, 'spu'),
            toggleAddLoading,
            hdReportPage: page,
            skuAttributeMap,
            cartId,
            ...data
          });
          emitProductSkuChange({
            type: 'init',
            quantity: 1,
            ...getSkuChangeData(skuInfo)
          });
          emitViewContent({
            content_spu_id: get(productInfo, 'spu.spuSeq'),
            content_sku_id: get(skuInfo, 'skuSeq'),
            content_category: getSortationIds(get(productInfo, 'spu')),
            currency: getCurrencyCode(),
            value: convertPrice(get(skuInfo, 'price') || 0),
            quantity: 1,
            price: convertPrice(get(skuInfo, 'price') || 0),
            productName: get(res, 'data.spu.title'),
            originPrice: get(skuInfo, 'price') || 0
          });
        } else {
          showModal({
            spuSeq,
            uniqueKey,
            modalPrefix,
            ...data
          });
        }
      } else {
        new Toast().open(t('products.general.no_product_data_found'), 3e3);
      }
    } catch (err) {
      new Toast().open(t('products.general.no_product_data_found'), 3e3);
    } finally {
      toggleAddLoading(false);
    }
  }

  _exports.default = quickAddModal;

  async function showModal({
    spuSeq,
    uniqueKey,
    modalPrefix,
    ...data
  }) {
    if (modalInstanceMap.has(spuSeq)) {
      const previewSep = previewInstanceMap.get(spuSeq);
      modalInstanceMap.get(spuSeq).show();
      previewSep && previewSep.emitEvent();
      quickViewClick({
        type: 'change',
        eventName: 'OPEN_QUICKVIEW_ADDTOCART',
        prefix: modalPrefix,
        spuSeq,
        modal: modalInstanceMap.get(spuSeq),
        preview: {
          skuTrade: previewInstanceMap.get(spuSeq).skuTrade,
          quantityStepper: previewInstanceMap.get(spuSeq).quantityStepper
        },
        $el: document.getElementById(modalInstanceMap.get(spuSeq) && modalInstanceMap.get(spuSeq).modalId)
      });
    } else {
      const children = $('<div class="quick-add-modal__outerWrapper"></div>');
      const modal = new ModalWithHtml({
        children,
        containerClassName: `quick-add-modal__container __sl-custom-track-quick-add-modal-${spuSeq}`,
        zIndex: 128,
        closeCallback: () => {
          const modalInstance = modalInstanceMap.get(spuSeq);
          quickViewClick({
            eventName: 'CLOSE_QUICKVIEW_ADDTOCART',
            spuSeq,
            $el: document.getElementById(modalInstance && modalInstance.modalId)
          });
        }
      });
      modal.show();
      modal.$modal.get(0).style.setProperty('--max-body-height', `${window.innerHeight * 0.8}px`);
      const loading = new Loading({
        target: modal.$modal.find('.mp-modal__body'),
        loadingColor: 'currentColor',
        duration: -1
      });
      loading.open();

      try {
        const res = await fetchModalContent(uniqueKey, modalPrefix);
        children.empty().append(res.data);
        initQuickAddModal(`${modalPrefix}${spuSeq}`, children, modal, spuSeq, get(data, 'position'), modal.$modal);
        modalInstanceMap.set(spuSeq, modal);
        quickViewClick({
          type: 'init',
          eventName: 'OPEN_QUICKVIEW_ADDTOCART',
          prefix: modalPrefix,
          spuSeq,
          modal: modalInstanceMap.get(spuSeq),
          preview: {
            skuTrade: previewInstanceMap.get(spuSeq).skuTrade,
            quantityStepper: previewInstanceMap.get(spuSeq).quantityStepper
          },
          $el: document.getElementById(modalInstanceMap.get(spuSeq) && modalInstanceMap.get(spuSeq).modalId)
        });
      } catch (err) {
        new Toast().open(t('products.general.no_product_data_found'), 3e3);
        modal.hide();
      } finally {
        loading.close();
        window.SL_EventBus.emit('global.activeIcon.show', {
          type: 'vip'
        });
      }
    }
  }

  function initQuickAddModal(id, el, modal, spuSeq, position, modalContainer) {
    const sku = SL_State.get(`${id}.sku`);
    const spu = SL_State.get(`${id}.spu`);
    initWidgets({
      id,
      sku,
      spu
    }, el, modal, spuSeq, position, modalContainer);
  }

  function initWidgets({
    id,
    sku,
    spu
  }, el, modal, spuSeq, position, modalContainer) {
    let activeSkuCache = {};
    const ButtonGroup = new ButtonEvent({
      id,
      cartRoot: `.pdp_add_to_cart_${id}`,
      buyNowRoot: `.pdp_buy_now_${id}`,
      payPayId: `pdp_paypal_${id}`,
      soldOutRoot: `.pdp_sold_out_${id}`,
      spu,
      sku,
      modalType: 'QuickAdd',
      position,
      onAddSuccess: () => {
        modal.hide();
      }
    });
    const quantityStepper = new SkuQuality({
      id,
      sku,
      spu,
      onChange: num => {
        ButtonGroup.setActiveSkuNum(num);
        window.SL_EventBus.emit('product:count:change', [num, id]);
      }
    });
    const skuTrade = initSku({
      id,
      sku,
      spu,
      mixins: window.skuMixins,
      modalContainer,
      onInit: (trade, activeSku) => {
        activeSkuCache = activeSku;
        let content_sku_id = '';
        let price = null;

        if (activeSku) {
          changeActiveSku(activeSku);
          content_sku_id = activeSku.skuSeq;
          price = convertPrice(activeSkuCache.price || 0);
          emitProductSkuChange({
            type: 'init',
            quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
            ...getSkuChangeData(activeSku)
          });
        }

        emitViewContent({
          content_spu_id: spu.spuSeq,
          content_sku_id,
          content_category: getSortationIds(spu),
          currency: getCurrencyCode(),
          value: price,
          quantity: 1,
          price,
          productName: get(spu, 'title'),
          originPrice: get(activeSku, 'price') || 0
        });
      },
      onChange: activeSku => {
        activeSkuCache = activeSku;

        if (activeSku) {
          emitProductSkuChange({
            type: 'change',
            quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
            ...getSkuChangeData(activeSku)
          });
        }

        if (!activeSku && !quantityStepper.activeSku) return;
        setProductPrice(id, id, activeSku);
        changeActiveSku(activeSku);
      }
    });

    try {
      const _modalContainer = modal.$modal;
      productPreviewInit({
        id,
        position,
        modalType: 'quickAddToCart',
        module: 'quickAddToCartModal',
        product: window.SL_State.get(id),
        modalContainer: modal.$modal,
        modalContainerElement: _modalContainer && _modalContainer[0],
        instances: {
          buttonGroup: ButtonGroup,
          quantityStepper,
          skuTrade
        }
      });
    } catch (e) {
      console.error(e);
    }

    previewInstanceMap.set(spuSeq, {
      skuTrade,
      quantityStepper,
      emitEvent: () => {
        let content_sku_id = '';
        let price = null;

        if (activeSkuCache) {
          content_sku_id = activeSkuCache.skuSeq;
          price = convertPrice(activeSkuCache.price || 0);
          emitProductSkuChange({
            type: 'init',
            quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
            ...getSkuChangeData(activeSkuCache)
          });
        }

        emitViewContent({
          content_spu_id: spu.spuSeq,
          content_sku_id,
          content_category: getSortationIds(spu),
          currency: getCurrencyCode(),
          value: price,
          quantity: 1,
          price,
          productName: get(spu, 'title'),
          originPrice: get(activeSkuCache, 'price') || 0
        });
      }
    });
    listenCurrencyCodeChange(id, id, quantityStepper);

    function changeActiveSku(activeSku) {
      ButtonGroup.setActiveSku(activeSku);
      quantityStepper.setActiveSku(activeSku);

      if (isMobile()) {
        const $footer = el.find('.quick-add-modal__footer');
        const paddingBottom = $footer.outerHeight() + 10;
        addLockableTarget($footer);
        el.find('.quick-add-modal__body').css({
          'padding-bottom': paddingBottom
        });
      }
    }
  }

  function addToCart({
    sku,
    spu,
    toggleAddLoading,
    hdReportPage,
    skuAttributeMap,
    position,
    cartId
  }) {
    const activeSku = sku ? { ...sku,
      num: 1,
      name: spu.title
    } : null;

    if (isPreview()) {
      new Toast().open(t('products.product_details.link_preview_does_not_support'));
      return;
    }

    if (!activeSku) {
      new Toast().open(t('products.product_list.select_product_all_options'));
      return;
    }

    toggleAddLoading(true);
    const {
      spuSeq: spuId,
      skuSeq: skuId,
      num,
      name,
      price
    } = activeSku;
    const eventID = getEventID();
    const getDataId = get(window, 'HdSdk.shopTracker.getDataId');
    const dataId = getDataId ? getDataId() : undefined;
    const hdReportData = {
      page: hdReportPage,
      spuId,
      skuId,
      name,
      price,
      num,
      modalType: 'SingleQuickAdd',
      variant: getVariant(get(activeSku, 'skuAttributeIds'), skuAttributeMap),
      collectionId: get(spu, 'sortationList[0].sortationId'),
      collectionName: get(spu, 'sortationList[0].sortationName'),
      position,
      dataId,
      eventID,
      cartId
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
        eventId: `addToCart${eventID}`,
        eventName: 'AddToCart'
      },
      error: () => {
        addToCartHdReport({ ...hdReportData,
          event_status: 0
        });
      },
      success: () => {
        addToCartHdReport({ ...hdReportData,
          event_status: 1
        });
        addToCartThirdReport({
          spu,
          variant: getVariant(sku && sku.skuAttributeIds, skuAttributeMap),
          spuId,
          name,
          price,
          skuId,
          num,
          eventID
        });
        const cartOpenType = window.SL_State.get('theme.settings.cart_open_type');

        if (cartOpenType === 'cartremain') {
          new Toast().open(t('products.general.added_to_cart_successfully'), 1500);
        }
      },
      complete: () => {
        toggleAddLoading(false);
      }
    });
  }

  function listenCurrencyCodeChange(id, statePath, quantityStepper) {
    window.SL_EventBus.on('global:currency:format', () => {
      setProductPrice(id, statePath, quantityStepper.activeSku);
    });
  }

  function isPreview() {
    return window.SL_State && window.SL_State.get('templateAlias') === 'PreviewProductsDetail';
  }

  function fetchModalContent(uniqueKey, modalPrefix) {
    let recommendQuery = {};

    if (modalPrefix.startsWith('productRecommendModal')) {
      recommendQuery = {
        modalPrefix: 'productRecommendModal'
      };
    }

    const queryUrl = window.Shopline.redirectTo(`/products/${uniqueKey}`);
    return axios.get(queryUrl, {
      params: {
        view: 'quick-add-modal',
        preview: getUrlQuery('preview'),
        themeId: getUrlQuery('themeId'),
        ignoreRedirect: getUrlQuery('ignoreRedirect'),
        engineType: getUrlQuery('engineType'),
        sourcePage: SL_State.get('templateAlias'),
        ...recommendQuery
      }
    });
  }

  function getProductDetail(spuSeq) {
    return http.get(`/product/detail/query`, {
      params: {
        spuSeq
      }
    });
  }

  return _exports;
}();