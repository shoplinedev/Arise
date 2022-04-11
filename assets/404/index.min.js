"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "404" ], {
    "./src/assets/stage/404/main.js": () => {
        var _window$HdSdk;
        window.SL_EventBus.emit("global:hdReport:exit", [ "60079993" ]);
        null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60079993, {
            page: 111,
            iframe_id: 1,
            event_name: 101
        });
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("./src/assets/stage/404/main.js");
} ]);