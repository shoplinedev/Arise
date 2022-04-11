"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "contact-form" ], {
    "./src/assets/stage/contact-form/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/form/index.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
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
        const emailRE = /^[A-Za-z0-9_./;+]+([A-Za-z0-9_./;+]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
        const SEND_API = "/merchant/form/contactUs";
        const toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_3__["default"]({
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
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("productDetail.inquiry.emailEmptyErr"),
                required: true
            }, {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("productDetail.inquiry.emailFormatErr"),
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
                        toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(`contactForm.sendSuccess`));
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
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_2__.registrySectionConstructor)(ContactForm.type, ContactForm);
    },
    "../shared/browser/utils/form/form.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            ValidateTrigger: () => ValidateTrigger,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
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
            constructor(fid, {onDestory} = {
                onDestory: () => {}
            }) {
                _defineProperty(this, "fid", "");
                _defineProperty(this, "onDestory", (fid => {}));
                _defineProperty(this, "formEntity", null);
                _defineProperty(this, "validateRecord", {});
                _defineProperty(this, "config", {
                    validateTrigger: ValidateTrigger.MANUAL,
                    requiredErrMsg: `这是必填字段!`,
                    defaultErrMsg: "请输入合法的值",
                    errContainerClss: "errClass",
                    validateWhenInit: false,
                    emitChangeWhenInit: false
                });
                _defineProperty(this, "canValidate", false);
                _defineProperty(this, "canEmitChange", true);
                _defineProperty(this, "hadInit", false);
                _defineProperty(this, "el", null);
                _defineProperty(this, "eventBus", null);
                _defineProperty(this, "on", null);
                _defineProperty(this, "emit", null);
                _defineProperty(this, "handleFormInputEvent", (e => {
                    if (!this.fid) return;
                    const target = e.target;
                    const parentNode = this.recursionFindParent(target, formItemName);
                    if (!parentNode) return;
                    const targetName = parentNode.getAttribute(formItemName);
                    if (targetName) {
                        this.canValidate = true;
                        if (this.isRadioOrCheckbox(target, [ "checkbox" ])) this.setLocalsValue(targetName, target.checked); else this.setLocalsValue(targetName, target.value);
                    }
                }));
                _defineProperty(this, "setLocalsValue", ((name, value) => {
                    var _this$formEntity;
                    const changedValue = {
                        [name]: value
                    };
                    const allValues = Object.assign(null === (_this$formEntity = this.formEntity) || void 0 === _this$formEntity ? void 0 : _this$formEntity.data, changedValue);
                    let validateResultPro = null;
                    if (this.canValidate && this.config.validateTrigger === ValidateTrigger.ONCHANGE) validateResultPro = this.validateFields([ name ]);
                    if (this.canEmitChange) this.eventBus.emit("valuesChange", {
                        changedValue,
                        allValues,
                        validateResult: validateResultPro
                    });
                }));
                _defineProperty(this, "setErrFields", ((target, errFields, name, errMsg) => {
                    if (!target) errFields.push({
                        name,
                        messages: [ errMsg ]
                    }); else target.messages.push(errMsg);
                }));
                this.fid = fid;
                this.onDestory = onDestory;
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
                    if (null !== config && void 0 !== config && config.validateWhenInit) this.canValidate = true;
                    if (null !== config && void 0 !== config && config.emitChangeWhenInit) this.canEmitChange = true;
                }
            }
            initEventListener(el) {
                el.addEventListener("input", this.handleFormInputEvent);
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
                                if (res.pass) {
                                    var _this$config$blurSucH, _this$config;
                                    null === (_this$config$blurSucH = (_this$config = this.config).blurSucHandler) || void 0 === _this$config$blurSucH ? void 0 : _this$config$blurSucH.call(_this$config, targetName, target.value, this.formEntity.data);
                                } else {
                                    var _this$config2;
                                    null === (_this$config2 = this.config) || void 0 === _this$config2 ? void 0 : _this$config2.blurErrHandler(res);
                                }
                            }));
                        }));
                    }
                }));
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
                            if ("value" === curAttr) initialData[name] = child.getAttribute(curAttr);
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
                const nodeType = null === target || void 0 === target ? void 0 : target.getAttribute("type");
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
            flattenRulesList(list) {
                return list.reduce(((acc, field) => {
                    const subRules = (null === field || void 0 === field ? void 0 : field.rules.map((rule => ({
                        ...rule,
                        name: field.name
                    })))) || [];
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
                        var _formItemWrapper$clas, _formItemWrapper$clas2;
                        const formItemWrapper = this.el.querySelector(`[${formItemName}=${name}]`);
                        null === (_formItemWrapper$clas = formItemWrapper.classList) || void 0 === _formItemWrapper$clas ? void 0 : null === (_formItemWrapper$clas2 = _formItemWrapper$clas.remove) || void 0 === _formItemWrapper$clas2 ? void 0 : _formItemWrapper$clas2.call(_formItemWrapper$clas, this.config.errContainerClss);
                    }
                }));
            }
            setFields(fields, callback, needEmit = true, needValidate = false) {
                try {
                    this.canValidate = needValidate;
                    this.canEmitChange = needEmit;
                    this.setValues(fields);
                    null === callback || void 0 === callback ? void 0 : callback();
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
                var _this$formEntity2;
                this.init();
                return null === (_this$formEntity2 = this.formEntity) || void 0 === _this$formEntity2 ? void 0 : _this$formEntity2.data;
            }
            async getLegalFieldsValue() {
                var _this$formEntity3, _result$errFields;
                const result = await this.validateFields([], false);
                if (null !== result && void 0 !== result && result.pass) return null === (_this$formEntity3 = this.formEntity) || void 0 === _this$formEntity3 ? void 0 : _this$formEntity3.data;
                const unPassFields = null === (_result$errFields = result.errFields) || void 0 === _result$errFields ? void 0 : _result$errFields.map((field => field.name));
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
                const needValidateFieldsName = null !== fields && void 0 !== fields && fields.length ? fields : Object.keys(this.formEntity.data);
                const needValidatefields = childrenProps.filter((prop => {
                    var _prop$rules;
                    return (null === (_prop$rules = prop.rules) || void 0 === _prop$rules ? void 0 : _prop$rules.length) > 0 && (null === needValidateFieldsName || void 0 === needValidateFieldsName ? void 0 : needValidateFieldsName.includes(prop.name));
                }));
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
                        var _needValidateRules$i;
                        const requiredErrMsg = (null === (_needValidateRules$i = needValidateRules[i]) || void 0 === _needValidateRules$i ? void 0 : _needValidateRules$i.message) || this.config.requiredErrMsg;
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
                    if (errFields.length) this.config.validateTrigger = ValidateTrigger.ONCHANGE;
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
                var _this$onDestory;
                this.el.removeEventListener("input", this.handleFormInputEvent);
                this.hadInit = false;
                this.el = null;
                this.eventBus = null;
                this.formEntity = null;
                null === (_this$onDestory = this.onDestory) || void 0 === _this$onDestory ? void 0 : _this$onDestory.call(this, this.fid);
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
    __webpack_exec__("./src/assets/stage/contact-form/index.js");
} ]);