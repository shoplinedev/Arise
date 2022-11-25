window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/schedular/utils.js'] = window.SLM['theme-shared/utils/schedular/utils.js'] || function () {
  const _exports = {};
  const isSafari = !!(typeof window.safari === 'object' && window.safari.pushNotification);
  _exports.isSafari = isSafari;

  class Deadline {
    constructor() {
      this.initTime = Date.now();
    }

    get timeRemaining() {
      return Math.max(0, 50 - (Date.now() - this.initTime));
    }

  }

  _exports.Deadline = Deadline;

  const shouldYield = (deadline, minTaskTime) => {
    if (deadline && deadline.timeRemaining <= minTaskTime) {
      return true;
    }

    return false;
  };

  _exports.shouldYield = shouldYield;
  return _exports;
}();