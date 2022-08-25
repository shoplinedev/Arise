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
        "../shared/browser/node_modules/@yy/sl-pod-preview-image/lib/index.umd.js": module => {
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
        "../shared/browser/node_modules/lodash/_baseFindIndex.js": module => {
            function baseFindIndex(array, predicate, fromIndex, fromRight) {
                var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
                while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
                return -1;
            }
            module.exports = baseFindIndex;
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
        "use strict";
        var index_umd = __webpack_require__("../shared/browser/node_modules/@yy/sl-pod-preview-image/lib/index.umd.js");
        var index_umd_default = __webpack_require__.n(index_umd);
        var round = __webpack_require__("../shared/browser/node_modules/lodash/round.js");
        var round_default = __webpack_require__.n(round);
        var findIndex = __webpack_require__("../shared/browser/node_modules/lodash/findIndex.js");
        var findIndex_default = __webpack_require__.n(findIndex);
        var find = __webpack_require__("../shared/browser/node_modules/lodash/find.js");
        var find_default = __webpack_require__.n(find);
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
        const storeCurrency = SL_State.get("storeInfo.currency");
        const storeLang = SL_State.get("request.locale");
        const currencyRates = SL_State.get("currencyRates");
        const defaultCurrency = "CNY";
        const defaultCurrencyDigit = 2;
        const defaultPresentDigit = 2;
        const defaultLang = "zh-hans-cn";
        const digitsMap = new Map;
        const formatUtilMap = new Map;
        const symbolsMap = new Map;
        const hardcoreConfigs = HARD_CODE_CONFIG;
        const hardcodeDigit = code => {
            const hardcoreConfig = hardcoreConfigs.find((config => config.code === code));
            return {
                minimumFractionDigits: nullishCoalescingOperator(hardcoreConfig && hardcoreConfig.digit, void 0),
                maximumFractionDigits: nullishCoalescingOperator(hardcoreConfig && hardcoreConfig.digit, void 0)
            };
        };
        const hardCodeCurrencyDisplay = code => nullishCoalescingOperator(CURRENCY_DISPLAY_HARDCODE[code], {});
        const hardCodeSymbol = (code, lang) => {
            const newLang = SYMBOL_HARD_CODE_CONFIG[code] && SYMBOL_HARD_CODE_CONFIG[code][lang];
            return nullishCoalescingOperator(newLang, lang);
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
            return value * nullishCoalescingOperator(dataSourceTo, 1) / nullishCoalescingOperator(dataSourceFrom, 1);
        };
        const convertFormat = (value, options = {}) => {
            const fromDefault = SL_State.get("storeInfo.currency");
            const toDefault = SL_State.get("currencyCode");
            const locale = SL_State.get("request.locale");
            const {from = fromDefault, to = toDefault, lang = locale} = options;
            const data = SL_State.get("currencyRates");
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
                const findSymbol = find_default()(format.formatToParts(), [ "type", "currency" ]);
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
            if (format.formatToParts) order = findIndex_default()(format.formatToParts(), [ "type", "currency" ]);
            return order > 0 ? "suffix" : "prefix";
        };
        const unformatNumber = (value, decimalDigits = defaultCurrencyDigit) => {
            const v = round_default()(("number" !== typeof value ? Number(value) : value) * 10 ** decimalDigits, 0);
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
                const findDecimal = find_default()(format.formatToParts(1), [ "type", "decimal" ]);
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
                const findGroup = find_default()(format.formatToParts(1e4), [ "type", "group" ]);
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
        const utils_currency = {
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
        function _classCallCheck(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        function _createClass(e, n, t) {
            return n && _defineProperties(e.prototype, n), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
        }
        function _defineProperty(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        function styleInject(e, n) {
            var t, i;
            n = (n = void 0 === n ? {} : n).insertAt;
            e && "undefined" != typeof document && (t = document.head || document.getElementsByTagName("head")[0], 
            (i = document.createElement("style")).type = "text/css", "top" === n && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i), 
            i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)));
        }
        var instance$1, instance, css_248z$3 = ".sl-popup-modal__mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  left: 0;\n  top: 0;\n  background: rgba(115, 115, 115, 0.6);\n  display: none;\n  transition: all 0.6s ease-in-out;\n}\n", DEFAULT_CLASS_NAME = (styleInject(css_248z$3), 
        "sl-popup-modal__mask"), Mask = function() {
            function n() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                _classCallCheck(this, n), this.options = e, this.$el = this.createEl();
            }
            return _createClass(n, [ {
                key: "createEl",
                value: function() {
                    var e = this.maskEl, n = (null != (n = this.options.className) ? n : []).slice();
                    return e.className = "", n.push(DEFAULT_CLASS_NAME), e.className = n.join(" "), 
                    e;
                }
            }, {
                key: "maskEl",
                get: function() {
                    return document.querySelector(DEFAULT_CLASS_NAME) || document.createElement("div");
                }
            }, {
                key: "maskContainer",
                get: function() {
                    return this.$el;
                }
            } ]), n;
        }(), css_248z$2 = ".sl-popup-modal__container {\n  box-sizing: border-box;\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 67px;\n  bottom: 0;\n  background-color: #fff;\n  padding-bottom: 20px;\n}\n\n.sl-popup-modal__container.slide-down-in {\n  -webkit-animation: slide-down-in 0.5s ease-in-out;\n  -moz-animation: slide-down-in 0.5s ease-in-out;\n  -o-animation: slide-down-in 0.5s ease-in-out;\n  animation: slide-down-in 0.5s ease-in-out;\n}\n\n.sl-popup-modal__container.slide-down-out {\n  -webkit-animation: slide-down-out 0.5s ease-in-out;\n  -moz-animation: slide-down-out 0.5s ease-in-out;\n  -o-animation: slide-down-out 0.5s ease-in-out;\n  animation: slide-down-out 0.5s ease-in-out;\n}\n\n.sl-popup-modal__header {\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.sl-popup-modal__content {\n  height: calc(100% - 64px - 20px);\n  overflow: auto;\n  padding: 0 20px;\n}\n\n.sl-popup-modal__close-icon {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sl-popup-modal__close-icon img {\n  width: 24px;\n  height: 24px;\n}\n\n@keyframes slide-down-in {\n  0% {\n    transform: translate(0px, 100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0px, 0%);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-down-out {\n  0% {\n    transform: translate(0px, 0%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0px, 100%);\n    opacity: 0;\n  }\n}\n", DEFAULT_CONTAINER_CLASS_NAME = (styleInject(css_248z$2), 
        "sl-popup-modal__container"), DEFAULT_HEADER_CLASS_NAME = "sl-popup-modal__header", DEFAULT_CONTENT_CLASS_NAME = "sl-popup-modal__content", DEFAULT_CLOSE_ICON_CLASS_NAME = "sl-popup-modal__close-icon", PopupModal = function() {
            function n() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                _classCallCheck(this, n), this.options = e, this.mask = new Mask, this.$containerEl = this.createModal(), 
                document.body.appendChild(this.maskContainer);
            }
            return _createClass(n, [ {
                key: "render",
                value: function() {
                    this.options = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, 
                    this.modalContainer.innerHTML = "";
                    var e = this.renderHeader(), n = this.renderContent();
                    this.modalContainer.appendChild(e), this.modalContainer.appendChild(n);
                }
            }, {
                key: "show",
                value: function() {
                    this.maskContainer.style.display = "block", this.maskContainer.style.opacity = "1", 
                    this.maskContainer.style.zIndex = "9999", this.$containerEl.className += " slide-down-in";
                }
            }, {
                key: "hide",
                value: function() {
                    var e = this;
                    this.$containerEl.className = this.$containerEl.className.split(" ").filter((function(e) {
                        return "slide-down-in" !== e;
                    })).concat([ "slide-down-out" ]).join(" "), setTimeout((function() {
                        e.maskContainer.style.display = "none", e.maskContainer.style.opacity = "0", e.$containerEl.className = e.$containerEl.className.split(" ").filter((function(e) {
                            return "slide-down-out" !== e;
                        })).join(" ");
                    }), 400);
                }
            }, {
                key: "createModal",
                value: function() {
                    var e = document.createElement("div"), n = (null != (n = this.options.className) ? n : []).slice(), t = (n = (e.className = "", 
                    n.push(DEFAULT_CONTAINER_CLASS_NAME), e.className = n.join(" "), this.renderHeader()), 
                    this.renderContent());
                    return e.appendChild(n), e.appendChild(t), this.maskContainer.appendChild(e), e;
                }
            }, {
                key: "renderHeader",
                value: function() {
                    var e = this.modalHeaderEl, n = (e.innerHTML = "", e.className = "", e.className = DEFAULT_HEADER_CLASS_NAME, 
                    this.renderCloseIcon());
                    n = (e.appendChild(n), this.options.renderHeader);
                    return n && (n = n(), e.appendChild(n)), e;
                }
            }, {
                key: "renderCloseIcon",
                value: function() {
                    var n = this, e = document.createElement("div"), t = document.createElement("span");
                    return e.className = DEFAULT_CLOSE_ICON_CLASS_NAME, t.innerHTML += '\n      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.1998 4.80078L4.7998 19.2008" stroke="currentColor" stroke-width="1.5"/>\n        <path d="M4.7998 4.80117L19.1998 19.2012" stroke="currentColor" stroke-width="1.5"/>\n      </svg>\n    ', 
                    e.addEventListener("click", (function(e) {
                        e.stopPropagation(), n.options.onClose && n.options.onClose(), n.hide();
                    })), e.appendChild(t), e;
                }
            }, {
                key: "renderContent",
                value: function() {
                    var e = this.modalContentEl, n = (e.innerHTML = "", e.className = "", e.className = DEFAULT_CONTENT_CLASS_NAME, 
                    this.options.renderContent);
                    return n && (n = n(), e.appendChild(n)), e;
                }
            }, {
                key: "modalContainer",
                get: function() {
                    return this.$containerEl;
                }
            }, {
                key: "modalContentEl",
                get: function() {
                    return document.querySelector(DEFAULT_CONTENT_CLASS_NAME) || document.createElement("div");
                }
            }, {
                key: "modalHeaderEl",
                get: function() {
                    return document.querySelector(DEFAULT_HEADER_CLASS_NAME) || document.createElement("div");
                }
            }, {
                key: "maskContainer",
                get: function() {
                    return this.mask.maskContainer;
                }
            } ]), n;
        }(), css_248z$1 = ".__preview-voucher-img-box {\n  max-width: 100%;\n  background: #e7eaef;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.__preview-voucher-img-box img {\n  object-fit: cover;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.__preview-voucher-data-box {\n  margin-top: 20px;\n}\n\n.__preview-voucher-data-box-item + .__preview-voucher-data-box-item {\n  margin-top: 20px;\n}\n\n.__preview-voucher-data-box .__preview-voucher-data-box-item-label {\n  color: #7a8499;\n}\n.__preview-voucher-data-box .__preview-voucher-data-box-item-value {\n  margin-top: 4px;\n}\n", PreviewVoucherMobile = (styleInject(css_248z$1), 
        function() {
            function i(e) {
                _classCallCheck(this, i), _defineProperty(this, "options", {
                    imgUrls: [],
                    data: []
                }), this.options = e;
                e = this.options;
                var n = e.className, t = e.onClose;
                e = e.renderHeader;
                this.modal = new PopupModal({
                    className: n,
                    onClose: t,
                    renderHeader: e,
                    renderContent: this.renderContent.bind(this)
                });
            }
            return _createClass(i, [ {
                key: "render",
                value: function(e) {
                    this.options = e;
                    e = this.options;
                    var n = e.className, t = e.onClose;
                    e = e.renderHeader;
                    this.modal.render({
                        className: n,
                        onClose: t,
                        renderHeader: e,
                        renderContent: this.renderContent.bind(this)
                    });
                }
            }, {
                key: "renderContent",
                value: function() {
                    var e = document.createDocumentFragment();
                    return e.appendChild(this.renderImage(this.options.imgUrls)), e.appendChild(this.renderData(this.options.data)), 
                    e;
                }
            }, {
                key: "renderData",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], o = document.createElement("div");
                    return o.className = "__preview-voucher-data-box", e.forEach((function(e) {
                        var n = document.createElement("div"), t = (n.className = "__preview-voucher-data-box-item", 
                        document.createElement("div")), i = (t.className = "__preview-voucher-data-box-item-label", 
                        t.innerHTML = e.label, document.createElement("div"));
                        i.className = "__preview-voucher-data-box-item-value", i.innerHTML = e.value, n.appendChild(t), 
                        n.appendChild(i), o.appendChild(n);
                    })), o;
                }
            }, {
                key: "renderImage",
                value: function(e) {
                    var n = document.createElement("div"), t = (n.className = "__preview-voucher-img-box", 
                    new Image);
                    return t.className = "__preview-voucher-image", t.src = null != (e = e[0]) ? e : "", 
                    n.appendChild(t), n;
                }
            }, {
                key: "show",
                value: function() {
                    this.modal && this.modal.show();
                }
            }, {
                key: "hide",
                value: function() {
                    this.modal && this.modal.hide();
                }
            } ]), i;
        }()), createMobilePreviewVoucher = function(e) {
            return instance$1 ? instance$1.render(e) : instance$1 = new PreviewVoucherMobile(e), 
            instance$1;
        }, css_248z = "#__preview-voucher-container {\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-touch-action: none;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  user-select: none;\n  z-index: 9999;\n}\n\n#__preview-voucher-container .__preview-voucher-mask {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  height: 100%;\n  background-color: #00000073;\n}\n\n#__preview-voucher-container .__preview-voucher-wrapper {\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  position: absolute;\n  width: 616px;\n  top: 50%;\n  z-index: 9999;\n  padding: 24px;\n  border-radius: 6px;\n}\n\n#__preview-voucher-container .__preview-voucher-body {\n  display: flex;\n  flex: 1;\n}\n\n#__preview-voucher-container .__preview-voucher-img-box {\n  width: 300px;\n  height: 300px;\n  background: #e7eaef;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#__preview-voucher-container .__preview-voucher-img-box img {\n  object-fit: cover;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n#__preview-voucher-container .__preview-voucher-data-box {\n  margin-left: 20px;\n}\n\n#__preview-voucher-container\n  .__preview-voucher-data-box\n  .__preview-voucher-data-box-item:not(:first-child) {\n  margin-top: 20px;\n}\n\n#__preview-voucher-container\n  .__preview-voucher-data-box\n  .__preview-voucher-data-box-item-label {\n  color: #7a8499;\n}\n#__preview-voucher-container\n  .__preview-voucher-data-box\n  .__preview-voucher-data-box-item-value {\n  margin-top: 4px;\n}\n\n#__preview-voucher-container .__preview-voucher-footer {\n  text-align: right;\n  margin-top: 16px;\n}\n\n#__preview-voucher-container .__preview-voucher-footer button {\n  border: none;\n  background: rgb(39, 110, 175);\n  min-width: 124px;\n  padding: 0px 10px;\n  height: 40px;\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#__preview-voucher-container .__preview-voucher-footer button:hover {\n  opacity: 0.8;\n}\n\n@media screen and (max-width: 750px) {\n  #__preview-voucher-container {\n    overflow: auto;\n  }\n  #__preview-voucher-container .__preview-voucher-wrapper {\n    width: 80%;\n    height: 506px;\n    display: flex;\n    flex-direction: column;\n  }\n  #__preview-voucher-container .__preview-voucher-body {\n    flex-direction: column;\n    height: 402px;\n  }\n  #__preview-voucher-container .__preview-voucher-img-box {\n    background: #fff;\n    width: 100%;\n    max-height: 200px;\n    flex-shrink: 0;\n  }\n  #__preview-voucher-container .__preview-voucher-footer {\n    text-align: center;\n  }\n  #__preview-voucher-container .__preview-voucher-data-box {\n    margin: 20px 0px 0px 0px;\n    overflow: auto;\n    word-break: break-word;\n    flex: 1;\n  }\n}\n", PreviewVoucher = (styleInject(css_248z), 
        function() {
            function n() {
                var e = this;
                _classCallCheck(this, n), this.$container = document.createElement("div"), this.$container.id = "__preview-voucher-container", 
                this.$container.style.display = "none", this.$mask = document.createElement("div"), 
                this.$mask.className = "__preview-voucher-mask", this.$container.appendChild(this.$mask), 
                this.$mask.addEventListener("click", (function() {
                    e.hide();
                })), this.$wrapper = document.createElement("div"), this.$wrapper.className = "__preview-voucher-wrapper", 
                this.$container.appendChild(this.$wrapper), this.$body = document.createElement("div"), 
                this.$body.className = "__preview-voucher-body", this.$imgBox = document.createElement("div"), 
                this.$imgBox.className = "__preview-voucher-img-box", this.$dataBox = document.createElement("div"), 
                this.$dataBox.className = "__preview-voucher-data-box", this.$footer = document.createElement("div"), 
                this.$footer.className = "__preview-voucher-footer", this.$body.appendChild(this.$imgBox), 
                this.$body.appendChild(this.$dataBox), this.$wrapper.appendChild(this.$body), this.$wrapper.appendChild(this.$footer), 
                document.body.appendChild(this.$container);
            }
            return _createClass(n, [ {
                key: "renderData",
                value: function(e) {
                    var o = this.$dataBox;
                    o && e && (o.innerHTML = "", (e || []).forEach((function(e) {
                        var n = document.createElement("div"), t = (n.className = "__preview-voucher-data-box-item", 
                        document.createElement("div")), i = (t.className = "__preview-voucher-data-box-item-label", 
                        t.innerHTML = e.label, document.createElement("div"));
                        i.className = "__preview-voucher-data-box-item-value", i.innerHTML = e.value, n.appendChild(t), 
                        n.appendChild(i), o.appendChild(n);
                    })));
                }
            }, {
                key: "renderImage",
                value: function(e) {
                    var n, t = this.$imgBox;
                    t && (t.innerHTML = "", (n = new Image).className = "__preview-voucher-image", n.src = null != (e = e[0]) ? e : "", 
                    t.appendChild(n));
                }
            }, {
                key: "show",
                value: function() {
                    var e = this.$container;
                    e && (e.style.display = "block");
                }
            }, {
                key: "hide",
                value: function() {
                    var n = this;
                    setTimeout((function() {
                        var e = n.$container;
                        e && (e.style.display = "none");
                    }), 0);
                }
            }, {
                key: "render",
                value: function(e) {
                    e = e || {};
                    var n = e.imgUrls, t = e.data, i = e.okText;
                    e = e.onOk;
                    this.$container && (this.renderData(t), this.renderImage(null != n ? n : []), this.renderFooter({
                        okText: i,
                        onOk: e
                    }));
                }
            }, {
                key: "renderFooter",
                value: function(e) {
                    var n, t = this, i = (e = e || {}, e.okText), o = (i = void 0 === i ? "" : i, e.onOk);
                    e = this.$footer;
                    e && (e.innerHTML = "", i && ((n = document.createElement("button")).innerHTML = i, 
                    n.addEventListener("click", (function() {
                        t.hide(), "function" == typeof o && o();
                    })), e.appendChild(n)));
                }
            } ]), n;
        }()), createDesktopPreviewVoucher = function(e) {
            return (instance = instance || new PreviewVoucher).render(e), instance;
        }, main = {
            createMobilePreviewVoucher,
            createDesktopPreviewVoucher
        };
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
        var index_es = __webpack_require__("../shared/browser/node_modules/@sl/logger/lib/index.es.js");
        var lib_index_es = __webpack_require__("../shared/browser/node_modules/@sl/logger-sentry/lib/index.es.js");
        const newLogger = index_es["default"].pipeTransport(lib_index_es["default"]);
        const sentry = newLogger;
        const Owner = {
            OrderDetail: "order.orderDetail"
        };
        const Action = {
            Init: "init",
            Click: "click",
            Upload: "upload",
            Change: "change",
            Preview: "preview"
        };
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
        const customComponentMap = {
            orderDetail: "156"
        };
        function reportPageView(eventId, params = {}) {
            reportEvent(eventId, {
                event_name: eventName.pageView,
                ...params
            });
        }
        function reportThirdPartPageView() {
            window.SL_EventBus.emit("global:thirdPartReport", {
                FBPixel: [ [ "track", "PageView", {}, {
                    eventID: window.__PRELOAD_STATE__ && window.__PRELOAD_STATE__.serverEventId
                } ] ],
                GAAds: [ [ "event", "conversion", null ] ],
                GA: [ [ "event", "page_view", {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search
                } ] ],
                GA4: [ [ "event", "page_view", {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search
                } ] ]
            });
        }
        var dayjs_min = __webpack_require__("../shared/browser/node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        function isObject(arg) {
            return "object" === typeof arg && null !== arg;
        }
        var AddressInfoKeys;
        (function(AddressInfoKeys) {
            AddressInfoKeys["company"] = "company";
            AddressInfoKeys["country"] = "country";
            AddressInfoKeys["province"] = "province";
            AddressInfoKeys["countryCode"] = "countryCode";
            AddressInfoKeys["city"] = "city";
            AddressInfoKeys["district"] = "district";
            AddressInfoKeys["name"] = "name";
            AddressInfoKeys["firstName"] = "firstName";
            AddressInfoKeys["lastName"] = "lastName";
            AddressInfoKeys["address"] = "address";
            AddressInfoKeys["address2"] = "address2";
            AddressInfoKeys["postcode"] = "postcode";
            AddressInfoKeys["mobile"] = "mobile";
        })(AddressInfoKeys || (AddressInfoKeys = {}));
        var Display;
        (function(Display) {
            Display[Display["1D"] = 1] = "1D";
            Display[Display["2D"] = 2] = "2D";
        })(Display || (Display = {}));
        const positiveCountryCodeList = [ "JP" ];
        const CountryCodeOfRemoveCityList = [ "MY" ];
        const SpaceChar = " ";
        const CommaChar = ",";
        const DefaultOptions = {
            type: Display["1D"],
            returnString: false,
            error: void 0
        };
        const PositiveOrderModeSerializationModel2d = [ [ AddressInfoKeys.lastName, AddressInfoKeys.firstName ], [ AddressInfoKeys.country, AddressInfoKeys.postcode ], [ AddressInfoKeys.province ], [ AddressInfoKeys.city ], [ AddressInfoKeys.district ], [ AddressInfoKeys.address ], [ AddressInfoKeys.address2 ], [ AddressInfoKeys.company ], [ AddressInfoKeys.mobile ] ];
        const PositiveOrderModeSerializationModel1d = [ [ AddressInfoKeys.country, AddressInfoKeys.postcode ], [ AddressInfoKeys.province ], [ AddressInfoKeys.city ], [ AddressInfoKeys.district ], [ AddressInfoKeys.address ], [ AddressInfoKeys.address2 ], [ AddressInfoKeys.company ] ];
        const ReverseOrderModeSerializationModel2d = [ [ AddressInfoKeys.firstName, AddressInfoKeys.lastName ], [ AddressInfoKeys.company ], [ AddressInfoKeys.address ], [ AddressInfoKeys.address2 ], [ AddressInfoKeys.district ], [ AddressInfoKeys.city, AddressInfoKeys.province, AddressInfoKeys.postcode ], [ AddressInfoKeys.country ], [ AddressInfoKeys.mobile ] ];
        const ReverseOrderModeSerializationModel1d = [ [ AddressInfoKeys.company ], [ AddressInfoKeys.address ], [ AddressInfoKeys.address2 ], [ AddressInfoKeys.district ], [ AddressInfoKeys.city, AddressInfoKeys.province, AddressInfoKeys.postcode ], [ AddressInfoKeys.country ] ];
        const BackwardCompatibleModeSerializationModel = ReverseOrderModeSerializationModel2d;
        function throwError(message) {
            throw new Error(message);
        }
        function serialize(addressInfo, options = DefaultOptions) {
            try {
                const isLegal = verifyAddressInfo(addressInfo);
                if (!isLegal) throwError("sl-address-component: Invalid parameter passed to serialize");
                const addressInfoFixed = getAddressInfoFixed(addressInfo);
                const optionsFixed = getOptionsFixed(addressInfo, options);
                const artifacts = serializeImpl(addressInfoFixed, optionsFixed);
                if (0 === artifacts.length) return null;
                const {returnString} = options;
                if (true === returnString) return artifacts[0];
                return artifacts;
            } catch (e) {
                const {error} = options;
                error && error(e);
                return null;
            }
        }
        function verifyAddressInfo(addressInfo) {
            return isObject(addressInfo);
        }
        function getAddressInfoFixed(addressInfo) {
            let addressInfoWorkInProcess = Object.assign({}, addressInfo);
            let addressInfoTemp = {};
            Object.keys(addressInfoWorkInProcess).forEach((key => {
                const addressInfoFieldValue = addressInfoWorkInProcess[key];
                addressInfoTemp[key] = addressInfoFieldValue ? String(addressInfoFieldValue) : "";
            }));
            addressInfoWorkInProcess = addressInfoTemp;
            let addressInfoTemp2 = {};
            const {name, firstName, lastName} = addressInfoWorkInProcess;
            if (!(firstName || lastName)) {
                const firstNameNew = name || "";
                addressInfoTemp2 = Object.assign(Object.assign({}, addressInfoWorkInProcess), {
                    firstName: firstNameNew
                });
            } else addressInfoTemp2 = addressInfoWorkInProcess;
            addressInfoWorkInProcess = addressInfoTemp2;
            return addressInfoWorkInProcess;
        }
        function getOptionsFixed(addressInfo, options) {
            let newOptions = Object.assign({}, options);
            const {type, excludes} = options;
            if (!type) newOptions = Object.assign(Object.assign({}, newOptions), {
                type: Display["1D"]
            });
            const countryCode = addressInfo.countryCode;
            if (countryCode && CountryCodeOfRemoveCityList.includes(countryCode)) {
                const originExcludes = excludes || [];
                if (!originExcludes.includes(AddressInfoKeys.city)) {
                    const newExcludes = [ ...excludes || [], AddressInfoKeys.city ];
                    newOptions = Object.assign(Object.assign({}, newOptions), {
                        excludes: newExcludes
                    });
                }
            }
            return newOptions;
        }
        function serializeImpl(addressInfo, options) {
            let serializationModel = BackwardCompatibleModeSerializationModel;
            if (!addressInfo.countryCode) return serializeByModel(addressInfo, serializationModel, options);
            if (options.type === Display["1D"]) {
                if (positiveCountryCodeList.includes(addressInfo.countryCode)) serializationModel = PositiveOrderModeSerializationModel1d; else serializationModel = ReverseOrderModeSerializationModel1d;
                const serializeResult = serializeByModel(addressInfo, serializationModel, options);
                if (serializeResult.length > 0) return [ serializeResult.join(CommaChar) ]; else return [];
            }
            if (positiveCountryCodeList.includes(addressInfo.countryCode)) serializationModel = PositiveOrderModeSerializationModel2d; else serializationModel = ReverseOrderModeSerializationModel2d;
            return serializeByModel(addressInfo, serializationModel, options);
        }
        function serializeByModel(addressInfo, serializationModel, options) {
            const {includes, excludes} = options;
            let result = [];
            for (let level1 = 0; level1 < serializationModel.length; level1++) {
                const serializationModel2 = serializationModel[level1];
                let result2 = [];
                for (let level2 = 0; level2 < serializationModel2.length; level2++) {
                    const atomModel = serializationModel2[level2];
                    if (includes) if (!includes.includes(atomModel)) continue;
                    if (excludes) if (excludes.includes(atomModel)) continue;
                    if (atomModel && addressInfo[atomModel] && "string" === typeof addressInfo[atomModel]) result2.push(addressInfo[atomModel]);
                }
                if (result2.length > 0) result.push(result2.join(SpaceChar));
            }
            return result;
        }
        var ReceiverInfoKeys;
        (function(ReceiverInfoKeys) {
            ReceiverInfoKeys["receiverCompany"] = "receiverCompany";
            ReceiverInfoKeys["receiverCountry"] = "receiverCountry";
            ReceiverInfoKeys["receiverCountryCode"] = "receiverCountryCode";
            ReceiverInfoKeys["receiverProvince"] = "receiverProvince";
            ReceiverInfoKeys["receiverCity"] = "receiverCity";
            ReceiverInfoKeys["receiverArea"] = "receiverArea";
            ReceiverInfoKeys["receiverFirstName"] = "receiverFirstName";
            ReceiverInfoKeys["receiverLastName"] = "receiverLastName";
            ReceiverInfoKeys["receiverAddress"] = "receiverAddress";
            ReceiverInfoKeys["receiverAddressAdd"] = "receiverAddressAdd";
            ReceiverInfoKeys["receiverPostcode"] = "receiverPostcode";
            ReceiverInfoKeys["receiverMobile"] = "receiverMobile";
        })(ReceiverInfoKeys || (ReceiverInfoKeys = {}));
        const ReceiverInfoKeysToAddressInfoKeys = {
            [ReceiverInfoKeys.receiverFirstName]: AddressInfoKeys.firstName,
            [ReceiverInfoKeys.receiverLastName]: AddressInfoKeys.lastName,
            [ReceiverInfoKeys.receiverMobile]: AddressInfoKeys.mobile,
            [ReceiverInfoKeys.receiverCountryCode]: AddressInfoKeys.countryCode,
            [ReceiverInfoKeys.receiverCountry]: AddressInfoKeys.country,
            [ReceiverInfoKeys.receiverProvince]: AddressInfoKeys.province,
            [ReceiverInfoKeys.receiverCity]: AddressInfoKeys.city,
            [ReceiverInfoKeys.receiverArea]: AddressInfoKeys.district,
            [ReceiverInfoKeys.receiverAddress]: AddressInfoKeys.address,
            [ReceiverInfoKeys.receiverAddressAdd]: AddressInfoKeys.address2,
            [ReceiverInfoKeys.receiverPostcode]: AddressInfoKeys.postcode,
            [ReceiverInfoKeys.receiverCompany]: AddressInfoKeys.company
        };
        function receiverInfoSerializer(receiverInfo, options = DefaultOptions) {
            const addressInfoPart = {};
            if (!isObject(receiverInfo)) return serialize({}, options);
            Object.keys(receiverInfo).forEach((receiverInfoKey => {
                const addressInfoKey = ReceiverInfoKeysToAddressInfoKeys[receiverInfoKey];
                addressInfoPart[addressInfoKey] = receiverInfo[receiverInfoKey];
            }));
            const {includes, excludes: exclude} = options;
            let newOptions = Object.assign({}, options);
            if (Array.isArray(includes) && includes.length) {
                const newFiled = includes.map((receiverInfoKey => {
                    if (ReceiverInfoKeysToAddressInfoKeys[receiverInfoKey]) return ReceiverInfoKeysToAddressInfoKeys[receiverInfoKey];
                    return null;
                })).filter((addressInfoKeys => !!addressInfoKeys));
                newOptions.includes = newFiled;
            }
            if (Array.isArray(exclude) && exclude.length) {
                const newFiled = exclude.map((receiverInfoKey => {
                    if (ReceiverInfoKeysToAddressInfoKeys[receiverInfoKey]) return ReceiverInfoKeysToAddressInfoKeys[receiverInfoKey];
                    return null;
                })).filter((addressInfoKeys => !!addressInfoKeys));
                newOptions.excludes = newFiled;
            }
            return serialize(addressInfoPart, newOptions);
        }
        function receiverInfoSerializer2D(receiverInfo, options = DefaultOptions) {
            return receiverInfoSerializer(receiverInfo, Object.assign(Object.assign({}, options), {
                type: Display["2D"]
            }));
        }
        var BillingInfoKeys;
        (function(BillingInfoKeys) {
            BillingInfoKeys["billingFirstName"] = "billingFirstName";
            BillingInfoKeys["billingLastName"] = "billingLastName";
            BillingInfoKeys["billingPhone"] = "billingPhone";
            BillingInfoKeys["billingCountryCode"] = "billingCountryCode";
            BillingInfoKeys["billingCountry"] = "billingCountry";
            BillingInfoKeys["billingProvince"] = "billingProvince";
            BillingInfoKeys["billingCity"] = "billingCity";
            BillingInfoKeys["billingArea"] = "billingArea";
            BillingInfoKeys["billingAddress1"] = "billingAddress1";
            BillingInfoKeys["billingAddress2"] = "billingAddress2";
            BillingInfoKeys["billingPostcode"] = "billingPostcode";
            BillingInfoKeys["billingCompany"] = "billingCompany";
        })(BillingInfoKeys || (BillingInfoKeys = {}));
        const BillingInfoKeysToAddressInfoKeys = {
            [BillingInfoKeys.billingFirstName]: AddressInfoKeys.firstName,
            [BillingInfoKeys.billingLastName]: AddressInfoKeys.lastName,
            [BillingInfoKeys.billingPhone]: AddressInfoKeys.mobile,
            [BillingInfoKeys.billingCountryCode]: AddressInfoKeys.countryCode,
            [BillingInfoKeys.billingCountry]: AddressInfoKeys.country,
            [BillingInfoKeys.billingProvince]: AddressInfoKeys.province,
            [BillingInfoKeys.billingCity]: AddressInfoKeys.city,
            [BillingInfoKeys.billingArea]: AddressInfoKeys.district,
            [BillingInfoKeys.billingAddress1]: AddressInfoKeys.address,
            [BillingInfoKeys.billingAddress2]: AddressInfoKeys.address2,
            [BillingInfoKeys.billingPostcode]: AddressInfoKeys.postcode,
            [BillingInfoKeys.billingCompany]: AddressInfoKeys.company
        };
        function billingInfoSerializer(billingInfo, options = DefaultOptions) {
            const addressInfoPart = {};
            if (!isObject(billingInfo)) return serialize({}, options);
            Object.keys(billingInfo).forEach((billingInfoKey => {
                const addressInfoKey = BillingInfoKeysToAddressInfoKeys[billingInfoKey];
                addressInfoPart[addressInfoKey] = billingInfo[billingInfoKey];
            }));
            const {includes, excludes: exclude} = options;
            let newOptions = Object.assign({}, options);
            if (Array.isArray(includes) && includes.length) {
                const newFiled = includes.map((billingInfoKey => {
                    if (BillingInfoKeysToAddressInfoKeys[billingInfoKey]) return BillingInfoKeysToAddressInfoKeys[billingInfoKey];
                    return null;
                })).filter((addressInfoKeys => !!addressInfoKeys));
                newOptions.includes = newFiled;
            }
            if (Array.isArray(exclude) && exclude.length) {
                const newFiled = exclude.map((billingInfoKey => {
                    if (BillingInfoKeysToAddressInfoKeys[billingInfoKey]) return BillingInfoKeysToAddressInfoKeys[billingInfoKey];
                    return null;
                })).filter((addressInfoKeys => !!addressInfoKeys));
                newOptions.excludes = newFiled;
            }
            return serialize(addressInfoPart, newOptions);
        }
        var scroll_lock = __webpack_require__("../shared/browser/node_modules/scroll-lock/dist/scroll-lock.js");
        const prefixer = (className, prefixName = "sl-sku-filter-modal") => `${prefixName}-${className}`;
        const DEFAULT_MODAL_ID_PRE = "TradeModal";
        const VISIBLE = "visible";
        const HIDDEN = "hidden";
        const bem = className => prefixer(className, "trade-modal");
        const animationClassMap = {
            visible: bem("visibleAnimation"),
            hidden: bem("notVisibleAnimation")
        };
        const visibleClassName = bem("visible");
        const maskClosableClass = bem("closable");
        let uuid = 0;
        class TradeModalWithHtml {
            constructor(options = {}) {
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
                    return;
                }
                this.$modal = this.buildModalHtml();
                this.bindEvents();
            }
            buildModalHtml() {
                const {zIndex, closable, containerClassName, bodyClassName, content, children} = this.config;
                const modalHtml = `\n      <div id="${this.modalId}" class="${bem("wrapper")}">\n        <div class="${bem("mask")}"></div>\n        <div class="${bem("container")}">\n          ${closable ? `<span class="${bem("close")}">\n            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M19.1998 4.80005L4.7998 19.2" stroke="currentColor" stroke-width="2"/>\n              <path d="M4.7998 4.79995L19.1998 19.2" stroke="currentColor" stroke-width="2"/>\n            </svg>\n          </span>` : ""}\n          <div class="${bem("body")} ${bodyClassName}">\n            ${content}\n          </div>\n        </div>\n      </div>\n    `;
                const $modal = __SL_$__(modalHtml);
                if (containerClassName) $modal.find(`.${bem("container")}`).addClass(containerClassName);
                if (bodyClassName) $modal.find(`.${bem("body")}`).addClass(bodyClassName);
                if (children) $modal.find(`.${bem("body")}`).append(children);
                if (("number" === typeof zIndex || "string" === typeof zIndex) && "" !== zIndex) $modal.css("z-index", zIndex);
                return $modal;
            }
            setContent(content) {
                this.config.content = content;
                this.$modal.find(`.${bem("body")}`).html(content);
            }
            show() {
                if (this.destroyed) {
                    this.destroyed = false;
                    this.bindEvents();
                }
                const $modalBody = this.$modal.find(`.${bem("body")}`);
                this.$modal.appendTo(document.body);
                (0, scroll_lock.disablePageScroll)($modalBody.get(0));
                this.visibleState = VISIBLE;
                this.$modal.addClass([ visibleClassName, animationClassMap.visible ]).removeClass(animationClassMap.hidden);
                this.toggleMaskClassName();
            }
            hide(force) {
                const $modalBody = this.$modal.find(`.${bem("body")}`);
                this.visibleState = HIDDEN;
                (0, scroll_lock.enablePageScroll)($modalBody.get(0));
                this.toggleMaskClassName();
                this.$modal.addClass(animationClassMap.hidden).removeClass(animationClassMap.visible);
                if (force) this.afterAnimation();
            }
            toggleMaskClassName() {
                if (this.config.maskClosable) this.$modal.find(`.${bem("mask")}`).toggleClass(maskClosableClass, this.visibleState === VISIBLE);
            }
            afterAnimation() {
                this.$modal.toggleClass(visibleClassName, this.visibleState === VISIBLE);
                if ("function" === typeof this.config.afterClose) this.config.afterClose(this.$modal);
                this.destroy();
            }
            destroy() {
                if (this.config.destroyedOnClosed && this.visibleState === HIDDEN) {
                    this.$modal.remove();
                    this.destroyed = true;
                }
            }
            bindEvents() {
                this.$modal && this.$modal.on("click", `.${bem("close")}`, this.hide.bind(this, false));
                if (this.config.maskClosable) this.$modal && this.$modal.on("click", `.${bem("mask")}`, this.hide.bind(this, false));
                if (this.config.handleClickMask) this.$modal && this.$modal.on("click", `.${bem("mask")}`, this.config.handleClickMask);
                this.$modal && this.$modal.on("animationend", `.${bem("container")}`, this.afterAnimation.bind(this));
            }
        }
        var node_modules_axios = __webpack_require__("../shared/browser/node_modules/axios/index.js");
        var axios_default = __webpack_require__.n(node_modules_axios);
        var query_string = __webpack_require__("../shared/browser/node_modules/query-string/index.js");
        const request_instance = axios_default().create({
            baseURL: "/leproxy/api",
            timeout: 3e4,
            withCredentials: true,
            paramsSerializer(params) {
                return query_string.stringify(params);
            }
        });
        request_instance.interceptors.response.use((res => {
            const {status, data, config} = res;
            if ("/leproxy" === config.baseURL) {
                if (200 !== status || "0" !== data.rescode) return Promise.reject({
                    message: data.resmsg,
                    ...data
                });
            } else if (200 !== status || !(data.success || "SUCCESS" === data.code)) return Promise.reject(data);
            return data;
        }), (error => Promise.reject(error)));
        const request = request_instance;
        const getCookie = key => window && window.SL_State && window.SL_State.get(`request.cookie.${key}`);
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
        function getCustomLogisticsDataV2(params) {
            return withLoginStatusCheck(request.get("/trade/ofc/logistics/trace/custom", {
                params
            }));
        }
        function getLogisticsData(params) {
            return withLoginStatusCheck(request.get("/logistics/trace/query", {
                params
            }));
        }
        function uploadVoucher(data) {
            return withLoginStatusCheck(request.post("/trade/ofc/order/update/add-voucher", data));
        }
        const loadingSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2" stroke="currentColor" stroke-width="3"/></svg>`;
        const modalId = "PackageLogisticsModal";
        const EnumExpressTypeSource = {
            OMS: "1",
            CUSTOM: "2",
            CUSTOM_FREIGHT: "3"
        };
        const isOMSDeliveryFn = type => type === EnumExpressTypeSource.OMS;
        const getCloseIcon = () => {
            const iconElWrap = document.createElement("i");
            iconElWrap.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0455 4.4545C5.60616 4.01517 4.89384 4.01517 4.4545 4.45451C4.01516 4.89384 4.01517 5.60616 4.4545 6.04549L10.4091 12.0001L4.45469 17.9545C4.01535 18.3939 4.01535 19.1062 4.45469 19.5455C4.89403 19.9849 5.60634 19.9849 6.04568 19.5455L12.0001 13.5911L17.9543 19.5453C18.3937 19.9847 19.106 19.9847 19.5453 19.5453C19.9847 19.106 19.9847 18.3937 19.5453 17.9543L13.5911 12.0001L19.5455 6.04569C19.9848 5.60635 19.9848 4.89404 19.5455 4.4547C19.1062 4.01536 18.3939 4.01536 17.9545 4.4547L12.0001 10.4091L6.0455 4.4545Z" fill="currentColor"/></svg>`;
            return iconElWrap;
        };
        const deliverySvg = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.001 20.998C31.0304 20.998 27.001 25.0275 27.001 29.998C27.001 34.9686 31.0304 38.998 36.001 38.998C40.9715 38.998 45.001 34.9686 45.001 29.998C45.001 25.0275 40.9715 20.998 36.001 20.998ZM31.501 29.998C31.501 27.5128 33.5157 25.498 36.001 25.498C38.4863 25.498 40.501 27.5128 40.501 29.998C40.501 32.4833 38.4863 34.498 36.001 34.498C33.5157 34.498 31.501 32.4833 31.501 29.998Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0001 11.9973C27.9417 2.0556 44.0604 2.0556 54.002 11.9973C63.942 21.9389 63.9419 38.0578 54.0019 47.9994L36.0009 65.9971L18.0001 47.9963C8.05988 38.0561 8.05988 21.9375 18.0001 11.9973ZM21.182 15.1793C29.3663 6.99498 42.6356 6.99494 50.8199 15.1791C59.0028 23.3634 59.0026 36.633 50.8199 44.8174L36.0012 59.6334L21.182 44.8143C12.9992 36.6315 12.9992 23.3621 21.182 15.1793Z" fill="currentColor"/></svg>\n`;
        const getDeliveryIcon = () => {
            const iconElWrap = document.createElement("i");
            iconElWrap.innerHTML = deliverySvg;
            return iconElWrap;
        };
        const PackageLogisticsModal_bem = className => `package-logistics__${className}`;
        function domToString(node) {
            let tmpNode = document.createElement("div");
            tmpNode.appendChild(node);
            const str = tmpNode.innerHTML;
            tmpNode = null;
            return str;
        }
        function renderLogisticBox(props, instance, {logisticsData}) {
            const {expressCode, expressCompany, expressUrl, pageData} = props;
            const addressPackageFn = () => {
                const telList = [];
                const {buyerPhone, buyerEmail} = pageData && pageData.buyerInfo || {};
                let receiverMobileOfBaseInfo = "";
                if (buyerPhone) receiverMobileOfBaseInfo = buyerPhone.startsWith("00") ? buyerPhone.substring(2) : buyerPhone; else if (buyerEmail) receiverMobileOfBaseInfo = buyerEmail;
                if (receiverMobileOfBaseInfo) telList.push(receiverMobileOfBaseInfo);
                return {
                    telList
                };
            };
            const {telList} = addressPackageFn();
            const addressList = receiverInfoSerializer(pageData.receiverInfo);
            const logisticBoxWrapEl = document.createElement("div");
            logisticBoxWrapEl.className = PackageLogisticsModal_bem("logistic-box-wrap");
            const logisticBoxEl = document.createElement("div");
            logisticBoxEl.className = PackageLogisticsModal_bem("logistic-box");
            const logisticBoxInnerEl = document.createElement("div");
            logisticBoxInnerEl.className = PackageLogisticsModal_bem("logistic-box-inner");
            const subTitleEL = document.createElement("div");
            subTitleEL.className = PackageLogisticsModal_bem("sub-title");
            const subTitleTextEl = document.createTextNode(t("cart.shipping.package_tracking"));
            subTitleEL.appendChild(subTitleTextEl);
            const logisticsDataEl = document.createElement("div");
            logisticsDataEl.setAttribute("scroll-lock-scrollable", "");
            logisticsDataEl.className = PackageLogisticsModal_bem("logistic-data");
            const AddressItemDetailEl = document.createDocumentFragment();
            const shippingTitleEl = document.createElement("div");
            shippingTitleEl.className = PackageLogisticsModal_bem("shipping-title");
            shippingTitleEl.textContent = t("cart.order.shipping_address");
            AddressItemDetailEl.appendChild(shippingTitleEl);
            const AddressItemDetailContentEl = document.createElement("div");
            AddressItemDetailContentEl.className = PackageLogisticsModal_bem("address-detail-content");
            if (telList && 0 !== telList.length) {
                const addressDetailEl = document.createElement("div");
                addressDetailEl.className = PackageLogisticsModal_bem("address-detail");
                const pEl = document.createElement("div");
                let pElText = "";
                telList.forEach((addressItemText => {
                    pElText = `${pElText + addressItemText},`;
                }));
                pElText = pElText.replace(/,$/, "");
                pEl.textContent = pElText;
                addressDetailEl.appendChild(pEl);
                AddressItemDetailContentEl.appendChild(addressDetailEl);
            }
            if (addressList) {
                const addressDetailEl = document.createElement("div");
                addressDetailEl.className = PackageLogisticsModal_bem("address-detail");
                addressList.forEach((addressItemText => {
                    const pEl = document.createElement("div");
                    pEl.className = "information-item";
                    pEl.textContent = `${addressItemText}`;
                    addressDetailEl.appendChild(pEl);
                }));
                AddressItemDetailContentEl.appendChild(addressDetailEl);
            }
            AddressItemDetailEl.appendChild(AddressItemDetailContentEl);
            const packageShipDataWrapEl = document.createElement("div");
            packageShipDataWrapEl.className = PackageLogisticsModal_bem("packageShipData-wrap");
            const packageShipDataEl = document.createElement("div");
            packageShipDataEl.className = PackageLogisticsModal_bem("packageShipData");
            const packageShipCompanyEl = document.createElement("span");
            packageShipCompanyEl.className = PackageLogisticsModal_bem("packageShipData-company");
            if (expressCompany && expressCompany.length > 16) packageShipCompanyEl.classList.add(PackageLogisticsModal_bem("packageShipData-company__mobile-wrap"));
            packageShipCompanyEl.innerText = expressCompany;
            const packageShipNoEl = document.createElement("span");
            packageShipNoEl.className = PackageLogisticsModal_bem("packageShipData-no");
            packageShipNoEl.innerText = expressCode ? `${expressCode}` : "";
            if (expressCompany) packageShipDataEl.appendChild(packageShipCompanyEl);
            packageShipDataEl.appendChild(packageShipNoEl);
            packageShipDataWrapEl.appendChild(packageShipDataEl);
            const traceDataListFragmentEl = document.createDocumentFragment();
            const traceData = (logisticsData && logisticsData.traces || []).reverse();
            if (0 === traceData.length && expressUrl) {
                const packageShipDataLinkTipEl = document.createElement("div");
                packageShipDataLinkTipEl.className = PackageLogisticsModal_bem("link-tip");
                packageShipDataLinkTipEl.innerText = t("cart.order.click_to_track");
                const packageShipDataLinkEl = document.createElement("a");
                packageShipDataLinkEl.href = expressUrl;
                packageShipDataLinkEl.target = "_blank";
                packageShipDataLinkEl.innerText = expressUrl;
                packageShipDataLinkEl.className = "custom-link-color";
                packageShipDataWrapEl.appendChild(packageShipDataLinkTipEl);
                packageShipDataWrapEl.appendChild(packageShipDataLinkEl);
            }
            if (0 !== traceData.length) {
                const traceDataListEl = document.createElement("div");
                traceDataListEl.className = PackageLogisticsModal_bem("traceDataList");
                traceData.forEach((traceDataItem => {
                    const recordEl = document.createElement("div");
                    recordEl.className = PackageLogisticsModal_bem("record");
                    const recordTimeEl = document.createElement("div");
                    recordTimeEl.className = PackageLogisticsModal_bem("recordTime");
                    recordTimeEl.textContent = dayjs_min(traceDataItem.acceptTime).format("YYYY-MM-DD HH:mm A");
                    const acceptStationEl = document.createElement("div");
                    acceptStationEl.className = PackageLogisticsModal_bem("acceptStation");
                    acceptStationEl.textContent = traceDataItem.acceptStation;
                    recordEl.appendChild(recordTimeEl);
                    recordEl.appendChild(acceptStationEl);
                    traceDataListEl.appendChild(recordEl);
                }));
                traceDataListFragmentEl.appendChild(traceDataListEl);
            } else if (!expressUrl) {
                const traceNoDataEl = document.createElement("div");
                traceNoDataEl.className = PackageLogisticsModal_bem("noData");
                const traceNoDataIconEl = getDeliveryIcon();
                traceNoDataIconEl.className = PackageLogisticsModal_bem("icon");
                traceNoDataEl.appendChild(traceNoDataIconEl);
                const traceNoDataPEl = document.createElement("div");
                traceNoDataPEl.textContent = t("cart.shipping.no_info");
                traceNoDataEl.appendChild(traceNoDataPEl);
                traceDataListFragmentEl.appendChild(traceNoDataEl);
            }
            const traceDataShowEl = traceDataListFragmentEl;
            logisticsDataEl.appendChild(AddressItemDetailEl);
            logisticsDataEl.appendChild(packageShipDataWrapEl);
            logisticsDataEl.appendChild(traceDataShowEl);
            const closeModal = () => {
                instance.hide(true);
                instance.destroy();
            };
            const iKnowEl = document.createElement("div");
            iKnowEl.className = PackageLogisticsModal_bem("i-know");
            const iKnowButtonEl = document.createElement("button");
            iKnowButtonEl.className = `${PackageLogisticsModal_bem("PackageLogisticsBtn")} btn btn-primary`;
            iKnowButtonEl.textContent = t("cart.cart.got_it");
            iKnowButtonEl.addEventListener("click", closeModal);
            iKnowEl.appendChild(iKnowButtonEl);
            const closeIconEl = getCloseIcon();
            closeIconEl.className = PackageLogisticsModal_bem("close-icon");
            closeIconEl.addEventListener("click", closeModal);
            logisticBoxEl.appendChild(subTitleEL);
            logisticBoxEl.appendChild(logisticsDataEl);
            logisticBoxEl.appendChild(iKnowEl);
            logisticBoxWrapEl.appendChild(closeIconEl);
            logisticBoxWrapEl.appendChild(logisticBoxEl);
            return logisticBoxWrapEl;
        }
        function renderContentDOM(props) {
            const basicInfo = props.pageData.basicInfo || {};
            const {logisticsNo, expressCode, expressTypeSource, expressCompanyCode, packageSeq, logisticsNoMark} = props;
            const {orderMark: orderSeqMark, orderSeq} = basicInfo;
            const contentPlaceHolderDOM = document.createElement("div");
            const uniqueKey = Date.now();
            const contentPlaceHolderDOMId = PackageLogisticsModal_bem(`placeholder-${uniqueKey}`);
            contentPlaceHolderDOM.id = contentPlaceHolderDOMId;
            contentPlaceHolderDOM.className = PackageLogisticsModal_bem("placeholder");
            contentPlaceHolderDOM.innerHTML = loadingSvg;
            let closeModal = null;
            const baseModalOptions = {
                content: domToString(contentPlaceHolderDOM),
                ...props,
                closable: false,
                handleClickMask: () => {
                    if (closeModal) closeModal();
                },
                destroyedOnClosed: true,
                maskClosable: false,
                id: modalId
            };
            const baseInstance = new TradeModalWithHtml(baseModalOptions);
            baseInstance.show();
            closeModal = () => {
                baseInstance.hide(true);
            };
            let responsePromise = null;
            const isOMSDelivery = isOMSDeliveryFn(expressTypeSource);
            if (isOMSDelivery) responsePromise = getLogisticsData({
                logisticsNo,
                logisticsNoMark
            }); else if (expressCode) responsePromise = getCustomLogisticsDataV2({
                expressCode,
                expressCompanyCode,
                orderSeq,
                orderSeqMark,
                packageSeq
            }); else responsePromise = Promise.reject();
            responsePromise.then((response => {
                const contentDOM = renderLogisticBox(props, baseInstance, {
                    logisticsData: response.data
                });
                const contentPlaceHolderRealDOM = document.querySelector(`#${contentPlaceHolderDOMId}`);
                const modalContentDom = contentPlaceHolderRealDOM.parentElement;
                modalContentDom.removeChild(contentPlaceHolderRealDOM);
                modalContentDom.appendChild(contentDOM);
            }), (() => {
                const contentDOM = renderLogisticBox(props, baseInstance, {
                    logisticsData: {}
                });
                const contentPlaceHolderRealDOM = document.querySelector(`#${contentPlaceHolderDOMId}`);
                const modalContentDom = contentPlaceHolderRealDOM.parentElement;
                modalContentDom.removeChild(contentPlaceHolderRealDOM);
                modalContentDom.appendChild(contentDOM);
            }));
            return baseInstance;
        }
        function packageLogistics(options) {
            const modalInstance = renderContentDOM(options);
            return {
                raw: modalInstance
            };
        }
        const PackageLogisticsModal = packageLogistics;
        const sentryLogger = sentry.pipeOwner(Owner.OrderDetail);
        function handleShowModal(event) {
            const index = event.currentTarget.dataset.index;
            const pageData = SL_State.get("customer.order") || {};
            const ordersPackageVoListItem = pageData && pageData.ordersPackageList && pageData.ordersPackageList[index];
            sentryLogger.info("包裹跟踪弹窗打开", {
                action: Action.Click,
                data: {
                    index,
                    info: ordersPackageVoListItem
                }
            });
            PackageLogisticsModal({
                ...ordersPackageVoListItem,
                pageData
            });
        }
        function bindTrackBtn() {
            const trackBtnEls = document.querySelectorAll(".detail-logistic-track");
            if (trackBtnEls) Array.from(trackBtnEls).forEach((trackBtnEl => {
                trackBtnEl.addEventListener("click", handleShowModal);
            }));
        }
        const pageData = SL_State.get("customer.order") || {};
        const addressPackageFn = pageData => {
            const telList = [];
            const {buyerPhone, buyerEmail} = get_default()(pageData, "buyerInfo", {}) || {};
            let receiverMobileOfBaseInfo = "";
            if (buyerPhone) receiverMobileOfBaseInfo = buyerPhone.startsWith("00") ? buyerPhone.substring(2) : buyerPhone; else if (buyerEmail) receiverMobileOfBaseInfo = buyerEmail;
            if (receiverMobileOfBaseInfo) telList.push(receiverMobileOfBaseInfo);
            return {
                telList
            };
        };
        const InformationContentElSelector = ".information-content";
        const renderInformation = () => {
            const {telList} = addressPackageFn(pageData);
            const addressList = receiverInfoSerializer2D(pageData.receiverInfo);
            const informationContentEl = document.querySelector(InformationContentElSelector);
            if (!informationContentEl) return;
            const AddressItemDetailContentEl = document.createDocumentFragment();
            {
                if (telList && 0 !== telList.length) {
                    const addressDetailEl = document.createElement("div");
                    addressDetailEl.className = "information-block";
                    const pEl = document.createElement("div");
                    pEl.className = "information-item";
                    let pElText = "";
                    telList.forEach((addressItemText => {
                        pElText = `${pElText + addressItemText},`;
                    }));
                    pElText = pElText.replace(/,$/, "");
                    pEl.textContent = pElText;
                    addressDetailEl.appendChild(pEl);
                    AddressItemDetailContentEl.appendChild(addressDetailEl);
                }
                const {shippingRequired = true} = get_default()(pageData, "basicInfo", {}) || {};
                if (addressList && shippingRequired) {
                    const addressDetailEl = document.createElement("div");
                    addressDetailEl.className = "information-block";
                    addressList.forEach((addressItemText => {
                        const pEl = document.createElement("div");
                        pEl.className = "information-item";
                        pEl.textContent = `${addressItemText}`;
                        addressDetailEl.appendChild(pEl);
                    }));
                    AddressItemDetailContentEl.appendChild(addressDetailEl);
                }
            }
            informationContentEl.innerHTML = "";
            informationContentEl.appendChild(AddressItemDetailContentEl);
        };
        const information = renderInformation;
        const PAY_MODAL_Id = "orderDetailPayModalId";
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
        EnumDeliveryStatus.IN_STOCK, t("cart.shipping.preparing_order"), EnumDeliveryStatus.DELIVERY_PARTIAL, 
        t("cart.shipping.partially_shipped"), EnumDeliveryStatus.SHIPPED, t("cart.shipping.shipped_order");
        const payModal_getCloseIcon = () => {
            const iconElWrap = document.createElement("i");
            iconElWrap.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.0455 4.4545C5.60616 4.01517 4.89384 4.01517 4.4545 4.45451C4.01516 4.89384 4.01517 5.60616 4.4545 6.04549L10.4091 12.0001L4.45469 17.9545C4.01535 18.3939 4.01535 19.1062 4.45469 19.5455C4.89403 19.9849 5.60634 19.9849 6.04568 19.5455L12.0001 13.5911L17.9543 19.5453C18.3937 19.9847 19.106 19.9847 19.5453 19.5453C19.9847 19.106 19.9847 18.3937 19.5453 17.9543L13.5911 12.0001L19.5455 6.04569C19.9848 5.60635 19.9848 4.89404 19.5455 4.4547C19.1062 4.01536 18.3939 4.01536 17.9545 4.4547L12.0001 10.4091L6.0455 4.4545Z" fill="currentColor"/></svg>`;
            return iconElWrap;
        };
        const payModal_bem = className => `detail_pay_modal_${className}`;
        function payModal_domToString(node) {
            let tmpNode = document.createElement("div");
            tmpNode.appendChild(node);
            const str = tmpNode.innerHTML;
            tmpNode = null;
            return str;
        }
        function getPayChannelName(payChannelName, payMethod, defaultDesensitizedPayerAccount) {
            const {value, type} = payChannelName;
            if ("i18n_code" === type) return t(value);
            if ("GiftCard" === payMethod) return `${value}-(••••${defaultDesensitizedPayerAccount})`;
            return value;
        }
        function renderContentBox(props, instance) {
            const boxWrapEl = document.createElement("div");
            boxWrapEl.className = payModal_bem("box-wrap");
            const boxContentEl = document.createElement("div");
            boxContentEl.className = payModal_bem("box-content");
            const mainTitleEL = document.createElement("div");
            mainTitleEL.className = payModal_bem("main-title");
            const subTitleTextEl = document.createTextNode(t("cart.payment.payment_details"));
            mainTitleEL.appendChild(subTitleTextEl);
            boxContentEl.appendChild(mainTitleEL);
            const paymentInfoList = SL_State.get("customer.order.paymentInfoList") || [];
            const payInfo = paymentInfoList && paymentInfoList.find((pay => pay.paySeq === props.paySeq));
            const {payChannelName, payAmount, payChannelDealId, createTime, updateTime, payStatus, payMethod, defaultDesensitizedPayerAccount} = payInfo || {};
            const infoList = [ {
                title: t("cart.payment.channel"),
                text: getPayChannelName(payChannelName, payMethod, defaultDesensitizedPayerAccount) || "-"
            }, {
                title: t("cart.payment.sum"),
                isNotranslate: true,
                payAmount,
                text: convertFormat(payAmount) || "-"
            }, {
                title: t("cart.payment.reference_number"),
                text: payChannelDealId || "-"
            }, {
                title: t("cart.payment.create_time"),
                text: createTime && dayjs_min(createTime).format("YYYY-MM-DD HH:mm A") || "-"
            }, {
                title: t("cart.payment.update_time"),
                text: updateTime && dayjs_min(updateTime).format("YYYY-MM-DD HH:mm A") || "-"
            }, {
                title: t("cart.payment.status"),
                text: PayStatusI18n[payStatus] || "-"
            } ];
            infoList.map((({title, text, isNotranslate, payAmount}) => {
                const subTitleEL = document.createElement("p");
                subTitleEL.className = payModal_bem("box-content-sub-title");
                const subTitleTextEl = document.createTextNode(title);
                subTitleEL.appendChild(subTitleTextEl);
                boxContentEl.appendChild(subTitleEL);
                const subTextEL = document.createElement("p");
                subTextEL.className = payModal_bem("box-content-sub-text");
                if (isNotranslate) {
                    subTextEL.className = payModal_bem("box-content-sub-text notranslate");
                    subTextEL.setAttribute("data-amount", payAmount);
                }
                const subTextValueEl = document.createTextNode(text);
                subTextEL.appendChild(subTextValueEl);
                boxContentEl.appendChild(subTextEL);
                return {
                    title,
                    text
                };
            }));
            const closeModal = () => {
                instance.hide(true);
                instance.destroy();
            };
            const closeIconEl = payModal_getCloseIcon();
            closeIconEl.className = payModal_bem("close-icon");
            closeIconEl.addEventListener("click", closeModal);
            const iKnowEl = document.createElement("div");
            iKnowEl.className = payModal_bem("i-know");
            const iKnowButtonEl = document.createElement("button");
            iKnowButtonEl.className = `${payModal_bem("i-know-btn")} btn btn-primary`;
            iKnowButtonEl.textContent = t("cart.cart.got_it");
            iKnowButtonEl.addEventListener("click", closeModal);
            iKnowEl.appendChild(iKnowButtonEl);
            boxWrapEl.appendChild(closeIconEl);
            const requestData = SL_State.get("request") || {};
            if (!requestData.is_mobile) boxContentEl.appendChild(iKnowEl);
            boxWrapEl.appendChild(boxContentEl);
            return boxWrapEl;
        }
        function payModal_renderContentDOM(props) {
            const contentPlaceHolderDOM = document.createElement("div");
            const uniqueKey = Date.now();
            const contentPlaceHolderDOMId = payModal_bem(`placeholder-${uniqueKey}`);
            contentPlaceHolderDOM.id = contentPlaceHolderDOMId;
            contentPlaceHolderDOM.className = payModal_bem("placeholder");
            let closeModal = null;
            const baseModalOptions = {
                content: payModal_domToString(contentPlaceHolderDOM),
                ...props,
                closable: false,
                handleClickMask: () => {
                    if (closeModal) closeModal();
                },
                destroyedOnClosed: true,
                maskClosable: false,
                id: PAY_MODAL_Id
            };
            const baseInstance = new TradeModalWithHtml(baseModalOptions);
            baseInstance.show();
            closeModal = () => {
                baseInstance.hide(true);
            };
            const contentDOM = renderContentBox(props, baseInstance, {});
            const contentRealDOM = __SL_$__(`#${contentPlaceHolderDOMId}`);
            contentRealDOM.append(__SL_$__(contentDOM));
            return baseInstance;
        }
        function handlePayModal(options) {
            const modalInstance = payModal_renderContentDOM(options);
            return {
                raw: modalInstance
            };
        }
        const payModal = handlePayModal;
        const payment_pageData = SL_State.get("customer.order") || {};
        const Selector = "#contentPayValueAddress";
        const renderBillingAddress = payBillInfo => {
            const billingInfo = payBillInfo || get_default()(payment_pageData, "payInfo.payBillInfo", {}) || {};
            const billingAddressResult = billingInfoSerializer(billingInfo, {
                returnString: true
            }) || "-";
            const el = document.querySelector(Selector);
            el.textContent = billingAddressResult;
        };
        const statusBar_pageData = SL_State.get("customer.order") || {};
        const {basicInfo} = statusBar_pageData;
        const CANCELLED2 = 400;
        const renderStatusBar = function() {
            const containerEl = document.querySelector(".detail-status-bar");
            if (!containerEl) return;
            const numberEl = document.createElement("div");
            numberEl.className = "status-bar-number";
            numberEl.textContent = t("cart.order.sequence", {
                id: basicInfo && basicInfo.appOrderSeq || basicInfo && basicInfo.appMainOrderSeq
            });
            const dateEl = document.createElement("div");
            dateEl.className = "status-bar-date";
            dateEl.textContent = `${t("cart.order.time")} ${dayjs_min_default()(basicInfo && basicInfo.createTime).format("YYYY-MM-DD HH:mm A")}`;
            containerEl.appendChild(numberEl);
            containerEl.appendChild(dateEl);
            if (basicInfo.bizOrderStatus === CANCELLED2) {
                const statusText = t("cart.order.canceled_order") || "";
                const statusEl = document.createElement("div");
                statusEl.className = "status-bar-status";
                statusEl.textContent = statusText;
                containerEl.appendChild(statusEl);
            }
        };
        const statusBar = renderStatusBar;
        function initCurrencyChangeListener(selector) {
            const cartRootNode = __SL_$__(selector || document);
            SL_State.on("currencyCode", (() => {
                const amountNode = cartRootNode.find("[data-amount]");
                amountNode.each((function() {
                    __SL_$__(this).text(convertFormat(__SL_$__(this).attr("data-amount")));
                }));
            }));
            window.SL_EventBus.on("stage:locale:change", (() => {
                const amountNode = cartRootNode.find("[data-amount]");
                amountNode.each((function() {
                    __SL_$__(this).text(convertFormat(__SL_$__(this).attr("data-amount")));
                }));
            }));
        }
        var node_modules_uuid = __webpack_require__("../shared/browser/node_modules/uuid/index.js");
        var dist = __webpack_require__("../shared/browser/node_modules/@yy/sl-http-upload/dist/index.js");
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
        const toast = Toast;
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
        const utils_main = utils;
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
            SL_EventBus.on("global:platformChange", callback);
        }
        let timer;
        let timerCount = 0;
        function init() {
            if (window.addEventListener) {
                if (timer) clearTimeout(timer);
                window.addEventListener("load", (() => {
                    let platform = getPlatform();
                    window.addEventListener("resize", (() => {
                        const newPlatform = getPlatform();
                        if (newPlatform !== platform) {
                            SL_EventBus.emit("global:platformChange", newPlatform);
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
            if (!el || !el.tagName) return console.warn(`${el} is not a element`);
            const rect = el.getBoundingClientRect();
            const vWidth = document.documentElement.clientWidth;
            const vHeight = document.documentElement.clientHeight;
            if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) return false;
            return true;
        }
        function isUnderViewport(el) {
            if (!el || !el.tagName) return console.warn(`${el} is not a element`);
            const rect = el.getBoundingClientRect();
            const vWidth = document.documentElement.clientWidth;
            const vHeight = document.documentElement.clientHeight;
            if (rect.right < 0 || rect.left > vWidth || rect.top > vHeight) return false;
            return true;
        }
        init();
        function getAbOrderSeqInfoCache(buyScence = "cart") {
            const seqInfo = utils_main.localStorage.get(`${buyScence}AbOrderSeqInfo`);
            return seqInfo;
        }
        function setAbOrderSeqInfoCache(abandonedOrderSeqInfo, buyScence) {
            if (!buyScence) {
                console.warn("setAbOrderSeqInfoCache err miss buyScence");
                return;
            }
            utils_main.localStorage.set(`${buyScence}AbOrderSeqInfo`, abandonedOrderSeqInfo);
        }
        const helper = {
            getPlatform,
            listenPlatform,
            platformType,
            getAbOrderSeqInfoCache,
            setAbOrderSeqInfoCache,
            isInViewport,
            isUnderViewport
        };
        const voucher_upload_sentryLogger = sentry.pipeOwner(Owner.OrderDetail);
        const {createMobilePreviewVoucher: voucher_upload_createMobilePreviewVoucher, createDesktopPreviewVoucher: voucher_upload_createDesktopPreviewVoucher} = main;
        function getPageState(stateName) {
            return window.SL_State.get(stateName);
        }
        const ErrorCodeEnum = {
            VOUCHER_LIMIT_CODE: "TCTQORDER_VOUCHER_LIMIT_ERROR",
            KBANK_SERVICE_TIMEOUT_ERROR: "TCTQKBANK_SERVICE_TIMEOUT_ERROR",
            ORDER_NOT_EXIST_ERROR: "TCTQORDER_NOT_EXIST_ERROR"
        };
        const orderSeq = getPageState("customer.order.basicInfo.orderSeq");
        const orderSeqMark = getPageState("customer.order.basicInfo.orderMark");
        class VoucherUpload {
            constructor(ele) {
                this.aliyunOss;
                this.voucherInfo;
                this.file;
                this.eleWrapper = __SL_$__(ele);
                this.inputEle = __SL_$__(ele).find("input");
            }
            init() {
                this.bindEventListener();
            }
            static getOssUploader() {
                if (!VoucherUpload.aliyunOss) VoucherUpload.aliyunOss = new dist.SlAliyunOss({
                    businessType: "payCertificate",
                    fileType: "IMAGE",
                    client: "global",
                    maxSize: 20,
                    limitPx: 0
                });
                return VoucherUpload.aliyunOss;
            }
            async uploadImageToServer() {
                voucher_upload_sentryLogger.info("凭证上传开始", {
                    action: Action.Upload,
                    status: index_es.LogStatus.Start
                });
                const uploadResult = await VoucherUpload.getOssUploader().upload({
                    fileList: [ {
                        file: this.file,
                        uid: (0, node_modules_uuid.v4)()
                    } ]
                });
                const uploadResultOne = uploadResult && uploadResult[0];
                const data = uploadResultOne && uploadResultOne.data && uploadResultOne.data[0];
                if (data && data.success) {
                    voucher_upload_sentryLogger.info("图片上传成功", {
                        action: Action.Upload,
                        status: index_es.LogStatus.Success
                    });
                    const result = await uploadVoucher({
                        orderSeq,
                        orderSeqMark,
                        url: data.url
                    });
                    this.voucherInfo = result && result.data || {};
                    return;
                }
                console.log("uploadImageToServer", data, uploadResult);
                throw new Error("upload failed");
            }
            bindEventListener() {
                this.inputEle.on("change", (async () => {
                    voucher_upload_sentryLogger.info("凭证数据更改", {
                        action: Action.Change
                    });
                    const {files} = this.inputEle && this.inputEle.get(0) || {};
                    this.file = files[0];
                    const ACCEPT = [ "image/gif", "image/jpeg", "image/png", "image/bmp", "image/webp", "image/svg", ".raw" ];
                    if (this.file && this.file.size > 10 * 1024 * 1024 || !ACCEPT.includes(this.file && this.file.type)) {
                        console.log("bindEventListener");
                        toast.init({
                            content: t("cart.order.upload_image_within_10_m_b")
                        });
                        this.file = null;
                        this.inputEle.get(0).value = null;
                        return;
                    }
                    this.toggleLoading();
                    try {
                        await this.uploadImageToServer();
                        this.displayPreviewModule();
                        this.removeUpload();
                        this.addUploadEntrance();
                    } catch (error) {
                        voucher_upload_sentryLogger.warn("凭证上传失败", {
                            action: Action.Upload,
                            status: index_es.LogStatus.Failure
                        });
                        console.log("bindEventListener error", error);
                        switch (error.code) {
                          case ErrorCodeEnum.VOUCHER_LIMIT_CODE:
                            toast.init({
                                content: t("cart.order.voucher_amount_limit")
                            });
                            setTimeout((() => {
                                window.location.reload();
                            }), 300);
                            break;

                          case ErrorCodeEnum.ORDER_NOT_EXIST_ERROR:
                            toast.init({
                                content: t("cart.order.invalid_order_number")
                            });
                            break;

                          case ErrorCodeEnum.KBANK_SERVICE_TIMEOUT_ERROR:
                            toast.init({
                                content: t("cart.order.try_later")
                            });
                            break;

                          default:
                            toast.init({
                                content: t("cart.order.try_again")
                            });
                        }
                        this.inputEle.get(0).value = null;
                    } finally {
                        this.toggleLoading();
                    }
                }));
            }
            toggleLoading() {
                this.eleWrapper.toggleClass("sl-component-loading");
            }
            generateUploadModule() {
                const template = `<div class="trade-file-upload icon-style" id="trade-file-upload_1">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45403 11.4464C1.83271 11.4464 1.32903 11.9501 1.32903 12.5714C1.32903 13.1927 1.83271 13.6964 2.45403 13.6964L10.8751 13.6964L10.8751 22.1172C10.8751 22.7386 11.3788 23.2422 12.0001 23.2422C12.6214 23.2422 13.1251 22.7386 13.1251 22.1172L13.1251 13.6964L21.5457 13.6964C22.167 13.6964 22.6707 13.1927 22.6707 12.5714C22.6707 11.9501 22.167 11.4464 21.5457 11.4464L13.1251 11.4464L13.1251 3.0256C13.1251 2.40428 12.6214 1.9006 12.0001 1.9006C11.3788 1.9006 10.8751 2.40428 10.8751 3.0256L10.8751 11.4464L2.45403 11.4464Z" fill="currentColor"/>\n        </svg>\n        <input type="file" name="files" accept="image/gif, image/jpeg, image/png, image/bmp, image/webp, image/svg">\n        <svg class="uploading-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.85 9A5.85 5.85 0 0 0 9 3.15V.45A8.55 8.55 0 1 1 .45 9h2.7a5.85 5.85 0 0 0 11.7 0Z" fill="currentColor"/>\n        </svg>\n    </div>`;
                return __SL_$__(template);
            }
            formatTime(time) {
                return dayjs_min(time).format("MMMM DD,YYYY h:mma");
            }
            parseVoucherInfoItemByStatus() {
                const {uploadTime, amount, transRef, receiverAccount, currency} = this.voucherInfo || {};
                const result = [ `<div class="trade-transfer-voucher_info-item">\n        <span class="trade-transfer-voucher_info-item-key">${t("cart.order.upload_time")}:</span>\n        <span class="trade-transfer-voucher_info-item-value">${this.formatTime(uploadTime)}</span>\n      </div>`, `<div class="trade-transfer-voucher_info-item">\n        <span class="trade-transfer-voucher_info-item-key">${t("cart.order.reference_number")}:</span>\n        <span class="trade-transfer-voucher_info-item-value">${transRef || "-"}</span>\n      </div>` ];
                if (receiverAccount) result.push(` <div class="trade-transfer-voucher_info-item">\n      <span class="trade-transfer-voucher_info-item-key">${t("cart.order.receiver_account")}:</span>\n      <span class="trade-transfer-voucher_info-item-value">${receiverAccount}</span>\n    </div>`);
                if (amount) result.push(`<div class="trade-transfer-voucher_info-item">\n      <span class="trade-transfer-voucher_info-item-key">${t("cart.order.pay_amount")}:</span>\n      <span class="trade-transfer-voucher_info-item-value trade-transfer-voucher_info-item-value-amount">${currency ? utils_currency.format(100 * amount, {
                    code: currency
                }) : amount}</span>\n    </div>`);
                return result.join("\n");
            }
            generatePreviewModule(url) {
                const template = `<div class="trade-transfer-voucher">\n        <div class="trade-transfer-voucher_img">\n            <img src="${url}" alt="transfer voucher">\n        </div>\n    </div>`;
                return __SL_$__(template);
            }
            bindVoucherPreview(previewModule) {
                const imgDom = previewModule.find("img");
                imgDom && imgDom.on("click", (e => {
                    voucher_upload_sentryLogger.info("凭证图片预览", {
                        action: Action.Preview
                    });
                    const {uploadTime, amount, transRef, receiverAccount, currency} = this.voucherInfo || {};
                    const url = e && e.target && e.target.src;
                    const data = [ {
                        label: t("cart.order.upload_time"),
                        value: this.formatTime(uploadTime)
                    }, {
                        label: t("cart.order.reference_number"),
                        value: transRef || "-"
                    } ];
                    if (receiverAccount) data.push({
                        label: t("cart.order.receiver_account"),
                        value: receiverAccount
                    });
                    if (amount) data.push({
                        label: t("cart.order.pay_amount"),
                        value: `\n            <div class="trade-file-upload_value">\n              ${currency ? utils_currency.format(100 * amount, {
                            code: currency
                        }) : amount}\n            </div>`
                    });
                    if (url) {
                        const options = {
                            imgUrls: [ url ],
                            data,
                            okText: t("cart.order.payment_voucher_confirmation")
                        };
                        const isMobile = helper && "mobile" === helper.getPlatform();
                        const voucherModal = isMobile ? voucher_upload_createMobilePreviewVoucher(options) : voucher_upload_createDesktopPreviewVoucher(options);
                        voucherModal.show();
                    }
                }));
            }
            displayPreviewModule() {
                const previewModule = this.generatePreviewModule(this.voucherInfo.voucherUrl);
                this.bindVoucherPreview(previewModule);
                __SL_$__(".trade-transfer-voucher-wrapper").append(previewModule);
            }
            removeUpload() {
                this.eleWrapper.remove();
            }
            addUploadEntrance() {
                const imageElements = __SL_$__(".trade-transfer-voucher");
                if (imageElements.length >= 5) {
                    __SL_$__(".trade-checkout-payment-voucher_desc").css("display", "none");
                    return;
                }
                const uploadModule = this.generateUploadModule();
                __SL_$__(".trade-transfer-voucher-wrapper").append(uploadModule);
                new VoucherUpload(uploadModule[0]).init();
            }
        }
        const voucher_upload = VoucherUpload;
        const detail_sentryLogger = sentry.pipeOwner(Owner.OrderDetail);
        const {createMobilePreviewVoucher: detail_createMobilePreviewVoucher, createDesktopPreviewVoucher: detail_createDesktopPreviewVoucher} = main;
        class CustomerOrderDetail {
            init() {
                reportPageView(cidMap.customer, {
                    custom_component: customComponentMap.orderDetail
                });
                initCurrencyChangeListener(".customer-order-detail");
                reportThirdPartPageView();
                bindTrackBtn();
                information();
                statusBar();
                __SL_$__(document).on("DOMContentLoaded", (() => {
                    this.bindEvent();
                    renderBillingAddress();
                    this.initTransferVoucherModule();
                }));
                detail_sentryLogger.info("订单详情初始化", {
                    action: Action.Init,
                    data: {
                        orderList: SL_State.get("customer.order")
                    }
                });
            }
            initTransferVoucherModule() {
                const uploadElements = __SL_$__(".trade-file-upload");
                uploadElements.each(((_, ele) => {
                    new voucher_upload(ele).init();
                }));
                __SL_$__(".trade-transfer-voucher_show-more").on("click", (() => {
                    __SL_$__(".trade-transfer-voucher").removeClass("hide");
                    __SL_$__(".trade-file-upload").last().removeClass("hide");
                    __SL_$__(".trade-transfer-voucher_limit-tip").removeClass("hide");
                    __SL_$__(".trade-transfer-voucher_show-more").remove();
                }));
                __SL_$__(".trade-transfer-voucher_img").find("img").on("click", (e => {
                    const url = get_default()(e, "target.src", void 0);
                    const {time, reference, amount, receiver, currency} = get_default()(e, "target.dataset", void 0) || {};
                    const data = [ {
                        label: t("cart.order.upload_time"),
                        value: time
                    }, {
                        label: t("cart.order.reference_number"),
                        value: reference || "-"
                    } ];
                    if (receiver) data.push({
                        label: t("cart.order.receiver_account"),
                        value: receiver
                    });
                    if (amount) data.push({
                        label: t("cart.order.pay_amount"),
                        value: `<div class="trade-file-upload_value">\n              ${currency ? utils_currency.format(100 * Number(amount), {
                            code: currency
                        }) : amount}\n              </div>`
                    });
                    if (url) {
                        const options = {
                            imgUrls: [ url ],
                            data,
                            okText: t("cart.order.payment_voucher_confirmation")
                        };
                        const isMobile = helper && "mobile" === helper.getPlatform();
                        const voucherModal = isMobile ? detail_createMobilePreviewVoucher(options) : detail_createDesktopPreviewVoucher(options);
                        voucherModal.show();
                    }
                }));
            }
            bindEvent() {
                __SL_$__(".goods-item-good-content").on("click", ".goods-item-good-preview", (function() {
                    const data = __SL_$__(this).data();
                    if (data && data.urls) {
                        const urls = data.urls.split(",") || [];
                        index_umd_default()({
                            current: "",
                            urls
                        });
                    }
                }));
                __SL_$__(".content-pay-value").on("click", ".content-pay-value-status-detail", (function() {
                    const data = __SL_$__(this).data();
                    detail_sentryLogger.info("支付弹窗信息打开", {
                        action: Action.Click,
                        data
                    });
                    payModal(data);
                }));
            }
        }
        const detail = CustomerOrderDetail;
        class CustomerOrderDetailInTheme extends detail {
            init() {
                super.init();
            }
        }
        const customerOrderDetailInTheme = new CustomerOrderDetailInTheme;
        customerOrderDetailInTheme.init();
    })();
})();