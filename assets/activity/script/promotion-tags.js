window.SLM = window.SLM || {};

window.SLM['activity/script/promotion-tags.js'] = window.SLM['activity/script/promotion-tags.js'] || function () {
  const _exports = {};
  const { disablePageScroll, enablePageScroll } = window['SLM']['theme-shared/components/hbs/shared/components/modal/common.js'];
  const { SL_EventBus } = window['SLM']['theme-shared/utils/event-bus.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const helper = window['SLM']['commons/utils/helper.js'].default;
  const effectFc = window['SLM']['commons/utils/effectFc.js'].default;
  const isMobile = window['SLM']['commons/utils/isMobile.js'].default;

  function handleTagsShow() {
    const $tags = $('.sales__promotion-tags-tag-hook');

    if (!$tags[0]) {
      return;
    }

    if (isMobile()) {
      $tags.css('display', 'none').eq(0).css('display', 'inline-block');
    } else {
      $tags.css('display', 'inline-block');
    }
  }

  _exports.default = effectFc(function (parent) {
    const {
      useEffect
    } = this;
    const container = $(parent || document.body);
    const promotionTags = container.find('.sales__promotionTags');

    if (!promotionTags.length) {
      return;
    }

    handleTagsShow();

    if (promotionTags.hasClass('pdp')) {
      let lock = false;
      const timer = null;
      useEffect($(document.body), 'on,off', 'click', e => {
        const {
          target
        } = e;
        const containerDom = promotionTags.get(0);

        if ($.contains(containerDom, target) || containerDom === target) {
          return;
        }

        if (promotionTags.hasClass('active')) {
          promotionTags.removeClass('active');

          if (helper.getPlatform() === 'mobile' && lock) {
            enablePageScroll();
            lock = false;
          }
        }
      });
      useEffect(promotionTags, 'on,off', 'click', () => {
        promotionTags.toggleClass('active');

        if (helper.getPlatform() === 'mobile') {
          if (promotionTags.hasClass('active') && !lock) {
            disablePageScroll();
            lock = true;
          }

          if (!promotionTags.hasClass('active') && lock) {
            lock = false;
            enablePageScroll();
          }
        }

        if (!isMobile()) {
          if (timer) {
            clearTimeout(timer);
          }
        }
      });
      useEffect(promotionTags.find('.sales__promotionTags-items-close-hook'), 'on,off', 'click', e => {
        e.stopPropagation();
        promotionTags.removeClass('active');
        lock = false;
        enablePageScroll();
      });
      useEffect(promotionTags.find('.sales__promotionTags-items'), 'on,off', 'click', e => {
        e.stopPropagation();
      });
      useEffect(SL_EventBus, 'on,off', 'global:platformChange', () => {
        if (isMobile() && promotionTags.hasClass('active') && !lock) {
          disablePageScroll();
          lock = true;
        } else if (lock) {
          enablePageScroll();
          lock = false;
        }

        handleTagsShow();
      });
    } else {
      useEffect(promotionTags.find('.sales__promotionTags-switchIcon'), 'on,off', 'click', () => {
        promotionTags.toggleClass('active');
      });
    }

    window.SL_EventBus.on('global:currency:format', () => {
      const amountNode = promotionTags.find('[data-amount]');
      amountNode.each(function () {
        $(this).html(convertFormat($(this).data('amount')));
      });
    });
  });
  return _exports;
}();