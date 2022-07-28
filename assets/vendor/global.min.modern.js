(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "vendor" ], {
    "./node_modules/@funnyecho/hamon/dist/index.js": function(__unused_webpack_module, exports) {
        "use strict";
        var __extends = this && this.__extends || function() {
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            return function(d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
            };
        }();
        var __read = this && this.__read || function(o, n) {
            var m = "function" === typeof Symbol && o[Symbol.iterator];
            if (!m) return o;
            var r, e, i = m.call(o), ar = [];
            try {
                while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {
                    error
                };
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        };
        var __spread = this && this.__spread || function() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
        };
        var __values = this && this.__values || function(o) {
            var s = "function" === typeof Symbol && Symbol.iterator, m = s && o[s], i = 0;
            if (m) return m.call(o);
            if (o && "number" === typeof o.length) return {
                next: function() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function once(fn) {
            var called = false;
            return function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (called) return;
                called = true;
                fn.apply(void 0, __spread(args));
            };
        }
        function invokeSeriesNext(observer, args, list) {
            var onComplete;
            if ("function" === typeof observer.onComplete) onComplete = observer.onComplete; else onComplete = function(err, result) {};
            if (!list.length) {
                if (observer.shouldWaterfall) onComplete(null, args[0]); else onComplete(null, void 0);
                return;
            }
            var tap = list.shift();
            var downstreamTaps = list;
            var downstreamArgs = Array.from(args);
            var nextArgs = __spread(args, [ function(err, result) {
                if (null != err) {
                    onComplete(err);
                    return;
                }
                if (void 0 !== result && true === observer.shouldBail) {
                    onComplete(null, result);
                    return;
                }
                if (void 0 !== result && true === observer.shouldWaterfall) downstreamArgs[0] = result;
                invokeSeriesNext(observer, downstreamArgs, downstreamTaps);
            } ]);
            tap.fn.apply(tap, __spread(nextArgs));
        }
        function invokeParallel(observer, args, list) {
            var e_1, _a;
            var onComplete;
            if ("function" === typeof observer.onComplete) onComplete = observer.onComplete; else onComplete = function(err, result) {};
            if (!list.length) {
                onComplete(null, void 0);
                return;
            }
            var parallelSize = list.length;
            var nextArgs = __spread(args, [ function(err, result) {
                if (null != err) {
                    onComplete(err);
                    return;
                }
                if (void 0 !== result && true === observer.shouldBail) {
                    onComplete(null, result);
                    return;
                }
                --parallelSize;
                if (parallelSize <= 0) {
                    onComplete(null, args[0]);
                    return;
                }
            } ]);
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var option = list_1_1.value;
                    option.fn.apply(option, __spread(nextArgs));
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
        function invokeSynchronously(observer, args, list) {
            var e_2, _a;
            if (!list.length) if (observer.shouldWaterfall) return args[0]; else return;
            var downstreamArgs = Array.from(args);
            try {
                for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var option = list_2_1.value;
                    var fn = option.fn;
                    var result = fn.apply(void 0, __spread(downstreamArgs));
                    if (void 0 !== result && true === observer.shouldBail) return result;
                    if (void 0 !== result && true === observer.shouldWaterfall) downstreamArgs[0] = result;
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally {
                try {
                    if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
                } finally {
                    if (e_2) throw e_2.error;
                }
            }
            if (observer.shouldWaterfall) return downstreamArgs[0]; else return;
        }
        var Hook = function() {
            function Hook(bucketHashcode) {
                this.tapIdSeed = 0;
                this.presetTapBucket = new Set;
                this.tapBuckets = new Map;
                this.tapOptionsCache = new Map;
                this.bucketHashcode = bucketHashcode;
            }
            Hook.prototype.exhaust = function() {
                this.presetTapBucket.clear();
                this.tapBuckets.clear();
                this.tapOptionsCache.clear();
            };
            Hook.prototype.destroy = function() {
                this.exhaust();
            };
            Hook.prototype.insertSyncTap = function(fn, bucket) {
                return this.tapping(fn, bucket);
            };
            Hook.prototype.insertAsyncTap = function(fn, bucket) {
                function asyncTapFn() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var invokeCb = args[args.length - 1];
                    try {
                        fn.apply(void 0, __spread(args));
                    } catch (e) {
                        invokeCb(e);
                    }
                }
                return this.tapping(asyncTapFn, bucket);
            };
            Hook.prototype.insertPromiseTap = function(fn, bucket) {
                function promiseTapFn() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var invokeCb = args.pop();
                    var invokeArgs = args;
                    try {
                        Promise.resolve(fn.apply(void 0, __spread(invokeArgs))).then((function(tapResult) {
                            invokeCb(null, tapResult);
                        }), (function(e) {
                            invokeCb(e);
                        }));
                    } catch (e) {
                        invokeCb(e);
                    }
                }
                return this.tapping(promiseTapFn, bucket);
            };
            Hook.prototype.invokeSeries = function(args, observer) {
                if (!observer) observer = {};
                if ("function" === typeof observer.onComplete) observer.onComplete = once(observer.onComplete);
                invokeSeriesNext(observer, args, Array.from(this.getBucketTaps(args)));
            };
            Hook.prototype.invokeParallel = function(args, observer) {
                if (!observer) observer = {};
                if ("function" === typeof observer.onComplete) observer.onComplete = once(observer.onComplete);
                invokeParallel(observer, args, Array.from(this.getBucketTaps(args)));
            };
            Hook.prototype.invokeSynchronously = function(args, observer) {
                if (!observer) observer = {};
                return invokeSynchronously(observer, args, Array.from(this.getBucketTaps(args)));
            };
            Hook.prototype.getBucketTaps = function(args) {
                var e_3, _a;
                var presetTaps = Array.from(this.presetTapBucket);
                var bucketTaps = [];
                if ("function" === typeof this.bucketHashcode) {
                    var bucket = this.bucketHashcode.apply(this, __spread(args));
                    if (this.tapBuckets.has(bucket)) bucketTaps = Array.from(this.tapBuckets.get(bucket));
                }
                var selectedTapIds = new Set(__spread(presetTaps, bucketTaps));
                var selectedTapOptions = new Set;
                try {
                    for (var selectedTapIds_1 = __values(selectedTapIds), selectedTapIds_1_1 = selectedTapIds_1.next(); !selectedTapIds_1_1.done; selectedTapIds_1_1 = selectedTapIds_1.next()) {
                        var tapId = selectedTapIds_1_1.value;
                        selectedTapOptions.add(this.tapOptionsCache.get(tapId));
                    }
                } catch (e_3_1) {
                    e_3 = {
                        error: e_3_1
                    };
                } finally {
                    try {
                        if (selectedTapIds_1_1 && !selectedTapIds_1_1.done && (_a = selectedTapIds_1.return)) _a.call(selectedTapIds_1);
                    } finally {
                        if (e_3) throw e_3.error;
                    }
                }
                return selectedTapOptions;
            };
            Hook.prototype.tapping = function(fn, bucketHash) {
                var _this = this;
                var tapBucket = this.presetTapBucket;
                if (bucketHash) {
                    if (!this.tapBuckets.has(bucketHash)) this.tapBuckets.set(bucketHash, new Set);
                    tapBucket = this.tapBuckets.get(bucketHash);
                }
                var tapId = this.generateTapId();
                var options = {
                    fn,
                    bucket: bucketHash
                };
                this.tapOptionsCache.set(tapId, options);
                tapBucket.add(tapId);
                return function() {
                    _this.popoutTap(tapId);
                };
            };
            Hook.prototype.popoutTap = function(tapId) {
                var options = this.tapOptionsCache.get(tapId);
                if (!options) return;
                var bucketHash = options.bucket;
                if (!bucketHash) this.presetTapBucket.delete(tapId); else if (this.tapBuckets.has(bucketHash)) this.tapBuckets.get(bucketHash).delete(tapId);
                this.tapOptionsCache.delete(tapId);
            };
            Hook.prototype.generateTapId = function() {
                return "tap:" + ++this.tapIdSeed + "?" + Date.now();
            };
            return Hook;
        }();
        exports.Hook = Hook;
        var SyncTapHook = function(_super) {
            __extends(SyncTapHook, _super);
            function SyncTapHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            SyncTapHook.prototype.tap = function(fn, bucket) {
                return this.insertSyncTap(fn, bucket);
            };
            return SyncTapHook;
        }(Hook);
        exports.SyncTapHook = SyncTapHook;
        var AsyncTapHook = function(_super) {
            __extends(AsyncTapHook, _super);
            function AsyncTapHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncTapHook.prototype.tapAsync = function(fn, bucket) {
                return this.insertAsyncTap(fn, bucket);
            };
            AsyncTapHook.prototype.tapPromise = function(fn, bucket) {
                return this.insertPromiseTap(fn, bucket);
            };
            return AsyncTapHook;
        }(Hook);
        exports.AsyncTapHook = AsyncTapHook;
        var SyncHook = function(_super) {
            __extends(SyncHook, _super);
            function SyncHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            SyncHook.prototype.call = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                this.invokeSynchronously(args);
            };
            return SyncHook;
        }(SyncTapHook);
        exports.SyncHook = SyncHook;
        var SyncBailHook = function(_super) {
            __extends(SyncBailHook, _super);
            function SyncBailHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            SyncBailHook.prototype.call = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return this.invokeSynchronously(args, {
                    shouldBail: true
                });
            };
            return SyncBailHook;
        }(SyncTapHook);
        exports.SyncBailHook = SyncBailHook;
        var SyncWaterfallHook = function(_super) {
            __extends(SyncWaterfallHook, _super);
            function SyncWaterfallHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            SyncWaterfallHook.prototype.call = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return this.invokeSynchronously(args, {
                    shouldWaterfall: true
                });
            };
            return SyncWaterfallHook;
        }(SyncTapHook);
        exports.SyncWaterfallHook = SyncWaterfallHook;
        var AsyncParallelHook = function(_super) {
            __extends(AsyncParallelHook, _super);
            function AsyncParallelHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncParallelHook.prototype.callAsync = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var asyncCb = args.pop();
                this.invokeParallel(args, {
                    onComplete: function(err) {
                        if (null != err) asyncCb(err); else asyncCb();
                    }
                });
            };
            AsyncParallelHook.prototype.callPromise = function() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return new Promise((function(resolve, reject) {
                    _this.invokeParallel(args, {
                        onComplete: function(err) {
                            if (null != err) reject(err); else resolve();
                        }
                    });
                }));
            };
            return AsyncParallelHook;
        }(AsyncTapHook);
        exports.AsyncParallelHook = AsyncParallelHook;
        var AsyncParallelBailHook = function(_super) {
            __extends(AsyncParallelBailHook, _super);
            function AsyncParallelBailHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncParallelBailHook.prototype.callAsync = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var asyncCb = args.pop();
                this.invokeParallel(args, {
                    shouldBail: true,
                    onComplete: asyncCb
                });
            };
            AsyncParallelBailHook.prototype.callPromise = function() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return new Promise((function(resolve, reject) {
                    _this.invokeParallel(args, {
                        shouldBail: true,
                        onComplete: function(err, result) {
                            if (null != err) reject(err); else resolve(result);
                        }
                    });
                }));
            };
            return AsyncParallelBailHook;
        }(AsyncTapHook);
        exports.AsyncParallelBailHook = AsyncParallelBailHook;
        var AsyncSeriesHook = function(_super) {
            __extends(AsyncSeriesHook, _super);
            function AsyncSeriesHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncSeriesHook.prototype.callAsync = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var asyncCb = args.pop();
                this.invokeSeries(args, {
                    onComplete: function(err) {
                        if (null != err) asyncCb(err); else asyncCb();
                    }
                });
            };
            AsyncSeriesHook.prototype.callPromise = function() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return new Promise((function(resolve, reject) {
                    _this.invokeSeries(args, {
                        onComplete: function(err) {
                            if (null != err) reject(err); else resolve();
                        }
                    });
                }));
            };
            return AsyncSeriesHook;
        }(AsyncTapHook);
        exports.AsyncSeriesHook = AsyncSeriesHook;
        var AsyncSeriesBailHook = function(_super) {
            __extends(AsyncSeriesBailHook, _super);
            function AsyncSeriesBailHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncSeriesBailHook.prototype.callAsync = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var asyncCb = args.pop();
                this.invokeSeries(args, {
                    shouldBail: true,
                    onComplete: asyncCb
                });
            };
            AsyncSeriesBailHook.prototype.callPromise = function() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return new Promise((function(resolve, reject) {
                    _this.invokeSeries(args, {
                        shouldBail: true,
                        onComplete: function(err, result) {
                            if (null != err) reject(err); else resolve(result);
                        }
                    });
                }));
            };
            return AsyncSeriesBailHook;
        }(AsyncTapHook);
        exports.AsyncSeriesBailHook = AsyncSeriesBailHook;
        var AsyncSeriesWaterfallHook = function(_super) {
            __extends(AsyncSeriesWaterfallHook, _super);
            function AsyncSeriesWaterfallHook() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            AsyncSeriesWaterfallHook.prototype.callAsync = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var asyncCb = args.pop();
                this.invokeSeries(args, {
                    shouldWaterfall: true,
                    onComplete: asyncCb
                });
            };
            AsyncSeriesWaterfallHook.prototype.callPromise = function() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                return new Promise((function(resolve, reject) {
                    _this.invokeSeries(args, {
                        shouldWaterfall: true,
                        onComplete: function(err, result) {
                            if (null != err) reject(err); else resolve(result);
                        }
                    });
                }));
            };
            return AsyncSeriesWaterfallHook;
        }(AsyncTapHook);
        exports.AsyncSeriesWaterfallHook = AsyncSeriesWaterfallHook;
        exports["default"] = {
            SyncHook,
            SyncBailHook,
            SyncWaterfallHook,
            AsyncSeriesHook,
            AsyncSeriesBailHook,
            AsyncSeriesWaterfallHook,
            AsyncParallelHook,
            AsyncParallelBailHook
        };
    },
    "./node_modules/@sl/logger/lib/index.es.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            LogStatus: () => o
        });
        var n, o, t, i = function() {
            return i = Object.assign || function(n) {
                for (var o, t = 1, i = arguments.length; t < i; t++) for (var r in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
                return n;
            }, i.apply(this, arguments);
        };
        !function(n) {
            n.P0 = "P0", n.P1 = "P1", n.P2 = "P2";
        }(n || (n = {})), function(n) {
            n.Start = "开始", n.Success = "成功", n.Failure = "失败";
        }(o || (o = {})), function(n) {
            n.Info = "info", n.Log = "log", n.Warn = "warn", n.Error = "error";
        }(t || (t = {}));
        var r = function n(o) {
            var r = this;
            this.options = {
                owner: "",
                action: "",
                transports: []
            }, this.withOwner = function(o) {
                return new n(i(i({}, r.options), {
                    owner: o
                }));
            }, this.pipeOwner = function(o) {
                var t = "";
                return t = r.options.owner ? "".concat(r.options.owner, ".").concat(o) : o, new n(i(i({}, r.options), {
                    owner: t
                }));
            }, this.withAction = function(o) {
                return new n(i(i({}, r.options), {
                    action: o
                }));
            }, this.pipeTransport = function() {
                for (var o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
                var e = r.options.transports.concat(o);
                return new n(i(i({}, r.options), {
                    transports: e
                }));
            }, this.report = function(n, o, t) {
                !function(n, o) {
                    var t = n;
                    o.forEach((function(n) {
                        var o = n(t);
                        o && (t = o);
                    }));
                }(i(i({
                    level: n,
                    owner: r.options.owner,
                    action: r.options.action
                }, t), {
                    message: o
                }), r.options.transports);
            }, this.info = function(n, o) {
                r.report(t.Info, n, o);
            }, this.log = function(n, o) {
                r.report(t.Log, n, o);
            }, this.warn = function(n, o) {
                r.report(t.Warn, n, o);
            }, this.error = function(n, o) {
                r.report(t.Error, n, o);
            }, this.options = i(i({}, this.options), o);
        }, e = new r;
        Object.defineProperty(e, "options", {
            writable: !1,
            configurable: !1
        });
    },
    "./node_modules/js-cookie/src/js.cookie.js": (module, exports, __webpack_require__) => {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(factory) {
            var registeredInModuleLoader;
            if (true) {
                !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                registeredInModuleLoader = true;
            }
            if (true) {
                module.exports = factory();
                registeredInModuleLoader = true;
            }
            if (!registeredInModuleLoader) {
                var OldCookies = window.Cookies;
                var api = window.Cookies = factory();
                api.noConflict = function() {
                    window.Cookies = OldCookies;
                    return api;
                };
            }
        })((function() {
            function extend() {
                var i = 0;
                var result = {};
                for (;i < arguments.length; i++) {
                    var attributes = arguments[i];
                    for (var key in attributes) result[key] = attributes[key];
                }
                return result;
            }
            function decode(s) {
                return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            }
            function init(converter) {
                function api() {}
                function set(key, value, attributes) {
                    if ("undefined" === typeof document) return;
                    attributes = extend({
                        path: "/"
                    }, api.defaults, attributes);
                    if ("number" === typeof attributes.expires) attributes.expires = new Date(1 * new Date + 864e5 * attributes.expires);
                    attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                    try {
                        var result = JSON.stringify(value);
                        if (/^[\{\[]/.test(result)) value = result;
                    } catch (e) {}
                    value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var stringifiedAttributes = "";
                    for (var attributeName in attributes) {
                        if (!attributes[attributeName]) continue;
                        stringifiedAttributes += "; " + attributeName;
                        if (true === attributes[attributeName]) continue;
                        stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
                    }
                    return document.cookie = key + "=" + value + stringifiedAttributes;
                }
                function get(key, json) {
                    if ("undefined" === typeof document) return;
                    var jar = {};
                    var cookies = document.cookie ? document.cookie.split("; ") : [];
                    var i = 0;
                    for (;i < cookies.length; i++) {
                        var parts = cookies[i].split("=");
                        var cookie = parts.slice(1).join("=");
                        if (!json && '"' === cookie.charAt(0)) cookie = cookie.slice(1, -1);
                        try {
                            var name = decode(parts[0]);
                            cookie = (converter.read || converter)(cookie, name) || decode(cookie);
                            if (json) try {
                                cookie = JSON.parse(cookie);
                            } catch (e) {}
                            jar[name] = cookie;
                            if (key === name) break;
                        } catch (e) {}
                    }
                    return key ? jar[key] : jar;
                }
                api.set = set;
                api.get = function(key) {
                    return get(key, false);
                };
                api.getJSON = function(key) {
                    return get(key, true);
                };
                api.remove = function(key, attributes) {
                    set(key, "", extend(attributes, {
                        expires: -1
                    }));
                };
                api.defaults = {};
                api.withConverter = init;
                return api;
            }
            return init((function() {}));
        }));
    },
    "./node_modules/lodash/_baseGetTag.js": module => {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        module.exports = objectToString;
    },
    "./node_modules/lodash/_basePropertyOf.js": module => {
        function basePropertyOf(object) {
            return function(key) {
                return null == object ? void 0 : object[key];
            };
        }
        module.exports = basePropertyOf;
    },
    "./node_modules/lodash/_escapeHtmlChar.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var basePropertyOf = __webpack_require__("./node_modules/lodash/_basePropertyOf.js");
        var htmlEscapes = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        module.exports = escapeHtmlChar;
    },
    "./node_modules/lodash/_freeGlobal.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
        module.exports = freeGlobal;
    },
    "./node_modules/lodash/_getPrototype.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype;
    },
    "./node_modules/lodash/_overArg.js": module => {
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg));
            };
        }
        module.exports = overArg;
    },
    "./node_modules/lodash/_root.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");
        var freeSelf = "object" == typeof self && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root;
    },
    "./node_modules/lodash/debounce.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__("./node_modules/lodash/isObject.js"), now = __webpack_require__("./node_modules/lodash/now.js"), toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");
        var FUNC_ERROR_TEXT = "Expected a function";
        var nativeMax = Math.max, nativeMin = Math.min;
        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = void 0;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = void 0;
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = void 0;
                return result;
            }
            function cancel() {
                if (void 0 !== timerId) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = void 0;
            }
            function flush() {
                return void 0 === timerId ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (void 0 === timerId) return leadingEdge(lastCallTime);
                    if (maxing) {
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (void 0 === timerId) timerId = setTimeout(timerExpired, wait);
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        module.exports = debounce;
    },
    "./node_modules/lodash/escape.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var escapeHtmlChar = __webpack_require__("./node_modules/lodash/_escapeHtmlChar.js"), toString = __webpack_require__("./node_modules/lodash/toString.js");
        var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        module.exports = escape;
    },
    "./node_modules/lodash/isObject.js": module => {
        function isObject(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
        }
        module.exports = isObject;
    },
    "./node_modules/lodash/isObjectLike.js": module => {
        function isObjectLike(value) {
            return null != value && "object" == typeof value;
        }
        module.exports = isObjectLike;
    },
    "./node_modules/lodash/isPlainObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"), getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"), isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");
        var objectTag = "[object Object]";
        var funcProto = Function.prototype, objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectCtorString = funcToString.call(Object);
        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
            var proto = getPrototype(value);
            if (null === proto) return true;
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        module.exports = isPlainObject;
    },
    "./node_modules/lodash/now.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var root = __webpack_require__("./node_modules/lodash/_root.js");
        var now = function() {
            return root.Date.now();
        };
        module.exports = now;
    },
    "./node_modules/lodash/throttle.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var debounce = __webpack_require__("./node_modules/lodash/debounce.js"), isObject = __webpack_require__("./node_modules/lodash/isObject.js");
        var FUNC_ERROR_TEXT = "Expected a function";
        function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            if (isObject(options)) {
                leading = "leading" in options ? !!options.leading : leading;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
                leading,
                maxWait: wait,
                trailing
            });
        }
        module.exports = throttle;
    },
    "./node_modules/lodash/toNumber.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/lodash/toString.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/ssr-window/ssr-window.esm.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            extend: () => extend,
            getDocument: () => getDocument,
            getWindow: () => getWindow,
            ssrDocument: () => ssrDocument,
            ssrWindow: () => ssrWindow
        });
        function isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (void 0 === target) target = {};
            if (void 0 === src) src = {};
            Object.keys(src).forEach((function(key) {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        var ssrDocument = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null;
            },
            querySelectorAll: function() {
                return [];
            },
            getElementById: function() {
                return null;
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                };
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return [];
                    }
                };
            },
            createElementNS: function() {
                return {};
            },
            importNode: function() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function getDocument() {
            var doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        var ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState: function() {},
                pushState: function() {},
                go: function() {},
                back: function() {}
            },
            CustomEvent: function() {
                return this;
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return "";
                    }
                };
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {},
            matchMedia: function() {
                return {};
            },
            requestAnimationFrame: function(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame: function(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function getWindow() {
            var win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
    },
    "./node_modules/swiper/esm/components/core/core-class.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => core_class
        });
        var ssr_window_esm = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        var dom = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
        var utils = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
        var support;
        function calcSupport() {
            var window = (0, ssr_window_esm.getWindow)();
            var document = (0, ssr_window_esm.getDocument)();
            return {
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                pointerEvents: !!window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0,
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window;
                }(),
                passiveListener: function() {
                    var supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, "passive", {
                            get: function() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        var device;
        function calcDevice(_temp) {
            var _ref = void 0 === _temp ? {} : _temp, userAgent = _ref.userAgent;
            var support = getSupport();
            var window = (0, ssr_window_esm.getWindow)();
            var platform = window.navigator.platform;
            var ua = userAgent || window.navigator.userAgent;
            var device = {
                ios: false,
                android: false
            };
            var screenWidth = window.screen.width;
            var screenHeight = window.screen.height;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            var windows = "Win32" === platform;
            var macos = "MacIntel" === platform;
            var iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!device) device = calcDevice(overrides);
            return device;
        }
        var browser;
        function calcBrowser() {
            var window = (0, ssr_window_esm.getWindow)();
            function isSafari() {
                var ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isEdge: !!window.navigator.userAgent.match(/Edge/g),
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        var supportsResizeObserver = function() {
            var window = (0, ssr_window_esm.getWindow)();
            return "undefined" !== typeof window.ResizeObserver;
        };
        const resize = {
            name: "resize",
            create: function() {
                var swiper = this;
                (0, utils.extend)(swiper, {
                    resize: {
                        observer: null,
                        createObserver: function() {
                            if (!swiper || swiper.destroyed || !swiper.initialized) return;
                            swiper.resize.observer = new ResizeObserver((function(entries) {
                                var width = swiper.width, height = swiper.height;
                                var newWidth = width;
                                var newHeight = height;
                                entries.forEach((function(_ref) {
                                    var contentBoxSize = _ref.contentBoxSize, contentRect = _ref.contentRect, target = _ref.target;
                                    if (target && target !== swiper.el) return;
                                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                                }));
                                if (newWidth !== width || newHeight !== height) swiper.resize.resizeHandler();
                            }));
                            swiper.resize.observer.observe(swiper.el);
                        },
                        removeObserver: function() {
                            if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
                                swiper.resize.observer.unobserve(swiper.el);
                                swiper.resize.observer = null;
                            }
                        },
                        resizeHandler: function() {
                            if (!swiper || swiper.destroyed || !swiper.initialized) return;
                            swiper.emit("beforeResize");
                            swiper.emit("resize");
                        },
                        orientationChangeHandler: function() {
                            if (!swiper || swiper.destroyed || !swiper.initialized) return;
                            swiper.emit("orientationchange");
                        }
                    }
                });
            },
            on: {
                init: function(swiper) {
                    var window = (0, ssr_window_esm.getWindow)();
                    if (swiper.params.resizeObserver && supportsResizeObserver()) {
                        swiper.resize.createObserver();
                        return;
                    }
                    window.addEventListener("resize", swiper.resize.resizeHandler);
                    window.addEventListener("orientationchange", swiper.resize.orientationChangeHandler);
                },
                destroy: function(swiper) {
                    var window = (0, ssr_window_esm.getWindow)();
                    swiper.resize.removeObserver();
                    window.removeEventListener("resize", swiper.resize.resizeHandler);
                    window.removeEventListener("orientationchange", swiper.resize.orientationChangeHandler);
                }
            }
        };
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
        var Observer = {
            attach: function(target, options) {
                if (void 0 === options) options = {};
                var window = (0, ssr_window_esm.getWindow)();
                var swiper = this;
                var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                var observer = new ObserverFunc((function(mutations) {
                    if (1 === mutations.length) {
                        swiper.emit("observerUpdate", mutations[0]);
                        return;
                    }
                    var observerUpdate = function() {
                        swiper.emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                swiper.observer.observers.push(observer);
            },
            init: function() {
                var swiper = this;
                if (!swiper.support.observer || !swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    var containerParents = swiper.$el.parents();
                    for (var i = 0; i < containerParents.length; i += 1) swiper.observer.attach(containerParents[i]);
                }
                swiper.observer.attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                swiper.observer.attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            },
            destroy: function() {
                var swiper = this;
                swiper.observer.observers.forEach((function(observer) {
                    observer.disconnect();
                }));
                swiper.observer.observers = [];
            }
        };
        const observer = {
            name: "observer",
            params: {
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            },
            create: function() {
                var swiper = this;
                (0, utils.bindModuleMethods)(swiper, {
                    observer: _extends({}, Observer, {
                        observers: []
                    })
                });
            },
            on: {
                init: function(swiper) {
                    swiper.observer.init();
                },
                destroy: function(swiper) {
                    swiper.observer.destroy();
                }
            }
        };
        const modular = {
            useParams: function(instanceParams) {
                var instance = this;
                if (!instance.modules) return;
                Object.keys(instance.modules).forEach((function(moduleName) {
                    var module = instance.modules[moduleName];
                    if (module.params) (0, utils.extend)(instanceParams, module.params);
                }));
            },
            useModules: function(modulesParams) {
                if (void 0 === modulesParams) modulesParams = {};
                var instance = this;
                if (!instance.modules) return;
                Object.keys(instance.modules).forEach((function(moduleName) {
                    var module = instance.modules[moduleName];
                    var moduleParams = modulesParams[moduleName] || {};
                    if (module.on && instance.on) Object.keys(module.on).forEach((function(moduleEventName) {
                        instance.on(moduleEventName, module.on[moduleEventName]);
                    }));
                    if (module.create) module.create.bind(instance)(moduleParams);
                }));
            }
        };
        const events_emitter = {
            on: function(events, handler, priority) {
                var self = this;
                if ("function" !== typeof handler) return self;
                var method = priority ? "unshift" : "push";
                events.split(" ").forEach((function(event) {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once: function(events, handler, priority) {
                var self = this;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny: function(handler, priority) {
                var self = this;
                if ("function" !== typeof handler) return self;
                var method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny: function(handler) {
                var self = this;
                if (!self.eventsAnyListeners) return self;
                var index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off: function(events, handler) {
                var self = this;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((function(event) {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((function(eventHandler, index) {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit: function() {
                var self = this;
                if (!self.eventsListeners) return self;
                var events;
                var data;
                var context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                var eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((function(event) {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((function(eventHandler) {
                        eventHandler.apply(context, [ event ].concat(data));
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((function(eventHandler) {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            var swiper = this;
            var width;
            var height;
            var $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            (0, utils.extend)(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            var swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            var slides = $wrapperEl.children("." + swiper.params.slideClass);
            var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            var snapGrid = [];
            var slidesGrid = [];
            var slidesSizesGrid = [];
            var offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            var offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            var previousSnapGridLength = swiper.snapGrid.length;
            var previousSlidesGridLength = swiper.slidesGrid.length;
            var spaceBetween = params.spaceBetween;
            var slidePosition = -offsetBefore;
            var prevSlideSize = 0;
            var index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            var slidesNumberEvenToRows;
            if (params.slidesPerColumn > 1) {
                if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) slidesNumberEvenToRows = slidesLength; else slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
                if ("auto" !== params.slidesPerView && "row" === params.slidesPerColumnFill) slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
            var slideSize;
            var slidesPerColumn = params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
            for (var i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                var slide = slides.eq(i);
                if (params.slidesPerColumn > 1) {
                    var newSlideOrderIndex = void 0;
                    var column = void 0;
                    var row = void 0;
                    if ("row" === params.slidesPerColumnFill && params.slidesPerGroup > 1) {
                        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
                        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
                        var columnsInGroup = 0 === groupIndex ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                        row = Math.floor(slideIndexInGroup / columnsInGroup);
                        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide.css({
                            "-webkit-box-ordinal-group": newSlideOrderIndex,
                            "-moz-box-ordinal-group": newSlideOrderIndex,
                            "-ms-flex-order": newSlideOrderIndex,
                            "-webkit-order": newSlideOrderIndex,
                            order: newSlideOrderIndex
                        });
                    } else if ("column" === params.slidesPerColumnFill) {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                            row += 1;
                            if (row >= slidesPerColumn) {
                                row = 0;
                                column += 1;
                            }
                        }
                    } else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide.css(getDirectionLabel("margin-top"), 0 !== row ? params.spaceBetween && params.spaceBetween + "px" : "");
                }
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    var slideStyles = getComputedStyle(slide[0]);
                    var currentTransform = slide[0].style.transform;
                    var currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        var width = getDirectionPropertyValue(slideStyles, "width");
                        var paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        var paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        var marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        var marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        var boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            var _slide$ = slide[0], clientWidth = _slide$.clientWidth, offsetWidth = _slide$.offsetWidth;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = slideSize + "px";
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            var newSlidesGrid;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: swiper.virtualSize + params.spaceBetween + "px"
            });
            if (params.setWrapperSize) {
                var _$wrapperEl$css;
                $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", 
                _$wrapperEl$css));
            }
            if (params.slidesPerColumn > 1) {
                var _$wrapperEl$css2;
                swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
                swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
                $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel("width")] = swiper.virtualSize + params.spaceBetween + "px", 
                _$wrapperEl$css2));
                if (params.centeredSlides) {
                    newSlidesGrid = [];
                    for (var _i = 0; _i < snapGrid.length; _i += 1) {
                        var slidesGridItem = snapGrid[_i];
                        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                    }
                    snapGrid = newSlidesGrid;
                }
            }
            if (!params.centeredSlides) {
                newSlidesGrid = [];
                for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
                    var _slidesGridItem = snapGrid[_i2];
                    if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
                    if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(_slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                var _slides$filter$css;
                var key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter((function(_, slideIndex) {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", 
                _slides$filter$css));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                var allSlidesSize = 0;
                slidesSizesGrid.forEach((function(slideSizeValue) {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                var maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((function(snap) {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                var _allSlidesSize = 0;
                slidesSizesGrid.forEach((function(slideSizeValue) {
                    _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                _allSlidesSize -= params.spaceBetween;
                if (_allSlidesSize < swiperSize) {
                    var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
                    snapGrid.forEach((function(snap, snapIndex) {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach((function(snap, snapIndex) {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            (0, utils.extend)(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesOffset();
        }
        function updateAutoHeight(speed) {
            var swiper = this;
            var activeSlides = [];
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var newHeight = 0;
            var i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            var getSlideByIndex = function(index) {
                if (isVirtual) return swiper.slides.filter((function(el) {
                    return parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index;
                }))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) swiper.visibleSlides.each((function(slide) {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight) swiper.$wrapperEl.css("height", newHeight + "px");
        }
        function updateSlidesOffset() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides, rtl = swiper.rtlTranslate;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            var offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (var i = 0; i < slides.length; i += 1) {
                var slide = slides[i];
                var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                    var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                    if (isVisible) {
                        swiper.visibleSlides.push(slide);
                        swiper.visibleSlidesIndexes.push(i);
                        slides.eq(i).addClass(params.slideVisibleClass);
                    }
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
            }
            swiper.visibleSlides = (0, dom["default"])(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            var swiper = this;
            if ("undefined" === typeof translate) {
                var multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            var params = swiper.params;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
            var wasBeginning = isBeginning;
            var wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            (0, utils.extend)(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            var swiper = this;
            var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
            var activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find("." + params.slideClass + '[data-swiper-slide-index="' + activeIndex + '"]'); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass); else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + realIndex + '"]').addClass(params.slideDuplicateActiveClass);
            var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass); else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass); else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr("data-swiper-slide-index") + '"]').addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            var swiper = this;
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
            var activeIndex = newActiveIndex;
            var snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (var i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            var realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            (0, utils.extend)(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            var swiper = this;
            var params = swiper.params;
            var slide = (0, dom["default"])(e.target).closest("." + params.slideClass)[0];
            var slideFound = false;
            var slideIndex;
            if (slide) for (var i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt((0, 
                dom["default"])(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            var swiper = this;
            var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            var currentTranslate = (0, utils.getTranslate)($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            var swiper = this;
            var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
            var x = 0;
            var y = 0;
            var z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            var newProgress;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            var swiper = this;
            var params = swiper.params, wrapperEl = swiper.wrapperEl;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            var minTranslate = swiper.minTranslate();
            var maxTranslate = swiper.maxTranslate();
            var newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                var isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;
                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = -newTranslate, 
                    _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
                } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            var swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            var dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit("transitionStart");
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit("slideResetTransitionStart");
                    return;
                }
                swiper.emit("slideChangeTransitionStart");
                if ("next" === dir) swiper.emit("slideNextTransitionStart"); else swiper.emit("slidePrevTransitionStart");
            }
        }
        function transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex, params = swiper.params;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            var dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit("transitionEnd");
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit("slideResetTransitionEnd");
                    return;
                }
                swiper.emit("slideChangeTransitionEnd");
                if ("next" === dir) swiper.emit("slideNextTransitionEnd"); else swiper.emit("slidePrevTransitionEnd");
            }
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
            if ("string" === typeof index) {
                var indexAsNumber = parseInt(index, 10);
                var isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
                index = indexAsNumber;
            }
            var swiper = this;
            var slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl, enabled = swiper.enabled;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            var translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (var i = 0; i < slidesGrid.length; i += 1) {
                var normalizedTranslate = -Math.floor(100 * translate);
                var normalizedGird = Math.floor(100 * slidesGrid[i]);
                var normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGird) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            var direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                var isH = swiper.isHorizontal();
                var t = -translate;
                if (rtl) t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t; else if (wrapperEl.scrollTo) {
                    var _wrapperEl$scrollTo;
                    wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? "left" : "top"] = t, 
                    _wrapperEl$scrollTo.behavior = "smooth", _wrapperEl$scrollTo));
                } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                }
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            var newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            var params = swiper.params, animating = swiper.animating, enabled = swiper.enabled;
            if (!enabled) return swiper;
            var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            var translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            var normalizedTranslate = normalize(translate);
            var normalizedSnapGrid = snapGrid.map((function(val) {
                return normalize(val);
            }));
            var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) snapGrid.forEach((function(snap) {
                if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
            }));
            var prevIndex;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            var swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            var swiper = this;
            var index = swiper.activeIndex;
            var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                var currentSnap = swiper.snapGrid[snapIndex];
                var nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                var prevSnap = swiper.snapGrid[snapIndex - 1];
                var _currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
            var slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            var slideToIndex = swiper.clickedIndex;
            var realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt((0, dom["default"])(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
                    (0, utils.nextTick)((function() {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children("." + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ")").eq(0).index();
                    (0, utils.nextTick)((function() {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            var swiper = this;
            var document = (0, ssr_window_esm.getDocument)();
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
            $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
            var slides = $wrapperEl.children("." + params.slideClass);
            if (params.loopFillGroupWithBlank) {
                var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (var i = 0; i < blankSlidesNum; i += 1) {
                        var blankNode = (0, dom["default"])(document.createElement("div")).addClass(params.slideClass + " " + params.slideBlankClass);
                        $wrapperEl.append(blankNode);
                    }
                    slides = $wrapperEl.children("." + params.slideClass);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            var prependSlides = [];
            var appendSlides = [];
            slides.each((function(el, index) {
                var slide = (0, dom["default"])(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (var _i = 0; _i < appendSlides.length; _i += 1) $wrapperEl.append((0, dom["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) $wrapperEl.prepend((0, 
            dom["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            var swiper = this;
            swiper.emit("beforeLoopFix");
            var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
            var newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            var snapTranslate = -snapGrid[activeIndex];
            var diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                var slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (_slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
            $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            var swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            var el = swiper.el;
            el.style.cursor = "move";
            el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
            el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            var swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper.el.style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function appendSlide(slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
            if (params.loop) swiper.loopDestroy();
            if ("object" === typeof slides && "length" in slides) {
                for (var i = 0; i < slides.length; i += 1) if (slides[i]) $wrapperEl.append(slides[i]);
            } else $wrapperEl.append(slides);
            if (params.loop) swiper.loopCreate();
            if (!(params.observer && swiper.support.observer)) swiper.update();
        }
        function prependSlide(slides) {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
            if (params.loop) swiper.loopDestroy();
            var newActiveIndex = activeIndex + 1;
            if ("object" === typeof slides && "length" in slides) {
                for (var i = 0; i < slides.length; i += 1) if (slides[i]) $wrapperEl.prepend(slides[i]);
                newActiveIndex = activeIndex + slides.length;
            } else $wrapperEl.prepend(slides);
            if (params.loop) swiper.loopCreate();
            if (!(params.observer && swiper.support.observer)) swiper.update();
            swiper.slideTo(newActiveIndex, 0, false);
        }
        function addSlide(index, slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children("." + params.slideClass);
            }
            var baseLength = swiper.slides.length;
            if (index <= 0) {
                swiper.prependSlide(slides);
                return;
            }
            if (index >= baseLength) {
                swiper.appendSlide(slides);
                return;
            }
            var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
            var slidesBuffer = [];
            for (var i = baseLength - 1; i >= index; i -= 1) {
                var currentSlide = swiper.slides.eq(i);
                currentSlide.remove();
                slidesBuffer.unshift(currentSlide);
            }
            if ("object" === typeof slides && "length" in slides) {
                for (var _i = 0; _i < slides.length; _i += 1) if (slides[_i]) $wrapperEl.append(slides[_i]);
                newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
            } else $wrapperEl.append(slides);
            for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) $wrapperEl.append(slidesBuffer[_i2]);
            if (params.loop) swiper.loopCreate();
            if (!(params.observer && swiper.support.observer)) swiper.update();
            if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false); else swiper.slideTo(newActiveIndex, 0, false);
        }
        function removeSlide(slidesIndexes) {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children("." + params.slideClass);
            }
            var newActiveIndex = activeIndexBuffer;
            var indexToRemove;
            if ("object" === typeof slidesIndexes && "length" in slidesIndexes) {
                for (var i = 0; i < slidesIndexes.length; i += 1) {
                    indexToRemove = slidesIndexes[i];
                    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (params.loop) swiper.loopCreate();
            if (!(params.observer && swiper.support.observer)) swiper.update();
            if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false); else swiper.slideTo(newActiveIndex, 0, false);
        }
        function removeAllSlides() {
            var swiper = this;
            var slidesIndexes = [];
            for (var i = 0; i < swiper.slides.length; i += 1) slidesIndexes.push(i);
            swiper.removeSlide(slidesIndexes);
        }
        const manipulation = {
            appendSlide,
            prependSlide,
            addSlide,
            removeSlide,
            removeAllSlides
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === (0, ssr_window_esm.getDocument)() || el === (0, ssr_window_esm.getWindow)()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                var found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            var swiper = this;
            var document = (0, ssr_window_esm.getDocument)();
            var window = (0, ssr_window_esm.getWindow)();
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, enabled = swiper.enabled;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            var $targetEl = (0, dom["default"])(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            var swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = (0, 
            dom["default"])(event.path[0]);
            var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
            var isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            var startX = touches.currentX;
            var startY = touches.currentY;
            var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            (0, utils.extend)(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = (0, utils.now)();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                var preventDefault = true;
                if ($targetEl.is(data.focusableElements)) preventDefault = false;
                if (document.activeElement && (0, dom["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            var document = (0, ssr_window_esm.getDocument)();
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return;
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            var targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            var pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            var pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                swiper.allowClick = false;
                if (data.isTouched) {
                    (0, utils.extend)(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = (0, utils.now)();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && (0, 
            dom["default"])(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            var diffX = touches.currentX - touches.startX;
            var diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                var touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            var diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            var disableParentSwiper = true;
            var resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode) {
                if (0 === data.velocities.length) data.velocities.push({
                    position: touches[swiper.isHorizontal() ? "startX" : "startY"],
                    time: data.touchStartTime
                });
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
                    time: (0, utils.now)()
                });
            }
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, enabled = swiper.enabled;
            if (!enabled) return;
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            var touchEndTime = (0, utils.now)();
            var timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                swiper.updateClickedSlide(e);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = (0, utils.now)();
            (0, utils.nextTick)((function() {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            var currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode) {
                if (currentPos < -swiper.minTranslate()) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (currentPos > -swiper.maxTranslate()) {
                    if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1); else swiper.slideTo(swiper.slides.length - 1);
                    return;
                }
                if (params.freeModeMomentum) {
                    if (data.velocities.length > 1) {
                        var lastMoveEvent = data.velocities.pop();
                        var velocityEvent = data.velocities.pop();
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        swiper.velocity = distance / time;
                        swiper.velocity /= 2;
                        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) swiper.velocity = 0;
                        if (time > 150 || (0, utils.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
                    } else swiper.velocity = 0;
                    swiper.velocity *= params.freeModeMomentumVelocityRatio;
                    data.velocities.length = 0;
                    var momentumDuration = 1e3 * params.freeModeMomentumRatio;
                    var momentumDistance = swiper.velocity * momentumDuration;
                    var newPosition = swiper.translate + momentumDistance;
                    if (rtl) newPosition = -newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = 20 * Math.abs(swiper.velocity) * params.freeModeMomentumBounceRatio;
                    var needsLoopFix;
                    if (newPosition < swiper.maxTranslate()) {
                        if (params.freeModeMomentumBounce) {
                            if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                            afterBouncePosition = swiper.maxTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else newPosition = swiper.maxTranslate();
                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (newPosition > swiper.minTranslate()) {
                        if (params.freeModeMomentumBounce) {
                            if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                            afterBouncePosition = swiper.minTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else newPosition = swiper.minTranslate();
                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (params.freeModeSticky) {
                        var nextSlide;
                        for (var j = 0; j < snapGrid.length; j += 1) if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || "next" === swiper.swipeDirection) newPosition = snapGrid[nextSlide]; else newPosition = snapGrid[nextSlide - 1];
                        newPosition = -newPosition;
                    }
                    if (needsLoopFix) swiper.once("transitionEnd", (function() {
                        swiper.loopFix();
                    }));
                    if (0 !== swiper.velocity) {
                        if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity); else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                        if (params.freeModeSticky) {
                            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                            if (moveDistance < currentSlideSize) momentumDuration = params.speed; else if (moveDistance < 2 * currentSlideSize) momentumDuration = 1.5 * params.speed; else momentumDuration = 2.5 * params.speed;
                        }
                    } else if (params.freeModeSticky) {
                        swiper.slideToClosest();
                        return;
                    }
                    if (params.freeModeMomentumBounce && doBounce) {
                        swiper.updateProgress(afterBouncePosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        swiper.animating = true;
                        $wrapperEl.transitionEnd((function() {
                            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                            swiper.emit("momentumBounce");
                            swiper.setTransition(params.speed);
                            setTimeout((function() {
                                swiper.setTranslate(afterBouncePosition);
                                $wrapperEl.transitionEnd((function() {
                                    if (!swiper || swiper.destroyed) return;
                                    swiper.transitionEnd();
                                }));
                            }), 0);
                        }));
                    } else if (swiper.velocity) {
                        swiper.updateProgress(newPosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        if (!swiper.animating) {
                            swiper.animating = true;
                            $wrapperEl.transitionEnd((function() {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            }));
                        }
                    } else {
                        swiper.emit("_freeModeNoMomentumRelease");
                        swiper.updateProgress(newPosition);
                    }
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                } else if (params.freeMode) swiper.emit("_freeModeNoMomentumRelease");
                if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                return;
            }
            var stopIndex = 0;
            var groupSize = swiper.slidesSizesGrid[0];
            for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + _increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            var swiper = this;
            var params = swiper.params, el = swiper.el;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            var swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            var swiper = this;
            var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) if (rtlTranslate) swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (-0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            var newProgress;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        var dummyEventAttached = false;
        function dummyEventListener() {}
        function attachEvents() {
            var swiper = this;
            var document = (0, ssr_window_esm.getDocument)();
            var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device = swiper.device, support = swiper.support;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            var capture = !!params.nested;
            if (!support.touch && support.pointerEvents) {
                el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (support.touch) {
                    var passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                        passive: false,
                        capture
                    } : capture);
                    el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                    if (touchEvents.cancel) el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                    if (!dummyEventAttached) {
                        document.addEventListener("touchstart", dummyEventListener);
                        dummyEventAttached = true;
                    }
                }
                if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                    el.addEventListener("mousedown", swiper.onTouchStart, false);
                    document.addEventListener("mousemove", swiper.onTouchMove, capture);
                    document.addEventListener("mouseup", swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) el.addEventListener("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl.addEventListener("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper.on(device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper.on("observerUpdate", onResize, true);
        }
        function detachEvents() {
            var swiper = this;
            var document = (0, ssr_window_esm.getDocument)();
            var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device = swiper.device, support = swiper.support;
            var capture = !!params.nested;
            if (!support.touch && support.pointerEvents) {
                el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (support.touch) {
                    var passiveListener = "onTouchStart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                    if (touchEvents.cancel) el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
                if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
                    el.removeEventListener("mousedown", swiper.onTouchStart, false);
                    document.removeEventListener("mousemove", swiper.onTouchMove, capture);
                    document.removeEventListener("mouseup", swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) el.removeEventListener("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl.removeEventListener("scroll", swiper.onScroll);
            swiper.off(device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
        }
        const events = {
            attachEvents,
            detachEvents
        };
        function setBreakpoint() {
            var swiper = this;
            var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _swiper$loopedSlides = swiper.loopedSlides, loopedSlides = void 0 === _swiper$loopedSlides ? 0 : _swiper$loopedSlides, params = swiper.params, $el = swiper.$el;
            var breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            if (breakpointOnlyParams) [ "slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn" ].forEach((function(param) {
                var paramValue = breakpointOnlyParams[param];
                if ("undefined" === typeof paramValue) return;
                if ("slidesPerView" === param && ("AUTO" === paramValue || "auto" === paramValue)) breakpointOnlyParams[param] = "auto"; else if ("slidesPerView" === param) breakpointOnlyParams[param] = parseFloat(paramValue); else breakpointOnlyParams[param] = parseInt(paramValue, 10);
            }));
            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var wasMultiRow = params.slidesPerColumn > 1;
            var isMultiRow = breakpointParams.slidesPerColumn > 1;
            var wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(params.containerModifierClass + "multirow");
                if (breakpointParams.slidesPerColumnFill && "column" === breakpointParams.slidesPerColumnFill || !breakpointParams.slidesPerColumnFill && "column" === params.slidesPerColumnFill) $el.addClass(params.containerModifierClass + "multirow-column");
                swiper.emitContainerClasses();
            }
            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            (0, utils.extend)(swiper.params, breakpointParams);
            var isEnabled = swiper.params.enabled;
            (0, utils.extend)(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            var breakpoint = false;
            var window = (0, ssr_window_esm.getWindow)();
            var currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            var points = Object.keys(breakpoints).map((function(point) {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    var minRatio = parseFloat(point.substr(1));
                    var value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort((function(a, b) {
                return parseInt(a.value, 10) - parseInt(b.value, 10);
            }));
            for (var i = 0; i < points.length; i += 1) {
                var _points$i = points[i], point = _points$i.point, value = _points$i.value;
                if ("window" === base) {
                    if (window.matchMedia("(min-width: " + value + "px)").matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            var resultClasses = [];
            entries.forEach((function(item) {
                if ("object" === typeof item) Object.keys(item).forEach((function(classNames) {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            var swiper = this;
            var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device = swiper.device, support = swiper.support;
            var suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": support.pointerEvents && !support.touch
            }, {
                "free-mode": params.freeMode
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                multirow: params.slidesPerColumn > 1
            }, {
                "multirow-column": params.slidesPerColumn > 1 && "column" === params.slidesPerColumnFill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            } ], params.containerModifierClass);
            classNames.push.apply(classNames, suffixes);
            $el.addClass([].concat(classNames).join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses() {
            var swiper = this;
            var $el = swiper.$el, classNames = swiper.classNames;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            var window = (0, ssr_window_esm.getWindow)();
            var image;
            function onReady() {
                if (callback) callback();
            }
            var isPicture = (0, dom["default"])(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            var swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
                var imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            var swiper = this;
            var params = swiper.params;
            var wasLocked = swiper.isLocked;
            var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
            if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) swiper.isLocked = lastSlidePosition <= swiper.size; else swiper.isLocked = 1 === swiper.snapGrid.length;
            swiper.allowSlideNext = !swiper.isLocked;
            swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
            if (wasLocked && wasLocked !== swiper.isLocked) {
                swiper.isEnd = false;
                if (swiper.navigation) swiper.navigation.update();
            }
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: false,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: .02,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: false,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
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
            return Constructor;
        }
        var prototypes = {
            modular,
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            manipulation,
            events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        var extendedDefaults = {};
        var Swiper = function() {
            function Swiper() {
                var el;
                var params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else {
                    el = args[0];
                    params = args[1];
                }
                if (!params) params = {};
                params = (0, utils.extend)({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && (0, dom["default"])(params.el).length > 1) {
                    var swipers = [];
                    (0, dom["default"])(params.el).each((function(containerEl) {
                        var newParams = (0, utils.extend)({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                var swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                if ("undefined" === typeof swiper.modules) swiper.modules = {};
                Object.keys(swiper.modules).forEach((function(moduleName) {
                    var module = swiper.modules[moduleName];
                    if (module.params) {
                        var moduleParamName = Object.keys(module.params)[0];
                        var moduleParams = module.params[moduleParamName];
                        if ("object" !== typeof moduleParams || null === moduleParams) return;
                        if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                            auto: true
                        };
                        if (!(moduleParamName in params && "enabled" in moduleParams)) return;
                        if (true === params[moduleParamName]) params[moduleParamName] = {
                            enabled: true
                        };
                        if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                        if (!params[moduleParamName]) params[moduleParamName] = {
                            enabled: false
                        };
                    }
                }));
                var swiperParams = (0, utils.extend)({}, defaults);
                swiper.useParams(swiperParams);
                swiper.params = (0, utils.extend)({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = (0, utils.extend)({}, swiper.params);
                swiper.passedParams = (0, utils.extend)({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((function(eventName) {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom["default"];
                (0, utils.extend)(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: (0, dom["default"])(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical: function() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function() {
                        var touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        var desktop = [ "mousedown", "mousemove", "mouseup" ];
                        if (swiper.support.pointerEvents) desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: (0, utils.now)(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.useModules();
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            var _proto = Swiper.prototype;
            _proto.enable = function() {
                var swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            };
            _proto.disable = function() {
                var swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            };
            _proto.setProgress = function(progress, speed) {
                var swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                var min = swiper.minTranslate();
                var max = swiper.maxTranslate();
                var current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            };
            _proto.emitContainerClasses = function() {
                var swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                var classes = swiper.el.className.split(" ").filter((function(className) {
                    return 0 === className.indexOf("swiper-container") || 0 === className.indexOf(swiper.params.containerModifierClass);
                }));
                swiper.emit("_containerClasses", classes.join(" "));
            };
            _proto.getSlideClasses = function(slideEl) {
                var swiper = this;
                return slideEl.className.split(" ").filter((function(className) {
                    return 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass);
                })).join(" ");
            };
            _proto.emitSlidesClasses = function() {
                var swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                var updates = [];
                swiper.slides.each((function(slideEl) {
                    var classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            };
            _proto.slidesPerViewDynamic = function() {
                var swiper = this;
                var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
                var spv = 1;
                if (params.centeredSlides) {
                    var slideSize = slides[activeIndex].swiperSlideSize;
                    var breakLoop;
                    for (var i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (var _i = activeIndex - 1; _i >= 0; _i -= 1) if (slides[_i] && !breakLoop) {
                        slideSize += slides[_i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) spv += 1;
                return spv;
            };
            _proto.update = function() {
                var swiper = this;
                if (!swiper || swiper.destroyed) return;
                var snapGrid = swiper.snapGrid, params = swiper.params;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    var translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                var translated;
                if (swiper.params.freeMode) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            };
            _proto.changeDirection = function(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                var swiper = this;
                var currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((function(slideEl) {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            };
            _proto.mount = function(el) {
                var swiper = this;
                if (swiper.mounted) return true;
                var $el = (0, dom["default"])(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                var getWrapperSelector = function() {
                    return "." + (swiper.params.wrapperClass || "").trim().split(" ").join(".");
                };
                var getWrapper = function() {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        var res = (0, dom["default"])(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = function(options) {
                            return $el.children(options);
                        };
                        return res;
                    }
                    return $el.children(getWrapperSelector());
                };
                var $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    var document = (0, ssr_window_esm.getDocument)();
                    var wrapper = document.createElement("div");
                    $wrapperEl = (0, dom["default"])(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children("." + swiper.params.slideClass).each((function(slideEl) {
                        $wrapperEl.append(slideEl);
                    }));
                }
                (0, utils.extend)(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            };
            _proto.init = function(el) {
                var swiper = this;
                if (swiper.initialized) return swiper;
                var mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            };
            _proto.destroy = function(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                var swiper = this;
                var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((function(eventName) {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    (0, utils.deleteProps)(swiper);
                }
                swiper.destroyed = true;
                return null;
            };
            Swiper.extendDefaults = function(newDefaults) {
                (0, utils.extend)(extendedDefaults, newDefaults);
            };
            Swiper.installModule = function(module) {
                if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
                var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0, 
                utils.now)();
                Swiper.prototype.modules[name] = module;
            };
            Swiper.use = function(module) {
                if (Array.isArray(module)) {
                    module.forEach((function(m) {
                        return Swiper.installModule(m);
                    }));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            };
            _createClass(Swiper, null, [ {
                key: "extendedDefaults",
                get: function() {
                    return extendedDefaults;
                }
            }, {
                key: "defaults",
                get: function() {
                    return defaults;
                }
            } ]);
            return Swiper;
        }();
        Object.keys(prototypes).forEach((function(prototypeGroup) {
            Object.keys(prototypes[prototypeGroup]).forEach((function(protoMethod) {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ resize, observer ]);
        const core_class = Swiper;
    },
    "./node_modules/swiper/esm/utils/dom.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => dom
        });
        var ssr_window_esm = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            };
            return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" === typeof Proxy) return true;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                return true;
            } catch (e) {
                return false;
            }
        }
        function _construct(Parent, args, Class) {
            if (_isNativeReflectConstruct()) _construct = Reflect.construct; else _construct = function(Parent, args, Class) {
                var a = [ null ];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor;
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
            return _construct.apply(null, arguments);
        }
        function _isNativeFunction(fn) {
            return -1 !== Function.toString.call(fn).indexOf("[native code]");
        }
        function _wrapNativeSuper(Class) {
            var _cache = "function" === typeof Map ? new Map : void 0;
            _wrapNativeSuper = function(Class) {
                if (null === Class || !_isNativeFunction(Class)) return Class;
                if ("function" !== typeof Class) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper);
                }
                function Wrapper() {
                    return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                }
                Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                return _setPrototypeOf(Wrapper, Class);
            };
            return _wrapNativeSuper(Class);
        }
        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function makeReactive(obj) {
            var proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get: function() {
                    return proto;
                },
                set: function(value) {
                    proto.__proto__ = value;
                }
            });
        }
        var Dom7 = function(_Array) {
            _inheritsLoose(Dom7, _Array);
            function Dom7(items) {
                var _this;
                _this = _Array.call.apply(_Array, [ this ].concat(items)) || this;
                makeReactive(_assertThisInitialized(_this));
                return _this;
            }
            return Dom7;
        }(_wrapNativeSuper(Array));
        function arrayFlat(arr) {
            if (void 0 === arr) arr = [];
            var res = [];
            arr.forEach((function(el) {
                if (Array.isArray(el)) res.push.apply(res, arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            var uniqueArray = [];
            for (var i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            var a = [];
            var res = context.querySelectorAll(selector);
            for (var i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function $(selector, context) {
            var window = (0, ssr_window_esm.getWindow)();
            var document = (0, ssr_window_esm.getDocument)();
            var arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                var html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    var toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    var tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (var i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        $.fn = Dom7.prototype;
        function addClass() {
            for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) classes[_key] = arguments[_key];
            var classNames = arrayFlat(classes.map((function(c) {
                return c.split(" ");
            })));
            this.forEach((function(el) {
                var _el$classList;
                (_el$classList = el.classList).add.apply(_el$classList, classNames);
            }));
            return this;
        }
        function removeClass() {
            for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) classes[_key2] = arguments[_key2];
            var classNames = arrayFlat(classes.map((function(c) {
                return c.split(" ");
            })));
            this.forEach((function(el) {
                var _el$classList2;
                (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
            }));
            return this;
        }
        function toggleClass() {
            for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) classes[_key3] = arguments[_key3];
            var classNames = arrayFlat(classes.map((function(c) {
                return c.split(" ");
            })));
            this.forEach((function(el) {
                classNames.forEach((function(className) {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass() {
            for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) classes[_key4] = arguments[_key4];
            var classNames = arrayFlat(classes.map((function(c) {
                return c.split(" ");
            })));
            return arrayFilter(this, (function(el) {
                return classNames.filter((function(className) {
                    return el.classList.contains(className);
                })).length > 0;
            })).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (var i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (var attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (var i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (var i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (var i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? duration + "ms" : duration;
            return this;
        }
        function on() {
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
            var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
            if ("function" === typeof args[1]) {
                eventType = args[0];
                listener = args[1];
                capture = args[2];
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                var target = e.target;
                if (!target) return;
                var eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if ($(target).is(targetSelector)) listener.apply(target, eventData); else {
                    var _parents = $(target).parents();
                    for (var k = 0; k < _parents.length; k += 1) if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
                }
            }
            function handleEvent(e) {
                var eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            var events = eventType.split(" ");
            var j;
            for (var i = 0; i < this.length; i += 1) {
                var el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    var _event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
                    el.dom7LiveListeners[_event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(_event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
            var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
            if ("function" === typeof args[1]) {
                eventType = args[0];
                listener = args[1];
                capture = args[2];
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            var events = eventType.split(" ");
            for (var i = 0; i < events.length; i += 1) {
                var event = events[i];
                for (var j = 0; j < this.length; j += 1) {
                    var el = this[j];
                    var handlers = void 0;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger() {
            var window = (0, ssr_window_esm.getWindow)();
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) args[_key9] = arguments[_key9];
            var events = args[0].split(" ");
            var eventData = args[1];
            for (var i = 0; i < events.length; i += 1) {
                var event = events[i];
                for (var j = 0; j < this.length; j += 1) {
                    var el = this[j];
                    if (window.CustomEvent) {
                        var evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter((function(data, dataIndex) {
                            return dataIndex > 0;
                        }));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            var dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    var _styles = this.styles();
                    return this[0].offsetWidth + parseFloat(_styles.getPropertyValue("margin-right")) + parseFloat(_styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    var _styles2 = this.styles();
                    return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue("margin-top")) + parseFloat(_styles2.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                var window = (0, ssr_window_esm.getWindow)();
                var document = (0, ssr_window_esm.getDocument)();
                var el = this[0];
                var box = el.getBoundingClientRect();
                var body = document.body;
                var clientTop = el.clientTop || body.clientTop || 0;
                var clientLeft = el.clientLeft || body.clientLeft || 0;
                var scrollTop = el === window ? window.scrollY : el.scrollTop;
                var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            var window = (0, ssr_window_esm.getWindow)();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            var window = (0, ssr_window_esm.getWindow)();
            var i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (var _prop in props) this[i].style[_prop] = props[_prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach((function(el, index) {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            var result = arrayFilter(this, callback);
            return $(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (var i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (var i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            var window = (0, ssr_window_esm.getWindow)();
            var document = (0, ssr_window_esm.getDocument)();
            var el = this[0];
            var compareWith;
            var i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = $(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            var child = this[0];
            var i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            var length = this.length;
            if (index > length - 1) return $([]);
            if (index < 0) {
                var returnIndex = length + index;
                if (returnIndex < 0) return $([]);
                return $([ this[returnIndex] ]);
            }
            return $([ this[index] ]);
        }
        function append() {
            var newChild;
            var document = (0, ssr_window_esm.getDocument)();
            for (var k = 0; k < arguments.length; k += 1) {
                newChild = k < 0 || arguments.length <= k ? void 0 : arguments[k];
                for (var i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    var tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (var j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            var document = (0, ssr_window_esm.getDocument)();
            var i;
            var j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                var tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([ this[0].nextElementSibling ]);
                    return $([]);
                }
                if (this[0].nextElementSibling) return $([ this[0].nextElementSibling ]);
                return $([]);
            }
            return $([]);
        }
        function nextAll(selector) {
            var nextEls = [];
            var el = this[0];
            if (!el) return $([]);
            while (el.nextElementSibling) {
                var _next = el.nextElementSibling;
                if (selector) {
                    if ($(_next).is(selector)) nextEls.push(_next);
                } else nextEls.push(_next);
                el = _next;
            }
            return $(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                var el = this[0];
                if (selector) {
                    if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([ el.previousElementSibling ]);
                    return $([]);
                }
                if (el.previousElementSibling) return $([ el.previousElementSibling ]);
                return $([]);
            }
            return $([]);
        }
        function prevAll(selector) {
            var prevEls = [];
            var el = this[0];
            if (!el) return $([]);
            while (el.previousElementSibling) {
                var _prev = el.previousElementSibling;
                if (selector) {
                    if ($(_prev).is(selector)) prevEls.push(_prev);
                } else prevEls.push(_prev);
                el = _prev;
            }
            return $(prevEls);
        }
        function dom7_esm_parent(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return $(parents);
        }
        function parents(selector) {
            var parents = [];
            for (var i = 0; i < this.length; i += 1) {
                var _parent = this[i].parentNode;
                while (_parent) {
                    if (selector) {
                        if ($(_parent).is(selector)) parents.push(_parent);
                    } else parents.push(_parent);
                    _parent = _parent.parentNode;
                }
            }
            return $(parents);
        }
        function closest(selector) {
            var closest = this;
            if ("undefined" === typeof selector) return $([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            var foundElements = [];
            for (var i = 0; i < this.length; i += 1) {
                var found = this[i].querySelectorAll(selector);
                for (var j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return $(foundElements);
        }
        function children(selector) {
            var children = [];
            for (var i = 0; i < this.length; i += 1) {
                var childNodes = this[i].children;
                for (var j = 0; j < childNodes.length; j += 1) if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return $(children);
        }
        function remove() {
            for (var i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        var noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if ("undefined" === typeof args[0]) {
                    for (var i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else $(this[i]).trigger(name);
                    return this;
                }
                return this.on.apply(this, [ name ].concat(args));
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        var Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((function(methodName) {
            Object.defineProperty($.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = $;
    },
    "./node_modules/swiper/esm/utils/utils.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            deleteProps: () => deleteProps,
            nextTick: () => nextTick,
            now: () => now,
            getTranslate: () => getTranslate,
            isObject: () => isObject,
            extend: () => extend,
            bindModuleMethods: () => bindModuleMethods,
            classesToSelector: () => classesToSelector,
            createElementIfNotDefined: () => createElementIfNotDefined
        });
        var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
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
            var window = (0, ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
            var style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            var window = (0, ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
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
            var document = (0, ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
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
    "./src/assets/cart/script/constant/cartQuantity.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            MAX_CART_ITEM_LIST_QUANTITY: 99,
            MAX_CART_ITEM_QUANTITY: 999
        };
    },
    "./src/assets/cart/script/constant/priceType.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            NORMAL: 0,
            MEMBER: 1,
            SEC_KILL: 2,
            NTH_DISCOUNT: 3
        };
    },
    "./src/assets/cart/script/constant/responseCode.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            SUCCESS: "SUCCESS",
            FA_INVALID_PARAMS: "FA_INVALID_PARAMS",
            FA_COUPON_INVALID_CODE: "FA_COUPON_INVALID_CODE",
            FA_PRODUCT_VALIDATE: "FA_PRODUCT_VALIDATE",
            FA_PRODUCT_CHANGED: "FA_PRODUCT_CHANGED",
            FA_PRODUCT_OVERFLOW: "FA_PRODUCT_OVERFLOW",
            FA_PRODUCT_ACTIVE_EMPTY: "FA_PRODUCT_ACTIVE_EMPTY",
            FA_PRODUCT_SOLD_OUT: "FA_PRODUCT_SOLD_OUT",
            FA_PRODUCT_QUANTITY: "FA_PRODUCT_QUANTITY",
            FA_CHECKOUT_CANCELED: "FA_CHECKOUT_CANCELED"
        };
    },
    "./src/assets/cart/script/constant/stockType.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__,
            cartLimitedEnum: () => cartLimitedEnum
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            LIMITED: 0,
            UNLIMITED: 1,
            OVERSOLD: 2
        };
        const cartLimitedEnum = {
            NORMAL_ITEM_MAX_NUM: [ "ITEM_MAX_NUM" ],
            ACTIVE_LIMITED: [ "LIMITED_ACTIVE_OVER", "LIMITED_ACTIVE_SKU_OVER" ],
            NORMAL_STOCK_OVER: [ "STOCK_OVER" ],
            ACTIVE_STOCK_OVER: [ "LIMITED_ACTIVE_STOCK_OVER" ],
            ACTIVE: [ "LIMITED_ACTIVE_OVER", "LIMITED_ACTIVE_SKU_OVER", "LIMITED_ACTIVE_STOCK_OVER" ],
            NORMAL: [ "ITEM_MAX_NUM", "STOCK_OVER" ]
        };
    },
    "./src/assets/cart/script/domain/adapter/storage/constant.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const KEY_PREFIX = "sl.trade.cart";
        const __WEBPACK_DEFAULT_EXPORT__ = {
            KEY_PREFIX,
            KEY_CART_ABANDON_INFO: "cartAbOrderSeqInfo"
        };
    },
    "./src/assets/cart/script/domain/adapter/storage/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/storage/constant.js");
        class Storage {
            constructor(config) {
                this.prefix = _constant__WEBPACK_IMPORTED_MODULE_0__["default"].KEY_PREFIX;
                this.config = config;
            }
            setItem(key, value) {
                if (null == value) localStorage.removeItem(this.withKey(key)); else localStorage.setItem(this.withKey(key), value);
            }
            getItem(key) {
                return localStorage.getItem(this.withKey(key));
            }
            withKey(key) {
                return `${this.prefix}.${key}`;
            }
        }
        let globalStorage = new Storage;
        function withStorage(config) {
            globalStorage = new Storage(config);
        }
        function takeStorage() {
            return globalStorage;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            withStorage,
            takeStorage
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/cart.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _internal_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/constant.js");
        async function getCart(svc, abandonedOrderMark, abandonedOrderSeq) {
            return svc.request.get(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCart, {
                params: {
                    abandonedOrderMark,
                    abandonedOrderSeq
                }
            });
        }
        async function deleteCartItemList(svc, skuList) {
            return svc.request.post(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCartItemNumReduce, skuList || []);
        }
        async function putCartItem(svc, skuInfo) {
            return svc.request.put(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCart, skuInfo);
        }
        async function addCartItem(svc, {spuId, skuId, num, orderFrom, dataReportReq}) {
            return svc.request.post(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCart, {
                orderFrom,
                item: {
                    spuId,
                    skuId,
                    num
                },
                dataReportReq
            });
        }
        async function verifyCartItemListV2(svc, {itemList, orderFrom}) {
            return svc.request.post(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCartVerifyV2, {
                cartItemList: itemList || [],
                orderFrom
            });
        }
        async function memberPoint(svc, use) {
            return svc.request.get(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].memberPoint, {
                params: {
                    use
                }
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getCart,
            deleteCartItemList,
            verifyCartItemListV2,
            putCartItem,
            addCartItem,
            memberPoint
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/coupon.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _internal_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/constant.js");
        async function applyCoupon(svc, couponCode) {
            return svc.request.post(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCouponCode, {
                code: couponCode
            });
        }
        async function withdrawCoupon(svc, couponCode) {
            return svc.request.delete(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointCoupon, {
                data: couponCode
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            applyCoupon,
            withdrawCoupon
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _internal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/config.js");
        var _internal_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/transport.js");
        class Svc {
            constructor(svcConfig) {
                this._config = svcConfig;
                this._transport = _internal_transport__WEBPACK_IMPORTED_MODULE_1__["default"].newTransport(_internal_config__WEBPACK_IMPORTED_MODULE_0__["default"].getRequest(svcConfig));
            }
            get transport() {
                return this._transport;
            }
            get lang() {
                return _internal_config__WEBPACK_IMPORTED_MODULE_0__["default"].getLangConfig(this._config);
            }
            get request() {
                return this.transport.request;
            }
        }
        let globalSvc;
        function withSvc(svcConfig) {
            globalSvc = new Svc(svcConfig);
        }
        function takeSvc() {
            return globalSvc;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            withSvc,
            takeSvc
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/internal/config.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const presetConfig = {
            ai: null,
            t(key) {
                return key;
            },
            lang: "zh-hans-cn"
        };
        function getLangConfig(config) {
            return (null === config || void 0 === config ? void 0 : config.lang) || presetConfig.lang;
        }
        function getRequest(config) {
            return config.ai;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getLangConfig,
            getRequest
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/internal/constant.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            endpointCart: "/carts/cart",
            endpointCartVerifyV2: "/carts/cart/check-v2",
            endpointCartItemNumReduce: "/carts/cart/items_num_reduce",
            endpointVoucher: "/carts/cart/shopping_money",
            endpointCoupon: "/carts/cart/promotion_code",
            memberPoint: "/carts/cart/member-point",
            endpointCouponCode: "/carts/cart/use/promotion-code",
            endpointOrderSaveAbandonOrder: "/trade/center/order/abandoned/save"
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/internal/transport.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function catchBizErr(fn) {
            return async function(...args) {
                try {
                    return await fn(...args);
                } catch (e) {
                    if (Reflect.has(e, "code") && Reflect.has(e, "success")) return e;
                    throw e;
                }
            };
        }
        const requestMethodsList = [ "get", "post", "put", "delete", "head", "options", "patch" ];
        function wrapAxios(axiosInstance) {
            const wrapped = catchBizErr(axiosInstance);
            requestMethodsList.forEach((method => {
                wrapped[method] = catchBizErr(axiosInstance[method].bind(axiosInstance));
            }));
            return wrapped;
        }
        function newTransport(axiosInstance) {
            if (!axiosInstance) throw new Error("failed to new transport without AxiosInstance");
            return Object.freeze({
                request: wrapAxios(axiosInstance)
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            newTransport
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/order.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _internal_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/constant.js");
        var _model_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/domain/model/helpers.js");
        async function saveAbandonOrder(svc, config) {
            return svc.request.post(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointOrderSaveAbandonOrder, {
                associateCart: true,
                abandonedOrderSeqInfo: config.abandonedOrderSeqInfo || null,
                discountCode: config.discountCode || null,
                products: config.products || []
            });
        }
        function withAbandonOrderInfo(config, seq, mark) {
            if (!seq) return config;
            return _model_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].merge(config, {
                abandonedOrderSeqInfo: {
                    seq,
                    mark
                }
            });
        }
        function withAbandonOrderDiscountCode(config, discountCode) {
            if (!discountCode) return config;
            return _model_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].merge(config, {
                discountCode
            });
        }
        function withAbandonOrderProductList(config, productList) {
            if (!productList) return config;
            return _model_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].merge(config, {
                products: productList
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            saveAbandonOrder,
            withAbandonOrderInfo,
            withAbandonOrderDiscountCode,
            withAbandonOrderProductList
        };
    },
    "./src/assets/cart/script/domain/adapter/svc/voucher.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _internal_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/internal/constant.js");
        async function toggleVoucher(svc, used) {
            return svc.request.get(_internal_constant__WEBPACK_IMPORTED_MODULE_0__["default"].endpointVoucher, {
                params: {
                    selected: used
                }
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            toggleVoucher
        };
    },
    "./src/assets/cart/script/domain/model/cart.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/constant/cartQuantity.js");
        function getActiveCartItemList(model) {
            const activeItems = model.activeItems || [];
            return activeItems.reduce(((list, item) => list.concat(item.itemList || [])), []);
        }
        function getInactiveCartItemList(model) {
            return model.inactiveItems || [];
        }
        function getCartItemList(model) {
            return [ ...getActiveCartItemList(model), ...getInactiveCartItemList(model) ];
        }
        function getActiveCartItemListQuantity(model) {
            return getActiveCartItemList(model).length;
        }
        function getInactiveCartItemListQuantity(model) {
            return getInactiveCartItemList(model).length;
        }
        function getCartItemListQuantity(model) {
            return getActiveCartItemListQuantity(model) + getInactiveCartItemListQuantity(model);
        }
        function isCartItemListQuantityOverflow(model) {
            return getCartItemListQuantity(model) > _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_CART_ITEM_LIST_QUANTITY;
        }
        function isActiveCartItemListQuantityOverflow(model) {
            return getActiveCartItemListQuantity(model) > _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_CART_ITEM_LIST_QUANTITY;
        }
        function getSkuQuantity(model) {
            if (!model) return 0;
            return model.count || 0;
        }
        function getPromotionInfo(model) {
            return null === model || void 0 === model ? void 0 : model.promotionCodeDTO;
        }
        function getVoucherInfo(model) {
            return null === model || void 0 === model ? void 0 : model.shoppingMoneyDTO;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getActiveCartItemList,
            getInactiveCartItemList,
            getCartItemList,
            getActiveCartItemListQuantity,
            getInactiveCartItemListQuantity,
            getCartItemListQuantity,
            isCartItemListQuantityOverflow,
            isActiveCartItemListQuantityOverflow,
            getSkuQuantity,
            getPromotionInfo,
            getVoucherInfo
        };
    },
    "./src/assets/cart/script/domain/model/cartItem.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _vo_productStock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/vo/productStock.js");
        var _vo_productPriceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/domain/vo/productPriceType.js");
        var _constant_priceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/cart/script/constant/priceType.js");
        var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/cart/script/utils/object.js");
        var _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/cart/script/constant/cartQuantity.js");
        function getSpuId(model) {
            if (!model) return "";
            return model.spuId || "";
        }
        function getSkuId(model) {
            if (!model) return "";
            return model.skuId || "";
        }
        function getGroupId(model) {
            if (!model) return "";
            return model.groupId || "";
        }
        function getParentSkuId(model) {
            if (!model) return "";
            return model.parentSkuId || "";
        }
        function getProductSource(model) {
            if (!model) return "";
            return model.productSource || "";
        }
        function getQuantity(model) {
            if (!model) return 0;
            return model.num || 0;
        }
        function getStock(model) {
            if (!model) return 0;
            return model.stock || 0;
        }
        function getPriceType(model) {
            if (!model) return _constant_priceType__WEBPACK_IMPORTED_MODULE_2__["default"].NORMAL;
            return model.priceType;
        }
        function isProductOnSale(model) {
            return _vo_productStock__WEBPACK_IMPORTED_MODULE_0__["default"].isProductOnSale(model);
        }
        function isProductQuantityAvailable(model) {
            if (!model) return false;
            const quantity = getQuantity(model);
            if (quantity <= 0) return false;
            if (quantity > _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_CART_ITEM_QUANTITY) return false;
            const stock = getStock(model);
            if (quantity <= stock) return true;
            return _vo_productStock__WEBPACK_IMPORTED_MODULE_0__["default"].isStockNotLimited(model);
        }
        function isProductQuantityOverflow(model) {
            return getQuantity(model) > _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_CART_ITEM_QUANTITY;
        }
        function getUniqueID(model) {
            if (!model) return "";
            return `${model.groupId}${model.spuId}.${model.skuId}`;
        }
        function filterOnSaleProduct(list) {
            return filter(list, _vo_productStock__WEBPACK_IMPORTED_MODULE_0__["default"].isProductOnSale);
        }
        function mergeNthProduct(list) {
            if (!list) return [];
            const productIndexMap = {};
            const result = [];
            for (let i = 0; i < list.length; ++i) {
                const item = list[i];
                if (_utils_object__WEBPACK_IMPORTED_MODULE_3__["default"].has(productIndexMap, `${item.groupId}${item.skuId}`)) {
                    const pushedItem = result[productIndexMap[`${item.groupId}${item.skuId}`]];
                    if (_vo_productPriceType__WEBPACK_IMPORTED_MODULE_1__["default"].isNthDiscount(item)) {
                        item.num += pushedItem.num;
                        result[productIndexMap[`${item.groupId}${item.skuId}`]] = item;
                    } else pushedItem.num += item.num;
                } else {
                    productIndexMap[`${item.groupId}${item.skuId}`] = result.length;
                    result.push({
                        ...item
                    });
                }
            }
            return result;
        }
        function isCartItemListOverflow(list) {
            if (!list) return false;
            return list.length > _constant_cartQuantity__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_CART_ITEM_LIST_QUANTITY;
        }
        function filterProductInGroup(list, groupId) {
            if (!list || !groupId) return [];
            return filter(list, (model => getGroupId(model) === groupId));
        }
        function groupProductsWithSkuId(list, skuId) {
            if (!list || !skuId) return [];
            return filter(list, (model => {
                if (getSkuId(model) === skuId) return true;
                return getParentSkuId(model) === skuId;
            }));
        }
        function filterProductsWithParentSkuId(list, skuId) {
            if (!list || !skuId) return [];
            return filter(list, (model => {
                if (getSkuId(model) === skuId) return false;
                return getParentSkuId(model) === skuId;
            }));
        }
        function findProductWithGroupIdAndSkuId(list, groupId, skuId) {
            if (!list || !skuId) return [];
            if (!groupId) groupId = "0";
            return find(list, (model => {
                if (getSkuId(model) !== skuId) return false;
                let targetGroupId = getGroupId(model);
                if (!targetGroupId) targetGroupId = "0";
                return targetGroupId === groupId;
            }));
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getUniqueID,
            getPriceType,
            getSpuId,
            getSkuId,
            getGroupId,
            getProductSource,
            getQuantity,
            isProductOnSale,
            isProductQuantityAvailable,
            isProductQuantityOverflow,
            isCartItemListOverflow,
            mergeNthProduct,
            filterOnSaleProduct,
            filterProductInGroup,
            groupProductsWithSkuId,
            filterProductsWithParentSkuId,
            findProductWithGroupIdAndSkuId
        };
        function filter(list, filterFn) {
            if (!list || "function" !== typeof filterFn) return [];
            return list.filter(filterFn);
        }
        function find(list, filterFn) {
            if (!list || "function" !== typeof filterFn) return [];
            return list.find(filterFn);
        }
    },
    "./src/assets/cart/script/domain/model/cartVerifyItem.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_biz_com_trade_optimize_modal_cartChangeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/biz-com/trade/optimize-modal/cartChangeItem.js");
        var _cartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/domain/model/cartItem.js");
        var _vo_productVerifyType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/cart/script/domain/vo/productVerifyType.js");
        function makeVerifyList(cartItemList, checkList) {
            const checkItemMap = (checkList || []).reduce(((result, item) => {
                result[`${_yy_sl_theme_shared_biz_com_trade_optimize_modal_cartChangeItem__WEBPACK_IMPORTED_MODULE_0__["default"].getGroupId(item)}-${_yy_sl_theme_shared_biz_com_trade_optimize_modal_cartChangeItem__WEBPACK_IMPORTED_MODULE_0__["default"].getSkuId(item)}`] = item;
                return result;
            }), {});
            const results = [];
            (cartItemList || []).forEach((item => {
                if (item) {
                    const changeItem = checkItemMap[`${_cartItem__WEBPACK_IMPORTED_MODULE_1__["default"].getGroupId(item)}-${_cartItem__WEBPACK_IMPORTED_MODULE_1__["default"].getSkuId(item)}`];
                    results.push({
                        verifyType: _yy_sl_theme_shared_biz_com_trade_optimize_modal_cartChangeItem__WEBPACK_IMPORTED_MODULE_0__["default"].getVerifyType(changeItem),
                        cartItem: item,
                        cartChangeItem: changeItem
                    });
                }
            }));
            return results;
        }
        function isVerifyFailed(list) {
            if (!Array.isArray(list)) return false;
            if (list.length <= 0) return false;
            return list.find((item => _vo_productVerifyType__WEBPACK_IMPORTED_MODULE_2__["default"].hasError(item)));
        }
        function filterFailedList(list) {
            if (!Array.isArray(list)) return [];
            if (list.length <= 0) return [];
            return list.filter((item => _vo_productVerifyType__WEBPACK_IMPORTED_MODULE_2__["default"].hasError(item)));
        }
        function getVerifiedCartItemList(list) {
            if (!list || list.length <= 0) return [];
            return list.map((verifyItem => {
                const {cartItem, cartChangeItem} = verifyItem;
                const {errorInfo} = cartChangeItem || {};
                if (!errorInfo) return {
                    ...cartItem
                };
                const {targetNum} = errorInfo;
                if (targetNum > 0) return {
                    ...cartItem,
                    num: targetNum
                };
                return null;
            })).filter((v => !!v));
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            makeVerifyList,
            isVerifyFailed,
            filterFailedList,
            getVerifiedCartItemList
        };
    },
    "./src/assets/cart/script/domain/model/helpers.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function reducer(source) {
            function reduce(ctx) {
                const cal = () => ctx;
                cal.next = (extractor, ...args) => {
                    if (!extractor) return reduce(ctx);
                    return reduce(extractor(ctx, ...args));
                };
                return cal;
            }
            return reduce(source);
        }
        function memo() {
            let deps;
            let result;
            return function(getter, ...args) {
                if (null == deps || !compare(deps, args)) {
                    result = getter(...args);
                    deps = args;
                }
                return result;
            };
        }
        function merge(source, target) {
            if (!source) source = {};
            if (!target) return source;
            return {
                ...source,
                ...target
            };
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            reducer,
            memo,
            merge
        };
        function compare(v1, v2) {
            if (v1 === v2) return true;
            if (null == v1 || null == v2) return false;
            const t1 = typeof v1;
            const t2 = typeof v2;
            if (t1 !== t2) return false;
            if ("function" === t1) return false;
            if (Array.isArray(v1) && Array.isArray(v2)) {
                const l1 = v1.length;
                const l2 = v2.length;
                if (l1 !== l2) return false;
                let i = 0;
                for (;i < l1; ++i) {
                    const i1 = v1[i];
                    const i2 = v2[i];
                    if (!compare(i1, i2)) return false;
                }
                return i === l2;
            }
            return false;
        }
    },
    "./src/assets/cart/script/domain/model/promotionCode.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function getCode(model) {
            if (!model) return;
            return model.promotionCode || "";
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getCode
        };
    },
    "./src/assets/cart/script/domain/model/response.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _vo_responseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/domain/vo/responseCode.js");
        var _constant_responseCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/constant/responseCode.js");
        function getCode(model) {
            if (!model) return "";
            return model.code;
        }
        function getData(model) {
            if (!model) return null;
            return model.data;
        }
        function isResolved(model) {
            if (!model) return false;
            return true === model.success && _vo_responseCode__WEBPACK_IMPORTED_MODULE_0__["default"].isOk(model);
        }
        function rejectWithCode(code = "") {
            return {
                code,
                success: false
            };
        }
        function resolveWithData(data = void 0) {
            return {
                code: _constant_responseCode__WEBPACK_IMPORTED_MODULE_1__["default"].SUCCESS,
                success: true,
                data
            };
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getCode,
            getData,
            isResolved,
            rejectWithCode,
            resolveWithData
        };
    },
    "./src/assets/cart/script/domain/vo/productPriceType.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant_priceType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/constant/priceType.js");
        function isNthDiscount(vo) {
            if (!vo) return false;
            return vo.priceType === _constant_priceType__WEBPACK_IMPORTED_MODULE_0__["default"].NTH_DISCOUNT;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            isNthDiscount
        };
    },
    "./src/assets/cart/script/domain/vo/productStock.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant_stockType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/constant/stockType.js");
        function isProductOnSale(vo) {
            if (!vo) return false;
            if (vo.stock > 0) return true;
            return vo.stockType === _constant_stockType__WEBPACK_IMPORTED_MODULE_0__["default"].OVERSOLD || vo.stockType === _constant_stockType__WEBPACK_IMPORTED_MODULE_0__["default"].UNLIMITED;
        }
        function isStockNotLimited(vo) {
            if (!vo) return false;
            return vo.stockType === _constant_stockType__WEBPACK_IMPORTED_MODULE_0__["default"].OVERSOLD || vo.stockType === _constant_stockType__WEBPACK_IMPORTED_MODULE_0__["default"].UNLIMITED;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            isProductOnSale,
            isStockNotLimited
        };
    },
    "./src/assets/cart/script/domain/vo/productVerifyType.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_biz_com_trade_optimize_modal_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/biz-com/trade/optimize-modal/constant.js");
        function noError(vo) {
            return !vo || !vo.verifyType || vo.verifyType === _yy_sl_theme_shared_biz_com_trade_optimize_modal_constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.NIL;
        }
        function hasError(vo) {
            return !noError(vo);
        }
        function isUnderStock(vo) {
            return (null === vo || void 0 === vo ? void 0 : vo.verifyType) === _yy_sl_theme_shared_biz_com_trade_optimize_modal_constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.UNDER_STOCK;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            noError,
            hasError,
            isUnderStock
        };
    },
    "./src/assets/cart/script/domain/vo/responseCode.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant_responseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/constant/responseCode.js");
        function isOk(vo) {
            if (!vo) return false;
            return vo.code === _constant_responseCode__WEBPACK_IMPORTED_MODULE_0__["default"].SUCCESS;
        }
        function is(vo, code) {
            if (!vo || !code) return false;
            return vo.code === code;
        }
        function batchIs(vo, code) {
            if (!vo || !code) return false;
            try {
                return code.split(",").includes(vo.code);
            } catch {
                return false;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            is,
            isOk,
            batchIs
        };
    },
    "./src/assets/cart/script/service/cart/hooks.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@funnyecho/hamon/dist/index.js");
        var _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/domain/model/cartItem.js");
        const verifyingProductOverflow = new _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__.AsyncSeriesBailHook;
        const verifyingActiveProductEmpty = new _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__.AsyncSeriesBailHook;
        const verifyingProductSoldOut = new _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__.AsyncSeriesBailHook((item => _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_1__["default"].getUniqueID(item)));
        const verifyingProductQuantityInvalid = new _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__.AsyncSeriesBailHook((item => _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_1__["default"].getUniqueID(item)));
        const productVerified = new _funnyecho_hamon__WEBPACK_IMPORTED_MODULE_0__.AsyncSeriesBailHook;
        const __WEBPACK_DEFAULT_EXPORT__ = {
            verifyingProductOverflow,
            verifyingActiveProductEmpty,
            verifyingProductSoldOut,
            verifyingProductQuantityInvalid,
            productVerified
        };
    },
    "./src/assets/cart/script/service/cart/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/cart/script/service/cart/service.js");
        function withCartService(svcAdapter, storageAdapter) {
            window._sl_cart__cart_service__ = new _service__WEBPACK_IMPORTED_MODULE_0__["default"].CartService(svcAdapter, storageAdapter);
        }
        function takeCartService() {
            return window._sl_cart__cart_service__;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            withCartService,
            takeCartService,
            eventBusEnum: _service__WEBPACK_IMPORTED_MODULE_0__["default"].CartEventBusEnum,
            eventBus: _service__WEBPACK_IMPORTED_MODULE_0__["default"].cartEventBus
        };
    },
    "./src/assets/cart/script/service/cart/service.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        var _yy_sl_theme_shared_utils_dataAccessor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        var _utils_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/cart/script/utils/event-bus/index.js");
        var _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/cart.js");
        var _domain_adapter_svc_voucher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/voucher.js");
        var _domain_adapter_svc_coupon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/coupon.js");
        var _domain_adapter_svc_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/order.js");
        var _domain_adapter_storage_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/cart/script/domain/adapter/storage/constant.js");
        var _constant_responseCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/assets/cart/script/constant/responseCode.js");
        var _domain_model_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/assets/cart/script/domain/model/cart.js");
        var _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/assets/cart/script/domain/model/cartItem.js");
        var _domain_model_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/assets/cart/script/domain/model/response.js");
        var _domain_model_promotionCode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/assets/cart/script/domain/model/promotionCode.js");
        var _domain_model_cartVerifyItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/assets/cart/script/domain/model/cartVerifyItem.js");
        var _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/assets/cart/script/domain/model/helpers.js");
        var _hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/assets/cart/script/service/cart/hooks.js");
        const CartEventBusEnum = {
            UPDATE: "cart:update"
        };
        const CartInfoKey = "cartInfo";
        class CartService {
            constructor(svcAdapter, storageAdapter) {
                this._svc = svcAdapter;
                this._storage = storageAdapter;
                this._cartDetail = _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__.SL_State.get(CartInfoKey) || null;
                this._inactiveCartItemListMemo = _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].memo();
                this._activeCartItemListMemo = _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].memo();
                this._cartItemListMemo = _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].memo();
                _utils_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].on(CartEventBusEnum.UPDATE, (data => {
                    this._cartDetail = data;
                }));
            }
            get inactiveCartItemList() {
                return this._inactiveCartItemListMemo((cartDetail => _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer(cartDetail).next(_domain_model_cart__WEBPACK_IMPORTED_MODULE_8__["default"].getInactiveCartItemList).next(_domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].mergeNthProduct)()), this.cartDetail);
            }
            get activeCartItemList() {
                return this._activeCartItemListMemo((cartDetail => _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer(cartDetail).next(_domain_model_cart__WEBPACK_IMPORTED_MODULE_8__["default"].getActiveCartItemList).next(_domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].mergeNthProduct)()), this.cartDetail);
            }
            get cartItemList() {
                return this._cartItemListMemo((cartDetail => _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer(cartDetail).next(_domain_model_cart__WEBPACK_IMPORTED_MODULE_8__["default"].getCartItemList).next(_domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].mergeNthProduct)()), this.cartDetail);
            }
            get cartDetail() {
                return this._cartDetail;
            }
            async getCartDetail() {
                const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].getCart(this._svc);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) {
                    const {data} = res;
                    this._cartDetail = data;
                    _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__.SL_State.set(CartInfoKey, data);
                    _utils_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].emit(CartEventBusEnum.UPDATE, data);
                }
                return res;
            }
            async updateCartState() {
                const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].getCart(this._svc);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) {
                    const {data} = res;
                    this._cartDetail = data;
                    _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__.SL_State.set(CartInfoKey, data);
                }
                return res;
            }
            async rerenderCartDom() {
                await _utils_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].emit(CartEventBusEnum.UPDATE, this._cartDetail);
            }
            async addSku({spuId, skuId, num, orderFrom, dataReportReq}) {
                if (!spuId || !skuId || num < 0) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_INVALID_PARAMS);
                const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].addCartItem(this._svc, {
                    spuId,
                    skuId,
                    num,
                    orderFrom,
                    dataReportReq
                });
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                return res;
            }
            async editSku({spuId, skuId, num, groupId, productSource}) {
                if (!spuId || !skuId || num < 0) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_INVALID_PARAMS);
                const skuInfo = {
                    spuId,
                    skuId,
                    num,
                    groupId,
                    productSource
                };
                const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].putCartItem(this._svc, skuInfo);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                return res;
            }
            async removeSkuList(skuInfoList) {
                if (Array.isArray(skuInfoList) && skuInfoList.length) {
                    const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].deleteCartItemList(this._svc, skuInfoList || []);
                    if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                    return res;
                }
                return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].resolveWithData();
            }
            getCheckoutParams(itemList) {
                var _this$cartDetail, _this$cartDetail$memb;
                const discountCode = _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer(this.cartDetail).next(_domain_model_cart__WEBPACK_IMPORTED_MODULE_8__["default"].getPromotionInfo).next(_domain_model_promotionCode__WEBPACK_IMPORTED_MODULE_11__["default"].getCode)();
                const useMemberPoint = null === (_this$cartDetail = this.cartDetail) || void 0 === _this$cartDetail ? void 0 : null === (_this$cartDetail$memb = _this$cartDetail.memberPointInfo) || void 0 === _this$cartDetail$memb ? void 0 : _this$cartDetail$memb.use;
                let abandonSeq = null;
                let abandonMark = null;
                const rawAbandonInfoFromCache = this._storage.getItem(_domain_adapter_storage_constant__WEBPACK_IMPORTED_MODULE_6__["default"].KEY_CART_ABANDON_INFO);
                if (rawAbandonInfoFromCache) ({mark: abandonMark, seq: abandonSeq} = JSON.parse(rawAbandonInfoFromCache));
                return _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer({
                    associateCart: true,
                    useMemberPoint
                }).next(discountCode ? _domain_adapter_svc_order__WEBPACK_IMPORTED_MODULE_5__["default"].withAbandonOrderDiscountCode : null, discountCode).next(abandonSeq ? _domain_adapter_svc_order__WEBPACK_IMPORTED_MODULE_5__["default"].withAbandonOrderInfo : null, abandonSeq, abandonMark).next(_domain_adapter_svc_order__WEBPACK_IMPORTED_MODULE_5__["default"].withAbandonOrderProductList, (itemList || []).map((item => ({
                    productSku: item.skuId,
                    productSeq: item.spuId,
                    productNum: item.num,
                    productPrice: item.price,
                    productName: item.name,
                    groupId: item.groupId,
                    productSource: item.productSource
                }))))();
            }
            async toggleVoucher(used) {
                const res = await _domain_adapter_svc_voucher__WEBPACK_IMPORTED_MODULE_3__["default"].toggleVoucher(this._svc, !!used);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                return res;
            }
            async applyCoupon(couponCode) {
                if (!couponCode) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_COUPON_INVALID_CODE);
                const res = await _domain_adapter_svc_coupon__WEBPACK_IMPORTED_MODULE_4__["default"].applyCoupon(this._svc, couponCode);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                return res;
            }
            async withdrawCoupon() {
                const couponCode = _domain_model_helpers__WEBPACK_IMPORTED_MODULE_13__["default"].reducer(this._cartDetail).next(_domain_model_cart__WEBPACK_IMPORTED_MODULE_8__["default"].getPromotionInfo).next(_domain_model_promotionCode__WEBPACK_IMPORTED_MODULE_11__["default"].getCode)();
                if (!couponCode) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_COUPON_INVALID_CODE);
                const res = await _domain_adapter_svc_coupon__WEBPACK_IMPORTED_MODULE_4__["default"].withdrawCoupon(this._svc, couponCode);
                if (_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(res)) await this.getCartDetail();
                return res;
            }
            async verifyCartItemList(cartItemList) {
                if (!cartItemList) cartItemList = this.cartItemList;
                return this._verifyCartItemList(cartItemList);
            }
            async _verifyCartItemList(cartItemList) {
                if (!Array.isArray(cartItemList)) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_INVALID_PARAMS);
                if (cartItemList.length <= 0) if (false !== await _hooks__WEBPACK_IMPORTED_MODULE_14__["default"].verifyingActiveProductEmpty.callPromise()) return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].rejectWithCode(_constant_responseCode__WEBPACK_IMPORTED_MODULE_7__["default"].FA_PRODUCT_ACTIVE_EMPTY);
                const checkRes = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].verifyCartItemListV2(this._svc, {
                    orderFrom: (0, _yy_sl_theme_shared_utils_dataAccessor__WEBPACK_IMPORTED_MODULE_15__.getSyncData)("orderFrom") || "web",
                    itemList: cartItemList.map((item => ({
                        spuId: _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].getSpuId(item),
                        skuId: _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].getSkuId(item),
                        num: _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].getQuantity(item),
                        groupId: _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].getGroupId(item),
                        productSource: _domain_model_cartItem__WEBPACK_IMPORTED_MODULE_9__["default"].getProductSource(item)
                    }))).filter((i => !!i.spuId && !!i.skuId))
                });
                if (!_domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].isResolved(checkRes)) return checkRes;
                return _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].resolveWithData(_domain_model_cartVerifyItem__WEBPACK_IMPORTED_MODULE_12__["default"].makeVerifyList(cartItemList, _domain_model_response__WEBPACK_IMPORTED_MODULE_10__["default"].getData(checkRes).checkItemList));
            }
            async getMemberPoint(use) {
                const res = await _domain_adapter_svc_cart__WEBPACK_IMPORTED_MODULE_2__["default"].memberPoint(this._svc, use);
                return res;
            }
            getCardItemList() {
                return this.cartItemList;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            CartService,
            CartEventBusEnum,
            cartEventBus: _utils_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"]
        };
    },
    "./src/assets/cart/script/service/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
        var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_logger_sentryReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/logger/sentryReport.js");
        var _domain_adapter_svc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/cart/script/domain/adapter/svc/index.js");
        var _domain_adapter_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/cart/script/domain/adapter/storage/index.js");
        var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/cart/script/service/cart/index.js");
        var _shared_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/shared/logger/index.js");
        const logger = _shared_logger__WEBPACK_IMPORTED_MODULE_6__["default"].pipeOwner(`${_yy_sl_theme_shared_utils_logger_sentryReport__WEBPACK_IMPORTED_MODULE_2__.Owner.Cart} cart/script/service/index.js`);
        const cartToken = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("t_cart");
        let initialized = false;
        function init() {
            if (initialized) return;
            initialized = true;
            _domain_adapter_svc__WEBPACK_IMPORTED_MODULE_3__["default"].withSvc({
                ai: _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"]
            });
            _cart__WEBPACK_IMPORTED_MODULE_5__["default"].withCartService(_domain_adapter_svc__WEBPACK_IMPORTED_MODULE_3__["default"].takeSvc(), _domain_adapter_storage__WEBPACK_IMPORTED_MODULE_4__["default"].takeStorage());
            logger.info(`normal 主站购物车 全局化 cart service _init`, {
                data: {
                    cartToken
                },
                action: _yy_sl_theme_shared_utils_logger_sentryReport__WEBPACK_IMPORTED_MODULE_2__.Action.InitCart,
                status: _shared_logger__WEBPACK_IMPORTED_MODULE_6__.Status.Success
            });
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            init
        };
    },
    "./src/assets/cart/script/utils/event-bus/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_createLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/createLogger.js");
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        const emitLogger = (0, _yy_sl_theme_shared_utils_createLogger__WEBPACK_IMPORTED_MODULE_0__["default"])("emit");
        const emitter = _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_1__.SL_EventBus;
        const oriEmit = emitter.emit;
        emitter.emit = function(event, data) {
            emitLogger.log(event, data);
            oriEmit.apply(emitter, arguments);
        };
        const __WEBPACK_DEFAULT_EXPORT__ = emitter;
    },
    "./src/assets/cart/script/utils/object.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function has(o, k) {
            if (!o || !k) return false;
            return Object.prototype.hasOwnProperty.call(o, k);
        }
        function isNilObject(o) {
            if (!o) return true;
            return 0 === Object.keys(o).length;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            has,
            isNilObject
        };
    },
    "./src/assets/commons/base/BaseClass.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => EventManager
        });
        function isInvalid(param) {
            return !param || "string" !== typeof param;
        }
        function isJqueryInstance(dom) {
            return dom && dom instanceof __SL_$__ && dom.length > 0;
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
                this.$win = __SL_$__(window);
                this.$doc = __SL_$__(document);
                this.$portals = portals ? __SL_$__(portals) : null;
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
                this.$portals = portals ? __SL_$__(portals) : null;
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
    },
    "./src/assets/commons/cart/globalEvent.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            ADD_TO_CART: () => interior_event.ADD_TO_CART,
            CLOSE_MINI_CART: () => CLOSE_MINI_CART,
            OPEN_MINI_CART: () => interior_event.OPEN_MINI_CART
        });
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var logger = __webpack_require__("../shared/browser/utils/logger/index.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var dataAccessor = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        var tradeReport = __webpack_require__("../shared/browser/utils/tradeReport/index.js");
        var interior_event = __webpack_require__("../shared/browser/events/trade/interior-event/index.js");
        var hdReport = __webpack_require__("../shared/browser/utils/tradeReport/hdReport.js");
        var event_bus = __webpack_require__("../shared/browser/utils/event-bus.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        var tradeReport_const = __webpack_require__("../shared/browser/utils/tradeReport/const.js");
        const reportEvent = data => {
            window.HdSdk && window.HdSdk.shopTracker.collect(data);
        };
        const setProduct = data => {
            const product_id = [];
            const variantion_id = [];
            const quantity = [];
            const price = [];
            const product_name = [];
            const isCheckoutPage = "Checkout" === window.Shopline.uri.alias;
            data && data.forEach((item => {
                const {productSeq, productSku, productNum, finalPrice, productPrice, productName} = item || {};
                product_id.push(productSeq);
                variantion_id.push(productSku);
                quantity.push(productNum);
                price.push(currency["default"].formatNumber(Number(isCheckoutPage ? finalPrice : productPrice) || 0).toString());
                product_name.push(productName);
            }));
            return {
                product_id: product_id.join(","),
                variantion_id: variantion_id.join(","),
                quantity: quantity.join(","),
                price: price.join(","),
                product_name: product_name.join(",")
            };
        };
        const reportCoupon = data => {
            reportEvent(data);
        };
        const reportV2Checkout = data => {
            const {products, ...ext} = data;
            const items = setProduct(products);
            reportEvent({
                ...ext,
                ...items
            });
        };
        const {GO_TO_CHECKOUT, PAYPAL_CHECKOUT, COUPON_APPLY, COUPON_INPUT} = tradeReport_const.HD_EVENT_NAME;
        const reportPaypal = (data, cid, ext = {}) => {
            const products = data && data.map((item => ({
                product_id: item.productSeq,
                variantion_id: item.productSku,
                quantity: item.productNum,
                price: `${currency["default"].formatNumber(Number(item && item.productPrice) || 0)}`,
                product_name: item.productName
            })));
            const page = "cart";
            hdReport.hidooRp.event({
                event_name: "quick_payment",
                page,
                products,
                ...ext
            }, cid);
        };
        const proceedToCheckout = ({cid, event_status}) => {
            hdReport.hidooRp.event({
                event_name: "click_component",
                custom_component: [ "proceed_to_checkout" ]
            }, cid);
            hdReport.hidooRp.event({
                event_name: "proceed_to_checkout",
                event_status
            }, cid);
        };
        const getIsMiniCart = (node, ele) => {
            const dom = __SL_$__(node);
            const closest = dom && dom.closest(ele || ".trade_coupon__wrapper");
            const isMiniCart = closest && closest.hasClass("sidebar");
            return isMiniCart;
        };
        const couponInput = () => {
            event_bus.SL_EventBus.on(COUPON_INPUT, (({data}) => {
                const {node, ele} = data;
                const isMiniCart = getIsMiniCart(node, ele);
                reportCoupon({
                    page: isMiniCart ? tradeReport_const.pageMapV2.MiniCart : tradeReport_const.pageMapV2.Cart,
                    module: tradeReport_const.HdModule.couponCode,
                    component: tradeReport_const.HdComponent.couponCodeInput,
                    action_type: tradeReport_const.ActionType.input
                });
            }));
        };
        const couponApply = () => {
            event_bus.SL_EventBus.on(COUPON_APPLY, (({data}) => {
                const {discountCode, node, ele} = data;
                const isMiniCart = getIsMiniCart(node, ele);
                reportCoupon({
                    page: isMiniCart ? tradeReport_const.pageMapV2.MiniCart : tradeReport_const.pageMapV2.Cart,
                    module: tradeReport_const.HdModule.couponCode,
                    component: tradeReport_const.HdComponent.couponCodeUse,
                    action_type: tradeReport_const.ActionType.click,
                    coupon_code: discountCode
                });
            }));
        };
        const reportBuyNow = () => {
            event_bus.SL_EventBus.on(GO_TO_CHECKOUT, (({data}) => {
                const {event_status, isCart, stage, products} = data;
                if (isCart) {
                    const cid = tradeReport_const.pageMap[stage];
                    const page = tradeReport_const.pageMapV2[stage];
                    if (page) reportV2Checkout({
                        page: tradeReport_const.pageMapV2[stage],
                        module: tradeReport_const.HdModule.checkout,
                        component: tradeReport_const.HdComponent.checkout,
                        action_type: tradeReport_const.ActionType.click,
                        products
                    });
                    if (cid) proceedToCheckout({
                        cid,
                        event_status
                    });
                }
            }));
        };
        const quickPayment = () => {
            event_bus.SL_EventBus.on(PAYPAL_CHECKOUT, (({data}) => {
                const {event_status, product, stage} = data;
                if (tradeReport_const.cartPage[stage]) {
                    const cid = tradeReport_const.pageMap[stage];
                    const page = tradeReport_const.pageMapV2[stage];
                    if (page) reportV2Checkout({
                        page: tradeReport_const.pageMapV2[stage],
                        module: tradeReport_const.HdModule.checkout,
                        component: tradeReport_const.HdComponent.paypalBtn,
                        action_type: tradeReport_const.ActionType.click,
                        products: product
                    });
                    reportPaypal(product, cid, {
                        event_status
                    });
                }
            }));
        };
        const clickCarContinue = key => {
            const dom = document.querySelector(key);
            dom && dom.addEventListener("click", (() => {
                const isCartPage = "Cart" === window.Shopline.uri.alias;
                if (isCartPage) reportEvent({
                    page: tradeReport_const.pageMapV2.Cart,
                    module: tradeReport_const.HdModule.normal,
                    component: tradeReport_const.HdComponent.continueShopping,
                    action_type: tradeReport_const.ActionType.click
                });
            }));
        };
        const listenCartReport = () => {
            reportBuyNow();
            quickPayment();
            couponInput();
            couponApply();
            clickCarContinue(".trade-cart-non-empty-continue-btn");
        };
        var topDrawer = __webpack_require__("./src/assets/commons/components/topDrawer/index.js");
        var service = __webpack_require__("./src/assets/cart/script/service/index.js");
        var cart = __webpack_require__("./src/assets/cart/script/service/cart/index.js");
        var responseCode = __webpack_require__("./src/assets/cart/script/domain/vo/responseCode.js");
        let miniCartScriptPromise;
        const dynamicImportMiniCart = async () => {
            if (miniCartScriptPromise) return miniCartScriptPromise;
            miniCartScriptPromise = new Promise(((resolve, reject) => {
                const script = document.createElement("script");
                const {js} = window.__CHUNK_URL__.miniCart;
                document.body.appendChild(script);
                script.onload = () => {
                    resolve();
                };
                script.onerror = reject;
                script.src = js;
            }));
            return miniCartScriptPromise;
        };
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        const globalEvent_logger = logger["default"].pipeOwner({
            owner: "Cart",
            onTag: key => {
                if ("eventId" === key) return true; else return false;
            }
        });
        const CLOSE_MINI_CART = Symbol("CLOSE_MINI_CART");
        const OPEN_TOP_CART = Symbol("OPEN_TOP_CART");
        const cartOpenType = state_selector.SL_State.get("theme.settings.cart_open_type");
        service["default"].init();
        if (window.location.pathname.includes("/cart")) dynamicImportMiniCart(); else if ("newpage" !== cartOpenType) setTimeout(dynamicImportMiniCart, 6e3);
        const interior = window.SL_EventBus;
        const noop = () => {};
        listenCartReport();
        interior.on(interior_event.OPEN_MINI_CART, (async ({data = {}, onSuccess = noop} = {}) => {
            null === onSuccess || void 0 === onSuccess ? void 0 : onSuccess(data);
            window.location.href = "/cart";
        }));
        window.SL_EventBus.on(OPEN_TOP_CART, (async () => {
            await dynamicImportMiniCart();
            window.SL_EventBus.emit(topDrawer.DRAWER_EVENT_NAME, {
                id: "cart-select",
                operator: topDrawer.DRAWER_OPERATORS.OPEN
            });
        }));
        const closeMiniCart = () => {
            window.SL_EventBus.emit(topDrawer.DRAWER_EVENT_NAME, {
                id: "cart-select",
                operator: topDrawer.DRAWER_OPERATORS.CLOSE
            });
        };
        window.SL_EventBus.on(CLOSE_MINI_CART, closeMiniCart);
        window.SL_EventBus.on(interior_event.ADD_TO_CART, (async ({spuId, skuId, num, price, success, error, complete, eventID, reportParamsExt}) => {
            var _window;
            const dataReportReq = (0, tradeReport.setAddtoCart)(price, null === (_window = window) || void 0 === _window ? void 0 : _window.SL_State.get("storeInfo.currency"), eventID, reportParamsExt);
            const skuParams = {
                spuId,
                skuId,
                num,
                orderFrom: (0, dataAccessor.getSyncData)("orderFrom"),
                dataReportReq
            };
            try {
                if ("newpage" !== cartOpenType) {
                    closeMiniCart();
                    await dynamicImportMiniCart();
                    window.SL_EventBus.emit("NEED_OPEN_TOP_CART", {
                        spuId,
                        skuId,
                        num
                    });
                }
                const isDismissParams = [ "orderFrom" ].some((key => !skuParams[key] && 0 !== skuParams[key]));
                if (isDismissParams) globalEvent_logger.info("[加购请求参数缺失，请检查]", {
                    ...skuParams
                });
                globalEvent_logger.debug("[加购请求参数初始化]", {
                    ...skuParams
                });
                const res = await cart["default"].takeCartService().addSku(skuParams);
                globalEvent_logger.debug("[加购请求响应数据]", {
                    res,
                    eventId: dataReportReq.eventId
                });
                if (!responseCode["default"].isOk(res)) {
                    let errMsg = res.msg;
                    if (responseCode["default"].is(res, "TCAT0109")) errMsg = (0, i18n.t)("cart.notices.product_amount_limit");
                    if (responseCode["default"].batchIs(res, "TCAT0107,TCAT0112")) errMsg = (0, i18n.t)("cart.discount_price.buy_limit3", {
                        stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : "0"
                    });
                    if (responseCode["default"].is(res, "TCAT0111")) errMsg = (0, i18n.t)("cart.discount_price.buy_limit2", {
                        stock: res.data.maxPurchaseTotalNum > 0 ? res.data.maxPurchaseTotalNum : "0"
                    });
                    if (responseCode["default"].is(res, "TCAT0101")) errMsg = (0, i18n.t)("cart.item.none_existent");
                    if (responseCode["default"].is(res, "TCAT0103")) errMsg = (0, i18n.t)("products.product_list.product_has_been_removed");
                    (new toast["default"]).open(errMsg, 1500);
                    if ("function" === typeof error) error();
                } else {
                    if ("function" === typeof success) try {
                        success();
                    } catch (e) {
                        console.error(e);
                    }
                    if ("newpage" !== cartOpenType) window.SL_EventBus.emit(OPEN_TOP_CART); else interior.emit(interior_event.OPEN_MINI_CART);
                }
            } catch (e) {
                console.warn("add to cart fail:", e);
                globalEvent_logger.error(`[加购失败]`, {
                    e,
                    eventId: dataReportReq.eventId
                });
            } finally {
                if ("function" === typeof complete) complete();
            }
        }));
        window.SL_EventBus.on(interior_event.CONTROL_CART_BASIS, (async ({options, success, error}) => {
            const paramsEnum = {
                switchSideBar: "switchSideBar",
                updateState: "updateState",
                rerenderDom: "rerenderDom",
                cartDetail: "cartDetail"
            };
            const sideBarStatusEnum = {
                open: "open",
                close: "close"
            };
            const paramsFilter = () => {
                do {
                    const eventName = "Cart::ControlCartBasis Event: ";
                    if (!options || !Object.keys(options).length) {
                        console.warn(eventName, "params missing");
                        break;
                    }
                    if (!!Object.hasOwnProperty.call(options, paramsEnum.switchSideBar) && !Object.values(sideBarStatusEnum).includes(options.switchSideBar)) {
                        console.warn(eventName, `【switchSideBar: ${options.switchSideBar}】 is invalid`);
                        break;
                    }
                    if (!!Object.hasOwnProperty.call(options, paramsEnum.updateState) && "boolean" !== typeof options.updateState) {
                        console.warn(eventName, `【updateState: ${options.updateState}】 is invalid`);
                        break;
                    }
                    if (!!Object.hasOwnProperty.call(options, paramsEnum.rerenderDom) && "boolean" !== typeof options.rerenderDom) {
                        console.warn(eventName, `【rerenderDom: ${options.rerenderDom}】 is invalid`);
                        break;
                    }
                    if (!!Object.hasOwnProperty.call(options, paramsEnum.cartDetail) && "boolean" !== typeof options.cartDetail) {
                        console.warn(eventName, `【cartDetail: ${options.cartDetail}】 is invalid`);
                        break;
                    }
                    if (Object.keys(options).some((item => !Object.hasOwnProperty.call(paramsEnum, item)))) {
                        console.warn(eventName, "params has invalid key");
                        break;
                    }
                    return true;
                } while (false);
                return false;
            };
            try {
                if (paramsFilter()) {
                    const {switchSideBar, updateState, rerenderDom, cartDetail} = options;
                    const cartId = "cart-drawer";
                    let cartInfo;
                    if (switchSideBar) interior.emit(topDrawer.DRAWER_EVENT_NAME, {
                        id: cartId,
                        status: switchSideBar
                    });
                    if (updateState) await cart["default"].takeCartService().updateCartState();
                    if (rerenderDom) await cart["default"].takeCartService().rerenderCartDom();
                    if (cartDetail) {
                        const CartInfoKey = "cartInfo";
                        cartInfo = state_selector.SL_State.get(CartInfoKey) || null;
                        null === success || void 0 === success ? void 0 : success(cartInfo);
                        return;
                    }
                    null === success || void 0 === success ? void 0 : success();
                    return;
                }
            } catch (e) {
                null === error || void 0 === error ? void 0 : error();
                console.warn(`${interior_event.CONTROL_CART_BASIS} FAIL:`, e);
            }
        }));
    },
    "./src/assets/commons/components/toast/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => _toast__WEBPACK_IMPORTED_MODULE_0__["default"],
            Loading: () => _loading__WEBPACK_IMPORTED_MODULE_1__["default"]
        });
        var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/components/toast/toast.js");
        var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/components/toast/loading.js");
    },
    "./src/assets/commons/components/toast/loading.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => Loading
        });
        var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/components/toast/toast.js");
        const OPTION_TARGET = "body";
        class Loading {
            constructor(options = {}) {
                this.options = {
                    duration: 1500,
                    fullscreen: !options.target || options.target === OPTION_TARGET,
                    ...options
                };
                this.$loading = null;
                this.$target = null;
                this.timer = null;
                this.init();
            }
            init() {
                const template = (0, _toast__WEBPACK_IMPORTED_MODULE_0__.getTemplate)(this.options, _toast__WEBPACK_IMPORTED_MODULE_0__.LOADING);
                this.$target = __SL_$__(this.options.target || document.body);
                this.$loading = __SL_$__(template);
            }
            open() {
                const {$target} = this;
                const originPosition = $target.css("position");
                if ("static" === originPosition) $target.css("position", "relative");
                this.$loading.appendTo($target).removeClass(_toast__WEBPACK_IMPORTED_MODULE_0__.HIDDEN_CLASSNAME);
                if (this.options.duration > 0) this.timer = setTimeout(this.close.bind(this), this.options.duration);
            }
            close() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.$loading.remove();
                this.$loading = null;
                this.$target.css("position", "");
            }
        }
    },
    "./src/assets/commons/components/toast/toast.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            LOADING: () => LOADING,
            getTemplate: () => getTemplate,
            HIDDEN_CLASSNAME: () => HIDDEN_CLASSNAME,
            default: () => Toast
        });
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const LOADING = "loading";
        const getTemplate = (options, type = "default") => {
            const loadingColor = options.loadingColor || "black";
            const templates = {
                [LOADING]: `\n      <div class="mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <span class="mp-loading__spinner mp-loading__spinner--circular">\n            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="${loadingColor}" stroke-width="2.5" stroke-linecap="round"/>\n            </svg>\n          </span>\n        </div>\n        <div class="mp-toast__content mp-toast__text">${options.content}</div>\n      </div>\n    `,
                default: `\n      <div class="mp-toast mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-toast__content mp-toast__inner">${options.content}</div>\n      </div>\n    `
            };
            return templates[type];
        };
        const OPTION_TARGET = "body";
        const defaultOptions = {
            duration: 1500,
            content: "",
            target: OPTION_TARGET
        };
        const HIDDEN_CLASSNAME = "mp-toast__hidden";
        const CONTENT_CLASSNAME = "mp-toast__content";
        class Toast {
            constructor(options = {}) {
                this.options = {
                    ...defaultOptions,
                    fullscreen: !options.target || options.target === OPTION_TARGET,
                    ...options
                };
                this.$toast = null;
                this.$target = null;
                this.timer = null;
                this.instance = null;
                this.render();
            }
            static init(options) {
                return this.getSingleton(options);
            }
            static loading(options) {
                return this.getSingleton(options, LOADING);
            }
            static getSingleton(options = {}, type) {
                let {instance} = this;
                if (!instance) {
                    instance = new Toast(options);
                    this.instance = instance;
                }
                if (instance.type !== type) {
                    instance.type = type;
                    if (instance.$toast) instance.$toast.remove();
                    instance.render();
                }
                instance.open(options.content || "", options.duration);
                return instance;
            }
            render() {
                const template = getTemplate(this.options, this.type || this.options.type);
                this.$toast = __SL_$__(template);
                this.$target = __SL_$__(this.options.target);
                const {$target} = this;
                if ("static" === $target.css("position")) $target.css("position", "relative");
                $target.append(this.$toast);
            }
            open(content = "", duration) {
                const {options, $target} = this;
                if ("static" === $target.css("position")) $target.css("position", "relative");
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                const {$toast} = this;
                const $text = $toast.find(`.${CONTENT_CLASSNAME}`);
                $text.html(content || this.options.content || "");
                $toast.removeClass(HIDDEN_CLASSNAME);
                const durationTime = "number" === typeof duration ? duration : options.duration;
                if (0 !== durationTime) this.timer = setTimeout(this.close.bind(this), durationTime);
            }
            close() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.$toast.addClass(HIDDEN_CLASSNAME);
                if ("function" === typeof this.options.onClose) this.options.onClose();
                this.$target.css("position", "");
            }
        }
        _defineProperty(Toast, "type", null);
    },
    "./src/assets/commons/components/topDrawer/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            DRAWER_EVENT_NAME: () => _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_const__WEBPACK_IMPORTED_MODULE_1__.DRAWER_EVENT_NAME,
            DRAWER_CALLBACK_EVENT_NAME: () => _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_const__WEBPACK_IMPORTED_MODULE_1__.DRAWER_CALLBACK_EVENT_NAME,
            DRAWER_OPERATORS: () => _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_const__WEBPACK_IMPORTED_MODULE_1__.DRAWER_OPERATORS,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/shared/components/topDrawer/index.js");
        var _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/components/hbs/shared/components/topDrawer/const.js");
        const __WEBPACK_DEFAULT_EXPORT__ = _yy_sl_theme_shared_components_hbs_shared_components_topDrawer_index__WEBPACK_IMPORTED_MODULE_0__["default"];
    },
    "./src/assets/commons/utils/checkEmail.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const checkEmail = email => {
            const re = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;
            if (!re.test(String(email).toLowerCase())) return "regexp";
            if ((null === email || void 0 === email ? void 0 : email.length) > 50) return "length.over";
            return true;
        };
        const __WEBPACK_DEFAULT_EXPORT__ = checkEmail;
    },
    "./src/assets/commons/utils/debounce.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function __WEBPACK_DEFAULT_EXPORT__(wait, callback, immediate) {
            let timeout;
            return function(...args) {
                const context = this;
                const later = function() {
                    timeout = null;
                    if (!immediate) callback.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) callback.apply(context, args);
            };
        }
    },
    "./src/assets/commons/utils/helper.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/main.js");
        const platformType = {
            pc: "pc",
            pad: "pad",
            mobile: "mobile"
        };
        const getPlatform = () => {
            const winWidth = Math.min(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
            let platform;
            if (winWidth > 960) platform = "pc"; else if (winWidth > 750) platform = "pad"; else platform = "mobile";
            return platform;
        };
        function listenPlatform(callback) {
            _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__.SL_EventBus.on("global:platformChange", callback);
        }
        let timer;
        let timerCount = 0;
        function init() {
            var _window;
            if (null !== (_window = window) && void 0 !== _window && _window.addEventListener) {
                if (timer) clearTimeout(timer);
                window.addEventListener("load", (() => {
                    let platform = getPlatform();
                    window.addEventListener("resize", (() => {
                        const newPlatform = getPlatform();
                        if (newPlatform !== platform) {
                            _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__.SL_EventBus.emit("global:platformChange", newPlatform);
                            platform = newPlatform;
                        }
                    }));
                }));
            } else {
                if (10 === timerCount) return;
                timer = setTimeout(init, 1e3);
                timerCount += 1;
            }
        }
        function isInViewport(el) {
            if (!(null !== el && void 0 !== el && el.tagName)) return console.warn(`${el} is not a element`);
            const rect = el.getBoundingClientRect();
            const vWidth = document.documentElement.clientWidth;
            const vHeight = document.documentElement.clientHeight;
            if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) return false;
            return true;
        }
        function isUnderViewport(el) {
            if (!(null !== el && void 0 !== el && el.tagName)) return console.warn(`${el} is not a element`);
            const rect = el.getBoundingClientRect();
            const vWidth = document.documentElement.clientWidth;
            const vHeight = document.documentElement.clientHeight;
            if (rect.right < 0 || rect.left > vWidth || rect.top > vHeight) return false;
            return true;
        }
        init();
        function getAbOrderSeqInfoCache(buyScence = "cart") {
            const seqInfo = _main__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.get(`${buyScence}AbOrderSeqInfo`);
            return seqInfo;
        }
        function setAbOrderSeqInfoCache(abandonedOrderSeqInfo, buyScence) {
            if (!buyScence) {
                console.warn("setAbOrderSeqInfoCache err miss buyScence");
                return;
            }
            _main__WEBPACK_IMPORTED_MODULE_1__["default"].localStorage.set(`${buyScence}AbOrderSeqInfo`, abandonedOrderSeqInfo);
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getPlatform,
            listenPlatform,
            platformType,
            getAbOrderSeqInfoCache,
            setAbOrderSeqInfoCache,
            isInViewport,
            isUnderViewport
        };
    },
    "./src/assets/commons/utils/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/utils/helper.js");
        var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/main.js");
        const __WEBPACK_DEFAULT_EXPORT__ = {
            ..._main__WEBPACK_IMPORTED_MODULE_1__["default"],
            helper: _helper__WEBPACK_IMPORTED_MODULE_0__["default"]
        };
    },
    "./src/assets/commons/utils/main.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/isPlainObject.js");
        var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);
        const isBrowser = "undefined" !== typeof window && "undefined" !== typeof navigator;
        function getStorage(storageName) {
            return {
                get(key) {
                    if (!isBrowser) return;
                    const storage = window[storageName];
                    const numRe = /^\d+$/;
                    const jsonRe = /(^\{.*\}$)|(^\[.*\]$)/;
                    const boolRe = /^(true|false|null)$/;
                    let val = storage.getItem(key);
                    try {
                        if ("string" === typeof val && val && (numRe.test(val) || boolRe.test(val) || jsonRe.test(val))) val = JSON.parse(val);
                    } catch (e) {
                        console.warn("json.parse storage value err:", e);
                        val = {};
                    }
                    return val;
                },
                set(key, val) {
                    if (!isBrowser) return;
                    let value = val;
                    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(value) || value instanceof Array) value = JSON.stringify(value);
                    const storage = window[storageName];
                    storage[key] = value;
                },
                del(key) {
                    if (!isBrowser) return;
                    const storage = window[storageName];
                    storage.removeItem(key);
                }
            };
        }
        const [sessionStorage, localStorage] = [ "sessionStorage", "localStorage" ].map(getStorage);
        const utils = {
            sessionStorage,
            localStorage
        };
        const __WEBPACK_DEFAULT_EXPORT__ = utils;
    },
    "./src/assets/shared/logger/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Status: () => _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogStatus,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _sl_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@sl/logger/lib/index.es.js");
        var _yy_sl_theme_shared_utils_logger_sentry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/logger/sentry.js");
        const newLogger = _yy_sl_theme_shared_utils_logger_sentry__WEBPACK_IMPORTED_MODULE_1__["default"].pipeOwner("trade");
        const __WEBPACK_DEFAULT_EXPORT__ = newLogger;
    },
    "./src/assets/stage/announcement-bar/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class AnnouncementBar {
            onUnload() {}
        }
        _defineProperty(AnnouncementBar, "type", "announcement-bar");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(AnnouncementBar.type, AnnouncementBar);
    },
    "./src/assets/stage/header/scripts/desktop-site-nav.js": () => {
        var _window$__PRELOAD_STA, _window$__PRELOAD_STA2;
        const isPad = (null === (_window$__PRELOAD_STA = window.__PRELOAD_STATE__) || void 0 === _window$__PRELOAD_STA ? void 0 : null === (_window$__PRELOAD_STA2 = _window$__PRELOAD_STA.request) || void 0 === _window$__PRELOAD_STA2 ? void 0 : _window$__PRELOAD_STA2.is_mobile) || void 0 !== document.ontouchmove;
        const firstNavItem = ".site-nav--has-dropdown";
        const firstNavItemLink = ".site-nav__link--has-dropdown";
        const registryNavMouseenterHandler = () => {
            document.querySelectorAll(firstNavItem).forEach((element => {
                element.addEventListener("mouseenter", (function() {
                    element.classList.add("actived");
                }));
                element.addEventListener("mouseleave", (function() {
                    element.classList.remove("actived");
                }));
            }));
        };
        if (isPad) {
            __SL_$__(document).on("click", firstNavItemLink, (function(e) {
                e.preventDefault();
                e.stopPropagation();
                const $parent = __SL_$__(this).parent();
                if ($parent.hasClass("actived")) {
                    window.location.href = e.target.href;
                    $parent.removeClass("actived");
                } else {
                    $parent.addClass("actived");
                    __SL_$__(firstNavItem).not($parent).removeClass("actived");
                }
            }));
            __SL_$__(document).on("click", "body", (function(e) {
                const that = __SL_$__(e.target).parents(firstNavItem);
                if (!that.hasClass("site-nav--has-dropdown")) __SL_$__(firstNavItem).removeClass("actived");
            }));
        } else {
            registryNavMouseenterHandler();
            __SL_$__(document).on("shopline:section:load", (async e => {
                if ("header" === e.detail.sectionId) registryNavMouseenterHandler();
            }));
        }
    },
    "./src/assets/vendor/global.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__("./src/assets/commons/jquery.js");
        __webpack_require__("../shared/browser/utils/report/index.js");
        var event_bus = __webpack_require__("../shared/browser/utils/event-bus.js");
        __webpack_require__("../shared/browser/utils/state-selector.js");
        var checkout = __webpack_require__("../shared/browser/utils/checkout.js");
        var api_logger = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        const EVENT_NAME = "Checkout::NavigateCheckout";
        const logger = (0, api_logger["default"])(EVENT_NAME);
        const external = window && window.Shopline.event;
        const navigateCheckoutHandler = async arg => {
            logger.info(JSON.stringify(arg));
            const {data, onSuccess, onError} = arg;
            const {products, ...rest} = data;
            try {
                const result = await checkout["default"].save(products, rest);
                logger.info(JSON.stringify(result, null, 4));
                onSuccess && onSuccess(result);
            } catch (error) {
                logger.info(error);
                onError && onError(error);
            }
        };
        const navigateCheckout = () => external && external.on(EVENT_NAME, navigateCheckoutHandler);
        navigateCheckout.apiName = EVENT_NAME;
        const navigate_checkout = navigateCheckout;
        var request = __webpack_require__("../shared/browser/utils/request.js");
        const services = {
            getCartOwnerId: async () => request["default"].get("/carts/cart/owner-id"),
            getCartId: async () => request["default"].get("/carts/cart/cart-id")
        };
        const getNewCartId = async data => services.getCartId(data);
        const get_cart_id_EVENT_NAME = "Cart::GetCartId";
        const get_cart_id_logger = (0, api_logger["default"])(get_cart_id_EVENT_NAME);
        const interior = window && window.Shopline.event;
        const getCartId = () => interior && interior.on(get_cart_id_EVENT_NAME, (async argument => {
            const {data, onSuccess = () => {}, onError = () => {}} = argument;
            try {
                const result = await getNewCartId(data);
                get_cart_id_logger.info(result);
                onSuccess && onSuccess(result);
            } catch (error) {
                get_cart_id_logger.error(error);
                onError && onError(error);
            }
        }));
        getCartId.apiName = get_cart_id_EVENT_NAME;
        const get_cart_id = getCartId;
        var components_paypal = __webpack_require__("../shared/browser/components/paypal/index.js");
        const render_paypal_EVENT_NAME = "Paypal::Spb::Render";
        const render_paypal_logger = (0, api_logger["default"])(render_paypal_EVENT_NAME);
        const render_paypal_external = window && window.Shopline.event;
        const paypalRenderHandler = async argument => {
            const {data = {}, onSuccess, onError} = argument;
            try {
                const paypal = new components_paypal["default"](data);
                render_paypal_logger.info(paypal);
                onSuccess && onSuccess(paypal);
            } catch (error) {
                render_paypal_logger.error(error);
                onError && onError(error);
            }
        };
        const renderPayPal = () => render_paypal_external && render_paypal_external.on(render_paypal_EVENT_NAME, paypalRenderHandler);
        renderPayPal.apiName = render_paypal_EVENT_NAME;
        const render_paypal = renderPayPal;
        var interior_event = __webpack_require__("../shared/browser/events/trade/interior-event/index.js");
        const navigate_cart_EVENT_NAME = "Cart::NavigateCart";
        const navigate_cart_logger = (0, api_logger["default"])(navigate_cart_EVENT_NAME);
        const navigate_cart_interior = window && window.SL_EventBus;
        const navigate_cart_external = window && window.Shopline.event;
        const navigateCartHandler = argument => {
            const noop = () => {};
            const data = argument && argument.data || {};
            const onSuccess = argument && argument.onSuccess || noop;
            const onError = argument && argument.onError || noop;
            try {
                navigate_cart_interior.emit(interior_event.OPEN_MINI_CART, {
                    data,
                    onSuccess
                });
                navigate_cart_logger.log(data);
                if ("function" === typeof onSuccess) onSuccess();
            } catch (error) {
                if ("function" === typeof onError) onError(error);
            }
        };
        const navigateCart = () => navigate_cart_external && navigate_cart_external.on(navigate_cart_EVENT_NAME, navigateCartHandler);
        navigateCart.apiName = navigate_cart_EVENT_NAME;
        const navigate_cart = navigateCart;
        const ADD_TO_CART = "Cart::AddToCart";
        const CONTROL_CART_BASIS = "Cart::ControlCartBasis";
        const UPDATE_CHECKOUT_DETAIL = "Checkout::UpdateCheckoutDetail";
        const CHECKOUT_DETAIL_INIT = "Checkout::CheckoutDetailInit";
        const CHECKOUT_DETAIL_UPDATE = "Checkout::CheckoutDetailUpdate";
        const CART_DETAIL_UPDATE = "Cart::CartDetailUpdate";
        const LINE_ITEM_UPDATE = "Cart::LineItemUpdate";
        const add_to_cart_logger = (0, api_logger["default"])(ADD_TO_CART);
        const add_to_cart_interior = window && window.SL_EventBus;
        const add_to_cart_external = window && window.Shopline.event;
        const addToCart = () => add_to_cart_external && add_to_cart_external.on(ADD_TO_CART, (async argument => {
            const {data, onSuccess, onError} = argument;
            try {
                add_to_cart_logger.info(`[emit]`, data);
                add_to_cart_interior.emit(interior_event.ADD_TO_CART, {
                    ...data,
                    success: onSuccess,
                    error: onError
                });
            } catch (error) {
                onError(error);
            }
        }));
        addToCart.apiName = ADD_TO_CART;
        const add_to_cart = addToCart;
        const update_checkout_detail_logger = (0, api_logger["default"])(UPDATE_CHECKOUT_DETAIL);
        const update_checkout_detail_interior = window && window.SL_EventBus;
        const update_checkout_detail_external = window && window.Shopline.event;
        const updateCheckoutDetailDebounceHandle = () => {
            let requesting = false;
            let emitDataList = [];
            let tempEmitDataList = [];
            function reset() {
                requesting = false;
                emitDataList = [ ...tempEmitDataList ];
                tempEmitDataList = [];
                if (emitDataList.length) emitFunc();
            }
            function successFunc(res) {
                emitDataList.map((cb => cb && cb.onSuccess && cb.onSuccess(res)));
                reset();
            }
            function errorFunc(e) {
                emitDataList.map((cb => cb && cb.onError && cb.onError(e)));
                reset();
            }
            function emitFunc() {
                try {
                    update_checkout_detail_interior.emit(interior_event.INTERIOR_TRADE_UPDATE_DETAIL, {
                        onSuccess: successFunc,
                        onError: errorFunc
                    });
                } catch (e) {
                    errorFunc(e);
                }
            }
            return function({data, onSuccess, onError} = {}) {
                update_checkout_detail_logger.info("[emit]", JSON.stringify(data));
                if (requesting) tempEmitDataList.push({
                    onSuccess,
                    onError
                }); else {
                    requesting = true;
                    emitDataList.push({
                        onSuccess,
                        onError
                    });
                    emitFunc();
                }
            };
        };
        const updateCheckoutDetail = () => update_checkout_detail_external && update_checkout_detail_external.on(UPDATE_CHECKOUT_DETAIL, updateCheckoutDetailDebounceHandle());
        updateCheckoutDetail.apiName = UPDATE_CHECKOUT_DETAIL;
        const update_checkout_detail = updateCheckoutDetail;
        const control_cart_basis_logger = (0, api_logger["default"])(CONTROL_CART_BASIS);
        const control_cart_basis_interior = window && window.SL_EventBus;
        const control_cart_basis_external = window && window.Shopline.event;
        const controlCartBasis = () => control_cart_basis_external && control_cart_basis_external.on(CONTROL_CART_BASIS, (async argument => {
            const options = argument && argument.data || null;
            const onSuccess = argument && argument.onSuccess || (() => {});
            const onError = argument && argument.onError || (() => {});
            try {
                control_cart_basis_logger.info(`[emit]`, interior_event.CONTROL_CART_BASIS);
                control_cart_basis_interior.emit(interior_event.CONTROL_CART_BASIS, {
                    options,
                    success: onSuccess,
                    error: onError
                });
            } catch (error) {
                onError(error);
            }
        }));
        controlCartBasis.apiName = CONTROL_CART_BASIS;
        const control_cart_basis = controlCartBasis;
        const cart_line_item_update_interior = window && window.SL_EventBus;
        const cart_line_item_update_external = window && window.Shopline.event;
        const cartLineItemUpdateHandler = () => {
            cart_line_item_update_interior.emit(interior_event.LINE_ITEM_UPDATE);
        };
        const cartLineItemUpdate = () => cart_line_item_update_external && cart_line_item_update_external.on(LINE_ITEM_UPDATE, cartLineItemUpdateHandler);
        cartLineItemUpdate.apiName = LINE_ITEM_UPDATE;
        const cart_line_item_update = cartLineItemUpdate;
        const cart_detail_update_logger = (0, api_logger["default"])(`${CART_DETAIL_UPDATE} - EMIT`);
        const cart_detail_update_external = window && window.Shopline.event;
        const cart_detail_update_interior = window && window.SL_EventBus;
        const cartDetailUpdate = () => {
            cart_detail_update_interior && cart_detail_update_interior.on("cart:update", (data => {
                cart_detail_update_logger.info(data);
                cart_detail_update_external.emit(CART_DETAIL_UPDATE, {
                    ...data
                });
            }));
        };
        cartDetailUpdate.apiName = CART_DETAIL_UPDATE;
        const cart_detail_update = cartDetailUpdate;
        const checkout_detail_init_logger = (0, api_logger["default"])(`${CHECKOUT_DETAIL_INIT} - EMIT`);
        const checkout_detail_init_external = window && window.Shopline.event;
        const checkout_detail_init_interior = window && window.SL_EventBus;
        const checkoutDetailInit = () => {
            checkout_detail_init_interior && checkout_detail_init_interior.on("trade:billingDetailInit", (data => {
                checkout_detail_init_logger.info(data);
                checkout_detail_init_external.emit(CHECKOUT_DETAIL_INIT, {
                    ...data
                });
            }));
        };
        checkoutDetailInit.apiName = CHECKOUT_DETAIL_INIT;
        const checkout_detail_init = checkoutDetailInit;
        const checkout_detail_update_logger = (0, api_logger["default"])(`${CHECKOUT_DETAIL_UPDATE} - EMIT`);
        const checkout_detail_update_external = window && window.Shopline.event;
        const checkout_detail_update_interior = window && window.SL_EventBus;
        const checkoutDetailUpdate = () => {
            checkout_detail_update_interior && checkout_detail_update_interior.on("trade:billingDetailUpdate", (data => {
                checkout_detail_update_logger.info(data);
                checkout_detail_update_external.emit(CHECKOUT_DETAIL_UPDATE, {
                    ...data
                });
            }));
        };
        checkoutDetailUpdate.apiName = CHECKOUT_DETAIL_UPDATE;
        const checkout_detail_update = checkoutDetailUpdate;
        const developer_api_logger = (0, api_logger["default"])("register");
        const events = [ navigate_checkout, get_cart_id, render_paypal, navigate_cart, add_to_cart, control_cart_basis, update_checkout_detail, cart_detail_update, checkout_detail_init, checkout_detail_update, cart_line_item_update ];
        const developer_api = (...activateApiNames) => {
            const executedEvents = [];
            activateApiNames.forEach((activateApiName => {
                events.forEach((event => {
                    if (event && event.apiName === activateApiName) {
                        executedEvents.push(activateApiName);
                        event();
                    }
                }));
            }));
            developer_api_logger.info("executed events", executedEvents);
            return executedEvents;
        };
        const LOGIN_MODAL = "Customer::LoginModal";
        const REGISTER = "Customer::Register";
        const interior_event_LOGIN_MODAL = Symbol("LOGIN_MODAL");
        var axios = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(axios);
        function gen(name, mods) {
            if (!mods) return "";
            if ("string" === typeof mods) return ` ${name}--${mods}`;
            if (Array.isArray(mods)) return mods.reduce(((ret, item) => ret + gen(name, item)), "");
            return Object.keys(mods).reduce(((ret, key) => ret + (mods[key] ? gen(name, key) : "")), "");
        }
        function createBEM(name) {
            return (el, mods) => {
                if (el && "string" !== typeof el) {
                    mods = el;
                    el = "";
                }
                el = el ? `${name}__${el}` : name;
                return `${el}${gen(el, mods)}`;
            };
        }
        function createNamespace(commonName, name) {
            name = `${commonName}-${name}`;
            return createBEM(name);
        }
        var scroll_lock = __webpack_require__("../shared/browser/node_modules/scroll-lock/dist/scroll-lock.js");
        const common_bem = createNamespace("mp", "modal");
        const common_DEFAULT_MODAL_ID_PRE = "MpModal";
        const common_VISIBLE = "visible";
        const common_HIDDEN = "hidden";
        const common_animationClassMap = {
            visible: common_bem("visibleAnimation"),
            hidden: common_bem("notVisibleAnimation")
        };
        const common_visibleClassName = common_bem("visible");
        const common_maskClosableClass = common_bem("closable");
        var BaseClass = __webpack_require__("../shared/browser/components/hbs/shared/base/BaseClass.js");
        let uuid = 0;
        class ModalWithHtml extends BaseClass["default"] {
            constructor(options = {}) {
                super("mp:modal:full");
                const config = {
                    zIndex: 1e3,
                    containerClassName: "",
                    closable: true,
                    maskClosable: true,
                    bodyClassName: "",
                    content: "",
                    destroyedOnClosed: false,
                    afterClose: () => {},
                    ...options
                };
                this.modalId = config.id || `${common_DEFAULT_MODAL_ID_PRE}${++uuid}`;
                this.zIndex = config.zIndex;
                this.config = config;
                this.destroyed = false;
                this.init();
            }
            init() {
                const $modal = __SL_$__(`#${this.modalId}`);
                if ($modal.length > 0) {
                    this.$modal = $modal;
                    this.$setPortals($modal);
                    return;
                }
                this.$modal = this.buildModalHtml();
                this.$setPortals(this.$modal);
                this.bindEvents();
            }
            buildModalHtml() {
                const {zIndex, closable, containerClassName, bodyClassName, content, children} = this.config;
                const modalHtml = `\n      <div id="${this.modalId}" class="${common_bem("wrapper")}">\n        <div class="${common_bem("mask")}"></div>\n        <div class="${common_bem("container")}">\n          ${closable ? `<span class="${common_bem("close")}">\n            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M19.1998 4.80005L4.7998 19.2" stroke="currentColor" stroke-width="2"/>\n              <path d="M4.7998 4.79995L19.1998 19.2" stroke="currentColor" stroke-width="2"/>\n            </svg>          \n          </span>` : ""}\n          <div class="${common_bem("body")} ${bodyClassName}">\n            ${content}\n          </div>\n        </div>\n      </div>\n    `;
                const $modal = __SL_$__(modalHtml);
                if (containerClassName) $modal.find(`.${common_bem("container")}`).addClass(containerClassName);
                if (bodyClassName) $modal.find(`.${common_bem("body")}`).addClass(bodyClassName);
                if (children) $modal.find(`.${common_bem("body")}`).append(children);
                if (("number" === typeof zIndex || "string" === typeof zIndex) && "" !== zIndex) $modal.css("z-index", zIndex);
                return $modal;
            }
            setContent(content) {
                this.config.content = content;
                this.$modal.find(`.${common_bem("body")}`).html(content);
            }
            show() {
                if (this.destroyed) {
                    this.destroyed = false;
                    this.unBindEvents = this.bindEvents();
                }
                const $modalBody = this.$modal.find(`.${common_bem("body")}`);
                this.$modal.appendTo(document.body);
                (0, scroll_lock.disablePageScroll)($modalBody.get(0));
                this.visibleState = common_VISIBLE;
                this.$modal.addClass([ common_visibleClassName, common_animationClassMap.visible ]).removeClass(common_animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                const $modalBody = this.$modal.find(`.${common_bem("body")}`);
                this.visibleState = common_HIDDEN;
                (0, scroll_lock.enablePageScroll)($modalBody.get(0));
                window.SL_EventBus.emit("global:popup:close");
                this.toggleMaskClassName();
                this.$modal.addClass(common_animationClassMap.hidden).removeClass(common_animationClassMap.visible);
                if (force) this.afterAnimation();
            }
            toggleMaskClassName() {
                if (this.config.maskClosable) this.$modal.find(`.${common_bem("mask")}`).toggleClass(common_maskClosableClass, this.visibleState === common_VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(common_visibleClassName, this.visibleState === common_VISIBLE);
                if ("function" === typeof this.config.afterClose) this.config.afterClose(this.$modal);
                this.destroy();
            }
            destroy() {
                if (this.config.destroyedOnClosed && this.visibleState === common_HIDDEN) {
                    this.$modal.remove();
                    this.detachEvents();
                    this.destroyed = true;
                }
            }
            bindEvents() {
                this.$onPortals("click", `.${common_bem("close")}`, this.hide.bind(this, false));
                if (this.config.maskClosable) this.$onPortals("click", `.${common_bem("mask")}`, this.hide.bind(this, false));
                this.$onPortals("animationend", `.${common_bem("container")}`, this.afterAnimation.bind(this));
            }
            detachEvents() {
                this.$offAll();
            }
        }
        function baseGet(object, path) {
            path = path.split(".");
            let index = 0;
            const {length} = path;
            while (null != object && index < length) object = object[path[index++]];
            return index && index === length ? object : void 0;
        }
        const CONTAINER_CLASS = "login-modal__container";
        const BODY_CLASS = "login-modal__body";
        const loadingTemplate = `\n  <div class="login-modal--loading">\n    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>\n    </svg>\n  </div>\n`;
        async function initLoginModalChunk(containerId) {
            return new Promise(((resolve, reject) => {
                let container = document.getElementById("customerLoginModalScriptUrl");
                let jsUrls = [];
                if (container && "script" === container.tagName.toLocaleLowerCase()) jsUrls.push(baseGet(container, "attributes.src.nodeValue", "")); else {
                    container = document.getElementById(containerId);
                    jsUrls = Array.from(container.querySelectorAll("script")).map((ele => baseGet(ele, "attributes.src.nodeValue", ""))).filter((url => !!url));
                }
                if (!jsUrls || !jsUrls.length) {
                    reject(new Error(`failed to get login-modal js chunk url`));
                    return;
                }
                const promiseList = jsUrls.map((url => new Promise(((resolve, reject) => {
                    const scriptEle = document.createElement("script");
                    document.body.appendChild(scriptEle);
                    scriptEle.onload = () => {
                        resolve();
                    };
                    scriptEle.async = false;
                    scriptEle.onerror = reject;
                    scriptEle.src = url;
                }))));
                Promise.all(promiseList).then(resolve).catch(reject);
            }));
        }
        const renderModal = async (options = {}, lifeCycle = {}) => {
            const modal = new ModalWithHtml({
                id: "loginModal",
                ...options,
                bodyClassName: BODY_CLASS,
                containerClassName: CONTAINER_CLASS
            });
            modal.setContent(loadingTemplate);
            modal.show();
            lifeCycle && lifeCycle.onShow && lifeCycle.onShow(modal);
            const {data} = await axios_default().get("/user/signIn?view=ajax");
            modal.setContent(data || "");
            await initLoginModalChunk(modal.modalId);
            return modal;
        };
        const login_modal_logger = (0, api_logger["default"])(LOGIN_MODAL);
        const login_modal_interior = window && window.SL_EventBus;
        const login_modal_external = window && window.Shopline.event;
        const isMobile = window && window.SL_State && window.SL_State.get("request.is_mobile");
        let modal;
        const bindResizeEvent = (() => {
            let hasBindEvent = false;
            return modal => {
                if (hasBindEvent) return;
                hasBindEvent = true;
                const container = document.querySelector(`#${modal.modalId} .login-modal__container`);
                const setHeight = () => {
                    const vh = .01 * window.innerHeight;
                    container.style.maxHeight = `${90 * vh}px`;
                };
                setHeight();
                document.addEventListener("visibilitychange", (() => {
                    if ("visible" === document.visibilityState) setHeight();
                }));
                window.addEventListener("resize", setHeight);
            };
        })();
        login_modal_interior.on(interior_event_LOGIN_MODAL, (async (options = {}) => {
            const {data = {}, onSuccess, onError} = options;
            const lifeCycle = {
                onShow: modal => {
                    if (isMobile) bindResizeEvent(modal);
                }
            };
            try {
                if (modal) {
                    if ("visible" !== modal.visibleState) {
                        modal.show();
                        lifeCycle && lifeCycle.onShow(modal);
                    }
                    onSuccess && onSuccess(modal);
                    return;
                }
                modal = await renderModal(data, lifeCycle);
                onSuccess && onSuccess(modal);
            } catch (e) {
                onError && onError(e);
            }
        }));
        const loginModal = () => login_modal_external && login_modal_external.on(LOGIN_MODAL, (async (options = {}) => {
            const {onError, data} = options;
            try {
                login_modal_logger.info(`[emit]`, data);
                login_modal_interior.emit(interior_event_LOGIN_MODAL, options);
            } catch (error) {
                onError && onError(error);
            }
        }));
        loginModal.apiName = LOGIN_MODAL;
        const login_modal = loginModal;
        const register_logger = (0, api_logger["default"])(`${REGISTER} - EMIT`);
        const register_interior = window.SL_EventBus;
        const register_external = window.Shopline.event;
        const register = () => register_interior.on("customer:register", ((data = {}) => {
            register_logger.info(data);
            register_external.emit(REGISTER, {
                ...data
            });
        }));
        register.apiName = REGISTER;
        const developer_api_register = register;
        const customer_developer_api_logger = (0, api_logger["default"])("register");
        const developer_api_events = [ login_modal, developer_api_register ];
        const customer_developer_api = (...activateApiNames) => {
            const executedEvents = [];
            activateApiNames.forEach((activateApiName => {
                developer_api_events.forEach((event => {
                    if (event && event.apiName === activateApiName) {
                        executedEvents.push(activateApiName);
                        event && event();
                    }
                }));
            }));
            customer_developer_api_logger.info("executed events", executedEvents);
            return executedEvents;
        };
        var js_cookie = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var ga = __webpack_require__("../shared/browser/utils/dataReport/ga.js");
        var ads = __webpack_require__("../shared/browser/utils/dataReport/ads.js");
        var fb = __webpack_require__("../shared/browser/utils/dataReport/fb.js");
        var report_const = __webpack_require__("../shared/browser/utils/report/const.js");
        function addToCartHdReport({spuId, skuId, num, price, name, page, event_name, event_category, product_type, event_id}) {
            window.HdSdk && window.HdSdk.shopTracker.report(event_id, {
                page,
                event_name,
                event_category,
                product_type,
                product_id: spuId,
                variantion_id: skuId,
                quantity: `${num}`,
                price: `${price}`,
                product_name: name
            });
        }
        function reportHd(page, type, data) {
            if (page === report_const.PageType.ProductDetail) switch (type) {
              case report_const.ClickType.AddToCart:
              case report_const.ClickType.BeginCheckout:
                addToCartHdReport(data);
            }
        }
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        var data_report_enum = __webpack_require__("../shared/browser/events/data-report/enum/index.js");
        const third_part_external = window && window.Shopline.event;
        const third_part_interior = window && window.SL_EventBus;
        let initialized = false;
        function onThirdPartReport(data) {
            third_part_interior.emit("global:thirdPartReport", {
                ...data || {}
            });
        }
        function on() {
            if (!third_part_external) {
                console.error(`failed to init ${data_report_enum.ThirdPartReport} listener: window?.Shopline.event not found`);
                return;
            }
            if (!third_part_interior) {
                console.error(`failed to init ${data_report_enum.ThirdPartReport} listener: window?.SL_EventBus not found`);
                return;
            }
            if (initialized) return;
            third_part_external.on(data_report_enum.ThirdPartReport, onThirdPartReport);
            initialized = true;
        }
        const third_part = {
            on
        };
        const hiido_external = window && window.Shopline.event;
        let hiido_initialized = false;
        function onHiidoReport(data) {
            if (!data || !data.event_id) {
                console.error(`failed to report to hiido without data and event_id`);
                return;
            }
            const {event_id, ...params} = data;
            window.HdSdk && window.HdSdk.shopTracker.report(event_id, params);
        }
        function hiido_on() {
            if (!hiido_external) {
                console.error(`failed to init ${data_report_enum.HiidoReport} listener: window?.Shopline.event not found`);
                return;
            }
            if (hiido_initialized) return;
            hiido_external.on(data_report_enum.HiidoReport, onHiidoReport);
            hiido_initialized = true;
        }
        const hiido = {
            on: hiido_on
        };
        function adapters_on() {
            third_part.on();
            hiido.on();
        }
        const adapters = {
            on: adapters_on
        };
        const excludedDataReportEvents = new Set(Object.keys(data_report_enum).map((key => data_report_enum[key])));
        const dataReport_logger = (0, api_logger["default"])("DataReport:Instance - ON");
        class DataReport {
            constructor() {
                this.eventBus = event_bus.SL_EventBus;
                this.rpEvent = window.Shopline && window.Shopline.event;
            }
            load(data) {
                const {pageType, value} = data;
                const val = {
                    ...value,
                    currency: this.storeCurrency
                };
                const gaParam = ga["default"].load(pageType, val);
                const adsParams = (0, ads.loadAdsData)(pageType, val);
                const fbParams = (0, fb.loadFbData)(pageType, val);
                const params = {
                    GAAds: adsParams,
                    GA: gaParam,
                    FBPixel: fbParams
                };
                this.eventBus && this.eventBus.emit("global:thirdPartReport", params);
            }
            touch(data) {
                const {pageType, actionType, value} = data;
                const {content_spu_id, content_sku_id, content_category, content_name, currency, quantity, price, hdProducts, extra} = value || {};
                const spu_ids = [ content_spu_id ];
                if (Array.isArray(hdProducts)) hdProducts.forEach((item => {
                    if (item && item.spuId) spu_ids.push(item && item.spuId);
                    reportHd(pageType, actionType, item);
                }));
                const eid = (0, tool.getEventID)();
                const tpParams = {
                    skuId: spu_ids,
                    category: content_category,
                    name: content_name,
                    currency,
                    quantity,
                    price,
                    eventId: `addToCart${eid}`
                };
                if (extra && extra.abandonedOrderSeq && "buy_now" === extra.event_scenes) js_cookie.set(`${extra.abandonedOrderSeq}_fb_data`, {
                    tp: 2,
                    et: Date.now(),
                    ed: eid
                });
                const hdParams = {
                    spuId: content_spu_id,
                    skuId: content_sku_id,
                    name: content_name,
                    num: quantity,
                    price,
                    ...extra
                };
                const gaParam = ga["default"].click(pageType, actionType, tpParams);
                const adsParams = (0, ads.clickAdsData)(pageType, actionType, tpParams);
                const fbParams = (0, fb.clickFbData)(actionType, tpParams);
                const params = {
                    GAAds: adsParams,
                    GA: gaParam,
                    FBPixel: fbParams
                };
                this.eventBus && this.eventBus.emit("global:thirdPartReport", params);
                if (extra && extra.event_name) reportHd(pageType, actionType, hdParams);
            }
            listen(eventName) {
                this.rpEvent && this.rpEvent.on(eventName, (data => {
                    dataReport_logger.info(data);
                    if (data.interior && excludedDataReportEvents.has(data.interior)) {
                        dataReport_logger.error("not in access events", {
                            interior: data.interior,
                            excludedDataReportEvents
                        });
                        return;
                    }
                    const params = {
                        actionType: report_const.ClickType.AddToCart,
                        pageType: report_const.PageType.ProductDetail,
                        value: data && data.data
                    };
                    this.touch(params);
                }));
            }
        }
        const dataReport = new DataReport;
        adapters.on();
        const utils_dataReport = dataReport;
        var dataAccessor = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        var base_BaseClass = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const DRAWER_EVENT_NAME = "stage:drawer";
        const DRAWER_CALLBACK_EVENT_NAME = "stage:drawer:callback";
        function getEventRealElem(event) {
            const isJqueryEvent = event instanceof __SL_$__.Event;
            const oEvent = isJqueryEvent ? event.originalEvent : event;
            const eventPath = oEvent.composedPath && oEvent.composedPath() || oEvent.path;
            let index = 0;
            let currentEl;
            while (currentEl = eventPath[index]) {
                var _currentEl, _currentEl$nodeName;
                if ("font" !== (null === (_currentEl = currentEl) || void 0 === _currentEl ? void 0 : null === (_currentEl$nodeName = _currentEl.nodeName) || void 0 === _currentEl$nodeName ? void 0 : _currentEl$nodeName.toLowerCase())) break;
                index++;
            }
            return currentEl || event.target;
        }
        class GlobalDrawer extends base_BaseClass["default"] {
            constructor() {
                super();
                _defineProperty(this, "config", {
                    namespace: "stage:global-drawer"
                });
                _defineProperty(this, "classes", {
                    drawerOpenRoot: "stage-drawer-root-open",
                    drawerClosingRoot: "stage-drawer-root-closing",
                    activeDrawer: "stage-drawer--is-open"
                });
                _defineProperty(this, "selector", {
                    drawerContainer: ".stage-drawer",
                    closeButton: ".j-drawer-close",
                    backButton: ".j-drawer-back"
                });
                _defineProperty(this, "hub", {});
                _defineProperty(this, "jq", {
                    root: __SL_$__("body")
                });
                this.jq.root.removeClass(this.classes.drawerClosingRoot);
                this.jq.root.removeClass(this.classes.drawerOpenRoot);
                this.$setNamespace(this.config.namespace);
                this.init();
            }
            init() {
                window.SL_EventBus.on(DRAWER_EVENT_NAME, (({id, status, onOpen}) => {
                    if (!id) return;
                    const $drawer = __SL_$__(`#${id}`);
                    const isSubDrawer = $drawer.data("level") > 1;
                    this.hub[id] = "open" === status;
                    if ("open" === status) {
                        if ($drawer.hasClass(this.classes.activeDrawer)) {
                            "function" === typeof onOpen && onOpen({
                                id,
                                status
                            });
                            return;
                        }
                        this.prepareTransition($drawer, (() => {
                            this.jq.root.addClass(this.classes.drawerOpenRoot);
                            $drawer.addClass(this.classes.activeDrawer);
                            "function" === typeof onOpen && onOpen({
                                id,
                                status
                            });
                        }));
                        this.bindHandleClick(id);
                    }
                    if ("close" === status) {
                        if (isSubDrawer) {
                            const parentDrawer = $drawer.parents(`${this.selector.drawerContainer}.${this.classes.activeDrawer}`).eq(0);
                            if (parentDrawer) this.closeDrawer(parentDrawer, true);
                        }
                        this.closeDrawer($drawer, true);
                    }
                    if ("close_self" === status) {
                        if (!isSubDrawer) return;
                        this.closeDrawer($drawer);
                    }
                    window.SL_EventBus.emit(DRAWER_CALLBACK_EVENT_NAME, {
                        status,
                        id
                    });
                }));
            }
            bindHandleClick(id) {
                this.$on("click", (e => {
                    const realTarget = getEventRealElem(e);
                    if (!realTarget.closest(this.selector.drawerContainer)) window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
                        id,
                        status: "close"
                    });
                }));
                this.$on("click", this.selector.closeButton, (e => {
                    const container = e.target.closest(this.selector.drawerContainer);
                    if (container) window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
                        id: container.id,
                        status: "close"
                    });
                }));
                this.$on("click", this.selector.backButton, (e => {
                    const container = e.target.closest(this.selector.drawerContainer);
                    if (container) window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
                        id: container.id,
                        status: "close_self"
                    });
                }));
            }
            closeDrawer($drawer, removeMask) {
                if (!$drawer.hasClass(this.classes.activeDrawer)) return;
                this.prepareTransition($drawer, (() => {
                    if (removeMask) {
                        this.jq.root.removeClass(this.classes.drawerOpenRoot);
                        this.jq.root.addClass(this.classes.drawerClosingRoot);
                    }
                    $drawer.removeClass(this.classes.activeDrawer);
                }), (() => {
                    if (removeMask) this.jq.root.removeClass(this.classes.drawerClosingRoot);
                }));
                if (removeMask) this.offHandleClick();
            }
            offHandleClick() {
                this.$off("click");
            }
            off() {
                this.$offAll();
                window.SL_EventBus.off(DRAWER_EVENT_NAME);
            }
        }
        let instance = new GlobalDrawer;
        __SL_$__(document).on("shopline:section:load", (() => {
            Object.keys(instance.hub).filter((id => !!instance.hub[id])).forEach((id => {
                window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
                    status: "close",
                    id
                });
            }));
            instance.off();
            instance = new GlobalDrawer;
        }));
        const defaultOptions = {
            triggerClass: "global-dropdown-list__head",
            dropdownListClass: "global-dropdown-list__main",
            opendClass: "is-open",
            closedClass: "is-close"
        };
        function getTargetElement(container, options) {
            const {triggerClass, dropdownListClass} = options;
            const trigger = container.find(`.${triggerClass}`);
            const dropdownList = container.find(`.${dropdownListClass}`);
            return {
                container,
                trigger,
                dropdownList
            };
        }
        function toggle(options, flag) {
            const {container, dropdownList, opendClass, closedClass} = options;
            const isDisabled = "true" === container.attr("data-disabled");
            const isOpen = null == flag ? !container.hasClass(opendClass) : flag;
            if (isDisabled) return;
            dropdownList.css("height", isOpen ? dropdownList.prop("scrollHeight") : "");
            if (isOpen) container.addClass(opendClass).removeClass(closedClass); else container.addClass(closedClass).removeClass(opendClass);
        }
        function closeOtherReleased(options) {
            const {container} = options;
            const attr = "global-dropdown-list-related-id";
            const relatedId = container.data(attr);
            if (relatedId) __SL_$__(`[data-${attr}=${relatedId}]`).each(((_idx, element) => {
                if (element === container[0]) return;
                toggle({
                    ...options,
                    ...getTargetElement(__SL_$__(element), options)
                }, false);
            }));
        }
        __SL_$__((function() {
            function openHandler(event) {
                const trigger = __SL_$__(event.currentTarget);
                const container = trigger.parent(".global-dropdown-list");
                const dropdownList = trigger.siblings(".global-dropdown-list__main");
                const options = {
                    ...defaultOptions,
                    relatedId: container.data("global-dropdown-list-related-id"),
                    container,
                    trigger,
                    dropdownList
                };
                closeOtherReleased(options);
                toggle(options);
            }
            __SL_$__("body").on("click", `.global-dropdown-list .${defaultOptions.triggerClass}`, openHandler);
        }));
        var debounce = __webpack_require__("./node_modules/lodash/debounce.js");
        var debounce_default = __webpack_require__.n(debounce);
        var throttle = __webpack_require__("./node_modules/lodash/throttle.js");
        var throttle_default = __webpack_require__.n(throttle);
        var lodash_escape = __webpack_require__("./node_modules/lodash/escape.js");
        var escape_default = __webpack_require__.n(lodash_escape);
        var stage = __webpack_require__("../shared/browser/report/stage/index.js");
        var stage_const = __webpack_require__("../shared/browser/report/stage/const.js");
        class VirtualReport extends stage.StageReport {
            constructor() {
                super();
                this.defaultParams = {
                    ...this.defaultParams,
                    module: -999,
                    component: -999,
                    page: stage_const.virtualPageEnum.fixedSction
                };
                this.headerElementSelector = {
                    header: ".__sl-custom-track-stage-header",
                    btnUser: ".__sl-custom-track-stage-header-user",
                    btnCart: ".__sl-custom-track-stage-header-cart",
                    announcementItem: ".__sl-custom-track-stage-header-announcementItem",
                    newsletter: ".__sl-custom-track-stage-header-newsletter",
                    btnNewsletter: ".__sl-custom-track-stage-header-newsletter-button",
                    inputNewsletter: ".__sl-custom-track-stage-header-newsletter-input"
                };
                this.footerElementSelector = {
                    footer: ".__sl-custom-track-stage-footer",
                    newsletter: ".__sl-custom-track-stage-footer-newsletter",
                    btnNewsletter: ".__sl-custom-track-stage-footer-newsletter-button",
                    inputNewsletter: ".__sl-custom-track-stage-footer-newsletter-input"
                };
                this.footerPromotionSelector = {
                    footerPromotion: ".__sl-custom-track-stage-footerPromotion"
                };
                this.socialElementSelectorPrefix = "__sl-custom-track-stage-social-";
                this.commonElementSelector = {
                    navItem: ".__sl-custom-track-stage-navItem",
                    locale: ".__sl-custom-track-stage-locale",
                    currency: ".__sl-custom-track-stage-currency"
                };
            }
            inFooter(e) {
                const $target = __SL_$__(e.target);
                const $footer = $target.closest(this.footerElementSelector.footer);
                const flag = $footer.length > 0;
                return flag;
            }
            bindHeaderReport() {
                const selMap = this.headerElementSelector;
                this.expose({
                    selector: selMap.header,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum.header
                    }
                });
                this.bindClick({
                    selector: selMap.btnUser,
                    moreInfo: {
                        component: stage_const.virtualComponentEnum.user
                    }
                });
                this.bindClick({
                    selector: selMap.btnCart,
                    moreInfo: {
                        component: stage_const.virtualComponentEnum.cart
                    }
                });
                this.bindClick({
                    selector: selMap.announcementItem,
                    moreInfo: {
                        component: stage_const.virtualComponentEnum.announcement
                    }
                });
            }
            bindSocialReport() {
                const prefix = this.socialElementSelectorPrefix;
                this.bindClick({
                    selector: "a[href]",
                    customHandler: (e, params) => {
                        const $socialItem = __SL_$__(e.currentTarget);
                        const cls = $socialItem && $socialItem.attr("class") || "";
                        const hasClass = cls.indexOf(prefix) >= 0;
                        if (!$socialItem.length || !hasClass) return;
                        const {classList} = $socialItem[0];
                        const sel = Array.prototype.find.call(classList, (cls => cls.startsWith(prefix)));
                        const social_media_type = sel.replace(prefix, "");
                        const data = {
                            ...params,
                            social_media_type,
                            component: stage_const.virtualComponentEnum.socialItem,
                            module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header
                        };
                        this.click(data);
                    }
                });
            }
            bindNavReport() {
                this.bindClick({
                    selector: this.commonElementSelector.navItem,
                    customHandler: (e, params) => {
                        const data = {
                            ...params,
                            component: stage_const.virtualComponentEnum.navItem,
                            module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header
                        };
                        this.click(data);
                    }
                });
            }
            bindLocaleCurrencyReport() {
                this.bindClick({
                    selector: this.commonElementSelector.locale,
                    customHandler: (e, params) => {
                        const data = {
                            ...params,
                            component: stage_const.virtualComponentEnum.locale,
                            module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header
                        };
                        this.click(data);
                    }
                });
                this.bindClick({
                    selector: this.commonElementSelector.currency,
                    customHandler: (e, params) => {
                        const data = {
                            ...params,
                            component: stage_const.virtualComponentEnum.currency,
                            module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header
                        };
                        this.click(data);
                    }
                });
            }
            bindFooterReport() {
                this.expose({
                    selector: this.footerElementSelector.footer,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum.footer
                    }
                });
                this.bindFooterNewsLetter();
            }
            bindFooterPromotionReport() {
                this.expose({
                    selector: this.footerPromotionSelector.footerPromotion,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum["footer-promotion"]
                    }
                });
            }
            bindFooterNewsLetter() {
                const component = stage_const.virtualComponentEnum.newsletter;
                this.expose({
                    selector: this.footerElementSelector.newsletter,
                    moreInfo: {
                        component
                    }
                });
                this.bindClick({
                    selector: this.footerElementSelector.btnNewsletter,
                    moreInfo: {
                        component
                    }
                });
                this.bindInput({
                    selector: this.footerElementSelector.inputNewsletter,
                    moreInfo: {
                        component
                    }
                });
            }
            bindHeaderNewsLetter() {
                const component = stage_const.virtualComponentEnum.newsletter;
                this.expose({
                    selector: this.headerElementSelector.newsletter,
                    moreInfo: {
                        component
                    }
                });
                this.bindClick({
                    selector: this.headerElementSelector.btnNewsletter,
                    moreInfo: {
                        component
                    }
                });
                this.bindInput({
                    selector: this.headerElementSelector.inputNewsletter,
                    moreInfo: {
                        component
                    }
                });
            }
            reportSelectLang(e, lang) {
                const params = {
                    module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header,
                    component: stage_const.virtualComponentEnum.localeItem,
                    language_type: lang
                };
                this.click(params);
            }
            reportSelectCurrency(e, currency) {
                const params = {
                    module_type: this.inFooter(e) ? stage_const.sectionTypeEnum.footer : stage_const.sectionTypeEnum.header,
                    component: stage_const.virtualComponentEnum.currencyItem,
                    currency_type: currency
                };
                this.click(params);
            }
            reportSearch(searchWord) {
                this.collect({
                    component: stage_const.virtualComponentEnum.search,
                    event_name: "Search",
                    search_term: searchWord
                });
            }
        }
        const virtualReport = new VirtualReport;
        function initVirtualReport() {
            __SL_$__((() => {
                virtualReport.bindHeaderReport();
                virtualReport.bindFooterReport();
                virtualReport.bindFooterPromotionReport();
                virtualReport.bindSocialReport();
                virtualReport.bindNavReport();
                virtualReport.bindLocaleCurrencyReport();
            }));
        }
        const report_virtualReport = virtualReport;
        function header_search_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const SEARCH_PAGE_MAP = {
            index: 101,
            "products/search": 106,
            "products/detail": 102,
            collection: 107
        };
        const NOT_FOUND_PAGE = 120;
        const HEADER_SEARCH_EVENT = "stage-header-search";
        const SEARCH_API = "/product/list/query/suggest";
        const SEARCH_TYPE = {
            0: "suggest_search",
            1: "suggest_ai",
            2: "user_search"
        };
        const getSearchResultUrl = (key, type) => `/products/search?keyword=${encodeURIComponent(key.trim())}&type=${SEARCH_TYPE[type]}`;
        const renderSearchResultItem = (item, searchKey) => {
            const {title, src} = item;
            const url = getSearchResultUrl(title, src);
            if (title.toLocaleLowerCase() === searchKey.toLocaleLowerCase().trim()) return "";
            if (title.toLocaleLowerCase().startsWith(searchKey.toLocaleLowerCase())) return `<li>\n\t\t<a class="body3" href="${url}" data-type="${src}" data-match=true >\n\t\t\t<span>${escape_default()(title.substring(0, searchKey.length)).replaceAll(" ", "&nbsp;")}</span>${escape_default()(title.substring(searchKey.length, title.length)).replaceAll(" ", "&nbsp;")}\n\t\t</a>\n\t</li>`;
            return `<li>\n\t\t<a class="body3" href="${url}" data-type="${src}" data-match="true" >\n${escape_default()(title)}\n\t\t</a>\n\t</li>`;
        };
        const renderFirstKey = key => {
            const url = getSearchResultUrl(key, 2);
            return `<li>\n\t<a class="body3" href="${url}" data-type="2" data-match="true" >\n<span>${escape_default()(key)}</span>\n\t\t\t</a>\n\t</li>`;
        };
        const renderDynamicItem = (data, searchKey) => data.map((item => renderSearchResultItem(item, searchKey))).join("");
        const renderSearchResult = (data, searchKey) => renderFirstKey(searchKey) + renderDynamicItem(data, searchKey);
        class HeaderSearch extends base_BaseClass["default"] {
            constructor() {
                super();
                header_search_defineProperty(this, "config", {
                    namespace: "stage:headerSearch"
                });
                header_search_defineProperty(this, "cacheResult", {});
                header_search_defineProperty(this, "classes", {
                    activeClass: "is-active",
                    drawerOpenRoot: "stage-drawer-root-open",
                    drawerClosingRoot: "stage-drawer-root-closing",
                    drawerOpenRootSearch: "stage-drawer-root-open-search"
                });
                header_search_defineProperty(this, "selectors", {
                    searchContainer: ".header__search--container",
                    searchBtn: ".j-stage-header-search",
                    searchCloseBtn: ".j-stage-search-close",
                    suggestList: ".header__suggest--list",
                    suggestLink: ".header__search--predicate li a",
                    input: ".header__search--input",
                    forceSearchBtn: ".j-stage-force-search",
                    searchBarInput: ".searchbar--input",
                    searchBarSuggestList: ".searchbar__suggest--list"
                });
                header_search_defineProperty(this, "jq", {
                    root: __SL_$__("body")
                });
                header_search_defineProperty(this, "searchResultReport", debounce_default()(((data, searchKey) => {
                    var _data$filter, _data$filter2, _window$HdSdk;
                    const template = window.SL_State.get("template");
                    const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
                    const suggest_ai_count = null === data || void 0 === data ? void 0 : null === (_data$filter = data.filter((item => 1 === item.src))) || void 0 === _data$filter ? void 0 : _data$filter.length;
                    const suggest_search_count = null === data || void 0 === data ? void 0 : null === (_data$filter2 = data.filter((item => 0 === item.src))) || void 0 === _data$filter2 ? void 0 : _data$filter2.length;
                    null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60080059, {
                        page,
                        iframe_id: 1,
                        event_name: 131,
                        user_search: searchKey,
                        suggest_ai: suggest_ai_count || 0,
                        suggest_search: suggest_search_count || 0
                    });
                }), 400));
                header_search_defineProperty(this, "tempEventType", `click.tempWrapperClick-${this.namespace}-mask`);
                header_search_defineProperty(this, "updateDom", ((data, counter, resultList) => {
                    var _list$children$;
                    if (counter !== this.counter) return;
                    const html = renderDynamicItem(data, this.tempSearchKey);
                    const list = __SL_$__(resultList)[0];
                    const firstItem = null === list || void 0 === list ? void 0 : null === (_list$children$ = list.children[0]) || void 0 === _list$children$ ? void 0 : _list$children$.outerHTML;
                    if (firstItem) __SL_$__(resultList).html(firstItem + html);
                }));
                header_search_defineProperty(this, "counter", 0);
                header_search_defineProperty(this, "tempSearchKey", "");
                this.$setNamespace(this.config.namespace);
                this.init();
            }
            bindClickEvent() {
                this.$on("click", this.selectors.searchBtn, (() => {
                    window.SL_EventBus.emit(HEADER_SEARCH_EVENT, "open", "btn");
                }));
                this.$on("click", this.selectors.searchCloseBtn, (() => {
                    window.SL_EventBus.emit(HEADER_SEARCH_EVENT, "close");
                }));
                this.$on("click", this.selectors.suggestLink, (e => {
                    this.doSearchReport(e.target.innerText);
                }));
            }
            init() {
                this.bindClickEvent();
                this.bindInput(this.selectors.searchBarInput);
                this.bindSearchBarFocustAndBlur();
                this.bindForceSearchEvent();
                window.SL_EventBus.on(HEADER_SEARCH_EVENT, ((status, caller) => {
                    if (void 0 === status) return;
                    if ("open" === status) {
                        window.SL_EventBus.emit("force-header-intoView");
                        this.openSearch(caller);
                    } else this.closeSearch();
                }));
            }
            searchViewReport(caller) {
                var _window$HdSdk2, _window$HdSdk3;
                const template = window.SL_State.get("template");
                const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
                null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.report(60080059, {
                    page,
                    iframe_id: 1,
                    event_name: 101,
                    general_component: 128
                });
                null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : _window$HdSdk3.shopTracker.report(60080059, {
                    page,
                    iframe_id: 1,
                    event_name: 109,
                    general_component: "btn" === caller ? 103 : 129
                });
            }
            searchExitReport() {
                var _window$HdSdk4;
                const template = window.SL_State.get("template");
                const page = SEARCH_PAGE_MAP[template] || NOT_FOUND_PAGE;
                null === (_window$HdSdk4 = window.HdSdk) || void 0 === _window$HdSdk4 ? void 0 : _window$HdSdk4.shopTracker.report(60080059, {
                    page,
                    iframe_id: 1,
                    event_name: 999,
                    page_dest: window.location.origin + window.location.pathname
                });
            }
            openSearch(caller) {
                const $container = __SL_$__(this.selectors.searchContainer);
                if ($container.hasClass(this.classes.activeClass)) return;
                this.searchViewReport(caller);
                this.prepareTransition($container, (() => {
                    this.jq.root.addClass([ this.classes.drawerOpenRoot, this.classes.drawerOpenRootSearch ]);
                    $container.addClass(this.classes.activeClass);
                }), (() => {}));
                const $input = __SL_$__(this.selectors.input);
                $input.trigger("focus");
                this.bindInput(this.selectors.input);
                this.bindMaskClick();
            }
            closeSearch() {
                const $container = __SL_$__(this.selectors.searchContainer);
                if (!$container.hasClass(this.classes.activeClass)) return;
                this.searchExitReport();
                __SL_$__(this.selectors.input).trigger("blur").val("");
                __SL_$__(this.selectors.suggestList).html("");
                this.prepareTransition($container, (() => {
                    this.jq.root.removeClass([ this.classes.drawerOpenRoot, this.classes.drawerOpenRootSearch ]);
                    this.jq.root.addClass(this.classes.drawerClosingRoot);
                    $container.removeClass(this.classes.activeClass);
                }), (() => {
                    this.jq.root.removeClass(this.classes.drawerClosingRoot);
                    this.counter = 0;
                    this.tempSearchKey = "";
                    this.$off(this.tempEventType);
                }));
                this.$off("input", this.selectors.input);
            }
            bindMaskClick() {
                this.$on(this.tempEventType, (({target}) => {
                    const container = __SL_$__(this.selectors.searchContainer)[0];
                    if (!container) return;
                    if (!container.contains(target)) window.SL_EventBus.emit(HEADER_SEARCH_EVENT, "close");
                }));
            }
            doSearchReport(value) {
                report_virtualReport.reportSearch(value);
                window.SL_EventBus.emit("global:thirdPartReport", {
                    GA: [ [ "event", "search", {
                        search_term: value || ""
                    } ] ],
                    GA4: [ [ "event", "search", {
                        search_term: value || ""
                    } ] ]
                });
            }
            doSearch(e) {
                const id = __SL_$__(e.currentTarget).data("id");
                const value = __SL_$__(`#${id}__input`).val();
                if (!value) return;
                this.doSearchReport(value);
                window.location.href = getSearchResultUrl(value, 2);
            }
            bindForceSearchEvent() {
                this.$on("keydown", this.selectors.input, (e => {
                    if (13 === e.keyCode) this.doSearch(e);
                }));
                this.$on("click", this.selectors.forceSearchBtn, this.doSearch.bind(this));
            }
            offForceSearchEvent() {
                this.$off("keydown", this.selectors.searchBarInput);
                this.$off("click", this.selectors.forceSearchBtn);
            }
            bindInput(selector) {
                this.$on("input", selector, debounce_default()((async e => {
                    const resultList = `#${__SL_$__(e.target).data("id")}__suggest-list`;
                    const $list = __SL_$__(resultList);
                    const {value: searchValue} = e.target;
                    if (!searchValue) {
                        $list.html("");
                        return;
                    }
                    if (this.cacheResult[searchValue]) {
                        const html = renderSearchResult(this.cacheResult[searchValue], searchValue);
                        $list.html(html);
                        return;
                    }
                    if ($list[0].children.length > 0) $list[0].children[0].outerHTML = renderFirstKey(searchValue); else $list.html(renderFirstKey(searchValue));
                    this.counter += 1;
                    this.tempSearchKey = searchValue;
                    const ret = await request["default"].get(SEARCH_API, {
                        params: {
                            word: searchValue,
                            num: 10
                        }
                    });
                    if ("SUCCESS" === ret.code) {
                        this.cacheResult[searchValue] = ret.data;
                        this.updateDom(ret.data, this.counter, resultList);
                        this.searchResultReport(ret.data, searchValue);
                    }
                }), 100));
            }
            bindSearchBarFocustAndBlur() {
                this.$on("keypress", this.selectors.searchBarInput, (e => {
                    if (13 === e.keyCode) {
                        this.doSearch(e);
                        return false;
                    }
                }));
                this.$on("focus", this.selectors.searchBarInput, (e => {
                    const resultList = `#${__SL_$__(e.target).data("id")}__suggest-list`;
                    const $target = __SL_$__("#suggest-menu-list");
                    __SL_$__(resultList).html($target.html());
                }));
                this.$on("blur", this.selectors.searchBarInput, (e => {
                    const resultList = `#${__SL_$__(e.target).data("id")}__suggest-list`;
                    setTimeout((() => {
                        __SL_$__(resultList).html("");
                    }), 500);
                }));
            }
            off() {
                this.$offAll();
            }
        }
        let header_search_instance = new HeaderSearch;
        __SL_$__(document).on("shopline:section:load", (() => {
            header_search_instance.off();
            header_search_instance = new HeaderSearch;
        }));
        function drawer_menu_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class DrawerMenu extends base_BaseClass["default"] {
            constructor() {
                super();
                drawer_menu_defineProperty(this, "config", {
                    namespace: "stage:drawerMenu"
                });
                drawer_menu_defineProperty(this, "classes", {
                    openClass: "is-open"
                });
                drawer_menu_defineProperty(this, "selector", {
                    trigger: ".nav-collapsible-trigger ",
                    inner: ".collapsible-content__inner",
                    sublist: ".mobile-nav__sublist",
                    drawer: ".stage-drawer-nested.stage-drawer--is-open",
                    localeCurrency: ".locale-currency.mobile-nav__link",
                    localeCurrencyContainer: ".drawer-menu-locale-currency"
                });
                this.$setNamespace(this.config.namespace);
                this.bindEvent();
                this.bindDrawer();
                this.bindLocaleCurrencyChange();
            }
            modifyParent($button, addHeight, isOpen) {
                const parent = $button.parents(`div${this.selector.sublist}`);
                if (!parent.length) return;
                parent.height(parent.height());
                if (isOpen) parent.height(parent.height() + addHeight); else parent.height(parent.height() - addHeight);
            }
            bindEvent() {
                this.$on("click", this.selector.trigger, (e => {
                    const $button = __SL_$__(e.currentTarget);
                    const controlsId = $button.attr("aria-controls");
                    const $controls = __SL_$__(`#${controlsId}`);
                    const $inner = $controls.find(this.selector.inner);
                    const height = $inner.height();
                    if ($button.hasClass(this.classes.openClass)) {
                        $controls.height(height);
                        $button.removeClass(this.classes.openClass);
                        this.modifyParent($button, height, false);
                        this.prepareTransition($controls, (() => {
                            $controls.height(0);
                            $controls.removeClass(this.classes.openClass);
                        }));
                    } else {
                        this.modifyParent($button, height, true);
                        this.prepareTransition($controls, (() => {
                            $controls.height(height);
                            $controls.addClass(this.classes.openClass);
                        }));
                        $button.addClass(this.classes.openClass);
                    }
                }));
            }
            bindDrawer() {
                this.$on("click", this.selector.localeCurrency, (e => {
                    const $target = __SL_$__(e.currentTarget);
                    const drawerId = $target.data("drawer");
                    window.SL_EventBus.emit("stage:drawer", {
                        id: drawerId,
                        status: "open"
                    });
                }));
            }
            bindLocaleCurrencyChange() {
                this.$on("click", `${this.selector.localeCurrencyContainer} li`, (e => {
                    const $target = __SL_$__(e.currentTarget);
                    const drawerId = $target.parents(this.selector.drawer).eq(0).attr("id");
                    window.SL_EventBus.emit("stage:drawer", {
                        id: drawerId,
                        status: "close_self"
                    });
                }));
            }
            off() {
                this.$offAll();
            }
        }
        let drawer_menu_instance = new DrawerMenu;
        __SL_$__(document).on("shopline:section:load", (() => {
            drawer_menu_instance.off();
            drawer_menu_instance = new DrawerMenu;
        }));
        var topDrawer = __webpack_require__("./src/assets/commons/components/topDrawer/index.js");
        function mobile_locale_currency_drawer_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class mobile_locale_currency_drawer_DrawerMenu extends base_BaseClass["default"] {
            constructor() {
                super();
                mobile_locale_currency_drawer_defineProperty(this, "config", {
                    namespace: "stage:mobileLocaleCurrencyDrawer"
                });
                mobile_locale_currency_drawer_defineProperty(this, "classes", {});
                mobile_locale_currency_drawer_defineProperty(this, "selector", {
                    drawer: ".stage-top-drawer.top-drawer--open",
                    localeCurrencyContainer: ".drawer-menu-locale-currency",
                    currencyBtn: ".j-currency-drawer-btn",
                    localeBtn: ".j-locale-drawer-btn"
                });
                mobile_locale_currency_drawer_defineProperty(this, "drawers", {
                    localeDrawer: null,
                    currencyDrawer: null
                });
                this.$setNamespace(this.config.namespace);
                this.init();
                this.bindEvent();
                this.bindLocaleCurrencyChange();
            }
            init() {
                this.drawers.currencyDrawer = new topDrawer["default"]("global-currency-drawer", {
                    fullScreen: true
                });
                this.drawers.localeDrawer = new topDrawer["default"]("global-locale-drawer", {
                    fullScreen: true
                });
            }
            bindEvent() {
                this.$on("click", this.selector.localeBtn, (() => {
                    this.drawers.localeDrawer.open();
                }));
                this.$on("click", this.selector.currencyBtn, (e => {
                    const $btn = __SL_$__(e.currentTarget);
                    this.setupCurrencyList($btn);
                    this.drawers.currencyDrawer.open();
                }));
            }
            setupCurrencyList($btn) {
                const hasSymbol = $btn.find(".currency-symbol").hasClass("show");
                const $drawerCurrencyList = __SL_$__(".drawer-menu-locale-currency[data-currency] .currency-list");
                if (hasSymbol) $drawerCurrencyList.addClass("show-symbol"); else $drawerCurrencyList.removeClass("show-symbol");
            }
            bindLocaleCurrencyChange() {
                this.$on("click", `${this.selector.localeCurrencyContainer} li`, (e => {
                    const $target = __SL_$__(e.currentTarget);
                    const drawerId = $target.parents(this.selector.drawer).eq(0).attr("id");
                    Object.keys(this.drawers).forEach((key => {
                        const drawer = this.drawers[key];
                        if (drawer.id === drawerId) drawer.close();
                    }));
                }));
            }
            off() {
                this.$offAll();
            }
        }
        let mobile_locale_currency_drawer_instance = new mobile_locale_currency_drawer_DrawerMenu;
        __SL_$__(document).on("shopline:section:load", (() => {
            mobile_locale_currency_drawer_instance.off();
            mobile_locale_currency_drawer_instance = new mobile_locale_currency_drawer_DrawerMenu;
        }));
        var lodash_debounce = __webpack_require__("../shared/browser/node_modules/lodash/debounce.js");
        var lodash_debounce_default = __webpack_require__.n(lodash_debounce);
        const EVENT_STICKY_ELEMENT_HEIGHT = "stage:header:stickyElementHeight";
        function getStickyElementHeight(headerSectionSelector = "#shopline-section-header") {
            let top = 0;
            __SL_$__(headerSectionSelector).prevAll().each(((_, el) => {
                const $el = __SL_$__(el);
                if ("sticky" === $el.css("position")) top += $el.height();
            }));
            return top;
        }
        function emitStickyElementHeight() {
            const stickyElementHeight = getStickyElementHeight();
            window.SL_EventBus.emit(EVENT_STICKY_ELEMENT_HEIGHT, {
                stickyElementHeight
            });
        }
        class StickyElementManager {
            constructor() {
                this.namespace = "stage:stickyElementManager";
                this.bindLoaded();
            }
            bindLoaded() {
                if ("loading" !== document.readyState) this.initAfterLoaded(); else document.addEventListener("DOMContentLoaded", (() => {
                    this.initAfterLoaded();
                }));
            }
            initAfterLoaded() {
                this.initStickyJob();
            }
            initStickyJob() {
                emitStickyElementHeight();
                setTimeout((() => {
                    requestAnimationFrame(emitStickyElementHeight);
                }), 2500);
                this.onEvent();
            }
            onEvent() {
                __SL_$__(window).on(`scroll.${this.namespace}`, lodash_debounce_default()(emitStickyElementHeight, 1e3, {
                    leading: true
                }));
            }
            offEvent() {
                __SL_$__(window).off(`scroll.${this.namespace}`);
            }
        }
        var globalEvent = __webpack_require__("./src/assets/commons/cart/globalEvent.js");
        __webpack_require__("./src/assets/stage/header/scripts/desktop-site-nav.js");
        function header_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class Header extends base_BaseClass["default"] {
            constructor() {
                super();
                header_defineProperty(this, "config", {
                    namespace: "satge:header",
                    wrapperOverlayed: false,
                    stickyEnabled: false,
                    stickyActive: false,
                    stickyHeader: false,
                    lastScroll: 0,
                    forceStopSticky: false,
                    stickyHeaderWrapper: "StickyHeaderWrap",
                    swiperBreakpoint: 750,
                    lastStickOffsetTop: 0
                });
                header_defineProperty(this, "classes", {
                    overlayedClass: "header--is-light",
                    stickyClass: "header__main--sticky",
                    openTransitionClass: "header__main--opening",
                    activateSwiperClass: "swiper-wrapper",
                    activateSwiperContainer: "swiper-container",
                    activeCartClass: "header__cart--active",
                    outerWrapperSticky: "is-sticky",
                    wrapperSticky: "header-wrapper--sticky",
                    activeNavClass: "show-nav",
                    headerBtnLink: "header__btn--link",
                    headerBtnActive: "header__btn--on",
                    headerBtnWrapperActive: "header__btn--active"
                });
                header_defineProperty(this, "selectors", {
                    wrapper: "#stage-headerWrapper",
                    header: "#stage-header",
                    drawerBtn: ".j-header-drawer-btn",
                    miniCart: ".header__cart",
                    cartBtn: "#stage-header-cart",
                    cartPoint: ".header__cart-point",
                    logoImage: ".header__logo--link img",
                    outerWrapper: ".header-sticky-wrapper",
                    logoImag: ".header__logo--link img",
                    notOverlayId: "#CollectionHeaderSection",
                    navBtn: ".j-header-nav-btn",
                    headerBtn: ".header__btn",
                    headerBtnWrapper: ".header__item--buttons",
                    menuBtn: ".header__btn--menu",
                    layoutContainer: ".header__layout-container",
                    sectionOuterHeaderWrapper: "#shopline-section-header"
                });
                header_defineProperty(this, "jq", {
                    header: __SL_$__(),
                    wrapper: __SL_$__(),
                    stickyHeaderWrapper: __SL_$__()
                });
                header_defineProperty(this, "menuDrawer", null);
                this.$setNamespace(this.config.namespace);
                this.jq.header = __SL_$__(this.selectors.header);
                this.jq.wrapper = __SL_$__(this.selectors.wrapper);
                this.stickyElementManager = new StickyElementManager;
                this.bindCartEvent();
                this.initAfterLoaded();
                this.bindHeaderNav();
                const $img = __SL_$__(this.selectors.logoImag);
                let waitForImg = null;
                if ($img.length) waitForImg = null === $img || void 0 === $img ? void 0 : $img.toArray().find((img => null !== img.offsetParent));
                if (waitForImg) if (waitForImg.complete && 0 !== waitForImg.naturalHeight) this.initHeader(); else waitForImg.onload = () => {
                    this.initHeader();
                }; else __SL_$__((() => {
                    this.initHeader();
                }));
            }
            initAfterLoaded() {
                if ("loading" !== document.readyState) this.bindCartCount(); else document.addEventListener("DOMContentLoaded", (() => {
                    this.bindCartCount();
                }));
            }
            initHeader() {
                this.config.stickyEnabled = this.jq.header.data("sticky");
                if (this.config.stickyEnabled) {
                    const notOverlay = __SL_$__(this.selectors.notOverlayId);
                    if (notOverlay.length) {
                        this.config.wrapperOverlayed = false;
                        this.jq.wrapper.removeClass(this.classes.overlayedClass);
                        this.jq.wrapper.removeClass(this.classes.wrapperSticky);
                    } else this.config.wrapperOverlayed = this.jq.wrapper.data("overlay");
                    this.stickyHeaderCheck();
                }
                window.SL_EventBus.on("force-header-intoView", (() => {
                    if (window.scrollY < 250 && window.scrollY > 0) __SL_$__(this.selectors.header)[0].scrollIntoView();
                }));
                window.SL_EventBus.on("stage:locale:change", (() => {
                    var _this$jq, _this$jq$stickyHeader, _this$jq$stickyHeader2;
                    if (null !== this && void 0 !== this && null !== (_this$jq = this.jq) && void 0 !== _this$jq && null !== (_this$jq$stickyHeader = _this$jq.stickyHeaderWrapper[0]) && void 0 !== _this$jq$stickyHeader && null !== (_this$jq$stickyHeader2 = _this$jq$stickyHeader.style) && void 0 !== _this$jq$stickyHeader2 && _this$jq$stickyHeader2.height) {
                        this.jq.stickyHeaderWrapper[0].style.height = "auto";
                        this.stickyHeaderHeight();
                    }
                }));
            }
            stickyHeaderCheck() {
                this.config.stickyHeader = true;
                if (this.config.stickyHeader) {
                    this.config.forceStopSticky = false;
                    this.stickyHeader();
                } else this.config.forceStopSticky = true;
            }
            stickyHeader() {
                this.config.lastScroll = 0;
                const wrapWith = document.createElement("div");
                wrapWith.id = this.config.stickyHeaderWrapper;
                this.jq.header.wrap(wrapWith);
                this.jq.stickyHeaderWrapper = __SL_$__(`#${wrapWith.id}`);
                this.stickyHeaderHeight();
                this.stickyHeaderScroll();
                setTimeout((() => {
                    requestAnimationFrame(this.scrollWorker.bind(this));
                }), 2500);
                this.$onWin("resize", debounce_default()(this.stickyHeaderHeight.bind(this), 50));
                this.$onWin("scroll", throttle_default()(this.stickyHeaderScroll.bind(this), 20));
                if (window.Shopline.designMode) {
                    const $logoImage = __SL_$__(this.selectors.logoImage);
                    const onLoadHandler = () => {
                        setTimeout((() => {
                            this.stickyHeaderHeight();
                        }), 1e3);
                        $logoImage.off("load");
                    };
                    $logoImage.on("load", onLoadHandler);
                }
            }
            stickyHeaderScroll() {
                if (!this.config.stickyEnabled) return;
                if (this.config.forceStopSticky) return;
                requestAnimationFrame(this.scrollWorker.bind(this));
                this.config.lastScroll = window.scrollY;
            }
            scrollWorker() {
                if (window.scrollY > 250) this.doSticky(); else this.undoSticky();
            }
            emitSticky(stickyActive) {
                const headerHeight = __SL_$__(this.selectors.header).height();
                const stickOffsetTop = this.getStickHeaderOffsetTop();
                this.config.lastStickOffsetTop = stickOffsetTop;
                window.SL_EventBus.emit("stage:header:sticky", {
                    stickyActive,
                    headerHeight
                });
                window.SL_EventBus.emit("stage:header:stickOffsetTopUpdate", {
                    stickOffsetTop,
                    stickyActive
                });
            }
            undoSticky() {
                if (false === this.config.stickyActive) return;
                this.config.stickyActive = false;
                this.jq.header.removeClass([ this.classes.openTransitionClass, this.classes.stickyClass ]);
                __SL_$__(this.selectors.outerWrapper).removeClass(this.classes.outerWrapperSticky);
                this.jq.header.css({
                    top: 0
                });
                this.jq.stickyHeaderWrapper.eq(0).height("auto");
                if (this.config.wrapperOverlayed) this.jq.wrapper.addClass(this.classes.overlayedClass);
                this.emitSticky(false);
            }
            doSticky() {
                const stickOffsetTop = this.getStickHeaderOffsetTop();
                const isNeedRerender = !this.config.stickyActive || this.config.lastStickOffsetTop !== stickOffsetTop;
                if (!isNeedRerender) return;
                this.config.stickyActive = true;
                const height = __SL_$__(this.selectors.header).innerHeight();
                this.jq.header.addClass(this.classes.stickyClass);
                this.jq.stickyHeaderWrapper.eq(0).height(height);
                this.jq.header.addClass(this.classes.stickyClass);
                if (this.config.wrapperOverlayed) this.jq.wrapper.removeClass(this.classes.overlayedClass);
                setTimeout((() => {
                    this.jq.header.addClass(this.classes.openTransitionClass);
                    __SL_$__(this.selectors.outerWrapper).addClass(this.classes.outerWrapperSticky);
                    this.emitSticky(true);
                    this.jq.header.css({
                        top: stickOffsetTop
                    });
                }), 100);
            }
            stickyHeaderHeight() {
                if (!this.config.stickyEnabled) return;
                const headerLayoutBackgroundHeight = __SL_$__(".header__layout-background").css("height") || 0;
                const h = headerLayoutBackgroundHeight;
                this.jq.stickyHeaderWrapper[0].style.height = this.config.wrapperOverlayed ? "auto" : `${h}px`;
            }
            getStickHeaderOffsetTop() {
                let top = 0;
                __SL_$__(this.selectors.sectionOuterHeaderWrapper).prevAll().each(((_, el) => {
                    const $el = __SL_$__(el);
                    if ("sticky" === $el.css("position")) top += $el.height();
                }));
                return top;
            }
            bindCartEvent() {
                this.$on("click", this.selectors.miniCart, (e => {
                    const $btn = __SL_$__(e.currentTarget);
                    if ($btn.hasClass("header__btn--on")) window.SL_EventBus.emit(globalEvent.CLOSE_MINI_CART); else window.SL_EventBus.emit(globalEvent.OPEN_MINI_CART);
                }));
            }
            bindHeaderNav() {
                this.$on("click", this.selectors.navBtn, (() => {
                    __SL_$__(this.selectors.layoutContainer).toggleClass(this.classes.activeNavClass);
                }));
                this.$on("click", this.selectors.drawerBtn, (() => {
                    window.SL_EventBus.emit(DRAWER_EVENT_NAME, {
                        id: "menu-drawer",
                        status: "open"
                    });
                }));
            }
            swiperResizeHandler() {
                this.disableSwiper();
                this.activateSwiper();
            }
            fetchCartInfo() {
                return (0, request["default"])({
                    url: "carts/cart/count",
                    method: "GET"
                }).then((res => {
                    if (res.success) return Promise.resolve(res.data);
                }));
            }
            bindCartCount() {
                window.SL_State.on("cartInfo", (() => {
                    this.activeCart();
                }));
                this.fetchCartInfo().then((num => {
                    this.activeCart(num);
                }));
            }
            activeCart(num = 0) {
                const cartBtn = __SL_$__(this.selectors.cartBtn);
                if (!cartBtn.length) return;
                const cartNum = window.SL_State.get("cartInfo.count") || num;
                if (cartNum) {
                    cartBtn.removeClass(this.classes.activeCartClass).addClass(this.classes.activeCartClass);
                    __SL_$__(this.selectors.cartPoint).html(cartNum);
                } else cartBtn.removeClass(this.classes.activeCartClass);
            }
            offEventBus() {
                window.SL_EventBus.off("force-header-intoView");
            }
            off() {
                this.$offAll();
                this.stickyElementManager.offEvent();
                this.offEventBus();
            }
        }
        let header_instance = new Header;
        __SL_$__(document).on("shopline:section:load", (() => {
            header_instance.off();
            header_instance = null;
            header_instance = new Header;
        }));
        var src_js_cookie = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
        var src_js_cookie_default = __webpack_require__.n(src_js_cookie);
        function locale_currency_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const createCurrencyItemTemplate = (code, symbol, showSymbol) => `<li data-currency-code="${code}" data-show-symbol="${showSymbol}" data-currency-symbol="${symbol}">\n\t<span class="click">\n\t\t<span class="body5 notranslate">${showSymbol ? symbol : ""} ${code}</span>\n\t</span>\n</li>`;
        const createCurrencyListTemplate = (list, showSymbol) => list.map((({currencyCode, currencySymbol}) => createCurrencyItemTemplate(currencyCode, currencySymbol, showSymbol))).join("");
        const googleLangKeyTransform = alias => {
            var _hardLandKey$alias;
            const hardLandKey = {
                "zh-hans-cn": "zh-CN",
                "zh-hant-tw": "zh-TW",
                "zh-hant-hk": "zh-TW",
                nb: "no"
            };
            return null !== (_hardLandKey$alias = hardLandKey[alias]) && void 0 !== _hardLandKey$alias ? _hardLandKey$alias : alias;
        };
        class LocaleCurrency extends base_BaseClass["default"] {
            constructor() {
                super();
                locale_currency_defineProperty(this, "config", {
                    namespace: "stage:localeCurrency"
                });
                locale_currency_defineProperty(this, "classes", {
                    dropdownClass: "dropdown__list",
                    dropdownVisibleClass: "dropdown__list--visible"
                });
                locale_currency_defineProperty(this, "selectors", {
                    localeButton: ".j-stage-locale",
                    currencyButton: ".j-stage-currency",
                    localeDrawerButton: ".j-locale-drawer-btn",
                    currencyDrawerButton: ".j-currency-drawer-btn",
                    container: ".locale-currency",
                    dropdownList: `.${this.classes.dropdownClass}`,
                    localeContainer: ".locale-currency[data-locale]",
                    mobileLocaleBtn: ".j-locale-drawer-btn",
                    currencyContainer: ".locale-currency[data-currency]",
                    currencySearchInput: ".j-stage-currency-search",
                    currencyList: ".currency-list",
                    noCurrencyFallback: ".stage-no-currency",
                    gteTag: ".goog-te-spinner-pos"
                });
                locale_currency_defineProperty(this, "gteObserver", null);
                this.$setNamespace(this.config.namespace);
                if (__SL_$__(this.selectors.localeButton).length > 0) this.initLocaleDropdown();
                if (__SL_$__(this.selectors.currencyButton).length > 0) this.initCurrencyDropdown();
                this.bindLanguageChange();
                this.bindCurrencySearch();
                this.bindCurrencyChange();
                this.createGTEObserver();
            }
            createGTEObserver() {
                window.Shopline.event.on("googleInitComplete", (() => {
                    const node = __SL_$__(this.selectors.gteTag)[0];
                    if (node) {
                        this.gteObserver = new MutationObserver((() => {
                            window.SL_EventBus.emit("stage:locale:change");
                        }));
                        this.gteObserver.observe(node, {
                            attributes: true
                        });
                    }
                }));
            }
            bindDropdownClick(selector) {
                this.$on("click", selector, (e => {
                    const $dropdownContainer = __SL_$__(e.target).parents(".locale-currency");
                    const $dropdownList = $dropdownContainer.find(this.selectors.dropdownList);
                    if ($dropdownList.hasClass(this.classes.dropdownVisibleClass)) {
                        $dropdownList.removeClass(this.classes.dropdownVisibleClass);
                        return;
                    }
                    $dropdownList.addClass(this.classes.dropdownVisibleClass);
                    const tempEventType = `click.tempWrapperClick-${this.namespace}-${selector}`;
                    this.$on(tempEventType, (({target}) => {
                        if (!$dropdownContainer[0]) return this.$off(tempEventType);
                        if (target !== $dropdownContainer[0] && !$dropdownContainer[0].contains(target)) {
                            $dropdownList.removeClass(this.classes.dropdownVisibleClass);
                            this.$off(tempEventType);
                        }
                    }));
                }));
            }
            initLocaleDropdown() {
                this.bindDropdownClick(this.selectors.localeButton);
                window.Shopline.event.on("googleInitComplete", (() => {
                    this.showLocaleBtn();
                }));
            }
            showLocaleBtn() {
                __SL_$__(this.selectors.localeContainer).show();
                __SL_$__(this.selectors.mobileLocaleBtn).removeClass("d-none");
            }
            bindLanguageChange() {
                this.$on("click", `${this.selectors.localeContainer} li`, (e => {
                    var _SL_$__, _SL_$__$parents, _SL_$__$find, _SL_$__$find2;
                    const storeLanguage = window.SL_State.get("storeInfo.languageSetting.storeLanguage");
                    const $target = __SL_$__(e.currentTarget);
                    const alias = $target.data("alias");
                    const text = $target.data("name");
                    report_virtualReport.reportSelectLang(e, alias);
                    if (alias === storeLanguage) {
                        const restoreEvent = "clk_restore";
                        window.__GOOGLE_TRANSLATE_INSTANCE.h.dispatchEvent(restoreEvent);
                    } else {
                        var _googleLangKeyTransfo;
                        const el = document.querySelector(".goog-te-combo");
                        const changeLang = null !== (_googleLangKeyTransfo = googleLangKeyTransform(alias)) && void 0 !== _googleLangKeyTransfo ? _googleLangKeyTransfo : alias;
                        el.value = changeLang;
                        const event = document.createEvent("HTMLEvents");
                        event.initEvent("change", true, false);
                        el.dispatchEvent(event);
                    }
                    src_js_cookie_default().set("lang", storeLanguage);
                    src_js_cookie_default().set("addressLang", alias);
                    src_js_cookie_default().set("userSelectLocale", alias);
                    null === (_SL_$__ = __SL_$__(e.target)) || void 0 === _SL_$__ ? void 0 : null === (_SL_$__$parents = _SL_$__.parents(this.selectors.dropdownList)) || void 0 === _SL_$__$parents ? void 0 : _SL_$__$parents.removeClass(this.classes.dropdownVisibleClass);
                    null === (_SL_$__$find = __SL_$__(this.selectors.localeButton).find("span")) || void 0 === _SL_$__$find ? void 0 : _SL_$__$find.text(text);
                    null === (_SL_$__$find2 = __SL_$__(this.selectors.localeDrawerButton).find("span")) || void 0 === _SL_$__$find2 ? void 0 : _SL_$__$find2.text(text);
                    window.SL_State.set("request.locale", alias);
                    window.SL_EventBus.emit("global:currency:format", {
                        lang: alias,
                        currencyCode: window.SL_State.get("currencyCode")
                    });
                    window.Shopline.event.emit("Currency::Format", {
                        lang: alias,
                        currencyCode: window.SL_State.get("currencyCode")
                    });
                }));
            }
            initCurrencyDropdown() {
                this.bindDropdownClick(this.selectors.currencyButton);
            }
            bindCurrencyChange() {
                this.$on("click", `${this.selectors.currencyContainer} li`, (e => {
                    const $target = __SL_$__(e.currentTarget);
                    const code = $target.data("currency-code");
                    const symbol = $target.data("currency-symbol");
                    const showSymbol = $target.parents(this.selectors.currencyList).data("show-symbol");
                    const currencyText = `${showSymbol ? symbol : ""} ${code}`;
                    report_virtualReport.reportSelectCurrency(e, code);
                    src_js_cookie_default().set("currency_code_userSetting", code);
                    window.SL_State.set("currencyCode", code);
                    window.SL_EventBus.emit("global:currency:format", {
                        lang: window.SL_State.get("request.locale"),
                        currencyCode: code
                    });
                    window.Shopline.event.emit("Currency::Format", {
                        lang: window.SL_State.get("request.locale"),
                        currencyCode: code
                    });
                    __SL_$__(e.target).parents(this.selectors.dropdownList).removeClass(this.classes.dropdownVisibleClass);
                    __SL_$__(this.selectors.currencyButton).find("span").text(currencyText);
                    __SL_$__(this.selectors.currencyDrawerButton).find(".currency-symbol").text(symbol);
                    __SL_$__(this.selectors.currencyDrawerButton).find(".currency-code").text(code);
                }));
            }
            bindCurrencySearch() {
                this.$on("input", this.selectors.currencySearchInput, (e => {
                    const {value: searchValue} = e.target;
                    const allCurrencies = window.SL_State.get("currencyConfig.referenceCurrencies");
                    let str = "";
                    const container = __SL_$__(e.target).parents(this.selectors.currencyContainer).find(this.selectors.currencyList);
                    const showSymbol = container.data("show-symbol");
                    if (!searchValue) str = createCurrencyListTemplate(allCurrencies, showSymbol); else {
                        const filterList = allCurrencies.filter((item => {
                            const val = item.currencyCode.toLowerCase();
                            if (val.toLowerCase().includes(searchValue.toLowerCase())) return true;
                            return false;
                        }));
                        if (filterList.length) str = createCurrencyListTemplate(filterList, showSymbol);
                    }
                    if (!str) {
                        container.hide();
                        container.siblings(this.selectors.noCurrencyFallback).show();
                        return;
                    }
                    container.show();
                    container.html(str);
                    container.siblings(this.selectors.noCurrencyFallback).hide();
                }));
            }
            off() {
                this.$offAll();
            }
        }
        let locale_currency_instance = new LocaleCurrency;
        __SL_$__(document).on("shopline:section:load", (() => {
            locale_currency_instance.off();
            locale_currency_instance = new LocaleCurrency;
            locale_currency_instance.showLocaleBtn();
        }));
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var utils = __webpack_require__("./src/assets/commons/utils/index.js");
        var checkEmail = __webpack_require__("./src/assets/commons/utils/checkEmail.js");
        var utils_debounce = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        function footer_defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const {listenPlatform} = utils["default"].helper;
        class Footer extends base_BaseClass["default"] {
            constructor() {
                super();
                footer_defineProperty(this, "config", {
                    namespace: "satge:footer"
                });
                this.$setNamespace(this.config.namespace);
                this.init();
                listenPlatform((() => {
                    this.reset();
                }));
            }
            init() {
                this.bindEvent();
                this.initMobileToolkit();
            }
            initMobileToolkit() {
                const $item = __SL_$__("#stage-footer .j-locale-currency-flag");
                const $root = __SL_$__("#stage-footer");
                const $localeBtn = $root.find(".j-locale-drawer-btn");
                const $currencyBtn = $root.find(".j-currency-drawer-btn");
                const currency_selector = $item.data("currency");
                const locale_selector = $item.data("locale");
                const show_currency_symbol = $item.data("currency-symbol");
                if (locale_selector) $localeBtn.addClass("show");
                if (currency_selector) {
                    $currencyBtn.addClass("show");
                    if (show_currency_symbol) $currencyBtn.find(".currency-symbol").addClass("show");
                }
            }
            reset() {
                this.offEvent();
                this.init();
            }
            offEvent() {
                this.$off("click");
            }
            bindEvent() {
                this.bindSubscription();
            }
            bindSubscription() {
                const post = (0, utils_debounce["default"])(300, (val => {
                    var _window, _window$SLMemberPlugi, _window$SLMemberPlugi2;
                    const params = {
                        subscribeAccountType: "email",
                        subscribeAccount: val
                    };
                    const referralCode = (null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SLMemberPlugi = _window.SLMemberPlugin) || void 0 === _window$SLMemberPlugi ? void 0 : null === (_window$SLMemberPlugi2 = _window$SLMemberPlugi.memberReferralCode) || void 0 === _window$SLMemberPlugi2 ? void 0 : _window$SLMemberPlugi2.value) || null;
                    if (referralCode) params.referralCode = referralCode;
                    request["default"].post("/user/front/users/footersub", params).then((res => {
                        if (res.success) toast["default"].init({
                            content: (0, i18n.t)("general.footer.subscribe_success")
                        }); else toast["default"].init({
                            content: (0, i18n.t)("general.footer.subscribe_reg_exp_error")
                        });
                    })).catch((err => {
                        console.log("subscribe error", err);
                        toast["default"].init({
                            content: (0, i18n.t)("general.footer.subscribe_reg_exp_error")
                        });
                    }));
                }));
                this.$on("click", ".footer__newsletter-btn", (e => {
                    const $input = __SL_$__(e.currentTarget).parent().find("input");
                    const value = $input.val();
                    if (true !== (0, checkEmail["default"])(value)) {
                        toast["default"].init({
                            content: (0, i18n.t)("general.footer.subscribe_reg_exp_error")
                        });
                        return;
                    }
                    post(value);
                }));
            }
        }
        const footer_instance = new Footer;
        __SL_$__(document).on("shopline:section:load", (() => {
            footer_instance.reset();
        }));
        __webpack_require__("./src/assets/stage/announcement-bar/index.js");
        developer_api("Cart::GetCartId", "Cart::NavigateCart", "Checkout::NavigateCheckout", "Cart::AddToCart", "Cart::ControlCartBasis", "Cart::CartDetailUpdate", "Cart::LineItemUpdate");
        customer_developer_api("Customer::LoginModal", "Customer::Register");
        null === utils_dataReport || void 0 === utils_dataReport ? void 0 : utils_dataReport.listen("DataReport::AddToCart");
        (0, dataAccessor.setSyncData)({
            orderFrom: "web"
        });
        var core_class = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        __webpack_require__("./src/assets/vendor/mod/a-nested.js");
        __webpack_require__("./src/assets/vendor/mod/parallax.js");
        window.__Swiper__ = core_class["default"];
        initVirtualReport();
    },
    "./src/assets/vendor/mod/a-nested.js": () => {
        const registerLink = element => {
            const $element = __SL_$__(element);
            const href = $element.attr("href");
            const target = $element.attr("target") || "_self";
            if (!href) return;
            $element.on("click", (e => {
                e.stopPropagation();
                window.open(href, target);
            }));
        };
        __SL_$__(".global-a-nested").each(((_, element) => {
            registerLink(element);
        }));
        __SL_$__(document).on("shopline:section:load", (e => {
            const {sectionId} = e.detail;
            __SL_$__(`#shopline-section-${sectionId} .global-a-nested`).each(((_, element) => {
                registerLink(element);
            }));
        }));
    },
    "./src/assets/vendor/mod/parallax.js": () => {
        let parallaxContainers = __SL_$__(".parallax-container");
        let parallaxListener;
        function onScroll() {
            requestAnimationFrame(scrollHandler.bind(this));
        }
        function scrollHandler() {
            const viewPortHeight = __SL_$__(window).height();
            parallaxContainers.each(((index, el) => {
                const parallaxImage = __SL_$__(el).find(".parallax");
                const hasClass = __SL_$__(el).hasClass("large-image-with-text-box--loaded");
                const isLargeImageText = __SL_$__(el).hasClass("large-image-with-text-box");
                if (0 === parallaxImage.length) {
                    if (!isLargeImageText) return;
                    if (!hasClass) __SL_$__(el).addClass("large-image-with-text-box--loaded");
                    return;
                }
                const {top, height} = el.getBoundingClientRect();
                if (top > viewPortHeight || top <= -height) return;
                const speed = 2;
                const movableDistance = viewPortHeight + height;
                const currentDistance = viewPortHeight - top;
                const percent = (currentDistance / movableDistance * speed * 38).toFixed(2);
                const num = 38 - Number(percent);
                __SL_$__(parallaxImage).css("transform", `translate3d(0 , ${-num}% , 0)`);
                if (!isLargeImageText) return;
                if (!hasClass) __SL_$__(el).addClass("large-image-with-text-box--loaded");
            }));
        }
        function init() {
            parallaxContainers = __SL_$__(".parallax-container");
            if (!parallaxListener) parallaxListener = __SL_$__(window).on("scroll", onScroll);
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
    },
    "../shared/browser/biz-com/trade/optimize-modal/cartChangeItem.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/biz-com/trade/optimize-modal/constant.js");
        function getSkuId(model) {
            if (!model) return "";
            return model.skuId || "";
        }
        function getGroupId(model) {
            if (!model) return "";
            return model.groupId || "";
        }
        function getStock(model) {
            if (!model) return 0;
            return model.stock || 0;
        }
        function getVerifyType(model) {
            if (!model) return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.NIL;
            switch (model.errorInfo.errorType) {
              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.SOLD_OUT:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.SOLD_OUT;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.STOCK_OVER:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.UNDER_STOCK;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.SHELF_OFF:
              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.GIFT_INVALID:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.OFF_SHELVED;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.DELETE:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.DELETED;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.LIMITED_ACTIVE_SKU_OVER:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.PRODUCT_LIMIT;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.LIMITED_ACTIVE_OVER:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.USER_LIMIT;

              case _constant__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeEnum.LIMITED_ACTIVE_STOCK_OVER:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.PRODUCT_UNDER_STOCK;

              default:
                return _constant__WEBPACK_IMPORTED_MODULE_0__.verifyType.NIL;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            getSkuId,
            getStock,
            getVerifyType,
            getGroupId
        };
    },
    "../shared/browser/biz-com/trade/optimize-modal/constant.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            verifyType: () => verifyType,
            ErrorTypeEnum: () => ErrorTypeEnum
        });
        const verifyType = {
            NIL: 0,
            SOLD_OUT: 1,
            UNDER_STOCK: 2,
            OFF_SHELVED: 3,
            DELETED: 4,
            PRODUCT_LIMIT: 5,
            USER_LIMIT: 6,
            PRODUCT_UNDER_STOCK: 7
        };
        const ErrorTypeEnum = {
            SOLD_OUT: "SOLD_OUT",
            STOCK_OVER: "STOCK_OVER",
            SHELF_OFF: "SHELF_OFF",
            DELETE: "DELETE",
            LIMITED_ACTIVE_SKU_OVER: "LIMITED_ACTIVE_SKU_OVER",
            LIMITED_ACTIVE_OVER: "LIMITED_ACTIVE_OVER",
            LIMITED_ACTIVE_STOCK_OVER: "LIMITED_ACTIVE_STOCK_OVER",
            MAIN_PRODUCT_ERROR: "MAIN_PRODUCT_ERROR",
            PURCHASE_LESS_MOQ: "PURCHASE_LESS_MOQ",
            GIFT_INVALID: "GIFT_INVALID"
        };
    },
    "../shared/browser/components/hbs/shared/base/BaseClass.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => EventManager
        });
        function isInvalid(param) {
            return !param || "string" !== typeof param;
        }
        function isJqueryInstance(dom) {
            return dom && dom instanceof __SL_$__ && dom.length > 0;
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
                this.$win = __SL_$__(window);
                this.$doc = __SL_$__(document);
                this.$portals = portals ? __SL_$__(portals) : null;
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
                this.$portals = portals ? __SL_$__(portals) : null;
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
    },
    "../shared/browser/components/hbs/shared/components/topDrawer/const.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            DRAWER_EVENT_NAME: () => DRAWER_EVENT_NAME,
            DRAWER_CALLBACK_EVENT_NAME: () => DRAWER_CALLBACK_EVENT_NAME,
            DRAWER_OPERATORS: () => DRAWER_OPERATORS
        });
        const DRAWER_EVENT_NAME = "stage:topDrawer";
        const DRAWER_CALLBACK_EVENT_NAME = "stage:topDrawer:callback";
        const DRAWER_OPERATORS = {
            OPEN: "open",
            CLOSE: "close"
        };
    },
    "../shared/browser/components/hbs/shared/components/topDrawer/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _base_BaseClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/components/hbs/shared/base/BaseClass.js");
        var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/shared/components/topDrawer/const.js");
        const animationTime = 300;
        class TopDrawer extends _base_BaseClass__WEBPACK_IMPORTED_MODULE_1__["default"] {
            constructor(id, options = {}) {
                super();
                const {closeBtnSelector = ".j-top-drawer-close"} = options;
                this.config = {
                    namespace: `stage:global-top-drawer_id:${id}`
                };
                this.classes = {
                    active: "top-drawer--open",
                    fullscreen: "top-drawer--full"
                };
                this.selector = {
                    drawerContainer: ".stage-top-drawer",
                    drawerContent: ".top-drawer__container",
                    closeButton: closeBtnSelector
                };
                this.attr = {
                    openDrawer: "data-open_topDrawer"
                };
                this.id = id;
                this.options = options;
                this.closeFlag = true;
                this.$setNamespace(this.config.namespace);
                this.init();
            }
            init() {
                this.openTimer = null;
                this.closeTimer = null;
                this.bindClickMask();
                this.listenEvent();
                this.bindClickClose();
                this.bindClickOutside();
                this.setupFullScreen();
                this.stopPropagation();
            }
            get isOpen() {
                return this.$root.hasClass(this.classes.active);
            }
            get $body() {
                return __SL_$__("body");
            }
            get $root() {
                return __SL_$__(`#${this.id}`);
            }
            setupFullScreen() {
                if (this.options.fullScreen) this.$root.addClass(this.classes.fullscreen);
            }
            open({disablePageScroll = false} = {}) {
                if (this.isOpen) return;
                this.ignoreClickOutside();
                clearTimeout(this.closeTimer);
                this.$root.css("display", "block");
                this.openTimer = setTimeout((() => {
                    if (!this.options.fullScreen) this.$root.find(".top-drawer__mask").hide();
                    this.$root.addClass(this.classes.active);
                    if (this.options.fullScreen || disablePageScroll) this.disablePageScroll();
                }), 0);
            }
            close() {
                this.$root.removeClass(this.classes.active);
                this.enablePageScroll();
                this.closeTimer = setTimeout((() => {
                    this.$root.css("display", "none");
                }), animationTime);
            }
            ignoreClickOutside() {
                this.closeFlag = false;
                setTimeout((() => {
                    this.closeFlag = true;
                }), 0);
            }
            bindClickOutside() {
                this.$on("click", (e => {
                    if (!this.closeFlag) return;
                    const $container = __SL_$__(e.target).closest(`#${this.id}`);
                    const isOutside = 0 === $container.length;
                    if (this.isOpen && isOutside) window.SL_EventBus.emit(_const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_EVENT_NAME, {
                        operator: _const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_OPERATORS.CLOSE,
                        id: this.id
                    });
                }));
            }
            stopPropagation() {
                this.$on("click", `#${this.id}`, (e => {
                    e.stopPropagation();
                }));
            }
            bindClickClose() {
                this.$on("click", `#${this.id} ${this.selector.closeButton}`, (() => {
                    this.close();
                }));
            }
            bindClickMask() {
                this.$on("click", `#${this.id} .top-drawer__mask`, (() => {
                    this.close();
                }));
            }
            listenEvent() {
                window.SL_EventBus.on(_const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_EVENT_NAME, (res => {
                    const {id, operator, option = {}} = res;
                    if (id !== this.id) return;
                    if (operator === _const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_OPERATORS.OPEN) this.open(option);
                    if (operator === _const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_OPERATORS.CLOSE) this.close();
                    window.SL_EventBus.emit(_const__WEBPACK_IMPORTED_MODULE_0__.DRAWER_CALLBACK_EVENT_NAME, {
                        status: operator,
                        id
                    });
                }));
            }
            disablePageScroll() {
                const openDrawers = this.$body.attr(this.attr.openDrawer);
                const list = openDrawers ? openDrawers.split(" ") : [];
                if (!list.includes(this.id)) list.push(this.id);
                this.$body.attr(this.attr.openDrawer, list.join(" "));
            }
            enablePageScroll() {
                const openDrawers = this.$body.attr(this.attr.openDrawer);
                const list = openDrawers ? openDrawers.split(" ") : [];
                const index = list.indexOf(this.id);
                if (index >= 0) list.splice(index, 1);
                if (list.length) this.$body.attr(this.attr.openDrawer, list.join(" ")); else this.$body.removeAttr(this.attr.openDrawer);
            }
            setMaxHeight(height) {
                this.$root.find(this.selector.drawerContent).css("max-height", height);
            }
            setWidth(width) {
                this.$root.find(this.selector.drawerContent).css("width", width);
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = TopDrawer;
    },
    "../shared/browser/components/paypal/config.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getPaypalKey: () => getPaypalKey,
            initialData: () => initialData
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/components/paypal/utils/index.js");
        const SLClientKey = {
            DEV: "AZ-NwCL9u55EJ7x0kR61XcKTCZtMuel8VBMG1dx4T_iJzABABfvw13UeXJAYHOscUNHHsIjLNLoh-pYv",
            PROD: "AYVtr8kMzEyRCw725vQM_-hheFyo1FuWeaup4KPSvU1gg44L-NG5e2PNcwGnMo2MLCzGRg4eVHJhuqBP"
        };
        const slPublicKey = _utils__WEBPACK_IMPORTED_MODULE_1__.isProd ? SLClientKey.PROD : SLClientKey.DEV;
        const getPaypalKey = paypalConfig => {
            const merchantKey = (0, _utils__WEBPACK_IMPORTED_MODULE_1__.canTrustedPaypalConfig)(paypalConfig) ? paypalConfig.clientId : null;
            return {
                key: merchantKey || slPublicKey,
                expand: {
                    currency: js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("currency_code") || "USD"
                }
            };
        };
        const Env = {
            Dev: "dev",
            Prod: "prod"
        };
        const SDKName = {
            paypalSPB: "paypalSPB"
        };
        const initialData = {
            env: _utils__WEBPACK_IMPORTED_MODULE_1__.isProd ? Env.Prod : Env.Dev,
            sdkName: SDKName.paypalSPB,
            domId: "shopline-paypal",
            styleOption: {
                commonStyle: {
                    paypalSPBStyle: {
                        layout: "horizontal",
                        color: "gold",
                        shape: "rect",
                        label: "paypal",
                        tagline: false,
                        height: 55
                    }
                }
            },
            initTimeout: 5e3,
            beforeCreateOrder: async instance => ({
                products: instance.products
            })
        };
    },
    "../shared/browser/components/paypal/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _payment_gateway_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/@payment/gateway-sdk/dist/index.js");
        var _payment_gateway_sdk__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_payment_gateway_sdk__WEBPACK_IMPORTED_MODULE_0__);
        var _yy_sl_theme_shared_utils_url_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/url-adaptor.js");
        var _yy_sl_theme_shared_utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/logger/index.js");
        var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/node_modules/lodash/get.js");
        var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
        var _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/components/paypal/config.js");
        var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/browser/components/paypal/services.js");
        var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/components/paypal/utils/index.js");
        var _utils_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../shared/browser/utils/checkout.js");
        var _utils_load_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../shared/browser/utils/load-script.js");
        var _utils_tradeReport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../shared/browser/utils/tradeReport/index.js");
        var _utils_tradeReport_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../shared/browser/utils/tradeReport/const.js");
        var _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _utils_dataAccessor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        const {PAYPAL_CHECKOUT} = _utils_tradeReport_const__WEBPACK_IMPORTED_MODULE_11__.HD_EVENT_NAME;
        const logger = _yy_sl_theme_shared_utils_logger__WEBPACK_IMPORTED_MODULE_2__["default"].pipeOwner({
            owner: "PayPal",
            onTag: key => {
                switch (key) {
                  case "abandonedSeq":
                  case "code":
                    return true;

                  default:
                    return false;
                }
            }
        });
        const splitter = ({k, v}) => v ? `[${k}: ${v}]` : "";
        function getPaypalSDK() {
            return _payment_gateway_sdk__WEBPACK_IMPORTED_MODULE_0___default();
        }
        let PayPalReturnUrl = window.location.href;
        const dynamicCallBackName = "rememberedCb";
        const PayPalRememberedScript = callbackName => `https://www.paypal.com/checkoutnow/remembered?callback=${callbackName}`;
        const noop = () => {};
        const isFn = object => "function" === typeof object;
        const dynamicRemembered = {
            loadingStatus: 0,
            info: {},
            cbFnList: []
        };
        let renderObserver;
        class PayPalSmartPayButton {
            constructor(config) {
                const btnShape = "rounded" === lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(document, "body.dataset.button_style", void 0) ? "pill" : "rect";
                this.loggerPrefix = `[PayPal][当前dom为:${config.domId}]`;
                this.payMode = config.payMode || "continue";
                this.config = {
                    ...this.config,
                    ..._config__WEBPACK_IMPORTED_MODULE_5__.initialData,
                    timeout: {
                        switch: false
                    },
                    commit: (0, _utils__WEBPACK_IMPORTED_MODULE_7__.getConfigCommit)(config),
                    disableFunding: config.disableFunding,
                    domId: config.domId,
                    pageType: config.pageType,
                    stage: config.stage,
                    needReport: config.needReport,
                    reportParamsExt: config.reportParamsExt,
                    styleOption: {
                        commonStyle: {
                            paypalSPBStyle: {
                                ..._config__WEBPACK_IMPORTED_MODULE_5__.initialData.styleOption.commonStyle.paypalSPBStyle,
                                ...config.paypalStyle || {},
                                height: this.getDomHeight(config.height),
                                shape: btnShape
                            }
                        }
                    },
                    paypalScriptParams: config.scriptParams || {}
                };
                const {switch: timeoutSwitch, delay} = (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_4__.nullishCoalescingOperator)(config.timeout, {});
                if (timeoutSwitch) {
                    this.config.timeout.switch = timeoutSwitch;
                    this.config.timeout.delay = delay && "number" === typeof delay ? delay : _config__WEBPACK_IMPORTED_MODULE_5__.initialData.initTimeout;
                }
                this.wrapperClass = config.wrapperClass;
                this.wrapperStyle = config.wrapperStyle;
                this.style = {
                    height: this.getDomHeight(config.height)
                };
                this.products = null;
                this.dynamic = config.dynamic;
                this.jsonpCallback = this.jsonpCallback.bind(this);
                this.onToast = isFn(config.onToast) ? config.onToast : noop;
                this.onDynamicNotify = isFn(config.onDynamicNotify) ? config.onDynamicNotify : noop;
                this.onInit = isFn(config.onInit) ? config.onInit : noop;
                this.beforeCreateOrder = isFn(config.beforeCreateOrder) ? config.beforeCreateOrder : _config__WEBPACK_IMPORTED_MODULE_5__.initialData.beforeCreateOrder;
                this.createOrder = isFn(config.createOrder) ? config.createOrder : noop;
                this.beforeContinue = isFn(config.beforeContinue) ? config.beforeContinue : noop;
                this.onError = isFn(config.onError) ? config.onError : noop;
                this.payNowMode = this.payNowMode.bind(this);
                this.continueMode = this.continueMode.bind(this);
                this.onCancel = isFn(config.onCancel) ? config.onCancel : noop;
                this.configBeforeRender = isFn(config.beforeRender) ? config.beforeRender : noop;
                this.afterRender = isFn(config.afterRender) ? config.afterRender : noop;
                this.preparePayParams = null;
            }
            getDomHeight(height = 45) {
                if (height > 55) {
                    logger.error(`${this.loggerPrefix}[按钮高度传入异常]`, {
                        height
                    });
                    return 55;
                }
                if (height < 25) {
                    logger.error(`${this.loggerPrefix}[按钮高度传入异常]`, {
                        height
                    });
                    return 25;
                }
                return height;
            }
            get isContinueMode() {
                return "continue" === this.payMode;
            }
            get isVerticalLayout() {
                return "vertical" === this.config.styleOption.commonStyle.paypalSPBStyle.layout;
            }
            transProducts(products) {
                return products.map((item => ({
                    productNum: item.num,
                    productSeq: item.spuId,
                    productSku: item.skuId,
                    productPrice: item.price
                })));
            }
            onPayPalError(error, type) {
                const message = error && error.message;
                if ("caught" !== message) {
                    logger.error(`${this.loggerPrefix}[onError]${splitter({
                        k: "code",
                        v: error && error.code
                    })}${splitter({
                        k: "message",
                        v: message || error && error.msg
                    })}`, {
                        ...error,
                        code: error && error.code,
                        message
                    });
                    const text = (0, _utils__WEBPACK_IMPORTED_MODULE_7__.conversion)(error);
                    this.onToast({
                        message: text
                    });
                }
                this.onError(error, type);
            }
            async continueMode() {
                let dataReportReq;
                try {
                    dataReportReq = (0, _utils_tradeReport__WEBPACK_IMPORTED_MODULE_10__.setPayPalReportReq)({
                        products: this.products,
                        needReport: this.config.needReport,
                        extra: this.config.reportParamsExt
                    });
                } catch (error) {
                    this.onPayPalError(error);
                }
                const {originUrl, query} = (0, _yy_sl_theme_shared_utils_url_adaptor__WEBPACK_IMPORTED_MODULE_1__.adaptor)(this.createOrderParams.returnUrl);
                const {engineType, preview, themeId, ignoreRedirect} = query;
                const {url: wrapperUrl} = (0, _yy_sl_theme_shared_utils_url_adaptor__WEBPACK_IMPORTED_MODULE_1__.adaptor)(originUrl, {
                    query: {
                        engineType,
                        preview,
                        themeId,
                        ignoreRedirect
                    },
                    fullQuery: false
                });
                const {manualCapture, orderFrom = null} = (0, _utils__WEBPACK_IMPORTED_MODULE_7__.getPayPalServerConfig)();
                const params = {
                    payMethod: "Paypal",
                    dataReportReq,
                    abandonedOrderInfo: this.preparePayParams,
                    returnUrl: wrapperUrl,
                    extChannelInfo: {
                        manualCapture
                    },
                    orderFrom: (0, _utils_dataAccessor__WEBPACK_IMPORTED_MODULE_13__.getSyncData)("orderFrom") || orderFrom
                };
                try {
                    const isDismissParams = [ "orderFrom" ].some((key => !params[key] && 0 !== params[key]));
                    if (isDismissParams) logger.info("[预支付请求参数缺失，请检查]", {
                        ...params,
                        abandonedSeq: this.abandonedSeq
                    });
                    const {data = {}} = await (0, _services__WEBPACK_IMPORTED_MODULE_6__.preparePay)(params);
                    const {chDealId, returnUrl: continueRedirectUrl} = data;
                    _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__.SL_EventBus.emit(PAYPAL_CHECKOUT, {
                        data: {
                            event_status: chDealId ? 1 : 0,
                            stage: (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_4__.nullishCoalescingOperator)(this.config.stage, this.config.pageType),
                            product: this.products
                        }
                    });
                    PayPalReturnUrl = continueRedirectUrl;
                    logger.debug(`${this.loggerPrefix}[唤起弹窗成功][createOrder][拿chDealId][${chDealId ? "成功" : "失败"}]`, chDealId ? {
                        ...data
                    } : null);
                    return chDealId;
                } catch (error) {
                    logger.debug(`${this.loggerPrefix}[唤起弹窗成功][createOrder][拿chDealId][失败]${splitter({
                        k: "code",
                        v: error && error.code
                    })}${splitter({
                        k: "message",
                        v: error && error.msg || error && error.message
                    })}`, {
                        ...error
                    });
                    _utils_event_bus__WEBPACK_IMPORTED_MODULE_12__.SL_EventBus.emit(PAYPAL_CHECKOUT, {
                        data: {
                            event_status: 0,
                            stage: (0, _utils_syntax_patch__WEBPACK_IMPORTED_MODULE_4__.nullishCoalescingOperator)(this.config.stage, this.config.pageType),
                            product: this.products
                        }
                    });
                }
            }
            async payNowMode() {
                try {
                    const {chDealId, returnUrl: payNowReturnUrl} = await this.createOrder(this.createOrderParams);
                    PayPalReturnUrl = payNowReturnUrl;
                    logger.debug(`${this.loggerPrefix}[唤起弹窗成功][createOrder][拿chDealId][${chDealId ? "成功" : "失败"}]`, chDealId ? {
                        chDealId,
                        returnUrl: payNowReturnUrl
                    } : null);
                    return chDealId;
                } catch (error) {
                    const text = (0, _utils__WEBPACK_IMPORTED_MODULE_7__.conversion)(error);
                    this.onToast({
                        message: text
                    });
                    this.onPayPalError(error);
                    return Promise.reject({
                        message: text
                    });
                }
            }
            async onUserCancel(data, {redirect}) {
                logger.info(`${this.loggerPrefix}[用户关闭PayPal弹窗]`, {
                    abandonedSeq: this.abandonedSeq
                });
                const redirectUrl = await this.onCancel(data);
                if (redirectUrl) redirect(redirectUrl);
            }
            async onCurrentInit(data, actions) {
                if (this.initTimer) clearTimeout(this.initTimer);
                this.initActions = actions;
                logger.debug(`${this.loggerPrefix}[初始化成功]`);
                this.onInit(data, actions);
            }
            async onClick({fundingSource} = {}, actions) {
                logger.info(`${this.loggerPrefix}[按钮点击][点击了${fundingSource}]`);
                let orderParams;
                const isAsync = "[object AsyncFunction]" === Object.prototype.toString.call(this.beforeCreateOrder);
                if (isAsync) orderParams = await this.beforeCreateOrder(this).catch((error => {
                    this.onPayPalError(error);
                    return actions.reject();
                })); else orderParams = await this.beforeCreateOrder(this);
                logger.debug(`${this.loggerPrefix}[准备唤起弹窗][beforeCreateOrder][参数拼接完成]`);
                if (orderParams && false === orderParams.valid) return actions.reject();
                this.initActions.enable();
                orderParams = orderParams || {
                    products: this.products
                };
                this.createOrderParams = orderParams;
                const {products, ...extra} = orderParams;
                if (!products || products.length <= 0) {
                    this.onPayPalError({
                        message: `products empty, request aborted: ${products}`
                    });
                    return actions.reject();
                }
                if (!this.isContinueMode) return;
                this.products = products;
                const {url: returnUrl, needLogin, abandonedInfo} = await _utils_checkout__WEBPACK_IMPORTED_MODULE_8__["default"].save(products, {
                    ...extra,
                    stage: this.config.stage,
                    query: {
                        ...extra.query,
                        spb: true
                    }
                });
                this.createOrderParams.returnUrl = returnUrl;
                this.preparePayParams = abandonedInfo;
                if (needLogin) {
                    window.location.href = returnUrl;
                    return actions.reject();
                }
            }
            async onCreateOrder() {
                logger.debug(`${this.loggerPrefix}[唤起弹窗成功][createOrder][拿chDealId]`);
                try {
                    if (this.isContinueMode) return this.continueMode();
                    return this.payNowMode();
                } catch {
                    return "";
                }
            }
            get abandonedSeq() {
                if (this.isContinueMode) return this.preparePayParams && this.preparePayParams.seq;
                return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(this.createOrderParams, "abandonedOrderSeqInfo.seq", void 0);
            }
            onContinue() {
                const tipsTxt = this.isContinueMode ? "继续" : "支付";
                logger.info(`${this.loggerPrefix}[点击${tipsTxt}][准备跳转][onContinue][${PayPalReturnUrl}]`, {
                    jumpUrl: PayPalReturnUrl,
                    abandonedSeq: this.abandonedSeq
                });
                isFn(this.beforeContinue) && this.beforeContinue({
                    returnUrl: PayPalReturnUrl
                });
                window.location.href = PayPalReturnUrl;
                logger.info(`${this.loggerPrefix}[点击${tipsTxt}][跳转已触发]`, {
                    abandonedSeq: this.abandonedSeq
                });
                return false;
            }
            setProducts(products) {
                logger.debug(`${this.loggerPrefix}[更新PayPal商品信息]`, {
                    products
                });
                this.products = this.transProducts(products);
            }
            setDisabled(disabled) {
                if (!this.node) return;
                this.disabled = disabled;
                try {
                    if (disabled) {
                        this.initActions && this.initActions.disable();
                        this.createDisabledStyle(this.node);
                        return;
                    }
                    this.initActions && this.initActions.enable();
                    this.disabledStyleTag && this.node.parentElement && this.node.parentElement.removeChild(this.disabledStyleTag);
                } catch (err) {
                    console.log("此处报错不影响功能，无需关注", err);
                }
            }
            createStyle(node) {
                const skeleton = document.createElement("div");
                this.skeleton = skeleton;
                skeleton.classList.add("paypal__skeleton--animated");
                const styleTag = document.createElement("style");
                const linearGradient = [ `90deg`, `hsla(0, 0%, 74.5%, 0.2) 25%`, `hsla(0, 0%, 50.6%, 0.24) 37%`, `hsla(0, 0%, 74.5%, 0.2) 63%` ].join(", ");
                const skeletonAnimated = `\n      @keyframes skeleton {\n        0% {\n          background-position: 100% 50%;\n        }\n        100% {\n          background-position: 0 50%;\n        }\n      }\n    `;
                styleTag.innerHTML = this.isContinueMode && !this.isVerticalLayout ? `\n      #${this.config.domId} {\n        overflow: hidden;\n        text-align: center;\n        height: ${this.style.height}px;\n      }\n      /** 背景底色 */\n      #${this.config.domId}.paypal__bg::before,\n      #${this.config.domId}.paypal__bg::after {\n        content:'';\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        width: calc(50% - 3px);\n        border-radius: 4px;\n        background-color: #ffc439;\n      }\n      #${this.config.domId}.paypal__bg::after {\n        left: unset;\n        right: 0;\n      }\n      [data-button_style=square] .paypal__bg::before,\n      [data-button_style=square] .paypal__bg::after{\n        border-radius: 0 !important;\n      }\n      [data-button_style=rounded] .paypal__bg::before,\n      [data-button_style=rounded] .paypal__bg::after{\n        border-radius: 9999px !important;\n      }\n    ` : `\n      #${this.config.domId} {\n        min-height: ${this.style.height}px;\n      }\n      `;
                styleTag.innerHTML += `\n\n    #${this.config.domId} {\n      position: relative;\n    }\n    #${this.config.domId} .paypal__skeleton--animated {\n      margin: 0 auto;\n      border-radius: 4px;\n      width: 100%;\n      height: ${this.style.height}px;\n      position: absolute;\n    }\n\n    .paypal__skeleton--animated {\n      background: linear-gradient(${linearGradient});\n      background-size: 400% 100%;\n      animation: skeleton 2s linear infinite;\n    }\n\n    ${skeletonAnimated}\n    `;
                if (!node) return;
                if (this.wrapperClass) node.classList.add(this.wrapperClass);
                if (this.wrapperStyle) {
                    let wrapperStyle = {};
                    const nodeStyleAttr = node.getAttribute("style").replace(/\s+/g, "");
                    const convertInputStyle = stringTypeStyle => {
                        const style = {};
                        const input = stringTypeStyle.split(";");
                        input.forEach((s => {
                            const [k, v] = s.split(":");
                            const key = k.replace(/-[^0-9]/g, (v => v.charAt(1).toUpperCase()));
                            style[key] = v;
                        }));
                        return style;
                    };
                    const convertOutputStyle = cssObjectStyle => {
                        if ("object" !== typeof cssObjectStyle) return "";
                        return Object.entries(cssObjectStyle).map((o => o.join(":"))).join(";").replace(/[A-Z]/g, (v => `-${v.charAt(0).toLowerCase()}`));
                    };
                    if ("string" === typeof this.wrapperStyle) wrapperStyle = {
                        ...convertInputStyle(nodeStyleAttr),
                        ...convertInputStyle(this.wrapperStyle)
                    }; else if ("object" === typeof this.wrapperStyle) wrapperStyle = {
                        ...convertInputStyle(nodeStyleAttr),
                        ...this.wrapperStyle
                    };
                    node.style = convertOutputStyle(wrapperStyle);
                }
                node.parentElement.insertBefore(styleTag, node);
                node.appendChild(skeleton);
            }
            createDisabledStyle(node) {
                const styleTag = document.createElement("style");
                this.disabledStyleTag = styleTag;
                styleTag.innerHTML = `\n      #${this.config.domId || "shopline-paypal"}::before {\n        width: 0 !important;\n      }\n      #${this.config.domId || "shopline-paypal"}::after {\n        content: '';\n        display: block;\n        z-index: 100;\n        width: 100% !important;\n        height: ${this.style.height}px;\n        border-radius: 4px;\n        cursor: not-allowed;\n        position: absolute;\n        top: 0;\n        left: 0 !important;\n        background: transparent !important;\n      }\n\n      #${this.config.domId} {\n        opacity: ${this.disabled ? .3 : 1};\n      }\n    `;
                if (!node) return;
                node.parentElement.insertBefore(styleTag, node);
            }
            removeSkeleton(node) {
                const {skeleton} = this;
                clearTimeout(this.removeSkeletonTimer);
                this.removeSkeletonTimer = setTimeout((() => {
                    if (node) {
                        node.removeChild(skeleton);
                        if (this.isContinueMode) node.classList.add("paypal__bg");
                    }
                }), 300);
            }
            dynamicNotify(remembered) {
                const {paypal} = remembered || {};
                this.isHidePayPalButton = !paypal;
                if (!paypal && this.onDynamicNotify) this.onDynamicNotify({
                    ...remembered,
                    isHidePayPalButton: !paypal
                });
            }
            jsonpCallback(remembered) {
                logger.debug(`${this.loggerPrefix}[是否有登录cookie][remembered]`, {
                    remembered
                });
                dynamicRemembered.info = remembered;
                dynamicRemembered.loadingStatus = 2;
                this.dynamicNotify(remembered);
                if (dynamicRemembered.cbFnList) try {
                    dynamicRemembered.cbFnList.forEach((cbFn => cbFn(remembered)));
                    dynamicRemembered.cbFnList = [];
                } catch (e) {
                    dynamicRemembered.cbFnList = [];
                }
            }
            async beforeRender() {
                try {
                    this.configBeforeRender();
                } catch (error) {
                    this.onPayPalError({
                        message: "[beforeRender调用失败]",
                        error
                    });
                }
                let paypalConfig = {};
                try {
                    const {data} = await (0, _services__WEBPACK_IMPORTED_MODULE_6__.getPaypalConfig)();
                    paypalConfig = data || {};
                } catch (error) {
                    this.onPayPalError({
                        message: "[获取paypal配置失败]",
                        error
                    });
                }
                return {
                    clientKey: (0, _config__WEBPACK_IMPORTED_MODULE_5__.getPaypalKey)(paypalConfig),
                    paypalQueryParams: (0, _utils__WEBPACK_IMPORTED_MODULE_7__.getQueryParams)(this.config, {
                        isContinueMode: this.isContinueMode,
                        paypalConfig
                    })
                };
            }
            async render() {
                if (this.dynamic) if (2 !== dynamicRemembered.loadingStatus) {
                    if (1 === dynamicRemembered.loadingStatus) {
                        dynamicRemembered.cbFnList.push(this.render.bind(this));
                        return;
                    }
                    dynamicRemembered.loadingStatus = 1;
                    window[dynamicCallBackName] = this.jsonpCallback;
                    try {
                        await (0, _utils_load_script__WEBPACK_IMPORTED_MODULE_9__["default"])(PayPalRememberedScript(dynamicCallBackName));
                        logger.debug(`${this.loggerPrefix}[加载登录态判定 script]: ${dynamicCallBackName}`);
                    } catch (error) {
                        this.onPayPalError(error);
                    }
                } else this.dynamicNotify(dynamicRemembered.info);
                if (void 0 !== this.isHidePayPalButton && this.isHidePayPalButton) return null;
                if (!this.config.domId || this.rendered) return null;
                const node = document.getElementById(this.config.domId);
                if (!node) {
                    logger.error(`${this.loggerPrefix}[onError][初始化失败][找不到挂载的DOM]`);
                    return null;
                }
                this.node = node;
                if (this.config.timeout && this.config.timeout.switch) {
                    if (renderObserver) {
                        renderObserver.disconnect();
                        renderObserver = null;
                    }
                    this.initTimer = setTimeout((() => {
                        this.node.innerHTML = "";
                        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        renderObserver = new MutationObserver((mutations => {
                            mutations.forEach((() => {
                                this.node.innerHTML = "";
                            }));
                        }));
                        const config = {
                            childList: true,
                            attributes: false,
                            subtree: false
                        };
                        node && renderObserver.observe(node, config);
                        setTimeout((() => {
                            if (!renderObserver) return;
                            renderObserver.disconnect();
                            renderObserver = null;
                        }), 5e3);
                        this.initError = true;
                        this.onPayPalError(new Error(`[初始化渲染失败][超时未调用onInit][当前超时时间:${this.config.timeout.delay}ms]`), "initRender");
                        throw new Error(`[初始化渲染失败][超时未调用onInit][当前超时时间:${this.config.timeout.delay}ms]`);
                    }), this.config.timeout.delay);
                }
                this.createStyle(node);
                const {clientKey, paypalQueryParams} = await this.beforeRender();
                const paypalSdkInitParams = {
                    ...this.config,
                    paypalQueryParams,
                    createOrder: this.onCreateOrder.bind(this),
                    createToken: this.onContinue.bind(this),
                    paypalProps: {
                        onClick: this.onClick.bind(this),
                        onError: this.onPayPalError.bind(this),
                        onInit: this.onCurrentInit.bind(this),
                        onCancel: this.onUserCancel.bind(this)
                    }
                };
                const PayPalInstance = new (getPaypalSDK())(clientKey, paypalSdkInitParams);
                PayPalInstance && this.removeSkeleton(node);
                this.rendered = true;
                this.afterRender({
                    dynamicInfo: dynamicRemembered.info
                });
                logger.debug(`${this.loggerPrefix}[初始化SDK]`, {
                    ...paypalSdkInitParams
                });
                return PayPalInstance;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = PayPalSmartPayButton;
    },
    "../shared/browser/components/paypal/services.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            preparePay: () => preparePay,
            getPaypalConfig: () => getPaypalConfig
        });
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/request.js");
        const legalUrl = "undefined" === typeof window ? "" : window.location.href.replace(/(&?\w+={.*?})|{|}/g, "");
        const extChannelInfo = {
            shopper_action: "CONTINUE",
            sub_channel: "SPB",
            cancel_url: legalUrl,
            landing_page: "LOGIN",
            locale: ""
        };
        const preparePay = params => {
            const {extChannelInfo: ext, ...rest} = params;
            return _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"].post("/trade/center/pay/pay-pal/prepare-pay", {
                extChannelInfo: JSON.stringify({
                    ...extChannelInfo,
                    ...ext || {}
                }),
                ...rest
            });
        };
        const getPaypalConfig = () => _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/trade/pay/payment/paypal/config/data");
    },
    "../shared/browser/components/paypal/utils/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            isProd: () => isProd,
            conversion: () => conversion,
            getPayPalServerConfig: () => getPayPalServerConfig,
            getConfigCommit: () => getConfigCommit,
            canTrustedPaypalConfig: () => canTrustedPaypalConfig,
            getQueryParams: () => getQueryParams
        });
        var _yy_sl_theme_shared_utils_get_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/get-env.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _utils_state_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        const isProd = [ "product", "preview" ].includes((0, _yy_sl_theme_shared_utils_get_env__WEBPACK_IMPORTED_MODULE_2__["default"])().APP_ENV);
        const conversion = error => {
            let content;
            switch (true) {
              case /0401/.test(error.code):
              case /0402/.test(error.code):
                content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.product_expired");
                break;

              case /0403/.test(error.code):
                content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.insufficient_product_inventory");
                break;

              case /0404/.test(error.code):
                content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.product_limit");
                break;

              case /0005/.test(error.code):
                content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.network");
                break;

              case /0703/.test(error.code):
                content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.store_nonexistent");
                break;

              default:
                content = error && error.message || (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("cart.notices.network");
            }
            return content;
        };
        const getPaypalNacosConfig = () => window.__ENV__ && window.__ENV__.PAYPAL_CONFIG_V2;
        const getPayPalServerConfig = () => {
            const {enterAccountConfig = {}, ...rest} = _utils_state_selector__WEBPACK_IMPORTED_MODULE_1__.SL_State.get("tradeCollectionConfig") || {};
            const {orderFrom} = _utils_state_selector__WEBPACK_IMPORTED_MODULE_1__.SL_State.get("checkout.otherInfo") || {};
            const intent = enterAccountConfig.manualEnterAccount ? "authorize" : "capture";
            const manualCapture = enterAccountConfig.manualEnterAccount;
            return {
                ...rest,
                intent,
                manualCapture,
                orderFrom
            };
        };
        const getConfigCommit = config => !!config.commit;
        const paypalConfigKey = [ "paypalMerchantId", "clientId" ];
        const canTrustedPaypalConfig = paypalConfig => {
            const servicesConfig = paypalConfigKey.map((key => paypalConfig[key]));
            if (servicesConfig.some(Boolean) && !servicesConfig.every(Boolean)) return true;
            return false;
        };
        const getQueryParams = (config, {isContinueMode, paypalConfig}) => {
            const {intent} = getPayPalServerConfig();
            const commit = getConfigCommit(config);
            const nacosConfig = getPaypalNacosConfig();
            let queryParams = `intent=${intent}&commit=${commit}`;
            if (config.queryParams) queryParams += `&${config.queryParams}`;
            if (canTrustedPaypalConfig(paypalConfig) && paypalConfig.paypalMerchantId) queryParams += `&merchant-id=${paypalConfig.paypalMerchantId}`;
            if (Array.isArray(nacosConfig)) {
                const setQueryParams = item => {
                    const {key, value, isCoverAll, whitelist, blacklist} = item;
                    const {storeId} = window.Shopline;
                    if (isCoverAll) {
                        if (Array.isArray(blacklist) && !blacklist.includes(storeId)) queryParams += `&${key}=${value}`;
                    } else if (Array.isArray(whitelist) && whitelist.includes(storeId)) queryParams += `&${key}=${value}`;
                };
                nacosConfig.forEach((item => {
                    if ("all" === item.scope) setQueryParams(item); else {
                        if (isContinueMode && "continue" === item.scope) setQueryParams(item);
                        if (!isContinueMode && "payNow" === item.scope) setQueryParams(item);
                    }
                }));
            } else {
                const {disableFunding} = window.__ENV__ && window.__ENV__.PAYPAL_CONFIG || {};
                if (isContinueMode) if (disableFunding) queryParams += `&disable-funding=${disableFunding}`;
            }
            return queryParams;
        };
    },
    "../shared/browser/events/data-report/enum/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            ADD_TO_CART: () => ADD_TO_CART,
            COMPLETE_ORDER: () => COMPLETE_ORDER,
            INITIATE_CHECKOUT: () => INITIATE_CHECKOUT,
            VIEW_CONTENT: () => VIEW_CONTENT,
            PURCHASE: () => PURCHASE,
            ThirdPartReport: () => ThirdPartReport,
            HiidoReport: () => HiidoReport
        });
        const ADD_TO_CART = "DataReport::AddToCart";
        const COMPLETE_ORDER = "DataReport::CompleteOrder";
        const INITIATE_CHECKOUT = "DataReport::InitiateCheckout";
        const VIEW_CONTENT = "DataReport::ViewContent";
        const PURCHASE = "DataReport::Purchase";
        const ThirdPartReport = "DataReport::ThirdPart";
        const HiidoReport = "DataReport::Hiido";
    },
    "../shared/browser/events/trade/interior-event/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            OPEN_MINI_CART: () => OPEN_MINI_CART,
            ADD_TO_CART: () => ADD_TO_CART,
            CONTROL_CART_BASIS: () => CONTROL_CART_BASIS,
            INTERIOR_TRADE_UPDATE_DETAIL: () => INTERIOR_TRADE_UPDATE_DETAIL,
            LINE_ITEM_UPDATE: () => LINE_ITEM_UPDATE
        });
        const OPEN_MINI_CART = Symbol("OPEN_MINI_CART");
        const ADD_TO_CART = Symbol("ADD_TO_CART");
        const CONTROL_CART_BASIS = Symbol("CONTROL_CART_BASIS");
        const INTERIOR_TRADE_UPDATE_DETAIL = Symbol("TRADE_UPDATE_DETAIL");
        const LINE_ITEM_UPDATE = Symbol("LINE_ITEM_UPDATE");
    },
    "../shared/browser/events/utils/api-logger.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_createLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/createLogger.js");
        const __WEBPACK_DEFAULT_EXPORT__ = apiName => (0, _utils_createLogger__WEBPACK_IMPORTED_MODULE_0__["default"])("developer-api", `[${apiName}]`);
    },
    "../shared/browser/node_modules/@funnyecho/context/dist/constant.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var errCanceled = "context done with cancellation";
        var errTimeout = "context done with timeout";
        var errDeadline = "context done with deadline";
        var errNotNullableValuer = "valuer is not nullable";
        exports["default"] = {
            errCanceled,
            errTimeout,
            errDeadline,
            errNotNullableValuer
        };
    },
    "../shared/browser/node_modules/@funnyecho/context/dist/context.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var promise_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/promise/dist/index.js"));
        var time_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/time/dist/index.js"));
        var constant_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/constant.js"));
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
        exports["default"] = {
            background,
            todo,
            withValue,
            withCancel,
            withTimeout,
            withDeadline
        };
        function newEmptyCtx() {
            return {
                deadline: function() {
                    return null;
                },
                done: function() {
                    return promise_1.default.zombie;
                },
                err: function() {
                    return null;
                },
                value: function(cv) {
                    return cv ? cv.defaultGetter() : null;
                }
            };
        }
        function newValueCtx(parent, valuer, value) {
            return {
                deadline: function() {
                    return parent.deadline();
                },
                done: function() {
                    return parent.done();
                },
                err: function() {
                    return parent.err();
                },
                value: function(cv) {
                    if (valuer === cv) return value;
                    return parent.value(cv);
                }
            };
        }
        function forkParentCtx(parent) {
            if (!parent) parent = _background;
            return {
                deadline: function() {
                    return parent.deadline();
                },
                done: function() {
                    return parent.done();
                },
                err: function() {
                    return parent.err();
                },
                value: function(cv) {
                    return parent.value(cv);
                }
            };
        }
        function createCancellablePromise() {
            return promise_1.default.resolvable();
        }
        function newTimeoutCtx(parent, dur) {
            var error;
            var deadline = time_1.default.later(dur);
            var timeoutPromise = promise_1.default.resolveAfterDuration(dur);
            return {
                deadline: function() {
                    return deadline;
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), timeoutPromise.then((function() {
                        return new Error(constant_1.default.errTimeout);
                    })) ]).then((function(err) {
                        error = err;
                    }));
                },
                err: function() {
                    return error;
                },
                value: function(cv) {
                    return parent.value(cv);
                }
            };
        }
        function newDeadlineCtx(parent, deadline) {
            var error = null;
            var deadlinePromise = promise_1.default.resolveAfterDuration(deadline.duration(time_1.default.now()));
            return {
                deadline: function() {
                    return deadline;
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), deadlinePromise.then((function() {
                        return new Error(constant_1.default.errDeadline);
                    })) ]).then((function(err) {
                        error = err;
                    }));
                },
                err: function() {
                    return error;
                },
                value: function(cv) {
                    return parent.value(cv);
                }
            };
        }
        function newCancelCtx(parent) {
            var _a = createCancellablePromise(), cancelPromise = _a[0], cancelFunc = _a[1];
            var error = null;
            return [ {
                deadline: function() {
                    return parent.deadline();
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), cancelPromise.then((function() {
                        return new Error(constant_1.default.errCanceled);
                    })) ]).then((function(err) {
                        error = err;
                    }));
                },
                err: function() {
                    return error;
                },
                value: function(cv) {
                    return parent.value(cv);
                }
            }, cancelFunc ];
        }
        var _background = newEmptyCtx();
        var _todo = newEmptyCtx();
    },
    "../shared/browser/node_modules/@funnyecho/context/dist/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __assign = this && this.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (void 0 === k2) k2 = k;
            Object.defineProperty(o, k2, {
                enumerable: true,
                get: function() {
                    return m[k];
                }
            });
        } : function(o, m, k, k2) {
            if (void 0 === k2) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if ("default" !== p && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var context_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/context.js"));
        var constant_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/constant.js"));
        var valuer_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/valuer.js"));
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/context.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/valuer.js"), exports);
        exports["default"] = __assign(__assign(__assign({}, constant_1.default), context_1.default), valuer_1.default);
    },
    "../shared/browser/node_modules/@funnyecho/context/dist/valuer.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var constant_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/constant.js"));
        function newValuer(value) {
            var getter;
            if (void 0 === value) getter = function() {
                throw new Error(constant_1.default.errNotNullableValuer);
            }; else getter = function() {
                return value;
            };
            return createValuer(getter);
        }
        function newValuerWithGetter(getter) {
            if ("function" !== typeof getter) getter = function() {
                throw new Error(constant_1.default.errNotNullableValuer);
            };
            return createValuer(getter);
        }
        exports["default"] = {
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
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/entry.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/error.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var errNilEntry = "FA_LOGGER_NIL_ENTRY";
        var errNilFieldKey = "FA_LOGGER_NIL_FIELD_KEY";
        var errNilFieldValue = "FA_LOGGER_NIL_FIELD_VALUE";
        exports["default"] = {
            errNilEntry,
            errNilFieldKey,
            errNilFieldValue
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/field.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var error_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/error.js"));
        function getFieldKey(field) {
            return null == (null === field || void 0 === field ? void 0 : field.key) ? "" : String(field.key);
        }
        function getFieldValue(field) {
            return null === field || void 0 === field ? void 0 : field.value;
        }
        function marshalFieldList() {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
            var fields = [];
            var _loop_1 = function(i) {
                var item = values[i];
                if (item) {
                    var itemType = typeof item;
                    if ("string" === itemType) {
                        i += 1;
                        if (i >= values.length) fields.push({
                            key: item,
                            value: error_1.default.errNilFieldValue
                        }); else fields.push({
                            key: item,
                            value: values[i]
                        });
                    } else if (isPlainObject(item)) Object.keys(item).forEach((function(key) {
                        fields.push({
                            key,
                            value: item[key]
                        });
                    })); else fields.push({
                        key: "",
                        value: item
                    });
                }
                out_i_1 = i;
            };
            var out_i_1;
            for (var i = 0; i < values.length; ++i) {
                _loop_1(i);
                i = out_i_1;
            }
            return fields;
        }
        function mergeFieldList() {
            var list = [];
            for (var _i = 0; _i < arguments.length; _i++) list[_i] = arguments[_i];
            return list.reduce((function(result, l) {
                if (!Array.isArray(l)) return result;
                return result.concat(l || []);
            }), []);
        }
        function mapFieldList(fields) {
            var record = {};
            var extra = [];
            (fields || []).forEach((function(field) {
                var key = getFieldKey(field);
                var value = getFieldValue(field);
                if (!key) extra.push(value); else record[key] = value;
            }));
            if (extra.length > 0) Object.assign(record, {
                __extra__: extra
            });
            return record;
        }
        exports["default"] = {
            getFieldKey,
            getFieldValue,
            marshalFieldList,
            mergeFieldList,
            mapFieldList
        };
        function isPlainObject(obj) {
            if ("object" == typeof obj && null !== obj) {
                if ("function" == typeof Object.getPrototypeOf) {
                    var proto = Object.getPrototypeOf(obj);
                    return proto === Object.prototype || null === proto;
                }
                return "[object Object]" == Object.prototype.toString.call(obj);
            }
            return false;
        }
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __assign = this && this.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
            if (void 0 === k2) k2 = k;
            Object.defineProperty(o, k2, {
                enumerable: true,
                get: function() {
                    return m[k];
                }
            });
        } : function(o, m, k, k2) {
            if (void 0 === k2) k2 = k;
            o[k2] = m[k];
        });
        var __exportStar = this && this.__exportStar || function(m, exports) {
            for (var p in m) if ("default" !== p && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var error_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/error.js"));
        var field_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/field.js"));
        var level_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/level.js"));
        var logger_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/logger.js"));
        var loggerConfig_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/loggerConfig.js"));
        var transport_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"));
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/entry.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/error.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/field.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/kvt.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/level.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/logger.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/loggerConfig.js"), exports);
        __exportStar(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"), exports);
        exports["default"] = __assign(__assign(__assign(__assign(__assign(__assign({}, error_1.default), field_1.default), level_1.default), loggerConfig_1.default), logger_1.default), transport_1.default);
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/kvt.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/level.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.LevelEnum = void 0;
        var LevelEnum;
        (function(LevelEnum) {
            LevelEnum[LevelEnum["fatal"] = 0] = "fatal";
            LevelEnum[LevelEnum["error"] = 1] = "error";
            LevelEnum[LevelEnum["info"] = 2] = "info";
            LevelEnum[LevelEnum["debug"] = 3] = "debug";
        })(LevelEnum = exports.LevelEnum || (exports.LevelEnum = {}));
        exports["default"] = {
            LevelEnum
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/logger.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __spreadArray = this && this.__spreadArray || function(to, from) {
            for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
            return to;
        };
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var loggerConfig_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/loggerConfig.js"));
        var level_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/level.js"));
        var field_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/field.js"));
        var transport_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"));
        var context_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/context/dist/index.js"));
        function withLogger(logger) {
            var withConfig = [];
            for (var _i = 1; _i < arguments.length; _i++) withConfig[_i - 1] = arguments[_i];
            return newLogger(loggerConfig_1.default.withLoggerConfig.apply(loggerConfig_1.default, __spreadArray([ copyLoggerConfig(logger) ], withConfig)));
        }
        function newNopLogger() {
            return newLogger(loggerConfig_1.default.newNopLoggerConfig());
        }
        var _globalLogger = newNopLogger();
        function takeGlobalLogger() {
            return _globalLogger;
        }
        function withGlobalLogger(_logger) {
            _globalLogger = _logger;
        }
        exports["default"] = {
            withLogger,
            newNopLogger,
            takeGlobalLogger,
            withGlobalLogger
        };
        function newLogger(config) {
            var owner = config.owner, transportList = config.transportList;
            function marshalLogExtra(extra) {
                return field_1.default.marshalFieldList.apply(field_1.default, extra);
            }
            function log(entry) {
                try {
                    transport_1.default.traverseTransportList(context_1.default.background(), entry, transportList);
                } catch (e) {
                    console.error("failed to log entry", "entry", entry, "error", e);
                }
            }
            function debug(msg) {
                var entry = {
                    owner,
                    level: level_1.default.LevelEnum.debug,
                    message: msg,
                    fields: marshalLogExtra(Array.from(arguments).slice(1))
                };
                log(entry);
            }
            function info(msg) {
                var entry = {
                    owner,
                    level: level_1.default.LevelEnum.info,
                    message: msg,
                    fields: marshalLogExtra(Array.from(arguments).slice(1))
                };
                log(entry);
            }
            function error(msg) {
                var entry = {
                    owner,
                    level: level_1.default.LevelEnum.error,
                    message: msg,
                    fields: marshalLogExtra(Array.from(arguments).slice(1))
                };
                log(entry);
            }
            return {
                get owner() {
                    return owner;
                },
                get transportList() {
                    return transportList;
                },
                debug,
                info,
                error
            };
        }
        function copyLoggerConfig(logger) {
            if (!logger) return loggerConfig_1.default.newNopLoggerConfig();
            return {
                owner: logger.owner,
                transportList: logger.transportList
            };
        }
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/loggerConfig.js": function(__unused_webpack_module, exports) {
        "use strict";
        var __spreadArray = this && this.__spreadArray || function(to, from) {
            for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
            return to;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function newNopLoggerConfig() {
            return {
                owner: "",
                transportList: []
            };
        }
        function withLoggerConfig(config) {
            var withConfigs = [];
            for (var _i = 1; _i < arguments.length; _i++) withConfigs[_i - 1] = arguments[_i];
            if (!config) config = newNopLoggerConfig();
            for (var i = 0; i < withConfigs.length; ++i) {
                var withFn = withConfigs[i];
                if ("function" === typeof withFn) {
                    var c = withFn(config);
                    if (c) config = c;
                }
            }
            return config;
        }
        function pipeOwner(owner) {
            return function(config) {
                if (owner) config.owner = [ config.owner, owner ].join(".");
            };
        }
        function withOwner(owner) {
            return function(config) {
                if (owner) config.owner = "" + owner;
            };
        }
        function pipeTransport() {
            var transportList = [];
            for (var _i = 0; _i < arguments.length; _i++) transportList[_i] = arguments[_i];
            return function(config) {
                config.transportList = __spreadArray(__spreadArray([], config.transportList || []), transportList.filter((function(v) {
                    return v;
                })));
            };
        }
        exports["default"] = {
            newNopLoggerConfig,
            withLoggerConfig,
            pipeOwner,
            withOwner,
            pipeTransport
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transport.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function traverseTransportWalkerList(ctx, entry, list) {
            if (!ctx || !Array.isArray(list) || !entry) return;
            for (var i = 0; i < list.length; ++i) {
                var walker = list[i];
                if ("function" === typeof walker) {
                    var result = walker(ctx, entry);
                    if (Array.isArray(result)) ctx = result[0], entry = result[1]; else if (false === result) return false;
                }
            }
            return [ ctx, entry ];
        }
        function traverseCapturedTransportList(ctx, entry, list) {
            if (!ctx || !Array.isArray(list) || !entry) return;
            for (var i = 0; i < list.length; ++i) {
                var transport = list[i];
                if (transport) {
                    var walker = void 0;
                    if ("function" !== typeof transport) walker = transport.capture; else walker = transport;
                    if ("function" === typeof walker) {
                        var result = walker(ctx, entry);
                        if (Array.isArray(result)) ctx = result[0], entry = result[1]; else if (false === result) return false;
                    }
                }
            }
            return [ ctx, entry ];
        }
        function traverseBubbledTransportList(ctx, entry, list) {
            if (!ctx || !Array.isArray(list) || !entry) return;
            for (var i = list.length - 1; i >= 0; --i) {
                var transport = list[i];
                if (transport) {
                    var walker = void 0;
                    if ("function" !== typeof transport) walker = transport.bubble;
                    if ("function" === typeof walker) {
                        var result = walker(ctx, entry);
                        if (Array.isArray(result)) ctx = result[0], entry = result[1]; else if (false === result) return false;
                    }
                }
            }
            return [ ctx, entry ];
        }
        function traverseTransportList(ctx, entry, list) {
            if (!ctx || !Array.isArray(list) || !entry) return entry;
            var capturedRes = traverseCapturedTransportList(ctx, entry, list);
            if (false === capturedRes) return;
            if (Array.isArray(capturedRes)) ctx = capturedRes[0], entry = capturedRes[1];
            var bubbledRes = traverseBubbledTransportList(ctx, entry, list);
            if (false === bubbledRes) return;
            if (Array.isArray(bubbledRes)) ctx = bubbledRes[0], entry = bubbledRes[1];
            return entry;
        }
        exports["default"] = {
            traverseTransportWalkerList,
            traverseTransportList,
            traverseCapturedTransportList,
            traverseBubbledTransportList
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/concat.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var transport_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"));
        function withConcat() {
            var transportList = [];
            for (var _i = 0; _i < arguments.length; _i++) transportList[_i] = arguments[_i];
            return {
                capture: function(ctx, entry) {
                    return transport_1.default.traverseCapturedTransportList(ctx, entry, transportList);
                },
                bubble: function(ctx, entry) {
                    return transport_1.default.traverseBubbledTransportList(ctx, entry, transportList);
                }
            };
        }
        exports["default"] = {
            withConcat
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/expect.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var transport_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"));
        function withExpect(tester, next) {
            return {
                capture: function(ctx, entry) {
                    if (tester(ctx, entry) && null != next) return transport_1.default.traverseCapturedTransportList(ctx, entry, [ next ]);
                },
                bubble: function(ctx, entry) {
                    if (tester(ctx, entry) && null != next) return transport_1.default.traverseBubbledTransportList(ctx, entry, [ next ]);
                }
            };
        }
        function withTruth(tester, next) {
            return withExpect(tester, next);
        }
        function withFalsy(tester, next) {
            return withExpect((function(ctx, entry) {
                return !tester(ctx, entry);
            }), next);
        }
        exports["default"] = {
            withExpect,
            withTruth,
            withFalsy
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/field.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var field_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/field.js"));
        function withFields(fields) {
            return function(_, entry) {
                entry.fields = field_1.default.mergeFieldList(entry.fields, fields);
            };
        }
        exports["default"] = {
            withFields
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __assign = this && this.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var field_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/field.js"));
        var level_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/level.js"));
        var stdout_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/stdout.js"));
        var expect_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/expect.js"));
        var split_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/split.js"));
        var concat_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/concat.js"));
        exports["default"] = __assign(__assign(__assign(__assign(__assign(__assign({}, field_1.default), level_1.default), stdout_1.default), expect_1.default), split_1.default), concat_1.default);
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/level.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var level_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/level.js"));
        function withLevel(level) {
            return {
                capture: function(_, entry) {
                    if (entry && entry.level > level) return false;
                }
            };
        }
        function withDebugLevel() {
            return withLevel(level_1.default.LevelEnum.debug);
        }
        function withInfoLevel() {
            return withLevel(level_1.default.LevelEnum.info);
        }
        exports["default"] = {
            withLevel,
            withDebugLevel,
            withInfoLevel
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/split.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var transport_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transport.js"));
        function withSplit(tester, truth, falsy) {
            return {
                capture: function(ctx, entry) {
                    var useTruth = !!tester(ctx, entry);
                    if (useTruth && null != truth) return transport_1.default.traverseCapturedTransportList(ctx, entry, [ truth ]);
                    if (!useTruth && null != falsy) return transport_1.default.traverseCapturedTransportList(ctx, entry, [ falsy ]);
                },
                bubble: function(ctx, entry) {
                    var useTruth = !!tester(ctx, entry);
                    if (useTruth && null != truth) return transport_1.default.traverseBubbledTransportList(ctx, entry, [ truth ]);
                    if (!useTruth && null != falsy) return transport_1.default.traverseBubbledTransportList(ctx, entry, [ falsy ]);
                }
            };
        }
        exports["default"] = {
            withSplit
        };
    },
    "../shared/browser/node_modules/@funnyecho/logger/dist/transports/stdout.js": function(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var level_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/level.js"));
        var field_1 = __importDefault(__webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/field.js"));
        function withStdout() {
            return {
                bubble: function(_, entry) {
                    var owner = entry.owner, level = entry.level, message = entry.message, fields = entry.fields;
                    var label = message + " [" + owner + "]";
                    var fieldMap = field_1.default.mapFieldList(fields);
                    var output = label + " " + JSON.stringify(fieldMap, null, 2);
                    switch (level) {
                      case level_1.default.LevelEnum.error:
                      case level_1.default.LevelEnum.fatal:
                        console.error(output);
                        break;

                      case level_1.default.LevelEnum.info:
                        console.info(output);
                        break;

                      default:
                      case level_1.default.LevelEnum.debug:
                        console.debug(output);
                    }
                }
            };
        }
        exports["default"] = {
            withStdout
        };
    },
    "../shared/browser/node_modules/@funnyecho/promise/dist/index.js": function(__unused_webpack_module, exports) {
        "use strict";
        var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
            function adopt(value) {
                return value instanceof P ? value : new P((function(resolve) {
                    resolve(value);
                }));
            }
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        var __generator = this && this.__generator || function(thisArg, body) {
            var f, y, t, g, _ = {
                label: 0,
                sent: function() {
                    if (1 & t[0]) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return step([ n, v ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                    0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [ 2 & op[0], t.value ];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;

                      case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };

                      case 5:
                        _.label++;
                        y = op[1];
                        op = [ 0 ];
                        continue;

                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;

                      default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                            _ = 0;
                            continue;
                        }
                        if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (6 === op[0] && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [ 6, e ];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (5 & op[0]) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function resolveAfterDuration(dur) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    if (dur <= 0) return [ 2, Promise.resolve() ];
                    return [ 2, new Promise((function(resolve) {
                        setTimeout((function() {
                            resolve();
                        }), dur);
                    })) ];
                }));
            }));
        }
        function resolveAfterSeconds(s) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    if (s <= 0) return [ 2, Promise.resolve() ];
                    return [ 2, new Promise((function(resolve) {
                        setTimeout((function() {
                            resolve();
                        }), 1e3 * s);
                    })) ];
                }));
            }));
        }
        function resolveAfterEventBubbled($ele, eventName) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(_a) {
                    return [ 2, new Promise((function(resolve) {
                        var listener = function(e) {
                            $ele.removeEventListener(eventName, listener);
                            resolve(e);
                        };
                        $ele.addEventListener(eventName, listener);
                    })) ];
                }));
            }));
        }
        function promiseResolvable() {
            var resolver;
            var resolved = false;
            var promise = new Promise((function(res) {
                if (resolved) res(); else resolver = res;
            }));
            var resolveFunc = function() {
                resolved = true;
                "function" === typeof resolver && resolver();
            };
            return [ promise, resolveFunc ];
        }
        var zombie = new Promise((function(_) {}));
        exports["default"] = {
            zombie,
            resolvable: promiseResolvable,
            resolveAfterEventBubbled,
            resolveAfterSeconds,
            resolveAfterDuration
        };
    },
    "../shared/browser/node_modules/@funnyecho/time/dist/index.js": (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Millisecond = 1;
        var Second = 1e3 * Millisecond;
        var Minute = 60 * Second;
        var Hour = 60 * Minute;
        var Day = 24 * Hour;
        var Week = 7 * Day;
        var Time = function() {
            function Time(v) {
                this.v = v;
            }
            Object.defineProperty(Time.prototype, "timestamp", {
                get: function() {
                    return this.v;
                },
                enumerable: false,
                configurable: true
            });
            Time.prototype.add = function(d) {
                return new Time(this.v + d);
            };
            Time.prototype.sub = function(d) {
                return new Time(this.v - d);
            };
            Time.prototype.duration = function(t) {
                return this.v - t.timestamp;
            };
            return Time;
        }();
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
        exports["default"] = {
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
    },
    "../shared/browser/node_modules/@payment/gateway-sdk/dist/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
        !function(e, t) {
            true ? t(exports) : 0;
        }(0, (function(e) {
            "use strict";
            var t = function(e, n) {
                return (t = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(e, t) {
                    e.__proto__ = t;
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(e, n);
            };
            function n(e, n) {
                function i() {
                    this.constructor = e;
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, 
                new i);
            }
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                }).apply(this, arguments);
            };
            function a(e, t, n, i) {
                return new (n || (n = Promise))((function(a, o) {
                    function l(e) {
                        try {
                            d(i.next(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function r(e) {
                        try {
                            d(i.throw(e));
                        } catch (e) {
                            o(e);
                        }
                    }
                    function d(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t);
                        }))).then(l, r);
                    }
                    d((i = i.apply(e, t || [])).next());
                }));
            }
            function o(e, t) {
                var n, i, a, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this;
                }), o;
                function r(o) {
                    return function(r) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (;l; ) try {
                                if (n = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 
                                0) : i.next) && !(a = a.call(i, o[1])).done) return a;
                                switch (i = 0, a && (o = [ 2 & o[0], a.value ]), o[0]) {
                                  case 0:
                                  case 1:
                                    a = o;
                                    break;

                                  case 4:
                                    return l.label++, {
                                        value: o[1],
                                        done: !1
                                    };

                                  case 5:
                                    l.label++, i = o[1], o = [ 0 ];
                                    continue;

                                  case 7:
                                    o = l.ops.pop(), l.trys.pop();
                                    continue;

                                  default:
                                    if (!(a = l.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        l = 0;
                                        continue;
                                    }
                                    if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                        l.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && l.label < a[1]) {
                                        l.label = a[1], a = o;
                                        break;
                                    }
                                    if (a && l.label < a[2]) {
                                        l.label = a[2], l.ops.push(o);
                                        break;
                                    }
                                    a[2] && l.ops.pop(), l.trys.pop();
                                    continue;
                                }
                                o = t.call(e, l);
                            } catch (e) {
                                o = [ 6, e ], i = 0;
                            } finally {
                                n = a = 0;
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            };
                        }([ o, r ]);
                    };
                }
            }
            const l = new Set([ "a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "canvas", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hkern", "iframe", "image", "line", "linearGradient", "listener", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidColor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern" ]);
            l.delete("a"), l.delete("audio"), l.delete("canvas"), l.delete("iframe"), l.delete("script"), 
            l.delete("video");
            const r = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, d = (e, t) => {
                for (const [n, i] of Object.entries(t)) n.startsWith("-") ? e.style.setProperty(n, i) : "number" != typeof i || r.test(n) ? e.style[n] = i : e.style[n] = i + "px";
            }, s = e => "string" == typeof e ? l.has(e) ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e) : (e => e === DocumentFragment)(e) ? document.createDocumentFragment() : e(e.defaultProps), u = (e, t, n) => {
                null != n && (/^xlink[AHRST]/.test(t) ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.replace("xlink", "xlink:").toLowerCase(), n) : e.setAttribute(t, n));
            }, c = (e, t) => {
                for (const n of t) n instanceof Node ? e.appendChild(n) : Array.isArray(n) ? c(e, n) : "boolean" != typeof n && null != n && e.appendChild(document.createTextNode(n));
            }, p = (e, t, ...n) => {
                var i;
                const a = s(e);
                if (c(a, n), a instanceof DocumentFragment || !t) return a;
                for (let [e, n] of Object.entries(t)) if ("htmlFor" === e && (e = "for"), "class" === e || "className" === e) {
                    const e = null !== (i = a.getAttribute("class")) && void 0 !== i ? i : "";
                    u(a, "class", (e + " " + String(n)).trim());
                } else if ("style" === e) d(a, n); else if (e.startsWith("on")) {
                    const t = e.slice(2).toLowerCase().replace(/^-/, "");
                    a.addEventListener(t, n);
                } else "dangerouslySetInnerHTML" === e && "__html" in n ? a.innerHTML = n.__html : "key" !== e && !1 !== n && u(a, e, !0 === n ? "" : n);
                return a;
            };
            var v = function() {
                function e() {}
                return e.prototype.renderToDom = function(e, t) {
                    t.length > 0 && document.querySelector("#" + t) ? (console.log("将挂载到 DOM id 为 " + t + " 的节点上"), 
                    document.querySelector("#" + t).appendChild(e)) : (console.log("domId 无效，将挂载到 body "), 
                    document.querySelector("body").append(e));
                }, e;
            }();
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
            function m(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports;
            }
            var y = m((function(e, t) {
                e.exports = function() {
                    var e = function() {}, t = {}, n = {}, i = {};
                    function a(e, t) {
                        if (e) {
                            var a = i[e];
                            if (n[e] = t, a) for (;a.length; ) a[0](e, t), a.splice(0, 1);
                        }
                    }
                    function o(t, n) {
                        t.call && (t = {
                            success: t
                        }), n.length ? (t.error || e)(n) : (t.success || e)(t);
                    }
                    function l(t, n, i, a) {
                        var o, r, d = document, s = i.async, u = (i.numRetries || 0) + 1, c = i.before || e, p = t.replace(/[\?|#].*$/, ""), v = t.replace(/^(css|img)!/, "");
                        a = a || 0, /(^css!|\.css$)/.test(p) ? ((r = d.createElement("link")).rel = "stylesheet", 
                        r.href = v, (o = "hideFocus" in r) && r.relList && (o = 0, r.rel = "preload", r.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (r = d.createElement("img")).src = v : ((r = d.createElement("script")).src = t, 
                        r.async = void 0 === s || s), r.onload = r.onerror = r.onbeforeload = function(e) {
                            var d = e.type[0];
                            if (o) try {
                                r.sheet.cssText.length || (d = "e");
                            } catch (e) {
                                18 != e.code && (d = "e");
                            }
                            if ("e" == d) {
                                if ((a += 1) < u) return l(t, n, i, a);
                            } else if ("preload" == r.rel && "style" == r.as) return r.rel = "stylesheet";
                            n(t, d, e.defaultPrevented);
                        }, !1 !== c(t, r) && d.head.appendChild(r);
                    }
                    function r(e, n, i) {
                        var r, d;
                        if (n && n.trim && (r = n), d = (r ? i : n) || {}, r) {
                            if (r in t) throw "LoadJS";
                            t[r] = !0;
                        }
                        function s(t, n) {
                            !function(e, t, n) {
                                var i, a, o = (e = e.push ? e : [ e ]).length, r = o, d = [];
                                for (i = function(e, n, i) {
                                    if ("e" == n && d.push(e), "b" == n) {
                                        if (!i) return;
                                        d.push(e);
                                    }
                                    --o || t(d);
                                }, a = 0; a < r; a++) l(e[a], i, n);
                            }(e, (function(e) {
                                o(d, e), t && o({
                                    success: t,
                                    error: n
                                }, e), a(r, e);
                            }), d);
                        }
                        if (d.returnPromise) return new Promise(s);
                        s();
                    }
                    return r.ready = function(e, t) {
                        return function(e, t) {
                            e = e.push ? e : [ e ];
                            var a, o, l, r = [], d = e.length, s = d;
                            for (a = function(e, n) {
                                n.length && r.push(e), --s || t(r);
                            }; d--; ) o = e[d], (l = n[o]) ? a(o, l) : (i[o] = i[o] || []).push(a);
                        }(e, (function(e) {
                            o(t, e);
                        })), r;
                    }, r.done = function(e) {
                        a(e, []);
                    }, r.reset = function() {
                        t = {}, n = {}, i = {};
                    }, r.isDefined = function(e) {
                        return e in t;
                    }, r;
                }();
            })), h = function(e) {
                function t(t, n) {
                    var i, l, r = e.call(this) || this;
                    console.log("publicKey", t, "initialData", n), r.publicKey = t, r.initialData = n;
                    var d = (new Date).getTime();
                    r.renderHtml(), y([ "https://2pay-js.2checkout.com/v1/2pay.js" ], (function() {
                        var e, i, l, d, s, u;
                        console.log("--------2checkout.js loaded-------"), r.jsPaymentClient = new TwoPayClient(t.key), 
                        n.language && r.jsPaymentClient.setup.setLanguage(n.language), r.component = r.jsPaymentClient.components.create("card", (e = n.styleOption, 
                        i = null == e ? void 0 : e.commonStyle, l = null == e ? void 0 : e.componentStyle, 
                        d = null == l ? void 0 : l.cardInputStyle, s = null == l ? void 0 : l.expirationInputStyle, 
                        u = null == l ? void 0 : l.cvvInputStyle, {
                            margin: 0,
                            fontFamily: (null == i ? void 0 : i.fontFamily) || "Helvetica, sans-serif",
                            fontSize: (null == i ? void 0 : i.fontSize) || "1rem",
                            fontWeight: (null == i ? void 0 : i.fontWeight) || "400",
                            color: (null == i ? void 0 : i.color) || "#212529",
                            textAlign: (null == i ? void 0 : i.textAlign) || "left",
                            backgroundColor: (null == i ? void 0 : i.backgroundColor) || "#ffffff",
                            "*": {
                                boxSizing: (null == i ? void 0 : i.boxSizing) || "border-box"
                            },
                            ".card-number .control-label": (null == d ? void 0 : d.labelStyle) || {},
                            ".card-number .input-wrapper": (null == d ? void 0 : d.inputWrapperStyle) || {},
                            ".card-number .form-control": (null == d ? void 0 : d.inputStyle) || {},
                            ".card-number .validation-message": (null == d ? void 0 : d.messageStyle) || {},
                            ".card-expiration-date .control-label": (null == s ? void 0 : s.labelStyle) || {},
                            ".card-expiration-date .input-wrapper": (null == s ? void 0 : s.inputWrapperStyle) || {},
                            ".card-expiration-date .form-control": (null == s ? void 0 : s.inputStyle) || {},
                            ".card-expiration-date .validation-message": (null == s ? void 0 : s.messageStyle) || {},
                            ".card-security-code .control-label": (null == u ? void 0 : u.labelStyle) || {},
                            ".card-security-code .input-wrapper": (null == u ? void 0 : u.inputWrapperStyle) || {},
                            ".card-security-code .form-control": (null == u ? void 0 : u.inputStyle) || {},
                            ".card-security-code .validation-message": (null == u ? void 0 : u.messageStyle) || {},
                            ".no-gutters": {
                                marginRight: 0,
                                marginLeft: 0
                            },
                            ".row": {
                                display: "flex",
                                flexWrap: "wrap"
                            },
                            ".col": {
                                flexBasis: "0",
                                flexGrow: "1",
                                maxWidth: "100%",
                                padding: "0",
                                position: "relative",
                                width: "100%"
                            },
                            div: {
                                display: "block"
                            },
                            ".field-container": {
                                paddingBottom: "14px"
                            },
                            ".field-wrapper": {
                                paddingRight: "25px"
                            },
                            ".input-wrapper": {
                                position: "relative"
                            },
                            label: {
                                display: "inline-block",
                                marginBottom: "9px",
                                color: "#313131",
                                fontWeight: "300",
                                fontSize: "14px",
                                lineHeight: "17px"
                            },
                            input: {
                                outline: "none",
                                position: "absolute",
                                overflow: "visible",
                                margin: 0,
                                fontFamily: "inherit",
                                display: "block",
                                width: "100%",
                                height: "42px",
                                padding: "10px 12px",
                                fontSize: "18px",
                                fontWeight: "400",
                                lineHeight: "22px",
                                color: "#313131",
                                backgroundColor: "#fff",
                                backgroundClip: "padding-box",
                                border: "1px solid #CBCBCB",
                                borderRadius: "3px",
                                transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                                ontline: "0"
                            },
                            ".form-control": {
                                position: "relative"
                            },
                            "input:focus": {
                                border: "1px solid #5D5D5D",
                                backgroundColor: "#FFFDF2"
                            },
                            ".is-error input": {
                                border: "1px solid #D9534F"
                            },
                            ".is-error input:focus": {
                                backgroundColor: "#D9534F0B"
                            },
                            ".is-valid input": {
                                border: "1px solid #1BB43F"
                            },
                            ".is-valid input:focus": {
                                backgroundColor: "#1BB43F0B"
                            },
                            ".validation-message": {
                                color: "#D9534F",
                                fontSize: "10px",
                                fontStyle: "italic",
                                marginTop: "6px",
                                marginBottom: "-5px",
                                display: "block",
                                lineHeight: "1"
                            },
                            ".card-expiration-date": {
                                paddingRight: ".5rem"
                            },
                            ".is-empty input": {
                                color: "#EBEBEB"
                            },
                            ".lock-icon": {
                                top: "calc(50% - 7px)",
                                right: "10px"
                            },
                            ".valid-icon": {
                                top: "calc(50% - 8px)",
                                right: "-25px"
                            },
                            ".error-icon": {
                                top: "calc(50% - 8px)",
                                right: " -25px"
                            },
                            ".card-icon": {
                                top: "calc(50% - 10px)",
                                left: "10px",
                                display: "none"
                            },
                            ".is-empty .card-icon": {
                                display: "block"
                            },
                            ".is-focused .card-icon": {
                                display: "none"
                            },
                            ".card-type-icon": {
                                right: "30px",
                                display: "block"
                            },
                            ".card-type-icon.visa": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.mastercard": {
                                top: "calc(50% - 14.5px)"
                            },
                            ".card-type-icon.amex": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.discover": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.jcb": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.dankort": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.cartebleue": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.diners": {
                                top: "calc(50% - 14px)"
                            },
                            ".card-type-icon.elo": {
                                top: "calc(50% - 14px)"
                            }
                        })), r.component.mount("#card-element"), r.initialData.btnText && document.getElementById("payment-form").addEventListener("submit", (function(e) {
                            return a(r, void 0, void 0, (function() {
                                var t, n, i, a;
                                return o(this, (function(o) {
                                    switch (o.label) {
                                      case 0:
                                        return e.preventDefault(), t = (null === (a = null === (i = this.initialData) || void 0 === i ? void 0 : i.fieldData) || void 0 === a ? void 0 : a.userName) || document.querySelector("#name").value, 
                                        [ 4, this.generateToken(this.jsPaymentClient, this.component, t) ];

                                      case 1:
                                        return n = o.sent(), this.initialData.createToken && this.initialData.createToken(n), 
                                        [ 2 ];
                                    }
                                }));
                            }));
                        }));
                    }));
                    var s = (new Date).getTime() - d;
                    return null === (l = null === (i = r.initialData) || void 0 === i ? void 0 : i.reportSDKLoading) || void 0 === l || l.call(i, {
                        time: s
                    }), r;
                }
                return n(t, e), t.prototype.generateToken = function(e, t, n) {
                    return a(this, void 0, void 0, (function() {
                        var i, a;
                        return o(this, (function(o) {
                            switch (o.label) {
                              case 0:
                                this.nameOnblur(), i = {
                                    name: n
                                }, o.label = 1;

                              case 1:
                                return o.trys.push([ 1, 3, , 4 ]), [ 4, e.tokens.generate(t, i) ];

                              case 2:
                                return [ 2, o.sent() ];

                              case 3:
                                return a = o.sent(), [ 2, {
                                    error: a.toString().trim().split("\n")[0]
                                } ];

                              case 4:
                                return [ 2 ];
                            }
                        }));
                    }));
                }, t.prototype.getToken = function(e) {
                    return a(this, void 0, void 0, (function() {
                        var t;
                        return o(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return t = e || document.querySelector("#name").value, [ 4, this.generateToken(this.jsPaymentClient, this.component, t) ];

                              case 1:
                                return [ 2, n.sent() ];
                            }
                        }));
                    }));
                }, t.prototype.nameOnblur = function() {
                    var e = document.querySelector("#name-field-wrapper"), t = document.querySelector("#name").value, n = document.querySelector("#name-message");
                    t ? (n.style.display = "none", e.setAttribute("class", "name-field-wrapper is-valid")) : (n.style.display = "inline-block", 
                    e.setAttribute("class", "name-field-wrapper is-error"));
                }, t.prototype.renderHtml = function() {
                    var e, t, n, a, o, l, r, d, s = function(e) {
                        var t, n, a, o, l, r, d, s, u, c;
                        return {
                            common: (null == e ? void 0 : e.commonStyle) || {},
                            form: i({
                                fontFamily: "Helvetica, sans-serif"
                            }, (null === (t = null == e ? void 0 : e.componentStyle) || void 0 === t ? void 0 : t.formStyle) || {}),
                            name: {
                                wrapper: i({
                                    paddingBottom: "14px",
                                    paddingRight: "25px"
                                }, (null === (a = null === (n = null == e ? void 0 : e.componentStyle) || void 0 === n ? void 0 : n.nameInputStyle) || void 0 === a ? void 0 : a.inputWrapperStyle) || {}),
                                label: i({
                                    display: "inline-block",
                                    marginBottom: "9px",
                                    color: "#313131",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                    lineHeight: "17px"
                                }, (null === (l = null === (o = null == e ? void 0 : e.componentStyle) || void 0 === o ? void 0 : o.nameInputStyle) || void 0 === l ? void 0 : l.labelStyle) || {}),
                                input: i({
                                    padding: "10px 12px",
                                    outline: "none",
                                    margin: 0,
                                    fontFamily: "inherit",
                                    display: "block",
                                    width: "100%",
                                    height: "42px",
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    lineHeight: "22px",
                                    color: "#313131",
                                    backgroundClip: "padding-box",
                                    borderRadius: "3px",
                                    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                                    ontline: "0"
                                }, (null === (d = null === (r = null == e ? void 0 : e.componentStyle) || void 0 === r ? void 0 : r.nameInputStyle) || void 0 === d ? void 0 : d.inputStyle) || {}),
                                message: i({
                                    display: "none",
                                    color: "#D9534F",
                                    fontSize: "10px",
                                    fontStyle: "italic",
                                    marginTop: "6px",
                                    marginBottom: "-5px",
                                    lineHeight: "1"
                                }, (null === (u = null === (s = null == e ? void 0 : e.componentStyle) || void 0 === s ? void 0 : s.nameInputStyle) || void 0 === u ? void 0 : u.messageStyle) || {})
                            },
                            submit: {
                                wrapper: {
                                    paddingRight: "25px",
                                    width: "100%",
                                    textAlign: "center"
                                },
                                button: i({
                                    color: "#fff",
                                    backgroundColor: "#007bff",
                                    borderColor: "#007bff",
                                    display: "inline-block",
                                    fontWeight: "400",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                    border: "1px solid transparent",
                                    padding: ".375rem .75rem",
                                    fontSize: "1rem",
                                    lineHeight: "1.5",
                                    borderRadius: ".25rem"
                                }, (null === (c = null == e ? void 0 : e.componentStyle) || void 0 === c ? void 0 : c.btnStyle) || {})
                            }
                        };
                    }(null === (e = this.initialData) || void 0 === e ? void 0 : e.styleOption), u = {
                        nameOnblur: this.nameOnblur,
                        userNamePlaceholder: null === (n = null === (t = this.initialData) || void 0 === t ? void 0 : t.placeholder) || void 0 === n ? void 0 : n.userNamePlaceholder,
                        nameInputText: null === (o = null === (a = this.initialData) || void 0 === a ? void 0 : a.label) || void 0 === o ? void 0 : o.userNameLabel,
                        submitBtnText: null === (l = this.initialData) || void 0 === l ? void 0 : l.btnText,
                        nameMessageText: null === (d = null === (r = this.initialData) || void 0 === r ? void 0 : r.errorTips) || void 0 === d ? void 0 : d.userNameErrorTips,
                        style: s
                    };
                    this.renderToDom(function(e) {
                        return p("div", {
                            className: "two-checkout",
                            style: e.style.common
                        }, p("div", {
                            dangerouslySetInnerHTML: {
                                __html: "<style>\n        .two-checkout * {\n          box-sizing: border-box;\n        }\n        .name-input {\n          border: 1px solid #CBCBCB;\n          background-color: #fff,\n        }\n        input:focus {\n          border          : 1px solid #5D5D5D;\n          background-color: #FFFDF2;\n        }\n        \n        .is-error input {\n          border: 1px solid #D9534F;\n        }\n        \n        .is-error input:focus {\n          background-color: #D9534F0B;\n        }\n        \n        .is-valid input {\n          border: 1px solid #1BB43F;\n        }\n        \n        .is-valid input:focus {\n          background-color: #1BB43F0B;\n        }\n                </style>"
                            }
                        }), p("form", {
                            type: "post",
                            id: "payment-form",
                            style: e.style.form
                        }, p("div", {
                            className: "twocheckout-group"
                        }, (null == e ? void 0 : e.nameInputText) ? p("div", {
                            id: "name-field-wrapper",
                            class: "name-field-wrapper",
                            style: e.style.name.wrapper
                        }, p("label", {
                            for: "name",
                            class: "name-label",
                            style: e.style.name.label
                        }, null == e ? void 0 : e.nameInputText), p("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            class: "name-input",
                            style: e.style.name.input,
                            oninput: function(e) {
                                e.target.value = e.target.value.replace(/[1-9]/g, "");
                            },
                            placeholder: "" + ((null == e ? void 0 : e.userNamePlaceholder) || ""),
                            onblur: function() {
                                e.nameOnblur();
                            }
                        }), p("span", {
                            id: "name-message",
                            style: e.style.name.message
                        }, e.nameMessageText || "Card holder name is empty.")) : null, p("div", {
                            id: "card-element",
                            className: "card-element"
                        }), (null == e ? void 0 : e.submitBtnText) ? p("div", {
                            style: e.style.submit.wrapper
                        }, p("button", {
                            className: "twocheckout-btn",
                            style: e.style.submit.button,
                            type: "submit"
                        }, null == e ? void 0 : e.submitBtnText)) : null)));
                    }(u), this.initialData.domId);
                }, t;
            }(v);
            var b, f = function(e) {
                null == e || e.commonStyle;
                var t = null == e ? void 0 : e.componentStyle, n = null == t ? void 0 : t.formStyle, a = null == t ? void 0 : t.nameInputStyle, o = null == t ? void 0 : t.cardInputStyle, l = null == t ? void 0 : t.expirationInputStyle, r = null == t ? void 0 : t.cvvInputStyle, d = null == t ? void 0 : t.btnStyle;
                return {
                    ebanx_payment_form: i({
                        width: "100%"
                    }, n || {}),
                    ebanx_nameInputStyle_inputWrapperStyle: i({
                        width: "100%",
                        margin: "10px 0"
                    }, (null == a ? void 0 : a.inputWrapperStyle) || {}),
                    ebanx_nameInputStyle_labelStyle: i({
                        display: "block",
                        fontWeight: 400,
                        fontSize: "15px",
                        marginBottom: "8px"
                    }, (null == a ? void 0 : a.labelStyle) || {}),
                    ebanx_nameInputStyle_inputStyle: i({
                        width: "100%",
                        padding: "18px 15px",
                        borderRadius: "6px",
                        color: "#000000",
                        background: "#F3F3F3",
                        border: "0px",
                        fontSize: "16px",
                        outline: "none"
                    }, (null == a ? void 0 : a.inputStyle) || {}),
                    ebanx_nameInputStyle_messageStyle: {},
                    ebanx_cardInputStyle_inputWrapperStyle: i({
                        width: "100%",
                        margin: "10px 0"
                    }, (null == o ? void 0 : o.inputWrapperStyle) || {}),
                    ebanx_cardInputStyle_labelStyle: i({
                        display: "block",
                        fontWeight: 400,
                        fontSize: "15px",
                        marginBottom: "8px"
                    }, (null == o ? void 0 : o.labelStyle) || {}),
                    ebanx_cardInputStyle_inputStyle: i({
                        width: "100%",
                        padding: "18px 15px",
                        borderRadius: "6px",
                        color: "#000000",
                        background: "#F3F3F3",
                        border: "0px",
                        fontSize: "16px",
                        outline: "none"
                    }, (null == o ? void 0 : o.inputStyle) || {}),
                    ebanx_cardInputStyle_messageStyle: {},
                    ebanx_flex_style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    },
                    ebanx_expirationInputStyle_inputWrapperStyle: i({
                        width: "48%",
                        margin: "10px 0"
                    }, (null == l ? void 0 : l.inputWrapperStyle) || {}),
                    ebanx_expirationInputStyle_labelStyle: i({
                        display: "block",
                        fontWeight: 400,
                        fontSize: "15px",
                        marginBottom: "8px"
                    }, (null == l ? void 0 : l.labelStyle) || {}),
                    ebanx_expirationInputStyle_inputStyle: i({
                        width: "100%",
                        padding: "18px 15px",
                        borderRadius: "6px",
                        color: "#000000",
                        background: "#F3F3F3",
                        border: "0px",
                        fontSize: "16px",
                        outline: "none"
                    }, (null == l ? void 0 : l.inputStyle) || {}),
                    ebanx_expirationInputStyle_messageStyle: {},
                    ebanx_cvvInputStyle_inputWrapperStyle: i({
                        width: "48%",
                        margin: "10px 0"
                    }, (null == r ? void 0 : r.inputWrapperStyle) || {}),
                    ebanx_cvvInputStyle_labelStyle: i({
                        display: "block",
                        fontWeight: 400,
                        fontSize: "15px",
                        marginBottom: "8px"
                    }, (null == r ? void 0 : r.labelStyle) || {}),
                    ebanx_cvvInputStyle_inputStyle: i({
                        width: "100%",
                        padding: "18px 15px",
                        borderRadius: "6px",
                        color: "#000000",
                        background: "#F3F3F3",
                        border: "0px",
                        fontSize: "16px",
                        outline: "none"
                    }, (null == r ? void 0 : r.inputStyle) || {}),
                    ebanx_cvvInputStyle_messageStyle: {},
                    ebanx_error_tips: i(i(i(i({
                        marginTop: "-10px",
                        lineHeight: "18px",
                        minHeight: "20px",
                        color: "red"
                    }, (null == a ? void 0 : a.messageStyle) || {}), (null == o ? void 0 : o.messageStyle) || {}), (null == l ? void 0 : l.messageStyle) || {}), (null == r ? void 0 : r.messageStyle) || {}),
                    ebanx_submit_btn: i({
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        color: "#ffffff",
                        padding: "15px",
                        fontSize: "16px",
                        opacity: 1,
                        background: (null == d ? void 0 : d.disableBackground) || (null == d ? void 0 : d.background) || "#dddddd",
                        outline: "none",
                        border: "0px",
                        borderRadius: "6px"
                    }, d)
                };
            }, g = function(e) {
                function t(t, n) {
                    var i, a, o = e.call(this) || this;
                    return o.publicKey = t, o.initialData = n, o.userNameErrorTips = "", o.cardNumberErrorTips = "", 
                    o.expirationErrorTips = "", o.cvvErrorTips = "", o.userName = "", o.cardNumber = "", 
                    o.expiration = "", o.cvv = "", o.loadEBANXJS(), o.renderHtml(), (null === (i = o.initialData) || void 0 === i ? void 0 : i.isWith3DS) && o.checkoutFieldData((null === (a = o.initialData) || void 0 === a ? void 0 : a.fieldData) || {}), 
                    o;
                }
                return n(t, e), t.prototype.loadEBANXJS = function() {
                    var e, t, n = this, i = (new Date).getTime();
                    y([ "https://js.ebanx.com/assets/songbird/songbird-" + (null !== (t = null === (e = this.initialData) || void 0 === e ? void 0 : e.env) && void 0 !== t ? t : "dev") + ".js", "https://js.ebanx.com/ebanx-libjs-latest.min.js" ], (function() {
                        var e, t, a, o, l;
                        console.log("success", EBANX), EBANX.config.setMode("prod" === (null === (e = n.initialData) || void 0 === e ? void 0 : e.env) ? "production" : "test"), 
                        EBANX.config.setPublishableKey(n.publicKey.key), EBANX.config.setCountry((null === (a = null === (t = n.initialData) || void 0 === t ? void 0 : t.country) || void 0 === a ? void 0 : a.toLowerCase()) || "br");
                        var r = (new Date).getTime() - i;
                        null === (l = null === (o = n.initialData) || void 0 === o ? void 0 : o.reportSDKLoading) || void 0 === l || l.call(o, {
                            time: r
                        });
                    }));
                }, t.prototype.renderHtml = function() {
                    var e, t, n, i, a, o, l = f(null === (e = this.initialData) || void 0 === e ? void 0 : e.styleOption);
                    this.renderToDom(function(e) {
                        var t, n, i, a, o, l, r, d, s, u, c, v, m, y, h, b, f, g, x, S, _, D, k, w, N, T, C, I, E, P, A, B;
                        return p("div", {
                            className: "ebanx_cover"
                        }, p("div", {
                            dangerouslySetInnerHTML: {
                                __html: "<style>\n        .ebanx_cover * {\n          box-sizing: border-box !important;\n          margin: 0;\n          padding: 0;\n        }\n        .ebanx_cover input::placeholder{\n          color: #999999 !important;\n        }\n        </style>"
                            }
                        }), p("div", {
                            className: "ebanx_payment_form",
                            style: e.styleOption.ebanx_payment_form
                        }, !e.userName && p("div", {
                            calssName: "ebanx_nameInputStyle_inputWrapperStyle",
                            style: e.styleOption.ebanx_nameInputStyle_inputWrapperStyle
                        }, (null === (t = null == e ? void 0 : e.label) || void 0 === t ? void 0 : t.userNameLabel) && p("label", {
                            for: "ebanx_user_name",
                            className: "ebanx_nameInputStyle_labelStyle",
                            style: null === (n = e.styleOption) || void 0 === n ? void 0 : n.ebanx_nameInputStyle_labelStyle
                        }, null !== (a = null === (i = null == e ? void 0 : e.label) || void 0 === i ? void 0 : i.userNameLabel) && void 0 !== a ? a : "User Name"), p("input", {
                            placeholder: "" + (null !== (l = null === (o = null == e ? void 0 : e.placeholder) || void 0 === o ? void 0 : o.userNamePlaceholder) && void 0 !== l ? l : "User Name"),
                            type: "text",
                            id: "ebanx_user_name",
                            className: "ebanx_nameInputStyle_inputStyle",
                            style: null === (r = e.styleOption) || void 0 === r ? void 0 : r.ebanx_nameInputStyle_inputStyle,
                            onkeyup: function(t) {
                                e.changeUserName(t, "onkeyup");
                            },
                            onblur: function(t) {
                                e.changeUserName(t, "onblur");
                            }
                        })), p("div", {
                            className: "ebanx_cardInputStyle_inputWrapperStyle",
                            style: e.styleOption.ebanx_cardInputStyle_inputWrapperStyle
                        }, (null === (d = null == e ? void 0 : e.label) || void 0 === d ? void 0 : d.cardNumberLabel) && p("label", {
                            for: "ebanx_card_number",
                            className: "ebanx_cardInputStyle_labelStyle",
                            style: null === (s = e.styleOption) || void 0 === s ? void 0 : s.ebanx_cardInputStyle_labelStyle
                        }, null !== (c = null === (u = null == e ? void 0 : e.label) || void 0 === u ? void 0 : u.cardNumberLabel) && void 0 !== c ? c : "Card Number"), p("div", null, p("input", {
                            placeholder: "" + (null !== (m = null === (v = null == e ? void 0 : e.placeholder) || void 0 === v ? void 0 : v.cardNumberPlaceholder) && void 0 !== m ? m : "Card Number"),
                            type: "text",
                            maxlength: "23",
                            id: "ebanx_card_number",
                            className: "ebanx_cardInputStyle_inputStyle",
                            style: null === (y = e.styleOption) || void 0 === y ? void 0 : y.ebanx_cardInputStyle_inputStyle,
                            oninput: function(e) {
                                var t, n, i, a;
                                e.target.value = null === (a = null === (i = null === (n = null === (t = e.target.value) || void 0 === t ? void 0 : t.replace(/\D/g, "")) || void 0 === n ? void 0 : n.replace(/(\d{4})/g, "$1 ")) || void 0 === i ? void 0 : i.trim()) || void 0 === a ? void 0 : a.slice(0, 23);
                            },
                            onkeyup: function(t) {
                                var n, i, a, o;
                                t.target.value = null === (o = null === (a = null === (i = null === (n = t.target.value) || void 0 === n ? void 0 : n.replace(/\D/g, "")) || void 0 === i ? void 0 : i.replace(/(\d{4})/g, "$1 ")) || void 0 === a ? void 0 : a.trim()) || void 0 === o ? void 0 : o.slice(0, 23), 
                                e.changeCardNumber(t, "onkeyup");
                            },
                            onblur: function(t) {
                                e.changeCardNumber(t, "onblur");
                            }
                        }))), p("div", {
                            className: "ebanx_flex_style",
                            style: e.styleOption.ebanx_flex_style
                        }, p("div", {
                            className: "ebanx_expirationInputStyle_inputWrapperStyle",
                            style: e.styleOption.ebanx_expirationInputStyle_inputWrapperStyle
                        }, (null === (h = null == e ? void 0 : e.label) || void 0 === h ? void 0 : h.expirationLabel) && p("label", {
                            for: "ebanx_card_due_date",
                            className: "ebanx_expirationInputStyle_labelStyle",
                            style: null === (b = e.styleOption) || void 0 === b ? void 0 : b.ebanx_expirationInputStyle_labelStyle
                        }, null !== (g = null === (f = null == e ? void 0 : e.label) || void 0 === f ? void 0 : f.expirationLabel) && void 0 !== g ? g : "Card Due Date"), p("input", {
                            placeholder: (null !== (S = null === (x = null == e ? void 0 : e.placeholder) || void 0 === x ? void 0 : x.expiryMonthPlaceholder) && void 0 !== S ? S : "MM") + "/" + (null !== (D = null === (_ = null == e ? void 0 : e.placeholder) || void 0 === _ ? void 0 : _.expiryYearPlaceholder) && void 0 !== D ? D : "YYYY"),
                            type: "text",
                            id: "ebanx_card_due_date",
                            className: "ebanx_expirationInputStyle_inputStyle",
                            style: null === (k = e.styleOption) || void 0 === k ? void 0 : k.ebanx_expirationInputStyle_inputStyle,
                            onblur: function(t) {
                                e.changeExpiration(t, "onblur");
                            },
                            onkeyup: function(t) {
                                var n, i, a;
                                t.target.value = null === (a = null === (i = null === (n = t.target.value) || void 0 === n ? void 0 : n.replace(/\D/g, "")) || void 0 === i ? void 0 : i.slice(0, 6)) || void 0 === a ? void 0 : a.replace(/^(\d{2})\/?(\d{0,})$/, (function(e, t, n) {
                                    return "" + t + (n ? "/" + n : n);
                                })), e.changeExpiration(t, "onkeyup");
                            }
                        })), p("div", {
                            className: "ebanx_cvvInputStyle_inputWrapperStyle",
                            style: e.styleOption.ebanx_cvvInputStyle_inputWrapperStyle
                        }, (null === (w = null == e ? void 0 : e.label) || void 0 === w ? void 0 : w.cvvLabel) && p("label", {
                            for: "ebanx_card_cvv",
                            className: "ebanx_cvvInputStyle_labelStyle",
                            style: null === (N = e.styleOption) || void 0 === N ? void 0 : N.ebanx_cvvInputStyle_labelStyle
                        }, null !== (C = null === (T = null == e ? void 0 : e.label) || void 0 === T ? void 0 : T.cvvLabel) && void 0 !== C ? C : "Card Cvv"), p("input", {
                            placeholder: "" + (null !== (E = null === (I = null == e ? void 0 : e.placeholder) || void 0 === I ? void 0 : I.cvvPlaceholder) && void 0 !== E ? E : "Cvv"),
                            type: "text",
                            maxlength: "4",
                            id: "ebanx_card_cvv",
                            className: "ebanx_cvvInputStyle_inputStyle",
                            style: null === (P = e.styleOption) || void 0 === P ? void 0 : P.ebanx_cvvInputStyle_inputStyle,
                            oninput: function(e) {
                                var t, n;
                                e.target.value = null === (n = null === (t = e.target.value) || void 0 === t ? void 0 : t.replace(/\D/g, "")) || void 0 === n ? void 0 : n.slice(0, 4);
                            },
                            onkeyup: function(t) {
                                var n, i;
                                t.target.value = null === (i = null === (n = t.target.value) || void 0 === n ? void 0 : n.replace(/\D/g, "")) || void 0 === i ? void 0 : i.slice(0, 4), 
                                e.changeCVV(t, "onkeyup");
                            },
                            onblur: function(t) {
                                e.changeCVV(t, "onblur");
                            }
                        }))), p("div", {
                            id: "ebanx_error_tips",
                            className: "ebanx_error_tips",
                            style: e.styleOption.ebanx_error_tips
                        }), (null == e ? void 0 : e.btnText) && p("button", {
                            type: "submit",
                            id: "ebanx_submit_btn",
                            className: "ebanx_submit_btn",
                            style: null === (A = e.styleOption) || void 0 === A ? void 0 : A.ebanx_submit_btn,
                            disabled: !0,
                            onClick: function(t) {
                                null == e || e.submit(t);
                            }
                        }, null !== (B = null == e ? void 0 : e.btnText) && void 0 !== B ? B : "OK")));
                    }({
                        submit: this.submit.bind(this),
                        changeUserName: this.changeUserName.bind(this),
                        changeCardNumber: this.changeCardNumber.bind(this),
                        changeExpiration: this.changeExpiration.bind(this),
                        changeCVV: this.changeCVV.bind(this),
                        label: null === (t = this.initialData) || void 0 === t ? void 0 : t.label,
                        placeholder: null === (n = this.initialData) || void 0 === n ? void 0 : n.placeholder,
                        btnText: null === (i = this.initialData) || void 0 === i ? void 0 : i.btnText,
                        styleOption: l,
                        userName: null === (o = null === (a = this.initialData) || void 0 === a ? void 0 : a.fieldData) || void 0 === o ? void 0 : o.userName
                    }), this.initialData.domId);
                }, t.prototype.fieldOnChange = function(e, t) {
                    var n, i, a, o, l, r;
                    e.message || (this.userNameErrorTips && !(null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.fieldData) || void 0 === i ? void 0 : i.userName) && (e.message = this.userNameErrorTips, 
                    e.param = "username"), this.cardNumberErrorTips && (e.message = this.cardNumberErrorTips, 
                    e.param = "cardnumber"), this.expirationErrorTips && (e.message = this.expirationErrorTips, 
                    e.param = "expiration"), this.cvvErrorTips && (e.message = this.cvvErrorTips, e.param = "cvv")), 
                    "onblur" !== t && e.message || (document.getElementById("ebanx_error_tips").innerText = e.message), 
                    "onblur" === t && (null === (o = null === (a = this.initialData) || void 0 === a ? void 0 : a.fieldOnBlur) || void 0 === o || o.call(a, e)), 
                    "onkeyup" === t && (null === (r = null === (l = this.initialData) || void 0 === l ? void 0 : l.fieldOnChange) || void 0 === r || r.call(l, e)), 
                    this.fieldComplete();
                }, t.prototype.fieldComplete = function() {
                    var e, t, n, i, a, o, l, r, d, s, u, c, p = document.getElementById("ebanx_submit_btn");
                    ((null === (t = null === (e = this.initialData) || void 0 === e ? void 0 : e.fieldData) || void 0 === t ? void 0 : t.userName) || !this.userNameErrorTips && this.userName) && !this.cardNumberErrorTips && !this.expirationErrorTips && !this.cvvErrorTips && this.cardNumber && this.expiration && this.cvv ? (console.log("表单填写完成"), 
                    p.removeAttribute("disabled"), p.style.background = (null === (o = null === (a = null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.styleOption) || void 0 === i ? void 0 : i.componentStyle) || void 0 === a ? void 0 : a.btnStyle) || void 0 === o ? void 0 : o.normalBackground) || "#ffc102", 
                    null === (r = null === (l = this.initialData) || void 0 === l ? void 0 : l.fieldComplete) || void 0 === r || r.call(l, {
                        userName: this.userName,
                        cardNumber: this.cardNumber,
                        expiration: this.expiration,
                        cvv: this.cvv
                    })) : (console.log("表单没填写完成"), p.setAttribute("disabled", "disabled"), p.style.background = (null === (c = null === (u = null === (s = null === (d = this.initialData) || void 0 === d ? void 0 : d.styleOption) || void 0 === s ? void 0 : s.componentStyle) || void 0 === u ? void 0 : u.btnStyle) || void 0 === c ? void 0 : c.disableBackground) || "#dddddd");
                }, t.prototype.changeUserName = function(e, t) {
                    var n, i, a;
                    this.userName = e.target.value, a = this.userName, /^[\s\S]{2,50}$/.test(a) ? this.userNameErrorTips = "" : this.userNameErrorTips = (null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.errorTips) || void 0 === i ? void 0 : i.userNameErrorTips) || "The username is incorrect.", 
                    this.fieldOnChange({
                        message: this.userNameErrorTips,
                        param: "username"
                    }, t);
                }, t.prototype.changeCardNumber = function(e, t, n) {
                    var i, l;
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(a) {
                            return this.cardNumber = e.target.value, n && this.cardNumber.length !== n || (!function(e) {
                                var t = (e + "").replace(/[\D]/g, "");
                                if (!/^\d{12,19}$/.test(t)) return !1;
                                for (var n = t.split("").reverse(), i = parseInt(n.shift(), 10), a = n.length, o = a, l = 0; o > 0; o--) {
                                    var r = a - o, d = parseInt(n[r], 10), s = d;
                                    if (r % 2 == 0) {
                                        var u = 2 * d;
                                        switch (u) {
                                          case 10:
                                            s = 1;
                                            break;

                                          case 12:
                                            s = 3;
                                            break;

                                          case 14:
                                            s = 5;
                                            break;

                                          case 16:
                                            s = 7;
                                            break;

                                          case 18:
                                            s = 9;
                                            break;

                                          default:
                                            s = u;
                                        }
                                    }
                                    l += s;
                                }
                                return parseInt((9 * l + "").replace(/\d+(\d$)/, "$1"), 10) === i;
                            }(this.cardNumber) ? this.cardNumberErrorTips = (null === (l = null === (i = this.initialData) || void 0 === i ? void 0 : i.errorTips) || void 0 === l ? void 0 : l.cardNumberErrorTips) || "The card number is incorrect." : this.cardNumberErrorTips = "", 
                            this.fieldOnChange({
                                message: this.cardNumberErrorTips,
                                param: "cardnumber"
                            }, t)), [ 2 ];
                        }));
                    }));
                }, t.prototype.changeExpiration = function(e, t) {
                    var n, i, a, o, l, r, d, s, u;
                    this.expiration = e.target.value, a = this.expiration, o = new Date, l = o.getFullYear(), 
                    r = o.getMonth() + 1, d = a.split("/"), s = Number(d[1]), u = Number(d[0]), this.expirationErrorTips = u < 1 || u > 12 || !(l < s || l === s && r <= u) ? (null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.errorTips) || void 0 === i ? void 0 : i.expirationErrorTips) || "The card’s expiration date is incorrect." : "", 
                    this.fieldOnChange({
                        message: this.expirationErrorTips,
                        param: "expiration"
                    }, t);
                }, t.prototype.changeCVV = function(e, t) {
                    var n, i, a;
                    this.cvv = e.target.value, a = this.cvv, /^\d{3,4}$/.test(a) ? this.cvvErrorTips = "" : this.cvvErrorTips = (null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.errorTips) || void 0 === i ? void 0 : i.cvvErrorTips) || "The card’s security code is incorrect.", 
                    this.fieldOnChange({
                        message: this.cvvErrorTips,
                        param: "cvv"
                    }, t);
                }, t.prototype.submit = function(e) {
                    var t, n, i, a, o, l, r, d, s = document.getElementById("ebanx_submit_btn");
                    s.setAttribute("disabled", "disabled");
                    var u = f(null === (t = this.initialData) || void 0 === t ? void 0 : t.styleOption), c = document.createElement("style");
                    c.type = "text/css", c.innerHTML = "\n      @keyframes loading {\n        0% {transform: rotate(0deg);}\n        100% {transform: rotate(360deg);}\n      }\n    ";
                    var p = document.createElement("div");
                    p.setAttribute("style", "\n        width: " + (null === (n = null == u ? void 0 : u.ebanx_submit_btn) || void 0 === n ? void 0 : n.fontSize) + ";\n        height: " + (null === (i = null == u ? void 0 : u.ebanx_submit_btn) || void 0 === i ? void 0 : i.fontSize) + ";\n        border: 2px solid;\n        border-color: #fff #fff transparent;\n        border-radius: 50%;\n        animation: loading 1.2s linear infinite;\n      "), 
                    s.innerHTML = "", s.appendChild(c), s.appendChild(p);
                    var v = null === (o = null === (a = document.getElementById("ebanx_card_number")) || void 0 === a ? void 0 : a.value) || void 0 === o ? void 0 : o.replace(/\D/g, ""), m = (null === (r = null === (l = this.initialData) || void 0 === l ? void 0 : l.fieldData) || void 0 === r ? void 0 : r.userName) || document.getElementById("ebanx_user_name").value, y = document.getElementById("ebanx_card_due_date").value, h = document.getElementById("ebanx_card_cvv").value;
                    (null === (d = this.initialData) || void 0 === d ? void 0 : d.isWith3DS) ? this.isWith3DSSubmit({
                        cardNumber: v,
                        userName: m,
                        cardDueDate: y,
                        cardCvv: h
                    }) : this.isWithout3DSSubmit({
                        cardNumber: v,
                        userName: m,
                        cardDueDate: y,
                        cardCvv: h
                    });
                }, t.prototype.isWithout3DSSubmit = function(e) {
                    var t = e.cardNumber, n = e.userName, i = e.cardDueDate, a = e.cardCvv;
                    this.successCallToken({
                        cardNumber: t,
                        userName: n,
                        cardDueDate: i,
                        cardCvv: a
                    });
                }, t.prototype.isWith3DSSubmit = function(e) {
                    var t = this, n = e.cardNumber, i = e.userName, a = e.cardDueDate, o = e.cardCvv, l = this.initialData.fieldData, r = void 0 === l ? {} : l, d = r.orderAmount, s = r.orderCurrency, u = r.shipAddress, c = r.shipCountry, p = r.shipState, v = r.shipCity, m = r.shipZip, y = r.email, h = r.shipPhone, b = r.homePhone, f = r.CPF;
                    try {
                        this.checkoutFieldData(r);
                        var g = {
                            orderInformation: {
                                amountDetails: {
                                    totalAmount: d,
                                    currency: s
                                },
                                billTo: {
                                    address1: u,
                                    administrativeArea: p,
                                    country: c || "BR",
                                    email: y,
                                    homePhone: b || h,
                                    locality: v,
                                    postalCode: m,
                                    mobilePhone: h
                                }
                            },
                            paymentInformation: {
                                card: {
                                    number: n,
                                    expirationMonth: a.split("/")[0],
                                    expirationYear: a.split("/")[1],
                                    holderName: i
                                }
                            },
                            personalIdentification: {
                                id: f,
                                type: "CPF"
                            }
                        };
                        console.log("3DS校验传参：", g), EBANX.threedsecure.checkIfShouldAuthenticate(g).then((function(e) {
                            e ? EBANX.threedsecure.run(g).then((function(e) {
                                t.successCallToken({
                                    cardNumber: n,
                                    userName: i,
                                    cardDueDate: a,
                                    cardCvv: o,
                                    threedsEci: e.threeds_eci,
                                    threedsCryptogram: e.threeds_cryptogram,
                                    threedsXid: e.threeds_xid,
                                    threedsVersion: e.threeds_version,
                                    threedsTrxid: e.threeds_trxid
                                });
                            })).catch((function(e) {
                                console.log("进行threedsecure时出错"), t.failureCall(e);
                            })) : t.successCallToken({
                                cardNumber: n,
                                userName: i,
                                cardDueDate: a,
                                cardCvv: o
                            });
                        })).catch((function(e) {
                            console.log("checkIfShouldAuthenticate时出错"), t.failureCall(e);
                        }));
                    } catch (e) {
                        console.error("传参缺失", e);
                    }
                }, t.prototype.failureCall = function(e) {
                    var t, n, i, a = document.getElementById("ebanx_submit_btn");
                    null === (t = null == a ? void 0 : a.removeAttribute) || void 0 === t || t.call(a, "disabled"), 
                    a && (a.innerHTML = null !== (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.btnText) && void 0 !== i ? i : "OK"), 
                    document.getElementById("ebanx_error_tips").textContent = null == e ? void 0 : e.toString(), 
                    console.error("failureCall", e);
                }, t.prototype.successCallToken = function(e) {
                    var t = this, n = e.cardNumber, a = e.userName, o = e.cardDueDate, l = e.cardCvv, r = e.threedsEci, d = e.threedsCryptogram, s = e.threedsXid, u = e.threedsVersion, c = e.threedsTrxid;
                    console.log("successCallToken");
                    var p = document.getElementById("ebanx_submit_btn");
                    EBANX.card.createToken({
                        card_number: n,
                        card_name: a,
                        card_due_date: o,
                        card_cvv: l,
                        threeds_eci: r,
                        threeds_cryptogram: d,
                        threeds_xid: s,
                        threeds_version: u,
                        threeds_trxid: c
                    }, (function(e) {
                        var n, a, o, l, v, m, y, h, b, f;
                        if (null === (n = null == p ? void 0 : p.removeAttribute) || void 0 === n || n.call(p, "disabled"), 
                        p && (p.innerHTML = null !== (o = null === (a = t.initialData) || void 0 === a ? void 0 : a.btnText) && void 0 !== o ? o : "OK"), 
                        null === (l = null == e ? void 0 : e.data) || void 0 === l ? void 0 : l.hasOwnProperty("status")) ; else {
                            var g = (null === (m = null === (v = null == e ? void 0 : e.error) || void 0 === v ? void 0 : v.err) || void 0 === m ? void 0 : m.status_message) || (null === (h = null === (y = null == e ? void 0 : e.error) || void 0 === y ? void 0 : y.err) || void 0 === h ? void 0 : h.message) || "";
                            document.getElementById("ebanx_error_tips").textContent = g;
                        }
                        var x = i({}, e), S = {};
                        r && (S.threeds_eci = r), d && (S.threeds_cryptogram = d), s && (S.threeds_xid = s), 
                        u && (S.threeds_version = u), c && (S.threeds_trxid = c), Object.keys(S).length > 0 && (x.threedSecure = S), 
                        null === (f = null === (b = t.initialData) || void 0 === b ? void 0 : b.createToken) || void 0 === f || f.call(b, x);
                    }));
                }, t.prototype.checkoutFieldData = function(e) {
                    var t = e.orderAmount, n = e.orderCurrency, i = e.shipAddress, a = e.shipCountry, o = e.shipState, l = e.shipCity, r = e.shipZip, d = e.email, s = e.shipPhone;
                    e.homePhone;
                    var u = {
                        orderAmount: t,
                        orderCurrency: n,
                        shipAddress: i,
                        shipCountry: a,
                        shipState: o,
                        shipCity: l,
                        shipZip: r,
                        email: d,
                        shipPhone: s,
                        CPF: e.CPF
                    };
                    for (var c in u) if (!u[c]) throw this.failureCall("initialData.fieldData." + c + " cannot be null"), 
                    "initialData.fieldData." + c + "参数不能为null";
                }, t.prototype.getToken = function() {
                    return a(this, void 0, void 0, (function() {
                        var e = this;
                        return o(this, (function(t) {
                            return console.log("getToken"), [ 2, new Promise((function(t, n) {
                                var i, a;
                                EBANX.card.createToken({
                                    card_number: document.getElementById("ebanx_card_number").value,
                                    card_name: (null === (a = null === (i = e.initialData) || void 0 === i ? void 0 : i.fieldData) || void 0 === a ? void 0 : a.userName) || document.getElementById("ebanx_user_name").value,
                                    card_due_date: document.getElementById("ebanx_card_due_date").value,
                                    card_cvv: document.getElementById("ebanx_card_cvv").value
                                }, (function(e) {
                                    var i, a, o, l, r;
                                    if (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.hasOwnProperty("status")) t(e); else {
                                        var d = (null === (o = null === (a = null == e ? void 0 : e.error) || void 0 === a ? void 0 : a.err) || void 0 === o ? void 0 : o.status_message) || (null === (r = null === (l = null == e ? void 0 : e.error) || void 0 === l ? void 0 : l.err) || void 0 === r ? void 0 : r.message) || "";
                                        document.getElementById("ebanx_error_tips").textContent = d, n(e);
                                    }
                                }));
                            })) ];
                        }));
                    }));
                }, t;
            }(v), x = function(e) {
                function t(t, n) {
                    var i, a, o = e.call(this) || this;
                    o.publicKey = t, o.initialData = n;
                    var l = (new Date).getTime();
                    o.renderHtml();
                    var r = (new Date).getTime() - l;
                    return null === (a = null === (i = o.initialData) || void 0 === i ? void 0 : i.reportSDKLoading) || void 0 === a || a.call(i, {
                        time: r
                    }), o;
                }
                return n(t, e), t.prototype.getToken = function() {
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            return [ 2, "" ];
                        }));
                    }));
                }, t.prototype.sdkFormOnLoad = function(e) {
                    if (e) {
                        var t = e.contentWindow.location.href;
                        console.log("curSrc", t);
                    } else console.log("curSrc iframe not init");
                }, t.prototype.renderHtml = function() {
                    console.log("this.publicKey.key", this.publicKey.key);
                    var e, t = this.publicKey.key.split("?")[0], n = (e = this.publicKey.key, decodeURIComponent(e).match(/(\w+)=([^=&]+)/gi)), i = {};
                    console.log("iframeAction", t), console.log("keyArray", n), n && n.length > 0 && n.forEach((function(e) {
                        var t = e.split("=");
                        i[t[0]] = t[1];
                    })), i.cssUrl = this.initialData.rewriteCssUrl || "https://unpkg.com/@efox/pay@1.0.32/assets/oceanpay/rewrite.css", 
                    i.iframeOnload = this.sdkFormOnLoad, i.action = t, this.renderToDom(function(e) {
                        return p(DocumentFragment, null, p("form", {
                            action: e.action || "https://secure.oceanpayment.com/gateway/service/pay",
                            id: "creditcard_payment_checkout",
                            name: "creditcard_payment_checkout",
                            method: "POST",
                            target: "ifrm_creditcard_checkout"
                        }, p("input", {
                            type: "hidden",
                            name: "account",
                            value: e.account
                        }), p("input", {
                            type: "hidden",
                            name: "terminal",
                            value: e.terminal
                        }), p("input", {
                            type: "hidden",
                            name: "order_number",
                            value: e.order_number
                        }), p("input", {
                            type: "hidden",
                            name: "order_currency",
                            value: e.order_currency
                        }), p("input", {
                            type: "hidden",
                            name: "order_amount",
                            value: e.order_amount
                        }), p("input", {
                            type: "hidden",
                            name: "signValue",
                            value: e.signValue
                        }), p("input", {
                            type: "hidden",
                            name: "backUrl",
                            value: e.backUrl
                        }), p("input", {
                            type: "hidden",
                            name: "billing_firstName",
                            value: e.billing_firstName
                        }), p("input", {
                            type: "hidden",
                            name: "billing_lastName",
                            value: e.billing_lastName
                        }), p("input", {
                            type: "hidden",
                            name: "billing_email",
                            value: e.billing_email
                        }), p("input", {
                            type: "hidden",
                            name: "billing_phone",
                            value: e.billing_phone
                        }), p("input", {
                            type: "hidden",
                            name: "billing_country",
                            value: e.billing_country
                        }), p("input", {
                            type: "hidden",
                            name: "billing_city",
                            value: e.billing_city
                        }), p("input", {
                            type: "hidden",
                            name: "billing_address",
                            value: e.billing_address
                        }), p("input", {
                            type: "hidden",
                            name: "billing_zip",
                            value: e.billing_zip
                        }), p("input", {
                            type: "hidden",
                            name: "productSku",
                            value: e.productSku
                        }), p("input", {
                            type: "hidden",
                            name: "productName",
                            value: e.productName
                        }), p("input", {
                            type: "hidden",
                            name: "productNum",
                            value: e.productNum
                        }), p("input", {
                            type: "hidden",
                            name: "cssUrl",
                            value: e.cssUrl
                        })), p("iframe", {
                            width: "100%",
                            height: "100%",
                            scrolling: "auto",
                            name: "ifrm_creditcard_checkout",
                            id: "ifrm_creditcard_checkout",
                            onLoad: e.iframeOnload(void 0)
                        }));
                    }(i), this.initialData.domId), document.querySelector("#creditcard_payment_checkout").submit();
                }, t;
            }(v), S = function(e) {
                function t(t, n) {
                    var i = e.call(this) || this;
                    return i.publicKey = t, i.initialData = n, i.paypalInstanceName = "paypal", window.__PAYPALSPB_LOADJS || (window.__PAYPALSPB_LOADJS = y, 
                    window.__PAYPALSPB_LOADJS.ids = {}), i.loadPAYPALPSB(), i.renderHtml(), i;
                }
                return n(t, e), t.prototype.loadPAYPALPSB = function() {
                    var e, t, n, i, a, o, l, r, d, s = this, u = (new Date).getTime(), c = "https://www.paypal.com/sdk/js?client-id=" + (null === (e = this.publicKey) || void 0 === e ? void 0 : e.key) + "&currency=" + ((null === (n = null === (t = this.publicKey) || void 0 === t ? void 0 : t.expand) || void 0 === n ? void 0 : n.currency) || "USD");
                    (null === (i = this.initialData) || void 0 === i ? void 0 : i.isContinue) && (c += "&intent=capture&commit=false"), 
                    (null === (a = this.initialData) || void 0 === a ? void 0 : a.disableFunding) && (c += "&disable-funding=" + (null === (o = this.initialData) || void 0 === o ? void 0 : o.disableFunding)), 
                    (null === (l = this.initialData) || void 0 === l ? void 0 : l.paypalQueryParams) && (c += "&" + this.initialData.paypalQueryParams);
                    var p = c, v = {
                        success: function() {
                            window.__PAYPALSPB_LOADJS.ids[p] = !0, s.spbInit(c, u);
                        }
                    };
                    (null === (r = this.initialData) || void 0 === r ? void 0 : r.paypalScriptParams) && (v.before = function(e, t) {
                        Object.keys(s.initialData.paypalScriptParams).forEach((function(e) {
                            var n = s.initialData.paypalScriptParams[e];
                            t.setAttribute(e, n);
                        }));
                    }, (null === (d = this.initialData.paypalScriptParams) || void 0 === d ? void 0 : d["data-namespace"]) && (this.paypalInstanceName = this.initialData.paypalScriptParams["data-namespace"]), 
                    Object.keys(this.initialData.paypalScriptParams).forEach((function(e) {
                        var t = s.initialData.paypalScriptParams[e];
                        p += e + "&" + t;
                    }))), window.__PAYPALSPB_LOADJS.ids[p] ? window.__PAYPALSPB_LOADJS.ready(p, v) : (window.__PAYPALSPB_LOADJS.ids[p] = !0, 
                    window.__PAYPALSPB_LOADJS([ c ], p, v));
                }, t.prototype.spbInit = function(e, t) {
                    var n, l, r, d, s, u, c, p, v, m, y, h = this, b = (new Date).getTime() - t;
                    null === (l = null === (n = this.initialData) || void 0 === n ? void 0 : n.reportSDKLoading) || void 0 === l || l.call(n, {
                        time: b
                    });
                    var f = function(e) {
                        var t = null == e ? void 0 : e.commonStyle;
                        return null == e || e.componentStyle, i({}, t);
                    }(null === (r = this.initialData) || void 0 === r ? void 0 : r.styleOption);
                    window[this.paypalInstanceName].Buttons(i({
                        style: {
                            layout: (null === (d = null == f ? void 0 : f.paypalSPBStyle) || void 0 === d ? void 0 : d.layout) || "vertical",
                            color: (null === (s = null == f ? void 0 : f.paypalSPBStyle) || void 0 === s ? void 0 : s.color) || "gold",
                            shape: (null === (u = null == f ? void 0 : f.paypalSPBStyle) || void 0 === u ? void 0 : u.shape) || "rect",
                            label: (null === (c = null == f ? void 0 : f.paypalSPBStyle) || void 0 === c ? void 0 : c.label) || "paypal",
                            height: null === (p = null == f ? void 0 : f.paypalSPBStyle) || void 0 === p ? void 0 : p.height,
                            tagline: null !== (m = null === (v = null == f ? void 0 : f.paypalSPBStyle) || void 0 === v ? void 0 : v.tagline) && void 0 !== m && m
                        },
                        createOrder: function(e, t) {
                            return a(h, void 0, void 0, (function() {
                                var n, i;
                                return o(this, (function(a) {
                                    switch (a.label) {
                                      case 0:
                                        return console.log("createOrder", e, t), [ 4, null === (i = null === (n = this.initialData) || void 0 === n ? void 0 : n.createOrder) || void 0 === i ? void 0 : i.call(n, {
                                            data: e,
                                            actions: t
                                        }) ];

                                      case 1:
                                        return [ 2, a.sent() ];
                                    }
                                }));
                            }));
                        },
                        onApprove: function(e, t) {
                            var n, i;
                            console.log("onApprove", e, t), null === (i = null === (n = h.initialData) || void 0 === n ? void 0 : n.createToken) || void 0 === i || i.call(n, {
                                data: e,
                                actions: t
                            });
                        }
                    }, null === (y = this.initialData) || void 0 === y ? void 0 : y.paypalProps)).render("#" + (this.initialData.domId ? this.initialData.domId : "paypal-button-container"));
                }, t.prototype.renderHtml = function() {
                    this.renderToDom(p(DocumentFragment, null, p("div", {
                        id: "paypal-button-container"
                    })), this.initialData.domId);
                }, t.prototype.getToken = function() {
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            return [ 2 ];
                        }));
                    }));
                }, t;
            }(v), _ = m((function(e) {
                function t(n) {
                    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = t = function(e) {
                        return typeof e;
                    }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = t = function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e.exports.default = e.exports, e.exports.__esModule = !0), t(n);
                }
                e.exports = t, e.exports.default = e.exports, e.exports.__esModule = !0;
            })), D = (b = _) && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b, k = {
                length: function(e, t) {
                    return e = e.toString(), RegExp("^\\S{" + t + "}$", "g").test(e);
                },
                enum: function(e, t) {
                    var n = !1;
                    return t.map((function(t) {
                        t === e && (n = !0);
                    })), n;
                },
                any: function(e, t) {
                    return e = e.toString(), RegExp(t, "g").test(e);
                }
            };
            var w = [ {
                name: "merNo",
                type: "length",
                target: "1,5",
                msg: "require a length of 5",
                errorCode: "101"
            }, {
                name: "gatewayNo",
                type: "length",
                target: "1,8",
                msg: "require a length of 8",
                errorCode: "102"
            }, {
                name: "orderNo",
                type: "length",
                target: "0,50",
                msg: "require a length less than 50",
                errorCode: "103"
            }, {
                name: "orderCurrency",
                type: "enum",
                target: [ "KRW", "TRY", "ZAR", "AED", "MXN", "CLP", "BYR", "MYR", "MKD", "CSD", "PKR", "UAH", "IRR", "TZS", "AMD", "ISK", "AZN", "ALL", "BDT", "SAR", "GEL", "PLN", "NZD", "NOK", "DKK", "SEK", "CHF", "RUB", "BAM", "BGN", "HRK", "HUF", "LTL", "LVL", "RON", "RSD", "BRL", "THB", "ILS", "CNY", "USD", "GBP", "EUR", "AUD", "CAD", "JPY", "SGD", "HKD", "MYR", "PHP", "TWD", "INR", "CZK" ],
                msg: "require currency code,https://www.asiabill.com/developers/347-cn.html#currency",
                errorCode: "104"
            }, {
                name: "orderAmount",
                type: "any",
                target: "^[0-9]{0,8}.[0-9]{2}$",
                msg: "2 decimal places after the decimal point. Length less than ten digits",
                errorCode: "105"
            }, {
                name: "email",
                type: "length",
                target: "2,200",
                msg: "the length must be between 2-200",
                errorCode: "108"
            }, {
                name: "phone",
                type: "length",
                target: "2,50",
                msg: "the length must be between 2-50",
                errorCode: "109"
            }, {
                name: "paymentMethod",
                type: "enum",
                target: [ "Credit Card" ],
                msg: "inaccurate payment method",
                errorCode: "110"
            }, {
                name: "returnUrl",
                type: "length",
                target: "0,500",
                msg: "require a length less than 500",
                errorCode: "103"
            } ], N = function() {
                function e(e) {
                    "prod" === e.env ? this.actionURL = "https://safepay.asiabill.com/Interface/V2" : this.actionURL = "https://safepay.asiabill.com/TestInterface/V2", 
                    this.fieldData = e.fieldData, this.reportSDKLoading = null == e ? void 0 : e.reportSDKLoading;
                }
                return e.prototype.getToken = function() {
                    var e, t = this, n = (new Date).getTime(), i = (new Date).getTime() - n;
                    return null === (e = null == this ? void 0 : this.reportSDKLoading) || void 0 === e || e.call(this, {
                        time: i
                    }), new Promise((function(e, n) {
                        var i = document.createElement("form");
                        document.body.appendChild(i), i.method = "post", i.action = t.actionURL;
                        var a = function(e, t) {
                            for (var n, i = 0; i < t.length; i++) {
                                var a = t[i];
                                if (!e[a.name]) {
                                    n = {
                                        state: !1,
                                        name: a.name,
                                        msg: a.name + " is required",
                                        code: a.errorCode
                                    };
                                    break;
                                }
                                var o = e[a.name], l = k[a.type](o, a.target);
                                if (!l) {
                                    n = {
                                        state: l,
                                        name: a.name,
                                        msg: a.msg,
                                        code: a.errorCode
                                    };
                                    break;
                                }
                                n = {
                                    state: l,
                                    name: "all",
                                    msg: "check pass",
                                    code: "200"
                                };
                            }
                            return n;
                        }(t.fieldData, w);
                        if (console.log(a), a.state) {
                            for (var o in t.fieldData) {
                                console.log(o + ":" + t.fieldData[o]);
                                var l = document.createElement("input");
                                l.setAttribute("name", o), l.setAttribute("type", "hidden"), "object" !== D(t.fieldData[o]) ? l.setAttribute("value", t.fieldData[o]) : l.setAttribute("value", JSON.stringify(t.fieldData[o])), 
                                i.appendChild(l);
                            }
                            e(a), console.log(i), i.submit();
                        } else e(a);
                    }));
                }, e;
            }(), T = {
                nl: "NL-NL",
                en: "EN-GB",
                fr: "FR-FR",
                de: "DE-DE",
                it: "IT-IT",
                ko: "KR-KR",
                es: "ES-ES"
            }, C = function(e) {
                function t(t, n) {
                    var i = e.call(this) || this;
                    i.publicKey = t, i.initialData = n;
                    var a = (new Date).getTime();
                    i.render();
                    var o = "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/";
                    return console.log("publicKey", t.key, "initialData", n), y("https://cdn.checkout.com/js/framesv2.min.js", (function() {
                        var e, t, n;
                        window.Frames.init({
                            publicKey: i.publicKey.key,
                            debug: "dev" === i.initialData.env,
                            namespace: "Frames",
                            localization: T[i.initialData.language],
                            style: i.initialData.styleOption.commonStyle
                        });
                        var l = (new Date).getTime() - a;
                        null === (t = null === (e = i.initialData) || void 0 === e ? void 0 : e.reportSDKLoading) || void 0 === t || t.call(e, {
                            time: l
                        });
                        var r = window.Frames, d = function() {
                            var e = {
                                "card-number": {
                                    src: "card",
                                    alt: "card number logo"
                                },
                                "expiry-date": {
                                    src: "exp-date",
                                    alt: "expiry date logo"
                                },
                                cvv: {
                                    src: "cvv",
                                    alt: "cvv logo"
                                }
                            };
                            return e;
                        }();
                        var s = {}, u = null === (n = i.initialData) || void 0 === n ? void 0 : n.errorTips;
                        function c(e) {
                            document.getElementById("icon-" + e + "-error").style.removeProperty("display");
                        }
                        function p(e, t) {
                            void 0 === e && (e = null), void 0 === t && (t = null), e && e.classList.add("show");
                            var n = document.getElementById("logo-payment-method");
                            if (t) {
                                var i = t.toLowerCase();
                                n.setAttribute("src", o + i + ".svg"), n.setAttribute("alt", t || "payment method");
                            }
                            n.style.removeProperty("display");
                        }
                        function v(e) {
                            void 0 === e && (e = null), e && e.classList.remove("show"), document.getElementById("logo-payment-method").style.setProperty("display", "none");
                        }
                        s["card-number"] = (null == u ? void 0 : u.cardNumberErrorTips) || "Please enter a valid card number", 
                        s["expiry-date"] = (null == u ? void 0 : u.expirationErrorTips) || "Please enter a valid expiry date", 
                        s.cvv = (null == u ? void 0 : u.cvvErrorTips) || "Please enter a valid cvv code", 
                        r.addEventHandler(r.Events.FRAME_VALIDATION_CHANGED, (function(e) {
                            var t = e.element;
                            e.isValid || e.isEmpty ? ("card-number" !== t || e.isEmpty || p(), i = "icon-" + (n = t), 
                            (a = document.getElementById(i)).setAttribute("src", o + d[n].src + ".svg"), a.setAttribute("alt", d[n].alt), 
                            c(t), function(e) {
                                var t = ".error-message__" + e;
                                document.querySelector(t).textContent = "";
                            }(t)) : ("card-number" === t && v(), function(e) {
                                var t = "icon-" + e, n = document.getElementById(t);
                                n.setAttribute("src", o + d[e].src + "-error.svg"), n.setAttribute("alt", d[e].alt);
                            }(t), function(e) {
                                document.getElementById("icon-" + e + "-error").style.setProperty("display", "block");
                            }(t), function(e) {
                                var t = ".error-message__" + e;
                                document.querySelector(t).textContent = s[e];
                            }(t));
                            var n, i, a;
                        })), r.addEventHandler(r.Events.CARD_TOKENIZATION_FAILED, (function(e) {
                            console.log("CARD_TOKENIZATION_FAILED: %o", e), r.enableSubmitForm();
                        })), r.addEventHandler(r.Events.PAYMENT_METHOD_CHANGED, (function(e) {
                            var t = e.paymentMethod, n = document.querySelector(".icon-container.payment-method");
                            t ? (c("card-number"), p(n, t)) : v(n);
                        }));
                    })), i;
                }
                return n(t, e), t.prototype.getToken = function() {
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            return [ 2, window.Frames.submitCard() ];
                        }));
                    }));
                }, t.prototype.render = function() {
                    var e, t, n, i, a, o, l, r, d, s, u, c;
                    this.renderToDom((e = {
                        style: this.initialData.styleOption.componentStyle,
                        label: this.initialData.label
                    }, u = e.style, c = e.label, p("div", {
                        class: "checkout"
                    }, p("div", {
                        dangerouslySetInnerHTML: {
                            __html: "<style>\n.checkout *, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.checkout {\n  padding: 1rem;\n  background-color: #FFF;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.checkout iframe {\n  /* This fixes a mobile Safari bug */\n  height: 38px !important;\n}\n\n.checkout label {\n  display: block;\n  height: 10px;\n  color: #13395E;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 10px;\n  margin: 8px 0;\n}\n\n#payment-form {\n  width: 280px;\n  margin: 0 auto;\n}\n\n.date-and-code {\n  display: flex;\n  margin-bottom: 8px;\n}\n\n.date-and-code > div:nth-child(1) {\n  width: 55.715%;\n}\n.date-and-code > div:nth-child(2) {\n  width: 45.719%;\n}\n\n.input-container {\n  position: relative;\n  display: flex;\n  height: 40px;\n}\n.icon-container:last-child {\n  right: 0;\n}\n.icon-container.payment-method {\n  right: 0;\n}\n\n.input-container.card-number {\n  margin-bottom: 8px;\n}\n.input-container.expiry-date {\n  margin-right: 4px;\n}\n.input-container.cvv {\n  margin-left: 4px;\n}\n\n.card-number-frame {\n  padding-left: 40px;\n}\n.expiry-date-frame {\n  padding-left: 40px;\n}\n.cvv-frame {\n  padding-left: 40px;\n}\n\ndiv + button {\n  margin-top: 8px;\n}\n\n.icon-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  width: 26px;\n  margin: 0 7px;\n}\n\n.icon-container.payment-method  {\n  transform: translateY(-50%) rotateY(90deg);\n  transition: opacity 0.15s ease-out;\n  opacity: 0;\n  top: 50%;\n}\n\n.icon-container.payment-method.show {\n  opacity: 1;\n  transition: all 0.4s ease-out;\n  transform: translateY(-50%) rotateY(0deg);\n}\n\n.icon-container.payment-method img {\n  width: 100%;\n}\n\n[id$=\"-error\"] { display: none }\n\n.frame {\n  opacity: 0;\n}\n\n.frame--activated {\n  opacity: 1;\n  border: solid 1px #13395E;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px 0 rgba(19,57,94,0.2);\n}\n\n.frame--activated.frame--focus {\n  border: solid 1px #13395E;\n  box-shadow: 0 2px 5px 0 rgba(19,57,94,0.15);\n}\n\n.frame--activated.frame--invalid {\n  border: solid 1px #D96830;\n  box-shadow: 0 2px 5px 0 rgba(217,104,48,0.15);\n}\n\n.error-message {\n  display: block;\n  color: #C9501C;\n  font-size: .9rem;\n  margin: 8px 0 0 1px;\n  font-weight: 300;\n}\n\n#pay-button {\n  border: none;\n  border-radius: 3px;\n  color: #FFF;\n  font-weight: 500;\n  height: 40px;\n  width: 100%;\n  background-color: #13395E;\n  box-shadow: 0 1px 3px 0 rgba(19,57,94,0.4);\n}\n\n#pay-button:active {\n  background-color: #0B2A49;\n  box-shadow: 0 1px 3px 0 rgba(19,57,94,0.4);\n}\n\n#pay-button:hover {\n  background-color: #15406B;\n  box-shadow: 0 2px 5px 0 rgba(19,57,94,0.4);\n}\n\n#pay-button:disabled {\n  background-color: #697887;\n  box-shadow: none;\n}\n\n#pay-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.token {\n  color: #b35e14;\n  font-size: .9rem;\n  font-family: monospace;\n}\n\n/**\nIE11-targeted optimisations\n*/\n_:-ms-fullscreen, :root .icon-container {\n  display: block;\n}\n\n_:-ms-fullscreen, :root .icon-container img {\n  top: 50%;\n  -ms-transform: translateY(-50%);\n  position: absolute;\n}\n\n_:-ms-fullscreen, #icon-card-number,\n_:-ms-fullscreen, #icon-expiry-date,\n_:-ms-fullscreen, #icon-cvv {\n  left: 7px;\n}\n\n#checkout-frames-card-number::-ms-clear {\n  display: none;\n}\n\n</style>"
                        }
                    }), p("form", {
                        id: "payment-form",
                        method: "POST",
                        style: !!(null == u ? void 0 : u.formStyle) && u.formStyle
                    }, p("label", {
                        for: "card-number",
                        style: !!(null === (t = null == u ? void 0 : u.cardInputStyle) || void 0 === t ? void 0 : t.labelStyle) && u.cardInputStyle.labelStyle
                    }, (null == c ? void 0 : c.cardNumberLabel) || "Card number"), p("div", {
                        class: "input-container card-number",
                        style: !!(null === (n = null == u ? void 0 : u.cardInputStyle) || void 0 === n ? void 0 : n.inputWrapperStyle) && u.cardInputStyle.inputWrapperStyle
                    }, p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-card-number",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/card.svg",
                        alt: "PAN"
                    })), p("div", {
                        class: "card-number-frame"
                    }), p("div", {
                        class: "icon-container payment-method"
                    }, p("img", {
                        id: "logo-payment-method"
                    })), p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-card-number-error",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/error.svg"
                    }))), p("span", {
                        class: "error-message error-message__card-number",
                        style: !!(null === (i = null == u ? void 0 : u.cardInputStyle) || void 0 === i ? void 0 : i.messageStyle) && u.cardInputStyle.messageStyle
                    }), p("div", {
                        class: "date-and-code"
                    }, p("div", null, p("label", {
                        for: "expiry-date",
                        style: !!(null === (a = null == u ? void 0 : u.expirationInputStyle) || void 0 === a ? void 0 : a.labelStyle) && u.expirationInputStyle.labelStyle
                    }, (null == c ? void 0 : c.expirationLabel) || "Expiry date"), p("div", {
                        class: "input-container expiry-date",
                        style: !!(null === (o = null == u ? void 0 : u.expirationInputStyle) || void 0 === o ? void 0 : o.inputWrapperStyle) && u.expirationInputStyle.inputWrapperStyle
                    }, p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-expiry-date",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/exp-date.svg",
                        alt: "Expiry date"
                    })), p("div", {
                        class: "expiry-date-frame"
                    }), p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-expiry-date-error",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/error.svg"
                    })))), p("div", null, p("label", {
                        for: "cvv",
                        style: !!(null === (l = null == u ? void 0 : u.cvvInputStyle) || void 0 === l ? void 0 : l.labelStyle) && u.cvvInputStyle.labelStyle
                    }, (null == c ? void 0 : c.cvvLabel) || " Security code"), p("div", {
                        class: "input-container cvv",
                        style: !!(null === (r = null == u ? void 0 : u.cvvInputStyle) || void 0 === r ? void 0 : r.inputWrapperStyle) && u.cvvInputStyle.inputWrapperStyle
                    }, p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-cvv",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/cvv.svg",
                        alt: "CVV"
                    })), p("div", {
                        class: "cvv-frame"
                    }), p("div", {
                        class: "icon-container"
                    }, p("img", {
                        id: "icon-cvv-error",
                        src: "https://assets.checkout.com/docs/examples/wireframe/images/card-icons/error.svg"
                    }))))), p("div", null, p("span", {
                        class: "error-message error-message__expiry-date",
                        style: !!(null === (d = null == u ? void 0 : u.expirationInputStyle) || void 0 === d ? void 0 : d.messageStyle) && u.expirationInputStyle.messageStyle
                    }), p("span", {
                        class: "error-message error-message__cvv",
                        style: !!(null === (s = null == u ? void 0 : u.cvvInputStyle) || void 0 === s ? void 0 : s.messageStyle) && u.cvvInputStyle.messageStyle
                    }))))), this.initialData.domId);
                }, t;
            }(v), I = function() {
                function e(e, t) {
                    this.publicKey = e, this.initialData = t, this.initSDK();
                }
                return e.prototype.checkKey = function(e) {
                    return !0;
                }, e.prototype.getToken = function(e) {
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return [ 4, this.sdk.getToken(e) ];

                              case 1:
                                return [ 2, t.sent() ];
                            }
                        }));
                    }));
                }, e.prototype.initSDK = function() {
                    return a(this, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            if (!this.checkKey(this.publicKey)) return [ 2 ];
                            switch (this.initialData.sdkName) {
                              case "2checkout":
                                this.sdk = new h(this.publicKey, this.initialData);
                                break;

                              case "ebanx":
                                this.sdk = new g(this.publicKey, this.initialData);
                                break;

                              case "oceanPay":
                                this.sdk = new x(this.publicKey, this.initialData);
                                break;

                              case "paypalSPB":
                                this.sdk = new S(this.publicKey, this.initialData);
                                break;

                              case "asiaBill":
                                this.sdk = new N(this.initialData);
                                break;

                              case "checkout":
                                this.sdk = new C(this.publicKey, this.initialData);
                            }
                            return [ 2 ];
                        }));
                    }));
                }, e;
            }();
            e.AsiaBill = N, e.Checkout = C, e.Ebanx = g, e.OceanPay = x, e.PaypalSPB = S, e.TwoCheckOut = h, 
            e.default = I, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }));
    },
    "../shared/browser/node_modules/@sl/logger-sentry/lib/index.es.js": (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => U
        });
        var _sl_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/@sl/logger/lib/index.es.js");
        module = __webpack_require__.hmd(module);
        var e = function() {
            return e = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
            }, e.apply(this, arguments);
        };
        function n(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, i, s = n.call(t), o = [];
            try {
                for (;(void 0 === e || e-- > 0) && !(r = s.next()).done; ) o.push(r.value);
            } catch (t) {
                i = {
                    error: t
                };
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s);
                } finally {
                    if (i) throw i.error;
                }
            }
            return o;
        }
        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
            return t;
        }
        function i() {
            return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
        }
        var s = {};
        function o() {
            return i() ? __webpack_require__.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : s;
        }
        function a(t, e, n) {
            var r = n || o(), i = r.__SENTRY__ = r.__SENTRY__ || {};
            return i[t] || (i[t] = e());
        }
        var c = Object.prototype.toString;
        function u(t) {
            return function(t, e) {
                return c.call(t) === "[object " + e + "]";
            }(t, "Object");
        }
        function p(t) {
            return Boolean(t && t.then && "function" == typeof t.then);
        }
        var h, f = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, _ = o(), l = [ "debug", "info", "warn", "error", "log", "assert" ];
        function d(t) {
            var e = o();
            if (!("console" in e)) return t();
            var n = e.console, r = {};
            l.forEach((function(t) {
                var i = n[t] && n[t].__sentry_original__;
                t in e.console && i && (r[t] = n[t], n[t] = i);
            }));
            try {
                return t();
            } finally {
                Object.keys(r).forEach((function(t) {
                    n[t] = r[t];
                }));
            }
        }
        function g() {
            var t = !1, e = {
                enable: function() {
                    t = !0;
                },
                disable: function() {
                    t = !1;
                }
            };
            return f ? l.forEach((function(n) {
                e[n] = function() {
                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                    t && d((function() {
                        var t;
                        (t = _.console)[n].apply(t, r([ "Sentry Logger [" + n + "]:" ], e));
                    }));
                };
            })) : l.forEach((function(t) {
                e[t] = function() {};
            })), e;
        }
        function v(t) {
            var e, n;
            if (u(t)) {
                var r = {};
                try {
                    for (var i = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
                        if (n) return n.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && r >= t.length && (t = void 0), {
                                    value: t && t[r++],
                                    done: !t
                                };
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
                    }(Object.keys(t)), s = i.next(); !s.done; s = i.next()) {
                        var o = s.value;
                        void 0 !== t[o] && (r[o] = v(t[o]));
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally {
                    try {
                        s && !s.done && (n = i.return) && n.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return r;
            }
            return Array.isArray(t) ? t.map(v) : t;
        }
        function y() {
            var t = o(), e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4; ) e = "0" + e;
                    return e;
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16);
            }));
        }
        h = f ? a("logger", g) : g();
        var x, S = function() {
            function t(t) {
                var e = this;
                this._state = 0, this._handlers = [], this._resolve = function(t) {
                    e._setResult(1, t);
                }, this._reject = function(t) {
                    e._setResult(2, t);
                }, this._setResult = function(t, n) {
                    0 === e._state && (p(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, 
                    e._executeHandlers()));
                }, this._executeHandlers = function() {
                    if (0 !== e._state) {
                        var t = e._handlers.slice();
                        e._handlers = [], t.forEach((function(t) {
                            t[0] || (1 === e._state && t[1](e._value), 2 === e._state && t[2](e._value), t[0] = !0);
                        }));
                    }
                };
                try {
                    t(this._resolve, this._reject);
                } catch (t) {
                    this._reject(t);
                }
            }
            return t.prototype.then = function(e, n) {
                var r = this;
                return new t((function(t, i) {
                    r._handlers.push([ !1, function(n) {
                        if (e) try {
                            t(e(n));
                        } catch (t) {
                            i(t);
                        } else t(n);
                    }, function(e) {
                        if (n) try {
                            t(n(e));
                        } catch (t) {
                            i(t);
                        } else i(e);
                    } ]), r._executeHandlers();
                }));
            }, t.prototype.catch = function(t) {
                return this.then((function(t) {
                    return t;
                }), t);
            }, t.prototype.finally = function(e) {
                var n = this;
                return new t((function(t, r) {
                    var i, s;
                    return n.then((function(t) {
                        s = !1, i = t, e && e();
                    }), (function(t) {
                        s = !0, i = t, e && e();
                    })).then((function() {
                        s ? r(i) : t(i);
                    }));
                }));
            }, t;
        }();
        !function(t) {
            t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", 
            t.Debug = "debug", t.Critical = "critical";
        }(x || (x = {}));
        var m = {
            nowSeconds: function() {
                return Date.now() / 1e3;
            }
        };
        var b = i() ? function() {
            try {
                return (t = module, e = "perf_hooks", t.require(e)).performance;
            } catch (t) {
                return;
            }
            var t, e;
        }() : function() {
            var t = o().performance;
            if (t && t.now) return {
                now: function() {
                    return t.now();
                },
                timeOrigin: Date.now() - t.now()
            };
        }(), E = void 0 === b ? m : {
            nowSeconds: function() {
                return (b.timeOrigin + b.now()) / 1e3;
            }
        }, w = m.nowSeconds.bind(m), k = E.nowSeconds.bind(E);
        !function() {
            var t = o().performance;
            if (t && t.now) {
                var e = 36e5, n = t.now(), r = Date.now(), i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e, s = i < e, a = t.timing && t.timing.navigationStart, c = "number" == typeof a ? Math.abs(a + n - r) : e;
                (s || c < e) && i <= c && t.timeOrigin;
            }
        }();
        var T = function() {
            function t() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], 
                this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, 
                this._sdkProcessingMetadata = {};
            }
            return t.clone = function(n) {
                var i = new t;
                return n && (i._breadcrumbs = r(n._breadcrumbs), i._tags = e({}, n._tags), i._extra = e({}, n._extra), 
                i._contexts = e({}, n._contexts), i._user = n._user, i._level = n._level, i._span = n._span, 
                i._session = n._session, i._transactionName = n._transactionName, i._fingerprint = n._fingerprint, 
                i._eventProcessors = r(n._eventProcessors), i._requestSession = n._requestSession), 
                i;
            }, t.prototype.addScopeListener = function(t) {
                this._scopeListeners.push(t);
            }, t.prototype.addEventProcessor = function(t) {
                return this._eventProcessors.push(t), this;
            }, t.prototype.setUser = function(t) {
                return this._user = t || {}, this._session && this._session.update({
                    user: t
                }), this._notifyScopeListeners(), this;
            }, t.prototype.getUser = function() {
                return this._user;
            }, t.prototype.getRequestSession = function() {
                return this._requestSession;
            }, t.prototype.setRequestSession = function(t) {
                return this._requestSession = t, this;
            }, t.prototype.setTags = function(t) {
                return this._tags = e(e({}, this._tags), t), this._notifyScopeListeners(), this;
            }, t.prototype.setTag = function(t, n) {
                var r;
                return this._tags = e(e({}, this._tags), ((r = {})[t] = n, r)), this._notifyScopeListeners(), 
                this;
            }, t.prototype.setExtras = function(t) {
                return this._extra = e(e({}, this._extra), t), this._notifyScopeListeners(), this;
            }, t.prototype.setExtra = function(t, n) {
                var r;
                return this._extra = e(e({}, this._extra), ((r = {})[t] = n, r)), this._notifyScopeListeners(), 
                this;
            }, t.prototype.setFingerprint = function(t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this;
            }, t.prototype.setLevel = function(t) {
                return this._level = t, this._notifyScopeListeners(), this;
            }, t.prototype.setTransactionName = function(t) {
                return this._transactionName = t, this._notifyScopeListeners(), this;
            }, t.prototype.setTransaction = function(t) {
                return this.setTransactionName(t);
            }, t.prototype.setContext = function(t, n) {
                var r;
                return null === n ? delete this._contexts[t] : this._contexts = e(e({}, this._contexts), ((r = {})[t] = n, 
                r)), this._notifyScopeListeners(), this;
            }, t.prototype.setSpan = function(t) {
                return this._span = t, this._notifyScopeListeners(), this;
            }, t.prototype.getSpan = function() {
                return this._span;
            }, t.prototype.getTransaction = function() {
                var t = this.getSpan();
                return t && t.transaction;
            }, t.prototype.setSession = function(t) {
                return t ? this._session = t : delete this._session, this._notifyScopeListeners(), 
                this;
            }, t.prototype.getSession = function() {
                return this._session;
            }, t.prototype.update = function(n) {
                if (!n) return this;
                if ("function" == typeof n) {
                    var r = n(this);
                    return r instanceof t ? r : this;
                }
                return n instanceof t ? (this._tags = e(e({}, this._tags), n._tags), this._extra = e(e({}, this._extra), n._extra), 
                this._contexts = e(e({}, this._contexts), n._contexts), n._user && Object.keys(n._user).length && (this._user = n._user), 
                n._level && (this._level = n._level), n._fingerprint && (this._fingerprint = n._fingerprint), 
                n._requestSession && (this._requestSession = n._requestSession)) : u(n) && (this._tags = e(e({}, this._tags), n.tags), 
                this._extra = e(e({}, this._extra), n.extra), this._contexts = e(e({}, this._contexts), n.contexts), 
                n.user && (this._user = n.user), n.level && (this._level = n.level), n.fingerprint && (this._fingerprint = n.fingerprint), 
                n.requestSession && (this._requestSession = n.requestSession)), this;
            }, t.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, 
                this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, 
                this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), 
                this;
            }, t.prototype.addBreadcrumb = function(t, n) {
                var i = "number" == typeof n ? Math.min(n, 100) : 100;
                if (i <= 0) return this;
                var s = e({
                    timestamp: w()
                }, t);
                return this._breadcrumbs = r(this._breadcrumbs, [ s ]).slice(-i), this._notifyScopeListeners(), 
                this;
            }, t.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this;
            }, t.prototype.applyToEvent = function(t, n) {
                if (this._extra && Object.keys(this._extra).length && (t.extra = e(e({}, this._extra), t.extra)), 
                this._tags && Object.keys(this._tags).length && (t.tags = e(e({}, this._tags), t.tags)), 
                this._user && Object.keys(this._user).length && (t.user = e(e({}, this._user), t.user)), 
                this._contexts && Object.keys(this._contexts).length && (t.contexts = e(e({}, this._contexts), t.contexts)), 
                this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), 
                this._span) {
                    t.contexts = e({
                        trace: this._span.getTraceContext()
                    }, t.contexts);
                    var i = this._span.transaction && this._span.transaction.name;
                    i && (t.tags = e({
                        transaction: i
                    }, t.tags));
                }
                return this._applyFingerprint(t), t.breadcrumbs = r(t.breadcrumbs || [], this._breadcrumbs), 
                t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, 
                this._notifyEventProcessors(r(a("globalEventProcessors", (function() {
                    return [];
                })), this._eventProcessors), t, n);
            }, t.prototype.setSDKProcessingMetadata = function(t) {
                return this._sdkProcessingMetadata = e(e({}, this._sdkProcessingMetadata), t), this;
            }, t.prototype._notifyEventProcessors = function(t, n, r, i) {
                var s = this;
                return void 0 === i && (i = 0), new S((function(o, a) {
                    var c = t[i];
                    if (null === n || "function" != typeof c) o(n); else {
                        var u = c(e({}, n), r);
                        p(u) ? u.then((function(e) {
                            return s._notifyEventProcessors(t, e, r, i + 1).then(o);
                        })).then(null, a) : s._notifyEventProcessors(t, u, r, i + 1).then(o).then(null, a);
                    }
                }));
            }, t.prototype._notifyScopeListeners = function() {
                var t = this;
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                    e(t);
                })), this._notifyingListeners = !1);
            }, t.prototype._applyFingerprint = function(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [ t.fingerprint ] : [], 
                this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), 
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }, t;
        }();
        var L = function() {
            function t(t) {
                this.errors = 0, this.sid = y(), this.duration = 0, this.status = "ok", this.init = !0, 
                this.ignoreDuration = !1;
                var e = k();
                this.timestamp = e, this.started = e, t && this.update(t);
            }
            return t.prototype.update = function(t) {
                if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), 
                this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), 
                this.timestamp = t.timestamp || k(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), 
                t.sid && (this.sid = 32 === t.sid.length ? t.sid : y()), void 0 !== t.init && (this.init = t.init), 
                !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), 
                this.ignoreDuration) this.duration = void 0; else if ("number" == typeof t.duration) this.duration = t.duration; else {
                    var e = this.timestamp - this.started;
                    this.duration = e >= 0 ? e : 0;
                }
                t.release && (this.release = t.release), t.environment && (this.environment = t.environment), 
                !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), 
                "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status);
            }, t.prototype.close = function(t) {
                t ? this.update({
                    status: t
                }) : "ok" === this.status ? this.update({
                    status: "exited"
                }) : this.update();
            }, t.prototype.toJSON = function() {
                return v({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: {
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    }
                });
            }, t;
        }(), O = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, N = function() {
            function t(t, e, n) {
                void 0 === e && (e = new T), void 0 === n && (n = 4), this._version = n, this._stack = [ {} ], 
                this.getStackTop().scope = e, t && this.bindClient(t);
            }
            return t.prototype.isOlderThan = function(t) {
                return this._version < t;
            }, t.prototype.bindClient = function(t) {
                this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations();
            }, t.prototype.pushScope = function() {
                var t = T.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: t
                }), t;
            }, t.prototype.popScope = function() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop();
            }, t.prototype.withScope = function(t) {
                var e = this.pushScope();
                try {
                    t(e);
                } finally {
                    this.popScope();
                }
            }, t.prototype.getClient = function() {
                return this.getStackTop().client;
            }, t.prototype.getScope = function() {
                return this.getStackTop().scope;
            }, t.prototype.getStack = function() {
                return this._stack;
            }, t.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1];
            }, t.prototype.captureException = function(t, n) {
                var r = this._lastEventId = n && n.event_id ? n.event_id : y(), i = n;
                if (!n) {
                    var s = void 0;
                    try {
                        throw new Error("Sentry syntheticException");
                    } catch (t) {
                        s = t;
                    }
                    i = {
                        originalException: t,
                        syntheticException: s
                    };
                }
                return this._invokeClient("captureException", t, e(e({}, i), {
                    event_id: r
                })), r;
            }, t.prototype.captureMessage = function(t, n, r) {
                var i = this._lastEventId = r && r.event_id ? r.event_id : y(), s = r;
                if (!r) {
                    var o = void 0;
                    try {
                        throw new Error(t);
                    } catch (t) {
                        o = t;
                    }
                    s = {
                        originalException: t,
                        syntheticException: o
                    };
                }
                return this._invokeClient("captureMessage", t, n, e(e({}, s), {
                    event_id: i
                })), i;
            }, t.prototype.captureEvent = function(t, n) {
                var r = n && n.event_id ? n.event_id : y();
                return "transaction" !== t.type && (this._lastEventId = r), this._invokeClient("captureEvent", t, e(e({}, n), {
                    event_id: r
                })), r;
            }, t.prototype.lastEventId = function() {
                return this._lastEventId;
            }, t.prototype.addBreadcrumb = function(t, n) {
                var r = this.getStackTop(), i = r.scope, s = r.client;
                if (i && s) {
                    var o = s.getOptions && s.getOptions() || {}, a = o.beforeBreadcrumb, c = void 0 === a ? null : a, u = o.maxBreadcrumbs, p = void 0 === u ? 100 : u;
                    if (!(p <= 0)) {
                        var h = w(), f = e({
                            timestamp: h
                        }, t), _ = c ? d((function() {
                            return c(f, n);
                        })) : f;
                        null !== _ && i.addBreadcrumb(_, p);
                    }
                }
            }, t.prototype.setUser = function(t) {
                var e = this.getScope();
                e && e.setUser(t);
            }, t.prototype.setTags = function(t) {
                var e = this.getScope();
                e && e.setTags(t);
            }, t.prototype.setExtras = function(t) {
                var e = this.getScope();
                e && e.setExtras(t);
            }, t.prototype.setTag = function(t, e) {
                var n = this.getScope();
                n && n.setTag(t, e);
            }, t.prototype.setExtra = function(t, e) {
                var n = this.getScope();
                n && n.setExtra(t, e);
            }, t.prototype.setContext = function(t, e) {
                var n = this.getScope();
                n && n.setContext(t, e);
            }, t.prototype.configureScope = function(t) {
                var e = this.getStackTop(), n = e.scope, r = e.client;
                n && r && t(n);
            }, t.prototype.run = function(t) {
                var e = C(this);
                try {
                    t(this);
                } finally {
                    C(e);
                }
            }, t.prototype.getIntegration = function(t) {
                var e = this.getClient();
                if (!e) return null;
                try {
                    return e.getIntegration(t);
                } catch (e) {
                    return O && h.warn("Cannot retrieve integration " + t.id + " from the current Hub"), 
                    null;
                }
            }, t.prototype.startSpan = function(t) {
                return this._callExtensionMethod("startSpan", t);
            }, t.prototype.startTransaction = function(t, e) {
                return this._callExtensionMethod("startTransaction", t, e);
            }, t.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders");
            }, t.prototype.captureSession = function(t) {
                if (void 0 === t && (t = !1), t) return this.endSession();
                this._sendSessionUpdate();
            }, t.prototype.endSession = function() {
                var t = this.getStackTop(), e = t && t.scope, n = e && e.getSession();
                n && n.close(), this._sendSessionUpdate(), e && e.setSession();
            }, t.prototype.startSession = function(t) {
                var n = this.getStackTop(), r = n.scope, i = n.client, s = i && i.getOptions() || {}, a = s.release, c = s.environment, u = (o().navigator || {}).userAgent, p = new L(e(e(e({
                    release: a,
                    environment: c
                }, r && {
                    user: r.getUser()
                }), u && {
                    userAgent: u
                }), t));
                if (r) {
                    var h = r.getSession && r.getSession();
                    h && "ok" === h.status && h.update({
                        status: "exited"
                    }), this.endSession(), r.setSession(p);
                }
                return p;
            }, t.prototype._sendSessionUpdate = function() {
                var t = this.getStackTop(), e = t.scope, n = t.client;
                if (e) {
                    var r = e.getSession && e.getSession();
                    r && n && n.captureSession && n.captureSession(r);
                }
            }, t.prototype._invokeClient = function(t) {
                for (var e, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                var s = this.getStackTop(), o = s.scope, a = s.client;
                a && a[t] && (e = a)[t].apply(e, r(n, [ o ]));
            }, t.prototype._callExtensionMethod = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = R(), i = r.__SENTRY__;
                if (i && i.extensions && "function" == typeof i.extensions[t]) return i.extensions[t].apply(this, e);
                O && h.warn("Extension method " + t + " couldn't be found, doing nothing.");
            }, t;
        }();
        function R() {
            var t = o();
            return t.__SENTRY__ = t.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, t;
        }
        function C(t) {
            var e = R(), n = M(e);
            return D(e, t), n;
        }
        function j() {
            var t = R();
            return A(t) && !M(t).isOlderThan(4) || D(t, new N), i() ? function(t) {
                try {
                    var e = R().__SENTRY__, n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!n) return M(t);
                    if (!A(n) || M(n).isOlderThan(4)) {
                        var r = M(t).getStackTop();
                        D(n, new N(r.client, T.clone(r.scope)));
                    }
                    return M(n);
                } catch (e) {
                    return M(t);
                }
            }(t) : M(t);
        }
        function A(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
        }
        function M(t) {
            return a("hub", (function() {
                return new N;
            }), t);
        }
        function D(t, e) {
            return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0);
        }
        function P(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var i = j();
            if (i && i[t]) return i[t].apply(i, r(e));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.");
        }
        function B(t, n) {
            var r = new Error(t);
            return P("captureMessage", t, "string" == typeof n ? n : void 0, e({
                originalException: t,
                syntheticException: r
            }, "string" != typeof n ? {
                captureContext: n
            } : void 0));
        }
        var I = function(t) {
            var e = t.message, n = t.owner, r = t.action, i = t.status, s = t.errorLevel, o = t.data, a = [ {
                key: "owner",
                value: n
            }, {
                key: "action",
                value: r
            }, {
                key: "status",
                value: i
            }, {
                key: "errorLevel",
                value: s
            } ];
            return "".concat(e).concat(a.map((function(t) {
                return e = t.key, n = t.value, "".concat(n ? "\n[".concat(e, ": ").concat(n, "]") : "");
                var e, n;
            })).join("")).concat(o ? "\n".concat(JSON.stringify(o, null, 2)) : "");
        }, Y = function(t, e) {
            var n = e;
            return n && n instanceof Error ? n.message = "".concat(null == e ? void 0 : e.message, ": ").concat(t) : n = t, 
            n;
        }, U = function(n) {
            var r, i, s = n.level, o = n.data, a = n.owner, c = n.action, u = n.error, p = I(n), h = e({
                "event.owner": a,
                "event.action": c
            }, n.tags), f = Y(p, u);
            switch (s) {
              case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                P("addBreadcrumb", {
                    category: n.owner,
                    message: p,
                    level: x.Info
                });
                break;

              case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Log:
                B(p, {
                    extra: o,
                    tags: h,
                    level: x.Log
                });
                break;

              case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warn:
                B(p, {
                    extra: o,
                    tags: h,
                    level: x.Warning
                });
                break;

              case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                r = f, i = {
                    extra: o,
                    tags: h,
                    level: x.Error
                }, P("captureException", r, {
                    captureContext: i,
                    originalException: r,
                    syntheticException: new Error("Sentry syntheticException")
                });
                break;

              default:
                console.error("不是期望的上报类型", s, p);
            }
        };
    },
    "../shared/browser/node_modules/@sl/logger/lib/index.es.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            LogLevel: () => t,
            LogStatus: () => o,
            default: () => e
        });
        var n, o, t, i = function() {
            return i = Object.assign || function(n) {
                for (var o, t = 1, i = arguments.length; t < i; t++) for (var r in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
                return n;
            }, i.apply(this, arguments);
        };
        !function(n) {
            n.P0 = "P0", n.P1 = "P1", n.P2 = "P2";
        }(n || (n = {})), function(n) {
            n.Start = "开始", n.Success = "成功", n.Failure = "失败";
        }(o || (o = {})), function(n) {
            n.Info = "info", n.Log = "log", n.Warn = "warn", n.Error = "error";
        }(t || (t = {}));
        var r = function n(o) {
            var r = this;
            this.options = {
                owner: "",
                action: "",
                transports: []
            }, this.withOwner = function(o) {
                return new n(i(i({}, r.options), {
                    owner: o
                }));
            }, this.pipeOwner = function(o) {
                var t = "";
                return t = r.options.owner ? "".concat(r.options.owner, ".").concat(o) : o, new n(i(i({}, r.options), {
                    owner: t
                }));
            }, this.withAction = function(o) {
                return new n(i(i({}, r.options), {
                    action: o
                }));
            }, this.pipeTransport = function() {
                for (var o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
                var e = r.options.transports.concat(o);
                return new n(i(i({}, r.options), {
                    transports: e
                }));
            }, this.report = function(n, o, t) {
                !function(n, o) {
                    var t = n;
                    o.forEach((function(n) {
                        var o = n(t);
                        o && (t = o);
                    }));
                }(i(i({
                    level: n,
                    owner: r.options.owner,
                    action: r.options.action
                }, t), {
                    message: o
                }), r.options.transports);
            }, this.info = function(n, o) {
                r.report(t.Info, n, o);
            }, this.log = function(n, o) {
                r.report(t.Log, n, o);
            }, this.warn = function(n, o) {
                r.report(t.Warn, n, o);
            }, this.error = function(n, o) {
                r.report(t.Error, n, o);
            }, this.options = i(i({}, this.options), o);
        }, e = new r;
        Object.defineProperty(e, "options", {
            writable: !1,
            configurable: !1
        });
    },
    "../shared/browser/node_modules/axios/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__("../shared/browser/node_modules/axios/lib/axios.js");
    },
    "../shared/browser/node_modules/axios/lib/adapters/xhr.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("../shared/browser/node_modules/axios/lib/core/settle.js");
        var cookies = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/cookies.js");
        var buildURL = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/buildURL.js");
        var buildFullPath = __webpack_require__("../shared/browser/node_modules/axios/lib/core/buildFullPath.js");
        var parseHeaders = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/parseHeaders.js");
        var isURLSameOrigin = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/isURLSameOrigin.js");
        var createError = __webpack_require__("../shared/browser/node_modules/axios/lib/core/createError.js");
        module.exports = function(config) {
            return new Promise((function(resolve, reject) {
                var requestData = config.data;
                var requestHeaders = config.headers;
                var responseType = config.responseType;
                if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"];
                var request = new XMLHttpRequest;
                if (config.auth) {
                    var username = config.auth.username || "";
                    var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
                    requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
                }
                var fullPath = buildFullPath(config.baseURL, config.url);
                request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
                request.timeout = config.timeout;
                function onloadend() {
                    if (!request) return;
                    var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                    var responseData = !responseType || "text" === responseType || "json" === responseType ? request.responseText : request.response;
                    var response = {
                        data: responseData,
                        status: request.status,
                        statusText: request.statusText,
                        headers: responseHeaders,
                        config,
                        request
                    };
                    settle(resolve, reject, response);
                    request = null;
                }
                if ("onloadend" in request) request.onloadend = onloadend; else request.onreadystatechange = function() {
                    if (!request || 4 !== request.readyState) return;
                    if (0 === request.status && !(request.responseURL && 0 === request.responseURL.indexOf("file:"))) return;
                    setTimeout(onloadend);
                };
                request.onabort = function() {
                    if (!request) return;
                    reject(createError("Request aborted", config, "ECONNABORTED", request));
                    request = null;
                };
                request.onerror = function() {
                    reject(createError("Network Error", config, null, request));
                    request = null;
                };
                request.ontimeout = function() {
                    var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
                    if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
                    reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
                    request = null;
                };
                if (utils.isStandardBrowserEnv()) {
                    var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
                    if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
                }
                if ("setRequestHeader" in request) utils.forEach(requestHeaders, (function(val, key) {
                    if ("undefined" === typeof requestData && "content-type" === key.toLowerCase()) delete requestHeaders[key]; else request.setRequestHeader(key, val);
                }));
                if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
                if (responseType && "json" !== responseType) request.responseType = config.responseType;
                if ("function" === typeof config.onDownloadProgress) request.addEventListener("progress", config.onDownloadProgress);
                if ("function" === typeof config.onUploadProgress && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
                if (config.cancelToken) config.cancelToken.promise.then((function(cancel) {
                    if (!request) return;
                    request.abort();
                    reject(cancel);
                    request = null;
                }));
                if (!requestData) requestData = null;
                request.send(requestData);
            }));
        };
    },
    "../shared/browser/node_modules/axios/lib/axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var bind = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/bind.js");
        var Axios = __webpack_require__("../shared/browser/node_modules/axios/lib/core/Axios.js");
        var mergeConfig = __webpack_require__("../shared/browser/node_modules/axios/lib/core/mergeConfig.js");
        var defaults = __webpack_require__("../shared/browser/node_modules/axios/lib/defaults.js");
        function createInstance(defaultConfig) {
            var context = new Axios(defaultConfig);
            var instance = bind(Axios.prototype.request, context);
            utils.extend(instance, Axios.prototype, context);
            utils.extend(instance, context);
            return instance;
        }
        var axios = createInstance(defaults);
        axios.Axios = Axios;
        axios.create = function(instanceConfig) {
            return createInstance(mergeConfig(axios.defaults, instanceConfig));
        };
        axios.Cancel = __webpack_require__("../shared/browser/node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__("../shared/browser/node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__("../shared/browser/node_modules/axios/lib/cancel/isCancel.js");
        axios.all = function(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/spread.js");
        axios.isAxiosError = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/isAxiosError.js");
        module.exports = axios;
        module.exports["default"] = axios;
    },
    "../shared/browser/node_modules/axios/lib/cancel/Cancel.js": module => {
        "use strict";
        function Cancel(message) {
            this.message = message;
        }
        Cancel.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "");
        };
        Cancel.prototype.__CANCEL__ = true;
        module.exports = Cancel;
    },
    "../shared/browser/node_modules/axios/lib/cancel/CancelToken.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var Cancel = __webpack_require__("../shared/browser/node_modules/axios/lib/cancel/Cancel.js");
        function CancelToken(executor) {
            if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
            var resolvePromise;
            this.promise = new Promise((function(resolve) {
                resolvePromise = resolve;
            }));
            var token = this;
            executor((function(message) {
                if (token.reason) return;
                token.reason = new Cancel(message);
                resolvePromise(token.reason);
            }));
        }
        CancelToken.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason;
        };
        CancelToken.source = function() {
            var cancel;
            var token = new CancelToken((function(c) {
                cancel = c;
            }));
            return {
                token,
                cancel
            };
        };
        module.exports = CancelToken;
    },
    "../shared/browser/node_modules/axios/lib/cancel/isCancel.js": module => {
        "use strict";
        module.exports = function(value) {
            return !!(value && value.__CANCEL__);
        };
    },
    "../shared/browser/node_modules/axios/lib/core/Axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var buildURL = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/buildURL.js");
        var InterceptorManager = __webpack_require__("../shared/browser/node_modules/axios/lib/core/InterceptorManager.js");
        var dispatchRequest = __webpack_require__("../shared/browser/node_modules/axios/lib/core/dispatchRequest.js");
        var mergeConfig = __webpack_require__("../shared/browser/node_modules/axios/lib/core/mergeConfig.js");
        var validator = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/validator.js");
        var validators = validator.validators;
        function Axios(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
                request: new InterceptorManager,
                response: new InterceptorManager
            };
        }
        Axios.prototype.request = function(config) {
            if ("string" === typeof config) {
                config = arguments[1] || {};
                config.url = arguments[0];
            } else config = config || {};
            config = mergeConfig(this.defaults, config);
            if (config.method) config.method = config.method.toLowerCase(); else if (this.defaults.method) config.method = this.defaults.method.toLowerCase(); else config.method = "get";
            var transitional = config.transitional;
            if (void 0 !== transitional) validator.assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
                forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
                clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
            }, false);
            var requestInterceptorChain = [];
            var synchronousRequestInterceptors = true;
            this.interceptors.request.forEach((function(interceptor) {
                if ("function" === typeof interceptor.runWhen && false === interceptor.runWhen(config)) return;
                synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
                requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
            }));
            var responseInterceptorChain = [];
            this.interceptors.response.forEach((function(interceptor) {
                responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
            }));
            var promise;
            if (!synchronousRequestInterceptors) {
                var chain = [ dispatchRequest, void 0 ];
                Array.prototype.unshift.apply(chain, requestInterceptorChain);
                chain = chain.concat(responseInterceptorChain);
                promise = Promise.resolve(config);
                while (chain.length) promise = promise.then(chain.shift(), chain.shift());
                return promise;
            }
            var newConfig = config;
            while (requestInterceptorChain.length) {
                var onFulfilled = requestInterceptorChain.shift();
                var onRejected = requestInterceptorChain.shift();
                try {
                    newConfig = onFulfilled(newConfig);
                } catch (error) {
                    onRejected(error);
                    break;
                }
            }
            try {
                promise = dispatchRequest(newConfig);
            } catch (error) {
                return Promise.reject(error);
            }
            while (responseInterceptorChain.length) promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
            return promise;
        };
        Axios.prototype.getUri = function(config) {
            config = mergeConfig(this.defaults, config);
            return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
        };
        utils.forEach([ "delete", "get", "head", "options" ], (function(method) {
            Axios.prototype[method] = function(url, config) {
                return this.request(mergeConfig(config || {}, {
                    method,
                    url,
                    data: (config || {}).data
                }));
            };
        }));
        utils.forEach([ "post", "put", "patch" ], (function(method) {
            Axios.prototype[method] = function(url, data, config) {
                return this.request(mergeConfig(config || {}, {
                    method,
                    url,
                    data
                }));
            };
        }));
        module.exports = Axios;
    },
    "../shared/browser/node_modules/axios/lib/core/InterceptorManager.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        function InterceptorManager() {
            this.handlers = [];
        }
        InterceptorManager.prototype.use = function(fulfilled, rejected, options) {
            this.handlers.push({
                fulfilled,
                rejected,
                synchronous: options ? options.synchronous : false,
                runWhen: options ? options.runWhen : null
            });
            return this.handlers.length - 1;
        };
        InterceptorManager.prototype.eject = function(id) {
            if (this.handlers[id]) this.handlers[id] = null;
        };
        InterceptorManager.prototype.forEach = function(fn) {
            utils.forEach(this.handlers, (function(h) {
                if (null !== h) fn(h);
            }));
        };
        module.exports = InterceptorManager;
    },
    "../shared/browser/node_modules/axios/lib/core/buildFullPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isAbsoluteURL = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/isAbsoluteURL.js");
        var combineURLs = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/combineURLs.js");
        module.exports = function(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        };
    },
    "../shared/browser/node_modules/axios/lib/core/createError.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var enhanceError = __webpack_require__("../shared/browser/node_modules/axios/lib/core/enhanceError.js");
        module.exports = function(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };
    },
    "../shared/browser/node_modules/axios/lib/core/dispatchRequest.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var transformData = __webpack_require__("../shared/browser/node_modules/axios/lib/core/transformData.js");
        var isCancel = __webpack_require__("../shared/browser/node_modules/axios/lib/cancel/isCancel.js");
        var defaults = __webpack_require__("../shared/browser/node_modules/axios/lib/defaults.js");
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) config.cancelToken.throwIfRequested();
        }
        module.exports = function(config) {
            throwIfCancellationRequested(config);
            config.headers = config.headers || {};
            config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
            config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
            utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (function(method) {
                delete config.headers[method];
            }));
            var adapter = config.adapter || defaults.adapter;
            return adapter(config).then((function(response) {
                throwIfCancellationRequested(config);
                response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
                return response;
            }), (function(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);
                    if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
                }
                return Promise.reject(reason);
            }));
        };
    },
    "../shared/browser/node_modules/axios/lib/core/enhanceError.js": module => {
        "use strict";
        module.exports = function(error, config, code, request, response) {
            error.config = config;
            if (code) error.code = code;
            error.request = request;
            error.response = response;
            error.isAxiosError = true;
            error.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                };
            };
            return error;
        };
    },
    "../shared/browser/node_modules/axios/lib/core/mergeConfig.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        module.exports = function(config1, config2) {
            config2 = config2 || {};
            var config = {};
            var valueFromConfig2Keys = [ "url", "method", "data" ];
            var mergeDeepPropertiesKeys = [ "headers", "auth", "proxy", "params" ];
            var defaultToConfig2Keys = [ "baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding" ];
            var directMergeKeys = [ "validateStatus" ];
            function getMergedValue(target, source) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source); else if (utils.isPlainObject(source)) return utils.merge({}, source); else if (utils.isArray(source)) return source.slice();
                return source;
            }
            function mergeDeepProperties(prop) {
                if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(config1[prop], config2[prop]); else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(void 0, config1[prop]);
            }
            utils.forEach(valueFromConfig2Keys, (function(prop) {
                if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(void 0, config2[prop]);
            }));
            utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
            utils.forEach(defaultToConfig2Keys, (function(prop) {
                if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(void 0, config2[prop]); else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(void 0, config1[prop]);
            }));
            utils.forEach(directMergeKeys, (function(prop) {
                if (prop in config2) config[prop] = getMergedValue(config1[prop], config2[prop]); else if (prop in config1) config[prop] = getMergedValue(void 0, config1[prop]);
            }));
            var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
            var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter((function(key) {
                return -1 === axiosKeys.indexOf(key);
            }));
            utils.forEach(otherKeys, mergeDeepProperties);
            return config;
        };
    },
    "../shared/browser/node_modules/axios/lib/core/settle.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var createError = __webpack_require__("../shared/browser/node_modules/axios/lib/core/createError.js");
        module.exports = function(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        };
    },
    "../shared/browser/node_modules/axios/lib/core/transformData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var defaults = __webpack_require__("../shared/browser/node_modules/axios/lib/defaults.js");
        module.exports = function(data, headers, fns) {
            var context = this || defaults;
            utils.forEach(fns, (function(fn) {
                data = fn.call(context, data, headers);
            }));
            return data;
        };
    },
    "../shared/browser/node_modules/axios/lib/defaults.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var normalizeHeaderName = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/normalizeHeaderName.js");
        var enhanceError = __webpack_require__("../shared/browser/node_modules/axios/lib/core/enhanceError.js");
        var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
        }
        function getDefaultAdapter() {
            var adapter;
            if ("undefined" !== typeof XMLHttpRequest) adapter = __webpack_require__("../shared/browser/node_modules/axios/lib/adapters/xhr.js"); else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = __webpack_require__("../shared/browser/node_modules/axios/lib/adapters/xhr.js");
            return adapter;
        }
        function stringifySafely(rawValue, parser, encoder) {
            if (utils.isString(rawValue)) try {
                (parser || JSON.parse)(rawValue);
                return utils.trim(rawValue);
            } catch (e) {
                if ("SyntaxError" !== e.name) throw e;
            }
            return (encoder || JSON.stringify)(rawValue);
        }
        var defaults = {
            transitional: {
                silentJSONParsing: true,
                forcedJSONParsing: true,
                clarifyTimeoutError: false
            },
            adapter: getDefaultAdapter(),
            transformRequest: [ function(data, headers) {
                normalizeHeaderName(headers, "Accept");
                normalizeHeaderName(headers, "Content-Type");
                if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
                if (utils.isArrayBufferView(data)) return data.buffer;
                if (utils.isURLSearchParams(data)) {
                    setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                    return data.toString();
                }
                if (utils.isObject(data) || headers && "application/json" === headers["Content-Type"]) {
                    setContentTypeIfUnset(headers, "application/json");
                    return stringifySafely(data);
                }
                return data;
            } ],
            transformResponse: [ function(data) {
                var transitional = this.transitional;
                var silentJSONParsing = transitional && transitional.silentJSONParsing;
                var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                var strictJSONParsing = !silentJSONParsing && "json" === this.responseType;
                if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if ("SyntaxError" === e.name) throw enhanceError(e, this, "E_JSON_PARSE");
                        throw e;
                    }
                }
                return data;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(status) {
                return status >= 200 && status < 300;
            }
        };
        defaults.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        };
        utils.forEach([ "delete", "get", "head" ], (function(method) {
            defaults.headers[method] = {};
        }));
        utils.forEach([ "post", "put", "patch" ], (function(method) {
            defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        }));
        module.exports = defaults;
    },
    "../shared/browser/node_modules/axios/lib/helpers/bind.js": module => {
        "use strict";
        module.exports = function(fn, thisArg) {
            return function() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                return fn.apply(thisArg, args);
            };
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/buildURL.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        function encode(val) {
            return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        module.exports = function(url, params, paramsSerializer) {
            if (!params) return url;
            var serializedParams;
            if (paramsSerializer) serializedParams = paramsSerializer(params); else if (utils.isURLSearchParams(params)) serializedParams = params.toString(); else {
                var parts = [];
                utils.forEach(params, (function(val, key) {
                    if (null === val || "undefined" === typeof val) return;
                    if (utils.isArray(val)) key += "[]"; else val = [ val ];
                    utils.forEach(val, (function(v) {
                        if (utils.isDate(v)) v = v.toISOString(); else if (utils.isObject(v)) v = JSON.stringify(v);
                        parts.push(encode(key) + "=" + encode(v));
                    }));
                }));
                serializedParams = parts.join("&");
            }
            if (serializedParams) {
                var hashmarkIndex = url.indexOf("#");
                if (-1 !== hashmarkIndex) url = url.slice(0, hashmarkIndex);
                url += (-1 === url.indexOf("?") ? "?" : "&") + serializedParams;
            }
            return url;
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/combineURLs.js": module => {
        "use strict";
        module.exports = function(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/cookies.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        module.exports = utils.isStandardBrowserEnv() ? function() {
            return {
                write: function(name, value, expires, path, domain, secure) {
                    var cookie = [];
                    cookie.push(name + "=" + encodeURIComponent(value));
                    if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
                    if (utils.isString(path)) cookie.push("path=" + path);
                    if (utils.isString(domain)) cookie.push("domain=" + domain);
                    if (true === secure) cookie.push("secure");
                    document.cookie = cookie.join("; ");
                },
                read: function(name) {
                    var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                    return match ? decodeURIComponent(match[3]) : null;
                },
                remove: function(name) {
                    this.write(name, "", Date.now() - 864e5);
                }
            };
        }() : function() {
            return {
                write: function() {},
                read: function() {
                    return null;
                },
                remove: function() {}
            };
        }();
    },
    "../shared/browser/node_modules/axios/lib/helpers/isAbsoluteURL.js": module => {
        "use strict";
        module.exports = function(url) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/isAxiosError.js": module => {
        "use strict";
        module.exports = function(payload) {
            return "object" === typeof payload && true === payload.isAxiosError;
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/isURLSameOrigin.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        module.exports = utils.isStandardBrowserEnv() ? function() {
            var msie = /(msie|trident)/i.test(navigator.userAgent);
            var urlParsingNode = document.createElement("a");
            var originURL;
            function resolveURL(url) {
                var href = url;
                if (msie) {
                    urlParsingNode.setAttribute("href", href);
                    href = urlParsingNode.href;
                }
                urlParsingNode.setAttribute("href", href);
                return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                };
            }
            originURL = resolveURL(window.location.href);
            return function(requestURL) {
                var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
            };
        }() : function() {
            return function() {
                return true;
            };
        }();
    },
    "../shared/browser/node_modules/axios/lib/helpers/normalizeHeaderName.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        module.exports = function(headers, normalizedName) {
            utils.forEach(headers, (function(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            }));
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/parseHeaders.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/browser/node_modules/axios/lib/utils.js");
        var ignoreDuplicateOf = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
        module.exports = function(headers) {
            var parsed = {};
            var key;
            var val;
            var i;
            if (!headers) return parsed;
            utils.forEach(headers.split("\n"), (function(line) {
                i = line.indexOf(":");
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));
                if (key) {
                    if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
                    if ("set-cookie" === key) parsed[key] = (parsed[key] ? parsed[key] : []).concat([ val ]); else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
                }
            }));
            return parsed;
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/spread.js": module => {
        "use strict";
        module.exports = function(callback) {
            return function(arr) {
                return callback.apply(null, arr);
            };
        };
    },
    "../shared/browser/node_modules/axios/lib/helpers/validator.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var pkg = __webpack_require__("../shared/browser/node_modules/axios/package.json");
        var validators = {};
        [ "object", "boolean", "number", "function", "string", "symbol" ].forEach((function(type, i) {
            validators[type] = function(thing) {
                return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
            };
        }));
        var deprecatedWarnings = {};
        var currentVerArr = pkg.version.split(".");
        function isOlderVersion(version, thanVersion) {
            var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
            var destVer = version.split(".");
            for (var i = 0; i < 3; i++) if (pkgVersionArr[i] > destVer[i]) return true; else if (pkgVersionArr[i] < destVer[i]) return false;
            return false;
        }
        validators.transitional = function(validator, version, message) {
            var isDeprecated = version && isOlderVersion(version);
            function formatMessage(opt, desc) {
                return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
            }
            return function(value, opt, opts) {
                if (false === validator) throw new Error(formatMessage(opt, " has been removed in " + version));
                if (isDeprecated && !deprecatedWarnings[opt]) {
                    deprecatedWarnings[opt] = true;
                    console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
                }
                return validator ? validator(value, opt, opts) : true;
            };
        };
        function assertOptions(options, schema, allowUnknown) {
            if ("object" !== typeof options) throw new TypeError("options must be an object");
            var keys = Object.keys(options);
            var i = keys.length;
            while (i-- > 0) {
                var opt = keys[i];
                var validator = schema[opt];
                if (validator) {
                    var value = options[opt];
                    var result = void 0 === value || validator(value, opt, options);
                    if (true !== result) throw new TypeError("option " + opt + " must be " + result);
                    continue;
                }
                if (true !== allowUnknown) throw Error("Unknown option " + opt);
            }
        }
        module.exports = {
            isOlderVersion,
            assertOptions,
            validators
        };
    },
    "../shared/browser/node_modules/axios/lib/utils.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("../shared/browser/node_modules/axios/lib/helpers/bind.js");
        var toString = Object.prototype.toString;
        function isArray(val) {
            return "[object Array]" === toString.call(val);
        }
        function isUndefined(val) {
            return "undefined" === typeof val;
        }
        function isBuffer(val) {
            return null !== val && !isUndefined(val) && null !== val.constructor && !isUndefined(val.constructor) && "function" === typeof val.constructor.isBuffer && val.constructor.isBuffer(val);
        }
        function isArrayBuffer(val) {
            return "[object ArrayBuffer]" === toString.call(val);
        }
        function isFormData(val) {
            return "undefined" !== typeof FormData && val instanceof FormData;
        }
        function isArrayBufferView(val) {
            var result;
            if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView) result = ArrayBuffer.isView(val); else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
            return result;
        }
        function isString(val) {
            return "string" === typeof val;
        }
        function isNumber(val) {
            return "number" === typeof val;
        }
        function isObject(val) {
            return null !== val && "object" === typeof val;
        }
        function isPlainObject(val) {
            if ("[object Object]" !== toString.call(val)) return false;
            var prototype = Object.getPrototypeOf(val);
            return null === prototype || prototype === Object.prototype;
        }
        function isDate(val) {
            return "[object Date]" === toString.call(val);
        }
        function isFile(val) {
            return "[object File]" === toString.call(val);
        }
        function isBlob(val) {
            return "[object Blob]" === toString.call(val);
        }
        function isFunction(val) {
            return "[object Function]" === toString.call(val);
        }
        function isStream(val) {
            return isObject(val) && isFunction(val.pipe);
        }
        function isURLSearchParams(val) {
            return "undefined" !== typeof URLSearchParams && val instanceof URLSearchParams;
        }
        function trim(str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function isStandardBrowserEnv() {
            if ("undefined" !== typeof navigator && ("ReactNative" === navigator.product || "NativeScript" === navigator.product || "NS" === navigator.product)) return false;
            return "undefined" !== typeof window && "undefined" !== typeof document;
        }
        function forEach(obj, fn) {
            if (null === obj || "undefined" === typeof obj) return;
            if ("object" !== typeof obj) obj = [ obj ];
            if (isArray(obj)) for (var i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
        }
        function merge() {
            var result = {};
            function assignValue(val, key) {
                if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val); else if (isPlainObject(val)) result[key] = merge({}, val); else if (isArray(val)) result[key] = val.slice(); else result[key] = val;
            }
            for (var i = 0, l = arguments.length; i < l; i++) forEach(arguments[i], assignValue);
            return result;
        }
        function extend(a, b, thisArg) {
            forEach(b, (function(val, key) {
                if (thisArg && "function" === typeof val) a[key] = bind(val, thisArg); else a[key] = val;
            }));
            return a;
        }
        function stripBOM(content) {
            if (65279 === content.charCodeAt(0)) content = content.slice(1);
            return content;
        }
        module.exports = {
            isArray,
            isArrayBuffer,
            isBuffer,
            isFormData,
            isArrayBufferView,
            isString,
            isNumber,
            isObject,
            isPlainObject,
            isUndefined,
            isDate,
            isFile,
            isBlob,
            isFunction,
            isStream,
            isURLSearchParams,
            isStandardBrowserEnv,
            forEach,
            merge,
            extend,
            trim,
            stripBOM
        };
    },
    "../shared/browser/node_modules/decode-uri-component/index.js": module => {
        "use strict";
        var token = "%[a-f0-9]{2}";
        var singleMatcher = new RegExp(token, "gi");
        var multiMatcher = new RegExp("(" + token + ")+", "gi");
        function decodeComponents(components, split) {
            try {
                return decodeURIComponent(components.join(""));
            } catch (err) {}
            if (1 === components.length) return components;
            split = split || 1;
            var left = components.slice(0, split);
            var right = components.slice(split);
            return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
        }
        function decode(input) {
            try {
                return decodeURIComponent(input);
            } catch (err) {
                var tokens = input.match(singleMatcher);
                for (var i = 1; i < tokens.length; i++) {
                    input = decodeComponents(tokens, i).join("");
                    tokens = input.match(singleMatcher);
                }
                return input;
            }
        }
        function customDecodeURIComponent(input) {
            var replaceMap = {
                "%FE%FF": "��",
                "%FF%FE": "��"
            };
            var match = multiMatcher.exec(input);
            while (match) {
                try {
                    replaceMap[match[0]] = decodeURIComponent(match[0]);
                } catch (err) {
                    var result = decode(match[0]);
                    if (result !== match[0]) replaceMap[match[0]] = result;
                }
                match = multiMatcher.exec(input);
            }
            replaceMap["%C2"] = "�";
            var entries = Object.keys(replaceMap);
            for (var i = 0; i < entries.length; i++) {
                var key = entries[i];
                input = input.replace(new RegExp(key, "g"), replaceMap[key]);
            }
            return input;
        }
        module.exports = function(encodedURI) {
            if ("string" !== typeof encodedURI) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
            try {
                encodedURI = encodedURI.replace(/\+/g, " ");
                return decodeURIComponent(encodedURI);
            } catch (err) {
                return customDecodeURIComponent(encodedURI);
            }
        };
    },
    "../shared/browser/node_modules/filter-obj/index.js": module => {
        "use strict";
        module.exports = function(obj, predicate) {
            var ret = {};
            var keys = Object.keys(obj);
            var isArr = Array.isArray(predicate);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var val = obj[key];
                if (isArr ? -1 !== predicate.indexOf(key) : predicate(key, val, obj)) ret[key] = val;
            }
            return ret;
        };
    },
    "../shared/browser/node_modules/lodash/_SetCache.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js");
        function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [ value ];
        }
        module.exports = castArray;
    },
    "../shared/browser/node_modules/lodash/_Stack.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var listCacheClear = __webpack_require__("../shared/browser/node_modules/lodash/_listCacheClear.js"), listCacheDelete = __webpack_require__("../shared/browser/node_modules/lodash/_listCacheDelete.js"), listCacheGet = __webpack_require__("../shared/browser/node_modules/lodash/_listCacheGet.js"), listCacheHas = __webpack_require__("../shared/browser/node_modules/lodash/_listCacheHas.js"), listCacheSet = __webpack_require__("../shared/browser/node_modules/lodash/_listCacheSet.js");
        function ListCache(entries) {
            var index = -1, length = null == entries ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        module.exports = ListCache;
    },
    "../shared/browser/node_modules/lodash/_arraySome.js": module => {
        function arraySome(array, predicate) {
            var index = -1, length = null == array ? 0 : array.length;
            while (++index < length) if (predicate(array[index], index, array)) return true;
            return false;
        }
        module.exports = arraySome;
    },
    "../shared/browser/node_modules/lodash/_assocIndexOf.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var eq = __webpack_require__("../shared/browser/node_modules/lodash/eq.js");
        function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) if (eq(array[length][0], key)) return length;
            return -1;
        }
        module.exports = assocIndexOf;
    },
    "../shared/browser/node_modules/lodash/_baseFindIndex.js": module => {
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
            while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
            return -1;
        }
        module.exports = baseFindIndex;
    },
    "../shared/browser/node_modules/lodash/_baseGetTag.js": module => {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        module.exports = objectToString;
    },
    "../shared/browser/node_modules/lodash/_baseHasIn.js": module => {
        function baseHasIn(object, key) {
            return null != object && key in Object(object);
        }
        module.exports = baseHasIn;
    },
    "../shared/browser/node_modules/lodash/_baseIndexOf.js": module => {
        function strictIndexOf(array, value, fromIndex) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) if (array[index] === value) return index;
            return -1;
        }
        module.exports = strictIndexOf;
    },
    "../shared/browser/node_modules/lodash/_baseIsEqual.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqualDeep = __webpack_require__("../shared/browser/node_modules/lodash/_baseIsEqualDeep.js"), isObjectLike = __webpack_require__("../shared/browser/node_modules/lodash/isObjectLike.js");
        function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (null == value || null == other || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        module.exports = baseIsEqual;
    },
    "../shared/browser/node_modules/lodash/_baseIsEqualDeep.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__("../shared/browser/node_modules/lodash/_Stack.js"), equalArrays = __webpack_require__("../shared/browser/node_modules/lodash/_equalArrays.js"), equalByTag = __webpack_require__("../shared/browser/node_modules/lodash/_equalByTag.js"), equalObjects = __webpack_require__("../shared/browser/node_modules/lodash/_equalObjects.js"), getTag = __webpack_require__("../shared/browser/node_modules/lodash/_getTag.js"), isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), isBuffer = __webpack_require__("../shared/browser/node_modules/lodash/isBuffer.js"), isTypedArray = __webpack_require__("../shared/browser/node_modules/lodash/isTypedArray.js");
        var COMPARE_PARTIAL_FLAG = 1;
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) return false;
                objIsArr = true;
                objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack);
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack);
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
            }
            if (!isSameTag) return false;
            stack || (stack = new Stack);
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        module.exports = baseIsEqualDeep;
    },
    "../shared/browser/node_modules/lodash/_baseIsMatch.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__("../shared/browser/node_modules/lodash/_Stack.js"), baseIsEqual = __webpack_require__("../shared/browser/node_modules/lodash/_baseIsEqual.js");
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (null == object) return !length;
            object = Object(object);
            while (index--) {
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (void 0 === objValue && !(key in object)) return false;
                } else {
                    var stack = new Stack;
                    if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                    if (!(void 0 === result ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
                }
            }
            return true;
        }
        module.exports = baseIsMatch;
    },
    "../shared/browser/node_modules/lodash/_baseIteratee.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseMatches = __webpack_require__("../shared/browser/node_modules/lodash/_baseMatches.js"), baseMatchesProperty = __webpack_require__("../shared/browser/node_modules/lodash/_baseMatchesProperty.js"), identity = __webpack_require__("../shared/browser/node_modules/lodash/identity.js"), isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), property = __webpack_require__("../shared/browser/node_modules/lodash/property.js");
        function baseIteratee(value) {
            if ("function" == typeof value) return value;
            if (null == value) return identity;
            if ("object" == typeof value) return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value);
        }
        module.exports = baseIteratee;
    },
    "../shared/browser/node_modules/lodash/_baseMatches.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsMatch = __webpack_require__("../shared/browser/node_modules/lodash/_baseIsMatch.js"), getMatchData = __webpack_require__("../shared/browser/node_modules/lodash/_getMatchData.js"), matchesStrictComparable = __webpack_require__("../shared/browser/node_modules/lodash/_matchesStrictComparable.js");
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (1 == matchData.length && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        module.exports = baseMatches;
    },
    "../shared/browser/node_modules/lodash/_baseMatchesProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqual = __webpack_require__("../shared/browser/node_modules/lodash/_baseIsEqual.js"), get = __webpack_require__("../shared/browser/node_modules/lodash/get.js"), hasIn = __webpack_require__("../shared/browser/node_modules/lodash/hasIn.js"), isKey = __webpack_require__("../shared/browser/node_modules/lodash/_isKey.js"), isStrictComparable = __webpack_require__("../shared/browser/node_modules/lodash/_isStrictComparable.js"), matchesStrictComparable = __webpack_require__("../shared/browser/node_modules/lodash/_matchesStrictComparable.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js");
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
            return function(object) {
                var objValue = get(object, path);
                return void 0 === objValue && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
        }
        module.exports = baseMatchesProperty;
    },
    "../shared/browser/node_modules/lodash/_baseProperty.js": module => {
        function baseProperty(key) {
            return function(object) {
                return null == object ? void 0 : object[key];
            };
        }
        module.exports = baseProperty;
    },
    "../shared/browser/node_modules/lodash/_basePropertyDeep.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGet = __webpack_require__("../shared/browser/node_modules/lodash/_baseGet.js");
        function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path);
            };
        }
        module.exports = basePropertyDeep;
    },
    "../shared/browser/node_modules/lodash/_cacheHas.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_baseIndexOf.js");
        function arrayIncludes(array, value) {
            var length = null == array ? 0 : array.length;
            return !!length && baseIndexOf(array, value, 0) > -1;
        }
        module.exports = arrayIncludes;
    },
    "../shared/browser/node_modules/lodash/_createFind.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIteratee = __webpack_require__("../shared/browser/node_modules/lodash/_baseIteratee.js"), isArrayLike = __webpack_require__("../shared/browser/node_modules/lodash/isArrayLike.js"), keys = __webpack_require__("../shared/browser/node_modules/lodash/keys.js");
        function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
                var iterable = Object(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = baseIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function(key) {
                        return iteratee(iterable[key], key, iterable);
                    };
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
            };
        }
        module.exports = createFind;
    },
    "../shared/browser/node_modules/lodash/_createRound.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var root = __webpack_require__("../shared/browser/node_modules/lodash/_root.js"), toInteger = __webpack_require__("../shared/browser/node_modules/lodash/toInteger.js"), toNumber = __webpack_require__("../shared/browser/node_modules/lodash/toNumber.js"), toString = __webpack_require__("../shared/browser/node_modules/lodash/toString.js");
        var nativeIsFinite = root.isFinite, nativeMin = Math.min;
        function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
                number = toNumber(number);
                precision = null == precision ? 0 : nativeMin(toInteger(precision), 292);
                if (precision && nativeIsFinite(number)) {
                    var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                    pair = (toString(value) + "e").split("e");
                    return +(pair[0] + "e" + (+pair[1] - precision));
                }
                return func(number);
            };
        }
        module.exports = createRound;
    },
    "../shared/browser/node_modules/lodash/_equalArrays.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var SetCache = __webpack_require__("../shared/browser/node_modules/lodash/_SetCache.js"), arraySome = __webpack_require__("../shared/browser/node_modules/lodash/_arraySome.js"), cacheHas = __webpack_require__("../shared/browser/node_modules/lodash/_cacheHas.js");
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
            var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : void 0;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index];
                if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                if (void 0 !== compared) {
                    if (compared) continue;
                    result = false;
                    break;
                }
                if (seen) {
                    if (!arraySome(other, (function(othValue, othIndex) {
                        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                    }))) {
                        result = false;
                        break;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break;
                }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result;
        }
        module.exports = equalArrays;
    },
    "../shared/browser/node_modules/lodash/_equalByTag.js": module => {
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    },
    "../shared/browser/node_modules/lodash/_equalObjects.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var getAllKeys = __webpack_require__("../shared/browser/node_modules/lodash/_getAllKeys.js");
        var COMPARE_PARTIAL_FLAG = 1;
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) return false;
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) return objStacked == other && othStacked == object;
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                if (!(void 0 === compared ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = "constructor" == key);
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                if (objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor)) result = false;
            }
            stack["delete"](object);
            stack["delete"](other);
            return result;
        }
        module.exports = equalObjects;
    },
    "../shared/browser/node_modules/lodash/_freeGlobal.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
        module.exports = freeGlobal;
    },
    "../shared/browser/node_modules/lodash/_getAllKeys.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("../shared/browser/node_modules/lodash/_overArg.js");
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
    },
    "../shared/browser/node_modules/lodash/_getMatchData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isStrictComparable = __webpack_require__("../shared/browser/node_modules/lodash/_isStrictComparable.js"), keys = __webpack_require__("../shared/browser/node_modules/lodash/keys.js");
        function getMatchData(object) {
            var result = keys(object), length = result.length;
            while (length--) {
                var key = result[length], value = object[key];
                result[length] = [ key, value, isStrictComparable(value) ];
            }
            return result;
        }
        module.exports = getMatchData;
    },
    "../shared/browser/node_modules/lodash/_getTag.js": module => {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        module.exports = objectToString;
    },
    "../shared/browser/node_modules/lodash/_hasPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var castPath = __webpack_require__("../shared/browser/node_modules/lodash/_castPath.js"), isArguments = __webpack_require__("../shared/browser/node_modules/lodash/isArguments.js"), isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), isIndex = __webpack_require__("../shared/browser/node_modules/lodash/_isIndex.js"), isLength = __webpack_require__("../shared/browser/node_modules/lodash/isLength.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js");
        function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while (++index < length) {
                var key = toKey(path[index]);
                if (!(result = null != object && hasFunc(object, key))) break;
                object = object[key];
            }
            if (result || ++index != length) return result;
            length = null == object ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        module.exports = hasPath;
    },
    "../shared/browser/node_modules/lodash/_isIndex.js": module => {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value, length) {
            var type = typeof value;
            length = null == length ? MAX_SAFE_INTEGER : length;
            return !!length && ("number" == type || "symbol" != type && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        module.exports = isIndex;
    },
    "../shared/browser/node_modules/lodash/_isStrictComparable.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__("../shared/browser/node_modules/lodash/isObject.js");
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        module.exports = isStrictComparable;
    },
    "../shared/browser/node_modules/lodash/_listCacheClear.js": module => {
        function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        module.exports = listCacheClear;
    },
    "../shared/browser/node_modules/lodash/_listCacheDelete.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_assocIndexOf.js");
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop(); else splice.call(data, index, 1);
            --this.size;
            return true;
        }
        module.exports = listCacheDelete;
    },
    "../shared/browser/node_modules/lodash/_listCacheGet.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_assocIndexOf.js");
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
        }
        module.exports = listCacheGet;
    },
    "../shared/browser/node_modules/lodash/_listCacheHas.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_assocIndexOf.js");
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        module.exports = listCacheHas;
    },
    "../shared/browser/node_modules/lodash/_listCacheSet.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_assocIndexOf.js");
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([ key, value ]);
            } else data[index][1] = value;
            return this;
        }
        module.exports = listCacheSet;
    },
    "../shared/browser/node_modules/lodash/_matchesStrictComparable.js": module => {
        function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (null == object) return false;
                return object[key] === srcValue && (void 0 !== srcValue || key in Object(object));
            };
        }
        module.exports = matchesStrictComparable;
    },
    "../shared/browser/node_modules/lodash/_overArg.js": module => {
        function overArg(func, transform) {
            return function(arg) {
                return func(transform(arg));
            };
        }
        module.exports = overArg;
    },
    "../shared/browser/node_modules/lodash/_root.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var freeGlobal = __webpack_require__("../shared/browser/node_modules/lodash/_freeGlobal.js");
        var freeSelf = "object" == typeof self && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module.exports = root;
    },
    "../shared/browser/node_modules/lodash/debounce.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__("../shared/browser/node_modules/lodash/isObject.js"), now = __webpack_require__("../shared/browser/node_modules/lodash/now.js"), toNumber = __webpack_require__("../shared/browser/node_modules/lodash/toNumber.js");
        var FUNC_ERROR_TEXT = "Expected a function";
        var nativeMax = Math.max, nativeMin = Math.min;
        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = void 0;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = void 0;
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs = lastThis = void 0;
                return result;
            }
            function cancel() {
                if (void 0 !== timerId) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = void 0;
            }
            function flush() {
                return void 0 === timerId ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (void 0 === timerId) return leadingEdge(lastCallTime);
                    if (maxing) {
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (void 0 === timerId) timerId = setTimeout(timerExpired, wait);
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        module.exports = debounce;
    },
    "../shared/browser/node_modules/lodash/eq.js": module => {
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    },
    "../shared/browser/node_modules/lodash/find.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var createFind = __webpack_require__("../shared/browser/node_modules/lodash/_createFind.js"), findIndex = __webpack_require__("../shared/browser/node_modules/lodash/findIndex.js");
        var find = createFind(findIndex);
        module.exports = find;
    },
    "../shared/browser/node_modules/lodash/findIndex.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseFindIndex = __webpack_require__("../shared/browser/node_modules/lodash/_baseFindIndex.js"), baseIteratee = __webpack_require__("../shared/browser/node_modules/lodash/_baseIteratee.js"), toInteger = __webpack_require__("../shared/browser/node_modules/lodash/toInteger.js");
        var nativeMax = Math.max;
        function findIndex(array, predicate, fromIndex) {
            var length = null == array ? 0 : array.length;
            if (!length) return -1;
            var index = null == fromIndex ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseFindIndex(array, baseIteratee(predicate, 3), index);
        }
        module.exports = findIndex;
    },
    "../shared/browser/node_modules/lodash/hasIn.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseHasIn = __webpack_require__("../shared/browser/node_modules/lodash/_baseHasIn.js"), hasPath = __webpack_require__("../shared/browser/node_modules/lodash/_hasPath.js");
        function hasIn(object, path) {
            return null != object && hasPath(object, path, baseHasIn);
        }
        module.exports = hasIn;
    },
    "../shared/browser/node_modules/lodash/identity.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "../shared/browser/node_modules/lodash/isArguments.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "../shared/browser/node_modules/lodash/isArrayLike.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isFunction = __webpack_require__("../shared/browser/node_modules/lodash/isFunction.js"), isLength = __webpack_require__("../shared/browser/node_modules/lodash/isLength.js");
        function isArrayLike(value) {
            return null != value && isLength(value.length) && !isFunction(value);
        }
        module.exports = isArrayLike;
    },
    "../shared/browser/node_modules/lodash/isBuffer.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "../shared/browser/node_modules/lodash/isFunction.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__("../shared/browser/node_modules/lodash/_baseGetTag.js"), isObject = __webpack_require__("../shared/browser/node_modules/lodash/isObject.js");
        var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
        function isFunction(value) {
            if (!isObject(value)) return false;
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        module.exports = isFunction;
    },
    "../shared/browser/node_modules/lodash/isLength.js": module => {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value) {
            return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        module.exports = isLength;
    },
    "../shared/browser/node_modules/lodash/isObject.js": module => {
        function isObject(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
        }
        module.exports = isObject;
    },
    "../shared/browser/node_modules/lodash/isObjectLike.js": module => {
        function isObjectLike(value) {
            return null != value && "object" == typeof value;
        }
        module.exports = isObjectLike;
    },
    "../shared/browser/node_modules/lodash/isTypedArray.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "../shared/browser/node_modules/lodash/keys.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("../shared/browser/node_modules/lodash/_overArg.js");
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
    },
    "../shared/browser/node_modules/lodash/now.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var root = __webpack_require__("../shared/browser/node_modules/lodash/_root.js");
        var now = function() {
            return root.Date.now();
        };
        module.exports = now;
    },
    "../shared/browser/node_modules/lodash/property.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseProperty = __webpack_require__("../shared/browser/node_modules/lodash/_baseProperty.js"), basePropertyDeep = __webpack_require__("../shared/browser/node_modules/lodash/_basePropertyDeep.js"), isKey = __webpack_require__("../shared/browser/node_modules/lodash/_isKey.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js");
        function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        module.exports = property;
    },
    "../shared/browser/node_modules/lodash/round.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var createRound = __webpack_require__("../shared/browser/node_modules/lodash/_createRound.js");
        var round = createRound("round");
        module.exports = round;
    },
    "../shared/browser/node_modules/lodash/toInteger.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "../shared/browser/node_modules/lodash/toNumber.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "../shared/browser/node_modules/query-string/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        const strictUriEncode = __webpack_require__("../shared/browser/node_modules/strict-uri-encode/index.js");
        const decodeComponent = __webpack_require__("../shared/browser/node_modules/decode-uri-component/index.js");
        const splitOnFirst = __webpack_require__("../shared/browser/node_modules/split-on-first/index.js");
        const filterObject = __webpack_require__("../shared/browser/node_modules/filter-obj/index.js");
        const isNullOrUndefined = value => null === value || void 0 === value;
        const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
        function encoderForArrayFormat(options) {
            switch (options.arrayFormat) {
              case "index":
                return key => (result, value) => {
                    const index = result.length;
                    if (void 0 === value || options.skipNull && null === value || options.skipEmptyString && "" === value) return result;
                    if (null === value) return [ ...result, [ encode(key, options), "[", index, "]" ].join("") ];
                    return [ ...result, [ encode(key, options), "[", encode(index, options), "]=", encode(value, options) ].join("") ];
                };

              case "bracket":
                return key => (result, value) => {
                    if (void 0 === value || options.skipNull && null === value || options.skipEmptyString && "" === value) return result;
                    if (null === value) return [ ...result, [ encode(key, options), "[]" ].join("") ];
                    return [ ...result, [ encode(key, options), "[]=", encode(value, options) ].join("") ];
                };

              case "colon-list-separator":
                return key => (result, value) => {
                    if (void 0 === value || options.skipNull && null === value || options.skipEmptyString && "" === value) return result;
                    if (null === value) return [ ...result, [ encode(key, options), ":list=" ].join("") ];
                    return [ ...result, [ encode(key, options), ":list=", encode(value, options) ].join("") ];
                };

              case "comma":
              case "separator":
              case "bracket-separator":
                {
                    const keyValueSep = "bracket-separator" === options.arrayFormat ? "[]=" : "=";
                    return key => (result, value) => {
                        if (void 0 === value || options.skipNull && null === value || options.skipEmptyString && "" === value) return result;
                        value = null === value ? "" : value;
                        if (0 === result.length) return [ [ encode(key, options), keyValueSep, encode(value, options) ].join("") ];
                        return [ [ result, encode(value, options) ].join(options.arrayFormatSeparator) ];
                    };
                }

              default:
                return key => (result, value) => {
                    if (void 0 === value || options.skipNull && null === value || options.skipEmptyString && "" === value) return result;
                    if (null === value) return [ ...result, encode(key, options) ];
                    return [ ...result, [ encode(key, options), "=", encode(value, options) ].join("") ];
                };
            }
        }
        function parserForArrayFormat(options) {
            let result;
            switch (options.arrayFormat) {
              case "index":
                return (key, value, accumulator) => {
                    result = /\[(\d*)\]$/.exec(key);
                    key = key.replace(/\[\d*\]$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (void 0 === accumulator[key]) accumulator[key] = {};
                    accumulator[key][result[1]] = value;
                };

              case "bracket":
                return (key, value, accumulator) => {
                    result = /(\[\])$/.exec(key);
                    key = key.replace(/\[\]$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (void 0 === accumulator[key]) {
                        accumulator[key] = [ value ];
                        return;
                    }
                    accumulator[key] = [].concat(accumulator[key], value);
                };

              case "colon-list-separator":
                return (key, value, accumulator) => {
                    result = /(:list)$/.exec(key);
                    key = key.replace(/:list$/, "");
                    if (!result) {
                        accumulator[key] = value;
                        return;
                    }
                    if (void 0 === accumulator[key]) {
                        accumulator[key] = [ value ];
                        return;
                    }
                    accumulator[key] = [].concat(accumulator[key], value);
                };

              case "comma":
              case "separator":
                return (key, value, accumulator) => {
                    const isArray = "string" === typeof value && value.includes(options.arrayFormatSeparator);
                    const isEncodedArray = "string" === typeof value && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
                    value = isEncodedArray ? decode(value, options) : value;
                    const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item => decode(item, options))) : null === value ? value : decode(value, options);
                    accumulator[key] = newValue;
                };

              case "bracket-separator":
                return (key, value, accumulator) => {
                    const isArray = /(\[\])$/.test(key);
                    key = key.replace(/\[\]$/, "");
                    if (!isArray) {
                        accumulator[key] = value ? decode(value, options) : value;
                        return;
                    }
                    const arrayValue = null === value ? [] : value.split(options.arrayFormatSeparator).map((item => decode(item, options)));
                    if (void 0 === accumulator[key]) {
                        accumulator[key] = arrayValue;
                        return;
                    }
                    accumulator[key] = [].concat(accumulator[key], arrayValue);
                };

              default:
                return (key, value, accumulator) => {
                    if (void 0 === accumulator[key]) {
                        accumulator[key] = value;
                        return;
                    }
                    accumulator[key] = [].concat(accumulator[key], value);
                };
            }
        }
        function validateArrayFormatSeparator(value) {
            if ("string" !== typeof value || 1 !== value.length) throw new TypeError("arrayFormatSeparator must be single character string");
        }
        function encode(value, options) {
            if (options.encode) return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
            return value;
        }
        function decode(value, options) {
            if (options.decode) return decodeComponent(value);
            return value;
        }
        function keysSorter(input) {
            if (Array.isArray(input)) return input.sort();
            if ("object" === typeof input) return keysSorter(Object.keys(input)).sort(((a, b) => Number(a) - Number(b))).map((key => input[key]));
            return input;
        }
        function removeHash(input) {
            const hashStart = input.indexOf("#");
            if (-1 !== hashStart) input = input.slice(0, hashStart);
            return input;
        }
        function getHash(url) {
            let hash = "";
            const hashStart = url.indexOf("#");
            if (-1 !== hashStart) hash = url.slice(hashStart);
            return hash;
        }
        function extract(input) {
            input = removeHash(input);
            const queryStart = input.indexOf("?");
            if (-1 === queryStart) return "";
            return input.slice(queryStart + 1);
        }
        function parseValue(value, options) {
            if (options.parseNumbers && !Number.isNaN(Number(value)) && "string" === typeof value && "" !== value.trim()) value = Number(value); else if (options.parseBooleans && null !== value && ("true" === value.toLowerCase() || "false" === value.toLowerCase())) value = "true" === value.toLowerCase();
            return value;
        }
        function parse(query, options) {
            options = Object.assign({
                decode: true,
                sort: true,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: false,
                parseBooleans: false
            }, options);
            validateArrayFormatSeparator(options.arrayFormatSeparator);
            const formatter = parserForArrayFormat(options);
            const ret = Object.create(null);
            if ("string" !== typeof query) return ret;
            query = query.trim().replace(/^[?#&]/, "");
            if (!query) return ret;
            for (const param of query.split("&")) {
                if ("" === param) continue;
                let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
                value = void 0 === value ? null : [ "comma", "separator", "bracket-separator" ].includes(options.arrayFormat) ? value : decode(value, options);
                formatter(decode(key, options), value, ret);
            }
            for (const key of Object.keys(ret)) {
                const value = ret[key];
                if ("object" === typeof value && null !== value) for (const k of Object.keys(value)) value[k] = parseValue(value[k], options); else ret[key] = parseValue(value, options);
            }
            if (false === options.sort) return ret;
            return (true === options.sort ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(((result, key) => {
                const value = ret[key];
                if (Boolean(value) && "object" === typeof value && !Array.isArray(value)) result[key] = keysSorter(value); else result[key] = value;
                return result;
            }), Object.create(null));
        }
        exports.extract = extract;
        exports.parse = parse;
        exports.stringify = (object, options) => {
            if (!object) return "";
            options = Object.assign({
                encode: true,
                strict: true,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, options);
            validateArrayFormatSeparator(options.arrayFormatSeparator);
            const shouldFilter = key => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && "" === object[key];
            const formatter = encoderForArrayFormat(options);
            const objectCopy = {};
            for (const key of Object.keys(object)) if (!shouldFilter(key)) objectCopy[key] = object[key];
            const keys = Object.keys(objectCopy);
            if (false !== options.sort) keys.sort(options.sort);
            return keys.map((key => {
                const value = object[key];
                if (void 0 === value) return "";
                if (null === value) return encode(key, options);
                if (Array.isArray(value)) {
                    if (0 === value.length && "bracket-separator" === options.arrayFormat) return encode(key, options) + "[]";
                    return value.reduce(formatter(key), []).join("&");
                }
                return encode(key, options) + "=" + encode(value, options);
            })).filter((x => x.length > 0)).join("&");
        };
        exports.parseUrl = (url, options) => {
            options = Object.assign({
                decode: true
            }, options);
            const [url_, hash] = splitOnFirst(url, "#");
            return Object.assign({
                url: url_.split("?")[0] || "",
                query: parse(extract(url), options)
            }, options && options.parseFragmentIdentifier && hash ? {
                fragmentIdentifier: decode(hash, options)
            } : {});
        };
        exports.stringifyUrl = (object, options) => {
            options = Object.assign({
                encode: true,
                strict: true,
                [encodeFragmentIdentifier]: true
            }, options);
            const url = removeHash(object.url).split("?")[0] || "";
            const queryFromUrl = exports.extract(object.url);
            const parsedQueryFromUrl = exports.parse(queryFromUrl, {
                sort: false
            });
            const query = Object.assign(parsedQueryFromUrl, object.query);
            let queryString = exports.stringify(query, options);
            if (queryString) queryString = `?${queryString}`;
            let hash = getHash(object.url);
            if (object.fragmentIdentifier) hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
            return `${url}${queryString}${hash}`;
        };
        exports.pick = (input, filter, options) => {
            options = Object.assign({
                parseFragmentIdentifier: true,
                [encodeFragmentIdentifier]: false
            }, options);
            const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
            return exports.stringifyUrl({
                url,
                query: filterObject(query, filter),
                fragmentIdentifier
            }, options);
        };
        exports.exclude = (input, filter, options) => {
            const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);
            return exports.pick(input, exclusionFilter, options);
        };
    },
    "../shared/browser/node_modules/scroll-lock/dist/scroll-lock.js": function(module) {
        (function(root, factory) {
            if (true) module.exports = factory();
        })(0, (function() {
            return function(modules) {
                var installedModules = {};
                function __nested_webpack_require_607__(moduleId) {
                    if (installedModules[moduleId]) return installedModules[moduleId].exports;
                    var module = installedModules[moduleId] = {
                        i: moduleId,
                        l: false,
                        exports: {}
                    };
                    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_607__);
                    module.l = true;
                    return module.exports;
                }
                __nested_webpack_require_607__.m = modules;
                __nested_webpack_require_607__.c = installedModules;
                __nested_webpack_require_607__.d = function(exports, name, getter) {
                    if (!__nested_webpack_require_607__.o(exports, name)) Object.defineProperty(exports, name, {
                        enumerable: true,
                        get: getter
                    });
                };
                __nested_webpack_require_607__.r = function(exports) {
                    if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                    });
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                };
                __nested_webpack_require_607__.t = function(value, mode) {
                    if (1 & mode) value = __nested_webpack_require_607__(value);
                    if (8 & mode) return value;
                    if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
                    var ns = Object.create(null);
                    __nested_webpack_require_607__.r(ns);
                    Object.defineProperty(ns, "default", {
                        enumerable: true,
                        value
                    });
                    if (2 & mode && "string" != typeof value) for (var key in value) __nested_webpack_require_607__.d(ns, key, function(key) {
                        return value[key];
                    }.bind(null, key));
                    return ns;
                };
                __nested_webpack_require_607__.n = function(module) {
                    var getter = module && module.__esModule ? function() {
                        return module["default"];
                    } : function() {
                        return module;
                    };
                    __nested_webpack_require_607__.d(getter, "a", getter);
                    return getter;
                };
                __nested_webpack_require_607__.o = function(object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                };
                __nested_webpack_require_607__.p = "";
                return __nested_webpack_require_607__(__nested_webpack_require_607__.s = 0);
            }([ function(module, __webpack_exports__, __nested_webpack_require_5303__) {
                "use strict";
                __nested_webpack_require_5303__.r(__webpack_exports__);
                var argumentAsArray = function(argument) {
                    return Array.isArray(argument) ? argument : [ argument ];
                };
                var isElement = function(target) {
                    return target instanceof Node;
                };
                var isElementList = function(nodeList) {
                    return nodeList instanceof NodeList;
                };
                var eachNode = function(nodeList, callback) {
                    if (nodeList && callback) {
                        nodeList = isElementList(nodeList) ? nodeList : [ nodeList ];
                        for (var i = 0; i < nodeList.length; i++) if (true === callback(nodeList[i], i, nodeList.length)) break;
                    }
                };
                var throwError = function(message) {
                    return console.error("[scroll-lock] ".concat(message));
                };
                var arrayAsSelector = function(array) {
                    if (Array.isArray(array)) {
                        var selector = array.join(", ");
                        return selector;
                    }
                };
                var nodeListAsArray = function(nodeList) {
                    var nodes = [];
                    eachNode(nodeList, (function(node) {
                        return nodes.push(node);
                    }));
                    return nodes;
                };
                var findParentBySelector = function($el, selector) {
                    var self = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : true;
                    var $root = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : document;
                    if (self && -1 !== nodeListAsArray($root.querySelectorAll(selector)).indexOf($el)) return $el;
                    while (($el = $el.parentElement) && -1 === nodeListAsArray($root.querySelectorAll(selector)).indexOf($el)) ;
                    return $el;
                };
                var elementHasSelector = function($el, selector) {
                    var $root = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
                    var has = -1 !== nodeListAsArray($root.querySelectorAll(selector)).indexOf($el);
                    return has;
                };
                var elementHasOverflowHidden = function($el) {
                    if ($el) {
                        var computedStyle = getComputedStyle($el);
                        var overflowIsHidden = "hidden" === computedStyle.overflow;
                        return overflowIsHidden;
                    }
                };
                var elementScrollTopOnStart = function($el) {
                    if ($el) {
                        if (elementHasOverflowHidden($el)) return true;
                        var scrollTop = $el.scrollTop;
                        return scrollTop <= 0;
                    }
                };
                var elementScrollTopOnEnd = function($el) {
                    if ($el) {
                        if (elementHasOverflowHidden($el)) return true;
                        var scrollTop = $el.scrollTop;
                        var scrollHeight = $el.scrollHeight;
                        var scrollTopWithHeight = scrollTop + $el.offsetHeight;
                        return scrollTopWithHeight >= scrollHeight;
                    }
                };
                var elementScrollLeftOnStart = function($el) {
                    if ($el) {
                        if (elementHasOverflowHidden($el)) return true;
                        var scrollLeft = $el.scrollLeft;
                        return scrollLeft <= 0;
                    }
                };
                var elementScrollLeftOnEnd = function($el) {
                    if ($el) {
                        if (elementHasOverflowHidden($el)) return true;
                        var scrollLeft = $el.scrollLeft;
                        var scrollWidth = $el.scrollWidth;
                        var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
                        return scrollLeftWithWidth >= scrollWidth;
                    }
                };
                var elementIsScrollableField = function($el) {
                    var selector = 'textarea, [contenteditable="true"]';
                    return elementHasSelector($el, selector);
                };
                var elementIsInputRange = function($el) {
                    var selector = 'input[type="range"]';
                    return elementHasSelector($el, selector);
                };
                __nested_webpack_require_5303__.d(__webpack_exports__, "disablePageScroll", (function() {
                    return disablePageScroll;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "enablePageScroll", (function() {
                    return enablePageScroll;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "getScrollState", (function() {
                    return getScrollState;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "clearQueueScrollLocks", (function() {
                    return clearQueueScrollLocks;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "getTargetScrollBarWidth", (function() {
                    return scroll_lock_getTargetScrollBarWidth;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", (function() {
                    return scroll_lock_getCurrentTargetScrollBarWidth;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "getPageScrollBarWidth", (function() {
                    return getPageScrollBarWidth;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", (function() {
                    return getCurrentPageScrollBarWidth;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addScrollableTarget", (function() {
                    return scroll_lock_addScrollableTarget;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "removeScrollableTarget", (function() {
                    return scroll_lock_removeScrollableTarget;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addScrollableSelector", (function() {
                    return scroll_lock_addScrollableSelector;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "removeScrollableSelector", (function() {
                    return scroll_lock_removeScrollableSelector;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addLockableTarget", (function() {
                    return scroll_lock_addLockableTarget;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addLockableSelector", (function() {
                    return scroll_lock_addLockableSelector;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "setFillGapMethod", (function() {
                    return scroll_lock_setFillGapMethod;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addFillGapTarget", (function() {
                    return scroll_lock_addFillGapTarget;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "removeFillGapTarget", (function() {
                    return scroll_lock_removeFillGapTarget;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "addFillGapSelector", (function() {
                    return scroll_lock_addFillGapSelector;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "removeFillGapSelector", (function() {
                    return scroll_lock_removeFillGapSelector;
                }));
                __nested_webpack_require_5303__.d(__webpack_exports__, "refillGaps", (function() {
                    return refillGaps;
                }));
                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        var ownKeys = Object.keys(source);
                        if ("function" === typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym) {
                            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                        })));
                        ownKeys.forEach((function(key) {
                            _defineProperty(target, key, source[key]);
                        }));
                    }
                    return target;
                }
                function _defineProperty(obj, key, value) {
                    if (key in obj) Object.defineProperty(obj, key, {
                        value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    }); else obj[key] = value;
                    return obj;
                }
                var FILL_GAP_AVAILABLE_METHODS = [ "padding", "margin", "width", "max-width", "none" ];
                var TOUCH_DIRECTION_DETECT_OFFSET = 3;
                var state = {
                    scroll: true,
                    queue: 0,
                    scrollableSelectors: [ "[data-scroll-lock-scrollable]" ],
                    lockableSelectors: [ "body", "[data-scroll-lock-lockable]" ],
                    fillGapSelectors: [ "body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]" ],
                    fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
                    startTouchY: 0,
                    startTouchX: 0
                };
                var disablePageScroll = function(target) {
                    if (state.queue <= 0) {
                        state.scroll = false;
                        scroll_lock_hideLockableOverflow();
                        fillGaps();
                    }
                    scroll_lock_addScrollableTarget(target);
                    state.queue++;
                };
                var enablePageScroll = function(target) {
                    state.queue > 0 && state.queue--;
                    if (state.queue <= 0) {
                        state.scroll = true;
                        scroll_lock_showLockableOverflow();
                        unfillGaps();
                    }
                    scroll_lock_removeScrollableTarget(target);
                };
                var getScrollState = function() {
                    return state.scroll;
                };
                var clearQueueScrollLocks = function() {
                    state.queue = 0;
                };
                var scroll_lock_getTargetScrollBarWidth = function($target) {
                    var onlyExists = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    if (isElement($target)) {
                        var currentOverflowYProperty = $target.style.overflowY;
                        if (onlyExists) {
                            if (!getScrollState()) $target.style.overflowY = $target.getAttribute("data-scroll-lock-saved-overflow-y-property");
                        } else $target.style.overflowY = "scroll";
                        var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
                        $target.style.overflowY = currentOverflowYProperty;
                        return width;
                    } else return 0;
                };
                var scroll_lock_getCurrentTargetScrollBarWidth = function($target) {
                    if (isElement($target)) if ($target === document.body) {
                        var documentWidth = document.documentElement.clientWidth;
                        var windowWidth = window.innerWidth;
                        var currentWidth = windowWidth - documentWidth;
                        return currentWidth;
                    } else {
                        var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
                        var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
                        $target.style.borderLeftWidth = "0px";
                        $target.style.borderRightWidth = "0px";
                        var _currentWidth = $target.offsetWidth - $target.clientWidth;
                        $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
                        $target.style.borderRightWidth = borderRightWidthCurrentProperty;
                        return _currentWidth;
                    } else return 0;
                };
                var getPageScrollBarWidth = function() {
                    var onlyExists = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : false;
                    return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
                };
                var getCurrentPageScrollBarWidth = function() {
                    return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
                };
                var scroll_lock_addScrollableTarget = function(target) {
                    if (target) {
                        var targets = argumentAsArray(target);
                        targets.map((function($targets) {
                            eachNode($targets, (function($target) {
                                if (isElement($target)) $target.setAttribute("data-scroll-lock-scrollable", ""); else throwError('"'.concat($target, '" is not a Element.'));
                            }));
                        }));
                    }
                };
                var scroll_lock_removeScrollableTarget = function(target) {
                    if (target) {
                        var targets = argumentAsArray(target);
                        targets.map((function($targets) {
                            eachNode($targets, (function($target) {
                                if (isElement($target)) $target.removeAttribute("data-scroll-lock-scrollable"); else throwError('"'.concat($target, '" is not a Element.'));
                            }));
                        }));
                    }
                };
                var scroll_lock_addScrollableSelector = function(selector) {
                    if (selector) {
                        var selectors = argumentAsArray(selector);
                        selectors.map((function(selector) {
                            state.scrollableSelectors.push(selector);
                        }));
                    }
                };
                var scroll_lock_removeScrollableSelector = function(selector) {
                    if (selector) {
                        var selectors = argumentAsArray(selector);
                        selectors.map((function(selector) {
                            state.scrollableSelectors = state.scrollableSelectors.filter((function(sSelector) {
                                return sSelector !== selector;
                            }));
                        }));
                    }
                };
                var scroll_lock_addLockableTarget = function(target) {
                    if (target) {
                        var targets = argumentAsArray(target);
                        targets.map((function($targets) {
                            eachNode($targets, (function($target) {
                                if (isElement($target)) $target.setAttribute("data-scroll-lock-lockable", ""); else throwError('"'.concat($target, '" is not a Element.'));
                            }));
                        }));
                        if (!getScrollState()) scroll_lock_hideLockableOverflow();
                    }
                };
                var scroll_lock_addLockableSelector = function(selector) {
                    if (selector) {
                        var selectors = argumentAsArray(selector);
                        selectors.map((function(selector) {
                            state.lockableSelectors.push(selector);
                        }));
                        if (!getScrollState()) scroll_lock_hideLockableOverflow();
                        scroll_lock_addFillGapSelector(selector);
                    }
                };
                var scroll_lock_setFillGapMethod = function(method) {
                    if (method) if (-1 !== FILL_GAP_AVAILABLE_METHODS.indexOf(method)) {
                        state.fillGapMethod = method;
                        refillGaps();
                    } else {
                        var methods = FILL_GAP_AVAILABLE_METHODS.join(", ");
                        throwError('"'.concat(method, '" method is not available!\nAvailable fill gap methods: ').concat(methods, "."));
                    }
                };
                var scroll_lock_addFillGapTarget = function(target) {
                    if (target) {
                        var targets = argumentAsArray(target);
                        targets.map((function($targets) {
                            eachNode($targets, (function($target) {
                                if (isElement($target)) {
                                    $target.setAttribute("data-scroll-lock-fill-gap", "");
                                    if (!state.scroll) scroll_lock_fillGapTarget($target);
                                } else throwError('"'.concat($target, '" is not a Element.'));
                            }));
                        }));
                    }
                };
                var scroll_lock_removeFillGapTarget = function(target) {
                    if (target) {
                        var targets = argumentAsArray(target);
                        targets.map((function($targets) {
                            eachNode($targets, (function($target) {
                                if (isElement($target)) {
                                    $target.removeAttribute("data-scroll-lock-fill-gap");
                                    if (!state.scroll) scroll_lock_unfillGapTarget($target);
                                } else throwError('"'.concat($target, '" is not a Element.'));
                            }));
                        }));
                    }
                };
                var scroll_lock_addFillGapSelector = function(selector) {
                    if (selector) {
                        var selectors = argumentAsArray(selector);
                        selectors.map((function(selector) {
                            if (-1 === state.fillGapSelectors.indexOf(selector)) {
                                state.fillGapSelectors.push(selector);
                                if (!state.scroll) scroll_lock_fillGapSelector(selector);
                            }
                        }));
                    }
                };
                var scroll_lock_removeFillGapSelector = function(selector) {
                    if (selector) {
                        var selectors = argumentAsArray(selector);
                        selectors.map((function(selector) {
                            state.fillGapSelectors = state.fillGapSelectors.filter((function(fSelector) {
                                return fSelector !== selector;
                            }));
                            if (!state.scroll) scroll_lock_unfillGapSelector(selector);
                        }));
                    }
                };
                var refillGaps = function() {
                    if (!state.scroll) fillGaps();
                };
                var scroll_lock_hideLockableOverflow = function() {
                    var selector = arrayAsSelector(state.lockableSelectors);
                    scroll_lock_hideLockableOverflowSelector(selector);
                };
                var scroll_lock_showLockableOverflow = function() {
                    var selector = arrayAsSelector(state.lockableSelectors);
                    scroll_lock_showLockableOverflowSelector(selector);
                };
                var scroll_lock_hideLockableOverflowSelector = function(selector) {
                    var $targets = document.querySelectorAll(selector);
                    eachNode($targets, (function($target) {
                        scroll_lock_hideLockableOverflowTarget($target);
                    }));
                };
                var scroll_lock_showLockableOverflowSelector = function(selector) {
                    var $targets = document.querySelectorAll(selector);
                    eachNode($targets, (function($target) {
                        scroll_lock_showLockableOverflowTarget($target);
                    }));
                };
                var scroll_lock_hideLockableOverflowTarget = function($target) {
                    if (isElement($target) && "true" !== $target.getAttribute("data-scroll-lock-locked")) {
                        var computedStyle = window.getComputedStyle($target);
                        $target.setAttribute("data-scroll-lock-saved-overflow-y-property", computedStyle.overflowY);
                        $target.setAttribute("data-scroll-lock-saved-inline-overflow-property", $target.style.overflow);
                        $target.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", $target.style.overflowY);
                        $target.style.overflow = "hidden";
                        $target.setAttribute("data-scroll-lock-locked", "true");
                    }
                };
                var scroll_lock_showLockableOverflowTarget = function($target) {
                    if (isElement($target) && "true" === $target.getAttribute("data-scroll-lock-locked")) {
                        $target.style.overflow = $target.getAttribute("data-scroll-lock-saved-inline-overflow-property");
                        $target.style.overflowY = $target.getAttribute("data-scroll-lock-saved-inline-overflow-y-property");
                        $target.removeAttribute("data-scroll-lock-saved-overflow-property");
                        $target.removeAttribute("data-scroll-lock-saved-inline-overflow-property");
                        $target.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property");
                        $target.removeAttribute("data-scroll-lock-locked");
                    }
                };
                var fillGaps = function() {
                    state.fillGapSelectors.map((function(selector) {
                        scroll_lock_fillGapSelector(selector);
                    }));
                };
                var unfillGaps = function() {
                    state.fillGapSelectors.map((function(selector) {
                        scroll_lock_unfillGapSelector(selector);
                    }));
                };
                var scroll_lock_fillGapSelector = function(selector) {
                    var $targets = document.querySelectorAll(selector);
                    var isLockable = -1 !== state.lockableSelectors.indexOf(selector);
                    eachNode($targets, (function($target) {
                        scroll_lock_fillGapTarget($target, isLockable);
                    }));
                };
                var scroll_lock_fillGapTarget = function($target) {
                    var isLockable = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    if (isElement($target)) {
                        var scrollBarWidth;
                        if ("" === $target.getAttribute("data-scroll-lock-lockable") || isLockable) scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true); else {
                            var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
                            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
                        }
                        if ("true" === $target.getAttribute("data-scroll-lock-filled-gap")) scroll_lock_unfillGapTarget($target);
                        var computedStyle = window.getComputedStyle($target);
                        $target.setAttribute("data-scroll-lock-filled-gap", "true");
                        $target.setAttribute("data-scroll-lock-current-fill-gap-method", state.fillGapMethod);
                        if ("margin" === state.fillGapMethod) {
                            var currentMargin = parseFloat(computedStyle.marginRight);
                            $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
                        } else if ("width" === state.fillGapMethod) $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)"); else if ("max-width" === state.fillGapMethod) $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)"); else if ("padding" === state.fillGapMethod) {
                            var currentPadding = parseFloat(computedStyle.paddingRight);
                            $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
                        }
                    }
                };
                var scroll_lock_unfillGapSelector = function(selector) {
                    var $targets = document.querySelectorAll(selector);
                    eachNode($targets, (function($target) {
                        scroll_lock_unfillGapTarget($target);
                    }));
                };
                var scroll_lock_unfillGapTarget = function($target) {
                    if (isElement($target)) if ("true" === $target.getAttribute("data-scroll-lock-filled-gap")) {
                        var currentFillGapMethod = $target.getAttribute("data-scroll-lock-current-fill-gap-method");
                        $target.removeAttribute("data-scroll-lock-filled-gap");
                        $target.removeAttribute("data-scroll-lock-current-fill-gap-method");
                        if ("margin" === currentFillGapMethod) $target.style.marginRight = ""; else if ("width" === currentFillGapMethod) $target.style.width = ""; else if ("max-width" === currentFillGapMethod) $target.style.maxWidth = ""; else if ("padding" === currentFillGapMethod) $target.style.paddingRight = "";
                    }
                };
                var onResize = function(e) {
                    refillGaps();
                };
                var onTouchStart = function(e) {
                    if (!state.scroll) {
                        state.startTouchY = e.touches[0].clientY;
                        state.startTouchX = e.touches[0].clientX;
                    }
                };
                var scroll_lock_onTouchMove = function(e) {
                    if (!state.scroll) {
                        var startTouchY = state.startTouchY, startTouchX = state.startTouchX;
                        var currentClientY = e.touches[0].clientY;
                        var currentClientX = e.touches[0].clientX;
                        if (e.touches.length < 2) {
                            var selector = arrayAsSelector(state.scrollableSelectors);
                            var direction = {
                                up: startTouchY < currentClientY,
                                down: startTouchY > currentClientY,
                                left: startTouchX < currentClientX,
                                right: startTouchX > currentClientX
                            };
                            var directionWithOffset = {
                                up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
                                down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
                                left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
                                right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
                            };
                            var handle = function handle($el) {
                                var skip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                                if ($el) {
                                    var parentScrollableEl = findParentBySelector($el, selector, false);
                                    if (elementIsInputRange($el)) return false;
                                    if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
                                        var prevent = false;
                                        if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
                                            if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) prevent = true;
                                        } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
                                            if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) prevent = true;
                                        } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) prevent = true;
                                        if (prevent) if (parentScrollableEl) handle(parentScrollableEl, true); else if (e.cancelable) e.preventDefault();
                                    } else handle(parentScrollableEl);
                                } else if (e.cancelable) e.preventDefault();
                            };
                            handle(e.target);
                        }
                    }
                };
                var onTouchEnd = function(e) {
                    if (!state.scroll) {
                        state.startTouchY = 0;
                        state.startTouchX = 0;
                    }
                };
                if ("undefined" !== typeof window) window.addEventListener("resize", onResize);
                if ("undefined" !== typeof document) {
                    document.addEventListener("touchstart", onTouchStart);
                    document.addEventListener("touchmove", scroll_lock_onTouchMove, {
                        passive: false
                    });
                    document.addEventListener("touchend", onTouchEnd);
                }
                var deprecatedMethods = {
                    hide: function(target) {
                        throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
                        disablePageScroll(target);
                    },
                    show: function(target) {
                        throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
                        enablePageScroll(target);
                    },
                    toggle: function(target) {
                        throwError('"toggle" is deprecated! Do not use it.');
                        if (getScrollState()) disablePageScroll(); else enablePageScroll(target);
                    },
                    getState: function() {
                        throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
                        return getScrollState();
                    },
                    getWidth: function() {
                        throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
                        return getPageScrollBarWidth();
                    },
                    getCurrentWidth: function() {
                        throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
                        return getCurrentPageScrollBarWidth();
                    },
                    setScrollableTargets: function(target) {
                        throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
                        scroll_lock_addScrollableTarget(target);
                    },
                    setFillGapSelectors: function(selector) {
                        throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
                        scroll_lock_addFillGapSelector(selector);
                    },
                    setFillGapTargets: function(target) {
                        throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
                        scroll_lock_addFillGapTarget(target);
                    },
                    clearQueue: function() {
                        throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
                        clearQueueScrollLocks();
                    }
                };
                var scrollLock = _objectSpread({
                    disablePageScroll,
                    enablePageScroll,
                    getScrollState,
                    clearQueueScrollLocks,
                    getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
                    getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
                    getPageScrollBarWidth,
                    getCurrentPageScrollBarWidth,
                    addScrollableSelector: scroll_lock_addScrollableSelector,
                    removeScrollableSelector: scroll_lock_removeScrollableSelector,
                    addScrollableTarget: scroll_lock_addScrollableTarget,
                    removeScrollableTarget: scroll_lock_removeScrollableTarget,
                    addLockableSelector: scroll_lock_addLockableSelector,
                    addLockableTarget: scroll_lock_addLockableTarget,
                    addFillGapSelector: scroll_lock_addFillGapSelector,
                    removeFillGapSelector: scroll_lock_removeFillGapSelector,
                    addFillGapTarget: scroll_lock_addFillGapTarget,
                    removeFillGapTarget: scroll_lock_removeFillGapTarget,
                    setFillGapMethod: scroll_lock_setFillGapMethod,
                    refillGaps,
                    _state: state
                }, deprecatedMethods);
                __webpack_exports__["default"] = scrollLock;
            } ])["default"];
        }));
    },
    "../shared/browser/node_modules/split-on-first/index.js": module => {
        "use strict";
        module.exports = (string, separator) => {
            if (!("string" === typeof string && "string" === typeof separator)) throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === separator) return [ string ];
            const separatorIndex = string.indexOf(separator);
            if (-1 === separatorIndex) return [ string ];
            return [ string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length) ];
        };
    },
    "../shared/browser/node_modules/strict-uri-encode/index.js": module => {
        "use strict";
        module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, (x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`));
    },
    "../shared/browser/node_modules/uuid/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var v1 = __webpack_require__("../shared/browser/node_modules/uuid/v1.js");
        var v4 = __webpack_require__("../shared/browser/node_modules/uuid/v4.js");
        var uuid = v4;
        uuid.v1 = v1;
        uuid.v4 = v4;
        module.exports = uuid;
    },
    "../shared/browser/node_modules/uuid/lib/bytesToUuid.js": module => {
        var byteToHex = [];
        for (var i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).substr(1);
        function bytesToUuid(buf, offset) {
            var i = offset || 0;
            var bth = byteToHex;
            return [ bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], "-", bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]] ].join("");
        }
        module.exports = bytesToUuid;
    },
    "../shared/browser/node_modules/uuid/lib/rng-browser.js": module => {
        var getRandomValues = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (getRandomValues) {
            var rnds8 = new Uint8Array(16);
            module.exports = function() {
                getRandomValues(rnds8);
                return rnds8;
            };
        } else {
            var rnds = new Array(16);
            module.exports = function() {
                for (var r, i = 0; i < 16; i++) {
                    if (0 === (3 & i)) r = 4294967296 * Math.random();
                    rnds[i] = r >>> ((3 & i) << 3) & 255;
                }
                return rnds;
            };
        }
    },
    "../shared/browser/node_modules/uuid/v1.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var rng = __webpack_require__("../shared/browser/node_modules/uuid/lib/rng-browser.js");
        var bytesToUuid = __webpack_require__("../shared/browser/node_modules/uuid/lib/bytesToUuid.js");
        var _nodeId;
        var _clockseq;
        var _lastMSecs = 0;
        var _lastNSecs = 0;
        function v1(options, buf, offset) {
            var i = buf && offset || 0;
            var b = buf || [];
            options = options || {};
            var node = options.node || _nodeId;
            var clockseq = void 0 !== options.clockseq ? options.clockseq : _clockseq;
            if (null == node || null == clockseq) {
                var seedBytes = rng();
                if (null == node) node = _nodeId = [ 1 | seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5] ];
                if (null == clockseq) clockseq = _clockseq = 16383 & (seedBytes[6] << 8 | seedBytes[7]);
            }
            var msecs = void 0 !== options.msecs ? options.msecs : (new Date).getTime();
            var nsecs = void 0 !== options.nsecs ? options.nsecs : _lastNSecs + 1;
            var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
            if (dt < 0 && void 0 === options.clockseq) clockseq = clockseq + 1 & 16383;
            if ((dt < 0 || msecs > _lastMSecs) && void 0 === options.nsecs) nsecs = 0;
            if (nsecs >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            _lastMSecs = msecs;
            _lastNSecs = nsecs;
            _clockseq = clockseq;
            msecs += 122192928e5;
            var tl = (1e4 * (268435455 & msecs) + nsecs) % 4294967296;
            b[i++] = tl >>> 24 & 255;
            b[i++] = tl >>> 16 & 255;
            b[i++] = tl >>> 8 & 255;
            b[i++] = 255 & tl;
            var tmh = msecs / 4294967296 * 1e4 & 268435455;
            b[i++] = tmh >>> 8 & 255;
            b[i++] = 255 & tmh;
            b[i++] = tmh >>> 24 & 15 | 16;
            b[i++] = tmh >>> 16 & 255;
            b[i++] = clockseq >>> 8 | 128;
            b[i++] = 255 & clockseq;
            for (var n = 0; n < 6; ++n) b[i + n] = node[n];
            return buf ? buf : bytesToUuid(b);
        }
        module.exports = v1;
    },
    "../shared/browser/node_modules/uuid/v4.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var rng = __webpack_require__("../shared/browser/node_modules/uuid/lib/rng-browser.js");
        var bytesToUuid = __webpack_require__("../shared/browser/node_modules/uuid/lib/bytesToUuid.js");
        function v4(options, buf, offset) {
            var i = buf && offset || 0;
            if ("string" == typeof options) {
                buf = "binary" === options ? new Array(16) : null;
                options = null;
            }
            options = options || {};
            var rnds = options.random || (options.rng || rng)();
            rnds[6] = 15 & rnds[6] | 64;
            rnds[8] = 63 & rnds[8] | 128;
            if (buf) for (var ii = 0; ii < 16; ++ii) buf[i + ii] = rnds[ii];
            return buf || bytesToUuid(rnds);
        }
        module.exports = v4;
    },
    "../shared/browser/report/common/baseReport.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            findSectionId: () => findSectionId,
            BaseReport: () => BaseReport
        });
        var _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/report/page.js");
        var _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        function findSectionId(selector) {
            if (!selector || !__SL_$__(selector)) return;
            const id = __SL_$__(selector).closest(".shopline-section").attr("id");
            const trueId = id ? id.replace("shopline-section-", "") : "";
            return trueId;
        }
        class BaseReport {
            static getPage() {
                const alias = window.SL_State.get("templateAlias");
                const template = window.SL_State.get("template");
                if ("Page" !== alias) return _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_0__["default"][alias] || alias;
                const isCustomPage = template.toLowerCase() === alias.toLowerCase();
                return isCustomPage ? _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_0__["default"].Page.custom_page : _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_0__["default"].Page.smart_landing_page;
            }
            constructor(page) {
                this.page = page || BaseReport.getPage() || "";
            }
            static collect(params) {
                if (!window.HdSdk) return;
                window.HdSdk.shopTracker.collect(params);
            }
            static expose(params) {
                if (!window.HdSdk) return;
                window.HdSdk.shopTracker.expose(params);
            }
            click(customParams) {
                if (!window.HdSdk) return;
                const params = {
                    page: this.page,
                    action_type: 102,
                    event_name: "Click",
                    ...customParams
                };
                window.HdSdk.shopTracker.collect(params);
            }
            handleView({selector, targetList, threshold, duration, reportOnce, customParams, viewType = "view"}) {
                if (!window.HdSdk) return;
                const commonParams = {
                    page: this.page
                };
                const objectParams = {
                    ...commonParams,
                    ...customParams
                };
                const funcParams = target => {
                    const funcCustomParams = customParams(target);
                    return {
                        ...commonParams,
                        ...funcCustomParams
                    };
                };
                window.HdSdk.shopTracker.expose({
                    selector,
                    targetList,
                    [viewType]: {
                        reportOnce,
                        threshold,
                        duration,
                        params: "function" === typeof customParams ? funcParams : objectParams
                    }
                });
            }
            view({selector, targetList, reportOnce = true, duration, threshold, customParams}) {
                this.handleView({
                    selector,
                    targetList,
                    reportOnce,
                    duration,
                    threshold,
                    customParams,
                    viewType: "view"
                });
            }
            viewSuccess({selector, targetList, threshold = .5, duration = 500, reportOnce = true, customParams}) {
                this.handleView({
                    selector,
                    targetList,
                    reportOnce,
                    duration,
                    threshold,
                    customParams,
                    viewType: "viewSuccess"
                });
            }
            viewContent({selector, targetList, reportOnce, threshold, customParams}) {
                const params = {
                    component: -999,
                    event_name: "ViewContent",
                    action_type: "ViewContent",
                    ...customParams
                };
                this.view({
                    selector,
                    targetList,
                    reportOnce,
                    threshold,
                    customParams: params
                });
            }
            viewItemList({selector, customParams}) {
                const params = {
                    page: this.page,
                    module: -999,
                    component: -999,
                    action_type: "",
                    event_name: "ViewItemList",
                    event_id: `ViewItemList${(0, _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_1__.getEventID)()}`,
                    ...customParams
                };
                this.view({
                    selector,
                    customParams: params
                });
            }
            selectContent({baseParams, customParams}) {
                const pageItemMap = {
                    101: {
                        module: 900,
                        component: 101
                    },
                    102: {
                        module: 109,
                        component: 101,
                        action_type: ""
                    },
                    103: {
                        module: 109,
                        component: 101
                    },
                    105: {
                        module: 108,
                        component: 101
                    }
                };
                const params = {
                    page: this.page,
                    event_name: "SelectContent",
                    current_source_page: BaseReport.getPage(),
                    ...pageItemMap[this.page],
                    ...baseParams,
                    ...customParams
                };
                BaseReport.collect(params);
            }
            searchResults({baseParams, customParams}) {
                const params = {
                    page: this.page,
                    module: -999,
                    component: -999,
                    action_type: "",
                    event_name: "SearchResults",
                    ...baseParams,
                    ...customParams
                };
                BaseReport.collect(params);
            }
        }
    },
    "../shared/browser/report/stage/const.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            sectionTypeEnum: () => sectionTypeEnum,
            virtualComponentEnum: () => virtualComponentEnum,
            virtualPageEnum: () => virtualPageEnum
        });
        const sectionTypeEnum = {
            header: "页头",
            footer: "页脚",
            "collection-list": "商品分类",
            "custom-html": "自定义HTML",
            faqs: "常见问题",
            "featured-collection": "精选商品",
            "image-with-text": "图文模块",
            "large-image-with-text-box": "单图",
            "logo-list": "图标申明",
            slideshow: "轮播图",
            "text-columns-with-images": "图文列表",
            video: "视频",
            "footer-promotion": "页脚推广",
            "featured-product": "单个商品",
            "rich-text": "富文本",
            "sign-up-and-save": "邮箱订阅",
            "icon-list": "商标列表",
            "promotion-grid": "活动推广",
            "split-slideshow": "特色轮播图",
            grid: "图文网格",
            mosaic: "特色推荐",
            "multilevel-filter": "多级筛选",
            "shoppable-image": "购物图片",
            testimonials: "评论模块",
            timeline: "时间线",
            blog: "博客",
            "contact-form": "联系我们表单",
            "image-banner": "图片横幅",
            "multi-media-splicing": "媒体拼接",
            "custom-page": "自定义页面",
            map: "地图",
            "carousel-collection-list": "轮播商品分类",
            "carousel-images-with-text": "图文轮播",
            "featured-logo-list": "特色图标申明",
            "collection-with-image": "带封面的精选商品",
            offers: "优惠横幅"
        };
        const virtualComponentEnum = {
            user: 101,
            cart: 102,
            search: 103,
            localeItem: 104,
            locale: 105,
            currencyItem: 106,
            currency: 107,
            navItem: 108,
            announcement: 109,
            socialItem: 110,
            newsletter: 111
        };
        const virtualPageEnum = {
            fixedSction: 132,
            dynamicSection: 145
        };
    },
    "../shared/browser/report/stage/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            StageReport: () => StageReport
        });
        var baseReport = __webpack_require__("../shared/browser/report/common/baseReport.js");
        class InputReport {
            constructor({selector, params}) {
                this.$el = __SL_$__(selector);
                this.params = params;
                this.changed = false;
                this.init();
            }
            init() {
                this.bindInput();
                this.bindBlur();
            }
            bindInput() {
                this.$el.on("input", (() => {
                    this.changed = true;
                }));
            }
            bindBlur() {
                this.$el.on("blur", (e => {
                    if (!this.changed || !window.HdSdk) return;
                    const params = {
                        ...this.params,
                        component_ID: (0, baseReport.findSectionId)(e.target)
                    };
                    window.HdSdk.shopTracker.collect(params);
                    this.changed = false;
                }));
            }
        }
        class HoverReport {
            constructor({selector, params}) {
                this.$el = __SL_$__(selector);
                this.params = params;
                this.init();
            }
            init() {
                this.bindMouseenter();
            }
            bindMouseenter() {
                this.$el.on("mouseenter", (e => {
                    const $target = __SL_$__(e.target);
                    const isTarget = $target.attr("class") === this.$el.attr("class");
                    if (!isTarget) return;
                    const params = {
                        ...this.params,
                        component_ID: (0, baseReport.findSectionId)(e.target)
                    };
                    window.HdSdk && window.HdSdk.shopTracker.collect(params);
                    this.changed = false;
                }));
            }
        }
        var stage_const = __webpack_require__("../shared/browser/report/stage/const.js");
        class StageReport extends baseReport.BaseReport {
            constructor() {
                super();
                this.defaultParams = {
                    current_source_page: baseReport.BaseReport.getPage()
                };
                this.inputReportMap = {};
                this.hoverReportMap = {};
            }
            click(params) {
                super.click({
                    ...this.defaultParams,
                    ...params
                });
            }
            expose({selector, moreInfo}) {
                const $els = __SL_$__(selector);
                if (!$els.length) return;
                const paramsFn = target => {
                    const id = (0, baseReport.findSectionId)(target);
                    const params = {
                        component_ID: id,
                        ...this.defaultParams,
                        ...moreInfo
                    };
                    return params;
                };
                const view = {
                    reportOnce: true,
                    threshold: 0,
                    params: paramsFn
                };
                const viewSuccess = {
                    reportOnce: true,
                    threshold: .5,
                    duration: 500,
                    params: paramsFn
                };
                baseReport.BaseReport.expose({
                    targetList: document.querySelectorAll(selector),
                    view,
                    viewSuccess
                });
            }
            bindFallbackClick({wrapperSel, targetSel, fallbackSel, moreInfo}) {
                __SL_$__(wrapperSel).on("click", (e => {
                    const id = (0, baseReport.findSectionId)(e.target);
                    const params = {
                        component_ID: id,
                        ...this.defaultParams,
                        ...moreInfo
                    };
                    const $target = __SL_$__(e.target);
                    const $wrapper = $target.closest(wrapperSel);
                    const hasTarget = $wrapper.find(targetSel).length > 0;
                    const clickOnTarget = $target.closest(targetSel).length > 0;
                    const clickOnFallback = $target.closest(fallbackSel).length > 0;
                    if (hasTarget && !clickOnTarget) return;
                    if (!hasTarget && clickOnFallback) {
                        this.click(params);
                        return;
                    }
                    if (clickOnTarget) this.click(params);
                }));
            }
            bindClick({selector, moreInfo, customHandler}) {
                if (!selector) return;
                __SL_$__(document.body).on("click", selector, (e => {
                    const id = (0, baseReport.findSectionId)(e.target);
                    const params = {
                        component_ID: id,
                        ...this.defaultParams,
                        ...moreInfo
                    };
                    if (customHandler) customHandler(e, params); else this.click(params);
                }));
            }
            bindInput({selector, type = "", moreInfo}) {
                const params = {
                    ...this.defaultParams,
                    module_type: stage_const.sectionTypeEnum[type] || type,
                    action_type: 103,
                    event_name: "Input",
                    ...moreInfo
                };
                const instance = new InputReport({
                    selector,
                    params
                });
                this.inputReportMap[selector] = instance;
            }
            bindHover({selector, type = ""}) {
                const params = {
                    ...this.defaultParams,
                    module_type: stage_const.sectionTypeEnum[type] || type,
                    action_type: 109,
                    event_name: "Hover"
                };
                const instance = new HoverReport({
                    selector,
                    params
                });
                this.hoverReportMap[selector] = instance;
            }
            collect(params) {
                window.HdSdk && window.HdSdk.shopTracker.collect({
                    ...this.defaultParams,
                    ...params
                });
            }
        }
    },
    "../shared/browser/utils/checkout.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/logger/index.js");
        var _createLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/createLogger.js");
        var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/request.js");
        var _state_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        var _url_adaptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/url-adaptor.js");
        var _tradeReport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/tradeReport/index.js");
        var _tradeReport_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/browser/utils/tradeReport/const.js");
        var _event_bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _dataAccessor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        const {GO_TO_CHECKOUT} = _tradeReport_const__WEBPACK_IMPORTED_MODULE_6__.HD_EVENT_NAME;
        function isJsonParse(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
        const helperConsole = {
            checkout: (0, _createLogger__WEBPACK_IMPORTED_MODULE_1__["default"])("checkout")
        };
        const logger = _yy_sl_theme_shared_utils_logger__WEBPACK_IMPORTED_MODULE_0__["default"].pipeOwner({
            owner: "checkout",
            onTag: key => {
                switch (key) {
                  case "orderFrom":
                  case "code":
                    return true;

                  default:
                    return false;
                }
            }
        });
        const services = {
            save: async (products, {associateCart = false, useMemberPoint = null, discountCode = null, bundledActivitySeq = null, orderFrom = null, dataReportReq} = {}) => _request__WEBPACK_IMPORTED_MODULE_2__["default"].post("/trade/center/order/abandoned/save", {
                products,
                associateCart,
                discountCode,
                bundledActivitySeq,
                useMemberPoint,
                orderFrom,
                dataReportReq
            })
        };
        const RouterPath = {
            SignIn: "/user/signIn",
            Checkout: "/trade/checkout",
            Checkouts: "/checkouts"
        };
        const ADD_TO_CART_EVENT_KEY = "Symbol(ADD_TO_CART)";
        const getCheckoutUrl = (data, {query = {}, associateCart, abandonedOrderMark = ""} = {}) => {
            const urlPrefix = `${window.location.protocol}//${window.location.host}`;
            const {storeId, checkoutToken, seq} = data;
            const {url} = (0, _url_adaptor__WEBPACK_IMPORTED_MODULE_4__.adaptor)(checkoutToken ? `${urlPrefix}/${storeId}${RouterPath.Checkouts}/${checkoutToken}` : `${urlPrefix}${RouterPath.Checkout}/${seq}`, {
                query: {
                    buyScence: associateCart ? "cart" : "detail",
                    ...query,
                    mark: abandonedOrderMark
                },
                fullQuery: false
            });
            return url;
        };
        const save = async (products, extra = {}) => {
            const {stage, query = {}, associateCart = false, abandonedOrderSeq, abandonedOrderMark} = extra;
            try {
                const settleConfig = _state_selector__WEBPACK_IMPORTED_MODULE_3__.SL_State.get("tradeSettleConfig");
                const isLogin = _state_selector__WEBPACK_IMPORTED_MODULE_3__.SL_State.get("request.cookie.osudb_uid");
                const {onBeforeJump, report, needReport, reportParamsExt, abandonedOrderSeq, abandonedOrderMark} = extra;
                const needLogin = settleConfig && "ONLY_LOGIN" === settleConfig.loginType;
                const {discountCode, ...rest} = extra;
                let _discountCode = discountCode;
                if (!associateCart) {
                    const tradeExtraInfoStr = sessionStorage.getItem("tradeExtraInfo");
                    const tradeExtraInfo = isJsonParse(tradeExtraInfoStr) ? JSON.parse(tradeExtraInfoStr) : {};
                    _discountCode = tradeExtraInfo && tradeExtraInfo.discountCode && tradeExtraInfo.discountCode.value;
                }
                const reqParams = {
                    associateCart,
                    discountCode: _discountCode,
                    orderFrom: (0, _dataAccessor__WEBPACK_IMPORTED_MODULE_8__.getSyncData)("orderFrom"),
                    dataReportReq: reportParamsExt,
                    ...rest
                };
                if (!abandonedOrderSeq) {
                    const isDismissParams = [ "orderFrom" ].some((key => !reqParams[key] && 0 !== reqParams[key]));
                    if (isDismissParams) logger.info("[成单请求参数缺失，请检查]", {
                        ...reqParams
                    });
                    logger.debug("[成单请求参数初始化]", {
                        ...reqParams
                    });
                }
                const response = abandonedOrderSeq ? await Promise.resolve({
                    data: {
                        seq: abandonedOrderSeq,
                        mark: abandonedOrderMark
                    }
                }) : await services.save(products, reqParams);
                logger.debug("[成单请求响应数据]", {
                    ...response && response.data
                });
                helperConsole.checkout.info({
                    ...response && response.data
                });
                const redirectToSignIn = !isLogin && needLogin;
                const checkoutUrl = getCheckoutUrl({
                    storeId: _state_selector__WEBPACK_IMPORTED_MODULE_3__.SL_State.get("storeInfo.storeId"),
                    checkoutToken: response.data.checkoutToken,
                    seq: response.data.seq
                }, {
                    query: {
                        ...query,
                        spb: redirectToSignIn ? null : query.spb
                    },
                    abandonedOrderMark,
                    associateCart
                });
                _event_bus__WEBPACK_IMPORTED_MODULE_7__.SL_EventBus.emit(GO_TO_CHECKOUT, {
                    data: {
                        event_status: response && response.data && response.data.seq ? _tradeReport_const__WEBPACK_IMPORTED_MODULE_6__.hiidoEventStatus.SUCCESS : _tradeReport_const__WEBPACK_IMPORTED_MODULE_6__.hiidoEventStatus.ERROR,
                        stage,
                        isCart: associateCart,
                        products,
                        spb: query && query.spb
                    }
                });
                (0, _tradeReport__WEBPACK_IMPORTED_MODULE_5__.setIniiateCheckout)(response.data.seq, needReport);
                const urlPrefix = `${window.location.protocol}//${window.location.host}`;
                if (redirectToSignIn) {
                    const {url} = (0, _url_adaptor__WEBPACK_IMPORTED_MODULE_4__.adaptor)(`${urlPrefix}${RouterPath.SignIn}`, {
                        query: {
                            redirectUrl: checkoutUrl
                        },
                        fullQuery: false
                    });
                    "function" === typeof onBeforeJump && onBeforeJump();
                    try {
                        (0, _tradeReport__WEBPACK_IMPORTED_MODULE_5__.reportCheckout)({
                            products,
                            isCart: associateCart,
                            report
                        });
                        if (associateCart) window.SL_EventBus && window.SL_EventBus.emit("global:hdReport:exit", [ "60006254", {
                            event_name: "999",
                            page_dest: `${window.location.href}`
                        } ]);
                    } catch (e) {
                        console.log(e);
                    }
                    return Promise.resolve({
                        ...response.data,
                        url,
                        needLogin
                    });
                }
                "function" === typeof onBeforeJump && onBeforeJump();
                try {
                    (0, _tradeReport__WEBPACK_IMPORTED_MODULE_5__.reportCheckout)({
                        products,
                        isCart: associateCart,
                        report,
                        needReport
                    });
                    if (associateCart && "/cart" === window.location.pathname) window.SL_EventBus && window.SL_EventBus.emit("global:hdReport:exit", [ "60006254", {
                        event_name: "999",
                        page_dest: `${window.location.href}`
                    } ]);
                } catch (e) {
                    helperConsole.checkout.info(e);
                }
                return Promise.resolve({
                    url: checkoutUrl,
                    needLogin: false,
                    abandonedInfo: response.data
                });
            } catch (error) {
                _event_bus__WEBPACK_IMPORTED_MODULE_7__.SL_EventBus.emit(GO_TO_CHECKOUT, {
                    data: {
                        event_status: 0,
                        stage,
                        isCart: associateCart,
                        products,
                        spb: query && query.spb
                    }
                });
                const {code, message} = error || {};
                logger.error(`[成单请求报错]${code ? `[code: ${code}` : ""}${message ? `[msg: ${message}]` : ""}`, {
                    error,
                    abandonedOrderSeq,
                    abandonedOrderMark
                });
                return Promise.reject(error);
            }
        };
        const jump = async (products, extra = {}) => {
            const {url} = await save(products, extra);
            window.location.href = url;
        };
        let hasBoundAddToCartEvent = false;
        let addToCartEventName;
        const getAddToCartEventName = () => {
            if (addToCartEventName) return addToCartEventName;
            const eventNameList = window.SL_EventBus.eventNames() || [];
            return eventNameList.find((name => name.toString() === ADD_TO_CART_EVENT_KEY));
        };
        const addToCart = data => window.SL_EventBus.emit(getAddToCartEventName(), data);
        if (!hasBoundAddToCartEvent) {
            hasBoundAddToCartEvent = true;
            window.__SL_TRADE_EVENT__ = window.__SL_TRADE_EVENT__ || {};
            window.__SL_TRADE_EVENT__.addToCart = window.__SL_TRADE_EVENT__.addToCart || addToCart;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            jump,
            save
        };
    },
    "../shared/browser/utils/currency/constants.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            HARD_CODE_CONFIG: () => HARD_CODE_CONFIG,
            SYMBOL_HARD_CODE_CONFIG: () => SYMBOL_HARD_CODE_CONFIG,
            CURRENCY_DISPLAY_HARDCODE: () => CURRENCY_DISPLAY_HARDCODE
        });
        const HARD_CODE_CONFIG = [ {
            code: "TWD",
            digit: 0
        }, {
            code: "HUF",
            digit: 0
        }, {
            code: "RUB",
            digit: 0
        }, {
            code: "CVE",
            digit: 0
        }, {
            code: "AFN",
            digit: 2
        }, {
            code: "ALL",
            digit: 2
        }, {
            code: "IRR",
            digit: 2
        }, {
            code: "KPW",
            digit: 2
        }, {
            code: "LAK",
            digit: 2
        }, {
            code: "LBP",
            digit: 2
        }, {
            code: "MMK",
            digit: 2
        }, {
            code: "RSD",
            digit: 2
        }, {
            code: "SLL",
            digit: 2
        }, {
            code: "SOS",
            digit: 2
        }, {
            code: "SYP",
            digit: 2
        }, {
            code: "UYU",
            digit: 2
        }, {
            code: "YER",
            digit: 2
        }, {
            code: "KWD",
            digit: 2
        }, {
            code: "OMR",
            digit: 2
        }, {
            code: "BHD",
            digit: 2
        }, {
            code: "IDR",
            digit: 0
        } ];
        const SYMBOL_HARD_CODE_CONFIG = {
            AUD: {
                en: "zh-hans-cn"
            },
            TWD: {
                "zh-hant-tw": "zh-hant-hk"
            },
            MXN: {
                es: "en"
            },
            CLP: {
                es: "es-CL"
            }
        };
        const CURRENCY_DISPLAY_HARDCODE = {
            PHP: {
                currencyDisplay: "code"
            }
        };
    },
    "../shared/browser/utils/currency/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            convertFormat: () => convertFormat,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/lodash/round.js");
        var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
        var lodash_findIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/lodash/findIndex.js");
        var lodash_findIndex__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_1__);
        var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/node_modules/lodash/find.js");
        var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
        var _syntax_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/currency/constants.js");
        var _state_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        const storeCurrency = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("storeInfo.currency");
        const storeLang = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("request.locale");
        const currencyRates = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("currencyRates");
        const defaultCurrency = "CNY";
        const defaultCurrencyDigit = 2;
        const defaultPresentDigit = 2;
        const defaultLang = "zh-hans-cn";
        const digitsMap = new Map;
        const formatUtilMap = new Map;
        const symbolsMap = new Map;
        const hardcoreConfigs = _constants__WEBPACK_IMPORTED_MODULE_4__.HARD_CODE_CONFIG;
        const hardcodeDigit = code => {
            const hardcoreConfig = hardcoreConfigs.find((config => config.code === code));
            return {
                minimumFractionDigits: (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(hardcoreConfig && hardcoreConfig.digit, void 0),
                maximumFractionDigits: (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(hardcoreConfig && hardcoreConfig.digit, void 0)
            };
        };
        const hardCodeCurrencyDisplay = code => (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(_constants__WEBPACK_IMPORTED_MODULE_4__.CURRENCY_DISPLAY_HARDCODE[code], {});
        const hardCodeSymbol = (code, lang) => {
            const newLang = _constants__WEBPACK_IMPORTED_MODULE_4__.SYMBOL_HARD_CODE_CONFIG[code] && _constants__WEBPACK_IMPORTED_MODULE_4__.SYMBOL_HARD_CODE_CONFIG[code][lang];
            return (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(newLang, lang);
        };
        const formatGenerator = (code, lang) => {
            const realLang = hardCodeSymbol(code, lang);
            return new Intl.NumberFormat(realLang, {
                style: "currency",
                currency: code,
                ...hardCodeCurrencyDisplay(code),
                ...hardcodeDigit(code)
            });
        };
        const cacheKeyGenerator = ({code, lang}) => {
            const countryCode = code && code.toUpperCase();
            const language = lang && lang.toUpperCase();
            if (countryCode && language) return `${countryCode}-${language}`;
            if (countryCode) return countryCode;
            if (language) return language;
        };
        const format = (value, options = {}) => {
            const decimalDigits = defaultCurrencyDigit;
            const code = options && options.code || storeCurrency || defaultCurrency;
            const lang = options && options.lang || storeLang || defaultLang;
            const digits = 10 ** decimalDigits;
            let f = null;
            if (formatUtilMap.get(cacheKeyGenerator({
                code,
                lang
            }))) f = formatUtilMap.get(cacheKeyGenerator({
                code,
                lang
            })); else {
                f = formatGenerator(code, lang);
                formatUtilMap.set(cacheKeyGenerator({
                    code,
                    lang
                }), f);
                digitsMap.set(code, f.resolvedOptions().maximumFractionDigits);
            }
            return f.format(value / digits);
        };
        const covertCalc = (value, from, to, dataSource = {}) => {
            if (from === to) return value;
            const dataSourceTo = dataSource && dataSource[to];
            const dataSourceFrom = dataSource && dataSource[from];
            return value * (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(dataSourceTo, 1) / (0, 
            _syntax_patch__WEBPACK_IMPORTED_MODULE_3__.nullishCoalescingOperator)(dataSourceFrom, 1);
        };
        const convertFormat = (value, options = {}) => {
            const fromDefault = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("storeInfo.currency");
            const toDefault = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("currencyCode");
            const locale = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("request.locale");
            const {from = fromDefault, to = toDefault, lang = locale} = options;
            const data = _state_selector__WEBPACK_IMPORTED_MODULE_5__.SL_State.get("currencyRates");
            const rst = covertCalc(value, from, to, data);
            return format(rst, {
                code: to,
                lang
            });
        };
        const getDigitsByCode = code => {
            if ("number" === typeof digitsMap.get(cacheKeyGenerator({
                code
            }))) return digitsMap.get(cacheKeyGenerator({
                code
            }));
            const digit = formatGenerator(code, "zh-cn").resolvedOptions().maximumFractionDigits;
            digitsMap.set(cacheKeyGenerator({
                code
            }), digit);
            return digit;
        };
        const getSymbolByCode = (code, lang = "zh-cn") => {
            if (symbolsMap.get(cacheKeyGenerator({
                code,
                lang
            }))) return symbolsMap.get(cacheKeyGenerator({
                code,
                lang
            }));
            let symbol = "";
            const format = formatGenerator(code, lang);
            if (format.formatToParts) {
                const findSymbol = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(format.formatToParts(), [ "type", "currency" ]);
                symbol = findSymbol && findSymbol.value;
            } else {
                const realLang = hardCodeSymbol(code, lang);
                const intl = new Intl.NumberFormat(realLang, {
                    style: "currency",
                    currency: code,
                    ...hardCodeCurrencyDisplay(code),
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });
                const newSymbol = intl.format(0).replace("0", "");
                symbol = newSymbol && newSymbol.trim();
            }
            symbolsMap.set(cacheKeyGenerator({
                code,
                lang
            }), symbol);
            return symbol;
        };
        const getSymbolOrderByCode = (code, lang = "zh-cn") => {
            let order = 0;
            const format = formatGenerator(code, lang);
            if (format.formatToParts) order = lodash_findIndex__WEBPACK_IMPORTED_MODULE_1___default()(format.formatToParts(), [ "type", "currency" ]);
            return order > 0 ? "suffix" : "prefix";
        };
        const unformatNumber = (value, decimalDigits = defaultCurrencyDigit) => {
            const v = lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(("number" !== typeof value ? Number(value) : value) * 10 ** decimalDigits, 0);
            return v;
        };
        const unformatCurrency = value => unformatNumber(value, defaultCurrencyDigit);
        const unformatPercent = value => unformatNumber(value, defaultPresentDigit);
        const formatNumber = (value, decimalDigits = defaultCurrencyDigit) => {
            const v = "number" !== typeof value ? Number(value) : value;
            return v / 10 ** decimalDigits;
        };
        const formatCurrency = value => formatNumber(value, defaultCurrencyDigit);
        const formatPercent = value => formatNumber(value, defaultPresentDigit);
        const getDecimalSymbolByCode = (code, lang) => {
            let decimal = "";
            const format = formatGenerator(code, lang);
            if (format.formatToParts) {
                const findDecimal = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(format.formatToParts(1), [ "type", "decimal" ]);
                decimal = findDecimal && findDecimal.value;
            } else {
                const realLang = hardCodeSymbol(code, lang);
                const intl = new Intl.NumberFormat(realLang, {
                    currency: code,
                    ...hardCodeCurrencyDisplay(code),
                    useGrouping: false
                });
                decimal = intl.format(.1).replace(/[0-9]*/g, "");
            }
            return decimal;
        };
        const getGroupSymbolByCode = (code, lang) => {
            let group = "";
            const format = formatGenerator(code, lang);
            if (format.formatToParts) {
                const findGroup = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(format.formatToParts(1e4), [ "type", "group" ]);
                group = findGroup && findGroup.value;
            } else {
                const realLang = hardCodeSymbol(code, lang);
                const decimal = getDecimalSymbolByCode(code, realLang);
                group = "." === decimal ? "," : ".";
            }
            return group;
        };
        const getFormatParts = (value, options) => {
            const {code, lang} = options;
            const format = formatGenerator(code, lang);
            if (format.formatToParts) return format.formatToParts(value);
            const formatStr = format.format(value);
            const group = getGroupSymbolByCode(code, lang);
            const decimal = getDecimalSymbolByCode(code, lang);
            const symbolOrder = getSymbolOrderByCode(code, lang);
            const symbol = getSymbolByCode(code, lang);
            const rst = [];
            const [integerValue, fraction] = formatStr.replace(symbol, "").split(decimal);
            integerValue.split(group).forEach(((item, index) => {
                rst.push({
                    type: "integer",
                    value: item
                });
                if (index !== integerValue.length - 1) rst.push({
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
                value: fraction.trim()
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
        const getConvertPrice = (money, options) => {
            const fromCurrencyCode = storeCurrency;
            const toCurrencyCode = options && options.code;
            const lang = options && options.lang;
            const covertMoneyByRate = covertCalc(money, fromCurrencyCode, toCurrencyCode, currencyRates);
            const covertMoney = formatCurrency(covertMoneyByRate);
            const formatPartsResult = getFormatParts(covertMoney, {
                code: toCurrencyCode,
                lang
            });
            const convertResult = {
                group: "",
                integer: "",
                decimal: "",
                fraction: "",
                symbolOrder: "",
                currencySymbol: ""
            };
            convertResult.symbolOrder = getSymbolOrderByCode(toCurrencyCode, lang);
            formatPartsResult.forEach((item => {
                const type = item && item.type;
                if ("currency" === type) convertResult.currencySymbol = item.value;
                if ("integer" === type) if (convertResult.integer) convertResult.integer = `${convertResult.integer}${convertResult.group || ""}${item.value}`; else convertResult.integer = item.value;
                if ("group" === type) convertResult.group = item.value;
                if ("decimal" === type) convertResult.decimal = item.value;
                if ("fraction" === type) convertResult.fraction = item.value;
            }));
            return convertResult;
        };
        const __WEBPACK_DEFAULT_EXPORT__ = {
            format,
            unformatNumber,
            formatNumber,
            unformatCurrency,
            unformatPercent,
            formatCurrency,
            formatPercent,
            getDigitsByCode,
            getSymbolByCode,
            getSymbolOrderByCode,
            getDecimalSymbolByCode,
            getGroupSymbolByCode,
            getFormatParts,
            getConvertPrice,
            convertFormat,
            covertCalc
        };
    },
    "../shared/browser/utils/dataAccessor.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getSyncData: () => getSyncData,
            setSyncData: () => setSyncData
        });
        function getSyncData(key) {
            if (!window.__SL_BUSINESS_DATA__) return null;
            return window.__SL_BUSINESS_DATA__[key] || null;
        }
        function setSyncData(payload) {
            if (!window.__SL_BUSINESS_DATA__) window.__SL_BUSINESS_DATA__ = {};
            Object.keys(payload).forEach((key => {
                window.__SL_BUSINESS_DATA__[key] = payload[key];
            }));
        }
    },
    "../shared/browser/utils/dataReport/ads.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            clickAdsData: () => clickAdsData,
            loadAdsData: () => loadAdsData
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
        var _report_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/report/const.js");
        const sendConversion = data => {
            const params = {
                ...data
            };
            if (params && !params.currency) params.currency = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("currency_code");
            return [ "event", "conversion", params ];
        };
        const clickAdsData = (page, type) => {
            const res = [];
            switch (page) {
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.ProductDetail:
                switch (type) {
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.AddToCart:
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.BeginCheckout:
                    break;

                  default:
                    return res;
                }
                break;

              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.MiniCart:
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.Cart:
                if (type === _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.BeginCheckout) ; else return res;
                break;

              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.CheckoutProgress:
                if (type === _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.CheckoutProgress) ; else return res;
                break;

              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.CheckoutConfirm:
                if (type === _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.PlaceOrder) ; else return res;
                break;

              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.OneShop:
                if (type === _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.BeginCheckout) ; else return res;
                break;

              default:
                return res;
            }
            res.push(sendConversion());
            return res;
        };
        const loadAdsData = (page, params) => {
            let value = null;
            const data = [];
            switch (page) {
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.Cart:
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.CheckoutProgress:
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.CheckoutConfirm:
              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.SalesPromotion:
                break;

              case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.OrderConfirm:
                value = {
                    value: params.price,
                    currency: params.currency
                };
                break;

              default:
                return data;
            }
            data.push(sendConversion(value));
            return data;
        };
    },
    "../shared/browser/utils/dataReport/fb.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            clickFbData: () => clickFbData,
            loadFbData: () => loadFbData
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var _syntax_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        var _report_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/report/const.js");
        const clickFbData = (type, params) => {
            let value = null;
            let event = null;
            let evid = null;
            let res = [];
            if (type === _report_const__WEBPACK_IMPORTED_MODULE_2__.ClickType.AddToCart) {
                value = {
                    content_type: "product_group",
                    content_category: params && params.category,
                    content_ids: params && params.skuId,
                    content_name: params && params.name,
                    value: params && params.price,
                    currency: (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_1__.nullishCoalescingOperator)(params && params.currency, js_cookie__WEBPACK_IMPORTED_MODULE_0__.get("currency_code"))
                };
                event = "AddToCart";
                evid = {
                    eventID: params && params.eventId
                };
                res.push([ "track", event, value, evid ]);
            } else res = [];
            return res;
        };
        const loadFbData = (page, params) => {
            let res = [];
            if (page === _report_const__WEBPACK_IMPORTED_MODULE_2__.PageType.OrderConfirm) res.push([ "track", "Purchase", {
                content_type: "product_group",
                content_ids: params && params.skuIds,
                value: params && params.amount,
                quantity: params && params.quantity,
                currency: (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_1__.nullishCoalescingOperator)(params && params.currency, js_cookie__WEBPACK_IMPORTED_MODULE_0__.get("currency_code"))
            }, {
                eventID: params && params.eventId
            } ]); else res = [];
            return res;
        };
    },
    "../shared/browser/utils/dataReport/ga.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
        var _report_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/report/const.js");
        var _currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        class GoogleAnalysis {
            constructor(config) {
                this.config = config;
            }
            sendEventLog(eventType, data) {
                const params = {
                    ...data
                };
                if (params && !params.currency) params.currency = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("currency_code");
                return [ "event", eventType, params ];
            }
            clickForEnhancedEcom(page, clickType, params) {
                let event;
                let value;
                let res = [];
                switch (clickType) {
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.CheckoutProgress:
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.PageType.PlaceOrder:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.SetCheckoutOption;
                    value = {
                        value: params.amount,
                        checkout_step: params.step
                    };
                    break;

                  default:
                    return res;
                }
                res = this.sendEventLog(event, value);
                return res;
            }
            click(page, type, params) {
                let value;
                let event;
                const res = [];
                switch (type) {
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.SelectContent:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.SelectContent;
                    value = {
                        content_type: "product",
                        items: [ {
                            id: params.skuId,
                            name: params.name,
                            price: params.price,
                            variant: params.variant
                        } ]
                    };
                    break;

                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.AddToCart:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.AddToCart;
                    value = {
                        items: [ {
                            id: params.skuId,
                            name: params.name,
                            price: params.price
                        } ]
                    };
                    break;

                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.RemoveFromCart:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.RemoveFromCart;
                    value = {
                        items: []
                    };
                    if (Array.isArray(params.productItems)) params.productItems.forEach((({skuId, name, price, quantity, variant}) => {
                        value.items.push({
                            id: skuId,
                            name,
                            price,
                            quantity,
                            variant: variant || ""
                        });
                    }));
                    break;

                  default:
                    return [];
                }
                res.push(this.sendEventLog(event, value));
                if (this.config.enableEnhancedEcom) res.push(this.clickForEnhancedEcom(page, type, params));
                return res;
            }
            clickGa4({actionType, params}) {
                let value;
                let event;
                const res = [];
                switch (actionType) {
                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.SelectContent:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.SelectContent;
                    value = {
                        content_type: "product",
                        item_id: params.skuId
                    };
                    break;

                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.AddToCart:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.AddToCart;
                    value = {
                        value: params.amount,
                        items: [ {
                            item_id: params.itemNo || params.skuId,
                            item_name: params.name,
                            price: params.price,
                            quantity: params.productNum,
                            item_variant: (params.productSkuAttrList || []).join(",")
                        } ]
                    };
                    break;

                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.RemoveFromCart:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.RemoveFromCart;
                    value = {
                        value: params.value,
                        items: []
                    };
                    if (Array.isArray(params.productItems)) params.productItems.forEach((({skuId, name, price, quantity, variant}) => {
                        value.items.push({
                            item_id: skuId,
                            item_name: name,
                            price,
                            quantity,
                            item_variant: variant || ""
                        });
                    }));
                    break;

                  case _report_const__WEBPACK_IMPORTED_MODULE_1__.ClickType.ViewCart:
                    event = _report_const__WEBPACK_IMPORTED_MODULE_1__.eventType.ViewCart;
                    value = {
                        value: params.amount,
                        items: params.items && params.items.map((item => ({
                            item_id: item.itemNo || item.productId,
                            item_name: item.name,
                            price: _currency__WEBPACK_IMPORTED_MODULE_2__["default"].formatCurrency(item.price),
                            quantity: item.num,
                            item_variant: (item.skuAttr || []).join(",")
                        })))
                    };
                    break;

                  default:
                    return [];
                }
                res.push(this.sendEventLog(event, value));
                return res;
            }
        }
        const ga = new GoogleAnalysis({});
        const __WEBPACK_DEFAULT_EXPORT__ = ga;
    },
    "../shared/browser/utils/i18n.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            t: () => t
        });
        var _syntax_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        function parsePathToArray(path) {
            if ("string" !== typeof path) throw new TypeError("path must be string");
            return path.replace(/\]/, "").split(/[.[]/);
        }
        function t(path, hash) {
            const keys = parsePathToArray(path);
            const value = keys.reduce(((prev, current) => {
                if (!prev) return;
                return prev && prev.string ? prev.string[current] : prev[current];
            }), window.__I18N__);
            const regExp = new RegExp(/\{\{([^{}]+)\}\}/g);
            return (0, _syntax_patch__WEBPACK_IMPORTED_MODULE_0__.nullishCoalescingOperator)((0, 
            _syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get_func)(value, "replace").exec(regExp, ((...args) => (0, 
            _syntax_patch__WEBPACK_IMPORTED_MODULE_0__.nullishCoalescingOperator)((0, _syntax_patch__WEBPACK_IMPORTED_MODULE_0__.get)(hash, args[1]), args[0]))), path);
        }
    },
    "../shared/browser/utils/load-script.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/lodash/isObject.js");
        var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
        const loadScript = (src, options) => new Promise((resolve => {
            const scriptTag = document.createElement("script");
            scriptTag.src = src;
            if (options && lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(options)) Object.entries(options).forEach((([key, value]) => {
                scriptTag[key] = value;
            }));
            const handler = () => {
                scriptTag.removeEventListener("load", handler);
                resolve();
            };
            scriptTag.addEventListener("load", handler);
            if (document.head) document.head.appendChild(scriptTag);
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = loadScript;
    },
    "../shared/browser/utils/logger/env.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _get_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/get-env.js");
        const envConst = {
            DEBUG: "DEBUG",
            APP_ENV: "APP_ENV",
            APP_ENV__DEVELOP: "develop",
            APP_ENV__STAGING: "staging",
            APP_ENV__PREVIEW: "preview",
            APP_ENV__PRODUCT: "product"
        };
        function get(key) {
            return (0, _get_env__WEBPACK_IMPORTED_MODULE_0__["default"])()[key];
        }
        function isDebugMode() {
            const value = get(envConst.DEBUG);
            return "true" === value || "1" === value;
        }
        function appEnvQuery() {
            return get(envConst.APP_ENV) || "";
        }
        function appEnvInDevelop() {
            return appEnvQuery() === envConst.APP_ENV__DEVELOP;
        }
        function appEnvInStaging() {
            return appEnvQuery() === envConst.APP_ENV__STAGING;
        }
        const __WEBPACK_DEFAULT_EXPORT__ = {
            isDebugMode,
            appEnvQuery,
            appEnvInDevelop,
            appEnvInStaging
        };
    },
    "../shared/browser/utils/logger/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/index.js");
        var _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_funnyecho_logger__WEBPACK_IMPORTED_MODULE_1__);
        var _transports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/logger/transports.js");
        const loggerGetter = function() {
            let _logger;
            return function() {
                if (_logger) return _logger;
                _logger = _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().withLogger(null, _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().pipeTransport(...(0, 
                _transports__WEBPACK_IMPORTED_MODULE_0__.withShoplineTrackingTransport)(), ...(0, 
                _transports__WEBPACK_IMPORTED_MODULE_0__.withSentryTransport)(), ...(0, _transports__WEBPACK_IMPORTED_MODULE_0__.withStdoutTransport)()));
                _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().withGlobalLogger(_logger);
                return _logger;
            };
        }();
        const __WEBPACK_DEFAULT_EXPORT__ = {
            get logger() {
                return loggerGetter();
            },
            pipeOwner(data) {
                if ("object" !== typeof data) {
                    console.warn("[logger.pipeOwner]的入参需为object");
                    return;
                }
                const {owner, base = loggerGetter(), onTag} = data;
                if (false) ;
                return _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().withLogger(base, _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().pipeOwner(owner));
            }
        };
    },
    "../shared/browser/utils/logger/sentry.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Status: () => _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogStatus,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _sl_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/@sl/logger/lib/index.es.js");
        var _sl_logger_sentry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/@sl/logger-sentry/lib/index.es.js");
        const newLogger = _sl_logger__WEBPACK_IMPORTED_MODULE_0__["default"].pipeTransport(_sl_logger_sentry__WEBPACK_IMPORTED_MODULE_1__["default"]);
        const __WEBPACK_DEFAULT_EXPORT__ = newLogger;
    },
    "../shared/browser/utils/logger/sentryReport.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Owner: () => Owner,
            Action: () => Action
        });
        const Owner = {
            MiniCart: "Checkouts.cart.mini",
            MainCart: "Checkouts.cart.main",
            Cart: "Checkouts.common.cart",
            Coupon: "Checkouts.common.coupon",
            Checkout: "Checkouts.checkout",
            Processing: "Checkouts.processing",
            Thankyou: "Checkouts.thankyou",
            Order: "Checkouts.order",
            ExpressCallback: "Checkouts.expressCallback",
            Error: "Checkouts.error"
        };
        const ActionOwner = {
            Cart: "Cart",
            Checkout: "Checkout",
            Processing: "Processing",
            Thankyou: "Thankyou",
            Order: "Order",
            ExpressCallback: "ExpressCallback",
            Error: "Error"
        };
        const commonAction = actionOwner => ({
            [`Init${actionOwner}`]: `init${actionOwner}`,
            [`Take${actionOwner}`]: `take${actionOwner}`,
            [`Edit${actionOwner}`]: `edit${actionOwner}`,
            [`CallingInterface${actionOwner}`]: `callingInterface${actionOwner}`,
            [`CalculatePrice${actionOwner}`]: `calculatePrice${actionOwner}`,
            [`Report${actionOwner}`]: `report${actionOwner}`
        });
        const CartActions = {
            ...commonAction(ActionOwner.Cart),
            OpenCart: "openCart",
            Add2Cart: "add2Cart",
            DeleteCart: "deleteCart",
            ClearCart: "clearCart",
            EditCoupon: "editCoupon"
        };
        const CheckoutActions = {
            ...commonAction(ActionOwner.Checkout),
            EditCoupon: "editCoupon",
            ChangePage: "changePage",
            CompleteOrder: "CompleteOrder"
        };
        const Action = {
            ...CartActions,
            ...CheckoutActions,
            ...commonAction(ActionOwner.ExpressCallback),
            ...commonAction(ActionOwner.Processing),
            ...commonAction(ActionOwner.Thankyou),
            ...commonAction(ActionOwner.Order),
            ...commonAction(ActionOwner.Error)
        };
    },
    "../shared/browser/utils/logger/transports.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            withShoplineTrackingTransport: () => withShoplineTrackingTransport,
            withStdoutTransport: () => withStdoutTransport,
            withSentryTransport: () => withSentryTransport
        });
        var _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/index.js");
        var _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_funnyecho_logger__WEBPACK_IMPORTED_MODULE_1__);
        var _funnyecho_logger_transports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/node_modules/@funnyecho/logger/dist/transports/index.js");
        var _funnyecho_logger_transports__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_funnyecho_logger_transports__WEBPACK_IMPORTED_MODULE_2__);
        var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/logger/env.js");
        function withShoplineTrackingTransport() {
            const breadCrumbs = [];
            const addBreadCrumbs = payload => {
                breadCrumbs.push(payload);
            };
            const getBreadCrumbs = _breadCrumbs => _breadCrumbs.map((bs => {
                const {category: type, message, eventId} = bs;
                return {
                    type,
                    message,
                    eventId
                };
            }));
            function bubble() {
                return {
                    bubble: (ctx, entry) => {
                        const {owner, level, fields} = entry;
                        const message = `${entry.message}`;
                        const extra = _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().mapFieldList(fields);
                        let data = {};
                        switch (level) {
                          case _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().LevelEnum.error:
                          case _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().LevelEnum.fatal:
                            data = {
                                message,
                                breadCrumbs: getBreadCrumbs(breadCrumbs),
                                owner,
                                extra
                            };
                            window.__SL_Track__.error(owner, data);
                            breadCrumbs.length = 0;
                            break;

                          case _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().LevelEnum.info:
                            data = {
                                message,
                                breadCrumbs: getBreadCrumbs(breadCrumbs),
                                owner,
                                extra
                            };
                            window.__SL_Track__.info(owner, data);
                            breadCrumbs.length = 0;
                            break;

                          case _funnyecho_logger__WEBPACK_IMPORTED_MODULE_1___default().LevelEnum.debug:
                          default:
                            addBreadCrumbs({
                                message: `${message} ${Object.keys(extra).length ? JSON.stringify(extra) : ""}`,
                                category: "debug",
                                eventId: Date.now()
                            });
                        }
                    }
                };
            }
            if (true) return [ bubble() ];
            return [];
        }
        function withStdoutTransport() {
            if (!(_env__WEBPACK_IMPORTED_MODULE_0__["default"].appEnvInDevelop() || _env__WEBPACK_IMPORTED_MODULE_0__["default"].appEnvInStaging())) return [];
            return [ _funnyecho_logger_transports__WEBPACK_IMPORTED_MODULE_2___default().withStdout() ];
        }
        function withSentryTransport() {
            if (false) ;
            return [];
        }
    },
    "../shared/browser/utils/report/hd-const.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            paramsMapping: () => paramsMapping,
            paramsMappingToArrayKeys: () => paramsMappingToArrayKeys
        });
        const eventName = {
            view: "101",
            additem: "102",
            updateitem: "103",
            removeitem: "104",
            checkout: "105",
            recommenditem: "106",
            proceed_to_checkout: "107",
            place_order: "108",
            click_component: "109",
            product_view: "110",
            product_share: "111",
            buy_now: "112",
            select_product: "113",
            deselect_product: "114",
            menu_view: "115",
            menu_click: "116",
            catalog_view: "117",
            catalog_click: "118",
            sku_click: "119",
            component_view: "120",
            display_click: "121",
            sort_click: "122",
            select_bundling: "123",
            add_wishlist: "124",
            cancel_wishlist: "125",
            proceed_to_delivery_payment: "126",
            proceed_to_pay: "127",
            proceed_to_delivery: "128",
            quick_payment: "129",
            click_product: "130",
            search_suggest: "131",
            paypal: "132",
            input: "133",
            modify: "134",
            select_shipping: "135",
            select_payment: "136",
            inventory_shortage: "137",
            login_success: "138",
            view_cart: "139",
            leave: "999"
        };
        const eventCategory = {
            order: "101",
            cart: "102",
            email: "103",
            expresscheckoutpage: "104"
        };
        const productType = {
            product: "101",
            addon: "102",
            subscription: "103"
        };
        const status = {
            soldout: "101",
            selling: "102"
        };
        const purchaseSource = {
            common_store: "101",
            one_page_store: "102"
        };
        const page = {
            homepage: "101",
            pdp: "102",
            cart: "103",
            order_check_out: "104",
            transaction: "105",
            product_search: "106",
            product_list: "107",
            user_page: "108",
            email: "109",
            expresscheckout: "110",
            "404page": "111",
            call_to_action: "112",
            consumer_home: "113",
            onepage_checkout: "114",
            address_confirm: "115",
            delivery_payment_confirm: "116",
            delivery_confirm: "117",
            payment_confirm: "118",
            addon: "119",
            other: "120",
            landing_page: "121"
        };
        const generalComponent = {
            catalog: "101",
            logo: "102",
            search: "103",
            sign_in_bottom: "104",
            message: "105",
            cart: "106",
            store_language: "107",
            currency: "108",
            search_product: "109",
            H1: "110",
            paragraph: "111",
            single_image: "112",
            slider: "113",
            poster: "114",
            gallery: "115",
            media_lr: "116",
            media_ud: "117",
            end_payment: "118",
            end_email: "119",
            end_fb: "120",
            end_ins: "121",
            end_twitter: "122",
            end_snapchat: "123",
            end_pinterest: "124",
            end_line: "125",
            theme: "126",
            free_layout: "127",
            search_pop: "128",
            search_bar: "129"
        };
        const customComponent = {
            sign_up_tab: "101",
            sign_in_tab: "102",
            line_signin: "103",
            fb_signin: "104",
            sign_in_105: "105",
            sign_up: "106",
            title_component: "107",
            content_component: "108",
            productmoduel_component: "109",
            productlist_component: "110",
            QRcode_component: "111",
            ins_component: "112",
            googlemap_component: "113",
            facebook_component: "114",
            video_component: "115",
            pic_component: "116",
            product_menu: "117",
            pre_order: "118",
            gotoamazon: "119",
            wishlist: "120",
            product_descri: "121",
            deliver_payment: "122",
            score: "123",
            reviews: "123",
            share: "124",
            recommendation: "125",
            checkout: "126",
            removement: "127",
            sign_in_128: "128",
            proceed_to_checkout: "129",
            select_all: "130",
            deselect_all: "131",
            select: "132",
            deselect: "133",
            product_edit: "134",
            subscribe_line: "135",
            back_to_cart: "136",
            place_order: "137",
            buy_now: "138",
            view_more: "139",
            play_video: "140",
            more_bundling: "141",
            rec_turn_page: "142",
            arrival_notice: "143",
            more_reviews: "144",
            consumer_info: "145",
            message: "146",
            order: "147",
            return_order: "148",
            wishlist_149: "149",
            wishlist_turn_page: "150",
            use_coupon: "151",
            sign_in: "152",
            subscription: "153",
            back: "154",
            continue: "155"
        };
        const displayIterm = {
            24: "101",
            48: "102",
            72: "103"
        };
        const sortBy = {
            newestToOldest: "101",
            oldestToNewest: "102",
            priceHighToLow: "103",
            priceLowToHigh: "104",
            default: "999"
        };
        const proListType = {
            category: "101",
            all_product: "102",
            chosen_product: "103"
        };
        const shareDest = {
            line: "101",
            fb: "102",
            message: "103",
            link: "104",
            whatsapp: "105",
            twitter: "106"
        };
        const signinSource = {
            sign_in_bottom: "101",
            order_edit: "102"
        };
        const searchType = {
            user_search: "101",
            suggest_ai: "102",
            suggest_search: "103"
        };
        const inputBox = {
            email: "101",
            first_name: "102",
            last_name: "103",
            country: "104",
            province: "105",
            city: "106",
            district: "107",
            address1: "108",
            address2: "108",
            postcode: "109",
            phone: "110",
            same_address: "111",
            another_address: "112",
            remark: "113"
        };
        const objectType = {
            info: "101",
            address: "102",
            shipping: "103"
        };
        const isFirst = {
            yes: "1",
            no: "0"
        };
        const loginResult = {
            success: "1",
            fail: "0"
        };
        const paramsMapping = {
            event_name: eventName,
            event_category: eventCategory,
            product_type: productType,
            status,
            purchase_source: purchaseSource,
            page,
            general_component: generalComponent,
            custom_component: customComponent,
            display_iterm: displayIterm,
            sort_by: sortBy,
            pro_list_type: proListType,
            share_dest: shareDest,
            signin_source: signinSource,
            search_type: searchType,
            input_box: inputBox,
            object: objectType,
            isFirst,
            loginResult
        };
        const paramsMappingToArrayKeys = [ "general_component", "custom_component", "status", "product_type" ];
    },
    "../shared/browser/utils/report/page.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            Home: 101,
            ProductsSearch: 102,
            Products: 103,
            ProductsDetail: 105,
            AllCollections: 174,
            Activity: 115,
            Page: {
                custom_page: 118,
                smart_landing_page: 147
            },
            BlogsList: 119,
            BlogsDetail: 120,
            404: 130,
            Center: 123,
            SignIn: 128,
            SignUp: 129,
            Cart: 106
        };
    },
    "../shared/browser/utils/report/tool.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getEventID: () => getEventID
        });
        var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/uuid/index.js");
        function getEventID() {
            return `${Date.now()}_${(0, uuid__WEBPACK_IMPORTED_MODULE_0__.v4)().replace(/-/g, "")}`;
        }
    },
    "../shared/browser/utils/request.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
        var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: "/leproxy/api",
            timeout: 3e4,
            withCredentials: true,
            paramsSerializer(params) {
                return query_string__WEBPACK_IMPORTED_MODULE_1__.stringify(params);
            }
        });
        instance.interceptors.response.use((res => {
            const {status, data, config} = res;
            if ("/leproxy" === config.baseURL) {
                if (200 !== status || "0" !== data.rescode) return Promise.reject({
                    message: data.resmsg,
                    ...data
                });
            } else if (200 !== status || !(data.success || "SUCCESS" === data.code)) return Promise.reject(data);
            return data;
        }), (error => Promise.reject(error)));
        const __WEBPACK_DEFAULT_EXPORT__ = instance;
    },
    "../shared/browser/utils/sectionsLoad/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            registrySectionConstructor: () => registrySectionConstructor
        });
        class SectionsLoad {
            constructor() {
                this.sectionInstances = new Map;
                this.constructorMap = new Map;
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
                const $container = __SL_$__(`[data-section-id='${sectionId}']`);
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
            const $sections = __SL_$__(`[data-section-type='${type}']`);
            $sections.each((function() {
                const $container = __SL_$__(this);
                window.__section_load__._createInstace($container, constructor);
            }));
        };
    },
    "../shared/browser/utils/tradeReport/const.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            HD_EVENT_NAME: () => HD_EVENT_NAME,
            pageMap: () => pageMap,
            pageMapV2: () => pageMapV2,
            cartPage: () => cartPage,
            hiidoEventStatus: () => hiidoEventStatus,
            HdModule: () => HdModule,
            ActionType: () => ActionType,
            HdComponent: () => HdComponent
        });
        const HD_EVENT_NAME = {
            GO_TO_CHECKOUT: "trade:goToCheckout:report",
            PAYPAL_CHECKOUT: "trade:spb:report",
            COUPON_INPUT: "trade:coupon:input:report",
            COUPON_APPLY: "trade:coupon:apply:report",
            PAYPAL_CHECKOUT_V2: "trade:spb:report:hiidov2"
        };
        const pageMap = {
            Cart: 60006254,
            MiniCart: 60006262
        };
        const pageMapV2 = {
            Cart: 106,
            MiniCart: 108
        };
        const cartPage = {
            Cart: "Cart",
            MiniCart: "MiniCart",
            FilterModal: "FilterModal"
        };
        const hiidoEventStatus = {
            SUCCESS: 1,
            ERROR: 0
        };
        const HdModule = {
            checkout: 112,
            couponCode: 118,
            normal: -999
        };
        const ActionType = {
            click: 102,
            input: 103
        };
        const HdComponent = {
            couponCodeInput: 133,
            couponCodeUse: 134,
            checkout: 101,
            paypalBtn: 102,
            paylater: 129,
            continueShopping: 146
        };
    },
    "../shared/browser/utils/tradeReport/hdReport.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            hidooRp: () => hidooRp,
            TradeHdReport: () => TradeHdReport
        });
        var _syntax_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        var _report_hd_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/report/hd-const.js");
        class TradeHdReport {
            constructor() {
                this.paramsMapping = _report_hd_const__WEBPACK_IMPORTED_MODULE_1__.paramsMapping;
                this.paramsMappingToArrayKeys = _report_hd_const__WEBPACK_IMPORTED_MODULE_1__.paramsMappingToArrayKeys;
            }
            setReportContent(params) {
                const reportContent = {
                    ...params
                };
                const that = this;
                if (reportContent.products && Array.isArray(reportContent.products)) {
                    const keys = [ "product_type", "product_id", "variantion_id", "product_name", "product_price", "position", "status", "quantity", "update_quantity", "price" ];
                    reportContent.products.forEach((spu => {
                        keys.forEach((key => {
                            if (spu[key]) {
                                if (!reportContent[key]) reportContent[key] = [];
                                reportContent[key].push(spu[key]);
                            }
                        }));
                    }));
                    delete reportContent.products;
                }
                Object.entries(reportContent).forEach((([key, value]) => {
                    let trueValue = value;
                    if (key in that.paramsMapping) if (Array.isArray(value)) {
                        if (that.paramsMappingToArrayKeys.indexOf(key) > -1) trueValue = (value || []).map((v => that.paramsMapping[key][v])).join(",");
                    } else trueValue = that.paramsMapping[key][value] || value;
                    if (Array.isArray(trueValue)) trueValue = trueValue.join(",");
                    reportContent[key] = trueValue;
                }));
                const data = {
                    ...(0, _syntax_patch__WEBPACK_IMPORTED_MODULE_0__.nullishCoalescingOperator)(reportContent, {})
                };
                return data;
            }
            event(reportContent, id) {
                const data = this.setReportContent(reportContent);
                window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report(id, data);
            }
        }
        const hidooRp = new TradeHdReport;
    },
    "../shared/browser/utils/tradeReport/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            TradeReport: () => TradeReport,
            reportCheckout: () => reportCheckout,
            setIniiateCheckout: () => setIniiateCheckout,
            setAddtoCart: () => setAddtoCart,
            setPayPalReportReq: () => setPayPalReportReq
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _dataReport_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/dataReport/ga.js");
        var _dataReport_ads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/dataReport/ads.js");
        var _dataReport_fb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/dataReport/fb.js");
        var _report_tool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/utils/tradeReport/const.js");
        Symbol("REPORT_ADD_CART");
        Symbol("PAYPAL_CLICK");
        const encode = str => {
            if ("undefined" === typeof window) return "";
            const ec = window && window.encodeURI(str);
            return window && window.btoa(ec);
        };
        const isFn = object => "function" === typeof object;
        const templateAlias = window.Shopline.uri.alias;
        class TradeReport {
            constructor() {
                this.eventBus = _event_bus__WEBPACK_IMPORTED_MODULE_2__.SL_EventBus;
                this.storeCurrency = js_cookie__WEBPACK_IMPORTED_MODULE_0__.get("currency_code");
                this.hdPage = {
                    Cart: "cart",
                    MiniCart: "cart"
                };
            }
            touch(data) {
                const {pageType, actionType, value} = data;
                const val = {
                    ...value,
                    currency: this.storeCurrency
                };
                const gaParam = _dataReport_ga__WEBPACK_IMPORTED_MODULE_3__["default"].click(pageType, actionType, val);
                const ga4Param = _dataReport_ga__WEBPACK_IMPORTED_MODULE_3__["default"].clickGa4({
                    pageType,
                    actionType,
                    params: val
                });
                const adsParams = (0, _dataReport_ads__WEBPACK_IMPORTED_MODULE_4__.clickAdsData)(pageType, actionType, val);
                const fbParams = (0, _dataReport_fb__WEBPACK_IMPORTED_MODULE_5__.clickFbData)(actionType, val);
                const params = {
                    GAAds: adsParams,
                    GA: gaParam,
                    GA4: ga4Param,
                    FBPixel: fbParams
                };
                this.eventBus && this.eventBus.emit("global:thirdPartReport", params);
            }
            reportViewCart(data) {
                const ga4Param = _dataReport_ga__WEBPACK_IMPORTED_MODULE_3__["default"].clickGa4(data);
                const newParams = {
                    GA4: ga4Param
                };
                this.eventBus && this.eventBus.emit("global:thirdPartReport", newParams);
            }
        }
        const setAddtoCart = (payAmount, currency, eid, extra = {}) => {
            const {eventID, ...ext} = extra;
            const params = {
                ...ext,
                payAmount,
                currency,
                eventId: eid || `addToCart${eventID}` || `addToCart${(0, _report_tool__WEBPACK_IMPORTED_MODULE_6__.getEventID)()}`,
                eventTime: Date.now()
            };
            return params;
        };
        const hdRpCheckout = (data, id) => {
            const products = data && data.map((item => ({
                product_id: item.productSeq,
                variantion_id: item.productSku,
                quantity: item.productNum,
                price: `${_currency__WEBPACK_IMPORTED_MODULE_1__["default"].formatNumber(Number(item && item.productPrice) || 0)}`,
                product_name: item.productName
            })));
            window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.report(id, {
                event_name: "105",
                page: "cart",
                products
            });
        };
        const getNeedReportData = callback => {
            if (isFn(callback)) {
                const data = callback();
                if ("string" === typeof data) return {
                    eventID: data
                };
                return data;
            }
            return {};
        };
        const setPayPalReportReq = ({needReport, products, extra}) => {
            const resData = getNeedReportData(needReport);
            const {eventID, ...extData} = resData;
            let price = 0;
            products.forEach((item => {
                price += item.productPrice;
            }));
            const dataReportReq = setAddtoCart(price, window && window.SL_State.get("storeInfo.currency"), `addToCart${eventID}`, {
                ...extra,
                ...extData
            });
            return dataReportReq;
        };
        const setIniiateCheckout = (seq, needReport) => {
            const resData = getNeedReportData(needReport);
            const {eventID} = resData;
            const cookieMap = js_cookie__WEBPACK_IMPORTED_MODULE_0__.get();
            Object.keys(cookieMap).forEach((key => {
                if (/^\d+_fb_data$/.test(key)) js_cookie__WEBPACK_IMPORTED_MODULE_0__.remove(key);
            }));
            js_cookie__WEBPACK_IMPORTED_MODULE_0__.set(`${seq}_fb_data`, {
                tp: eventID ? 2 : 1,
                et: Date.now(),
                ed: eventID || (0, _report_tool__WEBPACK_IMPORTED_MODULE_6__.getEventID)()
            });
        };
        const reportCheckout = data => {
            const {isCart, report, products} = data;
            if (isCart) {
                const event_id = _const__WEBPACK_IMPORTED_MODULE_7__.pageMap[templateAlias] ? _const__WEBPACK_IMPORTED_MODULE_7__.pageMap[templateAlias] : _const__WEBPACK_IMPORTED_MODULE_7__.pageMap.MiniCart;
                hdRpCheckout(products, event_id);
            }
            if (isFn(report)) report();
            sessionStorage.setItem(encode("checkout_track"), "[]");
        };
        new TradeReport;
    },
    "../shared/browser/utils/url-adaptor.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            adaptor: () => adaptor
        });
        var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        const queryStringConfig = {
            options: {
                skipNull: true,
                skipEmptyString: true
            }
        };
        const adaptor = (url, {query, fragmentIdentifier, fullQuery = true} = {}) => {
            const currentUrl = query_string__WEBPACK_IMPORTED_MODULE_0__.parseUrl(window.location.href, {
                ...queryStringConfig.options,
                parseFragmentIdentifier: true
            });
            const allQuery = fullQuery ? {
                ...currentUrl.query || {},
                ...query || {}
            } : {
                ...query
            };
            const passUrl = query_string__WEBPACK_IMPORTED_MODULE_0__.stringifyUrl({
                url,
                query: allQuery,
                fragmentIdentifier: fragmentIdentifier || currentUrl.fragmentIdentifier
            }, queryStringConfig.options);
            const wholeUrl = `${window.location.protocol}//${window.location.host}${passUrl}`;
            return {
                originUrl: url,
                ...currentUrl,
                query: allQuery,
                url: passUrl,
                wholeUrl
            };
        };
    },
    "../shared/browser/node_modules/axios/package.json": module => {
        "use strict";
        module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("./src/assets/vendor/global.js");
} ]);