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
                message: (0, i18n.t)("productDetail.inquiry.emailEmptyErr"),
                required: true
            }, {
                message: (0, i18n.t)("productDetail.inquiry.emailFormatErr"),
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
                        contact_form_toast.open((0, i18n.t)(`contactForm.sendSuccess`));
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
    },
    "../shared/browser/utils/form/form.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        const ValidateTrigger = {
            ONCHANGE: "onChange",
            MANUAL: "manual",
            ONBLUR: "manual",
            ONNATIVECHANGE: "onNativeChange"
        };
        const isPromiseFulfilledResult = result => "fulfilled" === result.status;
        const formItemName = "sl-form-item-name";
        const REQUIRED_SYMBOL = Symbol("required");
        class CustomForm {
            constructor(fid = "", {onDestory} = {
                onDestory: () => {}
            }) {
                this.fid = fid;
                this.onDestory = onDestory;
                this.formEntity = null;
                this.validateRecord = {};
                this.config = {
                    validateTrigger: ValidateTrigger.MANUAL,
                    requiredErrMsg: `这是必填字段!`,
                    defaultErrMsg: "请输入合法的值",
                    errContainerClss: "errClass",
                    validateWhenInit: false,
                    emitChangeWhenInit: false
                };
                this.canValidate = false;
                this.canEmitChange = true;
                this.hadInit = false;
                this.el = document.querySelector(`#${fid}`);
                const eventBus = new _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__.SL_EventEmitter;
                this.eventBus = eventBus;
                this.on = this.eventBus.on.bind(eventBus);
                this.emit = this.eventBus.emit.bind(eventBus);
            }
            init(config) {
                if (this.hadInit) return false;
                try {
                    this.initFormConfig(config);
                    const formItems = this.el.querySelectorAll(`[${formItemName}]`);
                    const {initialData, childrenProps} = this.calculatePropsAndInitialData(formItems);
                    this.formEntity = {
                        data: initialData,
                        childrenProps,
                        el: this.el
                    };
                    this.initEventListener(this.el);
                    this.hadInit = true;
                } catch (e) {
                    console.warn(`${this.fid} is not found, ${e}`);
                }
            }
            initFormConfig(config) {
                if (config) {
                    Object.assign(this.config, config);
                    if (config && config.validateWhenInit) this.canValidate = true;
                    if (config && config.emitChangeWhenInit) this.canEmitChange = true;
                }
            }
            initEventListener(el) {
                el.addEventListener("input", (e => this.handleFormInputEvent(e)));
                const formItems = el.querySelectorAll(`[${formItemName}]`);
                formItems.forEach((el => {
                    const inp = el.querySelector("input,textarea");
                    if (inp) {
                        inp.addEventListener("change", (e => {
                            console.log("input-change", this.config.validateTrigger);
                            if (this.config.validateTrigger === ValidateTrigger.ONNATIVECHANGE) {
                                const target = e.target;
                                const parentNode = this.recursionFindParent(target, formItemName);
                                if (!parentNode) return;
                                const targetName = parentNode.getAttribute(formItemName);
                                this.validateFields([ targetName ]);
                            }
                        }));
                        inp.addEventListener("blur", (e => {
                            const target = e.target;
                            const parentNode = this.recursionFindParent(target, formItemName);
                            if (!parentNode) return;
                            const targetName = parentNode.getAttribute(formItemName);
                            if (this.config.validateTrigger === ValidateTrigger.ONBLUR) this.validateFields([ targetName ]);
                            if (this.config.blurSucHandler || this.config.blurErrHandler) this.validateFields([ targetName ], false).then((res => {
                                if (!res) return;
                                if (res.pass) this.config && this.config.blurSucHandler && this.config.blurSucHandler(targetName, target.value, this.formEntity.data); else this.config && this.config.blurErrHandler && this.config.blurErrHandler(res);
                            }));
                        }));
                    }
                }));
            }
            handleFormInputEvent(e) {
                if (!this.fid) return;
                const target = e.target;
                const parentNode = this.recursionFindParent(target, formItemName);
                if (!parentNode) return;
                const targetName = parentNode.getAttribute(formItemName);
                if (targetName) {
                    this.canValidate = true;
                    if (this.isRadioOrCheckbox(target, [ "checkbox" ])) this.setLocalsValue(targetName, target.checked); else this.setLocalsValue(targetName, target.value);
                }
            }
            recursionFindParent(el, attr) {
                const parent = el.parentElement;
                if (!parent) return null;
                const val = parent.getAttribute(attr);
                if (val) return parent;
                return this.recursionFindParent(parent, attr);
            }
            calculatePropsAndInitialData(nodeList) {
                if (0 === nodeList.length) return {
                    initialData: {},
                    childrenProps: []
                };
                let childrenProps = [];
                const initialData = {};
                try {
                    childrenProps = Array.from(nodeList).map((formItem => {
                        const name = formItem.getAttribute(formItemName);
                        const child = formItem.querySelector("input,select,textarea");
                        const attrs = child.getAttributeNames();
                        const childAttrs = attrs.reduce(((acc, curAttr) => {
                            if ("value" === curAttr) initialData[name] = child.getAttribute(curAttr) || child.value;
                            return {
                                ...acc,
                                [curAttr]: child.getAttribute(curAttr)
                            };
                        }), {});
                        return Object.assign(childAttrs, {
                            name
                        });
                    }));
                } catch (e) {
                    console.error(`${this.fid} calculate form item error: `, e);
                }
                return {
                    initialData,
                    childrenProps
                };
            }
            setValues(fields) {
                fields.forEach((({name, value, rules}) => {
                    this.setDomValue(this.el, name, value);
                    this.setRule(rules, name);
                    this.setLocalsValue(name, value);
                }));
            }
            setRule(rules, name) {
                const target = this.formEntity.childrenProps.find((prop => prop.name === name));
                if (target) target.rules = rules || [];
            }
            isRadioOrCheckbox(target, nodeTypeList = [ "radio", "checkbox" ]) {
                const nodeType = target && target.getAttribute("type");
                if (!nodeType) return false;
                return "input" === target.nodeName.toLocaleLowerCase() && nodeTypeList.includes(nodeType);
            }
            setDomValue(parent, name, value) {
                const targets = parent.querySelectorAll(`[${formItemName}=${name}] input,[${formItemName}=${name}] select,[${formItemName}=${name}] textarea`);
                if (targets.length) targets.forEach((target => {
                    if (this.isRadioOrCheckbox(target)) {
                        if (target.value === value) target.click();
                    } else if (!target.name || target.name === name) target.value = null !== value && void 0 !== value ? value : "";
                }));
            }
            setLocalsValue(name, value) {
                const changedValue = {
                    [name]: value
                };
                const allValues = Object.assign(this.formEntity && this.formEntity.data, changedValue);
                let validateResultPro = null;
                if (this.canValidate && this.config.validateTrigger === ValidateTrigger.ONCHANGE) validateResultPro = this.validateFields([ name ]);
                if (this.canEmitChange) this.eventBus.emit("valuesChange", {
                    changedValue,
                    allValues,
                    validateResult: validateResultPro
                });
            }
            flattenRulesList(list) {
                return list.reduce(((acc, field) => {
                    const subRules = field && field.rules.map((rule => ({
                        ...rule,
                        name: field.name
                    }))) || [];
                    return [ ...acc, ...subRules ];
                }), []);
            }
            getErrTmpStr(messages, className = "") {
                return messages.reduce(((acc, message) => acc + `<div class="${className}" style="margin-top: 6px;color: #f04949;font-size: 12px;line-height: 1.4;">${message}</div>`), "");
            }
            getErrListContainer(id, formItemContainer) {
                const target = this.el.querySelector(`[${id}]`);
                if (target) return target;
                const div = document.createElement("div");
                div.setAttribute(id, "1");
                formItemContainer.appendChild(div);
                return div;
            }
            setErrMsgIntoDom(errFields) {
                errFields.forEach((({name, messages}) => {
                    const errTmp = this.getErrTmpStr(messages, this.config.errContainerClss);
                    const id = `cf-${this.fid}-${name}`;
                    const target = this.el.querySelector(`[${formItemName}=${name}]`);
                    if (!Array.from(target.classList).includes(this.config.errContainerClss)) target.classList.add(this.config.errContainerClss);
                    const container = this.getErrListContainer(id, target);
                    container.innerHTML = errTmp;
                }));
            }
            removeErrList(fields) {
                fields.forEach((name => {
                    const target = this.el.querySelector(`[cf-${this.fid}-${name}]`);
                    if (target) target.remove();
                    if (this.config.errContainerClss) {
                        const formItemWrapper = this.el.querySelector(`[${formItemName}=${name}]`);
                        formItemWrapper && formItemWrapper.classList && formItemWrapper.classList.remove && formItemWrapper.classList.remove(this.config.errContainerClss);
                    }
                }));
            }
            setErrFields(target, errFields, name, errMsg) {
                if (!target) errFields.push({
                    name,
                    messages: [ errMsg ]
                }); else target.messages.push(errMsg);
            }
            setFields(fields, callback, needEmit = true, needValidate = false) {
                try {
                    this.canValidate = needValidate;
                    this.canEmitChange = needEmit;
                    this.setValues(fields);
                    callback && callback();
                } catch (e) {
                    console.warn(`${this.fid} set fields fail,`, e);
                } finally {
                    this.canEmitChange = true;
                }
            }
            setRules(rulesField) {
                rulesField.forEach((({name, rules}) => {
                    this.setRule(rules, name);
                }));
            }
            getFieldValue(fieldName) {
                this.init();
                return this.formEntity.data[fieldName];
            }
            getFieldsValue() {
                this.init();
                return this.formEntity && this.formEntity.data;
            }
            async getLegalFieldsValue() {
                const result = await this.validateFields([], false);
                if (result && result.pass) return this.formEntity && this.formEntity.data;
                const unPassFields = result && result.errFields && result.errFields.map((field => field.name));
                return Object.entries(this.formEntity.data).reduce(((acc, [k, v]) => {
                    if (unPassFields.includes(k)) return acc;
                    return {
                        ...acc,
                        [k]: v
                    };
                }), {});
            }
            async validateFields(fields, handleError = true) {
                if (!this.formEntity) return null;
                const {childrenProps} = this.formEntity;
                const data = JSON.parse(JSON.stringify(this.formEntity.data));
                const needValidateFieldsName = fields && fields.length ? fields : Object.keys(this.formEntity.data);
                const needValidatefields = childrenProps.filter((prop => prop.rules && prop.rules.length > 0 && needValidateFieldsName && needValidateFieldsName.includes(prop.name)));
                const validateList = [];
                const needValidateRules = this.flattenRulesList(needValidatefields);
                try {
                    needValidateRules.forEach((rule => {
                        const {required, validator, pattern, name} = rule || {};
                        const value = data[name];
                        this.validateRecord[name] = value;
                        if (value) if (validator) validateList.push(validator(value, data)); else if (pattern) validateList.push(new RegExp(pattern).test(value)); else validateList.push(true); else if (validator && required) validateList.push(validator(value, data)); else validateList.push(required ? REQUIRED_SYMBOL : true);
                    }));
                } catch (e) {
                    console.warn(`${this.fid} calculate validator list fail:`, e);
                }
                const validateResult = await Promise.allSettled(validateList);
                const errFields = [];
                const successFields = new Set;
                for (let i = 0; i < validateResult.length; i++) {
                    const {name, message} = needValidateRules[i];
                    if (this.validateRecord[name] !== data[name]) return null;
                    const result = validateResult[i];
                    const target = errFields.find((err => err.name === name));
                    if (isPromiseFulfilledResult(result)) if (result.value === REQUIRED_SYMBOL) {
                        const requiredErrMsg = needValidateRules[i] && needValidateRules[i].message || this.config.requiredErrMsg;
                        if (!target) errFields.push({
                            name,
                            messages: [ requiredErrMsg ]
                        });
                    } else if (false === result.value) {
                        const errMsg = message || this.config.defaultErrMsg;
                        this.setErrFields(target, errFields, name, errMsg);
                    } else successFields.add(name); else {
                        const errMsg = message || result.reason || this.config.defaultErrMsg;
                        this.setErrFields(target, errFields, name, errMsg);
                    }
                }
                if (handleError) {
                    this.removeErrList(successFields);
                    this.setErrMsgIntoDom(errFields);
                    if (errFields.length) this.config.validateTrigger = this.config.validateTriggerAfterValidationFailed || ValidateTrigger.ONCHANGE;
                }
                return errFields.length ? {
                    pass: false,
                    errFields
                } : {
                    pass: true
                };
            }
            resetErrStatus(fields = Object.keys(this.formEntity.data)) {
                this.removeErrList(fields);
            }
            destroy() {
                this.el.removeEventListener("input", this.handleFormInputEvent);
                this.hadInit = false;
                this.el = null;
                this.eventBus = null;
                this.formEntity = null;
                this.onDestory && this.onDestory(this.fid);
                this.fid = null;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = CustomForm;
    },
    "../shared/browser/utils/form/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/form/form.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class Form {
            static takeForm(fid) {
                if (this.formInstanceList[fid]) return this.formInstanceList[fid];
                this.formInstanceList[fid] = new _form__WEBPACK_IMPORTED_MODULE_0__["default"](fid, {
                    onDestory: fid => {
                        Reflect.deleteProperty(this.formInstanceList, fid);
                    }
                });
                return this.formInstanceList[fid];
            }
        }
        _defineProperty(Form, "formInstanceList", {});
        const __WEBPACK_DEFAULT_EXPORT__ = Form;
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/contact-form/index.js")));
    __webpack_require__.O();
} ]);