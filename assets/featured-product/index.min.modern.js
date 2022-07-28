(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "featuredProduct" ], {
    "./node_modules/@yy/sl-mc/libs/inbox-send/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        function _typeof(obj) {
            "@babel/helpers - typeof";
            if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function(obj) {
                return typeof obj;
            }; else _typeof = function(obj) {
                return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            return _typeof(obj);
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.sendToMerchant = exports.EMessageType = void 0;
        var _snakeCase2 = _interopRequireDefault(__webpack_require__("./node_modules/lodash/snakeCase.js"));
        var _mapKeys2 = _interopRequireDefault(__webpack_require__("./node_modules/lodash/mapKeys.js"));
        var _isString2 = _interopRequireDefault(__webpack_require__("./node_modules/lodash/isString.js"));
        var _request = _interopRequireWildcard(__webpack_require__("./node_modules/@yy/sl-mc/libs/service/request.js"));
        function _getRequireWildcardCache(nodeInterop) {
            if ("function" !== typeof WeakMap) return null;
            var cacheBabelInterop = new WeakMap;
            var cacheNodeInterop = new WeakMap;
            return (_getRequireWildcardCache = function(nodeInterop) {
                return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) return obj;
            if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
                default: obj
            };
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) return cache.get(obj);
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) if ("default" !== key && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc); else newObj[key] = obj[key];
            }
            newObj["default"] = obj;
            if (cache) cache.set(obj, newObj);
            return newObj;
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                if (enumerableOnly) symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }));
                keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                if (i % 2) ownKeys(Object(source), true).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
            try {
                var info = gen[key](arg);
                var value = info.value;
            } catch (error) {
                reject(error);
                return;
            }
            if (info.done) resolve(value); else Promise.resolve(value).then(_next, _throw);
        }
        function _asyncToGenerator(fn) {
            return function() {
                var self = this, args = arguments;
                return new Promise((function(resolve, reject) {
                    var gen = fn.apply(self, args);
                    function _next(value) {
                        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                    }
                    function _throw(err) {
                        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                    }
                    _next(void 0);
                }));
            };
        }
        var EMessageType;
        exports.EMessageType = EMessageType;
        (function(EMessageType) {
            EMessageType["text"] = "text";
            EMessageType["image"] = "image";
            EMessageType["video"] = "video";
            EMessageType["imageAndText"] = "image-and-text";
            EMessageType["videoAndText"] = "video-and-text";
        })(EMessageType || (exports.EMessageType = EMessageType = {}));
        var sendToMerchant = function() {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark((function _callee(params) {
                return regeneratorRuntime.wrap((function(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", _request["default"].post("/api/sc/mc/shop/online/send", _objectSpread({}, params), {
                            transformResponse: [ function(data) {
                                try {
                                    var response = (0, _isString2["default"])(data) && data.length ? JSON.parse(data) : data;
                                    var responseData = null === response || void 0 === response ? void 0 : response.data;
                                    if ((0, _request.transformSuccess)(response) && responseData) response.data = (0, 
                                    _mapKeys2["default"])(responseData, (function(value, key) {
                                        return (0, _snakeCase2["default"])(key);
                                    }));
                                    return response;
                                } catch (e) {
                                    return data;
                                }
                            } ]
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                }), _callee);
            })));
            return function(_x) {
                return _ref.apply(this, arguments);
            };
        }();
        exports.sendToMerchant = sendToMerchant;
    },
    "./node_modules/@yy/sl-mc/libs/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        function _typeof(obj) {
            "@babel/helpers - typeof";
            if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function(obj) {
                return typeof obj;
            }; else _typeof = function(obj) {
                return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            return _typeof(obj);
        }
        ({
            value: true
        });
        exports.mcUtil = void 0;
        var _mcUtil = _interopRequireWildcard(__webpack_require__("./node_modules/@yy/sl-mc/libs/inbox-send/index.js"));
        exports.mcUtil = _mcUtil;
        function _getRequireWildcardCache(nodeInterop) {
            if ("function" !== typeof WeakMap) return null;
            var cacheBabelInterop = new WeakMap;
            var cacheNodeInterop = new WeakMap;
            return (_getRequireWildcardCache = function(nodeInterop) {
                return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
            })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) return obj;
            if (null === obj || "object" !== _typeof(obj) && "function" !== typeof obj) return {
                default: obj
            };
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) return cache.get(obj);
            var newObj = {};
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) if ("default" !== key && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc); else newObj[key] = obj[key];
            }
            newObj["default"] = obj;
            if (cache) cache.set(obj, newObj);
            return newObj;
        }
    },
    "./node_modules/@yy/sl-mc/libs/service/request.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports["default"] = exports.transformSuccess = void 0;
        var _axios = _interopRequireDefault(__webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/index.js"));
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var instance = _axios["default"].create({
            timeout: 5e3,
            withCredentials: true
        });
        instance.interceptors.response.use((function(config) {
            if (200 !== config.status) return Promise.reject();
            return config.data;
        }), (function(error) {
            return Promise.reject(error);
        }));
        var transformSuccess = function(res) {
            return true === res.success || "true" === res.success || "success" === res.success || "SUCCESS" === res.success || 200 === res.code || "SUCCESS" === res.code || false;
        };
        exports.transformSuccess = transformSuccess;
        var _default = instance;
        exports["default"] = _default;
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/axios.js");
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/adapters/xhr.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/settle.js");
        var cookies = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/cookies.js");
        var buildURL = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/buildURL.js");
        var buildFullPath = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/buildFullPath.js");
        var parseHeaders = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/parseHeaders.js");
        var isURLSameOrigin = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isURLSameOrigin.js");
        var createError = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/createError.js");
        var defaults = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/defaults.js");
        var Cancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/Cancel.js");
        module.exports = function(config) {
            return new Promise((function(resolve, reject) {
                var requestData = config.data;
                var requestHeaders = config.headers;
                var responseType = config.responseType;
                var onCanceled;
                function done() {
                    if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
                    if (config.signal) config.signal.removeEventListener("abort", onCanceled);
                }
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
                    settle((function(value) {
                        resolve(value);
                        done();
                    }), (function(err) {
                        reject(err);
                        done();
                    }), response);
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
                    var transitional = config.transitional || defaults.transitional;
                    if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
                    reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
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
                if (config.cancelToken || config.signal) {
                    onCanceled = function(cancel) {
                        if (!request) return;
                        reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
                        request.abort();
                        request = null;
                    };
                    config.cancelToken && config.cancelToken.subscribe(onCanceled);
                    if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
                }
                if (!requestData) requestData = null;
                request.send(requestData);
            }));
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var bind = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/bind.js");
        var Axios = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/Axios.js");
        var mergeConfig = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/mergeConfig.js");
        var defaults = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/defaults.js");
        function createInstance(defaultConfig) {
            var context = new Axios(defaultConfig);
            var instance = bind(Axios.prototype.request, context);
            utils.extend(instance, Axios.prototype, context);
            utils.extend(instance, context);
            instance.create = function(instanceConfig) {
                return createInstance(mergeConfig(defaultConfig, instanceConfig));
            };
            return instance;
        }
        var axios = createInstance(defaults);
        axios.Axios = Axios;
        axios.Cancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/isCancel.js");
        axios.VERSION = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/env/data.js").version;
        axios.all = function(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/spread.js");
        axios.isAxiosError = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isAxiosError.js");
        module.exports = axios;
        module.exports["default"] = axios;
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/Cancel.js": module => {
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/CancelToken.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var Cancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/Cancel.js");
        function CancelToken(executor) {
            if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
            var resolvePromise;
            this.promise = new Promise((function(resolve) {
                resolvePromise = resolve;
            }));
            var token = this;
            this.promise.then((function(cancel) {
                if (!token._listeners) return;
                var i;
                var l = token._listeners.length;
                for (i = 0; i < l; i++) token._listeners[i](cancel);
                token._listeners = null;
            }));
            this.promise.then = function(onfulfilled) {
                var _resolve;
                var promise = new Promise((function(resolve) {
                    token.subscribe(resolve);
                    _resolve = resolve;
                })).then(onfulfilled);
                promise.cancel = function() {
                    token.unsubscribe(_resolve);
                };
                return promise;
            };
            executor((function(message) {
                if (token.reason) return;
                token.reason = new Cancel(message);
                resolvePromise(token.reason);
            }));
        }
        CancelToken.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason;
        };
        CancelToken.prototype.subscribe = function(listener) {
            if (this.reason) {
                listener(this.reason);
                return;
            }
            if (this._listeners) this._listeners.push(listener); else this._listeners = [ listener ];
        };
        CancelToken.prototype.unsubscribe = function(listener) {
            if (!this._listeners) return;
            var index = this._listeners.indexOf(listener);
            if (-1 !== index) this._listeners.splice(index, 1);
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/isCancel.js": module => {
        "use strict";
        module.exports = function(value) {
            return !!(value && value.__CANCEL__);
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/Axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var buildURL = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/buildURL.js");
        var InterceptorManager = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/InterceptorManager.js");
        var dispatchRequest = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/dispatchRequest.js");
        var mergeConfig = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/mergeConfig.js");
        var validator = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/validator.js");
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
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/InterceptorManager.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/buildFullPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isAbsoluteURL = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isAbsoluteURL.js");
        var combineURLs = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/combineURLs.js");
        module.exports = function(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/createError.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var enhanceError = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/enhanceError.js");
        module.exports = function(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/dispatchRequest.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var transformData = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/transformData.js");
        var isCancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/isCancel.js");
        var defaults = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/defaults.js");
        var Cancel = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/cancel/Cancel.js");
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) config.cancelToken.throwIfRequested();
            if (config.signal && config.signal.aborted) throw new Cancel("canceled");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/enhanceError.js": module => {
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
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                };
            };
            return error;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/mergeConfig.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        module.exports = function(config1, config2) {
            config2 = config2 || {};
            var config = {};
            function getMergedValue(target, source) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source); else if (utils.isPlainObject(source)) return utils.merge({}, source); else if (utils.isArray(source)) return source.slice();
                return source;
            }
            function mergeDeepProperties(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]); else if (!utils.isUndefined(config1[prop])) return getMergedValue(void 0, config1[prop]);
            }
            function valueFromConfig2(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(void 0, config2[prop]);
            }
            function defaultToConfig2(prop) {
                if (!utils.isUndefined(config2[prop])) return getMergedValue(void 0, config2[prop]); else if (!utils.isUndefined(config1[prop])) return getMergedValue(void 0, config1[prop]);
            }
            function mergeDirectKeys(prop) {
                if (prop in config2) return getMergedValue(config1[prop], config2[prop]); else if (prop in config1) return getMergedValue(void 0, config1[prop]);
            }
            var mergeMap = {
                url: valueFromConfig2,
                method: valueFromConfig2,
                data: valueFromConfig2,
                baseURL: defaultToConfig2,
                transformRequest: defaultToConfig2,
                transformResponse: defaultToConfig2,
                paramsSerializer: defaultToConfig2,
                timeout: defaultToConfig2,
                timeoutMessage: defaultToConfig2,
                withCredentials: defaultToConfig2,
                adapter: defaultToConfig2,
                responseType: defaultToConfig2,
                xsrfCookieName: defaultToConfig2,
                xsrfHeaderName: defaultToConfig2,
                onUploadProgress: defaultToConfig2,
                onDownloadProgress: defaultToConfig2,
                decompress: defaultToConfig2,
                maxContentLength: defaultToConfig2,
                maxBodyLength: defaultToConfig2,
                transport: defaultToConfig2,
                httpAgent: defaultToConfig2,
                httpsAgent: defaultToConfig2,
                cancelToken: defaultToConfig2,
                socketPath: defaultToConfig2,
                responseEncoding: defaultToConfig2,
                validateStatus: mergeDirectKeys
            };
            utils.forEach(Object.keys(config1).concat(Object.keys(config2)), (function(prop) {
                var merge = mergeMap[prop] || mergeDeepProperties;
                var configValue = merge(prop);
                utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
            }));
            return config;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/settle.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var createError = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/createError.js");
        module.exports = function(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/core/transformData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var defaults = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/defaults.js");
        module.exports = function(data, headers, fns) {
            var context = this || defaults;
            utils.forEach(fns, (function(fn) {
                data = fn.call(context, data, headers);
            }));
            return data;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/defaults.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        var normalizeHeaderName = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/normalizeHeaderName.js");
        var enhanceError = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/core/enhanceError.js");
        var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
        }
        function getDefaultAdapter() {
            var adapter;
            if ("undefined" !== typeof XMLHttpRequest) adapter = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/adapters/xhr.js"); else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/adapters/xhr.js");
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
                var transitional = this.transitional || defaults.transitional;
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
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/env/data.js": module => {
        "use strict";
        module.exports = {
            version: "0.22.0"
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/bind.js": module => {
        "use strict";
        module.exports = function(fn, thisArg) {
            return function() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                return fn.apply(thisArg, args);
            };
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/buildURL.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/combineURLs.js": module => {
        "use strict";
        module.exports = function(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/cookies.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isAbsoluteURL.js": module => {
        "use strict";
        module.exports = function(url) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isAxiosError.js": module => {
        "use strict";
        module.exports = function(payload) {
            return "object" === typeof payload && true === payload.isAxiosError;
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/isURLSameOrigin.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/normalizeHeaderName.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
        module.exports = function(headers, normalizedName) {
            utils.forEach(headers, (function(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            }));
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/parseHeaders.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js");
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
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/spread.js": module => {
        "use strict";
        module.exports = function(callback) {
            return function(arr) {
                return callback.apply(null, arr);
            };
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/validator.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var VERSION = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/env/data.js").version;
        var validators = {};
        [ "object", "boolean", "number", "function", "string", "symbol" ].forEach((function(type, i) {
            validators[type] = function(thing) {
                return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
            };
        }));
        var deprecatedWarnings = {};
        validators.transitional = function(validator, version, message) {
            function formatMessage(opt, desc) {
                return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
            }
            return function(value, opt, opts) {
                if (false === validator) throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
                if (version && !deprecatedWarnings[opt]) {
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
            assertOptions,
            validators
        };
    },
    "./node_modules/@yy/sl-mc/node_modules/axios/lib/utils.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("./node_modules/@yy/sl-mc/node_modules/axios/lib/helpers/bind.js");
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
    "./node_modules/events/events.js": module => {
        "use strict";
        var R = "object" === typeof Reflect ? Reflect : null;
        var ReflectApply = R && "function" === typeof R.apply ? R.apply : function(target, receiver, args) {
            return Function.prototype.apply.call(target, receiver, args);
        };
        var ReflectOwnKeys;
        if (R && "function" === typeof R.ownKeys) ReflectOwnKeys = R.ownKeys; else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function(target) {
            return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        }; else ReflectOwnKeys = function(target) {
            return Object.getOwnPropertyNames(target);
        };
        function ProcessEmitWarning(warning) {
            if (console && console.warn) console.warn(warning);
        }
        var NumberIsNaN = Number.isNaN || function(value) {
            return value !== value;
        };
        function EventEmitter() {
            EventEmitter.init.call(this);
        }
        module.exports = EventEmitter;
        module.exports.once = once;
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = void 0;
        EventEmitter.prototype._eventsCount = 0;
        EventEmitter.prototype._maxListeners = void 0;
        var defaultMaxListeners = 10;
        function checkListener(listener) {
            if ("function" !== typeof listener) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
        Object.defineProperty(EventEmitter, "defaultMaxListeners", {
            enumerable: true,
            get: function() {
                return defaultMaxListeners;
            },
            set: function(arg) {
                if ("number" !== typeof arg || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
                defaultMaxListeners = arg;
            }
        });
        EventEmitter.init = function() {
            if (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) {
                this._events = Object.create(null);
                this._eventsCount = 0;
            }
            this._maxListeners = this._maxListeners || void 0;
        };
        EventEmitter.prototype.setMaxListeners = function(n) {
            if ("number" !== typeof n || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
            this._maxListeners = n;
            return this;
        };
        function _getMaxListeners(that) {
            if (void 0 === that._maxListeners) return EventEmitter.defaultMaxListeners;
            return that._maxListeners;
        }
        EventEmitter.prototype.getMaxListeners = function() {
            return _getMaxListeners(this);
        };
        EventEmitter.prototype.emit = function(type) {
            var args = [];
            for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
            var doError = "error" === type;
            var events = this._events;
            if (void 0 !== events) doError = doError && void 0 === events.error; else if (!doError) return false;
            if (doError) {
                var er;
                if (args.length > 0) er = args[0];
                if (er instanceof Error) throw er;
                var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
                err.context = er;
                throw err;
            }
            var handler = events[type];
            if (void 0 === handler) return false;
            if ("function" === typeof handler) ReflectApply(handler, this, args); else {
                var len = handler.length;
                var listeners = arrayClone(handler, len);
                for (i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
            }
            return true;
        };
        function _addListener(target, type, listener, prepend) {
            var m;
            var events;
            var existing;
            checkListener(listener);
            events = target._events;
            if (void 0 === events) {
                events = target._events = Object.create(null);
                target._eventsCount = 0;
            } else {
                if (void 0 !== events.newListener) {
                    target.emit("newListener", type, listener.listener ? listener.listener : listener);
                    events = target._events;
                }
                existing = events[type];
            }
            if (void 0 === existing) {
                existing = events[type] = listener;
                ++target._eventsCount;
            } else {
                if ("function" === typeof existing) existing = events[type] = prepend ? [ listener, existing ] : [ existing, listener ]; else if (prepend) existing.unshift(listener); else existing.push(listener);
                m = _getMaxListeners(target);
                if (m > 0 && existing.length > m && !existing.warned) {
                    existing.warned = true;
                    var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
                    w.name = "MaxListenersExceededWarning";
                    w.emitter = target;
                    w.type = type;
                    w.count = existing.length;
                    ProcessEmitWarning(w);
                }
            }
            return target;
        }
        EventEmitter.prototype.addListener = function(type, listener) {
            return _addListener(this, type, listener, false);
        };
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.prototype.prependListener = function(type, listener) {
            return _addListener(this, type, listener, true);
        };
        function onceWrapper() {
            if (!this.fired) {
                this.target.removeListener(this.type, this.wrapFn);
                this.fired = true;
                if (0 === arguments.length) return this.listener.call(this.target);
                return this.listener.apply(this.target, arguments);
            }
        }
        function _onceWrap(target, type, listener) {
            var state = {
                fired: false,
                wrapFn: void 0,
                target,
                type,
                listener
            };
            var wrapped = onceWrapper.bind(state);
            wrapped.listener = listener;
            state.wrapFn = wrapped;
            return wrapped;
        }
        EventEmitter.prototype.once = function(type, listener) {
            checkListener(listener);
            this.on(type, _onceWrap(this, type, listener));
            return this;
        };
        EventEmitter.prototype.prependOnceListener = function(type, listener) {
            checkListener(listener);
            this.prependListener(type, _onceWrap(this, type, listener));
            return this;
        };
        EventEmitter.prototype.removeListener = function(type, listener) {
            var list, events, position, i, originalListener;
            checkListener(listener);
            events = this._events;
            if (void 0 === events) return this;
            list = events[type];
            if (void 0 === list) return this;
            if (list === listener || list.listener === listener) if (0 === --this._eventsCount) this._events = Object.create(null); else {
                delete events[type];
                if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
            } else if ("function" !== typeof list) {
                position = -1;
                for (i = list.length - 1; i >= 0; i--) if (list[i] === listener || list[i].listener === listener) {
                    originalListener = list[i].listener;
                    position = i;
                    break;
                }
                if (position < 0) return this;
                if (0 === position) list.shift(); else spliceOne(list, position);
                if (1 === list.length) events[type] = list[0];
                if (void 0 !== events.removeListener) this.emit("removeListener", type, originalListener || listener);
            }
            return this;
        };
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.removeAllListeners = function(type) {
            var listeners, events, i;
            events = this._events;
            if (void 0 === events) return this;
            if (void 0 === events.removeListener) {
                if (0 === arguments.length) {
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                } else if (void 0 !== events[type]) if (0 === --this._eventsCount) this._events = Object.create(null); else delete events[type];
                return this;
            }
            if (0 === arguments.length) {
                var keys = Object.keys(events);
                var key;
                for (i = 0; i < keys.length; ++i) {
                    key = keys[i];
                    if ("removeListener" === key) continue;
                    this.removeAllListeners(key);
                }
                this.removeAllListeners("removeListener");
                this._events = Object.create(null);
                this._eventsCount = 0;
                return this;
            }
            listeners = events[type];
            if ("function" === typeof listeners) this.removeListener(type, listeners); else if (void 0 !== listeners) for (i = listeners.length - 1; i >= 0; i--) this.removeListener(type, listeners[i]);
            return this;
        };
        function _listeners(target, type, unwrap) {
            var events = target._events;
            if (void 0 === events) return [];
            var evlistener = events[type];
            if (void 0 === evlistener) return [];
            if ("function" === typeof evlistener) return unwrap ? [ evlistener.listener || evlistener ] : [ evlistener ];
            return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
        }
        EventEmitter.prototype.listeners = function(type) {
            return _listeners(this, type, true);
        };
        EventEmitter.prototype.rawListeners = function(type) {
            return _listeners(this, type, false);
        };
        EventEmitter.listenerCount = function(emitter, type) {
            if ("function" === typeof emitter.listenerCount) return emitter.listenerCount(type); else return listenerCount.call(emitter, type);
        };
        EventEmitter.prototype.listenerCount = listenerCount;
        function listenerCount(type) {
            var events = this._events;
            if (void 0 !== events) {
                var evlistener = events[type];
                if ("function" === typeof evlistener) return 1; else if (void 0 !== evlistener) return evlistener.length;
            }
            return 0;
        }
        EventEmitter.prototype.eventNames = function() {
            return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
        };
        function arrayClone(arr, n) {
            var copy = new Array(n);
            for (var i = 0; i < n; ++i) copy[i] = arr[i];
            return copy;
        }
        function spliceOne(list, index) {
            for (;index + 1 < list.length; index++) list[index] = list[index + 1];
            list.pop();
        }
        function unwrapListeners(arr) {
            var ret = new Array(arr.length);
            for (var i = 0; i < ret.length; ++i) ret[i] = arr[i].listener || arr[i];
            return ret;
        }
        function once(emitter, name) {
            return new Promise((function(resolve, reject) {
                function errorListener(err) {
                    emitter.removeListener(name, resolver);
                    reject(err);
                }
                function resolver() {
                    if ("function" === typeof emitter.removeListener) emitter.removeListener("error", errorListener);
                    resolve([].slice.call(arguments));
                }
                eventTargetAgnosticAddListener(emitter, name, resolver, {
                    once: true
                });
                if ("error" !== name) addErrorHandlerIfEventEmitter(emitter, errorListener, {
                    once: true
                });
            }));
        }
        function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
            if ("function" === typeof emitter.on) eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
        function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
            if ("function" === typeof emitter.on) if (flags.once) emitter.once(name, listener); else emitter.on(name, listener); else if ("function" === typeof emitter.addEventListener) emitter.addEventListener(name, (function wrapListener(arg) {
                if (flags.once) emitter.removeEventListener(name, wrapListener);
                listener(arg);
            })); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
    },
    "./node_modules/lodash/_SetCache.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__("./node_modules/lodash/isArray.js");
        function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [ value ];
        }
        module.exports = castArray;
    },
    "./node_modules/lodash/_Stack.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"), listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"), listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"), listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"), listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");
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
    "./node_modules/lodash/_arrayReduce.js": module => {
        function arrayReduce(array, iteratee, accumulator, initAccum) {
            var index = -1, length = null == array ? 0 : array.length;
            if (initAccum && length) accumulator = array[++index];
            while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
            return accumulator;
        }
        module.exports = arrayReduce;
    },
    "./node_modules/lodash/_arraySome.js": module => {
        function arraySome(array, predicate) {
            var index = -1, length = null == array ? 0 : array.length;
            while (++index < length) if (predicate(array[index], index, array)) return true;
            return false;
        }
        module.exports = arraySome;
    },
    "./node_modules/lodash/_asciiWords.js": module => {
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        function asciiWords(string) {
            return string.match(reAsciiWord) || [];
        }
        module.exports = asciiWords;
    },
    "./node_modules/lodash/_assocIndexOf.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var eq = __webpack_require__("./node_modules/lodash/eq.js");
        function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) if (eq(array[length][0], key)) return length;
            return -1;
        }
        module.exports = assocIndexOf;
    },
    "./node_modules/lodash/_baseAssignValue.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");
        function baseAssignValue(object, key, value) {
            if ("__proto__" == key && defineProperty) defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            }); else object[key] = value;
        }
        module.exports = baseAssignValue;
    },
    "./node_modules/lodash/_baseFor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var createBaseFor = __webpack_require__("./node_modules/lodash/_createBaseFor.js");
        var baseFor = createBaseFor();
        module.exports = baseFor;
    },
    "./node_modules/lodash/_baseForOwn.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseFor = __webpack_require__("./node_modules/lodash/_baseFor.js"), keys = __webpack_require__("./node_modules/lodash/keys.js");
        function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        module.exports = baseForOwn;
    },
    "./node_modules/lodash/_baseGet.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"), toKey = __webpack_require__("./node_modules/lodash/_toKey.js");
        function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (null != object && index < length) object = object[toKey(path[index++])];
            return index && index == length ? object : void 0;
        }
        module.exports = baseGet;
    },
    "./node_modules/lodash/_baseHasIn.js": module => {
        function baseHasIn(object, key) {
            return null != object && key in Object(object);
        }
        module.exports = baseHasIn;
    },
    "./node_modules/lodash/_baseIndexOf.js": module => {
        function strictIndexOf(array, value, fromIndex) {
            var index = fromIndex - 1, length = array.length;
            while (++index < length) if (array[index] === value) return index;
            return -1;
        }
        module.exports = strictIndexOf;
    },
    "./node_modules/lodash/_baseIsEqual.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqualDeep = __webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"), isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");
        function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (null == value || null == other || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        module.exports = baseIsEqual;
    },
    "./node_modules/lodash/_baseIsEqualDeep.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"), equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"), equalByTag = __webpack_require__("./node_modules/lodash/_equalByTag.js"), equalObjects = __webpack_require__("./node_modules/lodash/_equalObjects.js"), getTag = __webpack_require__("./node_modules/lodash/_getTag.js"), isArray = __webpack_require__("./node_modules/lodash/isArray.js"), isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"), isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");
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
    "./node_modules/lodash/_baseIsMatch.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"), baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js");
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
    "./node_modules/lodash/_baseIteratee.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseMatches = __webpack_require__("./node_modules/lodash/_baseMatches.js"), baseMatchesProperty = __webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"), identity = __webpack_require__("./node_modules/lodash/identity.js"), isArray = __webpack_require__("./node_modules/lodash/isArray.js"), property = __webpack_require__("./node_modules/lodash/property.js");
        function baseIteratee(value) {
            if ("function" == typeof value) return value;
            if (null == value) return identity;
            if ("object" == typeof value) return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value);
        }
        module.exports = baseIteratee;
    },
    "./node_modules/lodash/_baseMatches.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsMatch = __webpack_require__("./node_modules/lodash/_baseIsMatch.js"), getMatchData = __webpack_require__("./node_modules/lodash/_getMatchData.js"), matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (1 == matchData.length && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        module.exports = baseMatches;
    },
    "./node_modules/lodash/_baseMatchesProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js"), get = __webpack_require__("./node_modules/lodash/get.js"), hasIn = __webpack_require__("./node_modules/lodash/hasIn.js"), isKey = __webpack_require__("./node_modules/lodash/_isKey.js"), isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"), matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"), toKey = __webpack_require__("./node_modules/lodash/_toKey.js");
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
    "./node_modules/lodash/_baseProperty.js": module => {
        function baseProperty(key) {
            return function(object) {
                return null == object ? void 0 : object[key];
            };
        }
        module.exports = baseProperty;
    },
    "./node_modules/lodash/_basePropertyDeep.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");
        function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path);
            };
        }
        module.exports = basePropertyDeep;
    },
    "./node_modules/lodash/_baseToString.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/lodash/_cacheHas.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");
        function arrayIncludes(array, value) {
            var length = null == array ? 0 : array.length;
            return !!length && baseIndexOf(array, value, 0) > -1;
        }
        module.exports = arrayIncludes;
    },
    "./node_modules/lodash/_castPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__("./node_modules/lodash/isArray.js"), isKey = __webpack_require__("./node_modules/lodash/_isKey.js"), stringToPath = __webpack_require__("./node_modules/lodash/_stringToPath.js"), toString = __webpack_require__("./node_modules/lodash/toString.js");
        function castPath(value, object) {
            if (isArray(value)) return value;
            return isKey(value, object) ? [ value ] : stringToPath(toString(value));
        }
        module.exports = castPath;
    },
    "./node_modules/lodash/_createBaseFor.js": module => {
        function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
                while (length--) {
                    var key = props[fromRight ? length : ++index];
                    if (false === iteratee(iterable[key], key, iterable)) break;
                }
                return object;
            };
        }
        module.exports = createBaseFor;
    },
    "./node_modules/lodash/_createCompounder.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var arrayReduce = __webpack_require__("./node_modules/lodash/_arrayReduce.js"), deburr = __webpack_require__("./node_modules/lodash/deburr.js"), words = __webpack_require__("./node_modules/lodash/words.js");
        var rsApos = "['’]";
        var reApos = RegExp(rsApos, "g");
        function createCompounder(callback) {
            return function(string) {
                return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
        }
        module.exports = createCompounder;
    },
    "./node_modules/lodash/_defineProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");
        var defineProperty = function() {
            try {
                var func = getNative(Object, "defineProperty");
                func({}, "", {});
                return func;
            } catch (e) {}
        }();
        module.exports = defineProperty;
    },
    "./node_modules/lodash/_equalArrays.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"), arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"), cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");
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
    "./node_modules/lodash/_equalByTag.js": module => {
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    },
    "./node_modules/lodash/_equalObjects.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js");
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
    "./node_modules/lodash/_getAllKeys.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
    },
    "./node_modules/lodash/_getMatchData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"), keys = __webpack_require__("./node_modules/lodash/keys.js");
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
    "./node_modules/lodash/_getNative.js": module => {
        function getValue(object, key) {
            return null == object ? void 0 : object[key];
        }
        module.exports = getValue;
    },
    "./node_modules/lodash/_getTag.js": module => {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        module.exports = objectToString;
    },
    "./node_modules/lodash/_hasPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"), isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"), isArray = __webpack_require__("./node_modules/lodash/isArray.js"), isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"), isLength = __webpack_require__("./node_modules/lodash/isLength.js"), toKey = __webpack_require__("./node_modules/lodash/_toKey.js");
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
    "./node_modules/lodash/_hasUnicodeWord.js": module => {
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        function hasUnicodeWord(string) {
            return reHasUnicodeWord.test(string);
        }
        module.exports = hasUnicodeWord;
    },
    "./node_modules/lodash/_isIndex.js": module => {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value, length) {
            var type = typeof value;
            length = null == length ? MAX_SAFE_INTEGER : length;
            return !!length && ("number" == type || "symbol" != type && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
        }
        module.exports = isIndex;
    },
    "./node_modules/lodash/_isKey.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isArray = __webpack_require__("./node_modules/lodash/isArray.js"), isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
        function isKey(value, object) {
            if (isArray(value)) return false;
            var type = typeof value;
            if ("number" == type || "symbol" == type || "boolean" == type || null == value || isSymbol(value)) return true;
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object);
        }
        module.exports = isKey;
    },
    "./node_modules/lodash/_isStrictComparable.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var isObject = __webpack_require__("./node_modules/lodash/isObject.js");
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        module.exports = isStrictComparable;
    },
    "./node_modules/lodash/_listCacheClear.js": module => {
        function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        module.exports = listCacheClear;
    },
    "./node_modules/lodash/_listCacheDelete.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");
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
    "./node_modules/lodash/_listCacheGet.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? void 0 : data[index][1];
        }
        module.exports = listCacheGet;
    },
    "./node_modules/lodash/_listCacheHas.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        module.exports = listCacheHas;
    },
    "./node_modules/lodash/_listCacheSet.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");
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
    "./node_modules/lodash/_matchesStrictComparable.js": module => {
        function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (null == object) return false;
                return object[key] === srcValue && (void 0 !== srcValue || key in Object(object));
            };
        }
        module.exports = matchesStrictComparable;
    },
    "./node_modules/lodash/_memoizeCapped.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/lodash/_stringToPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var memoizeCapped = __webpack_require__("./node_modules/lodash/_memoizeCapped.js");
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = memoizeCapped((function(string) {
            var result = [];
            if (46 === string.charCodeAt(0)) result.push("");
            string.replace(rePropName, (function(match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            }));
            return result;
        }));
        module.exports = stringToPath;
    },
    "./node_modules/lodash/_toKey.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/lodash/_unicodeWords.js": module => {
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [ rsNonAstral, rsRegional, rsSurrPair ].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [ rsDingbat, rsRegional, rsSurrPair ].join("|") + ")" + rsSeq;
        var reUnicodeWord = RegExp([ rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [ rsBreak, rsUpper, "$" ].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [ rsBreak, rsUpper + rsMiscLower, "$" ].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji ].join("|"), "g");
        function unicodeWords(string) {
            return string.match(reUnicodeWord) || [];
        }
        module.exports = unicodeWords;
    },
    "./node_modules/lodash/deburr.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseToString = __webpack_require__("./node_modules/lodash/_baseToString.js");
        function toString(value) {
            return null == value ? "" : baseToString(value);
        }
        module.exports = toString;
    },
    "./node_modules/lodash/eq.js": module => {
        function eq(value, other) {
            return value === other || value !== value && other !== other;
        }
        module.exports = eq;
    },
    "./node_modules/lodash/get.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");
        function get(object, path, defaultValue) {
            var result = null == object ? void 0 : baseGet(object, path);
            return void 0 === result ? defaultValue : result;
        }
        module.exports = get;
    },
    "./node_modules/lodash/hasIn.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseHasIn = __webpack_require__("./node_modules/lodash/_baseHasIn.js"), hasPath = __webpack_require__("./node_modules/lodash/_hasPath.js");
        function hasIn(object, path) {
            return null != object && hasPath(object, path, baseHasIn);
        }
        module.exports = hasIn;
    },
    "./node_modules/lodash/identity.js": module => {
        function identity(value) {
            return value;
        }
        module.exports = identity;
    },
    "./node_modules/lodash/isArguments.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "./node_modules/lodash/isArray.js": module => {
        var isArray = Array.isArray;
        module.exports = isArray;
    },
    "./node_modules/lodash/isBuffer.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "./node_modules/lodash/isLength.js": module => {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value) {
            return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        module.exports = isLength;
    },
    "./node_modules/lodash/isString.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"), isArray = __webpack_require__("./node_modules/lodash/isArray.js"), isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");
        var stringTag = "[object String]";
        function isString(value) {
            return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        module.exports = isString;
    },
    "./node_modules/lodash/isSymbol.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "./node_modules/lodash/isTypedArray.js": module => {
        function stubFalse() {
            return false;
        }
        module.exports = stubFalse;
    },
    "./node_modules/lodash/keys.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");
        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys;
    },
    "./node_modules/lodash/mapKeys.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"), baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"), baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js");
        function mapKeys(object, iteratee) {
            var result = {};
            iteratee = baseIteratee(iteratee, 3);
            baseForOwn(object, (function(value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value);
            }));
            return result;
        }
        module.exports = mapKeys;
    },
    "./node_modules/lodash/property.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseProperty = __webpack_require__("./node_modules/lodash/_baseProperty.js"), basePropertyDeep = __webpack_require__("./node_modules/lodash/_basePropertyDeep.js"), isKey = __webpack_require__("./node_modules/lodash/_isKey.js"), toKey = __webpack_require__("./node_modules/lodash/_toKey.js");
        function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        module.exports = property;
    },
    "./node_modules/lodash/snakeCase.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var createCompounder = __webpack_require__("./node_modules/lodash/_createCompounder.js");
        var snakeCase = createCompounder((function(result, word, index) {
            return result + (index ? "_" : "") + word.toLowerCase();
        }));
        module.exports = snakeCase;
    },
    "./node_modules/lodash/words.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var asciiWords = __webpack_require__("./node_modules/lodash/_asciiWords.js"), hasUnicodeWord = __webpack_require__("./node_modules/lodash/_hasUnicodeWord.js"), toString = __webpack_require__("./node_modules/lodash/toString.js"), unicodeWords = __webpack_require__("./node_modules/lodash/_unicodeWords.js");
        function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? void 0 : pattern;
            if (void 0 === pattern) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            return string.match(pattern) || [];
        }
        module.exports = words;
    },
    "./node_modules/querystring/decode.js": module => {
        "use strict";
        function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        module.exports = function(qs, sep, eq, options) {
            sep = sep || "&";
            eq = eq || "=";
            var obj = {};
            if ("string" !== typeof qs || 0 === qs.length) return obj;
            var regexp = /\+/g;
            qs = qs.split(sep);
            var maxKeys = 1e3;
            if (options && "number" === typeof options.maxKeys) maxKeys = options.maxKeys;
            var len = qs.length;
            if (maxKeys > 0 && len > maxKeys) len = maxKeys;
            for (var i = 0; i < len; ++i) {
                var kstr, vstr, k, v, x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq);
                if (idx >= 0) {
                    kstr = x.substr(0, idx);
                    vstr = x.substr(idx + 1);
                } else {
                    kstr = x;
                    vstr = "";
                }
                k = decodeURIComponent(kstr);
                v = decodeURIComponent(vstr);
                if (!hasOwnProperty(obj, k)) obj[k] = v; else if (Array.isArray(obj[k])) obj[k].push(v); else obj[k] = [ obj[k], v ];
            }
            return obj;
        };
    },
    "./node_modules/querystring/encode.js": module => {
        "use strict";
        var stringifyPrimitive = function(v) {
            switch (typeof v) {
              case "string":
                return v;

              case "boolean":
                return v ? "true" : "false";

              case "number":
                return isFinite(v) ? v : "";

              default:
                return "";
            }
        };
        module.exports = function(obj, sep, eq, name) {
            sep = sep || "&";
            eq = eq || "=";
            if (null === obj) obj = void 0;
            if ("object" === typeof obj) return Object.keys(obj).map((function(k) {
                var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                if (Array.isArray(obj[k])) return obj[k].map((function(v) {
                    return ks + encodeURIComponent(stringifyPrimitive(v));
                })).join(sep); else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            })).join(sep);
            if (!name) return "";
            return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
        };
    },
    "./node_modules/querystring/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        exports.decode = exports.parse = __webpack_require__("./node_modules/querystring/decode.js");
        exports.encode = exports.stringify = __webpack_require__("./node_modules/querystring/encode.js");
    },
    "./node_modules/scroll-lock/dist/scroll-lock.js": function(module) {
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
    "./node_modules/swiper/esm/components/effect-fade/effect-fade.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
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
        var Fade = {
            setTranslate: function() {
                var swiper = this;
                var slides = swiper.slides;
                for (var i = 0; i < slides.length; i += 1) {
                    var $slideEl = swiper.slides.eq(i);
                    var offset = $slideEl[0].swiperSlideOffset;
                    var tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    var ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    $slideEl.css({
                        opacity: slideOpacity
                    }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
                }
            },
            setTransition: function(duration) {
                var swiper = this;
                var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration);
                if (swiper.params.virtualTranslate && 0 !== duration) {
                    var eventTriggered = false;
                    slides.transitionEnd((function() {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        var triggerEvents = [ "webkitTransitionEnd", "transitionend" ];
                        for (var i = 0; i < triggerEvents.length; i += 1) $wrapperEl.trigger(triggerEvents[i]);
                    }));
                }
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: false
                }
            },
            create: function() {
                var swiper = this;
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_0__.bindModuleMethods)(swiper, {
                    fadeEffect: _extends({}, Fade)
                });
            },
            on: {
                beforeInit: function(swiper) {
                    if ("fade" !== swiper.params.effect) return;
                    swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                    var overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true
                    };
                    (0, _utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, overwriteParams);
                    (0, _utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.originalParams, overwriteParams);
                },
                setTranslate: function(swiper) {
                    if ("fade" !== swiper.params.effect) return;
                    swiper.fadeEffect.setTranslate();
                },
                setTransition: function(swiper, duration) {
                    if ("fade" !== swiper.params.effect) return;
                    swiper.fadeEffect.setTransition(duration);
                }
            }
        };
    },
    "./node_modules/swiper/esm/components/navigation/navigation.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
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
    "./node_modules/url/node_modules/punycode/punycode.js": function(module, exports, __webpack_require__) {
        module = __webpack_require__.nmd(module);
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function(root) {
            true && exports && exports.nodeType;
            true && module && module.nodeType;
            var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) freeGlobal;
            var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode;
            function error(type) {
                throw RangeError(errors[type]);
            }
            function map(array, fn) {
                var length = array.length;
                var result = [];
                while (length--) result[length] = fn(array[length]);
                return result;
            }
            function mapDomain(string, fn) {
                var parts = string.split("@");
                var result = "";
                if (parts.length > 1) {
                    result = parts[0] + "@";
                    string = parts[1];
                }
                string = string.replace(regexSeparators, ".");
                var labels = string.split(".");
                var encoded = map(labels, fn).join(".");
                return result + encoded;
            }
            function ucs2decode(string) {
                var value, extra, output = [], counter = 0, length = string.length;
                while (counter < length) {
                    value = string.charCodeAt(counter++);
                    if (value >= 55296 && value <= 56319 && counter < length) {
                        extra = string.charCodeAt(counter++);
                        if (56320 == (64512 & extra)) output.push(((1023 & value) << 10) + (1023 & extra) + 65536); else {
                            output.push(value);
                            counter--;
                        }
                    } else output.push(value);
                }
                return output;
            }
            function ucs2encode(array) {
                return map(array, (function(value) {
                    var output = "";
                    if (value > 65535) {
                        value -= 65536;
                        output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                        value = 56320 | 1023 & value;
                    }
                    output += stringFromCharCode(value);
                    return output;
                })).join("");
            }
            function basicToDigit(codePoint) {
                if (codePoint - 48 < 10) return codePoint - 22;
                if (codePoint - 65 < 26) return codePoint - 65;
                if (codePoint - 97 < 26) return codePoint - 97;
                return base;
            }
            function digitToBasic(digit, flag) {
                return digit + 22 + 75 * (digit < 26) - ((0 != flag) << 5);
            }
            function adapt(delta, numPoints, firstTime) {
                var k = 0;
                delta = firstTime ? floor(delta / damp) : delta >> 1;
                delta += floor(delta / numPoints);
                for (;delta > baseMinusTMin * tMax >> 1; k += base) delta = floor(delta / baseMinusTMin);
                return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
            }
            function decode(input) {
                var out, basic, j, index, oldi, w, k, digit, t, baseMinusT, output = [], inputLength = input.length, i = 0, n = initialN, bias = initialBias;
                basic = input.lastIndexOf(delimiter);
                if (basic < 0) basic = 0;
                for (j = 0; j < basic; ++j) {
                    if (input.charCodeAt(j) >= 128) error("not-basic");
                    output.push(input.charCodeAt(j));
                }
                for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
                    for (oldi = i, w = 1, k = base; ;k += base) {
                        if (index >= inputLength) error("invalid-input");
                        digit = basicToDigit(input.charCodeAt(index++));
                        if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
                        i += digit * w;
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (digit < t) break;
                        baseMinusT = base - t;
                        if (w > floor(maxInt / baseMinusT)) error("overflow");
                        w *= baseMinusT;
                    }
                    out = output.length + 1;
                    bias = adapt(i - oldi, out, 0 == oldi);
                    if (floor(i / out) > maxInt - n) error("overflow");
                    n += floor(i / out);
                    i %= out;
                    output.splice(i++, 0, n);
                }
                return ucs2encode(output);
            }
            function encode(input) {
                var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, inputLength, handledCPCountPlusOne, baseMinusT, qMinusT, output = [];
                input = ucs2decode(input);
                inputLength = input.length;
                n = initialN;
                delta = 0;
                bias = initialBias;
                for (j = 0; j < inputLength; ++j) {
                    currentValue = input[j];
                    if (currentValue < 128) output.push(stringFromCharCode(currentValue));
                }
                handledCPCount = basicLength = output.length;
                if (basicLength) output.push(delimiter);
                while (handledCPCount < inputLength) {
                    for (m = maxInt, j = 0; j < inputLength; ++j) {
                        currentValue = input[j];
                        if (currentValue >= n && currentValue < m) m = currentValue;
                    }
                    handledCPCountPlusOne = handledCPCount + 1;
                    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
                    delta += (m - n) * handledCPCountPlusOne;
                    n = m;
                    for (j = 0; j < inputLength; ++j) {
                        currentValue = input[j];
                        if (currentValue < n && ++delta > maxInt) error("overflow");
                        if (currentValue == n) {
                            for (q = delta, k = base; ;k += base) {
                                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                                if (q < t) break;
                                qMinusT = q - t;
                                baseMinusT = base - t;
                                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                                q = floor(qMinusT / baseMinusT);
                            }
                            output.push(stringFromCharCode(digitToBasic(q, 0)));
                            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                            delta = 0;
                            ++handledCPCount;
                        }
                    }
                    ++delta;
                    ++n;
                }
                return output.join("");
            }
            function toUnicode(input) {
                return mapDomain(input, (function(string) {
                    return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                }));
            }
            function toASCII(input) {
                return mapDomain(input, (function(string) {
                    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
                }));
            }
            punycode = {
                version: "1.3.2",
                ucs2: {
                    decode: ucs2decode,
                    encode: ucs2encode
                },
                decode,
                encode,
                toASCII,
                toUnicode
            };
            if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return punycode;
            }.call(exports, __webpack_require__, exports, module), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        })();
    },
    "./node_modules/url/url.js": (__unused_webpack_module, exports, __webpack_require__) => {
        var punycode = __webpack_require__("./node_modules/url/node_modules/punycode/punycode.js");
        exports.parse = urlParse;
        exports.resolve = urlResolve;
        exports.resolveObject = urlResolveObject;
        exports.format = urlFormat;
        exports.Url = Url;
        function Url() {
            this.protocol = null;
            this.slashes = null;
            this.auth = null;
            this.host = null;
            this.port = null;
            this.hostname = null;
            this.hash = null;
            this.search = null;
            this.query = null;
            this.pathname = null;
            this.path = null;
            this.href = null;
        }
        var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, delims = [ "<", ">", '"', "`", " ", "\r", "\n", "\t" ], unwise = [ "{", "}", "|", "\\", "^", "`" ].concat(delims), autoEscape = [ "'" ].concat(unwise), nonHostChars = [ "%", "/", "?", ";", "#" ].concat(autoEscape), hostEndingChars = [ "/", "?", "#" ], hostnameMaxLen = 255, hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
            javascript: true,
            "javascript:": true
        }, hostlessProtocol = {
            javascript: true,
            "javascript:": true
        }, slashedProtocol = {
            http: true,
            https: true,
            ftp: true,
            gopher: true,
            file: true,
            "http:": true,
            "https:": true,
            "ftp:": true,
            "gopher:": true,
            "file:": true
        }, querystring = __webpack_require__("./node_modules/querystring/index.js");
        function urlParse(url, parseQueryString, slashesDenoteHost) {
            if (url && isObject(url) && url instanceof Url) return url;
            var u = new Url;
            u.parse(url, parseQueryString, slashesDenoteHost);
            return u;
        }
        Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
            if (!isString(url)) throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
            var rest = url;
            rest = rest.trim();
            var proto = protocolPattern.exec(rest);
            if (proto) {
                proto = proto[0];
                var lowerProto = proto.toLowerCase();
                this.protocol = lowerProto;
                rest = rest.substr(proto.length);
            }
            if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var slashes = "//" === rest.substr(0, 2);
                if (slashes && !(proto && hostlessProtocol[proto])) {
                    rest = rest.substr(2);
                    this.slashes = true;
                }
            }
            if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
                var hostEnd = -1;
                for (var i = 0; i < hostEndingChars.length; i++) {
                    var hec = rest.indexOf(hostEndingChars[i]);
                    if (-1 !== hec && (-1 === hostEnd || hec < hostEnd)) hostEnd = hec;
                }
                var auth, atSign;
                if (-1 === hostEnd) atSign = rest.lastIndexOf("@"); else atSign = rest.lastIndexOf("@", hostEnd);
                if (-1 !== atSign) {
                    auth = rest.slice(0, atSign);
                    rest = rest.slice(atSign + 1);
                    this.auth = decodeURIComponent(auth);
                }
                hostEnd = -1;
                for (i = 0; i < nonHostChars.length; i++) {
                    hec = rest.indexOf(nonHostChars[i]);
                    if (-1 !== hec && (-1 === hostEnd || hec < hostEnd)) hostEnd = hec;
                }
                if (-1 === hostEnd) hostEnd = rest.length;
                this.host = rest.slice(0, hostEnd);
                rest = rest.slice(hostEnd);
                this.parseHost();
                this.hostname = this.hostname || "";
                var ipv6Hostname = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!ipv6Hostname) {
                    var hostparts = this.hostname.split(/\./);
                    i = 0;
                    for (var l = hostparts.length; i < l; i++) {
                        var part = hostparts[i];
                        if (!part) continue;
                        if (!part.match(hostnamePartPattern)) {
                            var newpart = "";
                            for (var j = 0, k = part.length; j < k; j++) if (part.charCodeAt(j) > 127) newpart += "x"; else newpart += part[j];
                            if (!newpart.match(hostnamePartPattern)) {
                                var validParts = hostparts.slice(0, i);
                                var notHost = hostparts.slice(i + 1);
                                var bit = part.match(hostnamePartStart);
                                if (bit) {
                                    validParts.push(bit[1]);
                                    notHost.unshift(bit[2]);
                                }
                                if (notHost.length) rest = "/" + notHost.join(".") + rest;
                                this.hostname = validParts.join(".");
                                break;
                            }
                        }
                    }
                }
                if (this.hostname.length > hostnameMaxLen) this.hostname = ""; else this.hostname = this.hostname.toLowerCase();
                if (!ipv6Hostname) {
                    var domainArray = this.hostname.split(".");
                    var newOut = [];
                    for (i = 0; i < domainArray.length; ++i) {
                        var s = domainArray[i];
                        newOut.push(s.match(/[^A-Za-z0-9_-]/) ? "xn--" + punycode.encode(s) : s);
                    }
                    this.hostname = newOut.join(".");
                }
                var p = this.port ? ":" + this.port : "";
                var h = this.hostname || "";
                this.host = h + p;
                this.href += this.host;
                if (ipv6Hostname) {
                    this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                    if ("/" !== rest[0]) rest = "/" + rest;
                }
            }
            if (!unsafeProtocol[lowerProto]) for (i = 0, l = autoEscape.length; i < l; i++) {
                var ae = autoEscape[i];
                var esc = encodeURIComponent(ae);
                if (esc === ae) esc = escape(ae);
                rest = rest.split(ae).join(esc);
            }
            var hash = rest.indexOf("#");
            if (-1 !== hash) {
                this.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
            }
            var qm = rest.indexOf("?");
            if (-1 !== qm) {
                this.search = rest.substr(qm);
                this.query = rest.substr(qm + 1);
                if (parseQueryString) this.query = querystring.parse(this.query);
                rest = rest.slice(0, qm);
            } else if (parseQueryString) {
                this.search = "";
                this.query = {};
            }
            if (rest) this.pathname = rest;
            if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
            if (this.pathname || this.search) {
                p = this.pathname || "";
                s = this.search || "";
                this.path = p + s;
            }
            this.href = this.format();
            return this;
        };
        function urlFormat(obj) {
            if (isString(obj)) obj = urlParse(obj);
            if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
            return obj.format();
        }
        Url.prototype.format = function() {
            var auth = this.auth || "";
            if (auth) {
                auth = encodeURIComponent(auth);
                auth = auth.replace(/%3A/i, ":");
                auth += "@";
            }
            var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
            if (this.host) host = auth + this.host; else if (this.hostname) {
                host = auth + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]");
                if (this.port) host += ":" + this.port;
            }
            if (this.query && isObject(this.query) && Object.keys(this.query).length) query = querystring.stringify(this.query);
            var search = this.search || query && "?" + query || "";
            if (protocol && ":" !== protocol.substr(-1)) protocol += ":";
            if (this.slashes || (!protocol || slashedProtocol[protocol]) && false !== host) {
                host = "//" + (host || "");
                if (pathname && "/" !== pathname.charAt(0)) pathname = "/" + pathname;
            } else if (!host) host = "";
            if (hash && "#" !== hash.charAt(0)) hash = "#" + hash;
            if (search && "?" !== search.charAt(0)) search = "?" + search;
            pathname = pathname.replace(/[?#]/g, (function(match) {
                return encodeURIComponent(match);
            }));
            search = search.replace("#", "%23");
            return protocol + host + pathname + search + hash;
        };
        function urlResolve(source, relative) {
            return urlParse(source, false, true).resolve(relative);
        }
        Url.prototype.resolve = function(relative) {
            return this.resolveObject(urlParse(relative, false, true)).format();
        };
        function urlResolveObject(source, relative) {
            if (!source) return relative;
            return urlParse(source, false, true).resolveObject(relative);
        }
        Url.prototype.resolveObject = function(relative) {
            if (isString(relative)) {
                var rel = new Url;
                rel.parse(relative, false, true);
                relative = rel;
            }
            var result = new Url;
            Object.keys(this).forEach((function(k) {
                result[k] = this[k];
            }), this);
            result.hash = relative.hash;
            if ("" === relative.href) {
                result.href = result.format();
                return result;
            }
            if (relative.slashes && !relative.protocol) {
                Object.keys(relative).forEach((function(k) {
                    if ("protocol" !== k) result[k] = relative[k];
                }));
                if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) result.path = result.pathname = "/";
                result.href = result.format();
                return result;
            }
            if (relative.protocol && relative.protocol !== result.protocol) {
                if (!slashedProtocol[relative.protocol]) {
                    Object.keys(relative).forEach((function(k) {
                        result[k] = relative[k];
                    }));
                    result.href = result.format();
                    return result;
                }
                result.protocol = relative.protocol;
                if (!relative.host && !hostlessProtocol[relative.protocol]) {
                    var relPath = (relative.pathname || "").split("/");
                    while (relPath.length && !(relative.host = relPath.shift())) ;
                    if (!relative.host) relative.host = "";
                    if (!relative.hostname) relative.hostname = "";
                    if ("" !== relPath[0]) relPath.unshift("");
                    if (relPath.length < 2) relPath.unshift("");
                    result.pathname = relPath.join("/");
                } else result.pathname = relative.pathname;
                result.search = relative.search;
                result.query = relative.query;
                result.host = relative.host || "";
                result.auth = relative.auth;
                result.hostname = relative.hostname || relative.host;
                result.port = relative.port;
                if (result.pathname || result.search) {
                    var p = result.pathname || "";
                    var s = result.search || "";
                    result.path = p + s;
                }
                result.slashes = result.slashes || relative.slashes;
                result.href = result.format();
                return result;
            }
            var isSourceAbs = result.pathname && "/" === result.pathname.charAt(0), isRelAbs = relative.host || relative.pathname && "/" === relative.pathname.charAt(0), mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = (relPath = relative.pathname && relative.pathname.split("/") || [], 
            result.protocol && !slashedProtocol[result.protocol]);
            if (psychotic) {
                result.hostname = "";
                result.port = null;
                if (result.host) if ("" === srcPath[0]) srcPath[0] = result.host; else srcPath.unshift(result.host);
                result.host = "";
                if (relative.protocol) {
                    relative.hostname = null;
                    relative.port = null;
                    if (relative.host) if ("" === relPath[0]) relPath[0] = relative.host; else relPath.unshift(relative.host);
                    relative.host = null;
                }
                mustEndAbs = mustEndAbs && ("" === relPath[0] || "" === srcPath[0]);
            }
            if (isRelAbs) {
                result.host = relative.host || "" === relative.host ? relative.host : result.host;
                result.hostname = relative.hostname || "" === relative.hostname ? relative.hostname : result.hostname;
                result.search = relative.search;
                result.query = relative.query;
                srcPath = relPath;
            } else if (relPath.length) {
                if (!srcPath) srcPath = [];
                srcPath.pop();
                srcPath = srcPath.concat(relPath);
                result.search = relative.search;
                result.query = relative.query;
            } else if (!isNullOrUndefined(relative.search)) {
                if (psychotic) {
                    result.hostname = result.host = srcPath.shift();
                    var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                    if (authInHost) {
                        result.auth = authInHost.shift();
                        result.host = result.hostname = authInHost.shift();
                    }
                }
                result.search = relative.search;
                result.query = relative.query;
                if (!isNull(result.pathname) || !isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
                result.href = result.format();
                return result;
            }
            if (!srcPath.length) {
                result.pathname = null;
                if (result.search) result.path = "/" + result.search; else result.path = null;
                result.href = result.format();
                return result;
            }
            var last = srcPath.slice(-1)[0];
            var hasTrailingSlash = (result.host || relative.host) && ("." === last || ".." === last) || "" === last;
            var up = 0;
            for (var i = srcPath.length; i >= 0; i--) {
                last = srcPath[i];
                if ("." == last) srcPath.splice(i, 1); else if (".." === last) {
                    srcPath.splice(i, 1);
                    up++;
                } else if (up) {
                    srcPath.splice(i, 1);
                    up--;
                }
            }
            if (!mustEndAbs && !removeAllDots) for (;up--; up) srcPath.unshift("..");
            if (mustEndAbs && "" !== srcPath[0] && (!srcPath[0] || "/" !== srcPath[0].charAt(0))) srcPath.unshift("");
            if (hasTrailingSlash && "/" !== srcPath.join("/").substr(-1)) srcPath.push("");
            var isAbsolute = "" === srcPath[0] || srcPath[0] && "/" === srcPath[0].charAt(0);
            if (psychotic) {
                result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
                authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                if (authInHost) {
                    result.auth = authInHost.shift();
                    result.host = result.hostname = authInHost.shift();
                }
            }
            mustEndAbs = mustEndAbs || result.host && srcPath.length;
            if (mustEndAbs && !isAbsolute) srcPath.unshift("");
            if (!srcPath.length) {
                result.pathname = null;
                result.path = null;
            } else result.pathname = srcPath.join("/");
            if (!isNull(result.pathname) || !isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
            result.auth = relative.auth || result.auth;
            result.slashes = result.slashes || relative.slashes;
            result.href = result.format();
            return result;
        };
        Url.prototype.parseHost = function() {
            var host = this.host;
            var port = portPattern.exec(host);
            if (port) {
                port = port[0];
                if (":" !== port) this.port = port.substr(1);
                host = host.substr(0, host.length - port.length);
            }
            if (host) this.hostname = host;
        };
        function isString(arg) {
            return "string" === typeof arg;
        }
        function isObject(arg) {
            return "object" === typeof arg && null !== arg;
        }
        function isNull(arg) {
            return null === arg;
        }
        function isNullOrUndefined(arg) {
            return null == arg;
        }
    },
    "./src/assets/commons/components/modal/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            ModalWithHtml: () => ModalWithHtml,
            default: () => Modal
        });
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var bem = __webpack_require__("./src/assets/commons/utils/bem.js");
        var scroll_lock = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        const common_bem = (0, bem["default"])("mp", "modal");
        const DEFAULT_MODAL_ID_PRE = "MpModal";
        const VISIBLE = "visible";
        const HIDDEN = "hidden";
        const animationClassMap = {
            visible: common_bem("visibleAnimation"),
            hidden: common_bem("notVisibleAnimation")
        };
        const visibleClassName = common_bem("visible");
        const maskClosableClass = common_bem("closable");
        class Modal {
            constructor({modalId = ""} = {}) {
                this.modalId = `${DEFAULT_MODAL_ID_PRE}${modalId}`;
                this.$modal = __SL_$__(`#${this.modalId}`);
                this.$modalBody = this.$modal.find(`.${common_bem("body")}`);
                this.$modalContainer = this.$modal.find(`.${common_bem("container")}`);
                this.isMobile = state_selector.SL_State.get("request.is_mobile");
                this.maskClosable = this.$modal.data("maskclosable");
                this.visibleState = HIDDEN;
                this.eventsBinded = false;
                this.init();
            }
            init() {
                if (!this.eventsBinded) {
                    this.bindEvents();
                    this.eventsBinded = true;
                }
            }
            show() {
                this.visibleState = VISIBLE;
                (0, scroll_lock.disablePageScroll)(this.$modalBody.get(0));
                this.$modal.addClass([ visibleClassName, animationClassMap.visible ]).removeClass(animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                this.visibleState = HIDDEN;
                (0, scroll_lock.enablePageScroll)(this.$modalBody.get(0));
                this.toggleMaskClassName();
                this.$modal.addClass(animationClassMap.hidden).removeClass(animationClassMap.visible);
                if (force) this.afterAnimation();
            }
            toggleMaskClassName() {
                if (this.maskClosable) this.$modal.find(`.${common_bem("mask")}`).toggleClass(maskClosableClass, this.visibleState === VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(visibleClassName, this.visibleState === VISIBLE);
            }
            bindEvents() {
                this.$modal.on("click", `.${common_bem("close")}`, this.hide.bind(this, false));
                if (this.isMobile) this.$modal.on("touchstart", `.${common_bem("close")}`, this.hide.bind(this, false));
                if (this.maskClosable) this.$modal.on("click", `.${common_bem("mask")}`, this.hide.bind(this, false));
                this.$modalContainer.on("animationend", this.afterAnimation.bind(this));
            }
        }
        var BaseClass = __webpack_require__("./src/assets/commons/base/BaseClass.js");
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
                    closeCallback: () => {},
                    ...options
                };
                this.modalId = config.id || `${DEFAULT_MODAL_ID_PRE}${++uuid}`;
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
                    this.bindEvents();
                }
                const $modalBody = this.$modal.find(`.${common_bem("body")}`);
                this.$modal.appendTo(document.body);
                (0, scroll_lock.disablePageScroll)($modalBody.get(0));
                this.visibleState = VISIBLE;
                this.$modal.addClass([ visibleClassName, animationClassMap.visible ]).removeClass(animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                const $modalBody = this.$modal.find(`.${common_bem("body")}`);
                this.visibleState = HIDDEN;
                (0, scroll_lock.enablePageScroll)($modalBody.get(0));
                window.SL_EventBus.emit("global:popup:close");
                this.toggleMaskClassName();
                this.$modal.addClass(animationClassMap.hidden).removeClass(animationClassMap.visible);
                if (force) this.afterAnimation();
                if ("function" === typeof this.config.closeCallback) this.config.closeCallback(this.$modal);
            }
            toggleMaskClassName() {
                if (this.config.maskClosable) this.$modal.find(`.${common_bem("mask")}`).toggleClass(maskClosableClass, this.visibleState === VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(visibleClassName, this.visibleState === VISIBLE);
                if ("function" === typeof this.config.afterClose) this.config.afterClose(this.$modal);
                this.destroy();
            }
            destroy() {
                if (this.config.destroyedOnClosed && this.visibleState === HIDDEN) {
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
    },
    "./src/assets/commons/utils/bem.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => createNamespace
        });
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
    },
    "./src/assets/commons/utils/convertPrice.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            processPrice: () => processPrice
        });
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        const useSuperScriptDecimals = window.SL_State.get("theme.settings.superscript_decimals");
        const {convertFormat, getConvertPrice} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_0__["default"];
        function convertPrice(price, {code, lang}) {
            const formattedPrice = convertFormat(price);
            code || (code = window.SL_State.get("currencyCode"));
            lang || (lang = window.SL_State.get("request.locale"));
            const {symbolOrder, currencySymbol, integer, decimal, fraction} = getConvertPrice(price, {
                code,
                lang
            });
            return {
                symbolIsPrefix: "prefix" === symbolOrder,
                symbol: currencySymbol,
                integer,
                decimal,
                fraction,
                origin: formattedPrice
            };
        }
        function processPrice($el, price, {isSavePrice, code, lang} = {}, decimalBuilders = (decimal => `<sup class="body6">${decimal}</sup>`)) {
            const {symbolIsPrefix, symbol, fraction, integer, origin} = convertPrice(price, {
                code,
                lang
            });
            const _integer = null !== integer && void 0 !== integer ? integer : "";
            const _decimal = null !== fraction && void 0 !== fraction ? fraction : "";
            let content = "";
            const currencySymbolHtml = `<span class="notranslate">${symbol}</span>`;
            const renderSuperDecimal = () => {
                const shouldShowDecimal = _decimal.length > 0;
                const noSymbolCurrency = `<span>${_integer}</span>${shouldShowDecimal ? decimalBuilders(_decimal) : ""}`;
                return symbolIsPrefix ? `${currencySymbolHtml}${noSymbolCurrency}` : `${noSymbolCurrency}${currencySymbolHtml}`;
            };
            const renderSavePrice = () => {
                const zeroRE = /^0+$/g;
                if (zeroRE.test(_decimal)) return symbolIsPrefix ? `${currencySymbolHtml}<span class="notranslate">${_integer}</span>` : `<span class="notranslate">${_integer}</span>${currencySymbolHtml}`;
                return `<span class="notranslate">${origin}</span>`;
            };
            if (useSuperScriptDecimals) content = renderSuperDecimal(); else content = `<span class="notranslate">${origin}</span>`;
            if (isSavePrice) content = renderSavePrice();
            return {
                render: () => {
                    $el.html(content);
                },
                get: () => content
            };
        }
    },
    "./src/assets/commons/utils/countdown.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            timers: () => timers,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const t = {};
        const timers = t;
        const fillZero = num => `${num}`.padStart(2, "0");
        const countdown = (target, fn, params) => {
            var _p$interval;
            let p = {};
            let prevTimes = null;
            if ("string" === typeof params) p.id = params; else if ("object" === typeof params) p = params;
            let {id} = p;
            const {hasDay, hasMillisecond, autoFill = "part"} = p;
            if (t[id]) clearInterval(t[id]);
            const countFn = (times = [ "0", "0", "0", "0", "0" ], interval) => {
                if ("part" === autoFill || "all" === autoFill) {
                    if ("all" === autoFill) times[0] = fillZero(times[0]);
                    times[1] = fillZero(times[1]);
                    times[2] = fillZero(times[2]);
                    times[3] = fillZero(times[3]);
                }
                return fn(times, interval, t[id]);
            };
            const intervalFn = () => {
                const now = Date.now();
                if (now < target) {
                    const interval = target - now;
                    let d = 0;
                    let h = 0;
                    let ms = 0;
                    if (hasDay) {
                        d = Math.floor(interval / 864e5);
                        h = Math.floor(interval % 864e5 / 36e5);
                    } else h = Math.floor(interval / 36e5);
                    const m = Math.floor(interval % 36e5 / 6e4);
                    const s = Math.floor(interval % 6e4 / 1e3);
                    if (hasMillisecond) ms = Math.floor(interval % 1e3 / 100);
                    const times = [ `${d}`, `${h}`, `${m}`, `${s}`, `${ms}` ];
                    let changed = false;
                    if (!prevTimes || times.some(((item, index) => item !== prevTimes[index]))) changed = true;
                    prevTimes = times;
                    if (changed) {
                        const result = countFn(times, interval);
                        if (false === result) clearInterval(t[id]);
                    }
                } else {
                    countFn(void 0, 0);
                    clearInterval(t[id]);
                }
            };
            intervalFn();
            const timer = setInterval(intervalFn, null !== (_p$interval = p.interval) && void 0 !== _p$interval ? _p$interval : 200);
            if (!id) id = timer;
            t[id] = timer;
            return t[id];
        };
        const __WEBPACK_DEFAULT_EXPORT__ = countdown;
    },
    "./src/assets/commons/utils/effectFc.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = fn => (...props) => {
            let offEvents = [];
            let useEffect = function(instance, method, eventName, eventFn) {
                if ("object" !== typeof instance || "string" !== typeof method || "string" !== typeof eventName || "function" !== typeof eventFn) return;
                const arr = null === method || void 0 === method ? void 0 : method.split(/\s*,\s*/);
                const onName = null === arr || void 0 === arr ? void 0 : arr[0];
                const offName = null === arr || void 0 === arr ? void 0 : arr[1];
                if (onName) {
                    var _instance$onName;
                    null === (_instance$onName = instance[onName]) || void 0 === _instance$onName ? void 0 : _instance$onName.call(instance, eventName, eventFn);
                }
                if (offName) {
                    var _instance$offName;
                    const offEvent = null === (_instance$offName = instance[offName]) || void 0 === _instance$offName ? void 0 : _instance$offName.bind(instance, eventName, eventFn);
                    offEvents.push(offEvent);
                }
            };
            let unmount = null === fn || void 0 === fn ? void 0 : fn.call({
                useEffect
            }, ...props);
            return (...args) => {
                var _offEvents;
                if (null !== (_offEvents = offEvents) && void 0 !== _offEvents && _offEvents.length) offEvents.forEach((offEvent => {
                    offEvent();
                }));
                if ("function" === typeof unmount) {
                    var _unmount;
                    null === (_unmount = unmount) || void 0 === _unmount ? void 0 : _unmount(...args);
                }
                offEvents = null;
                useEffect = null;
                unmount = null;
            };
        };
    },
    "./src/assets/commons/utils/isMobile.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => isMobile
        });
        let d = __SL_$__("i[data-platform]");
        if (!d.get(0)) {
            d = __SL_$__(`<i data-platform></i>`);
            __SL_$__(document.body).append(d);
        }
        function isMobile() {
            let dom = __SL_$__("i[data-platform]");
            if (!dom.get(0)) {
                dom = __SL_$__(`<i data-platform></i>`);
                __SL_$__(document.body).append(dom);
            }
            return "block" === dom.css("display");
        }
    },
    "./src/assets/commons/utils/url.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            changeURLArg: () => changeURLArg,
            getUrlQuery: () => getUrlQuery,
            getUrlAllQuery: () => getUrlAllQuery,
            delParam: () => delParam,
            updateUrlQueryParam: () => updateUrlQueryParam
        });
        var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/url/url.js");
        var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/querystring/index.js");
        function changeURLArg(urlStr, arg, argVal) {
            const durl = decodeURIComponent(urlStr);
            const pattern = `${arg}=([^&]*)`;
            const replaceText = `${arg}=${argVal}`;
            if (durl.match(pattern)) {
                let tmp = `/(${arg}=)([^&]*)/gi`;
                tmp = durl.replace(eval(tmp), replaceText);
                return tmp;
            }
            if (durl.match("[?]")) return `${durl}&${replaceText}`;
            return `${durl}?${replaceText}`;
        }
        function getUrlQuery(key) {
            if ("undefined" !== typeof window) {
                var _url$parse;
                const locationHref = window.location.href;
                const urlQuery = null === (_url$parse = url__WEBPACK_IMPORTED_MODULE_0__.parse(decodeURIComponent(locationHref))) || void 0 === _url$parse ? void 0 : _url$parse.query;
                const urlQueryObj = querystring__WEBPACK_IMPORTED_MODULE_1__.parse(urlQuery);
                const hitUrlQuery = urlQueryObj[key];
                if (hitUrlQuery) {
                    if (hitUrlQuery && -1 !== hitUrlQuery.indexOf("?")) {
                        window.history.replaceState({}, document.title, changeURLArg(locationHref, key, `${hitUrlQuery.replace("?", "&")}`));
                        return hitUrlQuery.split("?")[0];
                    }
                    return hitUrlQuery;
                }
                return null;
            }
            return null;
        }
        function getUrlAllQuery(href) {
            var _url$parse2;
            const locationHref = href || window.location.href;
            const urlQuery = null === (_url$parse2 = url__WEBPACK_IMPORTED_MODULE_0__.parse(decodeURIComponent(locationHref))) || void 0 === _url$parse2 ? void 0 : _url$parse2.query;
            const urlQueryObj = querystring__WEBPACK_IMPORTED_MODULE_1__.parse(urlQuery);
            return urlQueryObj;
        }
        function delParam(paramKey) {
            let {href} = window.location;
            const urlParam = window.location.search.substr(1);
            const beforeUrl = href.substr(0, href.indexOf("?"));
            let nextUrl = "";
            const arr = [];
            if ("" !== urlParam) {
                const urlParamArr = urlParam.split("&");
                urlParamArr.forEach((segment => {
                    const paramArr = segment.split("=");
                    if (paramArr[0] !== paramKey) arr.push(segment);
                }));
            }
            if (arr.length > 0) nextUrl = `?${arr.join("&")}`;
            href = beforeUrl + nextUrl;
            return href;
        }
        function getUrlPathId(u = window.location.href, index = -1) {
            var _url$parse$pathname;
            const urlArr = (null === (_url$parse$pathname = url__WEBPACK_IMPORTED_MODULE_0__.parse(u).pathname) || void 0 === _url$parse$pathname ? void 0 : _url$parse$pathname.replace(/^\//, "").split("/")) || [];
            if (index < 0) return urlArr[urlArr.length + index];
            return urlArr[index];
        }
        function updateUrlQueryParam(urlStr, param, value) {
            const re = new RegExp(`([?&])${param}=.*?(&|$)`, "i");
            const separator = -1 !== urlStr.indexOf("?") ? "&" : "?";
            if (urlStr.match(re)) return urlStr.replace(re, `$1${param}=${value}$2`);
            return `${urlStr}${separator}${param}=${value}`;
        }
        function stringifyUrl(originUrl, params, sign = "?") {
            const keys = Object.keys(params);
            if (!keys.length) return originUrl;
            return `${originUrl}${originUrl.includes(sign) ? "" : sign}${keys.map((key => {
                var _params$key;
                let value = null !== (_params$key = params[key]) && void 0 !== _params$key ? _params$key : "";
                if ("object" === typeof value) value = JSON.stringify(value);
                return `${key}=${window.encodeURIComponent(value)}`;
            })).join("&")}`;
        }
    },
    "./src/assets/product/commons/js/createShadowDom.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            shadowDomStyle: () => shadowDomStyle,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const shadowDomStyle = __SL_$__("<style></style>").attr({
            type: "text/css"
        }).append(`table{border-collapse:collapse}table:not([cellpadding]) td,table:not([cellpadding]) th{padding:.4rem}table:not([border="0"]):not([style*=border-width]) td,table:not([border="0"]):not([style*=border-width]) th{border-width:1px}table:not([border="0"]):not([style*=border-style]) td,table:not([border="0"]):not([style*=border-style]) th{border-style:solid}table:not([border="0"]):not([style*=border-color]) td,table:not([border="0"]):not([style*=border-color]) th{border-color:#ccc}iframe,video{max-width:100%;outline:none}img{height:auto;max-width:100%}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}@media screen and (max-width: 750px){table{width: 100%!important}}`);
        const createShadowDom = () => {
            const shadowDom = document.querySelector("[data-node=shadow-dom]");
            if (!shadowDom) return;
            const shadowContent = __SL_$__(shadowDom).prev("[data-node=shadow-content]");
            __SL_$__(shadowDom).attr("class", "shadow-dom");
            if (shadowContent.get(0)) {
                shadowContent.children(".mce-content-body").css("word-break", "break-word");
                shadowContent.prepend(__SL_$__("<style></style>").attr({
                    type: "text/css"
                }).append(`body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;line-height:1.4;margin:1rem}table{border-collapse:collapse}table:not([cellpadding]) td,table:not([cellpadding]) th{padding:.4rem}table:not([border="0"]):not([style*=border-width]) td,table:not([border="0"]):not([style*=border-width]) th{border-width:1px}table:not([border="0"]):not([style*=border-style]) td,table:not([border="0"]):not([style*=border-style]) th{border-style:solid}table:not([border="0"]):not([style*=border-color]) td,table:not([border="0"]):not([style*=border-color]) th{border-color:#ccc}iframe,video{max-width:100%;outline:none}img{height:auto;max-width:100%}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}@media screen and (max-width: 750px){table{width: 100%}}`));
                const shadowRoot = shadowDom.attachShadow({
                    mode: "open"
                });
                shadowRoot.append(shadowContent.get(0));
                __SL_$__(shadowDom).removeAttr("data-node");
                shadowContent.removeAttr("data-node");
            }
            shadowDom.__updateLazyExtraElements__();
        };
        const __WEBPACK_DEFAULT_EXPORT__ = createShadowDom;
    },
    "./src/assets/product/commons/js/product-info.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/convertPrice.js");
        let uniqueId = "";
        const priceWrap = ".product-info-price_";
        const priceSellWrap = ".product-price-sales_";
        const priceOriginWrap = ".product-price-origin_";
        const priceVipWrap = ".product-price-vip_";
        const priceDiscountWrap = ".product-price-discount_";
        function getDiscount(showDiscount, sku) {
            const $el = __SL_$__(`${priceDiscountWrap}${uniqueId}`);
            const discountSettingStyle = null === $el || void 0 === $el ? void 0 : $el.attr("product_discount_style");
            const ratioCalc = Math.round(100 * (1 - sku.price / sku.originPrice));
            const discountText = "number" === discountSettingStyle ? sku.originPrice - sku.price : ratioCalc;
            let isHidden = true;
            if (showDiscount && discountText > 0) if ("number" === discountSettingStyle) {
                const discount = sku.originPrice - sku.price;
                if (discount > 0) {
                    const {get: getPriceContent} = (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_1__.processPrice)($el, discount, {
                        isSavePrice: true
                    });
                    isHidden = false;
                    $el.html((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("products.product_list.save_byjs", {
                        priceDom: getPriceContent()
                    }));
                } else isHidden = true;
            } else {
                isHidden = false;
                $el.html((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("products.product_list.save_ratio", {
                    price: ratioCalc
                }));
            } else isHidden = true;
            $el.toggleClass("hide", isHidden);
        }
        const setSkuPrice = (spuSoldout, activeSku = {}) => {
            var _SL_$__;
            const discountSetting = null === (_SL_$__ = __SL_$__(`${priceWrap}${uniqueId}`)) || void 0 === _SL_$__ ? void 0 : _SL_$__.attr("product_discount");
            const {originPrice: oriPrice, price, showMemberMark} = activeSku;
            const originPrice = oriPrice > price ? oriPrice : "";
            const showDiscount = discountSetting && !spuSoldout;
            const $priceWrapperEl = __SL_$__(`.price.product-info-price_${uniqueId}`);
            if (oriPrice > price) {
                if (!$priceWrapperEl.hasClass("product-info-price_hasDiscount")) $priceWrapperEl.addClass("product-info-price_hasDiscount");
            } else $priceWrapperEl.removeClass("product-info-price_hasDiscount");
            (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_1__.processPrice)(__SL_$__(`${priceSellWrap}${uniqueId}`), price).render();
            if (showMemberMark) __SL_$__(`${priceVipWrap}${uniqueId}`).removeClass("hide"); else __SL_$__(`${priceVipWrap}${uniqueId}`).addClass("hide");
            if (originPrice) {
                (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_1__.processPrice)(__SL_$__(`${priceOriginWrap}${uniqueId}`), originPrice).render();
                __SL_$__(`${priceOriginWrap}${uniqueId}`).removeClass("hide");
            } else __SL_$__(`${priceOriginWrap}${uniqueId}`).addClass("hide");
            getDiscount(showDiscount, activeSku);
        };
        const getHighOriginPrice = (min, item) => {
            if (min.price === item.price) return min.originPrice > item.originPrice ? min : item;
            return min.price > item.price ? item : min;
        };
        const checkActive = item => {
            var _item$saleActivityRes;
            return null === item || void 0 === item ? void 0 : null === (_item$saleActivityRes = item.saleActivityResponseList) || void 0 === _item$saleActivityRes ? void 0 : _item$saleActivityRes.some((activity => 1 === activity.promotionType && 1 === activity.promotionSubType));
        };
        const getMinPrice = (soldOut, skuList) => null === skuList || void 0 === skuList ? void 0 : skuList.reduce(((min, item) => {
            if (null === min) return item;
            if (checkActive(min)) {
                if (checkActive(item)) return getHighOriginPrice(min, item);
                return min;
            }
            if (checkActive(item)) return item;
            if (null !== min && void 0 !== min && min.showMemberMark) {
                if (null !== item && void 0 !== item && item.showMemberMark) return getHighOriginPrice(min, item);
                return min;
            }
            if (null !== item && void 0 !== item && item.showMemberMark) return item;
            return getHighOriginPrice(min, item);
        }), null);
        const setMinPrice = (soldOut, skuList) => {
            const minSku = getMinPrice(soldOut, skuList);
            setSkuPrice(soldOut, minSku);
        };
        const setProductPrice = (id, statePath, activeSku) => {
            uniqueId = id;
            const {skuList} = window.SL_State.get(`${statePath}.sku`);
            const {soldOut} = window.SL_State.get(`${statePath}.spu`);
            if (activeSku) setSkuPrice(soldOut, activeSku); else setMinPrice(soldOut, skuList);
        };
        const __WEBPACK_DEFAULT_EXPORT__ = setProductPrice;
    },
    "./src/assets/product/detail/js/product-button-report.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            addToCartHdReport: () => addToCartHdReport,
            addToCartThirdReport: () => addToCartThirdReport,
            buyNowHdReport: () => buyNowHdReport,
            paypalHdReport: () => paypalHdReport
        });
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var syntax_patch = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        const {formatCurrency} = currency["default"];
        const componentMap = {
            addtocart: 101,
            buynow: 102,
            paypal: 103,
            morePay: 104
        };
        const pageMap = {
            Home: {
                page: 101,
                module: 900
            },
            ProductsDetail: {
                page: 105,
                module: 106
            },
            QuickView: {
                page: 107,
                module: 106
            },
            QuickAdd: {
                page: 108,
                module: 106
            },
            SingleQuickAdd: {
                page: 108,
                module: 109,
                component: 101
            }
        };
        const pageId = {
            Home: 101,
            ProductsSearch: 102,
            Products: 103,
            ProductsDetail: 105,
            Activity: 115
        };
        function findSectionId(selector) {
            const id = __SL_$__(selector).closest(".shopline-section").attr("id");
            const trueId = id && id.replace("shopline-section-", "");
            return trueId;
        }
        function newHdReportData({addtocartType, price, skuId, spuId, num, modalType, variant, collectionId, collectionName, position, dataId, eventID, cartId, moreInfo = {}, singleItem = {}}) {
            let config = {};
            if (modalType) {
                config = pageMap[modalType];
                config.page_id = pageId[state_selector.SL_State.get("templateAlias")];
            } else {
                config = (0, syntax_patch.nullishCoalescingOperator)(pageMap[state_selector.SL_State.get("templateAlias")], {});
                if ("Home" === state_selector.SL_State.get("templateAlias")) {
                    config.module_type = "单个商品";
                    config.component_ID = findSectionId("[data-ssr-plugin-product-detail-container]");
                }
            }
            const index = "" === (0, syntax_patch.nullishCoalescingOperator)(position, "") ? "" : Number(position) + 1;
            const data = {
                component: componentMap[addtocartType],
                ...config,
                event_name: "AddToCart",
                data_id: dataId,
                addtocart_type: "morePay" === addtocartType ? "buynow" : addtocartType,
                action_type: -999,
                event_id: `addToCart${eventID}`,
                currency: state_selector.SL_State.get("storeInfo.currency"),
                value: formatCurrency(price * num),
                cart_id: cartId,
                ...moreInfo,
                items: [ {
                    sku_id: skuId,
                    spu_id: spuId,
                    index,
                    collection_id: (0, syntax_patch.nullishCoalescingOperator)(collectionId, ""),
                    collection_name: (0, syntax_patch.nullishCoalescingOperator)(collectionName, ""),
                    variant: (0, syntax_patch.nullishCoalescingOperator)(variant, ""),
                    price: formatCurrency(price),
                    quantity: num,
                    ...singleItem
                } ]
            };
            window.HdSdk && window.HdSdk.shopTracker && window.HdSdk.shopTracker.collect(data);
        }
        var api_logger = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var data_report_enum = __webpack_require__("../shared/browser/events/data-report/enum/index.js");
        const logger = (0, api_logger["default"])(`${data_report_enum.ADD_TO_CART} - EMIT`);
        const external = window && window.Shopline.event;
        const addToCart = data => {
            logger.info(data);
            return external.emit(data_report_enum.ADD_TO_CART, {
                data,
                interior: data_report_enum.ADD_TO_CART,
                onSuccess: result => {
                    logger.info("success", result);
                },
                onError: error => {
                    logger.error(error);
                }
            });
        };
        addToCart.apiName = data_report_enum.ADD_TO_CART;
        const add_to_cart = addToCart;
        const {formatCurrency: product_button_report_formatCurrency, unformatCurrency} = currency["default"];
        function reportAddToCartEvent(data) {
            try {
                add_to_cart(data);
            } catch (e) {
                console.error(e);
            }
        }
        function addToCartThirdReport({spuId, name, price, skuId, num, eventID = (0, tool.getEventID)(), variant}) {
            var _window, _window$SL_State;
            window.SL_EventBus.emit("global:thirdPartReport", {
                GA: [ [ "event", "add_to_cart", {
                    items: [ {
                        id: skuId,
                        name,
                        price: product_button_report_formatCurrency(price),
                        quantity: num,
                        variant
                    } ]
                } ] ],
                GA4: [ [ "event", "add_to_cart", {
                    currency: window.SL_State.get("storeInfo.currency"),
                    value: product_button_report_formatCurrency(price * (num || 1)),
                    items: [ {
                        item_id: skuId,
                        item_name: name,
                        price: product_button_report_formatCurrency(price),
                        quantity: num,
                        item_variant: variant
                    } ]
                } ] ],
                GAAds: [ [ "event", "conversion", {
                    value: product_button_report_formatCurrency(price * (num || 1)),
                    currency: window.SL_State.get("storeInfo.currency")
                }, "ADD-TO-CART" ] ],
                FBPixel: [ [ "track", "AddToCart", {
                    content_ids: spuId,
                    content_name: name || "",
                    content_category: "",
                    content_type: "product_group",
                    currency: window.SL_State.get("storeInfo.currency"),
                    value: product_button_report_formatCurrency(price)
                }, {
                    eventID: `addToCart${eventID}`
                } ] ],
                GAR: [ [ "event", "add_to_cart", {
                    value: product_button_report_formatCurrency(price * (num || 1)),
                    items: [ {
                        id: skuId,
                        google_business_vertical: "retail"
                    } ]
                } ] ],
                GARemarketing: [ [ "event", "add_to_cart", {
                    ecomm_prodid: skuId,
                    ecomm_pagetype: "cart",
                    ecomm_totalvalue: product_button_report_formatCurrency(price * (num || 1))
                } ] ]
            });
            reportAddToCartEvent({
                content_spu_id: spuId,
                content_sku_id: skuId,
                content_category: "",
                content_name: name,
                currency: null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SL_State = _window.SL_State) || void 0 === _window$SL_State ? void 0 : _window$SL_State.get("storeInfo.currency"),
                price: product_button_report_formatCurrency(price || 0),
                value: product_button_report_formatCurrency(price || 0),
                quantity: num
            });
            return eventID;
        }
        function addToCartHdReport({spuId, skuId, num, price, name, page, event_status, modalType, variant, collectionId, collectionName, position, dataId, eventID, cartId}) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report("60006263", {
                page,
                event_name: "additem",
                event_category: "cart",
                product_type: "product",
                product_id: spuId,
                variantion_id: skuId,
                quantity: num,
                price: product_button_report_formatCurrency(price),
                product_name: name,
                event_status,
                cart_id: cartId
            });
            newHdReportData({
                addtocartType: "addtocart",
                price,
                page,
                skuId,
                spuId,
                num,
                modalType,
                variant,
                collectionId,
                collectionName,
                position,
                dataId,
                eventID,
                cartId,
                moreInfo: {
                    event_status
                }
            });
        }
        function buyNowHdReport({spuId, skuId, num, price, name, page, event_status, modalType, variant, collectionId, collectionName, isMorePay, position, dataId, eventID, cartId}) {
            var _window$HdSdk2;
            null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.report("60006263", {
                page,
                event_name: "buy_now",
                product_id: spuId,
                variantion_id: skuId,
                quantity: num,
                price: product_button_report_formatCurrency(price),
                product_name: name,
                event_category: "cart",
                event_status
            });
            newHdReportData({
                addtocartType: isMorePay ? "morePay" : "buynow",
                price,
                page,
                skuId,
                spuId,
                num,
                modalType,
                variant,
                collectionId,
                collectionName,
                position,
                dataId,
                eventID,
                cartId,
                moreInfo: {
                    event_status
                }
            });
        }
        function paypalHdReport(data) {
            var _window$HdSdk3;
            const {cartId, ...rest} = data;
            const position = "" === (0, syntax_patch.nullishCoalescingOperator)(data.position, "") ? "" : Number(data.position) + 1;
            null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : _window$HdSdk3.shopTracker.report("60006263", {
                ...rest,
                position
            });
            newHdReportData({
                addtocartType: "paypal",
                price: unformatCurrency(data.price),
                page: data.page,
                skuId: data.variantion_id,
                spuId: data.product_id,
                num: data.quantity,
                modalType: data.modalType,
                variant: data.variant,
                collectionId: data.collectionId,
                collectionName: data.collectionName,
                position: data.position,
                dataId: data.dataId,
                eventID: data.eventID,
                cartId: data.cartId,
                moreInfo: {
                    event_status: data.event_status
                }
            });
        }
    },
    "./src/assets/product/detail/js/product-button.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => product_button,
            getVariant: () => getVariant
        });
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var paypal = __webpack_require__("../shared/browser/components/paypal/index.js");
        var dataAccessor = __webpack_require__("../shared/browser/utils/dataAccessor.js");
        var pageMapping = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        var checkout = __webpack_require__("../shared/browser/utils/checkout.js");
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        var syntax_patch = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        class EventAddCheckoutEnd {
            constructor(name) {
                this.index = 0;
                this.name = "event_add_checkout_by_le";
                if (name) this.name = name;
            }
            static getUuid() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    const r = 16 * Math.random() | 0;
                    const v = "x" === c ? r : 3 & r | 8;
                    return v.toString(16);
                }));
            }
            getCheckoutKey() {
                this.index += 1;
                return `${this.name}_${EventAddCheckoutEnd.getUuid()}_${this.index}`;
            }
            getUuidAndMonitorCheckoutEnd(eventName, callback) {
                const key = this.getCheckoutKey();
                window.SL_EventBus && window.SL_EventBus.on(eventName, (data => {
                    const {event_status, stage} = (0, syntax_patch.nullishCoalescingOperator)(data.data, {});
                    if (stage === key) callback(event_status);
                }));
                return key;
            }
        }
        const checkoutEnd = new EventAddCheckoutEnd;
        var utils = __webpack_require__("../shared/browser/report/product/utils/index.js");
        var globalEvent = __webpack_require__("./src/assets/commons/cart/globalEvent.js");
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var debounce = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var product_button_report = __webpack_require__("./src/assets/product/detail/js/product-button-report.js");
        const {formatCurrency} = currency["default"];
        const getVariant = (skuAttributeIds, skuAttributeMap) => {
            var _skuAttributeIds$map;
            return null === skuAttributeIds || void 0 === skuAttributeIds ? void 0 : null === (_skuAttributeIds$map = skuAttributeIds.map((item => {
                var _skuAttributeMap$item, _skuAttributeMap$item2, _skuAttributeMap$item3;
                return null === skuAttributeMap || void 0 === skuAttributeMap ? void 0 : null === (_skuAttributeMap$item = skuAttributeMap[null === item || void 0 === item ? void 0 : item.id]) || void 0 === _skuAttributeMap$item ? void 0 : null === (_skuAttributeMap$item2 = _skuAttributeMap$item.skuAttributeValueMap) || void 0 === _skuAttributeMap$item2 ? void 0 : null === (_skuAttributeMap$item3 = _skuAttributeMap$item2[null === item || void 0 === item ? void 0 : item.valueId]) || void 0 === _skuAttributeMap$item3 ? void 0 : _skuAttributeMap$item3.defaultValue;
            }))) || void 0 === _skuAttributeIds$map ? void 0 : _skuAttributeIds$map.toString();
        };
        const setChannel = () => {
            (0, dataAccessor.setSyncData)({
                orderFrom: "web"
            });
        };
        class ButtonEvent {
            constructor({id, cartRoot, buyNowRoot, payPayId, soldOutRoot, spu, onAddSuccess, onAddError, sku, modalType, position}) {
                this.getReportCartId();
                this.addButton = cartRoot;
                this.buyButton = buyNowRoot;
                this.payPayId = payPayId;
                this.soldOutRoot = soldOutRoot;
                this.onAddSuccess = onAddSuccess;
                this.onAddError = onAddError;
                this.spu = spu;
                this.sku = sku;
                this.initPaypal();
                this.initEvent();
                this.toast = new toast["default"];
                this.initLoading();
                this.num = 1;
                this.page = String(id).startsWith("productRecommendModal") ? "123" : pageMapping["default"][window.SL_State.get("templateAlias")];
                this.modalType = modalType;
                this.position = position;
            }
            async getReportCartId() {
                this.cartId = await (0, utils.getCartId)();
            }
            initLoading() {
                this.addLoading = new toast["default"]({
                    duration: 0,
                    target: this.addButton,
                    type: "loading",
                    className: "product_add_loading"
                });
                this.addLoading.close();
                this.buyLoading = new toast["default"]({
                    duration: 0,
                    target: this.buyButton,
                    type: "loading",
                    className: "product_buy_loading"
                });
                this.buyLoading.close();
            }
            initPaypal() {
                var _this$buttonConfig, _this$buttonConfig$or;
                if (0 === __SL_$__(`#${this.payPayId}`).length) return;
                let dataId;
                let eventID;
                this.buttonConfig = window.SL_State.get("productSettleButtonConfig");
                const stage = checkoutEnd.getUuidAndMonitorCheckoutEnd("trade:spb:report", (status => {
                    var _this$activeSku, _this$sku, _this$spu, _this$spu$sortationLi, _this$spu$sortationLi2, _this$spu2, _this$spu2$sortationL, _this$spu2$sortationL2;
                    const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                    (0, product_button_report.paypalHdReport)({
                        event_name: "quick_payment",
                        product_id: spuId,
                        variantion_id: skuId,
                        quantity: this.num,
                        price: formatCurrency(price),
                        product_name: name,
                        page: this.page,
                        event_status: status,
                        modalType: this.modalType,
                        variant: getVariant(null === (_this$activeSku = this.activeSku) || void 0 === _this$activeSku ? void 0 : _this$activeSku.skuAttributeIds, null === (_this$sku = this.sku) || void 0 === _this$sku ? void 0 : _this$sku.skuAttributeMap),
                        collectionId: null === (_this$spu = this.spu) || void 0 === _this$spu ? void 0 : null === (_this$spu$sortationLi = _this$spu.sortationList) || void 0 === _this$spu$sortationLi ? void 0 : null === (_this$spu$sortationLi2 = _this$spu$sortationLi[0]) || void 0 === _this$spu$sortationLi2 ? void 0 : _this$spu$sortationLi2.sortationId,
                        collectionName: null === (_this$spu2 = this.spu) || void 0 === _this$spu2 ? void 0 : null === (_this$spu2$sortationL = _this$spu2.sortationList) || void 0 === _this$spu2$sortationL ? void 0 : null === (_this$spu2$sortationL2 = _this$spu2$sortationL[0]) || void 0 === _this$spu2$sortationL2 ? void 0 : _this$spu2$sortationL2.sortationName,
                        position: this.position,
                        dataId,
                        eventID,
                        cartId: this.cartId
                    });
                }));
                setChannel();
                this.PayPalButton = new paypal["default"]({
                    stage,
                    needReport: () => {
                        var _window$HdSdk, _window$HdSdk$shopTra, _this$activeSku2, _this$sku2;
                        dataId = null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : null === (_window$HdSdk$shopTra = _window$HdSdk.shopTracker) || void 0 === _window$HdSdk$shopTra ? void 0 : _window$HdSdk$shopTra.getDataId();
                        eventID = (0, tool.getEventID)();
                        const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                        return {
                            eventID: (0, product_button_report.addToCartThirdReport)({
                                eventID,
                                spuId,
                                name,
                                price,
                                num: this.num,
                                skuId,
                                variant: getVariant(null === (_this$activeSku2 = this.activeSku) || void 0 === _this$activeSku2 ? void 0 : _this$activeSku2.skuAttributeIds, null === (_this$sku2 = this.sku) || void 0 === _this$sku2 ? void 0 : _this$sku2.skuAttributeMap)
                            }),
                            dataId,
                            eventName: "AddToCart"
                        };
                    },
                    beforeCreateOrder: () => {},
                    domId: this.payPayId,
                    height: __SL_$__(`#${this.payPayId}`).height(),
                    dynamic: null === (_this$buttonConfig = this.buttonConfig) || void 0 === _this$buttonConfig ? void 0 : null === (_this$buttonConfig$or = _this$buttonConfig.originConfig) || void 0 === _this$buttonConfig$or ? void 0 : _this$buttonConfig$or.system,
                    onToast: ({message}) => this.toast.open(message),
                    onDynamicNotify: () => {
                        __SL_$__(`#${this.payPayId}`).remove();
                        __SL_$__(this.buyButton).filter(".product-more-payment-button").remove();
                        if (!this.buttonConfig.buyNow) this.extraBuyNow();
                    },
                    afterRender: () => {
                        if (!this.activeSku) this.setPaypalDisabled();
                    },
                    onInit: () => {
                        __SL_$__(this.buyButton).filter(".product-more-payment-button").html((0, i18n.t)("products.product_details.more_payment_options"));
                    }
                });
                this.PayPalButton.render();
                __SL_$__(document).on("click", `#${this.payPayId} .product-button-paypal-preview-mask`, (() => {
                    this.toast.open((0, i18n.t)("products.product_details.link_preview_does_not_support"));
                }));
            }
            extraBuyNow() {
                const buyNow = `<button data-ssr-plugin-pdp-button-buy-now class="buy-now btn btn-primary btn-lg ${this.buyButton.substr(1)} __sl-custom-track-product-detail-buy-now paypalAddBuyNow">\n        <span class="pdp_button_text fw-bold">${(0, 
                i18n.t)("cart.cart.buy_now")}</span>\n      </button>`;
                __SL_$__(this.addButton).after(buyNow);
                this.bindBuyNow();
                this.setTradeButtonHide(this.activeSku ? !this.activeSku.available : this.spu.soldOut);
                this.buyLoading = new toast["default"]({
                    duration: 0,
                    target: this.buyButton,
                    type: "loading",
                    className: "product_buy_loading"
                });
                this.buyLoading.close();
            }
            setLoading(button, loading) {
                let dom = this.addButton;
                if ("buy" === button) dom = this.buyButton;
                const loadingName = `${button}Loading`;
                if (loading) {
                    __SL_$__(dom).find(".pdp_button_text").addClass("loading");
                    this[loadingName].open();
                    __SL_$__(`.product_${button}_loading`).find(".mp-loading__circular path").css({
                        stroke: __SL_$__(dom).css("color")
                    });
                } else {
                    this[loadingName].close();
                    __SL_$__(dom).find(".pdp_button_text").removeClass("loading");
                }
            }
            initEvent() {
                const $this = this;
                __SL_$__(this.addButton).on("click", (0, debounce["default"])(300, (() => {
                    var _window$HdSdk2, _window$HdSdk2$shopTr, _this$activeSku3, _this$sku3, _this$spu3, _this$spu3$sortationL, _this$spu3$sortationL2, _this$spu4, _this$spu4$sortationL, _this$spu4$sortationL2;
                    if ($this.isPreview()) {
                        this.toast.open((0, i18n.t)("products.product_details.link_preview_does_not_support"));
                        return;
                    }
                    if (!this.activeSku) {
                        this.toast.open((0, i18n.t)("products.product_list.select_product_all_options"));
                        return;
                    }
                    this.setLoading("add", true);
                    const {spuSeq: spuId, skuSeq: skuId, name, price} = this.activeSku;
                    const {num} = this;
                    const dataId = null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : null === (_window$HdSdk2$shopTr = _window$HdSdk2.shopTracker) || void 0 === _window$HdSdk2$shopTr ? void 0 : _window$HdSdk2$shopTr.getDataId();
                    const eventID = (0, tool.getEventID)();
                    const hdReportData = {
                        page: this.page,
                        spuId,
                        skuId,
                        num,
                        price,
                        name,
                        modalType: this.modalType,
                        variant: getVariant(null === (_this$activeSku3 = this.activeSku) || void 0 === _this$activeSku3 ? void 0 : _this$activeSku3.skuAttributeIds, null === (_this$sku3 = this.sku) || void 0 === _this$sku3 ? void 0 : _this$sku3.skuAttributeMap),
                        collectionId: null === (_this$spu3 = this.spu) || void 0 === _this$spu3 ? void 0 : null === (_this$spu3$sortationL = _this$spu3.sortationList) || void 0 === _this$spu3$sortationL ? void 0 : null === (_this$spu3$sortationL2 = _this$spu3$sortationL[0]) || void 0 === _this$spu3$sortationL2 ? void 0 : _this$spu3$sortationL2.sortationId,
                        collectionName: null === (_this$spu4 = this.spu) || void 0 === _this$spu4 ? void 0 : null === (_this$spu4$sortationL = _this$spu4.sortationList) || void 0 === _this$spu4$sortationL ? void 0 : null === (_this$spu4$sortationL2 = _this$spu4$sortationL[0]) || void 0 === _this$spu4$sortationL2 ? void 0 : _this$spu4$sortationL2.sortationName,
                        position: this.position,
                        dataId,
                        eventID,
                        cartId: this.cartId
                    };
                    window.SL_EventBus.emit(globalEvent.ADD_TO_CART, {
                        spuId,
                        skuId,
                        num,
                        price,
                        name,
                        eventID: `addToCart${eventID}`,
                        reportParamsExt: {
                            dataId,
                            eventName: "AddToCart"
                        },
                        error: (...e) => {
                            (0, product_button_report.addToCartHdReport)({
                                ...hdReportData,
                                event_status: 0
                            });
                            this.onAddError(...e);
                        },
                        success: () => {
                            var _this$activeSku4, _this$sku4, _this$onAddSuccess;
                            setChannel();
                            (0, product_button_report.addToCartHdReport)({
                                ...hdReportData,
                                event_status: 1
                            });
                            (0, product_button_report.addToCartThirdReport)({
                                spuId,
                                name,
                                price,
                                skuId,
                                num,
                                eventID,
                                variant: getVariant(null === (_this$activeSku4 = this.activeSku) || void 0 === _this$activeSku4 ? void 0 : _this$activeSku4.skuAttributeIds, null === (_this$sku4 = this.sku) || void 0 === _this$sku4 ? void 0 : _this$sku4.skuAttributeMap)
                            });
                            null === (_this$onAddSuccess = this.onAddSuccess) || void 0 === _this$onAddSuccess ? void 0 : _this$onAddSuccess.call(this);
                        },
                        complete: () => {
                            this.setLoading("add", false);
                        }
                    });
                })));
                $this.bindBuyNow();
            }
            bindBuyNow() {
                let dataId;
                let eventID;
                const stage = checkoutEnd.getUuidAndMonitorCheckoutEnd("trade:goToCheckout:report", (status => {
                    var _this$activeSku5, _this$sku5, _this$spu5, _this$spu5$sortationL, _this$spu5$sortationL2, _this$spu6, _this$spu6$sortationL, _this$spu6$sortationL2;
                    const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                    const {num} = this;
                    const hdReportData = {
                        page: this.page,
                        spuId,
                        skuId,
                        num,
                        price,
                        name,
                        modalType: this.modalType,
                        variant: getVariant(null === (_this$activeSku5 = this.activeSku) || void 0 === _this$activeSku5 ? void 0 : _this$activeSku5.skuAttributeIds, null === (_this$sku5 = this.sku) || void 0 === _this$sku5 ? void 0 : _this$sku5.skuAttributeMap),
                        collectionId: null === (_this$spu5 = this.spu) || void 0 === _this$spu5 ? void 0 : null === (_this$spu5$sortationL = _this$spu5.sortationList) || void 0 === _this$spu5$sortationL ? void 0 : null === (_this$spu5$sortationL2 = _this$spu5$sortationL[0]) || void 0 === _this$spu5$sortationL2 ? void 0 : _this$spu5$sortationL2.sortationId,
                        collectionName: null === (_this$spu6 = this.spu) || void 0 === _this$spu6 ? void 0 : null === (_this$spu6$sortationL = _this$spu6.sortationList) || void 0 === _this$spu6$sortationL ? void 0 : null === (_this$spu6$sortationL2 = _this$spu6$sortationL[0]) || void 0 === _this$spu6$sortationL2 ? void 0 : _this$spu6$sortationL2.sortationName,
                        isMorePay: __SL_$__(this.addButton).hasClass("product-more-payment-button"),
                        position: this.position,
                        dataId,
                        eventID,
                        cartId: this.cartId
                    };
                    (0, product_button_report.buyNowHdReport)({
                        ...hdReportData,
                        event_status: status
                    });
                }));
                const $this = this;
                __SL_$__(this.buyButton).on("click", (0, debounce["default"])(300, (() => {
                    var _window$HdSdk3, _window$HdSdk3$shopTr;
                    if ($this.isPreview()) {
                        this.toast.open((0, i18n.t)("products.product_details.link_preview_does_not_support"));
                        return;
                    }
                    if (!this.activeSku) {
                        this.toast.open((0, i18n.t)("products.product_list.select_product_all_options"));
                        return;
                    }
                    this.setLoading("buy", true);
                    const product = [ {
                        productSeq: this.activeSku.spuSeq,
                        productSku: this.activeSku.skuSeq,
                        productNum: this.num,
                        productPrice: this.activeSku.price,
                        productName: this.activeSku.name
                    } ];
                    const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                    const {num} = this;
                    setChannel();
                    dataId = null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : null === (_window$HdSdk3$shopTr = _window$HdSdk3.shopTracker) || void 0 === _window$HdSdk3$shopTr ? void 0 : _window$HdSdk3$shopTr.getDataId();
                    eventID = (0, tool.getEventID)();
                    checkout["default"].jump(product, {
                        stage,
                        reportParamsExt: {
                            dataId,
                            eventId: `addToCart${eventID}`,
                            eventName: "AddToCart"
                        },
                        needReport: () => {
                            var _this$activeSku6, _this$sku6;
                            return (0, product_button_report.addToCartThirdReport)({
                                eventID,
                                spuId,
                                name,
                                price,
                                skuId,
                                num,
                                variant: getVariant(null === (_this$activeSku6 = this.activeSku) || void 0 === _this$activeSku6 ? void 0 : _this$activeSku6.skuAttributeIds, null === (_this$sku6 = this.sku) || void 0 === _this$sku6 ? void 0 : _this$sku6.skuAttributeMap)
                            });
                        }
                    }).catch((() => {
                        this.setLoading("buy", false);
                    }));
                })));
            }
            setActiveSku(sku) {
                this.activeSku = sku ? {
                    ...sku,
                    name: this.spu.title
                } : null;
                this.setPayPalProduct();
                this.setPaypalDisabled();
                if (sku) this.setTradeButtonHide(sku.soldOut);
            }
            setActiveSkuNum(num) {
                this.num = num;
                if (!this.activeSku) return;
                this.setPayPalProduct();
            }
            setPaypalDisabled() {
                var _this$PayPalButton2;
                if (!this.activeSku) {
                    var _this$PayPalButton;
                    null === (_this$PayPalButton = this.PayPalButton) || void 0 === _this$PayPalButton ? void 0 : _this$PayPalButton.setDisabled(true);
                    return;
                }
                null === (_this$PayPalButton2 = this.PayPalButton) || void 0 === _this$PayPalButton2 ? void 0 : _this$PayPalButton2.setDisabled(false);
            }
            setPayPalProduct() {
                if (0 === __SL_$__(`#${this.payPayId}`).length || !this.activeSku) return;
                const product = [ {
                    spuId: this.activeSku.spuSeq,
                    skuId: this.activeSku.skuSeq,
                    num: this.num,
                    name: this.spu.title,
                    price: this.activeSku.price
                } ];
                this.PayPalButton.setProducts(product);
            }
            setTradeButtonHide(show) {
                var _SL_$__2, _SL_$__$filter2;
                if (!show) {
                    var _SL_$__, _SL_$__$filter;
                    __SL_$__(this.addButton).removeClass("hide");
                    __SL_$__(this.buyButton).removeClass("hide");
                    null === (_SL_$__ = __SL_$__(`#${this.payPayId}`)) || void 0 === _SL_$__ ? void 0 : _SL_$__.removeClass("hide");
                    null === (_SL_$__$filter = __SL_$__(this.buyButton).filter(".product-more-payment-button")) || void 0 === _SL_$__$filter ? void 0 : _SL_$__$filter.removeClass("hide");
                    __SL_$__(this.soldOutRoot).addClass("hide");
                    return;
                }
                __SL_$__(this.addButton).addClass("hide");
                __SL_$__(this.buyButton).addClass("hide");
                null === (_SL_$__2 = __SL_$__(`#${this.payPayId}`)) || void 0 === _SL_$__2 ? void 0 : _SL_$__2.addClass("hide");
                null === (_SL_$__$filter2 = __SL_$__(this.buyButton).filter(".product-more-payment-button")) || void 0 === _SL_$__$filter2 ? void 0 : _SL_$__$filter2.addClass("hide");
                __SL_$__(this.soldOutRoot).removeClass("hide");
            }
            isPreview() {
                const currentUrl = window.location.pathname;
                return /^[/（]preview[/）].*/.test(currentUrl);
            }
        }
        const product_button = ButtonEvent;
    },
    "./src/assets/product/detail/js/product-preview.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => initPreview
        });
        var DataWatcher = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        var sku_change = __webpack_require__("../shared/browser/events/product/sku-change/index.js");
        var api_logger = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        const EVENT_NAME = "Product::SkuChanged";
        const logger = (0, api_logger["default"])(EVENT_NAME);
        const external = window.Shopline && window.Shopline.event;
        const skuChanged = data => {
            if (external) {
                logger.info(`[emit]`, data);
                return external.emit(EVENT_NAME, {
                    data,
                    onSuccess: result => {
                        logger.info("success", result);
                    },
                    onError: error => {
                        logger.error(error);
                    }
                });
            }
        };
        skuChanged.apiName = EVENT_NAME;
        const sku_changed = skuChanged;
        var view_content = __webpack_require__("../shared/browser/events/data-report/view-content/index.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        var product_quantity = __webpack_require__("./src/assets/product/detail/js/product-quantity.js");
        var product_button = __webpack_require__("./src/assets/product/detail/js/product-button.js");
        var product_info = __webpack_require__("./src/assets/product/commons/js/product-info.js");
        var js = __webpack_require__("../shared/browser/components/hbs/productImages/js/index.js");
        var getYouTubeCover = __webpack_require__("../shared/browser/components/hbs/shared/utils/getYouTubeCover.js");
        var img_size = __webpack_require__("../shared/browser/utils/img-size.js");
        var imgUrl = __webpack_require__("../shared/browser/components/hbs/shared/utils/imgUrl.js");
        class ProductImagesWithFlattenAndMobileThumb extends js["default"] {
            constructor(...args) {
                const {selectorId} = args[0] || {};
                const mobilePrefixCls = `.execute_productImages_mobile_${selectorId}`;
                const productMobileHideThumbnailImage = "hide" === __SL_$__(`.product_productMobileThumbnailImageHide_${selectorId}`).val();
                const config = {
                    ...args[0],
                    swiperConfig: {
                        mobile: {
                            loop: false
                        }
                    }
                };
                if (!productMobileHideThumbnailImage) config.swiperConfig = {
                    mobile: {
                        loop: false,
                        thumbs: {
                            swiper: {
                                el: `${mobilePrefixCls} .product_mobile_thumbnail_container .swiper-container`,
                                spaceBetween: 10,
                                slidesPerView: 3,
                                watchSlidesVisibility: true,
                                slidesPerGroup: 3,
                                navigation: {
                                    nextEl: `.thumbnail_button_next_${selectorId}`,
                                    prevEl: `.thumbnail_button_prev_${selectorId}`
                                }
                            }
                        }
                    }
                };
                super(config);
                this.productImageIsFlatten = "flatten" === __SL_$__(`.product_productImageShowStyle_${selectorId}`).val();
                this.productPcSkuImageFlatten = __SL_$__(this.id).find(".product_pc_skuImage_flatten");
                this.productPcNormalItemFlatten = __SL_$__(this.id).find(".normalItem");
                this.productMobileHideThumbnailImage = productMobileHideThumbnailImage;
                if (this.productMobileHideThumbnailImage && this.mobileSwiper) {
                    var _this$mobileSwiper, _this$mobileSwiper$sl;
                    const index = __SL_$__(`${this.mobileId}`).data("initial-slide") || 0;
                    const total = null === (_this$mobileSwiper = this.mobileSwiper) || void 0 === _this$mobileSwiper ? void 0 : null === (_this$mobileSwiper$sl = _this$mobileSwiper.slidesGrid) || void 0 === _this$mobileSwiper$sl ? void 0 : _this$mobileSwiper$sl.length;
                    this.updatePagination(index, total);
                    this.initMobileNormalPagination();
                }
                if (!this.productMobileHideThumbnailImage && this.mobileSwiper) this.handleInitThumbnailImageBySkuImage();
                if (this.productImageIsFlatten && !this.mobileSwiper && this.productImageScale) {
                    this.initFlattenPcPhotoSwipe();
                    this.initFlattenPcSkuPhotoSwiper();
                }
            }
            handleInitThumbnailImageBySkuImage() {
                var _this$mobileSwiper2, _SL_$__$find;
                const index = null === (_this$mobileSwiper2 = this.mobileSwiper) || void 0 === _this$mobileSwiper2 ? void 0 : _this$mobileSwiper2.activeIndex;
                const firstThumbnail = null === (_SL_$__$find = __SL_$__(`${this.mobileId} .product_mobile_thumbnail_container`).find(".swiper-slide")) || void 0 === _SL_$__$find ? void 0 : _SL_$__$find.eq(index);
                const activeCls = "noShowActive";
                if (__SL_$__(`${this.mobileId}`).find(".product_m_skuImageBox").length > 0) {
                    firstThumbnail.addClass(activeCls);
                    firstThumbnail.one("click", (() => {
                        firstThumbnail.removeClass(activeCls);
                        super.handleMobileSkuImage(false);
                    }));
                } else firstThumbnail.removeClass(activeCls);
            }
            updatePagination(currentIndex, total) {
                const {mobileId} = this;
                const prevDom = __SL_$__(`${mobileId} .normal-thumbnail-button-prev`);
                const nextDom = __SL_$__(`${mobileId} .normal-thumbnail-button-next`);
                const content = __SL_$__(`${mobileId} .pagination-content`);
                content.html(`${currentIndex + 1}/${total}`);
                prevDom.removeClass("disabled");
                nextDom.removeClass("disabled");
                if (0 === currentIndex) {
                    prevDom.addClass("disabled");
                    return;
                }
                if (currentIndex === total - 1) nextDom.addClass("disabled");
            }
            initMobileNormalPagination() {
                const {mobileId, mobileSwiper} = this;
                null === mobileSwiper || void 0 === mobileSwiper ? void 0 : mobileSwiper.on("slideChange", (swiper => {
                    var _swiper$slidesGrid;
                    const index = null === swiper || void 0 === swiper ? void 0 : swiper.realIndex;
                    const total = null === swiper || void 0 === swiper ? void 0 : null === (_swiper$slidesGrid = swiper.slidesGrid) || void 0 === _swiper$slidesGrid ? void 0 : _swiper$slidesGrid.length;
                    this.updatePagination(index, total);
                }));
                __SL_$__(`${mobileId}`).on("click", ".normal-thumbnail-button-prev", (() => {
                    mobileSwiper.slidePrev(200);
                })).on("click", ".normal-thumbnail-button-next", (() => {
                    mobileSwiper.slideNext(200);
                }));
            }
            initFlattenPcPhotoSwipe() {
                const self = this;
                this.updateFlattenPhotoSwipeItems();
                __SL_$__(`${this.id}`).on("click", ".imageItem", (function() {
                    const realIndex = __SL_$__(this).data("index");
                    self.handlePhotoSwiper(self.slideItems, realIndex);
                }));
            }
            initFlattenPcSkuPhotoSwiper() {
                const self = this;
                __SL_$__(`${this.id}`).on("click", ".product_pc_skuImage_flatten", (function() {
                    const items = [ {
                        src: __SL_$__(this).find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: __SL_$__(this)[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            toggleFlattenPcSkuImage(isShow, skuImageUrl) {
                const skuImageDom = this.productPcSkuImageFlatten;
                if (skuImageDom.hasClass("imageItemError")) skuImageDom.removeClass("imageItemError");
                if (isShow && skuImageUrl) {
                    var _imgSize;
                    const ratio = (null === (_imgSize = (0, img_size["default"])(skuImageUrl)) || void 0 === _imgSize ? void 0 : _imgSize.ratio) || "100%";
                    const imgDom = skuImageDom.find("img");
                    if (imgDom.length > 0) imgDom.removeAttr("srcset data-srcset").attr({
                        src: skuImageUrl,
                        "data-photoswipe-src": (0, imgUrl["default"])(skuImageUrl, {
                            width: 1800
                        })
                    }); else skuImageDom.css("paddingBottom", `${ratio}`).html(`<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image" data-photoswipe-src=${(0, 
                    imgUrl["default"])(skuImageUrl, {
                        width: 1800
                    })} src=${skuImageUrl} />`);
                    skuImageDom.show();
                    this.productPcNormalItemFlatten.hide();
                } else if (!isShow) {
                    skuImageDom.hide().empty();
                    this.productPcNormalItemFlatten.show();
                }
            }
            skuImageChange(img, source) {
                if (!this.verifySource(null === source || void 0 === source ? void 0 : source.app)) return;
                const {url} = img || {};
                if (this.productImageIsFlatten && !this.mobileSwiper) {
                    if (url) this.toggleFlattenPcSkuImage(true, url); else this.toggleFlattenPcSkuImage(false);
                    return;
                }
                super.skuImageChange(img, source);
                if (this.mobileSwiper) this.handleInitThumbnailImageBySkuImage();
            }
            handleMobileThumbArrow(thumbnailContainer, list) {
                if (list.length > 3) {
                    thumbnailContainer.find(".thumbnail-button-prev").css("visibility", "visible");
                    thumbnailContainer.find(".thumbnail-button-next").css("visibility", "visible");
                } else {
                    thumbnailContainer.find(".thumbnail-button-prev").css("visibility", "hidden");
                    thumbnailContainer.find(".thumbnail-button-next").css("visibility", "hidden");
                }
            }
            updateMobileThumbsImage(list) {
                const thumbnailContainer = __SL_$__(`${this.mobileId} .product_mobile_thumbnail_container`);
                if (!(null !== list && void 0 !== list && list.length) || list.length <= 1) {
                    thumbnailContainer.hide();
                    return;
                }
                thumbnailContainer.show();
                thumbnailContainer.find(".swiper-wrapper").empty().append(list.map((item => {
                    var _imgSize2;
                    const ratio = (null === (_imgSize2 = (0, img_size["default"])(item.resource)) || void 0 === _imgSize2 ? void 0 : _imgSize2.ratio) || "100%";
                    let videoCover;
                    let videoRatio;
                    if ("VIDEO" === item.type) {
                        var _imgSize3;
                        const isYoutubeVideo = (0, js.isYoutube)(item.resource);
                        const {middle: cover} = (0, getYouTubeCover["default"])(item.resource);
                        videoRatio = isYoutubeVideo ? "56.25%" : (null === (_imgSize3 = (0, img_size["default"])(item.cover)) || void 0 === _imgSize3 ? void 0 : _imgSize3.ratio) || "56.25%";
                        videoCover = isYoutubeVideo ? cover : item.cover;
                    }
                    const boxPb = "VIDEO" === item.type ? videoRatio : ratio;
                    const domItem = "VIDEO" === item.type ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="lozad" data-sizes="auto" data-src="${videoCover}" alt="">` : `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="lozad" data-sizes="auto" data-src="${item.resource}" alt="">`;
                    return `\n          <div class="swiper-slide">\n            <div class="swiper-slide-item" style="padding-bottom:${boxPb}">${domItem}</div>\n          </div>`;
                })));
                this.handleMobileThumbArrow(thumbnailContainer, list);
            }
            updateMobileThumbArrow(list) {
                const paginationContainer = __SL_$__(`${this.mobileId} .product_mobile_thumbnail_pagination`);
                if (list.length > 1) paginationContainer.show(); else paginationContainer.hide();
            }
            updateImageList(list, activeIndex, source) {
                if (!this.verifySource(null === source || void 0 === source ? void 0 : source.app)) return;
                if (this.productImageIsFlatten) {
                    this.updateFlattenImageList(list);
                    if (!this.mobileSwiper) this.updateFlattenPhotoSwipeItems();
                }
                if (!this.productMobileHideThumbnailImage && this.mobileSwiper) this.updateMobileThumbsImage(list);
                super.updateImageList(list, activeIndex, source);
                if (this.productMobileHideThumbnailImage && this.mobileSwiper) {
                    this.updateMobileThumbArrow(list);
                    this.updatePagination(0, null === list || void 0 === list ? void 0 : list.length);
                    this.initMobileNormalPagination();
                }
            }
            updateFlattenPhotoSwipeItems() {
                const items = [];
                __SL_$__(`${this.id}`).find(".imageItem,.videoItem").each(((index, item) => {
                    const realIndex = __SL_$__(item).data("index");
                    const imgEl = __SL_$__(item).find(".product_photoSwipe_image");
                    const size = __SL_$__(item).attr("data-natural-size");
                    const transSize = size ? size.split("x") : null;
                    items[realIndex] = {
                        src: imgEl.attr("data-photoswipe-src"),
                        w: transSize ? parseInt(transSize[0], 10) : imgEl.innerWidth(),
                        h: transSize ? parseInt(transSize[1], 10) : imgEl.innerHeight(),
                        el: item
                    };
                }));
                this.slideItems = items;
            }
            galleryAfterChange(...args) {
                if (this.productImageIsFlatten && !this.mobileSwiper) {
                    const {currItem, getCurrentIndex} = args[0];
                    const currentIndex = getCurrentIndex();
                    if (0 === currentIndex && "none" === this.productPcNormalItemFlatten.css("display")) {
                        this.productPcNormalItemFlatten.show();
                        this.productPcSkuImageFlatten.hide();
                    }
                    currItem.el.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest"
                    });
                }
                super.galleryAfterChange(...args);
            }
            updateFlattenDom() {
                this.productPcSkuImageFlatten = __SL_$__(this.id).find(".product_pc_skuImage_flatten");
                this.productPcNormalItemFlatten = __SL_$__(this.id).find(".normalItem");
            }
            updateFlattenImageList(list) {
                const container = __SL_$__(`${this.id}.product_productImages_tile`).empty();
                if (null !== list && void 0 !== list && list.length) {
                    container.removeClass("product-detail-empty-image");
                    const flattenFirstItem = __SL_$__(`<div class="row row-cols-md-1 gx-md-4 flattenFirstItem">\n          <div class="flattenFirstItemWrapper">\n            <div class="normalItem"></div>\n            <div class="product_pc_skuImage_flatten"></div>\n          </div>\n        </div>`);
                    const exceptFlattenItemList = __SL_$__(`<div class="exceptFirstMediaList row row-cols-md-2 gx-md-4"></div>`);
                    const firstCol = __SL_$__(`<div class="product_images_firstCol"></div>`);
                    const secondCol = __SL_$__(`<div class="product_images_secondCol"></div>`);
                    list.forEach(((item, index) => {
                        let dom;
                        if ("VIDEO" === item.type) {
                            var _imgSize4;
                            const {middle: cover, videoId} = (0, getYouTubeCover["default"])(item.resource);
                            const isYoutubeVideo = (0, js.isYoutube)(item.resource);
                            const photoswipeCoverSrc = isYoutubeVideo ? cover : item.cover;
                            dom = `<div class="videoItem" data-index="${index}" style="padding-bottom: ${isYoutubeVideo ? "56.25%" : (null === (_imgSize4 = (0, 
                            img_size["default"])(item.cover)) || void 0 === _imgSize4 ? void 0 : _imgSize4.ratio) || "56.25%"}">\n          ${isYoutubeVideo ? `<div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>` : `<video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">\n                  <source src="${item.resource}" type="video/mp4">\n                </video>`}\n          <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="product_photoSwipe_image" data-photoswipe-src="${photoswipeCoverSrc}" src="${photoswipeCoverSrc}" alt="">\n          </div>`;
                        } else {
                            const {ratio} = (0, img_size["default"])(item.resource);
                            dom = `<div class="imageItem" style="padding-bottom: ${ratio}" data-index="${index}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" class="product_photoSwipe_image" src="${item.resource}" alt=""></div>`;
                        }
                        if (0 === index) {
                            flattenFirstItem.find(".normalItem").append(dom);
                            return;
                        }
                        if ((index - 1) % 2) secondCol.append(dom); else firstCol.append(dom);
                    }));
                    exceptFlattenItemList.append(firstCol, secondCol);
                    container.append(flattenFirstItem, exceptFlattenItemList);
                } else {
                    container.addClass("product-detail-empty-image");
                    container.append(`<div class="product_pc_skuImage_flatten" style="width: 100%; position:absolute;"></div>`);
                }
                this.updateFlattenDom();
            }
        }
        const product_swiper = ProductImagesWithFlattenAndMobileThumb;
        var debounce = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var isMobile = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        function setPosition({id, container = window, offsetTop = 0}) {
            const box = __SL_$__(`#product-detail-sticky_${id}`);
            if (!box.get(0)) return;
            let mainView = box.children(".sticky-main-view");
            mainView = mainView.length ? mainView : box;
            const height = mainView.height();
            const wHeight = __SL_$__(container).outerHeight();
            if (height + offsetTop > wHeight) box.css("top", -(height - wHeight)); else box.css("top", offsetTop);
        }
        function listenPosition({id, container = window, offsetTop = 0}) {
            setPosition({
                id,
                container,
                offsetTop
            });
            const setPositionDebounce = (0, debounce["default"])(300, (() => {
                setPosition({
                    id,
                    container,
                    offsetTop
                });
            }));
            __SL_$__(window).on("resize", setPositionDebounce);
            if (!(0, isMobile["default"])()) __SL_$__(container).one("scroll", setPositionDebounce);
            return function() {
                __SL_$__(window).off("resize", setPositionDebounce);
                __SL_$__(container).off("scroll", setPositionDebounce);
            };
        }
        const layout = setPosition;
        var sku_trade = __webpack_require__("./src/assets/product/detail/js/sku-trade.js");
        var utils_form = __webpack_require__("../shared/browser/utils/form/index.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var libs = __webpack_require__("./node_modules/@yy/sl-mc/libs/index.js");
        function firstAvailableSku(spu, skuList) {
            if (spu && spu.soldOut) return skuList && skuList[0] || null;
            return skuList.find((sku => sku.available)) || skuList && skuList[0] || null;
        }
        var lodash_debounce = __webpack_require__("../shared/browser/node_modules/lodash/debounce.js");
        var debounce_default = __webpack_require__.n(lodash_debounce);
        var get = __webpack_require__("../shared/browser/node_modules/lodash/get.js");
        var get_default = __webpack_require__.n(get);
        var pageMapping = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var page = __webpack_require__("../shared/browser/utils/report/page.js");
        __webpack_require__("../shared/browser/report/customArgs/index.js");
        const {formatCurrency} = currency["default"];
        const alias = window.SL_State.get("templateAlias");
        const eventIdMap = {
            ProductsDetail: "60006253",
            Home: "60006252"
        };
        const unsafeInputMap = {
            email: 101,
            mobile: 110,
            message: 115,
            name: 102,
            region: 104
        };
        const inputMap = {
            email: 102,
            mobile: 105,
            message: 103,
            name: 104,
            region: 106
        };
        const unsafePage = pageMapping["default"][alias];
        const inquiry_modal_report_page = page["default"][alias];
        const eventId = eventIdMap[alias];
        function hdReport(options) {
            window.HdSdk && window.HdSdk.shopTracker.collect({
                page: inquiry_modal_report_page,
                module: 119,
                ...options
            });
        }
        function unsafeHdReport(options) {
            window.HdSdk && window.HdSdk.shopTracker.report(eventId, {
                page: unsafePage,
                custom_component: "167",
                ...options
            });
        }
        function concatVal(obj) {
            return Object.entries(obj || {}).reduce(((prev, cur) => {
                if (cur[1]) return `${prev}${cur[0]}:${cur[1]}\n`;
                return prev;
            }), "");
        }
        function leadReport({spu, sku, email, phone, message, name, region}) {
            const {title, spuSeq: spuId, sortationList} = spu || {};
            const {price, skuSeq: skuId} = sku || {};
            const currency = window.SL_State.get("storeInfo.currency");
            const value = formatCurrency(price);
            window.SL_EventBus.emit("global:thirdPartReport", {
                FBPixel: [ [ "track", "Lead", {
                    content_name: title,
                    content_ids: spuId,
                    content_type: "product_group",
                    currency,
                    value
                } ] ],
                GAAds: [ [ "event", "conversion", {
                    value,
                    currency
                }, "SUBMIT-LEAD-FORM" ] ],
                GARemarketing: [ [ "event", "generate_lead", {
                    ecomm_prodid: window.SL_GetReportArg("GAR", "sku_id", skuId),
                    ecomm_pagetype: "product",
                    ecomm_totalvalue: value,
                    ecomm_category: get_default()(sortationList, "[0].sortationId"),
                    ecomm_pcat: get_default()(sortationList, "[0].sortationName")
                } ] ],
                GAR: [ [ "event", "generate_lead", {
                    value,
                    items: [ {
                        id: window.SL_GetReportArg("GAR", "sku_id", skuId),
                        google_business_vertical: "retail"
                    } ]
                } ] ],
                GA: [ [ "event", "generate_lead", {
                    value,
                    currency
                } ] ],
                GA4: [ [ "event", "generate_lead", {
                    value,
                    currency
                } ] ]
            });
            const inputBoxVal = concatVal({
                Message: message,
                Name: name,
                "Country/Region": region
            });
            hdReport({
                component: 101,
                event_name: "Lead",
                content_name: title,
                content_id: spuId,
                currency,
                value,
                input_box_val: inputBoxVal,
                user_data: {
                    em: email,
                    ph: phone
                }
            });
            unsafeHdReport({
                event_name: "145",
                product_id: spuId,
                product_name: title,
                product_price: value,
                variantion_id: skuId,
                phone,
                email,
                input_box_val: inputBoxVal
            });
        }
        function cancelReport({spu, sku, email, phone, name, message, region}) {
            const {title, spuSeq: spuId} = spu || {};
            const {price, skuSeq: skuId} = sku || {};
            const value = formatCurrency(price);
            const currency = window.SL_State.get("storeInfo.currency");
            const inputBoxVal = concatVal({
                Message: message,
                Name: name,
                "Country/Region": region
            });
            hdReport({
                component: 107,
                action_type: 102,
                content_name: title,
                content_id: spuId,
                currency,
                value,
                input_box_val: inputBoxVal,
                user_data: {
                    em: email,
                    ph: phone
                }
            });
            unsafeHdReport({
                event_name: "146",
                product_id: spuId,
                product_name: title,
                product_price: value,
                variantion_id: skuId,
                phone,
                email,
                input_box_val: inputBoxVal
            });
        }
        function viewReport() {
            hdReport({
                component: -999,
                action_type: 108
            });
            unsafeHdReport({
                event_name: "109"
            });
            unsafeHdReport({
                event_name: "120"
            });
        }
        function inputReport({name, value}) {
            hdReport({
                action_type: 103,
                component: inputMap[name],
                input_box_val: value
            });
            unsafeHdReport({
                event_name: "133",
                input_box: unsafeInputMap[name],
                input_box_val: value
            });
        }
        const debounceInput = {
            email: debounce_default()((value => inputReport({
                value,
                name: "email"
            })), 1e3),
            mobile: debounce_default()((value => inputReport({
                value,
                name: "mobile"
            })), 1e3),
            message: debounce_default()((value => inputReport({
                value,
                name: "message"
            })), 1e3),
            name: debounce_default()((value => inputReport({
                value,
                name: "name"
            })), 1e3),
            region: debounce_default()((value => inputReport({
                value,
                name: "region"
            })), 1e3)
        };
        function listenInputChange({area}) {
            __SL_$__(area).find("[sl-form-item-name]").on("input", "input,textarea", (function() {
                const input = __SL_$__(this);
                const formItem = input.parents("[sl-form-item-name]");
                const name = formItem.attr("sl-form-item-name");
                const value = input.val();
                debounceInput[name] && debounceInput[name](value);
            }));
        }
        var BaseClass = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        var modal = __webpack_require__("./src/assets/commons/components/modal/index.js");
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var toast_loading = __webpack_require__("./src/assets/commons/components/toast/loading.js");
        const emailRE = /^[A-Za-z0-9_./;+]+([A-Za-z0-9_./;+]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
        const inquiry_price_modal_toast = new toast["default"];
        class InquiryPriceModal extends BaseClass["default"] {
            constructor({id, spu, sku}) {
                super("product:inquiry:price:modal");
                this.$root = __SL_$__(`#JS-inquiry-price-modal_${id}`);
                this.$setPortals(this.$root);
                this.buttonSelector = `#JS-inquiry-price-button_${id}`;
                this.spu = spu;
                this.activeSku = null;
                this.formInstance = null;
                this.modalInstance = null;
                this.firstSku = firstAvailableSku(spu, sku.skuList);
                this.init(id);
                listenInputChange({
                    area: this.$root
                });
            }
            init(id) {
                var _this$spu;
                if (null !== (_this$spu = this.spu) && void 0 !== _this$spu && _this$spu.inquiry) {
                    this.initModal(id);
                    this.initForm(id);
                    this.bindEvents();
                }
            }
            initModal(id) {
                this.modalInstance = new modal["default"]({
                    modalId: `inquiry-price_${id}`
                });
                this.modalInstance.init();
            }
            initForm(id) {
                this.formInstance = utils_form["default"].takeForm(`JS-inquiry-modal-form_${id}`);
                this.formInstance.init();
                this.formInstance.setFields(InquiryPriceModal.getFieldsConfig());
            }
            setActiveSku(activeSku) {
                this.activeSku = activeSku;
            }
            cancelReport() {
                cancelReport({
                    spu: this.spu,
                    sku: this.activeSku || this.firstSku,
                    num: 1,
                    email: this.formInstance.getFieldValue("email"),
                    phone: this.formInstance.getFieldValue("mobile"),
                    name: this.formInstance.getFieldValue("name"),
                    message: this.formInstance.getFieldValue("message"),
                    region: this.formInstance.getFieldValue("region")
                });
            }
            bindEvents() {
                const eventHandlers = {
                    submitClickHandler: async e => {
                        try {
                            if (this.isPreview()) {
                                inquiry_price_modal_toast.open((0, i18n.t)("products.product_details.link_preview_does_not_support"));
                                return;
                            }
                            __SL_$__(e.target).addClass("disabled");
                            await this.validateForm();
                            await this.postForm();
                        } catch (err) {} finally {
                            __SL_$__(e.target).removeClass("disabled");
                        }
                    },
                    cancelClickHandler: () => {
                        this.cancelReport();
                        this.hideModal();
                    },
                    buttonClickHandler: () => {
                        this.showModal();
                        viewReport();
                    }
                };
                this.$onPortals("click", ".JS-inquiry-modal-submit", eventHandlers.submitClickHandler);
                this.$onPortals("click", ".JS-inquiry-modal-cancel", eventHandlers.cancelClickHandler);
                this.$root.parents(".mp-modal__wrapper").on("click", ".mp-modal__mask.mp-modal__closable,.mp-modal__close", (() => this.cancelReport()));
                __SL_$__(this.buttonSelector).on("click", eventHandlers.buttonClickHandler);
            }
            unbindEvents() {
                this.$offAll();
                __SL_$__(this.buttonSelector).off("click");
            }
            async postForm() {
                var _activeSku$imageList, _spuInfo$images;
                const inquiryInfo = this.formInstance.getFieldsValue();
                const {activeSku} = this;
                const spuInfo = this.spu;
                const finalInquiryInfo = {
                    Email: inquiryInfo.email,
                    Message: inquiryInfo.message,
                    Name: inquiryInfo.name,
                    Mobile: inquiryInfo.mobile,
                    "Country/Region": inquiryInfo.region,
                    Product: null === spuInfo || void 0 === spuInfo ? void 0 : spuInfo.title,
                    ProductUrl: `${window.location.origin}/products/${spuInfo.spuSeq}${activeSku ? `?sku=${activeSku.skuSeq}` : ""}`
                };
                const sendContentStr = Object.keys(finalInquiryInfo).reduce(((str, key) => {
                    str += `${key}：${finalInquiryInfo[key]}\n`;
                    return str;
                }), "");
                const sendInfo = {
                    email: inquiryInfo.email,
                    content: sendContentStr,
                    attachmentUrl: (null === activeSku || void 0 === activeSku ? void 0 : null === (_activeSku$imageList = activeSku.imageList) || void 0 === _activeSku$imageList ? void 0 : _activeSku$imageList[0]) || (null === activeSku || void 0 === activeSku ? void 0 : activeSku.image) || (null === spuInfo || void 0 === spuInfo ? void 0 : null === (_spuInfo$images = spuInfo.images) || void 0 === _spuInfo$images ? void 0 : _spuInfo$images[0])
                };
                const loading = new toast_loading["default"]({
                    duration: 0
                });
                loading.open();
                await this.sendInquiryInfoRun(sendInfo, loading, {
                    phone: inquiryInfo.mobile,
                    message: inquiryInfo.message,
                    name: inquiryInfo.name,
                    region: inquiryInfo.region
                });
            }
            async sendInquiryInfoRun(info, loading, extraData) {
                const response = await libs.mcUtil.sendToMerchant(info);
                loading.close();
                if ("SUCCESS" === response.code) {
                    leadReport({
                        spu: this.spu,
                        sku: this.activeSku || this.firstSku,
                        num: 1,
                        email: info.email,
                        ...extraData
                    });
                    this.hideModal();
                    inquiry_price_modal_toast.open((0, i18n.t)("products.product_details.submission_successfully"));
                } else inquiry_price_modal_toast.open((0, i18n.t)("products.product_details.submission_failed"));
            }
            showModal() {
                this.modalInstance.show();
            }
            hideModal() {
                this.modalInstance.hide();
            }
            static getFieldsConfig() {
                const fields = [ {
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
                    name: "message",
                    value: "",
                    rules: [ {
                        message: (0, i18n.t)("products.product_details.leave_us_message"),
                        required: true
                    }, {
                        message: (0, i18n.t)("products.product_details.maximum_length_of_message"),
                        validator(val) {
                            return val.length <= 1500;
                        }
                    } ]
                }, {
                    name: "name",
                    value: ""
                }, {
                    name: "mobile",
                    value: ""
                }, {
                    name: "region",
                    value: ""
                } ];
                return fields;
            }
            validateForm() {
                return new Promise(((resolve, reject) => {
                    this.formInstance.validateFields().then((res => {
                        if (res.pass) resolve(); else reject(res);
                    }));
                }));
            }
            isPreview() {
                const currentUrl = window.location.pathname;
                return /^[/（]preview[/）].*/.test(currentUrl);
            }
        }
        var createShadowDom = __webpack_require__("./src/assets/product/commons/js/createShadowDom.js");
        var request = __webpack_require__("../shared/browser/utils/request.js");
        const CUSTOM_PAGE_TYPE = 3;
        const isReJsonSdkData = originData => {
            try {
                return JSON.parse(originData);
            } catch (error) {
                return false;
            }
        };
        class Tabs {
            constructor({root}) {
                this.root = __SL_$__(root);
                this.lang = "default";
                this.showKey = "tab0";
                this.init();
                this.requestCollapseTitle(this.ids);
                this.bindEvent();
                if (!this.tabs.hasClass("active")) this.openTab(this.tabs.eq(0));
            }
            init() {
                const tabs = this.root.find(".product-tabs-nav").find(".product-tabs-tab");
                this.tabs = tabs;
                this.contents = this.root.children(".product-tabs-content").children(".product-tabs-item");
                this.ids = [];
                tabs.each(((_, el) => {
                    const $el = __SL_$__(el);
                    const id = $el.data("id");
                    if (id) this.ids.push(id);
                    if ($el.hasClass("active")) this.showKey = $el.data("key");
                }));
            }
            requestCollapseTitle(ids) {
                const {lang} = this;
                return (0, request["default"])({
                    url: "merchant/render/page/basic/infos",
                    method: "GET",
                    params: {
                        pageIds: ids.join(",")
                    }
                }).then((res => {
                    if (res && Array.isArray(res.data)) {
                        const data = res.data.reduce(((fin, item) => {
                            const name = item.name ? item.name[lang] : "";
                            return {
                                ...fin,
                                [item.id]: name
                            };
                        }), {});
                        this.setCollapseTitle(data);
                    }
                }));
            }
            setCollapseTitle(data) {
                this.tabs.each(((_, el) => {
                    const title = data[__SL_$__(el).data("id")];
                    if (title) __SL_$__(el).text(title);
                }));
            }
            requestCollapseContent(id, content) {
                if (this.cacheRequest && this.cacheData[id]) return Promise.resolve(this.cacheData[id]);
                return (0, request["default"])({
                    url: `merchant/render/page/${CUSTOM_PAGE_TYPE}/${id}`,
                    method: "GET"
                }).then((res => {
                    if (null !== res && void 0 !== res && res.data) this.setCollapseContent(null === res || void 0 === res ? void 0 : res.data, content);
                }));
            }
            setCollapseContent(data, content) {
                var _shadow$get;
                const html = this.getCustomPageContent(null === data || void 0 === data ? void 0 : data.htmlConfig);
                const shadow = __SL_$__(content).children(".product-tabs-shadow");
                const shadowRoot = null === (_shadow$get = shadow.get(0)) || void 0 === _shadow$get ? void 0 : _shadow$get.attachShadow({
                    mode: "open"
                });
                __SL_$__(shadowRoot).append(createShadowDom.shadowDomStyle.clone());
                __SL_$__(shadowRoot).append(html);
            }
            getCustomPageContent(pageConfig) {
                const config = isReJsonSdkData(null !== pageConfig && void 0 !== pageConfig ? pageConfig : "");
                let html = '<div style="word-break: break-word">';
                if (config) {
                    const stage = null === config || void 0 === config ? void 0 : config.page;
                    const grids = null === stage || void 0 === stage ? void 0 : stage.children;
                    if (!grids || grids.length < 1) return "";
                    grids.forEach((item => {
                        null === item || void 0 === item ? void 0 : item.children.forEach((it => {
                            var _it$children;
                            const component = null === it || void 0 === it ? void 0 : null === (_it$children = it.children) || void 0 === _it$children ? void 0 : _it$children[0];
                            if ("Text" === (null === component || void 0 === component ? void 0 : component.type)) {
                                var _component$props;
                                if (null !== component && void 0 !== component && null !== (_component$props = component.props) && void 0 !== _component$props && _component$props.title) html += `<h2>${component.props.title}</h2>`;
                                html += component.props.content;
                            } else if ("CustomHtml" === (null === component || void 0 === component ? void 0 : component.type)) html += `<div>${component.props.content}</div>`; else if ("Image" === (null === component || void 0 === component ? void 0 : component.type)) {
                                var _component$props2, _component$props2$ima;
                                if (null !== component && void 0 !== component && null !== (_component$props2 = component.props) && void 0 !== _component$props2 && null !== (_component$props2$ima = _component$props2.image) && void 0 !== _component$props2$ima && _component$props2$ima.url) html += `<img data-src="${component.props.image.url}" style="max-width:100%"  data-srcset="${component.props.image.url}" alt="${component.props.image.alt}" class="lozad"  />`;
                            }
                        }));
                    }));
                } else html += pageConfig;
                html += "</div>";
                return html;
            }
            openTab(tab) {
                const key = tab.data("key");
                const id = tab.data("id");
                const {contents, tabs} = this;
                tabs.removeClass("active");
                tab.addClass("active");
                contents.hide();
                let content;
                contents.each(((_, el) => {
                    if (__SL_$__(el).data("key") === key) {
                        __SL_$__(el).show();
                        content = el;
                        return true;
                    }
                }));
                if (!tab.prop("loaded")) {
                    tab.prop("loaded", true);
                    if (id) this.requestCollapseContent(id, content);
                }
                this.showKey = key;
            }
            bindEvent() {
                const that = this;
                const {tabs} = this;
                tabs.on("click", (function() {
                    const tab = __SL_$__(this);
                    const key = tab.data("key");
                    if (that.showKey === key) return;
                    tab.get(0).scrollIntoView({
                        block: "nearest",
                        behavior: "smooth",
                        inline: "center"
                    });
                    that.openTab(tab);
                }));
            }
        }
        const tabs = Tabs;
        function whichTransitionEvent() {
            let t;
            const el = document.createElement("fakeElement");
            const transitions = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MsTransition: "msTransitionEnd"
            };
            for (t in transitions) if (void 0 !== el.style[t]) return transitions[t];
        }
        function openCollapseByHeight(element) {
            const initHeight = __SL_$__(element).innerHeight();
            element.style.height = "auto";
            const targetHeight = __SL_$__(element).innerHeight();
            element.style.height = `${initHeight}px`;
            __SL_$__(element).css("color");
            element.style.height = `${targetHeight}px`;
        }
        function closeCollapseByHeight(element) {
            const initHeight = __SL_$__(element).innerHeight();
            __SL_$__(element).css("height", `${initHeight}px`);
            __SL_$__(element).css("color");
            element.style.height = `0px`;
        }
        const PAGE_ID = "pageid";
        const product_collapse_CUSTOM_PAGE_TYPE = "customize";
        const product_collapse_isReJsonSdkData = originData => {
            try {
                return JSON.parse(originData);
            } catch (error) {
                return false;
            }
        };
        class Collapse {
            constructor({lang = "default", selector, cacheRequest = true}) {
                this.$container = __SL_$__(selector);
                this.$collapseAsyncItems = this.$container.find(".base-collapse-item-async");
                this.$collapseSyncItems = this.$container.find(".base-collapse-item-sync");
                this.lang = lang;
                this.cacheRequest = cacheRequest;
                this.cacheData = {};
                this.$activeItem = null;
                this.transitionEvent = whichTransitionEvent();
                this.init();
            }
            init() {
                const self = this;
                const ids = Array.from(this.$collapseAsyncItems).map((item => __SL_$__(item).data(PAGE_ID))).filter((id => !!id));
                this.$collapseAsyncItems.each(((index, item) => {
                    const $item = __SL_$__(item);
                    $item.find(".base-collapse-item__wrap").on(self.transitionEvent, (function() {
                        if (__SL_$__(this).parent().hasClass("active")) __SL_$__(this).css("height", "auto");
                    }));
                    if ($item.hasClass("active") && $item.data(PAGE_ID)) this.requestCollapseContent($item.data(PAGE_ID)).then((res => {
                        this.setCollapseContent(null === res || void 0 === res ? void 0 : res.data, $item);
                    }));
                }));
                this.$collapseSyncItems.each(((index, item) => {
                    const $item = __SL_$__(item);
                    $item.find(".base-collapse-item__wrap").on(self.transitionEvent, (function() {
                        if (__SL_$__(this).parent().hasClass("active")) __SL_$__(this).css("height", "auto");
                    }));
                    if (!$item.data("isInitShadowDom")) {
                        const html = $item.find(".base-collapse-item__content").html();
                        self.transContentByShadowDom($item, html);
                        $item.data("isInitShadowDom", true);
                    }
                }));
                this.requestCollapseTitle(ids);
                this.bindEvent();
            }
            requestCollapseTitle(ids) {
                const {lang} = this;
                return (0, request["default"])({
                    url: "merchant/render/page/basic/infos",
                    method: "GET",
                    params: {
                        pageIds: ids.join(",")
                    }
                }).then((res => {
                    if (res && Array.isArray(res.data)) {
                        const data = res.data.reduce(((fin, item) => {
                            const name = null !== item && void 0 !== item && item.name ? null === item || void 0 === item ? void 0 : item.name[lang] : "";
                            return {
                                ...fin,
                                [null === item || void 0 === item ? void 0 : item.id]: name
                            };
                        }), {});
                        this.setCollapseTitle(data);
                    }
                }));
            }
            setCollapseTitle(titleMap) {
                this.$collapseAsyncItems.each(((index, item) => {
                    const $item = __SL_$__(item);
                    const title = titleMap[$item.data(PAGE_ID)];
                    if (title) $item.find(".base-collapse-item__title").text(title);
                }));
            }
            bindEvent() {
                const self = this;
                this.$collapseAsyncItems.on("click", ".base-collapse-item__header", (function() {
                    const $item = __SL_$__(this).closest(".base-collapse-item");
                    const id = $item.data(PAGE_ID);
                    const isOpen = $item.hasClass("active");
                    if (isOpen) {
                        self.close($item);
                        return;
                    }
                    self.requestCollapseContent(id).then((res => {
                        self.setCollapseContent(null === res || void 0 === res ? void 0 : res.data, $item);
                        self.$activeItem = $item;
                        self.open($item);
                    }));
                }));
                this.$collapseSyncItems.on("click", ".base-collapse-item__header", (function() {
                    const $item = __SL_$__(this).closest(".base-collapse-item");
                    const isOpen = $item.hasClass("active");
                    if (isOpen) {
                        self.close($item);
                        return;
                    }
                    if (!$item.data("isInitShadowDom")) {
                        const html = $item.find(".base-collapse-item__content").html();
                        self.transContentByShadowDom($item, html);
                        $item.data("isInitShadowDom", true);
                    }
                    self.open($item);
                }));
                window.SL_EventBus.on("stage:locale:change", (() => {
                    if (this.$activeItem) this.calcCollapseContentHeight(this.$activeItem); else this.$collapseAsyncItems.each(((index, item) => {
                        const $item = __SL_$__(item);
                        if ($item.hasClass("active") && $item.data(PAGE_ID)) this.calcCollapseContentHeight($item);
                    }));
                }));
            }
            requestCollapseContent(id) {
                if (this.cacheRequest && this.cacheData[id]) return Promise.resolve(this.cacheData[id]);
                return (0, request["default"])({
                    url: `merchant/render/page/${product_collapse_CUSTOM_PAGE_TYPE}/${id}`,
                    method: "GET"
                }).then((res => {
                    if (this.cacheRequest) this.cacheData[id] = res;
                    return res;
                })).catch((() => {
                    if (this.cacheRequest) this.cacheData[id] = {};
                    return {};
                }));
            }
            getCustomPageContent(pageConfig) {
                const config = product_collapse_isReJsonSdkData(null !== pageConfig && void 0 !== pageConfig ? pageConfig : "");
                let html = '<div class="custom-page-render-container">';
                if (config) {
                    const stage = null === config || void 0 === config ? void 0 : config.page;
                    const grids = null === stage || void 0 === stage ? void 0 : stage.children;
                    if (!grids || grids.length < 1) return "";
                    grids.forEach((item => {
                        null === item || void 0 === item ? void 0 : item.children.forEach((it => {
                            var _it$children;
                            const component = null === it || void 0 === it ? void 0 : null === (_it$children = it.children) || void 0 === _it$children ? void 0 : _it$children[0];
                            if ("Text" === (null === component || void 0 === component ? void 0 : component.type)) {
                                var _component$props;
                                if (null !== component && void 0 !== component && null !== (_component$props = component.props) && void 0 !== _component$props && _component$props.title) html += `<h2>${component.props.title}</h2>`;
                                html += component.props.content;
                            } else if ("CustomHtml" === (null === component || void 0 === component ? void 0 : component.type)) html += `<div>${component.props.content}</div>`; else if ("Image" === (null === component || void 0 === component ? void 0 : component.type)) {
                                var _component$props2, _component$props2$ima;
                                if (null !== component && void 0 !== component && null !== (_component$props2 = component.props) && void 0 !== _component$props2 && null !== (_component$props2$ima = _component$props2.image) && void 0 !== _component$props2$ima && _component$props2$ima.url) html += `<img data-src="${component.props.image.url}" style="max-width:100%"  data-srcset="${component.props.image.url}" alt="${component.props.image.alt}" class="lozad"  />`;
                            }
                        }));
                    }));
                } else html += pageConfig;
                html += "</div>";
                return html;
            }
            transContentByShadowDom($item, content) {
                const $content = $item.find(".base-collapse-item__content");
                $content.html(`\n      <div style="overflow: hidden;" data-node="shadow-content">\n        <div class="mce-content-body">\n          ${content}\n        </div>\n      </div>\n      <div data-node="shadow-dom"></div>\n    `);
                (0, createShadowDom["default"])();
            }
            setCollapseContent(data, $item) {
                const content = this.getCustomPageContent(null === data || void 0 === data ? void 0 : data.htmlConfig);
                this.transContentByShadowDom($item, content);
            }
            calcCollapseContentHeight($item) {
                const $content = $item.find(".base-collapse-item__content");
                const images = Array.from($content.find("img")).map((item => new Promise(((resolve, reject) => {
                    const image = new Image;
                    image.src = item.src;
                    image.onload = () => {
                        resolve(image);
                    };
                    image.onerror = () => {
                        reject(image);
                    };
                }))));
                Promise.allSettled(images).then((() => {
                    setTimeout((() => {
                        const height = $content.outerHeight();
                        $content.parent().css({
                            height
                        });
                    }), 0);
                })).catch((() => {
                    $content.parent().css({
                        height: "auto"
                    });
                }));
            }
            open($item) {
                openCollapseByHeight($item.find(".base-collapse-item__wrap").get(0));
                $item.addClass("active");
            }
            close($item) {
                this.$activeItem = null;
                closeCollapseByHeight($item.find(".base-collapse-item__wrap").get(0));
                $item.removeClass("active");
            }
        }
        const product_collapse = Collapse;
        var event_bus = __webpack_require__("../shared/browser/utils/event-bus.js");
        var CurrencyConvert = __webpack_require__("../shared/browser/utils/currency/CurrencyConvert.js");
        var effectFc = __webpack_require__("./src/assets/commons/utils/effectFc.js");
        class Drawer {
            constructor({id, onSwitch}) {
                if (!id) throw new Error("【drawer】id为必传项");
                this.id = id;
                this.isShow = false;
                const drawerDom = this.getDom();
                if (!drawerDom) return;
                document.body.appendChild(drawerDom);
                this.hide = this.hide.bind(this);
                this.onSwitch = onSwitch;
            }
            getDom() {
                const dom = document.getElementById(this.id);
                return dom || false;
            }
            show() {
                var _this$onSwitch;
                const drawerDom = this.getDom();
                if (!drawerDom) return;
                this.isShow = true;
                drawerDom.style.display = "block";
                const $body = __SL_$__("body");
                $body.addClass("sales-common-drawer__root-open");
                const mask = drawerDom.querySelector(".sales-common-drawer__mask-hook");
                if (mask) {
                    setTimeout((() => {
                        __SL_$__(mask).addClass("sales-common-drawer__mask--append");
                    }), 20);
                    mask.addEventListener("click", this.hide);
                }
                const closeBtn = drawerDom.querySelector(".sales-common-drawer-hook");
                if (closeBtn) closeBtn.addEventListener("click", this.hide);
                null === (_this$onSwitch = this.onSwitch) || void 0 === _this$onSwitch ? void 0 : _this$onSwitch.call(this, true);
            }
            hide() {
                var _this$onSwitch2;
                const drawerDom = this.getDom();
                if (!drawerDom) return;
                this.isShow = false;
                drawerDom.style.display = "none";
                const $body = __SL_$__("body");
                $body.removeClass("sales-common-drawer__root-open");
                const mask = drawerDom.querySelector(".sales-common-drawer__mask-hook");
                if (mask) {
                    __SL_$__(mask).removeClass("sales-common-drawer__mask--append");
                    mask.removeEventListener("click", this.hide);
                }
                const closeBtn = drawerDom.querySelector(".sales-common-drawer-hook");
                if (closeBtn) closeBtn.removeEventListener("click", this.hide);
                null === (_this$onSwitch2 = this.onSwitch) || void 0 === _this$onSwitch2 ? void 0 : _this$onSwitch2.call(this, false);
            }
            getShowStatus() {
                return this.isShow;
            }
        }
        const drawer_Drawer = Drawer;
        const vars = {
            containerSel: ".sales__autoCouponBanner-container-hook",
            tagsSel: ".sales__autoCouponBanner-couponItem-hook",
            downIconSel: ".sales__autoCouponBanner-downIcon-hook",
            clickAreaSel: "#salesAutoCouponBannerLeftHook",
            modalSel: ".sales__autoCouponModal-container",
            modalPopupClassName: "sales__autoCouponModal-container--show",
            containerShowStateClassName: "sales__autoCouponBanner-container--popup",
            drawerId: "salesAutoCouponDrawer",
            modelListItemsSel: ".sales__autoCouponModal-listItem",
            shopMoreText: ".sales__autoCouponBanner-shopMoreText-hook"
        };
        function isAllowPopupFn() {
            const $tags = __SL_$__(vars.modelListItemsSel);
            const isMob = (0, isMobile["default"])();
            return $tags.length > 2 || isMob && $tags.length > 1;
        }
        function handlePlatformChange() {
            const $tags = __SL_$__(vars.tagsSel);
            const isMob = (0, isMobile["default"])();
            if ($tags[0]) if (isMob) $tags.css("display", "none").eq(0).css("display", "inline-block"); else $tags.css("display", "inline-block");
            const $downIcon = __SL_$__(vars.downIconSel);
            const $clickArea = __SL_$__(vars.clickAreaSel);
            const isAllowPopup = isAllowPopupFn();
            $downIcon.css("display", isAllowPopup ? "block" : "none");
            $clickArea.css("cursor", isAllowPopup ? "pointer" : "default");
            const $shopMoreText = __SL_$__(vars.shopMoreText);
            if ($shopMoreText.length) $shopMoreText.css("display", isMob ? "none" : "block");
        }
        const auto_coupon_banner = (0, effectFc["default"])((function(parent) {
            const {useEffect} = this;
            const $parent = __SL_$__(parent || document.body);
            const $container = $parent.find(vars.containerSel);
            if (!$container.length) return;
            handlePlatformChange();
            const handlePopup = () => {
                let isModalShow = false;
                let isDrawerShow = false;
                const updateContainerShowState = () => {
                    if (!$container.length) return;
                    const hasClass = $container.hasClass(vars.containerShowStateClassName);
                    if ((isModalShow || isDrawerShow) && !hasClass) $container.addClass(vars.containerShowStateClassName);
                    if (!isModalShow && !isDrawerShow && hasClass) $container.removeClass(vars.containerShowStateClassName);
                };
                const drawer = new drawer_Drawer({
                    id: vars.drawerId,
                    onSwitch(flag) {
                        isDrawerShow = flag;
                        updateContainerShowState();
                    }
                });
                const $clickArea = __SL_$__(vars.clickAreaSel);
                if (!$clickArea.length) return;
                const modalShow = () => {
                    const $modal = __SL_$__(vars.modalSel);
                    if ($modal.length && !$modal.hasClass(vars.modalPopupClassName)) {
                        $modal.addClass(vars.modalPopupClassName);
                        isModalShow = true;
                    }
                    updateContainerShowState();
                };
                const modalHide = () => {
                    const $modal = __SL_$__(vars.modalSel);
                    if ($modal.length && $modal.hasClass(vars.modalPopupClassName)) {
                        $modal.removeClass(vars.modalPopupClassName);
                        isModalShow = false;
                    }
                    updateContainerShowState();
                };
                const modalToggle = () => {
                    const $modal = __SL_$__(vars.modalSel);
                    if ($modal.length) if ($modal.hasClass(vars.modalPopupClassName)) {
                        $modal.removeClass(vars.modalPopupClassName);
                        isModalShow = false;
                    } else {
                        $modal.addClass(vars.modalPopupClassName);
                        isModalShow = true;
                    }
                    updateContainerShowState();
                };
                useEffect($clickArea, "on,off", "click", (() => {
                    const isMob = (0, isMobile["default"])();
                    const isAllowPopup = isAllowPopupFn();
                    if (!isAllowPopup) {
                        if (isModalShow) modalHide();
                        return;
                    }
                    if (isMob) drawer.show(); else modalToggle();
                }));
                useEffect(__SL_$__(vars.modalSel), "on,off", "click", (e => {
                    e.stopPropagation();
                }));
                useEffect(__SL_$__(`#${vars.drawerId}`), "on,off", "click", (e => {
                    e.stopPropagation();
                }));
                useEffect(__SL_$__(document.body), "on,off", "click", (e => {
                    const {target} = e;
                    const containerDom = $clickArea.get(0);
                    if (__SL_$__.contains(containerDom, target) || containerDom === target) return;
                    if ((0, isMobile["default"])() && drawer.getShowStatus()) drawer.hide();
                    if (!(0, isMobile["default"])()) modalHide();
                }));
                useEffect(event_bus.SL_EventBus, "on,off", "global:platformChange", (() => {
                    const isMob = (0, isMobile["default"])();
                    if (!isMob && isDrawerShow) {
                        drawer.hide();
                        modalShow();
                    }
                    if (isMob && isModalShow) {
                        drawer.show();
                        modalHide();
                    }
                    handlePlatformChange();
                }));
            };
            handlePopup();
            window.SL_EventBus.on("global:currency:format", (() => {
                const amountNode = $container.find("[data-amount]");
                const drawerAmountNode = __SL_$__(`#${vars.drawerId}`).find("[data-amount]");
                amountNode.each((function() {
                    __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).data("amount")));
                }));
                drawerAmountNode.each((function() {
                    __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).data("amount")));
                }));
            }));
        }));
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var countdown = __webpack_require__("./src/assets/commons/utils/countdown.js");
        class FlashSale {
            constructor() {
                var _SL_State$get;
                this.timeLimitActivityList = null === (_SL_State$get = state_selector.SL_State.get("productActivity")) || void 0 === _SL_State$get ? void 0 : _SL_State$get.timeLimitActivityList;
            }
            init() {
                const flashSales = __SL_$__(".sales__flash-sale-container-hook[data-seq]");
                if (this.timeLimitActivityList && flashSales.length) {
                    const seqList = [ ...new Set([ ...flashSales ].map((ele => ele.dataset.seq))) ];
                    seqList.forEach((seq => {
                        var _activity$salesPlugin, _activity$salesPlugin2, _salesEnvCustomInfo$p;
                        const eles = __SL_$__(".sales__flash-sale-container-hook[data-seq]").filter(`[data-seq=${seq}]`);
                        const activity = this.timeLimitActivityList.find((({activitySeq}) => seq === activitySeq));
                        if (!activity) return;
                        if (null !== activity && void 0 !== activity && null !== (_activity$salesPlugin = activity.salesPlugin) && void 0 !== _activity$salesPlugin && null !== (_activity$salesPlugin2 = _activity$salesPlugin.countDownTimerPlugin) && void 0 !== _activity$salesPlugin2 && _activity$salesPlugin2.showCountDownTime) this.startCountDown(activity, eles);
                        const {activitySeq, seoHandleList, salesEnvCustomInfo} = activity;
                        const {linkType, customLink} = null !== (_salesEnvCustomInfo$p = null === salesEnvCustomInfo || void 0 === salesEnvCustomInfo ? void 0 : salesEnvCustomInfo.productDetailConfig) && void 0 !== _salesEnvCustomInfo$p ? _salesEnvCustomInfo$p : {};
                        if ("activityPage" === linkType || !linkType) eles.on("click", (() => {
                            var _seoHandleList$;
                            window.location.href = `/activity/${null !== (_seoHandleList$ = null === seoHandleList || void 0 === seoHandleList ? void 0 : seoHandleList[0]) && void 0 !== _seoHandleList$ ? _seoHandleList$ : activitySeq}`;
                        })); else if ("custom" === linkType) eles.on("click", (() => {
                            window.location.href = customLink;
                        }));
                    }));
                }
            }
            startCountDown(activity, eles) {
                var _activity$salesPlugin3, _activity$salesPlugin4;
                if (null !== activity && void 0 !== activity && null !== (_activity$salesPlugin3 = activity.salesPlugin) && void 0 !== _activity$salesPlugin3 && null !== (_activity$salesPlugin4 = _activity$salesPlugin3.countDownTimerPlugin) && void 0 !== _activity$salesPlugin4 && _activity$salesPlugin4.showCountDownTime) {
                    var _activity$salesPlugin5;
                    const countdownEles = eles.find(".sales__flash-sale-timeout-container-hook");
                    const daysCon = countdownEles.find(".sales__flash-sale-timeout-first-time-item-hook");
                    const daysEles = countdownEles.find(".sales__flash-sale-timeout-days-hook");
                    const daysDotEles = countdownEles.find(".sales__flash-sale-timeout-first-dot-hook");
                    const hoursEles = countdownEles.find(".sales__flash-sale-timeout-hours-hook");
                    const minutesEles = countdownEles.find(".sales__flash-sale-timeout-minutes-hook");
                    const secondsEles = countdownEles.find(".sales__flash-sale-timeout-seconds-hook");
                    const {startTime, endTime} = null === (_activity$salesPlugin5 = activity.salesPlugin) || void 0 === _activity$salesPlugin5 ? void 0 : _activity$salesPlugin5.countDownTimerPlugin;
                    const now = Date.now();
                    if (now >= startTime && now < endTime) (0, countdown["default"])(endTime, (([d, h, m, s, ms], interval) => {
                        daysEles.html(d);
                        hoursEles.html(h);
                        minutesEles.html(m);
                        secondsEles.html(`${s}.${ms}`);
                        if (d <= 0) {
                            daysCon.hide();
                            daysDotEles.hide();
                        }
                        if (interval <= 0) countdownEles.hide();
                    }), {
                        id: `flashSale_${activity.activitySeq}`,
                        hasDay: true,
                        hasMillisecond: true,
                        interval: 100
                    }); else countdownEles.hide();
                }
            }
            destroy() {
                this.timeLimitActivityList.forEach((({activitySeq}) => {
                    if (countdown.timers[`flashSale_${activitySeq}`]) clearInterval(countdown.timers[`flashSale_${activitySeq}`]);
                }));
            }
        }
        const flash_sale = FlashSale;
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        const get_sku_attribute_names = (skuAttributeIds, skuAttributeMap) => skuAttributeIds && skuAttributeIds.length && skuAttributeMap ? skuAttributeIds.map((({id, valueId}) => ({
            skuAttribute: skuAttributeMap[id],
            valueId
        }))).filter((({skuAttribute}) => !skuAttribute.hidden)).map((({skuAttribute, valueId}) => {
            var _skuAttribute$skuAttr;
            return null === (_skuAttribute$skuAttr = skuAttribute.skuAttributeValueMap) || void 0 === _skuAttribute$skuAttr ? void 0 : _skuAttribute$skuAttr[valueId].defaultValue;
        })) : [];
        function guid() {
            function S4() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            }
            return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
        }
        function getEventID() {
            return `${Date.now()}_${guid().replace(/-/g, "")}`;
        }
        function addToCartReport({products, amount, num = 1, formatCurrency, filter}) {
            var _products$filter, _window$SL_EventBus, _window$Shopline$even;
            const {currency} = window.Shopline;
            const ga4_items = [];
            const ga_items = [];
            const gar_items = [];
            const productList = null === products || void 0 === products ? void 0 : null === (_products$filter = products.filter((item => filter ? !!filter(item) : true))) || void 0 === _products$filter ? void 0 : _products$filter.map((item => {
                var _ref, _skulist$find, _window$SL_GetReportA, _window;
                const {productSeq, productId, spuSeq, spuId, title, defaultTitle, skus, skuList, productSkuList, skuSeq, skuId, skuAttributeMap, num: count} = item;
                const id = productSeq || productId || spuSeq || spuId;
                const name = title || defaultTitle;
                const skulist = productSkuList || skus || skuList;
                let SkuId = filter ? filter(item) || skuSeq || skuId : skuSeq || skuId;
                const sku = null !== (_ref = null !== (_skulist$find = null === skulist || void 0 === skulist ? void 0 : skulist.find((s => (null === s || void 0 === s ? void 0 : s.skuId) && (null === s || void 0 === s ? void 0 : s.skuId) === SkuId || (null === s || void 0 === s ? void 0 : s.skuId) && (null === s || void 0 === s ? void 0 : s.skuSeq) === SkuId))) && void 0 !== _skulist$find ? _skulist$find : null === skulist || void 0 === skulist ? void 0 : skulist[0]) && void 0 !== _ref ? _ref : {};
                const {price, skuAttributeIds} = sku;
                SkuId = sku.skuId || sku.skuSeq || SkuId;
                const variant = sku ? get_sku_attribute_names(skuAttributeIds, skuAttributeMap).join(",") : "";
                const Price = formatCurrency ? formatCurrency(price * num) : Number(price * num) / 100;
                ga_items.push({
                    id,
                    name,
                    price: Price,
                    quantity: 1,
                    variant
                });
                ga4_items.push({
                    item_id: id,
                    item_name: name,
                    price: Price,
                    quantity: 1,
                    item_variant: variant
                });
                gar_items.push({
                    id: window.SL_GetReportArg ? null === (_window$SL_GetReportA = (_window = window).SL_GetReportArg) || void 0 === _window$SL_GetReportA ? void 0 : _window$SL_GetReportA.call(_window, "GAR", "sku_id", SkuId) : SkuId,
                    google_business_vertical: "retail"
                });
                return {
                    spuId: id,
                    skuId: SkuId,
                    title: name,
                    price,
                    num: null !== count && void 0 !== count ? count : num
                };
            }));
            let total = 0;
            if (amount) total = amount; else total = productList.reduce(((a, p) => a + (null === p || void 0 === p ? void 0 : p.price) * (null === p || void 0 === p ? void 0 : p.num)), 0);
            const value = formatCurrency ? formatCurrency(total) : total / 100;
            const content_spu_id = productList.map((({spuId}) => spuId)).join(",");
            const content_sku_id = productList.map((({skuId}) => skuId)).join(",");
            const content_name = productList.map((({title}) => title)).join(",");
            const totalQuantity = productList.reduce(((a, p) => a + (null === p || void 0 === p ? void 0 : p.num)), 0);
            const GA4 = {
                items: ga_items,
                currency,
                value,
                send_to: "GA4"
            };
            const GA = {
                items: ga_items,
                currency,
                value
            };
            const params = {
                GAAds: [ [ "event", "conversion", {
                    value,
                    currency
                } ], "ADD-TO-CART" ],
                GA: [ [ "event", "add_to_cart", GA ] ],
                GA4: [ [ "event", "add_to_cart", GA4 ] ],
                FBPixel: [ [ "track", "AddToCart", {
                    content_ids: content_sku_id,
                    content_name: content_name || "",
                    content_category: "",
                    content_type: "product_group",
                    currency,
                    value
                }, {
                    eventID: `addToCart${getEventID()}`
                } ] ],
                GAR: [ [ "event", "add_to_cart", {
                    value,
                    items: gar_items
                } ] ],
                GARemarketing: [ [ "event", "add_to_cart", {
                    ecomm_prodid: productList.map((({skuId}) => {
                        var _window$SL_GetReportA2, _window2;
                        return window.SL_GetReportArg ? null === (_window$SL_GetReportA2 = (_window2 = window).SL_GetReportArg) || void 0 === _window$SL_GetReportA2 ? void 0 : _window$SL_GetReportA2.call(_window2, "GAR", "sku_id", skuId) : skuId;
                    })).join(","),
                    ecomm_pagetype: "cart",
                    ecomm_totalvalue: value
                } ] ]
            };
            null === (_window$SL_EventBus = window.SL_EventBus) || void 0 === _window$SL_EventBus ? void 0 : _window$SL_EventBus.emit("global:thirdPartReport", params);
            null === (_window$Shopline$even = window.Shopline.event) || void 0 === _window$Shopline$even ? void 0 : _window$Shopline$even.emit("DataReport::AddToCart", {
                data: {
                    content_spu_id,
                    content_sku_id,
                    content_category: "",
                    content_name,
                    currency,
                    price: value,
                    value,
                    quantity: totalQuantity
                },
                interior: "DataReport::AddToCart",
                onSuccess: result => {
                    console.info("success", result);
                },
                onError: error => {
                    console.error(error);
                }
            });
        }
        class AddToCartList {
            constructor(spu, sku) {
                this.spu = {
                    ...spu,
                    ...sku
                };
            }
            setActiveSku(sku) {
                this.activeSku = sku ? {
                    ...sku,
                    name: this.spu.title
                } : null;
            }
            init() {
                const addToCart = this;
                __SL_$__("#page-product-detail .sales__add-to-cart-list-content").on("click", ".sales__add-to-cart-item-btn-hook", (ev => {
                    const {spuSeq: spuId, skuSeq: skuId, name, price} = addToCart.activeSku;
                    const eventID = (0, tool.getEventID)();
                    window.Shopline.event.emit("Cart::AddToCart", {
                        data: {
                            spuId,
                            skuId,
                            num: parseInt(ev.target.dataset.count, 10),
                            price,
                            name,
                            eventID: `addToCart${eventID}`
                        },
                        onSuccess: () => {
                            const quantity = parseInt(ev.target.dataset.count, 10);
                            addToCartReport({
                                products: [ {
                                    ...this.spu,
                                    skuId
                                } ],
                                num: quantity,
                                formatCurrency: currency["default"].formatCurrency
                            });
                        },
                        onError: error => {
                            console.error(error);
                        }
                    });
                }));
            }
        }
        const add_to_cart_list = AddToCartList;
        var url = __webpack_require__("./src/assets/commons/utils/url.js");
        var syntax_patch = __webpack_require__("../shared/browser/utils/syntax-patch.js");
        function hiido_guid() {
            function S4() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            }
            return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
        }
        function Hiido({page, module}, eventMap = {}) {
            this.__default = {
                page,
                module
            };
            this.__eventMap = eventMap;
            this.__observe = {};
            this.__eObserve = {};
            this.exposure(".hiido_exposure[data-event_id]");
            this.exposure(".hiido_exposure_effective[data-event_id]", null, {
                effective: true
            });
        }
        Hiido.prototype.observerStop = function(force) {
            if (!((0, syntax_patch.get)(Object.keys(this.__observe), "length") || (0, syntax_patch.get)(Object.keys(this.__eObserve), "length")) || force) {
                this.__observe = {};
                this.__eObserve = {};
                (0, syntax_patch.get_func)(this, "__observer.disconnect").exec();
                delete this.__observer;
                this.__validityTimer && clearInterval(this.__validityTimer);
            }
        };
        Hiido.prototype.validity = function() {
            Object.entries(this.__observe).forEach((([uuid, {ele}]) => {
                if (false === ele.isConnected || !ele.__HIIDO_UUID__ || ele.__HIIDO_UUID__ !== uuid) {
                    delete this.__observe[uuid];
                    if (!this.__eObserve[uuid]) this.__observer.unobserve(ele);
                }
            }));
            Object.entries(this.__eObserve).forEach((([uuid, {ele}]) => {
                if (false === ele.isConnected || !ele.__HIIDO_UUID__ || ele.__HIIDO_UUID__ !== uuid) {
                    delete this.__eObserve[uuid];
                    if (!this.__observe[uuid]) this.__observer.unobserve(ele);
                }
            }));
            this.observerStop();
        };
        Hiido.prototype.observerStart = function() {
            if (IntersectionObserver && !this.__observer) {
                this.__observer = new IntersectionObserver((changes => {
                    changes.forEach((change => {
                        const uuid = change.target.__HIIDO_UUID__;
                        if (uuid && this.__observe[uuid] && change.intersectionRatio > 0) {
                            const {ele, options, once} = this.__observe[uuid];
                            this.collect(options);
                            if (once) {
                                delete this.__observe[uuid];
                                if (!this.__eObserve[uuid]) this.__observer.unobserve(ele);
                                this.observerStop();
                            }
                        }
                        if (uuid && this.__eObserve[uuid] && change.intersectionRatio > .5) {
                            if ((0, syntax_patch.get)(this.__eObserve[uuid], "timer")) {
                                clearTimeout(this.__eObserve[uuid].timer);
                                delete this.__eObserve[uuid].timer;
                            }
                            this.__eObserve[uuid].timer = setTimeout((() => {
                                const {ele, options, once} = this.__eObserve[uuid];
                                this.collect(options);
                                if (once) {
                                    delete this.__eObserve[uuid];
                                    if (!this.__observe[uuid]) this.__observer.unobserve(ele);
                                    this.observerStop();
                                }
                            }), 500);
                        }
                    }));
                }), {
                    threshold: [ 0, .5 ]
                });
                this.__validityTimer && clearInterval(this.__validityTimer);
                this.__validityTimer = setInterval((() => {
                    this.validity();
                }), 2e4);
                return this;
            }
        };
        Hiido.prototype.collect = function(eventId, options) {
            let obj = options;
            if ("object" === typeof eventId) {
                obj = eventId;
                if ((0, syntax_patch.get)(obj, "event_name") && (0, syntax_patch.get)(this.__eventMap, (0, 
                syntax_patch.get)(obj, "event_name"))) obj.event_id = (0, syntax_patch.get)(this.__eventMap, (0, 
                syntax_patch.get)(obj, "event_name"));
            } else if ("object" === typeof obj) if ((0, syntax_patch.get)(this.__eventMap, eventId)) {
                obj.event_id = (0, syntax_patch.get)(this.__eventMap, eventId);
                obj.event_name = eventId;
            } else obj.event_id = eventId;
            if (obj.event_id) (0, syntax_patch.get_func)(window.HdSdk, "shopTracker.collect").exec({
                module: -999,
                component: -999,
                action_type: 102,
                ...this.__default,
                ...obj
            });
        };
        Hiido.prototype.exposure = function(ele, options, {once = true, effective = false} = {}) {
            setTimeout((() => {
                if (!IntersectionObserver || !ele) return;
                let eles = [];
                if (ele instanceof Array) eles = ele.filter((e => e instanceof HTMLElement)); else if ("string" === typeof ele) eles = [ ...document.querySelectorAll(ele) ]; else if (ele instanceof HTMLElement) eles = [ ele ];
                eles.forEach((ele => {
                    if (false === (0, syntax_patch.get)(ele, "isConnected")) return;
                    let uuid;
                    if (!(Object.values(this.__observe).find((item => item.ele === ele)) || Object.values(this.__eObserve).find((item => item.ele === ele)))) {
                        uuid = hiido_guid();
                        ele.__HIIDO_UUID__ = uuid;
                        this.observerStart();
                    } else if (ele.__HIIDO_UUID__) uuid = ele.__HIIDO_UUID__; else {
                        uuid = hiido_guid();
                        ele.__HIIDO_UUID__ = uuid;
                    }
                    (0, syntax_patch.get_func)(this.__observer, "unobserve").exec(ele);
                    (0, syntax_patch.get_func)(this.__observer, "observe").exec(ele);
                    if (effective) this.__eObserve[uuid] = {
                        ele,
                        options: {
                            action_type: 108,
                            ...ele.dataset,
                            ...options
                        },
                        once
                    }; else this.__observe[uuid] = {
                        ele,
                        options: {
                            action_type: 101,
                            ...ele.dataset,
                            ...options
                        },
                        once
                    };
                }));
            }), 300);
        };
        const hiido = Hiido;
        var _SL_State$get, _SL_State$get2;
        const hd = new hiido({
            page: 105
        });
        const {spu} = null !== (_SL_State$get = state_selector.SL_State.get("product")) && void 0 !== _SL_State$get ? _SL_State$get : {};
        const {discountCodeActivityList} = null !== (_SL_State$get2 = state_selector.SL_State.get("productActivity")) && void 0 !== _SL_State$get2 ? _SL_State$get2 : {};
        const discount_coupon_vars = {
            containerIdSel: ".sales__discountCouponBanner-container-hook",
            tagsSel: ".sales__discountCouponBanner-couponItem-hook",
            modalSel: "#salesCouponModalHook",
            drawerId: "salesDiscountCoupon_DiscountDrawer",
            modalShowClassName: "sales-coupon-modal__container--show",
            couponsSel: ".sales-discount-coupon-hook",
            applyClass: "sales-discount-coupon--apply",
            btnSel: ".sales-discount-coupon-card-btn-hook",
            onlyOneContainerSel: ".sales__discountCouponOnlyOne-container-hook",
            onlyOneClickSel: ".sales__discountCouponOnlyOne-applyBtn-hook",
            onlyOneApplyClass: "sales__discountCouponOnlyOne-container--apply",
            onlyOneBtnSel: ".sales__discountCouponOnlyOne-applyBtn-hook"
        };
        function getCartId() {
            return new Promise(((resolve, reject) => {
                var _window$Shopline, _window$Shopline$even;
                null === (_window$Shopline = window.Shopline) || void 0 === _window$Shopline ? void 0 : null === (_window$Shopline$even = _window$Shopline.event) || void 0 === _window$Shopline$even ? void 0 : _window$Shopline$even.emit("Cart::GetCartId", {
                    onSuccess(res) {
                        if (null !== res && void 0 !== res && res.success) {
                            const ownerId = res.data;
                            resolve(ownerId);
                        }
                        reject(res);
                    },
                    onError(error) {
                        reject(error);
                    }
                });
            }));
        }
        function handleTagsShow() {
            const $tags = __SL_$__(discount_coupon_vars.tagsSel);
            if (!$tags[0]) return;
            if ((0, isMobile["default"])()) $tags.css("display", "none").eq(0).css("display", "inline-block"); else $tags.css("display", "inline-block");
        }
        const initDiscountCoupon = (0, effectFc["default"])((function() {
            const {useEffect} = this;
            const container = __SL_$__(discount_coupon_vars.containerIdSel);
            const onlyOneContainer = __SL_$__(discount_coupon_vars.onlyOneContainerSel);
            const drawer = new drawer_Drawer({
                id: discount_coupon_vars.drawerId,
                onSwitch(isShow) {
                    if (isShow) {
                        var _discountCodeActivity, _discountCodeActivity2;
                        const hdOptions = {
                            module: 129,
                            spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq,
                            activity_id: null === discountCodeActivityList || void 0 === discountCodeActivityList ? void 0 : null === (_discountCodeActivity = discountCodeActivityList.map) || void 0 === _discountCodeActivity ? void 0 : null === (_discountCodeActivity2 = _discountCodeActivity.call(discountCodeActivityList, (item => null === item || void 0 === item ? void 0 : item.activitySeq))) || void 0 === _discountCodeActivity2 ? void 0 : _discountCodeActivity2.join(",")
                        };
                        hd.exposure(`#${discount_coupon_vars.drawerId}`, {
                            event_id: 1319,
                            ...hdOptions
                        });
                        hd.exposure(`#${discount_coupon_vars.drawerId}`, {
                            event_id: 1320,
                            ...hdOptions
                        }, {
                            effective: true
                        });
                    }
                }
            });
            const modalShow = () => {
                var _discountCodeActivity3, _discountCodeActivity4;
                const modal = __SL_$__(discount_coupon_vars.modalSel);
                modal.addClass(discount_coupon_vars.modalShowClassName);
                const hdOptions = {
                    module: 129,
                    spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq,
                    activity_id: null === discountCodeActivityList || void 0 === discountCodeActivityList ? void 0 : null === (_discountCodeActivity3 = discountCodeActivityList.map) || void 0 === _discountCodeActivity3 ? void 0 : null === (_discountCodeActivity4 = _discountCodeActivity3.call(discountCodeActivityList, (item => null === item || void 0 === item ? void 0 : item.activitySeq))) || void 0 === _discountCodeActivity4 ? void 0 : _discountCodeActivity4.join(",")
                };
                hd.exposure(".sales-coupon-modal__container", {
                    event_id: 1319,
                    ...hdOptions
                });
                hd.exposure(".sales-coupon-modal__container", {
                    event_id: 1320,
                    ...hdOptions
                }, {
                    effective: true
                });
            };
            const modalHide = () => {
                const modal = __SL_$__(discount_coupon_vars.modalSel);
                if (modal.hasClass(discount_coupon_vars.modalShowClassName)) modal.removeClass(discount_coupon_vars.modalShowClassName);
            };
            const modalToggle = () => {
                const modal = __SL_$__(discount_coupon_vars.modalSel);
                if (modal.hasClass(discount_coupon_vars.modalShowClassName)) modalHide(); else modalShow();
            };
            let isStopBtnApply = false;
            const bindCouponApply = ({clickSel, onApplySuccess}) => {
                const $clickEl = __SL_$__(clickSel);
                useEffect($clickEl, "on,off", "click", (e => {
                    var _discountCodeActivity5;
                    if (isStopBtnApply) return;
                    const $el = __SL_$__(e.currentTarget);
                    const discountCode = $el.data("discount-code");
                    if (!discountCode) {
                        toast["default"].init({
                            content: (0, i18n.t)("sales.discount_coupon.coupon_not_found")
                        });
                        return;
                    }
                    const cartIdPromise = getCartId();
                    cartIdPromise.then((ownerId => request["default"].post("/sale/coupon/bind/cart", {
                        ownerId,
                        discountCode
                    }))).then((() => {
                        isStopBtnApply = true;
                        setTimeout((() => {
                            isStopBtnApply = false;
                        }), 500);
                        toast["default"].init({
                            content: (0, i18n.t)("sales.discount_coupon.applied_successfully")
                        });
                        if ("function" === typeof onApplySuccess) onApplySuccess(discountCode);
                    })).catch((() => {
                        toast["default"].init({
                            content: (0, i18n.t)("sales.discount_coupon.failed_to_apply_coupon_code")
                        });
                    }));
                    cartIdPromise.then((() => {
                        window.sessionStorage.setItem("tradeExtraInfo", JSON.stringify({
                            discountCode: {
                                value: discountCode,
                                source: "Activity"
                            }
                        }));
                    }));
                    hd.collect({
                        event_id: 1321,
                        module: 129,
                        component: 101,
                        spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq,
                        activity_id: null === discountCodeActivityList || void 0 === discountCodeActivityList ? void 0 : null === (_discountCodeActivity5 = discountCodeActivityList.find((item => (null === item || void 0 === item ? void 0 : item.discountCode) === discountCode))) || void 0 === _discountCodeActivity5 ? void 0 : _discountCodeActivity5.activitySeq
                    });
                }));
            };
            if (container.length) {
                useEffect(container, "on,off", "click", (() => {
                    if ((0, isMobile["default"])()) drawer.show(); else modalToggle();
                    hd.collect({
                        event_id: 1318,
                        module: 128,
                        spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq
                    });
                }));
                useEffect(__SL_$__(discount_coupon_vars.modalSel), "on,off", "click", (e => {
                    e.stopPropagation();
                }));
                useEffect(__SL_$__(document.body), "on,off", "click", (e => {
                    const {target} = e;
                    const containerDom = container.get(0);
                    if (containerDom.contains(target) || containerDom === target) return;
                    const drawerContainer = document.querySelector(`#${discount_coupon_vars.drawerId}`);
                    if (drawerContainer && drawerContainer.contains(target) || drawerContainer === target) return;
                    if ((0, isMobile["default"])() && drawer.getShowStatus()) drawer.hide();
                    if (!(0, isMobile["default"])()) modalHide();
                }));
                useEffect(event_bus.SL_EventBus, "on,off", "global:platformChange", (() => {
                    handleTagsShow();
                    if (!(0, isMobile["default"])() && drawer.getShowStatus()) {
                        drawer.hide();
                        modalShow();
                    }
                    if ((0, isMobile["default"])()) {
                        const modal = __SL_$__(discount_coupon_vars.modalSel);
                        if (modal.hasClass(discount_coupon_vars.modalShowClassName)) drawer.show();
                        modalHide();
                    }
                }));
                window.SL_EventBus.on("global:currency:format", (() => {
                    const amountNode = container.find("[data-amount]");
                    amountNode.each((function() {
                        __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).data("amount")));
                    }));
                    const drawerAmountNode = __SL_$__(`#${discount_coupon_vars.drawerId}`).find("[data-amount]");
                    drawerAmountNode.each((function() {
                        __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).data("amount")));
                    }));
                }));
                bindCouponApply({
                    clickSel: discount_coupon_vars.couponsSel,
                    onApplySuccess: discountCode => {
                        const $coupon = __SL_$__(discount_coupon_vars.couponsSel);
                        const $btns = $coupon.find(discount_coupon_vars.btnSel);
                        const btnData = $btns.data();
                        $coupon.removeClass(discount_coupon_vars.applyClass);
                        $btns.text(btnData.apply || "");
                        $btns.each((function() {
                            const $self = __SL_$__(this);
                            const selfData = $self.data();
                            if (true === selfData.isCustom) $self.css({
                                "background-color": selfData.btnBgColor,
                                color: selfData.btnTextColor,
                                border: "none"
                            });
                        }));
                        $coupon.each((function() {
                            const $self = __SL_$__(this);
                            const $btnItems = $self.find(discount_coupon_vars.btnSel);
                            if ($self.data("discount-code") === discountCode) {
                                $self.addClass(discount_coupon_vars.applyClass);
                                $btnItems.text($btnItems.data("applied"));
                                const btnItemsData = $btnItems.data();
                                if (true === btnItemsData.isCustom) $btnItems.css({
                                    color: btnItemsData.btnBgColor,
                                    "background-color": "transparent",
                                    border: `1px solid ${btnItemsData.btnBgColor}`
                                });
                            }
                        }));
                    }
                });
                handleTagsShow();
            } else if (onlyOneContainer.length) {
                useEffect(onlyOneContainer, "on,off", "click", (() => {
                    hd.collect({
                        event_id: 1318,
                        module: 128,
                        spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq
                    });
                }));
                bindCouponApply({
                    clickSel: discount_coupon_vars.onlyOneClickSel,
                    onApplySuccess: discountCode => {
                        const $coupon = __SL_$__(discount_coupon_vars.onlyOneContainerSel);
                        const $btns = $coupon.find(discount_coupon_vars.onlyOneBtnSel);
                        const btnData = $btns.data();
                        $coupon.removeClass(discount_coupon_vars.onlyOneApplyClass);
                        $btns.text(btnData.apply || "");
                        $coupon.each((function() {
                            const $self = __SL_$__(this);
                            const $btnItems = $self.find(discount_coupon_vars.onlyOneBtnSel);
                            if ($self.data("discount-code") === discountCode) {
                                $self.addClass(discount_coupon_vars.onlyOneApplyClass);
                                $btnItems.text($btnItems.data("applied"));
                            }
                        }));
                    }
                });
                window.SL_EventBus.on("global:currency:format", (() => {
                    const amountNode = onlyOneContainer.find("[data-amount]");
                    amountNode.each((function() {
                        __SL_$__(this).text((0, CurrencyConvert.convertFormat)(__SL_$__(this).data("amount")));
                    }));
                }));
            }
            if (null !== discountCodeActivityList && void 0 !== discountCodeActivityList && discountCodeActivityList.length) {
                var _discountCodeActivity6, _discountCodeActivity7;
                hd.exposure(`${discount_coupon_vars.onlyOneContainerSel},${discount_coupon_vars.containerIdSel}`, {
                    event_id: 1317,
                    module: 128,
                    spu_id: null === spu || void 0 === spu ? void 0 : spu.spuSeq,
                    activity_id: null === discountCodeActivityList || void 0 === discountCodeActivityList ? void 0 : null === (_discountCodeActivity6 = discountCodeActivityList.map) || void 0 === _discountCodeActivity6 ? void 0 : null === (_discountCodeActivity7 = _discountCodeActivity6.call(discountCodeActivityList, (({activitySeq}) => activitySeq))) || void 0 === _discountCodeActivity7 ? void 0 : _discountCodeActivity7.join(",")
                });
            }
        }));
        const discount_coupon = initDiscountCoupon;
        var baseReport = __webpack_require__("../shared/browser/report/common/baseReport.js");
        var stage_const = __webpack_require__("../shared/browser/report/stage/const.js");
        class ProductPreviewReport extends baseReport.BaseReport {
            constructor() {
                super();
                this.map = {
                    pdp: {
                        pdpType: 101,
                        module: -999
                    },
                    featuredProduct: {
                        pdpType: 102,
                        module: 900
                    },
                    quickViewModal: {
                        pdpType: 103,
                        module: -999
                    }
                };
            }
            viewContent(params) {
                const {selector, content_spu_id, content_sku_id, title, currency, price} = params;
                if (!selector) {
                    console.warn("viewContent 缺少selector参数", params);
                    return;
                }
                const _params = {
                    content_ids: content_spu_id,
                    sku_id: content_sku_id,
                    content_name: title,
                    currency: state_selector.SL_State.get("storeInfo.currency") || currency,
                    value: price,
                    pdp_type: this.map[params.module] && this.map[params.module].pdpType,
                    module: this.map[params.module] && this.map[params.module].module,
                    component: "featuredProduct" === params.module ? 900 : -999,
                    popup_page_base: this.page,
                    page: "quickViewModal" !== params.module ? this.page : 107
                };
                if ("featuredProduct" === params.module) {
                    _params.module_type = stage_const.sectionTypeEnum["featured-product"];
                    _params.component_ID = (0, baseReport.findSectionId)("[data-ssr-plugin-product-detail-container]");
                }
                super.viewContent({
                    selector,
                    reportOnce: "quickViewModal" !== params.module,
                    customParams: _params
                });
            }
        }
        function hdProductViewContent(params) {
            const report = new ProductPreviewReport;
            report.viewContent(params);
        }
        const product_preview = hdProductViewContent;
        const {formatCurrency: product_preview_formatCurrency} = currency["default"];
        const emitProductSkuChange = data => {
            try {
                var _window, _window$SL_State;
                (0, sku_change["default"])({
                    ...data,
                    currency: null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SL_State = _window.SL_State) || void 0 === _window$SL_State ? void 0 : _window$SL_State.get("storeInfo.currency")
                });
            } catch (e) {
                console.error(e);
            }
        };
        const emitProductSkuChanged = data => {
            try {
                var _window2, _window2$SL_State;
                sku_changed({
                    ...data,
                    currency: null === (_window2 = window) || void 0 === _window2 ? void 0 : null === (_window2$SL_State = _window2.SL_State) || void 0 === _window2$SL_State ? void 0 : _window2$SL_State.get("storeInfo.currency")
                });
            } catch (e) {
                console.error(e);
            }
        };
        const emitViewContent = data => {
            try {
                (0, view_content["default"])(data);
                product_preview({
                    ...data,
                    content_sku_id: data.curSkuId,
                    price: data.curSkuPrice
                });
            } catch (e) {
                console.error(e);
            }
        };
        const getSortationIds = spu => {
            if (spu && spu.sortationList && Array.isArray(spu.sortationList)) return spu.sortationList.map((s => s.sortationId)).join(",");
            return "";
        };
        function thirdPartReport({activeSku, spu, sku}) {
            var _sku$skuList, _spu$sortationList, _spu$sortationList$, _spu$sortationList2, _spu$sortationList2$;
            const newActiveSku = activeSku || (null === sku || void 0 === sku ? void 0 : null === (_sku$skuList = sku.skuList) || void 0 === _sku$skuList ? void 0 : _sku$skuList[0]);
            window.SL_EventBus.emit("global:thirdPartReport", {
                GA: [ [ "event", "view_item", {
                    items: [ {
                        id: null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuSeq,
                        name: null === spu || void 0 === spu ? void 0 : spu.title,
                        price: product_preview_formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
                        variant: (0, product_button.getVariant)(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuAttributeIds, null === sku || void 0 === sku ? void 0 : sku.skuAttributeMap)
                    } ]
                } ] ],
                GA4: [ [ "event", "view_item", {
                    currency: window.SL_State.get("storeInfo.currency"),
                    value: product_preview_formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
                    items: [ {
                        item_id: null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuSeq,
                        item_name: null === spu || void 0 === spu ? void 0 : spu.title,
                        item_price: product_preview_formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
                        item_variant: (0, product_button.getVariant)(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuAttributeIds, null === sku || void 0 === sku ? void 0 : sku.skuAttributeMap)
                    } ]
                } ] ],
                GAR: [ [ "event", "view_item", {
                    value: product_preview_formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
                    items: [ {
                        id: null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuSeq,
                        google_business_vertical: "retail"
                    } ]
                } ] ],
                GARemarketing: [ [ "event", "view_item", {
                    ecomm_prodid: null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuSeq,
                    ecomm_pagetype: "product",
                    ecomm_category: null === spu || void 0 === spu ? void 0 : null === (_spu$sortationList = spu.sortationList) || void 0 === _spu$sortationList ? void 0 : null === (_spu$sortationList$ = _spu$sortationList[0]) || void 0 === _spu$sortationList$ ? void 0 : _spu$sortationList$.sortationId,
                    ecomm_pcat: null === spu || void 0 === spu ? void 0 : null === (_spu$sortationList2 = spu.sortationList) || void 0 === _spu$sortationList2 ? void 0 : null === (_spu$sortationList2$ = _spu$sortationList2[0]) || void 0 === _spu$sortationList2$ ? void 0 : _spu$sortationList2$.sortationName,
                    ecomm_totalvalue: product_preview_formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price)
                } ] ]
            });
        }
        function initPreview({id, statePath, filterShelves, offsetTop, container, onAddSuccess, modalType, position, module}) {
            const sku = window.SL_State.get(`${statePath}.sku`);
            const spu = window.SL_State.get(`${statePath}.spu`);
            const plugin = window.SL_State.get(`${statePath}.plugin`);
            const viewContentSelector = `.__sl-custom-track-${id}`;
            if (filterShelves && !(null !== spu && void 0 !== spu && spu.shelves)) {
                console.error("no spu data or not shelves, init break");
                return () => {};
            }
            const removePositionListener = listenPosition({
                id,
                offsetTop,
                container
            });
            (0, createShadowDom["default"])();
            let productImagesInstance;
            try {
                productImagesInstance = new product_swiper({
                    mediaList: spu.mediaList,
                    selectorId: id,
                    heightOnChange: () => {
                        layout({
                            id,
                            offsetTop,
                            container
                        });
                    },
                    beforeInit: ({pcWrapperSelector}) => {
                        const $dom = document.querySelector(`${pcWrapperSelector} .swiper-container`);
                        if (!$dom) return;
                        const childHtml = $dom.outerHTML;
                        __SL_$__(`${pcWrapperSelector} .swiper-container`).remove();
                        __SL_$__(`${pcWrapperSelector}`).prepend(`<div class="swiper-border-shadow-container">${childHtml}</div>`);
                    }
                });
            } catch (e) {
                setTimeout((() => {
                    throw e;
                }));
            }
            const inquiryPriceModal = new InquiryPriceModal({
                id,
                spu,
                sku
            });
            const addToCartList = new add_to_cart_list(spu, sku);
            addToCartList.init();
            const ButtonGroup = new product_button["default"]({
                id,
                cartRoot: `.pdp_add_to_cart_${id}`,
                buyNowRoot: `.pdp_buy_now_${id}`,
                payPayId: `pdp_paypal_${id}`,
                soldOutRoot: `.pdp_sold_out_${id}`,
                spu,
                sku,
                modalType,
                position,
                onAddSuccess: () => {
                    if ("function" === typeof onAddSuccess) onAddSuccess();
                }
            });
            const quantityStepper = new product_quantity["default"]({
                id,
                sku,
                spu,
                dataPool: new DataWatcher["default"]
            });
            quantityStepper.dataPool.watch([ "quantity" ], (num => {
                ButtonGroup.setActiveSkuNum(num);
                if ("productDetail" === id) {
                    window.productDetailDataBus.set("num", num);
                    window.productDetailDataBus.emit("after:countChange", num);
                }
                window.SL_EventBus.emit("product:count:change", [ num, id ]);
            }));
            new product_collapse({
                selector: `.product-detail-collapse_${id}`
            });
            new tabs({
                root: ".product-tabs-container"
            });
            const getSkuChangeData = (skuInfo = {}) => {
                const {spuSeq, discount, skuSeq, price, originPrice, stock, weight, weightUnit, available, shelves, skuAttributeIds, imageList, soldOut, allowOversold, imageBeanList} = skuInfo || {};
                return {
                    spuSeq,
                    discount,
                    skuSeq,
                    price: product_preview_formatCurrency(price || 0),
                    originPrice: product_preview_formatCurrency(originPrice || 0),
                    stock,
                    weight,
                    weightUnit,
                    available,
                    shelves,
                    skuAttributeIds,
                    imageList,
                    soldOut,
                    allowOversold,
                    imageBeanList
                };
            };
            let activeSkuCache = {};
            const getHdReportViewCurSku = activeSku => {
                var _plugin$bizData$b2b, _plugin$bizData, _b2bData$moqPlan, _sku$skuList2;
                let sku_id = "null";
                let price = "null";
                const b2bData = null !== (_plugin$bizData$b2b = null === plugin || void 0 === plugin ? void 0 : null === (_plugin$bizData = plugin.bizData) || void 0 === _plugin$bizData ? void 0 : _plugin$bizData.b2b) && void 0 !== _plugin$bizData$b2b ? _plugin$bizData$b2b : {};
                const isBatchBuy = (null === b2bData || void 0 === b2bData ? void 0 : null === (_b2bData$moqPlan = b2bData.moqPlan) || void 0 === _b2bData$moqPlan ? void 0 : _b2bData$moqPlan.batchBuy) && 2 === b2bData.moqPlan.applyType;
                const isSoldOut = (null === spu || void 0 === spu ? void 0 : spu.soldOut) || (null === activeSku || void 0 === activeSku ? void 0 : activeSku.soldOut);
                const isSigleSku = (null === sku || void 0 === sku ? void 0 : null === (_sku$skuList2 = sku.skuList) || void 0 === _sku$skuList2 ? void 0 : _sku$skuList2.length) < 2;
                if (isBatchBuy || isSoldOut) {
                    sku_id = "null";
                    price = "null";
                } else if (isSigleSku) {
                    sku_id = null === sku || void 0 === sku ? void 0 : sku.skuList[0].skuSeq;
                    price = product_preview_formatCurrency((null === sku || void 0 === sku ? void 0 : sku.skuList[0].skuPrice) || 0);
                } else if (null !== activeSku && void 0 !== activeSku && activeSku.skuSeq) {
                    sku_id = activeSku.skuSeq;
                    price = product_preview_formatCurrency((null === activeSku || void 0 === activeSku ? void 0 : activeSku.price) || 0);
                } else {
                    sku_id = null === sku || void 0 === sku ? void 0 : sku.skuList.filter((({soldOut}) => !soldOut))[0].skuSeq;
                    price = product_preview_formatCurrency((null === sku || void 0 === sku ? void 0 : sku.skuList.filter((({soldOut}) => !soldOut))[0].skuPrice) || 0);
                }
                return {
                    curSkuId: sku_id,
                    curSkuPrice: price
                };
            };
            const skuDataPool = new DataWatcher["default"];
            const skuTrade = (0, sku_trade["default"])({
                id,
                sku,
                spu,
                mixins: window.skuMixins,
                dataPool: skuDataPool,
                onInit: (trade, activeSku) => {
                    var _window3, _window3$SL_State, _quantityStepper$skuS3, _quantityStepper$skuS4;
                    thirdPartReport({
                        activeSku,
                        spu,
                        sku
                    });
                    activeSkuCache = activeSku;
                    let content_sku_id = "";
                    let price = null;
                    console.log("sku Init", activeSku);
                    inquiryPriceModal.setActiveSku(activeSku);
                    if ("productDetail" === id) {
                        window.productDetailDataBus.set("activeSku", activeSku);
                        window.productDetailDataBus.emit("init:sku", activeSku);
                    }
                    if (activeSku) {
                        var _quantityStepper$skuS, _quantityStepper$skuS2;
                        quantityStepper.setActiveSku(activeSku);
                        ButtonGroup.setActiveSku(activeSku);
                        addToCartList.setActiveSku(activeSku);
                        content_sku_id = null === activeSku || void 0 === activeSku ? void 0 : activeSku.skuSeq;
                        price = product_preview_formatCurrency((null === activeSku || void 0 === activeSku ? void 0 : activeSku.price) || 0);
                        emitProductSkuChange({
                            type: "init",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS ? void 0 : null === (_quantityStepper$skuS2 = _quantityStepper$skuS.data) || void 0 === _quantityStepper$skuS2 ? void 0 : _quantityStepper$skuS2.value) || 1,
                            ...getSkuChangeData(activeSku)
                        });
                    }
                    emitViewContent({
                        content_spu_id: spu.spuSeq,
                        content_sku_id,
                        content_category: getSortationIds(spu),
                        currency: null === (_window3 = window) || void 0 === _window3 ? void 0 : null === (_window3$SL_State = _window3.SL_State) || void 0 === _window3$SL_State ? void 0 : _window3$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price,
                        title: spu.title,
                        module,
                        selector: viewContentSelector,
                        ...getHdReportViewCurSku(activeSkuCache)
                    });
                    emitProductSkuChanged({
                        type: "init",
                        id,
                        productId: spu.spuSeq,
                        instances: {
                            productImages: productImagesInstance,
                            buttonGroup: ButtonGroup,
                            skuDataPool,
                            quantityStepper
                        },
                        quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS3 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS3 ? void 0 : null === (_quantityStepper$skuS4 = _quantityStepper$skuS3.data) || void 0 === _quantityStepper$skuS4 ? void 0 : _quantityStepper$skuS4.value) || 1,
                        ...getSkuChangeData(activeSku)
                    });
                    trade.dataPool.watch([ "activeSku" ], (activeSku => {
                        var _productImagesInstanc, _activeSku$imageBeanL;
                        if ("productDetail" === id) {
                            window.productDetailDataBus.set("activeSku", activeSku);
                            window.productDetailDataBus.emit("after:skuChange", activeSku);
                            if (activeSku) window.history.replaceState({}, document.title, (0, url.changeURLArg)(window.location.href, "sku", activeSku.skuSeq)); else window.history.replaceState({}, document.title, (0, 
                            url.delParam)("sku"));
                        }
                        activeSkuCache = activeSku;
                        inquiryPriceModal.setActiveSku(activeSku);
                        null === (_productImagesInstanc = productImagesInstance) || void 0 === _productImagesInstanc ? void 0 : _productImagesInstanc.skuImageChange(null === activeSku || void 0 === activeSku ? void 0 : null === (_activeSku$imageBeanL = activeSku.imageBeanList) || void 0 === _activeSku$imageBeanL ? void 0 : _activeSku$imageBeanL[0]);
                        if (activeSku || quantityStepper.activeSku) {
                            (0, product_info["default"])(id, statePath, activeSku);
                            quantityStepper.setActiveSku(activeSku);
                            ButtonGroup.setActiveSku(activeSku);
                            addToCartList.setActiveSku(activeSku);
                        }
                    }));
                },
                onChange: activeSku => {
                    var _quantityStepper$skuS7, _quantityStepper$skuS8;
                    if (activeSku) {
                        var _quantityStepper$skuS5, _quantityStepper$skuS6;
                        thirdPartReport({
                            activeSku,
                            spu,
                            sku
                        });
                        emitProductSkuChange({
                            type: "change",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS5 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS5 ? void 0 : null === (_quantityStepper$skuS6 = _quantityStepper$skuS5.data) || void 0 === _quantityStepper$skuS6 ? void 0 : _quantityStepper$skuS6.value) || 1,
                            ...getSkuChangeData(activeSku)
                        });
                    }
                    emitProductSkuChanged({
                        type: "change",
                        id,
                        productId: spu.spuSeq,
                        instances: {
                            productImages: productImagesInstance,
                            buttonGroup: ButtonGroup,
                            quantityStepper
                        },
                        quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS7 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS7 ? void 0 : null === (_quantityStepper$skuS8 = _quantityStepper$skuS7.data) || void 0 === _quantityStepper$skuS8 ? void 0 : _quantityStepper$skuS8.value) || 1,
                        ...getSkuChangeData(activeSku)
                    });
                }
            });
            const unmountPromotionTags = auto_coupon_banner(`#product-info_${id}`);
            const unmountedDiscountCoupon = discount_coupon();
            window.SL_EventBus.on("global:currency:format", (() => {
                (0, product_info["default"])(id, statePath, quantityStepper.activeSku);
            }));
            try {
                const flashSale = new flash_sale;
                flashSale.init();
            } catch (e) {
                console.log("初始化限时促销工具出错");
                console.error(e);
            }
            return {
                skuTrade,
                quantityStepper,
                productEventRepeat: () => {
                    var _window4, _window4$SL_State;
                    let content_sku_id = "";
                    let price = null;
                    if (activeSkuCache) {
                        var _activeSkuCache, _activeSkuCache2, _quantityStepper$skuS9, _quantityStepper$skuS10;
                        content_sku_id = null === (_activeSkuCache = activeSkuCache) || void 0 === _activeSkuCache ? void 0 : _activeSkuCache.skuSeq;
                        price = product_preview_formatCurrency((null === (_activeSkuCache2 = activeSkuCache) || void 0 === _activeSkuCache2 ? void 0 : _activeSkuCache2.price) || 0);
                        emitProductSkuChange({
                            type: "init",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS9 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS9 ? void 0 : null === (_quantityStepper$skuS10 = _quantityStepper$skuS9.data) || void 0 === _quantityStepper$skuS10 ? void 0 : _quantityStepper$skuS10.value) || 1,
                            ...getSkuChangeData(activeSkuCache)
                        });
                    }
                    thirdPartReport({
                        activeSku: activeSkuCache,
                        spu,
                        sku
                    });
                    emitViewContent({
                        content_spu_id: spu.spuSeq,
                        content_sku_id,
                        content_category: getSortationIds(spu),
                        currency: null === (_window4 = window) || void 0 === _window4 ? void 0 : null === (_window4$SL_State = _window4.SL_State) || void 0 === _window4$SL_State ? void 0 : _window4$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price,
                        title: spu.title,
                        module,
                        selector: viewContentSelector,
                        ...getHdReportViewCurSku(activeSkuCache)
                    });
                },
                destroy: () => {
                    inquiryPriceModal.unbindEvents();
                    null === unmountPromotionTags || void 0 === unmountPromotionTags ? void 0 : unmountPromotionTags();
                    null === unmountedDiscountCoupon || void 0 === unmountedDiscountCoupon ? void 0 : unmountedDiscountCoupon();
                    removePositionListener();
                    skuTrade.destory();
                }
            };
        }
    },
    "./src/assets/product/detail/js/product-quantity.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => SkuQuality
        });
        var DataWatcher = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var get = __webpack_require__("../shared/browser/node_modules/lodash/get.js");
        var get_default = __webpack_require__.n(get);
        const toast_LOADING = "loading";
        const toast_getTemplate = (options, type = "default") => {
            const templates = {
                [toast_LOADING]: `\n      <div class="comment-toast mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <span class="mp-loading__spinner mp-loading__spinner--circular">\n            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="black" stroke-width="2.5" stroke-linecap="round"/>\n            </svg>\n          </span>\n        </div>\n        <div class="mp-toast__content mp-toast__text">${options.content}</div>\n      </div>\n    `,
                default: `\n      <div class="comment-toast mp-toast mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-toast__content mp-toast__inner">${options.content}</div>\n      </div>\n    `
            };
            return templates[type];
        };
        const OPTION_TARGET = "body";
        const defaultOptions = {
            duration: 1500,
            content: "",
            target: OPTION_TARGET
        };
        const toast_HIDDEN_CLASSNAME = "mp-toast__hidden";
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
                return this.getSingleton(options, toast_LOADING);
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
                const template = toast_getTemplate(this.options, this.type || this.options.type);
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
                $toast.removeClass(toast_HIDDEN_CLASSNAME);
                const durationTime = "number" === typeof duration ? duration : options.duration;
                if (0 !== durationTime) this.timer = setTimeout(this.close.bind(this), durationTime);
            }
            close() {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null;
                }
                this.$toast.addClass(toast_HIDDEN_CLASSNAME);
                if ("function" === typeof this.options.onClose) this.options.onClose();
                this.$target.css("position", "");
            }
        }
        Toast.type = null;
        const toast = Toast;
        const EVENT_BUS = {
            QUANTITY_ADD_EVENT: "product:quantity:add",
            QUANTITY_MINUS_EVENT: "product:quantity:minus",
            QUANTITY_MODIFY_EVENT: "product:quantity:modify",
            SKU_INIT_EVENT: "product:sku:init",
            SKU_CHANGE_EVENT: "product:sku:change"
        };
        const TOAST_TYPE = {
            ACTIVE_PURCHASE_LIMIITED: 1,
            PRODUCT_PURCHASE_LIMIITED: 2,
            ACTIVE_NOSTOCK: -1
        };
        const template = saleBuyLimitConfig => {
            const {userLimitedType, acquirePerUserLimit} = saleBuyLimitConfig || {};
            switch (userLimitedType) {
              case TOAST_TYPE.ACTIVE_PURCHASE_LIMIITED:
                return (0, i18n.t)("products.product_details.activity_toast_product__limit", {
                    stock: acquirePerUserLimit > 0 ? acquirePerUserLimit : "0"
                });

              case TOAST_TYPE.PRODUCT_PURCHASE_LIMIITED:
                return (0, i18n.t)("products.product_details.activity_toast_price_limit", {
                    num: acquirePerUserLimit > 0 ? acquirePerUserLimit : "0"
                });

              case TOAST_TYPE.ACTIVE_NOSTOCK:
                return (0, i18n.t)("products.product_details.activity_toast_title__limit");

              default:
                return "";
            }
        };
        const defaultOption = {
            id: "",
            productInfo: {}
        };
        class FlashSale {
            constructor(option = {}) {
                this.option = {
                    ...defaultOption,
                    ...option
                };
                this.option.productInfo[this.option.id] = {};
                this.init();
            }
            init() {
                this.toast = new toast;
                this.bindEventListener();
            }
            bindEventListener() {
                window.SL_EventBus.on(EVENT_BUS.QUANTITY_ADD_EVENT, (([value, selector]) => {
                    if (this.checkData({
                        selector
                    })) {
                        this.getProductNum(value);
                        this.showTips(value);
                    }
                }));
                window.SL_EventBus.on(EVENT_BUS.QUANTITY_MINUS_EVENT, (([value, selector]) => {
                    if (this.checkData({
                        selector
                    })) {
                        this.getProductNum(value);
                        this.showTips(value);
                    }
                }));
                window.SL_EventBus.on(EVENT_BUS.QUANTITY_MODIFY_EVENT, (([value, overStockLimit, selector]) => {
                    if (this.checkData({
                        selector
                    })) {
                        this.getProductNum(value);
                        if (!overStockLimit) this.showTips(value);
                    }
                }));
                window.SL_EventBus.on(EVENT_BUS.SKU_INIT_EVENT, (([sku, id]) => {
                    if (this.checkData({
                        id
                    })) this.dataProcess(sku);
                }));
                window.SL_EventBus.on(EVENT_BUS.SKU_CHANGE_EVENT, (([sku, id]) => {
                    if (this.checkData({
                        id
                    })) {
                        this.dataProcess(sku);
                        this.showTips(this.option.productInfo[this.option.id].productNum);
                        this.compareStock(sku);
                    }
                }));
            }
            compareStock(sku) {
                const {stock} = sku || {};
                if (stock <= this.option.productInfo[this.option.id].productNum) this.option.productInfo[this.option.id].productNum = stock;
            }
            checkData(data) {
                const {id, selector} = data || {};
                if (id === this.option.id || selector && selector.attr("id") && selector.attr("id").indexOf(this.option.id) > -1) return true;
                return false;
            }
            getProductNum(value) {
                this.option.productInfo[this.option.id].productNum = value;
            }
            dataProcess(sku) {
                const prdInfo = this.option.productInfo[this.option.id];
                const {saleActivityResponseList, stock} = sku || {};
                if (!saleActivityResponseList) {
                    this.option.productInfo[this.option.id] = {};
                    return;
                }
                Array.isArray(saleActivityResponseList) && saleActivityResponseList.forEach((item => {
                    const {promotionType, promotionSubType, saleBuyLimitConfig} = item || {};
                    if (1 === promotionType && 1 === promotionSubType) {
                        this.option.productInfo[this.option.id].activeTip = !get_default()(item, "saleBuyLimitConfig.allowBuyOverLimit") ? template(saleBuyLimitConfig) : "";
                        prdInfo.promotionRemainStock = get_default()(item, "skuPromotionProduct.promotionRemainStock");
                        prdInfo.userRemainBuyCount = get_default()(item, "skuPromotionProduct.userRemainBuyCount");
                    }
                }));
                prdInfo.stock = stock;
            }
            showTips(value) {
                const prdInfo = this.option.productInfo[this.option.id] || {};
                if (prdInfo.activeTip && -1 !== prdInfo.promotionRemainStock && prdInfo.promotionRemainStock < value) this.toast.open(template({
                    userLimitedType: -1
                })); else if (prdInfo.activeTip && prdInfo.userRemainBuyCount < value) this.toast.open(prdInfo.activeTip);
            }
        }
        const flashSale = FlashSale;
        var components_toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        class SkuStepper {
            constructor({root, value, min, max, domReady, disabled, onChange, step = 1, showOverStockToast = true}) {
                this.root = root;
                this.data = {
                    min,
                    max,
                    step,
                    disabled,
                    value,
                    showOverStockToast
                };
                this.onChange = onChange;
                this.init(domReady);
            }
            init(domReady) {
                if (domReady) {
                    this.$stepper = __SL_$__(this.root);
                    this.initEvent();
                } else this.createAndInitDom();
                this.toast = new components_toast["default"];
            }
            initEvent() {
                if (this.data.disabled) return;
                this.$stepper.children(".stepper-before").on("click", (() => {
                    if (this.data.min < this.data.value) {
                        this.data.value -= this.data.step;
                        if (this.data.value < this.data.min) this.data.value = this.data.min;
                        this.render();
                        window.SL_EventBus.emit("product:quantity:minus", [ this.data.value, this.root ]);
                    }
                }));
                this.$stepper.children(".stepper-after").on("click", (() => {
                    if (this.data.value < this.data.max) {
                        this.data.value += this.data.step;
                        if (this.data.value > this.data.max) this.data.value = this.data.max;
                        this.render();
                        window.SL_EventBus.emit("product:quantity:add", [ this.data.value, this.root ]);
                    }
                }));
                this.$stepper.children(".stepper-input").on("input", (e => {
                    const filerValue = e.target.value.replace(/[^\d]/g, "");
                    const value = filerValue ? Number(filerValue) : filerValue;
                    this.data.value = value;
                    this.render();
                }));
                this.$stepper.children(".stepper-input").on("blur", (e => {
                    const value = Number(e.target.value);
                    let overStockLimit = 0;
                    let isReset = 1;
                    if (value > this.data.max) {
                        this.data.value = this.data.max;
                        if (!this.data.disabled) {
                            overStockLimit = 1;
                            if (this.data.showOverStockToast) this.toast.open((0, i18n.t)("cart.stock.limit", {
                                stock: this.data.max
                            }), 1e3);
                        }
                    } else if (this.data.min > value) this.data.value = this.data.min; else isReset = 0;
                    window.SL_EventBus.emit("product:quantity:modify", [ this.data.value, overStockLimit, this.root ]);
                    if (isReset) this.render();
                }));
            }
            createAndInitDom() {
                __SL_$__(this.root).html(`<div>stepper</div>`);
            }
            setSingleDisabled(position, disabled) {
                if (disabled) this.$stepper.children(`.stepper-${position}`).addClass("disabled"); else this.$stepper.children(`.stepper-${position}`).removeClass("disabled");
            }
            setStepperDisabled() {
                if (this.data.disabled) this.$stepper.addClass("disabled"); else this.$stepper.removeClass("disabled");
            }
            setStepperData(obj) {
                this.data = {
                    ...this.data,
                    ...obj
                };
                this.render();
            }
            render() {
                if (this.data.value) {
                    this.setSingleDisabled("before", this.data.min >= this.data.value);
                    this.setSingleDisabled("after", this.data.max <= this.data.value);
                }
                this.$stepper.children(".stepper-input").val(this.data.value);
                this.onChange(this.data.value);
            }
        }
        const sku_stepper = SkuStepper;
        const initValue = 1;
        class SkuQuality {
            constructor({sku, spu, activeSku, id, onChange, dataPool, isCheckStock = true, isOpenFlashSale, fixedMax = 0}) {
                this.activeSku = activeSku;
                this.sku = sku;
                this.spu = spu;
                this.id = id;
                this.root = `#product-detail-sku-quantity_${id}`;
                this.isOpenFlashSale = isOpenFlashSale || __SL_$__(`#has-b2b-plugin-${id}`).length <= 0;
                this.dataPool = dataPool || new DataWatcher["default"];
                this.onChange = onChange;
                this.isCheckStock = isCheckStock;
                this.fixedMax = fixedMax;
                this.init();
            }
            getMax() {
                if (this.fixedMax) return this.fixedMax;
                if (!this.activeSku) return 999;
                if (this.isTrackStock() && this.isCheckStock) {
                    var _this$activeSku;
                    return (null === (_this$activeSku = this.activeSku) || void 0 === _this$activeSku ? void 0 : _this$activeSku.stock) > 0 ? Math.min(999, this.activeSku.stock) : 1;
                }
                return 999;
            }
            isTrackStock() {
                var _this$activeSku2, _this$activeSku3;
                return !(null !== (_this$activeSku2 = this.activeSku) && void 0 !== _this$activeSku2 && _this$activeSku2.infiniteStock) && !(null !== (_this$activeSku3 = this.activeSku) && void 0 !== _this$activeSku3 && _this$activeSku3.allowOversold);
            }
            init() {
                var _this$spu, _this$activeSku4;
                this.skuStepper = new sku_stepper({
                    domReady: true,
                    root: __SL_$__(`#product-detail-sku-stepper_${this.id}`),
                    max: this.getMax(),
                    value: initValue,
                    min: 1,
                    disabled: (null === (_this$spu = this.spu) || void 0 === _this$spu ? void 0 : _this$spu.soldOut) || this.isTrackStock() && this.activeSku && (null === (_this$activeSku4 = this.activeSku) || void 0 === _this$activeSku4 ? void 0 : _this$activeSku4.stock) < 1,
                    onChange: num => {
                        var _this$onChange;
                        if (num !== this.dataPool.quantity) this.dataPool.quantity = num;
                        null === (_this$onChange = this.onChange) || void 0 === _this$onChange ? void 0 : _this$onChange.call(this, num);
                    }
                });
                if (this.isOpenFlashSale) new flashSale({
                    id: `${this.id}`
                }).init();
                this.dataPool.quantity = initValue;
                this.dataPool.watch([ "quantity" ], (() => {
                    this.setCurrentNum(this.dataPool.quantity);
                }));
            }
            render() {
                var _this$activeSku5, _this$activeSku6;
                const showTips = this.isTrackStock() && this.activeSku && (null === (_this$activeSku5 = this.activeSku) || void 0 === _this$activeSku5 ? void 0 : _this$activeSku5.stock) < 10 && (null === (_this$activeSku6 = this.activeSku) || void 0 === _this$activeSku6 ? void 0 : _this$activeSku6.stock) > 0;
                if (showTips) {
                    const content = (0, i18n.t)(`cart.stock.limit`, {
                        stock: this.activeSku.stock
                    });
                    this.setErrorTips(showTips, content);
                } else this.setErrorTips(showTips);
            }
            setErrorTips(show, content) {
                if (show) __SL_$__(this.root).children(".stepper-tip").html(content).removeClass("hide"); else __SL_$__(this.root).children(".stepper-tip").addClass("hide");
            }
            setCurrentNum(num) {
                const data = {
                    ...this.skuStepper.data,
                    value: num
                };
                this.skuStepper.setStepperData(data);
            }
            setActiveSku(sku) {
                var _this$activeSku7;
                let current = this.skuStepper.data.value < 0 ? 1 : this.skuStepper.data.value;
                if (!sku) {
                    this.activeSku = null;
                    const stepperData = {
                        value: current,
                        max: this.fixedMax || 999,
                        disabled: false
                    };
                    this.skuStepper.setStepperData(stepperData);
                    this.render();
                    return;
                }
                this.activeSku = sku;
                if (current > this.getMax()) {
                    current = this.getMax();
                    if (!sku.soldOut) this.skuStepper.toast.open((0, i18n.t)(`cart.stock.limit`, {
                        stock: current
                    }), 1e3);
                }
                const stepperData = {
                    value: current,
                    max: this.getMax(),
                    disabled: this.spu.soldOut || this.isTrackStock() && this.activeSku && (null === (_this$activeSku7 = this.activeSku) || void 0 === _this$activeSku7 ? void 0 : _this$activeSku7.stock) < 1
                };
                this.skuStepper.setStepperData(stepperData);
                this.render();
            }
        }
    },
    "./src/assets/product/detail/js/sku-trade.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => initSku
        });
        var DataWatcher = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        class SkuUtil {
            constructor() {
                this.skuResult = {};
            }
            initSku(data) {
                if (!data) return {};
                const skuKeys = Object.keys(data);
                skuKeys.forEach((skuKey => {
                    const sku = data[skuKey];
                    const skuKeyAttrs = skuKey.split(";");
                    const combArr = SkuUtil.combInFlags(skuKeyAttrs);
                    combArr.forEach((item => {
                        this.skuOptionAttrResult(item, sku);
                    }));
                }));
                return this.skuResult;
            }
            static combInFlags(skuKeyAttrs) {
                if (!skuKeyAttrs || skuKeyAttrs.length <= 0) return [];
                const len = skuKeyAttrs.length;
                const result = [];
                for (let n = 1; n <= len; n++) {
                    const flags = SkuUtil.getCombFlags(len, n);
                    flags.forEach((flag => {
                        const comb = [];
                        flag.forEach(((item, index) => {
                            if (1 === item) comb.push(skuKeyAttrs[index]);
                        }));
                        result.push(comb);
                    }));
                }
                return result;
            }
            static getCombFlags(m, n) {
                const flagArrs = [];
                const flagArr = [];
                let isEnd = false;
                for (let i = 0; i < m; i += 1) flagArr[i] = i < n ? 1 : 0;
                flagArrs.push(flagArr.concat());
                if (n && m > n) while (!isEnd) {
                    let leftCnt = 0;
                    for (let i = 0; i < m - 1; i++) {
                        if (1 === flagArr[i] && 0 === flagArr[i + 1]) {
                            for (let j = 0; j < i; j++) flagArr[j] = j < leftCnt ? 1 : 0;
                            flagArr[i] = 0;
                            flagArr[i + 1] = 1;
                            const aTmp = flagArr.concat();
                            flagArrs.push(aTmp);
                            if (-1 === aTmp.slice(-n).join("").indexOf("0")) isEnd = true;
                            break;
                        }
                        1 === flagArr[i] && leftCnt++;
                    }
                }
                return flagArrs;
            }
            skuOptionAttrResult(combArrItem, sku) {
                const key = combArrItem.join(";");
                if (this.skuResult[key]) {
                    const prevPrice = this.skuResult[key].price;
                    const curPrice = [ sku.price ];
                    this.skuResult[key] = {
                        ...sku,
                        price: prevPrice.concat(curPrice).sort(),
                        stock: this.skuResult[key].stock + sku.stock
                    };
                } else this.skuResult[key] = {
                    ...sku,
                    price: [ sku.price ]
                };
            }
            static filterValidArr(arr) {
                return arr.filter((item => item)).map((item => item.id));
            }
            checkSpecAttrDisabled(selectSpecList, id, index) {
                if (!this.skuResult[id]) return true;
                const newSelectList = selectSpecList.map((item => item && {
                    id: item
                }));
                newSelectList[index] = {
                    id: "",
                    ...newSelectList[index]
                };
                if (Number(newSelectList[index].id) !== Number(id)) {
                    newSelectList[index].id = id;
                    const hitAttrKey = SkuUtil.filterValidArr(newSelectList).join(";");
                    return !this.skuResult[hitAttrKey];
                }
            }
            checkSpecAttrActive(selectSpecList, name) {
                const newSelectList = selectSpecList.map((item => ({
                    id: item
                })));
                return -1 !== SkuUtil.filterValidArr(newSelectList).indexOf(name) || -1 !== SkuUtil.filterValidArr(newSelectList).indexOf(Number(name));
            }
            getActionSpecList(selectSpecList, item, index) {
                if (selectSpecList[index] && selectSpecList[index] === item.id) selectSpecList[index] = null; else selectSpecList[index] = item.id;
                if (selectSpecList.length) return selectSpecList.slice();
                return [];
            }
            getPrice(selectSpecList) {
                const skukey = SkuUtil.filterValidArr(selectSpecList).join(";");
                const hitSpecObj = this.skuResult[skukey];
                if (!hitSpecObj) return null;
                const priceArr = hitSpecObj.price;
                const maxPrice = Math.max(...priceArr);
                const minPrice = Math.min(...priceArr);
                return {
                    minPrice,
                    maxPrice
                };
            }
            getStock(selectSpecList) {
                const skukey = SkuUtil.filterValidArr(selectSpecList).join(";");
                const hitSpecObj = this.skuResult[skukey];
                if (!hitSpecObj) return null;
                return hitSpecObj.stock;
            }
        }
        function getSkuComMap(skuList) {
            const validSkuMap = {};
            const invalidSkuMap = {};
            if (!skuList) return {
                validSkuMap,
                invalidSkuMap
            };
            skuList.forEach((sku => {
                if (sku.skuAttributeIds) {
                    const skuKey = sku.skuAttributeIds.sort(((a, b) => (a.attributeWeight || 0) - (b.attributeWeight || 0))).map((item => `${item.id}:${item.valueId}`)).join(";");
                    if (!sku.available) invalidSkuMap[skuKey] = {
                        ...sku
                    }; else validSkuMap[skuKey] = {
                        price: sku.price,
                        stock: sku.stock,
                        skuSeq: sku.skuSeq,
                        spuSeq: sku.spuSeq
                    };
                }
            }));
            return {
                validSkuMap,
                invalidSkuMap
            };
        }
        function getSku(selectSkuArr, skuList, sourceSkuList) {
            const skuKey = selectSkuArr.map((item => item)).join(";");
            if (!skuKey) return null;
            const hitSku = sourceSkuList.find((item => {
                var _skuList$skuKey;
                return item.skuSeq === (null === (_skuList$skuKey = skuList[skuKey]) || void 0 === _skuList$skuKey ? void 0 : _skuList$skuKey.skuSeq);
            }));
            return hitSku || null;
        }
        function transSkuSpecList(skuAttributeMap) {
            const resultArr = [];
            if (!skuAttributeMap) return resultArr;
            Object.entries(skuAttributeMap).sort((([, a], [, b]) => (a.attributeWeight || 0) - (b.attributeWeight || 0))).forEach((([nameId, item]) => {
                const specAttrListResult = [];
                Object.entries(item.skuAttributeValueMap).sort((([, a], [, b]) => (a.attributeValueWeight || 0) - (b.attributeValueWeight || 0))).forEach((([attrId, attr]) => {
                    const id = `${nameId}:${attrId}`;
                    const name = attr.defaultValue;
                    const imgUrl = attr.imgUrl || "";
                    specAttrListResult.push({
                        id,
                        name,
                        imgUrl
                    });
                }));
                const skuSpecObj = {
                    hidden: item.hidden,
                    nameId,
                    specName: item.defaultName,
                    specAttrList: specAttrListResult,
                    onlyShowAttrImg: specAttrListResult.every((item => item.imgUrl))
                };
                resultArr.push(skuSpecObj);
            }));
            return resultArr;
        }
        function getAttrValue(specList, currentAttrId, index) {
            var _specList$index, _specList$index$specA;
            if (!Array.isArray(specList)) return "";
            return (null === (_specList$index = specList[index]) || void 0 === _specList$index ? void 0 : null === (_specList$index$specA = _specList$index.specAttrList) || void 0 === _specList$index$specA ? void 0 : _specList$index$specA.find((item => item.id === currentAttrId))) || null;
        }
        class BaseSkuTrade {
            constructor({sku, spu, initialSkuSeq, dataPool, root, domReady, onInit, onChange, onDestory, mixins}) {
                this.mixins = mixins;
                this.root = __SL_$__(root);
                if (dataPool) this.dataPool = dataPool; else this.dataPool = new DataWatcher["default"];
                if (!this.dataPool.inited) {
                    this.dataPool.sku = sku || {};
                    this.dataPool.spu = spu || {};
                    this.dataPool.attrArray = [];
                    this.dataPool.currentSpecList = [];
                    this.dataPool.skuType = "";
                    this.dataPool.validSkuMap = {};
                    this.dataPool.invalidSkuMap = {};
                    this.dataPool.activeSku = null;
                    this.dataPool.initialSkuSeq = initialSkuSeq;
                }
                this.onInit = onInit;
                this.onChange = onChange;
                this.onDestory = onDestory;
                this.init(domReady);
            }
            beforeInitDom() {
                var _this$mixins, _this$mixins$forEach;
                null === (_this$mixins = this.mixins) || void 0 === _this$mixins ? void 0 : null === (_this$mixins$forEach = _this$mixins.forEach) || void 0 === _this$mixins$forEach ? void 0 : _this$mixins$forEach.call(_this$mixins, (item => {
                    var _item$beforeInitDom, _item$beforeInitDom$c;
                    null === item || void 0 === item ? void 0 : null === (_item$beforeInitDom = item.beforeInitDom) || void 0 === _item$beforeInitDom ? void 0 : null === (_item$beforeInitDom$c = _item$beforeInitDom.call) || void 0 === _item$beforeInitDom$c ? void 0 : _item$beforeInitDom$c.call(_item$beforeInitDom, this, this);
                }));
            }
            afterInitDom() {
                var _this$mixins2, _this$mixins2$forEach;
                null === (_this$mixins2 = this.mixins) || void 0 === _this$mixins2 ? void 0 : null === (_this$mixins2$forEach = _this$mixins2.forEach) || void 0 === _this$mixins2$forEach ? void 0 : _this$mixins2$forEach.call(_this$mixins2, (item => {
                    var _item$afterInitDom, _item$afterInitDom$ca;
                    null === item || void 0 === item ? void 0 : null === (_item$afterInitDom = item.afterInitDom) || void 0 === _item$afterInitDom ? void 0 : null === (_item$afterInitDom$ca = _item$afterInitDom.call) || void 0 === _item$afterInitDom$ca ? void 0 : _item$afterInitDom$ca.call(_item$afterInitDom, this, this);
                }));
            }
            beforeUpdate() {
                var _this$mixins3, _this$mixins3$forEach;
                null === (_this$mixins3 = this.mixins) || void 0 === _this$mixins3 ? void 0 : null === (_this$mixins3$forEach = _this$mixins3.forEach) || void 0 === _this$mixins3$forEach ? void 0 : _this$mixins3$forEach.call(_this$mixins3, (item => {
                    var _item$beforeUpdate, _item$beforeUpdate$ca;
                    null === item || void 0 === item ? void 0 : null === (_item$beforeUpdate = item.beforeUpdate) || void 0 === _item$beforeUpdate ? void 0 : null === (_item$beforeUpdate$ca = _item$beforeUpdate.call) || void 0 === _item$beforeUpdate$ca ? void 0 : _item$beforeUpdate$ca.call(_item$beforeUpdate, this, this);
                }));
            }
            afterUpdate() {
                var _this$mixins4, _this$mixins4$forEach;
                null === (_this$mixins4 = this.mixins) || void 0 === _this$mixins4 ? void 0 : null === (_this$mixins4$forEach = _this$mixins4.forEach) || void 0 === _this$mixins4$forEach ? void 0 : _this$mixins4$forEach.call(_this$mixins4, (item => {
                    var _item$afterUpdate, _item$afterUpdate$cal;
                    null === item || void 0 === item ? void 0 : null === (_item$afterUpdate = item.afterUpdate) || void 0 === _item$afterUpdate ? void 0 : null === (_item$afterUpdate$cal = _item$afterUpdate.call) || void 0 === _item$afterUpdate$cal ? void 0 : _item$afterUpdate$cal.call(_item$afterUpdate, this, this);
                }));
            }
            init(domReady) {
                if (!this.dataPool.inited) {
                    this.dataPool.skuUtil = new SkuUtil;
                    this.initAttrArray();
                    this.initSkuComMap();
                    this.initFirstChecked();
                }
                this.dataPool.watch([ "currentSpecList" ], (() => {
                    this.render();
                }));
                this.beforeInitDom();
                if (domReady) this.initDom(); else this.createAndInitDom();
                this.afterInitDom();
                this.render();
                this.dataPool.inited = true;
                try {
                    var _this$onInit;
                    null === (_this$onInit = this.onInit) || void 0 === _this$onInit ? void 0 : _this$onInit.call(this, this, this.dataPool.activeSku, this.root);
                } catch (e) {
                    setTimeout((() => {
                        throw e;
                    }));
                }
            }
            initSkuComMap() {
                const {validSkuMap, invalidSkuMap} = getSkuComMap(this.dataPool.sku.skuList);
                this.dataPool.validSkuMap = this.dataPool.skuUtil.initSku(validSkuMap);
                this.dataPool.invalidSkuMap = invalidSkuMap;
            }
            initAttrArray() {
                this.dataPool.attrArray = transSkuSpecList(this.dataPool.sku.skuAttributeMap);
                if (this.dataPool.attrArray.length) this.dataPool.skuType = "multi"; else this.dataPool.skuType = "single";
            }
            isPreview() {
                const currentUrl = window.location.pathname;
                return /^[/（]preview[/）].*/.test(currentUrl);
            }
            initFirstChecked(allowNotAvailable) {
                if ("single" === this.dataPool.skuType) [this.dataPool.activeSku] = this.dataPool.sku.skuList; else {
                    const {initialSkuSeq} = this.dataPool;
                    if (initialSkuSeq) {
                        const filterSkuList = this.dataPool.sku.skuList;
                        const validSkuList = allowNotAvailable ? this.dataPool.sku.skuList : filterSkuList;
                        if (validSkuList) {
                            const hitSku = validSkuList.find((item => item.skuSeq === initialSkuSeq));
                            if (hitSku) {
                                var _hitSku$skuAttributeI;
                                this.dataPool.activeSku = hitSku;
                                this.dataPool.currentSpecList = null === hitSku || void 0 === hitSku ? void 0 : null === (_hitSku$skuAttributeI = hitSku.skuAttributeIds) || void 0 === _hitSku$skuAttributeI ? void 0 : _hitSku$skuAttributeI.map((item => `${item.id}:${item.valueId}`));
                            }
                        }
                    }
                    this.dataPool.attrArray.forEach(((spec, index) => {
                        if (spec.hidden) this.dataPool.currentSpecList[index] = spec.specAttrList[0].id;
                    }));
                }
            }
            clearRoot() {
                this.root.empty();
            }
            getActiveSku() {
                if ("single" === this.dataPool.skuType) {
                    var _this$dataPool$sku$sk;
                    return (null === (_this$dataPool$sku$sk = this.dataPool.sku.skuList) || void 0 === _this$dataPool$sku$sk ? void 0 : _this$dataPool$sku$sk[0]) || null;
                }
                if ("multi" === this.dataPool.skuType) if (this.dataPool.currentSpecList.filter(Boolean).length === this.dataPool.attrArray.length) return getSku(this.dataPool.currentSpecList, this.dataPool.validSkuMap, this.dataPool.sku.skuList) || getSku(this.dataPool.currentSpecList, this.dataPool.invalidSkuMap, this.dataPool.sku.skuList) || null;
                return null;
            }
            clickAttr(specIndex, attrIndex) {
                var _this$dataPool$attrAr;
                const item = null === (_this$dataPool$attrAr = this.dataPool.attrArray[specIndex]) || void 0 === _this$dataPool$attrAr ? void 0 : _this$dataPool$attrAr.specAttrList[attrIndex];
                this.dataPool.currentSpecList = this.dataPool.skuUtil.getActionSpecList(this.dataPool.currentSpecList, item, specIndex);
                const activeSku = this.getActiveSku();
                if (activeSku !== this.dataPool.activeSku) this.dataPool.activeSku = activeSku;
                try {
                    var _this$onChange;
                    null === (_this$onChange = this.onChange) || void 0 === _this$onChange ? void 0 : _this$onChange.call(this, activeSku);
                } catch (e) {
                    setTimeout((() => {
                        throw e;
                    }));
                }
            }
            getAttrValue(index) {
                return getAttrValue(this.dataPool.attrArray, this.dataPool.currentSpecList[index], index);
            }
            destory() {
                var _this$onDestory;
                this.clearRoot();
                this.dataPool = null;
                this.root = null;
                this.onInit = null;
                this.onChange = null;
                null === (_this$onDestory = this.onDestory) || void 0 === _this$onDestory ? void 0 : _this$onDestory.call(this);
                this.onDestory = null;
            }
        }
        class SkuTrade extends BaseSkuTrade {
            getAttrValueName(index) {
                var _this$getAttrValue;
                return null === (_this$getAttrValue = this.getAttrValue(index)) || void 0 === _this$getAttrValue ? void 0 : _this$getAttrValue.name;
            }
            initDom() {
                this.root.children(".spec-box").each(((_, el) => {
                    const box = __SL_$__(el);
                    const index = box.data("index");
                    box.children(".attr-box").children(".attr-value").each(((__, valueEl) => {
                        const valueJQ = __SL_$__(valueEl);
                        const i = valueJQ.data("index");
                        valueJQ.on("click", (() => {
                            this.clickAttr(index, i);
                        }));
                        const specItem = this.dataPool.attrArray[index];
                        if (null !== specItem && void 0 !== specItem && specItem.onlyShowAttrImg) {
                            var _specItem$specAttrLis;
                            valueJQ.tooltip({
                                title: null === (_specItem$specAttrLis = specItem.specAttrList[i]) || void 0 === _specItem$specAttrLis ? void 0 : _specItem$specAttrLis.name
                            });
                        }
                    }));
                }));
            }
            createAndInitDom() {
                this.clearRoot();
                const root = this.root.addClass("product-sku-trade");
                this.dataPool.attrArray.forEach(((spec, index) => {
                    if (!spec.hidden) {
                        const specBox = __SL_$__('<div class="spec-box"></div>');
                        specBox.data("index", index);
                        specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`);
                        const attrBox = __SL_$__('<div class="attr-box body3"></div>');
                        specBox.append(attrBox);
                        spec.specAttrList.forEach(((value, i) => {
                            const {imgUrl} = value;
                            let valueJQ;
                            if (imgUrl) {
                                valueJQ = __SL_$__(`<div class="attr-value with-img"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="value-img" src="${imgUrl}"></div>`);
                                if (!spec.onlyShowAttrImg) valueJQ.append(`<span class="value-text">${value.name}</span>`); else valueJQ.tooltip({
                                    title: value.name
                                });
                            } else valueJQ = __SL_$__(`<div class="attr-value"><span>${value.name}</span></div>`);
                            valueJQ.data("index", i);
                            attrBox.append(valueJQ);
                            valueJQ.on("click", (() => {
                                this.clickAttr(index, i);
                            }));
                        }));
                        root.append(specBox);
                    }
                }));
            }
            isPreview() {
                const currentUrl = window.location.pathname;
                return /^[/（]preview[/）].*/.test(currentUrl);
            }
            render() {
                super.beforeUpdate();
                this.root.children(".spec-box").each(((_, el) => {
                    const boxEl = __SL_$__(el);
                    const valueEls = boxEl.children(".attr-box").children(".attr-value");
                    const index = boxEl.data("index");
                    const nameItem = this.dataPool.attrArray[index];
                    if (nameItem.onlyShowAttrImg) {
                        const attrValue = this.getAttrValueName(index);
                        if (attrValue) boxEl.find(".spec-name").text(`${nameItem.specName}：${attrValue}`); else boxEl.find(".spec-name").text(nameItem.specName);
                    }
                    valueEls.each(((__, el_) => {
                        const valueEl = __SL_$__(el_);
                        const i = valueEl.data("index");
                        const valueItem = nameItem.specAttrList[i];
                        const disabled = !this.isPreview() ? this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index) : false;
                        const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);
                        if (disabled) valueEl.addClass("disabled").prop("disabled", true); else valueEl.removeClass("disabled").prop("disabled", false);
                        if (active) valueEl.addClass("active"); else valueEl.removeClass("active");
                    }));
                }));
                super.afterUpdate();
            }
        }
        const sku_trade_flatten = SkuTrade;
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        var scroll_lock = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        var isMobile = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        class SkuTradeSelect extends BaseSkuTrade {
            constructor(...args) {
                super(...args);
                this.currentIndex = null;
                this.currentEntry = null;
                this.currentDropdown = null;
                this.closeItem = () => {
                    var _this$currentEntry, _this$currentDropdown;
                    null === (_this$currentEntry = this.currentEntry) || void 0 === _this$currentEntry ? void 0 : _this$currentEntry.removeClass("open");
                    null === (_this$currentDropdown = this.currentDropdown) || void 0 === _this$currentDropdown ? void 0 : _this$currentDropdown.fadeOut(200);
                    this.hidePopup();
                    console.log("closeItem");
                    this.currentEntry = null;
                    this.currentDropdown = null;
                    this.currentIndex = null;
                    __SL_$__(window).off("click", this.closeItem);
                };
                this.openItem = (entry, dropdown) => {
                    const currentIndex = entry.data("index");
                    if (null !== this.currentIndex) if (this.currentIndex !== currentIndex) this.closeItem(); else if (this.currentIndex === currentIndex) {
                        this.closeItem();
                        return;
                    }
                    this.currentEntry = entry.addClass("open");
                    this.currentIndex = currentIndex;
                    this.currentDropdown = dropdown;
                    dropdown.fadeIn(200);
                    this.showPopup();
                    console.log("openItem");
                    __SL_$__(window).on("click", this.closeItem);
                };
            }
            initFirstChecked() {
                super.initFirstChecked(true);
            }
            createPopupDom() {
                const that = this;
                const popupId = `skutradeselectpopup_${Date.now()}`;
                this.popup = __SL_$__(`<div id="${popupId}" class="product-sku-trade-select-popup"><div class="select-options body-font select-popup"><div><div>`).on("click", (e => {
                    if (e.target.classList.contains("product-sku-trade-select-popup")) this.closeItem();
                    e.stopPropagation();
                }));
                this.popup.children(".select-popup").on("click", ".select-item", (function(e) {
                    e.stopPropagation();
                    const i = __SL_$__(this).data("index");
                    const active = __SL_$__(this).prop("active");
                    if (!active) that.clickAttr(that.currentIndex, i);
                    that.closeItem();
                }));
                __SL_$__(document.body).append(this.popup);
            }
            showPopup() {
                var _this$dataPool$attrAr, _this$dataPool$attrAr2;
                if (!this.popup) this.createPopupDom();
                const index = this.currentIndex;
                const popupBody = this.popup.show().animate({
                    opacity: 1
                }, 200).children(".select-popup").addClass("open");
                if ((0, isMobile["default"])()) (0, scroll_lock.disablePageScroll)(popupBody.get(0));
                null === (_this$dataPool$attrAr = this.dataPool.attrArray[index]) || void 0 === _this$dataPool$attrAr ? void 0 : null === (_this$dataPool$attrAr2 = _this$dataPool$attrAr.specAttrList) || void 0 === _this$dataPool$attrAr2 ? void 0 : _this$dataPool$attrAr2.forEach(((valueItem, i) => {
                    const disabled = this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index);
                    const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);
                    const valueEl = __SL_$__(`<div class="select-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}">${valueItem.imgUrl ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="select-img" src="${valueItem.imgUrl}" />` : ""}<span class="select-text">${valueItem.name}</span><span class="select-checked"></span></div>`);
                    valueEl.data("index", i);
                    valueEl.prop("active", active);
                    popupBody.append(valueEl);
                }));
            }
            hidePopup() {
                if ((0, isMobile["default"])()) (0, scroll_lock.enablePageScroll)(this.popup.children(".select-popup").get(0));
                this.popup.animate({
                    opacity: 0
                }, 200, (function() {
                    __SL_$__(this).hide().children(".select-popup").empty();
                })).children(".select-popup").removeClass("open");
            }
            initDom() {
                const that = this;
                this.root.children(".spec-box").each(((_, el) => {
                    const box = __SL_$__(el);
                    const index = box.data("index");
                    const selectBox = box.children(".select-box");
                    const entry = selectBox.children(".select-entry");
                    const dropdown = selectBox.children(".select-dropdown");
                    entry.on("click", (e => {
                        e.stopPropagation();
                        this.openItem(entry, dropdown);
                    }));
                    dropdown.on("click", ".select-item", (function() {
                        const i = __SL_$__(this).data("index");
                        const active = __SL_$__(this).prop("active");
                        that.closeItem();
                        if (!active) that.clickAttr(index, i);
                    }));
                }));
            }
            createAndInitDom() {
                this.clearRoot();
                const that = this;
                this.root.addClass("product-sku-trade-select");
                this.dataPool.attrArray.forEach(((spec, index) => {
                    if (!spec.hidden) {
                        const specBox = __SL_$__('<div class="spec-box"></div>').data("index", index);
                        this.root.append(specBox);
                        const selectBox = __SL_$__(`<div class="select-box"></div>`);
                        specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`, selectBox);
                        const entry = __SL_$__(`<div class="select-entry"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  style="display: none" class="entry-img" src=""><span class="entry-text body3"></span><span class="entry-arrow"></span></div>`).data("index", index);
                        const dropdown = __SL_$__('<div class="select-options body-font select-dropdown"></div>');
                        selectBox.append(entry, dropdown);
                        spec.specAttrList.forEach(((value, i) => {
                            const {imgUrl, name} = value;
                            dropdown.append(__SL_$__(`<div class="select-item">${imgUrl ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  class="select-img" src="${imgUrl}" >` : ""}<span class="select-text">${name}</span><span class="select-checked"></span></div>\n              `).data("index", i));
                        }));
                        entry.on("click", (e => {
                            e.stopPropagation();
                            this.openItem(entry, dropdown);
                        }));
                        dropdown.on("click", ".select-item", (function() {
                            const i = __SL_$__(this).data("index");
                            const active = __SL_$__(this).prop("active");
                            that.closeItem();
                            if (!active) that.clickAttr(index, i);
                        }));
                    }
                }));
            }
            render() {
                super.beforeUpdate();
                this.root.children(".spec-box").each(((_, el) => {
                    const boxEl = __SL_$__(el);
                    const index = boxEl.data("index");
                    const currentValue = this.getAttrValue(index);
                    const seletBox = boxEl.children(".select-box").children(".select-entry");
                    const {name, imgUrl} = currentValue || {};
                    const img = seletBox.children(".entry-img");
                    const text = seletBox.children(".entry-text");
                    if (imgUrl) img.show().prop("src", imgUrl); else img.hide().prop("src", "");
                    if (name) text.text(name); else if (currentValue) text.text(""); else text.text((0, 
                    i18n.t)("products.product_details.default_placeholder", {
                        attrName: this.dataPool.attrArray[index].specName
                    }));
                    boxEl.children(".select-box").children(".select-options").children(".select-item").each(((__, el_) => {
                        const valueEl = __SL_$__(el_);
                        const i = valueEl.data("index");
                        const valueItem = this.dataPool.attrArray[index].specAttrList[i];
                        const disabled = this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index);
                        const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);
                        if (disabled) valueEl.addClass("disabled"); else valueEl.removeClass("disabled");
                        if (active) valueEl.addClass("active").prop("active", true); else valueEl.removeClass("active").prop("active", false);
                    }));
                }));
                super.afterUpdate();
            }
            destory() {
                super.destory();
                this.closeItem();
                this.popup.remove();
                this.popup = null;
            }
        }
        const sku_trade_select = SkuTradeSelect;
        function initSku({id, sku, spu, mixins, onInit, onChange, dataPool}) {
            const dataDom = __SL_$__(`#product-sku-trade-data_${id}`);
            const skuStyle = dataDom.data("skustyle");
            const selectSku = dataDom.data("selectsku");
            const SkuClass = "flatten" === skuStyle ? sku_trade_flatten : sku_trade_select;
            const trade = new SkuClass({
                domReady: true,
                root: `#product-detail-sku-trade_${id}`,
                sku,
                spu,
                dataPool,
                mixins,
                initialSkuSeq: selectSku,
                onInit: (tradeData, activeSku, root) => {
                    null === onInit || void 0 === onInit ? void 0 : onInit(tradeData, activeSku, root);
                    window.SL_EventBus.emit("product:sku:init", [ activeSku, id ]);
                },
                onChange: activeSku => {
                    window.SL_EventBus.emit("product:sku:change", [ activeSku, id, dataPool ]);
                    null === onChange || void 0 === onChange ? void 0 : onChange(activeSku);
                }
            });
            return trade;
        }
    },
    "./src/assets/stage/featured-product/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var _product_detail_js_product_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/detail/js/product-preview.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        class FeatureProduct {
            constructor(container) {
                _defineProperty(this, "featureProduct", null);
                const id = container.data("section-id");
                const statePath = container.data("state-path");
                const productId = container.data("product-id");
                if (id && productId) this.featureProduct = (0, _product_detail_js_product_preview__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    id,
                    statePath,
                    filterShelves: true,
                    offsetTop: 20,
                    module: "featuredProduct"
                });
            }
            onUnload() {
                if (this.slideshow) this.featureProduct.destroy();
            }
        }
        _defineProperty(FeatureProduct, "type", "featured-product");
        (0, _yy_sl_theme_shared_utils_sectionsLoad__WEBPACK_IMPORTED_MODULE_0__.registrySectionConstructor)(FeatureProduct.type, FeatureProduct);
    },
    "../shared/browser/components/hbs/productImages/js/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => js,
            isYoutube: () => isYoutube
        });
        var ssr_window_esm = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        var dom = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
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
        var Lazy = {
            loadInSlide: function(index, loadInDuplicate) {
                if (void 0 === loadInDuplicate) loadInDuplicate = true;
                var swiper = this;
                var params = swiper.params.lazy;
                if ("undefined" === typeof index) return;
                if (0 === swiper.slides.length) return;
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + '[data-swiper-slide-index="' + index + '"]') : swiper.slides.eq(index);
                var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
                if (0 === $images.length) return;
                $images.each((function(imageEl) {
                    var $imageEl = (0, dom["default"])(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    var background = $imageEl.attr("data-background");
                    var src = $imageEl.attr("data-src");
                    var srcset = $imageEl.attr("data-srcset");
                    var sizes = $imageEl.attr("data-sizes");
                    var $pictureEl = $imageEl.parent("picture");
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, (function() {
                        if ("undefined" === typeof swiper || null === swiper || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                        if (background) {
                            $imageEl.css("background-image", 'url("' + background + '")');
                            $imageEl.removeAttr("data-background");
                        } else {
                            if (srcset) {
                                $imageEl.attr("srcset", srcset);
                                $imageEl.removeAttr("data-srcset");
                            }
                            if (sizes) {
                                $imageEl.attr("sizes", sizes);
                                $imageEl.removeAttr("data-sizes");
                            }
                            if ($pictureEl.length) $pictureEl.children("source").each((function(sourceEl) {
                                var $source = (0, dom["default"])(sourceEl);
                                if ($source.attr("data-srcset")) {
                                    $source.attr("srcset", $source.attr("data-srcset"));
                                    $source.removeAttr("data-srcset");
                                }
                            }));
                            if (src) {
                                $imageEl.attr("src", src);
                                $imageEl.removeAttr("data-src");
                            }
                        }
                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find("." + params.preloaderClass).remove();
                        if (swiper.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                var originalSlide = swiper.$wrapperEl.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + swiper.params.slideDuplicateClass + ")");
                                swiper.lazy.loadInSlide(originalSlide.index(), false);
                            } else {
                                var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                        if (swiper.params.autoHeight) swiper.updateAutoHeight();
                    }));
                    swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
                }));
            },
            load: function() {
                var swiper = this;
                var $wrapperEl = swiper.$wrapperEl, swiperParams = swiper.params, slides = swiper.slides, activeIndex = swiper.activeIndex;
                var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                var params = swiperParams.lazy;
                var slidesPerView = swiperParams.slidesPerView;
                if ("auto" === slidesPerView) slidesPerView = 0;
                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children("." + swiperParams.slideClass + '[data-swiper-slide-index="' + index + '"]').length) return true;
                    } else if (slides[index]) return true;
                    return false;
                }
                function slideIndex(slideEl) {
                    if (isVirtual) return (0, dom["default"])(slideEl).attr("data-swiper-slide-index");
                    return (0, dom["default"])(slideEl).index();
                }
                if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
                if (swiper.params.watchSlidesVisibility) $wrapperEl.children("." + swiperParams.slideVisibleClass).each((function(slideEl) {
                    var index = isVirtual ? (0, dom["default"])(slideEl).attr("data-swiper-slide-index") : (0, 
                    dom["default"])(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                })); else if (slidesPerView > 1) {
                    for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) if (slideExist(i)) swiper.lazy.loadInSlide(i);
                } else swiper.lazy.loadInSlide(activeIndex);
                if (params.loadPrevNext) if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
                    for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
                } else {
                    var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                    if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                    if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
                }
            },
            checkInViewOnLoad: function() {
                var window = (0, ssr_window_esm.getWindow)();
                var swiper = this;
                if (!swiper || swiper.destroyed) return;
                var $scrollElement = swiper.params.lazy.scrollingElement ? (0, dom["default"])(swiper.params.lazy.scrollingElement) : (0, 
                dom["default"])(window);
                var isWindow = $scrollElement[0] === window;
                var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                var swiperOffset = swiper.$el.offset();
                var rtl = swiper.rtlTranslate;
                var inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                var swiperCoord = [ [ swiperOffset.left, swiperOffset.top ], [ swiperOffset.left + swiper.width, swiperOffset.top ], [ swiperOffset.left, swiperOffset.top + swiper.height ], [ swiperOffset.left + swiper.width, swiperOffset.top + swiper.height ] ];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (0 === point[0] && 0 === point[1]) continue;
                        inView = true;
                    }
                }
                var passiveListener = "touchstart" === swiper.touchEvents.start && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (inView) {
                    swiper.lazy.load();
                    $scrollElement.off("scroll", swiper.lazy.checkInViewOnLoad, passiveListener);
                } else if (!swiper.lazy.scrollHandlerAttached) {
                    swiper.lazy.scrollHandlerAttached = true;
                    $scrollElement.on("scroll", swiper.lazy.checkInViewOnLoad, passiveListener);
                }
            }
        };
        const lazy = {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                var swiper = this;
                (0, utils.bindModuleMethods)(swiper, {
                    lazy: _extends({
                        initialImageLoaded: false
                    }, Lazy)
                });
            },
            on: {
                beforeInit: function(swiper) {
                    if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
                },
                init: function(swiper) {
                    if (swiper.params.lazy.enabled && !swiper.params.loop && 0 === swiper.params.initialSlide) if (swiper.params.lazy.checkInView) swiper.lazy.checkInViewOnLoad(); else swiper.lazy.load();
                },
                scroll: function(swiper) {
                    if (swiper.params.freeMode && !swiper.params.freeModeSticky) swiper.lazy.load();
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function(swiper) {
                    if (swiper.params.lazy.enabled) swiper.lazy.load();
                },
                transitionStart: function(swiper) {
                    if (swiper.params.lazy.enabled) if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) swiper.lazy.load();
                },
                transitionEnd: function(swiper) {
                    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) swiper.lazy.load();
                },
                slideChange: function(swiper) {
                    var _swiper$params = swiper.params, lazy = _swiper$params.lazy, cssMode = _swiper$params.cssMode, watchSlidesVisibility = _swiper$params.watchSlidesVisibility, watchSlidesProgress = _swiper$params.watchSlidesProgress, touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges, resistanceRatio = _swiper$params.resistanceRatio;
                    if (lazy.enabled && (cssMode || (watchSlidesVisibility || watchSlidesProgress) && (touchReleaseOnEdges || 0 === resistanceRatio))) swiper.lazy.load();
                }
            }
        };
        function thumbs_extends() {
            thumbs_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return thumbs_extends.apply(this, arguments);
        }
        var Thumbs = {
            init: function() {
                var swiper = this;
                var thumbsParams = swiper.params.thumbs;
                if (swiper.thumbs.initialized) return false;
                swiper.thumbs.initialized = true;
                var SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    (0, utils.extend)(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    (0, utils.extend)(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                } else if ((0, utils.isObject)(thumbsParams.swiper)) {
                    swiper.thumbs.swiper = new SwiperClass((0, utils.extend)({}, thumbsParams.swiper, {
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    }));
                    swiper.thumbs.swiperCreated = true;
                }
                swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
                return true;
            },
            onThumbClick: function() {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                var clickedIndex = thumbsSwiper.clickedIndex;
                var clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && (0, dom["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if ("undefined" === typeof clickedIndex || null === clickedIndex) return;
                var slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, dom["default"])(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
                if (swiper.params.loop) {
                    var currentIndex = swiper.activeIndex;
                    if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                        swiper.loopFix();
                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                        currentIndex = swiper.activeIndex;
                    }
                    var prevIndex = swiper.slides.eq(currentIndex).prevAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
                    var nextIndex = swiper.slides.eq(currentIndex).nextAll('[data-swiper-slide-index="' + slideToIndex + '"]').eq(0).index();
                    if ("undefined" === typeof prevIndex) slideToIndex = nextIndex; else if ("undefined" === typeof nextIndex) slideToIndex = prevIndex; else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex; else slideToIndex = prevIndex;
                }
                swiper.slideTo(slideToIndex);
            },
            update: function(initial) {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                var slidesPerView = "auto" === thumbsSwiper.params.slidesPerView ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    var currentThumbsIndex = thumbsSwiper.activeIndex;
                    var newThumbsIndex;
                    var direction;
                    if (thumbsSwiper.params.loop) {
                        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                            thumbsSwiper.loopFix();
                            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                            currentThumbsIndex = thumbsSwiper.activeIndex;
                        }
                        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();
                        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll('[data-swiper-slide-index="' + swiper.realIndex + '"]').eq(0).index();
                        if ("undefined" === typeof prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else if ("undefined" === typeof nextThumbsIndex) newThumbsIndex = prevThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else newThumbsIndex = prevThumbsIndex;
                        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                    }
                    if (useOffset) newThumbsIndex += "next" === direction ? autoScrollOffset : -1 * autoScrollOffset;
                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && 1 === thumbsSwiper.params.slidesPerGroup) ;
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                    }
                }
                var thumbsToActivate = 1;
                var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.removeClass(thumbActiveClass);
                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (var i = 0; i < thumbsToActivate; i += 1) thumbsSwiper.$wrapperEl.children('[data-swiper-slide-index="' + (swiper.realIndex + i) + '"]').addClass(thumbActiveClass); else for (var _i = 0; _i < thumbsToActivate; _i += 1) thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
            }
        };
        const thumbs = {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                var swiper = this;
                (0, utils.bindModuleMethods)(swiper, {
                    thumbs: thumbs_extends({
                        swiper: null,
                        initialized: false
                    }, Thumbs)
                });
            },
            on: {
                beforeInit: function(swiper) {
                    var thumbs = swiper.params.thumbs;
                    if (!thumbs || !thumbs.swiper) return;
                    swiper.thumbs.init();
                    swiper.thumbs.update(true);
                },
                slideChange: function(swiper) {
                    if (!swiper.thumbs.swiper) return;
                    swiper.thumbs.update();
                },
                update: function(swiper) {
                    if (!swiper.thumbs.swiper) return;
                    swiper.thumbs.update();
                },
                resize: function(swiper) {
                    if (!swiper.thumbs.swiper) return;
                    swiper.thumbs.update();
                },
                observerUpdate: function(swiper) {
                    if (!swiper.thumbs.swiper) return;
                    swiper.thumbs.update();
                },
                setTransition: function(swiper, duration) {
                    var thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper) return;
                    thumbsSwiper.setTransition(duration);
                },
                beforeDestroy: function(swiper) {
                    var thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper) return;
                    if (swiper.thumbs.swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
                }
            }
        };
        var core_class = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        var effect_fade = __webpack_require__("./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
        var navigation = __webpack_require__("./node_modules/swiper/esm/components/navigation/navigation.js");
        var url = __webpack_require__("./node_modules/url/url.js");
        var get = __webpack_require__("../shared/browser/node_modules/lodash/get.js");
        var get_default = __webpack_require__.n(get);
        var photoswipe_min = __webpack_require__("../shared/browser/node_modules/photoswipe/dist/photoswipe.min.js");
        var photoswipe_min_default = __webpack_require__.n(photoswipe_min);
        var photoswipe_ui_default_min = __webpack_require__("../shared/browser/node_modules/photoswipe/dist/photoswipe-ui-default.min.js");
        var photoswipe_ui_default_min_default = __webpack_require__.n(photoswipe_ui_default_min);
        var yt_player = __webpack_require__("../shared/browser/node_modules/yt-player/index.js");
        var yt_player_default = __webpack_require__.n(yt_player);
        var img_size = __webpack_require__("../shared/browser/utils/img-size.js");
        const product_photoSwipeHtml = `\n  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="pswp__bg"></div>\n    <div class="pswp__scroll-wrap">\n      <div class="pswp__container">\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n      </div>\n      <div class="pswp__ui pswp__ui--hidden">\n        <button class="pswp__button pswp__button--arrow--left" title="Previous">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M8 1L3 6L8 11" stroke-width="1.5" stroke-linecap="round"/>\n          </svg>        \n        </button>\n        <button class="pswp__button pswp__button--close" title="Close (Esc)">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10.8002 1.19999L1.2002 10.8" stroke-width="1.2" stroke-linecap="round"/>\n            <path d="M1.1998 1.19999L10.7998 10.8" stroke-width="1.2" stroke-linecap="round"/>\n          </svg>\n        </button>\n        <button class="pswp__button pswp__button--arrow--right" title="Next">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round"/>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  </div>\n`;
        var imgUrl = __webpack_require__("../shared/browser/components/hbs/shared/utils/imgUrl.js");
        var getYouTubeCover = __webpack_require__("../shared/browser/components/hbs/shared/utils/getYouTubeCover.js");
        const isIE = "undefined" !== typeof document && document.documentMode;
        const isElementType = (element, type) => element.nodeName.toLowerCase() === type;
        const isGif = url => /^.+\.gif(\?.*){0,1}$/.test(url);
        const isS3FileUrl = url => /\.cloudfront\./.test(url) || /img\.myshopline\.com/.test(url) || /img-.*\.myshopline\.com/.test(url);
        const makeIsLoaded = element => element.setAttribute("data-loaded", true);
        const concatStr = (strs, symbol) => strs.filter(Boolean).join(symbol);
        const transformSrcset = (srcset, transformer) => srcset.split(",").filter((str => "" !== str)).map((str => concatStr(transformer(...str.trim().split(" ")), " "))).join(",");
        class SLFile {
            constructor(url, base) {
                const uri = new URL(url, base);
                const paths = uri.pathname.split("/");
                const filename = paths[paths.length - 1];
                const [name, suffix] = filename.split(".");
                const [originName, ...modifiers] = name.split("_");
                this.uri = uri;
                this.paths = paths;
                this.name = originName;
                this.suffix = suffix;
                this.querys = this.uri.searchParams;
                this.modifiers = modifiers;
            }
            toString() {
                this.uri.pathname = concatStr([ ...this.paths.slice(0, -1), concatStr([ [ this.name, ...this.modifiers ].join("_"), this.suffix ], ".") ], "/");
                return this.uri.toString();
            }
        }
        const EnumAttributes = {
            Iesrc: "data-iesrc",
            Alt: "data-alt",
            Src: "data-src",
            Srcset: "data-srcset",
            Poster: "data-poster",
            ToggleClass: "data-toggle-class",
            BackgroundImage: "data-background-image",
            BackgroundImageSet: "data-background-image-set",
            PlaceholderBackground: "data-placeholder-background"
        };
        EnumAttributes.Alt, EnumAttributes.Src, EnumAttributes.Iesrc, EnumAttributes.Srcset, 
        EnumAttributes.Poster, EnumAttributes.ToggleClass, EnumAttributes.BackgroundImage, 
        EnumAttributes.BackgroundImageSet;
        function transformImageUrlToWebp(fileOrUrl, ignoreSetting = false) {
            const file = "string" === typeof fileOrUrl ? new SLFile(fileOrUrl, window.location.href) : fileOrUrl;
            if (!file.querys.has("t") || ignoreSetting) if (window.__isSupportWebp__) file.querys.set("t", "webp"); else if (file.suffix) file.querys.set("t", file.suffix);
            return file.toString();
        }
        function getPosterUrl(url) {
            if (!isGif(url) || !isS3FileUrl(url)) return;
            const file = new SLFile(url, window.location.href);
            if ("1" !== file.querys.get("_f")) return;
            if ("poster" === file.modifiers[0]) return;
            file.modifiers.unshift("poster");
            file.suffix = "png";
            return transformImageUrlToWebp(file, true);
        }
        function getPosterData({src, srcset}) {
            const data = {};
            if (src) data.src = getPosterUrl(src);
            if (srcset) {
                let srcsetHasPoster = false;
                data.srcset = transformSrcset(srcset, ((url, breakpoint) => {
                    const posterUrl = getPosterUrl(url);
                    if (posterUrl) {
                        srcsetHasPoster = true;
                        return [ posterUrl, breakpoint ];
                    }
                    return [ url, breakpoint ];
                }));
                if (!srcsetHasPoster) delete data.srcset;
            }
            if (data.src || data.srcset) return data;
        }
        const image_gif_poster = {
            attributes: [],
            load(element) {
                if (isElementType(element, "img")) {
                    const src = element.getAttribute(EnumAttributes.Src);
                    const srcset = element.getAttribute(EnumAttributes.Srcset);
                    const sizes = element.getAttribute("sizes");
                    let isSeted = false;
                    const setImageData = ({src, srcset}, img = new Image) => {
                        if (sizes) img.sizes = sizes;
                        if (srcset) img.srcset = srcset;
                        if (window.__PRELOAD_STATE__.imgNoReferrerSwitch) img.setAttribute("referrerpolicy", "same-origin");
                        if (src) img.src = src;
                        return img;
                    };
                    const setImageSrc = () => {
                        if (isSeted) return;
                        setImageData({
                            src,
                            srcset
                        }, element);
                        isSeted = true;
                    };
                    const posterData = getPosterData({
                        src,
                        srcset
                    });
                    if (posterData) {
                        const bgImg = setImageData({
                            src,
                            srcset
                        });
                        const posterBgImage = setImageData(posterData);
                        bgImg.onload = setImageSrc;
                        posterBgImage.onerror = setImageSrc;
                        setImageData(posterData, element);
                    } else setImageSrc();
                }
            }
        };
        core_class["default"].use([ effect_fade["default"], lazy, thumbs, navigation["default"] ]);
        const COLUMN = "column";
        const ROW = "row";
        const WRAP_PC_ID = ".product_pc_productImageContainer";
        const WRAP_M_ID = ".product_mobile_productImageContainer";
        function imgOnload(src, cb, failCb) {
            if (!src) return;
            const img = new Image;
            img.onload = () => {
                cb(img);
            };
            img.onerror = () => {
                console.warn("imgOnError...", img);
                failCb(img);
            };
            img.src = src;
        }
        function isYoutube(_url) {
            const urlParse = url.parse(_url);
            return "www.youtube.com" === urlParse.hostname;
        }
        class ProductImages {
            constructor(options) {
                const {selectorId, heightOnChange, swiperConfig, mediaList, beforeInit} = options || {};
                this.mediaList = mediaList || [];
                this.config = {};
                this.swiperConfig = swiperConfig || {};
                this.heightChangedCount = 0;
                this.heightOnChange = heightOnChange || null;
                this.slideItems = [];
                if (!selectorId) {
                    console.error(`初始化productImages组件失败，selectorId为空，请输入唯一id`);
                    __SL_$__(WRAP_PC_ID).hide();
                    __SL_$__(WRAP_M_ID).hide();
                    return;
                }
                const pcWrapperSelector = `.${ProductImages.pcSelectorPrefix}_${selectorId}`;
                const mobileWrapperSelector = `.${ProductImages.mobileSelectorPrefix}_${selectorId}`;
                if (0 === __SL_$__(`${pcWrapperSelector}`).length || 0 === __SL_$__(`${mobileWrapperSelector}`).length) {
                    console.error(`初始化productImages组件失败，请检查selectorId是否输错，应存在html上`);
                    __SL_$__(pcWrapperSelector).hide();
                    __SL_$__(mobileWrapperSelector).hide();
                    return;
                }
                const pcWrapper = __SL_$__(`${pcWrapperSelector}`);
                this.thumbsDirection = "aside" === pcWrapper.data("thumbs-direction") ? COLUMN : ROW;
                this.showThumbsArrow = "true" === String(pcWrapper.data("show-thumbnail-arrow"));
                this.productImageScale = "true" === String(__SL_$__(`.product_productImageScale_${selectorId}`).val());
                this.productVideoMute = "true" === String(__SL_$__(`.product_productVideoMute_${selectorId}`).val());
                this.productVideoLoop = "true" === String(__SL_$__(`.product_productVideoLoop_${selectorId}`).val());
                this.mobileWidthRatio = __SL_$__(mobileWrapperSelector).hasClass("middleWidth") ? .75 : 1;
                this.productImageLength = __SL_$__(".product_productImageLength").val();
                this.id = pcWrapperSelector;
                this.mobileId = mobileWrapperSelector;
                beforeInit && beforeInit({
                    pcWrapperSelector
                });
                this.mobileSwiper = this.initMobileProductImages(true);
                this.swiper = this.initPcProductImages(true);
                this.swiper && this.swiper.init();
                this.pcVideo = this.initPcVideo();
                this.mobileVideo = this.initMobileVideo();
            }
            setConfig(config) {
                if (!this.config.app) this.config.app = [];
                this.config.app.push(config.app);
            }
            verifySource(app) {
                if (!get_default()(this, "config.app.length") || this.config.app.includes(app)) return true;
                return false;
            }
            handleVideoPlayPause(player, type) {
                if ("play" === type && player) player.play();
                if ("pause" === type && player) player.pause();
            }
            handleUnifyVideoStatus(video, device, status) {
                if (video && video.ytbVideo) {
                    this.handleVideoPlayPause(video.ytbVideo.player, status);
                    if ("mobile" === device) video.ytbVideo.playerStatus = status;
                }
                if (video && video.slVideo) {
                    this.handleVideoPlayPause(video.slVideo.player, status);
                    if ("mobile" === device) video.slVideo.playerStatus = status;
                }
            }
            floatVideoDiff(player, platform) {
                if ("youtube" === platform) {
                    player.on("playing", (() => {
                        window.SL_EventBus.emit("product:product-play-video");
                    }));
                    if (this.productVideoMute) player.mute();
                    if (this.productVideoLoop) player.on("ended", (() => {
                        player.play();
                    }));
                } else if ("sl" === platform) {
                    player.addEventListener("playing", (() => {
                        window.SL_EventBus.emit("product:product-play-video");
                    }));
                    if (this.productVideoMute) player.muted = true;
                    if (this.productVideoLoop) player.addEventListener("ended", (() => {
                        player.play();
                    }));
                }
                window.SL_EventBus.on("global:popup:close", (() => {
                    this.handleVideoPlayPause(player, "pause");
                }));
            }
            initPcVideo() {
                const ytbVideoPcSelector = `${this.id} .product_youTubeVideoBox`;
                const ytbVideoDom = __SL_$__(ytbVideoPcSelector);
                const slVideoDom = __SL_$__(`${this.id} .product_slVideoContainer`);
                const ytbVideo = {
                    player: null,
                    playerStatus: "pause"
                };
                const slVideo = {
                    player: null,
                    playerStatus: "pause"
                };
                if (ytbVideoDom.length > 0) {
                    ytbVideo.player = new (yt_player_default())(ytbVideoPcSelector, {
                        modestBranding: true,
                        controls: false
                    });
                    const videoId = ytbVideoDom.data("video-id");
                    ytbVideo.player.load(videoId);
                    this.floatVideoDiff(ytbVideo.player, "youtube");
                }
                if (slVideoDom.length > 0) {
                    slVideo.player = slVideoDom.get(0);
                    this.floatVideoDiff(slVideo.player, "sl");
                }
                return {
                    ytbVideo,
                    slVideo
                };
            }
            initMobileVideoCoverClick(dom, video) {
                dom.on("click", (() => {
                    const shouldExecutePlayStatus = "pause" === video.playerStatus ? "play" : "pause";
                    this.handleVideoPlayPause(video.player, shouldExecutePlayStatus);
                    video.playerStatus = shouldExecutePlayStatus;
                }));
            }
            initMobileVideo() {
                const ytbVideoMDom = __SL_$__(`${this.mobileId} .swiper-slide`).not(".swiper-slide-duplicate").find(".product_youTubeVideoBox").addClass("product_youTubeMobileVideoBox");
                const slVideoMDom = __SL_$__(`${this.mobileId} .swiper-slide`).not(".swiper-slide-duplicate").find(".product_slVideoContainer");
                const ytbVideoCoverDom = __SL_$__(`${this.mobileId} [data-video-platform="youtube"]`).not(".swiper-slide-duplicate").find(".product_photoSwipe_image");
                const slVideoCoverDom = __SL_$__(`${this.mobileId} [data-video-platform="sl"]`).not(".swiper-slide-duplicate").find(".product_photoSwipe_image");
                const ytbVideo = {
                    player: null,
                    playerStatus: "pause"
                };
                const slVideo = {
                    player: null,
                    playerStatus: "pause"
                };
                if (ytbVideoMDom.length > 0) {
                    ytbVideo.player = new (yt_player_default())(".product_youTubeMobileVideoBox", {
                        modestBranding: true,
                        controls: false
                    });
                    const videoId = ytbVideoMDom.data("video-id");
                    ytbVideo.player.load(videoId);
                    this.floatVideoDiff(ytbVideo.player, "youtube");
                    this.initMobileVideoCoverClick(ytbVideoCoverDom, ytbVideo);
                }
                if (slVideoMDom.length > 0) {
                    slVideo.player = slVideoMDom.get(0);
                    this.floatVideoDiff(slVideo.player, "sl");
                    this.initMobileVideoCoverClick(slVideoCoverDom, slVideo);
                }
                return {
                    ytbVideo,
                    slVideo
                };
            }
            initPhotoSwipe(slidesWrapID, platform) {
                if (0 === Number(this.productImageLength)) return;
                const slidesSelector = `${slidesWrapID} .product_productImages`;
                const triggerDom = __SL_$__(slidesSelector);
                const eventDom = "mobile" === platform ? ".scaleImageIcon" : ".swiper-slide";
                const self = this;
                self.updatePhotoSwipeItems(slidesWrapID);
                triggerDom.on("click", eventDom, (function() {
                    if (__SL_$__(this).hasClass("swiper-slide-duplicate") || !get_default()(self, "slideItems.length")) return;
                    const triggerThis = "mobile" === platform ? __SL_$__(this).closest(".imageItem") : __SL_$__(this);
                    const isMobileHasActiveSkuImage = triggerThis.find(".product_m_skuImage").length > 0;
                    const isVideoSlide = triggerThis.hasClass("videoItem");
                    if (isMobileHasActiveSkuImage || isVideoSlide) return;
                    const {activeIndex} = "mobile" === platform ? self.mobileSwiper : self.swiper;
                    const mobileIndexByLoop = self.getSwiperIsLoop() ? triggerThis.data("swiper-slide-index") : activeIndex;
                    const index = "mobile" === platform ? mobileIndexByLoop : activeIndex;
                    self.handlePhotoSwiper(self.slideItems, index);
                }));
            }
            initPcSkuPhotoSwiper() {
                const self = this;
                __SL_$__(`${this.id} .product_pc_skuImage`).on("click", (function() {
                    const items = [ {
                        src: __SL_$__(this).find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: __SL_$__(this)[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            handlePhotoSwiper(items, index, cacheNaturalSize) {
                let pswpElement = document.querySelectorAll(".pswp")[0];
                if (!pswpElement) {
                    __SL_$__("body").append(product_photoSwipeHtml);
                    pswpElement = document.querySelectorAll(".pswp")[0];
                }
                this.openPhotoSwipe(pswpElement, items, index, cacheNaturalSize);
            }
            initMobileSkuPhotoSwiper() {
                const self = this;
                __SL_$__(`${this.mobileId} .product_m_skuImageBox .scaleSkuImageIcon`).on("click", (function() {
                    const items = [ {
                        src: __SL_$__(this).parent().find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: __SL_$__(this).parent()[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            updatePhotoSwipeItems(slidesWrapID) {
                const slidesDom = __SL_$__(`${slidesWrapID} .product_productImages`).find(".swiper-slide").not(".swiper-slide-duplicate").filter((function() {
                    return !__SL_$__(this).children(".product-detail-empty-image").length;
                }));
                const items = [];
                slidesDom.each(((index, item) => {
                    const imgEl = __SL_$__(item).find(".product_photoSwipe_image");
                    const size = __SL_$__(item).attr("data-natural-size");
                    const transSize = size ? size.split("x") : null;
                    items.push({
                        src: imgEl.attr("data-photoswipe-src"),
                        w: transSize ? parseInt(transSize[0], 10) : imgEl.innerWidth(),
                        h: transSize ? parseInt(transSize[1], 10) : imgEl.innerHeight(),
                        el: item
                    });
                }));
                this.slideItems = items;
            }
            openPhotoSwipe(pswpElement, items, index = 0, cacheNaturalSize = true) {
                const self = this;
                if (items && items.length > 1) __SL_$__(".pswp__button--arrow--left, .pswp__button--arrow--right").show(); else __SL_$__(".pswp__button--arrow--left, .pswp__button--arrow--right").hide();
                const photoSwipeOptions = {
                    allowPanToNext: false,
                    captionEl: false,
                    closeOnScroll: false,
                    counterEl: false,
                    history: false,
                    index,
                    pinchToClose: false,
                    preloaderEl: false,
                    shareEl: false,
                    tapToToggleControls: false,
                    barsSize: {
                        top: 20,
                        bottom: 20
                    },
                    getThumbBoundsFn(_index) {
                        let thumbnailParent;
                        if (items[_index].el && -1 !== items[_index].el.className.indexOf("swiper-slide-duplicate")) thumbnailParent = __SL_$__(`${self.mobileId} .swiper-slide`).eq(self.mobileSwiper.activeIndex).get(0); else thumbnailParent = items[_index].el;
                        const thumbnail = thumbnailParent.getElementsByClassName("product_photoSwipe_image")[0];
                        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                        const rect = thumbnail.getBoundingClientRect();
                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        };
                    }
                };
                const gallery = new (photoswipe_min_default())(pswpElement, photoswipe_ui_default_min_default(), items, photoSwipeOptions);
                gallery.listen("gettingData", (function(_index, item) {
                    const imgWrapEl = item.el;
                    const img = new Image;
                    if (!imgWrapEl.getAttribute("data-natural-size")) {
                        if (!window.__PRELOAD_STATE__.imgNoReferrerSwitch) img.src = item.src;
                        img.onload = () => {
                            const _img = (0, img_size["default"])(img.src);
                            const hasWH = _img && _img.ratio;
                            if (cacheNaturalSize) {
                                const naturalSize = hasWH ? `${img.naturalWidth}x${img.naturalHeight}` : `100x100`;
                                imgWrapEl.setAttribute("data-natural-size", naturalSize);
                            }
                            item.w = img.naturalWidth;
                            item.h = img.naturalHeight;
                            gallery.updateSize(true);
                        };
                    }
                    if (window.__PRELOAD_STATE__.imgNoReferrerSwitch) {
                        img.setAttribute("referrerpolicy", "same-origin");
                        img.src = item.src;
                    }
                }));
                gallery.init();
                gallery.listen("afterChange", (() => {
                    this.galleryAfterChange(gallery);
                }));
            }
            galleryAfterChange(gallery) {
                const currentIndex = gallery.getCurrentIndex();
                this.swiper && this.swiper.slideTo(currentIndex);
                this.mobileSwiper && this.mobileSwiper.slideToLoop(currentIndex);
            }
            heightOnChangeCb(height) {
                setTimeout((() => {
                    this.heightOnChange && this.heightOnChange(height);
                }), 200);
            }
            handleProductImagesHeight(swiperSelector, activeIndex, ratio = 1, targetImgSrc) {
                const self = this;
                const selector = swiperSelector;
                this.heightChangedCount++;
                const count = this.heightChangedCount;
                const promise = new Promise(((resolve, reject) => {
                    if (count !== this.heightChangedCount) {
                        resolve();
                        return;
                    }
                    if (void 0 !== activeIndex) {
                        const currentSlide = __SL_$__(`${selector} .swiper-slide`).eq(activeIndex);
                        if (!targetImgSrc && currentSlide.find(".product-detail-empty-image").length > 0) {
                            const mobileWidthRatio = "block" === __SL_$__(`${self.mobileId}`).css("display") ? self.mobileWidthRatio : 1;
                            const boxWidth = parseInt(__SL_$__(`${selector}`).width() * mobileWidthRatio, 10);
                            __SL_$__(`${selector}`).css("height", boxWidth);
                            self.heightOnChangeCb(boxWidth);
                            resolve(boxWidth);
                            return;
                        }
                        if (currentSlide.hasClass("videoItem") && !targetImgSrc) {
                            const videoBoxHeight = parseInt(currentSlide.children().innerHeight(), 10);
                            __SL_$__(`${selector}`).css("height", videoBoxHeight);
                            self.heightOnChangeCb(videoBoxHeight);
                            window.SL_EventBus.emit("product:expose-product-video", currentSlide);
                            resolve(videoBoxHeight);
                        } else if (currentSlide.hasClass("imageItem") || targetImgSrc) {
                            const currentSlideImgNaturalSize = currentSlide.attr("data-natural-size");
                            if (currentSlideImgNaturalSize && !targetImgSrc) {
                                const [imgNaturalWidth, imgNaturalHeight] = currentSlideImgNaturalSize.split("x");
                                const wrapperHeight = parseInt(String(__SL_$__(`${selector}`)[0].offsetWidth * ratio * imgNaturalHeight / imgNaturalWidth), 10);
                                __SL_$__(`${selector}`).css("height", wrapperHeight);
                                self.heightOnChangeCb(wrapperHeight);
                                resolve(wrapperHeight);
                                return;
                            }
                            const currentSlideImg = currentSlide.find("img");
                            const imgSrc = targetImgSrc || currentSlideImg.attr("src") || currentSlideImg.attr("data-src");
                            if (!targetImgSrc && "none" !== __SL_$__(`${self.id}`).css("display")) {
                                const slideHeight = parseInt(currentSlide.innerHeight(), 10);
                                __SL_$__(`${selector}`).css("height", slideHeight);
                                self.heightOnChangeCb(slideHeight);
                                resolve(slideHeight);
                                return;
                            }
                            imgOnload(imgSrc, (img => {
                                if (count !== this.heightChangedCount) {
                                    resolve();
                                    return;
                                }
                                if (!img) {
                                    reject(new Error("不是img对象"));
                                    return;
                                }
                                const height = parseInt(String(__SL_$__(`${selector}`)[0].offsetWidth * ratio * img.height / img.width), 10);
                                __SL_$__(`${selector}`).css("height", height);
                                self.heightOnChangeCb(height);
                                resolve(height);
                            }), (() => {
                                if (count !== this.heightChangedCount) {
                                    resolve();
                                    return;
                                }
                                const mobileWidthRatio = "block" === __SL_$__(`${self.mobileId}`).css("display") ? self.mobileWidthRatio : 1;
                                const boxWidth = parseInt(__SL_$__(`${selector}`).width() * mobileWidthRatio, 10);
                                __SL_$__(`${selector}`).css("height", boxWidth);
                                if (targetImgSrc && -1 !== selector.indexOf(ProductImages.pcSelectorPrefix)) __SL_$__(`${this.id} .product_pc_skuImage`).addClass("imageItemError"); else if (targetImgSrc && -1 !== selector.indexOf(ProductImages.mobileSelectorPrefix)) {
                                    const currentSlideDom = self.getMobileCurrentSlideDom();
                                    currentSlideDom.find(".product_m_skuImageBox").addClass("imageItemError");
                                } else currentSlide.addClass("imageItemError");
                                self.heightOnChangeCb(boxWidth);
                                resolve(boxWidth);
                            }));
                        } else reject(new Error(`当前滑动slide子节点内容异常,currentSlide:${currentSlide},activeIndex:${activeIndex}`));
                    } else reject(new Error(`activeIndex异常：${activeIndex}`));
                }));
                return promise;
            }
            setColumnThumbsSwiperHeight(height) {
                __SL_$__(`${this.id} .product_thumbsColumnContainer .productImageThumbs`).css({
                    maxHeight: `${height}px`
                });
            }
            handleThumbsArrow(activeIndex, slideLen, wrapperHeight) {
                const selectorPrefix = this.id;
                const {thumbsDirection: direction, showThumbsArrow} = this;
                if (!showThumbsArrow) {
                    this.setColumnThumbsSwiperHeight(wrapperHeight);
                    return;
                }
                __SL_$__(`${selectorPrefix} .thumbsArrowTop,${selectorPrefix} .thumbsArrowBottom`).show();
                if (0 === activeIndex) {
                    __SL_$__(`${selectorPrefix} .thumbsArrowTop`).hide();
                    if (direction === COLUMN) this.setColumnThumbsSwiperHeight(`${wrapperHeight - 25}`);
                }
                if (activeIndex + 1 === slideLen) {
                    __SL_$__(`${selectorPrefix} .thumbsArrowBottom`).hide();
                    if (direction === COLUMN) this.setColumnThumbsSwiperHeight(`${wrapperHeight - 25}`);
                } else if (direction === COLUMN) this.setColumnThumbsSwiperHeight(`${wrapperHeight - 50}`);
            }
            async handleEffectSwiperHeight(targetImageUrl) {
                const {swiper} = this;
                const {slides, activeIndex} = swiper || {};
                const height = await this.handleProductImagesHeight(`${this.id} .product_productImages`, activeIndex, 1, targetImageUrl);
                if (height) this.handleThumbsArrow(activeIndex, slides.length, height);
            }
            togglePcSkuImage(isShow, skuImageUrl) {
                const skuImageDom = __SL_$__(`${this.id} .product_pc_skuImage`);
                const currentIndex = __SL_$__(`${this.id}`).attr("data-index");
                if (skuImageDom.hasClass("imageItemError")) skuImageDom.removeClass("imageItemError");
                if (isShow && skuImageUrl) {
                    skuImageDom.show().html(`<img class="product_photoSwipe_image" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} data-photoswipe-src=${(0, 
                    imgUrl["default"])(skuImageUrl, {
                        width: 1800
                    })} src=${skuImageUrl} />`);
                    __SL_$__(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).removeClass("active");
                } else if (!isShow) {
                    skuImageDom.hide().empty();
                    __SL_$__(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).addClass("active");
                }
            }
            handlePcSkuImage(isShow, skuImage) {
                if (!this.swiper) return;
                if (isShow) {
                    this.handleEffectSwiperHeight(skuImage);
                    this.togglePcSkuImage(true, skuImage);
                } else {
                    this.togglePcSkuImage(false);
                    this.handleEffectSwiperHeight();
                }
            }
            handleThumbsScroll(type, distance, smooth = true, timeout = 200) {
                if ("scrollTop" === type) setTimeout((() => {
                    const productImageThumbs = __SL_$__(`${this.id} .product_thumbsColumnContainer .productImageThumbs`);
                    if (smooth) productImageThumbs.addClass("smooth-animate"); else productImageThumbs.removeClass("smooth-animate");
                    productImageThumbs.scrollTop(distance);
                }), timeout); else if ("scrollLeft" === type) setTimeout((() => {
                    const productImageThumbs = __SL_$__(`${this.id} .product_thumbsRowContainer .productImageThumbs`);
                    if (smooth) productImageThumbs.addClass("smooth-animate"); else productImageThumbs.removeClass("smooth-animate");
                    productImageThumbs.scrollLeft(distance);
                }), timeout);
            }
            getThumbsPosition(type, index) {
                const columnThumbsListDom = __SL_$__(`${this.id} .product_thumbsColumnContainer .thumbsImageItem`);
                const rowThumbsListDom = __SL_$__(`${this.id} .product_thumbsRowContainer .thumbsImageItem`);
                if ("top" === type) {
                    if (!columnThumbsListDom.length) return 0;
                    const prevThumbsItem = columnThumbsListDom.eq(index > 0 ? index - 1 : 0);
                    const prevThumbsItemHalfHeight = parseInt(prevThumbsItem.innerHeight() / 2, 10);
                    return columnThumbsListDom.eq(index).position().top - prevThumbsItemHalfHeight - 20;
                }
                if ("left" === type) {
                    if (!rowThumbsListDom.length) return 0;
                    const prevThumbsItem = rowThumbsListDom.eq(index > 0 ? index - 1 : 0);
                    const prevThumbsItemHalfWidth = parseInt(prevThumbsItem.innerWidth() / 2, 10);
                    return rowThumbsListDom.eq(index).position().left - prevThumbsItemHalfWidth - 20;
                }
            }
            initHandleProductImagesArrow() {
                if (!this.showThumbsArrow) return;
                const {thumbsDirection: direction} = this;
                __SL_$__(`${this.id} .arrowTop`).on("click", (() => {
                    const {activeIndex} = this.swiper;
                    this.swiper.slidePrev();
                    if (direction === COLUMN) {
                        const scrollTopDistance = this.getThumbsPosition("top", activeIndex - 1);
                        this.handleThumbsScroll("scrollTop", scrollTopDistance);
                    } else if (direction === ROW) {
                        const scrollLeftDistance = this.getThumbsPosition("left", activeIndex - 1);
                        this.handleThumbsScroll("scrollLeft", scrollLeftDistance);
                    }
                }));
                __SL_$__(`${this.id} .arrowBottom`).on("click", (() => {
                    const {activeIndex} = this.swiper;
                    this.swiper.slideNext();
                    if (direction === COLUMN) {
                        const scrollTopDistance = this.getThumbsPosition("top", activeIndex + 1);
                        this.handleThumbsScroll("scrollTop", scrollTopDistance);
                    } else if (direction === ROW) {
                        const scrollLeftDistance = this.getThumbsPosition("left", activeIndex + 1);
                        this.handleThumbsScroll("scrollLeft", scrollLeftDistance);
                    }
                }));
            }
            handlePcThumbsActive(index) {
                __SL_$__(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).removeClass("active").eq(index).addClass("active");
                __SL_$__(`${this.id}`).attr("data-index", index);
            }
            async initThumbsSwiper(firstInit) {
                const {thumbsDirection} = this;
                const self = this;
                const bindClickDom = __SL_$__(`${this.id} .product_thumbs${thumbsDirection === COLUMN ? "Column" : "Row"}Container `);
                bindClickDom.on("click", ".thumbsImageItem", (function() {
                    const index = __SL_$__(this).index();
                    self.swiper.slideTo(index);
                    if ("block" === __SL_$__(`${self.id} .product_pc_skuImage`).css("display")) {
                        self.handlePcSkuImage(false);
                        __SL_$__(this).addClass("active");
                    }
                }));
                const skuImageDom = __SL_$__(`${this.id} .product_pc_skuImage`).find("img");
                const skuImage = skuImageDom.attr("data-src") || skuImageDom.attr("src");
                if (!skuImage) this.handlePcThumbsActive(self.swiper.activeIndex);
                await this.handleEffectSwiperHeight(skuImage ? skuImage : null);
                if (skuImage && firstInit) {
                    const firstActiveImg = __SL_$__(`${this.id}`).find(".swiper-slide-active img");
                    if (firstActiveImg.length > 0) {
                        const src = firstActiveImg.attr("src") || firstActiveImg.attr("data-src");
                        const _img = (0, img_size["default"])(src);
                        const ratio = _img && _img.ratio || "100%";
                        firstActiveImg.parent().css("paddingBottom", ratio);
                    }
                    const emptyDom = __SL_$__(`${this.id}`).find(".product-detail-empty-image");
                    console.log("emptyDom", emptyDom.length);
                    if (emptyDom.length > 0) emptyDom.css("paddingBottom", "100%");
                }
                if (firstInit) __SL_$__(`${this.id}`).find(".swiper-slide").removeClass("firstInit");
                __SL_$__(`${this.id} .product_thumbsColumnContainer`).height("auto");
                __SL_$__(`${this.id} .product_thumbsRowContainer`).height("auto");
                this.initHandleProductImagesArrow();
            }
            initPcProductImages(firstInit) {
                const pcProductImagesDom = __SL_$__(`${this.id}`);
                if (0 == pcProductImagesDom.find(".product_productImages").length || "none" === pcProductImagesDom.css("display")) return null;
                const mainSwiper = new core_class["default"](`${this.id} .product_productImages`, {
                    initialSlide: __SL_$__(`${this.id}`).data("initial-slide") || 0,
                    effect: "fade",
                    fadeEffect: {
                        crossFade: true
                    },
                    init: firstInit ? false : true,
                    lazy: {
                        loadOnTransitionStart: true
                    },
                    allowTouchMove: false,
                    on: {
                        init: () => {
                            if (firstInit) {
                                this.initThumbsSwiper(firstInit);
                                if (this.productImageScale) {
                                    this.initPhotoSwipe(this.id, "pc");
                                    this.initPcSkuPhotoSwiper();
                                }
                            }
                        },
                        slideChange: () => {
                            this.handleUnifyVideoStatus(this.pcVideo, "pc", "pause");
                            if (this.swiper.destroyed) return;
                            const {activeIndex, previousIndex} = this.swiper;
                            this.handlePcThumbsActive(activeIndex);
                            this.handlePcSkuImage(false);
                            if (this.thumbsDirection === COLUMN) {
                                const scrollTopDistance = this.getThumbsPosition("top", activeIndex);
                                this.handleThumbsScroll("scrollTop", scrollTopDistance, Math.abs(activeIndex - previousIndex) < 10);
                            } else {
                                const scrollLeftDistance = this.getThumbsPosition("left", activeIndex);
                                this.handleThumbsScroll("scrollLeft", scrollLeftDistance, Math.abs(activeIndex - previousIndex) < 10);
                            }
                        },
                        lazyImageLoad: (_swiper, _slideEl, imageEl) => {
                            image_gif_poster.load(imageEl);
                        }
                    }
                });
                return mainSwiper;
            }
            getActivePaginationList(activeIndex, activePointer) {
                const list = [];
                for (let i = 0; i < 5; i++) {
                    const offset = i - activePointer;
                    list.push(activeIndex + offset);
                }
                return list;
            }
            handleMActivePagination(activeIndex) {
                const previousIndex = this.mobileRealPreviewIndex || 0;
                this.mobileRealPreviewIndex = activeIndex;
                const listContainer = __SL_$__(`${this.mobileId} .paginationList`);
                const scrollWrapper = listContainer.children(".paginationListWrapper");
                const bullets = scrollWrapper.children("span");
                const length = bullets.length;
                if (bullets.length < 6) {
                    scrollWrapper.addClass("noTransition");
                    scrollWrapper.css("transform", "");
                    bullets.removeClass("active");
                    bullets.eq(activeIndex).addClass("active");
                    return;
                }
                if (!this.mobilePaginationList) this.mobilePaginationList = [ 0, 1, 2, 3, 4 ];
                let resultMobilePaginationList = this.mobilePaginationList;
                const previousPointer = this.mobilePaginationList.indexOf(previousIndex);
                const offsetIndex = previousIndex - activeIndex;
                if (offsetIndex < 0) {
                    let activePointer = Math.min(3, previousPointer - offsetIndex);
                    if (activeIndex === length - 1) activePointer = 4;
                    resultMobilePaginationList = this.getActivePaginationList(activeIndex, activePointer);
                } else {
                    let activePointer = Math.max(1, previousPointer - offsetIndex);
                    if (0 === activeIndex) activePointer = 0;
                    resultMobilePaginationList = this.getActivePaginationList(activeIndex, activePointer);
                }
                if (Math.abs(offsetIndex) > 1) scrollWrapper.addClass("noTransition"); else scrollWrapper.removeClass("noTransition");
                if (this.mobilePaginationList[0] - 1 > -1) bullets.eq(this.mobilePaginationList[0] - 1).removeClass([ "active", "next" ]);
                if (this.mobilePaginationList[this.mobilePaginationList.length - 1] + 1 < length) bullets.eq(this.mobilePaginationList[this.mobilePaginationList.length - 1] + 1).removeClass([ "active", "next" ]);
                this.mobilePaginationList.forEach(((index, i) => {
                    bullets.eq(index).removeClass([ "active", "next" ]);
                }));
                bullets.eq(activeIndex).addClass("active");
                if (resultMobilePaginationList[0] - 1 > 0) {
                    bullets.eq(resultMobilePaginationList[0] - 1).addClass("next");
                    bullets.eq(resultMobilePaginationList[0]).addClass("next");
                } else if (resultMobilePaginationList[0] > 0) bullets.eq(resultMobilePaginationList[0]).addClass("next");
                if (resultMobilePaginationList[resultMobilePaginationList.length - 1] + 1 < length - 1) {
                    bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1] + 1).addClass("next");
                    bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1]).addClass("next");
                } else if (resultMobilePaginationList[resultMobilePaginationList.length - 1] < length - 1) bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1]).addClass("next");
                if (resultMobilePaginationList[0] !== this.mobilePaginationList[0]) scrollWrapper.css("transform", `translate3d(-${resultMobilePaginationList[0] / length * 100}%, 0, 0)`);
                this.mobilePaginationList = resultMobilePaginationList;
            }
            handleMobileSkuImage(isShow, skuImageUrl) {
                const selector = `${this.mobileId} .product_productImages`;
                const mainSwiperDom = __SL_$__(selector);
                if (!this.mobileSwiper) return;
                if (0 === mainSwiperDom.length) {
                    console.error("m端切换sku图片失败，请检查selectorId是否输错，应存在html上");
                    return;
                }
                const {realIndex} = this.mobileSwiper;
                if (isShow) this.toggleMSkuImage(realIndex, true, skuImageUrl); else this.toggleMSkuImage(realIndex, false);
            }
            getSwiperIsLoop() {
                return __SL_$__(`${this.mobileId} .product_productImages .swiper-slide-duplicate`).length > 0;
            }
            bindMobileSkuImageScaleDom() {
                const self = this;
                __SL_$__(".product_m_skuImageBox .scaleSkuImageIcon").on("click", (function() {
                    const items = [ {
                        src: __SL_$__(this).parent().find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: __SL_$__(this).parent()[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            getMobileCurrentSlideDom(index) {
                const {realIndex} = this.mobileSwiper || {};
                const _index = index || realIndex;
                const swiperIsLoop = this.getSwiperIsLoop();
                const currentSlideDom = swiperIsLoop ? __SL_$__(`${this.mobileId} .product_productImages .swiper-slide[data-swiper-slide-index="${_index}"]`) : __SL_$__(`${this.mobileId} .product_productImages .swiper-slide`).eq(_index);
                return currentSlideDom;
            }
            setCurrentSlidePB($dom, imageUrl) {
                const ratio = (0, img_size["default"])(imageUrl).ratio || "100%";
                $dom.css("paddingBottom", ratio).attr("data-sku-image-ratio", ratio);
            }
            toggleMSkuImage(index, isShow, skuImageUrl) {
                const self = this;
                if (void 0 === index || null === index) {
                    console.error(`toggleMSkuImage: index异常${index}`);
                    return;
                }
                const currentSlideDom = self.getMobileCurrentSlideDom(index);
                const currentSkuImageBox = currentSlideDom.find(".product_m_skuImageBox");
                const currentSlideBox = currentSlideDom.find(".swiper-slide-box");
                const currentSkuImageIsError = currentSkuImageBox.hasClass("imageItemError");
                if (currentSkuImageIsError) currentSkuImageBox.removeClass("imageItemError");
                const skuImageDom = `\n    <div class="product_m_skuImageBox">\n      <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_m_skuImage product_photoSwipe_image" data-photoswipe-src=${(0, 
                imgUrl["default"])(skuImageUrl, {
                    width: 1800
                })} src=${skuImageUrl} />\n      ${self.productImageScale ? `<div class="scaleSkuImageIcon">\n      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="13" cy="12" r="7.5" stroke="black"/>\n      <path d="M18.5 17.5L23 22.5" stroke="black" stroke-linecap="round"/>\n      </svg>\n      </div>` : ""}\n    </div>`;
                if (isShow && void 0 !== index && skuImageUrl) {
                    currentSlideDom.find("img").hide();
                    if (0 === currentSkuImageBox.length) {
                        currentSlideDom.append(skuImageDom);
                        self.setCurrentSlidePB(currentSlideBox, skuImageUrl);
                        self.bindMobileSkuImageScaleDom();
                    } else {
                        currentSkuImageBox.find(".product_m_skuImage").removeAttr("srcset data-srcset").attr({
                            src: skuImageUrl,
                            "data-photoswipe-src": (0, imgUrl["default"])(skuImageUrl, {
                                width: 1800
                            }),
                            onerror: "this.onerror=null;this.parentElement.className+=' imageItemError';"
                        }).show();
                        self.setCurrentSlidePB(currentSlideBox, skuImageUrl);
                    }
                    this.mobileSwiper.updateAutoHeight();
                    __SL_$__(`${this.mobileId} .product_productImages`).attr("sku-image-index", index);
                } else if (!isShow && void 0 !== index && currentSkuImageBox.length > 0) {
                    const slideImg = currentSlideDom.find("img");
                    if (currentSlideBox.attr("data-image-ratio")) currentSlideBox.css("paddingBottom", currentSlideBox.attr("data-image-ratio")).removeAttr("data-sku-image-ratio");
                    currentSkuImageBox.remove();
                    slideImg.show();
                    this.mobileSwiper.updateAutoHeight();
                    __SL_$__(`${this.mobileId} .product_productImages`).attr("sku-image-index", null);
                }
            }
            handleMobileScaleImage() {
                __SL_$__(`${this.mobileId} .paginationList div`).removeClass("active").eq(activeIndex).addClass("active");
            }
            initMobileProductImages(firstInit) {
                const mobileProductImagesDom = __SL_$__(`${this.mobileId}`);
                const selector = `${this.mobileId} .product_productImages`;
                const mainSwiperDom = __SL_$__(selector);
                const slidesLength = mainSwiperDom.find(".swiper-slide").length;
                const videoDom = mainSwiperDom.find(".videoItem");
                const videoIndex = videoDom.data("index");
                const videoIsStartOrEndPos = 0 === videoIndex || videoIndex === videoDom.data("length") - 1 || 1 === slidesLength;
                if (0 === mainSwiperDom.length || "none" === mobileProductImagesDom.css("display")) return null;
                const mainSwiper = new core_class["default"](selector, {
                    loop: videoIsStartOrEndPos ? false : true,
                    initialSlide: __SL_$__(`${this.mobileId}`).data("initial-slide") || 0,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 5,
                    autoHeight: true,
                    lazy: {
                        loadOnTransitionStart: true,
                        loadPrevNext: .75 === this.mobileWidthRatio ? true : false
                    },
                    on: {
                        init: swiper => {
                            if (firstInit) {
                                if (this.productImageScale) {
                                    this.initPhotoSwipe(this.mobileId, "mobile");
                                    this.initMobileSkuPhotoSwiper();
                                }
                                this.handleMActivePagination(swiper.realIndex);
                                __SL_$__(`${this.mobileId} .product_productImages`).attr("sku-image-index", swiper.realIndex);
                                if (videoIsStartOrEndPos) {
                                    const skuImageDom = __SL_$__(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find(".product_m_skuImage");
                                    skuImageDom.attr("src") || skuImageDom.attr("data-src");
                                }
                                __SL_$__(`${this.mobileId} .product_productImages .swiper-slide`).css("height", "auto");
                                swiper.updateAutoHeight();
                                window.lozadObserver && window.lozadObserver.observe();
                            }
                        },
                        slideChange: swiper => {
                            this.handleUnifyVideoStatus(this.mobileVideo, "mobile", "pause");
                            this.handleMActivePagination(swiper.realIndex);
                            const skuImageDom = __SL_$__(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find(".product_m_skuImage");
                            skuImageDom.attr("src") || skuImageDom.attr("data-src");
                        },
                        slideChangeTransitionEnd: () => {
                            const skuImageIndex = __SL_$__(`${this.mobileId} .product_productImages`).attr("sku-image-index");
                            if (void 0 !== skuImageIndex) this.toggleMSkuImage(skuImageIndex, false);
                        }
                    },
                    ...this.swiperConfig.mobile
                });
                return mainSwiper;
            }
            renderVideoItem(item, index) {
                const {middle: cover, videoId} = (0, getYouTubeCover["default"])(item.resource);
                const isYoutubeVideo = isYoutube(item.resource);
                const photoswipeCoverSrc = isYoutubeVideo ? cover : (0, imgUrl["default"])(item.cover, {
                    width: 1800
                });
                return `${isYoutubeVideo ? `<div class="product_youTubeVideoContainer">\n        <div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>\n      </div>` : `<video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">\n        <source src="${item.resource}" type="video/mp4">\n      </video>`}\n    <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} onerror="this.onerror=null;this.parentElement.className+=' videoCoverError';" \n    class="product_photoSwipe_image swiper-lazy"\n    data-photoswipe-src="${photoswipeCoverSrc}" ${0 !== index ? "data-" : ""}src="${photoswipeCoverSrc}" alt="">`;
            }
            updateSlides(list) {
                __SL_$__(`${this.id} .product_productImages`).children(".swiper-wrapper").empty().append(Array.isArray(list) ? list.map(((item, index) => {
                    const imgRatio = (0, img_size["default"])(item.resource).ratio || "100%";
                    const isYoutubeVideo = isYoutube(item.resource);
                    if ("VIDEO" === item.type) return `<div class="swiper-slide videoItem" data-video-platform="${isYoutubeVideo ? "youtube" : "sl"}" style="padding-bottom: ${isYoutubeVideo ? "56.25%" : (0, 
                    img_size["default"])(item.cover).ratio || "56.25%"}">${this.renderVideoItem(item, index)};</div>`;
                    return `<div class="swiper-slide imageItem" style="height: 0; padding-bottom:${imgRatio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${0 !== index ? "data-" : ""}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image"></div>`;
                })) : `<div class="swiper-slide"><div class="product-detail-empty-image"></div></div>`);
                const slidesLength = list.length;
                const mobileWrapper = __SL_$__(`${this.mobileId} .product_productImages`).children(".swiper-wrapper");
                if (1 === get_default()(list, "length") || "VIDEO" === get_default()(list, "[0].type") || "VIDEO" === get_default()(list, `[${get_default()(list, "length") - 1}].type`)) mobileWrapper.addClass("hasVideoFl"); else mobileWrapper.removeClass("hasVideoFl");
                mobileWrapper.empty().append(Array.isArray(list) ? list.map(((item, index) => {
                    if ("VIDEO" === item.type) {
                        const isYoutubeVideo = isYoutube(item.resource);
                        const ratio = isYoutubeVideo ? "56.25%" : (0, img_size["default"])(item.cover).ratio || "56.25%";
                        return `<div class="swiper-slide videoItem" data-video-platform="${isYoutubeVideo ? "youtube" : "sl"}" style="height: auto" data-index="${index}" data-length="${slidesLength}">\n                <div class="swiper-slide-box" data-image-ratio="${ratio}" style="padding-bottom: ${ratio}">\n                  ${this.renderVideoItem(item, index)}\n                </div>\n              </div>`;
                    }
                    const ratio = (0, img_size["default"])(item.resource).ratio || "100%";
                    return `<div class="swiper-slide imageItem" style="height: auto">\n<div class="swiper-slide-box" data-image-ratio="${ratio}" data-sku-image-ratio="100%" style="padding-bottom: ${ratio}">\n<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${0 !== index ? "data-" : ""}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image">${this.productImageScale ? `<div class="scaleImageIcon"><div class="scaleImageIconSvg"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="12" r="7.5" /><path d="M18.5 17.5L23 22.5" stroke-linecap="round" /></svg></div></div>` : ""}</div>\n</div>`;
                })) : `<div class="swiper-slide"><div class="swiper-slide-box" data-image-ratio="100%" style="padding-bottom: 100%"><div class="product-detail-empty-image product-noImages"></div></div></div>`);
            }
            updateImageList(list, activeIndex, source) {
                if (!this.verifySource(source && source.app)) return;
                this.mediaList = list;
                this.handleUnifyVideoStatus(this.pcVideo, "pc", "pause");
                this.handleUnifyVideoStatus(this.mobileVideo, "mobile", "pause");
                this.replaceThubsSwiper(list, activeIndex);
                this.swiper && this.swiper.destroy();
                this.mobileSwiper && this.mobileSwiper.destroy();
                this.updateSlides(list);
                if (this.swiper) {
                    __SL_$__(`${this.id}`).data("initial-slide", activeIndex);
                    this.swiper = this.initPcProductImages();
                    this.updatePhotoSwipeItems(this.id);
                    this.handleEffectSwiperHeight();
                    if (this.thumbsDirection === COLUMN) {
                        const scrollTopDistance = this.getThumbsPosition("top", activeIndex);
                        this.handleThumbsScroll("scrollTop", scrollTopDistance, false, 0);
                    } else {
                        const scrollLeftDistance = this.getThumbsPosition("left", activeIndex);
                        this.handleThumbsScroll("scrollLeft", scrollLeftDistance, false, 0);
                    }
                }
                if (this.mobileSwiper) {
                    __SL_$__(`${this.mobileId}`).data("initial-slide", activeIndex);
                    this.mobileSwiper = this.initMobileProductImages();
                    this.updatePhotoSwipeItems(this.mobileId);
                }
                this.pcVideo = this.initPcVideo();
                this.mobileVideo = this.initMobileVideo();
                __SL_$__(`${this.id}`).attr("data-index", activeIndex || 0);
            }
            replaceThubsSwiper(list, activeIndex) {
                const wrapper = __SL_$__(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container .productImageThumbsWrapper`);
                const mBox = __SL_$__(`${this.mobileId} .paginationBox`);
                const mWrapper = mBox.find(".paginationListWrapper");
                wrapper.empty();
                mWrapper.empty();
                if (!get_default()(list, "length") || list.length <= 1) {
                    __SL_$__(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container`).hide();
                    mBox.hide();
                } else {
                    __SL_$__(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container`).show();
                    mBox.show();
                    list.forEach(((item, index) => {
                        const ratio = (0, img_size["default"])(item.resource).ratio || "100%";
                        if ("VIDEO" === item.type) {
                            const isYoutubeVideo = isYoutube(item.resource);
                            wrapper.append(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? "active" : ""}"><figure style="padding-bottom: ${ratio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} onerror="this.onerror=null;this.parentElement.className+=' videoCoverError';" src="${isYoutubeVideo ? (0, 
                            getYouTubeCover["default"])(item.resource).middle : item.cover}" alt=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="10" cy="10" r="10" fill="black" fill-opacity="0.6"/>\n          <path d="M13.6256 10.2496L8.46641 13.6891C8.26704 13.822 8 13.6791 8 13.4394V6.56056C8 6.32095 8.26704 6.17803 8.46641 6.31094L13.6256 9.75039C13.8037 9.86913 13.8037 10.1309 13.6256 10.2496Z" fill="white"/>\n          </svg></figure>\n          </div>`);
                        } else wrapper.append(__SL_$__(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? "active" : ""}"><figure style="padding-bottom: ${ratio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ""} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" src="${(0, 
                        imgUrl["default"])(item.resource, {
                            width: 152
                        })}" alt=""></figure></div>`));
                        mWrapper.append(`<span class="${activeIndex === index ? "active" : ""}" />`);
                    }));
                }
            }
            skuImageChange(img, source) {
                if (!this.verifySource(source && source.app)) return;
                const {url} = img || {};
                if (url) {
                    this.handleUnifyVideoStatus(this.pcVideo, "pc", "pause");
                    this.handleUnifyVideoStatus(this.mobileVideo, "mobile", "pause");
                    const index = this.mediaList.findIndex((item => item.resource === url));
                    if (index > -1) {
                        this.swiper && this.swiper.slideTo(index);
                        this.mobileSwiper && this.mobileSwiper.slideToLoop(index, 0);
                        this.handlePcSkuImage(false);
                        this.handleMobileSkuImage(false);
                    } else {
                        this.handlePcSkuImage(true, url);
                        this.handleMobileSkuImage(true, url);
                    }
                } else {
                    this.handlePcSkuImage(false);
                    this.handleMobileSkuImage(false);
                }
            }
        }
        ProductImages.pcSelectorPrefix = "execute_productImages_pc";
        ProductImages.mobileSelectorPrefix = "execute_productImages_mobile";
        const js = ProductImages;
    },
    "../shared/browser/components/hbs/shared/utils/getYouTubeCover.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const getYouTubeCover = videoResource => {
            if ("string" !== typeof videoResource) return null;
            const youTubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            const getYouTubeIdByVideoUrl = url => {
                const matches = url && url.match(youTubeRegex) || [];
                return matches[1];
            };
            const getVideoCover = videoId => {
                const coverUrlPrefix = `https://i.ytimg.com/vi/${videoId}`;
                return {
                    maxQuality: `${coverUrlPrefix}/maxresdefault.jpg`,
                    aboveMiddle: `${coverUrlPrefix}/sddefault.jpg`,
                    middle: `${coverUrlPrefix}/mqdefault.jpg`,
                    lowerMiddle: `${coverUrlPrefix}/hqdefault.jpg`,
                    minQuality: `${coverUrlPrefix}/default.jpg`,
                    videoId
                };
            };
            if (-1 !== videoResource.indexOf("www.youtube.com")) {
                const videoId = getYouTubeIdByVideoUrl(videoResource);
                return getVideoCover(videoId);
            }
            return getVideoCover(videoResource);
        };
        const __WEBPACK_DEFAULT_EXPORT__ = getYouTubeCover;
    },
    "../shared/browser/components/hbs/shared/utils/imgUrl.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => imgUrl
        });
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
    },
    "../shared/browser/events/data-report/view-content/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/events/data-report/enum/index.js");
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_enum__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTENT} - EMIT`);
        const external = window.Shopline && window.Shopline.event;
        const viewContent = data => {
            if (external) {
                logger.info(data);
                return external.emit(_enum__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTENT, {
                    data,
                    onSuccess: result => {
                        logger.info("success", result);
                    },
                    onError: error => {
                        logger.error(error);
                    }
                });
            }
        };
        viewContent.apiName = _enum__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTENT;
        const __WEBPACK_DEFAULT_EXPORT__ = viewContent;
    },
    "../shared/browser/events/product/sku-change/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        const EVENT_NAME = "Product::SkuChange";
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(EVENT_NAME);
        const external = window.Shopline && window.Shopline.event;
        const skuChange = data => {
            if (external) {
                logger.info(`[emit]`, data);
                return external.emit(EVENT_NAME, {
                    data,
                    onSuccess: result => {
                        logger.info("success", result);
                    },
                    onError: error => {
                        logger.error(error);
                    }
                });
            }
        };
        skuChange.apiName = EVENT_NAME;
        const __WEBPACK_DEFAULT_EXPORT__ = skuChange;
    },
    "../shared/browser/node_modules/load-script2/index.js": module => {
        module.exports = function(src, attrs, parentNode) {
            return new Promise(((resolve, reject) => {
                const script = document.createElement("script");
                script.async = true;
                script.src = src;
                for (const [k, v] of Object.entries(attrs || {})) script.setAttribute(k, v);
                script.onload = () => {
                    script.onerror = script.onload = null;
                    resolve(script);
                };
                script.onerror = () => {
                    script.onerror = script.onload = null;
                    reject(new Error(`Failed to load ${src}`));
                };
                const node = parentNode || document.head || document.getElementsByTagName("head")[0];
                node.appendChild(script);
            }));
        };
    },
    "../shared/browser/node_modules/lodash/_getPrototype.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var overArg = __webpack_require__("../shared/browser/node_modules/lodash/_overArg.js");
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        module.exports = getPrototype;
    },
    "../shared/browser/node_modules/lodash/isPlainObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
        var baseGetTag = __webpack_require__("../shared/browser/node_modules/lodash/_baseGetTag.js"), getPrototype = __webpack_require__("../shared/browser/node_modules/lodash/_getPrototype.js"), isObjectLike = __webpack_require__("../shared/browser/node_modules/lodash/isObjectLike.js");
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
    "../shared/browser/node_modules/photoswipe/dist/photoswipe-ui-default.min.js": function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function(a, b) {
            true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
        }(0, (function() {
            "use strict";
            var a = function(a, b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, t, u, v = this, w = !1, x = !0, y = !0, z = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: [ "item", "caption", "zoom-wrap", "ui", "top-bar" ],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(a, b) {
                        return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", 
                        !1);
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [ {
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    } ],
                    getImageURLForShare: function() {
                        return a.currItem.src || "";
                    },
                    getPageURLForShare: function() {
                        return window.location.href;
                    },
                    getTextForShare: function() {
                        return a.currItem.title || "";
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                }, A = function(a) {
                    if (r) return !0;
                    a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                    for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], 
                    c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                    if (d) {
                        a.stopPropagation && a.stopPropagation(), r = !0;
                        var h = b.features.isOldAndroid ? 600 : 30;
                        setTimeout((function() {
                            r = !1;
                        }), h);
                    }
                }, B = function() {
                    return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth;
                }, C = function(a, c, d) {
                    b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
                }, D = function() {
                    var a = 1 === q.getNumItemsFn();
                    a !== p && (C(d, "ui--one-slide", a), p = a);
                }, E = function() {
                    C(i, "share-modal--hidden", y);
                }, F = function() {
                    return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout((function() {
                        y && E();
                    }), 300)) : (E(), setTimeout((function() {
                        y || b.addClass(i, "pswp__share-modal--fade-in");
                    }), 30)), y || H(), !1;
                }, G = function(b) {
                    b = b || window.event;
                    var c = b.target || b.srcElement;
                    return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), 
                    y || F(), !1));
                }, H = function() {
                    for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], 
                    c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), 
                    b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), 
                    f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", 
                    q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                    i.children[0].innerHTML = f, i.children[0].onclick = G;
                }, I = function(a) {
                    for (var c = 0; c < q.closeElClasses.length; c++) if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
                }, J = 0, K = function() {
                    clearTimeout(u), J = 0, k && v.setIdle(!1);
                }, L = function(a) {
                    a = a ? a : window.event;
                    var b = a.relatedTarget || a.toElement;
                    b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout((function() {
                        v.setIdle(!0);
                    }), q.timeToIdleOutside));
                }, M = function() {
                    q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), 
                    c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"));
                }, N = function() {
                    q.preloaderEl && (O(!0), l("beforeChange", (function() {
                        clearTimeout(o), o = setTimeout((function() {
                            a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0);
                        }), q.loadingIndicatorDelay);
                    })), l("imageLoadComplete", (function(b, c) {
                        a.currItem === c && O(!0);
                    })));
                }, O = function(a) {
                    n !== a && (C(m, "preloader--active", !a), n = a);
                }, P = function(a) {
                    var c = a.vGap;
                    if (B()) {
                        var g = q.barsSize;
                        if (q.captionEl && "auto" === g.bottom) if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), 
                        f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), 
                        q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44;
                        } else c.bottom = g.top; else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                        c.top = g.top;
                    } else c.top = c.bottom = 0;
                }, Q = function() {
                    q.timeToIdle && l("mouseUsed", (function() {
                        b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval((function() {
                            J++, 2 === J && v.setIdle(!0);
                        }), q.timeToIdle / 2);
                    }));
                }, R = function() {
                    l("onVerticalDrag", (function(a) {
                        x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls();
                    }));
                    var a;
                    l("onPinchClose", (function(b) {
                        x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls();
                    })), l("zoomGestureEnded", (function() {
                        a = !1, a && !x && v.showControls();
                    }));
                }, S = [ {
                    name: "caption",
                    option: "captionEl",
                    onInit: function(a) {
                        e = a;
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(a) {
                        i = a;
                    },
                    onTap: function() {
                        F();
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(a) {
                        h = a;
                    },
                    onTap: function() {
                        F();
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: a.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(a) {
                        g = a;
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: a.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: a.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: a.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        c.isFullscreen() ? c.exit() : c.enter();
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(a) {
                        m = a;
                    }
                } ], T = function() {
                    var a, c, e, f = function(d) {
                        if (d) for (var f = d.length, g = 0; g < f; g++) {
                            a = d[g], c = a.className;
                            for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), 
                            e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"));
                        }
                    };
                    f(d.children);
                    var g = b.getChildByClass(d, "pswp__top-bar");
                    g && f(g.children);
                };
                v.init = function() {
                    b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), 
                    l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", (function(b) {
                        var c = a.currItem.initialZoomLevel;
                        a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333);
                    })), l("preventDragEvent", (function(a, b, c) {
                        var d = a.target || a.srcElement;
                        d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1);
                    })), l("bindEvents", (function() {
                        b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver);
                    })), l("unbindEvents", (function() {
                        y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), 
                        b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), 
                        b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), 
                        c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null);
                    })), l("destroy", (function() {
                        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), 
                        i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), 
                        v.setIdle(!1);
                    })), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", (function() {
                        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
                    })), l("initialZoomOut", (function() {
                        b.addClass(d, "pswp__ui--hidden");
                    })), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), 
                    M(), N();
                }, v.setIdle = function(a) {
                    k = a, C(d, "ui--idle", a);
                }, v.update = function() {
                    x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), 
                    C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D();
                }, v.updateFullscreen = function(d) {
                    d && setTimeout((function() {
                        a.setScrollOffset(0, b.getScrollY());
                    }), 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs");
                }, v.updateIndexIndicator = function() {
                    q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
                }, v.onGlobalTap = function(c) {
                    c = c || window.event;
                    var d = c.target || c.srcElement;
                    if (!r) if (c.detail && "mouse" === c.detail.pointerType) {
                        if (I(d)) return void a.close();
                        b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint));
                    } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close();
                }, v.onMouseOver = function(a) {
                    a = a || window.event;
                    var b = a.target || a.srcElement;
                    C(d, "ui--over-close", I(b));
                }, v.hideControls = function() {
                    b.addClass(d, "pswp__ui--hidden"), x = !1;
                }, v.showControls = function() {
                    x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden");
                }, v.supportsFullscreen = function() {
                    var a = document;
                    return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
                }, v.getFullscreenAPI = function() {
                    var b, c = document.documentElement, d = "fullscreenchange";
                    return c.requestFullscreen ? b = {
                        enterK: "requestFullscreen",
                        exitK: "exitFullscreen",
                        elementK: "fullscreenElement",
                        eventK: d
                    } : c.mozRequestFullScreen ? b = {
                        enterK: "mozRequestFullScreen",
                        exitK: "mozCancelFullScreen",
                        elementK: "mozFullScreenElement",
                        eventK: "moz" + d
                    } : c.webkitRequestFullscreen ? b = {
                        enterK: "webkitRequestFullscreen",
                        exitK: "webkitExitFullscreen",
                        elementK: "webkitFullscreenElement",
                        eventK: "webkit" + d
                    } : c.msRequestFullscreen && (b = {
                        enterK: "msRequestFullscreen",
                        exitK: "msExitFullscreen",
                        elementK: "msFullscreenElement",
                        eventK: "MSFullscreenChange"
                    }), b && (b.enter = function() {
                        return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                    }, b.exit = function() {
                        return q.closeOnScroll = j, document[this.exitK]();
                    }, b.isFullscreen = function() {
                        return document[this.elementK];
                    }), b;
                };
            };
            return a;
        }));
    },
    "../shared/browser/node_modules/photoswipe/dist/photoswipe.min.js": function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function(a, b) {
            true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, 
            void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
        }(0, (function() {
            "use strict";
            var a = function(a, b, c, d) {
                var e = {
                    features: null,
                    bind: function(a, b, c, d) {
                        var e = (d ? "remove" : "add") + "EventListener";
                        b = b.split(" ");
                        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
                    },
                    isArray: function(a) {
                        return a instanceof Array;
                    },
                    createEl: function(a, b) {
                        var c = document.createElement(b || "div");
                        return a && (c.className = a), c;
                    },
                    getScrollY: function() {
                        var a = window.pageYOffset;
                        return void 0 !== a ? a : document.documentElement.scrollTop;
                    },
                    unbind: function(a, b, c) {
                        e.bind(a, b, c, !0);
                    },
                    removeClass: function(a, b) {
                        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                        a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                    },
                    addClass: function(a, b) {
                        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
                    },
                    hasClass: function(a, b) {
                        return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
                    },
                    getChildByClass: function(a, b) {
                        for (var c = a.firstChild; c; ) {
                            if (e.hasClass(c, b)) return c;
                            c = c.nextSibling;
                        }
                    },
                    arraySearch: function(a, b, c) {
                        for (var d = a.length; d--; ) if (a[d][c] === b) return d;
                        return -1;
                    },
                    extend: function(a, b, c) {
                        for (var d in b) if (b.hasOwnProperty(d)) {
                            if (c && a.hasOwnProperty(d)) continue;
                            a[d] = b[d];
                        }
                    },
                    easing: {
                        sine: {
                            out: function(a) {
                                return Math.sin(a * (Math.PI / 2));
                            },
                            inOut: function(a) {
                                return -(Math.cos(Math.PI * a) - 1) / 2;
                            }
                        },
                        cubic: {
                            out: function(a) {
                                return --a * a * a + 1;
                            }
                        }
                    },
                    detectFeatures: function() {
                        if (e.features) return e.features;
                        var a = e.createEl(), b = a.style, c = "", d = {};
                        if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, 
                        window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), 
                        d.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled, !d.pointerEvent) {
                            var f = navigator.userAgent;
                            if (/iP(hone|od)/.test(navigator.platform)) {
                                var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                                g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
                            }
                            var h = f.match(/Android\s([0-9\.]*)/), i = h ? h[1] : 0;
                            i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), 
                            d.isMobileOpera = /opera mini|opera mobi/i.test(f);
                        }
                        for (var j, k, l = [ "transform", "perspective", "animationName" ], m = [ "", "webkit", "Moz", "ms", "O" ], n = 0; n < 4; n++) {
                            c = m[n];
                            for (var o = 0; o < 3; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), 
                            !d[j] && k in b && (d[j] = k);
                            c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], 
                            d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]));
                        }
                        if (!d.raf) {
                            var p = 0;
                            d.raf = function(a) {
                                var b = (new Date).getTime(), c = Math.max(0, 16 - (b - p)), d = window.setTimeout((function() {
                                    a(b + c);
                                }), c);
                                return p = b + c, d;
                            }, d.caf = function(a) {
                                clearTimeout(a);
                            };
                        }
                        return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, 
                        e.features = d, d;
                    }
                };
                e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
                    b = b.split(" ");
                    for (var e, f = (d ? "detach" : "attach") + "Event", g = function() {
                        c.handleEvent.call(c);
                    }, h = 0; h < b.length; h++) if (e = b[h]) if ("object" == typeof c && c.handleEvent) {
                        if (d) {
                            if (!c["oldIE" + e]) return !1;
                        } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e]);
                    } else a[f]("on" + e, c);
                });
                var f = this, g = 25, h = 3, i = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(a) {
                        return "A" === a.tagName;
                    },
                    getDoubleTapZoom: function(a, b) {
                        return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33;
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
                e.extend(i, d);
                var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma = function() {
                    return {
                        x: 0,
                        y: 0
                    };
                }, na = ma(), oa = ma(), pa = ma(), qa = {}, ra = 0, sa = {}, ta = ma(), ua = 0, va = !0, wa = [], xa = {}, ya = !1, za = function(a, b) {
                    e.extend(f, b.publicMethods), wa.push(a);
                }, Aa = function(a) {
                    var b = ac();
                    return a > b - 1 ? a - b : a < 0 ? b + a : a;
                }, Ba = {}, Ca = function(a, b) {
                    return Ba[a] || (Ba[a] = []), Ba[a].push(b);
                }, Da = function(a) {
                    var b = Ba[a];
                    if (b) {
                        var c = Array.prototype.slice.call(arguments);
                        c.shift();
                        for (var d = 0; d < b.length; d++) b[d].apply(f, c);
                    }
                }, Ea = function() {
                    return (new Date).getTime();
                }, Fa = function(a) {
                    ja = a, f.bg.style.opacity = a * i.bgOpacity;
                }, Ga = function(a, b, c, d, e) {
                    (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")";
                }, Ha = function(a) {
                    ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), 
                    ya = !1)), Ga(ea, pa.x, pa.y, s));
                }, Ia = function(a) {
                    a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a);
                }, Ja = function(a, b) {
                    b[E] = u + a + "px, 0px" + v;
                }, Ka = function(a, b) {
                    if (!i.loop && b) {
                        var c = m + (ta.x * ra - a) / ta.x, d = Math.round(a - tb.x);
                        (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction);
                    }
                    tb.x = a, Ja(a, n);
                }, La = function(a, b) {
                    var c = ub[a] - sa[a];
                    return oa[a] + na[a] + c - c * (b / t);
                }, Ma = function(a, b) {
                    a.x = b.x, a.y = b.y, b.id && (a.id = b.id);
                }, Na = function(a) {
                    a.x = Math.round(a.x), a.y = Math.round(a.y);
                }, Oa = null, Pa = function() {
                    Oa && (e.unbind(document, "mousemove", Pa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, 
                    Da("mouseUsed")), Oa = setTimeout((function() {
                        Oa = null;
                    }), 100);
                }, Qa = function() {
                    e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), 
                    i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), 
                    Da("bindEvents");
                }, Ra = function() {
                    e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), 
                    e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), 
                    V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents");
                }, Sa = function(a, b) {
                    var c = ic(f.currItem, qa, a);
                    return b && (da = c), c;
                }, Ta = function(a) {
                    return a || (a = f.currItem), a.initialZoomLevel;
                }, Ua = function(a) {
                    return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
                }, Va = function(a, b, c, d) {
                    return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], 
                    !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], 
                    !0));
                }, Wa = function() {
                    if (E) {
                        var b = N.perspective && !G;
                        return u = "translate" + (b ? "3d(" : "("), void (v = N.perspective ? ", 0px)" : ")");
                    }
                    E = "left", e.addClass(a, "pswp--ie"), Ja = function(a, b) {
                        b.left = a + "px";
                    }, Ia = function(a) {
                        var b = a.fitRatio > 1 ? 1 : a.fitRatio, c = a.container.style, d = b * a.w, e = b * a.h;
                        c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px";
                    }, Ha = function() {
                        if (ea) {
                            var a = ea, b = f.currItem, c = b.fitRatio > 1 ? 1 : b.fitRatio, d = c * b.w, e = c * b.h;
                            a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px";
                        }
                    };
                }, Xa = function(a) {
                    var b = "";
                    i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), 
                    b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, 
                    f[b]()));
                }, Ya = function(a) {
                    a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
                }, Za = function() {
                    f.setScrollOffset(0, e.getScrollY());
                }, $a = {}, _a = 0, ab = function(a) {
                    $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
                }, bb = function(a) {
                    $a[a] && ab(a), $a[a] || (_a++, $a[a] = {});
                }, cb = function() {
                    for (var a in $a) $a.hasOwnProperty(a) && ab(a);
                }, db = function(a, b, c, d, e, f, g) {
                    var h, i = Ea();
                    bb(a);
                    var j = function() {
                        if ($a[a]) {
                            if (h = Ea() - i, h >= d) return ab(a), f(c), void (g && g());
                            f((c - b) * e(h / d) + b), $a[a].raf = H(j);
                        }
                    };
                    j();
                }, eb = {
                    shout: Da,
                    listen: Ca,
                    viewportSize: qa,
                    options: i,
                    isMainScrollAnimating: function() {
                        return fa;
                    },
                    getZoomLevel: function() {
                        return s;
                    },
                    getCurrentIndex: function() {
                        return m;
                    },
                    isDragging: function() {
                        return V;
                    },
                    isZooming: function() {
                        return aa;
                    },
                    setScrollOffset: function(a, b) {
                        sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa);
                    },
                    applyZoomPan: function(a, b, c, d) {
                        pa.x = b, pa.y = c, s = a, Ha(d);
                    },
                    init: function() {
                        if (!j && !k) {
                            var c;
                            f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, 
                            j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, 
                            f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), 
                            n = f.container.style, f.itemHolders = y = [ {
                                el: f.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: f.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: f.container.children[2],
                                wrap: 0,
                                index: -1
                            } ], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = {
                                resize: f.updateSize,
                                orientationchange: function() {
                                    clearTimeout(O), O = setTimeout((function() {
                                        qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                                    }), 500);
                                },
                                scroll: Za,
                                keydown: Xa,
                                click: Ya
                            };
                            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                            for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), 
                            c = 0; c < wa.length; c++) f["init" + wa[c]]();
                            if (b) {
                                var g = f.ui = new b(f, e);
                                g.init();
                            }
                            Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), 
                            f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), a.setAttribute("aria-hidden", "false"), 
                            i.modal && (va ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), 
                            void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
                            var l = "pswp--open ";
                            for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), 
                            l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", 
                            l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ua = null, 
                            c = 0; c < h; c++) Ja((c + o) * ta.x, y[c].el.style);
                            L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", (function() {
                                f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", 
                                i.focus && a.focus(), Qa();
                            })), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval((function() {
                                _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize();
                            }), 1e3)), e.addClass(a, "pswp--visible");
                        }
                    },
                    close: function() {
                        j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy));
                    },
                    destroy: function() {
                        Da("destroy"), Xb && clearTimeout(Xb), a.setAttribute("aria-hidden", "true"), a.className = J, 
                        w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), 
                        zb(), cb(), Ba = null;
                    },
                    panTo: function(a, b, c) {
                        c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), 
                        pa.x = a, pa.y = b, Ha();
                    },
                    handleEvent: function(a) {
                        a = a || window.event, r[a.type] && r[a.type](a);
                    },
                    goTo: function(a) {
                        a = Aa(a);
                        var b = a - m;
                        ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem();
                    },
                    next: function() {
                        f.goTo(m + 1);
                    },
                    prev: function() {
                        f.goTo(m - 1);
                    },
                    updateCurrZoomItem: function(a) {
                        if (a && Da("beforeChange", 0), y[1].el.children.length) {
                            var b = y[1].el.children[0];
                            ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
                        } else ea = null;
                        da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, 
                        pa.y = da.center.y, a && Da("afterChange");
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
                    },
                    updateCurrItem: function(a) {
                        if (0 !== ua) {
                            var b, c = Math.abs(ua);
                            if (!(a && c < 2)) {
                                f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), 
                                c = h);
                                for (var d = 0; d < c; d++) ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), 
                                f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), 
                                f.setContent(b, m + c - d - 1 - 1));
                                if (ea && 1 === Math.abs(ua)) {
                                    var e = _b(z);
                                    e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
                                }
                                ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange");
                            }
                        }
                    },
                    updateSize: function(b) {
                        if (!va && i.modal) {
                            var c = e.getScrollY();
                            if (M !== c && (a.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
                            xa.x = window.innerWidth, xa.y = window.innerHeight, a.style.height = xa.y + "px";
                        }
                        if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), 
                        ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
                            for (var d, g, j, k = 0; k < h; k++) d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, 
                            i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), 
                            f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), 
                            g && g.container && (ic(g, qa), mc(g), Ia(g));
                            x = !1;
                        }
                        t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, 
                        pa.y = da.center.y, Ha(!0)), Da("resize");
                    },
                    zoomTo: function(a, b, c, d, f) {
                        b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
                        var g = Sa(a, !1), h = {};
                        Va("x", g, h, a), Va("y", g, h, a);
                        var i = s, j = {
                            x: pa.x,
                            y: pa.y
                        };
                        Na(h);
                        var k = function(b) {
                            1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, 
                            pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b);
                        };
                        c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
                    }
                }, fb = 30, gb = 10, hb = {}, ib = {}, jb = {}, kb = {}, lb = {}, mb = [], nb = {}, ob = [], pb = {}, qb = 0, rb = ma(), sb = 0, tb = ma(), ub = ma(), vb = ma(), wb = function(a, b) {
                    return a.x === b.x && a.y === b.y;
                }, xb = function(a, b) {
                    return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
                }, yb = function(a, b) {
                    return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y);
                }, zb = function() {
                    Z && (I(Z), Z = null);
                }, Ab = function() {
                    V && (Z = H(Ab), Qb());
                }, Bb = function() {
                    return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
                }, Cb = function(a, b) {
                    return !(!a || a === document) && !(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b));
                }, Db = {}, Eb = function(a, b) {
                    return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), 
                    Db.prevent;
                }, Fb = function(a, b) {
                    return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b;
                }, Gb = function(a, b, c) {
                    c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y);
                }, Hb = function(a, b, c) {
                    if (a - Q > 50) {
                        var d = ob.length > 2 ? ob.shift() : {};
                        d.x = b, d.y = c, ob.push(d), Q = a;
                    }
                }, Ib = function() {
                    var a = pa.y - f.currItem.initialPosition.y;
                    return 1 - Math.abs(a / (qa.y / 2));
                }, Jb = {}, Kb = {}, Lb = [], Mb = function(a) {
                    for (;Lb.length > 0; ) Lb.pop();
                    return F ? (la = 0, mb.forEach((function(a) {
                        0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++;
                    }))) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), 
                    a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, 
                    Jb.id = "", Lb[0] = Jb), Lb;
                }, Nb = function(a, b) {
                    var c, d, e, g, j = pa[a] + b[a], k = b[a] > 0, l = tb.x + b.x, m = tb.x - nb.x;
                    return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, 
                    !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, 
                    da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, 
                    j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, 
                    "x" !== a) ? void (fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), 
                    $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), 
                    void 0 !== g);
                }, Ob = function(a) {
                    if (!("mousedown" === a.type && a.button > 0)) {
                        if ($b) return void a.preventDefault();
                        if (!U || "mousedown" !== a.type) {
                            if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
                                var b = e.arraySearch(mb, a.pointerId, "id");
                                b < 0 && (b = mb.length), mb[b] = {
                                    x: a.pageX,
                                    y: a.pageY,
                                    id: a.pointerId
                                };
                            }
                            var c = Mb(a), d = c.length;
                            _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, 
                            ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), 
                            Ma(lb, kb), nb.x = ta.x * ra, ob = [ {
                                x: kb.x,
                                y: kb.y
                            } ], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, 
                            X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), 
                            ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ca = yb(hb, ib));
                        }
                    }
                }, Pb = function(a) {
                    if (a.preventDefault(), F) {
                        var b = e.arraySearch(mb, a.pointerId, "id");
                        if (b > -1) {
                            var c = mb[b];
                            c.x = a.pageX, c.y = a.pageY;
                        }
                    }
                    if (V) {
                        var d = Mb(a);
                        if (ga || Y || aa) _ = d; else if (tb.x !== ta.x * ra) ga = "h"; else {
                            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
                            Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d);
                        }
                    }
                }, Qb = function() {
                    if (_) {
                        var a = _.length;
                        if (0 !== a) if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
                            if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
                            Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
                            var b = yb(hb, ib), c = Vb(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
                            var d = 1, e = Ta(), g = Ua();
                            if (c < e) if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                                var h = e - c, j = 1 - h / (e / 1.2);
                                Fa(j), Da("onPinchClose", j), ia = !0;
                            } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3); else c > g && (d = (c - g) / (6 * e), 
                            d > 1 && (d = 1), c = g + d * e);
                            d < 0 && (d = 0), b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), 
                            pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha();
                        } else {
                            if (!ga) return;
                            if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), 
                            kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;
                            if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
                                na.y += jb.y, pa.y += jb.y;
                                var k = Ib();
                                return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha();
                            }
                            Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
                            var l = Nb("x", jb);
                            l || (Nb("y", jb), Na(pa), Ha());
                        }
                    }
                }, Rb = function(a) {
                    if (N.isOldAndroid) {
                        if (U && "mouseup" === a.type) return;
                        a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout((function() {
                            U = 0;
                        }), 600));
                    }
                    Da("pointerUp"), Eb(a, !1) && a.preventDefault();
                    var b;
                    if (F) {
                        var c = e.arraySearch(mb, a.pointerId, "id");
                        if (c > -1) if (b = mb.splice(c, 1)[0], navigator.msPointerEnabled) {
                            var d = {
                                4: "mouse",
                                2: "touch",
                                3: "pen"
                            };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse");
                        } else b.type = a.pointerType || "mouse";
                    }
                    var g, h = Mb(a), j = h.length;
                    if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
                    1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = {
                        x: a.pageX,
                        y: a.pageY,
                        type: "mouse"
                    } : a.changedTouches && a.changedTouches[0] && (b = {
                        x: a.changedTouches[0].pageX,
                        y: a.changedTouches[0].pageY,
                        type: "touch"
                    })), Da("touchRelease", a, b));
                    var k = -1;
                    if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : -1 !== sb && (k = Ea() - sb)), 
                    sb = 1 === j ? Ea() : -1, g = -1 !== k && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 
                    1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T) if (cb(), 
                    R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
                        var l = Ib();
                        if (l < i.verticalDragRange) f.close(); else {
                            var m = pa.y, n = ja;
                            db("verticalDrag", 0, 1, 300, e.easing.cubic.out, (function(a) {
                                pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha();
                            })), Da("onVerticalDrag", 1);
                        }
                    } else {
                        if (($ || fa) && 0 === j) {
                            var o = Ub(g, R);
                            if (o) return;
                            g = "zoomPointerUp";
                        }
                        if (!fa) return "swipe" !== g ? void Wb() : void (!$ && s > f.currItem.fitRatio && Tb(R));
                    }
                }, Sb = function() {
                    var a, b, c = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(d) {
                            ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), 
                            c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), 
                            c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, 
                            Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, 
                            c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1;
                        },
                        calculateOverBoundsAnimOffset: function(a, b) {
                            c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), 
                            void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], 
                            c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, 
                            db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, (function(b) {
                                pa[a] = b, Ha();
                            })))));
                        },
                        calculateAnimOffset: function(a) {
                            c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), 
                            c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), 
                            c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, 
                            pa[a] += c.distanceOffset[a]);
                        },
                        panAnimLoop: function() {
                            if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, 
                            c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), 
                            c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), 
                            pa.y = Math.round(pa.y), Ha(), void ab("zoomPan");
                        }
                    };
                    return c;
                }, Tb = function(a) {
                    return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, 
                    a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, 
                    a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), 
                    a.lastNow = Ea(), void a.panAnimLoop());
                }, Ub = function(a, b) {
                    var c;
                    fa || (qb = m);
                    var d;
                    if ("swipe" === a) {
                        var g = kb.x - lb.x, h = b.lastFlickDist.x < 10;
                        g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
                    }
                    var j;
                    d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, 
                    j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
                    var k, l = ta.x * ra, n = Math.abs(l - tb.x);
                    return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, 
                    k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, 
                    Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, (function() {
                        cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete");
                    })), c && f.updateCurrItem(!0), c;
                }, Vb = function(a) {
                    return 1 / ca * a * t;
                }, Wb = function() {
                    var a = s, b = Ta(), c = Ua();
                    s < b ? a = b : s > c && (a = c);
                    var d, g = 1, h = ja;
                    return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function(a) {
                        Fa((g - h) * a + h);
                    }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0);
                };
                za("Gestures", {
                    publicMethods: {
                        initGestures: function() {
                            var a = function(a, b, c, d, e) {
                                A = a + b, B = a + c, C = a + d, D = e ? a + e : "";
                            };
                            F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.msPointerEnabled ? a("MSPointer", "Down", "Move", "Up", "Cancel") : a("pointer", "down", "move", "up", "cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), 
                            G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), 
                            f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", 
                            p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), 
                            G || (i.allowPanToNext = !1);
                        }
                    }
                });
                var Xb, Yb, Zb, $b, _b, ac, cc = function(b, c, d, g) {
                    Xb && clearTimeout(Xb), $b = !0, Zb = !0;
                    var h;
                    b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                    var j = d ? i.hideAnimationDuration : i.showAnimationDuration, k = function() {
                        ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), 
                        c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), 
                        g && g(), $b = !1;
                    };
                    if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, 
                    Ma(pa, b.initialPosition), Ha(), a.style.opacity = d ? 0 : 1, Fa(1), void (j ? setTimeout((function() {
                        k();
                    }), j) : k());
                    var n = function() {
                        var c = l, g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                        b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, 
                        pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), 
                        bb("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout((function() {
                            e.addClass(a, "pswp--animate_opacity");
                        }), 30)), Xb = setTimeout((function() {
                            if (Da("initialZoom" + (d ? "Out" : "In")), d) {
                                var f = h.w / b.w, i = {
                                    x: pa.x,
                                    y: pa.y
                                }, l = s, m = ja, n = function(b) {
                                    1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, 
                                    pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? a.style.opacity = 1 - b : Fa(m - b * m);
                                };
                                c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20));
                            } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? a.style.opacity = 1 : Fa(1), 
                            Xb = setTimeout(k, j + 20);
                        }), d ? 25 : 90);
                    };
                    n();
                }, dc = {}, ec = [], fc = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [ 1, 1 ],
                    getNumItemsFn: function() {
                        return Yb.length;
                    }
                }, gc = function() {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    };
                }, hc = function(a, b, c) {
                    var d = a.bounds;
                    d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, 
                    d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, 
                    d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y;
                }, ic = function(a, b, c) {
                    if (a.src && !a.loadError) {
                        var d = !c;
                        if (d && (a.vGap || (a.vGap = {
                            top: 0,
                            bottom: 0
                        }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, 
                        d) {
                            var e = dc.x / a.w, f = dc.y / a.h;
                            a.fitRatio = e < f ? e : f;
                            var g = i.scaleMode;
                            "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, 
                            a.bounds || (a.bounds = gc());
                        }
                        if (!c) return;
                        return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), 
                        a.bounds;
                    }
                    return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, 
                    a.bounds;
                }, jc = function(a, b, c, d, e, g) {
                    b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), 
                    g && setTimeout((function() {
                        b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null);
                    }), 500));
                }, kc = function(a) {
                    a.loading = !0, a.loaded = !1;
                    var b = a.img = e.createEl("pswp__img", "img"), c = function() {
                        a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, 
                        b.onload = b.onerror = null, b = null;
                    };
                    return b.onload = c, b.onerror = function() {
                        a.loadError = !0, c();
                    }, b.src = a.src, b;
                }, lc = function(a, b) {
                    if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), 
                    a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0;
                }, mc = function(a, b, c) {
                    if (a.src) {
                        b || (b = a.container.lastChild);
                        var d = c ? a.w : Math.round(a.w * a.fitRatio), e = c ? a.h : Math.round(a.h * a.fitRatio);
                        a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), 
                        b.style.width = d + "px", b.style.height = e + "px";
                    }
                }, nc = function() {
                    if (ec.length) {
                        for (var a, b = 0; b < ec.length; b++) a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                        ec = [];
                    }
                };
                za("Controller", {
                    publicMethods: {
                        lazyLoadItem: function(a) {
                            a = Aa(a);
                            var b = _b(a);
                            b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b));
                        },
                        initController: function() {
                            e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, i.loop, 
                            ac() < 3 && (i.loop = !1), Ca("beforeChange", (function(a) {
                                var b, c = i.preload, d = null === a || a >= 0, e = Math.min(c[0], ac()), g = Math.min(c[1], ac());
                                for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
                                for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
                            })), Ca("initialLayout", (function() {
                                f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                            })), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", (function() {
                                for (var a, b = 0; b < Yb.length; b++) a = Yb[b], a.container && (a.container = null), 
                                a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), 
                                a.loadError && (a.loaded = a.loadError = !1);
                                ec = null;
                            }));
                        },
                        getItemAt: function(a) {
                            return a >= 0 && void 0 !== Yb[a] && Yb[a];
                        },
                        allowProgressiveImg: function() {
                            return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200;
                        },
                        setContent: function(a, b) {
                            i.loop && (b = Aa(b));
                            var c = f.getItemAt(a.index);
                            c && (c.container = null);
                            var d, g = f.getItemAt(b);
                            if (!g) return void (a.el.innerHTML = "");
                            Da("gettingData", b, g), a.index = b, a.item = g;
                            var h = g.container = e.createEl("pswp__zoom-wrap");
                            if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), 
                            lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), 
                            d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0)); else {
                                if (g.loadComplete = function(c) {
                                    if (j) {
                                        if (a && a.index === b) {
                                            if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void (a.index === m && f.updateCurrZoomItem());
                                            c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", 
                                            c.placeholder = null) : N.transform && (fa || $b) ? ec.push({
                                                item: c,
                                                baseDiv: h,
                                                img: c.img,
                                                index: b,
                                                holder: a,
                                                clearPlaceholder: !0
                                            }) : jc(b, c, h, c.img, fa || $b, !0);
                                        }
                                        c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c);
                                    }
                                }, e.features.transform) {
                                    var k = "pswp__img pswp__img--placeholder";
                                    k += g.msrc ? "" : " pswp__img--placeholder--blank";
                                    var l = e.createEl(k, g.msrc ? "img" : "");
                                    g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l;
                                }
                                g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({
                                    item: g,
                                    baseDiv: h,
                                    img: g.img,
                                    index: b,
                                    holder: a
                                }) : jc(b, g, h, g.img, !0, !0));
                            }
                            Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", 
                            a.el.appendChild(h);
                        },
                        cleanSlide: function(a) {
                            a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1;
                        }
                    }
                });
                var oc, pc = {}, qc = function(a, b, c) {
                    var d = document.createEvent("CustomEvent"), e = {
                        origEvent: a,
                        target: a.target,
                        releasePoint: b,
                        pointerType: c || "touch"
                    };
                    d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
                };
                za("Tap", {
                    publicMethods: {
                        initTap: function() {
                            Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", (function() {
                                pc = {}, oc = null;
                            }));
                        },
                        onTapStart: function(a) {
                            a.length > 1 && (clearTimeout(oc), oc = null);
                        },
                        onTapRelease: function(a, b) {
                            if (b && !Y && !W && !_a) {
                                var c = b;
                                if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
                                if ("mouse" === b.type) return void qc(a, b, "mouse");
                                var d = a.target.tagName.toUpperCase();
                                if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
                                Ma(pc, c), oc = setTimeout((function() {
                                    qc(a, b), oc = null;
                                }), 300);
                            }
                        }
                    }
                });
                var rc;
                za("DesktopZoom", {
                    publicMethods: {
                        initDesktopZoom: function() {
                            L || (G ? Ca("mouseUsed", (function() {
                                f.setupDesktopZoom();
                            })) : f.setupDesktopZoom(!0));
                        },
                        setupDesktopZoom: function(b) {
                            rc = {};
                            var c = "wheel mousewheel DOMMouseScroll";
                            Ca("bindEvents", (function() {
                                e.bind(a, c, f.handleMouseWheel);
                            })), Ca("unbindEvents", (function() {
                                rc && e.unbind(a, c, f.handleMouseWheel);
                            })), f.mouseZoomedIn = !1;
                            var d, g = function() {
                                f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 
                                s < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), 
                                h();
                            }, h = function() {
                                d && (e.removeClass(a, "pswp--dragging"), d = !1);
                            };
                            Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", (function() {
                                f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"));
                            })), Ca("pointerUp", h), b || g();
                        },
                        handleMouseWheel: function(a) {
                            if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, 
                            f.close())), !0;
                            if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, 
                            rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY); else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), 
                            a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta; else {
                                if (!("detail" in a)) return;
                                rc.y = a.detail;
                            }
                            Sa(s, !0);
                            var b = pa.x - rc.x, c = pa.y - rc.y;
                            (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), 
                            f.panTo(b, c);
                        },
                        toggleDesktopZoom: function(b) {
                            b = b || {
                                x: qa.x / 2 + sa.x,
                                y: qa.y / 2 + sa.y
                            };
                            var c = i.getDoubleTapZoom(!0, f.currItem), d = s === c;
                            f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
                        }
                    }
                });
                var sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec = {
                    history: !0,
                    galleryUID: 1
                }, Fc = function() {
                    return Cc.hash.substring(1);
                }, Gc = function() {
                    sc && clearTimeout(sc), uc && clearTimeout(uc);
                }, Hc = function() {
                    var a = Fc(), b = {};
                    if (a.length < 5) return b;
                    var c, d = a.split("&");
                    for (c = 0; c < d.length; c++) if (d[c]) {
                        var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1]);
                    }
                    if (i.galleryPIDs) {
                        var f = b.pid;
                        for (b.pid = 0, c = 0; c < Yb.length; c++) if (Yb[c].pid === f) {
                            b.pid = c;
                            break;
                        }
                    } else b.pid = parseInt(b.pid, 10) - 1;
                    return b.pid < 0 && (b.pid = 0), b;
                }, Ic = function() {
                    if (uc && clearTimeout(uc), _a || V) return void (uc = setTimeout(Ic, 500));
                    vc ? clearTimeout(tc) : vc = !0;
                    var a = m + 1, b = _b(m);
                    b.hasOwnProperty("pid") && (a = b.pid);
                    var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
                    zc || -1 === Cc.hash.indexOf(c) && (Bc = !0);
                    var d = Cc.href.split("#")[0] + "#" + c;
                    Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, 
                    zc = !0, tc = setTimeout((function() {
                        vc = !1;
                    }), 60);
                };
                za("History", {
                    publicMethods: {
                        initHistory: function() {
                            if (e.extend(i, Ec, !0), i.history) {
                                Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, 
                                yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), 
                                Ca("afterChange", f.updateURL), Ca("unbindEvents", (function() {
                                    e.unbind(window, "hashchange", f.onHashChange);
                                }));
                                var a = function() {
                                    xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), 
                                    Gc();
                                };
                                Ca("unbindEvents", (function() {
                                    l && a();
                                })), Ca("destroy", (function() {
                                    xc || a();
                                })), Ca("firstUpdate", (function() {
                                    m = Hc().pid;
                                }));
                                var b = yc.indexOf("pid=");
                                b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), 
                                setTimeout((function() {
                                    j && e.bind(window, "hashchange", f.onHashChange);
                                }), 40);
                            }
                        },
                        onHashChange: function() {
                            return Fc() === yc ? (Ac = !0, void f.close()) : void (vc || (wc = !0, f.goTo(Hc().pid), 
                            wc = !1));
                        },
                        updateURL: function() {
                            Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic());
                        }
                    }
                }), e.extend(f, eb);
            };
            return a;
        }));
    },
    "../shared/browser/node_modules/yt-player/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        const EventEmitter = __webpack_require__("./node_modules/events/events.js").EventEmitter;
        const loadScript = __webpack_require__("../shared/browser/node_modules/load-script2/index.js");
        const YOUTUBE_IFRAME_API_SRC = "https://www.youtube.com/iframe_api";
        const YOUTUBE_STATES = {
            "-1": "unstarted",
            0: "ended",
            1: "playing",
            2: "paused",
            3: "buffering",
            5: "cued"
        };
        const YOUTUBE_ERROR = {
            INVALID_PARAM: 2,
            HTML5_ERROR: 5,
            NOT_FOUND: 100,
            UNPLAYABLE_1: 101,
            UNPLAYABLE_2: 150
        };
        const loadIframeAPICallbacks = [];
        class YouTubePlayer extends EventEmitter {
            constructor(element, opts) {
                super();
                const elem = "string" === typeof element ? document.querySelector(element) : element;
                if (elem.id) this._id = elem.id; else this._id = elem.id = "ytplayer-" + Math.random().toString(16).slice(2, 8);
                this._opts = Object.assign({
                    width: 640,
                    height: 360,
                    autoplay: false,
                    captions: void 0,
                    controls: true,
                    keyboard: true,
                    fullscreen: true,
                    annotations: true,
                    modestBranding: false,
                    related: true,
                    timeupdateFrequency: 1e3,
                    playsInline: true,
                    start: 0
                }, opts);
                this.videoId = null;
                this.destroyed = false;
                this._api = null;
                this._autoplay = false;
                this._player = null;
                this._ready = false;
                this._queue = [];
                this._interval = null;
                this._startInterval = this._startInterval.bind(this);
                this._stopInterval = this._stopInterval.bind(this);
                this.on("playing", this._startInterval);
                this.on("unstarted", this._stopInterval);
                this.on("ended", this._stopInterval);
                this.on("paused", this._stopInterval);
                this.on("buffering", this._stopInterval);
                this._loadIframeAPI(((err, api) => {
                    if (err) return this._destroy(new Error("YouTube Iframe API failed to load"));
                    this._api = api;
                    if (this.videoId) this.load(this.videoId, this._autoplay, this._start);
                }));
            }
            load(videoId, autoplay = false, start = 0) {
                if (this.destroyed) return;
                this.videoId = videoId;
                this._autoplay = autoplay;
                this._start = start;
                if (!this._api) return;
                if (!this._player) {
                    this._createPlayer(videoId);
                    return;
                }
                if (!this._ready) return;
                if (autoplay) this._player.loadVideoById(videoId, start); else this._player.cueVideoById(videoId, start);
            }
            play() {
                if (this._ready) this._player.playVideo(); else this._queueCommand("play");
            }
            pause() {
                if (this._ready) this._player.pauseVideo(); else this._queueCommand("pause");
            }
            stop() {
                if (this._ready) this._player.stopVideo(); else this._queueCommand("stop");
            }
            seek(seconds) {
                if (this._ready) this._player.seekTo(seconds, true); else this._queueCommand("seek", seconds);
            }
            setVolume(volume) {
                if (this._ready) this._player.setVolume(volume); else this._queueCommand("setVolume", volume);
            }
            getVolume() {
                return this._ready && this._player.getVolume() || 0;
            }
            mute() {
                if (this._ready) this._player.mute(); else this._queueCommand("mute");
            }
            unMute() {
                if (this._ready) this._player.unMute(); else this._queueCommand("unMute");
            }
            isMuted() {
                return this._ready && this._player.isMuted() || false;
            }
            setSize(width, height) {
                if (this._ready) this._player.setSize(width, height); else this._queueCommand("setSize", width, height);
            }
            setPlaybackRate(rate) {
                if (this._ready) this._player.setPlaybackRate(rate); else this._queueCommand("setPlaybackRate", rate);
            }
            setPlaybackQuality(suggestedQuality) {
                if (this._ready) this._player.setPlaybackQuality(suggestedQuality); else this._queueCommand("setPlaybackQuality", suggestedQuality);
            }
            getPlaybackRate() {
                return this._ready && this._player.getPlaybackRate() || 1;
            }
            getAvailablePlaybackRates() {
                return this._ready && this._player.getAvailablePlaybackRates() || [ 1 ];
            }
            getDuration() {
                return this._ready && this._player.getDuration() || 0;
            }
            getProgress() {
                return this._ready && this._player.getVideoLoadedFraction() || 0;
            }
            getState() {
                return this._ready && YOUTUBE_STATES[this._player.getPlayerState()] || "unstarted";
            }
            getCurrentTime() {
                return this._ready && this._player.getCurrentTime() || 0;
            }
            destroy() {
                this._destroy();
            }
            _destroy(err) {
                if (this.destroyed) return;
                this.destroyed = true;
                if (this._player) {
                    this._player.stopVideo && this._player.stopVideo();
                    this._player.destroy();
                }
                this.videoId = null;
                this._id = null;
                this._opts = null;
                this._api = null;
                this._player = null;
                this._ready = false;
                this._queue = null;
                this._stopInterval();
                this.removeListener("playing", this._startInterval);
                this.removeListener("paused", this._stopInterval);
                this.removeListener("buffering", this._stopInterval);
                this.removeListener("unstarted", this._stopInterval);
                this.removeListener("ended", this._stopInterval);
                if (err) this.emit("error", err);
            }
            _queueCommand(command, ...args) {
                if (this.destroyed) return;
                this._queue.push([ command, args ]);
            }
            _flushQueue() {
                while (this._queue.length) {
                    const command = this._queue.shift();
                    this[command[0]].apply(this, command[1]);
                }
            }
            _loadIframeAPI(cb) {
                if (window.YT && "function" === typeof window.YT.Player) return cb(null, window.YT);
                loadIframeAPICallbacks.push(cb);
                const scripts = Array.from(document.getElementsByTagName("script"));
                const isLoading = scripts.some((script => script.src === YOUTUBE_IFRAME_API_SRC));
                if (!isLoading) loadScript(YOUTUBE_IFRAME_API_SRC).catch((err => {
                    while (loadIframeAPICallbacks.length) {
                        const loadCb = loadIframeAPICallbacks.shift();
                        loadCb(err);
                    }
                }));
                const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = () => {
                    if ("function" === typeof prevOnYouTubeIframeAPIReady) prevOnYouTubeIframeAPIReady();
                    while (loadIframeAPICallbacks.length) {
                        const loadCb = loadIframeAPICallbacks.shift();
                        loadCb(null, window.YT);
                    }
                };
            }
            _createPlayer(videoId) {
                if (this.destroyed) return;
                const opts = this._opts;
                this._player = new this._api.Player(this._id, {
                    width: opts.width,
                    height: opts.height,
                    videoId,
                    host: opts.host,
                    playerVars: {
                        autoplay: opts.autoplay ? 1 : 0,
                        cc_load_policy: null != opts.captions ? false !== opts.captions ? 1 : 0 : void 0,
                        hl: null != opts.captions && false !== opts.captions ? opts.captions : void 0,
                        cc_lang_pref: null != opts.captions && false !== opts.captions ? opts.captions : void 0,
                        controls: opts.controls ? 2 : 0,
                        disablekb: opts.keyboard ? 0 : 1,
                        enablejsapi: 1,
                        fs: opts.fullscreen ? 1 : 0,
                        iv_load_policy: opts.annotations ? 1 : 3,
                        modestbranding: opts.modestBranding ? 1 : 0,
                        origin: window.location.origin,
                        playsinline: opts.playsInline ? 1 : 0,
                        rel: opts.related ? 1 : 0,
                        wmode: "opaque",
                        start: opts.start
                    },
                    events: {
                        onReady: () => this._onReady(videoId),
                        onStateChange: data => this._onStateChange(data),
                        onPlaybackQualityChange: data => this._onPlaybackQualityChange(data),
                        onPlaybackRateChange: data => this._onPlaybackRateChange(data),
                        onError: data => this._onError(data)
                    }
                });
            }
            _onReady(videoId) {
                if (this.destroyed) return;
                this._ready = true;
                this.load(this.videoId, this._autoplay, this._start);
                this._flushQueue();
            }
            _onStateChange(data) {
                if (this.destroyed) return;
                const state = YOUTUBE_STATES[data.data];
                if (state) {
                    if ([ "paused", "buffering", "ended" ].includes(state)) this._onTimeupdate();
                    this.emit(state);
                    if ([ "unstarted", "playing", "cued" ].includes(state)) this._onTimeupdate();
                } else throw new Error("Unrecognized state change: " + data);
            }
            _onPlaybackQualityChange(data) {
                if (this.destroyed) return;
                this.emit("playbackQualityChange", data.data);
            }
            _onPlaybackRateChange(data) {
                if (this.destroyed) return;
                this.emit("playbackRateChange", data.data);
            }
            _onError(data) {
                if (this.destroyed) return;
                const code = data.data;
                if (code === YOUTUBE_ERROR.HTML5_ERROR) return;
                if (code === YOUTUBE_ERROR.UNPLAYABLE_1 || code === YOUTUBE_ERROR.UNPLAYABLE_2 || code === YOUTUBE_ERROR.NOT_FOUND || code === YOUTUBE_ERROR.INVALID_PARAM) return this.emit("unplayable", this.videoId);
                this._destroy(new Error("YouTube Player Error. Unknown error code: " + code));
            }
            _onTimeupdate() {
                this.emit("timeupdate", this.getCurrentTime());
            }
            _startInterval() {
                this._interval = setInterval((() => this._onTimeupdate()), this._opts.timeupdateFrequency);
            }
            _stopInterval() {
                clearInterval(this._interval);
                this._interval = null;
            }
        }
        module.exports = YouTubePlayer;
    },
    "../shared/browser/report/product/utils/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getCartId: () => getCartId,
            validParams: () => validParams
        });
        __webpack_require__("../shared/browser/utils/report/page.js");
        var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/lodash/isPlainObject.js");
        var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
        function getCartId() {
            return new Promise(((resolve, reject) => {
                if (window.Shopline && window.Shopline.event && window.Shopline.event.emit) window.Shopline.event.emit("Cart::GetCartId", {
                    onSuccess(res) {
                        if (res && res.success) {
                            const ownerId = res.data;
                            resolve(ownerId);
                        }
                        reject(res);
                    },
                    onError(error) {
                        reject(error);
                    }
                });
            }));
        }
        function validParams(target) {
            try {
                if (!target || !lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(target)) throw new Error;
            } catch (error) {
                throw new Error(`report function params must be object ${error}`);
            }
        }
    },
    "../shared/browser/utils/currency/CurrencyConvert.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            convertFormat: () => _index__WEBPACK_IMPORTED_MODULE_0__.convertFormat
        });
        var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/currency/index.js");
    },
    "../shared/browser/utils/form/form.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
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
        "use strict";
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
    },
    "../shared/browser/utils/img-size.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => img_size
        });
        var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/url/url.js");
        var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        function img_size(url) {
            const urlParse = url__WEBPACK_IMPORTED_MODULE_0__.parse(url);
            const urlQuery = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(urlParse && urlParse.query) || {};
            const radix = 10;
            const fixed = 2;
            const width = Number.parseInt(urlQuery.w, radix);
            const height = Number.parseInt(urlQuery.h, radix);
            let ratio = null;
            if (Number.isInteger(width) && Number.isInteger(height) && 0 !== width) ratio = `${Number(Number.parseFloat(height / width * 100).toFixed(fixed))}%`;
            return {
                width: Number.isInteger(width) ? width : null,
                height: Number.isInteger(height) ? height : null,
                ratio
            };
        }
    },
    "../shared/browser/utils/report/pageMapping.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = {
            Home: "homepage",
            Products: "product_list",
            ProductsDetail: "pdp",
            ProductsSearch: "product_search",
            OneShop: "expresscheckout",
            Cart: "cart",
            Checkout: "order_check_out",
            Comfirm: "transaction",
            Center: "user_page",
            Activity: "addon",
            Page: {
                custom_page: 124,
                smart_landing_page: 125
            }
        };
    },
    "../shared/browser/utils/sku/DataWatcher.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => DataWatcher
        });
        class DataWatcher {
            constructor() {
                Object.defineProperty(this, "$watcher", {
                    value: {}
                });
                Object.defineProperty(this, "$afterWatcher", {
                    value: {}
                });
                Object.defineProperty(this, "$data", {
                    value: {}
                });
                const bindWatcher = type => (keys, callback) => {
                    const props = {};
                    keys.forEach((key => {
                        if (!this.$watcher[key]) this.$watcher[key] = [];
                        if (!this.$afterWatcher[key]) this.$afterWatcher[key] = [];
                        if ("watch" === type) this.$watcher[key].push(callback); else if ("watchAfter" === type) this.$afterWatcher[key].push(callback);
                        if (Object.prototype.hasOwnProperty.call(this.$data, key)) return;
                        this.$data[key] = this[key];
                        delete this[key];
                        props[key] = {
                            set: value => {
                                this.$data[key] = value;
                                this.$watcher[key].forEach((w => {
                                    try {
                                        w && w(value, key);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }));
                                this.$afterWatcher[key].forEach((w => {
                                    try {
                                        w && w(value, key);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }));
                            },
                            get: () => this.$data[key]
                        };
                    }));
                    Object.defineProperties(this, props);
                };
                Object.defineProperty(this, "watch", {
                    value: bindWatcher("watch")
                });
                Object.defineProperty(this, "watchAfter", {
                    value: bindWatcher("watchAfter")
                });
            }
        }
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/featured-product/index.js")));
    __webpack_require__.O();
} ]);