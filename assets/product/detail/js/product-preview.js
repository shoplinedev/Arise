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
  const ProductCollapse = window['SLM']['product/detail/js/product-collapse.js'].default;
  const get = window['lodash']['get'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const promotionTagsInit = window['SLM']['product/detail/js/auto-coupon/auto-coupon-banner.js'].default;
  const FlashSale = window['SLM']['product/detail/js/flash-sale/index.js'].default;
  const AddToCartList = window['SLM']['product/detail/js/auto-coupon/add-to-cart-list.js'].default;
  const { changeURLArg, delParam } = window['SLM']['commons/utils/url.js'];
  const initDiscountCoupon = window['SLM']['product/detail/js/discount-coupon/index.js'].default;
  const hdProductViewContent = window['SLM']['theme-shared/report/product/product-preview.js'].default;
  const nullishCoalescingOperator = window['SLM']['product/utils/nullishCoalescingOperator.js'].default;
  const {
    formatCurrency
  } = currency;

  const emitProductSkuChange = data => {
    try {
      productSkuChange({ ...data,
        currency: SL_State.get('storeInfo.currency')
      });
    } catch (e) {
      console.error(e);
    }
  };

  const emitProductSkuChanged = data => {
    try {
      productSkuChanged({ ...data,
        currency: SL_State.get('storeInfo.currency')
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
        items: [{
          id: newActiveSku && newActiveSku.skuSeq,
          name: spu && spu.title,
          price: formatCurrency(newActiveSku && newActiveSku.price),
          variant: getVariant(newActiveSku && newActiveSku.skuAttributeIds, sku && sku.skuAttributeMap)
        }]
      }]],
      GA4: [['event', 'view_item', {
        currency: SL_State.get('storeInfo.currency'),
        value: formatCurrency(newActiveSku && newActiveSku.price),
        items: [{
          item_id: newActiveSku && newActiveSku.skuSeq,
          item_name: spu && spu.title,
          item_price: formatCurrency(newActiveSku && newActiveSku.price),
          item_variant: getVariant(newActiveSku && newActiveSku.skuAttributeIds, sku && sku.skuAttributeMap)
        }]
      }]],
      GAR: [['event', 'view_item', {
        value: formatCurrency(newActiveSku && newActiveSku.price),
        items: [{
          id: newActiveSku && newActiveSku.skuSeq,
          google_business_vertical: 'retail'
        }]
      }]],
      GARemarketing: [['event', 'view_item', {
        ecomm_prodid: newActiveSku && newActiveSku.skuSeq,
        ecomm_pagetype: 'product',
        ecomm_category: get(spu, 'sortationList[0].sortationId'),
        ecomm_pcat: get(spu, 'sortationList[0].sortationName'),
        ecomm_totalvalue: formatCurrency(newActiveSku && newActiveSku.price)
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

    const removePositionListener = listenPosition({
      id,
      offsetTop,
      container
    });
    createShadowDom();
    let productImagesInstance;

    try {
      productImagesInstance = new ProductImages({
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
    const addToCartList = new AddToCartList(spu, sku);
    addToCartList.init();
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
    console.log('isShowTips', isShowTips);
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
        price: formatCurrency(price || 0),
        originPrice: formatCurrency(originPrice || 0),
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

      if (isBatchBuy || isSoldOut) {
        sku_id = 'null';
        price = 'null';
      } else if (isSigleSku) {
        sku_id = get(sku, 'skuList[0].skuSeq');
        price = formatCurrency(get(sku, 'skuList[0].skuPrice') || 0);
      } else if (activeSku && activeSku.skuSeq) {
        sku_id = activeSku.skuSeq;
        price = formatCurrency(activeSku.price || 0);
      } else {
        sku_id = sku ? sku.skuList.filter(({
          soldOut
        }) => !soldOut)[0].skuSeq : 'null';
        price = formatCurrency(sku ? sku.skuList.filter(({
          soldOut
        }) => !soldOut)[0].skuPrice : 0);
      }

      return {
        curSkuId: sku_id,
        curSkuPrice: price
      };
    };

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
        console.log('sku Init', activeSku);
        inquiryPriceModal.setActiveSku(activeSku);

        if (id === 'productDetail') {
          window.productDetailDataBus.set('activeSku', activeSku);
          window.productDetailDataBus.emit('init:sku', activeSku);
        }

        if (activeSku) {
          quantityStepper.setActiveSku(activeSku);
          ButtonGroup.setActiveSku(activeSku);
          addToCartList.setActiveSku(activeSku);
          content_sku_id = activeSku.skuSeq;
          price = formatCurrency(activeSku.price || 0);
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
          currency: SL_State.get('storeInfo.currency'),
          value: price,
          quantity: 1,
          price,
          title: spu.title,
          module,
          selector: viewContentSelector,
          ...getHdReportViewCurSku(activeSkuCache)
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

          activeSkuCache = activeSku;
          inquiryPriceModal.setActiveSku(activeSku);
          productImagesInstance && productImagesInstance.skuImageChange && productImagesInstance.skuImageChange(get(activeSku, 'imageBeanList[0]'));

          if (activeSku || quantityStepper.activeSku) {
            setProductPrice(id, statePath, activeSku);
            quantityStepper.setActiveSku(activeSku);
            ButtonGroup.setActiveSku(activeSku);
            addToCartList.setActiveSku(activeSku);
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

    const unmountPromotionTags = promotionTagsInit(`#product-info_${id}`);
    const unmountedDiscountCoupon = initDiscountCoupon();
    window.SL_EventBus.on('global:currency:format', () => {
      setProductPrice(id, statePath, quantityStepper.activeSku);
    });

    try {
      const flashSale = new FlashSale();
      flashSale.init();
    } catch (e) {
      console.log('初始化限时促销工具出错');
      console.error(e);
    }

    return {
      skuTrade,
      quantityStepper,
      productEventRepeat: () => {
        let content_sku_id = '';
        let price = null;

        if (activeSkuCache) {
          content_sku_id = activeSkuCache.skuSeq;
          price = formatCurrency(activeSkuCache.price || 0);
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
          currency: SL_State.get('storeInfo.currency'),
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
        inquiryPriceModal.unbindEvents();
        unmountPromotionTags && unmountPromotionTags();
        unmountedDiscountCoupon && unmountedDiscountCoupon();
        removePositionListener();
        skuTrade.destory();
      }
    };
  }

  _exports.default = initPreview;
  return _exports;
}();