window.SLM = window.SLM || {};

window.SLM['theme-shared/biz-com/customer/biz/message/script/message-preview-modal.js'] = window.SLM['theme-shared/biz-com/customer/biz/message/script/message-preview-modal.js'] || function () {
  const _exports = {};

  class PreviewImage {
    constructor({
      id
    }) {
      this.id = id;
      this.$modal = $(`#${this.id}`);
      this.$image = this.$modal.find('img');
      this.init();
    }

    init() {
      this.$modal.on('click', () => {
        this.hide();
      });
    }

    show(src) {
      this.$image.attr('src', src);
      this.$modal.show();
      setTimeout(() => {
        this.$modal.addClass('fade-in');
      }, 0);
    }

    hide() {
      this.$modal.removeClass('fade-in');
      setTimeout(() => {
        this.$modal.hide();
      }, 300);
    }

  }

  _exports.default = PreviewImage;
  return _exports;
}();