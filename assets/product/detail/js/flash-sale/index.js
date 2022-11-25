window.SLM = window.SLM || {};

window.SLM['product/detail/js/flash-sale/index.js'] = window.SLM['product/detail/js/flash-sale/index.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { nullishCoalescingOperator, get } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const countdown = window['SLM']['commons/utils/countdown.js'].default;
  const { timers } = window['SLM']['commons/utils/countdown.js'];
  const nc = nullishCoalescingOperator;

  function FlashSale() {
    this.timeLimitActivityList = get(SL_State.get('productActivity'), 'timeLimitActivityList');
  }

  FlashSale.prototype.init = function () {
    const flashSales = $('.sales__flash-sale-container-hook[data-seq]');

    if (this.timeLimitActivityList && flashSales.length) {
      const seqList = [...new Set([...flashSales].map(ele => ele.dataset.seq))];
      seqList.forEach(seq => {
        const eles = $('.sales__flash-sale-container-hook[data-seq]').filter(`[data-seq=${seq}]`);
        const activity = this.timeLimitActivityList.find(({
          activitySeq
        }) => seq === activitySeq);
        if (!activity) return;

        if (get(activity, 'salesPlugin.countDownTimerPlugin.showCountDownTime')) {
          this.startCountDown(activity, eles);
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
            window.location.href = `/activity/${nc(get(seoHandleList, [0]), activitySeq)}`;
          });
        } else if (linkType === 'custom') {
          eles.on('click', () => {
            window.location.href = customLink;
          });
        }
      });
    }
  };

  FlashSale.prototype.startCountDown = function (activity, eles) {
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

  FlashSale.prototype.destroy = function () {
    this.timeLimitActivityList.forEach(({
      activitySeq
    }) => {
      if (timers[`flashSale_${activitySeq}`]) {
        clearInterval(timers[`flashSale_${activitySeq}`]);
      }
    });
  };

  _exports.default = FlashSale;
  return _exports;
}();