window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/schedular/queueMicrotask.js'] = window.SLM['theme-shared/utils/schedular/queueMicrotask.js'] || function () {
  const _exports = {};

  const createQueueMicrotaskViaPromises = () => {
    return microtask => Promise.resolve().then(microtask);
  };

  const createQueueMicrotaskViaMutationObserver = () => {
    let i = 0;
    let microtaskQueue = [];
    const observer = new MutationObserver(() => {
      microtaskQueue.forEach(microtask => microtask());
      microtaskQueue = [];
    });
    const node = document.createTextNode('');
    observer.observe(node, {
      characterData: true
    });
    return microtask => {
      microtaskQueue.push(microtask);
      node.data = String(++i % 2);
    };
  };

  const queueMicrotask = typeof Promise === 'function' && Promise.toString().indexOf('[native code]') > -1 ? createQueueMicrotaskViaPromises() : createQueueMicrotaskViaMutationObserver();
  _exports.queueMicrotask = queueMicrotask;
  return _exports;
}();