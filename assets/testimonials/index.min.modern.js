"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "testimonials" ], {
    "./node_modules/swiper/esm/components/navigation/navigation.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
        var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        var Navigation = {
            toggleEl: function($el, disabled) {
                $el[disabled ? "addClass" : "removeClass"](this.params.navigation.disabledClass);
                if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
            },
            update: function() {
                var swiper = this;
                var params = swiper.params.navigation;
                var toggleEl = swiper.navigation.toggleEl;
                if (swiper.params.loop) return;
                var _swiper$navigation = swiper.navigation, $nextEl = _swiper$navigation.$nextEl, $prevEl = _swiper$navigation.$prevEl;
                if ($prevEl && $prevEl.length > 0) {
                    if (swiper.isBeginning) toggleEl($prevEl, true); else toggleEl($prevEl, false);
                    if (swiper.params.watchOverflow && swiper.enabled) $prevEl[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
                if ($nextEl && $nextEl.length > 0) {
                    if (swiper.isEnd) toggleEl($nextEl, true); else toggleEl($nextEl, false);
                    if (swiper.params.watchOverflow && swiper.enabled) $nextEl[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            },
            onPrevClick: function(e) {
                var swiper = this;
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop) return;
                swiper.slidePrev();
            },
            onNextClick: function(e) {
                var swiper = this;
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop) return;
                swiper.slideNext();
            },
            init: function() {
                var swiper = this;
                var params = swiper.params.navigation;
                swiper.params.navigation = (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                var $nextEl;
                var $prevEl;
                if (params.nextEl) {
                    $nextEl = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);
                    if (swiper.params.uniqueNavElements && "string" === typeof params.nextEl && $nextEl.length > 1 && 1 === swiper.$el.find(params.nextEl).length) $nextEl = swiper.$el.find(params.nextEl);
                }
                if (params.prevEl) {
                    $prevEl = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);
                    if (swiper.params.uniqueNavElements && "string" === typeof params.prevEl && $prevEl.length > 1 && 1 === swiper.$el.find(params.prevEl).length) $prevEl = swiper.$el.find(params.prevEl);
                }
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", swiper.navigation.onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", swiper.navigation.onPrevClick);
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            },
            destroy: function() {
                var swiper = this;
                var _swiper$navigation2 = swiper.navigation, $nextEl = _swiper$navigation2.$nextEl, $prevEl = _swiper$navigation2.$prevEl;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", swiper.navigation.onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", swiper.navigation.onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var swiper = this;
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
                    navigation: _extends({}, Navigation)
                });
            },
            on: {
                init: function(swiper) {
                    swiper.navigation.init();
                    swiper.navigation.update();
                },
                toEdge: function(swiper) {
                    swiper.navigation.update();
                },
                fromEdge: function(swiper) {
                    swiper.navigation.update();
                },
                destroy: function(swiper) {
                    swiper.navigation.destroy();
                },
                "enable disable": function(swiper) {
                    var _swiper$navigation3 = swiper.navigation, $nextEl = _swiper$navigation3.$nextEl, $prevEl = _swiper$navigation3.$prevEl;
                    if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                    if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                },
                click: function(swiper, e) {
                    var _swiper$navigation4 = swiper.navigation, $nextEl = _swiper$navigation4.$nextEl, $prevEl = _swiper$navigation4.$prevEl;
                    var targetEl = e.target;
                    if (swiper.params.navigation.hideOnClick && !(0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($prevEl) && !(0, 
                    _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($nextEl)) {
                        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                        var isHidden;
                        if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                        if (true === isHidden) swiper.emit("navigationShow"); else swiper.emit("navigationHide");
                        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            }
        };
    },
    "./node_modules/swiper/esm/components/pagination/pagination.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
        var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        var Pagination = {
            update: function() {
                var swiper = this;
                var rtl = swiper.rtl;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length) return;
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el;
                var current;
                var total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    var bullets = swiper.pagination.bullets;
                    var firstIndex;
                    var lastIndex;
                    var midIndex;
                    if (params.dynamicBullets) {
                        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
                            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1; else if (swiper.pagination.dynamicBulletIndex < 0) swiper.pagination.dynamicBulletIndex = 0;
                        }
                        firstIndex = current - swiper.pagination.dynamicBulletIndex;
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
                    if ($el.length > 1) bullets.each((function(bullet) {
                        var $bullet = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(params.bulletActiveClass + "-main");
                            if (bulletIndex === firstIndex) $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            if (bulletIndex === lastIndex) $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                        }
                    })); else {
                        var $bullet = bullets.eq(current);
                        var bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            var $firstDisplayedBullet = bullets.eq(firstIndex);
                            var $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (var i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                            if (swiper.params.loop) if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                            } else {
                                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            } else {
                                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
                        var offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", bulletsOffset + "px");
                    }
                }
                if ("fraction" === params.type) {
                    $el.find((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    var progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    var scale = (current + 1) / total;
                    var scaleX = 1;
                    var scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    swiper.emit("paginationRender", $el[0]);
                } else swiper.emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            },
            render: function() {
                var swiper = this;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length) return;
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el;
                var paginationHTML = "";
                if ("bullets" === params.type) {
                    var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (var i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += "<" + params.bulletElement + ' class="' + params.bulletClass + '"></' + params.bulletElement + ">";
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = '<span class="' + params.currentClass + '"></span>' + " / " + '<span class="' + params.totalClass + '"></span>';
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = '<span class="' + params.progressbarFillClass + '"></span>';
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) swiper.emit("paginationRender", swiper.pagination.$el[0]);
            },
            init: function() {
                var swiper = this;
                swiper.params.pagination = (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
                    el: "swiper-pagination"
                });
                var params = swiper.params.pagination;
                if (!params.el) return;
                var $el = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) $el = swiper.$el.find(params.el);
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass("" + params.modifierClass + params.type + "-dynamic");
                    swiper.pagination.dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass), (function(e) {
                    e.preventDefault();
                    var index = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            },
            destroy: function() {
                var swiper = this;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length) return;
                var $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.classesToSelector)(params.bulletClass));
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(number) {
                        return number;
                    },
                    formatFractionTotal: function(number) {
                        return number;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var swiper = this;
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
                    pagination: _extends({
                        dynamicBulletIndex: 0
                    }, Pagination)
                });
            },
            on: {
                init: function(swiper) {
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                },
                activeIndexChange: function(swiper) {
                    if (swiper.params.loop) swiper.pagination.update(); else if ("undefined" === typeof swiper.snapIndex) swiper.pagination.update();
                },
                snapIndexChange: function(swiper) {
                    if (!swiper.params.loop) swiper.pagination.update();
                },
                slidesLengthChange: function(swiper) {
                    if (swiper.params.loop) {
                        swiper.pagination.render();
                        swiper.pagination.update();
                    }
                },
                snapGridLengthChange: function(swiper) {
                    if (!swiper.params.loop) {
                        swiper.pagination.render();
                        swiper.pagination.update();
                    }
                },
                destroy: function(swiper) {
                    swiper.pagination.destroy();
                },
                "enable disable": function(swiper) {
                    var $el = swiper.pagination.$el;
                    if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
                },
                click: function(swiper, e) {
                    var targetEl = e.target;
                    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0, 
                    _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
                        if (true === isHidden) swiper.emit("paginationShow"); else swiper.emit("paginationHide");
                        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                    }
                }
            }
        };
    },
    "./src/assets/stage/testimonials/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/swiper/esm/components/navigation/navigation.js");
        var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/swiper/esm/components/pagination/pagination.js");
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _commons_utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/helper.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([ swiper__WEBPACK_IMPORTED_MODULE_3__["default"], swiper__WEBPACK_IMPORTED_MODULE_4__["default"] ]);
        const selectors = {
            slide: ".testimonials__slide",
            slideWrapper: ".testimonials__swiper",
            slideSwiperWrapper: ".testimonials__swiper-box",
            slideContainer: ".testimonials__container",
            pagination: ".testimonials__pagination",
            navigationNext: ".testimonials__arrow--right",
            navigationPrev: ".testimonials__arrow--left"
        };
        const navigation_arrow_icon = `\n<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1.5 9.3994L5.44971 5.4497L1.50001 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>\n</svg>\n`;
        class Testimonials {
            constructor(container) {
                _defineProperty(this, "container", null);
                _defineProperty(this, "sectionId", "");
                this.container = container;
                this.sectionId = container.data("section-id");
                this.init();
            }
            init() {
                const {container} = this;
                const $el = container.find(selectors.slideContainer);
                const el = $el[0];
                const slidesPerGroup = this.getSlidesPerGroup();
                const swiperOptions = {
                    slidesPerGroup,
                    slidesPerView: slidesPerGroup,
                    spaceBetween: window.Shopline.theme.settings.grid_horizontal_space || 20,
                    grabCursor: false,
                    watchOverflow: true,
                    wrapperClass: selectors.slideWrapper.slice(1),
                    slideClass: selectors.slide.slice(1),
                    threshold: 5,
                    loop: false,
                    init: false,
                    resizeObserver: true,
                    keyboard: {
                        enabled: true
                    },
                    pagination: {
                        el: container.find(selectors.pagination)[0],
                        clickable: true,
                        type: "custom",
                        renderCustom(swiper, current, total) {
                            return `\n            <a href="javascript:void(0);" class="testimonials__arrow--left${1 === current ? " testimonials__arrow--disabled" : ""}">${navigation_arrow_icon}</a>\n            <span class="testimonials__arrow--text body4">${current}/${total}</span>\n            <a href="javascript:void(0);" class="testimonials__arrow--right${current === total ? " testimonials__arrow--disabled" : ""}">${navigation_arrow_icon}</a>\n          `;
                        }
                    }
                };
                this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](el, swiperOptions);
                this.swiper.on("resize", (swiper => {
                    const currentSlidesPerGroup = this.getSlidesPerGroup();
                    if (currentSlidesPerGroup !== swiper.params.slidesPerView) {
                        swiper.params.slidesPerView = currentSlidesPerGroup;
                        swiper.params.slidesPerGroup = currentSlidesPerGroup;
                        swiper.update();
                    }
                }));
                this.swiper.init(container.find(selectors.slideSwiperWrapper)[0]);
                $el.on("click", selectors.navigationPrev, (() => {
                    this.swiper.slidePrev();
                }));
                $el.on("click", selectors.navigationNext, (() => {
                    this.swiper.slideNext();
                }));
            }
            getSlidesPerGroup() {
                return "mobile" === _commons_utils_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getPlatform() ? 1 : 3;
            }
            destroy() {
                this.swiper.destroy();
            }
        }
        class TestimonialsSection {
            constructor(container) {
                _defineProperty(this, "instance", null);
                if (!container.find(selectors.slide).length) return;
                this.instance = new Testimonials(container);
            }
            onUnload() {
                if (this.instance) this.instance.destroy();
            }
        }
        _defineProperty(TestimonialsSection, "type", "testimonials");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(TestimonialsSection.type, TestimonialsSection);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/testimonials/index.js")));
    __webpack_require__.O();
} ]);