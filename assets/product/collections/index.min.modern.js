"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-collection" ], {
    "./src/assets/product/collections/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var querystring = __webpack_require__("./node_modules/querystring/index.js");
        var url = __webpack_require__("./src/assets/commons/utils/url.js");
        const sort = () => {
            __SL_$__("#collectionsAjaxInner").delegate("#collection-sort", "change", (function() {
                const newQueryObj = {
                    ...(0, url.getUrlAllQuery)(),
                    sort_type: __SL_$__(this).val()
                };
                const newQueryStr = querystring.stringify(newQueryObj);
                setTimeout((() => {
                    window.location.href = `${window.location.origin + window.location.pathname}?${newQueryStr}`;
                }), 0);
            }));
            if ("none" === __SL_$__("#product-list-list-header-filter").css("display")) __SL_$__(".product-list-filter-container").css("width", "100%");
        };
        var createShadowDom = __webpack_require__("./src/assets/product/commons/js/createShadowDom.js");
        var axios = __webpack_require__("./node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(axios);
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var api_logger = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        const EVENT_NAME = "Product::UpdateSection::Filter";
        const logger = (0, api_logger["default"])(EVENT_NAME);
        const external = window.Shopline && window.Shopline.event;
        const filterUpdateSection = data => {
            if (external) {
                logger.info(`[emit]`, data);
                return external.emit(EVENT_NAME, {
                    data,
                    onSuccess: result => {
                        logger.info("success", result);
                    },
                    onError: error => {
                        logger.error(error);
                    }
                });
            }
        };
        filterUpdateSection.apiName = EVENT_NAME;
        const updateSection = filterUpdateSection;
        var common = __webpack_require__("./src/assets/commons/components/modal/common.js");
        var topDrawer = __webpack_require__("./src/assets/commons/components/topDrawer/index.js");
        var BaseClass = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        const base = new BaseClass["default"];
        class Sidebar {
            constructor(opt) {
                this.options = __SL_$__.extend({}, opt);
                this.$menu = __SL_$__(".product-list-menu");
                this.$collectionsAjaxInner = __SL_$__("#collectionsAjaxInner");
                this.listGridSelector = {
                    trigger: ".product-grid-select",
                    wrapper: "#product-list-container"
                };
                this.listListNumSelector = {
                    trigger: ".J_product_list_showby"
                };
                this.listGridWrapCls = {
                    small_grid: "row g-4 row-cols-2 row-cols-md-4 product-list-small-grid product-list-item-parent-controller",
                    list: "row g-4 row-cols-1 row-cols-md-1 product-list-single-grid product-list-item-parent-controller"
                };
                this.collapsePanelSelectors = {
                    trigger: ".collapsible-trigger",
                    module: ".collapsible-content",
                    moduleInner: ".collapsible-content-inner"
                };
                this.collapsePanelClasses = {
                    hide: "hide",
                    show: "is-open",
                    auto: "collapsible-autoHeight"
                };
                this.tagSelectors = {
                    tag: ".product_base-checkbox",
                    activeTagsList: ".product_sidebar-activeTagList",
                    activeTagsListItem: ".product_sidebar-activeTagList-item",
                    drawerFilterBtn: "#collections-drawer-filter",
                    moreBtn: ".product-list-sidebar-box-ul-more"
                };
                this.tagClasses = {
                    active: "tag-active",
                    none: "tag-none",
                    remove: "tag-remove",
                    drawerFilterBtnActive: "filter-active",
                    moreClass: "filterHasMore"
                };
                this.config = {
                    combineTags: false
                };
                this.filterRelationClasses = {
                    filters: "#js-product-collections-mobile-filters",
                    container: "#js-product-collections_filter_container",
                    wrapper: ".product_collections-filters-wrapper",
                    drawer: ".product_collections-drawer",
                    header: "#stage-header .header__layout",
                    headerWrapper: ".header-sticky-wrapper",
                    isActive: "is-active",
                    headerIsSticky: "is-sticky"
                };
                this.collectionsUrl = window.location.href;
            }
            init() {
                this.initCollapsePanel();
                this.initTags();
                this.initEventBus();
                this.setStyle();
                this.initListNum();
                this.listenHeaderSticky();
            }
            initCollapsePanel() {
                __SL_$__(document).on("click", this.collapsePanelSelectors.trigger, this.collapsePanelToggle.bind(this));
            }
            setTransitionHeight(container, height, isOpen) {
                console.log("container, height, isOpen", container, height, isOpen);
                if (0 === height) container.css("height", `0px`); else container.css("height", `auto`);
                if (isOpen) container.removeClass(this.collapsePanelClasses.show); else container.addClass(this.collapsePanelClasses.show);
            }
            collapsePanelToggle(event) {
                const el = __SL_$__(event.currentTarget);
                const isOpen = el.hasClass("is-open");
                const box = el.siblings(this.collapsePanelSelectors.module);
                if (!box) return;
                const boxHeight = box.find(this.collapsePanelSelectors.moduleInner).outerHeight();
                console.log("box", boxHeight);
                if (isOpen) {
                    el.removeClass(this.collapsePanelClasses.show);
                    this.setTransitionHeight(box, 0, isOpen);
                } else {
                    el.addClass(this.collapsePanelClasses.show);
                    this.setTransitionHeight(box, boxHeight, isOpen);
                }
            }
            initListNum() {
                __SL_$__(document).on("click", this.listListNumSelector.trigger, (function() {
                    const newQueryObj = {
                        ...(0, url.getUrlAllQuery)(),
                        page_num: 1,
                        page_size: __SL_$__(this).attr("data-num")
                    };
                    const newQueryStr = querystring.stringify(newQueryObj);
                    window.location.href = `${window.location.origin + window.location.pathname}?${newQueryStr}`;
                }));
            }
            initTags() {
                __SL_$__(document).on("click", this.tagSelectors.tag, this.tagsToggle.bind(this));
                __SL_$__(document).on("click", this.tagSelectors.activeTagsListItem, this.tagsToggle.bind(this));
                this.config.combineTags = "true" === this.$menu.attr("data-combine-tags");
                __SL_$__(document).on("click", this.tagSelectors.drawerFilterBtn, this.drawerToggle.bind(this));
                __SL_$__(document).on("click", this.tagSelectors.moreBtn, this.moreClick.bind(this));
            }
            listenHeaderSticky() {}
            tagsToggle(event) {
                const $el = __SL_$__(event.currentTarget);
                const isActive = $el.hasClass(this.tagClasses.active);
                const isRemove = $el.hasClass(this.tagClasses.remove);
                if (this.config.combineTags) if (isActive) $el.removeClass(this.tagClasses.active); else {
                    $el.addClass(this.tagClasses.active);
                    if (isRemove) $el.remove(); else {
                        const tagText = $el.text();
                        const tagVal = $el.attr("data-tag");
                        const activeTagNode = this.createTagNode(tagText, tagVal);
                        __SL_$__(this.tagSelectors.activeTagsList).append(activeTagNode);
                    }
                } else {
                    __SL_$__(this.tagSelectors.tag).removeClass(this.tagClasses.active);
                    $el.addClass(this.tagClasses.active);
                }
                this.setNewUrl($el);
            }
            createTagNode(tagText, tagVal) {
                this.tagNode = `\n    <li class="product_sidebar-activeTagList-item tag-remove body4" data-tag="${tagVal}">\n      <div class="product_sidebar-activeTagList-item-content">\n        <span>${tagText}</span>\n        <svg class="product_sidebar-activeTagList-item-iconClose" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M9 1L1 9" stroke="currentColor" stroke-linecap="round"/>\n          <path d="M1 1L9 9" stroke="currentColor" stroke-linecap="round"/>\n        </svg>\n      </div>\n    </li>`;
                return this.tagNode;
            }
            getTagsSelected() {
                const $el = __SL_$__(this.tagSelectors.tag);
                const val = [];
                if ($el.length) Array.from($el).forEach((item => {
                    const $dom = __SL_$__(item);
                    if ($dom.hasClass(this.tagClasses.active)) val.push($dom.attr("data-tag"));
                }));
                return val;
            }
            setTagsSelected(val) {
                const $el = __SL_$__(this.tagSelectors.tag);
                Array.from($el).filter(`[data-tag=${val}]`).addClass(this.tagClasses.active);
            }
            setNewUrl($el) {
                let newUrl = $el.attr("data-href") || $el.parent().attr("data-href");
                newUrl = (0, url.updateUrlQueryParam)(newUrl, "page_num", 1);
                window.history.pushState({}, "", newUrl);
                this.getNewTagsContentAjax(newUrl);
            }
            getNewTagsContentAjax(url) {
                url = -1 === url.indexOf("?") ? `${url}?view=ajax&isJsonSettings=true` : `${url}&view=ajax&isJsonSettings=true`;
                this.fetchCollectionHtml(url);
            }
            fetchCollectionHtml(url) {
                this.closeDrawer();
                axios_default().get(url).then((res => {
                    var _window, _window$lozadObserver;
                    const {data} = res;
                    this.$collectionsAjaxInner.html(data);
                    null === (_window = window) || void 0 === _window ? void 0 : null === (_window$lozadObserver = _window.lozadObserver) || void 0 === _window$lozadObserver ? void 0 : _window$lozadObserver.observe();
                    this.setStyle();
                    (0, createShadowDom["default"])();
                    (0, common.enablePageScroll)();
                    null === updateSection || void 0 === updateSection ? void 0 : updateSection({
                        content: this.$collectionsAjaxInner
                    });
                    const headerHeightNow = __SL_$__("#stage-header").outerHeight();
                    const $top = __SL_$__("#collectionsAjaxInner").offset().top - headerHeightNow;
                    if ("undefined" !== typeof this.headerHeight) __SL_$__(this.filterRelationClasses.container).css("top", `${this.headerHeight}px`);
                    __SL_$__(document).scrollTop($top);
                }));
            }
            drawerToggle(event) {
                const $current = __SL_$__(event.currentTarget);
                const $filters = __SL_$__(this.filterRelationClasses.filters);
                const $container = __SL_$__(this.filterRelationClasses.container);
                const $wrapper = $container.find(this.filterRelationClasses.wrapper);
                $wrapper.parent().css("z-index", 0);
                this.scrollToTop();
                if ($wrapper.length > 0) {
                    this.drawerTransition($current);
                    return;
                }
                $container.append($filters.clone(true));
                this.drawerTransition($current);
            }
            drawerTransition($current) {
                const $container = __SL_$__(this.filterRelationClasses.container);
                const $wrapper = $container.find(this.filterRelationClasses.wrapper);
                if (!$wrapper.hasClass(this.filterRelationClasses.isActive)) (0, common.disablePageScroll)($wrapper.get(0));
                base.prepareTransition($wrapper, (() => {
                    this.toggleFilterActive($current);
                }), (() => {
                    const isOpen = $current.hasClass("is-open");
                    const zIndex = isOpen ? 2 : 0;
                    $wrapper.parent().css({
                        zIndex
                    });
                }));
            }
            toggleFilterActive($current) {
                const $container = __SL_$__(this.filterRelationClasses.container);
                const $wrapper = $container.find(this.filterRelationClasses.wrapper);
                const isOpen = !$current.hasClass("is-open");
                $container.toggleClass("is-open", isOpen);
                $current.toggleClass("is-open", isOpen);
                $wrapper.toggleClass(this.filterRelationClasses.isActive, isOpen);
                if (!isOpen) (0, common.enablePageScroll)($wrapper.get(0));
            }
            scrollToTop() {
                const $header = __SL_$__(this.filterRelationClasses.header);
                const $headerWrapper = $header.parents(this.filterRelationClasses.headerWrapper);
                const $container = __SL_$__(this.filterRelationClasses.container);
                const headerHeight = $header.outerHeight();
                const containerHeight = $container.outerHeight();
                const maxFiltersHeight = window.innerHeight - headerHeight - containerHeight;
                const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const containerClientRectTop = $container.get(0).getBoundingClientRect().top;
                const scrollTop = windowScrollTop + containerClientRectTop;
                let realScrollTop = containerClientRectTop > headerHeight ? scrollTop : scrollTop - headerHeight;
                if (containerClientRectTop === headerHeight && !$headerWrapper.hasClass(this.filterRelationClasses.headerIsSticky)) realScrollTop = scrollTop;
                $container.get(0).style.setProperty("--maxFiltersHeight", `${maxFiltersHeight}px`);
                window.scrollTo({
                    top: realScrollTop,
                    behavior: "smooth"
                });
            }
            closeDrawer() {
                window.SL_EventBus.emit("stage:drawer", {
                    id: "product_collections-menu-drawer",
                    status: "close"
                });
            }
            moreClick(event) {
                const $el = __SL_$__(event.currentTarget).find("span");
                const $ul = $el.parent().siblings(this.collapsePanelSelectors.moduleInner);
                if ($ul.hasClass(this.tagClasses.moreClass)) {
                    $ul.removeClass(this.tagClasses.moreClass);
                    $el.html((0, i18n.t)("products.product_list.less"));
                } else {
                    $ul.addClass(this.tagClasses.moreClass);
                    $el.html((0, i18n.t)("products.product_list.more"));
                }
            }
            initEventBus() {
                const $this = this;
                __SL_$__(document).on("shopline:section:load", (e => {
                    if ("collection-page" === e.detail.sectionId) {
                        var _window2, _window2$lozadObserve;
                        null === (_window2 = window) || void 0 === _window2 ? void 0 : null === (_window2$lozadObserve = _window2.lozadObserver) || void 0 === _window2$lozadObserve ? void 0 : _window2$lozadObserve.observe();
                        $this.$menu = __SL_$__(".product-list-menu");
                        $this.$collectionsAjaxInner = __SL_$__("#collectionsAjaxInner");
                        $this.config.combineTags = "true" === $this.$menu.attr("data-combine-tags");
                    }
                }));
                window.SL_EventBus.on(topDrawer.DRAWER_CALLBACK_EVENT_NAME, (({status, id}) => {
                    if ("open" === status) __SL_$__(`#${id} .drawer__main`).scrollTop(0);
                }));
                window.SL_EventBus.on("stage:header:stickyElementHeight", (({stickyElementHeight}) => {
                    const header = __SL_$__("#stage-header");
                    const headerIsSticky = header.data("sticky");
                    const headerHeight = headerIsSticky ? header.outerHeight() : 0;
                    __SL_$__("#js-product-collections_filter_container").css({
                        top: headerIsSticky ? `${headerHeight + stickyElementHeight}px` : `${stickyElementHeight}px`
                    });
                }));
            }
            setFilterText() {
                var _this$getTagsSelected;
                const $filterDom = __SL_$__("#collections-drawer-filter");
                if (!$filterDom) return;
                const num = (null === (_this$getTagsSelected = this.getTagsSelected()) || void 0 === _this$getTagsSelected ? void 0 : _this$getTagsSelected.length) || 0;
                const $filterDomText = $filterDom.find(".product_collections-drawer-filter-text");
                const textStr = `Filter（${num}）`;
                if (num > 0 && $filterDomText) $filterDomText.html(textStr); else if (num < 0) $filterDomText.html("Filter");
            }
            setStyle() {
                const header = __SL_$__("#stage-header");
                const headerIsSticky = header.data("sticky");
                const headerHeight = headerIsSticky ? header.outerHeight() : 0;
                const windowHeight = __SL_$__(window).outerHeight();
                const filterTop = 45;
                __SL_$__(".product-list-filter").css({
                    maxHeight: headerIsSticky ? `${windowHeight - headerHeight}px` : `${windowHeight - filterTop}px`,
                    top: headerIsSticky ? `${headerHeight + 10}px` : `${filterTop}px`
                });
            }
        }
        __webpack_require__("./src/assets/product/commons/js/preview-modal/index.js");
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var report = __webpack_require__("../shared/browser/utils/report/index.js");
        var product_product_item = __webpack_require__("../shared/browser/report/product/product-item.js");
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var newCurrency = __webpack_require__("../shared/browser/utils/newCurrency/index.js");
        var _SL_State$get, _SL_State$get2;
        const {formatCurrency} = newCurrency["default"];
        const hdReport = new product_product_item["default"];
        const eventid = "60006260";
        const productItemClassName = "__sl-custom-track-product-list-item";
        const productItemSelector = `.${productItemClassName}`;
        const productMenuClassName = "__sl-custom-track-product-menu";
        const productMenuSelector = `.${productMenuClassName}`;
        const productMenuItemClassName = "__sl-custom-track-product-menu-item";
        const productMenuItemSelector = `.${productMenuItemClassName}`;
        const productList = null !== (_SL_State$get = state_selector.SL_State.get("products.list")) && void 0 !== _SL_State$get ? _SL_State$get : null;
        const productSortation = null !== (_SL_State$get2 = state_selector.SL_State.get("productSortation")) && void 0 !== _SL_State$get2 ? _SL_State$get2 : null;
        if (productList) {
            hdReport.itemListView({
                productsInfo: {
                    productSortation,
                    productList
                }
            });
            productList.forEach(((product, index) => {
                hdReport.itemView({
                    baseParams: {
                        module: 109,
                        component: 101,
                        action_type: 101
                    },
                    productInfo: {
                        ...product,
                        index
                    }
                });
            }));
        }
        window.SL_EventBus.on("global:hdReport:expose", (target => {
            const $target = __SL_$__(target);
            if ($target.hasClass(productItemClassName)) {
                var _window$HdSdk;
                const product_id = $target.data("id");
                const product_name = $target.data("name");
                const product_price = formatCurrency($target.data("price"));
                const position = $target.data("index") + 1;
                const status = $target.data("status") ? "soldout" : "selling";
                null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(eventid, {
                    event_name: "product_view",
                    product_id,
                    product_name,
                    product_price,
                    position,
                    status
                });
            } else if ($target.hasClass(productMenuClassName)) {
                var _window$HdSdk2, _window$HdSdk3;
                null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.report(eventid, {
                    page: "product_list",
                    event_name: "component_view",
                    custom_component: "product_menu"
                });
                null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : _window$HdSdk3.shopTracker.report(eventid, {
                    event_name: "menu_view",
                    product_menu: ($target.data("all-show-sortation-ids") || "").split(", ")
                });
            }
        }));
        (0, report.collectObserver)({
            selector: productItemSelector
        });
        (0, report.collectObserver)({
            selector: productMenuSelector
        });
        const sortBy = {
            1: "default",
            2: "default",
            3: "newestToOldest",
            4: "priceLowToHigh",
            5: "priceHighToLow"
        };
        __SL_$__(document.body).on("click", productMenuSelector, (function() {
            var _window$HdSdk4;
            null === (_window$HdSdk4 = window.HdSdk) || void 0 === _window$HdSdk4 ? void 0 : _window$HdSdk4.shopTracker.report(eventid, {
                event_name: "click_component",
                page: "product_list",
                custom_component: "product_menu"
            });
        })).on("click", productMenuItemSelector, (function() {
            var _window$HdSdk5;
            null === (_window$HdSdk5 = window.HdSdk) || void 0 === _window$HdSdk5 ? void 0 : _window$HdSdk5.shopTracker.report(eventid, {
                event_name: "menu_click",
                product_menu: [ __SL_$__(this).data("sortation-id") ]
            });
        })).on("change", "#collection-sort", (function() {
            var _window$HdSdk6;
            null === (_window$HdSdk6 = window.HdSdk) || void 0 === _window$HdSdk6 ? void 0 : _window$HdSdk6.shopTracker.report(eventid, {
                event_name: "sort_click",
                sort_by: sortBy[__SL_$__(this).val()] || sortBy[1]
            });
        }));
        window.SL_EventBus.emit("global:hdReport:exit", [ eventid ]);
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const sideBar = new Sidebar({});
        sideBar.init();
        class CollectionsPage {
            constructor() {
                _defineProperty(this, "instance", null);
                sort();
                (0, createShadowDom["default"])();
            }
            onUnload() {
                if (this.instance) {
                    var _this$instance;
                    null === (_this$instance = this.instance) || void 0 === _this$instance ? void 0 : _this$instance.destory();
                }
            }
        }
        _defineProperty(CollectionsPage, "type", "collections-page");
        (0, sectionsLoad.registrySectionConstructor)("collections-page", CollectionsPage);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/collections/main.js")));
    __webpack_require__.O();
} ]);