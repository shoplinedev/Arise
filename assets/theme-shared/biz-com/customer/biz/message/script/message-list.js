window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/message/script/message-list.js'] = window.SLM['theme-shared/biz-com/customer/biz/message/script/message-list.js'] || function () {
  const _exports = {};
  const dayjs = window['dayjs']['default'];
  const { unescape } = window['html-escaper'];
  const { queryMessageInSite } = window['SLM']['theme-shared/biz-com/customer/service/message.js'];
  const { ESenderType } = window['SLM']['theme-shared/biz-com/customer/biz/message/const.js'];
  const PreviewImage = window['SLM']['theme-shared/biz-com/customer/biz/message/script/message-preview-modal.js'].default;

  function getMsgHtml(msgItem) {
    const {
      content,
      contentAttachmentUrl,
      senderType,
      createTime
    } = msgItem;
    const time = dayjs(createTime).format('MM/DD hh:mm');
    return `
    <div class="msg-item msg-${senderType === ESenderType.merchant ? 'self' : 'other'}">
      <div class="msg-head">
        <span class="msg-time">${time}</span>
      </div>
      <div class="msg-wrap">
        ${content ? `<p class="msg-text">${unescape(content)}</p>` : ''}
        ${contentAttachmentUrl ? `<div class="msg-image">
                <img src="${contentAttachmentUrl}" alt="img" />
                <div class="mask">
                </div>
              </div>` : ''}
      </div>
    </div>
  `;
  }

  class MessageList {
    constructor() {
      this.$container = $('#customer-message-list');
      this.$list = this.$container.find('.msg-list');
      this.previewImage = null;
      this.$loading = this.$container.find('.msg-loading');
      this.loading = false;
      this.length = 0;
      this.init();
    }

    init() {
      this.initEvent();
      this.getMsg();
      this.initScroll();
    }

    initEvent() {
      this.previewImage = new PreviewImage({
        id: 'customer-message-preview-modal'
      });
      this.$container.on('click', '.msg-image', e => {
        const src = $(e.currentTarget).find('img').attr('src');
        this.previewImage.show(src);
      });
    }

    initScroll() {
      this.$container.on('scroll', e => {
        if (this.loading) {
          return false;
        }

        const containerHeight = e.target.clientHeight;
        const listHeight = this.$list[0].clientHeight;

        if (e.target.scrollTop + containerHeight - 30 >= listHeight) {
          this.getMsg(this.length + 20);
        }
      });
    }

    getMsg(length = 20) {
      this.showLoading();
      queryMessageInSite({
        pageSize: length
      }).then(({
        data
      }) => {
        if (!data || !Array.isArray(data.list)) {
          return;
        }

        const {
          list
        } = data;

        if (list.length > this.length) {
          this.length = list.length;
          this.renderMsg(list);
        }
      }).finally(() => {
        this.hideLoading();
      });
    }

    renderMsg(list) {
      let msgHtml = '';
      list.forEach(msgItem => {
        msgHtml += getMsgHtml(msgItem);
      });
      this.$list.html(msgHtml);
    }

    addMessage(item) {
      const msgHtml = getMsgHtml(item);
      this.$list.prepend(msgHtml);
    }

    showLoading() {
      this.loading = true;
      this.$loading.removeClass('hidden');
    }

    hideLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
      this.$loading.addClass('hidden');
    }

  }

  _exports.default = MessageList;
  return _exports;
}();