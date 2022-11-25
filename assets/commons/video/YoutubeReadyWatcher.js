window.SLM = window.SLM || {};

window.SLM['commons/video/YoutubeReadyWatcher.js'] = window.SLM['commons/video/YoutubeReadyWatcher.js'] || function () {
  const _exports = {};

  class YoutubeReadyWatcher {
    constructor() {
      this.ready = false;

      const _ = this;

      const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = function () {
        window.SL_EventBus.emit('stage:youTubeReady');
        _.ready = true;

        if (typeof prevOnYouTubeIframeAPIReady === 'function') {
          prevOnYouTubeIframeAPIReady();
        }
      };
    }

    $ready() {
      this.ready = true;
    }

    static getInstance() {
      if (!YoutubeReadyWatcher.instance) {
        YoutubeReadyWatcher.instance = new YoutubeReadyWatcher();
      }

      return YoutubeReadyWatcher.instance;
    }

  }

  _exports.default = YoutubeReadyWatcher;
  return _exports;
}();