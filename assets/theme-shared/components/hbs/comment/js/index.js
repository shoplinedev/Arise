window.SLM = window.SLM || {};

window.SLM['theme-shared/components/hbs/comment/js/index.js'] = window.SLM['theme-shared/components/hbs/comment/js/index.js'] || function () {
  const _exports = {};
  const { SL_State } = window['SLM']['theme-shared/utils/state-selector.js'];
  const Toast = window['SLM']['theme-shared/components/hbs/shared/components/toast/index.js'].default;
  const Confirm = window['SLM']['theme-shared/components/hbs/shared/components/confirm/index.js'].default;
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const Review = window['SLM']['theme-shared/components/hbs/comment/js/review.js'].default;
  const ModalWithHtml = window['SLM']['theme-shared/components/hbs/shared/components/modal/full.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  !function () {
    let modal = null;

    function showConfirm(content = '', option) {
      new Confirm({
        content,
        ...option
      });
    }

    function showToast(content = '') {
      Toast.init({
        content,
        duration: 3000
      });
    }

    function requestUserAuthor() {
      return request.post('/product/detail/comment/isAllow', {
        productId: SL_State.get('productComment.spuSeq')
      });
    }

    function checkUserCanAdd() {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await requestUserAuthor();

          if (res.data.isAllow) {
            resolve();
          } else {
            showToast(t('products.comment.didnot_bought_cannot_reviewed'));
            reject();
          }
        } catch (e) {
          reject();

          if (e.code === 'CUS0401') {
            showConfirm(t('products.comment.didnot_bought_sign_in_first'), {
              okName: t('products.comment.sign_in'),

              okCallback() {
                window.location.href = '/user/signIn?redirectUrl=' + location.href;
              }

            });
          } else {
            Toast.init({
              content: t('products.comment.error_submit_again'),
              duration: 3000
            });
          }
        }
      });
    }

    function initEvent() {
      $(document.body).on('click', '.comment-leave-review-btn', async () => {
        const $btm = $('.comment-leave-review-btn');
        $btm.attr('disabled', true);

        try {
          await checkUserCanAdd();
        } catch (e) {
          $btm.attr('disabled', false);
          return;
        }

        $btm.remove();
        new Review({
          ele: $('.product-comment-leave-pc')[0]
        });
      });
      $(document.body).on('click', '.comment-leave-review-btn--mobile', async e => {
        const target = $(e.currentTarget);
        target.attr('disabled', true);

        try {
          await checkUserCanAdd();
          target.attr('disabled', false);
        } catch (e) {
          target.attr('disabled', false);
          return;
        }

        const modal = showModal();
        modal.show();
        const review = new Review({
          ele: $('.product-comment-mobile-content')[0]
        });
        const btn = modal.$modal.find('.product-comment-mobile-modal-header-btn');
        btn.on('click', () => {
          review.handleSubmit({
            beforePost() {
              btn.addClass('disabled').attr('disabled', true).css('pointer-events', 'none');
            },

            error() {
              btn.removeClass('disabled').attr('disabled', false).css('pointer-events', '');
            }

          });
        });
        modal.$modal.find('.product-comment-mobile-modal-header-back').on('click', () => {
          modal.hide();
        });
      });
    }

    function showModal() {
      return new ModalWithHtml({
        zIndex: 1005,
        containerClassName: '',
        closable: false,
        maskClosable: true,
        bodyClassName: '',
        content: `
        <div class="product-comment-mobile-modal">
          <div class="product-comment-mobile-modal-header">
            <svg class="product-comment-mobile-modal-header-back" width="28" height="28" viewBox="0 0 28 28" style="stroke: currentColor">
              <path d="M22.5 13.5H5M5 13.5L13 5.5M5 13.5L13 21.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="product-comment-mobile-modal-header-title">${t('products.comment.write_a_review')}</div>
            <div class="product-comment-mobile-modal-header-btn">
              ${t('products.comment.submit')}
            </div>
          </div>
          <div class="product-comment-mobile-content">
          </div>
        </div>
        `,
        destroyedOnClosed: true,
        afterClose: () => {}
      });
    }

    function init() {
      const $btn = $('.comment-leave-review-btn');
      const $mobile = $('.comment-leave-review-btn--mobile');
      if (!$btn.length && !$mobile.length) return;
      initEvent();
    }

    init();
  }();
  return _exports;
}();