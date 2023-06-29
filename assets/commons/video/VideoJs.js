window.SLM = window.SLM || {};

window.SLM['commons/video/VideoJs.js'] = window.SLM['commons/video/VideoJs.js'] || function () {
  const _exports = {};
  const playerState = window['SLM']['commons/video/state.js'].default;
  const AutoplayChecker = window['SLM']['commons/video/AutoplayChecker.js'].default;
  const autoplayChecker = AutoplayChecker.getInstance();

  function isHTMLElement(obj) {
    if (obj.nodeType) {
      return obj.nodeType === 1;
    }
  }

  const defaultVars = {
    controls: 1,
    muted: false,
    controlsList: 'nodownload',
    autoplay: false,
    preload: 'auto',
    loop: false,
    autoplayAsPossible: false,
    'webkit-playsinline': true,
    playsinline: true
  };
  const defaultEvents = {
    onReady() {},

    onStateChange(e) {},

    onPlaybackRateChange() {},

    onError() {},

    onTimeupdate() {},

    onVolumechange() {},

    onProgress() {}

  };

  class VideoJs {
    constructor(containerId, {
      events = {},
      ...otherOpts
    }) {
      let $el = null;
      const $video = document.createElement('video');
      $video.style.width = '100%';
      $video.style.height = '100%';
      $video.style.objectFit = 'cover';

      if (typeof containerId === 'object' && isHTMLElement(containerId)) {
        $el = containerId;
      } else {
        $el = document.querySelector(containerId);
      }

      this._$video = $video;
      const mergeVars = { ...defaultVars,
        ...otherOpts
      };
      const mergeEvents = { ...defaultEvents,
        ...events
      };
      this.options = { ...mergeVars,
        ...mergeEvents
      };
      this.eventBus = {};

      const sourceFragment = this._renderSource(mergeVars.src);

      $video.appendChild(sourceFragment);
      delete mergeVars.src;

      for (const key in mergeVars) {
        if (key !== 'autoplay') {
          $video[key] = mergeVars[key];
          $video.setAttribute(key, mergeVars[key]);
          $video[key] = mergeVars[key];
        }
      }

      this.addPresetListener();
      $el.appendChild($video);
    }

    usePresetConfig(el, config) {
      el.autoplay = config.autoplay;
    }

    addPresetListener() {
      this._$video.addEventListener('loadstart', this.readyHandler.bind(this));

      this._$video.addEventListener('canplay', () => {});

      this._$video.addEventListener('play', this.playHandler.bind(this));

      this._$video.addEventListener('waiting', this.waitingHandler.bind(this));

      this._$video.addEventListener('pause', this.pauseHandler.bind(this));

      this._$video.addEventListener('ended', this.endedHandler.bind(this));

      this._$video.addEventListener('error', this.errorHandler.bind(this));

      this._$video.addEventListener('ratechange', this.onPlaybackRateChange.bind(this));

      this._$video.addEventListener('volumechange', this.onVolumechange.bind(this));

      this._$video.addEventListener('timeupdate', this.onProgress.bind(this));
    }

    removePresetlistener() {
      this._$video.removeEventListener('loadstart', this.readyHandler.bind(this));

      this._$video.removeEventListener('play', this.playHandler.bind(this));

      this._$video.removeEventListener('waiting', this.waitingHandler.bind(this));

      this._$video.removeEventListener('pause', this.pauseHandler.bind(this));

      this._$video.removeEventListener('ended', this.endedHandler.bind(this));

      this._$video.removeEventListener('error', this.errorHandler.bind(this));

      this._$video.removeEventListener('ratechange', this.onPlaybackRateChange.bind(this));

      this._$video.removeEventListener('volumechange', this.onVolumechange.bind(this));

      this._$video.removeEventListener('timeupdate', this.onProgress.bind(this));
    }

    readyHandler(e) {
      this.loadDataHandler(e);
    }

    autoplayAsPossible() {
      const {
        autoplay,
        muted
      } = autoplayChecker.supportState;

      if (this.options.muted) {
        this.mute();
      } else {
        this.unMute();
      }

      if (autoplay && muted) {
        this.mute();
      }

      this.playVideo();
    }

    loadDataHandler(e) {
      this.options.onReady(e);
      this.options.onStateChange({
        data: playerState.unstarted,
        target: e.target
      });

      if (this.options.autoplay) {
        if (this.options.autoplayAsPossible) {
          if (autoplayChecker && autoplayChecker.completed) {
            this.autoplayAsPossible();
          } else {
            window.Shopline.event.on('stage:checkAutoplayComplete', this.autoplayAsPossible.bind(this));
          }
        } else {
          this.playVideo();
        }
      }
    }

    playHandler(e) {
      this.options.onStateChange({
        data: playerState.playing,
        target: e.target
      });
    }

    pauseHandler(e) {
      this.options.onStateChange({
        data: playerState.paused,
        target: e.target
      });
    }

    endedHandler(e) {
      this.options.onStateChange({
        data: playerState.ended,
        target: e.target
      });
    }

    waitingHandler(e) {
      this.options.onStateChange({
        data: playerState.buffering,
        target: e.target
      });
    }

    errorHandler(e) {
      this.options.onError({
        data: e.target.error.code,
        target: e.target
      });
    }

    onPlaybackQualityChange() {
      this.options.onPlaybackQualityChange();
    }

    onPlaybackRateChange(e) {
      this.options.onPlaybackRateChange({
        data: e.target.playbackRate,
        target: e.target
      });
    }

    onVolumechange(e) {
      this.options.onVolumechange({
        target: e.target,
        data: e.target.volume
      });
    }

    onProgress(e) {
      this.options.onProgress({
        data: e.target.currentTime,
        target: e.target
      });
    }

    on(eventType, listener) {
      if (this.eventBus[eventType]) {
        this.eventBus[eventType] = [];
      }

      this.eventBus[eventType].push(listener);
    }

    _emit(eventType, ...args) {
      if (this.eventBus[eventType] && this.eventBus[eventType].length) {
        this.eventBus[eventType].forEach(listener => listener(...args));
      }
    }

    _renderSource(sources) {
      let arr = [];

      if (Array.isArray(sources)) {
        arr = sources.map(src => {
          const fileType = this._findFileType(src);

          return {
            fileType,
            src
          };
        });
      } else if (typeof sources === 'string') {
        arr.push({
          fileType: this._findFileType(sources),
          src: sources
        });
      }

      const fragment = document.createDocumentFragment();
      arr.forEach(item => {
        const $source = document.createElement('source');
        $source.setAttribute('type', `video/${item.fileType}`);
        $source.setAttribute('src', item.src);
        $source.innerHTML = `浏览器暂不支持播放${item.fileType}格式`;
        fragment.append($source);
      });
      return fragment;
    }

    _findFileType(src) {
      if (src.indexOf('.mp4') > -1) {
        return 'mp4';
      }

      if (src.indexOf('.webm') > -1) {
        return 'webm';
      }

      if (src.indexOf('.ogg') > -1) {
        return 'ogg';
      }
    }

    playVideo() {
      if (this._$video.paused) {
        this._$video.play();
      }
    }

    pauseVideo() {
      if (!this._$video.paused) {
        this._$video.pause();
      }
    }

    seekTo(seconds) {
      this._$video.currentTime(seconds);
    }

    mute() {
      this._$video.muted = true;
    }

    unMute() {
      this._$video.muted = false;
    }

    destroy() {
      this.removePresetlistener();
      if (this.$el && this._$video) this.$el.removeChild(this._$video);
    }

    getCurrentTime() {
      return this._$video.currentTime;
    }

    getDuration() {
      return this._$video.duration;
    }

  }

  _exports.default = VideoJs;
  return _exports;
}();