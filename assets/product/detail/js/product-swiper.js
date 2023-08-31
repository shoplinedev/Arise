window.SLM = window.SLM || {};

window.SLM['product/detail/js/product-swiper.js'] = window.SLM['product/detail/js/product-swiper.js'] || function () {
  const _exports = {};
  const ProductImages = window['SLM']['theme-shared/components/hbs/productImages/js/index.js'].default;
  const { isYoutube } = window['SLM']['theme-shared/components/hbs/productImages/js/index.js'];
  const getYouTubeCover = window['SLM']['theme-shared/components/hbs/shared/utils/getYouTubeCover.js'].default;
  const imgSize = window['SLM']['theme-shared/utils/img-size.js'].default;
  const imgUrl = window['SLM']['theme-shared/components/hbs/shared/utils/imgUrl.js'].default;
  const get = window['lodash']['get'];
  const throttle = window['SLM']['commons/utils/throttle.js'].default;

  class ProductImagesWithFlattenAndMobileThumb extends ProductImages {
    constructor(...args) {
      const {
        selectorId
      } = args[0] || {};
      const productMobileHideThumbnailImage = $(`.product_productMobileThumbnailImageHide_${selectorId}`).val() === 'hide';
      const productMobilePictureMode = $(`.product_productMobilePictureMode_${selectorId}`).val();
      let productMobilePictureModeConfig = {};

      if (productMobilePictureMode.includes('oneHalf') || productMobilePictureMode.includes('twoHalf')) {
        productMobilePictureModeConfig = {
          slidesPerView: productMobilePictureMode.includes('twoHalf') ? 2.5 : 1.5,
          watchSlidesVisibility: true,
          slidesPerGroup: 1,
          centeredSlides: false
        };
      }

      const productImageConfig = { ...args[0],
        swiperConfig: {
          mobile: {
            loop: false,
            ...productMobilePictureModeConfig
          }
        }
      };

      if (!productMobileHideThumbnailImage) {
        productImageConfig.swiperConfig = {
          mobile: {
            loop: false,
            ...productMobilePictureModeConfig,
            thumbs: {
              swiper: {
                el: `${`.execute_productImages_mobile_${selectorId}`} .product_mobile_thumbnail_container .swiper-container`,
                spaceBetween: 10,
                slidesPerView: 3.5,
                watchSlidesVisibility: true,
                slidesPerGroup: 1,
                navigation: false
              },
              multipleActiveThumbs: false
            }
          }
        };
      }

      super(productImageConfig);
      this.productImageShowType = $(`.product_productImageShowStyle_${selectorId}`).val();

      if (this.productImageShowType === 'one_column' || this.productImageShowType === 'two_column') {
        this.initColumnLayout(...args);
      }

      if (this.productImageShowType === 'flatten') {
        this.productImageIsFlatten = $(`.product_productImageShowStyle_${selectorId}`).val() === 'flatten';
        this.productPcSkuImageFlatten = $(this.id).find('.product_pc_skuImage_flatten');
        this.productPcNormalItemFlatten = $(this.id).find('.normalItem');

        if (!this.mobileSwiper && this.productImageScale) {
          this.initPcPhotoSwipe();
          this.initFlattenPcSkuPhotoSwiper();
        }

        if (!this.mobileSwiper) {
          this.handleVideoAutoPlay();
        }
      }

      this.pictureMode = productMobilePictureMode;
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
    }

    findSkuImage(src) {
      return this._allMediaList.find(item => item.resource === src);
    }

    loadMoreFlattenPhoto() {
      const newAddPicNum = this.listLength - this.lastShowIndex >= 6 ? 6 : this.listLength - this.lastShowIndex;
      this.ToIndexFlattenPhoto(this.lastShowIndex + newAddPicNum, false);
    }

    ToIndexFlattenPhoto(toIndex, isAnchor, anchorIndex) {
      const colDom = $(`${this.id}.product_productImages_tile`);
      const itemDom = this.productImageIsOneColumn ? $(`${this.id} .flatten_ImageItem`) : $(`${this.id} .imageItem, ${this.id} .videoItem`);

      if (toIndex > this.lastShowIndex && itemDom.length >= 40) {
        const newAddList = this.spuImgList.slice(this.lastShowIndex + 1, toIndex + 1);

        if (this.productImageIsTwoColumn) {
          const evenColDom = $(`${this.id}.product_productImages_tile`).find('.product_images_firstCol');
          const oddColDom = $(`${this.id}.product_productImages_tile`).find('.product_images_secondCol');
          this.addPicToTwoCol(newAddList, evenColDom, oddColDom);
        }

        if (this.productImageIsOneColumn) {
          this.addPicToOneCol(newAddList, colDom);
        }

        window.lozadObserver.observe();

        if (!this.mobileSwiper && this.productImageScale) {
          this.updateFlattenPhotoSwipeItems();
        }

        this.lastShowIndex = toIndex;
        if (this.lastShowIndex >= this.listLength - 1) $(`${this.id}`).find('.more-pic-btn').hide();
      }

      if (!isAnchor) return;
      const imgAnchor = $(`${this.id}`).find(`span[data-index="${anchorIndex}"]`);
      if (!imgAnchor.length) return;

      if (!colDom.find('.placeHolderDiv').length) {
        this.placeHolderHeight = $(`[data-product-spu-id="${this.spuSeq}"]  .product-detail-sticky`).height() - $(`[data-product-spu-id="${this.spuSeq}"]  .product-detail-sticky .sticky-main-view`).height();
        colDom.find('.more-pic-btn').after(`<div class="placeHolderDiv" style="height:${this.placeHolderHeight}px"></div>`);
      } else {
        colDom.find('.placeHolderDiv').height(this.placeHolderHeight);
      }

      const imgDomTop = $(`[data-product-spu-id="${this.spuSeq}"] .product-detail-col-img`)[0].offsetTop;
      const cunrrentScrollTop = document.documentElement.scrollTop;
      let imgAnchorTop = imgDomTop > cunrrentScrollTop ? 0 : cunrrentScrollTop - imgDomTop;
      const isHeaderSticky = $('.header-sticky-wrapper').hasClass('is-sticky');

      if (isHeaderSticky) {
        const headerBottom = $('.header-sticky-wrapper #stage-header')[0].scrollTop + $('.header-sticky-wrapper #stage-header').outerHeight();
        imgAnchorTop += headerBottom;
      }

      if (this.isDetail) imgAnchor.css('top', `-${imgAnchorTop}px`);
      imgAnchor && imgAnchor[0].scrollIntoView();
      if (this.isDetail) window.scrollTo(0, cunrrentScrollTop);
    }

    addPicToOneCol(list, colDom) {
      let imgDomStr = '';
      list.forEach(item => {
        const {
          index
        } = item;

        if (item.type === 'VIDEO') {
          const {
            middle: cover,
            videoId
          } = getYouTubeCover(item.resource);
          const isYoutubeVideo = isYoutube(item.resource);
          const photoswipeCoverSrc = isYoutubeVideo ? cover : item.cover;
          imgDomStr += `<div class="flatten_ImageItem"><figure class="videoItem" data-index="${index}" style="padding-bottom: ${isYoutubeVideo ? '56.25%' : imgSize(item.cover) && imgSize(item.cover).ratio || '56.25%'}">
            ${isYoutubeVideo ? `<div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>` : `<video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">
                    <source src="${item.resource}" type="video/mp4">
                  </video>`}
            <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';"  class="product_photoSwipe_image lozad" data-photoswipe-src="${photoswipeCoverSrc}" data-src="${photoswipeCoverSrc}" alt="">
          </figure></div>`;
          return;
        }

        const {
          ratio = '100%',
          height,
          width
        } = imgSize(item.resource);
        imgDomStr += `<div class="flatten_ImageItem"><span data-spu-col-img="${item.resource}" data-index="${index}"></span><figure data-index="${index}" class="imageItem imageItem--${this.showMagnifier ? 'hover' : 'pointer'}" style="padding-bottom: ${ratio}">
<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image lozad" data-src="${item.resource}" data-photoswipe-src="${item.resource}" alt="">${this.showMagnifier ? `<img data-width="${width}" data-height="${height}" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image lozad imageItem--hover" data-src="${item.resource}" alt="" />` : ''}
</figure></div>`;
      });
      const parentDom = colDom.find('.more-pic-btn');

      if (parentDom.length) {
        parentDom.before(imgDomStr);
      } else {
        colDom.empty().append(imgDomStr);
      }

      window.lozadObserver.observe();

      if (this.showMagnifier && this.productImageScale) {
        this.handleImageHover();
      }
    }

    addPicToTwoCol(list, evenColDom, oddColDom) {
      let evenDom = '';
      let oddDom = '';
      list.forEach(item => {
        let dom;
        const {
          index
        } = item;

        if (item.type === 'VIDEO') {
          const {
            middle: cover,
            videoId
          } = getYouTubeCover(item.resource);
          const isYoutubeVideo = isYoutube(item.resource);
          const photoswipeCoverSrc = isYoutubeVideo ? cover : item.cover;

          if (isYoutubeVideo) {
            dom = `<div class="videoItem" data-index="${index}" style="padding-bottom: ${isYoutubeVideo ? '56.25%' : imgSize(item.cover) && imgSize(item.cover).ratio || '56.25%'}">
                  <div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>
                  <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="product_photoSwipe_image lozad" data-src="${photoswipeCoverSrc}"  data-photoswipe-src="${photoswipeCoverSrc}"  alt="">
                </div>`;
          } else {
            dom = `<div class="videoItem" data-index="${index}" style="padding-bottom: ${isYoutubeVideo ? '56.25%' : imgSize(item.cover) && imgSize(item.cover).ratio || '56.25%'}">
                  <video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">
                    <source src="${item.resource}" type="video/mp4">
                  </video>
                  <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  class="product_photoSwipe_image lozad" data-src="${photoswipeCoverSrc}"  data-photoswipe-src="${photoswipeCoverSrc}"  alt="">
                </div>`;
          }
        } else {
          const {
            ratio = '100%',
            height,
            width
          } = imgSize(item.resource);
          dom = `<div class="imageItem imageItem--${this.showMagnifier ? 'hover' : 'pointer'}" style="padding-bottom: ${ratio}" data-index="${index}"><span data-spu-col-img="${item.resource}" data-index="${index}"></span><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" class="product_photoSwipe_image lozad" data-src="${item.resource}" alt="">${this.showMagnifier ? `<img data-width="${width}" data-height="${height}" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_photoSwipe_image lozad imageItem--hover" data-src="${item.resource}" alt="">` : ''}</div>`;
        }

        if (index % 2) {
          oddDom += dom;
        } else {
          evenDom += dom;
        }
      });
      evenColDom.append(evenDom);
      oddColDom.append(oddDom);

      if (this.showMagnifier && this.productImageScale) {
        this.handleImageHover();
      }
    }

    updateOneColumnImageList(list, activeIndex) {
      this.spuImgList = list.map((item, index) => {
        item.index = index;
        return item;
      });
      const cunrrentScrollTop = document.documentElement.scrollTop;
      this.listLength = list.length;
      const colDom = $(`${this.id}.product_productImages_tile`);
      colDom.find(`.flatten_ImageItem`).remove();
      if (this.isDetail) window.scrollTo(0, cunrrentScrollTop);

      if (this.spuImgList.length) {
        const showlistLength = this.spuImgList.length < 40 ? this.listLength : 40;
        const showlist = this.spuImgList.slice(0, showlistLength);

        if (this.listLength < 40) {
          colDom.find('.more-pic-btn').hide();
        } else {
          colDom.find('.more-pic-btn').show();
        }

        this.addPicToOneCol(showlist, colDom);

        if (!this.mobileSwiper && this.productImageScale) {
          this.updateFlattenPhotoSwipeItems();
        }

        const imgAnchor = $(`${this.id}`).find(`span[data-index="${activeIndex}"]`);
        if (!imgAnchor.length) return;
        const imgDomTop = $(`[data-product-spu-id="${this.spuSeq}"] .product-detail-col-img`)[0].offsetTop;
        let imgAnchorTop = imgDomTop > cunrrentScrollTop ? 0 : cunrrentScrollTop - imgDomTop;
        const isHeaderSticky = $('.header-sticky-wrapper').hasClass('is-sticky');

        if (isHeaderSticky) {
          const headerBottom = $('.header-sticky-wrapper #stage-header')[0].scrollTop + $('.header-sticky-wrapper #stage-header').outerHeight();
          imgAnchorTop += headerBottom;
        }

        if (this.isDetail) imgAnchor.css('top', `-${imgAnchorTop}px`);
        imgAnchor && imgAnchor[0].scrollIntoView();
        if (this.isDetail) window.scrollTo(0, cunrrentScrollTop);
        this.lastShowIndex = showlistLength - 1;
      } else {
        colDom.empty().append(`<div class="product-detail-empty-image"></div>`);
      }
    }

    updateTwoColumnImageList(list, activeIndex) {
      const container = $(`${this.id}.product_productImages_tile`);
      const cunrrentScrollTop = document.documentElement.scrollTop;
      let firstCol = container.find('.product_images_firstCol').empty();
      let secondCol = container.find('.product_images_secondCol').empty();

      if (!firstCol.length) {
        firstCol = $(`<div class='product_images_firstCol'></div>`);
        container.append(firstCol);
      }

      if (!secondCol.length) {
        secondCol = $(`<div class='product_images_secondCol'></div>`);
        container.append(secondCol);
      }

      if (this.isDetail) window.scrollTo(0, cunrrentScrollTop);
      this.spuImgList = list.map((item, index) => {
        item.index = index;
        return item;
      });
      this.listLength = this.spuImgList.length;

      if (this.spuImgList.length) {
        container.removeClass('product-detail-empty-image');
        container.addClass('row gx-md-4');
        const showlistLength = this.listLength < 40 ? this.listLength : 40;
        const showlist = this.spuImgList.slice(0, showlistLength + 1);

        if (this.listLength <= showlistLength) {
          $(`${this.id}`).find('.more-pic-btn').hide();
        } else {
          $(`${this.id}`).find('.more-pic-btn').show();
        }

        this.addPicToTwoCol(showlist, firstCol, secondCol);
        window.lozadObserver.observe();

        if (list.length > 1) {
          container.addClass('row-cols-md-2');
        } else {
          container.removeClass('row-cols-md-2');
        }

        if (!this.mobileSwiper && this.productImageScale) {
          this.updateFlattenPhotoSwipeItems();
        }

        const imgAnchor = $(`${this.id}`).find(`span[data-index="${activeIndex}"]`);
        if (!imgAnchor.length) return;
        const imgDomTop = $(`[data-product-spu-id="${this.spuSeq}"] .product-detail-col-img`)[0].offsetTop;
        let imgAnchorTop = imgDomTop > cunrrentScrollTop ? 0 : cunrrentScrollTop - imgDomTop;
        const isHeaderSticky = $('.header-sticky-wrapper').hasClass('is-sticky');

        if (isHeaderSticky) {
          const headerBottom = $('.header-sticky-wrapper #stage-header')[0].scrollTop + $('.header-sticky-wrapper #stage-header').outerHeight();
          imgAnchorTop += headerBottom;
        }

        if (this.isDetail) imgAnchor.css('top', `-${imgAnchorTop}px`);
        imgAnchor && imgAnchor[0].scrollIntoView();
        if (this.isDetail) window.scrollTo(0, cunrrentScrollTop);
        this.lastShowIndex = showlistLength - 1;
      } else {
        container.addClass('product-detail-empty-image');
      }
    }

    initColumnLayout(args) {
      const {
        selectorId,
        mediaList,
        spuSeq,
        skuList
      } = args || {};
      this.skuList = skuList;
      this._allMediaList = mediaList;
      this.productImageIsColumnLayout = this.productImageShowType === 'two_column' || this.productImageShowType === 'one_column';
      this.productImageIsOneColumn = this.productImageShowType === 'one_column';
      this.productImageIsTwoColumn = this.productImageShowType === 'two_column';
      this.productImagesNeedAppendTopImage = this.productImageIsColumnLayout;
      this.productImageActiveSkuImage = $(`.product_productImageActiveSkuImage_${selectorId}`).val();
      this.spuSeq = spuSeq;
      this.isDetail = selectorId.indexOf('productDetail') > -1;
      this.isUserScrolled = localStorage.getItem('isUserScrolled') || false;
      this.initImgDomHeight = false;
      this.headerOffset = $('#stage-header').data('sticky') ? $('.header__layout-background').height() : 0;
      let _mediaList = mediaList;
      console.warn('this.productImageShowSkuImg', this.productImageShowSkuImg, this.productImageActiveSkuImage);

      if (!this.productImageShowSkuImg) {
        _mediaList = this.findMainMediaList();
        const skuImage = this.findSkuImage(this.productImageActiveSkuImage);

        if (skuImage) {
          _mediaList = [{ ...skuImage,
            isSkuImage: true
          }, ..._mediaList];
        }
      }

      this.spuImgList = _mediaList.map((item, index) => {
        item.index = index;
        return item;
      });
      const itemDom = this.productImageIsOneColumn ? $(`${this.id} .flatten_ImageItem`) : $(`${this.id} .imageItem, ${this.id} .videoItem`);
      this.listLength = this.spuImgList.length;
      if (this.listLength < 40 || itemDom.length < 40) $(`${this.id}`).find('.more-pic-btn').hide();
      this.lastShowIndex = this.listLength > 40 ? 39 : this.listLength;
      this.initIndex = $(`${this.id}`).data('init-index');
      const minimumIndex = this.productImageIsOneColumn ? 0 : 1;

      if (this.initIndex > minimumIndex) {
        $(`${this.id}`).css('opacity', 0);
        setTimeout(() => {
          this.ToIndexFlattenPhoto(this.initIndex + 6, true, this.initIndex);
          $(`${this.id}`).css('opacity', 1);
        }, 200);
      }

      if (this.productImageIsColumnLayout && !this.mobileSwiper) {
        const infoDom = $(`[data-product-spu-id="${this.spuSeq}"]  .product-detail-sticky`);
        const imgDom = $(`[data-product-spu-id="${this.spuSeq}"] .product_productImages_tile`);
        let skuTradeDom = $(`[data-product-spu-id="${this.spuSeq}"] .product-sku-trade-flatten`);
        if (!skuTradeDom.length) skuTradeDom = $(`[data-product-spu-id="${this.spuSeq}"] .product-sku-trade-select`);
        const skuTradeDomOffsetTop = skuTradeDom[0] ? skuTradeDom[0].offsetTop : 0;
        const viewHeight = this.isDetail ? window.innerHeight - skuTradeDomOffsetTop : $(`[data-product-spu-id="${this.spuSeq}"]`).height();
        let infoDomHeight = infoDom.height();
        const imgDomHieght = imgDom.height();

        if (imgDomHieght > infoDomHeight) {
          if (infoDomHeight <= viewHeight) {
            if (imgDomHieght >= viewHeight) {
              imgDom.height(viewHeight);
            }
          } else {
            imgDom.height(infoDomHeight);
          }
        }

        if ($(`${this.id}`).height() <= imgDom.height()) {
          imgDom.find('.col-img-tips svg').hide();
        } else if (!this.isUserScrolled) imgDom.find('.col-img-tips svg').show();

        if (this.isDetail) {
          const skuTradeheight = skuTradeDom.height();
          const infoTop = infoDom[0].offsetTop;
          const skuTradeTop = skuTradeDomOffsetTop;
          this.placeHolderHeight = infoDomHeight - (skuTradeTop - infoTop) - skuTradeheight - 80;
        } else {
          this.placeHolderHeight = infoDomHeight - $(`[data-product-spu-id="${this.spuSeq}"]  .product-detail-sticky .sticky-main-view`).height();
        }

        const scrollCheckFunc = throttle(200, () => {
          if (infoDomHeight === infoDom.height() && this.initImgDomHeight) return;
          this.initImgDomHeight = true;
          infoDomHeight = infoDom.height();
          const skuTradeheight = skuTradeDom.height();
          const infoTop = infoDom[0].offsetTop;
          const skuTradeTop = skuTradeDomOffsetTop;
          this.placeHolderHeight = infoDomHeight - (skuTradeTop - infoTop) - skuTradeheight - 80;
          $(`${this.id}`).find('.placeHolderDiv').height(this.placeHolderHeight);
          imgDom.css('max-height', `${infoDom.height()}px`);
          imgDom.height(infoDom.height());

          if ($(`${this.id}`).height() <= imgDom.height()) {
            imgDom.find('.col-img-tips svg').hide();
          } else if (!this.isUserScrolled) imgDom.find('.col-img-tips svg').show();
        });

        if (this.isDetail) {
          window.addEventListener('scroll', scrollCheckFunc);
        }

        setTimeout(() => {
          imgDom[0].onscroll = () => {
            imgDom.find('.col-img-tips svg').hide();
            localStorage.setItem('isUserScrolled', true);
          };
        }, 300);
        const self = this;
        $(`${this.id}`).on('click', '.more-pic-btn', function () {
          self.loadMoreFlattenPhoto();
        });
        this.handleVideoAutoPlay();
      }

      if (this.productImageIsColumnLayout && !this.mobileSwiper && this.productImageScale) {
        this.initPcPhotoSwipe();
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
      const _total = this.pictureMode.includes('twoHalf') ? total - 1 : total;

      const {
        mobileId
      } = this;
      const prevDom = $(`${mobileId} .normal-thumbnail-button-prev`);
      const nextDom = $(`${mobileId} .normal-thumbnail-button-next`);
      const content = $(`${mobileId} .pagination-content`);
      const paginationContainer = $(`${this.mobileId} .product_mobile_thumbnail_pagination`);
      const paginationType = paginationContainer.data('pagination-type');

      if (paginationType === 'number') {
        content.html(`${currentIndex + 1}/${_total}`);
        prevDom.removeClass('disabled');
        nextDom.removeClass('disabled');

        if (currentIndex === 0) {
          prevDom.addClass('disabled');
          return;
        }

        if (currentIndex === _total - 1) {
          nextDom.addClass('disabled');
        }
      } else if (paginationType === 'progress') {
        const progress = paginationContainer.find('.product-pagination__progress-inner-bg');
        const widthPercent = ((currentIndex + 1) / _total * 100).toFixed(3);
        progress.css('width', `${widthPercent}%`);
      } else if (paginationType === 'dot') {
        const dotEls = paginationContainer.find('.tap-area');
        const currentDotEl = dotEls.eq(currentIndex);
        dotEls.removeClass('current');
        currentDotEl.addClass('current');
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

    initPcPhotoSwipe() {
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

      if (this.productImageIsColumnLayout) {
        super.skuImageChange(img, source);

        if (!this.mobileSwiper && !this.productImageShowSkuImg) {
          let isNeedUpdate = false;
          let list = this.spuImgList;

          if (this.spuImgList && this.spuImgList[0] && this.spuImgList[0].isSkuImage) {
            const [_, ...e] = list;
            list = e;
            isNeedUpdate = true;
          }

          if (!this.mobileSwiper) {
            const skuImage = this.findSkuImage(url);

            if (skuImage) {
              list = [{ ...skuImage,
                isSkuImage: true
              }, ...list];
              isNeedUpdate = true;
            }
          }

          if (isNeedUpdate) this.updateImageList(list, 0);
        }

        if (url) {
          if (!this.mobileSwiper) {
            this.handleVideoAutoPlay();
          }

          const index = this.spuImgList.findIndex(item => item.resource === url);
          if (index < 0) return;
          this.ToIndexFlattenPhoto(index + 6, true, index);
        }

        return;
      }

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

      if (this.productImageIsOneColumn) {
        this.updateOneColumnImageList(list, activeIndex);
      }

      if (this.productImageIsTwoColumn) {
        this.updateTwoColumnImageList(list, activeIndex);
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

      if (this.productImageIsColumnLayout && !this.mobileSwiper) {
        const {
          currItem
        } = args[0];
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
      if (this.mobileSwiper || !this.productImageIsFlatten || !this.productImageIsColumnLayout) {
        super.handleVideoAutoPlay(video);
        return;
      }

      if (this.productImageIsColumnLayout && Array.isArray(this.spuImgList)) {
        if (this.productVideoAutoplay) {
          this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'play');
        }

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