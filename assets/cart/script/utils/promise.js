window.SLM = window.SLM || {};

window.SLM['cart/script/utils/promise.js'] = window.SLM['cart/script/utils/promise.js'] || function () {
  const _exports = {};

  async function resolveAfterDuration(dur) {
    if (dur <= 0) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, dur);
    });
  }

  _exports.resolveAfterDuration = resolveAfterDuration;

  async function resolveAfterSeconds(s) {
    if (s <= 0) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, s * 1000);
    });
  }

  _exports.resolveAfterSeconds = resolveAfterSeconds;

  async function resolveAfterEventBubbled($ele, eventName) {
    return new Promise(resolve => {
      const listener = e => {
        $ele.removeEventListener(eventName, listener);
        resolve(e);
      };

      $ele.addEventListener(eventName, listener);
    });
  }

  _exports.resolveAfterEventBubbled = resolveAfterEventBubbled;
  const zombie = new Promise(() => {});

  async function zombiePromise() {
    return zombie;
  }

  _exports.zombiePromise = zombiePromise;

  function promiseResolvable() {
    let resolver;
    let resolved = false;
    const promise = new Promise(res => {
      if (resolved) {
        res();
      } else {
        resolver = res;
      }
    });

    const resolveFunc = () => {
      resolved = true;

      if (typeof resolver === 'function') {
        resolver();
      }
    };

    return [promise, resolveFunc];
  }

  _exports.promiseResolvable = promiseResolvable;
  _exports.default = {
    zombie,
    resolvable: promiseResolvable,
    resolveAfterEventBubbled,
    resolveAfterSeconds,
    resolveAfterDuration
  };
  return _exports;
}();