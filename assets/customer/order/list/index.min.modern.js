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
        "../shared/browser/node_modules/@sl/currency-tools-core/lib/index.js": function(__unused_webpack_module, exports, __webpack_require__) {
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
        "../shared/browser/node_modules/@sl/logger-sentry/lib/index.es.js": (module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                default: () => H
            });
            var _sl_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/node_modules/@sl/logger/lib/index.es.js");
            module = __webpack_require__.hmd(module);
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                }, e(t, n);
            };
            var n = function() {
                return n = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t;
                }, n.apply(this, arguments);
            };
            function r(t, e) {
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
            function i() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
                return t;
            }
            function s() {
                return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            }
            var o = {};
            function a() {
                return s() ? __webpack_require__.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o;
            }
            function c(t, e, n) {
                var r = n || a(), i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[t] || (i[t] = e());
            }
            var u = Object.prototype.toString;
            function p(t) {
                return function(t, e) {
                    return u.call(t) === "[object " + e + "]";
                }(t, "Object");
            }
            function h(t) {
                return Boolean(t && t.then && "function" == typeof t.then);
            }
            var f, _ = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, l = a(), d = [ "debug", "info", "warn", "error", "log", "assert" ];
            function g(t) {
                var e = a();
                if (!("console" in e)) return t();
                var n = e.console, r = {};
                d.forEach((function(t) {
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
            function v() {
                var t = !1, e = {
                    enable: function() {
                        t = !0;
                    },
                    disable: function() {
                        t = !1;
                    }
                };
                return _ ? d.forEach((function(n) {
                    e[n] = function() {
                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                        t && g((function() {
                            var t;
                            (t = l.console)[n].apply(t, i([ "Sentry Logger [" + n + "]:" ], e));
                        }));
                    };
                })) : d.forEach((function(t) {
                    e[t] = function() {};
                })), e;
            }
            function y(t) {
                var e, n;
                if (p(t)) {
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
                            void 0 !== t[o] && (r[o] = y(t[o]));
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
                return Array.isArray(t) ? t.map(y) : t;
            }
            function x() {
                var t = a(), e = t.crypto || t.msCrypto;
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
            f = _ ? c("logger", v) : v();
            var S, m = function() {
                function t(t) {
                    var e = this;
                    this._state = 0, this._handlers = [], this._resolve = function(t) {
                        e._setResult(1, t);
                    }, this._reject = function(t) {
                        e._setResult(2, t);
                    }, this._setResult = function(t, n) {
                        0 === e._state && (h(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, 
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
            }(S || (S = {}));
            var b = {
                nowSeconds: function() {
                    return Date.now() / 1e3;
                }
            };
            var E = s() ? function() {
                try {
                    return (t = module, e = "perf_hooks", t.require(e)).performance;
                } catch (t) {
                    return;
                }
                var t, e;
            }() : function() {
                var t = a().performance;
                if (t && t.now) return {
                    now: function() {
                        return t.now();
                    },
                    timeOrigin: Date.now() - t.now()
                };
            }(), w = void 0 === E ? b : {
                nowSeconds: function() {
                    return (E.timeOrigin + E.now()) / 1e3;
                }
            }, k = b.nowSeconds.bind(b), T = w.nowSeconds.bind(w);
            !function() {
                var t = a().performance;
                if (t && t.now) {
                    var e = 36e5, n = t.now(), r = Date.now(), i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e, s = i < e, o = t.timing && t.timing.navigationStart, c = "number" == typeof o ? Math.abs(o + n - r) : e;
                    (s || c < e) && i <= c && t.timeOrigin;
                }
            }();
            var L = function() {
                function t() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], 
                    this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, 
                    this._sdkProcessingMetadata = {};
                }
                return t.clone = function(e) {
                    var r = new t;
                    return e && (r._breadcrumbs = i(e._breadcrumbs), r._tags = n({}, e._tags), r._extra = n({}, e._extra), 
                    r._contexts = n({}, e._contexts), r._user = e._user, r._level = e._level, r._span = e._span, 
                    r._session = e._session, r._transactionName = e._transactionName, r._fingerprint = e._fingerprint, 
                    r._eventProcessors = i(e._eventProcessors), r._requestSession = e._requestSession), 
                    r;
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
                    return this._tags = n(n({}, this._tags), t), this._notifyScopeListeners(), this;
                }, t.prototype.setTag = function(t, e) {
                    var r;
                    return this._tags = n(n({}, this._tags), ((r = {})[t] = e, r)), this._notifyScopeListeners(), 
                    this;
                }, t.prototype.setExtras = function(t) {
                    return this._extra = n(n({}, this._extra), t), this._notifyScopeListeners(), this;
                }, t.prototype.setExtra = function(t, e) {
                    var r;
                    return this._extra = n(n({}, this._extra), ((r = {})[t] = e, r)), this._notifyScopeListeners(), 
                    this;
                }, t.prototype.setFingerprint = function(t) {
                    return this._fingerprint = t, this._notifyScopeListeners(), this;
                }, t.prototype.setLevel = function(t) {
                    return this._level = t, this._notifyScopeListeners(), this;
                }, t.prototype.setTransactionName = function(t) {
                    return this._transactionName = t, this._notifyScopeListeners(), this;
                }, t.prototype.setTransaction = function(t) {
                    return this.setTransactionName(t);
                }, t.prototype.setContext = function(t, e) {
                    var r;
                    return null === e ? delete this._contexts[t] : this._contexts = n(n({}, this._contexts), ((r = {})[t] = e, 
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
                }, t.prototype.update = function(e) {
                    if (!e) return this;
                    if ("function" == typeof e) {
                        var r = e(this);
                        return r instanceof t ? r : this;
                    }
                    return e instanceof t ? (this._tags = n(n({}, this._tags), e._tags), this._extra = n(n({}, this._extra), e._extra), 
                    this._contexts = n(n({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), 
                    e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), 
                    e._requestSession && (this._requestSession = e._requestSession)) : p(e) && (this._tags = n(n({}, this._tags), e.tags), 
                    this._extra = n(n({}, this._extra), e.extra), this._contexts = n(n({}, this._contexts), e.contexts), 
                    e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), 
                    e.requestSession && (this._requestSession = e.requestSession)), this;
                }, t.prototype.clear = function() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, 
                    this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, 
                    this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), 
                    this;
                }, t.prototype.addBreadcrumb = function(t, e) {
                    var r = "number" == typeof e ? Math.min(e, 100) : 100;
                    if (r <= 0) return this;
                    var s = n({
                        timestamp: k()
                    }, t);
                    return this._breadcrumbs = i(this._breadcrumbs, [ s ]).slice(-r), this._notifyScopeListeners(), 
                    this;
                }, t.prototype.clearBreadcrumbs = function() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
                }, t.prototype.applyToEvent = function(t, e) {
                    if (this._extra && Object.keys(this._extra).length && (t.extra = n(n({}, this._extra), t.extra)), 
                    this._tags && Object.keys(this._tags).length && (t.tags = n(n({}, this._tags), t.tags)), 
                    this._user && Object.keys(this._user).length && (t.user = n(n({}, this._user), t.user)), 
                    this._contexts && Object.keys(this._contexts).length && (t.contexts = n(n({}, this._contexts), t.contexts)), 
                    this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), 
                    this._span) {
                        t.contexts = n({
                            trace: this._span.getTraceContext()
                        }, t.contexts);
                        var r = this._span.transaction && this._span.transaction.name;
                        r && (t.tags = n({
                            transaction: r
                        }, t.tags));
                    }
                    return this._applyFingerprint(t), t.breadcrumbs = i(t.breadcrumbs || [], this._breadcrumbs), 
                    t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, 
                    this._notifyEventProcessors(i(c("globalEventProcessors", (function() {
                        return [];
                    })), this._eventProcessors), t, e);
                }, t.prototype.setSDKProcessingMetadata = function(t) {
                    return this._sdkProcessingMetadata = n(n({}, this._sdkProcessingMetadata), t), this;
                }, t.prototype._notifyEventProcessors = function(t, e, r, i) {
                    var s = this;
                    return void 0 === i && (i = 0), new m((function(o, a) {
                        var c = t[i];
                        if (null === e || "function" != typeof c) o(e); else {
                            var u = c(n({}, e), r);
                            h(u) ? u.then((function(e) {
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
            var O = function() {
                function t(t) {
                    this.errors = 0, this.sid = x(), this.duration = 0, this.status = "ok", this.init = !0, 
                    this.ignoreDuration = !1;
                    var e = T();
                    this.timestamp = e, this.started = e, t && this.update(t);
                }
                return t.prototype.update = function(t) {
                    if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), 
                    this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), 
                    this.timestamp = t.timestamp || T(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), 
                    t.sid && (this.sid = 32 === t.sid.length ? t.sid : x()), void 0 !== t.init && (this.init = t.init), 
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
                    return y({
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
            }(), N = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, R = function() {
                function t(t, e, n) {
                    void 0 === e && (e = new L), void 0 === n && (n = 4), this._version = n, this._stack = [ {} ], 
                    this.getStackTop().scope = e, t && this.bindClient(t);
                }
                return t.prototype.isOlderThan = function(t) {
                    return this._version < t;
                }, t.prototype.bindClient = function(t) {
                    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations();
                }, t.prototype.pushScope = function() {
                    var t = L.clone(this.getScope());
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
                }, t.prototype.captureException = function(t, e) {
                    var r = this._lastEventId = e && e.event_id ? e.event_id : x(), i = e;
                    if (!e) {
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
                    return this._invokeClient("captureException", t, n(n({}, i), {
                        event_id: r
                    })), r;
                }, t.prototype.captureMessage = function(t, e, r) {
                    var i = this._lastEventId = r && r.event_id ? r.event_id : x(), s = r;
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
                    return this._invokeClient("captureMessage", t, e, n(n({}, s), {
                        event_id: i
                    })), i;
                }, t.prototype.captureEvent = function(t, e) {
                    var r = e && e.event_id ? e.event_id : x();
                    return "transaction" !== t.type && (this._lastEventId = r), this._invokeClient("captureEvent", t, n(n({}, e), {
                        event_id: r
                    })), r;
                }, t.prototype.lastEventId = function() {
                    return this._lastEventId;
                }, t.prototype.addBreadcrumb = function(t, e) {
                    var r = this.getStackTop(), i = r.scope, s = r.client;
                    if (i && s) {
                        var o = s.getOptions && s.getOptions() || {}, a = o.beforeBreadcrumb, c = void 0 === a ? null : a, u = o.maxBreadcrumbs, p = void 0 === u ? 100 : u;
                        if (!(p <= 0)) {
                            var h = k(), f = n({
                                timestamp: h
                            }, t), _ = c ? g((function() {
                                return c(f, e);
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
                        return N && f.warn("Cannot retrieve integration " + t.id + " from the current Hub"), 
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
                    var e = this.getStackTop(), r = e.scope, i = e.client, s = i && i.getOptions() || {}, o = s.release, c = s.environment, u = (a().navigator || {}).userAgent, p = new O(n(n(n({
                        release: o,
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
                    for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var s = this.getStackTop(), o = s.scope, a = s.client;
                    a && a[t] && (e = a)[t].apply(e, i(n, [ o ]));
                }, t.prototype._callExtensionMethod = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var r = j(), i = r.__SENTRY__;
                    if (i && i.extensions && "function" == typeof i.extensions[t]) return i.extensions[t].apply(this, e);
                    N && f.warn("Extension method " + t + " couldn't be found, doing nothing.");
                }, t;
            }();
            function j() {
                var t = a();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t;
            }
            function C(t) {
                var e = j(), n = M(e);
                return D(e, t), n;
            }
            function A() {
                var t = j();
                return P(t) && !M(t).isOlderThan(4) || D(t, new R), s() ? function(t) {
                    try {
                        var e = j().__SENTRY__, n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                        if (!n) return M(t);
                        if (!P(n) || M(n).isOlderThan(4)) {
                            var r = M(t).getStackTop();
                            D(n, new R(r.client, L.clone(r.scope)));
                        }
                        return M(n);
                    } catch (e) {
                        return M(t);
                    }
                }(t) : M(t);
            }
            function P(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
            }
            function M(t) {
                return c("hub", (function() {
                    return new R;
                }), t);
            }
            function D(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0);
            }
            function B(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = A();
                if (r && r[t]) return r[t].apply(r, i(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.");
            }
            function I(t, e) {
                var r = new Error(t);
                return B("captureMessage", t, "string" == typeof e ? e : void 0, n({
                    originalException: t,
                    syntheticException: r
                }, "string" != typeof e ? {
                    captureContext: e
                } : void 0));
            }
            var Y = function(t) {
                function n() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.name = "Logger Error", e;
                }
                return function(t, n) {
                    function r() {
                        this.constructor = t;
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, 
                    new r);
                }(n, t), n;
            }(Error), U = function(t) {
                var e = t.message, n = t.owner, r = t.action, i = t.status, s = t.errorLevel, o = t.data;
                return {
                    title: e,
                    context: [ {
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
                    } ].map((function(t) {
                        return e = t.key, n = t.value, "".concat(n ? "\n[".concat(e, ": ").concat(n, "]") : "");
                        var e, n;
                    })).join(""),
                    data: o ? "\n".concat(JSON.stringify(o, null, 2)) : ""
                };
            }, q = function(t) {
                var e = {};
                return [ "owner", "action" ].forEach((function(n) {
                    (t[n] || 0 === t[n]) && (e["event.".concat(n)] = t[n]);
                })), n(n({}, t.tags), e);
            }, W = function(t, e) {
                var n;
                return e instanceof Error ? (e.message = "".concat(t.title).concat(e.message ? " [reason: ".concat(e.message, "]") : "").concat(t.context), 
                n = e) : (null == e ? void 0 : e.reportError) instanceof Error ? (e.reportError.message = "".concat(t.title).concat(e.reportError.message ? " [reason: ".concat(e.reportError.message, "]") : "").concat(t.context), 
                n = e.reportError) : n = new Y("".concat(t.title).concat(t.context)), n;
            }, H = function(e) {
                var r, i, s = e.level, o = e.data, a = e.error, c = U(e), u = q(e), p = W(c, a);
                switch (s) {
                  case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Info:
                    B("addBreadcrumb", {
                        category: e.owner,
                        message: "".concat(c.title).concat(c.context).concat(c.data),
                        level: S.Info
                    });
                    break;

                  case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Log:
                    I("".concat(c.title).concat(c.context).concat(c.data), {
                        extra: o,
                        tags: u,
                        level: S.Log
                    });
                    break;

                  case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warn:
                    I("".concat(c.title).concat(c.context).concat(c.data), {
                        extra: o,
                        tags: u,
                        level: S.Warning
                    });
                    break;

                  case _sl_logger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                    r = p, i = {
                        extra: n({
                            error: a
                        }, o),
                        tags: u,
                        level: S.Error
                    }, B("captureException", r, {
                        captureContext: i,
                        originalException: r,
                        syntheticException: new Error("Sentry syntheticException")
                    });
                    break;

                  default:
                    console.error("不是期望的上报类型", s, c);
                }
            };
        },
        "../shared/browser/node_modules/@sl/logger/lib/index.es.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                LogLevel: () => t,
                LogStatus: () => n,
                consoleTransport: () => i,
                default: () => p
            });
            var o, n, t, e = function() {
                return e = Object.assign || function(o) {
                    for (var n, t = 1, e = arguments.length; t < e; t++) for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (o[r] = n[r]);
                    return o;
                }, e.apply(this, arguments);
            };
            function r(o, n, t, e) {
                var r, i = arguments.length, c = i < 3 ? n : null === e ? e = Object.getOwnPropertyDescriptor(n, t) : e;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(o, n, t, e); else for (var a = o.length - 1; a >= 0; a--) (r = o[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(n, t, c) : r(n, t)) || c);
                return i > 3 && c && Object.defineProperty(n, t, c), c;
            }
            !function(o) {
                o.P0 = "P0", o.P1 = "P1", o.P2 = "P2";
            }(o || (o = {})), function(o) {
                o.Start = "开始", o.Success = "成功", o.Failure = "失败";
            }(n || (n = {})), function(o) {
                o.Info = "info", o.Log = "log", o.Warn = "warn", o.Error = "error";
            }(t || (t = {}));
            var i = function(o) {
                var n = o.level, e = o.message, r = function(o, n) {
                    var t = {};
                    for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && n.indexOf(e) < 0 && (t[e] = o[e]);
                    if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (e = Object.getOwnPropertySymbols(o); r < e.length; r++) n.indexOf(e[r]) < 0 && Object.prototype.propertyIsEnumerable.call(o, e[r]) && (t[e[r]] = o[e[r]]);
                    }
                    return t;
                }(o, [ "level", "message" ]);
                switch (n) {
                  case t.Info:
                    console.debug("%c".concat(e), "color: #fff; background-color: #6e6e6e;", r);
                    break;

                  case t.Log:
                    console.log("%c".concat(e), "color: #fff; background-color: #2a53cd;", r);
                    break;

                  case t.Warn:
                    console.warn(e, r);
                    break;

                  case t.Error:
                    console.error(e, r);
                    break;

                  default:
                    console.error("不是期望的上报类型", n, e, r);
                }
            }, s = function(o, n, t) {
                var e = t.value;
                t.value = function() {
                    for (var o = [], t = 0; t < arguments.length; t++) o[t] = arguments[t];
                    try {
                        var r = e.apply(this, o);
                        return r;
                    } catch (o) {
                        return console.error("logger: ".concat(n, "方法执行出错"), o), p;
                    }
                };
            }, l = function() {
                function o(o) {
                    var n = this;
                    this.options = {
                        owner: "",
                        action: "",
                        transports: []
                    }, this.report = function(o, t, r) {
                        !function(o, n) {
                            var t = o;
                            n.forEach((function(o) {
                                var n = o(t);
                                n && (t = n);
                            }));
                        }(e(e({
                            level: o,
                            owner: n.options.owner,
                            action: n.options.action
                        }, r), {
                            message: t
                        }), n.options.transports);
                    }, this.options = e(e({}, this.options), o);
                }
                return o.prototype.withOwner = function(n) {
                    return new o(e(e({}, this.options), {
                        owner: n
                    }));
                }, o.prototype.pipeOwner = function(n) {
                    if (!n) return this;
                    var t = "";
                    return t = this.options.owner ? "".concat(this.options.owner, ".").concat(n) : n, 
                    new o(e(e({}, this.options), {
                        owner: t
                    }));
                }, o.prototype.withAction = function(n) {
                    return new o(e(e({}, this.options), {
                        action: n
                    }));
                }, o.prototype.pipeTransport = function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    var r = this.options.transports.concat(n);
                    return new o(e(e({}, this.options), {
                        transports: r
                    }));
                }, o.prototype.info = function(o, n) {
                    this.report(t.Info, o, n);
                }, o.prototype.log = function(o, n) {
                    this.report(t.Log, o, n);
                }, o.prototype.warn = function(o, n) {
                    this.report(t.Warn, o, n);
                }, o.prototype.error = function(o, n) {
                    this.report(t.Error, o, n);
                }, r([ s ], o.prototype, "withOwner", null), r([ s ], o.prototype, "pipeOwner", null), 
                r([ s ], o.prototype, "withAction", null), r([ s ], o.prototype, "pipeTransport", null), 
                r([ s ], o.prototype, "info", null), r([ s ], o.prototype, "log", null), r([ s ], o.prototype, "warn", null), 
                r([ s ], o.prototype, "error", null), o;
            }(), p = new l;
            Object.defineProperty(p, "options", {
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
        "../shared/browser/node_modules/lodash/_freeGlobal.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var freeGlobal = "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
            module.exports = freeGlobal;
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
        "../shared/browser/node_modules/lodash/_root.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var freeGlobal = __webpack_require__("../shared/browser/node_modules/lodash/_freeGlobal.js");
            var freeSelf = "object" == typeof self && self && self.Object === Object && self;
            var root = freeGlobal || freeSelf || Function("return this")();
            module.exports = root;
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
        "../shared/browser/node_modules/lodash/isObject.js": module => {
            function isObject(value) {
                var type = typeof value;
                return null != value && ("object" == type || "function" == type);
            }
            module.exports = isObject;
        },
        "../shared/browser/node_modules/lodash/isSymbol.js": module => {
            function stubFalse() {
                return false;
            }
            module.exports = stubFalse;
        },
        "../shared/browser/node_modules/lodash/now.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var root = __webpack_require__("../shared/browser/node_modules/lodash/_root.js");
            var now = function() {
                return root.Date.now();
            };
            module.exports = now;
        },
        "../shared/browser/node_modules/lodash/throttle.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var debounce = __webpack_require__("../shared/browser/node_modules/lodash/debounce.js"), isObject = __webpack_require__("../shared/browser/node_modules/lodash/isObject.js");
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
        "../shared/browser/node_modules/lodash/toNumber.js": module => {
            function identity(value) {
                return value;
            }
            module.exports = identity;
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
        __webpack_require__.hmd = module => {
            module = Object.create(module);
            if (!module.children) module.children = [];
            Object.defineProperty(module, "exports", {
                enumerable: true,
                set: () => {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + module.id);
                }
            });
            return module;
        };
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
        var dayjs_min = __webpack_require__("../shared/browser/node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        var throttle = __webpack_require__("../shared/browser/node_modules/lodash/throttle.js");
        var throttle_default = __webpack_require__.n(throttle);
        const OFFSET_HEIGHT = 20;
        const THROTTLE_WAIT = 30;
        class ScrollPagination {
            constructor(options) {
                this.options = options;
                this._locked = false;
                this._isDocumentScroll = false;
                this.init();
            }
            init() {
                this.scrollContainer.on("scroll", throttle_default()((async () => {
                    if (this.isScrolledToBottom && !this._locked) {
                        this._locked = true;
                        this.loadingContainer.fadeIn();
                        const {noMore} = await this.options.load();
                        this.loadingContainer.fadeOut();
                        if (true !== noMore) this._locked = false;
                    }
                }), THROTTLE_WAIT));
            }
            get isScrolledToBottom() {
                let scrollContainer = this.scrollContainer[0];
                if (!scrollContainer) throw Error("invalid scrollContainer option");
                if (this._isDocumentScroll) scrollContainer = document.documentElement;
                return scrollContainer.scrollTop + scrollContainer.clientHeight > this.listContainer.height() + OFFSET_HEIGHT;
            }
            get scrollContainer() {
                const optionContainer = this.options.scrollContainer;
                if (!optionContainer || [ "[object HTMLDocument]", "document" ].includes(optionContainer.toString())) {
                    this._isDocumentScroll = true;
                    return __SL_$__(document);
                }
                return __SL_$__(optionContainer);
            }
            get listContainer() {
                return __SL_$__(this.options.listContainer);
            }
            get loadingContainer() {
                return __SL_$__(this.options.loadingContainer);
            }
        }
        const scrollPagination = ScrollPagination;
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
        function t(path, hash) {
            const keys = i18n_parsePathToArray(path);
            const value = keys.reduce(((prev, current) => {
                if (!prev) return;
                return prev && prev.string ? prev.string[current] : prev[current];
            }), window.__I18N__);
            const regExp = /\{\{([^{}]+)\}\}/g;
            return nullishCoalescingOperator(get_func(value, "replace").exec(regExp, ((...args) => nullishCoalescingOperator(syntax_patch_get(hash, args[1]), args[0]))), path);
        }
        var lib = __webpack_require__("../shared/browser/node_modules/@sl/currency-tools-core/lib/index.js");
        const storeCurrency = SL_State.get("storeInfo.currency");
        const toDefault = SL_State.get("currencyCode") || storeCurrency;
        const {currencyDetailList} = window.Shopline.currencyConfig;
        (0, lib.setCurrencyConfig)(currencyDetailList);
        (0, lib.setStoreCurrency)(storeCurrency);
        (0, lib.setDefaultToCurrency)(toDefault);
        SL_State.on("currencyCode", (code => {
            (0, lib.setDefaultToCurrency)(code);
        }));
        const setDefault = () => {
            const toDefault = SL_State.get("currencyCode") || SL_State.get("storeInfo.currency");
            (0, lib.setDefaultToCurrency)(toDefault);
        };
        const convertFormat = (...args) => {
            setDefault();
            return (0, lib.convertFormat)(...args);
        };
        var index_es = __webpack_require__("../shared/browser/node_modules/@sl/logger/lib/index.es.js");
        var lib_index_es = __webpack_require__("../shared/browser/node_modules/@sl/logger-sentry/lib/index.es.js");
        function getEnv(key) {
            const ENV = window.__ENV__ || {};
            if (key) return ENV[key];
            return ENV;
        }
        const envConst = {
            DEBUG: "DEBUG",
            APP_ENV: "APP_ENV",
            APP_ENV__DEVELOP: "develop",
            APP_ENV__STAGING: "staging",
            APP_ENV__PREVIEW: "preview",
            APP_ENV__PRODUCT: "product"
        };
        function env_get(key) {
            return getEnv()[key];
        }
        function isDebugMode() {
            const value = env_get(envConst.DEBUG);
            return "true" === value || "1" === value;
        }
        function appEnvQuery() {
            return env_get(envConst.APP_ENV) || "";
        }
        function appEnvInDevelop() {
            return appEnvQuery() === envConst.APP_ENV__DEVELOP;
        }
        function appEnvInStaging() {
            return appEnvQuery() === envConst.APP_ENV__STAGING;
        }
        const env = {
            isDebugMode,
            appEnvQuery,
            appEnvInDevelop,
            appEnvInStaging
        };
        const transports = [ lib_index_es["default"] ];
        if (env.appEnvInDevelop()) transports.unshift(index_es.consoleTransport);
        const baseLogger = index_es["default"].pipeTransport(...transports);
        const sentry = baseLogger;
        const Owner = {
            OrderList: "order.orderList"
        };
        const Action = {
            Init: "init",
            Scroll: "scroll"
        };
        const getCookie = key => window && window.SL_State && window.SL_State.get(`request.cookie.${key}`);
        var node_modules_axios = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(node_modules_axios);
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
        null && axios;
        const signOut = params => udbRequest.get("/udb/lgn/login/logout.do", {
            params
        });
        const SIGN_IN = "/user/signIn";
        "undefined" === typeof window || window.location.origin;
        function toSignOut() {
            const appid = getCookie("osudb_appid");
            const subappid = getCookie("osudb_subappid");
            return signOut({
                appid,
                subappid
            }).then((() => true));
        }
        async function signOutAndJump(beforeJump) {
            const isSignOut = await toSignOut();
            if (true !== isSignOut) return;
            if (beforeJump instanceof Function) beforeJump();
            window.location.href = SIGN_IN;
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
        var url = __webpack_require__("../shared/browser/biz-com/customer/utils/url.js");
        [ "preview", "product" ].includes(getEnv().APP_ENV || "");
        const CONFIRM_SUBSCRIBE_EMAIL = "confirmSubscribeEmail";
        const LOADING = "loading";
        function whichAnimationEndEvent() {
            let t, el = document.createElement("fakeelement");
            const animations = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (t in animations) if (void 0 !== el.style[t]) {
                console.log("anim...");
                return animations[t];
            }
        }
        const getTemplate = (options, type = "default") => {
            const loadingColor = options.loadingColor || "black";
            const templates = {
                [LOADING]: `\n      <div class="mp-toast mp-toast--loading mp-toast--loading-style2 mp-toast__hidden ${options.fullscreen && "mp-toast__fullscreen"} ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <span class="mp-loading__spinner mp-loading__spinner--circular">\n            <svg class="mp-loading__circular" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 10 1.66666" stroke="${loadingColor}" stroke-width="2.5" stroke-linecap="round"/>\n            </svg>\n          </span>\n        </div>\n        <div class="mp-toast__content mp-toast__text">${options.content}</div>\n      </div>\n    `,
                showSuccess: `\n      <div class="mp-toast mp-toast--loading mp-toast--success-container mp-toast--loading-style2 ${options.className || ""}">\n        <div class="mp-loading mp-loading--circular mp-toast__loading">\n          <div class="mp-loading__success-box">\n            <svg class="arrow" width="20" height="20" viewBox="0 0 20 20">\n              <circle cx="10" cy="10" r="8.75" fill="none" stroke="${loadingColor}" stroke-width="2.5" class="circle"></circle>\n              <polyline points="4.5,10 9,14 14.5,6.5" fill="none" stroke="${loadingColor}" stroke-width="2.5" class="hookmark" stroke-linecap="round" stroke-linejoin="round"\n              ></polyline>\n            </svg>\n          </div>\n        </div>\n      </div>\n    `,
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
            showSuccessAni(options = {}, callback) {
                const {$target} = this;
                this.close();
                const buttonTxt = $target.find(".pdp_button_text");
                buttonTxt.addClass("showSuccessAni");
                const successAniTemp = getTemplate(options, "showSuccess");
                $target.append(successAniTemp);
                const hookWrapDom = $target.find(".mp-toast--success-container");
                const hookNode = $target.find(".hookmark");
                if (hookNode.length > 0) {
                    const animationEnd = whichAnimationEndEvent();
                    hookNode.one(animationEnd, (function(event) {
                        if (callback && "function" === typeof callback) setTimeout((() => {
                            hookWrapDom.remove();
                            buttonTxt.removeClass("showSuccessAni");
                            callback(event, $target);
                        }), options.delay || 0);
                    }));
                }
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
                window.location.href = SIGN_IN;
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
                    window.location.href = SIGN_IN;
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
        function withLoginStatusCheck(response) {
            return new Promise(((res, rej) => {
                response.then((data => {
                    res(data);
                })).catch((err => {
                    if ("CUS0401" === err.code) {
                        signOutAndJump();
                        return;
                    }
                    rej(err);
                }));
            }));
        }
        const getOrderList = params => withLoginStatusCheck(request.get("/trade/ofc/order/sub/list", {
            params
        }));
        const eventName = {
            pageView: "101",
            pageLeave: "999"
        };
        function reportEvent(eventId, params = {}) {
            if (!eventId) throw new Error("eventId must be provided!");
            window.HdSdk && window.HdSdk.shopTracker.report(eventId, params);
        }
        const cidMap = {
            customer: "60079999"
        };
        function reportPageView(eventId, params = {}) {
            reportEvent(eventId, {
                event_name: eventName.pageView,
                ...params
            });
        }
        function reportPageLeave(eventId, params = {}) {
            reportEvent(eventId, {
                event_name: eventName.pageLeave,
                ...params
            });
        }
        const bizOrderStatusEnum = {
            PROGRESS: 100,
            CANCELED: 400
        };
        const EnumPayStatus = {
            WAIT_PAY: 0,
            WAIT_PAY_CALLBACK: 40,
            PENDING: 100,
            AUTHORIZED: 110,
            PENDING_REVIEW: 140,
            PARTIAL_PAYMENT: 150,
            PAYED: 200
        };
        const EnumDeliveryStatus = {
            IN_STOCK: 100,
            DELIVERY_PARTIAL: 150,
            SHIPPED: 400
        };
        const PayStatusI18n = {
            [EnumPayStatus.WAIT_PAY]: t("cart.payment.unpaid"),
            [EnumPayStatus.WAIT_PAY_CALLBACK]: t("cart.payment.unpaid"),
            [EnumPayStatus.PENDING]: t("cart.payment.paying"),
            [EnumPayStatus.AUTHORIZED]: t("cart.order.authorized"),
            [EnumPayStatus.PENDING_REVIEW]: t("cart.payment.pending_review"),
            [EnumPayStatus.PARTIAL_PAYMENT]: t("cart.payment.partially_paid"),
            [EnumPayStatus.PAYED]: t("cart.payment.paid")
        };
        const DeliveryStatusI18n = {
            [EnumDeliveryStatus.IN_STOCK]: t("cart.shipping.preparing_order"),
            [EnumDeliveryStatus.DELIVERY_PARTIAL]: t("cart.shipping.partially_shipped"),
            [EnumDeliveryStatus.SHIPPED]: t("cart.shipping.shipped_order")
        };
        function initCurrencyChangeListener(selector) {
            const cartRootNode = __SL_$__(selector || document);
            SL_State.on("currencyCode", (() => {
                const amountNode = cartRootNode.find("[data-amount]");
                amountNode.each((function() {
                    __SL_$__(this).text(convertFormat(__SL_$__(this).attr("data-amount")));
                }));
            }));
        }
        const sentryLogger = sentry.pipeOwner(Owner.OrderList);
        const isMobile = SL_State.get("request.is_mobile");
        const listContainerCls = ".customer-order-list";
        const jump = ({pageType, id}) => {
            let href = "";
            switch (pageType) {
              case "plp":
                href = `${window.location.origin}/collections`;
                break;

              case "detail":
                href = `${window.location.origin}/user/orders/${id}`;
            }
            reportPageLeave(cidMap.customer, {
                page_dest: href
            });
            window.location.href = href;
        };
        class CustomerOrderList {
            constructor() {
                const {pageNum, pageSize, lastPage} = SL_State.get("customer.orders") || {};
                if (!pageNum) this._isEmpty = true; else this.requestParams = {
                    pageNum: pageNum + 1,
                    pageSize
                };
                this._isLastPage = lastPage;
                sentryLogger.info("订单列表初始化", {
                    action: Action.Init,
                    data: {
                        orderList: SL_State.get("customer.orders")
                    }
                });
            }
            getOrderStatusInfo(data) {
                const {bizPayStatus, bizDeliveryStatus} = data;
                const pcStatus = `\n    <div class="pay-status-pc ${isMobile ? "hide" : ""}">\n        <p class="status-box">\n          <span class="svg-wrapper">\n            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <g>\n                <rect x="2" y="3.5" width="12" height="10" rx="0.5" stroke="currentColor" />\n                <path d="M2 6.5H14" stroke="currentColor" />\n                <path d="M8.6665 11.8335C8.6665 11.2812 9.11422 10.8335 9.6665 10.8335H11.6665C12.2188 10.8335 12.6665 11.2812 12.6665 11.8335H8.6665Z" fill="currentColor" />\n              </g>\n            </svg>\n          </span>\n          <span class="status-info">\n            ${PayStatusI18n[bizPayStatus]}\n          </span>\n        </p>\n        <p class="status-box">\n          <span class="svg-wrapper">\n            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <g>\n                <path\n                  d="M2 12V7.07819C2 6.59438 2.26208 6.14853 2.6848 5.91321L5.85714 4.14721V3.33333C5.85714 2.59695 6.4541 2 7.19048 2H12.6667C13.403 2 14 2.59695 14 3.33333V12"\n                  stroke="currentColor" />\n                <path d="M8 4V7H4" stroke="currentColor" />\n                <circle cx="5.5" cy="12.5" r="1.5" stroke="currentColor" />\n                <circle cx="10.5" cy="12.5" r="1.5" stroke="currentColor" />\n              </g>\n            </svg>\n          </span>\n          <span class="status-info">\n            ${DeliveryStatusI18n[bizDeliveryStatus]}\n          </span>\n        </p>\n      </div>\n    `;
                return `\n    ${pcStatus}\n    <div class="pay-status-mobile ${!isMobile ? "hide" : ""}">\n      <span>${PayStatusI18n[bizPayStatus]}</span>\n      <span class="point"></span>\n      <span>${DeliveryStatusI18n[bizDeliveryStatus]}</span>\n    </div>`;
            }
            getSkuItem(data) {
                const {orderSeq, appOrderSeq, createTime, bizOrderStatus, productImage, productNum, orderAmount} = data;
                const statusContent = this.getOrderStatusInfo(data);
                const header = `\n      <div class="customer-order-sku-item-header">\n      <div>\n        <span class="seq">${t("cart.order.sequence", {
                    id: appOrderSeq
                })}</span>\n        <div class="create-time">\n          <span>${t("cart.order.time")}</span>\n          <span>${dayjs_min_default()(createTime).format("YYYY-MM-DD HH:mm A")}</span>\n        </div>\n      </div>\n      ${+bizOrderStatus === bizOrderStatusEnum.CANCELED ? `<span class="status cancelled">\n              ${t("cart.order.canceled")}\n            </span>` : ""}\n    </div>`;
                const prodNumsTotalTxt = t("cart.order.total_amount", {
                    transPackages: productNum
                });
                const html = `\n    <div class="customer-order-sku-item" data-id="${orderSeq}">\n        <div class="wrapper">\n          ${header}\n          <div class="customer-order-sku-item-content">\n            <div class="item-info">\n              <div class="sku-item-image">\n                ${productImage ? `<img class="lozad" data-src="${productImage}" />` : `<div class="sku-item-image-fallback"></div>`}\n              </div>\n\n              <div class="product-total">\n                <span>${prodNumsTotalTxt}</span>\n              </div>\n            </div>\n            \n            ${statusContent}\n            <div class="total-info">\n              <p>\n                <span>${t("cart.payment.total")}</span>\n                <span class="total notranslate" data-amount="${orderAmount}">${convertFormat(orderAmount || 0)}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    `;
                return html;
            }
            getLastPageDom() {
                return `\n    <p class='no-more'>- ${t("cart.order.no_more_info")} -</p>\n    `;
            }
            bindEvent() {
                __SL_$__(".customer-order-list").on("click", ".customer-order-sku-item", (function() {
                    jump({
                        pageType: "detail",
                        id: __SL_$__(this).data("id")
                    });
                }));
                __SL_$__(".customer-order-list").on("click", ".go-shipping-btn", (function() {
                    jump({
                        pageType: "plp"
                    });
                }));
            }
            formatTime() {
                const dateEles = __SL_$__(listContainerCls).find("[data-date-format]");
                dateEles.each((function() {
                    const {date, dateFormat} = __SL_$__(this).data();
                    __SL_$__(this).show().text(dayjs_min_default()(date).format(dateFormat || "YYYY-MM-DD HH:mm A"));
                }));
            }
            init() {
                reportPageView(cidMap.customer);
                __SL_$__(document).on("DOMContentLoaded", (() => {
                    this.bindEvent();
                    initCurrencyChangeListener(listContainerCls);
                    this.formatTime();
                    if (!this._isEmpty) new scrollPagination({
                        load: async () => {
                            if (this._isLastPage) return {
                                noMore: true
                            };
                            let result = "";
                            try {
                                const res = await getOrderList(this.requestParams);
                                if (!res.success) {
                                    console.error(`[订单列表接口]请求失败，请求入参为${JSON.stringify(this.requestParams)}`);
                                    return;
                                }
                                const {list, lastPage} = res.data || {};
                                for (let i = 0; i < list.length; i += 1) result += this.getSkuItem(list[i]);
                                this.requestParams.pageNum += 1;
                                if (lastPage) {
                                    this._isLastPage = lastPage;
                                    result += this.getLastPageDom();
                                }
                                __SL_$__(`${listContainerCls} .main-wrapper`).append(result);
                                window.lozadObserver && window.lozadObserver.observe();
                            } catch (err) {
                                sentryLogger.error("订单列表获取异常", {
                                    action: Action.Scroll,
                                    Status: index_es.LogStatus.Failure,
                                    error: err,
                                    data: {
                                        requestParams: this.requestParams
                                    }
                                });
                                console.error(err);
                            }
                            return {
                                noMore: false
                            };
                        },
                        listContainer: listContainerCls,
                        loadingContainer: `${listContainerCls} .load-more .loading-container`
                    });
                }));
            }
        }
        const list = CustomerOrderList;
        class CustomerOrderListInTheme extends list {}
        const customerOrderListInTheme = new CustomerOrderListInTheme;
        customerOrderListInTheme.init();
    })();
})();