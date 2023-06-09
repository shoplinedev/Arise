window.SLM = window.SLM || {};

window.SLM['activity/script/cart.js'] = window.SLM['activity/script/cart.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const getPromotionReminder = window['SLM']['theme-shared/components/hbs/cartSalesPromotion/js/content/reminder/getPromotionReminder.js'].default;
  const { get, get_func } = window['SLM']['theme-shared/utils/syntax-patch.js'];
  const template = window['SLM']['theme-shared/utils/template.js'].default;
  const Render = window['SLM']['commons/sales/simpleRender.js'].default;
  const CartInfoKey = 'cartInfo';
  const GIFT_PLUGIN_TYPE = 7;
  const BenefitTypeEnum = {
    DISCOUNT: 2,
    NTH_PRICE: 11,
    BUY_X_GET_Y: 12
  };
  const BenefitValueTypeEnum = {
    AMOUNT: '1',
    DISCOUNT: '2'
  };

  const init = () => {
    const cartNode = $('#activity-cart');

    if (!cartNode.length) {
      return;
    }

    const activity = SL_State.get('activity');

    function getDefualtPromotion() {
      const {
        benefitType,
        benefitConditions,
        cartBannerText
      } = activity;
      const condition = benefitConditions[0];

      if (condition) {
        const {
          benefitEvent,
          benefit
        } = condition;
        let benefitValueType;

        if (benefitType === BenefitTypeEnum.BUY_X_GET_Y || benefitType === BenefitTypeEnum.NTH_PRICE) {
          benefitValueType = !benefit.benefitAmount ? BenefitValueTypeEnum.DISCOUNT : BenefitValueTypeEnum.AMOUNT;
        }

        return {
          benefitType,
          promotionBenefitList: [{
            type: condition.benefitEvent.type,
            hit: false,
            benefit: benefitType === BenefitTypeEnum.DISCOUNT || benefitValueType === BenefitValueTypeEnum.DISCOUNT ? benefit.discount : benefit.benefitAmount,
            amount: benefitEvent.minThreshold,
            benefitCount: benefit.benefitCount,
            extMap: {
              bannerText: get(cartBannerText, 'hitNone'),
              benefitValueType
            }
          }]
        };
      }
    }

    const render = new Render([{
      path: 'activeItems',
      selector: '#activity-cartTotal',

      action(node, activeItems) {
        const activeItem = get_func(activeItems, 'find').exec(({
          promotion
        }) => get(promotion, 'activitySeq') === get(activity, 'activitySeq'));
        const hasGiftPlugin = get_func(activeItems, 'findIndex').exec(({
          promotion
        }) => get(promotion, 'benefitType') === GIFT_PLUGIN_TYPE) > -1;

        if (!hasGiftPlugin) {
          node.innerHTML = convertFormat(get(activeItem, 'totalAmount') || 0);
        }
      }

    }, {
      path: 'activeItems',
      selector: '#activity-cartNum',

      action(node, activeItems) {
        const activeItem = get_func(activeItems, 'find').exec(({
          promotion
        }) => get(promotion, 'activitySeq') === get(activity, 'activitySeq'));
        const hasGiftPlugin = get_func(activeItems, 'findIndex').exec(({
          promotion
        }) => get(promotion, 'benefitType') === GIFT_PLUGIN_TYPE) > -1;

        if (hasGiftPlugin) {
          return;
        }

        if (get(activeItem, 'itemList.length')) {
          node.innerHTML = activeItem.itemList.reduce((p, c) => {
            return p + c.num;
          }, 0);
        } else {
          node.innerHTML = 0;
        }
      }

    }, {
      path: 'activeItems',
      selector: '#activity-salesTip',

      action(node, activeItems) {
        const activeItem = get_func(activeItems, 'find').exec(({
          promotion
        }) => get(promotion, 'activitySeq') === get(activity, 'activitySeq'));
        const hasGiftPlugin = get_func(activeItems, 'findIndex').exec(({
          promotion
        }) => get(promotion, 'benefitType') === GIFT_PLUGIN_TYPE) > -1;

        if (!hasGiftPlugin) {
          const promotion = get(activeItem, 'promotion') || getDefualtPromotion();
          const {
            extMap
          } = promotion.promotionBenefitList[0];

          if (extMap && extMap.bannerText) {
            const config = getPromotionReminder(promotion);
            node.innerHTML = template(extMap.bannerText, config.params, {
              prefix: '{'
            });
            $(node).parents().removeClass('d-none');
          }
        }
      }

    }, {
      path: 'activeItems',
      selector: '#activity-cart',

      action(node) {
        $(node).removeClass('d-none');
        $(document.body).css({
          paddingBottom: '104px'
        });
      }

    }]);
    const cartInfo = SL_State.get(CartInfoKey);

    if (!cartInfo) {
      request({
        url: 'carts/cart',
        method: 'GET'
      }).then(res => {
        if (res.data) {
          SL_State.set(CartInfoKey, res.data);
        }
      });
    } else {
      render.run(cartInfo);
      $(document.body).css({
        paddingBottom: '104px'
      });
    }

    SL_State.on(CartInfoKey, value => {
      render.run(value);
    });
  };

  _exports.default = init;
  return _exports;
}();