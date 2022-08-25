"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "contact-form" ], {
    "./src/assets/stage/contact-form/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var utils_form = __webpack_require__("../shared/browser/utils/form/index.js");
        var request = __webpack_require__("../shared/browser/utils/request.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        const EMAIL_VALID_REGEXP = /^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$/;
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const emailRE = EMAIL_VALID_REGEXP;
        const SEND_API = "/merchant/form/contactUs";
        const contact_form_toast = new toast["default"]({
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
                message: (0, i18n.t)("products.product_details.enter_email_address"),
                required: true
            }, {
                message: (0, i18n.t)("products.product_details.enter_valid_email_address"),
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
                this.contactForm = utils_form["default"].takeForm(`contact-form-${sectionId}`);
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
                        await request["default"].post(SEND_API, contactData);
                        contact_form_toast.open((0, i18n.t)(`general.contact_us.send_success`));
                        this.contactForm.setFields(fields);
                    } catch (error) {
                        contact_form_toast.open("Network Error");
                    }
                }));
            }
            onUnload() {
                this.contactForm.destroy();
                this.submitBtn.off("click");
            }
        }
        _defineProperty(ContactForm, "type", "contact-form");
        (0, sectionsLoad.registrySectionConstructor)(ContactForm.type, ContactForm);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/contact-form/index.js")));
    __webpack_require__.O();
} ]);