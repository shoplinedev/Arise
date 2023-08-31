window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/utils.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/utils.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const dayjs = window['dayjs']['*'];
  const utc = window['dayjs']['/plugin/utc'].default;
  const tz = window['dayjs']['/plugin/timezone'].default;
  const advancedFormat = window['dayjs']['/plugin/advancedFormat'].default;
  dayjs.extend(utc);
  dayjs.extend(tz);
  dayjs.extend(advancedFormat);
  const timezone = SL_State.get('storeInfo.timezone');

  function initCurrencyChangeListener(selector) {
    const cartRootNode = $(selector || document);
    SL_State.on('currencyCode', () => {
      const amountNode = cartRootNode.find('[data-amount]');
      amountNode.each(function () {
        if ($(this).hasClass('no-change') === false) {
          $(this).text(convertFormat($(this).attr('data-amount')));
        }
      });
    });
  }

  _exports.initCurrencyChangeListener = initCurrencyChangeListener;

  function formatTime(time) {
    return dayjs(time).format('YYYY-MM-DD HH:mm');
  }

  _exports.formatTime = formatTime;

  function formateTimeWithGMT(time) {
    return dayjs(time).tz(timezone).format('YYYY-MM-DD HH:mm A (z)');
  }

  _exports.formateTimeWithGMT = formateTimeWithGMT;
  return _exports;
}();