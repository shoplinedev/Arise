window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-html.js'] = window.SLM['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-html.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const dayjs = window['dayjs']['default'];
  const { getSaleBackgroundHtml, javascriptTemplate, rgba } = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/helpers/index.js'];
  const getInfo = window['SLM']['theme-shared/biz-com/sales/discount-specified-sku/flash-sale/get-info.js'].default;

  const getPercentageHtml = (timeLimitActivity, type) => {
    const {
      salesPlugin,
      salesCustom
    } = getInfo(timeLimitActivity);
    const reg = /\$\{\s*([\w\\.\\[\]]+)\s*\}/g;
    const sold = salesPlugin.progressPlugin.saleNum;
    const total = salesPlugin.progressPlugin.totalNum;
    const color = salesPlugin.template;
    const templateStr = '<strong>${sold}</strong>';
    return `<div class="sales__flash-sale-percentage-container ${type === '1' ? 'sales__flash-sale-percentage-container--vertical' : 'sales__flash-sale-percentage-container--horizontal'} ${color === '1' ? 'sales__flash-sale-percentage-container--red' : 'sales__flash-sale-percentage-container--orange'}">
    ${type === '2' ? `<div class="sales__flash-sale-percentage-msg" style="color:${salesCustom.progressBarTextColor};">
      ${t('sales.general.sold', {
      count: javascriptTemplate(templateStr, reg, {
        sold
      })
    })}
      </div>` : ''}
    <div class="sales__flash-sale-percentage-percent-out" style="background-color: ${rgba(salesCustom.progressBarBgColor, 0.2)}">
      <div class="sales__flash-sale-percentage-percent" style="background-color:${salesCustom.progressBarBgColor}; width: ${(Number.isNaN(sold) ? 0 : sold) / (Number.isNaN(total) ? 0 : total) * 100}%;"></div>
    </div>
    ${type === '1' ? `<div class="sales__flash-sale-percentage-msg" style="color:${salesCustom.progressBarTextColor};">
      ${t('sales.general.sold', {
      count: javascriptTemplate(templateStr, reg, {
        sold
      })
    })}
      </div>` : ''}
  </div>`;
  };

  const getTimeOutHtml = (timeLimitActivity, type) => {
    const {
      salesCustom
    } = getInfo(timeLimitActivity);
    return `<div class="sales__flash-sale-timeout-container sales__flash-sale-timeout-container-hook ${type === '1' ? 'sales__flash-sale-timeout-container--red' : 'sales__flash-sale-timeout-container--orange'}"
    style="color:${salesCustom.countDownTextColor};${type === '1' ? `background-color: ${salesCustom.countDownBgColor}` : ''}">
    <div class="sales__flash-sale-timeout-time-item sales__flash-sale-timeout-first-time-item-hook" style="${type === '2' ? `background-color: ${salesCustom.countDownBgColor}` : ''}">
      <span class="sales__flash-sale-timeout-days-hook">00</span>
      ${type === '2' ? `<span>D</span>` : ''}
    </div>
    <span class='sales__flash-sale-timeout-first-dot-hook' style="${type === '2' ? `color: ${salesCustom.countDownTextColor}` : ''}">:</span>
    <div class="sales__flash-sale-timeout-time-item" style="${type === '2' ? `background-color:${salesCustom.countDownBgColor}` : ''}">
      <span class="sales__flash-sale-timeout-hours-hook">00</span>
      ${type === '2' ? `<span>H</span>` : ''}
    </div>
    <span style="${type === '2' ? `color: ${salesCustom.countDownTextColor}` : ''}">:</span>
    <div class="sales__flash-sale-timeout-time-item" style="${type === '2' ? `background-color: ${salesCustom.countDownBgColor}` : ''}">
      <span class="sales__flash-sale-timeout-minutes-hook">00</span>
      ${type === '2' ? '<span>M</span>' : ''}
    </div>
    <span style="${type === '2' ? `color:${salesCustom.countDownTextColor}` : ''}">:</span>
    <div class="sales__flash-sale-timeout-time-item" style="${type === '2' ? `background-color:${salesCustom.countDownBgColor}` : ''}">
      <span class="sales__flash-sale-timeout-seconds-hook">00</span>
      ${type === '2' ? '<span>S</span>' : ''}
    </div>
  </div>`;
  };

  function getFlashSaleHtml(timeLimitActivity) {
    const {
      salesPlugin,
      salesCustom,
      flashSaleBg
    } = getInfo(timeLimitActivity);

    const getSaleTitleHtml = () => {
      let str = '';

      if (salesPlugin.template === '2') {
        str += `<i>
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_365_13698)">
            <path d="M13.4641 0.997925H0.255371V14.2066H13.4641V0.997925Z" fill="white" fill-opacity="0.01" />
            <path
              d="M6.85924 13.1056C9.44288 13.1056 11.5373 11.0111 11.5373 
              8.42748C11.5373 5.84384 9.44288 3.74939 6.85924 
              3.74939C4.2756 3.74939 2.18115 5.84384 2.18115 8.42748C2.18115 11.0111 4.2756 13.1056 6.85924 13.1056Z"
              stroke="currentColor" stroke-width="0.990654" stroke-linejoin="round" />
            <path d="M5.20801 2.09851H8.51019" 
            stroke="currentColor" stroke-width="0.990654" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.85889 6.22595V8.42741" 
            stroke="currentColor" stroke-width="0.990654" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.06034 8.42761H6.85889" 
            stroke="currentColor" stroke-width="0.990654" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.85889 2.09851V3.19924" 
            stroke="currentColor" stroke-width="0.990654" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_365_13698">
              <rect width="13.2087" height="13.2087" fill="white" transform="translate(0.255371 0.997925)" />
            </clipPath>
          </defs>
        </svg>
      </i>`;
      }

      if (salesCustom.bannerText) {
        str += salesCustom.bannerText;
      } else {
        str += t('sales.general.flash_sale_text');
      }

      return `<span class="sales__flash-sale-title-msg" style="color:${salesCustom.bannerTextColor};">${str}</span>`;
    };

    const getSaleBottomHtml = () => {
      if (salesPlugin.countDownTimerPlugin.showCountDownTime && salesPlugin.progressPlugin.showProgressBar) {
        if (salesPlugin.progressPlugin.onlyShopHotSaleLabel) {
          return `<div class="sales__flash-sale-hot" style="color:${salesCustom.bannerTextColor};">${t('sales.general.hot_sale')}</div>`;
        }

        return getPercentageHtml(timeLimitActivity, '1');
      }

      return '';
    };

    const getRightContainerHtml = () => {
      if (salesPlugin.countDownTimerPlugin.showCountDownTime && salesPlugin.countDownTimerPlugin.endTime && dayjs().valueOf() < salesPlugin.countDownTimerPlugin.endTime) {
        return getTimeOutHtml(timeLimitActivity, salesPlugin.template);
      }

      if (salesPlugin.progressPlugin.showProgressBar) {
        if (salesPlugin.progressPlugin.onlyShopHotSaleLabel) {
          return `<div class="sales__flash-sale-hot" style="color:${salesCustom.bannerTextColor};">${t('sales.general.hot_sale')}</div>`;
        }

        return getPercentageHtml(timeLimitActivity, '2');
      }
    };

    const getSaleLimitHtml = () => {
      return `<div class="sales__flash-sale-limit">
      ${timeLimitActivity.userLimitedType !== 0 && timeLimitActivity.acquirePerUserLimit ? t('sales.general.flash_sale_tip', {
        count: timeLimitActivity.acquirePerUserLimit
      }) : ''}
    </div>`;
    };

    return timeLimitActivity.salesPlugin && timeLimitActivity.promotionSubType === 1 && timeLimitActivity.promotionType === 1 ? `<div
        class="sales__flash-sale-container sales__flash-sale-container-hook ${flashSaleBg ? '' : 'sales__flash-sale-container-bg--transparent'} ${salesPlugin.template === '1' ? 'sales__flash-sale-container--red' : 'sales__flash-sale-container--orange'} ${salesCustom.linkType !== 'none' ? 'cursor-pointer' : ''} "
        data-seq="${timeLimitActivity.activitySeq}">
        <div class="sales__flash-sale-count-down" style="${flashSaleBg ? `background: ${flashSaleBg}` : ''}">
          <i>${getSaleBackgroundHtml(salesCustom.bannerBgImg_mobile, salesCustom.bannerBgImg)}</i>
          <div class="sales__flash-sale-title-content">
            <p class="sales__flash-sale-title">
              ${getSaleTitleHtml()}
              ${getSaleBottomHtml()}
            </p>
          </div>
          ${getRightContainerHtml()}
        </div>
      </div>
      ${getSaleLimitHtml()}` : '';
  }

  _exports.default = getFlashSaleHtml;
  return _exports;
}();