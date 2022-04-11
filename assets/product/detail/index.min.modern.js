(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "product-template" ], {
    "../shared/node_modules/@yy/sl-http-upload/dist/index.js": (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        ({
            value: true
        });
        var axios = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/index.js");
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
        var allSettled = __webpack_require__("../shared/node_modules/promise.allsettled/index.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/axios.js");
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/settle.js");
        var cookies = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/cookies.js");
        var buildURL = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js");
        var buildFullPath = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/buildFullPath.js");
        var parseHeaders = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/parseHeaders.js");
        var isURLSameOrigin = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isURLSameOrigin.js");
        var createError = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        var bind = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js");
        var Axios = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/Axios.js");
        var mergeConfig = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js");
        var defaults = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js");
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
        axios.Cancel = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js");
        axios.all = function(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/spread.js");
        axios.isAxiosError = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAxiosError.js");
        module.exports = axios;
        module.exports["default"] = axios;
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js": module => {
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/CancelToken.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var Cancel = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/Cancel.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js": module => {
        "use strict";
        module.exports = function(value) {
            return !!(value && value.__CANCEL__);
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/Axios.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        var buildURL = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js");
        var InterceptorManager = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/InterceptorManager.js");
        var dispatchRequest = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/dispatchRequest.js");
        var mergeConfig = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/InterceptorManager.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/buildFullPath.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isAbsoluteURL = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAbsoluteURL.js");
        var combineURLs = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/combineURLs.js");
        module.exports = function(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var enhanceError = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/enhanceError.js");
        module.exports = function(message, config, code, request, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, request, response);
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/dispatchRequest.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        var transformData = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/transformData.js");
        var isCancel = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/cancel/isCancel.js");
        var defaults = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/enhanceError.js": module => {
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/mergeConfig.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/settle.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var createError = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/createError.js");
        module.exports = function(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/core/transformData.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        module.exports = function(data, headers, fns) {
            utils.forEach(fns, (function(fn) {
                data = fn(data, headers);
            }));
            return data;
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/defaults.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        var normalizeHeaderName = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/normalizeHeaderName.js");
        var DEFAULT_CONTENT_TYPE = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
            if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
        }
        function getDefaultAdapter() {
            var adapter;
            if ("undefined" !== typeof XMLHttpRequest) adapter = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js"); else if ("undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process)) adapter = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/adapters/xhr.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js": module => {
        "use strict";
        module.exports = function(fn, thisArg) {
            return function() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) args[i] = arguments[i];
                return fn.apply(thisArg, args);
            };
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/buildURL.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/combineURLs.js": module => {
        "use strict";
        module.exports = function(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/cookies.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAbsoluteURL.js": module => {
        "use strict";
        module.exports = function(url) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isAxiosError.js": module => {
        "use strict";
        module.exports = function(payload) {
            return "object" === typeof payload && true === payload.isAxiosError;
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/isURLSameOrigin.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/normalizeHeaderName.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
        module.exports = function(headers, normalizedName) {
            utils.forEach(headers, (function(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            }));
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/parseHeaders.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var utils = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js");
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
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/spread.js": module => {
        "use strict";
        module.exports = function(callback) {
            return function(arr) {
                return callback.apply(null, arr);
            };
        };
    },
    "../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/utils.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/node_modules/axios/lib/helpers/bind.js");
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
    "./src/assets/product/detail/main.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var sectionsLoad = __webpack_require__("../shared/browser/utils/sectionsLoad/index.js");
        var throttle = __webpack_require__("./node_modules/lodash/throttle.js");
        var throttle_default = __webpack_require__.n(throttle);
        var state_selector = __webpack_require__("../shared/browser/utils/state-selector.js");
        var components_modal = __webpack_require__("./src/assets/commons/components/modal/index.js");
        var request = __webpack_require__("../shared/browser/utils/request.js");
        const COMMENT_PAGE_SIZE = 6;
        const fetchComment = pageNum => {
            const {spuSeq} = state_selector.SL_State.rootState.product.spu;
            return request["default"].post("/product/detail/comment/query/list", {
                pageNum,
                pageSize: COMMENT_PAGE_SIZE,
                spuSeq
            });
        };
        const comment_fetchComment = fetchComment;
        var dayjs_min = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
        var dayjs_min_default = __webpack_require__.n(dayjs_min);
        const fullStar = `<svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>`;
        const emptyStar = `<svg class="rate-default" viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>`;
        function getRateSnippet(options) {
            const {value, count = 5, allowHalf = true} = null !== options && void 0 !== options ? options : {};
            const starHtml = Array.from({
                length: count
            }).map(((_, index) => {
                const currentValue = index + 1;
                if (allowHalf && index < value && value < currentValue) return `<div style="position: relative; display: inline-block;">\n            <div style="position: absolute;width: 50%;top: 0;left: 0;overflow: hidden;">${fullStar}</div>\n            <div>${emptyStar}</div>\n          </div>`;
                if (currentValue <= value) return fullStar;
                return emptyStar;
            })).join("");
            return `<div class="rate">${starHtml}</div>`;
        }
        const get_rate_snippet = getRateSnippet;
        const nameDesensitization = name => {
            if (!name) return "";
            const nameLen = name.length;
            if (nameLen < 2) return name;
            if (2 === nameLen) return `${name.charAt(0)}*`;
            const startLength = nameLen > 6 ? 6 : nameLen;
            return `${name.charAt(0)}${Array.from({
                length: startLength
            }).map((() => "*")).join("")}${name.charAt(nameLen - 1)}`;
        };
        const js_nameDesensitization = nameDesensitization;
        const commentCardTemplate = data => {
            const {nickname, imageList, content, time, score} = data;
            const info = $("<div></div>").addClass("product-comment-card-info").append([ $("<div></div>").addClass("product-comment-card-info-nickname").append(js_nameDesensitization(nickname)), $("<div></div>").addClass("product-comment-card-info-time").append(dayjs_min_default()(time).format("MMM DD,YYYY")), $("<div></div>").addClass("product-comment-card-info-rate").append(get_rate_snippet({
                value: score
            })), $("<div></div>").addClass("product-comment-card-info-content").append(content) ]);
            const images = $("<div></div>").addClass("product-comment-card-image").append((imageList || []).map((image => $("<img></img>").attr({
                "data-src": image
            }).addClass("lozad"))));
            if (imageList && imageList.length > 1) images.append($("<div></div>").addClass("product-comment-card-image-num").html(`<svg width="10" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill="#fff" d="M1.25 5.023h7.5v1.25h-7.5z"></path>\n            <path fill="#fff" d="M4.375 9.398v-7.5h1.25v7.5z"></path>\n          </svg>${imageList && imageList.length ? imageList.length - 1 : 0}`));
            return {
                info,
                images
            };
        };
        const comment_commentCardTemplate = commentCardTemplate;
        var toast = __webpack_require__("./src/assets/commons/components/toast/index.js");
        var helper = __webpack_require__("./src/assets/commons/utils/helper.js");
        const COMMENT_FETCH_STATUS = {
            PENDING: "PENDING",
            SUCCESS: "SUCCESS",
            ERROR: "ERROR"
        };
        const $commentMoreContainer = $("#MpModalproduct-comment-more .product-comment-mobile-more .container");
        let commentMobileCurrentPage = 0;
        let commentFetchStatus = null;
        const appendCommentItem = data => {
            const $loading = $("#MpModalproduct-comment-more .product-comment-mobile-more-loading");
            const lastChildrenIndex = $commentMoreContainer.children().length - 2 < 0 ? 0 : $commentMoreContainer.children().length - 2;
            const cards = data.list.map(((d, index) => {
                const {info, images} = comment_commentCardTemplate(d);
                return $("<div></div>").addClass([ "product-comment-card", "custom-body-color" ]).attr({
                    "data-index": lastChildrenIndex + index + (0 === lastChildrenIndex ? 0 : 1),
                    "data-more": true
                }).append([ info, images ]);
            }));
            $commentMoreContainer.append([ ...cards, $loading ]);
            if (data.total <= commentMobileCurrentPage * COMMENT_PAGE_SIZE) $loading.remove();
        };
        const fetchCommentHandle = async pageNum => {
            commentFetchStatus = COMMENT_FETCH_STATUS.PENDING;
            try {
                const response = await comment_fetchComment(pageNum);
                commentMobileCurrentPage += 1;
                if (response && response.data) {
                    const {data} = response;
                    const commentMore = state_selector.SL_State.rootState.commentMore ? state_selector.SL_State.rootState.commentMore : {
                        list: []
                    };
                    state_selector.SL_State.set("commentMore", {
                        ...data,
                        list: [ ...commentMore.list, ...data.list ]
                    });
                    appendCommentItem(data);
                }
                commentFetchStatus = COMMENT_FETCH_STATUS.SUCCESS;
            } catch (error) {
                commentFetchStatus = COMMENT_FETCH_STATUS.ERROR;
                console.log(error);
            }
        };
        const scrollEvent = () => {
            var _SL_State$rootState$c;
            const comments = null !== (_SL_State$rootState$c = state_selector.SL_State.rootState.comments) && void 0 !== _SL_State$rootState$c ? _SL_State$rootState$c : {
                list: []
            };
            const scrollFn = throttle_default()((async function(e) {
                const {scrollTop, scrollHeight, clientHeight} = e.currentTarget;
                if (commentFetchStatus === COMMENT_FETCH_STATUS.PENDING) return;
                if (scrollTop + clientHeight > scrollHeight - 300 && comments.total > 6 * commentMobileCurrentPage) fetchCommentHandle(commentMobileCurrentPage + 1);
            }), 300);
            $("#MpModalproduct-comment-more .mp-modal__body").on("scroll", scrollFn);
        };
        const openCommentMoreModal = () => {
            const modal = new components_modal["default"]({
                modalId: "product-comment-more"
            });
            modal.init();
            const loading = new toast.Loading({
                target: "#MpModalproduct-comment-more .product-comment-mobile-more-loading",
                duration: -1
            });
            $(".product-comment-mobile-summary-more").on("click", (function() {
                loading.open();
                modal.show();
                scrollEvent();
                fetchCommentHandle(commentMobileCurrentPage + 1);
            }));
            $(".product-comment-mobile-more-header-back").on("click", (function() {
                modal.hide();
                commentMobileCurrentPage = 0;
                $commentMoreContainer.empty().append($("<div></div>").addClass("product-comment-mobile-more-loading"));
            }));
            helper["default"].listenPlatform((() => {
                if ("pc" === helper["default"].getPlatform()) modal.hide();
            }));
        };
        const open_comment_more_modal = openCommentMoreModal;
        var core_class = __webpack_require__("./node_modules/swiper/esm/components/core/core-class.js");
        var isMobile = __webpack_require__("./src/assets/commons/utils/isMobile.js");
        __webpack_require__("./node_modules/swiper/swiper-bundle.css");
        let pcCommentSwiper = null;
        let mobileCommentSwiper = null;
        let {innerWidth: open_comment_detail_modal_innerWidth} = window;
        let currentOpenData = null;
        const commentSwiperPrevSelector = "#MpModalproduct-comment-detail .product-comment-preview-modal-prev-arrow";
        const commentSwiperNextSelector = "#MpModalproduct-comment-detail .product-comment-preview-modal-next-arrow";
        const infoClassPrefix = ".product-comment-preview-modal-commentInfo-";
        const $commentContentWrap = $("#MpModalproduct-comment-detail .product-comment-preview-modal-commentContentWrap");
        const commentInfoSelector = "#MpModalproduct-comment-detail .product-comment-preview-modal-commentInfo-content .product-comment-preview-modal-commentInfo-content-text";
        const $swiperBox = $(".product-comment-preview-modal-swiper-box");
        let commentInfoScrollFn = () => null;
        function swiperImgOnload(src, cb) {
            if (!src) return;
            const img = new Image;
            img.onload = () => {
                cb(img);
            };
            img.src = src;
        }
        const getSwiperWrapperHeight = (swiperInstance, _imgSrc) => {
            const $swiperDom = $(".product-comment-preview-modal-mobile-swiper .swiper-slide");
            if (!swiperInstance || 0 === $swiperDom.children().length) return;
            const currentSlide = $swiperDom[swiperInstance.activeIndex];
            const currentSlideImg = currentSlide.getElementsByTagName("img")[0];
            const imgSrc = _imgSrc || currentSlideImg.src || currentSlideImg.dataset.src;
            swiperImgOnload(imgSrc, (img => {
                if (img) {
                    const height = parseInt(String(swiperInstance.$wrapperEl[0].offsetWidth * img.height / img.width), 10);
                    swiperInstance.$wrapperEl[0].style.height = `${height}px`;
                }
            }));
        };
        const setSwiperTip = (current, total) => {
            $("#MpModalproduct-comment-detail .product-comment-preview-modal-image-num").empty().append(`${current || 1}/${total}`);
        };
        const replaceModalContent = data => {
            const {imageList = [], score} = data;
            if (imageList && imageList.length) $("#MpModalproduct-comment-detail .product-comment-preview-modal-swiperContainer-image ").empty().append((imageList || []).map((img => $("<div></div>").addClass("swiper-slide").append($("<img />").attr({
                "data-src": img
            }).addClass("lozad")))));
            setSwiperTip(1, imageList ? imageList.length : 0);
            [ "nickname", "time", "rate", "content" ].forEach((name => {
                let code = "";
                switch (name) {
                  case "rate":
                    code = get_rate_snippet({
                        value: score || 0
                    });
                    break;

                  case "time":
                    code = dayjs_min_default()(data.time).format("MMM DD,YYYY");
                    break;

                  case "nickname":
                    code = js_nameDesensitization(data.nickname);
                    break;

                  case "content":
                    code = $("<div></div>").addClass("product-comment-preview-modal-commentInfo-content-text").append($("<span></span>").append(data[name]));
                    break;

                  default:
                    code = data[name];
                }
                $(`#MpModalproduct-comment-detail ${infoClassPrefix}${name}`).empty().append(code);
            }));
        };
        const changeArrowIconDisable = data => {
            if (1 === data.length) {
                $(commentSwiperPrevSelector).hide();
                $(commentSwiperNextSelector).hide();
            } else {
                $(commentSwiperPrevSelector).css("display", "flex");
                $(commentSwiperNextSelector).css("display", "flex");
            }
            if (pcCommentSwiper) {
                const {activeIndex} = pcCommentSwiper;
                if (0 === activeIndex) $(commentSwiperPrevSelector).addClass("not-allowed"); else $(commentSwiperPrevSelector).removeClass("not-allowed");
                if (activeIndex === data.length - 1) $(commentSwiperNextSelector).addClass("not-allowed"); else $(commentSwiperNextSelector).removeClass("not-allowed");
            }
        };
        const slidePrev = () => {
            $(commentSwiperPrevSelector).on("click", (function() {
                const {activeIndex} = pcCommentSwiper;
                if (activeIndex > 0) pcCommentSwiper.slideTo(activeIndex - 1);
            }));
        };
        const slideNext = () => {
            $(commentSwiperNextSelector).on("click", (function() {
                const {activeIndex} = pcCommentSwiper;
                if (currentOpenData && currentOpenData.imageList && currentOpenData.imageList.length && activeIndex < currentOpenData.imageList.length) pcCommentSwiper.slideTo(activeIndex + 1);
            }));
        };
        const onSwiper = imageList => {
            if (mobileCommentSwiper && (0, isMobile["default"])()) {
                mobileCommentSwiper.on("init", (instance => {
                    getSwiperWrapperHeight(instance);
                }));
                mobileCommentSwiper.on("slideChange", (instance => {
                    setSwiperTip(instance.activeIndex + 1, imageList ? imageList.length : 0);
                    getSwiperWrapperHeight(instance);
                }));
                mobileCommentSwiper.init();
            }
            if (pcCommentSwiper && !(0, isMobile["default"])()) {
                pcCommentSwiper.on("slideChange", (instance => {
                    setSwiperTip(instance.activeIndex + 1, imageList.length);
                    changeArrowIconDisable(imageList);
                }));
                pcCommentSwiper.init();
            }
        };
        const onContentScroll = () => {
            const $commentInfo = $(commentInfoSelector);
            commentInfoScrollFn = function(e) {
                const {scrollTop, clientHeight} = e.target;
                const contentHeight = $commentInfo.children().get(0).getBoundingClientRect().height;
                if (scrollTop >= 20 && 0 === $commentContentWrap.find(".product-comment-preview-modal-commentInfo-content-topMask").length) $commentContentWrap.append($("<div></div>").addClass("product-comment-preview-modal-commentInfo-content-topMask")); else if (scrollTop < 20) $commentContentWrap.find(".product-comment-preview-modal-commentInfo-content-topMask").remove();
                if (scrollTop > 0 && !(contentHeight - scrollTop < clientHeight + 20) && 0 === $commentContentWrap.find(".product-comment-preview-modal-commentInfo-content-bottomMask").length) $commentContentWrap.append($("<div></div>").addClass("product-comment-preview-modal-commentInfo-content-bottomMask")); else if (contentHeight - scrollTop < clientHeight + 20) $commentContentWrap.find(".product-comment-preview-modal-commentInfo-content-bottomMask").remove();
            };
            $commentInfo.on("scroll", commentInfoScrollFn);
        };
        const initCommentDetailModal = () => {
            const modal = new components_modal["default"]({
                modalId: "product-comment-detail"
            });
            modal.init();
            const bodyClick = function(e) {
                var _ref;
                const isMore = e.currentTarget.getAttribute("data-more");
                const currentIndex = e.currentTarget.getAttribute("data-index");
                const comments = null !== (_ref = isMore ? state_selector.SL_State.rootState.commentMore : (0, 
                isMobile["default"])() ? state_selector.SL_State.rootState.mobileComments : state_selector.SL_State.rootState.comments) && void 0 !== _ref ? _ref : {
                    list: []
                };
                const currentData = comments.list ? comments.list[currentIndex] : {};
                const imageList = currentData.imageList ? currentData.imageList : [];
                currentOpenData = currentData;
                replaceModalContent(currentData);
                if (imageList.length) {
                    $swiperBox.show();
                    if ((0, isMobile["default"])()) mobileCommentSwiper = new core_class["default"](".product-comment-preview-modal-mobile-swiper .product-comment-preview-modal-swiperContainer", {
                        init: false,
                        width: open_comment_detail_modal_innerWidth
                    }); else pcCommentSwiper = new core_class["default"](".product-comment-preview-modal-pc-swiper .product-comment-preview-modal-swiperContainer", {
                        width: 375,
                        height: 480,
                        init: false
                    });
                    onSwiper(imageList);
                } else $swiperBox.hide();
                changeArrowIconDisable(imageList);
                modal.show();
                if (!(0, isMobile["default"])()) onContentScroll();
                $("#MpModalproduct-comment-detail .product-comment-preview-modal-closeIcon").on("click", (function() {
                    modal.hide();
                    if (pcCommentSwiper) {
                        pcCommentSwiper.destroy();
                        const $commentInfo = $(commentInfoSelector);
                        $commentInfo.off("scroll", commentInfoScrollFn);
                    }
                    if (mobileCommentSwiper) mobileCommentSwiper.destroy();
                }));
            };
            const windowResize = () => {
                if (window.innerWidth !== open_comment_detail_modal_innerWidth) {
                    open_comment_detail_modal_innerWidth = window.innerWidth;
                    if (mobileCommentSwiper && (0, isMobile["default"])()) {
                        mobileCommentSwiper.destroy();
                        mobileCommentSwiper = new core_class["default"](".product-comment-preview-modal-mobile-swiper .product-comment-preview-modal-swiperContainer", {
                            init: false,
                            width: open_comment_detail_modal_innerWidth
                        });
                        onSwiper(currentOpenData ? currentOpenData.imageList : null);
                    }
                }
            };
            $(document.body).on("click", ".product-comment-card", bodyClick);
            slidePrev();
            slideNext();
            $(window).on("resize", windowResize);
            return () => {
                $(document.body).remove("click", ".product-comment-card", bodyClick);
                $(window).off("resize", windowResize);
            };
        };
        const open_comment_detail_modal = initCommentDetailModal;
        const BTN_TYPE = {
            LINK: "link",
            PRE: "pre",
            NEXT: "next",
            ELLIPSIS: "ellipsis"
        };
        const template = source => {
            const temp = source.map((item => {
                switch (item.type) {
                  case BTN_TYPE.PRE:
                    return `\n          <span class="pagination_pre pagination_item" data-current=${item.current} data-pagenum="${item.pagenum}">\n            <a>\n              <span class="pagination_icon_arrow_color">\n                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M8 1L3 6L8 11" stroke-width="1.5" stroke-linecap="round" stroke="currentColor"></path>\n                </svg>\n              </span>\n            </a>\n          </span>\n        `;

                  case BTN_TYPE.NEXT:
                    return `\n          <span class="pagination_next pagination_item" data-current=${item.current} data-pagenum="${item.pagenum}">\n            <a>\n              <span class="pagination_icon_arrow_color">\n                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M2.49995 9.3995L6.9497 4.94975L2.49995 0.5" stroke="currentColor" stroke-linecap="round"></path>\n                </svg>\n              </span>\n            </a>\n          </span>\n        `;

                  case BTN_TYPE.ELLIPSIS:
                    return "<span>...</span>";

                  case BTN_TYPE.LINK:
                    return `\n          <span class="${item.active ? "pagination_item on" : "pagination_item"}" data-current=${item.current} data-pagenum="${item.pagenum}">\n            <a>${item.pagenum}</a>\n          </span>\n        `;

                  default:
                    return "";
                }
            }));
            return temp.join("");
        };
        const pageResponeBody = ({type = BTN_TYPE.LINK, pagenum, current, active}) => ({
            type,
            current,
            pagenum,
            active
        });
        const render = options => {
            const {$el, pageSize, total, current, isMobile} = options;
            const threshold = isMobile ? 5 : 7;
            const lastPageNum = Math.ceil(total / pageSize);
            const exist = 1;
            const boundaryThreshold = threshold - exist;
            const afterThreshold = lastPageNum - threshold + 2;
            const source = [];
            if (lastPageNum <= 0) return;
            if (lastPageNum <= threshold) for (let i = 1; i <= lastPageNum; i += 1) {
                if (1 === i && i !== current) source.push(pageResponeBody({
                    type: BTN_TYPE.PRE,
                    pagenum: current - 1,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: i,
                    current,
                    active: i === current
                }));
                if (i === lastPageNum && lastPageNum !== current) source.push(pageResponeBody({
                    type: BTN_TYPE.NEXT,
                    pagenum: current + 1,
                    current
                }));
            } else if (current < boundaryThreshold) {
                for (let i = 1; i <= boundaryThreshold; i += 1) {
                    if (1 === i && i !== current) source.push(pageResponeBody({
                        type: BTN_TYPE.PRE,
                        pagenum: current - 1,
                        current
                    }));
                    source.push(pageResponeBody({
                        type: BTN_TYPE.LINK,
                        pagenum: i,
                        current,
                        active: i === current
                    }));
                }
                source.push(pageResponeBody({
                    type: BTN_TYPE.ELLIPSIS
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: lastPageNum,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.NEXT,
                    pagenum: current + 1,
                    current
                }));
            } else if (current > afterThreshold) {
                source.push(pageResponeBody({
                    type: BTN_TYPE.PRE,
                    pagenum: current - 1,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: 1,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.ELLIPSIS
                }));
                for (let i = boundaryThreshold - 1; i >= 0; i -= 1) {
                    const tempNum = lastPageNum - i;
                    source.push(pageResponeBody({
                        type: BTN_TYPE.LINK,
                        pagenum: tempNum,
                        current,
                        active: tempNum === current
                    }));
                    if (tempNum === lastPageNum && tempNum !== current) source.push(pageResponeBody({
                        type: BTN_TYPE.NEXT,
                        pagenum: current + 1,
                        current
                    }));
                }
            } else {
                const exit = isMobile ? 1 : 2;
                source.push(pageResponeBody({
                    type: BTN_TYPE.PRE,
                    pagenum: current - 1,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: 1,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.ELLIPSIS
                }));
                for (let i = current - exit, len = current + exit; i <= len; i += 1) source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: i,
                    current,
                    active: i === current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.ELLIPSIS
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.LINK,
                    pagenum: lastPageNum,
                    current
                }));
                source.push(pageResponeBody({
                    type: BTN_TYPE.NEXT,
                    pagenum: current + 1,
                    current
                }));
            }
            const str = template(source);
            if (str) $el.html(str);
        };
        const currentPageChange = async options => {
            const {onChange, pagenum} = options;
            await onChange(pagenum);
            render({
                ...options,
                current: pagenum,
                pagenum: void 0
            });
        };
        const init = options => {
            const is_mobile = window.SL_State.get("request.is_mobile");
            const {$el, onChange, pageSize = 10, total = 0, isMobile = is_mobile, current = 1, isLoadRender} = options;
            if ($el && "function" === typeof onChange) {
                $el.on("click", (function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    const {target} = event;
                    const items = $(target).parents("span.pagination_item");
                    const item = items[0] || items.prevObject[0];
                    if ($(item).hasClass("pagination_item")) {
                        var _$$data;
                        const attribute = null !== (_$$data = $(item).data()) && void 0 !== _$$data ? _$$data : {};
                        const hash = {
                            $el,
                            pageSize,
                            total,
                            isMobile,
                            ...attribute
                        };
                        return currentPageChange({
                            ...hash,
                            onChange
                        });
                    }
                }));
                if (isLoadRender) render({
                    $el,
                    pageSize,
                    total,
                    current,
                    isMobile
                });
            }
        };
        const pagination = {
            init,
            render
        };
        let commentPcCurrentPage = 1;
        const replaceCommentItem = data => {
            const cards = data.list.map(((d, index) => {
                const {info, images} = comment_commentCardTemplate(d);
                return $("<div></div>").addClass([ "product-comment-card", "custom-body-color" ]).attr({
                    "data-index": index
                }).append(d.imageList && d.imageList.length ? [ info, images ] : [ info ]);
            }));
            const firstColChild = cards.filter(((_, index) => index % 2 === 0));
            const secondColChild = cards.filter(((_, index) => index % 2 !== 0));
            $(".product-comment-pc-wrap-col").eq(0).empty().append(firstColChild);
            $(".product-comment-pc-wrap-col").eq(1).empty().append(secondColChild);
        };
        const initCommentPagination = () => {
            const total = state_selector.SL_State.rootState.comments ? state_selector.SL_State.rootState.comments.total : 0;
            pagination.init({
                $el: $("#comment_pagination"),
                current: 1,
                pageSize: 6,
                total,
                isLoadRender: false,
                onChange: async page => {
                    const loading = new toast.Loading({
                        target: ".product-comment-pc",
                        duration: -1
                    });
                    if (page !== commentPcCurrentPage) try {
                        loading.open();
                        const response = await comment_fetchComment(page);
                        loading.close();
                        commentPcCurrentPage = page;
                        state_selector.SL_State.set("comments", response.data);
                        if (response && response.data) {
                            const {data} = response;
                            replaceCommentItem(data);
                        }
                    } catch (error) {
                        loading.close();
                        console.error(error);
                    }
                }
            });
        };
        const comment_pagination = initCommentPagination;
        __webpack_require__("./src/assets/product/commons/js/product-item.js");
        var report = __webpack_require__("../shared/browser/utils/report/index.js");
        var tool = __webpack_require__("../shared/browser/utils/report/tool.js");
        var currency = __webpack_require__("../shared/browser/utils/currency/index.js");
        const {formatCurrency} = currency["default"];
        const currentSpu = window.SL_State.get("product.spu");
        const EVENT_ID = "60006253";
        const report_parent = "#page-product-detail";
        function hdReport(options) {
            var _window$HdSdk;
            null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(EVENT_ID, options);
        }
        function clickCompReport(custom_component) {
            hdReport({
                event_name: "click_component",
                page: "pdp",
                custom_component
            });
        }
        function exposeCompReport(custom_component) {
            hdReport({
                event_name: "component_view",
                page: "pdp",
                custom_component
            });
        }
        const exposeConfig = {
            amazon: {
                cls: "product_thirdParty_amazon",
                statName: "gotoamazon"
            },
            productDesc: {
                cls: "product-detail-description",
                statName: "product_descri"
            },
            pcReviews: {
                cls: "product-comment-pc",
                statName: "reviews"
            },
            mReviews: {
                cls: "product-comment-mobile",
                statName: "reviews"
            },
            thirdPartyShare: {
                cls: "product-third-party-share_productDetail",
                statName: "share"
            },
            mMoreReviews: {
                cls: "product-comment-mobile-summary-more",
                statName: "more_reviews"
            },
            buyNow: {
                cls: "__sl-custom-track-product-detail-buy-now",
                statName: "buy_now"
            },
            moreBundling: {
                cls: "sales__productBundled",
                statName: "more_bundling"
            },
            viewMore: {
                cls: "product-info-salesTag",
                statName: "view_more"
            }
        };
        function collectExposeObserver() {
            Object.keys(exposeConfig).forEach((item => {
                const selector = exposeConfig[item].cls;
                (0, report.collectObserver)({
                    selector: `${report_parent} .${selector}`
                });
            }));
        }
        $((function() {
            $(document.body).on("click", `${report_parent} .__sl-custom-track-product-recommend-item`, (function() {
                const productId = $(this).data("id");
                const productIndex = $(this).data("index");
                const productStatus = $(this).data("status") ? "selling" : "soldout";
                const statData = {
                    based_product_id: null === currentSpu || void 0 === currentSpu ? void 0 : currentSpu.spuSeq,
                    rec_product_id: productId,
                    rank: Number(productIndex) + 1,
                    status: productStatus
                };
                hdReport({
                    event_name: "recommenditem",
                    ...statData
                });
            })).on("click", `${report_parent} .product_thirdParty_amazon`, (function() {
                clickCompReport("gotoamazon");
            })).on("click", `${report_parent} .product-third-party-share_productDetail .third-party-item`, (function() {
                const thisPlatform = $(this).data("platform");
                const platformMap = {
                    Share: "fb",
                    Tweet: "twitter",
                    LINE: "line",
                    Whatsapp: "whatsapp"
                };
                clickCompReport("share");
                hdReport({
                    event_name: "product_share",
                    share_dest: platformMap[thisPlatform]
                });
            })).on("click", `${report_parent} .product-comment-mobile-summary-more`, (function() {
                clickCompReport("more_reviews");
            })).on("click", `${report_parent} .__sl-custom-track-product-detail-buy-now`, (() => {
                clickCompReport("buy_now");
            })).on("click", `${report_parent} .sales__productBundled`, (() => {
                clickCompReport("more_bundling");
            }));
            let isExposedProductVideo = false;
            let isPlayedProductVideo = false;
            window.SL_EventBus.on("product:product-play-video", (() => {
                if (!isPlayedProductVideo) {
                    clickCompReport("play_video");
                    isPlayedProductVideo = true;
                }
            }));
            window.SL_EventBus.on("product:expose-product-video", (() => {
                if (!isExposedProductVideo) {
                    exposeCompReport("play_video");
                    isExposedProductVideo = true;
                }
            }));
            window.SL_EventBus.emit("global:hdReport:exit", [ EVENT_ID, null ]);
            collectExposeObserver();
            window.SL_EventBus.on("global:hdReport:expose", (target => {
                if ($(target).hasClass(exposeConfig.amazon.cls)) exposeCompReport(exposeConfig.amazon.statName);
                if ($(target).hasClass(exposeConfig.productDesc.cls)) exposeCompReport(exposeConfig.productDesc.statName);
                if ($(target).hasClass(exposeConfig.pcReviews.cls)) exposeCompReport(exposeConfig.pcReviews.statName);
                if ($(target).hasClass(exposeConfig.mReviews.cls)) exposeCompReport(exposeConfig.mReviews.statName);
                if ($(target).hasClass(exposeConfig.thirdPartyShare.cls)) exposeCompReport(exposeConfig.thirdPartyShare.statName);
                if ($(target).hasClass(exposeConfig.mMoreReviews.cls)) exposeCompReport(exposeConfig.mMoreReviews.statName);
                if ($(target).hasClass(exposeConfig.buyNow.cls)) exposeCompReport(exposeConfig.buyNow.statName);
                if ($(target).hasClass(exposeConfig.moreBundling.cls)) exposeCompReport(exposeConfig.moreBundling.statName);
                if ($(target).hasClass(exposeConfig.viewMore.cls)) exposeCompReport(exposeConfig.viewMore.statName);
            }));
        }));
        window.SL_EventBus.on("product:sku:change", (([sku]) => {
            if ((null === sku || void 0 === sku ? void 0 : sku.spuSeq) === (null === currentSpu || void 0 === currentSpu ? void 0 : currentSpu.spuSeq)) if (sku) {
                hdReport({
                    event_name: "sku_click",
                    sku_id: sku.spuSeq
                });
                window.SL_EventBus.emit("global:thirdPartReport", {
                    FBPixel: [ [ "track", "ViewContent", {
                        content_ids: [ null === sku || void 0 === sku ? void 0 : sku.spuSeq ],
                        content_name: currentSpu.title || "",
                        content_category: "",
                        content_type: "product_group",
                        currency: window.SL_State.get("storeInfo.currency"),
                        value: formatCurrency(sku.price || 0)
                    }, {
                        eventID: `viewContent${(0, tool.getEventID)()}`
                    } ] ]
                });
            }
        }));
        var components_toast = __webpack_require__("../shared/browser/components/hbs/shared/components/toast/index.js");
        var i18n = __webpack_require__("../shared/browser/utils/i18n.js");
        const createTemplate = (option = {}) => {
            const {content, id, cancelName, okName} = option;
            return `\n    <div ${id ? `id='${id}'` : ""} class="comment-confirm__wrapper">\n        <div class="comment-confirm__mask"></div>\n        <div class="comment-confirm__container">\n            <div class="comment-confirm__body">\n                <div class="comment-confirm__title">\n                ${content}\n                </div>\n                <div class="comment-confirm__btns">\n                    <div class="comment-confirm__btn comment-confirm__btn--cancel">${cancelName}</div>\n                    <div class="comment-confirm__btn comment-confirm__btn--ok">${okName}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n \n    `;
        };
        const defaultOption = {
            cancelName: (0, i18n.t)("common.cancel"),
            okName: (0, i18n.t)("common.ok"),
            okCallback: () => {}
        };
        class Confirm {
            constructor(option = {}) {
                const cancelCallback = () => {
                    this.cancel();
                };
                this.$dom = null;
                this.option = {
                    ...defaultOption,
                    cancelCallback,
                    ...option
                };
                this.init();
            }
            init() {
                this.render();
                this.initEvent();
            }
            initEvent() {
                this.$dom.find(".comment-confirm__btn--cancel").on("click", (() => {
                    this.option.cancelCallback();
                }));
                this.$dom.find(".comment-confirm__btn--ok").on("click", (() => {
                    const notClose = this.option.okCallback();
                    if (false !== notClose) this.cancel();
                }));
            }
            cancel() {
                this.$dom.remove();
                $("body").removeClass("comment-confirm-body-overflow-hidden");
            }
            render() {
                const template = createTemplate(this.option);
                this.$dom = $(template);
                $("body").append(this.$dom);
                $("body").addClass("comment-confirm-body-overflow-hidden");
            }
        }
        var utils_form = __webpack_require__("../shared/browser/utils/form/index.js");
        var dist = __webpack_require__("../shared/node_modules/@yy/sl-http-upload/dist/index.js");
        function uuid(len, radix) {
            const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            const uuid = [];
            let i;
            radix = radix || chars.length;
            if (len) for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]; else {
                let r;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
                uuid[14] = "4";
                for (i = 0; i < 36; i++) if (!uuid[i]) {
                    r = 0 | 16 * Math.random();
                    uuid[i] = chars[19 == i ? 3 & r | 8 : r];
                }
            }
            return uuid.join("");
        }
        const upload_defaultOption = {
            maxCount: 10,
            maxFileLength: 2 * 1024 * 1024,
            accept: "image/*",
            multiple: true,
            needDelete: true,
            onFileBeforeUploadError: errCode => {},
            beforeUpload: newFileList => true,
            onChange: fileList => {},
            onRemove: (file, fileList) => {},
            onFileUploadError: e => {},
            ossClientOption: {
                businessType: "orderComment",
                fileType: "IMAGE",
                client: "shopline-app",
                signUrl: "/api/signature/post/sign"
            }
        };
        const upload_createTemplate = option => {
            const {accept, multiple} = option;
            return `\n        <div class="product-upload-plugin">\n          <div class="product-upload__main">\n            <div class="product-upload__items">\n              \n            </div>\n            <div class="product-upload__item--row">\n              <div class="product-upload__item product-upload__btn--add">\n                <div class="animation-icon">\n                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2" stroke="currentColor" stroke-width="3"/>\n                  </svg>\n                </div>\n              </div>\n            </div>\n          </div>\n          <input type="file" \n            class="product-upload-input"\n            style="display:none;"\n            type="file"\n            accept="${accept}"\n            multiple="${multiple}"\n          />\n        </div>\n    `;
        };
        const createFileItemTemplate = (fileUrl, index, option) => {
            const {needDelete} = option;
            return `\n    <div class="product-upload__item--row">\n      <div class="product-upload__item" data-index='${index}'>\n        <img class="product-upload__item__img" src="${fileUrl}">\n        ${needDelete ? `<div class="product-upload__item__btn--delete">\n          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M11 5L5 11" stroke="currentColor" stroke-width="1.5"/>\n            <path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5"/>\n          </svg>\n        </div>` : ""} \n      </div>\n    </div>\n  `;
        };
        class Upload {
            constructor(option = {}) {
                this.option = {
                    ...upload_defaultOption,
                    ...option
                };
                this.fileList = [];
                this.$dom = null;
                this.$fileInput = null;
                this.$fileLists = null;
                this.$fileAddBtn = null;
                this.ossClient = null;
                this.onLoading = false;
                this.render();
                this.initOss();
                this.bindEvent();
            }
            get fileLength() {
                return this.fileList.length;
            }
            showFiles() {
                let html = "";
                this.fileList.forEach(((item, index) => {
                    html += createFileItemTemplate(item.url, index, this.option);
                }));
                this.$fileLists.empty().append($(html));
            }
            uploadFiles(files) {
                let length = files.length;
                let errCode = "";
                let fileList = Array.prototype.slice.call(files).filter((file => this.attrAccept(file, this.option.accept)));
                errCode += fileList.length < length ? "1" : "0";
                length = fileList.length;
                fileList = fileList.filter((item => item.size <= this.option.maxFileLength));
                errCode += fileList.length < length ? "1" : "0";
                if (fileList.length + this.fileLength > this.option.maxCount) fileList = fileList.slice(0, this.option.maxCount - this.fileLength);
                this.showError(errCode);
                fileList.length && this.postFilesToOss(fileList);
            }
            showError(errCode) {
                if ("00" !== errCode && this.option.onFileBeforeUploadError) this.option.onFileBeforeUploadError(errCode);
            }
            postFilesToOss(fileList) {
                this.activeAddBnt();
                this.onLoading = true;
                this.ossClient.initOSSData(fileList).then((() => this.ossClient.upload({
                    fileList: fileList.map((item => {
                        item.fid = uuid();
                        return {
                            file: item
                        };
                    }))
                }))).then((e => {
                    const list = (null === e || void 0 === e ? void 0 : e.map((item => item.data[0])).filter((item => !!item.url))) || [];
                    this.fileList.push(...list);
                    if ("function" === typeof this.option.onChange) this.option.onChange(this.fileList.slice());
                    this.showFiles();
                    this.changeAddBtnDisplay();
                }), (e => {
                    this.option.onFileUploadError(e);
                })).finally((() => {
                    this.unActiveAddBtn();
                    this.onLoading = false;
                }));
            }
            attrAccept(file, acceptedFiles) {
                if (file && acceptedFiles) {
                    const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
                    const fileName = `${file.name}`;
                    const mimeType = `${file.type}`;
                    const baseMimeType = mimeType.replace(/\/.*$/, "");
                    return acceptedFilesArray.some((type => {
                        const validType = type.trim();
                        if ("." === validType.charAt(0)) return -1 !== fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length); else if (/\/\*$/.test(validType)) return baseMimeType === validType.replace(/\/.*$/, "");
                        return mimeType === validType;
                    }));
                }
                return true;
            }
            showAddBtn() {
                this.$fileAddBtn.show();
            }
            hideAddBtn() {
                this.$fileAddBtn.hide();
            }
            changeAddBtnDisplay() {
                if (this.fileLength >= this.option.maxCount) this.hideAddBtn(); else this.showAddBtn();
            }
            activeAddBnt() {
                this.$fileAddBtn.addClass("upload-ing").css("pointer-events", "none");
            }
            unActiveAddBtn() {
                this.$fileAddBtn.removeClass("upload-ing").css("pointer-events", "");
            }
            bindEvent() {
                this.$fileInput.on("change", (e => {
                    const files = e.target.files;
                    this.uploadFiles(files);
                    e.target.value = "";
                }));
                this.$fileAddBtn.on("click", (() => {
                    this.$fileInput[0].click();
                }));
                this.$fileLists.on("click", ".product-upload__item .product-upload__item__btn--delete", (e => {
                    const parent = $(e.currentTarget).parents(".product-upload__item");
                    const index = parent.attr("data-index");
                    const deleteItem = this.fileList.splice(index, 1);
                    if ("function" === typeof this.option.onRemove) this.option.onRemove(deleteItem, this.fileList.slice());
                    if ("function" === typeof this.option.onChange) this.option.onChange(this.fileList.slice());
                    this.changeAddBtnDisplay();
                    this.showFiles();
                }));
            }
            initOss() {
                this.ossClient = new dist.SlAliyunOss({
                    ...this.option.ossClientOption
                });
            }
            render() {
                const template = upload_createTemplate(this.option);
                this.$dom = $(template);
                this.$fileInput = this.$dom.find(".product-upload-input");
                this.$fileLists = this.$dom.find(".product-upload__items");
                this.$fileAddBtn = this.$dom.find(".product-upload__btn--add");
                if (this.option.el) $(this.option.el).append(this.$dom);
            }
        }
        var form_form = __webpack_require__("../shared/browser/utils/form/form.js");
        function uuid_uuid(len, radix) {
            const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            const uuid = [];
            let i;
            radix = radix || chars.length;
            if (len) for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]; else {
                let r;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
                uuid[14] = "4";
                for (i = 0; i < 36; i++) if (!uuid[i]) {
                    r = 0 | 16 * Math.random();
                    uuid[i] = chars[19 == i ? 3 & r | 8 : r];
                }
            }
            return uuid.join("");
        }
        const reg = "([✀-➿]|[-]|\ud83c[\udc00-\udfff]|\ud83d[\udc00-\udfff]|[‑-⛿]|\ud83e[\udd10-\uddff])";
        const testEmoji = (str = "") => new RegExp(reg).test(str);
        const replaceEmoji = (string = "", value = "") => string.replace(new RegExp(reg, "g"), value);
        const BASICSTAR = '<?xml version="1.0" encoding="utf-8"?>' + '<svg version="1.1"' + 'xmlns="http://www.w3.org/2000/svg"' + 'viewBox="0 12.705 512 486.59"' + 'x="0px" y="0px"' + 'xml:space="preserve">' + "<polygon " + 'points="256.814,12.705 317.205,198.566' + " 512.631,198.566 354.529,313.435 " + "414.918,499.295 256.814,384.427 " + "98.713,499.295 159.102,313.435 " + '1,198.566 196.426,198.566 "/>' + "</svg>";
        const DEFAULTS = {
            starWidth: "32px",
            normalFill: "gray",
            ratedFill: "#f39c12",
            numStars: 5,
            maxValue: 5,
            precision: 1,
            rating: 0,
            fullStar: false,
            halfStar: false,
            hover: true,
            readOnly: false,
            spacing: "0px",
            rtl: false,
            multiColor: null,
            onInit: null,
            onChange: null,
            onSet: null,
            starSvg: null
        };
        const MULTICOLOR_OPTIONS = {
            startColor: "#c0392b",
            endColor: "#f1c40f"
        };
        function isMobileBrowser() {
            let check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        function checkPrecision(value, minValue, maxValue) {
            if (value === minValue) value = minValue; else if (value === maxValue) value = maxValue;
            return value;
        }
        function checkBounds(value, minValue, maxValue) {
            const isValid = value >= minValue && value <= maxValue;
            if (!isValid) throw Error(`Invalid Rating, expected value between ${minValue} and ${maxValue}`);
            return value;
        }
        function isDefined(value) {
            return "undefined" !== typeof value;
        }
        const hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
        function hexToRGB(hex) {
            if (!hexRegex.test(hex)) return null;
            const hexValues = hexRegex.exec(hex);
            const r = parseInt(hexValues[1], 16);
            const g = parseInt(hexValues[2], 16);
            const b = parseInt(hexValues[3], 16);
            return {
                r,
                g,
                b
            };
        }
        function getChannelValue(startVal, endVal, percent) {
            let newVal = (endVal - startVal) * (percent / 100);
            newVal = Math.round(startVal + newVal).toString(16);
            if (1 === newVal.length) newVal = `0${newVal}`;
            return newVal;
        }
        function getColor(startColor, endColor, percent) {
            if (!startColor || !endColor) return null;
            percent = isDefined(percent) ? percent : 0;
            startColor = hexToRGB(startColor);
            endColor = hexToRGB(endColor);
            const r = getChannelValue(startColor.r, endColor.r, percent);
            const b = getChannelValue(startColor.b, endColor.b, percent);
            const g = getChannelValue(startColor.g, endColor.g, percent);
            return `#${r}${g}${b}`;
        }
        const instanceMap = new WeakMap;
        function dataAttrOptions(node) {
            const {dataset} = node;
            return Object.keys(dataset).reduce(((options, attr) => {
                const match = attr.match(rateyoAttrRegex);
                if (!match) return options;
                const rateyoAttr = match[1], option = rateyoAttr[0].toLowerCase() + rateyoAttr.slice(1);
                options[option] = dataset[attr];
                return options;
            }), {});
        }
        function RateYo(node, options = {}) {
            if (!(this instanceof RateYo)) return new RateYo(node, options);
            if (instanceMap.has(node)) return instanceMap.get(node);
            const that = this;
            this.node = node;
            const $node = $(node);
            options = {
                ...DEFAULTS,
                ...options,
                ...dataAttrOptions($node[0])
            };
            $node.empty().addClass("jq-ry-container");
            const $groupWrapper = $(document.createElement("div")).addClass("jq-ry-group-wrapper").appendTo($node);
            const $normalGroup = $(document.createElement("div")).addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo($groupWrapper);
            const $ratedGroup = $(document.createElement("div")).addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo($groupWrapper);
            let step;
            let starWidth;
            let percentOfStar;
            let spacing;
            let percentOfSpacing;
            let containerWidth;
            const minValue = 1;
            let currentRating = options.rating;
            let isInitialized = false;
            function showRating(ratingVal) {
                if (!isDefined(ratingVal)) ratingVal = options.rating;
                currentRating = ratingVal;
                const numStarsToShow = ratingVal / step;
                let percent = numStarsToShow * percentOfStar;
                if (numStarsToShow > 1) percent += (Math.ceil(numStarsToShow) - 1) * percentOfSpacing;
                setRatedFill(options.ratedFill);
                percent = options.rtl ? 100 - percent : percent;
                if (percent < 0) percent = 0; else if (percent > 100) percent = 100;
                $ratedGroup.css("width", `${percent}%`);
            }
            function setContainerWidth() {
                containerWidth = starWidth * options.numStars + spacing * (options.numStars - 1);
                percentOfStar = starWidth / containerWidth * 100;
                percentOfSpacing = spacing / containerWidth * 100;
                $node.width(containerWidth);
                showRating();
            }
            function setStarWidth(newWidth) {
                const starHeight = options.starWidth = newWidth;
                starWidth = window.parseFloat(options.starWidth.replace("px", ""));
                $normalGroup.find("svg").attr({
                    width: options.starWidth,
                    height: starHeight
                });
                $ratedGroup.find("svg").attr({
                    width: options.starWidth,
                    height: starHeight
                });
                setContainerWidth();
                return $node;
            }
            function setSpacing(newSpacing) {
                options.spacing = newSpacing;
                spacing = parseFloat(options.spacing.replace("px", ""));
                $normalGroup.find("svg:not(:first-child)").css(`margin-left`, newSpacing);
                $ratedGroup.find("svg:not(:first-child)").css("margin-left", newSpacing);
                setContainerWidth();
                return $node;
            }
            function setNormalFill(newFill) {
                return $node;
            }
            let {ratedFill} = options;
            function setRatedFill(newFill) {
                if (options.multiColor) {
                    const ratingDiff = currentRating - minValue;
                    const percentCovered = ratingDiff / options.maxValue * 100;
                    const colorOpts = options.multiColor || {};
                    const startColor = colorOpts.startColor || MULTICOLOR_OPTIONS.startColor;
                    const endColor = colorOpts.endColor || MULTICOLOR_OPTIONS.endColor;
                    newFill = getColor(startColor, endColor, percentCovered);
                } else ratedFill = newFill;
                options.ratedFill = newFill;
                return $node;
            }
            function setRtl(newValue) {
                newValue = !!newValue;
                options.rtl = newValue;
                setNormalFill(options.normalFill);
                showRating();
            }
            function setMultiColor(colorOptions) {
                options.multiColor = colorOptions;
                setRatedFill(colorOptions || ratedFill);
            }
            function setNumStars(newValue) {
                options.numStars = newValue;
                step = options.maxValue / options.numStars;
                $normalGroup.empty();
                $ratedGroup.empty();
                for (let i = 0; i < options.numStars; i++) {
                    $(options.starSvg || BASICSTAR).appendTo($normalGroup);
                    $(options.starSvg || BASICSTAR).appendTo($ratedGroup);
                }
                setStarWidth(options.starWidth);
                setNormalFill(options.normalFill);
                setSpacing(options.spacing);
                showRating();
                return $node;
            }
            function setMaxValue(newValue) {
                options.maxValue = newValue;
                step = options.maxValue / options.numStars;
                if (options.rating > newValue) setRating(newValue);
                showRating();
                return $node;
            }
            function setPrecision(newValue) {
                options.precision = newValue;
                setRating(options.rating);
                return $node;
            }
            function setHalfStar(newValue) {
                options.halfStar = newValue;
                return $node;
            }
            function setFullStar(newValue) {
                options.fullStar = newValue;
                return $node;
            }
            function round(value) {
                const remainder = value % step;
                const halfStep = step / 2;
                const isHalfStar = options.halfStar;
                const isFullStar = options.fullStar;
                if (!isFullStar && !isHalfStar) return value;
                if (isFullStar || isHalfStar && remainder > halfStep) value += step - remainder; else {
                    value -= remainder;
                    if (remainder > 0) value += halfStep;
                }
                return value;
            }
            function calculateRating(e) {
                const position = $normalGroup.offset();
                const nodeStartX = position.left;
                const nodeEndX = nodeStartX + $normalGroup.width();
                const {maxValue} = options;
                const {pageX} = e;
                let calculatedRating = 0;
                if (pageX < nodeStartX) calculatedRating = minValue; else if (pageX > nodeEndX) calculatedRating = maxValue; else {
                    let calcPrcnt = (pageX - nodeStartX) / (nodeEndX - nodeStartX);
                    if (spacing > 0) {
                        calcPrcnt *= 100;
                        let remPrcnt = calcPrcnt;
                        while (remPrcnt > 0) if (remPrcnt > percentOfStar) {
                            calculatedRating += step;
                            remPrcnt -= percentOfStar + percentOfSpacing;
                        } else {
                            calculatedRating += remPrcnt / percentOfStar * step;
                            remPrcnt = 0;
                        }
                    } else calculatedRating = calcPrcnt * options.maxValue;
                    calculatedRating = round(calculatedRating);
                }
                if (options.rtl) calculatedRating = maxValue - calculatedRating;
                return parseFloat(calculatedRating);
            }
            function setReadOnly(newValue) {
                options.readOnly = newValue;
                $node.attr({
                    readonly: true
                });
                unbindEvents();
                if (!newValue) {
                    $node.removeAttr("readonly");
                    bindEvents();
                }
                return $node;
            }
            function setRating(newValue) {
                let rating = newValue;
                let {maxValue} = options;
                if ("string" === typeof rating) {
                    if ("%" === rating[rating.length - 1]) {
                        rating = rating.substr(0, rating.length - 1);
                        maxValue = 100;
                        setMaxValue(maxValue);
                    }
                    rating = parseFloat(rating);
                }
                checkBounds(rating, minValue, maxValue);
                rating = parseFloat(rating.toFixed(options.precision));
                checkPrecision(parseFloat(rating), minValue, maxValue);
                options.rating = rating;
                showRating();
                if (isInitialized) $node.trigger("rateyo.set", {
                    rating
                });
                return $node;
            }
            function setOnInit(method) {
                options.onInit = method;
                return $node;
            }
            function setOnSet(method) {
                options.onSet = method;
                return $node;
            }
            function setOnChange(method) {
                options.onChange = method;
                return $node;
            }
            this.rating = function(newValue) {
                if (!isDefined(newValue)) return options.rating;
                setRating(newValue);
                return $node;
            };
            this.destroy = function() {
                if (!options.readOnly) unbindEvents();
                instanceMap.delete(node);
                $node.removeClass("jq-ry-container").children().remove();
                return $node;
            };
            this.method = function(methodName) {
                if (!methodName) throw Error("Method name not specified!");
                if (!isDefined(this[methodName])) throw Error(`Method ${methodName} doesn't exist!`);
                const args = Array.prototype.slice.apply(arguments, []);
                const params = args.slice(1);
                const method = this[methodName];
                return method.apply(this, params);
            };
            this.option = function(optionName, param) {
                if (!isDefined(optionName)) return options;
                let method;
                switch (optionName) {
                  case "starWidth":
                    method = setStarWidth;
                    break;

                  case "numStars":
                    method = setNumStars;
                    break;

                  case "normalFill":
                    method = setNormalFill;
                    break;

                  case "ratedFill":
                    method = setRatedFill;
                    break;

                  case "multiColor":
                    method = setMultiColor;
                    break;

                  case "maxValue":
                    method = setMaxValue;
                    break;

                  case "precision":
                    method = setPrecision;
                    break;

                  case "rating":
                    method = setRating;
                    break;

                  case "halfStar":
                    method = setHalfStar;
                    break;

                  case "fullStar":
                    method = setFullStar;
                    break;

                  case "readOnly":
                    method = setReadOnly;
                    break;

                  case "spacing":
                    method = setSpacing;
                    break;

                  case "rtl":
                    method = setRtl;
                    break;

                  case "onInit":
                    method = setOnInit;
                    break;

                  case "onSet":
                    method = setOnSet;
                    break;

                  case "onChange":
                    method = setOnChange;
                    break;

                  default:
                    throw Error(`No such option as ${optionName}`);
                }
                return isDefined(param) ? method(param) : options[optionName];
            };
            function onMouseEnter(e) {
                if (!options.hover) return;
                let rating = calculateRating(e).toFixed(options.precision);
                const {maxValue} = options;
                rating = checkPrecision(parseFloat(rating), minValue, maxValue);
                showRating(rating);
                $node.trigger("rateyo.change", {
                    rating
                });
            }
            function onMouseLeave() {
                if (isMobileBrowser() || !options.hover) return;
                showRating();
                $node.trigger("rateyo.change", {
                    rating: options.rating
                });
            }
            function onMouseClick(e) {
                let resultantRating = calculateRating(e).toFixed(options.precision);
                resultantRating = parseFloat(resultantRating);
                that.rating(resultantRating);
            }
            function onInit(e, data) {
                if (options.onInit && "function" === typeof options.onInit) options.onInit.apply(this, [ data.rating, that ]);
            }
            function onChange(e, data) {
                if (options.onChange && "function" === typeof options.onChange) options.onChange.apply(this, [ data.rating, that ]);
            }
            function onSet(e, data) {
                if (options.onSet && "function" === typeof options.onSet) options.onSet.apply(this, [ data.rating, that ]);
            }
            function bindEvents() {
                $node.on("mousemove", onMouseEnter).on("mouseenter", onMouseEnter).on("mouseleave", onMouseLeave).on("click", onMouseClick).on("rateyo.init", onInit).on("rateyo.change", onChange).on("rateyo.set", onSet);
            }
            function unbindEvents() {
                $node.off("mousemove", onMouseEnter).off("mouseenter", onMouseEnter).off("mouseleave", onMouseLeave).off("click", onMouseClick).off("rateyo.init", onInit).off("rateyo.change", onChange).off("rateyo.set", onSet);
            }
            setNumStars(options.numStars);
            setReadOnly(options.readOnly);
            if (options.rtl) setRtl(options.rtl);
            instanceMap.set(node, this);
            this.rating(options.rating, true);
            isInitialized = true;
            $node.trigger("rateyo.init", {
                rating: options.rating
            });
        }
        Object.defineProperty(RateYo.prototype, "on", {
            value: function(eventName, handler) {
                $(this.node).on(eventName, handler);
                return this;
            }
        });
        Object.defineProperty(RateYo.prototype, "off", {
            value: function(eventName, handler) {
                $(this.node).off(eventName, handler);
                return this;
            }
        });
        Object.defineProperty(RateYo, "has", {
            value: function(node) {
                return instanceMap.has(node);
            }
        });
        Object.defineProperty(RateYo, "get", {
            value: function(node) {
                return instanceMap.get(node);
            }
        });
        Object.defineProperty(RateYo, "_$", {
            get() {
                return $;
            }
        });
        const components_rate = RateYo;
        function refreshPage() {
            location.reload();
        }
        const review_createTemplate = option => {
            const {id} = option;
            const template = `\n    <div id="${id}" class="product-comment-review body-font"> \n      <div class="comment-form-item comment-form-item-rate">\n        <span class="comment-form-rate-name">${(0, 
            i18n.t)("comment.ratings")}</span>\n        <div class="productCommentRate"></div>\n      </div>\n      <div class="comment-form-item" sl-form-item-name="content">\n        <div class="product_input" style="height:140px;">\n          <div class="product_input-area product_input-area--textarea">\n            <textarea style="resize:none" name="content" placeholder="${(0, 
            i18n.t)("comment.experience-about")}" autocomplete="off"></textarea>\n            <span class="product_input-area__length">\n              <span class="product_input-area__length__value">0</span>\n              /1000\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class="comment-form-item productCommentUpload">\n        <div class="comment-file-title"> \n          <span>${(0, 
            i18n.t)("comment.add-img")}</span> \n          <span class="comment-file__length">\n            ${(0, 
            i18n.t)("comment.more-images", {
                total: 9
            })}\n            (<span class="comment-file__length__value">0</span>/9)\n          </span>\n        </div>\n        <div class="comment-form-file-box"></div>\n      </div>\n      <div class="comment-form-item">\n        <button class="btn btn-primary btn-lg product-comment-btn">\n          ${(0, 
            i18n.t)("comment.write-review")}\n        </button>\n      </div>\n    </div>\n    `;
            return template;
        };
        const review_defaultOption = {};
        class Review {
            constructor(option = {}) {
                this.option = {
                    ...review_defaultOption,
                    id: "form_id_" + uuid_uuid(16, 16),
                    ...option
                };
                this.$dom = null;
                this.form = null;
                this.rate = null;
                this.upload = null;
                this.init();
            }
            init() {
                this.render();
                this.initForm();
                this.initEvent();
            }
            initForm() {
                this.form = utils_form["default"].takeForm(this.option.id);
                this.form.init({
                    validateTrigger: form_form.ValidateTrigger.ONNATIVECHANGE
                });
                this.initFormRule();
                const rate = this.$dom.find(".productCommentRate");
                this.rate = components_rate(rate, {
                    starWidth: "20px",
                    normalFill: "#A0A0A0",
                    ratedFill: "#E74C3C",
                    rating: 5,
                    fullStar: true,
                    minValue: 1,
                    spacing: "4px",
                    starSvg: `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.05163 0.908493C9.23504 0.53687 9.76496 0.53687 9.94837 0.908493L12.3226 5.71919C12.3954 5.86677 12.5362 5.96905 12.6991 5.99271L18.008 6.76415C18.4181 6.82374 18.5818 7.32772 18.2851 7.61699L14.4435 11.3616C14.3257 11.4765 14.2719 11.642 14.2997 11.8042L15.2066 17.0916C15.2766 17.5001 14.8479 17.8116 14.4811 17.6187L9.73267 15.1223C9.58701 15.0457 9.41299 15.0457 9.26733 15.1223L4.51888 17.6187C4.15207 17.8116 3.72335 17.5001 3.79341 17.0916L4.70028 11.8042C4.7281 11.642 4.67433 11.4765 4.55648 11.3616L0.71491 7.61699C0.418151 7.32772 0.581906 6.82374 0.992017 6.76415L6.30094 5.99271C6.4638 5.96905 6.60458 5.86677 6.67741 5.71919L9.05163 0.908493Z" fill="currentColor"/>\n      </svg>\n      `
                });
                const $fromDiv = this.$dom.find(".comment-form-file-box");
                this.upload = new Upload({
                    el: $fromDiv,
                    maxCount: 9,
                    maxFileLength: 2 * 1024 * 1024,
                    accept: "image/jpg,image/jpeg,image/png,image/bmp",
                    onFileBeforeUploadError(e) {
                        let msg = "";
                        switch (e) {
                          case "10":
                            msg = (0, i18n.t)("comment.only-image");
                            break;

                          case "01":
                            msg = (0, i18n.t)("comment.image-only-2m", {
                                size: 2
                            });
                            break;

                          case "11":
                            msg = (0, i18n.t)("comment.only-image") + "、" + (0, i18n.t)("comment.image-only-2m", {
                                size: 2
                            });
                        }
                        components_toast["default"].init({
                            content: msg,
                            duration: 3e3
                        });
                    },
                    onFileUploadError(e) {},
                    onChange: fileList => {
                        this.$dom.find(".comment-file__length__value").text(fileList.length);
                    }
                });
            }
            initFormRule(form = this.form) {
                form.setFields([ {
                    name: "content",
                    value: "",
                    rules: [ {
                        required: true,
                        message: (0, i18n.t)("comment.about-product"),
                        pattern: /^(?!(\s+$))/
                    } ]
                } ]);
            }
            initEvent() {
                this.$dom.find(".product-comment-btn").on("click", (() => {
                    this.handleSubmit();
                }));
                this.form.on("valuesChange", (e => {
                    var _value;
                    let {changedValue: {content: value}} = e;
                    let isChange = false;
                    if (testEmoji(value)) {
                        value = replaceEmoji(value);
                        isChange = true;
                    }
                    if (value.length > 1e3) {
                        value = value.substring(0, 1e3);
                        isChange = true;
                    }
                    if (isChange) this.form.setFields([ {
                        name: "content",
                        value
                    } ]);
                    this.$dom.find('[sl-form-item-name="content"]').find(".product_input-area__length__value").text((null === (_value = value) || void 0 === _value ? void 0 : _value.length) || 0);
                }));
            }
            checkIsUpload() {
                var _this$upload;
                if (null !== (_this$upload = this.upload) && void 0 !== _this$upload && _this$upload.onLoading) {
                    components_toast["default"].init({
                        content: (0, i18n.t)("comment.on-img-upload-tip"),
                        duration: 3e3
                    });
                    return true;
                }
                return false;
            }
            async handleSubmit({success, error, beforePost} = {}) {
                const validate = await this.form.validateFields();
                const value = this.form.getFieldsValue();
                let {content} = value;
                content = content.trim();
                const score = this.rate.rating();
                if (validate.pass && score > 0) {
                    var _this$upload2, _this$upload2$fileLis, _window, _window2;
                    if (this.checkIsUpload()) return;
                    const imageList = (null === (_this$upload2 = this.upload) || void 0 === _this$upload2 ? void 0 : null === (_this$upload2$fileLis = _this$upload2.fileList) || void 0 === _this$upload2$fileLis ? void 0 : _this$upload2$fileLis.map((item => item.url))) || [];
                    const postData = {
                        content,
                        score,
                        imageList,
                        productId: null === (_window = window) || void 0 === _window ? void 0 : _window.SL_State.get("productComment.spuSeq"),
                        countryCode: (null === (_window2 = window) || void 0 === _window2 ? void 0 : _window2.SL_State.get("request.cookie.country_code")) || "US"
                    };
                    beforePost && beforePost();
                    this.$dom.find(".product-comment-btn").addClass("disabled").attr("disabled", true);
                    request["default"].post("/product/detail/comment/create", postData).then((() => {
                        success && success();
                        components_toast["default"].init({
                            content: (0, i18n.t)("comment.thanks-msg"),
                            duration: 1e3
                        });
                        setTimeout((() => {
                            refreshPage();
                        }), 1e3);
                    }), (e => {
                        error && error();
                        this.$dom.find(".product-comment-btn").removeClass("disabled").attr("disabled", false);
                        if (e && "EPD1001" === e.code) components_toast["default"].init({
                            content: (0, i18n.t)("comment.no-bought-msg"),
                            duration: 3e3
                        }); else components_toast["default"].init({
                            content: (0, i18n.t)("comment.network-err-msg"),
                            duration: 3e3
                        });
                    }));
                }
            }
            render() {
                const template = review_createTemplate(this.option);
                this.$dom = $(template);
                if (this.option.ele) $(this.option.ele).append(this.$dom);
            }
        }
        var BaseClass = __webpack_require__("../shared/browser/components/hbs/shared/base/BaseClass.js");
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
        var scroll_lock = __webpack_require__("../shared/node_modules/scroll-lock/dist/scroll-lock.js");
        const bem = createNamespace("mp", "modal");
        const DEFAULT_MODAL_ID_PRE = "MpModal";
        const VISIBLE = "visible";
        const HIDDEN = "hidden";
        const animationClassMap = {
            visible: bem("visibleAnimation"),
            hidden: bem("notVisibleAnimation")
        };
        const visibleClassName = bem("visible");
        const maskClosableClass = bem("closable");
        let full_uuid = 0;
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
                this.modalId = config.id || `${DEFAULT_MODAL_ID_PRE}${++full_uuid}`;
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
                const modalHtml = `\n      <div id="${this.modalId}" class="${bem("wrapper")}">\n        <div class="${bem("mask")}"></div>\n        <div class="${bem("container")}">\n          ${closable ? `<span class="${bem("close")}"></span>` : ""}\n          <div class="${bem("body")} ${bodyClassName}">\n            ${content}\n          </div>\n        </div>\n      </div>\n    `;
                const $modal = $(modalHtml);
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
                    this.unBindEvents = this.bindEvents();
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
                window.SL_EventBus.emit("global:popup:close");
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
                    this.detachEvents();
                    this.destroyed = true;
                }
            }
            bindEvents() {
                this.$onPortals("click", `.${bem("close")}`, this.hide.bind(this, false));
                if (this.config.maskClosable) this.$onPortals("click", `.${bem("mask")}`, this.hide.bind(this, false));
                this.$onPortals("animationend", `.${bem("container")}`, this.afterAnimation.bind(this));
            }
            detachEvents() {
                this.$offAll();
            }
        }
        !function() {
            function showConfirm(content = "", option) {
                new Confirm({
                    content,
                    ...option
                });
            }
            function showToast(content = "") {
                components_toast["default"].init({
                    content,
                    duration: 3e3
                });
            }
            function requestUserAuthor() {
                var _window;
                return request["default"].post("/product/detail/comment/isAllow", {
                    productId: null === (_window = window) || void 0 === _window ? void 0 : _window.SL_State.get("productComment.spuSeq")
                });
            }
            function checkUserCanAdd() {
                return new Promise((async (resolve, reject) => {
                    try {
                        const res = await requestUserAuthor();
                        if (res.data.isAllow) resolve(); else {
                            showToast((0, i18n.t)("comment.no-bought-msg"));
                            reject();
                        }
                    } catch (e) {
                        reject();
                        if ("CUS0401" === e.code) showConfirm((0, i18n.t)("comment.no-login-msg"), {
                            okName: (0, i18n.t)("comment.sign-in"),
                            okCallback() {
                                window.location.href = "/user/signIn?redirectUrl=" + location.href;
                            }
                        }); else components_toast["default"].init({
                            content: (0, i18n.t)("comment.network-err-msg"),
                            duration: 3e3
                        });
                    }
                }));
            }
            function initEvent() {
                $(document.body).on("click", ".comment-leave-review-btn", (async () => {
                    const $btm = $(".comment-leave-review-btn");
                    $btm.attr("disabled", true);
                    try {
                        await checkUserCanAdd();
                    } catch (e) {
                        $btm.attr("disabled", false);
                        return;
                    }
                    $btm.remove();
                    new Review({
                        ele: $(".product-comment-leave-pc")[0]
                    });
                }));
                $(document.body).on("click", ".comment-leave-review-btn--mobile", (async e => {
                    const target = $(e.currentTarget);
                    target.attr("disabled", true);
                    try {
                        await checkUserCanAdd();
                        target.attr("disabled", false);
                    } catch (e) {
                        target.attr("disabled", false);
                        return;
                    }
                    const modal = showModal();
                    modal.show();
                    const review = new Review({
                        ele: $(".product-comment-mobile-content")[0]
                    });
                    const btn = modal.$modal.find(".product-comment-mobile-modal-header-btn");
                    btn.on("click", (() => {
                        review.handleSubmit({
                            beforePost() {
                                btn.addClass("disabled").attr("disabled", true).css("pointer-events", "none");
                            },
                            error() {
                                btn.removeClass("disabled").attr("disabled", false).css("pointer-events", "");
                            }
                        });
                    }));
                    modal.$modal.find(".product-comment-mobile-modal-header-back").on("click", (() => {
                        modal.hide();
                    }));
                }));
            }
            function showModal() {
                return new ModalWithHtml({
                    zIndex: 1005,
                    containerClassName: "",
                    closable: false,
                    maskClosable: true,
                    bodyClassName: "",
                    content: `\n        <div class="product-comment-mobile-modal">\n          <div class="product-comment-mobile-modal-header">\n            <svg class="product-comment-mobile-modal-header-back" width="28" height="28" viewBox="0 0 28 28" style="stroke: currentColor">\n              <path d="M22.5 13.5H5M5 13.5L13 5.5M5 13.5L13 21.5" stroke-linecap="round" stroke-linejoin="round"/>\n            </svg>\n            <div class="product-comment-mobile-modal-header-title">${(0, 
                    i18n.t)("comment.write-review")}</div>\n            <div class="product-comment-mobile-modal-header-btn">\n              ${(0, 
                    i18n.t)("comment.mobile-submit")}\n            </div>\n          </div>\n          <div class="product-comment-mobile-content">\n          </div>\n        </div>\n        `,
                    destroyedOnClosed: true,
                    afterClose: () => {}
                });
            }
            function init() {
                const $btn = $(".comment-leave-review-btn");
                const $mobile = $(".comment-leave-review-btn--mobile");
                if (!$btn.length && !$mobile.length) return;
                initEvent();
            }
            init();
        }();
        var product_preview = __webpack_require__("./src/assets/product/detail/js/product-preview.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        $("body").on("click", ".products-detail-info .comments", (() => {
            document.querySelector("#product-comment-container").scrollIntoView();
        }));
        class ProductPreviewSection {
            constructor() {
                _defineProperty(this, "instance", null);
                _defineProperty(this, "openComment", null);
                this.instance = (0, product_preview["default"])({
                    id: "productDetail",
                    statePath: "product",
                    offsetTop: 20
                });
                this.openComment = open_comment_detail_modal();
                open_comment_more_modal();
                comment_pagination();
            }
            onUnload() {
                if (this.instance) {
                    var _this$instance, _this$openComment;
                    null === (_this$instance = this.instance) || void 0 === _this$instance ? void 0 : _this$instance.destroy();
                    null === (_this$openComment = this.openComment) || void 0 === _this$openComment ? void 0 : _this$openComment.call(this);
                }
            }
        }
        _defineProperty(ProductPreviewSection, "type", "product-preview");
        (0, sectionsLoad.registrySectionConstructor)("product-preview", ProductPreviewSection);
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
    "../shared/node_modules/array.prototype.map/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var ArraySpeciesCreate = __webpack_require__("../shared/node_modules/es-abstract/2021/ArraySpeciesCreate.js");
        var Call = __webpack_require__("../shared/node_modules/es-abstract/2021/Call.js");
        var CreateDataPropertyOrThrow = __webpack_require__("../shared/node_modules/es-abstract/2021/CreateDataPropertyOrThrow.js");
        var Get = __webpack_require__("../shared/node_modules/es-abstract/2021/Get.js");
        var HasProperty = __webpack_require__("../shared/node_modules/es-abstract/2021/HasProperty.js");
        var IsCallable = __webpack_require__("../shared/node_modules/es-abstract/2021/IsCallable.js");
        var ToUint32 = __webpack_require__("../shared/node_modules/es-abstract/2021/ToUint32.js");
        var ToObject = __webpack_require__("../shared/node_modules/es-abstract/2021/ToObject.js");
        var ToString = __webpack_require__("../shared/node_modules/es-abstract/2021/ToString.js");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var isString = __webpack_require__("../shared/node_modules/is-string/index.js");
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
    "../shared/node_modules/array.prototype.map/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var define = __webpack_require__("../shared/node_modules/define-properties/index.js");
        var RequireObjectCoercible = __webpack_require__("../shared/node_modules/es-abstract/2021/RequireObjectCoercible.js");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var implementation = __webpack_require__("../shared/node_modules/array.prototype.map/implementation.js");
        var getPolyfill = __webpack_require__("../shared/node_modules/array.prototype.map/polyfill.js");
        var polyfill = getPolyfill();
        var shim = __webpack_require__("../shared/node_modules/array.prototype.map/shim.js");
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
    "../shared/node_modules/array.prototype.map/polyfill.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var arrayMethodBoxesProperly = __webpack_require__("../shared/node_modules/es-array-method-boxes-properly/index.js");
        var implementation = __webpack_require__("../shared/node_modules/array.prototype.map/implementation.js");
        module.exports = function() {
            var method = Array.prototype.map;
            return arrayMethodBoxesProperly(method) ? method : implementation;
        };
    },
    "../shared/node_modules/array.prototype.map/shim.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var define = __webpack_require__("../shared/node_modules/define-properties/index.js");
        var getPolyfill = __webpack_require__("../shared/node_modules/array.prototype.map/polyfill.js");
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
    "../shared/node_modules/call-bind/callBound.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var callBind = __webpack_require__("../shared/node_modules/call-bind/index.js");
        var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
        module.exports = function(name, allowMissing) {
            var intrinsic = GetIntrinsic(name, !!allowMissing);
            if ("function" === typeof intrinsic && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
            return intrinsic;
        };
    },
    "../shared/node_modules/call-bind/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("../shared/node_modules/function-bind/index.js");
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
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
    "../shared/node_modules/define-properties/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var keys = __webpack_require__("../shared/node_modules/object-keys/index.js");
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
    "../shared/node_modules/es-array-method-boxes-properly/index.js": module => {
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
    "../shared/node_modules/es-to-primitive/es2015.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var hasSymbols = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator;
        var isPrimitive = __webpack_require__("../shared/node_modules/es-to-primitive/helpers/isPrimitive.js");
        var isCallable = __webpack_require__("../shared/node_modules/is-callable/index.js");
        var isDate = __webpack_require__("../shared/node_modules/is-date-object/index.js");
        var isSymbol = __webpack_require__("../shared/node_modules/is-symbol/index.js");
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
    "../shared/node_modules/es-to-primitive/helpers/isPrimitive.js": module => {
        "use strict";
        module.exports = function(value) {
            return null === value || "function" !== typeof value && "object" !== typeof value;
        };
    },
    "../shared/node_modules/function-bind/implementation.js": module => {
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
    "../shared/node_modules/function-bind/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var implementation = __webpack_require__("../shared/node_modules/function-bind/implementation.js");
        module.exports = Function.prototype.bind || implementation;
    },
    "../shared/node_modules/get-intrinsic/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
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
        var hasSymbols = __webpack_require__("../shared/node_modules/has-symbols/index.js")();
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
        var bind = __webpack_require__("../shared/node_modules/function-bind/index.js");
        var hasOwn = __webpack_require__("../shared/node_modules/has/src/index.js");
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
    "../shared/node_modules/has-symbols/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var origSymbol = "undefined" !== typeof Symbol && Symbol;
        var hasSymbolSham = __webpack_require__("../shared/node_modules/has-symbols/shams.js");
        module.exports = function() {
            if ("function" !== typeof origSymbol) return false;
            if ("function" !== typeof Symbol) return false;
            if ("symbol" !== typeof origSymbol("foo")) return false;
            if ("symbol" !== typeof Symbol("bar")) return false;
            return hasSymbolSham();
        };
    },
    "../shared/node_modules/has-symbols/shams.js": module => {
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
    "../shared/node_modules/has-tostringtag/shams.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var hasSymbols = __webpack_require__("../shared/node_modules/has-symbols/shams.js");
        module.exports = function() {
            return hasSymbols() && !!Symbol.toStringTag;
        };
    },
    "../shared/node_modules/has/src/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var bind = __webpack_require__("../shared/node_modules/function-bind/index.js");
        module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
    },
    "../shared/node_modules/is-arguments/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var hasToStringTag = __webpack_require__("../shared/node_modules/has-tostringtag/shams.js")();
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
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
    "../shared/node_modules/is-callable/index.js": module => {
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
    "../shared/node_modules/is-date-object/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
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
        var hasToStringTag = __webpack_require__("../shared/node_modules/has-tostringtag/shams.js")();
        module.exports = function(value) {
            if ("object" !== typeof value || null === value) return false;
            return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
        };
    },
    "../shared/node_modules/is-map/index.js": module => {
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
    "../shared/node_modules/is-regex/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var hasToStringTag = __webpack_require__("../shared/node_modules/has-tostringtag/shams.js")();
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
    "../shared/node_modules/is-set/index.js": module => {
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
    "../shared/node_modules/is-string/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
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
        var hasToStringTag = __webpack_require__("../shared/node_modules/has-tostringtag/shams.js")();
        module.exports = function(value) {
            if ("string" === typeof value) return true;
            if ("object" !== typeof value) return false;
            return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
        };
    },
    "../shared/node_modules/is-symbol/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toStr = Object.prototype.toString;
        var hasSymbols = __webpack_require__("../shared/node_modules/has-symbols/index.js")();
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
    "../shared/node_modules/isarray/index.js": module => {
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return "[object Array]" == toString.call(arr);
        };
    },
    "../shared/node_modules/iterate-iterator/index.js": module => {
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
    "../shared/node_modules/object-inspect/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
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
        var inspectCustom = __webpack_require__("?5583").custom;
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
    "../shared/node_modules/object-keys/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var keysShim;
        if (!Object.keys) {
            var has = Object.prototype.hasOwnProperty;
            var toStr = Object.prototype.toString;
            var isArgs = __webpack_require__("../shared/node_modules/object-keys/isArguments.js");
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
    "../shared/node_modules/object-keys/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var slice = Array.prototype.slice;
        var isArgs = __webpack_require__("../shared/node_modules/object-keys/isArguments.js");
        var origKeys = Object.keys;
        var keysShim = origKeys ? function(o) {
            return origKeys(o);
        } : __webpack_require__("../shared/node_modules/object-keys/implementation.js");
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
    "../shared/node_modules/object-keys/isArguments.js": module => {
        "use strict";
        var toStr = Object.prototype.toString;
        module.exports = function(value) {
            var str = toStr.call(value);
            var isArgs = "[object Arguments]" === str;
            if (!isArgs) isArgs = "[object Array]" !== str && null !== value && "object" === typeof value && "number" === typeof value.length && value.length >= 0 && "[object Function]" === toStr.call(value.callee);
            return isArgs;
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
    "../shared/node_modules/promise.allsettled/implementation.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var requirePromise = __webpack_require__("../shared/node_modules/promise.allsettled/requirePromise.js");
        requirePromise();
        var PromiseResolve = __webpack_require__("../shared/node_modules/es-abstract/2020/PromiseResolve.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2020/Type.js");
        var iterate = __webpack_require__("../shared/node_modules/iterate-value/index.js");
        var map = __webpack_require__("../shared/node_modules/array.prototype.map/index.js");
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var callBind = __webpack_require__("../shared/node_modules/call-bind/index.js");
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
    "../shared/node_modules/promise.allsettled/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var callBind = __webpack_require__("../shared/node_modules/call-bind/index.js");
        var define = __webpack_require__("../shared/node_modules/define-properties/index.js");
        var requirePromise = __webpack_require__("../shared/node_modules/promise.allsettled/requirePromise.js");
        var implementation = __webpack_require__("../shared/node_modules/promise.allsettled/implementation.js");
        var getPolyfill = __webpack_require__("../shared/node_modules/promise.allsettled/polyfill.js");
        var shim = __webpack_require__("../shared/node_modules/promise.allsettled/shim.js");
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
    "../shared/node_modules/promise.allsettled/polyfill.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var requirePromise = __webpack_require__("../shared/node_modules/promise.allsettled/requirePromise.js");
        var implementation = __webpack_require__("../shared/node_modules/promise.allsettled/implementation.js");
        module.exports = function() {
            requirePromise();
            return "function" === typeof Promise.allSettled ? Promise.allSettled : implementation;
        };
    },
    "../shared/node_modules/promise.allsettled/requirePromise.js": module => {
        "use strict";
        module.exports = function() {
            if ("function" !== typeof Promise) throw new TypeError("`Promise.allSettled` requires a global `Promise` be available.");
        };
    },
    "../shared/node_modules/promise.allsettled/shim.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var requirePromise = __webpack_require__("../shared/node_modules/promise.allsettled/requirePromise.js");
        var getPolyfill = __webpack_require__("../shared/node_modules/promise.allsettled/polyfill.js");
        var define = __webpack_require__("../shared/node_modules/define-properties/index.js");
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
    "../shared/node_modules/scroll-lock/dist/scroll-lock.js": function(module) {
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
    "?5583": () => {},
    "../shared/node_modules/es-abstract/2020/IsArray.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $Array = GetIntrinsic("%Array%");
        var toStr = !$Array.isArray && __webpack_require__("../shared/node_modules/call-bind/callBound.js")("Object.prototype.toString");
        module.exports = $Array.isArray || function(argument) {
            return "[object Array]" === toStr(argument);
        };
    },
    "../shared/node_modules/es-abstract/2020/PromiseResolve.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var callBind = __webpack_require__("../shared/node_modules/call-bind/index.js");
        var $resolve = GetIntrinsic("%Promise.resolve%", true);
        var $PromiseResolve = $resolve && callBind($resolve);
        module.exports = function(C, x) {
            if (!$PromiseResolve) throw new SyntaxError("This environment does not support Promises.");
            return $PromiseResolve(C, x);
        };
    },
    "../shared/node_modules/es-abstract/2020/Type.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var ES5Type = __webpack_require__("../shared/node_modules/es-abstract/5/Type.js");
        module.exports = function(x) {
            if ("symbol" === typeof x) return "Symbol";
            if ("bigint" === typeof x) return "BigInt";
            return ES5Type(x);
        };
    },
    "../shared/node_modules/es-abstract/2021/ArrayCreate.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $ArrayPrototype = GetIntrinsic("%Array.prototype%");
        var $RangeError = GetIntrinsic("%RangeError%");
        var $SyntaxError = GetIntrinsic("%SyntaxError%");
        var $TypeError = GetIntrinsic("%TypeError%");
        var IsIntegralNumber = __webpack_require__("../shared/node_modules/es-abstract/2021/IsIntegralNumber.js");
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
    "../shared/node_modules/es-abstract/2021/ArraySpeciesCreate.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $species = GetIntrinsic("%Symbol.species%", true);
        var $TypeError = GetIntrinsic("%TypeError%");
        var ArrayCreate = __webpack_require__("../shared/node_modules/es-abstract/2021/ArrayCreate.js");
        var Get = __webpack_require__("../shared/node_modules/es-abstract/2021/Get.js");
        var IsArray = __webpack_require__("../shared/node_modules/es-abstract/2021/IsArray.js");
        var IsConstructor = __webpack_require__("../shared/node_modules/es-abstract/2021/IsConstructor.js");
        var IsIntegralNumber = __webpack_require__("../shared/node_modules/es-abstract/2021/IsIntegralNumber.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
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
    "../shared/node_modules/es-abstract/2021/Call.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var IsArray = __webpack_require__("../shared/node_modules/es-abstract/2021/IsArray.js");
        var $apply = GetIntrinsic("%Reflect.apply%", true) || callBound("%Function.prototype.apply%");
        module.exports = function(F, V) {
            var argumentsList = arguments.length > 2 ? arguments[2] : [];
            if (!IsArray(argumentsList)) throw new $TypeError("Assertion failed: optional `argumentsList`, if provided, must be a List");
            return $apply(F, V, argumentsList);
        };
    },
    "../shared/node_modules/es-abstract/2021/CreateDataProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var DefineOwnProperty = __webpack_require__("../shared/node_modules/es-abstract/helpers/DefineOwnProperty.js");
        var FromPropertyDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/FromPropertyDescriptor.js");
        var OrdinaryGetOwnProperty = __webpack_require__("../shared/node_modules/es-abstract/2021/OrdinaryGetOwnProperty.js");
        var IsDataDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/IsDataDescriptor.js");
        var IsExtensible = __webpack_require__("../shared/node_modules/es-abstract/2021/IsExtensible.js");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var SameValue = __webpack_require__("../shared/node_modules/es-abstract/2021/SameValue.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
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
    "../shared/node_modules/es-abstract/2021/CreateDataPropertyOrThrow.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var CreateDataProperty = __webpack_require__("../shared/node_modules/es-abstract/2021/CreateDataProperty.js");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        module.exports = function(O, P, V) {
            if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
            if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true");
            var success = CreateDataProperty(O, P, V);
            if (!success) throw new $TypeError("unable to create data property");
            return success;
        };
    },
    "../shared/node_modules/es-abstract/2021/DefinePropertyOrThrow.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var isPropertyDescriptor = __webpack_require__("../shared/node_modules/es-abstract/helpers/isPropertyDescriptor.js");
        var DefineOwnProperty = __webpack_require__("../shared/node_modules/es-abstract/helpers/DefineOwnProperty.js");
        var FromPropertyDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/FromPropertyDescriptor.js");
        var IsAccessorDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/IsAccessorDescriptor.js");
        var IsDataDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/IsDataDescriptor.js");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var SameValue = __webpack_require__("../shared/node_modules/es-abstract/2021/SameValue.js");
        var ToPropertyDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/ToPropertyDescriptor.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
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
    "../shared/node_modules/es-abstract/2021/FromPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var assertRecord = __webpack_require__("../shared/node_modules/es-abstract/helpers/assertRecord.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
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
    "../shared/node_modules/es-abstract/2021/Get.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var inspect = __webpack_require__("../shared/node_modules/object-inspect/index.js");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        module.exports = function(O, P) {
            if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: Type(O) is not Object");
            if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(P));
            return O[P];
        };
    },
    "../shared/node_modules/es-abstract/2021/HasProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        module.exports = function(O, P) {
            if ("Object" !== Type(O)) throw new $TypeError("Assertion failed: `O` must be an Object");
            if (!IsPropertyKey(P)) throw new $TypeError("Assertion failed: `P` must be a Property Key");
            return P in O;
        };
    },
    "../shared/node_modules/es-abstract/2021/IsAccessorDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
        var assertRecord = __webpack_require__("../shared/node_modules/es-abstract/helpers/assertRecord.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        module.exports = function(Desc) {
            if ("undefined" === typeof Desc) return false;
            assertRecord(Type, "Property Descriptor", "Desc", Desc);
            if (!has(Desc, "[[Get]]") && !has(Desc, "[[Set]]")) return false;
            return true;
        };
    },
    "../shared/node_modules/es-abstract/2021/IsArray.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $Array = GetIntrinsic("%Array%");
        var toStr = !$Array.isArray && __webpack_require__("../shared/node_modules/call-bind/callBound.js")("Object.prototype.toString");
        module.exports = $Array.isArray || function(argument) {
            return "[object Array]" === toStr(argument);
        };
    },
    "../shared/node_modules/es-abstract/2021/IsCallable.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("../shared/node_modules/is-callable/index.js");
    },
    "../shared/node_modules/es-abstract/2021/IsConstructor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/es-abstract/GetIntrinsic.js");
        var $construct = GetIntrinsic("%Reflect.construct%", true);
        var DefinePropertyOrThrow = __webpack_require__("../shared/node_modules/es-abstract/2021/DefinePropertyOrThrow.js");
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
    "../shared/node_modules/es-abstract/2021/IsDataDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
        var assertRecord = __webpack_require__("../shared/node_modules/es-abstract/helpers/assertRecord.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        module.exports = function(Desc) {
            if ("undefined" === typeof Desc) return false;
            assertRecord(Type, "Property Descriptor", "Desc", Desc);
            if (!has(Desc, "[[Value]]") && !has(Desc, "[[Writable]]")) return false;
            return true;
        };
    },
    "../shared/node_modules/es-abstract/2021/IsExtensible.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $Object = GetIntrinsic("%Object%");
        var isPrimitive = __webpack_require__("../shared/node_modules/es-abstract/helpers/isPrimitive.js");
        var $preventExtensions = $Object.preventExtensions;
        var $isExtensible = $Object.isExtensible;
        module.exports = $preventExtensions ? function(obj) {
            return !isPrimitive(obj) && $isExtensible(obj);
        } : function(obj) {
            return !isPrimitive(obj);
        };
    },
    "../shared/node_modules/es-abstract/2021/IsIntegralNumber.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var abs = __webpack_require__("../shared/node_modules/es-abstract/2021/abs.js");
        var floor = __webpack_require__("../shared/node_modules/es-abstract/2021/floor.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        var $isNaN = __webpack_require__("../shared/node_modules/es-abstract/helpers/isNaN.js");
        var $isFinite = __webpack_require__("../shared/node_modules/es-abstract/helpers/isFinite.js");
        module.exports = function(argument) {
            if ("Number" !== Type(argument) || $isNaN(argument) || !$isFinite(argument)) return false;
            var absValue = abs(argument);
            return floor(absValue) === absValue;
        };
    },
    "../shared/node_modules/es-abstract/2021/IsPropertyKey.js": module => {
        "use strict";
        module.exports = function(argument) {
            return "string" === typeof argument || "symbol" === typeof argument;
        };
    },
    "../shared/node_modules/es-abstract/2021/IsRegExp.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $match = GetIntrinsic("%Symbol.match%", true);
        var hasRegExpMatcher = __webpack_require__("../shared/node_modules/is-regex/index.js");
        var ToBoolean = __webpack_require__("../shared/node_modules/es-abstract/2021/ToBoolean.js");
        module.exports = function(argument) {
            if (!argument || "object" !== typeof argument) return false;
            if ($match) {
                var isRegExp = argument[$match];
                if ("undefined" !== typeof isRegExp) return ToBoolean(isRegExp);
            }
            return hasRegExpMatcher(argument);
        };
    },
    "../shared/node_modules/es-abstract/2021/OrdinaryGetOwnProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $gOPD = __webpack_require__("../shared/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var $isEnumerable = callBound("Object.prototype.propertyIsEnumerable");
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
        var IsArray = __webpack_require__("../shared/node_modules/es-abstract/2021/IsArray.js");
        var IsPropertyKey = __webpack_require__("../shared/node_modules/es-abstract/2021/IsPropertyKey.js");
        var IsRegExp = __webpack_require__("../shared/node_modules/es-abstract/2021/IsRegExp.js");
        var ToPropertyDescriptor = __webpack_require__("../shared/node_modules/es-abstract/2021/ToPropertyDescriptor.js");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
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
    "../shared/node_modules/es-abstract/2021/RequireObjectCoercible.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("../shared/node_modules/es-abstract/5/CheckObjectCoercible.js");
    },
    "../shared/node_modules/es-abstract/2021/SameValue.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var $isNaN = __webpack_require__("../shared/node_modules/es-abstract/helpers/isNaN.js");
        module.exports = function(x, y) {
            if (x === y) {
                if (0 === x) return 1 / x === 1 / y;
                return true;
            }
            return $isNaN(x) && $isNaN(y);
        };
    },
    "../shared/node_modules/es-abstract/2021/ToBoolean.js": module => {
        "use strict";
        module.exports = function(value) {
            return !!value;
        };
    },
    "../shared/node_modules/es-abstract/2021/ToNumber.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var $Number = GetIntrinsic("%Number%");
        var $RegExp = GetIntrinsic("%RegExp%");
        var $parseInteger = GetIntrinsic("%parseInt%");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
        var regexTester = __webpack_require__("../shared/node_modules/es-abstract/helpers/regexTester.js");
        var isPrimitive = __webpack_require__("../shared/node_modules/es-abstract/helpers/isPrimitive.js");
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
        var ToPrimitive = __webpack_require__("../shared/node_modules/es-abstract/2021/ToPrimitive.js");
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
    "../shared/node_modules/es-abstract/2021/ToObject.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $Object = GetIntrinsic("%Object%");
        var RequireObjectCoercible = __webpack_require__("../shared/node_modules/es-abstract/2021/RequireObjectCoercible.js");
        module.exports = function(value) {
            RequireObjectCoercible(value);
            return $Object(value);
        };
    },
    "../shared/node_modules/es-abstract/2021/ToPrimitive.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var toPrimitive = __webpack_require__("../shared/node_modules/es-to-primitive/es2015.js");
        module.exports = function(input) {
            if (arguments.length > 1) return toPrimitive(input, arguments[1]);
            return toPrimitive(input);
        };
    },
    "../shared/node_modules/es-abstract/2021/ToPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var Type = __webpack_require__("../shared/node_modules/es-abstract/2021/Type.js");
        var ToBoolean = __webpack_require__("../shared/node_modules/es-abstract/2021/ToBoolean.js");
        var IsCallable = __webpack_require__("../shared/node_modules/es-abstract/2021/IsCallable.js");
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
    "../shared/node_modules/es-abstract/2021/ToString.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $String = GetIntrinsic("%String%");
        var $TypeError = GetIntrinsic("%TypeError%");
        module.exports = function(argument) {
            if ("symbol" === typeof argument) throw new $TypeError("Cannot convert a Symbol value to a string");
            return $String(argument);
        };
    },
    "../shared/node_modules/es-abstract/2021/ToUint32.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var ToNumber = __webpack_require__("../shared/node_modules/es-abstract/2021/ToNumber.js");
        module.exports = function(x) {
            return ToNumber(x) >>> 0;
        };
    },
    "../shared/node_modules/es-abstract/2021/Type.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var ES5Type = __webpack_require__("../shared/node_modules/es-abstract/5/Type.js");
        module.exports = function(x) {
            if ("symbol" === typeof x) return "Symbol";
            if ("bigint" === typeof x) return "BigInt";
            return ES5Type(x);
        };
    },
    "../shared/node_modules/es-abstract/2021/abs.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $abs = GetIntrinsic("%Math.abs%");
        module.exports = function(x) {
            return $abs(x);
        };
    },
    "../shared/node_modules/es-abstract/2021/floor.js": module => {
        "use strict";
        var $floor = Math.floor;
        module.exports = function(x) {
            return $floor(x);
        };
    },
    "../shared/node_modules/es-abstract/5/CheckObjectCoercible.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        module.exports = function(value, optMessage) {
            if (null == value) throw new $TypeError(optMessage || "Cannot call method on " + value);
            return value;
        };
    },
    "../shared/node_modules/es-abstract/5/Type.js": module => {
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
    "../shared/node_modules/es-abstract/GetIntrinsic.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
    },
    "../shared/node_modules/es-abstract/helpers/DefineOwnProperty.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
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
        var isArray = hasArrayLengthDefineBug && __webpack_require__("../shared/node_modules/es-abstract/2020/IsArray.js");
        var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
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
    "../shared/node_modules/es-abstract/helpers/assertRecord.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var $SyntaxError = GetIntrinsic("%SyntaxError%");
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
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
    "../shared/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
        if ($gOPD) try {
            $gOPD([], "length");
        } catch (e) {
            $gOPD = null;
        }
        module.exports = $gOPD;
    },
    "../shared/node_modules/es-abstract/helpers/isFinite.js": module => {
        "use strict";
        var $isNaN = Number.isNaN || function(a) {
            return a !== a;
        };
        module.exports = Number.isFinite || function(x) {
            return "number" === typeof x && !$isNaN(x) && x !== 1 / 0 && x !== -1 / 0;
        };
    },
    "../shared/node_modules/es-abstract/helpers/isNaN.js": module => {
        "use strict";
        module.exports = Number.isNaN || function(a) {
            return a !== a;
        };
    },
    "../shared/node_modules/es-abstract/helpers/isPrimitive.js": module => {
        "use strict";
        module.exports = function(value) {
            return null === value || "function" !== typeof value && "object" !== typeof value;
        };
    },
    "../shared/node_modules/es-abstract/helpers/isPropertyDescriptor.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var has = __webpack_require__("../shared/node_modules/has/src/index.js");
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
    "../shared/node_modules/es-abstract/helpers/regexTester.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
        var $test = GetIntrinsic("RegExp.prototype.test");
        var callBind = __webpack_require__("../shared/node_modules/call-bind/index.js");
        module.exports = function(regex) {
            return callBind($test, regex);
        };
    },
    "../shared/node_modules/es-get-iterator/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var isArguments = __webpack_require__("../shared/node_modules/is-arguments/index.js");
        if (__webpack_require__("../shared/node_modules/has-symbols/index.js")() || __webpack_require__("../shared/node_modules/has-symbols/shams.js")()) {
            var $iterator = Symbol.iterator;
            module.exports = function(iterable) {
                if (null != iterable && "undefined" !== typeof iterable[$iterator]) return iterable[$iterator]();
                if (isArguments(iterable)) return Array.prototype[$iterator].call(iterable);
            };
        } else {
            var isArray = __webpack_require__("../shared/node_modules/isarray/index.js");
            var isString = __webpack_require__("../shared/node_modules/is-string/index.js");
            var GetIntrinsic = __webpack_require__("../shared/node_modules/get-intrinsic/index.js");
            var $Map = GetIntrinsic("%Map%", true);
            var $Set = GetIntrinsic("%Set%", true);
            var callBound = __webpack_require__("../shared/node_modules/call-bind/callBound.js");
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
                var isMap = __webpack_require__("../shared/node_modules/is-map/index.js");
                var isSet = __webpack_require__("../shared/node_modules/is-set/index.js");
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
    "../shared/node_modules/iterate-value/index.js": (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var getIterator = __webpack_require__("../shared/node_modules/es-get-iterator/index.js");
        var $TypeError = TypeError;
        var iterate = __webpack_require__("../shared/node_modules/iterate-iterator/index.js");
        module.exports = function(iterable) {
            var iterator = getIterator(iterable);
            if (!iterator) throw new $TypeError("non-iterable value provided");
            if (arguments.length > 1) return iterate(iterator, arguments[1]);
            return iterate(iterator);
        };
    },
    "./node_modules/axios/package.json": module => {
        "use strict";
        module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_exec__("./src/assets/product/detail/main.js");
} ]);