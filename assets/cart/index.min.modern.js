(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "cart" ], {
    "./node_modules/@yy/sl-pod-preview-image/lib/index.umd.js": module => {
        "use strict";
        !function(e, t) {
            true ? module.exports = t() : 0;
        }(0, (function() {
            "use strict";
            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(e, n.key, n);
                }
            }
            var e, t, i, n;
            e = "/* FIXME: 命名空间 */\n#__previewImage-container {\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-touch-action: none;\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  user-select: none;\n}\n#__previewImage-container .previewImage-controlBox {\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 50%;\n  bottom: 90px;\n  z-index: 100;\n}\n#__previewImage-container .previewImage-controlBox img {\n  width: 10px;\n}\n\n#__previewImage-container .previewImage-controlClose,\n#__previewImage-container .previewImage-controlPrev,\n#__previewImage-container .previewImage-controlNext {\n  position: absolute;\n  transform: translate(-50%, -50%);\n\n  border-radius: 50%;\n  background: #ffffff;\n  border: 1.2px solid #e8e8e1;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#__previewImage-container .previewImage-controlClose {\n  width: 60px;\n  height: 60px;\n}\n#__previewImage-container .previewImage-controlPrev,\n#__previewImage-container .previewImage-controlNext {\n  width: 50px;\n  height: 50px;\n}\n#__previewImage-container .previewImage-controlPrev {\n  margin-left: -75px;\n}\n#__previewImage-container .previewImage-controlNext {\n  margin-left: 75px;\n}\n\n#__previewImage-container .previewImage-text {\n  position: absolute;\n  top: 0.6em;\n  text-align: center;\n  font-size: 18px;\n  line-height: 25px;\n  color: #fff;\n  z-index: 10;\n  padding: 0.2em 0.4em;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  letter-spacing: 0;\n  right: 0.8em;\n}\n#__previewImage-container .previewImage-text .previewImage-text-index {\n  font-size: 24px;\n}\n#__previewImage-container .previewImage-box {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  cursor: grab;\n}\n#__previewImage-container .previewImage-box .previewImage-item {\n  height: 100%;\n  /* FIXME:可配置 */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  /* FIXME: 添加过渡？ */\n  /* FIXME:背景可配置 */\n}\n", 
            n = (t = void 0 === t ? {} : t).insertAt, e && "undefined" != typeof document && (i = document.head || document.getElementsByTagName("head")[0], 
            (t = document.createElement("style")).type = "text/css", "top" === n && i.firstChild ? i.insertBefore(t, i.firstChild) : i.appendChild(t), 
            t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)));
            var h = {};
            function s(e, t) {
                e.style.bottom = t < 600 ? "75px" : "90px";
            }
            function c(e, t, i) {
                var n, a, o, r, s;
                i && t || console.error("非法的viewportHeight或viewportWidth"), e && (r = n = e.naturalWidth, 
                s = a = e.naturalHeight, (o = n / a) < t / i ? i < a && (r = o * (s = i)) : t < n && (s = (r = t) / o), 
                e.style.width = r + "px", e.style.height = s + "px");
            }
            h.isArray = function(e) {
                return "[object Array]" == Object.prototype.toString.call(e);
            }, h.all = function(e, t) {
                var i = [];
                e = (t || document).querySelectorAll(e);
                return e && 0 < e.length ? Array.prototype.slice.call(e) : i;
            }, h.delegate = function(a, e, o, r, s) {
                a && a.addEventListener(e, (function(e) {
                    s(e);
                    var t = h.all(o, a);
                    if (t) for (var i = 0; i < t.length; i++) for (var n = e.target; n; ) {
                        if (n == t[i]) {
                            r.call(n, e);
                            break;
                        }
                        if ((n = n.parentNode) == a) break;
                    }
                }), !1);
            };
            var o, r = function() {
                function n() {
                    var e, t, i;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), i = function(e, t) {
                        e = Math.sqrt(Math.pow(e.x1 - e.x0, 2) + Math.pow(e.y1 - e.y0, 2));
                        return Math.sqrt(Math.pow(t.x1 - t.x0, 2) + Math.pow(t.y1 - t.y0, 2)) / e;
                    }, (t = "getScale") in (e = this) ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, this.winw = window.innerWidth, this.winh = window.innerHeight, this.marginRight = 0, 
                    this.imageChageMoveX = this.marginRight + this.winw, this.imageChageNeedX = Math.floor(.5 * this.winw), 
                    this.cssprefix = [ "", "webkit", "Moz", "ms", "o" ], this.scale = 1, this.maxScale = 4, 
                    this.maxOverScale = 6, this.openTime = 0, this.slipTime = .5, this.maxOverWidthPercent = .5, 
                    this.$box, this.isPreview = !1, this.zIndex = "10000", this.$container = document.createElement("div"), 
                    this.$container.id = "__previewImage-container", this.$container.style.display = "none", 
                    document.body.appendChild(this.$container), this.bind();
                }
                var e, t, i;
                return e = n, (t = [ {
                    key: "bind",
                    value: function() {
                        function e(e) {
                            o.touchEndFun.call(o, e);
                        }
                        function t(e) {
                            o.stopPropagation && e.stopPropagation();
                        }
                        var i, n = this, a = this.$container, o = this;
                        window.addEventListener("resize", (function() {
                            var e;
                            n.isPreview && (n.swiping = !0, n.trackStyle(), (e = n).winw = n.$container.offsetWidth, 
                            e.winh = n.$container.offsetHeight, e.imageChageMoveX = e.marginRight + e.winw, 
                            n.move({
                                pace: 0
                            }), e.fixImgs(e.winw, e.winh), i && clearTimeout(i), i = setTimeout((function() {
                                n.swiping = !1, n.trackStyle();
                            }), 100));
                        })), h.delegate(a, "click", ".previewImage-item", (function(e) {
                            o.closePreview.call(o, e);
                        }), t), h.delegate(a, "touchstart", ".previewImage-item", (function(e) {
                            o.touchStartFun.call(o, e);
                        }), t), h.delegate(a, "touchmove", ".previewImage-item", (function(e) {
                            o.touchMoveFun.call(o, e);
                        }), t), h.delegate(a, "touchend", ".previewImage-item", e, t), h.delegate(a, "touchcancel", ".previewImage-item", e, t);
                    }
                }, {
                    key: "fixImgs",
                    value: function(a, o) {
                        var r = this;
                        this.imgStatusCache.forEach((function(e) {
                            var t, i, n;
                            t = e.swiperItemEl, i = a, n = o, t && (t.style.width = i + "px", t.style.height = n + "px"), 
                            c(e.$img, a, o), s(r.$controlBox, a);
                        }));
                    }
                }, {
                    key: "start",
                    value: function(e) {
                        this.$container.innerHTML = "", this.$container.style.display = "block", this.winw = this.$container.offsetWidth, 
                        this.winh = this.$container.offsetHeight, this.imageChageMoveX = this.winw + this.marginRight, 
                        this.stopPropagation = void 0 === e.stopPropagation || e.stopPropagation, this.$container.style.zIndex = this.zIndex = String(("number" == typeof e.zIndex ? e : this).zIndex), 
                        this.container = {
                            elem: this.$container
                        };
                        var t = e.urls;
                        e = e.current;
                        if (!t || !h.isArray(t) || 0 == t.length) throw new Error("urls must be a Array and the minimum length more than zero");
                        e ? ((e = t.indexOf(e)) < 0 && (e = 0, console.warn("current isnot on urls,it will be the first value of urls!")), 
                        this.index = e) : (this.index = 0, console.warn("current is empty,it will be the first value of urls!")), 
                        this.urls = t, this.maxLen = t.length, this.maxIndexLen = t.length - 1, this.imgStatusCache = [];
                        t = this.renderControl();
                        this.$container.appendChild(t), this.render();
                    }
                }, {
                    key: "renderControl",
                    value: function() {
                        var e = this, t = this.urls.length, i = document.createElement("div");
                        i.className += "previewImage-controlBox";
                        var n = document.createElement("div");
                        n.className += "previewImage-controlClose", n.addEventListener("click", (function() {
                            e.closePreview();
                        }));
                        var a, o = document.createElement("img");
                        return o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgBzdVbCsMwDETRoSvVTjw7TykkUAxK9RiFXvCPMTofwTHwB9m5Hp3/2TjOtaBvfc03D1bja5tt+wEO4DtK7yCFeBhV4mlUgZfRDt5GK7gMzeByNIKPoXf4OOrhj6B3OJHshXxHcE/a/k2rP5kWSsw8LD/RqzE8cmWoxjP3lCo8g8rwCtrGO2gZV6BpXImGcRtAPdw8mNBHD75ww1yG2fmx3jmDwkeCOnZAAAAAAElFTkSuQmCC", 
                        n.appendChild(o), 1 < t && ((a = document.createElement("div")).className += "previewImage-controlPrev", 
                        a.addEventListener("click", (function() {
                            console.log("controlPrev"), e.changeIndex(-1);
                        })), (o = document.createElement("img")).src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACASURBVHgB7di7DYRAEATRuovoMj0yoDPlI4HA2EWDgRqjSxpn13kac+DZftu8onGZaZs/5s6YfWybamFsoB5mwFAPIwwFE0wwwQQTjAvzvfj7dN4njIn2lkaMiaBqiaBqiaBqiaBqiaBqiaBqiTbKeicSLwOtDRwYy/Wj1e2T3gxVNsVHiu6XtwAAAABJRU5ErkJggg==", 
                        a.appendChild(o), (t = document.createElement("div")).className += "previewImage-controlNext", 
                        t.addEventListener("click", (function() {
                            console.log("controlNext"), e.changeIndex(1);
                        })), (o = document.createElement("img")).src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dhLCoAwEATR0hPlpnoD+6Z+QBHBwLgIE6QLepPVI8uBb5VzXTTtW89NJFe4MdcWEnsDpaOEUbGEUbGEUbGEUbGEUbGEUbHEH1AjbVsr7wMJHb/w9jsiIWOMMcYYY4zhef1Ix5SeMDWQSG6mI8xV85PeBqVTxUftS/kNAAAAAElFTkSuQmCC", 
                        t.appendChild(o), i.appendChild(a), i.appendChild(t)), i.appendChild(n), s(i, this.winw), 
                        this.$controlBox = i;
                    }
                }, {
                    key: "render",
                    value: function() {
                        var n = this;
                        this.$box = null, this.box = null;
                        var e = document.createElement("div");
                        e.className += "previewImage-box", e.style.width = this.maxLen * this.winw + "px", 
                        this.$box = e, this.box = {
                            elem: this.$box,
                            x: 0,
                            y: 0,
                            m: 0,
                            my: 0,
                            scale: 1,
                            scalem: 1
                        }, this.urls.forEach((function(e, t) {
                            var i = document.createElement("div");
                            i.style.width = n.winw + "px", i.style.marginRight = n.marginRight + "px", n.imgStatusCache[t] = {
                                index: t,
                                hash: e,
                                x: 0,
                                m: 0,
                                y: 0,
                                my: 0,
                                scale: n.scale,
                                scalem: 1,
                                $img: null,
                                isLoad: !1,
                                swiperItemEl: i,
                                setOffset: function(e) {
                                    this.swiperItemEl.style.transform = "translateX(".concat(e, "px)");
                                }
                            }, i.className += " previewImage-item", n.$box.appendChild(i);
                        }));
                        e = this.getVImgByIndex(this.fixIndex(this.index));
                        this.reachImg(e), this.$container.appendChild(this.$box), this.boxTransform = -this.imageChageMoveX * this.index, 
                        this.move({
                            pace: 0
                        }), this.trackStyle(), this.isPreview = !0;
                    }
                }, {
                    key: "onImgLoad",
                    value: function(e) {
                        e.isLoad = !0, c(e.$img, this.winw, this.winh);
                    }
                }, {
                    key: "getVImgByIndex",
                    value: function(e) {
                        e = null == e ? this.index : e;
                        return this.imgStatusCache[e];
                    }
                }, {
                    key: "closePreview",
                    value: function() {
                        var e = this;
                        setTimeout((function() {
                            e.$container.style.display = "none";
                        }), 0), e.isPreview = !1;
                    }
                }, {
                    key: "trackStyle",
                    value: function() {
                        var t = this, i = {
                            transitionDuration: "".concat(this.swiping ? 0 : 300, "ms"),
                            transform: "translateX(".concat(this.boxTransform, "px)")
                        };
                        return Object.keys(i).forEach((function(e) {
                            t.box.elem.style[e] = i[e];
                        })), i;
                    }
                }, {
                    key: "correctPosition",
                    value: function() {
                        this.swiping = !0, this.trackStyle(), this.index < 0 ? this.move({
                            pace: this.maxLen
                        }) : this.index > this.maxIndexLen && this.move({
                            pace: -this.maxLen
                        });
                    }
                }, {
                    key: "fixIndex",
                    value: function(e) {
                        return -1 === e ? this.maxIndexLen : e === this.maxIndexLen + 1 ? 0 : e;
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = e.pace, i = e.offset, n = void 0 === i ? 0 : i;
                        i = e.emitChange;
                        this.index;
                        e = this.getTargetActive(void 0 === t ? 0 : t), t = this.getTargetOffset(e, n);
                        this.imgStatusCache[0] && (n = t < this.minOffset(), this.imgStatusCache[0].setOffset(n ? this.trackSize() : 0)), 
                        this.imgStatusCache[this.maxIndexLen] && this.imgStatusCache[this.maxIndexLen].setOffset(0 < t ? -this.trackSize() : 0), 
                        i && this.reachImg(this.imgStatusCache[this.fixIndex(e)]), this.index = e, this.boxTransform = t, 
                        this.trackStyle();
                    }
                }, {
                    key: "minOffset",
                    value: function() {
                        return this.winw - this.imageChageMoveX * this.maxLen;
                    }
                }, {
                    key: "trackSize",
                    value: function() {
                        return this.imageChageMoveX * this.maxLen;
                    }
                }, {
                    key: "getTargetOffset",
                    value: function(e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0) - e * this.imageChageMoveX;
                    }
                }, {
                    key: "getTargetActive",
                    value: function(e) {
                        var t, i, n = this.index;
                        return e ? (t = n + e, i = -1, e = this.maxIndexLen + 1, Math.min(Math.max(t, i), e)) : n;
                    }
                }, {
                    key: "touchStartFun",
                    value: function(e) {
                        this.startX = e.touches[0].clientX, this.startY = e.touches[0].clientY, this.touchStartTime = Date.now(), 
                        this.correctPosition();
                    }
                }, {
                    key: "touchMoveFun",
                    value: function(e) {
                        var t, i;
                        this.swiping && (t = e.touches[0], this.deltaX = t.clientX < 0 ? 0 : t.clientX - this.startX, 
                        this.deltaY = t.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), this.offsetY = Math.abs(this.deltaY), 
                        this.direction || (this.direction = (t = this.offsetX, (i = this.offsetY) < t && 10 < t ? "horizontal" : t < i && 10 < i ? "vertical" : "")), 
                        "horizontal" === this.direction && (i = e, e = this.stopPropagation, "boolean" == typeof i.cancelable && !i.cancelable || i.preventDefault(), 
                        e && i.stopPropagation(), this.move({
                            offset: this.deltaX
                        })));
                    }
                }, {
                    key: "getSlowlyNum",
                    value: function(e, t) {
                        t = t || this.winw * this.maxOverWidthPercent;
                        return e < 0 ? -(1 - (e = -e) / (t + e)) * e : (1 - e / (t + e)) * e;
                    }
                }, {
                    key: "touchEndFun",
                    value: function(e) {
                        var t;
                        this.swiping && (t = Date.now() - this.touchStartTime, t = this.deltaX / t, (.25 < Math.abs(t) || Math.abs(this.deltaX) > this.imageChageMoveX / 2) && "horizontal" === this.direction ? (t = (t = 0) < this.offsetX ? 0 < this.deltaX ? -1 : 1 : 0, 
                        this.move({
                            pace: t,
                            emitChange: !0
                        })) : this.deltaX && this.move({
                            pace: 0
                        }), this.swiping = !1, this.trackStyle());
                    }
                }, {
                    key: "changeIndex",
                    value: function(e) {
                        var t = this;
                        this.correctPosition(), this.move({
                            pace: e,
                            emitChange: !0
                        }), setTimeout((function() {
                            t.swiping = !1, t.trackStyle();
                        }), 0);
                    }
                }, {
                    key: "reachImg",
                    value: function(e) {
                        this.loadImg(e);
                        var t = e.index + 1 > this.maxIndexLen ? 0 : e.index + 1;
                        t !== e.index && (i = this.imgStatusCache[t], this.loadImg(i));
                        var i = e.index - 1 < 0 ? this.maxIndexLen : e.index - 1;
                        i !== e.index && t !== i && (i = this.imgStatusCache[i], this.loadImg(i));
                    }
                }, {
                    key: "loadImg",
                    value: function(e) {
                        var t, i = this;
                        e.isLoad || (e.isLoad = !0, (t = new Image).className += "previewImage-image", (e.$img = t).onload = function() {
                            i.onImgLoad.call(i, e);
                        }, t.src = e.hash, e.swiperItemEl.appendChild(t));
                    }
                } ]) && a(e.prototype, t), i && a(e, i), n;
            }();
            return function(e) {
                var t;
                (t = r, o || (o = new t)).start(e);
            };
        }));
    },
    "./node_modules/@sl/currency-tools-core/lib/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
        (function(global, factory) {
            true ? factory(exports) : 0;
        })(0, (function(exports) {
            "use strict";
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            function _iterableToArrayLimit(arr, i) {
                var _i = null == arr ? null : "undefined" !== typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
                if (null == _i) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _s, _e;
                try {
                    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && null != _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if ("Object" === n && o.constructor) n = o.constructor.name;
                if ("Map" === n || "Set" === n) return Array.from(o);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
                if (null == len || len > arr.length) len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                return arr2;
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var commonjsGlobal = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof __webpack_require__.g ? __webpack_require__.g : "undefined" !== typeof self ? self : {};
            var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
            var symbolTag = "[object Symbol]";
            var reTrim = /^\s+|\s+$/g;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            var freeGlobal = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
            var freeSelf = "object" == typeof self && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            var objectProto = Object.prototype;
            var objectToString = objectProto.toString;
            var Symbol$1 = root.Symbol;
            var nativeMin = Math.min;
            var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
            function baseToString(value) {
                if ("string" == typeof value) return value;
                if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
                var result = value + "";
                return "0" == result && 1 / value == -INFINITY ? "-0" : result;
            }
            function createRound(methodName) {
                var func = Math[methodName];
                return function(number, precision) {
                    number = toNumber(number);
                    precision = nativeMin(toInteger(precision), 292);
                    if (precision) {
                        var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                        pair = (toString(value) + "e").split("e");
                        return +(pair[0] + "e" + (+pair[1] - precision));
                    }
                    return func(number);
                };
            }
            function isObject(value) {
                var type = typeof value;
                return !!value && ("object" == type || "function" == type);
            }
            function isObjectLike(value) {
                return !!value && "object" == typeof value;
            }
            function isSymbol(value) {
                return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag;
            }
            function toFinite(value) {
                if (!value) return 0 === value ? value : 0;
                value = toNumber(value);
                if (value === INFINITY || value === -INFINITY) {
                    var sign = value < 0 ? -1 : 1;
                    return sign * MAX_INTEGER;
                }
                return value === value ? value : 0;
            }
            function toInteger(value) {
                var result = toFinite(value), remainder = result % 1;
                return result === result ? remainder ? result - remainder : result : 0;
            }
            function toNumber(value) {
                if ("number" == typeof value) return value;
                if (isSymbol(value)) return NAN;
                if (isObject(value)) {
                    var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                    value = isObject(other) ? other + "" : other;
                }
                if ("string" != typeof value) return 0 === value ? value : +value;
                value = value.replace(reTrim, "");
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            function toString(value) {
                return null == value ? "" : baseToString(value);
            }
            var round = createRound("round");
            var lodash_round = round;
            var defaultCurrency = "CNY";
            var defaultCurrencyDigit = 2;
            var defaultPresentDigit = 2;
            var standardFormatMap = {
                amount: {
                    value: "amount",
                    decimalSymbol: ".",
                    groupSymbol: ",",
                    format: "amount"
                },
                amount_no_decimals: {
                    value: "amount_no_decimals",
                    decimalSymbol: "",
                    groupSymbol: ",",
                    format: "amount_no_decimals"
                },
                amount_with_comma_separator: {
                    value: "amount_with_comma_separator",
                    decimalSymbol: ",",
                    groupSymbol: ".",
                    format: "amount_with_comma_separator"
                },
                amount_no_decimals_with_comma_separator: {
                    value: "amount_no_decimals_with_comma_separator",
                    decimalSymbol: "",
                    groupSymbol: ".",
                    format: "amount_no_decimals_with_comma_separator"
                },
                amount_with_apostrophe_separator: {
                    value: "amount_with_apostrophe_separator",
                    decimalSymbol: ".",
                    groupSymbol: "'",
                    format: "amount_with_apostrophe_separator"
                },
                amount_no_decimals_with_space_separator: {
                    value: "amount_no_decimals_with_space_separator",
                    decimalSymbol: "",
                    groupSymbol: " ",
                    format: "amount_no_decimals_with_space_separator"
                },
                amount_with_space_separator: {
                    value: "amount_with_space_separator",
                    decimalSymbol: ",",
                    groupSymbol: " ",
                    format: "amount_with_space_separator"
                }
            };
            var CUSTOM_FORMAT_REGEX = /.*\{\{(.*)\}\}/;
            var ORIGIN_FORMAT_REGEX = /(\{\{.*\}\})/;
            var DEFAULT_FORMAT = "{{amount}}";
            var defaultFormatStr = "amount";
            var SymbolOrderEnum;
            (function(SymbolOrderEnum) {
                SymbolOrderEnum["PREFIX"] = "prefix";
                SymbolOrderEnum["SUFFIX"] = "suffix";
            })(SymbolOrderEnum || (SymbolOrderEnum = {}));
            function isNodeEnv() {
                return "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0);
            }
            function formatNumberByGroupSymbol(num, symbol) {
                return "".concat(num || 0).replace(/(\d)(?=(?:\d{3})+$)/g, "$1".concat(symbol));
            }
            function parseIntegerAndFractionPartByStr(originValue, precision, decimalSymbol) {
                var value = lodash_round(originValue, precision);
                var integerPart;
                var fractionPart;
                if (0 === precision || !decimalSymbol) {
                    integerPart = lodash_round(value);
                    fractionPart = "";
                } else {
                    integerPart = Math.floor(value);
                    fractionPart = "".concat(lodash_round(value - integerPart, precision)).replace(/^0?\.?/, "").padEnd(precision, "0");
                }
                return {
                    integerPart,
                    fractionPart
                };
            }
            var storeCurrency;
            var defaultToCurrency;
            var currencyRates;
            var currencyConfig;
            var standardFormatMapValue = Object.entries(standardFormatMap).map((function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), value = _ref2[1];
                return value.value;
            }));
            var currencyPrecisionsMap = new Map;
            var currencySymbolsMap = new Map;
            var currencyCustomFormatWithoutCurrencyMap = new Map;
            var currencyCustomFormatWithCurrencyMap = new Map;
            var currencyDefaultFormatWithoutCurrencyMap = new Map;
            var currencyDefaultFormatWithCurrencyMap = new Map;
            var currencySymbolOrderMap = new Map;
            var currencyDecimalSymbolsMap = new Map;
            var currencyGroupSymbolsMap = new Map;
            var reset = function() {
                currencyPrecisionsMap.clear();
                currencySymbolsMap.clear();
                currencyCustomFormatWithoutCurrencyMap.clear();
                currencyCustomFormatWithCurrencyMap.clear();
                currencyDefaultFormatWithoutCurrencyMap.clear();
                currencyDefaultFormatWithCurrencyMap.clear();
                currencySymbolOrderMap.clear();
                currencyDecimalSymbolsMap.clear();
                currencyGroupSymbolsMap.clear();
            };
            var setStoreCurrency = function(code) {
                storeCurrency = code;
            };
            var getStoreCurrency = function() {
                return storeCurrency;
            };
            var setCurrencyRates = function(rates) {
                currencyRates = rates;
            };
            var getCurrencyRates = function() {
                return currencyRates;
            };
            var setDefaultToCurrency = function(code) {
                defaultToCurrency = code;
            };
            var getDefaultToCurrency = function() {
                return defaultToCurrency;
            };
            var setCurrencyConfig = function(config) {
                currencyConfig = config;
                var ratesData = {};
                currencyConfig.forEach((function(config) {
                    ratesData[config.currencyCode] = config.exchangeRate;
                }));
                setCurrencyRates(ratesData);
                if (isNodeEnv()) reset();
            };
            var getCurrencyConfig = function() {
                return currencyConfig;
            };
            var getCurrencyConfigByCode = function(code) {
                return getCurrencyConfig().find((function(item) {
                    return item.currencyCode === code;
                }));
            };
            var isStandardFormatMapKeyType = function(x) {
                return standardFormatMapValue.includes(x || "");
            };
            var commonFormatParse = function(config) {
                var format = config.match(CUSTOM_FORMAT_REGEX);
                if (format && format.length) {
                    var customString = (format[1] || "").trim();
                    if (!isStandardFormatMapKeyType(customString)) return null;
                    return standardFormatMap[customString];
                }
                return null;
            };
            var parseCustomFormat = function(code, config, withCurrency) {
                var _map$get;
                var map = withCurrency ? currencyDefaultFormatWithCurrencyMap : currencyDefaultFormatWithoutCurrencyMap;
                var format = commonFormatParse(config);
                var finalFormat = null === (_map$get = map.get(code)) || void 0 === _map$get ? void 0 : _map$get.format;
                if (format) return format;
                if (isStandardFormatMapKeyType(finalFormat)) return standardFormatMap[finalFormat];
                return standardFormatMap[defaultFormatStr];
            };
            var parseDefaultFormat = function(config) {
                return commonFormatParse(config) || standardFormatMap[defaultFormatStr];
            };
            var parsePrecision = function(code, precision) {
                currencyPrecisionsMap.set(code, precision);
            };
            var parseCurrencySymbol = function(code, currencySymbol) {
                currencySymbolsMap.set(code, currencySymbol);
            };
            var getOriginalFormatConfig = function(config, code, withCurrency) {
                var _format$, _get;
                var format = config.match(CUSTOM_FORMAT_REGEX);
                if (null !== format && void 0 !== format && format.length && standardFormatMapValue.includes((null === format || void 0 === format ? void 0 : null === (_format$ = format[1]) || void 0 === _format$ ? void 0 : _format$.trim()) || "")) return config;
                return (null === (_get = (withCurrency ? currencyDefaultFormatWithCurrencyMap : currencyDefaultFormatWithoutCurrencyMap).get(code)) || void 0 === _get ? void 0 : _get.origin) || DEFAULT_FORMAT;
            };
            var parseDefaultFormatWithoutCurrency = function(code, config) {
                var _parseDefaultFormat = parseDefaultFormat(config), format = _parseDefaultFormat.format;
                currencyDefaultFormatWithoutCurrencyMap.set(code, {
                    format,
                    origin: config
                });
            };
            var parseDefaultFormatWithCurrency = function(code, config) {
                var _parseDefaultFormat2 = parseDefaultFormat(config), format = _parseDefaultFormat2.format;
                currencyDefaultFormatWithCurrencyMap.set(code, {
                    format,
                    origin: config
                });
            };
            var parseCustomFormatWithoutCurrency = function(code, config) {
                var _parseCustomFormat = parseCustomFormat(code, config, false), format = _parseCustomFormat.format, decimalSymbol = _parseCustomFormat.decimalSymbol, groupSymbol = _parseCustomFormat.groupSymbol;
                currencyDecimalSymbolsMap.set(code, decimalSymbol);
                currencyGroupSymbolsMap.set(code, groupSymbol);
                currencyCustomFormatWithoutCurrencyMap.set(code, {
                    format,
                    origin: getOriginalFormatConfig(config, code, false)
                });
            };
            var parseCustomFormatWithCurrency = function(code, config) {
                var _parseCustomFormat2 = parseCustomFormat(code, config, true), format = _parseCustomFormat2.format, decimalSymbol = _parseCustomFormat2.decimalSymbol, groupSymbol = _parseCustomFormat2.groupSymbol;
                currencyDecimalSymbolsMap.set(code, decimalSymbol);
                currencyGroupSymbolsMap.set(code, groupSymbol);
                currencyCustomFormatWithCurrencyMap.set(code, {
                    format,
                    origin: getOriginalFormatConfig(config, code, true)
                });
            };
            var parseCurrencySymbolOrder = function(code, config) {
                if (!config) {
                    console.error("".concat(code, "无对应的messageWithoutDefaultCurrency配置"));
                    return;
                }
                if ((null === config || void 0 === config ? void 0 : config.trimStart().indexOf("{{")) > 0) currencySymbolOrderMap.set(code, SymbolOrderEnum.PREFIX); else currencySymbolOrderMap.set(code, SymbolOrderEnum.SUFFIX);
            };
            var parseCurrencyConfig = function(code) {
                var config = getCurrencyConfigByCode(code);
                if (!config) {
                    console.error("获取".concat(code, "对应的货币配置失败"));
                    return;
                }
                var messageWithoutDefaultCurrency = config.messageWithoutDefaultCurrency, messageWithCurrency = config.messageWithCurrency, messageWithoutCurrency = config.messageWithoutCurrency, messageWithDefaultCurrency = config.messageWithDefaultCurrency, currencyCode = config.currencyCode, _config$rate = config.rate, rate = void 0 === _config$rate ? defaultCurrencyDigit : _config$rate, currencySymbol = config.currencySymbol;
                parsePrecision(currencyCode, rate);
                parseCurrencySymbol(currencyCode, currencySymbol);
                parseCurrencySymbolOrder(currencyCode, messageWithoutDefaultCurrency);
                parseDefaultFormatWithoutCurrency(currencyCode, messageWithoutDefaultCurrency);
                parseDefaultFormatWithCurrency(currencyCode, messageWithDefaultCurrency);
                parseCustomFormatWithoutCurrency(currencyCode, messageWithoutCurrency);
                parseCustomFormatWithCurrency(currencyCode, messageWithCurrency);
            };
            var combineFormatPart = function() {
                var str = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                var originFormat = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return originFormat.replace(ORIGIN_FORMAT_REGEX, str);
            };
            var parseNumberByFormatStr = function(value, formatStr, precision) {
                var _standardFormatMap$fo = standardFormatMap[formatStr], groupSymbol = _standardFormatMap$fo.groupSymbol, decimalSymbol = _standardFormatMap$fo.decimalSymbol;
                var isNegative = value < 0;
                var _parseIntegerAndFract = parseIntegerAndFractionPartByStr(isNegative ? -value : value, precision, decimalSymbol), fractionPart = _parseIntegerAndFract.fractionPart, integerPart = _parseIntegerAndFract.integerPart;
                var integerPartWithGroupSymbol = formatNumberByGroupSymbol(integerPart, groupSymbol);
                return {
                    integer: "".concat(isNegative ? "-" : "").concat(integerPartWithGroupSymbol),
                    fraction: fractionPart,
                    groupSymbol,
                    decimalSymbol
                };
            };
            var getFormatParts = function(value, options) {
                var code = (null === options || void 0 === options ? void 0 : options.code) || storeCurrency || defaultCurrency;
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                var group = getGroupSymbolByCode(code);
                var decimal = getDecimalSymbolByCode(code);
                var symbol = getSymbolByCode(code);
                var symbolOrder = getSymbolOrderByCode(code);
                var _ref3 = currencyCustomFormatWithoutCurrencyMap.get(code) || {}, format = _ref3.format;
                var finalFormat = isStandardFormatMapKeyType(format) ? format : defaultFormatStr;
                var _parseNumberByFormatS = parseNumberByFormatStr(value, finalFormat, defaultCurrencyDigit), integer = _parseNumberByFormatS.integer, fraction = _parseNumberByFormatS.fraction;
                var rst = [];
                var integerArr = (null === integer || void 0 === integer ? void 0 : integer.split(group)) || [];
                integerArr.forEach((function(item, index) {
                    rst.push({
                        type: "integer",
                        value: item
                    });
                    if (index !== integerArr.length - 1) rst.push({
                        type: "group",
                        value: group
                    });
                }));
                rst.push({
                    type: "decimal",
                    value: decimal
                });
                rst.push({
                    type: "fraction",
                    value: null === fraction || void 0 === fraction ? void 0 : fraction.trim()
                });
                if ("prefix" === symbolOrder) rst.unshift({
                    type: "currency",
                    value: symbol
                }); else rst.push({
                    type: "currency",
                    value: symbol
                });
                return rst;
            };
            var convertCalc = function(value) {
                var _rates$to, _rates$from;
                var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultCurrency;
                var to = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultToCurrency;
                var ratesData = arguments.length > 3 ? arguments[3] : void 0;
                var rates = ratesData || getCurrencyRates();
                if (from === to) return value;
                return value * (null !== (_rates$to = null === rates || void 0 === rates ? void 0 : rates[to]) && void 0 !== _rates$to ? _rates$to : 1) / (null !== (_rates$from = null === rates || void 0 === rates ? void 0 : rates[from]) && void 0 !== _rates$from ? _rates$from : 1);
            };
            var commonConvertFormat = function(value, withCurrency, options) {
                var map = withCurrency ? currencyCustomFormatWithCurrencyMap : currencyCustomFormatWithoutCurrencyMap;
                var formatFn = withCurrency ? format : formatWithoutCurrency;
                var _ref4 = options || {}, _ref4$from = _ref4.from, from = void 0 === _ref4$from ? storeCurrency : _ref4$from, _ref4$to = _ref4.to, to = void 0 === _ref4$to ? defaultToCurrency : _ref4$to, rates = _ref4.currencyRates;
                if (!map.get(from)) parseCurrencyConfig(from);
                if (!map.get(to)) parseCurrencyConfig(to);
                var rateData = rates || getCurrencyRates();
                var rst = convertCalc(value, from, to, rateData);
                return formatFn(rst, {
                    code: to
                });
            };
            var convertFormat = function(value, options) {
                return commonConvertFormat(value, true, options);
            };
            var convertFormatWithoutCurrency = function(value, options) {
                return commonConvertFormat(value, false, options);
            };
            var commonFormat = function(value) {
                var _options$digits;
                var withCurrency = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : true;
                var options = arguments.length > 2 ? arguments[2] : void 0;
                var map = withCurrency ? currencyCustomFormatWithCurrencyMap : currencyCustomFormatWithoutCurrencyMap;
                var code = (null === options || void 0 === options ? void 0 : options.code) || storeCurrency || defaultCurrency;
                if (!map.get(code)) parseCurrencyConfig(code);
                var _ref5 = map.get(code) || {}, format = _ref5.format, origin = _ref5.origin;
                var precision = null !== (_options$digits = null === options || void 0 === options ? void 0 : options.digits) && void 0 !== _options$digits ? _options$digits : defaultCurrencyDigit;
                var finalFormat = isStandardFormatMapKeyType(format) ? format : defaultFormatStr;
                var _parseNumberByFormatS2 = parseNumberByFormatStr(value / Math.pow(10, precision), finalFormat, precision), integer = _parseNumberByFormatS2.integer, fraction = _parseNumberByFormatS2.fraction, decimalSymbol = _parseNumberByFormatS2.decimalSymbol;
                var str;
                if (decimalSymbol && precision) str = "".concat(integer).concat(decimalSymbol).concat(null !== fraction && void 0 !== fraction ? fraction : ""); else str = integer;
                var res = combineFormatPart(str, origin);
                return res;
            };
            var format = function(value, options) {
                return commonFormat(value, true, options);
            };
            var formatWithoutCurrency = function(value, options) {
                return commonFormat(value, false, options);
            };
            var formatMoneyWithoutCurrency = function(value, options) {
                var map = currencyCustomFormatWithoutCurrencyMap;
                var code = (null === options || void 0 === options ? void 0 : options.code) || storeCurrency || defaultCurrency;
                if (!map.get(code)) parseCurrencyConfig(code);
                var _ref6 = map.get(code) || {}, format = _ref6.format;
                var finalFormat = isStandardFormatMapKeyType(format) ? format : defaultFormatStr;
                var precision = defaultCurrencyDigit;
                var _parseNumberByFormatS3 = parseNumberByFormatStr(value / Math.pow(10, precision), finalFormat, precision), integer = _parseNumberByFormatS3.integer, fraction = _parseNumberByFormatS3.fraction, decimalSymbol = _parseNumberByFormatS3.decimalSymbol;
                var str;
                if (decimalSymbol && precision) str = "".concat(integer).concat(decimalSymbol).concat(null !== fraction && void 0 !== fraction ? fraction : ""); else str = integer;
                return str;
            };
            var getDigitsByCode = function(code) {
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                return currencyPrecisionsMap.get(code);
            };
            var getSymbolByCode = function(code) {
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                return currencySymbolsMap.get(code);
            };
            var getSymbolOrderByCode = function() {
                var code = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : defaultCurrency;
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                return currencySymbolOrderMap.get(code);
            };
            var formatNumber = function(value) {
                var decimalDigits = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultCurrencyDigit;
                var v = "number" !== typeof value ? Number(value) : value;
                return v / Math.pow(10, decimalDigits);
            };
            var unformatNumber = function(value) {
                var decimalDigits = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultCurrencyDigit;
                var v = lodash_round(("number" !== typeof value ? Number(value) : value) * Math.pow(10, decimalDigits), 0);
                return v;
            };
            var formatCurrency = function(value) {
                return formatNumber(value, defaultCurrencyDigit);
            };
            var unformatCurrency = function(value) {
                return unformatNumber(value, defaultCurrencyDigit);
            };
            var formatPercent = function(value) {
                return formatNumber(value, defaultPresentDigit);
            };
            var unformatPercent = function(value) {
                return unformatNumber(value, defaultPresentDigit);
            };
            var getDecimalSymbolByCode = function(code) {
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                return currencyDecimalSymbolsMap.get(code);
            };
            var getGroupSymbolByCode = function(code) {
                if (!currencyCustomFormatWithoutCurrencyMap.get(code)) parseCurrencyConfig(code);
                return currencyGroupSymbolsMap.get(code);
            };
            var getConvertPrice = function(value, options) {
                var _ref7 = options || {}, from = _ref7.from, code = _ref7.code, to = _ref7.to, rates = _ref7.currencyRates;
                var fromCurrencyCode = from || storeCurrency || defaultCurrency;
                if (!currencyCustomFormatWithoutCurrencyMap.get(fromCurrencyCode)) parseCurrencyConfig(fromCurrencyCode);
                var toCurrencyCode = to || code || defaultToCurrency;
                if (!currencyCustomFormatWithoutCurrencyMap.get(toCurrencyCode)) parseCurrencyConfig(toCurrencyCode);
                var fromPrice = formatNumber(value);
                var toPrice = convertCalc(fromPrice, fromCurrencyCode, toCurrencyCode, rates || currencyRates);
                var formatPartsResult = getFormatParts(toPrice, {
                    code: toCurrencyCode
                });
                var convertResult = {
                    group: "",
                    integer: "",
                    decimal: "",
                    fraction: "",
                    symbolOrder: "",
                    currencySymbol: ""
                };
                convertResult.symbolOrder = getSymbolOrderByCode(toCurrencyCode);
                formatPartsResult.forEach((function(item) {
                    var value = item.value || "";
                    if ("currency" === (null === item || void 0 === item ? void 0 : item.type)) convertResult.currencySymbol = value;
                    if ("integer" === (null === item || void 0 === item ? void 0 : item.type)) if (convertResult.integer) convertResult.integer = "".concat(convertResult.integer).concat(convertResult.group || "").concat(value); else convertResult.integer = value;
                    if ("group" === (null === item || void 0 === item ? void 0 : item.type)) convertResult.group = value;
                    if ("decimal" === (null === item || void 0 === item ? void 0 : item.type)) convertResult.decimal = value;
                    if ("fraction" === (null === item || void 0 === item ? void 0 : item.type)) convertResult.fraction = value;
                }));
                return convertResult;
            };
            exports.convertCalc = convertCalc;
            exports.convertFormat = convertFormat;
            exports.convertFormatWithoutCurrency = convertFormatWithoutCurrency;
            exports.covertCalc = convertCalc;
            exports.defaultCurrency = defaultCurrency;
            exports.defaultCurrencyDigit = defaultCurrencyDigit;
            exports.defaultPresentDigit = defaultPresentDigit;
            exports.format = format;
            exports.formatCurrency = formatCurrency;
            exports.formatMoneyWithoutCurrency = formatMoneyWithoutCurrency;
            exports.formatNumber = formatNumber;
            exports.formatPercent = formatPercent;
            exports.formatWithoutCurrency = formatWithoutCurrency;
            exports.getConvertPrice = getConvertPrice;
            exports.getCurrencyConfig = getCurrencyConfig;
            exports.getCurrencyRates = getCurrencyRates;
            exports.getDecimalSymbolByCode = getDecimalSymbolByCode;
            exports.getDefaultToCurrency = getDefaultToCurrency;
            exports.getDigitsByCode = getDigitsByCode;
            exports.getFormatParts = getFormatParts;
            exports.getGroupSymbolByCode = getGroupSymbolByCode;
            exports.getStoreCurrency = getStoreCurrency;
            exports.getSymbolByCode = getSymbolByCode;
            exports.getSymbolOrderByCode = getSymbolOrderByCode;
            exports.parseCustomFormat = parseCustomFormat;
            exports.parseCustomFormatWithCurrency = parseCustomFormatWithCurrency;
            exports.parseCustomFormatWithoutCurrency = parseCustomFormatWithoutCurrency;
            exports.parseDefaultFormat = parseDefaultFormat;
            exports.parseDefaultFormatWithCurrency = parseDefaultFormatWithCurrency;
            exports.parseDefaultFormatWithoutCurrency = parseDefaultFormatWithoutCurrency;
            exports.setCurrencyConfig = setCurrencyConfig;
            exports.setCurrencyRates = setCurrencyRates;
            exports.setDefaultToCurrency = setDefaultToCurrency;
            exports.setStoreCurrency = setStoreCurrency;
            exports.unformatCurrency = unformatCurrency;
            exports.unformatNumber = unformatNumber;
            exports.unformatPercent = unformatPercent;
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        }));
    },
    "./node_modules/dayjs/dayjs.min.js": function(module) {
        !function(t, e) {
            true ? module.exports = e() : 0;
        }(0, (function() {
            "use strict";
            var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }, m = function(t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
            }, g = {
                s: m,
                z: function(t) {
                    var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
                    return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
                },
                m: function t(e, n) {
                    if (e.date() < n.date()) return -t(n, e);
                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f);
                    return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                },
                p: function(t) {
                    return {
                        M: f,
                        y: c,
                        w: o,
                        d: a,
                        D: d,
                        h: u,
                        m: s,
                        s: i,
                        ms: r,
                        Q: h
                    }[t] || String(t || "").toLowerCase().replace(/s$/, "");
                },
                u: function(t) {
                    return void 0 === t;
                }
            }, v = "en", D = {};
            D[v] = M;
            var p = function(t) {
                return t instanceof _;
            }, S = function t(e, n, r) {
                var i;
                if (!e) return v;
                if ("string" == typeof e) {
                    var s = e.toLowerCase();
                    D[s] && (i = s), n && (D[s] = n, i = s);
                    var u = e.split("-");
                    if (!i && u.length > 1) return t(u[0]);
                } else {
                    var a = e.name;
                    D[a] = e, i = a;
                }
                return !r && i && (v = i), i || !r && v;
            }, w = function(t, e) {
                if (p(t)) return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t, n.args = arguments, new _(n);
            }, O = g;
            O.l = S, O.i = p, O.w = function(t, e) {
                return w(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                });
            };
            var _ = function() {
                function M(t) {
                    this.$L = S(t.locale, null, !0), this.parse(t);
                }
                var m = M.prototype;
                return m.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date, n = t.utc;
                        if (null === e) return new Date(NaN);
                        if (O.u(e)) return new Date;
                        if (e instanceof Date) return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var r = e.match(l);
                            if (r) {
                                var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                            }
                        }
                        return new Date(e);
                    }(t), this.$x = t.x || {}, this.init();
                }, m.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), 
                    this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
                }, m.$utils = function() {
                    return O;
                }, m.isValid = function() {
                    return !(this.$d.toString() === $);
                }, m.isSame = function(t, e) {
                    var n = w(t);
                    return this.startOf(e) <= n && n <= this.endOf(e);
                }, m.isAfter = function(t, e) {
                    return w(t) < this.startOf(e);
                }, m.isBefore = function(t, e) {
                    return this.endOf(e) < w(t);
                }, m.$g = function(t, e, n) {
                    return O.u(t) ? this[e] : this.set(n, t);
                }, m.unix = function() {
                    return Math.floor(this.valueOf() / 1e3);
                }, m.valueOf = function() {
                    return this.$d.getTime();
                }, m.startOf = function(t, e) {
                    var n = this, r = !!O.u(e) || e, h = O.p(t), $ = function(t, e) {
                        var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                        return r ? i : i.endOf(a);
                    }, l = function(t, e) {
                        return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [ 0, 0, 0, 0 ] : [ 23, 59, 59, 999 ]).slice(e)), n);
                    }, y = this.$W, M = this.$M, m = this.$D, g = "set" + (this.$u ? "UTC" : "");
                    switch (h) {
                      case c:
                        return r ? $(1, 0) : $(31, 11);

                      case f:
                        return r ? $(1, M) : $(0, M + 1);

                      case o:
                        var v = this.$locale().weekStart || 0, D = (y < v ? y + 7 : y) - v;
                        return $(r ? m - D : m + (6 - D), M);

                      case a:
                      case d:
                        return l(g + "Hours", 0);

                      case u:
                        return l(g + "Minutes", 1);

                      case s:
                        return l(g + "Seconds", 2);

                      case i:
                        return l(g + "Milliseconds", 3);

                      default:
                        return this.clone();
                    }
                }, m.endOf = function(t) {
                    return this.startOf(t, !1);
                }, m.$set = function(t, e) {
                    var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), $ = (n = {}, n[a] = h + "Date", 
                    n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", 
                    n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o], l = o === a ? this.$D + (e - this.$W) : e;
                    if (o === f || o === c) {
                        var y = this.clone().set(d, 1);
                        y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
                    } else $ && this.$d[$](l);
                    return this.init(), this;
                }, m.set = function(t, e) {
                    return this.clone().$set(t, e);
                }, m.get = function(t) {
                    return this[O.p(t)]();
                }, m.add = function(r, h) {
                    var d, $ = this;
                    r = Number(r);
                    var l = O.p(h), y = function(t) {
                        var e = w($);
                        return O.w(e.date(e.date() + Math.round(t * r)), $);
                    };
                    if (l === f) return this.set(f, this.$M + r);
                    if (l === c) return this.set(c, this.$y + r);
                    if (l === a) return y(1);
                    if (l === o) return y(7);
                    var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1, m = this.$d.getTime() + r * M;
                    return O.w(m, this);
                }, m.subtract = function(t, e) {
                    return this.add(-1 * t, e);
                }, m.format = function(t) {
                    var e = this, n = this.$locale();
                    if (!this.isValid()) return n.invalidDate || $;
                    var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, f = n.months, h = function(t, n, i, s) {
                        return t && (t[n] || t(e, r)) || i[n].slice(0, s);
                    }, c = function(t) {
                        return O.s(s % 12 || 12, t, "0");
                    }, d = n.meridiem || function(t, e, n) {
                        var r = t < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r;
                    }, l = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: a + 1,
                        MM: O.s(a + 1, 2, "0"),
                        MMM: h(n.monthsShort, a, f, 3),
                        MMMM: h(f, a),
                        D: this.$D,
                        DD: O.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: h(n.weekdaysMin, this.$W, o, 2),
                        ddd: h(n.weekdaysShort, this.$W, o, 3),
                        dddd: o[this.$W],
                        H: String(s),
                        HH: O.s(s, 2, "0"),
                        h: c(1),
                        hh: c(2),
                        a: d(s, u, !0),
                        A: d(s, u, !1),
                        m: String(u),
                        mm: O.s(u, 2, "0"),
                        s: String(this.$s),
                        ss: O.s(this.$s, 2, "0"),
                        SSS: O.s(this.$ms, 3, "0"),
                        Z: i
                    };
                    return r.replace(y, (function(t, e) {
                        return e || l[t] || i.replace(":", "");
                    }));
                }, m.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }, m.diff = function(r, d, $) {
                    var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, g = this - M, v = O.m(this, M);
                    return v = (l = {}, l[c] = v / 12, l[f] = v, l[h] = v / 3, l[o] = (g - m) / 6048e5, 
                    l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? v : O.a(v);
                }, m.daysInMonth = function() {
                    return this.endOf(f).$D;
                }, m.$locale = function() {
                    return D[this.$L];
                }, m.locale = function(t, e) {
                    if (!t) return this.$L;
                    var n = this.clone(), r = S(t, e, !0);
                    return r && (n.$L = r), n;
                }, m.clone = function() {
                    return O.w(this.$d, this);
                }, m.toDate = function() {
                    return new Date(this.valueOf());
                }, m.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null;
                }, m.toISOString = function() {
                    return this.$d.toISOString();
                }, m.toString = function() {
                    return this.$d.toUTCString();
                }, M;
            }(), T = _.prototype;
            return w.prototype = T, [ [ "$ms", r ], [ "$s", i ], [ "$m", s ], [ "$H", u ], [ "$W", a ], [ "$M", f ], [ "$y", c ], [ "$D", d ] ].forEach((function(t) {
                T[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1]);
                };
            })), w.extend = function(t, e) {
                return t.$i || (t(e, _, w), t.$i = !0), w;
            }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
                return w(1e3 * t);
            }, w.en = D[v], w.Ls = D, w.p = {}, w;
        }));
    },
    "./node_modules/dayjs/plugin/duration.js": function(module) {
        !function(t, s) {
            true ? module.exports = s() : 0;
        }(0, (function() {
            "use strict";
            var t, s, n = 1e3, i = 6e4, e = 36e5, r = 864e5, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, h = 2592e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, d = {
                years: u,
                months: h,
                days: r,
                hours: e,
                minutes: i,
                seconds: n,
                milliseconds: 1,
                weeks: 6048e5
            }, c = function(t) {
                return t instanceof p;
            }, f = function(t, s, n) {
                return new p(t, n, s.$l);
            }, m = function(t) {
                return s.p(t) + "s";
            }, l = function(t) {
                return t < 0;
            }, $ = function(t) {
                return l(t) ? Math.ceil(t) : Math.floor(t);
            }, y = function(t) {
                return Math.abs(t);
            }, g = function(t, s) {
                return t ? l(t) ? {
                    negative: !0,
                    format: "" + y(t) + s
                } : {
                    negative: !1,
                    format: "" + t + s
                } : {
                    negative: !1,
                    format: ""
                };
            }, p = function() {
                function l(t, s, n) {
                    var i = this;
                    if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), 
                    s) return f(t * d[m(s)], this);
                    if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
                    if ("object" == typeof t) return Object.keys(t).forEach((function(s) {
                        i.$d[m(s)] = t[s];
                    })), this.calMilliseconds(), this;
                    if ("string" == typeof t) {
                        var e = t.match(a);
                        if (e) {
                            var r = e.slice(2).map((function(t) {
                                return null != t ? Number(t) : 0;
                            }));
                            return this.$d.years = r[0], this.$d.months = r[1], this.$d.weeks = r[2], this.$d.days = r[3], 
                            this.$d.hours = r[4], this.$d.minutes = r[5], this.$d.seconds = r[6], this.calMilliseconds(), 
                            this;
                        }
                    }
                    return this;
                }
                var y = l.prototype;
                return y.calMilliseconds = function() {
                    var t = this;
                    this.$ms = Object.keys(this.$d).reduce((function(s, n) {
                        return s + (t.$d[n] || 0) * d[n];
                    }), 0);
                }, y.parseFromMilliseconds = function() {
                    var t = this.$ms;
                    this.$d.years = $(t / u), t %= u, this.$d.months = $(t / h), t %= h, this.$d.days = $(t / r), 
                    t %= r, this.$d.hours = $(t / e), t %= e, this.$d.minutes = $(t / i), t %= i, this.$d.seconds = $(t / n), 
                    t %= n, this.$d.milliseconds = t;
                }, y.toISOString = function() {
                    var t = g(this.$d.years, "Y"), s = g(this.$d.months, "M"), n = +this.$d.days || 0;
                    this.$d.weeks && (n += 7 * this.$d.weeks);
                    var i = g(n, "D"), e = g(this.$d.hours, "H"), r = g(this.$d.minutes, "M"), o = this.$d.seconds || 0;
                    this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
                    var u = g(o, "S"), h = t.negative || s.negative || i.negative || e.negative || r.negative || u.negative, a = e.format || r.format || u.format ? "T" : "", d = (h ? "-" : "") + "P" + t.format + s.format + i.format + a + e.format + r.format + u.format;
                    return "P" === d || "-P" === d ? "P0D" : d;
                }, y.toJSON = function() {
                    return this.toISOString();
                }, y.format = function(t) {
                    var n = t || "YYYY-MM-DDTHH:mm:ss", i = {
                        Y: this.$d.years,
                        YY: s.s(this.$d.years, 2, "0"),
                        YYYY: s.s(this.$d.years, 4, "0"),
                        M: this.$d.months,
                        MM: s.s(this.$d.months, 2, "0"),
                        D: this.$d.days,
                        DD: s.s(this.$d.days, 2, "0"),
                        H: this.$d.hours,
                        HH: s.s(this.$d.hours, 2, "0"),
                        m: this.$d.minutes,
                        mm: s.s(this.$d.minutes, 2, "0"),
                        s: this.$d.seconds,
                        ss: s.s(this.$d.seconds, 2, "0"),
                        SSS: s.s(this.$d.milliseconds, 3, "0")
                    };
                    return n.replace(o, (function(t, s) {
                        return s || String(i[t]);
                    }));
                }, y.as = function(t) {
                    return this.$ms / d[m(t)];
                }, y.get = function(t) {
                    var s = this.$ms, n = m(t);
                    return "milliseconds" === n ? s %= 1e3 : s = "weeks" === n ? $(s / d[n]) : this.$d[n], 
                    0 === s ? 0 : s;
                }, y.add = function(t, s, n) {
                    var i;
                    return i = s ? t * d[m(s)] : c(t) ? t.$ms : f(t, this).$ms, f(this.$ms + i * (n ? -1 : 1), this);
                }, y.subtract = function(t, s) {
                    return this.add(t, s, !0);
                }, y.locale = function(t) {
                    var s = this.clone();
                    return s.$l = t, s;
                }, y.clone = function() {
                    return f(this.$ms, this);
                }, y.humanize = function(s) {
                    return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s);
                }, y.milliseconds = function() {
                    return this.get("milliseconds");
                }, y.asMilliseconds = function() {
                    return this.as("milliseconds");
                }, y.seconds = function() {
                    return this.get("seconds");
                }, y.asSeconds = function() {
                    return this.as("seconds");
                }, y.minutes = function() {
                    return this.get("minutes");
                }, y.asMinutes = function() {
                    return this.as("minutes");
                }, y.hours = function() {
                    return this.get("hours");
                }, y.asHours = function() {
                    return this.as("hours");
                }, y.days = function() {
                    return this.get("days");
                }, y.asDays = function() {
                    return this.as("days");
                }, y.weeks = function() {
                    return this.get("weeks");
                }, y.asWeeks = function() {
                    return this.as("weeks");
                }, y.months = function() {
                    return this.get("months");
                }, y.asMonths = function() {
                    return this.as("months");
                }, y.years = function() {
                    return this.get("years");
                }, y.asYears = function() {
                    return this.as("years");
                }, l;
            }();
            return function(n, i, e) {
                t = e, s = e().$utils(), e.duration = function(t, s) {
                    var n = e.locale();
                    return f(t, {
                        $l: n
                    }, s);
                }, e.isDuration = c;
                var r = i.prototype.add, o = i.prototype.subtract;
                i.prototype.add = function(t, s) {
                    return c(t) && (t = t.asMilliseconds()), r.bind(this)(t, s);
                }, i.prototype.subtract = function(t, s) {
                    return c(t) && (t = t.asMilliseconds()), o.bind(this)(t, s);
                };
            };
        }));
    },
    "./src/assets/cart/script/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var js_cookie = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
        var js_cookie_default = __webpack_require__.n(js_cookie);
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var sentryReport = __webpack_require__("../shared/browser/utils/logger/sentryReport.js");
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var CurrencyConvert = __webpack_require__("../shared/browser/utils/newCurrency/CurrencyConvert.js");
        var tradeReport_const = __webpack_require__("../shared/browser/utils/tradeReport/const.js");
        var topDrawer = __webpack_require__("../shared/browser/components/hbs/shared/components/topDrawer/index.js");
        var topDrawer_const = __webpack_require__("../shared/browser/components/hbs/shared/components/topDrawer/const.js");
        var api_cart = __webpack_require__("./node_modules/@sl/cart/lib/api-cart/index.js");
        var store = __webpack_require__("./node_modules/@sl/cart/lib/utils/store.js");
        var _window;
        var CartEventBusEnum = {
            UPDATE: "cart:update"
        };
        var CouponEventEnum = {
            CHANGE: "coupon:change",
            UPDATE: "coupon:update"
        };
        var cartFirstLoad = window.SL_State.rootState.cartInfo;
        store["default"].add({
            cartInfo: cartFirstLoad
        });
        var SL_EventBus = null === (_window = window) || void 0 === _window ? void 0 : _window.SL_EventBus;
        SL_EventBus.on(CartEventBusEnum.UPDATE, (function(data) {
            store["default"].add({
                cartInfo: data
            });
        }));
        SL_EventBus.on("InitInterceptorAjaxAddToCart", (function() {
            window.ApiCartAddV2 = api_cart.ApiCart.ApiCartAddV2;
            api_cart.ApiCart.initInterceptorAjaxAddToCart();
        }));
        var lodash_escape = __webpack_require__("./node_modules/lodash/escape.js");
        var escape_default = __webpack_require__.n(lodash_escape);
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var index_umd = __webpack_require__("./node_modules/@yy/sl-pod-preview-image/lib/index.umd.js");
        var index_umd_default = __webpack_require__.n(index_umd);
        var syntax_patch = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        const nc = syntax_patch.nullishCoalescingOperator;
        function setWrapper(value, warper) {
            return warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${nc(warper.style, "")}"> ${value} </span>` : value;
        }
        const TypeEnum = {
            NONE: -1,
            AMOUNT: 0,
            NUMBER: 1
        };
        function formatBenefitNum(promotionBenefit) {
            const {type, amount} = promotionBenefit;
            if (void 0 === amount) return "";
            const num = Number(amount) || 0;
            if (type === TypeEnum.NUMBER) return num;
            if (type === TypeEnum.AMOUNT) return `<span data-amount="${num}">${(0, CurrencyConvert.convertFormat)(num)}</span>`;
            return "";
        }
        const getI18nKey = (step, configs, type) => {
            if (1 === step) return type === TypeEnum.AMOUNT ? "sales.gift.not_meet_amount_tip" : "sales.gift.not_meet_quantity_tip";
            if (2 === step) return configs.hasSelectedGiftQuantity <= 0 || type === TypeEnum.NONE ? "sales.gift.select_gift_tip" : type === TypeEnum.AMOUNT ? "sales.gift.spend_more_money_get_more_tip" : "sales.gift.spend_more_quantity_get_more_tip";
            if (3 === step) return configs.hasSelectedGiftQuantity <= 0 ? "sales.gift.select_gift_tip" : "sales.gift.got_all_gifts_tip";
            return "";
        };
        const getGiftConfig = (promotion, configs = {}) => {
            const {promotionBenefitList = []} = nc(promotion, {});
            if (promotionBenefitList.length) {
                let current;
                let next;
                let step;
                if (!(0, syntax_patch.get)(promotionBenefitList, [ 1 ])) if (promotionBenefitList[0].hit) {
                    step = 3;
                    current = (0, syntax_patch.get)(promotionBenefitList, [ 0 ]);
                } else {
                    step = 1;
                    next = (0, syntax_patch.get)(promotionBenefitList, [ 0 ]);
                } else if (promotionBenefitList[1].hit) {
                    step = 3;
                    current = (0, syntax_patch.get)(promotionBenefitList, [ 1 ]);
                } else {
                    step = 2;
                    current = (0, syntax_patch.get)(promotionBenefitList, [ 0 ]);
                    next = (0, syntax_patch.get)(promotionBenefitList, [ 1 ]);
                }
                const {warper} = configs;
                return {
                    path: getI18nKey(step, configs, (0, syntax_patch.get)(current, "type") || (0, syntax_patch.get)(next, "type")),
                    params: {
                        saved: setWrapper((0, syntax_patch.get)(configs, "hasSelectedGiftQuantity"), {
                            ...warper,
                            class: `sales__promotionReminder-saved ${nc((0, syntax_patch.get)(warper, "class"), "")}`
                        }),
                        willSave: setWrapper((0, syntax_patch.get)(configs, "hasSelectedGiftQuantity") < 1 && current ? (0, 
                        syntax_patch.get)(current, "benefitCount") : (0, syntax_patch.get)(next, "benefitCount"), {
                            ...warper,
                            class: `sales__promotionReminder-willSave custom-sale-color ${nc((0, syntax_patch.get)(warper, "class"), "")}`
                        }),
                        threshold: setWrapper(formatBenefitNum(next || current), {
                            ...warper,
                            class: `sales__promotionReminder-threshold custom-sale-color ${nc((0, syntax_patch.get)(warper, "class"), "")}`
                        })
                    },
                    step
                };
            }
            return {
                path: "",
                params: {},
                step: 0
            };
        };
        const getGiftContent = (promotion, rootWrapper, options = {}) => {
            const isPCMainCart = rootWrapper.hasClass("main") && rootWrapper.hasClass("is-pc");
            const config = getGiftConfig(promotion, options);
            const promotionTemplate = (0, i18n.t)(config.path, {
                saved: config.params.saved,
                willSave: config.params.willSave,
                threshold: config.params.threshold,
                br: config.params.br
            });
            return `\n  <div class="cart-sku-list-promotion-module salesPluginGift__promotion" data-widget-scope="gift" data-activityseq="${promotion.activitySeq}" data-promotionseq="${promotion.promotionSeq}">\n    <div>\n      ${promotionTemplate}\n    </div>\n    <span class="cart-sku-list-promotion-module-arrow">\n      ${isPCMainCart ? (0, 
            i18n.t)("sales.gift.select") : ""}\n      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">\n        <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round" />\n      </svg>\n    </span>\n  </div>\n  `;
        };
        const gift = getGiftContent;
        var getPromotionReminder = __webpack_require__("../shared/browser/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js");
        const getPromotionBarContent = (promotion, rootWrapper) => {
            const isPCMainCart = rootWrapper.hasClass("main") && rootWrapper.hasClass("is-pc");
            const config = (0, getPromotionReminder["default"])(promotion, {
                lineBreak: !isPCMainCart
            });
            const needJump = 3 !== (0, syntax_patch.get)(config, "step");
            const promotionTemplate = (0, i18n.t)(config.path, {
                ...config.params || {}
            });
            const {extMap = {}} = config.params;
            if (needJump) return `\n      <div class="cart-sku-list-promotion-module-can-jump">\n        <a href="/activity/${promotion.activitySeq}?type=pool${"true" === extMap.meetThreshold ? "&query_product_type=2" : ""}" class="cart-sku-list-promotion-module-can-jump-wrapper">\n          <div>\n            ${promotionTemplate}\n          </div>\n          <div class="cart-sku-list-promotion-module-can-jump-arrow" style="font-size:0;">\n            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">\n              <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round" />\n            </svg>\n          </div>\n        </a>\n      </div>\n    `;
            return `\n    <div class="cart-sku-list-promotion-module">\n      <span>\n        ${promotionTemplate}\n      </span>\n    </div>\n  `;
        };
        const reminder = getPromotionBarContent;
        const PLUGIN_GIFT_TYPE = 7;
        function getOptions(activity) {
            let options = {};
            if ((0, syntax_patch.get)(activity, "promotion.benefitType") === PLUGIN_GIFT_TYPE) options = {
                hasSelectedGiftQuantity: (0, syntax_patch.get_func)((0, syntax_patch.get_func)(activity, "itemList.filter").exec((item => {
                    if (!(0, syntax_patch.get)(item, "bizExtInfo")) return false;
                    try {
                        const bizExtInfo = JSON.parse((0, syntax_patch.get)(item, "bizExtInfo"));
                        if ((0, syntax_patch.get)(bizExtInfo, "gift")) return true;
                    } catch (e) {
                        return false;
                    }
                    return false;
                })), "reduce").exec(((sum, sku) => {
                    const res = sum + (0, syntax_patch.get)(sku, "num");
                    return res;
                }), 0)
            };
            return options;
        }
        const getPromotionOption = getOptions;
        const getContent = (promotion, rootWrapper, activeItemData) => {
            if (7 === promotion.benefitType) {
                if (Array.isArray(promotion.promotionBenefitList) && "true" !== (0, syntax_patch.get)(promotion.promotionBenefitList || {}, "[0].extMap.hideGiftBanner")) return gift(promotion, rootWrapper, getPromotionOption(activeItemData));
                return "";
            }
            return reminder(promotion, rootWrapper);
        };
        const js = (...args) => {
            const content = getContent(...args);
            return `\n    <div class="cart-sku-list-promotion">\n      ${content}\n    </div>\n  `;
        };
        var logger = __webpack_require__("./src/assets/shared/logger/index.js");
        var utils = __webpack_require__("./src/assets/commons/utils/index.js");
        function isS3FileUrl(url) {
            return /\.cloudfront\./.test(url) || /https:\/\/img.myshopline.com/.test(url) || /https:\/\/img-preview.myshopline.com/.test(url);
        }
        function imgUrl(url, options) {
            const {width, scale} = options;
            if (!width) return url;
            if (!isS3FileUrl(url)) return url;
            let paramWidth = width;
            if ("number" === typeof scale && scale > 1) paramWidth = width * scale;
            const clipper = `_${paramWidth || ""}x`;
            const slice = url.split("/");
            const filename = slice.pop() || "";
            const dirname = slice.join("/");
            const lastDotIndex = filename.lastIndexOf(".");
            if (-1 === lastDotIndex) return `${dirname}/${filename}${clipper}`;
            return `${dirname}/${filename.slice(0, lastDotIndex)}${clipper}${filename.slice(lastDotIndex)}`;
        }
        var newCurrency = __webpack_require__("../shared/browser/utils/newCurrency/index.js");
        function convertPrice(price) {
            const {symbolOrder, currencySymbol, integer, fraction} = newCurrency["default"].getConvertPrice(price);
            let formattedPriceStr = "";
            if ("prefix" === symbolOrder) formattedPriceStr = `${currencySymbol}${integer}<sup class="body6">${fraction}</sup>`; else formattedPriceStr = `${integer}<sup class="body6">${fraction}</sup><span>${currencySymbol}</span>`;
            return {
                symbolOrder,
                currencySymbol,
                integer,
                fraction,
                formattedPriceStr
            };
        }
        var service = __webpack_require__("./src/assets/cart/script/service/cart/service.js");
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var cart = __webpack_require__("./src/assets/cart/script/service/cart/index.js");
        class CartUtil {
            static removeItem(skuList) {
                return CartUtil.getCartService().removeSkuList(skuList);
            }
            static changeItemNum(spuId, skuId, num, groupId, productSource) {
                CartUtil.getCartService().editSku({
                    spuId,
                    skuId,
                    num,
                    groupId,
                    productSource
                });
            }
            static getCartService() {
                if (!CartUtil.service) CartUtil.service = cart["default"].takeCartService();
                return CartUtil.service;
            }
        }
        const cart_util = CartUtil;
        var hdReport = __webpack_require__("../shared/browser/utils/tradeReport/hdReport.js");
        const {formatNumber} = newCurrency["default"];
        class CartHdReport extends hdReport.TradeHdReport {
            getCartPageId() {
                if ("/cart" === window.location.pathname) return 60006254;
                return 60006262;
            }
            removeRp(params) {
                try {
                    const cid = this.getCartPageId();
                    if (Array.isArray(params)) this.event({
                        page: "cart",
                        event_name: "removeitem",
                        event_category: "cart",
                        products: null === params || void 0 === params ? void 0 : params.map((item => ({
                            product_id: item.spuId,
                            variantion_id: item.skuId,
                            quantity: item.num,
                            price: formatNumber(item.price),
                            product_name: item.name,
                            product_type: "product"
                        })))
                    }, cid); else this.event({
                        page: "cart",
                        event_category: "cart",
                        event_name: "removeitem",
                        product_type: "product",
                        product_id: params.spuId.toString(),
                        variantion_id: params.skuId,
                        quantity: params.num,
                        price: formatNumber(params.price).toString(),
                        product_name: params.name
                    }, cid);
                } catch (e) {
                    console.error(e);
                }
            }
            rpCart(data) {
                const cid = this.getCartPageId();
                this.event(data, cid);
            }
            updateItem({spuId, skuId, quantity, price, update_quantity}) {
                this.rpCart({
                    page: "cart",
                    event_name: "click_component",
                    custom_component: [ "product_edit" ]
                });
                this.rpCart({
                    event_name: "updateitem",
                    product_type: "product",
                    product_id: spuId,
                    variantion_id: skuId,
                    quantity,
                    price: formatNumber(price).toString(),
                    update_quantity: null === update_quantity || void 0 === update_quantity ? void 0 : update_quantity.toString()
                });
            }
        }
        const cartHdReport = new CartHdReport;
        const report_cartHdReport = cartHdReport;
        var tradeReport = __webpack_require__("../shared/browser/utils/tradeReport/index.js");
        var report_const = __webpack_require__("../shared/browser/utils/report/const.js");
        const cartReport_logger = logger["default"].pipeOwner(`${sentryReport.Owner.Cart} report/cartReport.js`);
        const cartToken = js_cookie_default().get("t_cart");
        class CartReport extends tradeReport.TradeReport {
            setRemoveItemParams(params, extraItems) {
                cartReport_logger.info(`normal 主站购物车 数据上报 设置移除商品params setRemoveItemParams`, {
                    data: {
                        cartToken,
                        params,
                        extraItems
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                const res = {
                    productItems: [],
                    value: 0
                };
                if (Array.isArray(params)) params.forEach((({skuId, num, price, name, skuAttr, itemNo}) => {
                    res.value += price * num;
                    res.productItems.push({
                        skuId: itemNo || skuId,
                        quantity: num,
                        price: null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(price || 0).toString(),
                        name,
                        variant: (skuAttr || []).join(",")
                    });
                })); else {
                    const product = {
                        skuId: (null === params || void 0 === params ? void 0 : params.itemNo) || (null === params || void 0 === params ? void 0 : params.skuId),
                        quantity: null === params || void 0 === params ? void 0 : params.num,
                        price: null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(params.price || 0).toString(),
                        name: null === params || void 0 === params ? void 0 : params.name,
                        variant: ((null === params || void 0 === params ? void 0 : params.skuAttr) || []).join(",")
                    };
                    res.value += params.price * ((null === params || void 0 === params ? void 0 : params.num) || 0);
                    res.productItems.push(product);
                }
                if (Array.isArray(extraItems)) extraItems.forEach((({skuId, num, price, name, skuAttr, itemNo}) => {
                    res.value += price * num;
                    res.productItems.push({
                        skuId: itemNo || skuId,
                        quantity: num,
                        price: null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(price || 0).toString(),
                        name,
                        variant: (skuAttr || []).join(",")
                    });
                }));
                res.value = null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(res.value || 0).toString();
                cartReport_logger.info(`normal 主站购物车 数据上报 设置移除商品params setRemoveItemParams`, {
                    data: {
                        cartToken,
                        params,
                        extraItems,
                        integratedParams: res
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Success
                });
                return res;
            }
            selectContent({skuId, name, price, skuAttrs, itemNo, ...rest}) {
                const value = {
                    ...rest,
                    skuId: itemNo || skuId,
                    name,
                    price: null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(price || 0).toString(),
                    variant: skuAttrs,
                    itemNo
                };
                const data = {
                    actionType: report_const.ClickType.SelectContent,
                    value
                };
                cartReport_logger.info(`normal 主站购物车 数据上报 选中商品 selectContent`, {
                    data: {
                        cartToken,
                        integratedParams: data
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                this.touch(data);
            }
            removeItem(params, extraItems) {
                try {
                    const data = {
                        actionType: report_const.ClickType.RemoveFromCart,
                        value: this.setRemoveItemParams(params, extraItems)
                    };
                    cartReport_logger.info(`normal 主站购物车 数据上报 移除商品 removeItem`, {
                        data: {
                            cartToken,
                            params,
                            extraItems,
                            integratedParams: data
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    this.touch(data);
                } catch (e) {
                    cartReport_logger.info(`normal 主站购物车 数据上报 移除商品 上报报错 removeItem`, {
                        data: {
                            cartToken,
                            params,
                            extraItems,
                            error: e
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    console.error(e);
                }
            }
            viewCart(cartInfo) {
                cartReport_logger.info(`mini 主站购物车 数据上报 viewCart`, {
                    data: {
                        cartToken,
                        cartInfo
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                if (!cartInfo.activeItems) return;
                const params = {
                    amount: null === newCurrency["default"] || void 0 === newCurrency["default"] ? void 0 : newCurrency["default"].formatCurrency(cartInfo.realAmount || 0),
                    items: []
                };
                const {activeItems} = cartInfo;
                activeItems.map((activeItem => {
                    params.items = [ ...params.items, ...activeItem.itemList ];
                    return activeItem;
                }));
                cartReport_logger.info(`mini 主站购物车 数据上报 viewCart`, {
                    data: {
                        cartToken,
                        reportInfo: {
                            ...params,
                            actionType: report_const.ClickType.ViewCart
                        }
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                this.reportViewCart({
                    params,
                    actionType: report_const.ClickType.ViewCart
                });
            }
        }
        const cartReport_cartReport = new CartReport;
        const report_cartReport = cartReport_cartReport;
        var isMobile = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        function utils_throttle(limit, callback) {
            let waiting = false;
            return function(...args) {
                if (!waiting) {
                    callback.apply(this, args);
                    waiting = true;
                    setTimeout((function() {
                        waiting = false;
                    }), limit);
                }
            };
        }
        const helper_setStickyContAnimate = ({viewportSelector, containerSelector}) => {
            const inInput = state_selector.SL_State.get("cartInInputMode");
            if (!utils["default"].helper.isUnderViewport(__SL_$__(viewportSelector).get(0)) && !inInput) __SL_$__(containerSelector).slideDown(300).attr("isOpen", true); else __SL_$__(containerSelector).slideUp(200).removeAttr("isOpen");
        };
        const helper_listenElementMutation = (target, callback, options = {
            childList: true
        }) => {
            const fixedObserver = new MutationObserver(callback);
            fixedObserver.observe(target, options);
        };
        const listenElementIntersection = (target, callback) => {
            const intersectionObserver = new IntersectionObserver((function(entries) {
                callback(entries[0].intersectionRatio > 0);
            }));
            intersectionObserver.observe(target);
            return intersectionObserver;
        };
        var _tradeSettleConfig$pa, _tradeSettleConfig$pa2, _tradeSettleConfig$af, _tradeSettleConfig$af2;
        const tradeSettleConfig = state_selector.SL_State.get("tradeSettleConfig");
        const sticky_cart_logger = logger["default"].pipeOwner(`${sentryReport.Owner.Cart} biz/sticky-cart/index.js`);
        const sticky_cart_cartToken = js_cookie_default().get("t_cart");
        (null === tradeSettleConfig || void 0 === tradeSettleConfig ? void 0 : null === (_tradeSettleConfig$pa = tradeSettleConfig.paymentSecurity) || void 0 === _tradeSettleConfig$pa ? void 0 : null === (_tradeSettleConfig$pa2 = _tradeSettleConfig$pa.displayPosition) || void 0 === _tradeSettleConfig$pa2 ? void 0 : _tradeSettleConfig$pa2.includes("CART")) || null === tradeSettleConfig || void 0 === tradeSettleConfig || null === (_tradeSettleConfig$af = tradeSettleConfig.afterSaleGuarantee) || void 0 === _tradeSettleConfig$af || null === (_tradeSettleConfig$af2 = _tradeSettleConfig$af.displayPosition) || void 0 === _tradeSettleConfig$af2 || _tradeSettleConfig$af2.includes("CART");
        const initMainCartSticky = () => {
            if ((0, isMobile["default"])()) {
                sticky_cart_logger.info(`main 主站购物车 initMainCartSticky`, {
                    data: {
                        cartToken: sticky_cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
                __SL_$__(window).on("scroll", utils_throttle(20, (() => {
                    helper_setStickyContAnimate({
                        viewportSelector: ".trade_cart .main_cart",
                        containerSelector: ".cart__stick_container"
                    });
                })));
                helper_listenElementMutation(__SL_$__(".trade-cart-sku-list").get(0), (() => {
                    setTimeout((() => {
                        helper_setStickyContAnimate({
                            viewportSelector: ".trade_cart .main_cart",
                            containerSelector: ".cart__stick_container"
                        });
                    }), 300);
                }));
                setTimeout((() => {
                    helper_setStickyContAnimate({
                        viewportSelector: ".trade_cart .main_cart",
                        containerSelector: ".cart__stick_container"
                    });
                }), 300);
            }
        };
        let intersectionObserver;
        const handleHeaderVisibleToggle = isVisible => {
            if (!isVisible) __SL_$__(".mini-cart__drawer-slot").css("position", "fixed").css("top", 0); else __SL_$__(".mini-cart__drawer-slot").css("position", "absolute").css("top", "");
        };
        const listenHeaderIntersection = () => {
            const isHeaderSticky = __SL_$__("#stage-header").attr("data-sticky");
            if ("true" !== isHeaderSticky) intersectionObserver = listenElementIntersection(__SL_$__(".header__main").get(0), handleHeaderVisibleToggle);
        };
        const listenEditorSectionChange = () => {
            __SL_$__(document).on("shopline:section:load", (() => {
                var _intersectionObserver;
                null === (_intersectionObserver = intersectionObserver) || void 0 === _intersectionObserver ? void 0 : _intersectionObserver.disconnect();
                listenHeaderIntersection();
            }));
        };
        const listenHeaderSectionChange = () => {
            setTimeout((() => {
                listenHeaderIntersection();
                listenEditorSectionChange();
            }), 0);
        };
        const toggleVisibility = (cartType, visibility) => {
            sticky_cart_logger.info(`normal 主站购物车 切换展示 toggleVisibility`, {
                data: {
                    cartToken: sticky_cart_cartToken
                },
                action: sentryReport.Action.openCart,
                status: logger.Status.Start
            });
            if (!(0, isMobile["default"])()) return;
            const selector = "main" === cartType ? ".cart__stick_container" : ".miniCart__stick_container";
            const isOpen = __SL_$__(selector).attr("isOpen");
            if (!isOpen) return;
            const visible = "boolean" === typeof visibility ? visibility : "block" !== __SL_$__(selector).css("display");
            __SL_$__(selector)[visible ? "show" : "hide"]();
            sticky_cart_logger.info(`normal 主站购物车 切换展示 toggleVisibility`, {
                data: {
                    cartToken: sticky_cart_cartToken,
                    visible: visible ? "show" : "hide"
                },
                action: sentryReport.Action.openCart,
                status: logger.Status.Success
            });
        };
        function observer(data, action = {}) {
            return new Proxy(data, {
                get(target, property) {
                    if ("function" === typeof action.get) action.get(property, target[property]);
                    return target[property];
                },
                set(target, property, value) {
                    target[property] = value;
                    if ("function" === typeof action.set) {
                        const proxyValue = action.set(property, value);
                        target[property] = proxyValue;
                    }
                    return true;
                }
            });
        }
        const model_observer = observer;
        var stockType = __webpack_require__("./src/assets/cart/script/constant/stockType.js");
        const toastTypeEnum = {
            stockLimit: "item.item_left",
            activeStockLimit: "discount_price.buy_limit"
        };
        function tActiveStockLimitWithMaxPurchaseReasonCode(code, stock) {
            const tParams = {
                stock
            };
            switch (code) {
              case "LIMITED_ACTIVE_OVER":
                return (0, i18n.t)("cart.discount_price.buy_limit2", tParams);

              case "LIMITED_ACTIVE_SKU_OVER":
                return (0, i18n.t)("cart.discount_price.buy_limit3", tParams);

              default:
                return (0, i18n.t)("cart.discount_price.buy_limit1", tParams);
            }
        }
        function skuPromotionVerify(key, nextValue) {
            const ctx = this.stepper;
            if (!ctx) return nextValue;
            if (0 === ctx.limitedType || !stockType.cartLimitedEnum.ACTIVE.includes(ctx.maxPurchaseReasonCode)) return nextValue;
            const getMaxStock = () => ctx.maxPurchaseNum > 0 ? ctx.maxPurchaseNum : 1;
            if ("max" === key) return getMaxStock();
            return nextValue;
        }
        const model_skuPromotionVerify = skuPromotionVerify;
        var helpers = __webpack_require__("./src/assets/cart/script/domain/model/helpers.js");
        var cartItem = __webpack_require__("./src/assets/cart/script/domain/model/cartItem.js");
        const sku_stepper_logger = logger["default"].pipeOwner(`${sentryReport.Owner.Cart} components/sku-stepper`);
        const sku_stepper_cartToken = js_cookie_default().get("t_cart");
        const getCursorPosition = function(element) {
            var _document;
            let cursorPos = 0;
            if (null !== (_document = document) && void 0 !== _document && _document.selection) {
                const selectRange = document.selection.createRange();
                selectRange.moveStart("character", -element.value.length);
                cursorPos = selectRange.text.length;
            } else if (null !== element && void 0 !== element && element.selectionStart || 0 === parseInt(null === element || void 0 === element ? void 0 : element.selectionStart, 10)) cursorPos = null === element || void 0 === element ? void 0 : element.selectionStart;
            return cursorPos;
        };
        const getParentId = function(ele) {
            let t = ele;
            while (t && t.length) {
                if (t.hasClass("trade-cart-sku-item")) return t.attr("id");
                t = t.parent();
            }
        };
        const sku_stepper_toast = new toast["default"]({
            content: "content",
            className: "test"
        });
        class SkuStepper {
            constructor({root, name, price, normalSkuNum, totalSkuNum, disabled, spuId, skuId, priceType, stockType, skuAttr, setRendering, isRendering, cartType, setPreFocusedInputEle, setNeedForceFocus, groupId, productSource, maxPurchaseNum, maxPurchaseTotalNum, maxPurchaseReasonCode, indexStr, activeItems, itemNo}) {
                this.root = root;
                this.cartType = cartType;
                this.setPreFocusedInputEle = setPreFocusedInputEle;
                this.setNeedForceFocus = setNeedForceFocus;
                const stepperValue = {
                    normalSkuNum,
                    name,
                    price,
                    value: totalSkuNum,
                    disabled,
                    spuId,
                    skuId,
                    priceType,
                    stockType,
                    skuAttr,
                    setRendering,
                    isRendering,
                    groupId,
                    productSource,
                    maxPurchaseNum,
                    maxPurchaseTotalNum,
                    maxPurchaseReasonCode,
                    indexStr,
                    itemNo
                };
                this.activeItems = activeItems;
                this.stepper = model_observer(stepperValue, {
                    set: model_skuPromotionVerify.bind(this)
                });
                this.beforeValue = totalSkuNum;
            }
            init() {
                sku_stepper_logger.info(`normal 主站购物车 skuStepper init`, {
                    data: {
                        cartToken: sku_stepper_cartToken,
                        stepperInfo: this.stepper
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                this.$stepper = this.root.find(".cart-stepper");
                this.$minusButton = this.$stepper.find(".cart-stepper-minus");
                this.$plusButton = this.$stepper.find(".cart-stepper-plus");
                this.$input = this.$stepper.find(".cart-stepper-input");
                this.initEventListener();
                this.render();
                __SL_$__(window).on("unload", (() => {
                    this.unbind();
                }));
                sku_stepper_logger.info(`normal 主站购物车 skuStepper init`, {
                    data: {
                        cartToken: sku_stepper_cartToken,
                        stepperInfo: this.stepper
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
            }
            unbind() {
                var _this$$minusButton, _this$$plusButton, _this$$input;
                null === (_this$$minusButton = this.$minusButton) || void 0 === _this$$minusButton ? void 0 : _this$$minusButton.off();
                null === (_this$$plusButton = this.$plusButton) || void 0 === _this$$plusButton ? void 0 : _this$$plusButton.off();
                null === (_this$$input = this.$input) || void 0 === _this$$input ? void 0 : _this$$input.off();
            }
            changeItemNumReport() {
                try {
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    report_cartHdReport.updateItem({
                        spuId: this.stepper.spuId,
                        skuId: this.stepper.skuId,
                        quantity: this.beforeValue,
                        price: this.stepper.price,
                        update_quantity: this.stepper.value
                    });
                    if (0 === this.stepper.value) {
                        const params = {
                            spuId: this.stepper.spuId,
                            skuId: this.stepper.skuId,
                            quantity: this.beforeValue,
                            num: this.beforeValue,
                            name: this.stepper.name,
                            price: this.stepper.price,
                            skuAttr: this.stepper.skuAttr,
                            itemNo: this.stepper.itemNo,
                            groupId: this.stepper.groupId
                        };
                        const products = helpers["default"].reducer(cart["default"].takeCartService().cartItemList).next(cartItem["default"].findProductWithGroupIdAndSkuId, cartItem["default"].getGroupId(params), cartItem["default"].getSkuId(params))() || params;
                        const subProducts = helpers["default"].reducer(cart["default"].takeCartService().cartItemList).next(cartItem["default"].filterProductInGroup, cartItem["default"].getGroupId(products)).next(cartItem["default"].filterProductsWithParentSkuId, cartItem["default"].getSkuId(products))() || [];
                        report_cartReport.removeItem(products, subProducts);
                        report_cartHdReport.removeRp(params);
                    }
                    this.beforeValue = this.stepper.value;
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                } catch (e) {
                    this.beforeValue = this.stepper.value;
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper changeItemNumReport`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        error: e
                    });
                    console.error(e);
                }
            }
            changeItemNum() {
                sku_stepper_logger.info(`normal 主站购物车 skuStepper changeItemNum`, {
                    data: {
                        cartToken: sku_stepper_cartToken,
                        stepperInfo: this.stepper
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                this.stepper.setRendering(true);
                this.changeItemNumReport();
                cart_util.changeItemNum(this.stepper.spuId, this.stepper.skuId, this.stepper.value, this.stepper.groupId, this.stepper.productSource);
                sku_stepper_logger.info(`normal 主站购物车 skuStepper changeItemNum`, {
                    data: {
                        cartToken: sku_stepper_cartToken,
                        stepperInfo: this.stepper
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Success
                });
            }
            limitToastNum(num) {
                if (num > 0) return num;
                return "0";
            }
            toastLimit() {
                const {maxPurchaseReasonCode, maxPurchaseTotalNum} = this.stepper;
                if (stockType.cartLimitedEnum.NORMAL_ITEM_MAX_NUM.includes(maxPurchaseReasonCode)) {
                    sku_stepper_toast.open((0, i18n.t)(`cart.item.add_limit2`));
                    this.render();
                } else if (stockType.cartLimitedEnum.ACTIVE_LIMITED.includes(maxPurchaseReasonCode)) sku_stepper_toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum))); else if (stockType.cartLimitedEnum.NORMAL_STOCK_OVER.includes(maxPurchaseReasonCode)) sku_stepper_toast.open((0, 
                i18n.t)(`cart.${toastTypeEnum.stockLimit}`, {
                    stock: this.limitToastNum(maxPurchaseTotalNum)
                })); else if (stockType.cartLimitedEnum.ACTIVE_STOCK_OVER.includes(maxPurchaseReasonCode)) sku_stepper_toast.open((0, 
                i18n.t)(`cart.${toastTypeEnum.stockLimit}`, {
                    stock: this.limitToastNum(maxPurchaseTotalNum)
                }));
            }
            initEventListener() {
                var _this$$minusButton2;
                null === (_this$$minusButton2 = this.$minusButton) || void 0 === _this$$minusButton2 ? void 0 : _this$$minusButton2.on("click", (() => {
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper minusBtnClick`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    this.setNeedForceFocus(false);
                    const {stepper, groupTotalDiscountValue} = this;
                    if (this.stepper.isRendering()) return;
                    const {maxPurchaseReasonCode, maxPurchaseTotalNum, maxPurchaseNum, value} = stepper;
                    const stepValue = Math.max(value - groupTotalDiscountValue, 1);
                    if (stepValue > 0) {
                        if (stepValue > maxPurchaseNum) {
                            if (stockType.cartLimitedEnum.ACTIVE.includes(maxPurchaseReasonCode)) sku_stepper_toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(void 0, this.limitToastNum(maxPurchaseTotalNum))); else sku_stepper_toast.open((0, 
                            i18n.t)(`cart.${toastTypeEnum.stockLimit}`, {
                                stock: this.limitToastNum(maxPurchaseTotalNum)
                            }));
                            if (1 === value) this.stepper.value = 0; else if (maxPurchaseNum > 0) this.stepper.value = maxPurchaseNum; else this.stepper.value = 1;
                            this.render();
                        } else this.stepper.value -= 1;
                        this.changeItemNum();
                        sku_stepper_logger.info(`normal 主站购物车 skuStepper minusBtnClick`, {
                            data: {
                                cartToken: sku_stepper_cartToken,
                                stepperInfo: this.stepper
                            },
                            action: sentryReport.Action.EditCart,
                            status: logger.Status.Success
                        });
                    }
                }));
                this.$plusButton.on("click", (() => {
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper plusBtnClick`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    this.setNeedForceFocus(false);
                    if (this.stepper.isRendering()) return;
                    const {groupTotalDiscountValue, stepper} = this;
                    const {value, maxPurchaseNum} = stepper;
                    const stepValue = Math.max(value - groupTotalDiscountValue, 1);
                    if (stepValue < maxPurchaseNum) {
                        this.stepper.value += 1;
                        this.changeItemNum();
                    } else if (stepValue === maxPurchaseNum) this.toastLimit(); else {
                        this.toastLimit();
                        if (stepValue > maxPurchaseNum) {
                            this.stepper.value = maxPurchaseNum > 0 ? maxPurchaseNum + groupTotalDiscountValue : 1;
                            this.render();
                            this.changeItemNum();
                        } else this.render();
                    }
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper plusBtnClick`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                }));
                this.$input.on("input", (e => {
                    var _e$target, _e$target$value;
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper input`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    const input = null === (_e$target = e.target) || void 0 === _e$target ? void 0 : null === (_e$target$value = _e$target.value) || void 0 === _e$target$value ? void 0 : _e$target$value.match(/^\d*/);
                    let inputVal = "";
                    if ("" !== (null === input || void 0 === input ? void 0 : input[0])) {
                        var _input$, _input$2;
                        const value = e.target.value ? Number(null === (_input$ = input[0]) || void 0 === _input$ ? void 0 : _input$.slice(0, Math.min(null === (_input$2 = input[0]) || void 0 === _input$2 ? void 0 : _input$2.length, 5))) : e.target.value;
                        this.stepper.value = value;
                        inputVal = value;
                    }
                    this.setValue(inputVal);
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper input`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper,
                            inputVal
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                }));
                this.$input.on("focus", (() => {
                    this.setNeedForceFocus(true);
                    this.stepper.preValue = this.stepper.value;
                    toggleVisibility(this.cartType, false);
                    state_selector.SL_State.set("cartInInputMode", true);
                    this.setPreFocusedInputEle({
                        id: getParentId(this.$input)
                    });
                }));
                this.$input.on("click", (() => {
                    this.setPreFocusedInputEle({
                        pos: getCursorPosition(this.$input.get(0))
                    });
                }));
                this.$input.on("blur", (e => {
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper inputBlur`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper,
                            currentStepper: e
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    this.setNeedForceFocus(true);
                    toggleVisibility(this.cartType, true);
                    state_selector.SL_State.set("cartInInputMode", false);
                    const value = Number(e.target.value);
                    if ("" === e.target.value) {
                        this.stepper.value = 1;
                        this.setValue(this.stepper.value);
                        this.render();
                        this.changeItemNum();
                    } else {
                        this.stepper.value = value;
                        const {groupTotalDiscountValue} = this;
                        const {maxPurchaseTotalNum, maxPurchaseNum, maxPurchaseReasonCode} = this.stepper;
                        let totalValue = value + groupTotalDiscountValue;
                        const overFlag = totalValue > maxPurchaseNum;
                        if (overFlag) if (stockType.cartLimitedEnum.NORMAL_ITEM_MAX_NUM.includes(maxPurchaseReasonCode)) sku_stepper_toast.open((0, 
                        i18n.t)(`cart.item.add_limit2`)); else if (stockType.cartLimitedEnum.ACTIVE_LIMITED.includes(maxPurchaseReasonCode)) sku_stepper_toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum))); else if (stockType.cartLimitedEnum.NORMAL_STOCK_OVER.includes(maxPurchaseReasonCode)) sku_stepper_toast.open((0, 
                        i18n.t)(`cart.${toastTypeEnum.stockLimit}`, {
                            stock: this.limitToastNum(maxPurchaseTotalNum)
                        })); else if (stockType.cartLimitedEnum.ACTIVE_STOCK_OVER.includes(maxPurchaseReasonCode)) sku_stepper_toast.open((0, 
                        i18n.t)(`cart.${toastTypeEnum.stockLimit}`, {
                            stock: this.limitToastNum(maxPurchaseTotalNum)
                        })); else sku_stepper_toast.open(tActiveStockLimitWithMaxPurchaseReasonCode(maxPurchaseReasonCode, this.limitToastNum(maxPurchaseTotalNum)));
                        if (this.stepper.preValue !== this.stepper.value || overFlag) {
                            if (overFlag) totalValue = maxPurchaseNum > 0 ? maxPurchaseNum + groupTotalDiscountValue : 1;
                            this.stepper.value = totalValue;
                            this.render();
                            this.changeItemNum();
                        } else this.setValue(this.stepper.preValue);
                    }
                    sku_stepper_logger.info(`normal 主站购物车 skuStepper inputBlur`, {
                        data: {
                            cartToken: sku_stepper_cartToken,
                            stepperInfo: this.stepper,
                            currentStepper: e
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                }));
            }
            getDiscountValue(groupById = true) {
                let discountValue = 0;
                const [findex, index] = this.stepper.indexStr.split("-");
                const otherSameSkuNum = [];
                let currentIndex = 0;
                this.activeItems.forEach(((active, activeIndex) => {
                    otherSameSkuNum.push(...active.itemList);
                    if (activeIndex < Number(findex)) {
                        const {length} = active.itemList;
                        if (0 === activeIndex) currentIndex += length - 1; else currentIndex += length;
                    } else if (activeIndex === Number(findex)) if (0 === activeIndex) currentIndex += Number(index); else currentIndex += Number(index) + 1;
                }));
                const {skuId: stepperSkuId, spuId: stepperSpuId, groupId: stepperGroupId} = this.stepper;
                otherSameSkuNum.forEach(((sku, skuIndex) => {
                    if (skuIndex !== currentIndex) {
                        const {skuId, spuId, groupId, num, parentSkuId} = sku;
                        let sameItem = String(skuId) === String(stepperSkuId) && String(spuId) === String(stepperSpuId) && !parentSkuId;
                        if (groupById) sameItem = sameItem && String(groupId) === String(stepperGroupId);
                        if (sameItem) discountValue += num;
                    }
                }));
                return {
                    discountValue
                };
            }
            get groupTotalDiscountValue() {
                return this.getDiscountValue().discountValue;
            }
            setSingleDisabled(position, disabled) {
                const prefix = ".cart-stepper-";
                if (disabled) this.$stepper.find(`${prefix}${position}`).addClass("disabled"); else this.$stepper.find(`${prefix}${position}`).removeClass("disabled");
            }
            setStepperDisabled() {
                if (this.stepper.disabled) this.$stepper.addClass("disabled"); else this.$stepper.removeClass("disabled");
            }
            setStepperData(obj) {
                this.stepper = {
                    ...this.stepper,
                    ...obj
                };
                this.render();
            }
            setValue(value) {
                this.$stepper.find(".cart-stepper-input").val(value);
            }
            render() {
                const {groupTotalDiscountValue, stepper} = this;
                const {value, maxPurchaseNum} = stepper;
                const stepValue = Math.max(value - groupTotalDiscountValue, 1);
                this.setSingleDisabled("plus", maxPurchaseNum <= stepValue);
                this.setStepperDisabled();
            }
        }
        const sku_stepper = SkuStepper;
        var response = __webpack_require__("./src/assets/cart/script/domain/model/response.js");
        class RemoveButton {
            constructor({root, itemInfo, cartActionHooks}) {
                this.root = root;
                this.itemInfo = itemInfo;
                this.cartActionHooks = cartActionHooks;
            }
            init() {
                this.$removeButton = this.root.find(".trade-cart-sku-item-remove-button");
                this.initEventListener();
                __SL_$__(window).on("unload", (() => {
                    this.unbind();
                }));
            }
            unbind() {
                var _this$$removeButton;
                null === (_this$$removeButton = this.$removeButton) || void 0 === _this$$removeButton ? void 0 : _this$$removeButton.off();
            }
            removeItem() {
                try {
                    const products = helpers["default"].reducer(cart["default"].takeCartService().cartItemList).next(cartItem["default"].findProductWithGroupIdAndSkuId, cartItem["default"].getGroupId(this.itemInfo), cartItem["default"].getSkuId(this.itemInfo))() || this.itemInfo;
                    const subProducts = helpers["default"].reducer(cart["default"].takeCartService().cartItemList).next(cartItem["default"].filterProductInGroup, cartItem["default"].getGroupId(products)).next(cartItem["default"].filterProductsWithParentSkuId, cartItem["default"].getSkuId(products))() || [];
                    report_cartReport.removeItem(products, subProducts);
                    report_cartHdReport.removeRp(products);
                    const {skuId, spuId, groupId, productSource, num} = products || {};
                    const skuInfo = {
                        skuId,
                        spuId,
                        groupId,
                        productSource,
                        num
                    };
                    cart_util.removeItem([ skuInfo ]).then((res => {
                        if (response["default"].isResolved(res)) this.cartActionHooks.skuRemoved.call([ skuId ]);
                    }));
                } catch (e) {
                    console.error(e);
                }
            }
            initEventListener() {
                var _this$$removeButton2;
                null === (_this$$removeButton2 = this.$removeButton) || void 0 === _this$$removeButton2 ? void 0 : _this$$removeButton2.on("click", (() => {
                    this.removeItem();
                }));
            }
        }
        const remove_button = RemoveButton;
        class RemoveAllButton {
            constructor(rootId, inactiveItems, cartActionHooks) {
                this.rootId = rootId;
                this.inactiveItems = inactiveItems;
                this.cartActionHooks = cartActionHooks;
            }
            init() {
                this.$removeAllButton = __SL_$__(this.rootId);
                this.initEventListener();
                __SL_$__(window).on("unload", (() => {
                    this.unbind();
                }));
            }
            unbind() {
                var _this$$removeAllButto;
                null === (_this$$removeAllButto = this.$removeAllButton) || void 0 === _this$$removeAllButto ? void 0 : _this$$removeAllButto.off();
            }
            removeItem() {
                try {
                    report_cartReport.removeItem(this.inactiveItems);
                    report_cartHdReport.removeRp(this.inactiveItems);
                } catch (e) {
                    console.error(e);
                }
                const skuList = this.inactiveItems.map((item => {
                    const {skuId, spuId, groupId, productSource, num} = item || {};
                    return {
                        skuId,
                        spuId,
                        groupId,
                        productSource,
                        num
                    };
                }));
                cart_util.removeItem(skuList).then((res => {
                    if (response["default"].isResolved(res)) this.cartActionHooks.skuRemoved.call(skuList);
                }));
            }
            initEventListener() {
                var _this$$removeAllButto2;
                null === (_this$$removeAllButto2 = this.$removeAllButton) || void 0 === _this$$removeAllButto2 ? void 0 : _this$$removeAllButto2.on("click", (() => {
                    this.removeItem();
                }));
            }
        }
        const remove_all_button = RemoveAllButton;
        const errCanceled = "context done with cancellation";
        const errTimeout = "context done with timeout";
        const errDeadline = "context done with deadline";
        const errNotNullableValuer = "valuer is not nullable";
        const constant = {
            errCanceled,
            errTimeout,
            errDeadline,
            errNotNullableValuer
        };
        function newValuer(value) {
            let getter;
            if (0 === arguments.length) getter = () => {
                throw new Error(constant.errNotNullableValuer);
            }; else getter = () => value;
            return createValuer(getter);
        }
        function newValuerWithGetter(getter) {
            if (0 === arguments.length) getter = () => {
                throw new Error(constant.errNotNullableValuer);
            };
            return createValuer(getter);
        }
        const valuer = {
            newValuer,
            newValuerWithGetter
        };
        function createValuer(getter) {
            return Object.defineProperty({}, "defaultGetter", {
                value: getter,
                writable: false,
                configurable: false
            });
        }
        const cartItemList_valuer = valuer.newValuerWithGetter((() => null));
        function withCartItemList(ctx) {
            return ctx.value(cartItemList_valuer);
        }
        const valuer_cartItemList = {
            valuer: cartItemList_valuer,
            withCartItemList
        };
        const cartService_valuer = valuer.newValuerWithGetter((() => cart["default"].takeCartService()));
        function withCartService(ctx) {
            return ctx.value(cartService_valuer);
        }
        const valuer_cartService = {
            valuer: cartService_valuer,
            withCartService
        };
        var dist = __webpack_require__("./node_modules/@funnyecho/hamon/dist/index.js");
        async function resolveAfterDuration(dur) {
            if (dur <= 0) return Promise.resolve();
            return new Promise((resolve => {
                setTimeout((() => {
                    resolve();
                }), dur);
            }));
        }
        const zombie = new Promise((() => {}));
        async function zombiePromise() {
            return zombie;
        }
        function promiseResolvable() {
            let resolver;
            let resolved = false;
            const promise = new Promise((res => {
                if (resolved) res(); else resolver = res;
            }));
            const resolveFunc = () => {
                resolved = true;
                if ("function" === typeof resolver) resolver();
            };
            return [ promise, resolveFunc ];
        }
        const Millisecond = 1;
        const Second = 1e3 * Millisecond;
        const Minute = 60 * Second;
        const Hour = 60 * Minute;
        const Day = 24 * Hour;
        const Week = 7 * Day;
        class Time {
            constructor(v) {
                this.v = v;
            }
            get timestamp() {
                return this.v;
            }
            add(d) {
                return new Time(this.v + d);
            }
            sub(d) {
                return new Time(this.v - d);
            }
            duration(t) {
                return this.v - t.timestamp;
            }
        }
        function time(v) {
            return new Time(v);
        }
        function now() {
            return time(Date.now());
        }
        function later(dur) {
            return now().add(dur);
        }
        function former(dur) {
            return now().sub(dur);
        }
        const utils_time = {
            time,
            now,
            later,
            former,
            Millisecond,
            Second,
            Minute,
            Hour,
            Day,
            Week
        };
        const _background = newEmptyCtx();
        const _todo = newEmptyCtx();
        function background() {
            return forkParentCtx(_background);
        }
        function todo() {
            return forkParentCtx(_todo);
        }
        function withValue(parent, valuer, value) {
            return newValueCtx(parent, valuer, value);
        }
        function withCancel(parent) {
            return newCancelCtx(parent);
        }
        function withTimeout(parent, timeout) {
            return newCancelCtx(newTimeoutCtx(parent, timeout));
        }
        function withDeadline(parent, deadline) {
            return newCancelCtx(newDeadlineCtx(parent, deadline));
        }
        const context = {
            background,
            todo,
            withValue,
            withCancel,
            withTimeout,
            withDeadline,
            ...constant
        };
        function newEmptyCtx() {
            return {
                deadline() {
                    return null;
                },
                done() {
                    return zombiePromise();
                },
                err() {
                    return null;
                },
                value(cv) {
                    return cv ? cv.defaultGetter() : null;
                }
            };
        }
        function newValueCtx(parent, valuer, value) {
            return {
                deadline() {
                    return parent.deadline();
                },
                done() {
                    return parent.done();
                },
                err() {
                    return parent.err();
                },
                value(cv) {
                    if (valuer === cv) return value;
                    return parent.value(cv);
                }
            };
        }
        function forkParentCtx(parent) {
            if (!parent) parent = _background;
            return {
                deadline() {
                    return parent.deadline();
                },
                done() {
                    return parent.done();
                },
                err() {
                    return parent.err();
                },
                value(cv) {
                    return parent.value(cv);
                }
            };
        }
        function createCancellablePromise() {
            return promiseResolvable();
        }
        function newTimeoutCtx(parent, dur) {
            let error = null;
            const deadline = utils_time.later(dur);
            const timeoutPromise = resolveAfterDuration(dur);
            return {
                deadline() {
                    return deadline;
                },
                done() {
                    return Promise.race([ parent.done().then((() => parent.err())), timeoutPromise.then((() => new Error(constant.errTimeout))) ]).then((err => {
                        error = err;
                    }));
                },
                err() {
                    return error;
                },
                value(cv) {
                    return parent.value(cv);
                }
            };
        }
        function newDeadlineCtx(parent, deadline) {
            let error = null;
            const deadlinePromise = resolveAfterDuration(deadline.duration(utils_time.now()));
            return {
                deadline() {
                    return deadline;
                },
                done() {
                    return Promise.race([ parent.done().then((() => parent.err())), deadlinePromise.then((() => new Error(constant.errDeadline))) ]).then((err => {
                        error = err;
                    }));
                },
                err() {
                    return error;
                },
                value(cv) {
                    return parent.value(cv);
                }
            };
        }
        function newCancelCtx(parent) {
            const [cancelPromise, cancelFunc] = createCancellablePromise();
            let error = null;
            return [ {
                deadline() {
                    return parent.deadline();
                },
                done() {
                    return Promise.race([ parent.done().then((() => parent.err())), cancelPromise.then((() => new Error(constant.errCanceled))) ]).then((err => {
                        error = err;
                    }));
                },
                err() {
                    return error;
                },
                value(cv) {
                    return parent.value(cv);
                }
            }, cancelFunc ];
        }
        const checkoutHooks_valuer = valuer.newValuer();
        function takeCheckoutHooks(ctx) {
            return ctx.value(checkoutHooks_valuer);
        }
        function withCheckoutHooks(ctx, v) {
            return context.withValue(ctx, checkoutHooks_valuer, v || newHooks());
        }
        function newHooks() {
            return {
                checkoutFailed: new dist.SyncHook
            };
        }
        const checkoutHooks = {
            valuer: checkoutHooks_valuer,
            withCheckoutHooks,
            takeCheckoutHooks,
            newHooks
        };
        const cartActionHooks_valuer = valuer.newValuer();
        function takeCartActionHooks(ctx) {
            return ctx.value(cartActionHooks_valuer);
        }
        function withCartActionHooks(ctx, hooks) {
            return context.withValue(ctx, cartActionHooks_valuer, hooks || cartActionHooks_newHooks());
        }
        function cartActionHooks_newHooks() {
            return {
                skuRemoved: new dist.SyncHook
            };
        }
        const cartActionHooks = {
            valuer: cartActionHooks_valuer,
            withCartActionHooks,
            takeCartActionHooks,
            newHooks: cartActionHooks_newHooks
        };
        const script_valuer = {
            cartItemListValuer: valuer_cartItemList,
            cartServiceValuer: valuer_cartService,
            checkoutHooksValuer: checkoutHooks,
            cartActionHooksValuer: cartActionHooks
        };
        var dayjs_min = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        var duration = __webpack_require__("./node_modules/dayjs/plugin/duration.js");
        var duration_default = __webpack_require__.n(duration);
        const genTpl = ({label, value, labelCls, valueCls}) => {
            const containerClasses = [ "flash-sale__bg", "flash-sale__font", "flash-sale__container", "notranslate" ];
            const labelClasses = [];
            const valueClasses = [];
            labelCls && labelClasses.push(labelCls);
            valueCls && valueClasses.push(valueCls);
            return `\n    <span class="${containerClasses.join(" ")}">\n      <span class="${labelClasses.join(" ")}">${label}</span>: <span class="${valueClasses.join(" ")}">${value}</span>\n    </span>\n  `;
        };
        const template = genTpl;
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        dayjs_min_default().extend(duration_default());
        class FlashSale {
            constructor(props) {
                _defineProperty(this, "timer", null);
                this.state = {
                    ...props
                };
            }
            countDown() {
                clearInterval(this.timer);
                this.timer = setInterval((() => {
                    if (this.leftTime.time) this.update();
                }), 1e3);
            }
            update() {
                __SL_$__(`#${this.parentId}`).find(`.cart__count-down--${this.parentId}`).text(this.leftTime.format);
            }
            get now() {
                return Date.now();
            }
            get endTime() {
                const time = Number(this.state.endTime);
                return time;
            }
            get leftTime() {
                const duration = dayjs_min_default().duration(this.endTime - this.now);
                const days = duration.days();
                const hours = duration.hours();
                const minutes = duration.minutes() % 60 < 10 ? `0${duration.minutes() % 60}` : duration.minutes() % 60;
                const seconds = duration.seconds() % 60 < 10 ? `0${duration.seconds() % 60}` : duration.seconds() % 60;
                const dayText = dayValue => dayValue > 1 ? (0, i18n.t)("cart.cart.days") : (0, i18n.t)("cart.cart.day");
                const renderDays = () => days > 0 ? `${days}${dayText(days)} ` : "";
                return duration ? {
                    time: duration,
                    format: `${renderDays()}${hours}:${minutes}:${seconds}`
                } : null;
            }
            getComponent() {
                this.countDown();
                if (!this.leftTime.time) return __SL_$__("<span></span>");
                return template({
                    label: "Flash Sale",
                    value: this.leftTime.format,
                    valueCls: `cart__count-down--${this.parentId}`
                });
            }
            render(parentId) {
                this.parentId = parentId;
                this.component = this.getComponent();
                return this.component;
            }
        }
        const flash_sale = FlashSale;
        class FlashSaleModel {
            renderFlashSale(id, data) {
                const html = new flash_sale(data).render(id);
                return html;
            }
            initFlashSale() {
                const allFlashSaleEle = __SL_$__("[data-flash-sale-item-id]");
                if (!allFlashSaleEle.length) return;
                allFlashSaleEle.map(((_, ele) => {
                    const curEle = __SL_$__(ele);
                    const data = curEle.data("flash-sale-data");
                    return curEle.html(this.renderFlashSale(curEle.attr("data-flash-sale-item-id"), data));
                }));
            }
        }
        const model = new FlashSaleModel;
        const render = {
            staticRender: (id, data) => model.renderFlashSale(id, data),
            initialModel: () => model.initFlashSale()
        };
        class PromotionLimited {
            constructor(props) {
                this.state = {
                    ...props
                };
            }
            shouldRender() {
                const {errorList} = this.state;
                return errorList.length && [ "0111", "0112" ].includes(errorList[0]);
            }
            getComponent() {
                if (!stockType.cartLimitedEnum.ACTIVE.includes(this.state.maxPurchaseReasonCode)) return "";
                const {errorList} = this.state;
                if (!this.shouldRender()) return "";
                const errorText = {
                    "0111": 1,
                    "0112": 2
                };
                return `<div>${(0, i18n.t)(`cart.${toastTypeEnum.activeStockLimit}${errorText[errorList[0]]}`, {
                    stock: this.state.maxPurchaseTotalNum > 0 ? this.state.maxPurchaseTotalNum : "0"
                })}</div>`;
            }
            render() {
                this.component = this.getComponent();
                return this.component;
            }
        }
        const promotion_limited = PromotionLimited;
        class render_FlashSaleModel {
            renderPromotionLimited(id, data) {
                const html = new promotion_limited(data).render(id);
                return html;
            }
            initPromotionLimited() {
                const allFlashSaleEle = __SL_$__("[data-promotion-limited-item-id]");
                if (!allFlashSaleEle.length) return;
                allFlashSaleEle.map(((_, ele) => {
                    const curEle = __SL_$__(ele);
                    const data = curEle.data("promotion-limited-data");
                    return curEle.html(this.renderPromotionLimited(curEle.attr("data-promotion-limited-item-id"), data));
                }));
            }
        }
        const render_model = new render_FlashSaleModel;
        const promotion_limited_render = {
            staticRender: (id, data) => render_model.renderPromotionLimited(id, data),
            initialModel: () => render_model.initPromotionLimited()
        };
        const sku_card_logger = logger["default"].pipeOwner(`${sentryReport.Owner.Cart} components/sku-card`);
        const sku_card_cartToken = js_cookie_default().get("t_cart");
        const setCursorPosition = (originDomEle, pos) => {
            if (document.selection) {
                const sel = originDomEle.createTextRange();
                sel.moveStart("character", pos);
                sel.collapse();
                sel.select();
            } else if (originDomEle) {
                if (originDomEle.selectionStart) originDomEle.selectionStart = pos;
                if (originDomEle.selectionEnd) originDomEle.selectionEnd = pos;
            }
        };
        const useSuperScriptDecimals = state_selector.SL_State.get("theme.settings.superscript_decimals");
        const encodeHTML = function(str) {
            if ("string" === typeof str) return str.replace(/<|&|>/g, (function(matches) {
                return {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;"
                }[matches];
            }));
            return "";
        };
        class SkuCard {
            constructor(ctx, tradeCartType) {
                this.ctx = ctx;
                this.tradeCartType = tradeCartType;
                if ("main" === tradeCartType) this.scrollContent = document.documentElement; else {
                    var _SL_$__;
                    this.scrollContent = null === (_SL_$__ = __SL_$__(".trade_mini_cart .trade_cart_not_empty_wrapper")) || void 0 === _SL_$__ ? void 0 : _SL_$__.get(0);
                }
                this.rootWrapper = __SL_$__(`#${tradeCartType}-trade-cart-sku-list`);
                this.cartData = state_selector.SL_State.get("cartInfo");
                this.loadFailedImgSet = new Set;
                this.preFocusedInputEle = null;
                this.needForceFocus = false;
            }
            init() {
                const {cartData = {}} = this;
                sku_card_logger.info(`normal 主站购物车 SkuCard init`, {
                    data: {
                        cartToken: sku_card_cartToken,
                        cartData
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                this.activeItems = null === cartData || void 0 === cartData ? void 0 : cartData.activeItems;
                this.inactiveItems = null === cartData || void 0 === cartData ? void 0 : cartData.inactiveItems;
                this.preprocessDiscountData();
                this.reset();
                this.listenPlatformChange();
                this.listenCartDataUpdate();
                this.listenCartSkuInfoPreview();
                this.listenSelectContentReport();
                render.initialModel();
                promotion_limited_render.initialModel();
                sku_card_logger.info(`normal 主站购物车 SkuCard init`, {
                    data: {
                        cartToken: sku_card_cartToken,
                        cartData
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
            }
            setPreFocusedInputEle(info) {
                this.preFocusedInputEle = this.preFocusedInputEle || {};
                this.preFocusedInputEle = {
                    ...this.preFocusedInputEle,
                    ...info
                };
            }
            setNeedForceFocus(status) {
                this.needForceFocus = status;
            }
            forceInputFocusIfNecessary() {
                const _that = this;
                if (this.needForceFocus && this.preFocusedInputEle) {
                    const {id, pos} = _that.preFocusedInputEle;
                    const inputEle = __SL_$__(`#${id}`).find(".cart-stepper-input");
                    const originDomEle = inputEle.get(0);
                    inputEle.trigger("focus");
                    setCursorPosition(originDomEle, pos);
                    _that.setNeedForceFocus(false);
                    _that.preFocusedInputEle = null;
                }
            }
            reset(isRerender) {
                const {activeItems, inactiveItems} = this;
                sku_card_logger.info(`normal 主站购物车 SkuCard reset`, {
                    data: {
                        cartToken: sku_card_cartToken,
                        activeItems,
                        inactiveItems
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                this.needUnbindEleList = [];
                this.listenImageLoadEvent();
                null === activeItems || void 0 === activeItems ? void 0 : activeItems.forEach(((activeItem, findex) => {
                    var _activeItem$itemList;
                    null === activeItem || void 0 === activeItem ? void 0 : null === (_activeItem$itemList = activeItem.itemList) || void 0 === _activeItem$itemList ? void 0 : _activeItem$itemList.forEach(((item, index) => {
                        const {skuId, spuId, groupId, uniqueSeq, businessFlag = {}} = item;
                        const {singleAdjustNum, singleDelete} = businessFlag || {};
                        const rootId = `${this.tradeCartType}-card-sku-item-${null !== groupId && void 0 !== groupId ? groupId : ""}-${spuId}-${skuId}-${uniqueSeq}`;
                        const root = __SL_$__(`#${rootId}`);
                        const renderEditBtn = () => {
                            sku_card_logger.info(`normal 主站购物车 SkuCard reset activeItems initStepper/removeBtn`, {
                                data: {
                                    cartToken: sku_card_cartToken,
                                    isRerender,
                                    root,
                                    item,
                                    id: `${findex}-${index}`
                                },
                                action: sentryReport.Action.EditCart,
                                status: logger.Status.Start
                            });
                            if (singleAdjustNum) this.initStepper(root, item, `${findex}-${index}`);
                            if (singleDelete) this.initRemoveButton(root, item);
                            sku_card_logger.info(`normal 主站购物车 SkuCard reset initStepper/removeBtn`, {
                                data: {
                                    cartToken: sku_card_cartToken,
                                    isRerender,
                                    root,
                                    item,
                                    id: `${findex}-${index}`
                                },
                                action: sentryReport.Action.EditCart,
                                status: logger.Status.Success
                            });
                        };
                        if (!isRerender) jQuery(renderEditBtn); else renderEditBtn();
                    }));
                }));
                null === inactiveItems || void 0 === inactiveItems ? void 0 : inactiveItems.forEach((item => {
                    const {skuId, spuId, groupId, uniqueSeq} = item;
                    const rootId = `${this.tradeCartType}-card-sku-item-${null !== groupId && void 0 !== groupId ? groupId : ""}-${spuId}-${skuId}-${uniqueSeq}`;
                    const root = __SL_$__(`#${rootId}`);
                    const renderRemoveBtn = () => {
                        sku_card_logger.info(`normal 主站购物车 SkuCard reset inactiveItems initRemoveBtn`, {
                            data: {
                                cartToken: sku_card_cartToken,
                                activeItems,
                                inactiveItems
                            },
                            action: sentryReport.Action.EditCart,
                            status: logger.Status.Start
                        });
                        this.initRemoveButton(root, item);
                        sku_card_logger.info(`normal 主站购物车 SkuCard reset inactiveItems initRemoveBtn`, {
                            data: {
                                cartToken: sku_card_cartToken,
                                activeItems,
                                inactiveItems
                            },
                            action: sentryReport.Action.EditCart,
                            status: logger.Status.Success
                        });
                    };
                    if (!isRerender) jQuery(renderRemoveBtn); else renderRemoveBtn();
                }));
                const renderClearBtn = () => {
                    sku_card_logger.info(`normal 主站购物车 SkuCard reset inactiveItems initClearBtn`, {
                        data: {
                            cartToken: sku_card_cartToken,
                            inactiveItems
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    this.getDeviceInfo();
                    this.initRemoveAllButton(this.inactiveItems);
                    sku_card_logger.info(`normal 主站购物车 SkuCard reset inactiveItems initClearBtn`, {
                        data: {
                            cartToken: sku_card_cartToken,
                            inactiveItems
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                };
                if (!isRerender) jQuery(renderClearBtn); else renderClearBtn();
                sku_card_logger.info(`normal 主站购物车 SkuCard reset`, {
                    data: {
                        cartToken: sku_card_cartToken,
                        activeItems,
                        inactiveItems
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Success
                });
            }
            getRendering() {
                return this.rendering;
            }
            setRendering(rendering) {
                this.rendering = rendering;
            }
            listenImageLoadEvent() {
                const _that = this;
                this.rootWrapper.find(".trade-cart-sku-item-image-wrapper").each(((index, img) => {
                    this.needUnbindEleList.push(__SL_$__(img));
                    __SL_$__(img).on("error", (function() {
                        __SL_$__(img).parent().children(".trade-cart-sku-item-image-fallback").removeClass("hide");
                        __SL_$__(img).addClass("hide");
                        _that.loadFailedImgSet.add(__SL_$__(img).attr("origin-src"));
                    }));
                }));
            }
            listenCartDataUpdate() {
                sku_card_logger.info(`normal 主站购物车 SkuCard CartDataUpdate`, {
                    data: {
                        cartToken: sku_card_cartToken
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                service["default"].cartEventBus.on(service["default"].CartEventBusEnum.UPDATE, (data => {
                    sku_card_logger.info(`normal 主站购物车 SkuCard CartDataUpdateListener`, {
                        data: {
                            cartToken: sku_card_cartToken,
                            cartInfo: data
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Start
                    });
                    const {scrollTop} = this.scrollContent;
                    this.reRender(data);
                    this.setRendering(false);
                    setTimeout((() => {
                        this.scrollContent.scrollTop = scrollTop;
                    }), 0);
                    sku_card_logger.info(`normal 主站购物车 SkuCard CartDataUpdate`, {
                        data: {
                            cartToken: sku_card_cartToken
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                }));
            }
            listenPlatformChange() {
                utils["default"].helper.listenPlatform((platform => {
                    const cartSkuWrapper = this.rootWrapper;
                    this.preImageWidth = this.imageWidth;
                    if ([ "pc", "pad" ].includes(platform)) {
                        cartSkuWrapper.removeClass("is-mobile");
                        cartSkuWrapper.addClass("is-pc");
                    } else {
                        cartSkuWrapper.removeClass("is-pc");
                        cartSkuWrapper.addClass("is-mobile");
                    }
                    this.getDeviceInfo();
                    if (this.preImageWidth !== this.imageWidth) cartSkuWrapper.find(".trade-cart-sku-item-image-wrapper").each(((index, img) => {
                        __SL_$__(img).prop("src", this.getImageUrl(__SL_$__(img).attr("origin-src")));
                    }));
                }));
            }
            listenSelectContentReport() {
                this.rootWrapper.on("click", ".trade-cart-sku-item-image", (function() {
                    const {productSource, skuId, name, skuAttrs, price, salePrice, itemNo, quantity} = __SL_$__(this).data();
                    if (1 === productSource) report_cartReport.selectContent({
                        skuId,
                        name,
                        quantity,
                        price: parseInt(salePrice, 10) > parseInt(price, 10) ? salePrice : price,
                        skuAttrs,
                        itemNo
                    });
                }));
            }
            searchParentNode(curNode, count) {
                count += 1;
                const parentNode = null === curNode || void 0 === curNode ? void 0 : curNode.parentElement;
                if (Array.from((null === parentNode || void 0 === parentNode ? void 0 : parentNode.classList) || []).includes("trade-cart-sku-item-customization-preview-btn")) return parentNode;
                if (count > 10) return null;
                return this.searchParentNode(parentNode, count);
            }
            listenCartSkuInfoPreview() {
                this.rootWrapper.on("click", (e => {
                    var _e$target;
                    const findCount = 0;
                    if (Array.from(null === (_e$target = e.target) || void 0 === _e$target ? void 0 : _e$target.classList).includes("trade-cart-sku-item-customization-preview-btn")) {
                        var _e$target2, _e$target2$dataset;
                        const urls = JSON.parse(null === e || void 0 === e ? void 0 : null === (_e$target2 = e.target) || void 0 === _e$target2 ? void 0 : null === (_e$target2$dataset = _e$target2.dataset) || void 0 === _e$target2$dataset ? void 0 : _e$target2$dataset.previewList) || [];
                        if (null !== urls && void 0 !== urls && urls.length) index_umd_default()({
                            urls
                        });
                    } else {
                        const parentNode = this.searchParentNode(e.target, findCount);
                        if (parentNode) {
                            var _parentNode$dataset;
                            const urls = JSON.parse(null === parentNode || void 0 === parentNode ? void 0 : null === (_parentNode$dataset = parentNode.dataset) || void 0 === _parentNode$dataset ? void 0 : _parentNode$dataset.previewList) || [];
                            if (null !== urls && void 0 !== urls && urls.length) index_umd_default()({
                                urls
                            });
                        }
                    }
                }));
            }
            preprocessDiscountData() {
                var _this$activeItems;
                this.skuNumMap = {};
                null === (_this$activeItems = this.activeItems) || void 0 === _this$activeItems ? void 0 : _this$activeItems.forEach((activeItems => {
                    var _activeItems$itemList;
                    null === activeItems || void 0 === activeItems ? void 0 : null === (_activeItems$itemList = activeItems.itemList) || void 0 === _activeItems$itemList ? void 0 : _activeItems$itemList.forEach((item => {
                        const {spuId, skuId, groupId, num} = item;
                        const key = `${groupId}_${spuId}_${skuId}`;
                        this.skuNumMap[key] = this.skuNumMap[key] || 0;
                        this.skuNumMap[key] += num;
                    }));
                }));
            }
            getDeviceInfo() {
                const skuCardListEle = this.rootWrapper;
                const className = [];
                className.push(skuCardListEle.hasClass("main") ? "main" : "sidebar");
                className.push(skuCardListEle.hasClass("is-pc") ? "is-pc" : "is-mobile");
                this.wrapperBaseClassName = className;
                this.updateImageWidth();
            }
            updateImageWidth() {
                if (this.wrapperBaseClassName.includes("main") && this.wrapperBaseClassName.includes("is-pc")) this.imageWidth = 150; else this.imageWidth = 100;
            }
            getImageWidth() {
                return this.imageWidth;
            }
            getImageUrl(src) {
                return imgUrl(src, {
                    width: this.getImageWidth(),
                    scale: 2
                });
            }
            getCardItemAttrs(item) {
                let str = "";
                const properties = (item.properties || []).filter((i => i.show)) || [];
                str = `<div class="trade-cart-sku-item-info-wrapper">\n    ${this.getItemSkuAttr(item.skuAttributes)}\n    ${properties.length ? this.getItemSkuProperties(item.properties) : ""}\n    ${this.getItemSkuCustomTips(item.customProductTips)}<div class="slot-cart slot-cart-item-info" data-slot-cart-item-info></div></div>`;
                return str;
            }
            getItemSkuAttr(skuAttr) {
                const skuContent = [];
                if (skuAttr && skuAttr.length) skuAttr.forEach((data => {
                    skuContent.push(`\n        <div class="trade-cart-sku-item-info-spec body4">\n        <div class="trade-cart-sku-item-info-spec-key">${encodeHTML(data.attributeName)}:</div>\n        <div class="trade-cart-sku-item-info-spec-value">${encodeHTML(data.attributeValue)}</div>\n        </div>`);
                }));
                return skuContent.join("\n");
            }
            getItemSkuProperties(skuProperties) {
                const skuContent = [];
                if (skuProperties.length) skuProperties.forEach((data => {
                    const addonBefore = `<div class="trade-cart-sku-item-info-spec body3">\n        <div class="trade-cart-sku-item-info-spec-key">${encodeHTML(data.name)}:</div>\n        `;
                    let content = ``;
                    if ("text" === data.type) content = `<div class="trade-cart-sku-item-info-spec-value">${data.value}</div>`; else if ("picture" === data.type) content = `<div class="trade-cart-sku-item-info-spec-value trade-cart-sku-item-customization trade-cart-sku-item-customization-preview-btn" data-preview-list=${JSON.stringify(data.urls)}>${(0, 
                    i18n.t)("cart.cart.custom_preview")}</div>`; else if ("link" === data.type) content = `<div class="trade-cart-sku-item-info-spec-value trade-cart-sku-item-customization trade-cart-sku-item-customization-look-btn">\n                        <a class="body3" href='${data.urls ? data.urls[0] : ""}' target="_blank">${(0, 
                    i18n.t)("cart.cart.click_to_view")}</a></div>`;
                    const addonAfter = `\n        </div>`;
                    skuContent.push(`${addonBefore}${content}${addonAfter}`);
                }));
                return skuContent.join("\n");
            }
            getItemSkuCustomTips(customProductTips) {
                const tipsContent = [];
                if (customProductTips && customProductTips.length) customProductTips.forEach((data => {
                    tipsContent.push(`\n        <div class="trade-cart-sku-item-info-customTip notranslate">${encodeHTML(data)}</div>`);
                }));
                return tipsContent.join("\n");
            }
            getStepper(count, indexStr) {
                return `\n      <span class="cart-stepper">\n          <span class="cart-stepper-minus">\n              <span class="cart-stepper-button">\n                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">\n                  <path d="M9 5H1" stroke-linecap="round" />\n                </svg>\n              </span>\n          </span>\n          <input class="cart-stepper-input body4 ${indexStr}" type="text" value=${count}>\n          <span class="cart-stepper-plus">\n              <span class="cart-stepper-button">\n                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">\n                  <path d="M9 5H1" stroke-linecap="round" />\n                  <path d="M5 1L5 9" stroke-linecap="round" />\n                </svg>\n              </span>\n          </span>\n      </span>\n    `;
            }
            getInfoLeft(data, isInactive, indexStr) {
                var _data$businessFlag;
                if (data.businessFlag && false === (null === (_data$businessFlag = data.businessFlag) || void 0 === _data$businessFlag ? void 0 : _data$businessFlag.singleAdjustNum) || 0 === data.maxPurchaseTotalNum && stockType.cartLimitedEnum.NORMAL_STOCK_OVER.includes(data.maxPurchaseReasonCode) || isInactive) return `<div class="trade-cart-sku-item-info-sku-number body3">x<span>${data.num}</span></div>`;
                return `<div class="trade-cart-sku-item-info-left-stepper">${this.getStepper(data.num, indexStr)}</div>`;
            }
            getRemoveButton(data) {
                var _data$businessFlag2;
                return !data.businessFlag || data.businessFlag && null !== (_data$businessFlag2 = data.businessFlag) && void 0 !== _data$businessFlag2 && _data$businessFlag2.singleDelete ? `<div class="trade-cart-sku-item-remove"><button class="trade-cart-sku-item-remove-button body3 btn-link">${(0, 
                i18n.t)("cart.cart.remove")}</button></div>` : "";
            }
            getPriceInfo(data) {
                const isShowScribingPrice = parseInt(data.promotionAmount, 10) > 0 && parseInt(data.productPrice, 10) > parseInt(data.price, 10);
                if (useSuperScriptDecimals) {
                    const {formattedPriceStr: productPriceFormattedPriceStr} = convertPrice(data.productPrice);
                    const {formattedPriceStr: priceFormattedPriceStr} = convertPrice(data.price);
                    if (isShowScribingPrice) return `<span class="trade-cart-sku-item-info-amount-through notranslate body5" data-amount=${data.productPrice}>${productPriceFormattedPriceStr}</span><span class="trade-cart-sku-item-real-price notranslate body2 text_bold trade-cart-sku-item-info-amount-sale-price" data-amount=${data.price}><span>${priceFormattedPriceStr}></span>  ${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
                    return `<span class="trade-cart-sku-item-real-price notranslate body2 text_bold" data-amount=${data.price}><span>${priceFormattedPriceStr}></span>${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
                }
                if (isShowScribingPrice) return `<span class="trade-cart-sku-item-info-amount-through notranslate" data-amount=${data.productPrice}>${(0, 
                CurrencyConvert.convertFormat)(data.productPrice)}</span><span class="trade-cart-sku-item-real-price notranslate trade-cart-sku-item-info-amount-sale-price" data-amount=${data.price}>${(0, 
                CurrencyConvert.convertFormat)(data.price)}${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
                return `<span class="trade-cart-sku-item-real-price notranslate" data-amount=${data.price}>${(0, 
                CurrencyConvert.convertFormat)(data.price)}${this.getVipTag(data)}<span class="slot-cart slot-cart-price-end" data-slot-cart-price-end></span>`;
            }
            getVipTag(data) {
                return 1 === parseInt(data.priceType, 10) ? `<span class="trade-cart-sku-item-info-tag" data-vip-tag="small"></span>` : "";
            }
            getPromotionAmountInfo(data) {
                var _data$businessFlag3;
                if (parseInt(data.promotionAmount, 10) > 0) return `\n      <div class="trade-cart-sku-item-info-discount body4">\n        <div>\n          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">\n            <path fill-rule="evenodd" clip-rule="evenodd"\n              d="M1.02892 5.44639C1.01074 5.59863 1.06342 5.7508 1.17184 5.85922L6.10552 10.7929C6.49605 11.1834 7.12921 11.1834 7.51974 10.7929L10.793 7.51962C11.1835 7.12909 11.1835 6.49593 10.793 6.1054L5.85934 1.17172C5.75092 1.0633 5.59875 1.01062 5.44651 1.0288L1.89069 1.45337C1.66152 1.48074 1.48086 1.6614 1.4535 1.89057L1.02892 5.44639ZM4.00013 3.00001C4.55241 3.00001 5.00013 3.44772 5.00013 4.00001C5.00013 4.55229 4.55241 5.00001 4.00013 5.00001C3.44785 5.00001 3.00013 4.55229 3.00013 4.00001C3.00013 3.44772 3.44785 3.00001 4.00013 3.00001Z"\n              />\n          </svg><span>&nbsp;${(0, 
                i18n.t)("sales.general.discount_common")}</span>\n        </div>\n        <div class="trade-cart-sku-item-info-discount-number"><span>&nbsp;(-</span><span class="notranslate is-promotion" data-amount=${data.promotionAmount}>${(0, 
                CurrencyConvert.convertFormat)(data.promotionAmount)}</span><span>)</span></div>\n      </div>`;
                if (data && null !== data && void 0 !== data && data.businessFlag && !(null !== data && void 0 !== data && null !== (_data$businessFlag3 = data.businessFlag) && void 0 !== _data$businessFlag3 && _data$businessFlag3.discountable)) return `<div class="trade-cart-sku-item-info-discount sale-color body4">${(0, 
                i18n.t)("cart.promotion.no_promotion")}</div>`;
                return "";
            }
            getImageFallbackIfNecessary(data) {
                const url = this.getImageUrl(data.image);
                if (!url || this.loadFailedImgSet.has(data.image)) return `<div class="trade-cart-sku-item-image-fallback"></div>`;
                return `\n    <div class="hide trade-cart-sku-item-image-fallback"></div>\n    <img class="trade-cart-sku-item-image-wrapper" src="${url}" origin-src="${data.image}">\n    `;
            }
            getImageAccessorial(data) {
                if (data && data.length) {
                    const addonBefore = `<ul class="trade-cart-sku-item-image-wrapper__accessorial__list">`;
                    const content = data.map((item => ` <li style='background: url("${item}")center center;'></li>`));
                    const addonAfter = `</ul>`;
                    return `${addonBefore}${content}${addonAfter}`;
                }
                return ``;
            }
            getCardItemContent(data, isInactive, indexStr = "") {
                const wrapperClassName = [ "shopline-element-cart-sku-item", "trade-cart-sku-item" ];
                if (0 === data.maxPurchaseTotalNum && stockType.cartLimitedEnum.NORMAL_STOCK_OVER.includes(data.maxPurchaseReasonCode)) wrapperClassName.push("sold-out");
                if (isInactive) wrapperClassName.push("inactive");
                const {groupId, spuId, skuId, uniqueSeq, priceType, productSource, name, skuAttr, price, salePrice, itemNo, bindProductImages, errorList, promotionAmount} = data || {};
                const id = `${this.tradeCartType}-card-sku-item-${null !== groupId && void 0 !== groupId ? groupId : ""}-${spuId}-${skuId}-${uniqueSeq}`;
                const hasDiscount = parseInt(promotionAmount, 10) > 0 && parseInt(salePrice, 10) > parseInt(price, 10);
                const content = `\n    <div class="${wrapperClassName.join(" ")}" id="${id}">\n      <a class="trade-cart-sku-item-image"\n         href="${1 === productSource ? `/products/${spuId}` : `javascript:void(0)`}"\n         data-product-source="${productSource}"\n         data-group-id="${null !== groupId && void 0 !== groupId ? groupId : ""}"\n         data-name="${escape_default()(name)}"\n         data-sku-id="${skuId}"\n         data-spu-id="${spuId}"\n         data-sku-attrs="${escape_default()((skuAttr || []).join(","))}"\n         data-price="${price}"\n         data-sale-price="${salePrice}"\n         data-item-no="${itemNo}"\n       >\n          ${this.getImageFallbackIfNecessary(data)}\n          ${this.getImageAccessorial(bindProductImages)}\n          <div class="trade-cart-sku-item-image-sold-out body6">${(0, 
                i18n.t)("products.product_list.product_sold_out")}</div>\n      </a>\n      <div class="trade-cart-sku-item-info">\n          <div class="trade-cart-sku-item-info-title body3">${encodeHTML(name)}</div>\n          ${this.getCardItemAttrs(data)}\n          ${2 === priceType ? `<span class="flash-sale">${render.staticRender(id, data)}</span>` : ""}\n          <div class="trade-cart-sku-item-info-number">\n              <div class="trade-cart-sku-item-info-left">\n                  ${this.getInfoLeft(data, isInactive, indexStr)}\n                  ${Array.isArray(errorList) && errorList.length ? `<span class="promotion-limited">${promotion_limited_render.staticRender(id, data)}</span>` : ""}\n              </div>\n              <div class="trade-cart-sku-item-info-amount-and-discount">\n                  <div class="trade-cart-sku-item-info-amount body3 ${hasDiscount ? "has-discount" : ""}">\n                    ${this.getPriceInfo(data)}\n                  </div>\n                  ${this.getPromotionAmountInfo(data)}\n              </div>\n          </div>\n          <div class="slot-cart slot-cart-num-editor-end" data-slot-cart-num-editor-end></div>\n          ${this.getRemoveButton(data)}\n      </div>\n      <div class="trade-cart-sku-item-mask"></div>\n    </div>\n    <div class="slot-cart slot-cart-item-end" data-slot-cart-item-end></div>\n    `;
                this.templateContent.push(content);
            }
            generateActiveItemTemplate(activeItemData, findex) {
                if (null !== activeItemData && void 0 !== activeItemData && activeItemData.promotion) this.templateContent.push(js(activeItemData.promotion, this.rootWrapper, activeItemData));
                activeItemData.itemList.forEach(((data, index) => {
                    this.getCardItemContent(data, false, `${findex}-${index}`);
                }));
            }
            generateInactiveItemTemplate(inactiveItems) {
                this.templateContent.push(`<div class="trade-cart-sku-list-inactive-wrapper">\n      <div class="trade-cart-sku-list-inactive-wrapper-title body3">${(0, 
                i18n.t)("cart.item.invalid_product")}</div>\n      <button class="trade-cart-sku-list-inactive-wrapper-remove-all body3 btn-link" id="${this.tradeCartType}-trade-cart-sku-list-inactive-wrapper-remove-all">${(0, 
                i18n.t)("cart.item.remove_invalid_product")}</button>\n    </div>`);
                inactiveItems.forEach((data => {
                    this.getCardItemContent(data, true);
                }));
            }
            showEmptyCart(show) {
                if (show) {
                    __SL_$__(".trade_cart_empty_wrapper").removeClass("hide");
                    __SL_$__(".trade_cart_not_empty_wrapper").addClass("hide");
                } else {
                    __SL_$__(".trade_cart_empty_wrapper").addClass("hide");
                    __SL_$__(".trade_cart_not_empty_wrapper").removeClass("hide");
                }
            }
            reRender(data) {
                sku_card_logger.info(`normal 主站购物车 SkuCard reRender`, {
                    data: {
                        cartToken: sku_card_cartToken,
                        cartInfo: data
                    },
                    action: sentryReport.Action.EditCart,
                    status: logger.Status.Start
                });
                if (0 === data.count) {
                    this.showEmptyCart(true);
                    return;
                }
                this.showEmptyCart(false);
                this.cartData = data;
                this.showEmptyCart(false);
                this.activeItems = data.activeItems;
                this.inactiveItems = data.inactiveItems;
                this.preprocessDiscountData();
                this.templateContent = [];
                this.needUnbindEleList.forEach((ele => {
                    null === ele || void 0 === ele ? void 0 : ele.unbind();
                }));
                try {
                    var _window$Shopline, _window$Shopline$even;
                    data.activeItems.forEach(((activeItem, findex) => {
                        this.templateContent.push(`<div class="trade-cart-sku-list-module${activeItem.promotion ? " has-promotion" : ""}">`);
                        this.generateActiveItemTemplate(activeItem, findex);
                        this.templateContent.push("</div>");
                    }));
                    if (data.inactiveItems.length) {
                        this.templateContent.push('<div class="trade-cart-sku-list-module inactive">');
                        this.generateInactiveItemTemplate(data.inactiveItems);
                        this.templateContent.push("</div>");
                    }
                    const finalHtml = this.templateContent.join("\n");
                    this.rootWrapper.html(finalHtml);
                    window.SL_EventBus.emit("global.activeIcon.show", {
                        type: "vip"
                    });
                    null === (_window$Shopline = window.Shopline) || void 0 === _window$Shopline ? void 0 : null === (_window$Shopline$even = _window$Shopline.event) || void 0 === _window$Shopline$even ? void 0 : _window$Shopline$even.emit("Cart::LineItemUpdate");
                    this.reset(true);
                    this.forceInputFocusIfNecessary();
                    sku_card_logger.info(`normal 主站购物车 SkuCard reRender`, {
                        data: {
                            cartToken: sku_card_cartToken,
                            cartInfo: data
                        },
                        action: sentryReport.Action.EditCart,
                        status: logger.Status.Success
                    });
                } catch (e) {
                    sku_card_logger.info(`normal 主站购物车 SkuCard reRender`, {
                        data: {
                            cartToken: sku_card_cartToken,
                            cartInfo: data
                        },
                        action: sentryReport.Action.EditCart,
                        error: e
                    });
                    console.log(e);
                }
            }
            initStepper(root, itemInfo, indexStr) {
                if (root.find(".cart-stepper").length > 0) {
                    const {activeItems} = this;
                    const {spuId, skuId, priceType, num, skuAttr, stockType, name, price, groupId, productSource, maxPurchaseNum, maxPurchaseTotalNum, maxPurchaseReasonCode, itemNo} = itemInfo;
                    const stepper = new sku_stepper({
                        root,
                        name,
                        price,
                        normalSkuNum: num,
                        totalSkuNum: this.skuNumMap[`${groupId}_${spuId}_${skuId}`] || num,
                        disabled: false,
                        spuId,
                        skuId,
                        priceType,
                        stockType,
                        skuAttr,
                        setRendering: this.setRendering.bind(this),
                        isRendering: this.getRendering.bind(this),
                        cartType: this.tradeCartType,
                        setPreFocusedInputEle: this.setPreFocusedInputEle.bind(this),
                        setNeedForceFocus: this.setNeedForceFocus.bind(this),
                        groupId,
                        productSource,
                        maxPurchaseNum,
                        maxPurchaseTotalNum,
                        maxPurchaseReasonCode,
                        indexStr,
                        activeItems,
                        itemNo
                    });
                    stepper.init();
                    this.needUnbindEleList.push(stepper);
                }
            }
            initRemoveButton(root, itemInfo) {
                if (root.find(".trade-cart-sku-item-remove-button").length > 0) {
                    const removeButton = new remove_button({
                        root,
                        itemInfo,
                        cartActionHooks: this.cardActionHooks
                    });
                    removeButton.init();
                    this.needUnbindEleList.push(removeButton);
                }
            }
            initRemoveAllButton(inactiveItems) {
                const removeAllButton = new remove_all_button(`#${this.tradeCartType}-trade-cart-sku-list-inactive-wrapper-remove-all`, inactiveItems, this.cardActionHooks);
                removeAllButton.init();
                this.needUnbindEleList.push(removeAllButton);
            }
            get cardActionHooks() {
                return script_valuer.cartActionHooksValuer.takeCartActionHooks(this.ctx);
            }
        }
        const sku_card = SkuCard;
        var lodash_throttle = __webpack_require__("./node_modules/lodash/throttle.js");
        var throttle_default = __webpack_require__.n(lodash_throttle);
        function litDiscountCodeItem(props) {
            var template = '\n          <div class="trade_coupon__code">\n            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <g opacity="0.3">\n                <path fill-rule="evenodd" clip-rule="evenodd"\n                  d="M1.71487 9.07739C1.68457 9.33113 1.77237 9.58475 1.95307 9.76545L10.1759 17.9883C10.8267 18.6391 11.882 18.6391 12.5329 17.9883L17.9884 12.5328C18.6392 11.8819 18.6392 10.8266 17.9884 10.1758L9.76557 1.95295C9.58487 1.77225 9.33126 1.68445 9.07751 1.71475L3.15115 2.42237C2.7692 2.46798 2.4681 2.76908 2.42249 3.15103L1.71487 9.07739ZM6.66688 5.00009C7.58736 5.00009 8.33355 5.74629 8.33355 6.66676C8.33355 7.58724 7.58736 8.33343 6.66688 8.33343C5.74641 8.33343 5.00022 7.58724 5.00022 6.66676C5.00022 5.74629 5.74641 5.00009 6.66688 5.00009Z"\n                  fill="currentColor" />\n              </g>\n            </svg>\n            <div class="trade_coupon__code-content">\n              <span>'.concat(props.discountCode, "</span>\n            </div>\n            ").concat(props.closeable ? '<span class="trade_coupon__code__btn-del">'.concat(litDeleteReductionCodeIcon(), "</span>") : "", " \n          </div>");
            return template;
        }
        function litDeleteReductionCodeIcon() {
            return '\n    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9 1L1 9" stroke="currentColor" stroke-linecap="round" />\n      <path d="M1 1L9 9" stroke="currentColor" stroke-linecap="round" />\n    </svg>\n  ';
        }
        var defineProperty = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                    (0, defineProperty["default"])(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        function parsePathToArray(path) {
            if ("string" !== typeof path) throw new TypeError("path must be string");
            return path.replace(/\]/, "").split(/[.[]/);
        }
        function t(path, hash) {
            var _store$get, _value$replace;
            var resource = _objectSpread({}, window.__I18N__);
            if ("SL_CART" === (null === (_store$get = store["default"].get()) || void 0 === _store$get ? void 0 : _store$get.currentCart)) resource = _objectSpread({}, window.__I18N__["@sl/cart"]);
            var keys = parsePathToArray(path);
            var value = keys.reduce((function(prev, current) {
                if (!prev) return;
                return null !== prev && void 0 !== prev && prev.string ? prev.string[current] : prev[current];
            }), resource);
            var regExp = new RegExp(/\{\{([^{}]+)\}\}/g);
            return null !== (_value$replace = null === value || void 0 === value ? void 0 : value.replace(regExp, (function() {
                return (null === hash || void 0 === hash ? void 0 : hash[arguments.length <= 1 ? void 0 : arguments[1]]) || (arguments.length <= 0 ? void 0 : arguments[0]);
            }))) && void 0 !== _value$replace ? _value$replace : path;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var currency = __webpack_require__("./node_modules/@sl/cart/lib/utils/currency/index.js");
        function currency_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function currency_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? currency_ownKeys(Object(source), !0).forEach((function(key) {
                    (0, defineProperty["default"])(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : currency_ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        var Currency = function() {
            function Currency(currency) {
                _classCallCheck(this, Currency);
                (0, defineProperty["default"])(this, "currency", void 0);
                this.currency = currency;
            }
            _createClass(Currency, [ {
                key: "convertFormat",
                value: function(amount) {
                    var _this$currency = this.currency, lang = _this$currency.lang, from = _this$currency.from, to = _this$currency.to, currencyRates = _this$currency.currencyRates;
                    return (0, currency.convertFormat)(amount, {
                        lang,
                        from,
                        to,
                        currencyRates
                    });
                }
            }, {
                key: "updateCurrency",
                value: function(currency) {
                    var _this$currency2 = this.currency, lang = _this$currency2.lang, from = _this$currency2.from, to = _this$currency2.to, currencyRates = _this$currency2.currencyRates;
                    this.currency = currency_objectSpread({
                        lang,
                        from,
                        to,
                        currencyRates
                    }, currency);
                }
            } ], [ {
                key: "initCurrencyInstance",
                value: function(currency) {
                    if (!Currency.instance) Currency.instance = new Currency(currency);
                    return Currency.instance;
                }
            } ]);
            return Currency;
        }();
        (0, defineProperty["default"])(Currency, "instance", void 0);
        const lib_currency = Currency;
        var lib = __webpack_require__("./node_modules/@sl/currency-tools-core/lib/index.js");
        (0, lib.setCurrencyConfig)(window.Shopline.currencyConfig.currencyDetailList);
        var convertFormat = function(value, options) {
            var _window, _store$get;
            var SL_State = null === (_window = window) || void 0 === _window ? void 0 : _window.SL_State;
            var fromDefault = SL_State.get("storeInfo.currency");
            var toDefault = SL_State.get("currencyCode");
            var current2Currency = null === (_store$get = store["default"].get()) || void 0 === _store$get ? void 0 : _store$get.currencyCode;
            var _options$from = options.from, from = void 0 === _options$from ? fromDefault : _options$from, _options$to = options.to, to = void 0 === _options$to ? current2Currency || toDefault : _options$to;
            return (0, lib.convertFormat)(value, {
                from,
                to
            });
        };
        const utils_newCurrency = {
            convertFormat
        };
        var ETypeKey;
        (function(ETypeKey) {
            ETypeKey["DISCOUNT_CODE"] = "discountCode";
        })(ETypeKey || (ETypeKey = {}));
        var SHOW_DETAIL_CLS = "showDetail";
        var modalContentCacheMap = {};
        var pageInfoCacheMap = {};
        var isHasModalSibling = function(amountEle) {
            if (!amountEle.nextElementSibling) return false;
            return amountEle.nextElementSibling.classList.contains("summations_detail_modal");
        };
        var getPageInfo = function(key, data) {
            var curKey;
            if ("codePromotionAmount" === key) {
                curKey = ETypeKey.DISCOUNT_CODE;
                pageInfoCacheMap[ETypeKey.DISCOUNT_CODE] = (null === data || void 0 === data ? void 0 : data.promotionCodes) || [];
            }
            return curKey;
        };
        var getAmountDom = function(text) {
            var _store$get;
            var isAmount = "number" === typeof text;
            var amountTxt = text;
            var current = null === (_store$get = store["default"].get()) || void 0 === _store$get ? void 0 : _store$get.currentCart;
            if (isAmount) if ("SL_CART" === current) amountTxt = lib_currency.instance.convertFormat(text || 0); else amountTxt = utils_newCurrency.convertFormat(text || 0, {});
            return '\n  <div class="trade_summations__amount col textRight black">\n    <span style="display:flex;">\n        '.concat(isAmount ? '<span class="trade_summations__amount_reduce">-</span>' : "", '\n        <span class="trade_summations__amount-box">\n          <span class="trade_summations__amount-price">\n              ').concat(amountTxt, "\n          </span>\n        </span>\n    </span>\n  </div>");
        };
        var getDiscountCodeDom = function(data) {
            var discountCodeInfoList = (null === data || void 0 === data ? void 0 : data.promotionCodes) || [];
            var doms = discountCodeInfoList.filter((function(item) {
                return item.valid;
            })).map((function(item) {
                var discountCodeEle = litDiscountCodeItem({
                    discountCode: item.promotionCode,
                    closeable: false
                });
                var amount = Number(item.codePromotionAmount);
                if (3 === item.discountCodeBenefitType) {
                    amount = t("trade.free-shipping");
                    if ("trade.free-shipping" === amount) amount = t("transaction.general.free_shipping");
                }
                return '\n        <div class="summations_detail_modal__content__row">\n          '.concat(discountCodeEle, "\n          ").concat(getAmountDom(amount), "\n        </div>\n      ");
            }));
            return "\n    <div class='summations_detail_modal__content'>\n      ".concat(doms.join(""), "\n    </div>\n  ");
        };
        var generateDetailModal = function(_ref) {
            var ele = _ref.ele, key = _ref.key, data = _ref.data;
            var _ref2 = modalContentCacheMap[key] || {}, modalContent = _ref2.domStr;
            if (key === ETypeKey.DISCOUNT_CODE) modalContent = getDiscountCodeDom(data);
            var modalEle = getModalEle(ele, modalContent);
            return {
                modalEle,
                modalContent
            };
        };
        var removeDetailModal = function(ele) {
            if (isHasModalSibling(ele)) ele.parentElement && ele.parentElement.removeChild(ele.nextElementSibling);
        };
        var getModalEle = function(amountEle, content) {
            var contentDom = '\n  <div class="summations_detail_modal__wrapper">\n    '.concat(content, "\n  </div>");
            if (isHasModalSibling(amountEle) && amountEle.nextElementSibling) {
                amountEle.nextElementSibling.innerHTML = contentDom;
                return amountEle.nextElementSibling;
            }
            var div = document.createElement("div");
            div.className = "summations_detail_modal hide";
            div.innerHTML = contentDom;
            amountEle.parentNode && amountEle.parentNode.insertBefore(div, amountEle.nextElementSibling);
            return div;
        };
        var initDetailModal = function(_ref3) {
            var ele = _ref3.ele, key = _ref3.key, data = _ref3.data, showDetail = _ref3.showDetail;
            var curKey = getPageInfo(key, data);
            var isShow = "true" === showDetail;
            if (modalContentCacheMap[curKey]) modalContentCacheMap[curKey].amountElements.push(ele); else modalContentCacheMap[curKey] = {
                amountElements: [ ele ],
                domStr: ""
            };
            if (!isShow) return;
            var _generateDetailModal = generateDetailModal({
                ele,
                key: curKey,
                data
            }), modalContent = _generateDetailModal.modalContent;
            modalContentCacheMap[curKey].domStr = modalContent;
        };
        var updateDetailModal = function(_ref4) {
            var key = _ref4.key, data = _ref4.data, _ref4$ele = _ref4.ele, ele = void 0 === _ref4$ele ? ".trade_summations__amount" : _ref4$ele;
            var curKey = getPageInfo(key, data);
            var _ref5 = modalContentCacheMap[curKey] || {}, amountElements = _ref5.amountElements;
            var isShow = false;
            if (curKey === ETypeKey.DISCOUNT_CODE) {
                var validDiscountCodeList = pageInfoCacheMap[ETypeKey.DISCOUNT_CODE].filter((function(item) {
                    return item.valid;
                })) || [];
                if (validDiscountCodeList.length > 1) isShow = true;
            }
            amountElements.forEach((function(amountEle) {
                var priceEle = amountEle.querySelector(ele);
                if (isShow) {
                    priceEle.classList.add(SHOW_DETAIL_CLS);
                    var _generateDetailModal2 = generateDetailModal({
                        ele: amountEle,
                        key: curKey,
                        data
                    }), modalContent = _generateDetailModal2.modalContent;
                    modalContentCacheMap[curKey].domStr = modalContent;
                } else {
                    priceEle.classList.remove(SHOW_DETAIL_CLS);
                    modalContentCacheMap[curKey].domStr = "";
                    removeDetailModal(amountEle);
                }
            }));
        };
        var tooltip = __webpack_require__("./src/assets/commons/components/tooltip/index.js");
        var event_bus = __webpack_require__("./src/assets/cart/script/utils/event-bus/index.js");
        const changeStyleByCheckBoxStatus = (status, parentEle) => {
            if (status) {
                var _parentEle$classList;
                null === parentEle || void 0 === parentEle ? void 0 : null === (_parentEle$classList = parentEle.classList) || void 0 === _parentEle$classList ? void 0 : _parentEle$classList.add("trade_checkout_checkbox-checked");
            } else {
                var _parentEle$classList2;
                null === parentEle || void 0 === parentEle ? void 0 : null === (_parentEle$classList2 = parentEle.classList) || void 0 === _parentEle$classList2 ? void 0 : _parentEle$classList2.remove("trade_checkout_checkbox-checked");
            }
        };
        const handleShowTipCheckboxClick = (event, parentEle, ele) => {
            const isChecked = ele.checked;
            const eleId = ele.getAttribute("id");
            changeStyleByCheckBoxStatus(isChecked, parentEle);
            if (eleId) event_bus["default"].emit(`trade:checkbox-${eleId}`, isChecked);
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("input", true, true);
            const target = document.getElementById(eleId);
            if (event.target === target) return;
            if (target) {
                target.checked = ele.checked;
                target.dispatchEvent(evt);
            }
        };
        const handleWrapperClick = (event, parentEle, inputEle) => {
            if (event.target !== inputEle) inputEle.checked = !inputEle.checked;
            handleShowTipCheckboxClick(event, parentEle, inputEle);
        };
        const bindListenerToWrapper = (wrapper, parentEle, inputEle) => {
            wrapper.addEventListener("click", (event => {
                handleWrapperClick(event, parentEle, inputEle);
            }));
        };
        const bindListener = ele => {
            var _wrapperEle$classList;
            const wrapperEle = ele.parentElement;
            const hasWrapper = null === wrapperEle || void 0 === wrapperEle ? void 0 : null === (_wrapperEle$classList = wrapperEle.classList) || void 0 === _wrapperEle$classList ? void 0 : _wrapperEle$classList.contains("trade_checkout_checkbox_wrapper");
            const inputEle = null === ele || void 0 === ele ? void 0 : ele.getElementsByClassName("trade_checkout_checkbox-input")[0];
            if (hasWrapper) bindListenerToWrapper(wrapperEle, ele, inputEle); else inputEle.addEventListener("click", (event => {
                handleShowTipCheckboxClick(event, ele, inputEle);
            }));
        };
        const updateCheckBoxStatus = (status, parentEle) => {
            Array.from(parentEle).forEach((ele => {
                changeStyleByCheckBoxStatus(status, ele);
                const inputEle = null === ele || void 0 === ele ? void 0 : ele.getElementsByClassName("trade_checkout_checkbox-input")[0];
                inputEle.checked = status;
            }));
        };
        const initTradeCheckbox = () => {
            const eleList = document.getElementsByClassName("trade_checkout_checkbox");
            Array.from(eleList).forEach((ele => {
                bindListener(ele);
            }));
        };
        const trade_checkbox = initTradeCheckbox;
        function trade_summations_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const trade_summations_logger = logger["default"].pipeOwner(`${sentryReport.Owner.Cart} biz/trade-summations/index.js`);
        const trade_summations_cartToken = js_cookie_default().get("t_cart");
        let trade_summations_tooltip;
        const info_tips_icon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer; {{style}}">\n<circle cx="6" cy="6" r="5.5" stroke="currentColor"/>\n<path d="M6 3V6.5" stroke="currentColor" stroke-linecap="round"/>\n<circle cx="6" cy="8.75" r="0.75" fill="currentColor"/>\n</svg>\n`;
        const trade_summations_useSuperScriptDecimals = state_selector.SL_State.get("theme.settings.superscript_decimals");
        const MAX_AMOUNT = 999999999999999;
        class Summations {
            constructor() {
                trade_summations_defineProperty(this, "_data", {});
                trade_summations_defineProperty(this, "getTriggerType", (platform => "pc" === platform ? "hover" : "click"));
                trade_summations_defineProperty(this, "getEles", (key => __SL_$__(`.trade_summations_fee[data-key="${key}"]`)));
                trade_summations_defineProperty(this, "_renderTooltip", (isMutra => {
                    if (trade_summations_tooltip) trade_summations_tooltip.destroy();
                    const platform = utils["default"].helper.getPlatform();
                    let selector = '.trade_summations_fee__tips[data-show-tips="true"]';
                    if (isMutra) selector = '.trade_summations_fee__tips[data-has-tips="true"]';
                    trade_summations_tooltip = new tooltip["default"]({
                        selector,
                        trigger: this.getTriggerType(platform),
                        title: (0, i18n.t)("cart.discount.use_coupon_alone")
                    });
                    __SL_$__(selector).html(info_tips_icon);
                }));
                trade_summations_defineProperty(this, "_keyList", []);
                trade_summations_defineProperty(this, "getInitData", (() => {
                    var _store$get;
                    const summationsFeeEles = document.querySelectorAll(".trade_summations_fee");
                    const data = (null === (_store$get = store["default"].get()) || void 0 === _store$get ? void 0 : _store$get.cartInfo) || {};
                    const dataFromEle = Array.from(summationsFeeEles).reduce(((obj, ele) => {
                        const newObj = {
                            ...obj
                        };
                        const {dataset, classList} = null !== ele && void 0 !== ele ? ele : {};
                        const {key, showDetail} = null !== dataset && void 0 !== dataset ? dataset : {};
                        initDetailModal({
                            ele,
                            key,
                            data,
                            showDetail
                        });
                        this._keyList = [ ...this._keyList, key ];
                        if (!newObj[key]) {
                            var _Array$from;
                            newObj[key] = {
                                isHidden: null === (_Array$from = Array.from(classList)) || void 0 === _Array$from ? void 0 : _Array$from.includes("hide"),
                                ...dataset
                            };
                        }
                        return newObj;
                    }), {});
                    this._data = {
                        ...this._data,
                        ...dataFromEle
                    };
                }));
                trade_summations_defineProperty(this, "_toggleVisiable", ((key, hidden) => {
                    const matchedObj = this._data[key];
                    const $matchedEles = this.getEles(key);
                    $matchedEles[hidden ? "addClass" : "removeClass"]("hide");
                    matchedObj.isHidden = hidden;
                }));
                trade_summations_defineProperty(this, "updateMutraTip", (promotionCodeDTO => {
                    const discountCodeTipsParantEle = this.getEles("codePromotionAmount").find(".trade_summations_fee__tips");
                    if (null !== promotionCodeDTO && void 0 !== promotionCodeDTO && promotionCodeDTO.discountCodePromotionExclusion) this._renderTooltip(true); else {
                        var _tooltip;
                        null === (_tooltip = trade_summations_tooltip) || void 0 === _tooltip ? void 0 : _tooltip.destroy();
                        discountCodeTipsParantEle.html("");
                    }
                }));
                trade_summations_defineProperty(this, "updateMemberPoint", (memberPointInfo => {
                    const {use, enable, deductMemberPointNum, deductMemberPointAmount} = memberPointInfo || {};
                    const deductMemberPointAmountEles = this.getEles("deductMemberPointAmount");
                    deductMemberPointAmountEles.find(".trade_checkout_checkbox");
                    updateCheckBoxStatus(use, deductMemberPointAmountEles.find(".trade_checkout_checkbox"));
                    const descEl = deductMemberPointAmountEles.find(".trade_summations_fee__desc");
                    const pointAmountEl = deductMemberPointAmountEles.find(".pointAmount");
                    if (enable) deductMemberPointAmountEles.removeClass("hide"); else deductMemberPointAmountEles.addClass("hide");
                    if (!use) {
                        descEl.removeClass("hide");
                        pointAmountEl.addClass("hide");
                    } else {
                        descEl.addClass("hide");
                        pointAmountEl.removeClass("hide");
                    }
                    let formattedValue = deductMemberPointAmount;
                    if ("number" === typeof deductMemberPointAmount || !deductMemberPointAmount) formattedValue = (0, 
                    CurrencyConvert.convertFormat)(deductMemberPointAmount);
                    descEl.html((0, i18n.t)("cart.refund.deduct_point", {
                        deductMemberPointNum: `${null !== deductMemberPointNum && void 0 !== deductMemberPointNum ? deductMemberPointNum : 0}`,
                        deductMemberPointAmount: `<span class="deductMemberPointAmount">${formattedValue}</span>`
                    }));
                    pointAmountEl.find(".trade_summations_remark").html((0, i18n.t)("cart.refund.cost_points", {
                        value: `${null !== deductMemberPointNum && void 0 !== deductMemberPointNum ? deductMemberPointNum : 0}`
                    }));
                }));
                trade_summations_defineProperty(this, "toggleMemberPoint", (checked => {
                    const pointsAmountDescEle = __SL_$__(".trade_summations_fee__desc");
                    const pointsAmountValueEle = __SL_$__(".pointAmount");
                    if (!checked) {
                        pointsAmountValueEle.addClass("hide");
                        pointsAmountDescEle.removeClass("hide");
                    } else {
                        pointsAmountDescEle.addClass("hide");
                        pointsAmountValueEle.removeClass("hide");
                    }
                    cart["default"].takeCartService().getMemberPoint(checked).then((res => {
                        if (res.success) cart["default"].takeCartService().getCartDetail();
                    }));
                }));
                trade_summations_defineProperty(this, "toggleAmountErrorAlert", (totalAmount => {
                    const tradeAmountErrorAlertEle = __SL_$__(".cart-amount-error-alert");
                    if (totalAmount / 100 <= MAX_AMOUNT) tradeAmountErrorAlertEle.addClass("hide"); else tradeAmountErrorAlertEle.removeClass("hide");
                }));
                trade_summations_defineProperty(this, "_updatePrivateData", ((key, value, isSameAsOldValue) => {
                    const matchedObj = this._data[key];
                    const $matchedEles = this.getEles(key);
                    if (!isSameAsOldValue) {
                        if (!value) {
                            if (!matchedObj.showWithZeroValue) this._toggleVisiable(key, true);
                        } else if (matchedObj.isHidden) this._toggleVisiable(key, false);
                        matchedObj.value = value;
                        $matchedEles.attr("data-value", value);
                    }
                    if ("codePromotionAmount" === key && "string" === typeof value) $matchedEles.find(`.trade_summations__amount-box`).text(value); else {
                        let formattedValue = value;
                        if ("number" === typeof value) formattedValue = (0, CurrencyConvert.convertFormat)(value);
                        if (trade_summations_useSuperScriptDecimals && "number" === typeof value) {
                            const {formattedPriceStr} = convertPrice(value);
                            $matchedEles.find(`.trade_summations__amount-box`).html(formattedPriceStr);
                        } else $matchedEles.find(`.trade_summations__amount-box`).text(formattedValue);
                        if ("number" === typeof value) $matchedEles.find(`.trade_summations__amount-box`).attr("data-amount", value); else $matchedEles.find(`.trade_summations__amount-box`).removeAttr("data-amount");
                    }
                }));
                trade_summations_defineProperty(this, "updateAmount", (data => {
                    const {promotionCodes, promotionCodeDTO: promotionCodeInfo, memberPointInfo, promotionAmount, discountBenefitType, discountCodeTotalAmount, totalAmount} = data;
                    this.updateMutraTip(promotionCodeInfo);
                    let promotionAvailable = false;
                    let promotionFreeShippingMatched = false;
                    let promotionDisplayValue = 0;
                    if (2 === discountBenefitType) {
                        promotionAvailable = true;
                        promotionDisplayValue = (0, i18n.t)("transaction.general.free_shipping");
                        promotionFreeShippingMatched = true;
                    } else if (null == discountBenefitType || 1 === discountBenefitType) {
                        promotionAvailable = promotionAmount > 0;
                        promotionDisplayValue = +promotionAmount;
                    }
                    this._keyList.forEach((key => {
                        let newAmount = +data[key];
                        updateDetailModal({
                            key,
                            data,
                            ele: ".trade_summations__amount"
                        });
                        const validatePromotionCodesList = (null === promotionCodes || void 0 === promotionCodes ? void 0 : promotionCodes.filter((item => item.valid))) || [];
                        const promotionCodeDTO = 1 === (null === validatePromotionCodesList || void 0 === validatePromotionCodesList ? void 0 : validatePromotionCodesList.length) ? validatePromotionCodesList[0] : null;
                        if ("codePromotionAmount" === key) {
                            newAmount = Number(discountCodeTotalAmount);
                            const discountCodeSumAmountEles = this.getEles("codePromotionAmount");
                            const freeShipping = 3 === (null === promotionCodeDTO || void 0 === promotionCodeDTO ? void 0 : promotionCodeDTO.discountCodeBenefitType);
                            if (freeShipping) {
                                newAmount = (0, i18n.t)("transaction.general.free_shipping");
                                discountCodeSumAmountEles.find(".trade_summations__amount_reduce").addClass("hide");
                            } else {
                                newAmount = promotionCodeDTO ? +(promotionCodeDTO.codePromotionAmount || 0) : Number(discountCodeTotalAmount);
                                discountCodeSumAmountEles.find(".trade_summations__amount_reduce").removeClass("hide");
                            }
                            this._updatePrivateData(key, newAmount, false);
                            return;
                        }
                        if ("freeShipping" === key) newAmount = newAmount ? (0, i18n.t)("cart.payment.free") : 0; else if ("deductMemberPointAmount" === key) {
                            var _memberPointInfo$dedu;
                            newAmount = null !== (_memberPointInfo$dedu = null === memberPointInfo || void 0 === memberPointInfo ? void 0 : memberPointInfo.deductMemberPointAmount) && void 0 !== _memberPointInfo$dedu ? _memberPointInfo$dedu : 0;
                        } else if ("totalAmount" === key) {
                            const totalAmountEles = this.getEles("totalAmount");
                            const codePromotionAmountValue = Number(discountCodeTotalAmount);
                            if (promotionAvailable || codePromotionAmountValue > 0 || +data.freeShipping > 0 || null !== memberPointInfo && void 0 !== memberPointInfo && memberPointInfo.enable && null !== memberPointInfo && void 0 !== memberPointInfo && memberPointInfo.use) null === totalAmountEles || void 0 === totalAmountEles ? void 0 : totalAmountEles.removeClass("hide"); else null === totalAmountEles || void 0 === totalAmountEles ? void 0 : totalAmountEles.addClass("hide");
                        } else if ("promotionAmount" === key) {
                            newAmount = promotionDisplayValue;
                            const promotionAmountEles = this.getEles("promotionAmount");
                            if (promotionFreeShippingMatched) promotionAmountEles.find(".trade_summations__amount_reduce").addClass("hide"); else promotionAmountEles.find(".trade_summations__amount_reduce").removeClass("hide");
                            this._updatePrivateData(key, newAmount, `${this._data.promotionAmount.value}` === `${newAmount}`);
                            return;
                        }
                        const isSameAsOldValue = newAmount === +this._data[key].value;
                        this._updatePrivateData(key, newAmount, isSameAsOldValue);
                    }));
                    this.updateMemberPoint(memberPointInfo);
                    this.toggleAmountErrorAlert(totalAmount);
                }));
                trade_summations_defineProperty(this, "initEventListener", (() => {
                    const {eventBus, eventBusEnum} = cart["default"];
                    eventBus.on(eventBusEnum.UPDATE, this.updateAmount);
                    eventBus.on("global:currency:format", (() => {
                        var _store$get2;
                        return this.updateAmount((null === (_store$get2 = store["default"].get()) || void 0 === _store$get2 ? void 0 : _store$get2.cartInfo) || {});
                    }));
                    this.initModalEventListener();
                }));
                trade_summations_defineProperty(this, "scrollHideTips", throttle_default()((() => {
                    trade_summations_tooltip.hide();
                }), 50));
                trade_summations_defineProperty(this, "initModalEventListener", (() => {
                    __SL_$__(".trade_summations .trade_summations__amount").off("mouseenter click").on("mouseenter click", (function() {
                        var _$this$offset;
                        const $this = __SL_$__(this);
                        const $feeDetailModal = $this.parent(".trade_summations_fee").next(".summations_detail_modal");
                        if (0 === $feeDetailModal.length) return;
                        $feeDetailModal.removeClass("hide").find(".summations_detail_modal__wrapper").css({
                            top: +(null === (_$this$offset = $this.offset()) || void 0 === _$this$offset ? void 0 : _$this$offset.top) + $this.height() - __SL_$__(document).scrollTop()
                        });
                    }));
                    __SL_$__(".trade_summations .trade_summations__amount").off("mouseleave").on("mouseleave", (function() {
                        const $feeDetailModal = __SL_$__(this).parent(".trade_summations_fee").next(".summations_detail_modal");
                        if (0 === $feeDetailModal.length) return;
                        $feeDetailModal.addClass("hide");
                    }));
                    __SL_$__(window).off("touchmove").on("touchmove", throttle_default()((() => {
                        __SL_$__(".summations_detail_modal").each((function() {
                            const $curModalEle = __SL_$__(this);
                            if (false === $curModalEle.hasClass("hide")) $curModalEle.addClass("hide");
                        }));
                    }), 30));
                }));
                trade_summations_defineProperty(this, "init", (() => {
                    trade_summations_logger.info(`normal 主站购物车 SummationModule 初始化 init`, {
                        data: {
                            cartToken: trade_summations_cartToken
                        },
                        action: sentryReport.Action.InitCart,
                        status: logger.Status.Start
                    });
                    this.initEventListener();
                    this.getInitData();
                    this._renderTooltip();
                    utils["default"].helper.listenPlatform((platform => {
                        if (!trade_summations_tooltip) return;
                        trade_summations_tooltip.toggle({
                            trigger: this.getTriggerType(platform)
                        });
                    }));
                    __SL_$__(".trade_mini_cart").parent().on("scroll", this.scrollHideTips);
                    __SL_$__(".trade_cart").parent().on("scroll", this.scrollHideTips);
                    __SL_$__(".trade_cart_not_empty_wrapper").on("scroll", this.scrollHideTips);
                    __SL_$__(document).on("scroll", this.scrollHideTips);
                    event_bus["default"].on("trade:checkbox-trade_checkout_point_checkbox", this.toggleMemberPoint);
                }));
            }
        }
        const summationBus = new Summations;
        const trade_summations = summationBus;
        function _arrayLikeToArray(arr, len) {
            if (null == len || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
            if ("undefined" !== typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if ("Object" === n && o.constructor) n = o.constructor.name;
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        var asyncToGenerator = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
        var regenerator = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
        var regenerator_default = __webpack_require__.n(regenerator);
        var HD_EVENT_NAME = {
            GO_TO_CHECKOUT: "trade:goToCheckout:report",
            PAYPAL_CHECKOUT: "trade:spb:report",
            COUPON_INPUT: "trade:coupon:input:report",
            COUPON_APPLY: "trade:coupon:apply:report",
            PAYPAL_CHECKOUT_V2: "trade:spb:report:hiidov2"
        };
        var inputBox_window;
        function inputBox_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function inputBox_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? inputBox_ownKeys(Object(source), !0).forEach((function(key) {
                    (0, defineProperty["default"])(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : inputBox_ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        var EventBus = null === (inputBox_window = window) || void 0 === inputBox_window ? void 0 : inputBox_window.SL_EventBus;
        function createInputBoxStore(svc) {
            var state = {
                wipCode: "",
                applyDisabled: true,
                applyPending: false,
                applyStatus: {
                    success: true
                },
                staleDiscountCodeTipHidden: false,
                reductionMode: svc.reductionCodeMode
            };
            var stateObserverList = new Set;
            var updateState = function(wipState) {
                stateObserverList.forEach((function(observer) {
                    try {
                        observer(wipState);
                    } catch (e) {
                        console.error("failed to dispatch input box state with", e);
                    }
                }));
                state = wipState;
            };
            var onCodeChange = function() {
                var code = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                EventBus.emit(CouponEventEnum.CHANGE, {
                    data: {
                        discountCode: code
                    }
                });
                var applyStatus = {
                    success: true
                };
                var applyDisabled = !code;
                var codeLen = code.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "*").length;
                if (codeLen > 25 || codeLen < 2) {
                    var errInfo = t("transaction.general.coupon_code_exceed_not_64_characters");
                    if ("transaction.general.coupon_code_exceed_not_64_characters" === errInfo) {
                        errInfo = t("transaction.general.coupon_code_exceed_not_25_characters");
                        if ("transaction.general.coupon_code_exceed_not_25_characters" === errInfo) if ("validate.coupon-code-cannot-exceed-25-length" === t("validate.coupon-code-cannot-exceed-25-length")) errInfo = t("cart.discount.coupon_code_length_limit", {
                            range: "2~25"
                        }); else errInfo = t("validate.coupon-code-cannot-exceed-25-length").replace("25", "2~25"); else errInfo = errInfo.replace("25", "2~25");
                    } else errInfo = errInfo.replace("64", "2~25");
                    applyStatus = {
                        success: false,
                        msg: errInfo
                    };
                    applyDisabled = true;
                }
                updateState(inputBox_objectSpread(inputBox_objectSpread({}, state), {}, {
                    wipCode: code,
                    applyDisabled,
                    applyStatus
                }));
            };
            var onCodeApply = function() {
                var _ref = (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee(code) {
                    var res;
                    return regenerator_default().wrap((function(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            if (!(!code || !code.trim())) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");

                          case 2:
                            if (!state.applyPending) {
                                _context.next = 4;
                                break;
                            }
                            return _context.abrupt("return");

                          case 4:
                            if (!state.applyDisabled) {
                                _context.next = 6;
                                break;
                            }
                            return _context.abrupt("return");

                          case 6:
                            updateState(inputBox_objectSpread(inputBox_objectSpread({}, state), {}, {
                                wipCode: code,
                                applyDisabled: true,
                                applyPending: true,
                                applyStatus: {
                                    success: true
                                }
                            }));
                            _context.next = 9;
                            return svc.applyReductionCode(code.trim());

                          case 9:
                            res = _context.sent;
                            if (res.success) {
                                EventBus.emit(HD_EVENT_NAME.COUPON_APPLY, {
                                    data: {
                                        discountCode: code
                                    }
                                });
                                updateState(inputBox_objectSpread(inputBox_objectSpread({}, state), {}, {
                                    wipCode: "",
                                    applyDisabled: true,
                                    applyPending: false,
                                    applyStatus: {
                                        success: true
                                    }
                                }));
                            } else updateState(inputBox_objectSpread(inputBox_objectSpread({}, state), {}, {
                                applyDisabled: false,
                                applyPending: false,
                                applyStatus: {
                                    success: false,
                                    msg: res.msg
                                }
                            }));

                          case 11:
                          case "end":
                            return _context.stop();
                        }
                    }), _callee);
                })));
                return function(_x) {
                    return _ref.apply(this, arguments);
                };
            }();
            var store = {
                registerDispatcherWithElementList: function() {
                    for (var _len = arguments.length, $els = new Array(_len), _key = 0; _key < _len; _key++) $els[_key] = arguments[_key];
                    return $els.map((function($el) {
                        return store.registerDispatcher(initInputBoxDispatcher($el));
                    }));
                },
                registerDispatcher: function(dispatcher) {
                    var appliedSubscription = dispatcher.onApply((function() {
                        onCodeApply(dispatcher.code);
                    }));
                    var changedSubscription = dispatcher.onChange((function() {
                        onCodeChange(dispatcher.code);
                    }));
                    if (dispatcher.code) setTimeout((function() {
                        onCodeApply(dispatcher.code);
                    }), 0);
                    return {
                        unsubscribe: function() {
                            appliedSubscription.unsubscribe();
                            changedSubscription.unsubscribe();
                        }
                    };
                },
                get state() {
                    return state;
                },
                observeState: function(observer) {
                    stateObserverList.add(observer);
                    return {
                        unsubscribe: function() {
                            stateObserverList.delete(observer);
                        }
                    };
                }
            };
            return store;
        }
        function initInputBoxComponent(props) {
            var store = props.store, reductionCodeWrapperCls = props.reductionCodeWrapperCls;
            store.observeState((function(state) {
                document.querySelectorAll(reductionCodeWrapperCls).forEach((function($el) {
                    var $applyBtn = $el.querySelector(".trade_coupon__btns-apply");
                    if ($applyBtn) if (state.applyDisabled) {
                        $applyBtn.classList.add("is-disabled");
                        $applyBtn.classList.remove("hasValue");
                    } else {
                        $applyBtn.classList.remove("is-disabled");
                        $applyBtn.classList.add("hasValue");
                    }
                    var applyPending = state.applyPending;
                    var $button = $el.querySelector(".trade_coupon__btns-apply");
                    var $loadingButton = $el.querySelector(".trade_coupon__btns-loading");
                    if (applyPending) {
                        $button && $button.classList.add("hide");
                        $loadingButton && $loadingButton.classList.remove("hide");
                    } else {
                        $button && $button.classList.remove("hide");
                        $loadingButton && $loadingButton.classList.add("hide");
                    }
                    var $input = $el.querySelector("input");
                    if ($input) $input.value = state.wipCode;
                    var applyStatus = state.applyStatus;
                    var $inputWrapper = $el.querySelector(".trade_coupon");
                    var $inputError = $el.querySelector("".concat(reductionCodeWrapperCls, " .error-tips"));
                    if (state.wipCode && false === applyStatus.success) {
                        $inputWrapper && $inputWrapper.classList.add("is-error");
                        $inputError.classList.remove("hide");
                        $inputError.innerText = applyStatus.msg || "";
                    } else {
                        $inputWrapper && $inputWrapper.classList.remove("is-error");
                        $inputError.classList.add("hide");
                        $inputError.innerText = "";
                    }
                    var $staleDiscountCodeTip = $el.querySelector(".trade_coupon_invalid_tips");
                    if (state.staleDiscountCodeTipHidden) $($staleDiscountCodeTip).slideUp(100);
                }));
            }));
        }
        function initInputBoxDispatcher($el) {
            var els = {
                get $input() {
                    return $el.querySelector("input");
                },
                get $applyBtn() {
                    return $el.querySelector(".trade_coupon__btns-apply");
                }
            };
            return {
                onApply: function(observer) {
                    var onClick = function() {
                        observer();
                    };
                    els.$applyBtn.addEventListener("click", onClick);
                    var onKeypress = function(e) {
                        var keyCode = e.which || e.keyCode;
                        if (13 === keyCode) {
                            observer();
                            return false;
                        }
                    };
                    els.$input.addEventListener("keypress", onKeypress);
                    return {
                        unsubscribe: function() {
                            els.$applyBtn.removeEventListener("click", onClick);
                            els.$input.removeEventListener("keypress", onKeypress);
                        }
                    };
                },
                onChange: function(observer) {
                    var onInput = function() {
                        observer();
                    };
                    els.$input.addEventListener("input", onInput);
                    return {
                        unsubscribe: function() {
                            els.$input.removeEventListener("input", onInput);
                        }
                    };
                },
                onBeforeFocus: function(observer) {
                    var onFocus = function(e) {
                        observer();
                    };
                    els.$input.addEventListener("focus", onFocus);
                    return {
                        unsubscribe: function() {
                            els.$input.removeEventListener("focus", onFocus);
                        }
                    };
                },
                onAfterBlur: function(observer) {
                    var onFocus = function(e) {
                        observer();
                    };
                    els.$input.addEventListener("focus", onFocus);
                    return {
                        unsubscribe: function() {
                            els.$input.removeEventListener("focus", onFocus);
                        }
                    };
                },
                get code() {
                    return els.$input.value;
                }
            };
        }
        function stringToFragment(str) {
            return document.createRange().createContextualFragment(str.toString().replace(/\s\s+/g, " ").trim());
        }
        function tooltip_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function tooltip_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? tooltip_ownKeys(Object(source), !0).forEach((function(key) {
                    (0, defineProperty["default"])(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tooltip_ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        var getTemplate = function(options, index, $anchor) {
            var title = options.title;
            if ("function" === typeof title) title = title(options, index, $anchor);
            return '\n    <div class="mp-tooltip mp-tooltip--placement-top mp-tooltip--hidden" style="z-index: '.concat(options.zIndex, '">\n      <div class="mp-tooltip__content">\n        <div class="mp-tooltip__arrow">\n          <span class="mp-tooltip__arrow-content" style="background: ').concat(options.color, '"></span>\n        </div>\n        <div class="mp-tooltip__inner" style="background: ').concat(options.color, '">\n          ').concat(title, "\n        </div>\n      </div>\n    </div>\n  ");
        };
        var defaultOptions = {
            color: "#000",
            trigger: "hover"
        };
        var HIDDEN_CLASSNAME = "mp-tooltip--hidden";
        var CONTENT_CLASSNAME = "mp-tooltip__inner";
        var ARROW_CLASSNAME = "mp-tooltip__arrow";
        var calculationPosition = function($target, $tooltip) {
            var offset = $target.offset();
            var width = $target.outerWidth();
            var $doc = $(document);
            var scrollTop = $doc.scrollTop();
            var scrollLeft = $doc.scrollLeft();
            var left;
            var x;
            var screenWidth = $(window).width();
            var offsetLeft = offset.left + width / 2 - scrollLeft;
            var tooltipWidth = $tooltip.outerWidth();
            if (offsetLeft <= tooltipWidth / 2) {
                left = tooltipWidth / 2;
                x = offsetLeft;
            } else if (offsetLeft + tooltipWidth / 2 >= screenWidth) {
                left = screenWidth - tooltipWidth / 2;
                x = tooltipWidth - screenWidth + offsetLeft;
            } else {
                left = offsetLeft;
                x = tooltipWidth / 2;
            }
            return {
                left,
                top: offset.top - scrollTop,
                x
            };
        };
        var Tooltip = function() {
            function Tooltip(options) {
                _classCallCheck(this, Tooltip);
                this.options = tooltip_objectSpread(tooltip_objectSpread({}, defaultOptions), options);
                this.$target = $(this.options.selector);
                this.clickEventId = Math.random().toString(32).slice(-8);
                this.$tooltips = [];
                this.isShow = false;
                this.init();
            }
            _createClass(Tooltip, [ {
                key: "init",
                value: function() {
                    var _this = this;
                    this.walk();
                    var calc = tooltip_throttle(20, (function() {
                        _this.$tooltips.forEach((function(tooltip) {
                            return _this.setPosition($(tooltip), _this.$target);
                        }));
                    }));
                    $(document).scroll((function() {
                        if (_this.isShow) calc();
                    }));
                }
            }, {
                key: "walk",
                value: function() {
                    var _this2 = this;
                    this.$target.each((function(index, item) {
                        var $item = $(item);
                        var template = getTemplate(_this2.options, index, item);
                        var $tooltip = $(template);
                        _this2.$tooltips.push($tooltip);
                        $("body").append($tooltip);
                        _this2.bindEvents($tooltip, $item);
                    }));
                }
            }, {
                key: "bindEvents",
                value: function($tooltip, $target) {
                    var _this3 = this;
                    var events = {
                        hover: function() {
                            $(document).off(".".concat(_this3.clickEventId));
                            $target.hover((function() {
                                _this3.setPosition($tooltip, $target);
                                $tooltip.removeClass(HIDDEN_CLASSNAME);
                                _this3.isShow = true;
                            }), (function() {
                                $tooltip.addClass(HIDDEN_CLASSNAME);
                                _this3.isShow = false;
                            }));
                        },
                        click: function() {
                            $target.off("mouseenter mouseleave");
                            $(document).on("click.".concat(_this3.clickEventId), (function(event) {
                                var $tar = $(event.target);
                                if (!$tar.closest($target).length && !$target.hasClass(HIDDEN_CLASSNAME)) {
                                    $tooltip.addClass(HIDDEN_CLASSNAME);
                                    _this3.isShow = false;
                                } else {
                                    _this3.setPosition($tooltip, $target);
                                    $tooltip.removeClass(HIDDEN_CLASSNAME);
                                    _this3.isShow = true;
                                }
                            }));
                        }
                    };
                    if ("function" === typeof events[this.options.trigger]) events[this.options.trigger]();
                }
            }, {
                key: "toggle",
                value: function(_ref) {
                    var _this4 = this;
                    var title = _ref.title, trigger = _ref.trigger;
                    if (void 0 !== title || null !== title) {
                        this.options.title = title;
                        this.$tooltips.forEach((function(item) {
                            $(item).find(".".concat(CONTENT_CLASSNAME)).html(title);
                        }));
                    }
                    if (trigger) {
                        this.options.trigger = trigger;
                        this.$target.each((function(index, item) {
                            var $item = $(item);
                            var $tooltip = _this4.$tooltips[index];
                            _this4.bindEvents($tooltip, $item);
                        }));
                    }
                }
            }, {
                key: "setPosition",
                value: function($tooltip, $target) {
                    var offset = calculationPosition($target, $tooltip);
                    $tooltip.css({
                        left: offset.left,
                        top: offset.top
                    });
                    $tooltip.find(".".concat(ARROW_CLASSNAME)).css({
                        left: offset.x
                    });
                }
            }, {
                key: "show",
                value: function(title) {
                    this.$tooltips.forEach((function(item) {
                        $(item).removeClass(HIDDEN_CLASSNAME).find(".".concat(CONTENT_CLASSNAME)).html(title);
                    }));
                    this.isShow = true;
                }
            }, {
                key: "hide",
                value: function() {
                    this.$tooltips.forEach((function(item) {
                        $(item).addClass(HIDDEN_CLASSNAME);
                    }));
                    this.isShow = false;
                }
            }, {
                key: "destroy",
                value: function() {
                    this.isShow = false;
                    this.$tooltips.forEach((function(item) {
                        $(item).remove();
                    }));
                }
            } ], [ {
                key: "install",
                value: function() {
                    var $ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;
                    if (!$.fn.tooltip) $.fn.extend({
                        tooltip: function(options) {
                            new Tooltip(tooltip_objectSpread(tooltip_objectSpread({}, options), {}, {
                                selector: this
                            }));
                            return this;
                        }
                    });
                    return this;
                }
            } ]);
            return Tooltip;
        }();
        function tooltip_throttle(limit, callback) {
            var waiting = false;
            return function() {
                if (!waiting) {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    callback.apply(this, args);
                    waiting = true;
                    setTimeout((function() {
                        waiting = false;
                    }), limit);
                }
            };
        }
        function initCodeListComponent(props) {
            var svc = props.svc;
            var invalidTooltip;
            document.querySelectorAll(".trade_coupon__invalidCodeWrapper .trade_coupon__code__btn-del").forEach((function($el) {
                $el.addEventListener("click", (function(_) {
                    svc.cleanInvalidReductionCodeList();
                }));
            }));
            svc.observeValidReductionCodeList((function(list) {
                document.querySelectorAll(".trade_coupon__appliedCodeBox").forEach((function($el) {
                    var _$el$parentElement;
                    var $wipBox = $el.cloneNode(false);
                    list.forEach((function(item) {
                        var _item$payload$discoun, _$frag$firstChild;
                        var $frag = stringToFragment(litDiscountCodeItem({
                            discountCode: null !== (_item$payload$discoun = item.payload.discountCode) && void 0 !== _item$payload$discoun ? _item$payload$discoun : "",
                            closeable: true
                        })).cloneNode(true);
                        var $remove = null === (_$frag$firstChild = $frag.firstChild) || void 0 === _$frag$firstChild ? void 0 : _$frag$firstChild.querySelector(".trade_coupon__code__btn-del");
                        null === $remove || void 0 === $remove ? void 0 : $remove.addEventListener("click", (function() {
                            var _item$payload$discoun2;
                            svc.removeDiscountCode(null !== (_item$payload$discoun2 = item.payload.discountCode) && void 0 !== _item$payload$discoun2 ? _item$payload$discoun2 : "");
                        }));
                        $wipBox.appendChild($frag);
                        return;
                    }));
                    null === (_$el$parentElement = $el.parentElement) || void 0 === _$el$parentElement ? void 0 : _$el$parentElement.replaceChild($wipBox, $el);
                }));
                document.querySelectorAll(".trade_coupon__appliedCodeBox").forEach((function($el) {
                    if (list.length) $el.classList.remove("hide"); else $el.classList.add("hide");
                }));
            }), true);
            svc.observeInvalidReductionCodeList((function(list) {
                document.querySelectorAll(".trade_coupon__invalidCodeBox").forEach((function($el) {
                    var _$el$parentElement2;
                    var $wipBox = $el.cloneNode(false);
                    list.forEach((function(item) {
                        if ("discount-code" === item.type) {
                            var _item$payload$discoun3, _$frag$firstChild2, _item$payload$discoun4;
                            var $frag = stringToFragment(litDiscountCodeItem({
                                discountCode: null !== (_item$payload$discoun3 = item.payload.discountCode) && void 0 !== _item$payload$discoun3 ? _item$payload$discoun3 : "",
                                closeable: false
                            })).cloneNode(true);
                            null === (_$frag$firstChild2 = $frag.firstChild) || void 0 === _$frag$firstChild2 ? void 0 : _$frag$firstChild2.setAttribute("data-tooltip-title", null !== (_item$payload$discoun4 = item.payload.discountCodeInvalidMsg) && void 0 !== _item$payload$discoun4 ? _item$payload$discoun4 : "");
                            $wipBox.appendChild($frag);
                            return;
                        }
                    }));
                    null === (_$el$parentElement2 = $el.parentElement) || void 0 === _$el$parentElement2 ? void 0 : _$el$parentElement2.replaceChild($wipBox, $el);
                }));
                document.querySelectorAll(".trade_coupon__invalidCodeBox").forEach((function($el) {
                    if (list.length) $el.classList.remove("hide"); else $el.classList.add("hide");
                }));
                document.querySelectorAll(".trade_coupon__invalidCodeWrapper").forEach((function($el) {
                    if (list.length) $el.classList.remove("hide"); else $el.classList.add("hide");
                }));
                if (invalidTooltip) invalidTooltip.destroy();
                if (list.length) invalidTooltip = new Tooltip({
                    selector: ".trade_coupon__invalidCodeBox .trade_coupon__code",
                    trigger: "hover",
                    title: function(_, __, ele) {
                        return ele.getAttribute("data-tooltip-title") || "";
                    },
                    color: "#000",
                    zIndex: 1e3
                });
            }), true);
        }
        var clsNameList = {
            SL_CART: {
                wrapper: ".sl-coupon-wrapper"
            },
            ONLINE_CART: {
                wrapper: ".trade_coupon__wrapper"
            }
        };
        function initReductionCodeComponent(svc) {
            var _clsNameList$cartType;
            var cartType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "SL_CART";
            var reductionCodeWrapperCls = (null === (_clsNameList$cartType = clsNameList[cartType]) || void 0 === _clsNameList$cartType ? void 0 : _clsNameList$cartType.wrapper) || clsNameList.ONLINE_CART.wrapper;
            var inputBoxStore = createInputBoxStore(svc);
            inputBoxStore.registerDispatcherWithElementList.apply(inputBoxStore, _toConsumableArray(document.querySelectorAll(reductionCodeWrapperCls)));
            initInputBoxComponent({
                store: inputBoxStore,
                reductionCodeWrapperCls
            });
            initCodeListComponent({
                svc
            });
        }
        var ErrorCode;
        (function(ErrorCode) {
            ErrorCode["COUPON_INVALID"] = "TCAT0106";
        })(ErrorCode || (ErrorCode = {}));
        var ResponseCodeEnum;
        (function(ResponseCodeEnum) {
            ResponseCodeEnum["SUCCESS"] = "SUCCESS";
        })(ResponseCodeEnum || (ResponseCodeEnum = {}));
        function getDiscountCodeInfoFromCart(promotion) {
            var promotionCode = promotion.promotionCode, valid = promotion.valid, discountErrorCode = promotion.discountErrorCode;
            var discountCodeInfo = valid ? {
                discountCode: promotionCode,
                discountCodeInvalid: false
            } : {
                discountCode: promotionCode,
                discountCodeInvalid: true,
                discountCodeInvalidCode: discountErrorCode,
                discountCodeInvalidMsg: translateErrorCodeToMsg(discountErrorCode || "", promotionCode)
            };
            return discountCodeInfo;
        }
        function getReductionCodeListFromCart(cartInfo) {
            var promotionCodes = cartInfo.promotionCodes;
            var list = [];
            if (promotionCodes && promotionCodes.length) _toConsumableArray(promotionCodes).reverse().forEach((function(promotion) {
                list.push({
                    type: "discount-code",
                    payload: getDiscountCodeInfoFromCart(promotion)
                });
            }));
            return list;
        }
        function filterInvalidReductionCodeList(list) {
            return list.filter((function(info) {
                if ("discount-code" === info.type) info.payload.discountCodeInvalid;
                return false;
            }));
        }
        function filterValidReductionCodeList(list) {
            return null === list || void 0 === list ? void 0 : list.filter((function(info) {
                return !info.payload.discountCodeInvalid;
            }));
        }
        var Scheduler = function() {
            function Scheduler(onExecute) {
                var _this = this;
                _classCallCheck(this, Scheduler);
                (0, defineProperty["default"])(this, "onExecute", void 0);
                (0, defineProperty["default"])(this, "wipTask", void 0);
                (0, defineProperty["default"])(this, "wipTaskObserver", new Set);
                (0, defineProperty["default"])(this, "nextTask", void 0);
                (0, defineProperty["default"])(this, "nextTaskObserver", new Set);
                (0, defineProperty["default"])(this, "applyReductionCode", (function(code) {
                    var task = _this.getNextTask();
                    task.apply = code;
                    return _this.updateNextTask(task);
                }));
                (0, defineProperty["default"])(this, "removeDiscountCode", (function(code) {
                    var task = _this.getNextTask();
                    task.removeDiscountCode = code;
                    return _this.updateNextTask(task);
                }));
                (0, defineProperty["default"])(this, "cleanInvalidReductionCodeList", (function() {
                    var task = _this.getNextTask();
                    task.clean = true;
                    return _this.updateNextTask(task);
                }));
                this.onExecute = onExecute;
            }
            _createClass(Scheduler, [ {
                key: "getNextTask",
                value: function() {
                    if (!this.nextTask) this.nextTask = {};
                    return this.nextTask;
                }
            }, {
                key: "updateNextTask",
                value: function(task) {
                    var _this2 = this;
                    return new Promise((function(resolve) {
                        if (_this2.wipTask) {
                            _this2.nextTask = task;
                            _this2.nextTaskObserver.add(resolve);
                            return;
                        }
                        _this2.wipTask = task;
                        _this2.wipTaskObserver = new Set([].concat(_toConsumableArray(_this2.nextTaskObserver || []), [ resolve ]));
                        _this2.execute();
                    }));
                }
            }, {
                key: "execute",
                value: function() {
                    var _execute = (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee() {
                        var res, observers;
                        return regenerator_default().wrap((function(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                this.nextTask = void 0;
                                this.nextTaskObserver = new Set;
                                _context.next = 4;
                                return this.onExecute(this.wipTask);

                              case 4:
                                res = _context.sent;
                                observers = this.wipTaskObserver;
                                this.wipTask = null;
                                this.wipTaskObserver = new Set;
                                try {
                                    observers.forEach((function(cb) {
                                        return cb(res);
                                    }));
                                } catch (e) {}
                                if (!this.nextTask) {
                                    _context.next = 13;
                                    break;
                                }
                                this.wipTask = this.nextTask;
                                this.wipTaskObserver = new Set(this.nextTaskObserver);
                                return _context.abrupt("return", this.execute());

                              case 13:
                                return _context.abrupt("return", res);

                              case 14:
                              case "end":
                                return _context.stop();
                            }
                        }), _callee, this);
                    })));
                    function execute() {
                        return _execute.apply(this, arguments);
                    }
                    return execute;
                }()
            } ]);
            return Scheduler;
        }();
        var Observable = _createClass((function Observable() {
            var _this = this;
            _classCallCheck(this, Observable);
            (0, defineProperty["default"])(this, "observerList", new Set);
            (0, defineProperty["default"])(this, "observe", (function(observer) {
                _this.observerList.add(observer);
                return {
                    unsubscribe: function() {
                        _this.observerList.delete(observer);
                    }
                };
            }));
            (0, defineProperty["default"])(this, "next", (function(value) {
                try {
                    _this.observerList.forEach((function(observer) {
                        observer(value);
                    }));
                } catch (e) {}
            }));
        }));
        var request = __webpack_require__("./node_modules/@sl/cart/lib/utils/request.js");
        var reductionCode_service = __webpack_require__("./node_modules/@sl/cart/lib/config/reductionCode/service.js");
        var services_window;
        function services_ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function services_objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? services_ownKeys(Object(source), !0).forEach((function(key) {
                    (0, defineProperty["default"])(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : services_ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        var services_SL_EventBus = null === (services_window = window) || void 0 === services_window ? void 0 : services_window.SL_EventBus;
        var ReductionCodeService = function() {
            function ReductionCodeService(factory) {
                var _this = this;
                _classCallCheck(this, ReductionCodeService);
                (0, defineProperty["default"])(this, "cartInfoGetter", void 0);
                (0, defineProperty["default"])(this, "scheduler", void 0);
                (0, defineProperty["default"])(this, "invalidReductionCodeListStream", new Observable);
                (0, defineProperty["default"])(this, "validReductionCodeListStream", new Observable);
                (0, defineProperty["default"])(this, "invalidReductionCodeListModel", void 0);
                (0, defineProperty["default"])(this, "updateInvalidReductionCodeList", (function() {
                    _this.invalidReductionCodeListModel.mergeReductionCodeList(filterInvalidReductionCodeList(getReductionCodeListFromCart(_this.cartInfoGetter())));
                }));
                (0, defineProperty["default"])(this, "applyReductionCode", function() {
                    var _ref = (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee(reductionCode) {
                        return regenerator_default().wrap((function(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                return _context.abrupt("return", _this.scheduler.applyReductionCode(reductionCode));

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                        }), _callee);
                    })));
                    return function(_x) {
                        return _ref.apply(this, arguments);
                    };
                }());
                (0, defineProperty["default"])(this, "removeDiscountCode", function() {
                    var _ref2 = (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee2(discountCode) {
                        return regenerator_default().wrap((function(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                return _context2.abrupt("return", _this.scheduler.removeDiscountCode(discountCode));

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                        }), _callee2);
                    })));
                    return function(_x2) {
                        return _ref2.apply(this, arguments);
                    };
                }());
                (0, defineProperty["default"])(this, "cleanInvalidReductionCodeList", (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee3() {
                    var res;
                    return regenerator_default().wrap((function(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this.scheduler.cleanInvalidReductionCodeList();

                          case 2:
                            res = _context3.sent;
                            if (res.success) _this.invalidReductionCodeListModel.clean();
                            return _context3.abrupt("return", res);

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                    }), _callee3);
                }))));
                (0, defineProperty["default"])(this, "observeValidReductionCodeList", (function(observer) {
                    var immediate = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    var subscription = _this.validReductionCodeListStream.observe(observer);
                    if (immediate) requestAnimationFrame((function() {
                        _this.updateValidReductionCodeListStreamWithCart(_this.cartInfoGetter());
                    }));
                    return subscription;
                }));
                (0, defineProperty["default"])(this, "observeInvalidReductionCodeList", (function(observer) {
                    var immediate = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    var subscription = _this.invalidReductionCodeListStream.observe(observer);
                    if (immediate) requestAnimationFrame((function() {
                        _this.updateInvalidReductionCodeListStreamWithCart(_this.cartInfoGetter());
                    }));
                    return subscription;
                }));
                this.cartInfoGetter = factory.cartInfoGetter;
                this.scheduler = new Scheduler((function(task) {
                    return factory.updateEffect(task);
                }));
                this.invalidReductionCodeListModel = new InvalidReductionCodeListModel;
                this.updateInvalidReductionCodeList();
                this.initInvalidReductionCodeStream();
                this.initValidReductionCodeStream();
            }
            _createClass(ReductionCodeService, [ {
                key: "reductionCodeMode",
                get: function() {
                    return {
                        discountCodeEnabled: true,
                        giftCardEnabled: false
                    };
                }
            }, {
                key: "initInvalidReductionCodeStream",
                value: function() {
                    var _store$get, _this2 = this;
                    var cartInfo = (null === (_store$get = store["default"].get()) || void 0 === _store$get ? void 0 : _store$get.cartInfo) || {};
                    this.updateInvalidReductionCodeListStreamWithCart(cartInfo);
                    services_SL_EventBus.on(CartEventBusEnum.UPDATE, (function(data) {
                        _this2.updateInvalidReductionCodeListStreamWithCart(data);
                    }));
                }
            }, {
                key: "initValidReductionCodeStream",
                value: function() {
                    var _store$get2, _this3 = this;
                    var cartInfo = (null === (_store$get2 = store["default"].get()) || void 0 === _store$get2 ? void 0 : _store$get2.cartInfo) || {};
                    this.updateValidReductionCodeListStreamWithCart(cartInfo);
                    services_SL_EventBus.on(CartEventBusEnum.UPDATE, (function(data) {
                        _this3.updateValidReductionCodeListStreamWithCart(data);
                    }));
                }
            }, {
                key: "updateValidReductionCodeListStreamWithCart",
                value: function(detail) {
                    this.validReductionCodeListStream.next(filterValidReductionCodeList(getReductionCodeListFromCart(detail)));
                }
            }, {
                key: "updateInvalidReductionCodeListStreamWithCart",
                value: function(detail) {
                    this.invalidReductionCodeListModel.mergeReductionCodeList(getReductionCodeListFromCart(detail));
                    this.invalidReductionCodeListStream.next(this.invalidReductionCodeListModel.list);
                }
            } ]);
            return ReductionCodeService;
        }();
        var InvalidReductionCodeListModel = function() {
            function InvalidReductionCodeListModel() {
                var _this4 = this;
                _classCallCheck(this, InvalidReductionCodeListModel);
                (0, defineProperty["default"])(this, "_list", []);
                (0, defineProperty["default"])(this, "clean", (function() {
                    _this4._list = [];
                }));
            }
            _createClass(InvalidReductionCodeListModel, [ {
                key: "mergeReductionCodeList",
                value: function(source) {
                    var list = [];
                    var visitedDiscountIdSet = new Set;
                    source.forEach((function(info) {
                        if ("discount-code" === info.type) {
                            info.payload.discountCode && visitedDiscountIdSet.add(info.payload.discountCode);
                            if (info.payload.discountCodeInvalid) list.push(info);
                            return;
                        }
                        return;
                    }));
                    this._list.forEach((function(info) {
                        if ("discount-code" === info.type) if (!visitedDiscountIdSet.has(info.payload.discountCode)) list.push(info);
                    }));
                    this._list = list;
                }
            }, {
                key: "list",
                get: function() {
                    return this._list;
                }
            } ]);
            return InvalidReductionCodeListModel;
        }();
        function translateErrorCodeToMsg(errorCode, reductionCode) {
            var _store$get3;
            null === (_store$get3 = store["default"].get()) || void 0 === _store$get3 || _store$get3.cartInfo;
            switch (errorCode) {
              case "DISCOUNT_CODE_INVALID":
                var invalidateMsg = t("validate.discount-code-error");
                if ("validate.discount-code-error" === invalidateMsg) invalidateMsg = t("cart.discount.code_error");
                return invalidateMsg;

              case "DISCOUNT_CODE_NO_REACH":
              case "MUTUAL_EXCLUDED_BY_LEVEL_PRICE":
                return t("cart.discount.code_item_unmatched", {
                    discountCode: reductionCode
                });

              case "MUTUAL_EXCLUDED_BY_TIME_LIMITED":
                return t("validate.mutual-excluded-by-time-limited");

              case "DISCOUNT_CODE_CAN_NOT_ACCUMULATE":
                return t("validate.discount-code-can-not-accumulate", {
                    discountCode: reductionCode
                });

              case "SHIPPING_PLAN_UNAVAILABLE":
                return t("validate.shipping_plan_unavailable", {
                    discountCode: reductionCode
                });

              case "DISCOUNT_CODE_NOT_ALLOW_OVERLAY":
                return t("cart.couponCode.notSupport.stacked");

              case "DISCOUNT_CODE_OVER_MAX_NUM":
                return t("cart.couponCode.exceedLimit");

              case "DISCOUNT_CODE_REPEAT":
                return t("cart.couponCode.existCode");

              default:
                return errorCode || "";
            }
        }
        var reductionCodeApply = function(params) {
            var _store$get4;
            var current = null === (_store$get4 = store["default"].get()) || void 0 === _store$get4 ? void 0 : _store$get4.currentCart;
            return request["default"].post(reductionCode_service.servicesList[current].endpointPromotionCode, services_objectSpread({}, params));
        };
        var reductionCodeDel = function(params) {
            var _store$get5;
            var current = null === (_store$get5 = store["default"].get()) || void 0 === _store$get5 ? void 0 : _store$get5.currentCart;
            var requestType = "post";
            if ("SL_CART" === current) {
                requestType = "delete";
                return request["default"][requestType](reductionCode_service.servicesList[current].endpointPromotionCodeDel, {
                    data: services_objectSpread({}, params)
                });
            }
            return request["default"][requestType](reductionCode_service.servicesList[current].endpointPromotionCodeDel, services_objectSpread({}, params));
        };
        var reductionCodeApplyFormat = function(task, cartInfo) {
            var _cartInfo$promotionCo, _store$get6;
            var inputCode = task.apply;
            var codes = null === cartInfo || void 0 === cartInfo ? void 0 : null === (_cartInfo$promotionCo = cartInfo.promotionCodes) || void 0 === _cartInfo$promotionCo ? void 0 : _cartInfo$promotionCo.map((function(item) {
                return item.promotionCode;
            }));
            var taskType = "APPLY";
            var cartConfig = (null === (_store$get6 = store["default"].get()) || void 0 === _store$get6 ? void 0 : _store$get6.cartConfig) || {};
            return {
                params: services_objectSpread({
                    inputCode,
                    codes
                }, cartConfig),
                taskType
            };
        };
        var reductionCodeClearFormat = function(discountInfo) {
            var _store$get7;
            var taskType = "CLEAR";
            var cartConfig = (null === (_store$get7 = store["default"].get()) || void 0 === _store$get7 ? void 0 : _store$get7.cartConfig) || {};
            var codes = discountInfo.filter((function(item) {
                return item.discountCodeInvalid;
            })).map((function(item) {
                return item.discountCode;
            }));
            var params = services_objectSpread({
                codes
            }, cartConfig);
            return {
                params,
                taskType
            };
        };
        var reductionCodeDelFormat = function(task) {
            var _store$get8;
            var taskType = "DELETE";
            var cartConfig = (null === (_store$get8 = store["default"].get()) || void 0 === _store$get8 ? void 0 : _store$get8.cartConfig) || {};
            var params = services_objectSpread({
                codes: [ task.removeDiscountCode ]
            }, cartConfig);
            return {
                params,
                taskType
            };
        };
        var reductionCodeUpdateCases = {
            APPLY: {
                service: reductionCodeApply,
                paramsFormat: reductionCodeApplyFormat
            },
            CLEAR: {
                service: reductionCodeDel,
                paramsFormat: reductionCodeClearFormat
            },
            DELETE: {
                service: reductionCodeDel,
                paramsFormat: reductionCodeDelFormat
            }
        };
        function createCartPageReductionCodeFactory() {
            var getUpdateParams = function(task) {
                var _store$get9;
                var detail = (null === (_store$get9 = store["default"].get()) || void 0 === _store$get9 ? void 0 : _store$get9.cartInfo) || {};
                if (task.apply) return reductionCodeUpdateCases.APPLY.paramsFormat(task, detail); else {
                    var discountInfo = detail.promotionCodes.map((function(promotion) {
                        return getDiscountCodeInfoFromCart(promotion);
                    })) || [];
                    var discountCodesInvalid = discountInfo.find((function(item) {
                        return item.discountCodeInvalid;
                    }));
                    if (task.clean && discountCodesInvalid) return reductionCodeUpdateCases.CLEAR.paramsFormat(discountInfo);
                    var hasRemoveDiscountCode = discountInfo.find((function(item) {
                        return item.discountCode === task.removeDiscountCode;
                    }));
                    if (!!hasRemoveDiscountCode) return reductionCodeUpdateCases.DELETE.paramsFormat(task);
                }
            };
            return {
                updateEffect: function() {
                    var _updateEffect = (0, asyncToGenerator["default"])(regenerator_default().mark((function _callee4(task) {
                        var _ref4, req, taskType, res;
                        return regenerator_default().wrap((function(_context4) {
                            while (1) switch (_context4.prev = _context4.next) {
                              case 0:
                                _ref4 = getUpdateParams(task) || {}, req = _ref4.params, taskType = _ref4.taskType;
                                _context4.prev = 1;
                                _context4.next = 4;
                                return reductionCodeUpdateCases[taskType || ""].service(req);

                              case 4:
                                res = _context4.sent;
                                _context4.next = 11;
                                break;

                              case 7:
                                _context4.prev = 7;
                                _context4.t0 = _context4["catch"](1);
                                console.error("failed to apply reduction code with", _context4.t0);
                                res = services_objectSpread(services_objectSpread({}, _context4.t0), {}, {
                                    success: false,
                                    code: _context4.t0.code || "FA_UNKNOWN"
                                });

                              case 11:
                                if (!(false !== res.success)) {
                                    _context4.next = 14;
                                    break;
                                }
                                services_SL_EventBus.emit("REFRESH_CART");
                                return _context4.abrupt("return", {
                                    success: true,
                                    code: ResponseCodeEnum.SUCCESS
                                });

                              case 14:
                                if (!(res.code !== ErrorCode.COUPON_INVALID)) {
                                    _context4.next = 16;
                                    break;
                                }
                                return _context4.abrupt("return", res);

                              case 16:
                                res.msg = translateErrorCodeToMsg(res.msg, (null === req || void 0 === req ? void 0 : req.inputCode) || "");
                                return _context4.abrupt("return", res);

                              case 18:
                              case "end":
                                return _context4.stop();
                            }
                        }), _callee4, null, [ [ 1, 7 ] ]);
                    })));
                    function updateEffect(_x3) {
                        return _updateEffect.apply(this, arguments);
                    }
                    return updateEffect;
                }(),
                cartInfoGetter: function() {
                    var _store$get10;
                    return (null === (_store$get10 = store["default"].get()) || void 0 === _store$get10 ? void 0 : _store$get10.cartInfo) || {};
                }
            };
        }
        function initCoupon() {
            store["default"].add({
                currentCart: "ONLINE_CART"
            });
            initReductionCodeComponent(new ReductionCodeService(createCartPageReductionCodeFactory()), "ONLINE_CART");
        }
        const trade_coupon = initCoupon;
        var checkout = __webpack_require__("../shared/browser/utils/checkout.js");
        async function verifyCart(ctx) {
            const cartService = valuer_cartService.withCartService(ctx);
            const cartItemList = valuer_cartItemList.withCartItemList(ctx);
            return cartService.verifyCartItemList(cartItemList);
        }
        function getCheckoutParams(ctx, verifiedItemList) {
            const cartService = valuer_cartService.withCartService(ctx);
            return cartService.getCheckoutParams(verifiedItemList);
        }
        const effect = {
            getCheckoutParams,
            verifyCart
        };
        class CheckoutModule {
            constructor(ctx, {checkoutHooks, $root, extra}) {
                this.ctx = ctx;
                this.$root = $root;
                this.checkoutHooks = checkoutHooks;
                this.extra = extra;
                this.isCheckoutProcessing = false;
                this._init();
            }
            destroy() {
                this._hooks.willDestroy.call();
            }
            async checkout() {
                if (this.isCheckoutProcessing) return;
                try {
                    this._processCheckout();
                    const cartService = valuer_cartService.withCartService(this.ctx);
                    const cartItemList = cartService.getCardItemList();
                    const {products, ...rest} = effect.getCheckoutParams(this.ctx, cartItemList);
                    checkout["default"].jump(products, {
                        ...rest,
                        ...this.extra
                    });
                } catch (e) {
                    this.checkoutHooks.checkoutFailed.call(e);
                    console.error("failed to trigger checkout", e);
                } finally {
                    this._completeCheckout();
                }
            }
            _processCheckout() {
                this.isCheckoutProcessing = true;
                this.$root.classList.add("btn--loading");
            }
            _completeCheckout() {
                this.isCheckoutProcessing = false;
                this.$root.classList.remove("btn--loading");
            }
            _init() {
                this._initHooks();
                this._initEventListener();
            }
            _initHooks() {
                this._hooks = {
                    willDestroy: new dist.SyncHook
                };
            }
            _initEventListener() {
                const onClick = this.checkout.bind(this);
                this.$root.addEventListener("click", onClick);
                this._hooks.willDestroy.tap((() => {
                    this.$root.removeEventListener("click", onClick);
                }));
            }
            _destroyHooks() {
                this._hooks.willDestroy.destroy();
            }
        }
        function newCheckoutModule(ctx, $root, extra) {
            const checkoutHooks = script_valuer.checkoutHooksValuer.takeCheckoutHooks(ctx);
            return new CheckoutModule(ctx, {
                checkoutHooks,
                $root,
                extra
            });
        }
        const module_checkout = {
            CheckoutModule,
            newCheckoutModule
        };
        class CheckoutErrorModule {
            constructor(ctx, {$root, checkoutHooks, cartActionHooks}) {
                this.ctx = ctx;
                this.$root = $root;
                this.checkoutHooks = checkoutHooks;
                this.cartActionHooks = cartActionHooks;
                this._init();
            }
            _init() {
                this.checkoutHooks.checkoutFailed.tap((err => {
                    if (err) if (err instanceof Error) this._setError(err.message); else this._setError((null === err || void 0 === err ? void 0 : err.msg) || (null === err || void 0 === err ? void 0 : err.code)); else this._setError("");
                }));
                this.cartActionHooks.skuRemoved.tap((skuList => {
                    if (Array.isArray(skuList) && skuList.length > 0) this._setError("");
                }));
            }
            _setError(msg) {
                if (msg) this.$root.classList.add("trade-cart-checkout-error"); else this.$root.classList.remove("trade-cart-checkout-error");
                this.$root.textContent = msg;
            }
        }
        function newCheckoutErrorModule(ctx, $root) {
            const checkoutHooks = script_valuer.checkoutHooksValuer.takeCheckoutHooks(ctx);
            const cartActionHooks = script_valuer.cartActionHooksValuer.takeCartActionHooks(ctx);
            return new CheckoutErrorModule(ctx, {
                $root,
                cartActionHooks,
                checkoutHooks
            });
        }
        const checkout_error = {
            CheckoutErrorModule,
            newCheckoutErrorModule
        };
        var paypal = __webpack_require__("../shared/browser/components/paypal/index.js");
        var createLogger = __webpack_require__("../shared/browser/utils/createLogger.js");
        const module_paypal_logger = {
            paypal: (0, createLogger["default"])("paypal")
        };
        let slibingNodeHeight = 0;
        class PaypalModule {
            constructor(ctx, elementId, pageType) {
                this.pageType = pageType;
                this.ctx = ctx;
                this.elementId = elementId;
                this.$element = document.getElementById(elementId);
                this.paypalComponent = null;
                if (this.$element) this._init(); else module_paypal_logger.paypal.error(`Failed to init paypal module. Can't get element with #${elementId}`);
            }
            _init() {
                slibingNodeHeight = slibingNodeHeight || document.getElementById(`${this.elementId}-slibing`).offsetHeight;
                this.paypalComponent = new paypal["default"]({
                    pageType: this.pageType,
                    domId: this.elementId,
                    height: slibingNodeHeight,
                    beforeCreateOrder: async () => {
                        const cartService = valuer_cartService.withCartService(this.ctx);
                        const cartItemList = cartService.getCardItemList();
                        module_paypal_logger.paypal.info(`[点击PayPal按钮][准备唤起弹窗][beforeCreateOrder]`);
                        return effect.getCheckoutParams(this.ctx, cartItemList);
                    },
                    beforeContinue: ({returnUrl} = {}) => {
                        module_paypal_logger.paypal.info(`[点击继续按钮][准备跳转][beforeContinue][${returnUrl}]`);
                    }
                });
                this.paypalComponent.render();
            }
        }
        function newPaypalModule(ctx, elementId, pageType) {
            return new PaypalModule(ctx, elementId, pageType);
        }
        const module_paypal = {
            PaypalModule,
            newPaypalModule
        };
        var script_service = __webpack_require__("./src/assets/cart/script/service/index.js");
        const contant = {
            MODULE_BUTTON_CHECKOUT: "button__trade-cart-checkout"
        };
        const OPEN_CART_BANNER = "NEED_OPEN_TOP_CART";
        const banner_useSuperScriptDecimals = state_selector.SL_State.get("theme.settings.superscript_decimals");
        const banner_encodeHTML = function(str) {
            if ("string" === typeof str) return str.replace(/<|&|>/g, (function(matches) {
                return {
                    "<": "&lt;",
                    ">": "&gt;",
                    "&": "&amp;"
                }[matches];
            }));
            return "";
        };
        class CartBanner {
            constructor() {
                this.loadFailedImgSet = new Set;
                this.needUnbindEleList = [];
            }
            init() {
                this.listenOpenBannerEvent();
                this.listenCartDataUpdate();
                this.listenSelectContentReport();
            }
            listenOpenBannerEvent() {
                window.SL_EventBus.on(OPEN_CART_BANNER, (({spuId, skuId, num}) => {
                    this.addedItemInfo = {
                        spuId,
                        skuId,
                        num
                    };
                }));
            }
            listenCartDataUpdate() {
                service["default"].cartEventBus.on(service["default"].CartEventBusEnum.UPDATE, (data => {
                    if (!this.addedItemInfo) return;
                    this.processCartInfoData(data);
                    this.reRender();
                    this.listenImageLoadEvent();
                }));
            }
            listenImageLoadEvent() {
                const _that = this;
                this._root.find(".trade-cart-sku-item-image-wrapper").each(((index, img) => {
                    this.needUnbindEleList.push(__SL_$__(img));
                    __SL_$__(img).on("error", (function() {
                        __SL_$__(img).parent().children(".trade-cart-sku-item-image-fallback").removeClass("hide");
                        __SL_$__(img).addClass("hide");
                        _that.loadFailedImgSet.add(__SL_$__(img).attr("origin-src"));
                    }));
                }));
            }
            listenSelectContentReport() {
                __SL_$__(".trade_mini_cart").on("click", ".trade-cart-sku-item-image", (function() {
                    const {productSource, skuId, name, skuAttrs, price, salePrice, itemNo} = __SL_$__(this).data();
                    if (1 === productSource) report_cartReport.selectContent({
                        skuId,
                        name,
                        price: parseInt(salePrice, 10) > parseInt(price, 10) ? salePrice : price,
                        skuAttrs,
                        itemNo
                    });
                }));
            }
            processCartInfoData(cartInfo) {
                const {count, totalAmount, activeItems} = cartInfo;
                const cartItems = [];
                null === activeItems || void 0 === activeItems ? void 0 : activeItems.forEach((({itemList}) => {
                    cartItems.push(...itemList || []);
                }));
                const addedItem = cartItems.find((({skuId, spuId}) => {
                    var _this$addedItemInfo, _this$addedItemInfo2;
                    return skuId === (null === (_this$addedItemInfo = this.addedItemInfo) || void 0 === _this$addedItemInfo ? void 0 : _this$addedItemInfo.skuId) && spuId === (null === (_this$addedItemInfo2 = this.addedItemInfo) || void 0 === _this$addedItemInfo2 ? void 0 : _this$addedItemInfo2.spuId);
                }));
                this.bannerData = {
                    count,
                    totalAmount,
                    addedItem
                };
            }
            getPriceInfo(data) {
                if (banner_useSuperScriptDecimals) {
                    const {formattedPriceStr} = convertPrice(data);
                    return formattedPriceStr;
                }
                return `${(0, CurrencyConvert.convertFormat)(data)}`;
            }
            getImageUrl(src) {
                return imgUrl(src, {
                    width: 100,
                    scale: 2
                });
            }
            getImageFallbackIfNecessary(data) {
                const url = this.getImageUrl(data.image);
                if (!url || this.loadFailedImgSet.has(data.image)) return `<div class="trade-cart-sku-item-image-fallback"></div>`;
                return `\n    <div class="hide trade-cart-sku-item-image-fallback"></div>\n    <img class="trade-cart-sku-item-image-wrapper" src="${url}" origin-src="${data.image}">\n    `;
            }
            getItemSkuAttr(skuAttr) {
                const skuContent = [];
                if (skuAttr && skuAttr.length) {
                    skuContent.push('<div class="trade-cart-sku-item-info-wrapper">');
                    skuAttr.forEach((data => {
                        skuContent.push(`\n        <div class="trade-cart-sku-item-info-spec body4">\n        <div class="trade-cart-sku-item-info-spec-key">${banner_encodeHTML(data.attributeName)}:</div>\n        <div class="trade-cart-sku-item-info-spec-value">${banner_encodeHTML(data.attributeValue)}</div>\n        </div>`);
                    }));
                    skuContent.push("</div>");
                }
                return skuContent.join("\n");
            }
            getItemSkuCustomTips(customProductTips) {
                const tipsContent = [];
                if (customProductTips && customProductTips.length) customProductTips.forEach((data => {
                    tipsContent.push(`\n        <div class="trade-cart-sku-item-info-customTip notranslate">${banner_encodeHTML(data)}</div>`);
                }));
                return tipsContent.join("\n");
            }
            getCardInfoContent(data) {
                return `\n    <div class="trade-cart-sku-item-info">\n    <div class="trade-cart-sku-item-info-title body2">${banner_encodeHTML(data.name)}</div>\n    ${this.getItemSkuAttr(data.skuAttributes)}\n    ${this.getItemSkuCustomTips(data.customProductTips)}\n    <div class="trade-cart-sku-item-info-amount body3">\n      <span class="notranslate body2 text_bold" data-amount=${data.price}>${this.getPriceInfo(data.price)}</span><span\n        class="notranslate body2 text_bold trade-cart-sku-item-info-amount-sign">x&nbsp;<span\n          class="notranslate body2 text_bold trade-cart-sku-item-info-amount-count">${this.addedItemInfo.num}</span>\n    </div>\n  </div>\n    `;
            }
            getImageContent(data) {
                var _data$groupId;
                return `\n    <a class="trade-cart-sku-item-image" href="/products/${data.spuId}"\n         data-product-source="${data.productSource}"\n         data-group-id="${null !== (_data$groupId = data.groupId) && void 0 !== _data$groupId ? _data$groupId : ""}"\n         data-name="${escape_default()(data.name)}"\n         data-sku-id="${data.skuId}"\n         data-spu-id="${data.spuId}"\n         data-sku-attrs="${escape_default()((data.skuAttr || []).join(","))}"\n         data-price="${data.price}"\n         data-sale-price="${data.salePrice}"\n         data-item-no="${data.itemNo}"\n    >\n      ${this.getImageFallbackIfNecessary(data)}\n    </a>`;
            }
            updateCartTotalInfo(count) {
                this._cartTotal.text(count);
            }
            updateSubtotal(subtotal) {
                this._subtotal.attr("data-amount", subtotal);
                this._subtotal.html(this.getPriceInfo(subtotal));
            }
            updateSkuCard(itemInfo) {
                const cardContent = [];
                cardContent.push(this.getImageContent(itemInfo));
                cardContent.push(this.getCardInfoContent(itemInfo));
                this._skuCard.html(cardContent.join("\n"));
            }
            reRender() {
                this.needUnbindEleList.forEach((ele => {
                    null === ele || void 0 === ele ? void 0 : ele.unbind();
                }));
                const {count, totalAmount, addedItem} = this.bannerData;
                this._root = __SL_$__(".trade_mini_cart");
                this._subtotal = this._root.find(".trade-cart-banner-summations-subtotal--price");
                this._cartTotal = this._root.find(".trade-cart-banner-summations-footer-cart-total");
                this._skuCard = this._root.find(".trade-cart-sku-item");
                this.updateCartTotalInfo(count);
                this.updateSubtotal(totalAmount);
                setTimeout((() => {
                    this.updateSkuCard(addedItem);
                }), 100);
            }
        }
        const banner = new CartBanner;
        const cart_tradeSettleConfig = state_selector.SL_State.get("tradeSettleConfig");
        const cart_useSuperScriptDecimals = state_selector.SL_State.get("theme.settings.superscript_decimals");
        const cart_logger = logger["default"].pipeOwner(`${sentryReport.Owner.cart} biz/cart/index.js`);
        const cart_cartToken = js_cookie_default().get("t_cart");
        class CartModule {
            constructor(cartType) {
                var _tradeSettleConfig$ca;
                this._cartType = cartType;
                this._skuCardComponent = null;
                this._ctx = null;
                this._showQuickPaymentBtn = !(null !== cart_tradeSettleConfig && void 0 !== cart_tradeSettleConfig && null !== (_tradeSettleConfig$ca = cart_tradeSettleConfig.cartSettleButtonConfig) && void 0 !== _tradeSettleConfig$ca && _tradeSettleConfig$ca.justShowSettleButton);
                this._initAfterLoaded();
            }
            _initCurrencyChangeListener() {
                const cartRootNode = this._root;
                state_selector.SL_State.on("currencyCode", (() => {
                    const amountNode = cartRootNode.find("[data-amount]");
                    amountNode.each((function() {
                        if (cart_useSuperScriptDecimals && !__SL_$__(this).hasClass("is-promotion")) {
                            const {formattedPriceStr} = convertPrice(__SL_$__(this).attr("data-amount"));
                            __SL_$__(this).html(formattedPriceStr);
                        } else __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).attr("data-amount")));
                    }));
                }));
            }
            _initAfterLoaded() {
                cart_logger.info(`normal 主站购物车 初始化 _initAfterLoaded`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
                if ("loading" !== document.readyState) this._init(); else document.addEventListener("DOMContentLoaded", (() => {
                    this._init();
                }));
            }
            _init() {
                cart_logger.info(`normal 主站购物车 全局化 cart service _init`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                script_service["default"].init();
                let ctx = context.background();
                ctx = context.withValue(ctx, valuer_cartService.valuer, cart["default"].takeCartService());
                ctx = script_valuer.checkoutHooksValuer.withCheckoutHooks(ctx);
                ctx = script_valuer.cartActionHooksValuer.withCartActionHooks(ctx);
                this._ctx = ctx;
                if ("main" === this._cartType) {
                    cart_logger.info(`normal 主站购物车 _init`, {
                        data: {
                            cartToken: cart_cartToken
                        },
                        action: sentryReport.Action.InitCart,
                        status: logger.Status.Start
                    });
                    initMainCartSticky();
                    trade_summations.init();
                    trade_coupon();
                    if (this._showQuickPaymentBtn) {
                        cart_logger.info(`normal 主站购物车 Paypal初始化 _init`, {
                            data: {
                                cartToken: cart_cartToken
                            },
                            action: sentryReport.Action.InitCart,
                            status: logger.Status.Start
                        });
                        this._initMainPaypalModule();
                    }
                    this._skuCardComponent = new sku_card(ctx, this._cartType);
                    this._skuCardComponent.init();
                    trade_summations.init();
                    cart_logger.info(`normal 主站购物车 SummationModule 初始化 _init`, {
                        data: {
                            cartToken: cart_cartToken
                        },
                        action: sentryReport.Action.InitCart,
                        status: logger.Status.Success
                    });
                    cart_logger.info(`normal 主站购物车 Coupon 初始化 _init`, {
                        data: {
                            cartToken: cart_cartToken
                        },
                        action: sentryReport.Action.InitCart,
                        status: logger.Status.Start
                    });
                    trade_coupon();
                } else {
                    listenHeaderSectionChange();
                    new topDrawer["default"]("cart-select");
                    this._initBanner();
                    trade_checkbox();
                    banner.init();
                    cart_logger.info(`normal 主站购物车 CartBanner 初始化 _init`, {
                        data: {
                            cartToken: cart_cartToken
                        },
                        action: sentryReport.Action.InitCart,
                        status: logger.Status.Start
                    });
                }
                this._initCheckoutModule();
                this._initCheckoutErrorModule();
                this._root = __SL_$__(`.${"main" === this._cartType ? "trade_cart" : "trade_mini_cart"}`);
                this._initCurrencyChangeListener();
                if ("/cart" === window.location.pathname && "main" === this._cartType) {
                    const cartInfo = state_selector.SL_State.get("cartInfo");
                    report_cartReport.viewCart(cartInfo);
                }
            }
            _initCheckoutModule() {
                cart_logger.info(`normal 主站购物车 结算按钮初始化 _initCheckoutModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                const nodeList = document.querySelectorAll(`.${this._cartType}__trade-cart-checkout [data-sl-module=${contant.MODULE_BUTTON_CHECKOUT}]`);
                const extra = {
                    stage: "main" === this._cartType ? tradeReport_const.cartPage.Cart : tradeReport_const.cartPage.MiniCart
                };
                nodeList.forEach((el => {
                    module_checkout.newCheckoutModule(this._ctx, el, extra);
                }));
                cart_logger.info(`normal 主站购物车 结算按钮初始化 _initCheckoutModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
            }
            _initCheckoutErrorModule() {
                cart_logger.info(`normal 主站购物车 结账错误初始化 _initCheckoutErrorModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                const nodeList = document.querySelectorAll(`.${this._cartType}__trade-cart-checkout-error`);
                nodeList.forEach((el => {
                    checkout_error.newCheckoutErrorModule(this._ctx, el);
                }));
                cart_logger.info(`normal 主站购物车 结账错误初始化 _initCheckoutErrorModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
            }
            _initMainPaypalModule() {
                cart_logger.info(`main 主站购物车 Paypal初始化 _initMainPaypalModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                module_paypal.newPaypalModule(this._ctx, "cart-spb", tradeReport_const.cartPage.Cart);
                module_paypal.newPaypalModule(this._ctx, "cart-spb-fixed", tradeReport_const.cartPage.Cart);
                cart_logger.info(`main 主站购物车 Paypal初始化 _initMainPaypalModule`, {
                    data: {
                        cartToken: cart_cartToken
                    },
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Success
                });
            }
            _initBanner() {
                cart_logger.info(`mini 主站购物车 banner初始化`, {
                    action: sentryReport.Action.InitCart,
                    status: logger.Status.Start
                });
                __SL_$__(document).on("click", ".trade-cart-banner--close", (() => {
                    window.SL_EventBus.emit(topDrawer_const.DRAWER_EVENT_NAME, {
                        id: "cart-select",
                        operator: topDrawer_const.DRAWER_OPERATORS.CLOSE
                    });
                }));
            }
        }
        let cartModule;
        function initCartModule(cartType) {
            cart_logger.info(`normal 主站购物车 初始化 initCartModule`, {
                data: {
                    cartToken: cart_cartToken,
                    cartType
                },
                action: sentryReport.Action.InitCart,
                status: logger.Status.Start
            });
            cartModule = new CartModule(cartType);
            cart_logger.info(`normal 主站购物车 初始化 initCartModule`, {
                data: {
                    cartToken: cart_cartToken,
                    cartType
                },
                action: sentryReport.Action.InitCart,
                status: logger.Status.Success
            });
        }
        function takeCartModule() {
            cart_logger.info(`normal 主站购物车 takeCartModule`, {
                data: {
                    cartToken: cart_cartToken,
                    cartModule
                },
                action: sentryReport.Action.TakeCart,
                status: logger.Status.Start
            });
            return cartModule;
        }
        const biz_cart = {
            initCartModule,
            takeCartModule
        };
        const main_logger = logger["default"].pipeOwner(`${sentryReport.Owner.MainCart} main.js`);
        const main_cartToken = js_cookie_default().get("t_cart");
        biz_cart.initCartModule("main");
        main_logger.info("main购物车主站", {
            data: {
                cartToken: main_cartToken
            },
            action: sentryReport.Action.InitCart,
            status: logger.Status.Start
        });
    },
    "../shared/browser/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getShoppingReminderTranslate: () => getShoppingReminderTranslate,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_newCurrency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/newCurrency/CurrencyConvert.js");
        var _sales_shoppingPromotionReminder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/components/hbs/sales/shoppingPromotionReminder/index.js");
        const getPromotionReminder = (0, _sales_shoppingPromotionReminder__WEBPACK_IMPORTED_MODULE_2__["default"])(_yy_sl_theme_shared_utils_newCurrency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_1__.convertFormat);
        const getShoppingReminderTranslate = (promotion, configs, options) => {
            const config = (0, _sales_shoppingPromotionReminder__WEBPACK_IMPORTED_MODULE_2__["default"])(_yy_sl_theme_shared_utils_newCurrency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_1__.convertFormat)(promotion, configs, options);
            return (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(config.path, config.params);
        };
        const __WEBPACK_DEFAULT_EXPORT__ = getPromotionReminder;
    },
    "../shared/browser/components/hbs/sales/shoppingPromotionReminder/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        const nc = _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.nullishCoalescingOperator;
        const BenefitTypeEnum = {
            PRICE: 1,
            DISCOUNT: 2,
            BUY_X_GET_Y: 12,
            NTH_PRICE: 11,
            FREELOWESTPRICE: 9,
            FREESHOPPING: 3,
            NTH_FIXED_PRICE: 14
        };
        const ThresholdTypeEnum = {
            PRICE: 0,
            NUMBER: 1
        };
        function defaultSafeString(str) {
            return str;
        }
        function getBenefitValue(benefitType, current, isNext = false) {
            if (benefitType === BenefitTypeEnum.FREELOWESTPRICE) return (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "benefitCount");
            if (benefitType === BenefitTypeEnum.NTH_FIXED_PRICE) {
                const extMap = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "extMap");
                return isNext ? (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(extMap, "nextFixedPrice") : (0, 
                _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(extMap, "fixedPrice");
            }
            return (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "benefit");
        }
        function shoppingPromotionReminder(currency, safeString = defaultSafeString) {
            function setWrapper(value, warper) {
                return safeString(warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${nc(warper.style, "")}"> ${value} </span>` : value);
            }
            function formatBenefitNum(str, type, options) {
                if (void 0 === str) return "";
                const num = Number(str) || 0;
                if ((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "thresholdType") === ThresholdTypeEnum.NUMBER) return num;
                if ((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.DISCOUNT || (0, 
                _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.BUY_X_GET_Y || (0, 
                _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.NTH_PRICE) return `${100 - num}%`;
                if ((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.NTH_FIXED_PRICE || (0, 
                _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.PRICE || (0, 
                _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "thresholdType") === ThresholdTypeEnum.PRICE) return `<span data-amount="${num}">${currency ? currency(num, options) : ""}</span>`;
                if ((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(type, "benefitType") === BenefitTypeEnum.FREELOWESTPRICE) return num;
                return "";
            }
            function getShoppingReminderConfig(promotion, configs = {}, options = {}) {
                const {lineBreak = false, warper} = configs;
                const {benefitType, promotionBenefitList = []} = nc(promotion, {});
                if (promotionBenefitList.length) {
                    let current;
                    let next;
                    let step;
                    if (!(0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 1 ])) if (promotionBenefitList[0].hit) {
                        step = 3;
                        current = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 0 ]);
                    } else {
                        step = 1;
                        next = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 0 ]);
                    } else if (promotionBenefitList[1].hit) {
                        step = 3;
                        current = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 1 ]);
                    } else {
                        step = 2;
                        current = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 0 ]);
                        next = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(promotionBenefitList, [ 1 ]);
                    }
                    const {extMap = {}, type: thresholdType} = current || next;
                    const basePath = `sales.promotion.cart_reminder.b${benefitType}_t${thresholdType}_s${step}`;
                    let completePath = basePath;
                    const {meetThreshold} = extMap;
                    if (benefitType === BenefitTypeEnum.BUY_X_GET_Y) if (1 === step && "true" === meetThreshold) if (0 === Number((0, 
                    _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "benefit"))) completePath = `${basePath}_achieve_free`; else completePath = `${basePath}_achieve_normal`; else if (0 === Number((0, 
                    _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "benefit")) || 0 === Number((0, 
                    _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "benefit"))) completePath = `${basePath}_free`; else completePath = `${basePath}_normal`;
                    if (benefitType === BenefitTypeEnum.NTH_PRICE) if (0 === Number((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "benefit"))) completePath = `${basePath}_free`; else if (0 === Number((0, 
                    _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "benefit"))) completePath = `${basePath}_next_free`; else completePath = `${basePath}_normal`;
                    const {prerequisiteShippingPriceRange} = extMap;
                    if (benefitType === BenefitTypeEnum.FREESHOPPING) if (prerequisiteShippingPriceRange) completePath = `${basePath}_upper_limit`; else completePath = `${basePath}_unlimited`;
                    const benefitCount = Number(nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "benefitCount"), (0, 
                    _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "benefitCount")));
                    return {
                        path: thresholdType > -1 ? completePath : " ",
                        params: {
                            saved: setWrapper(formatBenefitNum(getBenefitValue(benefitType, current), {
                                benefitType
                            }, options), {
                                ...warper,
                                class: `sales__promotionReminder-saved  custom-sale-color ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }),
                            willSave: setWrapper(formatBenefitNum(getBenefitValue(benefitType, next, true), {
                                benefitType
                            }, options), {
                                ...warper,
                                class: `sales__promotionReminder-willSave custom-sale-color ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }),
                            currentMinThreshold: setWrapper((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(current, "minThreshold"), {
                                ...warper,
                                class: `sales__promotionReminder-threshold custom-sale-color ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }),
                            nextMinThreshold: setWrapper((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "minThreshold"), {
                                ...warper,
                                class: `sales__promotionReminder-threshold custom-sale-color ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }),
                            threshold: setWrapper(formatBenefitNum((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(next, "amount"), {
                                thresholdType
                            }, options), {
                                ...warper,
                                class: `sales__promotionReminder-threshold custom-sale-color ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }),
                            br: lineBreak ? setWrapper("<br/>") : setWrapper("<i></i>"),
                            upperLimit: benefitType === BenefitTypeEnum.FREESHOPPING && prerequisiteShippingPriceRange ? currency && currency(prerequisiteShippingPriceRange, options) : void 0,
                            benefitCount: benefitCount >= 0 ? setWrapper(benefitCount, {
                                ...warper,
                                class: `sales__promotionReminder--benefitCount ${nc((0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(warper, "class"), "")}`
                            }) : "",
                            extMap
                        },
                        step
                    };
                }
                return {
                    path: "",
                    params: {},
                    step: 0
                };
            }
            return getShoppingReminderConfig;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = shoppingPromotionReminder;
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/cart/script/main.js")));
    __webpack_require__.O();
} ]);