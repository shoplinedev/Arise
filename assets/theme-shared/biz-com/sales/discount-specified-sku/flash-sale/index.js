window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/index.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/index.js'] || function () {
  const _exports = {};
  const countdown = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/countdown.js'].default;
  const getFlashSaleHtml = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-html.js'].default;
  const { nullishCoalescingOperator, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const nc = nullishCoalescingOperator;

  const startCountDown = (activity, eles) => {
    if (get(activity, 'salesPlugin.countDownTimerPlugin.showCountDownTime')) {
      const countdownEles = eles.find('.sales__flash-sale-timeout-container-hook');
      const daysCon = countdownEles.find('.sales__flash-sale-timeout-first-time-item-hook');
      const daysEles = countdownEles.find('.sales__flash-sale-timeout-days-hook');
      const daysDotEles = countdownEles.find('.sales__flash-sale-timeout-first-dot-hook');
      const hoursEles = countdownEles.find('.sales__flash-sale-timeout-hours-hook');
      const minutesEles = countdownEles.find('.sales__flash-sale-timeout-minutes-hook');
      const secondsEles = countdownEles.find('.sales__flash-sale-timeout-seconds-hook');
      const {
        startTime,
        endTime
      } = get(activity.salesPlugin, 'countDownTimerPlugin');
      const now = Date.now();

      if (now >= startTime && now < endTime) {
        countdown(endTime, ([d, h, m, s, ms], interval) => {
          daysEles.html(d);
          hoursEles.html(h);
          minutesEles.html(m);
          secondsEles.html(`${s}.${ms}`);

          if (d <= 0) {
            daysCon.hide();
            daysDotEles.hide();
          }

          if (interval <= 0) {
            countdownEles.hide();
          }
        }, {
          id: `flashSale_${activity.activitySeq}`,
          hasDay: true,
          hasMillisecond: true,
          interval: 100
        });
      } else {
        countdownEles.hide();
      }
    }
  };

  const run = timeLimitActivityList => {
    const flashSales = $('.sales__flash-sale-container-hook[data-seq]');

    if (timeLimitActivityList.length && flashSales.length) {
      const seqList = [...new Set([...flashSales].map(ele => ele.dataset.seq))];
      seqList.forEach(seq => {
        const eles = $('.sales__flash-sale-container-hook[data-seq]').filter(`[data-seq=${seq}]`);
        const activity = timeLimitActivityList.find(({
          activitySeq
        }) => seq === activitySeq);
        if (!activity) return;

        if (get(activity, 'salesPlugin.countDownTimerPlugin.showCountDownTime')) {
          startCountDown(activity, eles);
        }

        const {
          activitySeq,
          seoHandleList,
          salesEnvCustomInfo
        } = activity;
        const {
          linkType,
          customLink
        } = nc(get(salesEnvCustomInfo, 'productDetailConfig'), {});

        if (linkType === 'activityPage' || !linkType) {
          eles.on('click', () => {
            window.location.href = window.Shopline.redirectTo(`/activity/${nc(get(seoHandleList, [0]), activitySeq)}`);
          });
        } else if (linkType === 'custom') {
          eles.on('click', () => {
            window.location.href = customLink;
          });
        }
      });
    }
  };

  const getHtml = timeLimitActivityList => {
    const timeLimitActivity = get(timeLimitActivityList, [0]);
    return getFlashSaleHtml(timeLimitActivity);
  };

  const isRender = (spuInfo, timeLimitActivityList) => {
    if (timeLimitActivityList && timeLimitActivityList.length && !spuInfo.inquiry) {
      const timeLimitActivity = timeLimitActivityList[0];

      if (timeLimitActivity.salesPlugin.countDownTimerPlugin.showCountDownTime || timeLimitActivity.salesPlugin.progressPlugin.showProgressBar) {
        return true;
      }
    }

    return false;
  };

  const render = () => {
    return {
      isRender,
      getHtml,
      run
    };
  };

  _exports.default = render;
  return _exports;
}();