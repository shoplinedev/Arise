"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "slideshow" ], {
    "./node_modules/swiper/cjs/utils/utils.js": (__unused_webpack_module, exports, __webpack_require__) => {
        true;
        deleteProps;
        nextTick;
        now;
        getTranslate;
        isObject;
        exports.extend = extend;
        exports.bindModuleMethods = bindModuleMethods;
        getComputedStyle;
        classesToSelector;
        createElementIfNotDefined;
        var _ssrWindow = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach((function(key) {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function now() {
            return Date.now();
        }
        function getComputedStyle(el) {
            var window = (0, _ssrWindow.getWindow)();
            var style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            var window = (0, _ssrWindow.getWindow)();
            var matrix;
            var curTransform;
            var transformMatrix;
            var curStyle = getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((function(a) {
                    return a.replace(",", ".");
                })).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function extend() {
            var to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            var noExtend = [ "__proto__", "constructor", "prototype" ];
            for (var i = 1; i < arguments.length; i += 1) {
                var nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    var keysArray = Object.keys(Object(nextSource)).filter((function(key) {
                        return noExtend.indexOf(key) < 0;
                    }));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else extend(to[nextKey], nextSource[nextKey]); else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function bindModuleMethods(instance, obj) {
            Object.keys(obj).forEach((function(key) {
                if (isObject(obj[key])) Object.keys(obj[key]).forEach((function(subKey) {
                    if ("function" === typeof obj[key][subKey]) obj[key][subKey] = obj[key][subKey].bind(instance);
                }));
                instance[key] = obj[key];
            }));
        }
        function classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return "." + classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".");
        }
        function createElementIfNotDefined($container, params, createElements, checkProps) {
            var document = (0, _ssrWindow.getDocument)();
            if (createElements) Object.keys(checkProps).forEach((function(key) {
                if (!params[key] && true === params.auto) {
                    var element = document.createElement("div");
                    element.className = checkProps[key];
                    $container.append(element);
                    params[key] = element;
                }
            }));
            return params;
        }
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
    "./src/assets/stage/slideshow/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var ssr_window_esm = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        var utils = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
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
        var Autoplay = {
            run: function() {
                var swiper = this;
                var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                var delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = (0, utils.nextTick)((function() {
                    var autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else swiper.autoplay.stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        swiper.emit("autoplay");
                    } else swiper.autoplay.stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run(); else if (false === autoplayResult) swiper.autoplay.run();
                }), delay);
            },
            start: function() {
                var swiper = this;
                if ("undefined" !== typeof swiper.autoplay.timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                swiper.emit("autoplayStart");
                swiper.autoplay.run();
                return true;
            },
            stop: function() {
                var swiper = this;
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof swiper.autoplay.timeout) return false;
                if (swiper.autoplay.timeout) {
                    clearTimeout(swiper.autoplay.timeout);
                    swiper.autoplay.timeout = void 0;
                }
                swiper.autoplay.running = false;
                swiper.emit("autoplayStop");
                return true;
            },
            pause: function(speed) {
                var swiper = this;
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    swiper.autoplay.run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                    swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
                }));
            },
            onVisibilityChange: function() {
                var swiper = this;
                var document = (0, ssr_window_esm.getDocument)();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) swiper.autoplay.pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    swiper.autoplay.run();
                    swiper.autoplay.paused = false;
                }
            },
            onTransitionEnd: function(e) {
                var swiper = this;
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                    swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) swiper.autoplay.stop(); else swiper.autoplay.run();
            },
            onMouseEnter: function() {
                var swiper = this;
                if (swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop(); else swiper.autoplay.pause();
                [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
                    swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
                }));
            },
            onMouseLeave: function() {
                var swiper = this;
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            },
            attachMouseEvents: function() {
                var swiper = this;
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", swiper.autoplay.onMouseEnter);
                    swiper.$el.on("mouseleave", swiper.autoplay.onMouseLeave);
                }
            },
            detachMouseEvents: function() {
                var swiper = this;
                swiper.$el.off("mouseenter", swiper.autoplay.onMouseEnter);
                swiper.$el.off("mouseleave", swiper.autoplay.onMouseLeave);
            }
        };
        const autoplay = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            },
            create: function() {
                var swiper = this;
                (0, utils.bindModuleMethods)(swiper, {
                    autoplay: _extends({}, Autoplay, {
                        running: false,
                        paused: false
                    })
                });
            },
            on: {
                init: function(swiper) {
                    if (swiper.params.autoplay.enabled) {
                        swiper.autoplay.start();
                        var document = (0, ssr_window_esm.getDocument)();
                        document.addEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
                        swiper.autoplay.attachMouseEvents();
                    }
                },
                beforeTransitionStart: function(swiper, speed, internal) {
                    if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else swiper.autoplay.stop();
                },
                sliderFirstMove: function(swiper) {
                    if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop(); else swiper.autoplay.pause();
                },
                touchEnd: function(swiper) {
                    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.run();
                },
                destroy: function(swiper) {
                    swiper.autoplay.detachMouseEvents();
                    if (swiper.autoplay.running) swiper.autoplay.stop();
                    var document = (0, ssr_window_esm.getDocument)();
                    document.removeEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
                }
            }
        };
        var dom = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
        function keyboard_extends() {
            keyboard_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return keyboard_extends.apply(this, arguments);
        }
        var Keyboard = {
            handle: function(event) {
                var swiper = this;
                if (!swiper.enabled) return;
                var window = (0, ssr_window_esm.getWindow)();
                var document = (0, ssr_window_esm.getDocument)();
                var rtl = swiper.rtlTranslate;
                var e = event;
                if (e.originalEvent) e = e.originalEvent;
                var kc = e.keyCode || e.charCode;
                var pageUpDown = swiper.params.keyboard.pageUpDown;
                var isPageUp = pageUpDown && 33 === kc;
                var isPageDown = pageUpDown && 34 === kc;
                var isArrowLeft = 37 === kc;
                var isArrowRight = 39 === kc;
                var isArrowUp = 38 === kc;
                var isArrowDown = 40 === kc;
                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                if (document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase())) return;
                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    var inView = false;
                    if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && 0 === swiper.$el.parents("." + swiper.params.slideActiveClass).length) return;
                    var $el = swiper.$el;
                    var swiperWidth = $el[0].clientWidth;
                    var swiperHeight = $el[0].clientHeight;
                    var windowWidth = window.innerWidth;
                    var windowHeight = window.innerHeight;
                    var swiperOffset = swiper.$el.offset();
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    var swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiperWidth, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiperHeight ], [ swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight ] ];
                    for (var i = 0; i < swiperCoord.length; i += 1) {
                        var point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (0 === point[0] && 0 === point[1]) continue;
                            inView = true;
                        }
                    }
                    if (!inView) return;
                }
                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }
                swiper.emit("keyPress", kc);
                return;
            },
            enable: function() {
                var swiper = this;
                var document = (0, ssr_window_esm.getDocument)();
                if (swiper.keyboard.enabled) return;
                (0, dom["default"])(document).on("keydown", swiper.keyboard.handle);
                swiper.keyboard.enabled = true;
            },
            disable: function() {
                var swiper = this;
                var document = (0, ssr_window_esm.getDocument)();
                if (!swiper.keyboard.enabled) return;
                (0, dom["default"])(document).off("keydown", swiper.keyboard.handle);
                swiper.keyboard.enabled = false;
            }
        };
        const keyboard = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            },
            create: function() {
                var swiper = this;
                (0, utils.bindModuleMethods)(swiper, {
                    keyboard: keyboard_extends({
                        enabled: false
                    }, Keyboard)
                });
            },
            on: {
                init: function(swiper) {
                    if (swiper.params.keyboard.enabled) swiper.keyboard.enable();
                },
                destroy: function(swiper) {
                    if (swiper.keyboard.enabled) swiper.keyboard.disable();
                }
            }
        };
        var core_class = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        var effect_fade = __webpack_require__("./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
        var navigation = __webpack_require__("./node_modules/swiper/esm/components/navigation/navigation.js");
        var pagination = __webpack_require__("./node_modules/swiper/esm/components/pagination/pagination.js");
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var utils_utils = __webpack_require__("./node_modules/swiper/cjs/utils/utils.js");
        const classes = {
            animateOut: "is-animate-out"
        };
        const Fade = {
            setTranslate() {},
            setTransition() {}
        };
        const effect_flickity_fade = {
            name: "effect-flickity-fade",
            params: {
                flickityFadeEffect: {
                    crossFade: false
                }
            },
            create() {
                const swiper = this;
                if ("flickity-fade" !== swiper.params.effect) return;
                (0, utils_utils.bindModuleMethods)(swiper, {
                    flickityFadeEffect: {
                        ...Fade
                    }
                });
            },
            on: {
                beforeInit(swiper) {
                    if ("flickity-fade" !== swiper.params.effect) return;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}flickity-fade`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true
                    };
                    (0, utils_utils.extend)(swiper.params, overwriteParams);
                    (0, utils_utils.extend)(swiper.originalParams, overwriteParams);
                },
                init(swiper) {
                    if ("flickity-fade" !== swiper.params.effect) return;
                    swiper.slides.css({
                        position: "absolute"
                    });
                },
                slideChange(swiper) {
                    if ("flickity-fade" !== swiper.params.effect) return;
                    const $animateItems = swiper.slides.eq(this.activeIndex).find(".animation-contents");
                    $animateItems.off("animationend");
                    Promise.all($animateItems.map((item => new Promise((resolve => {
                        __SL_$__(item).one("animationend", (() => {
                            resolve();
                        }));
                    }))))).then((() => {
                        swiper.$wrapperEl[0].dispatchEvent(new CustomEvent("transitionend"));
                        swiper.emit("fadeTransitionend");
                    }));
                    swiper.slides.each((function() {
                        const $el = __SL_$__(this);
                        if ($el.hasClass(swiper.params.slideActiveClass)) $el.addClass(classes.animateOut).one("transitionend", (() => {
                            $el.removeClass(classes.animateOut);
                        }));
                    }));
                },
                transitionEnd() {}
            }
        };
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        core_class["default"].use([ effect_flickity_fade, effect_fade["default"], navigation["default"], pagination["default"], autoplay, keyboard ]);
        const SLIDE_ACTIVE_CLASS = "is-selected";
        const selectors = {
            flickityViewport: ".flickity-viewport",
            image: ".hero__image",
            imageWrapper: ".hero__image-wrapper",
            imageMobile: ".hero__image--mobile",
            slide: ".slideshow__slide"
        };
        const slideshow_classes = {
            parallaxContainer: "parallax-container",
            parallax: "parallax",
            isNatural: "is-natural",
            isNaturalMobile: "is-natural-mobile"
        };
        class Slideshow {
            constructor(container) {
                _defineProperty(this, "container", null);
                _defineProperty(this, "settings", {});
                _defineProperty(this, "sectionId", "");
                this.container = container;
                this.sectionId = container.data("section-id");
                try {
                    this.settings = JSON.parse(__SL_$__(`#Slideshow-data-${this.sectionId}`).text());
                } catch (err) {}
                this.init();
            }
            init() {
                const {container, sectionId, settings} = this;
                const slides = container.find(selectors.slide);
                const swiperOptions = {
                    grabCursor: true,
                    enabled: slides.length > 1,
                    speed: 0,
                    effect: "flickity-fade",
                    slideActiveClass: SLIDE_ACTIVE_CLASS,
                    wrapperClass: "flickity-slider",
                    loop: true,
                    createElements: true,
                    virtualTranslate: true,
                    delay: 2e3,
                    keyboard: {
                        enabled: true
                    },
                    on: {
                        fadeTransitionend() {},
                        slideChangeTransitionStart() {
                            this.$el.removeClass("hero--static");
                        },
                        init() {},
                        afterInit() {
                            window.SL_EventBus.emit("parallax");
                        },
                        beforeTransitionStart(swiper) {
                            swiper.$el[0].classList.add("hero-transition");
                        },
                        transitionEnd(swiper) {
                            swiper.$el[0].classList.remove("hero-transition");
                        }
                    }
                };
                if ("slide" === settings.transition_type) Object.assign(swiperOptions, {
                    speed: 1e3,
                    effect: "slide",
                    createElements: false,
                    virtualTranslate: false,
                    delay: 0
                });
                if ("scale" === settings.transition_type) Object.assign(swiperOptions, {
                    effect: "fade",
                    speed: 800
                });
                if (settings.autoplay) Object.assign(swiperOptions, {
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 1e3 * settings.autoplay_speed
                    }
                });
                switch (settings.style) {
                  case "arrows":
                    Object.assign(swiperOptions, {
                        navigation: {
                            nextEl: ".flickity-button--next",
                            prevEl: ".flickity-button--prev"
                        }
                    });
                    break;

                  case "dots":
                  case "bars":
                    Object.assign(swiperOptions, {
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true
                        }
                    });
                }
                this.swiper = new core_class["default"](`#Slideshow-${sectionId}`, swiperOptions);
                const $flickityViewport = container.find(selectors.flickityViewport);
                if ($flickityViewport.hasClass(slideshow_classes.isNatural)) {
                    const $image = container.find(`[data-swiper-slide-index="0"]`).find(selectors.image).eq(0);
                    if ($image.data("aspectratio")) return;
                    const src = $image.data("aspectratio-url");
                    const image = new Image;
                    image.src = src;
                    image.onload = e => {
                        const {target} = e;
                        const aspectRatio = target.height / target.width * 100;
                        $flickityViewport.prepend(__SL_$__("<style />").text(`\n          @media only screen and (min-width: 769px) {\n            .natural--${sectionId} {\n              padding-top: ${aspectRatio}% !important;\n            }\n          }\n        `));
                    };
                }
                if ($flickityViewport.hasClass(slideshow_classes.isNaturalMobile)) {
                    const $mobileImage = container.find(selectors.imageMobile);
                    let src = $mobileImage.data("aspectratio-url");
                    if ($mobileImage.data("aspectratio")) return;
                    if (!src) {
                        const $pcImage = container.find(`[data-swiper-slide-index="0"]`).find(selectors.image).eq(0);
                        if ($pcImage.data("aspectratio")) return;
                        src = $pcImage.data("aspectratio-url");
                    }
                    if (!src) return;
                    const image = new Image;
                    image.src = src;
                    image.onload = e => {
                        const {target} = e;
                        const aspectRatio = target.height / target.width * 100;
                        $flickityViewport.prepend(__SL_$__("<style />").text(`\n          @media only screen and (max-width: 768px) {\n            .natural-mobile--${sectionId} {\n              padding-top: ${aspectRatio}% !important;\n            }\n          }\n        `));
                    };
                }
            }
            destroy() {
                console.info("swiper:destroy");
                this.swiper.destroy();
            }
        }
        class SlideshowSection {
            constructor(container) {
                _defineProperty(this, "slideshow", null);
                if (!container.find(selectors.slide).length) return;
                this.slideshow = new Slideshow(container);
            }
            onUnload() {
                if (this.slideshow) this.slideshow.destroy();
            }
        }
        _defineProperty(SlideshowSection, "type", "slideshow");
        (0, sectionsLoad.registrySectionConstructor)("slideshow", SlideshowSection);
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/slideshow/index.js")));
    __webpack_require__.O();
} ]);