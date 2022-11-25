window.SLM = window.SLM || {};

window.SLM['theme-shared/report/hiido/index.js'] = window.SLM['theme-shared/report/hiido/index.js'] || function () {
  const _exports = {};
  const { get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];

  function guid() {
    function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  }

  function Hiido({
    page,
    module
  }, eventMap = {}) {
    this.__default = {
      page,
      module
    };
    this.__eventMap = eventMap;
    this.__observe = {};
    this.__eObserve = {};
    this.exposure('.hiido_exposure[data-event_id]');
    this.exposure('.hiido_exposure_effective[data-event_id]', null, {
      effective: true
    });
  }

  Hiido.prototype.observerStop = function observerStop(force) {
    if (!(get(Object.keys(this.__observe), 'length') || get(Object.keys(this.__eObserve), 'length')) || force) {
      this.__observe = {};
      this.__eObserve = {};
      get_func(this, '__observer.disconnect').exec();
      delete this.__observer;
      this.__validityTimer && clearInterval(this.__validityTimer);
    }
  };

  Hiido.prototype.validity = function validity() {
    Object.entries(this.__observe).forEach(([uuid, {
      ele
    }]) => {
      if (ele.isConnected === false || !ele.__HIIDO_UUID__ || ele.__HIIDO_UUID__ !== uuid) {
        delete this.__observe[uuid];

        if (!this.__eObserve[uuid]) {
          this.__observer.unobserve(ele);
        }
      }
    });
    Object.entries(this.__eObserve).forEach(([uuid, {
      ele
    }]) => {
      if (ele.isConnected === false || !ele.__HIIDO_UUID__ || ele.__HIIDO_UUID__ !== uuid) {
        delete this.__eObserve[uuid];

        if (!this.__observe[uuid]) {
          this.__observer.unobserve(ele);
        }
      }
    });
    this.observerStop();
  };

  Hiido.prototype.observerStart = function observerStart() {
    if (IntersectionObserver && !this.__observer) {
      this.__observer = new IntersectionObserver(changes => {
        changes.forEach(change => {
          const uuid = change.target.__HIIDO_UUID__;

          if (uuid && this.__observe[uuid] && change.intersectionRatio > 0) {
            const {
              ele,
              options,
              once
            } = this.__observe[uuid];
            this.collect(options);

            if (once) {
              delete this.__observe[uuid];

              if (!this.__eObserve[uuid]) {
                this.__observer.unobserve(ele);
              }

              this.observerStop();
            }
          }

          if (uuid && this.__eObserve[uuid] && change.intersectionRatio > 0.5) {
            if (get(this.__eObserve[uuid], 'timer')) {
              clearTimeout(this.__eObserve[uuid].timer);
              delete this.__eObserve[uuid].timer;
            }

            this.__eObserve[uuid].timer = setTimeout(() => {
              const {
                ele,
                options,
                once
              } = this.__eObserve[uuid];
              this.collect(options);

              if (once) {
                delete this.__eObserve[uuid];

                if (!this.__observe[uuid]) {
                  this.__observer.unobserve(ele);
                }

                this.observerStop();
              }
            }, 500);
          }
        });
      }, {
        threshold: [0, 0.5]
      });
      this.__validityTimer && clearInterval(this.__validityTimer);
      this.__validityTimer = setInterval(() => {
        this.validity();
      }, 20000);
      return this;
    }
  };

  Hiido.prototype.collect = function collect(eventId, options) {
    let obj = options;

    if (typeof eventId === 'object') {
      obj = eventId;

      if (get(obj, 'event_name') && get(this.__eventMap, get(obj, 'event_name'))) {
        obj.event_id = get(this.__eventMap, get(obj, 'event_name'));
      }
    } else if (typeof obj === 'object') {
      if (get(this.__eventMap, eventId)) {
        obj.event_id = get(this.__eventMap, eventId);
        obj.event_name = eventId;
      } else {
        obj.event_id = eventId;
      }
    }

    if (obj.event_id) {
      get_func(window.HdSdk, 'shopTracker.collect').exec({
        module: -999,
        component: -999,
        action_type: 102,
        ...this.__default,
        ...obj
      });
    }
  };

  Hiido.prototype.exposure = function exposure(ele, options, {
    once = true,
    effective = false
  } = {}) {
    setTimeout(() => {
      if (!IntersectionObserver || !ele) return;
      let eles = [];

      if (ele instanceof Array) {
        eles = ele.filter(e => e instanceof HTMLElement);
      } else if (typeof ele === 'string') {
        eles = [...document.querySelectorAll(ele)];
      } else if (ele instanceof HTMLElement) {
        eles = [ele];
      }

      eles.forEach(ele => {
        if (get(ele, 'isConnected') === false) return;
        let uuid;

        if (!(Object.values(this.__observe).find(item => item.ele === ele) || Object.values(this.__eObserve).find(item => item.ele === ele))) {
          uuid = guid();
          ele.__HIIDO_UUID__ = uuid;
          this.observerStart();
        } else if (ele.__HIIDO_UUID__) {
          uuid = ele.__HIIDO_UUID__;
        } else {
          uuid = guid();
          ele.__HIIDO_UUID__ = uuid;
        }

        get_func(this.__observer, 'unobserve').exec(ele);
        get_func(this.__observer, 'observe').exec(ele);

        if (effective) {
          this.__eObserve[uuid] = {
            ele,
            options: {
              action_type: 108,
              ...ele.dataset,
              ...options
            },
            once
          };
        } else {
          this.__observe[uuid] = {
            ele,
            options: {
              action_type: 101,
              ...ele.dataset,
              ...options
            },
            once
          };
        }
      });
    }, 300);
  };

  _exports.default = Hiido;
  return _exports;
}();