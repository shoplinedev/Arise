"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-collection-all" ], {
    "./src/assets/product/collections-all/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var _yy_sl_theme_shared_report_product_collection_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/report/product/collection-item.js");
        (0, _yy_sl_theme_shared_report_product_collection_item__WEBPACK_IMPORTED_MODULE_1__.initCollectionItemReport)();
    },
    "../shared/browser/report/product/collection-item.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            collectionItemCls: () => collectionItemCls,
            initCollectionItemReport: () => initCollectionItemReport
        });
        var _common_baseReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/report/common/baseReport.js");
        const collectionItemCls = ".__sl-custom-track-collection-item";
        const fcNull = () => {};
        class CollectionItemReport extends _common_baseReport__WEBPACK_IMPORTED_MODULE_0__.BaseReport {
            constructor({selector, reportTargetCb}) {
                super();
                this.map = {
                    101: {
                        component: 101,
                        module: 900
                    },
                    174: {
                        component: 110,
                        module: -999
                    }
                };
                this.currentData = this.map[this.page];
                this.selector = selector || collectionItemCls;
                this.reportTargetCb = reportTargetCb || fcNull;
                this.bindClick();
                this.bindExpose();
            }
            bindClick() {
                const __this = this;
                __SL_$__("body").on("click", __this.selector, (function() {
                    const _this = __SL_$__(this);
                    const id = _this.attr("data-sortation-id");
                    __this.click({
                        collection_id: id,
                        ...__this.currentData,
                        ...__this.reportTargetCb(_this.get(0))
                    });
                }));
            }
            bindExpose() {
                const __this = this;
                __this.view({
                    selector: `${__this.selector}`,
                    customParams: target => {
                        const {sortationId} = target.dataset || {};
                        return {
                            collection_id: sortationId,
                            ...__this.currentData,
                            ...__this.reportTargetCb(target)
                        };
                    }
                });
            }
        }
        function initCollectionItemReport({selector, reportTargetCb} = {}) {
            const report = new CollectionItemReport({
                selector,
                reportTargetCb
            });
            return report;
        }
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/product/collections-all/main.js")));
    __webpack_require__.O();
} ]);