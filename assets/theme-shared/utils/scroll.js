window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/scroll.js'] = window.SLM['theme-shared/utils/scroll.js'] || function () {
  const _exports = {};

  function setPageScrollTop(topNumber = 0) {
    document.documentElement.scrollTop = topNumber;
    document.body.scrollTop = topNumber;
  }

  _exports.setPageScrollTop = setPageScrollTop;

  function getDomScrollTop(element) {
    return element.scrollTop || element.pageYOffset || element.scrollTop;
  }

  _exports.getDomScrollTop = getDomScrollTop;

  function setDomScrollTop(element, topNumber = 0) {
    element.scrollTop = topNumber;
  }

  _exports.setDomScrollTop = setDomScrollTop;

  function getPageScrollTop() {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
  }

  _exports.getPageScrollTop = getPageScrollTop;
  return _exports;
}();