window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/message/index.js'] = window.SLM['theme-shared/biz-com/customer/biz/message/index.js'] || function () {
  const _exports = {};
  const MessageList = window['SLM']['theme-shared/biz-com/customer/biz/message/script/message-list.js'].default;
  const MessageInput = window['SLM']['theme-shared/biz-com/customer/biz/message/script/message-input.js'].default;
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const { SIGN_IN } = window['SLM']['theme-shared/biz-com/customer/constant/url.js'];
  const { reportMessageHeartBeat } = window['SLM']['theme-shared/biz-com/customer/reports/message.js'];
  const { redirectTo } = window['SLM']['theme-shared/biz-com/customer/helpers/format.js'];

  class Message {
    constructor() {
      this.messageList = null;
      this.init();
    }

    init() {
      const isLogin = SL_State.get('request.is_login');

      if (!isLogin) {
        window.location.href = redirectTo(SIGN_IN);
      }

      reportMessageHeartBeat(10000);
      this.initMessageList();
      this.initMessageInput();
    }

    initMessageInput() {
      this.messageInput = new MessageInput({
        onSuccess: item => {
          this.messageList && this.messageList.addMessage(item);
        }
      });
    }

    initMessageList() {
      this.messageList = new MessageList();
    }

  }

  _exports.default = Message;
  return _exports;
}();