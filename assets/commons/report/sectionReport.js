window.SLM = window.SLM || {};

window.SLM['commons/report/sectionReport.js'] = window.SLM['commons/report/sectionReport.js'] || function () {
  const _exports = {};
  const { SectionReport } = window['SLM']['theme-shared/report/stage/sectionReport.js'];

  function initSectionReport() {
    $(function () {
      const report = new SectionReport(['slideshow', 'collection-list', 'custom-html', 'faqs', 'featured-collection', 'image-with-text', 'text-columns-with-images', 'video', 'featured-product', 'rich-text', 'sign-up-and-save', 'testimonials', 'blog', 'contact-form', 'image-banner', 'multi-media-splicing', 'contact-page', 'custom-page', 'map']);
      report.init();
    });
  }

  _exports.initSectionReport = initSectionReport;
  return _exports;
}();