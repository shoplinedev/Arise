window.SLM = window.SLM || {};

window.SLM['stage/faqs/index.js'] = window.SLM['stage/faqs/index.js'] || function () {
  const _exports = {};
  const { registrySectionConstructor } = window['SLM']['theme-shared/utils/sectionsLoad/index.js'];

  class Faq {
    constructor(container) {
      this.config = {
        namespace: 'stage:faq'
      };
      this.bindBlockCollapse(container);
    }

    bindBlockCollapse(container) {
      container.on('click', '.faq__collapse-title', e => {
        let $target = $(e.target);

        if (e.target.classList.value.indexOf('faq__collapse-icon') > -1) {
          $target = $target.parent();
        }

        const $wrapper = $target.next();
        const $content = $wrapper.find('.faq__collapse-content');

        if ($wrapper.hasClass('active')) {
          $target.removeClass('active');
          $wrapper.removeClass('active');
          $wrapper.height(0);
        } else {
          $wrapper.addClass('active');
          $target.addClass('active');
          $wrapper.height($content.outerHeight(true) + 1);
        }
      });
    }

  }

  Faq.type = 'faqs';
  registrySectionConstructor(Faq.type, Faq);
  return _exports;
}();