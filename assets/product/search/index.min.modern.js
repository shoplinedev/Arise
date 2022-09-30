"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-search" ], {
    "./src/assets/product/search/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var newCurrency = __webpack_require__("../shared/browser/utils/newCurrency/index.js");
        var utils = __webpack_require__("../shared/browser/report/product/utils/index.js");
        var baseReport = __webpack_require__("../shared/browser/report/common/baseReport.js");
        const {formatCurrency} = newCurrency["default"];
        class SearchItemReport extends baseReport.BaseReport {
            searchResults(reportData) {
                (0, utils.validParams)(reportData);
                const {baseParams = {}, productInfo} = reportData;
                const {search_string, productList} = productInfo;
                const productsInfoParams = {
                    search_string,
                    items: productList.map((({reportSkuId, spuSeq, productMinPrice}, index) => ({
                        sku_id: reportSkuId,
                        spu_id: spuSeq,
                        position: index + 1,
                        price: formatCurrency(productMinPrice),
                        quantity: 1
                    })))
                };
                super.searchResults({
                    baseParams,
                    customParams: productsInfoParams
                });
            }
            itemSelect(reportData) {
                (0, utils.validParams)(reportData);
                const {baseParams = {}, productInfo, extInfo = {}} = reportData;
                const {id, skuId, status, price, index} = productInfo;
                const productInfoParams = {
                    spu_id: id,
                    sku_id: skuId,
                    price: formatCurrency(price),
                    position: index + 1,
                    status: status ? 102 : 101
                };
                const params = {
                    ...productInfoParams,
                    ...extInfo
                };
                super.selectContent({
                    baseParams,
                    customParams: params
                });
            }
        }
        var product_item = __webpack_require__("../shared/browser/report/product/product-item.js");
        var report = __webpack_require__("../shared/browser/utils/report/index.js");
        const noop = () => {};
        function reportEvent(eventId, params = {}) {
            var _window$HdSdk;
            if (!eventId) throw new Error("eventId must be provided!");
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(eventId, params);
        }
        function getReportMethods(eventId) {
            if (!eventId) throw new Error("eventId must be provided!");
            const exposeApis = {};
            exposeApis.exitPageExposure = (exitParams = null) => {
                window.SL_EventBus.emit("global:hdReport:exit", [ eventId, exitParams ]);
            };
            exposeApis.event = (params = {}) => {
                reportEvent(eventId, params);
            };
            exposeApis.exposure = (selector, callback = noop) => {
                if (!selector || "string" !== typeof selector) throw new TypeError("selector is must be a string");
                window.SL_EventBus.on("global:hdReport:expose", (target => {
                    if (null !== target && void 0 !== target && target.classList.contains(selector.slice(1))) callback(target);
                }));
                (0, report.collectObserver)({
                    selector
                });
            };
            return exposeApis;
        }
        var BaseClass = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        const base = new BaseClass["default"]("product:search:report");
        const productItemSelector = ".__sl-custom-track-product-item-search";
        const hdReport = new SearchItemReport;
        const hdItemReport = new product_item["default"];
        function startReport() {
            const {exitPageExposure, exposure, event} = getReportMethods("60006259");
            exitPageExposure();
            bindEventReport(event);
            exposure(productItemSelector, (target => {
                const $el = __SL_$__(target);
                const id = $el.data("id");
                const status = $el.data("status") ? "soldout" : "selling";
                const index = $el.data("index");
                const productPrice = $el.data("price");
                const productName = $el.data("name");
                event({
                    event_name: "product_view",
                    product_id: id,
                    product_name: productName,
                    product_price: productPrice,
                    position: index + 1,
                    status
                });
            }));
            searchHdReport();
        }
        function searchHdReport() {
            var _SL_State$get, _SL_State$get2, _SL_State$get3;
            const productList = null !== (_SL_State$get = state_selector.SL_State.get("products.list")) && void 0 !== _SL_State$get ? _SL_State$get : null;
            const searchRequest = null !== (_SL_State$get2 = state_selector.SL_State.get("request")) && void 0 !== _SL_State$get2 ? _SL_State$get2 : null;
            const productSortation = null !== (_SL_State$get3 = state_selector.SL_State.get("productSortation")) && void 0 !== _SL_State$get3 ? _SL_State$get3 : null;
            const productInfo = {
                search_string: searchRequest.uri.query.keyword,
                productList,
                productSortation
            };
            hdReport.searchResults({
                productInfo
            });
            productList.forEach(((product, index) => {
                hdItemReport.itemView({
                    baseParams: {
                        module: 109,
                        component: 101,
                        action_type: 101
                    },
                    productInfo: {
                        ...product,
                        index
                    },
                    extInfo: {
                        search_string: searchRequest.uri.query.keyword
                    }
                });
            }));
        }
        function bindEventReport(event) {
            var _SL_State$get4;
            const searchRequest = null !== (_SL_State$get4 = state_selector.SL_State.get("request")) && void 0 !== _SL_State$get4 ? _SL_State$get4 : null;
            base.$on("click", productItemSelector, (({currentTarget}) => {
                const id = __SL_$__(currentTarget).data("id");
                event({
                    product_id: id,
                    event_name: "click_product"
                });
                hdReport.itemSelect({
                    productInfo: __SL_$__(currentTarget).data(),
                    extInfo: {
                        search_string: searchRequest.uri.query.keyword
                    }
                });
            }));
        }
        startReport();
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        function gen(name, mods) {
            if (!mods) return "";
            if ("string" === typeof mods) return ` ${name}--${mods}`;
            if (Array.isArray(mods)) return mods.reduce(((ret, item) => ret + gen(name, item)), "");
            return Object.keys(mods).reduce(((ret, key) => ret + (mods[key] ? gen(name, key) : "")), "");
        }
        function createBEM(name) {
            return (el, mods) => {
                if (el && "string" !== typeof el) {
                    mods = el;
                    el = "";
                }
                el = el ? `${name}__${el}` : name;
                return `${el}${gen(el, mods)}`;
            };
        }
        function createNamespace(commonName, name) {
            name = `${commonName}-${name}`;
            return createBEM(name);
        }
        const bem = createNamespace("product", "search");
        function getUrlWithSearch(keyword) {
            const currentUrl = window.location.href;
            const url = new URL(currentUrl);
            if (keyword) url.searchParams.set("keyword", keyword);
            return keyword ? `${url.origin}${url.pathname}?${url.searchParams.toString()}` : `${url.origin}${url.pathname}`;
        }
        function popupSearch() {
            const $searchWrapper = __SL_$__("#JS-product-search-input");
            const base = new BaseClass["default"]("product:search:input", $searchWrapper);
            const $searchInput = $searchWrapper.find(`.${bem("input")}`);
            base.$on("click", `.${bem("input")}`, (e => {
                __SL_$__(e.target).trigger("blur").val("");
                window.SL_EventBus.emit("stage-header-search", "open", "input");
            }));
            base.$on("click", `.${bem("inputButton")}`, (() => {
                const keyword = $searchInput.val();
                const url = getUrlWithSearch(keyword.trim());
                window.location.href = url;
            }));
        }
        popupSearch();
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/search/main.js")));
    __webpack_require__.O();
} ]);