(() => {
    var __webpack_modules__ = {
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
        "../shared/browser/biz-com/customer/helpers/udb.sdk.rsa.js": () => {
            (function() {
                var that = {};
                var RSAUtils = {};
                var biRadixBase = 2;
                var biRadixBits = 16;
                var bitsPerDigit = biRadixBits;
                var biRadix = 1 << 16;
                var biHalfRadix = biRadix >>> 1;
                var biRadixSquared = biRadix * biRadix;
                var maxDigitVal = biRadix - 1;
                var maxInteger = 9999999999999998;
                var maxDigits;
                var ZERO_ARRAY;
                var bigZero, bigOne;
                var rsaPubkey_m = "b5f53d3e7ab166d99b91bdee1414364e97a5569d9a4da971dcf241e9aec4ee4ee7a27b203f278be7cc695207d19b9209f0e50a3ea367100e06ad635e4ccde6f8a7179d84b7b9b7365a6a7533a9909695f79f3f531ea3c329b7ede2cd9bb9722104e95c0f234f1a72222b0210579f6582fcaa9d8fa62c431a37d88a4899ebce3d";
                var rsaPubkey_e = "10001";
                var BigInt = that.BigInt = function(flag) {
                    if ("boolean" == typeof flag && true == flag) this.digits = null; else this.digits = ZERO_ARRAY.slice(0);
                    this.isNeg = false;
                };
                RSAUtils.setMaxDigits = function(value) {
                    maxDigits = value;
                    ZERO_ARRAY = new Array(maxDigits);
                    for (var iza = 0; iza < ZERO_ARRAY.length; iza++) ZERO_ARRAY[iza] = 0;
                    bigZero = new BigInt;
                    bigOne = new BigInt;
                    bigOne.digits[0] = 1;
                };
                RSAUtils.setMaxDigits(20);
                var dpl10 = 15;
                RSAUtils.biFromNumber = function(i) {
                    var result = new BigInt;
                    result.isNeg = i < 0;
                    i = Math.abs(i);
                    var j = 0;
                    while (i > 0) {
                        result.digits[j++] = i & maxDigitVal;
                        i = Math.floor(i / biRadix);
                    }
                    return result;
                };
                var lr10 = RSAUtils.biFromNumber(1e15);
                RSAUtils.biFromDecimal = function(s) {
                    var isNeg = "-" == s.charAt(0);
                    var i = isNeg ? 1 : 0;
                    var result;
                    while (i < s.length && "0" == s.charAt(i)) ++i;
                    if (i == s.length) result = new BigInt; else {
                        var digitCount = s.length - i;
                        var fgl = digitCount % dpl10;
                        if (0 == fgl) fgl = dpl10;
                        result = RSAUtils.biFromNumber(Number(s.substr(i, fgl)));
                        i += fgl;
                        while (i < s.length) {
                            result = RSAUtils.biAdd(RSAUtils.biMultiply(result, lr10), RSAUtils.biFromNumber(Number(s.substr(i, dpl10))));
                            i += dpl10;
                        }
                        result.isNeg = isNeg;
                    }
                    return result;
                };
                RSAUtils.biCopy = function(bi) {
                    var result = new BigInt(true);
                    result.digits = bi.digits.slice(0);
                    result.isNeg = bi.isNeg;
                    return result;
                };
                RSAUtils.reverseStr = function(s) {
                    var result = "";
                    for (var i = s.length - 1; i > -1; --i) result += s.charAt(i);
                    return result;
                };
                var hexatrigesimalToChar = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
                RSAUtils.biToString = function(x, radix) {
                    var b = new BigInt;
                    b.digits[0] = radix;
                    var qr = RSAUtils.biDivideModulo(x, b);
                    var result = hexatrigesimalToChar[qr[1].digits[0]];
                    while (1 == RSAUtils.biCompare(qr[0], bigZero)) {
                        qr = RSAUtils.biDivideModulo(qr[0], b);
                        qr[1].digits[0];
                        result += hexatrigesimalToChar[qr[1].digits[0]];
                    }
                    return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result);
                };
                RSAUtils.biToDecimal = function(x) {
                    var b = new BigInt;
                    b.digits[0] = 10;
                    var qr = RSAUtils.biDivideModulo(x, b);
                    var result = String(qr[1].digits[0]);
                    while (1 == RSAUtils.biCompare(qr[0], bigZero)) {
                        qr = RSAUtils.biDivideModulo(qr[0], b);
                        result += String(qr[1].digits[0]);
                    }
                    return (x.isNeg ? "-" : "") + RSAUtils.reverseStr(result);
                };
                var hexToChar = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
                RSAUtils.digitToHex = function(n) {
                    var mask = 15;
                    var result = "";
                    for (var i = 0; i < 4; ++i) {
                        result += hexToChar[n & mask];
                        n >>>= 4;
                    }
                    return RSAUtils.reverseStr(result);
                };
                RSAUtils.biToHex = function(x) {
                    var result = "";
                    RSAUtils.biHighIndex(x);
                    for (var i = RSAUtils.biHighIndex(x); i > -1; --i) result += RSAUtils.digitToHex(x.digits[i]);
                    return result;
                };
                RSAUtils.charToHex = function(c) {
                    var ZERO = 48;
                    var NINE = ZERO + 9;
                    var littleA = 97;
                    var littleZ = littleA + 25;
                    var bigA = 65;
                    var bigZ = 65 + 25;
                    var result;
                    if (c >= ZERO && c <= NINE) result = c - ZERO; else if (c >= bigA && c <= bigZ) result = 10 + c - bigA; else if (c >= littleA && c <= littleZ) result = 10 + c - littleA; else result = 0;
                    return result;
                };
                RSAUtils.hexToDigit = function(s) {
                    var result = 0;
                    var sl = Math.min(s.length, 4);
                    for (var i = 0; i < sl; ++i) {
                        result <<= 4;
                        result |= RSAUtils.charToHex(s.charCodeAt(i));
                    }
                    return result;
                };
                RSAUtils.biFromHex = function(s) {
                    var result = new BigInt;
                    var sl = s.length;
                    for (var i = sl, j = 0; i > 0; i -= 4, ++j) result.digits[j] = RSAUtils.hexToDigit(s.substr(Math.max(i - 4, 0), Math.min(i, 4)));
                    return result;
                };
                RSAUtils.biFromString = function(s, radix) {
                    var isNeg = "-" == s.charAt(0);
                    var istop = isNeg ? 1 : 0;
                    var result = new BigInt;
                    var place = new BigInt;
                    place.digits[0] = 1;
                    for (var i = s.length - 1; i >= istop; i--) {
                        var c = s.charCodeAt(i);
                        var digit = RSAUtils.charToHex(c);
                        var biDigit = RSAUtils.biMultiplyDigit(place, digit);
                        result = RSAUtils.biAdd(result, biDigit);
                        place = RSAUtils.biMultiplyDigit(place, radix);
                    }
                    result.isNeg = isNeg;
                    return result;
                };
                RSAUtils.biDump = function(b) {
                    return (b.isNeg ? "-" : "") + b.digits.join(" ");
                };
                RSAUtils.biAdd = function(x, y) {
                    var result;
                    if (x.isNeg != y.isNeg) {
                        y.isNeg = !y.isNeg;
                        result = RSAUtils.biSubtract(x, y);
                        y.isNeg = !y.isNeg;
                    } else {
                        result = new BigInt;
                        var c = 0;
                        var n;
                        for (var i = 0; i < x.digits.length; ++i) {
                            n = x.digits[i] + y.digits[i] + c;
                            result.digits[i] = n % biRadix;
                            c = Number(n >= biRadix);
                        }
                        result.isNeg = x.isNeg;
                    }
                    return result;
                };
                RSAUtils.biSubtract = function(x, y) {
                    var result;
                    if (x.isNeg != y.isNeg) {
                        y.isNeg = !y.isNeg;
                        result = RSAUtils.biAdd(x, y);
                        y.isNeg = !y.isNeg;
                    } else {
                        result = new BigInt;
                        var n, c;
                        c = 0;
                        for (let i = 0; i < x.digits.length; ++i) {
                            n = x.digits[i] - y.digits[i] + c;
                            result.digits[i] = n % biRadix;
                            if (result.digits[i] < 0) result.digits[i] += biRadix;
                            c = 0 - Number(n < 0);
                        }
                        if (-1 == c) {
                            c = 0;
                            for (let i = 0; i < x.digits.length; ++i) {
                                n = 0 - result.digits[i] + c;
                                result.digits[i] = n % biRadix;
                                if (result.digits[i] < 0) result.digits[i] += biRadix;
                                c = 0 - Number(n < 0);
                            }
                            result.isNeg = !x.isNeg;
                        } else result.isNeg = x.isNeg;
                    }
                    return result;
                };
                RSAUtils.biHighIndex = function(x) {
                    var result = x.digits.length - 1;
                    while (result > 0 && 0 == x.digits[result]) --result;
                    return result;
                };
                RSAUtils.biNumBits = function(x) {
                    var n = RSAUtils.biHighIndex(x);
                    var d = x.digits[n];
                    var m = (n + 1) * bitsPerDigit;
                    var result;
                    for (result = m; result > m - bitsPerDigit; --result) {
                        if (0 != (32768 & d)) break;
                        d <<= 1;
                    }
                    return result;
                };
                RSAUtils.biMultiply = function(x, y) {
                    var result = new BigInt;
                    var c;
                    var n = RSAUtils.biHighIndex(x);
                    var t = RSAUtils.biHighIndex(y);
                    var uv, k, j;
                    for (var i = 0; i <= t; ++i) {
                        c = 0;
                        k = i;
                        for (j = 0; j <= n; ++j, ++k) {
                            uv = result.digits[k] + x.digits[j] * y.digits[i] + c;
                            result.digits[k] = uv & maxDigitVal;
                            c = uv >>> biRadixBits;
                        }
                        result.digits[i + n + 1] = c;
                    }
                    result.isNeg = x.isNeg != y.isNeg;
                    return result;
                };
                RSAUtils.biMultiplyDigit = function(x, y) {
                    var n, c, uv, result;
                    result = new BigInt;
                    n = RSAUtils.biHighIndex(x);
                    c = 0;
                    for (var j = 0; j <= n; ++j) {
                        uv = result.digits[j] + x.digits[j] * y + c;
                        result.digits[j] = uv & maxDigitVal;
                        c = uv >>> biRadixBits;
                    }
                    result.digits[1 + n] = c;
                    return result;
                };
                RSAUtils.arrayCopy = function(src, srcStart, dest, destStart, n) {
                    var m = Math.min(srcStart + n, src.length);
                    for (var i = srcStart, j = destStart; i < m; ++i, ++j) dest[j] = src[i];
                };
                var highBitMasks = [ 0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535 ];
                RSAUtils.biShiftLeft = function(x, n) {
                    var digitCount = Math.floor(n / bitsPerDigit);
                    var result = new BigInt;
                    RSAUtils.arrayCopy(x.digits, 0, result.digits, digitCount, result.digits.length - digitCount);
                    var bits = n % bitsPerDigit;
                    var rightBits = bitsPerDigit - bits;
                    for (var i = result.digits.length - 1, i1 = i - 1; i > 0; --i, --i1) result.digits[i] = result.digits[i] << bits & maxDigitVal | (result.digits[i1] & highBitMasks[bits]) >>> rightBits;
                    result.digits[0] = result.digits[i] << bits & maxDigitVal;
                    result.isNeg = x.isNeg;
                    return result;
                };
                var lowBitMasks = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535 ];
                RSAUtils.biShiftRight = function(x, n) {
                    var digitCount = Math.floor(n / bitsPerDigit);
                    var result = new BigInt;
                    RSAUtils.arrayCopy(x.digits, digitCount, result.digits, 0, x.digits.length - digitCount);
                    var bits = n % bitsPerDigit;
                    var leftBits = bitsPerDigit - bits;
                    for (var i = 0, i1 = i + 1; i < result.digits.length - 1; ++i, ++i1) result.digits[i] = result.digits[i] >>> bits | (result.digits[i1] & lowBitMasks[bits]) << leftBits;
                    result.digits[result.digits.length - 1] >>>= bits;
                    result.isNeg = x.isNeg;
                    return result;
                };
                RSAUtils.biMultiplyByRadixPower = function(x, n) {
                    var result = new BigInt;
                    RSAUtils.arrayCopy(x.digits, 0, result.digits, n, result.digits.length - n);
                    return result;
                };
                RSAUtils.biDivideByRadixPower = function(x, n) {
                    var result = new BigInt;
                    RSAUtils.arrayCopy(x.digits, n, result.digits, 0, result.digits.length - n);
                    return result;
                };
                RSAUtils.biModuloByRadixPower = function(x, n) {
                    var result = new BigInt;
                    RSAUtils.arrayCopy(x.digits, 0, result.digits, 0, n);
                    return result;
                };
                RSAUtils.biCompare = function(x, y) {
                    if (x.isNeg != y.isNeg) return 1 - 2 * Number(x.isNeg);
                    for (var i = x.digits.length - 1; i >= 0; --i) if (x.digits[i] != y.digits[i]) if (x.isNeg) return 1 - 2 * Number(x.digits[i] > y.digits[i]); else return 1 - 2 * Number(x.digits[i] < y.digits[i]);
                    return 0;
                };
                RSAUtils.biDivideModulo = function(x, y) {
                    var nb = RSAUtils.biNumBits(x);
                    var tb = RSAUtils.biNumBits(y);
                    var origYIsNeg = y.isNeg;
                    var q, r;
                    if (nb < tb) {
                        if (x.isNeg) {
                            q = RSAUtils.biCopy(bigOne);
                            q.isNeg = !y.isNeg;
                            x.isNeg = false;
                            y.isNeg = false;
                            r = biSubtract(y, x);
                            x.isNeg = true;
                            y.isNeg = origYIsNeg;
                        } else {
                            q = new BigInt;
                            r = RSAUtils.biCopy(x);
                        }
                        return [ q, r ];
                    }
                    q = new BigInt;
                    r = x;
                    var t = Math.ceil(tb / bitsPerDigit) - 1;
                    var lambda = 0;
                    while (y.digits[t] < biHalfRadix) {
                        y = RSAUtils.biShiftLeft(y, 1);
                        ++lambda;
                        ++tb;
                        t = Math.ceil(tb / bitsPerDigit) - 1;
                    }
                    r = RSAUtils.biShiftLeft(r, lambda);
                    nb += lambda;
                    var n = Math.ceil(nb / bitsPerDigit) - 1;
                    var b = RSAUtils.biMultiplyByRadixPower(y, n - t);
                    while (-1 != RSAUtils.biCompare(r, b)) {
                        ++q.digits[n - t];
                        r = RSAUtils.biSubtract(r, b);
                    }
                    for (var i = n; i > t; --i) {
                        var ri = i >= r.digits.length ? 0 : r.digits[i];
                        var ri1 = i - 1 >= r.digits.length ? 0 : r.digits[i - 1];
                        var ri2 = i - 2 >= r.digits.length ? 0 : r.digits[i - 2];
                        var yt = t >= y.digits.length ? 0 : y.digits[t];
                        var yt1 = t - 1 >= y.digits.length ? 0 : y.digits[t - 1];
                        if (ri == yt) q.digits[i - t - 1] = maxDigitVal; else q.digits[i - t - 1] = Math.floor((ri * biRadix + ri1) / yt);
                        var c1 = q.digits[i - t - 1] * (yt * biRadix + yt1);
                        var c2 = ri * biRadixSquared + (ri1 * biRadix + ri2);
                        while (c1 > c2) {
                            --q.digits[i - t - 1];
                            c1 = q.digits[i - t - 1] * (yt * biRadix | yt1);
                            c2 = ri * biRadix * biRadix + (ri1 * biRadix + ri2);
                        }
                        b = RSAUtils.biMultiplyByRadixPower(y, i - t - 1);
                        r = RSAUtils.biSubtract(r, RSAUtils.biMultiplyDigit(b, q.digits[i - t - 1]));
                        if (r.isNeg) {
                            r = RSAUtils.biAdd(r, b);
                            --q.digits[i - t - 1];
                        }
                    }
                    r = RSAUtils.biShiftRight(r, lambda);
                    q.isNeg = x.isNeg != origYIsNeg;
                    if (x.isNeg) {
                        if (origYIsNeg) q = RSAUtils.biAdd(q, bigOne); else q = RSAUtils.biSubtract(q, bigOne);
                        y = RSAUtils.biShiftRight(y, lambda);
                        r = RSAUtils.biSubtract(y, r);
                    }
                    if (0 == r.digits[0] && 0 == RSAUtils.biHighIndex(r)) r.isNeg = false;
                    return [ q, r ];
                };
                RSAUtils.biDivide = function(x, y) {
                    return RSAUtils.biDivideModulo(x, y)[0];
                };
                RSAUtils.biModulo = function(x, y) {
                    return RSAUtils.biDivideModulo(x, y)[1];
                };
                RSAUtils.biMultiplyMod = function(x, y, m) {
                    return RSAUtils.biModulo(RSAUtils.biMultiply(x, y), m);
                };
                RSAUtils.biPow = function(x, y) {
                    var result = bigOne;
                    var a = x;
                    while (true) {
                        if (0 != (1 & y)) result = RSAUtils.biMultiply(result, a);
                        y >>= 1;
                        if (0 == y) break;
                        a = RSAUtils.biMultiply(a, a);
                    }
                    return result;
                };
                RSAUtils.biPowMod = function(x, y, m) {
                    var result = bigOne;
                    var a = x;
                    var k = y;
                    while (true) {
                        if (0 != (1 & k.digits[0])) result = RSAUtils.biMultiplyMod(result, a, m);
                        k = RSAUtils.biShiftRight(k, 1);
                        if (0 == k.digits[0] && 0 == RSAUtils.biHighIndex(k)) break;
                        a = RSAUtils.biMultiplyMod(a, a, m);
                    }
                    return result;
                };
                that.BarrettMu = function(m) {
                    this.modulus = RSAUtils.biCopy(m);
                    this.k = RSAUtils.biHighIndex(this.modulus) + 1;
                    var b2k = new BigInt;
                    b2k.digits[2 * this.k] = 1;
                    this.mu = RSAUtils.biDivide(b2k, this.modulus);
                    this.bkplus1 = new BigInt;
                    this.bkplus1.digits[this.k + 1] = 1;
                    this.modulo = BarrettMu_modulo;
                    this.multiplyMod = BarrettMu_multiplyMod;
                    this.powMod = BarrettMu_powMod;
                };
                function BarrettMu_modulo(x) {
                    var $dmath = RSAUtils;
                    var q1 = $dmath.biDivideByRadixPower(x, this.k - 1);
                    var q2 = $dmath.biMultiply(q1, this.mu);
                    var q3 = $dmath.biDivideByRadixPower(q2, this.k + 1);
                    var r1 = $dmath.biModuloByRadixPower(x, this.k + 1);
                    var r2term = $dmath.biMultiply(q3, this.modulus);
                    var r2 = $dmath.biModuloByRadixPower(r2term, this.k + 1);
                    var r = $dmath.biSubtract(r1, r2);
                    if (r.isNeg) r = $dmath.biAdd(r, this.bkplus1);
                    var rgtem = $dmath.biCompare(r, this.modulus) >= 0;
                    while (rgtem) {
                        r = $dmath.biSubtract(r, this.modulus);
                        rgtem = $dmath.biCompare(r, this.modulus) >= 0;
                    }
                    return r;
                }
                function BarrettMu_multiplyMod(x, y) {
                    var xy = RSAUtils.biMultiply(x, y);
                    return this.modulo(xy);
                }
                function BarrettMu_powMod(x, y) {
                    var result = new BigInt;
                    result.digits[0] = 1;
                    var a = x;
                    var k = y;
                    while (true) {
                        if (0 != (1 & k.digits[0])) result = this.multiplyMod(result, a);
                        k = RSAUtils.biShiftRight(k, 1);
                        if (0 == k.digits[0] && 0 == RSAUtils.biHighIndex(k)) break;
                        a = this.multiplyMod(a, a);
                    }
                    return result;
                }
                var RSAKeyPair = function(encryptionExponent, decryptionExponent, modulus) {
                    var $dmath = RSAUtils;
                    this.e = $dmath.biFromHex(encryptionExponent);
                    this.d = $dmath.biFromHex(decryptionExponent);
                    this.m = $dmath.biFromHex(modulus);
                    this.chunkSize = 2 * $dmath.biHighIndex(this.m);
                    this.radix = 16;
                    this.barrett = new that.BarrettMu(this.m);
                };
                RSAUtils.getKeyPair = function(encryptionExponent, decryptionExponent, modulus) {
                    return new RSAKeyPair(encryptionExponent, decryptionExponent, modulus);
                };
                if ("undefined" === typeof that.twoDigit) that.twoDigit = function(n) {
                    return (n < 10 ? "0" : "") + String(n);
                };
                RSAUtils.encryptedString = function(s) {
                    if (null == s || RSAUtils.containsChinese(s)) return "";
                    s = s.split("").reverse().join("");
                    var key = new RSAUtils.getKeyPair(rsaPubkey_e, "", rsaPubkey_m);
                    var a = [];
                    var sl = s.length;
                    var i = 0;
                    while (i < sl) {
                        a[i] = s.charCodeAt(i);
                        i++;
                    }
                    while (a.length % key.chunkSize != 0) a[i++] = 0;
                    var al = a.length;
                    var result = "";
                    var j, k, block;
                    for (i = 0; i < al; i += key.chunkSize) {
                        block = new BigInt;
                        j = 0;
                        for (k = i; k < i + key.chunkSize; ++j) {
                            block.digits[j] = a[k++];
                            block.digits[j] += a[k++] << 8;
                        }
                        var crypt = key.barrett.powMod(block, key.e);
                        var text = 16 == key.radix ? RSAUtils.biToHex(crypt) : RSAUtils.biToString(crypt, key.radix);
                        result += text + " ";
                    }
                    result = result.substring(0, result.length - 1);
                    if (256 == result.length) return result; else if (252 == result.length) return "0000" + result; else return "";
                };
                RSAUtils.decryptedString = function(key, s) {
                    var blocks = s.split(" ");
                    var result = "";
                    var i, j, block;
                    for (i = 0; i < blocks.length; ++i) {
                        var bi;
                        if (16 == key.radix) bi = RSAUtils.biFromHex(blocks[i]); else bi = RSAUtils.biFromString(blocks[i], key.radix);
                        block = key.barrett.powMod(bi, key.d);
                        for (j = 0; j <= RSAUtils.biHighIndex(block); ++j) result += String.fromCharCode(255 & block.digits[j], block.digits[j] >> 8);
                    }
                    if (0 == result.charCodeAt(result.length - 1)) result = result.substring(0, result.length - 1);
                    return result;
                };
                RSAUtils.containsChinese = function(data) {
                    if (null == data || 0 == data.length) return false;
                    var dataArr = data.split("");
                    for (var i = 0; i < dataArr.length; i++) {
                        dataArr[i];
                        if (RSAUtils.isChinese(dataArr[i])) return true;
                    }
                    return false;
                };
                RSAUtils.isChinese = function(temp) {
                    if (temp.charCodeAt(0) > 255) return true; else return false;
                };
                var NS = function(ns, hld) {
                    var arr = [ "window" ];
                    ns = ns.split(".");
                    while (1 != ns.length) {
                        arr.push(ns.shift());
                        if (null == eval(arr.join("."))) eval(arr.join(".") + " = {};");
                    }
                    arr.push(ns.shift());
                    eval(arr.join(".") + " = hld;");
                };
                RSAUtils.setMaxDigits(200);
                that.registerNS = NS;
                that.RSAUtils = RSAUtils;
                that.registerNS("UDB.SDK.rsa", that);
            })();
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
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
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
        __webpack_require__.nmd = module => {
            module.paths = [];
            if (!module.children) module.children = [];
            return module;
        };
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var FieldNameEnum;
        (function(FieldNameEnum) {
            FieldNameEnum["Country"] = "country";
            FieldNameEnum["Province"] = "province";
            FieldNameEnum["City"] = "city";
            FieldNameEnum["District"] = "district";
            FieldNameEnum["Name"] = "name";
            FieldNameEnum["FirstName"] = "firstName";
            FieldNameEnum["LastName"] = "lastName";
            FieldNameEnum["Mobile"] = "mobile";
            FieldNameEnum["Postcode"] = "postcode";
            FieldNameEnum["Company"] = "company";
            FieldNameEnum["Address"] = "address";
            FieldNameEnum["Address2"] = "address2";
        })(FieldNameEnum || (FieldNameEnum = {}));
        var AddressTemplateNameTypeEnum;
        (function(AddressTemplateNameTypeEnum) {
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["NAME"] = 1] = "NAME";
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["FLName"] = 2] = "FLName";
        })(AddressTemplateNameTypeEnum || (AddressTemplateNameTypeEnum = {}));
        var FieldInteractionEnum;
        (function(FieldInteractionEnum) {
            FieldInteractionEnum[FieldInteractionEnum["Select"] = 1] = "Select";
            FieldInteractionEnum[FieldInteractionEnum["Input"] = 2] = "Input";
        })(FieldInteractionEnum || (FieldInteractionEnum = {}));
        const FieldNameList = [ FieldNameEnum.Country, FieldNameEnum.Province, FieldNameEnum.City, FieldNameEnum.District, FieldNameEnum.Name, FieldNameEnum.FirstName, FieldNameEnum.LastName, FieldNameEnum.Mobile, FieldNameEnum.Postcode, FieldNameEnum.Address, FieldNameEnum.Address2, FieldNameEnum.Company ];
        const e = Symbol("@ts-pattern/matcher"), t = "@ts-pattern/anonymous-select-key", n = e => Boolean(e && "object" == typeof e), r = t => t && !!t[e], o = (t, c, i) => {
            if (n(t)) {
                if (r(t)) {
                    const n = t[e](), {matched: r, selections: o = {}} = n.match(c);
                    return r && Object.keys(o).forEach((e => i(e, o[e]))), r;
                }
                if (!n(c)) return !1;
                if (Array.isArray(t)) return !!Array.isArray(c) && t.length === c.length && t.every(((e, t) => o(e, c[t], i)));
                if (t instanceof Map) return c instanceof Map && Array.from(t.keys()).every((e => o(t.get(e), c.get(e), i)));
                if (t instanceof Set) {
                    if (!(c instanceof Set)) return !1;
                    if (0 === t.size) return 0 === c.size;
                    if (1 === t.size) {
                        const [e] = Array.from(t.values());
                        return r(e) ? Array.from(c.values()).every((t => o(e, t, i))) : c.has(e);
                    }
                    return Array.from(t.values()).every((e => c.has(e)));
                }
                return Object.keys(t).every((n => {
                    const s = t[n];
                    return (n in c || r(a = s) && "optional" === a[e]().matcherType) && o(s, c[n], i);
                    var a;
                }));
            }
            return Object.is(c, t);
        }, c = t => {
            var o, s, a;
            return n(t) ? r(t) ? null != (o = null == (s = (a = t[e]()).getSelectionKeys) ? void 0 : s.call(a)) ? o : [] : Array.isArray(t) ? i(t, c) : i(Object.values(t), c) : [];
        }, i = (e, t) => e.reduce(((e, n) => e.concat(t(n))), []);
        function s(t) {
            return {
                [e]: () => ({
                    match: e => {
                        let n = {};
                        const r = (e, t) => {
                            n[e] = t;
                        };
                        return void 0 === e ? (c(t).forEach((e => r(e, void 0))), {
                            matched: !0,
                            selections: n
                        }) : {
                            matched: o(t, e, r),
                            selections: n
                        };
                    },
                    getSelectionKeys: () => c(t),
                    matcherType: "optional"
                })
            };
        }
        function a(t) {
            return {
                [e]: () => ({
                    match: e => {
                        if (!Array.isArray(e)) return {
                            matched: !1
                        };
                        let n = {};
                        const r = (e, t) => {
                            n[e] = (n[e] || []).concat([ t ]);
                        };
                        return {
                            matched: e.every((e => o(t, e, r))),
                            selections: n
                        };
                    },
                    getSelectionKeys: () => c(t)
                })
            };
        }
        function u(...t) {
            return {
                [e]: () => ({
                    match: e => {
                        let n = {};
                        const r = (e, t) => {
                            n[e] = t;
                        };
                        return {
                            matched: t.every((t => o(t, e, r))),
                            selections: n
                        };
                    },
                    getSelectionKeys: () => i(t, c),
                    matcherType: "and"
                })
            };
        }
        function l(...t) {
            return {
                [e]: () => ({
                    match: e => {
                        let n = {};
                        const r = (e, t) => {
                            n[e] = t;
                        };
                        return i(t, c).forEach((e => r(e, void 0))), {
                            matched: t.some((t => o(t, e, r))),
                            selections: n
                        };
                    },
                    getSelectionKeys: () => i(t, c),
                    matcherType: "or"
                })
            };
        }
        function h(t) {
            return {
                [e]: () => ({
                    match: e => ({
                        matched: !o(t, e, (() => {}))
                    }),
                    getSelectionKeys: () => [],
                    matcherType: "not"
                })
            };
        }
        function f(t) {
            return {
                [e]: () => ({
                    match: e => ({
                        matched: Boolean(t(e))
                    })
                })
            };
        }
        function y(...n) {
            const r = "string" == typeof n[0] ? n[0] : void 0, i = 2 === n.length ? n[1] : "string" == typeof n[0] ? void 0 : n[0];
            return {
                [e]: () => ({
                    match: e => {
                        let n = {
                            [null != r ? r : t]: e
                        };
                        return {
                            matched: void 0 === i || o(i, e, ((e, t) => {
                                n[e] = t;
                            })),
                            selections: n
                        };
                    },
                    getSelectionKeys: () => [ null != r ? r : t ].concat(void 0 === i ? [] : c(i))
                })
            };
        }
        const m = f((function(e) {
            return !0;
        })), g = m, p = f((function(e) {
            return "string" == typeof e;
        })), d = f((function(e) {
            return "number" == typeof e;
        })), v = f((function(e) {
            return "boolean" == typeof e;
        })), b = f((function(e) {
            return "bigint" == typeof e;
        })), A = f((function(e) {
            return "symbol" == typeof e;
        })), S = f((function(e) {
            return null == e;
        }));
        var w = {
            __proto__: null,
            optional: s,
            array: a,
            intersection: u,
            union: l,
            not: h,
            when: f,
            select: y,
            any: m,
            _: g,
            string: p,
            number: d,
            boolean: v,
            bigint: b,
            symbol: A,
            nullish: S,
            instanceOf: function(e) {
                return f(function(e) {
                    return t => t instanceof e;
                }(e));
            },
            typed: function() {
                return {
                    array: a,
                    optional: s,
                    intersection: u,
                    union: l,
                    not: h,
                    select: y,
                    when: f
                };
            }
        };
        const K = e => O(e, []), O = (e, n) => {
            const r = () => {
                const t = n.find((({test: t}) => t(e)));
                if (!t) {
                    let t;
                    try {
                        t = JSON.stringify(e);
                    } catch (n) {
                        t = e;
                    }
                    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
                }
                return t.handler(t.select(e), e);
            };
            return {
                with(...r) {
                    const c = r[r.length - 1], i = [], s = [];
                    3 === r.length && "function" == typeof r[1] ? (i.push(r[0]), s.push(r[1])) : i.push(...r.slice(0, r.length - 1));
                    let a = {};
                    return O(e, n.concat([ {
                        test: e => Boolean(i.some((t => o(t, e, ((e, t) => {
                            a[e] = t;
                        })))) && s.every((t => t(e)))),
                        handler: c,
                        select: e => Object.keys(a).length ? t in a ? a[t] : a : e
                    } ]));
                },
                when: (t, r) => O(e, n.concat([ {
                    test: t,
                    handler: r,
                    select: e => e
                } ])),
                otherwise: t => O(e, n.concat([ {
                    test: () => !0,
                    handler: t,
                    select: e => e
                } ])).run(),
                exhaustive: () => r(),
                run: r
            };
        };
        const AddressLevelList = [ FieldNameEnum.Country, FieldNameEnum.Province, FieldNameEnum.City, FieldNameEnum.District ];
        function isAddressLevel(field) {
            return AddressLevelList.indexOf(field) >= 0;
        }
        function getAddressLevelCodeKey(field) {
            return `${field}Code`;
        }
        function getUpperAddressLevel(field) {
            for (let i = AddressLevelList.length - 1; i >= 0; --i) if (AddressLevelList[i] === field) return AddressLevelList[i - 1];
        }
        function getLowerAddressLevel(field) {
            for (let i = 0; i < AddressLevelList.length; ++i) if (AddressLevelList[i] === field) return AddressLevelList[i + 1];
        }
        function getAddressLevelHeight(current, hi) {
            if (current === hi) return 1;
            let currentCursor = AddressLevelList.length - 1;
            while (currentCursor >= 0) {
                const level = AddressLevelList[currentCursor];
                if (level === current) break;
                currentCursor -= 1;
            }
            if (currentCursor < 0) return 0;
            let hiCursor = 0;
            while (hiCursor < AddressLevelList.length) {
                const level = AddressLevelList[hiCursor];
                if (level === hi) break;
                hiCursor += 1;
            }
            if (hiCursor >= AddressLevelList.length) return 0;
            if (hiCursor > currentCursor) return 0;
            return currentCursor - hiCursor + 1;
        }
        function getSortedAddressLevelList(skipCountry) {
            return skipCountry ? AddressLevelList.slice(1) : [ ...AddressLevelList ];
        }
        function noopAddressLevelValue() {
            return {
                code: void 0,
                name: void 0
            };
        }
        function createDefaultFieldTemplate(field) {
            return K(field).with(FieldNameEnum.Country, (() => ({
                propKey: FieldNameEnum.Country,
                interactionType: FieldInteractionEnum.Select,
                priority: 7,
                displayOrder: 7,
                display: true,
                required: true,
                title: "Country/region",
                placeholder: "Country/region",
                remindCopywriter: "Select a country / region"
            }))).with(FieldNameEnum.Province, (() => ({
                propKey: FieldNameEnum.Province,
                interactionType: FieldInteractionEnum.Select,
                priority: 8,
                displayOrder: 8,
                display: true,
                required: true,
                title: "State/province",
                placeholder: "State/province",
                remindCopywriter: "Select a state / province"
            }))).with(FieldNameEnum.City, (() => ({
                propKey: FieldNameEnum.City,
                interactionType: FieldInteractionEnum.Input,
                priority: 6,
                displayOrder: 6,
                display: true,
                required: true,
                title: "City",
                placeholder: "City",
                remindCopywriter: "Enter a city"
            }))).with(FieldNameEnum.District, (() => ({
                propKey: FieldNameEnum.District,
                interactionType: FieldInteractionEnum.Input,
                priority: 9,
                displayOrder: 9,
                display: false,
                required: false,
                title: "District",
                placeholder: "District",
                remindCopywriter: "Enter a district"
            }))).with(FieldNameEnum.Address, (() => ({
                propKey: FieldNameEnum.Address,
                interactionType: FieldInteractionEnum.Input,
                priority: 4,
                displayOrder: 4,
                display: true,
                required: true,
                title: "Address",
                placeholder: "Address",
                remindCopywriter: "Enter an address"
            }))).with(FieldNameEnum.Address2, (() => ({
                propKey: FieldNameEnum.Address2,
                interactionType: FieldInteractionEnum.Input,
                priority: 5,
                displayOrder: 5,
                display: true,
                required: false,
                title: "Address2",
                placeholder: "Apartment, suite, etc. (optional)",
                remindCopywriter: ""
            }))).with(FieldNameEnum.Name, (() => ({
                propKey: FieldNameEnum.Name,
                interactionType: FieldInteractionEnum.Input,
                priority: 1,
                displayOrder: 1,
                display: false,
                required: false,
                title: "Name",
                placeholder: "Name",
                remindCopywriter: "Enter a name"
            }))).with(FieldNameEnum.FirstName, (() => ({
                propKey: FieldNameEnum.FirstName,
                interactionType: FieldInteractionEnum.Input,
                priority: 2,
                displayOrder: 2,
                display: true,
                required: true,
                title: "First name",
                placeholder: "First name",
                remindCopywriter: "Enter a first name"
            }))).with(FieldNameEnum.LastName, (() => ({
                propKey: FieldNameEnum.LastName,
                interactionType: FieldInteractionEnum.Input,
                priority: 3,
                displayOrder: 3,
                display: true,
                required: true,
                title: "Last name",
                placeholder: "Last name",
                remindCopywriter: "Enter a last name"
            }))).with(FieldNameEnum.Mobile, (() => ({
                propKey: FieldNameEnum.Mobile,
                interactionType: FieldInteractionEnum.Input,
                priority: 11,
                displayOrder: 11,
                display: true,
                required: true,
                title: "Phone",
                placeholder: "Phone",
                remindCopywriter: "Enter a valid phone number"
            }))).with(FieldNameEnum.Postcode, (() => ({
                propKey: FieldNameEnum.Postcode,
                interactionType: FieldInteractionEnum.Input,
                priority: 9,
                displayOrder: 9,
                display: true,
                required: true,
                title: "ZIP code",
                placeholder: "ZIP code",
                remindCopywriter: "ZIP code"
            }))).with(FieldNameEnum.Company, (() => ({
                propKey: FieldNameEnum.Company,
                interactionType: FieldInteractionEnum.Input,
                priority: 12,
                displayOrder: 12,
                display: false,
                required: false,
                title: "Company",
                placeholder: "Company",
                remindCopywriter: "Company"
            }))).otherwise((field => ({
                propKey: field,
                interactionType: FieldInteractionEnum.Input,
                priority: -1,
                displayOrder: -1,
                display: false,
                required: false,
                title: field,
                placeholder: field,
                remindCopywriter: ""
            })));
        }
        function isVisibleField(template) {
            return false !== template.display;
        }
        function isSelectInteractionField(template) {
            return template.interactionType === FieldInteractionEnum.Select;
        }
        function setInputInteraction(template) {
            return Object.assign(Object.assign({}, template), {
                interactionType: FieldInteractionEnum.Input
            });
        }
        function setSelectInteraction(template) {
            return Object.assign(Object.assign({}, template), {
                interactionType: FieldInteractionEnum.Select
            });
        }
        function createDefaultAddressTemplate() {
            return {
                country: "DEFAULT",
                nameType: AddressTemplateNameTypeEnum.FLName,
                props: FieldNameList.map((fieldName => createDefaultFieldTemplate(fieldName)))
            };
        }
        function createAddressTemplateModel(source) {
            let {country, nameType, props} = source;
            let additionalFieldPrioritySeed = 100;
            const fieldTemplateMap = props.reduce(((result, template) => {
                result[template.propKey] = template;
                return result;
            }), {});
            const model = {
                forceFullNameMode() {
                    nameType = AddressTemplateNameTypeEnum.NAME;
                    fieldTemplateMap[FieldNameEnum.Name].display = true;
                    fieldTemplateMap[FieldNameEnum.LastName].display = false;
                    fieldTemplateMap[FieldNameEnum.FirstName].display = false;
                    return model;
                },
                forceFLNameMode() {
                    nameType = AddressTemplateNameTypeEnum.FLName;
                    fieldTemplateMap[FieldNameEnum.Name].display = false;
                    fieldTemplateMap[FieldNameEnum.LastName].display = true;
                    fieldTemplateMap[FieldNameEnum.FirstName].display = true;
                    return model;
                },
                hasField(fieldKey) {
                    return fieldTemplateMap.hasOwnProperty(fieldKey);
                },
                setField(fieldTemplate) {
                    const {propKey} = fieldTemplate;
                    if (fieldTemplateMap.hasOwnProperty(propKey)) return model;
                    fieldTemplateMap[propKey] = Object.assign(Object.assign({}, fieldTemplate), {
                        priority: ++additionalFieldPrioritySeed
                    });
                    return model;
                },
                build() {
                    return {
                        country,
                        nameType,
                        props: Object.keys(fieldTemplateMap).map((key => fieldTemplateMap[key])).sort(((a, b) => a.priority - b.priority))
                    };
                }
            };
            return model;
        }
        var ResponseCodeEnum;
        (function(ResponseCodeEnum) {
            ResponseCodeEnum["SUCCESS"] = "SUCCESS";
            ResponseCodeEnum["FA_INVALID_PARAMS"] = "FA_INVALID_PARAMS";
            ResponseCodeEnum["FA_DOMAIN__INVALID_COUNTRY"] = "FA_DOMAIN__INVALID_COUNTRY";
            ResponseCodeEnum["FA_DOMAIN__INVALID_TEMPLATE"] = "FA_DOMAIN__INVALID_TEMPLATE";
        })(ResponseCodeEnum || (ResponseCodeEnum = {}));
        function responseCompleteWithData(data) {
            return {
                success: true,
                code: ResponseCodeEnum.SUCCESS,
                data
            };
        }
        function responseFailWithCode(code, traceId, msg) {
            return {
                success: false,
                code,
                msg
            };
        }
        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (null != s && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        function __awaiter$1(thisArg, _arguments, P, generator) {
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
        function observe() {
            const list = new Set;
            return {
                next(v) {
                    list.forEach((cb => {
                        if ("function" === typeof cb) cb(v);
                    }));
                },
                subscribe(observer) {
                    list.add(observer);
                    return {
                        unsubscribe() {
                            list.delete(observer);
                        }
                    };
                }
            };
        }
        function createCommit(blobList) {
            const bailWalker = (source => {
                function walker(cb) {
                    for (let blob of source) {
                        const result = cb(blob);
                        if (void 0 !== result) return result;
                    }
                }
                return walker;
            })(blobList.reverse());
            function getBlobState(payload) {
                if (void 0 !== payload) return {
                    type: "Changed",
                    payload
                };
                return {
                    type: "Clean"
                };
            }
            return {
                isClean() {
                    return blobList.length <= 0;
                },
                diffDomainProps() {
                    return getBlobState(bailWalker((blob => K(blob).with({
                        type: "domainPropsUpdatedBlob"
                    }, (blob => blob)).otherwise((() => {})))));
                },
                diffAddressFieldInfo(fieldName) {
                    return getBlobState(bailWalker((blob => K(blob).with({
                        type: "fieldUpdatedBlob",
                        payload: {
                            fieldName
                        }
                    }, (blob => blob)).with({
                        type: "fieldsUpdatedBlob"
                    }, (({payload}) => null != payload[fieldName]), (blob => blob)).with({
                        type: "addressInfoUpdatedBlob"
                    }, (({payload}) => {
                        if (isAddressLevel(fieldName)) return null != payload[getAddressLevelCodeKey(fieldName)] || null != payload[fieldName];
                        return null != payload[fieldName];
                    }), (blob => blob)).with({
                        type: "addressInfoReplacedBlob"
                    }, (blob => blob)).otherwise((() => {})))));
                }
            };
        }
        function peekAddressInfoBlobValue(blob, fieldName) {
            return K(blob).with({
                type: "fieldUpdatedBlob",
                payload: w.select()
            }, (payload => payload.candidates[0])).with({
                type: "fieldsUpdatedBlob",
                payload: w.select()
            }, (payload => payload[fieldName][0])).with({
                type: "addressInfoReplacedBlob",
                payload: w.select()
            }, (payload => payload[fieldName] || "")).with({
                type: "addressInfoUpdatedBlob",
                payload: w.select()
            }, (payload => payload[fieldName] || "")).otherwise((() => ""));
        }
        function peekAddressInfoBlobCandidates(blob, fieldName) {
            return K(blob).with({
                type: "fieldUpdatedBlob",
                payload: w.select()
            }, (payload => payload.candidates)).with({
                type: "fieldsUpdatedBlob",
                payload: w.select()
            }, (payload => payload[fieldName] || [])).with({
                type: w.union("addressInfoUpdatedBlob", "addressInfoReplacedBlob"),
                payload: w.select()
            }, (payload => [ isAddressLevel(fieldName) && payload[getAddressLevelCodeKey(fieldName)] || "", payload[fieldName] || "" ])).otherwise((() => []));
        }
        function traverseAddressLevelWithHeight(traverser, from, height) {
            if (height < 1) return;
            traverser(from);
            const lowerField = getLowerAddressLevel(from);
            if (!lowerField) return;
            traverseAddressLevelWithHeight(traverser, lowerField, height - 1);
        }
        function traverseLowerAddressLevel(traverser, current) {
            let lowerMatched = false;
            for (let i = 0; i < AddressLevelList.length; ++i) {
                if (AddressLevelList[i] === current) lowerMatched = true;
                if (lowerMatched) traverser(AddressLevelList[i]);
            }
        }
        function createAddressBookTraverser(addressBookList, fieldLevel, height) {
            function dfs(list, fieldName, cb, depth) {
                if (depth < 1) return;
                if (!Array.isArray(list) || list.length <= 0) return;
                if (1 === depth) {
                    for (let ab of list) {
                        const result = cb(fieldName, ab);
                        if (false === result) break;
                    }
                    return;
                }
                for (let ab of list) dfs(ab.subNodes || [], fieldName, cb, depth - 1);
            }
            function traverse(fieldName, cb) {
                const depth = getAddressLevelHeight(fieldName, fieldLevel);
                dfs(addressBookList, fieldName, ((fieldName, value) => {
                    cb(fieldName, value);
                }), depth);
            }
            function bailTraverse(fieldName, cb) {
                const depth = getAddressLevelHeight(fieldName, fieldLevel);
                dfs(addressBookList, fieldName, cb, depth);
            }
            const fieldAddressBookTraverser = {};
            traverseAddressLevelWithHeight((fieldName => {
                fieldAddressBookTraverser[fieldName] = {
                    traverse(cb) {
                        traverse(fieldName, cb);
                    },
                    bailTraverse(cb) {
                        bailTraverse(fieldName, cb);
                    }
                };
            }), fieldLevel, height);
            return fieldAddressBookTraverser;
        }
        function noopAddressBookTraverser() {
            return {
                traverse(cb) {},
                bailTraverse(cb) {}
            };
        }
        function findAddressBook(traverser, candidates) {
            if (null == traverser) return;
            let matched;
            traverser.bailTraverse(((fieldName, addressBook) => {
                if (addressBook) for (let j = 0; j < candidates.length; ++j) {
                    const candidate = candidates[j];
                    if (addressBook.code === candidate) {
                        matched = addressBook;
                        return false;
                    }
                }
            }));
            if (!matched) traverser.bailTraverse(((fieldName, addressBook) => {
                if (addressBook) for (let j = 0; j < candidates.length; ++j) {
                    const candidate = candidates[j];
                    if (candidate) if (stringLooseEqual(addressBook.gCode || "", candidate.trim())) {
                        matched = addressBook;
                        return false;
                    }
                }
            }));
            if (!matched) traverser.bailTraverse(((fieldName, addressBook) => {
                if (addressBook) for (let j = 0; j < candidates.length; ++j) {
                    const candidate = candidates[j];
                    if (candidate) if (stringLooseContain(addressBook.name || "", candidate.trim())) {
                        matched = addressBook;
                        return false;
                    }
                }
            }));
            return matched;
        }
        function stringLooseEqual(s1, s2) {
            if ("string" === typeof s1 && "string" === typeof s2) return s1.toLowerCase() === s2.toLowerCase();
            return false;
        }
        function stringLooseContain(source, target) {
            if ("string" === typeof source && "string" === typeof target) return source.toLowerCase().indexOf(target.toLowerCase()) >= 0;
            return false;
        }
        var LayerSchemeEnum;
        (function(LayerSchemeEnum) {
            LayerSchemeEnum[LayerSchemeEnum["Nil"] = 0] = "Nil";
            LayerSchemeEnum[LayerSchemeEnum["Name"] = 1] = "Name";
            LayerSchemeEnum[LayerSchemeEnum["Logistics"] = 2] = "Logistics";
        })(LayerSchemeEnum || (LayerSchemeEnum = {}));
        const presetFieldLayerScheme = {
            [FieldNameEnum.FirstName]: LayerSchemeEnum.Name,
            [FieldNameEnum.LastName]: LayerSchemeEnum.Name,
            [FieldNameEnum.Name]: LayerSchemeEnum.Name,
            [FieldNameEnum.Country]: LayerSchemeEnum.Logistics,
            [FieldNameEnum.Province]: LayerSchemeEnum.Logistics,
            [FieldNameEnum.City]: LayerSchemeEnum.Logistics,
            [FieldNameEnum.District]: LayerSchemeEnum.Logistics,
            [FieldNameEnum.Postcode]: LayerSchemeEnum.Logistics
        };
        function getFieldNameGroup(template) {
            const {props: templateList} = template;
            const templateListSort = templateList.slice(0).sort(((prev, next) => prev.priority - next.priority));
            const fieldNameGroup = [];
            templateListSort.reduce(((pre, cur, index) => {
                const preKey = pre[pre.length - 1];
                const isLast = index === templateListSort.length - 1;
                if (preKey) {
                    if (pre.length < 3 && presetFieldLayerScheme[preKey] && presetFieldLayerScheme[preKey] === presetFieldLayerScheme[cur.propKey]) {
                        pre.push(cur.propKey);
                        isLast && fieldNameGroup.push(pre);
                        return pre;
                    }
                    fieldNameGroup.push(pre);
                    isLast && fieldNameGroup.push([ cur.propKey ]);
                    return [ cur.propKey ];
                }
                isLast && fieldNameGroup.push([ cur.propKey ]);
                return [ cur.propKey ];
            }), []);
            return fieldNameGroup;
        }
        function computeFieldTemplateLayout(fieldNameList) {
            const layout = {};
            const mdDivisor = [];
            const xlDivisor = [];
            (fieldNameList || []).forEach(((_, i) => {
                const mdCursor = Math.floor(i / 3);
                const xlCursor = Math.floor(i / 3);
                if (null == mdDivisor[mdCursor]) mdDivisor[mdCursor] = 1; else mdDivisor[mdCursor] += 1;
                if (null == xlDivisor[xlCursor]) xlDivisor[xlCursor] = 1; else xlDivisor[xlCursor] += 1;
            }));
            (fieldNameList || []).forEach(((field, i) => {
                const mdCursor = Math.floor(i / 3);
                const xlCursor = Math.floor(i / 3);
                if (null == layout[field]) layout[field] = {
                    xs: 24,
                    md: 24 / (mdDivisor[mdCursor] || 1),
                    xl: 24 / (xlDivisor[xlCursor] || 1)
                };
            }));
            return layout;
        }
        function createFieldLayoutGroupFactory(country, template) {
            return {
                get country() {
                    return country;
                },
                get template() {
                    return template;
                },
                takeGroupModel() {
                    return createFieldLayoutGroupModel(getFieldNameGroup(template));
                },
                takeGroupModelWithStringifyTemplate(tpl) {
                    return createFieldLayoutGroupModel(stringAddressTemplateWalker(tpl));
                }
            };
        }
        function createFieldLayoutGroupModel(fieldNameGroup) {
            let tree = [];
            for (let fieldNameList of fieldNameGroup) tree.push({
                type: "Group",
                elements: fieldNameList.map((name => {
                    if ("address1" === name) name = FieldNameEnum.Address;
                    return {
                        type: "Element",
                        fieldName: name
                    };
                }))
            });
            return {
                prependGroup(...fieldNames) {
                    const fieldSet = new Set(fieldNames);
                    tree = treeModifier(tree, (fieldName => !fieldSet.has(fieldName)));
                    tree.unshift(makeGroup(fieldNames));
                },
                insertGroupBefore(target, ...fieldNames) {
                    const fieldSet = new Set(fieldNames);
                    tree = treeModifier(tree, (fieldName => !fieldSet.has(fieldName)));
                    let cursor = -1;
                    tree.forEach(((node, i) => {
                        if (!node) return;
                        if ("Group" === node.type) node.elements.forEach((node => {
                            if ("Element" === node.type) if (node.fieldName === target) cursor = i;
                        }));
                        return;
                    }));
                    if (cursor < 0 || cursor >= tree.length) cursor = tree.length;
                    tree = [ ...tree.slice(0, cursor), makeGroup(fieldNames), ...tree.slice(cursor) ];
                },
                build() {
                    const result = [];
                    tree.forEach((node => {
                        if ("Group" === node.type) result.push(node.elements.map((element => element.fieldName)));
                    }));
                    return result;
                }
            };
        }
        function makeGroup(fieldNames) {
            return {
                type: "Group",
                elements: fieldNames.map(makeElement)
            };
        }
        function makeElement(fieldName) {
            return {
                type: "Element",
                fieldName
            };
        }
        function treeModifier(tree, bailField) {
            const result = [];
            tree.forEach((node => {
                if (!node) return;
                if ("Group" === node.type) {
                    const group = groupModifier(node, bailField);
                    if (group) result.push(group);
                }
                return;
            }));
            return result;
        }
        function groupModifier(group, bailField) {
            if (!group) return null;
            const elements = [];
            group.elements.forEach((element => {
                if (!element) return;
                if (bailField(element.fieldName)) elements.push(element);
            }));
            if (elements.length <= 0) return null;
            return {
                type: "Group",
                elements
            };
        }
        function* stringAddressTemplateWalker(template) {
            let segment = [];
            let fieldRange = {
                begin: -1,
                end: -1
            };
            const sliceField = (begin, end) => {
                const lo = 0;
                const hi = template.length - 1;
                if (begin < lo || end < lo) return;
                if (begin > hi || end > hi) return;
                if (begin >= end) return;
                const fieldName = template.slice(begin + 1, end);
                if (fieldName.length <= 0) return;
                segment.push(fieldName);
            };
            for (let i = 0; i < template.length; ++i) {
                const char = template[i];
                switch (char) {
                  case "{":
                    fieldRange = {
                        begin: i,
                        end: -1
                    };
                    break;

                  case "}":
                    fieldRange.end = i;
                    sliceField(fieldRange.begin, fieldRange.end);
                    break;

                  case "_":
                    yield Array.from(segment);
                    segment = [];
                }
            }
            if (segment.length > 0) yield Array.from(segment);
            return;
        }
        function initDomainState(params) {
            let state = {
                addressTemplate: params.addressTemplate,
                addressTemplateNameMode: params.addressTemplate.nameType,
                fieldLayoutGroup: params.fieldLayoutGroup,
                fieldTemplateMap: {},
                levelValueMap: initAddressLevelValueMap(),
                levelAddressBookTraverserMap: initAddressBookTraverserMap(),
                infoFieldSet: new Set,
                infoFieldValueMap: {}
            };
            params.addressTemplate.props.forEach((fieldTemplate => {
                K(fieldTemplate).with({
                    propKey: w.union(...AddressLevelList)
                }, (template => {
                    state.fieldTemplateMap[template.propKey] = template;
                })).otherwise((template => {
                    state.infoFieldSet.add(template.propKey);
                    state.fieldTemplateMap[template.propKey] = template;
                }));
            }));
            return state;
        }
        function withLevelField(state, fieldName, fn) {
            let [fieldTemplate, levelInfo, traverserMap] = fn([ state.fieldTemplateMap[fieldName], state.levelValueMap[fieldName], state.levelAddressBookTraverserMap[fieldName] ]);
            state = Object.assign({}, state);
            if (!isSelectInteractionField(fieldTemplate) || !traverserMap[fieldName]) {
                fieldTemplate = setInputInteraction(fieldTemplate);
                if (isVisibleField(fieldTemplate)) levelInfo = Object.assign(Object.assign({}, noopAddressLevelValue()), {
                    name: levelInfo.name
                }); else levelInfo = Object.assign({}, noopAddressLevelValue());
                traverseLowerAddressLevel((lowerLevel => {
                    state.fieldTemplateMap = Object.assign(Object.assign({}, state.fieldTemplateMap), {
                        [lowerLevel]: setInputInteraction(state.fieldTemplateMap[lowerLevel])
                    });
                }), fieldName);
            } else {
                state.levelAddressBookTraverserMap = Object.assign(Object.assign({}, state.levelAddressBookTraverserMap), traverserMap);
                const addressBook = findAddressBook(traverserMap[fieldName], [ levelInfo.code, levelInfo.name ]);
                if (!addressBook) levelInfo = noopAddressLevelValue();
            }
            state.fieldTemplateMap = Object.assign(Object.assign({}, state.fieldTemplateMap), {
                [fieldName]: fieldTemplate
            });
            state.levelValueMap = Object.assign(Object.assign({}, state.levelValueMap), {
                [fieldName]: levelInfo
            });
            return state;
        }
        function withInfoField(state, fieldName, fn) {
            let [fieldTemplate, value] = fn([ state.fieldTemplateMap[fieldName] || createDefaultFieldTemplate(fieldName), state.infoFieldValueMap[fieldName] ]);
            state = Object.assign({}, state);
            if (!state.infoFieldSet.has(fieldName)) {
                state.infoFieldSet = new Set(state.infoFieldSet);
                state.infoFieldSet.add(fieldName);
            }
            state.fieldTemplateMap = Object.assign(Object.assign({}, state.fieldTemplateMap), {
                [fieldName]: fieldTemplate
            });
            state.infoFieldValueMap = Object.assign(Object.assign({}, state.infoFieldValueMap), {
                [fieldName]: isVisibleField(fieldTemplate) ? value : null
            });
            return state;
        }
        function getLevelInfo(state, fieldName) {
            return state.levelValueMap[fieldName];
        }
        function getCountryCode(state) {
            return getLevelInfo(state, FieldNameEnum.Country).code;
        }
        function getInfoFieldValue(state, fieldName) {
            return state.infoFieldSet.has(fieldName) ? state.infoFieldValueMap[fieldName] : void 0;
        }
        function isNameModeMatched(state, fieldName) {
            switch (fieldName) {
              case FieldNameEnum.FirstName:
              case FieldNameEnum.LastName:
                return state.addressTemplateNameMode === AddressTemplateNameTypeEnum.FLName;

              case FieldNameEnum.Name:
                return state.addressTemplateNameMode === AddressTemplateNameTypeEnum.NAME;

              default:
                return true;
            }
        }
        function getAddressInfo(state) {
            const info = {};
            for (let fieldName of state.infoFieldSet) {
                const value = getInfoFieldValue(state, fieldName) || "";
                switch (fieldName) {
                  case FieldNameEnum.Name:
                    if (isNameModeMatched(state, FieldNameEnum.Name)) info[FieldNameEnum.Name] = value;
                    break;

                  case FieldNameEnum.LastName:
                  case FieldNameEnum.FirstName:
                    if (isNameModeMatched(state, fieldName)) info[fieldName] = value;
                    break;

                  default:
                    info[fieldName] = value;
                }
            }
            getSortedAddressLevelList().forEach((fieldName => {
                const levelValue = getLevelInfo(state, fieldName);
                info[getAddressLevelCodeKey(fieldName)] = levelValue.code || "";
                info[fieldName] = levelValue.name || "";
            }));
            return info;
        }
        function getFieldTemplateLayout(state) {
            const visibleFieldSequence = new Set;
            let fieldTemplateLayout = {};
            for (let fieldNameList of state.fieldLayoutGroup) {
                const fieldGroup = [];
                fieldNameList.forEach((fieldName => {
                    if (!state.fieldTemplateMap[fieldName]) return;
                    if (!isNameModeMatched(state, fieldName) && fieldName === FieldNameEnum.LastName) fieldName = FieldNameEnum.Name;
                    if (!isVisibleField(state.fieldTemplateMap[fieldName])) return;
                    if (!isNameModeMatched(state, fieldName)) return;
                    if (visibleFieldSequence.has(fieldName)) visibleFieldSequence.delete(fieldName);
                    visibleFieldSequence.add(fieldName);
                    fieldGroup.push(fieldName);
                }));
                fieldTemplateLayout = Object.assign(Object.assign({}, fieldTemplateLayout), computeFieldTemplateLayout(fieldGroup));
            }
            const hiddenFieldSequence = [];
            [ ...state.infoFieldSet, ...getSortedAddressLevelList() ].forEach((fieldName => {
                if (!visibleFieldSequence.has(fieldName)) hiddenFieldSequence.push(fieldName);
            }));
            return {
                get fieldTemplateLayout() {
                    return fieldTemplateLayout;
                },
                get fieldTemplateSequence() {
                    return [ ...visibleFieldSequence, ...hiddenFieldSequence.sort(((a, b) => {
                        var _a, _b;
                        return (null === (_a = state.fieldTemplateMap[a]) || void 0 === _a ? void 0 : _a.priority) - (null === (_b = state.fieldTemplateMap[b]) || void 0 === _b ? void 0 : _b.priority);
                    })) ];
                }
            };
        }
        var StateStore = {
            initDomainState,
            withLevelField,
            withInfoField,
            isNameModeMatched,
            getLevelInfo,
            getCountryCode,
            getInfoFieldValue,
            getAddressInfo,
            getFieldTemplateLayout
        };
        function initAddressLevelValueMap() {
            return AddressLevelList.reduce(((result, fieldName) => {
                result[fieldName] = {
                    code: void 0,
                    name: void 0
                };
                return result;
            }), {});
        }
        function initAddressBookTraverserMap() {
            return AddressLevelList.reduce(((result, fieldName) => {
                result[fieldName] = noopAddressBookTraverser();
                return result;
            }), {});
        }
        function createReducer(port) {
            function getAddressBookQueryParams(wip, fieldName) {
                let depth = 1;
                let parentFieldName = getUpperAddressLevel(fieldName);
                while (null != parentFieldName) {
                    let parentFieldTemplate = wip.fieldTemplateMap[parentFieldName];
                    if (!isSelectInteractionField(parentFieldTemplate)) return null;
                    if (!isVisibleField(parentFieldTemplate)) {
                        depth += 1;
                        parentFieldName = getUpperAddressLevel(parentFieldName);
                    } else return {
                        fieldName: parentFieldName,
                        addressCode: wip.levelValueMap[parentFieldName].code || "",
                        depth
                    };
                }
                return null;
            }
            function buildAddressLevelField(current, wip, fieldName, commit) {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    const wipFieldTemplate = wip.fieldTemplateMap[fieldName];
                    const blobState = commit.diffAddressFieldInfo(fieldName);
                    if (!isSelectInteractionField(wipFieldTemplate)) return StateStore.withLevelField(wip, fieldName, (([fieldTemplate]) => [ setInputInteraction(fieldTemplate), K(blobState).with({
                        type: "Changed",
                        payload: w.select()
                    }, (payload => Object.assign(Object.assign({}, noopAddressLevelValue()), {
                        name: peekAddressInfoBlobValue(payload, fieldName)
                    }))).otherwise((() => {
                        if (!isSelectInteractionField(current.fieldTemplateMap[fieldName])) return Object.assign(Object.assign({}, current.levelValueMap[fieldName]), {
                            code: void 0
                        }); else return noopAddressLevelValue();
                    })), {} ]));
                    if (!isVisibleField(wipFieldTemplate)) return wip;
                    const addressBookParams = getAddressBookQueryParams(wip, fieldName);
                    if (null == addressBookParams) return StateStore.withLevelField(wip, fieldName, (([fieldTemplate]) => [ setInputInteraction(fieldTemplate), K(blobState).with({
                        type: "Changed",
                        payload: w.select()
                    }, (payload => Object.assign(Object.assign({}, noopAddressLevelValue()), {
                        name: peekAddressInfoBlobValue(payload, fieldName)
                    }))).otherwise((() => Object.assign(Object.assign({}, current.levelValueMap[fieldName]), {
                        code: void 0
                    }))), {} ]));
                    const countryCode = StateStore.getCountryCode(wip);
                    if (!countryCode || !addressBookParams.addressCode) return StateStore.withLevelField(wip, fieldName, (([fieldTemplate]) => [ setSelectInteraction(fieldTemplate), noopAddressLevelValue(), {
                        [fieldName]: noopAddressBookTraverser()
                    } ]));
                    const addressBookRes = yield port.getAddressBook(countryCode, addressBookParams.fieldName, addressBookParams.addressCode, addressBookParams.depth);
                    if (!addressBookRes.success || addressBookRes.data.length <= 0) return StateStore.withLevelField(wip, fieldName, (([fieldTemplate]) => [ setInputInteraction(fieldTemplate), K(blobState).with({
                        type: "Changed",
                        payload: w.select()
                    }, (payload => Object.assign(Object.assign({}, noopAddressLevelValue()), {
                        name: peekAddressInfoBlobValue(payload, fieldName)
                    }))).otherwise((() => Object.assign(Object.assign({}, current.levelValueMap[fieldName]), {
                        code: void 0
                    }))), {} ]));
                    const traverserMap = createAddressBookTraverser(addressBookRes.data, getLowerAddressLevel(addressBookParams.fieldName), addressBookParams.depth);
                    return StateStore.withLevelField(wip, fieldName, (([fieldTemplate]) => [ setSelectInteraction(fieldTemplate), K(blobState).with({
                        type: "Changed",
                        payload: w.select()
                    }, (payload => {
                        const addressBook = findAddressBook(traverserMap[fieldName], peekAddressInfoBlobCandidates(payload, fieldName));
                        return addressBook ? {
                            code: addressBook.code,
                            name: addressBook.name
                        } : noopAddressLevelValue();
                    })).otherwise((() => {
                        const currentInfo = StateStore.getLevelInfo(current, fieldName);
                        const addressBook = findAddressBook(traverserMap[fieldName], [ currentInfo.code, currentInfo.name ]);
                        return addressBook ? {
                            code: addressBook.code,
                            name: addressBook.name
                        } : noopAddressLevelValue();
                    })), traverserMap ]));
                }));
            }
            function shouldBackFillingAddressLevelInfo(current, wip, fieldName, commit) {
                const fieldTemplate = wip.fieldTemplateMap[fieldName];
                if (!isSelectInteractionField(fieldTemplate)) return false;
                if (isVisibleField(fieldTemplate)) return false;
                const lowerFieldName = getLowerAddressLevel(fieldName);
                if (!lowerFieldName) return false;
                const lowerFieldTemplate = wip.fieldTemplateMap[lowerFieldName];
                return isSelectInteractionField(lowerFieldTemplate) && !!StateStore.getLevelInfo(wip, lowerFieldName).code;
            }
            function maybeBackFillingAddressLevelInfo(current, wip, fieldName, commit) {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    if (!shouldBackFillingAddressLevelInfo(current, wip, fieldName)) return wip;
                    const lowerFieldName = getLowerAddressLevel(fieldName);
                    if (!lowerFieldName) return wip;
                    const lowerInfo = StateStore.getLevelInfo(wip, lowerFieldName);
                    const lowerAddressBook = findAddressBook(wip.levelAddressBookTraverserMap[lowerFieldName], [ lowerInfo.code ]);
                    if (!lowerAddressBook) return wip;
                    const pCode = lowerAddressBook.pCode;
                    if (!pCode) return wip;
                    const addressBook = findAddressBook(wip.levelAddressBookTraverserMap[fieldName], [ pCode ]);
                    if (!addressBook) return wip;
                    return StateStore.withLevelField(wip, fieldName, (([fieldTemplate, _, traverser]) => [ fieldTemplate, {
                        code: addressBook.code,
                        name: addressBook.name
                    }, {
                        [fieldName]: traverser
                    } ]));
                }));
            }
            function shouldBackFillingPostcodeWithCommit(wip, commit) {
                if (StateStore.getInfoFieldValue(wip, FieldNameEnum.Postcode)) return false;
                const blobState = commit.diffAddressFieldInfo(FieldNameEnum.Postcode);
                return K(blobState).with({
                    type: "Changed",
                    payload: w.select()
                }, (blob => K(blob).with({
                    type: w.union("fieldUpdatedBlob", "fieldsUpdatedBlob")
                }, (_ => false)).otherwise((() => true)))).otherwise((() => true));
            }
            function maybeBackFillPostcodeWithAddressLevelInfo(current, wip, commit) {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    if (!shouldBackFillingPostcodeWithCommit(wip, commit)) return wip;
                    let fieldName = FieldNameEnum.District;
                    do {
                        if (null != fieldName && isSelectInteractionField(wip.fieldTemplateMap[fieldName])) {
                            const addressBook = findAddressBook(wip.levelAddressBookTraverserMap[fieldName], [ StateStore.getLevelInfo(wip, fieldName).code ]);
                            if (addressBook) {
                                if ("string" === typeof addressBook.zipCode && addressBook.zipCode) wip.infoFieldValueMap[FieldNameEnum.Postcode] = addressBook.zipCode; else if (Array.isArray(addressBook.zipCode) && addressBook.zipCode[0]) wip.infoFieldValueMap[FieldNameEnum.Postcode] = addressBook.zipCode[0];
                                return wip;
                            }
                        }
                        fieldName = getUpperAddressLevel(fieldName);
                    } while (fieldName);
                    return wip;
                }));
            }
            function buildAddressInfoField(current, wip, fieldName, commit, props) {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    const blobState = commit.diffAddressFieldInfo(fieldName);
                    return StateStore.withInfoField(wip, fieldName, (([fieldTemplate, value]) => {
                        if ("function" === typeof (null === props || void 0 === props ? void 0 : props.fieldTemplateDecorator)) {
                            const result = props.fieldTemplateDecorator(fieldName, fieldTemplate);
                            if (null != result) fieldTemplate = Object.assign(Object.assign({}, fieldTemplate), {
                                display: result.display
                            });
                        }
                        return [ fieldTemplate, K(blobState).with({
                            type: "Changed",
                            payload: w.select()
                        }, (payload => peekAddressInfoBlobValue(payload, fieldName))).otherwise((() => StateStore.getInfoFieldValue(current, fieldName))) ];
                    }));
                }));
            }
            function fetchAddressTemplate(country, props) {
                return __awaiter$1(this, void 0, void 0, (function*() {
                    let template = createDefaultAddressTemplate();
                    const templateRes = yield port.getAddressTemplate(country || "DEFAULT");
                    if (templateRes.success) template = templateRes.data;
                    if ("function" === typeof (null === props || void 0 === props ? void 0 : props.addressTemplateDecorator)) {
                        const model = createAddressTemplateModel(template);
                        props.addressTemplateDecorator(model);
                        template = model.build();
                    }
                    return {
                        addressTemplate: template,
                        fieldLayoutGroup: buildFieldLayoutGroup(country, template, props)
                    };
                }));
            }
            function buildFieldLayoutGroup(country, addressTemplate, props) {
                let layoutGroupFactory = createFieldLayoutGroupFactory(country, addressTemplate);
                let layoutGroupModel;
                if ("function" === typeof (null === props || void 0 === props ? void 0 : props.fieldLayoutGroupDecorator)) layoutGroupModel = props.fieldLayoutGroupDecorator(layoutGroupFactory);
                if (!layoutGroupModel) layoutGroupModel = layoutGroupFactory.takeGroupModel();
                return layoutGroupModel.build();
            }
            return {
                reduce(current, props, commit) {
                    return __awaiter$1(this, void 0, void 0, (function*() {
                        if (commit.isClean()) return responseCompleteWithData(current);
                        const countryListRes = yield port.getCountryList();
                        let wip;
                        if (!countryListRes.success || countryListRes.data.length <= 0) {
                            const stateParams = yield fetchAddressTemplate("DEFAULT", props);
                            wip = StateStore.initDomainState({
                                addressTemplate: stateParams.addressTemplate,
                                fieldLayoutGroup: stateParams.fieldLayoutGroup
                            });
                            wip = StateStore.withLevelField(wip, FieldNameEnum.Country, (([fieldTemplate]) => [ fieldTemplate, noopAddressLevelValue(), createAddressBookTraverser([], FieldNameEnum.Country, 1) ]));
                        } else {
                            const addressBookTraverser = createAddressBookTraverser(countryListRes.data.map((info => ({
                                name: info.name,
                                code: info.code,
                                alias: "",
                                pCode: "",
                                gCode: info.code,
                                zipCode: []
                            }))), FieldNameEnum.Country, 1);
                            const countryBlobState = commit.diffAddressFieldInfo(FieldNameEnum.Country);
                            if ("Changed" === countryBlobState.type) {
                                let countryCode = K(countryBlobState.payload).with({
                                    type: "fieldUpdatedBlob",
                                    payload: w.select()
                                }, (payload => payload.candidates[0])).with({
                                    type: "fieldsUpdatedBlob",
                                    payload: w.select()
                                }, (payload => payload[FieldNameEnum.Country][0])).with({
                                    type: "addressInfoReplacedBlob",
                                    payload: w.select()
                                }, (payload => payload.countryCode || "")).with({
                                    type: "addressInfoUpdatedBlob",
                                    payload: w.select()
                                }, (payload => payload.countryCode || "")).otherwise((() => ""));
                                const countryInfo = countryCode ? countryListRes.data.find((item => item.code === countryCode)) : null;
                                if (null == countryInfo) {
                                    const stateParams = yield fetchAddressTemplate("DEFAULT", props);
                                    wip = StateStore.initDomainState({
                                        addressTemplate: stateParams.addressTemplate,
                                        fieldLayoutGroup: stateParams.fieldLayoutGroup
                                    });
                                    wip = StateStore.withLevelField(wip, FieldNameEnum.Country, (([fieldTemplate]) => [ fieldTemplate, noopAddressLevelValue(), addressBookTraverser ]));
                                } else {
                                    const stateParams = yield fetchAddressTemplate(countryInfo.code, props);
                                    wip = StateStore.initDomainState({
                                        addressTemplate: stateParams.addressTemplate,
                                        fieldLayoutGroup: stateParams.fieldLayoutGroup
                                    });
                                    wip = StateStore.withLevelField(wip, FieldNameEnum.Country, (([fieldTemplate]) => [ fieldTemplate, countryInfo, addressBookTraverser ]));
                                }
                            } else {
                                const stateParams = yield fetchAddressTemplate(StateStore.getCountryCode(current), props);
                                wip = StateStore.initDomainState({
                                    addressTemplate: stateParams.addressTemplate,
                                    fieldLayoutGroup: stateParams.fieldLayoutGroup
                                });
                                wip = StateStore.withLevelField(wip, FieldNameEnum.Country, (([fieldTemplate]) => [ fieldTemplate, current.levelValueMap[FieldNameEnum.Country], addressBookTraverser ]));
                            }
                        }
                        for (const fieldName of getSortedAddressLevelList(true)) wip = yield buildAddressLevelField(current, wip, fieldName, commit);
                        for (const fieldName of getSortedAddressLevelList(true).reverse()) wip = yield maybeBackFillingAddressLevelInfo(current, wip, fieldName);
                        for (let fieldName of wip.infoFieldSet) wip = yield buildAddressInfoField(current, wip, fieldName, commit, props);
                        wip = yield maybeBackFillPostcodeWithAddressLevelInfo(current, wip, commit);
                        return responseCompleteWithData(wip);
                    }));
                }
            };
        }
        function buildModel(state, props) {
            const fieldTemplateLayout = StateStore.getFieldTemplateLayout(state);
            const model = {
                get addressInfo() {
                    return StateStore.getAddressInfo(state);
                },
                get addressTemplate() {
                    return state.addressTemplate;
                },
                get fieldTemplateMap() {
                    return Object.assign({}, state.fieldTemplateMap);
                },
                get fieldAddressBookTraverser() {
                    return Object.assign({}, state.levelAddressBookTraverserMap);
                },
                fieldTemplateLayout: fieldTemplateLayout.fieldTemplateLayout,
                fieldTemplateSequence: fieldTemplateLayout.fieldTemplateSequence,
                get fieldAddressBookMap() {
                    return getSortedAddressLevelList().reduce(((result, fieldName) => {
                        const traverser = state.levelAddressBookTraverserMap[fieldName];
                        Object.defineProperty(result, fieldName, {
                            enumerable: true,
                            configurable: true,
                            get() {
                                const list = [];
                                if (traverser) traverser.traverse(((fieldName, value) => {
                                    const addressBook = __rest(value, [ "subNodes" ]);
                                    list.push(addressBook);
                                }));
                                return list;
                            }
                        });
                        return result;
                    }), {});
                },
                traverseAddressLevelField(cb) {
                    getSortedAddressLevelList().forEach((fieldName => cb(fieldName, state.fieldTemplateMap[fieldName])));
                },
                traverseAddressInfoField(cb) {
                    state.infoFieldSet.forEach((fieldName => cb(fieldName, state.fieldTemplateMap[fieldName])));
                },
                traverseAddressField(cb) {
                    model.traverseAddressLevelField(cb);
                    model.traverseAddressInfoField(cb);
                },
                bailTraverseAddressLevelField(cb, initValue) {
                    const list = getSortedAddressLevelList();
                    for (let i = 0; i < list.length; ++i) {
                        const fieldName = list[i];
                        const v = cb(fieldName, state.fieldTemplateMap[fieldName]);
                        if (void 0 !== v) return v;
                    }
                    return initValue;
                }
            };
            return model;
        }
        function isThenable(v) {
            if (!v) return false;
            if ("object" !== typeof v) return false;
            if (v instanceof Promise) return true;
            return "function" === typeof v.then;
        }
        function isCatchable(v) {
            if (!v) return false;
            if ("object" !== typeof v) return false;
            if (v instanceof Promise) return true;
            return "function" === typeof v.catch;
        }
        function cacheable(fn) {
            let prevParams;
            let prevResult;
            return function(...params) {
                if (prevParams && compare(prevParams, params) && prevResult) return prevResult;
                prevParams = params;
                prevResult = void 0;
                const result = fn.apply(this, params);
                prevResult = result;
                if (isThenable(result) && isCatchable(result)) result.catch((_ => {
                    if (prevParams === params && prevResult === result) {
                        prevParams = void 0;
                        prevResult = void 0;
                    }
                }));
                return result;
            };
        }
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
        function createDomainService(params) {
            const addressTemplateFetcher = createAddressTemplateFetcher(params.addressTemplateFetcher);
            const addressBookFetcher = createAddressBookFetcher(params.addressBookFetcher);
            const countrySource = createCountrySource(params.countrySource);
            return {
                get port() {
                    return Object.assign(Object.assign(Object.assign({}, countrySource), addressTemplateFetcher), addressBookFetcher);
                }
            };
        }
        function createCountrySource(adapter) {
            const getCountryList = cacheable(adapter.getCountryList);
            return {
                getCountryList() {
                    return getCountryList().catch((e => {
                        console.error("failed to get getCountryList", e);
                        return responseFailWithCode("FA_ADDRESS_UNKNOWN");
                    }));
                }
            };
        }
        function createAddressTemplateFetcher(adapter) {
            return {
                getAddressTemplate: cacheable((countryCode => __awaiter$1(this, void 0, void 0, (function*() {
                    const res = yield adapter.getAddressTemplate(countryCode).catch((e => {
                        console.error("failed to get getAddressTemplate", e);
                        return responseFailWithCode("FA_ADDRESS_UNKNOWN");
                    }));
                    if (!res.success) return res;
                    return Object.assign(Object.assign({}, res), {
                        data: Object.assign(Object.assign({}, res.data), {
                            props: res.data.props.map((template => {
                                if ("address1" === template.propKey) return Object.assign(Object.assign({}, template), {
                                    propKey: FieldNameEnum.Address
                                });
                                return template;
                            }))
                        })
                    });
                }))))
            };
        }
        function createAddressBookFetcher(adapter) {
            const fetcherCache = {};
            function getCacheId(countryCode, fieldName, depth) {
                return `${countryCode}__${fieldName}__${depth || 1}`;
            }
            function createCache() {
                return {
                    getAddressBook: cacheable(((countryCode, fieldName, code, depth) => adapter.getAddressBook(countryCode, fieldName, code, depth).catch((e => {
                        console.error("failed to get getAddressBook", e);
                        return responseFailWithCode("FA_ADDRESS_UNKNOWN");
                    }))))
                };
            }
            function getCache(countryCode, fieldName, code, depth) {
                const cacheId = getCacheId(countryCode, fieldName, depth);
                if (null == fetcherCache[cacheId]) fetcherCache[cacheId] = createCache();
                return fetcherCache[cacheId];
            }
            return {
                getAddressBook(countryCode, fieldName, code, depth) {
                    const fetcher = getCache(countryCode, fieldName, code, depth);
                    return fetcher.getAddressBook(countryCode, fieldName, code, depth);
                }
            };
        }
        const TickDefer = "Defer";
        const TickBlocking = "Blocking";
        function createScheduler(executor, config) {
            const state = {
                pending: false,
                scheduled: false
            };
            const pendingTask = createPendingTask((() => {
                state.pending = false;
                flush();
            }));
            const flush = () => {
                if (!state.pending && state.scheduled) {
                    state.scheduled = false;
                    state.pending = true;
                    pendingTask.tick(executor);
                }
            };
            return {
                tick(priority) {
                    switch (priority) {
                      case TickDefer:
                        state.scheduled = true;
                        setTimeout((() => {
                            flush();
                        }), initDeferTimeoutMS(null === config || void 0 === config ? void 0 : config.deferTimeout));
                        return;

                      case TickBlocking:
                        state.scheduled = true;
                        flush();
                        return;

                      default:
                        return;
                    }
                }
            };
        }
        function createPendingTask(observer) {
            return {
                tick(executor) {
                    executor().finally((() => {
                        observer();
                    }));
                }
            };
        }
        function initDeferTimeoutMS(config) {
            if ("number" !== typeof config) config = Number(config);
            if (config !== config || config < 0) config = 10;
            return config;
        }
        function getTickPriority(blob) {
            return K(blob).with({
                type: w.union("addressInfoReplacedBlob", "addressInfoUpdatedBlob", "fieldsUpdatedBlob")
            }, (blob => TickBlocking)).with({
                type: "fieldUpdatedBlob",
                payload: w.select()
            }, (payload => Reflect.has(payload, FieldNameEnum.Country) ? TickBlocking : TickDefer)).otherwise((() => TickDefer));
        }
        function createCommitBlobStream(observer) {
            const queue = [];
            const exhauseQueue = [];
            const scheduler = createScheduler((() => __awaiter$1(this, void 0, void 0, (function*() {
                const blobs = queue.slice(0);
                if (blobs.length > 0) yield observer(blobs);
                queue.splice(0);
                exhauseQueue.splice(0).forEach((cb => {
                    if ("function" === typeof cb) cb();
                }));
                return;
            }))), {
                deferTimeout: 10
            });
            return {
                add(blob) {
                    console.debug("add address blob stream", blob);
                    queue.push(blob);
                    K(getTickPriority(blob)).with(TickBlocking, (() => scheduler.tick(TickBlocking))).otherwise((() => scheduler.tick(TickDefer)));
                },
                exhaust() {
                    if (queue.length <= 0) return Promise.resolve();
                    return new Promise((resolve => {
                        exhauseQueue.push(resolve);
                    }));
                }
            };
        }
        function createHost(config) {
            var _a, _b, _c;
            const initTemplateModel = createAddressTemplateModel((null === (_a = null === config || void 0 === config ? void 0 : config.initState) || void 0 === _a ? void 0 : _a.addressTemplate) || createDefaultAddressTemplate());
            if ("function" === typeof (null === (_b = null === config || void 0 === config ? void 0 : config.initProps) || void 0 === _b ? void 0 : _b.addressTemplateDecorator)) config.initProps.addressTemplateDecorator(initTemplateModel);
            const initTemplate = initTemplateModel.build();
            let layoutGroupFactory = createFieldLayoutGroupFactory(initTemplate.country, initTemplate);
            let layoutGroupModel;
            if ("function" === typeof (null === (_c = null === config || void 0 === config ? void 0 : config.initProps) || void 0 === _c ? void 0 : _c.fieldLayoutGroupDecorator)) layoutGroupModel = null === config || void 0 === config ? void 0 : config.initProps.fieldLayoutGroupDecorator(layoutGroupFactory);
            if (null == layoutGroupModel) layoutGroupModel = layoutGroupFactory.takeGroupModel();
            let state = StateStore.initDomainState({
                addressTemplate: initTemplate,
                fieldLayoutGroup: layoutGroupModel.build()
            });
            let props = config.initProps || {};
            let model = buildModel(state);
            let service = createDomainService(config.adapter);
            const modelSubject = observe();
            let domainReducer = createReducer(service.port);
            const blobStream = createCommitBlobStream((blobs => __awaiter$1(this, void 0, void 0, (function*() {
                const commit = createCommit(blobs);
                let nextProps = props;
                let propsCommit = commit.diffDomainProps();
                if ("Changed" === propsCommit.type) nextProps = propsCommit.payload.payload;
                const reduceRes = yield domainReducer.reduce(state, nextProps, commit);
                if (reduceRes.success) {
                    state = reduceRes.data;
                    model = buildModel(reduceRes.data);
                    modelSubject.next(model);
                    props = nextProps;
                } else modelSubject.next(model);
            }))));
            const host = {
                init() {
                    var _a;
                    blobStream.add({
                        type: "addressInfoReplacedBlob",
                        payload: (null === (_a = config.initState) || void 0 === _a ? void 0 : _a.addressInfo) || {}
                    });
                    return host.exhaustModel();
                },
                getModel() {
                    return model;
                },
                exhaustModel() {
                    return blobStream.exhaust().then((() => model));
                },
                observeModel(observer, immediate) {
                    if (true === immediate) setTimeout((() => {
                        observer(model);
                    }), 0);
                    return modelSubject.subscribe(observer);
                },
                updateAdapter(adapter) {
                    host.exhaustModel().finally((() => {
                        service = createDomainService(adapter);
                        domainReducer = createReducer(service.port);
                        host.updateFieldsValue({});
                    }));
                },
                updateProps(params) {
                    let wipProps;
                    if ("function" === typeof params) wipProps = params(props); else wipProps = params;
                    blobStream.add({
                        type: "domainPropsUpdatedBlob",
                        payload: wipProps
                    });
                },
                updateFieldValue(fieldName, ...candidates) {
                    blobStream.add({
                        type: "fieldUpdatedBlob",
                        payload: {
                            fieldName,
                            candidates
                        }
                    });
                },
                updateFieldsValue(params) {
                    blobStream.add({
                        type: "fieldsUpdatedBlob",
                        payload: Object.keys(params).reduce(((data, key) => {
                            data[key] = [ params[key] ];
                            return data;
                        }), {})
                    });
                },
                updateFieldsValueWithCandidates(params) {
                    blobStream.add({
                        type: "fieldsUpdatedBlob",
                        payload: Object.keys(params).reduce(((data, key) => {
                            data[key] = params[key];
                            return data;
                        }), {})
                    });
                },
                updateAddressInfo(params) {
                    blobStream.add({
                        type: "addressInfoUpdatedBlob",
                        payload: params
                    });
                },
                clearAddressInfo() {
                    blobStream.add({
                        type: "addressInfoReplacedBlob",
                        payload: {}
                    });
                },
                replaceAddressInfo(params) {
                    blobStream.add({
                        type: "addressInfoReplacedBlob",
                        payload: params
                    });
                }
            };
            return host;
        }
        var commonjsGlobal = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof __webpack_require__.g ? __webpack_require__.g : "undefined" !== typeof self ? self : {};
        function getDefaultExportFromCjs(x) {
            return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
        }
        var dist$2 = {};
        var context = {};
        var dist$1 = {};
        var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
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
        var __generator = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
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
        Object.defineProperty(dist$1, "__esModule", {
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
        dist$1.default = {
            zombie,
            resolvable: promiseResolvable,
            resolveAfterEventBubbled,
            resolveAfterSeconds,
            resolveAfterDuration
        };
        var dist = {};
        Object.defineProperty(dist, "__esModule", {
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
        dist.default = {
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
        var constant = {};
        Object.defineProperty(constant, "__esModule", {
            value: true
        });
        var errCanceled = "context done with cancellation";
        var errTimeout = "context done with timeout";
        var errDeadline = "context done with deadline";
        var errNotNullableValuer = "valuer is not nullable";
        constant.default = {
            errCanceled,
            errTimeout,
            errDeadline,
            errNotNullableValuer
        };
        var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(context, "__esModule", {
            value: true
        });
        var promise_1 = __importDefault$1(dist$1);
        var time_1 = __importDefault$1(dist);
        var constant_1$1 = __importDefault$1(constant);
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
        context.default = {
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
                        return new Error(constant_1$1.default.errTimeout);
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
                        return new Error(constant_1$1.default.errDeadline);
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
                        return new Error(constant_1$1.default.errCanceled);
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
        var valuer = {};
        var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(valuer, "__esModule", {
            value: true
        });
        var constant_1 = __importDefault(constant);
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
        valuer.default = {
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
        (function(exports) {
            var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
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
            var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports) {
                for (var p in m) if ("default" !== p && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
            };
            var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var context_1 = __importDefault(context);
            var constant_1 = __importDefault(constant);
            var valuer_1 = __importDefault(valuer);
            __exportStar(context, exports);
            __exportStar(valuer, exports);
            exports.default = __assign(__assign(__assign({}, constant_1.default), context_1.default), valuer_1.default);
        })(dist$2);
        var Context = getDefaultExportFromCjs(dist$2);
        function pairwiseModel(host, observer, immediate) {
            let prevModel;
            return host.observeModel((model => {
                const prevInfo = (null === prevModel || void 0 === prevModel ? void 0 : prevModel.addressInfo) || {};
                const currentInfo = model.addressInfo;
                const prevKeys = new Set(Object.keys(prevInfo));
                const currentKeys = new Set(Object.keys(currentInfo));
                const diff = {};
                currentKeys.forEach((key => {
                    if (!prevKeys.has(key) || prevInfo[key] !== currentInfo[key]) diff[key] = currentInfo[key] || null;
                    prevKeys.delete(key);
                }));
                prevKeys.forEach((key => {
                    diff[key] = null;
                }));
                observer([ prevModel, model, diff ]);
                prevModel = model;
            }), immediate);
        }
        function distinctUntil(host, comparator, observer, immediate) {
            let [distinctCtx, distinctCancel] = Context.withCancel(Context.background());
            let [prevCtx, prevCancel] = Context.withCancel(distinctCtx);
            const subscription = pairwiseModel(host, (([prev, current]) => {
                if ("function" === typeof comparator && comparator(prev, current)) {
                    const [nextCtx, nextCancel] = Context.withCancel(distinctCtx);
                    prevCancel();
                    prevCtx.done().finally((() => {
                        observer(nextCtx, current);
                    }));
                    prevCtx = nextCtx;
                    prevCancel = nextCancel;
                }
            }), immediate);
            distinctCtx.done().finally((() => {
                subscription.unsubscribe();
            }));
            return {
                unsubscribe() {
                    distinctCancel();
                }
            };
        }
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
        const utils_request = instance;
        const request_request = utils_request;
        const USER_CENTER = "/user/center";
        const SIGN_IN = "/user/signIn";
        "undefined" === typeof window || window.location.origin;
        const LOGISTICS_COUNTRIES = "/logistics/countries";
        const LOGISTICS_ADDRESS_LIBRARY = "/logistics/address/library";
        const LOGISTICS_ADDRESS_LAYER = "/logistics/address/layer/list";
        const LOGISTICS_ADDRESS_TEMPLATE = "/logistics/addr/template/get";
        var url = __webpack_require__("../shared/browser/biz-com/customer/utils/url.js");
        function getEnv(key) {
            const ENV = window.__ENV__ || {};
            if (key) return ENV[key];
            return ENV;
        }
        [ "preview", "product" ].includes(getEnv().APP_ENV || "");
        const DEFAULT_LANGUAGE = "en";
        const DEFAULT_PHONE_ISO2 = "cn";
        const DEFAULT_PHONE_CODE = "cn+86";
        function helper_getLanguage() {
            return window && window.SL_State && window.SL_State.get("request.cookie.lang") || DEFAULT_LANGUAGE;
        }
        const getRedirectUrl = () => {
            let redirectUrl = (0, url.getUrlQuery)("redirectUrl");
            let state = (0, url.getUrlQuery)("state");
            try {
                if (state) {
                    state = JSON.parse(state);
                    redirectUrl = state.redirectUrl || redirectUrl;
                }
            } catch (e) {
                console.error(e);
            }
            return redirectUrl;
        };
        function redirectPage(pathname) {
            const redirectUrl = getRedirectUrl();
            window.location.href = redirectUrl || pathname;
        }
        var eventemitter3 = __webpack_require__("../shared/browser/node_modules/eventemitter3/index.js");
        var eventemitter3_default = __webpack_require__.n(eventemitter3);
        if (!window.SL_EventBus) {
            window.SL_EventBus = new (eventemitter3_default());
            window.SL_EventEmitter = eventemitter3_default();
        }
        const {SL_EventBus} = window;
        const {SL_EventEmitter} = window;
        window.SL_EventBus, window.SL_EventEmitter;
        function parsePathToArray(path) {
            if ("string" !== typeof path) throw new TypeError("path must be string");
            return path.replace(/\]/, "").split(/[.[]/);
        }
        const utils_parsePathToArray = parsePathToArray;
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
        function createAdapter() {
            const presetAddressTemplate = SL_State.get("customer_address_template");
            return {
                countrySource: {
                    async getCountryList() {
                        const res = await request_request.get(LOGISTICS_COUNTRIES, {
                            params: {
                                popularType: "receiving"
                            }
                        });
                        if (true !== res.success) return res;
                        return {
                            ...res,
                            data: (res.data || []).map((country => unmarshalCountryLevelInfo(country, helper_getLanguage())))
                        };
                    }
                },
                addressBookFetcher: {
                    async getAddressBook(countryCode, fieldName, code, depth) {
                        if ("country" === fieldName) return request_request.get(LOGISTICS_ADDRESS_LIBRARY, {
                            params: {
                                countryCode,
                                level: null == depth ? 3 : depth,
                                language: helper_getLanguage()
                            }
                        });
                        if (!code) return {
                            success: true,
                            code: "SUCCESS",
                            data: []
                        };
                        return request_request.get(LOGISTICS_ADDRESS_LAYER, {
                            params: {
                                countryCode,
                                addressCode: code,
                                depth: depth || 1
                            }
                        });
                    }
                },
                addressTemplateFetcher: {
                    async getAddressTemplate(countryCode) {
                        if (presetAddressTemplate && presetAddressTemplate.country === countryCode) return {
                            success: true,
                            code: "success",
                            data: presetAddressTemplate
                        };
                        return request_request.get(LOGISTICS_ADDRESS_TEMPLATE, {
                            params: {
                                country: countryCode
                            }
                        });
                    }
                }
            };
        }
        function unmarshalCountryLevelInfo(country, language) {
            let {name} = country;
            const i18nCountryInfos = country.countryInfos || {};
            const localCountryInfo = language ? i18nCountryInfos[language] : null;
            if (null != localCountryInfo && localCountryInfo.name) name = localCountryInfo.name;
            return {
                code: country.countryCode,
                name
            };
        }
        var index_esm_FieldNameEnum;
        (function(FieldNameEnum) {
            FieldNameEnum["Country"] = "country";
            FieldNameEnum["Province"] = "province";
            FieldNameEnum["City"] = "city";
            FieldNameEnum["District"] = "district";
            FieldNameEnum["Name"] = "name";
            FieldNameEnum["FirstName"] = "firstName";
            FieldNameEnum["LastName"] = "lastName";
            FieldNameEnum["Mobile"] = "mobile";
            FieldNameEnum["Postcode"] = "postcode";
            FieldNameEnum["Company"] = "company";
            FieldNameEnum["Address"] = "address";
            FieldNameEnum["Address2"] = "address2";
        })(index_esm_FieldNameEnum || (index_esm_FieldNameEnum = {}));
        var index_esm_AddressTemplateNameTypeEnum;
        (function(AddressTemplateNameTypeEnum) {
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["NAME"] = 1] = "NAME";
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["FLName"] = 2] = "FLName";
        })(index_esm_AddressTemplateNameTypeEnum || (index_esm_AddressTemplateNameTypeEnum = {}));
        var index_esm_FieldInteractionEnum;
        (function(FieldInteractionEnum) {
            FieldInteractionEnum[FieldInteractionEnum["Select"] = 1] = "Select";
            FieldInteractionEnum[FieldInteractionEnum["Input"] = 2] = "Input";
        })(index_esm_FieldInteractionEnum || (index_esm_FieldInteractionEnum = {}));
        function mapAutofillToken(fieldName) {
            switch (fieldName) {
              case index_esm_FieldNameEnum.Name:
                return "name";

              case index_esm_FieldNameEnum.FirstName:
                return "given-name";

              case index_esm_FieldNameEnum.LastName:
                return "family-name";

              case index_esm_FieldNameEnum.Mobile:
                return "tel";

              case index_esm_FieldNameEnum.Postcode:
                return "postal-code";

              case index_esm_FieldNameEnum.Address:
                return "street-address";

              case index_esm_FieldNameEnum.Address2:
                return "address-line2";

              case index_esm_FieldNameEnum.Country:
                return "country";

              case index_esm_FieldNameEnum.Province:
                return "address-level1";

              case index_esm_FieldNameEnum.City:
                return "address-level2";

              case index_esm_FieldNameEnum.District:
                return "address-level3";

              case index_esm_FieldNameEnum.Company:
                return "organization";

              default:
                return "on";
            }
        }
        function litAutofillControls(model) {
            const controls = [];
            model.traverseAddressLevelField(((fieldName, fieldTemplate) => {
                if ("country" === fieldName) {
                    const options = function() {
                        const traverser = model.fieldAddressBookTraverser[fieldName];
                        const options = [];
                        if (traverser) traverser.traverse(((_, addressBook) => {
                            options.push({
                                value: addressBook.code,
                                text: addressBook.name
                            });
                        }));
                        return options;
                    }();
                    controls.push(`\n<select style="${createHiddenStyle()}" label="" aria-hidden="true" aria-label="no-label" type="text" name="${fieldName}" autocomplete="${mapAutofillToken(fieldName)}">\n        ${options.map((option => `<option value="${option.value}">${option.text}</option>`)).join("")}\n</select>\n        `);
                } else controls.push(`\n        <input style="${createHiddenStyle()}" label="" aria-hidden="true" aria-label="no-label" type="text" name="${fieldName}" autocomplete="${mapAutofillToken(fieldName)}" />\n        `);
            }));
            model.traverseAddressInfoField(((fieldName, fieldTemplate) => {
                if (isVisibleField(fieldTemplate)) controls.push(`\n        <input style="${createHiddenStyle()}" label="" aria-hidden="true" aria-label="no-label" type="text" name="${fieldName}" autocomplete="${mapAutofillToken(fieldName)}" />\n        `);
            }));
            return controls;
        }
        function createHiddenStyle() {
            return `\n    border: 0;\n    clip: rect(0, 0, 0, 0);\n    clip: rect(0 0 0 0);\n    width: 2px;\n    height: 2px;\n    margin: -2px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap\n  `;
        }
        function index_esm_awaiter$1(thisArg, _arguments, P, generator) {
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
        var index_esm_commonjsGlobal = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof __webpack_require__.g ? __webpack_require__.g : "undefined" !== typeof self ? self : {};
        function index_esm_getDefaultExportFromCjs(x) {
            return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
        }
        var index_esm_dist$2 = {};
        var context$1 = {};
        var index_esm_dist$1 = {};
        var index_esm_awaiter = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
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
        var index_esm_generator = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__generator || function(thisArg, body) {
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
        Object.defineProperty(index_esm_dist$1, "__esModule", {
            value: true
        });
        function index_esm_resolveAfterDuration(dur) {
            return index_esm_awaiter(this, void 0, void 0, (function() {
                return index_esm_generator(this, (function(_a) {
                    if (dur <= 0) return [ 2, Promise.resolve() ];
                    return [ 2, new Promise((function(resolve) {
                        setTimeout((function() {
                            resolve();
                        }), dur);
                    })) ];
                }));
            }));
        }
        function index_esm_resolveAfterSeconds(s) {
            return index_esm_awaiter(this, void 0, void 0, (function() {
                return index_esm_generator(this, (function(_a) {
                    if (s <= 0) return [ 2, Promise.resolve() ];
                    return [ 2, new Promise((function(resolve) {
                        setTimeout((function() {
                            resolve();
                        }), 1e3 * s);
                    })) ];
                }));
            }));
        }
        function index_esm_resolveAfterEventBubbled($ele, eventName) {
            return index_esm_awaiter(this, void 0, void 0, (function() {
                return index_esm_generator(this, (function(_a) {
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
        function index_esm_promiseResolvable() {
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
        var index_esm_zombie = new Promise((function(_) {}));
        index_esm_dist$1.default = {
            zombie: index_esm_zombie,
            resolvable: index_esm_promiseResolvable,
            resolveAfterEventBubbled: index_esm_resolveAfterEventBubbled,
            resolveAfterSeconds: index_esm_resolveAfterSeconds,
            resolveAfterDuration: index_esm_resolveAfterDuration
        };
        var index_esm_dist = {};
        Object.defineProperty(index_esm_dist, "__esModule", {
            value: true
        });
        var index_esm_Millisecond = 1;
        var index_esm_Second = 1e3 * index_esm_Millisecond;
        var index_esm_Minute = 60 * index_esm_Second;
        var index_esm_Hour = 60 * index_esm_Minute;
        var index_esm_Day = 24 * index_esm_Hour;
        var index_esm_Week = 7 * index_esm_Day;
        var index_esm_Time = function() {
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
        function index_esm_time(v) {
            return new index_esm_Time(v);
        }
        function now$2() {
            return index_esm_time(Date.now());
        }
        function index_esm_later(dur) {
            return now$2().add(dur);
        }
        function index_esm_former(dur) {
            return now$2().sub(dur);
        }
        index_esm_dist.default = {
            time: index_esm_time,
            now: now$2,
            later: index_esm_later,
            former: index_esm_former,
            Millisecond: index_esm_Millisecond,
            Second: index_esm_Second,
            Minute: index_esm_Minute,
            Hour: index_esm_Hour,
            Day: index_esm_Day,
            Week: index_esm_Week
        };
        var index_esm_constant = {};
        Object.defineProperty(index_esm_constant, "__esModule", {
            value: true
        });
        var index_esm_errCanceled = "context done with cancellation";
        var index_esm_errTimeout = "context done with timeout";
        var index_esm_errDeadline = "context done with deadline";
        var index_esm_errNotNullableValuer = "valuer is not nullable";
        index_esm_constant.default = {
            errCanceled: index_esm_errCanceled,
            errTimeout: index_esm_errTimeout,
            errDeadline: index_esm_errDeadline,
            errNotNullableValuer: index_esm_errNotNullableValuer
        };
        var index_esm_importDefault$1 = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(context$1, "__esModule", {
            value: true
        });
        var index_esm_promise_1 = index_esm_importDefault$1(index_esm_dist$1);
        var index_esm_time_1 = index_esm_importDefault$1(index_esm_dist);
        var index_esm_constant_1$1 = index_esm_importDefault$1(index_esm_constant);
        function index_esm_background() {
            return index_esm_forkParentCtx(dist_index_esm_background);
        }
        function index_esm_todo() {
            return index_esm_forkParentCtx(dist_index_esm_todo);
        }
        function index_esm_withValue(parent, valuer, value) {
            return index_esm_newValueCtx(parent, valuer, value);
        }
        function index_esm_withCancel(parent) {
            return index_esm_newCancelCtx(parent);
        }
        function index_esm_withTimeout(parent, timeout) {
            return index_esm_newCancelCtx(index_esm_newTimeoutCtx(parent, timeout));
        }
        function index_esm_withDeadline(parent, deadline) {
            return index_esm_newCancelCtx(index_esm_newDeadlineCtx(parent, deadline));
        }
        context$1.default = {
            background: index_esm_background,
            todo: index_esm_todo,
            withValue: index_esm_withValue,
            withCancel: index_esm_withCancel,
            withTimeout: index_esm_withTimeout,
            withDeadline: index_esm_withDeadline
        };
        function index_esm_newEmptyCtx() {
            return {
                deadline: function() {
                    return null;
                },
                done: function() {
                    return index_esm_promise_1.default.zombie;
                },
                err: function() {
                    return null;
                },
                value: function(cv) {
                    return cv ? cv.defaultGetter() : null;
                }
            };
        }
        function index_esm_newValueCtx(parent, valuer, value) {
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
        function index_esm_forkParentCtx(parent) {
            if (!parent) parent = dist_index_esm_background;
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
        function index_esm_createCancellablePromise() {
            return index_esm_promise_1.default.resolvable();
        }
        function index_esm_newTimeoutCtx(parent, dur) {
            var error;
            var deadline = index_esm_time_1.default.later(dur);
            var timeoutPromise = index_esm_promise_1.default.resolveAfterDuration(dur);
            return {
                deadline: function() {
                    return deadline;
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), timeoutPromise.then((function() {
                        return new Error(index_esm_constant_1$1.default.errTimeout);
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
        function index_esm_newDeadlineCtx(parent, deadline) {
            var error = null;
            var deadlinePromise = index_esm_promise_1.default.resolveAfterDuration(deadline.duration(index_esm_time_1.default.now()));
            return {
                deadline: function() {
                    return deadline;
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), deadlinePromise.then((function() {
                        return new Error(index_esm_constant_1$1.default.errDeadline);
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
        function index_esm_newCancelCtx(parent) {
            var _a = index_esm_createCancellablePromise(), cancelPromise = _a[0], cancelFunc = _a[1];
            var error = null;
            return [ {
                deadline: function() {
                    return parent.deadline();
                },
                done: function() {
                    return Promise.race([ parent.done().then((function() {
                        return parent.err();
                    })), cancelPromise.then((function() {
                        return new Error(index_esm_constant_1$1.default.errCanceled);
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
        var dist_index_esm_background = index_esm_newEmptyCtx();
        var dist_index_esm_todo = index_esm_newEmptyCtx();
        var valuer$1 = {};
        var index_esm_importDefault = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(valuer$1, "__esModule", {
            value: true
        });
        var index_esm_constant_1 = index_esm_importDefault(index_esm_constant);
        function index_esm_newValuer(value) {
            var getter;
            if (void 0 === value) getter = function() {
                throw new Error(index_esm_constant_1.default.errNotNullableValuer);
            }; else getter = function() {
                return value;
            };
            return index_esm_createValuer(getter);
        }
        function index_esm_newValuerWithGetter(getter) {
            if ("function" !== typeof getter) getter = function() {
                throw new Error(index_esm_constant_1.default.errNotNullableValuer);
            };
            return index_esm_createValuer(getter);
        }
        valuer$1.default = {
            newValuer: index_esm_newValuer,
            newValuerWithGetter: index_esm_newValuerWithGetter
        };
        function index_esm_createValuer(getter) {
            return Object.defineProperty({}, "defaultGetter", {
                value: getter,
                writable: false,
                configurable: false
            });
        }
        (function(exports) {
            var __assign = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__assign || function() {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __createBinding = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
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
            var __exportStar = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__exportStar || function(m, exports) {
                for (var p in m) if ("default" !== p && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
            };
            var __importDefault = index_esm_commonjsGlobal && index_esm_commonjsGlobal.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var context_1 = __importDefault(context$1);
            var constant_1 = __importDefault(index_esm_constant);
            var valuer_1 = __importDefault(valuer$1);
            __exportStar(context$1, exports);
            __exportStar(valuer$1, exports);
            exports.default = __assign(__assign(__assign({}, constant_1.default), context_1.default), valuer_1.default);
        })(index_esm_dist$2);
        var index_esm_context = index_esm_getDefaultExportFromCjs(index_esm_dist$2);
        function withCountryCode(ctx, v) {
            return index_esm_context.withValue(ctx, countryCodeValuer, v);
        }
        function takeCountryCode$1(ctx) {
            return ctx.value(countryCodeValuer);
        }
        const countryCodeValuer = index_esm_context.newValuer("US");
        function noopAutocompleteService() {
            return {
                queryPlaceDetail(ctx, placeId) {
                    return index_esm_awaiter$1(this, void 0, void 0, (function*() {
                        console.log("noopAutocompleteService queryPlaceDetail", {
                            placeId
                        });
                        return {
                            ctx,
                            payload: {
                                type: "NOT_EXISTED",
                                placeId
                            },
                            provider: ""
                        };
                    }));
                },
                queryPlacePredictions(ctx, countryCode, query) {
                    return index_esm_awaiter$1(this, void 0, void 0, (function*() {
                        console.log("noopAutocompleteService queryPlacePredictions", {
                            countryCode,
                            query
                        });
                        return {
                            ctx,
                            payload: [],
                            provider: ""
                        };
                    }));
                }
            };
        }
        const autocompleteServiceValuer = index_esm_context.newValuerWithGetter(noopAutocompleteService);
        function withAutocompleteService(ctx, svc) {
            return index_esm_context.withValue(ctx, autocompleteServiceValuer, svc);
        }
        function takeAutocompleteService(ctx) {
            return ctx.value(autocompleteServiceValuer);
        }
        function noopHooks() {
            return {
                placePredicted() {},
                placeSelected() {}
            };
        }
        const hooksValuer = index_esm_context.newValuerWithGetter(noopHooks);
        function withAutocompleteHooks(ctx, hooks) {
            return index_esm_context.withValue(ctx, hooksValuer, Object.assign({}, noopHooks(), hooks));
        }
        function takeAutocompleteHooks(ctx) {
            return ctx.value(hooksValuer);
        }
        function query(ctx, list, query) {
            const promise = takeAutocompleteService(ctx).queryPlacePredictions(ctx, takeCountryCode$1(ctx), query);
            promise.then((response => {
                takeAutocompleteHooks(ctx).placePredicted({
                    countryCode: takeCountryCode$1(ctx),
                    query,
                    response
                });
            }));
            return {
                next: list,
                task: {
                    query,
                    promise: promise.then((res => {
                        const {payload: list} = res;
                        if (!list || list.length <= 0) return {
                            type: "Blank"
                        };
                        return {
                            type: "Filled",
                            predictions: list
                        };
                    }))
                }
            };
        }
        function wait(ctx, list, cb) {
            if (null != list) {
                const [waitCtx, cancelWait] = index_esm_context.withCancel(ctx);
                const task = list.task;
                task.promise.then((response => {
                    if (!waitCtx.err()) if ("Filled" === response.type) {
                        cb(task.query, response.predictions);
                        return;
                    } else {
                        wait(waitCtx, list.next, cb);
                        waitCtx.done().finally((() => {
                            cancelWait();
                        }));
                        return;
                    }
                }));
                return;
            }
            cb("", []);
        }
        function createPredictionStream() {
            let pong;
            let predictionList = null;
            let cancelWait;
            return {
                ping(ctx, v) {
                    if (cancelWait) cancelWait();
                    predictionList = query(ctx, predictionList, v);
                    const [waitCtx, cancelWaitCtx] = index_esm_context.withCancel(ctx);
                    wait(waitCtx, predictionList, ((query, list) => {
                        if ("function" === typeof pong) pong(query, list);
                    }));
                    cancelWait = cancelWaitCtx;
                },
                get pong() {
                    return pong;
                },
                set pong(cb) {
                    pong = cb;
                }
            };
        }
        function isObject$2(value) {
            var type = typeof value;
            return null != value && ("object" == type || "function" == type);
        }
        var isObject_1 = isObject$2;
        var freeGlobal$1 = "object" == typeof index_esm_commonjsGlobal && index_esm_commonjsGlobal && index_esm_commonjsGlobal.Object === Object && index_esm_commonjsGlobal;
        var _freeGlobal = freeGlobal$1;
        var freeGlobal = _freeGlobal;
        var freeSelf = "object" == typeof self && self && self.Object === Object && self;
        var root$2 = freeGlobal || freeSelf || Function("return this")();
        var _root = root$2;
        var root$1 = _root;
        var now$1 = function() {
            return root$1.Date.now();
        };
        var now_1 = now$1;
        var reWhitespace = /\s/;
        function trimmedEndIndex$1(string) {
            var index = string.length;
            while (index-- && reWhitespace.test(string.charAt(index))) ;
            return index;
        }
        var _trimmedEndIndex = trimmedEndIndex$1;
        var trimmedEndIndex = _trimmedEndIndex;
        var reTrimStart = /^\s+/;
        function baseTrim$1(string) {
            return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        var _baseTrim = baseTrim$1;
        var root = _root;
        var Symbol$3 = root.Symbol;
        var _Symbol = Symbol$3;
        var Symbol$2 = _Symbol;
        var objectProto$1 = Object.prototype;
        var index_esm_hasOwnProperty = objectProto$1.hasOwnProperty;
        var nativeObjectToString$1 = objectProto$1.toString;
        var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
        function getRawTag$1(value) {
            var isOwn = index_esm_hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
            try {
                value[symToStringTag$1] = void 0;
                var unmasked = true;
            } catch (e) {}
            var result = nativeObjectToString$1.call(value);
            if (unmasked) if (isOwn) value[symToStringTag$1] = tag; else delete value[symToStringTag$1];
            return result;
        }
        var _getRawTag = getRawTag$1;
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString$1(value) {
            return nativeObjectToString.call(value);
        }
        var _objectToString = objectToString$1;
        var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
        var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
        var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
        function baseGetTag$1(value) {
            if (null == value) return void 0 === value ? undefinedTag : nullTag;
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }
        var _baseGetTag = baseGetTag$1;
        function isObjectLike$1(value) {
            return null != value && "object" == typeof value;
        }
        var isObjectLike_1 = isObjectLike$1;
        var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
        var symbolTag = "[object Symbol]";
        function isSymbol$1(value) {
            return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isSymbol_1 = isSymbol$1;
        var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol = isSymbol_1;
        var NAN = 0 / 0;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber$1(value) {
            if ("number" == typeof value) return value;
            if (isSymbol(value)) return NAN;
            if (isObject$1(value)) {
                var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                value = isObject$1(other) ? other + "" : other;
            }
            if ("string" != typeof value) return 0 === value ? value : +value;
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        var toNumber_1 = toNumber$1;
        var isObject = isObject_1, index_esm_now = now_1, toNumber = toNumber_1;
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
                var time = index_esm_now();
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
                return void 0 === timerId ? result : trailingEdge(index_esm_now());
            }
            function debounced() {
                var time = index_esm_now(), isInvoking = shouldInvoke(time);
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
        var debounce_1 = debounce;
        function withRenderer(ctx, v) {
            return index_esm_context.withValue(ctx, rendererValuer, v);
        }
        function takeRenderer(ctx) {
            return ctx.value(rendererValuer);
        }
        const rendererValuer = index_esm_context.newValuerWithGetter((() => noopRenderer()));
        function noopRenderer() {
            return {
                mount(model) {
                    console.log("noop Renderer mount", model);
                },
                unmount() {
                    console.log("noop Renderer unmount");
                }
            };
        }
        const Default_Debounce_MS = 400;
        const Default_Query_Length_Threshold = 2;
        const configValuer = index_esm_context.newValuerWithGetter((() => ({
            debounceMS: Default_Debounce_MS,
            queryLengthThreshold: Default_Query_Length_Threshold
        })));
        function withPlacePredictionConfig(ctx, v) {
            return index_esm_context.withValue(ctx, configValuer, v);
        }
        function takePlacePredictionConfig(ctx) {
            return ctx.value(configValuer);
        }
        var dist_index_esm_FieldNameEnum;
        (function(FieldNameEnum) {
            FieldNameEnum["Country"] = "country";
            FieldNameEnum["Province"] = "province";
            FieldNameEnum["City"] = "city";
            FieldNameEnum["District"] = "district";
            FieldNameEnum["Name"] = "name";
            FieldNameEnum["FirstName"] = "firstName";
            FieldNameEnum["LastName"] = "lastName";
            FieldNameEnum["Mobile"] = "mobile";
            FieldNameEnum["Postcode"] = "postcode";
            FieldNameEnum["Company"] = "company";
            FieldNameEnum["Address"] = "address";
            FieldNameEnum["Address2"] = "address2";
        })(dist_index_esm_FieldNameEnum || (dist_index_esm_FieldNameEnum = {}));
        var dist_index_esm_AddressTemplateNameTypeEnum;
        (function(AddressTemplateNameTypeEnum) {
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["NAME"] = 1] = "NAME";
            AddressTemplateNameTypeEnum[AddressTemplateNameTypeEnum["FLName"] = 2] = "FLName";
        })(dist_index_esm_AddressTemplateNameTypeEnum || (dist_index_esm_AddressTemplateNameTypeEnum = {}));
        var dist_index_esm_FieldInteractionEnum;
        (function(FieldInteractionEnum) {
            FieldInteractionEnum[FieldInteractionEnum["Select"] = 1] = "Select";
            FieldInteractionEnum[FieldInteractionEnum["Input"] = 2] = "Input";
        })(dist_index_esm_FieldInteractionEnum || (dist_index_esm_FieldInteractionEnum = {}));
        const presetDisabledCountries = new Set([ "CN", "TW", "MY", "ID", "SG", "VN", "PH", "TH" ]);
        const AutoCompleteKeyMapping = {
            US: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_1: dist_index_esm_FieldNameEnum.Province,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            DE: {
                country: dist_index_esm_FieldNameEnum.Country,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            GB: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_1: dist_index_esm_FieldNameEnum.Province,
                administrative_area_level_2: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            IT: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_2: dist_index_esm_FieldNameEnum.Province,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            CA: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_1: dist_index_esm_FieldNameEnum.Province,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            AU: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_1: dist_index_esm_FieldNameEnum.Province,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            },
            FR: {
                country: dist_index_esm_FieldNameEnum.Country,
                administrative_area_level_2: dist_index_esm_FieldNameEnum.Province,
                locality: dist_index_esm_FieldNameEnum.City,
                postal_code: dist_index_esm_FieldNameEnum.Postcode
            }
        };
        const DefaultAutoCompleteMapping = {
            country: dist_index_esm_FieldNameEnum.Country,
            administrative_area_level_1: dist_index_esm_FieldNameEnum.Province,
            locality: dist_index_esm_FieldNameEnum.City,
            postal_code: dist_index_esm_FieldNameEnum.Postcode
        };
        const AddressComponentTypeSet = new Set([ "street_number", "route" ]);
        function formatPlaceDetail(addressComponents = []) {
            var _a;
            const components = {};
            const countryCode = null === (_a = addressComponents.find((({types}) => "country" === types[0]))) || void 0 === _a ? void 0 : _a.shortName;
            const mapping = Reflect.get(AutoCompleteKeyMapping, countryCode || "") || DefaultAutoCompleteMapping;
            const addressSegments = [];
            for (let i = 0; i < addressComponents.length; ++i) {
                const {longName, shortName, types = []} = addressComponents[i] || {};
                const type = types[0];
                if (dist_index_esm_FieldNameEnum.Country === mapping[type]) components.countryCode = [ shortName ]; else if (dist_index_esm_FieldNameEnum.Postcode === mapping[type]) components.postcode = [ longName ]; else {
                    const curKey = mapping[type];
                    if (curKey) {
                        if (curKey === dist_index_esm_FieldNameEnum.Province) components[curKey] = [ shortName, longName ]; else if (longName) components[curKey] = [ longName ];
                    } else if (AddressComponentTypeSet.has(type)) addressSegments.push(longName);
                }
            }
            return [ addressSegments.length > 0 ? addressSegments.join(" ") : null, Object.assign({}, components) ];
        }
        function withFieldName(ctx, v) {
            return index_esm_context.withValue(ctx, index_esm_valuer, v);
        }
        const index_esm_valuer = index_esm_context.newValuer("US");
        function contextBuilder() {
            const steps = [];
            const builder = {
                with(step) {
                    steps.push(step);
                    return builder;
                },
                withAutocompleteHooks(v) {
                    return builder.with((ctx => withAutocompleteHooks(ctx, v)));
                },
                withPlacePredictionConfig(v) {
                    return builder.with((ctx => withPlacePredictionConfig(ctx, v)));
                },
                withAutocompleteService(svc) {
                    return builder.with((ctx => withAutocompleteService(ctx, svc)));
                },
                withRenderer(renderer) {
                    return builder.with((ctx => withRenderer(ctx, renderer)));
                },
                build() {
                    return steps.reduce(((ctx, step) => step(ctx)), index_esm_context.background());
                }
            };
            return builder;
        }
        const GOOGLE_MAP_KEY = "AIzaSyCYBjkXgMUen81S8l4tXg6zNoqW2cDWtjU";
        const GOOGLE_MAP_JSONP_CALLBACK_NAME = "SL_GOOGLE_MAP_INIT_CALLBACK_NAME";
        const SERVICE_PROVIDER__GOOGLE = "google";
        function createAutocompleteService(language) {
            return {
                queryPlaceDetail(ctx, placeId) {
                    return index_esm_awaiter$1(this, void 0, void 0, (function*() {
                        const {placeService} = yield awaitServiceInit(language);
                        return new Promise((resolve => {
                            placeService.getDetails({
                                placeId
                            }, ((detail, status) => {
                                if ("OK" === status && null != detail) resolve({
                                    ctx,
                                    payload: {
                                        type: "OK",
                                        placeId,
                                        detail: {
                                            placeId,
                                            addressComponents: (detail.address_components || []).map((v => ({
                                                types: v.types,
                                                longName: v.long_name,
                                                shortName: v.short_name
                                            })))
                                        }
                                    },
                                    provider: SERVICE_PROVIDER__GOOGLE
                                }); else resolve({
                                    ctx,
                                    payload: {
                                        type: "NOT_EXISTED",
                                        placeId
                                    },
                                    provider: SERVICE_PROVIDER__GOOGLE
                                });
                            }));
                        }));
                    }));
                },
                queryPlacePredictions(ctx, countryCode, query) {
                    return index_esm_awaiter$1(this, void 0, void 0, (function*() {
                        const {autocompleteService} = yield awaitServiceInit(language);
                        const res = yield autocompleteService.getPlacePredictions({
                            input: query,
                            componentRestrictions: {
                                country: countryCode
                            }
                        });
                        return {
                            ctx,
                            payload: res.predictions.map((v => ({
                                placeId: v.place_id,
                                description: v.description,
                                matchedSubstrings: v.matched_substrings
                            }))),
                            provider: SERVICE_PROVIDER__GOOGLE
                        };
                    }));
                }
            };
        }
        let serviceInitLang;
        let serviceInitPromise;
        function awaitServiceInit(language) {
            if (serviceInitPromise && serviceInitLang === language) return serviceInitPromise;
            serviceInitLang = language;
            serviceInitPromise = new Promise((resolve => {
                const script = document.createElement("script");
                window[GOOGLE_MAP_JSONP_CALLBACK_NAME] = () => {
                    script.remove();
                    delete window[GOOGLE_MAP_JSONP_CALLBACK_NAME];
                    resolve({
                        autocompleteService: new window.google.maps.places.AutocompleteService,
                        placeService: new window.google.maps.places.PlacesService(document.createElement("div"))
                    });
                };
                const query = [ [ "key", GOOGLE_MAP_KEY ], [ "libraries", "places" ], [ "callback", GOOGLE_MAP_JSONP_CALLBACK_NAME ] ];
                if (language) query.push([ "language", language ]);
                const rawQuery = query.map((tuple => `${tuple[0]}=${encodeURIComponent(tuple[1])}`)).join("&");
                script.async = true;
                script.defer = true;
                script.type = "text/javascript";
                script.src = `https://maps.googleapis.com/maps/api/js?${rawQuery}`;
                document.body.appendChild(script);
            }));
            return serviceInitPromise;
        }
        function styleInject(css, ref) {
            if (void 0 === ref) ref = {};
            var insertAt = ref.insertAt;
            if (!css || "undefined" === typeof document) return;
            var head = document.head || document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.type = "text/css";
            if ("top" === insertAt) if (head.firstChild) head.insertBefore(style, head.firstChild); else head.appendChild(style); else head.appendChild(style);
            if (style.styleSheet) style.styleSheet.cssText = css; else style.appendChild(document.createTextNode(css));
        }
        var css_248z = '.address-autocomplete__parent {\n  position: relative;\n}\n\n.address-autocomplete {\n  position: absolute;\n  width: 100%;\n  top: 100%;\n  z-index: 100;\n  background-color: #fff;\n  border: 1px solid #ddddd8;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.address-autocomplete--hidden {\n  display: none;\n}\n.address-autocomplete__header {\n  position: relative;\n  height: 33px;\n  line-height: 33px;\n  color: #787878;\n  font-size: 12px;\n  padding: 0 11px;\n}\n.address-autocomplete__close {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 11px;\n  top: 9.5px;\n  background-image: url("data:image/svg+xml,%3Csvg width%3D%2212%22 height%3D%2213%22 viewBox%3D%220 0 12 13%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 d%3D%22M1.44122 0.750678C1.11174 0.416441 0.577557 0.416441 0.248083 0.750678C-0.0813916 1.08491 -0.0813925 1.62682 0.248082 1.96106L4.80752 6.5864L0.418422 11.0389C0.0889478 11.3732 0.0889488 11.9151 0.418423 12.2493C0.747898 12.5836 1.28208 12.5836 1.61156 12.2493L6.00065 7.79678L10.3897 12.2493C10.7192 12.5835 11.2534 12.5835 11.5828 12.2493C11.9123 11.915 11.9123 11.3731 11.5828 11.0389L7.19378 6.5864L11.7532 1.9611C12.0827 1.62686 12.0827 1.08496 11.7532 0.750718C11.4237 0.416481 10.8895 0.416481 10.56 0.750718L6.00065 5.37602L1.44122 0.750678Z%22 fill%3D%22%23737373%22%2F%3E%3C%2Fsvg%3E");\n  cursor: pointer;\n}\n.address-autocomplete__close::after {\n  left: -10px;\n  right: -10px;\n  top: -10px;\n  bottom: -10px;\n  position: absolute;\n  display: block;\n  content: "";\n}\n.address-autocomplete__footer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 8px 11px;\n  color: #787878;\n  background: rgba(221, 221, 216, 0.2);\n}\n.address-autocomplete__list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.address-autocomplete__list li {\n  cursor: pointer;\n  height: 41px;\n  line-height: 17px;\n  padding: 11px;\n  color: #2c2c2c;\n  font-size: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.address-autocomplete__list li:hover {\n  background: rgba(221, 221, 216, 0.5);\n}';
        styleInject(css_248z);
        function shouldBind(countryCode, fieldName) {
            if (!countryCode || !fieldName) return false;
            if (presetDisabledCountries.has(countryCode)) return false;
            if ("JP" === countryCode) return fieldName === dist_index_esm_FieldNameEnum.Postcode; else return fieldName === dist_index_esm_FieldNameEnum.Address;
        }
        function bind(ctx, countryCode, fieldName, $input) {
            ctx = withCountryCode(ctx, countryCode);
            ctx = withFieldName(ctx, fieldName);
            const [bindCtx, unbind] = index_esm_context.withCancel(ctx);
            let prevFocusCtx;
            observeControlFocus(bindCtx, $input, ((focusCtx, cancelFocus) => {
                if (prevFocusCtx && null == prevFocusCtx.err()) return;
                prevFocusCtx = focusCtx;
                const [invokeCtx, markInvoked] = index_esm_context.withCancel(focusCtx);
                const maybeInvoke = v => {
                    if (getQueryLength(v) >= takePlacePredictionConfig(focusCtx).queryLengthThreshold) {
                        markInvoked();
                        active(focusCtx, $input);
                        observeControlBlur(focusCtx, $input, (() => {
                            cancelFocus();
                        }));
                    }
                };
                observeControlInput(invokeCtx, $input, (v => {
                    maybeInvoke(v);
                }));
            }));
            return () => {
                unbind();
            };
        }
        function active(ctx, $input) {
            const predictionStream = createPredictionStream();
            const renderer = takeRenderer(ctx);
            ctx.done().then((() => {
                renderer.unmount();
            }));
            const cachedAutofillAttribute = $input.getAttribute("autocomplete");
            $input.setAttribute("autocomplete", "none");
            ctx.done().then((() => {
                $input.setAttribute("autocomplete", cachedAutofillAttribute || "on");
            }));
            predictionStream.pong = (query, predictions) => {
                if (null == predictions || predictions.length <= 0) {
                    renderer.unmount();
                    return;
                }
                renderer.mount({
                    predictions,
                    predictionSelected(prediction) {
                        return index_esm_awaiter$1(this, void 0, void 0, (function*() {
                            const predictionIndex = (() => {
                                for (let i = 0; i < predictions.length; ++i) if (predictions[i].placeId === prediction.placeId) return i;
                                return -1;
                            })();
                            renderer.unmount();
                            const response = yield takeAutocompleteService(ctx).queryPlaceDetail(ctx, prediction.placeId);
                            const {payload: detail} = response;
                            if ("OK" === detail.type) {
                                const [address, records] = formatPlaceDetail(detail.detail.addressComponents);
                                if (null !== address) records[dist_index_esm_FieldNameEnum.Address] = [ address ];
                                takeAutocompleteHooks(ctx).placeSelected({
                                    query,
                                    placeId: prediction.placeId,
                                    response,
                                    candidates: records,
                                    cursor: {
                                        index: predictionIndex,
                                        length: predictions.length
                                    }
                                });
                            }
                        }));
                    }
                });
            };
            ctx.done().then((() => {
                predictionStream.pong = void 0;
            }));
            observeControlInvoke(ctx, $input, debounce_1((v => {
                if (getQueryLength(v) >= takePlacePredictionConfig(ctx).queryLengthThreshold) predictionStream.ping(ctx, v);
            }), takePlacePredictionConfig(ctx).debounceMS));
        }
        function observeControlInput(ctx, $ele, cb) {
            let canceled = false;
            const listener = e => {
                if (canceled) return;
                const target = e.target;
                if (target instanceof HTMLInputElement) cb(target.value);
            };
            $ele.addEventListener("input", listener);
            queueMicrotask((() => {
                if (canceled) return;
                if (document.activeElement === $ele) cb($ele.value);
            }));
            ctx.done().finally((() => {
                try {
                    canceled = true;
                    $ele.removeEventListener("input", listener);
                } catch (_) {}
            }));
        }
        function observeControlInvoke(ctx, $ele, cb) {
            let canceled = false;
            const listener = e => {
                if (canceled) return;
                const target = e.target;
                if (target instanceof HTMLInputElement) cb(target.value);
            };
            $ele.addEventListener("keyup", listener);
            $ele.addEventListener("mouseup", listener);
            $ele.addEventListener("input", listener);
            queueMicrotask((() => {
                if (canceled) return;
                if (document.activeElement === $ele) cb($ele.value);
            }));
            ctx.done().finally((() => {
                try {
                    canceled = true;
                    $ele.removeEventListener("keyup", listener);
                    $ele.removeEventListener("input", listener);
                    $ele.removeEventListener("mouseup", listener);
                } catch (_) {}
            }));
        }
        function observeControlFocus(ctx, $ele, cb) {
            let canceled = false;
            const listener = e => {
                if (canceled) return;
                const target = e.target;
                if (target instanceof HTMLInputElement) {
                    const [focusCtx, cancelFocus] = index_esm_context.withCancel(ctx);
                    cb(focusCtx, cancelFocus);
                    ctx.done().finally((() => {
                        cancelFocus();
                    }));
                }
            };
            $ele.addEventListener("focus", listener);
            queueMicrotask((() => {
                if (canceled) return;
                if (document.activeElement === $ele) cb(...index_esm_context.withCancel(ctx));
            }));
            ctx.done().finally((() => {
                try {
                    canceled = true;
                    $ele.removeEventListener("focus", listener);
                } catch (_) {}
            }));
        }
        function observeControlBlur(ctx, $ele, cb) {
            let canceled = false;
            const listener = () => {
                if (canceled) return;
                if (document.activeElement !== $ele) cb();
            };
            $ele.addEventListener("blur", listener);
            ctx.done().finally((() => {
                try {
                    canceled = true;
                    $ele.removeEventListener("blur", listener);
                } catch (_) {}
            }));
        }
        function getQueryLength(query) {
            return Array.from(query).length;
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
                const eventBus = new SL_EventEmitter;
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
        const form_form = CustomForm;
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
                this.formInstanceList[fid] = new form_form(fid, {
                    onDestory: fid => {
                        Reflect.deleteProperty(this.formInstanceList, fid);
                    }
                });
                return this.formInstanceList[fid];
            }
        }
        _defineProperty(Form, "formInstanceList", {});
        const utils_form = Form;
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
        function i18n_parsePathToArray(path) {
            if ("string" !== typeof path) throw new TypeError("path must be string");
            return path.replace(/\]/, "").split(/[.[]/);
        }
        function i18n_t(path, hash) {
            const keys = i18n_parsePathToArray(path);
            const value = keys.reduce(((prev, current) => {
                if (!prev) return;
                return prev && prev.string ? prev.string[current] : prev[current];
            }), window.__I18N__);
            const regExp = new RegExp(/\{\{([^{}]+)\}\}/g);
            return nullishCoalescingOperator(get_func(value, "replace").exec(regExp, ((...args) => nullishCoalescingOperator(syntax_patch_get(hash, args[1]), args[0]))), path);
        }
        const addressInfo = SL_State.get("customer_edit_address") || {};
        addressInfo.firstName, addressInfo.lastName, i18n_t("userCenter.editAddress.lastName-message"), 
        addressInfo.mobilePhone, i18n_t("userCenter.editAddress.phone-message"), i18n_t("customer.address.mobile-errorMessage");
        const MAX_LENGTH_64 = 64;
        const MIN_LENGTH_2 = 2;
        const ruleConfig = {
            generalMax(max = MAX_LENGTH_64, props = {}) {
                return {
                    validator: value => new Promise(((resolve, reject) => {
                        if (value.length <= max) return resolve();
                        return reject();
                    })),
                    message: i18n_t("userCenter.editAddress.common-max", {
                        max
                    }),
                    ...props
                };
            },
            generalMin(min = MIN_LENGTH_2, props = {}) {
                return {
                    validator: value => new Promise(((resolve, reject) => {
                        if (value.length >= min) return resolve();
                        return reject();
                    })),
                    message: i18n_t("userCenter.editAddress.common-min", {
                        min
                    }),
                    ...props
                };
            }
        };
        const ADDRESS_RULES = {
            country: [ ruleConfig.generalMax(), ruleConfig.generalMin() ],
            province: [ ruleConfig.generalMax(), ruleConfig.generalMin() ],
            city: [ ruleConfig.generalMax(), ruleConfig.generalMin() ],
            district: [ ruleConfig.generalMax(), ruleConfig.generalMin() ],
            postcode: [ ruleConfig.generalMax(10), ruleConfig.generalMin() ],
            company: [ ruleConfig.generalMax(255), ruleConfig.generalMin(1) ],
            address: [ ruleConfig.generalMax(255), ruleConfig.generalMin() ],
            address2: [ ruleConfig.generalMax(255), ruleConfig.generalMin() ],
            firstName: [],
            lastName: [ {
                message: i18n_t("userCenter.editAddress.lastName-message"),
                required: true
            } ],
            mobile: [ {
                required: true,
                message: i18n_t("userCenter.editAddress.phone-message")
            }, {
                pattern: /^[+()\s-\d]{2,16}$/,
                message: i18n_t("customer.address.mobile-errorMessage")
            } ]
        };
        const FIELD_ATTRS = {
            firstName: {
                maxlength: 64
            },
            lastName: {
                maxlength: 64
            },
            mobile: {
                maxlength: 25
            }
        };
        const getFieldAttrs = fieldName => {
            const attrs = FIELD_ATTRS[fieldName];
            if (attrs) return Object.keys(attrs).reduce(((attrStr, key) => {
                attrStr += `${key}=${attrs[key]} `;
                return attrStr;
            }), "");
            return "";
        };
        const PRESET_SELECT_OPTION = "--no-value--";
        function createRenderer({host, rootId}) {
            let $currentRoot = document.getElementById(rootId);
            host.init().then((() => {
                distinctUntil(host, ((prev, current) => {
                    if (!prev) return true;
                    return prev.addressInfo.countryCode !== current.addressInfo.countryCode;
                }), (function(ctx, model) {
                    const {addressInfo, fieldTemplateSequence, fieldTemplateMap} = model;
                    const $wipRoot = $currentRoot.cloneNode(false);
                    fieldTemplateSequence.forEach((fieldName => {
                        const $controlFrag = mountControl(ctx, host, fieldName);
                        let $control = $controlFrag.firstChild;
                        $wipRoot.appendChild($controlFrag);
                        const subscription = distinctUntil(host, ((_, current) => {
                            const $ele = $control.querySelector("input,select");
                            if (!$ele) return false;
                            const sourceKey = "input" === $ele.tagName.toLowerCase() ? fieldName : `${fieldName}Code`;
                            return current.addressInfo[sourceKey] !== $ele.value;
                        }), (ctx => {
                            const $controlFrag = mountControl(ctx, host, fieldName);
                            const $wipControl = $controlFrag.firstChild;
                            $control.parentNode.replaceChild($controlFrag, $control);
                            $control = $wipControl;
                        }));
                        ctx.done().finally((() => {
                            subscription.unsubscribe();
                        }));
                    }));
                    litAutofillControls(model).forEach((raw => {
                        const $frag = renderer_strToFrag(raw);
                        const $control = $frag.cloneNode(true);
                        const onChangeHandler = event => {
                            const {target} = event;
                            host.updateFieldValue(target.name, target.value);
                        };
                        $control.firstChild.addEventListener("change", onChangeHandler);
                        $wipRoot.appendChild($control);
                    }));
                    $currentRoot.parentNode.replaceChild($wipRoot, $currentRoot);
                    $currentRoot = $wipRoot;
                    const form = utils_form.takeForm($currentRoot.id);
                    form.init();
                    form.setFields(fieldTemplateSequence.filter((fieldName => {
                        const template = fieldTemplateMap[fieldName];
                        return template && !!template.display;
                    })).map((fieldName => {
                        const template = fieldTemplateMap[fieldName];
                        return {
                            name: fieldName,
                            value: 2 === template.interactionType ? addressInfo[fieldName] : addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION,
                            rules: [ {
                                required: template.required,
                                message: template.remindCopywriter,
                                async validator(_v) {
                                    let v = _v;
                                    if ("string" === typeof v) v = v.trim();
                                    if (v === PRESET_SELECT_OPTION) v = "";
                                    return !!v;
                                }
                            } ].concat(ADDRESS_RULES[fieldName] || [])
                        };
                    })));
                    ctx.done().finally((() => {
                        form.destroy();
                    }));
                    const subscription = host.observeModel((model => {
                        const {addressInfo} = model;
                        fieldTemplateSequence.filter((fieldName => {
                            const template = fieldTemplateMap[fieldName];
                            return template && !!template.display;
                        })).forEach((fieldName => {
                            const template = fieldTemplateMap[fieldName];
                            form.setLocalsValue(fieldName, 2 === template.interactionType ? addressInfo[fieldName] : addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION);
                        }));
                    }));
                    ctx.done().finally((() => {
                        subscription.unsubscribe();
                    }));
                }), true);
            }));
        }
        function mountControl(ctx, host, fieldName) {
            const model = host.getModel();
            const template = model.fieldTemplateMap[fieldName];
            const layout = model.fieldTemplateLayout[fieldName];
            const layoutClass = exportLayoutClassList(layout).join(" ");
            const $frag = renderer_strToFrag(`\n      <div\n        sl-form-item-name="${fieldName}"\n        class="${layoutClass}"\n        style="${!template.display ? "position: absolute; left: -9999px" : ""}"\n      >\n        <div class="sl-input">\n          <div class="sl-input__area">\n            ${template.interactionType === FieldInteractionEnum.Select ? litSelectControl({
                model,
                fieldName
            }) : ""}\n            ${template.interactionType === FieldInteractionEnum.Input ? litInputControl({
                model,
                fieldName
            }) : ""}\n          </div>\n        </div>\n      </div>\n      `);
            const $controlFrag = $frag.cloneNode(true);
            const $control = $controlFrag.firstChild;
            const onChangeHandler = event => {
                const {target} = event;
                host.updateFieldValue(fieldName, target.value);
            };
            $control.addEventListener("change", onChangeHandler);
            ctx.done().finally((() => {
                $control.removeEventListener("change", onChangeHandler);
            }));
            if (shouldBind(model.addressInfo.countryCode, fieldName)) {
                const unbindCurrentAutocomplete = bind(contextBuilder().withAutocompleteService(createAutocompleteService(helper_getLanguage())).withRenderer(renderer_createAutocompleteRenderer($controlFrag.querySelector(".sl-input"))).withAutocompleteHooks({
                    beforePlaceSelect() {
                        $control.removeEventListener("change", onChangeHandler);
                    },
                    placeSelected(params) {
                        const {candidates} = params;
                        host.updateFieldsValueWithCandidates(candidates);
                    }
                }).build(), model.addressInfo.countryCode, fieldName, $controlFrag.querySelector("input"));
                ctx.done().finally((() => {
                    unbindCurrentAutocomplete();
                }));
            }
            return $controlFrag;
        }
        function litInputControl(props) {
            const {model, fieldName} = props;
            const template = model.fieldTemplateMap[fieldName];
            const value = model.addressInfo[fieldName] || "";
            return `\n    <input\n        name="${fieldName}"\n        type="${fieldName === FieldNameEnum.Mobile ? "tel" : "text"}"\n        value="${value}"\n        style="${!template.display ? "position: absolute; left: -9999px" : ""}"\n        class="sl-input__inpEle"\n        placeholder=${template.placeholder}\n        ${template.display ? "" : 'data-hidden="true"'}\n        autocomplete="${mapAutofillToken(fieldName)}"\n        ${getFieldAttrs(fieldName)}\n      />\n    <span class="placeholder">${template.placeholder}</span>\n  `;
        }
        function litSelectControl(props) {
            const {model, fieldName} = props;
            const template = model.fieldTemplateMap[fieldName];
            const value = model.addressInfo[`${fieldName}Code`] || PRESET_SELECT_OPTION;
            const options = function() {
                const traverser = model.fieldAddressBookTraverser[fieldName];
                const options = [];
                if (traverser) traverser.traverse(((_, addressBook) => {
                    options.push({
                        value: addressBook.code,
                        text: addressBook.name,
                        disabled: false,
                        selected: addressBook.code === value
                    });
                }));
                return options;
            }();
            return `\n      <select\n        name="${fieldName}"\n        value="${value}"\n        style="${!template.display ? "display: none;" : ""}"\n        autocomplete="none"\n        placeholder="${template.placeholder}"\n        class="sl-input__inpEle"\n      >\n        ${litSelectOption({
                value: PRESET_SELECT_OPTION,
                disabled: true,
                selected: !value || value === PRESET_SELECT_OPTION,
                text: template.placeholder
            })}\n        ${options.map((option => litSelectOption(option))).join("")}\n      </select>\n      <span class="placeholder">${template.placeholder}</span>\n      <i class="select-icon" style="${!template.display ? "display: none;" : ""}">\n        <svg class="{{ classes }}" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M0.499919 0.550231L4.94967 4.99998L9.39941 0.550232" stroke="currentColor" stroke-linecap="round"/>\n        </svg>\n      </i>\n`;
        }
        function litSelectOption(props) {
            return `\n    <option value="${props.value}" ${props.selected ? "selected" : ""} ${props.disabled ? "disabled" : ""}>\n      ${props.text}\n    </option>\n  `;
        }
        function renderer_strToFrag(str) {
            return document.createRange().createContextualFragment(str.toString().replace(/\s\s+/g, " ").trim());
        }
        function exportLayoutClassList(layout) {
            if (!layout) return [];
            return Object.entries(layout).map((([k, v]) => `col-${k}-${v}`));
        }
        function renderer_createAutocompleteRenderer($control) {
            const $frag = renderer_strToFrag(renderer_litAutocompleteContainer()).cloneNode(true);
            const $container = $frag.firstChild;
            let $list = $container.querySelector("ul");
            $control.appendChild($container);
            const emptyList = () => {
                const $clone = $list.cloneNode(false);
                $list.parentElement.replaceChild($clone, $list);
                $list = $clone;
            };
            return {
                mount(model) {
                    const $clone = $list.cloneNode(false);
                    const {predictions, predictionSelected} = model;
                    predictions.forEach((prediction => {
                        const $frag = renderer_strToFrag(renderer_litAutocompletePrediction(prediction)).cloneNode(true);
                        $frag.firstChild.addEventListener("click", (e => {
                            predictionSelected(prediction);
                            e.preventDefault();
                        }));
                        $clone.addEventListener("mousedown", (e => {
                            e.preventDefault();
                        }));
                        $clone.appendChild($frag);
                    }));
                    $list.parentElement.replaceChild($clone, $list);
                    $list = $clone;
                    $container.classList.remove("address-autocomplete--hidden");
                },
                unmount() {
                    $container.classList.add("address-autocomplete--hidden");
                    emptyList();
                }
            };
        }
        function renderer_litAutocompleteContainer() {
            return `\n    <div class="address-autocomplete address-autocomplete--hidden">\n      <div class="address-autocomplete__header">\n        SUGGESTIONS\n        <div class="address-autocomplete__close"></div>\n      </div>\n      <ul class="address-autocomplete__list"></ul>\n      <div class="address-autocomplete__footer">powered by Google</div>\n    </div>\n  `;
        }
        function renderer_litAutocompletePrediction(prediction) {
            return `\n  <li>${prediction.description || ""}</li>\n  `;
        }
        const customerAddressKeyMapper = {
            country: "country",
            countryCode: "countryCodeStr",
            province: "province",
            provinceCode: "provinceCode",
            city: "city",
            cityCode: "cityCode",
            district: "district",
            districtCode: "districtCode",
            name: "contactName",
            firstName: "firstName",
            lastName: "lastName",
            address: "addr",
            address2: "addrTwo",
            company: "company",
            postcode: "zipCode",
            mobile: "mobilePhone"
        };
        function createAddressComponent({rootId}) {
            const adapter = createAdapter();
            const initAddressTemplate = SL_State.get("customer_address_template");
            let initAddressInfo = SL_State.get("customer_edit_address");
            if ((null == initAddressInfo || Object.keys(initAddressInfo).length <= 0) && initAddressTemplate && "DEFAULT" !== initAddressTemplate.country) initAddressInfo = {
                [customerAddressKeyMapper.countryCode]: initAddressTemplate.country
            };
            const host = createHost({
                adapter,
                initState: {
                    addressInfo: unmarshalAddressInfo(initAddressInfo)
                },
                initProps: {
                    addressTemplateDecorator(model) {
                        model.forceFLNameMode();
                    },
                    fieldLayoutGroupDecorator(factory) {
                        const model = hasStringTemplateConfig() ? factory.takeGroupModelWithStringifyTemplate(getStringTemplate(factory.country)) : factory.takeGroupModel();
                        model.prependGroup(FieldNameEnum.FirstName, FieldNameEnum.LastName);
                        return model;
                    }
                }
            });
            const renderer = createRenderer({
                host,
                rootId
            });
            return {
                host,
                renderer,
                async getAddressInfo() {
                    const model = await host.exhaustModel();
                    return marshalAddressInfo(model.addressInfo);
                },
                validate() {
                    const form = utils_form.takeForm(rootId);
                    return form.validateFields();
                }
            };
        }
        function unmarshalAddressInfo(customerInfo) {
            const mapper = {};
            Object.keys(customerAddressKeyMapper).forEach((k => {
                mapper[customerAddressKeyMapper[k]] = k;
            }));
            const info = {};
            Object.keys(customerInfo || {}).forEach((key => {
                if (Reflect.has(mapper, key)) info[mapper[key]] = customerInfo[key];
            }));
            return info;
        }
        function marshalAddressInfo(addressInfo) {
            const customerInfo = {};
            Object.entries(addressInfo).forEach((([key, value]) => {
                const formatKey = customerAddressKeyMapper[key];
                customerInfo[formatKey] = value;
            }));
            return customerInfo;
        }
        function hasStringTemplateConfig() {
            const addressTemplate = SL_State && SL_State.get("customer_address_template");
            const config = addressTemplate && addressTemplate.stringAddressTemplateInfo;
            if (!config) return false;
            return !!config.StringTemplateMap && !!config.CountryCodeToStringTemplateMap;
        }
        function getStringTemplate(countryCode = "") {
            const addressTemplate = SL_State && SL_State.get("customer_address_template");
            const {StringTemplateMap, CountryCodeToStringTemplateMap} = addressTemplate && addressTemplate.stringAddressTemplateInfo || {};
            countryCode = countryCode.toUpperCase();
            const index = CountryCodeToStringTemplateMap[countryCode];
            if ("number" === typeof index && index >= 0) return StringTemplateMap[index];
            return StringTemplateMap[0];
        }
        const allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
        const countries = allCountries.map((([name, iso2, dialCode, priority, areaCodes]) => ({
            name: name.replace(/\s*\([^()]+?\)$/, ""),
            iso2,
            dialCode,
            priority: priority || 0,
            areaCodes: areaCodes || null
        })));
        const countriesCodeMap = countries.reduce(((res, {iso2, dialCode}) => {
            res[iso2] = `+${dialCode}`;
            return res;
        }), {});
        countries.reduce(((res, {iso2, dialCode}) => {
            res[dialCode] = iso2;
            return res;
        }), {});
        const EMAIL_PATTERN = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;
        const PHONE_PATTERN = {
            "+86": /^1[3-9]\d{9}$/,
            "+886": /^09\d{8}$/,
            "+852": /^(5[1234569]\d{6}|6\d{7}|9[0-8]\d{6})$/
        };
        const pattern_CODE_PHONE_PATTERN = /^(\w+(\+\d+))-(.*)$/;
        const INTERNATIONAL_PHONE_PATTERN = /^(00|\+)[1-9]{1}([0-9]){9,16}$/;
        const formatterCodePhone = codePhone => codePhone.replace(/[a-z]+\+(\d+)-(\d+)/i, "00$1$2");
        const formatPhone = phone => {
            const result = {};
            if (phone) {
                const exec = pattern_CODE_PHONE_PATTERN.exec(phone);
                if (exec) {
                    result.phone = `${exec[2]}${exec[3]}`.replace("+", "00");
                    result._code = exec[1].slice(0, -exec[2].length);
                }
            }
            return result;
        };
        const LANGUAGE_MAP = {
            email: "user.email",
            phone: "user.phone",
            username: "user.username",
            password: "user.password",
            repeatPassword: "user.repeatPassword",
            primevalPassword: "user.primevalPassword",
            code: "user.code",
            signUp: "user.signUp",
            signIn: "user.signIn",
            confirm: "user.confirm",
            emailError: "user.emailError",
            phoneError: "user.phoneError",
            codeError: "user.codeError",
            passwordError: "user.passwordError",
            repeatPasswordError: "user.repeatPasswordError",
            repeatPasswordEmptyError: "user.repeatPasswordEmptyError",
            primevalPasswordError: "user.primevalPasswordError",
            send: "user.send",
            resend: "user.resend",
            sendError: "user.sendError",
            noData: "user.noData",
            passwordEmptyError: "user.passwordEmptyError",
            passwordMemberError: "user.passwordMemberError",
            emailEmptyError: "user.emailEmptyError",
            phoneEmptyError: "user.phoneEmptyError",
            usernameEmptyError: "user.usernameEmptyError",
            primevalNewPasswordError: "user.primevalNewPasswordError"
        };
        const phoneNumberValidator = value => new Promise(((resolve, reject) => {
            if (pattern_CODE_PHONE_PATTERN.test(value)) {
                const {$2, $3} = RegExp;
                if (INTERNATIONAL_PHONE_PATTERN.test(`${$2}${$3}`) && (!PHONE_PATTERN[$2] || PHONE_PATTERN[$2].test($3))) return resolve();
            }
            return reject(LANGUAGE_MAP.phoneError);
        }));
        const emailValidator = value => new Promise(((resolve, reject) => EMAIL_PATTERN.test(value) && value.length <= 50 ? resolve() : reject(LANGUAGE_MAP.emailError)));
        const usernameValidator = value => {
            if (pattern_CODE_PHONE_PATTERN.test(value) && RegExp.$3) return phoneNumberValidator(value);
            return emailValidator(value);
        };
        const CODE_SELECT_CLASS = "form-item__codeSelect";
        const getCodeSelect = defaultIso2 => {
            const optionStr = countries.map((({name, iso2, dialCode}) => `\n      <option value="${iso2}" label="${name}(+${dialCode})" ${iso2 === defaultIso2 ? 'selected="selected"' : ""}>${name}(+${dialCode})</option>\n    `)).join("");
            return `\n    <div class="code-select__container">\n      <div class="code-select__value-wrapper">\n        <span class="code-select__value">${countriesCodeMap[defaultIso2]}</span>\n        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M1.5 1.5L5 5L8.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </div>\n      <select class="form-item__select ${CODE_SELECT_CLASS}" autocomplete="off">\n        ${optionStr}\n      </select>\n    </div>\n  `;
        };
        const CODE_SELECT_CONTAINER_CLASS = "code-select__container";
        const username_CODE_SELECT_CLASS = "form-item__codeSelect";
        class Username {
            constructor({form, formId, value, iso2}) {
                this.form = form;
                this.formId = formId;
                this.$username = $(`#${formId} [sl-form-item-name="username"] .sl-input`);
                this.$input = this.$username.find(".sl-input__inpEle");
                const originValue = value || "";
                if (iso2) {
                    this.iso2 = iso2;
                    if (/^\d+$/.test(value)) this.createCodeSelect();
                } else {
                    const countryCodeOriginal = window && window.SL_State && window.SL_State.get("customer_address.countryCode");
                    const countryCode = countryCodeOriginal && countryCodeOriginal.toLowerCase();
                    this.iso2 = iso2 || countryCode;
                }
                const code = countriesCodeMap[this.iso2];
                if (code) this.code = `${this.iso2}${code}`; else {
                    this.iso2 = DEFAULT_PHONE_ISO2;
                    this.code = DEFAULT_PHONE_CODE;
                }
                this.value = this.changeValue(this.code, originValue);
                this.inputValue = originValue;
                this.init();
            }
            init() {
                this.bindEvents();
            }
            install() {
                return {
                    rules: [ {
                        validator: value => {
                            const val = this.changeValue(this.code, value);
                            return usernameValidator(val).catch((err => Promise.reject(i18n_t(err))));
                        }
                    } ]
                };
            }
            changeValue(code, inputValue) {
                const value = inputValue && inputValue.trim();
                const val = /^\d+$/.test(value) ? `${code}-${value}` : value;
                this.code = code;
                this.value = val;
                this.inputValue = value;
                return val;
            }
            changeCodeValue(iso2) {
                const $codeValue = this.$username.find(`.code-select__value`);
                const $select = this.$username.find(`.${username_CODE_SELECT_CLASS}`);
                $codeValue.text(countriesCodeMap[iso2]);
                if ($select.val() !== iso2) $select.val(iso2);
            }
            getValue() {
                const $select = this.$username.find(`.${username_CODE_SELECT_CLASS}`);
                return {
                    username: this.inputValue || this.$input && this.$input.val() || "",
                    code: this.code,
                    iso2: this.iso2 || $select.val() || ""
                };
            }
            getFormValue() {
                const value = this.value || this.changeValue(this.code, this.$input && this.$input.val());
                if (pattern_CODE_PHONE_PATTERN.test(value)) {
                    const val = formatPhone(value);
                    return {
                        username: val.phone,
                        _code: val._code
                    };
                }
                return {
                    username: value
                };
            }
            createCodeSelect() {
                const selectElementStr = getCodeSelect(this.iso2);
                this.$username.append(selectElementStr);
                const $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
                const $select = $container.find(`.${username_CODE_SELECT_CLASS}`);
                $select && $select.val(this.iso2);
                this.bindSelectCodeEvent($select);
                return $container;
            }
            bindEvents() {
                let $container = this.$username.find(`.${CODE_SELECT_CONTAINER_CLASS}`);
                const $select = $container.find(`.${username_CODE_SELECT_CLASS}`);
                let selectElementHasMounted = $select && $select.length > 0;
                this.$input.on("input", (e => {
                    const val = this.changeValue(this.code, e.target.value);
                    const phoneInputMode = !(!pattern_CODE_PHONE_PATTERN.test(val || "") || !RegExp.$3);
                    if (phoneInputMode) {
                        if (!selectElementHasMounted) {
                            $container = this.createCodeSelect();
                            selectElementHasMounted = true;
                            return;
                        }
                        $container && $container.show();
                    }
                    if (!phoneInputMode && selectElementHasMounted) $container && $container.hide();
                }));
            }
            bindSelectCodeEvent($select) {
                $select.on("change", (() => {
                    const iso2 = $select.val();
                    const val = countriesCodeMap[iso2];
                    this.iso2 = iso2;
                    this.code = `${iso2}${val}`;
                    this.changeCodeValue(iso2);
                    this.changeValue(this.code, this.inputValue);
                    if (this.inputValue) {
                        this.form.validateFields("username");
                        this.form.setLocalsValue("username", this.$input.val());
                    }
                }));
                $select.on("input", (e => e.stopPropagation()));
            }
        }
        const username = Username;
        const phone_CODE_SELECT_CONTAINER_CLASS = "code-select__container";
        const phone_CODE_SELECT_CLASS = "form-item__codeSelect";
        class Phone {
            constructor({form, formId, value, iso2, emit = {}, $container}) {
                this.form = form;
                this.formId = formId;
                this.emit = emit;
                this.$phone = $container || $(`#${formId} [sl-form-item-name="phone"] .sl-input`);
                this.$input = this.$phone.find(".sl-input__inpEle");
                const originValue = value || "";
                const countryCodeOriginal = window && window.SL_State && window.SL_State.get("customer_address.countryCode");
                const countryCode = countryCodeOriginal && countryCodeOriginal.toLowerCase();
                this.iso2 = iso2 || countryCode;
                const code = countriesCodeMap[this.iso2];
                if (code) this.code = `${this.iso2}${code}`; else {
                    this.iso2 = DEFAULT_PHONE_ISO2;
                    this.code = DEFAULT_PHONE_CODE;
                }
                this.value = this.changeValue(this.code, originValue);
                this.inputValue = originValue;
                this.init();
            }
            init() {
                this.bindEvents();
            }
            install() {
                return {
                    rules: [ {
                        validator: () => phoneNumberValidator(this.value).catch((err => Promise.reject(i18n_t(err))))
                    } ]
                };
            }
            changeValue(code, inputValue) {
                const value = inputValue && inputValue.trim();
                const val = `${code}-${value}`;
                this.code = code;
                this.value = val;
                this.inputValue = value;
                return val;
            }
            changeCodeValue(iso2) {
                const $codeValue = this.$phone.find(`.code-select__value`);
                const $select = this.$phone.find(`.${phone_CODE_SELECT_CLASS}`);
                $codeValue.text(countriesCodeMap[iso2]);
                if ($select.val() !== iso2) $select.val(iso2);
            }
            getValue() {
                const $select = this.$phone.find(`.${phone_CODE_SELECT_CLASS}`);
                return {
                    phone: this.inputValue || this.$input && this.$input.val() || "",
                    code: this.code,
                    iso2: this.iso2 || $select.val() || ""
                };
            }
            getFormValue() {
                const value = this.value || this.changeValue(this.code, this.$input && this.$input.val());
                if (pattern_CODE_PHONE_PATTERN.test(value)) {
                    const val = formatPhone(value);
                    return {
                        phone: val.phone,
                        _code: val._code
                    };
                }
                return {
                    phone: value
                };
            }
            bindEvents() {
                this.createCodeSelect();
                this.$input.on("input", (e => this.changeValue(this.code, e.target.value)));
            }
            createCodeSelect() {
                const selectElementStr = getCodeSelect(this.iso2);
                this.$phone.append(selectElementStr);
                const $container = this.$phone.find(`.${phone_CODE_SELECT_CONTAINER_CLASS}`);
                const $select = $container.find(`.${phone_CODE_SELECT_CLASS}`);
                $select && $select.val(this.iso2);
                this.bindSelectCodeEvent($select);
            }
            bindSelectCodeEvent($select) {
                $select.on("change", (() => {
                    const iso2 = $select.val();
                    const val = countriesCodeMap[iso2];
                    this.iso2 = iso2;
                    this.code = `${iso2}${val}`;
                    this.changeCodeValue(iso2);
                    this.changeValue(this.code, this.inputValue);
                    if (this.inputValue) {
                        this.form.validateFields("phone");
                        this.form.setLocalsValue("phone", this.$input.val());
                        this.emit && this.emit.codeChange && this.emit.codeChange({
                            iso2,
                            val
                        });
                    }
                }));
                $select.on("input", (e => e.stopPropagation()));
            }
        }
        const phone = Phone;
        const getEyeOpenIcon = () => `\n    <svg class="" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g>\n        <mask id="visible_svg__a" maskUnits="userSpaceOnUse" x="0.341" y="2" width="15" height="12" fill="#000">\n          <path fill="#fff" d="M.341 2h15v12h-15z"></path>\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.341 8a6.002 6.002 0 0111.317 0A6.003 6.003 0 012.341 8z"></path>\n        </mask>\n        <path d="M2.341 8L.927 7.5a1.5 1.5 0 000 1L2.341 8zm11.317 0l1.415.5a1.5 1.5 0 000-1l-1.415.5zm-9.902.5c.618-1.75 2.287-3 4.244-3v-3a7.502 7.502 0 00-7.073 5l2.829 1zM8 5.5a4.502 4.502 0 014.244 3l2.829-1A7.503 7.503 0 008 2.5v3zm4.244 2A4.502 4.502 0 018 10.5v3a7.502 7.502 0 007.073-5l-2.829-1zM8 10.5a4.502 4.502 0 01-4.244-3l-2.829 1A7.502 7.502 0 008 13.5v-3z" fill="currentColor" mask="url(#visible_svg__a)"></path>\n      </g>\n      <circle cx="8" cy="8" r="1.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>\n    </svg>\n  `;
        const getEyeCloseIcon = () => `\n    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ant-input-password-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.21 5.76a.75.75 0 10-1.42.48c.313.928.79 1.78 1.393 2.516L1.055 9.884a.75.75 0 101.061 1.06L3.24 9.82a7.44 7.44 0 004.01 1.692V13a.75.75 0 001.5 0v-1.488a7.44 7.44 0 004.01-1.692l1.124 1.124a.75.75 0 001.06-1.06l-1.127-1.128a8.025 8.025 0 001.393-2.515.75.75 0 10-1.42-.481c-.852 2.518-3.138 4.29-5.79 4.29S3.062 8.278 2.21 5.76z" fill="currentColor"></path></svg>\n  `;
        __webpack_require__("../shared/browser/biz-com/customer/helpers/udb.sdk.rsa.js");
        const encrypt = value => window && window.UDB && window.UDB.SDK && window.UDB.SDK.rsa && window.UDB.SDK.rsa.RSAUtils && window.UDB.SDK.rsa.RSAUtils.encryptedString(value);
        class Password {
            constructor({formId, value, name}) {
                this.formId = formId;
                this.name = name;
                this.$item = $(`#${formId} [sl-form-item-name="${name}"] .sl-input`);
                this.$input = this.$item.find(".sl-input__inpEle");
                const originValue = value || "";
                this.value = encrypt(originValue);
                this.inputValue = originValue;
                this.init();
            }
            init() {
                this.bindEvents();
            }
            getValue() {
                return {
                    [this.name]: this.inputValue || this.$input.val() || ""
                };
            }
            getFormValue() {
                const value = this.inputValue || this.$input.val() || "";
                this.value = value && encrypt(value);
                return {
                    [this.name]: this.value
                };
            }
            bindEvents() {
                this.$input.on("input", (e => {
                    const {value} = e.target;
                    this.inputValue = value;
                }));
                this.$item.find(".sl-input__suffix").click((e => {
                    const $this = $(e.currentTarget);
                    const $input = $this.siblings(".sl-input__area").find(".sl-input__inpEle");
                    const type = $input.attr("type");
                    if ("password" === type) {
                        $input.attr("type", "text");
                        $this.html(getEyeOpenIcon());
                    } else {
                        $input.attr("type", "password");
                        $this.html(getEyeCloseIcon());
                    }
                }));
            }
        }
        const form_item_password = Password;
        const UDB_RESPONSE_LANGUAGE_ERROR_CODES = [ -1, -4, -5, -13, -999, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1020, 1021, 1022, 1023, 1024, 2001, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2016, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3014, 3019, 2014 ];
        const getUdbResponseLanguageErrorKey = rescode => {
            if (UDB_RESPONSE_LANGUAGE_ERROR_CODES.indexOf(Number(rescode)) > -1) return `user.udbResponse.err${rescode}`;
            return;
        };
        function getUdbErrorMessage(res) {
            const errorKey = getUdbResponseLanguageErrorKey(res.rescode);
            return errorKey ? i18n_t(errorKey) : res.message;
        }
        const BUTTON_LOADING_CLASS = "btn--loading";
        class Verifycode {
            constructor({form, formId, value, on, immediate}) {
                this.countDown = 60;
                this.countDownTimeout = null;
                this.form = form;
                this.formId = formId;
                this.on = on;
                this.$item = $(`#${formId} [sl-form-item-name="verifycode"] .sl-input`);
                this.$input = this.$item.find(".sl-input__inpEle");
                this.$send = this.$item.find(`.customer__send-btn`);
                const originValue = value || this.$input && this.$input.val();
                this.value = originValue;
                this.inputValue = originValue;
                this.immediate = immediate;
                this.dependFormItemName = null;
                this.init();
            }
            $$watch({name, value}) {
                this.changeSendButtonStatus(name, value);
            }
            changeSendButtonStatus(name, value) {
                if (this.countDownTimeout) return;
                if (void 0 === value) return;
                const {$send} = this;
                if (value) {
                    this.dependFormItemName = name;
                    this.form.validateFields([ name ]).then((res => {
                        if (res.pass) $send.removeAttr("disabled"); else $send.attr("disabled", true);
                    })).catch((() => {
                        $send.attr("disabled", true);
                    }));
                } else $send.attr("disabled", true);
            }
            init() {
                this.bindSendCodeEvent();
            }
            getValue() {
                return {
                    verifycode: this.inputValue || this.$input.val() || ""
                };
            }
            getFormValue() {
                const value = this.inputValue || this.$input.val() || "";
                this.value = value;
                return {
                    verifycode: value
                };
            }
            setCountDown() {
                if (this.countDown > 0) {
                    this.$send.attr("disabled", true);
                    this.$send.text(`${i18n_t("user.resend")}(${this.countDown})`);
                    this.countDown -= 1;
                    this.countDownTimeout = window.setTimeout((() => {
                        this.setCountDown();
                    }), 1e3);
                } else this.clearCountDown();
            }
            clearCountDown() {
                this.$send.removeAttr("disabled");
                this.$send.text(i18n_t("user.send"));
                window.clearTimeout(this.countDownTimeout);
                this.countDownTimeout = null;
                this.countDown = 60;
            }
            bindSendCodeEvent() {
                const {$send} = this;
                let loading = false;
                $send.on("click", (async e => {
                    e.preventDefault();
                    if (loading) return false;
                    this.clearCountDown();
                    try {
                        loading = true;
                        $(e.target).addClass(BUTTON_LOADING_CLASS);
                        await (this.on && this.on.send());
                        this.form.removeErrList([ this.dependFormItemName || "verifycode" ]);
                        this.setCountDown();
                    } catch (error) {
                        this.clearCountDown();
                        if (error && (error.rescode || error.message)) this.form.setErrMsgIntoDom([ {
                            name: this.dependFormItemName || "verifycode",
                            messages: [ getUdbErrorMessage(error) ]
                        } ]);
                    }
                    loading = false;
                    $(e.target).removeClass(BUTTON_LOADING_CLASS);
                }));
                if (this.immediate) this.triggerSendCode();
            }
            triggerSendCode() {
                const {$send} = this;
                $send.removeAttr("disabled");
                $send.trigger("click");
            }
            reset() {
                this.clearCountDown();
            }
        }
        const verifycode = Verifycode;
        const map = {
            phone,
            username,
            password: form_item_password,
            verifycode
        };
        const install = (formInstance, fields, defaultFormValue = {}) => {
            const formItems = {};
            const initFields = fields.map((({type, name, value, dependencies, rules = [], on = {}, ...args}) => {
                const Constructor = map[type];
                const dependenciesValue = dependencies && dependencies.reduce(((values, key) => {
                    values[key] = defaultFormValue[key];
                    return values;
                }), {});
                if (Constructor) {
                    const instance = new Constructor({
                        name,
                        form: formInstance,
                        formId: formInstance.fid,
                        value,
                        on,
                        ...args,
                        ...dependenciesValue
                    });
                    if (defaultFormValue[name]) $(formInstance.el).find(`input[name=${name}]`).val(defaultFormValue[name]);
                    const {rules: defaultRules = []} = instance && instance.install && instance.install() || {};
                    formItems[name] = instance;
                    return {
                        name,
                        value,
                        rules: rules.concat(defaultRules)
                    };
                }
                return {
                    name,
                    value,
                    rules
                };
            }));
            initFields.forEach((({name, value, rules}) => {
                formInstance.setRule(rules, name);
                if (value) formInstance.setLocalsValue(name, value);
            }));
            formInstance.on("valuesChange", (({changedValue}) => {
                const keys = Object.keys(changedValue);
                const key = keys && keys[0];
                const subscriptField = fields.filter((item => item && item.watch && item.watch.includes(key))) || [];
                subscriptField && subscriptField.forEach((field => {
                    const currentInstance = formItems[field && field.type];
                    const $$watch = currentInstance && currentInstance.$$watch;
                    if ("function" === typeof $$watch) $$watch && $$watch.call(currentInstance, {
                        name: key,
                        value: changedValue[key]
                    }); else if ("object" === typeof $$watch) $$watch && $$watch[key] && $$watch[key].call(currentInstance, changedValue[key]);
                }));
            }));
            return formItems;
        };
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
        const form_BUTTON_LOADING_CLASS = "btn--loading";
        class CustomerForm {
            constructor({id, fields, formValue = {}, onSubmit, onValidate}) {
                this.formId = id;
                this.fields = fields;
                this.formInstance = null;
                this.onSubmit = onSubmit;
                this.onValidate = onValidate;
                this.formItemInstances = {};
                this.defaultFormValue = formValue;
                this.init();
                return this;
            }
            init() {
                this.formInstance = this.initForm();
                this.setFormFields(this.fields);
                this.bindEvents();
            }
            initForm() {
                const formInstance = utils_form.takeForm(this.formId);
                formInstance.init({
                    validateTriggerAfterValidationFailed: ValidateTrigger.MANUAL
                });
                return formInstance;
            }
            setFormFields(fields) {
                this.formItemInstances = install(this.formInstance, fields, this.defaultFormValue);
            }
            bindEvents() {
                this.bindFormSubmit();
            }
            bindFormSubmit() {
                let isLoading = false;
                $(`#${this.formId} .submit-button`).click((async e => {
                    if (isLoading) return;
                    if (!(window && window.navigator && window.navigator.onLine)) {
                        toast.init({
                            content: i18n_t("customer.network-err-msg")
                        });
                        return;
                    }
                    e.preventDefault();
                    try {
                        await this.validateForm();
                        const data = this.getFormValue();
                        isLoading = true;
                        $(e.target).addClass(form_BUTTON_LOADING_CLASS);
                        await (this.onSubmit && this.onSubmit(data));
                    } catch (err) {
                        if (!err.rescode) return;
                        const lastField = this.fields[this.fields.length - 1];
                        if (lastField.name) this.formInstance.setErrMsgIntoDom([ {
                            name: lastField.name,
                            messages: [ getUdbErrorMessage(err) ]
                        } ]);
                    }
                    isLoading = false;
                    $(e.target).removeClass(form_BUTTON_LOADING_CLASS);
                }));
                this.bindInputActive();
            }
            getValue() {
                const fieldsValue = this.formInstance.getFieldsValue();
                return Object.keys(fieldsValue).reduce(((values, key) => {
                    const itemValue = this.formItemInstances[key] && this.formItemInstances[key].getValue();
                    if (itemValue) return {
                        ...values,
                        ...itemValue
                    };
                    return {
                        ...values,
                        [key]: fieldsValue[key]
                    };
                }), {});
            }
            getFormValue() {
                const fieldsValue = this.formInstance.getFieldsValue();
                return Object.keys(fieldsValue).reduce(((values, key) => {
                    const itemValue = this.formItemInstances[key] && this.formItemInstances[key].getFormValue();
                    if (itemValue) return {
                        ...values,
                        ...itemValue
                    };
                    return {
                        ...values,
                        [key]: fieldsValue[key]
                    };
                }), {});
            }
            async validateForm() {
                const validateFields = [ this.formInstance.validateFields() ];
                if ("function" === typeof this.onValidate) validateFields.push(this.onValidate());
                const res = await Promise.all(validateFields);
                const failRes = res.filter((item => !item.pass));
                if (failRes.length > 0) throw new Error({
                    errFields: failRes.reduce(((sum, item) => sum.concat(item.errFields)), []),
                    pass: false
                });
                return true;
            }
            bindInputActive() {
                $(this.formInstance.el).find(".placeholder").one("transitionend", (e => {
                    $(e.target).addClass("active");
                    setTimeout((() => $(e.target).removeClass("active")), 100);
                }));
            }
            destroy() {
                this.formInstance = null;
                Object.keys(this.formItemInstances).forEach((instance => {
                    this.formItemInstances[instance] && this.formItemInstances[instance].reset && this.formItemInstances[instance].reset();
                }));
                this.formItemInstances = {};
                this.formInstance && this.formInstance.resetErrStatus();
                this.formInstance && this.formInstance.destroy();
            }
        }
        const commons_form = CustomerForm;
        const modifyAddress = data => request_request.post("/user/front/address/save", data);
        const reportV2 = collect => {
            window.HdSdk && window.HdSdk.shopTracker.collect(collect);
        };
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
        const reportEditAddress = config => reportV2({
            page: pageMap.AddressEdit,
            ...config
        });
        const reportCheckDefaultBox = () => {
            reportEditAddress({
                module: Module.normal,
                component: 101,
                action_type: ActionType.check,
                event_id: 1624
            });
        };
        const reportSaveAddress = () => {
            reportEditAddress({
                module: Module.normal,
                component: 107,
                action_type: ActionType.click,
                event_id: 1625
            });
        };
        const reportCancelAddress = () => {
            reportEditAddress({
                module: Module.normal,
                component: 108,
                action_type: ActionType.click,
                event_id: 1626
            });
        };
        class CustomerAddress {
            constructor({id}) {
                this.form = null;
                this.id = id;
                this.init();
            }
            init() {
                const isLogin = SL_State.get("request.is_login");
                if (!isLogin) window.location.href = SIGN_IN;
                this.initForm();
                const {id} = this;
                this.address = createAddressComponent({
                    rootId: `${id}-component`,
                    autofillId: `${id}-autofill-renderer`
                });
                this.bindEvents();
            }
            initForm() {
                this.form = new commons_form({
                    id: this.id,
                    fields: [],
                    formValue: {},
                    onSubmit: data => this.onSubmit(data),
                    onValidate: () => this.address.validate()
                });
            }
            bindEvents() {
                this.form && this.form.formInstance && this.form.formInstance.on("valuesChange", (({changedValue}) => {
                    if ("undefined" !== typeof changedValue.def) this.onChangeDefCheckBox(changedValue.def);
                }));
                $(`#${this.id} .address-form__btn--cancel`).click((e => {
                    this.onCancel(e);
                }));
            }
            onChangeDefCheckBox(status) {
                if (status) reportCheckDefaultBox();
            }
            onCancel() {
                reportCancelAddress();
            }
            async onValidate() {
                const addressRes = await this.address.validate();
                if (!addressRes) throw new Error("Invalid address form fields");
            }
            async onSubmit() {
                const addressData = await this.address.getAddressInfo();
                const def = $(`#${this.id} .sl-checkbox__input[type="checkbox"]`).is(":checked");
                const formValue = {
                    ...addressData,
                    addressSeq: SL_State.get("request.uri.params.addressSeq"),
                    mobilePhone: formatterCodePhone(addressData.mobilePhone),
                    def
                };
                await modifyAddress(formValue);
                reportSaveAddress();
                redirectPage(USER_CENTER);
            }
        }
        const address = CustomerAddress;
        const containerId = "customer-address";
        $((function() {
            if (!document.getElementById(containerId)) return false;
            new address({
                id: containerId
            });
        }));
    })();
})();