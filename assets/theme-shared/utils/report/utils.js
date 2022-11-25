window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/utils.js'] = window.SLM['theme-shared/utils/report/utils.js'] || function () {
  const _exports = {};
  const createLogger = window['SLM']['theme-shared/utils/createLogger.js'].default;

  function composedPath(event) {
    if (event.path) {
      return event.path;
    }

    if (typeof event.composedPath === 'function') {
      return event.composedPath();
    }

    const path = [];
    let {
      target
    } = event;

    while (target.parentNode !== null) {
      path.push(target);
      target = target.parentNode;
    }

    path.push(document, window);
    return path;
  }

  _exports.composedPath = composedPath;
  const storageName = `orderSignList`;
  const helpersConsole = createLogger('helpers', '[matchOrderSign]');

  function addOrderSign(seq) {
    if (typeof window !== 'undefined') {
      const signListJSON = window && window.localStorage && window.localStorage.getItem(storageName) || JSON.stringify([]);
      const signList = JSON.parse(signListJSON);
      signList.push(seq);
      window && window.localStorage && window.localStorage.setItem(storageName, JSON.stringify(signList));
      helpersConsole.log('signList', signList);
    }
  }

  _exports.addOrderSign = addOrderSign;

  function matchOrderSign(seq) {
    if (typeof window !== 'undefined') {
      const signListJSON = window && window.localStorage && window.localStorage.getItem(storageName) || JSON.stringify([]);
      const signList = JSON.parse(signListJSON);
      helpersConsole.log('match seq', seq);
      return signList.includes(seq);
    }
  }

  _exports.matchOrderSign = matchOrderSign;

  function removeOrderSign(seq, options = {}) {
    if (typeof window !== 'undefined') {
      const signListJSON = window && window.localStorage && window.localStorage.getItem(storageName) || JSON.stringify([]);
      const signList = JSON.parse(signListJSON);

      if (options && options.removeAll) {
        helpersConsole.log('remove all', storageName);
        window && window.localStorage && window.localStorage.removeItem(storageName);
        return;
      }

      const filterList = signList.filter(sign => sign !== seq);
      helpersConsole.log('filter', filterList);
      window && window.localStorage && window.localStorage.setItem(storageName, JSON.stringify(filterList));
    }
  }

  _exports.removeOrderSign = removeOrderSign;

  function onDomReady(fn) {
    document.removeEventListener('DOMContentLoaded', fn);

    if (document.readyState !== 'loading') {
      setTimeout(fn, 1);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(fn);
      });
    }
  }

  _exports.onDomReady = onDomReady;
  return _exports;
}();