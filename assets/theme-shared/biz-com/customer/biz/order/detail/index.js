window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/index.js'] || function () {
  const _exports = {};
  const previewImage = window['@yy/sl-pod-preview-image']['default'];
  const CurrencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const modalFactory = window['@sl/ec-preview-voucher']['default'];
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const get = window['lodash']['get'];
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const LoggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { Owner, Action } = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/loggerReport.js'];
  const { reportPageView, cidMap, customComponentMap } = window['SLM']['theme-shared/biz-com/customer/reports/orders.js'];
  const { bindTrackBtn } = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/bindTrack.js'];
  const renderInformation = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/information.js'].default;
  const handlePayModal = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/payModal.js'].default;
  const { renderBillingAddress } = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/payment.js'];
  const renderStatusBar = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/statusBar.js'].default;
  const { initCurrencyChangeListener } = window['SLM']['theme-shared/biz-com/customer/biz/order/utils.js'];
  const VoucherUpload = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/voucher_upload.js'].default;
  const helper = window['SLM']['theme-shared/components/hbs/shared/utils/helper.js'].default;
  const sentryLogger = LoggerService.pipeOwner(Owner.OrderDetail);
  const {
    createMobilePreviewVoucher,
    createDesktopPreviewVoucher
  } = modalFactory;

  class CustomerOrderDetail {
    init() {
      reportPageView(cidMap.customer, {
        custom_component: customComponentMap.orderDetail
      });
      initCurrencyChangeListener('.customer-order-detail');
      bindTrackBtn();
      renderInformation();
      renderStatusBar();
      $(document).on('DOMContentLoaded', () => {
        this.bindEvent();
        renderBillingAddress();
        this.initTransferVoucherModule();
      });
      sentryLogger.info('订单详情初始化', {
        action: Action.Init,
        data: {
          orderList: SL_State.get('customer.order')
        }
      });
    }

    initTransferVoucherModule() {
      const uploadElements = $('.trade-file-upload');
      uploadElements.each((_, ele) => {
        new VoucherUpload(ele).init();
      });
      $('.trade-transfer-voucher_show-more').on('click', () => {
        $('.trade-transfer-voucher').removeClass('hide');
        $('.trade-file-upload').last().removeClass('hide');
        $('.trade-transfer-voucher_limit-tip').removeClass('hide');
        $('.trade-transfer-voucher_show-more').remove();
      });
      $('.trade-transfer-voucher_img').find('img').on('click', e => {
        const url = get(e, 'target.src', undefined);
        const {
          time,
          amount,
          receiver,
          currency,
          fileType
        } = get(e, 'target.dataset', undefined) || {};
        const data = [{
          label: `<p class="__preview-voucher-data-box-item-title">
            ${t('order.detail.orderstatus.detail')}</p>`,
          value: ''
        }, {
          label: t('order.checkout_order.upload_time'),
          value: time
        }, {
          label: t('cart.order.paymentVoucher.format'),
          value: fileType || '-'
        }];

        if (receiver) {
          data.push({
            label: t('order.checkout_order.receiver_account'),
            value: receiver
          });
        }

        if (amount) {
          data.push({
            label: t('order.checkout_order.pay_amount'),
            value: `<div class="trade-file-upload_value">
              ${currency ? CurrencyUtil.format(Number(amount) * 100, {
              code: currency
            }) : amount}
              </div>`
          });
        }

        if (url) {
          const options = {
            imgUrls: [url],
            data,
            okText: t('cart.order.payment_voucher_confirmation')
          };
          const isMobile = helper && helper.getPlatform() === 'mobile';
          const voucherModal = isMobile ? createMobilePreviewVoucher(options) : createDesktopPreviewVoucher(options);
          voucherModal.show();
        }
      });
    }

    bindEvent() {
      $('.goods-item-good-content').on('click', '.goods-item-good-preview', function imgPreview() {
        const data = $(this).data();

        if (data && data.urls) {
          const urls = data.urls.split(',') || [];
          previewImage({
            current: '',
            urls
          });
        }
      });
      $('.content-pay-value').on('click', '.content-pay-value-status-detail', function showPay() {
        const data = $(this).data();
        sentryLogger.info('支付弹窗信息打开', {
          action: Action.Click,
          data
        });
        handlePayModal(data);
      });
    }

  }

  _exports.default = CustomerOrderDetail;
  return _exports;
}();