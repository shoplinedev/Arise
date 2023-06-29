window.SLM = window.SLM || {};

window.SLM['stage/video/utils/YouTube.js'] = window.SLM['stage/video/utils/YouTube.js'] || function () {
  const _exports = {};
  const Player = window['SLM']['stage/video/utils/Player.js'].default;
  const LibraryLoader = window['SLM']['commons/video/LibraryLoader.js'].default;
  const playerState = window['SLM']['commons/video/state.js'].default;
  const YoutubeReadyWatcher = window['SLM']['commons/video/YoutubeReadyWatcher.js'].default;
  const ytReadyWatcher = YoutubeReadyWatcher.getInstance();
  const videoOptions = {
    ratio: 16 / 9,
    scrollAnimationDuration: 400,
    playerVars: {
      autohide: 0,
      autoplay: undefined,
      cc_load_policy: 0,
      controls: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      loop: false,
      playsinline: true
    },
    events: {
      onReady: event => {},
      onStateChange: event => {},
      onError: event => {}
    }
  };

  class YouTube extends Player {
    constructor(containerId, options = {}) {
      super();
      this.player = null;
      this.loopTimer = null;
      this.readyPromise = null;
      this.containerId = containerId;
      this.options = { ...videoOptions,
        ...options
      };
      this.options.playerVars.loop = options.loop;
      this.rewriteEvent();

      if (window.YT && window.YT.Player) {
        ytReadyWatcher.$ready();
      }

      if (ytReadyWatcher.ready) {
        this.init();
      } else {
        LibraryLoader.load('youtubeSdk');
        window.SL_EventBus.on('stage:youTubeReady', this.init.bind(this));
      }
    }

    init() {
      new window.YT.Player(this.containerId, this.options);
    }

    playVideo() {
      if (this.readyPromise) {
        this.readyPromise.then(() => {
          this.player && this.player.playVideo();
        });
      }
    }

    mute() {
      this.player && this.player.mute();
    }

    unMute() {
      this.player && this.player.unMute();
    }

    destroy() {
      this.player && this.player.destroy();
      this.readyPromise = null;
    }

    rewriteEvent() {
      const self = this;
      const {
        onReady,
        onStateChange
      } = this.options.events;
      this.readyPromise = new Promise(r => {
        this.options.events.onReady = event => {
          r();
          this.player = event.target;
          if (onReady) onReady(event);
        };
      });

      this.options.events.onStateChange = event => {
        let status = '';

        switch (event.data) {
          case 1:
            status = playerState.playing;
            break;

          case 2:
            status = playerState.paused;
            break;

          case 3:
            status = playerState.buffering;
            break;

          case -1:
            status = playerState.ended;
            break;

          default:
            status = playerState.ended;
        }

        if (status === playerState.playing && this.options.playerVars.loop) {
          clearTimeout(this.loopTimer);
          const finalSecond = event.target.getDuration() - 1;

          if (finalSecond > 2) {
            function loopTheVideo() {
              if (event.target.getCurrentTime() > finalSecond) {
                event.target.seekTo(0);
              }

              self.loopTimer = setTimeout(loopTheVideo, 500);
            }

            loopTheVideo();
          }
        }

        if (status === playerState.paused && this.loopTimer) {
          clearTimeout(this.loopTimer);
        }

        if (onStateChange) onStateChange(event);
      };
    }

  }

  _exports.default = YouTube;
  return _exports;
}();