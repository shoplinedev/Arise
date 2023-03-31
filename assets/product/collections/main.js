window.SLM = window.SLM || {};

window.SLM['product/collections/main.js'] = window.SLM['product/collections/main.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const SortChange = window['SLM']['product/collections/js/sort.js'].default;
  const createShadowDom = window['SLM']['product/commons/js/createShadowDom.js'].default;
  const Sidebar = window['SLM']['product/collections/js/sidebar.js'].default;
  const InfiniteScrollList = window['SLM']['product/collections/js/infiniteScrollList.js'].default;
  const pvTrackData = SL_State.get('productTrackData.plp');

  if (pvTrackData) {
    window.HdSdk && window.HdSdk.shopTracker.report('60006260', pvTrackData.hd);
    window.SL_EventBus && window.SL_EventBus.emit('global:thirdPartReport', pvTrackData.thirdPart());
  }

  const sideBar = new Sidebar({});
  sideBar.init();

  class CollectionsPage {
    constructor() {
      SortChange();
      const isListInfiniteScroll = $('.product-list-is-infinite-scroll-mode').length > 0;

      if (isListInfiniteScroll) {
        this.infiniteScrollInstance = new InfiniteScrollList({
          threshold: 400
        });
      }

      createShadowDom();
    }

    onUnload() {
      if (this.infiniteScrollInstance) {
        this.infiniteScrollInstance.destroy();
      }
    }

  }

  _exports.default = CollectionsPage;
  CollectionsPage.type = 'collections-page';
  registrySectionConstructor('collections-page', CollectionsPage);
  return _exports;
}();