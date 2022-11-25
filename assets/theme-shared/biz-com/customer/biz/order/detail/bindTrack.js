window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/bindTrack.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/bindTrack.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const LoggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { Owner, Action } = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/loggerReport.js'];
  const packageLogistics = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/PackageLogisticsModal.js'].default;
  const sentryLogger = LoggerService.pipeOwner(Owner.OrderDetail);

  function handleShowModal(event) {
    const index = event.currentTarget.dataset.index;
    const pageData = SL_State.get('customer.order') || {};
    const ordersPackageVoListItem = pageData && pageData.ordersPackageList && pageData.ordersPackageList[index];
    sentryLogger.info('包裹跟踪弹窗打开', {
      action: Action.Click,
      data: {
        index,
        info: ordersPackageVoListItem
      }
    });
    packageLogistics({ ...ordersPackageVoListItem,
      pageData
    });
  }

  function bindTrackBtn() {
    const trackBtnEls = document.querySelectorAll('.detail-logistic-track');

    if (trackBtnEls) {
      Array.from(trackBtnEls).forEach(trackBtnEl => {
        trackBtnEl.addEventListener('click', handleShowModal);
      });
    }
  }

  _exports.bindTrackBtn = bindTrackBtn;
  return _exports;
}();