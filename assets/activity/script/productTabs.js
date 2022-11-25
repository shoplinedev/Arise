window.SLM = window.SLM || {};

window.SLM['activity/script/productTabs.js'] = window.SLM['activity/script/productTabs.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Tooltip = window['SLM']['theme-shared/components/hbs/shared/components/tooltip/index.js'].default;
  const { get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const CartInfoKey = 'cartInfo';
  const TooltipSelector = '.activity__productTabs .tab2';

  _exports.default = () => {
    const activity = SL_State.get('activity');
    const request = SL_State.get('request');

    if (get(activity, 'benefitType') === 12 && activity.promotionSubType === 0) {
      let tooltip;

      if (request.uri.query.query_product_type !== '2') {
        const colorTooltip = $(TooltipSelector).data('color_tooltip');
        tooltip = new Tooltip({
          selector: TooltipSelector,
          title: `<span class="activity__productTabs-tooltip" >${t('sales.general.product_tabs_benefit_unlocked_tip')}<i><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4395 15.5607L4.43945 5.56066L5.50011 4.5L15.5001 14.5L14.4395 15.5607Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.56055 15.5607L15.5605 5.56066L14.4999 4.5L4.49989 14.5L5.56055 15.5607Z" fill="currentColor"/>
          </svg></i></span>`,
          trigger: 'none',
          color: colorTooltip || '#D22D24',
          zIndex: 98
        });
      }

      const resetTooltip = init => {
        if (!tooltip) {
          return;
        }

        get_func(tooltip, 'destroy').exec();

        if (init === false) {
          return;
        }

        get_func(tooltip, 'init').exec();
        tooltip.show();
        const $tooltip = tooltip.$tooltips[tooltip.$tooltips.length - 1];

        if (tooltip) {
          tooltip.setPosition($tooltip, tooltip.$target);
        }
      };

      const updateCartInfo = cartInfo => {
        const promotion = get(get_func(cartInfo.activeItems, 'find').exec(item => get(item, 'promotion.activitySeq') === activity.activitySeq), 'promotion');

        if (get(promotion, 'promotionBenefitList[0].hit') || get(promotion, 'promotionBenefitList[0].extMap.meetThreshold') === 'true') {
          $('.activity__productTabs .tab2').addClass('unlocked');

          if (!get(promotion, 'promotionBenefitList[0].hit')) {
            resetTooltip(true);
          } else {
            resetTooltip(false);
          }
        } else {
          $('.activity__productTabs .tab2').removeClass('unlocked');
          resetTooltip(false);
        }
      };

      $(document.body).on('click', '.activity__productTabs-tooltip i', () => {
        resetTooltip(false);
      });
      const cartInfo = SL_State.get(CartInfoKey);
      updateCartInfo(cartInfo);
      SL_State.on(CartInfoKey, updateCartInfo);
    }
  };

  return _exports;
}();