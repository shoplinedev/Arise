window.SLM = window.SLM || {};

window.SLM['product/detail/js/layout.js'] = window.SLM['product/detail/js/layout.js'] || function () {
  const _exports = {};
  const debounce = window['SLM']['commons/utils/debounce.js'].default;
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;

  function setPosition({
    id,
    container = window,
    offsetTop = 0
  }) {
    const box = $(`#product-detail-sticky_${id}`);

    if (!box.get(0)) {
      return;
    }

    let mainView = box.children('.sticky-main-view');
    mainView = mainView.length ? mainView : box;
    const height = mainView.height();
    const wHeight = $(container).outerHeight();

    if (height + offsetTop > wHeight) {
      box.css('top', -(height - wHeight));
    } else {
      box.css('top', offsetTop);
    }
  }

  function listenPosition({
    id,
    container = window,
    offsetTop = 0
  }) {
    setPosition({
      id,
      container,
      offsetTop
    });
    const setPositionDebounce = debounce(300, () => {
      setPosition({
        id,
        container,
        offsetTop
      });
    });
    $(window).on('resize', setPositionDebounce);

    if (!isMobile()) {
      $(container).one('scroll', setPositionDebounce);
    }

    return function removePostionListener() {
      $(window).off('resize', setPositionDebounce);
      $(container).off('scroll', setPositionDebounce);
    };
  }

  _exports.listenPosition = listenPosition;
  _exports.default = setPosition;
  return _exports;
}();