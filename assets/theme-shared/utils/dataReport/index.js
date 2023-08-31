window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/dataReport/index.js'] = window.SLM['theme-shared/utils/dataReport/index.js'] || function () {
  const _exports = {};
  const Cookies = window['js-cookie']['*'];
  const ga = window['SLM']['theme-shared/utils/dataReport/ga.js'].default;
  const { clickAdsData, loadAdsData } = window['SLM']['theme-shared/utils/dataReport/ads.js'];
  const { clickFbData, loadFbData } = window['SLM']['theme-shared/utils/dataReport/fb.js'];
  const reportHd = window['SLM']['theme-shared/utils/dataReport/hd.js'].default;
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { ClickType, PageType } = window['SLM']['theme-shared/utils/report/const.js'];
  const { getEventID } = window['SLM']['theme-shared/utils/report/tool.js'];
  const apiLogger = window['SLM']['theme-shared/events/utils/api-logger.js'].default;
  const externalDtaReportEvents = window['@yy/sl-theme-shared']['/events/data-report/enum']['*'];
  const dataReportAdapters = window['@yy/sl-theme-shared']['/events/data-report/adapters'].default;
  const { getCurrencyCode } = window['SLM']['theme-shared/utils/dataReport/tool.js'];
  const excludedDataReportEvents = new Set(Object.keys(externalDtaReportEvents).map(key => externalDtaReportEvents[key]));
  const logger = apiLogger('DataReport:Instance - ON');

  class DataReport {
    constructor() {
      this.eventBus = SL_EventBus;
      this.rpEvent = window.Shopline && window.Shopline.event;
      this.currency = getCurrencyCode();
    }

    load(data) {
      const {
        pageType,
        value
      } = data;
      const val = { ...value,
        ...{
          currency: this.currency
        }
      };
      const gaParam = ga.load(pageType, val);
      const adsParams = loadAdsData(pageType, val);
      const fbParams = loadFbData(pageType, val);
      const params = {
        GAAds: adsParams,
        GA: gaParam,
        FBPixel: fbParams
      };
      this.eventBus && this.eventBus.emit('global:thirdPartReport', params);
    }

    touch(data) {
      const {
        pageType,
        actionType,
        value
      } = data;
      const {
        content_spu_id,
        content_sku_id,
        content_category,
        content_name,
        currency,
        quantity,
        price,
        hdProducts,
        extra
      } = value || {};
      const spu_ids = [content_spu_id];

      if (Array.isArray(hdProducts)) {
        hdProducts.forEach(item => {
          if (item && item.spuId) {
            spu_ids.push(item && item.spuId);
          }

          reportHd(pageType, actionType, item);
        });
      }

      const eid = getEventID();
      const tpParams = {
        skuId: spu_ids,
        category: content_category,
        name: content_name,
        currency,
        quantity,
        price,
        eventId: `addToCart${eid}`
      };

      if (extra && extra.abandonedOrderSeq && extra.event_scenes === 'buy_now') {
        Cookies.set(`${extra.abandonedOrderSeq}_fb_data`, {
          tp: 1,
          et: Date.now(),
          ed: eid
        });
      }

      const hdParams = {
        spuId: content_spu_id,
        skuId: content_sku_id,
        name: content_name,
        num: quantity,
        price,
        ...extra
      };
      const gaParam = ga.click(pageType, actionType, tpParams);
      const adsParams = clickAdsData(pageType, actionType, tpParams);
      const fbParams = clickFbData(actionType, tpParams);
      const params = {
        GAAds: adsParams,
        GA: gaParam,
        FBPixel: fbParams
      };
      this.eventBus && this.eventBus.emit('global:thirdPartReport', params);

      if (extra && extra.event_name) {
        reportHd(pageType, actionType, hdParams);
      }
    }

    listen(eventName) {
      this.rpEvent && this.rpEvent.on(eventName, data => {
        logger.info(data);

        if (data.interior && excludedDataReportEvents.has(data.interior)) {
          logger.error('not in access events', {
            interior: data.interior,
            excludedDataReportEvents
          });
          return;
        }

        const params = {
          actionType: ClickType.AddToCart,
          pageType: PageType.ProductDetail,
          value: data && data.data
        };
        this.touch(params);
      });
    }

  }

  const dataReport = new DataReport();
  dataReportAdapters.on();
  _exports.default = dataReport;
  return _exports;
}();