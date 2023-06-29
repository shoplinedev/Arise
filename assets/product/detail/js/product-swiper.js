window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-swiper.js'] = window.SLM['product/detail/js/product-swiper.js'] || function () {
  const _exports = {};
  const ProductImages = window['SLM']['theme-shared/components/hbs/productImages/js/index.js'].default;
  const { isYoutube } = window['SLM']['theme-shared/components/hbs/productImages/js/index.js'];
  const getYouTubeCover = window['SLM']['theme-shared/components/hbs/shared/utils/getYouTubeCover.js'].default;
  const imgSize = window['SLM']['theme-shared/utils/img-size.js'].default;
  const imgUrl = window['SLM']['theme-shared/components/hbs/shared/utils/imgUrl.js'].default;
  const get = window['lodash']['get'];

  class ProductImagesWithFlattenAndMobileThumb extends ProductImages {
    constructor(...args) {
      const {
        selectorId
      } = args[0] || {};
      const mobilePrefixCls = `.execute_productImages_mobile_${selectorId}`;
      const productMobileHideThumbnailImage = $(`.product_productMobileThumbnailImageHide_${selectorId}`).val() === 'hide';
      const config = { ...args[0],
        swiperConfig: {
          mobile: {
            loop: false
          }
        }
      };

      if (!productMobileHideThumbnailImage) {
        config.swiperConfig = {
          mobile: {
            loop: false,
            thumbs: {
              swiper: {
                el: `${mobilePrefixCls} .product_mobile_thumbnail_container .swiper-container`,
                spaceBetween: 10,
                slidesPerView: 3.5,
                watchSlidesVisibility: true,
                slidesPerGroup: 1,
                navigation: false
              }
            }
          }
        };
      }

      super(config);
      this.productImageIsFlatten = $(`.product_productImageShowStyle_${selectorId}`).val() === 'flatten';
      this.productPcSkuImageFlatten = $(this.id).find('.product_pc_skuImage_flatten');
      this.productPcNormalItemFlatten = $(this.id).find('.normalItem');
      this.productMobileHideThumbnailImage = productMobileHideThumbnailImage;

      if (this.productMobileHideThumbnailImage && this.mobileSwiper) {
        const index = $(`${this.mobileId}`).data('initial-slide') || 0;
        const total = get(this.mobileSwiper, 'slidesGrid.length');
        this.updatePagination(index, total);
        this.initMobileNormalPagination();
      }

      if (!this.productMobileHideThumbnailImage && this.mobileSwiper) {
        this.handleInitThumbnailImageBySkuImage();
      }

      if (this.productImageIsFlatten && !this.mobileSwiper && this.productImageScale) {
        this.initFlattenPcPhotoSwipe();
        this.initFlattenPcSkuPhotoSwiper();
      }

      if (this.productImageIsFlatten && !this.mobileSwiper) {
        this.handleVideoAutoPlay();
      }
    }

    handleInitThumbnailImageBySkuImage() {
      const index = get(this.mobileSwiper, 'activeIndex');
      const firstThumbnail = $(`${this.mobileId} .product_mobile_thumbnail_container`).find('.swiper-slide').eq(index);
      const activeCls = 'noShowActive';

      if ($(`${this.mobileId}`).find('.product_m_skuImageBox').length > 0) {
        firstThumbnail.addClass(activeCls);
        firstThumbnail.one('click', () => {
          firstThumbnail.removeClass(activeCls);
          super.handleMobileSkuImage(false);
        });
      } else {
        firstThumbnail.removeClass(activeCls);
      }
    }

    updatePagination(currentIndex, total) {
      const {
        mobileId
      } = this;
      const prevDom = $(`${mobileId} .normal-thumbnail-button-prev`);
      const nextDom = $(`${mobileId} .normal-thumbnail-button-next`);
      const content = $(`${mobileId} .pagination-content`);
      content.html(`${currentIndex + 1}/${total}`);
      prevDom.removeClass('disabled');
      nextDom.removeClass('disabled');

      if (currentIndex === 0) {
        prevDom.addClass('disabled');
        return;
      }

      if (currentIndex === total - 1) {
        nextDom.addClass('disabled');
      }
    }

    initMobileNormalPagination() {
      const {
        mobileId,
        mobileSwiper
      } = this;
      mobileSwiper && mobileSwiper.on('slideChange', swiper => {
        const index = get(swiper, 'realIndex');
        const total = get(swiper, 'slidesGrid.length');
        this.updatePagination(index, total);
      });
      $(`${mobileId}`).on('click', '.normal-thumbnail-button-prev', () => {
        mobileSwiper.slidePrev(200);
      }).on('click', '.normal-thumbnail-button-next', () => {
        mobileSwiper.slideNext(200);
      });
    }

    initFlattenPcPhotoSwipe() {
      const self = this;
      this.updateFlattenPhotoSwipeItems();

      if (this.showMagnifier) {
        return;
      }

      $(`${this.id}`).on('click', '.imageItem', function () {
        const realIndex = $(this).data('index');
        self.handlePhotoSwiper(self.slideItems, realIndex);
      });
    }

    initFlattenPcSkuPhotoSwiper() {
      const self = this;

      if (this.showMagnifier) {
        return;
      }

      $(`${this.id}`).on('click', '.product_pc_skuImage_flatten', function () {
        const items = [{
          src: $(this).find('.product_photoSwipe_image').attr('data-photoswipe-src'),
          w: 0,
          h: 0,
          el: $(this)[0]
        }];
        self.handlePhotoSwiper(items, 0, false);
      });
    }

    toggleFlattenPcSkuImage(isShow, skuImageUrl) {
      const skuImageDom = this.productPcSkuImageFlatten;
      const parentShowEmptyImageEle = skuImageDom.parent('.product-detail-empty-image');

      if (skuImageDom.hasClass('imageItemError')) {
        skuImageDom.removeClass('imageItemError');
      }

      if (isShow && skuImageUrl) {
        this.handleVideoPause(skuImageUrl);
        const ratio = get(imgSize(skuImageUrl), 'ratio') || '100%';
        const width = get(imgSize(skuImageUrl), 'width');
        const height = get(imgSize(skuImageUrl), 'height');
        const imgDom = skuImageDom.find('img');

        if (imgDom.length > 0) {
          imgDom.remove();
        }

        skuImageDom.css('paddingBottom', `${ratio}`).html(`<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image" data-photoswipe-src=${imgUrl(skuImageUrl, {
          width: 1800
        })} src=${skuImageUrl} />${this.showMagnifier ? `<img data-width="${width}" data-height="${height}" class="imageItem--hover" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image" data-photoswipe-src=${imgUrl(skuImageUrl, {
          width: 1800
        })} src=${skuImageUrl} />` : ''}`);

        if (parentShowEmptyImageEle.length) {
          parentShowEmptyImageEle.css({
            paddingBottom: ratio
          });
        }

        skuImageDom.show();
        this.productPcNormalItemFlatten.hide();
        this.productShowSkuCover = true;
        this.handleVideoAutoPlay();
      } else if (!isShow) {
        if (parentShowEmptyImageEle.length) {
          parentShowEmptyImageEle.css({
            paddingBottom: ''
          });
        }

        this.productShowSkuCover = false;
        this.handleVideoAutoPlay();
        skuImageDom.hide().empty();
        this.productPcNormalItemFlatten.show();
      }
    }

    skuImageChange(img, source) {
      if (!this.verifySource(source && source.app)) {
        return;
      }

      const {
        url
      } = img || {};

      if (this.productImageIsFlatten && !this.mobileSwiper) {
        if (url) {
          this.toggleFlattenPcSkuImage(true, url);
        } else {
          this.toggleFlattenPcSkuImage(false);
        }

        return;
      }

      super.skuImageChange(img, source);

      if (this.mobileSwiper) {
        this.handleInitThumbnailImageBySkuImage();
      }
    }

    handleMobileThumbArrow(thumbnailContainer, list) {
      if (list.length > 3) {
        thumbnailContainer.find('.thumbnail-button-prev').css('visibility', 'visible');
        thumbnailContainer.find('.thumbnail-button-next').css('visibility', 'visible');
      } else {
        thumbnailContainer.find('.thumbnail-button-prev').css('visibility', 'hidden');
        thumbnailContainer.find('.thumbnail-button-next').css('visibility', 'hidden');
      }
    }

    updateMobileThumbsImage(list) {
      const thumbnailContainer = $(`${this.mobileId} .product_mobile_thumbnail_container`);

      if (!get(list, 'length') || list.length <= 1) {
        thumbnailContainer.hide();
        return;
      }

      thumbnailContainer.show();
      thumbnailContainer.find('.swiper-wrapper').empty().append(list.map(item => {
        const ratio = get(imgSize(item.resource), 'ratio') || '100%';
        let videoCover;
        let videoRatio;

        if (item.type === 'VIDEO') {
          const isYoutubeVideo = isYoutube(item.resource);
          const {
            middle: cover
          } = getYouTubeCover(item.resource);
          videoRatio = isYoutubeVideo ? '56.25%' : get(imgSize(item.cover), 'ratio') || '56.25%';
          videoCover = isYoutubeVideo ? cover : item.cover;
        }

        const boxPb = item.type === 'VIDEO' ? videoRatio : ratio;
        const domItem = item.type === 'VIDEO' ? `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="lozad" data-sizes="auto" data-src="${videoCover}" alt="">` : `<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="lozad" data-sizes="auto" data-src="${item.resource}" alt="">`;
        return `
          <div class="swiper-slide">
            <div class="swiper-slide-item" style="padding-bottom:${boxPb}">${domItem}</div>
          </div>`;
      }));
      this.handleMobileThumbArrow(thumbnailContainer, list);
    }

    updateMobileThumbArrow(list) {
      const paginationContainer = $(`${this.mobileId} .product_mobile_thumbnail_pagination`);

      if (list.length > 1) {
        paginationContainer.show();
      } else {
        paginationContainer.hide();
      }
    }

    updateImageList(list, activeIndex, source) {
      if (!this.verifySource(source && source.app)) {
        return;
      }

      if (this.productImageIsFlatten) {
        this.updateFlattenImageList(list);

        if (!this.mobileSwiper) {
          this.updateFlattenPhotoSwipeItems();
        }
      }

      if (!this.productMobileHideThumbnailImage && this.mobileSwiper) {
        this.updateMobileThumbsImage(list);
      }

      super.updateImageList(list, activeIndex, source);

      if (this.productMobileHideThumbnailImage && this.mobileSwiper) {
        this.updateMobileThumbArrow(list);
        this.updatePagination(0, list && list.length);
        this.initMobileNormalPagination();
      }
    }

    updateFlattenPhotoSwipeItems() {
      const items = [];
      $(`${this.id}`).find('.imageItem,.videoItem').each((index, item) => {
        const realIndex = $(item).data('index');
        const imgEl = $(item).find('.product_photoSwipe_image');
        const size = $(item).attr('data-natural-size');
        const transSize = size ? size.split('x') : null;
        items[realIndex] = {
          src: imgEl.attr('data-photoswipe-src'),
          w: transSize ? parseInt(transSize[0], 10) : imgEl.innerWidth(),
          h: transSize ? parseInt(transSize[1], 10) : imgEl.innerHeight(),
          el: item
        };
      });
      this.slideItems = items;
    }

    galleryAfterChange(...args) {
      if (this.productImageIsFlatten && !this.mobileSwiper) {
        const {
          currItem,
          getCurrentIndex
        } = args[0];
        const currentIndex = getCurrentIndex();

        if (currentIndex === 0 && this.productPcNormalItemFlatten.css('display') === 'none') {
          this.productPcNormalItemFlatten.show();
          this.productPcSkuImageFlatten.hide();
        }

        currItem.el.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest'
        });
      }

      super.galleryAfterChange(...args);
    }

    updateFlattenDom() {
      this.productPcSkuImageFlatten = $(this.id).find('.product_pc_skuImage_flatten');
      this.productPcNormalItemFlatten = $(this.id).find('.normalItem');
    }

    updateFlattenImageList(list) {
      const container = $(`${this.id}.product_productImages_tile`).empty();

      if (list && list.length) {
        container.removeClass('product-detail-empty-image');
        const flattenFirstItem = $(`<div class="row row-cols-md-1 gx-md-4 flattenFirstItem">
          <div class="flattenFirstItemWrapper">
            <div class="normalItem"></div>
            <div class="product_pc_skuImage_flatten"></div>
          </div>
        </div>`);
        const exceptFlattenItemList = $(`<div class="exceptFirstMediaList row row-cols-md-2 gx-md-4"></div>`);
        const firstCol = $(`<div class="product_images_firstCol"></div>`);
        const secondCol = $(`<div class="product_images_secondCol"></div>`);
        list.forEach((item, index) => {
          let dom;

          if (item.type === 'VIDEO') {
            const {
              middle: cover,
              videoId
            } = getYouTubeCover(item.resource);
            const isYoutubeVideo = isYoutube(item.resource);
            const photoswipeCoverSrc = isYoutubeVideo ? cover : item.cover;
            dom = `<div class="videoItem" data-index="${index}" style="padding-bottom: ${isYoutubeVideo ? '56.25%' : get(imgSize(item.cover), 'ratio') || '56.25%'}">
          ${isYoutubeVideo ? `<div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>` : `<video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">
                  <source src="${item.resource}" type="video/mp4">
                </video>`}
          <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="product_photoSwipe_image" data-photoswipe-src="${photoswipeCoverSrc}" src="${photoswipeCoverSrc}" alt="">
          </div>`;
          } else {
            const {
              ratio,
              width,
              height
            } = imgSize(item.resource);
            dom = `<div class="imageItem imageItem--${this.showMagnifier ? 'hover' : 'pointer'}" style="padding-bottom: ${ratio}" data-index="${index}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" class="product_photoSwipe_image" src="${item.resource}" alt="">${this.showMagnifier ? `<img data-width="${width}" data-height="${height}" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" class="imageItem--hover" src="${item.resource}" alt="">` : ''}</div>`;
          }

          if (index === 0) {
            flattenFirstItem.find('.normalItem').append(dom);
            return;
          }

          if ((index - 1) % 2) {
            secondCol.append(dom);
          } else {
            firstCol.append(dom);
          }
        });
        exceptFlattenItemList.append(firstCol, secondCol);
        container.append(flattenFirstItem, exceptFlattenItemList);
      } else {
        container.addClass('product-detail-empty-image');
        container.append(`<div class="product_pc_skuImage_flatten" style="width: 100%; position:absolute;"></div>`);
      }

      this.updateFlattenDom();
    }

    handleVideoPause() {
      this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'pause');
      this.handleUnifyVideoStatus(this.mobileVideo, 'mobile', 'pause');
    }

    handleVideoAutoPlay(video) {
      if (this.mobileSwiper || !this.productImageIsFlatten) {
        super.handleVideoAutoPlay(video);
        return;
      }

      if (Array.isArray(this.mediaList) && this.productVideoAutoplay) {
        if (this.mediaList[0] && this.mediaList[0].type !== 'VIDEO' || !this.productShowSkuCover) {
          this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'play');
        }
      }
    }

  }

  _exports.default = ProductImagesWithFlattenAndMobileThumb;
  return _exports;
}();