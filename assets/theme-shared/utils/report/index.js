window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/index.js'] = window.SLM['theme-shared/utils/report/index.js'] || function () {
  const _exports = {};
  const HiidoReport = window['SLM']['theme-shared/utils/report/@hiido.js'].default;
  const { composedPath } = window['SLM']['theme-shared/utils/report/utils.js'];
  const { EXCLUDE_ADS_PAGE_VIEW_ALIAS } = window['SLM']['theme-shared/utils/report/const.js'];
  const CLICK_CLASSNAME = '__sl-track_click';
  const EXPOSE_CLASSNAME = '__sl-track_expose';
  const COLLECT_CLICK_CLASSNAME = '__sl-collect_click';
  const COLLECT_EXPOSE_CLASSNAME = '__sl-collect_expose';

  if (!window.SL_Report || !window.SL_Report.loaded) {
    window.SL_Report = window.SL_Report || {};
    initReportEvent();
  }

  if (!window.SL_Report.HdObserverSet) {
    window.SL_Report.HdObserverSet = new WeakSet();
  }

  if (!window.SL_Report.HdObserver) {
    window.SL_Report.HdObserver = new IntersectionObserver(entries => {
      entries.forEach(entrie => {
        if (entrie.isIntersecting) {
          const repeat = entrie.target ? entrie.target.dataset['track_repeat'] || entrie.target.dataset['collect_repeat'] : undefined;

          if (entrie.target.classList && (entrie.target.classList.contains(EXPOSE_CLASSNAME) || entrie.target.classList.contains(COLLECT_EXPOSE_CLASSNAME)) && (repeat === 'true' || repeat !== 'true' && !window.SL_Report.HdObserverSet.has(entrie.target))) {
            let collectObj = {};
            sendCollect(entrie.target, collectObj, () => {
              if (repeat !== 'true') {
                window.SL_Report.HdObserverSet.add(entrie.target);
              }
            });
          } else {
            if (!window.SL_Report.HdObserverSet.has(entrie.target)) {
              window.SL_EventBus.emit('global:hdReport:expose', entrie.target);
              window.SL_Report.HdObserverSet.add(entrie.target);
            }
          }
        }
      });
    }, {
      threshold: 0
    });
  }

  function initReportEvent() {
    window.SL_Report.loaded = true;
    window.SL_EventBus.on('global:thirdPartReport', data => {
      try {
        Object.keys(data).forEach(dataKey => {
          let eventKey = dataKey;

          if (dataKey === 'GAR') {
            eventKey = 'GARemarketing';
          }

          if (dataKey === 'GA4') {
            eventKey = 'GA';
          }

          if (window.__PRELOAD_STATE__.eventTrace && window.__PRELOAD_STATE__.eventTrace.enabled[eventKey]) {
            let configs = window.__PRELOAD_STATE__.eventTrace.enabled[eventKey];

            if (eventKey === 'GA') {
              const newConfigs = configs.reduce((list, config) => {
                const hasConfig = list.some(c => {
                  if (!c.version) return false;
                  if (c.version === config.version) return true;
                });
                return !hasConfig ? [...list, config] : list;
              }, []);
              configs = newConfigs;
            }

            let payloads = data[dataKey];

            switch (dataKey) {
              case 'GA':
              case 'GAAds':
              case 'GARemarketing':
              case 'GAR':
              case 'GA4':
                configs.forEach(config => {
                  if (dataKey === 'GA' && config.enableEnhancedEcom && data.GAE) {
                    payloads = data[dataKey].concat(data.GAE);
                  }

                  payloads.forEach(([track, event, data = {}, scope, ...rest]) => {
                    data = data || {};
                    const {
                      useLegacyCode,
                      traceType,
                      version
                    } = config;
                    if (parseInt(traceType, 10) === 0) return;
                    if (useLegacyCode === undefined && dataKey === 'GAR') return;
                    if (parseInt(useLegacyCode, 10) === 0 && dataKey === 'GARemarketing') return;
                    if (parseInt(useLegacyCode, 10) === 1 && dataKey === 'GAR') return;
                    if ((config.scope || scope) && scope !== config.scope) return;

                    if (!version) {
                      if (dataKey === 'GA4') return;
                    } else {
                      if (dataKey === 'GA' && version === 'GA4') return;
                      if (dataKey === 'GA4' && version === 'UA') return;
                    }

                    const isDataObj = Object.prototype.toString.call(data) === '[object Object]';

                    if (['GARemarketing', 'GAR'].indexOf(dataKey) !== -1 && isDataObj) {
                      data.send_to = `${config.id}`;
                    }

                    if ('GA' === dataKey) {
                      if (version) {
                        data.send_to = 'UA';
                      } else {
                        data.send_to = `${config.id}`;
                      }
                    }

                    if ('GA4' === dataKey) {
                      data.send_to = 'GA4';
                    }

                    if (dataKey === 'GAAds' && isDataObj) {
                      data.send_to = `${config.id}/${config.tag}`;
                    }

                    window.gtag(track, event, data, ...rest);
                  });
                });
                break;

              case 'FBPixel':
                payloads.forEach(payload => {
                  const [action, eventName, customData = {}, extData = {}, ...rest] = payload;
                  window.fbq(action, eventName, customData, extData, ...rest);
                });
                break;

              default:
                break;
            }
          }
        });

        if (data.FBPixel && data.FBPixel[0]) {
          HiidoReport.report(data.FBPixel[0][1], data.FBPixel[0][2], data.FBPixel[0][3], data.FBPixel[0][4]);
        }
      } catch (err) {
        console.error('global:thirdPartReport err:', err);
      }
    });
    let beforeunloadCallback;
    let getDestPathCallback;
    let sendLock = false;
    window.SL_EventBus.on('global:hdReport:exit', data => {
      if (beforeunloadCallback) {
        sendLock = false;
        window.removeEventListener('beforeunload', beforeunloadCallback);
        document.removeEventListener('click', getDestPathCallback);
      }

      function report(data, page_dest) {
        if (sendLock) return;
        sendLock = true;

        if (Array.isArray(data)) {
          const [eventId, params] = data;
          window.HdSdk && window.HdSdk.shopTracker.report(eventId, {
            page_dest,
            event_name: '999',
            ...params
          });
        }

        if (Object.prototype.toString.call(data) === '[object Object]') {
          window.HdSdk && window.HdSdk.shopTracker.collect({
            action_type: '999',
            page_dest_url: page_dest,
            ...data
          });
        }
      }

      beforeunloadCallback = () => {
        report(data, '');
      };

      getDestPathCallback = event => {
        const path = composedPath(event);

        for (let i = path.length; i--;) {
          const element = path[i];

          if (element && element.nodeType === 1 && element.nodeName.toLowerCase() === 'a') {
            if (/^https?:\/\//.test(element.href)) {
              report(data, element.href);
              break;
            }
          }
        }
      };

      window.addEventListener('beforeunload', beforeunloadCallback);
      document.addEventListener('click', getDestPathCallback);
    });
    window.SL_EventBus.on('global:hdReport:pageview', (...data) => {
      const [eventIdOrData, ...rest] = data;

      if (typeof eventIdOrData == 'string') {
        window.HdSdk && window.HdSdk.shopTracker.report(eventIdOrData, ...rest);
      }

      if (Object.prototype.toString.call(eventIdOrData) === '[object Object]') {
        window.HdSdk && window.HdSdk.shopTracker.collect(eventIdOrData);
      }
    });
    const excludeAds = EXCLUDE_ADS_PAGE_VIEW_ALIAS.includes(window.Shopline && window.Shopline.uri && window.Shopline.uri.alias);
    window.SL_EventBus.emit('global:thirdPartReport', {
      FBPixel: [['track', 'PageView', {}, {
        eventID: window.__PRELOAD_STATE__ ? window.__PRELOAD_STATE__.serverEventId : undefined
      }]],
      GAAds: excludeAds ? [] : [['event', 'conversion', null]],
      GA: [['event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search
      }]],
      GA4: [['event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search
      }]]
    });
    startObserver();
    clickCollect();
  }

  function sendCollect(el, collectObj, callback) {
    while (el) {
      const {
        dataset
      } = el;
      collectReportProps(dataset, collectObj);
      el = el.parentNode;
    }

    if (!Object.keys(collectObj).length) return;
    const {
      track,
      collect
    } = collectObj;

    if (track && Object.keys(track).length) {
      const {
        eventid,
        ...params
      } = track;

      if (eventid) {
        window.HdSdk && window.HdSdk.shopTracker.report(eventid, params);
      }
    }

    if (collect && Object.keys(collect).length) {
      window.HdSdk && window.HdSdk.shopTracker.collect(collect);
    }

    callback && callback();
  }

  function collectReportProps(dataset, collectObj = {}) {
    if (!dataset) return;
    Object.keys(dataset).forEach(sKey => {
      ['track', 'collect'].forEach(collectKey => {
        const value = dataset[sKey];

        if (sKey.indexOf(collectKey) === 0) {
          collectObj[collectKey] = collectObj[collectKey] || {};
          let key = sKey.replace(collectKey, '');
          if (key.startsWith('_')) return;
          key = key.replace(/[A-Z]/g, (letter, index) => {
            return `${index === 0 ? '' : '_'}${letter.toLowerCase()}`;
          });

          if (!collectObj[collectKey].hasOwnProperty(key)) {
            collectObj[collectKey][key] = value;
          }
        }
      });
    });
  }

  function collectObserver(options) {
    [].forEach.call(document.querySelectorAll(options.selector), el => {
      window.SL_Report && window.SL_Report.HdObserver && window.SL_Report.HdObserver.observe(el);
    });
  }

  _exports.collectObserver = collectObserver;

  function startObserver(options) {
    options = Object.assign({
      selector: `.${EXPOSE_CLASSNAME}, .${COLLECT_EXPOSE_CLASSNAME}`
    }, options);

    if (options.reset) {
      window.SL_Report.HdObserverSet = new WeakSet();
    }

    window.SL_Report && window.SL_Report.HdObserver && window.SL_Report.HdObserver.disconnect();

    if (document.readyState === 'complete') {
      collectObserver(options);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        collectObserver(options);
      });
    }
  }

  _exports.startObserver = startObserver;

  function clickCollect() {
    if (!window.SL_Report || !window.SL_Report.__clickCollectCallback) {
      window.SL_Report = window.SL_Report || {};

      window.SL_Report.__clickCollectCallback = ev => {
        if (ev.target.classList && (ev.target.classList.contains(CLICK_CLASSNAME) || ev.target.classList.contains(COLLECT_CLICK_CLASSNAME))) {
          let collectObj = {};
          sendCollect(ev.target, collectObj);
          window.SL_EventBus.emit('global:hdReport:click', ev.target);
        }
      };
    }

    const options = {
      capture: true
    };
    document.removeEventListener('click', window.SL_Report.__clickCollectCallback, options);
    document.addEventListener('click', window.SL_Report.__clickCollectCallback, options);
  }

  _exports.clickCollect = clickCollect;
  return _exports;
}();