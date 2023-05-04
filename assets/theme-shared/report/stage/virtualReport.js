window.SLM = window.SLM || {};

window.SLM['theme-shared/report/stage/virtualReport.js'] = window.SLM['theme-shared/report/stage/virtualReport.js'] || function () {
  const _exports = {};
  const { StageReport } = window['SLM']['theme-shared/report/stage/index.js'];
  const { virtualComponentEnum, sectionTypeEnum, virtualPageEnum } = window['SLM']['theme-shared/report/stage/const.js'];

  class VirtualReport extends StageReport {
    constructor() {
      super();
      this.defaultParams = { ...this.defaultParams,
        module: -999,
        component: -999,
        page: virtualPageEnum.fixedSction
      };
      this.headerElementSelector = {
        header: '.__sl-custom-track-stage-header',
        btnUser: '.__sl-custom-track-stage-header-user',
        btnCart: '.__sl-custom-track-stage-header-cart',
        btnSearch: '.__sl-custom-track-stage-header-search',
        announcementItem: '.__sl-custom-track-stage-header-announcementItem',
        newsletter: '.__sl-custom-track-stage-header-newsletter',
        btnNewsletter: '.__sl-custom-track-stage-header-newsletter-button',
        inputNewsletter: '.__sl-custom-track-stage-header-newsletter-input',
        searchSuggest: '.__sl-custom-track-stage-header-suggest-list',
        searchSuggestItem: '.__sl-custom-track-stage-header-suggest-list li'
      };
      this.footerElementSelector = {
        footer: '.__sl-custom-track-stage-footer',
        newsletter: '.__sl-custom-track-stage-footer-newsletter',
        btnNewsletter: '.__sl-custom-track-stage-footer-newsletter-button',
        inputNewsletter: '.__sl-custom-track-stage-footer-newsletter-input'
      };
      this.footerPromotionSelector = {
        footerPromotion: '.__sl-custom-track-stage-footerPromotion'
      };
      this.socialElementSelectorPrefix = '__sl-custom-track-stage-social-';
      this.commonElementSelector = {
        navItem: '.__sl-custom-track-stage-navItem',
        locale: '.__sl-custom-track-stage-locale',
        currency: '.__sl-custom-track-stage-currency'
      };
      this.suggestListShow = false;
    }

    inFooter(e) {
      const $target = $(e.target);
      const $footer = $target.closest(this.footerElementSelector.footer);
      const flag = $footer.length > 0;
      return flag;
    }

    bindHeaderReport() {
      const selMap = this.headerElementSelector;
      this.expose({
        selector: selMap.header,
        moreInfo: {
          module_type: sectionTypeEnum.header
        }
      });
      this.bindClick({
        selector: selMap.btnSearch,
        moreInfo: {
          component: virtualComponentEnum.search
        }
      });
      this.bindClick({
        selector: selMap.btnUser,
        moreInfo: {
          component: virtualComponentEnum.user
        }
      });
      this.bindClick({
        selector: selMap.btnCart,
        moreInfo: {
          component: virtualComponentEnum.cart
        }
      });
      this.bindClick({
        selector: selMap.announcementItem,
        moreInfo: {
          component: virtualComponentEnum.announcement
        }
      });
      this.bindSearchSuggestReport();
    }

    bindSocialReport() {
      const prefix = this.socialElementSelectorPrefix;
      this.bindClick({
        selector: 'a[href]',
        customHandler: (e, params) => {
          const $socialItem = $(e.currentTarget);
          const cls = $socialItem && $socialItem.attr('class') || '';
          const hasClass = cls.indexOf(prefix) >= 0;

          if (!$socialItem.length || !hasClass) {
            return;
          }

          const {
            classList
          } = $socialItem[0];
          const sel = Array.prototype.find.call(classList, cls => cls.startsWith(prefix));
          const social_media_type = sel.replace(prefix, '');
          const data = { ...params,
            social_media_type,
            component: virtualComponentEnum.socialItem,
            module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header
          };
          this.click(data);
        }
      });
    }

    bindNavReport() {
      this.bindClick({
        selector: this.commonElementSelector.navItem,
        customHandler: (e, params) => {
          const data = { ...params,
            component: virtualComponentEnum.navItem,
            module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header
          };
          this.click(data);
        }
      });
    }

    bindLocaleCurrencyReport() {
      this.bindClick({
        selector: this.commonElementSelector.locale,
        customHandler: (e, params) => {
          const data = { ...params,
            component: virtualComponentEnum.locale,
            module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header
          };
          this.click(data);
        }
      });
      this.bindClick({
        selector: this.commonElementSelector.currency,
        customHandler: (e, params) => {
          const data = { ...params,
            component: virtualComponentEnum.currency,
            module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header
          };
          this.click(data);
        }
      });
    }

    bindFooterReport() {
      this.expose({
        selector: this.footerElementSelector.footer,
        moreInfo: {
          module_type: sectionTypeEnum.footer
        }
      });
      this.bindFooterNewsLetter();
    }

    bindFooterPromotionReport() {
      this.expose({
        selector: this.footerPromotionSelector.footerPromotion,
        moreInfo: {
          module_type: sectionTypeEnum['footer-promotion']
        }
      });
    }

    bindFooterNewsLetter() {
      const component = virtualComponentEnum.newsletter;
      this.expose({
        selector: this.footerElementSelector.newsletter,
        moreInfo: {
          component
        }
      });
      this.bindClick({
        selector: this.footerElementSelector.btnNewsletter,
        moreInfo: {
          component
        }
      });
      this.bindInput({
        selector: this.footerElementSelector.inputNewsletter,
        moreInfo: {
          component
        }
      });
    }

    bindHeaderNewsLetter() {
      const component = virtualComponentEnum.newsletter;
      this.expose({
        selector: this.headerElementSelector.newsletter,
        moreInfo: {
          component
        }
      });
      this.bindClick({
        selector: this.headerElementSelector.btnNewsletter,
        moreInfo: {
          component
        }
      });
      this.bindInput({
        selector: this.headerElementSelector.inputNewsletter,
        moreInfo: {
          component
        }
      });
    }

    reportSelectLang(e, lang) {
      const params = {
        module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header,
        component: virtualComponentEnum.localeItem,
        language_type: lang
      };
      this.click(params);
    }

    reportSelectCurrency(e, currency) {
      const params = {
        module_type: this.inFooter(e) ? sectionTypeEnum.footer : sectionTypeEnum.header,
        component: virtualComponentEnum.currencyItem,
        currency_type: currency
      };
      this.click(params);
    }

    reportSearch(searchWord) {
      this.collect({
        component: virtualComponentEnum.search,
        event_name: 'Search',
        search_term: searchWord
      });
    }

    reportSearchSuggestItem(show) {
      const shouldView = !this.suggestListShow && show;

      if (shouldView) {
        this.collect({
          component: virtualComponentEnum.searchSuggest,
          event_name: 'View',
          action_type: 101
        });
      }

      this.suggestListShow = show;
    }

    bindSearchSuggestReport() {
      this.bindClick({
        selector: this.headerElementSelector.searchSuggestItem,
        moreInfo: {
          component: virtualComponentEnum.searchSuggest
        }
      });
    }

  }

  _exports.VirtualReport = VirtualReport;
  return _exports;
}();