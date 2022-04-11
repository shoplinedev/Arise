"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "recently-viewed" ], {
    "./src/assets/product/recently-viewed/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var axios = __webpack_require__("../shared/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(axios);
        var query_string = __webpack_require__("../shared/node_modules/query-string/index.js");
        const http = axios_default().create({
            baseURL: "/leproxy",
            timeout: 3e4,
            withCredentials: true,
            paramsSerializer(params) {
                return query_string.stringify(params);
            }
        });
        async function getProductsInfo(excludeProductIds, productIds) {
            const recentlyProductIds = null !== productIds && void 0 !== productIds ? productIds : window.localStorage.getItem("history_browse_products");
            const realRecentlyProductIds = null === recentlyProductIds || void 0 === recentlyProductIds ? void 0 : recentlyProductIds.split(",").filter((item => {
                if ((null === excludeProductIds || void 0 === excludeProductIds ? void 0 : excludeProductIds.length) > 0) return -1 === excludeProductIds.indexOf(item);
                return item;
            }));
            if (!(null !== realRecentlyProductIds && void 0 !== realRecentlyProductIds && realRecentlyProductIds.join(","))) return [];
            const {data: {data}} = await http.get("/api/product/detail/info/batch/query", {
                params: {
                    productIdStr: realRecentlyProductIds.join(",")
                }
            });
            const sortProductInfoVoList = recentlyProductIds.split(",").map((item => {
                const hitProduct = null === data || void 0 === data ? void 0 : data.productInfoVoList.find((_item => _item.spuSeq === item));
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
                var _Window, _Window$SL_State, _Window$SL_State$get;
                query = {
                    data: query
                };
                query.mode = mode;
                queryPath = `/page${(null === (_Window = Window) || void 0 === _Window ? void 0 : null === (_Window$SL_State = _Window.SL_State) || void 0 === _Window$SL_State ? void 0 : null === (_Window$SL_State$get = _Window$SL_State.get) || void 0 === _Window$SL_State$get ? void 0 : _Window$SL_State$get.call(_Window$SL_State, "request.uri.path")) || window.location.pathname}`;
            }
            const {data} = await http.post(queryPath, query);
            const html = "SINGLE" === mode ? null === data || void 0 === data ? void 0 : data.html : data;
            return null !== html && void 0 !== html ? html : "";
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
                var _window, _window$lozadObserver;
                mountDom.innerHTML = data;
                null === (_window = window) || void 0 === _window ? void 0 : null === (_window$lozadObserver = _window.lozadObserver) || void 0 === _window$lozadObserver ? void 0 : _window$lozadObserver.observe();
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
    __webpack_exec__("./src/assets/product/recently-viewed/index.js");
} ]);