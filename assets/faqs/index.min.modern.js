(() => {
    "use strict";
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
        }); else obj[key] = value;
        return obj;
    }
    class SectionsLoad {
        constructor() {
            _defineProperty(this, "sectionInstances", new Map);
            _defineProperty(this, "constructorMap", new Map);
            window.document.addEventListener("shopline:section:load", this._onSectionLoad.bind(this));
            window.document.addEventListener("shopline:section:unload", this._onSectionUnload.bind(this));
        }
        _createInstace(container, constructorParam) {
            const id = container.data("section-id");
            if (!id) return;
            const constructor = constructorParam || this.constructorMap.get(container.data("section-type"));
            if ("function" !== typeof constructor) return;
            this.sectionInstances.set(id, new constructor(container));
        }
        _onSectionLoad(e) {
            const {sectionId} = e.detail;
            if (this.sectionInstances.has(sectionId)) {
                const instance = this.sectionInstances.get(sectionId);
                if ("function" === typeof instance.onUnload) instance.onUnload.call(instance);
            }
            const $container = $(`[data-section-id='${sectionId}']`);
            this._createInstace($container);
        }
        _onSectionUnload(e) {
            const {sectionId} = e.detail;
            if (this.sectionInstances.has(sectionId)) {
                const instance = this.sectionInstances.get(sectionId);
                if ("function" === typeof instance.onUnload) {
                    instance.onUnload.call(instance);
                    this.sectionInstances.delete(sectionId);
                }
            }
        }
    }
    window.__section_load__ = new SectionsLoad;
    const registrySectionConstructor = (type, constructor) => {
        if (window.__section_load__.constructorMap.get(type)) return;
        window.__section_load__.constructorMap.set(type, constructor);
        const $sections = $(`[data-section-type='${type}']`);
        $sections.each((function() {
            const $container = $(this);
            window.__section_load__._createInstace($container, constructor);
        }));
    };
    function isInvalid(param) {
        return !param || "string" !== typeof param;
    }
    function isJqueryInstance(dom) {
        return dom && dom instanceof $ && dom.length > 0;
    }
    function getEventHandlerName(event, selector, namepsace) {
        if (!selector) return [ event, namepsace ].join("-");
        if (isJqueryInstance(selector)) return selector;
        return [ selector, event, namepsace ].join("-");
    }
    function getNamespace(event, namespace) {
        if (isInvalid(event) && isInvalid(namespace)) throw new Error("one of these two parameters must be provided!");
        if (isInvalid(event)) return `.${namespace}`;
        return [ event, namespace ].join(".");
    }
    const eventInvalidErrorMessage = "event param must be provided and it must be a string type";
    function on({eventName, handler, selector, scope} = {}) {
        if (isInvalid(eventName)) throw new Error(eventInvalidErrorMessage);
        if (!isJqueryInstance(scope)) throw new Error("scope must be a jQuery Object");
        if ("function" !== typeof handler) throw new TypeError("handler must be a function");
        if (selector) {
            if (isInvalid(selector)) throw new TypeError("selector must be a string!");
            scope.on(eventName, selector, handler);
        } else scope.on(eventName, handler);
    }
    function off({eventName, selector, handler, scope} = {}) {
        if (isInvalid(eventName)) throw new Error(eventInvalidErrorMessage);
        if (!isJqueryInstance(scope)) throw new Error("scope must be a jQuery Object");
        if (selector) {
            if (isInvalid(selector)) throw new TypeError("selector must be a string!");
            if ("function" === typeof handler) scope.off(eventName, selector, handler); else scope.off(eventName, selector);
        } else scope.off(eventName);
    }
    function onConsistent(event, selector, handler) {
        if (isInvalid(event)) throw new Error(eventInvalidErrorMessage);
        if (!handler) {
            handler = selector;
            selector = null;
        }
        const eventHandlerKey = this.getEventHandlerName(event, selector);
        const ns = this.getEventNamespace(event);
        this.$eventHandlers.set(eventHandlerKey, handler);
        return scope => {
            on({
                eventName: ns,
                selector,
                handler,
                scope
            });
        };
    }
    function offConsistent(event, selector) {
        if (isInvalid(event)) throw new Error(eventInvalidErrorMessage);
        const eventHandlerName = this.getEventHandlerName(event, selector);
        const handler = this.$eventHandlers.get(eventHandlerName);
        const ns = this.getEventNamespace(event);
        return scope => {
            off({
                eventName: ns,
                selector,
                handler,
                scope
            });
            if (handler) this.$eventHandlers.delete(eventHandlerName);
        };
    }
    class EventManager {
        constructor(namespace = "", portals) {
            this.$win = $(window);
            this.$doc = $(document);
            this.$portals = portals ? $(portals) : null;
            this.namespace = "string" === typeof namespace ? namespace : "";
            this.$eventHandlers = new Map;
            this.$winEventHandlers = new Map;
        }
        getEventNamespace(event) {
            return getNamespace(event, this.namespace);
        }
        getEventHandlerName(event, selector) {
            return getEventHandlerName(event, selector, this.namespace);
        }
        getPortals() {
            return isJqueryInstance(this.$portals) ? this.$portals : this.$doc;
        }
        $setNamespace(namespace) {
            this.namespace = namespace;
        }
        $setPortals(portals) {
            this.$portals = portals ? $(portals) : null;
        }
        $on(event, selector, handler) {
            const onEvent = onConsistent.call(this, event, selector, handler);
            onEvent(this.$doc);
        }
        $onPortals(event, selector, handler) {
            const $dom = this.getPortals();
            const onEvent = onConsistent.call(this, event, selector, handler);
            onEvent($dom);
        }
        $onWin(event, handler) {
            this.$winEventHandlers.set(this.getEventHandlerName(event), handler);
            this.$win.on(this.getEventNamespace(event), handler);
        }
        $off(event, selector) {
            const offEvent = offConsistent.call(this, event, selector);
            offEvent(this.$doc);
        }
        $offPortals(event, selector) {
            const $dom = this.getPortals();
            const offEvent = offConsistent.call(this, event, selector);
            offEvent($dom);
        }
        $offWin(event) {
            const eventHandlerName = this.getEventHandlerName(event);
            const handler = this.$winEventHandlers.get(eventHandlerName);
            this.$win.off(this.getEventNamespace(event));
            if (handler) this.$winEventHandlers.delete(eventHandlerName);
        }
        $offAll() {
            const ns = this.getEventNamespace();
            this.$win.off(ns);
            this.$doc.off(ns);
            if (isJqueryInstance(this.$portals)) this.$portals.off(ns);
            this.$eventHandlers.clear();
            this.$winEventHandlers.clear();
        }
        prepareTransition($el, callback, endCallback) {
            function removeClass() {
                $el.removeClass("is-transitioning");
                $el.off("transitionend", removeClass);
                if (endCallback) endCallback();
            }
            $el.on("transitionend", removeClass);
            $el.addClass("is-transitioning");
            $el.width();
            if ("function" === typeof callback) callback();
        }
    }
    function faqs_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
        }); else obj[key] = value;
        return obj;
    }
    class Faq extends EventManager {
        constructor() {
            super();
            faqs_defineProperty(this, "config", {
                namespace: "stage:faq"
            });
            this.$setNamespace(this.config.namespace);
            this.init();
        }
        init() {
            this.bindBlockCollapse();
        }
        bindBlockCollapse() {
            this.$on("click", ".faq__collapse-title", (e => {
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
    faqs_defineProperty(Faq, "type", "faqs");
    registrySectionConstructor(Faq.type, Faq);
})();