(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "blogs" ], {
    "./src/assets/stage/blog/list/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__("./src/assets/stage/blog/list/script/report.js");
    },
    "./src/assets/stage/blog/list/script/report.js": () => {
        (function() {
            window.SL_EventBus.emit("global:hdReport:exit", [ "60090005" ]);
            window.setInterval((() => {
                var _window$HdSdk;
                null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60090005, {
                    page: 124,
                    event_name: 141
                });
            }), 5 * 1e3);
        })();
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/blog/list/index.js")));
    __webpack_require__.O();
} ]);