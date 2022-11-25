window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/list/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/list/index.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const ScrollPagination = window['SLM']['theme-shared/utils/scrollPagination/index.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const { convertFormat } = window['SLM']['theme-shared/utils/newCurrency/CurrencyConvert.js'];
  const LoggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { Status } = window['@yy/sl-theme-shared']['/utils/logger/sentry'];
  const { Owner, Action } = window['SLM']['theme-shared/biz-com/customer/biz/order/list/loggerReport.js'];
  const { getOrderList } = window['SLM']['theme-shared/biz-com/customer/service/orders.js'];
  const { cidMap, reportPageView, reportPageLeave } = window['SLM']['theme-shared/biz-com/customer/reports/orders.js'];
  const { bizOrderStatusEnum, DeliveryStatusI18n, PayStatusI18n } = window['SLM']['theme-shared/biz-com/customer/biz/order/constants.js'];
  const { initCurrencyChangeListener } = window['SLM']['theme-shared/biz-com/customer/biz/order/utils.js'];
  const sentryLogger = LoggerService.pipeOwner(Owner.OrderList);
  const isMobile = SL_State.get('request.is_mobile');
  const listContainerCls = '.customer-order-list';

  const jump = ({
    pageType,
    id
  }) => {
    let href = '';

    switch (pageType) {
      case 'plp':
        href = `${window.location.origin}/collections`;
        break;

      case 'detail':
        href = `${window.location.origin}/user/orders/${id}`;
        break;

      default:
        break;
    }

    reportPageLeave(cidMap.customer, {
      page_dest: href
    });
    window.location.href = href;
  };

  class CustomerOrderList {
    constructor() {
      const {
        pageNum,
        pageSize,
        lastPage
      } = SL_State.get('customer.orders') || {};

      if (!pageNum) {
        this._isEmpty = true;
      } else {
        this.requestParams = {
          pageNum: pageNum + 1,
          pageSize
        };
      }

      this._isLastPage = lastPage;
      sentryLogger.info('订单列表初始化', {
        action: Action.Init,
        data: {
          orderList: SL_State.get('customer.orders')
        }
      });
    }

    getOrderStatusInfo(data) {
      const {
        bizPayStatus,
        bizDeliveryStatus
      } = data;
      const pcStatus = `
    <div class="pay-status-pc ${isMobile ? 'hide' : ''}">
        <p class="status-box">
          <span class="svg-wrapper">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect x="2" y="3.5" width="12" height="10" rx="0.5" stroke="currentColor" />
                <path d="M2 6.5H14" stroke="currentColor" />
                <path d="M8.6665 11.8335C8.6665 11.2812 9.11422 10.8335 9.6665 10.8335H11.6665C12.2188 10.8335 12.6665 11.2812 12.6665 11.8335H8.6665Z" fill="currentColor" />
              </g>
            </svg>
          </span>
          <span class="status-info">
            ${PayStatusI18n[bizPayStatus]}
          </span>
        </p>
        <p class="status-box">
          <span class="svg-wrapper">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M2 12V7.07819C2 6.59438 2.26208 6.14853 2.6848 5.91321L5.85714 4.14721V3.33333C5.85714 2.59695 6.4541 2 7.19048 2H12.6667C13.403 2 14 2.59695 14 3.33333V12"
                  stroke="currentColor" />
                <path d="M8 4V7H4" stroke="currentColor" />
                <circle cx="5.5" cy="12.5" r="1.5" stroke="currentColor" />
                <circle cx="10.5" cy="12.5" r="1.5" stroke="currentColor" />
              </g>
            </svg>
          </span>
          <span class="status-info">
            ${DeliveryStatusI18n[bizDeliveryStatus]}
          </span>
        </p>
      </div>
    `;
      return `
    ${pcStatus}
    <div class="pay-status-mobile ${!isMobile ? 'hide' : ''}">
      <span>${PayStatusI18n[bizPayStatus]}</span>
      <span class="point"></span>
      <span>${DeliveryStatusI18n[bizDeliveryStatus]}</span>
    </div>`;
    }

    getSkuItem(data) {
      const {
        orderSeq,
        appOrderSeq,
        createTime,
        bizOrderStatus,
        productImage,
        productNum,
        orderAmount
      } = data;
      const statusContent = this.getOrderStatusInfo(data);
      const header = `
      <div class="customer-order-sku-item-header">
      <div>
        <span class="seq">${t('cart.order.sequence', {
        id: appOrderSeq
      })}</span>
        <div class="create-time">
          <span>${t('cart.order.time')}</span>
          <span>${dayjs(createTime).format('YYYY-MM-DD HH:mm A')}</span>
        </div>
      </div>
      ${+bizOrderStatus === bizOrderStatusEnum.CANCELED ? `<span class="status cancelled">
              ${t('cart.order.canceled')}
            </span>` : ''}
    </div>`;
      const prodNumsTotalTxt = t('cart.order.total_amount', {
        transPackages: productNum
      });
      const html = `
    <div class="customer-order-sku-item" data-id="${orderSeq}">
        <div class="wrapper">
          ${header}
          <div class="customer-order-sku-item-content">
            <div class="item-info">
              <div class="sku-item-image">
                ${productImage ? `<img class="lozad" data-src="${productImage}" />` : `<div class="sku-item-image-fallback"></div>`}
              </div>

              <div class="product-total">
                <span>${prodNumsTotalTxt}</span>
              </div>
            </div>
            
            ${statusContent}
            <div class="total-info">
              <p>
                <span>${t('cart.payment.total')}</span>
                <span class="total notranslate" data-amount="${orderAmount}">${convertFormat(orderAmount || 0)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
      return html;
    }

    getLastPageDom() {
      return `
    <p class='no-more'>- ${t('cart.order.no_more_info')} -</p>
    `;
    }

    bindEvent() {
      $('.customer-order-list').on('click', '.customer-order-sku-item', function goDetail() {
        jump({
          pageType: 'detail',
          id: $(this).data('id')
        });
      });
      $('.customer-order-list').on('click', '.go-shipping-btn', function goShipping() {
        jump({
          pageType: 'plp'
        });
      });
    }

    formatTime() {
      const dateEles = $(listContainerCls).find('[data-date-format]');
      dateEles.each(function () {
        const {
          date,
          dateFormat
        } = $(this).data();
        $(this).show().text(dayjs(date).format(dateFormat || 'YYYY-MM-DD HH:mm A'));
      });
    }

    init() {
      reportPageView(cidMap.customer);
      $(document).on('DOMContentLoaded', () => {
        this.bindEvent();
        initCurrencyChangeListener(listContainerCls);
        this.formatTime();

        if (!this._isEmpty) {
          new ScrollPagination({
            load: async () => {
              if (this._isLastPage) {
                return {
                  noMore: true
                };
              }

              let result = '';

              try {
                const res = await getOrderList(this.requestParams);

                if (!res.success) {
                  console.error(`[订单列表接口]请求失败，请求入参为${JSON.stringify(this.requestParams)}`);
                  return;
                }

                const {
                  list,
                  lastPage
                } = res.data || {};

                for (let i = 0; i < list.length; i += 1) {
                  result += this.getSkuItem(list[i]);
                }

                this.requestParams.pageNum += 1;

                if (lastPage) {
                  this._isLastPage = lastPage;
                  result += this.getLastPageDom();
                }

                $(`${listContainerCls} .main-wrapper`).append(result);
                window.lozadObserver && window.lozadObserver.observe();
              } catch (err) {
                sentryLogger.error('订单列表获取异常', {
                  action: Action.Scroll,
                  Status: Status.Failure,
                  error: err,
                  data: {
                    requestParams: this.requestParams
                  }
                });
                console.error(err);
              }

              return {
                noMore: false
              };
            },
            listContainer: listContainerCls,
            loadingContainer: `${listContainerCls} .load-more .loading-container`
          });
        }
      });
    }

  }

  _exports.default = CustomerOrderList;
  return _exports;
}();