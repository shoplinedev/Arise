window.SLM = window.SLM || {};

window.SLM['product/detail/js/float-button.js'] = window.SLM['product/detail/js/float-button.js'] || function () {
  const _exports = {};

  class FloatButton {
    constructor({
      id
    }) {
      this.id = id;
      this.floatButton = $('.JProductButton_float');
      this.embedButton = $('.JProductButton_embed');
      this.buttonLayout = 'embed';
      this.triggerScrollHeight = 0;
      this.initFloatButton();
      this.setFloatButtonPosition();
      this.setFloatButtonPlaceholder();
      this.bindFloatButtonEvent();
    }

    initFloatButton() {
      this.buttonLayout = $(`#product-button-list_${this.id}`).data('buy-button-layout');
      $(window).on('resize', () => {
        this.setFloatButtonPosition();
        this.setFloatButtonPlaceholder();
      });
    }

    setFloatButtonPosition() {
      const footerNav = $('#shopline-section-footer-tab .footer-tab');
      const offsetBottom = footerNav.length ? footerNav.height() : 0;
      this.floatButton.css('bottom', offsetBottom);
    }

    setFloatButtonPlaceholder() {
      const floatBtnHeight = this.floatButton.outerHeight();
      const floatButtonPlaceholder = $('#product-float-button-placehloder');

      if (floatButtonPlaceholder.length > 0) {
        floatButtonPlaceholder.css('height', `${floatBtnHeight}px`);
      } else {
        $('body').append(`<div id="product-float-button-placehloder" class="d-md-none" style="height: ${floatBtnHeight}px"></div>`);
      }
    }

    bindFloatButtonEvent() {
      if (this.buttonLayout === 'float') {
        this.floatButton.addClass('show');
      } else if (this.buttonLayout === 'both') {
        $(window).on('scroll', this.scrollWorker.bind(this));
      }
    }

    scrollWorker() {
      requestAnimationFrame(() => {
        this.triggerScrollHeight = this.embedButton.length ? this.embedButton.offset().top : 0;
        const buffer = 30;

        if (window.scrollY > this.triggerScrollHeight + buffer) {
          this.floatButton.addClass('show');
        } else {
          this.floatButton.removeClass('show');
        }
      });
    }

    destory() {
      $(window).off('resize', this.setFloatButtonPosition.bind(this));
      $(window).off('scroll', this.scrollWorker.bind(this));
    }

    inFloatButton($btn) {
      return $btn.hasClass('JFloatButton_AddToCart');
    }

  }

  _exports.default = FloatButton;
  return _exports;
}();