"use strict";

(self["webpackChunkArise"] = self["webpackChunkArise"] || []).push([ [ "homeCommon" ], {
    "./src/assets/stage/home-common/index.js": (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
        var product_item = __webpack_require__("../shared/browser/report/product/product-item.js");
        var baseReport = __webpack_require__("../shared/browser/report/common/baseReport.js");
        var stage = __webpack_require__("../shared/browser/report/stage/index.js");
        var stage_const = __webpack_require__("../shared/browser/report/stage/const.js");
        var collection_item = __webpack_require__("../shared/browser/report/product/collection-item.js");
        class SectionReport extends stage.StageReport {
            constructor(sectionList) {
                super();
                this.defaultParams = {
                    ...this.defaultParams,
                    module: 900,
                    component: 900,
                    page: stage_const.virtualPageEnum.dynamicSection
                };
                this.sectionList = sectionList || [];
            }
            init() {
                const instance = this;
                this.sectionList.forEach((type => {
                    const method = instance[`${type}-report`];
                    if (method) method.call(instance);
                }));
            }
            bindSectionExpose({selector, type, moreInfo}) {
                this.expose({
                    selector,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type] || type,
                        ...moreInfo
                    }
                });
            }
            bindSectionClick({selector, type, moreInfo, customHandler}) {
                this.bindClick({
                    selector,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type] || type,
                        ...moreInfo
                    },
                    customHandler
                });
            }
            bindSectionFallbackClick({wrapperSel, targetSel, fallbackSel, type, moreInfo}) {
                this.bindFallbackClick({
                    wrapperSel,
                    targetSel,
                    fallbackSel,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type] || type,
                        ...moreInfo
                    }
                });
            }
            "slideshow-report"() {
                const type = "slideshow";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-slideshow"
                });
                this.bindSectionFallbackClick({
                    type,
                    wrapperSel: ".__sl-custom-track-stage-slideshow-wrapper",
                    targetSel: ".__sl-custom-track-stage-slideshow-button",
                    fallbackSel: ".__sl-custom-track-stage-slideshow-wrapper"
                });
            }
            "collection-list-report"() {
                const type = "collection-list";
                const wrapSel = ".__sl-custom-track-stage-colletionlist";
                this.bindSectionExpose({
                    type,
                    selector: wrapSel
                });
                (0, collection_item.initCollectionItemReport)({
                    selector: `${wrapSel} ${collection_item.collectionItemCls}`,
                    reportTargetCb: target => {
                        const id = (0, baseReport.findSectionId)(target);
                        return {
                            module_type: stage_const.sectionTypeEnum[type],
                            component_ID: id,
                            current_source_page: baseReport.BaseReport.getPage()
                        };
                    }
                });
            }
            "custom-html-report"() {
                const type = "custom-html";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-customHtml"
                });
            }
            "faqs-report"() {
                const type = "faqs";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-faqs"
                });
            }
            "featured-collection-report"() {
                const type = "featured-collection";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-featuredCollection"
                });
                (0, product_item.hdProductItemView)({
                    sectionClass: ".__sl-custom-track-stage-featuredCollection",
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type],
                        current_source_page: baseReport.BaseReport.getPage()
                    }
                });
            }
            "image-with-text-report"() {
                const type = "image-with-text";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-imageWithText"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-imageWithText-button"
                });
            }
            "large-image-with-text-box-report"() {
                const type = "large-image-with-text-box";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-largeImageWithText"
                });
                this.bindSectionFallbackClick({
                    type,
                    wrapperSel: ".__sl-custom-track-stage-largeImageWithText",
                    targetSel: ".__sl-custom-track-stage-largeImageWithText-button",
                    fallbackSel: ".__sl-custom-track-stage-largeImageWithText"
                });
            }
            "logo-list-report"() {
                const type = "logo-list";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-logoList"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-logoList-item"
                });
            }
            "text-columns-with-images-report"() {
                const type = "text-columns-with-images";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-textColumnsWithImages"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-textColumnsWithImages-item"
                });
            }
            "video-report"() {
                const type = "video";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-video"
                });
            }
            "featured-product-report"() {
                const type = "featured-product";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-featuredProduct"
                });
            }
            "rich-text-report"() {
                const type = "rich-text";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-richText"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-richText-button"
                });
            }
            "sign-up-and-save-report"() {
                const type = "sign-up-and-save";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-newsletter"
                });
                this.bindInput({
                    type,
                    selector: ".__sl-custom-track-stage-newsletter-input"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-newsletter-button"
                });
            }
            "icon-list-report"() {
                const type = "icon-list";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-iconList"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-iconList-item"
                });
            }
            "promotion-grid-report"() {
                const type = "promotion-grid";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-promotionGrid"
                });
                this.bindSectionFallbackClick({
                    type,
                    wrapperSel: ".__sl-custom-track-stage-promotionGrid-wrapper",
                    targetSel: ".__sl-custom-track-stage-promotionGrid-button",
                    fallbackSel: ".__sl-custom-track-stage-promotionGrid-wrapper"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-promotionGrid-item"
                });
            }
            "split-slideshow-report"() {
                const type = "split-slideshow";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-splitSlideshow"
                });
                this.bindSectionFallbackClick({
                    type,
                    wrapperSel: ".__sl-custom-track-stage-splitSlideshow-wrapper",
                    targetSel: ".__sl-custom-track-stage-splitSlideshow-button",
                    fallbackSel: ".__sl-custom-track-stage-splitSlideshow-wrapper"
                });
            }
            "grid-report"() {
                const type = "grid";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-grid"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-grid-item"
                });
            }
            "mosaic-report"() {
                const type = "mosaic";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-mosaic"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-mosaic-item"
                });
            }
            "multilevel-filter-report"() {
                const type = "multilevel-filter";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-multilevelFilter"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-multilevelFilter-button"
                });
            }
            "shoppable-image-report"() {
                const type = "shoppable-image";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-shoppableImage"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-shoppableImage-button"
                });
                this.bindHover({
                    type,
                    selector: ".__sl-custom-track-stage-shoppableImage-button"
                });
                __SL_$__(".__sl-custom-track-stage-shoppableImage-product").on("click", (e => {
                    const $target = __SL_$__(e.currentTarget);
                    const dataPrefix = "customTrackStageShoppableimage";
                    const spuSeq = $target.data(`${dataPrefix}Spuseq`);
                    const skuSeq = $target.data(`${dataPrefix}Skuseq`);
                    const price = $target.data(`${dataPrefix}Price`);
                    const title = $target.data(`${dataPrefix}Title`);
                    const index = 0;
                    (0, product_item.hdProductItemSelect)({
                        baseParams: {
                            current_source_page: baseReport.BaseReport.getPage()
                        },
                        productInfo: {
                            id: spuSeq,
                            skuId: skuSeq,
                            price,
                            index,
                            name: title,
                            moduleType: type
                        }
                    });
                }));
            }
            "testimonials-report"() {
                const type = "testimonials";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-testimonials"
                });
            }
            "timeline-report"() {
                const type = "timeline";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-timeline"
                });
            }
            "blog-report"() {
                const type = "blog";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-blog"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-blog-item"
                });
            }
            "contact-form-report"() {
                const type = "contact-form";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-contactForm"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-contactForm-button"
                });
            }
            "image-banner-report"() {
                const type = "image-banner";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-imageBanner"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-imageBanner-button"
                });
            }
            "multi-media-splicing-report"() {
                const type = "multi-media-splicing";
                const wrapSel = ".__sl-custom-track-stage-multiMediaSplicing";
                this.bindSectionExpose({
                    type,
                    selector: wrapSel
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-multiMediaSplicing-item",
                    moreInfo: {
                        component: 111
                    }
                });
                (0, product_item.hdProductItemView)({
                    sectionClass: wrapSel,
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type],
                        current_source_page: baseReport.BaseReport.getPage()
                    }
                });
                (0, collection_item.initCollectionItemReport)({
                    selector: `${wrapSel} ${collection_item.collectionItemCls}`,
                    reportTargetCb: target => {
                        const id = (0, baseReport.findSectionId)(target);
                        return {
                            module_type: stage_const.sectionTypeEnum[type],
                            component_ID: id,
                            current_source_page: baseReport.BaseReport.getPage()
                        };
                    }
                });
            }
            "custom-page-report"() {
                const type = "custom-page";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-customPage"
                });
            }
            "map-report"() {
                const type = "map";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-map"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-map-button"
                });
            }
            "carousel-collection-list-report"() {
                const type = "carousel-collection-list";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-carouselCollectionList"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-carouselCollectionList-item"
                });
            }
            "carousel-images-with-text-report"() {
                const type = "carousel-images-with-text";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-carouselImagesWithText"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-carouselImagesWithText-button"
                });
            }
            "featured-logo-list-report"() {
                const type = "featured-logo-list";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-featuredLogoList"
                });
            }
            "collection-with-image-report"() {
                const type = "collection-with-image";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-collectionWithImage"
                });
                this.bindSectionClick({
                    type,
                    selector: ".__sl-custom-track-stage-collectionWithImage-button"
                });
                (0, product_item.hdProductItemView)({
                    sectionClass: ".__sl-custom-track-stage-collectionWithImage",
                    moreInfo: {
                        module_type: stage_const.sectionTypeEnum[type],
                        current_source_page: baseReport.BaseReport.getPage()
                    }
                });
            }
            "offers-report"() {
                const type = "offers";
                this.bindSectionExpose({
                    type,
                    selector: ".__sl-custom-track-stage-offers"
                });
            }
        }
        function initSectionReport() {
            __SL_$__((function() {
                const report = new SectionReport([ "slideshow", "collection-list", "custom-html", "faqs", "featured-collection", "image-with-text", "text-columns-with-images", "video", "featured-product", "rich-text", "sign-up-and-save", "testimonials", "blog", "contact-form", "image-banner", "multi-media-splicing", "contact-page", "custom-page", "map" ]);
                report.init();
            }));
        }
        var _window$HdSdk;
        window.SL_EventBus.emit("global:hdReport:exit", [ "60006252" ]);
        null === (_window$HdSdk = window.HdSdk) || void 0 === _window$HdSdk ? void 0 : _window$HdSdk.shopTracker.report(60006252, {
            page: 101,
            iframe_id: 1,
            event_name: 101
        });
        initSectionReport();
    },
    "../shared/browser/report/product/collection-item.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
            collectionItemCls: () => collectionItemCls,
            initCollectionItemReport: () => initCollectionItemReport
        });
        var _common_baseReport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../shared/browser/report/common/baseReport.js");
        const collectionItemCls = ".__sl-custom-track-collection-item";
        const fcNull = () => {};
        class CollectionItemReport extends _common_baseReport__WEBPACK_IMPORTED_MODULE_0__.BaseReport {
            constructor({selector, reportTargetCb}) {
                super();
                this.map = {
                    101: {
                        component: 101,
                        module: 900
                    },
                    174: {
                        component: 110,
                        module: -999
                    }
                };
                this.currentData = this.map[this.page];
                this.selector = selector || collectionItemCls;
                this.reportTargetCb = reportTargetCb || fcNull;
                this.bindClick();
                this.bindExpose();
            }
            bindClick() {
                const __this = this;
                __SL_$__("body").on("click", __this.selector, (function() {
                    const _this = __SL_$__(this);
                    const id = _this.attr("data-sortation-id");
                    __this.click({
                        collection_id: id,
                        ...__this.currentData,
                        ...__this.reportTargetCb(_this.get(0))
                    });
                }));
            }
            bindExpose() {
                const __this = this;
                __this.view({
                    selector: `${__this.selector}`,
                    customParams: target => {
                        const {sortationId} = target.dataset || {};
                        return {
                            collection_id: sortationId,
                            ...__this.currentData,
                            ...__this.reportTargetCb(target)
                        };
                    }
                });
            }
        }
        function initCollectionItemReport({selector, reportTargetCb} = {}) {
            const report = new CollectionItemReport({
                selector,
                reportTargetCb
            });
            return report;
        }
    }
}, __webpack_require__ => {
    var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
    __webpack_require__.O(0, [ "vendor" ], (() => __webpack_exec__("./src/assets/stage/home-common/index.js")));
    __webpack_require__.O();
} ]);