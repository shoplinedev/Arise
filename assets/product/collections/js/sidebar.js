window.SLM = window.SLM || {};

window.SLM['product/collections/js/sidebar.js'] = window.SLM['product/collections/js/sidebar.js'] || function () {
  const _exports = {};
  const axios = window['axios']['default'];
  const querystring = window['querystring']['default'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const chunk = window['lodash']['chunk'];
  const filterUpdateSection = window['SLM']['theme-shared/events/product/updateSection/index.js'].default;
  const { disablePageScroll, enablePageScroll } = window['SLM']['commons/components/modal/common.js'];
  const { updateUrlQueryParam, getUrlAllQuery } = window['SLM']['commons/utils/url.js'];
  const createShadowDom = window['SLM']['product/commons/js/createShadowDom.js'].default;
  const { DRAWER_CALLBACK_EVENT_NAME } = window['SLM']['commons/components/topDrawer/index.js'];
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const base = new Base();

  class Sidebar {
    constructor(opt) {
      this.options = $.extend({}, opt);
      this.$menu = $('.product-list-menu');
      this.$collectionsAjaxInner = $('#collectionsAjaxInner');
      this.listGridSelector = {
        trigger: '.product-grid-select',
        wrapper: '#product-list-container'
      };
      this.listListNumSelector = {
        trigger: '.J_product_list_showby'
      };
      this.listGridWrapCls = {
        small_grid: 'row g-4 row-cols-2 row-cols-md-4 product-list-small-grid product-list-item-parent-controller',
        list: 'row g-4 row-cols-1 row-cols-md-1 product-list-single-grid product-list-item-parent-controller'
      };
      this.collapsePanelSelectors = {
        trigger: '.collapsible-trigger',
        module: '.collapsible-content',
        moduleInner: '.collapsible-content-inner'
      };
      this.collapsePanelClasses = {
        hide: 'hide',
        show: 'is-open',
        auto: 'collapsible-autoHeight'
      };
      this.tagSelectors = {
        tag: '.product_base-checkbox',
        activeTagsList: '.product_sidebar-activeTagList',
        activeTagsListItem: '.product_sidebar-activeTagList-item',
        drawerFilterBtn: '#collections-drawer-filter',
        moreBtn: '.product-list-sidebar-box-ul-more'
      };
      this.tagClasses = {
        active: 'tag-active',
        none: 'tag-none',
        remove: 'tag-remove',
        drawerFilterBtnActive: 'filter-active',
        moreClass: 'filterHasMore'
      };
      this.config = {
        combineTags: false
      };
      this.filterRelationClasses = {
        filters: '#js-product-collections-mobile-filters',
        container: '#js-product-collections_filter_container',
        wrapper: '.product_collections-filters-wrapper',
        drawer: '.product_collections-drawer',
        header: '#stage-header .header__layout',
        headerWrapper: '.header-sticky-wrapper',
        isActive: 'is-active',
        headerIsSticky: 'is-sticky'
      };
      this.collectionsUrl = window.location.href;
    }

    init() {
      this.initCollapsePanel();
      this.initTags();
      this.initEventBus();
      this.setStyle();
      this.fetchChildCategoryProductNum();
      this.initListNum();
      this.listenHeaderSticky();
    }

    initCollapsePanel() {
      $(document).on('click', this.collapsePanelSelectors.trigger, this.collapsePanelToggle.bind(this));
    }

    setTransitionHeight(container, height, isOpen) {
      if (height === 0) {
        container.css('height', `0px`);
      } else {
        container.css('height', `auto`);
      }

      if (isOpen) {
        container.removeClass(this.collapsePanelClasses.show);
      } else {
        container.addClass(this.collapsePanelClasses.show);
      }
    }

    collapsePanelToggle(event) {
      const el = $(event.currentTarget);
      const isOpen = el.hasClass('is-open');
      const box = el.siblings(this.collapsePanelSelectors.module);
      if (!box) return;
      const boxHeight = box.find(this.collapsePanelSelectors.moduleInner).outerHeight();

      if (isOpen) {
        el.removeClass(this.collapsePanelClasses.show);
        this.setTransitionHeight(box, 0, isOpen);
      } else {
        el.addClass(this.collapsePanelClasses.show);
        this.setTransitionHeight(box, boxHeight, isOpen);
      }
    }

    initListNum() {
      $(document).on('click', this.listListNumSelector.trigger, function () {
        const newQueryObj = { ...getUrlAllQuery(),
          page_num: 1,
          page_size: $(this).attr('data-num')
        };
        const newQueryStr = querystring.stringify(newQueryObj);
        window.location.href = `${window.location.origin + window.location.pathname}?${newQueryStr}`;
      });
    }

    initTags() {
      $(document).on('click', this.tagSelectors.tag, this.tagsToggle.bind(this));
      $(document).on('click', this.tagSelectors.activeTagsListItem, this.tagsToggle.bind(this));
      this.config.combineTags = this.$menu.attr('data-combine-tags') === 'true';
      $(document).on('click', this.tagSelectors.drawerFilterBtn, this.drawerToggle.bind(this));
      $(document).on('click', this.tagSelectors.moreBtn, this.moreClick.bind(this));
    }

    listenHeaderSticky() {}

    tagsToggle(event) {
      const $el = $(event.currentTarget);
      const isActive = $el.hasClass(this.tagClasses.active);
      const isRemove = $el.hasClass(this.tagClasses.remove);

      if (this.config.combineTags) {
        if (isActive) {
          $el.removeClass(this.tagClasses.active);
        } else {
          $el.addClass(this.tagClasses.active);

          if (isRemove) {
            $el.remove();
          } else {
            const tagText = $el.text();
            const tagVal = $el.attr('data-tag');
            const activeTagNode = this.createTagNode(tagText, tagVal);
            $(this.tagSelectors.activeTagsList).append(activeTagNode);
          }
        }
      } else {
        $(this.tagSelectors.tag).removeClass(this.tagClasses.active);
        $el.addClass(this.tagClasses.active);
      }

      this.setNewUrl($el);
    }

    createTagNode(tagText, tagVal) {
      this.tagNode = `
    <li class="product_sidebar-activeTagList-item tag-remove body4" data-tag="${tagVal}">
      <div class="product_sidebar-activeTagList-item-content">
        <span>${tagText}</span>
        <svg class="product_sidebar-activeTagList-item-iconClose" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L1 9" stroke="currentColor" stroke-linecap="round"/>
          <path d="M1 1L9 9" stroke="currentColor" stroke-linecap="round"/>
        </svg>
      </div>
    </li>`;
      return this.tagNode;
    }

    getTagsSelected() {
      const $el = $(this.tagSelectors.tag);
      const val = [];

      if ($el.length) {
        Array.from($el).forEach(item => {
          const $dom = $(item);

          if ($dom.hasClass(this.tagClasses.active)) {
            val.push($dom.attr('data-tag'));
          }
        });
      }

      return val;
    }

    setTagsSelected(val) {
      const $el = $(this.tagSelectors.tag);
      Array.from($el).filter(`[data-tag=${val}]`).addClass(this.tagClasses.active);
    }

    setNewUrl($el) {
      let newUrl = $el.attr('data-href') || $el.parent().attr('data-href');
      newUrl = updateUrlQueryParam(newUrl, 'page_num', 1);
      window.history.pushState({}, '', newUrl);
      this.getNewTagsContentAjax(newUrl);
    }

    getNewTagsContentAjax(url) {
      url = url.indexOf('?') === -1 ? `${url}?view=ajax&isJsonSettings=true` : `${url}&view=ajax&isJsonSettings=true`;
      this.fetchCollectionHtml(url);
    }

    fetchCollectionHtml(url) {
      this.closeDrawer();
      axios.get(url).then(res => {
        const {
          data
        } = res;
        this.$collectionsAjaxInner.html(data);
        this.setStyle();
        createShadowDom();
        enablePageScroll();
        filterUpdateSection && filterUpdateSection({
          content: this.$collectionsAjaxInner
        });
        this.renderChildCategoryProductNum();
        const headerHeightNow = $('#stage-header').outerHeight();
        const $top = $('#collectionsAjaxInner').offset().top - headerHeightNow;

        if (typeof this.headerHeight !== 'undefined') {
          $(this.filterRelationClasses.container).css('top', `${this.headerHeight}px`);
        }

        $(document).scrollTop($top);
      });
    }

    drawerToggle(event) {
      const $current = $(event.currentTarget);
      const $filters = $(this.filterRelationClasses.filters);
      const $container = $(this.filterRelationClasses.container);
      const $wrapper = $container.find(this.filterRelationClasses.wrapper);
      $wrapper.parent().css('z-index', 0);
      this.scrollToTop();

      if ($wrapper.length > 0) {
        this.drawerTransition($current);
        return;
      }

      $container.append($filters.clone(true));
      this.drawerTransition($current);
    }

    drawerTransition($current) {
      const $container = $(this.filterRelationClasses.container);
      const $wrapper = $container.find(this.filterRelationClasses.wrapper);

      if (!$wrapper.hasClass(this.filterRelationClasses.isActive)) {
        disablePageScroll($wrapper.get(0));
      }

      base.prepareTransition($wrapper, () => {
        this.toggleFilterActive($current);
      }, () => {
        const isOpen = $current.hasClass('is-open');
        const zIndex = isOpen ? 2 : 0;
        $wrapper.parent().css({
          zIndex
        });
      });
    }

    toggleFilterActive($current) {
      const $container = $(this.filterRelationClasses.container);
      const $wrapper = $container.find(this.filterRelationClasses.wrapper);
      const isOpen = !$current.hasClass('is-open');
      $container.toggleClass('is-open', isOpen);
      $current.toggleClass('is-open', isOpen);
      $wrapper.toggleClass(this.filterRelationClasses.isActive, isOpen);

      if (!isOpen) {
        enablePageScroll($wrapper.get(0));
      }
    }

    scrollToTop() {
      const $header = $(this.filterRelationClasses.header);
      const $headerWrapper = $header.parents(this.filterRelationClasses.headerWrapper);
      const $container = $(this.filterRelationClasses.container);
      const headerHeight = $header.outerHeight();
      const containerHeight = $container.outerHeight();
      const maxFiltersHeight = window.innerHeight - headerHeight - containerHeight;
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerClientRectTop = $container.get(0).getBoundingClientRect().top;
      const scrollTop = windowScrollTop + containerClientRectTop;
      let realScrollTop = containerClientRectTop > headerHeight ? scrollTop : scrollTop - headerHeight;

      if (containerClientRectTop === headerHeight && !$headerWrapper.hasClass(this.filterRelationClasses.headerIsSticky)) {
        realScrollTop = scrollTop;
      }

      $container.get(0).style.setProperty('--maxFiltersHeight', `${maxFiltersHeight}px`);
      window.scrollTo({
        top: realScrollTop,
        behavior: 'smooth'
      });
    }

    closeDrawer() {
      window.SL_EventBus.emit('stage:drawer', {
        id: 'product_collections-menu-drawer',
        status: 'close'
      });
    }

    moreClick(event) {
      const $el = $(event.currentTarget).find('span');
      const $ul = $el.parent().siblings(this.collapsePanelSelectors.moduleInner);

      if ($ul.hasClass(this.tagClasses.moreClass)) {
        $ul.removeClass(this.tagClasses.moreClass);
        $el.html(t('products.product_list.less'));
      } else {
        $ul.addClass(this.tagClasses.moreClass);
        $el.html(t('products.product_list.more'));
      }
    }

    renderChildCategoryProductNum() {
      const childCategoryDom = $('.product-list-child-category');
      const isOpenProductNum = childCategoryDom.data('show-product-num');

      if (this.sortationCountVoList && isOpenProductNum) {
        this.sortationCountVoList.forEach(item => {
          const targetSortation = childCategoryDom.find(`[data-sortation-id="${item.sortationId}"]`);
          const innerText = targetSortation.eq(0).text();
          targetSortation.text(`${innerText} — ${item.count}`);
        });
      }
    }

    fetchChildCategoryProductNum() {
      const allChildSortation = $('[data-all-show-sortation-ids]').eq(0);
      const isOpenProductNum = $('.product-list-child-category').data('show-product-num');
      if (allChildSortation.length === 0 || !isOpenProductNum) return;
      const sortationIds = allChildSortation.data('all-show-sortation-ids').split(', ');
      const chunks = chunk(sortationIds, 20);
      const promise = [];
      chunks.forEach((item, index) => {
        const chunkSortationIds = item.join(',');
        const apiPrefix = window.location.hostname === 'localhost' ? '/leproxy/api' : '/api';
        promise[index] = axios.get(`${apiPrefix}/product/list/sortation/count/query?sortationIdStr=${chunkSortationIds}`);
      });
      this.sortationCountVoList = [];
      Promise.all(promise).then(res => {
        res.forEach(item => {
          const {
            data
          } = item.data || {};

          if (data && data.sortationCountVoList) {
            data.sortationCountVoList.forEach(_ => {
              this.sortationCountVoList.push(_);
            });
          }
        });
        this.renderChildCategoryProductNum();
      });
    }

    initEventBus() {
      const $this = this;
      $(document).on('shopline:section:load', e => {
        if (e.detail.sectionId === 'collection-page') {
          $this.$menu = $('.product-list-menu');
          $this.$collectionsAjaxInner = $('#collectionsAjaxInner');
          $this.config.combineTags = $this.$menu.attr('data-combine-tags') === 'true';

          if (!this.sortationCountVoList) {
            $this.fetchChildCategoryProductNum();
          } else {
            $this.renderChildCategoryProductNum();
          }
        }
      });
      window.SL_EventBus.on(DRAWER_CALLBACK_EVENT_NAME, ({
        status,
        id
      }) => {
        if (status === 'open') {
          $(`#${id} .drawer__main`).scrollTop(0);
        }
      });
      window.SL_EventBus.on('stage:header:stickyElementHeight', ({
        stickyElementHeight
      }) => {
        const header = $('#stage-header');
        const headerIsSticky = header.data('sticky');
        const headerHeight = headerIsSticky ? header.outerHeight() : 0;
        $('#js-product-collections_filter_container').css({
          top: headerIsSticky ? `${headerHeight + stickyElementHeight}px` : `${stickyElementHeight}px`
        });
      });
    }

    setFilterText() {
      const $filterDom = $('#collections-drawer-filter');

      if (!$filterDom) {
        return;
      }

      const num = this.getTagsSelected().length;
      const $filterDomText = $filterDom.find('.product_collections-drawer-filter-text');
      const textStr = `Filter（${num}）`;

      if (num > 0 && $filterDomText) {
        $filterDomText.html(textStr);
      } else if (num < 0) {
        $filterDomText.html('Filter');
      }
    }

    setStyle() {
      const header = $('#stage-header');
      const headerIsSticky = header.data('sticky');
      const headerHeight = headerIsSticky ? header.outerHeight() : 0;
      const windowHeight = $(window).outerHeight();
      const filterTop = 45;
      $('.product-list-filter').css({
        maxHeight: headerIsSticky ? `${windowHeight - headerHeight}px` : `${windowHeight - filterTop}px`,
        top: headerIsSticky ? `${headerHeight + 10}px` : `${filterTop}px`
      });
    }

  }

  _exports.default = Sidebar;
  return _exports;
}();