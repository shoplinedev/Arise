window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-preview.js'] = window.SLM['product/detail/js/product-preview.js'] || function () {
  const _exports = {};
  const DataWatcher = window['SLM']['theme-shared/utils/sku/DataWatcher.js'].default;
  const productSkuChange = window['SLM']['theme-shared/events/product/sku-change/index.js'].default;
  const productSkuChanged = window['SLM']['theme-shared/events/product/sku-changed/index.js'].default;
  const productPreviewInit = window['SLM']['theme-shared/events/product/preview-init/index.js'].default;
  const dataReportViewContent = window['@yy/sl-theme-shared']['/events/data-report/view-content'].default;
  const currency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const SkuQuality = window['SLM']['product/detail/js/product-quantity.js'].default;
  const ButtonEvent = window['SLM']['product/detail/js/product-button.js'].default;
  const { getVariant } = window['SLM']['product/detail/js/product-button.js'];
  const setProductPrice = window['SLM']['product/commons/js/product-info.js'].default;
  const ProductImages = window['SLM']['product/detail/js/product-swiper.js'].default;
  const setPosition = window['SLM']['product/detail/js/layout.js'].default;
  const { listenPosition } = window['SLM']['product/detail/js/layout.js'];
  const initSku = window['SLM']['product/detail/js/sku-trade.js'].default;
  const InquiryPriceModal = window['SLM']['product/detail/inquiry-price-modal.js'].default;
  const createShadowDom = window['SLM']['product/commons/js/createShadowDom.js'].default;
  const Tabs = window['SLM']['product/detail/js/tabs.js'].default;
  const { ModalWithHtml } = window['SLM']['commons/components/modal/index.js'];
  const ProductCollapse = window['SLM']['product/detail/js/product-collapse.js'].default;
  const get = window['lodash']['get'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { changeURLArg, delParam } = window['SLM']['commons/utils/url.js'];
  const hdProductViewContent = window['SLM']['theme-shared/report/product/product-preview.js'].default;
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const nullishCoalescingOperator = window['SLM']['product/utils/nullishCoalescingOperator.js'].default;
  const newCurrency = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;

  const trackProductDetailPageView = ({
    sku_id,
    spu_id
  }) => {
    try {
      window.HdSdk && window.HdSdk.shopTracker.collect({
        page: 105,
        module: -999,
        component: -999,
        action_type: 101,
        sku_id,
        spu_id
      });
    } catch (e) {}
  };

  const emitProductSkuChange = data => {
    try {
      productSkuChange({ ...data,
        currency: window.Shopline.currency
      });
    } catch (e) {
      console.error(e);
    }
  };

  const emitProductSkuChanged = data => {
    try {
      productSkuChanged({ ...data,
        currency: window.Shopline.currency
      });
    } catch (e) {
      console.error(e);
    }
  };

  const emitViewContent = data => {
    try {
      dataReportViewContent(data);
      hdProductViewContent({ ...data,
        content_sku_id: data.curSkuId,
        price: data.curSkuPrice
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

  function thirdPartReport({
    activeSku,
    spu,
    sku
  }) {
    const newActiveSku = activeSku || get(sku, 'skuList[0]');
    window.SL_EventBus.emit('global:thirdPartReport', {
      GA: [['event', 'view_item', {
        currency: getCurrencyCode(),
        items: [{
          id: newActiveSku && newActiveSku.skuSeq,
          name: spu && spu.title,
          currency: getCurrencyCode(),
          price: convertPrice(newActiveSku && newActiveSku.price),
          variant: getVariant(newActiveSku && newActiveSku.skuAttributeIds, sku && sku.skuAttributeMap),
          category: spu && spu.customCategoryName || ''
        }]
      }]],
      GA4: [['event', 'view_item', {
        currency: getCurrencyCode(),
        value: convertPrice(newActiveSku && newActiveSku.price),
        items: [{
          item_id: newActiveSku && newActiveSku.skuSeq,
          item_name: spu && spu.title,
          currency: getCurrencyCode(),
          item_price: convertPrice(newActiveSku && newActiveSku.price),
          item_variant: getVariant(newActiveSku && newActiveSku.skuAttributeIds, sku && sku.skuAttributeMap),
          item_category: spu && spu.customCategoryName || ''
        }]
      }]],
      GAR: [['event', 'view_item', {
        currency: getCurrencyCode(),
        value: convertPrice(newActiveSku && newActiveSku.price),
        items: [{
          id: window.SL_GetReportArg && window.SL_GetReportArg('GAR', 'sku_id', newActiveSku && newActiveSku.skuSeq),
          google_business_vertical: 'retail'
        }]
      }]],
      GARemarketing: [['event', 'view_item', {
        ecomm_prodid: window.SL_GetReportArg && window.SL_GetReportArg('GAR', 'sku_id', newActiveSku && newActiveSku.skuSeq),
        ecomm_pagetype: 'product',
        ecomm_category: get(spu, 'sortationList[0].sortationId'),
        ecomm_pcat: get(spu, 'sortationList[0].sortationName'),
        currency: getCurrencyCode(),
        ecomm_totalvalue: convertPrice(newActiveSku && newActiveSku.price)
      }]]
    });
  }

  function initPreview({
    id,
    statePath,
    filterShelves,
    offsetTop,
    container,
    onAddSuccess,
    modalType,
    position,
    module,
    modalContainer
  }) {
    const sku = SL_State.get(`${statePath}.sku`);
    const spu = SL_State.get(`${statePath}.spu`);
    const plugin = SL_State.get(`${statePath}.plugin`);
    const viewContentSelector = `.__sl-custom-track-${id}`;

    if (filterShelves && !get(spu, 'shelves')) {
      console.error('no spu data or not shelves, init break');
      return () => undefined;
    }

    const productPopup = () => {
      const eventBindCallback = evt => {
        const dom = evt.currentTarget;
        const {
          displayProductDesc,
          page: pageId
        } = dom.dataset;
        const $content = dom.querySelector('.js-product-content');
        const $description = dom.querySelector('.js-product-description');
        const content = $content ? $content.textContent : '';
        const description = $description ? $description.textContent : '';
        const pages = SL_State.get('pages');
        const selectedPage = pages[pageId];
        let finalHtml = '';

        if (displayProductDesc === 'true') {
          finalHtml = description;
        } else if (typeof content === 'string' && content.trim()) {
          finalHtml = content;
        } else if (selectedPage && selectedPage.htmlConfig) {
          finalHtml = selectedPage.htmlConfig;
        }

        const modal = new ModalWithHtml({
          children: finalHtml,
          bodyClassName: 'sl-richtext product-popup__container',
          destroyedOnClosed: true,
          zIndex: 128
        });
        modal.show();
      };

      $(document.body).on('click', '.js-product-popup', eventBindCallback);
      return () => {
        $(document.body).off('click', '.js-product-popup', eventBindCallback);
      };
    };

    let unbindProductPopup;

    if (id === 'productDetail') {
      unbindProductPopup = productPopup();
    }

    const removePositionListener = listenPosition({
      id,
      offsetTop,
      container
    });
    createShadowDom();
    let productImagesInstance;

    try {
      productImagesInstance = new ProductImages({
        spuSeq: spu.spuSeq,
        mediaList: spu.mediaList,
        selectorId: id,
        skuList: sku && sku.skuList,
        heightOnChange: () => {
          setPosition({
            id,
            offsetTop,
            container
          });
        },
        beforeInit: ({
          pcWrapperSelector
        }) => {
          const $dom = document.querySelector(`${pcWrapperSelector} .swiper-container`);
          if (!$dom) return;
          const childHtml = $dom.outerHTML;
          $(`${pcWrapperSelector} .swiper-container`).remove();
          $(`${pcWrapperSelector}`).prepend(`<div class="swiper-border-shadow-container">${childHtml}</div>`);
        }
      });
    } catch (e) {
      setTimeout(() => {
        throw e;
      });
    }

    const inquiryPriceModal = new InquiryPriceModal({
      id,
      spu,
      sku
    });
    const ButtonGroup = new ButtonEvent({
      id,
      cartRoot: `.pdp_add_to_cart_${id}`,
      buyNowRoot: `.pdp_buy_now_${id}`,
      payPayId: `pdp_paypal_${id}`,
      soldOutRoot: `.pdp_sold_out_${id}`,
      spu,
      sku,
      modalType,
      position,
      onAddSuccess: () => {
        if (typeof onAddSuccess === 'function') {
          onAddSuccess();
        }
      }
    });
    const attr = $(`#product-in-stock_${id}`).attr('stock-number');
    const isShowTips = attr === 'false' || attr === undefined ? true : false;
    const quantityStepper = new SkuQuality({
      id,
      sku,
      spu,
      dataPool: new DataWatcher(),
      isShowTips: isShowTips
    });
    quantityStepper.dataPool.watch(['quantity'], num => {
      ButtonGroup.setActiveSkuNum(num);

      if (id === 'productDetail') {
        window.productDetailDataBus.set('num', num);
        window.productDetailDataBus.emit('after:countChange', num);
      }

      window.SL_EventBus.emit('product:count:change', [num, id]);
    });
    new ProductCollapse({
      selector: `.product-detail-collapse_${id}`
    });
    new Tabs({
      root: '.product-tabs-container'
    });

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
      } = skuInfo || {};
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

    let activeSkuCache = {};

    const getHdReportViewCurSku = activeSku => {
      let sku_id = 'null';
      let price = 'null';
      const b2bData = nullishCoalescingOperator(get(plugin, 'bizData.b2b'), {});
      const isBatchBuy = get(b2bData, 'moqPlan.batchBuy') && b2bData.moqPlan.applyType === 2;
      const isSoldOut = get(spu, 'soldOut') || get(activeSku, 'soldOut');
      const isSigleSku = get(sku, 'skuList.length') < 2;

      if (isBatchBuy) {
        sku_id = 'null';
        price = 'null';
      } else if (isSigleSku) {
        sku_id = get(sku, 'skuList[0].skuSeq');
        price = convertPrice(get(sku, 'skuList[0].skuPrice') || 0);
      } else if (activeSku && activeSku.skuSeq) {
        sku_id = activeSku.skuSeq;
        price = convertPrice(activeSku.price || 0);
      }

      return {
        curSkuId: sku_id,
        curSkuPrice: price
      };
    };

    function handleChangeSkuItemNo(activeSku, id) {
      const {
        itemNo
      } = activeSku || {};

      if (activeSku) {
        $(`.product-info-skuItemNo_${id}`).text(itemNo);
      } else {
        $(`.product-info-skuItemNo_${id}`).text('');
      }
    }

    let unmountedDiscountCoupon = null;
    let unmountPromotionTags = null;
    const skuDataPool = new DataWatcher();
    const skuTrade = initSku({
      id,
      sku,
      spu,
      mixins: window.skuMixins,
      dataPool: skuDataPool,
      modalContainer,
      onInit: (trade, activeSku) => {
        thirdPartReport({
          activeSku,
          spu,
          sku
        });
        activeSkuCache = activeSku;
        let content_sku_id = '';
        let price = null;
        inquiryPriceModal.setActiveSku(activeSku);
        const hdReportViewCurSku = getHdReportViewCurSku(activeSkuCache);

        if (id === 'productDetail') {
          window.productDetailDataBus.set('activeSku', activeSku);
          window.productDetailDataBus.emit('init:sku', activeSku);
          trackProductDetailPageView({
            sku_id: hdReportViewCurSku.curSkuId,
            spu_id: spu.spuSeq
          });
        }

        if (activeSku) {
          quantityStepper.setActiveSku(activeSku);
          ButtonGroup.setActiveSku(activeSku);
          content_sku_id = activeSku.skuSeq;
          price = convertPrice(activeSku.price || 0);
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
          title: spu.title,
          module,
          selector: viewContentSelector,
          ...hdReportViewCurSku
        });
        emitProductSkuChanged({
          type: 'init',
          id,
          productId: spu.spuSeq,
          instances: {
            productImages: productImagesInstance,
            buttonGroup: ButtonGroup,
            skuDataPool,
            quantityStepper
          },
          quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
          ...getSkuChangeData(activeSku)
        });
        trade.dataPool.watch(['activeSku'], activeSku => {
          if (id === 'productDetail') {
            window.productDetailDataBus.set('activeSku', activeSku);
            window.productDetailDataBus.emit('after:skuChange', activeSku);

            if (activeSku) {
              if (activeSku.skuSeq !== (activeSkuCache ? activeSkuCache.skuSeq : '')) {
                window.history.replaceState({}, document.title, changeURLArg(window.location.href, 'sku', activeSku.skuSeq));
              }
            } else {
              window.history.replaceState({}, document.title, delParam('sku'));
            }
          }

          handleChangeSkuItemNo(activeSku, id);
          activeSkuCache = activeSku;
          inquiryPriceModal.setActiveSku(activeSku);
          productImagesInstance && productImagesInstance.skuImageChange && productImagesInstance.skuImageChange(get(activeSku, 'imageBeanList[0]'));

          if (activeSku || quantityStepper.activeSku) {
            setProductPrice(id, statePath, activeSku);
            quantityStepper.setActiveSku(activeSku);
            ButtonGroup.setActiveSku(activeSku);
          }
        });
      },
      onChange: activeSku => {
        if (activeSku) {
          thirdPartReport({
            activeSku,
            spu,
            sku
          });
          emitProductSkuChange({
            type: 'change',
            quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
            ...getSkuChangeData(activeSku)
          });
        }

        emitProductSkuChanged({
          type: 'change',
          id,
          productId: spu.spuSeq,
          instances: {
            productImages: productImagesInstance,
            buttonGroup: ButtonGroup,
            quantityStepper
          },
          quantity: get(quantityStepper, 'skuStepper.data.value') || 1,
          ...getSkuChangeData(activeSku)
        });
      }
    });

    try {
      productPreviewInit({
        id,
        position,
        modalType,
        module,
        product: window.SL_State.get(`${statePath}`),
        modalContainer,
        modalContainerElement: modalContainer && modalContainer[0],
        instances: {
          productImages: productImagesInstance,
          buttonGroup: ButtonGroup,
          skuDataPool,
          quantityStepper,
          skuTrade
        }
      });
    } catch (e) {
      console.error(e);
    }

    window.SL_EventBus.on('global:currency:format', () => {
      setProductPrice(id, statePath, quantityStepper.activeSku);
    });
    return {
      skuTrade,
      quantityStepper,
      productEventRepeat: () => {
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

        thirdPartReport({
          activeSku: activeSkuCache,
          spu,
          sku
        });
        emitViewContent({
          content_spu_id: spu.spuSeq,
          content_sku_id,
          content_category: getSortationIds(spu),
          currency: getCurrencyCode(),
          value: price,
          quantity: 1,
          price,
          title: spu.title,
          module,
          selector: viewContentSelector,
          ...getHdReportViewCurSku(activeSkuCache)
        });
      },
      destroy: () => {
        if (typeof unbindProductPopup === 'function') {
          unbindProductPopup();
        }

        inquiryPriceModal.unbindEvents();

        if (typeof unmountedDiscountCoupon === 'function') {
          unmountedDiscountCoupon();
        }

        if (typeof unmountPromotionTags === 'function') {
          unmountPromotionTags();
        }

        removePositionListener();
        skuTrade.destory();
      }
    };
  }

  _exports.default = initPreview;
  return _exports;
}();