"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "faqs" ], {
    "./src/assets/stage/faqs/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class Faq {
            constructor(container) {
                _defineProperty(this, "config", {
                    namespace: "stage:faq"
                });
                this.bindBlockCollapse(container);
            }
            bindBlockCollapse(container) {
                container.on("click", ".faq__collapse-title", (e => {
                    let $target = $(e.target);
                    if (e.target.classList.value.indexOf("faq__collapse-icon") > -1) $target = $target.parent();
                    const $wrapper = $target.next();
                    const $content = $wrapper.find(".faq__collapse-content");
                    if ($wrapper.hasClass("active")) {
                        $target.removeClass("active");
                        $wrapper.removeClass("active");
                        $wrapper.height(0);
                    } else {
                        $wrapper.addClass("active");
                        $target.addClass("active");
                        $wrapper.height($content.outerHeight(true));
                    }
                }));
            }
        }
        _defineProperty(Faq, "type", "faqs");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(Faq.type, Faq);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/faqs/index.js")));
    __webpack_require__.O();
} ]);