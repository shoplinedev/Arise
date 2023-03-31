window.SLM = window.SLM || {};

window.SLM['product/detail/js/tabs.js'] = window.SLM['product/detail/js/tabs.js'] || function () {
  const _exports = {};
  const request = window['SLM']['theme-shared/utils/request.js'].default;
  const { shadowDomStyle } = window['SLM']['product/commons/js/createShadowDom.js'];
  const CUSTOM_PAGE_TYPE = 3;

  class Tabs {
    constructor({
      root
    }) {
      this.root = $(root);
      this.lang = 'default';
      this.showKey = 'tab0';
      this.init();
      this.requestCollapseTitle(this.ids);
      this.bindEvent();

      if (!this.tabs.hasClass('active')) {
        this.openTab(this.tabs.eq(0));
      }
    }

    init() {
      const tabs = this.root.find('.product-tabs-nav').find('.product-tabs-tab');
      this.tabs = tabs;
      this.contents = this.root.children('.product-tabs-content').children('.product-tabs-item');
      this.ids = [];
      tabs.each((_, el) => {
        const $el = $(el);
        const id = $el.data('id');

        if (id) {
          this.ids.push(id);
        }

        if ($el.hasClass('active')) {
          this.showKey = $el.data('key');
        }
      });
    }

    requestCollapseTitle(ids) {
      if (!ids || !ids.length) {
        return Promise.resolve();
      }

      const {
        lang
      } = this;
      return request({
        url: 'site/render/page/basic/infos',
        method: 'GET',
        params: {
          pageIds: ids.join(',')
        }
      }).then(res => {
        if (res && Array.isArray(res.data)) {
          const data = res.data.reduce((fin, item) => {
            const name = item.name ? item.name[lang] : '';
            return { ...fin,
              [item.id]: name
            };
          }, {});
          this.setCollapseTitle(data);
        }
      });
    }

    setCollapseTitle(data) {
      this.tabs.each((_, el) => {
        const title = data[$(el).data('id')];

        if (title) {
          $(el).text(title);
        }
      });
    }

    requestCollapseContent(id, content) {
      if (this.cacheRequest && this.cacheData[id]) {
        return Promise.resolve(this.cacheData[id]);
      }

      return request({
        url: `site/render/page/${CUSTOM_PAGE_TYPE}/${id}`,
        method: 'GET'
      }).then(res => {
        if (res && res.data) {
          this.setCollapseContent(res && res.data, content);
        }
      });
    }

    setCollapseContent(data, content) {
      const html = this.getCustomPageContent(data && data.htmlConfig);
      const shadow = $(content).children('.product-tabs-shadow');
      const shadowDom = shadow.get(0);
      const shadowRoot = shadowDom && shadowDom.attachShadow && shadowDom.attachShadow({
        mode: 'open'
      });
      $(shadowRoot).append(shadowDomStyle.clone());
      $(shadowRoot).append(html);
    }

    getCustomPageContent(pageConfig) {
      return `<div class="custom-page-render-container">${pageConfig}</div>`;
    }

    openTab(tab) {
      const key = tab.data('key');
      const id = tab.data('id');
      const {
        contents,
        tabs
      } = this;
      tabs.removeClass('active');
      tab.addClass('active');
      contents.hide();
      let content;
      contents.each((_, el) => {
        if ($(el).data('key') === key) {
          $(el).show();
          content = el;
          return true;
        }
      });

      if (!tab.prop('loaded')) {
        tab.prop('loaded', true);

        if (id) {
          this.requestCollapseContent(id, content);
        }
      }

      this.showKey = key;
    }

    bindEvent() {
      const that = this;
      const {
        tabs
      } = this;
      tabs.on('click', function () {
        const tab = $(this);
        const key = tab.data('key');

        if (that.showKey === key) {
          return;
        }

        tab.get(0).scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
          inline: 'center'
        });
        that.openTab(tab);
      });
    }

  }

  _exports.default = Tabs;
  return _exports;
}();