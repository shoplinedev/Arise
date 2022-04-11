(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "activity" ], {
    "./node_modules/axios/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");
    },
    "./node_modules/axios/lib/adapters/xhr.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
        var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");
        var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
        var buildFullPath = __webpack_require__("./node_modules/axios/lib/core/buildFullPath.js");
        var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
        var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
        var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
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
    "./node_modules/axios/lib/axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
        var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
        var mergeConfig = __webpack_require__("./node_modules/axios/lib/core/mergeConfig.js");
        var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
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
        axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
        axios.all = function(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");
        axios.isAxiosError = __webpack_require__("./node_modules/axios/lib/helpers/isAxiosError.js");
        module.exports = axios;
        module.exports["default"] = axios;
    },
    "./node_modules/axios/lib/cancel/Cancel.js": module => {
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
    "./node_modules/axios/lib/cancel/CancelToken.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
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
    "./node_modules/axios/lib/cancel/isCancel.js": module => {
        "use strict";
        module.exports = function(value) {
            return !!(value && value.__CANCEL__);
        };
    },
    "./node_modules/axios/lib/core/Axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
        var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
        var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");
        var mergeConfig = __webpack_require__("./node_modules/axios/lib/core/mergeConfig.js");
        var validator = __webpack_require__("./node_modules/axios/lib/helpers/validator.js");
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
    "./node_modules/axios/lib/core/InterceptorManager.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/core/buildFullPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
        var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");
        module.exports = function(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        };
    },
    "./node_modules/axios/lib/core/createError.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");
        module.exports = function(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };
    },
    "./node_modules/axios/lib/core/dispatchRequest.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
        var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
        var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
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
    "./node_modules/axios/lib/core/enhanceError.js": module => {
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
    "./node_modules/axios/lib/core/mergeConfig.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/core/settle.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
        module.exports = function(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        };
    },
    "./node_modules/axios/lib/core/transformData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
        module.exports = function(data, headers, fns) {
            var context = this || defaults;
            utils.forEach(fns, (function(fn) {
                data = fn.call(context, data, headers);
            }));
            return data;
        };
    },
    "./node_modules/axios/lib/defaults.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");
        var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");
        var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
        }
        function getDefaultAdapter() {
            var adapter;
            if ("undefined" !== typeof XMLHttpRequest) adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js"); else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
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
    "./node_modules/axios/lib/helpers/bind.js": module => {
        "use strict";
        module.exports = function(fn, thisArg) {
            return function() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                return fn.apply(thisArg, args);
            };
        };
    },
    "./node_modules/axios/lib/helpers/buildURL.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/helpers/combineURLs.js": module => {
        "use strict";
        module.exports = function(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
    },
    "./node_modules/axios/lib/helpers/cookies.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/helpers/isAbsoluteURL.js": module => {
        "use strict";
        module.exports = function(url) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    },
    "./node_modules/axios/lib/helpers/isAxiosError.js": module => {
        "use strict";
        module.exports = function(payload) {
            return "object" === typeof payload && true === payload.isAxiosError;
        };
    },
    "./node_modules/axios/lib/helpers/isURLSameOrigin.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/helpers/normalizeHeaderName.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
        module.exports = function(headers, normalizedName) {
            utils.forEach(headers, (function(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            }));
        };
    },
    "./node_modules/axios/lib/helpers/parseHeaders.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
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
    "./node_modules/axios/lib/helpers/spread.js": module => {
        "use strict";
        module.exports = function(callback) {
            return function(arr) {
                return callback.apply(null, arr);
            };
        };
    },
    "./node_modules/axios/lib/helpers/validator.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var pkg = __webpack_require__("./node_modules/axios/package.json");
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
    "./node_modules/axios/lib/utils.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
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
            }, D = "en", v = {};
            v[D] = M;
            var p = function(t) {
                return t instanceof _;
            }, S = function(t, e, n) {
                var r;
                if (!t) return D;
                if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t); else {
                    var i = t.name;
                    v[i] = t, r = i;
                }
                return !n && r && (D = r), r || !n && D;
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
                        var D = this.$locale().weekStart || 0, v = (y < D ? y + 7 : y) - D;
                        return $(r ? m - v : m + (6 - v), M);

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
                        return t && (t[n] || t(e, r)) || i[n].substr(0, s);
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
                    var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e, g = this - M, D = O.m(this, M);
                    return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, 
                    l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);
                }, m.daysInMonth = function() {
                    return this.endOf(f).$D;
                }, m.$locale = function() {
                    return v[this.$L];
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
            }(), b = _.prototype;
            return w.prototype = b, [ [ "$ms", r ], [ "$s", i ], [ "$m", s ], [ "$H", u ], [ "$W", a ], [ "$M", f ], [ "$y", c ], [ "$D", d ] ].forEach((function(t) {
                b[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1]);
                };
            })), w.extend = function(t, e) {
                return t.$i || (t(e, _, w), t.$i = !0), w;
            }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
                return w(1e3 * t);
            }, w.en = v[D], w.Ls = v, w.p = {}, w;
        }));
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
    "./node_modules/swiper/esm/components/lazy/lazy.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/ssr-window/ssr-window.esm.js");
        var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
        var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
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
                    var $imageEl = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
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
                                var $source = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);
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
                    if (isVirtual) return (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr("data-swiper-slide-index");
                    return (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
                }
                if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
                if (swiper.params.watchSlidesVisibility) $wrapperEl.children("." + swiperParams.slideVisibleClass).each((function(slideEl) {
                    var index = isVirtual ? (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr("data-swiper-slide-index") : (0, 
                    _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
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
                var window = (0, ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
                var swiper = this;
                if (!swiper || swiper.destroyed) return;
                var $scrollElement = swiper.params.lazy.scrollingElement ? (0, _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : (0, 
                _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
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
        const __WEBPACK_DEFAULT_EXPORT__ = {
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
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
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
    "./node_modules/swiper/esm/components/thumbs/thumbs.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/swiper/esm/utils/utils.js");
        var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/esm/utils/dom.js");
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
        var Thumbs = {
            init: function() {
                var swiper = this;
                var thumbsParams = swiper.params.thumbs;
                if (swiper.thumbs.initialized) return false;
                swiper.thumbs.initialized = true;
                var SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                } else if ((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(thumbsParams.swiper)) {
                    swiper.thumbs.swiper = new SwiperClass((0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)({}, thumbsParams.swiper, {
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
                if (clickedSlide && (0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if ("undefined" === typeof clickedIndex || null === clickedIndex) return;
                var slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, _utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
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
        const __WEBPACK_DEFAULT_EXPORT__ = {
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
                (0, _utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
                    thumbs: _extends({
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
    "./src/assets/activity/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var dayjs_min = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var CurrencyConvert = __webpack_require__("../shared/browser/utils/currency/CurrencyConvert.js");
        var request = __webpack_require__("../shared/browser/utils/request.js");
        var getPromotionReminder = __webpack_require__("../shared/browser/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        function getPathByString(pathString) {
            let path = [];
            if (pathString instanceof Array) path = pathString.reduce(((o, p) => {
                if ("string" === typeof p) return o.concat(p.split(/\[?\.|\]?\.|\[/));
                return o;
            }), []); else if ("string" === typeof pathString) path = pathString.split(/\[?\.|\]?\.|\[/);
            return path;
        }
        function getJsonByPath(path, obj) {
            if (obj instanceof Object) {
                const key = path.shift();
                if (path.length) return getJsonByPath(path, obj[key]);
                return obj[key];
            }
            return obj;
        }
        class Render {
            constructor(dependencies) {
                _defineProperty(this, "dependencies", []);
                this.dependencies = dependencies.map((({defualtValue, path, selector, action}, index) => {
                    const selectorString = getPathByString(selector).join(" ");
                    return {
                        value: void 0,
                        path: getPathByString(path),
                        selector: selectorString,
                        node: document.querySelector(selectorString),
                        action: () => {
                            const that = this.dependencies[index];
                            if (!that.node || !that.node.isConnected) that.node = document.querySelector(selectorString);
                            if (that.node) if (action) try {
                                var _that$value;
                                action(that.node, null !== (_that$value = that.value) && void 0 !== _that$value ? _that$value : defualtValue);
                            } catch (err) {
                                throw err;
                            } else {
                                var _that$value2;
                                that.node.innerHTML = null !== (_that$value2 = that.value) && void 0 !== _that$value2 ? _that$value2 : defualtValue;
                            }
                        }
                    };
                }));
            }
            run(obj) {
                this.dependencies.forEach((dependency => {
                    const {path, value, action} = dependency;
                    const newValue = getJsonByPath([ ...path ], obj);
                    if (value !== newValue) {
                        dependency.value = newValue;
                        action();
                    }
                }));
            }
            force() {
                this.dependencies.forEach((({action}) => {
                    action();
                }));
            }
        }
        const simpleRender = Render;
        const CartInfoKey = "cartInfo";
        const GIFT_PLUGIN_TYPE = 7;
        const init = () => {
            const cartNode = $("#activity-cart");
            if (!cartNode.length) return;
            const activity = state_selector.SL_State.get("activity");
            function getDefualtPromotion() {
                const {benefitType, benefitConditions} = activity;
                const condition = benefitConditions[0];
                if (condition) return {
                    benefitType,
                    promotionBenefitList: [ {
                        type: condition.benefitEvent.type,
                        hit: false,
                        benefit: condition.benefit.discount || condition.benefit.benefitAmount,
                        amount: condition.benefitEvent.minThreshold
                    } ]
                };
            }
            const render = new simpleRender([ {
                path: "activeItems",
                selector: "#activity-cartTotal",
                action(node, activeItems) {
                    const activeItem = null === activeItems || void 0 === activeItems ? void 0 : activeItems.find((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.activitySeq) === (null === activity || void 0 === activity ? void 0 : activity.activitySeq)));
                    const hasGiftPlugin = (null === activeItems || void 0 === activeItems ? void 0 : activeItems.findIndex((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.benefitType) === GIFT_PLUGIN_TYPE))) > -1;
                    if (!hasGiftPlugin) node.innerHTML = (0, CurrencyConvert.convertFormat)((null === activeItem || void 0 === activeItem ? void 0 : activeItem.totalAmount) || 0);
                }
            }, {
                path: "activeItems",
                selector: "#activity-cartNum",
                action(node, activeItems) {
                    var _activeItem$itemList;
                    const activeItem = null === activeItems || void 0 === activeItems ? void 0 : activeItems.find((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.activitySeq) === (null === activity || void 0 === activity ? void 0 : activity.activitySeq)));
                    const hasGiftPlugin = (null === activeItems || void 0 === activeItems ? void 0 : activeItems.findIndex((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.benefitType) === GIFT_PLUGIN_TYPE))) > -1;
                    if (hasGiftPlugin) return;
                    if (null !== activeItem && void 0 !== activeItem && null !== (_activeItem$itemList = activeItem.itemList) && void 0 !== _activeItem$itemList && _activeItem$itemList.length) node.innerHTML = activeItem.itemList.reduce(((p, c) => p + c.num), 0); else node.innerHTML = 0;
                }
            }, {
                path: "activeItems",
                selector: "#activity-salesTip",
                action(node, activeItems) {
                    const activeItem = null === activeItems || void 0 === activeItems ? void 0 : activeItems.find((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.activitySeq) === (null === activity || void 0 === activity ? void 0 : activity.activitySeq)));
                    const hasGiftPlugin = (null === activeItems || void 0 === activeItems ? void 0 : activeItems.findIndex((({promotion}) => (null === promotion || void 0 === promotion ? void 0 : promotion.benefitType) === GIFT_PLUGIN_TYPE))) > -1;
                    if (!hasGiftPlugin) {
                        node.innerHTML = (0, getPromotionReminder.getShoppingReminderTranslate)((null === activeItem || void 0 === activeItem ? void 0 : activeItem.promotion) || getDefualtPromotion());
                        $(node).parents().removeClass("d-none");
                    }
                }
            }, {
                path: "activeItems",
                selector: "#activity-cart",
                action(node) {
                    $(node).removeClass("d-none");
                    $(document.body).css({
                        paddingBottom: "104px"
                    });
                }
            } ]);
            const cartInfo = state_selector.SL_State.get(CartInfoKey);
            if (!cartInfo) (0, request["default"])({
                url: "carts/cart",
                method: "GET"
            }).then((res => {
                if (res.data) state_selector.SL_State.set(CartInfoKey, res.data);
            })); else $(document.body).css({
                paddingBottom: "104px"
            });
            window.SL_EventBus.on("global:currency:format", (() => {
                const amountNode = cartNode.find("[data-amount]");
                amountNode.each((function() {
                    $(this).text((0, CurrencyConvert.convertFormat)($(this).data("amount")));
                }));
            }));
            state_selector.SL_State.on(CartInfoKey, (value => {
                render.run(value);
            }));
        };
        const cart = init;
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var salesPromotionTags = __webpack_require__("./src/assets/commons/sales/snippets/salesPromotionTags.js");
        const EVENT_ID = "60080000";
        function hdReport(options) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(EVENT_ID, options);
        }
        function promotionTimeInit() {
            var _$;
            const node = null === (_$ = $(".activity__limit-time-text")) || void 0 === _$ ? void 0 : _$[0];
            if (!node) return;
            const activity = state_selector.SL_State.get("activity");
            if (1 === (null === activity || void 0 === activity ? void 0 : activity.promotionSubType)) {
                var _$$html;
                const startTimeText = activity.startTime && dayjs_min_default()(activity.startTime).format("YYYY-MM-DD HH:mm");
                const endTimeText = activity.endTime && dayjs_min_default()(activity.endTime).format("YYYY-MM-DD HH:mm");
                const timeText = startTimeText + (endTimeText ? ` - ${endTimeText}` : "");
                if ((null === (_$$html = $(node).html()) || void 0 === _$$html ? void 0 : _$$html.trim()) !== timeText) $(node).html(timeText);
            }
        }
        $(document).ready((() => {
            var _window$HdSdk2;
            cart();
            promotionTimeInit();
            (0, salesPromotionTags["default"])();
            window.SL_EventBus.emit("global:hdReport:exit", [ EVENT_ID, null ]);
            hdReport({
                event_name: "view",
                page: "addon"
            });
            null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.collect({
                page: 115,
                module: -999,
                component: -999,
                action_type: 101,
                event_id: 1020
            });
        }));
        (function() {
            window.setInterval((() => {
                var _window$HdSdk3;
                null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : _window$HdSdk3.shopTracker.collect({
                    page: 115,
                    module: -999,
                    component: -999,
                    action_type: 106,
                    event_id: 1021
                });
            }), 1e3);
        })();
    },
    "./src/assets/commons/components/modal/common.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            disablePageScroll: () => scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll,
            enablePageScroll: () => scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll,
            bem: () => bem,
            DEFAULT_MODAL_ID_PRE: () => DEFAULT_MODAL_ID_PRE,
            VISIBLE: () => VISIBLE,
            HIDDEN: () => HIDDEN,
            animationClassMap: () => animationClassMap,
            visibleClassName: () => visibleClassName,
            maskClosableClass: () => maskClosableClass
        });
        var _utils_bem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/bem.js");
        var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        const bem = (0, _utils_bem__WEBPACK_IMPORTED_MODULE_1__["default"])("mp", "modal");
        const DEFAULT_MODAL_ID_PRE = "MpModal";
        const VISIBLE = "visible";
        const HIDDEN = "hidden";
        const animationClassMap = {
            visible: bem("visibleAnimation"),
            hidden: bem("notVisibleAnimation")
        };
        const visibleClassName = bem("visible");
        const maskClosableClass = bem("closable");
    },
    "./src/assets/commons/components/modal/full.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => ModalWithHtml
        });
        var _base_BaseClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/components/modal/common.js");
        let uuid = 0;
        class ModalWithHtml extends _base_BaseClass__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
                this.modalId = config.id || `${_common__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MODAL_ID_PRE}${++uuid}`;
                this.zIndex = config.zIndex;
                this.config = config;
                this.destroyed = false;
                this.init();
            }
            init() {
                const $modal = $(`#${this.modalId}`);
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
                const modalHtml = `\n      <div id="${this.modalId}" class="${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("wrapper")}">\n        <div class="${(0, 
                _common__WEBPACK_IMPORTED_MODULE_0__.bem)("mask")}"></div>\n        <div class="${(0, 
                _common__WEBPACK_IMPORTED_MODULE_0__.bem)("container")}">\n          ${closable ? `<span class="${(0, 
                _common__WEBPACK_IMPORTED_MODULE_0__.bem)("close")}">\n            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M19.1998 4.80005L4.7998 19.2" stroke="currentColor" stroke-width="2"/>\n              <path d="M4.7998 4.79995L19.1998 19.2" stroke="currentColor" stroke-width="2"/>\n            </svg>          \n          </span>` : ""}\n          <div class="${(0, 
                _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")} ${bodyClassName}">\n            ${content}\n          </div>\n        </div>\n      </div>\n    `;
                const $modal = $(modalHtml);
                if (containerClassName) $modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("container")}`).addClass(containerClassName);
                if (bodyClassName) $modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")}`).addClass(bodyClassName);
                if (children) $modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")}`).append(children);
                if (("number" === typeof zIndex || "string" === typeof zIndex) && "" !== zIndex) $modal.css("z-index", zIndex);
                return $modal;
            }
            setContent(content) {
                this.config.content = content;
                this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")}`).html(content);
            }
            show() {
                if (this.destroyed) {
                    this.destroyed = false;
                    this.bindEvents();
                }
                const $modalBody = this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")}`);
                this.$modal.appendTo(document.body);
                (0, _common__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)($modalBody.get(0));
                this.visibleState = _common__WEBPACK_IMPORTED_MODULE_0__.VISIBLE;
                this.$modal.addClass([ _common__WEBPACK_IMPORTED_MODULE_0__.visibleClassName, _common__WEBPACK_IMPORTED_MODULE_0__.animationClassMap.visible ]).removeClass(_common__WEBPACK_IMPORTED_MODULE_0__.animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                const $modalBody = this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("body")}`);
                this.visibleState = _common__WEBPACK_IMPORTED_MODULE_0__.HIDDEN;
                (0, _common__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)($modalBody.get(0));
                window.SL_EventBus.emit("global:popup:close");
                this.toggleMaskClassName();
                this.$modal.addClass(_common__WEBPACK_IMPORTED_MODULE_0__.animationClassMap.hidden).removeClass(_common__WEBPACK_IMPORTED_MODULE_0__.animationClassMap.visible);
                if (force) this.afterAnimation();
                if ("function" === typeof this.config.closeCallback) this.config.closeCallback(this.$modal);
            }
            toggleMaskClassName() {
                if (this.config.maskClosable) this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("mask")}`).toggleClass(_common__WEBPACK_IMPORTED_MODULE_0__.maskClosableClass, this.visibleState === _common__WEBPACK_IMPORTED_MODULE_0__.VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(_common__WEBPACK_IMPORTED_MODULE_0__.visibleClassName, this.visibleState === _common__WEBPACK_IMPORTED_MODULE_0__.VISIBLE);
                if ("function" === typeof this.config.afterClose) this.config.afterClose(this.$modal);
                this.destroy();
            }
            destroy() {
                if (this.config.destroyedOnClosed && this.visibleState === _common__WEBPACK_IMPORTED_MODULE_0__.HIDDEN) {
                    this.$modal.remove();
                    this.detachEvents();
                    this.destroyed = true;
                }
            }
            bindEvents() {
                this.$onPortals("click", `.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("close")}`, this.hide.bind(this, false));
                if (this.config.maskClosable) this.$onPortals("click", `.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("mask")}`, this.hide.bind(this, false));
                this.$onPortals("animationend", `.${(0, _common__WEBPACK_IMPORTED_MODULE_0__.bem)("container")}`, this.afterAnimation.bind(this));
            }
            detachEvents() {
                this.$offAll();
            }
        }
    },
    "./src/assets/commons/components/modal/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => _lite__WEBPACK_IMPORTED_MODULE_0__["default"],
            ModalWithHtml: () => _full__WEBPACK_IMPORTED_MODULE_1__["default"]
        });
        var _lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/components/modal/lite.js");
        var _full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/components/modal/full.js");
    },
    "./src/assets/commons/components/modal/lite.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => Modal
        });
        var _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/components/modal/common.js");
        class Modal {
            constructor({modalId = ""} = {}) {
                this.modalId = `${_common__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MODAL_ID_PRE}${modalId}`;
                this.$modal = $(`#${this.modalId}`);
                this.$modalBody = this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("body")}`);
                this.$modalContainer = this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("container")}`);
                this.isMobile = _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__.SL_State.get("request.is_mobile");
                this.maskClosable = this.$modal.data("maskclosable");
                this.visibleState = _common__WEBPACK_IMPORTED_MODULE_1__.HIDDEN;
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
                this.visibleState = _common__WEBPACK_IMPORTED_MODULE_1__.VISIBLE;
                (0, _common__WEBPACK_IMPORTED_MODULE_1__.disablePageScroll)(this.$modalBody.get(0));
                this.$modal.addClass([ _common__WEBPACK_IMPORTED_MODULE_1__.visibleClassName, _common__WEBPACK_IMPORTED_MODULE_1__.animationClassMap.visible ]).removeClass(_common__WEBPACK_IMPORTED_MODULE_1__.animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                this.visibleState = _common__WEBPACK_IMPORTED_MODULE_1__.HIDDEN;
                (0, _common__WEBPACK_IMPORTED_MODULE_1__.enablePageScroll)(this.$modalBody.get(0));
                this.toggleMaskClassName();
                this.$modal.addClass(_common__WEBPACK_IMPORTED_MODULE_1__.animationClassMap.hidden).removeClass(_common__WEBPACK_IMPORTED_MODULE_1__.animationClassMap.visible);
                if (force) this.afterAnimation();
            }
            toggleMaskClassName() {
                if (this.maskClosable) this.$modal.find(`.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("mask")}`).toggleClass(_common__WEBPACK_IMPORTED_MODULE_1__.maskClosableClass, this.visibleState === _common__WEBPACK_IMPORTED_MODULE_1__.VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(_common__WEBPACK_IMPORTED_MODULE_1__.visibleClassName, this.visibleState === _common__WEBPACK_IMPORTED_MODULE_1__.VISIBLE);
            }
            bindEvents() {
                this.$modal.on("click", `.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("close")}`, this.hide.bind(this, false));
                if (this.isMobile) this.$modal.on("touchstart", `.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("close")}`, this.hide.bind(this, false));
                if (this.maskClosable) this.$modal.on("click", `.${(0, _common__WEBPACK_IMPORTED_MODULE_1__.bem)("mask")}`, this.hide.bind(this, false));
                this.$modalContainer.on("animationend", this.afterAnimation.bind(this));
            }
        }
    },
    "./src/assets/commons/sales/snippets/addToCartList.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        var _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        class AddToCartList {
            constructor(spu) {
                this.spu = spu;
            }
            setActiveSku(sku) {
                this.activeSku = sku ? {
                    ...sku,
                    name: this.spu.title
                } : null;
            }
            init() {
                const addToCart = this;
                $("#page-product-detail .addToCartList_content").on("click", ".addToCart", (ev => {
                    const {spuSeq: spuId, skuSeq: skuId, name, price} = addToCart.activeSku;
                    const eventID = (0, _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_0__.getEventID)();
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
                            window.Shopline.event.emit("DataReport::AddToCart", {
                                content_spu_id: spuId,
                                content_sku_id: skuId,
                                content_category: "",
                                content_name: name,
                                currency: _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_1__.SL_State.get("storeInfo").currency,
                                value: price,
                                quantity: parseInt(ev.target.dataset.count, 10),
                                price
                            });
                        },
                        onError: error => {
                            console.error(error);
                        }
                    });
                }));
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = AddToCartList;
    },
    "./src/assets/commons/sales/snippets/flashSale/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        var _timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/sales/snippets/flashSale/timeout.js");
        var _percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/commons/sales/snippets/flashSale/percentage.js");
        class FlashSale {
            constructor() {
                var _SL_State$get, _SL_State$get$product, _SL_State$get$product2, _SL_State$get$product3;
                this.shouldInit = false;
                const salesPlugins = null === (_SL_State$get = _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_0__.SL_State.get("product")) || void 0 === _SL_State$get ? void 0 : null === (_SL_State$get$product = _SL_State$get.productSale) || void 0 === _SL_State$get$product ? void 0 : null === (_SL_State$get$product2 = _SL_State$get$product.saleActivities) || void 0 === _SL_State$get$product2 ? void 0 : null === (_SL_State$get$product3 = _SL_State$get$product2.filter) || void 0 === _SL_State$get$product3 ? void 0 : _SL_State$get$product3.call(_SL_State$get$product2, (item => 1 === item.promotionSubType && 1 === item.promotionType));
                if ((null === salesPlugins || void 0 === salesPlugins ? void 0 : salesPlugins.length) > 0 && salesPlugins[0].salesPlugin) {
                    var _salesPlugins$, _salesPlugins$$salesP, _salesPlugins$$salesP2, _salesPlugins$2, _salesPlugins$2$sales, _salesPlugins$2$sales2, _salesPlugins$3, _salesPlugins$3$sales, _salesPlugins$3$sales2, _salesPlugins$4, _salesPlugins$4$sales, _salesPlugins$4$sales2;
                    this.shouldInit = true;
                    this.startTime = null === (_salesPlugins$ = salesPlugins[0]) || void 0 === _salesPlugins$ ? void 0 : null === (_salesPlugins$$salesP = _salesPlugins$.salesPlugin) || void 0 === _salesPlugins$$salesP ? void 0 : null === (_salesPlugins$$salesP2 = _salesPlugins$$salesP.countDownTimerPlugin) || void 0 === _salesPlugins$$salesP2 ? void 0 : _salesPlugins$$salesP2.startTime;
                    this.endTime = null === (_salesPlugins$2 = salesPlugins[0]) || void 0 === _salesPlugins$2 ? void 0 : null === (_salesPlugins$2$sales = _salesPlugins$2.salesPlugin) || void 0 === _salesPlugins$2$sales ? void 0 : null === (_salesPlugins$2$sales2 = _salesPlugins$2$sales.countDownTimerPlugin) || void 0 === _salesPlugins$2$sales2 ? void 0 : _salesPlugins$2$sales2.endTime;
                    this.saleNum = null === (_salesPlugins$3 = salesPlugins[0]) || void 0 === _salesPlugins$3 ? void 0 : null === (_salesPlugins$3$sales = _salesPlugins$3.salesPlugin) || void 0 === _salesPlugins$3$sales ? void 0 : null === (_salesPlugins$3$sales2 = _salesPlugins$3$sales.progressPlugin) || void 0 === _salesPlugins$3$sales2 ? void 0 : _salesPlugins$3$sales2.saleNum;
                    this.totalNum = null === (_salesPlugins$4 = salesPlugins[0]) || void 0 === _salesPlugins$4 ? void 0 : null === (_salesPlugins$4$sales = _salesPlugins$4.salesPlugin) || void 0 === _salesPlugins$4$sales ? void 0 : null === (_salesPlugins$4$sales2 = _salesPlugins$4$sales.progressPlugin) || void 0 === _salesPlugins$4$sales2 ? void 0 : _salesPlugins$4$sales2.totalNum;
                }
            }
            init() {
                if (this.shouldInit) {
                    const timeout = new _timeout__WEBPACK_IMPORTED_MODULE_1__["default"]({
                        startTime: this.startTime,
                        endTime: this.endTime
                    });
                    const percentage = new _percentage__WEBPACK_IMPORTED_MODULE_2__["default"]({
                        saleNum: this.saleNum,
                        totalNum: this.totalNum
                    });
                    timeout.changeTime();
                    percentage.percentageInit();
                }
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = FlashSale;
    },
    "./src/assets/commons/sales/snippets/flashSale/percentage.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        class Percentage {
            constructor({saleNum, totalNum}) {
                this.saleNum = saleNum;
                this.totalNum = totalNum;
            }
            percentageInit() {
                const percent = `${this.saleNum / this.totalNum * 100}%`;
                $(".flash-sale-percent").each((index => {
                    $($(".flash-sale-percent")[index]).css("width", percent);
                }));
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = Percentage;
    },
    "./src/assets/commons/sales/snippets/flashSale/timeout.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/sales/snippets/flashSale/util.js");
        class Timeout {
            constructor(props) {
                this.startTime = props.startTime;
                this.endTime = props.endTime;
                this.time = 0;
            }
            changeTime() {
                const currentTime = (new Date).getTime();
                if (currentTime >= this.startTime && currentTime <= this.endTime) {
                    this.time = this.endTime - currentTime;
                    setTimeout((() => {
                        this.changeTime();
                    }), 100);
                } else this.time = 0;
                const formatedTime = (0, _util__WEBPACK_IMPORTED_MODULE_0__.formatTime)(this.time);
                $(".timeout-days").each((index => {
                    $($(".timeout-days")[index]).text(formatedTime.days);
                }));
                $(".timeout-hours").each((index => {
                    $($(".timeout-hours")[index]).text(formatedTime.hours);
                }));
                $(".timeout-minutes").each((index => {
                    $($(".timeout-minutes")[index]).text(formatedTime.minutes);
                }));
                $(".timeout-seconds").each((index => {
                    $($(".timeout-seconds")[index]).text(formatedTime.seconds);
                }));
                if (this.time / (24 * 3600 * 1e3) < 1) {
                    $(".first-timeout-item").each((index => {
                        $($(".first-timeout-item")[index]).hide();
                    }));
                    $(".timeout-first-dot").each((index => {
                        $($(".timeout-first-dot")[index]).hide();
                    }));
                }
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = Timeout;
    },
    "./src/assets/commons/sales/snippets/flashSale/util.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            formatTime: () => formatTime
        });
        function formatTime(originTime) {
            const days = originTime / (24 * 3600 * 1e3) >= 10 ? Math.floor(originTime / (24 * 3600 * 1e3)).toString() : `0${Math.floor(originTime / (24 * 3600 * 1e3)).toString()}`;
            const leavel = originTime % (24 * 3600 * 1e3);
            const hours = leavel / (3600 * 1e3) >= 10 ? Math.floor(leavel / (3600 * 1e3)).toString() : `0${Math.floor(leavel / (3600 * 1e3)).toString()}`;
            const leavel2 = leavel % (3600 * 1e3);
            const minutes = leavel2 / (60 * 1e3) >= 10 ? Math.floor(leavel2 / (60 * 1e3)).toString() : `0${Math.floor(leavel2 / (60 * 1e3)).toString()}`;
            const leftSeconds = leavel2 % (60 * 1e3) / 1e3;
            const seconds = leftSeconds >= 10 ? leftSeconds.toFixed(1) : 0 + leftSeconds.toFixed(1);
            return {
                days,
                hours,
                minutes,
                seconds
            };
        }
    },
    "./src/assets/commons/sales/snippets/salesPromotionTags.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/currency/CurrencyConvert.js");
        var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/utils/helper.js");
        var _utils_effectFc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/commons/utils/effectFc.js");
        var _utils_isMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        function handleTagsShow() {
            const $tags = $(".sales__promotion-tags-tag-hook");
            if (!$tags[0]) return;
            if ((0, _utils_isMobile__WEBPACK_IMPORTED_MODULE_4__["default"])()) $tags.css("display", "none").eq(0).css("display", "inline-block"); else $tags.css("display", "inline-block");
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0, _utils_effectFc__WEBPACK_IMPORTED_MODULE_5__["default"])((function(parent) {
            const {useEffect} = this;
            const container = $(parent || document.body);
            const promotionTags = container.find(".sales__promotionTags");
            if (!promotionTags.length) return;
            handleTagsShow();
            if (promotionTags.hasClass("pdp")) {
                let lock = false;
                const timer = null;
                useEffect($(document.body), "on,off", "click", (e => {
                    const {target} = e;
                    const containerDom = promotionTags.get(0);
                    if ($.contains(containerDom, target) || containerDom === target) return;
                    if (promotionTags.hasClass("active")) {
                        promotionTags.removeClass("active");
                        if ("mobile" === _utils_helper__WEBPACK_IMPORTED_MODULE_3__["default"].getPlatform() && lock) {
                            (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
                            lock = false;
                        }
                    }
                }));
                useEffect(promotionTags, "on,off", "click", (() => {
                    promotionTags.toggleClass("active");
                    if ("mobile" === _utils_helper__WEBPACK_IMPORTED_MODULE_3__["default"].getPlatform()) {
                        if (promotionTags.hasClass("active") && !lock) {
                            (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)();
                            lock = true;
                        }
                        if (!promotionTags.hasClass("active") && lock) {
                            lock = false;
                            (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
                        }
                    }
                    if (!(0, _utils_isMobile__WEBPACK_IMPORTED_MODULE_4__["default"])()) if (timer) clearTimeout(timer);
                }));
                useEffect(promotionTags.find(".sales__promotionTags-items-close-hook"), "on,off", "click", (e => {
                    e.stopPropagation();
                    promotionTags.removeClass("active");
                    lock = false;
                    (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
                }));
                useEffect(promotionTags.find(".sales__promotionTags-items"), "on,off", "click", (e => {
                    e.stopPropagation();
                }));
                useEffect(_yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_1__.SL_EventBus, "on,off", "global:platformChange", (() => {
                    if ((0, _utils_isMobile__WEBPACK_IMPORTED_MODULE_4__["default"])() && promotionTags.hasClass("active") && !lock) {
                        (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)();
                        lock = true;
                    } else if (lock) {
                        (0, scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)();
                        lock = false;
                    }
                    handleTagsShow();
                }));
            } else useEffect(promotionTags.find(".sales__promotionTags-switchIcon"), "on,off", "click", (() => {
                promotionTags.toggleClass("active");
            }));
            window.SL_EventBus.on("global:currency:format", (() => {
                const amountNode = promotionTags.find("[data-amount]");
                amountNode.each((function() {
                    $(this).text((0, _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_2__.convertFormat)($(this).data("amount")));
                }));
            }));
        }));
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
        let d = $("i[data-platform]");
        if (!d.get(0)) {
            d = $(`<i data-platform></i>`);
            $(document.body).append(d);
        }
        function isMobile() {
            let dom = $("i[data-platform]");
            if (!dom.get(0)) {
                dom = $(`<i data-platform></i>`);
                $(document.body).append(dom);
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
            delParam: () => delParam
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
    },
    "./src/assets/product/commons/js/createShadowDom.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            shadowDomStyle: () => shadowDomStyle,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const shadowDomStyle = $("<style></style>").attr({
            type: "text/css"
        }).append(`table{border-collapse:collapse}table:not([cellpadding]) td,table:not([cellpadding]) th{padding:.4rem}table:not([border="0"]):not([style*=border-width]) td,table:not([border="0"]):not([style*=border-width]) th{border-width:1px}table:not([border="0"]):not([style*=border-style]) td,table:not([border="0"]):not([style*=border-style]) th{border-style:solid}table:not([border="0"]):not([style*=border-color]) td,table:not([border="0"]):not([style*=border-color]) th{border-color:#ccc}iframe{max-width:100%}img{height:auto;max-width:100%}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}@media screen and (max-width: 750px){table{width: 100%!important}}`);
        const createShadowDom = () => {
            const shadowDom = document.querySelector("[data-node=shadow-dom]");
            if (!shadowDom) return;
            const shadowContent = $(shadowDom).prev("[data-node=shadow-content]");
            $(shadowDom).attr("class", "shadow-dom");
            if (shadowContent.get(0)) {
                shadowContent.children(".mce-content-body").css("word-break", "break-word");
                shadowContent.prepend($("<style></style>").attr({
                    type: "text/css"
                }).append(`body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;line-height:1.4;margin:1rem}table{border-collapse:collapse}table:not([cellpadding]) td,table:not([cellpadding]) th{padding:.4rem}table:not([border="0"]):not([style*=border-width]) td,table:not([border="0"]):not([style*=border-width]) th{border-width:1px}table:not([border="0"]):not([style*=border-style]) td,table:not([border="0"]):not([style*=border-style]) th{border-style:solid}table:not([border="0"]):not([style*=border-color]) td,table:not([border="0"]):not([style*=border-color]) th{border-color:#ccc}iframe{max-width:100%}img{height:auto;max-width:100%}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}@media screen and (max-width: 750px){table{width: 100%}}`));
                const shadowRoot = shadowDom.attachShadow({
                    mode: "open"
                });
                shadowRoot.append(shadowContent.get(0));
                $(shadowDom).removeAttr("data-node");
                shadowContent.removeAttr("data-node");
            }
            shadowDom.__updateLazyExtraElements__();
        };
        const __WEBPACK_DEFAULT_EXPORT__ = createShadowDom;
    },
    "./src/assets/product/commons/js/preview-modal/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => _preview_modal__WEBPACK_IMPORTED_MODULE_0__["default"]
        });
        var _preview_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/product/commons/js/preview-modal/preview-modal.js");
    },
    "./src/assets/product/commons/js/preview-modal/preview-modal.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/axios/index.js");
        var axios__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
        var _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/events/product/quickView-click/index.js");
        var _commons_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/components/modal/index.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var _detail_js_product_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/product/detail/js/product-preview.js");
        var _commons_utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/commons/utils/url.js");
        function modalExpose(modalPrefix) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report("60006263", {
                event_name: "view",
                page: "productRecommendModal" === modalPrefix ? "123" : _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_0__["default"][window.SL_State.get("templateAlias")]
            });
        }
        function fetchDetail(uniqueKey, params) {
            return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/products/${uniqueKey}`, {
                params: {
                    ...params,
                    view: "modal",
                    preview: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_6__.getUrlQuery)("preview"),
                    themeId: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_6__.getUrlQuery)("themeId"),
                    ignoreRedirect: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_6__.getUrlQuery)("ignoreRedirect"),
                    engineType: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_6__.getUrlQuery)("engineType"),
                    sourcePage: window.SL_State.get("templateAlias")
                }
            });
        }
        function createContent() {
            return $('<div class="product-preview-modal-content" data-scroll-lock-scrollable></div>');
        }
        const modalMap = {};
        const previewMap = {};
        function previewModal({spuSeq, uniqueKey, query}) {
            let modalPrefix = "productModal_";
            let queryObj = {};
            try {
                queryObj = {
                    ...query
                };
                modalPrefix = queryObj.modalPrefix || "productModal_";
            } catch (e) {
                console.log(e);
            }
            if (modalMap[spuSeq]) {
                var _modalMap$spuSeq, _previewMap$spuSeq;
                null === (_modalMap$spuSeq = modalMap[spuSeq]) || void 0 === _modalMap$spuSeq ? void 0 : _modalMap$spuSeq.show();
                null === (_previewMap$spuSeq = previewMap[spuSeq]) || void 0 === _previewMap$spuSeq ? void 0 : _previewMap$spuSeq.productEventRepeat();
                modalExpose(modalPrefix);
                (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_2__["default"])({
                    type: "change",
                    eventName: "OPEN_QUICKVIEW_EVENT",
                    spuSeq,
                    modal: modalMap[spuSeq],
                    preview: {
                        skuTrade: previewMap[spuSeq].skuTrade,
                        quantityStepper: previewMap[spuSeq].quantityStepper
                    },
                    $el: document.getElementById(modalMap[spuSeq].modalId)
                });
            } else {
                const children = createContent();
                const modal = new _commons_components_modal__WEBPACK_IMPORTED_MODULE_3__.ModalWithHtml({
                    children,
                    containerClassName: "product-preview-modal-container",
                    bodyClassName: "product-preview-modal-body",
                    zIndex: 128,
                    closeCallback: () => {
                        (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_2__["default"])({
                            eventName: "CLOSE_QUICKVIEW_EVENT",
                            spuSeq,
                            $el: document.getElementById(modalMap[spuSeq].modalId)
                        });
                    }
                });
                modal.show();
                new _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__.Loading({
                    target: children,
                    loadingColor: "currentColor",
                    duration: -1
                }).open();
                fetchDetail(uniqueKey, queryObj).then((res => {
                    children.html('<div class="product-preview-modal-top-space"></div>').append(res.data);
                    modalExpose(modalPrefix);
                    window.SL_EventBus.emit("global.activeIcon.show", {
                        type: "vip"
                    });
                    try {
                        const preview = (0, _detail_js_product_preview__WEBPACK_IMPORTED_MODULE_5__["default"])({
                            id: `${modalPrefix}${spuSeq}`,
                            statePath: `${modalPrefix}${spuSeq}`,
                            offsetTop: 48,
                            container: modal.$modal.find(".product-preview-modal-body"),
                            onAddSuccess: () => {
                                modal.hide();
                            }
                        });
                        modalMap[spuSeq] = modal;
                        previewMap[spuSeq] = preview;
                        (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_2__["default"])({
                            type: "init",
                            eventName: "OPEN_QUICKVIEW_EVENT",
                            spuSeq,
                            preview: {
                                skuTrade: preview.skuTrade,
                                quantityStepper: preview.quantityStepper
                            },
                            modal,
                            $el: document.getElementById(modalMap[spuSeq].modalId)
                        });
                    } catch (e) {
                        setTimeout((() => {
                            throw e;
                        }));
                    }
                })).catch((() => {
                    (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"]).open((0, 
                    _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("common.productError"), 3e3);
                    modal.hide();
                    modal.destroy();
                }));
            }
            return modalMap[spuSeq];
        }
        const __WEBPACK_DEFAULT_EXPORT__ = previewModal;
    },
    "./src/assets/product/commons/js/product-info.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/utils/convertPrice.js");
        let uniqueId = "";
        const priceWrap = ".product-info-price_";
        const priceSellWrap = ".product-price-sales_";
        const priceOriginWrap = ".product-price-origin_";
        const priceVipWrap = ".product-price-vip_";
        const priceDiscountWrap = ".product-price-discount_";
        function getDiscount(showDiscount, sku) {
            const $el = $(`${priceDiscountWrap}${uniqueId}`);
            const discountSettingStyle = null === $el || void 0 === $el ? void 0 : $el.attr("product_discount_style");
            const ratioCalc = Math.round(100 * (1 - sku.price / sku.originPrice));
            const discountText = "number" === discountSettingStyle ? sku.originPrice - sku.price : ratioCalc;
            let isHidden = true;
            if (showDiscount && discountText > 0) if ("number" === discountSettingStyle) {
                const discount = sku.originPrice - sku.price;
                if (discount > 0) {
                    const {get: getPriceContent} = (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_0__.processPrice)($el, discount, {
                        isSavePrice: true
                    });
                    isHidden = false;
                    $el.html((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("productList.container.listItem.saveByJs", {
                        priceDom: getPriceContent()
                    }));
                } else isHidden = true;
            } else {
                isHidden = false;
                $el.html((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("productList.container.listItem.saveRatio", {
                    price: ratioCalc
                }));
            } else isHidden = true;
            $el.toggleClass("hide", isHidden);
        }
        const setSkuPrice = (spuSoldout, activeSku = {}) => {
            var _$;
            const discountSetting = null === (_$ = $(`${priceWrap}${uniqueId}`)) || void 0 === _$ ? void 0 : _$.attr("product_discount");
            const {originPrice: oriPrice, price, showMemberMark} = activeSku;
            const originPrice = oriPrice > price ? oriPrice : "";
            const showDiscount = discountSetting && !spuSoldout;
            const $priceWrapperEl = $(`.price.product-info-price_${uniqueId}`);
            if (oriPrice > price) {
                if (!$priceWrapperEl.hasClass("product-info-price_hasDiscount")) $priceWrapperEl.addClass("product-info-price_hasDiscount");
            } else $priceWrapperEl.removeClass("product-info-price_hasDiscount");
            (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_0__.processPrice)($(`${priceSellWrap}${uniqueId}`), price).render();
            if (showMemberMark) $(`${priceVipWrap}${uniqueId}`).removeClass("hide"); else $(`${priceVipWrap}${uniqueId}`).addClass("hide");
            if (originPrice) {
                (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_0__.processPrice)($(`${priceOriginWrap}${uniqueId}`), originPrice).render();
                $(`${priceOriginWrap}${uniqueId}`).removeClass("hide");
            } else $(`${priceOriginWrap}${uniqueId}`).addClass("hide");
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
    "./src/assets/product/commons/js/product-item.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/state-selector.js");
        var _preview_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/product/commons/js/preview-modal/index.js");
        var _quick_add_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/product/commons/js/quick-add-modal.js");
        var _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/utils/convertPrice.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_0__["default"];
        const isPad = _yy_sl_theme_shared_utils_state_selector__WEBPACK_IMPORTED_MODULE_1__.SL_State.get("request.is_mobile") || void 0 !== document.ontouchmove;
        $("body").delegate(".js-product-item-quick-view", "click", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            const spuSeq = $(this).data("spu-seq");
            const uniqueKey = $(this).data("unique-key");
            const query = $(this).data("query");
            (0, _preview_modal__WEBPACK_IMPORTED_MODULE_2__["default"])({
                spuSeq,
                uniqueKey,
                query
            });
        }));
        $("body").on("click", ".js-product-item-quick-add", (e => {
            e.preventDefault();
            e.stopPropagation();
            const $current = $(e.currentTarget);
            const spuSeq = $current.data("spu-seq");
            const uniqueKey = $current.data("unique-key");
            (0, _quick_add_modal__WEBPACK_IMPORTED_MODULE_3__["default"])({
                spuSeq,
                uniqueKey,
                $button: $current
            });
        }));
        $("body").on("click", ".js-product-item-sold-out", (e => {
            e.preventDefault();
            e.stopPropagation();
        }));
        window.SL_EventBus.on("global:currency:format", (({currencyCode: code, lang}) => {
            const priceItems = $("[data-product-item-price]");
            for (const priceItem of priceItems) {
                const priceValue = $(priceItem).data("product-item-price");
                const isSavePrice = $(priceItem).data("product-item-save-price");
                (0, _commons_utils_convertPrice__WEBPACK_IMPORTED_MODULE_4__.processPrice)($(priceItem), priceValue, {
                    isSavePrice,
                    code,
                    lang
                }).render();
            }
        }));
        if (isPad) {
            $(".product-item__inner-wrap .product-item__actions").css({
                display: "block"
            });
            $(".product-item__inner-wrap").removeClass("js-product-inner-wrap");
            $("#collectionsAjaxInner").addClass("pad");
            $(".product-item__wrapper").addClass("pad");
        }
        $("body").on("mouseenter", ".js-product-inner-wrap", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            const $item = $(this);
            const $parent = $item.parent();
            const $btns = $item.find(".js-product-item__actions");
            const noHoverAnimation = $item.data("no-hover-ani-effect");
            if ($btns.hasClass("show-middle-btn") || noHoverAnimation) return;
            window.clearTimeout(+$item.attr("data-timer"));
            if ($parent.children(".js-bg").length) $item.css("height", `${$item.find(".js-product-item").outerHeight()}px`); else {
                const $bg = $('<div class="js-bg" style="width: 100%;"></div>');
                $bg.css("height", `${$item.outerHeight()}px`).appendTo($parent);
                $item.css("position", "absolute").css("top", "0").css("left", "0").css("width", "100%").css("z-index", $item.attr("data-hover-z-index")).css("box-shadow", "0px 10px 50px rgba(0, 0, 0, 0.08)");
                $btns.css("display", "block");
                $item.css("height", `${$bg.outerHeight(true)}px`);
                $item.css("height", `${$item.find(".js-product-item").outerHeight()}px`);
            }
        }));
        $("body").on("mouseleave", ".js-product-inner-wrap", (function(e) {
            e.preventDefault();
            e.stopPropagation();
            const $item = $(this);
            const $parent = $item.parent();
            const $btns = $item.find(".js-product-item__actions");
            if ($btns.hasClass("show-middle-btn")) return;
            const $bg = $parent.children(".js-bg");
            window.clearTimeout(+$item.attr("data-timer"));
            $item.css("height", `${$bg.outerHeight()}px`);
            $item.attr("data-timer", setTimeout((function() {
                $item.removeAttr("style");
                $bg.remove();
                $btns.removeAttr("style");
            }), 300));
        }));
        function thirdPartReport({id, name, price}) {
            window.SL_EventBus.emit("global:thirdPartReport", {
                GA: [ [ "event", "select_content", {
                    content_type: "product",
                    items: [ {
                        id,
                        name,
                        price: formatCurrency(price)
                    } ]
                } ] ]
            });
        }
        $(document.body).on("click", ".product-item", (function() {
            thirdPartReport({
                id: $(this).data("skuId"),
                name: $(this).data("name"),
                price: $(this).data("price")
            });
        }));
    },
    "./src/assets/product/commons/js/quick-add-modal.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => quickAddModal
        });
        var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/axios/index.js");
        var axios__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
        var scroll_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _yy_sl_theme_shared_events_data_report_view_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/events/data-report/view-content/index.js");
        var _yy_sl_theme_shared_events_product_sku_change__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/browser/events/product/sku-change/index.js");
        var _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/events/product/quickView-click/index.js");
        var _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var _commons_components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/assets/commons/components/modal/index.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var _commons_utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/assets/commons/utils/url.js");
        var _detail_js_product_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/assets/product/detail/js/product-button.js");
        var _detail_js_product_button_report__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/assets/product/detail/js/product-button-report.js");
        var _detail_js_product_quantity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/assets/product/detail/js/product-quantity.js");
        var _detail_js_sku_trade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/assets/product/detail/js/sku-trade.js");
        var _product_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/assets/product/commons/js/product-info.js");
        var _commons_cart_globalEvent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/assets/commons/cart/globalEvent.js");
        var _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_4__["default"];
        const emitProductSkuChange = data => {
            try {
                var _window, _window$SL_State;
                (0, _yy_sl_theme_shared_events_product_sku_change__WEBPACK_IMPORTED_MODULE_6__["default"])({
                    currency: null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SL_State = _window.SL_State) || void 0 === _window$SL_State ? void 0 : _window$SL_State.get("storeInfo.currency"),
                    ...data
                });
            } catch (e) {
                console.error(e);
            }
        };
        const emitViewContent = data => {
            try {
                (0, _yy_sl_theme_shared_events_data_report_view_content__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
            } catch (e) {
                console.error(e);
            }
        };
        const modalInstanceMap = new Map;
        const previewInstanceMap = new Map;
        const quickAddLoadingClassName = "product-item__btn--loading";
        function modalExpose(page) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report("60006263", {
                event_name: "view",
                page
            });
        }
        const getSkuChangeData = (skuInfo = {}) => {
            const {spuSeq, discount, skuSeq, price, originPrice, stock, weight, weightUnit, available, shelves, skuAttributeIds, imageList, soldOut, allowOversold, imageBeanList} = skuInfo;
            return {
                spuSeq,
                discount,
                skuSeq,
                price: formatCurrency(price || 0),
                originPrice: formatCurrency(originPrice || 0),
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
        async function quickAddModal(data) {
            const {spuSeq, uniqueKey, $button} = data;
            let modalPrefix = "product_quick_add_";
            let queryObj = {};
            const query = $button.data("query");
            try {
                queryObj = {
                    ...query
                };
                modalPrefix = queryObj.modalPrefix ? `${queryObj.modalPrefix}_product_quick_add_` : "product_quick_add_";
            } catch (e) {
                console.log(e);
            }
            const page = modalPrefix.startsWith("productRecommendModal") ? "123" : _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_8__["default"][window.SL_State.get("templateAlias")];
            function toggleAddLoading(isLoading) {
                $button.toggleClass(quickAddLoadingClassName, isLoading);
            }
            if ($button.hasClass(quickAddLoadingClassName)) return;
            try {
                toggleAddLoading(true);
                const res = await getProductDetail(spuSeq);
                if ("SUCCESS" === res.code) {
                    var _res$data$sku$skuList, _res$data, _res$data$sku, _res$data2, _res$data2$spu;
                    const productInfo = res.data;
                    const skuList = null !== (_res$data$sku$skuList = null === (_res$data = res.data) || void 0 === _res$data ? void 0 : null === (_res$data$sku = _res$data.sku) || void 0 === _res$data$sku ? void 0 : _res$data$sku.skuList) && void 0 !== _res$data$sku$skuList ? _res$data$sku$skuList : [];
                    const isSoldOut = null === (_res$data2 = res.data) || void 0 === _res$data2 ? void 0 : null === (_res$data2$spu = _res$data2.spu) || void 0 === _res$data2$spu ? void 0 : _res$data2$spu.soldOut;
                    const isSingleSku = Array.isArray(skuList) && 1 === skuList.length;
                    if (isSoldOut) {
                        (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                        _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("common.soldOut"), 3e3);
                        return;
                    }
                    modalExpose(page);
                    if (isSingleSku) {
                        var _productInfo$spu, _window2, _window2$SL_State;
                        const skuInfo = skuList[0];
                        addToCart({
                            sku: skuInfo,
                            spu: null === productInfo || void 0 === productInfo ? void 0 : productInfo.spu,
                            toggleAddLoading,
                            hdReportPage: page
                        });
                        emitProductSkuChange({
                            type: "init",
                            quantity: 1,
                            ...getSkuChangeData(skuInfo)
                        });
                        emitViewContent({
                            content_spu_id: null === productInfo || void 0 === productInfo ? void 0 : null === (_productInfo$spu = productInfo.spu) || void 0 === _productInfo$spu ? void 0 : _productInfo$spu.spuSeq,
                            content_sku_id: null === skuInfo || void 0 === skuInfo ? void 0 : skuInfo.skuSeq,
                            content_category: "",
                            currency: null === (_window2 = window) || void 0 === _window2 ? void 0 : null === (_window2$SL_State = _window2.SL_State) || void 0 === _window2$SL_State ? void 0 : _window2$SL_State.get("storeInfo.currency"),
                            value: formatCurrency((null === skuInfo || void 0 === skuInfo ? void 0 : skuInfo.price) || 0),
                            quantity: 1,
                            price: formatCurrency((null === skuInfo || void 0 === skuInfo ? void 0 : skuInfo.price) || 0)
                        });
                    } else showModal({
                        spuSeq,
                        uniqueKey,
                        modalPrefix
                    });
                } else (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("common.productError"), 3e3);
            } catch (err) {
                (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("common.productError"), 3e3);
            } finally {
                toggleAddLoading(false);
            }
        }
        async function showModal({spuSeq, uniqueKey, modalPrefix}) {
            if (modalInstanceMap.has(spuSeq)) {
                var _modalInstanceMap$get, _previewInstanceMap$g, _modalInstanceMap$get2;
                null === (_modalInstanceMap$get = modalInstanceMap.get(spuSeq)) || void 0 === _modalInstanceMap$get ? void 0 : _modalInstanceMap$get.show();
                null === (_previewInstanceMap$g = previewInstanceMap.get(spuSeq)) || void 0 === _previewInstanceMap$g ? void 0 : _previewInstanceMap$g.emitEvent();
                (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_7__["default"])({
                    type: "change",
                    eventName: "OPEN_QUICKVIEW_ADDTOCART",
                    spuSeq,
                    modal: modalInstanceMap.get(spuSeq),
                    preview: {
                        skuTrade: previewInstanceMap.get(spuSeq).skuTrade,
                        quantityStepper: previewInstanceMap.get(spuSeq).quantityStepper
                    },
                    $el: document.getElementById(null === (_modalInstanceMap$get2 = modalInstanceMap.get(spuSeq)) || void 0 === _modalInstanceMap$get2 ? void 0 : _modalInstanceMap$get2.modalId)
                });
            } else {
                const children = $('<div class="quick-add-modal__outerWrapper"></div>');
                const modal = new _commons_components_modal__WEBPACK_IMPORTED_MODULE_9__.ModalWithHtml({
                    children,
                    containerClassName: "quick-add-modal__container",
                    zIndex: 128,
                    closeCallback: () => {
                        var _modalInstanceMap$get3;
                        (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_7__["default"])({
                            eventName: "CLOSE_QUICKVIEW_ADDTOCART",
                            spuSeq,
                            $el: document.getElementById(null === (_modalInstanceMap$get3 = modalInstanceMap.get(spuSeq)) || void 0 === _modalInstanceMap$get3 ? void 0 : _modalInstanceMap$get3.modalId)
                        });
                    }
                });
                modal.show();
                modal.$modal.get(0).style.setProperty("--max-body-height", `${.8 * window.innerHeight}px`);
                const loading = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__.Loading({
                    target: modal.$modal.find(".mp-modal__body"),
                    loadingColor: "currentColor",
                    duration: -1
                });
                loading.open();
                try {
                    var _modalInstanceMap$get4;
                    const res = await fetchModalContent(uniqueKey, modalPrefix);
                    children.empty().append(res.data);
                    initQuickAddModal(`${modalPrefix}${spuSeq}`, children, modal, spuSeq);
                    modalInstanceMap.set(spuSeq, modal);
                    (0, _yy_sl_theme_shared_events_product_quickView_click__WEBPACK_IMPORTED_MODULE_7__["default"])({
                        type: "init",
                        eventName: "OPEN_QUICKVIEW_ADDTOCART",
                        spuSeq,
                        modal: modalInstanceMap.get(spuSeq),
                        preview: {
                            skuTrade: previewInstanceMap.get(spuSeq).skuTrade,
                            quantityStepper: previewInstanceMap.get(spuSeq).quantityStepper
                        },
                        $el: document.getElementById(null === (_modalInstanceMap$get4 = modalInstanceMap.get(spuSeq)) || void 0 === _modalInstanceMap$get4 ? void 0 : _modalInstanceMap$get4.modalId)
                    });
                } catch (err) {
                    (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                    _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("common.productError"), 3e3);
                    modal.hide();
                } finally {
                    loading.close();
                    window.SL_EventBus.emit("global.activeIcon.show", {
                        type: "vip"
                    });
                }
            }
        }
        function initQuickAddModal(id, el, modal, spuSeq) {
            const sku = window.SL_State.get(`${id}.sku`);
            const spu = window.SL_State.get(`${id}.spu`);
            initWidgets({
                id,
                sku,
                spu
            }, el, modal, spuSeq);
        }
        function initWidgets({id, sku, spu}, el, modal, spuSeq) {
            let activeSkuCache = {};
            const ButtonGroup = new _detail_js_product_button__WEBPACK_IMPORTED_MODULE_12__["default"]({
                id,
                cartRoot: `.pdp_add_to_cart_${id}`,
                buyNowRoot: `.pdp_buy_now_${id}`,
                payPayId: `pdp_paypal_${id}`,
                soldOutRoot: `.pdp_sold_out_${id}`,
                spu,
                sku,
                onAddSuccess: () => {
                    modal.hide();
                }
            });
            const quantityStepper = new _detail_js_product_quantity__WEBPACK_IMPORTED_MODULE_14__["default"]({
                id,
                sku,
                spu,
                onChange: num => {
                    ButtonGroup.setActiveSkuNum(num);
                    window.SL_EventBus.emit("product:count:change", [ num, id ]);
                }
            });
            const skuTrade = (0, _detail_js_sku_trade__WEBPACK_IMPORTED_MODULE_15__["default"])({
                id,
                sku,
                spu,
                mixins: window.skuMixins,
                onInit: (trade, activeSku) => {
                    var _window3, _window3$SL_State;
                    activeSkuCache = activeSku;
                    let content_sku_id = "";
                    let price = null;
                    if (activeSku) {
                        var _activeSkuCache, _quantityStepper$skuS, _quantityStepper$skuS2;
                        changeActiveSku(activeSku);
                        content_sku_id = null === activeSku || void 0 === activeSku ? void 0 : activeSku.skuSeq;
                        price = formatCurrency((null === (_activeSkuCache = activeSkuCache) || void 0 === _activeSkuCache ? void 0 : _activeSkuCache.price) || 0);
                        emitProductSkuChange({
                            type: "init",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS ? void 0 : null === (_quantityStepper$skuS2 = _quantityStepper$skuS.data) || void 0 === _quantityStepper$skuS2 ? void 0 : _quantityStepper$skuS2.value) || 1,
                            ...getSkuChangeData(activeSku)
                        });
                    }
                    emitViewContent({
                        content_spu_id: spu.spuSeq,
                        content_sku_id,
                        content_category: "",
                        currency: null === (_window3 = window) || void 0 === _window3 ? void 0 : null === (_window3$SL_State = _window3.SL_State) || void 0 === _window3$SL_State ? void 0 : _window3$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price
                    });
                },
                onChange: activeSku => {
                    activeSkuCache = activeSku;
                    if (activeSku) {
                        var _quantityStepper$skuS3, _quantityStepper$skuS4;
                        emitProductSkuChange({
                            type: "change",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS3 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS3 ? void 0 : null === (_quantityStepper$skuS4 = _quantityStepper$skuS3.data) || void 0 === _quantityStepper$skuS4 ? void 0 : _quantityStepper$skuS4.value) || 1,
                            ...getSkuChangeData(activeSku)
                        });
                    }
                    if (!activeSku && !quantityStepper.activeSku) return;
                    (0, _product_info__WEBPACK_IMPORTED_MODULE_16__["default"])(id, id, activeSku);
                    changeActiveSku(activeSku);
                }
            });
            previewInstanceMap.set(spuSeq, {
                skuTrade,
                quantityStepper,
                emitEvent: () => {
                    var _window4, _window4$SL_State;
                    let content_sku_id = "";
                    let price = null;
                    if (activeSkuCache) {
                        var _activeSkuCache2, _activeSkuCache3, _quantityStepper$skuS5, _quantityStepper$skuS6;
                        content_sku_id = null === (_activeSkuCache2 = activeSkuCache) || void 0 === _activeSkuCache2 ? void 0 : _activeSkuCache2.skuSeq;
                        price = formatCurrency((null === (_activeSkuCache3 = activeSkuCache) || void 0 === _activeSkuCache3 ? void 0 : _activeSkuCache3.price) || 0);
                        emitProductSkuChange({
                            type: "init",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS5 = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS5 ? void 0 : null === (_quantityStepper$skuS6 = _quantityStepper$skuS5.data) || void 0 === _quantityStepper$skuS6 ? void 0 : _quantityStepper$skuS6.value) || 1,
                            ...getSkuChangeData(activeSkuCache)
                        });
                    }
                    emitViewContent({
                        content_spu_id: spu.spuSeq,
                        content_sku_id,
                        content_category: "",
                        currency: null === (_window4 = window) || void 0 === _window4 ? void 0 : null === (_window4$SL_State = _window4.SL_State) || void 0 === _window4$SL_State ? void 0 : _window4$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price
                    });
                }
            });
            listenCurrencyCodeChange(id, id, quantityStepper);
            function changeActiveSku(activeSku) {
                ButtonGroup.setActiveSku(activeSku);
                quantityStepper.setActiveSku(activeSku);
                if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_18__["default"])()) {
                    const $footer = el.find(".quick-add-modal__footer");
                    const paddingBottom = $footer.outerHeight() + 10;
                    (0, scroll_lock__WEBPACK_IMPORTED_MODULE_1__.addLockableTarget)($footer);
                    el.find(".quick-add-modal__body").css({
                        "padding-bottom": paddingBottom
                    });
                }
            }
        }
        function addToCart({sku, spu, toggleAddLoading, hdReportPage}) {
            const activeSku = sku ? {
                ...sku,
                num: 1,
                name: spu.title
            } : null;
            if (isPreview()) {
                (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("productDetail.previewLinkToast"));
                return;
            }
            if (!activeSku) {
                (new _commons_components_toast__WEBPACK_IMPORTED_MODULE_10__["default"]).open((0, 
                _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_19__.t)("productList.container.tradePopup.error4"));
                return;
            }
            toggleAddLoading(true);
            const {spuSeq: spuId, skuSeq: skuId, num, name, price} = activeSku;
            const eventID = (0, _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_3__.getEventID)();
            const hdReportData = {
                page: hdReportPage,
                spuId,
                skuId,
                name,
                price,
                num
            };
            window.SL_EventBus.emit(_commons_cart_globalEvent__WEBPACK_IMPORTED_MODULE_17__.ADD_TO_CART, {
                spuId,
                skuId,
                num,
                price,
                name,
                eventID: `addToCart${eventID}`,
                error: () => {
                    (0, _detail_js_product_button_report__WEBPACK_IMPORTED_MODULE_13__.addToCartHdReport)({
                        ...hdReportData,
                        event_status: 0
                    });
                },
                success: () => {
                    (0, _detail_js_product_button_report__WEBPACK_IMPORTED_MODULE_13__.addToCartHdReport)({
                        ...hdReportData,
                        event_status: 1
                    });
                    (0, _detail_js_product_button_report__WEBPACK_IMPORTED_MODULE_13__.addToCartThirdReport)({
                        spuId,
                        name,
                        price,
                        skuId,
                        num,
                        eventID
                    });
                },
                complete: () => {
                    toggleAddLoading(false);
                }
            });
        }
        function listenCurrencyCodeChange(id, statePath, quantityStepper) {
            window.SL_EventBus.on("global:currency:format", (() => {
                (0, _product_info__WEBPACK_IMPORTED_MODULE_16__["default"])(id, statePath, quantityStepper.activeSku);
            }));
        }
        function isPreview() {
            const currentUrl = window.location.pathname;
            return /^[/（]preview[/）].*/.test(currentUrl);
        }
        function fetchModalContent(uniqueKey, modalPrefix) {
            let recommendQuery = {};
            if (modalPrefix.startsWith("productRecommendModal")) recommendQuery = {
                modalPrefix: "productRecommendModal"
            };
            return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/products/${uniqueKey}`, {
                params: {
                    view: "quick-add-modal",
                    preview: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_11__.getUrlQuery)("preview"),
                    themeId: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_11__.getUrlQuery)("themeId"),
                    ignoreRedirect: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_11__.getUrlQuery)("ignoreRedirect"),
                    engineType: (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_11__.getUrlQuery)("engineType"),
                    sourcePage: window.SL_State.get("templateAlias"),
                    ...recommendQuery
                }
            });
        }
        function getProductDetail(spuSeq) {
            return _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/product/detail/query`, {
                params: {
                    spuSeq
                }
            });
        }
    },
    "./src/assets/product/commons/js/sku-stepper.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        class SkuStepper {
            constructor({root, value, min, max, domReady, disabled, onChange}) {
                this.root = root;
                this.data = {
                    min,
                    max,
                    disabled,
                    value
                };
                this.onChange = onChange;
                this.init(domReady);
            }
            init(domReady) {
                if (domReady) {
                    this.$stepper = $(this.root);
                    this.initEvent();
                } else this.createAndInitDom();
                this.toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_0__["default"];
            }
            initEvent() {
                if (this.data.disabled) return;
                this.$stepper.children(".stepper-before").on("click", (() => {
                    if (this.data.min < this.data.value) {
                        this.data.value -= 1;
                        this.render();
                        window.SL_EventBus.emit("product:quantity:minus", [ this.data.value, this.root ]);
                    }
                }));
                this.$stepper.children(".stepper-after").on("click", (() => {
                    if (this.data.value < this.data.max) {
                        this.data.value += 1;
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
                            this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("common.stock-limit", {
                                stock: this.data.max
                            }), 1e3);
                        }
                    } else if (this.data.min > value) this.data.value = this.data.min; else isReset = 0;
                    window.SL_EventBus.emit("product:quantity:modify", [ this.data.value, overStockLimit, this.root ]);
                    if (isReset) this.render();
                }));
            }
            createAndInitDom() {
                $(this.root).html(`<div>stepper</div>`);
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
        const __WEBPACK_DEFAULT_EXPORT__ = SkuStepper;
    },
    "./src/assets/product/commons/js/sku-trade/base-sku-trade.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => BaseSkuTrade
        });
        var _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        var _utils_sku_skuUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/utils/sku/skuUtil.js");
        var _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/product/utils/sku/skuFilter.js");
        class BaseSkuTrade {
            constructor({sku, spu, initialSkuSeq, dataPool, root, domReady, onInit, onChange, onDestory, mixins}) {
                this.mixins = mixins;
                this.root = $(root);
                if (dataPool) this.dataPool = dataPool; else this.dataPool = new _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_0__["default"];
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
                    this.dataPool.skuUtil = new _utils_sku_skuUtil__WEBPACK_IMPORTED_MODULE_1__["default"];
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
                const {validSkuMap, invalidSkuMap} = (0, _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__.getSkuComMap)(this.dataPool.sku.skuList);
                this.dataPool.validSkuMap = this.dataPool.skuUtil.initSku(validSkuMap);
                this.dataPool.invalidSkuMap = invalidSkuMap;
            }
            initAttrArray() {
                this.dataPool.attrArray = (0, _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__.transSkuSpecList)(this.dataPool.sku.skuAttributeMap);
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
                        var _this$dataPool$sku$sk, _this$dataPool$sku$sk2;
                        const filterSkuList = this.isPreview() ? this.dataPool.sku.skuList : null === (_this$dataPool$sku$sk = this.dataPool.sku.skuList) || void 0 === _this$dataPool$sku$sk ? void 0 : null === (_this$dataPool$sku$sk2 = _this$dataPool$sku$sk.filter) || void 0 === _this$dataPool$sku$sk2 ? void 0 : _this$dataPool$sku$sk2.call(_this$dataPool$sku$sk, (item => item.available));
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
                    var _this$dataPool$sku$sk3;
                    return (null === (_this$dataPool$sku$sk3 = this.dataPool.sku.skuList) || void 0 === _this$dataPool$sku$sk3 ? void 0 : _this$dataPool$sku$sk3[0]) || null;
                }
                if ("multi" === this.dataPool.skuType) if (this.dataPool.currentSpecList.filter(Boolean).length === this.dataPool.attrArray.length) return (0, 
                _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__.getSku)(this.dataPool.currentSpecList, this.dataPool.validSkuMap, this.dataPool.sku.skuList) || (0, 
                _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__.getSku)(this.dataPool.currentSpecList, this.dataPool.invalidSkuMap, this.dataPool.sku.skuList) || null;
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
                return (0, _utils_sku_skuFilter__WEBPACK_IMPORTED_MODULE_2__.getAttrValue)(this.dataPool.attrArray, this.dataPool.currentSpecList[index], index);
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
    },
    "./src/assets/product/commons/js/sku-trade/sku-trade-flatten.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _base_sku_trade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/product/commons/js/sku-trade/base-sku-trade.js");
        class SkuTrade extends _base_sku_trade__WEBPACK_IMPORTED_MODULE_0__["default"] {
            getAttrValueName(index) {
                var _this$getAttrValue;
                return null === (_this$getAttrValue = this.getAttrValue(index)) || void 0 === _this$getAttrValue ? void 0 : _this$getAttrValue.name;
            }
            initDom() {
                this.root.children(".spec-box").each(((_, el) => {
                    const box = $(el);
                    const index = box.data("index");
                    box.children(".attr-box").children(".attr-value").each(((__, valueEl) => {
                        const valueJQ = $(valueEl);
                        const i = valueJQ.data("index");
                        valueJQ.on("click", (() => {
                            if (!valueJQ.prop("disabled")) this.clickAttr(index, i);
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
                        const specBox = $('<div class="spec-box"></div>');
                        specBox.data("index", index);
                        specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`);
                        const attrBox = $('<div class="attr-box body3"></div>');
                        specBox.append(attrBox);
                        spec.specAttrList.forEach(((value, i) => {
                            const {imgUrl} = value;
                            let valueJQ;
                            if (imgUrl) {
                                valueJQ = $(`<div class="attr-value with-img"><img class="value-img" src="${imgUrl}"></div>`);
                                if (!spec.onlyShowAttrImg) valueJQ.append(`<span class="value-text">${value.name}</span>`); else valueJQ.tooltip({
                                    title: value.name
                                });
                            } else valueJQ = $(`<div class="attr-value"><span>${value.name}</span></div>`);
                            valueJQ.data("index", i);
                            attrBox.append(valueJQ);
                            valueJQ.on("click", (() => {
                                if (!valueJQ.prop("disabled")) this.clickAttr(index, i);
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
                    const boxEl = $(el);
                    const valueEls = boxEl.children(".attr-box").children(".attr-value");
                    const index = boxEl.data("index");
                    const nameItem = this.dataPool.attrArray[index];
                    if (nameItem.onlyShowAttrImg) {
                        const attrValue = this.getAttrValueName(index);
                        if (attrValue) boxEl.find(".spec-name").text(`${nameItem.specName}：${attrValue}`); else boxEl.find(".spec-name").text(nameItem.specName);
                    }
                    valueEls.each(((__, el_) => {
                        const valueEl = $(el_);
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
        const __WEBPACK_DEFAULT_EXPORT__ = SkuTrade;
    },
    "./src/assets/product/commons/js/sku-trade/sku-trade-select.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/scroll-lock/dist/scroll-lock.js");
        var _base_sku_trade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/assets/product/commons/js/sku-trade/base-sku-trade.js");
        var _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        class SkuTradeSelect extends _base_sku_trade__WEBPACK_IMPORTED_MODULE_2__["default"] {
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
                    $(window).off("click", this.closeItem);
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
                    $(window).on("click", this.closeItem);
                };
            }
            initFirstChecked() {
                super.initFirstChecked(true);
            }
            createPopupDom() {
                const that = this;
                const popupId = `skutradeselectpopup_${Date.now()}`;
                this.popup = $(`<div id="${popupId}" class="product-sku-trade-select-popup"><div class="select-options body-font select-popup"><div><div>`).on("click", (e => {
                    if (e.target.classList.contains("product-sku-trade-select-popup")) this.closeItem();
                    e.stopPropagation();
                }));
                this.popup.children(".select-popup").on("click", ".select-item", (function(e) {
                    e.stopPropagation();
                    const i = $(this).data("index");
                    const active = $(this).prop("active");
                    if (!active) that.clickAttr(that.currentIndex, i);
                    that.closeItem();
                }));
                $(document.body).append(this.popup);
            }
            showPopup() {
                var _this$dataPool$attrAr, _this$dataPool$attrAr2;
                if (!this.popup) this.createPopupDom();
                const index = this.currentIndex;
                const popupBody = this.popup.show().animate({
                    opacity: 1
                }, 200).children(".select-popup").addClass("open");
                if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_1__["default"])()) (0, 
                scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disablePageScroll)(popupBody.get(0));
                null === (_this$dataPool$attrAr = this.dataPool.attrArray[index]) || void 0 === _this$dataPool$attrAr ? void 0 : null === (_this$dataPool$attrAr2 = _this$dataPool$attrAr.specAttrList) || void 0 === _this$dataPool$attrAr2 ? void 0 : _this$dataPool$attrAr2.forEach(((valueItem, i) => {
                    const disabled = this.dataPool.skuUtil.checkSpecAttrDisabled(this.dataPool.currentSpecList, valueItem.id, index);
                    const active = this.dataPool.skuUtil.checkSpecAttrActive(this.dataPool.currentSpecList, valueItem.id);
                    const valueEl = $(`<div class="select-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}">${valueItem.imgUrl ? `<img class="select-img" src="${valueItem.imgUrl}" />` : ""}<span class="select-text">${valueItem.name}</span><span class="select-checked"></span></div>`);
                    valueEl.data("index", i);
                    valueEl.prop("active", active);
                    popupBody.append(valueEl);
                }));
            }
            hidePopup() {
                if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_1__["default"])()) (0, 
                scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enablePageScroll)(this.popup.children(".select-popup").get(0));
                this.popup.animate({
                    opacity: 0
                }, 200, (function() {
                    $(this).hide().children(".select-popup").empty();
                })).children(".select-popup").removeClass("open");
            }
            initDom() {
                const that = this;
                this.root.children(".spec-box").each(((_, el) => {
                    const box = $(el);
                    const index = box.data("index");
                    const selectBox = box.children(".select-box");
                    const entry = selectBox.children(".select-entry");
                    const dropdown = selectBox.children(".select-dropdown");
                    entry.on("click", (e => {
                        e.stopPropagation();
                        this.openItem(entry, dropdown);
                    }));
                    dropdown.on("click", ".select-item", (function() {
                        const i = $(this).data("index");
                        const active = $(this).prop("active");
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
                        const specBox = $('<div class="spec-box"></div>').data("index", index);
                        this.root.append(specBox);
                        const selectBox = $(`<div class="select-box"></div>`);
                        specBox.append(`<div class="spec-name body6 ls-30p text-uppercase">${spec.specName}</div>`, selectBox);
                        const entry = $('<div class="select-entry"><img style="display: none" class="entry-img" src=""><span class="entry-text body3"></span><span class="entry-arrow"></span></div>').data("index", index);
                        const dropdown = $('<div class="select-options body-font select-dropdown"></div>');
                        selectBox.append(entry, dropdown);
                        spec.specAttrList.forEach(((value, i) => {
                            const {imgUrl, name} = value;
                            dropdown.append($(`<div class="select-item">${imgUrl ? `<img class="select-img" src="${imgUrl}" >` : ""}<span class="select-text">${name}</span><span class="select-checked"></span></div>\n              `).data("index", i));
                        }));
                        entry.on("click", (e => {
                            e.stopPropagation();
                            this.openItem(entry, dropdown);
                        }));
                        dropdown.on("click", ".select-item", (function() {
                            const i = $(this).data("index");
                            const active = $(this).prop("active");
                            that.closeItem();
                            if (!active) that.clickAttr(index, i);
                        }));
                    }
                }));
            }
            render() {
                super.beforeUpdate();
                this.root.children(".spec-box").each(((_, el) => {
                    const boxEl = $(el);
                    const index = boxEl.data("index");
                    const currentValue = this.getAttrValue(index);
                    const seletBox = boxEl.children(".select-box").children(".select-entry");
                    const {name, imgUrl} = currentValue || {};
                    const img = seletBox.children(".entry-img");
                    const text = seletBox.children(".entry-text");
                    if (imgUrl) img.show().prop("src", imgUrl); else img.hide().prop("src", "");
                    if (name) text.text(name); else if (currentValue) text.text(""); else text.text((0, 
                    _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("productDetail.default-placeholder", {
                        attrName: this.dataPool.attrArray[index].specName
                    }));
                    boxEl.children(".select-box").children(".select-options").children(".select-item").each(((__, el_) => {
                        const valueEl = $(el_);
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
        const __WEBPACK_DEFAULT_EXPORT__ = SkuTradeSelect;
    },
    "./src/assets/product/detail/inquiry-price-modal.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => InquiryPriceModal
        });
        var _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/form/index.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_sku_firstAvailableSku__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/utils/sku/firstAvailableSku.js");
        var _yy_sl_theme_shared_report_product_detail_inquiry_modal_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/report/product/detail/inquiry-modal-report.js");
        var _commons_base_BaseClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/commons/base/BaseClass.js");
        var _commons_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/components/modal/index.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var _commons_components_toast_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/commons/components/toast/loading.js");
        const emailRE = /^[A-Za-z0-9_./;+]+([A-Za-z0-9_./;+]+)*@([A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
        const toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"];
        class InquiryPriceModal extends _commons_base_BaseClass__WEBPACK_IMPORTED_MODULE_6__["default"] {
            constructor({id, spu, sku}) {
                super("product:inquiry:price:modal");
                this.$root = $(`#JS-inquiry-price-modal_${id}`);
                this.$setPortals(this.$root);
                this.buttonSelector = `#JS-inquiry-price-button_${id}`;
                this.spu = spu;
                this.activeSku = null;
                this.formInstance = null;
                this.modalInstance = null;
                this.firstSku = (0, _yy_sl_theme_shared_utils_sku_firstAvailableSku__WEBPACK_IMPORTED_MODULE_7__["default"])(spu, sku.skuList);
                this.init(id);
                (0, _yy_sl_theme_shared_report_product_detail_inquiry_modal_report__WEBPACK_IMPORTED_MODULE_2__.listenInputChange)({
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
                this.modalInstance = new _commons_components_modal__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    modalId: `inquiry-price_${id}`
                });
                this.modalInstance.init();
            }
            initForm(id) {
                this.formInstance = _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_0__["default"].takeForm(`JS-inquiry-modal-form_${id}`);
                this.formInstance.init();
                this.formInstance.setFields(InquiryPriceModal.getFieldsConfig());
            }
            setActiveSku(activeSku) {
                this.activeSku = activeSku;
            }
            cancelReport() {
                (0, _yy_sl_theme_shared_report_product_detail_inquiry_modal_report__WEBPACK_IMPORTED_MODULE_2__.cancelReport)({
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
                                toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.previewLinkToast"));
                                return;
                            }
                            $(e.target).addClass("disabled");
                            await this.validateForm();
                            await this.postForm();
                        } catch (err) {} finally {
                            $(e.target).removeClass("disabled");
                        }
                    },
                    cancelClickHandler: () => {
                        this.cancelReport();
                        this.hideModal();
                    },
                    buttonClickHandler: () => {
                        this.showModal();
                        (0, _yy_sl_theme_shared_report_product_detail_inquiry_modal_report__WEBPACK_IMPORTED_MODULE_2__.viewReport)();
                    }
                };
                this.$onPortals("click", ".JS-inquiry-modal-submit", eventHandlers.submitClickHandler);
                this.$onPortals("click", ".JS-inquiry-modal-cancel", eventHandlers.cancelClickHandler);
                this.$root.parents(".mp-modal__wrapper").on("click", ".mp-modal__mask.mp-modal__closable,.mp-modal__close", (() => this.cancelReport()));
                $(this.buttonSelector).on("click", eventHandlers.buttonClickHandler);
            }
            unbindEvents() {
                this.$offAll();
                $(this.buttonSelector).off("click");
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
                const loading = new _commons_components_toast_loading__WEBPACK_IMPORTED_MODULE_5__["default"]({
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
                const response = await _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].post("/mc/shop/online/send", info);
                loading.close();
                if ("SUCCESS" === response.code) {
                    (0, _yy_sl_theme_shared_report_product_detail_inquiry_modal_report__WEBPACK_IMPORTED_MODULE_2__.leadReport)({
                        spu: this.spu,
                        sku: this.activeSku || this.firstSku,
                        num: 1,
                        email: info.email,
                        ...extraData
                    });
                    this.hideModal();
                    toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.submitSuccess"));
                } else toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.submitFailed"));
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
                        message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.emailEmptyErr"),
                        required: true
                    }, {
                        message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.emailFormatErr"),
                        pattern: emailRE
                    } ]
                }, {
                    name: "message",
                    value: "",
                    rules: [ {
                        message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.messageEmptyErr"),
                        required: true
                    }, {
                        message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_8__.t)("productDetail.inquiry.messageLengthErr"),
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
    },
    "./src/assets/product/detail/js/layout.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            listenPosition: () => listenPosition,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        function setPosition({id, container = window, offsetTop = 0}) {
            const box = $(`#product-detail-sticky_${id}`);
            if (!box.get(0)) return;
            let mainView = box.children(".sticky-main-view");
            mainView = mainView.length ? mainView : box;
            const height = mainView.height();
            const wHeight = $(container).outerHeight();
            if (height + offsetTop > wHeight) box.css("top", -(height - wHeight)); else box.css("top", offsetTop);
        }
        function listenPosition({id, container = window, offsetTop = 0}) {
            setPosition({
                id,
                container,
                offsetTop
            });
            const setPositionDebounce = (0, _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(300, (() => {
                setPosition({
                    id,
                    container,
                    offsetTop
                });
            }));
            $(window).on("resize", setPositionDebounce);
            if (!(0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])()) $(container).one("scroll", setPositionDebounce);
            return function() {
                $(window).off("resize", setPositionDebounce);
                $(container).off("scroll", setPositionDebounce);
            };
        }
        const __WEBPACK_DEFAULT_EXPORT__ = setPosition;
    },
    "./src/assets/product/detail/js/product-button-report.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            addToCartThirdReport: () => addToCartThirdReport,
            addToCartHdReport: () => addToCartHdReport,
            buyNowHdReport: () => buyNowHdReport,
            paypalHdReport: () => paypalHdReport
        });
        var _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _yy_sl_theme_shared_events_data_report_add_to_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/events/data-report/add-to-cart/index.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_1__["default"];
        function reportAddToCartEvent(data) {
            try {
                (0, _yy_sl_theme_shared_events_data_report_add_to_cart__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
            } catch (e) {
                console.error(e);
            }
        }
        function addToCartThirdReport({spuId, name, price, skuId, num, eventID = (0, _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_0__.getEventID)(), variant}) {
            var _window, _window$SL_State;
            window.SL_EventBus.emit("global:thirdPartReport", {
                GA: [ [ "event", "add_to_cart", {
                    items: [ {
                        id: skuId,
                        name,
                        price: formatCurrency(price),
                        quantity: num,
                        variant
                    } ]
                } ] ],
                GAAds: [ [ "event", "conversion", {
                    value: formatCurrency(price * (num || 1)),
                    currency: window.SL_State.get("storeInfo.currency")
                }, "ADD-TO-CART" ] ],
                FBPixel: [ [ "track", "AddToCart", {
                    content_ids: spuId,
                    content_name: name || "",
                    content_category: "",
                    content_type: "product_group",
                    currency: window.SL_State.get("storeInfo.currency"),
                    value: formatCurrency(price)
                }, {
                    eventID: `addToCart${eventID}`
                } ] ],
                GAR: [ [ "event", "add_to_cart", {
                    value: formatCurrency(price * (num || 1)),
                    items: [ {
                        id: skuId,
                        google_business_vertical: "retail"
                    } ]
                } ] ],
                GARemarketing: [ [ "event", "add_to_cart", {
                    ecomm_prodid: skuId,
                    ecomm_pagetype: "cart",
                    ecomm_totalvalue: formatCurrency(price * (num || 1))
                } ] ]
            });
            reportAddToCartEvent({
                content_spu_id: spuId,
                content_sku_id: skuId,
                content_category: "",
                content_name: name,
                currency: null === (_window = window) || void 0 === _window ? void 0 : null === (_window$SL_State = _window.SL_State) || void 0 === _window$SL_State ? void 0 : _window$SL_State.get("storeInfo.currency"),
                price: formatCurrency(price || 0),
                value: formatCurrency(price || 0),
                quantity: num
            });
            return eventID;
        }
        function addToCartHdReport({spuId, skuId, num, price, name, page, event_status}) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report("60006263", {
                page,
                event_name: "additem",
                event_category: "cart",
                product_type: "product",
                product_id: spuId,
                variantion_id: skuId,
                quantity: num,
                price: formatCurrency(price),
                product_name: name,
                event_status
            });
        }
        function buyNowHdReport({spuId, skuId, num, price, name, page, event_status}) {
            var _window$HdSdk2;
            null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.report("60006263", {
                page,
                event_name: "buy_now",
                product_id: spuId,
                variantion_id: skuId,
                quantity: num,
                price: formatCurrency(price),
                product_name: name,
                event_category: "cart",
                event_status
            });
        }
        function paypalHdReport(data) {
            var _window$HdSdk3;
            null === (_window$HdSdk3 = window.HdSdk) || void 0 === _window$HdSdk3 ? void 0 : _window$HdSdk3.shopTracker.report("60006263", data);
        }
    },
    "./src/assets/product/detail/js/product-button.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getVariant: () => getVariant,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_components_paypal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/paypal/index.js");
        var _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _yy_sl_theme_shared_utils_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/checkout.js");
        var _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/browser/utils/report/tool.js");
        var _yy_sl_theme_shared_components_hbs_products_checkedEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/components/hbs/products/checkedEvent/index.js");
        var _commons_cart_globalEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/commons/cart/globalEvent.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/assets/commons/utils/debounce.js");
        var _product_button_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/assets/product/detail/js/product-button-report.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_2__["default"];
        const getVariant = (skuAttributeIds, skuAttributeMap) => {
            var _skuAttributeIds$map;
            return null === skuAttributeIds || void 0 === skuAttributeIds ? void 0 : null === (_skuAttributeIds$map = skuAttributeIds.map((item => {
                var _skuAttributeMap$item, _skuAttributeMap$item2, _skuAttributeMap$item3;
                return null === skuAttributeMap || void 0 === skuAttributeMap ? void 0 : null === (_skuAttributeMap$item = skuAttributeMap[null === item || void 0 === item ? void 0 : item.id]) || void 0 === _skuAttributeMap$item ? void 0 : null === (_skuAttributeMap$item2 = _skuAttributeMap$item.skuAttributeValueMap) || void 0 === _skuAttributeMap$item2 ? void 0 : null === (_skuAttributeMap$item3 = _skuAttributeMap$item2[null === item || void 0 === item ? void 0 : item.valueId]) || void 0 === _skuAttributeMap$item3 ? void 0 : _skuAttributeMap$item3.defaultValue;
            }))) || void 0 === _skuAttributeIds$map ? void 0 : _skuAttributeIds$map.toString();
        };
        class ButtonEvent {
            constructor({id, cartRoot, buyNowRoot, payPayId, soldOutRoot, spu, onAddSuccess, onAddError, sku}) {
                this.addButton = cartRoot;
                this.buyButton = buyNowRoot;
                this.payPayId = payPayId;
                this.soldOutRoot = soldOutRoot;
                this.onAddSuccess = onAddSuccess;
                this.onAddError = onAddError;
                this.spu = spu;
                this.sku = sku;
                this.initPaypal(id);
                this.initEvent();
                this.toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_7__["default"];
                this.initLoading();
                this.num = 1;
                this.page = String(id).startsWith("productRecommendModal") ? "123" : _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_1__["default"][window.SL_State.get("templateAlias")];
            }
            initLoading() {
                this.addLoading = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_7__["default"]({
                    duration: 0,
                    target: this.addButton,
                    type: "loading",
                    className: "product_add_loading"
                });
                this.addLoading.close();
                this.buyLoading = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_7__["default"]({
                    duration: 0,
                    target: this.buyButton,
                    type: "loading",
                    className: "product_buy_loading"
                });
                this.buyLoading.close();
            }
            initPaypal() {
                var _this$buttonConfig, _this$buttonConfig$or;
                if (0 === $(`#${this.payPayId}`).length) return;
                this.buttonConfig = window.SL_State.get("productSettleButtonConfig");
                const stage = _yy_sl_theme_shared_components_hbs_products_checkedEvent__WEBPACK_IMPORTED_MODULE_5__.checkoutEnd.getUuidAndMonitorCheckoutEnd("trade:spb:report", (status => {
                    const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                    (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.paypalHdReport)({
                        event_name: "quick_payment",
                        product_id: spuId,
                        variantion_id: skuId,
                        quantity: this.num,
                        price: formatCurrency(price),
                        product_name: name,
                        page: this.page,
                        event_status: status
                    });
                }));
                this.PayPalButton = new _yy_sl_theme_shared_components_paypal__WEBPACK_IMPORTED_MODULE_0__["default"]({
                    stage,
                    needReport: () => {
                        var _this$activeSku, _this$sku;
                        const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                        return (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.addToCartThirdReport)({
                            spuId,
                            name,
                            price,
                            num: this.num,
                            skuId,
                            variant: getVariant(null === (_this$activeSku = this.activeSku) || void 0 === _this$activeSku ? void 0 : _this$activeSku.skuAttributeIds, null === (_this$sku = this.sku) || void 0 === _this$sku ? void 0 : _this$sku.skuAttributeMap)
                        });
                    },
                    beforeCreateOrder: () => {},
                    domId: this.payPayId,
                    height: $(`#${this.payPayId}`).height(),
                    dynamic: null === (_this$buttonConfig = this.buttonConfig) || void 0 === _this$buttonConfig ? void 0 : null === (_this$buttonConfig$or = _this$buttonConfig.originConfig) || void 0 === _this$buttonConfig$or ? void 0 : _this$buttonConfig$or.system,
                    onToast: ({message}) => this.toast.open(message),
                    onDynamicNotify: () => {
                        if (!this.buttonConfig.buyNow) this.extraBuyNow();
                        $(`#${this.payPayId}`).remove();
                        $(this.buyButton).filter(".product-more-payment-button").remove();
                    },
                    afterRender: () => {
                        if (!this.activeSku) this.setPaypalDisabled();
                    },
                    onInit: () => {
                        $(this.buyButton).filter(".product-more-payment-button").html((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productDetail.morePaymentOptions"));
                    }
                });
                this.PayPalButton.render();
                $(document).on("click", `#${this.payPayId} .product-button-paypal-preview-mask`, (() => {
                    this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productDetail.previewLinkToast"));
                }));
            }
            extraBuyNow() {
                const buyNow = `<button data-ssr-plugin-pdp-button-buy-now class="buy-now btn btn-primary btn-lg ${this.buyButton.substr(1)} __sl-custom-track-product-detail-buy-now paypalAddBuyNow">\n        <span class="pdp_button_text fw-bold">${(0, 
                _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("common.buy-now")}</span>\n      </button>`;
                $(`#${this.payPayId}`).before(buyNow);
                this.bindBuyNow();
                this.setTradeButtonHide(this.activeSku ? !this.activeSku.available : this.spu.soldOut);
            }
            setLoading(button, loading) {
                let dom = this.addButton;
                if ("buy" === button) dom = this.buyButton;
                const loadingName = `${button}Loading`;
                if (loading) {
                    $(dom).find(".pdp_button_text").addClass("loading");
                    this[loadingName].open();
                    $(`.product_${button}_loading`).find(".mp-loading__circular path").css({
                        stroke: $(dom).css("color")
                    });
                } else {
                    this[loadingName].close();
                    $(dom).find(".pdp_button_text").removeClass("loading");
                }
            }
            initEvent() {
                const $this = this;
                $(this.addButton).on("click", (0, _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_10__["default"])(300, (() => {
                    if ($this.isPreview()) {
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productDetail.previewLinkToast"));
                        return;
                    }
                    if (!this.activeSku) {
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productList.container.tradePopup.error4"));
                        return;
                    }
                    this.setLoading("add", true);
                    const {spuSeq: spuId, skuSeq: skuId, name, price} = this.activeSku;
                    const {num} = this;
                    const eventID = (0, _yy_sl_theme_shared_utils_report_tool__WEBPACK_IMPORTED_MODULE_4__.getEventID)();
                    const hdReportData = {
                        page: this.page,
                        spuId,
                        skuId,
                        num,
                        price,
                        name
                    };
                    window.SL_EventBus.emit(_commons_cart_globalEvent__WEBPACK_IMPORTED_MODULE_6__.ADD_TO_CART, {
                        spuId,
                        skuId,
                        num,
                        price,
                        name,
                        eventID: `addToCart${eventID}`,
                        error: (...e) => {
                            (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.addToCartHdReport)({
                                ...hdReportData,
                                event_status: 0
                            });
                            this.onAddError(...e);
                        },
                        success: () => {
                            var _this$activeSku2, _this$sku2, _this$onAddSuccess;
                            (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.addToCartHdReport)({
                                ...hdReportData,
                                event_status: 1
                            });
                            (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.addToCartThirdReport)({
                                spuId,
                                name,
                                price,
                                skuId,
                                num,
                                eventID,
                                variant: getVariant(null === (_this$activeSku2 = this.activeSku) || void 0 === _this$activeSku2 ? void 0 : _this$activeSku2.skuAttributeIds, null === (_this$sku2 = this.sku) || void 0 === _this$sku2 ? void 0 : _this$sku2.skuAttributeMap)
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
                const stage = _yy_sl_theme_shared_components_hbs_products_checkedEvent__WEBPACK_IMPORTED_MODULE_5__.checkoutEnd.getUuidAndMonitorCheckoutEnd("trade:goToCheckout:report", (status => {
                    const {name, price, spuSeq: spuId, skuSeq: skuId} = this.activeSku;
                    const {num} = this;
                    const hdReportData = {
                        page: this.page,
                        spuId,
                        skuId,
                        num,
                        price,
                        name
                    };
                    (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.buyNowHdReport)({
                        ...hdReportData,
                        event_status: status
                    });
                }));
                const $this = this;
                $(this.buyButton).on("click", (0, _commons_utils_debounce__WEBPACK_IMPORTED_MODULE_10__["default"])(300, (() => {
                    if ($this.isPreview()) {
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productDetail.previewLinkToast"));
                        return;
                    }
                    if (!this.activeSku) {
                        this.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_9__.t)("productList.container.tradePopup.error4"));
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
                    _yy_sl_theme_shared_utils_checkout__WEBPACK_IMPORTED_MODULE_3__["default"].jump(product, {
                        stage,
                        needReport: () => {
                            var _this$activeSku3, _this$sku3;
                            return (0, _product_button_report__WEBPACK_IMPORTED_MODULE_8__.addToCartThirdReport)({
                                spuId,
                                name,
                                price,
                                skuId,
                                num,
                                variant: getVariant(null === (_this$activeSku3 = this.activeSku) || void 0 === _this$activeSku3 ? void 0 : _this$activeSku3.skuAttributeIds, null === (_this$sku3 = this.sku) || void 0 === _this$sku3 ? void 0 : _this$sku3.skuAttributeMap)
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
                if (0 === $(`#${this.payPayId}`).length || !this.activeSku) return;
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
                var _$2, _$$filter2;
                if (!show) {
                    var _$, _$$filter;
                    $(this.addButton).removeClass("hide");
                    $(this.buyButton).removeClass("hide");
                    null === (_$ = $(`#${this.payPayId}`)) || void 0 === _$ ? void 0 : _$.removeClass("hide");
                    null === (_$$filter = $(this.buyButton).filter(".product-more-payment-button")) || void 0 === _$$filter ? void 0 : _$$filter.removeClass("hide");
                    $(this.soldOutRoot).addClass("hide");
                    return;
                }
                $(this.addButton).addClass("hide");
                $(this.buyButton).addClass("hide");
                null === (_$2 = $(`#${this.payPayId}`)) || void 0 === _$2 ? void 0 : _$2.addClass("hide");
                null === (_$$filter2 = $(this.buyButton).filter(".product-more-payment-button")) || void 0 === _$$filter2 ? void 0 : _$$filter2.addClass("hide");
                $(this.soldOutRoot).removeClass("hide");
            }
            isPreview() {
                const currentUrl = window.location.pathname;
                return /^[/（]preview[/）].*/.test(currentUrl);
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = ButtonEvent;
    },
    "./src/assets/product/detail/js/product-collapse.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/request.js");
        var _commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/commons/js/createShadowDom.js");
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
            const initHeight = $(element).innerHeight();
            element.style.height = "auto";
            const targetHeight = $(element).innerHeight();
            element.style.height = `${initHeight}px`;
            $(element).css("color");
            element.style.height = `${targetHeight}px`;
        }
        function closeCollapseByHeight(element) {
            const initHeight = $(element).innerHeight();
            $(element).css("height", `${initHeight}px`);
            $(element).css("color");
            element.style.height = `0px`;
        }
        const PAGE_ID = "pageid";
        const CUSTOM_PAGE_TYPE = "customize";
        const isReJsonSdkData = originData => {
            try {
                return JSON.parse(originData);
            } catch (error) {
                return false;
            }
        };
        class Collapse {
            constructor({lang = "default", selector, cacheRequest = true}) {
                this.$container = $(selector);
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
                const ids = Array.from(this.$collapseAsyncItems).map((item => $(item).data(PAGE_ID))).filter((id => !!id));
                this.$collapseAsyncItems.each(((index, item) => {
                    const $item = $(item);
                    $item.find(".base-collapse-item__wrap").on(self.transitionEvent, (function() {
                        if ($(this).parent().hasClass("active")) $(this).css("height", "auto");
                    }));
                    if ($item.hasClass("active") && $item.data(PAGE_ID)) this.requestCollapseContent($item.data(PAGE_ID)).then((res => {
                        this.setCollapseContent(null === res || void 0 === res ? void 0 : res.data, $item);
                    }));
                }));
                this.$collapseSyncItems.each(((index, item) => {
                    const $item = $(item);
                    $item.find(".base-collapse-item__wrap").on(self.transitionEvent, (function() {
                        if ($(this).parent().hasClass("active")) $(this).css("height", "auto");
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
                return (0, _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
                    const $item = $(item);
                    const title = titleMap[$item.data(PAGE_ID)];
                    if (title) $item.find(".base-collapse-item__title").text(title);
                }));
            }
            bindEvent() {
                const self = this;
                this.$collapseAsyncItems.on("click", ".base-collapse-item__header", (function() {
                    const $item = $(this).closest(".base-collapse-item");
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
                    const $item = $(this).closest(".base-collapse-item");
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
                        const $item = $(item);
                        if ($item.hasClass("active") && $item.data(PAGE_ID)) this.calcCollapseContentHeight($item);
                    }));
                }));
            }
            requestCollapseContent(id) {
                if (this.cacheRequest && this.cacheData[id]) return Promise.resolve(this.cacheData[id]);
                return (0, _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    url: `merchant/render/page/${CUSTOM_PAGE_TYPE}/${id}`,
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
                const config = isReJsonSdkData(null !== pageConfig && void 0 !== pageConfig ? pageConfig : "");
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
                (0, _commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
        const __WEBPACK_DEFAULT_EXPORT__ = Collapse;
    },
    "./src/assets/product/detail/js/product-preview.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => initPreview
        });
        var _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        var _yy_sl_theme_shared_events_product_sku_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/product/sku-change/index.js");
        var _yy_sl_theme_shared_events_product_sku_changed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/events/product/sku-changed/index.js");
        var _yy_sl_theme_shared_events_data_report_view_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/events/data-report/view-content/index.js");
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _product_quantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/product/detail/js/product-quantity.js");
        var _product_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/product/detail/js/product-button.js");
        var _commons_js_product_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/product/commons/js/product-info.js");
        var _product_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/assets/product/detail/js/product-swiper.js");
        var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/assets/product/detail/js/layout.js");
        var _sku_trade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/assets/product/detail/js/sku-trade.js");
        var _inquiry_price_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/assets/product/detail/inquiry-price-modal.js");
        var _commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/assets/product/commons/js/createShadowDom.js");
        var _tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/assets/product/detail/js/tabs.js");
        var _product_collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/assets/product/detail/js/product-collapse.js");
        var _commons_sales_snippets_salesPromotionTags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/assets/commons/sales/snippets/salesPromotionTags.js");
        var _commons_sales_snippets_flashSale_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/assets/commons/sales/snippets/flashSale/index.js");
        var _commons_sales_snippets_addToCartList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/assets/commons/sales/snippets/addToCartList.js");
        var _commons_utils_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/assets/commons/utils/url.js");
        var _sales_discount_coupon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/assets/product/sales/discount-coupon/js/index.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_3__["default"];
        const emitProductSkuChange = data => {
            try {
                var _window, _window$SL_State;
                (0, _yy_sl_theme_shared_events_product_sku_change__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
                (0, _yy_sl_theme_shared_events_product_sku_changed__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    ...data,
                    currency: null === (_window2 = window) || void 0 === _window2 ? void 0 : null === (_window2$SL_State = _window2.SL_State) || void 0 === _window2$SL_State ? void 0 : _window2$SL_State.get("storeInfo.currency")
                });
            } catch (e) {
                console.error(e);
            }
        };
        const emitViewContent = data => {
            try {
                (0, _yy_sl_theme_shared_events_data_report_view_content__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
            } catch (e) {
                console.error(e);
            }
        };
        function thirdPartReport({activeSku, spu, sku}) {
            var _sku$skuList, _spu$sortationList, _spu$sortationList$, _spu$sortationList2, _spu$sortationList2$;
            const newActiveSku = activeSku || (null === sku || void 0 === sku ? void 0 : null === (_sku$skuList = sku.skuList) || void 0 === _sku$skuList ? void 0 : _sku$skuList[0]);
            window.SL_EventBus.emit("global:thirdPartReport", {
                GA: [ [ "event", "view_item", {
                    items: [ {
                        id: null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuSeq,
                        name: null === spu || void 0 === spu ? void 0 : spu.title,
                        price: formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
                        variant: (0, _product_button__WEBPACK_IMPORTED_MODULE_5__.getVariant)(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.skuAttributeIds, null === sku || void 0 === sku ? void 0 : sku.skuAttributeMap)
                    } ]
                } ] ],
                GAR: [ [ "event", "view_item", {
                    value: formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price),
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
                    ecomm_totalvalue: formatCurrency(null === newActiveSku || void 0 === newActiveSku ? void 0 : newActiveSku.price)
                } ] ]
            });
        }
        function initPreview({id, statePath, filterShelves, offsetTop, container, onAddSuccess}) {
            const sku = window.SL_State.get(`${statePath}.sku`);
            const spu = window.SL_State.get(`${statePath}.spu`);
            if (filterShelves && !(null !== spu && void 0 !== spu && spu.shelves)) {
                console.error("no spu data or not shelves, init break");
                return () => {};
            }
            const removePositionListener = (0, _layout__WEBPACK_IMPORTED_MODULE_8__.listenPosition)({
                id,
                offsetTop,
                container
            });
            (0, _commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_11__["default"])();
            let productImagesInstance;
            try {
                productImagesInstance = new _product_swiper__WEBPACK_IMPORTED_MODULE_7__["default"]({
                    mediaList: spu.mediaList,
                    selectorId: id,
                    heightOnChange: () => {
                        (0, _layout__WEBPACK_IMPORTED_MODULE_8__["default"])({
                            id,
                            offsetTop,
                            container
                        });
                    }
                });
            } catch (e) {
                setTimeout((() => {
                    throw e;
                }));
            }
            const inquiryPriceModal = new _inquiry_price_modal__WEBPACK_IMPORTED_MODULE_10__["default"]({
                id,
                spu,
                sku
            });
            const addToCartList = new _commons_sales_snippets_addToCartList__WEBPACK_IMPORTED_MODULE_16__["default"](spu);
            addToCartList.init();
            const ButtonGroup = new _product_button__WEBPACK_IMPORTED_MODULE_5__["default"]({
                id,
                cartRoot: `.pdp_add_to_cart_${id}`,
                buyNowRoot: `.pdp_buy_now_${id}`,
                payPayId: `pdp_paypal_${id}`,
                soldOutRoot: `.pdp_sold_out_${id}`,
                spu,
                sku,
                onAddSuccess: () => {
                    if ("function" === typeof onAddSuccess) onAddSuccess();
                }
            });
            const quantityStepper = new _product_quantity__WEBPACK_IMPORTED_MODULE_4__["default"]({
                id,
                sku,
                spu,
                dataPool: new _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_19__["default"]
            });
            quantityStepper.dataPool.watch([ "quantity" ], (num => {
                ButtonGroup.setActiveSkuNum(num);
                if ("productDetail" === id) {
                    window.productDetailDataBus.set("num", num);
                    window.productDetailDataBus.emit("after:countChange", num);
                }
                window.SL_EventBus.emit("product:count:change", [ num, id ]);
            }));
            new _product_collapse__WEBPACK_IMPORTED_MODULE_13__["default"]({
                selector: `.product-detail-collapse_${id}`
            });
            new _tabs__WEBPACK_IMPORTED_MODULE_12__["default"]({
                root: ".product-tabs-container"
            });
            const getSkuChangeData = (skuInfo = {}) => {
                const {spuSeq, discount, skuSeq, price, originPrice, stock, weight, weightUnit, available, shelves, skuAttributeIds, imageList, soldOut, allowOversold, imageBeanList} = skuInfo || {};
                return {
                    spuSeq,
                    discount,
                    skuSeq,
                    price: formatCurrency(price || 0),
                    originPrice: formatCurrency(originPrice || 0),
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
            const skuDataPool = new _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_19__["default"];
            const skuTrade = (0, _sku_trade__WEBPACK_IMPORTED_MODULE_9__["default"])({
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
                        price = formatCurrency((null === activeSku || void 0 === activeSku ? void 0 : activeSku.price) || 0);
                        emitProductSkuChange({
                            type: "init",
                            quantity: (null === quantityStepper || void 0 === quantityStepper ? void 0 : null === (_quantityStepper$skuS = quantityStepper.skuStepper) || void 0 === _quantityStepper$skuS ? void 0 : null === (_quantityStepper$skuS2 = _quantityStepper$skuS.data) || void 0 === _quantityStepper$skuS2 ? void 0 : _quantityStepper$skuS2.value) || 1,
                            ...getSkuChangeData(activeSku)
                        });
                    }
                    emitViewContent({
                        content_spu_id: spu.spuSeq,
                        content_sku_id,
                        content_category: "",
                        currency: null === (_window3 = window) || void 0 === _window3 ? void 0 : null === (_window3$SL_State = _window3.SL_State) || void 0 === _window3$SL_State ? void 0 : _window3$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price
                    });
                    emitProductSkuChanged({
                        type: "init",
                        id,
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
                            if (activeSku) window.history.replaceState({}, document.title, (0, _commons_utils_url__WEBPACK_IMPORTED_MODULE_17__.changeURLArg)(window.location.href, "sku", activeSku.skuSeq)); else window.history.replaceState({}, document.title, (0, 
                            _commons_utils_url__WEBPACK_IMPORTED_MODULE_17__.delParam)("sku"));
                        }
                        activeSkuCache = activeSku;
                        inquiryPriceModal.setActiveSku(activeSku);
                        null === (_productImagesInstanc = productImagesInstance) || void 0 === _productImagesInstanc ? void 0 : _productImagesInstanc.skuImageChange(null === activeSku || void 0 === activeSku ? void 0 : null === (_activeSku$imageBeanL = activeSku.imageBeanList) || void 0 === _activeSku$imageBeanL ? void 0 : _activeSku$imageBeanL[0]);
                        if (activeSku || quantityStepper.activeSku) {
                            (0, _commons_js_product_info__WEBPACK_IMPORTED_MODULE_6__["default"])(id, statePath, activeSku);
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
            const unmountPromotionTags = (0, _commons_sales_snippets_salesPromotionTags__WEBPACK_IMPORTED_MODULE_14__["default"])(`#product-info_${id}`);
            const unmountedDiscountCoupon = (0, _sales_discount_coupon_js__WEBPACK_IMPORTED_MODULE_18__["default"])();
            window.SL_EventBus.on("global:currency:format", (() => {
                (0, _commons_js_product_info__WEBPACK_IMPORTED_MODULE_6__["default"])(id, statePath, quantityStepper.activeSku);
            }));
            try {
                const flashSale = new _commons_sales_snippets_flashSale_index__WEBPACK_IMPORTED_MODULE_15__["default"];
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
                        price = formatCurrency((null === (_activeSkuCache2 = activeSkuCache) || void 0 === _activeSkuCache2 ? void 0 : _activeSkuCache2.price) || 0);
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
                        content_category: "",
                        currency: null === (_window4 = window) || void 0 === _window4 ? void 0 : null === (_window4$SL_State = _window4.SL_State) || void 0 === _window4$SL_State ? void 0 : _window4$SL_State.get("storeInfo.currency"),
                        value: price,
                        quantity: 1,
                        price
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
        var _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/sku/DataWatcher.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_components_hbs_flashSale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/flashSale/index.js");
        var _commons_js_sku_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/commons/js/sku-stepper.js");
        const initValue = 1;
        class SkuQuality {
            constructor({sku, spu, activeSku, id, onChange, dataPool}) {
                this.activeSku = activeSku;
                this.sku = sku;
                this.spu = spu;
                this.id = id;
                this.root = `#product-detail-sku-quantity_${id}`;
                this.dataPool = dataPool || new _yy_sl_theme_shared_utils_sku_DataWatcher__WEBPACK_IMPORTED_MODULE_2__["default"];
                this.onChange = onChange;
                this.init();
            }
            getMax() {
                if (!this.activeSku) return 999;
                if (this.isTrackStock()) {
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
                this.skuStepper = new _commons_js_sku_stepper__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    domReady: true,
                    root: $(`#product-detail-sku-stepper_${this.id}`),
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
                new _yy_sl_theme_shared_components_hbs_flashSale__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
                    const content = (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(`common.stock-limit`, {
                        stock: this.activeSku.stock
                    });
                    this.setErrorTips(showTips, content);
                } else this.setErrorTips(showTips);
            }
            setErrorTips(show, content) {
                if (show) $(this.root).children(".stepper-tip").html(content).removeClass("hide"); else $(this.root).children(".stepper-tip").addClass("hide");
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
                        max: 999,
                        disabled: false
                    };
                    this.skuStepper.setStepperData(stepperData);
                    this.render();
                    return;
                }
                this.activeSku = sku;
                if (current > this.getMax()) {
                    current = this.getMax();
                    if (!sku.soldOut) this.skuStepper.toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(`common.stock-limit`, {
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
    "./src/assets/product/detail/js/product-swiper.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_components_hbs_productImages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/productImages/js/index.js");
        var _yy_sl_theme_shared_components_hbs_shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/components/hbs/shared/utils/getYouTubeCover.js");
        var _yy_sl_theme_shared_utils_img_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/img-size.js");
        var _yy_sl_theme_shared_components_hbs_shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/components/hbs/shared/utils/imgUrl.js");
        class ProductImagesWithFlattenAndMobileThumb extends _yy_sl_theme_shared_components_hbs_productImages_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
            constructor(...args) {
                const {selectorId} = args[0] || {};
                const mobilePrefixCls = `.execute_productImages_mobile_${selectorId}`;
                const productMobileHideThumbnailImage = "hide" === $(`.product_productMobileThumbnailImageHide_${selectorId}`).val();
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
                this.productImageIsFlatten = "flatten" === $(`.product_productImageShowStyle_${selectorId}`).val();
                this.productPcSkuImageFlatten = $(this.id).find(".product_pc_skuImage_flatten");
                this.productPcNormalItemFlatten = $(this.id).find(".normalItem");
                this.productMobileHideThumbnailImage = productMobileHideThumbnailImage;
                if (this.productMobileHideThumbnailImage && !this.swiper) this.initMobileNormalPagination();
                if (!this.productMobileHideThumbnailImage && !this.swiper) this.handleInitThumbnailImageBySkuImage();
                if (this.productImageIsFlatten && !this.mobileSwiper && this.productImageScale) {
                    this.initFlattenPcPhotoSwipe();
                    this.initFlattenPcSkuPhotoSwiper();
                }
            }
            handleInitThumbnailImageBySkuImage() {
                var _$$find;
                const index = this.mobileSwiper.activeIndex;
                const firstThumbnail = null === (_$$find = $(`${this.mobileId} .product_mobile_thumbnail_container`).find(".swiper-slide")) || void 0 === _$$find ? void 0 : _$$find.eq(index);
                const activeCls = "noShowActive";
                if ($(`${this.mobileId}`).find(".product_m_skuImageBox").length > 0) {
                    firstThumbnail.addClass(activeCls);
                    firstThumbnail.one("click", (() => {
                        firstThumbnail.removeClass(activeCls);
                        super.handleMobileSkuImage(false);
                    }));
                } else firstThumbnail.removeClass(activeCls);
            }
            updatePagination(currentIndex, total) {
                const {mobileId} = this;
                const prevDom = $(`${mobileId} .normal-thumbnail-button-prev`);
                const nextDom = $(`${mobileId} .normal-thumbnail-button-next`);
                const content = $(`${mobileId} .pagination-content`);
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
                $(`${mobileId}`).on("click", ".normal-thumbnail-button-prev", (() => {
                    mobileSwiper.slidePrev(200);
                })).on("click", ".normal-thumbnail-button-next", (() => {
                    mobileSwiper.slideNext(200);
                }));
            }
            initFlattenPcPhotoSwipe() {
                const self = this;
                this.updateFlattenPhotoSwipeItems();
                $(`${this.id}`).on("click", ".imageItem", (function() {
                    const realIndex = $(this).data("index");
                    self.handlePhotoSwiper(self.slideItems, realIndex);
                }));
            }
            initFlattenPcSkuPhotoSwiper() {
                const self = this;
                $(`${this.id}`).on("click", ".product_pc_skuImage_flatten", (function() {
                    const items = [ {
                        src: $(this).find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: $(this)[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            toggleFlattenPcSkuImage(isShow, skuImageUrl) {
                const skuImageDom = this.productPcSkuImageFlatten;
                if (skuImageDom.hasClass("imageItemError")) skuImageDom.removeClass("imageItemError");
                if (isShow && skuImageUrl) {
                    var _imgSize;
                    const ratio = (null === (_imgSize = (0, _yy_sl_theme_shared_utils_img_size__WEBPACK_IMPORTED_MODULE_1__["default"])(skuImageUrl)) || void 0 === _imgSize ? void 0 : _imgSize.ratio) || "100%";
                    const imgDom = skuImageDom.find("img");
                    if (imgDom.length > 0) imgDom.removeAttr("srcset data-srcset").attr({
                        src: skuImageUrl,
                        "data-photoswipe-src": (0, _yy_sl_theme_shared_components_hbs_shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(skuImageUrl, {
                            width: 1800
                        })
                    }); else skuImageDom.css("paddingBottom", `${ratio}`).html(`<img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image" data-photoswipe-src=${(0, 
                    _yy_sl_theme_shared_components_hbs_shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(skuImageUrl, {
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
                this.handleInitThumbnailImageBySkuImage();
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
                const thumbnailContainer = $(`${this.mobileId} .product_mobile_thumbnail_container`);
                if (!(null !== list && void 0 !== list && list.length) || list.length <= 1) {
                    thumbnailContainer.hide();
                    return;
                }
                thumbnailContainer.show();
                thumbnailContainer.find(".swiper-wrapper").empty().append(list.map((item => {
                    var _imgSize2;
                    const ratio = (null === (_imgSize2 = (0, _yy_sl_theme_shared_utils_img_size__WEBPACK_IMPORTED_MODULE_1__["default"])(item.resource)) || void 0 === _imgSize2 ? void 0 : _imgSize2.ratio) || "100%";
                    const boxPb = "VIDEO" === item.type ? "56.25%" : ratio;
                    const {middle: cover} = (0, _yy_sl_theme_shared_components_hbs_shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_3__["default"])(item.resource);
                    const domItem = "VIDEO" === item.type ? `<img class="lozad" data-sizes="auto" data-src="${cover}" alt="">` : `<img class="lozad" data-sizes="auto" data-src="${item.resource}" alt="">`;
                    return `\n          <div class="swiper-slide">\n            <div class="swiper-slide-item" style="padding-bottom:${boxPb}">${domItem}</div>\n          </div>`;
                })));
                this.handleMobileThumbArrow(thumbnailContainer, list);
            }
            updateMobileThumbArrow(list) {
                const paginationContainer = $(`${this.mobileId} .product_mobile_thumbnail_pagination`);
                if (list.length > 1) paginationContainer.show(); else paginationContainer.hide();
            }
            updateImageList(list, activeIndex, source) {
                if (!this.verifySource(null === source || void 0 === source ? void 0 : source.app)) return;
                if (this.productImageIsFlatten) {
                    this.updateFlattenImageList(list);
                    if (!this.mobileSwiper) this.updateFlattenPhotoSwipeItems();
                }
                if (!this.productMobileHideThumbnailImage && !this.swiper) this.updateMobileThumbsImage(list);
                super.updateImageList(list, activeIndex, source);
                if (this.productMobileHideThumbnailImage && !this.swiper) {
                    this.updateMobileThumbArrow(list);
                    this.updatePagination(0, null === list || void 0 === list ? void 0 : list.length);
                    this.initMobileNormalPagination();
                }
            }
            updateFlattenPhotoSwipeItems() {
                const items = [];
                $(`${this.id}`).find(".imageItem,.videoItem").each(((index, item) => {
                    const realIndex = $(item).data("index");
                    const imgEl = $(item).find(".product_photoSwipe_image");
                    const size = $(item).attr("data-natural-size");
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
                this.productPcSkuImageFlatten = $(this.id).find(".product_pc_skuImage_flatten");
                this.productPcNormalItemFlatten = $(this.id).find(".normalItem");
            }
            updateFlattenImageList(list) {
                const container = $(`${this.id}.product_productImages_tile`).empty();
                if (null !== list && void 0 !== list && list.length) {
                    container.removeClass("product-detail-empty-image");
                    const flattenFirstItem = $(`<div class="row row-cols-md-1 gx-md-4 flattenFirstItem">\n          <div class="flattenFirstItemWrapper">\n            <div class="normalItem"></div>\n            <div class="product_pc_skuImage_flatten"></div>\n          </div>\n        </div>`);
                    const exceptFlattenItemList = $(`<div class="exceptFirstMediaList row row-cols-md-2 gx-md-4"></div>`);
                    const firstCol = $(`<div class="product_images_firstCol"></div>`);
                    const secondCol = $(`<div class="product_images_secondCol"></div>`);
                    list.forEach(((item, index) => {
                        let dom;
                        if ("VIDEO" === item.type) {
                            const {middle: cover, videoId} = (0, _yy_sl_theme_shared_components_hbs_shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_3__["default"])(item.resource);
                            dom = `<div class="videoItem" data-index="${index}">\n<div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>\n<img class="product_photoSwipe_image" data-photoswipe-src="${cover}" src="${cover}" alt="">\n</div>`;
                        } else {
                            const {ratio} = (0, _yy_sl_theme_shared_utils_img_size__WEBPACK_IMPORTED_MODULE_1__["default"])(item.resource);
                            dom = `<div class="imageItem" style="padding-bottom: ${ratio}" data-index="${index}"><img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" class="product_photoSwipe_image" src="${item.resource}" alt=""></div>`;
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
        const __WEBPACK_DEFAULT_EXPORT__ = ProductImagesWithFlattenAndMobileThumb;
    },
    "./src/assets/product/detail/js/sku-trade.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => initSku
        });
        var _commons_js_sku_trade_sku_trade_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/commons/js/sku-trade/sku-trade-flatten.js");
        var _commons_js_sku_trade_sku_trade_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/assets/product/commons/js/sku-trade/sku-trade-select.js");
        function initSku({id, sku, spu, mixins, onInit, onChange, dataPool}) {
            const dataDom = $(`#product-sku-trade-data_${id}`);
            const skuStyle = dataDom.data("skustyle");
            const selectSku = dataDom.data("selectsku");
            const SkuClass = "flatten" === skuStyle ? _commons_js_sku_trade_sku_trade_flatten__WEBPACK_IMPORTED_MODULE_1__["default"] : _commons_js_sku_trade_sku_trade_select__WEBPACK_IMPORTED_MODULE_0__["default"];
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
    "./src/assets/product/detail/js/tabs.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/request.js");
        var _commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/product/commons/js/createShadowDom.js");
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
                this.root = $(root);
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
                    const $el = $(el);
                    const id = $el.data("id");
                    if (id) this.ids.push(id);
                    if ($el.hasClass("active")) this.showKey = $el.data("key");
                }));
            }
            requestCollapseTitle(ids) {
                const {lang} = this;
                return (0, _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
                    const title = data[$(el).data("id")];
                    if (title) $(el).text(title);
                }));
            }
            requestCollapseContent(id, content) {
                if (this.cacheRequest && this.cacheData[id]) return Promise.resolve(this.cacheData[id]);
                return (0, _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    url: `merchant/render/page/${CUSTOM_PAGE_TYPE}/${id}`,
                    method: "GET"
                }).then((res => {
                    if (null !== res && void 0 !== res && res.data) this.setCollapseContent(null === res || void 0 === res ? void 0 : res.data, content);
                }));
            }
            setCollapseContent(data, content) {
                var _shadow$get;
                const html = this.getCustomPageContent(null === data || void 0 === data ? void 0 : data.htmlConfig);
                const shadow = $(content).children(".product-tabs-shadow");
                const shadowRoot = null === (_shadow$get = shadow.get(0)) || void 0 === _shadow$get ? void 0 : _shadow$get.attachShadow({
                    mode: "open"
                });
                $(shadowRoot).append(_commons_js_createShadowDom__WEBPACK_IMPORTED_MODULE_1__.shadowDomStyle.clone());
                $(shadowRoot).append(html);
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
                    if ($(el).data("key") === key) {
                        $(el).show();
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
                    const tab = $(this);
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
        const __WEBPACK_DEFAULT_EXPORT__ = Tabs;
    },
    "./src/assets/product/sales/discount-coupon/js/Drawer.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
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
                const $body = $("body");
                $body.addClass("sales-discount-coupon-common-drawer__root-open");
                const mask = drawerDom.querySelector(".sales-discount-coupon-common-drawer__mask-hook");
                if (mask) {
                    setTimeout((() => {
                        $(mask).addClass("sales-discount-coupon-common-drawer__mask--append");
                    }), 20);
                    mask.addEventListener("click", this.hide);
                }
                const closeBtn = drawerDom.querySelector(".sales-discount-coupon-common-drawer-hook");
                if (closeBtn) closeBtn.addEventListener("click", this.hide);
                null === (_this$onSwitch = this.onSwitch) || void 0 === _this$onSwitch ? void 0 : _this$onSwitch.call(this, true);
            }
            hide() {
                var _this$onSwitch2;
                const drawerDom = this.getDom();
                if (!drawerDom) return;
                this.isShow = false;
                drawerDom.style.display = "none";
                const $body = $("body");
                $body.removeClass("sales-discount-coupon-common-drawer__root-open");
                const mask = drawerDom.querySelector(".sales-discount-coupon-common-drawer__mask-hook");
                if (mask) {
                    $(mask).removeClass("sales-discount-coupon-common-drawer__mask--append");
                    mask.removeEventListener("click", this.hide);
                }
                const closeBtn = drawerDom.querySelector(".sales-discount-coupon-common-drawer-hook");
                if (closeBtn) closeBtn.removeEventListener("click", this.hide);
                null === (_this$onSwitch2 = this.onSwitch) || void 0 === _this$onSwitch2 ? void 0 : _this$onSwitch2.call(this, false);
            }
            getShowStatus() {
                return this.isShow;
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = Drawer;
    },
    "./src/assets/product/sales/discount-coupon/js/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/event-bus.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/request.js");
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/currency/CurrencyConvert.js");
        var _Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/assets/product/sales/discount-coupon/js/Drawer.js");
        var _commons_utils_effectFc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/assets/commons/utils/effectFc.js");
        var _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
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
            const $tags = $(".sales-coupon-tag__discount-item-hook");
            if (!$tags[0]) return;
            if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])()) $tags.css("display", "none").eq(0).css("display", "inline-block"); else $tags.css("display", "inline-block");
        }
        function onShowSwitch(id, className, isShow) {
            const container = $(id);
            if (!container) return;
            if (isShow) container.addClass(className); else container.removeClass(className);
        }
        const initDiscountCoupon = (0, _commons_utils_effectFc__WEBPACK_IMPORTED_MODULE_5__["default"])((function() {
            const {useEffect} = this;
            const containerIdSel = "#salesDiscountCouponCouponWrapHook";
            const modalIdSel = "#salesCouponModalHook";
            const modalShowClassName = "sales-coupon-modal__container--show";
            const drawerId = "salesDiscountCoupon_DiscountDrawer";
            const container = $(containerIdSel);
            const drawer = new _Drawer__WEBPACK_IMPORTED_MODULE_6__["default"]({
                id: drawerId,
                onSwitch(flag) {
                    onShowSwitch(containerIdSel, "drawer-active", flag);
                }
            });
            const modalShow = () => {
                const modal = $(modalIdSel);
                modal.addClass(modalShowClassName);
                onShowSwitch(containerIdSel, "modal-active", true);
            };
            const modalHide = () => {
                const modal = $(modalIdSel);
                if (modal.hasClass(modalShowClassName)) {
                    modal.removeClass(modalShowClassName);
                    onShowSwitch(containerIdSel, "modal-active", false);
                }
            };
            const modalToggle = () => {
                const modal = $(modalIdSel);
                if (modal.hasClass(modalShowClassName)) modalHide(); else modalShow();
            };
            if (container.length) {
                useEffect(container, "on,off", "click", (() => {
                    if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])()) drawer.show(); else modalToggle();
                }));
                useEffect($(modalIdSel), "on,off", "click", (e => {
                    e.stopPropagation();
                }));
                useEffect($(document.body), "on,off", "click", (e => {
                    const {target} = e;
                    const containerDom = container.get(0);
                    if ($.contains(containerDom, target) || containerDom === target) return;
                    if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])() && drawer.getShowStatus()) drawer.hide();
                    if (!(0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])()) modalHide();
                }));
                useEffect(_yy_sl_theme_shared_utils_event_bus__WEBPACK_IMPORTED_MODULE_0__.SL_EventBus, "on,off", "global:platformChange", (() => {
                    handleTagsShow();
                    if (!(0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])() && drawer.getShowStatus()) {
                        drawer.hide();
                        modalShow();
                    }
                    if ((0, _commons_utils_isMobile__WEBPACK_IMPORTED_MODULE_3__["default"])()) {
                        const modal = $(modalIdSel);
                        if (modal.hasClass(modalShowClassName)) drawer.show();
                        modalHide();
                    }
                }));
                window.SL_EventBus.on("global:currency:format", (() => {
                    const amountNode = container.find("[data-amount]");
                    amountNode.each((function() {
                        $(this).text((0, _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_2__.convertFormat)($(this).data("amount")));
                    }));
                }));
                let isStopBtnApply = false;
                const $coupon = $(".sales-discount-coupon-hook");
                useEffect($coupon, "on,off", "click", (e => {
                    if (isStopBtnApply) return;
                    const applyClass = "sales-discount-coupon--apply";
                    const $el = $(e.currentTarget);
                    const discountCode = $el.data("discount-code");
                    if (!discountCode) {
                        _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"].init({
                            content: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("sales.discount-coupon.couponNoFound")
                        });
                        return;
                    }
                    const cartIdPromise = getCartId();
                    cartIdPromise.then((ownerId => _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].post("/sale/coupon/bind/cart", {
                        ownerId,
                        discountCode
                    }))).then((() => {
                        isStopBtnApply = true;
                        setTimeout((() => {
                            isStopBtnApply = false;
                        }), 500);
                        _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"].init({
                            content: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("sales.discount-coupon.applySuccess")
                        });
                        $coupon.removeClass(applyClass);
                        const $selCoupons = $(`.sales-discount-coupon-hook[data-discount-code=${discountCode}]`);
                        $selCoupons.addClass(applyClass);
                        const $btns = $coupon.find(".sales-discount-coupon-card-btn-hook");
                        $btns.text($btns.data("apply"));
                        const $btnItems = $selCoupons.find(".sales-discount-coupon-card-btn-hook");
                        $btnItems.text($btnItems.data("applied"));
                    })).catch((() => {
                        _commons_components_toast__WEBPACK_IMPORTED_MODULE_4__["default"].init({
                            content: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_7__.t)("sales.discount-coupon.applyFail")
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
                }));
                handleTagsShow();
            }
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = initDiscountCoupon;
    },
    "./src/assets/product/utils/sku/skuFilter.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getSkuComMap: () => getSkuComMap,
            getSku: () => getSku,
            transSkuSpecList: () => transSkuSpecList,
            getAttrValue: () => getAttrValue
        });
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
    },
    "./src/assets/product/utils/sku/skuUtil.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => SkuUtil
        });
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
    },
    "../shared/browser/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getShoppingReminderTranslate: () => getShoppingReminderTranslate,
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/currency/CurrencyConvert.js");
        function setWrapper(value, warper) {
            var _warper$style;
            return warper ? `<span class="notranslate ${warper.class}" style="font-size: 14px; font-weight: bold;${null !== (_warper$style = warper.style) && void 0 !== _warper$style ? _warper$style : ""}">${value}</span>` : value;
        }
        const BenefitTypeEnum = {
            PRICE: 1,
            DISCOUNT: 2,
            NTH_PRICE: 11,
            FREELOWESTPRICE: 9,
            FREESHOPPING: 3
        };
        const ThresholdTypeEnum = {
            PRICE: 0,
            NUMBER: 1
        };
        function formatBenefitNum(str, type) {
            if (void 0 === str) return "";
            const num = Number(str) || 0;
            if ((null === type || void 0 === type ? void 0 : type.thresholdType) === ThresholdTypeEnum.NUMBER) return num;
            if ((null === type || void 0 === type ? void 0 : type.benefitType) === BenefitTypeEnum.DISCOUNT || (null === type || void 0 === type ? void 0 : type.benefitType) === BenefitTypeEnum.NTH_PRICE) return `${100 - num}%`;
            if ((null === type || void 0 === type ? void 0 : type.benefitType) === BenefitTypeEnum.PRICE || (null === type || void 0 === type ? void 0 : type.thresholdType) === ThresholdTypeEnum.PRICE) return `<span data-amount="${num}">${(0, 
            _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_0__.convertFormat)(num)}</span>`;
            if ((null === type || void 0 === type ? void 0 : type.benefitType) === BenefitTypeEnum.FREELOWESTPRICE) return num;
            return "";
        }
        function getShoppingReminderConfig(promotion, {lineBreak = false, warper} = {}) {
            const {benefitType, promotionBenefitList} = null !== promotion && void 0 !== promotion ? promotion : {};
            if (null !== promotionBenefitList && void 0 !== promotionBenefitList && promotionBenefitList.length) {
                var _promotionBenefitList, _promotionBenefitList2, _current2, _current3, _warper$class, _next2, _next3, _warper$class2, _next4, _warper$class3;
                const thresholdType = promotionBenefitList[0].type;
                let current;
                let next;
                let step;
                if (!(null !== promotionBenefitList && void 0 !== promotionBenefitList && promotionBenefitList[1])) if (promotionBenefitList[0].hit) {
                    step = 3;
                    current = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : promotionBenefitList[0];
                } else {
                    step = 1;
                    next = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : promotionBenefitList[0];
                } else if (promotionBenefitList[1].hit) {
                    step = 3;
                    current = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : promotionBenefitList[1];
                } else {
                    step = 2;
                    current = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : promotionBenefitList[0];
                    next = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : promotionBenefitList[1];
                }
                const basePath = `sales.promotion.reminder.benefit${benefitType}.threshold${thresholdType}.step${step}`;
                let completePath = basePath;
                if (benefitType === BenefitTypeEnum.NTH_PRICE) {
                    var _current, _next;
                    if ("0" === (null === (_current = current) || void 0 === _current ? void 0 : _current.benefit)) completePath = `${basePath}.free`; else if ("0" === (null === (_next = next) || void 0 === _next ? void 0 : _next.benefit)) completePath = `${basePath}.nextFree`; else completePath = `${basePath}.normal`;
                }
                const prerequisiteShippingPriceRange = null === promotionBenefitList || void 0 === promotionBenefitList ? void 0 : null === (_promotionBenefitList = promotionBenefitList[0]) || void 0 === _promotionBenefitList ? void 0 : null === (_promotionBenefitList2 = _promotionBenefitList.extMap) || void 0 === _promotionBenefitList2 ? void 0 : _promotionBenefitList2.prerequisiteShippingPriceRange;
                if (benefitType === BenefitTypeEnum.FREESHOPPING) if (prerequisiteShippingPriceRange) completePath = `${basePath}.upperLimit`; else completePath = `${basePath}.unlimited`;
                return {
                    path: completePath,
                    params: {
                        saved: setWrapper(formatBenefitNum(benefitType === BenefitTypeEnum.FREELOWESTPRICE ? null === (_current2 = current) || void 0 === _current2 ? void 0 : _current2.benefitCount : null === (_current3 = current) || void 0 === _current3 ? void 0 : _current3.benefit, {
                            benefitType
                        }), {
                            ...warper,
                            class: `sales__promotionReminder-saved ${null !== (_warper$class = null === warper || void 0 === warper ? void 0 : warper.class) && void 0 !== _warper$class ? _warper$class : ""}`
                        }),
                        willSave: setWrapper(formatBenefitNum(benefitType === BenefitTypeEnum.FREELOWESTPRICE ? null === (_next2 = next) || void 0 === _next2 ? void 0 : _next2.benefitCount : null === (_next3 = next) || void 0 === _next3 ? void 0 : _next3.benefit, {
                            benefitType
                        }), {
                            ...warper,
                            class: `sales__promotionReminder-willSave custom-sale-color ${null !== (_warper$class2 = null === warper || void 0 === warper ? void 0 : warper.class) && void 0 !== _warper$class2 ? _warper$class2 : ""}`
                        }),
                        threshold: setWrapper(formatBenefitNum(null === (_next4 = next) || void 0 === _next4 ? void 0 : _next4.amount, {
                            thresholdType
                        }), {
                            ...warper,
                            class: `sales__promotionReminder-threshold custom-sale-color ${null !== (_warper$class3 = null === warper || void 0 === warper ? void 0 : warper.class) && void 0 !== _warper$class3 ? _warper$class3 : ""}`
                        }),
                        br: lineBreak ? setWrapper("<br/>") : setWrapper("<i></i>"),
                        upperLimit: benefitType === BenefitTypeEnum.FREESHOPPING && prerequisiteShippingPriceRange ? (0, 
                        _yy_sl_theme_shared_utils_currency_CurrencyConvert__WEBPACK_IMPORTED_MODULE_0__.convertFormat)(prerequisiteShippingPriceRange) : void 0
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
        const getShoppingReminderTranslate = (promotion, configs) => {
            const config = getShoppingReminderConfig(promotion, configs);
            return (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(config.path, config.params);
        };
        const __WEBPACK_DEFAULT_EXPORT__ = getShoppingReminderConfig;
    },
    "../shared/browser/components/hbs/flashSale/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _shared_components_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/shared/components/toast/index.js");
        var _utils_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/i18n.js");
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
            switch (null === saleBuyLimitConfig || void 0 === saleBuyLimitConfig ? void 0 : saleBuyLimitConfig.userLimitedType) {
              case TOAST_TYPE.ACTIVE_PURCHASE_LIMIITED:
                return (0, _utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("productDetail.activityToast.product-limit", {
                    stock: (null === saleBuyLimitConfig || void 0 === saleBuyLimitConfig ? void 0 : saleBuyLimitConfig.acquirePerUserLimit) > 0 ? null === saleBuyLimitConfig || void 0 === saleBuyLimitConfig ? void 0 : saleBuyLimitConfig.acquirePerUserLimit : "0"
                });

              case TOAST_TYPE.PRODUCT_PURCHASE_LIMIITED:
                return (0, _utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("productDetail.activityToast.price-limit", {
                    num: (null === saleBuyLimitConfig || void 0 === saleBuyLimitConfig ? void 0 : saleBuyLimitConfig.acquirePerUserLimit) > 0 ? null === saleBuyLimitConfig || void 0 === saleBuyLimitConfig ? void 0 : saleBuyLimitConfig.acquirePerUserLimit : "0"
                });

              case TOAST_TYPE.ACTIVE_NOSTOCK:
                return (0, _utils_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("productDetail.activityToast.title-limit");

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
                this.toast = new _shared_components_toast__WEBPACK_IMPORTED_MODULE_0__["default"];
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
                if ((null === sku || void 0 === sku ? void 0 : sku.stock) <= this.option.productInfo[this.option.id].productNum) this.option.productInfo[this.option.id].productNum = sku.stock;
            }
            checkData(data) {
                var _data$selector, _data$selector$attr;
                if ((null === data || void 0 === data ? void 0 : data.id) === this.option.id || (null === data || void 0 === data ? void 0 : null === (_data$selector = data.selector) || void 0 === _data$selector ? void 0 : null === (_data$selector$attr = _data$selector.attr("id")) || void 0 === _data$selector$attr ? void 0 : _data$selector$attr.indexOf(this.option.id)) > -1) return true;
                return false;
            }
            getProductNum(value) {
                this.option.productInfo[this.option.id].productNum = value;
            }
            dataProcess(sku) {
                var _sku$saleActivityResp;
                const prdInfo = this.option.productInfo[this.option.id];
                if (!(null !== sku && void 0 !== sku && sku.saleActivityResponseList)) {
                    this.option.productInfo[this.option.id] = {};
                    return;
                }
                null === sku || void 0 === sku ? void 0 : null === (_sku$saleActivityResp = sku.saleActivityResponseList) || void 0 === _sku$saleActivityResp ? void 0 : _sku$saleActivityResp.forEach((item => {
                    if (1 === (null === item || void 0 === item ? void 0 : item.promotionType) && 1 === (null === item || void 0 === item ? void 0 : item.promotionSubType)) {
                        var _item$saleBuyLimitCon, _item$skuPromotionPro, _item$skuPromotionPro2;
                        this.option.productInfo[this.option.id].activeTip = !(null !== item && void 0 !== item && null !== (_item$saleBuyLimitCon = item.saleBuyLimitConfig) && void 0 !== _item$saleBuyLimitCon && _item$saleBuyLimitCon.allowBuyOverLimit) ? template(null === item || void 0 === item ? void 0 : item.saleBuyLimitConfig) : "";
                        prdInfo.promotionRemainStock = null === item || void 0 === item ? void 0 : null === (_item$skuPromotionPro = item.skuPromotionProduct) || void 0 === _item$skuPromotionPro ? void 0 : _item$skuPromotionPro.promotionRemainStock;
                        prdInfo.userRemainBuyCount = null === item || void 0 === item ? void 0 : null === (_item$skuPromotionPro2 = item.skuPromotionProduct) || void 0 === _item$skuPromotionPro2 ? void 0 : _item$skuPromotionPro2.userRemainBuyCount;
                    }
                }));
                prdInfo.stock = null === sku || void 0 === sku ? void 0 : sku.stock;
            }
            showTips(value) {
                const prdInfo = this.option.productInfo[this.option.id];
                if (null !== prdInfo && void 0 !== prdInfo && prdInfo.activeTip && -1 !== (null === prdInfo || void 0 === prdInfo ? void 0 : prdInfo.promotionRemainStock) && (null === prdInfo || void 0 === prdInfo ? void 0 : prdInfo.promotionRemainStock) < value) this.toast.open(template({
                    userLimitedType: -1
                })); else if (null !== prdInfo && void 0 !== prdInfo && prdInfo.activeTip && (null === prdInfo || void 0 === prdInfo ? void 0 : prdInfo.userRemainBuyCount) < value) this.toast.open(null === prdInfo || void 0 === prdInfo ? void 0 : prdInfo.activeTip);
            }
        }
        const __WEBPACK_DEFAULT_EXPORT__ = FlashSale;
    },
    "../shared/browser/components/hbs/productImages/js/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => ProductImages
        });
        var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
        var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/swiper/esm/components/lazy/lazy.js");
        var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/swiper/esm/components/thumbs/thumbs.js");
        var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/swiper/esm/components/navigation/navigation.js");
        var photoswipe_dist_photoswipe_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/photoswipe/dist/photoswipe.min.js");
        var photoswipe_dist_photoswipe_min__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(photoswipe_dist_photoswipe_min__WEBPACK_IMPORTED_MODULE_0__);
        var photoswipe_dist_photoswipe_ui_default_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/photoswipe/dist/photoswipe-ui-default.min.js");
        var photoswipe_dist_photoswipe_ui_default_min__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(photoswipe_dist_photoswipe_ui_default_min__WEBPACK_IMPORTED_MODULE_1__);
        var yt_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/yt-player/index.js");
        var yt_player__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(yt_player__WEBPACK_IMPORTED_MODULE_2__);
        var _utils_img_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/img-size.js");
        var _product_photoSwipeHtml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../shared/browser/components/hbs/productImages/js/product-photoSwipeHtml.js");
        var _shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../shared/browser/components/hbs/shared/utils/imgUrl.js");
        __webpack_require__("./node_modules/swiper/swiper-bundle.css");
        var _shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../shared/browser/components/hbs/shared/utils/getYouTubeCover.js");
        var _utils_lozad_plugins_image_gif_poster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/lozad/plugins/image-gif-poster.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([ swiper__WEBPACK_IMPORTED_MODULE_7__["default"], swiper__WEBPACK_IMPORTED_MODULE_8__["default"], swiper__WEBPACK_IMPORTED_MODULE_9__["default"], swiper__WEBPACK_IMPORTED_MODULE_10__["default"] ]);
        const COLUMN = "column";
        const ROW = "row";
        const WRAP_PC_ID = ".product_pc_productImageContainer";
        const WRAP_M_ID = ".product_mobile_productImageContainer";
        function handleVideoPlayPause(videoPlayer, type) {
            if ("play" === type) null === videoPlayer || void 0 === videoPlayer ? void 0 : videoPlayer.play();
            if ("pause" === type) null === videoPlayer || void 0 === videoPlayer ? void 0 : videoPlayer.pause();
        }
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
        class ProductImages {
            constructor(options) {
                var _this$swiper;
                const {selectorId, heightOnChange, swiperConfig, mediaList} = options || {};
                this.mediaList = mediaList || [];
                this.config = {};
                this.swiperConfig = swiperConfig || {};
                this.heightChangedCount = 0;
                this.heightOnChange = heightOnChange || null;
                this.slideItems = [];
                if (!selectorId) {
                    console.error(`初始化productImages组件失败，selectorId为空，请输入唯一id`);
                    $(WRAP_PC_ID).hide();
                    $(WRAP_M_ID).hide();
                    return;
                }
                const pcWrapperSelector = `.${ProductImages.pcSelectorPrefix}_${selectorId}`;
                const mobileWrapperSelector = `.${ProductImages.mobileSelectorPrefix}_${selectorId}`;
                if (0 === $(`${pcWrapperSelector}`).length || 0 === $(`${mobileWrapperSelector}`).length) {
                    console.error(`初始化productImages组件失败，请检查selectorId是否输错，应存在html上`);
                    $(pcWrapperSelector).hide();
                    $(mobileWrapperSelector).hide();
                    return;
                }
                const pcWrapper = $(`${pcWrapperSelector}`);
                this.thumbsDirection = "aside" === pcWrapper.data("thumbs-direction") ? COLUMN : ROW;
                this.showThumbsArrow = "true" === String(pcWrapper.data("show-thumbnail-arrow"));
                this.productImageScale = "true" === String($(`.product_productImageScale_${selectorId}`).val());
                this.productVideoMute = "true" === String($(`.product_productVideoMute_${selectorId}`).val());
                this.productVideoLoop = "true" === String($(`.product_productVideoLoop_${selectorId}`).val());
                this.mobileWidthRatio = $(mobileWrapperSelector).hasClass("middleWidth") ? .75 : 1;
                this.productImageLength = $(".product_productImageLength").val();
                this.id = pcWrapperSelector;
                this.mobileId = mobileWrapperSelector;
                this.mobileSwiper = this.initMobileProductImages(true);
                this.swiper = this.initPcProductImages(true);
                null === (_this$swiper = this.swiper) || void 0 === _this$swiper ? void 0 : _this$swiper.init();
                this.videoPcPlayer = this.initPcVideo();
                this.videoMobilePlayer = this.initMobileVideo();
                this.videoMobilePlayerStatus = "pause";
            }
            setConfig(config) {
                if (!this.config.app) this.config.app = [];
                this.config.app.push(config.app);
            }
            verifySource(app) {
                var _this$config$app;
                if (!(null !== (_this$config$app = this.config.app) && void 0 !== _this$config$app && _this$config$app.length) || this.config.app.includes(app)) return true;
                return false;
            }
            initPcVideo() {
                const videoPcSelector = `${this.id} .product_youTubeVideoBox`;
                const videoDom = $(videoPcSelector);
                if (videoDom.length > 0) {
                    const videoPlayer = new (yt_player__WEBPACK_IMPORTED_MODULE_2___default())(videoPcSelector, {
                        modestBranding: true,
                        controls: false
                    });
                    const videoId = videoDom.data("video-id");
                    videoPlayer.load(videoId);
                    window.SL_EventBus.on("global:popup:close", (() => {
                        handleVideoPlayPause(videoPlayer, "pause");
                    }));
                    videoPlayer.on("playing", (() => {
                        window.SL_EventBus.emit("product:product-play-video");
                    }));
                    if (this.productVideoMute) videoPlayer.mute();
                    if (this.productVideoLoop) videoPlayer.on("ended", (() => {
                        videoPlayer.play();
                    }));
                    return videoPlayer;
                }
                return null;
            }
            initMobileVideo() {
                const videoMDom = $(`${this.mobileId} .swiper-slide`).not(".swiper-slide-duplicate").find(".product_youTubeVideoBox").addClass("product_youTubeMobileVideoBox");
                const videoCoverDom = $(`${this.mobileId} .videoItem`).not(".swiper-slide-duplicate").find(".product_photoSwipe_image");
                if (videoMDom.length > 0) {
                    const videoPlayer = new (yt_player__WEBPACK_IMPORTED_MODULE_2___default())(".product_youTubeMobileVideoBox", {
                        modestBranding: true,
                        controls: false
                    });
                    const videoId = videoMDom.data("video-id");
                    videoPlayer.load(videoId);
                    videoPlayer.on("playing", (() => {
                        window.SL_EventBus.emit("product:product-play-video");
                    }));
                    if (this.productVideoMute) videoPlayer.mute();
                    if (this.productVideoLoop) videoPlayer.on("ended", (() => {
                        videoPlayer.play();
                    }));
                    videoCoverDom.on("click", (() => {
                        if ("pause" === this.videoMobilePlayerStatus) {
                            handleVideoPlayPause(videoPlayer, "play");
                            this.videoMobilePlayerStatus = "play";
                        } else {
                            handleVideoPlayPause(videoPlayer, "pause");
                            this.videoMobilePlayerStatus = "pause";
                        }
                    }));
                    return videoPlayer;
                }
                return null;
            }
            initPhotoSwipe(slidesWrapID, platform) {
                if (0 === Number(this.productImageLength)) return;
                const slidesSelector = `${slidesWrapID} .product_productImages`;
                const triggerDom = $(slidesSelector);
                const eventDom = "mobile" === platform ? ".scaleImageIcon" : ".swiper-slide";
                const self = this;
                self.updatePhotoSwipeItems(slidesWrapID);
                triggerDom.on("click", eventDom, (function() {
                    var _self$slideItems;
                    if ($(this).hasClass("swiper-slide-duplicate") || !(null !== (_self$slideItems = self.slideItems) && void 0 !== _self$slideItems && _self$slideItems.length)) return;
                    const triggerThis = "mobile" === platform ? $(this).closest(".imageItem") : $(this);
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
                $(`${this.id} .product_pc_skuImage`).on("click", (function() {
                    const items = [ {
                        src: $(this).find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: $(this)[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            handlePhotoSwiper(items, index, cacheNaturalSize) {
                let pswpElement = document.querySelectorAll(".pswp")[0];
                if (!pswpElement) {
                    $("body").append(_product_photoSwipeHtml__WEBPACK_IMPORTED_MODULE_11__["default"]);
                    pswpElement = document.querySelectorAll(".pswp")[0];
                }
                this.openPhotoSwipe(pswpElement, items, index, cacheNaturalSize);
            }
            initMobileSkuPhotoSwiper() {
                const self = this;
                $(`${this.mobileId} .product_m_skuImageBox .scaleSkuImageIcon`).on("click", (function() {
                    const items = [ {
                        src: $(this).parent().find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: $(this).parent()[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            updatePhotoSwipeItems(slidesWrapID) {
                const slidesDom = $(`${slidesWrapID} .product_productImages`).find(".swiper-slide").not(".swiper-slide-duplicate").filter((function() {
                    return !$(this).children(".product-detail-empty-image").length;
                }));
                const items = [];
                slidesDom.each(((index, item) => {
                    const imgEl = $(item).find(".product_photoSwipe_image");
                    const size = $(item).attr("data-natural-size");
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
                if ((null === items || void 0 === items ? void 0 : items.length) > 1) $(".pswp__button--arrow--left, .pswp__button--arrow--right").show(); else $(".pswp__button--arrow--left, .pswp__button--arrow--right").hide();
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
                        var _items$_index$el;
                        let thumbnailParent;
                        if (-1 !== (null === (_items$_index$el = items[_index].el) || void 0 === _items$_index$el ? void 0 : _items$_index$el.className.indexOf("swiper-slide-duplicate"))) thumbnailParent = $(`${self.mobileId} .swiper-slide`).eq(self.mobileSwiper.activeIndex).get(0); else thumbnailParent = items[_index].el;
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
                const gallery = new (photoswipe_dist_photoswipe_min__WEBPACK_IMPORTED_MODULE_0___default())(pswpElement, photoswipe_dist_photoswipe_ui_default_min__WEBPACK_IMPORTED_MODULE_1___default(), items, photoSwipeOptions);
                gallery.listen("gettingData", (function(_index, item) {
                    const imgWrapEl = item.el;
                    if (!imgWrapEl.getAttribute("data-natural-size")) {
                        const img = new Image;
                        img.onload = () => {
                            var _imgSize;
                            const hasWH = null === (_imgSize = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(img.src)) || void 0 === _imgSize ? void 0 : _imgSize.ratio;
                            if (cacheNaturalSize) {
                                const naturalSize = hasWH ? `${img.naturalWidth}x${img.naturalHeight}` : `100x100`;
                                imgWrapEl.setAttribute("data-natural-size", naturalSize);
                            }
                            item.w = img.naturalWidth;
                            item.h = img.naturalHeight;
                            gallery.updateSize(true);
                        };
                        img.src = item.src;
                    }
                }));
                gallery.init();
                gallery.listen("afterChange", (() => {
                    this.galleryAfterChange(gallery);
                }));
            }
            galleryAfterChange(gallery) {
                var _this$swiper2, _this$mobileSwiper;
                const currentIndex = gallery.getCurrentIndex();
                null === (_this$swiper2 = this.swiper) || void 0 === _this$swiper2 ? void 0 : _this$swiper2.slideTo(currentIndex);
                null === (_this$mobileSwiper = this.mobileSwiper) || void 0 === _this$mobileSwiper ? void 0 : _this$mobileSwiper.slideToLoop(currentIndex);
            }
            heightOnChangeCb(height) {
                setTimeout((() => {
                    var _this$heightOnChange;
                    null === (_this$heightOnChange = this.heightOnChange) || void 0 === _this$heightOnChange ? void 0 : _this$heightOnChange.call(this, height);
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
                        const currentSlide = $(`${selector} .swiper-slide`).eq(activeIndex);
                        if (!targetImgSrc && currentSlide.find(".product-detail-empty-image").length > 0) {
                            const mobileWidthRatio = "block" === $(`${self.mobileId}`).css("display") ? self.mobileWidthRatio : 1;
                            const boxWidth = parseInt($(`${selector}`).width() * mobileWidthRatio, 10);
                            $(`${selector}`).css("height", boxWidth);
                            self.heightOnChangeCb(boxWidth);
                            resolve(boxWidth);
                            return;
                        }
                        if (currentSlide.hasClass("videoItem") && !targetImgSrc) {
                            const videoBoxHeight = parseInt(currentSlide.children().innerHeight(), 10);
                            $(`${selector}`).css("height", videoBoxHeight);
                            self.heightOnChangeCb(videoBoxHeight);
                            window.SL_EventBus.emit("product:expose-product-video", currentSlide);
                            resolve(videoBoxHeight);
                        } else if (currentSlide.hasClass("imageItem") || targetImgSrc) {
                            const currentSlideImgNaturalSize = currentSlide.attr("data-natural-size");
                            if (currentSlideImgNaturalSize && !targetImgSrc) {
                                const [imgNaturalWidth, imgNaturalHeight] = currentSlideImgNaturalSize.split("x");
                                const wrapperHeight = parseInt(String($(`${selector}`)[0].offsetWidth * ratio * imgNaturalHeight / imgNaturalWidth), 10);
                                $(`${selector}`).css("height", wrapperHeight);
                                self.heightOnChangeCb(wrapperHeight);
                                resolve(wrapperHeight);
                                return;
                            }
                            const currentSlideImg = currentSlide.find("img");
                            const imgSrc = targetImgSrc || currentSlideImg.attr("src") || currentSlideImg.attr("data-src");
                            if (!targetImgSrc && "none" !== $(`${self.id}`).css("display")) {
                                const slideHeight = parseInt(currentSlide.innerHeight(), 10);
                                $(`${selector}`).css("height", slideHeight);
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
                                const height = parseInt(String($(`${selector}`)[0].offsetWidth * ratio * img.height / img.width), 10);
                                $(`${selector}`).css("height", height);
                                self.heightOnChangeCb(height);
                                resolve(height);
                            }), (() => {
                                if (count !== this.heightChangedCount) {
                                    resolve();
                                    return;
                                }
                                const mobileWidthRatio = "block" === $(`${self.mobileId}`).css("display") ? self.mobileWidthRatio : 1;
                                const boxWidth = parseInt($(`${selector}`).width() * mobileWidthRatio, 10);
                                $(`${selector}`).css("height", boxWidth);
                                if (targetImgSrc && -1 !== selector.indexOf(ProductImages.pcSelectorPrefix)) $(`${this.id} .product_pc_skuImage`).addClass("imageItemError"); else if (targetImgSrc && -1 !== selector.indexOf(ProductImages.mobileSelectorPrefix)) {
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
                $(`${this.id} .product_thumbsColumnContainer .productImageThumbs`).css({
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
                $(`${selectorPrefix} .thumbsArrowTop,${selectorPrefix} .thumbsArrowBottom`).show();
                if (0 === activeIndex) {
                    $(`${selectorPrefix} .thumbsArrowTop`).hide();
                    if (direction === COLUMN) this.setColumnThumbsSwiperHeight(`${wrapperHeight - 25}`);
                }
                if (activeIndex + 1 === slideLen) {
                    $(`${selectorPrefix} .thumbsArrowBottom`).hide();
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
                const skuImageDom = $(`${this.id} .product_pc_skuImage`);
                const currentIndex = $(`${this.id}`).attr("data-index");
                if (skuImageDom.hasClass("imageItemError")) skuImageDom.removeClass("imageItemError");
                if (isShow && skuImageUrl) {
                    skuImageDom.show().html(`<img class="product_photoSwipe_image" data-photoswipe-src=${(0, 
                    _shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(skuImageUrl, {
                        width: 1800
                    })} src=${skuImageUrl} />`);
                    $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).removeClass("active");
                } else if (!isShow) {
                    skuImageDom.hide().empty();
                    $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).addClass("active");
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
                    const productImageThumbs = $(`${this.id} .product_thumbsColumnContainer .productImageThumbs`);
                    if (smooth) productImageThumbs.addClass("smooth-animate"); else productImageThumbs.removeClass("smooth-animate");
                    productImageThumbs.scrollTop(distance);
                }), timeout); else if ("scrollLeft" === type) setTimeout((() => {
                    const productImageThumbs = $(`${this.id} .product_thumbsRowContainer .productImageThumbs`);
                    if (smooth) productImageThumbs.addClass("smooth-animate"); else productImageThumbs.removeClass("smooth-animate");
                    productImageThumbs.scrollLeft(distance);
                }), timeout);
            }
            getThumbsPosition(type, index) {
                const columnThumbsListDom = $(`${this.id} .product_thumbsColumnContainer .thumbsImageItem`);
                const rowThumbsListDom = $(`${this.id} .product_thumbsRowContainer .thumbsImageItem`);
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
                $(`${this.id} .arrowTop`).on("click", (() => {
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
                $(`${this.id} .arrowBottom`).on("click", (() => {
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
                $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).removeClass("active").eq(index).addClass("active");
                $(`${this.id}`).attr("data-index", index);
            }
            async initThumbsSwiper(firstInit) {
                const {thumbsDirection} = this;
                const self = this;
                const bindClickDom = $(`${this.id} .product_thumbs${thumbsDirection === COLUMN ? "Column" : "Row"}Container `);
                bindClickDom.on("click", ".thumbsImageItem", (function() {
                    const index = $(this).index();
                    self.swiper.slideTo(index);
                    if ("block" === $(`${self.id} .product_pc_skuImage`).css("display")) {
                        self.handlePcSkuImage(false);
                        $(this).addClass("active");
                    }
                }));
                const skuImageDom = $(`${this.id} .product_pc_skuImage`).find("img");
                const skuImage = skuImageDom.attr("data-src") || skuImageDom.attr("src");
                if (!skuImage) this.handlePcThumbsActive(self.swiper.activeIndex);
                await this.handleEffectSwiperHeight(skuImage ? skuImage : null);
                if (skuImage && firstInit) {
                    const firstActiveImg = $(`${this.id}`).find(".swiper-slide-active img");
                    if ((null === firstActiveImg || void 0 === firstActiveImg ? void 0 : firstActiveImg.length) > 0) {
                        var _imgSize2;
                        const src = firstActiveImg.attr("src") || firstActiveImg.attr("data-src");
                        const ratio = (null === (_imgSize2 = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(src)) || void 0 === _imgSize2 ? void 0 : _imgSize2.ratio) || "100%";
                        firstActiveImg.parent().css("paddingBottom", ratio);
                    }
                    const emptyDom = $(`${this.id}`).find(".product-detail-empty-image");
                    console.log("emptyDom", emptyDom.length);
                    if ((null === emptyDom || void 0 === emptyDom ? void 0 : emptyDom.length) > 0) emptyDom.css("paddingBottom", "100%");
                }
                if (firstInit) $(`${this.id}`).find(".swiper-slide").removeClass("firstInit");
                $(`${this.id} .product_thumbsColumnContainer`).height("auto");
                $(`${this.id} .product_thumbsRowContainer`).height("auto");
                this.initHandleProductImagesArrow();
            }
            initPcProductImages(firstInit) {
                const pcProductImagesDom = $(`${this.id}`);
                if (0 == pcProductImagesDom.find(".product_productImages").length || "none" === pcProductImagesDom.css("display")) return null;
                const mainSwiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"](`${this.id} .product_productImages`, {
                    initialSlide: $(`${this.id}`).data("initial-slide") || 0,
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
                            handleVideoPlayPause(this.videoPcPlayer, "pause");
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
                            _utils_lozad_plugins_image_gif_poster__WEBPACK_IMPORTED_MODULE_5__["default"].load(imageEl);
                        }
                    }
                });
                return mainSwiper;
            }
            handleMActivePagination(activeIndex) {
                const listContainer = $(`${this.mobileId} .paginationList`);
                const scrollWrapper = listContainer.children(".paginationListWrapper");
                const activeBullets = scrollWrapper.children("span").removeClass([ "active", "next" ]);
                const activeBullet = activeBullets.eq(activeIndex).addClass("active");
                if (activeBullets.length < 6) {
                    scrollWrapper.css("transform", "");
                    return;
                }
                let prevNext, nextNext;
                if (0 === activeIndex) {
                    prevNext = -1;
                    nextNext = activeIndex + 4;
                } else if (1 === activeIndex) {
                    prevNext = 0;
                    nextNext = activeIndex + 3;
                } else if (activeIndex === activeBullets.length - 1) {
                    prevNext = activeIndex - 4;
                    nextNext = activeIndex + 1;
                } else if (activeIndex === activeBullets.length - 2) {
                    prevNext = activeIndex - 3;
                    nextNext = -1;
                } else {
                    prevNext = activeIndex - 2;
                    nextNext = activeIndex + 2;
                }
                if (prevNext > -1) activeBullets.eq(prevNext).addClass("next");
                if (nextNext > -1) activeBullets.eq(nextNext).addClass("next");
                let translateX = listContainer.width() / 2 - activeBullet.outerWidth(true) / 2 - activeBullet.position().left;
                const min = listContainer.width() - scrollWrapper.width();
                if (translateX > 0) translateX = 0; else if (translateX < min) translateX = min;
                scrollWrapper.css("transform", `translateX(${translateX}px)`);
            }
            handleMobileSkuImage(isShow, skuImageUrl) {
                const selector = `${this.mobileId} .product_productImages`;
                const mainSwiperDom = $(selector);
                if (!this.mobileSwiper) return;
                if (0 === mainSwiperDom.length) {
                    console.error("m端切换sku图片失败，请检查selectorId是否输错，应存在html上");
                    return;
                }
                const {realIndex} = this.mobileSwiper;
                if (isShow) this.toggleMSkuImage(realIndex, true, skuImageUrl); else this.toggleMSkuImage(realIndex, false);
            }
            getSwiperIsLoop() {
                return $(`${this.mobileId} .product_productImages .swiper-slide-duplicate`).length > 0;
            }
            bindMobileSkuImageScaleDom() {
                const self = this;
                $(".product_m_skuImageBox .scaleSkuImageIcon").on("click", (function() {
                    const items = [ {
                        src: $(this).parent().find(".product_photoSwipe_image").attr("data-photoswipe-src"),
                        w: 0,
                        h: 0,
                        el: $(this).parent()[0]
                    } ];
                    self.handlePhotoSwiper(items, 0, false);
                }));
            }
            getMobileCurrentSlideDom(index) {
                const {realIndex} = this.mobileSwiper || {};
                const _index = index || realIndex;
                const swiperIsLoop = this.getSwiperIsLoop();
                const currentSlideDom = swiperIsLoop ? $(`${this.mobileId} .product_productImages .swiper-slide[data-swiper-slide-index="${_index}"]`) : $(`${this.mobileId} .product_productImages .swiper-slide`).eq(_index);
                return currentSlideDom;
            }
            setCurrentSlidePB($dom, imageUrl) {
                var _imgSize3;
                const ratio = (null === (_imgSize3 = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(imageUrl)) || void 0 === _imgSize3 ? void 0 : _imgSize3.ratio) || "100%";
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
                const skuImageDom = `\n    <div class="product_m_skuImageBox">\n      <img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_m_skuImage product_photoSwipe_image" data-photoswipe-src=${(0, 
                _shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(skuImageUrl, {
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
                            "data-photoswipe-src": (0, _shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(skuImageUrl, {
                                width: 1800
                            }),
                            onerror: "this.onerror=null;this.parentElement.className+=' imageItemError';"
                        }).show();
                        self.setCurrentSlidePB(currentSlideBox, skuImageUrl);
                    }
                    this.mobileSwiper.updateAutoHeight();
                    $(`${this.mobileId} .product_productImages`).attr("sku-image-index", index);
                } else if (!isShow && void 0 !== index && currentSkuImageBox.length > 0) {
                    const slideImg = currentSlideDom.find("img");
                    if (currentSlideBox.attr("data-image-ratio")) currentSlideBox.css("paddingBottom", currentSlideBox.attr("data-image-ratio")).removeAttr("data-sku-image-ratio");
                    currentSkuImageBox.remove();
                    slideImg.show();
                    this.mobileSwiper.updateAutoHeight();
                    $(`${this.mobileId} .product_productImages`).attr("sku-image-index", null);
                }
            }
            handleMobileScaleImage() {
                $(`${this.mobileId} .paginationList div`).removeClass("active").eq(activeIndex).addClass("active");
            }
            initMobileProductImages(firstInit) {
                const mobileProductImagesDom = $(`${this.mobileId}`);
                const selector = `${this.mobileId} .product_productImages`;
                const mainSwiperDom = $(selector);
                const slidesLength = mainSwiperDom.find(".swiper-slide").length;
                const videoDom = mainSwiperDom.find(".videoItem");
                const videoIndex = videoDom.data("index");
                const videoIsStartOrEndPos = 0 === videoIndex || videoIndex === videoDom.data("length") - 1 || 1 === slidesLength;
                if (0 === mainSwiperDom.length || "none" === mobileProductImagesDom.css("display")) return null;
                const mainSwiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"](selector, {
                    loop: videoIsStartOrEndPos ? false : true,
                    initialSlide: $(`${this.mobileId}`).data("initial-slide") || 0,
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
                                var _window$lozadObserver;
                                if (this.productImageScale) {
                                    this.initPhotoSwipe(this.mobileId, "mobile");
                                    this.initMobileSkuPhotoSwiper();
                                }
                                this.handleMActivePagination(swiper.realIndex);
                                $(`${this.mobileId} .product_productImages`).attr("sku-image-index", swiper.realIndex);
                                if (videoIsStartOrEndPos) {
                                    const skuImageDom = $(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find(".product_m_skuImage");
                                    skuImageDom.attr("src") || skuImageDom.attr("data-src");
                                }
                                $(`${this.mobileId} .product_productImages .swiper-slide`).css("height", "auto");
                                swiper.updateAutoHeight();
                                null === (_window$lozadObserver = window.lozadObserver) || void 0 === _window$lozadObserver ? void 0 : _window$lozadObserver.observe();
                            }
                        },
                        slideChange: swiper => {
                            handleVideoPlayPause(this.videoMobilePlayer, "pause");
                            this.videoMobilePlayerStatus = "pause";
                            this.handleMActivePagination(swiper.realIndex);
                            const skuImageDom = $(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find(".product_m_skuImage");
                            skuImageDom.attr("src") || skuImageDom.attr("data-src");
                        },
                        slideChangeTransitionEnd: () => {
                            const skuImageIndex = $(`${this.mobileId} .product_productImages`).attr("sku-image-index");
                            if (void 0 !== skuImageIndex) this.toggleMSkuImage(skuImageIndex, false);
                        }
                    },
                    ...this.swiperConfig.mobile
                });
                return mainSwiper;
            }
            updateSlides(list) {
                var _list$, _list;
                $(`${this.id} .product_productImages`).children(".swiper-wrapper").empty().append(null !== list && void 0 !== list && list.length ? list.map(((item, index) => {
                    var _imgSize4;
                    const imgRatio = (null === (_imgSize4 = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(item.resource)) || void 0 === _imgSize4 ? void 0 : _imgSize4.ratio) || "100%";
                    if ("VIDEO" === item.type) {
                        const {middle: cover, videoId} = (0, _shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_13__["default"])(item.resource);
                        return `<div class="swiper-slide videoItem">\n<div class="product_youTubeVideoContainer">\n<div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>\n</div>\n<img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image swiper-lazy" data-photoswipe-src="${cover}" ${0 !== index ? "data-" : ""}src="${cover}" alt="">\n</div>`;
                    }
                    return `<div class="swiper-slide imageItem" style="height: 0; padding-bottom:${imgRatio}"><img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${0 !== index ? "data-" : ""}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image"></div>`;
                })) : `<div class="swiper-slide"><div class="product-detail-empty-image"></div></div>`);
                const slidesLength = list.length;
                const mobileWrapper = $(`${this.mobileId} .product_productImages`).children(".swiper-wrapper");
                if (1 === (null === list || void 0 === list ? void 0 : list.length) || "VIDEO" === (null === list || void 0 === list ? void 0 : null === (_list$ = list[0]) || void 0 === _list$ ? void 0 : _list$.type) || "VIDEO" === (null === list || void 0 === list ? void 0 : null === (_list = list[(null === list || void 0 === list ? void 0 : list.length) - 1]) || void 0 === _list ? void 0 : _list.type)) mobileWrapper.addClass("hasVideoFl"); else mobileWrapper.removeClass("hasVideoFl");
                mobileWrapper.empty().append(null !== list && void 0 !== list && list.length ? list.map(((item, index) => {
                    var _imgSize5;
                    if ("VIDEO" === item.type) {
                        const {middle: cover, videoId} = (0, _shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_13__["default"])(item.resource);
                        return `<div class="swiper-slide videoItem" style="height: auto" data-index="${index}" data-length="${slidesLength}">\n<div class="swiper-slide-box" data-image-ratio="56.25%" style="padding-bottom: 56.25%">\n  <div class="product_youTubeVideoContainer">\n    <div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>\n  </div>\n  <img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image swiper-lazy" data-photoswipe-src="${cover}" ${0 !== index ? "data-" : ""}src="${cover}" alt="">\n</div>\n</div>`;
                    }
                    const ratio = (null === (_imgSize5 = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(item.resource)) || void 0 === _imgSize5 ? void 0 : _imgSize5.ratio) || "100%";
                    return `<div class="swiper-slide imageItem" style="height: auto">\n<div class="swiper-slide-box" data-image-ratio="${ratio}" data-sku-image-ratio="100%" style="padding-bottom: ${ratio}">\n<img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${0 !== index ? "data-" : ""}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image">${this.productImageScale ? `<div class="scaleImageIcon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="12" r="7.5" /><path d="M18.5 17.5L23 22.5" stroke-linecap="round" /></svg></div>` : ""}</div>\n</div>`;
                })) : `<div class="swiper-slide"><div class="swiper-slide-box" data-image-ratio="100%" style="padding-bottom: 100%"><div class="product-detail-empty-image product-noImages"></div></div></div>`);
            }
            updateImageList(list, activeIndex, source) {
                var _this$swiper3, _this$mobileSwiper2;
                if (!this.verifySource(null === source || void 0 === source ? void 0 : source.app)) return;
                this.mediaList = list;
                handleVideoPlayPause(this.videoPcPlayer, "pause");
                handleVideoPlayPause(this.videoMobilePlayer, "pause");
                this.videoMobilePlayerStatus = "pause";
                this.replaceThubsSwiper(list, activeIndex);
                null === (_this$swiper3 = this.swiper) || void 0 === _this$swiper3 ? void 0 : _this$swiper3.destroy();
                null === (_this$mobileSwiper2 = this.mobileSwiper) || void 0 === _this$mobileSwiper2 ? void 0 : _this$mobileSwiper2.destroy();
                this.updateSlides(list);
                if (this.swiper) {
                    $(`${this.id}`).data("initial-slide", activeIndex);
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
                    $(`${this.mobileId}`).data("initial-slide", activeIndex);
                    this.mobileSwiper = this.initMobileProductImages();
                    this.updatePhotoSwipeItems(this.mobileId);
                }
                this.videoPcPlayer = this.initPcVideo();
                this.videoMobilePlayer = this.initMobileVideo();
                $(`${this.id}`).attr("data-index", activeIndex || 0);
            }
            replaceThubsSwiper(list, activeIndex) {
                const wrapper = $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container .productImageThumbsWrapper`);
                const mBox = $(`${this.mobileId} .paginationBox`);
                const mWrapper = mBox.find(".paginationListWrapper");
                wrapper.empty();
                mWrapper.empty();
                if (!(null !== list && void 0 !== list && list.length) || list.length <= 1) {
                    $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container`).hide();
                    mBox.hide();
                } else {
                    $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? "Column" : "Row"}Container`).show();
                    mBox.show();
                    list.forEach(((item, index) => {
                        var _imgSize6;
                        const ratio = (null === (_imgSize6 = (0, _utils_img_size__WEBPACK_IMPORTED_MODULE_3__["default"])(item.resource)) || void 0 === _imgSize6 ? void 0 : _imgSize6.ratio) || "100%";
                        if ("VIDEO" === item.type) wrapper.append(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? "active" : ""}"><figure style="padding-bottom: ${ratio}"><img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" src="${(0, 
                        _shared_utils_getYouTubeCover__WEBPACK_IMPORTED_MODULE_13__["default"])(item.resource).middle}" alt=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle cx="10" cy="10" r="10" fill="black" fill-opacity="0.6"/>\n          <path d="M13.6256 10.2496L8.46641 13.6891C8.26704 13.822 8 13.6791 8 13.4394V6.56056C8 6.32095 8.26704 6.17803 8.46641 6.31094L13.6256 9.75039C13.8037 9.86913 13.8037 10.1309 13.6256 10.2496Z" fill="white"/>\n          </svg></figure>\n          </div>`); else wrapper.append($(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? "active" : ""}"><figure style="padding-bottom: ${ratio}"><img onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" src="${(0, 
                        _shared_utils_imgUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(item.resource, {
                            width: 152
                        })}" alt=""></figure></div>`));
                        mWrapper.append(`<span class="${activeIndex === index ? "active" : ""}" />`);
                    }));
                }
            }
            skuImageChange(img, source) {
                if (!this.verifySource(null === source || void 0 === source ? void 0 : source.app)) return;
                const {url} = img || {};
                if (url) {
                    handleVideoPlayPause(this.videoPcPlayer, "pause");
                    handleVideoPlayPause(this.videoMobilePlayer, "pause");
                    this.videoMobilePlayerStatus = "pause";
                    const index = this.mediaList.findIndex((item => item.resource === url));
                    if (index > -1) {
                        var _this$swiper4, _this$mobileSwiper3;
                        null === (_this$swiper4 = this.swiper) || void 0 === _this$swiper4 ? void 0 : _this$swiper4.slideTo(index);
                        null === (_this$mobileSwiper3 = this.mobileSwiper) || void 0 === _this$mobileSwiper3 ? void 0 : _this$mobileSwiper3.slideToLoop(index, 0);
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
        _defineProperty(ProductImages, "pcSelectorPrefix", "execute_productImages_pc");
        _defineProperty(ProductImages, "mobileSelectorPrefix", "execute_productImages_mobile");
    },
    "../shared/browser/components/hbs/productImages/js/product-photoSwipeHtml.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const __WEBPACK_DEFAULT_EXPORT__ = `\n  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n  <div class="pswp__bg"></div>\n    <div class="pswp__scroll-wrap">\n      <div class="pswp__container">\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n          <div class="pswp__item"></div>\n      </div>\n      <div class="pswp__ui pswp__ui--hidden">\n        <button class="pswp__button pswp__button--arrow--left" title="Previous">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M8 1L3 6L8 11" stroke-width="1.5" stroke-linecap="round"/>\n          </svg>        \n        </button>\n        <button class="pswp__button pswp__button--close" title="Close (Esc)">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10.8002 1.19999L1.2002 10.8" stroke-width="1.2" stroke-linecap="round"/>\n            <path d="M1.1998 1.19999L10.7998 10.8" stroke-width="1.2" stroke-linecap="round"/>\n          </svg>\n        </button>\n        <button class="pswp__button pswp__button--arrow--right" title="Next">\n          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M4 11L9 6L4 1" stroke-width="1.5" stroke-linecap="round"/>\n          </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n  </div>\n`;
    },
    "../shared/browser/components/hbs/products/checkedEvent/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            checkoutEnd: () => checkoutEnd
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
        class EventAddCheckoutEnd {
            constructor(name) {
                _defineProperty(this, "index", 0);
                _defineProperty(this, "name", "event_add_checkout_by_le");
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
                var _window;
                const key = this.getCheckoutKey();
                null === (_window = window) || void 0 === _window ? void 0 : _window.SL_EventBus.on(eventName, (data => {
                    var _data$data;
                    const {event_status, stage} = null !== (_data$data = data.data) && void 0 !== _data$data ? _data$data : {};
                    if (stage === key) callback(event_status);
                }));
                return key;
            }
        }
        const checkoutEnd = new EventAddCheckoutEnd;
    },
    "../shared/browser/components/hbs/shared/components/toast/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => _yy_sl_theme_shared_components_hbs_shared_components_toast_toast__WEBPACK_IMPORTED_MODULE_0__["default"]
        });
        var _yy_sl_theme_shared_components_hbs_shared_components_toast_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/components/hbs/shared/components/toast/toast.js");
        __webpack_require__("../shared/browser/components/hbs/shared/components/toast/loading.js");
    },
    "../shared/browser/components/hbs/shared/components/toast/loading.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__("../shared/browser/components/hbs/shared/components/toast/toast.js");
    },
    "../shared/browser/components/hbs/shared/components/toast/toast.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
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
            const templates = {
                [LOADING]: `\n      <div class="comment-toast mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <span class="mp-loading__spinner mp-loading__spinner--circular">\n            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="black" stroke-width="2.5" stroke-linecap="round"/>\n            </svg>\n          </span>\n        </div>\n        <div class="mp-toast__content mp-toast__text">${options.content}</div>\n      </div>\n    `,
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
                this.$toast = $(template);
                this.$target = $(this.options.target);
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
    "../shared/browser/components/hbs/shared/utils/getYouTubeCover.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const getYouTubeCover = videoResource => {
            if ("string" !== typeof videoResource) return null;
            const youTubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            const getYouTubeIdByVideoUrl = url => {
                const matches = (null === url || void 0 === url ? void 0 : url.match(youTubeRegex)) || [];
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
    "../shared/browser/events/data-report/add-to-cart/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/events/data-report/enum/index.js");
        var _window;
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_enum__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART} - EMIT`);
        const external = null === (_window = window) || void 0 === _window ? void 0 : _window.Shopline.event;
        const addToCart = data => {
            logger.info(data);
            return external.emit(_enum__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART, {
                data,
                interior: _enum__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART,
                onSuccess: result => {
                    logger.info("success", result);
                },
                onError: error => {
                    logger.error(error);
                }
            });
        };
        addToCart.apiName = _enum__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART;
        const __WEBPACK_DEFAULT_EXPORT__ = addToCart;
    },
    "../shared/browser/events/data-report/view-content/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/events/data-report/enum/index.js");
        var _window;
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_enum__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTENT} - EMIT`);
        const external = null === (_window = window) || void 0 === _window ? void 0 : _window.Shopline.event;
        const viewContent = data => {
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
        };
        viewContent.apiName = _enum__WEBPACK_IMPORTED_MODULE_1__.VIEW_CONTENT;
        const __WEBPACK_DEFAULT_EXPORT__ = viewContent;
    },
    "../shared/browser/events/product/quickView-click/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _window;
        const EVENT_NAME = {
            OPEN_QUICKVIEW_EVENT: "Product::OpenQuickView",
            CLOSE_QUICKVIEW_EVENT: "Product::CloseQuickView",
            OPEN_QUICKVIEW_ADDTOCART: "Product::OpenQuickView::AddToCart",
            CLOSE_QUICKVIEW_ADDTOCART: "Product::CloseQuickView::AddToCart"
        };
        const external = null === (_window = window) || void 0 === _window ? void 0 : _window.Shopline.event;
        const quickViewClick = data => {
            const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(EVENT_NAME[data.eventName]);
            quickViewClick.apiName = EVENT_NAME[data.eventName];
            logger.info(`[emit]`, data);
            return external.emit(EVENT_NAME[data.eventName], {
                data,
                onSuccess: result => {
                    logger.info("success", result);
                },
                onError: error => {
                    logger.error(error);
                }
            });
        };
        const __WEBPACK_DEFAULT_EXPORT__ = quickViewClick;
    },
    "../shared/browser/events/product/sku-change/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _window;
        const EVENT_NAME = "Product::SkuChange";
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(EVENT_NAME);
        const external = null === (_window = window) || void 0 === _window ? void 0 : _window.Shopline.event;
        const skuChange = data => {
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
        };
        skuChange.apiName = EVENT_NAME;
        const __WEBPACK_DEFAULT_EXPORT__ = skuChange;
    },
    "../shared/browser/events/product/sku-changed/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/events/utils/api-logger.js");
        var _window;
        const EVENT_NAME = "Product::SkuChanged";
        const logger = (0, _utils_api_logger__WEBPACK_IMPORTED_MODULE_0__["default"])(EVENT_NAME);
        const external = null === (_window = window) || void 0 === _window ? void 0 : _window.Shopline.event;
        const skuChanged = data => {
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
        };
        skuChanged.apiName = EVENT_NAME;
        const __WEBPACK_DEFAULT_EXPORT__ = skuChanged;
    },
    "../shared/browser/report/customArgs/index.js": () => {
        function getValue(keysMap, name) {
            var _keysMap$name;
            return null !== (_keysMap$name = null === keysMap || void 0 === keysMap ? void 0 : keysMap[name]) && void 0 !== _keysMap$name ? _keysMap$name : name;
        }
        function getValuesByKey(channelArgs, key) {
            return name => getValue(null === channelArgs || void 0 === channelArgs ? void 0 : channelArgs[key], name);
        }
        function getByChannel(channel) {
            return key => {
                var _window$SL_ReportArgs;
                return getValuesByKey(null === (_window$SL_ReportArgs = window.SL_ReportArgsMap) || void 0 === _window$SL_ReportArgs ? void 0 : _window$SL_ReportArgs[channel], key);
            };
        }
        if (!window.SL_GetReportArg) window.SL_GetReportArg = function(...args) {
            if (1 === args.length) return getByChannel(args[0]);
            if (2 === args.length) return getByChannel(args[0])(args[1]);
            if (3 === args.length) return getByChannel(args[0])(args[1])(args[2]);
        };
    },
    "../shared/browser/report/product/detail/inquiry-modal-report.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            leadReport: () => leadReport,
            cancelReport: () => cancelReport,
            viewReport: () => viewReport,
            listenInputChange: () => listenInputChange
        });
        var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/lodash/debounce.js");
        var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
        var _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/currency/index.js");
        var _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/report/pageMapping.js");
        var _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/browser/utils/report/page.js");
        __webpack_require__("../shared/browser/report/customArgs/index.js");
        const {formatCurrency} = _yy_sl_theme_shared_utils_currency__WEBPACK_IMPORTED_MODULE_1__["default"];
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
        const unsafePage = _yy_sl_theme_shared_utils_report_pageMapping__WEBPACK_IMPORTED_MODULE_2__["default"][alias];
        const page = _yy_sl_theme_shared_utils_report_page__WEBPACK_IMPORTED_MODULE_3__["default"][alias];
        const eventId = eventIdMap[alias];
        function hdReport(options) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.collect({
                page,
                module: 119,
                ...options
            });
        }
        function unsafeHdReport(options) {
            var _window$HdSdk2;
            null === (_window$HdSdk2 = window.HdSdk) || void 0 === _window$HdSdk2 ? void 0 : _window$HdSdk2.shopTracker.report(eventId, {
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
            var _sortationList$, _sortationList$2;
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
                    ecomm_category: null === sortationList || void 0 === sortationList ? void 0 : null === (_sortationList$ = sortationList[0]) || void 0 === _sortationList$ ? void 0 : _sortationList$.sortationId,
                    ecomm_pcat: null === sortationList || void 0 === sortationList ? void 0 : null === (_sortationList$2 = sortationList[0]) || void 0 === _sortationList$2 ? void 0 : _sortationList$2.sortationName
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
            email: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((value => inputReport({
                value,
                name: "email"
            })), 1e3),
            mobile: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((value => inputReport({
                value,
                name: "mobile"
            })), 1e3),
            message: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((value => inputReport({
                value,
                name: "message"
            })), 1e3),
            name: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((value => inputReport({
                value,
                name: "name"
            })), 1e3),
            region: lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((value => inputReport({
                value,
                name: "region"
            })), 1e3)
        };
        function listenInputChange({area}) {
            $(area).find("[sl-form-item-name]").on("input", "input,textarea", (function() {
                var _debounceInput$name;
                const input = $(this);
                const formItem = input.parents("[sl-form-item-name]");
                const name = formItem.attr("sl-form-item-name");
                const value = input.val();
                null === (_debounceInput$name = debounceInput[name]) || void 0 === _debounceInput$name ? void 0 : _debounceInput$name.call(debounceInput, value);
            }));
        }
    },
    "../shared/browser/utils/form/form.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
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
        var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/query-string/index.js");
        function img_size(url) {
            const urlParse = url__WEBPACK_IMPORTED_MODULE_0__.parse(url);
            const urlQuery = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(null === urlParse || void 0 === urlParse ? void 0 : urlParse.query);
            const radix = 10;
            const fixed = 2;
            const width = Number.parseInt(null === urlQuery || void 0 === urlQuery ? void 0 : urlQuery.w, radix);
            const height = Number.parseInt(null === urlQuery || void 0 === urlQuery ? void 0 : urlQuery.h, radix);
            let ratio = null;
            if (Number.isInteger(width) && Number.isInteger(height) && 0 !== width) ratio = `${Number(Number.parseFloat(height / width * 100).toFixed(fixed))}%`;
            return {
                width: Number.isInteger(width) ? width : null,
                height: Number.isInteger(height) ? height : null,
                ratio
            };
        }
    },
    "../shared/browser/utils/lozad/plugins/image-gif-poster.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var _normal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/lozad/plugins/normal.js");
        var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/lozad/util.js");
        var _image_transform_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/lozad/plugins/image-transform-webp.js");
        function getPosterUrl(url) {
            if (!(0, _util__WEBPACK_IMPORTED_MODULE_1__.isGif)(url) || !(0, _util__WEBPACK_IMPORTED_MODULE_1__.isS3FileUrl)(url)) return;
            const file = new _util__WEBPACK_IMPORTED_MODULE_1__.SLFile(url, window.location.href);
            if ("1" !== file.querys.get("_f")) return;
            if ("poster" === file.modifiers[0]) return;
            file.modifiers.unshift("poster");
            file.suffix = "png";
            return (0, _image_transform_webp__WEBPACK_IMPORTED_MODULE_2__.transformImageUrlToWebp)(file, true);
        }
        function getPosterData({src, srcset}) {
            const data = {};
            if (src) data.src = getPosterUrl(src);
            if (srcset) {
                let srcsetHasPoster = false;
                data.srcset = (0, _util__WEBPACK_IMPORTED_MODULE_1__.transformSrcset)(srcset, ((url, breakpoint) => {
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
        const __WEBPACK_DEFAULT_EXPORT__ = {
            attributes: [],
            load(element) {
                if ((0, _util__WEBPACK_IMPORTED_MODULE_1__.isElementType)(element, "img")) {
                    const src = element.getAttribute(_normal__WEBPACK_IMPORTED_MODULE_0__.EnumAttributes.Src);
                    const srcset = element.getAttribute(_normal__WEBPACK_IMPORTED_MODULE_0__.EnumAttributes.Srcset);
                    const sizes = element.getAttribute("sizes");
                    let isSeted = false;
                    const setImageData = ({src, srcset}, img = new Image) => {
                        if (sizes) img.sizes = sizes;
                        if (srcset) img.srcset = srcset;
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
    },
    "../shared/browser/utils/lozad/plugins/image-transform-webp.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            transformImageUrlToWebp: () => transformImageUrlToWebp
        });
        __webpack_require__("../shared/browser/utils/lozad/plugins/normal.js");
        var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/lozad/util.js");
        function transformImageUrlToWebp(fileOrUrl, ignoreSetting = false) {
            const file = "string" === typeof fileOrUrl ? new _util__WEBPACK_IMPORTED_MODULE_1__.SLFile(fileOrUrl, window.location.href) : fileOrUrl;
            if (!file.querys.has("t") || ignoreSetting) if (window.__isSupportWebp__) file.querys.set("t", "webp"); else if (file.suffix) file.querys.set("t", file.suffix);
            return file.toString();
        }
    },
    "../shared/browser/utils/lozad/plugins/normal.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            EnumAttributes: () => EnumAttributes
        });
        var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/lozad/util.js");
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
    },
    "../shared/browser/utils/lozad/util.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            isIE: () => isIE,
            isElementType: () => isElementType,
            isSupportWebp: () => isSupportWebp,
            isGif: () => isGif,
            isS3FileUrl: () => isS3FileUrl,
            makeIsLoaded: () => makeIsLoaded,
            transformSrcset: () => transformSrcset,
            SLFile: () => SLFile
        });
        const isIE = "undefined" !== typeof document && document.documentMode;
        const isElementType = (element, type) => element.nodeName.toLowerCase() === type;
        function isSupportWebp() {
            return new Promise((resolve => {
                const img = new Image;
                img.onload = () => {
                    const result = img.width > 0 && img.height > 0;
                    resolve(result);
                };
                img.onerror = () => {
                    resolve(false);
                };
                img.src = `data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`;
            }));
        }
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
            Page: {
                custom_page: 118,
                smart_landing_page: 147
            }
        };
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
    "../shared/browser/utils/sentry.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var esm_hub = __webpack_require__("../shared/node_modules/@sentry/hub/esm/hub.js");
        var esm_env = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var esm_logger = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        function initAndBind(clientClass, options) {
            if (true === options.debug) if ((0, esm_env.isDebugBuild)()) esm_logger.logger.enable(); else console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
            var hub = (0, esm_hub.getCurrentHub)();
            var scope = hub.getScope();
            if (scope) scope.update(options.initialScope);
            var client = new clientClass(options);
            hub.bindClient(client);
        }
        var tslib_es6 = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var misc = __webpack_require__("../shared/node_modules/@sentry/utils/esm/misc.js");
        var string = __webpack_require__("../shared/node_modules/@sentry/utils/esm/string.js");
        var DEFAULT_IGNORE_ERRORS = [ /^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/ ];
        var InboundFilters = function() {
            function InboundFilters(_options) {
                if (void 0 === _options) _options = {};
                this._options = _options;
                this.name = InboundFilters.id;
            }
            InboundFilters.prototype.setupOnce = function(addGlobalEventProcessor, getCurrentHub) {
                addGlobalEventProcessor((function(event) {
                    var hub = getCurrentHub();
                    if (hub) {
                        var self_1 = hub.getIntegration(InboundFilters);
                        if (self_1) {
                            var client = hub.getClient();
                            var clientOptions = client ? client.getOptions() : {};
                            var options = _mergeOptions(self_1._options, clientOptions);
                            return _shouldDropEvent(event, options) ? null : event;
                        }
                    }
                    return event;
                }));
            };
            InboundFilters.id = "InboundFilters";
            return InboundFilters;
        }();
        function _mergeOptions(internalOptions, clientOptions) {
            if (void 0 === internalOptions) internalOptions = {};
            if (void 0 === clientOptions) clientOptions = {};
            return {
                allowUrls: (0, tslib_es6.__spread)(internalOptions.whitelistUrls || [], internalOptions.allowUrls || [], clientOptions.whitelistUrls || [], clientOptions.allowUrls || []),
                denyUrls: (0, tslib_es6.__spread)(internalOptions.blacklistUrls || [], internalOptions.denyUrls || [], clientOptions.blacklistUrls || [], clientOptions.denyUrls || []),
                ignoreErrors: (0, tslib_es6.__spread)(internalOptions.ignoreErrors || [], clientOptions.ignoreErrors || [], DEFAULT_IGNORE_ERRORS),
                ignoreInternal: void 0 !== internalOptions.ignoreInternal ? internalOptions.ignoreInternal : true
            };
        }
        function _shouldDropEvent(event, options) {
            if (options.ignoreInternal && _isSentryError(event)) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, 
                misc.getEventDescription)(event));
                return true;
            }
            if (_isIgnoredError(event, options.ignoreErrors)) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, 
                misc.getEventDescription)(event));
                return true;
            }
            if (_isDeniedUrl(event, options.denyUrls)) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0, 
                misc.getEventDescription)(event) + ".\nUrl: " + _getEventFilterUrl(event));
                return true;
            }
            if (!_isAllowedUrl(event, options.allowUrls)) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0, 
                misc.getEventDescription)(event) + ".\nUrl: " + _getEventFilterUrl(event));
                return true;
            }
            return false;
        }
        function _isIgnoredError(event, ignoreErrors) {
            if (!ignoreErrors || !ignoreErrors.length) return false;
            return _getPossibleEventMessages(event).some((function(message) {
                return ignoreErrors.some((function(pattern) {
                    return (0, string.isMatchingPattern)(message, pattern);
                }));
            }));
        }
        function _isDeniedUrl(event, denyUrls) {
            if (!denyUrls || !denyUrls.length) return false;
            var url = _getEventFilterUrl(event);
            return !url ? false : denyUrls.some((function(pattern) {
                return (0, string.isMatchingPattern)(url, pattern);
            }));
        }
        function _isAllowedUrl(event, allowUrls) {
            if (!allowUrls || !allowUrls.length) return true;
            var url = _getEventFilterUrl(event);
            return !url ? true : allowUrls.some((function(pattern) {
                return (0, string.isMatchingPattern)(url, pattern);
            }));
        }
        function _getPossibleEventMessages(event) {
            if (event.message) return [ event.message ];
            if (event.exception) try {
                var _a = event.exception.values && event.exception.values[0] || {}, _b = _a.type, type = void 0 === _b ? "" : _b, _c = _a.value, value = void 0 === _c ? "" : _c;
                return [ "" + value, type + ": " + value ];
            } catch (oO) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Cannot extract message for event " + (0, 
                misc.getEventDescription)(event));
                return [];
            }
            return [];
        }
        function _isSentryError(event) {
            try {
                return "SentryError" === event.exception.values[0].type;
            } catch (e) {}
            return false;
        }
        function _getLastValidUrl(frames) {
            if (void 0 === frames) frames = [];
            for (var i = frames.length - 1; i >= 0; i--) {
                var frame = frames[i];
                if (frame && "<anonymous>" !== frame.filename && "[native code]" !== frame.filename) return frame.filename || null;
            }
            return null;
        }
        function _getEventFilterUrl(event) {
            try {
                if (event.stacktrace) return _getLastValidUrl(event.stacktrace.frames);
                var frames_1;
                try {
                    frames_1 = event.exception.values[0].stacktrace.frames;
                } catch (e) {}
                return frames_1 ? _getLastValidUrl(frames_1) : null;
            } catch (oO) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Cannot extract url for event " + (0, 
                misc.getEventDescription)(event));
                return null;
            }
        }
        var object = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        var originalFunctionToString;
        var FunctionToString = function() {
            function FunctionToString() {
                this.name = FunctionToString.id;
            }
            FunctionToString.prototype.setupOnce = function() {
                originalFunctionToString = Function.prototype.toString;
                Function.prototype.toString = function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var context = (0, object.getOriginalFunction)(this) || this;
                    return originalFunctionToString.apply(context, args);
                };
            };
            FunctionToString.id = "FunctionToString";
            return FunctionToString;
        }();
        var esm_global = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var instrument = __webpack_require__("../shared/node_modules/@sentry/utils/esm/instrument.js");
        var SDK_VERSION = "6.19.2";
        var esm_scope = __webpack_require__("../shared/node_modules/@sentry/hub/esm/scope.js");
        var setPrototypeOf = Object.setPrototypeOf || ({
            __proto__: []
        } instanceof Array ? setProtoOf : mixinProperties);
        function setProtoOf(obj, proto) {
            obj.__proto__ = proto;
            return obj;
        }
        function mixinProperties(obj, proto) {
            for (var prop in proto) if (!Object.prototype.hasOwnProperty.call(obj, prop)) obj[prop] = proto[prop];
            return obj;
        }
        var SentryError = function(_super) {
            (0, tslib_es6.__extends)(SentryError, _super);
            function SentryError(message) {
                var _newTarget = this.constructor;
                var _this = _super.call(this, message) || this;
                _this.message = message;
                _this.name = _newTarget.prototype.constructor.name;
                setPrototypeOf(_this, _newTarget.prototype);
                return _this;
            }
            return SentryError;
        }(Error);
        var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function isValidProtocol(protocol) {
            return "http" === protocol || "https" === protocol;
        }
        function dsnToString(dsn, withPassword) {
            if (void 0 === withPassword) withPassword = false;
            var host = dsn.host, path = dsn.path, pass = dsn.pass, port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol, publicKey = dsn.publicKey;
            return protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : "") + "@" + host + (port ? ":" + port : "") + "/" + (path ? path + "/" : path) + projectId;
        }
        function dsnFromString(str) {
            var match = DSN_REGEX.exec(str);
            if (!match) throw new SentryError("Invalid Sentry Dsn: " + str);
            var _a = (0, tslib_es6.__read)(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = void 0 === _b ? "" : _b, host = _a[3], _c = _a[4], port = void 0 === _c ? "" : _c, lastPath = _a[5];
            var path = "";
            var projectId = lastPath;
            var split = projectId.split("/");
            if (split.length > 1) {
                path = split.slice(0, -1).join("/");
                projectId = split.pop();
            }
            if (projectId) {
                var projectMatch = projectId.match(/^\d+/);
                if (projectMatch) projectId = projectMatch[0];
            }
            return dsnFromComponents({
                host,
                pass,
                path,
                projectId,
                port,
                protocol,
                publicKey
            });
        }
        function dsnFromComponents(components) {
            if ("user" in components && !("publicKey" in components)) components.publicKey = components.user;
            return {
                user: components.publicKey || "",
                protocol: components.protocol,
                publicKey: components.publicKey || "",
                pass: components.pass || "",
                host: components.host,
                port: components.port || "",
                path: components.path || "",
                projectId: components.projectId
            };
        }
        function validateDsn(dsn) {
            if (!(0, esm_env.isDebugBuild)()) return;
            var port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol;
            var requiredComponents = [ "protocol", "publicKey", "host", "projectId" ];
            requiredComponents.forEach((function(component) {
                if (!dsn[component]) throw new SentryError("Invalid Sentry Dsn: " + component + " missing");
            }));
            if (!projectId.match(/^\d+$/)) throw new SentryError("Invalid Sentry Dsn: Invalid projectId " + projectId);
            if (!isValidProtocol(protocol)) throw new SentryError("Invalid Sentry Dsn: Invalid protocol " + protocol);
            if (port && isNaN(parseInt(port, 10))) throw new SentryError("Invalid Sentry Dsn: Invalid port " + port);
            return true;
        }
        function makeDsn(from) {
            var components = "string" === typeof from ? dsnFromString(from) : dsnFromComponents(from);
            validateDsn(components);
            return components;
        }
        var is = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        var syncpromise = __webpack_require__("../shared/node_modules/@sentry/utils/esm/syncpromise.js");
        var time = __webpack_require__("../shared/node_modules/@sentry/utils/esm/time.js");
        function memoBuilder() {
            var hasWeakSet = "function" === typeof WeakSet;
            var inner = hasWeakSet ? new WeakSet : [];
            function memoize(obj) {
                if (hasWeakSet) {
                    if (inner.has(obj)) return true;
                    inner.add(obj);
                    return false;
                }
                for (var i = 0; i < inner.length; i++) {
                    var value = inner[i];
                    if (value === obj) return true;
                }
                inner.push(obj);
                return false;
            }
            function unmemoize(obj) {
                if (hasWeakSet) inner.delete(obj); else for (var i = 0; i < inner.length; i++) if (inner[i] === obj) {
                    inner.splice(i, 1);
                    break;
                }
            }
            return [ memoize, unmemoize ];
        }
        var esm_stacktrace = __webpack_require__("../shared/node_modules/@sentry/utils/esm/stacktrace.js");
        function normalize(input, depth, maxProperties) {
            if (void 0 === depth) depth = +1 / 0;
            if (void 0 === maxProperties) maxProperties = +1 / 0;
            try {
                return walk("", input, depth, maxProperties);
            } catch (_oO) {
                return "**non-serializable**";
            }
        }
        function normalizeToSize(object, depth, maxSize) {
            if (void 0 === depth) depth = 3;
            if (void 0 === maxSize) maxSize = 100 * 1024;
            var serialized = normalize(object, depth);
            if (jsonSize(serialized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
            return serialized;
        }
        function walk(key, value, depth, maxProperties, memo) {
            if (void 0 === depth) depth = +1 / 0;
            if (void 0 === maxProperties) maxProperties = +1 / 0;
            if (void 0 === memo) memo = memoBuilder();
            var _a = (0, tslib_es6.__read)(memo, 2), memoize = _a[0], unmemoize = _a[1];
            if (0 === depth) return serializeValue(value);
            if (null !== value && void 0 !== value && "function" === typeof value.toJSON) return value.toJSON();
            var serializable = makeSerializable(value, key);
            if ((0, is.isPrimitive)(serializable)) return serializable;
            var source = (0, object.getWalkSource)(value);
            var acc = Array.isArray(value) ? [] : {};
            if (memoize(value)) return "[Circular ~]";
            var propertyCount = 0;
            for (var innerKey in source) {
                if (!Object.prototype.hasOwnProperty.call(source, innerKey)) continue;
                if (propertyCount >= maxProperties) {
                    acc[innerKey] = "[MaxProperties ~]";
                    break;
                }
                propertyCount += 1;
                var innerValue = source[innerKey];
                acc[innerKey] = walk(innerKey, innerValue, depth - 1, maxProperties, memo);
            }
            unmemoize(value);
            return acc;
        }
        function serializeValue(value) {
            if ("string" === typeof value) return value;
            var type = Object.prototype.toString.call(value);
            if ("[object Object]" === type) return "[Object]";
            if ("[object Array]" === type) return "[Array]";
            var serializable = makeSerializable(value);
            return (0, is.isPrimitive)(serializable) ? serializable : type;
        }
        function makeSerializable(value, key) {
            if ("domain" === key && value && "object" === typeof value && value._events) return "[Domain]";
            if ("domainEmitter" === key) return "[DomainEmitter]";
            if ("undefined" !== typeof __webpack_require__.g && value === __webpack_require__.g) return "[Global]";
            if ("undefined" !== typeof window && value === window) return "[Window]";
            if ("undefined" !== typeof document && value === document) return "[Document]";
            if ((0, is.isSyntheticEvent)(value)) return "[SyntheticEvent]";
            if ("number" === typeof value && value !== value) return "[NaN]";
            if (void 0 === value) return "[undefined]";
            if ("function" === typeof value) return "[Function: " + (0, esm_stacktrace.getFunctionName)(value) + "]";
            if ("symbol" === typeof value) return "[" + String(value) + "]";
            if ("bigint" === typeof value) return "[BigInt: " + String(value) + "]";
            return value;
        }
        function utf8Length(value) {
            return ~-encodeURI(value).split(/%..|./).length;
        }
        function jsonSize(value) {
            return utf8Length(JSON.stringify(value));
        }
        var installedIntegrations = [];
        function filterDuplicates(integrations) {
            return integrations.reduce((function(acc, integrations) {
                if (acc.every((function(accIntegration) {
                    return integrations.name !== accIntegration.name;
                }))) acc.push(integrations);
                return acc;
            }), []);
        }
        function getIntegrationsToSetup(options) {
            var defaultIntegrations = options.defaultIntegrations && (0, tslib_es6.__spread)(options.defaultIntegrations) || [];
            var userIntegrations = options.integrations;
            var integrations = (0, tslib_es6.__spread)(filterDuplicates(defaultIntegrations));
            if (Array.isArray(userIntegrations)) integrations = (0, tslib_es6.__spread)(integrations.filter((function(integrations) {
                return userIntegrations.every((function(userIntegration) {
                    return userIntegration.name !== integrations.name;
                }));
            })), filterDuplicates(userIntegrations)); else if ("function" === typeof userIntegrations) {
                integrations = userIntegrations(integrations);
                integrations = Array.isArray(integrations) ? integrations : [ integrations ];
            }
            var integrationsNames = integrations.map((function(i) {
                return i.name;
            }));
            var alwaysLastToRun = "Debug";
            if (-1 !== integrationsNames.indexOf(alwaysLastToRun)) integrations.push.apply(integrations, (0, 
            tslib_es6.__spread)(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
            return integrations;
        }
        function setupIntegration(integration) {
            if (-1 !== installedIntegrations.indexOf(integration.name)) return;
            integration.setupOnce(esm_scope.addGlobalEventProcessor, esm_hub.getCurrentHub);
            installedIntegrations.push(integration.name);
            (0, esm_env.isDebugBuild)() && esm_logger.logger.log("Integration installed: " + integration.name);
        }
        function setupIntegrations(options) {
            var integrations = {};
            getIntegrationsToSetup(options).forEach((function(integration) {
                integrations[integration.name] = integration;
                setupIntegration(integration);
            }));
            (0, object.addNonEnumerableProperty)(integrations, "initialized", true);
            return integrations;
        }
        var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
        var BaseClient = function() {
            function BaseClient(backendClass, options) {
                this._integrations = {};
                this._numProcessing = 0;
                this._backend = new backendClass(options);
                this._options = options;
                if (options.dsn) this._dsn = makeDsn(options.dsn);
            }
            BaseClient.prototype.captureException = function(exception, hint, scope) {
                var _this = this;
                if ((0, misc.checkOrSetAlreadyCaught)(exception)) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log(ALREADY_SEEN_ERROR);
                    return;
                }
                var eventId = hint && hint.event_id;
                this._process(this._getBackend().eventFromException(exception, hint).then((function(event) {
                    return _this._captureEvent(event, hint, scope);
                })).then((function(result) {
                    eventId = result;
                })));
                return eventId;
            };
            BaseClient.prototype.captureMessage = function(message, level, hint, scope) {
                var _this = this;
                var eventId = hint && hint.event_id;
                var promisedEvent = (0, is.isPrimitive)(message) ? this._getBackend().eventFromMessage(String(message), level, hint) : this._getBackend().eventFromException(message, hint);
                this._process(promisedEvent.then((function(event) {
                    return _this._captureEvent(event, hint, scope);
                })).then((function(result) {
                    eventId = result;
                })));
                return eventId;
            };
            BaseClient.prototype.captureEvent = function(event, hint, scope) {
                if (hint && hint.originalException && (0, misc.checkOrSetAlreadyCaught)(hint.originalException)) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log(ALREADY_SEEN_ERROR);
                    return;
                }
                var eventId = hint && hint.event_id;
                this._process(this._captureEvent(event, hint, scope).then((function(result) {
                    eventId = result;
                })));
                return eventId;
            };
            BaseClient.prototype.captureSession = function(session) {
                if (!this._isEnabled()) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("SDK not enabled, will not capture session.");
                    return;
                }
                if (!("string" === typeof session.release)) (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Discarded session because of missing or non-string release"); else {
                    this._sendSession(session);
                    session.update({
                        init: false
                    });
                }
            };
            BaseClient.prototype.getDsn = function() {
                return this._dsn;
            };
            BaseClient.prototype.getOptions = function() {
                return this._options;
            };
            BaseClient.prototype.getTransport = function() {
                return this._getBackend().getTransport();
            };
            BaseClient.prototype.flush = function(timeout) {
                var _this = this;
                return this._isClientDoneProcessing(timeout).then((function(clientFinished) {
                    return _this.getTransport().close(timeout).then((function(transportFlushed) {
                        return clientFinished && transportFlushed;
                    }));
                }));
            };
            BaseClient.prototype.close = function(timeout) {
                var _this = this;
                return this.flush(timeout).then((function(result) {
                    _this.getOptions().enabled = false;
                    return result;
                }));
            };
            BaseClient.prototype.setupIntegrations = function() {
                if (this._isEnabled() && !this._integrations.initialized) this._integrations = setupIntegrations(this._options);
            };
            BaseClient.prototype.getIntegration = function(integration) {
                try {
                    return this._integrations[integration.id] || null;
                } catch (_oO) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
                    return null;
                }
            };
            BaseClient.prototype._updateSessionFromEvent = function(session, event) {
                var e_1, _a;
                var crashed = false;
                var errored = false;
                var exceptions = event.exception && event.exception.values;
                if (exceptions) {
                    errored = true;
                    try {
                        for (var exceptions_1 = (0, tslib_es6.__values)(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                            var ex = exceptions_1_1.value;
                            var mechanism = ex.mechanism;
                            if (mechanism && false === mechanism.handled) {
                                crashed = true;
                                break;
                            }
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                }
                var sessionNonTerminal = "ok" === session.status;
                var shouldUpdateAndSend = sessionNonTerminal && 0 === session.errors || sessionNonTerminal && crashed;
                if (shouldUpdateAndSend) {
                    session.update((0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, crashed && {
                        status: "crashed"
                    }), {
                        errors: session.errors || Number(errored || crashed)
                    }));
                    this.captureSession(session);
                }
            };
            BaseClient.prototype._sendSession = function(session) {
                this._getBackend().sendSession(session);
            };
            BaseClient.prototype._isClientDoneProcessing = function(timeout) {
                var _this = this;
                return new syncpromise.SyncPromise((function(resolve) {
                    var ticked = 0;
                    var tick = 1;
                    var interval = setInterval((function() {
                        if (0 == _this._numProcessing) {
                            clearInterval(interval);
                            resolve(true);
                        } else {
                            ticked += tick;
                            if (timeout && ticked >= timeout) {
                                clearInterval(interval);
                                resolve(false);
                            }
                        }
                    }), tick);
                }));
            };
            BaseClient.prototype._getBackend = function() {
                return this._backend;
            };
            BaseClient.prototype._isEnabled = function() {
                return false !== this.getOptions().enabled && void 0 !== this._dsn;
            };
            BaseClient.prototype._prepareEvent = function(event, scope, hint) {
                var _this = this;
                var _a = this.getOptions(), _b = _a.normalizeDepth, normalizeDepth = void 0 === _b ? 3 : _b, _c = _a.normalizeMaxBreadth, normalizeMaxBreadth = void 0 === _c ? 1e3 : _c;
                var prepared = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event), {
                    event_id: event.event_id || (hint && hint.event_id ? hint.event_id : (0, misc.uuid4)()),
                    timestamp: event.timestamp || (0, time.dateTimestampInSeconds)()
                });
                this._applyClientOptions(prepared);
                this._applyIntegrationsMetadata(prepared);
                var finalScope = scope;
                if (hint && hint.captureContext) finalScope = esm_scope.Scope.clone(finalScope).update(hint.captureContext);
                var result = (0, syncpromise.resolvedSyncPromise)(prepared);
                if (finalScope) result = finalScope.applyToEvent(prepared, hint);
                return result.then((function(evt) {
                    if (evt) evt.sdkProcessingMetadata = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, evt.sdkProcessingMetadata), {
                        normalizeDepth: normalize(normalizeDepth)
                    });
                    if ("number" === typeof normalizeDepth && normalizeDepth > 0) return _this._normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
                    return evt;
                }));
            };
            BaseClient.prototype._normalizeEvent = function(event, depth, maxBreadth) {
                if (!event) return null;
                var normalized = (0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, 
                tslib_es6.__assign)((0, tslib_es6.__assign)({}, event), event.breadcrumbs && {
                    breadcrumbs: event.breadcrumbs.map((function(b) {
                        return (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, b), b.data && {
                            data: normalize(b.data, depth, maxBreadth)
                        });
                    }))
                }), event.user && {
                    user: normalize(event.user, depth, maxBreadth)
                }), event.contexts && {
                    contexts: normalize(event.contexts, depth, maxBreadth)
                }), event.extra && {
                    extra: normalize(event.extra, depth, maxBreadth)
                });
                if (event.contexts && event.contexts.trace) normalized.contexts.trace = event.contexts.trace;
                event.sdkProcessingMetadata = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event.sdkProcessingMetadata), {
                    baseClientNormalized: true
                });
                return normalized;
            };
            BaseClient.prototype._applyClientOptions = function(event) {
                var options = this.getOptions();
                var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = void 0 === _a ? 250 : _a;
                if (!("environment" in event)) event.environment = "environment" in options ? environment : "production";
                if (void 0 === event.release && void 0 !== release) event.release = release;
                if (void 0 === event.dist && void 0 !== dist) event.dist = dist;
                if (event.message) event.message = (0, string.truncate)(event.message, maxValueLength);
                var exception = event.exception && event.exception.values && event.exception.values[0];
                if (exception && exception.value) exception.value = (0, string.truncate)(exception.value, maxValueLength);
                var request = event.request;
                if (request && request.url) request.url = (0, string.truncate)(request.url, maxValueLength);
            };
            BaseClient.prototype._applyIntegrationsMetadata = function(event) {
                var integrationsArray = Object.keys(this._integrations);
                if (integrationsArray.length > 0) {
                    event.sdk = event.sdk || {};
                    event.sdk.integrations = (0, tslib_es6.__spread)(event.sdk.integrations || [], integrationsArray);
                }
            };
            BaseClient.prototype._sendEvent = function(event) {
                this._getBackend().sendEvent(event);
            };
            BaseClient.prototype._captureEvent = function(event, hint, scope) {
                return this._processEvent(event, hint, scope).then((function(finalEvent) {
                    return finalEvent.event_id;
                }), (function(reason) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.error(reason);
                    return;
                }));
            };
            BaseClient.prototype._processEvent = function(event, hint, scope) {
                var _this = this;
                var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
                var transport = this.getTransport();
                function recordLostEvent(outcome, category) {
                    if (transport.recordLostEvent) transport.recordLostEvent(outcome, category);
                }
                if (!this._isEnabled()) return (0, syncpromise.rejectedSyncPromise)(new SentryError("SDK not enabled, will not capture event."));
                var isTransaction = "transaction" === event.type;
                if (!isTransaction && "number" === typeof sampleRate && Math.random() > sampleRate) {
                    recordLostEvent("sample_rate", "event");
                    return (0, syncpromise.rejectedSyncPromise)(new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
                }
                return this._prepareEvent(event, scope, hint).then((function(prepared) {
                    if (null === prepared) {
                        recordLostEvent("event_processor", event.type || "event");
                        throw new SentryError("An event processor returned null, will not send event.");
                    }
                    var isInternalException = hint && hint.data && true === hint.data.__sentry__;
                    if (isInternalException || isTransaction || !beforeSend) return prepared;
                    var beforeSendResult = beforeSend(prepared, hint);
                    return _ensureBeforeSendRv(beforeSendResult);
                })).then((function(processedEvent) {
                    if (null === processedEvent) {
                        recordLostEvent("before_send", event.type || "event");
                        throw new SentryError("`beforeSend` returned `null`, will not send event.");
                    }
                    var session = scope && scope.getSession && scope.getSession();
                    if (!isTransaction && session) _this._updateSessionFromEvent(session, processedEvent);
                    _this._sendEvent(processedEvent);
                    return processedEvent;
                })).then(null, (function(reason) {
                    if (reason instanceof SentryError) throw reason;
                    _this.captureException(reason, {
                        data: {
                            __sentry__: true
                        },
                        originalException: reason
                    });
                    throw new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
                }));
            };
            BaseClient.prototype._process = function(promise) {
                var _this = this;
                this._numProcessing += 1;
                void promise.then((function(value) {
                    _this._numProcessing -= 1;
                    return value;
                }), (function(reason) {
                    _this._numProcessing -= 1;
                    return reason;
                }));
            };
            return BaseClient;
        }();
        function _ensureBeforeSendRv(rv) {
            var nullErr = "`beforeSend` method has to return `null` or a valid event.";
            if ((0, is.isThenable)(rv)) return rv.then((function(event) {
                if (!((0, is.isPlainObject)(event) || null === event)) throw new SentryError(nullErr);
                return event;
            }), (function(e) {
                throw new SentryError("beforeSend rejected with " + e);
            })); else if (!((0, is.isPlainObject)(rv) || null === rv)) throw new SentryError(nullErr);
            return rv;
        }
        var SENTRY_API_VERSION = "7";
        (function() {
            function API(dsn, metadata, tunnel) {
                if (void 0 === metadata) metadata = {};
                this.dsn = dsn;
                this._dsnObject = makeDsn(dsn);
                this.metadata = metadata;
                this._tunnel = tunnel;
            }
            API.prototype.getDsn = function() {
                return this._dsnObject;
            };
            API.prototype.forceEnvelope = function() {
                return !!this._tunnel;
            };
            API.prototype.getBaseApiEndpoint = function() {
                return getBaseApiEndpoint(this._dsnObject);
            };
            API.prototype.getStoreEndpoint = function() {
                return getStoreEndpoint(this._dsnObject);
            };
            API.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return getStoreEndpointWithUrlEncodedAuth(this._dsnObject);
            };
            API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return getEnvelopeEndpointWithUrlEncodedAuth(this._dsnObject, this._tunnel);
            };
        })();
        function initAPIDetails(dsn, metadata, tunnel) {
            return {
                initDsn: dsn,
                metadata: metadata || {},
                dsn: makeDsn(dsn),
                tunnel
            };
        }
        function getBaseApiEndpoint(dsn) {
            var protocol = dsn.protocol ? dsn.protocol + ":" : "";
            var port = dsn.port ? ":" + dsn.port : "";
            return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : "") + "/api/";
        }
        function _getIngestEndpoint(dsn, target) {
            return "" + getBaseApiEndpoint(dsn) + dsn.projectId + "/" + target + "/";
        }
        function _encodedAuth(dsn) {
            return (0, object.urlEncode)({
                sentry_key: dsn.publicKey,
                sentry_version: SENTRY_API_VERSION
            });
        }
        function getStoreEndpoint(dsn) {
            return _getIngestEndpoint(dsn, "store");
        }
        function getStoreEndpointWithUrlEncodedAuth(dsn) {
            return getStoreEndpoint(dsn) + "?" + _encodedAuth(dsn);
        }
        function _getEnvelopeEndpoint(dsn) {
            return _getIngestEndpoint(dsn, "envelope");
        }
        function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel) {
            return tunnel ? tunnel : _getEnvelopeEndpoint(dsn) + "?" + _encodedAuth(dsn);
        }
        function getReportDialogEndpoint(dsnLike, dialogOptions) {
            var dsn = makeDsn(dsnLike);
            var endpoint = getBaseApiEndpoint(dsn) + "embed/error-page/";
            var encodedOptions = "dsn=" + dsnToString(dsn);
            for (var key in dialogOptions) {
                if ("dsn" === key) continue;
                if ("user" === key) {
                    if (!dialogOptions.user) continue;
                    if (dialogOptions.user.name) encodedOptions += "&name=" + encodeURIComponent(dialogOptions.user.name);
                    if (dialogOptions.user.email) encodedOptions += "&email=" + encodeURIComponent(dialogOptions.user.email);
                } else encodedOptions += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]);
            }
            return endpoint + "?" + encodedOptions;
        }
        function createEnvelope(headers, items) {
            if (void 0 === items) items = [];
            return [ headers, items ];
        }
        function serializeEnvelope(envelope) {
            var _a = (0, tslib_es6.__read)(envelope, 2), headers = _a[0], items = _a[1];
            var serializedHeaders = JSON.stringify(headers);
            return items.reduce((function(acc, item) {
                var _a = (0, tslib_es6.__read)(item, 2), itemHeaders = _a[0], payload = _a[1];
                var serializedPayload = (0, is.isPrimitive)(payload) ? String(payload) : JSON.stringify(payload);
                return acc + "\n" + JSON.stringify(itemHeaders) + "\n" + serializedPayload;
            }), serializedHeaders);
        }
        function getSdkMetadataForEnvelopeHeader(api) {
            if (!api.metadata || !api.metadata.sdk) return;
            var _a = api.metadata.sdk, name = _a.name, version = _a.version;
            return {
                name,
                version
            };
        }
        function enhanceEventWithSdkInfo(event, sdkInfo) {
            if (!sdkInfo) return event;
            event.sdk = event.sdk || {};
            event.sdk.name = event.sdk.name || sdkInfo.name;
            event.sdk.version = event.sdk.version || sdkInfo.version;
            event.sdk.integrations = (0, tslib_es6.__spread)(event.sdk.integrations || [], sdkInfo.integrations || []);
            event.sdk.packages = (0, tslib_es6.__spread)(event.sdk.packages || [], sdkInfo.packages || []);
            return event;
        }
        function createSessionEnvelope(session, api) {
            var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
            var envelopeHeaders = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({
                sent_at: (new Date).toISOString()
            }, sdkInfo && {
                sdk: sdkInfo
            }), !!api.tunnel && {
                dsn: dsnToString(api.dsn)
            });
            var type = "aggregates" in session ? "sessions" : "session";
            var envelopeItem = [ {
                type
            }, session ];
            var envelope = createEnvelope(envelopeHeaders, [ envelopeItem ]);
            return [ envelope, type ];
        }
        function sessionToSentryRequest(session, api) {
            var _a = (0, tslib_es6.__read)(createSessionEnvelope(session, api), 2), envelope = _a[0], type = _a[1];
            return {
                body: serializeEnvelope(envelope),
                type,
                url: getEnvelopeEndpointWithUrlEncodedAuth(api.dsn, api.tunnel)
            };
        }
        function createEventEnvelope(event, api) {
            var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
            var eventType = event.type || "event";
            var transactionSampling = (event.sdkProcessingMetadata || {}).transactionSampling;
            var _a = transactionSampling || {}, samplingMethod = _a.method, sampleRate = _a.rate;
            var envelopeHeaders = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({
                event_id: event.event_id,
                sent_at: (new Date).toISOString()
            }, sdkInfo && {
                sdk: sdkInfo
            }), !!api.tunnel && {
                dsn: dsnToString(api.dsn)
            });
            var eventItem = [ {
                type: eventType,
                sample_rates: [ {
                    id: samplingMethod,
                    rate: sampleRate
                } ]
            }, event ];
            return createEnvelope(envelopeHeaders, [ eventItem ]);
        }
        function eventToSentryRequest(event, api) {
            var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
            var eventType = event.type || "event";
            var useEnvelope = "transaction" === eventType || !!api.tunnel;
            var transactionSampling = (event.sdkProcessingMetadata || {}).transactionSampling;
            var _a = transactionSampling || {}, samplingMethod = _a.method, sampleRate = _a.rate;
            enhanceEventWithSdkInfo(event, api.metadata.sdk);
            event.tags = event.tags || {};
            event.extra = event.extra || {};
            if (!(event.sdkProcessingMetadata && event.sdkProcessingMetadata.baseClientNormalized)) {
                event.tags.skippedNormalization = true;
                event.extra.normalizeDepth = event.sdkProcessingMetadata ? event.sdkProcessingMetadata.normalizeDepth : "unset";
            }
            delete event.sdkProcessingMetadata;
            var body;
            try {
                body = JSON.stringify(event);
            } catch (err) {
                event.tags.JSONStringifyError = true;
                event.extra.JSONStringifyError = err;
                try {
                    body = JSON.stringify(normalize(event));
                } catch (newErr) {
                    var innerErr = newErr;
                    body = JSON.stringify({
                        message: "JSON.stringify error after renormalization",
                        extra: {
                            message: innerErr.message,
                            stack: innerErr.stack
                        }
                    });
                }
            }
            var req = {
                body,
                type: eventType,
                url: useEnvelope ? getEnvelopeEndpointWithUrlEncodedAuth(api.dsn, api.tunnel) : getStoreEndpointWithUrlEncodedAuth(api.dsn)
            };
            if (useEnvelope) {
                var envelopeHeaders = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({
                    event_id: event.event_id,
                    sent_at: (new Date).toISOString()
                }, sdkInfo && {
                    sdk: sdkInfo
                }), !!api.tunnel && {
                    dsn: dsnToString(api.dsn)
                });
                var eventItem = [ {
                    type: eventType,
                    sample_rates: [ {
                        id: samplingMethod,
                        rate: sampleRate
                    } ]
                }, req.body ];
                var envelope = createEnvelope(envelopeHeaders, [ eventItem ]);
                req.body = serializeEnvelope(envelope);
            }
            return req;
        }
        var NoopTransport = function() {
            function NoopTransport() {}
            NoopTransport.prototype.sendEvent = function(_) {
                return (0, syncpromise.resolvedSyncPromise)({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: "skipped"
                });
            };
            NoopTransport.prototype.close = function(_) {
                return (0, syncpromise.resolvedSyncPromise)(true);
            };
            return NoopTransport;
        }();
        var BaseBackend = function() {
            function BaseBackend(options) {
                this._options = options;
                if (!this._options.dsn) (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("No DSN provided, backend will not do anything.");
                this._transport = this._setupTransport();
            }
            BaseBackend.prototype.eventFromException = function(_exception, _hint) {
                throw new SentryError("Backend has to implement `eventFromException` method");
            };
            BaseBackend.prototype.eventFromMessage = function(_message, _level, _hint) {
                throw new SentryError("Backend has to implement `eventFromMessage` method");
            };
            BaseBackend.prototype.sendEvent = function(event) {
                if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var api = initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel);
                    var env = createEventEnvelope(event, api);
                    void this._newTransport.send(env).then(null, (function(reason) {
                        (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Error while sending event:", reason);
                    }));
                } else void this._transport.sendEvent(event).then(null, (function(reason) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Error while sending event:", reason);
                }));
            };
            BaseBackend.prototype.sendSession = function(session) {
                if (!this._transport.sendSession) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Dropping session because custom transport doesn't implement sendSession");
                    return;
                }
                if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var api = initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel);
                    var _a = (0, tslib_es6.__read)(createSessionEnvelope(session, api), 1), env = _a[0];
                    void this._newTransport.send(env).then(null, (function(reason) {
                        (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Error while sending session:", reason);
                    }));
                } else void this._transport.sendSession(session).then(null, (function(reason) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Error while sending session:", reason);
                }));
            };
            BaseBackend.prototype.getTransport = function() {
                return this._transport;
            };
            BaseBackend.prototype._setupTransport = function() {
                return new NoopTransport;
            };
            return BaseBackend;
        }();
        var Severity;
        (function(Severity) {
            Severity["Fatal"] = "fatal";
            Severity["Error"] = "error";
            Severity["Warning"] = "warning";
            Severity["Log"] = "log";
            Severity["Info"] = "info";
            Severity["Debug"] = "debug";
            Severity["Critical"] = "critical";
        })(Severity || (Severity = {}));
        var supports = __webpack_require__("../shared/node_modules/@sentry/utils/esm/supports.js");
        var UNKNOWN_FUNCTION = "?";
        var OPERA10_PRIORITY = 10;
        var OPERA11_PRIORITY = 20;
        var CHROME_PRIORITY = 30;
        var WINJS_PRIORITY = 40;
        var GECKO_PRIORITY = 50;
        function createFrame(filename, func, lineno, colno) {
            var frame = {
                filename,
                function: func,
                in_app: true
            };
            if (void 0 !== lineno) frame.lineno = lineno;
            if (void 0 !== colno) frame.colno = colno;
            return frame;
        }
        var chromeRegex = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
        var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        var chrome = function(line) {
            var parts = chromeRegex.exec(line);
            if (parts) {
                var isEval = parts[2] && 0 === parts[2].indexOf("eval");
                if (isEval) {
                    var subMatch = chromeEvalRegex.exec(parts[2]);
                    if (subMatch) {
                        parts[2] = subMatch[1];
                        parts[3] = subMatch[2];
                        parts[4] = subMatch[3];
                    }
                }
                var _a = (0, tslib_es6.__read)(extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]), 2), func = _a[0], filename = _a[1];
                return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
            }
            return;
        };
        var chromeStackParser = [ CHROME_PRIORITY, chrome ];
        var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
        var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        var gecko = function(line) {
            var _a;
            var parts = geckoREgex.exec(line);
            if (parts) {
                var isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
                if (isEval) {
                    var subMatch = geckoEvalRegex.exec(parts[3]);
                    if (subMatch) {
                        parts[1] = parts[1] || "eval";
                        parts[3] = subMatch[1];
                        parts[4] = subMatch[2];
                        parts[5] = "";
                    }
                }
                var filename = parts[3];
                var func = parts[1] || UNKNOWN_FUNCTION;
                _a = (0, tslib_es6.__read)(extractSafariExtensionDetails(func, filename), 2), func = _a[0], 
                filename = _a[1];
                return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
            }
            return;
        };
        var geckoStackParser = [ GECKO_PRIORITY, gecko ];
        var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        var winjs = function(line) {
            var parts = winjsRegex.exec(line);
            return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
        };
        var winjsStackParser = [ WINJS_PRIORITY, winjs ];
        var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
        var opera10 = function(line) {
            var parts = opera10Regex.exec(line);
            return parts ? createFrame(parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : void 0;
        };
        var opera10StackParser = [ OPERA10_PRIORITY, opera10 ];
        var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
        var opera11 = function(line) {
            var parts = opera11Regex.exec(line);
            return parts ? createFrame(parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : void 0;
        };
        var opera11StackParser = [ OPERA11_PRIORITY, opera11 ];
        var extractSafariExtensionDetails = function(func, filename) {
            var isSafariExtension = -1 !== func.indexOf("safari-extension");
            var isSafariWebExtension = -1 !== func.indexOf("safari-web-extension");
            return isSafariExtension || isSafariWebExtension ? [ -1 !== func.indexOf("@") ? func.split("@")[0] : UNKNOWN_FUNCTION, isSafariExtension ? "safari-extension:" + filename : "safari-web-extension:" + filename ] : [ func, filename ];
        };
        function exceptionFromError(ex) {
            var frames = parseStackFrames(ex);
            var exception = {
                type: ex && ex.name,
                value: extractMessage(ex)
            };
            if (frames.length) exception.stacktrace = {
                frames
            };
            if (void 0 === exception.type && "" === exception.value) exception.value = "Unrecoverable error caught";
            return exception;
        }
        function eventFromPlainObject(exception, syntheticException, isUnhandledRejection) {
            var event = {
                exception: {
                    values: [ {
                        type: (0, is.isEvent)(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (isUnhandledRejection ? "promise rejection" : "exception") + " captured with keys: " + (0, 
                        object.extractExceptionKeysForMessage)(exception)
                    } ]
                },
                extra: {
                    __serialized__: normalizeToSize(exception)
                }
            };
            if (syntheticException) {
                var frames_1 = parseStackFrames(syntheticException);
                if (frames_1.length) event.stacktrace = {
                    frames: frames_1
                };
            }
            return event;
        }
        function eventFromError(ex) {
            return {
                exception: {
                    values: [ exceptionFromError(ex) ]
                }
            };
        }
        function parseStackFrames(ex) {
            var stacktrace = ex.stacktrace || ex.stack || "";
            var popSize = getPopSize(ex);
            try {
                return (0, esm_stacktrace.createStackParser)(opera10StackParser, opera11StackParser, chromeStackParser, winjsStackParser, geckoStackParser)(stacktrace, popSize);
            } catch (e) {}
            return [];
        }
        var reactMinifiedRegexp = /Minified React error #\d+;/i;
        function getPopSize(ex) {
            if (ex) {
                if ("number" === typeof ex.framesToPop) return ex.framesToPop;
                if (reactMinifiedRegexp.test(ex.message)) return 1;
            }
            return 0;
        }
        function extractMessage(ex) {
            var message = ex && ex.message;
            if (!message) return "No error message";
            if (message.error && "string" === typeof message.error.message) return message.error.message;
            return message;
        }
        function eventFromException(exception, hint, attachStacktrace) {
            var syntheticException = hint && hint.syntheticException || void 0;
            var event = eventFromUnknownInput(exception, syntheticException, attachStacktrace);
            (0, misc.addExceptionMechanism)(event);
            event.level = Severity.Error;
            if (hint && hint.event_id) event.event_id = hint.event_id;
            return (0, syncpromise.resolvedSyncPromise)(event);
        }
        function eventFromMessage(message, level, hint, attachStacktrace) {
            if (void 0 === level) level = Severity.Info;
            var syntheticException = hint && hint.syntheticException || void 0;
            var event = eventFromString(message, syntheticException, attachStacktrace);
            event.level = level;
            if (hint && hint.event_id) event.event_id = hint.event_id;
            return (0, syncpromise.resolvedSyncPromise)(event);
        }
        function eventFromUnknownInput(exception, syntheticException, attachStacktrace, isUnhandledRejection) {
            var event;
            if ((0, is.isErrorEvent)(exception) && exception.error) {
                var errorEvent = exception;
                return eventFromError(errorEvent.error);
            }
            if ((0, is.isDOMError)(exception) || (0, is.isDOMException)(exception)) {
                var domException = exception;
                if ("stack" in exception) event = eventFromError(exception); else {
                    var name_1 = domException.name || ((0, is.isDOMError)(domException) ? "DOMError" : "DOMException");
                    var message = domException.message ? name_1 + ": " + domException.message : name_1;
                    event = eventFromString(message, syntheticException, attachStacktrace);
                    (0, misc.addExceptionTypeValue)(event, message);
                }
                if ("code" in domException) event.tags = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event.tags), {
                    "DOMException.code": "" + domException.code
                });
                return event;
            }
            if ((0, is.isError)(exception)) return eventFromError(exception);
            if ((0, is.isPlainObject)(exception) || (0, is.isEvent)(exception)) {
                var objectException = exception;
                event = eventFromPlainObject(objectException, syntheticException, isUnhandledRejection);
                (0, misc.addExceptionMechanism)(event, {
                    synthetic: true
                });
                return event;
            }
            event = eventFromString(exception, syntheticException, attachStacktrace);
            (0, misc.addExceptionTypeValue)(event, "" + exception, void 0);
            (0, misc.addExceptionMechanism)(event, {
                synthetic: true
            });
            return event;
        }
        function eventFromString(input, syntheticException, attachStacktrace) {
            var event = {
                message: input
            };
            if (attachStacktrace && syntheticException) {
                var frames_2 = parseStackFrames(syntheticException);
                if (frames_2.length) event.stacktrace = {
                    frames: frames_2
                };
            }
            return event;
        }
        function makePromiseBuffer(limit) {
            var buffer = [];
            function isReady() {
                return void 0 === limit || buffer.length < limit;
            }
            function remove(task) {
                return buffer.splice(buffer.indexOf(task), 1)[0];
            }
            function add(taskProducer) {
                if (!isReady()) return (0, syncpromise.rejectedSyncPromise)(new SentryError("Not adding Promise due to buffer limit reached."));
                var task = taskProducer();
                if (-1 === buffer.indexOf(task)) buffer.push(task);
                void task.then((function() {
                    return remove(task);
                })).then(null, (function() {
                    return remove(task).then(null, (function() {}));
                }));
                return task;
            }
            function drain(timeout) {
                return new syncpromise.SyncPromise((function(resolve, reject) {
                    var counter = buffer.length;
                    if (!counter) return resolve(true);
                    var capturedSetTimeout = setTimeout((function() {
                        if (timeout && timeout > 0) resolve(false);
                    }), timeout);
                    buffer.forEach((function(item) {
                        void (0, syncpromise.resolvedSyncPromise)(item).then((function() {
                            if (!--counter) {
                                clearTimeout(capturedSetTimeout);
                                resolve(true);
                            }
                        }), reject);
                    }));
                }));
            }
            return {
                $: buffer,
                add,
                drain
            };
        }
        function createClientReportEnvelope(discarded_events, dsn, timestamp) {
            var clientReportItem = [ {
                type: "client_report"
            }, {
                timestamp: timestamp || (0, time.dateTimestampInSeconds)(),
                discarded_events
            } ];
            return createEnvelope(dsn ? {
                dsn
            } : {}, [ clientReportItem ]);
        }
        function eventStatusFromHttpCode(code) {
            if (code >= 200 && code < 300) return "success";
            if (429 === code) return "rate_limit";
            if (code >= 400 && code < 500) return "invalid";
            if (code >= 500) return "failed";
            return "unknown";
        }
        var DEFAULT_RETRY_AFTER = 60 * 1e3;
        function parseRetryAfterHeader(header, now) {
            if (void 0 === now) now = Date.now();
            var headerDelay = parseInt("" + header, 10);
            if (!isNaN(headerDelay)) return 1e3 * headerDelay;
            var headerDate = Date.parse("" + header);
            if (!isNaN(headerDate)) return headerDate - now;
            return DEFAULT_RETRY_AFTER;
        }
        function disabledUntil(limits, category) {
            return limits[category] || limits.all || 0;
        }
        function isRateLimited(limits, category, now) {
            if (void 0 === now) now = Date.now();
            return disabledUntil(limits, category) > now;
        }
        function updateRateLimits(limits, headers, now) {
            var e_1, _a, e_2, _b;
            if (void 0 === now) now = Date.now();
            var updatedRateLimits = (0, tslib_es6.__assign)({}, limits);
            var rateLimitHeader = headers["x-sentry-rate-limits"];
            var retryAfterHeader = headers["retry-after"];
            if (rateLimitHeader) try {
                for (var _c = (0, tslib_es6.__values)(rateLimitHeader.trim().split(",")), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var limit = _d.value;
                    var parameters = limit.split(":", 2);
                    var headerDelay = parseInt(parameters[0], 10);
                    var delay = 1e3 * (!isNaN(headerDelay) ? headerDelay : 60);
                    if (!parameters[1]) updatedRateLimits.all = now + delay; else try {
                        for (var _e = (e_2 = void 0, (0, tslib_es6.__values)(parameters[1].split(";"))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            updatedRateLimits[category] = now + delay;
                        }
                    } catch (e_2_1) {
                        e_2 = {
                            error: e_2_1
                        };
                    } finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        } finally {
                            if (e_2) throw e_2.error;
                        }
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                } finally {
                    if (e_1) throw e_1.error;
                }
            } else if (retryAfterHeader) updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
            return updatedRateLimits;
        }
        function forget(promise) {
            void promise.then(null, (function(e) {
                console.error(e);
            }));
        }
        var global = (0, esm_global.getGlobalObject)();
        var cachedFetchImpl;
        function getNativeFetchImplementation() {
            if (cachedFetchImpl) return cachedFetchImpl;
            if ((0, supports.isNativeFetch)(global.fetch)) return cachedFetchImpl = global.fetch.bind(global);
            var document = global.document;
            var fetchImpl = global.fetch;
            if (document && "function" === typeof document.createElement) try {
                var sandbox = document.createElement("iframe");
                sandbox.hidden = true;
                document.head.appendChild(sandbox);
                var contentWindow = sandbox.contentWindow;
                if (contentWindow && contentWindow.fetch) fetchImpl = contentWindow.fetch;
                document.head.removeChild(sandbox);
            } catch (e) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
            }
            return cachedFetchImpl = fetchImpl.bind(global);
        }
        function sendReport(url, body) {
            var isRealNavigator = "[object Navigator]" === Object.prototype.toString.call(global && global.navigator);
            var hasSendBeacon = isRealNavigator && "function" === typeof global.navigator.sendBeacon;
            if (hasSendBeacon) {
                var sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
                return sendBeacon(url, body);
            }
            if ((0, supports.supportsFetch)()) {
                var fetch_1 = getNativeFetchImplementation();
                return forget(fetch_1(url, {
                    body,
                    method: "POST",
                    credentials: "omit",
                    keepalive: true
                }));
            }
        }
        function requestTypeToCategory(ty) {
            var tyStr = ty;
            return "event" === tyStr ? "error" : tyStr;
        }
        var base_global = (0, esm_global.getGlobalObject)();
        var BaseTransport = function() {
            function BaseTransport(options) {
                var _this = this;
                this.options = options;
                this._buffer = makePromiseBuffer(30);
                this._rateLimits = {};
                this._outcomes = {};
                this._api = initAPIDetails(options.dsn, options._metadata, options.tunnel);
                this.url = getStoreEndpointWithUrlEncodedAuth(this._api.dsn);
                if (this.options.sendClientReports && base_global.document) base_global.document.addEventListener("visibilitychange", (function() {
                    if ("hidden" === base_global.document.visibilityState) _this._flushOutcomes();
                }));
            }
            BaseTransport.prototype.sendEvent = function(event) {
                return this._sendRequest(eventToSentryRequest(event, this._api), event);
            };
            BaseTransport.prototype.sendSession = function(session) {
                return this._sendRequest(sessionToSentryRequest(session, this._api), session);
            };
            BaseTransport.prototype.close = function(timeout) {
                return this._buffer.drain(timeout);
            };
            BaseTransport.prototype.recordLostEvent = function(reason, category) {
                var _a;
                if (!this.options.sendClientReports) return;
                var key = requestTypeToCategory(category) + ":" + reason;
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("Adding outcome: " + key);
                this._outcomes[key] = (_a = this._outcomes[key], null !== _a && void 0 !== _a ? _a : 0) + 1;
            };
            BaseTransport.prototype._flushOutcomes = function() {
                if (!this.options.sendClientReports) return;
                var outcomes = this._outcomes;
                this._outcomes = {};
                if (!Object.keys(outcomes).length) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log("No outcomes to flush");
                    return;
                }
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("Flushing outcomes:\n" + JSON.stringify(outcomes, null, 2));
                var url = getEnvelopeEndpointWithUrlEncodedAuth(this._api.dsn, this._api.tunnel);
                var discardedEvents = Object.keys(outcomes).map((function(key) {
                    var _a = (0, tslib_es6.__read)(key.split(":"), 2), category = _a[0], reason = _a[1];
                    return {
                        reason,
                        category,
                        quantity: outcomes[key]
                    };
                }));
                var envelope = createClientReportEnvelope(discardedEvents, this._api.tunnel && dsnToString(this._api.dsn));
                try {
                    sendReport(url, serializeEnvelope(envelope));
                } catch (e) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.error(e);
                }
            };
            BaseTransport.prototype._handleResponse = function(_a) {
                var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
                var status = eventStatusFromHttpCode(response.status);
                this._rateLimits = updateRateLimits(this._rateLimits, headers);
                if (this._isRateLimited(requestType) && (0, esm_env.isDebugBuild)()) (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
                if ("success" === status) {
                    resolve({
                        status
                    });
                    return;
                }
                reject(response);
            };
            BaseTransport.prototype._disabledUntil = function(requestType) {
                var category = requestTypeToCategory(requestType);
                return new Date(disabledUntil(this._rateLimits, category));
            };
            BaseTransport.prototype._isRateLimited = function(requestType) {
                var category = requestTypeToCategory(requestType);
                return isRateLimited(this._rateLimits, category);
            };
            return BaseTransport;
        }();
        var FetchTransport = function(_super) {
            (0, tslib_es6.__extends)(FetchTransport, _super);
            function FetchTransport(options, fetchImpl) {
                if (void 0 === fetchImpl) fetchImpl = getNativeFetchImplementation();
                var _this = _super.call(this, options) || this;
                _this._fetch = fetchImpl;
                return _this;
            }
            FetchTransport.prototype._sendRequest = function(sentryRequest, originalPayload) {
                var _this = this;
                if (this._isRateLimited(sentryRequest.type)) {
                    this.recordLostEvent("ratelimit_backoff", sentryRequest.type);
                    return Promise.reject({
                        event: originalPayload,
                        type: sentryRequest.type,
                        reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                        status: 429
                    });
                }
                var options = {
                    body: sentryRequest.body,
                    method: "POST",
                    referrerPolicy: (0, supports.supportsReferrerPolicy)() ? "origin" : ""
                };
                if (void 0 !== this.options.fetchParameters) Object.assign(options, this.options.fetchParameters);
                if (void 0 !== this.options.headers) options.headers = this.options.headers;
                return this._buffer.add((function() {
                    return new syncpromise.SyncPromise((function(resolve, reject) {
                        void _this._fetch(sentryRequest.url, options).then((function(response) {
                            var headers = {
                                "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": response.headers.get("Retry-After")
                            };
                            _this._handleResponse({
                                requestType: sentryRequest.type,
                                response,
                                headers,
                                resolve,
                                reject
                            });
                        })).catch(reject);
                    }));
                })).then(void 0, (function(reason) {
                    if (reason instanceof SentryError) _this.recordLostEvent("queue_overflow", sentryRequest.type); else _this.recordLostEvent("network_error", sentryRequest.type);
                    throw reason;
                }));
            };
            return FetchTransport;
        }(BaseTransport);
        var XHRTransport = function(_super) {
            (0, tslib_es6.__extends)(XHRTransport, _super);
            function XHRTransport() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            XHRTransport.prototype._sendRequest = function(sentryRequest, originalPayload) {
                var _this = this;
                if (this._isRateLimited(sentryRequest.type)) {
                    this.recordLostEvent("ratelimit_backoff", sentryRequest.type);
                    return Promise.reject({
                        event: originalPayload,
                        type: sentryRequest.type,
                        reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                        status: 429
                    });
                }
                return this._buffer.add((function() {
                    return new syncpromise.SyncPromise((function(resolve, reject) {
                        var request = new XMLHttpRequest;
                        request.onreadystatechange = function() {
                            if (4 === request.readyState) {
                                var headers = {
                                    "x-sentry-rate-limits": request.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": request.getResponseHeader("Retry-After")
                                };
                                _this._handleResponse({
                                    requestType: sentryRequest.type,
                                    response: request,
                                    headers,
                                    resolve,
                                    reject
                                });
                            }
                        };
                        request.open("POST", sentryRequest.url);
                        for (var header in _this.options.headers) if (Object.prototype.hasOwnProperty.call(_this.options.headers, header)) request.setRequestHeader(header, _this.options.headers[header]);
                        request.send(sentryRequest.body);
                    }));
                })).then(void 0, (function(reason) {
                    if (reason instanceof SentryError) _this.recordLostEvent("queue_overflow", sentryRequest.type); else _this.recordLostEvent("network_error", sentryRequest.type);
                    throw reason;
                }));
            };
            return XHRTransport;
        }(BaseTransport);
        var BrowserBackend = function(_super) {
            (0, tslib_es6.__extends)(BrowserBackend, _super);
            function BrowserBackend() {
                return null !== _super && _super.apply(this, arguments) || this;
            }
            BrowserBackend.prototype.eventFromException = function(exception, hint) {
                return eventFromException(exception, hint, this._options.attachStacktrace);
            };
            BrowserBackend.prototype.eventFromMessage = function(message, level, hint) {
                if (void 0 === level) level = Severity.Info;
                return eventFromMessage(message, level, hint, this._options.attachStacktrace);
            };
            BrowserBackend.prototype._setupTransport = function() {
                if (!this._options.dsn) return _super.prototype._setupTransport.call(this);
                var transportOptions = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, this._options.transportOptions), {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata
                });
                if (this._options.transport) return new this._options.transport(transportOptions);
                if ((0, supports.supportsFetch)()) return new FetchTransport(transportOptions);
                return new XHRTransport(transportOptions);
            };
            return BrowserBackend;
        }(BaseBackend);
        function callOnHub(method) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
            var hub = (0, esm_hub.getCurrentHub)();
            if (hub && hub[method]) return hub[method].apply(hub, (0, tslib_es6.__spread)(args));
            throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
        }
        function captureException(exception, captureContext) {
            var syntheticException = new Error("Sentry syntheticException");
            return callOnHub("captureException", exception, {
                captureContext,
                originalException: exception,
                syntheticException
            });
        }
        function captureMessage(message, captureContext) {
            var syntheticException = new Error(message);
            var level = "string" === typeof captureContext ? captureContext : void 0;
            var context = "string" !== typeof captureContext ? {
                captureContext
            } : void 0;
            return callOnHub("captureMessage", message, level, (0, tslib_es6.__assign)({
                originalException: message,
                syntheticException
            }, context));
        }
        function withScope(callback) {
            callOnHub("withScope", callback);
        }
        var helpers_global = (0, esm_global.getGlobalObject)();
        var ignoreOnError = 0;
        function shouldIgnoreOnError() {
            return ignoreOnError > 0;
        }
        function ignoreNextOnError() {
            ignoreOnError += 1;
            setTimeout((function() {
                ignoreOnError -= 1;
            }));
        }
        function wrap(fn, options, before) {
            if (void 0 === options) options = {};
            if ("function" !== typeof fn) return fn;
            try {
                var wrapper = fn.__sentry_wrapped__;
                if (wrapper) return wrapper;
                if ((0, object.getOriginalFunction)(fn)) return fn;
            } catch (e) {
                return fn;
            }
            var sentryWrapped = function() {
                var args = Array.prototype.slice.call(arguments);
                try {
                    if (before && "function" === typeof before) before.apply(this, arguments);
                    var wrappedArguments = args.map((function(arg) {
                        return wrap(arg, options);
                    }));
                    return fn.apply(this, wrappedArguments);
                } catch (ex) {
                    ignoreNextOnError();
                    withScope((function(scope) {
                        scope.addEventProcessor((function(event) {
                            if (options.mechanism) {
                                (0, misc.addExceptionTypeValue)(event, void 0, void 0);
                                (0, misc.addExceptionMechanism)(event, options.mechanism);
                            }
                            event.extra = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event.extra), {
                                arguments: args
                            });
                            return event;
                        }));
                        captureException(ex);
                    }));
                    throw ex;
                }
            };
            try {
                for (var property in fn) if (Object.prototype.hasOwnProperty.call(fn, property)) sentryWrapped[property] = fn[property];
            } catch (_oO) {}
            (0, object.markFunctionWrapped)(sentryWrapped, fn);
            (0, object.addNonEnumerableProperty)(fn, "__sentry_wrapped__", sentryWrapped);
            try {
                var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
                if (descriptor.configurable) Object.defineProperty(sentryWrapped, "name", {
                    get: function() {
                        return fn.name;
                    }
                });
            } catch (_oO) {}
            return sentryWrapped;
        }
        function injectReportDialog(options) {
            if (void 0 === options) options = {};
            if (!helpers_global.document) return;
            if (!options.eventId) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Missing eventId option in showReportDialog call");
                return;
            }
            if (!options.dsn) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Missing dsn option in showReportDialog call");
                return;
            }
            var script = helpers_global.document.createElement("script");
            script.async = true;
            script.src = getReportDialogEndpoint(options.dsn, options);
            if (options.onLoad) script.onload = options.onLoad;
            var injectionPoint = helpers_global.document.head || helpers_global.document.body;
            if (injectionPoint) injectionPoint.appendChild(script);
        }
        var browser = __webpack_require__("../shared/node_modules/@sentry/utils/esm/browser.js");
        var enums_SeverityLevels = [ "fatal", "error", "warning", "log", "info", "debug", "critical" ];
        function isSupportedSeverity(level) {
            return -1 !== enums_SeverityLevels.indexOf(level);
        }
        function severityFromString(level) {
            if ("warn" === level) return Severity.Warning;
            if (isSupportedSeverity(level)) return level;
            return Severity.Log;
        }
        var Breadcrumbs = function() {
            function Breadcrumbs(options) {
                this.name = Breadcrumbs.id;
                this._options = (0, tslib_es6.__assign)({
                    console: true,
                    dom: true,
                    fetch: true,
                    history: true,
                    sentry: true,
                    xhr: true
                }, options);
            }
            Breadcrumbs.prototype.addSentryBreadcrumb = function(event) {
                if (!this._options.sentry) return;
                (0, esm_hub.getCurrentHub)().addBreadcrumb({
                    category: "sentry." + ("transaction" === event.type ? "transaction" : "event"),
                    event_id: event.event_id,
                    level: event.level,
                    message: (0, misc.getEventDescription)(event)
                }, {
                    event
                });
            };
            Breadcrumbs.prototype.setupOnce = function() {
                if (this._options.console) (0, instrument.addInstrumentationHandler)("console", _consoleBreadcrumb);
                if (this._options.dom) (0, instrument.addInstrumentationHandler)("dom", _domBreadcrumb(this._options.dom));
                if (this._options.xhr) (0, instrument.addInstrumentationHandler)("xhr", _xhrBreadcrumb);
                if (this._options.fetch) (0, instrument.addInstrumentationHandler)("fetch", _fetchBreadcrumb);
                if (this._options.history) (0, instrument.addInstrumentationHandler)("history", _historyBreadcrumb);
            };
            Breadcrumbs.id = "Breadcrumbs";
            return Breadcrumbs;
        }();
        function _domBreadcrumb(dom) {
            function _innerDomBreadcrumb(handlerData) {
                var target;
                var keyAttrs = "object" === typeof dom ? dom.serializeAttribute : void 0;
                if ("string" === typeof keyAttrs) keyAttrs = [ keyAttrs ];
                try {
                    target = handlerData.event.target ? (0, browser.htmlTreeAsString)(handlerData.event.target, keyAttrs) : (0, 
                    browser.htmlTreeAsString)(handlerData.event, keyAttrs);
                } catch (e) {
                    target = "<unknown>";
                }
                if (0 === target.length) return;
                (0, esm_hub.getCurrentHub)().addBreadcrumb({
                    category: "ui." + handlerData.name,
                    message: target
                }, {
                    event: handlerData.event,
                    name: handlerData.name,
                    global: handlerData.global
                });
            }
            return _innerDomBreadcrumb;
        }
        function _consoleBreadcrumb(handlerData) {
            var breadcrumb = {
                category: "console",
                data: {
                    arguments: handlerData.args,
                    logger: "console"
                },
                level: severityFromString(handlerData.level),
                message: (0, string.safeJoin)(handlerData.args, " ")
            };
            if ("assert" === handlerData.level) if (false === handlerData.args[0]) {
                breadcrumb.message = "Assertion failed: " + ((0, string.safeJoin)(handlerData.args.slice(1), " ") || "console.assert");
                breadcrumb.data.arguments = handlerData.args.slice(1);
            } else return;
            (0, esm_hub.getCurrentHub)().addBreadcrumb(breadcrumb, {
                input: handlerData.args,
                level: handlerData.level
            });
        }
        function _xhrBreadcrumb(handlerData) {
            if (handlerData.endTimestamp) {
                if (handlerData.xhr.__sentry_own_request__) return;
                var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
                (0, esm_hub.getCurrentHub)().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method,
                        url,
                        status_code
                    },
                    type: "http"
                }, {
                    xhr: handlerData.xhr,
                    input: body
                });
                return;
            }
        }
        function _fetchBreadcrumb(handlerData) {
            if (!handlerData.endTimestamp) return;
            if (handlerData.fetchData.url.match(/sentry_key/) && "POST" === handlerData.fetchData.method) return;
            if (handlerData.error) (0, esm_hub.getCurrentHub)().addBreadcrumb({
                category: "fetch",
                data: handlerData.fetchData,
                level: Severity.Error,
                type: "http"
            }, {
                data: handlerData.error,
                input: handlerData.args
            }); else (0, esm_hub.getCurrentHub)().addBreadcrumb({
                category: "fetch",
                data: (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, handlerData.fetchData), {
                    status_code: handlerData.response.status
                }),
                type: "http"
            }, {
                input: handlerData.args,
                response: handlerData.response
            });
        }
        function _historyBreadcrumb(handlerData) {
            var global = (0, esm_global.getGlobalObject)();
            var from = handlerData.from;
            var to = handlerData.to;
            var parsedLoc = (0, misc.parseUrl)(global.location.href);
            var parsedFrom = (0, misc.parseUrl)(from);
            var parsedTo = (0, misc.parseUrl)(to);
            if (!parsedFrom.path) parsedFrom = parsedLoc;
            if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
            if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
            (0, esm_hub.getCurrentHub)().addBreadcrumb({
                category: "navigation",
                data: {
                    from,
                    to
                }
            });
        }
        var BrowserClient = function(_super) {
            (0, tslib_es6.__extends)(BrowserClient, _super);
            function BrowserClient(options) {
                if (void 0 === options) options = {};
                var _this = this;
                options._metadata = options._metadata || {};
                options._metadata.sdk = options._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [ {
                        name: "npm:@sentry/browser",
                        version: SDK_VERSION
                    } ],
                    version: SDK_VERSION
                };
                _this = _super.call(this, BrowserBackend, options) || this;
                return _this;
            }
            BrowserClient.prototype.showReportDialog = function(options) {
                if (void 0 === options) options = {};
                var document = (0, esm_global.getGlobalObject)().document;
                if (!document) return;
                if (!this._isEnabled()) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.error("Trying to call showReportDialog with Sentry Client disabled");
                    return;
                }
                injectReportDialog((0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, options), {
                    dsn: options.dsn || this.getDsn()
                }));
            };
            BrowserClient.prototype._prepareEvent = function(event, scope, hint) {
                event.platform = event.platform || "javascript";
                return _super.prototype._prepareEvent.call(this, event, scope, hint);
            };
            BrowserClient.prototype._sendEvent = function(event) {
                var integration = this.getIntegration(Breadcrumbs);
                if (integration) integration.addSentryBreadcrumb(event);
                _super.prototype._sendEvent.call(this, event);
            };
            return BrowserClient;
        }(BaseClient);
        var DEFAULT_EVENT_TARGET = [ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ];
        var TryCatch = function() {
            function TryCatch(options) {
                this.name = TryCatch.id;
                this._options = (0, tslib_es6.__assign)({
                    XMLHttpRequest: true,
                    eventTarget: true,
                    requestAnimationFrame: true,
                    setInterval: true,
                    setTimeout: true
                }, options);
            }
            TryCatch.prototype.setupOnce = function() {
                var global = (0, esm_global.getGlobalObject)();
                if (this._options.setTimeout) (0, object.fill)(global, "setTimeout", _wrapTimeFunction);
                if (this._options.setInterval) (0, object.fill)(global, "setInterval", _wrapTimeFunction);
                if (this._options.requestAnimationFrame) (0, object.fill)(global, "requestAnimationFrame", _wrapRAF);
                if (this._options.XMLHttpRequest && "XMLHttpRequest" in global) (0, object.fill)(XMLHttpRequest.prototype, "send", _wrapXHR);
                var eventTargetOption = this._options.eventTarget;
                if (eventTargetOption) {
                    var eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
                    eventTarget.forEach(_wrapEventTarget);
                }
            };
            TryCatch.id = "TryCatch";
            return TryCatch;
        }();
        function _wrapTimeFunction(original) {
            return function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var originalCallback = args[0];
                args[0] = wrap(originalCallback, {
                    mechanism: {
                        data: {
                            function: (0, esm_stacktrace.getFunctionName)(original)
                        },
                        handled: true,
                        type: "instrument"
                    }
                });
                return original.apply(this, args);
            };
        }
        function _wrapRAF(original) {
            return function(callback) {
                return original.apply(this, [ wrap(callback, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0, esm_stacktrace.getFunctionName)(original)
                        },
                        handled: true,
                        type: "instrument"
                    }
                }) ]);
            };
        }
        function _wrapXHR(originalSend) {
            return function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var xhr = this;
                var xmlHttpRequestProps = [ "onload", "onerror", "onprogress", "onreadystatechange" ];
                xmlHttpRequestProps.forEach((function(prop) {
                    if (prop in xhr && "function" === typeof xhr[prop]) (0, object.fill)(xhr, prop, (function(original) {
                        var wrapOptions = {
                            mechanism: {
                                data: {
                                    function: prop,
                                    handler: (0, esm_stacktrace.getFunctionName)(original)
                                },
                                handled: true,
                                type: "instrument"
                            }
                        };
                        var originalFunction = (0, object.getOriginalFunction)(original);
                        if (originalFunction) wrapOptions.mechanism.data.handler = (0, esm_stacktrace.getFunctionName)(originalFunction);
                        return wrap(original, wrapOptions);
                    }));
                }));
                return originalSend.apply(this, args);
            };
        }
        function _wrapEventTarget(target) {
            var global = (0, esm_global.getGlobalObject)();
            var proto = global[target] && global[target].prototype;
            if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
            (0, object.fill)(proto, "addEventListener", (function(original) {
                return function(eventName, fn, options) {
                    try {
                        if ("function" === typeof fn.handleEvent) fn.handleEvent = wrap(fn.handleEvent.bind(fn), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, esm_stacktrace.getFunctionName)(fn),
                                    target
                                },
                                handled: true,
                                type: "instrument"
                            }
                        });
                    } catch (err) {}
                    return original.apply(this, [ eventName, wrap(fn, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, esm_stacktrace.getFunctionName)(fn),
                                target
                            },
                            handled: true,
                            type: "instrument"
                        }
                    }), options ]);
                };
            }));
            (0, object.fill)(proto, "removeEventListener", (function(originalRemoveEventListener) {
                return function(eventName, fn, options) {
                    var wrappedEventHandler = fn;
                    try {
                        var originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
                        if (originalEventHandler) originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                    } catch (e) {}
                    return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
                };
            }));
        }
        var GlobalHandlers = function() {
            function GlobalHandlers(options) {
                this.name = GlobalHandlers.id;
                this._installFunc = {
                    onerror: _installGlobalOnErrorHandler,
                    onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
                };
                this._options = (0, tslib_es6.__assign)({
                    onerror: true,
                    onunhandledrejection: true
                }, options);
            }
            GlobalHandlers.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50;
                var options = this._options;
                for (var key in options) {
                    var installFunc = this._installFunc[key];
                    if (installFunc && options[key]) {
                        globalHandlerLog(key);
                        installFunc();
                        this._installFunc[key] = void 0;
                    }
                }
            };
            GlobalHandlers.id = "GlobalHandlers";
            return GlobalHandlers;
        }();
        function _installGlobalOnErrorHandler() {
            (0, instrument.addInstrumentationHandler)("error", (function(data) {
                var _a = (0, tslib_es6.__read)(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
                if (!hub.getIntegration(GlobalHandlers)) return;
                var msg = data.msg, url = data.url, line = data.line, column = data.column, error = data.error;
                if (shouldIgnoreOnError() || error && error.__sentry_own_request__) return;
                var event = void 0 === error && (0, is.isString)(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(eventFromUnknownInput(error || msg, void 0, attachStacktrace, false), url, line, column);
                event.level = Severity.Error;
                addMechanismAndCapture(hub, error, event, "onerror");
            }));
        }
        function _installGlobalOnUnhandledRejectionHandler() {
            (0, instrument.addInstrumentationHandler)("unhandledrejection", (function(e) {
                var _a = (0, tslib_es6.__read)(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
                if (!hub.getIntegration(GlobalHandlers)) return;
                var error = e;
                try {
                    if ("reason" in e) error = e.reason; else if ("detail" in e && "reason" in e.detail) error = e.detail.reason;
                } catch (_oO) {}
                if (shouldIgnoreOnError() || error && error.__sentry_own_request__) return true;
                var event = (0, is.isPrimitive)(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(error, void 0, attachStacktrace, true);
                event.level = Severity.Error;
                addMechanismAndCapture(hub, error, event, "onunhandledrejection");
                return;
            }));
        }
        function _eventFromRejectionWithPrimitive(reason) {
            return {
                exception: {
                    values: [ {
                        type: "UnhandledRejection",
                        value: "Non-Error promise rejection captured with value: " + String(reason)
                    } ]
                }
            };
        }
        function _eventFromIncompleteOnError(msg, url, line, column) {
            var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
            var message = (0, is.isErrorEvent)(msg) ? msg.message : msg;
            var name = "Error";
            var groups = message.match(ERROR_TYPES_RE);
            if (groups) {
                name = groups[1];
                message = groups[2];
            }
            var event = {
                exception: {
                    values: [ {
                        type: name,
                        value: message
                    } ]
                }
            };
            return _enhanceEventWithInitialFrame(event, url, line, column);
        }
        function _enhanceEventWithInitialFrame(event, url, line, column) {
            var e = event.exception = event.exception || {};
            var ev = e.values = e.values || [];
            var ev0 = ev[0] = ev[0] || {};
            var ev0s = ev0.stacktrace = ev0.stacktrace || {};
            var ev0sf = ev0s.frames = ev0s.frames || [];
            var colno = isNaN(parseInt(column, 10)) ? void 0 : column;
            var lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
            var filename = (0, is.isString)(url) && url.length > 0 ? url : (0, browser.getLocationHref)();
            if (0 === ev0sf.length) ev0sf.push({
                colno,
                filename,
                function: "?",
                in_app: true,
                lineno
            });
            return event;
        }
        function globalHandlerLog(type) {
            (0, esm_env.isDebugBuild)() && esm_logger.logger.log("Global Handler attached: " + type);
        }
        function addMechanismAndCapture(hub, error, event, type) {
            (0, misc.addExceptionMechanism)(event, {
                handled: false,
                type
            });
            hub.captureEvent(event, {
                originalException: error
            });
        }
        function getHubAndAttachStacktrace() {
            var hub = (0, esm_hub.getCurrentHub)();
            var client = hub.getClient();
            var attachStacktrace = client && client.getOptions().attachStacktrace;
            return [ hub, attachStacktrace ];
        }
        var DEFAULT_KEY = "cause";
        var DEFAULT_LIMIT = 5;
        var LinkedErrors = function() {
            function LinkedErrors(options) {
                if (void 0 === options) options = {};
                this.name = LinkedErrors.id;
                this._key = options.key || DEFAULT_KEY;
                this._limit = options.limit || DEFAULT_LIMIT;
            }
            LinkedErrors.prototype.setupOnce = function() {
                (0, esm_scope.addGlobalEventProcessor)((function(event, hint) {
                    var self = (0, esm_hub.getCurrentHub)().getIntegration(LinkedErrors);
                    return self ? _handler(self._key, self._limit, event, hint) : event;
                }));
            };
            LinkedErrors.id = "LinkedErrors";
            return LinkedErrors;
        }();
        function _handler(key, limit, event, hint) {
            if (!event.exception || !event.exception.values || !hint || !(0, is.isInstanceOf)(hint.originalException, Error)) return event;
            var linkedErrors = _walkErrorTree(limit, hint.originalException, key);
            event.exception.values = (0, tslib_es6.__spread)(linkedErrors, event.exception.values);
            return event;
        }
        function _walkErrorTree(limit, error, key, stack) {
            if (void 0 === stack) stack = [];
            if (!(0, is.isInstanceOf)(error[key], Error) || stack.length + 1 >= limit) return stack;
            var exception = exceptionFromError(error[key]);
            return _walkErrorTree(limit, error[key], key, (0, tslib_es6.__spread)([ exception ], stack));
        }
        var Dedupe = function() {
            function Dedupe() {
                this.name = Dedupe.id;
            }
            Dedupe.prototype.setupOnce = function(addGlobalEventProcessor, getCurrentHub) {
                addGlobalEventProcessor((function(currentEvent) {
                    var self = getCurrentHub().getIntegration(Dedupe);
                    if (self) {
                        try {
                            if (dedupe_shouldDropEvent(currentEvent, self._previousEvent)) {
                                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Event dropped due to being a duplicate of previously captured event.");
                                return null;
                            }
                        } catch (_oO) {
                            return self._previousEvent = currentEvent;
                        }
                        return self._previousEvent = currentEvent;
                    }
                    return currentEvent;
                }));
            };
            Dedupe.id = "Dedupe";
            return Dedupe;
        }();
        function dedupe_shouldDropEvent(currentEvent, previousEvent) {
            if (!previousEvent) return false;
            if (_isSameMessageEvent(currentEvent, previousEvent)) return true;
            if (_isSameExceptionEvent(currentEvent, previousEvent)) return true;
            return false;
        }
        function _isSameMessageEvent(currentEvent, previousEvent) {
            var currentMessage = currentEvent.message;
            var previousMessage = previousEvent.message;
            if (!currentMessage && !previousMessage) return false;
            if (currentMessage && !previousMessage || !currentMessage && previousMessage) return false;
            if (currentMessage !== previousMessage) return false;
            if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
            if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
            return true;
        }
        function _isSameExceptionEvent(currentEvent, previousEvent) {
            var previousException = _getExceptionFromEvent(previousEvent);
            var currentException = _getExceptionFromEvent(currentEvent);
            if (!previousException || !currentException) return false;
            if (previousException.type !== currentException.type || previousException.value !== currentException.value) return false;
            if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
            if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
            return true;
        }
        function _isSameStacktrace(currentEvent, previousEvent) {
            var currentFrames = _getFramesFromEvent(currentEvent);
            var previousFrames = _getFramesFromEvent(previousEvent);
            if (!currentFrames && !previousFrames) return true;
            if (currentFrames && !previousFrames || !currentFrames && previousFrames) return false;
            currentFrames = currentFrames;
            previousFrames = previousFrames;
            if (previousFrames.length !== currentFrames.length) return false;
            for (var i = 0; i < previousFrames.length; i++) {
                var frameA = previousFrames[i];
                var frameB = currentFrames[i];
                if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) return false;
            }
            return true;
        }
        function _isSameFingerprint(currentEvent, previousEvent) {
            var currentFingerprint = currentEvent.fingerprint;
            var previousFingerprint = previousEvent.fingerprint;
            if (!currentFingerprint && !previousFingerprint) return true;
            if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) return false;
            currentFingerprint = currentFingerprint;
            previousFingerprint = previousFingerprint;
            try {
                return !!(currentFingerprint.join("") === previousFingerprint.join(""));
            } catch (_oO) {
                return false;
            }
        }
        function _getExceptionFromEvent(event) {
            return event.exception && event.exception.values && event.exception.values[0];
        }
        function _getFramesFromEvent(event) {
            var exception = event.exception;
            if (exception) try {
                return exception.values[0].stacktrace.frames;
            } catch (_oO) {
                return;
            } else if (event.stacktrace) return event.stacktrace.frames;
            return;
        }
        var useragent_global = (0, esm_global.getGlobalObject)();
        var UserAgent = function() {
            function UserAgent() {
                this.name = UserAgent.id;
            }
            UserAgent.prototype.setupOnce = function() {
                (0, esm_scope.addGlobalEventProcessor)((function(event) {
                    if ((0, esm_hub.getCurrentHub)().getIntegration(UserAgent)) {
                        if (!useragent_global.navigator && !useragent_global.location && !useragent_global.document) return event;
                        var url = event.request && event.request.url || useragent_global.location && useragent_global.location.href;
                        var referrer = (useragent_global.document || {}).referrer;
                        var userAgent = (useragent_global.navigator || {}).userAgent;
                        var headers = (0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event.request && event.request.headers), referrer && {
                            Referer: referrer
                        }), userAgent && {
                            "User-Agent": userAgent
                        });
                        var request = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, url && {
                            url
                        }), {
                            headers
                        });
                        return (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, event), {
                            request
                        });
                    }
                    return event;
                }));
            };
            UserAgent.id = "UserAgent";
            return UserAgent;
        }();
        var defaultIntegrations = [ new InboundFilters, new FunctionToString, new TryCatch, new Breadcrumbs, new GlobalHandlers, new LinkedErrors, new Dedupe, new UserAgent ];
        function init(options) {
            if (void 0 === options) options = {};
            if (void 0 === options.defaultIntegrations) options.defaultIntegrations = defaultIntegrations;
            if (void 0 === options.release) {
                var window_1 = (0, esm_global.getGlobalObject)();
                if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) options.release = window_1.SENTRY_RELEASE.id;
            }
            if (void 0 === options.autoSessionTracking) options.autoSessionTracking = true;
            if (void 0 === options.sendClientReports) options.sendClientReports = true;
            initAndBind(BrowserClient, options);
            if (options.autoSessionTracking) startSessionTracking();
        }
        function startSessionOnHub(hub) {
            hub.startSession({
                ignoreDuration: true
            });
            hub.captureSession();
        }
        function startSessionTracking() {
            var window = (0, esm_global.getGlobalObject)();
            var document = window.document;
            if ("undefined" === typeof document) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                return;
            }
            var hub = (0, esm_hub.getCurrentHub)();
            if (!hub.captureSession) return;
            startSessionOnHub(hub);
            (0, instrument.addInstrumentationHandler)("history", (function(_a) {
                var from = _a.from, to = _a.to;
                if (!(void 0 === from || from === to)) startSessionOnHub((0, esm_hub.getCurrentHub)());
            }));
        }
        var hubextensions = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/hubextensions.js");
        var idletransaction = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/idletransaction.js");
        var utils = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/utils.js");
        var TRACEPARENT_REGEXP = new RegExp("^[ \\t]*" + "([0-9a-f]{32})?" + "-?([0-9a-f]{16})?" + "-?([01])?" + "[ \\t]*$");
        function extractTraceparentData(traceparent) {
            var matches = traceparent.match(TRACEPARENT_REGEXP);
            if (matches) {
                var parentSampled = void 0;
                if ("1" === matches[3]) parentSampled = true; else if ("0" === matches[3]) parentSampled = false;
                return {
                    traceId: matches[1],
                    parentSampled,
                    parentSpanId: matches[2]
                };
            }
            return;
        }
        var constants = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/constants.js");
        var backgroundtab_global = (0, esm_global.getGlobalObject)();
        function registerBackgroundTabDetection() {
            if (backgroundtab_global && backgroundtab_global.document) backgroundtab_global.document.addEventListener("visibilitychange", (function() {
                var activeTransaction = (0, utils.getActiveTransaction)();
                if (backgroundtab_global.document.hidden && activeTransaction) {
                    var statusType = "cancelled";
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Tracing] Transaction: " + statusType + " -> since tab moved to the background, op: " + activeTransaction.op);
                    if (!activeTransaction.status) activeTransaction.setStatus(statusType);
                    activeTransaction.setTag("visibilitychange", "document.hidden");
                    activeTransaction.setTag(constants.FINISH_REASON_TAG, constants.IDLE_TRANSACTION_FINISH_REASONS[2]);
                    activeTransaction.finish();
                }
            })); else (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
        }
        var node = __webpack_require__("../shared/node_modules/@sentry/utils/esm/node.js");
        var bindReporter = function(callback, metric, reportAllChanges) {
            var prevValue;
            return function(forceReport) {
                if (metric.value >= 0) if (forceReport || reportAllChanges) {
                    metric.delta = metric.value - (prevValue || 0);
                    if (metric.delta || void 0 === prevValue) {
                        prevValue = metric.value;
                        callback(metric);
                    }
                }
            };
        };
        var generateUniqueID = function() {
            return "v2-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
        };
        var initMetric = function(name, value) {
            return {
                name,
                value: null !== value && void 0 !== value ? value : -1,
                delta: 0,
                entries: [],
                id: generateUniqueID()
            };
        };
        var observe = function(type, callback) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(type)) {
                    if ("first-input" === type && !("PerformanceEventTiming" in self)) return;
                    var po = new PerformanceObserver((function(l) {
                        return l.getEntries().map(callback);
                    }));
                    po.observe({
                        type,
                        buffered: true
                    });
                    return po;
                }
            } catch (e) {}
            return;
        };
        var onHidden = function(cb, once) {
            var onHiddenOrPageHide = function(event) {
                if ("pagehide" === event.type || "hidden" === (0, esm_global.getGlobalObject)().document.visibilityState) {
                    cb(event);
                    if (once) {
                        removeEventListener("visibilitychange", onHiddenOrPageHide, true);
                        removeEventListener("pagehide", onHiddenOrPageHide, true);
                    }
                }
            };
            addEventListener("visibilitychange", onHiddenOrPageHide, true);
            addEventListener("pagehide", onHiddenOrPageHide, true);
        };
        var getCLS = function(onReport, reportAllChanges) {
            var metric = initMetric("CLS", 0);
            var report;
            var sessionValue = 0;
            var sessionEntries = [];
            var entryHandler = function(entry) {
                if (entry && !entry.hadRecentInput) {
                    var firstSessionEntry = sessionEntries[0];
                    var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                    if (sessionValue && 0 !== sessionEntries.length && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
                        sessionValue += entry.value;
                        sessionEntries.push(entry);
                    } else {
                        sessionValue = entry.value;
                        sessionEntries = [ entry ];
                    }
                    if (sessionValue > metric.value) {
                        metric.value = sessionValue;
                        metric.entries = sessionEntries;
                        if (report) report();
                    }
                }
            };
            var po = observe("layout-shift", entryHandler);
            if (po) {
                report = bindReporter(onReport, metric, reportAllChanges);
                onHidden((function() {
                    po.takeRecords().map(entryHandler);
                    report(true);
                }));
            }
        };
        var firstHiddenTime = -1;
        var initHiddenTime = function() {
            return "hidden" === (0, esm_global.getGlobalObject)().document.visibilityState ? 0 : 1 / 0;
        };
        var trackChanges = function() {
            onHidden((function(_a) {
                var timeStamp = _a.timeStamp;
                firstHiddenTime = timeStamp;
            }), true);
        };
        var getVisibilityWatcher = function() {
            if (firstHiddenTime < 0) {
                firstHiddenTime = initHiddenTime();
                trackChanges();
            }
            return {
                get firstHiddenTime() {
                    return firstHiddenTime;
                }
            };
        };
        var getFID = function(onReport, reportAllChanges) {
            var visibilityWatcher = getVisibilityWatcher();
            var metric = initMetric("FID");
            var report;
            var entryHandler = function(entry) {
                if (report && entry.startTime < visibilityWatcher.firstHiddenTime) {
                    metric.value = entry.processingStart - entry.startTime;
                    metric.entries.push(entry);
                    report(true);
                }
            };
            var po = observe("first-input", entryHandler);
            if (po) {
                report = bindReporter(onReport, metric, reportAllChanges);
                onHidden((function() {
                    po.takeRecords().map(entryHandler);
                    po.disconnect();
                }), true);
            }
        };
        var reportedMetricIDs = {};
        var getLCP = function(onReport, reportAllChanges) {
            var visibilityWatcher = getVisibilityWatcher();
            var metric = initMetric("LCP");
            var report;
            var entryHandler = function(entry) {
                var value = entry.startTime;
                if (value < visibilityWatcher.firstHiddenTime) {
                    metric.value = value;
                    metric.entries.push(entry);
                }
                if (report) report();
            };
            var po = observe("largest-contentful-paint", entryHandler);
            if (po) {
                report = bindReporter(onReport, metric, reportAllChanges);
                var stopListening_1 = function() {
                    if (!reportedMetricIDs[metric.id]) {
                        po.takeRecords().map(entryHandler);
                        po.disconnect();
                        reportedMetricIDs[metric.id] = true;
                        report(true);
                    }
                };
                [ "keydown", "click" ].forEach((function(type) {
                    addEventListener(type, stopListening_1, {
                        once: true,
                        capture: true
                    });
                }));
                onHidden(stopListening_1, true);
            }
        };
        var metrics_global = (0, esm_global.getGlobalObject)();
        var MetricsInstrumentation = function() {
            function MetricsInstrumentation(_reportAllChanges) {
                if (void 0 === _reportAllChanges) _reportAllChanges = false;
                this._reportAllChanges = _reportAllChanges;
                this._measurements = {};
                this._performanceCursor = 0;
                if (!(0, node.isNodeEnv)() && metrics_global && metrics_global.performance && metrics_global.document) {
                    if (metrics_global.performance.mark) metrics_global.performance.mark("sentry-tracing-init");
                    this._trackCLS();
                    this._trackLCP();
                    this._trackFID();
                }
            }
            MetricsInstrumentation.prototype.addPerformanceEntries = function(transaction) {
                var _this = this;
                if (!metrics_global || !metrics_global.performance || !metrics_global.performance.getEntries || !time.browserPerformanceTimeOrigin) return;
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Tracing] Adding & adjusting spans using Performance API");
                var timeOrigin = (0, utils.msToSec)(time.browserPerformanceTimeOrigin);
                var responseStartTimestamp;
                var requestStartTimestamp;
                metrics_global.performance.getEntries().slice(this._performanceCursor).forEach((function(entry) {
                    var startTime = (0, utils.msToSec)(entry.startTime);
                    var duration = (0, utils.msToSec)(entry.duration);
                    if ("navigation" === transaction.op && timeOrigin + startTime < transaction.startTimestamp) return;
                    switch (entry.entryType) {
                      case "navigation":
                        addNavigationSpans(transaction, entry, timeOrigin);
                        responseStartTimestamp = timeOrigin + (0, utils.msToSec)(entry.responseStart);
                        requestStartTimestamp = timeOrigin + (0, utils.msToSec)(entry.requestStart);
                        break;

                      case "mark":
                      case "paint":
                      case "measure":
                        var startTimestamp = addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
                        var firstHidden = getVisibilityWatcher();
                        var shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
                        if ("first-paint" === entry.name && shouldRecord) {
                            (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding FP");
                            _this._measurements["fp"] = {
                                value: entry.startTime
                            };
                            _this._measurements["mark.fp"] = {
                                value: startTimestamp
                            };
                        }
                        if ("first-contentful-paint" === entry.name && shouldRecord) {
                            (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding FCP");
                            _this._measurements["fcp"] = {
                                value: entry.startTime
                            };
                            _this._measurements["mark.fcp"] = {
                                value: startTimestamp
                            };
                        }
                        break;

                      case "resource":
                        var resourceName = entry.name.replace(metrics_global.location.origin, "");
                        addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
                    }
                }));
                this._performanceCursor = Math.max(performance.getEntries().length - 1, 0);
                this._trackNavigator(transaction);
                if ("pageload" === transaction.op) {
                    var timeOrigin_1 = (0, utils.msToSec)(time.browserPerformanceTimeOrigin);
                    if ("number" === typeof responseStartTimestamp) {
                        (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding TTFB");
                        this._measurements["ttfb"] = {
                            value: 1e3 * (responseStartTimestamp - transaction.startTimestamp)
                        };
                        if ("number" === typeof requestStartTimestamp && requestStartTimestamp <= responseStartTimestamp) this._measurements["ttfb.requestTime"] = {
                            value: 1e3 * (responseStartTimestamp - requestStartTimestamp)
                        };
                    }
                    [ "fcp", "fp", "lcp" ].forEach((function(name) {
                        if (!_this._measurements[name] || timeOrigin_1 >= transaction.startTimestamp) return;
                        var oldValue = _this._measurements[name].value;
                        var measurementTimestamp = timeOrigin_1 + (0, utils.msToSec)(oldValue);
                        var normalizedValue = Math.abs(1e3 * (measurementTimestamp - transaction.startTimestamp));
                        var delta = normalizedValue - oldValue;
                        (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Normalized " + name + " from " + oldValue + " to " + normalizedValue + " (" + delta + ")");
                        _this._measurements[name].value = normalizedValue;
                    }));
                    if (this._measurements["mark.fid"] && this._measurements["fid"]) _startChild(transaction, {
                        description: "first input delay",
                        endTimestamp: this._measurements["mark.fid"].value + (0, utils.msToSec)(this._measurements["fid"].value),
                        op: "web.vitals",
                        startTimestamp: this._measurements["mark.fid"].value
                    });
                    if (!("fcp" in this._measurements)) delete this._measurements.cls;
                    transaction.setMeasurements(this._measurements);
                    tagMetricInfo(transaction, this._lcpEntry, this._clsEntry);
                    transaction.setTag("sentry_reportAllChanges", this._reportAllChanges);
                }
            };
            MetricsInstrumentation.prototype._trackNavigator = function(transaction) {
                var navigator = metrics_global.navigator;
                if (!navigator) return;
                var connection = navigator.connection;
                if (connection) {
                    if (connection.effectiveType) transaction.setTag("effectiveConnectionType", connection.effectiveType);
                    if (connection.type) transaction.setTag("connectionType", connection.type);
                    if (isMeasurementValue(connection.rtt)) this._measurements["connection.rtt"] = {
                        value: connection.rtt
                    };
                    if (isMeasurementValue(connection.downlink)) this._measurements["connection.downlink"] = {
                        value: connection.downlink
                    };
                }
                if (isMeasurementValue(navigator.deviceMemory)) transaction.setTag("deviceMemory", String(navigator.deviceMemory));
                if (isMeasurementValue(navigator.hardwareConcurrency)) transaction.setTag("hardwareConcurrency", String(navigator.hardwareConcurrency));
            };
            MetricsInstrumentation.prototype._trackCLS = function() {
                var _this = this;
                getCLS((function(metric) {
                    var entry = metric.entries.pop();
                    if (!entry) return;
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding CLS");
                    _this._measurements["cls"] = {
                        value: metric.value
                    };
                    _this._clsEntry = entry;
                }));
            };
            MetricsInstrumentation.prototype._trackLCP = function() {
                var _this = this;
                getLCP((function(metric) {
                    var entry = metric.entries.pop();
                    if (!entry) return;
                    var timeOrigin = (0, utils.msToSec)(time.browserPerformanceTimeOrigin);
                    var startTime = (0, utils.msToSec)(entry.startTime);
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding LCP");
                    _this._measurements["lcp"] = {
                        value: metric.value
                    };
                    _this._measurements["mark.lcp"] = {
                        value: timeOrigin + startTime
                    };
                    _this._lcpEntry = entry;
                }), this._reportAllChanges);
            };
            MetricsInstrumentation.prototype._trackFID = function() {
                var _this = this;
                getFID((function(metric) {
                    var entry = metric.entries.pop();
                    if (!entry) return;
                    var timeOrigin = (0, utils.msToSec)(time.browserPerformanceTimeOrigin);
                    var startTime = (0, utils.msToSec)(entry.startTime);
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding FID");
                    _this._measurements["fid"] = {
                        value: metric.value
                    };
                    _this._measurements["mark.fid"] = {
                        value: timeOrigin + startTime
                    };
                }));
            };
            return MetricsInstrumentation;
        }();
        function addNavigationSpans(transaction, entry, timeOrigin) {
            [ "unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect" ].forEach((function(event) {
                addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
            }));
            addPerformanceNavigationTiming(transaction, entry, "secureConnection", timeOrigin, "TLS/SSL", "connectEnd");
            addPerformanceNavigationTiming(transaction, entry, "fetch", timeOrigin, "cache", "domainLookupStart");
            addPerformanceNavigationTiming(transaction, entry, "domainLookup", timeOrigin, "DNS");
            addRequest(transaction, entry, timeOrigin);
        }
        function addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
            var measureStartTimestamp = timeOrigin + startTime;
            var measureEndTimestamp = measureStartTimestamp + duration;
            _startChild(transaction, {
                description: entry.name,
                endTimestamp: measureEndTimestamp,
                op: entry.entryType,
                startTimestamp: measureStartTimestamp
            });
            return measureStartTimestamp;
        }
        function addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
            if ("xmlhttprequest" === entry.initiatorType || "fetch" === entry.initiatorType) return;
            var data = {};
            if ("transferSize" in entry) data["Transfer Size"] = entry.transferSize;
            if ("encodedBodySize" in entry) data["Encoded Body Size"] = entry.encodedBodySize;
            if ("decodedBodySize" in entry) data["Decoded Body Size"] = entry.decodedBodySize;
            var startTimestamp = timeOrigin + startTime;
            var endTimestamp = startTimestamp + duration;
            _startChild(transaction, {
                description: resourceName,
                endTimestamp,
                op: entry.initiatorType ? "resource." + entry.initiatorType : "resource",
                startTimestamp,
                data
            });
        }
        function addPerformanceNavigationTiming(transaction, entry, event, timeOrigin, description, eventEnd) {
            var end = eventEnd ? entry[eventEnd] : entry[event + "End"];
            var start = entry[event + "Start"];
            if (!start || !end) return;
            _startChild(transaction, {
                op: "browser",
                description: null !== description && void 0 !== description ? description : event,
                startTimestamp: timeOrigin + (0, utils.msToSec)(start),
                endTimestamp: timeOrigin + (0, utils.msToSec)(end)
            });
        }
        function addRequest(transaction, entry, timeOrigin) {
            _startChild(transaction, {
                op: "browser",
                description: "request",
                startTimestamp: timeOrigin + (0, utils.msToSec)(entry.requestStart),
                endTimestamp: timeOrigin + (0, utils.msToSec)(entry.responseEnd)
            });
            _startChild(transaction, {
                op: "browser",
                description: "response",
                startTimestamp: timeOrigin + (0, utils.msToSec)(entry.responseStart),
                endTimestamp: timeOrigin + (0, utils.msToSec)(entry.responseEnd)
            });
        }
        function _startChild(transaction, _a) {
            var startTimestamp = _a.startTimestamp, ctx = (0, tslib_es6.__rest)(_a, [ "startTimestamp" ]);
            if (startTimestamp && transaction.startTimestamp > startTimestamp) transaction.startTimestamp = startTimestamp;
            return transaction.startChild((0, tslib_es6.__assign)({
                startTimestamp
            }, ctx));
        }
        function isMeasurementValue(value) {
            return "number" === typeof value && isFinite(value);
        }
        function tagMetricInfo(transaction, lcpEntry, clsEntry) {
            if (lcpEntry) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding LCP Data");
                if (lcpEntry.element) transaction.setTag("lcp.element", (0, browser.htmlTreeAsString)(lcpEntry.element));
                if (lcpEntry.id) transaction.setTag("lcp.id", lcpEntry.id);
                if (lcpEntry.url) transaction.setTag("lcp.url", lcpEntry.url.trim().slice(0, 200));
                transaction.setTag("lcp.size", lcpEntry.size);
            }
            if (clsEntry && clsEntry.sources) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Measurements] Adding CLS Data");
                clsEntry.sources.forEach((function(source, index) {
                    return transaction.setTag("cls.source." + (index + 1), (0, browser.htmlTreeAsString)(source.node));
                }));
            }
        }
        var DEFAULT_TRACING_ORIGINS = [ "localhost", /^\// ];
        var defaultRequestInstrumentationOptions = {
            traceFetch: true,
            traceXHR: true,
            tracingOrigins: DEFAULT_TRACING_ORIGINS
        };
        function instrumentOutgoingRequests(_options) {
            var _a = (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, defaultRequestInstrumentationOptions), _options), traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
            var urlMap = {};
            var defaultShouldCreateSpan = function(url) {
                if (urlMap[url]) return urlMap[url];
                var origins = tracingOrigins;
                urlMap[url] = origins.some((function(origin) {
                    return (0, string.isMatchingPattern)(url, origin);
                })) && !(0, string.isMatchingPattern)(url, "sentry_key");
                return urlMap[url];
            };
            var shouldCreateSpan = defaultShouldCreateSpan;
            if ("function" === typeof shouldCreateSpanForRequest) shouldCreateSpan = function(url) {
                return defaultShouldCreateSpan(url) && shouldCreateSpanForRequest(url);
            };
            var spans = {};
            if (traceFetch) (0, instrument.addInstrumentationHandler)("fetch", (function(handlerData) {
                fetchCallback(handlerData, shouldCreateSpan, spans);
            }));
            if (traceXHR) (0, instrument.addInstrumentationHandler)("xhr", (function(handlerData) {
                xhrCallback(handlerData, shouldCreateSpan, spans);
            }));
        }
        function fetchCallback(handlerData, shouldCreateSpan, spans) {
            if (!(0, utils.hasTracingEnabled)() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) return;
            if (handlerData.endTimestamp) {
                var spanId = handlerData.fetchData.__span;
                if (!spanId) return;
                var span = spans[spanId];
                if (span) {
                    if (handlerData.response) span.setHttpStatus(handlerData.response.status); else if (handlerData.error) span.setStatus("internal_error");
                    span.finish();
                    delete spans[spanId];
                }
                return;
            }
            var activeTransaction = (0, utils.getActiveTransaction)();
            if (activeTransaction) {
                span = activeTransaction.startChild({
                    data: (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, handlerData.fetchData), {
                        type: "fetch"
                    }),
                    description: handlerData.fetchData.method + " " + handlerData.fetchData.url,
                    op: "http.client"
                });
                handlerData.fetchData.__span = span.spanId;
                spans[span.spanId] = span;
                var request = handlerData.args[0] = handlerData.args[0];
                var options = handlerData.args[1] = handlerData.args[1] || {};
                var headers = options.headers;
                if ((0, is.isInstanceOf)(request, Request)) headers = request.headers;
                if (headers) if ("function" === typeof headers.append) headers.append("sentry-trace", span.toTraceparent()); else if (Array.isArray(headers)) headers = (0, 
                tslib_es6.__spread)(headers, [ [ "sentry-trace", span.toTraceparent() ] ]); else headers = (0, 
                tslib_es6.__assign)((0, tslib_es6.__assign)({}, headers), {
                    "sentry-trace": span.toTraceparent()
                }); else headers = {
                    "sentry-trace": span.toTraceparent()
                };
                options.headers = headers;
            }
        }
        function xhrCallback(handlerData, shouldCreateSpan, spans) {
            if (!(0, utils.hasTracingEnabled)() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) return;
            var xhr = handlerData.xhr.__sentry_xhr__;
            if (handlerData.endTimestamp) {
                var spanId = handlerData.xhr.__sentry_xhr_span_id__;
                if (!spanId) return;
                var span = spans[spanId];
                if (span) {
                    span.setHttpStatus(xhr.status_code);
                    span.finish();
                    delete spans[spanId];
                }
                return;
            }
            var activeTransaction = (0, utils.getActiveTransaction)();
            if (activeTransaction) {
                span = activeTransaction.startChild({
                    data: (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, xhr.data), {
                        type: "xhr",
                        method: xhr.method,
                        url: xhr.url
                    }),
                    description: xhr.method + " " + xhr.url,
                    op: "http.client"
                });
                handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
                spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
                if (handlerData.xhr.setRequestHeader) try {
                    handlerData.xhr.setRequestHeader("sentry-trace", span.toTraceparent());
                } catch (_) {}
            }
        }
        var router_global = (0, esm_global.getGlobalObject)();
        function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
            if (void 0 === startTransactionOnPageLoad) startTransactionOnPageLoad = true;
            if (void 0 === startTransactionOnLocationChange) startTransactionOnLocationChange = true;
            if (!router_global || !router_global.location) {
                (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("Could not initialize routing instrumentation due to invalid location");
                return;
            }
            var startingUrl = router_global.location.href;
            var activeTransaction;
            if (startTransactionOnPageLoad) activeTransaction = customStartTransaction({
                name: router_global.location.pathname,
                op: "pageload"
            });
            if (startTransactionOnLocationChange) (0, instrument.addInstrumentationHandler)("history", (function(_a) {
                var to = _a.to, from = _a.from;
                if (void 0 === from && startingUrl && -1 !== startingUrl.indexOf(to)) {
                    startingUrl = void 0;
                    return;
                }
                if (from !== to) {
                    startingUrl = void 0;
                    if (activeTransaction) {
                        (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Tracing] Finishing current transaction with op: " + activeTransaction.op);
                        activeTransaction.finish();
                    }
                    activeTransaction = customStartTransaction({
                        name: router_global.location.pathname,
                        op: "navigation"
                    });
                }
            }));
        }
        var DEFAULT_MAX_TRANSACTION_DURATION_SECONDS = 600;
        var DEFAULT_BROWSER_TRACING_OPTIONS = (0, tslib_es6.__assign)({
            idleTimeout: idletransaction.DEFAULT_IDLE_TIMEOUT,
            markBackgroundTransactions: true,
            maxTransactionDuration: DEFAULT_MAX_TRANSACTION_DURATION_SECONDS,
            routingInstrumentation: instrumentRoutingWithDefaults,
            startTransactionOnLocationChange: true,
            startTransactionOnPageLoad: true
        }, defaultRequestInstrumentationOptions);
        var BrowserTracing = function() {
            function BrowserTracing(_options) {
                this.name = BrowserTracing.id;
                this._configuredIdleTimeout = void 0;
                var tracingOrigins = defaultRequestInstrumentationOptions.tracingOrigins;
                if (_options) {
                    this._configuredIdleTimeout = _options.idleTimeout;
                    if (_options.tracingOrigins && Array.isArray(_options.tracingOrigins) && 0 !== _options.tracingOrigins.length) tracingOrigins = _options.tracingOrigins; else (0, 
                    esm_env.isDebugBuild)() && (this._emitOptionsWarning = true);
                }
                this.options = (0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, DEFAULT_BROWSER_TRACING_OPTIONS), _options), {
                    tracingOrigins
                });
                var _metricOptions = this.options._metricOptions;
                this._metrics = new MetricsInstrumentation(_metricOptions && _metricOptions._reportAllChanges);
            }
            BrowserTracing.prototype.setupOnce = function(_, getCurrentHub) {
                var _this = this;
                this._getCurrentHub = getCurrentHub;
                if (this._emitOptionsWarning) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.");
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("[Tracing] We added a reasonable default for you: " + defaultRequestInstrumentationOptions.tracingOrigins);
                }
                var _a = this.options, instrumentRouting = _a.routingInstrumentation, startTransactionOnLocationChange = _a.startTransactionOnLocationChange, startTransactionOnPageLoad = _a.startTransactionOnPageLoad, markBackgroundTransactions = _a.markBackgroundTransactions, traceFetch = _a.traceFetch, traceXHR = _a.traceXHR, tracingOrigins = _a.tracingOrigins, shouldCreateSpanForRequest = _a.shouldCreateSpanForRequest;
                instrumentRouting((function(context) {
                    return _this._createRouteTransaction(context);
                }), startTransactionOnPageLoad, startTransactionOnLocationChange);
                if (markBackgroundTransactions) registerBackgroundTabDetection();
                instrumentOutgoingRequests({
                    traceFetch,
                    traceXHR,
                    tracingOrigins,
                    shouldCreateSpanForRequest
                });
            };
            BrowserTracing.prototype._createRouteTransaction = function(context) {
                var _this = this;
                if (!this._getCurrentHub) {
                    (0, esm_env.isDebugBuild)() && esm_logger.logger.warn("[Tracing] Did not create " + context.op + " transaction because _getCurrentHub is invalid.");
                    return;
                }
                var _a = this.options, beforeNavigate = _a.beforeNavigate, idleTimeout = _a.idleTimeout, maxTransactionDuration = _a.maxTransactionDuration;
                var parentContextFromHeader = "pageload" === context.op ? getHeaderContext() : void 0;
                var expandedContext = (0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, context), parentContextFromHeader), {
                    trimEnd: true
                });
                var modifiedContext = "function" === typeof beforeNavigate ? beforeNavigate(expandedContext) : expandedContext;
                var finalContext = void 0 === modifiedContext ? (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, expandedContext), {
                    sampled: false
                }) : modifiedContext;
                if (false === finalContext.sampled) (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Tracing] Will not send " + finalContext.op + " transaction because of beforeNavigate.");
                (0, esm_env.isDebugBuild)() && esm_logger.logger.log("[Tracing] Starting " + finalContext.op + " transaction on scope");
                var hub = this._getCurrentHub();
                var location = (0, esm_global.getGlobalObject)().location;
                var idleTransaction = (0, hubextensions.startIdleTransaction)(hub, finalContext, idleTimeout, true, {
                    location
                });
                idleTransaction.registerBeforeFinishCallback((function(transaction, endTimestamp) {
                    _this._metrics.addPerformanceEntries(transaction);
                    adjustTransactionDuration((0, utils.secToMs)(maxTransactionDuration), transaction, endTimestamp);
                }));
                idleTransaction.setTag("idleTimeout", this._configuredIdleTimeout);
                return idleTransaction;
            };
            BrowserTracing.id = "BrowserTracing";
            return BrowserTracing;
        }();
        function getHeaderContext() {
            var header = getMetaContent("sentry-trace");
            if (header) return extractTraceparentData(header);
            return;
        }
        function getMetaContent(metaName) {
            var el = (0, esm_global.getGlobalObject)().document.querySelector("meta[name=" + metaName + "]");
            return el ? el.getAttribute("content") : null;
        }
        function adjustTransactionDuration(maxDuration, transaction, endTimestamp) {
            var diff = endTimestamp - transaction.startTimestamp;
            var isOutdatedTransaction = endTimestamp && (diff > maxDuration || diff < 0);
            if (isOutdatedTransaction) {
                transaction.setStatus("deadline_exceeded");
                transaction.setTag("maxTransactionDurationExceeded", "true");
            }
        }
        (0, hubextensions.addExtensionMethods)();
        var get_env = __webpack_require__("../shared/browser/utils/get-env.js");
        const errorTypesEnum = {
            CUSTOM_CODES: "CUSTOM_CODES"
        };
        const errorPositionEnum = {
            TOP: "top",
            BOTTOM: "bottom"
        };
        function getErrorLine(error) {
            if (!(null !== error && void 0 !== error && error.stack)) return;
            const stack = error.stack.toString().split(/\r\n|\n/);
            const frameRE = /:(\d+):(?:\d+)[^\d]*$/;
            let firstTrace;
            let frame;
            do {
                frame = stack.shift();
                firstTrace = frameRE.exec(frame);
                if (!frame) break;
            } while (!frameRE.exec(frame) || frame.includes("at <anonymous>") || 1 === +(firstTrace && firstTrace[1]));
            const causeTrace = +(firstTrace && firstTrace[1] || "0");
            return causeTrace;
        }
        function setEventErrorInfo(event, position) {
            if (!event.contexts) event.contexts = {};
            event.contexts.error_info = {
                position,
                error_type: errorTypesEnum.CUSTOM_CODES
            };
        }
        try {
            var _window$Shopline, _window$Shopline$even;
            const {APP_ENV, SENTRY_TRACES_SAMPLE_RATE} = (0, get_env["default"])();
            let sampleRate = Number(SENTRY_TRACES_SAMPLE_RATE);
            if (Number.isNaN(sampleRate)) sampleRate = 0;
            const options = {
                debug: false,
                environment: APP_ENV,
                release: `${APP_ENV}@${"undefined_theme_Arise_1.0.0_e11a14d02"}`,
                dsn: (0, get_env["default"])(void 0 || "SENTRY_DSN") || "",
                autoSessionTracking: false,
                ignoreErrors: [ "ReportingObserver [deprecation]" ],
                blacklistUrls: [ /^localhost/, /extensions\//i, /^chrome:\/\//i, /^chrome-extensions:\/\//i, /^safari-extension:\/\//i, /^file:\/\//i ],
                tracesSampleRate: sampleRate,
                integrations: [ new BrowserTracing ],
                beforeSend(event, hint) {
                    var _event$exception, _event$exception$valu, _event$exception$valu2, _traceFrames$, _traceFrames$find, _traceFrames$2;
                    const error = hint.originalException;
                    const traceFrames = (null === event || void 0 === event ? void 0 : null === (_event$exception = event.exception) || void 0 === _event$exception ? void 0 : null === (_event$exception$valu = _event$exception.values[0]) || void 0 === _event$exception$valu ? void 0 : null === (_event$exception$valu2 = _event$exception$valu.stacktrace) || void 0 === _event$exception$valu2 ? void 0 : _event$exception$valu2.frames) || [];
                    const errorLine = getErrorLine(error) || (null === (_traceFrames$ = traceFrames[0]) || void 0 === _traceFrames$ ? void 0 : _traceFrames$.lineno);
                    const errorFile = (null === (_traceFrames$find = traceFrames.find((frame => frame.lineno === errorLine))) || void 0 === _traceFrames$find ? void 0 : _traceFrames$find.filename) || (null === (_traceFrames$2 = traceFrames[0]) || void 0 === _traceFrames$2 ? void 0 : _traceFrames$2.filename);
                    if (errorFile === window.location.href) {
                        if ("undefined" !== typeof window.__CUSTOM_HEADER_START__ && "undefined" !== typeof window.__CUSTOM_HEADER_END__) {
                            const isHeadError = errorLine >= +window.__CUSTOM_HEADER_START__ && errorLine <= +window.__CUSTOM_HEADER_END__;
                            if (isHeadError) setEventErrorInfo(event, errorPositionEnum.TOP);
                        }
                        if ("undefined" !== typeof window.__CUSTOM_FOOTER_START__) {
                            const isFootError = errorLine >= +window.__CUSTOM_FOOTER_START__ && ("undefined" !== typeof window.__CUSTOM_FOOTER_END__ ? errorLine <= +window.__CUSTOM_FOOTER_END__ : true);
                            if (isFootError) setEventErrorInfo(event, errorPositionEnum.BOTTOM);
                        }
                    }
                    return event;
                },
                beforeBreadcrumb(breadcrumb, hint) {
                    var _hint$xhr;
                    if ("xhr" === breadcrumb.category && null !== hint && void 0 !== hint && null !== (_hint$xhr = hint.xhr) && void 0 !== _hint$xhr && _hint$xhr.response) try {
                        const trace_id = hint.xhr.response.match(/trace_id":"(\S*?)"/)[1] || "";
                        return {
                            ...breadcrumb,
                            data: {
                                ...breadcrumb.data,
                                trace_id
                            }
                        };
                    } catch (err) {
                        return breadcrumb;
                    }
                    return breadcrumb;
                }
            };
            if (-1 === sampleRate) delete options.tracesSampleRate;
            init(options);
            null === (_window$Shopline = window.Shopline) || void 0 === _window$Shopline ? void 0 : null === (_window$Shopline$even = _window$Shopline.event) || void 0 === _window$Shopline$even ? void 0 : _window$Shopline$even.on("Sentry::CaptureMessage", ((...data) => {
                captureMessage(...data);
            }));
        } catch (e) {
            console.error(e);
        }
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
                                        null === w || void 0 === w ? void 0 : w(value, key);
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }));
                                this.$afterWatcher[key].forEach((w => {
                                    try {
                                        null === w || void 0 === w ? void 0 : w(value, key);
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
    },
    "../shared/browser/utils/sku/firstAvailableSku.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            default: () => firstAvailableSku
        });
        function firstAvailableSku(spu, skuList) {
            if (null !== spu && void 0 !== spu && spu.soldOut) return (null === skuList || void 0 === skuList ? void 0 : skuList[0]) || null;
            return skuList.find((sku => sku.available)) || (null === skuList || void 0 === skuList ? void 0 : skuList[0]) || null;
        }
    },
    "../shared/node_modules/@sentry/hub/esm/hub.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Hub: () => Hub,
            getCurrentHub: () => getCurrentHub,
            getMainCarrier: () => getMainCarrier
        });
        var tslib_es6 = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var misc = __webpack_require__("../shared/node_modules/@sentry/utils/esm/misc.js");
        var time = __webpack_require__("../shared/node_modules/@sentry/utils/esm/time.js");
        var esm_logger = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        var env = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var esm_global = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var node = __webpack_require__("../shared/node_modules/@sentry/utils/esm/node.js");
        var esm_scope = __webpack_require__("../shared/node_modules/@sentry/hub/esm/scope.js");
        var object = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        var Session = function() {
            function Session(context) {
                this.errors = 0;
                this.sid = (0, misc.uuid4)();
                this.duration = 0;
                this.status = "ok";
                this.init = true;
                this.ignoreDuration = false;
                var startingTime = (0, time.timestampInSeconds)();
                this.timestamp = startingTime;
                this.started = startingTime;
                if (context) this.update(context);
            }
            Session.prototype.update = function(context) {
                if (void 0 === context) context = {};
                if (context.user) {
                    if (!this.ipAddress && context.user.ip_address) this.ipAddress = context.user.ip_address;
                    if (!this.did && !context.did) this.did = context.user.id || context.user.email || context.user.username;
                }
                this.timestamp = context.timestamp || (0, time.timestampInSeconds)();
                if (context.ignoreDuration) this.ignoreDuration = context.ignoreDuration;
                if (context.sid) this.sid = 32 === context.sid.length ? context.sid : (0, misc.uuid4)();
                if (void 0 !== context.init) this.init = context.init;
                if (!this.did && context.did) this.did = "" + context.did;
                if ("number" === typeof context.started) this.started = context.started;
                if (this.ignoreDuration) this.duration = void 0; else if ("number" === typeof context.duration) this.duration = context.duration; else {
                    var duration = this.timestamp - this.started;
                    this.duration = duration >= 0 ? duration : 0;
                }
                if (context.release) this.release = context.release;
                if (context.environment) this.environment = context.environment;
                if (!this.ipAddress && context.ipAddress) this.ipAddress = context.ipAddress;
                if (!this.userAgent && context.userAgent) this.userAgent = context.userAgent;
                if ("number" === typeof context.errors) this.errors = context.errors;
                if (context.status) this.status = context.status;
            };
            Session.prototype.close = function(status) {
                if (status) this.update({
                    status
                }); else if ("ok" === this.status) this.update({
                    status: "exited"
                }); else this.update();
            };
            Session.prototype.toJSON = function() {
                return (0, object.dropUndefinedKeys)({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: {
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    }
                });
            };
            return Session;
        }();
        var API_VERSION = 4;
        var DEFAULT_BREADCRUMBS = 100;
        var Hub = function() {
            function Hub(client, scope, _version) {
                if (void 0 === scope) scope = new esm_scope.Scope;
                if (void 0 === _version) _version = API_VERSION;
                this._version = _version;
                this._stack = [ {} ];
                this.getStackTop().scope = scope;
                if (client) this.bindClient(client);
            }
            Hub.prototype.isOlderThan = function(version) {
                return this._version < version;
            };
            Hub.prototype.bindClient = function(client) {
                var top = this.getStackTop();
                top.client = client;
                if (client && client.setupIntegrations) client.setupIntegrations();
            };
            Hub.prototype.pushScope = function() {
                var scope = esm_scope.Scope.clone(this.getScope());
                this.getStack().push({
                    client: this.getClient(),
                    scope
                });
                return scope;
            };
            Hub.prototype.popScope = function() {
                if (this.getStack().length <= 1) return false;
                return !!this.getStack().pop();
            };
            Hub.prototype.withScope = function(callback) {
                var scope = this.pushScope();
                try {
                    callback(scope);
                } finally {
                    this.popScope();
                }
            };
            Hub.prototype.getClient = function() {
                return this.getStackTop().client;
            };
            Hub.prototype.getScope = function() {
                return this.getStackTop().scope;
            };
            Hub.prototype.getStack = function() {
                return this._stack;
            };
            Hub.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1];
            };
            Hub.prototype.captureException = function(exception, hint) {
                var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, misc.uuid4)();
                var finalHint = hint;
                if (!hint) {
                    var syntheticException = void 0;
                    try {
                        throw new Error("Sentry syntheticException");
                    } catch (exception) {
                        syntheticException = exception;
                    }
                    finalHint = {
                        originalException: exception,
                        syntheticException
                    };
                }
                this._invokeClient("captureException", exception, (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, finalHint), {
                    event_id: eventId
                }));
                return eventId;
            };
            Hub.prototype.captureMessage = function(message, level, hint) {
                var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, misc.uuid4)();
                var finalHint = hint;
                if (!hint) {
                    var syntheticException = void 0;
                    try {
                        throw new Error(message);
                    } catch (exception) {
                        syntheticException = exception;
                    }
                    finalHint = {
                        originalException: message,
                        syntheticException
                    };
                }
                this._invokeClient("captureMessage", message, level, (0, tslib_es6.__assign)((0, 
                tslib_es6.__assign)({}, finalHint), {
                    event_id: eventId
                }));
                return eventId;
            };
            Hub.prototype.captureEvent = function(event, hint) {
                var eventId = hint && hint.event_id ? hint.event_id : (0, misc.uuid4)();
                if ("transaction" !== event.type) this._lastEventId = eventId;
                this._invokeClient("captureEvent", event, (0, tslib_es6.__assign)((0, tslib_es6.__assign)({}, hint), {
                    event_id: eventId
                }));
                return eventId;
            };
            Hub.prototype.lastEventId = function() {
                return this._lastEventId;
            };
            Hub.prototype.addBreadcrumb = function(breadcrumb, hint) {
                var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
                if (!scope || !client) return;
                var _b = client.getOptions && client.getOptions() || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = void 0 === _c ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = void 0 === _d ? DEFAULT_BREADCRUMBS : _d;
                if (maxBreadcrumbs <= 0) return;
                var timestamp = (0, time.dateTimestampInSeconds)();
                var mergedBreadcrumb = (0, tslib_es6.__assign)({
                    timestamp
                }, breadcrumb);
                var finalBreadcrumb = beforeBreadcrumb ? (0, esm_logger.consoleSandbox)((function() {
                    return beforeBreadcrumb(mergedBreadcrumb, hint);
                })) : mergedBreadcrumb;
                if (null === finalBreadcrumb) return;
                scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
            };
            Hub.prototype.setUser = function(user) {
                var scope = this.getScope();
                if (scope) scope.setUser(user);
            };
            Hub.prototype.setTags = function(tags) {
                var scope = this.getScope();
                if (scope) scope.setTags(tags);
            };
            Hub.prototype.setExtras = function(extras) {
                var scope = this.getScope();
                if (scope) scope.setExtras(extras);
            };
            Hub.prototype.setTag = function(key, value) {
                var scope = this.getScope();
                if (scope) scope.setTag(key, value);
            };
            Hub.prototype.setExtra = function(key, extra) {
                var scope = this.getScope();
                if (scope) scope.setExtra(key, extra);
            };
            Hub.prototype.setContext = function(name, context) {
                var scope = this.getScope();
                if (scope) scope.setContext(name, context);
            };
            Hub.prototype.configureScope = function(callback) {
                var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
                if (scope && client) callback(scope);
            };
            Hub.prototype.run = function(callback) {
                var oldHub = makeMain(this);
                try {
                    callback(this);
                } finally {
                    makeMain(oldHub);
                }
            };
            Hub.prototype.getIntegration = function(integration) {
                var client = this.getClient();
                if (!client) return null;
                try {
                    return client.getIntegration(integration);
                } catch (_oO) {
                    (0, env.isDebugBuild)() && esm_logger.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
                    return null;
                }
            };
            Hub.prototype.startSpan = function(context) {
                return this._callExtensionMethod("startSpan", context);
            };
            Hub.prototype.startTransaction = function(context, customSamplingContext) {
                return this._callExtensionMethod("startTransaction", context, customSamplingContext);
            };
            Hub.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders");
            };
            Hub.prototype.captureSession = function(endSession) {
                if (void 0 === endSession) endSession = false;
                if (endSession) return this.endSession();
                this._sendSessionUpdate();
            };
            Hub.prototype.endSession = function() {
                var layer = this.getStackTop();
                var scope = layer && layer.scope;
                var session = scope && scope.getSession();
                if (session) session.close();
                this._sendSessionUpdate();
                if (scope) scope.setSession();
            };
            Hub.prototype.startSession = function(context) {
                var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
                var _b = client && client.getOptions() || {}, release = _b.release, environment = _b.environment;
                var global = (0, esm_global.getGlobalObject)();
                var userAgent = (global.navigator || {}).userAgent;
                var session = new Session((0, tslib_es6.__assign)((0, tslib_es6.__assign)((0, tslib_es6.__assign)({
                    release,
                    environment
                }, scope && {
                    user: scope.getUser()
                }), userAgent && {
                    userAgent
                }), context));
                if (scope) {
                    var currentSession = scope.getSession && scope.getSession();
                    if (currentSession && "ok" === currentSession.status) currentSession.update({
                        status: "exited"
                    });
                    this.endSession();
                    scope.setSession(session);
                }
                return session;
            };
            Hub.prototype._sendSessionUpdate = function() {
                var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
                if (!scope) return;
                var session = scope.getSession && scope.getSession();
                if (session) if (client && client.captureSession) client.captureSession(session);
            };
            Hub.prototype._invokeClient = function(method) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
                if (client && client[method]) (_a = client)[method].apply(_a, (0, tslib_es6.__spread)(args, [ scope ]));
            };
            Hub.prototype._callExtensionMethod = function(method) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                var carrier = getMainCarrier();
                var sentry = carrier.__SENTRY__;
                if (sentry && sentry.extensions && "function" === typeof sentry.extensions[method]) return sentry.extensions[method].apply(this, args);
                (0, env.isDebugBuild)() && esm_logger.logger.warn("Extension method " + method + " couldn't be found, doing nothing.");
            };
            return Hub;
        }();
        function getMainCarrier() {
            var carrier = (0, esm_global.getGlobalObject)();
            carrier.__SENTRY__ = carrier.__SENTRY__ || {
                extensions: {},
                hub: void 0
            };
            return carrier;
        }
        function makeMain(hub) {
            var registry = getMainCarrier();
            var oldHub = getHubFromCarrier(registry);
            setHubOnCarrier(registry, hub);
            return oldHub;
        }
        function getCurrentHub() {
            var registry = getMainCarrier();
            if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) setHubOnCarrier(registry, new Hub);
            if ((0, node.isNodeEnv)()) return getHubFromActiveDomain(registry);
            return getHubFromCarrier(registry);
        }
        function getHubFromActiveDomain(registry) {
            try {
                var sentry = getMainCarrier().__SENTRY__;
                var activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
                if (!activeDomain) return getHubFromCarrier(registry);
                if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
                    var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
                    setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, esm_scope.Scope.clone(registryHubTopStack.scope)));
                }
                return getHubFromCarrier(activeDomain);
            } catch (_Oo) {
                return getHubFromCarrier(registry);
            }
        }
        function hasHubOnCarrier(carrier) {
            return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
        }
        function getHubFromCarrier(carrier) {
            if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) return carrier.__SENTRY__.hub;
            carrier.__SENTRY__ = carrier.__SENTRY__ || {};
            carrier.__SENTRY__.hub = new Hub;
            return carrier.__SENTRY__.hub;
        }
        function setHubOnCarrier(carrier, hub) {
            if (!carrier) return false;
            carrier.__SENTRY__ = carrier.__SENTRY__ || {};
            carrier.__SENTRY__.hub = hub;
            return true;
        }
    },
    "../shared/node_modules/@sentry/hub/esm/scope.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Scope: () => Scope,
            addGlobalEventProcessor: () => addGlobalEventProcessor
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/time.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/syncpromise.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var MAX_BREADCRUMBS = 100;
        var Scope = function() {
            function Scope() {
                this._notifyingListeners = false;
                this._scopeListeners = [];
                this._eventProcessors = [];
                this._breadcrumbs = [];
                this._user = {};
                this._tags = {};
                this._extra = {};
                this._contexts = {};
                this._sdkProcessingMetadata = {};
            }
            Scope.clone = function(scope) {
                var newScope = new Scope;
                if (scope) {
                    newScope._breadcrumbs = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(scope._breadcrumbs);
                    newScope._tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._tags);
                    newScope._extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._extra);
                    newScope._contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, scope._contexts);
                    newScope._user = scope._user;
                    newScope._level = scope._level;
                    newScope._span = scope._span;
                    newScope._session = scope._session;
                    newScope._transactionName = scope._transactionName;
                    newScope._fingerprint = scope._fingerprint;
                    newScope._eventProcessors = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(scope._eventProcessors);
                    newScope._requestSession = scope._requestSession;
                }
                return newScope;
            };
            Scope.prototype.addScopeListener = function(callback) {
                this._scopeListeners.push(callback);
            };
            Scope.prototype.addEventProcessor = function(callback) {
                this._eventProcessors.push(callback);
                return this;
            };
            Scope.prototype.setUser = function(user) {
                this._user = user || {};
                if (this._session) this._session.update({
                    user
                });
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.getUser = function() {
                return this._user;
            };
            Scope.prototype.getRequestSession = function() {
                return this._requestSession;
            };
            Scope.prototype.setRequestSession = function(requestSession) {
                this._requestSession = requestSession;
                return this;
            };
            Scope.prototype.setTags = function(tags) {
                this._tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), tags);
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setTag = function(key, value) {
                var _a;
                this._tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), (_a = {}, 
                _a[key] = value, _a));
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setExtras = function(extras) {
                this._extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), extras);
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setExtra = function(key, extra) {
                var _a;
                this._extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), (_a = {}, 
                _a[key] = extra, _a));
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setFingerprint = function(fingerprint) {
                this._fingerprint = fingerprint;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setLevel = function(level) {
                this._level = level;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setTransactionName = function(name) {
                this._transactionName = name;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setTransaction = function(name) {
                return this.setTransactionName(name);
            };
            Scope.prototype.setContext = function(key, context) {
                var _a;
                if (null === context) delete this._contexts[key]; else this._contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), (_a = {}, _a[key] = context, 
                _a));
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.setSpan = function(span) {
                this._span = span;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.getSpan = function() {
                return this._span;
            };
            Scope.prototype.getTransaction = function() {
                var span = this.getSpan();
                return span && span.transaction;
            };
            Scope.prototype.setSession = function(session) {
                if (!session) delete this._session; else this._session = session;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.getSession = function() {
                return this._session;
            };
            Scope.prototype.update = function(captureContext) {
                if (!captureContext) return this;
                if ("function" === typeof captureContext) {
                    var updatedScope = captureContext(this);
                    return updatedScope instanceof Scope ? updatedScope : this;
                }
                if (captureContext instanceof Scope) {
                    this._tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), captureContext._tags);
                    this._extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), captureContext._extra);
                    this._contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), captureContext._contexts);
                    if (captureContext._user && Object.keys(captureContext._user).length) this._user = captureContext._user;
                    if (captureContext._level) this._level = captureContext._level;
                    if (captureContext._fingerprint) this._fingerprint = captureContext._fingerprint;
                    if (captureContext._requestSession) this._requestSession = captureContext._requestSession;
                } else if ((0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(captureContext)) {
                    captureContext = captureContext;
                    this._tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), captureContext.tags);
                    this._extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), captureContext.extra);
                    this._contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), captureContext.contexts);
                    if (captureContext.user) this._user = captureContext.user;
                    if (captureContext.level) this._level = captureContext.level;
                    if (captureContext.fingerprint) this._fingerprint = captureContext.fingerprint;
                    if (captureContext.requestSession) this._requestSession = captureContext.requestSession;
                }
                return this;
            };
            Scope.prototype.clear = function() {
                this._breadcrumbs = [];
                this._tags = {};
                this._extra = {};
                this._user = {};
                this._contexts = {};
                this._level = void 0;
                this._transactionName = void 0;
                this._fingerprint = void 0;
                this._requestSession = void 0;
                this._span = void 0;
                this._session = void 0;
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.addBreadcrumb = function(breadcrumb, maxBreadcrumbs) {
                var maxCrumbs = "number" === typeof maxBreadcrumbs ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
                if (maxCrumbs <= 0) return this;
                var mergedBreadcrumb = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
                    timestamp: (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.dateTimestampInSeconds)()
                }, breadcrumb);
                this._breadcrumbs = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(this._breadcrumbs, [ mergedBreadcrumb ]).slice(-maxCrumbs);
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.clearBreadcrumbs = function() {
                this._breadcrumbs = [];
                this._notifyScopeListeners();
                return this;
            };
            Scope.prototype.applyToEvent = function(event, hint) {
                if (this._extra && Object.keys(this._extra).length) event.extra = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._extra), event.extra);
                if (this._tags && Object.keys(this._tags).length) event.tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._tags), event.tags);
                if (this._user && Object.keys(this._user).length) event.user = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._user), event.user);
                if (this._contexts && Object.keys(this._contexts).length) event.contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._contexts), event.contexts);
                if (this._level) event.level = this._level;
                if (this._transactionName) event.transaction = this._transactionName;
                if (this._span) {
                    event.contexts = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
                        trace: this._span.getTraceContext()
                    }, event.contexts);
                    var transactionName = this._span.transaction && this._span.transaction.name;
                    if (transactionName) event.tags = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
                        transaction: transactionName
                    }, event.tags);
                }
                this._applyFingerprint(event);
                event.breadcrumbs = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(event.breadcrumbs || [], this._breadcrumbs);
                event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : void 0;
                event.sdkProcessingMetadata = this._sdkProcessingMetadata;
                return this._notifyEventProcessors((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(getGlobalEventProcessors(), this._eventProcessors), event, hint);
            };
            Scope.prototype.setSDKProcessingMetadata = function(newData) {
                this._sdkProcessingMetadata = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._sdkProcessingMetadata), newData);
                return this;
            };
            Scope.prototype._notifyEventProcessors = function(processors, event, hint, index) {
                var _this = this;
                if (void 0 === index) index = 0;
                return new _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.SyncPromise((function(resolve, reject) {
                    var processor = processors[index];
                    if (null === event || "function" !== typeof processor) resolve(event); else {
                        var result = processor((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, event), hint);
                        if ((0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.isThenable)(result)) void result.then((function(final) {
                            return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve);
                        })).then(null, reject); else void _this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
                    }
                }));
            };
            Scope.prototype._notifyScopeListeners = function() {
                var _this = this;
                if (!this._notifyingListeners) {
                    this._notifyingListeners = true;
                    this._scopeListeners.forEach((function(callback) {
                        callback(_this);
                    }));
                    this._notifyingListeners = false;
                }
            };
            Scope.prototype._applyFingerprint = function(event) {
                event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [ event.fingerprint ] : [];
                if (this._fingerprint) event.fingerprint = event.fingerprint.concat(this._fingerprint);
                if (event.fingerprint && !event.fingerprint.length) delete event.fingerprint;
            };
            return Scope;
        }();
        function getGlobalEventProcessors() {
            var global = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.getGlobalObject)();
            global.__SENTRY__ = global.__SENTRY__ || {};
            global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
            return global.__SENTRY__.globalEventProcessors;
        }
        function addGlobalEventProcessor(callback) {
            getGlobalEventProcessors().push(callback);
        }
    },
    "../shared/node_modules/@sentry/tracing/esm/constants.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            FINISH_REASON_TAG: () => FINISH_REASON_TAG,
            IDLE_TRANSACTION_FINISH_REASONS: () => IDLE_TRANSACTION_FINISH_REASONS
        });
        var FINISH_REASON_TAG = "finishReason";
        var IDLE_TRANSACTION_FINISH_REASONS = [ "heartbeatFailed", "idleTimeout", "documentHidden" ];
    },
    "../shared/node_modules/@sentry/tracing/esm/hubextensions.js": (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            addExtensionMethods: () => addExtensionMethods,
            startIdleTransaction: () => startIdleTransaction
        });
        var tslib_es6 = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var hub = __webpack_require__("../shared/node_modules/@sentry/hub/esm/hub.js");
        var env = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var logger = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        var node = __webpack_require__("../shared/node_modules/@sentry/utils/esm/node.js");
        var instrument = __webpack_require__("../shared/node_modules/@sentry/utils/esm/instrument.js");
        var utils = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/utils.js");
        function registerErrorInstrumentation() {
            (0, instrument.addInstrumentationHandler)("error", errorCallback);
            (0, instrument.addInstrumentationHandler)("unhandledrejection", errorCallback);
        }
        function errorCallback() {
            var activeTransaction = (0, utils.getActiveTransaction)();
            if (activeTransaction) {
                var status_1 = "internal_error";
                (0, env.isDebugBuild)() && logger.logger.log("[Tracing] Transaction: " + status_1 + " -> Global error occured");
                activeTransaction.setStatus(status_1);
            }
        }
        var idletransaction = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/idletransaction.js");
        var esm_transaction = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/transaction.js");
        module = __webpack_require__.hmd(module);
        function traceHeaders() {
            var scope = this.getScope();
            if (scope) {
                var span = scope.getSpan();
                if (span) return {
                    "sentry-trace": span.toTraceparent()
                };
            }
            return {};
        }
        function sample(transaction, options, samplingContext) {
            if (!(0, utils.hasTracingEnabled)(options)) {
                transaction.sampled = false;
                return transaction;
            }
            if (void 0 !== transaction.sampled) {
                transaction.setMetadata({
                    transactionSampling: {
                        method: "explicitly_set"
                    }
                });
                return transaction;
            }
            var sampleRate;
            if ("function" === typeof options.tracesSampler) {
                sampleRate = options.tracesSampler(samplingContext);
                transaction.setMetadata({
                    transactionSampling: {
                        method: "client_sampler",
                        rate: Number(sampleRate)
                    }
                });
            } else if (void 0 !== samplingContext.parentSampled) {
                sampleRate = samplingContext.parentSampled;
                transaction.setMetadata({
                    transactionSampling: {
                        method: "inheritance"
                    }
                });
            } else {
                sampleRate = options.tracesSampleRate;
                transaction.setMetadata({
                    transactionSampling: {
                        method: "client_rate",
                        rate: Number(sampleRate)
                    }
                });
            }
            if (!isValidSampleRate(sampleRate)) {
                (0, env.isDebugBuild)() && logger.logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
                transaction.sampled = false;
                return transaction;
            }
            if (!sampleRate) {
                (0, env.isDebugBuild)() && logger.logger.log("[Tracing] Discarding transaction because " + ("function" === typeof options.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"));
                transaction.sampled = false;
                return transaction;
            }
            transaction.sampled = Math.random() < sampleRate;
            if (!transaction.sampled) {
                (0, env.isDebugBuild)() && logger.logger.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(sampleRate) + ")");
                return transaction;
            }
            (0, env.isDebugBuild)() && logger.logger.log("[Tracing] starting " + transaction.op + " transaction - " + transaction.name);
            return transaction;
        }
        function isValidSampleRate(rate) {
            if (isNaN(rate) || !("number" === typeof rate || "boolean" === typeof rate)) {
                (0, env.isDebugBuild)() && logger.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + JSON.stringify(rate) + " of type " + JSON.stringify(typeof rate) + ".");
                return false;
            }
            if (rate < 0 || rate > 1) {
                (0, env.isDebugBuild)() && logger.logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + rate + ".");
                return false;
            }
            return true;
        }
        function _startTransaction(transactionContext, customSamplingContext) {
            var client = this.getClient();
            var options = client && client.getOptions() || {};
            var transaction = new esm_transaction.Transaction(transactionContext, this);
            transaction = sample(transaction, options, (0, tslib_es6.__assign)({
                parentSampled: transactionContext.parentSampled,
                transactionContext
            }, customSamplingContext));
            if (transaction.sampled) transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
            return transaction;
        }
        function startIdleTransaction(hub, transactionContext, idleTimeout, onScope, customSamplingContext) {
            var client = hub.getClient();
            var options = client && client.getOptions() || {};
            var transaction = new idletransaction.IdleTransaction(transactionContext, hub, idleTimeout, onScope);
            transaction = sample(transaction, options, (0, tslib_es6.__assign)({
                parentSampled: transactionContext.parentSampled,
                transactionContext
            }, customSamplingContext));
            if (transaction.sampled) transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
            return transaction;
        }
        function _addTracingExtensions() {
            var carrier = (0, hub.getMainCarrier)();
            if (!carrier.__SENTRY__) return;
            carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
            if (!carrier.__SENTRY__.extensions.startTransaction) carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
            if (!carrier.__SENTRY__.extensions.traceHeaders) carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
        }
        function _autoloadDatabaseIntegrations() {
            var carrier = (0, hub.getMainCarrier)();
            if (!carrier.__SENTRY__) return;
            var packageToIntegrationMapping = {
                mongodb: function() {
                    var integration = (0, node.dynamicRequire)(module, "./integrations/node/mongo");
                    return new integration.Mongo;
                },
                mongoose: function() {
                    var integration = (0, node.dynamicRequire)(module, "./integrations/node/mongo");
                    return new integration.Mongo({
                        mongoose: true
                    });
                },
                mysql: function() {
                    var integration = (0, node.dynamicRequire)(module, "./integrations/node/mysql");
                    return new integration.Mysql;
                },
                pg: function() {
                    var integration = (0, node.dynamicRequire)(module, "./integrations/node/postgres");
                    return new integration.Postgres;
                }
            };
            var mappedPackages = Object.keys(packageToIntegrationMapping).filter((function(moduleName) {
                return !!(0, node.loadModule)(moduleName);
            })).map((function(pkg) {
                try {
                    return packageToIntegrationMapping[pkg]();
                } catch (e) {
                    return;
                }
            })).filter((function(p) {
                return p;
            }));
            if (mappedPackages.length > 0) carrier.__SENTRY__.integrations = (0, tslib_es6.__spread)(carrier.__SENTRY__.integrations || [], mappedPackages);
        }
        function addExtensionMethods() {
            _addTracingExtensions();
            if ((0, node.isNodeEnv)()) _autoloadDatabaseIntegrations();
            registerErrorInstrumentation();
        }
    },
    "../shared/node_modules/@sentry/tracing/esm/idletransaction.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            DEFAULT_IDLE_TIMEOUT: () => DEFAULT_IDLE_TIMEOUT,
            IdleTransaction: () => IdleTransaction
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/time.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/constants.js");
        var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/span.js");
        var _transaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/transaction.js");
        var DEFAULT_IDLE_TIMEOUT = 1e3;
        var HEARTBEAT_INTERVAL = 5e3;
        var IdleTransactionSpanRecorder = function(_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IdleTransactionSpanRecorder, _super);
            function IdleTransactionSpanRecorder(_pushActivity, _popActivity, transactionSpanId, maxlen) {
                if (void 0 === transactionSpanId) transactionSpanId = "";
                var _this = _super.call(this, maxlen) || this;
                _this._pushActivity = _pushActivity;
                _this._popActivity = _popActivity;
                _this.transactionSpanId = transactionSpanId;
                return _this;
            }
            IdleTransactionSpanRecorder.prototype.add = function(span) {
                var _this = this;
                if (span.spanId !== this.transactionSpanId) {
                    span.finish = function(endTimestamp) {
                        span.endTimestamp = "number" === typeof endTimestamp ? endTimestamp : (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
                        _this._popActivity(span.spanId);
                    };
                    if (void 0 === span.endTimestamp) this._pushActivity(span.spanId);
                }
                _super.prototype.add.call(this, span);
            };
            return IdleTransactionSpanRecorder;
        }(_span__WEBPACK_IMPORTED_MODULE_2__.SpanRecorder);
        var IdleTransaction = function(_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IdleTransaction, _super);
            function IdleTransaction(transactionContext, _idleHub, _idleTimeout, _onScope) {
                if (void 0 === _idleTimeout) _idleTimeout = DEFAULT_IDLE_TIMEOUT;
                if (void 0 === _onScope) _onScope = false;
                var _this = _super.call(this, transactionContext, _idleHub) || this;
                _this._idleHub = _idleHub;
                _this._idleTimeout = _idleTimeout;
                _this._onScope = _onScope;
                _this.activities = {};
                _this._heartbeatCounter = 0;
                _this._finished = false;
                _this._beforeFinishCallbacks = [];
                if (_idleHub && _onScope) {
                    clearActiveTransaction(_idleHub);
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("Setting idle transaction on scope. Span ID: " + _this.spanId);
                    _idleHub.configureScope((function(scope) {
                        return scope.setSpan(_this);
                    }));
                }
                _this._initTimeout = setTimeout((function() {
                    if (!_this._finished) _this.finish();
                }), _this._idleTimeout);
                return _this;
            }
            IdleTransaction.prototype.finish = function(endTimestamp) {
                var e_1, _a;
                var _this = this;
                if (void 0 === endTimestamp) endTimestamp = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
                this._finished = true;
                this.activities = {};
                if (this.spanRecorder) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] finishing IdleTransaction", new Date(1e3 * endTimestamp).toISOString(), this.op);
                    try {
                        for (var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(this._beforeFinishCallbacks), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var callback = _c.value;
                            callback(this, endTimestamp);
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((function(span) {
                        if (span.spanId === _this.spanId) return true;
                        if (!span.endTimestamp) {
                            span.endTimestamp = endTimestamp;
                            span.setStatus("cancelled");
                            (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, void 0, 2));
                        }
                        var keepSpan = span.startTimestamp < endTimestamp;
                        if (!keepSpan) (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(span, void 0, 2));
                        return keepSpan;
                    }));
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] flushing IdleTransaction");
                } else (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] No active IdleTransaction");
                if (this._onScope) clearActiveTransaction(this._idleHub);
                return _super.prototype.finish.call(this, endTimestamp);
            };
            IdleTransaction.prototype.registerBeforeFinishCallback = function(callback) {
                this._beforeFinishCallbacks.push(callback);
            };
            IdleTransaction.prototype.initSpanRecorder = function(maxlen) {
                var _this = this;
                if (!this.spanRecorder) {
                    var pushActivity = function(id) {
                        if (_this._finished) return;
                        _this._pushActivity(id);
                    };
                    var popActivity = function(id) {
                        if (_this._finished) return;
                        _this._popActivity(id);
                    };
                    this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("Starting heartbeat");
                    this._pingHeartbeat();
                }
                this.spanRecorder.add(this);
            };
            IdleTransaction.prototype._pushActivity = function(spanId) {
                if (this._initTimeout) {
                    clearTimeout(this._initTimeout);
                    this._initTimeout = void 0;
                }
                (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] pushActivity: " + spanId);
                this.activities[spanId] = true;
                (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
            };
            IdleTransaction.prototype._popActivity = function(spanId) {
                var _this = this;
                if (this.activities[spanId]) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] popActivity " + spanId);
                    delete this.activities[spanId];
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
                }
                if (0 === Object.keys(this.activities).length) {
                    var timeout = this._idleTimeout;
                    var end_1 = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)() + timeout / 1e3;
                    setTimeout((function() {
                        if (!_this._finished) {
                            _this.setTag(_constants__WEBPACK_IMPORTED_MODULE_5__.FINISH_REASON_TAG, _constants__WEBPACK_IMPORTED_MODULE_5__.IDLE_TRANSACTION_FINISH_REASONS[1]);
                            _this.finish(end_1);
                        }
                    }), timeout);
                }
            };
            IdleTransaction.prototype._beat = function() {
                if (this._finished) return;
                var heartbeatString = Object.keys(this.activities).join("");
                if (heartbeatString === this._prevHeartbeatString) this._heartbeatCounter += 1; else this._heartbeatCounter = 1;
                this._prevHeartbeatString = heartbeatString;
                if (this._heartbeatCounter >= 3) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
                    this.setStatus("deadline_exceeded");
                    this.setTag(_constants__WEBPACK_IMPORTED_MODULE_5__.FINISH_REASON_TAG, _constants__WEBPACK_IMPORTED_MODULE_5__.IDLE_TRANSACTION_FINISH_REASONS[0]);
                    this.finish();
                } else this._pingHeartbeat();
            };
            IdleTransaction.prototype._pingHeartbeat = function() {
                var _this = this;
                (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.logger.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter);
                setTimeout((function() {
                    _this._beat();
                }), HEARTBEAT_INTERVAL);
            };
            return IdleTransaction;
        }(_transaction__WEBPACK_IMPORTED_MODULE_6__.Transaction);
        function clearActiveTransaction(hub) {
            if (hub) {
                var scope = hub.getScope();
                if (scope) {
                    var transaction = scope.getTransaction();
                    if (transaction) scope.setSpan(void 0);
                }
            }
        }
    },
    "../shared/node_modules/@sentry/tracing/esm/span.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            SpanRecorder: () => SpanRecorder,
            Span: () => Span
        });
        var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/misc.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/time.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        var SpanRecorder = function() {
            function SpanRecorder(maxlen) {
                if (void 0 === maxlen) maxlen = 1e3;
                this.spans = [];
                this._maxlen = maxlen;
            }
            SpanRecorder.prototype.add = function(span) {
                if (this.spans.length > this._maxlen) span.spanRecorder = void 0; else this.spans.push(span);
            };
            return SpanRecorder;
        }();
        var Span = function() {
            function Span(spanContext) {
                this.traceId = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)();
                this.spanId = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_0__.uuid4)().substring(16);
                this.startTimestamp = (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
                this.tags = {};
                this.data = {};
                if (!spanContext) return this;
                if (spanContext.traceId) this.traceId = spanContext.traceId;
                if (spanContext.spanId) this.spanId = spanContext.spanId;
                if (spanContext.parentSpanId) this.parentSpanId = spanContext.parentSpanId;
                if ("sampled" in spanContext) this.sampled = spanContext.sampled;
                if (spanContext.op) this.op = spanContext.op;
                if (spanContext.description) this.description = spanContext.description;
                if (spanContext.data) this.data = spanContext.data;
                if (spanContext.tags) this.tags = spanContext.tags;
                if (spanContext.status) this.status = spanContext.status;
                if (spanContext.startTimestamp) this.startTimestamp = spanContext.startTimestamp;
                if (spanContext.endTimestamp) this.endTimestamp = spanContext.endTimestamp;
            }
            Span.prototype.child = function(spanContext) {
                return this.startChild(spanContext);
            };
            Span.prototype.startChild = function(spanContext) {
                var childSpan = new Span((0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, spanContext), {
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                }));
                childSpan.spanRecorder = this.spanRecorder;
                if (childSpan.spanRecorder) childSpan.spanRecorder.add(childSpan);
                childSpan.transaction = this.transaction;
                return childSpan;
            };
            Span.prototype.setTag = function(key, value) {
                var _a;
                this.tags = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.tags), (_a = {}, 
                _a[key] = value, _a));
                return this;
            };
            Span.prototype.setData = function(key, value) {
                var _a;
                this.data = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.data), (_a = {}, 
                _a[key] = value, _a));
                return this;
            };
            Span.prototype.setStatus = function(value) {
                this.status = value;
                return this;
            };
            Span.prototype.setHttpStatus = function(httpStatus) {
                this.setTag("http.status_code", String(httpStatus));
                var spanStatus = spanStatusfromHttpCode(httpStatus);
                if ("unknown_error" !== spanStatus) this.setStatus(spanStatus);
                return this;
            };
            Span.prototype.isSuccess = function() {
                return "ok" === this.status;
            };
            Span.prototype.finish = function(endTimestamp) {
                this.endTimestamp = "number" === typeof endTimestamp ? endTimestamp : (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__.timestampWithMs)();
            };
            Span.prototype.toTraceparent = function() {
                var sampledString = "";
                if (void 0 !== this.sampled) sampledString = this.sampled ? "-1" : "-0";
                return this.traceId + "-" + this.spanId + sampledString;
            };
            Span.prototype.toContext = function() {
                return (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dropUndefinedKeys)({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                });
            };
            Span.prototype.updateWithContext = function(spanContext) {
                var _a, _b, _c, _d, _e;
                this.data = (_a = spanContext.data, null !== _a && void 0 !== _a ? _a : {});
                this.description = spanContext.description;
                this.endTimestamp = spanContext.endTimestamp;
                this.op = spanContext.op;
                this.parentSpanId = spanContext.parentSpanId;
                this.sampled = spanContext.sampled;
                this.spanId = (_b = spanContext.spanId, null !== _b && void 0 !== _b ? _b : this.spanId);
                this.startTimestamp = (_c = spanContext.startTimestamp, null !== _c && void 0 !== _c ? _c : this.startTimestamp);
                this.status = spanContext.status;
                this.tags = (_d = spanContext.tags, null !== _d && void 0 !== _d ? _d : {});
                this.traceId = (_e = spanContext.traceId, null !== _e && void 0 !== _e ? _e : this.traceId);
                return this;
            };
            Span.prototype.getTraceContext = function() {
                return (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dropUndefinedKeys)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    trace_id: this.traceId
                });
            };
            Span.prototype.toJSON = function() {
                return (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_3__.dropUndefinedKeys)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                });
            };
            return Span;
        }();
        function spanStatusfromHttpCode(httpStatus) {
            if (httpStatus < 400 && httpStatus >= 100) return "ok";
            if (httpStatus >= 400 && httpStatus < 500) switch (httpStatus) {
              case 401:
                return "unauthenticated";

              case 403:
                return "permission_denied";

              case 404:
                return "not_found";

              case 409:
                return "already_exists";

              case 413:
                return "failed_precondition";

              case 429:
                return "resource_exhausted";

              default:
                return "invalid_argument";
            }
            if (httpStatus >= 500 && httpStatus < 600) switch (httpStatus) {
              case 501:
                return "unimplemented";

              case 503:
                return "unavailable";

              case 504:
                return "deadline_exceeded";

              default:
                return "internal_error";
            }
            return "unknown_error";
        }
    },
    "../shared/node_modules/@sentry/tracing/esm/transaction.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Transaction: () => Transaction
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/hub/esm/hub.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        var _sentry_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        var _span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/@sentry/tracing/esm/span.js");
        var Transaction = function(_super) {
            (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Transaction, _super);
            function Transaction(transactionContext, hub) {
                var _this = _super.call(this, transactionContext) || this;
                _this._measurements = {};
                _this._hub = (0, _sentry_hub__WEBPACK_IMPORTED_MODULE_1__.getCurrentHub)();
                if ((0, _sentry_utils__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(hub, _sentry_hub__WEBPACK_IMPORTED_MODULE_1__.Hub)) _this._hub = hub;
                _this.name = transactionContext.name || "";
                _this.metadata = transactionContext.metadata || {};
                _this._trimEnd = transactionContext.trimEnd;
                _this.transaction = _this;
                return _this;
            }
            Transaction.prototype.setName = function(name) {
                this.name = name;
            };
            Transaction.prototype.initSpanRecorder = function(maxlen) {
                if (void 0 === maxlen) maxlen = 1e3;
                if (!this.spanRecorder) this.spanRecorder = new _span__WEBPACK_IMPORTED_MODULE_3__.SpanRecorder(maxlen);
                this.spanRecorder.add(this);
            };
            Transaction.prototype.setMeasurements = function(measurements) {
                this._measurements = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, measurements);
            };
            Transaction.prototype.setMetadata = function(newMetadata) {
                this.metadata = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.metadata), newMetadata);
            };
            Transaction.prototype.finish = function(endTimestamp) {
                var _this = this;
                if (void 0 !== this.endTimestamp) return;
                if (!this.name) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
                    this.name = "<unlabeled transaction>";
                }
                _super.prototype.finish.call(this, endTimestamp);
                if (true !== this.sampled) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                    var client = this._hub.getClient();
                    var transport = client && client.getTransport && client.getTransport();
                    if (transport && transport.recordLostEvent) transport.recordLostEvent("sample_rate", "transaction");
                    return;
                }
                var finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((function(s) {
                    return s !== _this && s.endTimestamp;
                })) : [];
                if (this._trimEnd && finishedSpans.length > 0) this.endTimestamp = finishedSpans.reduce((function(prev, current) {
                    if (prev.endTimestamp && current.endTimestamp) return prev.endTimestamp > current.endTimestamp ? prev : current;
                    return prev;
                })).endTimestamp;
                var transaction = {
                    contexts: {
                        trace: this.getTraceContext()
                    },
                    spans: finishedSpans,
                    start_timestamp: this.startTimestamp,
                    tags: this.tags,
                    timestamp: this.endTimestamp,
                    transaction: this.name,
                    type: "transaction",
                    sdkProcessingMetadata: this.metadata
                };
                var hasMeasurements = Object.keys(this._measurements).length > 0;
                if (hasMeasurements) {
                    (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2));
                    transaction.measurements = this._measurements;
                }
                (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild)() && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__.logger.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".");
                return this._hub.captureEvent(transaction);
            };
            Transaction.prototype.toContext = function() {
                var spanContext = _super.prototype.toContext.call(this);
                return (0, _sentry_utils__WEBPACK_IMPORTED_MODULE_6__.dropUndefinedKeys)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, 
                tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, spanContext), {
                    name: this.name,
                    trimEnd: this._trimEnd
                }));
            };
            Transaction.prototype.updateWithContext = function(transactionContext) {
                var _a;
                _super.prototype.updateWithContext.call(this, transactionContext);
                this.name = (_a = transactionContext.name, null !== _a && void 0 !== _a ? _a : "");
                this._trimEnd = transactionContext.trimEnd;
                return this;
            };
            return Transaction;
        }(_span__WEBPACK_IMPORTED_MODULE_3__.Span);
    },
    "../shared/node_modules/@sentry/tracing/esm/utils.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            hasTracingEnabled: () => hasTracingEnabled,
            getActiveTransaction: () => getActiveTransaction,
            msToSec: () => msToSec,
            secToMs: () => secToMs
        });
        var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/hub/esm/hub.js");
        function hasTracingEnabled(maybeOptions) {
            var client = (0, _sentry_hub__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub)().getClient();
            var options = maybeOptions || client && client.getOptions();
            return !!options && ("tracesSampleRate" in options || "tracesSampler" in options);
        }
        function getActiveTransaction(maybeHub) {
            var hub = maybeHub || (0, _sentry_hub__WEBPACK_IMPORTED_MODULE_0__.getCurrentHub)();
            var scope = hub.getScope();
            return scope && scope.getTransaction();
        }
        function msToSec(time) {
            return time / 1e3;
        }
        function secToMs(time) {
            return 1e3 * time;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/browser.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            htmlTreeAsString: () => htmlTreeAsString,
            getLocationHref: () => getLocationHref
        });
        var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        function htmlTreeAsString(elem, keyAttrs) {
            try {
                var currentElem = elem;
                var MAX_TRAVERSE_HEIGHT = 5;
                var MAX_OUTPUT_LEN = 80;
                var out = [];
                var height = 0;
                var len = 0;
                var separator = " > ";
                var sepLength = separator.length;
                var nextStr = void 0;
                while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
                    nextStr = _htmlElementAsString(currentElem, keyAttrs);
                    if ("html" === nextStr || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) break;
                    out.push(nextStr);
                    len += nextStr.length;
                    currentElem = currentElem.parentNode;
                }
                return out.reverse().join(separator);
            } catch (_oO) {
                return "<unknown>";
            }
        }
        function _htmlElementAsString(el, keyAttrs) {
            var elem = el;
            var out = [];
            var className;
            var classes;
            var key;
            var attr;
            var i;
            if (!elem || !elem.tagName) return "";
            out.push(elem.tagName.toLowerCase());
            var keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((function(keyAttr) {
                return elem.getAttribute(keyAttr);
            })).map((function(keyAttr) {
                return [ keyAttr, elem.getAttribute(keyAttr) ];
            })) : null;
            if (keyAttrPairs && keyAttrPairs.length) keyAttrPairs.forEach((function(keyAttrPair) {
                out.push("[" + keyAttrPair[0] + '="' + keyAttrPair[1] + '"]');
            })); else {
                if (elem.id) out.push("#" + elem.id);
                className = elem.className;
                if (className && (0, _is__WEBPACK_IMPORTED_MODULE_0__.isString)(className)) {
                    classes = className.split(/\s+/);
                    for (i = 0; i < classes.length; i++) out.push("." + classes[i]);
                }
            }
            var allowedAttrs = [ "type", "name", "title", "alt" ];
            for (i = 0; i < allowedAttrs.length; i++) {
                key = allowedAttrs[i];
                attr = elem.getAttribute(key);
                if (attr) out.push("[" + key + '="' + attr + '"]');
            }
            return out.join("");
        }
        function getLocationHref() {
            var global = (0, _global__WEBPACK_IMPORTED_MODULE_1__.getGlobalObject)();
            try {
                return global.document.location.href;
            } catch (oO) {
                return "";
            }
        }
    },
    "../shared/node_modules/@sentry/utils/esm/env.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            isDebugBuild: () => isDebugBuild,
            isBrowserBundle: () => isBrowserBundle
        });
        var __SENTRY_DEBUG__ = true;
        function isDebugBuild() {
            return __SENTRY_DEBUG__;
        }
        function isBrowserBundle() {
            return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/global.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            getGlobalObject: () => getGlobalObject
        });
        var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/node.js");
        var fallbackGlobalObject = {};
        function getGlobalObject() {
            return (0, _node__WEBPACK_IMPORTED_MODULE_0__.isNodeEnv)() ? __webpack_require__.g : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : fallbackGlobalObject;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/instrument.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            addInstrumentationHandler: () => addInstrumentationHandler
        });
        var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var _is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        var _stacktrace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/stacktrace.js");
        var _supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/supports.js");
        var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
        var handlers = {};
        var instrumented = {};
        function instrument(type) {
            if (instrumented[type]) return;
            instrumented[type] = true;
            switch (type) {
              case "console":
                instrumentConsole();
                break;

              case "dom":
                instrumentDOM();
                break;

              case "xhr":
                instrumentXHR();
                break;

              case "fetch":
                instrumentFetch();
                break;

              case "history":
                instrumentHistory();
                break;

              case "error":
                instrumentError();
                break;

              case "unhandledrejection":
                instrumentUnhandledRejection();
                break;

              default:
                (0, _env__WEBPACK_IMPORTED_MODULE_1__.isDebugBuild)() && _logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn("unknown instrumentation type:", type);
                return;
            }
        }
        function addInstrumentationHandler(type, callback) {
            handlers[type] = handlers[type] || [];
            handlers[type].push(callback);
            instrument(type);
        }
        function triggerHandlers(type, data) {
            var e_1, _a;
            if (!type || !handlers[type]) return;
            try {
                for (var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var handler = _c.value;
                    try {
                        handler(data);
                    } catch (e) {
                        (0, _env__WEBPACK_IMPORTED_MODULE_1__.isDebugBuild)() && _logger__WEBPACK_IMPORTED_MODULE_2__.logger.error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + (0, 
                        _stacktrace__WEBPACK_IMPORTED_MODULE_4__.getFunctionName)(handler) + "\nError:", e);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
        function instrumentConsole() {
            if (!("console" in global)) return;
            _logger__WEBPACK_IMPORTED_MODULE_2__.CONSOLE_LEVELS.forEach((function(level) {
                if (!(level in global.console)) return;
                (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(global.console, level, (function(originalConsoleMethod) {
                    return function() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                        triggerHandlers("console", {
                            args,
                            level
                        });
                        if (originalConsoleMethod) originalConsoleMethod.apply(global.console, args);
                    };
                }));
            }));
        }
        function instrumentFetch() {
            if (!(0, _supports__WEBPACK_IMPORTED_MODULE_6__.supportsNativeFetch)()) return;
            (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(global, "fetch", (function(originalFetch) {
                return function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var handlerData = {
                        args,
                        fetchData: {
                            method: getFetchMethod(args),
                            url: getFetchUrl(args)
                        },
                        startTimestamp: Date.now()
                    };
                    triggerHandlers("fetch", (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, handlerData));
                    return originalFetch.apply(global, args).then((function(response) {
                        triggerHandlers("fetch", (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, handlerData), {
                            endTimestamp: Date.now(),
                            response
                        }));
                        return response;
                    }), (function(error) {
                        triggerHandlers("fetch", (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, handlerData), {
                            endTimestamp: Date.now(),
                            error
                        }));
                        throw error;
                    }));
                };
            }));
        }
        function getFetchMethod(fetchArgs) {
            if (void 0 === fetchArgs) fetchArgs = [];
            if ("Request" in global && (0, _is__WEBPACK_IMPORTED_MODULE_7__.isInstanceOf)(fetchArgs[0], Request) && fetchArgs[0].method) return String(fetchArgs[0].method).toUpperCase();
            if (fetchArgs[1] && fetchArgs[1].method) return String(fetchArgs[1].method).toUpperCase();
            return "GET";
        }
        function getFetchUrl(fetchArgs) {
            if (void 0 === fetchArgs) fetchArgs = [];
            if ("string" === typeof fetchArgs[0]) return fetchArgs[0];
            if ("Request" in global && (0, _is__WEBPACK_IMPORTED_MODULE_7__.isInstanceOf)(fetchArgs[0], Request)) return fetchArgs[0].url;
            return String(fetchArgs[0]);
        }
        function instrumentXHR() {
            if (!("XMLHttpRequest" in global)) return;
            var xhrproto = XMLHttpRequest.prototype;
            (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(xhrproto, "open", (function(originalOpen) {
                return function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var xhr = this;
                    var url = args[1];
                    var xhrInfo = xhr.__sentry_xhr__ = {
                        method: (0, _is__WEBPACK_IMPORTED_MODULE_7__.isString)(args[0]) ? args[0].toUpperCase() : args[0],
                        url: args[1]
                    };
                    if ((0, _is__WEBPACK_IMPORTED_MODULE_7__.isString)(url) && "POST" === xhrInfo.method && url.match(/sentry_key/)) xhr.__sentry_own_request__ = true;
                    var onreadystatechangeHandler = function() {
                        if (4 === xhr.readyState) {
                            try {
                                xhrInfo.status_code = xhr.status;
                            } catch (e) {}
                            triggerHandlers("xhr", {
                                args,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr
                            });
                        }
                    };
                    if ("onreadystatechange" in xhr && "function" === typeof xhr.onreadystatechange) (0, 
                    _object__WEBPACK_IMPORTED_MODULE_5__.fill)(xhr, "onreadystatechange", (function(original) {
                        return function() {
                            var readyStateArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) readyStateArgs[_i] = arguments[_i];
                            onreadystatechangeHandler();
                            return original.apply(xhr, readyStateArgs);
                        };
                    })); else xhr.addEventListener("readystatechange", onreadystatechangeHandler);
                    return originalOpen.apply(xhr, args);
                };
            }));
            (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(xhrproto, "send", (function(originalSend) {
                return function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    if (this.__sentry_xhr__ && void 0 !== args[0]) this.__sentry_xhr__.body = args[0];
                    triggerHandlers("xhr", {
                        args,
                        startTimestamp: Date.now(),
                        xhr: this
                    });
                    return originalSend.apply(this, args);
                };
            }));
        }
        var lastHref;
        function instrumentHistory() {
            if (!(0, _supports__WEBPACK_IMPORTED_MODULE_6__.supportsHistory)()) return;
            var oldOnPopState = global.onpopstate;
            global.onpopstate = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                var to = global.location.href;
                var from = lastHref;
                lastHref = to;
                triggerHandlers("history", {
                    from,
                    to
                });
                if (oldOnPopState) try {
                    return oldOnPopState.apply(this, args);
                } catch (_oO) {}
            };
            function historyReplacementFunction(originalHistoryFunction) {
                return function() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var url = args.length > 2 ? args[2] : void 0;
                    if (url) {
                        var from = lastHref;
                        var to = String(url);
                        lastHref = to;
                        triggerHandlers("history", {
                            from,
                            to
                        });
                    }
                    return originalHistoryFunction.apply(this, args);
                };
            }
            (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(global.history, "pushState", historyReplacementFunction);
            (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(global.history, "replaceState", historyReplacementFunction);
        }
        var debounceDuration = 1e3;
        var debounceTimerID;
        var lastCapturedEvent;
        function shouldShortcircuitPreviousDebounce(previous, current) {
            if (!previous) return true;
            if (previous.type !== current.type) return true;
            try {
                if (previous.target !== current.target) return true;
            } catch (e) {}
            return false;
        }
        function shouldSkipDOMEvent(event) {
            if ("keypress" !== event.type) return false;
            try {
                var target = event.target;
                if (!target || !target.tagName) return true;
                if ("INPUT" === target.tagName || "TEXTAREA" === target.tagName || target.isContentEditable) return false;
            } catch (e) {}
            return true;
        }
        function makeDOMEventHandler(handler, globalListener) {
            if (void 0 === globalListener) globalListener = false;
            return function(event) {
                if (!event || lastCapturedEvent === event) return;
                if (shouldSkipDOMEvent(event)) return;
                var name = "keypress" === event.type ? "input" : event.type;
                if (void 0 === debounceTimerID) {
                    handler({
                        event,
                        name,
                        global: globalListener
                    });
                    lastCapturedEvent = event;
                } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
                    handler({
                        event,
                        name,
                        global: globalListener
                    });
                    lastCapturedEvent = event;
                }
                clearTimeout(debounceTimerID);
                debounceTimerID = global.setTimeout((function() {
                    debounceTimerID = void 0;
                }), debounceDuration);
            };
        }
        function instrumentDOM() {
            if (!("document" in global)) return;
            var triggerDOMHandler = triggerHandlers.bind(null, "dom");
            var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
            global.document.addEventListener("click", globalDOMEventHandler, false);
            global.document.addEventListener("keypress", globalDOMEventHandler, false);
            [ "EventTarget", "Node" ].forEach((function(target) {
                var proto = global[target] && global[target].prototype;
                if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
                (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(proto, "addEventListener", (function(originalAddEventListener) {
                    return function(type, listener, options) {
                        if ("click" === type || "keypress" == type) try {
                            var el = this;
                            var handlers_1 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
                            var handlerForType = handlers_1[type] = handlers_1[type] || {
                                refCount: 0
                            };
                            if (!handlerForType.handler) {
                                var handler = makeDOMEventHandler(triggerDOMHandler);
                                handlerForType.handler = handler;
                                originalAddEventListener.call(this, type, handler, options);
                            }
                            handlerForType.refCount += 1;
                        } catch (e) {}
                        return originalAddEventListener.call(this, type, listener, options);
                    };
                }));
                (0, _object__WEBPACK_IMPORTED_MODULE_5__.fill)(proto, "removeEventListener", (function(originalRemoveEventListener) {
                    return function(type, listener, options) {
                        if ("click" === type || "keypress" == type) try {
                            var el = this;
                            var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                            var handlerForType = handlers_2[type];
                            if (handlerForType) {
                                handlerForType.refCount -= 1;
                                if (handlerForType.refCount <= 0) {
                                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                    handlerForType.handler = void 0;
                                    delete handlers_2[type];
                                }
                                if (0 === Object.keys(handlers_2).length) delete el.__sentry_instrumentation_handlers__;
                            }
                        } catch (e) {}
                        return originalRemoveEventListener.call(this, type, listener, options);
                    };
                }));
            }));
        }
        var _oldOnErrorHandler = null;
        function instrumentError() {
            _oldOnErrorHandler = global.onerror;
            global.onerror = function(msg, url, line, column, error) {
                triggerHandlers("error", {
                    column,
                    error,
                    line,
                    msg,
                    url
                });
                if (_oldOnErrorHandler) return _oldOnErrorHandler.apply(this, arguments);
                return false;
            };
        }
        var _oldOnUnhandledRejectionHandler = null;
        function instrumentUnhandledRejection() {
            _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
            global.onunhandledrejection = function(e) {
                triggerHandlers("unhandledrejection", e);
                if (_oldOnUnhandledRejectionHandler) return _oldOnUnhandledRejectionHandler.apply(this, arguments);
                return true;
            };
        }
    },
    "../shared/node_modules/@sentry/utils/esm/is.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            isError: () => isError,
            isErrorEvent: () => isErrorEvent,
            isDOMError: () => isDOMError,
            isDOMException: () => isDOMException,
            isString: () => isString,
            isPrimitive: () => isPrimitive,
            isPlainObject: () => isPlainObject,
            isEvent: () => isEvent,
            isElement: () => isElement,
            isRegExp: () => isRegExp,
            isThenable: () => isThenable,
            isSyntheticEvent: () => isSyntheticEvent,
            isInstanceOf: () => isInstanceOf
        });
        var objectToString = Object.prototype.toString;
        function isError(wat) {
            switch (objectToString.call(wat)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return true;

              default:
                return isInstanceOf(wat, Error);
            }
        }
        function isBuiltin(wat, ty) {
            return objectToString.call(wat) === "[object " + ty + "]";
        }
        function isErrorEvent(wat) {
            return isBuiltin(wat, "ErrorEvent");
        }
        function isDOMError(wat) {
            return isBuiltin(wat, "DOMError");
        }
        function isDOMException(wat) {
            return isBuiltin(wat, "DOMException");
        }
        function isString(wat) {
            return isBuiltin(wat, "String");
        }
        function isPrimitive(wat) {
            return null === wat || "object" !== typeof wat && "function" !== typeof wat;
        }
        function isPlainObject(wat) {
            return isBuiltin(wat, "Object");
        }
        function isEvent(wat) {
            return "undefined" !== typeof Event && isInstanceOf(wat, Event);
        }
        function isElement(wat) {
            return "undefined" !== typeof Element && isInstanceOf(wat, Element);
        }
        function isRegExp(wat) {
            return isBuiltin(wat, "RegExp");
        }
        function isThenable(wat) {
            return Boolean(wat && wat.then && "function" === typeof wat.then);
        }
        function isSyntheticEvent(wat) {
            return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
        }
        function isInstanceOf(wat, base) {
            try {
                return wat instanceof base;
            } catch (_e) {
                return false;
            }
        }
    },
    "../shared/node_modules/@sentry/utils/esm/logger.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            CONSOLE_LEVELS: () => CONSOLE_LEVELS,
            consoleSandbox: () => consoleSandbox,
            logger: () => logger
        });
        var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
        var PREFIX = "Sentry Logger ";
        var CONSOLE_LEVELS = [ "debug", "info", "warn", "error", "log", "assert" ];
        function consoleSandbox(callback) {
            var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
            if (!("console" in global)) return callback();
            var originalConsole = global.console;
            var wrappedLevels = {};
            CONSOLE_LEVELS.forEach((function(level) {
                if (level in global.console && originalConsole[level].__sentry_original__) {
                    wrappedLevels[level] = originalConsole[level];
                    originalConsole[level] = originalConsole[level].__sentry_original__;
                }
            }));
            var result = callback();
            Object.keys(wrappedLevels).forEach((function(level) {
                originalConsole[level] = wrappedLevels[level];
            }));
            return result;
        }
        var Logger = function() {
            function Logger() {
                this._enabled = false;
            }
            Logger.prototype.disable = function() {
                this._enabled = false;
            };
            Logger.prototype.enable = function() {
                this._enabled = true;
            };
            Logger.prototype.log = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (!this._enabled) return;
                consoleSandbox((function() {
                    var _a;
                    (_a = global.console).log.apply(_a, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([ PREFIX + "[Log]:" ], args));
                }));
            };
            Logger.prototype.warn = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (!this._enabled) return;
                consoleSandbox((function() {
                    var _a;
                    (_a = global.console).warn.apply(_a, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([ PREFIX + "[Warn]:" ], args));
                }));
            };
            Logger.prototype.error = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                if (!this._enabled) return;
                consoleSandbox((function() {
                    var _a;
                    (_a = global.console).error.apply(_a, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)([ PREFIX + "[Error]:" ], args));
                }));
            };
            return Logger;
        }();
        var sentryGlobal = global.__SENTRY__ || {};
        var logger = sentryGlobal.logger || new Logger;
        if ((0, _env__WEBPACK_IMPORTED_MODULE_2__.isDebugBuild)()) {
            sentryGlobal.logger = logger;
            global.__SENTRY__ = sentryGlobal;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/misc.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            uuid4: () => uuid4,
            parseUrl: () => parseUrl,
            getEventDescription: () => getEventDescription,
            addExceptionTypeValue: () => addExceptionTypeValue,
            addExceptionMechanism: () => addExceptionMechanism,
            checkOrSetAlreadyCaught: () => checkOrSetAlreadyCaught
        });
        var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/object.js");
        function uuid4() {
            var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
            var crypto = global.crypto || global.msCrypto;
            if (!(void 0 === crypto) && crypto.getRandomValues) {
                var arr = new Uint16Array(8);
                crypto.getRandomValues(arr);
                arr[3] = 4095 & arr[3] | 16384;
                arr[4] = 16383 & arr[4] | 32768;
                var pad = function(num) {
                    var v = num.toString(16);
                    while (v.length < 4) v = "0" + v;
                    return v;
                };
                return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                var r = 16 * Math.random() | 0;
                var v = "x" === c ? r : 3 & r | 8;
                return v.toString(16);
            }));
        }
        function parseUrl(url) {
            if (!url) return {};
            var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!match) return {};
            var query = match[6] || "";
            var fragment = match[8] || "";
            return {
                host: match[4],
                path: match[5],
                protocol: match[2],
                relative: match[5] + query + fragment
            };
        }
        function getFirstException(event) {
            return event.exception && event.exception.values ? event.exception.values[0] : void 0;
        }
        function getEventDescription(event) {
            var message = event.message, eventId = event.event_id;
            if (message) return message;
            var firstException = getFirstException(event);
            if (firstException) {
                if (firstException.type && firstException.value) return firstException.type + ": " + firstException.value;
                return firstException.type || firstException.value || eventId || "<unknown>";
            }
            return eventId || "<unknown>";
        }
        function addExceptionTypeValue(event, value, type) {
            var exception = event.exception = event.exception || {};
            var values = exception.values = exception.values || [];
            var firstException = values[0] = values[0] || {};
            if (!firstException.value) firstException.value = value || "";
            if (!firstException.type) firstException.type = type || "Error";
        }
        function addExceptionMechanism(event, newMechanism) {
            var firstException = getFirstException(event);
            if (!firstException) return;
            var defaultMechanism = {
                type: "generic",
                handled: true
            };
            var currentMechanism = firstException.mechanism;
            firstException.mechanism = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0, 
            tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultMechanism), currentMechanism), newMechanism);
            if (newMechanism && "data" in newMechanism) {
                var mergedData = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, currentMechanism && currentMechanism.data), newMechanism.data);
                firstException.mechanism.data = mergedData;
            }
        }
        function checkOrSetAlreadyCaught(exception) {
            if (exception && exception.__sentry_captured__) return true;
            try {
                (0, _object__WEBPACK_IMPORTED_MODULE_2__.addNonEnumerableProperty)(exception, "__sentry_captured__", true);
            } catch (err) {}
            return false;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/node.js": (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            isNodeEnv: () => isNodeEnv,
            dynamicRequire: () => dynamicRequire,
            loadModule: () => loadModule
        });
        var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        module = __webpack_require__.hmd(module);
        function isNodeEnv() {
            return !(0, _env__WEBPACK_IMPORTED_MODULE_0__.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0);
        }
        function dynamicRequire(mod, request) {
            return mod.require(request);
        }
        function loadModule(moduleName) {
            var mod;
            try {
                mod = dynamicRequire(module, moduleName);
            } catch (e) {}
            try {
                var cwd = dynamicRequire(module, "process").cwd;
                mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
            } catch (e) {}
            return mod;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/object.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            fill: () => fill,
            addNonEnumerableProperty: () => addNonEnumerableProperty,
            markFunctionWrapped: () => markFunctionWrapped,
            getOriginalFunction: () => getOriginalFunction,
            urlEncode: () => urlEncode,
            getWalkSource: () => getWalkSource,
            extractExceptionKeysForMessage: () => extractExceptionKeysForMessage,
            dropUndefinedKeys: () => dropUndefinedKeys
        });
        var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/browser.js");
        var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/string.js");
        function fill(source, name, replacementFactory) {
            if (!(name in source)) return;
            var original = source[name];
            var wrapped = replacementFactory(original);
            if ("function" === typeof wrapped) try {
                markFunctionWrapped(wrapped, original);
            } catch (_Oo) {}
            source[name] = wrapped;
        }
        function addNonEnumerableProperty(obj, name, value) {
            Object.defineProperty(obj, name, {
                value,
                writable: true,
                configurable: true
            });
        }
        function markFunctionWrapped(wrapped, original) {
            var proto = original.prototype || {};
            wrapped.prototype = original.prototype = proto;
            addNonEnumerableProperty(wrapped, "__sentry_original__", original);
        }
        function getOriginalFunction(func) {
            return func.__sentry_original__;
        }
        function urlEncode(object) {
            return Object.keys(object).map((function(key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]);
            })).join("&");
        }
        function getWalkSource(value) {
            if ((0, _is__WEBPACK_IMPORTED_MODULE_0__.isError)(value)) {
                var error = value;
                var err = {
                    message: error.message,
                    name: error.name,
                    stack: error.stack
                };
                for (var i in error) if (Object.prototype.hasOwnProperty.call(error, i)) err[i] = error[i];
                return err;
            }
            if ((0, _is__WEBPACK_IMPORTED_MODULE_0__.isEvent)(value)) {
                var event_1 = value;
                var source = {};
                source.type = event_1.type;
                try {
                    source.target = (0, _is__WEBPACK_IMPORTED_MODULE_0__.isElement)(event_1.target) ? (0, 
                    _browser__WEBPACK_IMPORTED_MODULE_1__.htmlTreeAsString)(event_1.target) : Object.prototype.toString.call(event_1.target);
                } catch (_oO) {
                    source.target = "<unknown>";
                }
                try {
                    source.currentTarget = (0, _is__WEBPACK_IMPORTED_MODULE_0__.isElement)(event_1.currentTarget) ? (0, 
                    _browser__WEBPACK_IMPORTED_MODULE_1__.htmlTreeAsString)(event_1.currentTarget) : Object.prototype.toString.call(event_1.currentTarget);
                } catch (_oO) {
                    source.currentTarget = "<unknown>";
                }
                if ("undefined" !== typeof CustomEvent && (0, _is__WEBPACK_IMPORTED_MODULE_0__.isInstanceOf)(value, CustomEvent)) source.detail = event_1.detail;
                for (var attr in event_1) if (Object.prototype.hasOwnProperty.call(event_1, attr)) source[attr] = event_1[attr];
                return source;
            }
            return value;
        }
        function extractExceptionKeysForMessage(exception, maxLength) {
            if (void 0 === maxLength) maxLength = 40;
            var keys = Object.keys(getWalkSource(exception));
            keys.sort();
            if (!keys.length) return "[object has no keys]";
            if (keys[0].length >= maxLength) return (0, _string__WEBPACK_IMPORTED_MODULE_2__.truncate)(keys[0], maxLength);
            for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
                var serialized = keys.slice(0, includedKeys).join(", ");
                if (serialized.length > maxLength) continue;
                if (includedKeys === keys.length) return serialized;
                return (0, _string__WEBPACK_IMPORTED_MODULE_2__.truncate)(serialized, maxLength);
            }
            return "";
        }
        function dropUndefinedKeys(val) {
            var e_1, _a;
            if ((0, _is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(val)) {
                var obj = val;
                var rv = {};
                try {
                    for (var _b = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if ("undefined" !== typeof obj[key]) rv[key] = dropUndefinedKeys(obj[key]);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                return rv;
            }
            if (Array.isArray(val)) return val.map(dropUndefinedKeys);
            return val;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/stacktrace.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            createStackParser: () => createStackParser,
            getFunctionName: () => getFunctionName
        });
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/tslib/tslib.es6.js");
        var STACKTRACE_LIMIT = 50;
        function createStackParser() {
            var parsers = [];
            for (var _i = 0; _i < arguments.length; _i++) parsers[_i] = arguments[_i];
            var sortedParsers = parsers.sort((function(a, b) {
                return a[0] - b[0];
            })).map((function(p) {
                return p[1];
            }));
            return function(stack, skipFirst) {
                var e_1, _a, e_2, _b;
                if (void 0 === skipFirst) skipFirst = 0;
                var frames = [];
                try {
                    for (var _c = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(stack.split("\n").slice(skipFirst)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var line = _d.value;
                        try {
                            for (var sortedParsers_1 = (e_2 = void 0, (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(sortedParsers)), sortedParsers_1_1 = sortedParsers_1.next(); !sortedParsers_1_1.done; sortedParsers_1_1 = sortedParsers_1.next()) {
                                var parser = sortedParsers_1_1.value;
                                var frame = parser(line);
                                if (frame) {
                                    frames.push(frame);
                                    break;
                                }
                            }
                        } catch (e_2_1) {
                            e_2 = {
                                error: e_2_1
                            };
                        } finally {
                            try {
                                if (sortedParsers_1_1 && !sortedParsers_1_1.done && (_b = sortedParsers_1.return)) _b.call(sortedParsers_1);
                            } finally {
                                if (e_2) throw e_2.error;
                            }
                        }
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                return stripSentryFramesAndReverse(frames);
            };
        }
        function stripSentryFramesAndReverse(stack) {
            if (!stack.length) return [];
            var localStack = stack;
            var firstFrameFunction = localStack[0].function || "";
            var lastFrameFunction = localStack[localStack.length - 1].function || "";
            if (-1 !== firstFrameFunction.indexOf("captureMessage") || -1 !== firstFrameFunction.indexOf("captureException")) localStack = localStack.slice(1);
            if (-1 !== lastFrameFunction.indexOf("sentryWrapped")) localStack = localStack.slice(0, -1);
            return localStack.slice(0, STACKTRACE_LIMIT).map((function(frame) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0, tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, frame), {
                    filename: frame.filename || localStack[0].filename,
                    function: frame.function || "?"
                });
            })).reverse();
        }
        var defaultFunctionName = "<anonymous>";
        function getFunctionName(fn) {
            try {
                if (!fn || "function" !== typeof fn) return defaultFunctionName;
                return fn.name || defaultFunctionName;
            } catch (e) {
                return defaultFunctionName;
            }
        }
    },
    "../shared/node_modules/@sentry/utils/esm/string.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            truncate: () => truncate,
            safeJoin: () => safeJoin,
            isMatchingPattern: () => isMatchingPattern
        });
        var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        function truncate(str, max) {
            if (void 0 === max) max = 0;
            if ("string" !== typeof str || 0 === max) return str;
            return str.length <= max ? str : str.substr(0, max) + "...";
        }
        function safeJoin(input, delimiter) {
            if (!Array.isArray(input)) return "";
            var output = [];
            for (var i = 0; i < input.length; i++) {
                var value = input[i];
                try {
                    output.push(String(value));
                } catch (e) {
                    output.push("[value cannot be serialized]");
                }
            }
            return output.join(delimiter);
        }
        function isMatchingPattern(value, pattern) {
            if (!(0, _is__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) return false;
            if ((0, _is__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(pattern)) return pattern.test(value);
            if ("string" === typeof pattern) return -1 !== value.indexOf(pattern);
            return false;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/supports.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            supportsFetch: () => supportsFetch,
            isNativeFetch: () => isNativeFetch,
            supportsNativeFetch: () => supportsNativeFetch,
            supportsReferrerPolicy: () => supportsReferrerPolicy,
            supportsHistory: () => supportsHistory
        });
        var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/env.js");
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/logger.js");
        function supportsFetch() {
            if (!("fetch" in (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)())) return false;
            try {
                new Headers;
                new Request("");
                new Response;
                return true;
            } catch (e) {
                return false;
            }
        }
        function isNativeFetch(func) {
            return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
        }
        function supportsNativeFetch() {
            if (!supportsFetch()) return false;
            var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
            if (isNativeFetch(global.fetch)) return true;
            var result = false;
            var doc = global.document;
            if (doc && "function" === typeof doc.createElement) try {
                var sandbox = doc.createElement("iframe");
                sandbox.hidden = true;
                doc.head.appendChild(sandbox);
                if (sandbox.contentWindow && sandbox.contentWindow.fetch) result = isNativeFetch(sandbox.contentWindow.fetch);
                doc.head.removeChild(sandbox);
            } catch (err) {
                (0, _env__WEBPACK_IMPORTED_MODULE_1__.isDebugBuild)() && _logger__WEBPACK_IMPORTED_MODULE_2__.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
            }
            return result;
        }
        function supportsReferrerPolicy() {
            if (!supportsFetch()) return false;
            try {
                new Request("_", {
                    referrerPolicy: "origin"
                });
                return true;
            } catch (e) {
                return false;
            }
        }
        function supportsHistory() {
            var global = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
            var chrome = global.chrome;
            var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
            var hasHistoryApi = "history" in global && !!global.history.pushState && !!global.history.replaceState;
            return !isChromePackagedApp && hasHistoryApi;
        }
    },
    "../shared/node_modules/@sentry/utils/esm/syncpromise.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            resolvedSyncPromise: () => resolvedSyncPromise,
            rejectedSyncPromise: () => rejectedSyncPromise,
            SyncPromise: () => SyncPromise
        });
        var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/is.js");
        function resolvedSyncPromise(value) {
            return new SyncPromise((function(resolve) {
                resolve(value);
            }));
        }
        function rejectedSyncPromise(reason) {
            return new SyncPromise((function(_, reject) {
                reject(reason);
            }));
        }
        var SyncPromise = function() {
            function SyncPromise(executor) {
                var _this = this;
                this._state = 0;
                this._handlers = [];
                this._resolve = function(value) {
                    _this._setResult(1, value);
                };
                this._reject = function(reason) {
                    _this._setResult(2, reason);
                };
                this._setResult = function(state, value) {
                    if (0 !== _this._state) return;
                    if ((0, _is__WEBPACK_IMPORTED_MODULE_0__.isThenable)(value)) {
                        void value.then(_this._resolve, _this._reject);
                        return;
                    }
                    _this._state = state;
                    _this._value = value;
                    _this._executeHandlers();
                };
                this._executeHandlers = function() {
                    if (0 === _this._state) return;
                    var cachedHandlers = _this._handlers.slice();
                    _this._handlers = [];
                    cachedHandlers.forEach((function(handler) {
                        if (handler[0]) return;
                        if (1 === _this._state) handler[1](_this._value);
                        if (2 === _this._state) handler[2](_this._value);
                        handler[0] = true;
                    }));
                };
                try {
                    executor(this._resolve, this._reject);
                } catch (e) {
                    this._reject(e);
                }
            }
            SyncPromise.prototype.then = function(onfulfilled, onrejected) {
                var _this = this;
                return new SyncPromise((function(resolve, reject) {
                    _this._handlers.push([ false, function(result) {
                        if (!onfulfilled) resolve(result); else try {
                            resolve(onfulfilled(result));
                        } catch (e) {
                            reject(e);
                        }
                    }, function(reason) {
                        if (!onrejected) reject(reason); else try {
                            resolve(onrejected(reason));
                        } catch (e) {
                            reject(e);
                        }
                    } ]);
                    _this._executeHandlers();
                }));
            };
            SyncPromise.prototype.catch = function(onrejected) {
                return this.then((function(val) {
                    return val;
                }), onrejected);
            };
            SyncPromise.prototype.finally = function(onfinally) {
                var _this = this;
                return new SyncPromise((function(resolve, reject) {
                    var val;
                    var isRejected;
                    return _this.then((function(value) {
                        isRejected = false;
                        val = value;
                        if (onfinally) onfinally();
                    }), (function(reason) {
                        isRejected = true;
                        val = reason;
                        if (onfinally) onfinally();
                    })).then((function() {
                        if (isRejected) {
                            reject(val);
                            return;
                        }
                        resolve(val);
                    }));
                }));
            };
            return SyncPromise;
        }();
    },
    "../shared/node_modules/@sentry/utils/esm/time.js": (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            dateTimestampInSeconds: () => dateTimestampInSeconds,
            timestampInSeconds: () => timestampInSeconds,
            timestampWithMs: () => timestampWithMs,
            browserPerformanceTimeOrigin: () => browserPerformanceTimeOrigin
        });
        var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/global.js");
        var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/node_modules/@sentry/utils/esm/node.js");
        module = __webpack_require__.hmd(module);
        var dateTimestampSource = {
            nowSeconds: function() {
                return Date.now() / 1e3;
            }
        };
        function getBrowserPerformance() {
            var performance = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().performance;
            if (!performance || !performance.now) return;
            var timeOrigin = Date.now() - performance.now();
            return {
                now: function() {
                    return performance.now();
                },
                timeOrigin
            };
        }
        function getNodePerformance() {
            try {
                var perfHooks = (0, _node__WEBPACK_IMPORTED_MODULE_1__.dynamicRequire)(module, "perf_hooks");
                return perfHooks.performance;
            } catch (_) {
                return;
            }
        }
        var platformPerformance = (0, _node__WEBPACK_IMPORTED_MODULE_1__.isNodeEnv)() ? getNodePerformance() : getBrowserPerformance();
        var timestampSource = void 0 === platformPerformance ? dateTimestampSource : {
            nowSeconds: function() {
                return (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3;
            }
        };
        var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
        var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
        var timestampWithMs = timestampInSeconds;
        var browserPerformanceTimeOrigin = function() {
            var performance = (0, _global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)().performance;
            if (!performance || !performance.now) {
                "none";
                return;
            }
            var threshold = 3600 * 1e3;
            var performanceNow = performance.now();
            var dateNow = Date.now();
            var timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
            var timeOriginIsReliable = timeOriginDelta < threshold;
            var navigationStart = performance.timing && performance.timing.navigationStart;
            var hasNavigationStart = "number" === typeof navigationStart;
            var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
            var navigationStartIsReliable = navigationStartDelta < threshold;
            if (timeOriginIsReliable || navigationStartIsReliable) if (timeOriginDelta <= navigationStartDelta) {
                "timeOrigin";
                return performance.timeOrigin;
            } else {
                "navigationStart";
                return navigationStart;
            }
            "dateNow";
            return dateNow;
        }();
    },
    "../shared/node_modules/load-script2/index.js": module => {
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
    "../shared/node_modules/photoswipe/dist/photoswipe-ui-default.min.js": function(module, exports, __webpack_require__) {
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
    "../shared/node_modules/photoswipe/dist/photoswipe.min.js": function(module, exports, __webpack_require__) {
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
    "../shared/node_modules/tslib/tslib.es6.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            __extends: () => __extends,
            __assign: () => __assign,
            __rest: () => __rest,
            __values: () => __values,
            __read: () => __read,
            __spread: () => __spread
        });
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
        function __extends(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
        }
        var __assign = function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (null != s && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        function __values(o) {
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
        }
        function __read(o, n) {
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
        }
        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
        }
    },
    "../shared/node_modules/yt-player/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        const EventEmitter = __webpack_require__("./node_modules/events/events.js").EventEmitter;
        const loadScript = __webpack_require__("../shared/node_modules/load-script2/index.js");
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
    "./node_modules/swiper/swiper-bundle.css": () => {
        "use strict";
    },
    "./node_modules/axios/package.json": module => {
        "use strict";
        module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("../shared/browser/utils/sentry.js"), __webpack_exec__("./src/assets/activity/main.js");
} ]);