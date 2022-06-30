"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "recently-viewed" ], {
    "./src/assets/product/recently-viewed/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var axios = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(axios);
        var query_string = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        var baseReport = __webpack_require__("../shared/browser/report/common/baseReport.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var syntax_patch = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        const {formatCurrency} = currency["default"];
        const http = axios_default().create({
            baseURL: "/leproxy",
            timeout: 3e4,
            withCredentials: true,
            paramsSerializer(params) {
                return query_string.stringify(params);
            }
        });
        async function getProductsInfo(excludeProductIds, productIds) {
            const recentlyProductIds = (0, syntax_patch.nullishCoalescingOperator)(productIds, window.localStorage.getItem("history_browse_products"));
            const realRecentlyProductIds = recentlyProductIds && recentlyProductIds.split(",").filter((item => {
                if (excludeProductIds && excludeProductIds.length > 0) return -1 === excludeProductIds.indexOf(item);
                return item;
            }));
            if (!realRecentlyProductIds || !realRecentlyProductIds.join(",")) return [];
            const {data: {data}} = await http.get("/api/product/detail/info/batch/query", {
                params: {
                    productIdStr: realRecentlyProductIds.join(",")
                }
            });
            const sortProductInfoVoList = recentlyProductIds.split(",").map((item => {
                const hitProduct = data && data.productInfoVoList.find((_item => _item.spuSeq === item));
                if (hitProduct) return hitProduct;
                return null;
            }));
            return sortProductInfoVoList.filter((item => !!item));
        }
        async function fetchRecentlySection({sectionName = "product/detail/recently-viewed-products", excludeProductIds, productIds, context, mode = ""}) {
            const productInfoVoList = await getProductsInfo(excludeProductIds, productIds);
            let query = {
                sectionId: sectionName,
                context: {
                    historyBrowseProducts: productInfoVoList,
                    ...context
                }
            };
            let queryPath = "/page/section";
            if ("SINGLE" === mode) {
                query = {
                    data: query
                };
                query.mode = mode;
                queryPath = `/page${state_selector.SL_State.get("request.uri.path") || window.location.pathname}`;
            }
            const {data} = await http.post(queryPath, query);
            const html = "SINGLE" === mode ? data && data.html : data;
            return (0, syntax_patch.nullishCoalescingOperator)(html, "");
        }
        function initRecentlyReport(wrapperSelector, mountDom) {
            const report = new baseReport.BaseReport;
            report.view({
                selector: wrapperSelector,
                customParams: {
                    module: 108,
                    component: -999
                }
            });
            const recentlyItemCls = `.__sl-custom-track-product-recently-viewed-item`;
            const itemList = mountDom.querySelectorAll(`${recentlyItemCls}`);
            if (itemList && itemList.length > 0) {
                report.view({
                    targetList: itemList,
                    customParams: target => {
                        const {id: spuId} = target.dataset;
                        return {
                            module: 108,
                            component: 101,
                            history_product_id: spuId
                        };
                    }
                });
                $("body").on("click", `${recentlyItemCls}`, (function() {
                    const content_ids = $(this).attr("data-id");
                    const sku_id = $(this).attr("data-sku-id");
                    const content_name = $(this).attr("data-name");
                    const currency = state_selector.SL_State.get("storeInfo.currency");
                    const value = $(this).attr("data-price");
                    const position = Number($(`${recentlyItemCls}`).index($(this))) + 1;
                    const customParams = {
                        content_ids,
                        sku_id,
                        content_name,
                        currency,
                        value: formatCurrency(value),
                        position
                    };
                    report.selectContent({
                        customParams
                    });
                }));
            }
        }
        async function initProductRecentlyList({selector, sectionName, excludeProductIds, productIds, context, mode}) {
            const data = await fetchRecentlySection({
                sectionName,
                excludeProductIds,
                productIds,
                context,
                mode
            });
            const mountDom = document.querySelector(selector);
            if (mountDom) {
                mountDom.innerHTML = data;
                initRecentlyReport(selector, mountDom);
                window.lozadObserver && window.lozadObserver.observe && window.lozadObserver.observe();
            } else console.error("请添加有效的最近浏览商品模块挂载点");
            return data;
        }
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class ProductPreviewSection {
            constructor() {
                var _window$SL_State$get;
                _defineProperty(this, "instance", null);
                initProductRecentlyList({
                    selector: "#recently-viewed-products",
                    excludeProductIds: [ null === (_window$SL_State$get = window.SL_State.get("product.spu")) || void 0 === _window$SL_State$get ? void 0 : _window$SL_State$get.spuSeq ],
                    context: {
                        hiddenMount: true
                    },
                    sectionName: "recently-viewed",
                    mode: "SINGLE"
                });
            }
            onUnload() {
                if (this.instance) ;
            }
        }
        _defineProperty(ProductPreviewSection, "type", "recently-viewed");
        (0, sectionsLoad.registrySectionConstructor)("recently-viewed", ProductPreviewSection);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/recently-viewed/index.js")));
    __webpack_require__.O();
} ]);