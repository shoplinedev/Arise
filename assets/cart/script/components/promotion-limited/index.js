window.SLM = window.SLM || {};

window.SLM['cart/script/components/promotion-limited/index.js'] = window.SLM['cart/script/components/promotion-limited/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { toastTypeEnum } = window['SLM']['cart/script/domain/model/skuPromotionVerify.js'];
  const { cartLimitedEnum } = window['SLM']['cart/script/constant/stockType.js'];

  class PromotionLimited {
    constructor(props) {
      this.state = { ...props
      };
    }

    shouldRender() {
      const {
        errorList
      } = this.state;
      return errorList.length && ['0111', '0112'].includes(errorList[0]);
    }

    getComponent() {
      if (!cartLimitedEnum.ACTIVE.includes(this.state.maxPurchaseReasonCode)) {
        return '';
      }

      const {
        errorList
      } = this.state;

      if (!this.shouldRender()) {
        return '';
      }

      const errorText = {
        '0111': 1,
        '0112': 2
      };
      return `<div>${t(`cart.${toastTypeEnum.activeStockLimit}${errorText[errorList[0]]}`, {
        stock: this.state.maxPurchaseTotalNum > 0 ? this.state.maxPurchaseTotalNum : '0'
      })}</div>`;
    }

    render() {
      this.component = this.getComponent();
      return this.component;
    }

  }

  _exports.default = PromotionLimited;
  return _exports;
}();