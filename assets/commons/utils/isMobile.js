window.SLM = window.SLM || {};

window.SLM['commons/utils/isMobile.js'] = window.SLM['commons/utils/isMobile.js'] || function () {
  const _exports = {};
  let d = $('i[data-platform]');

  if (!d.get(0)) {
    d = $(`<i data-platform></i>`);
    $(document.body).append(d);
  }

  function isMobile() {
    let dom = $('i[data-platform]');

    if (!dom.get(0)) {
      dom = $(`<i data-platform></i>`);
      $(document.body).append(dom);
    }

    return dom.css('display') === 'block';
  }

  _exports.default = isMobile;
  return _exports;
}();