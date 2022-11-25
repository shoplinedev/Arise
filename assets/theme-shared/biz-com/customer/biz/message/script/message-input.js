window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/message/script/message-input.js'] = window.SLM['theme-shared/biz-com/customer/biz/message/script/message-input.js'] || function () {
  const _exports = {};
  const { escape } = window['html-escaper'];
  const { sendMessageInSite } = window['SLM']['theme-shared/biz-com/customer/service/message.js'];
  const Upload = window['SLM']['theme-shared/biz-com/customer/commons/upload/index.js'].default;
  const { ESenderType, ESendStatus } = window['SLM']['theme-shared/biz-com/customer/biz/message/const.js'];
  const { reportMessageSubmit } = window['SLM']['theme-shared/biz-com/customer/reports/message.js'];

  class MessageInput {
    constructor({
      onSuccess
    }) {
      this.$container = $('#customer-message-input');
      this.$input = this.$container.find('.msg-input-area');
      this.$send = this.$container.find('.msg-input-send');
      this.$upload = this.$container.find('#customer-message-upload');
      this.$uploadPreview = this.$container.find('.msg-input-upload__preview');
      this.$uploadPreviewClose = this.$uploadPreview.find('.msg-input-upload__preview--close');
      this.loading = false;
      this.onSuccess = onSuccess;
      this.image = null;
      this.init();
    }

    clearImage() {
      this.image = null;
      this.$uploadPreview.hide();
      this.$upload.show();
    }

    init() {
      this.upload = new Upload({
        id: 'customer-message-input',
        onSuccess: images => {
          [this.image] = images;
          this.$upload.hide();
          this.$uploadPreview.show();
          this.$uploadPreview.css('background-image', `url(${this.image})`);
        }
      });
      this.$uploadPreviewClose.on('click', () => {
        this.clearImage();
      });
      this.$send.on('click', () => {
        const text = this.$input.val();
        const img = this.image;

        if (this.loading || !text && !img) {
          return false;
        }

        this.loading = true;
        reportMessageSubmit();
        const params = {
          content: text || undefined,
          attachmentUrl: img || undefined
        };
        sendMessageInSite(params).then(() => {
          const item = {
            id: new Date().toUTCString(),
            conversationId: '0',
            merchantId: 0,
            storeId: '0',
            userId: '0',
            content: text ? escape(text) : undefined,
            contentAttachmentUrl: img,
            senderType: ESenderType.user,
            sendStatus: ESendStatus.success,
            createTime: new Date().toUTCString()
          };
          this.$input.val('');
          this.clearImage();
          this.onSuccess && this.onSuccess(item);
        }).finally(() => {
          this.loading = false;
        });
      });
    }

  }

  _exports.default = MessageInput;
  return _exports;
}();