"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "map" ], {
    "./src/assets/stage/map/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        const selectors = {
            iframe: ".sl-map__iframe"
        };
        class SlMap {
            constructor(container) {
                this.container = container;
                this.init();
            }
            init() {
                this.addLocaleChangeHandleTo();
            }
            addLocaleChangeHandleTo() {
                const {container} = this;
                const {google_api_secret_key, address} = window.SL_State.get("shoplineMap.settings") || {};
                window.SL_State.on("request.locale", (locale => {
                    container.find(selectors.iframe).attr("src", `https://www.google.com/maps/embed/v1/place?key=${google_api_secret_key}&q=${encodeURIComponent(address)}&language=${locale}`);
                }));
            }
            destroy() {}
        }
        class SlMapSection {
            constructor(container) {
                if (!container.find(selectors.iframe).length) return;
                this.instance = new SlMap(container);
            }
            onUnload() {
                if (this.instance) this.instance.destroy();
            }
        }
        SlMapSection.type = "map";
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(SlMapSection.type, SlMapSection);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/map/index.js")));
    __webpack_require__.O();
} ]);