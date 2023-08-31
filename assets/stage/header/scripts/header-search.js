window.SLM = window.SLM || {};

window.SLM['stage/header/scripts/header-search.js'] = window.SLM['stage/header/scripts/header-search.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { debounce, escape } = window['lodash'];
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const virtualReport = window['SLM']['commons/report/virtualReport.js'].default;
  const SEARCH_PAGE_MAP = {
    index: 101,
    'products/search': 106,
    'products/detail': 102,
    collection: 107
  };
  const NOT_FOUND_PAGE = 120;
  const HEADER_SEARCH_EVENT = 'stage-header-search';
  const SEARCH_API = '/product/list/query/suggest';
  const SEARCH_TYPE = {
    0: 'suggest_search',
    1: 'suggest_ai',
    2: 'user_search'
  };

  const getSearchResultUrl = (key, type) => {
    return window.Shopline.redirectTo(`/search?keyword=${encodeURIComponent(key.trim())}&type=${SEARCH_TYPE[type]}`);
  };

  const renderSearchResultItem = (item, searchKey) => {
    const {
      title,
      src
    } = item;
    const url = getSearchResultUrl(title, src);

    if (title.toLocaleLowerCase() === searchKey.toLocaleLowerCase().trim()) {
      return '';
    }

    if (title.toLocaleLowerCase().startsWith(searchKey.toLocaleLowerCase())) {
      return `<li>
		<a class="body3" href="${url}" data-type="${src}" data-match=true >
			<span>${escape(title.substring(0, searchKey.length)).replaceAll(' ', '&nbsp;')}</span>${escape(title.substring(searchKey.length, title.length)).replaceAll(' ', '&nbsp;')}
		</a>
	</li>`;
    }

    return `<li>
		<a class="body3" href="${url}" data-type="${src}" data-match="true" >
${escape(title)}
		</a>
	</li>`;
  };

  const renderFirstKey = key => {
    const url = getSearchResultUrl(key, 2);
    return `<li>
	<a class="body3" href="${url}" data-type="2" data-match="true" >
<span>${escape(key)}</span>
			</a>
	</li>`;
  };

  const renderDynamicItem = (data, searchKey) => {
    virtualReport.reportSearchSuggestItem(true);
    return data.map(item => {
      return renderSearchResultItem(item, searchKey);
    }).join('');
  };

  const renderSearchResult = (data, searchKey) => {
    return renderFirstKey(searchKey) + renderDynamicItem(data, searchKey);
  };

  class HeaderSearch extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'stage:headerSearch'
      };
      this.cacheResult = {};
      this.classes = {
        activeClass: 'is-active',
        drawerOpenRoot: 'stage-drawer-root-open',
        drawerClosingRoot: 'stage-drawer-root-closing',
        drawerOpenRootSearch: 'stage-drawer-root-open-search'
      };
      this.selectors = {
        searchContainer: '.header__search--container',
        searchBtn: '.j-stage-header-search',
        searchCloseBtn: '.j-stage-search-close',
        suggestList: '.header__suggest--list',
        suggestLink: '.header__search--predicate li a',
        input: '.header__search--input',
        forceSearchBtn: '.j-stage-force-search',
        searchBarInput: '.searchbar--input',
        searchBarSuggestList: '.searchbar__suggest--list'
      };
      this.counter = 0;
      this.tempSearchKey = '';
      this.jq = {
        root: $('body')
      };
      this.$setNamespace(this.config.namespace);
      this.init();
      this.tempEventType = `click.tempWrapperClick-${this.namespace}-mask`;
      this.searchResultReport = debounce((data, searchKey) => {
        const template = window.SL_State.get('template');
        const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
        const suggest_ai_count = (data || []).filter(item => item.src === 1).length;
        const suggest_search_count = (data || []).filter(item => item.src === 0).length;
        window.HdSdk && window.HdSdk.shopTracker.report(60080059, {
          page,
          iframe_id: 1,
          event_name: 131,
          user_search: searchKey,
          suggest_ai: suggest_ai_count || 0,
          suggest_search: suggest_search_count || 0
        });
      }, 400);
    }

    bindClickEvent() {
      this.$on('click', this.selectors.searchBtn, () => {
        window.SL_EventBus.emit(HEADER_SEARCH_EVENT, 'open', 'btn');
      });
      this.$on('click', this.selectors.searchCloseBtn, () => {
        window.SL_EventBus.emit(HEADER_SEARCH_EVENT, 'close');
      });
      this.$on('click', this.selectors.suggestLink, e => {
        this.doSearchReport(e.target.innerText);
      });
    }

    init() {
      this.bindClickEvent();
      this.bindInput(this.selectors.searchBarInput);
      this.bindSearchBarFocustAndBlur();
      this.bindForceSearchEvent();
      window.SL_EventBus.on(HEADER_SEARCH_EVENT, (status, caller) => {
        if (status === undefined) {
          return;
        }

        if (status === 'open') {
          window.SL_EventBus.emit('force-header-intoView');
          this.openSearch(caller);
        } else {
          this.closeSearch();
        }
      });
    }

    searchViewReport(caller) {
      const template = window.SL_State.get('template');
      const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
      window.HdSdk && window.HdSdk.shopTracker.report(60080059, {
        page,
        iframe_id: 1,
        event_name: 101,
        general_component: 128
      });
      window.HdSdk && window.HdSdk.shopTracker.report(60080059, {
        page,
        iframe_id: 1,
        event_name: 109,
        general_component: caller === 'btn' ? 103 : 129
      });
    }

    searchExitReport() {
      const template = window.SL_State.get('template');
      const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
      window.HdSdk && window.HdSdk.shopTracker.report(60080059, {
        page,
        iframe_id: 1,
        event_name: 999,
        page_dest: window.location.origin + window.location.pathname
      });
    }

    openSearch(caller) {
      const $container = $(this.selectors.searchContainer);

      if ($container.hasClass(this.classes.activeClass)) {
        return;
      }

      this.searchViewReport(caller);
      this.prepareTransition($container, () => {
        this.jq.root.addClass([this.classes.drawerOpenRoot, this.classes.drawerOpenRootSearch]);
        $container.addClass(this.classes.activeClass);
      }, () => {});
      const $input = $(this.selectors.input);
      $input.trigger('focus');
      this.bindInput(this.selectors.input);
      this.bindMaskClick();
    }

    closeSearch() {
      const $container = $(this.selectors.searchContainer);

      if (!$container.hasClass(this.classes.activeClass)) {
        return;
      }

      this.searchExitReport();
      $(this.selectors.input).trigger('blur').val('');
      $(this.selectors.suggestList).html('');
      this.prepareTransition($container, () => {
        this.jq.root.removeClass([this.classes.drawerOpenRoot, this.classes.drawerOpenRootSearch]);
        this.jq.root.addClass(this.classes.drawerClosingRoot);
        $container.removeClass(this.classes.activeClass);
      }, () => {
        this.jq.root.removeClass(this.classes.drawerClosingRoot);
        this.counter = 0;
        this.tempSearchKey = '';
        this.$off(this.tempEventType);
      });
      this.$off('input', this.selectors.input);
    }

    bindMaskClick() {
      this.$on(this.tempEventType, ({
        target
      }) => {
        const container = $(this.selectors.searchContainer)[0];

        if (!container) {
          return;
        }

        if (!container.contains(target)) {
          window.SL_EventBus.emit(HEADER_SEARCH_EVENT, 'close');
        }
      });
    }

    doSearchReport(value) {
      virtualReport.reportSearch(value);
      window.SL_EventBus.emit('global:thirdPartReport', {
        GA: [['event', 'search', {
          search_term: value || ''
        }]],
        GA4: [['event', 'search', {
          search_term: value || ''
        }]]
      });
    }

    doSearch(e) {
      const id = $(e.currentTarget).data('id');
      const value = $(`#${id}__input`).val();

      if (!value) {
        return;
      }

      this.doSearchReport(value);
      window.location.href = getSearchResultUrl(value, 2);
    }

    bindForceSearchEvent() {
      this.$on('keydown', this.selectors.input, e => {
        if (e.keyCode === 13) {
          this.doSearch(e);
        }
      });
      this.$on('focus', this.selectors.input, () => {
        const $target = $('#suggest-menu-list');
        $(this.selectors.suggestList).html($target.html());
      });
      this.$on('blur', this.selectors.input, () => {
        setTimeout(() => {
          $(this.selectors.suggestList).html('');
        }, 500);
      });
      this.$on('click', this.selectors.forceSearchBtn, this.doSearch.bind(this));
    }

    offForceSearchEvent() {
      this.$off('keydown', this.selectors.searchBarInput);
      this.$off('click', this.selectors.forceSearchBtn);
    }

    updateDom(data, counter, resultList) {
      if (counter !== this.counter) {
        return;
      }

      const html = renderDynamicItem(data, this.tempSearchKey);
      const list = $(resultList)[0];
      const children = list && list.children || [];
      const firstItem = children[0] && children[0].outerHTML;

      if (firstItem) {
        $(resultList).html(firstItem + html);
      }
    }

    bindInput(selector) {
      this.$on('input', selector, debounce(async e => {
        const resultList = `#${$(e.target).data('id')}__suggest-list`;
        const $list = $(resultList);
        const {
          value: searchValue
        } = e.target;

        if (!searchValue) {
          $list.html('');
          virtualReport.reportSearchSuggestItem(false);
          return;
        }

        if (this.cacheResult[searchValue]) {
          const html = renderSearchResult(this.cacheResult[searchValue], searchValue);
          $list.html(html);
          return;
        }

        if ($list[0].children.length > 0) {
          $list[0].children[0].outerHTML = renderFirstKey(searchValue);
        } else {
          $list.html(renderFirstKey(searchValue));
        }

        this.counter += 1;
        this.tempSearchKey = searchValue;
        const ret = await request.get(SEARCH_API, {
          params: {
            word: searchValue,
            num: 10
          }
        });

        if (ret.code === 'SUCCESS') {
          this.cacheResult[searchValue] = ret.data;
          this.updateDom(ret.data, this.counter, resultList);
          this.searchResultReport(ret.data, searchValue);
        }
      }, 100));
    }

    bindSearchBarFocustAndBlur() {
      this.$on('keypress', this.selectors.searchBarInput, e => {
        if (e.keyCode === 13) {
          this.doSearch(e);
          return false;
        }
      });
      this.$on('focus', this.selectors.searchBarInput, e => {
        const resultList = `#${$(e.target).data('id')}__suggest-list`;
        const $target = $('#suggest-menu-list');
        $(resultList).html($target.html());
      });
      this.$on('blur', this.selectors.searchBarInput, e => {
        const resultList = `#${$(e.target).data('id')}__suggest-list`;
        setTimeout(() => {
          $(resultList).html('');
        }, 500);
      });
    }

    off() {
      this.$offAll();
    }

  }

  let instance = new HeaderSearch();
  $(document).on('shopline:section:load', () => {
    instance.off();
    instance = new HeaderSearch();
  });
  return _exports;
}();