(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "blogDetail" ], {
    "./src/assets/stage/blog/detail/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        "use strict";
        var _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/utils/i18n.js");
        var _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../shared/browser/utils/form/index.js");
        var _yy_sl_theme_shared_utils_emailReg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../shared/browser/utils/emailReg.js");
        var _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../shared/browser/utils/request.js");
        var _commons_components_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/assets/commons/components/toast/index.js");
        __webpack_require__("./src/assets/stage/blog/detail/script/report.js");
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        const SEND_API = "/site/render/blogComment/addBlogComment";
        const toast = new _commons_components_toast__WEBPACK_IMPORTED_MODULE_3__["default"]({
            content: "content",
            className: "blog-form__toast",
            duration: 5e3
        });
        const fields = [ {
            name: "author",
            rules: [ {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("blog.comment.name_empty"),
                required: true
            } ]
        }, {
            name: "email",
            value: "",
            rules: [ {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("blog.comment.email_empty"),
                required: true
            }, {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("blog.comment.email_format"),
                pattern: _yy_sl_theme_shared_utils_emailReg__WEBPACK_IMPORTED_MODULE_5__.EMAIL_VALID_REGEXP
            } ]
        }, {
            name: "content",
            value: "",
            rules: [ {
                message: (0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("blog.comment.comment_empty"),
                required: true
            } ]
        } ];
        class BlogDetail {
            constructor() {
                _defineProperty(this, "commentForm", null);
                _defineProperty(this, "submitBtn", null);
                this.initLoadMore();
                this.submitBtn = Array.from(document.getElementsByClassName("blog__form-submit")).pop();
                if (!this.submitBtn) return;
                this.initSubmitBtn();
                this.commentForm = _yy_sl_theme_shared_utils_form__WEBPACK_IMPORTED_MODULE_1__["default"].takeForm(`blog-comment-form`);
                this.commentForm.init();
                this.commentForm.setFields(fields);
            }
            validateForm() {
                return new Promise(((resolve, reject) => {
                    this.commentForm.validateFields().then((res => {
                        if (res.pass) resolve(); else reject(res);
                    }));
                }));
            }
            initSubmitBtn() {
                this.submitBtn.onclick = async event => {
                    event.preventDefault();
                    await this.validateForm();
                    const contactData = this.commentForm.getFieldsValue();
                    console.log(contactData);
                    try {
                        const {data} = await _yy_sl_theme_shared_utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(SEND_API, {
                            ...contactData,
                            blogId: this.commentForm.el.dataset.blogId
                        });
                        const commentConfig = +this.commentForm.el.dataset.commentConfig;
                        if (1 === commentConfig) toast.open((0, _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(`blog.comment.submit_audit_tip`)); else toast.open((0, 
                        _yy_sl_theme_shared_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(`blog.comment.success`));
                        this.commentForm.setFields(fields);
                        redirectBlogComment(data.id);
                    } catch (error) {
                        toast.open("Network Error");
                    }
                };
            }
            initLoadMore() {
                const loadMore = Array.from(document.getElementsByClassName("blog__comments-loadmore")).pop();
                if (!loadMore) return;
                const loadMoreBtn = Array.from(loadMore.getElementsByClassName("blog__comments-loadmore-btn")).pop();
                if (!loadMoreBtn) return;
                const commentList = Array.from(document.getElementsByClassName("blog__comments-list")).pop();
                if (!commentList) return;
                const limit = +commentList.dataset.blockLimit;
                Array.from(commentList.children).slice(limit).forEach((item => {
                    item.style.display = "none";
                }));
                loadMoreBtn.onclick = () => {
                    loadMore.style.display = "none";
                    Array.from(commentList.children).slice(limit).forEach((item => {
                        item.style.display = "";
                    }));
                };
            }
        }
        _defineProperty(BlogDetail, "type", "blog-detail");
        function redirectBlogComment(commentId) {
            const url = new URL(window.location.href);
            const query = new URLSearchParams(window.location.search);
            const old = query.get("comment");
            if (old) query.set("comment", `${old},${commentId}`); else query.set("comment", commentId);
            window.location.href = `${url.origin + url.pathname}?${query.toString()}`;
        }
        new BlogDetail;
    },
    "./src/assets/stage/blog/detail/script/report.js": () => {
        (function() {
            window.SL_EventBus.emit("global:hdReport:exit", [ "60090006" ]);
            window.setInterval((() => {
                var _window$HdSdk;
                null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60090006, {
                    page: 124,
                    event_name: 141
                });
            }), 5 * 1e3);
        })();
    },
    "../shared/browser/utils/emailReg.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            EMAIL_VALID_REGEXP: () => EMAIL_VALID_REGEXP
        });
        const EMAIL_VALID_REGEXP = /^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+[0-9a-zA-Z\.\-\+\_]*[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+\-[0-9a-zA-Z\u4e00-\u9fa5]+)+$|^[0-9a-zA-Z\+]+@[0-9a-zA-Z\u4e00-\u9fa5]+(\-?[0-9a-zA-Z\u4e00-\u9fa5]+)*(\.[0-9a-zA-Z\u4e00-\u9fa5]+(\-[0-9a-zA-Z\u4e00-\u9fa5]+)*)+$/;
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/blog/detail/index.js")));
    __webpack_require__.O();
} ]);