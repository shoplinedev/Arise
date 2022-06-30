"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "sign-up-and-save" ], {
    "./src/assets/stage/sign-up-and-save/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _commons_utils_checkEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/commons/utils/checkEmail.js");
        var _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class Newsletter {
            constructor(container) {
                _defineProperty(this, "config", {
                    namespace: "satge:sign-up-and-save"
                });
                this.toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    duration: 2e3,
                    fullscreen: true
                });
                this.bindSubscription(container);
            }
            bindSubscription(container) {
                const post = (0, _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(300, (val => {
                    var _window, _window$SLMemberPlugi, _window$SLMemberPlugi2;
                    const params = {
                        subscribeAccountType: "email",
                        subscribeAccount: val
                    };
                    const referralCode = (null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SLMemberPlugi = _window.SLMemberPlugin) || void 0 === _window$SLMemberPlugi ? void 0 : null === (_window$SLMemberPlugi2 = _window$SLMemberPlugi.memberReferralCode) || void 0 === _window$SLMemberPlugi2 ? void 0 : _window$SLMemberPlugi2.value) || null;
                    if (referralCode) params.referralCode = referralCode;
                    _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/user/front/users/footersub", params).then((res => {
                        if (res.success) this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("footer.subscribeSuccess"), 2e3); else this.toast.open((0, 
                        _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("footer.subscribeRegExpError"), 2e3);
                    })).catch((err => {
                        console.log("subscribe error", err);
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("footer.subscribeRegExpError"), 2e3);
                    }));
                }));
                container.on("click", ".newsletter__btn", (() => {
                    const $input = container.find(".newsletter__input");
                    const value = $input.val();
                    if (true !== (0, _commons_utils_checkEmail__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("footer.subscribeRegExpError"), 2e3);
                        return;
                    }
                    post(value);
                }));
            }
        }
        _defineProperty(Newsletter, "type", "sign-up-and-save");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_1__.registrySectionConstructor)(Newsletter.type, Newsletter);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/sign-up-and-save/index.js")));
    __webpack_require__.O();
} ]);