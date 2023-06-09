window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/hdReport.js'] = window.SLM['theme-shared/utils/report/hdReport.js'] || function () {
  const _exports = {};
  const Cookies = window['js-cookie']['default'];
  const dayjs = window['dayjs']['default'];
  const utc = window['dayjs']['/plugin/utc'].default;
  const timezone = window['dayjs']['/plugin/timezone'].default;
  const { sessionId } = window['@sl/logger'];
  const geEnv = window['SLM']['theme-shared/utils/get-env.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  dayjs.extend(utc);
  dayjs.extend(timezone);

  class HdReport {
    constructor() {
      this.deviceInfo = null;
      const {
        APP_ENV
      } = geEnv();
      const Shopline = window.Shopline || {};
      let env = APP_ENV !== 'develop' ? 'product' : '';

      if (APP_ENV === 'preview') {
        env = APP_ENV;
      }

      if (Shopline.designMode) {
        env = '';
      }

      const debugMode = Shopline.designMode ? false : APP_ENV === 'staging' || APP_ENV === 'develop';
      const pid = window.__PRELOAD_STATE__ ? window.__PRELOAD_STATE__.serverEventId : undefined;
      const timeOffset = Shopline.systemTimestamp ? +new Date() - Shopline.systemTimestamp : 0;
      const that = this;
      const {
        USE_REPORT_URL_STORE_IDS
      } = window.__ENV__ || {};
      if (!window.HdSdk || !window.HdSdk.shopTracker) return;
      window.HdSdk.shopTracker.setOptions({
        env,
        timezoneOffset: SL_State.get('storeInfo.timezoneOffset') || 0,
        disableIframeId: true,
        timeOffset,
        beforeSend: async data => {
          if (!that.deviceInfo && window.__DF__) {
            that.deviceInfo = await window.__DF__.getDeviceInfo();
          }

          const warpData = {
            theme_id: SL_State.get('themeConfig.themeId'),
            store_region: SL_State.get('storeInfo.marketStorageRegion'),
            store_timezone: SL_State.get('storeInfo.timezone'),
            user_timezone: dayjs.tz.guess(),
            theme_name: Shopline.themeName,
            theme_version: Shopline.themeVersion,
            is_admin: Cookies.get('r_b_ined') || '0',
            device_token: that.deviceInfo ? that.deviceInfo.token : undefined,
            ua_info: that.deviceInfo ? that.deviceInfo.deviceInfo : undefined,
            pid,
            update_mode: Shopline.updateMode ? Shopline.updateMode.toString() || '' : undefined,
            time_offset: timeOffset,
            trade_logger_id: sessionId.get(),
            ...data
          };

          if (!Object.prototype.hasOwnProperty.call(data, 'iframe_id') || Number(data.iframe_id) === 1) {
            warpData.iframe_id = Cookies.get('n_u') || Cookies.get('sl_iframe_id');
          }

          return warpData;
        }
      });
      window.HdSdk.shopTracker.setDebugMode(debugMode);
      window.HdSdk.shopTracker.use('url', (url, payload) => {
        const payloads = [].concat(payload);
        const enhancedUrl = `${url}${url.indexOf('?') === -1 ? `?` : '&'}_pid=${pid}`;
        const defaultEventId = -999;
        const obj = payloads.reduce((o, {
          source
        }) => {
          const result = o;
          const {
            act,
            eventid,
            event_id
          } = source;
          const item = eventid || event_id || defaultEventId;
          result[act] = result[act] ? [...result[act], item] : [item];
          return result;
        }, {});
        const joinStr = Object.keys(obj).reduce((str, act) => {
          return `${str}:${act}_${obj[act].join(',')}`;
        }, '').slice(1);
        const tempUrl = `${enhancedUrl}&_act=${joinStr}`;

        if (USE_REPORT_URL_STORE_IDS && USE_REPORT_URL_STORE_IDS.some(id => id === Shopline.storeId || id === 'all')) {
          if (tempUrl.indexOf('n.gif') !== -1) {
            return tempUrl.replace('/eclytics/n.gif', '/eclytics/i');
          }

          if (tempUrl.indexOf('o.gif') !== -1) {
            return tempUrl.replace('/eclytics/o.gif', '/eclytics/c');
          }
        }

        return tempUrl;
      });
    }

  }

  const hidooRp = window.SL_Report ? window.SL_Report.hdReportInstance || new HdReport() : undefined;

  if (!window.SL_Report || !window.SL_Report.hdReportInstance) {
    window.SL_Report = window.SL_Report || {};
    window.SL_Report.hdReportInstance = hidooRp;
  }

  _exports.hidooRp = hidooRp;
  _exports.HdReport = HdReport;
  return _exports;
}();