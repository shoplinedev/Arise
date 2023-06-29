window.SLM = window.SLM || {};

window.SLM['stage/video/utils/VimeoPlayer.js'] = window.SLM['stage/video/utils/VimeoPlayer.js'] || function () {
  const _exports = {};
  const Player = window['SLM']['stage/video/utils/Player.js'].default;
  const LibraryLoader = window['SLM']['stage/video/utils/LibraryLoader.js'].default;
  let vimeoReady = false;
  const defaults = {
    byline: false,
    controls: true,
    loop: false,
    muted: true,
    portrait: false,
    responsive: true,
    transparent: false,
    title: 'vedio',
    autoplay: false,
    playsinline: true
  };

  class VimeoPlayer extends Player {
    constructor(containerId, options) {
      super();
      this.el = $(containerId).get(0);
      this.options = { ...defaults,
        ...options,
        id: options.videoId
      };

      if (vimeoReady) {
        this.init();
      } else {
        LibraryLoader.load('vimeo', window.vimeoApiReady);
        window.SL_EventBus.on('stage:vimeoReady', this.init.bind(this));
      }
    }

    init() {
      vimeoReady = true;
      this.player = new window.Vimeo.Player(this.el, this.options);
      this.player.ready().then(this.playerReady.bind(this));
    }

    playVideo() {
      this.player.play();
    }

    mute() {
      this.player.setMuted(true);
    }

    unMute() {
      this.player.setMuted(false);
    }

    destroy() {
      this.player.destroy();
    }

    playerReady() {
      this.options.events.onReady();
    }

  }

  _exports.default = VimeoPlayer;
  return _exports;
}();