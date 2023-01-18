window.SLM = window.SLM || {};

window.SLM['stage/blog/detail/index.js'] = window.SLM['stage/blog/detail/index.js'] || function () {
  const _exports = {};
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Form = window['SLM']['theme-shared/utils/form/index.js'].default;
  const { EMAIL_VALID_REGEXP } = window['SLM']['theme-shared/utils/emailReg.js'];
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const SEND_API = '/site/render/blogComment/addBlogComment';
  const toast = new Toast({
    content: 'content',
    className: 'blog-form__toast',
    duration: 5000
  });
  const fields = [{
    name: 'author',
    rules: [{
      message: t('blog.comment.name_empty'),
      required: true
    }]
  }, {
    name: 'email',
    value: '',
    rules: [{
      message: t('blog.comment.email_empty'),
      required: true
    }, {
      message: t('blog.comment.email_format'),
      pattern: EMAIL_VALID_REGEXP
    }]
  }, {
    name: 'content',
    value: '',
    rules: [{
      message: t('blog.comment.comment_empty'),
      required: true
    }]
  }];

  class BlogDetail {
    constructor(container) {
      this.submitBtn = container.find('.blog__form-submit');
      this.initSubmitBtn();
      this.commentForm = Form.takeForm(`blog-comment-form`);
      this.commentForm.init();
      this.commentForm.setFields(fields);
    }

    validateForm() {
      return new Promise((resolve, reject) => {
        this.commentForm.validateFields().then(res => {
          if (res.pass) {
            resolve();
          } else {
            reject(res);
          }
        });
      });
    }

    initSubmitBtn() {
      this.submitBtn.on('click', async event => {
        event.preventDefault();
        await this.validateForm();
        const contactData = this.commentForm.getFieldsValue();

        try {
          const {
            data
          } = await request.post(SEND_API, { ...contactData,
            blogId: this.commentForm.el.dataset.blogId
          });
          const commentConfig = +this.commentForm.el.dataset.commentConfig;

          if (commentConfig === 1) {
            toast.open(t(`blog.comment.submit_audit_tip`));
          } else {
            toast.open(t(`blog.comment.success`));
          }

          this.commentForm.setFields(fields);
          redirectBlogComment(data.id);
        } catch (error) {
          toast.open('Network Error');
        }
      });
    }

    onUnload() {
      this.commentForm.destroy();
      this.submitBtn.off('click');
    }

  }

  BlogDetail.type = 'blog-detail';

  function redirectBlogComment(commentId) {
    const url = new URL(window.location.href);
    const query = new URLSearchParams(window.location.search);
    const old = query.get('comment');

    if (old) {
      query.set('comment', `${old},${commentId}`);
    } else {
      query.set('comment', commentId);
    }

    window.location.href = `${url.origin + url.pathname}?${query.toString()}`;
  }

  registrySectionConstructor(BlogDetail.type, BlogDetail);
  return _exports;
}();