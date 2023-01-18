window.SLM = window.SLM || {};

window.SLM['product/detail/js/report.js'] = window.SLM['product/detail/js/report.js'] || function () {
  const _exports = {};
  const { collectObserver } = window['SLM']['theme-shared/utils/report/index.js'];
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const getCurrencyCode = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'].default;
  const { convertPrice } = window['SLM']['theme-shared/utils/currency/getCurrencyCode.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const currentSpu = SL_State.get('product.spu');
  const EVENT_ID = '60006253';
  const parent = '#page-product-detail';

  function hdReport(options) {
    if (window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report) {
      window.HdSdk.shopTracker.report(EVENT_ID, options);
    }
  }

  function clickCompReport(custom_component) {
    hdReport({
      event_name: 'click_component',
      page: 'pdp',
      custom_component
    });
  }

  function exposeCompReport(custom_component) {
    hdReport({
      event_name: 'component_view',
      page: 'pdp',
      custom_component
    });
  }

  const exposeConfig = {
    amazon: {
      cls: 'product_thirdParty_amazon',
      statName: 'gotoamazon'
    },
    productDesc: {
      cls: 'product-detail-description',
      statName: 'product_descri'
    },
    pcReviews: {
      cls: 'product-comment-pc',
      statName: 'reviews'
    },
    mReviews: {
      cls: 'product-comment-mobile',
      statName: 'reviews'
    },
    thirdPartyShare: {
      cls: 'product-third-party-share_productDetail',
      statName: 'share'
    },
    mMoreReviews: {
      cls: 'product-comment-mobile-summary-more',
      statName: 'more_reviews'
    },
    buyNow: {
      cls: '__sl-custom-track-product-detail-buy-now',
      statName: 'buy_now'
    },
    moreBundling: {
      cls: 'sales__productBundled',
      statName: 'more_bundling'
    },
    viewMore: {
      cls: 'product-info-salesTag',
      statName: 'view_more'
    }
  };

  function collectExposeObserver() {
    Object.keys(exposeConfig).forEach(item => {
      const selector = exposeConfig[item].cls;
      collectObserver({
        selector: `${parent} .${selector}`
      });
    });
  }

  $(function () {
    $(document.body).on('click', `${parent} .__sl-custom-track-product-recommend-item`, function () {
      const productId = $(this).data('id');
      const productIndex = $(this).data('index');
      const productStatus = $(this).data('status') ? 'selling' : 'soldout';
      const statData = {
        based_product_id: currentSpu && currentSpu.spuSeq,
        rec_product_id: productId,
        rank: Number(productIndex) + 1,
        status: productStatus
      };
      hdReport({
        event_name: 'recommenditem',
        ...statData
      });
    }).on('click', `${parent} .product_thirdParty_amazon`, function () {
      clickCompReport('gotoamazon');
    }).on('click', `${parent} .product-third-party-share_productDetail .third-party-item`, function () {
      const thisPlatform = $(this).data('platform');
      const platformMap = {
        Share: 'fb',
        Tweet: 'twitter',
        LINE: 'line',
        Whatsapp: 'whatsapp'
      };
      clickCompReport('share');
      hdReport({
        event_name: 'product_share',
        share_dest: platformMap[thisPlatform]
      });
    }).on('click', `${parent} .product-comment-mobile-summary-more`, function () {
      clickCompReport('more_reviews');
    }).on('click', `${parent} .__sl-custom-track-product-detail-buy-now`, () => {
      clickCompReport('buy_now');
    }).on('click', `${parent} .sales__productBundled`, () => {
      clickCompReport('more_bundling');
    });
    let isExposedProductVideo = false;
    let isPlayedProductVideo = false;
    window.SL_EventBus.on('product:product-play-video', () => {
      if (!isPlayedProductVideo) {
        clickCompReport('play_video');
        isPlayedProductVideo = true;
      }
    });
    window.SL_EventBus.on('product:expose-product-video', () => {
      if (!isExposedProductVideo) {
        exposeCompReport('play_video');
        isExposedProductVideo = true;
      }
    });
    window.SL_EventBus.emit('global:hdReport:exit', [EVENT_ID, null]);
    collectExposeObserver();
    window.SL_EventBus.on('global:hdReport:expose', target => {
      if ($(target).hasClass(exposeConfig.amazon.cls)) {
        exposeCompReport(exposeConfig.amazon.statName);
      }

      if ($(target).hasClass(exposeConfig.productDesc.cls)) {
        exposeCompReport(exposeConfig.productDesc.statName);
      }

      if ($(target).hasClass(exposeConfig.pcReviews.cls)) {
        exposeCompReport(exposeConfig.pcReviews.statName);
      }

      if ($(target).hasClass(exposeConfig.mReviews.cls)) {
        exposeCompReport(exposeConfig.mReviews.statName);
      }

      if ($(target).hasClass(exposeConfig.thirdPartyShare.cls)) {
        exposeCompReport(exposeConfig.thirdPartyShare.statName);
      }

      if ($(target).hasClass(exposeConfig.mMoreReviews.cls)) {
        exposeCompReport(exposeConfig.mMoreReviews.statName);
      }

      if ($(target).hasClass(exposeConfig.buyNow.cls)) {
        exposeCompReport(exposeConfig.buyNow.statName);
      }

      if ($(target).hasClass(exposeConfig.moreBundling.cls)) {
        exposeCompReport(exposeConfig.moreBundling.statName);
      }

      if ($(target).hasClass(exposeConfig.viewMore.cls)) {
        exposeCompReport(exposeConfig.viewMore.statName);
      }
    });
  });
  window.SL_EventBus.on('product:sku:change', ([sku]) => {
    if ((sku && sku.spuSeq) === (currentSpu && currentSpu.spuSeq)) {
      if (sku) {
        hdReport({
          event_name: 'sku_click',
          sku_id: sku.skuSeq
        });

        if (window.HdSdk) {
          window.HdSdk.shopTracker.collect({
            page: 105,
            module: 105,
            action_type: 102,
            sku_id: sku.skuSeq,
            spu_id: sku.spuSeq
          });
        }

        window.SL_EventBus.emit('global:thirdPartReport', {
          FBPixel: [['track', 'ViewContent', {
            content_ids: [sku && sku.spuSeq],
            content_name: currentSpu.title || '',
            content_category: '',
            content_type: 'product_group',
            currency: getCurrencyCode(),
            value: convertPrice(sku.price || 0)
          }, {
            eventID: `viewContent${getEventID()}`
          }]]
        });
      }
    }
  });
  return _exports;
}();