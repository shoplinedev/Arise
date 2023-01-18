window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/order/detail/voucher_upload.js'] = window.SLM['theme-shared/biz-com/customer/biz/order/detail/voucher_upload.js'] || function () {
  const _exports = {};
  const { v4: uuid } = window['uuid'];
  const { SlAliyunOss } = window['@yy/sl-http-upload'];
  const CurrencyUtil = window['SLM']['theme-shared/utils/newCurrency/index.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const modalFactory = window['@sl/ec-preview-voucher']['default'];
  const LoggerService = window['@yy/sl-theme-shared']['/utils/logger/sentry'].default;
  const { Status } = window['@yy/sl-theme-shared']['/utils/logger/sentry'];
  const { renderPdf } = window['SLM']['theme-shared/utils/renderPdf.js'];
  const { getFileType } = window['SLM']['theme-shared/utils/getFileType.js'];
  const { Owner, Action } = window['SLM']['theme-shared/biz-com/customer/biz/order/detail/loggerReport.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const { uploadVoucher } = window['SLM']['theme-shared/biz-com/customer/service/orders.js'];
  const helper = window['SLM']['theme-shared/components/hbs/shared/utils/helper.js'].default;
  const { formatTime } = window['SLM']['theme-shared/biz-com/customer/biz/order/utils.js'];
  const sentryLogger = LoggerService.pipeOwner(Owner.OrderDetail);
  const {
    createMobilePreviewVoucher,
    createDesktopPreviewVoucher
  } = modalFactory;

  function getPageState(stateName) {
    return window.SL_State.get(stateName);
  }

  const ErrorCodeEnum = {
    VOUCHER_LIMIT_CODE: 'TCTQORDER_VOUCHER_LIMIT_ERROR',
    KBANK_SERVICE_TIMEOUT_ERROR: 'TCTQKBANK_SERVICE_TIMEOUT_ERROR',
    ORDER_NOT_EXIST_ERROR: 'TCTQORDER_NOT_EXIST_ERROR'
  };
  const orderSeq = getPageState('customer.order.basicInfo.orderSeq');
  const orderSeqMark = getPageState('customer.order.basicInfo.orderMark');

  class VoucherUpload {
    constructor(ele) {
      this.aliyunOss;
      this.aliyunOssPdf;
      this.voucherInfo;
      this.file;
      this.eleWrapper = $(ele);
      this.inputEle = $(ele).find('input');
    }

    init() {
      this.bindEventListener();
    }

    static getOssUploader() {
      if (!VoucherUpload.aliyunOss) {
        VoucherUpload.aliyunOss = new SlAliyunOss({
          businessType: 'payCertificate',
          fileType: 'IMAGE',
          client: 'global',
          maxSize: 20,
          limitPx: 0
        });
      }

      return VoucherUpload.aliyunOss;
    }

    static getOssUploaderPdf() {
      if (!VoucherUpload.aliyunOssPdf) {
        VoucherUpload.aliyunOssPdf = new SlAliyunOss({
          businessType: 'payCertificate',
          fileType: 'FILE',
          client: 'global',
          maxSize: 20,
          limitPx: 0
        });
      }

      return VoucherUpload.aliyunOssPdf;
    }

    async uploadPdfToServer() {
      const uploadPdfResult = await VoucherUpload.getOssUploaderPdf().upload({
        fileList: [{
          file: this.file,
          uid: uuid()
        }]
      });
      const uploadResultOnePage = uploadPdfResult && uploadPdfResult[0];
      const res = uploadResultOnePage && uploadResultOnePage.data && uploadResultOnePage.data[0];

      if (res && res.success) {
        sentryLogger.info('pdf上传成功', {
          action: Action.Upload,
          status: Status.Success
        });
        renderPdf(this.file, async blob => {
          const newBlob = blob;
          newBlob.name = `${this.file.name}.jpeg`;
          newBlob.uuid = uuid();
          const uploadResult = await VoucherUpload.getOssUploader().upload({
            fileList: [{
              file: newBlob
            }]
          });
          const uploadResultOne = uploadResult && uploadResult[0];
          const data = uploadResultOne && uploadResultOne.data && uploadResultOne.data[0];

          if (data && data.success) {
            sentryLogger.info('pdf图片上传成功', {
              action: Action.Upload,
              status: Status.Success
            });
            const result = await uploadVoucher({
              orderSeq,
              orderSeqMark,
              url: data.url,
              voucherFileUrl: res.url,
              fileType: getFileType(this.file.type)
            });
            this.voucherInfo = result && result.data || {};
            this.uploadEffect();
            this.reset();
            return;
          }

          console.error('uploadImageToServer', data, uploadResult);
          throw new Error('upload failed');
        });
      }
    }

    async uploadImageToServer() {
      sentryLogger.info('图片上传开始', {
        action: Action.Upload,
        status: Status.Start
      });
      const uploadResult = await VoucherUpload.getOssUploader().upload({
        fileList: [{
          file: this.file,
          uid: uuid()
        }]
      });
      const uploadResultOne = uploadResult && uploadResult[0];
      const data = uploadResultOne && uploadResultOne.data && uploadResultOne.data[0];

      if (data && data.success) {
        sentryLogger.info('图片上传成功', {
          action: Action.Upload,
          status: Status.Success
        });
        const result = await uploadVoucher({
          orderSeq,
          orderSeqMark,
          url: data.url,
          fileType: getFileType(this.file.type)
        });
        this.voucherInfo = result && result.data || {};
        this.uploadEffect();
        this.reset();
        return;
      }

      console.error('uploadImageToServer', data, uploadResult);
      throw new Error('upload failed');
    }

    updateUploadDisplay() {
      const tradeCheckoutPaymentVoucherTextDom = $('#tradeCheckoutPaymentVoucherText');

      if (tradeCheckoutPaymentVoucherTextDom) {
        tradeCheckoutPaymentVoucherTextDom.css('display', 'block');
      }

      const paymentUploadNumDom = $('#tradeCheckoutPaymentUploadNum');

      if (paymentUploadNumDom) {
        const uploadNum = paymentUploadNumDom.attr('data-num') || 0;
        const num = Number(uploadNum) + 1;
        paymentUploadNumDom.text(t('cart.order.paymentVoucher.uploadAmount', {
          num
        }));
        paymentUploadNumDom.attr('data-num', num);
      }
    }

    uploadEffect() {
      this.updateUploadDisplay();
      this.displayPreviewModule();
      this.removeUpload();
      this.addUploadEntrance();
    }

    async upload() {
      if (this.file && this.file.type === 'application/pdf') {
        await this.uploadPdfToServer();
      } else {
        await this.uploadImageToServer();
      }
    }

    paymentVoucherErrorFn(blockType) {
      const paymentVoucherError = $('#tradeCheckoutPaymentVoucherError');

      if (paymentVoucherError) {
        paymentVoucherError.css('display', blockType);
      }
    }

    bindEventListener() {
      this.inputEle.on('change', async () => {
        sentryLogger.info('凭证数据更改', {
          action: Action.Change
        });
        const {
          files
        } = this.inputEle && this.inputEle.get(0) || {};
        this.file = files[0];
        const ACCEPT = ['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/webp', 'image/svg', '.raw', 'application/pdf'];

        if (this.file && this.file.size > 20 * 1024 * 1024 || !ACCEPT.includes(this.file && this.file.type)) {
          this.paymentVoucherErrorFn('block');
          this.file = null;
          this.inputEle.get(0).value = null;
          return;
        }

        this.toggleLoading();

        try {
          await this.upload();
        } catch (error) {
          this.reset();
          sentryLogger.warn('凭证上传失败', {
            action: Action.Upload,
            status: Status.Failure
          });
          console.error('bindEventListener error', error);

          switch (error.code) {
            case ErrorCodeEnum.VOUCHER_LIMIT_CODE:
              Toast.init({
                content: t('order.checkout_order.voucher_amount_limit')
              });
              setTimeout(() => {
                window.location.reload();
              }, 300);
              break;

            case ErrorCodeEnum.ORDER_NOT_EXIST_ERROR:
              Toast.init({
                content: t('cart.order.invalid_order_number')
              });
              break;

            case ErrorCodeEnum.KBANK_SERVICE_TIMEOUT_ERROR:
              Toast.init({
                content: t('cart.order.try_later')
              });
              break;

            default:
              Toast.init({
                content: t('cart.order.try_again')
              });
              break;
          }

          this.inputEle.get(0).value = null;
        }
      });
    }

    reset() {
      this.paymentVoucherErrorFn('none');
      this.toggleLoading();
    }

    toggleLoading() {
      this.eleWrapper.toggleClass('sl-component-loading');
    }

    generateUploadModule() {
      const template = `<div class="trade-file-upload icon-style" id="trade-file-upload_1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45403 11.4464C1.83271 11.4464 1.32903 11.9501 1.32903 12.5714C1.32903 13.1927 1.83271 13.6964 2.45403 13.6964L10.8751 13.6964L10.8751 22.1172C10.8751 22.7386 11.3788 23.2422 12.0001 23.2422C12.6214 23.2422 13.1251 22.7386 13.1251 22.1172L13.1251 13.6964L21.5457 13.6964C22.167 13.6964 22.6707 13.1927 22.6707 12.5714C22.6707 11.9501 22.167 11.4464 21.5457 11.4464L13.1251 11.4464L13.1251 3.0256C13.1251 2.40428 12.6214 1.9006 12.0001 1.9006C11.3788 1.9006 10.8751 2.40428 10.8751 3.0256L10.8751 11.4464L2.45403 11.4464Z" fill="currentColor"/>
        </svg>
        <input type="file" name="files" accept="image/gif, image/jpeg, image/png, image/bmp, image/webp, image/svg, application/pdf">
        <svg class="uploading-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.85 9A5.85 5.85 0 0 0 9 3.15V.45A8.55 8.55 0 1 1 .45 9h2.7a5.85 5.85 0 0 0 11.7 0Z" fill="currentColor"/>
        </svg>
    </div>`;
      return $(template);
    }

    parseVoucherInfoItemByStatus() {
      const {
        uploadTime,
        amount,
        transRef,
        receiverAccount,
        currency
      } = this.voucherInfo || {};
      const result = [`<div class="trade-transfer-voucher_info-item">
        <span class="trade-transfer-voucher_info-item-key">${t('order.checkout_order.upload_time')}:</span>
        <span class="trade-transfer-voucher_info-item-value">${formatTime(uploadTime)}</span>
      </div>`, `<div class="trade-transfer-voucher_info-item">
        <span class="trade-transfer-voucher_info-item-key">${t('order.checkout_order.reference_number')}:</span>
        <span class="trade-transfer-voucher_info-item-value">${transRef || '-'}</span>
      </div>`];

      if (receiverAccount) {
        result.push(` <div class="trade-transfer-voucher_info-item">
      <span class="trade-transfer-voucher_info-item-key">${t('order.checkout_order.receiver_account')}:</span>
      <span class="trade-transfer-voucher_info-item-value">${receiverAccount}</span>
    </div>`);
      }

      if (amount) {
        result.push(`<div class="trade-transfer-voucher_info-item">
      <span class="trade-transfer-voucher_info-item-key">${t('order.checkout_order.pay_amount')}:</span>
      <span class="trade-transfer-voucher_info-item-value trade-transfer-voucher_info-item-value-amount">${currency ? CurrencyUtil.format(amount * 100, {
          code: currency
        }) : amount}</span>
    </div>`);
      }

      return result.join('\n');
    }

    generatePreviewModule(url) {
      const template = `<div class="trade-transfer-voucher">
        <div class="trade-transfer-voucher_img">
            <img src="${url}" alt="transfer voucher">
        </div>
    </div>`;
      return $(template);
    }

    bindVoucherPreview(previewModule) {
      const imgDom = previewModule.find('img');
      imgDom && imgDom.on('click', e => {
        sentryLogger.info('凭证图片预览', {
          action: Action.Preview
        });
        const {
          uploadTime,
          amount,
          receiverAccount,
          currency,
          fileType
        } = this.voucherInfo || {};
        const url = e && e.target && e.target.src;
        const data = [{
          label: `<p class="__preview-voucher-data-box-item-title">${t('order.detail.orderstatus.detail')}</p>`,
          value: ''
        }, {
          label: t('order.checkout_order.upload_time'),
          value: formatTime(uploadTime)
        }, {
          label: t('cart.order.paymentVoucher.format'),
          value: fileType || '-'
        }];

        if (receiverAccount) {
          data.push({
            label: t('order.checkout_order.receiver_account'),
            value: receiverAccount
          });
        }

        if (amount) {
          data.push({
            label: t('order.checkout_order.pay_amount'),
            value: `
            <div class="trade-file-upload_value">
              ${currency ? CurrencyUtil.format(amount * 100, {
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

    displayPreviewModule() {
      const previewModule = this.generatePreviewModule(this.voucherInfo.voucherUrl);
      this.bindVoucherPreview(previewModule);
      $('.trade-transfer-voucher-wrapper').append(previewModule);
    }

    removeUpload() {
      this.eleWrapper.remove();
    }

    addUploadEntrance() {
      const imageElements = $('.trade-transfer-voucher');

      if (imageElements.length >= 5) {
        $('.trade-checkout-payment-voucher_desc').css('display', 'none');
        return;
      }

      const uploadModule = this.generateUploadModule();
      $('.trade-transfer-voucher-wrapper').append(uploadModule);
      new VoucherUpload(uploadModule[0]).init();
    }

  }

  _exports.default = VoucherUpload;
  return _exports;
}();