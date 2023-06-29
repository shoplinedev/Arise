window.SLM = window.SLM || {};

window.SLM['commons/video/AutoplayChecker.js'] = window.SLM['commons/video/AutoplayChecker.js'] || function () {
  const _exports = {};
  const MUTE_DELAY_PORTION = 25;

  function isAutoplaySupported(callback, timeout) {
    let called = false;

    if (!callback) {
      return;
    }

    if (!isPlaysinline()) {
      return callback({
        autoplay: false,
        muted: false
      });
    }

    checkAutoplay(false, function () {
      testHandler(false);
    });
    setTimeout(function () {
      checkAutoplay(true, function () {
        testHandler(true);
      });
    }, timeout / MUTE_DELAY_PORTION);

    function testHandler(mute) {
      if (!called) {
        called = true;
        callback({
          autoplay: true,
          muted: mute
        });
      }
    }

    setTimeout(function () {
      if (!called) {
        called = true;
        callback({
          autoplay: false,
          muted: false
        });
      }
    }, timeout);
  }

  async function checkAutoplay(mute, callback) {
    const video = document.createElement('video');

    video.ontimeupdate = function () {
      if (video.currentTime !== 0) {
        return callback();
      }
    };

    video.autoplay = true;
    video.muted = mute;
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    video.setAttribute('playsinline', 'playsinline');
    video.src = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    video.style.display = 'none';
    video.load();

    try {
      await video.play();
    } catch (err) {}

    return video;
  }

  function isPlaysinline() {
    return navigator.userAgent.match(/(iPhone|iPod)/g) ? 'playsInline' in document.createElement('video') : true;
  }

  class CheckVideoCanAutoPlay {
    constructor() {
      this.instance = null;
      this.supportState = {};
      this.completed = false;
      isAutoplaySupported(result => {
        this.supportState = result;
        this.completed = true;
        window.SL_EventBus.emit('stage:checkAutoplayComplete', this.supportState);
      }, 400);
    }

    static getInstance() {
      if (!CheckVideoCanAutoPlay.instance) {
        CheckVideoCanAutoPlay.instance = new CheckVideoCanAutoPlay();
      }

      return CheckVideoCanAutoPlay.instance;
    }

  }

  _exports.default = CheckVideoCanAutoPlay;
  return _exports;
}();