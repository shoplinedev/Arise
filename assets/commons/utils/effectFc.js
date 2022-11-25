window.SLM = window.SLM || {};

window.SLM['commons/utils/effectFc.js'] = window.SLM['commons/utils/effectFc.js'] || function () {
  const _exports = {};

  _exports.default = fn => {
    return (...props) => {
      let offEvents = [];

      let useEffect = function (instance, method, eventName, eventFn) {
        if (typeof instance !== 'object' || typeof method !== 'string' || typeof eventName !== 'string' || typeof eventFn !== 'function') {
          return;
        }

        const arr = method ? method.split(/\s*,\s*/) : [];
        const onName = arr[0];
        const offName = arr[1];

        if (onName && instance[onName]) {
          instance[onName](eventName, eventFn);
        }

        if (offName && instance[offName]) {
          const offEvent = instance[offName].bind(instance, eventName, eventFn);
          offEvents.push(offEvent);
        }
      };

      let unmount = fn ? fn.call({
        useEffect
      }, ...props) : null;
      return (...args) => {
        if (offEvents && offEvents.length) {
          offEvents.forEach(offEvent => {
            offEvent();
          });
        }

        if (typeof unmount === 'function') {
          unmount(...args);
        }

        offEvents = null;
        useEffect = null;
        unmount = null;
      };
    };
  };

  return _exports;
}();