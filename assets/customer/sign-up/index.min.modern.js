(() => {
    var __webpack_modules__ = {
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
                getUrlQuery: () => getUrlQuery,
                getUrlAllQuery: () => getUrlAllQuery
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
        "../shared/browser/node_modules/js-cookie/src/js.cookie.js": (module, exports, __webpack_require__) => {
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
        "../shared/browser/node_modules/lodash/_apply.js": module => {
            function apply(func, thisArg, args) {
                switch (args.length) {
                  case 0:
                    return func.call(thisArg);

                  case 1:
                    return func.call(thisArg, args[0]);

                  case 2:
                    return func.call(thisArg, args[0], args[1]);

                  case 3:
                    return func.call(thisArg, args[0], args[1], args[2]);
                }
                return func.apply(thisArg, args);
            }
            module.exports = apply;
        },
        "../shared/browser/node_modules/lodash/_arrayIncludes.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var baseIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_baseIndexOf.js");
            function arrayIncludes(array, value) {
                var length = null == array ? 0 : array.length;
                return !!length && baseIndexOf(array, value, 0) > -1;
            }
            module.exports = arrayIncludes;
        },
        "../shared/browser/node_modules/lodash/_arrayIncludesWith.js": module => {
            function arrayIncludesWith(array, value, comparator) {
                var index = -1, length = null == array ? 0 : array.length;
                while (++index < length) if (comparator(value, array[index])) return true;
                return false;
            }
            module.exports = arrayIncludesWith;
        },
        "../shared/browser/node_modules/lodash/_arrayMap.js": module => {
            function arrayMap(array, iteratee) {
                var index = -1, length = null == array ? 0 : array.length, result = Array(length);
                while (++index < length) result[index] = iteratee(array[index], index, array);
                return result;
            }
            module.exports = arrayMap;
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
        "../shared/browser/node_modules/lodash/_baseIntersection.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var SetCache = __webpack_require__("../shared/browser/node_modules/lodash/_SetCache.js"), arrayIncludes = __webpack_require__("../shared/browser/node_modules/lodash/_arrayIncludes.js"), arrayIncludesWith = __webpack_require__("../shared/browser/node_modules/lodash/_arrayIncludesWith.js"), arrayMap = __webpack_require__("../shared/browser/node_modules/lodash/_arrayMap.js"), baseUnary = __webpack_require__("../shared/browser/node_modules/lodash/_baseUnary.js"), cacheHas = __webpack_require__("../shared/browser/node_modules/lodash/_cacheHas.js");
            var nativeMin = Math.min;
            function baseIntersection(arrays, iteratee, comparator) {
                var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = [];
                while (othIndex--) {
                    var array = arrays[othIndex];
                    if (othIndex && iteratee) array = arrayMap(array, baseUnary(iteratee));
                    maxLength = nativeMin(array.length, maxLength);
                    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : void 0;
                }
                array = arrays[0];
                var index = -1, seen = caches[0];
                outer: while (++index < length && result.length < maxLength) {
                    var value = array[index], computed = iteratee ? iteratee(value) : value;
                    value = comparator || 0 !== value ? value : 0;
                    if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                        othIndex = othLength;
                        while (--othIndex) {
                            var cache = caches[othIndex];
                            if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                        }
                        if (seen) seen.push(computed);
                        result.push(value);
                    }
                }
                return result;
            }
            module.exports = baseIntersection;
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
        "../shared/browser/node_modules/lodash/_baseRest.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var identity = __webpack_require__("../shared/browser/node_modules/lodash/identity.js"), overRest = __webpack_require__("../shared/browser/node_modules/lodash/_overRest.js"), setToString = __webpack_require__("../shared/browser/node_modules/lodash/_setToString.js");
            function baseRest(func, start) {
                return setToString(overRest(func, start, identity), func + "");
            }
            module.exports = baseRest;
        },
        "../shared/browser/node_modules/lodash/_baseUnary.js": module => {
            function baseUnary(func) {
                return function(value) {
                    return func(value);
                };
            }
            module.exports = baseUnary;
        },
        "../shared/browser/node_modules/lodash/_cacheHas.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var baseIndexOf = __webpack_require__("../shared/browser/node_modules/lodash/_baseIndexOf.js");
            function arrayIncludes(array, value) {
                var length = null == array ? 0 : array.length;
                return !!length && baseIndexOf(array, value, 0) > -1;
            }
            module.exports = arrayIncludes;
        },
        "../shared/browser/node_modules/lodash/_castArrayLikeObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var isArrayLikeObject = __webpack_require__("../shared/browser/node_modules/lodash/isArrayLikeObject.js");
            function castArrayLikeObject(value) {
                return isArrayLikeObject(value) ? value : [];
            }
            module.exports = castArrayLikeObject;
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
        "../shared/browser/node_modules/lodash/_getPrototype.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var overArg = __webpack_require__("../shared/browser/node_modules/lodash/_overArg.js");
            var getPrototype = overArg(Object.getPrototypeOf, Object);
            module.exports = getPrototype;
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
        "../shared/browser/node_modules/lodash/_memoizeCapped.js": module => {
            function identity(value) {
                return value;
            }
            module.exports = identity;
        },
        "../shared/browser/node_modules/lodash/_overArg.js": module => {
            function overArg(func, transform) {
                return function(arg) {
                    return func(transform(arg));
                };
            }
            module.exports = overArg;
        },
        "../shared/browser/node_modules/lodash/_overRest.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var apply = __webpack_require__("../shared/browser/node_modules/lodash/_apply.js");
            var nativeMax = Math.max;
            function overRest(func, start, transform) {
                start = nativeMax(void 0 === start ? func.length - 1 : start, 0);
                return function() {
                    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                    while (++index < length) array[index] = args[start + index];
                    index = -1;
                    var otherArgs = Array(start + 1);
                    while (++index < start) otherArgs[index] = args[index];
                    otherArgs[start] = transform(array);
                    return apply(func, this, otherArgs);
                };
            }
            module.exports = overRest;
        },
        "../shared/browser/node_modules/lodash/_setToString.js": module => {
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
        "../shared/browser/node_modules/lodash/eq.js": module => {
            function eq(value, other) {
                return value === other || value !== value && other !== other;
            }
            module.exports = eq;
        },
        "../shared/browser/node_modules/lodash/get.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var baseGet = __webpack_require__("../shared/browser/node_modules/lodash/_baseGet.js");
            function get(object, path, defaultValue) {
                var result = null == object ? void 0 : baseGet(object, path);
                return void 0 === result ? defaultValue : result;
            }
            module.exports = get;
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
        "../shared/browser/node_modules/lodash/intersectionBy.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var arrayMap = __webpack_require__("../shared/browser/node_modules/lodash/_arrayMap.js"), baseIntersection = __webpack_require__("../shared/browser/node_modules/lodash/_baseIntersection.js"), baseIteratee = __webpack_require__("../shared/browser/node_modules/lodash/_baseIteratee.js"), baseRest = __webpack_require__("../shared/browser/node_modules/lodash/_baseRest.js"), castArrayLikeObject = __webpack_require__("../shared/browser/node_modules/lodash/_castArrayLikeObject.js"), last = __webpack_require__("../shared/browser/node_modules/lodash/last.js");
            var intersectionBy = baseRest((function(arrays) {
                var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                if (iteratee === last(mapped)) iteratee = void 0; else mapped.pop();
                return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, baseIteratee(iteratee, 2)) : [];
            }));
            module.exports = intersectionBy;
        },
        "../shared/browser/node_modules/lodash/isArguments.js": module => {
            function stubFalse() {
                return false;
            }
            module.exports = stubFalse;
        },
        "../shared/browser/node_modules/lodash/isArray.js": module => {
            var isArray = Array.isArray;
            module.exports = isArray;
        },
        "../shared/browser/node_modules/lodash/isArrayLike.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var isFunction = __webpack_require__("../shared/browser/node_modules/lodash/isFunction.js"), isLength = __webpack_require__("../shared/browser/node_modules/lodash/isLength.js");
            function isArrayLike(value) {
                return null != value && isLength(value.length) && !isFunction(value);
            }
            module.exports = isArrayLike;
        },
        "../shared/browser/node_modules/lodash/isArrayLikeObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var isArrayLike = __webpack_require__("../shared/browser/node_modules/lodash/isArrayLike.js"), isObjectLike = __webpack_require__("../shared/browser/node_modules/lodash/isObjectLike.js");
            function isArrayLikeObject(value) {
                return isObjectLike(value) && isArrayLike(value);
            }
            module.exports = isArrayLikeObject;
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
        "../shared/browser/node_modules/lodash/isSymbol.js": module => {
            function stubFalse() {
                return false;
            }
            module.exports = stubFalse;
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
        "../shared/browser/node_modules/lodash/last.js": module => {
            function last(array) {
                var length = null == array ? 0 : array.length;
                return length ? array[length - 1] : void 0;
            }
            module.exports = last;
        },
        "../shared/browser/node_modules/lodash/property.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var baseProperty = __webpack_require__("../shared/browser/node_modules/lodash/_baseProperty.js"), basePropertyDeep = __webpack_require__("../shared/browser/node_modules/lodash/_basePropertyDeep.js"), isKey = __webpack_require__("../shared/browser/node_modules/lodash/_isKey.js"), toKey = __webpack_require__("../shared/browser/node_modules/lodash/_toKey.js");
            function property(path) {
                return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
            }
            module.exports = property;
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
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var sign_in_namespaceObject = {};
        __webpack_require__.r(sign_in_namespaceObject);
        __webpack_require__.d(sign_in_namespaceObject, {
            reportClickThirdPartLogin: () => reportClickThirdPartLogin,
            reportLoginSuccess: () => reportLoginSuccess,
            reportSignInPageLeave: () => reportSignInPageLeave,
            reportSignInPageView: () => reportSignInPageView,
            reportSubmitLogin: () => reportSubmitLogin,
            reportToForgetPassword: () => reportToForgetPassword,
            reportToSignUp: () => reportToSignUp,
            riskReportSignIn: () => riskReportSignIn,
            thirdReportSignInCallback: () => thirdReportSignInCallback
        });
        var sign_up_namespaceObject = {};
        __webpack_require__.r(sign_up_namespaceObject);
        __webpack_require__.d(sign_up_namespaceObject, {
            reportCheckAgreement: () => reportCheckAgreement,
            reportCheckSubscriptionBox: () => reportCheckSubscriptionBox,
            reportClickPrivacyPolicy: () => reportClickPrivacyPolicy,
            reportClickTermsService: () => reportClickTermsService,
            reportRegisterToLogin: () => reportRegisterToLogin,
            reportSignUpPageView: () => reportSignUpPageView,
            reportSignUpSuccess: () => reportSignUpSuccess,
            thirdReportSignUpSuccess: () => thirdReportSignUpSuccess
        });
        var login_modal_namespaceObject = {};
        __webpack_require__.r(login_modal_namespaceObject);
        __webpack_require__.d(login_modal_namespaceObject, {
            reportCheckAgreement: () => login_modal_reportCheckAgreement,
            reportCheckSubscriptionBox: () => login_modal_reportCheckSubscriptionBox,
            reportClickPrivacyPolicy: () => login_modal_reportClickPrivacyPolicy,
            reportClickTermsService: () => login_modal_reportClickTermsService,
            reportClickThirdPartLogin: () => login_modal_reportClickThirdPartLogin,
            reportLoginSuccess: () => login_modal_reportLoginSuccess,
            reportPageView: () => reportPageView,
            reportSignUpSuccess: () => login_modal_reportSignUpSuccess,
            reportToForgetPassword: () => login_modal_reportToForgetPassword
        });
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
        const request_udbRequest = {
            get(url, options = {}) {
                return utils_request({
                    method: "GET",
                    baseURL: "/leproxy",
                    url,
                    ...options
                });
            }
        };
        const request_request = utils_request;
        const getMemberInitConfig = params => request_udbRequest.get("/udb/reg/registermix/init.do", {
            params
        });
        const checkAccount = params => request_udbRequest.get("/udb/reg/register/checkacct.do", {
            params
        });
        const sendSignUpVerificationCode = params => request_udbRequest.get("/udb/reg/register/sendverifycode.do", {
            params
        });
        const signUpMember = params => request_udbRequest.get("/udb/reg/registermix/regcore.do", {
            params
        });
        const signUpUpdate = data => request_request.post("/user/front/users/save", data);
        function getPolicyPageContent(params) {
            return request_request.get(`/merchant/render/page/${params.pageType}/${params.id}`);
        }
        const getLoginInitConfig = params => request_udbRequest.get("/udb/lgn/login/init.do", {
            params
        });
        const updateUserInfo = () => request_request.put("/carts/cart/cart-buyer-update");
        const setSubscriptionStateNoLogin = data => request_request.post("/user/front/sub/stateNoLogin", data);
        const getRetrieveInitConfig = params => request_udbRequest.get("/udb/aq/pwd/retrieve/init.do", {
            params
        });
        const getDeleteAccountInitConfig = params => request_udbRequest.get("/udb/aq/user/destroy/init.do", {
            params
        });
        const HOME = "/";
        const USER_CENTER = "/user/center";
        const SIGN_IN = "/user/signIn";
        "undefined" === typeof window || window.location.origin;
        var url = __webpack_require__("../shared/browser/biz-com/customer/utils/url.js");
        function getEnv(key) {
            const ENV = window.__ENV__ || {};
            if (key) return ENV[key];
            return ENV;
        }
        const IS_PROD = [ "preview", "product" ].includes(getEnv().APP_ENV || "");
        const THIRD_DEFAULT_REGION = "CN";
        const DEFAULT_LANGUAGE = "en";
        const UDB_PARAMS = {
            type: "member",
            appid: IS_PROD ? "1165600903" : "1163336839",
            subappid: "5",
            mode: "username"
        };
        const DEFAULT_PHONE_ISO2 = "cn";
        const DEFAULT_PHONE_CODE = "cn+86";
        const DEFAULT_FORM_VALUE = "DEFAULT_FORM_VALUE";
        function getLanguage() {
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
        const getRedirectOriginUrl = () => {
            const redirectUrl = getRedirectUrl();
            if (!redirectUrl) return window.location.origin;
            return /^\//.test(redirectUrl) ? `${window.location.origin}${redirectUrl}` : redirectUrl;
        };
        const jumpWithSearchParams = path => {
            window.location.href = `${path}${window.location.search}`;
        };
        const UDB_RESPONSE_LANGUAGE_ERROR_CODES = [ -1, -4, -5, -13, -999, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1020, 1021, 1022, 1023, 1024, 2001, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2016, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3014, 3019, 2014 ];
        const MOBILE_REGISTERED = "2001";
        const EMAIL_REGISTERED = "2002";
        var isPlainObject = __webpack_require__("../shared/browser/node_modules/lodash/isPlainObject.js");
        var isPlainObject_default = __webpack_require__.n(isPlainObject);
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
                    if (isPlainObject_default()(value) || value instanceof Array) value = JSON.stringify(value);
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
        const storage = utils;
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
            const regExp = new RegExp(/\{\{([^{}]+)\}\}/g);
            return nullishCoalescingOperator(get_func(value, "replace").exec(regExp, ((...args) => nullishCoalescingOperator(syntax_patch_get(hash, args[1]), args[0]))), path);
        }
        const EMAIL_PATTERN = /^([\w-.+]+)@([\w-.]+)\.([\w-.]+)$/;
        const MEMBER_PASSWORD_PATTERN = /^.{6,18}$/i;
        const PHONE_PATTERN = {
            "+86": /^1[3-9]\d{9}$/,
            "+886": /^09\d{8}$/,
            "+852": /^(5[1234569]\d{6}|6\d{7}|9[0-8]\d{6})$/
        };
        const pattern_CODE_PHONE_PATTERN = /^(\w+(\+\d+))-(.*)$/;
        const INTERNATIONAL_PHONE_PATTERN = /^(00|\+)[1-9]{1}([0-9]){9,16}$/;
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
        const formFields = {
            email(config = {}) {
                return {
                    name: "email",
                    type: "email",
                    value: "",
                    rules: [ {
                        message: t("user.emailEmptyError"),
                        required: true
                    }, {
                        message: t("user.emailError"),
                        validator: value => emailValidator(value)
                    } ],
                    ...config
                };
            },
            phone(config = {}) {
                return {
                    name: "phone",
                    type: "phone",
                    value: "",
                    dependencies: [ "iso2" ],
                    rules: [ {
                        message: t("user.phoneEmptyError"),
                        required: true
                    } ],
                    ...config
                };
            },
            username(config = {}) {
                return {
                    name: "username",
                    type: "username",
                    value: "",
                    dependencies: [ "iso2" ],
                    rules: [ {
                        message: t("user.usernameEmptyError"),
                        required: true
                    } ],
                    ...config
                };
            },
            password() {
                return {
                    name: "password",
                    type: "password",
                    value: "",
                    rules: [ {
                        message: t("user.passwordEmptyError"),
                        required: true
                    }, {
                        message: t("user.passwordMemberError"),
                        pattern: MEMBER_PASSWORD_PATTERN
                    } ]
                };
            },
            loginPassword() {
                return {
                    name: "password",
                    type: "password",
                    value: "",
                    rules: [ {
                        message: t("user.passwordEmptyError"),
                        required: true
                    } ]
                };
            },
            repeatPassword() {
                return {
                    name: "repeatPassword",
                    type: "password",
                    value: "",
                    rules: [ {
                        message: t("user.repeatPasswordEmptyError"),
                        required: true
                    }, {
                        message: t("user.passwordMemberError"),
                        pattern: MEMBER_PASSWORD_PATTERN
                    }, {
                        validator: (v, record) => {
                            if (!MEMBER_PASSWORD_PATTERN.test(v)) return true;
                            return record.password === record.repeatPassword;
                        },
                        message: t("user.repeatPasswordError")
                    } ]
                };
            },
            verifycode(configs = {}) {
                return {
                    name: "verifycode",
                    type: "verifycode",
                    value: "",
                    rules: [ {
                        message: t("user.codeError"),
                        required: true
                    } ],
                    ...configs
                };
            }
        };
        const getAccountFieldType = type => {
            const typeToFormFieldType = {
                member: "username",
                mobile: "phone"
            };
            return typeToFormFieldType[type] || type;
        };
        const getFormFieldsHelper = (types = []) => types.filter((type => !!type)).map((item => {
            if ("string" === typeof item) return formFields[item] && formFields[item]();
            const {type, ...args} = item;
            return formFields[type](args);
        }));
        const getFormFields = getFormFieldsHelper;
        var eventemitter3 = __webpack_require__("../shared/browser/node_modules/eventemitter3/index.js");
        var eventemitter3_default = __webpack_require__.n(eventemitter3);
        if (!window.SL_EventBus) {
            window.SL_EventBus = new (eventemitter3_default());
            window.SL_EventEmitter = eventemitter3_default();
        }
        const {SL_EventBus} = window;
        const {SL_EventEmitter} = window;
        window.SL_EventBus, window.SL_EventEmitter;
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
                            return usernameValidator(val).catch((err => Promise.reject(t(err))));
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
                        validator: () => phoneNumberValidator(this.value).catch((err => Promise.reject(t(err))))
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
        const getUdbResponseLanguageErrorKey = rescode => {
            if (UDB_RESPONSE_LANGUAGE_ERROR_CODES.indexOf(Number(rescode)) > -1) return `user.udbResponse.err${rescode}`;
            return;
        };
        function getUdbErrorMessage(res) {
            const errorKey = getUdbResponseLanguageErrorKey(res.rescode);
            return errorKey ? t(errorKey) : res.message;
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
                    this.$send.text(`${t("user.resend")}(${this.countDown})`);
                    this.countDown -= 1;
                    this.countDownTimeout = window.setTimeout((() => {
                        this.setCountDown();
                    }), 1e3);
                } else this.clearCountDown();
            }
            clearCountDown() {
                this.$send.removeAttr("disabled");
                this.$send.text(t("user.send"));
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
                            content: t("customer.network-err-msg")
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
        var intersectionBy = __webpack_require__("../shared/browser/node_modules/lodash/intersectionBy.js");
        var intersectionBy_default = __webpack_require__.n(intersectionBy);
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
        const {SL_State: state_selector_SL_State} = window;
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
        function isInvalid(param) {
            return !param || "string" !== typeof param;
        }
        function isJqueryInstance(dom) {
            return dom && dom instanceof $ && dom.length > 0;
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
                this.$win = $(window);
                this.$doc = $(document);
                this.$portals = portals ? $(portals) : null;
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
                this.$portals = portals ? $(portals) : null;
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
        let uuid = 0;
        class ModalWithHtml extends EventManager {
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
                const modalHtml = `\n      <div id="${this.modalId}" class="${common_bem("wrapper")}">\n        <div class="${common_bem("mask")}"></div>\n        <div class="${common_bem("container")}">\n          ${closable ? `<span class="${common_bem("close")}">\n            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M19.1998 4.80005L4.7998 19.2" stroke="currentColor" stroke-width="2"/>\n              <path d="M4.7998 4.79995L19.1998 19.2" stroke="currentColor" stroke-width="2"/>\n            </svg>          \n          </span>` : ""}\n          <div class="${common_bem("body")} ${bodyClassName}">\n            ${content}\n          </div>\n        </div>\n      </div>\n    `;
                const $modal = $(modalHtml);
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
        const getModal = (content, title) => `\n    <div class="sign-up__modal-header">\n      <div class="sign-up__modal-title">${title}</div>\n    </div>\n    <div class="sign-up__modal-body">\n      <div class="sign-up__modal-content">\n        ${content}\n      </div>\n    </div>\n  `;
        const privacyPolicyPath = "/policies/privacy-policy";
        const termsOfService = "/policies/terms-of-service";
        const userPolicyPagesKey = [ {
            customizePath: privacyPolicyPath
        }, {
            customizePath: termsOfService
        } ];
        const policyPagesNameMap = {
            [privacyPolicyPath]: "trade.policy.privacy-policy",
            [termsOfService]: "trade.service-terms"
        };
        class Policy {
            constructor({formId, $policy, form, $$reports}) {
                this.form = form;
                this.formId = formId;
                this.$policy = $policy;
                this.modal = null;
                this.$$reports = $$reports;
                this.showSubscription = false;
                this.checkedSubscriptionEmail = false;
                this.policyPagesContent = {};
                const policyList = window && window.SL_State && window.SL_State.get("policyList");
                this.userPolicyPages = intersectionBy_default()(policyList, userPolicyPagesKey, "customizePath");
                if (this.userPolicyPages.length > 0) this.init();
            }
            init() {
                this.modal = new ModalWithHtml({
                    modalId: `${this.formId}-modal`,
                    containerClassName: "register-modal__container",
                    bodyClassName: "register-modal__body"
                });
                this.modal.init();
                this.getPolicyListContent();
                this.bindCustomerPolicy();
            }
            getPolicyListContent() {
                const {userPolicyPages} = this;
                if (!userPolicyPages || userPolicyPages.length < 1) return;
                const requests = userPolicyPages.map((({id}) => getPolicyPageContent({
                    pageType: 4,
                    id
                })));
                Promise.all(requests).then((res => {
                    this.policyPagesContent = res.reduce(((sum, item) => {
                        sum[item && item.data && item.data.id] = item && item.data && item.data.config && item.data.config.text || "";
                        return sum;
                    }), {});
                }));
            }
            onCheckAgreement(value) {
                if (value) this.$$reports.reportCheckAgreement && this.$$reports.reportCheckAgreement();
            }
            clickPolicyReport(path) {
                if (path === privacyPolicyPath) this.$$reports.reportClickPrivacyPolicy && this.$$reports.reportClickPrivacyPolicy(); else this.$$reports.reportClickTermsService && this.$$reports.reportClickTermsService();
            }
            bindCustomerPolicy() {
                this.$policy.on("click", ".sign-up__link", (e => {
                    e.stopPropagation();
                    e.preventDefault();
                    const path = $(e.currentTarget).data("path");
                    this.clickPolicyReport(path);
                    const policy = this.userPolicyPages.find((item => item.customizePath === path));
                    this.modal.setContent(getModal(this.policyPagesContent[policy.id] || "", t(policyPagesNameMap[policy.customizePath])));
                    this.modal.show();
                }));
            }
            checkAgreePolicy({policy}) {
                if (this.userPolicyPages.length > 0 && !policy) return false;
                return true;
            }
        }
        const policy = Policy;
        class Subscribe {
            constructor({formId, $subscribe, $$reports}) {
                this.formId = formId;
                this.$subscribe = $subscribe;
                this.$$reports = $$reports;
                this.showSubscription = true;
                this.checkedSubscriptionEmail = true;
            }
            toggleSubscriptionCheckbox(status) {
                if (this.showSubscription === status) return;
                this.showSubscription = status;
                status ? this.$subscribe.show() : this.$subscribe.hide();
            }
            setSubscriptionEmail(status) {
                if (status) this.$$reports && this.$$reports.reportCheckSubscriptionBox && this.$$reports.reportCheckSubscriptionBox();
                this.checkedSubscriptionEmail = status;
            }
            onSubscribeEmail(account) {
                if (!this.showSubscription || !this.checkedSubscriptionEmail) return;
                setSubscriptionStateNoLogin({
                    subscribeChannel: "register",
                    subscribeAccountType: "email",
                    subscribeAccount: account,
                    state: 1
                });
            }
        }
        const subscribe = Subscribe;
        var js_cookie = __webpack_require__("../shared/browser/node_modules/js-cookie/src/js.cookie.js");
        var js_cookie_default = __webpack_require__.n(js_cookie);
        function init() {
            const {checkTag, subAppid, types} = window && window.SL_State && window.SL_State.get("shop.store_register_config") || {};
            const {countryCode} = window && window.SL_State && window.SL_State.get("customer_address.countryCode") || {};
            const code = countryCode || THIRD_DEFAULT_REGION;
            js_cookie_default().set("country_code", code);
            if (!types) {
                window.location.href = HOME;
                return;
            }
            const params = {
                ...UDB_PARAMS,
                subappid: subAppid,
                code
            };
            if (checkTag) params.verify = "1";
            const hasEmail = types.includes("email");
            const hasPhone = types.includes("mobile");
            if (!hasEmail) params.mode = "phone"; else if (!hasPhone) params.mode = "email";
            return {
                ...params
            };
        }
        const common_getMethodList = params => request_udbRequest.get("/udb/aq/uni/getMethodList.do", {
            params
        });
        const passVerify = params => request_udbRequest.get("/udb/aq/uni/pass.do", {
            params
        });
        const getBindEmailInitConfig = params => request_udbRequest.get("/udb/aq/email/bind/init.do", {
            params
        });
        const getBindPhoneInitConfig = params => request_udbRequest.get("/udb/aq/mobile/bind/init.do", {
            params
        });
        const reset_getChangePasswordInitConfig = params => request_udbRequest.get("/udb/aq/pwd/change/init.do", {
            params
        });
        const loadScript = url => {
            if (loadScript.instance && loadScript.instance[url]) return loadScript.instance[url];
            const scriptRequest = new Promise(((resolve, reject) => {
                const scriptElement = document.createElement("script");
                scriptElement.src = url;
                scriptElement.type = "text/javascript";
                scriptElement.async = true;
                scriptElement.crossOrigin = "anonymous";
                scriptElement.onload = () => resolve();
                scriptElement.onerror = err => {
                    if (loadScript.instance && loadScript.instance[url]) delete loadScript.instance[url];
                    reject(err);
                };
                document.body.appendChild(scriptElement);
            }));
            if (!loadScript.instance) loadScript.instance = {
                [url]: scriptRequest
            }; else loadScript.instance[url] = scriptRequest;
            return scriptRequest;
        };
        loadScript.instance = {};
        const DF_ENV = {
            develop: "dev",
            staging: "test",
            preview: "pre",
            product: "pro"
        };
        const config = {
            DF_SDK_URL_OSS: "https://r2cdn.myshopline.cn/static/rs/adff/prod/latest/bundle.iife.js",
            DF_SDK_URL_S3: "https://r2cdn.myshopline.com/static/rs/adff/prod/latest/bundle.iife.js",
            IS_MAINLAND: false,
            APP_ENV: getEnv().APP_ENV || "product",
            DF_APP_CODE: "m3tdgo"
        };
        const RISK_CONTROL_URL = config.IS_MAINLAND ? config.DF_SDK_URL_OSS : config.DF_SDK_URL_S3;
        let dfInstance = null;
        const loadRiskControl = () => {
            if (dfInstance) return Promise.resolve(dfInstance);
            return loadScript(RISK_CONTROL_URL).then((() => {
                dfInstance = window.DeviceFingerprint && window.DeviceFingerprint({
                    env: DF_ENV[config.APP_ENV || "prd"],
                    appCode: config.DF_APP_CODE
                });
                return dfInstance;
            }));
        };
        const getRiskControlToken = () => loadRiskControl().then((df => df && df.getToken()));
        const getCookie = key => window && window.SL_State && window.SL_State.get(`request.cookie.${key}`);
        const extLangRequestBody = data => ({
            ...data || {},
            lang: getLanguage()
        });
        const getUniversalInitConfig = init => async params => {
            const {stoken, data} = await init(params);
            const {data: {methods}, stoken: newStoken} = await common_getMethodList(extLangRequestBody({
                appid: params.appid,
                stoken,
                servcode: data.servcode
            }));
            const {method, mobileMask, emailMask} = methods && methods[0] || {};
            let oauth;
            if ("pass" === method) {
                const {data: {oauthToken}} = await passVerify(extLangRequestBody({
                    appid: params.appid,
                    stoken: newStoken
                }));
                oauth = oauthToken;
            }
            return {
                stoken: newStoken || stoken,
                _method: method,
                _mask: mobileMask || emailMask,
                oauthToken: oauth,
                scene: data.scene
            };
        };
        const getUdbInfo = ({params, formType, FBPixelEventID = ""}) => {
            const {type, appid, subappid, mode, verify, token} = params;
            const uid = getCookie("osudb_uid");
            let loginType = "email";
            let isverify;
            let getInitConfig = null;
            let ticketType;
            let eventid = "";
            if ("signIn" === formType) {
                getInitConfig = getLoginInitConfig;
                loginType = "email";
                eventid = FBPixelEventID;
                if ("member" === type && "email" !== mode) loginType = "acct";
            } else if ("signUp" === formType) {
                if ("member" === type) {
                    getInitConfig = getMemberInitConfig;
                    isverify = verify ? "1" : "0";
                }
                eventid = FBPixelEventID;
            } else if ("reset" === formType) if (uid) {
                getInitConfig = getUniversalInitConfig(reset_getChangePasswordInitConfig);
                ticketType = "1";
            } else getInitConfig = () => Promise.resolve(); else if ("bind" === formType && "member" === type) {
                if ("email" === mode) getInitConfig = getUniversalInitConfig(getBindEmailInitConfig); else if ("phone" === mode) getInitConfig = getUniversalInitConfig(getBindPhoneInitConfig);
                ticketType = "1";
            } else if ("passwordNew" === formType) getInitConfig = getRetrieveInitConfig; else if ("delete-account" === formType) {
                getInitConfig = getUniversalInitConfig(getDeleteAccountInitConfig);
                ticketType = "1";
            } else getInitConfig = () => Promise.resolve();
            const init = dfptoken => getInitConfig && getInitConfig({
                appid,
                subappid,
                callback: "js",
                type: loginType,
                isverify,
                token,
                uid,
                ticketType,
                lang: params.language || "en",
                eventid,
                dfptoken
            }).then((res => {
                const {stoken, data, _mask, _method, oauthToken, scene} = res || {};
                return {
                    appid,
                    subappid,
                    stoken,
                    servcode: data && data.servcode,
                    _mask,
                    _method,
                    oauthToken,
                    scene
                };
            }));
            if ([ "signIn", "signUp", "bind", "reset", "passwordNew" ].includes(formType)) {
                const token = window.__DF__ && window.__DF__.getToken();
                if (token) return init(token);
                return getRiskControlToken().then((dfptoken => init(dfptoken))).catch((() => init()));
            }
            return init();
        };
        var node_modules_uuid = __webpack_require__("../shared/browser/node_modules/uuid/index.js");
        function getEventID() {
            return `${Date.now()}_${(0, node_modules_uuid.v4)().replace(/-/g, "")}`;
        }
        const userHdReport = () => {
            const isSignIn = "/user/signIn" === window.location.pathname;
            const isSignUp = "/user/signUp" === window.location.pathname;
            const isCenter = "/user/center" === window.location.pathname;
            const isMessage = "/user/message" === window.location.pathname;
            const isOrders = "/user/orders" === window.location.pathname;
            const isRefunds = "/user/refunds" === window.location.pathname;
            if (isSignIn || isSignUp) window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
                iframe_id: 1,
                page: "user_page",
                event_name: "view"
            });
            if (isSignIn) window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
                event_name: "component_view",
                custom_component: [ "sign_in_tab" ]
            });
            if (isSignUp) window.HdSdk && window.HdSdk.shopTracker.report(60079992, {
                event_name: "component_view",
                custom_component: [ "sign_up_tab" ]
            });
            if (isCenter) {
                window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
                    iframe_id: 1,
                    page: "consumer_home",
                    event_name: "view"
                });
                window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
                    event_name: "component_view",
                    custom_component: [ "consumer_info" ]
                });
            }
            if (isMessage) window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
                event_name: "component_view",
                custom_component: [ "message" ]
            });
            if (isOrders) window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
                event_name: "component_view",
                custom_component: [ "order" ]
            });
            if (isRefunds) window.HdSdk && window.HdSdk.shopTracker.report(60079999, {
                event_name: "component_view",
                custom_component: [ "return_order" ]
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
        class BaseCustomer {
            constructor({id, formType}) {
                this.formId = id;
                this.formType = formType;
                this.query = (0, url.getUrlAllQuery)();
                this.eid = getEventID();
                this.pvEventId = window.SL_State.get("serverEventId") || getEventID();
                userHdReport();
                reportThirdPartPageView();
            }
            report(eventid, params) {
                window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
            }
            setError(res) {
                const value = getUdbResponseLanguageErrorKey(res && res.rescode) || res && res.resmsg;
                $(`#${this.formId} .customer__error`).text(t(value)).show();
            }
            clearError() {
                $(`#${this.formId} .customer__error`).text("").hide();
            }
            formatRequestBody(data) {
                return {
                    ...data || {},
                    lang: getLanguage()
                };
            }
            formatterMask(params) {
                return `${params._method && params._method.includes("sms") ? "+" : ""}${params._mask}`;
            }
            updateToken(params, newParams) {
                Object.keys(newParams).forEach((k => {
                    const v = newParams[k];
                    if (v) params[k] = v;
                }));
            }
        }
        const base = BaseCustomer;
        var dayjs_min = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        const report = (eventid, params) => {
            window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
        };
        const reportV2 = collect => {
            window.HdSdk && window.HdSdk.shopTracker.collect(collect);
        };
        const thirdPartReport = params => {
            window.SL_EventBus.emit("global:thirdPartReport", params);
        };
        const loginModalPageIdMap = {
            Home: 101,
            Products: 103,
            ProductsDetail: 105,
            ProductsSearch: 102,
            Center: 123,
            Cart: 106,
            NotFound: 130,
            Custom: 118
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
        const LOGIN_CID = "60079992";
        const reportV1SignIn = config => report(LOGIN_CID, config);
        const reportSignIn = config => reportV2({
            page: pageMap.SignIn,
            ...config
        });
        const reportSubmitLogin = () => {
            reportSignIn({
                module: Module.normal,
                component: 127,
                action_type: ActionType.click,
                event_id: 1033
            });
        };
        const reportToForgetPassword = () => {
            reportSignIn({
                module: Module.normal,
                component: 125,
                action_type: ActionType.click,
                event_id: 1031
            });
        };
        const reportToSignUp = () => {
            reportSignIn({
                module: Module.normal,
                component: 126,
                action_type: ActionType.click,
                event_id: 1032
            });
        };
        const reportLoginSuccess = () => {
            reportSignIn({
                module: Module.normal,
                component: -999,
                action_type: ActionType.login,
                event_id: 1402
            });
        };
        const loginTypeToThirdPartReportConfig = {
            line: {
                component: 105,
                event_id: 1407
            },
            facebook: {
                component: 104,
                event_id: 1406
            },
            google: {
                component: 103,
                event_id: 1405
            }
        };
        const reportClickThirdPartLogin = loginType => {
            const reportConfig = loginTypeToThirdPartReportConfig[loginType];
            if (reportConfig) reportSignIn({
                module: Module.normal,
                action_type: ActionType.click,
                ...reportConfig
            });
        };
        const thirdReportSignInCallback = method => {
            thirdPartReport({
                GA: [ [ "event", "login", {
                    method
                } ] ],
                GA4: [ [ "event", "login", {
                    method
                } ] ]
            });
        };
        const riskReportSignIn = (isFirst = 1) => {
            const loginSuccessReportdata = {
                dimension: 0,
                subAppid: window && window.SL_State && window.SL_State.get("request.cookie.osudb_subappid"),
                termType: 0,
                uidIdentity: "shopline",
                loginTime: dayjs_min_default()(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                loginResult: 1,
                isFirst
            };
            reportV1SignIn({
                event_name: "login_success",
                ...loginSuccessReportdata
            });
        };
        const reportSignInPageView = () => {
            reportV1SignIn({
                event_name: "component_view",
                custom_component: [ "sign_in_105" ]
            });
        };
        const reportSignInPageLeave = page_dest => {
            reportV1SignIn({
                event_name: "leave",
                page_dest
            });
        };
        const reportV1SignUp = config => report(LOGIN_CID, config);
        const reportSignUp = config => reportV2({
            page: pageMap.SignUp,
            ...config
        });
        const reportRegisterToLogin = () => {
            reportSignUp({
                module: Module.normal,
                component: 129,
                action_type: ActionType.click,
                event_id: 1037
            });
        };
        const reportSignUpSuccess = () => {
            reportSignUp({
                module: Module.normal,
                component: -999,
                action_type: ActionType.register,
                event_id: 1394
            });
        };
        const reportCheckAgreement = () => {
            reportSignUp({
                module: Module.normal,
                component: 128,
                action_type: ActionType.check,
                event_id: 1036
            });
        };
        const reportClickPrivacyPolicy = () => {
            reportSignUp({
                module: Module.normal,
                component: 131,
                action_type: ActionType.click,
                event_id: 1039
            });
        };
        const reportClickTermsService = () => {
            reportSignUp({
                module: Module.normal,
                component: 132,
                action_type: ActionType.click,
                event_id: 1040
            });
        };
        const reportCheckSubscriptionBox = () => {
            reportSignUp({
                module: Module.normal,
                component: 102,
                action_type: ActionType.check,
                event_id: 1396
            });
        };
        const thirdReportSignUpSuccess = (eid, method) => {
            const userId = window && window.SL_State && window.SL_State.get("request.cookie.osudb_uid");
            thirdPartReport({
                FBPixel: [ [ "track", "CompleteRegistration", {
                    content_name: userId
                }, {
                    eventID: `completeRegistration${eid}`
                } ] ],
                GAAds: [ [ "event", "conversion", null ] ],
                GA: [ [ "event", "sign_up", {
                    method
                } ] ],
                GA4: [ [ "event", "sign_up", {
                    method
                } ] ]
            });
        };
        const reportSignUpPageView = () => {
            reportV1SignUp({
                event_name: "component_view",
                custom_component: [ "sign_up" ]
            });
        };
        const reportLoginModal = config => reportV2({
            page: pageMap.LoginModal,
            ...config
        });
        const reportPageView = () => {
            const alias = window.SL_State.get("templateAlias");
            if (loginModalPageIdMap[alias]) reportV2({
                page: loginModalPageIdMap[alias],
                module: Module.normal,
                component: -999,
                action_type: ActionType.view,
                event_id: 1415
            });
        };
        const login_modal_reportSignUpSuccess = () => {
            reportLoginModal({
                module: Module.loginModal.register,
                component: -999,
                action_type: ActionType.register,
                event_id: 1416
            });
        };
        const login_modal_reportCheckAgreement = () => {
            reportLoginModal({
                module: Module.loginModal.register,
                component: 101,
                action_type: ActionType.check,
                event_id: 1417
            });
        };
        const login_modal_reportCheckSubscriptionBox = () => {
            reportLoginModal({
                module: Module.loginModal.register,
                component: 102,
                action_type: ActionType.check,
                event_id: 1418
            });
        };
        const login_modal_reportClickPrivacyPolicy = () => {
            reportLoginModal({
                module: Module.loginModal.register,
                component: 103,
                action_type: ActionType.click,
                event_id: 1419
            });
        };
        const login_modal_reportClickTermsService = () => {
            reportLoginModal({
                module: Module.loginModal.register,
                component: 104,
                action_type: ActionType.click,
                event_id: 1420
            });
        };
        const login_modal_reportLoginSuccess = () => {
            reportLoginModal({
                module: Module.loginModal.login,
                component: -999,
                action_type: ActionType.login,
                event_id: 1421
            });
        };
        const login_modal_reportToForgetPassword = () => {
            reportLoginModal({
                module: Module.loginModal.login,
                component: 105,
                action_type: ActionType.click,
                event_id: 1422
            });
        };
        const login_modal_loginTypeToThirdPartReportConfig = {
            line: {
                component: 108,
                event_id: 1425
            },
            facebook: {
                component: 107,
                event_id: 1424
            },
            google: {
                component: 106,
                event_id: 1423
            }
        };
        const login_modal_reportClickThirdPartLogin = loginType => {
            const reportConfig = login_modal_loginTypeToThirdPartReportConfig[loginType];
            if (reportConfig) reportLoginModal({
                module: Module.loginModal.login,
                action_type: ActionType.click,
                ...reportConfig
            });
        };
        const login_register = isLoginModal => {
            if (isLoginModal) return {
                ...login_modal_namespaceObject
            };
            return {
                ...sign_in_namespaceObject,
                ...sign_up_namespaceObject
            };
        };
        class Customer extends base {
            constructor({id, formType, isModal, success}) {
                super({
                    id,
                    formType
                });
                this.isModal = isModal;
                this.success = success;
                this.$$reports = login_register(isModal);
                this.UDBParams = {};
                this.configs = init();
                setTimeout((() => this.initCustomer()), 0);
            }
            initCustomer() {
                this.beforeCreate && this.beforeCreate();
                this.getCustomerConfig().then((res => {
                    this.UDBParams = res;
                    this.init && this.init();
                }));
            }
            async getCustomerConfig() {
                const {mode} = this.query;
                let queryParams = this.configs;
                if (mode) queryParams = {
                    ...queryParams,
                    mode
                };
                return getUdbInfo({
                    params: queryParams,
                    formType: this.formType,
                    FBPixelEventID: this.pvEventId
                });
            }
        }
        const customer = Customer;
        const captcha_config = {
            SDK_URL_OSS: "r2cdn.myshopline.cn/static/rs/acuf/prod/latest/bundle.iife.js",
            SDK_URL_S3: "https://r2cdn.myshopline.com/static/rs/acuf/prod/latest/bundle.iife.js",
            IS_MAINLAND: false,
            APP_ENV: getEnv().APP_ENV || "product",
            APP_CODE: "m3tdgo"
        };
        const CAPTCHA_CONTROL_URL = captcha_config.IS_MAINLAND ? captcha_config.SDK_URL_OSS : captcha_config.SDK_URL_S3;
        let captchaInstance = null;
        const loadArmorCaptcha = ({wrapId = "content", lang, onSuccess, onFail, onClose}) => {
            if (captchaInstance) return Promise.resolve(captchaInstance);
            return loadScript(CAPTCHA_CONTROL_URL).then((() => {
                const {ArmorCaptcha} = window;
                captchaInstance = new ArmorCaptcha({
                    wrapId,
                    lang,
                    onSuccess,
                    onFail,
                    onClose,
                    origin: window.location.origin,
                    appCode: captcha_config.APP_CODE,
                    captchaScene: "user"
                });
                return captchaInstance;
            }));
        };
        let cacheModal = null;
        let cacheArmorCaptcha = null;
        let lang = null;
        const contentId = `captcha-content`;
        const openCaptchaModal = async ({onSuccess}) => {
            if (cacheModal) {
                cacheModal.show();
                cacheArmorCaptcha && cacheArmorCaptcha.reset();
                if (lang !== getLanguage()) cacheArmorCaptcha.changeLanguage(getLanguage());
                return;
            }
            cacheModal = new ModalWithHtml({
                zIndex: 1e3,
                containerClassName: "captcha-modal-container",
                closable: false,
                maskClosable: true,
                bodyClassName: "captcha-modal-body",
                content: `<div id="${contentId}" class="captcha-content"></div>`,
                destroyedOnClosed: false
            });
            cacheModal.show();
            $(`#${cacheModal.modalId}`).find(".mp-modal__mask").addClass("captcha-transparent");
            $(`#${cacheModal.modalId}`).on("click", ".captcha-modal-container", (e => {
                const $target = $(e.target).parents(".captcha-content");
                if ($target.length < 1) cacheModal.hide();
            }));
            lang = getLanguage();
            cacheArmorCaptcha = await loadArmorCaptcha({
                wrapId: contentId,
                lang,
                onSuccess: token => {
                    cacheModal.hide();
                    onSuccess && onSuccess(token);
                }
            });
        };
        let captchaToken = null;
        const isFunction = fn => "function" === typeof fn;
        const captcha_modal_CAPTCHA_CODE = [ "2019", "2020", "3018", "3021" ];
        const wrapArmorCaptcha = async ({beforeSendCode, onSendCode, onCaptchaVerifySuccess}) => {
            if (!captchaToken) isFunction(beforeSendCode) && await beforeSendCode();
            try {
                isFunction(onSendCode) && await onSendCode(captchaToken);
                captchaToken = null;
            } catch (e) {
                captchaToken = null;
                if (captcha_modal_CAPTCHA_CODE.includes(e.rescode)) {
                    openCaptchaModal({
                        onSuccess: async token => {
                            captchaToken = token;
                            isFunction(onCaptchaVerifySuccess) && await onCaptchaVerifySuccess(token);
                        }
                    });
                    return Promise.reject(false);
                }
                return Promise.reject(e);
            }
        };
        class Register extends customer {
            constructor({id = "register", isModal = false, success = null}) {
                super({
                    id,
                    formType: "signUp",
                    success,
                    isModal
                });
                this.modal = null;
                this.policy = null;
                this.subscribe = null;
                this.registerForm = null;
            }
            init() {
                this.$$reports && this.$$reports.reportSignUpPageView && this.$$reports.reportSignUpPageView();
                this.registerForm = new commons_form({
                    id: this.formId,
                    fields: this.getFieldConfigs(),
                    onSubmit: data => {
                        this.onSubmit(data).catch((e => {
                            this.onError(e);
                        }));
                    }
                });
                this.policy = new policy({
                    formId: this.formId,
                    $policy: $(`#${this.formId} .sign-up__terms`),
                    form: this,
                    $$reports: this.$$reports
                });
                const {mode} = this.configs;
                if ([ "username", "email" ].includes(mode)) this.subscribe = new subscribe({
                    formId: this.formId,
                    $subscribe: $(`#${this.formId} .sign-up__subscription`),
                    $$reports: this.$$reports
                });
                this.bindEvents();
            }
            getFieldConfigs() {
                const {mode, verify} = this.configs;
                const accountFieldType = getAccountFieldType(mode);
                const fieldTypes = [ accountFieldType, "password" ];
                if (verify) fieldTypes.push({
                    type: "verifycode",
                    on: {
                        send: () => this.sendVerifyCode()
                    },
                    watch: [ accountFieldType ]
                });
                return getFormFields(fieldTypes);
            }
            bindEvents() {
                const isPhoneInputMode = value => /^\d+$/.test(value);
                this.registerForm && this.registerForm.formInstance && this.registerForm.formInstance.on("valuesChange", (({changedValue}) => {
                    if (changedValue && changedValue.username) {
                        const isEmailInputMode = changedValue && changedValue.username && !isPhoneInputMode(changedValue && changedValue.username) || changedValue && changedValue.email;
                        this.subscribe.toggleSubscriptionCheckbox(!!isEmailInputMode);
                    }
                    if (changedValue && changedValue.email) this.subscribe.toggleSubscriptionCheckbox(true);
                    if ("undefined" !== typeof (changedValue && changedValue.subscription)) this.subscribe.setSubscriptionEmail(changedValue && changedValue.subscription);
                    if ("undefined" !== typeof (changedValue && changedValue.policy)) this.policy.onCheckAgreement(changedValue && changedValue.policy);
                    this.clearError();
                }));
                $(`#${this.formId} .sign-up__footer-link .sign-up__link`).click((e => {
                    e.preventDefault();
                    this.$$reports.reportRegisterToLogin && this.$$reports.reportRegisterToLogin();
                    const href = $(e.currentTarget).attr("href");
                    window.location.href = href;
                }));
            }
            onSubmit(data) {
                const {mode = "email", verify} = this.configs;
                const checkResult = this.policy.checkAgreePolicy(data);
                if (!checkResult) {
                    super.setError({
                        resmsg: "tips.please-read-and-agree-to-the-user-agreement-first"
                    });
                    return Promise.reject();
                }
                if (data && "undefined" !== typeof data.subscription) this.subscribe && this.subscribe.setSubscriptionEmail(data && data.subscription);
                const params = this.UDBParams;
                const payload = {
                    acct: data.email || data.phone || data.username,
                    passwd: data.password,
                    verifycode: data.verifycode,
                    isverify: verify ? "1" : "0",
                    eventid: this.eid
                };
                const extInfo = {};
                if (window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value) extInfo.memberReferralCode = window && window.SLMemberPlugin && window.SLMemberPlugin.memberReferralCode && window.SLMemberPlugin.memberReferralCode.value;
                if (Object.keys(extInfo).length > 0) payload.extinfo = JSON.stringify(extInfo);
                this.$$reports.reportSignUpSuccess && this.$$reports.reportSignUpSuccess();
                if (verify) return this.onSignUp({
                    payload,
                    params,
                    data,
                    mode
                });
                return checkAccount(super.formatRequestBody({
                    ...params,
                    acct: payload.acct
                })).then((({stoken}) => {
                    super.updateToken(params, {
                        stoken
                    });
                    return this.onSignUp({
                        payload,
                        params,
                        data,
                        mode
                    });
                })).catch((res => {
                    this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
                    return Promise.reject(res);
                }));
            }
            onSignUp({payload, params, data, mode}) {
                return signUpMember(super.formatRequestBody({
                    ...payload,
                    ...params
                })).then((({data: resData}) => {
                    this.onSignUpSuccess(resData && resData.extUIMsg && resData.extUIMsg.ck || {}, data, mode);
                    return resData;
                })).finally((() => {
                    this.subscribe && this.subscribe.onSubscribeEmail && this.subscribe.onSubscribeEmail(payload && payload.acct);
                }));
            }
            onSignUpSuccess(_, data, mode) {
                this.reportSignUp(data, mode);
                const requestBody = {
                    language: getLanguage(),
                    udbFirstLogin: true
                };
                Promise.all([ signUpUpdate(requestBody), updateUserInfo() ]).finally((() => {
                    this.report({
                        event_name: "leave",
                        page_dest: getRedirectOriginUrl()
                    });
                    if (this.success) {
                        this.success();
                        return;
                    }
                    redirectPage(USER_CENTER);
                }));
            }
            async sendVerifyCode() {
                const {mode, verify} = this.configs;
                const {UDBParams} = this;
                if (!mode || !verify) return;
                try {
                    await wrapArmorCaptcha({
                        beforeSendCode: async () => {
                            const formValue = this.registerForm && this.registerForm.getFormValue();
                            const acct = formValue[mode];
                            const {stoken} = await checkAccount(super.formatRequestBody({
                                ...UDBParams,
                                acct
                            }));
                            super.updateToken(UDBParams, {
                                stoken
                            });
                        },
                        onSendCode: async captchaToken => {
                            const formValue = this.registerForm && this.registerForm.getFormValue();
                            const acct = formValue[mode];
                            const {stoken: lastStoken} = await sendSignUpVerificationCode(super.formatRequestBody({
                                acct,
                                ...UDBParams,
                                captcha: captchaToken
                            }));
                            super.updateToken(UDBParams, {
                                stoken: lastStoken
                            });
                        },
                        onCaptchaVerifySuccess: async () => {
                            this.registerForm.formItemInstances.verifycode.triggerSendCode();
                        }
                    });
                } catch (e) {
                    if (!e || this.isModal) return Promise.reject(e);
                    this.onError(e);
                }
            }
            onError(e) {
                const registeredCode = [ MOBILE_REGISTERED, EMAIL_REGISTERED ];
                const {mode} = this.configs;
                const accountFieldType = getAccountFieldType(mode);
                if (!e) return;
                if (!this.isModal && registeredCode.includes(e.rescode)) {
                    const formValue = this.registerForm && this.registerForm.getValue();
                    storage.sessionStorage.set(DEFAULT_FORM_VALUE, {
                        [accountFieldType]: formValue[accountFieldType],
                        password: formValue.password,
                        iso2: formValue.iso2
                    });
                    jumpWithSearchParams(SIGN_IN);
                    return;
                }
                const fields = this.getFieldConfigs();
                const lastField = fields[fields.length - 1];
                if (lastField && lastField.name) {
                    this.registerForm && this.registerForm.formInstance.setErrMsgIntoDom([ {
                        name: lastField.name,
                        messages: [ getUdbErrorMessage(e) ]
                    } ]);
                    return;
                }
                super.setError(e);
            }
            reportSignUp(data, mode) {
                const loginMethod = data && data[mode] && data[mode].includes("@") ? "Email" : "Phone";
                this.$$reports && this.$$reports.thirdReportSignUpSuccess && this.$$reports.thirdReportSignUpSuccess(this.eid, loginMethod);
                this.$$reports && this.$$reports.riskReportSignIn && this.$$reports.riskReportSignIn();
            }
        }
        const sign_up = Register;
        $((() => {
            if (!document.getElementById("customer-register")) return false;
            new sign_up({
                id: "customer-register"
            });
        }));
    })();
})();