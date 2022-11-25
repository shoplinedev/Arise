window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/lozad/core.js'] = window.SLM['theme-shared/utils/lozad/core.js'] || function () {
  const _exports = {};
  const { support, isLoaded, getElements } = window['SLM']['theme-shared/utils/lozad/util.js'];

  function getValidAttrSet(plugins) {
    return Array.from(Array.from(plugins).reduce((attrSet, plugin) => {
      if (plugin.attributes) {
        plugin.attributes.forEach(attr => attrSet.add(attr));
      }

      return attrSet;
    }, new Set()));
  }

  function getHook(plugins, name, normalHook) {
    const hooks = [normalHook, ...plugins.map(plugin => plugin[name])].filter(Boolean);
    return (...args) => hooks.map(hook => hook.apply(this, args));
  }

  function getHooks(plugins, normalHooks) {
    return {
      init: getHook(plugins, 'init', normalHooks.init),
      prepare: getHook(plugins, 'prepare', normalHooks.prepare),
      beforeLoad: getHook(plugins, 'beforeLoad', normalHooks.beforeLoad),
      load: getHook(plugins, 'load', normalHooks.load),
      loaded: getHook(plugins, 'loaded', normalHooks.loaded)
    };
  }

  function getIntersectionObserver(options, loader) {
    if (support('IntersectionObserver')) {
      const {
        root,
        rootMargin,
        threshold
      } = options;
      return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            observer.unobserve(entry.target);
            if (!isLoaded(entry.target)) loader(entry.target);
          }
        });
      }, {
        root,
        rootMargin,
        threshold
      });
    }
  }

  function getMutationObserver(options, loader, validAttrSet) {
    if (support('MutationObserver') && options.enableAutoReload) {
      return new MutationObserver(entries => {
        entries.forEach(entry => {
          if (isLoaded(entry.target) && entry.type === 'attributes' && validAttrSet.has(entry.attributeName)) {
            loader(entry.target);
          }
        });
      });
    }
  }

  function lozad(selector = '.lozad', options = {}) {
    const currOpts = {
      rootMargin: '0px',
      threshold: 0,
      enableAutoReload: false,
      ...options
    };
    const validAttrSet = getValidAttrSet(lozad.plugins);
    const hooks = getHooks(lozad.plugins, currOpts);

    const loadElement = element => {
      hooks.beforeLoad(element);
      hooks.load(element);
      hooks.loaded(element);
    };

    const observer = getIntersectionObserver(currOpts, loadElement);
    const mutationObserver = getMutationObserver(currOpts, loadElement, validAttrSet);
    const elements = getElements(selector, currOpts.root);

    for (let i = 0; i < elements.length; i++) {
      if (!isLoaded(elements[i])) hooks.prepare(elements[i]);
    }

    return {
      observer,
      mutationObserver,

      observe() {
        const elements = getElements(selector, currOpts.root);

        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];

          if (isLoaded(element)) {
            continue;
          }

          if (mutationObserver) {
            mutationObserver.observe(elements[i], {
              subtree: true,
              attributes: true,
              attributeFilter: Array.from(validAttrSet)
            });
          }

          if (observer) {
            observer.observe(element);
            continue;
          }

          loadElement(element);
        }
      },

      triggerLoad(element) {
        if (isLoaded(element)) return;
        loadElement(element);
      }

    };
  }

  lozad.plugins = [];

  lozad.use = function usePlugin(plugin) {
    lozad.plugins = Array.from(new Set([...lozad.plugins, plugin]));
  };

  _exports.default = lozad;
  return _exports;
}();