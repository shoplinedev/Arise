"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-template" ], {
    "./src/assets/product/detail/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var report = __webpack_require__("../shared/browser/utils/report/index.js");
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        var newCurrency = __webpack_require__("../shared/browser/utils/newCurrency/index.js");
        const {formatCurrency} = newCurrency["default"];
        const currentSpu = window.SL_State.get("product.spu");
        const EVENT_ID = "60006253";
        const report_parent = "#page-product-detail";
        function hdReport(options) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(EVENT_ID, options);
        }
        function clickCompReport(custom_component) {
            hdReport({
                event_name: "click_component",
                page: "pdp",
                custom_component
            });
        }
        function exposeCompReport(custom_component) {
            hdReport({
                event_name: "component_view",
                page: "pdp",
                custom_component
            });
        }
        const exposeConfig = {
            amazon: {
                cls: "product_thirdParty_amazon",
                statName: "gotoamazon"
            },
            productDesc: {
                cls: "product-detail-description",
                statName: "product_descri"
            },
            pcReviews: {
                cls: "product-comment-pc",
                statName: "reviews"
            },
            mReviews: {
                cls: "product-comment-mobile",
                statName: "reviews"
            },
            thirdPartyShare: {
                cls: "product-third-party-share_productDetail",
                statName: "share"
            },
            mMoreReviews: {
                cls: "product-comment-mobile-summary-more",
                statName: "more_reviews"
            },
            buyNow: {
                cls: "__sl-custom-track-product-detail-buy-now",
                statName: "buy_now"
            },
            moreBundling: {
                cls: "sales__productBundled",
                statName: "more_bundling"
            },
            viewMore: {
                cls: "product-info-salesTag",
                statName: "view_more"
            }
        };
        function collectExposeObserver() {
            Object.keys(exposeConfig).forEach((item => {
                const selector = exposeConfig[item].cls;
                (0, report.collectObserver)({
                    selector: `${report_parent} .${selector}`
                });
            }));
        }
        __SL_$__((function() {
            __SL_$__(document.body).on("click", `${report_parent} .__sl-custom-track-product-recommend-item`, (function() {
                const productId = __SL_$__(this).data("id");
                const productIndex = __SL_$__(this).data("index");
                const productStatus = __SL_$__(this).data("status") ? "selling" : "soldout";
                const statData = {
                    based_product_id: null === currentSpu || void 0 === currentSpu ? void 0 : currentSpu.spuSeq,
                    rec_product_id: productId,
                    rank: Number(productIndex) + 1,
                    status: productStatus
                };
                hdReport({
                    event_name: "recommenditem",
                    ...statData
                });
            })).on("click", `${report_parent} .product_thirdParty_amazon`, (function() {
                clickCompReport("gotoamazon");
            })).on("click", `${report_parent} .product-third-party-share_productDetail .third-party-item`, (function() {
                const thisPlatform = __SL_$__(this).data("platform");
                const platformMap = {
                    Share: "fb",
                    Tweet: "twitter",
                    LINE: "line",
                    Whatsapp: "whatsapp"
                };
                clickCompReport("share");
                hdReport({
                    event_name: "product_share",
                    share_dest: platformMap[thisPlatform]
                });
            })).on("click", `${report_parent} .product-comment-mobile-summary-more`, (function() {
                clickCompReport("more_reviews");
            })).on("click", `${report_parent} .__sl-custom-track-product-detail-buy-now`, (() => {
                clickCompReport("buy_now");
            })).on("click", `${report_parent} .sales__productBundled`, (() => {
                clickCompReport("more_bundling");
            }));
            let isExposedProductVideo = false;
            let isPlayedProductVideo = false;
            window.SL_EventBus.on("product:product-play-video", (() => {
                if (!isPlayedProductVideo) {
                    clickCompReport("play_video");
                    isPlayedProductVideo = true;
                }
            }));
            window.SL_EventBus.on("product:expose-product-video", (() => {
                if (!isExposedProductVideo) {
                    exposeCompReport("play_video");
                    isExposedProductVideo = true;
                }
            }));
            window.SL_EventBus.emit("global:hdReport:exit", [ EVENT_ID, null ]);
            collectExposeObserver();
            window.SL_EventBus.on("global:hdReport:expose", (target => {
                if (__SL_$__(target).hasClass(exposeConfig.amazon.cls)) exposeCompReport(exposeConfig.amazon.statName);
                if (__SL_$__(target).hasClass(exposeConfig.productDesc.cls)) exposeCompReport(exposeConfig.productDesc.statName);
                if (__SL_$__(target).hasClass(exposeConfig.pcReviews.cls)) exposeCompReport(exposeConfig.pcReviews.statName);
                if (__SL_$__(target).hasClass(exposeConfig.mReviews.cls)) exposeCompReport(exposeConfig.mReviews.statName);
                if (__SL_$__(target).hasClass(exposeConfig.thirdPartyShare.cls)) exposeCompReport(exposeConfig.thirdPartyShare.statName);
                if (__SL_$__(target).hasClass(exposeConfig.mMoreReviews.cls)) exposeCompReport(exposeConfig.mMoreReviews.statName);
                if (__SL_$__(target).hasClass(exposeConfig.buyNow.cls)) exposeCompReport(exposeConfig.buyNow.statName);
                if (__SL_$__(target).hasClass(exposeConfig.moreBundling.cls)) exposeCompReport(exposeConfig.moreBundling.statName);
                if (__SL_$__(target).hasClass(exposeConfig.viewMore.cls)) exposeCompReport(exposeConfig.viewMore.statName);
            }));
        }));
        window.SL_EventBus.on("product:sku:change", (([sku]) => {
            if ((null === sku || void 0 === sku ? void 0 : sku.spuSeq) === (null === currentSpu || void 0 === currentSpu ? void 0 : currentSpu.spuSeq)) if (sku) {
                hdReport({
                    event_name: "sku_click",
                    sku_id: sku.skuSeq
                });
                window.SL_EventBus.emit("global:thirdPartReport", {
                    FBPixel: [ [ "track", "ViewContent", {
                        content_ids: [ null === sku || void 0 === sku ? void 0 : sku.spuSeq ],
                        content_name: currentSpu.title || "",
                        content_category: "",
                        content_type: "product_group",
                        currency: window.SL_State.get("storeInfo.currency"),
                        value: formatCurrency(sku.price || 0)
                    }, {
                        eventID: `viewContent${(0, tool.getEventID)()}`
                    } ] ]
                });
            }
        }));
        var product_preview = __webpack_require__("./src/assets/product/detail/js/product-preview.js");
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
                _defineProperty(this, "instance", null);
                this.instance = (0, product_preview["default"])({
                    id: "productDetail",
                    statePath: "product",
                    offsetTop: 20,
                    module: "pdp"
                });
            }
            onUnload() {
                if (this.instance) {
                    var _this$instance;
                    null === (_this$instance = this.instance) || void 0 === _this$instance ? void 0 : _this$instance.destroy();
                }
            }
        }
        _defineProperty(ProductPreviewSection, "type", "product-preview");
        (0, sectionsLoad.registrySectionConstructor)("product-preview", ProductPreviewSection);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/detail/main.js")));
    __webpack_require__.O();
} ]);