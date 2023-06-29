window.SLM = window.SLM || {};

window.SLM['product/collections/js/infiniteScrollList.js'] = window.SLM['product/collections/js/infiniteScrollList.js'] || function () {
  const _exports = {};
  const axios = window['axios']['default'];
  const filterUpdateSection = window['SLM']['theme-shared/events/product/updateSection/index.js'].default;
  const { changeURLArg, delParam, getUrlQuery } = window['SLM']['commons/utils/url.js'];

  function initWhenVisible(options) {
    const threshold = options.threshold ? options.threshold : 0;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (typeof options.callback === 'function') {
            options.callback(entry);
          }
        }
      });
    }, {
      rootMargin: `0px 0px ${threshold}px 0px`
    });
    observer.observe(options.observeElement[0]);
    return observer;
  }

  _exports.initWhenVisible = initWhenVisible;

  class InfiniteScrollList {
    constructor(options) {
      this.loading = false;
      this.options = options;
      this.anchorObserverTarget = null;
      this.init(options);
      this.destroyUpdateSectionEvent = this.listerUpdateSection();
    }

    deletePageNumParamByUrl() {
      const hasPageNumParam = getUrlQuery('page_num');

      if (hasPageNumParam) {
        const fixUrl = delParam('page_num');
        window.history.pushState({}, '', fixUrl);
      }
    }

    init(options) {
      this.deletePageNumParamByUrl();

      if (this.anchorObserverTarget) {
        this.anchorObserverTarget.disconnect();
      }

      const infiniteScrollAnchor = $('.product-list-infinite-scroll-anchor');
      const isInitLastPage = infiniteScrollAnchor.length <= 0;
      if (isInitLastPage) return;
      const _options = {
        observeElement: infiniteScrollAnchor,
        callback: () => {
          this.loadMore();
        },
        ...options
      };
      this.anchorObserverTarget = initWhenVisible(_options);
    }

    listerUpdateSection() {
      const bindInit = this.init.bind(this);
      window.Shopline.event.on('Product::UpdateSection::Filter', bindInit);
      window.Shopline.event.on('plugin::filter::updateSection', bindInit);
      return () => {
        window.Shopline.event.off('Product::UpdateSection::Filter', bindInit);
        window.Shopline.event.off('plugin::filter::updateSection', bindInit);
      };
    }

    handleLoading(isLoad) {
      this.loading = isLoad;

      if (isLoad) {
        $('.product-list-infinite-scroll-loading').css('display', 'flex');
      } else {
        $('.product-list-infinite-scroll-loading').css('display', 'none');
      }
    }

    loadMore() {
      const observeEle = $('.product-list-infinite-scroll-anchor');
      const appendEle = $('.product-infinite-list-container');
      const lastPageEle = $('.product-infinite-list-lastPage');
      const isLoadMoreLastPage = lastPageEle.length > 0;

      if (isLoadMoreLastPage) {
        this.anchorObserverTarget.disconnect();
      }

      if (this.loading || isLoadMoreLastPage) return;
      const pageNum = Number(observeEle.attr('data-pageNum')) + 1;
      this.handleLoading(true);
      const requestUrl = changeURLArg(window.location.search, 'page_num', pageNum, false);
      const collectionPath = window.location.pathname;
      axios.get(`${collectionPath}${requestUrl}&view=ajax&isJsonSettings=true&loadMore=true`).then(res => {
        const {
          data
        } = res;

        if (data) {
          const children = $(data).children();
          appendEle.append(children);
          observeEle.attr('data-pageNum', pageNum);
          filterUpdateSection({
            content: appendEle
          });
        }
      }).catch(err => {
        console.error(`InfiniteScrollList ${err}`);
      }).finally(() => {
        this.handleLoading(false);
      });
    }

    destroy() {
      if (this.anchorObserverTarget) {
        this.anchorObserverTarget.disconnect();
      }

      if (this.destroyUpdateSectionEvent) {
        this.destroyUpdateSectionEvent();
      }
    }

  }

  _exports.default = InfiniteScrollList;
  return _exports;
}();