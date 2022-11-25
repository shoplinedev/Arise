window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/helper.js'] = window.SLM['theme-shared/components/hbs/shared/utils/helper.js'] || function () {
  const _exports = {};
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const mainUtils = window['SLM']['theme-shared/components/hbs/shared/utils/main.js'].default;
  const platformType = {
    pc: 'pc',
    pad: 'pad',
    mobile: 'mobile'
  };

  const getPlatform = () => {
    const winWidth = Math.min(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
    let platform;

    if (winWidth > 960) {
      platform = 'pc';
    } else if (winWidth > 750) {
      platform = 'pad';
    } else {
      platform = 'mobile';
    }

    return platform;
  };

  function listenPlatform(callback) {
    SL_EventBus.on('global:platformChange', callback);
  }

  let timer;
  let timerCount = 0;

  function init() {
    if (window.addEventListener) {
      if (timer) {
        clearTimeout(timer);
      }

      window.addEventListener('load', () => {
        let platform = getPlatform();
        window.addEventListener('resize', () => {
          const newPlatform = getPlatform();

          if (newPlatform !== platform) {
            SL_EventBus.emit('global:platformChange', newPlatform);
            platform = newPlatform;
          }
        });
      });
    } else {
      if (timerCount === 10) {
        return;
      }

      timer = setTimeout(init, 1000);
      timerCount += 1;
    }
  }

  function isInViewport(el) {
    if (!el || !el.tagName) return console.warn(`${el} is not a element`);
    const rect = el.getBoundingClientRect();
    const vWidth = document.documentElement.clientWidth;
    const vHeight = document.documentElement.clientHeight;

    if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
      return false;
    }

    return true;
  }

  function isUnderViewport(el) {
    if (!el || !el.tagName) return console.warn(`${el} is not a element`);
    const rect = el.getBoundingClientRect();
    const vWidth = document.documentElement.clientWidth;
    const vHeight = document.documentElement.clientHeight;

    if (rect.right < 0 || rect.left > vWidth || rect.top > vHeight) {
      return false;
    }

    return true;
  }

  init();

  function getAbOrderSeqInfoCache(buyScence = 'cart') {
    const seqInfo = mainUtils.localStorage.get(`${buyScence}AbOrderSeqInfo`);
    return seqInfo;
  }

  function setAbOrderSeqInfoCache(abandonedOrderSeqInfo, buyScence) {
    if (!buyScence) {
      console.warn('setAbOrderSeqInfoCache err miss buyScence');
      return;
    }

    mainUtils.localStorage.set(`${buyScence}AbOrderSeqInfo`, abandonedOrderSeqInfo);
  }

  _exports.default = {
    getPlatform,
    listenPlatform,
    platformType,
    getAbOrderSeqInfoCache,
    setAbOrderSeqInfoCache,
    isInViewport,
    isUnderViewport
  };
  return _exports;
}();