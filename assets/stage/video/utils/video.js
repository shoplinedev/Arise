window.SLM = window.SLM || {};

window.SLM['stage/video/utils/video.js'] = window.SLM['stage/video/utils/video.js'] || function () {
  const _exports = {};
  const YouTube = window['SLM']['stage/video/utils/YouTube.js'].default;
  const VimeoPlayer = window['SLM']['stage/video/utils/VimeoPlayer.js'].default;
  const SlVideoPlayer = window['SLM']['commons/video/VideoJs.js'].default;
  const initWhenVisible = window['SLM']['commons/utils/init-when-visible.js'].default;

  window.vimeoApiReady = function () {
    window.SL_EventBus.emit('stage:vimeoReady');
  };

  const selectors = {
    playVideoBtn: '.video-overlay__button',
    videoData: '.video-data'
  };
  const classes = {
    playing: 'video--playing'
  };

  class Video {
    constructor(container, options = {}) {
      this.settings = {};
      this.config = {
        id: ''
      };
      this.container = container;
      this.options = options;
      this.sectionId = container.data('id');

      try {
        this.settings = JSON.parse(container.find(`#Video-data-${this.sectionId}`).text());
      } catch (err) {}

      this.initEvent();
      initWhenVisible({
        element: container,
        callback: this.init.bind(this),
        threshold: 500
      });
    }

    init() {
      const {
        container: video
      } = this;
      const {
        settings
      } = this;
      this.config = {
        id: video.attr('id'),
        videoKey: `Video-${video.data('id')}`,
        videoId: video.data('id')
      };
      const dataDiv = this.container.find(selectors.videoData);
      const type = dataDiv.data('type');
      const videoId = dataDiv.data('video-id');
      const videoUrl = dataDiv.data('url');
      const aspectRatios = dataDiv.data('aspect-ratio') && dataDiv.data('aspect-ratio').split(':') || [16, 9];
      const events = {
        onReady: this.onVideoPlayerReady.bind(this)
      };

      switch (type) {
        case 'youtube':
          this.initYoutubeVideo(dataDiv.attr('id'), {
            videoId,
            ratio: aspectRatios[0] / aspectRatios[1],
            autoplay: settings.autoplay ? 1 : 0,
            muted: !!settings.quiet,
            loop: settings.loop,
            events
          });
          break;

        case 'vimeo':
          this.initVimeoVideo(dataDiv.attr('id'), {
            videoId,
            ratio: aspectRatios[0] / aspectRatios[1],
            autoplay: !!settings.autoplay,
            muted: !!settings.quiet,
            loop: settings.loop,
            events
          });
          break;

        case 'slvideo':
          this.initSlVideo(dataDiv[0], {
            src: videoUrl,
            ratio: aspectRatios[0] / aspectRatios[1],
            autoplay: !!settings.autoplay,
            muted: !!settings.quiet,
            loop: !!settings.loop,
            events
          });
          break;

        default:
      }
    }

    initYoutubeVideo(videoId, options) {
      this.player = new YouTube(videoId, options);
    }

    initVimeoVideo(videoId, options) {
      this.player = new VimeoPlayer(`#${videoId}`, options);
    }

    initSlVideo(videoEl, options) {
      this.player = new SlVideoPlayer(videoEl, options);
    }

    initEvent() {
      this.container.find(selectors.playVideoBtn).on('click', () => {
        this.startVideoOnClick();
        this.options && this.options.clickCallback && this.options.clickCallback();
      });
    }

    onVideoPlayerReady() {
      if (this.settings.autoplay) {
        this.player.playVideo();

        if (this.settings.quiet) {
          this.player.mute();
        } else {
          this.player.unMute();
          this.player.playVideo();
        }
      }
    }

    initAutoplay() {}

    startVideoOnClick() {
      this.container.addClass(classes.playing);
      const {
        player
      } = this;
      player.playVideo();
    }

    onUnload() {
      this.player && this.player.destroy();
    }

  }

  _exports.default = Video;
  Video.type = 'video';
  return _exports;
}();