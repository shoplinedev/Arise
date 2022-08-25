"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "featuredProduct" ], {
    "./src/assets/stage/featured-product/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _product_detail_js_product_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/detail/js/product-preview.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class FeatureProduct {
            constructor(container) {
                _defineProperty(this, "featureProduct", null);
                const id = container.data("section-id");
                const statePath = container.data("state-path");
                const productId = container.data("product-id");
                if (id && productId) this.featureProduct = (0, _product_detail_js_product_preview__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    id,
                    statePath,
                    filterShelves: true,
                    offsetTop: 20,
                    module: "featuredProduct"
                });
            }
            onUnload() {
                if (this.slideshow) this.featureProduct.destroy();
            }
        }
        _defineProperty(FeatureProduct, "type", "featured-product");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(FeatureProduct.type, FeatureProduct);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/featured-product/index.js")));
    __webpack_require__.O();
} ]);