window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-collapse.js'] = window.SLM['product/detail/js/product-collapse.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const createShadowDom = window['SLM']['product/commons/js/createShadowDom.js'].default;

  function whichTransitionEvent() {
    let t;
    const el = document.createElement('fakeElement');
    const transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MsTransition: 'msTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function openCollapseByHeight(element) {
    const initHeight = $(element).innerHeight();
    element.style.height = 'auto';
    const targetHeight = $(element).innerHeight();
    element.style.height = `${initHeight}px`;
    $(element).css('color');
    element.style.height = `${targetHeight}px`;
  }

  function closeCollapseByHeight(element) {
    const initHeight = $(element).innerHeight();
    $(element).css('height', `${initHeight}px`);
    $(element).css('color');
    element.style.height = `0px`;
  }

  const PAGE_ID = 'pageid';
  const CUSTOM_PAGE_TYPE = 'customize';

  const isReJsonSdkData = originData => {
    try {
      return JSON.parse(originData);
    } catch (error) {
      return false;
    }
  };

  _exports.isReJsonSdkData = isReJsonSdkData;

  class Collapse {
    constructor({
      lang = 'default',
      selector,
      cacheRequest = true
    }) {
      this.$container = $(selector);
      this.$collapseAsyncItems = this.$container.find('.base-collapse-item-async');
      this.$collapseSyncItems = this.$container.find('.base-collapse-item-sync');
      this.lang = lang;
      this.cacheRequest = cacheRequest;
      this.cacheData = {};
      this.$activeItem = null;
      this.transitionEvent = whichTransitionEvent();
      this.init();
    }

    init() {
      const self = this;
      const ids = Array.from(this.$collapseAsyncItems).map(item => $(item).data(PAGE_ID)).filter(id => !!id);
      this.$collapseAsyncItems.each((index, item) => {
        const $item = $(item);
        $item.find('.base-collapse-item__wrap').on(self.transitionEvent, function () {
          if ($(this).parent().hasClass('active')) {
            $(this).css('height', 'auto');
          }
        });

        if ($item.hasClass('active') && $item.data(PAGE_ID)) {
          this.requestCollapseContent($item.data(PAGE_ID)).then(res => {
            this.setCollapseContent(res && res.data, $item);
          });
        }
      });
      this.$collapseSyncItems.each((index, item) => {
        const $item = $(item);
        $item.find('.base-collapse-item__wrap').on(self.transitionEvent, function () {
          if ($(this).parent().hasClass('active')) {
            $(this).css('height', 'auto');
          }
        });

        if (!$item.data('isinitshadowdom')) {
          const html = $item.find('.base-collapse-item__content').html();
          self.transContentByShadowDom($item, html);
          $item.data('isinitshadowdom', true);
        }
      });
      this.requestCollapseTitle(ids);
      this.bindEvent();
    }

    requestCollapseTitle(ids) {
      if (!ids || !ids.length) {
        return Promise.resolve();
      }

      const {
        lang
      } = this;
      return request({
        url: 'site/render/page/basic/infos',
        method: 'GET',
        params: {
          pageIds: ids.join(',')
        }
      }).then(res => {
        if (res && Array.isArray(res.data)) {
          const data = res.data.reduce((fin, item) => {
            const name = item && item.name ? item.name[lang] : '';
            return { ...fin,
              [item && item.id]: name
            };
          }, {});
          this.setCollapseTitle(data);
        }
      });
    }

    setCollapseTitle(titleMap) {
      this.$collapseAsyncItems.each((index, item) => {
        const $item = $(item);
        const title = titleMap[$item.data(PAGE_ID)];

        if (title) {
          $item.find('.base-collapse-item__title').text(title);
        }
      });
    }

    bindEvent() {
      const self = this;
      this.$collapseAsyncItems.on('click', '.base-collapse-item__header', function () {
        const $item = $(this).closest('.base-collapse-item');
        const id = $item.data(PAGE_ID);
        const isOpen = $item.hasClass('active');

        if (isOpen) {
          self.close($item);
          return;
        }

        self.requestCollapseContent(id).then(res => {
          self.setCollapseContent(res && res.data, $item);
          self.$activeItem = $item;
          self.open($item);
        });
      });
      this.$collapseSyncItems.on('click', '.base-collapse-item__header', function () {
        const $item = $(this).closest('.base-collapse-item');
        const isOpen = $item.hasClass('active');

        if (isOpen) {
          self.close($item);
          return;
        }

        if (!$item.data('isinitshadowdom')) {
          const html = $item.find('.base-collapse-item__content').html();
          self.transContentByShadowDom($item, html);
          $item.data('isinitshadowdom', true);
        }

        self.open($item);
      });
      window.SL_EventBus.on('stage:locale:change', () => {
        if (this.$activeItem) {
          this.calcCollapseContentHeight(this.$activeItem);
        } else {
          this.$collapseAsyncItems.each((index, item) => {
            const $item = $(item);

            if ($item.hasClass('active') && $item.data(PAGE_ID)) {
              this.calcCollapseContentHeight($item);
            }
          });
        }
      });
    }

    requestCollapseContent(id) {
      if (this.cacheRequest && this.cacheData[id]) {
        return Promise.resolve(this.cacheData[id]);
      }

      return request({
        url: `site/render/page/${CUSTOM_PAGE_TYPE}/${id}`,
        method: 'GET'
      }).then(res => {
        if (this.cacheRequest) {
          this.cacheData[id] = res;
        }

        return res;
      }).catch(() => {
        if (this.cacheRequest) {
          this.cacheData[id] = {};
        }

        return {};
      });
    }

    getCustomPageContent(pageConfig) {
      return `<div class="custom-page-render-container">${pageConfig}</div>`;
    }

    transContentByShadowDom($item, content) {
      const $content = $item.find('.base-collapse-item__content');
      $content.html(`
      <div style="overflow: hidden;" data-node="shadow-content">
        <div class="mce-content-body">
          ${content}
        </div>
      </div>
      <div data-node="shadow-dom"></div>
    `);
      createShadowDom();
    }

    setCollapseContent(data, $item) {
      const content = this.getCustomPageContent(data && data.htmlConfig);
      this.transContentByShadowDom($item, content);
    }

    calcCollapseContentHeight($item) {
      const $content = $item.find('.base-collapse-item__content');
      const images = Array.from($content.find('img')).map(item => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = item.src;

          image.onload = () => {
            resolve(image);
          };

          image.onerror = () => {
            reject(image);
          };
        });
      });
      Promise.allSettled(images).then(() => {
        setTimeout(() => {
          const height = $content.outerHeight();
          $content.parent().css({
            height
          });
        }, 0);
      }).catch(() => {
        $content.parent().css({
          height: 'auto'
        });
      });
    }

    open($item) {
      openCollapseByHeight($item.find('.base-collapse-item__wrap').get(0));
      $item.addClass('active');
    }

    close($item) {
      this.$activeItem = null;
      closeCollapseByHeight($item.find('.base-collapse-item__wrap').get(0));
      $item.removeClass('active');
    }

  }

  _exports.default = Collapse;
  return _exports;
}();