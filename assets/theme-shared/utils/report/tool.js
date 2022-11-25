window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/tool.js'] = window.SLM['theme-shared/utils/report/tool.js'] || function () {
  const _exports = {};
  const { v4 } = window['uuid'];

  function getEventID() {
    return `${Date.now()}_${v4().replace(/-/g, '')}`;
  }

  function getFBEventID(event, eventId) {
    return `${event.slice(0, 1).toLowerCase()}${event.slice(1)}${eventId}`;
  }

  _exports.getEventID = getEventID;
  _exports.getFBEventID = getFBEventID;
  return _exports;
}();