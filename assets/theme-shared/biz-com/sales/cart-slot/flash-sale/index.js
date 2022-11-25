window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/cart-slot/flash-sale/index.js'] = window.SLM['theme-shared/biz-com/sales/cart-slot/flash-sale/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const countdown = window['SLM']['theme-shared/utils/countdown.js'].default;
  const getCartItemId = window['SLM']['theme-shared/biz-com/sales/cart-slot/helpers/getCartItemId.js'].default;

  const render = (item, ele, isMiniCart, endTime) => {
    const run = () => {
      setTimeout(() => {
        const flashSaleCon = ele.querySelector('.flash-sale__container');
        const timerEle = ele.querySelector('.flash-sale__count-down');

        if (flashSaleCon && timerEle && Date.now() < endTime) {
          countdown(endTime, ([d, h, m, s], interval) => {
            const dayText = d > 0 ? `${d}${d > 1 ? t('sales.flash.days') : t('sales.flash.day')} ` : '';
            timerEle.innerHTML = `${dayText}${h}:${m}:${s}`;

            if (interval <= 0) {
              flashSaleCon.hide();
            }
          }, {
            id: `flashSale_${getCartItemId(item)}_${isMiniCart ? 'mini' : 'main'}`,
            hasDay: true,
            hasMillisecond: false,
            interval: 1000
          });
        } else {
          flashSaleCon.hide();
        }
      });
    };

    return {
      html: `
      <span class="flash-sale flash-sale__bg flash-sale__font flash-sale__container notranslate">
        <span>Flash Sale</span>: <span class="flash-sale__count-down"></span>
      </span>`,
      run
    };
  };

  _exports.default = render;
  return _exports;
}();