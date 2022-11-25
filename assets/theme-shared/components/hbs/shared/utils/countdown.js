window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/shared/utils/countdown.js'] = window.SLM['theme-shared/components/hbs/shared/utils/countdown.js'] || function () {
  const _exports = {};
  const timers = {};
  _exports.timers = timers;
  const t = timers;
  _exports.t = t;

  const fillZero = num => {
    return `${num}`.padStart(2, '0');
  };

  const countdown = (target, fn, params) => {
    let p = {};
    let prevTimes = null;

    if (typeof params === 'string') {
      p.id = params;
    } else if (typeof params === 'object') {
      p = params;
    }

    let {
      id
    } = p;
    const {
      hasDay,
      hasMillisecond,
      autoFill = 'part'
    } = p;

    if (t[id]) {
      clearInterval(t[id]);
    }

    const countFn = (times = ['0', '0', '0', '0', '0'], interval) => {
      const tempTimes = times;

      if (autoFill === 'part' || autoFill === 'all') {
        if (autoFill === 'all') {
          tempTimes[0] = fillZero(times[0]);
        }

        tempTimes[1] = fillZero(times[1]);
        tempTimes[2] = fillZero(times[2]);
        tempTimes[3] = fillZero(times[3]);
      }

      return fn(tempTimes, interval, t[id]);
    };

    const intervalFn = () => {
      const now = Date.now();

      if (now < target) {
        const interval = target - now;
        let d = 0;
        let h = 0;
        let ms = 0;

        if (hasDay) {
          d = Math.floor(interval / 86400000);
          h = Math.floor(interval % 86400000 / 3600000);
        } else {
          h = Math.floor(interval / 3600000);
        }

        const m = Math.floor(interval % 3600000 / 60000);
        const s = Math.floor(interval % 60000 / 1000);

        if (hasMillisecond) {
          ms = Math.floor(interval % 1000 / 100);
        }

        const times = [`${d}`, `${h}`, `${m}`, `${s}`, `${ms}`];
        let changed = false;

        if (!prevTimes || times.some((item, index) => item !== prevTimes[index])) {
          changed = true;
        }

        prevTimes = times;

        if (changed) {
          const result = countFn(times, interval);

          if (result === false) {
            clearInterval(t[id]);
          }
        }
      } else {
        countFn(undefined, 0);
        clearInterval(t[id]);
      }
    };

    intervalFn();
    const timer = setInterval(intervalFn, p.interval === null || p.interval === undefined ? 200 : p.interval);

    if (!id) {
      id = timer;
    }

    t[id] = timer;
    return t[id];
  };

  _exports.default = countdown;
  return _exports;
}();