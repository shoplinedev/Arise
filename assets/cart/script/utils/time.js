window.SLM = window.SLM || {};

window.SLM['cart/script/utils/time.js'] = window.SLM['cart/script/utils/time.js'] || function () {
  const _exports = {};
  const Millisecond = 1;
  _exports.Millisecond = Millisecond;
  const Second = Millisecond * 1000;
  _exports.Second = Second;
  const Minute = Second * 60;
  _exports.Minute = Minute;
  const Hour = Minute * 60;
  _exports.Hour = Hour;
  const Day = Hour * 24;
  _exports.Day = Day;
  const Week = Day * 7;
  _exports.Week = Week;

  class Time {
    constructor(v) {
      this.v = v;
    }

    get timestamp() {
      return this.v;
    }

    add(d) {
      return new Time(this.v + d);
    }

    sub(d) {
      return new Time(this.v - d);
    }

    duration(t) {
      return this.v - t.timestamp;
    }

  }

  function time(v) {
    return new Time(v);
  }

  function now() {
    return time(Date.now());
  }

  function later(dur) {
    return now().add(dur);
  }

  function former(dur) {
    return now().sub(dur);
  }

  _exports.default = {
    time,
    now,
    later,
    former,
    Millisecond,
    Second,
    Minute,
    Hour,
    Day,
    Week
  };
  return _exports;
}();