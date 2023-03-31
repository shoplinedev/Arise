window.SLM = window.SLM || {};

window.SLM['stage/header/scripts/locale-currency.js'] = window.SLM['stage/header/scripts/locale-currency.js'] || function () {
  const _exports = {};
  const Cookie = window['js-cookie']['default'];
  const LocalizationForm = window['SLM']['theme-shared/components/localization/form.js'].default;
  const { t } = window['SLM']['theme-shared/utils/i18n.js'];
  const Toast = window['SLM']['commons/components/toast/index.js'].default;
  const Base = window['SLM']['commons/base/BaseClass.js'].default;
  const virtualReport = window['SLM']['commons/report/virtualReport.js'].default;

  const createCurrencyItemTemplate = (code, symbol, showSymbol) => {
    return `<li data-currency-code="${code}" data-show-symbol="${showSymbol}" data-currency-symbol="${symbol}">
	<span class="click">
		<span class="body5 notranslate">${showSymbol ? symbol : ''} ${code}</span>
	</span>
</li>`;
  };

  const createCurrencyListTemplate = (list, showSymbol) => {
    return list.map(({
      currencyCode,
      currencySymbol
    }) => createCurrencyItemTemplate(currencyCode, currencySymbol, showSymbol)).join('');
  };

  const toast = new Toast({
    content: 'content',
    className: 'header-toast',
    duration: 5000
  });

  class LocaleCurrency extends Base {
    constructor() {
      super();
      this.config = {
        namespace: 'stage:localeCurrency'
      };
      this.classes = {
        dropdownClass: 'dropdown__list',
        dropdownVisibleClass: 'dropdown__list--visible'
      };
      this.selectors = {
        localeButton: '.j-stage-locale',
        currencyButton: '.j-stage-currency',
        localeDrawerButton: '.j-locale-drawer-btn',
        countryDrawerButton: '.j-country-drawer-btn',
        currencyDrawerButton: '.j-currency-drawer-btn',
        countryButton: '.j-stage-country',
        countryContainer: '.locale-currency[data-country]',
        container: '.locale-currency',
        dropdownList: `.${this.classes.dropdownClass}`,
        localeContainer: '.locale-currency[data-locale]',
        mobileLocaleBtn: '.j-locale-drawer-btn',
        currencyContainer: '.locale-currency[data-currency]',
        currencySearchInput: '.j-stage-currency-search',
        currencyList: '.currency-list',
        noCurrencyFallback: '.stage-no-currency'
      };
      this.gteObserver = null;
      this.$setNamespace(this.config.namespace);
      this.localizationForm = new LocalizationForm();

      if ($(this.selectors.localeButton).length > 0) {
        this.initLocaleDropdown();
      }

      if ($(this.selectors.currencyButton).length > 0) {
        this.initCurrencyDropdown();
      }

      if ($(this.selectors.countryButton).length > 0) {
        this.bindDropdownClick(this.selectors.countryButton);
      }

      this.bindLanguageChange();
      this.bindCurrencySearch();
      this.bindCurrencyChange();
      this.bindCountryChange();
    }

    removeOpenAnimation() {
      const $countryButton = $(this.selectors.countryButton);
      const $localeButton = $(this.selectors.localeButton);
      const $currencyButton = $(this.selectors.currencyButton);

      if ($countryButton.length > 0) {
        $countryButton.removeClass('open-animation');
      }

      if ($localeButton.length > 0) {
        $localeButton.removeClass('open-animation');
      }

      if ($currencyButton.length > 0) {
        $currencyButton.removeClass('open-animation');
      }
    }

    bindDropdownClick(selector) {
      this.$on('click', selector, e => {
        const $dropdownContainer = $(e.target).parents('.locale-currency');
        const $dropdownList = $dropdownContainer.find(this.selectors.dropdownList);
        const hasDropdownVisibleClass = $dropdownList.hasClass(this.classes.dropdownVisibleClass);
        const $currentElem = $(e.currentTarget);
        this.removeOpenAnimation();
        $(e.currentTarget).toggleClass('open-animation', !hasDropdownVisibleClass);

        if ($dropdownList.hasClass(this.classes.dropdownVisibleClass)) {
          $dropdownList.removeClass(this.classes.dropdownVisibleClass);
          return;
        }

        $dropdownList.addClass(this.classes.dropdownVisibleClass);
        const tempEventType = `click.tempWrapperClick-${this.namespace}-${selector}`;
        this.$on(tempEventType, ({
          target
        }) => {
          if (!$dropdownContainer[0]) {
            return this.$off(tempEventType);
          }

          if (target !== $dropdownContainer[0] && !$dropdownContainer[0].contains(target)) {
            $dropdownList.removeClass(this.classes.dropdownVisibleClass);
            $currentElem.toggleClass('open-animation', false);
            this.$off(tempEventType);
          }
        });
      });
    }

    initLocaleDropdown() {
      this.bindDropdownClick(this.selectors.localeButton);
    }

    bindLanguageChange() {
      this.$on('click', `${this.selectors.localeContainer} li`, e => {
        this.removeOpenAnimation();
        const $target = $(e.currentTarget);
        const alias = $target.data('alias');
        const text = $target.data('name');
        virtualReport.reportSelectLang(e, alias);
        $(e.target).parents(this.selectors.dropdownList).removeClass(this.classes.dropdownVisibleClass);
        $(this.selectors.localeButton).find('span').text(text);
        $(this.selectors.localeDrawerButton).find('span').text(text);
        this.localizationForm.triggerLocaleChange(alias);
      });
    }

    bindCountryChange() {
      this.$on('click', `${this.selectors.countryContainer} li`, e => {
        this.removeOpenAnimation();
        const $target = $(e.currentTarget);
        const alias = $target.data('alias');
        const text = $target.data('name');

        if (window.location.search.includes('preview=2')) {
          toast.open(t('unvisiable.editorSwitchCountryTip'));
        }

        $(e.target).parents(this.selectors.dropdownList).removeClass(this.classes.dropdownVisibleClass);
        $(this.selectors.countryButton).find('span').text(text);
        $(this.selectors.countryDrawerButton).find('span').text(text);
        this.localizationForm.triggerCurrencyChange(alias);
      });
    }

    initCurrencyDropdown() {
      this.bindDropdownClick(this.selectors.currencyButton);
    }

    bindCurrencyChange() {
      this.$on('click', `${this.selectors.currencyContainer} li`, e => {
        this.removeOpenAnimation();
        const $target = $(e.currentTarget);
        const code = $target.data('currency-code');
        const symbol = $target.data('currency-symbol');
        const showSymbol = $target.parents(this.selectors.currencyList).data('show-symbol');
        const currencyText = `${showSymbol ? symbol : ''} ${code}`;
        virtualReport.reportSelectCurrency(e, code);
        Cookie.set('currency_code_userSetting', code);
        window.SL_State.set('currencyCode', code);
        window.SL_EventBus.emit('global:currency:format', {
          lang: window.SL_State.get('request.locale'),
          currencyCode: code
        });
        window.Shopline.event.emit('Currency::Format', {
          lang: window.SL_State.get('request.locale'),
          currencyCode: code
        });
        $(e.target).parents(this.selectors.dropdownList).removeClass(this.classes.dropdownVisibleClass);
        $(this.selectors.currencyButton).find('span').text(currencyText);
        $(this.selectors.currencyDrawerButton).find('.currency-symbol').text(symbol);
        $(this.selectors.currencyDrawerButton).find('.currency-code').text(code);
      });
    }

    bindCurrencySearch() {
      this.$on('input', this.selectors.currencySearchInput, e => {
        const {
          value: searchValue
        } = e.target;
        const allCurrencies = window.SL_State.get('currencyConfig.referenceCurrencies');
        let str = '';
        const container = $(e.target).parents(this.selectors.currencyContainer).find(this.selectors.currencyList);
        const showSymbol = container.data('show-symbol');

        if (!searchValue) {
          str = createCurrencyListTemplate(allCurrencies, showSymbol);
        } else {
          const filterList = allCurrencies.filter(item => {
            const val = item.currencyCode.toLowerCase();

            if (val.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }

            return false;
          });

          if (filterList.length) {
            str = createCurrencyListTemplate(filterList, showSymbol);
          }
        }

        if (!str) {
          container.hide();
          container.siblings(this.selectors.noCurrencyFallback).show();
          return;
        }

        container.show();
        container.html(str);
        container.siblings(this.selectors.noCurrencyFallback).hide();
      });
    }

    off() {
      this.$offAll();
    }

  }

  let instance = new LocaleCurrency();
  $(document).on('shopline:section:load', () => {
    instance.off();
    instance = new LocaleCurrency();
  });
  return _exports;
}();