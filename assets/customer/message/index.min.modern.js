(() => {
    var __webpack_modules__ = {
        "../shared/browser/node_modules/@yy/sl-http-upload/dist/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            (function(global, factory) {
                true ? factory(exports) : 0;
            })(0, (function(exports) {
                "use strict";
                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                    };
                    return extendStatics(d, b);
                };
                function __extends(d, b) {
                    if ("function" !== typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
                function __awaiter(thisArg, _arguments, P, generator) {
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
                }
                function __generator(thisArg, body) {
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
                }
                var Event = function() {
                    function Event() {
                        this.eventmap = {};
                    }
                    Event.prototype.listen = function(event, cb) {
                        if (this.eventmap[event]) this.eventmap[event] = null;
                        this.eventmap[event] = cb;
                    };
                    Event.prototype.emit = function(event) {
                        var fn = this.eventmap[event];
                        if (fn) fn();
                    };
                    return Event;
                }();
                var bind = function(fn, thisArg) {
                    return function() {
                        var args = new Array(arguments.length);
                        for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                        return fn.apply(thisArg, args);
                    };
                };
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
                    return str.replace(/^\s*/, "").replace(/\s*$/, "");
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
                var utils = {
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
                function encode(val) {
                    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                }
                var buildURL = function(url, params, paramsSerializer) {
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
                function InterceptorManager() {
                    this.handlers = [];
                }
                InterceptorManager.prototype.use = function(fulfilled, rejected) {
                    this.handlers.push({
                        fulfilled,
                        rejected
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
                var InterceptorManager_1 = InterceptorManager;
                var transformData = function(data, headers, fns) {
                    utils.forEach(fns, (function(fn) {
                        data = fn(data, headers);
                    }));
                    return data;
                };
                var isCancel = function(value) {
                    return !!(value && value.__CANCEL__);
                };
                var normalizeHeaderName = function(headers, normalizedName) {
                    utils.forEach(headers, (function(value, name) {
                        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                            headers[normalizedName] = value;
                            delete headers[name];
                        }
                    }));
                };
                var enhanceError = function(error, config, code, request, response) {
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
                var createError = function(message, config, code, request, response) {
                    var error = new Error(message);
                    return enhanceError(error, config, code, request, response);
                };
                var settle = function(resolve, reject, response) {
                    var validateStatus = response.config.validateStatus;
                    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
                };
                var cookies = utils.isStandardBrowserEnv() ? function() {
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
                var isAbsoluteURL = function(url) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
                };
                var combineURLs = function(baseURL, relativeURL) {
                    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
                };
                var buildFullPath = function(baseURL, requestedURL) {
                    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
                    return requestedURL;
                };
                var ignoreDuplicateOf = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
                var parseHeaders = function(headers) {
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
                var isURLSameOrigin = utils.isStandardBrowserEnv() ? function() {
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
                var xhr = function(config) {
                    return new Promise((function(resolve, reject) {
                        var requestData = config.data;
                        var requestHeaders = config.headers;
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
                        request.onreadystatechange = function() {
                            if (!request || 4 !== request.readyState) return;
                            if (0 === request.status && !(request.responseURL && 0 === request.responseURL.indexOf("file:"))) return;
                            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                            var responseData = !config.responseType || "text" === config.responseType ? request.responseText : request.response;
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
                            reject(createError(timeoutErrorMessage, config, "ECONNABORTED", request));
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
                        if (config.responseType) try {
                            request.responseType = config.responseType;
                        } catch (e) {
                            if ("json" !== config.responseType) throw e;
                        }
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
                var DEFAULT_CONTENT_TYPE = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                function setContentTypeIfUnset(headers, value) {
                    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
                }
                function getDefaultAdapter() {
                    var adapter;
                    if ("undefined" !== typeof XMLHttpRequest) adapter = xhr; else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = xhr;
                    return adapter;
                }
                var defaults = {
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
                        if (utils.isObject(data)) {
                            setContentTypeIfUnset(headers, "application/json;charset=utf-8");
                            return JSON.stringify(data);
                        }
                        return data;
                    } ],
                    transformResponse: [ function(data) {
                        if ("string" === typeof data) try {
                            data = JSON.parse(data);
                        } catch (e) {}
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
                var defaults_1 = defaults;
                function throwIfCancellationRequested(config) {
                    if (config.cancelToken) config.cancelToken.throwIfRequested();
                }
                var dispatchRequest = function(config) {
                    throwIfCancellationRequested(config);
                    config.headers = config.headers || {};
                    config.data = transformData(config.data, config.headers, config.transformRequest);
                    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
                    utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (function(method) {
                        delete config.headers[method];
                    }));
                    var adapter = config.adapter || defaults_1.adapter;
                    return adapter(config).then((function(response) {
                        throwIfCancellationRequested(config);
                        response.data = transformData(response.data, response.headers, config.transformResponse);
                        return response;
                    }), (function(reason) {
                        if (!isCancel(reason)) {
                            throwIfCancellationRequested(config);
                            if (reason && reason.response) reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                        }
                        return Promise.reject(reason);
                    }));
                };
                var mergeConfig = function(config1, config2) {
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
                function Axios(instanceConfig) {
                    this.defaults = instanceConfig;
                    this.interceptors = {
                        request: new InterceptorManager_1,
                        response: new InterceptorManager_1
                    };
                }
                Axios.prototype.request = function(config) {
                    if ("string" === typeof config) {
                        config = arguments[1] || {};
                        config.url = arguments[0];
                    } else config = config || {};
                    config = mergeConfig(this.defaults, config);
                    if (config.method) config.method = config.method.toLowerCase(); else if (this.defaults.method) config.method = this.defaults.method.toLowerCase(); else config.method = "get";
                    var chain = [ dispatchRequest, void 0 ];
                    var promise = Promise.resolve(config);
                    this.interceptors.request.forEach((function(interceptor) {
                        chain.unshift(interceptor.fulfilled, interceptor.rejected);
                    }));
                    this.interceptors.response.forEach((function(interceptor) {
                        chain.push(interceptor.fulfilled, interceptor.rejected);
                    }));
                    while (chain.length) promise = promise.then(chain.shift(), chain.shift());
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
                var Axios_1 = Axios;
                function Cancel(message) {
                    this.message = message;
                }
                Cancel.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "");
                };
                Cancel.prototype.__CANCEL__ = true;
                var Cancel_1 = Cancel;
                function CancelToken(executor) {
                    if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
                    var resolvePromise;
                    this.promise = new Promise((function(resolve) {
                        resolvePromise = resolve;
                    }));
                    var token = this;
                    executor((function(message) {
                        if (token.reason) return;
                        token.reason = new Cancel_1(message);
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
                var CancelToken_1 = CancelToken;
                var spread = function(callback) {
                    return function(arr) {
                        return callback.apply(null, arr);
                    };
                };
                var isAxiosError = function(payload) {
                    return "object" === typeof payload && true === payload.isAxiosError;
                };
                function createInstance(defaultConfig) {
                    var context = new Axios_1(defaultConfig);
                    var instance = bind(Axios_1.prototype.request, context);
                    utils.extend(instance, Axios_1.prototype, context);
                    utils.extend(instance, context);
                    return instance;
                }
                var axios$1 = createInstance(defaults_1);
                axios$1.Axios = Axios_1;
                axios$1.create = function(instanceConfig) {
                    return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
                };
                axios$1.Cancel = Cancel_1;
                axios$1.CancelToken = CancelToken_1;
                axios$1.isCancel = isCancel;
                axios$1.all = function(promises) {
                    return Promise.all(promises);
                };
                axios$1.spread = spread;
                axios$1.isAxiosError = isAxiosError;
                var axios_1 = axios$1;
                var _default = axios$1;
                axios_1.default = _default;
                var axios = axios_1;
                var fileTypeMap = new Map([ [ "svg", "image/svg+xml" ], [ "ttf", "font/ttf" ], [ "glb", "model/gltf-binary" ], [ "gltf", "model/gltf+json" ], [ "usdz", "model/vnd.usdz+zip" ], [ "dwg", "image/x-dwg" ], [ "stl", "application/vnd.ms-pki.stl" ], [ "stp", "application/STEP" ], [ "step", "application/STEP" ], [ "igs", "application/x-igs" ], [ "rar", "application/x-rar-compressed" ], [ "zip", "application/zip" ] ]);
                var FileSize;
                (function(FileSize) {
                    FileSize[FileSize["KB"] = 1024] = "KB";
                    FileSize[FileSize["MB"] = 1048576] = "MB";
                })(FileSize || (FileSize = {}));
                var FileType;
                (function(FileType) {
                    FileType["VIDEO"] = "VIDEO";
                    FileType["IMAGE"] = "IMAGE";
                })(FileType || (FileType = {}));
                var BlobType;
                (function(BlobType) {
                    BlobType["MP4"] = "video/mp4";
                    BlobType["PNG"] = "image/png";
                })(BlobType || (BlobType = {}));
                var ErrorTag;
                (function(ErrorTag) {
                    ErrorTag["GET_INFO_FAILED"] = "getInformationFailed";
                    ErrorTag["GET_INFO_TIMEOUT"] = "getInformationTimeout";
                })(ErrorTag || (ErrorTag = {}));
                var CLIENT = {
                    SL_ADMIN: "shopline-admin",
                    SL_APP: "shopline-app",
                    SL_PLUFIN: "shopline-plugin",
                    SL_DASH: "shopline-dash"
                };
                var ERROR_CODE = [ "CUS0501" ];
                var BaseUpload = function() {
                    function BaseUpload(_a) {
                        var _b = _a.client, client = void 0 === _b ? CLIENT.SL_ADMIN : _b, _c = _a.errorCode, errorCode = void 0 === _c ? ERROR_CODE : _c;
                        this.client = client;
                        this.env = this.initEnv();
                        this.errorCode = errorCode;
                    }
                    BaseUpload.prototype.httpRequest = function(url, opt) {
                        var _this = this;
                        var baseURL = this.getBaseUrl();
                        axios.interceptors.response.use((function(response) {
                            if (_this.errorCode.includes(response.data.code)) return Promise.reject({
                                code: response.data.code
                            });
                            return response;
                        }), (function(error) {
                            return Promise.reject(error);
                        }));
                        return axios(url, __assign({
                            baseURL
                        }, opt));
                    };
                    BaseUpload.prototype.getBaseUrl = function() {
                        if (this.client === CLIENT.SL_ADMIN && "local" !== this.env) return "/admin";
                        return "";
                    };
                    BaseUpload.prototype.initEnv = function() {
                        var host = window.location.host;
                        if (host.includes("local")) return "local";
                        if (host.includes("dev")) return "dev";
                        if (host.includes("stg")) return "stg";
                        return "prod";
                    };
                    BaseUpload.prototype.getFirstFrameBlob = function(el, drawInfo) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var canvas, ctx, drawWidth, drawHeight, blob;
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    canvas = document.createElement("canvas");
                                    ctx = canvas.getContext("2d");
                                    drawWidth = (null === drawInfo || void 0 === drawInfo ? void 0 : drawInfo.width) || el.width;
                                    drawHeight = (null === drawInfo || void 0 === drawInfo ? void 0 : drawInfo.height) || el.height;
                                    canvas.width = drawWidth;
                                    canvas.height = drawHeight;
                                    if (ctx) ctx.drawImage(el, 0, 0, drawWidth, drawHeight);
                                    return [ 4, new Promise((function(resolve) {
                                        canvas.toBlob((function(blob) {
                                            resolve(blob);
                                        }), BlobType.PNG);
                                    })) ];

                                  case 1:
                                    blob = _a.sent();
                                    return [ 2, blob ];
                                }
                            }));
                        }));
                    };
                    BaseUpload.prototype.getVideoData = function(file) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var reader, width, height, duration, video, res, blob;
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    reader = new FileReader;
                                    reader.readAsArrayBuffer(file);
                                    return [ 4, new Promise((function(resolve) {
                                        return reader.onload = resolve;
                                    })) ];

                                  case 1:
                                    _a.sent();
                                    video = document.createElement("video");
                                    video.preload = "auto";
                                    video.muted = true;
                                    video.autoplay = true;
                                    video.addEventListener("loadedmetadata", (function(e) {
                                        width = video.videoWidth;
                                        height = video.videoHeight;
                                        duration = video.duration;
                                    }));
                                    return [ 4, new Promise((function(resolve, reject) {
                                        video.addEventListener("error", (function(e) {
                                            reject({
                                                error: ErrorTag.GET_INFO_FAILED,
                                                file,
                                                data: e,
                                                response: {
                                                    code: ErrorTag.GET_INFO_FAILED,
                                                    msg: "获取信息失败"
                                                }
                                            });
                                        }));
                                        video.addEventListener("loadeddata", resolve);
                                        setTimeout((function() {
                                            if (width && height && duration) resolve(ErrorTag.GET_INFO_TIMEOUT); else reject({
                                                error: ErrorTag.GET_INFO_TIMEOUT,
                                                file,
                                                data: null,
                                                response: {
                                                    code: ErrorTag.GET_INFO_TIMEOUT,
                                                    msg: "获取信息失败"
                                                }
                                            });
                                        }), 1e3);
                                        video.src = URL.createObjectURL(new Blob([ reader.result ], {
                                            type: BlobType.MP4
                                        }));
                                    })) ];

                                  case 2:
                                    res = _a.sent();
                                    if (res === ErrorTag.GET_INFO_TIMEOUT) return [ 2, {
                                        width,
                                        height,
                                        duration
                                    } ];
                                    return [ 4, this.getFirstFrameBlob(video, {
                                        width: video.videoWidth,
                                        height: video.videoHeight
                                    }) ];

                                  case 3:
                                    blob = _a.sent();
                                    return [ 2, {
                                        blob,
                                        width: video.videoWidth,
                                        height: video.videoHeight,
                                        duration: video.duration
                                    } ];
                                }
                            }));
                        }));
                    };
                    BaseUpload.prototype.getFirstFrame = function(file) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var reader, image;
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    if (file.firstFrame) return [ 2, file.firstFrame ];
                                    reader = new FileReader;
                                    reader.readAsArrayBuffer(file);
                                    return [ 4, new Promise((function(resolve) {
                                        return reader.onload = resolve;
                                    })) ];

                                  case 1:
                                    _a.sent();
                                    image = new Image;
                                    return [ 4, new Promise((function(resolve) {
                                        image.src = URL.createObjectURL(new Blob([ reader.result ]));
                                        image.onload = resolve;
                                    })) ];

                                  case 2:
                                    _a.sent();
                                    return [ 4, this.getFirstFrameBlob(image) ];

                                  case 3:
                                    return [ 2, _a.sent() ];
                                }
                            }));
                        }));
                    };
                    return BaseUpload;
                }();
                var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZpdcpswEMdXwp2kM23DDeIb1DlBdYO6N7Dj9qFv8QnsnMB5T1MnN0hOEHKC2CcoR8DJUz5A3bX5EBgHMLINM/nNMIDAZv9IWq1WALyzWxhoQI5N03VdwTgTTLJD/NcWFpv+Rji42bSXIKfSk5ZhGBbrOg6UpJSAl/NPAg0Z4GFgcDEkXHvSu2r8fLyGNVlLgG/4CBaG68BGIaeN3uMlFKSQAGwqTSnlGA8FbAbr6Yl1P/527Lw/4HlvdC++nKDx97A54wmxtyfv6Vl5f5CrBvAPB4yxIWwRfFlDo/dwmnVfpoBdGB+QR8SbAnZpfECWiJUCqB2i8SOoACiijyLO0q6lCvC9DXXY4r59MzjonY7SvFOqF/JdZVWMJ0z0TuO0C0sCXi/MDmhwlVTt/HjGaKNjKI94OTdFsnBJAGdyABrAmCeMczjnpWMewjDkUp+MCXj987mNuyZUl1ayFmICOGcdqDhYC7EWEgqgkBid0neoPq2FrQtCARTPQz0wVVtDATQZgZqg2hoJAPYVagJTHI3aias0cGUQvWxVQBPqw3InhlrVQLqAWqIK0DLcb4koTFEKZ1Af7OCgEZXJCfbuQ9AEZ3zk/T2YD/sYjeruX+HLDgVIVKUlTRehZua0Iucve0EUC2G6D2qCamsogHKVoLcjT3BO3cXtByhtVge+rXNirQbb7C3oSVzZaPhRkLyl6BH7wT/Q0qTkDT9+aAdnsXHAdVlmIinnQ6Zq5pmOsd3egAY8T16q5zEBH345Fu4mUBp2sFQC7BuUx05mshvJO7AW+jjruYVyCEqKPT/zq/19cDzPI3fahJJQBjtZluo5NfYFndxhhkMkC1NjIfIeUK3QghJbnbQL6QK6ji2lrg5dHrJl1ZrBymjU6DlnVRBBNpAtq67nSK+bQ6Yp2VUU3/jhW/fkXODYvog8xhO54zcUceKL2PTMzclqNipVW+S7I29TZJFvrQiaMth+ErgJeqDAr4/ez4KClJoCYI20pfQ6a6YkaZyZ0hLWOoYHaPvUAHcCh3qBMU+wan8I8U8NZjTro4kTztYsPNfyqcE7u+Y/rqRF6gCYs7oAAAAASUVORK5CYII=";
                var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB7ZU7DsIwDIadDrAhjsAVuAEsiAllZGDgJr1KuzF27AY36BV6BDYeQ0OMWgEljRO3EkLKJ1WqXD9+uXEMEAgE/oGFlFPwxDUmohxWcheP1aRYy+0MHEFfjFltdjHlK2wfpdxPL6oq9OtMP6UQ92WeHUogiis1OjYxNxHNT1ly7vK3diDTgUJES0yECTGxrRPt4hhrK45YO/BKvNeJq7fE350wFc+zpKRyOwmgRHCLewnoEoF2bnFvASYRtZlVnCXAIAK4xRHyHjBzdbTRMH7B54Grzc93l3uilwDTaUc7NaKDCLCNmss90UuAy5xzRZACfC4ZjgjPZUSPWlvEAMsIUvCYc/RpFphQkFLLyImF7gR4wokJBAI/4QEU9ugZiVYQzwAAAABJRU5ErkJggg==";
                var IMAGE_TYPE = [ "image/gif", "image/png", "image/jpeg", "image/bmp", "image/jpg", "image/webp", "image/svg" ];
                var VIDEO_TYPE = [ "video/webm", "video/ogg", "video/mp4" ];
                var PDF_TYPE = [ "application/pdf" ];
                var EXCEL_TYPE = [ "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ];
                var getFileType = function(type) {
                    if (IMAGE_TYPE.includes(type)) return "IMAGE";
                    if (VIDEO_TYPE.includes(type)) return "VIDEO";
                    if (PDF_TYPE.includes(type) || EXCEL_TYPE.includes(type)) return "FILE";
                    return "IMAGE";
                };
                var en = {
                    "SLHttpUpload.image.fail.size": "Upload less than {{max}} MB image",
                    "SLHttpUpload.image.fail.px": "Upload less than {{limitPx}} MB file",
                    "SLHttpUpload.uploadfile.fail.title": "Failed to upload",
                    "SLHttpUpload.uploadfile.fail.illegal": "The file is illegal and cannot be uploaded"
                };
                var id = {
                    "SLHttpUpload.image.fail.size": "ukurannya tidak boleh melebihi{{max}}MB",
                    "SLHttpUpload.image.fail.px": "File telah melebihi resolusi maksimum {{limitPx}}MP. Silakan kurangi resolusi, lalu coba lagi",
                    "SLHttpUpload.uploadfile.fail.title": "gagal mengunggah",
                    "SLHttpUpload.uploadfile.fail.illegal": "File tersebut ilegal dan tidak dapat diunggah"
                };
                var ms = {
                    "SLHttpUpload.image.fail.size": "Saiz tidak boleh melebihi {{max}}MB",
                    "SLHttpUpload.image.fail.px": "Dokumen melebihi resolusi maksimum {{limitPx}}MP. Sila kurangkan resolusi dan cuba lagi",
                    "SLHttpUpload.uploadfile.fail.title": "Gagal muat naik",
                    "SLHttpUpload.uploadfile.fail.illegal": "Fail itu menyalahi undang-undang dan tidak boleh dimuat naik"
                };
                var th = {
                    "SLHttpUpload.image.fail.size": "ขนาดไม่เกิน {{max}}MB",
                    "SLHttpUpload.image.fail.px": "ไฟล์มีความละเอียดสูงสุด {{limitPx}}MP โปรดลดความละเอียดแล้วลองอีกครั้ง",
                    "SLHttpUpload.uploadfile.fail.title": "การอัปโหลดล้มเหลว",
                    "SLHttpUpload.uploadfile.fail.illegal": "ไฟล์นี้ผิดกฎหมายและไม่สามารถอัพโหลดได้"
                };
                var vi = {
                    "SLHttpUpload.image.fail.size": "Kích thước không được vượt quá {{max}} MB",
                    "SLHttpUpload.image.fail.px": "Tập tin đã vượt quá độ phân giải tối đa{{limitPx}}MP. Xin vui lòng giảm độ phân giải và thử lại",
                    "SLHttpUpload.uploadfile.fail.title": "Tải lên lỗi",
                    "SLHttpUpload.uploadfile.fail.illegal": "Tệp không hợp pháp và không thể tải lên"
                };
                var cn = {
                    "SLHttpUpload.image.fail.size": "大小不能超过{{max}}MB",
                    "SLHttpUpload.image.fail.px": "文件超出了最大分辨率{{limitPx}}MP。请缩减分辨率，然后重试",
                    "SLHttpUpload.uploadfile.fail.title": "上传失败",
                    "SLHttpUpload.uploadfile.fail.illegal": "文件非法不能上传"
                };
                var tw = {
                    "SLHttpUpload.image.fail.size": "大小不能超過{{max}}MB",
                    "SLHttpUpload.image.fail.px": "文件超出了最大分辨率{{limitPx}}MP。請縮減分辨率，然後重試",
                    "SLHttpUpload.uploadfile.fail.title": "上傳失敗",
                    "SLHttpUpload.uploadfile.fail.illegal": "文件非法不能上傳"
                };
                var hk = {
                    "SLHttpUpload.image.fail.size": "大小不能超過{{max}}MB",
                    "SLHttpUpload.image.fail.px": "文件超出了最大分辨率{{limitPx}}MP。請縮減分辨率，然後重試",
                    "SLHttpUpload.uploadfile.fail.title": "上傳失敗",
                    "SLHttpUpload.uploadfile.fail.illegal": "文件非法不能上傳"
                };
                var _a;
                var languageInfos = {
                    "zh-hans-cn": {
                        langInfo: cn
                    },
                    en: {
                        langInfo: en
                    },
                    id: {
                        langInfo: id
                    },
                    ms: {
                        langInfo: ms
                    },
                    th: {
                        langInfo: th
                    },
                    vi: {
                        langInfo: vi
                    },
                    "zh-hant-tw": {
                        langInfo: tw
                    },
                    "zh-hant-hk": {
                        langInfo: hk
                    }
                };
                var defaultLang = "zh-hans-cn";
                var langInfo = {
                    langKey: defaultLang,
                    langVal: (null === (_a = languageInfos[defaultLang]) || void 0 === _a ? void 0 : _a.langInfo) || {}
                };
                var changeLangInfo = function(language) {
                    return initLangInfo(language);
                };
                var initLangInfo = function(language) {
                    var _a;
                    langInfo.langKey = language;
                    langInfo.langVal = (null === (_a = languageInfos[language]) || void 0 === _a ? void 0 : _a.langInfo) || {};
                    return langInfo;
                };
                var getI18n = function(prefix) {
                    return function(key, params) {
                        var trans = langInfo.langVal[prefix + "." + key] || prefix + "." + key;
                        if (params) trans = Object.entries(params).reduce((function(res, _a) {
                            var key = _a[0], val = _a[1];
                            return res.replace("{{" + key + "}}", val);
                        }), trans);
                        return trans;
                    };
                };
                var allSettled = Promise.allSettled ? function(promises) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, Promise.allSettled(promises) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                } : function(promises) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var allsettledModule, allsettled;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, Promise.all([ __webpack_require__.e("vendors-shared_browser_node_modules_promise_allsettled_index_js"), __webpack_require__.e("_22e6") ]).then(__webpack_require__.t.bind(__webpack_require__, "../shared/browser/node_modules/promise.allsettled/index.js", 23)) ];

                              case 1:
                                allsettledModule = _a.sent();
                                allsettled = allsettledModule.default;
                                return [ 4, allsettled(promises) ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                };
                var POSTER_UID_POSTFIX = "_poster";
                var MAX_ERROR_COUNT = 3;
                var nil = function() {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) _args[_i] = arguments[_i];
                };
                var SlAliyunOss = function(_super) {
                    __extends(SlAliyunOss, _super);
                    function SlAliyunOss(_a) {
                        var _b = _a.businessType, businessType = void 0 === _b ? "" : _b, fileType = _a.fileType, _c = _a.client, client = void 0 === _c ? "" : _c, signUrl = _a.signUrl, _d = _a.needProgress, needProgress = void 0 === _d ? false : _d, maxSize = _a.maxSize, maxSizeInfo = _a.maxSizeInfo, maxSizeErrorTitle = _a.maxSizeErrorTitle, maxSizeErrorDesc = _a.maxSizeErrorDesc, limitPx = _a.limitPx, limitPxErrorTitle = _a.limitPxErrorTitle, limitPxErrorDesc = _a.limitPxErrorDesc, getCustomSignHeader = _a.getCustomSignHeader, getCustomOssFormData = _a.getCustomOssFormData, _e = _a.language, language = void 0 === _e ? "zh-hans-cn" : _e;
                        var _this = _super.call(this, {
                            client
                        }) || this;
                        _this.getFirstFrameUrl = function(_a) {
                            var file = _a.file, responseData = _a.responseData;
                            if (getFileType(file.type) === FileType.VIDEO) {
                                if (file.name && file.firstFrame) {
                                    var extraInfo = _this.getExtraUploadData(file, {
                                        ifFirstFrame: !!file.firstFrame
                                    });
                                    return null === extraInfo || void 0 === extraInfo ? void 0 : extraInfo.url;
                                }
                                return null === responseData || void 0 === responseData ? void 0 : responseData.data;
                            } else return;
                        };
                        initLangInfo(language);
                        _this.i18n = getI18n("SLHttpUpload");
                        _this.ossDatas = new Set;
                        _this.businessType = businessType;
                        _this.lock = false;
                        _this.promises = new Map;
                        _this.statusMap = new Map;
                        _this.event = new Event;
                        _this.fileType = fileType || "";
                        _this.signUrl = signUrl || null;
                        _this.backUrlSize = null;
                        _this.needProgress = needProgress;
                        _this.maxSize = maxSize || null;
                        _this.maxSizeInfo = maxSizeInfo || null;
                        _this._maxSizeErrorTitle = maxSizeErrorTitle;
                        _this._maxSizeErrorDesc = maxSizeErrorDesc;
                        _this.limitPx = null !== limitPx && void 0 !== limitPx ? limitPx : 2e7;
                        _this._limitPxErrorTitle = limitPxErrorTitle;
                        _this._limitPxErrorDesc = limitPxErrorDesc;
                        _this.getCustomSignHeader = getCustomSignHeader || null;
                        _this.getCustomOssFormData = getCustomOssFormData || null;
                        _this.firstFrameUrl = {};
                        return _this;
                    }
                    Object.defineProperty(SlAliyunOss.prototype, "maxSizeErrorDesc", {
                        get: function() {
                            return this._maxSizeErrorDesc || this.i18n("image.fail.size");
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(SlAliyunOss.prototype, "limitPxErrorDesc", {
                        get: function() {
                            return this._limitPxErrorDesc || this.i18n("image.fail.px", {
                                limitPx: "" + this.limitPx / 1e6
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(SlAliyunOss.prototype, "maxSizeErrorTitle", {
                        get: function() {
                            return this._maxSizeErrorTitle || this.i18n("uploadfile.fail.title");
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(SlAliyunOss.prototype, "limitPxErrorTitle", {
                        get: function() {
                            return this._limitPxErrorTitle || this.i18n("uploadfile.fail.title");
                        },
                        enumerable: false,
                        configurable: true
                    });
                    SlAliyunOss.prototype.initOSSData = function(fileList) {
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    console.log("isLock", this.lock, fileList);
                                    if (!!this.lock) return [ 3, 2 ];
                                    return [ 4, this.fetchOSSData(fileList) ];

                                  case 1:
                                    _a.sent();
                                    _a.label = 2;

                                  case 2:
                                    return [ 2, Promise.all(this.promises.values()) ];
                                }
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.loadImgWidthAndHeight = function(fileList) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var promiseArr;
                            var _this = this;
                            return __generator(this, (function(_a) {
                                promiseArr = [];
                                fileList.forEach((function(file) {
                                    var type = _this.getFileType(file.type);
                                    if ("IMAGE" === type) {
                                        var p = new Promise((function(resolve) {
                                            var reader = new FileReader;
                                            reader.onload = function(e) {
                                                var _a;
                                                var img = new Image;
                                                img.src = null === (_a = e.target) || void 0 === _a ? void 0 : _a.result;
                                                img.onload = function() {
                                                    file.width = img.width;
                                                    file.height = img.height;
                                                    resolve(true);
                                                };
                                                img.onerror = function() {
                                                    console.error("获取图片宽高失败", file);
                                                    resolve(false);
                                                };
                                            };
                                            reader.readAsDataURL(file);
                                        }));
                                        promiseArr.push(p);
                                    }
                                }));
                                return [ 2, Promise.all(promiseArr) ];
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.getMaxSize = function(fileType) {
                        return (this.getShowMaxSize(fileType) || 1 / 0) * FileSize.MB;
                    };
                    SlAliyunOss.prototype.getShowMaxSize = function(fileType) {
                        var _a;
                        return this.maxSize || (null === (_a = this.maxSizeInfo) || void 0 === _a ? void 0 : _a[getFileType(fileType)]);
                    };
                    SlAliyunOss.prototype.changeLangInfo = function(language) {
                        changeLangInfo(language);
                        this.i18n = getI18n("SLHttpUpload");
                    };
                    SlAliyunOss.prototype.loadVideoInfo = function(fileList) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var promiseArr;
                            var _this = this;
                            return __generator(this, (function(_a) {
                                promiseArr = [];
                                fileList.forEach((function(file) {
                                    return __awaiter(_this, void 0, void 0, (function() {
                                        var type;
                                        return __generator(this, (function(_a) {
                                            type = this.getFileType(file.type);
                                            if (type === FileType.VIDEO) promiseArr.push(this.getVideoData(file).then((function(frameData) {
                                                file.width = frameData.width;
                                                file.height = frameData.height;
                                                file.duration = frameData.duration;
                                                file.firstFrame = frameData.blob;
                                            })));
                                            return [ 2 ];
                                        }));
                                    }));
                                }));
                                return [ 2, Promise.all(promiseArr) ];
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.toast = function(fileName, title, desc) {
                        var _a;
                        var dom = '\n      <div class="sl-http-uploader-notification-body" style="padding: 16px 24px;font-size: 14px;line-height: 20px;background-color: #FFEDC9;border: 1px solid rgba(254, 158, 15, 0.2);border-radius: 4px; margin-bottom: 20px;">\n        <div style="display: flex; align-items: center;">\n          <img style="width: 24px; height: 24px" src=' + img$1 + ' />\n          <div style="flex: 1; margin: 0 20px 0 16px;font-weight: 500;color: #242833;">\n            "' + fileName + '"' + title + '\n          </div>\n          <img class="sl-http-uploader-close" style="width: 16px; height: 16px;cursor:pointer;" src=' + img + ' />\n        </div>\n        <div style="padding: 4px 36px 0 40px;color: #474F5E;">\n          ' + desc + "\n        </div>\n      </div>\n    ";
                        var wrapperEle = document.querySelector(".sl-http-uploader-notification");
                        if (!wrapperEle) {
                            wrapperEle = document.createElement("div");
                            wrapperEle.setAttribute("class", "sl-http-uploader-notification");
                            wrapperEle.setAttribute("style", "position: fixed; top: 80px; right: 24px;z-index: 10001;");
                            document.body.append(wrapperEle);
                        }
                        var contentWrapperEle = document.createElement("div");
                        contentWrapperEle.innerHTML = dom;
                        var innerEle = contentWrapperEle.querySelector(".sl-http-uploader-notification-body");
                        null === (_a = null === innerEle || void 0 === innerEle ? void 0 : innerEle.querySelector(".sl-http-uploader-close")) || void 0 === _a ? void 0 : _a.addEventListener("click", (function() {
                            var _a;
                            null === (_a = null === innerEle || void 0 === innerEle ? void 0 : innerEle.parentNode) || void 0 === _a ? void 0 : _a.removeChild(innerEle);
                        }));
                        setTimeout((function() {
                            var _a;
                            null === (_a = null === innerEle || void 0 === innerEle ? void 0 : innerEle.parentNode) || void 0 === _a ? void 0 : _a.removeChild(innerEle);
                        }), 4e3);
                        innerEle && wrapperEle.append(innerEle);
                    };
                    SlAliyunOss.prototype.fetchOSSData = function(fileList) {
                        var _a, _b;
                        return __awaiter(this, void 0, void 0, (function() {
                            var params, customSignHeader, res, response, err_1;
                            var _this = this;
                            return __generator(this, (function(_c) {
                                switch (_c.label) {
                                  case 0:
                                    this.lock = true;
                                    fileList.forEach((function(item) {
                                        var pro = new Promise((function(resolve) {
                                            _this.event.listen(item.uid + "-done", (function() {
                                                resolve({});
                                            }));
                                        }));
                                        _this.promises.set(item.uid, pro);
                                        _this.statusMap.set(item.uid, 0);
                                        if (_this.isGif(item)) _this.statusMap.set(_this.getPosterUid(item), 0);
                                    }));
                                    return [ 4, this.loadImgWidthAndHeight(fileList) ];

                                  case 1:
                                    _c.sent();
                                    return [ 4, this.loadVideoInfo(fileList).catch((function(e) {
                                        console.error("getInfoError", e);
                                    })) ];

                                  case 2:
                                    _c.sent();
                                    params = {
                                        businessType: this.businessType,
                                        resource: this.fileType || this.getFileType((null === (_a = fileList[0]) || void 0 === _a ? void 0 : _a.type) || ""),
                                        fileInfos: fileList.map((function(file) {
                                            var arr = file.name.split(".");
                                            if (arr.length < 2) {
                                                _this.toast(file.name, _this.i18n("uploadfile.fail.title"), _this.i18n("uploadfile.fail.illegal"));
                                                return null;
                                            }
                                            var ext = arr[arr.length - 1];
                                            var fileType = _this.getFileContentType(ext);
                                            return {
                                                fileName: file.name,
                                                fileSize: file.size,
                                                resource: _this.getFileType(file.type),
                                                type: fileType || file.type || ext,
                                                width: file.width || "",
                                                height: file.height || "",
                                                duration: file.duration || ""
                                            };
                                        }))
                                    };
                                    params.fileInfos = params.fileInfos.filter((function(item, index) {
                                        var _a, _b, _c, _d, _e;
                                        var file = fileList[index];
                                        if ("error" === file.status) {
                                            _this.statusMap.set(String(file.uid), 2);
                                            return false;
                                        }
                                        if (item && item.resource === FileType.VIDEO) if (!item.width || !item.height || !item.duration) {
                                            _this.event.emit(file.uid + "-done");
                                            _this.statusMap.set(String(file.uid), 2);
                                            return false;
                                        }
                                        if (item && item.resource === FileType.IMAGE) {
                                            if (!item.width || !item.height) {
                                                _this.event.emit(file.uid + "-done");
                                                _this.statusMap.set(String(file.uid), 2);
                                                return false;
                                            }
                                            if (_this.limitPx && item.width * item.height > _this.limitPx) {
                                                _this.toast(item.fileName, null !== (_a = _this.limitPxErrorTitle) && void 0 !== _a ? _a : "", null !== (_b = _this.limitPxErrorDesc) && void 0 !== _b ? _b : "");
                                                _this.event.emit(file.uid + "-done");
                                                _this.statusMap.set(String(file.uid), 2);
                                                return false;
                                            }
                                        }
                                        if (item) if ((_this.maxSize || _this.maxSizeInfo) && item.fileSize > _this.getMaxSize(item.resource)) {
                                            _this.toast(item.fileName, null !== (_c = _this.maxSizeErrorTitle) && void 0 !== _c ? _c : "", null !== (_e = null === (_d = _this.maxSizeErrorDesc) || void 0 === _d ? void 0 : _d.replace("{{max}}", "" + _this.getShowMaxSize(item.type))) && void 0 !== _e ? _e : "");
                                            _this.event.emit(file.uid + "-done");
                                            _this.statusMap.set(String(file.uid), 2);
                                            return false;
                                        }
                                        return true;
                                    }));
                                    console.log("signature fileList", params.fileInfos);
                                    if (!params.fileInfos.length) {
                                        this.releaseLock();
                                        return [ 2, Promise.resolve() ];
                                    }
                                    customSignHeader = {};
                                    if (!this.getCustomSignHeader) return [ 3, 4 ];
                                    return [ 4, this.getCustomSignHeader() ];

                                  case 3:
                                    customSignHeader = _c.sent();
                                    _c.label = 4;

                                  case 4:
                                    res = null;
                                    response = null;
                                    _c.label = 5;

                                  case 5:
                                    _c.trys.push([ 5, 7, , 8 ]);
                                    return [ 4, this.httpRequest(this.signUrl || "/api/signature/post/sign", {
                                        credentials: "include",
                                        method: "POST",
                                        data: JSON.stringify(params),
                                        headers: __assign({
                                            "Content-type": "application/json"
                                        }, customSignHeader),
                                        needBasePath: true
                                    }) ];

                                  case 6:
                                    res = _c.sent();
                                    response = res.data;
                                    return [ 3, 8 ];

                                  case 7:
                                    err_1 = _c.sent();
                                    response = err_1;
                                    return [ 3, 8 ];

                                  case 8:
                                    if (200 === (null === res || void 0 === res ? void 0 : res.status)) {
                                        null === (_b = null === response || void 0 === response ? void 0 : response.data) || void 0 === _b ? void 0 : _b.forEach((function(item, index) {
                                            _this.ossDatas.add(__assign({}, item));
                                        }));
                                        fileList.forEach((function(file, idx) {
                                            if (file.firstFrame) file.firstFrameUrl = _this.getFirstFrameUrl({
                                                file
                                            });
                                            file.response = response;
                                            _this.event.emit(file.uid + "-done");
                                        }));
                                        return [ 2, Promise.resolve(response) ];
                                    }
                                    fileList.forEach((function(file) {
                                        file.response = response;
                                        _this.event.emit(file.uid + "-done");
                                    }));
                                    this.releaseLock();
                                    return [ 2, Promise.reject(response) ];
                                }
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.getExtraData = function(data, extraInfo) {
                        var _a, _b, _c;
                        var rest = {};
                        if (null === data || void 0 === data ? void 0 : data.extraMap) Object.keys(null === data || void 0 === data ? void 0 : data.extraMap).forEach((function(item) {
                            rest[item] = null === data || void 0 === data ? void 0 : data.extraMap[item];
                        }));
                        if (data.callBack) rest.callBack = data.callBack;
                        var fileType = null === (_a = null === data || void 0 === data ? void 0 : data.fileName) || void 0 === _a ? void 0 : _a.split(".").pop();
                        if (fileType) {
                            var contentType = fileTypeMap.get(fileType.toLocaleLowerCase());
                            if (contentType) rest["Content-type"] = contentType;
                        }
                        if (extraInfo.fileType === FileType.VIDEO && !(null === (_b = data.extraMap) || void 0 === _b ? void 0 : _b["x:originfilename"])) {
                            rest["x:uploadvideofirstframe"] = extraInfo.ifFirstFrame;
                            if (extraInfo.ifFirstFrame) {
                                rest["x:videofirstframeurl"] = encodeURIComponent(this.firstFrameUrl[data.fileName] || "null");
                                this.firstFrameUrl[data.fileName] = void 0;
                            } else rest["x:videofirstframeurl"] = "null";
                        }
                        var customData = null === (_c = this.getCustomOssFormData) || void 0 === _c ? void 0 : _c.call(this, data);
                        return __assign(__assign({
                            key: null === data || void 0 === data ? void 0 : data.key,
                            OSSAccessKeyId: null === data || void 0 === data ? void 0 : data.accessId,
                            policy: null === data || void 0 === data ? void 0 : data.policy,
                            Signature: null === data || void 0 === data ? void 0 : data.signature,
                            success_action_status: "200"
                        }, rest), customData);
                    };
                    SlAliyunOss.prototype.getExtraUploadData = function(file, extraInfo) {
                        var _this = this;
                        var _a;
                        return null === (_a = Array.from(this.ossDatas).filter((function(item) {
                            var _a;
                            var ifFirstFrameData = (null === (_a = item.extraMap) || void 0 === _a ? void 0 : _a["x:originfilename"]) === file.name;
                            ifFirstFrameData && (_this.firstFrameUrl[file.name] = item.url);
                            return _this.getFileType(file.type) === FileType.VIDEO ? extraInfo.ifFirstFrame ? ifFirstFrameData : false : ifFirstFrameData;
                        }))) || void 0 === _a ? void 0 : _a[0];
                    };
                    SlAliyunOss.prototype.getPosterUid = function(file) {
                        return "" + file.uid + POSTER_UID_POSTFIX;
                    };
                    SlAliyunOss.prototype.isGif = function(file) {
                        return "image/gif" === file.type;
                    };
                    SlAliyunOss.prototype.uploadFileWithRetry = function(payload, max) {
                        if (void 0 === max) max = 1;
                        return __awaiter(this, void 0, void 0, (function() {
                            var err_2;
                            return __generator(this, (function(_a) {
                                switch (_a.label) {
                                  case 0:
                                    _a.trys.push([ 0, 2, , 6 ]);
                                    return [ 4, this.uploadFile(payload) ];

                                  case 1:
                                  case 3:
                                    return [ 2, _a.sent() ];

                                  case 2:
                                    err_2 = _a.sent();
                                    if (!(max < MAX_ERROR_COUNT)) return [ 3, 4 ];
                                    max += 1;
                                    return [ 4, this.uploadFileWithRetry(payload, max) ];

                                  case 4:
                                    console.error(err_2);
                                    return [ 2, Promise.resolve(err_2) ];

                                  case 5:
                                    return [ 3, 6 ];

                                  case 6:
                                    return [ 2 ];
                                }
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.uploadFile = function(_a) {
                        var file = _a.file, _b = _a.onProgress, onProgress = void 0 === _b ? nil : _b, _c = _a.$preprocessData, $preprocessData = void 0 === _c ? null : _c;
                        return __awaiter(this, void 0, void 0, (function() {
                            var data, extraUploadData, frameFile, re, formData, extraData, option, response, success, isAllDone;
                            return __generator(this, (function(_d) {
                                switch (_d.label) {
                                  case 0:
                                    data = {};
                                    if (!$preprocessData) return [ 3, 1 ];
                                    data = $preprocessData;
                                    return [ 3, 6 ];

                                  case 1:
                                    extraUploadData = this.getExtraUploadData(file, {
                                        ifFirstFrame: !!file.firstFrame
                                    });
                                    if (!extraUploadData) return [ 3, 4 ];
                                    return [ 4, this.getFirstFrame(file) ];

                                  case 2:
                                    frameFile = _d.sent();
                                    frameFile.uid = this.getPosterUid({
                                        uid: file.uid
                                    });
                                    return [ 4, this.uploadFileWithRetry({
                                        file: frameFile,
                                        onProgress,
                                        $preprocessData: extraUploadData
                                    }) ];

                                  case 3:
                                    re = _d.sent();
                                    if (re instanceof Error) return [ 2, Promise.reject(re) ];
                                    return [ 3, 5 ];

                                  case 4:
                                    if (this.isGif(file)) this.statusMap.set(this.getPosterUid(file), 1);
                                    _d.label = 5;

                                  case 5:
                                    this.ossDatas.forEach((function(item) {
                                        if (item.fileName === file.name) data = item;
                                    }));
                                    _d.label = 6;

                                  case 6:
                                    if (!(null === data || void 0 === data ? void 0 : data.signature)) {
                                        this.releaseLock();
                                        return [ 2, Promise.reject(new Error("获取签名失败")) ];
                                    }
                                    formData = new FormData;
                                    extraData = this.getExtraData(data, {
                                        ifFirstFrame: !!file.firstFrame,
                                        fileType: this.getFileType(file.type)
                                    });
                                    Object.keys(extraData).forEach((function(key) {
                                        formData.append(key, extraData[key]);
                                    }));
                                    formData.append("file", file);
                                    formData.append("date", (new Date).getTime().toString());
                                    option = {
                                        method: "POST",
                                        data: formData,
                                        needBasePath: false
                                    };
                                    if (onProgress) option.onUploadProgress = function(progressEvent) {
                                        onProgress({
                                            percent: progressEvent.loaded / progressEvent.total,
                                            extraData
                                        });
                                    };
                                    _d.label = 7;

                                  case 7:
                                    _d.trys.push([ 7, 9, , 10 ]);
                                    return [ 4, this.httpRequest(null === data || void 0 === data ? void 0 : data.host, option) ];

                                  case 8:
                                    response = _d.sent();
                                    success = true;
                                    if (200 === response.status) this.statusMap.set(file.uid, 1); else {
                                        this.statusMap.set(file.uid, 2);
                                        success = false;
                                    }
                                    isAllDone = this.isAllDone();
                                    if (isAllDone) {
                                        this.onEnd();
                                        this.releaseLock();
                                    }
                                    if (200 === response.status) {
                                        !file.firstFrameUrl && (file.firstFrameUrl = this.getFirstFrameUrl({
                                            file,
                                            responseData: response.data
                                        }));
                                        return [ 2, Promise.resolve({
                                            data: [ {
                                                url: this.getImageUrl(null === data || void 0 === data ? void 0 : data.url, Boolean(extraUploadData)),
                                                success,
                                                filename: file.name,
                                                file
                                            } ],
                                            response: null === response || void 0 === response ? void 0 : response.data
                                        }) ];
                                    }
                                    file.response = null === response || void 0 === response ? void 0 : response.data;
                                    return [ 2, Promise.reject({
                                        data: [ {
                                            url: null,
                                            success: false,
                                            filename: file.name,
                                            file
                                        } ],
                                        response: null === response || void 0 === response ? void 0 : response.data
                                    }) ];

                                  case 9:
                                    _d.sent();
                                    this.statusMap.set(file.uid, 2);
                                    isAllDone = this.isAllDone();
                                    if (isAllDone) {
                                        this.onEnd();
                                        this.releaseLock();
                                    }
                                    return [ 2, Promise.reject({
                                        data: [ {
                                            url: null,
                                            success: false,
                                            filename: file.name,
                                            file
                                        } ],
                                        response: {}
                                    }) ];

                                  case 10:
                                    return [ 2 ];
                                }
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.getossDatas = function() {
                        return this.ossDatas;
                    };
                    SlAliyunOss.prototype.getFileType = function(type) {
                        if (this.fileType) return this.fileType;
                        return getFileType(type);
                    };
                    SlAliyunOss.prototype.getFileContentType = function(ext) {
                        return fileTypeMap.get(ext.toLocaleLowerCase());
                    };
                    SlAliyunOss.prototype.isAllDone = function() {
                        var obj = Object.fromEntries(this.statusMap.entries());
                        var isAllDone = Object.values(obj).every((function(item) {
                            return 0 !== item;
                        }));
                        return isAllDone;
                    };
                    SlAliyunOss.prototype.onEnd = function() {
                        this.ossDatas = new Set;
                        this.promises = new Map;
                    };
                    SlAliyunOss.prototype.releaseLock = function() {
                        this.lock = false;
                    };
                    SlAliyunOss.prototype.upload = function(_a) {
                        var fileList = _a.fileList;
                        return __awaiter(this, void 0, void 0, (function() {
                            var files, maxSize, promises, res;
                            var _this = this;
                            return __generator(this, (function(_b) {
                                switch (_b.label) {
                                  case 0:
                                    files = fileList.map((function(item) {
                                        return item.file;
                                    }));
                                    fileList.forEach((function(_a) {
                                        var file = _a.file, onError = _a.onError;
                                        if (_this.maxSize || _this.maxSizeInfo) if (file.size > _this.getMaxSize(file.type)) {
                                            if (onError) onError(new Error("超出大小限制"), {
                                                error: "overMaxSize",
                                                file,
                                                data: null,
                                                response: {
                                                    code: "overMaxSize",
                                                    msg: "超过图片大小限制"
                                                }
                                            });
                                            return Promise.reject({
                                                error: "overMaxSize",
                                                file,
                                                data: null,
                                                response: {
                                                    code: "overMaxSize",
                                                    msg: "超过图片大小限制"
                                                }
                                            });
                                        }
                                    }));
                                    maxSize = this.maxSize || this.maxSizeInfo;
                                    if (maxSize) files = files.filter((function(file) {
                                        return file.size <= _this.getMaxSize(file.type);
                                    }));
                                    if (0 === files.length) return [ 2 ];
                                    return [ 4, this.initOSSData(files) ];

                                  case 1:
                                    _b.sent();
                                    promises = [];
                                    fileList.forEach((function(_a) {
                                        var file = _a.file, onProgress = _a.onProgress;
                                        var params = {
                                            file,
                                            onProgress: nil
                                        };
                                        if (_this.needProgress) params.onProgress = function() {};
                                        if (onProgress) params.onProgress = onProgress;
                                        promises.push(_this.uploadFile(params).catch((function(e) {
                                            if (e.data) return e;
                                            return {
                                                error: e,
                                                data: null,
                                                response: file.response,
                                                file
                                            };
                                        })));
                                    }));
                                    return [ 4, allSettled(promises) ];

                                  case 2:
                                    res = _b.sent();
                                    return [ 2, res.map((function(item) {
                                        return item.value;
                                    })) ];
                                }
                            }));
                        }));
                    };
                    SlAliyunOss.prototype.getImageUrl = function(url, hasFirstFrame) {
                        var _a, _b, _c;
                        var obj = new URL(url);
                        if (hasFirstFrame) obj.searchParams.set("_f", "1");
                        if (this.backUrlSize && (null === (_a = this.backUrlSize) || void 0 === _a ? void 0 : _a.width)) {
                            var origin_1 = obj.origin, pathname = obj.pathname;
                            var _d = pathname.split("."), prefix = _d[0], suffix = _d[1];
                            return "" + origin_1 + prefix + "_" + (null === (_b = this.backUrlSize) || void 0 === _b ? void 0 : _b.width) + "x" + (null === (_c = this.backUrlSize) || void 0 === _c ? void 0 : _c.height) + "." + suffix;
                        }
                        return obj.toString();
                    };
                    return SlAliyunOss;
                }(BaseUpload);
                exports.SlAliyunOss = SlAliyunOss;
                exports.getFileType = getFileType;
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            }));
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
        "../shared/browser/biz-com/customer/utils/url.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                getUrlQuery: () => getUrlQuery
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
                    const locationHref = window.location.href;
                    const urlParse = url__WEBPACK_IMPORTED_MODULE_0__.parse(decodeURIComponent(locationHref));
                    const urlQuery = urlParse && urlParse.query;
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
                const locationHref = href || window.location.href;
                const urlParse = url__WEBPACK_IMPORTED_MODULE_0__.parse(decodeURIComponent(locationHref));
                const urlQuery = urlParse && urlParse.query;
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
                const urlParse = url__WEBPACK_IMPORTED_MODULE_0__.parse(u);
                const urlArr = urlParse && urlParse.pathname && urlParse.pathname.replace(/^\//, "").split("/") || [];
                if (index < 0) return urlArr[urlArr.length + index];
                return urlArr[index];
            }
            function stringifyUrl(originUrl, params, sign = "?") {
                const keys = Object.keys(params);
                if (!keys.length) return originUrl;
                return `${originUrl}${originUrl.includes(sign) ? "" : sign}${keys.map((key => {
                    let value = null !== params[key] && void 0 !== params[key] ? params[key] : "";
                    if ("object" === typeof value) value = JSON.stringify(value);
                    return `${key}=${window.encodeURIComponent(value)}`;
                })).join("&")}`;
            }
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
        "../shared/browser/node_modules/dayjs/dayjs.min.js": function(module) {
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
        "../shared/browser/node_modules/eventemitter3/index.js": module => {
            "use strict";
            var has = Object.prototype.hasOwnProperty, prefix = "~";
            function Events() {}
            if (Object.create) {
                Events.prototype = Object.create(null);
                if (!(new Events).__proto__) prefix = false;
            }
            function EE(fn, context, once) {
                this.fn = fn;
                this.context = context;
                this.once = once || false;
            }
            function addListener(emitter, event, fn, context, once) {
                if ("function" !== typeof fn) throw new TypeError("The listener must be a function");
                var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
                if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++; else if (!emitter._events[evt].fn) emitter._events[evt].push(listener); else emitter._events[evt] = [ emitter._events[evt], listener ];
                return emitter;
            }
            function clearEvent(emitter, evt) {
                if (0 === --emitter._eventsCount) emitter._events = new Events; else delete emitter._events[evt];
            }
            function EventEmitter() {
                this._events = new Events;
                this._eventsCount = 0;
            }
            EventEmitter.prototype.eventNames = function() {
                var events, name, names = [];
                if (0 === this._eventsCount) return names;
                for (name in events = this._events) if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
                if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
                return names;
            };
            EventEmitter.prototype.listeners = function(event) {
                var evt = prefix ? prefix + event : event, handlers = this._events[evt];
                if (!handlers) return [];
                if (handlers.fn) return [ handlers.fn ];
                for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
                return ee;
            };
            EventEmitter.prototype.listenerCount = function(event) {
                var evt = prefix ? prefix + event : event, listeners = this._events[evt];
                if (!listeners) return 0;
                if (listeners.fn) return 1;
                return listeners.length;
            };
            EventEmitter.prototype.emit = function(event, a1, a2, a3, a4, a5) {
                var evt = prefix ? prefix + event : event;
                if (!this._events[evt]) return false;
                var args, i, listeners = this._events[evt], len = arguments.length;
                if (listeners.fn) {
                    if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
                    switch (len) {
                      case 1:
                        return listeners.fn.call(listeners.context), true;

                      case 2:
                        return listeners.fn.call(listeners.context, a1), true;

                      case 3:
                        return listeners.fn.call(listeners.context, a1, a2), true;

                      case 4:
                        return listeners.fn.call(listeners.context, a1, a2, a3), true;

                      case 5:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

                      case 6:
                        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
                    }
                    for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
                    listeners.fn.apply(listeners.context, args);
                } else {
                    var j, length = listeners.length;
                    for (i = 0; i < length; i++) {
                        if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
                        switch (len) {
                          case 1:
                            listeners[i].fn.call(listeners[i].context);
                            break;

                          case 2:
                            listeners[i].fn.call(listeners[i].context, a1);
                            break;

                          case 3:
                            listeners[i].fn.call(listeners[i].context, a1, a2);
                            break;

                          case 4:
                            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                            break;

                          default:
                            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
                            listeners[i].fn.apply(listeners[i].context, args);
                        }
                    }
                }
                return true;
            };
            EventEmitter.prototype.on = function(event, fn, context) {
                return addListener(this, event, fn, context, false);
            };
            EventEmitter.prototype.once = function(event, fn, context) {
                return addListener(this, event, fn, context, true);
            };
            EventEmitter.prototype.removeListener = function(event, fn, context, once) {
                var evt = prefix ? prefix + event : event;
                if (!this._events[evt]) return this;
                if (!fn) {
                    clearEvent(this, evt);
                    return this;
                }
                var listeners = this._events[evt];
                if (listeners.fn) {
                    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
                } else {
                    for (var i = 0, events = [], length = listeners.length; i < length; i++) if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
                    if (events.length) this._events[evt] = 1 === events.length ? events[0] : events; else clearEvent(this, evt);
                }
                return this;
            };
            EventEmitter.prototype.removeAllListeners = function(event) {
                var evt;
                if (event) {
                    evt = prefix ? prefix + event : event;
                    if (this._events[evt]) clearEvent(this, evt);
                } else {
                    this._events = new Events;
                    this._eventsCount = 0;
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.addListener = EventEmitter.prototype.on;
            EventEmitter.prefixed = prefix;
            EventEmitter.EventEmitter = EventEmitter;
            if (true) module.exports = EventEmitter;
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
        "../shared/browser/node_modules/lodash/_arrayMap.js": module => {
            function arrayMap(array, iteratee) {
                var index = -1, length = null == array ? 0 : array.length, result = Array(length);
                while (++index < length) result[index] = iteratee(array[index], index, array);
                return result;
            }
            module.exports = arrayMap;
        },
        "../shared/browser/node_modules/lodash/_baseGet.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var castPath = __webpack_require__("../shared/browser/node_modules/lodash/_castPath.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js");
            function baseGet(object, path) {
                path = castPath(path, object);
                var index = 0, length = path.length;
                while (null != object && index < length) object = object[toKey(path[index++])];
                return index && index == length ? object : void 0;
            }
            module.exports = baseGet;
        },
        "../shared/browser/node_modules/lodash/_castPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), isKey = __webpack_require__("../shared/browser/node_modules/lodash/_isKey.js"), stringToPath = __webpack_require__("../shared/browser/node_modules/lodash/_stringToPath.js"), toString = __webpack_require__("../shared/browser/node_modules/lodash/toString.js");
            function castPath(value, object) {
                if (isArray(value)) return value;
                return isKey(value, object) ? [ value ] : stringToPath(toString(value));
            }
            module.exports = castPath;
        },
        "../shared/browser/node_modules/lodash/_copyArray.js": module => {
            function copyArray(source, array) {
                var index = -1, length = source.length;
                array || (array = Array(length));
                while (++index < length) array[index] = source[index];
                return array;
            }
            module.exports = copyArray;
        },
        "../shared/browser/node_modules/lodash/_isKey.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), isSymbol = __webpack_require__("../shared/browser/node_modules/lodash/isSymbol.js");
            var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
            function isKey(value, object) {
                if (isArray(value)) return false;
                var type = typeof value;
                if ("number" == type || "symbol" == type || "boolean" == type || null == value || isSymbol(value)) return true;
                return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object);
            }
            module.exports = isKey;
        },
        "../shared/browser/node_modules/lodash/_memoizeCapped.js": module => {
            function identity(value) {
                return value;
            }
            module.exports = identity;
        },
        "../shared/browser/node_modules/lodash/_stringToPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var memoizeCapped = __webpack_require__("../shared/browser/node_modules/lodash/_memoizeCapped.js");
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
        "../shared/browser/node_modules/lodash/_toKey.js": module => {
            function identity(value) {
                return value;
            }
            module.exports = identity;
        },
        "../shared/browser/node_modules/lodash/get.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var baseGet = __webpack_require__("../shared/browser/node_modules/lodash/_baseGet.js");
            function get(object, path, defaultValue) {
                var result = null == object ? void 0 : baseGet(object, path);
                return void 0 === result ? defaultValue : result;
            }
            module.exports = get;
        },
        "../shared/browser/node_modules/lodash/isArray.js": module => {
            var isArray = Array.isArray;
            module.exports = isArray;
        },
        "../shared/browser/node_modules/lodash/isSymbol.js": module => {
            function stubFalse() {
                return false;
            }
            module.exports = stubFalse;
        },
        "../shared/browser/node_modules/lodash/toPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var arrayMap = __webpack_require__("../shared/browser/node_modules/lodash/_arrayMap.js"), copyArray = __webpack_require__("../shared/browser/node_modules/lodash/_copyArray.js"), isArray = __webpack_require__("../shared/browser/node_modules/lodash/isArray.js"), isSymbol = __webpack_require__("../shared/browser/node_modules/lodash/isSymbol.js"), stringToPath = __webpack_require__("../shared/browser/node_modules/lodash/_stringToPath.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js"), toString = __webpack_require__("../shared/browser/node_modules/lodash/toString.js");
            function toPath(value) {
                if (isArray(value)) return arrayMap(value, toKey);
                return isSymbol(value) ? [ value ] : copyArray(stringToPath(toString(value)));
            }
            module.exports = toPath;
        },
        "../shared/browser/node_modules/lodash/toString.js": module => {
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
        "../shared/browser/node_modules/axios/package.json": module => {
            "use strict";
            module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        var getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__;
        var leafPrototypes;
        __webpack_require__.t = function(value, mode) {
            if (1 & mode) value = this(value);
            if (8 & mode) return value;
            if ("object" === typeof value && value) {
                if (4 & mode && value.__esModule) return value;
                if (16 & mode && "function" === typeof value.then) return value;
            }
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            var def = {};
            leafPrototypes = leafPrototypes || [ null, getProto({}), getProto([]), getProto(getProto) ];
            for (var current = 2 & mode && value; "object" == typeof current && !~leafPrototypes.indexOf(current); current = getProto(current)) Object.getOwnPropertyNames(current).forEach((key => def[key] = () => value[key]));
            def["default"] = () => value;
            __webpack_require__.d(ns, def);
            return ns;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.f = {};
        __webpack_require__.e = chunkId => Promise.all(Object.keys(__webpack_require__.f).reduce(((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }), []));
    })();
    (() => {
        __webpack_require__.u = chunkId => chunkId + ".js";
    })();
    (() => {
        __webpack_require__.miniCssF = chunkId => {
            if ("message" === chunkId) return "customer/message/index.min.modern.css";
            return;
        };
    })();
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "Arise:";
        __webpack_require__.l = (url, done, key, chunkId) => {
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            var script, needAttach;
            if (void 0 !== key) {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var s = scripts[i];
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                }
            }
            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;
                if (__webpack_require__.nc) script.setAttribute("nonce", __webpack_require__.nc);
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                script.src = url;
            }
            inProgress[url] = [ done ];
            var onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var doneFns = inProgress[url];
                delete inProgress[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach((fn => fn(event)));
                if (prev) return prev(event);
            };
            var timeout = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: script
            }), 12e4);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        };
    })();
    (() => {
        __webpack_require__.r = exports => {
            if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        __webpack_require__.nmd = module => {
            module.paths = [];
            if (!module.children) module.children = [];
            return module;
        };
    })();
    (() => {
        var scriptUrl;
        if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
        var document = __webpack_require__.g.document;
        if (!scriptUrl && document) {
            if (document.currentScript) scriptUrl = document.currentScript.src;
            if (!scriptUrl) {
                var scripts = document.getElementsByTagName("script");
                if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
            }
        }
        if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
        scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
        __webpack_require__.p = scriptUrl + "../../";
    })();
    (() => {
        var installedChunks = {
            message: 0
        };
        __webpack_require__.f.j = (chunkId, promises) => {
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
            if (0 !== installedChunkData) if (installedChunkData) promises.push(installedChunkData[2]); else if (true) {
                var promise = new Promise(((resolve, reject) => installedChunkData = installedChunks[chunkId] = [ resolve, reject ]));
                promises.push(installedChunkData[2] = promise);
                var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                var error = new Error;
                var loadingEnded = event => {
                    if (__webpack_require__.o(installedChunks, chunkId)) {
                        installedChunkData = installedChunks[chunkId];
                        if (0 !== installedChunkData) installedChunks[chunkId] = void 0;
                        if (installedChunkData) {
                            var errorType = event && ("load" === event.type ? "missing" : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                            error.name = "ChunkLoadError";
                            error.type = errorType;
                            error.request = realSrc;
                            installedChunkData[1](error);
                        }
                    }
                };
                __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
            } else installedChunks[chunkId] = 0;
        };
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => 0 !== installedChunks[id]))) {
                for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                if (runtime) runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                installedChunks[chunkIds[i]] = 0;
            }
        };
        var chunkLoadingGlobal = self["webpackChunkArise"] = self["webpackChunkArise"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var get = __webpack_require__("../shared/browser/node_modules/lodash/get.js");
        var get_default = __webpack_require__.n(get);
        var toPath = __webpack_require__("../shared/browser/node_modules/lodash/toPath.js");
        var toPath_default = __webpack_require__.n(toPath);
        function nullishCoalescingOperator(...args) {
            const val = args.find((item => {
                if ("function" === typeof item) {
                    const result = item();
                    return null !== result && void 0 !== result;
                }
                return null !== item && void 0 !== item;
            }));
            if (null === val || void 0 === val) return args[args.length - 1];
            return val;
        }
        function syntax_patch_get(obj, ...args) {
            return get_default()(obj, ...args);
        }
        function get_func(obj, path) {
            const pathList = toPath_default()(path);
            const parentPath = pathList.splice(0, pathList.length - 1);
            const key = pathList[0];
            const parent = parentPath.length ? get_default()(obj, parentPath) : obj;
            const exec = (...args) => {
                if (parent && "function" === typeof parent[key]) return parent[key](...args);
                return;
            };
            return {
                value: parent ? parent[key] : void 0,
                exec
            };
        }
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
            const regExp = /\{\{([^{}]+)\}\}/g;
            return nullishCoalescingOperator(get_func(value, "replace").exec(regExp, ((...args) => nullishCoalescingOperator(syntax_patch_get(hash, args[1]), args[0]))), path);
        }
        const getCookie = key => window && window.SL_State && window.SL_State.get(`request.cookie.${key}`);
        var axios = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(axios);
        var query_string = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        const instance = axios_default().create({
            baseURL: "/leproxy/api",
            timeout: 3e4,
            withCredentials: true,
            paramsSerializer(params) {
                return query_string.stringify(params);
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
        const request = instance;
        const udbRequest = {
            get(url, options = {}) {
                return request({
                    method: "GET",
                    baseURL: "/leproxy",
                    url,
                    ...options
                });
            }
        };
        const request_request = request;
        const signOut = params => udbRequest.get("/udb/lgn/login/logout.do", {
            params
        });
        const url_SIGN_IN = "/user/signIn";
        "undefined" === typeof window || window.location.origin;
        function toSignOut() {
            const appid = getCookie("osudb_appid");
            const subappid = getCookie("osudb_subappid");
            return signOut({
                appid,
                subappid
            }).then((() => true));
        }
        const report = (eventid, params) => {
            window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
        };
        const reportV2 = collect => {
            window.HdSdk && window.HdSdk.shopTracker.collect(collect);
        };
        const USER_CENTER_PAGE_ID = 123;
        const USER_MESSAGE = 124;
        const USER_ORDER = 172;
        const USER_CENTER_CID = "60079999";
        const pageToReportConfig = {
            "/user/center": {
                page: USER_CENTER_PAGE_ID,
                module: -999,
                component: 117,
                action_type: 102,
                event_id: 1019
            },
            "/user/message": {
                page: USER_MESSAGE,
                module: -999,
                component: 117,
                action_type: 102,
                event_id: 1026
            },
            "/user/orders": {
                page: USER_ORDER,
                module: -999,
                component: 117,
                action_type: 102,
                event_id: 1627
            }
        };
        const reportSignOut = () => {
            reportV2(pageToReportConfig[window.location.pathname]);
            report(USER_CENTER_CID, {
                event_name: "leave",
                page_dest: `${window.location.origin}/user/signOut`
            });
        };
        const reportClickCenterTab = () => {
            report(USER_CENTER_CID, {
                event_name: "click_component",
                page: "consumer_home",
                custom_component: [ "consumer_info" ]
            });
        };
        const reportClickMessageTab = () => {
            report(USER_CENTER_CID, {
                event_name: "click_component",
                page: "consumer_home",
                custom_component: [ "message" ]
            });
        };
        const reportClickOrderTab = () => {
            report(USER_CENTER_CID, {
                event_name: "click_component",
                page: "consumer_home",
                custom_component: [ "order" ]
            });
        };
        const reportThirdPartPageView = () => {
            window.SL_EventBus.emit("global:thirdPartReport", {
                FBPixel: [ [ "track", "PageView", {}, {
                    eventID: window.SL_State.get("serverEventId")
                } ] ],
                GAAds: [ [ "event", "conversion", null ] ],
                GA: [ [ "event", "page_view", {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search
                } ] ]
            });
        };
        var eventemitter3 = __webpack_require__("../shared/browser/node_modules/eventemitter3/index.js");
        var eventemitter3_default = __webpack_require__.n(eventemitter3);
        if (!window.SL_EventBus) {
            window.SL_EventBus = new (eventemitter3_default());
            window.SL_EventEmitter = eventemitter3_default();
        }
        const {SL_EventBus} = window;
        const {SL_EventEmitter} = window;
        window.SL_EventBus, window.SL_EventEmitter;
        function parsePathToArray_parsePathToArray(path) {
            if ("string" !== typeof path) throw new TypeError("path must be string");
            return path.replace(/\]/, "").split(/[.[]/);
        }
        const utils_parsePathToArray = parsePathToArray_parsePathToArray;
        class SLState {
            constructor(state) {
                this.bus = new SL_EventEmitter;
                this.rootState = state;
            }
            get(path) {
                const keys = utils_parsePathToArray(path);
                const value = keys.reduce(((prev, current) => {
                    if (!prev) return;
                    return prev[current];
                }), this.rootState);
                return value;
            }
            set(path, newValue) {
                if ("function" === typeof newValue) throw TypeError("newValue must not be a function");
                const keys = utils_parsePathToArray(path);
                let oldValue;
                keys.reduce(((prev, current, index) => {
                    if (index === keys.length - 1) {
                        const key = prev;
                        oldValue = key[current];
                        key[current] = newValue;
                    }
                    return prev[current];
                }), this.rootState);
                this.bus.emit(path, newValue, oldValue);
            }
            on(...args) {
                return this.bus.on(...args);
            }
            off(...args) {
                return this.bus.off(...args);
            }
        }
        const __PRELOAD_STATE__ = window.__PRELOAD_STATE__ || {};
        if (!window.SL_State) window.SL_State = new SLState(__PRELOAD_STATE__);
        const {SL_State} = window;
        var url = __webpack_require__("../shared/browser/biz-com/customer/utils/url.js");
        function getEnv(key) {
            const ENV = window.__ENV__ || {};
            if (key) return ENV[key];
            return ENV;
        }
        [ "preview", "product" ].includes(getEnv().APP_ENV || "");
        const CONFIRM_SUBSCRIBE_EMAIL = "confirmSubscribeEmail";
        const toast_LOADING = "loading";
        const toast_getTemplate = (options, type = "default") => {
            const loadingColor = options.loadingColor || "black";
            const templates = {
                [toast_LOADING]: `\n      <div class="mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <span class="mp-loading__spinner mp-loading__spinner--circular">\n            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="${loadingColor}" stroke-width="2.5" stroke-linecap="round"/>\n            </svg>\n          </span>\n        </div>\n        <div class="mp-toast__content mp-toast__text">${options.content}</div>\n      </div>\n    `,
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
        const toast_toast = Toast;
        const tabTypeToReport = {
            center: reportClickCenterTab,
            message: reportClickMessageTab,
            orders: reportClickOrderTab
        };
        __SL_$__((() => {
            const isLogin = SL_State.get("request.is_login");
            if (!isLogin) toSignOut().then((() => {
                window.location.href = url_SIGN_IN;
            }));
            const toast = new toast_toast;
            const from = (0, url.getUrlQuery)("from");
            if (from === CONFIRM_SUBSCRIBE_EMAIL) {
                const hasToast = !!sessionStorage.getItem(CONFIRM_SUBSCRIBE_EMAIL);
                if (!hasToast) {
                    sessionStorage.setItem(CONFIRM_SUBSCRIBE_EMAIL, true);
                    toast.open(t("customer.account.subscribe_confirm_tip"));
                }
            }
            const $center = __SL_$__("#user-center");
            reportThirdPartPageView();
            $center.find(".signout-link").click((() => {
                toSignOut().then((() => {
                    reportSignOut();
                    window.location.href = url_SIGN_IN;
                }));
            }));
            $center.find(".navbar").on("click", ".navbar__item", (e => {
                e.preventDefault();
                const $target = __SL_$__(e.currentTarget);
                const type = $target.data("type");
                const href = $target.attr("href");
                tabTypeToReport[type] && tabTypeToReport[type]();
                window.location.href = href;
            }));
        }));
        var dayjs_min = __webpack_require__("../shared/browser/node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        const {replace} = "";
        const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
        const ca = /[&<>'"]/g;
        const esca = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        };
        const pe = m => esca[m];
        const esm_escape = es => replace.call(es, ca, pe);
        const unes = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"'
        };
        const cape = m => unes[m];
        const esm_unescape = un => replace.call(un, es, cape);
        const sendMessageInSite = data => request_request.post("/sc/mc/shop/online/send", data);
        const queryMessageInSite = data => {
            const {createTime = Date.now(), pageSize = 20} = data;
            return request_request.get(`/sc/mc/shop/online/message?createTime=${createTime}&pageSize=${pageSize}`);
        };
        const ESenderType = {
            merchant: 1,
            user: 2
        };
        const ESendStatus = {
            notSend: 0,
            success: 1,
            fail: -1
        };
        class PreviewImage {
            constructor({id}) {
                this.id = id;
                this.$modal = __SL_$__(`#${this.id}`);
                this.$image = this.$modal.find("img");
                this.init();
            }
            init() {
                this.$modal.on("click", (() => {
                    this.hide();
                }));
            }
            show(src) {
                this.$image.attr("src", src);
                this.$modal.show();
                setTimeout((() => {
                    this.$modal.addClass("fade-in");
                }), 0);
            }
            hide() {
                this.$modal.removeClass("fade-in");
                setTimeout((() => {
                    this.$modal.hide();
                }), 300);
            }
        }
        const message_preview_modal = PreviewImage;
        function getMsgHtml(msgItem) {
            const {content, contentAttachmentUrl, senderType, createTime} = msgItem;
            const time = dayjs_min_default()(createTime).format("MM/DD hh:mm");
            return `\n    <div class="msg-item msg-${senderType === ESenderType.merchant ? "self" : "other"}">\n      <div class="msg-head">\n        <span class="msg-time">${time}</span>\n      </div>\n      <div class="msg-wrap">\n        ${content ? `<p class="msg-text">${esm_unescape(content)}</p>` : ""}\n        ${contentAttachmentUrl ? `<div class="msg-image">\n                <img src="${contentAttachmentUrl}" alt="img" />\n                <div class="mask">\n                </div>\n              </div>` : ""}\n      </div>\n    </div>\n  `;
        }
        class MessageList {
            constructor() {
                this.$container = __SL_$__("#customer-message-list");
                this.$list = this.$container.find(".msg-list");
                this.previewImage = null;
                this.$loading = this.$container.find(".msg-loading");
                this.loading = false;
                this.length = 0;
                this.init();
            }
            init() {
                this.initEvent();
                this.getMsg();
                this.initScroll();
            }
            initEvent() {
                this.previewImage = new message_preview_modal({
                    id: "customer-message-preview-modal"
                });
                this.$container.on("click", ".msg-image", (e => {
                    const src = __SL_$__(e.currentTarget).find("img").attr("src");
                    this.previewImage.show(src);
                }));
            }
            initScroll() {
                this.$container.on("scroll", (e => {
                    if (this.loading) return false;
                    const containerHeight = e.target.clientHeight;
                    const listHeight = this.$list[0].clientHeight;
                    if (e.target.scrollTop + containerHeight - 30 >= listHeight) this.getMsg(this.length + 20);
                }));
            }
            getMsg(length = 20) {
                this.showLoading();
                queryMessageInSite({
                    pageSize: length
                }).then((({data}) => {
                    if (!data || !Array.isArray(data.list)) return;
                    const {list} = data;
                    if (list.length > this.length) {
                        this.length = list.length;
                        this.renderMsg(list);
                    }
                })).finally((() => {
                    this.hideLoading();
                }));
            }
            renderMsg(list) {
                let msgHtml = "";
                list.forEach((msgItem => {
                    msgHtml += getMsgHtml(msgItem);
                }));
                this.$list.html(msgHtml);
            }
            addMessage(item) {
                const msgHtml = getMsgHtml(item);
                this.$list.prepend(msgHtml);
            }
            showLoading() {
                this.loading = true;
                this.$loading.removeClass("hidden");
            }
            hideLoading() {
                setTimeout((() => {
                    this.loading = false;
                }), 500);
                this.$loading.addClass("hidden");
            }
        }
        const message_list = MessageList;
        var dist = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/dist/index.js");
        function filterImages(files) {
            if (!Array.isArray(files)) return [];
            return files.filter((file => {
                const {name} = file;
                if (!name) return false;
                const extCursor = name.lastIndexOf(".");
                if (extCursor < 0) return false;
                const ext = name.slice(extCursor).toLowerCase();
                return validateImageExtension(ext);
            }));
        }
        const IMAGE_EXTENSIONS = [ ".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp", ".png", ".gif", ".webp" ];
        IMAGE_EXTENSIONS.join(",");
        function validateImageExtension(ext) {
            if (!ext) return false;
            return IMAGE_EXTENSIONS.indexOf(ext) >= 0;
        }
        class Upload {
            constructor({id, onSuccess, onError, maxSize = 4, maxNum = 1}) {
                this.ossClient = null;
                this.loading = false;
                this.id = id;
                this.onSuccess = onSuccess;
                this.onError = onError;
                this.curNum = 0;
                this.maxNum = maxNum;
                this.maxSize = maxSize;
                this.$input = __SL_$__(`#${this.id}`).find('input[type="file"]');
                this.$loading = __SL_$__(`#${this.id}`).find(".sl-upload__loading");
                this.$picIcon = __SL_$__(`#${this.id}`).find(".sl-upload__input");
                this.init();
            }
            init() {
                this.initOss();
                this.initEvent();
            }
            setLoading(loading) {
                this.loading = loading;
                if (loading) {
                    this.$loading.show();
                    this.$picIcon.hide();
                } else {
                    this.$loading.hide();
                    this.$picIcon.show();
                }
            }
            initOss() {
                this.ossClient = new dist.SlAliyunOss({
                    businessType: "userMessage",
                    fileType: "IMAGE",
                    client: "shopline-app"
                });
            }
            initEvent() {
                this.$input.on("change", (async e => {
                    const {curNum, maxNum, maxSize} = this;
                    let files = filterImages(Array.from(e.target.files));
                    if (0 === files.length) return;
                    if (files.length + curNum > maxNum) {
                        toast_toast.init({
                            content: t("customer.general.max_image_upload_tips", {
                                max: maxNum
                            })
                        });
                        e.target.value = "";
                        return;
                    }
                    if (maxSize && files.some((file => file.size > 1024 * maxSize * 1024))) {
                        toast_toast.init({
                            content: t("customer.general.image_size_less_than_tips", {
                                max: maxSize
                            })
                        });
                        files = files.filter((file => file.size < 1024 * maxSize * 1024));
                        const hasCanUploadImage = files.some((file => file.size <= 1024 * maxSize * 1024));
                        if (!hasCanUploadImage) return;
                    }
                    e.target.value = "";
                    const tmpFileList = files.map((file => {
                        file.uid = Date.now();
                        return {
                            file
                        };
                    }));
                    this.setLoading(true);
                    try {
                        const res = await this.ossClient.upload({
                            fileList: tmpFileList
                        });
                        const successList = [];
                        const failList = [];
                        res.forEach((item => {
                            if (item.data && item.data[0] && item.data[0].success) successList.push(item && item.data && item.data[0] && item.data[0].url); else failList.push({
                                fileName: item && item.data && item.data[0] && item.data[0].filename
                            });
                        }));
                        if (successList.length) this.onSuccess && this.onSuccess(successList);
                        if (failList.length) this.onError && this.onError(failList);
                    } catch (e) {
                        this.onError && this.onError(e);
                    } finally {
                        this.setLoading(false);
                    }
                }));
            }
        }
        const upload = Upload;
        const pageMap = {
            SignIn: 128,
            SignOut: "",
            SignUp: 129,
            Bind: {
                phone: 135,
                email: 136
            },
            AddressNew: "",
            AddressEdit: 171,
            PasswordNew: 167,
            PasswordNewReset: 168,
            PasswordReset: 134,
            Message: 124,
            Center: 123,
            UnsubFeedback: "",
            LoginModal: 166,
            OrderList: 172
        };
        const ActionType = {
            view: 101,
            click: 102,
            input: 103,
            heartbeat: 106,
            check: 107,
            login: "Login",
            register: "CompleteRegistration"
        };
        const Module = {
            normal: -999,
            loginModal: {
                register: 141,
                login: 142
            },
            userCenter: {
                account: 101,
                subscribe: 102,
                information: 103,
                address: 104
            }
        };
        const reportMessage = config => reportV2({
            page: pageMap.Message,
            ...config
        });
        const reportMessageHeartBeat = time => setInterval((() => {
            reportMessage({
                module: Module.normal,
                component: -999,
                action_type: ActionType.heartbeat,
                event_id: 1024
            });
        }), time);
        const reportMessageSubmit = () => {
            reportMessage({
                module: Module.normal,
                component: 118,
                action_type: ActionType.click,
                event_id: 1025
            });
        };
        class MessageInput {
            constructor({onSuccess}) {
                this.$container = __SL_$__("#customer-message-input");
                this.$input = this.$container.find(".msg-input-area");
                this.$send = this.$container.find(".msg-input-send");
                this.$upload = this.$container.find("#customer-message-upload");
                this.$uploadPreview = this.$container.find(".msg-input-upload__preview");
                this.$uploadPreviewClose = this.$uploadPreview.find(".msg-input-upload__preview--close");
                this.loading = false;
                this.onSuccess = onSuccess;
                this.image = null;
                this.init();
            }
            clearImage() {
                this.image = null;
                this.$uploadPreview.hide();
                this.$upload.show();
            }
            init() {
                this.upload = new upload({
                    id: "customer-message-input",
                    onSuccess: images => {
                        [this.image] = images;
                        this.$upload.hide();
                        this.$uploadPreview.show();
                        this.$uploadPreview.css("background-image", `url(${this.image})`);
                    }
                });
                this.$uploadPreviewClose.on("click", (() => {
                    this.clearImage();
                }));
                this.$send.on("click", (() => {
                    const text = this.$input.val();
                    const img = this.image;
                    if (this.loading || !text && !img) return false;
                    this.loading = true;
                    reportMessageSubmit();
                    const params = {
                        content: text || void 0,
                        attachmentUrl: img || void 0
                    };
                    sendMessageInSite(params).then((() => {
                        const item = {
                            id: (new Date).toUTCString(),
                            conversationId: "0",
                            merchantId: 0,
                            storeId: "0",
                            userId: "0",
                            content: text ? esm_escape(text) : void 0,
                            contentAttachmentUrl: img,
                            senderType: ESenderType.user,
                            sendStatus: ESendStatus.success,
                            createTime: (new Date).toUTCString()
                        };
                        this.$input.val("");
                        this.clearImage();
                        this.onSuccess && this.onSuccess(item);
                    })).finally((() => {
                        this.loading = false;
                    }));
                }));
            }
        }
        const message_input = MessageInput;
        class Message {
            constructor() {
                this.messageList = null;
                this.init();
            }
            init() {
                const isLogin = SL_State.get("request.is_login");
                if (!isLogin) window.location.href = url_SIGN_IN;
                reportMessageHeartBeat(1e4);
                this.initMessageList();
                this.initMessageInput();
            }
            initMessageInput() {
                this.messageInput = new message_input({
                    onSuccess: item => {
                        this.messageList && this.messageList.addMessage(item);
                    }
                });
            }
            initMessageList() {
                this.messageList = new message_list;
            }
        }
        const message = Message;
        __SL_$__((function() {
            new message;
        }));
    })();
})();