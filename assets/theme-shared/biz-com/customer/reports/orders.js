window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/reports/orders.js'] = window.SLM['theme-shared/biz-com/customer/reports/orders.js'] || function () {
  const _exports = {};
  const eventName = {
    pageView: '101',
    pageLeave: '999'
  };

  function reportEvent(eventId, params = {}) {
    if (!eventId) {
      throw new Error('eventId must be provided!');
    }

    window.HdSdk && window.HdSdk.shopTracker.report(eventId, params);
  }

  const cidMap = {
    customer: '60079999'
  };
  _exports.cidMap = cidMap;
  const customComponentMap = {
    orderDetail: '156'
  };
  _exports.customComponentMap = customComponentMap;

  function reportPageView(eventId, params = {}) {
    reportEvent(eventId, {
      event_name: eventName.pageView,
      ...params
    });
  }

  _exports.reportPageView = reportPageView;

  function reportThirdPartPageView() {
    window.SL_EventBus.emit('global:thirdPartReport', {
      FBPixel: [['track', 'PageView', {}, {
        eventID: window.__PRELOAD_STATE__ && window.__PRELOAD_STATE__.serverEventId
      }]],
      GAAds: [['event', 'conversion', null]],
      GA: [['event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search
      }]],
      GA4: [['event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search
      }]]
    });
  }

  _exports.reportThirdPartPageView = reportThirdPartPageView;

  function reportPageLeave(eventId, params = {}) {
    reportEvent(eventId, {
      event_name: eventName.pageLeave,
      ...params
    });
  }

  _exports.reportPageLeave = reportPageLeave;
  return _exports;
}();