(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "homeCommon" ], {
    "./src/assets/stage/home-common/a-nested.js": () => {
        const registerLink = element => {
            const $element = $(element);
            const href = $element.attr("href");
            const target = $element.attr("target") || "_self";
            if (!href) return;
            $element.on("click", (e => {
                e.stopPropagation();
                window.open(href, target);
            }));
        };
        $(".global-a-nested").each(((_, element) => {
            registerLink(element);
        }));
        $(document).on("shopline:section:load", (e => {
            const {sectionId} = e.detail;
            $(`#shopline-section-${sectionId} .global-a-nested`).each(((_, element) => {
                registerLink(element);
            }));
        }));
    },
    "./src/assets/stage/home-common/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__("./src/assets/stage/home-common/parallax.js");
        __webpack_require__("./src/assets/stage/home-common/a-nested.js");
        var _window$HdSdk;
        window.SL_EventBus.emit("global:hdReport:exit", [ "60006252" ]);
        null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60006252, {
            page: 101,
            iframe_id: 1,
            event_name: 101
        });
    },
    "./src/assets/stage/home-common/parallax.js": () => {
        let parallaxContainers = $(".parallax-container");
        let parallaxListener;
        function onScroll() {
            requestAnimationFrame(scrollHandler.bind(this));
        }
        function scrollHandler() {
            const viewPortHeight = $(window).height();
            parallaxContainers.each(((index, el) => {
                const parallaxImage = $(el).find(".parallax");
                const hasClass = $(el).hasClass("large-image-with-text-box--loaded");
                const isLargeImageText = $(el).hasClass("large-image-with-text-box");
                if (0 === parallaxImage.length) {
                    if (!isLargeImageText) return;
                    if (!hasClass) $(el).addClass("large-image-with-text-box--loaded");
                    return;
                }
                const {top, height} = el.getBoundingClientRect();
                if (top > viewPortHeight || top <= -height) return;
                const speed = 2;
                const movableDistance = viewPortHeight + height;
                const currentDistance = viewPortHeight - top;
                const percent = (currentDistance / movableDistance * speed * 38).toFixed(2);
                const num = 38 - Number(percent);
                $(parallaxImage).css("transform", `translate3d(0 , ${-num}% , 0)`);
                if (!isLargeImageText) return;
                if (!hasClass) $(el).addClass("large-image-with-text-box--loaded");
            }));
        }
        function init() {
            parallaxContainers = $(".parallax-container");
            if (!parallaxListener) parallaxListener = $(window).on("scroll", onScroll);
            scrollHandler();
        }
        window.SL_EventBus.on("parallax", (() => {
            init();
        }));
        window.document.addEventListener("shopline:section:load", (() => {
            init();
        }));
        window.document.addEventListener("shopline:section:reorder", (() => {
            init();
        }));
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("./src/assets/stage/home-common/index.js");
} ]);