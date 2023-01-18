window.SLM = window.SLM || {};

window.SLM['activity/script/index.js'] = window.SLM['activity/script/index.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const copy = window['copy-to-clipboard']['default'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { nullishCoalescingOperator, get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const init = window['SLM']['activity/script/cart.js'].default;
  const countdown = window['SLM']['commons/utils/countdown.js'].default;
  const promotionTagsInit = window['SLM']['activity/script/promotion-tags.js'].default;
  const productTabsInit = window['SLM']['activity/script/productTabs.js'].default;
  const initSortSelector = window['SLM']['activity/script/sort-selector.js'].default;
  const nc = nullishCoalescingOperator;
  const EVENT_ID = '60080000';

  function hdReport(options) {
    get_func(window, 'HdSdk.shopTracker.report').exec(EVENT_ID, options);
  }

  function promotionTimeInit() {
    const node = get($('.activity__limit-time-text'), [0]);
    if (!node) return;
    const activity = SL_State.get('activity');

    if (get(activity, 'promotionSubType') === 1) {
      const startTimeText = activity.startTime && dayjs(activity.startTime).format('YYYY-MM-DD HH:mm');
      const endTimeText = activity.endTime && dayjs(activity.endTime).format('YYYY-MM-DD HH:mm');
      const timeText = startTimeText + (endTimeText ? ` - ${endTimeText}` : '');
      if (get_func($(node).html(), 'trim').exec() !== timeText) $(node).html(timeText);
    }
  }

  function countdownInit() {
    const activity = SL_State.get('activity');
    const {
      salesEnvCustomInfo,
      endTime,
      discountCodeList
    } = nc(activity, {});
    const {
      countDownUnit,
      showCountDown,
      bannerActivated
    } = nc(get(salesEnvCustomInfo, 'landingPageConfig'), {});
    const countDownCon = $('.countdown-cells');
    const dayEle = countDownCon.find('.day');
    const daySplitEle = countDownCon.find('.daySplit');
    const hourEle = countDownCon.find('.hour');
    const minuteEle = countDownCon.find('.minute');
    const secondEle = countDownCon.find('.second');
    const copyEle = $('.coupon_copy');
    const toast = new Toast();
    copyEle.on('click', () => {
      copy(get(discountCodeList, [0]));
      toast.open(t('sales.general.coupon_code_copied'));
    });
    const now = Date.now();

    if (hourEle && minuteEle && secondEle && showCountDown && bannerActivated && endTime && now < endTime) {
      countdown(endTime, ([d, h, m, s], interval) => {
        get_func(dayEle, 'html').exec(d);
        get_func(hourEle, 'html').exec(h);
        get_func(minuteEle, 'html').exec(m);
        get_func(secondEle, 'html').exec(s);

        if (d === '0') {
          get_func(dayEle, 'hide').exec();
          get_func(daySplitEle, 'hide').exec();
        }

        if (interval <= 0) {
          get_func(countDownCon, 'hide').exec();
        }
      }, {
        id: 'activityCount',
        hasDay: countDownUnit === 'mode1'
      });
    }
  }

  $(document).ready(() => {
    init();
    countdownInit();
    promotionTimeInit();
    promotionTagsInit();
    productTabsInit();
    initSortSelector();
    window.SL_EventBus.on('global:currency:format', () => {
      const amountNode = $('[data-amount]');
      amountNode.each(function () {
        const amount = $(this).data('amount');

        if (amount) {
          $(this).html(convertFormat(amount));
        }
      });
    });
    hdReport({
      event_name: 'view',
      page: 'addon'
    });
    get_func(window, 'HdSdk.shopTracker.collect').exec({
      page: 115,
      module: -999,
      component: -999,
      action_type: 101,
      event_id: 1020
    });
  });

  (function () {
    window.setInterval(() => {
      get_func(window, 'HdSdk.shopTracker.collect').exec({
        page: 115,
        module: -999,
        component: -999,
        action_type: 106,
        event_id: 1021
      });
    }, 1000);
  })();

  return _exports;
}();