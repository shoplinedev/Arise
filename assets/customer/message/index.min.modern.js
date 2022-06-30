(() => {
    var __webpack_modules__ = {
        "../shared/browser/node_modules/@yy/sl-http-upload/dist/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            ({
                value: true
            });
            var axios = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/index.js");
            function _interopDefaultLegacy(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                };
            }
            var axios__default = _interopDefaultLegacy(axios);
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
            function _objectSpread2(target) {
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
                return Constructor;
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
            function _inherits(subClass, superClass) {
                if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
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
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _assertThisInitialized(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }
            function _possibleConstructorReturn(self, call) {
                if (call && ("object" === typeof call || "function" === typeof call)) return call;
                return _assertThisInitialized(self);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function() {
                    var result, Super = _getPrototypeOf(Derived);
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else result = Super.apply(this, arguments);
                    return _possibleConstructorReturn(this, result);
                };
            }
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
            var Event = function() {
                function Event() {
                    _classCallCheck(this, Event);
                    this.eventmap = {};
                }
                _createClass(Event, [ {
                    key: "listen",
                    value: function(event, cb) {
                        if (this.eventmap[event]) this.eventmap[event] = null;
                        this.eventmap[event] = cb;
                    }
                }, {
                    key: "emit",
                    value: function(event) {
                        if (this.eventmap[event]) this.eventmap[event]();
                    }
                } ]);
                return Event;
            }();
            var CLIENT = {
                SL_ADMIN: "shopline-admin",
                SL_APP: "shopline-app",
                SL_PLUFIN: "shopline-plugin",
                SL_DASH: "shopline-dash"
            };
            var ERROR_CODE = [ "CUS0501" ];
            var BaseUpload = function() {
                function BaseUpload(_ref) {
                    var _ref$client = _ref.client, client = void 0 === _ref$client ? CLIENT.SL_ADMIN : _ref$client, _ref$errorCode = _ref.errorCode, errorCode = void 0 === _ref$errorCode ? ERROR_CODE : _ref$errorCode;
                    _classCallCheck(this, BaseUpload);
                    this.client = void 0;
                    this.env = void 0;
                    this.errorCode = void 0;
                    this.client = client;
                    this.env = this.initEnv();
                    this.errorCode = errorCode;
                }
                _createClass(BaseUpload, [ {
                    key: "httpRequest",
                    value: function(url, opt) {
                        var _this = this;
                        var baseURL = this.getBaseUrl();
                        axios__default["default"].interceptors.response.use((function(response) {
                            if (_this.errorCode.includes(response.data.code)) return Promise.reject({
                                code: response.data.code
                            });
                            return response;
                        }), (function(error) {
                            return Promise.reject(error);
                        }));
                        return axios__default["default"](url, _objectSpread2({
                            baseURL
                        }, opt));
                    }
                }, {
                    key: "getBaseUrl",
                    value: function() {
                        if (this.client === CLIENT.SL_ADMIN && "local" !== this.env) return "/admin";
                        return "";
                    }
                }, {
                    key: "initEnv",
                    value: function() {
                        var host = window.location.host;
                        if (host.includes("local")) return "local";
                        if (host.includes("dev")) return "dev";
                        if (host.includes("stg")) return "stg";
                        return "prod";
                    }
                } ]);
                return BaseUpload;
            }();
            var iconExclamationCircle = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMnSURBVHgB7ZpdcpswEMdXwp2kM23DDeIb1DlBdYO6N7Dj9qFv8QnsnMB5T1MnN0hOEHKC2CcoR8DJUz5A3bX5EBgHMLINM/nNMIDAZv9IWq1WALyzWxhoQI5N03VdwTgTTLJD/NcWFpv+Rji42bSXIKfSk5ZhGBbrOg6UpJSAl/NPAg0Z4GFgcDEkXHvSu2r8fLyGNVlLgG/4CBaG68BGIaeN3uMlFKSQAGwqTSnlGA8FbAbr6Yl1P/527Lw/4HlvdC++nKDx97A54wmxtyfv6Vl5f5CrBvAPB4yxIWwRfFlDo/dwmnVfpoBdGB+QR8SbAnZpfECWiJUCqB2i8SOoACiijyLO0q6lCvC9DXXY4r59MzjonY7SvFOqF/JdZVWMJ0z0TuO0C0sCXi/MDmhwlVTt/HjGaKNjKI94OTdFsnBJAGdyABrAmCeMczjnpWMewjDkUp+MCXj987mNuyZUl1ayFmICOGcdqDhYC7EWEgqgkBid0neoPq2FrQtCARTPQz0wVVtDATQZgZqg2hoJAPYVagJTHI3aias0cGUQvWxVQBPqw3InhlrVQLqAWqIK0DLcb4koTFEKZ1Af7OCgEZXJCfbuQ9AEZ3zk/T2YD/sYjeruX+HLDgVIVKUlTRehZua0Iucve0EUC2G6D2qCamsogHKVoLcjT3BO3cXtByhtVge+rXNirQbb7C3oSVzZaPhRkLyl6BH7wT/Q0qTkDT9+aAdnsXHAdVlmIinnQ6Zq5pmOsd3egAY8T16q5zEBH345Fu4mUBp2sFQC7BuUx05mshvJO7AW+jjruYVyCEqKPT/zq/19cDzPI3fahJJQBjtZluo5NfYFndxhhkMkC1NjIfIeUK3QghJbnbQL6QK6ji2lrg5dHrJl1ZrBymjU6DlnVRBBNpAtq67nSK+bQ6Yp2VUU3/jhW/fkXODYvog8xhO54zcUceKL2PTMzclqNipVW+S7I29TZJFvrQiaMth+ErgJeqDAr4/ez4KClJoCYI20pfQ6a6YkaZyZ0hLWOoYHaPvUAHcCh3qBMU+wan8I8U8NZjTro4kTztYsPNfyqcE7u+Y/rqRF6gCYs7oAAAAASUVORK5CYII=";
            var iconClose = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB7ZU7DsIwDIadDrAhjsAVuAEsiAllZGDgJr1KuzF27AY36BV6BDYeQ0OMWgEljRO3EkLKJ1WqXD9+uXEMEAgE/oGFlFPwxDUmohxWcheP1aRYy+0MHEFfjFltdjHlK2wfpdxPL6oq9OtMP6UQ92WeHUogiis1OjYxNxHNT1ly7vK3diDTgUJES0yECTGxrRPt4hhrK45YO/BKvNeJq7fE350wFc+zpKRyOwmgRHCLewnoEoF2bnFvASYRtZlVnCXAIAK4xRHyHjBzdbTRMH7B54Grzc93l3uilwDTaUc7NaKDCLCNmss90UuAy5xzRZACfC4ZjgjPZUSPWlvEAMsIUvCYc/RpFphQkFLLyImF7gR4wokJBAI/4QEU9ugZiVYQzwAAAABJRU5ErkJggg==";
            var allSettled = __webpack_require__("../shared/browser/node_modules/promise.allsettled/index.js");
            var IMAGE_TYPE = [ "image/gif", "image/png", "image/jpeg", "image/bmp", "image/jpg", "image/webp", "image/svg" ];
            var VIDEO_TYPE = [ "video/webm", "video/ogg", "video/mp4" ];
            var EXCEL_TYPE = [ "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ];
            var SlAliyunOss = function(_BaseUpload) {
                _inherits(SlAliyunOss, _BaseUpload);
                var _super = _createSuper(SlAliyunOss);
                function SlAliyunOss(_ref) {
                    var _this;
                    var businessType = _ref.businessType, _ref$fileType = _ref.fileType, fileType = void 0 === _ref$fileType ? "IMAGE" : _ref$fileType, client = _ref.client, _ref$signUrl = _ref.signUrl, signUrl = void 0 === _ref$signUrl ? null : _ref$signUrl, _ref$needProgress = _ref.needProgress, needProgress = void 0 === _ref$needProgress ? false : _ref$needProgress, _ref$maxSize = _ref.maxSize, maxSize = void 0 === _ref$maxSize ? null : _ref$maxSize, _ref$limitPx = _ref.limitPx, limitPx = void 0 === _ref$limitPx ? null : _ref$limitPx, _ref$limitPxErrorTitl = _ref.limitPxErrorTitle, limitPxErrorTitle = void 0 === _ref$limitPxErrorTitl ? "上传失败" : _ref$limitPxErrorTitl, _ref$limitPxErrorDesc = _ref.limitPxErrorDesc, limitPxErrorDesc = void 0 === _ref$limitPxErrorDesc ? null : _ref$limitPxErrorDesc;
                    _classCallCheck(this, SlAliyunOss);
                    _this = _super.call(this, {
                        client
                    });
                    _this.ossDatas = void 0;
                    _this.businessType = void 0;
                    _this.lock = void 0;
                    _this.promises = void 0;
                    _this.event = void 0;
                    _this.fileType = void 0;
                    _this.statusMap = void 0;
                    _this.signUrl = void 0;
                    _this.backUrlSize = void 0;
                    _this.needProgress = void 0;
                    _this.maxSize = void 0;
                    _this.limitPx = void 0;
                    _this.limitPxErrorTitle = void 0;
                    _this.limitPxErrorDesc = void 0;
                    _this.ossDatas = new Set;
                    _this.businessType = businessType;
                    _this.lock = false;
                    _this.promises = new Map;
                    _this.statusMap = new Map;
                    _this.event = new Event;
                    _this.fileType = fileType;
                    _this.signUrl = signUrl;
                    _this.backUrlSize = null;
                    _this.needProgress = needProgress;
                    _this.maxSize = maxSize;
                    _this.limitPx = null !== limitPx && void 0 !== limitPx ? limitPx : 2e7;
                    _this.limitPxErrorTitle = limitPxErrorTitle;
                    _this.limitPxErrorDesc = limitPxErrorDesc || "文件超出了最大分辨率".concat(_this.limitPx / 1e6, "MP。请缩减分辨率，然后重试");
                    return _this;
                }
                _createClass(SlAliyunOss, [ {
                    key: "initOSSData",
                    value: function() {
                        var _initOSSData = _asyncToGenerator(regeneratorRuntime.mark((function _callee(fileList) {
                            return regeneratorRuntime.wrap((function(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                  case 0:
                                    if (this.lock) {
                                        _context.next = 3;
                                        break;
                                    }
                                    _context.next = 3;
                                    return this.fetchOSSData(fileList);

                                  case 3:
                                    return _context.abrupt("return", Promise.all(this.promises.values()));

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                            }), _callee, this);
                        })));
                        function initOSSData(_x) {
                            return _initOSSData.apply(this, arguments);
                        }
                        return initOSSData;
                    }()
                }, {
                    key: "loadImgWidthAndHeight",
                    value: function() {
                        var _loadImgWidthAndHeight = _asyncToGenerator(regeneratorRuntime.mark((function _callee2(fileList) {
                            var _this2 = this;
                            var promiseArr;
                            return regeneratorRuntime.wrap((function(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    promiseArr = [];
                                    fileList.map((function(file) {
                                        var type = _this2.fileType || _this2.getFileType(file.type);
                                        if ("IMAGE" === type) {
                                            var p = new Promise((function(resolve) {
                                                var reader = new FileReader;
                                                reader.onload = function(e) {
                                                    var img = new Image;
                                                    img.src = e.target.result;
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
                                    _context2.next = 4;
                                    return Promise.all(promiseArr);

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                            }), _callee2);
                        })));
                        function loadImgWidthAndHeight(_x2) {
                            return _loadImgWidthAndHeight.apply(this, arguments);
                        }
                        return loadImgWidthAndHeight;
                    }()
                }, {
                    key: "toast",
                    value: function(fileName, title, desc) {
                        var _innerEle$querySelect;
                        var dom = '\n      <div class="sl-http-uploader-notification-body" style="padding: 16px 24px;font-size: 14px;line-height: 20px;background-color: #FFEDC9;border: 1px solid rgba(254, 158, 15, 0.2);border-radius: 4px; margin-bottom: 20px;">\n        <div style="display: flex; align-items: center;">\n          <img style="width: 24px; height: 24px" src='.concat(iconExclamationCircle, ' />\n          <div style="flex: 1; margin: 0 20px 0 16px;font-weight: 500;color: #242833;">\n            "').concat(fileName, '"').concat(title, '\n          </div>\n          <img class="sl-http-uploader-close" style="width: 16px; height: 16px;cursor:pointer;" src=').concat(iconClose, ' />\n        </div>\n        <div style="padding: 4px 36px 0 40px;color: #474F5E;">\n          ').concat(desc, "\n        </div>\n      </div>\n    ");
                        var wrapperEle = document.querySelector(".sl-http-uploader-notification");
                        if (!wrapperEle) {
                            wrapperEle = document.createElement("div");
                            wrapperEle.setAttribute("class", "sl-http-uploader-notification");
                            wrapperEle.setAttribute("style", "position: fixed; top: 80px; right: 24px;z-index: 1;");
                            document.body.append(wrapperEle);
                        }
                        var contentWrapperEle = document.createElement("div");
                        contentWrapperEle.innerHTML = dom;
                        var innerEle = contentWrapperEle.querySelector(".sl-http-uploader-notification-body");
                        null === innerEle || void 0 === innerEle ? void 0 : null === (_innerEle$querySelect = innerEle.querySelector(".sl-http-uploader-close")) || void 0 === _innerEle$querySelect ? void 0 : _innerEle$querySelect.addEventListener("click", (function() {
                            var _innerEle$parentNode;
                            null === innerEle || void 0 === innerEle ? void 0 : null === (_innerEle$parentNode = innerEle.parentNode) || void 0 === _innerEle$parentNode ? void 0 : _innerEle$parentNode.removeChild(innerEle);
                        }));
                        setTimeout((function() {
                            var _innerEle$parentNode2;
                            null === innerEle || void 0 === innerEle ? void 0 : null === (_innerEle$parentNode2 = innerEle.parentNode) || void 0 === _innerEle$parentNode2 ? void 0 : _innerEle$parentNode2.removeChild(innerEle);
                        }), 4e3);
                        innerEle && wrapperEle.append(innerEle);
                    }
                }, {
                    key: "fetchOSSData",
                    value: function() {
                        var _fetchOSSData = _asyncToGenerator(regeneratorRuntime.mark((function _callee3(fileList) {
                            var _this3 = this;
                            var params, res, _response$data, response;
                            return regeneratorRuntime.wrap((function(_context3) {
                                while (1) switch (_context3.prev = _context3.next) {
                                  case 0:
                                    this.lock = true;
                                    fileList.forEach((function(item) {
                                        var pro = new Promise((function(resolve) {
                                            _this3.event.listen("".concat(item.uid, "-done"), (function() {
                                                resolve({});
                                            }));
                                        }));
                                        _this3.promises.set(item.uid, pro);
                                        _this3.statusMap.set(item.uid, 0);
                                    }));
                                    _context3.next = 4;
                                    return this.loadImgWidthAndHeight(fileList);

                                  case 4:
                                    params = {
                                        businessType: this.businessType,
                                        fileInfos: fileList.map((function(file) {
                                            return {
                                                fileName: file.name,
                                                fileSize: file.size,
                                                resource: _this3.fileType || _this3.getFileType(file.type),
                                                type: file.type,
                                                width: file.width || "",
                                                height: file.height || ""
                                            };
                                        }))
                                    };
                                    params.fileInfos = params.fileInfos.filter((function(item, index) {
                                        if ("IMAGE" === item.resource) {
                                            if (!item.width || !item.height) {
                                                _this3.toast(item.fileName, "上传失败", "获取图片宽高失败");
                                                _this3.event.emit("".concat(fileList[index].uid, "-done"));
                                                return false;
                                            }
                                            if (_this3.limitPx && item.width * item.height > _this3.limitPx) {
                                                _this3.toast(item.fileName, _this3.limitPxErrorTitle, _this3.limitPxErrorDesc);
                                                _this3.event.emit("".concat(fileList[index].uid, "-done"));
                                                return false;
                                            }
                                        }
                                        return true;
                                    }));
                                    if (params.fileInfos.length) {
                                        _context3.next = 8;
                                        break;
                                    }
                                    return _context3.abrupt("return", Promise.resolve());

                                  case 8:
                                    _context3.next = 10;
                                    return this.httpRequest(this.signUrl || "/api/signature/post/sign", {
                                        credentials: "include",
                                        method: "POST",
                                        data: JSON.stringify(params),
                                        headers: {
                                            "Content-type": "application/json"
                                        },
                                        needBasePath: true
                                    });

                                  case 10:
                                    res = _context3.sent;
                                    if (!(200 === res.status)) {
                                        _context3.next = 16;
                                        break;
                                    }
                                    response = res.data;
                                    null === (_response$data = response.data) || void 0 === _response$data ? void 0 : _response$data.forEach((function(item, index) {
                                        _this3.ossDatas.add(_objectSpread2({
                                            uid: fileList[index].uid
                                        }, item));
                                    }));
                                    fileList.forEach((function(file) {
                                        _this3.event.emit("".concat(file.uid, "-done"));
                                    }));
                                    return _context3.abrupt("return", Promise.resolve());

                                  case 16:
                                    return _context3.abrupt("return", Promise.reject());

                                  case 17:
                                  case "end":
                                    return _context3.stop();
                                }
                            }), _callee3, this);
                        })));
                        function fetchOSSData(_x3) {
                            return _fetchOSSData.apply(this, arguments);
                        }
                        return fetchOSSData;
                    }()
                }, {
                    key: "getExtraData",
                    value: function(data) {
                        var rest = {};
                        if (null === data || void 0 === data ? void 0 : data.extraMap) Object.keys(null === data || void 0 === data ? void 0 : data.extraMap).forEach((function(item) {
                            rest[item] = null === data || void 0 === data ? void 0 : data.extraMap[item];
                        }));
                        if (data.callBack) rest.callBack = data.callBack;
                        return _objectSpread2({
                            key: null === data || void 0 === data ? void 0 : data.key,
                            OSSAccessKeyId: null === data || void 0 === data ? void 0 : data.accessId,
                            policy: null === data || void 0 === data ? void 0 : data.policy,
                            Signature: null === data || void 0 === data ? void 0 : data.signature,
                            success_action_status: "200"
                        }, rest);
                    }
                }, {
                    key: "uploadFile",
                    value: function() {
                        var _uploadFile = _asyncToGenerator(regeneratorRuntime.mark((function _callee4(_ref2) {
                            var _data, _data2;
                            var file, _ref2$onProgress, onProgress, data, formData, extraData, option, response, success, isAllDone, _data3;
                            return regeneratorRuntime.wrap((function(_context4) {
                                while (1) switch (_context4.prev = _context4.next) {
                                  case 0:
                                    file = _ref2.file, _ref2$onProgress = _ref2.onProgress, onProgress = void 0 === _ref2$onProgress ? null : _ref2$onProgress;
                                    data = {};
                                    this.ossDatas.forEach((function(item) {
                                        if (item.fileName === file.name) data = item;
                                    }));
                                    if (null === (_data = data) || void 0 === _data ? void 0 : _data.signature) {
                                        _context4.next = 7;
                                        break;
                                    }
                                    this.releaseLock();
                                    this.statusMap.set(file.uid, 2);
                                    return _context4.abrupt("return", Promise.reject(new Error("获取签名失败")));

                                  case 7:
                                    formData = new FormData;
                                    extraData = this.getExtraData(data);
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
                                            percent: progressEvent.loaded / progressEvent.total
                                        });
                                    };
                                    _context4.next = 16;
                                    return this.httpRequest(null === (_data2 = data) || void 0 === _data2 ? void 0 : _data2.host, option);

                                  case 16:
                                    response = _context4.sent;
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
                                    if (!(200 === response.status)) {
                                        _context4.next = 23;
                                        break;
                                    }
                                    return _context4.abrupt("return", Promise.resolve({
                                        data: [ {
                                            url: this.getImageUrl(null === (_data3 = data) || void 0 === _data3 ? void 0 : _data3.url),
                                            success,
                                            filename: file.name
                                        } ]
                                    }));

                                  case 23:
                                    return _context4.abrupt("return", Promise.reject({
                                        data: [ {
                                            url: null,
                                            success: false,
                                            filename: file.name
                                        } ]
                                    }));

                                  case 24:
                                  case "end":
                                    return _context4.stop();
                                }
                            }), _callee4, this);
                        })));
                        function uploadFile(_x4) {
                            return _uploadFile.apply(this, arguments);
                        }
                        return uploadFile;
                    }()
                }, {
                    key: "getossDatas",
                    value: function() {
                        return this.ossDatas;
                    }
                }, {
                    key: "getFileType",
                    value: function(type) {
                        if (IMAGE_TYPE.includes(type)) return "IMAGE";
                        if (VIDEO_TYPE.includes(type)) return "VIDEO";
                        if (EXCEL_TYPE.includes(type)) return "EXCEL";
                        return "IMAGE";
                    }
                }, {
                    key: "isAllDone",
                    value: function() {
                        var obj = Object.fromEntries(this.statusMap.entries());
                        var isAllDone = Object.values(obj).every((function(item) {
                            return 0 !== item;
                        }));
                        return isAllDone;
                    }
                }, {
                    key: "onEnd",
                    value: function() {
                        this.ossDatas = new Set;
                        this.promises = new Map;
                    }
                }, {
                    key: "releaseLock",
                    value: function() {
                        this.lock = false;
                    }
                }, {
                    key: "upload",
                    value: function() {
                        var _upload = _asyncToGenerator(regeneratorRuntime.mark((function _callee5(_ref3) {
                            var _this4 = this;
                            var fileList, files, promises, res;
                            return regeneratorRuntime.wrap((function(_context5) {
                                while (1) switch (_context5.prev = _context5.next) {
                                  case 0:
                                    fileList = _ref3.fileList;
                                    files = fileList.map((function(item) {
                                        return item.file;
                                    }));
                                    fileList.forEach((function(_ref4) {
                                        var file = _ref4.file, onError = _ref4.onError;
                                        if (_this4.maxSize) if (file.size > 1024 * _this4.maxSize * 1024) {
                                            if (onError) onError();
                                            return Promise.reject();
                                        }
                                    }));
                                    if (this.maxSize) files = files.filter((function(file) {
                                        return file.size <= 1024 * _this4.maxSize * 1024;
                                    }));
                                    if (!(0 === files.length)) {
                                        _context5.next = 6;
                                        break;
                                    }
                                    return _context5.abrupt("return");

                                  case 6:
                                    _context5.next = 8;
                                    return this.initOSSData(files);

                                  case 8:
                                    promises = [];
                                    fileList.forEach((function(_ref5) {
                                        var file = _ref5.file, onProgress = _ref5.onProgress;
                                        var params = {
                                            file,
                                            onProgress: null
                                        };
                                        if (_this4.needProgress) params.onProgress = function() {};
                                        if (onProgress) params.onProgress = onProgress;
                                        promises.push(_this4.uploadFile(params));
                                    }));
                                    _context5.next = 12;
                                    return allSettled(promises);

                                  case 12:
                                    res = _context5.sent;
                                    return _context5.abrupt("return", res.map((function(item) {
                                        return item.value;
                                    })));

                                  case 14:
                                  case "end":
                                    return _context5.stop();
                                }
                            }), _callee5, this);
                        })));
                        function upload(_x5) {
                            return _upload.apply(this, arguments);
                        }
                        return upload;
                    }()
                }, {
                    key: "getImageUrl",
                    value: function(url) {
                        var _this$backUrlSize;
                        if (this.backUrlSize && (null === (_this$backUrlSize = this.backUrlSize) || void 0 === _this$backUrlSize ? void 0 : _this$backUrlSize.width)) {
                            var _this$backUrlSize2, _this$backUrlSize3;
                            var obj = new URL(url);
                            var origin = obj.origin, pathname = obj.pathname;
                            var _pathname$split = pathname.split("."), _pathname$split2 = _slicedToArray(_pathname$split, 2), prefix = _pathname$split2[0], suffix = _pathname$split2[1];
                            return "".concat(origin).concat(prefix, "_").concat(null === (_this$backUrlSize2 = this.backUrlSize) || void 0 === _this$backUrlSize2 ? void 0 : _this$backUrlSize2.width, "x").concat(null === (_this$backUrlSize3 = this.backUrlSize) || void 0 === _this$backUrlSize3 ? void 0 : _this$backUrlSize3.height, ".").concat(suffix);
                        }
                        return url;
                    }
                } ]);
                return SlAliyunOss;
            }(BaseUpload);
            exports.SlAliyunOss = SlAliyunOss;
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            module.exports = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/axios.js");
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            var settle = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/settle.js");
            var cookies = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/cookies.js");
            var buildURL = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js");
            var buildFullPath = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/buildFullPath.js");
            var parseHeaders = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/parseHeaders.js");
            var isURLSameOrigin = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isURLSameOrigin.js");
            var createError = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js");
            module.exports = function(config) {
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
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            var bind = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js");
            var Axios = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/Axios.js");
            var mergeConfig = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js");
            var defaults = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js");
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
            axios.Cancel = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js");
            axios.CancelToken = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/CancelToken.js");
            axios.isCancel = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js");
            axios.all = function(promises) {
                return Promise.all(promises);
            };
            axios.spread = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/spread.js");
            axios.isAxiosError = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAxiosError.js");
            module.exports = axios;
            module.exports["default"] = axios;
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js": module => {
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/CancelToken.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var Cancel = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js": module => {
            "use strict";
            module.exports = function(value) {
                return !!(value && value.__CANCEL__);
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/Axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            var buildURL = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js");
            var InterceptorManager = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/InterceptorManager.js");
            var dispatchRequest = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/dispatchRequest.js");
            var mergeConfig = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js");
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
            module.exports = Axios;
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/InterceptorManager.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
            module.exports = InterceptorManager;
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/buildFullPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var isAbsoluteURL = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAbsoluteURL.js");
            var combineURLs = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/combineURLs.js");
            module.exports = function(baseURL, requestedURL) {
                if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
                return requestedURL;
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var enhanceError = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/enhanceError.js");
            module.exports = function(message, config, code, request, response) {
                var error = new Error(message);
                return enhanceError(error, config, code, request, response);
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/dispatchRequest.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            var transformData = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/transformData.js");
            var isCancel = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js");
            var defaults = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js");
            function throwIfCancellationRequested(config) {
                if (config.cancelToken) config.cancelToken.throwIfRequested();
            }
            module.exports = function(config) {
                throwIfCancellationRequested(config);
                config.headers = config.headers || {};
                config.data = transformData(config.data, config.headers, config.transformRequest);
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
                utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (function(method) {
                    delete config.headers[method];
                }));
                var adapter = config.adapter || defaults.adapter;
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
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/enhanceError.js": module => {
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/settle.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var createError = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js");
            module.exports = function(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/transformData.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            module.exports = function(data, headers, fns) {
                utils.forEach(fns, (function(fn) {
                    data = fn(data, headers);
                }));
                return data;
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            var normalizeHeaderName = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/normalizeHeaderName.js");
            var DEFAULT_CONTENT_TYPE = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
            }
            function getDefaultAdapter() {
                var adapter;
                if ("undefined" !== typeof XMLHttpRequest) adapter = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js"); else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js");
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
            module.exports = defaults;
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js": module => {
            "use strict";
            module.exports = function(fn, thisArg) {
                return function() {
                    var args = new Array(arguments.length);
                    for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                    return fn.apply(thisArg, args);
                };
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/combineURLs.js": module => {
            "use strict";
            module.exports = function(baseURL, relativeURL) {
                return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/cookies.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAbsoluteURL.js": module => {
            "use strict";
            module.exports = function(url) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAxiosError.js": module => {
            "use strict";
            module.exports = function(payload) {
                return "object" === typeof payload && true === payload.isAxiosError;
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isURLSameOrigin.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/normalizeHeaderName.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
            module.exports = function(headers, normalizedName) {
                utils.forEach(headers, (function(value, name) {
                    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                        headers[normalizedName] = value;
                        delete headers[name];
                    }
                }));
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/parseHeaders.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var utils = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/spread.js": module => {
            "use strict";
            module.exports = function(callback) {
                return function(arr) {
                    return callback.apply(null, arr);
                };
            };
        },
        "../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js");
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
        "../shared/browser/node_modules/array.prototype.map/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var ArraySpeciesCreate = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ArraySpeciesCreate.js");
            var Call = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Call.js");
            var CreateDataPropertyOrThrow = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/CreateDataPropertyOrThrow.js");
            var Get = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Get.js");
            var HasProperty = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/HasProperty.js");
            var IsCallable = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsCallable.js");
            var ToUint32 = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToUint32.js");
            var ToObject = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToObject.js");
            var ToString = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToString.js");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var isString = __webpack_require__("../shared/browser/node_modules/is-string/index.js");
            var boxedString = Object("a");
            var splitString = "a" !== boxedString[0] || !(0 in boxedString);
            var strSplit = callBound("String.prototype.split");
            module.exports = function(callbackfn) {
                var O = ToObject(this);
                var self = splitString && isString(O) ? strSplit(O, "") : O;
                var len = ToUint32(self.length);
                if (!IsCallable(callbackfn)) throw new TypeError("Array.prototype.map callback must be a function");
                var T;
                if (arguments.length > 1) T = arguments[1];
                var A = ArraySpeciesCreate(O, len);
                var k = 0;
                while (k < len) {
                    var Pk = ToString(k);
                    var kPresent = HasProperty(O, Pk);
                    if (kPresent) {
                        var kValue = Get(O, Pk);
                        var mappedValue = Call(callbackfn, T, [ kValue, k, O ]);
                        CreateDataPropertyOrThrow(A, Pk, mappedValue);
                    }
                    k += 1;
                }
                return A;
            };
        },
        "../shared/browser/node_modules/array.prototype.map/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var define = __webpack_require__("../shared/browser/node_modules/define-properties/index.js");
            var RequireObjectCoercible = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/RequireObjectCoercible.js");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var implementation = __webpack_require__("../shared/browser/node_modules/array.prototype.map/implementation.js");
            var getPolyfill = __webpack_require__("../shared/browser/node_modules/array.prototype.map/polyfill.js");
            var polyfill = getPolyfill();
            var shim = __webpack_require__("../shared/browser/node_modules/array.prototype.map/shim.js");
            var $slice = callBound("Array.prototype.slice");
            var boundMapShim = function(array, callbackfn) {
                RequireObjectCoercible(array);
                return polyfill.apply(array, $slice(arguments, 1));
            };
            define(boundMapShim, {
                getPolyfill,
                implementation,
                shim
            });
            module.exports = boundMapShim;
        },
        "../shared/browser/node_modules/array.prototype.map/polyfill.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var arrayMethodBoxesProperly = __webpack_require__("../shared/browser/node_modules/es-array-method-boxes-properly/index.js");
            var implementation = __webpack_require__("../shared/browser/node_modules/array.prototype.map/implementation.js");
            module.exports = function() {
                var method = Array.prototype.map;
                return arrayMethodBoxesProperly(method) ? method : implementation;
            };
        },
        "../shared/browser/node_modules/array.prototype.map/shim.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var define = __webpack_require__("../shared/browser/node_modules/define-properties/index.js");
            var getPolyfill = __webpack_require__("../shared/browser/node_modules/array.prototype.map/polyfill.js");
            module.exports = function() {
                var polyfill = getPolyfill();
                define(Array.prototype, {
                    map: polyfill
                }, {
                    map: function() {
                        return Array.prototype.map !== polyfill;
                    }
                });
                return polyfill;
            };
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
        "../shared/browser/node_modules/call-bind/callBound.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var callBind = __webpack_require__("../shared/browser/node_modules/call-bind/index.js");
            var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
            module.exports = function(name, allowMissing) {
                var intrinsic = GetIntrinsic(name, !!allowMissing);
                if ("function" === typeof intrinsic && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
                return intrinsic;
            };
        },
        "../shared/browser/node_modules/call-bind/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__("../shared/browser/node_modules/function-bind/index.js");
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $apply = GetIntrinsic("%Function.prototype.apply%");
            var $call = GetIntrinsic("%Function.prototype.call%");
            var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
            var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
            var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
            var $max = GetIntrinsic("%Math.max%");
            if ($defineProperty) try {
                $defineProperty({}, "a", {
                    value: 1
                });
            } catch (e) {
                $defineProperty = null;
            }
            module.exports = function(originalFunction) {
                var func = $reflectApply(bind, $call, arguments);
                if ($gOPD && $defineProperty) {
                    var desc = $gOPD(func, "length");
                    if (desc.configurable) $defineProperty(func, "length", {
                        value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
                    });
                }
                return func;
            };
            var applyBind = function() {
                return $reflectApply(bind, $apply, arguments);
            };
            if ($defineProperty) $defineProperty(module.exports, "apply", {
                value: applyBind
            }); else module.exports.apply = applyBind;
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
        "../shared/browser/node_modules/define-properties/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var keys = __webpack_require__("../shared/browser/node_modules/object-keys/index.js");
            var hasSymbols = "function" === typeof Symbol && "symbol" === typeof Symbol("foo");
            var toStr = Object.prototype.toString;
            var concat = Array.prototype.concat;
            var origDefineProperty = Object.defineProperty;
            var isFunction = function(fn) {
                return "function" === typeof fn && "[object Function]" === toStr.call(fn);
            };
            var arePropertyDescriptorsSupported = function() {
                var obj = {};
                try {
                    origDefineProperty(obj, "x", {
                        enumerable: false,
                        value: obj
                    });
                    for (var _ in obj) return false;
                    return obj.x === obj;
                } catch (e) {
                    return false;
                }
            };
            var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
            var defineProperty = function(object, name, value, predicate) {
                if (name in object && (!isFunction(predicate) || !predicate())) return;
                if (supportsDescriptors) origDefineProperty(object, name, {
                    configurable: true,
                    enumerable: false,
                    value,
                    writable: true
                }); else object[name] = value;
            };
            var defineProperties = function(object, map) {
                var predicates = arguments.length > 2 ? arguments[2] : {};
                var props = keys(map);
                if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
                for (var i = 0; i < props.length; i += 1) defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
            };
            defineProperties.supportsDescriptors = !!supportsDescriptors;
            module.exports = defineProperties;
        },
        "../shared/browser/node_modules/es-array-method-boxes-properly/index.js": module => {
            module.exports = function(method) {
                var properlyBoxesNonStrict = true;
                var properlyBoxesStrict = true;
                var threwException = false;
                if ("function" === typeof method) {
                    try {
                        method.call("f", (function(_, __, O) {
                            if ("object" !== typeof O) properlyBoxesNonStrict = false;
                        }));
                        method.call([ null ], (function() {
                            "use strict";
                            properlyBoxesStrict = "string" === typeof this;
                        }), "x");
                    } catch (e) {
                        threwException = true;
                    }
                    return !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
                }
                return false;
            };
        },
        "../shared/browser/node_modules/es-to-primitive/es2015.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var hasSymbols = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator;
            var isPrimitive = __webpack_require__("../shared/browser/node_modules/es-to-primitive/helpers/isPrimitive.js");
            var isCallable = __webpack_require__("../shared/browser/node_modules/is-callable/index.js");
            var isDate = __webpack_require__("../shared/browser/node_modules/is-date-object/index.js");
            var isSymbol = __webpack_require__("../shared/browser/node_modules/is-symbol/index.js");
            var ordinaryToPrimitive = function(O, hint) {
                if ("undefined" === typeof O || null === O) throw new TypeError("Cannot call method on " + O);
                if ("string" !== typeof hint || "number" !== hint && "string" !== hint) throw new TypeError('hint must be "string" or "number"');
                var methodNames = "string" === hint ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
                var method, result, i;
                for (i = 0; i < methodNames.length; ++i) {
                    method = O[methodNames[i]];
                    if (isCallable(method)) {
                        result = method.call(O);
                        if (isPrimitive(result)) return result;
                    }
                }
                throw new TypeError("No default value");
            };
            var GetMethod = function(O, P) {
                var func = O[P];
                if (null !== func && "undefined" !== typeof func) {
                    if (!isCallable(func)) throw new TypeError(func + " returned for property " + P + " of object " + O + " is not a function");
                    return func;
                }
                return;
            };
            module.exports = function(input) {
                if (isPrimitive(input)) return input;
                var hint = "default";
                if (arguments.length > 1) if (arguments[1] === String) hint = "string"; else if (arguments[1] === Number) hint = "number";
                var exoticToPrim;
                if (hasSymbols) if (Symbol.toPrimitive) exoticToPrim = GetMethod(input, Symbol.toPrimitive); else if (isSymbol(input)) exoticToPrim = Symbol.prototype.valueOf;
                if ("undefined" !== typeof exoticToPrim) {
                    var result = exoticToPrim.call(input, hint);
                    if (isPrimitive(result)) return result;
                    throw new TypeError("unable to convert exotic object to primitive");
                }
                if ("default" === hint && (isDate(input) || isSymbol(input))) hint = "string";
                return ordinaryToPrimitive(input, "default" === hint ? "number" : hint);
            };
        },
        "../shared/browser/node_modules/es-to-primitive/helpers/isPrimitive.js": module => {
            "use strict";
            module.exports = function(value) {
                return null === value || "function" !== typeof value && "object" !== typeof value;
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
        "../shared/browser/node_modules/function-bind/implementation.js": module => {
            "use strict";
            var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
            var slice = Array.prototype.slice;
            var toStr = Object.prototype.toString;
            var funcType = "[object Function]";
            module.exports = function(that) {
                var target = this;
                if ("function" !== typeof target || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
                var args = slice.call(arguments, 1);
                var bound;
                var binder = function() {
                    if (this instanceof bound) {
                        var result = target.apply(this, args.concat(slice.call(arguments)));
                        if (Object(result) === result) return result;
                        return this;
                    } else return target.apply(that, args.concat(slice.call(arguments)));
                };
                var boundLength = Math.max(0, target.length - args.length);
                var boundArgs = [];
                for (var i = 0; i < boundLength; i++) boundArgs.push("$" + i);
                bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
                if (target.prototype) {
                    var Empty = function() {};
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty;
                    Empty.prototype = null;
                }
                return bound;
            };
        },
        "../shared/browser/node_modules/function-bind/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var implementation = __webpack_require__("../shared/browser/node_modules/function-bind/implementation.js");
            module.exports = Function.prototype.bind || implementation;
        },
        "../shared/browser/node_modules/get-intrinsic/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var undefined;
            var $SyntaxError = SyntaxError;
            var $Function = Function;
            var $TypeError = TypeError;
            var getEvalledConstructor = function(expressionSyntax) {
                try {
                    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
                } catch (e) {}
            };
            var $gOPD = Object.getOwnPropertyDescriptor;
            if ($gOPD) try {
                $gOPD({}, "");
            } catch (e) {
                $gOPD = null;
            }
            var throwTypeError = function() {
                throw new $TypeError;
            };
            var ThrowTypeError = $gOPD ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (calleeThrows) {
                    try {
                        return $gOPD(arguments, "callee").get;
                    } catch (gOPDthrows) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var hasSymbols = __webpack_require__("../shared/browser/node_modules/has-symbols/index.js")();
            var getProto = Object.getPrototypeOf || function(x) {
                return x.__proto__;
            };
            var needsEval = {};
            var TypedArray = "undefined" === typeof Uint8Array ? undefined : getProto(Uint8Array);
            var INTRINSICS = {
                "%AggregateError%": "undefined" === typeof AggregateError ? undefined : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? undefined : ArrayBuffer,
                "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
                "%AsyncFromSyncIteratorPrototype%": undefined,
                "%AsyncFunction%": needsEval,
                "%AsyncGenerator%": needsEval,
                "%AsyncGeneratorFunction%": needsEval,
                "%AsyncIteratorPrototype%": needsEval,
                "%Atomics%": "undefined" === typeof Atomics ? undefined : Atomics,
                "%BigInt%": "undefined" === typeof BigInt ? undefined : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" === typeof DataView ? undefined : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": "undefined" === typeof Float32Array ? undefined : Float32Array,
                "%Float64Array%": "undefined" === typeof Float64Array ? undefined : Float64Array,
                "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? undefined : FinalizationRegistry,
                "%Function%": $Function,
                "%GeneratorFunction%": needsEval,
                "%Int8Array%": "undefined" === typeof Int8Array ? undefined : Int8Array,
                "%Int16Array%": "undefined" === typeof Int16Array ? undefined : Int16Array,
                "%Int32Array%": "undefined" === typeof Int32Array ? undefined : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
                "%JSON%": "object" === typeof JSON ? JSON : undefined,
                "%Map%": "undefined" === typeof Map ? undefined : Map,
                "%MapIteratorPrototype%": "undefined" === typeof Map || !hasSymbols ? undefined : getProto((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" === typeof Promise ? undefined : Promise,
                "%Proxy%": "undefined" === typeof Proxy ? undefined : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" === typeof Reflect ? undefined : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" === typeof Set ? undefined : Set,
                "%SetIteratorPrototype%": "undefined" === typeof Set || !hasSymbols ? undefined : getProto((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined,
                "%Symbol%": hasSymbols ? Symbol : undefined,
                "%SyntaxError%": $SyntaxError,
                "%ThrowTypeError%": ThrowTypeError,
                "%TypedArray%": TypedArray,
                "%TypeError%": $TypeError,
                "%Uint8Array%": "undefined" === typeof Uint8Array ? undefined : Uint8Array,
                "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
                "%Uint16Array%": "undefined" === typeof Uint16Array ? undefined : Uint16Array,
                "%Uint32Array%": "undefined" === typeof Uint32Array ? undefined : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" === typeof WeakMap ? undefined : WeakMap,
                "%WeakRef%": "undefined" === typeof WeakRef ? undefined : WeakRef,
                "%WeakSet%": "undefined" === typeof WeakSet ? undefined : WeakSet
            };
            var doEval = function doEval(name) {
                var value;
                if ("%AsyncFunction%" === name) value = getEvalledConstructor("async function () {}"); else if ("%GeneratorFunction%" === name) value = getEvalledConstructor("function* () {}"); else if ("%AsyncGeneratorFunction%" === name) value = getEvalledConstructor("async function* () {}"); else if ("%AsyncGenerator%" === name) {
                    var fn = doEval("%AsyncGeneratorFunction%");
                    if (fn) value = fn.prototype;
                } else if ("%AsyncIteratorPrototype%" === name) {
                    var gen = doEval("%AsyncGenerator%");
                    if (gen) value = getProto(gen.prototype);
                }
                INTRINSICS[name] = value;
                return value;
            };
            var LEGACY_ALIASES = {
                "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
                "%ArrayPrototype%": [ "Array", "prototype" ],
                "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
                "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
                "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
                "%ArrayProto_values%": [ "Array", "prototype", "values" ],
                "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
                "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
                "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
                "%BooleanPrototype%": [ "Boolean", "prototype" ],
                "%DataViewPrototype%": [ "DataView", "prototype" ],
                "%DatePrototype%": [ "Date", "prototype" ],
                "%ErrorPrototype%": [ "Error", "prototype" ],
                "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
                "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
                "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
                "%FunctionPrototype%": [ "Function", "prototype" ],
                "%Generator%": [ "GeneratorFunction", "prototype" ],
                "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
                "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
                "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
                "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
                "%JSONParse%": [ "JSON", "parse" ],
                "%JSONStringify%": [ "JSON", "stringify" ],
                "%MapPrototype%": [ "Map", "prototype" ],
                "%NumberPrototype%": [ "Number", "prototype" ],
                "%ObjectPrototype%": [ "Object", "prototype" ],
                "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
                "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
                "%PromisePrototype%": [ "Promise", "prototype" ],
                "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
                "%Promise_all%": [ "Promise", "all" ],
                "%Promise_reject%": [ "Promise", "reject" ],
                "%Promise_resolve%": [ "Promise", "resolve" ],
                "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
                "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
                "%RegExpPrototype%": [ "RegExp", "prototype" ],
                "%SetPrototype%": [ "Set", "prototype" ],
                "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
                "%StringPrototype%": [ "String", "prototype" ],
                "%SymbolPrototype%": [ "Symbol", "prototype" ],
                "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
                "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
                "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
                "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
                "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
                "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
                "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
                "%URIErrorPrototype%": [ "URIError", "prototype" ],
                "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
                "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
            };
            var bind = __webpack_require__("../shared/browser/node_modules/function-bind/index.js");
            var hasOwn = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var $concat = bind.call(Function.call, Array.prototype.concat);
            var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
            var $replace = bind.call(Function.call, String.prototype.replace);
            var $strSlice = bind.call(Function.call, String.prototype.slice);
            var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var reEscapeChar = /\\(\\)?/g;
            var stringToPath = function(string) {
                var first = $strSlice(string, 0, 1);
                var last = $strSlice(string, -1);
                if ("%" === first && "%" !== last) throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`"); else if ("%" === last && "%" !== first) throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
                var result = [];
                $replace(string, rePropName, (function(match, number, quote, subString) {
                    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
                }));
                return result;
            };
            var getBaseIntrinsic = function(name, allowMissing) {
                var intrinsicName = name;
                var alias;
                if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
                    alias = LEGACY_ALIASES[intrinsicName];
                    intrinsicName = "%" + alias[0] + "%";
                }
                if (hasOwn(INTRINSICS, intrinsicName)) {
                    var value = INTRINSICS[intrinsicName];
                    if (value === needsEval) value = doEval(intrinsicName);
                    if ("undefined" === typeof value && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
                    return {
                        alias,
                        name: intrinsicName,
                        value
                    };
                }
                throw new $SyntaxError("intrinsic " + name + " does not exist!");
            };
            module.exports = function(name, allowMissing) {
                if ("string" !== typeof name || 0 === name.length) throw new $TypeError("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" !== typeof allowMissing) throw new $TypeError('"allowMissing" argument must be a boolean');
                var parts = stringToPath(name);
                var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
                var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
                var intrinsicRealName = intrinsic.name;
                var value = intrinsic.value;
                var skipFurtherCaching = false;
                var alias = intrinsic.alias;
                if (alias) {
                    intrinsicBaseName = alias[0];
                    $spliceApply(parts, $concat([ 0, 1 ], alias));
                }
                for (var i = 1, isOwn = true; i < parts.length; i += 1) {
                    var part = parts[i];
                    var first = $strSlice(part, 0, 1);
                    var last = $strSlice(part, -1);
                    if (('"' === first || "'" === first || "`" === first || '"' === last || "'" === last || "`" === last) && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
                    if ("constructor" === part || !isOwn) skipFurtherCaching = true;
                    intrinsicBaseName += "." + part;
                    intrinsicRealName = "%" + intrinsicBaseName + "%";
                    if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName]; else if (null != value) {
                        if (!(part in value)) {
                            if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                            return;
                        }
                        if ($gOPD && i + 1 >= parts.length) {
                            var desc = $gOPD(value, part);
                            isOwn = !!desc;
                            if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get; else value = value[part];
                        } else {
                            isOwn = hasOwn(value, part);
                            value = value[part];
                        }
                        if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
                    }
                }
                return value;
            };
        },
        "../shared/browser/node_modules/has-symbols/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var origSymbol = "undefined" !== typeof Symbol && Symbol;
            var hasSymbolSham = __webpack_require__("../shared/browser/node_modules/has-symbols/shams.js");
            module.exports = function() {
                if ("function" !== typeof origSymbol) return false;
                if ("function" !== typeof Symbol) return false;
                if ("symbol" !== typeof origSymbol("foo")) return false;
                if ("symbol" !== typeof Symbol("bar")) return false;
                return hasSymbolSham();
            };
        },
        "../shared/browser/node_modules/has-symbols/shams.js": module => {
            "use strict";
            module.exports = function() {
                if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return false;
                if ("symbol" === typeof Symbol.iterator) return true;
                var obj = {};
                var sym = Symbol("test");
                var symObj = Object(sym);
                if ("string" === typeof sym) return false;
                if ("[object Symbol]" !== Object.prototype.toString.call(sym)) return false;
                if ("[object Symbol]" !== Object.prototype.toString.call(symObj)) return false;
                var symVal = 42;
                obj[sym] = symVal;
                for (sym in obj) return false;
                if ("function" === typeof Object.keys && 0 !== Object.keys(obj).length) return false;
                if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(obj).length) return false;
                var syms = Object.getOwnPropertySymbols(obj);
                if (1 !== syms.length || syms[0] !== sym) return false;
                if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
                if ("function" === typeof Object.getOwnPropertyDescriptor) {
                    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
                    if (descriptor.value !== symVal || true !== descriptor.enumerable) return false;
                }
                return true;
            };
        },
        "../shared/browser/node_modules/has-tostringtag/shams.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var hasSymbols = __webpack_require__("../shared/browser/node_modules/has-symbols/shams.js");
            module.exports = function() {
                return hasSymbols() && !!Symbol.toStringTag;
            };
        },
        "../shared/browser/node_modules/has/src/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__("../shared/browser/node_modules/function-bind/index.js");
            module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
        },
        "../shared/browser/node_modules/is-arguments/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var hasToStringTag = __webpack_require__("../shared/browser/node_modules/has-tostringtag/shams.js")();
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var $toString = callBound("Object.prototype.toString");
            var isStandardArguments = function(value) {
                if (hasToStringTag && value && "object" === typeof value && Symbol.toStringTag in value) return false;
                return "[object Arguments]" === $toString(value);
            };
            var isLegacyArguments = function(value) {
                if (isStandardArguments(value)) return true;
                return null !== value && "object" === typeof value && "number" === typeof value.length && value.length >= 0 && "[object Array]" !== $toString(value) && "[object Function]" === $toString(value.callee);
            };
            var supportsStandardArguments = function() {
                return isStandardArguments(arguments);
            }();
            isStandardArguments.isLegacyArguments = isLegacyArguments;
            module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
        },
        "../shared/browser/node_modules/is-callable/index.js": module => {
            "use strict";
            var fnToStr = Function.prototype.toString;
            var reflectApply = "object" === typeof Reflect && null !== Reflect && Reflect.apply;
            var badArrayLike;
            var isCallableMarker;
            if ("function" === typeof reflectApply && "function" === typeof Object.defineProperty) try {
                badArrayLike = Object.defineProperty({}, "length", {
                    get: function() {
                        throw isCallableMarker;
                    }
                });
                isCallableMarker = {};
                reflectApply((function() {
                    throw 42;
                }), null, badArrayLike);
            } catch (_) {
                if (_ !== isCallableMarker) reflectApply = null;
            } else reflectApply = null;
            var constructorRegex = /^\s*class\b/;
            var isES6ClassFn = function(value) {
                try {
                    var fnStr = fnToStr.call(value);
                    return constructorRegex.test(fnStr);
                } catch (e) {
                    return false;
                }
            };
            var tryFunctionObject = function(value) {
                try {
                    if (isES6ClassFn(value)) return false;
                    fnToStr.call(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            var toStr = Object.prototype.toString;
            var fnClass = "[object Function]";
            var genClass = "[object GeneratorFunction]";
            var hasToStringTag = "function" === typeof Symbol && !!Symbol.toStringTag;
            var documentDotAll = "object" === typeof document && "undefined" === typeof document.all && void 0 !== document.all ? document.all : {};
            module.exports = reflectApply ? function(value) {
                if (value === documentDotAll) return true;
                if (!value) return false;
                if ("function" !== typeof value && "object" !== typeof value) return false;
                if ("function" === typeof value && !value.prototype) return true;
                try {
                    reflectApply(value, null, badArrayLike);
                } catch (e) {
                    if (e !== isCallableMarker) return false;
                }
                return !isES6ClassFn(value);
            } : function(value) {
                if (value === documentDotAll) return true;
                if (!value) return false;
                if ("function" !== typeof value && "object" !== typeof value) return false;
                if ("function" === typeof value && !value.prototype) return true;
                if (hasToStringTag) return tryFunctionObject(value);
                if (isES6ClassFn(value)) return false;
                var strClass = toStr.call(value);
                return strClass === fnClass || strClass === genClass;
            };
        },
        "../shared/browser/node_modules/is-date-object/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var getDay = Date.prototype.getDay;
            var tryDateObject = function(value) {
                try {
                    getDay.call(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            var toStr = Object.prototype.toString;
            var dateClass = "[object Date]";
            var hasToStringTag = __webpack_require__("../shared/browser/node_modules/has-tostringtag/shams.js")();
            module.exports = function(value) {
                if ("object" !== typeof value || null === value) return false;
                return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
            };
        },
        "../shared/browser/node_modules/is-map/index.js": module => {
            "use strict";
            var $Map = "function" === typeof Map && Map.prototype ? Map : null;
            var $Set = "function" === typeof Set && Set.prototype ? Set : null;
            var exported;
            if (!$Map) exported = function(x) {
                return false;
            };
            var $mapHas = $Map ? Map.prototype.has : null;
            var $setHas = $Set ? Set.prototype.has : null;
            if (!exported && !$mapHas) exported = function(x) {
                return false;
            };
            module.exports = exported || function(x) {
                if (!x || "object" !== typeof x) return false;
                try {
                    $mapHas.call(x);
                    if ($setHas) try {
                        $setHas.call(x);
                    } catch (e) {
                        return true;
                    }
                    return x instanceof $Map;
                } catch (e) {}
                return false;
            };
        },
        "../shared/browser/node_modules/is-regex/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var hasToStringTag = __webpack_require__("../shared/browser/node_modules/has-tostringtag/shams.js")();
            var has;
            var $exec;
            var isRegexMarker;
            var badStringifier;
            if (hasToStringTag) {
                has = callBound("Object.prototype.hasOwnProperty");
                $exec = callBound("RegExp.prototype.exec");
                isRegexMarker = {};
                var throwRegexMarker = function() {
                    throw isRegexMarker;
                };
                badStringifier = {
                    toString: throwRegexMarker,
                    valueOf: throwRegexMarker
                };
                if ("symbol" === typeof Symbol.toPrimitive) badStringifier[Symbol.toPrimitive] = throwRegexMarker;
            }
            var $toString = callBound("Object.prototype.toString");
            var gOPD = Object.getOwnPropertyDescriptor;
            var regexClass = "[object RegExp]";
            module.exports = hasToStringTag ? function(value) {
                if (!value || "object" !== typeof value) return false;
                var descriptor = gOPD(value, "lastIndex");
                var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
                if (!hasLastIndexDataProperty) return false;
                try {
                    $exec(value, badStringifier);
                } catch (e) {
                    return e === isRegexMarker;
                }
            } : function(value) {
                if (!value || "object" !== typeof value && "function" !== typeof value) return false;
                return $toString(value) === regexClass;
            };
        },
        "../shared/browser/node_modules/is-set/index.js": module => {
            "use strict";
            var $Map = "function" === typeof Map && Map.prototype ? Map : null;
            var $Set = "function" === typeof Set && Set.prototype ? Set : null;
            var exported;
            if (!$Set) exported = function(x) {
                return false;
            };
            var $mapHas = $Map ? Map.prototype.has : null;
            var $setHas = $Set ? Set.prototype.has : null;
            if (!exported && !$setHas) exported = function(x) {
                return false;
            };
            module.exports = exported || function(x) {
                if (!x || "object" !== typeof x) return false;
                try {
                    $setHas.call(x);
                    if ($mapHas) try {
                        $mapHas.call(x);
                    } catch (e) {
                        return true;
                    }
                    return x instanceof $Set;
                } catch (e) {}
                return false;
            };
        },
        "../shared/browser/node_modules/is-string/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var strValue = String.prototype.valueOf;
            var tryStringObject = function(value) {
                try {
                    strValue.call(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            var toStr = Object.prototype.toString;
            var strClass = "[object String]";
            var hasToStringTag = __webpack_require__("../shared/browser/node_modules/has-tostringtag/shams.js")();
            module.exports = function(value) {
                if ("string" === typeof value) return true;
                if ("object" !== typeof value) return false;
                return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
            };
        },
        "../shared/browser/node_modules/is-symbol/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toStr = Object.prototype.toString;
            var hasSymbols = __webpack_require__("../shared/browser/node_modules/has-symbols/index.js")();
            if (hasSymbols) {
                var symToStr = Symbol.prototype.toString;
                var symStringRegex = /^Symbol\(.*\)$/;
                var isSymbolObject = function(value) {
                    if ("symbol" !== typeof value.valueOf()) return false;
                    return symStringRegex.test(symToStr.call(value));
                };
                module.exports = function(value) {
                    if ("symbol" === typeof value) return true;
                    if ("[object Symbol]" !== toStr.call(value)) return false;
                    try {
                        return isSymbolObject(value);
                    } catch (e) {
                        return false;
                    }
                };
            } else module.exports = function(value) {
                return false && 0;
            };
        },
        "../shared/browser/node_modules/isarray/index.js": module => {
            var toString = {}.toString;
            module.exports = Array.isArray || function(arr) {
                return "[object Array]" == toString.call(arr);
            };
        },
        "../shared/browser/node_modules/iterate-iterator/index.js": module => {
            "use strict";
            var $TypeError = TypeError;
            module.exports = function(iterator) {
                if (!iterator || "function" !== typeof iterator.next) throw new $TypeError("iterator must be an object with a `next` method");
                if (arguments.length > 1) {
                    var callback = arguments[1];
                    if ("function" !== typeof callback) throw new $TypeError("`callback`, if provided, must be a function");
                }
                var values = callback || [];
                var result;
                while ((result = iterator.next()) && !result.done) if (callback) callback(result.value); else values.push(result.value);
                if (!callback) return values;
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
        "../shared/browser/node_modules/object-inspect/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            var hasMap = "function" === typeof Map && Map.prototype;
            var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
            var mapSize = hasMap && mapSizeDescriptor && "function" === typeof mapSizeDescriptor.get ? mapSizeDescriptor.get : null;
            var mapForEach = hasMap && Map.prototype.forEach;
            var hasSet = "function" === typeof Set && Set.prototype;
            var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
            var setSize = hasSet && setSizeDescriptor && "function" === typeof setSizeDescriptor.get ? setSizeDescriptor.get : null;
            var setForEach = hasSet && Set.prototype.forEach;
            var hasWeakMap = "function" === typeof WeakMap && WeakMap.prototype;
            var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
            var hasWeakSet = "function" === typeof WeakSet && WeakSet.prototype;
            var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
            var hasWeakRef = "function" === typeof WeakRef && WeakRef.prototype;
            var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
            var booleanValueOf = Boolean.prototype.valueOf;
            var objectToString = Object.prototype.toString;
            var functionToString = Function.prototype.toString;
            var $match = String.prototype.match;
            var $slice = String.prototype.slice;
            var $replace = String.prototype.replace;
            var $toUpperCase = String.prototype.toUpperCase;
            var $toLowerCase = String.prototype.toLowerCase;
            var $test = RegExp.prototype.test;
            var $concat = Array.prototype.concat;
            var $join = Array.prototype.join;
            var $arrSlice = Array.prototype.slice;
            var $floor = Math.floor;
            var bigIntValueOf = "function" === typeof BigInt ? BigInt.prototype.valueOf : null;
            var gOPS = Object.getOwnPropertySymbols;
            var symToString = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? Symbol.prototype.toString : null;
            var hasShammedSymbols = "function" === typeof Symbol && "object" === typeof Symbol.iterator;
            var toStringTag = "function" === typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
            var isEnumerable = Object.prototype.propertyIsEnumerable;
            var gPO = ("function" === typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
                return O.__proto__;
            } : null);
            function addNumericSeparator(num, str) {
                if (num === 1 / 0 || num === -1 / 0 || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
                var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" === typeof num) {
                    var int = num < 0 ? -$floor(-num) : $floor(num);
                    if (int !== num) {
                        var intStr = String(int);
                        var dec = $slice.call(str, intStr.length + 1);
                        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
                    }
                }
                return $replace.call(str, sepRegex, "$&_");
            }
            var inspectCustom = __webpack_require__("?22e6").custom;
            var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
            module.exports = function inspect_(obj, options, depth, seen) {
                var opts = options || {};
                if (has(opts, "quoteStyle") && "single" !== opts.quoteStyle && "double" !== opts.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (has(opts, "maxStringLength") && ("number" === typeof opts.maxStringLength ? opts.maxStringLength < 0 && opts.maxStringLength !== 1 / 0 : null !== opts.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
                if ("boolean" !== typeof customInspect && "symbol" !== customInspect) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (has(opts, "indent") && null !== opts.indent && "\t" !== opts.indent && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (has(opts, "numericSeparator") && "boolean" !== typeof opts.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var numericSeparator = opts.numericSeparator;
                if ("undefined" === typeof obj) return "undefined";
                if (null === obj) return "null";
                if ("boolean" === typeof obj) return obj ? "true" : "false";
                if ("string" === typeof obj) return inspectString(obj, opts);
                if ("number" === typeof obj) {
                    if (0 === obj) return 1 / 0 / obj > 0 ? "0" : "-0";
                    var str = String(obj);
                    return numericSeparator ? addNumericSeparator(obj, str) : str;
                }
                if ("bigint" === typeof obj) {
                    var bigIntStr = String(obj) + "n";
                    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
                }
                var maxDepth = "undefined" === typeof opts.depth ? 5 : opts.depth;
                if ("undefined" === typeof depth) depth = 0;
                if (depth >= maxDepth && maxDepth > 0 && "object" === typeof obj) return isArray(obj) ? "[Array]" : "[Object]";
                var indent = getIndent(opts, depth);
                if ("undefined" === typeof seen) seen = []; else if (indexOf(seen, obj) >= 0) return "[Circular]";
                function inspect(value, from, noIndent) {
                    if (from) {
                        seen = $arrSlice.call(seen);
                        seen.push(from);
                    }
                    if (noIndent) {
                        var newOpts = {
                            depth: opts.depth
                        };
                        if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
                        return inspect_(value, newOpts, depth + 1, seen);
                    }
                    return inspect_(value, opts, depth + 1, seen);
                }
                if ("function" === typeof obj) {
                    var name = nameOf(obj);
                    var keys = arrObjKeys(obj, inspect);
                    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
                }
                if (isSymbol(obj)) {
                    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
                    return "object" === typeof obj && !hasShammedSymbols ? markBoxed(symString) : symString;
                }
                if (isElement(obj)) {
                    var s = "<" + $toLowerCase.call(String(obj.nodeName));
                    var attrs = obj.attributes || [];
                    for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
                    s += ">";
                    if (obj.childNodes && obj.childNodes.length) s += "...";
                    s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
                    return s;
                }
                if (isArray(obj)) {
                    if (0 === obj.length) return "[]";
                    var xs = arrObjKeys(obj, inspect);
                    if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
                    return "[ " + $join.call(xs, ", ") + " ]";
                }
                if (isError(obj)) {
                    var parts = arrObjKeys(obj, inspect);
                    if ("cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
                    if (0 === parts.length) return "[" + String(obj) + "]";
                    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
                }
                if ("object" === typeof obj && customInspect) if (inspectSymbol && "function" === typeof obj[inspectSymbol]) return obj[inspectSymbol](); else if ("symbol" !== customInspect && "function" === typeof obj.inspect) return obj.inspect();
                if (isMap(obj)) {
                    var mapParts = [];
                    mapForEach.call(obj, (function(value, key) {
                        mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
                    }));
                    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
                }
                if (isSet(obj)) {
                    var setParts = [];
                    setForEach.call(obj, (function(value) {
                        setParts.push(inspect(value, obj));
                    }));
                    return collectionOf("Set", setSize.call(obj), setParts, indent);
                }
                if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
                if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
                if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
                if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
                if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
                if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
                if (isString(obj)) return markBoxed(inspect(String(obj)));
                if (!isDate(obj) && !isRegExp(obj)) {
                    var ys = arrObjKeys(obj, inspect);
                    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
                    var protoTag = obj instanceof Object ? "" : "null prototype";
                    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
                    var constructorTag = isPlainObject || "function" !== typeof obj.constructor ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
                    var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
                    if (0 === ys.length) return tag + "{}";
                    if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
                    return tag + "{ " + $join.call(ys, ", ") + " }";
                }
                return String(obj);
            };
            function wrapQuotes(s, defaultStyle, opts) {
                var quoteChar = "double" === (opts.quoteStyle || defaultStyle) ? '"' : "'";
                return quoteChar + s + quoteChar;
            }
            function quote(s) {
                return $replace.call(String(s), /"/g, "&quot;");
            }
            function isArray(obj) {
                return "[object Array]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isDate(obj) {
                return "[object Date]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isRegExp(obj) {
                return "[object RegExp]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isError(obj) {
                return "[object Error]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isString(obj) {
                return "[object String]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isNumber(obj) {
                return "[object Number]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isBoolean(obj) {
                return "[object Boolean]" === toStr(obj) && (!toStringTag || !("object" === typeof obj && toStringTag in obj));
            }
            function isSymbol(obj) {
                if (hasShammedSymbols) return obj && "object" === typeof obj && obj instanceof Symbol;
                if ("symbol" === typeof obj) return true;
                if (!obj || "object" !== typeof obj || !symToString) return false;
                try {
                    symToString.call(obj);
                    return true;
                } catch (e) {}
                return false;
            }
            function isBigInt(obj) {
                if (!obj || "object" !== typeof obj || !bigIntValueOf) return false;
                try {
                    bigIntValueOf.call(obj);
                    return true;
                } catch (e) {}
                return false;
            }
            var hasOwn = Object.prototype.hasOwnProperty || function(key) {
                return key in this;
            };
            function has(obj, key) {
                return hasOwn.call(obj, key);
            }
            function toStr(obj) {
                return objectToString.call(obj);
            }
            function nameOf(f) {
                if (f.name) return f.name;
                var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
                if (m) return m[1];
                return null;
            }
            function indexOf(xs, x) {
                if (xs.indexOf) return xs.indexOf(x);
                for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
                return -1;
            }
            function isMap(x) {
                if (!mapSize || !x || "object" !== typeof x) return false;
                try {
                    mapSize.call(x);
                    try {
                        setSize.call(x);
                    } catch (s) {
                        return true;
                    }
                    return x instanceof Map;
                } catch (e) {}
                return false;
            }
            function isWeakMap(x) {
                if (!weakMapHas || !x || "object" !== typeof x) return false;
                try {
                    weakMapHas.call(x, weakMapHas);
                    try {
                        weakSetHas.call(x, weakSetHas);
                    } catch (s) {
                        return true;
                    }
                    return x instanceof WeakMap;
                } catch (e) {}
                return false;
            }
            function isWeakRef(x) {
                if (!weakRefDeref || !x || "object" !== typeof x) return false;
                try {
                    weakRefDeref.call(x);
                    return true;
                } catch (e) {}
                return false;
            }
            function isSet(x) {
                if (!setSize || !x || "object" !== typeof x) return false;
                try {
                    setSize.call(x);
                    try {
                        mapSize.call(x);
                    } catch (m) {
                        return true;
                    }
                    return x instanceof Set;
                } catch (e) {}
                return false;
            }
            function isWeakSet(x) {
                if (!weakSetHas || !x || "object" !== typeof x) return false;
                try {
                    weakSetHas.call(x, weakSetHas);
                    try {
                        weakMapHas.call(x, weakMapHas);
                    } catch (s) {
                        return true;
                    }
                    return x instanceof WeakSet;
                } catch (e) {}
                return false;
            }
            function isElement(x) {
                if (!x || "object" !== typeof x) return false;
                if ("undefined" !== typeof HTMLElement && x instanceof HTMLElement) return true;
                return "string" === typeof x.nodeName && "function" === typeof x.getAttribute;
            }
            function inspectString(str, opts) {
                if (str.length > opts.maxStringLength) {
                    var remaining = str.length - opts.maxStringLength;
                    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
                    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
                }
                var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
                return wrapQuotes(s, "single", opts);
            }
            function lowbyte(c) {
                var n = c.charCodeAt(0);
                var x = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                }[n];
                if (x) return "\\" + x;
                return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
            }
            function markBoxed(str) {
                return "Object(" + str + ")";
            }
            function weakCollectionOf(type) {
                return type + " { ? }";
            }
            function collectionOf(type, size, entries, indent) {
                var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
                return type + " (" + size + ") {" + joinedEntries + "}";
            }
            function singleLineValues(xs) {
                for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
                return true;
            }
            function getIndent(opts, depth) {
                var baseIndent;
                if ("\t" === opts.indent) baseIndent = "\t"; else if ("number" === typeof opts.indent && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " "); else return null;
                return {
                    base: baseIndent,
                    prev: $join.call(Array(depth + 1), baseIndent)
                };
            }
            function indentedJoin(xs, indent) {
                if (0 === xs.length) return "";
                var lineJoiner = "\n" + indent.prev + indent.base;
                return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
            }
            function arrObjKeys(obj, inspect) {
                var isArr = isArray(obj);
                var xs = [];
                if (isArr) {
                    xs.length = obj.length;
                    for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
                }
                var syms = "function" === typeof gOPS ? gOPS(obj) : [];
                var symMap;
                if (hasShammedSymbols) {
                    symMap = {};
                    for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
                }
                for (var key in obj) {
                    if (!has(obj, key)) continue;
                    if (isArr && String(Number(key)) === key && key < obj.length) continue;
                    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue; else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj)); else xs.push(key + ": " + inspect(obj[key], obj));
                }
                if ("function" === typeof gOPS) for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
                return xs;
            }
        },
        "../shared/browser/node_modules/object-keys/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var keysShim;
            if (!Object.keys) {
                var has = Object.prototype.hasOwnProperty;
                var toStr = Object.prototype.toString;
                var isArgs = __webpack_require__("../shared/browser/node_modules/object-keys/isArguments.js");
                var isEnumerable = Object.prototype.propertyIsEnumerable;
                var hasDontEnumBug = !isEnumerable.call({
                    toString: null
                }, "toString");
                var hasProtoEnumBug = isEnumerable.call((function() {}), "prototype");
                var dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
                var equalsConstructorPrototype = function(o) {
                    var ctor = o.constructor;
                    return ctor && ctor.prototype === o;
                };
                var excludedKeys = {
                    $applicationCache: true,
                    $console: true,
                    $external: true,
                    $frame: true,
                    $frameElement: true,
                    $frames: true,
                    $innerHeight: true,
                    $innerWidth: true,
                    $onmozfullscreenchange: true,
                    $onmozfullscreenerror: true,
                    $outerHeight: true,
                    $outerWidth: true,
                    $pageXOffset: true,
                    $pageYOffset: true,
                    $parent: true,
                    $scrollLeft: true,
                    $scrollTop: true,
                    $scrollX: true,
                    $scrollY: true,
                    $self: true,
                    $webkitIndexedDB: true,
                    $webkitStorageInfo: true,
                    $window: true
                };
                var hasAutomationEqualityBug = function() {
                    if ("undefined" === typeof window) return false;
                    for (var k in window) try {
                        if (!excludedKeys["$" + k] && has.call(window, k) && null !== window[k] && "object" === typeof window[k]) try {
                            equalsConstructorPrototype(window[k]);
                        } catch (e) {
                            return true;
                        }
                    } catch (e) {
                        return true;
                    }
                    return false;
                }();
                var equalsConstructorPrototypeIfNotBuggy = function(o) {
                    if ("undefined" === typeof window || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
                    try {
                        return equalsConstructorPrototype(o);
                    } catch (e) {
                        return false;
                    }
                };
                keysShim = function(object) {
                    var isObject = null !== object && "object" === typeof object;
                    var isFunction = "[object Function]" === toStr.call(object);
                    var isArguments = isArgs(object);
                    var isString = isObject && "[object String]" === toStr.call(object);
                    var theKeys = [];
                    if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
                    var skipProto = hasProtoEnumBug && isFunction;
                    if (isString && object.length > 0 && !has.call(object, 0)) for (var i = 0; i < object.length; ++i) theKeys.push(String(i));
                    if (isArguments && object.length > 0) for (var j = 0; j < object.length; ++j) theKeys.push(String(j)); else for (var name in object) if (!(skipProto && "prototype" === name) && has.call(object, name)) theKeys.push(String(name));
                    if (hasDontEnumBug) {
                        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                        for (var k = 0; k < dontEnums.length; ++k) if (!(skipConstructor && "constructor" === dontEnums[k]) && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
                    }
                    return theKeys;
                };
            }
            module.exports = keysShim;
        },
        "../shared/browser/node_modules/object-keys/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var slice = Array.prototype.slice;
            var isArgs = __webpack_require__("../shared/browser/node_modules/object-keys/isArguments.js");
            var origKeys = Object.keys;
            var keysShim = origKeys ? function(o) {
                return origKeys(o);
            } : __webpack_require__("../shared/browser/node_modules/object-keys/implementation.js");
            var originalKeys = Object.keys;
            keysShim.shim = function() {
                if (Object.keys) {
                    var keysWorksWithArguments = function() {
                        var args = Object.keys(arguments);
                        return args && args.length === arguments.length;
                    }(1, 2);
                    if (!keysWorksWithArguments) Object.keys = function(object) {
                        if (isArgs(object)) return originalKeys(slice.call(object));
                        return originalKeys(object);
                    };
                } else Object.keys = keysShim;
                return Object.keys || keysShim;
            };
            module.exports = keysShim;
        },
        "../shared/browser/node_modules/object-keys/isArguments.js": module => {
            "use strict";
            var toStr = Object.prototype.toString;
            module.exports = function(value) {
                var str = toStr.call(value);
                var isArgs = "[object Arguments]" === str;
                if (!isArgs) isArgs = "[object Array]" !== str && null !== value && "object" === typeof value && "number" === typeof value.length && value.length >= 0 && "[object Function]" === toStr.call(value.callee);
                return isArgs;
            };
        },
        "../shared/browser/node_modules/promise.allsettled/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var requirePromise = __webpack_require__("../shared/browser/node_modules/promise.allsettled/requirePromise.js");
            requirePromise();
            var PromiseResolve = __webpack_require__("../shared/browser/node_modules/es-abstract/2020/PromiseResolve.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2020/Type.js");
            var iterate = __webpack_require__("../shared/browser/node_modules/iterate-value/index.js");
            var map = __webpack_require__("../shared/browser/node_modules/array.prototype.map/index.js");
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var callBind = __webpack_require__("../shared/browser/node_modules/call-bind/index.js");
            var all = callBind(GetIntrinsic("%Promise.all%"));
            var reject = callBind(GetIntrinsic("%Promise.reject%"));
            module.exports = function(iterable) {
                var C = this;
                if ("Object" !== Type(C)) throw new TypeError("`this` value must be an object");
                var values = iterate(iterable);
                return all(C, map(values, (function(item) {
                    var onFulfill = function(value) {
                        return {
                            status: "fulfilled",
                            value
                        };
                    };
                    var onReject = function(reason) {
                        return {
                            status: "rejected",
                            reason
                        };
                    };
                    var itemPromise = PromiseResolve(C, item);
                    try {
                        return itemPromise.then(onFulfill, onReject);
                    } catch (e) {
                        return reject(C, e);
                    }
                })));
            };
        },
        "../shared/browser/node_modules/promise.allsettled/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var callBind = __webpack_require__("../shared/browser/node_modules/call-bind/index.js");
            var define = __webpack_require__("../shared/browser/node_modules/define-properties/index.js");
            var requirePromise = __webpack_require__("../shared/browser/node_modules/promise.allsettled/requirePromise.js");
            var implementation = __webpack_require__("../shared/browser/node_modules/promise.allsettled/implementation.js");
            var getPolyfill = __webpack_require__("../shared/browser/node_modules/promise.allsettled/polyfill.js");
            var shim = __webpack_require__("../shared/browser/node_modules/promise.allsettled/shim.js");
            requirePromise();
            var bound = callBind(getPolyfill());
            var rebindable = function(iterable) {
                return bound("undefined" === typeof this ? Promise : this, iterable);
            };
            define(rebindable, {
                getPolyfill,
                implementation,
                shim
            });
            module.exports = rebindable;
        },
        "../shared/browser/node_modules/promise.allsettled/polyfill.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var requirePromise = __webpack_require__("../shared/browser/node_modules/promise.allsettled/requirePromise.js");
            var implementation = __webpack_require__("../shared/browser/node_modules/promise.allsettled/implementation.js");
            module.exports = function() {
                requirePromise();
                return "function" === typeof Promise.allSettled ? Promise.allSettled : implementation;
            };
        },
        "../shared/browser/node_modules/promise.allsettled/requirePromise.js": module => {
            "use strict";
            module.exports = function() {
                if ("function" !== typeof Promise) throw new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
            };
        },
        "../shared/browser/node_modules/promise.allsettled/shim.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var requirePromise = __webpack_require__("../shared/browser/node_modules/promise.allsettled/requirePromise.js");
            var getPolyfill = __webpack_require__("../shared/browser/node_modules/promise.allsettled/polyfill.js");
            var define = __webpack_require__("../shared/browser/node_modules/define-properties/index.js");
            module.exports = function() {
                requirePromise();
                var polyfill = getPolyfill();
                define(Promise, {
                    allSettled: polyfill
                }, {
                    allSettled: function() {
                        return Promise.allSettled !== polyfill;
                    }
                });
                return polyfill;
            };
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
        "?22e6": () => {},
        "../shared/browser/node_modules/es-abstract/2020/IsArray.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $Array = GetIntrinsic("%Array%");
            var toStr = !$Array.isArray && __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js")("Object.prototype.toString");
            module.exports = $Array.isArray || function(argument) {
                return "[object Array]" === toStr(argument);
            };
        },
        "../shared/browser/node_modules/es-abstract/2020/PromiseResolve.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var callBind = __webpack_require__("../shared/browser/node_modules/call-bind/index.js");
            var $resolve = GetIntrinsic("%Promise.resolve%", true);
            var $PromiseResolve = $resolve && callBind($resolve);
            module.exports = function(C, x) {
                if (!$PromiseResolve) throw new SyntaxError("This environment does not support Promises.");
                return $PromiseResolve(C, x);
            };
        },
        "../shared/browser/node_modules/es-abstract/2020/Type.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var ES5Type = __webpack_require__("../shared/browser/node_modules/es-abstract/5/Type.js");
            module.exports = function(x) {
                if ("symbol" === typeof x) return "Symbol";
                if ("bigint" === typeof x) return "BigInt";
                return ES5Type(x);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ArrayCreate.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $ArrayPrototype = GetIntrinsic("%Array.prototype%");
            var $RangeError = GetIntrinsic("%RangeError%");
            var $SyntaxError = GetIntrinsic("%SyntaxError%");
            var $TypeError = GetIntrinsic("%TypeError%");
            var IsIntegralNumber = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsIntegralNumber.js");
            var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
            var $setProto = GetIntrinsic("%Object.setPrototypeOf%", true) || ([].__proto__ !== $ArrayPrototype ? null : function(O, proto) {
                O.__proto__ = proto;
                return O;
            });
            module.exports = function(length) {
                if (!IsIntegralNumber(length) || length < 0) throw new $TypeError("Assertion failed: `length` must be an integer Number >= 0");
                if (length > MAX_ARRAY_LENGTH) throw new $RangeError("length is greater than (2**32 - 1)");
                var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
                var A = [];
                if (proto !== $ArrayPrototype) {
                    if (!$setProto) throw new $SyntaxError("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
                    $setProto(A, proto);
                }
                if (0 !== length) A.length = length;
                return A;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ArraySpeciesCreate.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $species = GetIntrinsic("%Symbol.species%", true);
            var $TypeError = GetIntrinsic("%TypeError%");
            var ArrayCreate = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ArrayCreate.js");
            var Get = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Get.js");
            var IsArray = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsArray.js");
            var IsConstructor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsConstructor.js");
            var IsIntegralNumber = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsIntegralNumber.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(originalArray, length) {
                if (!IsIntegralNumber(length) || length < 0) throw new $TypeError("Assertion failed: length must be an integer >= 0");
                var isArray = IsArray(originalArray);
                if (!isArray) return ArrayCreate(length);
                var C = Get(originalArray, "constructor");
                if ($species && "Object" === Type(C)) {
                    C = Get(C, $species);
                    if (null === C) C = void 0;
                }
                if ("undefined" === typeof C) return ArrayCreate(length);
                if (!IsConstructor(C)) throw new $TypeError("C must be a constructor");
                return new C(length);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/Call.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var IsArray = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsArray.js");
            var $apply = GetIntrinsic("%Reflect.apply%", true) || callBound("%Function.prototype.apply%");
            module.exports = function(F, V) {
                var argumentsList = arguments.length > 2 ? arguments[2] : [];
                if (!IsArray(argumentsList)) throw new $TypeError("Assertion failed: optional `argumentsList`, if provided, must be a List");
                return $apply(F, V, argumentsList);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/CreateDataProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var DefineOwnProperty = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/DefineOwnProperty.js");
            var FromPropertyDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/FromPropertyDescriptor.js");
            var OrdinaryGetOwnProperty = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/OrdinaryGetOwnProperty.js");
            var IsDataDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsDataDescriptor.js");
            var IsExtensible = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsExtensible.js");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var SameValue = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/SameValue.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P, V) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var oldDesc = OrdinaryGetOwnProperty(O, P);
                var extensible = !oldDesc || IsExtensible(O);
                var immutable = oldDesc && (!oldDesc["[[Writable]]"] || !oldDesc["[[Configurable]]"]);
                if (immutable || !extensible) return false;
                return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, {
                    "[[Configurable]]": true,
                    "[[Enumerable]]": true,
                    "[[Value]]": V,
                    "[[Writable]]": true
                });
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/CreateDataPropertyOrThrow.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var CreateDataProperty = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/CreateDataProperty.js");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P, V) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var success = CreateDataProperty(O, P, V);
                if (!success) throw new $TypeError("unable to create data property");
                return success;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/DefinePropertyOrThrow.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var isPropertyDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isPropertyDescriptor.js");
            var DefineOwnProperty = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/DefineOwnProperty.js");
            var FromPropertyDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/FromPropertyDescriptor.js");
            var IsAccessorDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsAccessorDescriptor.js");
            var IsDataDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsDataDescriptor.js");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var SameValue = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/SameValue.js");
            var ToPropertyDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToPropertyDescriptor.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P, desc) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
                var Desc = isPropertyDescriptor({
                    Type,
                    IsDataDescriptor,
                    IsAccessorDescriptor
                }, desc) ? desc : ToPropertyDescriptor(desc);
                if (!isPropertyDescriptor({
                    Type,
                    IsDataDescriptor,
                    IsAccessorDescriptor
                }, Desc)) throw new $TypeError("Assertion failed: Desc is not a valid Property Descriptor");
                return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, Desc);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/FromPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var assertRecord = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/assertRecord.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(Desc) {
                if ("undefined" === typeof Desc) return Desc;
                assertRecord(Type, "Property Descriptor", "Desc", Desc);
                var obj = {};
                if ("[[Value]]" in Desc) obj.value = Desc["[[Value]]"];
                if ("[[Writable]]" in Desc) obj.writable = Desc["[[Writable]]"];
                if ("[[Get]]" in Desc) obj.get = Desc["[[Get]]"];
                if ("[[Set]]" in Desc) obj.set = Desc["[[Set]]"];
                if ("[[Enumerable]]" in Desc) obj.enumerable = Desc["[[Enumerable]]"];
                if ("[[Configurable]]" in Desc) obj.configurable = Desc["[[Configurable]]"];
                return obj;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/Get.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var inspect = __webpack_require__("../shared/browser/node_modules/object-inspect/index.js");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(P));
                return O[P];
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/HasProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: `O` must be an Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: `P` must be a Property Key");
                return P in O;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsAccessorDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var assertRecord = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/assertRecord.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(Desc) {
                if ("undefined" === typeof Desc) return false;
                assertRecord(Type, "Property Descriptor", "Desc", Desc);
                if (!has(Desc, "[[Get]]") && !has(Desc, "[[Set]]")) return false;
                return true;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsArray.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $Array = GetIntrinsic("%Array%");
            var toStr = !$Array.isArray && __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js")("Object.prototype.toString");
            module.exports = $Array.isArray || function(argument) {
                return "[object Array]" === toStr(argument);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsCallable.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            module.exports = __webpack_require__("../shared/browser/node_modules/is-callable/index.js");
        },
        "../shared/browser/node_modules/es-abstract/2021/IsConstructor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/es-abstract/GetIntrinsic.js");
            var $construct = GetIntrinsic("%Reflect.construct%", true);
            var DefinePropertyOrThrow = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/DefinePropertyOrThrow.js");
            try {
                DefinePropertyOrThrow({}, "", {
                    "[[Get]]": function() {}
                });
            } catch (e) {
                DefinePropertyOrThrow = null;
            }
            if (DefinePropertyOrThrow && $construct) {
                var isConstructorMarker = {};
                var badArrayLike = {};
                DefinePropertyOrThrow(badArrayLike, "length", {
                    "[[Get]]": function() {
                        throw isConstructorMarker;
                    },
                    "[[Enumerable]]": true
                });
                module.exports = function(argument) {
                    try {
                        $construct(argument, badArrayLike);
                    } catch (err) {
                        return err === isConstructorMarker;
                    }
                };
            } else module.exports = function(argument) {
                return "function" === typeof argument && !!argument.prototype;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsDataDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var assertRecord = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/assertRecord.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(Desc) {
                if ("undefined" === typeof Desc) return false;
                assertRecord(Type, "Property Descriptor", "Desc", Desc);
                if (!has(Desc, "[[Value]]") && !has(Desc, "[[Writable]]")) return false;
                return true;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsExtensible.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $Object = GetIntrinsic("%Object%");
            var isPrimitive = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isPrimitive.js");
            var $preventExtensions = $Object.preventExtensions;
            var $isExtensible = $Object.isExtensible;
            module.exports = $preventExtensions ? function(obj) {
                return !isPrimitive(obj) && $isExtensible(obj);
            } : function(obj) {
                return !isPrimitive(obj);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsIntegralNumber.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var abs = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/abs.js");
            var floor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/floor.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            var $isNaN = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isNaN.js");
            var $isFinite = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isFinite.js");
            module.exports = function(argument) {
                if ("Number" !== Type(argument) || $isNaN(argument) || !$isFinite(argument)) return false;
                var absValue = abs(argument);
                return floor(absValue) === absValue;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js": module => {
            "use strict";
            module.exports = function(argument) {
                return "string" === typeof argument || "symbol" === typeof argument;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/IsRegExp.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $match = GetIntrinsic("%Symbol.match%", true);
            var hasRegExpMatcher = __webpack_require__("../shared/browser/node_modules/is-regex/index.js");
            var ToBoolean = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToBoolean.js");
            module.exports = function(argument) {
                if (!argument || "object" !== typeof argument) return false;
                if ($match) {
                    var isRegExp = argument[$match];
                    if ("undefined" !== typeof isRegExp) return ToBoolean(isRegExp);
                }
                return hasRegExpMatcher(argument);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/OrdinaryGetOwnProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $gOPD = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var IsArray = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsArray.js");
            var IsPropertyKey = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsPropertyKey.js");
            var IsRegExp = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsRegExp.js");
            var ToPropertyDescriptor = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToPropertyDescriptor.js");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            module.exports = function(O, P) {
                if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: O must be an Object");
                if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: P must be a Property Key");
                if (!has(O, P)) return;
                if (!$gOPD) {
                    var arrayLength = IsArray(O) && "length" === P;
                    var regexLastIndex = IsRegExp(O) && "lastIndex" === P;
                    return {
                        "[[Configurable]]": !(arrayLength || regexLastIndex),
                        "[[Enumerable]]": $isEnumerable(O, P),
                        "[[Value]]": O[P],
                        "[[Writable]]": true
                    };
                }
                return ToPropertyDescriptor($gOPD(O, P));
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/RequireObjectCoercible.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            module.exports = __webpack_require__("../shared/browser/node_modules/es-abstract/5/CheckObjectCoercible.js");
        },
        "../shared/browser/node_modules/es-abstract/2021/SameValue.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var $isNaN = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isNaN.js");
            module.exports = function(x, y) {
                if (x === y) {
                    if (0 === x) return 1 / x === 1 / y;
                    return true;
                }
                return $isNaN(x) && $isNaN(y);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToBoolean.js": module => {
            "use strict";
            module.exports = function(value) {
                return !!value;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToNumber.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var $Number = GetIntrinsic("%Number%");
            var $RegExp = GetIntrinsic("%RegExp%");
            var $parseInteger = GetIntrinsic("%parseInt%");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var regexTester = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/regexTester.js");
            var isPrimitive = __webpack_require__("../shared/browser/node_modules/es-abstract/helpers/isPrimitive.js");
            var $strSlice = callBound("String.prototype.slice");
            var isBinary = regexTester(/^0b[01]+$/i);
            var isOctal = regexTester(/^0o[0-7]+$/i);
            var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
            var nonWS = [ "", "​", "￾" ].join("");
            var nonWSregex = new $RegExp("[" + nonWS + "]", "g");
            var hasNonWS = regexTester(nonWSregex);
            var ws = [ "\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff" ].join("");
            var trimRegex = new RegExp("(^[" + ws + "]+)|([" + ws + "]+$)", "g");
            var $replace = callBound("String.prototype.replace");
            var $trim = function(value) {
                return $replace(value, trimRegex, "");
            };
            var ToPrimitive = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToPrimitive.js");
            module.exports = function ToNumber(argument) {
                var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
                if ("symbol" === typeof value) throw new $TypeError("Cannot convert a Symbol value to a number");
                if ("bigint" === typeof value) throw new $TypeError("Conversion from 'BigInt' to 'number' is not allowed.");
                if ("string" === typeof value) {
                    if (isBinary(value)) return ToNumber($parseInteger($strSlice(value, 2), 2)); else if (isOctal(value)) return ToNumber($parseInteger($strSlice(value, 2), 8)); else if (hasNonWS(value) || isInvalidHexLiteral(value)) return NaN;
                    var trimmed = $trim(value);
                    if (trimmed !== value) return ToNumber(trimmed);
                }
                return $Number(value);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $Object = GetIntrinsic("%Object%");
            var RequireObjectCoercible = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/RequireObjectCoercible.js");
            module.exports = function(value) {
                RequireObjectCoercible(value);
                return $Object(value);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToPrimitive.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toPrimitive = __webpack_require__("../shared/browser/node_modules/es-to-primitive/es2015.js");
            module.exports = function(input) {
                if (arguments.length > 1) return toPrimitive(input, arguments[1]);
                return toPrimitive(input);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var Type = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/Type.js");
            var ToBoolean = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToBoolean.js");
            var IsCallable = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/IsCallable.js");
            module.exports = function(Obj) {
                if ("Object" !== Type(Obj)) throw new $TypeError("ToPropertyDescriptor requires an object");
                var desc = {};
                if (has(Obj, "enumerable")) desc["[[Enumerable]]"] = ToBoolean(Obj.enumerable);
                if (has(Obj, "configurable")) desc["[[Configurable]]"] = ToBoolean(Obj.configurable);
                if (has(Obj, "value")) desc["[[Value]]"] = Obj.value;
                if (has(Obj, "writable")) desc["[[Writable]]"] = ToBoolean(Obj.writable);
                if (has(Obj, "get")) {
                    var getter = Obj.get;
                    if ("undefined" !== typeof getter && !IsCallable(getter)) throw new $TypeError("getter must be a function");
                    desc["[[Get]]"] = getter;
                }
                if (has(Obj, "set")) {
                    var setter = Obj.set;
                    if ("undefined" !== typeof setter && !IsCallable(setter)) throw new $TypeError("setter must be a function");
                    desc["[[Set]]"] = setter;
                }
                if ((has(desc, "[[Get]]") || has(desc, "[[Set]]")) && (has(desc, "[[Value]]") || has(desc, "[[Writable]]"))) throw new $TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return desc;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToString.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $String = GetIntrinsic("%String%");
            var $TypeError = GetIntrinsic("%TypeError%");
            module.exports = function(argument) {
                if ("symbol" === typeof argument) throw new $TypeError("Cannot convert a Symbol value to a string");
                return $String(argument);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/ToUint32.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var ToNumber = __webpack_require__("../shared/browser/node_modules/es-abstract/2021/ToNumber.js");
            module.exports = function(x) {
                return ToNumber(x) >>> 0;
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/Type.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var ES5Type = __webpack_require__("../shared/browser/node_modules/es-abstract/5/Type.js");
            module.exports = function(x) {
                if ("symbol" === typeof x) return "Symbol";
                if ("bigint" === typeof x) return "BigInt";
                return ES5Type(x);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/abs.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $abs = GetIntrinsic("%Math.abs%");
            module.exports = function(x) {
                return $abs(x);
            };
        },
        "../shared/browser/node_modules/es-abstract/2021/floor.js": module => {
            "use strict";
            var $floor = Math.floor;
            module.exports = function(x) {
                return $floor(x);
            };
        },
        "../shared/browser/node_modules/es-abstract/5/CheckObjectCoercible.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            module.exports = function(value, optMessage) {
                if (null == value) throw new $TypeError(optMessage || "Cannot call method on " + value);
                return value;
            };
        },
        "../shared/browser/node_modules/es-abstract/5/Type.js": module => {
            "use strict";
            module.exports = function(x) {
                if (null === x) return "Null";
                if ("undefined" === typeof x) return "Undefined";
                if ("function" === typeof x || "object" === typeof x) return "Object";
                if ("number" === typeof x) return "Number";
                if ("boolean" === typeof x) return "Boolean";
                if ("string" === typeof x) return "String";
            };
        },
        "../shared/browser/node_modules/es-abstract/GetIntrinsic.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            module.exports = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
        },
        "../shared/browser/node_modules/es-abstract/helpers/DefineOwnProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
            if ($defineProperty) try {
                $defineProperty({}, "a", {
                    value: 1
                });
            } catch (e) {
                $defineProperty = null;
            }
            var hasArrayLengthDefineBug = Object.defineProperty && 0 === Object.defineProperty([], "length", {
                value: 1
            }).length;
            var isArray = hasArrayLengthDefineBug && __webpack_require__("../shared/browser/node_modules/es-abstract/2020/IsArray.js");
            var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
            var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
            module.exports = function(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
                if (!$defineProperty) {
                    if (!IsDataDescriptor(desc)) return false;
                    if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) return false;
                    if (P in O && $isEnumerable(O, P) !== !!desc["[[Enumerable]]"]) return false;
                    var V = desc["[[Value]]"];
                    O[P] = V;
                    return SameValue(O[P], V);
                }
                if (hasArrayLengthDefineBug && "length" === P && "[[Value]]" in desc && isArray(O) && O.length !== desc["[[Value]]"]) {
                    O.length = desc["[[Value]]"];
                    return O.length === desc["[[Value]]"];
                }
                $defineProperty(O, P, FromPropertyDescriptor(desc));
                return true;
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/assertRecord.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            var $SyntaxError = GetIntrinsic("%SyntaxError%");
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var predicates = {
                "Property Descriptor": function(Type, Desc) {
                    if ("Object" !== Type(Desc)) return false;
                    var allowed = {
                        "[[Configurable]]": true,
                        "[[Enumerable]]": true,
                        "[[Get]]": true,
                        "[[Set]]": true,
                        "[[Value]]": true,
                        "[[Writable]]": true
                    };
                    for (var key in Desc) if (has(Desc, key) && !allowed[key]) return false;
                    var isData = has(Desc, "[[Value]]");
                    var IsAccessor = has(Desc, "[[Get]]") || has(Desc, "[[Set]]");
                    if (isData && IsAccessor) throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
                    return true;
                }
            };
            module.exports = function(Type, recordType, argumentName, value) {
                var predicate = predicates[recordType];
                if ("function" !== typeof predicate) throw new $SyntaxError("unknown record type: " + recordType);
                if (!predicate(Type, value)) throw new $TypeError(argumentName + " must be a " + recordType);
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
            if ($gOPD) try {
                $gOPD([], "length");
            } catch (e) {
                $gOPD = null;
            }
            module.exports = $gOPD;
        },
        "../shared/browser/node_modules/es-abstract/helpers/isFinite.js": module => {
            "use strict";
            var $isNaN = Number.isNaN || function(a) {
                return a !== a;
            };
            module.exports = Number.isFinite || function(x) {
                return "number" === typeof x && !$isNaN(x) && x !== 1 / 0 && x !== -1 / 0;
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/isNaN.js": module => {
            "use strict";
            module.exports = Number.isNaN || function(a) {
                return a !== a;
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/isPrimitive.js": module => {
            "use strict";
            module.exports = function(value) {
                return null === value || "function" !== typeof value && "object" !== typeof value;
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/isPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var has = __webpack_require__("../shared/browser/node_modules/has/src/index.js");
            var $TypeError = GetIntrinsic("%TypeError%");
            module.exports = function(ES, Desc) {
                if ("Object" !== ES.Type(Desc)) return false;
                var allowed = {
                    "[[Configurable]]": true,
                    "[[Enumerable]]": true,
                    "[[Get]]": true,
                    "[[Set]]": true,
                    "[[Value]]": true,
                    "[[Writable]]": true
                };
                for (var key in Desc) if (has(Desc, key) && !allowed[key]) return false;
                if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) throw new $TypeError("Property Descriptors may not be both accessor and data descriptors");
                return true;
            };
        },
        "../shared/browser/node_modules/es-abstract/helpers/regexTester.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
            var $test = GetIntrinsic("RegExp.prototype.test");
            var callBind = __webpack_require__("../shared/browser/node_modules/call-bind/index.js");
            module.exports = function(regex) {
                return callBind($test, regex);
            };
        },
        "../shared/browser/node_modules/es-get-iterator/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var isArguments = __webpack_require__("../shared/browser/node_modules/is-arguments/index.js");
            if (__webpack_require__("../shared/browser/node_modules/has-symbols/index.js")() || __webpack_require__("../shared/browser/node_modules/has-symbols/shams.js")()) {
                var $iterator = Symbol.iterator;
                module.exports = function(iterable) {
                    if (null != iterable && "undefined" !== typeof iterable[$iterator]) return iterable[$iterator]();
                    if (isArguments(iterable)) return Array.prototype[$iterator].call(iterable);
                };
            } else {
                var isArray = __webpack_require__("../shared/browser/node_modules/isarray/index.js");
                var isString = __webpack_require__("../shared/browser/node_modules/is-string/index.js");
                var GetIntrinsic = __webpack_require__("../shared/browser/node_modules/get-intrinsic/index.js");
                var $Map = GetIntrinsic("%Map%", true);
                var $Set = GetIntrinsic("%Set%", true);
                var callBound = __webpack_require__("../shared/browser/node_modules/call-bind/callBound.js");
                var $arrayPush = callBound("Array.prototype.push");
                var $charCodeAt = callBound("String.prototype.charCodeAt");
                var $stringSlice = callBound("String.prototype.slice");
                var advanceStringIndex = function(S, index) {
                    var length = S.length;
                    if (index + 1 >= length) return index + 1;
                    var first = $charCodeAt(S, index);
                    if (first < 55296 || first > 56319) return index + 1;
                    var second = $charCodeAt(S, index + 1);
                    if (second < 56320 || second > 57343) return index + 1;
                    return index + 2;
                };
                var getArrayIterator = function(arraylike) {
                    var i = 0;
                    return {
                        next: function() {
                            var done = i >= arraylike.length;
                            var value;
                            if (!done) {
                                value = arraylike[i];
                                i += 1;
                            }
                            return {
                                done,
                                value
                            };
                        }
                    };
                };
                var getNonCollectionIterator = function(iterable, noPrimordialCollections) {
                    if (isArray(iterable) || isArguments(iterable)) return getArrayIterator(iterable);
                    if (isString(iterable)) {
                        var i = 0;
                        return {
                            next: function() {
                                var nextIndex = advanceStringIndex(iterable, i);
                                var value = $stringSlice(iterable, i, nextIndex);
                                i = nextIndex;
                                return {
                                    done: nextIndex > iterable.length,
                                    value
                                };
                            }
                        };
                    }
                    if (noPrimordialCollections && "undefined" !== typeof iterable["_es6-shim iterator_"]) return iterable["_es6-shim iterator_"]();
                };
                if (!$Map && !$Set) module.exports = function(iterable) {
                    if (null != iterable) return getNonCollectionIterator(iterable, true);
                }; else {
                    var isMap = __webpack_require__("../shared/browser/node_modules/is-map/index.js");
                    var isSet = __webpack_require__("../shared/browser/node_modules/is-set/index.js");
                    var $mapForEach = callBound("Map.prototype.forEach", true);
                    var $setForEach = callBound("Set.prototype.forEach", true);
                    if ("undefined" === typeof process || !process.versions || !process.versions.node) {
                        var $mapIterator = callBound("Map.prototype.iterator", true);
                        var $setIterator = callBound("Set.prototype.iterator", true);
                        var getStopIterationIterator = function(iterator) {
                            var done = false;
                            return {
                                next: function() {
                                    try {
                                        return {
                                            done,
                                            value: done ? void 0 : iterator.next()
                                        };
                                    } catch (e) {
                                        done = true;
                                        return {
                                            done: true,
                                            value: void 0
                                        };
                                    }
                                }
                            };
                        };
                    }
                    var $mapAtAtIterator = callBound("Map.prototype.@@iterator", true) || callBound("Map.prototype._es6-shim iterator_", true);
                    var $setAtAtIterator = callBound("Set.prototype.@@iterator", true) || callBound("Set.prototype._es6-shim iterator_", true);
                    var getCollectionIterator = function(iterable) {
                        if (isMap(iterable)) {
                            if ($mapIterator) return getStopIterationIterator($mapIterator(iterable));
                            if ($mapAtAtIterator) return $mapAtAtIterator(iterable);
                            if ($mapForEach) {
                                var entries = [];
                                $mapForEach(iterable, (function(v, k) {
                                    $arrayPush(entries, [ k, v ]);
                                }));
                                return getArrayIterator(entries);
                            }
                        }
                        if (isSet(iterable)) {
                            if ($setIterator) return getStopIterationIterator($setIterator(iterable));
                            if ($setAtAtIterator) return $setAtAtIterator(iterable);
                            if ($setForEach) {
                                var values = [];
                                $setForEach(iterable, (function(v) {
                                    $arrayPush(values, v);
                                }));
                                return getArrayIterator(values);
                            }
                        }
                    };
                    module.exports = function(iterable) {
                        return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
                    };
                }
            }
        },
        "../shared/browser/node_modules/iterate-value/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var getIterator = __webpack_require__("../shared/browser/node_modules/es-get-iterator/index.js");
            var $TypeError = TypeError;
            var iterate = __webpack_require__("../shared/browser/node_modules/iterate-iterator/index.js");
            module.exports = function(iterable) {
                var iterator = getIterator(iterable);
                if (!iterator) throw new $TypeError("non-iterable value provided");
                if (arguments.length > 1) return iterate(iterator, arguments[1]);
                return iterate(iterator);
            };
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
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
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
        const tabTypeToReport = {
            center: reportClickCenterTab,
            message: reportClickMessageTab,
            orders: reportClickOrderTab
        };
        $((() => {
            const isLogin = SL_State.get("request.is_login");
            if (!isLogin) toSignOut().then((() => {
                window.location.href = url_SIGN_IN;
            }));
            const $center = $("#user-center");
            reportThirdPartPageView();
            $center.find(".signout-link").click((() => {
                toSignOut().then((() => {
                    reportSignOut();
                    window.location.href = url_SIGN_IN;
                }));
            }));
            $center.find(".navbar").on("click", ".navbar__item", (e => {
                e.preventDefault();
                const $target = $(e.currentTarget);
                const type = $target.data("type");
                const href = $target.attr("href");
                tabTypeToReport[type] && tabTypeToReport[type]();
                window.location.href = href;
            }));
        }));
        var dayjs_min = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
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
                this.$modal = $(`#${this.id}`);
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
                this.$container = $("#customer-message-list");
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
                    const src = $(e.currentTarget).find("img").attr("src");
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
            const regExp = new RegExp(/\{\{([^{}]+)\}\}/g);
            return nullishCoalescingOperator(get_func(value, "replace").exec(regExp, ((...args) => nullishCoalescingOperator(syntax_patch_get(hash, args[1]), args[0]))), path);
        }
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
                this.$input = $(`#${this.id}`).find('input[type="file"]');
                this.$loading = $(`#${this.id}`).find(".sl-upload__loading");
                this.$picIcon = $(`#${this.id}`).find(".sl-upload__input");
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
                        toast.init({
                            content: t("tips.max-upload-image", {
                                max: maxNum
                            })
                        });
                        e.target.value = "";
                        return;
                    }
                    if (maxSize && files.some((file => file.size > 1024 * maxSize * 1024))) {
                        toast.init({
                            content: t("tips.image-size-less-than", {
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
                this.$container = $("#customer-message-input");
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
        $((function() {
            new message;
        }));
    })();
})();