"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-collection-header" ], {
    "./src/assets/product/collections/header.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var debounce = __webpack_require__("./node_modules/lodash/debounce.js");
        var debounce_default = __webpack_require__.n(debounce);
        class Banner {
            constructor() {
                var _this$$banner, _this$$banner$offset;
                this.$container = document.querySelector(".product-list-banner");
                this.$banner = __SL_$__("#productListBanner-parallax");
                this.$bannerTop = (null === (_this$$banner = this.$banner) || void 0 === _this$$banner ? void 0 : null === (_this$$banner$offset = _this$$banner.offset()) || void 0 === _this$$banner$offset ? void 0 : _this$$banner$offset.top) || 0;
                this.speed = 2;
                this.isInit = false;
                this.isVisible = false;
                this.isParallax = false;
            }
            init() {
                if (this.isInit) this.destory();
                this.isInit = true;
                if (!this.$banner) return;
                this.setSizes();
                const isParallax = __SL_$__("#productListBanner-parallax").attr("data-parallax-scroll");
                if ("true" === isParallax) this.scrollHandler();
                const observer = new IntersectionObserver((entries => {
                    entries.forEach((entry => {
                        this.isVisible = entry.isIntersecting;
                        if (this.isVisible) __SL_$__(window).on("scroll", this.onScroll.bind(this)); else __SL_$__(window).off("scroll", this.onScroll.bind(this));
                    }));
                }), {
                    rootMargin: "0px 0px 0px 0px"
                });
                observer.observe(this.$container);
                __SL_$__(window).on("resize", this.debounceSetSizes.bind(this));
            }
            debounceSetSizes() {
                return debounce_default()(this.setSizes.bind(this), 250);
            }
            onScroll() {
                if (!this.isVisible) return;
                const isParallax = __SL_$__("#productListBanner-parallax").attr("data-parallax-scroll");
                if ("true" !== isParallax) return;
                requestAnimationFrame(this.scrollHandler.bind(this));
            }
            scrollHandler() {
                var _this$$container;
                const viewPortHeight = __SL_$__(window).height();
                const {top, height} = null === (_this$$container = this.$container) || void 0 === _this$$container ? void 0 : _this$$container.getBoundingClientRect();
                if (!top && !height) return false;
                const movableDistance = viewPortHeight + height;
                const currentDistance = viewPortHeight - top;
                const percent = (currentDistance / movableDistance * this.speed * 38).toFixed(2);
                const num = 38 - Number(percent);
                __SL_$__("#productListBanner-parallax").css("transform", `translate3d(0 , ${-num}% , 0)`);
            }
            setSizes() {
                var _document$querySelect, _document$querySelect2;
                const domTop = (null === (_document$querySelect = document.querySelector("#productListBanner-parallax")) || void 0 === _document$querySelect ? void 0 : null === (_document$querySelect2 = _document$querySelect.getBoundingClientRect()) || void 0 === _document$querySelect2 ? void 0 : _document$querySelect2.top) || 0;
                this.$elTop = domTop + window.scrollY;
            }
            destory() {
                this.$banner.css("transform", "none");
                __SL_$__(window).off("scroll", this.onScroll.bind(this));
                __SL_$__(window).off("resize", this.debounceSetSizes.bind(this));
                this.isInit = false;
            }
        }
        class CollectionsHeader {
            constructor() {
                const collectionsBanner = new Banner;
                collectionsBanner.init();
                this.instance = collectionsBanner;
            }
            onUnload() {
                if (this.instance) {
                    var _this$instance;
                    null === (_this$instance = this.instance) || void 0 === _this$instance ? void 0 : _this$instance.destory();
                }
            }
        }
        (0, sectionsLoad.registrySectionConstructor)("collections-header", CollectionsHeader);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/collections/header.js")));
    __webpack_require__.O();
} ]);