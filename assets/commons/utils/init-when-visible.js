window.SLM = window.SLM || {};

window.SLM['commons/utils/init-when-visible.js'] = window.SLM['commons/utils/init-when-visible.js'] || function () {
  const _exports = {};

  function initWhenVisible(options) {
    const threshold = options.threshold ? options.threshold : 0;
    const observer = new IntersectionObserver((entries, _observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (typeof options.callback === 'function') {
            options.callback();

            _observer.unobserve(entry.target);
          }
        }
      });
    }, {
      rootMargin: `0px 0px ${threshold}px 0px`
    });
    observer.observe(options.element[0]);
  }

  _exports.default = initWhenVisible;
  return _exports;
}();