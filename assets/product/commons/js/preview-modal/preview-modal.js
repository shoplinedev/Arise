window.SLM = window.SLM || {};

window.SLM['product/commons/js/preview-modal/preview-modal.js'] = window.SLM['product/commons/js/preview-modal/preview-modal.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const pageMapping = window['SLM']['theme-shared/utils/report/pageMapping.js'].default;
  const axios = window['axios']['default'];
  const quickViewClick = window['SLM']['theme-shared/events/product/quickView-click/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { isYoutube } = window['SLM']['theme-shared/components/hbs/productImages/js/index.js'];
  const { ModalWithHtml } = window['SLM']['commons/components/modal/index.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const { Loading } = window['SLM']['commons/components/toast/index.js'];
  const initPreview = window['SLM']['product/detail/js/product-preview.js'].default;
  const { getUrlQuery } = window['SLM']['commons/utils/url.js'];

  function modalExpose(modalPrefix) {
    if (window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report) {
      window.HdSdk.shopTracker.report('60006263', {
        event_name: 'view',
        page: modalPrefix === 'productRecommendModal' ? '123' : pageMapping[SL_State.get('templateAlias')]
      });
    }
  }

  function fetchDetail(uniqueKey, params) {
    const queryUrl = window.Shopline.redirectTo(`/products/${uniqueKey}`);
    return axios.get(queryUrl, {
      params: { ...params,
        view: 'modal',
        preview: getUrlQuery('preview'),
        themeId: getUrlQuery('themeId'),
        ignoreRedirect: getUrlQuery('ignoreRedirect'),
        engineType: getUrlQuery('engineType'),
        sourcePage: SL_State.get('templateAlias'),
        isJsonSettings: true
      }
    });
  }

  function createContent() {
    return $('<div class="product-preview-modal-content" data-scroll-lock-scrollable></div>');
  }

  const previewProductDescVideoMap = {};

  function collectProductDescVideo(children, id) {
    const productDescDom = children.find('[data-ssr-plugin-detail-description]');
    const video = productDescDom.find('video');
    const youtubeIframe = productDescDom.find('iframe').filter((index, item) => {
      const src = $(item).attr('src');
      return src && isYoutube(src);
    });
    previewProductDescVideoMap[id] = {};

    if (video.length > 0) {
      previewProductDescVideoMap[id].videoList = video;
    }

    if (youtubeIframe.length > 0) {
      previewProductDescVideoMap[id].youtubeIframeList = youtubeIframe;
    }
  }

  function handleProductDescVideoByCloseModal(id) {
    const videoMap = previewProductDescVideoMap[id] || {};
    const {
      videoList,
      youtubeIframeList
    } = videoMap;

    if (videoList && videoList.each) {
      videoList.each((index, item) => {
        if (item.pause) {
          item.pause();
        }
      });
    }

    if (youtubeIframeList && youtubeIframeList.each) {
      youtubeIframeList.each((index, item) => {
        const src = $(item).attr('src');
        $(item).attr('data-resource-url', src);
        $(item).attr('src', '');
      });
    }
  }

  function handleProductDescVideoByOpenModal(id) {
    const videoMap = previewProductDescVideoMap[id] || {};
    const {
      youtubeIframeList
    } = videoMap;

    if (youtubeIframeList && youtubeIframeList.each) {
      youtubeIframeList.each((index, item) => {
        const src = $(item).attr('data-resource-url');

        if (src) {
          $(item).attr('src', src);
        }
      });
    }
  }

  const modalMap = {};
  const previewMap = {};

  function previewModal({
    spuSeq,
    uniqueKey,
    query,
    position
  }) {
    let modalPrefix = 'productModal_';
    let queryObj = {};

    try {
      queryObj = { ...query
      };
      modalPrefix = queryObj.modalPrefix || 'productModal_';
    } catch (e) {}

    if (modalMap[spuSeq]) {
      handleProductDescVideoByOpenModal(spuSeq);
      modalMap[spuSeq].show && modalMap[spuSeq].show();
      previewMap[spuSeq] && previewMap[spuSeq].productEventRepeat();
      modalExpose(modalPrefix);
      quickViewClick({
        type: 'change',
        eventName: 'OPEN_QUICKVIEW_EVENT',
        prefix: modalPrefix,
        spuSeq,
        modal: modalMap[spuSeq],
        preview: {
          skuTrade: previewMap[spuSeq].skuTrade,
          quantityStepper: previewMap[spuSeq].quantityStepper
        },
        $el: document.getElementById(modalMap[spuSeq].modalId)
      });
    } else {
      const children = createContent();
      const modal = new ModalWithHtml({
        children,
        containerClassName: 'product-preview-modal-container',
        bodyClassName: 'product-preview-modal-body',
        zIndex: 128,
        closeCallback: () => {
          handleProductDescVideoByCloseModal(spuSeq);
          quickViewClick({
            eventName: 'CLOSE_QUICKVIEW_EVENT',
            spuSeq,
            $el: document.getElementById(modalMap[spuSeq].modalId)
          });
        }
      });
      modal.show();
      new Loading({
        target: children,
        loadingColor: 'currentColor',
        duration: -1
      }).open();
      fetchDetail(uniqueKey, queryObj).then(res => {
        children.html('<div class="product-preview-modal-top-space"></div>').append(res.data);
        collectProductDescVideo(children, spuSeq);
        modalExpose(modalPrefix);
        window.SL_EventBus.emit('global.activeIcon.show', {
          type: 'vip'
        });

        try {
          const preview = initPreview({
            module: 'quickViewModal',
            id: `${modalPrefix}${spuSeq}`,
            statePath: `${modalPrefix}${spuSeq}`,
            offsetTop: 48,
            container: modal.$modal.find('.product-preview-modal-body'),
            modalType: 'QuickView',
            position,
            modalContainer: modal.$modal,
            onAddSuccess: () => {
              modal.hide();
            }
          });
          modalMap[spuSeq] = modal;
          previewMap[spuSeq] = preview;
          quickViewClick({
            type: 'init',
            eventName: 'OPEN_QUICKVIEW_EVENT',
            prefix: modalPrefix,
            spuSeq,
            preview: {
              skuTrade: preview.skuTrade,
              quantityStepper: preview.quantityStepper
            },
            modal,
            $el: document.getElementById(modalMap[spuSeq].modalId)
          });
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
      }).catch(() => {
        new Toast().open(t('products.general.no_product_data_found'), 3000);
        modal.hide();
        modal.destroy();
      });
    }

    return modalMap[spuSeq];
  }

  _exports.default = previewModal;
  return _exports;
}();