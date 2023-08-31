window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/productImages/js/index.js'] = window.SLM['theme-shared/components/hbs/productImages/js/index.js'] || function () {
  const _exports = {};
  const Swiper = window['swiper']['default'];
  const { EffectFade, Lazy, Thumbs, Navigation } = window['swiper'];
  const url = window['url']['default'];
  const get = window['lodash']['get'];
  const PhotoSwipe = window['photoswipe']['/dist/photoswipe.min'].default;
  const photoSwipeUiDefault = window['photoswipe']['/dist/photoswipe-ui-default.min'].default;
  const YTPlayer = window['yt-player']['default'];
  const imgSize = window['SLM']['theme-shared/utils/img-size.js'].default;
  const photoSwipeHtmlString = window['SLM']['theme-shared/components/hbs/productImages/js/product-photoSwipeHtml.js'].default;
  const imgUrl = window['SLM']['theme-shared/components/hbs/shared/utils/imgUrl.js'].default;
  const getYouTubeCover = window['SLM']['theme-shared/components/hbs/shared/utils/getYouTubeCover.js'].default;
  const GifLozyloadPlugin = window['SLM']['theme-shared/utils/lozad/plugins/image-gif-poster.js'].default;
  Swiper.use([EffectFade, Lazy, Thumbs, Navigation]);
  const COLUMN = 'column';
  const ROW = 'row';
  const WRAP_PC_ID = '.product_pc_productImageContainer';
  const WRAP_M_ID = '.product_mobile_productImageContainer';

  function imgOnload(src, cb, failCb) {
    if (!src) return;
    const img = new Image();

    img.onload = () => {
      cb(img);
    };

    img.onerror = () => {
      console.warn('imgOnError...', img);
      failCb(img);
    };

    img.src = src;
  }

  function isYoutube(_url) {
    const urlParse = url.parse(_url);
    return urlParse.hostname === 'www.youtube.com';
  }

  _exports.isYoutube = isYoutube;

  class ProductImages {
    constructor(options) {
      const {
        selectorId,
        heightOnChange,
        swiperConfig,
        mediaList,
        beforeInit,
        skuList
      } = options || {};
      this.mediaList = mediaList || [];
      this._allMediaList = mediaList;
      this.config = {};
      this.skuList = skuList || [];
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

      if ($(`${pcWrapperSelector}`).length === 0 || $(`${mobileWrapperSelector}`).length === 0) {
        console.error(`初始化productImages组件失败，请检查selectorId是否输错，应存在html上`);
        $(pcWrapperSelector).hide();
        $(mobileWrapperSelector).hide();
        return;
      }

      const pcWrapper = $(`${pcWrapperSelector}`);
      this.thumbsDirection = pcWrapper.data('thumbs-direction') === 'aside' ? COLUMN : ROW;
      this.showThumbsArrow = String(pcWrapper.data('show-thumbnail-arrow')) === 'true';
      this.productImageScale = String($(`.product_productImageScale_${selectorId}`).val()) === 'true';
      this.productVideoMute = String($(`.product_productVideoMute_${selectorId}`).val()) === 'true';
      this.productVideoLoop = String($(`.product_productVideoLoop_${selectorId}`).val()) === 'true';
      this.productVideoAutoplay = String($(`.product_productVideoAutoplay_${selectorId}`).val()) === 'true';
      this.productImageShowSkuImg = String($(`.product_productImageShowSkuImg_${selectorId}`).val()) === 'true';
      this.productShowSwiperArrow = String($(`.product_productImageShowSwiperArrow_${selectorId}`).val()) === 'true';
      this.productShowSkuCover = String($(`.product_productImageNeedSkuCover_${selectorId}`).val()) === 'true';
      this.mobileWidthRatio = $(mobileWrapperSelector).hasClass('middleWidth') ? 0.75 : 1;
      this.productMobilePictureMode = $(`.product_productMobilePictureMode_${selectorId}`).val();
      this.picIsOneHalfOrTwoHalf = this.productMobilePictureMode && (this.productMobilePictureMode.includes('oneHalf') || this.productMobilePictureMode.includes('twoHalf'));
      this.productImageLength = $('.product_productImageLength').val();
      this.id = pcWrapperSelector;
      this.selectorId = selectorId;
      this.mobileId = mobileWrapperSelector;

      if (!this.productImageShowSkuImg) {
        this.mediaList = this.findMainMediaList();
      }

      this.showMagnifier = String($(`.product_productImageMagnifierType_${selectorId}`).val()) === 'hover';
      beforeInit && beforeInit({
        pcWrapperSelector
      });
      this.mobileSwiper = this.initMobileProductImages(true);
      this.swiper = this.initPcProductImages(true);
      this.swiper && this.swiper.init();
      this.pcVideo = this.initPcVideo();
      this.mobileVideo = this.initMobileVideo();

      if (this.showMagnifier && this.productImageScale) {
        this.handleImageHover();
      }
    }

    setConfig(config) {
      if (!this.config.app) {
        this.config.app = [];
      }

      this.config.app.push(config.app);
    }

    verifySource(app) {
      if (!get(this, 'config.app.length') || this.config.app.includes(app)) {
        return true;
      }

      return false;
    }

    handleVideoPlayPause(player, type) {
      if (type === 'play' && player) {
        player.play();
      }

      if (type === 'pause' && player) {
        player.pause();
      }
    }

    handleUnifyVideoStatus(video, device, status) {
      if (video && video.ytbVideo) {
        this.handleVideoPlayPause(video.ytbVideo.player, status);

        if (device === 'mobile') {
          video.ytbVideo.playerStatus = status;
        }
      }

      if (video && video.slVideo) {
        this.handleVideoPlayPause(video.slVideo.player, status);

        if (device === 'mobile') {
          video.slVideo.playerStatus = status;
        }
      }
    }

    floatVideoDiff(video, platform) {
      const {
        player
      } = video;

      if (platform === 'youtube') {
        player.on('playing', () => {
          window.SL_EventBus.emit('product:product-play-video');
        });

        if (this.productVideoMute || this.productVideoAutoplay) {
          player.mute();
        }

        player.on('cued', () => {
          this.handleVideoAutoPlay();
        });

        if (this.productVideoLoop) {
          player.on('ended', () => {
            player.play();
          });
        }
      } else if (platform === 'sl') {
        player.addEventListener('playing', () => {
          window.SL_EventBus.emit('product:product-play-video');
        });

        if (this.productVideoMute || this.productVideoAutoplay) {
          player.muted = true;
        }

        player.addEventListener('canplay', () => {
          this.handleVideoAutoPlay();
        });

        if (this.productVideoLoop) {
          player.addEventListener('ended', () => {
            player.play();
          });
        }
      }

      window.SL_EventBus.on('global:popup:close', () => {
        this.handleVideoPlayPause(player, 'pause');
      });
    }

    initPcVideo() {
      const ytbVideoPcSelector = `${this.id} .product_youTubeVideoBox`;
      const ytbVideoDom = $(ytbVideoPcSelector);
      const slVideoDom = $(`${this.id} .product_slVideoContainer`);
      const ytbVideo = {
        player: null,
        playerStatus: 'pause'
      };
      const slVideo = {
        player: null,
        playerStatus: 'pause'
      };

      if (ytbVideoDom.length > 0) {
        ytbVideo.player = new YTPlayer(ytbVideoPcSelector, {
          modestBranding: true,
          controls: false
        });
        const videoId = ytbVideoDom.data('video-id');
        ytbVideo.player.load(videoId);
        this.floatVideoDiff(ytbVideo, 'youtube');
      }

      if (slVideoDom.length > 0) {
        slVideo.player = slVideoDom.get(0);
        this.floatVideoDiff(slVideo, 'sl');
      }

      const videos = {
        ytbVideo,
        slVideo
      };
      this.handleVideoAutoPlay(videos);
      return videos;
    }

    initMobileVideoCoverClick(dom, video) {
      dom.on('click', () => {
        const shouldExecutePlayStatus = video.playerStatus === 'pause' ? 'play' : 'pause';
        this.handleVideoPlayPause(video.player, shouldExecutePlayStatus);
        video.playerStatus = shouldExecutePlayStatus;
      });
    }

    initMobileVideo() {
      const ytbVideoMDom = $(`${this.mobileId} .swiper-slide`).not('.swiper-slide-duplicate').find('.product_youTubeVideoBox').addClass('product_youTubeMobileVideoBox');
      const ytbVideoMSelector = `${this.mobileId} .product_youTubeMobileVideoBox`;
      const slVideoMDom = $(`${this.mobileId} .swiper-slide`).not('.swiper-slide-duplicate').find('.product_slVideoContainer');
      const ytbVideoCoverDom = $(`${this.mobileId} [data-video-platform="youtube"]`).not('.swiper-slide-duplicate').find('.product_photoSwipe_image');
      const slVideoCoverDom = $(`${this.mobileId} [data-video-platform="sl"]`).not('.swiper-slide-duplicate').find('.product_photoSwipe_image');
      const ytbVideo = {
        player: null,
        playerStatus: 'pause'
      };
      const slVideo = {
        player: null,
        playerStatus: 'pause'
      };

      if (ytbVideoMDom.length > 0) {
        ytbVideo.player = new YTPlayer(ytbVideoMSelector, {
          modestBranding: true,
          controls: false
        });
        const videoId = ytbVideoMDom.data('video-id');
        ytbVideo.player.load(videoId);
        this.floatVideoDiff(ytbVideo, 'youtube');
        this.initMobileVideoCoverClick(ytbVideoCoverDom, ytbVideo);
      }

      if (slVideoMDom.length > 0) {
        slVideo.player = slVideoMDom.get(0);
        this.floatVideoDiff(slVideo, 'sl');
        this.initMobileVideoCoverClick(slVideoCoverDom, slVideo);
      }

      const videos = {
        ytbVideo,
        slVideo
      };
      this.handleVideoAutoPlay(videos);
      return videos;
    }

    initPhotoSwipe(slidesWrapID, platform) {
      if (Number(this.productImageLength) === 0) return;
      const slidesSelector = `${slidesWrapID} .product_productImages`;
      const triggerDom = $(slidesSelector);
      const eventDom = platform === 'mobile' ? '.scaleImageIcon' : '.swiper-slide';
      const self = this;
      self.updatePhotoSwipeItems(slidesWrapID);
      triggerDom.on('click', eventDom, function () {
        if ($(this).hasClass('swiper-slide-duplicate') || !get(self, 'slideItems.length') || $(this).hasClass('imageItem--hover')) {
          return;
        }

        const triggerThis = platform === 'mobile' ? $(this).closest('.imageItem') : $(this);
        const isMobileHasActiveSkuImage = triggerThis.find('.product_m_skuImage').length > 0;
        const isVideoSlide = triggerThis.hasClass('videoItem');
        if (isMobileHasActiveSkuImage || isVideoSlide) return;
        const {
          activeIndex
        } = platform === 'mobile' ? self.mobileSwiper : self.swiper;
        const mobileIndex = self.picIsOneHalfOrTwoHalf ? triggerThis.data('index') : activeIndex;
        const mobileIndexByLoop = self.getSwiperIsLoop() ? triggerThis.data('swiper-slide-index') : mobileIndex;
        const index = platform === 'mobile' ? mobileIndexByLoop : activeIndex;
        self.handlePhotoSwiper(self.slideItems, index);
      });
    }

    initPcSkuPhotoSwiper() {
      const self = this;
      $(`${this.id} .product_pc_skuImage`).on('click', function () {
        const items = [{
          src: $(this).find('.product_photoSwipe_image').attr('data-photoswipe-src'),
          w: 0,
          h: 0,
          el: $(this)[0]
        }];
        self.handlePhotoSwiper(items, 0, false);
      });
    }

    handlePhotoSwiper(items, index, cacheNaturalSize) {
      let pswpElement = document.querySelectorAll('.pswp')[0];

      if (!pswpElement) {
        $('body').append(photoSwipeHtmlString);
        pswpElement = document.querySelectorAll('.pswp')[0];
      }

      this.openPhotoSwipe(pswpElement, items, index, cacheNaturalSize);
    }

    initMobileSkuPhotoSwiper() {
      const self = this;
      $(`${this.mobileId} .product_m_skuImageBox .scaleSkuImageIcon`).on('click', function () {
        const items = [{
          src: $(this).parent().find('.product_photoSwipe_image').attr('data-photoswipe-src'),
          w: 0,
          h: 0,
          el: $(this).parent()[0]
        }];
        self.handlePhotoSwiper(items, 0, false);
      });
    }

    updatePhotoSwipeItems(slidesWrapID) {
      const slidesDom = $(`${slidesWrapID} .product_productImages`).find('.swiper-slide').not('.swiper-slide-duplicate').filter(function () {
        return !$(this).children('.product-detail-empty-image').length;
      });
      const items = [];
      slidesDom.each((index, item) => {
        const imgEl = $(item).find('.product_photoSwipe_image');
        const size = $(item).attr('data-natural-size');
        const transSize = size ? size.split('x') : null;
        items.push({
          src: imgEl.attr('data-photoswipe-src'),
          w: transSize ? parseInt(transSize[0], 10) : imgEl.innerWidth(),
          h: transSize ? parseInt(transSize[1], 10) : imgEl.innerHeight(),
          el: item
        });
      });
      this.slideItems = items;
    }

    openPhotoSwipe(pswpElement, items, index = 0, cacheNaturalSize = true) {
      const self = this;

      if (items && items.length > 1) {
        $('.pswp__button--arrow--left, .pswp__button--arrow--right').show();
      } else {
        $('.pswp__button--arrow--left, .pswp__button--arrow--right').hide();
      }

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
          let thumbnailParent;

          if (items[_index].el && items[_index].el.className.indexOf('swiper-slide-duplicate') !== -1) {
            thumbnailParent = $(`${self.mobileId} .swiper-slide`).eq(self.mobileSwiper.activeIndex).get(0);
          } else {
            thumbnailParent = items[_index].el;
          }

          const thumbnail = thumbnailParent.getElementsByClassName('product_photoSwipe_image')[0];
          const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
          const rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }

      };
      const gallery = new PhotoSwipe(pswpElement, photoSwipeUiDefault, items, photoSwipeOptions);
      gallery.listen('gettingData', function (_index, item) {
        const imgWrapEl = item.el;
        const img = new Image();

        if (!imgWrapEl.getAttribute('data-natural-size')) {
          if (!window.__PRELOAD_STATE__.imgNoReferrerSwitch) {
            img.src = item.src;
          }

          img.onload = () => {
            const _img = imgSize(img.src);

            const hasWH = _img && _img.ratio;

            if (cacheNaturalSize) {
              const naturalSize = hasWH ? `${img.naturalWidth}x${img.naturalHeight}` : `100x100`;
              imgWrapEl.setAttribute('data-natural-size', naturalSize);
            }

            item.w = img.naturalWidth;
            item.h = img.naturalHeight;
            gallery.updateSize(true);
          };
        }

        if (window.__PRELOAD_STATE__.imgNoReferrerSwitch) {
          img.setAttribute('referrerpolicy', 'same-origin');
          img.src = item.src;
        }
      });
      gallery.init();
      gallery.listen('afterChange', () => {
        this.galleryAfterChange(gallery);
      });
    }

    galleryAfterChange(gallery) {
      const currentIndex = gallery.getCurrentIndex();
      this.swiper && this.swiper.slideTo(currentIndex);
      this.mobileSwiper && this.mobileSwiper.slideToLoop(currentIndex);
    }

    heightOnChangeCb(height) {
      setTimeout(() => {
        this.heightOnChange && this.heightOnChange(height);
      }, 200);
    }

    handleProductImagesHeight(swiperSelector, activeIndex, ratio = 1, targetImgSrc) {
      const self = this;
      const selector = swiperSelector;
      this.heightChangedCount++;
      const count = this.heightChangedCount;
      const promise = new Promise((resolve, reject) => {
        if (count !== this.heightChangedCount) {
          resolve();
          return;
        }

        if (activeIndex !== undefined) {
          const currentSlide = $(`${selector} .swiper-slide`).eq(activeIndex);

          if (!targetImgSrc && currentSlide.find('.product-detail-empty-image').length > 0) {
            const mobileWidthRatio = $(`${self.mobileId}`).css('display') === 'block' ? self.mobileWidthRatio : 1;
            const boxWidth = parseInt($(`${selector}`).width() * mobileWidthRatio, 10);
            $(`${selector}`).css('height', boxWidth);
            self.heightOnChangeCb(boxWidth);
            resolve(boxWidth);
            return;
          }

          if (currentSlide.hasClass('videoItem') && !targetImgSrc) {
            const videoBoxHeight = parseInt(currentSlide.children().innerHeight(), 10);
            $(`${selector}`).css('height', videoBoxHeight);
            self.heightOnChangeCb(videoBoxHeight);
            window.SL_EventBus.emit('product:expose-product-video', currentSlide);
            resolve(videoBoxHeight);
          } else if (currentSlide.hasClass('imageItem') || targetImgSrc) {
            const currentSlideImgNaturalSize = currentSlide.attr('data-natural-size');

            if (currentSlideImgNaturalSize && !targetImgSrc) {
              const [imgNaturalWidth, imgNaturalHeight] = currentSlideImgNaturalSize.split('x');
              const wrapperHeight = parseInt(String($(`${selector}`)[0].offsetWidth * ratio * imgNaturalHeight / imgNaturalWidth), 10);
              $(`${selector}`).css('height', wrapperHeight);
              self.heightOnChangeCb(wrapperHeight);
              resolve(wrapperHeight);
              return;
            }

            const currentSlideImg = currentSlide.find('img');
            const imgSrc = targetImgSrc || currentSlideImg.attr('src') || currentSlideImg.attr('data-src');

            if (!targetImgSrc && $(`${self.id}`).css('display') !== 'none') {
              const slideHeight = parseInt(currentSlide.innerHeight(), 10);
              $(`${selector}`).css('height', slideHeight);
              self.heightOnChangeCb(slideHeight);
              resolve(slideHeight);
              return;
            }

            imgOnload(imgSrc, img => {
              if (count !== this.heightChangedCount) {
                resolve();
                return;
              }

              if (!img) {
                reject(new Error('不是img对象'));
                return;
              }

              const height = parseInt(String($(`${selector}`)[0].offsetWidth * ratio * img.height / img.width), 10);
              $(`${selector}`).css('height', height);
              self.heightOnChangeCb(height);
              resolve(height);
            }, () => {
              if (count !== this.heightChangedCount) {
                resolve();
                return;
              }

              const mobileWidthRatio = $(`${self.mobileId}`).css('display') === 'block' ? self.mobileWidthRatio : 1;
              const boxWidth = parseInt($(`${selector}`).width() * mobileWidthRatio, 10);
              $(`${selector}`).css('height', boxWidth);

              if (targetImgSrc && selector.indexOf(ProductImages.pcSelectorPrefix) !== -1) {
                $(`${this.id} .product_pc_skuImage`).addClass('imageItemError');
              } else if (targetImgSrc && selector.indexOf(ProductImages.mobileSelectorPrefix) !== -1) {
                const currentSlideDom = self.getMobileCurrentSlideDom();
                currentSlideDom.find('.product_m_skuImageBox').addClass('imageItemError');
              } else {
                currentSlide.addClass('imageItemError');
              }

              self.heightOnChangeCb(boxWidth);
              resolve(boxWidth);
            });
          } else {
            reject(new Error(`当前滑动slide子节点内容异常,currentSlide:${currentSlide},activeIndex:${activeIndex}`));
          }
        } else {
          reject(new Error(`activeIndex异常：${activeIndex}`));
        }
      });
      return promise;
    }

    setColumnThumbsSwiperHeight(height) {
      $(`${this.id} .product_thumbsColumnContainer .productImageThumbs`).css({
        maxHeight: `${height}px`
      });
    }

    handleThumbsArrow(activeIndex, slideLen, wrapperHeight) {
      const selectorPrefix = this.id;
      const {
        thumbsDirection: direction,
        showThumbsArrow
      } = this;

      if (!showThumbsArrow) {
        this.setColumnThumbsSwiperHeight(wrapperHeight);
        return;
      }

      $(`${selectorPrefix} .thumbsArrowTop,${selectorPrefix} .thumbsArrowBottom`).show();

      if (activeIndex === 0) {
        $(`${selectorPrefix} .thumbsArrowTop`).hide();

        if (direction === COLUMN) {
          this.setColumnThumbsSwiperHeight(`${wrapperHeight - 25}`);
        }
      }

      if (activeIndex + 1 === slideLen) {
        $(`${selectorPrefix} .thumbsArrowBottom`).hide();

        if (direction === COLUMN) {
          this.setColumnThumbsSwiperHeight(`${wrapperHeight - 25}`);
        }
      } else {
        if (direction === COLUMN) {
          this.setColumnThumbsSwiperHeight(`${wrapperHeight - 50}`);
        }
      }
    }

    async handleEffectSwiperHeight(targetImageUrl) {
      const {
        swiper
      } = this;
      const {
        slides,
        activeIndex
      } = swiper || {};
      const height = await this.handleProductImagesHeight(`${this.id} .product_productImages`, activeIndex, 1, targetImageUrl);

      if (height) {
        this.handleThumbsArrow(activeIndex, slides.length, height);
      }
    }

    togglePcSkuImage(isShow, skuImageUrl) {
      const skuImageDom = $(`${this.id} .product_pc_skuImage`);
      const currentIndex = $(`${this.id}`).attr('data-index') || 0;

      if (skuImageDom.hasClass('imageItemError')) {
        skuImageDom.removeClass('imageItemError');
      }

      if (isShow && skuImageUrl) {
        const width = get(imgSize(skuImageUrl), 'width');
        const height = get(imgSize(skuImageUrl), 'height');
        skuImageDom.show().html(`<img class="product_photoSwipe_image" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} data-photoswipe-src=${imgUrl(skuImageUrl, {
          width: 1800
        })} src=${skuImageUrl} />${this.showMagnifier ? `<img data-height="${height}" data-width="${width}" class="imageItem--hover" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} data-photoswipe-src=${imgUrl(skuImageUrl, {
          width: 1800
        })} src=${skuImageUrl} />` : ''}`);
        $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).removeClass('active');
        this.productShowSkuCover = true;
      } else if (!isShow) {
        skuImageDom.hide().empty();
        $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).eq(currentIndex).addClass('active');
        this.productShowSkuCover = false;
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
      if (type === 'scrollTop') {
        setTimeout(() => {
          const productImageThumbs = $(`${this.id} .product_thumbsColumnContainer .productImageThumbs`);

          if (smooth) {
            productImageThumbs.addClass('smooth-animate');
          } else {
            productImageThumbs.removeClass('smooth-animate');
          }

          productImageThumbs.scrollTop(distance);
        }, timeout);
      } else if (type === 'scrollLeft') {
        setTimeout(() => {
          const productImageThumbs = $(`${this.id} .product_thumbsRowContainer .productImageThumbs`);

          if (smooth) {
            productImageThumbs.addClass('smooth-animate');
          } else {
            productImageThumbs.removeClass('smooth-animate');
          }

          productImageThumbs.scrollLeft(distance);
        }, timeout);
      }
    }

    getThumbsPosition(type, index) {
      const columnThumbsListDom = $(`${this.id} .product_thumbsColumnContainer .thumbsImageItem`);
      const rowThumbsListDom = $(`${this.id} .product_thumbsRowContainer .thumbsImageItem`);

      if (type === 'top') {
        if (!columnThumbsListDom.length) {
          return 0;
        }

        const prevThumbsItem = columnThumbsListDom.eq(index > 0 ? index - 1 : 0);
        const prevThumbsItemHalfHeight = parseInt(prevThumbsItem.innerHeight() / 2, 10);
        return columnThumbsListDom.eq(index).position().top - prevThumbsItemHalfHeight - 20;
      }

      if (type === 'left') {
        if (!rowThumbsListDom.length) {
          return 0;
        }

        const prevThumbsItem = rowThumbsListDom.eq(index > 0 ? index - 1 : 0);
        const prevThumbsItemHalfWidth = parseInt(prevThumbsItem.innerWidth() / 2, 10);
        return rowThumbsListDom.eq(index).position().left - prevThumbsItemHalfWidth - 20;
      }
    }

    initHandleProductImagesArrow() {
      if (!this.showThumbsArrow) return;
      const {
        thumbsDirection: direction
      } = this;
      $(`${this.id} .arrowTop`).on('click', () => {
        const {
          activeIndex
        } = this.swiper;
        this.swiper.slidePrev();

        if (direction === COLUMN) {
          const scrollTopDistance = this.getThumbsPosition('top', activeIndex - 1);
          this.handleThumbsScroll('scrollTop', scrollTopDistance);
        } else if (direction === ROW) {
          const scrollLeftDistance = this.getThumbsPosition('left', activeIndex - 1);
          this.handleThumbsScroll('scrollLeft', scrollLeftDistance);
        }
      });
      $(`${this.id} .arrowBottom`).on('click', () => {
        const {
          activeIndex
        } = this.swiper;
        this.swiper.slideNext();

        if (direction === COLUMN) {
          const scrollTopDistance = this.getThumbsPosition('top', activeIndex + 1);
          this.handleThumbsScroll('scrollTop', scrollTopDistance);
        } else if (direction === ROW) {
          const scrollLeftDistance = this.getThumbsPosition('left', activeIndex + 1);
          this.handleThumbsScroll('scrollLeft', scrollLeftDistance);
        }
      });
    }

    handlePcThumbsActive(index) {
      $(`${this.id} .productImageThumbsWrapper .thumbsImageItem`).removeClass('active').eq(index).addClass('active');
      $(`${this.id}`).attr('data-index', index);
    }

    async initThumbsSwiper(firstInit) {
      const {
        thumbsDirection
      } = this;
      const self = this;
      const bindClickDom = $(`${this.id} .product_thumbs${thumbsDirection === COLUMN ? 'Column' : 'Row'}Container `);
      bindClickDom.on('click', '.thumbsImageItem', function () {
        const index = $(this).index();
        self.swiper.slideTo(index);

        if ($(`${self.id} .product_pc_skuImage`).css('display') === 'block') {
          self.handlePcSkuImage(false);
          $(this).addClass('active');
        }
      });
      const skuImageDom = $(`${this.id} .product_pc_skuImage`).find('img');
      const skuImage = skuImageDom.attr('data-src') || skuImageDom.attr('src');

      if (!skuImage) {
        this.handlePcThumbsActive(self.swiper.activeIndex);
      }

      await this.handleEffectSwiperHeight(skuImage ? skuImage : null);

      if (skuImage && firstInit) {
        const firstActiveImg = $(`${this.id}`).find('.swiper-slide-active img');

        if (firstActiveImg.length > 0) {
          const src = firstActiveImg.attr('src') || firstActiveImg.attr('data-src');

          const _img = imgSize(src);

          const ratio = _img && _img.ratio || '100%';
          firstActiveImg.parent().css('paddingBottom', ratio);
        }

        const emptyDom = $(`${this.id}`).find('.product-detail-empty-image');

        if (emptyDom.length > 0) {
          emptyDom.css('paddingBottom', '100%');
        }
      }

      if (firstInit) {
        $(`${this.id}`).find('.swiper-slide').removeClass('firstInit');
      }

      $(`${this.id} .product_thumbsColumnContainer`).height('auto');
      $(`${this.id} .product_thumbsRowContainer`).height('auto');
      this.initHandleProductImagesArrow();
    }

    initPcProductImages(firstInit) {
      const pcProductImagesDom = $(`${this.id}`);
      if (pcProductImagesDom.find('.product_productImages').length == 0 || pcProductImagesDom.css('display') === 'none') return null;
      const mainSwiper = new Swiper(`${this.id} .product_productImages`, {
        initialSlide: $(`${this.id}`).data('initial-slide') || 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: `${this.id} .swiper-button-next_pc_${this.selectorId}`,
          prevEl: `${this.id} .swiper-button-prev_pc_${this.selectorId}`,
          enabled: this.mediaList && this.mediaList.length > 1 && this.productShowSwiperArrow
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

              if (this.productImageScale && !this.showMagnifier) {
                this.initPhotoSwipe(this.id, 'pc');
                this.initPcSkuPhotoSwiper();
              }
            }

            if (this.mediaList && this.mediaList.length > 1 && this.productShowSwiperArrow) {
              $(`${this.id} .swiper-button-next_pc_${this.selectorId}`).show();
              $(`${this.id} .swiper-button-prev_pc_${this.selectorId}`).show();
            } else {
              $(`${this.id} .swiper-button-next_pc_${this.selectorId}`).hide();
              $(`${this.id} .swiper-button-prev_pc_${this.selectorId}`).hide();
            }
          },
          slideChange: () => {
            this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'pause');
            if (this.swiper.destroyed) return;
            const {
              activeIndex,
              previousIndex
            } = this.swiper;
            this.handlePcThumbsActive(activeIndex);
            this.handlePcSkuImage(false);

            if (this.thumbsDirection === COLUMN) {
              const scrollTopDistance = this.getThumbsPosition('top', activeIndex);
              this.handleThumbsScroll('scrollTop', scrollTopDistance, Math.abs(activeIndex - previousIndex) < 10);
            } else {
              const scrollLeftDistance = this.getThumbsPosition('left', activeIndex);
              this.handleThumbsScroll('scrollLeft', scrollLeftDistance, Math.abs(activeIndex - previousIndex) < 10);
            }

            this.handleVideoAutoPlay();
          },
          lazyImageLoad: (_swiper, _slideEl, imageEl) => {
            GifLozyloadPlugin.load(imageEl);
          }
        }
      });
      return mainSwiper;
    }

    getActivePaginationList(activeIndex, activePointer) {
      const list = [];

      for (let i = 0; i < 5; i++) {
        const offset = i - activePointer;
        list.push(activeIndex + offset);
      }

      return list;
    }

    handleMActivePagination(activeIndex) {
      const previousIndex = this.mobileRealPreviewIndex || 0;
      this.mobileRealPreviewIndex = activeIndex;
      const listContainer = $(`${this.mobileId} .paginationList`);
      const scrollWrapper = listContainer.children('.paginationListWrapper');
      const bullets = scrollWrapper.children('span');
      const length = bullets.length;

      if (bullets.length < 6) {
        scrollWrapper.addClass('noTransition');
        scrollWrapper.css('transform', '');
        bullets.removeClass('active');
        bullets.eq(activeIndex).addClass('active');
        return;
      }

      if (!this.mobilePaginationList) {
        this.mobilePaginationList = [0, 1, 2, 3, 4];
      }

      let resultMobilePaginationList = this.mobilePaginationList;
      const previousPointer = this.mobilePaginationList.indexOf(previousIndex);
      const offsetIndex = previousIndex - activeIndex;

      if (offsetIndex < 0) {
        let activePointer = Math.min(3, previousPointer - offsetIndex);

        if (activeIndex === length - 1) {
          activePointer = 4;
        }

        resultMobilePaginationList = this.getActivePaginationList(activeIndex, activePointer);
      } else {
        let activePointer = Math.max(1, previousPointer - offsetIndex);

        if (activeIndex === 0) {
          activePointer = 0;
        }

        resultMobilePaginationList = this.getActivePaginationList(activeIndex, activePointer);
      }

      if (Math.abs(offsetIndex) > 1) {
        scrollWrapper.addClass('noTransition');
      } else {
        scrollWrapper.removeClass('noTransition');
      }

      if (this.mobilePaginationList[0] - 1 > -1) {
        bullets.eq(this.mobilePaginationList[0] - 1).removeClass(['active', 'next']);
      }

      if (this.mobilePaginationList[this.mobilePaginationList.length - 1] + 1 < length) {
        bullets.eq(this.mobilePaginationList[this.mobilePaginationList.length - 1] + 1).removeClass(['active', 'next']);
      }

      this.mobilePaginationList.forEach((index, i) => {
        bullets.eq(index).removeClass(['active', 'next']);
      });
      bullets.eq(activeIndex).addClass('active');

      if (resultMobilePaginationList[0] - 1 > 0) {
        bullets.eq(resultMobilePaginationList[0] - 1).addClass('next');
        bullets.eq(resultMobilePaginationList[0]).addClass('next');
      } else if (resultMobilePaginationList[0] > 0) {
        bullets.eq(resultMobilePaginationList[0]).addClass('next');
      }

      if (resultMobilePaginationList[resultMobilePaginationList.length - 1] + 1 < length - 1) {
        bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1] + 1).addClass('next');
        bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1]).addClass('next');
      } else if (resultMobilePaginationList[resultMobilePaginationList.length - 1] < length - 1) {
        bullets.eq(resultMobilePaginationList[resultMobilePaginationList.length - 1]).addClass('next');
      }

      if (resultMobilePaginationList[0] !== this.mobilePaginationList[0]) {
        scrollWrapper.css('transform', `translate3d(-${resultMobilePaginationList[0] / length * 100}%, 0, 0)`);
      }

      this.mobilePaginationList = resultMobilePaginationList;
    }

    handleMobileSkuImage(isShow, skuImageUrl) {
      const selector = `${this.mobileId} .product_productImages`;
      const mainSwiperDom = $(selector);
      if (!this.mobileSwiper) return;

      if (mainSwiperDom.length === 0) {
        console.error('m端切换sku图片失败，请检查selectorId是否输错，应存在html上');
        return;
      }

      const {
        realIndex
      } = this.mobileSwiper;

      if (isShow) {
        this.toggleMSkuImage(realIndex, true, skuImageUrl);
      } else {
        this.toggleMSkuImage(realIndex, false);
      }
    }

    getSwiperIsLoop() {
      return $(`${this.mobileId} .product_productImages .swiper-slide-duplicate`).length > 0;
    }

    bindMobileSkuImageScaleDom() {
      const self = this;
      $('.product_m_skuImageBox .scaleSkuImageIcon').on('click', function () {
        const items = [{
          src: $(this).parent().find('.product_photoSwipe_image').attr('data-photoswipe-src'),
          w: 0,
          h: 0,
          el: $(this).parent()[0]
        }];
        self.handlePhotoSwiper(items, 0, false);
      });
    }

    getMobileCurrentSlideDom(index) {
      const {
        realIndex
      } = this.mobileSwiper || {};

      const _index = index || realIndex;

      const swiperIsLoop = this.getSwiperIsLoop();
      const currentSlideDom = swiperIsLoop ? $(`${this.mobileId} .product_productImages .swiper-slide[data-swiper-slide-index="${_index}"]`) : $(`${this.mobileId} .product_productImages .swiper-slide`).eq(_index);
      return currentSlideDom;
    }

    setCurrentSlidePB($dom, imageUrl) {
      const ratio = imgSize(imageUrl).ratio || '100%';
      $dom.css('paddingBottom', ratio).attr('data-sku-image-ratio', ratio);
    }

    toggleMSkuImage(index, isShow, skuImageUrl) {
      const self = this;

      if (index === undefined || index === null) {
        console.error(`toggleMSkuImage: index异常${index}`);
        return;
      }

      const currentSlideDom = self.getMobileCurrentSlideDom(index);
      const currentSkuImageBox = currentSlideDom.find('.product_m_skuImageBox');
      const currentSlideBox = currentSlideDom.find('.swiper-slide-box');
      const currentSkuImageIsError = currentSkuImageBox.hasClass('imageItemError');

      if (currentSkuImageIsError) {
        currentSkuImageBox.removeClass('imageItemError');
      }

      const skuImageDom = `
    <div class="product_m_skuImageBox">
      <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" class="product_m_skuImage product_photoSwipe_image" data-photoswipe-src=${imgUrl(skuImageUrl, {
        width: 1800
      })} src=${skuImageUrl} />
      ${self.productImageScale ? `<div class="scaleSkuImageIcon">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="12" r="7.5" stroke="black"/>
      <path d="M18.5 17.5L23 22.5" stroke="black" stroke-linecap="round"/>
      </svg>
      </div>` : ''}
    </div>`;

      if (isShow && index !== undefined && skuImageUrl) {
        currentSlideDom.find('img').hide();

        if (currentSkuImageBox.length === 0) {
          currentSlideDom.append(skuImageDom);
          self.setCurrentSlidePB(currentSlideBox, skuImageUrl);
          self.bindMobileSkuImageScaleDom();
        } else {
          currentSkuImageBox.find('.product_m_skuImage').removeAttr('srcset data-srcset').attr({
            src: skuImageUrl,
            'data-photoswipe-src': imgUrl(skuImageUrl, {
              width: 1800
            }),
            onerror: "this.onerror=null;this.parentElement.className+=' imageItemError';"
          }).show();
          self.setCurrentSlidePB(currentSlideBox, skuImageUrl);
        }

        this.mobileSwiper.updateAutoHeight();
        $(`${this.mobileId} .product_productImages`).attr('sku-image-index', index);
        this.productShowSkuCover = true;
      } else if (!isShow && index !== undefined && currentSkuImageBox.length > 0) {
        const slideImg = currentSlideDom.find('img');

        if (currentSlideBox.attr('data-image-ratio')) {
          currentSlideBox.css('paddingBottom', currentSlideBox.attr('data-image-ratio')).removeAttr('data-sku-image-ratio');
        }

        currentSkuImageBox.remove();
        slideImg.show();
        this.mobileSwiper.updateAutoHeight();
        $(`${this.mobileId} .product_productImages`).attr('sku-image-index', null);
        this.productShowSkuCover = false;
      }
    }

    handleMobileScaleImage() {
      $(`${this.mobileId} .paginationList div`).removeClass('active').eq(activeIndex).addClass('active');
    }

    initMobileProductImages(firstInit) {
      const mobileProductImagesDom = $(`${this.mobileId}`);
      const selector = `${this.mobileId} .product_productImages`;
      const mainSwiperDom = $(selector);
      const slidesLength = mainSwiperDom.find('.swiper-slide').length;
      const videoDom = mainSwiperDom.find('.videoItem');
      const videoIndex = videoDom.data('index');
      const videoIsStartOrEndPos = videoIndex === 0 || videoIndex === videoDom.data('length') - 1 || slidesLength === 1;
      if (mainSwiperDom.length === 0 || mobileProductImagesDom.css('display') === 'none') return null;
      const mainSwiper = new Swiper(selector, {
        loop: videoIsStartOrEndPos ? false : true,
        initialSlide: $(`${this.mobileId}`).data('initial-slide') || 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 5,
        autoHeight: true,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: this.mobileWidthRatio === 0.75 ? true : false
        },
        on: {
          init: swiper => {
            if (firstInit) {
              if (this.productImageScale) {
                this.initPhotoSwipe(this.mobileId, 'mobile');
                this.initMobileSkuPhotoSwiper();
              }

              this.handleMActivePagination(swiper.realIndex);
              $(`${this.mobileId} .product_productImages`).attr('sku-image-index', swiper.realIndex);

              if (videoIsStartOrEndPos) {
                const skuImageDom = $(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find('.product_m_skuImage');
                const skuImage = skuImageDom.attr('src') || skuImageDom.attr('data-src');
              }

              $(`${this.mobileId} .product_productImages .swiper-slide`).css('height', 'auto');
              swiper.updateAutoHeight();
              window.lozadObserver && window.lozadObserver.observe();
            }
          },
          slideChange: swiper => {
            this.handleUnifyVideoStatus(this.mobileVideo, 'mobile', 'pause');
            this.handleMActivePagination(swiper.realIndex);
            const skuImageDom = $(`${this.mobileId} .product_productImages .swiper-slide`).eq(swiper.realIndex).find('.product_m_skuImage');
            const skuImage = skuImageDom.attr('src') || skuImageDom.attr('data-src');
          },
          slideChangeTransitionEnd: () => {
            const skuImageIndex = $(`${this.mobileId} .product_productImages`).attr('sku-image-index');

            if (skuImageIndex !== undefined) {
              this.toggleMSkuImage(skuImageIndex, false);
            }

            this.handleVideoAutoPlay();
          }
        },
        ...this.swiperConfig.mobile
      });
      return mainSwiper;
    }

    renderVideoItem(item, index) {
      const {
        middle: cover,
        videoId
      } = getYouTubeCover(item.resource);
      const isYoutubeVideo = isYoutube(item.resource);
      const photoswipeCoverSrc = isYoutubeVideo ? cover : imgUrl(item.cover, {
        width: 1800
      });
      return `${isYoutubeVideo ? `<div class="product_youTubeVideoContainer">
        <div class="product_youTubeVideoBox" data-video-id="${videoId}"></div>
      </div>` : `<video class="product_slVideoContainer" disablepictureinpicture controls webkit-playsinline playsinline controlslist="nodownload nofullscreen" poster="${item.cover}">
        <source src="${item.resource}" type="video/mp4">
      </video>`}
    <img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' videoCoverError';" 
    class="product_photoSwipe_image swiper-lazy"
    data-photoswipe-src="${photoswipeCoverSrc}" ${index !== 0 ? 'data-' : ''}src="${photoswipeCoverSrc}" alt="">`;
    }

    updateSlides(list) {
      $(`${this.id} .product_productImages`).children('.swiper-wrapper').empty().append(Array.isArray(list) ? list.map((item, index) => {
        const imgRatio = imgSize(item.resource).ratio || '100%';
        const width = get(imgSize(item.resource), 'width');
        const height = get(imgSize(item.resource), 'height');
        const isYoutubeVideo = isYoutube(item.resource);

        if (item.type === 'VIDEO') {
          return `<div class="swiper-slide videoItem" data-video-platform="${isYoutubeVideo ? 'youtube' : 'sl'}" style="padding-bottom: ${isYoutubeVideo ? '56.25%' : imgSize(item.cover).ratio || '56.25%'}">${this.renderVideoItem(item, index)};</div>`;
        }

        return `<div class="swiper-slide imageItem imageItem--${this.showMagnifier ? 'hover' : 'pointer'}" style="height: 0; padding-bottom:${imgRatio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${index !== 0 ? 'data-' : ''}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image">${this.showMagnifier ? `<img data-width="${width}" data-height="${height}" ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" src="${item.resource}" alt="" class="swiper-lazy imageItem--hover">` : ''}</div>`;
      }) : `<div class="swiper-slide"><div class="product-detail-empty-image"></div></div>`);
      const slidesLength = list.length;
      const mobileWrapper = $(`${this.mobileId} .product_productImages`).children('.swiper-wrapper');

      if (get(list, 'length') === 1 || get(list, '[0].type') === 'VIDEO' || get(list, `[${get(list, 'length') - 1}].type`) === 'VIDEO') {
        mobileWrapper.addClass('hasVideoFl');
      } else {
        mobileWrapper.removeClass('hasVideoFl');
      }

      mobileWrapper.empty().append(Array.isArray(list) ? list.map((item, index) => {
        if (item.type === 'VIDEO') {
          const isYoutubeVideo = isYoutube(item.resource);
          const ratio = isYoutubeVideo ? '56.25%' : imgSize(item.cover).ratio || '56.25%';
          return `<div class="swiper-slide videoItem" data-video-platform="${isYoutubeVideo ? 'youtube' : 'sl'}" style="height: auto" data-index="${index}" data-length="${slidesLength}">
                <div class="swiper-slide-box" data-image-ratio="${ratio}" style="padding-bottom: ${ratio}">
                  ${this.renderVideoItem(item, index)}
                </div>
              </div>`;
        }

        const ratio = imgSize(item.resource).ratio || '100%';
        return `<div class="swiper-slide imageItem" data-index="${index}" style="height: auto">
<div class="swiper-slide-box" data-image-ratio="${ratio}" data-sku-image-ratio="100%" style="padding-bottom: ${ratio}">
<img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''}  onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" data-photoswipe-src="${item.resource}" ${index !== 0 ? 'data-' : ''}src="${item.resource}" alt="" class="swiper-lazy product_photoSwipe_image">${this.productImageScale ? `<div class="scaleImageIcon"><div class="scaleImageIconSvg"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="12" r="7.5" /><path d="M18.5 17.5L23 22.5" stroke-linecap="round" /></svg></div></div>` : ''}</div>
</div>`;
      }) : `<div class="swiper-slide"><div class="swiper-slide-box" data-image-ratio="100%" style="padding-bottom: 100%"><div class="product-detail-empty-image product-noImages"></div></div></div>`);
    }

    updateImageList(list, activeIndex, source) {
      if (!this.verifySource(source && source.app)) {
        return;
      }

      this.mediaList = list;
      this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'pause');
      this.handleUnifyVideoStatus(this.mobileVideo, 'mobile', 'pause');
      this.replaceThubsSwiper(list, activeIndex);
      this.swiper && this.swiper.destroy();
      this.mobileSwiper && this.mobileSwiper.destroy();
      this.updateSlides(list);

      if (this.swiper) {
        $(`${this.id}`).data('initial-slide', activeIndex);
        this.swiper = this.initPcProductImages();
        this.updatePhotoSwipeItems(this.id);
        this.handleEffectSwiperHeight();

        if (this.thumbsDirection === COLUMN) {
          const scrollTopDistance = this.getThumbsPosition('top', activeIndex);
          this.handleThumbsScroll('scrollTop', scrollTopDistance, false, 0);
        } else {
          const scrollLeftDistance = this.getThumbsPosition('left', activeIndex);
          this.handleThumbsScroll('scrollLeft', scrollLeftDistance, false, 0);
        }
      }

      if (this.mobileSwiper) {
        $(`${this.mobileId}`).data('initial-slide', activeIndex);
        this.mobileSwiper = this.initMobileProductImages();
        this.updatePhotoSwipeItems(this.mobileId);
      }

      this.pcVideo = this.initPcVideo();
      this.mobileVideo = this.initMobileVideo();
      $(`${this.id}`).attr('data-index', activeIndex || 0);

      if (this.showMagnifier && this.productImageScale) {
        this.handleImageHover();
      }
    }

    replaceThubsSwiper(list, activeIndex) {
      const wrapper = $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? 'Column' : 'Row'}Container .productImageThumbsWrapper`);
      const mBox = $(`${this.mobileId} .paginationBox`);
      const mWrapper = mBox.find('.paginationListWrapper');
      wrapper.empty();
      mWrapper.empty();

      if (!get(list, 'length') || list.length <= 1) {
        $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? 'Column' : 'Row'}Container`).hide();
        mBox.hide();
      } else {
        $(`${this.id} .product_thumbs${this.thumbsDirection === COLUMN ? 'Column' : 'Row'}Container`).show();
        mBox.show();
        list.forEach((item, index) => {
          const ratio = imgSize(item.resource).ratio || '100%';

          if (item.type === 'VIDEO') {
            const isYoutubeVideo = isYoutube(item.resource);
            wrapper.append(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? 'active' : ''}"><figure style="padding-bottom: ${ratio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' videoCoverError';" src="${isYoutubeVideo ? getYouTubeCover(item.resource).middle : item.cover}" alt=""><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="black" fill-opacity="0.6"/>
          <path d="M13.6256 10.2496L8.46641 13.6891C8.26704 13.822 8 13.6791 8 13.4394V6.56056C8 6.32095 8.26704 6.17803 8.46641 6.31094L13.6256 9.75039C13.8037 9.86913 13.8037 10.1309 13.6256 10.2496Z" fill="white"/>
          </svg></figure>
          </div>`);
          } else {
            wrapper.append($(`<div class="swiper-slide thumbsImageItem ${activeIndex === index ? 'active' : ''}"><figure style="padding-bottom: ${ratio}"><img ${window.__PRELOAD_STATE__.imgNoReferrerSwitch ? 'referrerpolicy="same-origin"' : ''} onerror="this.onerror=null;this.parentElement.className+=' imageItemError';" src="${imgUrl(item.resource, {
              width: 152
            })}" alt=""></figure></div>`));
          }

          mWrapper.append(`<span class="${activeIndex === index ? 'active' : ''}" />`);
        });
      }
    }

    skuImageChange(img, source) {
      if (!this.verifySource(source && source.app)) {
        return;
      }

      const {
        url
      } = img || {};

      if (url) {
        this.handleUnifyVideoStatus(this.pcVideo, 'pc', 'pause');
        this.handleUnifyVideoStatus(this.mobileVideo, 'mobile', 'pause');
        const index = this.mediaList.findIndex(item => item.resource === url);

        if (index > -1) {
          this.swiper && this.swiper.slideTo(index);
          this.mobileSwiper && this.mobileSwiper.slideToLoop(index, 0);
          this.handlePcSkuImage(false);
          this.handleMobileSkuImage(false);
        } else {
          this.handlePcSkuImage(true, url);
          this.handleMobileSkuImage(true, url);
        }
      } else {
        this.handlePcSkuImage(false);
        this.handleMobileSkuImage(false);
        this.handleVideoAutoPlay();
      }

      if (this.showMagnifier && this.productImageScale) {
        this.handleImageHover();
      }
    }

    handleVideoAutoPlay(video) {
      if (this.productShowSkuCover) return;

      if (Array.isArray(this.mediaList)) {
        if (this.mobileSwiper) {
          const media = this.mediaList[this.mobileSwiper.realIndex] || {};

          if (media.type === 'VIDEO') {
            if (this.productVideoAutoplay) {
              this.handleUnifyVideoStatus(video || this.mobileVideo, 'mobile', 'play');
            }
          }
        } else if (this.swiper) {
          const media = this.mediaList[this.swiper.realIndex] || {};

          if (media.type === 'VIDEO') {
            if (this.productVideoAutoplay) {
              this.handleUnifyVideoStatus(video || this.pcVideo, 'pc', 'play');
            }
          }
        }
      }
    }

    findMainMediaList() {
      const skuImageList = {};

      if (Array.isArray(this.skuList)) {
        this.skuList.forEach(item => {
          if (Array.isArray(item.imageList)) {
            item.imageList.forEach(img => {
              skuImageList[img] = true;
            });
          }
        });
      }

      const mainImageList = [];

      if (Array.isArray(this._allMediaList)) {
        this._allMediaList.forEach(item => {
          if (item && !skuImageList[item.resource]) {
            mainImageList.push(item);
          }
        });
      }

      return mainImageList;
    }

    handleImageHover() {
      const imageItems = $(this.id).find('.imageItem');
      const skuImage = $(this.id).find('.product_pc_skuImage');
      const skuImageFlatten = $(this.id).find('.product_pc_skuImage_flatten');

      function handleMouseMove(item) {
        const hoverDom = item.find('.imageItem--hover');
        const orgImg = item.find('img:not(.imageItem--hover)');
        const zoom = 1.5;
        const dheight = hoverDom.data('height');
        const dwidth = hoverDom.data('width');
        hoverDom.css('opacity', 0);
        item.on('mousemove', function (e) {
          const rect = item[0].getBoundingClientRect();
          const height = Math.max(dheight, rect.height) * zoom;
          const width = Math.max(dwidth, rect.width) * zoom;
          hoverDom.css('width', width);
          hoverDom.css('height', height);
          const mx = e.clientX - rect.x;
          const my = e.clientY - rect.y;
          hoverDom.css('opacity', 1);
          orgImg.css('opacity', 0);
          hoverDom.css('left', -width * (mx / rect.width) + mx);
          hoverDom.css('top', -height * (my / rect.height) + my);
        });
        item.on('mouseleave', function () {
          hoverDom.css('opacity', 0);
          orgImg.css('opacity', 1);
        });
      }

      if (skuImageFlatten.hasClass('product_pc_skuImage_flatten--hover')) {
        handleMouseMove(skuImageFlatten);
      }

      if (skuImage.hasClass('product_pc_skuImage--hover')) {
        handleMouseMove(skuImage);
      }

      imageItems.each(function (_, item) {
        item = $(item);

        if (item.hasClass('imageItem--hover')) {
          handleMouseMove(item);
        }
      });
    }

  }

  ProductImages.pcSelectorPrefix = 'execute_productImages_pc';
  ProductImages.mobileSelectorPrefix = 'execute_productImages_mobile';
  _exports.default = ProductImages;
  return _exports;
}();