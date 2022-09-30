"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "contact-form" ], {
    "./src/assets/stage/contact-form/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/form/index.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_emailReg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/emailReg.js");
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const emailRE = _yy_sl_theme_shared_utils_emailReg__WEBPACK_IMPORTED_MODULE_5__.EMAIL_VALID_REGEXP;
        const SEND_API = "/merchant/form/contactUs";
        const toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"]({
            content: "content",
            className: "contact-form__toast",
            duration: 5e3
        });
        const fields = [ {
            name: "name",
            value: ""
        }, {
            name: "email",
            value: "",
            rules: [ {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("products.product_details.enter_email_address"),
                required: true
            }, {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("products.product_details.enter_valid_email_address"),
                pattern: emailRE
            } ]
        }, {
            name: "phone",
            value: ""
        }, {
            name: "comment",
            value: ""
        } ];
        class ContactForm {
            constructor(container) {
                _defineProperty(this, "container", null);
                _defineProperty(this, "contactForm", null);
                _defineProperty(this, "submitBtn", null);
                this.container = container;
                const sectionId = container.data("section-id");
                this.submitBtn = container.find(".contact-form__submit");
                this.contactForm = _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_0__["default"].takeForm(`contact-form-${sectionId}`);
                this.contactForm.init();
                this.contactForm.setFields(fields);
                this.initSubmitBtn();
            }
            validateForm() {
                return new Promise(((resolve, reject) => {
                    this.contactForm.validateFields().then((res => {
                        if (res.pass) resolve(); else reject(res);
                    }));
                }));
            }
            initSubmitBtn() {
                this.submitBtn.on("click", (async event => {
                    event.preventDefault();
                    await this.validateForm();
                    const contactData = this.contactForm.getFieldsValue();
                    try {
                        await _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].post(SEND_API, contactData);
                        toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(`general.contact_us.send_success`));
                        this.contactForm.setFields(fields);
                    } catch (error) {
                        toast.open("Network Error");
                    }
                }));
            }
            onUnload() {
                this.contactForm.destroy();
                this.submitBtn.off("click");
            }
        }
        _defineProperty(ContactForm, "type", "contact-form");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_3__.registrySectionConstructor)(ContactForm.type, ContactForm);
    },
    "../shared/browser/utils/emailReg.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            EMAIL_VALID_REGEXP: () => EMAIL_VALID_REGEXP
        });
        const EMAIL_VALID_REGEXP = /^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$/;
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/contact-form/index.js")));
    __webpack_require__.O();
} ]);