window.SLM = window.SLM || {};

window.SLM['product/search/main.js'] = window.SLM['product/search/main.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { popupSearch } = window['SLM']['product/search/search-input.js'];
  popupSearch();
  const pvTrackData = SL_State.get('productTrackData.productSearch');

  if (pvTrackData) {
    window.HdSdk && window.HdSdk.shopTracker.report('60006259', pvTrackData.hd);

    if (pvTrackData.thirdPart) {
      window.SL_EventBus && window.SL_EventBus.emit('global:thirdPartReport', pvTrackData.thirdPart);
    }
  }

  return _exports;
}();