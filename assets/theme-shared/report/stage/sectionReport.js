window.SLM = window.SLM || {};

window.SLM['theme-shared/report/stage/sectionReport.js'] = window.SLM['theme-shared/report/stage/sectionReport.js'] || function () {
  const _exports = {};
  const { hdProductItemSelect, hdProductItemView } = window['SLM']['theme-shared/report/product/product-item.js'];
  const { findSectionId, BaseReport } = window['SLM']['theme-shared/report/common/baseReport.js'];
  const { StageReport } = window['SLM']['theme-shared/report/stage/index.js'];
  const { sectionTypeEnum, virtualPageEnum } = window['SLM']['theme-shared/report/stage/const.js'];
  const { initCollectionItemReport, collectionItemCls } = window['SLM']['theme-shared/report/product/collection-item.js'];

  class SectionReport extends StageReport {
    constructor(sectionList) {
      super();
      this.defaultParams = { ...this.defaultParams,
        module: 900,
        component: 900,
        page: virtualPageEnum.dynamicSection
      };
      this.sectionList = sectionList || [];
    }

    init() {
      const instance = this;
      this.sectionList.forEach(type => {
        const method = instance[`${type}-report`];

        if (method) {
          method.call(instance);
        }
      });
    }

    bindSectionExpose({
      selector,
      type,
      moreInfo
    }) {
      this.expose({
        selector,
        moreInfo: {
          module_type: sectionTypeEnum[type] || type,
          ...moreInfo
        }
      });
    }

    bindSectionClick({
      selector,
      type,
      moreInfo,
      customHandler
    }) {
      this.bindClick({
        selector,
        moreInfo: {
          module_type: sectionTypeEnum[type] || type,
          ...moreInfo
        },
        customHandler
      });
    }

    bindSectionFallbackClick({
      wrapperSel,
      targetSel,
      fallbackSel,
      type,
      moreInfo
    }) {
      this.bindFallbackClick({
        wrapperSel,
        targetSel,
        fallbackSel,
        moreInfo: {
          module_type: sectionTypeEnum[type] || type,
          ...moreInfo
        }
      });
    }

    'slideshow-report'() {
      const type = 'slideshow';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-slideshow'
      });
      this.bindSectionFallbackClick({
        type,
        wrapperSel: '.__sl-custom-track-stage-slideshow-wrapper',
        targetSel: '.__sl-custom-track-stage-slideshow-button',
        fallbackSel: '.__sl-custom-track-stage-slideshow-wrapper'
      });
    }

    'collection-list-report'() {
      const type = 'collection-list';
      const wrapSel = '.__sl-custom-track-stage-colletionlist';
      this.bindSectionExpose({
        type,
        selector: wrapSel
      });
      initCollectionItemReport({
        selector: `${wrapSel} ${collectionItemCls}`,
        reportTargetCb: target => {
          const id = findSectionId(target);
          return {
            module_type: sectionTypeEnum[type],
            component_ID: id,
            current_source_page: BaseReport.getPage()
          };
        }
      });
    }

    'custom-html-report'() {
      const type = 'custom-html';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-customHtml'
      });
    }

    'faqs-report'() {
      const type = 'faqs';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-faqs'
      });
    }

    'featured-collection-report'() {
      const type = 'featured-collection';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-featuredCollection'
      });
      hdProductItemView({
        sectionClass: '.__sl-custom-track-stage-featuredCollection',
        moreInfo: {
          module_type: sectionTypeEnum[type],
          current_source_page: BaseReport.getPage()
        }
      });
    }

    'image-with-text-report'() {
      const type = 'image-with-text';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-imageWithText'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-imageWithText-button'
      });
    }

    'large-image-with-text-box-report'() {
      const type = 'large-image-with-text-box';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-largeImageWithText'
      });
      this.bindSectionFallbackClick({
        type,
        wrapperSel: '.__sl-custom-track-stage-largeImageWithText',
        targetSel: '.__sl-custom-track-stage-largeImageWithText-button',
        fallbackSel: '.__sl-custom-track-stage-largeImageWithText'
      });
    }

    'logo-list-report'() {
      const type = 'logo-list';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-logoList'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-logoList-item'
      });
    }

    'text-columns-with-images-report'() {
      const type = 'text-columns-with-images';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-textColumnsWithImages'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-textColumnsWithImages-item'
      });
    }

    'video-report'() {
      const type = 'video';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-video'
      });
    }

    'featured-product-report'() {
      const type = 'featured-product';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-featuredProduct'
      });
    }

    'rich-text-report'() {
      const type = 'rich-text';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-richText'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-richText-button'
      });
    }

    'sign-up-and-save-report'() {
      const type = 'sign-up-and-save';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-newsletter'
      });
      this.bindInput({
        type,
        selector: '.__sl-custom-track-stage-newsletter-input'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-newsletter-button'
      });
    }

    'icon-list-report'() {
      const type = 'icon-list';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-iconList'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-iconList-item'
      });
    }

    'promotion-grid-report'() {
      const type = 'promotion-grid';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-promotionGrid'
      });
      this.bindSectionFallbackClick({
        type,
        wrapperSel: '.__sl-custom-track-stage-promotionGrid-wrapper',
        targetSel: '.__sl-custom-track-stage-promotionGrid-button',
        fallbackSel: '.__sl-custom-track-stage-promotionGrid-wrapper'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-promotionGrid-item'
      });
    }

    'split-slideshow-report'() {
      const type = 'split-slideshow';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-splitSlideshow'
      });
      this.bindSectionFallbackClick({
        type,
        wrapperSel: '.__sl-custom-track-stage-splitSlideshow-wrapper',
        targetSel: '.__sl-custom-track-stage-splitSlideshow-button',
        fallbackSel: '.__sl-custom-track-stage-splitSlideshow-wrapper'
      });
    }

    'grid-report'() {
      const type = 'grid';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-grid'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-grid-item'
      });
    }

    'mosaic-report'() {
      const type = 'mosaic';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-mosaic'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-mosaic-item'
      });
    }

    'multilevel-filter-report'() {
      const type = 'multilevel-filter';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-multilevelFilter'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-multilevelFilter-button'
      });
    }

    'shoppable-image-report'() {
      const type = 'shoppable-image';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-shoppableImage'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-shoppableImage-button'
      });
      this.bindHover({
        type,
        selector: '.__sl-custom-track-stage-shoppableImage-button'
      });
      $('.__sl-custom-track-stage-shoppableImage-product').on('click', e => {
        const $target = $(e.currentTarget);
        const dataPrefix = 'customTrackStageShoppableimage';
        const spuSeq = $target.data(`${dataPrefix}Spuseq`);
        const skuSeq = $target.data(`${dataPrefix}Skuseq`);
        const price = $target.data(`${dataPrefix}Price`);
        const title = $target.data(`${dataPrefix}Title`);
        const index = 0;
        hdProductItemSelect({
          baseParams: {
            current_source_page: BaseReport.getPage()
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
      });
    }

    'testimonials-report'() {
      const type = 'testimonials';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-testimonials'
      });
    }

    'timeline-report'() {
      const type = 'timeline';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-timeline'
      });
    }

    'blog-report'() {
      const type = 'blog';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-blog'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-blog-item'
      });
    }

    'contact-form-report'() {
      const type = 'contact-form';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-contactForm'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-contactForm-button'
      });
    }

    'image-banner-report'() {
      const type = 'image-banner';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-imageBanner'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-imageBanner-button'
      });
    }

    'multi-media-splicing-report'() {
      const type = 'multi-media-splicing';
      const wrapSel = '.__sl-custom-track-stage-multiMediaSplicing';
      this.bindSectionExpose({
        type,
        selector: wrapSel
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-multiMediaSplicing-item',
        moreInfo: {
          component: 111
        }
      });
      hdProductItemView({
        sectionClass: wrapSel,
        moreInfo: {
          module_type: sectionTypeEnum[type],
          current_source_page: BaseReport.getPage()
        }
      });
      initCollectionItemReport({
        selector: `${wrapSel} ${collectionItemCls}`,
        reportTargetCb: target => {
          const id = findSectionId(target);
          return {
            module_type: sectionTypeEnum[type],
            component_ID: id,
            current_source_page: BaseReport.getPage()
          };
        }
      });
    }

    'custom-page-report'() {
      const type = 'custom-page';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-customPage'
      });
    }

    'map-report'() {
      const type = 'map';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-map'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-map-button'
      });
    }

    'carousel-collection-list-report'() {
      const type = 'carousel-collection-list';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-carouselCollectionList'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-carouselCollectionList-item'
      });
    }

    'carousel-images-with-text-report'() {
      const type = 'carousel-images-with-text';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-carouselImagesWithText'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-carouselImagesWithText-button'
      });
    }

    'featured-logo-list-report'() {
      const type = 'featured-logo-list';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-featuredLogoList'
      });
    }

    'collection-with-image-report'() {
      const type = 'collection-with-image';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-collectionWithImage'
      });
      this.bindSectionClick({
        type,
        selector: '.__sl-custom-track-stage-collectionWithImage-button'
      });
      hdProductItemView({
        sectionClass: '.__sl-custom-track-stage-collectionWithImage',
        moreInfo: {
          module_type: sectionTypeEnum[type],
          current_source_page: BaseReport.getPage()
        }
      });
    }

    'offers-report'() {
      const type = 'offers';
      this.bindSectionExpose({
        type,
        selector: '.__sl-custom-track-stage-offers'
      });
    }

  }

  _exports.SectionReport = SectionReport;
  return _exports;
}();